# vr-common-library: Analysis

## Core Purpose & Scope

-   **Primary interoperability challenges this IG addresses:** The primary challenge addressed by this IG is the lack of standardization in the exchange of vital records data between jurisdictions and the National Center for Health Statistics (NCHS). It aims to harmonize data elements and structures across different vital events (birth, death, fetal death) and related use cases like medicolegal death investigation.
-   **Key clinical/business problems it solves:** It solves the problem of redundant and inconsistent definitions of common data elements across different vital records IGs, reducing implementation burden and improving data quality for national vital statistics. It also supports the transition from legacy systems to FHIR-based exchange for vital records reporting.
-   **Intended scope and boundaries:** The scope is limited to defining a library of reusable FHIR resources (profiles, extensions, value sets, code systems) for vital records data. It does not define message exchange mechanisms, workflows, or RESTful APIs, which are left to use-case-specific IGs like VRDR and BFDR. It focuses on demographic data elements and key person profiles common across vital records.

## Technical Foundation

-   **Core profiles and extensions:**
    -   **Profiles:** `PatientVitalRecords` (abstract, based on US Core Patient), `PatientChildVitalRecords`, `PatientMotherVitalRecords`, `PractitionerVitalRecords`, `RelatedPersonFatherNaturalVitalRecords`, `RelatedPersonFatherVitalRecords`, `RelatedPersonMotherVitalRecords`, `RelatedPersonParentVitalRecords`, `ObservationCodedRaceAndEthnicityVitalRecords`, `ObservationInputRaceAndEthnicityVitalRecords`, `ObservationEducationLevelVitalRecords`, `LocationVitalRecords`.
    -   **Extensions:** `ExtensionPartialDateTimeVitalRecords`, `ExtensionPartialDateVitalRecords`, `ExtensionPatientFetalDeathVitalRecords`, `ExtensionReportedParentAgeAtDeliveryVitalRecords`, `ExtensionWithinCityLimitsIndicatorVitalRecords`, `ExtensionCityCodeVitalRecords`, `ExtensionDistrictCodeVitalRecords`, `AuxiliaryStateIdentifier1`, `AuxiliaryStateIdentifier2`, `CertificateNumber`, `ExtensionLocationJurisdictionIdVitalRecords`, `ExtensionBypassEditFlagVitalRecords`.
-   **Notable operations and interactions:** This IG does not define specific operations or interactions. It provides the building blocks for data exchange, which are then used by other IGs to define specific workflows.
-   **Key terminology and value sets:**
    -   **Value Sets:** `ValueSetBirthAttendantTitlesVitalRecords`, `ValueSetBirthplaceCountryVitalRecords`, `ValueSetCodedRaceAndEthnicityPersonVitalRecords`, `ValueSetDateOfBirthEditFlagsVitalRecords`, `ValueSetEducationLevelVitalRecords`, `ValueSetEducationLevelPersonVitalRecords`, `ValueSetFatherRelationshipVitalRecords`, `ValueSetHispanicOriginVitalRecords`, `ValueSetJurisdictionVitalRecords`, `ValueSetInputRaceAndEthnicityPersonVitalRecords`, `ValueSetMotherRelationshipVitalRecords`, `ValueSetMaritalStatusVitalRecords`, `ValueSetRaceCodeVitalRecords`, `ValueSetRaceMissingValueReasonVitalRecords`, `ValueSetRaceRecode40VitalRecords`, `ValueSetResidenceCountryVitalRecords`, `ValueSetStatesTerritoriesAndProvincesVitalRecords`, `ValueSetUSStatesAndTerritoriesVitalRecords`, `ValueSetUSStatesVitalRecords`, `ValueSetUSTerritoriesVitalRecords`, `ValueSetUnitsOfAgeVitalRecords`, `ValueSetYesNoNotApplicableVitalRecords`, `ValueSetYesNoUnknownVitalRecords`, `ValueSetYesNoUnknownNotApplicableVitalRecords`, `ValueSetEditBypass01234VitalRecords`, `ValueSetPluralityEditFlagsVitalRecords`, `ValueSetRoleVitalRecords`, `ValueSetPartialDateDataAbsentReasonVitalRecords`.
    -   **Code Systems:** `CodeSystemComponentVitalRecords`, `CodeSystemCountryCodeVitalRecords`, `CodeSystemHispanicOriginVitalRecords`, `CodeSystemJurisdictionsVitalRecords`, `CodeSystemRaceCodeVitalRecords`, `CodeSystemRaceRecode40VitalRecords`, `CodeSystemLocalObservationsCodesVitalRecords`, `CodeSystemEditFlagsVitalRecords`, `CodeSystemUSStatesTerritoriesVitalRecords`.
-   **Significant patterns and constraints:**
    -   Heavy reliance on extensions to capture vital records-specific data elements not present in US Core.
    -   Use of component slices within `Observation` profiles to represent multiple race and ethnicity codes.
    -   Use of `ExtensionBypassEditFlagVitalRecords` to support validation workflows.
    -   Use of `ExtensionPartialDateTimeVitalRecords` and `ExtensionPartialDateVitalRecords` to represent partial dates and times.
    -   Constraints on code systems and value sets to align with NCHS requirements.

## Technical Essence

This IG defines a core set of FHIR R4 profiles and extensions to standardize the representation of common demographic and person-related data elements for vital records exchange. It leverages US Core profiles as a base, extending `Patient`, `Practitioner`, and `RelatedPerson` with vital records-specific attributes like birthplace, birth time, and coded address components. `Observation` profiles are defined for coded and input race/ethnicity, education level, and emerging issues, using sliced components to capture multiple values where needed. Key extensions include `ExtensionPartialDateTimeVitalRecords` and `ExtensionPartialDateVitalRecords` for handling partial dates, `ExtensionBypassEditFlagVitalRecords` for edit flags, and address extensions for city/county codes. The IG also defines numerous value sets and code systems, primarily sourced from NCHS and PHINVADS, to ensure consistent terminology across vital records use cases. The design emphasizes reusability across different vital event types and related IGs, providing a common foundation for FHIR-based vital records reporting.

## Implementation Approach

-   **Critical workflows and interactions:** This IG does not define specific workflows. Implementers would use the defined resources within the context of specific use cases, such as submitting birth or death records, as defined in other IGs.
-   **Important requirements and guardrails:** Implementers must adhere to the defined profiles and extensions, ensuring that all required and Must Support elements are populated. They must also use the specified code systems and value sets. Partial dates and times must be handled using the defined extensions.
-   **Notable design choices and patterns:** The use of abstract profiles (e.g., `PatientVitalRecords`) allows for inheritance and specialization in use-case-specific IGs. The use of extensions for many data elements reflects the need to capture information not covered by standard FHIR or US Core.

## Ecosystem Context

-   **Target systems and users:** The primary target systems are jurisdictional vital records systems and the NCHS's National Vital Statistics System (NVSS). Users include vital records staff, epidemiologists, and public health researchers.
-   **Relationship to other standards/IGs:** This IG is designed to be used in conjunction with other vital records IGs, such as VRDR (Vital Records Death Reporting) and BFDR (Birth and Fetal Death Reporting). It also builds upon US Core and references external standards like LOINC, SNOMED CT, and ISO 3166.
-   **Relevant jurisdictions or programs:** This IG is relevant to all U.S. jurisdictions that report vital records data to the NCHS. It is part of the broader NVSS modernization effort.
-   **Primary use cases and scenarios:** The primary use cases are the submission of birth, death, and fetal death records from jurisdictions to NCHS, as well as the exchange of vital records data for other public health purposes, such as medicolegal death investigation and birth defects reporting.
