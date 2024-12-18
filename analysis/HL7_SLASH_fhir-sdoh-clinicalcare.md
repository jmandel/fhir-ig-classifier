# fhir-sdoh-clinicalcare: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG tackles the challenge of standardizing the exchange of Social Determinants of Health (SDOH) data within clinical care settings. It focuses on enabling interoperability between various systems involved in SDOH-related activities, including screening, assessment, goal setting, and referral management. The primary challenge is the lack of consistent, coded representation of SDOH data, which hinders effective sharing and aggregation.
-   **Key clinical/business problems it solves:** The IG solves problems related to fragmented and non-standardized SDOH data capture and exchange. By providing a common framework, it facilitates:
    -   Improved identification of patients' social risks and needs.
    -   Streamlined referrals to community-based organizations (CBOs).
    -   Better care coordination between healthcare providers and social service entities.
    -   Enhanced population health management and quality measurement related to SDOH.
-   **Intended scope and boundaries:** The IG's scope encompasses the core activities of SDOH clinical care: screening, assessment/diagnosis, goal setting, and intervention planning/performing. It supports workflows involving patients, providers, CBOs, and coordination platforms. It is out of scope to provide guidance on the frequency of administering assessments, standards for reporting quality measures to payers, addressing consent beyond HIPAA covered entities and non-covered entities, and administrative activities such as eligibility checking, prior authorization, or billing for SDOH services.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** The IG defines profiles for core FHIR resources, including `Condition`, `Goal`, `ServiceRequest`, `Task`, `Procedure`, `Observation`, `Group`, `HealthcareService`, `Location`, and `Consent`. These profiles are often derived from or aligned with US Core profiles.
    -   **Extensions:** Notable extensions include `SDOHCC-ExtensionHealthcareServiceTelecomAppointment` for flagging appointment-related telecom details and `SDOHCC-ExtensionConditionAsserter` for specifying the device that asserted a condition.
-   **Notable operations and interactions:** The IG emphasizes RESTful interactions, particularly for referral management. Key interactions include:
    -   Posting `Task` resources to initiate and track referrals.
    -   Querying for `Task`, `ServiceRequest`, and related resources to monitor referral status.
    -   Using `Questionnaire` and `QuestionnaireResponse` for assessment instruments.
    -   Generating `Observation` and `Condition` resources from `QuestionnaireResponse` using `StructureMap`.
-   **Key terminology and value sets:**
    -   **SDOHCC-ValueSetSDOHCategory:** Categorizes SDOH concepts into domains (e.g., food insecurity, housing instability).
    -   **SDOHCC-ValueSetLOINCSNOMEDCT:** Used for `Goal.description`.
    -   **SDOHCC-ValueSetObservationStatus:** Defines status values for SDOH observations.
    -   **SDOHCC-ValueSetTaskStatus:** Defines status values for SDOH tasks.
    -   **Domain-specific value sets:** Hosted in VSAC, these value sets provide codes for specific SDOH domains, linked to the `category` element in relevant profiles.
-   **Significant patterns and constraints:**
    -   **Additional Bindings:** Profiles like `Condition`, `Goal`, `ServiceRequest`, `Procedure`, and `ObservationScreeningResponse` use additional bindings to domain-specific value sets based on the selected `category`.
    -   **Task-based workflow:** The referral process is orchestrated using `Task` resources, with different status values indicating the stage of the referral.
    -   **StructureMap-based transformation:** `QuestionnaireResponse` data is transformed into `Observation` and `Condition` resources using `StructureMap`.
    -   **Must Support and Missing Data:** Follows US Core definitions where applicable, with specific guidance for sending and receiving systems.

## Technical Essence

