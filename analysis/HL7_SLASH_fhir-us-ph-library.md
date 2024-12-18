# fhir-us-ph-library: Analysis

## Core Purpose & Scope

The **US Public Health Profiles Library (USPHPL)** addresses the primary interoperability challenge of redundant profile definitions across different public health implementation guides (IGs) in the US Realm. It aims to reduce implementation burden for healthcare organizations, EHR vendors, and public health agencies by providing a collection of reusable architecture and content profiles representing common public health concepts and patterns. The IG solves the problem of inconsistent data representation and exchange in public health reporting by establishing a standardized framework. Its scope is initially focused on elements common to the Electronic Case Reporting (eCR) and MedMorph IGs, with a longer-term goal of incorporating data elements from other public health use cases. The boundaries are defined by the US public health domain, complementing and reusing US Core profiles wherever possible.

## Technical Foundation

The technical foundation of USPHPL rests on **FHIR Release 4.0.1**.

**Core Profiles:** The IG defines numerous profiles categorized into:
- **Content Profiles:** These profiles define what data is exchanged about health encounters, clinical findings, clinical history, and related concepts. Examples include `USPublicHealthCharacteristicsOfHomeEnvironment`, `USPublicHealthConditionEncounterDiagnosis`, `USPublicHealthEncounter`, `USPublicHealthLabResultObservation`, and `USPublicHealthPregnancyStatusObservation`.
- **Content Profiles - Entities:** These profiles define what data is exchanged about entities such as people, places, and organizations. Examples include `USPublicHealthLocation`, `USPublicHealthOrganization`, `USPublicHealthPatient`, and `USPublicHealthPractitionerRole`.
- **Architecture Profiles:** These profiles relate to how data is defined and exchanged, supporting metadata for consistent content lifecycle management. Examples include `USPublicHealthContentBundle`, `USPublicHealthDocumentBundle`, `USPublicHealthMessageDefinition`, and `USPublicHealthMessageHeader`.
- **Architecture Profiles - Terminology:** These profiles support representation and use of metadata to address terminology concerns and support consistent content lifecycle management. Examples include `USPublicHealthValueSet`, `USPublicHealthTriggeringValueSet`, `USPublicHealthComputableValueSet`, and `USPublicHealthExecutableValueSet`.

**Core Extensions:** The IG defines several extensions to capture public health-specific data elements not covered by base FHIR or US Core. Examples include `USPublicHealthAddressExtension`, `USPublicHealthDateDeterminedExtension`, `USPublicHealthDeterminationOfReportabilityExtension`, `USPublicHealthInitiationReasonExtension`, and `USPublicHealthTribalAffiliationExtension`.

**Notable Operations and Interactions:** The IG does not define specific operations but implies interactions related to reporting, data exchange, and terminology services.

**Key Terminology and Value Sets:** The IG defines several code systems and value sets, including:
- `USPublicHealthCodeSystemForValueSetUseContext`: Defines codes for use cases representing the use context of a ValueSet.
- `USPublicHealthCodeSystemJurisdictionsExample`: Describes example jurisdictions.
- `USPublicHealthCodeSystemMessageTypes`: Contains codes for identifying types of messages being exchanged.
- `USPublicHealthCodeSystemPlanDefinitionActions`: Contains codes for identifying actions in PlanDefinition.
- `USPublicHealthCodeSystemReportInitiationTypes`: Contains codes for identifying how the message was initiated.
- `USPublicHealthCodeSystemTriggerDefinitionNamedEvents`: Contains codes for identifying named events to subscribe to in clinical workflows.
- `USPublicHealthCodeSystemUsageContext`: Contains codes that identify the use context of a ValueSet or Library.
- `USPublicHealthCodeSystemUsageContextType`: Contains codes that identify the use context type of a ValueSet or Library.
- `USPublicHealthValueSetMessageSignificanceCategory`: Defines values for message significance category.
- `USPublicHealthValueSetMessageTypes`: Defines values for message types.
- `USPublicHealthValueSetPlanDefinitionAction`: Defines values for PlanDefinition actions.
- `USPublicHealthValueSetPregnancyStatus`: Defines values for pregnancy status.
- `USPublicHealthValueSetPriority`: Defines values for priority.
- `USPublicHealthValueSetReportInitiationType`: Defines values for report initiation type.
- `USPublicHealthValueSetTriggerDefinitionNamedEvent`: Defines values for trigger definition named events.

**Significant Patterns and Constraints:** The IG heavily relies on the **Must Support** concept from US Core, applying it to various elements within its profiles. It also introduces specific constraints on existing US Core profiles to meet public health needs, such as requiring `telecom` and `address` in the `USPublicHealthOrganization` profile.

## Technical Essence

The USPHPL IG provides a library of reusable FHIR R4 profiles and extensions for US public health reporting, built upon and extending US Core. It defines `Content` profiles like `USPublicHealthConditionEncounterDiagnosis` (constrained from `USCoreConditionEncounterDiagnosis`) to capture specific clinical data, and `Entity` profiles like `USPublicHealthPatient` (constrained from `USCorePatient`) to represent key entities. `Architecture` profiles like `USPublicHealthContentBundle` (a `collection` Bundle) and `USPublicHealthMessageHeader` structure the exchange of information. `Terminology` profiles like `USPublicHealthValueSet` and `USPublicHealthComputableValueSet` standardize the use of terminologies. Extensions like `USPublicHealthAddressExtension` (requiring `country` and `state` if US) and `USPublicHealthDeterminationOfReportabilityExtension` (with values like "Reportable", "May be Reportable") add public health-specific data elements. The IG mandates Must Support on many elements, following US Core's guidance. A core design decision is the use of nested Bundles for reporting, with a `MessageHeader` followed by a `Content` Bundle containing resources like `Patient`, `Encounter`, `Condition`, and `Observation`. Value sets like `USPublicHealthValueSetMessageTypes` and code systems like `USPublicHealthCodeSystemJurisdictionsExample` provide controlled vocabularies for consistent data representation.

## Implementation Approach

The USPHPL is intended to be implemented in conjunction with US Core. Implementers would use the defined profiles and extensions to represent public health data within their systems and exchange it with other systems. Key workflows involve:
1. **Data Extraction:** Extracting relevant clinical data from EHRs based on the defined profiles.
2. **Report Creation:** Assembling the extracted data into a `USPublicHealthContentBundle` nested within a `USPublicHealthReportingBundle` with a `USPublicHealthMessageHeader`.
3. **Data Validation:** Validating the created Bundle against the defined profiles and value sets.
4. **Data Transmission:** Sending the Bundle to the appropriate public health agency endpoint, potentially using defined message types.
5. **Data Processing:** Receiving and processing the Bundle by public health systems, potentially generating a response message.

The IG emphasizes the use of Must Support elements, requiring implementers to define exactly how they support these elements. It also provides guidance on conformance verbs (SHALL, SHOULD, MAY) and principles for profile inclusion and use.

## Ecosystem Context

The primary target systems for this IG are **EHRs**, **public health agency systems**, and other systems involved in public health reporting and data exchange in the **US Realm**. The target users include **healthcare providers**, **public health officials**, **EHR vendors**, and **health information exchanges**. The IG is closely related to **US Core**, reusing and extending its profiles. It also references other standards like **LOINC**, **SNOMED CT**, **RxNorm**, and **v3 code systems**. The IG is relevant to various public health programs and jurisdictions within the US. The primary use cases include **electronic case reporting (eCR)**, **public health surveillance**, and **research reporting**. The IG supports scenarios such as reporting a case of a reportable condition from an EHR to a public health agency, receiving a reportability response, and exchanging public health data for research purposes.
