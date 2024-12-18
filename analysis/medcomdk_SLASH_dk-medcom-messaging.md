# dk-medcom-messaging: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing message-based exchange of healthcare data within the Danish healthcare system using FHIR. It focuses on defining a common messaging model for various MedCom messages.
-   **Key clinical/business problems it solves:** It facilitates seamless and consistent communication between different healthcare systems in Denmark, ensuring that critical information like hospital notifications, care communications, and acknowledgements are exchanged in a structured and interoperable manner.
-   **Intended scope and boundaries:** The scope is limited to defining the general messaging framework for MedCom messages. It provides foundational profiles and guidelines, which are then extended by specific use-case IGs like HospitalNotification and CareCommunication. It does not define the content of specific messages but rather the structure and common elements of all MedCom messages.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **MedComMessagingMessage:** Defines the Bundle resource of type 'message' as the root of all MedCom messages.
    -   **MedComMessagingMessageHeader:** Specifies sender, receiver, and optional carbon-copy receiver organizations, along with the message event.
    -   **MedComMessagingOrganization:** Inherits from MedComCoreOrganization, requiring both SOR and EAN/GLN identifiers for addressing.
    -   **MedComMessagingProvenance:** Tracks message activity, history, and involved organizations, referencing the current and previous messages.
    -   **MedComMessagingDestinationUseExtension:** Indicates whether a destination is a primary or carbon-copy recipient.
    -   **MedComMessagingMessageDefinition:** Defines the characteristics of a message, including the initiating event, content, and permitted responses.
    -   **MedComMessagingMessageDefinitionFhir:** Supports FHIR messages and inherits requirements from MedComMessagingMessageDefinition.
    -   **MedComProducerOrganization:** Represents the producer of observations, requiring a MedCom ProducerID.
    -   **MedComRequesterOrganization:** Represents the organization requesting observations, requiring contact information and identifiers like SOR, EAN, and Ydernummer.
-   **Notable operations and interactions:** The IG primarily focuses on message exchange, implying create and read operations for the defined resources.
-   **Key terminology and value sets:**
    -   **$MessageEvents:** Codes for different message events (e.g., empty-message, care-communication-message).
    -   **$Use:** Codes for destination use (primary, cc).
    -   **$SORCode, $EANCode:** Identifiers for organizations.
    -   **$activityCodes:** Codes for message activities (e.g., new-message).
    -   **$MessageTypes:** Value set for message types.
    -   **$ActivityCodesValueset:** Value set for activity codes.
    -   **$ProducenID:** Code system for producer identifiers.
    -   **$MessageDefinitionIdentifierSystem, $MessageDefinitionIdentifierSystemVS:** Code system and value set for message definition identifiers.
    -   **$MedComMessageDefinitionType, $MedComMessageDefinitionTypeVS:** Code system and value set for message definition types.
    -   **$UsageContextCodeSystem, $UsageContextCodeSystemVS:** Code system and value set for usage context codes.
-   **Significant patterns and constraints:**
    -   All messages must start with a MedComMessagingMessageHeader as the first entry in the Bundle.
    -   At least one MedComMessagingProvenance resource is required in each message.
    -   Organizations must have both SOR and EAN/GLN identifiers.
    -   Provenance.target must reference the MedComMessagingMessageHeader of the current message.
    -   Provenance.entity is used to link to previous messages, with specific roles for different message types (revision, removal).
    -   RequesterOrganization requires either initials of the requesting practitioner or a data-absent-reason.

## Technical Essence

This IG establishes a standardized FHIR messaging framework for the Danish MedCom system. Each message is a Bundle (MedComMessagingMessage) with a mandatory MessageHeader (MedComMessagingMessageHeader) as the first entry, defining sender and receiver Organizations (MedComMessagingOrganization) identified by SOR and EAN/GLN codes. Message history and activity are tracked via a mandatory Provenance resource (MedComMessagingProvenance) referencing the current MessageHeader and optionally previous messages via Provenance.entity, using roles like 'revision' or 'removal'. The MessageHeader.event is drawn from a defined set of MedCom message event codes. The MessageDefinition (MedComMessagingMessageDefinition) profile, not included in message exchange, provides metadata about the message type, including initiating event and expected responses. Specific message types like FHIR messages are supported through profiles like MedComMessagingMessageDefinitionFhir. Producer and Requester organizations are represented by MedComProducerOrganization and MedComRequesterOrganization, respectively, with specific identifier and contact information requirements.

## Implementation Approach

-   **Critical workflows and interactions:** The primary workflow involves sending and receiving messages conforming to the defined structure. Senders create a Bundle with the appropriate resources, and receivers process the Bundle, validating the structure and content.
-   **Important requirements and guardrails:**
    -   Strict adherence to the defined profiles and their constraints is crucial.
    -   Proper use of identifiers (SOR, EAN/GLN) for addressing is essential.
    -   Accurate tracking of message history and activity through Provenance is required.
    -   Validation against the defined MessageDefinition is necessary for message type conformance.
-   **Notable design choices and patterns:**
    -   The use of a Bundle as the root of all messages provides a clear structure.
    -   The mandatory MessageHeader and Provenance resources ensure consistent metadata and traceability.
    -   The inheritance model (e.g., MedComMessagingOrganization inheriting from MedComCoreOrganization) promotes reuse and consistency.
    -   The use of extensions like MedComMessagingDestinationUseExtension adds flexibility while maintaining structure.

## Ecosystem Context

-   **Target systems and users:** The target systems are healthcare IT systems within Denmark, including hospitals, primary care providers, and municipal care teams. Users are healthcare professionals and administrators involved in exchanging patient information.
-   **Relationship to other standards/IGs:** This IG depends on MedComCore IG and DK-core v. 2.0.0, defined by HL7 Denmark. It also references the MedCom Terminology IG for CodeSystems and ValueSets.
-   **Relevant jurisdictions or programs:** This IG is specific to Denmark and is governed by MedCom, the Danish organization responsible for healthcare data exchange standards.
-   **Primary use cases and scenarios:** The primary use cases include exchanging hospital notifications, care communications, and acknowledgements between different healthcare providers. For example, a hospital sending a notification to a general practitioner about a patient's discharge, or a general practitioner ordering homecare observations from a municipal care team.
