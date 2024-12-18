# dk-medcom-acknowledgement: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of ensuring reliable message delivery and validation within the Danish healthcare system by standardizing the exchange of acknowledgement messages. It focuses on confirming whether a message was successfully transferred and validated.
-   **Key clinical/business problems it solves:** It solves the problem of uncertainty in message delivery, providing a mechanism for senders to know if their messages were received and processed correctly. This enhances the reliability of data exchange, which is crucial for patient care coordination and administrative processes.
-   **Intended scope and boundaries:** The scope is limited to acknowledgement messages within the MedCom messaging framework in Denmark. It defines the structure and content of these messages, including error handling, but does not cover the content of the original messages being acknowledged.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `MedComAcknowledgementMessage`: Inherits from `MedComMessagingMessage`, defining the overall structure of the acknowledgement message.
    -   `MedComAcknowledgementMessageHeader`: Inherits from `MedComMessagingMessageHeader`, specifying header details like response code and references to the original message.
    -   `MedComAcknowledgementOperationOutcome`: Based on `OperationOutcome`, providing detailed error information when message processing fails.
    -   `MedComMessagingProvenance`: Used to track the history and origin of the acknowledgement message.
-   **Notable operations and interactions:** The primary interaction is the sending of an acknowledgement message in response to a received MedCom FHIR message.
-   **Key terminology and value sets:**
    -   `response-code`: From HL7 FHIR, indicating the status of message processing (ok, fatal-error, transient-error).
    -   `MedComAcknowledgementIssueDetailValues`: A MedCom-specific value set providing detailed error codes.
    -   `MedComAcknowledgementIssueDetails`: A MedCom-specific CodeSystem for error codes.
    -   `ActivityCode`: A MedCom-specific CodeSystem for provenance activity codes.
-   **Significant patterns and constraints:**
    -   Acknowledgement messages must include a `MessageHeader` with a response code.
    -   If the response code is not 'ok', an `OperationOutcome` resource must be included.
    -   Two `Provenance` resources are included: one for the original message and one for the acknowledgement.
    -   The `MessageHeader` must conform to the `medcom-messaging-acknowledgementHeader` profile.
    -   Carbon-copy destinations are not allowed in acknowledgement messages.

## Technical Essence

This IG defines a standardized acknowledgement mechanism for MedCom FHIR messages in Denmark. Each received message triggers an acknowledgement `Bundle` of type `message`. This `Bundle` contains a `MedComAcknowledgementMessageHeader` indicating the response status (`ok`, `fatal-error`, or `transient-error`) and referencing the original message's ID. If the status is not `ok`, a `MedComAcknowledgementOperationOutcome` resource details the error using codes from the `MedComAcknowledgementIssueDetailValues` ValueSet. Two `MedComMessagingProvenance` resources track the original message and the acknowledgement, using `ActivityCode` values like `new-message` and `acknowledgement`. The `Bundle` also includes `MedComMessagingOrganization` resources for sender and receiver. This design ensures reliable message delivery confirmation and detailed error reporting within the MedCom messaging ecosystem.

## Implementation Approach

-   **Critical workflows and interactions:**
    1.  A system receives a MedCom FHIR message (e.g., HospitalNotification).
    2.  The system processes the message and determines the outcome (success or failure).
    3.  The system generates an acknowledgement message, including a `MessageHeader` with the appropriate response code.
    4.  If the response code is not 'ok', an `OperationOutcome` resource is created with details of the error.
    5.  Two `Provenance` resources are created, one for the original message and one for the acknowledgement.
    6.  The acknowledgement message is sent back to the original sender.
-   **Important requirements and guardrails:**
    -   All acknowledgement messages must conform to the defined profiles.
    -   Response codes must be used correctly to reflect the outcome of message processing.
    -   `OperationOutcome` resources must be included when errors occur and should provide detailed information using the specified value sets.
    -   Timestamps (Bundle.timestamp, Provenance.occuredDateTime, Provenance.recorded) must be accurately recorded.
-   **Notable design choices and patterns:**
    -   The use of `OperationOutcome` for detailed error reporting.
    -   The inclusion of two `Provenance` resources for traceability.
    -   The constraint that carbon-copy destinations are not allowed.

## Ecosystem Context

-   **Target systems and users:** Healthcare systems and IT vendors operating within the Danish healthcare sector, specifically those using MedCom FHIR messaging.
-   **Relationship to other standards/IGs:**
    -   Dependencies on `MedCom Core IG`, `MedCom Messaging IG`, and `DK-core v. 2.0.0`.
    -   References HL7 FHIR `response-code` value set.
-   **Relevant jurisdictions or programs:** Denmark, MedCom.
-   **Primary use cases and scenarios:**
    -   Acknowledging receipt and validation of a `HospitalNotification` message.
    -   Acknowledging receipt and validation of a `CareCommunication` message.
    -   Providing detailed error information when a message fails to process.
    -   Ensuring reliable message delivery in various healthcare communication scenarios within Denmark.
