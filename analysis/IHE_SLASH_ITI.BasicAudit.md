# ITI.BasicAudit: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the lack of standardized, reusable AuditEvent patterns for common FHIR RESTful operations and other security/privacy relevant events. It aims to improve consistency and completeness of audit logging, especially concerning patient data access.
-   **Key clinical/business problems it solves:** Enables better privacy accounting, security monitoring, and forensic analysis by providing clear guidelines for what events to audit and how to structure the AuditEvent resources. It supports compliance with regulations like HIPAA by facilitating the creation of audit trails for patient data access and disclosure.
-   **Intended scope and boundaries:** The IG defines basic AuditEvent patterns for FHIR RESTful operations (Create, Read, Update, Delete, Search), security token usage (SAML, OAuth), consent-based authorization decisions, and privacy disclosures. It focuses on reusable patterns and does not cover transport mechanisms (addressed by ATNA) or define highly specific audit events for every possible scenario.

## Technical Foundation

-   **Core profiles and extensions:**
    -   Profiles for RESTful operations: `Create`, `Read`, `Update`, `Delete`, `Query`, and patient-specific versions (`PatientCreate`, `PatientRead`, `PatientUpdate`, `PatientDelete`, `PatientQuery`).
    -   Profiles for security token usage: `SAMLaccessTokenUse` (Minimal, Comprehensive), `OAUTHaccessTokenUse` (Opaque, Minimal, Comprehensive).
    -   Profiles for authorization and disclosure: `AuthZconsent`, `PrivacyDisclosure` (Recipient, Source).
    -   Extensions: `AssuranceLevel`, `OtherId`.
-   **Notable operations and interactions:** The IG does not define new operations but provides guidance on auditing existing FHIR RESTful interactions. It references ATNA transactions \[ITI-20] (Record Audit Event) and \[ITI-81] (Retrieve ATNA Audit Event) for transport and retrieval.
-   **Key terminology and value sets:**
    -   `AuthZsubType`: Codes for authorization event subtypes.
    -   `DataSources`: Participant source types for RESTful create.
    -   `AllReadVS`, `AllUpdateVS`, `AllSearchVS`: Value sets for RESTful interaction types.
    -   `RestObjectRoles`: Roles of objects in RESTful events.
    -   `BasicAuditEntityType`: Custom entity types like `XrequestId`.
    -   `UserAgentTypes`: Codes for identifying user agents (SAML, OAuth).
    -   `OtherIdentifierTypes`: Additional identifier types.
-   **Significant patterns and constraints:**
    -   Mandates recording of `AuditEvent.source` to identify the recording entity.
    -   Defines `client`, `server`, and `user` agent slices for RESTful interactions.
    -   Specifies `patient` entity slice for patient-specific events.
    -   Uses `entity.type` and `entity.role` to categorize entities involved in the event.
    -   Recommends recording `X-Request-Id` in a dedicated `entity` slice.
    -   Provides minimal and comprehensive patterns for security token usage, balancing privacy with audit detail.
    -   Emphasizes "best effort" population of AuditEvent elements.

## Technical Essence

This IG defines a set of AuditEvent profiles for common FHIR interactions, emphasizing patient-centric auditing and security context. For RESTful operations, it mandates `client`, `server`, and optional `user` agent slices, with `type` codes from DCM and IHE. Patient-specific profiles require a `patient` entity slice referencing the `Patient` resource.  Security token usage is captured via dedicated profiles, with `agent[user].policy` holding the token ID (SAML ID or OAuth `jti`). The `agent[user].who.identifier` carries the issuer and subject (SAML) or client ID (OAuth). Comprehensive profiles include additional details like `assuranceLevel` and `otherId` extensions, while minimal profiles focus on identifiers.  For OAuth, an opaque pattern uses the last 32 characters of the token.  Authorization decisions are logged with `AuthZconsent`, including `client`, `user`, `userorg`, and `authorizer` agents, plus `patient`, `consent`, and optional `token` entities. Privacy disclosures use `PrivacyDisclosure` profiles, differentiating between `Source` and `Recipient` perspectives, with mandatory `source`, `recipient`, `patient`, and optional `custodian`, `authorizer` agents. All profiles leverage `entity.type` and `entity.role` for detailed event context, and encourage recording the `X-Request-Id` in a dedicated `entity` slice for correlation.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   When a FHIR RESTful operation occurs, the client and/or server create an AuditEvent conforming to the relevant profile (e.g., `Create`, `PatientRead`).
    -   If a security token (SAML, OAuth) is involved, the corresponding token usage profile is also applied to the AuditEvent.
    -   Authorization services record `AuthZconsent` events when making consent-based decisions.
    -   Systems handling privacy disclosures record `PrivacyDisclosure` events.
    -   AuditEvents are transported using ATNA \[ITI-20] and can be queried using ATNA \[ITI-81].
-   **Important requirements and guardrails:**
    -   Systems **shall** populate `AuditEvent.source` to identify themselves.
    -   Systems **should** populate `patient` entity when the event involves a specific patient.
    -   Systems **should** record `X-Request-Id` when available.
    -   Systems **should** follow "best effort" when populating AuditEvent elements.
    -   Minimal vs. comprehensive patterns for security tokens should be chosen based on the audit consumer's access to lookup services.
-   **Notable design choices and patterns:**
    -   Use of `client`, `server`, and `user` agent slices for clear role identification.
    -   Consistent use of `entity.type` and `entity.role` for detailed event context.
    -   Minimal and comprehensive patterns for security tokens to balance privacy and audit detail.
    -   Emphasis on recording identifiers rather than replicating sensitive data within the AuditEvent.

## Ecosystem Context

-   **Target systems and users:** FHIR servers, clients, authorization services, privacy officers, security analysts, auditors.
-   **Relationship to other standards/IGs:**
    -   Relies on ATNA for AuditEvent transport and retrieval.
    -   Complements IHE profiles like MHD, PDQm, PIXm by providing basic AuditEvent patterns.
    -   Aligns with FHIR core security principles and AuditEvent resource.
    -   References IHE-IUA for OAuth and IHE-XUA for SAML.
-   **Relevant jurisdictions or programs:** Supports compliance with regulations like HIPAA (USA), GDPR (EU), and other privacy frameworks that require audit logging of patient data access.
-   **Primary use cases and scenarios:**
    -   Auditing FHIR RESTful interactions (read, create, update, delete, search).
    -   Recording security context (SAML, OAuth) associated with audited events.
    -   Logging authorization decisions based on patient consent.
    -   Documenting privacy disclosures for accounting of disclosures.
    -   Supporting security incident investigations and forensic analysis.
    -   Enabling privacy officers to monitor patient data access patterns.
