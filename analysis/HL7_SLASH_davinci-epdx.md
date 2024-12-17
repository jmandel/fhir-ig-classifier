# davinci-epdx: Analysis

## Core Purpose & Scope

The **Da Vinci Payer Data Exchange (PDex) Implementation Guide (IG)** primarily addresses the interoperability challenges related to the exchange of patient clinical and administrative data between payers, providers, and patients. It focuses on enabling secure and efficient data sharing to support value-based care, care coordination, and member access to their health information.

**Key clinical/business problems it solves:**

-   Facilitates compliance with the CMS Interoperability and Patient Access Final Rule (CMS-9115-F) and the Prior Authorization Rule (CMS-0057) by defining standardized methods for data exchange.
-   Improves care coordination by enabling providers to access a more comprehensive view of a patient's health history, including data held by payers.
-   Empowers patients by providing them with access to their health information through third-party applications.
-   Supports payer-to-payer data exchange when a member switches health plans, ensuring continuity of care.
-   Streamlines prior authorization processes by enabling electronic submission and retrieval of supporting documentation.

**Intended scope and boundaries:**

-   **In Scope:**
    -   Provider-payer exchange using CDS Hooks and SMART on FHIR (being phased out in favor of Provider Access API).
    -   Member-authorized payer-to-payer exchange.
    -   Member-authorized payer-to-third-party application exchange.
    -   Provider Access API (Bulk exchange).
    -   Payer-to-Payer Bulk API.
    -   Exchange of claims-based information (without financials).
    -   Exchange of clinical information (e.g., lab results, allergies, conditions).
    -   Exchange of prior authorization information.
    -   Use of US Core and Da Vinci HRex profiles.
-   **Deferred Scope:**
    -   Inpatient care provider queries.
    -   Provider-initiated data push.
-   **Out of Scope:**
    -   Wearable device data.

## Technical Foundation

-   **Core Profiles and Extensions:**
    -   Leverages [US Core 3.1.1]({{site.data.fhir.ver.uscore3}}), [US Core 6.1.0]({{site.data.fhir.ver.uscore6}}), and [US Core 7.0.0]({{site.data.fhir.ver.uscore7}}) profiles for clinical data.
    -   Uses [Da Vinci HRex 1.1.0]({{site.data.fhir.ver.hrex}}) profiles for common conformance rules and additional constraints.
    -   [CARIN Blue Button 2.1.0-snapshot1]({{site.data.fhir.ver.carinbb}}) profiles for non-financial claims and encounter data.
    -   Defines PDex-specific profiles like `PDexMedicationDispense`, `PDexPriorAuthorization`, and `PDexProvenance`.
    -   Defines extensions for specific data elements not covered in US Core or HRex.
-   **Notable Operations and Interactions:**
    -   `$member-match` operation for payer-to-payer exchange to identify members.
    -   `$bulk-member-match` operation for payer-to-payer bulk exchange to identify multiple members.
    -   `$davinci-data-export` operation for bulk data export.
    -   `$patient-everything` operation for retrieving all data for a single patient.
    -   CDS Hooks integration for provider-initiated data requests (being phased out).
    -   SMART on FHIR for authorization and app integration.
    -   Provider Access API and Payer-to-Payer Bulk API interactions.
-   **Key Terminology and Value Sets:**
    -   Relies on standard terminologies like SNOMED CT, LOINC, RxNorm, ICD-10-CM, CPT, HCPCS.
    -   Defines PDex-specific value sets for certain elements.
-   **Significant Patterns and Constraints:**
    -   Mandates support for FHIR R4.
    -   Specifies the use of OAuth 2.0 for authorization and SMART on FHIR for app integration.
    -   Defines specific search parameters for various resources.
    -   Requires the use of Provenance resources to track data origin and custodianship.
    -   Emphasizes the use of USCDI data elements.
    -   Requires support for asynchronous bulk data export.

## Technical Essence

