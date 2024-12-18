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

## Technical Essence
Write a single dense paragraph that would enable another FHIR expert to recreate this IG's core functionality from scratch. Focus on the essential design decisions, resource patterns, and technical approaches that define this IG's unique contribution. Include enough specific technical detail that someone could implement a simplified but functionally similar version without access to the original IG. Assume deep FHIR knowledge and write in condensed high-impact prose..

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

interface AxisClassification {
  summary: string;
  scores: Record<string, number>;
}

interface ClassificationResult {
  axis: string;
  result: AxisClassification;
}

const DEFAULT_PARALLEL_WORKERS = 3;

interface ScoreLevel {
  value: number;
  description: string;
}

interface Category {
  name: string;
  description: string;
}

interface AxisConfig {
  name: string;
  description: string;
  scoreLevels: ScoreLevel[];
  categories: Category[];
  scoreExactlyOne?: boolean;
  extraInstructions?: string[];
}

const classificationConfig: Record<string, AxisConfig> = {
  'HL7 Standard': {
    name: 'HL7 Standard',
    description: 'Analyze this FHIR Implementation Guide and classify its use of HL7 standards.',
    scoreLevels: [
      { value: 1.0, description: "Foundation standard that defines the IG's core approach - couldn't exist without it" },
      { value: 0.8, description: 'Key standard that shapes major portions of the IG with deep integration' },
      { value: 0.6, description: "Important standard that influences specific features but isn't central" },
      { value: 0.4, description: "Deliberately supported standard that enhances the IG but isn't required" },
      { value: 0.2, description: 'Acknowledged standard with minimal but purposeful support' },
      { value: 0.0, description: "Standard not relevant to this IG's purpose" }
    ],
    categories: [
      { name: 'CDA', description: 'Support for Clinical Document Architecture - structured clinical documents and their exchange' },
      { name: 'Cross-Paradigm', description: 'Integration across different HL7 standards and approaches' },
      { name: 'FHIR', description: 'RESTful APIs and resources following the FHIR specification' },
      { name: 'v2', description: 'Support for HL7 Version 2 messaging and its data structures' },
      { name: 'v3', description: 'Alignment with HL7 Version 3 RIM-based models and patterns' }
    ]
  },

  'Geographic Scope': {
    name: 'Geographic Scope',
    description: 'Analyze this FHIR Implementation Guide and classify its geographic scope.',
    scoreLevels: [
      { value: 1.0, description: 'Explicitly designed for and governed by this jurisdiction as its primary scope' },
      { value: 0.8, description: "Strongly aligned with this jurisdiction's needs and requirements" },
      { value: 0.6, description: 'Contains important jurisdiction-specific content and adaptations' },
      { value: 0.4, description: 'Acknowledges and supports specific jurisdiction needs' },
      { value: 0.2, description: 'Includes some jurisdiction-specific details but remains broadly applicable' },
      { value: 0.0, description: 'Purely universal with no regional adaptation' }
    ],
    categories: [
      { name: 'Universal Realm', description: 'Designed for international use without jurisdiction-specific constraints' },
      { name: 'National', description: 'Implementation guide for specific country' },
      { name: 'Regional', description: 'Guide for multi-country region or union' }
    ],
    scoreExactlyOne: true,
    extraInstructions: [
      'Use format "National > CountryName" for national jurisdictions',
      'Use format "Regional > RegionName" for regional jurisdictions',
      'Only score categories that are explicitly stated in the IG content',
      'Choose the most specific applicable scope',
      '',
      'Example scores for a national guide:',
      '{',
      '  "Universal Realm": 0.0,',
      '  "National > Fooland": 1.0',
      '}'
    ]
  },

  'Domain Focus': {
    name: 'Domain Focus',
    description: 'Analyze this FHIR Implementation Guide and classify its healthcare domain focus.',
    scoreLevels: [
      { value: 1.0, description: "Core domain that drives the IG's entire design and purpose" },
      { value: 0.8, description: 'Key domain with extensive support and detailed specifications' },
      { value: 0.6, description: 'Important domain with dedicated attention and clear requirements' },
      { value: 0.4, description: 'Supported domain with specific features but not central focus' },
      { value: 0.2, description: 'Domain addressed with limited but clear specifications' },
      { value: 0.0, description: 'Domain not meaningfully addressed in this IG' }
    ],
    categories: [
      { name: 'Administrative', description: 'Management of healthcare organizations, providers, and patients' },
      { name: 'Care Planning', description: 'Structured plans and protocols for patient care delivery' },
      { name: 'Clinical Data', description: 'Core clinical observations, findings, and documentation' },
      { name: 'Clinical Knowledge', description: 'Clinical guidelines, evidence-based rules, and computable medical knowledge including care pathways, decision logic, and clinical evidence representation' },
      { name: 'Diagnostics', description: 'Testing, imaging, and diagnostic assessment processes' },
      { name: 'Identity & Security', description: 'Access control, privacy protection, and consent management' },
      { name: 'Insurance, Payment & Financial', description: 'Healthcare coverage, costs, claims, or financial transactions' },
      { name: 'Medications', description: 'Drug prescribing, dispensing, and administration' },
      { name: 'Public Health', description: 'Population-level health monitoring and intervention' },
      { name: 'Quality & Reporting', description: 'Healthcare quality measurement and reporting' },
      { name: 'Research', description: 'Clinical research, trials, and evidence gathering' },
      { name: 'Workflow', description: 'Healthcare process coordination and management' }
    ]
  },

  // 'Implementation Approach': {
  //   name: 'Implementation Approach',
  //   description: 'Analyze this FHIR Implementation Guide and classify its technical implementation approaches.',
  //   scoreLevels: [
  //     { value: 1.0, description: "Core technical pattern that defines the IG's fundamental approach" },
  //     { value: 0.8, description: 'Key technical approach used extensively throughout the IG' },
  //     { value: 0.6, description: 'Important technical pattern with specific, well-defined uses' },
  //     { value: 0.4, description: 'Technical approach used for specific features but not central' },
  //     { value: 0.2, description: 'Technical approach mentioned with limited but clear usage' },
  //     { value: 0.0, description: 'Technical approach not meaningfully used in this IG' }
  //   ],
  //   categories: [
  //     { name: 'Data Profiles', description: 'Resource definitions and constraints for data modeling' },
  //     { name: 'Documents', description: 'Structured clinical document definitions and handling that leverage FHIR Composition and DocumentReference resources' },
  //     { name: 'Forms & UI', description: 'User interface specifications and questionnaires' },
  //     { name: 'Messaging', description: 'Exchange pattern that leverages FHIR MessageDefinition and MessageHeader resources' },
  //     { name: 'REST APIs', description: 'RESTful endpoint and interaction definitions' },
  //     { name: 'Services', description: 'Custom operations and service interfaces that leverage FHIR OperationDefinition and Operation resources' },
  //     { name: 'Subscriptions', description: 'Real-time notification pattern that leverages FHIR Subscription resource' },
  //     { name: 'Terminology', description: 'Code system and value set definitions' }
  //   ]
  // },

  'Implementers': {
    name: 'Implementers',
    description: 'Analyze this FHIR Implementation Guide and classify the types of systems expected to implement it.',
    scoreLevels: [
      { value: 1.0, description: "Core system type that must implement the IG's full functionality" },
      { value: 0.8, description: 'Key system type requiring extensive integration and support' },
      { value: 0.6, description: 'Important system type with specific, well-defined roles' },
      { value: 0.4, description: 'System type with defined but limited implementation needs' },
      { value: 0.2, description: 'System type with minimal but clear integration requirements' },
      { value: 0.0, description: 'System type not involved in implementing this IG' }
    ],
    categories: [
      { name: 'Clinical Decision Support', description: 'Clinical guidance and alert systems' },
      { name: 'EHR Systems', description: 'Primary clinical documentation and care delivery systems' },
      { name: 'Imaging Systems', description: 'Medical imaging and radiology systems' },
      { name: 'Lab Systems', description: 'Clinical laboratory testing and results systems' },
      { name: 'Payer Systems', description: 'Healthcare payment and claims processing systems' },
      { name: 'Pharmacy Systems', description: 'Medication management and dispensing systems' },
      { name: 'PHR Systems', description: 'Patient-facing health record and engagement systems' },
      { name: 'Public Health Systems', description: 'Population health monitoring systems' },
      { name: 'Research Platforms', description: 'Clinical research and trial systems' }
    ]
  },

  'Users & Stakeholders': {
    name: 'Users & Stakeholders',
    description: 'Analyze this FHIR Implementation Guide and classify its primary users and stakeholders.',
    scoreLevels: [
      { value: 1.0, description: "Core user group whose requirements drive the IG's design" },
      { value: 0.8, description: 'Key user group with significant influence on IG specifications' },
      { value: 0.6, description: 'Important user group with specific, well-defined needs' },
      { value: 0.4, description: 'User group with defined but limited role in the IG' },
      { value: 0.2, description: 'User group with minimal but clear needs addressed' },
      { value: 0.0, description: 'User group not meaningfully involved in this IG' }
    ],
    categories: [
      { name: 'Clinical Care Teams', description: 'Healthcare providers delivering direct patient care' },
      { name: 'Healthcare Administrators', description: 'Organizational and operational managers' },
      { name: 'Patients and Caregivers', description: 'Healthcare recipients and their support networks' },
      { name: 'Payers', description: 'Insurance companies and healthcare payment organizations' },
      { name: 'Public Health Agencies', description: 'Population health monitoring organizations' },
      { name: 'Research Organizations', description: 'Clinical research and trial organizations' },
      { name: 'Government Agencies', description: 'Healthcare regulation and oversight bodies' },
    ]
  }
};

