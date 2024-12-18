# ehrs-rle-ig: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of consistently capturing and managing the complete lifecycle of electronic health records (EHRs) and personal health records (PHRs) in a standardized, interoperable manner using FHIR. It focuses on recording the provenance and audit trail of record entries, ensuring data integrity, and supporting trusted information exchange.
-   **Key clinical/business problems it solves:** The IG solves problems related to record traceability, accountability, and trustworthiness. It provides a framework for managing record entries throughout their lifespan, supporting legal, clinical, business, and disclosure needs. It also facilitates compliance with regulations and standards related to health information management.
-   **Intended scope and boundaries:** The scope is limited to the management of record lifecycle events (RLEs) as defined by the ISO/HL7 10781 Electronic Health Record System Functional Model (EHR-S FM) Release 2. It defines how EHR and PHR systems should capture, store, and exchange information related to these events using FHIR resources. The IG does not cover the full scope of EHR functionality but focuses specifically on record infrastructure.

## Technical Foundation

-   **Core profiles and extensions:**
    -   `ehrsrle-provenance`: Profile on the `Provenance` resource to capture information about the creation or updating of electronic health records.
    -   `ehrsrle-auditevent`: Profile on the `AuditEvent` resource to capture information about access or manipulation of electronic health records.
-   **Notable operations and interactions:** The IG defines a `conformance-ehrs-rle` CapabilityStatement outlining the required operations for EHR systems claiming conformance. These operations likely include creating and updating `Provenance` and `AuditEvent` resources linked to other FHIR resources representing record entries.
-   **Key terminology and value sets:**
    -   `record-lifecycle-events`: Value set defining the 29 RLEs (e.g., Originate/Retain, Update/Amend, Attest, Access/View).
    -   Uses standard FHIR value sets like `AuditEventAction`, `AuditEventEventType`, `ProvenanceActivity`, `ActiveParticipantRoleCode`, etc.
-   **Significant patterns and constraints:**
    -   "Must support" in this IG means the system must capture and record the specified data elements.
    -   Each RLE is associated with an `AuditEvent` resource.
    -   RLEs that create or update content also require a `Provenance` resource.
    -   The IG emphasizes capturing W5 metadata (who, what, when, where, why) in `Provenance` and `AuditEvent` resources.

## Technical Essence

This IG mandates a rigorous audit and provenance tracking system for EHR data, centered around 29 Record Lifecycle Events (RLEs). Each RLE triggers the creation of a profiled `AuditEvent` resource, capturing the event's type, subtype, action, recorded timestamp, involved agents (with roles and references), and the affected entities (record entries). For RLEs involving content creation or modification (e.g., Originate/Retain, Update/Amend), a linked `Provenance` resource is also created, detailing the activity, agents (with signatures if applicable), recording timestamp, location, reasons, and references to the affected entities. Both `AuditEvent` and `Provenance` resources capture extensive W5 metadata. The `AuditEvent.entity` element plays a crucial role in linking the audit event to specific record entries and their content, using identifiers and references. The `Provenance.entity` element similarly links the provenance record to the affected entities and can represent relationships between record entries (e.g., linking, merging). The IG leverages standard FHIR value sets for event types, agent roles, and other coded elements, ensuring interoperability. The core pattern is the consistent creation of linked `AuditEvent` and, when applicable, `Provenance` resources for each RLE, providing a comprehensive and traceable history of each record entry.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   When an RLE occurs, the system must create an `AuditEvent` resource.
    -   For content creation/update RLEs, the system must also create a `Provenance` resource.
    -   These resources must be linked to the relevant FHIR resources representing the record entry.
    -   Systems must be able to query and retrieve these resources to provide a complete audit trail.
-   **Important requirements and guardrails:**
    -   Systems must capture all "must support" data elements.
    -   Systems must adhere to the defined RLE value set.
    -   Systems must correctly populate the W5 metadata in `AuditEvent` and `Provenance` resources.
-   **Notable design choices and patterns:**
    -   The use of `AuditEvent` and `Provenance` resources as the core building blocks for recording RLEs.
    -   The emphasis on capturing detailed metadata to ensure traceability and accountability.
    -   The use of standard FHIR value sets to promote interoperability.

## Ecosystem Context

-   **Target systems and users:** EHR and PHR systems, health information exchanges (HIEs), and other systems that manage health records. Users include clinicians, patients, administrators, auditors, and legal professionals.
-   **Relationship to other standards/IGs:** This IG is based on ISO/HL7 10781 EHR-S FM R2, ISO/HL7 16527 PHR-S FM R2, and ISO 21089 Trusted End-to-End Information Flows. It complements other FHIR IGs related to audit and provenance, such as the IHE Audit Trail and Node Authentication (ATNA) profile.
-   **Relevant jurisdictions or programs:** This IG is relevant to any jurisdiction or program that requires robust audit and provenance tracking for health records, such as HIPAA in the United States or GDPR in Europe.
-   **Primary use cases and scenarios:**
    -   Tracking the creation, modification, and access of patient records.
    -   Investigating security incidents and data breaches.
    -   Demonstrating compliance with regulations and standards.
    -   Supporting legal discovery and e-discovery processes.
    -   Ensuring the integrity and trustworthiness of health information.
