# fhircast-docs: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** FHIRcast addresses the challenge of synchronizing the user interface context across multiple, disparate healthcare applications in real-time, particularly when a clinician is working with multiple applications simultaneously. It also enables content sharing between applications within a shared context.
-   **Key clinical/business problems it solves:** It solves the problem of maintaining a consistent clinical context (e.g., same patient, encounter, or study) across different applications, reducing the risk of errors and improving workflow efficiency. It also enables applications to share content related to the context, such as observations or reports.
-   **Intended scope and boundaries:** The scope is limited to real-time UI synchronization and content sharing between healthcare applications. It does not address broader data exchange or persistence concerns, nor does it replace existing context-sharing standards like CCOW, but rather offers a simpler, more implementer-friendly alternative for specific use cases. It is not intended for long-lived subscriptions or high-frequency updates across disparate systems.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `FHIRcastCapabilityStatement`: Extends `CapabilityStatement` to declare support for FHIRcast and optionally identify the location of a FHIRcast hub.
    -   `FHIRcastConfigurationExtension`: Extension on `CapabilityStatement.rest` to specify the FHIRcast hub URL.
    -   Profiles for FHIR resources used in `*-open`, `*-close`, `*-update`, and `*-select` events, including `Patient`, `Encounter`, `ImagingStudy`, and `DiagnosticReport`.
    -   `FHIRcastContentUpdateBundle`: Defines the structure of a `Bundle` used to carry content updates in `*-update` events.
    -   `FhircastSyncErrorOperationOutcome`: Defines the structure of `OperationOutcome` resources used in `SyncError` events.
    -   `FHIRcastHibernateContext` and `FHIRcastLogoutContext`: Profiles on `Parameters` resource to provide context for `UserHibernate` and `UserLogout` events.
-   **Notable operations and interactions:**
    -   Subscription and unsubscription to a `hub.topic` via HTTP POST to the `hub.url`.
    -   Event notification via WebSocket connections.
    -   Requesting context changes via HTTP POST to the `hub.url`.
    -   `GET Context` operation to retrieve the current context.
-   **Key terminology and value sets:**
    -   `FHIRcastCodeSystem`: Defines codes for reasons behind `UserLogout` and `UserHibernate` events.
    -   `FHIRcastHibernateReason` and `FHIRcastLogoutReason`: Value sets for hibernation and logout reasons.
-   **Significant patterns and constraints:**
    -   Use of a `hub.topic` to identify a shared session.
    -   Event names follow a `FHIRresource-suffix` pattern (e.g., `Patient-open`).
    -   Event notifications are JSON objects containing FHIR resources.
    -   Hubs may derive and send implied `*-open` events.
    -   Subscribers must handle `SyncError` events.
    -   Content sharing uses `*-update` events with a `Bundle` of changes.
    -   Content versioning is managed by the Hub using `context.versionId`.

## Technical Essence

FHIRcast enables real-time UI synchronization and content sharing between healthcare applications through a publish-subscribe model using WebSockets. Applications subscribe to a specific session identified by a unique `hub.topic` provided during a SMART on FHIR launch or other secure mechanism. The Hub, identified by `hub.url`, manages subscriptions and broadcasts workflow events like `Patient-open` or `DiagnosticReport-update` to subscribed applications. Events are JSON-formatted, containing the `hub.topic`, `hub.event`, a timestamp, a unique event `id`, and a `context` array with relevant FHIR resources (e.g., `Patient`, `Encounter`). Content sharing is achieved through `*-update` events, where a `Bundle` of type `transaction` with `PUT` or `DELETE` requests is sent to modify the shared content associated with an anchor context (e.g., a `DiagnosticReport`). The Hub manages the content's state and assigns a new `context.versionId` with each update, which Subscribers must track. For context synchronization, Subscribers can request context changes by sending events to the Hub, which then broadcasts them to all Subscribers. If a Subscriber cannot follow a context change, it responds with an HTTP error code or sends a `SyncError` event, which the Hub then broadcasts to other Subscribers.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Application launch and session discovery using SMART on FHIR or alternative mechanisms.
    -   Subscription to a `hub.topic` with specific events.
    -   Receiving and processing event notifications.
    -   Requesting context changes.
    -   Handling `SyncError` events.
    -   Content sharing using `*-update` events.
    -   Retrieving current context using `GET Context`.
-   **Important requirements and guardrails:**
    -   Subscribers must use secure WebSockets (WSS).
    -   Subscribers must handle event notifications and update their UI accordingly.
    -   Subscribers must manage the `context.versionId` for content sharing.
    -   Hubs must manage subscriptions, distribute events, and handle errors.
    -   Hubs must derive and send implied `*-open` events if they allow subscriptions to different event sets.
    -   Hubs must manage content state and versioning for content sharing.
-   **Notable design choices and patterns:**
    -   Use of WebSockets for real-time communication.
    -   Event-driven architecture.
    -   JSON-formatted event notifications.
    -   SMART on FHIR for authorization and session discovery.
    -   `hub.topic` as a session identifier and authorization ticket.
    -   Content sharing using FHIR transaction bundles.

## Ecosystem Context

-   **Target systems and users:** Clinical users working with multiple healthcare applications, such as EHRs, PACS, RIS, reporting systems, and advanced quantification applications.
-   **Relationship to other standards/IGs:** FHIRcast extends SMART on FHIR and is modeled after WebSub. It provides a simpler alternative to CCOW for specific use cases. It also relates to FHIR Subscriptions but focuses on a different set of scenarios.
-   **Relevant jurisdictions or programs:** While not tied to a specific jurisdiction, it is relevant to any healthcare setting where multiple applications need to be synchronized.
-   **Primary use cases and scenarios:**
    -   Synchronizing patient context between EHR, PACS, and dictation system.
    -   Sharing measurements and observations between imaging and reporting applications.
    -   Coordinating workflow between multiple applications in a radiology workstation.
    -   Enabling real-time collaboration between clinicians using different applications.
    -   Supporting advanced quantification applications that integrate with existing clinical workflows.
