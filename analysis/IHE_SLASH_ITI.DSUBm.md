# ITI.DSUBm: Analysis

## Core Purpose & Scope

The IHE ITI Document Subscription for Mobile (DSUBm) Implementation Guide addresses the primary interoperability challenge of enabling RESTful applications to subscribe to and receive notifications about document sharing events, particularly in the context of mobile health applications. It solves the key clinical/business problem of ensuring that healthcare providers and patients are promptly informed about the availability of new or updated documents, such as lab results, prescriptions, and radiology reports. The IG's scope is bounded to document subscription and notification mechanisms, focusing on DocumentReference, Folder, and SubmissionSet resources, and is designed to be applicable in various document sharing environments, including MHDS and XDS.

## Technical Foundation

DSUBm is built upon the FHIR R4 standard and leverages the Subscriptions R5 Backport Implementation Guide.

**Core Profiles and Extensions:**

-   **Subscription:** Profiles based on the R5 Backport Subscription, defining various subscription types (e.g., Patient-Dependent DocumentReference, Multi-Patient DocumentReference, SubmissionSet, Folder) with specific criteria and extensions.
-   **SubscriptionTopic:** Profiles based on a Basic resource, defining the topics for subscription, including filter parameters and notification shapes.
-   **SubscriptionStatus:** Profiles based on the R5 Backport SubscriptionStatus, used for handshake, heartbeat, event, and deactivation notifications.
-   **Bundle:** Profiles for transaction bundles used in Resource Publish (ITI-111) and notification bundles used in Resource Notify (ITI-112).
-   **AuditEvent:** Profiles for auditing subscription creation, update, notification, publish, search, and read events.

**Notable Operations and Interactions:**

-   **Resource Subscription [ITI-110]:** Create and update (unsubscribe/reactivate) Subscription resources.
-   **Resource Publish [ITI-111]:** Publish events related to document sharing resources.
-   **Resource Notify [ITI-112]:** Send notifications (handshake, heartbeat, event, deactivation).
-   **Resource Subscription Search [ITI-113]:** Search for Subscription resources, including $status and $events operations.
-   **Resource SubscriptionTopic Search [ITI-114]:** Search for SubscriptionTopic resources.

**Key Terminology and Value Sets:**

-   **DSUBmPayload:** Defines allowed payload MIME types (application/fhir+json, application/fhir+xml).
-   **DSUBmPublishBundleActions:** Defines allowed actions (POST, PUT, DELETE) in the Resource Publish Bundle.

**Significant Patterns and Constraints:**

-   Use of Basic resource to represent SubscriptionTopic.
-   Specific constraints on Subscription criteria based on subscription type (e.g., patient-dependent, multi-patient).
-   Defined SubscriptionTopics for different document sharing resources and events.
-   Detailed AuditEvent profiles for security and traceability.

## Technical Essence

DSUBm leverages FHIR R4 with the Subscriptions R5 Backport to enable RESTful subscription and notification for document sharing events.  SubscriptionTopics, profiled as Basic resources, define the allowed filter criteria (e.g., patient, author, category, code) and notification shapes for specific resource types (DocumentReference, List for SubmissionSet and Folder). Subscriptions are created against these topics, specifying a rest-hook channel and desired payload content (empty, id-only, full-resource). The Resource Notification Broker manages subscriptions, evaluates events against subscription criteria, and sends notifications via POSTed Bundles to the specified endpoints. Notifications include SubscriptionStatus resources indicating the event type (handshake, heartbeat, event, deactivation). The Resource Publish transaction uses Bundles to communicate events, with specific constraints for different options (e.g., Minimal Update, Full Events). AuditEvents are defined for all key transactions, capturing details of subscription management and notification delivery. Subscription search is supported via standard FHIR search parameters and custom operations ($status, $events).

## Implementation Approach

Implementers will need to support the defined Subscription and SubscriptionTopic profiles, ensuring proper handling of criteria, filter parameters, and notification shapes. The Resource Notification Broker must be able to evaluate events against active subscriptions and generate appropriate notifications. The Resource Notification Subscriber must be able to create, update, and search for subscriptions, and handle received notifications. The Resource Notification Publisher must generate compliant Resource Publish bundles.  Critical workflows include subscription creation, event publication, notification delivery, and subscription search. Implementers should carefully consider the defined SubscriptionTopics and the events they cover, as well as the options for minimal update and full events. The use of AuditEvent profiles is strongly recommended for security and traceability.

## Ecosystem Context

DSUBm is designed for integration with various document sharing environments, including:

-   **Mobile Health Document Sharing (MHDS):** Grouping with MHDS Document Registry, Document Consumer, and Document Source actors.
-   **Cross-Enterprise Document Sharing (XDS.b):** Grouping with XDS Document Registry, Document Consumer, and Document Source actors.
-   **DSUB:** DSUBm can act as an interface for DSUB, translating between mobile and non-mobile subscription mechanisms.

Target systems include Electronic Health Records (EHRs), mobile health applications, personal health records (PHRs), and other systems involved in document sharing. Target users include healthcare providers, patients, and system administrators.

The primary use cases involve notifying users about the availability of new or updated documents, such as lab results, prescriptions, radiology reports, and booking reservations. DSUBm is relevant to jurisdictions or programs that utilize document sharing and require a RESTful, mobile-friendly subscription mechanism.
