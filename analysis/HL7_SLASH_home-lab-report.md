# home-lab-report: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the exchange of at-home in-vitro test results, particularly focusing on the flow of data from digital platforms (like mobile apps) to downstream health systems, including public health agencies. It tackles the lack of a unified strategy for data standards and flow in the context of the growing use of at-home tests.
-   **Key clinical/business problems it solves:** The IG facilitates the capture, organization, and transmission of at-home test results, providing value to individuals, healthcare providers, and public health authorities. It supports public health surveillance, enables reporting of results into EHR systems, and streamlines the process for app developers by providing a common framework.
-   **Intended scope and boundaries:** The IG's scope is the transmission of at-home in-vitro test results, with a specific focus on COVID-19 as an initial use case. It provides a framework for multiple condition-specific use cases, intending to be use-case independent in its core artifacts. The IG does not constrain the ServiceRequest for the order, as the app may not have access to order details.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `BundleAtHomeInVitroTest`, `DeviceAtHomeInVitroTest`, `DiagnosticReportAtHomeInVitroResult`, `MessageHeaderAtHomeInVitroTestResults`, `ObservationAtHomeInVitroTestResult`, `ObservationPatientQuestionAnswer`, `PatientAtHomeInVitroTest`, `SpecimenAtHomeInVitroTest`.
    -   **Extensions:** `ExtensionAtHomeInVitroTestProctoredInfo`, `ExtensionAtHomeInVitroTestSourceSoftwareInfo`, `ExtensionAtHomeInVitroTestSupportingInfo`.
-   **Notable operations and interactions:** The IG leverages RESTful API interactions, messages, and transactions. It references US Core Quick Start guidance for search and read operations and SMART App Launch for app integration.
-   **Key terminology and value sets:** The IG utilizes LOINC, SNOMED CT, and HL7 v2 code systems. Key value sets include `AtHomeInVitroPatientQuestions` and references to external value sets like `Hl7VSUniversalIdType` and `US Public Health Pregnancy Status`.
-   **Significant patterns and constraints:** The IG uses a framework profile approach, with base profiles intended for further constraint by specific use cases. It heavily leverages US Core profiles and extends them with at-home testing-specific constraints. The `DiagnosticReport` is used to group results, and the `supportingInfo` extension is used to hold patient answers to questions.

## Technical Essence

This IG defines a framework for reporting at-home in-vitro test results using FHIR, built upon US Core profiles. It employs a `MessageHeader` to route a `Bundle` containing a `DiagnosticReport` that references a single `Observation` for the test result, along with `Patient`, `Specimen`, and `Device` resources. The `Observation` uses LOINC codes for test type and SNOMED CT for results, with `hasMember` for multiplex assays. Patient answers to app questions are captured in `ObservationPatientQuestionAnswer` resources, referenced via the `ExtensionAtHomeInVitroTestSupportingInfo` in the `DiagnosticReport`. `DeviceAtHomeInVitroTest` uses `udiCarrier.deviceIdentifier` to link to the LIVD spreadsheet's Testkit Name ID or Equipment UID. The `MessageHeader` includes sender and receiver details, leveraging OIDs for system identification, and the `ExtensionAtHomeInVitroTestSourceSoftwareInfo` captures app details. This design enables standardized reporting of at-home test results, supporting translation to HL7 v2 for compatibility with existing public health systems.

## Implementation Approach

-   **Critical workflows and interactions:** The workflow involves a patient using an at-home test, interacting with an app, and the app transmitting results to a data hub, which then relays the information to public health agencies. The app may ask the patient questions, the answers to which are included as supporting information.
-   **Important requirements and guardrails:** Implementers must use the provided framework profiles and constrain them for specific use cases. They must obtain app-specific identifiers from APHL and use the LIVD spreadsheet for test-specific fields. The IG mandates the use of OIDs for identifiers and provides guidance on handling multiplex tests and serial testing.
-   **Notable design choices and patterns:** The use of a single `Observation` per `DiagnosticReport` simplifies the structure. The `supportingInfo` extension is a key design choice for capturing patient-reported data. The framework profile approach allows for flexibility and extensibility.

## Ecosystem Context

-   **Target systems and users:** Target systems include mobile apps, data hubs, public health agencies, and EHR systems. Users include patients, app developers, public health officials, and healthcare providers.
-   **Relationship to other standards/IGs:** The IG is built on FHIR R4 and heavily leverages US Core IG. It also relates to HL7 v2 for backward compatibility with public health systems.
-   **Relevant jurisdictions or programs:** The IG is relevant to the US realm and is associated with the RADx® MARS initiative.
-   **Primary use cases and scenarios:** The primary use case is the reporting of COVID-19 at-home test results, but the framework is designed to be extended to other conditions. Scenarios include patients purchasing OTC tests or receiving ordered tests, interacting with an app, and the app transmitting results to public health authorities via a data hub.
