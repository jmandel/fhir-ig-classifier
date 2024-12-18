# fhir-mdi-ig: Analysis

## Core Purpose & Scope

The Medicolegal Death Investigation (MDI) FHIR Implementation Guide (IG) addresses the interoperability challenges in exchanging information between MDI case management systems (CMS), forensic toxicology laboratory information management systems (LIMS), electronic death registration systems (EDRS), and other ancillary systems involved in death investigations. It aims to standardize MDI fields and interfaces to facilitate timely investigations and forensic science research. The primary clinical/business problems it solves include:

-   **Disparate and non-interoperable systems:** MDI CMS, forensic toxicology LIMS, and EDRS often use different data formats and exchange methods, hindering timely and efficient data sharing.
-   **Lack of standardization:** Inconsistent data elements and terminologies across systems create obstacles to data aggregation, analysis, and reporting.
-   **Manual and paper-based processes:** Reliance on paper-based and fax-based information exchange leads to delays, errors, and inefficiencies.

The IG's scope is focused on defining FHIR resources and guidance for the following dataflows:

-   Bi-directional exchange of death case records between MDI CMS and EDRS for death certificate development.
-   Transmission of diagnostic findings from forensic toxicology LIMS to MDI CMS.
-   Transmission of PDF reports within the MDI community.
-   Transmission of completed death certificates for review (data quality and cremation clearance).

The IG explicitly excludes workflows related to fee payment and other aspects of cremation clearance beyond data exchange.

## Technical Foundation

The MDI IG is built on FHIR R4.0.1 and is a US Realm Specification. Its technical foundation includes:

-   **Core Profiles and Extensions:**
    -   **Document Bundle:** `BundleDocumentMDIAndEDRS` for exchanging death investigation data between MDI CMS and EDRS, containing `CompositionMDIAndEDRS`.
    -   **Message Bundle:** `BundleMessageToxToMDI` for transmitting toxicology results, containing `MessageHeaderToxicologyToMDI` and `DiagnosticReportToxicologyToMDI`.
    -   **Composition:** `CompositionMDIAndEDRS` representing the death investigation data document, referencing other profiles like `MDICauseOfDeathPart1`, `ObservationDeathDate`, `ObservationMannerOfDeath`.
    -   **DiagnosticReport:** `DiagnosticReportToxicologyToMDI` for reporting toxicology findings, referencing `SpecimenToxicologyLab` and `ObservationToxicologyLabResult`.
    -   **DocumentReference:** `DocumentReferenceMDIReport` for exchanging PDF reports.
    -   **Death Certificate Review:** `BundleMessageDCR`, `MessageHeaderDCR`, `BundleDocumentMDIDCR`, `CompositionMDIDCR`, `ObservationMedicalInformationDataQuality`, `ObservationPersonalInformationDataQuality`, `ObservationCommunicableDisease`, `ObservationEmbalmed`, `OrganizationCrematorium`.
    -   **Extensions:** `ExtensionTrackingNumber`, `ExtensionDeathCertificateStatus`, `ExtensionCremationClearanceStatus`, `ExtensionCremationClearanceSignature`, `ExtensionCremationClearanceCoroner`, `ExtensionMECertificationAffirmation`.
-   **Notable Operations and Interactions:**
    -   RESTful API interactions (optional for all systems).
    -   Document Bundle exchange (required for MDI CMS & EDRS).
    -   Message Bundle exchange (required for Forensic Toxicology LIMS & MDI CMS).
    -   Search operations using MDI-specific search parameters (e.g., `tracking-number`).
-   **Key Terminology and Value Sets:**
    -   `MDIcodes`: Code system for MDI-specific concepts.
    -   `DeathCertReviewExample`: Code system for death certificate review.
    -   `VSTrackingNumberType`: Value set for tracking number types.
    -   `VSCCObservationsEx`, `VSCCSignedEx`, `VSCCStatusEx`, `VSCertifiedWorkflowEx`, `VSDCRObservationsEx`, `VSDCRreasonEx`, `VSEmablmedEx`, `VSMECertAffirmationEx`, `VSMedDQReviewEx`, `VSPerDQReviewEx`, `VSRegistrationEx`: Value sets for death certificate review and cremation clearance.
    -   References to standard terminologies like LOINC, SNOMED CT, and HL7 v2 and v3 code systems.
