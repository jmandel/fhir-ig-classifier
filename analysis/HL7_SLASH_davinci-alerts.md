# davinci-alerts: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG primarily addresses the challenge of real-time communication of patient care events, specifically focusing on unsolicited notifications. It aims to standardize the exchange of information about events like admissions, transfers, discharges, and other significant changes in patient status or treatment between providers and payers.
-   **Key clinical/business problems it solves:** The IG solves problems related to care coordination, care management, and timely intervention by enabling providers and payers to be promptly informed about events impacting patient care. This supports value-based care by facilitating better patient outcomes and potentially reducing healthcare costs through improved information flow.
-   **Intended scope and boundaries:** The scope includes defining a FHIR messaging framework for unsolicited notifications, with an initial focus on admission, transfer, and discharge events. It outlines the technical framework, including transactions and data elements, but excludes business rules for triggering notifications, management of recipient lists, and workflows beyond FHIR endpoints.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `notifications-bundle`: Constrains the FHIR Bundle resource for notification messages.
    -   `notifications-messageheader`: Defines the MessageHeader for Da Vinci notifications, including event coding and references to sender, author, and responsible parties.
    -   `admit-notification-messageheader`, `discharge-notification-messageheader`, `transfer-notification-messageheader`: Specific MessageHeader profiles for admission, discharge, and transfer events, respectively.
    -   `adt-notification-encounter`: Based on US Core Encounter, it is the focus of the admit/discharge/transfer events.
    -   `adt-notification-condition`: Based on US Core Condition, it adds a mandatory link to the Encounter in the same message Bundle.
    -   `adt-notification-coverage`: Based on US Core Coverage, it mandates a beneficiary and payor, and supports subscriber ID.
-   **Notable operations and interactions:**
    -   The primary interaction is the use of the `$process-message` operation to send unsolicited notification messages.
    -   The IG supports both FHIR RESTful interactions and FHIR messaging, although it emphasizes the use of messaging components without requiring a full messaging framework implementation.
-   **Key terminology and value sets:**
    -   `notification-event`: A CodeSystem defining concepts for the purpose of notifications (e.g., `notification-admit`, `notification-discharge`).
    -   `notification-admit-event`, `notification-discharge-event`, `notification-transfer-event`: ValueSets for specific event types.
-   **Significant patterns and constraints:**
    -   The IG uses a simplified FHIR messaging paradigm, employing the FHIR Messaging Bundle and RESTful interaction using the `$process-message` operation.
    -   Message Bundles must include a MessageHeader and the resources referenced by `MessageHeader.focus`, and should include all resources necessary for processing, provided they have a traversal path to or from the `MessageHeader.focus`.
    -   The `aggregation` element in profiles is constrained to 'bundled', meaning references can only point to resources within the same bundle.

## Technical Essence

The Da Vinci Unsolicited Notifications IG defines a streamlined FHIR messaging framework for pushing unsolicited notifications triggered by healthcare events. Each notification is encapsulated in a Bundle of type "message", with the first entry being a MessageHeader profiled to specify the notification's purpose via a `notification-event` code (e.g., `notification-admit`). The MessageHeader also references the event's focus resource (e.g., an `adt-notification-encounter` for ADT events) and optionally, sender, author, and responsible parties using US Core profiles. The Bundle must include the focus resource and any directly referenced resources, and should include all other resources necessary for processing, provided they are linked to or from the focus resource. The `aggregation` mode for references within the Bundle is set to "bundled", enforcing that all referenced resources reside within the same Bundle. Notifications are transmitted using the `$process-message` operation to a pre-determined endpoint, with no expectation of a response message beyond standard HTTP status codes. This approach enables a lightweight, push-based notification system that leverages core FHIR resources and operations while minimizing implementation complexity.

## Implementation Approach

-   **Critical workflows and interactions:** The core workflow involves a Sender creating a notification message Bundle upon a triggering event and sending it to a Recipient or Intermediary via the `$process-message` operation. Intermediaries may forward notifications to other Recipients, potentially modifying the Bundle content.
-   **Important requirements and guardrails:** Senders must ensure that MessageHeader and focus resources are present, and should include all relevant resources within the Bundle. Recipients must be able to process Bundles containing the defined profiles and handle missing data elements gracefully.
-   **Notable design choices and patterns:** The choice to use a simplified FHIR messaging paradigm allows implementers to leverage existing FHIR infrastructure without needing a full messaging implementation. The use of profiles and the `$process-message` operation provides a standardized approach to notification exchange.

## Ecosystem Context

-   **Target systems and users:** Target systems include EHRs, practice management systems, health information exchanges (HIEs), health information networks (HINs), and payer systems. Users include providers, care management teams, and payers.
-   **Relationship to other standards/IGs:** The IG builds upon FHIR R4 and US Core R4, and references the Da Vinci Health Record Exchange (HRex) IG. It also acknowledges the FHIR R5 subscription framework and anticipates future alignment.
-   **Relevant jurisdictions or programs:** The IG is relevant to the US healthcare system and aligns with the Da Vinci project's goals of supporting value-based care.
-   **Primary use cases and scenarios:** The primary use case is unsolicited notifications for admission, transfer, and discharge events. Potential future scenarios include lab results, treatment changes, public health notifications, and others.
