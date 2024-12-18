# fhir-shc-vaccination-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the interoperable exchange of vaccination records and infectious disease laboratory test results within the context of SMART Health Cards (SHCs). It focuses on enabling the secure and privacy-preserving sharing of this information between Issuers, Holders, and Verifiers. The main challenge is to define a standardized, minimal set of FHIR resources that can be embedded within an SHC, ensuring data minimization while still supporting verification use cases.
-   **Key clinical/business problems it solves:** The IG facilitates the verification of an individual's vaccination status and/or infectious disease testing history, which is crucial for public health management, travel, access to venues, and other scenarios where such verification is needed. It streamlines the process by providing a standardized, digitally verifiable format for sharing this information.
-   **Intended scope and boundaries:** The IG's scope is limited to the FHIR resources contained within an SHC related to vaccination and infectious disease testing. It does not cover general-purpose FHIR endpoints or the canonical representation of clinical data in EHR systems. It also does not describe API operations for issuing health cards, although it does reference the SHC specification's FHIR API operation for issuing SHCs. The IG is designed to support creating resources that fit within the size constraints of a single Version 22 QR code.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Patient Profiles:** `SHCPatientGeneralAD`, `SHCPatientGeneralDM`, `SHCPatientUnitedStatesAD`, `SHCPatientUnitedStatesDM` (defines patient demographics with a focus on data minimization).
    -   **Vaccination Profiles:** `SHCVaccinationAD`, `SHCVaccinationDM` (represents a single vaccination event).
    -   **Laboratory Results Profiles:** `SHCCovid19LaboratoryResultObservationAD`, `SHCCovid19LaboratoryResultObservationDM`, `SHCInfectiousDiseaseLaboratoryResultObservationAD`, `SHCInfectiousDiseaseLaboratoryResultObservationDM` (represents lab test results).
    -   **Bundle Profiles:** `SHCVaccinationBundleAD`, `SHCVaccinationBundleDM`, `SHCCovid19LaboratoryBundleAD`, `SHCCovid19LaboratoryBundleDM`, `SHCInfectiousDiseaseLaboratoryBundleAD`, `SHCInfectiousDiseaseLaboratoryBundleDM` (defines the structure of the FHIR bundle within an SHC).
-   **Notable operations and interactions:** The IG does not define specific operations but implies interactions where Issuers generate FHIR resources conforming to the defined profiles, Holders store these resources in SHCs, and Verifiers read and validate the resources.
-   **Key terminology and value sets:**
    -   **CVX:** For identifying vaccine products.
    -   **ICD-11 MMS:** For identifying vaccine products.
    -   **SNOMED CT:** For identifying vaccine products and lab test results.
    -   **LOINC:** For identifying lab tests.
    -   **IdentityAssuranceLevel:** Value set based on NIST 800-63-3 for indicating the level of identity assurance.
    -   **SpecimenCollectionSupervisionStatus:** Value set for identifying whether a specimen was collected by the patient with supervision, without supervision, etc.
-   **Significant patterns and constraints:**
    -   **Data Minimization (DM) and Allowable Data (AD) Profiles:** Each resource has a pair of profiles: a primary DM profile with strict cardinality constraints to minimize data, and a fallback AD profile with relaxed constraints.
    -   **`MustSupport` Interpretation:** `MustSupport` elements must be populated if data is available, but are not required if data is unavailable. Verifiers must process `MustSupport` and `Is-Modifier` elements.
    -   **Resource References:** References within the bundle use the `resource:#` format for local uniqueness.
    -   **Terminology Bindings:** `MustSupport` elements have `required` value set bindings to ensure consistent code system usage.

## Technical Essence

This IG defines a constrained FHIR representation of vaccination and infectious disease lab results for SMART Health Cards, emphasizing data minimization. Issuers create `Bundle` resources containing a `Patient` and one or more `Immunization` or `Observation` resources. `Patient` profiles (`SHCPatientGeneralDM/AD`, `SHCPatientUnitedStatesDM/AD`) include minimal demographics (name, birthDate) with strict constraints on identifiers (prohibited in US profiles). `Immunization` resources (`SHCVaccinationDM/AD`) specify the vaccine using CVX, ICD-11 MMS, or SNOMED CT codes in `vaccineCode`, with `occurrenceDateTime` indicating the administration date. `Observation` resources (`SHCCovid19LaboratoryResultObservationDM/AD`, `SHCInfectiousDiseaseLaboratoryResultObservationDM/AD`) represent lab results, using LOINC for `code` and SNOMED CT for `valueCodeableConcept`, with `effectiveDateTime` indicating specimen collection time.  `Bundle` profiles (`SHCVaccinationBundleDM/AD`, `SHCCovid19LaboratoryBundleDM/AD`, `SHCInfectiousDiseaseLaboratoryBundleDM/AD`) enforce the inclusion of one `Patient` and one or more `Immunization` or `Observation` resources. All resources use the `resource:#` format for internal references. Each resource type has a "Data Minimization" (DM) profile with strict cardinality constraints (e.g., prohibiting `Patient.identifier` in US profiles) and an "Allowable Data" (AD) profile with relaxed constraints as a fallback. Identity assurance is conveyed via `meta.security` using the `IdentityAssuranceLevel` value set.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  **Issuance:** Issuers generate FHIR resources conforming to the IG's profiles, bundle them, and embed them in an SHC.
    2.  **Presentation:** Holders present the SHC (containing the FHIR bundle) to Verifiers.
    3.  **Verification:** Verifiers extract the FHIR bundle, validate it against the IG's profiles, and interpret the clinical data to determine vaccination or testing status.
-   **Important requirements and guardrails:**
    -   **Data Minimization:** Issuers should prioritize the DM profiles to minimize data exposure.
    -   **Terminology Adherence:** Issuers must use codes from the specified code systems and value sets.
    -   **Size Constraints:** The FHIR bundle must fit within the size limits of a single Version 22 QR code.
    -   **Identity Assurance:** Issuers should populate `meta.security` with the appropriate identity assurance level if available.
-   **Notable design choices and patterns:**
    -   **DM/AD Profile Pairs:** Provides flexibility while encouraging data minimization.
    -   **`resource:#` References:** Simplifies internal referencing within the bundle.
    -   **`MustSupport` with Missing Data:** Allows for omission of elements when data is unavailable, avoiding placeholder values.

## Ecosystem Context

-   **Target systems and users:**
    -   **Issuers:** Health systems, pharmacies, labs, government agencies responsible for vaccination and testing.
    -   **Holders:** Individuals who have been vaccinated or tested.
    -   **Verifiers:** Organizations needing to verify vaccination or testing status (e.g., travel providers, schools, employers, event venues).
    -   **Wallet Applications:** Used by Holders to store digital versions of their SHC.
-   **Relationship to other standards/IGs:**
    -   **SMART Health Cards Framework:** This IG profiles the FHIR resources within an SHC.
    -   **US Core:** This IG is distinct from US Core and does not aim to describe the canonical representation of clinical data in EHR systems.
-   **Relevant jurisdictions or programs:** Initially developed by VCI and now an HL7 project sponsored by the Public Health Work Group, this IG is applicable internationally, with specific profiles for the United States.
-   **Primary use cases and scenarios:**
    -   Verification of vaccination status for travel, access to venues, employment, or school attendance.
    -   Verification of infectious disease testing results for similar purposes.
    -   Supporting public health management during outbreaks or pandemics.
