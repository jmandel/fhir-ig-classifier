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
  .option(
    '--model <name>',
    'override the default Vertex AI model name',
    'gemini-exp-1206'
  )
  .option('--force', 'force regeneration of all files (context, analysis, and classification)')
  .option('--force-context', 'force regeneration of context files')
  .option('--force-analysis', 'force regeneration of analysis files')
  .option('--force-classification', 'force regeneration of classification files')
  .version('1.0.0');

program.parse();
const options = program.opts();

const vertexAI = new VertexAI({
  project: "fhir-org-starter-project",
  location: "us-central1",
});

const generativeModelConfig = {
  model: options.model,
  generation_config: {
    temperature: 0,
  }
}
const generativeModel = vertexAI.getGenerativeModel(generativeModelConfig);

const analysisPrompt = `# FHIR IG Analysis
Analyze this FHIR Implementation Guide (IG) and provide a focused summary of its key aspects. Emphasize concrete specifications while capturing the broader context and significance.

## Technical Essence
Write a single dense paragraph that would enable another FHIR expert to recreate this IG's core functionality from scratch. Focus on the essential design decisions, resource patterns, extensions, and technical approaches that define this IG's unique contribution. Include enough specific technical detail that someone could implement a simplified but functionally similar version without access to the original IG. Assume deep FHIR knowledge but no domain expertise.

## Core Purpose & Scope
- Primary interoperability challenges this IG addresses
- Key clinical/business problems it solves
- Intended scope and boundaries

## Technical Foundation
Highlight the main technical building blocks:
- Core profiles and extensions
- Notable operations and interactions
- Key terminology and value sets
- Significant patterns and constraints

## Implementation Approach
Key aspects of how the IG is meant to be implemented:
- Critical workflows and interactions
- Important requirements and guardrails  
- Notable design choices and patterns

## Ecosystem Context
- Target systems and users
- Relationship to other standards/IGs
- Relevant jurisdictions or programs
- Primary use cases and scenarios

Provide clear, factual analysis based on explicit content in the IG. Focus on high-impact elements that would be most valuable to implementers and decision makers. Begin with "# $igName: Analysis".`;

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

  // Skip if context exists and no force flags
  if (!options.force && !options.forceContext) {
    try {
      await fs.access(contextFilePath);
      console.log(`Context file exists: ${contextFilePath}`);
      return;
    } catch (err) {
      // Context doesn't exist, continue with generation
    }
  }

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
    const promptPath = path.join('prompts', `${formattedName}_analysis.txt`);

    // Skip if analysis exists and no force flags
    if (!options.force && !options.forceAnalysis) {
      try {
        const existingAnalysis = await fs.readFile(analysisPath, 'utf-8');
        console.log(`Reusing existing analysis for ${formattedName}`);
        return existingAnalysis;
      } catch (err) {
        // Analysis doesn't exist, continue with generation
      }
    }

    const content = await fs.readFile(contextFilePath, 'utf-8');

    const request = {
      systemInstruction: "You are a health information technology expert.",
      contents: [
        { role: 'user', parts: [{ text: content + "\n\n" + analysisPrompt.replace("$igName", repo) }] },
      ]
    };

    // Save analysis prompt
    await fs.mkdir('prompts', { recursive: true });
    await fs.writeFile(promptPath, JSON.stringify(request, null, 2));

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

## Axis 1: HL7 Standard

-   **CDA:** IGs based on the Clinical Document Architecture standard.
-   **Cross-Paradigm:** IGs explicitly designed to support or bridge multiple HL7 standards.
-   **FHIR:** IGs based on the Fast Healthcare Interoperability Resources standard.
-   **v2:** IGs based on HL7 Version 2 messaging standard.
-   **v3:** IGs based on HL7 Version 3 messaging standard.

## Axis 2: Geographic Scope

