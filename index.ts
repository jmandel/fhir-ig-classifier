import { promises as fs } from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { VertexAI } from "@google-cloud/vertexai";
import { appendFile } from 'fs/promises';

const execAsync = promisify(exec);
const contextDir = 'context';

const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Please provide the input file path as an argument.');
  process.exit(1);
}

const vertexAI = new VertexAI({
  project: "fhir-org-starter-project",
  location: "us-central1",
});

const generativeModel = vertexAI.getGenerativeModel({
  model: "gemini-pro-experimental",
  generation_config: {
    temperature: 0.7,
  }
});

const analysisPrompt = `# FHIR IG Analysis
Given the FHIR Implementation Guide (IG) source files above, provide a structured analysis addressing the following questions:

1. What is this IG trying to achieve, in what context, and for whom? Explain its objectives in simple terms.
2. How does this IG improve upon previous approaches? (Use only information from the input files; avoid speculation.)
3. What are the key features and technical approaches of this IG?
4. How does this IG relate to broader healthcare standards and regulations?
5. Who are the primary users or beneficiaries of this IG, including patients if applicable?

Provide concise, factual responses to each question based on the content of the IG. Aim for clarity and precision in your analysis. Begin with "# $igName: Analysis" and do not output anything other than the analysis.`;

async function logIssue(org: string, repo: string, error: any) {
  const timestamp = new Date().toISOString();
  const formattedName = getFormattedName(org, repo);
  const logMessage = `[${timestamp}] ${formattedName}: ${error.message || error}\n`;
  await appendFile('issues.log', logMessage);
}

async function cloneOrPullRepo(repoUrl: string, repoDir: string, org: string, repo: string) {
  try {
    await fs.access(repoDir);
    console.log(`Updating repository: ${repoUrl}`);
    await execAsync('git pull', { cwd: repoDir });
  } catch (error) {
    try {
      console.log(`Cloning repository: ${repoUrl}`);
      await execAsync(`git clone --depth 1 ${repoUrl} ${repoDir}`);
    } catch (cloneError) {
      await logIssue(org, repo, `Failed to clone/pull repository: ${cloneError.message}`);
      throw cloneError;
    }
  }
}

function getFormattedName(org: string, repo: string) {
  return `${org}_SLASH_${repo}`;
}

async function createContextMenuFile(repoDir: string, repo: string, org: string) {
  await fs.mkdir(contextDir, { recursive: true });
  const formattedName = getFormattedName(org, repo);
  const contextFilePath = path.join(contextDir, `${formattedName}_context.md`);

  const inputDir = path.join(repoDir, 'input');
  let fileContent = '';
  const allowedExtensions = ['.md', '.fsh', '.plantuml'];
  const maxSize = 500 * 1024; // 500KB in bytes
  let currentSize = 0;

  async function processDirectory(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const sortedEntries = entries
      .filter(entry => entry.name.toLowerCase() !== 'ignorewarnings.txt')
      .sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory()) {
          return -1;
        } else if (!a.isDirectory() && b.isDirectory()) {
          return 1;
        } else {
          return a.name.localeCompare(b.name);
        }
      });

    for (const entry of sortedEntries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (entry.isFile() && allowedExtensions.includes(path.extname(entry.name))) {
        const content = await fs.readFile(fullPath, 'utf-8');
        const entryContent = `File: ${fullPath}\n\n${content}\n\n---\n\n`;
        const entrySize = Buffer.byteLength(entryContent, 'utf-8');

        if (currentSize + entrySize < maxSize) {
          fileContent += entryContent;
          currentSize += entrySize;
        } else {
          console.log(`Reached 500KB limit. Stopping file processing.`);
          return; 
        }
      }
    }
  }

  try {
    await fs.access(inputDir);
    await processDirectory(inputDir);
    await fs.writeFile(contextFilePath, fileContent);
    console.log(`Context file created: ${contextFilePath}`);
  } catch (error) {
    await logIssue(org, repo, `Error creating context file: ${error}`);
    throw error;
  }
}

async function analyzeRepo(contextFilePath: string, repo: string, org: string) {
  try {
    const content = await fs.readFile(contextFilePath, 'utf-8');
    const formattedName = getFormattedName(org, repo);

    const request = {
      systemInstruction: "You are a health information technology expert.",
      contents: [
        { role: 'user', parts: [{ text: content + "\n\n" + analysisPrompt.replace("$igName", repo) }] },
      ]
    };

    await fs.mkdir('prompts', { recursive: true });
    await fs.writeFile(path.join('prompts', `${formattedName}.txt`), JSON.stringify(request, null, 2));

    const response = await generativeModel.generateContent(request);
    let analysis = response.response.candidates?.[0].content.parts[0].text || "";
    console.log('Initial Analysis:', analysis);

    await fs.mkdir('analysis', { recursive: true });
    await fs.writeFile(path.join('analysis', `${formattedName}.md`), analysis);
    return analysis;

  } catch (error) {
    await logIssue(org, repo, `Error analyzing repo: ${error}`);
    return "";
  }
}

