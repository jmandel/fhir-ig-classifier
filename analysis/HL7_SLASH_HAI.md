# HAI: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the electronic submission of Healthcare Associated Infection (HAI) reports to the National Healthcare Safety Network (NHSN) of the Centers for Disease Control and Prevention (CDC). It focuses on enabling interoperable data exchange between healthcare systems and the NHSN using FHIR.
-   **Key clinical/business problems it solves:** It streamlines the process of HAI reporting, reducing manual data entry and potential errors. It facilitates timely and accurate data submission, supporting public health surveillance and quality improvement efforts related to HAIs.
-   **Intended scope and boundaries:** The scope is limited to HAI reporting to the NHSN. It defines FHIR profiles for electronic submission of various HAI reports, including single-person reports and population summary reports. It does not cover NHSN enrollment or reporting plan filing.

## Technical Foundation

-   **Core profiles and extensions:**
    -   [Healthcare Associated Infection Single-Person Report Questionnaire](StructureDefinition-hai-single-person-report-questionnaire.html)
    -   [Healthcare Associated Infection Single-Person Report QuestionnaireResponse](StructureDefinition-hai-single-person-report-questionnaireresponse.html)
    -   [Healthcare Associated Infection Population Summary Report Questionnaire](StructureDefinition-hai-population-summary-questionnaire.html)
    -   [Healthcare Associated Infection Population Summary Report QuestionnaireResponse](StructureDefinition-hai-population-summary-questionnaireresponse.html)
    -   Based on US Core Patient and US Core QuestionnaireResponse profiles.
-   **Notable operations and interactions:** The IG primarily focuses on the submission of completed QuestionnaireResponse resources to the NHSN.
-   **Key terminology and value sets:**
    -   NHSN-specific value sets for concepts like healthcare service location, infection type, drug susceptibility, pathogen, criterion of diagnosis, infection condition, pathogen ranking, SSI detection method, LOS/MEN discharge disposition, SSI detection method type, OPC procedure category, wound class, and ASA class.
    -   Value sets are sourced from the Value Set Authority Center (VSAC).
-   **Significant patterns and constraints:** The IG leverages the FHIR Questionnaire and QuestionnaireResponse resources to model NHSN forms and their completed responses. It defines constraints on these resources to ensure data quality and consistency.

## Technical Essence

This IG defines a FHIR Questionnaire-based approach for submitting HAI reports to the CDC's NHSN. It leverages US Core Patient and US Core QuestionnaireResponse profiles, extending them with NHSN-specific constraints. Each NHSN report is represented by a Questionnaire instance, defining the questions and possible answers. Completed reports are represented as QuestionnaireResponse instances, conforming to the defined constraints. The IG specifies mappings between QuestionnaireResponse elements and corresponding CDA elements for each report type. Key value sets from VSAC are used to codify concepts like infection type, pathogen, and procedure codes. The core pattern involves creating QuestionnaireResponse instances that reference a specific Questionnaire, a Patient (subject), and an author (Organization), and contain answers (item.answer) corresponding to the Questionnaire's questions (item.linkId). For example, a Late Onset Sepsis Event report would be a QuestionnaireResponse referencing the "hai-questionnaire-los-event" Questionnaire, containing answers for items like "facility," "event-number," "event-type," and "date-of-event," using appropriate codes from NHSN value sets.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves healthcare systems generating QuestionnaireResponse instances based on collected HAI data and submitting them to the NHSN.
-   **Important requirements and guardrails:** Implementers must ensure that QuestionnaireResponse instances conform to the defined profiles and use the specified value sets. Data validation against the profiles is crucial.
-   **Notable design choices and patterns:** The use of Questionnaire and QuestionnaireResponse resources provides a structured and standardized way to represent NHSN forms and their responses. The mappings to CDA elements facilitate interoperability with existing CDA-based systems.

## Ecosystem Context

-   **Target systems and users:** The target systems are healthcare information systems that need to report HAI data to the NHSN. The users are developers of these systems.
-   **Relationship to other standards/IGs:** This IG is developed in parallel with a corresponding CDA IG, ensuring alignment between the two standards. It depends on US Core profiles.
-   **Relevant jurisdictions or programs:** This IG is relevant to healthcare organizations participating in the NHSN program in the United States.
-   **Primary use cases and scenarios:** The primary use case is the electronic submission of HAI reports from healthcare facilities to the NHSN, supporting public health surveillance and quality improvement initiatives. Specific scenarios include reporting of Late Onset Sepsis/Meningitis events, Outpatient Procedure Component reports, and Surgical Site Infection events.
