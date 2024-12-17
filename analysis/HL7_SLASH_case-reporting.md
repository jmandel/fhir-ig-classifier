# case-reporting: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenges of automating electronic case reporting (eCR) from Electronic Health Records (EHRs) to Public Health Agencies (PHAs), ensuring timely and complete data exchange, and enabling bidirectional communication between healthcare and public health. It also aims to standardize the distribution of reporting guidance and rules from public health to healthcare.
-   **Key clinical/business problems it solves:** Automates the reporting of reportable conditions, reducing the manual burden on healthcare providers. Improves the timeliness, completeness, and accuracy of case reporting data for public health surveillance, outbreak management, and control. Facilitates the delivery of public health information and guidance to clinical care settings.
-   **Intended scope and boundaries:** The scope includes the specification of FHIR-based transactions for the electronic Initial Case Report (eICR), the Reportability Response (RR), and the electronic Reporting and Surveillance Distribution (eRSD). It covers all reportable conditions across all jurisdictions within the United States. It does not cover detailed implementation guidance for specific EHR systems or public health surveillance systems.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **eICR:** `eICR Document Bundle`, `eICR Composition`, `eCR MessageHeader`, and numerous profiles for clinical data elements (e.g., `Patient`, `Encounter`, `Condition`, `Observation`, `Procedure`, `MedicationAdministration`, `Immunization`). Key extensions include `eICR Trigger Code Flag Extension` and `eICR Initiation Type Extension`.
    -   **RR:** `RR Document Bundle`, `RR Composition`, `RR MessageHeader`, `RR Reportability Information Observation`, `RR Responsible Agency Organization`. Key extensions include `Determination of Reportability`, `Reporting Timeframe`, and `External Resource Priority`.
    -   **eRSD:** `eRSD PlanDefinition`, `US Public Health Specification Library`, `US Public Health Triggering ValueSet Library`, `US Public Health Supplemental Library`. Key extensions include `US Public Health Named Event Type Extension` and `US Public Health Alternative Expression`.
-   **Notable operations and interactions:** The IG defines FHIR Messaging and RESTful transactions for submitting eICRs and receiving RRs. The eRSD supports distribution of reporting guidance, trigger code value sets, and reporting rules via a combination of notification, request, and response transactions.
-   **Key terminology and value sets:** The IG defines several value sets, including `eCR MessageHeader Event`, `US Public Health Pregnancy Status`, `US Public Health PlanDefinition Action`, and leverages external value sets like `Determination of Reportability`, `Processing Status`, and various LOINC and SNOMED CT value sets for clinical data.
-   **Significant patterns and constraints:** The eICR and RR are defined as FHIR Document Bundles and can also be transmitted within a FHIR Message Bundle. The eICR Composition profile includes sections for patient demographics, clinical information, and trigger code flags. The RR Composition includes sections for reportability determination, responsible agency information, and external resources. The eRSD PlanDefinition uses a structured approach to define reporting workflows, triggering criteria, and suspected reportability criteria using FHIRPath and CQL.

## Technical Essence

This IG defines a FHIR-based framework for electronic case reporting, centered around three core transactions: eICR, RR, and eRSD. The eICR, structured as a Document Bundle, transmits a comprehensive set of clinical data from EHRs to PHAs, leveraging US Core profiles where possible and extending them with eCR-specific elements like trigger code flags. The RR, also a Document Bundle, provides feedback from PHAs, including reportability determinations, responsible agency details, and links to external resources, structured within an RR Composition. The eRSD utilizes a constrained PlanDefinition to distribute reporting guidance, trigger code value sets (using `input` data elements and `trigger` elements bound to named events), and reporting rules (using `condition` elements with FHIRPath or CQL expressions). These rules incorporate jurisdiction-specific configurations, enabling local evaluation of reportability based on patient and encounter addresses. The IG supports both FHIR Messaging and RESTful transport, allowing flexibility in implementation. Triggering is based on matching EHR data against trigger code value sets, with subsequent rules processing to determine reportability. The core pattern involves a loop of checking for suspected reportability, creating and validating an eICR, and routing and sending the eICR, with timing parameters defined in the eRSD.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   **eICR:** Triggering based on EHR data matching trigger codes, creation of eICR Document Bundle, transmission to PHA or intermediary, and processing of RR.
    -   **RR:** Generation of RR based on eICR content and reporting rules, transmission back to the healthcare organization, and integration into EHR workflows.
    -   **eRSD:** Distribution of reporting guidance and rules from a Specification Repository to Implementing Systems, including notification of updates, request for specific versions, and response with the requested specification package.
-   **Important requirements and guardrails:** Systems SHALL support the defined profiles and extensions. Systems SHALL be capable of populating and processing MUST SUPPORT data elements. The eICR transaction requires specific timing parameters for triggering and transmission. The RR narrative text follows specific templates based on reportability determinations.
-   **Notable design choices and patterns:** The use of FHIR Document Bundles for eICR and RR facilitates the exchange of a comprehensive set of data. The eRSD PlanDefinition provides a structured and extensible mechanism for defining reporting workflows and rules. The use of FHIRPath and CQL allows for flexible and powerful expression of triggering and reportability criteria.

## Ecosystem Context

-   **Target systems and users:** EHR systems, PHDS systems, public health surveillance systems, healthcare providers, public health practitioners, and health IT vendors.
-   **Relationship to other standards/IGs:** This IG builds upon FHIR R4, US Core, and the HL7 CDA eICR and RR STU IGs. It is intended to be aligned with the future US Public Health Library (USPHL).
-   **Relevant jurisdictions or programs:** Applicable to all U.S. jurisdictions with reportable condition requirements.
-   **Primary use cases and scenarios:** Automated reporting of reportable conditions from EHRs to PHAs, bidirectional communication between healthcare and public health, distribution of reporting guidance and rules, and support for public health surveillance and outbreak management.
