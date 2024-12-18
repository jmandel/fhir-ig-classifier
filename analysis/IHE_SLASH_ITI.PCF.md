# ITI.PCF: Analysis

## Core Purpose & Scope

The IHE IT Infrastructure (ITI) Privacy Consent on FHIR (PCF) Implementation Guide addresses the interoperability challenges related to managing and enforcing patient privacy consents in a FHIR-based health information exchange environment. It solves the key problem of ensuring that access to patient data is granted or denied based on the patient's specific consent preferences, in conjunction with organizational policies and security controls. The intended scope is limited to access control decisions based on privacy consents, and it does not cover aspects like patient identification, consent capture user interface, or data tagging with sensitivity labels. It focuses on refining consent handling defined in [MHDS](https://profiles.ihe.net/ITI/MHDS) and is not intended to cover all consent use cases.

## Technical Foundation

The technical foundation of PCF builds upon FHIR R4 and leverages several core profiles, extensions, operations, and terminologies:

-   **Core Profiles:**
    -   `BasicConsent`: Defines foundational constraints for basic consent scenarios, including agreement or rejection of an overarching policy, timeframe, authorized/denied actors, and purpose of use (limited to Treatment, Payment, or Operations).
    -   `IntermediateConsent`: Extends `BasicConsent` to allow for more granular control, including data restrictions based on timeframe, specific data instances, author, relationship to other resources (e.g., Encounter), and additional purposes of use beyond TPO.
    -   `AdvancedConsent`: Further extends to incorporate security labels for sensitivity and confidentiality, enabling consent decisions based on data classifications like substance abuse, mental health, etc.
-   **Notable Operations and Interactions:**
    -   `ITI-108 Access Consent`: A transaction based on FHIR RESTful interactions (Create, Read, Update, Delete, Search) for managing Consent resources.
    -   `ITI-71 Get Access Token`: An IUA transaction extended to carry consent-based restrictions in the OAuth token.
    -   `ITI-72 Incorporate Access Token`: An IUA transaction used to communicate the access token to the Resource Server.
    -   `ITI-102 Introspect Token`: An IUA transaction, optionally used by the Resource Server to get details of the access token, including consent-based restrictions.
    -   `ITI-103 Get Authorization Server Metadata`: An IUA transaction, optionally used to discover Authorization Server capabilities.
-   **Key Terminology and Value Sets:**
    -   `BasicPurposeVS`: Defines the basic purposes of use (TREAT, HPAYMT, HOPERAT).
    -   `AdvancedSecurityTagVS`: Includes sensitivity codes (ETH, ETHUD, OPIOIDUD, PSY, SDV, HIV) and confidentiality codes (N, R).
    -   Value sets for specific sensitive data categories (e.g., `SlsSensitivePSY`, `SlsSensitiveETH`, `SlsSensitiveSDV`, `SlsSensitiveHIV`).
-   **Significant Patterns and Constraints:**
    -   Uses the `Consent` resource to represent patient privacy preferences.
    -   Defines a hierarchical structure of `provision` elements within the `Consent` resource to express complex consent rules.
    -   Leverages the `ihe_pcf` extension in the OAuth token to communicate consent-based restrictions from the Consent Authorization Server to the Consent Enforcement Point.
    -   Relies on the grouping of PCF actors with IUA actors (Authorization Server, Resource Server) for identity and authorization.
    -   Requires the use of ATNA for audit logging and BALP for audit log patterns.

## Technical Essence

PCF enables fine-grained access control based on FHIR Consent resources by extending the IUA OAuth flow. A `Consent` resource, profiled as `BasicConsent`, `IntermediateConsent`, or `AdvancedConsent`, captures patient preferences. The `BasicConsent` allows specifying an overarching policy, validity period, permitted/denied actors (by identifier), and purpose of use (TREAT, HPAYMT, HOPERAT). `IntermediateConsent` adds data scoping through `dataPeriod`, specific data instances (`data.meaning` = `instance`), author (`data.meaning` = `authoredby`), relationship to other resources (`data.meaning` = `related`), and additional purposes of use. `AdvancedConsent` incorporates security labels from `AdvancedSecurityTagVS` for sensitivity and confidentiality. When an IUA Authorization Client requests an access token (ITI-71), the grouped Consent Authorization Server retrieves relevant `Consent` resources (ITI-108), evaluates them against the request context, and encodes any resulting restrictions into an `ihe_pcf` extension within the token. This extension includes `patient_id`, `doc_id` (Consent reference), and `residual` rules (forbid/permit) based on `securityLabel`, `dataPeriod`, or `data` elements. The grouped Consent Enforcement Point, on receiving a request with this token, enforces these residual rules, potentially filtering results based on the specified criteria.

## Implementation Approach

Implementers of PCF would need to:

-   Deploy a **Consent Registry** that supports the ITI-108 transaction for managing Consent resources.
-   Implement a **Consent Recorder** to capture patient consents, ensuring compliance with the chosen Consent profiles (Basic, Intermediate, Advanced).
-   Group an **IUA Authorization Server** with a **Consent Authorization Server** that can evaluate Consent resources and encode decisions into the `ihe_pcf` extension of the OAuth token.
-   Group an **IUA Resource Server** with a **Consent Enforcement Point** that can interpret the `ihe_pcf` extension and enforce the consent-based restrictions.
-   Ensure that data is appropriately tagged with sensitivity and confidentiality labels, potentially using a Security Labeling Service (SLS).
-   Implement audit logging according to ATNA and BALP.
-   Define and manage overarching policies and the set of available patient-specific parameters.
-   Develop or integrate with a user interface for capturing patient consent preferences.

## Ecosystem Context

PCF is designed for use in health information exchange environments where FHIR APIs are used to access patient data. It is particularly relevant in jurisdictions or programs that require granular patient control over data sharing, such as those involving sensitive health information.

-   **Target Systems and Users:**
    -   Health Information Exchanges (HIEs)
    -   Electronic Health Record (EHR) systems
    -   Patient portals
    -   Mobile health applications
    -   Clinical research platforms
    -   Patients, clinicians, administrators, and researchers
-   **Relationship to Other Standards/IGs:**
    -   Builds upon **IUA** for identity and authorization.
    -   Refines consent handling defined in **MHDS**.
    -   Can be used with **PDQm**, **PIXm**, **PMIR** for patient identity management.
    -   Complements **QEDm/mXDE** for querying FHIR resources.
    -   Leverages **ATNA** and **BALP** for security and audit logging.
    -   References **SMART-app-launch** as a potential security mechanism.
-   **Relevant Jurisdictions or Programs:**
    -   Environments implementing regulations like GDPR, HIPAA, or 42 CFR Part 2.
    -   Programs focused on patient-centered care and data sharing.
-   **Primary Use Cases and Scenarios:**
    -   Capturing new patient consents.
    -   Updating existing consents.
    -   Enforcing consent-based access control during data access requests.
    -   Supporting scenarios like "break-glass" access.
    -   Enabling patients to control access to sensitive data categories (e.g., mental health, substance abuse).
    -   Facilitating data sharing for research while respecting patient privacy preferences.