The PDex IG is essentially a blueprint for constructing a FHIR-based ecosystem where payers, providers, and patients can exchange clinical and administrative data securely and efficiently. It mandates the use of FHIR R4 and builds upon US Core and HRex profiles, extending them with PDex-specific profiles like `PDexPriorAuthorization` to handle payer-specific use cases.  For payer-to-payer exchange, a `member-match` operation, secured via mTLS and OAuth 2.0, is used to identify the patient at the old payer using demographics and coverage information, with a consent check before returning a unique patient ID. Data retrieval is then enabled via either individual resource queries, the `$patient-everything` operation, or bulk FHIR export using `$davinci-data-export` for multiple patients, all constrained by the granted OAuth scopes. The Provider Access API utilizes a similar bulk export approach, but driven by provider-specific attribution lists managed by the payer, with members having the option to opt-out.  Provenance resources, using a `PDexProvenance` profile, are mandatory to track the origin and handling of data. The IG also specifies the use of CARIN Blue Button profiles for exchanging non-financial claims and encounter data.  Essentially, PDex orchestrates a secure data exchange ballet, leveraging existing FHIR standards and extending them to meet the unique needs of the payer domain, with a strong emphasis on patient consent and data provenance.

## Implementation Approach

-   **Critical Workflows and Interactions:**
    -   Provider requests data from a payer using CDS Hooks (legacy) or the Provider Access API.
    -   Member authorizes data exchange between payers or with a third-party app using OAuth 2.0.
    -   Payers use the `$member-match` operation to identify members before data exchange.
    -   Payers use the `$davinci-data-export` operation for bulk data exchange.
    -   Systems retrieve and process FHIR resources based on defined profiles and search parameters.
    -   Provenance resources are created and maintained to track data lineage.
-   **Important Requirements and Guardrails:**
    -   Support for FHIR R4, US Core, and HRex profiles.
    -   Implementation of OAuth 2.0 and SMART on FHIR.
    -   Adherence to specified search parameters and operations.
    -   Compliance with privacy and security regulations (e.g., HIPAA, 42 CFR Part 2).
    -   Handling of member consent for data sharing.
    -   Management of attribution lists for the Provider Access API.
-   **Notable Design Choices and Patterns:**
    -   Use of CDS Hooks for provider-initiated requests (legacy).
    -   Use of `$member-match` for patient identification in payer-to-payer exchange.
    -   Use of `$davinci-data-export` for bulk data exchange.
    -   Emphasis on Provenance resources for data traceability.
    -   Use of CARIN Blue Button profiles for non-financial claims and encounter data.

## Ecosystem Context

-   **Target Systems and Users:**
    -   Payers (health insurance companies).
    -   Providers (hospitals, clinics, physicians).
    -   Patients/Members.
    -   Third-party application developers.
    -   EMR/EHR systems.
    -   HIEs.
-   **Relationship to Other Standards/IGs:**
    -   Builds upon FHIR R4.
    -   Incorporates US Core 3.1.1, 6.1.0, and 7.0.0.
    -   References HRex 1.1.0 for common conformance rules.
    -   Uses CARIN Blue Button 2.1.0-snapshot1 for non-financial claims data.
    -   Aligns with other Da Vinci IGs (e.g., CRD, DTR, PAS).
    -   References the FAST National Directory (NDH) IG (draft).
-   **Relevant Jurisdictions or Programs:**
    -   Primarily focused on the US healthcare system.
    -   Driven by CMS regulations (Interoperability and Patient Access Final Rule, Prior Authorization Rule).
-   **Primary Use Cases and Scenarios:**
    -   Provider requests patient data from a payer to support care coordination.
    -   Member authorizes data exchange between their old and new health plans.
    -   Member grants a third-party app access to their health data held by a payer.
    -   Payers exchange data to support risk adjustment and quality reporting.
    -   Providers retrieve prior authorization information and supporting documentation.
    -   Providers retrieve data for attributed members via the Provider Access API.
    -   Payers retrieve data for multiple members via the Payer-to-Payer Bulk API.
