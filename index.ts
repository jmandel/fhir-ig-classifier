import { Command } from 'commander';
import { promises as fs } from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { VertexAI } from "@google-cloud/vertexai";
import { appendFile } from 'fs/promises';
import fetch from 'node-fetch';

const execAsync = promisify(exec);
const contextDir = 'context';

const program = new Command();

program
  .name('fhir-ig-classifier')
  .description('Analyzes and classifies FHIR Implementation Guides')
  .requiredOption('-i, --input <path>', 'path to input JSON file')
  .option(
    '--classify-full-content',
    'classify using full IG content instead of AI-generated analysis',
    false
  )
  .option(
    '--filter <name>',
    'only process IGs whose names (lowercase) contain all these parts (split on /)',
    ''
  )
  .version('1.0.0');

program.parse();
const options = program.opts();

const vertexAI = new VertexAI({
  project: "fhir-org-starter-project",
  location: "us-central1",
});

const generativeModelConfig = {
  model: "gemini-exp-1206",
  generation_config: {
    temperature: 0,
  }
}
const generativeModel = vertexAI.getGenerativeModel(generativeModelConfig);

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
    // Check if already cloned locally
    await fs.access(repoDir);
    console.log(`Repository already exists: ${repoUrl}`);
    return;
  } catch (error) {
    // Repo doesn't exist locally, check if it exists on GitHub before cloning
    try {
      const checkUrl = `https://api.github.com/repos/${org}/${repo}`;
      const response = await fetch(checkUrl, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      
      const data = await response.json();
      
      if (!data || data.message === 'Not Found') {
        throw new Error('Repository not found or not accessible');
      } else {
        console.log(`Repository exists: ${repoUrl}`, data);
      }

      console.log(`Cloning repository: ${repoUrl}`);
      await execAsync(`GIT_TERMINAL_PROMPT=0 git clone --depth 1 ${repoUrl} ${repoDir}`);
    } catch (cloneError) {
      await logIssue(org, repo, `Failed to clone repository: ${cloneError.message}`);
      throw cloneError;
    }
  }
}

function getFormattedName(org: string, repo: string) {
  return `${org}_SLASH_${repo}`;
}

interface ContextFile {
  path: string;
  content: string;
}

function getFileScore(file: ContextFile): number {
  const lowerPath = file.path.toLowerCase();
  let score = 0;  
  
  // Deprioritize temp/archive/draft files
  if (lowerPath.includes('/temp') || 
      lowerPath.includes('/archiv') || 
      lowerPath.includes('/example') || 
      lowerPath.includes('/draft')) {
    score -= 10;
  }

  if (lowerPath.includes('/pagecontent')) {
    score += 10;
  }
  
  // Prioritize by extension
  const ext = path.extname(lowerPath);
  switch (ext) {
    case '.md': score += 3; break;
    case '.fsh': score += 2; break;
    case '.plantuml': score += 1; break;
  }

  return score;
}

async function collectFiles(dir: string, allowedExtensions: string[]): Promise<ContextFile[]> {
  const files: ContextFile[] = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    if (entry.name.toLowerCase() === 'ignorewarnings.txt') continue;
    
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subDirFiles = await collectFiles(fullPath, allowedExtensions);
      files.push(...subDirFiles);
    } else if (entry.isFile() && allowedExtensions.includes(path.extname(entry.name))) {
      const content = await fs.readFile(fullPath, 'utf-8');
      const relativePath = fullPath.replace(/^.*?repos\/[^/]+\//, '');
      files.push({
        path: fullPath,
        content: `// File: ${relativePath}\n\n${content}\n\n---\n\n`
      });
    }
  }
  
  return files;
}