function createAxisPrompt(axis: string, content: string): string {
  const config = classificationConfig[axis];
  if (!config) return '';

  const prompt = [
    `${config.description}`,
    '',
    ...(config.extraInstructions || []),
    '',
    'Score each category using only these values:',
    ...config.scoreLevels.map(level => 
      `${level.value.toFixed(1)}: ${level.description}`
    ),
    '',
    config.scoreExactlyOne ? 'Categories (score exactly one):' : 'Categories to score:',
    ...config.categories.map(cat => 
      `- ${cat.name}: ${cat.description}`
    ),
    '',
    'Provide output as JSON with this structure:',
    '{',
    '  "summary": "Brief explanation of the analysis",',
    '  "scores": {',
    `    ${config.categories.map(cat => `"${cat.name}": number`).join(',\n    ')}`,
    '  }',
    '}',
    '',
    'Content to analyze:',
    content
  ].join('\n');

  return prompt;
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function withRetry<T>(
  operation: () => Promise<T>, 
  retries = 6, 
  initialDelayMs = 1000
): Promise<T> {
  let lastError;
  let delayMs = initialDelayMs;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await operation();
    } catch (error: any) {
      lastError = error;
      
      // Only retry on rate limit errors
      if (error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED')) {
        if (attempt < retries) {
          console.log(`Rate limited, waiting ${delayMs}ms before retry ${attempt + 1}/${retries}`);
          await sleep(delayMs);
          delayMs *= 2; // Exponential backoff
          continue;
        }
      }
      // Don't retry other types of errors
      throw error;
    }
  }
  
  throw lastError;
}

