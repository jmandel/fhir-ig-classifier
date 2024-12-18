# fhir-pacio-adi: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The FHIR PACIO Advance Directive Interoperability (ADI) Implementation Guide (IG) primarily addresses the challenge of representing, exchanging, and verifying a person's advance directive information, including their goals, preferences, and priorities for medical treatment in a standardized, interoperable manner using FHIR. It tackles the lack of consistent digital representation of advance directives, which often exist as unstructured or scanned documents, hindering their accessibility and usability across different healthcare systems.
-   **Key clinical/business problems it solves:** This IG solves the problem of fragmented and inaccessible advance directive information. By enabling digital exchange, it ensures that a patient's wishes are readily available to healthcare providers during critical situations, especially when the patient cannot communicate. This facilitates person-centered care, reduces the risk of unwanted or unnecessary medical interventions, and improves care coordination across transitions of care. It also streamlines administrative processes related to managing and accessing advance directives.
-   **Intended scope and boundaries:** The IG's scope is focused on defining the minimum conformance requirements for digital representation and exchange of advance directive information. STU2 supports only Person-authored Advance Directives (ADI Content Type 1) and Portable Medical Order (ADI Content Type 3) documents. Future versions of this FHIR IG will address encounter-centric patient instructions, Content Type 2. It does not cover the specifics of how EHRs should be architected, nor does it delve into the legal and policy variations across different jurisdictions, which implementers need to consider separately.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **ADI-PACPComposition:** Defines the structure for a Personal Advance Care Plan document, including sections for healthcare agents, goals, preferences, and priorities under various conditions.
    -   **ADI-PMOComposition:** Defines the structure for a Portable Medical Order document, including sections for medical orders, completion information, and administrative information.
    -   **ADI-DocumentReference:** Specifies how to reference and index advance directive documents, including scanned PDFs, CDA documents, and native FHIR documents.
    -   **ADI-ParticipantConsent:** Represents consent for an advance directive participant, such as a healthcare agent, including powers granted or limitations imposed.
    -   **ADI-PersonalGoal, ADI-CareExperiencePreference, ADI-PersonalInterventionPreference:** Profiles for representing patient-authored goals, care experience preferences, and intervention preferences.
    -   **ADI-PMOServiceRequest, ADI-PMOCarePlan:** Profiles for representing portable medical orders as service requests and care plans.
    -   **Extensions:** `adi-clause-extension`, `adi-jurisdiction-extension`, `adi-docVersionNumber-extension`, `adi-document-revoke-status`, `adi-enclosedPrecondition-extension` are used to capture additional information specific to advance directives.
-   **Notable operations and interactions:** The IG supports RESTful operations for creating, updating, querying, and accessing advance directive information. Key interactions include:
    -   `POST` for creating and updating advance directive documents.
    -   `GET` for querying `DocumentReference` resources to discover available documents.
    -   `GET` for retrieving the actual document content (e.g., a `Bundle` or `Binary` resource).
    -   `$match` operation for patient matching.
-   **Key terminology and value sets:**
    -   **LOINC:** Extensively used for coding document types, sections, and observation codes (e.g., `42348-3` "Advance directives", `81335-2` "Patient Healthcare agent").
    -   **SNOMED CT:** Used for representing clinical findings and procedures.
    -   **HL7 Value Sets:** `HL7 ConsentCategoryCodes`, `HL7 JurisdictionCodes`, `HL7RelatedPersonRelationshipType`, `HL7ServiceEventPerformer`.
    -   **Custom Value Sets:** `ADIHCADecisionsCS`, `ADIPreferenceCategoryCS`, `ADIDocumentRevokeStatusCS`, `ADIAttesterRoleTypeVS`, `ADIDocumentationTypeVS`, and various VSAC value sets for specific concepts.
-   **Significant patterns and constraints:**
    -   **Document-centric approach:** Advance directives are represented as `Bundle` resources of type `document`, with the first entry being a `Composition` resource.
    -   **Versioning:** `DocumentReference.versionNumber` and `DocumentReference.status` are used to manage document versions and indicate superseded documents.
    -   **Digital Signatures:** The IG supports detached digital signatures using JSON Web Signature (JWS) stored in a separate `Binary` resource referenced by a `DocumentReference`.
    -   **Must Support:** The IG defines Must Support elements for various profiles, requiring data sources to populate them if the data is available and data consumers to process them without errors.

## Technical Essence

