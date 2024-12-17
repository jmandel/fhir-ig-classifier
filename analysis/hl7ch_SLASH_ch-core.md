# ch-core: Analysis

## Core Purpose & Scope

This FHIR Implementation Guide (IG), **CH Core (R4)**, addresses interoperability challenges specific to the Swiss healthcare system, particularly in the context of the Swiss Electronic Patient Record (EPR). It aims to solve key clinical and business problems by providing a standardized framework for representing and exchanging core patient demographic data, administrative information, and essential clinical concepts. The IG's scope is primarily focused on defining profiles, extensions, and terminologies necessary for representing patient data, healthcare providers, organizations, and core clinical concepts like allergies, immunizations, and medication-related resources within the Swiss context. It also provides guidance on using SNOMED CT Swiss Extension and representing EPR documents in a readable format. The IG explicitly states that it is not yet a FHIR API specification, with that being a goal for future iterations.

## Technical Foundation

The technical foundation of CH Core rests upon a set of core profiles and extensions built on top of the FHIR R4 standard. Key profiles include:

-   **Patient Profiles:** `CHCorePatient`, `CHCorePatientEPR` defining patient demographics with extensions for eCH standards (e.g., place of birth, place of origin, citizenship, religion) and identifiers like EPR-SPID and AHVN13.
-   **Provider Profiles:** `CHCorePractitioner`, `CHCorePractitionerEPR`, `CHCorePractitionerRole`, `CHCorePractitionerRoleEpr` defining healthcare professionals with extensions for Swiss-specific identifiers (GLN, ZSR) and qualifications.
-   **Organization Profiles:** `CHCoreOrganization`, `CHCoreOrganizationEPR` defining healthcare organizations with extensions for Swiss-specific identifiers (GLN, ZSR, BER, UIDB) and contact details.
-   **Encounter Profile:** `CHCoreEncounter` defining patient encounters with extensions for Swiss-specific administrative data (e.g., admission type, discharge disposition).
-   **Document Profiles:** `CHCoreDocument`, `CHCoreDocumentEPR`, `CHCoreComposition`, `CHCoreCompositionEPR`, `CHCoreDocumentReference`, `CHCoreDocumentReferenceEPR` defining the structure and metadata for clinical documents, particularly in the EPR context.
-   **Medication-related Profiles:** `CHCoreMedication`, `CHCoreMedicationStatement`, `CHCoreMedicationAdministration`, `CHCoreMedicationDispense`, `CHCoreMedicationRequest` defining medication-related resources with extensions for Swiss-specific requirements.
-   **Other Profiles:** `CHCoreAllergyIntolerance`, `CHCoreCondition`, `CHCoreCoverage`, `CHCoreImmunization`, `CHCoreImmunizationRecommendation`, `CHCoreLocation`, `CHCoreServiceRequest`, `CHCoreEPRConsent` defining other core clinical and administrative resources.

Notable extensions include those for eCH standards (e.g., `ch-ext-ech-11-firstname`, `ch-ext-ech-46-emailcategory`), EPR-specific data (e.g., `ch-ext-epr-confidentialitycode`, `ch-ext-epr-informationrecipient`), and Swiss-specific administrative data (e.g., `ch-ext-bfs-ms-admitrole`, `ch-ext-accident`).

Key terminologies and value sets are drawn from international standards like LOINC, SNOMED CT, and v2/v3 code systems, as well as Swiss-specific value sets defined in the CH Term IG (e.g., `DocumentEntry.typeCode`, `DocumentEntry.confidentialityCode`).

Significant patterns and constraints include:

-   Strict identifier requirements for Swiss-specific identifiers (e.g., GLN, ZSR, EPR-SPID, AHVN13).
-   Mandatory use of specific code systems and value sets for certain elements (e.g., `DocumentEntry.typeCode` for composition type).
-   Constraints on address and name representation according to eCH standards.
-   Specific requirements for representing EPR documents, including the use of a `Binary` resource for a PDF/A representation.

## Technical Essence

CH Core establishes a Swiss-specific FHIR framework by extending core FHIR resources with national identifiers (EPR-SPID, AHVN13, GLN, ZSR, etc.), eCH demographic elements (via extensions like `ch-ext-ech-11-firstname`), and EPR-specific metadata. It mandates the use of `urn:uuid` for document identifiers and defines a `CHCoreDocumentEPR` profile for representing EPR documents as Bundles. Composition resources (`CHCoreCompositionEPR`) must include an `informationRecipient` and `dataEnterer`, and reference a `Binary` resource containing a PDF/A representation of the document in the `originalRepresentation` section.  `DocumentReference` resources (`CHCoreDocumentReferenceEPR`) are used for metadata, with required bindings to Swiss-specific code systems for type, category, format, and confidentiality.  Patient resources (`CHCorePatientEPR`) enforce the presence of family and given names.  Practitioner and Organization resources are similarly profiled with national identifier requirements.  Encounter resources (`CHCoreEncounter`) incorporate extensions for Swiss-specific administrative data like admission type and discharge disposition.  Essentially, CH Core layers Swiss-specific constraints and extensions onto core FHIR resources, primarily through identifier and terminology bindings, and defines a document model tailored for the Swiss EPR, leveraging standard FHIR mechanisms like extensions and profiles to achieve this.

## Implementation Approach

The IG is designed to be implemented by systems participating in the Swiss healthcare ecosystem, particularly those involved in the EPR. Key workflows include:

-   **Document Creation:** Systems creating EPR documents must conform to the `CHCoreDocumentEPR` profile, including a `CHCoreCompositionEPR` resource with appropriate metadata and a linked `Binary` resource for the PDF/A representation.
-   **Document Metadata Exchange:** Systems exchanging document metadata will use the `CHCoreDocumentReferenceEPR` profile, ensuring that required elements like type, category, and confidentiality are populated according to the specified value sets.
-   **Patient Identification:** Systems must be able to handle and validate Swiss-specific patient identifiers like EPR-SPID and AHVN13.
-   **Provider and Organization Identification:** Systems must be able to handle and validate Swiss-specific provider and organization identifiers like GLN, ZSR, BER, and UIDB.

Important requirements and guardrails include:

-   Adherence to the defined profiles and extensions.
-   Use of the specified code systems and value sets.
-   Validation of Swiss-specific identifiers.
-   Proper handling of EPR-specific metadata.

Notable design choices include the use of extensions for eCH standards and EPR-specific data, the use of a `Binary` resource for the PDF/A representation of documents, and the strict identifier requirements.

## Ecosystem Context

The primary target systems for this IG are those involved in the Swiss EPR, including hospital information systems, practice management systems, and other healthcare applications that need to exchange patient data within the Swiss context. The target users are healthcare providers, patients, and other stakeholders involved in the EPR.

The IG is closely related to other Swiss FHIR IGs, particularly CH Term, which provides the terminology foundation. It also aligns with the technical and semantic requirements defined in the Annexes to the Swiss EPR law.

The primary use cases include:

-   Creating and exchanging EPR documents.
-   Querying for patient data using Swiss-specific identifiers.
-   Retrieving document metadata.
-   Supporting the various workflows related to the EPR, such as document publishing, access, and management.

The IG is relevant to the Swiss jurisdiction and specifically addresses the requirements of the Swiss EPR program.
