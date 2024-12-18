# fhir-subscription-backport-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the lack of a standardized topic-based subscription mechanism in FHIR R4 and R4B, enabling functionality similar to the redesigned R5 Subscriptions. It allows clients to subscribe to events based on pre-defined topics, rather than having to rely on continuous polling or complex, server-intensive query tracking. It also standardizes notification formats and content levels across different FHIR versions.
-   **Key clinical/business problems it solves:** It facilitates real-time data exchange and event-driven workflows, improving care coordination, reducing latency in data access, and enabling more efficient use of resources. It supports use cases like timely notifications of patient admissions, lab results, or medication changes.
-   **Intended scope and boundaries:** The IG focuses on backporting the R5 topic-based subscription model to R4 and R4B. It defines how to represent `SubscriptionTopic` resources, adapt the `Subscription` resource, and structure notification payloads. It does not cover guaranteed delivery of notifications, leaving that to specific implementations and channel types. It also does not define specific `SubscriptionTopic` resources, but provides examples and guidance for their creation.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `BackportSubscription`: Profiles the `Subscription` resource to link to a `SubscriptionTopic` via the `criteria` element and adds extensions for filter criteria (`backport-filter-criteria`), payload content (`backport-payload-content`), heartbeat period (`backport-heartbeat-period`), timeout (`backport-timeout`), maximum count (`backport-max-count`), and custom channel types (`backport-channel-type`).
    -   `BackportSubscriptionNotification` (R4B) and `BackportSubscriptionNotificationR4` (R4): Profiles the `Bundle` resource to define the structure of notification payloads, requiring a `SubscriptionStatus` (R4B) or a profiled `Parameters` resource (R4) as the first entry.
    -   `BackportSubscriptionStatusR4`: Profiles the `Parameters` resource in R4 to represent `SubscriptionStatus` information.
    -   `NotificationAuthorizationHint`: Extension to provide authorization context information and value (e.g., token) in notifications.
    -   `BackportRelatedQuery`: Extension to provide related query information for a notification event.
-   **Notable operations and interactions:**
    -   `$status`: Operation on `Subscription` to retrieve the current status of a subscription.
    -   `$events`: Operation on `Subscription` to retrieve historical events.
    -   `$get-ws-binding-token`: Operation on `Subscription` to obtain a token for websocket binding.
    -   `$resend`: Operation on `Subscription` to resend historical events.
-   **Key terminology and value sets:**
    -   `BackportContentCodeSystem` and `BackportContentValueSet`: Define codes for payload content levels (`empty`, `id-only`, `full-resource`).
-   **Significant patterns and constraints:**
    -   `Subscription.criteria` SHALL contain the canonical URL of the `SubscriptionTopic`.
    -   Notification bundles SHALL be of type `history`.
    -   The first entry in a notification bundle SHALL be a `SubscriptionStatus` (R4B) or a profiled `Parameters` resource (R4).
    -   `Bundle.entry.request` must exist for every `Bundle.entry` in notification bundles.

## Technical Essence

This IG enables topic-based subscriptions in FHIR R4 and R4B by defining a `Basic` resource (R4) or using the `SubscriptionTopic` resource (R4B) to represent topics, identified by canonical URLs. The `Subscription` resource is profiled (`BackportSubscription`) to reference the topic's URL in `criteria` and utilize extensions for filtering (`backport-filter-criteria` using search parameter syntax), payload content level (`backport-payload-content` from `empty`, `id-only`, `full-resource`), and channel specifics. Notifications are `history` type `Bundle` resources (`BackportSubscriptionNotification` or `BackportSubscriptionNotificationR4`) with the first entry being a `SubscriptionStatus` (R4B) or a profiled `Parameters` resource (`BackportSubscriptionStatusR4`) containing status, type, event counts, and event details.  The `notificationEvent` part can include `focus` and `additionalContext` references, and, using the `backport-related-query` extension, can provide coded query information for 'notified pull' scenarios.  Servers advertise supported topics via the `CapabilityStatement` (using the `capabilitystatement-subscriptiontopic-canonical` extension in R4). Operations like `$status`, `$events`, `$resend`, and `$get-ws-binding-token` are defined for subscription management.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Clients discover supported topics through server `CapabilityStatement` (R4) or by querying `SubscriptionTopic` resources (R4B).
    -   Clients create `Subscription` resources, referencing a topic's canonical URL and specifying filters, channel, and payload preferences.
    -   Servers validate subscriptions and send notifications via the specified channel.
    -   Clients receive notifications, process the `SubscriptionStatus` or `Parameters` resource, and potentially retrieve additional resources based on the payload content and provided references.
    -   Clients can use the `$status`, `$events`, and `$resend` operations to manage subscriptions and recover from errors.
-   **Important requirements and guardrails:**
    -   Servers SHALL validate subscriptions against supported topics and filters.
    -   Servers SHALL respect the requested payload content level, within security constraints.
    -   Clients SHALL handle different notification types (`handshake`, `heartbeat`, `event-notification`, `error`).
    -   Clients SHOULD implement error detection and recovery mechanisms.
-   **Notable design choices and patterns:**
    -   Use of `Subscription.criteria` to link to the topic's canonical URL.
    -   `history` type `Bundle` for notifications.
    -   `SubscriptionStatus` or profiled `Parameters` resource for conveying status information.
    -   `backport-filter-criteria` extension using search parameter syntax for filtering.

## Ecosystem Context

-   **Target systems and users:** FHIR servers and clients implementing or consuming subscriptions in R4 or R4B environments, particularly those needing topic-based functionality before R5 adoption.
-   **Relationship to other standards/IGs:** This IG bridges the gap between R4/R4B and R5 subscriptions, providing a backport of the R5 model. It is related to FHIRcast (for user-activity synchronization) and FHIR Messaging (for message-based communication), but addresses distinct use cases.
-   **Relevant jurisdictions or programs:** Potentially applicable in any jurisdiction or program using FHIR R4 or R4B and requiring real-time event notifications.
-   **Primary use cases and scenarios:**
    -   Notifying clients about new patient admissions, lab results, or medication changes.
    -   Real-time updates for care coordination and clinical decision support.
    -   Public health surveillance and reporting.
    -   Supporting workflows with time-shifted services or unstandardized queries through 'notified pull' mechanisms.
