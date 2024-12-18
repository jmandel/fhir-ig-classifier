# fhir-ae-research-backport-ig: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG) addresses the challenge of capturing and standardizing Adverse Event (AE) data in real-world data systems, particularly within the context of clinical research. It aims to bridge the gap between AE data collection in Electronic Health Records (EHRs), Personal Health Records (PHRs), and the specific requirements of clinical trials and regulatory safety reporting. The primary goal is to enable the use of EHRs and other real-world data sources as electronic sources for collecting AEs during clinical trials, streamlining the workflow and improving efficiency for reporting to health authorities. The IG focuses on modeling data elements to support the workflow for collecting and reporting serious and non-serious AEs in clinical research to meet regulatory needs, specifically pre-market and post-market clinical trials. It does not cover the future vision of data flow using FHIR for MedWatch reporting, which will likely be addressed in a separate IG.

## Technical Foundation

The IG is built upon the HL7 FHIR R4 standard and backports the AdverseEvent resource from FHIR R5. The core of the IG is the **AdverseEvent Clinical Research Profile**, which extends the base AdverseEvent resource. Key extensions defined include:

-   **Note:** Comments about the adverse event.
-   **ExpectedInResearchStudy:** Indicates if the AE was anticipated in the research study.
-   **Status:** Workflow status of the AE (e.g., in-progress, completed, entered-in-error).
-   **ContributingFactor:** Factors suspected to have increased the probability or severity of the AE.
-   **MitigatingAction:** Actions taken to reduce the harm from the AE.
-   **SuspectEntity:** The entity suspected of causing the AE, including causality assessment.
-   **SupportingInfo:** Relevant past history or documents related to the AE.
-   **AdverseEventGrade:** Severity grade of the AE, particularly for cancer trials.
-   **CausedSubjectToDiscontinueStudy:** Indicates if the AE led to study discontinuation.
-   **SeriousnessCriteria:** Criteria used to determine if the AE was serious.
-   **ResolvedDate:** Date the AE was resolved.
-   **ResearchSubjectRef:** Reference to the ResearchSubject resource.
-   **ResultingEffect:** The condition that occurred as a result of the AE.
-   **Participant:** Indicates who or what participated in the AE.

Notable value sets include:

-   **adverse-event-status-vs:** Defines the workflow status of the AE.
-   **adverse-event-type-vs:** Describes the type of adverse event.
-   **adverse-event-contributing-factor-vs:** Codes for contributing factors.
-   **adverse-event-mitigating-action-vs:** Codes for mitigating actions.
-   **adverse-event-participant-function-vs:** Describes the role of participants in the AE.
-   **adverse-event-clinical-research-seriousness-criteria:** Criteria for determining AE seriousness.
-   **adverse-event-clinical-research-outcomes:** Outcomes of the AE.
-   **adverse-event-supporting-info:** Codes for supporting information.
-   **adverse-event-clinical-research-causality-relatedness:** Relatedness of the suspected entity to the AE.
-   **adverse-event-clinical-research-grades:** Severity grades for AEs.

The IG also includes examples demonstrating the use of the profile in various clinical trial scenarios.

## Technical Essence

This IG defines a specialized AdverseEvent Clinical Research Profile, extending FHIR R4's AdverseEvent resource to capture clinical research-specific data. It introduces extensions like `status` (with a required value set: in-progress, completed, entered-in-error, unknown), `expected-in-research-study` (boolean), `ae-grade` (using a preferred value set of severity grades), `seriousness-criteria` (using an extensible value set of seriousness criteria codes), `research-subject-ref` (Reference to ResearchSubject), `suspect-entity` (with nested extensions for `instance` (Reference to the suspected entity) and `causality` (with nested extensions for `assessmentMethod`, `entityRelatedness` (using a preferred value set of relatedness codes), and `author`)), `contributing-factor`, `mitigating-action`, and `supporting-info` (all with example value sets). The `seriousness` element is required and uses the standard HL7 value set, with an invariant mandating at least one `seriousness-criteria` extension if `seriousness` is 'serious' and none if 'non-serious'. The `outcome` element is also required, using a value set of clinical research outcomes. The profile mandates the presence of the `study` element (1..1) and sets `actuality` to 'actual'. Implementers would create instances of this profile, populating these extensions with appropriate codes and references to represent adverse events in a clinical research context, ensuring adherence to the defined constraints.

## Implementation Approach

The IG is intended to be implemented by systems involved in clinical research, including EHRs, PHRs, and clinical trial management systems. The primary workflow involves capturing AE data in these systems and transmitting it via FHIR to other systems, such as sponsors or regulatory authorities. Key interactions include:

1.  **AE Capture:** Clinicians or patients record AE data in EHRs or PHRs, respectively.
2.  **Data Transformation:** The AE data is mapped to the AdverseEvent Clinical Research Profile.
3.  **Data Transmission:** The profiled AE data is transmitted via FHIR to other systems.
4.  **Data Aggregation and Analysis:** The receiving systems aggregate and analyze the AE data for safety monitoring and reporting.

The IG emphasizes the use of standard FHIR resources and operations for data exchange. It provides detailed guidance on mapping data elements to the profile and includes examples to illustrate the process.

## Ecosystem Context

The target systems for this IG include EHRs, PHRs, clinical trial management systems, and regulatory reporting systems. The target users are clinicians, clinical researchers, patients, sponsors, and regulatory authorities. The IG is related to other standards and IGs, including FDA E2B(R3), CDISC FHIR Mapping to AE, ICH E2A, CDASH, and FDA safety reporting guidelines. It is relevant to jurisdictions and programs that require AE reporting in clinical research, such as the FDA in the United States. The primary use cases are pre-market and post-market clinical trials, where AE data needs to be collected, standardized, and reported efficiently. The IG also touches upon safety surveillance in the post-market setting.
