# ITI.PMIR: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The Patient Master Identity Registry (PMIR) profile addresses the challenge of managing and sharing a single "golden record" patient identity across disparate systems, particularly in environments like Low and Middle Income Countries (LMIC) or in Organization for Economic Cooperation and Development (OECD) settings. It focuses on creating, updating, deprecating, and merging patient identities, as well as subscribing to changes in these identities.
-   **Key clinical/business problems it solves:** PMIR aims to reduce patient safety risks associated with duplicate or conflicting patient records. By establishing a "Patient Master Identity" (golden record), it ensures that healthcare providers have a consistent and accurate view of patient demographics and identifiers, even when data is sourced from multiple systems. It also facilitates the secure sharing of patient identity data with relevant organizations, such as civil registration and vital statistics databases.
-   **Intended scope and boundaries:** PMIR is designed for FHIR-only configurations without other underlying standards for patient master identity management. It defines how multiple patient master identities can be merged into a single one and how this merge flows down to data custodians. However, it does not define how references to the deprecated patient master identity from other data should be handled.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `PMIRBundle`: Constrains the Bundle resource for PMIR messages.
    -   `PMIRBundleHistory`: Defines the history Bundle for tracking patient changes.
    -   `PMIRMessageHeader`: Specifies the MessageHeader for PMIR messages.
    -   `PMIRPatientMerge`: Defines constraints for merging Patient resources.
    -   `PMIRPatientRelated`: Handles linking Patient resources to RelatedPerson resources.
    -   `PMIRRelatedPerson`: Constrains the RelatedPerson resource for PMIR.
    -   `PMIRSubscription`: Defines the Subscription resource for patient updates.
    -   `AuditPmirFeed`: Defines AuditEvent for Mobile Patient Identity Feed.
    -   `AuditPmirSubscriptionCreate`, `AuditPmirSubscriptionRead`, `AuditPmirSubscriptionUpdate`, `AuditPmirSubscriptionDelete`: Define AuditEvents for Subscription operations.
-   **Notable operations and interactions:**
    -   Mobile Patient Identity Feed \[ITI-93\]: Sends a FHIR message with new and updated Patient resources.
    -   Subscribe to Patient Updates \[ITI-94\]: Allows subscription to patient identity updates via FHIR Subscription resource.
    -   Supports PIXm \[ITI-83\] and PDQm \[ITI-78\] queries for patient lookup.
-   **Key terminology and value sets:**
    -   Relies on standard FHIR value sets for patient demographics, identifiers, and relationships.
    -   Uses `relatedperson-relationshiptype` value set for defining relationships in `RelatedPerson` resources.
-   **Significant patterns and constraints:**
    -   Uses FHIR messaging with a Bundle of type `message` for the Mobile Patient Identity Feed.
    -   Employs a Bundle of type `history` to track changes to Patient resources.
    -   Constrains the `Patient.link` element for merging and relating patients.
    -   Defines specific audit event patterns for security logging.

## Technical Essence

This IG establishes a FHIR-based patient identity registry using a central "Patient Identity Registry" actor that manages a "golden record" for each patient. Patient Identity Sources send updates to the Registry via ITI-93, which uses a Bundle message containing a MessageHeader (event `urn:ihe:iti:pmir:2019:patient-feed`) and a history Bundle. The history Bundle contains Patient resources with `entry.request.method` indicating `POST`, `PUT`, or `DELETE` operations. Merges are indicated by a `PUT` on a Patient with `active` set to `false` and a `link` of type `replaced-by` pointing to the surviving Patient. Subscriptions to updates are managed via ITI-94, where a Subscriber creates a Subscription resource with `channel.type` set to `message` and criteria like `Patient?_id=X`. The Registry then sends ITI-93 messages to the specified `channel.endpoint`. AuditEvents are defined for all operations, including detailed tracking of Subscription creation, reads, updates, and deletes.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   Patient Identity Sources create, update, delete, and merge patient identities in the Patient Identity Registry using the Mobile Patient Identity Feed \[ITI-93\].
    -   Patient Identity Subscribers subscribe to patient updates using the Subscribe to Patient Updates \[ITI-94\] transaction.
    -   Patient Identity Consumers receive patient identity updates via the Mobile Patient Identity Feed \[ITI-93\].
    -   Patient Demographics Consumers and Patient Identifier Cross-reference Consumers query the Patient Identity Registry using PDQm \[ITI-78\] and PIXm \[ITI-83\], respectively.
-   **Important requirements and guardrails:**
    -   The Patient Identity Registry must persist Patient Master Identities and manage subscriptions.
    -   Patient Identity Sources are responsible for the accuracy of Patient Master Identities and must follow domain policies for managing patient records.
    -   Security considerations mandate both server and client authentication for the Mobile Patient Identity Feed, with options for mutual-authenticated TLS (ATNA) or OAuth (IUA).
    -   Audit events must be recorded for all transactions, with specific constraints defined for each interaction.
-   **Notable design choices and patterns:**
    -   The use of FHIR messaging for the patient identity feed.
    -   The reliance on the FHIR Subscription resource for managing subscriptions.
    -   The specific audit event patterns for tracking patient identity changes and subscription management.

## Ecosystem Context

-   **Target systems and users:** Patient Identity Sources (e.g., EMRs), Patient Identity Registry, Patient Identity Consumers (e.g., CRVS, LAB, SHR), Patient Identity Subscribers, Patient Demographics Consumers, and Patient Identifier Cross-reference Consumers.
-   **Relationship to other standards/IGs:** Leverages HL7 FHIR R4, and integrates with IHE ITI profiles like PDQm, PIXm, ATNA, and IUA. It also mentions potential integration with the MHDS profile.
-   **Relevant jurisdictions or programs:** Particularly relevant for Low and Middle Income Countries (LMIC) and Organization for Economic Cooperation and Development (OECD) settings.
-   **Primary use cases and scenarios:**
    -   Lookup Patient Identity: Retrieving a patient's master identity using PIXm or PDQm.
    -   Create Patient Identity: Establishing a new patient master identity in the registry.
    -   Update Patient Identity: Modifying an existing patient's demographic information.
    -   Merge Patient Identities: Resolving duplicate patient records by merging them into a single master identity.