The `fhir-sdoh-clinicalcare` IG standardizes SDOH data exchange using a `Task`-driven workflow, leveraging `StructureMap` for assessment data transformation and domain-specific value sets for precise coding. A `ServiceRequest` initiates a referral, linked to a `Task` for tracking. The `Task.status` progresses through states like "requested," "accepted," "in-progress," and "completed," reflecting referral stages. `Task.focus` points to the `ServiceRequest`, while `Task.for` indicates the patient. CBOs or coordination platforms manage the `Task`, updating its status and linking it to performed `Procedure` resources via `Task.output`.  `Questionnaire` and `QuestionnaireResponse` capture assessment data. A `StructureMap` defines rules to transform `QuestionnaireResponse` into `Observation` (for screening responses) and `Condition` (for health concerns) resources. `Observation.code` and `Observation.value` are bound to domain-specific value sets from VSAC, selected based on `Observation.category` from `SDOHCC-ValueSetSDOHCategory`. Similarly, `Condition.code`, `Goal.description`, `ServiceRequest.code`, and `Procedure.code` use additional bindings to domain-specific value sets based on their respective `category` elements. The `SDOHCC-ExtensionHealthcareServiceTelecomAppointment` flags appointment-related telecom details in `HealthcareService`. The `SDOHCC-ExtensionConditionAsserter` allows specifying a `Device` as the condition asserter. This design enables consistent SDOH data capture, standardized referral workflows, and generation of structured, queryable clinical data from assessment instruments.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   **Referral workflow:** Providers initiate referrals by creating `ServiceRequest` and `Task` resources. CBOs or coordination platforms receive, accept/reject, and manage the referral, updating the `Task` status. The workflow supports direct and indirect referrals, with "light" versions for CBOs without FHIR servers.
    -   **Patient coordination workflow:** Providers, CBOs, or CPs can assign tasks to patients using `SDOHCC-TaskForPatient`, such as completing questionnaires or reviewing materials.
    -   **Assessment instrument processing:** Systems capture assessment data using `Questionnaire` and `QuestionnaireResponse`. They then use `StructureMap` to generate `Observation` and `Condition` resources based on defined rules.
-   **Important requirements and guardrails:**
    -   Systems must support the specified profiles and extensions.
    -   Sending systems must populate all Must Support elements if the information exists and is shareable.
    -   Receiving systems must process required and Must Support elements without errors.
    -   Systems must adhere to the defined status values and allowed state transitions for `Task` resources.
    -   Domain-specific value sets must be used based on the `category` element in relevant profiles.
-   **Notable design choices and patterns:**
    -   The use of `Task` for referral management provides a flexible and trackable workflow.
    -   The `StructureMap`-based transformation allows for complex mapping logic and automation.
    -   The "additional bindings" pattern enables precise coding based on SDOH domain.
    -   The support for both direct and indirect referrals, with "light" options, accommodates various system capabilities.

## Ecosystem Context

-   **Target systems and users:** The IG targets EHR systems, patient applications, CBO systems, and coordination platforms. Users include providers, care coordinators, patients, and CBO staff.
-   **Relationship to other standards/IGs:**
    -   **US Core:** The IG builds upon and aligns with US Core, using its profiles and setting expectations for referenced resources.
    -   **SDC:** The IG leverages SDC for assessment instrument representation and data extraction.
    -   **Subscriptions R5 Backport:** The IG recommends subscriptions for monitoring task completion.
    -   **BSeR:** The IG aligns with BSeR on referral approaches.
    -   **CDex, DEQM, PAS, CRD, DTR:** These IGs may be relevant for payer interactions, quality measurement, and prior authorization related to SDOH services.
    -   **Human Services Directory:** Can be used to identify referral targets.
    -   **PACIO Cognitive Status & Functional Status:** Define standards for sharing information that may influence SDOH interventions.
    -   **Physical Activity:** Inherits functionality from the SDOH IG and uses a similar architectural approach.
    -   **SMART App Launch:** Allows launching third-party applications with controlled access to patient information.
-   **Relevant jurisdictions or programs:** The IG is focused on the U.S. environment and aligns with initiatives from organizations like the American Academy of Pediatrics, American Academy of Family Physicians, AHRQ, NQF, and IHI. It also references relevant federal policies and regulations, such as HIPAA and 42 CFR Part 2.
-   **Primary use cases and scenarios:**
    -   Documenting SDOH data in conjunction with patient encounters.
    -   Referring patients to CBOs to address SDOH needs.
    -   Managing referrals through intermediary organizations.
    -   Engaging patients directly through assigned tasks.
    -   Identifying cohorts with common SDOH characteristics.
    -   Supporting secondary use of clinical data for population health, quality improvement, and research.
