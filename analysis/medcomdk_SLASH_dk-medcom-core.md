# dk-medcom-core: Analysis

## Core Purpose & Scope

**Primary interoperability challenges this IG addresses:**

-   Establishes a common foundation for representing core healthcare entities (Patient, Organization, Practitioner, Encounter, CareTeam, DiagnosticReport, Media, Observation) within Danish healthcare.
-   Ensures consistent use of identifiers (CPR, SOR, LPR3) and core data elements across MedCom standards.
-   Facilitates data exchange between various healthcare systems in Denmark, including hospitals, municipalities, and general practitioners.

**Key clinical/business problems it solves:**

-   Reduces ambiguity and variation in data representation, improving data quality and interoperability.
-   Streamlines communication and coordination of care across different settings and providers.
-   Supports the development of consistent and reliable healthcare applications in Denmark.
-   Provides a foundation for specific MedCom messaging standards like CareCommunication and HospitalNotification.

**Intended scope and boundaries:**

-   Defines core profiles for fundamental FHIR resources used in the Danish healthcare context.
-   Specifies extensions for Danish-specific concepts (e.g., CPR-number).
-   Serves as a base for other MedCom IGs, providing a common set of profiles and extensions.
-   Does not define complete message structures or workflows; these are covered in other MedCom IGs.
-   Primarily focused on the Danish healthcare system, although some elements may be relevant in other contexts.

## Technical Foundation

**Core profiles and extensions:**

-   **Profiles:** MedComCorePatient, MedComCoreOrganization, MedComCoreEncounter, MedComCoreCareTeam, MedComCorePractitioner, MedComCorePractitionerRole, MedComCoreDiagnosticReport, MedComCoreMedia, MedComCoreObservation.
-   **Extensions:** MedComCoreContactExtension, MedComCoreDateTimeExtension, MedComCoreIdentifierExtension, MedComCorePractitionerExtension, MedComCoreSenderExtension.
-   **Identifiers:**
    -   CPR (Central Person Register) identifier for patients (using DkCoreCprIdentifier).
    -   SOR (Sundhedsvæsenets Organisationsregister) identifier for organizations.
    -   LPR3 (Landspatientregisteret) identifier for episodes of care.
    -   MedComAssignedIdentifier for UUID identifiers assigned by organizations.

**Notable operations and interactions:**

-   The IG does not define specific operations but provides the foundation for interactions defined in other MedCom IGs (e.g., sending and receiving messages).

**Key terminology and value sets:**

-   `$StatusCodes`: Encounter status codes.
-   `$ActCodes`: v3 ActCode system.
-   `$EncounterClassVS`: MedCom encounter class value set.
-   `$PractitionerRoles`: MedCom practitioner roles value set.
-   `$ObsStatusCodes`: MedCom observation status value set.
-   `$Mimetypes`: MedCom attachment MIME types value set.
-   `$DiagnosticReportCodeSystem`: MedCom diagnostic report codes.
-   `$DiagnosticReportCode`: MedCom diagnostic report codes value set.
-   `$mediastatus`: Event status codes.
-   `$ProducenID`: MedCom ProducentID codes.

**Significant patterns and constraints:**

-   Profiles inherit from DK-Core profiles where applicable (e.g., MedComCorePatient inherits from DkCorePatient).
-   Mandatory use of specific identifiers (CPR, SOR, LPR3) for core entities.
-   Constraints on cardinality and data types to ensure consistency.
-   Use of extensions to capture Danish-specific data elements.
-   Emphasis on using references to link resources (e.g., linking a Patient to an Organization).
-   Specification of `MustSupport` elements in profiles.

## Technical Essence

The dk-medcom-core IG establishes a Danish-specific FHIR foundation by extending DK-Core profiles with mandatory identifiers and constraints relevant to the national context. MedComCorePatient mandates the `identifier[cpr]` (using DkCoreCprIdentifier) or `identifier[x-ecpr]` and `identifier[d-ecpr]` for temporary CPR, along with `name[official].family`. MedComCoreOrganization requires the `identifier[SOR-ID]` and optionally `name`. MedComCoreEncounter mandates `status`, `class` (from `$EncounterClassVS`), and `subject` (referencing MedComCorePatient), with an optional sliced `episodeOfCare` that can contain an `lpr3identifier` (using the Lpr3Identifier profile with a UUIDv5 constraint). MedComCorePractitionerRole mandates `code` (from `$PractitionerRoles`), `practitioner` (referencing MedComCorePractitioner), and `organization` (referencing MedComCoreOrganization). MedComCoreDiagnosticReport mandates `status` (from `$StatusCodeDiagnosticReport`), `subject` (referencing MedComCorePatient), and `issued`, with optional `result` (referencing MedComCoreObservation) and `media` (referencing MedComCoreMedia). MedComCoreMedia mandates `status`, `identifier` (using MedComAssignedIdentifier), `content.data`, `content.contentType` (from `$Mimetypes`), `content.title`, and `content.creation`. MedComCoreObservation mandates `status` (from `$ObsStatusCodes`), `effectiveDateTime`, `code`, and `subject` (referencing MedComCorePatient). Extensions like MedComCoreIdentifierExtension (holding MedComAssignedIdentifier) and MedComCoreContactExtension are defined for specific data elements. This core set of profiles and extensions, with their specific identifier and terminology requirements, forms the basis for consistent data representation across MedCom's messaging standards.

## Implementation Approach

**Critical workflows and interactions:**

-   The IG does not define specific workflows but provides the building blocks for workflows defined in other MedCom IGs, such as sending and receiving HospitalNotifications or CareCommunications.
-   Implementations will need to support the creation and consumption of resources conforming to the MedComCore profiles.

**Important requirements and guardrails:**

-   Mandatory use of CPR, SOR, and LPR3 identifiers where applicable.
-   Adherence to specified value sets for coded elements.
-   Compliance with `MustSupport` elements in profiles.
-   Proper use of references to link resources.
-   Validation of resources against the defined profiles and extensions.

**Notable design choices and patterns:**

-   Inheritance from DK-Core profiles to leverage existing definitions and ensure alignment with HL7 Denmark's work.
-   Use of extensions to accommodate Danish-specific data elements without modifying the base FHIR resources.
-   Emphasis on using references to link resources, promoting a connected data model.
-   Clear specification of mandatory and optional elements to guide implementation.

## Ecosystem Context

**Target systems and users:**

-   Hospitals, municipalities, general practitioners, and other healthcare providers in Denmark.
-   IT systems used for electronic health records (EHRs), patient administration, laboratory information management, and other healthcare applications.
-   Developers and implementers of healthcare IT systems in Denmark.

**Relationship to other standards/IGs:**

-   Builds upon and extends [DK-Core](https://hl7.dk/fhir/core/) defined by HL7 Denmark.
-   Serves as a foundation for other MedCom IGs, such as MedComMessaging, MedComCareCommunication, and MedComHospitalNotification.
-   References standard FHIR resources and terminology.

**Relevant jurisdictions or programs:**

-   The Danish healthcare system.
-   MedCom, the Danish national organization for healthcare IT standards.

**Primary use cases and scenarios:**

-   Exchange of patient demographics, encounter information, and other core data between healthcare systems.
-   Support for specific MedCom message exchanges, such as HospitalNotifications and CareCommunications.
-   Development of consistent and interoperable healthcare applications in Denmark.
-   Enabling communication between hospitals, municipalities, and general practitioners regarding patient care.
-   Facilitating the sharing of laboratory results and other diagnostic information.
-   Supporting the coordination of care for patients across different settings and providers.
