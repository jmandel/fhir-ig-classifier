# fhir-pacio-pfe: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The PACIO Personal Functioning and Engagement (PFE) IG primarily addresses the challenge of exchanging standardized, structured data related to a person's functioning, including body functions, activities, and participation, across post-acute care (PAC) and other settings. It tackles the lack of consistent data structures and terminologies that hinder seamless information flow between disparate health IT systems.
-   **Key clinical/business problems it solves:** The IG aims to improve care coordination, reduce duplicative data entry, minimize errors due to missing or inaccurate information, and enhance patient outcomes by enabling timely access to crucial functional status data. It also supports compliance with the IMPACT Act, which mandates standardized patient assessment data in PAC settings.
-   **Intended scope and boundaries:** The IG focuses on representing observations related to an individual's functioning, categorized into health domains based on the International Classification of Functioning, Disability, and Health (ICF). It provides a framework for exchanging this information but does not dictate clinical practice or specific data collection methods. It is intentionally broad, covering various aspects of functioning and engagement, but it does not address group, system, or organizational functioning.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `PFECollection`: Represents a collection of observations, typically from a structured assessment instrument.
    -   `PFESingleObservation`: Represents a single observation, often a question and answer from an assessment.
    -   `PFENarrativeHistoryOfStatus`: Represents a narrative summary of a patient's prior functioning.
    -   `PFEClinicalTestObservation`: Represents observations resulting from clinical tests.
    -   `PFEUseOfDevice`: Represents the use of assistive devices during assessments.
    -   `ObservationEventLocation`: Extension to indicate where an observation event occurred.
    -   `DevicePatientUsed`: Extension to link to a record of assistive device usage.
    -   `AssistanceRequired`: Extension to indicate the level of assistance required.
-   **Notable operations and interactions:** The IG primarily relies on standard FHIR RESTful interactions, including searching for Observations using parameters like `patient`, `category`, `code`, and `date`.
-   **Key terminology and value sets:**
    -   `PFECategoryVS`: Defines health and health-related domains based on ICF categories.
    -   Domain-specific value sets (e.g., `PFEMentalFunctionsVS`, `PFEMobilityVS`): Contain LOINC codes for observations within each domain.
    -   `PFEExampleObservationsVS`: Provides example LOINC codes for various types of observations.
-   **Significant patterns and constraints:**
    -   Observations are categorized using both `survey` and a specific ICF domain code.
    -   `PFECollection` uses `hasMember` to link to child `PFESingleObservation` instances.
    -   `derivedFrom` links observations to the `QuestionnaireResponse` they are derived from.
    -   `Must Support` requirements are defined for key data elements in each profile.

## Technical Essence

The PACIO PFE IG defines a framework for exchanging personal functioning and engagement data using FHIR Observations, structured around ICF-based health domains. Each `PFESingleObservation` represents a discrete observation, typically a question and answer from an assessment, categorized with both `survey` and a specific domain code from `PFECategoryVS`. The `code` element SHOULD be drawn from the corresponding domain-specific value set. `PFECollection` aggregates these observations, often representing a complete assessment, using `hasMember` to link to individual observations. `PFENarrativeHistoryOfStatus` provides a textual summary of prior functioning. The IG leverages US Core profiles (e.g., `USCoreObservationClinicalResultProfile`, `USCoreSimpleObservationProfile`) and extends them with PFE-specific requirements, such as the `PFEDomain` category and extensions like `ObservationEventLocation` and `DevicePatientUsed`. The `derivedFrom` element links observations back to their source `QuestionnaireResponse`. This structure enables systems to exchange, query, and organize functioning data based on standardized domains, even if they don't fully understand the specific assessment instruments used.

## Implementation Approach

-   **Critical workflows and interactions:** Implementers will primarily focus on creating and querying `Observation` resources conformant to the PFE profiles. They will need to map existing assessment data to the defined profiles and terminologies.
-   **Important requirements and guardrails:**  Adherence to `Must Support` requirements is crucial. Implementers must ensure that systems can populate and process all required and `Must Support` elements. Proper use of domain-specific value sets and the `category` element is essential for interoperability.
-   **Notable design choices and patterns:** The use of a single `PFESingleObservation` profile with domain-specific categorization, rather than separate profiles for each domain, simplifies the IG and promotes flexibility. The `hasMember` and `derivedFrom` elements establish clear relationships between observations, collections, and source data.

## Ecosystem Context

-   **Target systems and users:** The IG targets health IT systems used in PAC settings (e.g., SNFs, HHAs, IRFs, LTCHs) and other settings involved in transitions of care, including hospitals, primary care, and community-based services. Users include clinicians, caregivers, payers, patients, and their families.
-   **Relationship to other standards/IGs:** The IG builds upon the US Core IG and leverages the ICF framework. It replaces the previously published PACIO Functional Status and Cognitive Status IGs, as well as the SPLASCH IG.
-   **Relevant jurisdictions or programs:** The IG is relevant to the US Realm and supports compliance with the IMPACT Act and CMS Promoting Interoperability Programs.
-   **Primary use cases and scenarios:** The IG supports provider-to-payer exchange of assessments, provider-to-provider exchange during transitions of care, and provider-to-community exchange to enable patient and family access to functioning information. The example scenario illustrates a patient journey through various care settings, highlighting the need for seamless data exchange.
