# RAD.IRA: Analysis

## Core Purpose & Scope

The IHE Radiology Integrated Reporting Applications (RAD.IRA) Implementation Guide addresses the primary interoperability challenge of enabling real-time synchronization and content sharing among multiple applications used during the radiology reporting process. It solves the key clinical/business problem of fragmented workflows where radiologists must manually switch between different systems (e.g., image viewers, reporting systems, AI tools) and re-enter or copy data, leading to inefficiencies and potential errors. The IG's scope is bounded to the reporting session, focusing on the interactions between applications like image displays, report creators, worklist clients, and evidence creators (e.g., AI tools) during the creation and review of diagnostic reports. It does not prescribe specific application launch mechanisms or define interactions outside the reporting session.

## Technical Foundation

RAD.IRA is built upon the FHIRcast specification (version 3.0.0) for publish-subscribe communication and uses FHIR R5 resources.

**Core Profiles and Extensions:**

-   `DiagnosticReportContext`: Constrains `DiagnosticReport` for use as an "open" event's anchor context, requiring `status`, `subject` (Patient), and `study` (ImagingStudy).
-   `DiagnosticReportUpdate`: Constrains `DiagnosticReport` for use in "update" events, allowing `subject` and optionally `study`. It defines the `associatedStudy` extension to reference comparison studies.
-   `ImagingStudyContext`: Constrains `ImagingStudy` for use as a context, requiring identifiers for study instance UID and accession number.
-   `PatientContext`: Constrains `Patient` for use as a context, requiring a patient identifier.
-   `ImagingSelectionContent`: Constrains `ImagingSelection` for sharing image selections and regions.
-   `ObservationContent`: Constrains `Observation` for sharing measurements and annotations, referencing the `Patient` and optionally `ImagingStudy` or `ImagingSelection`.

**Notable Operations and Interactions:**

-   RAD-146: Subscribe to Reporting Session
-   RAD-147: Connect to Notification Channel
-   RAD-148: Open Report Context
-   RAD-149: Close Report Context
-   RAD-150: Update Report Content
-   RAD-151: Select Report Content
-   RAD-152: Unsubscribe Session
-   RAD-153: Get Current Context
-   RAD-154: Distribute Context Event
-   RAD-155: Generate SyncError Event
-   RAD-156: Notify Error

**Key Terminology and Value Sets:**

-   FHIRcast event names (e.g., `DiagnosticReport-open`, `DiagnosticReport-update`)
-   FHIR resource types (e.g., `DiagnosticReport`, `ImagingStudy`, `Patient`, `Observation`, `ImagingSelection`)
-   Code systems like LOINC, SNOMED CT, DICOM, and UCUM for identifying concepts and units.

**Significant Patterns and Constraints:**

-   Uses FHIRcast's publish-subscribe model with a central Hub managing sessions and distributing events.
-   Defines a "reporting session" as a long-lived context within which multiple "report contexts" can be opened and closed.
-   Employs FHIR resources to represent both the context (e.g., patient, study, report) and shared content (e.g., measurements, image selections).
-   Mandates specific FHIR resource elements and identifiers for consistent interpretation of context and content.
-   Specifies event handling requirements for different actor roles (e.g., Image Display, Report Creator).

## Technical Essence

RAD.IRA leverages FHIRcast to enable real-time synchronization of radiology reporting applications. A central Hub manages "reporting sessions" identified by unique topic IDs. Applications ("Subscribers") subscribe to a session, receiving events via WebSockets. A "report context" is initiated with a `DiagnosticReport-open` event, carrying `DiagnosticReport`, `Patient`, and `ImagingStudy` resources profiled to require specific identifiers (e.g., study instance UID). Subsequent `DiagnosticReport-update` events, triggered by actions like adding measurements or selecting images, carry a `Bundle` of updates, including constrained `Observation` or `ImagingSelection` resources. The Hub maintains the current context and content, applying updates atomically and assigning version IDs. Subscribers track context versions to detect missed events, using `Get Current Context` to resynchronize. Content selection is managed via `DiagnosticReport-select` events, implicitly unselecting previously selected resources. Error handling uses `syncerror` events, with synchronous and asynchronous error reporting patterns.

## Implementation Approach

Implementations of RAD.IRA involve creating or adapting applications to act as FHIRcast Subscribers and a central Hub.

**Critical Workflows:**

1.  **Session Initiation:** A "Starting Application" (e.g., Image Display) initiates a reporting session by subscribing to a unique topic ID on the Hub.
2.  **Application Launch:** The Starting Application launches other applications, providing them with the Hub URL and session topic ID.
3.  **Context Synchronization:** Applications subscribe to the session and receive `DiagnosticReport-open` events to synchronize to the current patient, study, and report.
4.  **Content Sharing:** Applications use `DiagnosticReport-update` to share content (e.g., measurements, image selections) as FHIR resources within a `Bundle`.
5.  **Content Selection:** Applications use `DiagnosticReport-select` to highlight specific content for other applications to react to.
6.  **Report Status Update:** The Report Creator uses `DiagnosticReport-update` to update the report status (e.g., to "final").
7.  **Context Closure:** The Report Creator (or other authorized actor) uses `DiagnosticReport-close` to terminate a report context.
8.  **Session Closure:** Applications unsubscribe from the session when they are closed.

**Important Requirements:**

-   Subscribers must handle events according to their role (e.g., Image Display shows images, Report Creator updates report).
-   Subscribers must track context version IDs to ensure they are synchronized.
-   Content Creators must use the specified FHIR profiles for shared content.
-   The Hub must manage sessions, contexts, and content according to FHIRcast and RAD.IRA specifications.

**Notable Design Choices:**

-   Use of FHIRcast for real-time event distribution.
-   Long-lived sessions with multiple short-lived report contexts.
-   FHIR resources for both context and content.
-   Atomic updates and versioning for content sharing.
-   Implicit unselection in `DiagnosticReport-select` events.

## Ecosystem Context

**Target Systems and Users:**

-   Radiology reporting systems (RIS)
-   Picture Archiving and Communication Systems (PACS)
-   Image viewing and analysis applications
-   AI tools for image analysis and evidence creation
-   Worklist management systems
-   Radiologists, residents, and other clinicians involved in the reporting process

**Relationship to Other Standards/IGs:**

-   **FHIRcast:** Core standard for publish-subscribe communication.
-   **SMART App Launch:** Recommended for application launching and authorization.
-   **IHE ITI IUA:** Recommended for user authentication and authorization.
-   **IHE ITI ATNA:** Recommended for audit logging.
-   **IHE RAD IMR:** Potential grouping with Report Creator for interactive multimedia reports.
-   **IHE RAD SWF.b:** Potential grouping with Image Display and Evidence Creator.
-   **IHE RAD AIW-I:** Potential grouping with Evidence Creator for AI result sharing.
-   **IHE RAD AIR:** Potential grouping with Evidence Creator for AI result creation.

**Relevant Jurisdictions or Programs:**

-   Potentially applicable in any jurisdiction where IHE profiles are used.

**Primary Use Cases:**

-   Basic reporting with image display and report creation.
-   Complex reporting with multiple applications (e.g., worklist, image display, report creator, AI tools).
-   Suspend and resume of reporting sessions.
-   Error handling during event processing.
-   Overreading of draft reports.
