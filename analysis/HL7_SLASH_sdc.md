# sdc: Analysis

## Core Purpose & Scope

The HL7 Structured Data Capture (SDC) Implementation Guide addresses the primary interoperability challenges of standardizing the capture, representation, and exchange of structured data within electronic health records (EHRs) and other health IT systems, particularly focusing on data collected via forms. It solves key clinical and business problems related to data quality, consistency, and reusability by providing a framework for defining and populating standardized forms (Questionnaires) and extracting structured data from completed forms (QuestionnaireResponses). The IG's scope is bounded to the definition of form structure, behavior, population, and extraction mechanisms, and does not extend to the specific content of forms or the clinical workflows surrounding their use.

## Technical Foundation

The technical foundation of the SDC IG rests on FHIR's Questionnaire and QuestionnaireResponse resources.

**Core Profiles and Extensions:**
- **SDCQuestionnaire:** Base profile for all SDC Questionnaires, defining common elements and constraints.
- **SDCQuestionnaireResponse:** Base profile for all SDC QuestionnaireResponses.
- Specialized profiles like **SDCQuestionnaireAdapt**, **SDCQuestionnaireBehave**, **SDCQuestionnaireRender**, **SDCQuestionnaireExtractDefinition**, **SDCQuestionnaireExtractObservation**, **SDCQuestionnaireExtractStructureMap**, **SDCQuestionnairePopulateExpression**, **SDCQuestionnairePopulateObservation**, and **SDCQuestionnairePopulateStructureMap** extend the base profiles to support specific SDC capabilities.
- Numerous extensions are defined to control form behavior, rendering, data extraction, and population, including:
    - `sdc-questionnaire-assembleExpectation`: Indicates if a Questionnaire requires assembly.
    - `sdc-questionnaire-entryMode`: Defines how data is entered into a QuestionnaireResponse.
    - `sdc-questionnaire-enableWhenExpression`: Controls item enablement based on a FHIRPath expression.
    - `sdc-questionnaire-initialExpression`: Specifies an initial value for a question based on an expression.
    - `sdc-questionnaire-calculatedExpression`: Defines a calculated value for a question based on an expression.
    - `sdc-questionnaire-itemPopulationContext`: Establishes context for populating a Questionnaire item.
    - `sdc-questionnaire-definitionExtract`: Specifies resource type/profile for definition-based extraction.
    - `sdc-questionnaire-observationExtract`: Marks items for observation-based extraction.
    - `sdc-questionnaire-targetStructureMap`: Identifies StructureMaps for extraction.
    - `sdc-questionnaire-sourceStructureMap`: Identifies StructureMaps for population.
    - `sdc-questionnaire-itemMedia`: Allows inclusion of media (images, audio, video) with questions.
    - `sdc-questionnaire-itemAnswerMedia`: Allows inclusion of media with answer options.
    - `sdc-questionnaire-choiceColumn`: Provides guidelines for rendering multi-column choices.
    - `sdc-questionnaire-launchContext`: Specifies resources to provide context for form processing.
    - `sdc-questionnaire-lookupQuestionnaire`: Specifies a Questionnaire to use for creating a referenced resource.
    - `sdc-questionnaire-questionnaireAdaptive`: Marks a questionnaire as adaptive.

**Notable Operations and Interactions:**
- `$populate`: Populates a QuestionnaireResponse based on a Questionnaire and provided data.
- `$extract`: Extracts data from a QuestionnaireResponse into other FHIR resources.
- `$assemble`: Assembles a modular Questionnaire into a fully inlined Questionnaire.
- `$next-question`: Returns the next question(s) for an adaptive Questionnaire.

**Key Terminology and Value Sets:**
- LOINC: Used extensively for coding questions and answers.
- SNOMED CT: Used for coding clinical concepts.
- UCUM: Used for units of measure.
- Custom code systems and value sets are defined for specific SDC concepts like `entryMode`, `assemble-expectation`, `observation-extract-relationship`, and `keyboardType`.

