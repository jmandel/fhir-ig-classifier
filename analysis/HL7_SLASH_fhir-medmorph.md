# fhir-medmorph: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The MedMorph IG primarily addresses the challenge of automating the extraction and exchange of electronic health data from Data Sources (e.g., EHRs) to Data Receivers (e.g., public health agencies and research organizations) while minimizing provider burden. It tackles the lack of standardization in data formats, triggering mechanisms, and reporting workflows that currently hinder efficient data sharing for public health and research purposes.
-   **Key clinical/business problems it solves:** MedMorph aims to improve the timeliness, completeness, and quality of data available for public health surveillance, research, and quality improvement. It seeks to reduce the manual effort and costs associated with data collection and reporting, enabling more efficient use of electronic health data for secondary purposes. It also aims to streamline the onboarding of new data partners for research networks.
-   **Intended scope and boundaries:** The IG's scope is focused on defining a common reference architecture (RA) for data exchange, including API mechanisms, workflow triggers, provisioning mechanisms, and trust services. It leverages existing standards like FHIR, CDA, and regulations like ONC 2015 Edition and TEFCA. The IG is designed to be used with content IGs that specify the data elements and reporting requirements for specific use cases. Out-of-scope aspects include enabling claims data access, changes to data capture screens or clinical workflows, data not accessible by a FHIR API, and organizational policies related to data sharing and consent.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `US PH PlanDefinition`: Represents Knowledge Artifacts, defining events, conditions, and actions for workflows.
    -   `US PH Specification Bundle`: Packages PlanDefinition and its dependencies (Library, ValueSet, etc.) for distribution.
    -   `US PH Reporting Bundle`: Represents messages containing public health/research reporting data, with a MessageHeader and a nested content bundle.
    -   `US PH Content Bundle`: Contains all resources related to the patient for reporting.
    -   `US PH Response Bundle`: Represents messages containing public health/research response data.
    -   Extensions: `ext-receiverEndpoint` (in PlanDefinition) to specify the Data Receiver's endpoint.
-   **Notable operations and interactions:**
    -   `$process-message`: Used for submitting reporting bundles to Data Receivers or Trusted Third Parties.
    -   `$get-kar`: Used for retrieving Knowledge Artifacts from a Knowledge Artifact Repository.
    -   `Group/[id]/$export`: Used for exporting data for one or more patients from a Data Source for research.
-   **Key terminology and value sets:**
    -   `US PH Trigger Definition Named Event`: Defines named events that trigger workflows (e.g., encounter-start, new-diagnosis).
    -   `US PH Plan Definition Action`: Defines actions to be executed as part of workflows (e.g., check-trigger-codes, create-report).
-   **Significant patterns and constraints:**
    -   Knowledge Artifacts follow the Event-Condition-Action (ECA) rule, using PlanDefinition to define workflows.
    -   Workflows are triggered by named events, intended to be FHIR Subscription Topics.
    -   FHIR Path or CQL expressions are used for defining conditions in PlanDefinition.
    -   Actions are selected from a predefined value set and executed in a sequence.
    -   SMART on FHIR Backend Services Authorization is used for system-to-system interactions.
    -   US Core profiles are leveraged for representing patient data.
    -   Bulk Data Access IG is used for retrieving population-level information.

## Technical Essence

The MedMorph RA IG orchestrates automated data exchange via Knowledge Artifacts, represented as `PlanDefinition` resources within `Specification Bundle`s. These artifacts define ECA rules triggered by `named-events` (e.g., `encounter-start`, `new-diagnosis` from the `US PH Trigger Definition Named Event` ValueSet) intended to map to FHIR `SubscriptionTopics`.  Conditions are expressed using FHIRPath or CQL within `PlanDefinition.action.condition`, referencing `Library` resources for logic and `ValueSet`s for trigger codes. Actions, chosen from the `US PH Plan Definition Action` ValueSet, dictate workflow steps like `create-report` and `submit-report`, executed sequentially or with time-based dependencies via `PlanDefinition.action.relatedAction`. The `PlanDefinition.ext-receiverEndpoint` extension specifies the Data Receiver's FHIR endpoint for report submission. Reports are packaged as `US PH Reporting Bundle`s, a `Bundle` of type 'message' with a `MessageHeader` (including sender/receiver details) and a nested `US PH Content Bundle` containing the patient-centric data.  Submission occurs via the `$process-message` operation. For research, the `Group/[id]/$export` operation extracts data, leveraging US Core profiles and Bulk Data Access. Trust services (de-identification, pseudonymization) are invoked via operations defined in the `Trust Service Provider` Capability Statement.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Provisioning: Data Receivers create and publish Knowledge Artifacts; HDEAs retrieve and process them.
    -   Notification: Data Sources notify HDEAs of events; HDEAs evaluate conditions and trigger actions.
    -   Report Creation: HDEAs query Data Sources, apply trust services if needed, and assemble reports.
    -   Data Submission: HDEAs submit reports to Data Receivers or TTPs using `$process-message`.
    -   Response Receiving: Data Receivers send responses back to HDEAs, potentially via TTPs.
-   **Important requirements and guardrails:**
    -   HDEAs must be able to process FHIR Path expressions and handle action dependencies.
    -   Data Sources should support Subscriptions for named events.
    -   Trust Service Providers must support operations for de-identification, pseudonymization, etc.
    -   Content IGs must define specific data elements and reporting requirements for each use case.
-   **Notable design choices and patterns:**
    -   Use of PlanDefinition to represent Knowledge Artifacts and ECA rules.
    -   Leveraging named events and Subscription Topics for triggering workflows.
    -   Modular design with a common RA and use case-specific content IGs.
    -   Emphasis on automation and reducing provider burden.

## Ecosystem Context

-   **Target systems and users:** Data Sources (EHRs, HIEs, Data Warehouses), HDEAs (backend services apps), Knowledge Artifact Repositories, Trust Service Providers, TTPs, Data Receivers (PHAs, ROs), Data Marts.
-   **Relationship to other standards/IGs:** Builds upon FHIR R4, US Core, Bulk Data Access, SMART App Launch, and Subscriptions Backport IGs. Aligns with eCR FHIR IG and contributes to the US Public Health Profiles Library. Compatible with Hybrid/Intermediary Exchange IG and CDMH IG.
-   **Relevant jurisdictions or programs:** Primarily focused on the US healthcare system, with relevance to CDC, ONC, and other public health and research initiatives.
-   **Primary use cases and scenarios:**
    -   Health Care Surveys: Automating data collection for national surveys like NHCS and NAMCS.
    -   Hepatitis C: Improving data availability for public health surveillance and elimination efforts.
    -   Cancer Registry Reporting: Automating cancer case reporting from ambulatory care practices to state registries.
    -   Research: Streamlining data partner onboarding and data contribution to research networks.