-   **Universal:** IGs explicitly designed for international use, or IGs without any explicit geographic scope.
-   **National:** IGs explictly documented for use in these jurisdictions:
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
-   **Regional:** IGs explictly documented for use in these jurisdictions:
    -   Asia-Pacific Region
    -   European Union
    -   Nordic Council
    -   [Other regional groupings as applicable]

## Axis 3: Domain Focus

-   **Administrative:** Patient, practitioner, organization, location management
-   **Care Planning:** Care plans, protocols, clinical pathways, goals
-   **Clinical Data:** Patient data, observations, clinical findings, risk assessments
-   **Diagnostics:** Lab results, diagnostic reports, imaging, specimens
-   **Identity & Security:** Patient/provider identity, access control, consent, audit
-   **Medications:** Prescriptions, pharmacy, medication administration, immunizations
-   **Payment & Financial:** Claims, payments, value-based care, financial transactions
-   **Public Health:** Population health, disease reporting, immunization registries
-   **Quality & Reporting:** Quality measures, performance metrics, outcomes reporting
-   **Research:** Clinical trials, registries, research protocols
-   **Workflow:** Appointments, scheduling, tasks, referrals

## Axis 4: Implementation Approach

-   **Data Profiles:** Defines core resources and extensions
-   **Decision Support:** Defines rules and algorithms
-   **Documents:** Defines document structures and composition
-   **Forms & UI:** Defines questionnaires and user interfaces
-   **Messaging:** Defines message structures and patterns
-   **REST APIs:** Defines RESTful endpoints and search parameters
-   **Services:** Defines service operations and workflows
-   **Subscriptions:** Defines subscription types and notification patterns
-   **Terminology:** Defines value sets and code systems

## Axis 5: Implementers
-   **EHR Systems:** Electronic Health Record system vendors and developers
-   **PHR Systems:** Personal Health Record system developers
-   **Payer Systems:** Healthcare insurance and claims processing systems
-   **Pharmacy Systems:** Pharmacy management and medication systems
-   **Lab Systems:** Laboratory information and order management systems
-   **Imaging Systems:** Radiology and medical imaging systems
-   **Public Health Systems:** Disease surveillance and reporting systems
-   **Clinical Decision Support:** Clinical guidance and decision support tools
-   **Research Platforms:** Clinical research and trial management platforms

