# dk-medcom-hospitalnotification: Analysis

## Core Purpose & Scope

This Implementation Guide (IG), `dk-medcom-hospitalnotification`, addresses the interoperability challenges related to the exchange of hospital notification messages between Danish hospitals and municipalities. It primarily solves the clinical/business problem of ensuring continuity of care for patients transitioning between hospital and primary care settings. The IG facilitates timely communication about a patient's admission, leave, and discharge, enabling municipalities to pause and resume relevant services and to request a Report of Admission. The scope is limited to message-based exchange of hospital notifications and does not cover other types of clinical information exchange.

## Technical Foundation

The IG's technical foundation rests on FHIR R4 (v4.0.1) and builds upon several core profiles and extensions:

-   **Core Profiles:**
    -   `MedComHospitalNotificationMessage`: Constrains `MedComMessagingMessage` to define the overall structure of the hospital notification message.
    -   `MedComHospitalNotificationMessageHeader`: Constrains `MedComMessagingMessageHeader` to specify fixed codings and require a focus on `MedComHospitalNotificationEncounter`.
    -   `MedComHospitalNotificationEncounter`: Constrains `MedComCoreEncounter` to capture the clinical details of the hospital stay, including status, class, period, and service provider.
    -   `MedComMessagingProvenance`: Tracks the activity of the notification, referencing previous messages to create a historical overview.
    -   `MedComCorePatient`: Used to represent the patient, restricted to those with an official Danish CPR number.
    -   `MedComCoreOrganization`: Describes the service provider organization.
    -   `MedComMessagingOrganization`: Describes the sender and primary receiver of the notification.
-   **Core Extensions:**
    -   `MedComHospitalNotificationLeavePeriodExtension`: Captures the start and end timestamps of a patient's leave.
    -   `MedComHospitalNotificationReportOfAdmissionExtension`: Indicates whether a report of admission is requested.
    -   `MedComHospitalNotificationReportOfAdmissionRecipientExtension`: Specifies the recipient of the report of admission.
-   **Key Terminology and Value Sets:**
    -   `medcom-messaging-eventCodes`: Defines the event code `hospital-notification-message`.
    -   `medcom-hospitalNotification-encounterStatus`: Defines allowed encounter statuses (e.g., `in-progress`, `onleave`, `finished`).
    -   `medcom-hospitalNotification-encounterClass`: Defines allowed encounter classes (e.g., `inpatient`, `emergency`).
    -   `medcom-hospitalNotification-messageActivities`: Defines allowed activity codes for provenance (e.g., `admit-inpatient`, `start-leave-inpatient`).
-   **Notable Operations and Interactions:**
    -   The IG focuses on message exchange, with no specific operations defined beyond the implicit sending and receiving of FHIR messages.
-   **Significant Patterns and Constraints:**
    -   The message structure follows a Bundle resource containing a MessageHeader, Provenance, Encounter, Patient, and Organization resources.
    -   Carbon-copy destinations are disallowed.
    -   The Encounter profile is constrained to limit the data exchanged due to legal restrictions.
    -   Episode of care identifiers are required in the Encounter, with specific guidance on handling multiple identifiers.
    -   Timestamps in Encounter, Message, and Provenance have distinct purposes and are clearly defined.

## Technical Essence

This IG defines a tightly constrained, message-based exchange of hospital notifications using FHIR Bundles. Each message is identified by a unique MessageHeader with a fixed event code `hospital-notification-message` and references a single `MedComHospitalNotificationEncounter` as its focus. The Encounter, constrained from `MedComCoreEncounter`, carries essential information about the hospital stay, including a mandatory episode of care identifier (either a locally defined UUID or LPR3 identifier, with a system if locally defined), status (`in-progress`, `onleave`, `finished`, `entered-in-error`), class (`inpatient`, `emergency`), and period reflecting the actual start and end times of the encounter. A `MedComHospitalNotificationLeavePeriodExtension` is used to capture leave periods. Provenance resources, linked to the MessageHeader, track the notification activity using codes from the `medcom-hospitalNotification-messageActivities` ValueSet and reference previous messages to establish a history. The message sender and primary receiver are represented by `MedComMessagingOrganization` resources, while the service provider is a `MedComCoreOrganization`. The `MedComCorePatient` profile is used, but limited to patients with a Danish CPR number. The `MedComHospitalNotificationReportOfAdmissionExtension` in the MessageHeader signals a request for a Report of Admission, with the recipient specified in the `MedComHospitalNotificationReportOfAdmissionRecipientExtension`.

## Implementation Approach

-   **Critical Workflows:** The IG supports workflows related to sending notifications upon patient admission, leave, return from leave, discharge, and death. Cancellation of previously sent notifications is also supported.
-   **Important Requirements:** Implementers must ensure that messages are generated in real-time based on EPR/PAS system registrations. Timestamps must accurately reflect the actual time of events. Episode of care identifiers must be correctly propagated across related messages.
-   **Notable Design Choices:** The use of a single Encounter resource to represent the entire hospital stay simplifies the message structure. The inclusion of Provenance resources enables tracking of the notification history. The strict constraints on data elements reflect the legal limitations on data exchange.

## Ecosystem Context

-   **Target Systems and Users:** The primary target systems are hospital EPR/PAS systems and municipal care systems in Denmark. Users are healthcare professionals involved in patient care across sectors.
-   **Relationship to Other Standards/IGs:** The IG depends on `MedCom Core IG`, `MedCom Messaging IG`, and `DK-core v. 2.0.0`.
-   **Relevant Jurisdictions or Programs:** The IG is specific to the Danish healthcare system and is governed by MedCom.
-   **Primary Use Cases:** The primary use cases are notifying municipalities about the start and end of a patient's hospital stay, including periods of leave, and triggering the automatic sending of a Report of Admission.
