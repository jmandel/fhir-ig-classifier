# vulcan-rwd: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of consistently extracting and utilizing Real World Data (RWD) from Electronic Health Record (EHR) systems for clinical research purposes. It focuses on standardizing the representation and retrieval of clinical data to support secondary use in research, bridging the gap between clinical care and research data needs.
-   **Key clinical/business problems it solves:** The IG aims to streamline the process of identifying patient cohorts for research studies and retrieving relevant clinical data for those cohorts from EHRs. This facilitates retrospective analysis of RWD to generate Real World Evidence (RWE), potentially supporting regulatory submissions, academic research, and other clinical research objectives.
-   **Intended scope and boundaries:** The IG's scope is currently limited to EHR systems as sources of RWD for retrospective analysis. It does not cover prospective clinical trials (eSource), transformation of retrieved data for downstream use, or other RWD sources like registries or payer systems. The guide focuses on defining FHIR profiles and search parameters to identify patient cohorts and retrieve their healthcare data.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `EncounterRwd`, `MedicationDispenseRwd`, `MedicationAdministrationRwd`, `MedicationStatementRwd`, `ObservationLaboratoryResultsRwd`, `ProcedureRwd`. These profiles extend or build upon base FHIR and International Patient Access (IPA) profiles.
    -   **Extensions:** References US Core extensions for Race and Ethnicity.
-   **Notable operations and interactions:** The IG emphasizes the use of standard FHIR search operations to identify patient cohorts and retrieve their data. It defines specific search parameters for resources like `Encounter`, `Observation`, and `Procedure`.
-   **Key terminology and value sets:** The IG defines several example value sets for specific clinical concepts, including:
    -   `ExampleACSConditionCodes` (ICD-10 codes for Acute Coronary Syndrome)
    -   `ExampleACSOralAntiplatelets` (drug codes for oral antiplatelets)
    -   `ExampleCrohnsDiseaseConditionCodes` (ICD-10 codes for Crohn's Disease)
    -   `ExampleAntiTNFADrugCodes` (EMEA product codes for specific drugs)
    -   `ExampleDiabetesConditionCodes` (ICD-10 codes for diabetes)
    -   `ExampleHbA1cTestCodes` (LOINC codes for HbA1c tests)
    -   `ExampleDialysisProcedureCodes` (SNOMED codes for dialysis procedures)
    -   `ExampleCOVID19TestCodes` (LOINC codes for COVID-19 tests)
    -   `ExampleRespiratoryConditionCodes` (LOINC and SNOMED codes for respiratory infections)
    -   `ExampleNonBNT162b2Codes` (CVX codes for non-BNT162b2 vaccines)
-   **Significant patterns and constraints:**
    -   The IG leverages the IPA as a foundation for accessing patient information and defines profiles that build upon IPA's base set.
    -   It emphasizes the use of MustSupport flags to indicate data elements that are crucial for RWD research.
    -   It provides guidance on representing absent and unknown data using the Data Absent Reason extension and specific codes.
    -   It defines extra search parameters on `Encounter`, `Observation`, and `Procedure` to enable more specific queries.

## Technical Essence

This IG enables RWD extraction from EHRs by defining a set of FHIR profiles and search parameters tailored for clinical research. It builds upon the IPA, using `ipa-patient` as the core patient profile and extending or creating new profiles for `Encounter`, `Medication` workflow resources, `Observation`, and `Procedure`.  Cohort identification is achieved through a series of FHIR searches using standard parameters like `birthdate`, `gender`, `reason-code`, `date`, `status`, `code`, `value-quantity`, and custom search parameters like `dischargeDisposition` (Encounter), `interpretation` (Observation), and `outcome` (Procedure).  Medication usage is inferred by querying `MedicationRequest`, `MedicationDispense`, `MedicationAdministration`, and `MedicationStatement`, with `MedicationStatementRwd` allowing explicit linkage to source resources via `derivedFrom`.  `ObservationLaboratoryResultsRwd` mandates support for components, enabling detailed lab result retrieval.  Systems must support at least one of the Medication resource profiles and handle missing data using either the Data Absent Reason extension or appropriate exception codes.

## Implementation Approach

-   **Critical workflows and interactions:** The IG outlines a two-phase process: 1) Cohort building, where a series of FHIR search queries are used to identify patients meeting specific criteria; 2) Healthcare data retrieval, where data for the identified patients is retrieved using IPA's mechanisms.
-   **Important requirements and guardrails:**
    -   Systems must support the defined profiles and search parameters.
    -   Systems must handle missing data appropriately, using the Data Absent Reason extension or specific codes.
    -   Systems should support at least one of the Medication resource profiles.
-   **Notable design choices and patterns:**
    -   The use of MustSupport flags to highlight essential data elements.
    -   The definition of extra search parameters to refine queries.
    -   The guidance on representing absent and unknown data.
    -   The reliance on IPA for patient access and data retrieval mechanisms.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are EHR systems that contain RWD. The target users are researchers, pharmaceutical companies, and regulatory agencies seeking to utilize RWD for clinical research.
-   **Relationship to other standards/IGs:** The IG depends on the IPA for its foundation and refers to US Core for race and ethnicity extensions. It also mentions a potential future relationship with the Vulcan Schedule of Activities (SOA) IG.
-   **Relevant jurisdictions or programs:** The IG is designed to be jurisdiction-agnostic, but it acknowledges the importance of regional guides like US Core and suggests that jurisdiction-specific versions might be created. It is developed under the auspices of the HL7 Vulcan accelerator.
-   **Primary use cases and scenarios:** The IG supports use cases related to retrospective analysis of RWD for clinical research, such as evaluating treatment effectiveness, identifying safety signals, and generating evidence for regulatory submissions. The provided examples include studies on Acute Coronary Syndrome, Anti-TNFa Treatment, COVID-19 Vaccine Effectiveness, and Diabetes Treatment Patterns.