async function classifyAxis(content: string, axis: string): Promise<ClassificationResult> {
  const prompt = createAxisPrompt(axis, content);
  const request = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }]
  };

  const response = await withRetry(() => generativeModel.generateContent(request));
  const responseText = response.response.candidates?.[0].content.parts[0].text || "{}";
  
  // Clean up the response text by removing markdown code blocks and trimming
  const cleanedText = responseText.replace(/```json|```/g, '').trim();
    
  console.log('Response text:', cleanedText);
  const result = JSON.parse(cleanedText);
  
  return { axis, result };
}

async function classifyWithWorkers(content: string, maxWorkers = DEFAULT_PARALLEL_WORKERS) {
  const axes = [
    'HL7 Standard',
    'Geographic Scope',
    'Domain Focus',
    // 'Implementation Approach',
    'Implementers',
    'Users & Stakeholders'
  ];

  // Just use maxWorkers directly, capped by number of axes
  const workers = Math.min(maxWorkers, axes.length);
  const results: ClassificationResult[] = [];
  
  // Process axes in chunks based on number of workers
  for (let i = 0; i < axes.length; i += workers) {
    const chunk = axes.slice(i, i + workers);
    const promises = chunk.map(axis => classifyAxis(content, axis));
    const chunkResults = await Promise.all(promises);
    console.log('Chunk results:', chunkResults);
    results.push(...chunkResults);
  }

  // Combine results into final classification
  const classification = {
  };

  for (const result of results) {
    classification[result.axis] = result.result;
  }

  return classification;
}

async function classifyRepo(repo: string, org: string, analysis: string, useFullContent: boolean = false) {
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
  if (useFullContent) {
    const contextFilePath = path.join(contextDir, `${formattedName}.md`);
    try {
      contentToClassify = await fs.readFile(contextFilePath, 'utf-8');
    } catch (error) {
      console.warn(`Warning: Could not read context file for ${repo}, falling back to analysis`);
    }
  }

  console.log('Content to classify:', contentToClassify);

  try {
    // Save prompts for each axis
    await fs.mkdir('prompts', { recursive: true });
    
    console.log('Classifying with workers:', DEFAULT_PARALLEL_WORKERS);
    const classification = await classifyWithWorkers(contentToClassify);
    
    // Add metadata
    classification.meta = {
      ...generativeModelConfig,
      workerCount: DEFAULT_PARALLEL_WORKERS
    };

    await fs.mkdir('classifications', { recursive: true });
    await fs.writeFile(classificationPath, JSON.stringify(classification, null, 2));
  } catch (error) {
    console.error('Error classifying repo:', error);
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