This IG defines a FHIR-based framework for representing and exchanging advance directive information, centered around a `Bundle` of type `document` containing an `ADI-PACPComposition` or `ADI-PMOComposition` as its first entry. These `Composition` profiles organize sections like healthcare agent designations (using `ADIParticipantConsent` and `ADIParticipant`), patient goals (`ADIPersonalGoal`), care experience preferences (`ADICareExperiencePreference`), intervention preferences (`ADIPersonalInterventionPreference`), and portable medical orders (`ADIPMOServiceRequest`, `ADIPMOCarePlan`). `ADIDocumentReference` is used to index these documents, supporting various formats (PDF, CDA, FHIR) via `content.attachment`.  `DocumentReference.versionNumber` and `status` manage document versions, with `relatesTo` linking superseded versions. The IG mandates RESTful interactions, including `POST` for creation/updates and `GET` for querying `DocumentReference` and retrieving document content.  `Must Support` elements ensure a minimum level of interoperability.  Digital signatures, if used, are detached JWS stored in a separate `Binary` and referenced via a dedicated `DocumentReference`.  The IG leverages LOINC, SNOMED CT, and custom value sets for terminology, with extensions like `adi-clause-extension` and `adi-jurisdiction-extension` capturing ADI-specific data.

## Implementation Approach

-   **Critical workflows and interactions:**
    -   **Creation:** A person creates their advance directive information using a content creator system, which generates a FHIR `Bundle` conforming to the `ADI-PACPComposition` or `ADI-PMOComposition` profile.
    -   **Sharing:** The content creator system or a custodian system makes the `Bundle` available via a FHIR API, typically using a `POST` transaction.
    -   **Query and Access:** A content requester system queries for `DocumentReference` resources based on patient ID and other criteria (e.g., date, type). The custodian system returns matching `DocumentReference` resources. The requester then retrieves the desired document content using a `GET` operation on the URL specified in `DocumentReference.content.attachment.url`.
    -   **Update:** A new version of the document is created, referencing the previous version using `DocumentReference.relatesTo.code` = `replaces`. The previous version's `DocumentReference.status` is updated to `superseded`.
    -   **Verification:** A content verifier system queries for the current version of a document using its known identifier. If the returned `DocumentReference` has a status of `superseded`, the verifier queries for a `DocumentReference` that `replaces` the superseded one.
-   **Important requirements and guardrails:**
    -   **Conformance to profiles:** Systems must conform to the defined profiles and populate Must Support elements.
    -   **Security and privacy:** Implementations must adhere to FHIR security guidance, including TLS, SMART on FHIR, and appropriate authorization mechanisms.
    -   **Versioning:** Proper use of `DocumentReference.versionNumber` and `status` is crucial for managing document versions.
    -   **Digital signatures:** If used, digital signatures must follow the detached signature approach using JWS.
-   **Notable design choices and patterns:**
    -   **Document-centric model:** Using `Bundle` resources of type `document` provides a clear structure for representing advance directive documents.
    -   **Extensibility:** The use of extensions allows for capturing additional information specific to advance directives.
    -   **Support for various document formats:** The IG accommodates scanned documents, CDA documents, and native FHIR documents.

## Ecosystem Context

-   **Target systems and users:**
    -   **Systems:** EHRs, PHRs, HIEs, registries, repositories, and specialized care applications.
    -   **Users:** Patients, healthcare agents, clinicians, care coordinators, and other stakeholders involved in advance care planning.
-   **Relationship to other standards/IGs:**
    -   **US Core:** The IG builds upon US Core profiles and aligns with its conformance requirements where applicable.
    -   **HL7 CDA:** The IG provides guidance for representing CDA-based advance directive documents.
    -   **SMART on FHIR:** The IG recommends supporting SMART on FHIR for secure access and authorization.
-   **Relevant jurisdictions or programs:**
    -   **US Realm:** The IG is designed for use within the United States healthcare system.
    -   **PACIO Project:** The IG is developed under the PACIO project, which focuses on improving post-acute care interoperability.
-   **Primary use cases and scenarios:**
    -   **Patient creates and shares their advance directive:** A patient uses a PHR or a specialized application to create their advance directive and shares it with their healthcare agent and providers.
    -   **Provider accesses a patient's advance directive during a care transition:** A provider in a hospital or skilled nursing facility queries an HIE or registry to access a patient's advance directive to inform treatment decisions.
    -   **Patient updates their advance directive:** A patient updates their advance directive, and the updated version is made available to authorized systems.
    -   **System verifies the current version of an advance directive:** A system checks if the advance directive it has on file is the most current version.
    -   **Portable Medical Orders:** A practitioner creates a portable medical order (e.g., POLST, MOLST) based on a patient's preferences, and the order is made available across the care continuum.
