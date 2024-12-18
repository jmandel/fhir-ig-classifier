# fhir-registry-protocols-ig: Analysis

## Core Purpose & Scope

**Primary interoperability challenges this IG addresses:**

-   Automating the extraction of clinical data from multiple sources for registry submissions.
-   Standardizing the way clinical registries define their data requirements.
-   Enabling healthcare provider organizations to automatically collect and format data for registry submission.

**Key clinical/business problems it solves:**

-   Reduces the manual effort and cost associated with registry data abstraction and submission.
-   Improves the timeliness and accuracy of registry data.
-   Facilitates the use of clinical data for quality improvement, research, and public health surveillance.

**Intended scope and boundaries:**

-   Defines a process and workflow for registry data extraction and submission.
-   Specifies the use of FHIR resources to define registry data requirements and construct registry submissions.
-   Focuses on the data collection and formatting aspects of registry submission.
-   Does not specify the transport mechanism for submission, but suggests using existing FHIR IGs like MedMorph or UDS+.

## Technical Foundation

**Core profiles and extensions:**

-   `CREDSStructureDefinition`: Profiles `StructureDefinition` to define logical models for registry data requirements, including mappings to FHIR, CDA, and HL7 v2.
-   `CREDSSubmission`: Profiles `Bundle` to represent a registry submission, with a `MessageHeader` for submitter information and a `US Core Patient` resource for the subject.

**Notable operations and interactions:**

-   `Create / Update Registry Definition [CURD]`: Used by the Registry Submission Definition Creator to create or update `StructureDefinition` resources on the Registry Submission Definition Repository.
-   `Search / Retrieve Registry Definition [SRRD]`: Used by the Registry Submitter to search for and retrieve `StructureDefinition` resources from the Registry Submission Definition Repository.
-   `Retrieve Registry Submission Data [RRSD]`: Used by the Registry Submitter to retrieve clinical data from Registry Submission Data Sources based on the mappings defined in the `StructureDefinition`.
-   `Create / Update Registry Submission [CURS]`: Used by the Registry Submitter to create or update a registry submission `Bundle` on the Registry Submission Consumer.
-   `Validate Registry Submission [VRS]`: Used by the Registry Submitter or Consumer to validate a registry submission `Bundle`.

**Key terminology and value sets:**

-   `Antiarrhythmics`: Value set listing antiarrhythmic medications used in CathPCI procedures.
-   `NCDRQuestionCodesCS`: Code system defining codes for questions used in NCDR registries.
-   `NCDRValidationErrors`: Code system defining codes for validation errors.
-   Numerous value sets defining codes for specific clinical concepts, procedures, and observations, such as `PriorMyocardialInfarction`, `PercutaneousCoronaryIntervention`, `CABG`, `CerebrovascularDisease`, `DiabetesMellitus`, `HemodialysisOrPeritonealDialysis`, `ChronicLungDisease`, `PeripheralArterialOcclusiveDisease`, `Hypertension`, `Dyslipidemia`, `SmokingStatus`, `CardiacArrest`, `HeartFailure`, `NewYorkHeartAssociationQuery`, `AbnormalElectrocardiacAssessment`, `CardiacCTA`, `StressTest`, `OrganDonor`, `ValvularStenosis`, `ValvularRegurgitation`, `PCIOperator`, `CardiacCatheter`, `PackedRedBloodCells`, `SeattleAnginaQs`, `SeattleAnginaAs`, `RoseDyspneaQ`, `YesNo`, `MyocardialInfarction`, `PriorCoronaryArteryBypassGraft`, `HealthInsurancePaymentSource`, `FirstCardiacArrestRhythm`, `ConcomitantProceduresPerformedType`, `ElectrocardiacAssessmentResults`, `ElectrocardiacAssessmentMethod`, `PriorDiagnosticCoronaryAngiographyProcedureResults`, `StressTestResults`, `StressTestRiskExtentofIschemia`, `ArterialAccessClosureMethod`, `LesionSegmentNumber`, `GraftVesselCABGVessel`, `PCIStatus`, `HypothermiaInduced`, `CardiovascularTreatmentDecision`, `MultivesselProcedureType`, `PCIIndications`, `STEMIFirstNoted`, `PatientCenteredReasonforDelay`, `ArterialAccessSite`, `VentricularSupportDeviceType`, `IntraAndPostEvents`, `InterventionTypes`, `CABGStatus`, `CABGIndication`, `CardiacRehabilitationReferral`, `SyntaxScore`, `TIMIFlow`, `StentType`, `LocationInGraft`, `LesionComplexity`, `FunctionalCapacity`, `SurgicalRisk`.

