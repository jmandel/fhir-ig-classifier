# rtls-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** Facilitates real-time communication of tag location data between a Real-Time Location System (RTLS) and other healthcare systems. It standardizes the enrollment, unenrollment, and location update events for tracked tags.
-   **Key clinical/business problems it solves:** Enables external systems to subscribe to and receive location updates for specific tags, improving asset tracking, workflow optimization, and potentially patient safety by providing real-time location awareness.
-   **Intended scope and boundaries:** Defines the FHIR-based messaging for tag enrollment, unenrollment, and location updates. It explicitly excludes the definition of what constitutes an "updated location," leaving that to the RTLS implementation.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `rtlsMessageBundle`: A Bundle profile for carrying RTLS messages.
    -   `rtlsMessageHeader`: A MessageHeader profile specifying the event type (enroll, unenroll, location update).
    -   `rtlsDevice`: A Device profile representing the tracked tag.
    -   `rtlsLocation`: A Location profile representing the tag's location.
-   **Notable operations and interactions:** Three primary interactions: Enroll Tag, Unenroll Tag, and Tag Location Update. All utilize FHIR messaging.
-   **Key terminology and value sets:** Not explicitly defined in this excerpt, but likely includes codes for event types and potentially location identifiers.
-   **Significant patterns and constraints:** Employs the FHIR messaging model for all interactions. The `rtlsMessageBundle` contains a `rtlsMessageHeader` indicating the event type and references to `rtlsDevice` and, for location updates, `rtlsLocation`.

## Technical Essence

This IG defines a FHIR messaging-based protocol for RTLS integration. It leverages `rtlsMessageBundle` to encapsulate `rtlsMessageHeader` (defining event types: enroll, unenroll, location-update) and references to `rtlsDevice` (the tracked tag). For location updates, the bundle also includes an `rtlsLocation` resource. Enrollment and unenrollment messages signal external system interest in receiving updates for a specific `rtlsDevice`. Location update messages, triggered by the RTLS based on its internal logic, provide the current `rtlsLocation` of an enrolled `rtlsDevice`. This design enables a publish-subscribe model where external systems can dynamically manage their subscriptions to tag location updates.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  **Enrollment:** An external system sends an `rtlsMessageBundle` with an `rtlsMessageHeader` indicating "enroll" and referencing the `rtlsDevice` to track.
    2.  **Unenrollment:** Similar to enrollment, but with an `rtlsMessageHeader` indicating "unenroll."
    3.  **Location Update:** The RTLS, upon detecting a location change for an enrolled tag, sends an `rtlsMessageBundle` with an `rtlsMessageHeader` indicating "location-update," referencing the `rtlsDevice` and including the new `rtlsLocation`.
-   **Important requirements and guardrails:** All messages must conform to the defined FHIR profiles. The RTLS is responsible for determining when a location update is triggered.
-   **Notable design choices and patterns:** The use of FHIR messaging provides a standardized and flexible communication mechanism. The publish-subscribe pattern allows for dynamic management of subscriptions.

## Ecosystem Context

-   **Target systems and users:** RTLS platforms and other healthcare systems (e.g., EMR, asset management systems) that need real-time location data. Users could include clinicians, administrators, and logistics personnel.
-   **Relationship to other standards/IGs:** Builds upon the core FHIR standard and potentially relates to other IGs dealing with asset tracking or location services.
-   **Relevant jurisdictions or programs:** Could be applicable in any healthcare setting utilizing RTLS technology.
-   **Primary use cases and scenarios:** Tracking medical equipment, monitoring patient movement, optimizing staff workflows, and enhancing security by providing real-time location awareness.