## Axis 6: Users & Stakeholders
-   **Clinical Care Teams:** Healthcare providers and clinical staff
-   **Healthcare Administrators:** Administrative and management staff
-   **Patients and Caregivers:** Patients, families, and care coordinators
-   **Payers:** Insurance companies and health plans
-   **Public Health Agencies:** Public health departments and surveillance teams
-   **Research Organizations:** Clinical research teams and trial coordinators
-   **Government Agencies:** Regulatory and oversight organizations
`;

async function classifyRepo(repo: string, org: string, analysis: string, useFullContext: boolean = false) {
  const formattedName = getFormattedName(org, repo);
  const classificationPath = path.join('classifications', `${formattedName}.json`);
  const promptPath = path.join('prompts', `${formattedName}_classification.txt`);

  // Skip if classification exists and no force flags
  if (!options.force && !options.forceClassification) {
    try {
      await fs.access(classificationPath);
      console.log(`Reusing existing classification for ${formattedName}`);
      return;
    } catch (err) {
      // Classification doesn't exist, continue with generation
    }
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

Based on the following ${useFullContext ? 'content' : 'analysis'} of the FHIR Implementation Guide "${repo}", classify it according to the multi-axial system above. Focus on what is explicitly stated or directly demonstrated in the IG content.

Classification Guidelines:
1. Score each category from 0 (not applicable) to 1.0 (perfectly applicable) using these criteria:
   - 1.0: Primary focus with comprehensive coverage (e.g., a medication IG that fully defines medication resources, workflows, and terminology)
   - 0.8: Major focus with substantial coverage (e.g., defines multiple related resources and implementation patterns)
   - 0.6: Significant focus with clear specifications (e.g., defines specific profiles and requirements)
   - 0.4: Moderate focus with direct support (e.g., includes dedicated sections or notable components)
   - 0.2: Minor but explicit focus (e.g., includes specific requirements or extensions)
   - 0.0: No focus or only tangential support (e.g., references, inferences, or assumptions only)

2. For hierarchical categories:
   - Score both parent and child levels when applicable
   - Example: A FooCountry national IG would score only "National > FooCountry"
3. Evidence requirements:
   - Only score categories that are mentioned or demonstrated in the IG
   - For Geographic Scope: Look for explicit jurisdiction statements
   - For HL7 Standard: Use the stated FHIR version or standards
   - For Domain Focus: Consider the domains the IG actively supports
   - For Implementation: Score only the technical components actually described
   - For Stakeholders: Include only identified

Provide the output as a JSON object with the following structure:
{
  "summary": "One-line statement of this IG's fundamental purpose and reason for existing",
  "scores": {
    "HL7 Standard": { // GIST: What base standard(s) does this IG implement or extend?
      "summary": "Brief explanation of how/why this IG uses these standards",
      // Score 1.0 for base FHIR IGs, also score other standards if explicitly bridged/supported
      // CDA: Clinical Document Architecture support or conversion
      // Cross-Paradigm: Explicitly bridges multiple standards
      // FHIR: Primary FHIR-based implementation guide
      // v2: HL7 Version 2 support or conversion
      // v3: HL7 Version 3 support or conversion
      "FHIR": 1.0
    },
    "Geographic Scope": { // GIST: What is the explicit intended geographic coverage/jurisdiction for implementation?
      "summary": "Key details about stated geographic applicability and jurisdictional context",
      // Universal: For IGs designed for international use or without geographic constraints
      // National: Use "National > CountryName" format for country-specific IGs
      // Regional: Use "Regional > RegionName" for multi-country regional IGs
      // Score based on explicitly stated jurisdictions in IG -- populate ONLY ONE GEOGRAPHIC SCOPE.
      "National > FooCountry": 1.0
    },
    "Domain Focus": { // GIST: What healthcare domains or business areas does this IG primarily address?
      "summary": "Key aspects of the healthcare domains this IG addresses",
      // GIST: Core administrative data and processes for managing healthcare entities
      // Patient, provider, organization management
      "Administrative": 0.0,
      // GIST: Planning and tracking patient treatment over time
      // Treatment plans, clinical protocols, care pathways, goals
      "Care Planning": 0.0,
      // GIST: Direct patient health observations and status
      // Clinical observations, patient assessments, vital signs, problems/conditions
      "Clinical Data": 0.0,
      // GIST: Testing, imaging, and diagnostic procedures/results
      // Lab tests, imaging studies, diagnostic procedures, results reporting
      "Diagnostics": 0.0,
      // GIST: Security, privacy, and identity management
      // Authentication, authorization, consent management, data privacy
      "Identity & Security": 0.0,
      // GIST: Medication management across the full lifecycle
      // Medication orders, pharmacy workflows, drug codes, administration records
      "Medications": 0.0,
      // GIST: Financial and payment-related healthcare processes
      // Insurance claims, billing codes, payment processing, financial transactions
      "Payment & Financial": 0.0,
      // GIST: Population health monitoring and reporting
      // Disease surveillance, population health monitoring, reportable conditions
      "Public Health": 0.0,
      // GIST: Healthcare quality measurement and outcomes tracking
      // Quality measures, clinical metrics, outcomes reporting, performance indicators
      "Quality & Reporting": 0.0,
      // GIST: Clinical research and trial management
      // Clinical trials, research protocols, study data collection, cohort definitions
      "Research": 0.0,
      // GIST: Healthcare process and task management
      // Appointments, scheduling, clinical tasks, referrals, service requests
      "Workflow": 0.0
    },
    "Implementation Approach": { // GIST: What technical mechanisms and patterns does this IG define for implementation?
      "summary": "Overview of the key technical approaches used in this IG",
      // GIST: Core data structure definitions and constraints
      // Resource structure definitions, constraints, extensions, must-support elements
      "Data Profiles": 0.0,
      // GIST: Clinical reasoning and automated decision support
      // Clinical decision support rules, algorithms, knowledge artifacts
      "Decision Support": 0.0,
      // GIST: Clinical document structure and exchange
      // Document templates, compositions, narratives, document bundles
      "Documents": 0.0,
      // GIST: User interface and data collection
      // Questionnaires, structured forms, UI components, display hints
      "Forms & UI": 0.0,
      // GIST: Message-based information exchange
      // Message event definitions, message structures, transport protocols
      "Messaging": 0.0,
      // GIST: RESTful API interactions and queries
      // RESTful endpoints, search parameters, _includes, custom operations
      "REST APIs": 0.0,
      // GIST: Service-oriented operations and workflows
      // Custom operations, service interfaces, workflow definitions
      "Services": 0.0,
      // GIST: Event notification and data push patterns
      // Subscription channels, notification templates, event criteria
      "Subscriptions": 0.0,
      // GIST: Code systems and value set definitions
      // Code systems, value sets, concept maps, terminology bindings
      "Terminology": 0.0
    },
    "Implementers": { // GIST: What types of systems are expected to implement this IG?
      "summary": "Key points about the systems expected to implement this IG",
      // GIST: Electronic Health Record systems
      // Primary care, hospital, and specialty EHR systems
      "EHR Systems": 0.0,
      // GIST: Personal Health Record systems
      // Patient portals and personal health apps
      "PHR Systems": 0.0,
      // GIST: Insurance and claims systems
      // Claims processing, benefits management, prior authorization systems
      "Payer Systems": 0.0,
      // GIST: Pharmacy management systems
      // Retail pharmacy, hospital pharmacy, e-prescribing systems
      "Pharmacy Systems": 0.0,
      // GIST: Laboratory information systems
      // Clinical lab, pathology, and reference lab systems
      "Lab Systems": 0.0,
      // GIST: Medical imaging systems
      // PACS, RIS, and other imaging informatics systems
      "Imaging Systems": 0.0,
      // GIST: Public health reporting systems
      // Disease surveillance, immunization registries, reporting systems
      "Public Health Systems": 0.0,
      // GIST: Clinical decision support systems
      // Order sets, care pathways, clinical guidelines systems
      "Clinical Decision Support": 0.0,
      // GIST: Research data platforms
      // EDC, CTMS, and other research management systems
      "Research Platforms": 0.0
    },
    "Users & Stakeholders": { // GIST: Who are the primary users and stakeholders of implementations?
      "summary": "Key information about the intended users and stakeholders",
      // GIST: Healthcare providers and clinical staff
      // Physicians, nurses, therapists, and other care team members
      "Clinical Care Teams": 0.0,
      // GIST: Healthcare organization management
      // Practice managers, department heads, operations staff
      "Healthcare Administrators": 0.0,
      // GIST: Patients and their support network
      // Patients, families, caregivers, and care coordinators
      "Patients and Caregivers": 0.0,
      // GIST: Healthcare insurance organizations
      // Insurance companies, health plans, claims processors
      "Payers": 0.0,
      // GIST: Public health organizations
      // Health departments, disease surveillance teams
      "Public Health Agencies": 0.0,
      // GIST: Clinical research organizations
      // Research institutions, trial coordinators, data scientists
      "Research Organizations": 0.0,
      // GIST: Government regulatory bodies
      // Health departments, regulatory agencies, policy makers
      "Government Agencies": 0.0
    }
  }
}

Content:
${contentToClassify}
`;

  const request = {
    systemInstruction: "You are a health information technology expert, following the supplied guidelines accurately.",
    contents: [
      { role: 'user', parts: [{ text: classificationPrompt }] },
    ]
  };

  try {
    // Save classification prompt
    await fs.mkdir('prompts', { recursive: true });
    await fs.writeFile(promptPath, JSON.stringify(request, null, 2));

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
}

// Only run if this is the main module
if (require.main === module) {
  main().catch(console.error);
}
