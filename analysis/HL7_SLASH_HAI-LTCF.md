# HAI-LTCF: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardized electronic submission of Healthcare Associated Infection (HAI) data from Long Term Care Facilities (LTCFs) to the National Healthcare Safety Network (NHSN). It aims to replace manual and paper-based reporting with a streamlined, electronic process.
-   **Key clinical/business problems it solves:** It reduces the reporting burden on LTCFs, improves data quality and timeliness, and enhances the efficiency of data collection for national benchmarking, trend monitoring, and infection prevention efforts. It also aims to reduce data errors.
-   **Intended scope and boundaries:** The scope is limited to HAI reporting for LTCFs, specifically for Multidrug-Resistant Organism (MDRO) and *C. difficile* Infection (CDI) events. It defines two report types: a single-person event report and a population summary report. It does not cover enrollment in NHSN or reporting plan filing.

## Technical Foundation

-   **Core profiles and extensions:**
    -   Four core profiles:
        -   Healthcare Associated Infection for Long Term Care Single-Person Report Questionnaire
        -   Healthcare Associated Infection for Long Term Care Single-Person Report QuestionnaireResponse
        -   Healthcare Associated Infection for Long Term Care Population Summary Questionnaire
        -   Healthcare Associated Infection for Long Term Care Population Summary QuestionnaireResponse
    -   No custom extensions are defined in this IG.
-   **Notable operations and interactions:** The IG relies on the RESTful paradigm, with a "Source" (e.g., LTCF EHR) exposing a Questionnaire and a "Consumer" (e.g., NHSN system) consuming the QuestionnaireResponse.
-   **Key terminology and value sets:**
    -   NHSNHealthcareServiceLocationCode (2.16.840.1.113883.13.19)
    -   NHSNPrimaryResidentServiceType (2.16.840.1.113883.10.20.5.1.5.9.3)
    -   NHSNSignificantPathogenCode (2.16.840.1.114222.4.11.3194)
    -   NHSNSpecimenTypeCode (2.16.840.1.114222.4.11.3249)
    -   Value sets are sourced from the Value Set Authoring Center (VSAC).
-   **Significant patterns and constraints:** The IG mandates that servers populate all profile data elements with a minimum cardinality >= 1 and/or flagged as Must Support. It leverages US Core profiles (e.g., US Core Patient) where available and uses base FHIR resources otherwise.

## Technical Essence

This IG defines a FHIR Questionnaire-based approach for submitting HAI data from LTCFs to the NHSN. It specifies two core Questionnaire profiles, one for single-person event reports and another for population summaries, mirroring the NHSN forms. These Questionnaires are populated and submitted as QuestionnaireResponse resources. The single-person event report Questionnaire gathers patient demographics (using US Core Patient), admission dates, specimen details, organism type, and care location. The population summary Questionnaire collects aggregate data like resident days, admissions, treatment starts, and "no labID event" indicators for specific organisms. Both Questionnaires and their corresponding QuestionnaireResponses are constrained to ensure mandatory data elements are present. The IG leverages VSAC-defined value sets for coding key concepts like specimen type and significant pathogen. The interaction model is a simple RESTful exchange where an LTCF system (Source) exposes the Questionnaire and an NHSN system (Consumer) retrieves the populated QuestionnaireResponse.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves an LTCF system generating a Questionnaire, a user (e.g., infection preventionist) populating it with data, and the system submitting the QuestionnaireResponse to the NHSN.
-   **Important requirements and guardrails:** Implementers must adhere to RESTful principles and FHIR core specifications. They must also ensure that all mandatory data elements in the profiles are populated.
-   **Notable design choices and patterns:** The choice of Questionnaire and QuestionnaireResponse resources provides a structured and organized way to collect and transmit the required data, closely aligning with the existing NHSN forms.

## Ecosystem Context

-   **Target systems and users:** The target systems are EHRs and other health IT systems within LTCFs and the NHSN system at the CDC. The primary users are infection preventionists and other healthcare professionals responsible for HAI reporting.
-   **Relationship to other standards/IGs:** This IG is developed in parallel with a corresponding HL7 CDA IG, ensuring alignment between the two. It also relies on the US Core IG for patient-related data.
-   **Relevant jurisdictions or programs:** This IG is relevant to LTCFs in the United States participating in the NHSN.
-   **Primary use cases and scenarios:** The primary use case is the routine reporting of MDRO and CDI events from LTCFs to the NHSN for surveillance and quality improvement purposes.
