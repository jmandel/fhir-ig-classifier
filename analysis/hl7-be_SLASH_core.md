# core: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of standardizing the exchange of core healthcare information within the Belgian healthcare system. It focuses on enabling interoperability between various systems and stakeholders by defining a common set of profiles and extensions based on the HL7 FHIR standard.
-   **Key clinical/business problems it solves:** The IG aims to solve problems related to data consistency, fragmentation, and lack of standardization in the exchange of patient demographics, administrative information, and core clinical data. It facilitates the sharing of information for care coordination, public health reporting, and administrative processes.
-   **Intended scope and boundaries:** The scope is limited to the Belgian healthcare context, focusing on federal-level requirements. It defines core profiles for resources like Patient, Practitioner, Organization, Location, and others, but does not cover specialized clinical domains in depth. The IG sets boundaries by referencing existing Belgian code systems and naming systems, and by defining specific constraints relevant to the Belgian context.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** BePatient, BePractitioner, BeOrganization, BeLocation, BeAddress, BeDocumentReference, BeCommunication, BeConsent, BeGroup, BeCodedAnnotation, BePractitionerRole, BeProvenance.
    -   **Extensions:** BeExtCodeableConcept, BeExtCodeableReference, BeExtGenderAtBirth, BeExtRecorder, BeExtSimpleNote.
-   **Notable operations and interactions:** The IG does not define specific operations or interactions beyond standard FHIR interactions. It implies support for CRUD operations on the profiled resources.
-   **Key terminology and value sets:**
    -   **Value Sets:** BeVSCdHcParty, BeVSGenderAtBirth, BeVSPatientRelationshipType, BeVSCareLocation, be-civilstate, be-contactperson, be-vs-score.
    -   **Code Systems:** BeCSCareLocation, Cdfedcountry, CivilState, ContactPerson, HCParty.
    -   **Naming Systems:** be-cbe, be-ehp, be-insurancenumber, be-insurancymembership, be-nihdi, be-ns-nihdi-organization, be-ns-nihdi-professional, be-ssin, BeNSNihdiNomenclature.
-   **Significant patterns and constraints:**
    -   **Belgian Identifiers:** The IG heavily relies on Belgian identifiers like SSIN, NIHDI, and CBE, defining specific constraints for their usage within profiles.
    -   **Address Standardization:** The BeAddress profile introduces extensions for street name, house number, and post box to ensure consistent representation of Belgian addresses.
    -   **Language Support:** The IG supports multilingual content through extensions and the use of language codes.
    -   **Invariants:** Defines invariants (be-inv-CBE, be-inv-NIHDI, be-inv-SSIN) to enforce specific formats for Belgian identifiers.

## Technical Essence

This IG establishes a Belgian federal interoperability framework by profiling core FHIR resources to align with national requirements. It mandates the use of Belgian identifiers (SSIN, NIHDI, CBE) within `Patient`, `Practitioner`, and `Organization` profiles, enforcing their format through invariants. The `BeAddress` profile extends the standard `Address` to include structured elements for street name, house number, and post box, reflecting Belgian address conventions. The `BePractitionerRole` leverages `CD-HCPARTY` and `SNOMED-CT` for role and specialty coding. The IG utilizes custom extensions like `BeExtGenderAtBirth` and `BeExtCodeableReference` to capture specific data elements. It emphasizes the use of national code systems like `HCParty`, `CivilState`, and `ContactPerson` for consistent terminology. The IG does not define custom operations but relies on standard FHIR interactions for data exchange, focusing on creating a common data model for core healthcare information exchange within Belgium.

## Implementation Approach

-   **Critical workflows and interactions:** The IG supports standard FHIR workflows for creating, reading, updating, and deleting resources. Key interactions involve exchanging patient demographics, practitioner information, organization details, and core clinical data using the defined profiles.
-   **Important requirements and guardrails:** Implementations must adhere to the defined profiles and extensions, ensuring the correct usage of Belgian identifiers and code systems. Invariants enforce data integrity and consistency. The IG emphasizes the importance of using the `text` element in `Address` for label printing and recommends structuring address components using the defined extensions.
-   **Notable design choices and patterns:** The IG adopts a profiling approach, extending base FHIR resources to meet Belgian requirements. It leverages existing FHIR infrastructure and patterns, such as the use of `CodeableConcept` and `Reference` elements. The design emphasizes data consistency and interoperability within the Belgian context.

## Ecosystem Context

-   **Target systems and users:** The target systems are likely EHRs, hospital information systems, public health systems, and other healthcare applications within Belgium. Users include healthcare providers, administrators, patients, and public health authorities.
-   **Relationship to other standards/IGs:** The IG builds upon the core FHIR specification and may relate to other IGs focusing on specific clinical domains or use cases within Belgium. It references existing Belgian standards like KMEHR for context and mapping.
-   **Relevant jurisdictions or programs:** The IG is relevant to the Belgian federal government and its eHealth initiatives.
-   **Primary use cases and scenarios:** The primary use cases include patient registration, practitioner identification, organization management, care coordination, public health reporting, and administrative processes within the Belgian healthcare system. Scenarios might involve sharing patient demographics between hospitals, identifying a practitioner using their NIHDI number, or reporting public health data using standardized formats.