-   **Significant Patterns and Constraints:**
    -   Use of `Bundle` resources for document and message exchange.
    -   `Composition` resource as the core of the death investigation document.
    -   `DiagnosticReport` for conveying toxicology results.
    -   `Observation` for various data elements like cause of death, manner of death, and death date.
    -   `Specimen` for describing analyzed specimens.
    -   `DocumentReference` for exchanging PDF reports.
    -   Extensive use of "must support" designations to ensure data consistency.
    -   Constraints on text field lengths to align with NCHS requirements.
    -   Specific guidance on handling missing data, especially for decedent demographics.

## Technical Essence

The MDI IG's core functionality revolves around the exchange of structured FHIR documents and messages to facilitate death investigation workflows. A `CompositionMDIAndEDRS` resource serves as the central document for death certificate development, referencing a `USCorePatient` for the decedent and incorporating observations like `MDICauseOfDeathPart1` (based on `VRDR`'s `CauseOfDeathPart1`), `DeathDate`, and `MannerOfDeath`. Toxicology results are transmitted via `BundleMessageToxToMDI` messages, containing a `DiagnosticReportToxicologyToMDI` that references `SpecimenToxicologyLab` and `ObservationToxicologyLabResult` resources. The `ExtensionTrackingNumber` is crucial for linking records across systems. Death certificate review workflows are supported by `BundleMessageDCR` and `BundleDocumentMDIDCR` containing `CompositionMDIDCR` with sections for demographics, investigation details, certification, disposition, and review-specific observations like `ObservationMedicalInformationDataQuality`. Capability statements define minimum server capabilities for MDI CMS, EDRS, and toxicology LIMS, including support for specific profiles, interactions (read, search-type), search parameters (e.g., `subject`, `patient`, `tracking-number`), and the `$document` operation. The IG mandates the use of specific code systems like `MDIcodes` for MDI-specific concepts and leverages standard terminologies like LOINC and SNOMED CT.

## Implementation Approach

The MDI IG is designed for implementation using RESTful APIs, document bundles, and message bundles. Key aspects include:

-   **Bi-directional exchange:** MDI CMS and EDRS can both initiate and receive death investigation data using document bundles.
-   **Tracking numbers:** Systems should use the `ExtensionTrackingNumber` to maintain case/record identifiers across systems.
-   **Certification:** Agencies must define their own business requirements for certification, leveraging the `author` and `attester` fields in the `Composition` resource.
-   **Death date:** The `ObservationDeathDate` profile should be used to record the date and time of death, including certainty information.
-   **Forensic toxicology:** Each analyzed specimen should have a corresponding `SpecimenToxicologyLab` resource, referenced by one or more `ObservationToxicologyLabResult` resources.
-   **API specifications:** Implementations should conform to the defined capability statements, supporting specified search parameters and operations.
-   **Security:** Secure data transportation using TLS 1.2 or higher (HTTPS) and limited data access using OAuth 2.0 are recommended as minimum security measures.

## Ecosystem Context

-   **Target systems:** MDI CMS, forensic toxicology LIMS, EDRS, and other systems involved in death investigations.
-   **Target users:** Medical examiners, coroners, death investigators, forensic toxicologists, vital records registrars, and other professionals involved in death investigation and reporting.
-   **Relationship to other standards/IGs:**
    -   Based on FHIR R4.0.1.
    -   References and profiles US Core 5.0.1.
    -   References and profiles Vital Records Death Reporting (VRDR) STU 3.
    -   References and profiles Vital Records Common Library (VRCL) STU 2.
    -   References Occupational Data for Health (ODH) FHIR IG STU 1.3.
-   **Relevant jurisdictions or programs:** US-specific, with a focus on state and local jurisdictions involved in death investigation and reporting. The CDC's National Center for Health Statistics (NCHS) is a key stakeholder.
-   **Primary use cases:**
    -   Death case record creation and update for death certificate development.
    -   Transmission of forensic toxicology diagnostic findings from LIMS to MDI CMS.
    -   Exchange of PDF reports within the MDI community.
    -   Transmission of completed death certificates for review (data quality and cremation clearance).