**Significant Patterns and Constraints:**
- Extensive use of extensions to augment the base Questionnaire and QuestionnaireResponse resources.
- Heavy reliance on FHIRPath for expressing logic and constraints.
- Use of contained resources within QuestionnaireResponse for adaptive questionnaires.
- Definition of specific search parameters for finding Questionnaires based on SDC extensions.
- Invariants to enforce constraints on the structure and content of Questionnaires and QuestionnaireResponses.

## Technical Essence

The SDC IG leverages FHIR's Questionnaire and QuestionnaireResponse resources, extending them with a rich set of profiles and extensions to enable sophisticated form definition, behavior, population, and extraction. At its core, an SDC Questionnaire defines a hierarchical structure of items (groups, questions, display items) with associated metadata controlling their behavior and appearance.  `sdc-questionnaire-entryMode` dictates user interaction (e.g., `sequential`, `random`). `enableWhen` and `enableWhenExpression` control item visibility based on other answers or FHIRPath expressions. `initialExpression` and `calculatedExpression` determine initial and calculated values using FHIRPath. `itemPopulationContext` and `launchContext` define variables and resources available to expressions during population. Extraction is driven by extensions like `sdc-questionnaire-definitionExtract`, `sdc-questionnaire-observationExtract`, and `sdc-questionnaire-targetStructureMap`, which specify how QuestionnaireResponse data maps to other FHIR resources (e.g., Observation, Patient) or is transformed via StructureMaps. Operations like `$populate`, `$extract`, and `$assemble` provide standardized mechanisms for interacting with SDC-conformant systems.  Adaptive questionnaires are supported through the `$next-question` operation and contained Questionnaires within QuestionnaireResponses.

## Implementation Approach

Implementing the SDC IG involves supporting the core Questionnaire and QuestionnaireResponse resources, along with the defined SDC profiles and extensions.

**Critical Workflows and Interactions:**
- **Form Design:** Form designers create Questionnaires using the SDC profiles, leveraging extensions to define form behavior, rendering, and data mapping.
- **Form Population:** Systems use the `$populate` operation to pre-populate QuestionnaireResponses based on existing data, utilizing `itemPopulationContext` and `launchContext` to provide relevant resources.
- **Form Completion:** Users interact with rendered forms, guided by `entryMode`, `enableWhen`, and other rendering-related extensions.
- **Data Extraction:** Systems use the `$extract` operation to transform completed QuestionnaireResponses into other FHIR resources, guided by extraction extensions and potentially StructureMaps.
- **Modular Questionnaire Assembly:** Systems use the `$assemble` operation to combine modular Questionnaires into a single, fully inlined Questionnaire.
- **Adaptive Questionnaire Interaction:** Systems use the `$next-question` operation to dynamically determine the next set of questions to display in an adaptive Questionnaire.

**Important Requirements and Guardrails:**
- Systems must correctly interpret and apply the logic defined by FHIRPath expressions in extensions.
- Systems must support the specified operations and handle input/output parameters as defined by the IG.
- Systems must adhere to the constraints defined by invariants in the profiles.
- Systems should handle rendering extensions to provide a user-friendly form interface.

**Notable Design Choices and Patterns:**
- Extensive use of FHIRPath for expressing complex logic.
- Use of contained resources for adaptive questionnaires.
- Reliance on extensions to augment base resource functionality.

## Ecosystem Context

**Target Systems and Users:**
- EHR systems
- Clinical data repositories
- Form management systems
- Clinical research systems
- Public health reporting systems
- Form designers
- Clinicians
- Researchers
- Patients

**Relationship to Other Standards/IGs:**
- Relies heavily on core FHIR resources and specifications.
- Leverages LOINC, SNOMED CT, and UCUM for terminology.
- Can be used in conjunction with other IGs that define specific clinical content or workflows.
- Builds upon the IHE SDC profile.

**Relevant Jurisdictions or Programs:**
- Primarily driven by US initiatives, particularly ONC's Structured Data Capture project.
- Applicable to any jurisdiction or program that needs to standardize the capture and exchange of structured data via forms.

**Primary Use Cases and Scenarios:**
- Capturing patient-reported outcomes (PROs).
- Collecting clinical data during patient encounters.
- Conducting clinical research studies.
- Performing public health surveillance.
- Automating data extraction from completed forms.
- Supporting adaptive questionnaires for personalized data collection.
- Creating and managing libraries of standardized forms.