async function createContextFile(repoDir: string, repo: string, org: string) {
  await fs.mkdir(contextDir, { recursive: true });
  const formattedName = getFormattedName(org, repo);
  const contextFilePath = path.join(contextDir, formattedName + '.md');

  const allowedExtensions = ['.md', '.fsh', '.plantuml', '.yaml', '.yml'];
  const maxSize = 500 * 1024; // 500KB in bytes

  try {
    // Collect all files
    const files: ContextFile[] = [];
    
    // Get sushi-config first
    const rootEntries = await fs.readdir(repoDir, { withFileTypes: true });
    const sushiConfig = rootEntries.find(entry => 
      entry.isFile() && 
      (entry.name === 'sushi-config.yaml' || entry.name === 'sushi-config.yml')
    );

    if (sushiConfig) {
      const fullPath = path.join(repoDir, sushiConfig.name);
      const content = await fs.readFile(fullPath, 'utf-8');
      files.push({
        path: fullPath,
        content: `File: ${fullPath}\n\n${content}\n\n---\n\n`
      });
    }

    // Collect files from input directory
    const inputDir = path.join(repoDir, 'input');
    await fs.access(inputDir);
    const inputFiles = await collectFiles(inputDir, allowedExtensions);
    
    // Sort input files by score and path
    const sortedFiles = inputFiles.sort((a, b) => {
      const scoreA = getFileScore(a);
      const scoreB = getFileScore(b);
      
      if (scoreA !== scoreB) {
        return scoreB - scoreA; // Higher scores first
      }
      
      // If scores are equal, sort by ,path
      return a.path.localeCompare(b.path);
    });

    // First determine which files we can include within size limit
    let currentSize = files[0]?.content ? Buffer.byteLength(files[0].content, 'utf-8') : 0;
    const includedFiles: ContextFile[] = files[0] ? [files[0]] : [];
    
    for (const file of sortedFiles) {
      const fileSize = Buffer.byteLength(file.content, 'utf-8');
      if (currentSize + fileSize < maxSize) {
        includedFiles.push(file);
        currentSize += fileSize;
      } else {
        console.log(`Reached ${maxSize} byte limit. Stopping file collection.`);
        break;
      }
    }

    // Now sort included files lexicographically by path (except sushi-config stays first)
    const sushiConfigFile = includedFiles[0];
    const sortedIncluded = includedFiles.slice(1)
    console.log(sortedFiles.map(f => f.path));
      // .sort((a, b) => a.path.localeCompare(b.path));
    
    // Write files in final order
    let outputContent = '';
    if (sushiConfigFile) {
      outputContent = sushiConfigFile.content;
    }
    outputContent += sortedIncluded.map(f => f.content).join('');

    await fs.writeFile(contextFilePath, outputContent);
    console.log(`Context file created: ${contextFilePath}`);
  } catch (error) {
    await logIssue(org, repo, `Error creating context file: ${error}`);
    throw error;
  }
}

async function analyzeRepo(contextFilePath: string, repo: string, org: string) {
  try {
    const formattedName = getFormattedName(org, repo);
    const analysisPath = path.join('analysis', `${formattedName}.md`);

    // Check if analysis already exists
    try {
      const existingAnalysis = await fs.readFile(analysisPath, 'utf-8');
      console.log(`Reusing existing analysis for ${formattedName}`);
      return existingAnalysis;
    } catch (err) {
      // Analysis doesn't exist, continue with generation
    }

    const content = await fs.readFile(contextFilePath, 'utf-8');

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
    console.log('Generated new analysis:', analysis);

    await fs.mkdir('analysis', { recursive: true });
    await fs.writeFile(analysisPath, analysis);
    return analysis;

  } catch (error) {
    await logIssue(org, repo, `Error analyzing repo: ${error}`);
    return "";
  }
}

