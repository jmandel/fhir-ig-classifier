# fhir-resp-net-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of automating the collection and reporting of respiratory virus hospitalization data from healthcare facilities to public health agencies, specifically for the Respiratory Virus Hospitalization Surveillance Network (RESP-NET). It aims to streamline the currently manual and labor-intensive process of identifying cases and abstracting clinical data.
-   **Key clinical/business problems it solves:** The IG seeks to improve the efficiency, timeliness, and quality of respiratory virus surveillance data. It aims to reduce the burden on surveillance sites and healthcare facilities, enable scalability to additional sites, and enhance the availability of electronic health information for public health surveillance.
-   **Intended scope and boundaries:** The IG focuses on patients hospitalized with laboratory-confirmed respiratory viruses (influenza, SARS-CoV-2, RSV) within the RESP-NET catchment area. It defines the data elements to be retrieved and the circumstances for report creation and transmission. It does not cover data quality assessment, changes to provider workflow, or consent for data sharing.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `RESP-NET-PlanDefinition`: Defines the structure and logic for generating RESP-NET reports.
    -   `RESP-NET-Content-Bundle`: Represents the clinical content within a RESP-NET report.
    -   `RESP-NET-Reporting-Bundle`: Packages the RESP-NET report for transmission.
    -   Leverages US Core, US Public Health Profiles Library, eCR, and MedMorph RA profiles.
-   **Notable operations and interactions:**
    -   `$process-message`: Used by the Data Receiver to receive reports.
    -   Subscription-based notifications for encounter-end events.
    -   FHIR Search operations to retrieve patient data based on US Core profiles.
-   **Key terminology and value sets:**
    -   Relies on standard FHIR terminologies and value sets.
    -   [data-absent-reason value set](http://hl7.org/fhir/ValueSet/data-absent-reason) for handling missing data.
-   **Significant patterns and constraints:**
    -   Uses the MedMorph Reference Architecture (RA) for automation.
    -   Employs SMART on FHIR Backend Services for authorization.
    -   Defines Must Support requirements for data elements.
    -   Specifies the use of FHIRPath for processing Knowledge Artifact actions.

## Technical Essence

This IG leverages the MedMorph RA and FHIR Subscriptions to automate RESP-NET reporting. A `PlanDefinition` (Knowledge Artifact) dictates report generation logic, triggering on `encounter-end` events via Subscriptions. The HDEA, acting as a SMART on FHIR Backend Services client, receives notifications, queries the Data Source using US Core APIs for resources like `Patient`, `Encounter`, `Condition`, `MedicationRequest`, `MedicationAdministration`, `Observation` (for lab results and vital signs), `Procedure`, `ServiceRequest`, `Immunization`, and `DiagnosticReport`, constrained by specific profiles and population criteria outlined in the `RESP-NET-Composition` profile. It then constructs a `RESP-NET-Content-Bundle` containing these resources, packages it within a `RESP-NET-Reporting-Bundle`, and submits it to the Data Receiver via the `$process-message` operation. Authorization is managed through SMART on FHIR Backend Services, with the Data Source supporting `system/*.read` and the Data Receiver supporting `system/*.read` and `system/*.write` scopes.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves the HDEA subscribing to `encounter-end` events, receiving notifications, querying the Data Source for relevant patient data, generating a report, and submitting it to the Data Receiver. An alternative workflow allows Data Sources to directly generate and submit reports without using the HDEA.
-   **Important requirements and guardrails:** Data Sources must support SMART on FHIR Backend Services, `encounter-end` Subscriptions, and US Core APIs. The HDEA must process the `RESP-NET-PlanDefinition`, create Subscriptions, handle notifications, generate reports conforming to `RESP-NET-Content-Bundle` and `RESP-NET-Reporting-Bundle`, and submit them via `$process-message`. Data Receivers must implement `$process-message` and validate incoming reports.
-   **Notable design choices and patterns:** The use of Subscriptions for event-driven reporting, the MedMorph RA for automation, and SMART on FHIR for authorization are key design choices. The IG also specifies the use of FHIRPath for processing Knowledge Artifact actions and defines Must Support requirements for data elements.

## Ecosystem Context

-   **Target systems and users:** Data Sources (EHRs, HIEs), HDEAs, Knowledge Artifact Repositories, and Data Receivers (RESP-NET sites, CDC).
-   **Relationship to other standards/IGs:** Leverages MedMorph RA, US Core, US Public Health Profiles Library, eCR, Subscriptions Backport, and SMART App Launch IGs.
-   **Relevant jurisdictions or programs:** U.S. Centers for Disease Control and Prevention (CDC), state/local public health agencies participating in RESP-NET.
-   **Primary use cases and scenarios:** Hospital-based surveillance for influenza, SARS-CoV-2, and RSV, including case detection, clinical data collection, and disease burden estimation.
