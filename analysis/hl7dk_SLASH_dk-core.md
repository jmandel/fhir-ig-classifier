# dk-core: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** This IG addresses the challenge of achieving semantic interoperability in the Danish healthcare system by providing a common set of FHIR profiles and extensions for representing core healthcare concepts. It aims to standardize the exchange of health information across different sectors, including primary care, hospitals, and municipalities.
-   **Key clinical/business problems it solves:** The IG solves problems related to inconsistent data representation, lack of common terminology, and difficulties in exchanging information between different healthcare systems in Denmark. It facilitates data sharing for various purposes, including patient care, quality improvement, and research.
-   **Intended scope and boundaries:** The IG focuses on defining core profiles and extensions for commonly used FHIR resources in a Danish context. It does not attempt to constrain for specific use cases but provides a foundation for downstream IGs to build upon. The scope includes patient demographics, organizations, practitioners, conditions, observations, and related persons. It does not cover all possible FHIR resources or use cases.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** DkCorePatient, DkCoreOrganization, DkCorePractitioner, DkCoreCondition, DkCoreObservation, DkCoreBasicObservation, DkCoreRelatedPerson, AuthorizationIdentifier, CVRIdentifier, DkCoreCprIdentifier, DkCoreDeCprIdentifier, DkCoreXeCprIdentifier, GLNIdentifier, KombitOrgIdentifier, ProducentId.
    -   **Extensions:** ConditionLastAssertedDate, NotFollowedAnymore, RegionalSubDivisionCodes, MunicipalityCodes.
-   **Notable operations and interactions:** The IG does not define specific operations or interactions, but it implicitly supports standard FHIR interactions like create, read, update, and search on the profiled resources.
-   **Key terminology and value sets:**
    -   **Code Systems:** DkCoreProfessionGroupCodes, AdministrativeGenderDkSupplement, GreenlandMunicipalityCodes, MunicipalityCodes, DKCoreRegionalSubdivisionCodes, DK\_Marital\_Status\_Codes, AddressType, AddressUse, CareTeamStatus, ConsentState, DaysOfWeek, EpisodeOfCareStatus, PublicationStatus, RequestStatus, DkCoreDeCPRCodes, RoleCodeDkSupplement, DkRelatedPersonRelationshipCodes.
    -   **Value Sets:** DkCoreProfessionGroupValueSet, MunicipalityCodes, RegionalSubdivisionCodes, LoincBasicObservation, SCTBasicObservation, IEEEBasicObservation, NPUBasicObservation, UCUMBasicUnits, TechniquesSCTCodes, DkCoreDeCPRValueSet, RelatedPersonRelationshipTypes, dk-marital-status, sor-organization-type.
-   **Significant patterns and constraints:**
    -   Most profiles have cardinality as defined in the core FHIR specification.
    -   Must Support flags are not used.
    -   Terminology bindings are often sliced, offering specific binding options.
    -   Choice or repeating elements are often sliced to define specific profiling options.
    -   Invariants are used to enforce specific constraints, such as the format of identifiers.

## Technical Essence

The dk-core IG establishes a common foundation for FHIR interoperability in Denmark by defining a set of core profiles and extensions. It leverages standard FHIR resource models, extending them with Denmark-specific identifiers (CPR, eCPR, CVR, SOR, GLN, KOMBIT organization ID, ProducentID) and terminologies (NPU, SKS, MedCom, Danish municipality and region codes). The `DkCorePatient` profile mandates the use of CPR or eCPR identifiers and includes extensions for municipality and regional subdivision codes in addresses. `DkCoreOrganization` requires at least one of SOR, KOMBIT, or CVR identifiers and supports various organization types through a sliced `type` element bound to a SNOMED CT value set. `DkCorePractitioner` utilizes an `AuthorizationIdentifier` for official health professional authorization and a sliced `qualification.code` bound to a Danish profession group value set. `DkCoreCondition` supports various coding systems (FSIII, SCT, FFB, SKS-D, ICPC2) and includes extensions for the last asserted date and a "not followed anymore" date. `DkCoreObservation` allows for multiple coding systems (LOINC, SNOMED CT, NPU, IEEE, MedCom, SKS) and mandates UCUM units when a value is present. `DkCoreBasicObservation` further profiles `DkCoreObservation` for vital signs, requiring a LOINC code and allowing optional SNOMED CT, NPU, and IEEE codes. `DkCoreRelatedPerson` mirrors the patient profile's identifier structure and uses a custom value set for relationship types.

## Implementation Approach

-   **Critical workflows and interactions:** The IG supports workflows related to patient registration, recording of observations and conditions, identification of healthcare organizations and practitioners, and management of related persons. Standard FHIR interactions are used to exchange this information.
-   **Important requirements and guardrails:** Implementations must adhere to the defined profiles and extensions, ensuring that required identifiers and terminologies are used correctly. Invariants enforce specific constraints on data elements.
-   **Notable design choices and patterns:** The IG emphasizes flexibility by avoiding the use of Must Support flags and allowing for multiple coding systems. It uses slicing to provide options for different use cases and terminologies.

## Ecosystem Context

-   **Target systems and users:** The IG targets healthcare systems in Denmark, including hospitals, primary care clinics, municipalities, and other organizations involved in patient care. Users include healthcare professionals, administrators, and IT developers.
-   **Relationship to other standards/IGs:** The IG builds upon the core FHIR specification and references other standards like SNOMED CT, LOINC, UCUM, IEEE 11073, and Danish-specific standards like SOR and CPR. It is intended to be a foundation for other Danish FHIR IGs. It also references the HL7 FHIR PHD IG and Continua Design Guidelines.
-   **Relevant jurisdictions or programs:** The IG is governed by HL7 Denmark and approved by the Danish Health Data Authority. It is relevant to national e-health initiatives in Denmark.
-   **Primary use cases and scenarios:** The IG supports various use cases, including sharing patient demographics, clinical observations, conditions, and information about healthcare organizations and practitioners. It enables the exchange of health information for purposes such as care coordination, quality reporting, and research. It specifically mentions use cases like TOKS (Tidlig Opsporing af Kritisk Sygdom), TOBS (Tidlig Opsporing af Begyndende Sygdom), and home monitoring of blood pressure.