const classificationScheme = `# Multi-Axial Hierarchical Classification of HL7 IGs

## Axis 1: Primary Functional Domain

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

-   **Data Exchange:** IGs primarily focused on standardizing mechanisms for interoperability.
-   **Data Modeling:** IGs defining core data models or profiles for specific domains or use cases.
      Note: Data Modeling IGs focus on *what* the data looks like (profiles, extensions, value sets), while Data Exchange IGs focus on *how* data is shared (APIs, operations, transactions).
-   **Knowledge Representation:** IGs focused on representing clinical knowledge, guidelines, or decision support logic.
-   **Security & Privacy:** IGs defining security and privacy mechanisms for data exchange.
-   **Workflow Support:** IGs defining workflows and interactions between systems or actors.

## Axis 4: Geographic Scope

-   **Universal Realm:** IGs intended for international use.
-   **National Jurisdictions:** Including but not limited to:
    -   Australia
    -   Belgium
    -   Brazil
    -   Canada
    -   Denmark
    -   Finland
    -   France
    -   Germany
    -   India
    -   Italy
    -   Japan
    -   Netherlands
    -   New Zealand
    -   Norway
    -   Singapore
    -   Sweden
    -   Switzerland
    -   United Kingdom
    -   United States
    -   [Other national jurisdictions as applicable]
-   **Regional:**
    -   European Union
    -   Nordic Council
    -   Asia-Pacific Region
    -   [Other regional groupings as applicable]

## Axis 5: Stakeholders

-   **Technical Implementers:**
    -   EHR Vendors
    -   Device Manufacturers
    -   Analytics Providers
    -   System Integrators
    -   Health IT Development Teams

-   **Healthcare Provider Organizations:**
    -   Hospital IT Departments
    -   Health System Integration Teams
    -   Clinical Care Teams
    -   Laboratory Systems Teams
    -   Quality Management Teams

-   **Public Health Organizations:**
    -   Public Health Agencies
    -   Disease Surveillance Teams
    -   Epidemiologists
    -   Registry Systems
    -   Research Platforms

-   **Administrative Organizations:**
    -   Insurance Companies
    -   Health Plans
    -   Benefits Management Systems
    -   Claims Processing Teams
    -   Healthcare Administrators

-   **Standards Organizations:**
    -   Government Agencies
    -   Standards Development Organizations
    -   Certification Bodies

-   **Patient-Facing Stakeholders:**
    -   Patients
    -   Family Members
    -   Patient Advocates
    -   Care Coordinators


`;

