# dk-medcom-carecommunication: Analysis

## Core Purpose & Scope

- **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of secure, standardized, and interoperable exchange of ad-hoc, non-acute care-related communications between various healthcare parties in Denmark. It specifically focuses on replacing the older DIS91/XDIS91 standard with a modern FHIR-based approach.
- **Key clinical/business problems it solves:** It facilitates digital communication within healthcare, including psychiatric and social care, by enabling secure exchange of personally identifiable information, including attachments. It supports automatic sorting of messages based on nationally agreed categories, provides a mechanism for adding topics, and ensures sender clarity through signature requirements. It also enables tracking of communication history.
- **Intended scope and boundaries:** The scope is limited to ad-hoc, non-acute care communication in Denmark where no other MedCom standard is available. It does not cover acute care scenarios or replace existing standards for specific communication needs. It is designed for message-based exchange, not real-time interactions.

## Technical Foundation

- **Core profiles and extensions:**
    -   **MedComCareCommunicationMessage:** The root profile, a constrained MedComMessagingMessage, defining the overall message structure.
    -   **MedComCareCommunicationMessageHeader:** Constrained MedComMessagingMessageHeader, specifying the event code as `care-communication-message` and requiring a focus reference to a MedComCareCommunication.
    -   **MedComCareCommunication:** Based on the FHIR Communication resource, it contains the main content, including category, topic, message segments (text and attachments), and optional sender/recipient.
    -   **MedComCareCommunicationProvenance:** Inherits from MedComMessagingProvenance, tracking message activity (new, reply, forward) and referencing previous messages.
    -   **Extensions:** `medcom-carecommunication-author-extension`, `medcom-carecommunication-datetime-extension`, `medcom-carecommunication-attachment-identifier-extension`, `medcom-carecommunication-sender-extension` for payload author, date/time, attachment identifier, and specific sender information.
- **Notable operations and interactions:** The IG primarily defines a message-based exchange pattern. Key interactions include sending new messages, replying to messages, and forwarding messages. Retract and modify operations are explicitly disallowed.
- **Key terminology and value sets:**
    -   **MedComCareCommunicationCategories:** Defines nationally agreed categories for classifying the overall content of the communication.
    -   **MedComCareCommunicationMessageActivities:** Defines allowed activities (new-message, reply-message, forward-message) for tracking message history.
    -   **MedComCoreAttachmentMimeTypes:** Specifies allowed MIME types for attachments.
- **Significant patterns and constraints:**
    -   Messages are self-contained bundles of type `message`.
    -   Messages must include a MessageHeader, Provenance, Communication, and Patient resource.
    -   Communication.identifier remains the same for replies but is updated for forwarded messages.
    -   Communication.payload contains message segments, with at least one text segment required.
    -   Attachments are included as base64-encoded data or URLs, with specific requirements for replies and forwards.
    -   Timestamps are used to track real-world events, bundle generation, and message sending.
    -   UUIDs are used for globally unique identification of resources.
    -   Invariants enforce constraints on category/priority, category/topic, and the presence of episodeOfCare-identifier in Encounter.

## Technical Essence

This IG defines a message-based communication pattern for non-acute care in Denmark using a Bundle resource of type `message`. Each message must contain a `MedComCareCommunicationMessageHeader` with a fixed event code and a focus on a `MedComCareCommunication` resource. The `MedComCareCommunication` carries the core content, including a mandatory category from a national value set, an optional free-text or coded topic, and one or more payloads representing message segments. Each payload can be either a string (message text with signature details in extensions) or an attachment (with title, identifier, and optional author information). A `MedComCareCommunicationProvenance` resource tracks the message activity (new, reply, forward) and references previous messages using either a MessageHeader reference (for FHIR messages) or a specific identifier format (for EDIFACT/OIOXML). The message must also include a `MedComCorePatient` and may include `MedComCoreEncounter`, `MedComMessagingOrganization`, `MedComCorePractitioner`, and `MedComCorePractitionerRole` resources.  Replies maintain the same Communication identifier, while forwards generate a new one. Attachments are included in full on the first send and on forwards, but only referenced by identifier in replies. Invariants enforce business rules such as the requirement for a topic when the category is "other" and the inclusion of an episodeOfCare identifier when an Encounter is present.

## Implementation Approach

-   **Critical workflows and interactions:** Implementers need to support the creation of new messages, replies, and forwards, adhering to the defined message structure and content requirements. They must handle the inclusion and referencing of attachments according to the specified rules.
-   **Important requirements and guardrails:**
    -   Strict adherence to the defined profiles and extensions is crucial.
    -   Proper handling of identifiers, especially for replies and forwards, is essential.
    -   Implementers must ensure that the required timestamps are accurately captured and included.
    -   Validation against the provided schematrons and the npm package is recommended.
    -   The invariant constraints must be enforced.
-   **Notable design choices and patterns:**
    -   The use of a self-contained message bundle simplifies message processing.
    -   The reliance on nationally agreed categories and the option for free-text or coded topics provides a balance of standardization and flexibility.
    -   The specific handling of attachments in replies and forwards optimizes bandwidth usage.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are those used by healthcare providers in Denmark, including hospitals, general practitioners, municipalities, and other parties involved in non-acute care. Users are healthcare professionals involved in patient care and communication.
-   **Relationship to other standards/IGs:** This IG depends on MedCom Core, MedCom Messaging, and DK-Core v. 2.0.0. It replaces the older DIS91/XDIS91 standard.
-   **Relevant jurisdictions or programs:** This IG is specifically designed for the Danish healthcare system and is governed by MedCom.
-   **Primary use cases and scenarios:** The IG supports various use cases, including requesting examination results, exchanging information about patient care, forwarding messages to other parties, and replying to messages received from other systems, including those using older EDIFACT or OIOXML standards. It also supports scenarios where a patient has a replacement CPR number.
