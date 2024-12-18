# ihe-sdc-ecc-on-fhir: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG tackles the challenge of representing and exchanging data captured via IHE Structured Data Capture (SDC) forms using FHIR resources. It specifically focuses on enabling the transmission of electronic Cancer Protocols (eCPs), formerly known as electronic Cancer Checklists (eCCs), which are based on IHE SDC.
-   **Key clinical/business problems it solves:** The IG aims to improve the interoperability and usability of structured data captured in eCPs. By mapping IHE SDC data elements to FHIR, it facilitates data sharing, analysis, pre-population of forms, quality measurement, and public health reporting. It also enables the evaluation of concordance against computable representations of narrative clinical guidelines.
-   **Intended scope and boundaries:** The IG's scope is limited to establishing a pattern for transporting IHE SDC forms using FHIR `DocumentReference` and `DiagnosticReport`, and extracting data from IHE SDC forms to FHIR `Observation` resources. It does not cover quality measurement but aims to facilitate data capture for such purposes. It is a Universal Realm guide, intended to be used alongside other standards like US-Core.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `ObservationSDCeCC`: A profile on `Observation` to capture Question/Answer Pairs from IHE SDC, including parent/child relationships and additional list item responses.
    -   `DiagnosticReportSDCeCC`: A profile on `DiagnosticReport` to represent reports parsed from IHE SDC forms, including references to `ObservationSDCeCC` resources and human-readable presentations of the form.
    -   `DocumentReferenceSDCeCC`: A profile on `DocumentReference` to share IHE SDC forms (completed or blank) as attachments.
    -   Extension: `structuredefinition-wg` with valueCode `oo` (Orders and Observations) is used on all profiles.
-   **Notable operations and interactions:** The IG does not define specific operations but implies interactions related to creating, updating, and querying `Observation`, `DiagnosticReport`, and `DocumentReference` resources.
-   **Key terminology and value sets:**
    -   `CAP`: Code system for CAP eCP content identifiers (http://cap.org/eCC).
    -   `LNC`: LOINC (http://loinc.org).
    -   `SCT`: SNOMED CT (http://snomed.info/sct).
    -   `UCUM`: Unified Code for Units of Measure (http://unitsofmeasure.org).
    -   `ICD10CM`, `ICD10PCS`, `RXN`, `ICDO3`: Other standard code systems.
    -   `ObsCat`, `ObsStatus`, `ObsInt`: FHIR code systems for observation category, status, and interpretation.
    -   `ConceptMap`: Used to map CAP SDC IDs to SNOMED CT codes.
-   **Significant patterns and constraints:**
    -   `Observation.identifier` must match the IHE SDC `Question/@instanceGUID` or `ListItem/@instanceGUID`.
    -   `Observation.code` captures the IHE SDC `Question/@ID` and `Question/@title` or `Question/Property/@propName="reportText"/@val`.
    -   `Observation.value[x]` captures the answer from IHE SDC, using appropriate data types.
    -   `Observation.hasMember` and `Observation.derivedFrom` are used to represent parent/child relationships between Observations.
    -   `Observation.component` captures additional list item response fields.
    -   `DiagnosticReport.result` references `ObservationSDCeCC` resources.
    -   `DiagnosticReport.presentedForm` includes human-readable presentations of the form.
    -   `DocumentReference.masterIdentifier` captures the form's SDC ID or instanceVersionGUID.
    -   `DocumentReference.content.attachment` contains the Base64 encoded IHE SDC form.

## Technical Essence

This IG defines a FHIR-based representation of IHE SDC forms, particularly for eCPs, by leveraging `Observation`, `DiagnosticReport`, and `DocumentReference` resources. Each `ObservationSDCeCC` instance captures a Question/Answer pair from an SDC form, with `Observation.identifier` holding the SDC instanceGUID, `Observation.code` representing the SDC question ID and title/reportText, and `Observation.value[x]` storing the answer using appropriate FHIR data types. Parent-child relationships between questions are preserved using `Observation.hasMember` and `Observation.derivedFrom`. List Item Responses are captured in `Observation.component`. Sections are represented as grouping Observations with `Observation.hasMember` linking to sub-questions. `DiagnosticReportSDCeCC` aggregates these Observations, referencing them in `DiagnosticReport.result`, and includes human-readable form representations in `DiagnosticReport.presentedForm`. `DocumentReferenceSDCeCC` is used to transmit the raw IHE SDC form as a Base64 encoded attachment, with `DocumentReference.masterIdentifier` holding the form's SDC ID or instanceVersionGUID. `ConceptMap` resources are employed to map CAP SDC IDs to standardized terminologies like SNOMED CT, facilitating semantic interoperability.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Extraction of data from IHE SDC forms and creation of corresponding FHIR resources (`Observation`, `DiagnosticReport`, `DocumentReference`).
    -   Transmission of IHE SDC forms using `DocumentReference`.
    -   Transmission of extracted data using `DiagnosticReport` and `Observation`.
    -   Querying and retrieval of `Observation`, `DiagnosticReport`, and `DocumentReference` resources.
    -   Mapping of CAP SDC IDs to standard terminologies using `ConceptMap`.
-   **Important requirements and guardrails:**
    -   Adherence to the defined profiles and constraints.
    -   Proper use of `Observation.hasMember` and `Observation.derivedFrom` to maintain the hierarchical structure of the SDC form.
    -   Inclusion of human-readable form presentations in `DiagnosticReport.presentedForm`.
    -   Base64 encoding of IHE SDC forms in `DocumentReference.content.attachment`.
    -   Consideration of sender vs. receiver responsibility for terminology mapping.
-   **Notable design choices and patterns:**
    -   Use of `Observation` to represent Question/Answer pairs.
    -   Use of `DiagnosticReport` to aggregate Observations and provide a report context.
    -   Use of `DocumentReference` to transport the raw IHE SDC form.
    -   Alignment with HL7 FHIR SDC Implementation Guide's data extraction patterns.

## Ecosystem Context

-   **Target systems and users:** Systems involved in capturing, exchanging, and utilizing eCP data, including pathology labs, cancer registries, EMRs, and clinical decision support systems. Users include pathologists, oncologists, researchers, and public health officials.
-   **Relationship to other standards/IGs:**
    -   Relies on IHE SDC for form structure and data capture.
    -   Aligns with HL7 FHIR SDC Implementation Guide's data extraction patterns.
    -   Intended to be used alongside other standards like US-Core.
-   **Relevant jurisdictions or programs:** Universal Realm, but relevant to cancer reporting programs worldwide.
-   **Primary use cases and scenarios:**
    -   Public health reporting (e.g., cancer registry reporting).
    -   Quality measurement and evaluation.
    -   Clinical guideline concordance evaluation.
    -   Auto-population of future forms.