async function classifyRepo(repo: string, org: string, analysis: string, useFullContext: boolean = false) {
  const formattedName = getFormattedName(org, repo);
  const classificationPath = path.join('classifications', `${formattedName}.json`);

  // Check if classification already exists
  try {
    await fs.access(classificationPath);
    console.log(`Reusing existing classification for ${formattedName}`);
    return;
  } catch (err) {
    // Classification doesn't exist, continue with generation
  }

  let contentToClassify = analysis;
  
  if (useFullContext) {
    const contextFilePath = path.join(contextDir, `${formattedName}.md`);
    try {
      contentToClassify = await fs.readFile(contextFilePath, 'utf-8');
    } catch (error) {
      console.warn(`Warning: Could not read context file for ${repo}, falling back to analysis`);
    }
  }

  const classificationPrompt = `
${classificationScheme}

Based on the following ${useFullContext ? 'content' : 'analysis'} of the FHIR Implementation Guide "${repo}", classify it according to the multi-axial system above. Focus specifically on what this IG defines or specifies - not what it references or depends on.

Classification Guidelines:
1. Score each category's applicability from 0 (not applicable) to 1.0 (perfectly applicable)
2. ONLY output scores >= 0.25; completely omit any categories scoring below 0.25
3. Use general categories when multiple sub-categories are represented:
   - If an IG defines profiles for cardiology (0.8), oncology (0.7), and ophthalmology (0.6), score "Clinical Care > Specialty Care" as 0.8
   - If it only defines cardiology profiles, score "Clinical Care > Specialty Care > Cardiology" as 0.9
4. More specific matches should get higher scores:
   - A pure cardiology IG would score "Clinical Care > Specialty Care > Cardiology" as 0.9-1.0
   - An IG that touches on cardiology among other things might score it 0.3-0.5

Provide the output as a JSON object with the following structure, OMITTING any categories scoring below 0.25:
{
  "rationale": "~300 word markdown-formatted analysis thinking through the core functionality",
  "scores": {
    "Functional Domain": {
      "Clinical Care > Specialty Care > Cardiology": 0.9,
      "Clinical Care > General Clinical Care": 0.4
    },
    "HL7 Standard": {
      "FHIR > FHIR R4": 0.95
    },
    "Scope/Purpose": {
      "Data Modeling": 0.8,
      "Data Exchange": 0.4
    },
    "Geographic Scope": {
      "National Jurisdictions > United States": 0.7
    },
    "Stakeholders": {
      "Healthcare Provider Organizations > Clinical Care Teams": 0.85,
      "Technical Implementers > EHR Vendors": 0.6
    }
  }
}

Sort scores within each category from highest to lowest. Each path should be written from general to specific (e.g., "Clinical Care > Specialty Care > Cardiology"). Use ">" to separate levels in the hierarchy. The rationale should focus on the concrete artifacts and specifications this IG creates. Do not include any markdown formatting or explanation text, just output the JSON object.

Content:
${contentToClassify}
`;

  const request = {
    contents: [
      { role: 'user', parts: [{ text: classificationPrompt }] },
    ]
  };

  try {
    const response = await generativeModel.generateContent(request);
    let classification = response.response.candidates?.[0].content.parts[0].text || "{}";
    
    // Clean up the response to ensure it's valid JSON
    classification = classification.trim();
    if (classification.startsWith('```json')) {
      classification = classification.replace(/```json\n?/, '').replace(/\n?```$/, '');
    }
    
    // Parse JSON, add metadata, and reformat
    const jsonObj = JSON.parse(classification);
    jsonObj.meta = generativeModelConfig;
    const formattedJson = JSON.stringify(jsonObj, null, 2);
    
    console.log(`Classification for ${repo}:\n`, formattedJson);

    await fs.mkdir('classifications', { recursive: true });
    await fs.writeFile(classificationPath, formattedJson);
  } catch (error) {
    await logIssue(org, repo, `Error classifying repo: ${error}`);
  }
}

async function main() {
  const data = JSON.parse(await fs.readFile(options.input, 'utf-8'));
  const githubUrls: string[] = [];
  const filterParts = options.filter.toLowerCase().split('/').filter(Boolean);

  for (const guide of data.guides) {
    if (guide['ci-build'] && guide['ci-build'].match(/^https?:\/\/build\.fhir\.org\/ig\//)) {
      const parts = guide['ci-build'].replace(/^https?:\/\/build\.fhir\.org\/ig\//, '').split('/');
      if (parts.length >= 2) {
        const org = parts[0];
        const repo = parts[1];

        // Skip if filter is active and doesn't match
        if (filterParts.length > 0) {
          const igName = `${org}/${repo}`.toLowerCase();
          if (!filterParts.every(part => igName.includes(part))) {
            continue;
          }
        }

        const formattedName = getFormattedName(org, repo);
        const repoUrl = `https://github.com/${org}/${repo}`;
        const repoDir = path.join('repos', formattedName);

        githubUrls.push(repoUrl);
        
        try {
          await cloneOrPullRepo(repoUrl, repoDir, org, repo);
          await createContextFile(repoDir, repo, org);

          const contextFilePath = path.join(contextDir, `${formattedName}.md`);
          let analysis = "";
          
          // Only generate analysis if we're not using full content
          if (!options.classifyFullContent) {
            analysis = await analyzeRepo(contextFilePath, repo, org);
          }
          
          await classifyRepo(repo, org, analysis, options.classifyFullContent);
        } catch (error) {
          await logIssue(org, repo, `Processing failed: ${error.message}`);
          continue;
        }
      }
    }
  }

  console.log('GitHub URLs:');
  githubUrls.forEach(url => console.log(url));
}

// Only run if this is the main module
if (require.main === module) {
  main().catch(console.error);
}
