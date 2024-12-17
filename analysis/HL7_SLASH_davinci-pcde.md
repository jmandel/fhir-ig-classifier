# davinci-pcde: Analysis

## Core Purpose & Scope

This Da Vinci Payer Coverage Decision Exchange (PCDE) Implementation Guide (IG) primarily addresses the interoperability challenges associated with continuity of care when a patient transitions between health insurance payers. It solves the clinical and business problems of treatment interruptions, redundant testing, and administrative burden that arise when a new payer lacks information about a patient's ongoing treatments and their medical necessity under a previous payer. The IG's scope is focused on enabling the secure and standardized exchange of "current active treatments" and related coverage information from an original payer to a new payer, facilitating a smooth transition of care for the patient. It is not intended to fully automate the review and authorization process for the new payer, nor does it prescribe what information is required to substantiate medical necessity for any treatment.

## Technical Foundation

The PCDE IG's technical foundation is built upon FHIR R4 and leverages several other IGs, including US Core 3.1, Da Vinci HRex, PDex, PAS, and the Subscription Backport.

**Core Profiles and Extensions:**

-   **PCDE Bundle:** Constrains a FHIR document Bundle to contain a PCDE Composition as the first resource.
-   **PCDE Composition:** Defines the structure of the Coverage Transition document, including metadata and required sections (Active Treatments and Other Documentation).
-   **PCDE CarePlan:** Specifies the structure for conveying information about active treatments, including the condition, protocol, and activities (medications, procedures, etc.).
-   **PCDE Task (Request and Search):** Defines the Task resource for requesting and tracking the creation of a Coverage Transition document, building on HRex Task and constraining the request to a specific document code.

**Notable Operations and Interactions:**

-   **Member Match:** Uses the HRex Member Match operation to determine the patient identifier on the original payer's system.
-   **Task-based document request:** Leverages the HRex Task-based exchange mechanism to request the Coverage Transition document.
-   **Subscription (optional):** Uses the Subscription Backport IG to enable notification of Task updates.
-   **Polling (alternative to subscription):** Allows the new payer to poll the original payer's system for Task updates.

**Key Terminology and Value Sets:**

-   Custom codes for document types and sections (temporary, to be migrated to standardized codes).
-   US Core value sets for clinical terminologies.

**Significant Patterns and Constraints:**

-   **Document-based approach:** Organizes information in a FHIR document for human review and context.
-   **Task-based workflow:** Uses a Task resource to manage the document request and retrieval process.
-   **OAuth 2.0 authorization (optional):** Leverages PDex's OAuth 2.0 mechanism for member-directed authorization.
-   **Provenance:** Recommends the use of PDex Provenance to track the source and history of shared information.

## Technical Essence

This IG enables payer-to-payer exchange of coverage transition information using a FHIR R4 document-centric approach, orchestrated by a Task resource. The new payer, optionally using an OAuth 2.0 token authorized by the member, initiates the process by POSTing a `Task` (profile: `pcde-task-request`) to the original payer, specifying a `code` for a "Coverage Transition Document." This `Task` references the `Patient` (resolved via `member-match`) and indicates the requesting organization. The original payer, upon receiving the `Task`, either locates a pre-existing or assembles a new `Bundle` (profile: `pcde-bundle`) of type "document" with a `Composition` (profile: `profile-composition`) as its first entry. This `Composition` structures the document into sections, most notably "Active Treatments," which contains repeating subsections for each treatment. Each treatment subsection includes a `CarePlan` (profile: `profile-careplan`) detailing the treatment, references to supporting `Claim`s/`Prior Authorization`s, and a "Supporting Information" subsection with relevant resources (e.g., `Observation`, `Procedure`, `MedicationRequest`) and optionally their `Provenance`. The original payer updates the `Task` with `status` changes and, upon completion, includes an `output` element referencing the `Bundle`. The new payer, either through polling or subscription, monitors the `Task` and retrieves the document upon completion.

## Implementation Approach

The IG is designed to be implemented by payer systems to facilitate the exchange of coverage transition information.

**Critical Workflows and Interactions:**

1.  **Member Authorization (Optional):** The member authorizes the original payer to share data with the new payer via OAuth 2.0.
2.  **Member Match:** The new payer uses the Member Match operation to identify the patient on the original payer's system.
3.  **Document Request:** The new payer creates a Task resource to request the Coverage Transition document.
4.  **Document Creation/Retrieval:** The original payer creates or locates the document and updates the Task.
5.  **Status Tracking:** The new payer monitors the Task status via subscription or polling.
6.  **Document Retrieval:** The new payer retrieves the document when the Task is completed.

**Important Requirements and Guardrails:**

-   Conformance to the defined profiles (PCDE Bundle, Composition, CarePlan, Task).
-   Adherence to HRex security and privacy guidelines.
-   Support for Task-based exchange and either subscription or polling.
-   Minimum retention of the Task and document for 7 days or 24 hours after successful retrieval.
-   Translation of billing codes to clinical terminologies as per US Core.

**Notable Design Choices and Patterns:**

-   **Document-centric approach:** Facilitates human review and provides context.
-   **Task-based workflow:** Enables tracking and management of the exchange process.
-   **Optional OAuth 2.0:** Allows for member-directed authorization.
-   **Open-ended document structure:** Permits additional sections and data elements for future extensibility.

## Ecosystem Context

**Target Systems and Users:**

-   Original and new payer systems.
-   Patients transitioning between payers.
-   Potentially, providers involved in the patient's care.

**Relationship to Other Standards/IGs:**

-   Builds upon FHIR R4, US Core 3.1, Da Vinci HRex, PDex, PAS, and Subscription Backport.
-   Complements PDex by providing a framework for exchanging active treatment plans and supporting information.

**Relevant Jurisdictions or Programs:**

-   United States healthcare system.
-   Centers for Medicare and Medicaid Services (CMS) interoperability initiatives.
-   Da Vinci Project.

**Primary Use Cases and Scenarios:**

-   A patient with a chronic condition (e.g., diabetes, COPD) transitions to a new payer, and the new payer needs information about the patient's current medications, treatment plan, and supporting clinical data to ensure continuity of care.
-   A patient receiving home oxygen therapy moves to a new payer, and the new payer needs to verify the medical necessity of the therapy based on information held by the original payer.
-   A patient enrolled in a disease management program changes payers, and the new payer needs information about the program and the patient's progress to continue supporting their care.