**Significant patterns and constraints:**

-   Uses `StructureDefinition` with `kind = logical` to define registry data requirements as logical models.
-   Employs `StructureDefinition.mapping` to map logical model elements to FHIR resources, CDA documents, and HL7 v2 messages using FHIRPath.
-   Defines environment variables (`%patient`, `%period`, `%encounter`, `%procedure`, `%condition`) for use in FHIRPath expressions within mappings.
-   Requires the use of `US Core Patient` for the subject of the submission.
-   Specifies the use of a `Bundle` of type `collection` for registry submissions, with the first entry being a `MessageHeader` and the second entry being the `US Core Patient`.
-   Recommends tagging resources in the submission `Bundle` with the corresponding data dictionary element paths.

## Technical Essence

This IG enables automated registry data extraction by defining registry requirements as FHIR `StructureDefinition` logical models with mappings to FHIR, CDA, and HL7 v2 artifacts using FHIRPath. A `Registry Submission Definition Creator` publishes these `StructureDefinition` resources to a `Registry Submission Definition Repository`. A `Registry Submitter` retrieves the relevant `StructureDefinition`, parses the mappings, and queries `Registry Submission Data Sources` for data using FHIRPath, resolving patient identity as needed. The retrieved data is then transformed into a `CREDSSubmission` `Bundle` (collection type) containing a `MessageHeader` with submitter information, a `US Core Patient` resource, and other resources as specified in the `StructureDefinition`'s "Output" mappings, which may reference US Core or other FHIR profiles. The `Bundle` is then submitted to a `Registry Submission Consumer`, potentially using other FHIR IGs for transport. The `StructureDefinition` mappings leverage environment variables like `%patient`, `%period`, and `%encounter` to contextualize FHIRPath expressions. Each data element in the logical model is represented by an `ElementDefinition` with mappings to source standards (FHIR, CDA, HL7 v2) and an "Output" mapping specifying the target resource/profile in the submission `Bundle`.

## Implementation Approach

**Critical workflows and interactions:**

1.  Registry defines data requirements using `CREDSStructureDefinition` and publishes to a repository.
2.  Submitter searches and retrieves the relevant `StructureDefinition` from the repository.
3.  Submitter parses the `StructureDefinition` mappings and identifies data sources.
4.  Submitter queries data sources for patient data based on mappings, resolving patient identity across systems.
5.  Submitter transforms retrieved data into a `CREDSSubmission` `Bundle` according to "Output" mappings.
6.  Submitter submits the `Bundle` to the registry consumer.
7.  Consumer validates the submission against the `StructureDefinition`.

**Important requirements and guardrails:**

-   Registry definitions must conform to `CREDSStructureDefinition`.
-   Submission `Bundles` must conform to `CREDSSubmission`.
-   FHIRPath expressions in mappings must be valid and resolvable.
-   Patient identity must be resolved across data sources.
-   Data must be transformed according to "Output" mappings.

**Notable design choices and patterns:**

-   Use of `StructureDefinition` as a logical model for defining registry requirements.
-   Mapping to multiple standards (FHIR, CDA, HL7 v2) using FHIRPath.
-   Use of environment variables in FHIRPath expressions.
-   "Output" mapping to specify the structure of the submission `Bundle`.
-   Leveraging existing FHIR profiles (e.g., US Core) for data representation.

## Ecosystem Context

**Target systems and users:**

-   Clinical registries (e.g., American College of Cardiology National Cardiovascular Data Registry).
-   Healthcare provider organizations (e.g., hospitals, clinics).
-   Health IT vendors.
-   Registry data abstractors.
-   Registry data analysts.

**Relationship to other standards/IGs:**

-   Builds upon FHIR R4.
-   References US Core.
-   Can be used in conjunction with MedMorph, UDS+, or other FHIR IGs for transport.
-   Leverages IHE PIXm and PDQm for patient identity resolution.

**Relevant jurisdictions or programs:**

-   United States

**Primary use cases and scenarios:**

-   Automated data extraction for registry submission.
-   Defining registry data dictionaries and information models.
-   Mapping registry data elements to standard formats.
-   Querying for registry data from multiple sources.
-   Transforming collected data into a registry submission.
-   Validating registry submissions.
-   Supporting quality improvement, research, and public health surveillance through registry data.
-   Specific example provided: American College of Cardiology CathPCI registry.
