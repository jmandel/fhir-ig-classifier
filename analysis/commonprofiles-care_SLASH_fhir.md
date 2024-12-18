# fhir: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG focuses on establishing common profiles and extensions for Swedish healthcare stakeholders to facilitate data exchange and interoperability within the Swedish healthcare ecosystem. It addresses the challenge of inconsistent FHIR resource implementations by providing standardized profiles for core resources like Patient, Practitioner, Organization, and ServiceRequest.
-   **Key clinical/business problems it solves:** The IG aims to streamline data sharing between different healthcare IT systems in Sweden, enabling more efficient care coordination, reduced administrative burden, and improved data quality. It also supports specific use cases like self-referrals and appointment bookings.
-   **Intended scope and boundaries:** The scope is limited to the Swedish healthcare context, focusing on common profiles and extensions relevant to this region. It includes core profiles, value sets, and extensions used in the implementation profiles, even if not originally published by this group. The IG explicitly references and builds upon the Swedish base profiles.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `PatientSECommonsLite`, `PractitionerSECommonsLite`, `OrganizationSECommonsLite`, `ServiceRequestSelfReferralSECommonsLite`, `QuestionnaireSECommonsLite`, `QuestionnaireResponseSECommonsLite`. These profiles are based on the Swedish base profiles (SEBasePatient, SEBasePractitioner, SEBaseOrganization) and constrain them for specific use cases.
    -   **Extensions:** `HsaHierarchy` - describes a unit's place in the Swedish HSA hierarchy, with slices for `hsaCareProvider` and `hsaCareUnit`.
-   **Notable operations and interactions:** The IG does not define specific operations or interactions but implies standard FHIR interactions for creating, reading, updating, and searching resources based on the defined profiles.
-   **Key terminology and value sets:**
    -   SNOMED CT (Swedish version) for clinical concepts (e.g., care unit, care provider, chief complaint).
    -   Swedish-specific identifiers: HSA ID (healthcare organizations and practitioners), organization ID (companies and associations), personnummer, samordningsnummer, nationellt reservnummer (patient identifiers).
    -   Implicit value set for chief complaint in Sweden (sökorsak).
-   **Significant patterns and constraints:**
    -   "Lite" profiles for lightweight use cases, requiring few data elements.
    -   Mandatory elements and specific cardinalities defined for each profile.
    -   Invariants for validating Swedish identifiers (personnummer, samordningsnummer, organisationsnummer).
    -   Slicing used to define specific identifier types (e.g., HSA ID, organization ID) and organization types (care unit, care provider).

## Technical Essence

This IG defines a set of constrained FHIR profiles tailored for Swedish healthcare interoperability. `OrganizationSECommonsLite` mandates `name`, slices `identifier` for `hsaid` (using `urn:oid:1.2.752.29.4.19`) and `organizationIdentifier` (using `urn:oid:2.5.4.97` and validated by `organisationsnummer-invariant`), and slices `type` for `careUnit` (SNOMED CT `43741000`) and `careProvider` (SNOMED CT `143591000052106`). `PatientSECommonsLite` requires at least one `identifier`, slicing it for `personnummer` (validated by `personnummer-invariant`), `samordningsnummer` (validated by `samordningsnummer-invariant`), and `nationelltReservnummer`. `PractitionerSECommonsLite` mandates `hsaid` under `identifier`, `active`, `name` (constrained to `SEBaseHumanName`), and `telecom` with required `system` and `value`. `ServiceRequestSelfReferralSECommonsLite` mandates `authoredOn`, `performer` (reference to `Organization`), and slices `reasonCode` for `chiefComplaint` from the Swedish implicit value set. The `HsaHierarchy` extension, applicable to `Organization`, provides slices for `hsaCareProvider` and `hsaCareUnit`, both referencing `Organization` with an `identifier` using `urn:oid:1.2.752.29.4.19`.

## Implementation Approach

-   **Critical workflows and interactions:** The IG supports workflows related to patient identification, practitioner and organization lookup, self-referrals, and potentially appointment bookings. Interactions would involve searching for and retrieving resources based on the defined profiles, as well as creating and updating resources conforming to these profiles.
-   **Important requirements and guardrails:** Implementers must adhere to the defined profiles, including mandatory elements, cardinalities, and value sets. Validation against the specified invariants for Swedish identifiers is crucial. The use of the `HsaHierarchy` extension is important for representing organizational relationships within the Swedish healthcare system.
-   **Notable design choices and patterns:** The use of "Lite" profiles simplifies implementation for common use cases. The focus on Swedish-specific identifiers and terminology ensures alignment with the national context. The reliance on SNOMED CT for clinical concepts promotes semantic interoperability.

## Ecosystem Context

-   **Target systems and users:** The target systems are healthcare IT systems operating within Sweden, including EHRs, patient portals, and other systems involved in patient care and administration. Users include healthcare providers, patients, and administrators.
-   **Relationship to other standards/IGs:** The IG builds upon the Swedish base profiles and references HL7 FHIR R4. It also utilizes SNOMED CT and other relevant coding systems.
-   **Relevant jurisdictions or programs:** The IG is specifically designed for the Swedish healthcare jurisdiction.
-   **Primary use cases and scenarios:** The primary use cases include:
    -   Sharing basic patient, practitioner, and organization information between systems.
    -   Supporting self-referrals (Vårdbegäran för egen räkning).
    -   Facilitating appointment bookings (future work).
    -   Enabling the display of fundamental organization information alongside other resources like ServiceRequests or Observations.
    -   Populating lists of practitioners for selection in user interfaces.
