# ch-crl: Analysis

## Core Purpose & Scope

The **CH CRL (Cancer Registry)** Implementation Guide (IG) addresses the interoperability challenges related to cancer registration in Switzerland, specifically focusing on the exchange of cancer data between healthcare providers and the national cancer registry. It aims to solve the clinical and business problems associated with incomplete and inconsistent cancer data collection by providing a standardized, FHIR-based format for reporting cancer cases. The IG's scope is primarily limited to the registration of new cancer cases and does not cover other aspects of cancer care, such as treatment planning or follow-up, except for reporting recurrence. It is designed to support the legal requirements of the Swiss National Law on Cancer Registration (NLCR) and the according Ordinance on Cancer Registration (OCR).

## Technical Foundation

The CH CRL IG is built upon FHIR Release 4 (R4) and leverages several core FHIR resources, including:

-   **Profiles:** The IG defines profiles on core FHIR resources like `Patient`, `Observation`, `Condition`, `Procedure`, `Specimen`, `Organization`, `Practitioner`, `Communication`, `Composition`, and `Bundle`. Key profiles include `CHCRLPatient`, `CHCRLObservation`, `CHCRLCondition`, `CHCRLProcedure`, `CHCRLComposition`, and `CHCRLBundle`.
-   **Extensions:** The IG defines extensions to capture cancer-specific data not covered by core FHIR, such as `CHCRLOrganizationContactFunctionOfContactPerson`.
-   **Terminology and Value Sets:** The IG heavily relies on established terminologies like LOINC, SNOMED CT, ICD-O-3, and ICD-10-GM. It also defines custom value sets for specific data elements, such as the `NKRS` (National Agency for Cancer Registration) code systems for variables like diagnostic methods, TNM staging, and tumor characteristics.
-   **Operations and Interactions:** The primary interaction pattern is the submission of a `Bundle` resource of type `document` to the cancer registry. This bundle contains a `Composition` resource that references all other resources in the report.
-   **Constraints:** The IG includes numerous constraints to ensure data quality and consistency. For example, it defines case-opening criteria using the `mustSupport` flag, requiring specific patient demographics and reporting dates. It also includes constraints on profiles to enhance validation, such as requiring either a value or a dataAbsentReason for certain observations.

## Technical Essence

The CH CRL IG defines a FHIR R4-based document exchange format for cancer registration in Switzerland. It mandates a `Bundle` of type `document` containing a `Composition` that structures the report into sections (e.g., Diagnosis, Coding, StagingAndGrading). Each section references a set of resources, primarily `Observation` instances profiled to capture specific NKRS variables (e.g., `ch-crl-observation-icdo3morphology`, `ch-crl-observation-tnmstagegroup`). These profiles leverage standard terminologies (LOINC, SNOMED CT, ICD-O-3, ICD-10-GM) and custom `NKRS` code systems (e.g., `nkrs-diagnosticmethodsused`, `nkrs-tnmstagegroup`). Key design decisions include using `mustSupport` to enforce case-opening criteria (patient demographics, reporting date), binding value sets to `preferred` strength to allow local codes, and employing `data-absent-reason` to represent 'unknown' values. The IG also specifies a mapping to mCODE, facilitating interoperability with other cancer-related standards.

## Implementation Approach

The CH CRL IG is designed to be implemented by healthcare providers involved in diagnosing or treating cancer in Switzerland. The primary workflow involves:

1.  **Data Collection:** Gathering relevant patient data, including demographics, diagnosis, staging, and treatment information, according to the NKRS data dictionary.
2.  **FHIR Resource Creation:** Creating FHIR resources (primarily `Observation` instances) based on the collected data, adhering to the defined profiles and constraints.
3.  **Bundle Creation:** Assembling the resources into a `Bundle` of type `document`, with a `Composition` resource structuring the report.
4.  **Submission:** Transmitting the `Bundle` to the cancer registry, likely via a secure messaging system or API.

**Key Requirements and Design Choices:**

-   **Case-Opening Criteria:** Implementers must ensure that all case-opening criteria (marked with `mustSupport`) are met for each reported case.
-   **Terminology Mapping:** Implementers need to map local codes to the specified standard terminologies or NKRS code systems.
-   **Data Validation:** Implementers should validate the FHIR resources against the defined profiles and constraints before submission.
-   **Document Structure:** The `Composition` resource must adhere to the specified structure, grouping related resources into sections.
-   **Local Codes:** The IG allows for the use of local codes where standard codes are not available, but this should be a last resort.
-   **Unknown Values:** The IG supports the representation of 'unknown' values using the `data-absent-reason` extension.

## Ecosystem Context

-   **Target Systems:** The primary target systems are hospital information systems (HIS), electronic health records (EHRs), and the Swiss National Cancer Registry.
-   **Target Users:** The primary users are healthcare providers (physicians, pathologists, etc.) and cancer registrars.
-   **Relationship to Other Standards/IGs:** The IG is based on FHIR R4 and references other relevant standards like LOINC, SNOMED CT, ICD-O-3, and ICD-10-GM. It also includes a mapping to the mCODE (minimal Common Oncology Data Elements) standard, facilitating interoperability with other cancer-related IGs.
-   **Jurisdictions or Programs:** The IG is specifically designed for use in Switzerland and is aligned with the Swiss NLCR and OCR.
-   **Primary Use Cases:** The primary use case is the reporting of new cancer cases to the national cancer registry, including structured data (Use Case 1b) and PDF reports (Use Case 1a). The IG also supports reporting of recurrence.
