# fhir-pacio-functional-status: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** Fragmented exchange of patient functional status information (mobility, self-care, and domestic life) across post-acute care (PAC) settings and other healthcare settings, including home- and community-based services (HCBS). Lack of standardized data elements and exchange mechanisms hinders care coordination during transitions.
-   **Key clinical/business problems it solves:** Improves care coordination by enabling seamless exchange of functional status data, reducing adverse outcomes, inefficiencies, and costs associated with incomplete or inaccurate information during transitions. Supports longitudinal tracking of patient function, quality measurement, and research. Addresses requirements of the IMPACT Act for standardized patient assessment data in PAC settings.
-   **Intended scope and boundaries:** Focuses on exchanging mobility, self-care, and domestic life observations, primarily in the context of PAC transitions, but intended to be applicable more broadly across healthcare settings and HCBS. The initial focus is driven by the IMPACT Act. The IG is designed to expand over time to include other functioning observations beyond PAC. It does not cover the representation of conditions, problems, diagnoses, care plans, or goals.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **FunctionalStatusCollection:** Derived from `Observation`, represents a set of functional status observations collected at a point in time using a structured resource (e.g., assessment tool).
    -   **FunctionalStatus:** Derived from `Observation`, represents a single functional status observation, typically part of a collection.
    -   **NarrativeHistoryOfFunctionalStatus:** Derived from `Observation`, used for exchanging a summary observation of prior level of function in the absence of formal assessments.
    -   **UseOfDevice:** Derived from `DeviceUseStatement`, specifies assistive devices used during assessment.
    -   **ObservationEventLocation:** Extension to indicate the location of the observation event.
    -   **DevicePatientUsed:** Extension to link a `FunctionalStatusCollection` to a `UseOfDevice` resource.
    -   **AssistanceRequired:** Extension to indicate the level of assistance required for a patient's baseline ability.
-   **Notable operations and interactions:** The IG does not define specific operations but implies the use of standard FHIR interactions like `create`, `read`, `search`, and `update` for exchanging and retrieving resources.
-   **Key terminology and value sets:**
    -   **LOINC:** Used extensively for coding assessment instruments, questions, and answers.
    -   **SNOMED CT:** Used for coding assistive devices.
    -   **PACIOFunctioningCategoryCS/VS:** Defines the "functioning" category for classifying observations.
    -   **LL4309-2:** Provides values for the `AssistanceRequired` extension.
-   **Significant patterns and constraints:**
    -   `FunctionalStatusCollection` uses `hasMember` to link to individual `FunctionalStatus` observations.
    -   `FunctionalStatus` and `FunctionalStatusCollection` use `derivedFrom` to point back to the `SDCQuestionnaireResponse` that provides context.
    -   `FunctionalStatusCollection` uses extensions to specify the event location and devices used.
    -   `Must Support` elements are defined according to US Core.

## Technical Essence

This IG defines a structured approach to exchanging functional status assessments using FHIR R4, leveraging `Observation` as the core building block. A `FunctionalStatusCollection` profile aggregates individual `FunctionalStatus` observations, each representing a question-answer pair from a standardized assessment instrument, primarily coded with LOINC. The `derivedFrom` element links these observations back to an `SDCQuestionnaireResponse` instance, providing the structural context of the assessment. The `UseOfDevice` profile, linked via the `device-patient-used` extension, captures assistive devices used during the assessment. The `NarrativeHistoryOfFunctionalStatus` profile provides a fallback for exchanging prior level of function when formal assessments are unavailable. The IG mandates the use of `effectiveDateTime` for single observations and allows `effectivePeriod` for collections, with a preference for `dateTime`. The `performer` element, ideally referencing a `PractitionerRole`, identifies the assessor. This design enables granular exchange and querying of functional status data, supporting diverse use cases from care transitions to quality measurement.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  Assessment instruments are administered, and data is captured in an EHR or other system.
    2.  Data is mapped to the `FunctionalStatus`, `FunctionalStatusCollection`, and `UseOfDevice` profiles.
    3.  `SDCQuestionnaireResponse` resources are created to represent the structure of the assessment.
    4.  Resources are exchanged using standard FHIR interactions (e.g., via a RESTful API).
    5.  Receiving systems can query and retrieve specific observations or collections based on patient, date, assessment type, etc.
-   **Important requirements and guardrails:**
    -   Use of standardized coding systems (LOINC, SNOMED CT) is crucial.
    -   Proper linking between `FunctionalStatusCollection`, `FunctionalStatus`, and `SDCQuestionnaireResponse` is essential.
    -   Adherence to `Must Support` requirements as defined in the IG.
    -   Security and privacy considerations, including SMART-on-FHIR and OAuth2.0, must be addressed.
-   **Notable design choices and patterns:**
    -   Leveraging `Observation` as the foundation allows for flexibility in representing various assessment types.
    -   Using `SDCQuestionnaireResponse` provides a standardized way to represent the structure of assessments.
    -   The use of extensions allows for capturing additional context without modifying the core profiles.

## Ecosystem Context

-   **Target systems and users:** EHRs, PAC provider systems, HCBS provider systems, health information exchanges (HIEs), patient-facing applications, researchers, payers. Users include clinicians, care coordinators, patients, caregivers, quality improvement professionals, and researchers.
-   **Relationship to other standards/IGs:**
    -   Relies on **FHIR R4** as the base specification.
    -   Builds on **US Core STU3** for core profiles like `Patient`, `Encounter`, `Practitioner`, etc.
    -   References **SDC (Structured Data Capture)** for `QuestionnaireResponse` representation.
-   **Relevant jurisdictions or programs:** Primarily the United States, driven by the IMPACT Act and CMS requirements for PAC settings.
-   **Primary use cases and scenarios:**
    -   Exchange of functional status data during transitions between PAC settings, hospitals, and HCBS.
    -   Sharing functional status data with patients and caregivers through mobile/web applications.
    -   Aggregating functional status data for quality measurement and reporting.
    -   Using functional status data for research and population health analysis.
    -   Supporting care coordination and care planning based on patient's functional status.
