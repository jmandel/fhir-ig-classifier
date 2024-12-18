# fhir-ipa: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The International Patient Access (IPA) IG primarily addresses the challenge of enabling patients to access their health information from various clinical record systems worldwide using a standardized FHIR-based API. It tackles the lack of a universal approach to patient-mediated data access, promoting interoperability across different jurisdictions and systems.
-   **Key clinical/business problems it solves:** IPA solves the problem of fragmented patient data access by providing a consistent API for patients to retrieve their records, regardless of the underlying system. This empowers patients with greater control over their health information, facilitates care coordination, and supports informed decision-making. It also enables the development of patient-facing applications that can work across different healthcare providers and regions.
-   **Intended scope and boundaries:** The IG focuses on read-only access to a defined set of patient data, including demographics, conditions, medications, immunizations, allergies, observations, and documents. It is designed to be a foundational standard that can be extended by national or regional specifications. The IG does not cover write access or advanced clinical reasoning, nor does it specify how to find the endpoint for the IPA-compatible API.

## Technical Foundation

-   **Core profiles and extensions:** The IG defines core profiles for key resources like `Patient`, `Condition`, `MedicationRequest`, `MedicationStatement`, `Immunization`, `AllergyIntolerance`, `Observation`, and `DocumentReference`. It also defines profiles for supporting resources like `Practitioner` and `PractitionerRole`. The IG uses the `data-absent-reason` extension to handle missing data.
-   **Notable operations and interactions:** The IG specifies the use of standard FHIR RESTful interactions like `read` and `search` for accessing patient data. It defines a custom `$docref` operation for retrieving and generating documents related to a patient.
-   **Key terminology and value sets:** The IG leverages standard code systems like SNOMED CT, LOINC, RxNorm, and ICD-10 for representing clinical concepts. It references value sets for allergy intolerance clinical and verification status, condition clinical and verification status, and data absent reason.
-   **Significant patterns and constraints:** The IG mandates support for JSON as the exchange format and encourages XML support. It defines specific search parameters for each resource type and outlines how to handle missing data using the `DataAbsentReason` extension. It also specifies how to declare conformance using `CapabilityStatement` resources.

## Technical Essence

The IPA IG defines a read-only FHIR API for patient-mediated access to core clinical data. It leverages the SMART App Launch framework for authorization, requiring the `launch/patient` scope. Servers must expose a `CapabilityStatement` instantiating the IPA `CapabilityStatement` and support `Patient`, `Condition`, `MedicationRequest`, `MedicationStatement`, `Immunization`, `AllergyIntolerance`, `Observation`, and `DocumentReference` resources, profiled to constrain elements and specify search parameters. A custom `$docref` operation allows retrieval and generation of patient documents. Servers must support at least one of the choice data types for elements like `Observation.effective[x]` and at least one referenced resource for elements like `DocumentReference.author`. Clients must support all data types and referenced resources for these elements. Data absence is communicated via the `DataAbsentReason` extension. The IG mandates JSON support and recommends XML.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves a client application gaining access to a patient record via SMART App Launch, confirming patient identity, and then fetching patient data using FHIR `read` and `search` operations. The `$docref` operation can be used to retrieve or generate documents.
-   **Important requirements and guardrails:** Servers must implement the specified profiles and interactions, support required search parameters, and handle missing data appropriately. Clients must be able to process resources with missing data and handle authorization failures gracefully. Both actors must adhere to the security and privacy requirements outlined in the IG.
-   **Notable design choices and patterns:** The IG adopts a minimalist approach, defining a core set of data elements and interactions that are universally applicable. It emphasizes the use of standard FHIR resources and interactions, promoting interoperability. The use of Obligations clarifies how actors must support Must Support elements.

## Ecosystem Context

-   **Target systems and users:** The IG targets clinical record systems, health information exchanges, and national health record systems, as well as patient-facing applications. The primary users are patients seeking access to their health information and developers building applications to facilitate this access.
-   **Relationship to other standards/IGs:** The IG builds upon the FHIR R4 standard and the SMART App Launch framework. It is designed to be compatible with the International Patient Summary (IPS) IG and can be extended by national or regional specifications.
-   **Relevant jurisdictions or programs:** The IG is intended for global use and does not target a specific jurisdiction or program. It aims to provide a foundation for national implementations.
-   **Primary use cases and scenarios:** The primary use case is a patient using a personal health record app to access their data from multiple healthcare providers. Other scenarios include care coordination, second opinions, and research.