const classificationScheme = `# Multi-Axial Hierarchical Classification of HL7 IGs

## Axis 1: Primary Domain

-   **Clinical Care:** IGs focused on direct patient care, care coordination, and clinical workflows.
    -   **Specialty Care:** IGs tailored to specific medical specialties.
        -   Cardiology
        -   Oncology
        -   Ophthalmology
        -   Dental
        -   Radiology
    -   **General Clinical Care:** IGs applicable across various clinical settings.
        -   Patient Summaries
        -   Care Plans
        -   Clinical Decision Support
        -   Medication Management
        -   Patient Engagement
-   **Public Health:** IGs supporting public health surveillance, reporting, and response.
    -   Disease Reporting
    -   Immunization
    -   Environmental Health
-   **Research:** IGs facilitating clinical research, data collection, and analysis.
    -   Clinical Trials
    -   Genomics
    -   Real-World Data
    -   Registries
-   **Administrative & Financial:** IGs streamlining administrative and financial processes in healthcare.
    -   Insurance and Billing
    -   Prior Authorization
    -   Provider Directories
    -   Risk Adjustment
    -   Value-Based Performance Reporting
-   **Infrastructure & Foundational:** IGs defining core technical specifications, cross-cutting concerns, or foundational elements used by other IGs.
    -   Security and Privacy
    -   Terminology and Value Sets
    -   Document and Message Exchange
    -   Device Communication
    -   Cross-Version Mapping

## Axis 2: HL7 Standard

-   **FHIR:** IGs based on the Fast Healthcare Interoperability Resources standard.
    -   FHIR R4
    -   FHIR R5
-   **CDA:** IGs based on the Clinical Document Architecture standard.
-   **v2:** IGs based on HL7 Version 2 messaging standard.
-   **v3:** IGs based on HL7 Version 3 messaging standard.
-   **Cross-Paradigm:** IGs that support or bridge multiple HL7 standards.

## Axis 3: Scope/Purpose

-   **Data Exchange:** IGs primarily focused on standardizing data elements and formats for interoperability.
-   **Workflow Support:** IGs defining workflows and interactions between systems or actors.
-   **Knowledge Representation:** IGs focused on representing clinical knowledge, guidelines, or decision support logic.
-   **Data Modeling:** IGs defining core data models or profiles for specific domains or use cases.
-   **Security & Privacy:** IGs defining security and privacy mechanisms for data exchange.

## Axis 4: Geographic Scope

-   **US Realm:** IGs specifically designed for the US healthcare context.
-   **Universal Realm:** IGs intended for international use.
-   **Other Regions (please specify):** IGs tailored to specific countries or regions (if applicable; name the country or region).

## Axis 5: Data Source

-   **EHR-Centric:** IGs primarily focused on data originating from Electronic Health Records.
-   **Patient-Generated:** IGs focused on data collected directly from patients (e.g., through apps, devices).
-   **Payer-Centric:** IGs primarily focused on data originating from payers.
-   **Laboratory-Centric:** IGs primarily focused on data originating from laboratories.
-   **Device-Centric:** IGs primarily focused on data originating from medical devices.
-   **Registry-Centric:** IGs primarily focused on data originating from registries.
-   **Mixed/Other:** IGs that involve data from multiple sources or don't fit neatly into the above categories.

## Axis 6: Maturity Level

-   **Draft/Trial Use:** IGs in development or early stages of implementation.
-   **Normative/Standard:** IGs that have been formally balloted and approved as standards.

## Example Output

\`\`\`json
{
  "repoName": {
    "Primary Domain": ["Clinical Care", "Specialty Care", "Cardiology"],
    "HL7 Standard": ["FHIR", "FHIR R4"],
    "Scope/Purpose": ["Data Exchange", "Workflow Support"],
    "Geographic Scope": ["US Realm"],
    "Data Source": ["EHR-Centric"],
    "Maturity Level": ["Draft/Trial Use"]
  }
}
\`\`\`
`;

async function classifyRepo(repo: string, org: string, analysis: string) {
  const formattedName = getFormattedName(org, repo);
  const classificationPrompt = `
${classificationScheme}

Based on the following analysis of the FHIR Implementation Guide "${repo}", classify it according to the multi-axial system above. Provide the output in JSON format, including all applicable categories for each axis.

Analysis:
${analysis}

JSON Output:
`;

  const request = {
    contents: [
      { role: 'user', parts: [{ text: classificationPrompt }] },
    ]
  };

  try {
    const response = await generativeModel.generateContent(request);
    const classification = response.response.candidates?.[0].content.parts[0].text || "";
    console.log(`Classification for ${repo}:\n`, classification);

    await fs.mkdir('classifications', { recursive: true });
    await fs.writeFile(path.join('classifications', `${formattedName}.json`), classification);
  } catch (error) {
    await logIssue(org, repo, `Error classifying repo: ${error}`);
  }
}

async function main() {
  const data = JSON.parse(await fs.readFile(inputFile, 'utf-8'));
  const githubUrls: string[] = [];

  for (const guide of data.guides) {
    if (guide['ci-build'] && guide['ci-build'].startsWith('http://build.fhir.org/ig/')) {
      const parts = guide['ci-build'].replace('http://build.fhir.org/ig/', '').split('/');
      if (parts.length >= 2) {
        const org = parts[0];
        const repo = parts[1];
        const formattedName = getFormattedName(org, repo);
        const repoUrl = `https://github.com/${org}/${repo}`;
        const repoDir = path.join('repos', formattedName);

        githubUrls.push(repoUrl);
        
        try {
          await cloneOrPullRepo(repoUrl, repoDir, org, repo);
          await createContextMenuFile(repoDir, repo, org);

          const contextFilePath = path.join(contextDir, `${formattedName}_context.md`);
          const analysis = await analyzeRepo(contextFilePath, repo, org);
          await classifyRepo(repo, org, analysis);
        } catch (error) {
          await logIssue(org, repo, `Processing failed: ${error.message}`);
          continue; // Continue with next repo even if this one fails
        }
      }
    }
  }

  console.log('GitHub URLs:');
  githubUrls.forEach(url => console.log(url));
}

main().catch(console.error);