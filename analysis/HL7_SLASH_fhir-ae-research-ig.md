# fhir-ae-research-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The IG primarily tackles the challenge of capturing and standardizing Adverse Event (AE) data in real-world data systems, particularly within the context of clinical research. It addresses variations in definitions, workflows, and data requirements across different use cases, including patient monitoring, clinical intervention, regulatory safety reporting, and clinical trials monitoring.
-   **Key clinical/business problems it solves:** The IG aims to streamline the collection and reporting of serious and non-serious AEs in clinical research, especially by leveraging Electronic Health Records (EHRs) and other real-world data sources like Personal Health Records (PHRs). This reduces the need for manual transcription of AE data into secondary systems, improving efficiency and accuracy for health authority reporting. It also facilitates the use of FHIR for pre-market and post-market safety surveillance.
-   **Intended scope and boundaries:** The IG focuses on modeling data elements to support the workflow for collecting and reporting AEs in clinical research to meet regulatory requirements. It covers both pre-market and post-market scenarios, with a future vision of integrating with a MedWatch IG for broader safety reporting. The scope is primarily within the clinical research domain, but it touches upon integration with EHRs and PHRs.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **AdverseEventClinicalResearch Profile:** A foundational profile based on the core FHIR AdverseEvent resource, tailored for clinical research communications.
    -   **AdverseEventSeverity Extension:** Describes the severity of the adverse event from the investigator's perspective.
    -   **AdverseEventGrade Extension:** Represents the grade of the adverse event, particularly in cancer-related trials.
    -   **CausedSubjectToDiscontinueStudy Extension:** Indicates if the adverse event led to study discontinuation.
    -   **SeriousnessCriteria Extension:** Captures the presence or absence of factors associated with serious adverse events.
-   **Notable operations and interactions:** The IG does not define specific operations but implies interactions involving the creation, update, and retrieval of AdverseEvent resources, along with related resources like Patient, ResearchStudy, MedicationAdministration, and Condition.
-   **Key terminology and value sets:**
    -   `http://terminology.hl7.org/ValueSet/adverse-event-clinical-research-seriousness-criteria`: Defines criteria for determining serious adverse events.
    -   `http://terminology.hl7.org/ValueSet/adverse-event-clinical-research-outcomes`: Describes the type of outcome from the adverse event.
    -   `http://terminology.hl7.org/ValueSet/adverse-event-clinical-research-causality-relatedness`: Specifies the relatedness of a suspected entity to the adverse event.
    -   `http://terminology.hl7.org/ValueSet/adverse-event-clinical-research-grades`: Defines grades for adverse events, especially in oncology.
    -   `http://terminology.hl7.org/CodeSystem/adverse-event-seriousness`: Codes for the seriousness of the adverse event (e.g., serious, non-serious).
    -   `http://hl7.org/fhir/ValueSet/adverse-event-causality-method`: Codes for the method of evaluating causality.
-   **Significant patterns and constraints:**
    -   The AdverseEventClinicalResearch profile mandates the use of the `actual` actuality code.
    -   It requires the presence of `code`, `seriousness`, `outcome`, and `study` elements.
    -   `suspectEntity.causality` is mandatory and must use the specified value set for `entityRelatedness`.
    -   Invariant `aeClinRes-seriousness-1` enforces that if `seriousness` is "serious," at least one `seriousness-criteria` extension must be present.

## Technical Essence

This IG defines a specialized AdverseEventClinicalResearch profile, extending the core FHIR AdverseEvent resource to capture clinical research-specific data. It introduces extensions for severity (AdverseEventSeverity), grade (AdverseEventGrade), study discontinuation (CausedSubjectToDiscontinueStudy), and seriousness criteria (SeriousnessCriteria). The profile mandates the inclusion of a study reference, outcome, and seriousness, and enforces a strict relationship between seriousness and the presence of seriousness criteria via an invariant. Suspect entity causality is also mandatory, utilizing a specific value set for relatedness. The IG leverages standard FHIR value sets for seriousness, outcome, and causality methods, while introducing custom value sets for seriousness criteria, outcomes, and causality relatedness specific to clinical research. Implementers would create AdverseEvent instances conforming to this profile, populating them with relevant data from EHRs, PHRs, or other sources, and linking them to associated resources like ResearchStudy, Patient, and MedicationAdministration.

## Implementation Approach

-   **Critical workflows and interactions:** The IG supports workflows for capturing AE data in EHRs or PHRs, transmitting it via FHIR to clinical trial management systems or regulatory authorities, and potentially using it for clinical decision support. Key interactions involve creating AdverseEvent resources, associating them with relevant study and patient data, and potentially querying for AEs based on various criteria.
-   **Important requirements and guardrails:** Implementers must ensure that AdverseEvent instances conform to the defined profile and extensions. They need to correctly map data from existing systems to the FHIR resources and value sets. The invariant related to seriousness and seriousness criteria must be strictly enforced.
-   **Notable design choices and patterns:** The use of extensions to capture clinical research-specific data elements is a key design choice. The reliance on existing FHIR resources and value sets, where possible, promotes interoperability. The inclusion of examples for various scenarios provides practical guidance for implementation.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are EHRs, PHRs, clinical trial management systems, and regulatory reporting systems. Users include clinical investigators, research staff, sponsors, and regulatory authorities.
-   **Relationship to other standards/IGs:** The IG builds upon the core FHIR standard and references several external standards and guidelines, including FDA E2B(R3), CDISC, ICH E2A, CDASH, and FDA safety reporting requirements. It anticipates a future MedWatch IG that will build upon its foundation.
-   **Relevant jurisdictions or programs:** The IG is relevant to jurisdictions with regulatory requirements for adverse event reporting in clinical research, such as the United States (FDA). It aligns with programs focused on improving patient safety and streamlining clinical trial processes.
-   **Primary use cases and scenarios:** The IG supports use cases such as pre-market clinical trial reporting of SAEs, post-market safety surveillance, and patient-reported adverse events. The examples provided illustrate scenarios involving cancer clinical trials, device-related adverse events, and the use of the MedWatch 3500A form during a clinical trial.
