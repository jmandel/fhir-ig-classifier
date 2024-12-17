File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/sushi-config.yaml

status: active
title: SDOH Clinical Care
version: 2.2.0
fhirVersion: 4.0.1
copyrightYear: 2021+
releaseLabel: STU 2.2
canonical: http://hl7.org/fhir/us/sdoh-clinicalcare
FSHOnly: false
applyExtensionMetadataToRoot: false
id: hl7.fhir.us.sdoh-clinicalcare
name: Sdohclinicalcare
dependencies:
  hl7.fhir.us.core:
    version: 3.1.1
    uri: "http://hl7.org/fhir/us/core/ImplementationGuide/hl7.fhir.us.core"
    id: uscore
  hl7.fhir.uv.sdc:
    version: 3.0.0
    uri: "http://hl7.org/fhir/uv/sdc/ImplementationGuide/hl7.fhir.uv.sdc" 
    id: sdc
  hl7.fhir.uv.subscriptions-backport.r4:
    version: 1.1.0
    uri: "http://hl7.org/fhir/uv/subscriptions-backport/ImplementationGuide/hl7.fhir.uv.subscriptions-backport"
    id: sdohsub
  us.nlm.vsac:
    uri: "http://fhir.org/packages/us.nlm.vsac/ImplementationGuide/us.nlm.vsac"
    version: 0.19.0
    id: vsac
  hl7.fhir.extensions.r5:
    version: 4.0.1
parameters:
  show-inherited-invariants: true
  jira-code: sdoh-cc
  path-expansion-params: '../../exp-params.json'  #path is relative to [base]/fsh-generated/resources

extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg  #<<< must include a http://hl7.org/fhir/StructureDefinition/structuredefinition-wg extension that identifies the workgroup responsible for the IG. This is the authoritative element.
    valueCode: pc  # <<< The value must be the code for the workgroup
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use

license: CC0-1.0
publisher:
  name: HL7 International / Patient Care
  url: http://www.hl7.org/Special/committees/patientcare
  email: patientcare@lists.hl7.org
jurisdiction: urn:iso:std:iso:3166#US "United States of America"
description: This HL7 Implementation Guide (IG) defines how to exchange Social Determinants of Health (SDOH) content defined by the Gravity Project using the HL7 FHIR standard..
pages:
  index.md:
    title: IG Home
  sdoh_challenges_gravity.md:
    title: SDOH and the Gravity Project
  sdoh_clinical_care_scope.md:
    title: SDOH Clinical Care Background
  technical_background.md:
    title: Technical Background
  glossary.md:
    title: Glossary
  credits.md:
    title: Credits
  assessment_instrument_support.md:
    title: Assessment Instrument Support
  referral_workflow.md:
    title: Referral Workflow
  checking_task_status.md:
    title: Checking Task Status
  connecting_applications_with_api_data_sources.md:
    title: Connecting Applications with API Data Sources
  gravity_terminology.md:
    title: Gravity Project Value Sets
  mustsupport_and_missing_data.md:
    title: Must Support and Missing Data
  privacy_and_security.md:
    title: Privacy and Security
  artifacts.html:
    title: Artifacts Index
  draft_specifications_for_personal_characteristics.md:
    title: Draft Specifications for Personal Characteristics
  downloads.md:
    title: Downloads
  stu2_ballot_changes.md:
    title: STU2 Ballot Changes
  stu2_publication_changes.md:
    title: STU2 Publication Changes
  stu2_1_update_changes.md:
    title: STU2.1 Publication Changes
  stu2_2_update_changes.md:
    title: STU2.2 Publication Changes
  ImplementationGuide-hl7.fhir.us.sdoh-clinicalcare.md:
    title: SDOH Clinical Care ImplementationGuide Resource
  # FHIR_API_Examples.md:
  #   title: FHIR API Examples
    
groups:
  CapabilityStatements:
    name: Capability Statements
    resources:
      - SDOHCC-CoordinationPlatform
      - SDOHCC-ReferralRecipientLight
      - SDOHCC-ReferralRecipient
      - SDOHCC-ReferralSource
      - SDOHCC-PatientApp
  Profiles:
    name: Profiles
    resources:
      - SDOHCCCondition
      - SDOHCCConsent
      - SDOHCCGoal
      - SDOHCCGroup
      - SDOHCCHealthcareService
      - SDOHCCLocation
      - SDOHCCObservationAssessment
      - SDOHCCObservationScreeningResponse
      - SDOHCCProcedure
      - SDOHCCServiceRequest
      - SDOHCCTaskForPatient
      - SDOHCCTaskForReferralManagement
  ValueSets:
    name: Value Sets
    resources:
      - SDOHCCValueSetLOINCSNOMEDCT
      - SDOHCCValueSetObservationStatus
      - SDOHCCValueSetSDOHCategory
      - SDOHCCValueSetSDOHQuestionnaireCategory
      - SDOHCCValueSetReferralTaskStatus
      - SDOHCCValueSetTaskCode
      - SDOHCCValueSetTaskPriority
      - SDOHCCValueSetTaskStatus
  CodeSystems:
    name: Code Systems
    resources:
      - SDOHCCCodeSystemTemporaryCodes
  Extensions:
    name: Extensions
    resources:
      - SDOHCCExtensionHealthcareServiceTelecomAppointment
  SearchParameters:
    name: Search Parameters
    resources:
      - ServiceRequest-supporting-info
      - Task-output-reference
  Examples:
    name: Examples
    resources:
    - pat-53234
    - SDOHCC-ConditionUnemployedExample
    - SDOHCC-ConsentInformationDisclosureExample
    - SDOHCC-GoalFoodSecurityExample
    - SDOHCC-GroupSDOHPatientsForPayerExample
    - SDOHCC-HealthcareServiceTelecomAppointmentExample
    - SDOHCC-LocationExample
    #- SDOHCC-ObservationAssessmentSocialIsolationExample
    - SDOHCC-ObservationAssessmentInadequateFoodIntakeExample
    - SDOHCC-ObservationAssessmentTransportTooExpensiveExample
    - SDOHCC-OrganizationClinicExample
    - SDOHCC-OrganizationCoordinationPlatformExample
    - SDOHCC-OrganizationPayerExample
    - SDOHCC-PractitionerDrJanWaterExample
    - SDOHCC-PractitionerRoleDrJanWaterExample
    - SDOHCC-ProcedureFoodPantryApplicationAssistanceExample
    - SDOHCC-ProcedureProvisionOfFoodExample
    - SDOHCC-ProcedureSummerFoodProgramApplicationAssistanceExample
    - SDOHCC-ServiceRequestActiveFoodPantryApplicationAssistExample
    - SDOHCC-ServiceRequestSubreferralGardenProgramExample
    - SDOHCC-ServiceRequestSubreferralSummerFoodProgramExample
    - SDOHCC-TaskPatientReviewInformationCompletedExample
    - SDOHCC-TaskPatientInformationRequestCompletedExample  
    - SDOHCC-TaskReferralManagementOrderFulfillmentAcceptedExample
    - SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample
    - SDOHCC-TaskReferralManagementOrderSubtaskAcceptedExample
    - SDOHCC-TaskReferralManagementOrderSubtaskCompletedExample
    - SDOHCC-TaskPatientMakeAppointmentCompletedExample
    - SDOHCC-TaskPatientRiskQuestionnaireCompletedExample
    - DocumentReferenceExample
  PRAPARE:
    name: PRAPARE Examples
    description: For the PRAPARE assessment instrument, these are examples of a Questionnaire, a QuestionnaireResponse, and a StructureMap, as well as of Observations and a Condition derived from the QuestionnaireResponse using the StructureMap.
    resources:
    - SDOHCC-QuestionnairePRAPARE
    - SDOHCC-QuestionnaireResponsePRAPAREExample
    - StructureMap/SDOHCC-StructureMapPRAPARE
    - SDOHCC-ObservationResponsePRAPAREChildCareNeedExample
    - SDOHCC-ObservationResponsePRAPAREClothingNeedExample
    - SDOHCC-ObservationResponsePRAPAREEmploymentStatusExample
    - SDOHCC-ObservationResponsePRAPAREHousingStatusExample
    - SDOHCC-ConditionHomelessExample
  HVS:
    name: Hunger Vital Sign Examples
    description: For the Hunger Vital Sign assessment instrument, these are examples of a Questionnaire, a QuestionnaireResponse, and a StructureMap, as well as of an Observation and Condition derived from the QuestionnaireResponse using the StructureMap.
    resources:
    - SDOHCC-QuestionnaireHungerVitalSign
    - SDOHCC-QuestionnaireResponseHungerVitalSignExample
    - StructureMap/SDOHCC-StructureMapHungerVitalSign    
    - SDOHCC-ObservationResponseHungerVitalSignQuestion3Example
    - SDOHCC-ConditionFoodInsecurityExample 
    - SDOHCC-DeviceSoftwareExample       
    - SDOHCC-ConditionAsserterDeviceExample
  NHANES:
    name: Social Connection and Isolation Panel (NHANES) Examples
    description: For the NHANES assessment instrument, these are examples of Observations that were not created from a QuestionnaireResponse and, therefore, do not reference QuestionnaireResponse (via derivedFrom). Instead, the Observation grouping (via hasMember) links the NHANES assessment instrument to the Observations that resulted from it.
    resources:
    - SDOHCC-ObservationResponseNHANESGroupingExample
    - SDOHCC-ObservationResponseNHANESQuestion1Example
    - SDOHCC-ObservationResponseNHANESQuestion2Example
    - SDOHCC-ObservationResponseNHANESQuestion3Example
    - SDOHCC-ObservationResponseNHANESQuestion4Example
    - SDOHCC-ObservationResponseNHANESQuestion5Example
    - SDOHCC-ObservationResponseNHANESQuestion6Example
  DraftArtifacts:
    name: Draft Artifacts for Personal Characteristic Observations
    resources:
      - SDOHCCObservationEthnicityOMB
      - SDOHCCObservationGenderIdentity
      - SDOHCCObservationPersonalCharacteristic
      - SDOHCCObservationPersonalPronouns
      - SDOHCCObservationRaceOMB
      - SDOHCCObservationRecordedSexGender
      - SDOHCCObservationSexualOrientation
      - SDOHCCExtensionConditionAsserter
      - SDOHCCValueSetObservationDataAbsentReason
      - SDOHCCValueSetObservationDerivedFromIdType
      - SDOHCCValueSetObservationMethod
      - SDOHCCValueSetOMBEthnicityCategories
      - SDOHCCValueSetOMBRaceCategories
      - SDOHCCValueSetPronounsValue
  DraftArtifactsExamples:
    name: Examples of Draft Artifacts for Personal Characteristic Observations
    resources:
    - SDOHCC-ObservationEthnicityOMBExample
    - SDOHCC-ObservationGenderIdentityExample
    - SDOHCC-ObservationPersonalPronounsExample
    - SDOHCC-ObservationRaceOMBExample
    - SDOHCC-ObservationRaceOMBMotherExample
    - SDOHCC-ObservationRaceOMBPractitionerExample
    - SDOHCC-ObservationRecordedSexGenderExample
    - SDOHCC-ObservationSexualOrientationExample
    - SDOHCC-RelatedPersonMotherExample
  Parameters:
    name: Terminology Parameters 
    resources: 
    - terminology-settings

menu:
  Home: index.html
  Table of Contents:  toc.html
  Background:
    SDOH Data Interoperability: sdoh_challenges_gravity.html
    SDOH Clinical Care Background: sdoh_clinical_care_scope.html
    Technical Background : technical_background.html
    Glossary: glossary.html
    Credits: credits.html
  Implementation Guidance:
    Assessment Instrument Support: assessment_instrument_support.html
    Referral Workflow:  referral_workflow.html
    Checking Task Status: checking_task_status.html
    Connecting Applications With API Data Sources: connecting_applications_with_api_data_sources.html
    Gravity Project Value Sets: gravity_terminology.html
  FHIR Artifacts and Examples:
    Capability Statements: artifacts.html#capability-statements
    Profiles: artifacts.html#profiles
    Value Sets: artifacts.html#value-sets
    Code Systems: artifacts.html#code-systems
    Examples: artifacts.html#examples
    Complete Listing: artifacts.html
    # FHIR API Examples: FHIR_API_Examples.html
  Specifications:
    Privacy and Security: privacy_and_security.html
    Must Support and Missing Data: mustsupport_and_missing_data.html
    Draft Specifications for Personal Characteristics:   draft_specifications_for_personal_characteristics.html
  Support:
    Project Home: https://confluence.hl7.org/display/GRAV
    Help & Discussions: https://chat.fhir.org/#narrow/stream/233957-Gravity-sdoh-cc
    Downloads: downloads.html
    US Core Spec: "{{site.data.fhir.ver.uscore}}"
    FHIR R4 Spec: "{{site.data.fhir.path}}"
  Change History:
    STU2 Ballot Changes:  stu2_ballot_changes.html
    STU2 Publication Changes:  stu2_publication_changes.html
    STU2.1 Update Changes: stu2_1_update_changes.html
    STU2.2 Update Changes: stu2_2_update_changes.html



---

// File: input/pagecontent/assessment_instrument_support.md

This section describes standardized social risk assessment instruments, their benefits, and how to standardize their capture, coding and output leveraging work from the  [Regenstrief Institute](https://www.regenstrief.org/) and the [National Library of Medicine](https://www.nlm.nih.gov/) (NLM), [SDC Questionnaire], [SDC QuestionnaireResponse], and [StructureMap] to automate the creation of [SDOHCC Observation Screening Response] and [SDOHCC Condition] instances from [SDC QuestionnaireResponse].

### Introduction to Social Care Assessment Instruments

Social risk assessment instruments are used to gather information about social risks that can impact an individual’s health and well-being. The information collected through social risk assessment instruments can be used by providers, public health organizations, and policymakers to develop interventions and programs aimed at addressing the root causes of health disparities and improving health outcomes for individuals and communities.

Assessment instruments fit into the SDOH CC [Conceptual Framework](sdoh_clinical_care_scope.html) which illustrates how to: 1) incorporate screening into the care process to assess health concerns and problems.  2) use this information to help the provider and patient establish goals and identify social risk-related interventions to address those goals. 3) use responses from standardized assessment instruments to drive public health analysis of aggregated data from patient populations.

This IG builds on existing FHIR frameworks to generate Observations (e.g., [SDOHCC Observation Screening Response]) and Conditions (e.g., [SDOHCC Condition]) from LOINC-encoded assessment instruments for incorporation into the patient’s health record.

### Advantages of Standardized Social Care Assessment Instruments

The list of assessment instruments from which questions have been selected and vetted by the Gravity Project as [face-valid](https://mmshub.cms.gov/measure-lifecycle/measure-testing/evaluation-criteria/scientific-acceptability/validity#:~:text=correlation%20or%20equity-,Face%20Validity,measure%20score%20is%20not%20feasible) can be found in the [Social Determinants of Health Screening Assessments](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.126/expansion/Latest) Value Set.

Advantages of using a standardized social risk assessment instrument include:

* **Interoperability (structural and semantic)**: Standardization (e.g., using the same tested and validated questions and coding) will help to ensure that data is consistent and comparable across studies and populations.
* **Ease of use**: Standardized social risk assessment instruments are generally user-friendly and easy to administer.
* **Cost-effectiveness**: Developing (including testing and validation) custom assessment instruments is time-consuming and expensive.
* **Shared maintenance**: As research and best practices evolve, standardized assessments are more likely to keep up and reflect best current practice.

### Representing Assessment Instrument Data Using Standardized Code Systems

Gravity-authored, SDOH domain-specific value sets are hosted in the National Institutes of Health (NIH) [Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/) and used with the [SDOHCC Observation Screening Response], [SDOHCC Condition], [SDOHCC Procedure], [SDOHCC ServiceRequest] and [SDOHCC Goal] profiles.

As Gravity develops content for SDOH domains, Gravity evaluates domain-specific questions from nationally recognized assessment instruments. For assessment instrument coding, Gravity uses LOINC. The LOINC-encoded assessment instruments, from which Gravity has chosen one or more (but not necessarily all) questions, are included in the [Social Determinants of Health Screening Assessments](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.126/expansion/Latest) grouping value set in VSAC.

Questions from LOINC-encoded assessment instruments that meet Gravity’s vetting criteria are included domain-specific value sets (e.g., [Food Insecurity Screening Assessments Questions](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.3484/expansion/Latest) value set) that are used with the [SDOHCC Observation Screening Response] profile. All domain-specific value sets for assessment instrument questions are included in the [Social Determinants of Health Screening Assessments Questions](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.207/expansion/Latest) grouping value set in VSAC.

### Representing Assessment Instrument Data in a FHIR Format

Implementers should have a plan to present assessment instrument data in a computable FHIR format. The FHIR [QuestionnaireResponse] and [Observation](https://build.fhir.org/observation.html) resources can each be used to present data captured in an assessment instrument.

#### Representing Assessment Instrument Data with QuestionnaireResponse and Observation

[QuestionnaireResponse] and [Observation](https://build.fhir.org/observation.html) can present data from completed assessment instruments that has been captured in a structured, codified format (e.g., electronic forms). Best practice is to capture and share [QuestionnaireResponse] and [Observation](https://build.fhir.org/observation.html). However, decisions as to whether to use one or both resources may be influenced by the use case and the format of the structured data coming from the data sources (e.g., hospitals, health information exchanges (HIEs), social care networks (SCNs), and qualified health information organizations (QHIOs)). Gravity uses the [SDC QuestionnaireResponse] and [SDOHCC Observation Screening Response] profiles.

##### Benefits of using QuestionnaireResponse to represent assessment instrument data

Benefits of using [QuestionnaireResponse] to represent assessment instrument data include:

* QuestionnaireResponse is better suited to support use cases that require access to the format of the original assessment instrument.
* QuestionnaireResponse is always based on a FHIR [Questionnaire] and preserves the Questionnaire’s structure and complexity to provide a fully contextualized view of a completed Questionnaire. For example, QuestionnaireResponse allows the precise capture of the assessment instrument version, the exact text of the questions and answers, the order of presentation, multiple choice answer options, and whether questions were skipped. 
* Question-answer pairs in QuestionnaireResponse can be automatically transformed to FHIR Observations using [StructureMap](assessment_instrument_support.html#using-structuremap-to-generate-observations-or-conditions-from-questionnaireresponse) and the [SDC Implementation Guide](https://build.fhir.org/ig/HL7/sdc/).

##### Benefits of using Observation to represent assessment instrument data

Benefits of using [Observation](https://build.fhir.org/observation.html) to represent individual question-answer pairs from an assessment instrument include:

* Observation is supported by most EMR systems and is one of the most mature FHIR resources.
* Observation is better suited than QuestionnaireResponse to support use cases that require querying the assessment instrument data. 
* A question-answer pair represented as an Observation can be retrieved and exchanged independently.  
* Observation has data elements to represent information that is not explicitly represented in QuestionnaireResponse. For example:
    * Observation.category can be used to tag Observations by SDOH domain (e.g., Food Insecurity, Housing Instability) 
    * Observation.interpretation can be used to flag Observations that might represent a health-related social need (HRSN). 
    * Observation can also indicate relationships (e.g., Observation.derivedFrom) to other artifacts. For example, an Observation may be calculated or determined based on other Observations. 
    * If assessment instrument context is needed, Observations generated from a QuestionnaireResponse can use Observation.derivedFrom to reference the QuestionnaireResponse.
 
**Table 1**: Guidance on QuestionnaireResponse (QR) and Observation Screening Response (OSR) based on Usage Needs

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
   <thead>
      <tr>
         <th>Usage Need</th>
         <th>QR</th>
         <th>OSR</th>
         <th>Guidance Notes</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <ol>
               <li>Querying for discrete questions and answers</li>
               <li>Computation of risk scores or inferencing rules for Conditions</li>
               <li>Original assessment instrument format is important</li>
            </ol>
         </td>
         <td>Needed</td>
         <td>Needed</td>
         <td>
            <ul>
               <li>This is the most common scenario.</li>
               <li>Observations may not need to be created for all question-answer pairs.
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>
            <ol>
               <li>Querying for discrete questions and answers</li>
               <li> Computation of risk scores or inferencing rules for creating Conditions</li>
               <li>Original assessment instrument format is not important</li>
            </ol>
         </td>
         <td>Not Needed</td>
         <td>Needed</td>
         <td>
            <ul>
               <li>Querying and computation are much easier with Observation than QuestionnaireResponse.</li>
               <li>It may be necessary to determine which question-answer pairs to represent as Observations (e.g., usefulness of representing a question-answer pair as an Observation may be determined by an implementer’s use case).
               </li>
            </ul>
         </td>
      </tr>
      <tr>
         <td>
            <ol>
               <li>Original assessment instrument format is important</li>
               <li>No need for queries, computations, etc.
               </li>
            </ol>
         </td>
         <td>Needed</td>
         <td>Not Needed</td>
         <td>
            <ul>
               <li>This is an unlikely usage need.</li>
               <li>It is highly likely that there will be a future need for queries or computations. Thus, it is advantageous to also create Observations, even if not currently needed.
               </li>
            </ul>
         </td>
      </tr>
   </tbody>
</table>

#### Additional Guidance on Questionnaire and QuestionnaireResponse

[Questionnaire] is a template (not specific to an individual) that, like [QuestionnaireResponse], is a precise representation of an assessment instrument. 

QuestionnaireResponse includes an individual’s responses and always references a [Questionnaire] via QuestionnaireResponse.questionnaire. This IG uses the [SDC QuestionnaireResponse] profile which references the [SDC Base Questionnaire](https://build.fhir.org/ig/HL7/sdc/StructureDefinition-sdc-questionnaire.html#root).

Table 2 below provides guidance for Questionnaire.code and Questionnaire.item for several scenarios of ways in which implementers may compose assessment instruments.

**Table 2**: Guidance on Questionnaire elements based on the composition of the assessment instrument

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
<thead>
   <tr>
      <th>Assesment Instrument Composition (what it compromises)</th>
      <th>Example</th>
      <th>Guidance for Questionnaire</th>
   </tr>
</thead>
<tbody>
   <tr>
      <td><b>Standardized Assessment Instrument</b>: This is a single (LOINC-encoded) assessment instrument in its entirety. This assessment instrument is LOINC-encoded, and all questions and answers are LOINC-encoded.</td>
      <td>AHC HRSN Screening Tool (Core Questions)</td>
      <td>Questionnaire.code is the LOINC code (panel code) for the standardized assessment instrument. Questionnaire.item(s) are the LOINC codes for all questions on the standardized assessment instrument.</td>
   </tr>
   <tr>
      <td><b>Non-Standardized Assessment Instrument with Standardized Questions</b>: This assessment instrument combines questions from one or more Standardized Assessment Instruments. <u>This assessment instrument is not LOINC-encoded</u> but all its questions and answers are LOINC-encoded.</td>
      <td>AHC HRSN Screening Tool (Core Questions) + selected questions from AHC HRSN Supplemental Questions</td>
      <td>Questionnaire.code is a non-LOINC (e.g., local) code since the assessment instrument is not LOINC-encoded. Questionnaire.item(s) are the LOINC codes for the questions (from the standardized assessment instruments) that have been combined into a non-standardized instrument.</td>
   </tr>
   <tr>
      <td><b>Non-Standardized Assessment Instrument with Standardized and Non-standardized Questions</b>: This assessment instrument combines questions from a Standardized Assessment Instrument with some non-LOINC encoded questions. <u>This assessment instrument is not LOINC-encoded.</u> Some questions and answers are LOINC-encoded. <u>Some questions and answers are not LOINC-encoded.</u></td>
      <td>AHC HRSN Screening Tool (Core Questions) + selected non-LOINC encoded (e.g., local) questions</td>
      <td>Questionnaire.code is a non-LOINC (e.g., local) code since the assessment instrument is not LOINC-encoded. Questionnaire.item(s) are the LOINC codes (for the questions from the standardized assessment instrument) and the non-LOINC (e.g., local) codes for questions that are not from a standardized, LOINC-encoded instrument.</td>
   </tr>
</tbody>
</table>


#### Additional Guidance on SDOHCC Observation Screening Response Elements

This section provides guidance on Observation.category and Observation.interpretation in the context of their use in the [SDOHCC Observation Screening Response] profile.

##### Categorizing Observations by SDOH domain(s) using Observation.category  

Observation.category has two, fixed category codes (survey and social-history) to indicate that a Q-A pair captured as an Observation represents an assessment (survey) related to social history. 

Additionally, Observation.category has a binding to [SDOHCC ValueSet SDOH Category] which has values to categorize an Observation by SDOH domain(s) (e.g., Food Insecurity. Housing Instability, etc.). The additional guidance and examples below are for Observation.category values from [SDOHCC ValueSet SDOH Category].

Additional guidance related to Observation.category for [SDOHCC Observation Screening Response] :

* “Observation.category: SDOH domain” (e.g., Food Insecurity) means that the Observation addresses a health-related social need (HRSN) in the specified SDOH domain.
* “Observation.category: SDOH domain” does not mean that the Observation confirms a HRSN in the specified SDOH domain. 
* Some Observations may be assigned only one value for Observation.category (from [SDOHCC ValueSet SDOH Category]) while others may be assigned more than one value. 
* When categorizing an Observation that represents a Q-A pair, Gravity recommends that the SDOH domain(s) be assigned based on the question <u>and its complete allowed set of answers</u> on an assessment instrument. 

Examples for using Observation.category to tag Observations by SDOH domain are provided below. The examples are based on the Accountable Health Communities Health-Related Social Needs Screening Tool (AHC HRSN Screening Tool) or the AHC HRSN Screening Tool Supplemental Questions.<sup>1</sup>

**Example 1**: When a question and its complete answer set address only one SDOH domain, an Observation using the question for Observation.code should have only one value for Observation.category.

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
   <thead>
      <tr>
         <th>AHC HRSN Question or Answer</th>
         <th colspan="2">Observation Element</th>
      </tr>
   </thead>
   <thead>
      <tr>
         <th>AHC HRSN Question</th>
         <th>.code</th>
         <th>.category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Within the past 12 months, you worried that your food would run out before you got money to buy more</td>
         <td><span style="white-space: nowrap;">88122-7</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
      </tr>
   </tbody>
   <thead>
      <tr>
         <th>AHC HRSN Answers</th>
         <th>.value</th>
         <th>.category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Often true</td>
         <td><span style="white-space: nowrap;">LA28397-0</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
      </tr>
      <tr>
         <td>Sometimes true</td>
         <td><span style="white-space: nowrap;">LA6729-3</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
      </tr>
      <tr>
         <td>Never true</td>
         <td><span style="white-space: nowrap;">LA28398-8</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
      </tr>
   </tbody>
</table>

* The above question and the set of answer choices provides information about a possible HRSN related to Food Insecurity.
* Although Observation.value: LA28398-8 (Never true) does not indicate a HRSN, the Observation still provides information about Food Insecurity. 
* Therefore, regardless of the answer chosen, Gravity recommends using Observation.category: [food-insecurity](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity) for an Observation from the AHC HRSC Screening Tool with Observation.code: 88122-7.

**Example 2**: When a question and its complete answer set address more than one SDOH domain, an Observation using the question for Observation.code may have more than one value for Observation.category.

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
   <thead>
      <tr>
         <th>AHC HRSN Question or Answer</th>
         <th colspan="2">Observation Element</th>
      </tr>
   </thead>
   <thead>
      <tr>
         <th>AHC HRSN Question</th>
         <th>.code</th>
         <th>.category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>What is your living situation today?</td>
         <td><span style="white-space: nowrap;">71802-3</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-homelessness">homelessness</a></span>, <span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-housing-instability">housing-instability</a></span></td>
      </tr>
   </tbody>
   <thead>
      <tr>
         <th>AHC HRSN Answers</th>
         <th>.value</th>
         <th>.category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>I have a steady place to live</td>
         <td><span style="white-space: nowrap;">LA31993-1</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-homelessness">homelessness</a></span>, <span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-housing-instability">housing-instability</a></span></td>
      </tr>
      <tr>
         <td>I have a place to live today, but I am worried about losing it in the future</td>
         <td><span style="white-space: nowrap;">LA31994-9</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-homelessness">homelessness</a></span>, <span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-housing-instability">housing-instability</a></span></td>
      </tr>
      <tr>
         <td>I do not have a steady place to live (I am temporarily staying with others, in a hotel, in a shelter, living outside on the street, on a beach, in a car, abandoned building, bus or train station, or in a park</td>
         <td><span style="white-space: nowrap;">LA31995-6</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-homelessness">homelessness</a></span>, <span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-housing-instability">housing-instability</a></span></td>
      </tr>
   </tbody>
</table>

* The above question and the set of answer choices provides information about a possible HRSN related to Housing Instability or Homelessness. 
* Although Observation.value: LA31993-1 (I have a steady place to live) does not indicate a HRSN, the Observation still provides information about Homelessness and Housing Instability. 
* Observation.value: LA31994-9 (I have a place to live today, but I am worried about losing it in the future) provides information about Housing Instability but also shows that the individual is not experiencing Homelessness.
* Regardless of the answer chosen, Gravity recommends using [homelessness](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-homelessness) AND [housing-instability](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-housing-instability) for Observation.category for any Observation with Observation.code: 71802-3.

**Example 3**: Since Gravity Project terminology development for SDOH domains is an ongoing process, some domains may not yet be represented in the [SDOHCC ValueSet SDOH Category] value set. When a question and its complete answer set address an SDOH domain that is not represented in the Observation.category value set, use Observation.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified). If desired, Observationcategory.text can be used to further specify the domain.

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
   <thead>
      <tr>
         <th>AHC HRSN Question or Answer</th>
         <th colspan="3">Observation Element</th>
      </tr>
   </thead>
   <thead>
      <tr>
         <th>AHC HRSN Question</th>
         <th>.code</th>
         <th>.category</th>
         <th>.category.text</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Because of a physical, mental, or emotional condition, do you have difficulty doing errands alone such as visiting a doctor's office or shopping?</td>
         <td><span style="white-space: nowrap;">69861-3</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified">sdoh-category-unspecified</a></span></td>
         <td>Disability Status</td>
      </tr>
   </tbody>
   <thead>
      <tr>
         <th>AHC HRSN Answers</th>
         <th>.value</th>
         <th>.category</th>
         <th>.category.text</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Yes</td>
         <td><span style="white-space: nowrap;">LA33-6</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified">sdoh-category-unspecified</a></span></td>
         <td>Disability Status</td>
      </tr>
      <tr>
         <td>No</td>
         <td><span style="white-space: nowrap;">LA32-8</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified">sdoh-category-unspecified</a></span></td>
         <td>Disability Status</td>
      </tr>
   </tbody>
</table>

* The question and answer set above address Disability Status.
* As of June 2024, Gravity Project has not yet started on Disability Status as a domain. Therefore, ‘disability-status’ is not in the value set for Observation.category.
* In this case, Gravity recommends using Observation.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) for any Observation with Observation.code: 69861-3 and “category.text: Disability Status” can be used to further specify the domain.

##### Flagging Observations for a possible HRSN need using Observation.interpretation

Observation.interpretation: [POS](https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS) (Positive) can be used to flag Observations for which the Q-A pair might represent a HRSN.

Additional guidance related to Observation.interpretation for [SDOHCC Observation Screening Response] : 

* The meaning of Observation.interpretation: [POS](https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS) should be evaluated in conjunction with “Observation.category: SDOH domain”. If the author of an assessment instrument provides guidance that a specific Q-A pair might represent a HRSN, Observation.interpretation: [POS](https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS) can be used to flag the need for follow-up by a provider or qualified health professional (QHP) to further evaluate for a HRSN in the SDOH domain(s) specified by Observation.category.
* Gravity does not advise using Observation.interpretation: [NEG](https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html) (Negative). Assessment instruments are generally designed so that certain answers indicate a possible HRSN. Assessment instrument authors generally do not state that certain Q-A pairs rule out a HRSN. 
* When an answer (Observation.value) does not indicate a possible HRSN, Observation.interpretation should be omitted.
Examples for using Observation.interpretation: [POS](https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS) and understanding its meaning in conjunction with Observation.category are provided below. The examples are based on the AHC HRSN Screening Tool which provides guidance that specific answers might indicate an unmet health-related social need.

**Example 4**: When Observation.category identifies only one SDOH domain, Observation.interpretation: [POS](https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS) can be used to flag that the Observation should be followed-up by a provider or QHP to confirm a HRSN or risk in that SDOH domain (e.g., Food Insecurity).

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
   <thead>
      <tr>
         <th>AHC HRSN Question or Answer</th>
         <th colspan="3">Observation Element</th>
      </tr>
   </thead>
   <thead>
      <tr>
         <th>AHC HRSN Question</th>
         <th>.code</th>
         <th>.category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Within the past 12 months, you worried that your food would run out before you got money to buy more</td>
         <td><span style="white-space: nowrap;">88122-7</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
      </tr>
   </tbody>
   <thead>
      <tr>
         <th>AHC HRSN Answers</th>
         <th>.value</th>
         <th>.category</th>
         <th>.interpretation</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Often true</td>
         <td><span style="white-space: nowrap;">LA28397-0</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
         <td><a href= "https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS">POS</a></td>
      </tr>
      <tr>
         <td>Sometimes true</td>
         <td><span style="white-space: nowrap;">LA6729-3</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
         <td><a href= "https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS">POS</a></td>
      </tr>
      <tr>
         <td>Never true</td>
         <td><span style="white-space: nowrap;">LA28398-8</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
         <td></td>
      </tr>
   </tbody>
</table>

**Example 5**: When Observation.category identifies more than one SDOH domain, Observation.interpretation: [POS](https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS) can be used to flag the Observation as positive for a possible HRSN in at least one of the selected SDOH categories. However, in this case, determining which SDOH category is positive for the identified HRSN requires further evaluation of the answer (Observation.value).

In the example below, Observation.category has two SDOH codes because the question and its complete set of answers address Housing Instability and Homelessness. However, by [definition](https://confluence.hl7.org/display/GRAV/Terminology+Workstream), Housing Instability and Homelessness cannot exist concurrently. In this case, Observation.value: LA31995-6 indicates that the Observation is positive for a possible Housing Instability HRSN and Observation.value: LA31994-9 indicates that the Observation is positive for a possible Homelessness HRSN.

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
   <thead>
      <tr>
         <th>AHC HRSN Question or Answer</th>
         <th colspan="3">Observation Element</th>
      </tr>
   </thead>
   <thead>
      <tr>
         <th>AHC HRSN Question</th>
         <th>.code</th>
         <th>.category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>What is your living situation today?</td>
         <td><span style="white-space: nowrap;">71802-3</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-homelessness">homelessness</a></span>, <span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-housing-instability">housing-instability</a></span></td>
      </tr>
   </tbody>
   <thead>
      <tr>
         <th>AHC HRSN Answers</th>
         <th>.value</th>
         <th>.category</th>
         <th>.interpretation</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>I have a steady place to live</td>
         <td><span style="white-space: nowrap;">LA31993-1</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-homelessness">homelessness</a></span>, <span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-housing-instability">housing-instability</a></span></td>
         <td></td>
      </tr>
      <tr>
         <td>I have a place to live today, but I am worried about losing it in the future</td>
         <td><span style="white-space: nowrap;">LA31994-9</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-homelessness">homelessness</a></span>, <span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-housing-instability">housing-instability</a></span></td>
         <td><a href= "https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS">POS</a></td>
      </tr>
      <tr>
         <td>I do not have a steady place to live (I am temporarily staying with others, in a hotel, in a shelter, living outside on the street, on a beach, in a car, abandoned building, bus or train station, or in a park</td>
         <td><span style="white-space: nowrap;">LA31995-6</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-homelessness">homelessness</a></span>, <span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-housing-instability">housing-instability</a></span></td>
         <td><a href= "https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS">POS</a></td>
      </tr>
   </tbody>
</table>

**Example 6**: Gravity does not advise using Observation.interpretation: [NEG](https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html) (Negative) unless a provider or QHP has evaluated the individual and ruled out the HRSN. Regardless of SDOH Observation.category, when an answer (Observation.value) is provided that does not indicate a HRSN, Observation.interpretation should be omitted.

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
   <thead>
      <tr>
         <th>AHC HRSN Question or Answer</th>
         <th colspan="3">Observation Element</th>
      </tr>
   </thead>
   <thead>
      <tr>
         <th>AHC HRSN Question</th>
         <th>.code</th>
         <th>.category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Within the past 12 months, you worried that your food would run out before you got money to buy more</td>
         <td><span style="white-space: nowrap;">88122-7</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
      </tr>
   </tbody>
   <thead>
      <tr>
         <th>AHC HRSN Answers</th>
         <th>.value</th>
         <th>.category</th>
         <th>.interpretation</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Often true</td>
         <td><span style="white-space: nowrap;">LA28397-0</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
         <td></td>
      </tr>
      <tr>
         <td>Sometimes true</td>
         <td><span style="white-space: nowrap;">LA6729-3</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
         <td></td>
      </tr>
      <tr>
         <td>Never true</td>
         <td><span style="white-space: nowrap;">LA28398-8</span></td>
         <td><span style="white-space: nowrap;"><a href= "CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
         <td>OMIT</td>
      </tr>
   </tbody>
</table>

**Example 7**: When a question is presented to an individual and none of the answers are selected, use Observation.dataAbsentReason: [unknown](https://hl7.org/fhir/R4/codesystem-data-absent-reason.html#data-absent-reason-unknown) (or a subtype), and Observation.interpretation should be omitted.

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
   <thead>
      <tr>
         <th>AHC HRSN Question or Answer</th>
         <th colspan="3">Observation Element</th>
      </tr>
   </thead>
   <thead>
      <tr>
         <th>AHC HRSN Question</th>
         <th>.code</th>
         <th>.category</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Within the past 12 months, you worried that your food would run out before you got money to buy more</td>
         <td><span style="white-space: nowrap;">88122-7</span></td>
         <td><span style="white-space: nowrap;"><a href="CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
      </tr>
   </tbody>
   <thead>
      <tr>
         <th>AHC HRSN Answers</th>
         <th>.value</th>
         <th>.category</th>
         <th>.interpretation</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Often true</td>
         <td><span style="white-space: nowrap;">LA28397-0</span></td>
         <td><span style="white-space: nowrap;"><a href="CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
         <td></td>
      </tr>
      <tr>
         <td>Sometimes true</td>
         <td><span style="white-space: nowrap;">LA6729-3</span></td>
         <td><span style="white-space: nowrap;"><a href="CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
         <td></td>
      </tr>
      <tr>
         <td>Never true</td>
         <td><span style="white-space: nowrap;">LA28398-8</span></td>
         <td><span style="white-space: nowrap;"><a href="CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
         <td></td>
      </tr>
   </tbody>
   <thead>
      <tr>
         <th>AHC HRSN Answers</th>
         <th>.dataAbsentReason</th>
         <th>.category</th>
         <th>.interpretation</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>No Answer</td>
         <td><a href="https://hl7.org/fhir/R4/codesystem-data-absent-reason.html#data-absent-reason-unknown">unknown</a> (or subtype)</td>
         <td><span style="white-space: nowrap;"><a href="CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-food-insecurity">food-insecurity</a></span></td>
         <td>OMIT</td>
      </tr>
   </tbody>
</table>

#### Using Observation Screening Response to Group Observations
In addition to representing Observation instances, [SDOHCC Observation Screening Response] can be used as an Observation Grouping to reference (via Observation.member) the Observation Screening Response instances that result from an individual completing an assessment instrument.

If a QuestionnaireResponse has been created for the assessment instrument, Observation Grouping, while not prohibited, is generally redundant since the member Observations can directly reference QuestionnaireResponse (via derivedFrom) for assessment instrument context.

Observation Grouping is most useful when a QuestionnaireResponse has not been created. For an Observation Grouping example, see [SDOHCC Observation Response NHANES Grouping Example](Observation-SDOHCC-ObservationResponseNHANESGroupingExample.html).

For several of the common ways in which implementors may compose assessment instruments, Table 3 provides guidance for Observation.code and Observation.member for an Observation Grouping.

**Table 3**: Guidance on Observation Grouping based on the composition of the assessment instrument

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
   <tbody>
      <tr>
         <td>
         <strong>Assessment Instrument Composition </strong><strong>(what it comprises)</strong>
         </td>
         <td>
            <strong>Example</strong>
         </td>
         <td>
            <strong>Recommendations for Observation Screening Response Grouping</strong>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Standardized Assessment Instrument:</strong> This is a single (LOINC-encoded) assessment instrument in its entirety.</p>
            <p>This assessment instrument is LOINC-encoded, and all questions and answers are LOINC-encoded.</p>
         </td>
         <td>
            AHC HRSN Screening Tool (Core Questions)
         </td>
         <td>
            <ol>
               <li>Observation.code is the LOINC code (panel code) for the assessment instrument.</li>
               <li>Observation.member references all Observations generated from the assessment instrument.</li>
               <li>All member Observations have LOINC codes for Observation.code and Observation.value (where applicable).</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Non-Standardized Assessment Instrument with Standardized Questions: </strong>This assessment instrument combines questions from one or more Standardized Assessment Instruments.</p>
            <p>This assessment instrument is not LOINC-encoded but all its questions and answers are LOINC-encoded.</p>
         </td>
         <td>
            AHC HRSN Screening Tool (Core Questions) + selected questions from AHC HRSN Supplemental Questions
         </td>
         <td>
            <ol>
               <li>Observation.code is a non-LOINC (e.g., local) code since the assessment instrument is not represented in LOINC.</li>
               <li>Observation.member references all Observations generated from the assessment instrument. All member Observations have LOINC codes for Observation.code and Observation.value (where applicable).</li>
            </ol>
         </td>
      </tr>
      <tr>
         <td>
            <p><strong>Non-Standardized Assessment Instrument with Standardized and Non-standardized Questions</strong>: This assessment instrument combines questions from a Standardized Assessment Instrument with some non-LOINC encoded questions.</p>
            <p>This assessment instrument is not LOINC-encoded. Some questions and answers are LOINC-encoded. Some questions and answers are not LOINC-encoded.</p>
         </td>
         <td>
            AHC HRSN Screening Tool (Core Questions) + selected non-LOINC encoded (e.g., local) questions
         </td>
         <td>
            <ol>
               <li>Observation.code is a non-LOINC (e.g., local) code since the assessment instrument is not represented in LOINC.</li>
               <li>Observation.member references all Observations generated from the assessment instrument. Some member Observations have a LOINC code for Observation.code and Observation.value.</li>
            </ol>
         </td>
      </tr>
   </tbody>
</table>


### Using StructureMap to Generate Observations or Conditions from QuestionnaireResponse

This IG has adopted the map-based approach using the FHIR [StructureMap] resource to define and share rules for generating Observations Conditions (unconfirmed health concerns) from QuestionnaireResponse.

Ideally, in the future, a StructureMap instance could be provided by a Questionnaire steward for a standardized assessment instrument to ensure consistency in the Observations and Conditions (i.e., unconfirmed health concerns) generated from that assessment instrument. A repository of vetted, centrally maintained StructureMaps could significantly help to promote semantic and structural interoperability for standardized assessment instruments as well as reduce provider and implementer burden.

#### Using StructureMap to Generate Observations

This IG supports using SDC StructureMap to generate [SDOHCC Observation Screening Response] instances from QuestionnaireResponse. When using StructureMap to generate Observations from QuestionnaireResponse, rules to align Q-A pairs from a QuestionnaireResponse with Observation.code and Observation.value are generally straightforward. Additional rules, such as rules for assigning Observation.category or Observation.interpretation to a Q-A pair, may be more complex and would ideally be determined with input from assessment instrument authors. 

#### Using StructureMap to Generate Conditions

This IG also supports using SDC StructureMap to generate Conditions (unconfirmed health concerns) for some Q-A pairs from QuestionnaireResponse. Applying rules to Q-A pairs, or combinations of Q-A pairs, to generate Conditions may be complex.

Prior to using SDC StructureMap to generate Conditions from QuestionnaireResponse, implementers should define a clear process for 1) whether this will be done, 2) the rules for generating a Condition from a Q-A pair (or pairs) and 3) verification by a provider or qualified health professional.

**Note**: Regardless of whether Conditions  (unconfirmed health concerns) are generated based on guidance provided by assessment instrument authors, coding resources (e.g., [Gravity Project’s Resource for the AHC HRSN Screening Tool](https://confluence.hl7.org/download/attachments/193661411/Gravity_AHC_HRSN_Documentation_Resource_V1.1.pdf?version=3&modificationDate=1698780911961&api=v2)) or ‘vetted’ StructureMaps, documentation of HRSNs based on assessment instruments should be verified by a care team member via personal interaction with the individual being screened.

#### Additional Detailed Technical Guidance for StructureMap

The StructureMap resource examples in this IG are generated using the [FHIR Mapping Language]({{site.data.fhir.path}}mapping-language.html). This language is then used to generate the StructureMap instances. Authoring the maps in a textual language is much simpler than attempting to craft the XML or JSON StructureMap instances directly. The mapping language also works regardless of the syntax used for the QuestionnaireResponse, i.e., it works the same for JSON, XML and RDF instances.

Instructions and tutorials on how to use the FHIR Mapping Language to convert and transform resources are found [here](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Mapping+Language). This page also includes references to existing open-source implementations that are capable of compiling mapping language instances into FHIR StructureMaps as well as being able to ‘execute’ maps - i.e., convert a QuestionnaireResponse into a transaction Bundle of other resources. Implementers are encouraged to leverage one of these existing community-developed implementations rather than creating their own. This will save work and minimize the likelihood of introducing implementation-specific errors into the transformation process.

Therefore, the overall process for supporting this transformation process is as follows:

1. Identify the Questionnaire that will be used to gather SDOH-related information.
2. Determine what Observation and Condition resources will need to be created to be searchable within the FHIR record.
3. Using the examples provided in this guide as a foundation, create a mapping language file that performs the necessary transformation.
4. Compile the mapping file into a StructureMap instance (e.g., using the FHIR Java validator tool).
5. Execute the map against a QuestionnaireResponse.
6. Execute the resulting transaction Bundle to create the relevant Observations and Conditions on the desired server.
7. Test the map through the completion of the Questionnaire and validate the resulting Observations and Conditions.

Note that the creation of the mapping file and compiled StructureMap only needs to be performed once per Questionnaire.

For more information on StructureMap (e.g., [Designing Questionnaires to support data extraction](https://build.fhir.org/ig/HL7/sdc/extraction.html#designing-questionnaires-to-support-data-extraction)) and the StructureMap-based extraction mechanism (considerations, error handling and other details) please refer to the [Structured Data Capture Implementation Guide (SDC IG)](https://hl7.org/fhir/uv/sdc/STU3/extraction.html#structuremap-based-extraction).

### Process for Implementing Assessment Instruments

In summary, the process followed by this IG for implementing assessment instruments vetted by Gravity is summarized below. The process can also be applied to other assessment instruments. 

* **Use a LOINC-encoded assessment instrument**: [LOINC Components](https://loinc.org/kb/faq/structure/) and [LOINC Answer](https://loinc.org/forums/topic/answer-lists/) Lists standardize the coding and facilitate leveraging the open-source NLM [LHC-Forms Widget](https://lhcforms.nlm.nih.gov/lhcforms).
* **Convert the LOINC-encoded assessment instrument to an [SDC Questionnaire]**: The open-source NLM [LHC-Forms Widget](https://lhcforms.nlm.nih.gov/lhcforms) supports this step by rendering input forms based on FHIR [Questionnaire] for web-based applications and can be used to build and edit FHIR Questionnaires. For some assessment instruments, this step may include establishing calculation logic to define the result of some questions as a function of answers to other questions (e.g., where one or more question determines an answer to another “question” (not directly answered by the patient) as in Hunger Vital Sign Question 3).
* **Instantiate the [SDC Questionnaire]**: Using an appropriate application (e.g., the open-source NLM [FHIR SDC SMART App](https://lhcforms.nlm.nih.gov/sdc) create an [SDC QuestionnaireResponse]
* **Develop translation logic to use [StructureMap]** (this logic should generally be provided by the assessment instrument steward) and a validation tool to generate the following resource instances from the [SDC QuestionnaireResponse]:
    * [SDOHCC Observation Screening Response] - to represent a question-answer pair(s) from the assessment instrument. Any Observations that are produced SHALL include a derivation link (derivedFrom) to the QuestionnaireResponse. Some systems may opt to represent all question-answer pairs as Observations while others may not find this useful and may feel it creates ‘noise’ in the EHR. Key questions for deciding which question-answer pairs should be represented as Observations include but are not limited to:
        * Is it a score or other key measure which may determine whether a problem is recorded in the patient’s record?
        * Is it something a provider would likely search for or for which a provider might want to follow trends?
        * Is it needed as part of the calculation of a measure?
    * [SDOHCC Condition] - to represent any health concerns identified by the assessment instrument
These are Conditions (unconfirmed health concerns) that should be verified by a care team member via personal interaction with the individual being screened.
    * [SDOHCC Observation Screening Response] Grouping - to group any Observations associated with the assessment instrument. Of note, for Observations that can reference a QuestionnaireResponse (as in this process), this is generally redundant but not prohibited.

### Assessment Instrument Examples

This IG provides examples of the FHIR artifacts mentioned above for the following assessment instruments.

#### Example: Hunger Vital Sign (HVS)

This IG includes a complete example of the [Hunger Vital Sign (HVS)](https://loinc.org/88121-9/)<sup>2</sup> assessment instrument including:

* a [SDC HVS Questionnaire](Questionnaire-SDOHCC-QuestionnaireHungerVitalSign.html)
* a [SDC HVS QuestionnaireResponse](QuestionnaireResponse-SDOHCC-QuestionnaireResponseHungerVitalSignExample.html)
* a [StructureMap] that takes the [QuestionnaireResponse] and creates the appropriate [SDOHCC Observation Screening Response] and [SDOHCC Condition] instances
* a [SDOHCC Observation Screening Response] instance used to record Question 3 on the assessment instrument (computed based on the answers to Questions 1 and 2)
* a [SDOHCC Condition] instance that could be used to record the health concern based on the assessment instrument results

#### Example: Protocol for Responding to and Assessing Patients’ Assets, Risks, and Experiences (PRAPARE)

This IG includes a partial example of the [PRAPARE](https://loinc.org/93025-5/)<sup>3</sup> assessment instrument including:

* a [SDC PRAPARE Questionnaire](Questionnaire-SDOHCC-QuestionnairePRAPARE.html)
* a [SDC PRAPARE Questionnaire Response](QuestionnaireResponse-SDOHCC-QuestionnaireResponsePRAPAREExample.html)
* a [StructureMap] that takes the [QuestionnaireResponse] and creates the appropriate [SDOHCC Observation Screening Response] and [SDOHCC Condition] instances
* multiple [SDOHCC Observation Screening Response] instances used to record some of the question and answers on the assessment instrument (not all questions are provided in these examples)
    * [Employment Status](Observation-SDOHCC-ObservationResponsePRAPAREEmploymentStatusExample.html)
    * [Housing Status](Observation-SDOHCC-ObservationResponsePRAPAREHousingStatusExample.html)
    * [Child Care Need](Observation-SDOHCC-ObservationResponsePRAPAREChildCareNeedExample.html)
    * [Clothing Need](Observation-SDOHCC-ObservationResponsePRAPAREClothingNeedExample.html)
* two [SDOHCC Condition] instances to record the health concerns based on the results of the assessment instrument
    * [Unemployed](Condition-SDOHCC-ConditionUnemployedExample.html)
    * [Homeless](Condition-SDOHCC-ConditionHomelessExample.html)

----------------------------------------------------------------------------------------------------

<sup>1</sup> [Accountable Health Communities Health-Related Social Needs Screening Tool Citation and Notification Information](https://www.cms.gov/priorities/innovation/media/document/ahcm-screening-tool-citation)

<sup>2</sup> Hunger Vital Sign™ Hager, E. R., Quigg, A. M., Black, M. M., Coleman, S. M., Heeren, T., Rose-Jacobs, R., Cook, J. T., Ettinger de Cuba, S. A., Casey, P. H., Chilton, M., Cutts, D. B., Meyers A. F., Frank, D. A. (2010). [Development and Validity of a 2-Item Screen to Identify Families at Risk for Food Insecurity](https://childrenshealthwatch.org/wp-content/uploads/EH_Pediatrics_2010.pdf). Pediatrics, 126(1), 26-32. doi:10.1542/peds.2009-3146.  

<sup>3</sup> Protocol for Responding to and Assessing Patients’ Assets, Risks and Experiences (PRAPARE®) and its resources are proprietary information of the National Association of Community Health Centers (NACHC). For more information, visit [https://www.nachc.org/resource/prapare/](https://www.nachc.org/resource/prapare/). The example is included with permission.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/checking_task_status.md

### Use of Task Status

Task.status is the communication mechanism that indicates the status of the fulfillment of a referral or patient-assigned 'to-do' (e.g. requested, accepted, in progress or completed).
Setting the status allows the initiator of the task to understand how (and if) it is progressing. The value sets for the [Referral Task](StructureDefinition-SDOHCC-TaskForReferralManagement.html) status and the [Patient Task](StructureDefinition-SDOHCC-TaskForPatient.html) status are different due to the purpose of the exchange between the requesting entity and the intermediary or performing entity [Referral Task](StructureDefinition-SDOHCC-TaskForReferralManagement.html) vs the exchange with the patient [Patient Task](StructureDefinition-SDOHCC-TaskForPatient.html).  See those profile pages for details.

The guidance on this page details important concepts for implementation. See [Referral Workflow](referral_workflow.html)  to learn how the concepts fit into the overarching guidance.

### Checking Task Status

The Gravity workflow around referrals involves all parties being aware of when relevant Tasks and any associated ServiceRequests (for referrals) have been created and/or updated. In most cases, the Tasks will reside within the EHR system of the initiating provider.  In this case, the EHR will always be aware when the Task is updated, so the challenge of monitoring Tasks will fall solely on the service delivery organization.  However, the Gravity workflow also supports Tasks being posted to a Community Based Organization's (CBO's) FHIR server or an intermediary organization like a Coordination Platform (CP) that is responsible for managing the referral fulfillment process.  In these circumstances, the EHR will need to monitor for changes to Tasks in addition to or instead of the Service Provider.

The types of task occurrences that may be of interest include:
<br>
**Service Delivery Organizations (CBO or CP)**
<br>
* A new Task has been assigned to the organization
* A ServiceRequest associated with a Task assigned to the organization has been modified
* A ServiceRequest associated with a Task assigned to the organization has been canceled

**EHR systems (Provider)**
<br>
* An assigned Task has been accepted or rejected
* Outputs have been added to a Task
* A Task has been marked as complete

There are two mechanisms for detecting the above changes - polling and subscriptions.

#### Polling

In this mode, the system needing information (the 'client') occasionally queries the system maintaining the relevant Tasks and/or ServiceRequests to see if there is anything 'new'.  Clients may need to perform queries against multiple clients if relevant Tasks and ServiceRequests will not be maintained on the same server. To poll, the client will perform a [search]({{site.data.fhir.path}}search.html) for Tasks that are filtered to those either owned or requested by the searching organization. The search would also filter to only include those Tasks that had been created or changed since the server last looked.
E.g.

```[base]/Task?owner=https://example.com/fhir/Organization/123&_lastupdated=gt2021-05-03T17:23:18.1732-04:00```
or
```[base]/Task?requester=https://example.com/fhir/Organization/456&_lastupdated=gt2021-05-03T17:23:18.1732-04:00```

The time-stamp specified would be the search result returned from the last search.

If unassigned Tasks are possible - i.e., where the organization to perform the service isn't pre-identified and the Task is open to whoever wishes to claim and perform it - organizations interested in examining Tasks available to claim would poll as follows:

```[base]/Task?owner:missing=true&status=requested&_lastupdated=gt2021-05-03T17:23:18.1732-04:00```

The frequency of polling needs to be often enough to allow for timely response to changes, while not imposing too high a requirement on system performance. For Gravity, systems that use polling SHALL check for new/updated information at least once per business day and SHOULD check for information at least once per hour during normal hours of operation.  Systems SHOULD NOT query more often than every 15 minutes unless there is an urgent change they are monitoring for.
#### Subscription
In the subscription mechanism, instead of the client system regularly querying the server to see if there are new Tasks or changes to existing Tasks, the client creates a
[Subscription]({{site.data.fhir.ver.sdohsub}}/StructureDefinition-backport-subscription.html) instance on the server that indicates that it wants to be notified about changes to Tasks and, in the Subscription, provides filters that describe what
subset of Tasks it is interested in.  The server will then push notifications when there are new Tasks and the client can then query for the specific Tasks that have changed.
 
This Gravity functionality is based on the [R5 Subscription backport](http://hl7.org/fhir/uv/subscriptions-backport) implementation guide.  This implementation guide
allows pre-adoption of the FHIR R5 topic-based subscription approach in R4 implementations and is the subscription approach that most U.S. EHR vendors have agreed to
support.  Implementers of this Gravity IG who choose to support Subscription must comply with the Subscription Backport IG for the purpose of monitoring Tasks and, if
necessary, ServiceRequests. 

For the purposes of this IG, there will be no need for 'topic discovery' as there are only two topics of interest - one for [monitoring Task](#task-topic) and one for [monitoring
ServiceRequest](#servicerequest-topic).  While neither of these topics are unique to the Gravity IG, because no standard topics have yet been defined for US Core, this IG will define the needed
topics here.  In the future, these topics may be subsumed into general-purpose topics defined by US Core and/or the FHIR core specification.

As well, Provider and CBO systems MAY choose to allow CBOs and Patient systems receiving notifications by email or SMS to configure their subscriptions out-of-band (i.e.,
without needing to POST a Subscription resource to create a subscription or PUT a Subscription to update the email or SMS location to send notifications to).

Servers supporting subscription SHALL support the rest-hook and e-mail channel mechanism.  They MAY support the SMS channel mechanism (see below).  When acting as subscription clients, EHRs, CPs and FHIR Server-enabled CBOs SHALL support rest-hook.  Patient and FHIR-Application Enabled CBOs will typically receive notifications via e-mail or SMS.  In this case, the notification goes to a user rather than to the system and the user triggers their system to retrieve the records by opening their application.  Servers SHALL support both JSON and XML and clients SHALL support at least one of these.  Client and server SHALL support id-only, though they may  also support other content approaches.  The id-only approach means that the id of the Task or ServiceRequest that was updated or created will be provided.  The client will then perform a read or a query to
retrieve the specified record(s) specified in the subscription notification. E.g.

<code>[base]/Task?_id=1234,5678</code>

If search is used, the client MAY use _include=Task:focus to retrieve the referenced ServiceRequest as well.  E.g.
<code>[base]/Task?_id=1234,5678&_include=Task:focus</code>


##### SMS Subscription Channel

Based on implementer feedback, this IG leverages an additional customChannelType code that is defined in the FHIR R4 core specification, but is not included in the R5 Subscription Backport value set.  This 'sms' code can be used to deliver notifications via SMS device rather than email or rest-hook. Such notifications SHALL only include a short human-readable message indicating the subscription id and a short message indicating that updated content is available. Subscription.contentType SHALL be "omit" for both security as well as bandwidth reasons. The SMS message SHALL NOT actually include a subscription notification Bundle. The use of this approach is experimental, and feedback is welcome. The endpoint will be populated with the phone number to send the SMS message to, expressed in compliance with rfc3966 - i.e. "tel:" followed by the phone number digits.


##### Task topic
This topic allows for monitoring for newly created Tasks as well as updates to assigned or requested Tasks.

<table class="grid">
  <thead>
    <tr>
      <th>Property</th>
      <th>Value</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>url</td>
      <td>http://hl7.org/fhir/us/sdoh-clinicalcare/SubscriptionTopic/Task</td>
      <td>This is what will appear in <i>backport-topic-canonical</i> extension</td>
    </tr>
    <tr>
      <td>version</td>
      <td>{{site.data.fhir.igVer}}</td>
      <td>The topic version is the same as the version of this IG release.  It can appear as part of the canonical reference with the URL if there is a need to be version-specific about the topic reference</td>
    </tr>
    <tr>
      <td>resourceTrigger.resourceType</td>
      <td>Task</td>
      <td/>
    </tr>
    <tr>
      <td>resourceTrigger.methodCriteria</td>
      <td>create, update, delete</td>
      <td>'delete' is not an expected action within the scope of this IG</td>
    </tr>
    <tr>
      <td>resourceTrigger.queryCriteria</td>
      <td>create, update, delete</td>
      <td>'delete' is not an expected action within the scope of this IG</td>
    </tr>
    <tr>
      <td>resourceTrigger.queryCriteria.current</td>
      <td>status:not=draft&amp;intent=order</td>
      <td/>
    </tr>
    <tr>
      <td>resourceTrigger.queryCriteria.current</td>
      <td>status:not=draft&amp;intent=order</td>
      <td/>
    </tr>
    <tr>
      <td>resourceTrigger.queryCriteria.resultForDelete</td>
      <td>test-passes</td>
      <td/>
    </tr>
    <tr>
      <td>resourceTrigger.canFilterBy</td>
      <td>_lastUpdated<br/>
        code<br/>
        owner<br/>
        requester<br/>
        status</td>
      <td>owner or requester will almost always be used.  code and status can be used to further filter if desired</td>
    </tr>
  </tbody>
</table>

##### ServiceRequest topic
This topic allows for monitoring for changes to a ServiceRequest when an organization is involved in fulfilling that request (e.g. to be aware if the request is suspended, canceled or otherwise modified).  The intent with this subscription is that the filter criteria will be updated regularly to refer to the specific ServiceRequest ids the organization is fulfilling.  Once fulfillment is complete, the ServiceRequest will no longer need to be monitored.

<table class="grid">
  <thead>
    <tr>
      <th>Property</th>
      <th>Value</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>url</td>
      <td>http://hl7.org/fhir/us/sdoh-clinicalcare/SubscriptionTopic/Servicerequest</td>
      <td>This is what will appear in <i>backport-topic-canonical</i> extension</td>
    </tr>
    <tr>
      <td>version</td>
      <td>{{site.data.fhir.igVer}}</td>
      <td>The topic version is the same as the version of this IG release.  It can appear as part of the canonical reference with the URL if there is a need to be version-specific about the topic reference</td>
    </tr>
    <tr>
      <td>resourceTrigger.resourceType</td>
      <td>ServiceRequest</td>
      <td/>
    </tr>
    <tr>
      <td>resourceTrigger.methodCriteria</td>
      <td>update, delete</td>
      <td>'delete' is not an expected action within the scope of this IG</td>
    </tr>
    <tr>
      <td>resourceTrigger.canFilterBy</td>
      <td>_lastUpdated<br/>
        _id</td>
      <td/>
    </tr>
  </tbody>
</table>

{% include markdown-link-references.md %}

---

// File: input/pagecontent/connecting_applications_with_api_data_sources.md

This Implementation Guide (IG) provides recommended specifications for the synchronization of patient and Community Based Organization (CBO) applications with API data sources for SDOH information as defined in this IG.

The information below is for establishing connections to enable the exchange of information (seen in the [Referral Workflow] section.

### Requirements

The intent of this section is to further standardize the interactions between FHIR APIs and consumer or CBO applications.  To accomplish this, we recommend that the following processes **SHOULD** be supported by all referral platforms and applications to enable consistent processes to access data. The [capability statements](artifacts.html#capability-statements) provide further specifications for servers.

#### Patient/Client Applications
Interactions between FHIR-enabled Patient/Client Applications and Providers or CBOs are described in the [Patient Coordination Workflow].
This section describes the initial connection of the Patient/Client application to the referral source (Provider) or referral target (CBO) system.

1. Applications are registered with the appropriate referral platforms.
2. On the first use of the application
  * Patient/Client is provided a URL or a QR code.  The patient uses this information to either find the app and install it on their mobile device, or to launch an on-line application.  Optionally, the Patient/Client may be provided with a URL or code to identify the referral platform to the app.  Alternatively, the patient might select the clinic/facility from a list within the app.
  * Once the user has provided the information needed to connect to the referral platform, or has selected the platform, the app will attempt to access the FHIR API of the referral platform and will be redirected based on the platform's [SMART App authentication process](https://www.hl7.org/fhir/smart-app-launch/app-launch.html#launch-app-standalone-launch).
  * On this intial authentication, the user will not yet have authorization credentials and will need to create a new 'account'.  The authorization server will verify the user's identity using credentials known to or provided by the care provider (E.g. email address, DOB, registration code, etc.).
  * Patient/Client establishes credentials (username/password) to be used in the future to authenticate the user to the application.
3. The API URL (and possibly the username and password) are stored in the application
4. When the patient/client authenticates to the application, on a timed schedule or on demand
  * Application authenticates or allows the user to authenticate to the Referral platform and receives an access token
  * The application makes use of the access token and, if necessary, refresh token to maintain an authenticated connection
5. Application queries for Tasks, ServiceRequests and other referenced data and/or updates Tasks and submits resources such as QuestionnaireResponses

Note: steps 3-5 are repeated for each referral source

#### CBO Applications
FHIR-enabled CBO Applications follow the [Direct Referral Light] or [Indirect Referral Light] use cases. This section describes the initial connection of the FHIR-enabled CBO application to the referral source (Provider or Coordinating Platform system).

1. Participating CBO applications are registered with the appropriate referral platforms (e.g., Epic, Unite US)
2. Referral Source provides CBO (e.g., via a QR code) with a URL to the API that redirects to an authorization server
  * CBO enters credentials provided by the referral platform
  * Application is provided with an access token and refresh token
3. API URL and the tokens are stored in the application
4. When the CBO authenticates to the application, on a timed schedule, or on demand
  * Application uses the URL and refresh token to obtain an access token
5. Application queries for relevant data including Tasks assigned to them, Tasks assigned to others, Patient (self) demographics, Goals, ServiceRequests, etc.

Note: steps 2-5 are repeated for each referral source

{% include markdown-link-references.md %}

---

// File: input/pagecontent/Consent-SDOHCC-ConsentInformationDisclosureExample-intro.md

### Attachment
An example of a Consent for information disclosure related to SDOH information with a [PDF](ExampleConsent.pdf) attachment.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/credits.md

### Acknowledgements

The following individuals and organizations deserve credit for their significant effort in the creation of the implementation guide.

We would like to thank [CyncHealth](https://cynchealth.org/), the [Agency for Healthcare Research and Quality (AHRQ)](https://www.ahrq.gov/), [SIREN UCSF](https://sirenetwork.ucsf.edu/), and [Larner College of Medicine at the University of Vermont](http://www.med.uvm.edu/) for their support in developing this IG and all [Gravity Project sponsors](https://confluence.hl7.org/display/GRAV/Gravity+Project+Sponsors) for their contributions to make rapid progress on the standardization of social determinants of health data.

| **Name**           | **Organization**                                                                   |
| ------------------ | ----------------------------------------------------------------------------------- |
| Robert Dieterle    | [EnableCare LLC](http://www.enablecare.us/)                                        |
| Corey Smith        | [AMA](https://www.ama-assn.org/)                                                   |
| Monique van Berkum | [AMA ](https://www.ama-assn.org/)                                                  |
| James Shalaby      | [Elimu](https://www.elimu.io/)                                                     |
| Lloyd McKenzie     | [Dogwood Health Consulting](https://dogwoodhealthconsulting.com/)                  |
| Joee Garcia        | [Gevity](https://www.gevityinc.com/)/[Accenture](https://www.accenture.com)        |
| Lisa Nelson        | [MaxMD ](https://www.maxmddirect.com/)                                             |
| Matt Elrod         | [MaxMD](https://www.maxmddirect.com/)                                              |
| Matt Menning       | [AMA  ](https://www.ama-assn.org/)                                                 |
| Becky Gradl        | [Academy of Nutrition and Dietetics ](https://www.eatright.org/)                   |
| Sarah DeSilvey     | [Gravity Project Director of Terminology](https://confluence.hl7.org/display/GRAV/Project+Team) |
| Donna Pertel       | [Academy of Nutrition and Dietetics](https://www.eatright.org/)                    |
| Evelyn Gallego     | [EMI Advisors, LLC](https://www.emiadvisors.net/)                                  |
| Linda Hyde         | [EMI Advisors, LLC](https://www.emiadvisors.net/)                                  |
| Aaron Seib         | [SAFFRON Labs](https://newwave.io/saffron-labs/)                                   |
| Lynette Elliott    | [EMI Advisors, LLC](https://www.emiadvisors.net/)                                  |
| Rob Hausam         | [Hausam Consulting LLC](https://www.linkedin.com/in/robert-hausam-a273aa7/)        |
| Cheng Liu          | [MaxMD](https://www.maxmddirect.com/)                                              |
| Natasha Kreisle    | [MaxMD](https://www.maxmddirect.com/)                                              |
| Bret Heale         | [Elimu](https://www.elimu.io/)                                                     |
| Himali Saitwal     | [EMI Advisors, LLC](https://www.emiadvisors.net/)                                  |
| Corey Spears       | [Lantana Consulting Group](https://www.lantanagroup.com/)                          |
| Aaron Nusstein     | [Lantana Consulting Group](https://www.lantanagroup.com/)                          |
| Saul A. Kravitz    | [MITRE](https://www.mitre.org)                                                     |
| Gail Shenk         | [MITRE](https://www.mitre.org)                                                     |
{:.grid}

Our thanks to these and to the many others not explicitly listed who contributed their time, enthusiasm and expertise to this work.

This implementation guide was created under the supervision and review of the [HL7 Patient Care Work Group](http://www.hl7.org/Special/committees/patientcare/index.cfm)

----------------------------------------------------------------------
MITRE's participation in the development of STU2.1 was supported under contract to The Centers for Medicare & Medicaid Services, Office of Burden Reduction & Health Informatics.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/dictionary.md

### Data Dictionary Content

The Data Dictionary (DD) presents this IG's content in a format that may be more accessible than the default FHIR artifact pages. The DD is an Excel spreadsheet that lists mCODE data elements and some details about them. If there is a discrepancy between the Data Dictionary and the FHIR artifacts, the FHIR artifacts are taken as the source of truth.

The DD intentionally omits certain elements in FHIR that are not expected to be implemented. Please be aware of the following:

* **Profiles not shown in the DD:** Not all profiles used by an IG are included in the Data Dictionary. These profiles are not included in the DD because they are defined externally to this IG.

* **Data elements not shown in the DD:** Only elements marked as "Must Support"(MS) are included in data dictionary. These are elements that implementers may be expected to provide meaningful support for.   Some of the MS elements are inherited from US Core.

Download links:

* [SDOH Clinical Care Data Dictionary - STU 2.1 (Excel download)](data-dictionary.xlsx)

{% include markdown-link-references.md %}

---

// File: input/pagecontent/downloads.md

### Full Implementation Guide

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

### Package File

The following package file includes an NPM package file used by many of the FHIR tools. It contains all the value sets, profiles, extensions, list of pages and urls in the IG, etc defined as part of this version of the Implementation Guides. This file should be the first choice whenever generating any implementation artifacts since it contains all of the rules about what makes the profiles valid. Implementers will still need to be familiar with the content of the specification and profiles that apply in order to make a conformant implementation. See the overview on [validating FHIR profiles and resources]({{site.data.fhir.path}}validation.html):

* [Package](package.tgz)

### Format Specific Definition Files

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

### Examples: all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

### Implementation Guide Details

Technical details about the [ImplementationGuide]({{site.data.fhir.path}}implementationguide.html) resource that define this specification, including dependencies and implementation guide publishing parameter settings.
- [SDOH Clinical Care ImplementationGuide Resource](ImplementationGuide-hl7.fhir.us.sdoh-clinicalcare.html)

{% include markdown-link-references.md %}

---

// File: input/pagecontent/fhir_artifacts_overview.md

###  Artifact Lists

Complying with this implementation guide means complying with a number of resources, profiles, code systems, and value sets. This page provides an overview of where the relevant information can be found.

**The artifacts are of three types**:

* 	**[Profiles](http://www.hl7.org/fhir/profiling.html)** that constrain FHIR resources to reflect SDOH requirements.
* 	**[Code Systems](http://www.hl7.org/fhir/terminologies-systems.html)** that define SDOH-specific terminologies to be used in one or more of the profiles.
* 	**[Value Sets](http://www.hl7.org/fhir/terminologies-valuesets.html)** that define the specific subsets of both SDOH-defined and other code systems that can be (or are recommended to be) used within one or more profile elements.

The FHIR resources and profiles used by the SDOH ClinicalCare IG are hyperlinked from this section to the base resource, US Core profile (if used), the specific profiles defined in this implementation guide (if used), and the purpose of use.

| [Resource (R4)  ](http://hl7.org/fhir/)                      | [US Core Profile  ]({{site.data.fhir.ver.uscore}}/index.html) | [SDOH  Profile](artifacts.html)                              | Used to exchange                                             |
| ------------------- | ------------------- | ----------------- | ------------------------------------------------------------------------- |
| =========== | =========== | ========== | +.................................................................................................................................+ |
| [Consent]( http://hl7.org/fhir/consent.html)                 | No                                                           | [Yes](StructureDefinition-SDOHCC-Consent.html)               | patient consent to share information                         |
| [Condition]( http://hl7.org/fhir/condition.html)             | [Yes]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-condition.html) | [Yes](StructureDefinition-SDOHCC-Condition.html)             | health concerns, problems, diagnoses                         |
| [Goal](http://hl7.org/fhir/goal.html)                        | [Yes]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-goal.html) | [Yes](StructureDefinition-SDOHCC-Goal.html)                  | goal and attainment specified for or by the patient          |
| [Group]( http://hl7.org/fhir/group.html)                     | No                                                           | [Yes](StructureDefinition-SDOHCC-Group.html)                 | a cohort of patients with a common characteristic            |
| [HealthcareService]( http://hl7.org/fhir/healthcareservice.html)               | No                                                           | [Yes](StructureDefinition-SDOHCC-HealthcareService.html)                 | details of a healthcare service available at a location and the telecom for making an appointment                  |
| [Location]( http://hl7.org/fhir/location.html)               | [Yes]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-location.html) | [Yes](StructureDefinition-SDOHCC-Location.html)           | location of an organization                                  |
| [Observation]( http://hl7.org/fhir/Observation.html)         | No                                                           | [Yes](StructureDefinition-SDOHCC-ObservationAssessment.html) | an SDOH assessment based on a provider and patient interaction |
| [Observation]( http://hl7.org/fhir/Observation.html)         | No                                                           | [Yes](StructureDefinition-SDOHCC-ObservationScreeningResponse.html) | an assessment tool question and answer                       |
| [Observation]( http://hl7.org/fhir/Observation.html)         | No                                                           | [Yes](StructureDefinition-SDOHCC-ObservationEthnicityOMB.html) | a patient ethnicity observation                |
| [Observation]( http://hl7.org/fhir/Observation.html)         | No                                                           | [Yes](StructureDefinition-SDOHCC-ObservationRaceOMB.html) | a patient race observation                    |
| [Organization]( http://hl7.org/fhir/organization.html)       | [Yes]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-organization.html) | No                                                           | organization demographics                                    |
| [Patient]( http://hl7.org/fhir/patient.html)                 | [Yes]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-patient.html) | No                                                           | patient demographics                                         |
| [Practitioner]( http://hl7.org/fhir/practitioner.html)       | [Yes]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-practitioner.html) | No                                                           | provider demographics                                        |
| [PractitionerRole]( http://hl7.org/fhir/PractitionerRole.html) | [Yes](http://{{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-practitionerrole.html) | No                                                           | provider role                                                |
| [Procedure]( http://hl7.org/fhir/procedure.html)             | [Yes]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-procedure.html) | [Yes](StructureDefinition-SDOHCC-Procedure.html)             | service/intervention delivered to a patient                  |
| [ServiceRequest]( http://hl7.org/fhir/ServiceRequest.html)   | No                                                           | [Yes](StructureDefinition-SDOHCC-ServiceRequest.html)        | request an intervention or referral                          |
| [Task]( http://hl7.org/fhir/Task.html)                       | No                                                           | [Yes](StructureDefinition-SDOHCC-TaskForReferralManagement.html)                | a task for referral management                             |
| [Task]( http://hl7.org/fhir/Task.html)                       | No                                                           | [Yes](StructureDefinition-SDOHCC-TaskForPatient.html)                  |  a task for a patient                    |




The FHIR Value Sets defined by the SDOH ClinicalCare IG are hyperlinked from this section to the definition used in this guide and profiles in which each is used.



| [Value Set  ]( http://www.hl7.org/fhir/terminologies-valuesets.html/) | Includes                                                     | Used By                                                      |
| -------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| ====================== | =========================== | +............................................................................................................................................................................+ |
| [SDOHCC ValueSet SDOH Category]( ValueSet-SDOHCC-ValueSetSDOHCategory.html) | specific codes from [SDOHCC CodeSystem Temporary Codes ](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html) | [SDOHCC Condition](StructureDefinition-SDOHCC-Condition.html), [SDOHCC Goal](StructureDefinition-SDOHCC-Goal.html), [SDOHCC Observation Assessment](StructureDefinition-SDOHCC-ObservationAssessment.html), [SDOHCC Observation Screening Response](StructureDefinition-SDOHCC-ObservationScreeningResponse.html), [SDOHCC ServiceRequest](StructureDefinition-SDOHCC-ServiceRequest.html), and [SDOHCC Procedure](StructureDefinition-SDOHCC-Procedure.html) |
| [SDOHCC ValueSet LOINC SNOMEDCT]( ValueSet-SDOHCC-ValueSetLOINCSNOMEDCT.html) | all of [LOINC](http://loinc.org/) and [SNOMED CT](http://www.snomed.org/) | [SDOHCC Goal](StructureDefinition-SDOHCC-Goal.html) and [SDOHCC Observation Assessment](StructureDefinition-SDOHCC-ObservationAssessment.html) |
| [SDOHCC ValueSet Observation Status]( ValueSet-SDOHCC-ValueSetObservationStatus.html) | specific codes from the [HL7 ObservationStatus]({{site.data.fhir.path}}codesystem-observation-status.html) value set | [SDOHCC Observation Ethnicity OMB](StructureDefinition-SDOHCC-ObservationEthnicityOMB.html), [SDOHCC Observation Gender Identity](StructureDefinition-SDOHCC-ObservationGenderIdentity.html), [SDOHCC Observation Personal Characteristic](StructureDefinition-SDOHCC-ObservationPersonalCharacteristic.html), [SDOHCC Observation Personal Pronouns](StructureDefinition-SDOHCC-ObservationPersonalPronouns.html), [SDOHCC Observation Race OMB](StructureDefinition-SDOHCC-ObservationRaceOMB.html), [SDOHCC Observation Recorded Sex Gender](StructureDefinition-SDOHCC-ObservationRecordedSexGender.html), [SDOHCC Observation Screening Response](StructureDefinition-SDOHCC-ObservationScreeningResponse.html), [SDOHCC Observation Sexual Orientation](StructureDefinition-SDOHCC-ObservationSexualOrientation.html) |
| [SDOHCC ValueSet Task Status]( ValueSet-SDOHCC-ValueSetTaskStatus.html) | specific codes from the [HL7 TaskStatus]({{site.data.fhir.path}}codesystem-task-status.html) value set | [ SDOHCC Task For Patient](StructureDefinition-SDOHCC-TaskForPatient.html) |
| [SDOHCC ValueSet Task Priority]( ValueSet-SDOHCC-ValueSetTaskPriority.html) | specific codes from the [HL7 RequestPriority]({{site.data.fhir.path}}codesystem-request-priority.html) value set | [ SDOHCC Task For Patient](StructureDefinition-SDOHCC-TaskForPatient.html) |
| [SDOHCC ValueSet Task Code]( ValueSet-SDOHCC-ValueSetTaskCode.html) | specific codes from [SDOHCC CodeSystem Temporary Codes ](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html) and [SDC TaskCode]( http://hl7.org/fhir/uv/sdc/CodeSystem/temp) code system | [ SDOHCC Task For Patient](StructureDefinition-SDOHCC-TaskForPatient.html) |
| [SDOHCC ValueSet SDOH Questionnaire Category]( ValueSet-SDOHCC-ValueSetSDOHQuestionnaireCategory.html) | specific codes from [SDOHCC CodeSystem Temporary Codes ](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html) | [ SDOHCC Task For Patient](StructureDefinition-SDOHCC-TaskForPatient.html) |
| [SDOHCC ValueSet Observation DataAbsentReason]( ValueSet-SDOHCC-ValueSetObservationDataAbsentReason.html) | specific codes from the [HL7 DataAbsentReason]({{site.data.fhir.path}}codesystem-data-absent-reason.html) value set | [ SDOHCC Observation Ethnicity OMB](StructureDefinition-SDOHCC-ObservationEthnicityOMB.html) and [ SDOHCC Observation Race OMB](StructureDefinition-SDOHCC-ObservationRaceOMB.html) |



The FHIR Code System defined by the SDOH ClinicalCare IG is hyperlinked from this section to the definition used in this guide and includes the purpose of use.



| [Code System  ]( http://www.hl7.org/fhir/terminologies-systems.html/) | Code System Use                                              |
| ------------------------------------------- | --------------------------------------------------------------- |
| ========================= | +..............................................................................................................+ |
| [SDOHCC CodeSystem Temporary Codes]( CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html) | local code system defined in the context of this IG          |



Additional information about the use of these artifacts can be found in the relevant specification and on the [artifacts](artifacts.html) page

 {% include markdown-link-references.md %}

---

// File: input/pagecontent/glossary.md


| Term    |  Definition |
| -------- | ---------- |
|  Business associate     | A person or entity that performs certain functions or activities that involve the use or disclosure of protected health information on behalf of, or provides services to, a covered entity.  A member of the covered entity’s workforce is not a business associate.  A covered health care provider, health plan, or health care clearinghouse can be a business associate of another covered entity.  The Privacy Rule lists some of the functions or activities, as well as the particular services, that make a person or entity a business associate, if the activity or service involves the use or disclosure of protected health information. The types of functions or activities that may make a person or entity a business associate include payment or health care operations activities, as well as other functions or activities regulated by the Administrative Simplification Rules.  See [guidance](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html) on Health Information Privacy. |
|  Care Coordinator                     | One who organizes an individual's care across multiple providers.  |
|  Community Based Organization (CBO)   | An organization that provides specific services to the community or to a targeted population within the community.  |
|  Coordination Platform (CP)           | An intermediary between a provider and a CBO that plays a role in facilitating the referral process and finding resources for at-risk individuals.  |
|  Covered entity                       | Covered entities are defined in the HIPAA rules as (1) health plans, (2) health care clearinghouses, and (3) health care providers who electronically transmit any health information in connection with transactions for which HHS has adopted standards.   See [guidance](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html) on Health Information Privacy.|
|  Patient                              | A consumer, or client, who is the subject of the assessment, goals, referrals and services delivered. Use of the term in this IG does not necessarily imply a clinical context.   |
|  Provider                             | Includes licensed providers and qualified professionals that interact with the patient to assess social risks, set goals, and determine/recommend referrals  |
|  SDOH Domain                          | An area of activity describing one of the conditions in which people are born, grow, work, live, and age, and the wider set of forces and systems shaping the conditions of daily life.   |
{:.grid .center}


{% include markdown-link-references.md %}

---

// File: input/pagecontent/gravity_terminology.md


Gravity Project develops and maintains SDOH-related value sets that are published in the National Institutes of Health (NIH) [Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/).  Hyperlinks to the Gravity Project VSAC value sets can also be found [here](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) on the Gravity Project Confluence site. This section describes how these value sets are used in the SDOHCC profiles and the process for developing the value sets in VSAC.

### Additional Bindings for SDOH Domain-specific Value Sets

The [SDOHCC Observation Screening Response][SDOHCC Observation Screening Response], [SDOHCC Condition][SDOHCC Condition], [SDOHCC Service Request][SDOHCC Service Request], [SDOHCC Procedure][SDOHCC Procedure], and [SDOHCC Goal][SDOHCC Goal] profiles have additional bindings for Observation.code, Observation.value, Condition.code, ServiceRequest.code, Procedure.code, and Goal.description respectively. The additional bindings are to SDOH domain-specific value sets  (e.g., for Food Insecurity, Inadequate Housing, etc.) which are determined by the value of the profile’s .category element (selected from [SDOHCC ValueSet SDOH Category]).

#### Additional Binding Example for the SDOHCC Condition Profile

For the [SDOHCC Condition] profile, Condition.code has a binding to [US Core Condition Code]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html) (required). However, if Condition.category is ‘food-insecurity’, Condition.code has an additional binding to [Food Insecurity Diagnoses](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.17/expansion) (a Gravity-authored value set in VSAC).

Excerpt from [SDOHCC Condition] :

{% include img-med.html img="SDOHConditionExample.png" %}

### Gravity Project Value Set Development Process

#### Gravity Project Value Set Naming

Gravity-authored VSAC value sets include a term in their name that indicate the SDOHCC profile they are used with as follows:
  
| **Gravity VSAC value set name includes:**  | **Used with:**                                                                 |
| ------------------------------------------ | ------------------------------------------------------------------------------ |
| Diagnoses                                  | [SDOHCC Condition][SDOHCC Condition]                                           |
| Procedures                                 | [SDOHCC Procedure][SDOHCC Procedure]                                           |
| Service Requests                           | [SDOHCC Service Request][SDOHCC Service Request]                               |
| Goals                                      | [SDOHCC Goal][SDOHCC Goal]                                                     |
| Assessments                                | [SDOHCC Observation Screening Response][SDOHCC Observation Screening Response] |
{:.grid}

#### Steps for Gravity Project Value Set Creation in VSAC

The steps below outline Gravity’s general process for value set creation in VSAC. For each step, the examples show the process for Condition.code for the [SDOHCC Condition] profile.

<p>1. Value sets are created that are specific for:</p>

* SDOH domain (category) – e.g., Food insecurity, Transportation Insecurity.
* Profile – e.g., Condition (Diagnoses), Procedure
* Code system – e.g., ICD-10-CM, SNOMED CT, LOINC, CPT, HCPCS

The value sets created in Step 1 do not bind to SDOHCC profile elements. In step 2, they are grouped into value sets that bind to SDOHCC profile elements.

**Example 1**: 

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
<thead>
   <tr>
      <th>VSAC Value Set Name</th>
      <th>SDOH Domain</th>
      <th>Bound to Profile</th>
      <th>Code System</th>
   </tr>
</thead>
<tbody>
   <tr>
      <td>Food Insecurity Diagnoses ICD10CM</td>
      <td>Food Insecurity</td>
      <td>N/A</td>
      <td>ICD-10-CM</td>
   </tr>
   <tr>
      <td>Food Insecurity Diagnosis SNOMED CT</td>
      <td>Food Insecurity</td>
      <td>N/A</td>
      <td>SNOMED CT</td>
   </tr>
   <tr>
      <td>Transportation Insecurity Diagnoses ICD10CM</td>
      <td>Transportation Insecurity</td>
      <td>N/A</td>
      <td>ICD-10-CM</td>
   </tr>
   <tr>
      <td>Transportation Insecurity Diagnoses SNOMED CT</td>
      <td>Transportation Insecurity</td>
      <td>N/A</td>
      <td>SNOMED CT</td>
   </tr>
   <tr>
      <td>Inadequate Housing Diagnoses ICD10CM</td>
      <td>Inadequate Housing</td>
      <td>N/A</td>
      <td>ICD-10-CM</td>
   </tr>
   <tr>
      <td>Inadequate Housing Diagnoses SNOMED CT</td>
      <td>Inadequate Housing</td>
      <td>N/A</td>
      <td>SNOMED CT</td>
   </tr>
   <tr>
      <td>Additional SDOH domain-specific value sets…</td>
      <td></td>
      <td></td>
      <td></td>
   </tr>
</tbody>
</table>

<p>2. Value sets created in Step 1 are grouped into value sets that are only specific for:</p>

* SDOH domain (category) – e.g., Food insecurity, Transportation Insecurity
* Profile – e.g., Condition (Diagnoses), Procedure

These value sets bind to SDOHCC profile elements via an Additional Bindings table.  For example, the value sets in the first column below are in the Additional Bindings table for Condition.code for SDOHCC Condition. (See image in Additional Bindings for SDOH Domain-specific Value Sets).

**Example 2**:

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
<thead>
   <tr>
      <th>VSAC Value Set Name</th>
      <th>SDOH Domain</th>
      <th>Bound to Profile</th>
      <th>Contains VSAC Value Sets</th>
   </tr>
</thead>
<tbody>
   <tr>
      <td>Food Insecurity Diagnoses</td>
      <td>Food Insecurity</td>
      <td>SDOHCC Condition</td>
      <td>Food Insecurity Diagnoses ICD10CM<br>Food Insecurity Diagnosis SNOMED CT</td>
   </tr>
   <tr>
      <td>Transportation Insecurity Diagnoses</td>
      <td>Transportation Insecurity</td>
      <td>SDOHCC Condition</td>
      <td>Transportation Insecurity Diagnoses ICD10CM<br>Transportation Insecurity Diagnoses SNOMED CT
</td>
   </tr>
   <tr>
      <td>Inadequate Housing Diagnoses</td>
      <td>Inadequate Housing</td>
      <td>SDOHCC Condition</td>
      <td>Inadequate Housing Diagnoses ICD10CM<br>Inadequate Housing Diagnoses SNOMED CT
</td>
   </tr>
   <tr>
      <td>Additional SDOH domain-specific value sets…</td>
      <td></td>
      <td></td>
      <td></td>
   </tr>
</tbody>
</table>

<p>3. Value sets created in Step 2 are grouped into SDOH grouping value sets that are only specific for:</p>

* Profile – e.g., Condition (Diagnoses), Procedure

These value sets are not used in the SDOHCC profiles. However, they are referenced in the Screening and Assessments section of the US Core Implementation Guide which provides the following guidance with respect to these Gravity SDOH grouping value sets: “<it>These grouped value sets are narrower subsets of the value sets allowed in the respective US Core Profiles. However, when recording SDOH data US Core Profiles, servers **SHOULD** use them.</it>”

**Example 3**:

<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
<thead>
   <tr>
      <th>VSAC Value Set Name</th>
      <th>Used with Profile</th>
      <th>Contains VSAC Value Sets</th>
   </tr>
</thead>
<tbody>
   <tr>
      <td>Social Determinants of Health Conditions</td>
      <td>US Core Condition</td>
      <td>
      Digital Access Diagnoses<br>
      Digital Literacy Diagnoses<br>
      Less than high school education Diagnoses<br>
      Elder Abuse Diagnoses<br>
      Unemployment Diagnoses<br>
      Financial Insecurity Diagnoses<br>
      Food Insecurity Diagnoses<br>
      Health Insurance Coverage Status Diagnoses<br>
      Homelessness Diagnoses<br>
      Housing Instability Diagnoses<br>
      Inadequate Housing Diagnoses<br>
      Intimate Partner Violence Diagnoses<br>
      Material Hardship Diagnoses<br>
      Medical Cost Burden Diagnoses<br>
      Health Literacy Diagnoses<br>
      Social Connection Diagnoses<br>
      Stress Diagnoses<br>
      Transportation Insecurity Diagnoses<br>
      Utility Insecurity Diagnoses<br>
      Veteran Status Diagnoses<br>

      <br>
      <b>Note</b>: Value sets for new SDOH domains will be added as they are created in VSAC.</td>
   </tr>
</tbody>
</table>

##### Table - Gravity VSAC Value Set Development Process for SDOHCC Condition

This table summarizes the Gravity VSAC value set development process. Gravity-authored VSAC value sets are shown in the first three columns. Value sets in green are bound to Condition.code for the [SDOHCC Condition] profile.

{% include img-med.html img="VSACValueSets-ConditionExample.png" %}

-------------------------------------------------------------

<sup>1</sup>Gravity-authored SDOH value sets can be accessed by creating a free National Library of Medicine (NLM) account and then refining the search to “Steward: The Gravity Project”.

 {% include markdown-link-references.md %}

---

// File: input/pagecontent/ImplementationGuide-hl7.fhir.us.sdoh-clinicalcare.md


|||
|---|---|
|*Official URL*: {{ site.data.ig.url }}|*Version*: {{ site.data.ig.version }}|
|*NPM package name*: {{ site.data.ig.packageId }}|*ComputableName*: {{ site.data.ig.name }}|
|*Copyright/Legal*: Used by permission of HL7 International, all rights reserved Creative Commons License|
{:.grid}

{{ site.data.ig.description }}

- [XML](ImplementationGuide-{{site.data.ig.id}}.xml)
- [JSON](ImplementationGuide-{{site.data.ig.id}}.json)

### Cross Version Analysis

{% capture cross-version-analysis %}{% include cross-version-analysis.xhtml %}{% endcapture %}{{ cross-version-analysis | remove: '<p>' | remove: '</p>'}}

### IG Dependencies

This IG Contains the following dependencies on other IGs.

{% include dependency-table.xhtml %}

### Global Profiles

{% include globals-table.xhtml %}

### Copyrights

{% capture ip-statement %}{% include ip-statements.xhtml %}{% endcapture %}

{{ ip-statement | remove: '<p>' | remove: '</p>'}}


### Parameter Settings

The following [IG Parameters](https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters) are set for this Implementation Guide:

{% for p in site.data.ig.definition.parameter %}
- code: {{p.code}}<br/>value: {{p.value }}
{%- endfor -%}


---

// File: input/pagecontent/index.md

### Overview

Social determinants of health (SDOH) are the conditions in the environments where people are born, live, learn, work, play, worship, and age that affect a wide range of health, functioning, and quality-of-life outcomes and risks[^1]. They are increasingly being recognized as essential factors that influence healthcare outcomes. This HL7 Implementation Guide (IG) defines how to exchange coded content using the HL7 FHIR Standard for the following SDOH-focused care activities: screening, clinical assessment/diagnosis, goal setting, and the planning and performing of interventions.  This IG addresses the need to gather SDOH information in multiple settings, share that information between stakeholders, and exchange referrals between organizations to address specific social risks and needs, all with appropriate patient consent.  In addition, the IG demonstrates how to share clinical data to support secondary purposes such as population health, quality, and research.


This IG was developed by the [Gravity Project], which aims to build and promulgate consensus-driven social determinants of health (SDOH) data standards for health and social care interoperability and use among multiple stakeholders. The project and this implementation guide are focused on the U.S. environment.  This IG leverages content from the [US Core Implementation Guide]({{site.data.fhir.ver.uscore}}/index.html) and binds to US-specific terminology.  However, the basic constructs and interaction patterns may well be applicable outside the U.S.

The IG supports the following use cases:
* 	Documenting SDOH data in conjunction with patient encounters with providers, payers, and community services
*   Referring patients to address SDOH needs via an electronic workflow.  The referral framework includes support for intermediary organizations to manage service delivery, closed loop feedback to the ordering provider and direct engagement with the patient and their caregivers.
* 	Identifying cohorts of individuals that have a common relationship to another entity (e.g., covered by the same payer)

{% include img-med.html img="ConceptualFramework-orig.jpeg" caption="Figure 1: Conceptual Framework for SDOH Clinical Care" %}

<div markdown="1" class="stu-note">
This IG often refers to Community Based Organizations (CBOs) as synonymous with a referral target and clinicians as synonymous with the referring provider.
There is nothing that prevents use of the IG for other referral sources and targets.
</div>

The activities supported by this IG include (see [Conceptual Framework](sdoh_clinical_care_scope.html) for more details)
  - Screening: This refers to activities where social risk data from individuals are initially captured, whether through a self-administered, provider-administered, or health plan-administered questionnaire. These activities may also be repeated at certain intervals to monitor changes in social risks.
  - Assessment/Diagnosis: These include activities where providers (clinical and community-based) and health plans analyze the data obtained through screening and interaction with the individual to determine their social risks and needs.
  - Interventions: These refer to actions undertaken by providers (clinical and community-based) and health plans to help address identified social risks and needs. These include referrals, case management, care planning, counseling and education, and provision of services and orders.


Currently, this IG is intended to support Patient Applications, Provider's Electronic Health Record (EHR) systems, Coordination Platforms that intermediate between Providers, and Community Based Organizations that provide SDOH services. In the future payer systems and governmental systems will be supported. The IG establishes a framework for SDOH-related interventions including:
* capture of  data from validated assessment instruments
* mapping the responses from assessments to observations, conditions, and goals using SDOH-specific value sets using established standards (see [Assessment Instrument Support](assessment_instrument_support.html#using-structuremap-to-generate-observations-or-conditions-from-questionnaireresponse))
* generating and monitoring referrals from providers and care coordinators for SDOH-related services provided by CBOs
* capturing the results of the referrals as procedures

### Dependencies on Other IGs

| Implementation Guide | Version | Dependency |
| -------------------- | ------- | ---------- |
| [US Core](https://hl7.org/fhir/us/core/STU3.1.1/) | 3.1.1 | Where possible, all profiles in this IG are either derived from US Core 3.1.1 or aligned with that release and future releases as much as possible.  U.S. Core also sets expectations for a variety of referenced resources and establishes baseline conformance expectations.  |
| [Structured Document Capture (SDC)](http://hl7.org/fhir/uv/sdc/)| 3.0.0  | SDC is the basis for mapping QuestionnaireResponses to Observations and Conditions. SDC also provides guidance around how questionnaires can be created with support for score calculation, conditional behavior, specific rendering expectations, etc.   |
| [Subscriptions R5 Backport](http://hl7.org/fhir/uv/subscriptions-backport) |1.1.0   | Subscriptions are recommended for monitoring completion of referrals.  |
|[Value Set Authority Center](https://vsac.nlm.nih.gov/) (VSAC)| 0.9.0   |    Gravity Project social risk data elements are published in [Value Set Authority Center](https://vsac.nlm.nih.gov/) (VSAC) value sets. The value sets can be identified by searching for "The Gravity Project" steward. You will need to create a free National Library of Medicine (NLM) account to access the value sets. Value sets will be updated bi-annually on June 30th and December 31st.   |
{:.grid}

### Relationships to Other IGs

| Implementation Guide |  Relationship  |
| -------------------- |  ---------- |
| [Bidirectional Service eReferral (BSeR)](http://hl7.org/fhir/us/bser/)  | Whereas this IG orchestrates referrals using the FHIR query interface, BSeR bases referral management on the exchange of self-contained Bundles of FHIR resources.  Gravity is working with BSeR to align referral approaches. |
| [Clinical Documentation Exchange (CDex)](http://hl7.org/fhir/us/davinci-cdex) | Allows payers to retrieve or solicit records from an EHR related to patients covered under their plans. May be used to allow payers retrieving SDOH-related information for quality measures or in support of contractual or other payment schemes. |
| [Data Exchange for Quality Measures Implementation Guide](https://hl7.org/fhir/us/davinci-deqm/) | SDOH-related services will inevitably be included in quality measurement programs |
| [DaVinci Prior Authorization Support](http://hl7.org/fhir/us/davinci-pas/) (PAS)|  Together with CRD and DTR, these three IGs (collectively known as the Da Vinci Burden Reduction IGs) provide support for prior authorization and other documentation capture and could be relevant for SDOH-related services. |
| [DaVinci Coverage Requirements Discovery](http://hl7.org/fhir/us/davinci-crd/) (CRD) |  Together with PAS and DTR, these three IGs (collectively known as the Da Vinci Burden Reduction IGs) provide support for prior authorization and other documentation capture and could be relevant for SDOH-related services. |
| [DaVinci Documentation Templates and Rules](http://hl7.org/fhir/us/davinci-dtr/) (DTR) | Together with PAS and CRD, these three IGs (collectively known as the Da Vinci Burden Reduction IGs) provide support for prior authorization and other documentation capture and could be relevant for SDOH-related services.  |
| [Human Services Directory](https://build.fhir.org/ig/HL7/FHIR-IG-Human-Services-Directory) | Can be used by a provider to identify referral targets for SDOH-related services  |
| [IHE FHIR Audit Event Query and Feed to ATNA](https://wiki.ihe.net/index.php/Audit_Trail_and_Node_Authentication) | For systems wishing to maintain robust audit records of changes and access to patient records (always a good idea), this IG defines standards for using FHIR to do so. (Note that this standard is only really relevant if there's a need for electronic sharing of audit records.) |
| [National Healthcare Directory Exchange](https://hl7.org/fhir/us/ndh/2023Sep/)| A U.S. Office of the National Coordinator-sponsored IG supporting the exchange of directory information for a wide range of service providers and organizations |
| [PACIO Cognitive Status](http://hl7.org/fhir/us/pacio-cs) | Defines standards for sharing information about a patient's cognitive capabilities and limitations, which may influence decisions about appropriate SDOH interventions. |
| [PACIO Functional Status](http://hl7.org/fhir/us/pacio-fs) | Defines standards for sharing information about a patient's physical capabilities, which may influence decisions about appropriate SDOH interventions (e.g. with respect to transport). |
| [Patient Contributed Data](http://www.hl7.org/documentcenter/public/ballots/2022SEP/downloads/HL7_PCD_R1_I1_2022SEP.pdf) | Defines guidance for incorporation of patient and caregiver-collected information into clinical records. |
| [Physical Activity](https://hl7.org/fhir/us/physical-activity/) | This IG inherits functionality from the SDOH IG and uses a similar architectural approach to manage sharing of physical activity goals, referrals, and patient engagement. |
| [Quality Measure Implementation Guide](http://hl7.org/fhir/us/cqfmeasures) | Defines standards for sharing clinical quality measures electronically, allowing defining and sharing measures related to SDOH evaluation and interventions. |
| [SmartApp Launch](http://hl7.org/fhir/smart-app-launch)  | Allows launching third party applications in the context of another system, including allowing the application to controlled access to patient information.  |
{:.grid}



### How to Read this IG

This IG contains a wealth of material targeting different audiences. Some sections provide more general or introductory content, while others provide detailed technical information targeted at implementors.  The table below provides a listing of the key sections of the IG in the rough order that they should be read.

| Section | Sub-section | Description | Audience |
| --------| ----------- | --------- | ---------|
| Background| [SDOH and the Gravity Project](sdoh_challenges_gravity.html) | General background on the importance of collecting and standardizing social risk data, and the Gravity Project     |  General |
| Background| [SDOH Clinical Care Background](sdoh_clinical_care_scope.html) | A description of the clinical scope of this IG    |  General |
| Background| [Technical Background](technical_background.html) | Background material that should be understood prior to attempting to understand this IG     |  General/Introductory |
| Implementation Guidance| [Assessment Instrument Support] | A description of the importance of standard assessment instruments for the collection of social risk data, and how assessment instruments are mapped to SDOH Conditions, Observations and Goals     |  General |
| Implementation Guidance|  [Referral Workflow] |  Provides a high-level description of the referral workflows and patient interactions supported by this IG, and then drills down to a detailed description of the FHIR API calls implementing the referral workflow   |  Introductory and Detailed Technical |
| Implementation Guidance | [Connecting Applications with API Data Sources] | Provides a description of  establishing connections to enable the exchange of information supporting the [Referral Workflow].    |  Detailed Technical  |
| Specifications | [FHIR Artifacts](artifacts.html) | An index of the FHIR artifacts defined as part of this implementation guide     |  Detailed Technical |
| Specifications| [Must Support and Missing Data] | Conformance requirements for must support and missing data     |  Detailed Technical |
| Specifications | [Privacy and Security] | Conformance requirements for privacy and security considerations     |  Detailed Technical |
| Specifications | [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html) | Draft proposals for Observation profiles supporting Personal Characteristics     |  Detailed Technical |
| Specifications | [Downloads](downloads.html) | Downloads     |  Detailed Technical |
{:.grid}

### Key Technical Content of this IG
* [CapabilityStatements](artifacts.html#):   CapabilityStatements formally define the different types of systems that can comply with this implementation guide and set conformance expectations around what resources and behaviors they must support.  This IG provides capability statements for Patient applications, referral sources and recipients, and coordination platform intermediaries.
* [Profiles](artifacts.html#profiles): Profiles describe constraints and extensions on resources and data types to reflect the requirements of the use cases in an implementation guide This IG provides Observation, Condition, Procedure, ServiceRequest, Task, Goal, Group, HealthcareService, Consent, and Location profiles. In addition, this implementation guide uses (and in some cases further profiles) profiles defined in US Core.
* [Value Sets](artifacts.html#value-sets):  FHIR value sets specify a set of codes drawn from one or more code systems, intended for use in a particular context. The Gravity Project has worked intensively to develop value sets for SDOH-related content.  This content is described where it is used.  See the following profiles: [SDOHCC Condition], [SDOHCC Observation Screening Response], [SDOHCC Procedure], [SDOHCC ServiceRequest], [SDOHCC Goal].
* [Examples](artifacts.html#examples):  This IG provides contextually relevant examples of all profiles.
* [Referral Workflow](referral_workflow.html):  The management of referrals by providers to community-based organizations with different levels of FHIR capability and the assignment of tasks to Patients is described in detail.

* [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html):   These profiles are included to test and promote their use and possible future incorporation into [US Core]({{site.data.fhir.ver.uscore}}/index.html).

-----------------------------------------------------------------------------------------------------
[^1]: [Healthy People 2030](https://health.gov/healthypeople/priority-areas/social-determinants-health)

{% include markdown-link-references.md %}

---

// File: input/pagecontent/mapping_instructions.md

*The following is used in [Survey Instrument Support].*

In this IG, information is first captured in QuestionnaireResponses and is then automatically transformed into [Observations] and [Conditions] (where appropriate). This transformation is necessary because the raw data captured in the QuestionnaireResponses is not directly searchable with FHIR and is not considered 'standardized'.  For example, there may be a wide variety of Questionnaires that might result in a preliminary Condition asserting housing insecurity.  Some of them might be local or proprietary.  As such, there's no way to look at QuestionnaireResponses to find all patients with housing insecurity issues. Once the data is in Condition, the process is more straightforward.

There are a variety of strategies for converting QuestionnaireResponse data into other FHIR resources.  This IG has adopted the map based approach using the FHIR [StructureMap] resource.  This approach is selected because it supports complex transformation of data and allows the conversion process between data and Questionnaire to be maintained independently. The StructureMap-based extraction mechanism (considerations, error handling and other details) is documented in the [HL7 Structured Data Capture IG].

The StructureMap resource examples in this IG are generated using the [FHIR Mapping Language].  This language is then used to generate the StructureMap instances.  Authoring the maps in a textual language is much simpler than attempting to craft the XML or JSON StructureMap instances directly.  The mapping language also works regardless of the syntax used for the QuestionnaireResponse.  I.e. it works the same for JSON, XML and RDF instances.

Instructions and tutorials on how to use the FHIR Mapping Language to convert and transform resources are found [here](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Mapping+Language).

That same page also includes references to existing open source implementations that are capable of compiling mapping language instances into FHIR StructureMaps as well as being able to 'execute' maps - i.e. convert a QuestionnaireResponse into a transaction Bundle of other resources.  Implementers are encouraged to leverage one of these existing community-developed implementations rather than creating their own.  This will both save work and minimize the likelihood of introducing implementation-specific errors into the transformation process.

The overall process for supporting this transformation process is therefore as follows:
1. Identify the Questionnaire that will be used to gather SDOH-related information
2. Determine what Observation and Condition resources will need to be created to be searchable within the FHIR record
3. Using the examples provided in this guide as a foundation, create a mapping language file that performs the necessary transformation
4. Compile the mapping file into a StructureMap instance (e.g. using the FHIR Java validator tool)
5. Execute the map against a QuestionnaireResponse
6. Execute the resulting transaction Bundle to create the relevant Observations and Conditions on the desired server

Note that the creation of the mapping file and compiled StructureMap only need to be performed once per Questionnaire.  Implementers leveraging the same Questionnaire are encouraged to share the FHIR Questionnaire instance and associated StructureMap to minimize development and maintenance effort.

This guide includes examples of a Questionnaire, QuestionnaireResponse, resulting Observations and Conditions, and the StructureMap used to convert from one to the other:

1. [Hunger Vital Sign Examples](artifacts.html#hunger-vital-signs-examples)
2. [PRAPARE Examples](artifacts.html#prapare-examples)

{% include markdown-link-references.md %}

---

// File: input/pagecontent/mustsupport_and_missing_data.md


Systems claiming to conform to a profile SHALL support the elements in a profile as defined below: This guide adopts the following definitions of MustSupport for all direct transactions between the Sending and Receiving Systems

**All Sending Systems**

Sending Systems are defined as: 1) Provider Systems, 2) Payer Systems, and 3) Coordination Platforms
* The Sending System **SHALL** provide the capability for the user to enter, select, or otherwise cause to be populated all elements marked as MustSupport.
* The Sending System **SHALL** populate all elements with a MustSupport flag if the information exists and patient consent and receiver permissions allow.  A system SHALL be able to demonstrate transmission of all MustSupport elements.
* The Sending System **SHALL NOT** include a data element in the resource instance if the cardinality is 0..n and the information for that particular data element is not present.
* Where elements have a lower cardinality of one or more, instances complying with those profiles **SHALL** include the element. Where the profile includes explicit support for an extension, such as [dataAbsentReason], then the extension may be sent without providing a value or child elements.  If no extension is explicitly defined in the profile then, unless the profile is derived from US Core (which has laxer rules), the expectation in this IG is that the element **SHALL** have a value or standard child elements and sending an extension instead is not compliant.

**All Receiving Systems**

Receiving Systems are defined as 1) Payer Systems, 2) Provider Systems, 3) Coordination Platforms, 4) CBO applications and 5) consumer applications when receiving transactions from the Sending System.
* The Receiving System **SHALL** be capable of processing resource instances containing required and allowed data elements without generating an error or causing the application to fail.
* The Receiving System **SHALL** be capable of processing (display, store, etc) all required elements (cardinality 1 or greater) and **SHOULD** be capable of processing (display, store, etc) all MustSupport elements.
* Note: the expectation is that this requirement will be tightened (**SHOULD** going to **SHALL**) for at least a subset of the MustSupport elements in future versions of the IG.
* The Receiving System **SHALL** interpret missing data elements within resource instances as data not present in the Senders systems or where transmission of the data is prohibited by access control rules.
* The Receiving System **SHALL** be able to process resource instances containing data elements asserting missing information without generating an error or causing the application to fail.

**Conformance to US Core Profile**

Where this IG does not additionally constrain a US Core profile, the actors shall follow the US Core definition of [Must Support]({{site.data.fhir.ver.uscore}}/general-guidance.html#must-support) and [Missing Data]({{site.data.fhir.ver.uscore}}/general-guidance.html#missing-data).

This IG recognizes that patients may wish to only send a portion of the MustSupport elements to another entity.  However, there is currently no guidance on how to implement this as part of the FHIR R4 release.  When HL7 develops standards for fine line consent, this IG will consider their applicability to the sharing of SDOH information and adopt the standards that are relevant.  In the meantime, it may be possible to provide patients the ability to determine what to share by implementing [SMART on FHIR](http://docs.smarthealthit.org/) applications that allow them to restrict the exchange of information that is not required to interpret the intent of a specific resource (e.g., remove address and/or telephone number from the patient resource prior to making it available to a community organization).

{% include markdown-link-references.md %}

---

// File: input/pagecontent/privacy_and_security.md

### Patient Privacy and Consent
The Gravity Project recognizes the need to appropriately manage privacy and consent related to a patient's social risk issues.  This IG assumes that each organization has appropriate mechanisms in place to secure SDOH information and will only release it with appropriate consent.  The [Office of the National Coordinator (ONC)](https://www.healthit.gov/) and [HL7 International (HL7)](http://www.hl7.org/index.cfm), and the [Office of Civil Rights (OCR)](https://www.hhs.gov/ocr/index.html) (this is not an exhaustive list) have active programs in place to determine what needs to be done to protect all personal information (including SDOH) from inappropriate disclosure and use.

Sharing data with CBOs and CPs must be done in conformance with HIPAA requirements.  Under HIPAA the disclosing party needs to acquire and maintain a record of the patient's consent.
Although CBOs and CPs are not 'covered entities' under HIPAA,
sharing with them can be facilitated by a Business Associate Agreement (BAA) between the covered entity (Providers, Payers and Clearing Houses) and the Business Associate.
Entities covered under a BAA may be able to receive Protected Health Information (PHI) as part of the agreement without consent of the patient. However, they are required to observe the same limitations as covered entities with regard to the protection and disclosure of PHI.  Patient consent would generally be required for a provider to disclose a patient's PHI to a CBO or CP that is neither a covered entity nor covered by a BAA.  CPOs and CPs should only be authorized to access patient data for those patients with whom they have a relationship, and access to each patient's data is restricted to those data elements needed for the referral task, as described in the [Authorization and Access Control]({{site.data.fhir.path}}security.html#binding) section of FHIR Security.

 In this version of the IG, we are providing a [profile of the FHIR Consent resource][SDOHCCConsent]  that can be exchanged between a [Covered Entity](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html) and a [Business Associate (BA)](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html) when the patient has authorized the BA to release their information to a non-HIPAA covered entity.  The BA can use the provided consent in lieu of obtaining consent directly from the patient, reducing burden on the patient and BA.  Exchanging the consent obtained by the referring party is therefore a convenience, not a requirement.  While this is not a complete treatment of the issues related to consent, it is a starting point to test the viability of exchanging consent information.

 The Consent is referenced indirectly (via ServiceRequest) from the [SDOHCC Task For Referral Management] that is exchanged as part of the referral, and can be retrieved by the referral recipient through FHIR queries.   These relationships are shown in [Data Modeling Framework].

### Statutes, Regulations, and Guiding Principles
All implementations of the SDOH ClinicalCare FHIR Implementation Guide (IG)
* **SHALL** meet all current relevant Federal and State statutes and regulations regarding security and privacy.
* **SHALL** use applicable technical standards required by current regulations published by CMS and ONC (allowing for voluntary use through the [Standards Version Advancement Process (SVAP)](https://www.healthit.gov/isa/standards-version-advancement-process#:~:text=ONC%20has%20established%20the%20voluntary,of%20Certification%20requirement%20(%C2%A7%20170.405))) unless an exception has been granted.
* **SHOULD** follow the [Gravity Project Data Principles](https://confluence.hl7.org/display/GRAV/Gravity+Data+Principles) when the final version is published.
* **SHALL** support patient/member consent and/or treatment of sensitive information consistent with Federal and State statutes and regulations.
* **SHOULD** support the consent and data sharing policies of trading partners involved in the exchange that are more protective so long as policies are consistent with or more restrictive than Federal and State statutes and regulations.

### FHIR Security and Implementation Guidance
All implementations of the SDOH ClinicalCare FHIR Implementation Guide (IG) **SHOULD** follow the FHIR Security guidance and FHIR Implementer’s Safety guidance as defined in the relevant FHIR specification (e.g., Release 4.1.0) where applicable and not superseded by this Section or specific IG requirements.

The FHIR Security specification provides guidance related to communication security, authentication, authorization/access control, audit, digital signatures, attachments, labels, narrative, and input validation. The FHIR security specification is available [here]({{site.data.fhir.path}}security.html)

The FHIR Implementer’s Safety specification is a check list to help implementers be sure that they have considered all the parts of FHIR that impact their system design regarding safety. The FHIR safety check list is available [here]({{site.data.fhir.path}}safety.html).

### Security/Privacy Related Technologies Including Explicit Consent and Security Labels
As of May 2020, ONC has elected to not require either Data Labeling or Consent Directives as part of the [Final Rule for the 21st Century Cures Act](https://www.federalregister.gov/documents/2020/05/01/2020-07419/21st-century-cures-act-interoperability-information-blocking-and-the-onc-health-it-certification).

At present there is no explicit regulatory requirement for the use of these technologies.

However, to meet the statutes, regulations, and guiding principles above, consent directives and security labels MAY be considered and used.

Organizations which plan to take advantage of these additional capabilities are responsible for negotiating support for these mechanisms between trading partners. The FHIR implementation guide defining the recommended standard is the [FHIR Data Segmentation for Privacy IG](http://hl7.org/fhir/uv/security-label-ds4p/).

### Exchange Security
When exchanging PHI between entities, the exchange **SHOULD** use the current version and **SHALL** use either current or the immediately prior release of [Transport Level Security (TLS)](https://datatracker.ietf.org/doc/html/rfc8446) as specified by the current release of NIST guidelines ([SP 800-52](https://csrc.nist.gov/publications/detail/sp/800-52/rev-2/final)).
When the identity of the requesting or receiving party is important, implementations **SHOULD** use one or more of the following:
* the [SMART on FHIR Framework](http://docs.smarthealthit.org/),
* mutually authenticated TLS,
* the ONC FHIR At Scale Taskforce (FAST) security tiger team recommended solutions, or
* the OAuth Server to Server Authentication as defined in the [Bulk Data exchange IG].
Note: There is ongoing work to enhance the capabilities of the above specifications to ensure a more secure exchange that recognizes issues related to fine grain scopes.

### Additionally Protected Information
Additionally protected information may include items defined by Federal (e.g., 42 CFR Part 2), State (e.g., many states protect substance abuse disorder, HIV diagnosis/treatment records, release of information on minors – note this is not an exhaustive list) statutes and regulations. In addition, organizations may provide for additional protection for specific types of information that are deemed sensitive to the individual (e.g., SDOH information). The following guidelines apply unless otherwise dictated by statute or regulation:

Where permitted by law and in accordance with legal requirements and, where appropriate, consent of the individual, release of additionally protected information **SHALL** always be supported.
Release of the information without explicit request of the patient/member **SHALL** be based on organization policy consistent with Federal and State regulations. Examples are legal requests for information (HIPAA includes specific guidelines around who and which entities are duly authorized to make such requests and processes that must be followed at 45 CFR 164.512(e)-(f)) and “break glass” to treat a patient that is unable to provide consent (HIPAA speaks to the conditions that allow covered entities to use or disclose PHI when an individual is incapacitated at 45 CFR 164.510(a)(3)).

{% include markdown-link-references.md %}

---

// File: input/pagecontent/referral_workflow.md

This section describes the interactions between the actors in an SDOH referral starting both at a high-level and at the level of FHIR API calls.   First, a high-level overview of the interactions is provided.  This description abstracts technical details and should be accessible to the non-technical reader.
For the sake of simplicity, only relationships critical to the Referral Workflow are provided. (For additional details on task status updates see [Checking Task Status], and  on relationships between profiles see [Data Modeling Framework].)

The use cases here relate to the Gravity [Use Cases].  Implementers will benefit from looking at the detailed technical description of the exchange work flow for each use case, as well as the [Capability Statements] associated with each workflow and the [conformance artifacts](artifacts.html) generally.

### General Workflow

This IG supports the following general [workflow](sdoh_clinical_care_scope.html):

1. Assess the patient to determine social risk -- this may be done by using an assessment instrument, via a conversation with the patient, or both.  As part of the assessment, the patient and provider agree on the specific social risks that are to be labeled as verified health concerns or problems.
2. The patient and provider may establish goals regarding the identified social risk.
3. The patient and provider agree on referrals/interventions that should be undertaken to address the problems and goals.  The patient's consent is obtained to share their specific information with the entity that will be performing the services.  The provider then sends a task to the performing entity to initiate the electronic referral.

The figure below shows this high-level workflow, the actors involved in each step, and the FHIR resources that support each step.

<object data="GeneralWorkflow3.svg" type="image/svg+xml"></object>
<br/>

### Actors, Systems and Icons
The actors in the workflows are described in the table below.   The graphical icons are used throughout the IG.   For each use case, the assumptions regarding each type of actor are described.

| Actor    |  Description |
| ----------  | ------------------ |
| ![providericon] Provider  | Includes licensed providers and others that interact with the patient to assess social risk, set goals, and determine/recommend referrals.   |
| ![cboicon] Community Based Organization (CBO)  | An organization that provides specific services to the community or to a targeted population within the community.   |
| ![cpicon]  Coordination Platform (CP) | An intermediary between a provider and a CBO that plays a role in facilitating the referral process and finding resources for at-risk individuals.   |
| ![patienticon] Patient   | A consumer, or client, who is the subject of the assessment, goals, referrals and services delivered. Use of the term in this IG does not necessarily imply a clinical context.   |
| ![fhirserver] FHIR Server | A server that supports a FHIR API and can make FHIR API calls to other servers |
| ![fhirapplication] FHIR-enabled Application | An application that can make FHIR API calls to a FHIR server, but does not itself support a FHIR API |
| ![patientapp] FHIR-enabled Patient Application | A patient application that can connect to FHIR servers |
{:.grid}

### Referral Use Cases
The functional use cases in the table below describe the referral process, initiated by a referral source (e.g., provider or other healthcare actor) to a referral target (e.g., a CBO), either directly or indirectly via an intermediary (e.g., a CP). For each use case, the capabilities or limitations of the actors are described.  The table links to the functional use case and the associated detailed technical exchange workflow.

| Functional Use Case |  Description           | Actors |
| ------------------------- | ------------------------------------ | ---------------- |
| [Direct Referral](referral_workflow.html#directreferral) | A referral between a referral source (e.g., provider) and a referral target (e.g., CBO) where both entities have FHIR server APIs and an intermediary (e.g., CP) is not involved in the referral.| ![providericon], ![cboicon] |
| [Direct Referral Light](referral_workflow.html#direct-referral-light) | A “light” version of the Direct Referral. A referral between a referral source (e.g., provider) and a referral target (e.g., CBO) where the referral source has a FHIR server API, the referral target does not have a FHIR server API but has an application that can access the referral source’s FHIR server API, and an intermediary (e.g., CP) is not involved in the referral.  | ![providericon], ![cboicon]  |
| [Indirect Referral](referral_workflow.html#indirectreferral) | A referral between a referral source (e.g., provider) and a referral target (e.g., a CBO) that involves an intermediary (e.g., a CP) and all entities have FHIR servers APIs.  | ![providericon], ![cboicon]. ![cpicon] |
| [Indirect Referral Light](referral_workflow.html#indirect-referral-light) | A “light” version of the Indirect Referral. A referral between a referral source (e.g., provider) and a referral target (e.g., CBO) that involves an intermediary (e.g., a CP) where the referral source and intermediary have FHIR server APIs and the referral target does not have a FHIR server API but has an application that can access the intermediaries FHIR server API. | ![providericon], ![cboicon]. ![cpicon] |
{:.grid}

<div markdown="1" class="stu-note">
Indirect Referral requires making data instances (e.g., ServiceRequest, Condition, DocumentReference) from the referral source on the intermediary server available for query by the referral target and making some data instances (e.g., Procedures) from the referral target available on the intermediary server for query by the referral source. The intermediary can make this happen by cloning the data from the original record creator, or by proxying access to the creating system. This IG does not specify how precisely this should be done and resolution of this issue should be a topic of implementer discussion.
</div>

#### Referral Use Case Overview
The direct and indirect referral use cases described below are all preceded by a provider interacting with a patient to assess their needs, establish goals, agree to a referral, and acquire consent. The referral is then initiated, its progress is tracked, and goals are updated as appropriate. The “direct” and “indirect” use cases are distinguished by the absence or presence of an intermediary and, in the “light” versions, the FHIR capabilities of the referral target.

Figure 1 and the Table below show the high-level context of the referral use cases that are described in the sections that follow. For the Table, the “Exchanged” column shows data that could be exchanged at that step, and the “Aligns With” column shows data that is not exchanged in FHIR form but whose content typically corresponds with the listed FHIR profile(s). This only specifies the data that is exchanged, so systems are free to use any internal representation.

The [Patient Coordination](referral_workflow.html#patient-coordination-workflow) Workflow shows some, but not all of the possible interactions with the patient. It provides a way for the provider, CP, or CBO to ask a patient to do something, and track whether they have done it and possibly the outcomes. In Figure 1 below, patient coordination is indicated by a red box on steps 9 and 12.

{% include img.html img="HighLevelReferralContext.svg" caption="Figure 1: Referral Use Cases Context" %}


<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
	<caption><b>Step Details for Figure 1</b></caption>
<thead>
<tr>
<th>Step</th>
<th>Actors</th>
<th>Description</th>
<th>Exchanged</th>
<th>Aligns With</th>
</tr>
</thead>
<tbody><tr>
<td>1</td>
<td><img src="Patient.png" alt="Patient" width="35" height="35"></td>
<td>Patient takes standardized assessment tool to identify social risks and needs. This could be done via a SMART app that would post a QuestionnaireResponse or via the PatientTask mechanism, but could be manual</td>
<td><ul>
<li><a href="StructureDefinition-SDOHCC-TaskForPatient.html">SDOHCC Task For Patient</a></li>
<li><a href="https://www.hl7.org/fhir/questionnaire.html">Questionnaire</a></li>
<li><a href="https://www.hl7.org/fhir/questionnaireresponse.html">QuestionnareResponse</a></li></ul></td>
<td>none</td>
</tr>
<tr>
<td>2</td>
<td><img src="Provider.png" alt="Provider" width="35" height="35"></td>
<td>Provider evaluates assessment and identifies social risks</td>
<td>none</td>
<td><ul><li><a href="StructureDefinition-SDOHCC-ObservationScreeningResponse.html">SDOHCC Observation Screening Response</a></li>
        <li><a href="StructureDefinition-SDOHCC-Condition.html">SDOHCC Condition</a></li></ul></td>
</tr>
<tr>
<td>3</td>
<td><img src="Provider.png" alt="Provider" width="35" height="35">, <img src="Patient.png" alt="Patient" width="35" height="35"></td>
<td>Provider and Patient: <ul>
                          <li>agree on Conditions to add to Problem List</li>
                          <li>prioritize goals</li>
                          <li>agree on referral</li>
                          <li>obtain consent for sharing information</li>
                          </ul></td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>4</td>
<td><img src="Provider.png" alt="Provider" width="35" height="35"></td>
<td>Provider promotes the health concern to the problem list, records goals, and captures patient consent</td>
<td>none</td>
<td><ul>
<li><a href="StructureDefinition-SDOHCC-Condition.html">SDOHCC Observation Screening Response</a></li>
<li><a href="StructureDefinition-SDOHCC-Condition.html">SDOHCC Condition</a></li>
<li><a href="StructureDefinition-SDOHCC-Consent.html">SDOHCC Consent</a></li>
<li><a href="StructureDefinition-SDOHCC-Goal.html">SDOHCC Goal</a></li></ul></td>
</tr>
<tr>
<td>5 (optional)</td>
<td><img src="Provider.png" alt="Provider" width="35" height="35"></td>
<td>Provider makes information regarding the referral, goals and plan available to the patient’s application</td>
<td><ul><li><a href="StructureDefinition-SDOHCC-ServiceRequest.html">SDOHCC ServiceRequest</a></li><li><a href="StructureDefinition-SDOHCC-Location.html">SDOHCC Location</a> </li></ul></td>
<td>none</td>
</tr>
<tr>
<td>6</td>
<td><img src="Provider.png" alt="Provider" width="35" height="35">, <img src="CBO.png" alt="CBO" width="35" height="35"> or <img src="CoordinationPlatform.png" alt="CP" width="35" height="35"></td>
<td>Provider<sup><a href="#footnote1">1</a></sup> initiates a referral to the CBO or CP</td>
<td><ul><li><a href="StructureDefinition-SDOHCC-ServiceRequest.html">SDOHCC ServiceRequest</a></li><li><a href="StructureDefinition-SDOHCC-TaskForReferralManagement.html">SDOHCC Task for Referral Management</a> </li></ul></td>
<td>none</td>
</tr>
<tr>
<td>7</td>
<td><img src="CBO.png" alt="CBO" width="35" height="35"> or <img src="CoordinationPlatform.png" alt="CP" width="35" height="35"></td>
<td>CBO or CP retrieves information about the referral and any needed supporting information, then decides to accept or reject the referral. If the referral is rejected, the process ends or resumes at step #6 with a new task.</td>
<td><ul>
<li><a href="StructureDefinition-SDOHCC-TaskForReferralManagement.html">SDOHCC Task for Referral Management</a></li>
<li><a href="StructureDefinition-SDOHCC-ServiceRequest.html">SDOHCC ServiceRequest</a></li>
<li><a href="StructureDefinition-SDOHCC-Condition.html">SDOHCC Condition</a></li>
<li><a href="StructureDefinition-SDOHCC-Goal.html">SDOHCC Goal</a></li>
<li><a href="StructureDefinition-SDOHCC-Condition.html">SDOHCC Observation Screening Response</a></li>
</ul></td>
<td>none</td>
</tr>
<tr>
<td>8</td>
<td><img src="CBO.png" alt="CBO" width="35" height="35"> or <img src="CoordinationPlatform.png" alt="CP" width="35" height="35"></td>
<td>CBO or CP updates the status of their work (task) to reflect progress via notes or status.</td>
<td><ul><li><a href="StructureDefinition-SDOHCC-TaskForReferralManagement.html">SDOHCC Task for Referral Management</a></li></ul></td>
<td>none</td>
</tr>
<tr>
<td>9 (optional)</td>
<td><img src="CBO.png" alt="CBO" width="35" height="35"> or <img src="CoordinationPlatform.png" alt="CP" width="35" height="35">, <img src="Patient.png" alt="Patient" width="35" height="35"></td>
<td>CBO or CP communicates with the patient via their application to schedule appointments, collect additional information, etc. This IG doesn't highlight communication outside of electronic means, but such communication is possible.</td>
<td>none</td>
<td>none</td>
</tr>
<tr>
<td>10</td>
<td><img src="CBO.png" alt="CBO" width="35" height="35"> or <img src="CoordinationPlatform.png" alt="CP" width="35" height="35"></td>
<td>CBO or CP completes the requested action, updates the status of their work (task) to completed, and includes information on what was completed</td>
<td><ul><li><a href="StructureDefinition-SDOHCC-TaskForReferralManagement.html">SDOHCC ServiceRequest</a></li><li><a href="StructureDefinition-SDOHCC-Procedure.html">SDOHCC Procedure</a></li></ul></td>
<td>none</td>
</tr>
<tr>
<td>11</td>
<td><img src="Provider.png" alt="Patient" width="35" height="35"></td>
<td>Provider receives the updated status and updates the status of the referral (service request)</td>
<td><ul><li><a href="StructureDefinition-SDOHCC-TaskForReferralManagement.html">SDOHCC Task for Referral Management</a></li></ul></td>
<td>none</td>
</tr>
<tr>
<td>12 (Optional)</td>
<td><img src="Provider.png" alt="Patient" width="35" height="35"></td>
<td>Provider closes loop by gathering feedback/satisfaction via questionnaire</td>
<td><ul>
<li><a href="StructureDefinition-SDOHCC-TaskForPatient.html">SDOHCCTaskForPatient</a></li>
<li><a href="https://www.hl7.org/fhir/questionnaire.html">Questionnaire</a></li></ul></td>
<td>none</td>
</tr>
<tr>
<td>13</td>
<td><img src="Provider.png" alt="Patient" width="35" height="35"></td>
<td>Provider determines if the goals/plan have been satisfied and/or progress has been made on the goal/plan and updates the goal/plan appropriately</td>
<td>none</td>
<td><ul><li><a href="StructureDefinition-SDOHCC-Goal.html">SDOHCC Goal</a></li></ul></td>
</tr>
</tbody></table>

<p><span id="footnote1"><sup><a href="#footnote1">1</a></sup></span>Although this workflow references provider as the referral source, the requester element in the two profiles exchanged here allow other roles (e.g., care coordinator) and organizations (e.g., payer) to request a referral.</p>

#### Direct Referral
<a name="directreferral"></a>

In this use case, the patient is referred to a CBO for help addressing prioritized needs. The CBO accepts the referral, provides the requested support to the patient, and shares the updated information with the referring provider.

The provider and the CBO have FHIR server APIs.

The example assumes that the provider has an existing relationship with the CBO.
The CBO may not accept the referral or may be unable to perform the requested service.

The details of the FHIR-based exchanges  are provided in the [following section](referral_workflow.html#direct-referral-detailed-view).

##### Direct Referral Detailed View
Figure 2 shows the FHIR exchanges between the referral source and referral target.
For each numbered exchange, the details of the data elements exchanged, and the FHIR request and response are provided.

{% include img.html img="DetailedDirectReferral.svg" caption="Figure 2: Detailed Direct Referral" %}

| #    | From |  Description | Instances involved |
| ---  | ---- | ------------ | ------------------ |
| 1 |  Source | Post Referral Task | [Referral Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) |
| 2 |  Target  | Get Service Request and Referenced Resources | [ServiceRequest](ServiceRequest-SDOHCC-ServiceRequestActiveFoodPantryApplicationAssistExample.html), [Consent](Consent-SDOHCC-ConsentInformationDisclosureExample.html), [Condition](Condition-SDOHCC-ConditionFoodInsecurityExample.html) |
| 3 |  Target | Send Notification | [Subscription Notification Bundle] |
| 4 |  Source | Get Task | [Referral Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) with status changed |
| 5 |  Target | Send Notification | [Subscription Notification Bundle] |
| 6 |  Source | Get Task | [Referral Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) with status changed |
| 7 |  Target | Send Notification | [Subscription Notification Bundle] |
| 8 |  Source | Get Task | [Referral Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) with status changed |
| 9 |  Source | Get Procedures | [Food Provided](Procedure-SDOHCC-ProcedureProvisionOfFoodExample.html), [Application Assistance](Procedure-SDOHCC-ProcedureSummerFoodProgramApplicationAssistanceExample.html) |
{:.grid}


#### Direct Referral Light
In this use case, a provider works with a patient using a standardized assessment instrument to identify and prioritize social risks and needs, and then refers the patient to a CBO for help addressing those needs.  The CBO provides the requested support to the patient and the updated information is shared with the referring provider.

The provider has a FHIR server API. Functionally, this differs from the [Direct Referral](referral_workflow.html#direct-referral) in that the CBO does not have a FHIR server API but has an application that can access a FHIR server API. As a result, the provider can’t push information to the CBO, but rather the CBO needs to pull information from the provider. At the conclusion of the referral, the CBO POSTS necessary information (e.g., Procedures) to the provider’s FHIR server API and updates the status and the linked resources of the Task.

The details of the FHIR-based exchanges are provided in the [following section](referral_workflow.html#direct-referral-detailed-view).

##### Direct Referral Light - Detailed View
This referral occurs between the provider (referral source) and the CBO (referral target) where the CBO does not have a FHIR server API. The CBO accesses and manipulates information either using its own software which has a conformant FHIR client or using a third-party application as a FHIR client. 

Figure 3 shows the FHIR exchanges between the referral source and referral target.
For each numbered exchange, the details of the data elements exchanged, and the FHIR request and response are provided.

{% include img.html img="DetailedDirectReferralLight.svg" caption="Figure 3: Detailed Direct Referral Light" %}

| #    | From |  Description | Instances involved |
| ---  | ---- | ------------ | ------------------ |
| 1 |  Source | Send e-mail with link to application and authentication instructions |
| 2 |  Target | Get Task | [Referral Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) |
| 3 |  Target  | Get Service Request and Referenced Resources | [ServiceRequest](ServiceRequest-SDOHCC-ServiceRequestActiveFoodPantryApplicationAssistExample.html), [Consent](Consent-SDOHCC-ConsentInformationDisclosureExample.html), [Condition](Condition-SDOHCC-ConditionFoodInsecurityExample.html) |
| 4 |  Target | Update Task (accepted) | [Referral Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) with status changed |
| 5 |  Target | Update Task (in-progress) | [Referral Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) with status changed |
| 6 |  Target | Post Procedures | [Food Provided](Procedure-SDOHCC-ProcedureProvisionOfFoodExample.html), [Application Assistance](Procedure-SDOHCC-ProcedureSummerFoodProgramApplicationAssistanceExample.html) |
| 7 |  Source | Update Task (completed) | [Referral Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) with status changed |
{:.grid}

#### Indirect Referral
<a name="indirectreferral"></a>

In this use case, a provider works with a patient using a standardized assessment instrument to identify and prioritize social risks and needs, and then refers the patient indirectly via a CP to a CBO for help addressing those needs.  The CP relays the referral to the CBO.  The CBO provides the requested support to the patient and the updated information is relayed back through the CP where it is shared with the referring provider.

Functionally, this Indirect Referral is essentially two direct referrals (provider to CP, and CP to CBO) chained together.  The provider, CP, and CBO all have FHIR server APIs.

The provider has a relationship with the CP, but not with the CBO.  The use case assumes that the CP and the CPO have an established relationship.
The provider may request to have the service delivered by a specific CBO.   The CP may not accept the referral, be unable to perform the requested service, or may need to split the request into multiple tasks to be performed by one or more CBOs.

##### Indirect Referral - Detailed View
The referral occurs in two separate interactions. The first is between the referral source and the intermediary and the second is between the intermediary and the referral target.

In the Indirect Referral, this IG assumes that the referral source does not have the ability to communicate directly with the referral target. There may be multiple referral targets for responsibilities that will be determined and managed by the intermediary. 

The intermediary SHALL support the following:

1. Create a local copy of, or proxy, all relevant referenced resources from the referral source
2. Create ServiceRequest(s) with ServiceRequest.intent value “filler-order” and ServiceRequest.basedOn references the original referral source ServiceRequest(s) 
3. Create Task(s) to be posted to the referral target(s) that reference the referral source Task(s) via Task.partOf
4. If local copies of the referenced resources are maintained by the intermediary, the intermediary must subscribe or periodically query the referral source for updates to the referenced resources

{% include img.html img="DetailedIndirectReferral.svg" caption="Figure 4: Detailed Indirect Referral" %}

####  Indirect Referral Light

The patient is assessed by a provider and referred to a CP. The CP refers to a CBO to deliver the service. The provider and CP have FHIR server APIs. The CBO does not have a FHIR server API but has an application that can access a FHIR server API.

This section differs from the [Indirect Referral](referral_workflow.html#indirect-referral) in that the interactions between the CP and CBO follow the Direct Light paradigm. The CBO will maintain data on the CP’s FHIR server API. CBOs without their own FHIR server API will modify tasks directly on the CP’s FHIR server API.

The provider has a relationship with the CP, but not with the CBO.  The use case assumes that the CP and the CBO have an established relationship.
The provider may request to have the service delivered by a specific CBO.   The CP may not accept the referral, be unable to perform the requested service, or may need to split the request into multiple tasks to be performed by one or more CBOs.

##### Indirect Referral Light - Detailed View

The referral occurs in two separate interactions. The first is between the referral source and the intermediary and the second is between the intermediary and the referral target. 

The intermediary SHALL support the following:

1. Create a local copy of, or proxy, all relevant referenced resources from the referral source
2. Create ServiceRequest(s) with ServiceRequest.intent value “filler-order” and ServiceRequest.basedOn references the original referral source ServiceRequest(s) 
3. Create Task(s) to be queried by the referral target(s) that reference the referral source Task(s) via Task.partOf
4. If local copies of the referenced resources are maintained by the intermediary, the intermediary must subscribe or periodically query the referral source for updates to the referenced resources

{% include img.html img="DetailedIndirectReferralLight.svg" caption="Figure 5: Detailed Indirect Referral Light" %}

#### Additional Guidance on Referrals

1. Parties SHOULD use polling if one or both of the parties is unable to support the subscription model (see notes on the [Checking Task Status](checking_task_status.html) page).
2. The receiving party for the referral SHOULD use the batch query process to request periodic updates of referenced resources.
3. The above system flows do not define the handling of all possible scenarios. Exchange scenarios may include refusing the referral, canceling the referral by either party, and error conditions that may occur when using RESTful exchanges.  It is up to each party to follow the current best practice in managing the state of the referral.
4. The referral source SHOULD set the Task.status to “requested”. 
5. The referral target SHOULD update Task.status as it moves through the workflow.

### Patient Coordination Workflow
This implementation guide supports additional interactions with a patient/client application (on a smartphone or portal) including:

| Functional Use Case       |  Task.code            |  Description                         | Actors           |
| ------------------------- | ----------------------- | ------------------------------------ | ---------------- |
| [Complete Questionnaire Request](referral_workflow.html#complete-questionnaire-request)|  `complete-questionnaire` | Requesting party (e.g., provider, CBO, or CP) asks a patient to complete a questionnaire. This functionality can be used to assess social risks, inform service qualification or application, indicate reasons for cancellation, or determine the patient’s view of their interaction with the CBO and whether the service provided met their needs. | ![providericon], ![patienticon], ![cboicon], ![cpicon]  |
| [General Information Request](referral_workflow.html#general-information-request)|  `general-information-request` | Requesting party sends a patient a free text question and receives a free text response.  | ![providericon], ![patienticon], ![cboicon], ![cpicon]  |
| [Make Contact Request](referral_workflow.html#make-contact-request)|   `make-contact-directions` | Requesting party provides contact information for the CBO (in cases where the patient does not want the CBO to initiate contact). | ![providericon], ![patienticon], ![cboicon], ![cpicon]  |
| [Review Material Request](referral_workflow.html#review-material-request)|   `review-material` | Requesting party requests that the patient review a document (usually a PDF), video, etc. | ![providericon], ![patienticon], ![cboicon], ![cpicon]  |
{:.grid}

In the examples below, it is assumed that the patient has been equipped with the patient application, and authenticated communication between the patient application and the requester has already been established.
See [Connecting Applications with API Data Sources](connecting_applications_with_api_data_sources.html#patientclient-applications) for more details.  The referenced data instances are all in their completed state. In practice, they would move through the state transitions indicated, with the requester initializing their input fields, and the patient completing the output fields, and updating the status.

#### Complete Questionnaire Request
Here we provide a detailed view of an example interaction between a patient application and a requester (provider, CBO, or CP) for the completion of a questionnaire. The example shows one of the four ways the questionnaire can be transmitted and the response received from the patient.

<object data="PatientQuestionnaire.svg" type="image/svg+xml"></object>
<br>

| #    | From |  Description | Instances involved |
| ---  | ---- | ------------ | ------------------ |
| 1 |  Patient | Get Task | [Patient Task](Task-SDOHCC-TaskPatientRiskQuestionnaireCompletedExample.html) |
| 2 |  Patient  | Get Questionnaire, Questionnaire PDF, or Questionnaire URL | [Questionnaire](Questionnaire-SDOHCC-QuestionnaireHungerVitalSign.html)|
| 3 |  Patient | Update Task (in-progress) | [Patient Task](Task-SDOHCC-TaskPatientRiskQuestionnaireCompletedExample.html) with status changed |
| 4 |  Patient | Post Questionnaire Response or Document Reference with Filled Out PDF | [QuestionnaireResponse](QuestionnaireResponse-SDOHCC-QuestionnaireResponseHungerVitalSignExample.html) |
| 5 |  Patient | Update Task (completed and .Output references QuestionnaireResponse) | [Patient Task](Task-SDOHCC-TaskPatientRiskQuestionnaireCompletedExample.html) with status changed |
{:.grid}

#### General Information Request
Here we provide a detailed view of an interaction between a patient application and a requester (provider, CBO, or CP) for a general information request.  The example shows the patient returning an optional response.

<object data="PatientInformation.svg" type="image/svg+xml"></object>
<br>

| #    | From |  Description | Instances involved |
| ---  | ---- | ------------ | ------------------ |
| 1 |  Patient | Get Task | [Patient Task](Task-SDOHCC-TaskPatientInformationRequestCompletedExample.html) |
| 2 |  Patient | Update Task (in-progress) | [Patient Task](Task-SDOHCC-TaskPatientInformationRequestCompletedExample.html) with status changed |
| 3 |  Patient | Update Task (completed and .Output.value includes text of response) | [Patient Task](Task-SDOHCC-TaskPatientInformationRequestCompletedExample.html) with status changed |
{:.grid}

#### Make Contact Request
Here we provide a detailed view of an interaction between a patient application and a requester (provider, CBO, or CP) for providing one or more options from which to select to make contact with a service, provider or organization. The example shows the patient returning an optional response.

<object data="PatientContact.svg" type="image/svg+xml"></object>
<br>

| #    | From |  Description | Instances involved |
| ---  | ---- | ------------ | ------------------ |
| 1 |  Patient | Get Task | [Patient Task](Task-SDOHCC-TaskPatientMakeAppointmentCompletedExample.html) |
| 2 |  Patient  | Get Contact | [HealthCareService](HealthcareService-SDOHCC-HealthcareServiceTelecomAppointmentExample.html) |
| 3 |  Patient | Update Task (in-progress) | [Patient Task](Task-SDOHCC-TaskPatientMakeAppointmentCompletedExample.html)  with status changed |
| 4 |  Patient | Update Task (completed and .Output includes chosen contact) | [Patient Task](Task-SDOHCC-TaskPatientMakeAppointmentCompletedExample.html) with status changed |
{:.grid}

#### Review Material Request
Here we provide a detailed view of an interaction between a patient application and a requester (provider, CBO, or CP) for providing review material. 

<object data="PatientReview.svg" type="image/svg+xml"></object>
<br>

| #    | From |  Description | Instances involved |
| ---  | ---- | ------------ | ------------------ |
| 1 |  Patient | Get Task | [Patient Task](Task-SDOHCC-TaskPatientReviewInformationCompletedExample.html) |
| 2 |  Patient  | Get DocumentReference | [DocumentReference] |
| 3 |  Patient | Update Task (in-progress) | [Patient Task](Task-SDOHCC-TaskPatientReviewInformationCompletedExample.html) with status changed |
| 4 |  Patient | Update Task (completed) | [Patient Task](Task-SDOHCC-TaskPatientReviewInformationCompletedExample.html) with status changed |
{:.grid}



{% include markdown-link-references.md %}

---

// File: input/pagecontent/savestuff.md


| #    | From |  Description | Instances involved | FHIR Transaction |
| --------------  | -------------- | -------------- | -------------- | -------------- |
| 1 |  Requester | Send e-mail with link to an application and instructions for authentication with the application |      | e-mail |
| 2 |  Patient | Get Task | [Patient Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) | [Transaction 1](FHIR_API_Examples.html#post-task-1) |
| 3 |  Patient  | Get Questionnaire, Questionnaire PDF, or Questionnaire URL | [Questionnaire](Questionnaire-SDOHCC-QuestionnaireHungerVitalSign.html) | [Transaction 3](FHIR_API_Examples.html#post-task-1) |
| 4 |  Patient | Update Task (accepted) | [Patient Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) with status changed | [Transaction 4](FHIR_API_Examples.html#post-task-1) |
| 5 |  Patient | Update Task (in-progress) | [Patient Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) with status changed | [Transaction 5](FHIR_API_Examples.html#post-task-1) |
| 6 |  Patient | Post Questionnaire Response | [QuestionnaireResponse](QuestionnaireResponse-SDOHCC-QuestionnaireResponseHungerVitalSignExample.html) | [Transaction 6](FHIR_API_Examples.html#post-task-1) |
| 7 |  Patient | Update Task (completed and .Output references QuestionnaireResponse) | [Patient Task](Task-SDOHCC-TaskReferralManagementOrderFulfillmentCompletedExample.html) with status changed | [Transaction 7](FHIR_API_Examples.html#post-task-1) |
{:.grid}


---

// File: input/pagecontent/scope_of_ig_narrative.md

* Patient
* Aggregation
* CPO
* Provider

---

// File: input/pagecontent/sdoh_challenges_gravity.md

### Why Social Determinants of Health Matter

The influence of social determinants on health outcomes is increasingly recognized in emerging payment reform programs, federal and state-based policies, and information technology initiatives.  Social determinants of health (SDOH) are the conditions in the environments where people are born, live, learn, work, play, worship, and age that affect a wide range of health, functioning, and quality-of-life outcomes and risks[^1].

The growing awareness around SDOH has contributed to efforts to address actionable social risks through the health care delivery system.  Recommendations from national groups, including the [American Academy of Pediatrics](https://www.aap.org/), [American Academy of Family Physicians](https://www.aafp.org/), [Agency for Healthcare Research and Quality](https://www.ahrq.gov/), [National Quality Forum (NQF)](https://www.qualityforum.org/), and [Institute for Health Care Improvement](http://www.ihi.org/) underscore the various roles the health care system could play in helping to identify and address patients' social risks and needs.[^2]

{% include img.html img="Whatgoesintoyourhealth.jpg" caption="Figure 1: What goes into your health? An illustration of the impact health care has on a person’s health versus non-healthcare factors.<sup>2</sup>" %}

There is growing awareness that social risks negatively impact health outcomes and that addressing social risks improves health outcomes.  For example:
* Food insecurity correlates with higher levels of diabetes, hypertension, and heart failure
* Housing instability factors into lower treatment adherence
* Transportation barriers result in missed appointments, delayed care, and lower medication compliance

Addressing SDOH is a primary approach to achieving health equity. See National Center for HIV, Viral Hepatitis, STD, and TB Prevention (NCHHSTP) Social Determinants of Health, [Frequently Asked Questions](https://www.cdc.gov/nchhstp/socialdeterminants/faq.html)

These national calls to action for health care systems have spurred innovations, including a wide range of social risk assessment instruments and practice-based interventions.   Some of these innovations have helped to reduce social risks, improve outcomes, and lower costs.   The experimentation in this area has been bolstered by new value-based payment models and accountable care organizations (ACOs), which together offer financial incentives to advance coordinated care between medical and social service organizations and other organizations directly connected to patients.
### Challenges of SDOH Data Interoperability
Challenges related to the systematic documentation and aggregation of SDOH data in EHRs and related systems include:

1.	Capture of SDOH data in unstructured and non-standardized formats inhibits the ability to normalize, exchange, and aggregate the data regardless of the data source.
2.	Gaps in and overlap between existing terminologies and codes available to represent SDOH-related activities undertaken in clinical delivery settings.
3. SDOH data is sensitive personal information with significant privacy and security considerations. As with all personal data, regulatory and policy considerations related to consent and exchange of this data should be adhered to.

Based on the growing collection of social risk data in health care systems, an immediate opportunity exists to support data collection, data aggregation, data sharing, quality measurement, benchmarking, and risk adjustment.   Many assessment tools are currently in use, but the concepts addressed vary, and some tools merit further validation and testing across a variety of settings and clinical workflows.  Health IT can play a critical, untapped role in enabling the seamless electronic exchange and use of this data.  However, standardization and harmonization of SDOH concepts, regardless of the social risk assessment instrument used, requires a consensus-based approach to maximize buy-in, consistency of implementation, and usefulness of data collected.

### Gravity Project Overview
The [Gravity Project](https://thegravityproject.net/) was initiated by the [Social Interventions Research and Evaluation Network (SIREN)](https://chc.ucsf.edu/siren) with support from the [Robert Wood Johnson Foundation](https://www.rwjf.org/).   The Gravity Project mission is to create and maintain a consensus-building community to expand available SDOH Core Data for Interoperability and accelerate standards-based information exchange by using HL7 FHIR. The Gravity Project aims to standardize SDOH-related codes to facilitate the use of social determinants of health-related data in patient care, care coordination between the health and human services sectors, population health management, value-based payment, and clinical research.

The Gravity Project currently has three workstreams as shown in the figure below.  The [Terminology Workstream](https://confluence.hl7.org/display/GRAV/Terminology+Workstream+Dashboard)
develops terminology resources that are published via the [Value Set Authority Center (VSAC)][VSAC] that support capture of SDOH-related data.  The [Technical Workstream](https://confluence.hl7.org/display/GRAV/Technical+Workstream+Dashboard) developed this FHIR Implementation Guide (IG) and coordinates with other FHIR IG development projects.

The [Implementation Workstream](https://confluence.hl7.org/display/GRAV/Implementation+Workstream) works with partners to test and provide feedback on the Gravity-developed Terminology Resources and FHIR IG specifications.

{% include img.html img="GravityProject.png" caption="Figure 2: Gravity Project Workstreams" %} 

For more information about Gravity see the Gravity Project [website](https://thegravityproject.net/) or [confluence site](https://confluence.hl7.org/display/GRAV/The+Gravity+Project).

----------------------------------------------------------------------
[^1]: [Healthy People 2030](https://health.gov/healthypeople/priority-areas/social-determinants-health)
[^2]: Source: Institute for Clinical Systems Improvement.  Going Beyond Clinical Walls.  Solving Complex Problems (October 2014).  The BridgeSpan Group.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/sdoh_clinical_care_scope_alt.md

###  SDOH Clinical Care Scope
### Scope of this IG

The focus for this version of the IG is to standardize the exchange of SDOH information related to the following activities:

* assessment of social risk,
* establishing coded health concerns/problems,
* creating patient driven goals, and
* defining a RESTful closed loop referral process to manage interventions.

####  Out of Scope

The following items are out of scope for this version of the IG.

* Providing guidance on the frequency of administering assessments (this is left up to the responsible organizations based on their standards of practice).
* Standards for reporting quality measures to payers or quality organizations (this is left to the [Data Exchange for Quality Measures Implementation Guide](https://hl7.org/fhir/us/davinci-deqm/) that was co-authored by NCQA).
* Addressing Consent beyond the consent to share information between a HIPAA covered entity and entities that are not covered by HIPAA.
* Administrative activities such as eligibility checking, prior authorization, or billing for SDOH services. *** Do we want to explicitly cite other IGs?***

### Conceptual Framework

Coded SDOH content is captured across core health care activities: screening/assessment, establishing health concerns, goal setting, care planning, interventions, outcomes and reporting. The conceptual framework, illustrated below, shows how these activities form a cycle of care. Over time, a patient's progress toward care goals can be tracked and measured.    The icons for actors and FHIR-capability are defined [here]. The Gravity Project has identified [SDOH domains](ValueSet-SDOHCC-ValueSetSDOHCategory.html) that describe various types of social risk and has developed domain-specific value sets for these domains that find expression in the relevant profiles of this IG. Work is ongoing.  A current list of the domains and the active terminology work effort can be found on the Gravity Project [Terminology Pages](https://confluence.hl7.org/display/GRAV/Terminology+Workstream+Dashboard) on Confluence.

{% include img.html img="AlternateScopeOfIG.svg" caption="Figure 1: Scope of IG" %}

### Actors and Process Roles
** LM: Are the actors the people or the systems?  I had presumed they were systems, but if that's the case, the names should reflect that. **

** LM: SHould we break CP into its own row?. **

In the drawing above, each of the actors supports a set of roles that are described here:
<br>


<table align="left" border="1" cellpadding="1" cellspacing="1" style="width:100%;">
<thead>
<tr>
<th>Actor</th>
<th>Process Roles</th>
<th>Relevant Profiles</th>
</tr>
</thead>
<tbody>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Patient
<img src="Patient.png" height="35px" width="35px" class="figure-img img-responsive img-rounded center-block" alt="Patient}">
</td>
<td><ul><li>Responds to screening questions and is assessed based on the responses and interaction with a provider</li><li>Discusses with provider and agrees to establihsing concerns/problems (Conditions) Goals</li><li>Consents to the sharing of their information</li><li>Completes additional feedback questionnaire(s) for providers</li></ul></td>
<td><ul><li><a href="https://www.hl7.org/fhir/questionnaire.html">Questionnaire</a></li><li><a href="https://www.hl7.org/fhir/questionnaireresponse.html">QuestionnaireResponse</a></li><li>
<a href="StructureDefinition-SDOHCC-Condition.html">SDOHCC Condition</a></li><li> <a href="StructureDefinition-SDOHCC-ObservationAssessment.html">SDOHCC Observation Assessment</a></li><li><a href="StructureDefinition-SDOHCC-ObservationScreeningResponse.html">SDOHCC Observation Screening Response</a></li><li><a href="StructureDefinition-SDOHCC-TaskForPatient.html">SDOHCC Task for Patient</a></li></ul></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>

<tr>
<td>Provider
<img src="Provider.png" height="35px" width="35px" class="figure-img img-responsive img-rounded center-block" alt="Provider}"></td>
<td><ul><li>Assesses patient</li><li>Discusses with patient to establish and document concerns/problems (Conditions) and Goals</li><li>Obtains  consent to share information as appropriate</li><li>Creates referrals and solicits CBOs to fulfill them </li><li>Monitors status of referral</li><li>Provides review material or provides contact instructions to patient</li><li>Reviews feedback from patient</li></ul></td>
<td><ul><li><a href="StructureDefinition-SDOHCC-ObservationAssessment.html">SDOHCC Observation Assessment</a></li><li><a href="StructureDefinition-SDOHCC-ObservationScreeningResponse.html">SDOHCC Observation Screening Response</a></li><li><a href="StructureDefinition-SDOHCC-Condition.html">SDOHCC Condition</a></li><li><a href="StructureDefinition-SDOHCC-Goal.html">SDOHCC Goal</a></li><li><a href="StructureDefinition-SDOHCC-Consent.html">SDOHCC Consent</a></li><li> <a href="StructureDefinition-SDOHCC-ServiceRequest.html">SDOHCC ServiceRequest</a></li><li><a href="StructureDefinition-SDOHCC-TaskForReferralManagement.html">SDOHCC Task for Referral Management</a></li></ul></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Community Based Organization(CBO) -  possibly via Coordinating Platform (CP)
<img src="CBO.png" height="35px" width="35px" class="figure-img img-responsive img-rounded center-block" alt="Patient}">
<img src="CoordinationPlatform.png" height="35px" width="35px" class="figure-img img-responsive img-rounded center-block" alt="Patient}"></td>
<td><ul><li>Receives solicitation to complete referrals from provider</li><li>Retrieves referral and accepts or rejects solicitation</li><li>Delivers and records service requested by referral</li><li>Reports completion to referral source</li><li>Provides review material to patient</li><li>Solicits feedback from patient</li></ul></td>
<td><ul><li><a href="StructureDefinition-SDOHCC-TaskForReferralManagement.html">SDOHCC Task for Referral Management</a></li><li> <a href="StructureDefinition-SDOHCC-ServiceRequest.html">SDOHCC ServiceRequest</a></li><li><a href="StructureDefinition-SDOHCC-Procedure.html">Procedure</a></li><li><a href="StructureDefinition-SDOHCC-TaskForPatient.html">SDOHCC Task for Patient</a></li></ul></td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
<tr>
<td>Aggregation</td>
<td><ul><li>Reports summary statistics on groups of patients with common SDOH conditions</li></ul></td>
<td><ul><li><a href="StructureDefinition-SDOHCC-Group.html">SDOHCC Group</a></li></ul></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<br>


### Scope of Interactions

The scope of interactions is intended to cover all of the interactions shown in the drawing below. The focus of the current IG is interactions between a patient, provider, and CBO, with possible intermediation by a CP.  The IG supports interactions with CBOs that support either a FHIR-enabled application that can FHIR servers, or a FHIR-server based application that supports querying other FHIR servers, as well as being queried by other applications.  In the drawing below, bidirectional solid arrows reflect communication between two endpoints with FHIR servers, whereas unidirectional solid arrows reflect FHIR API calls by a FHIR-enabled application against a FHIR server.

{% include img.html img="SystemDiagram.svg" caption="Figure 2: System Interactions" %}
<br>
<br>
### Data Modeling Framework
The diagram below shows the data model for the assessment process including the creation of health concerns, goal setting (patient-centered goals), and creation of referrals using service request and procedure/intervention. The graphic represents key relationships defined in this IG for the [Questionnaire] and  [QuestionnaireResponse] resources, as well as the [Observation], [SDOHCC Condition], [SDOHCC Goal], [SDOHCC Referral Management Task], [SDOHCC ServiceRequest] and [SDOHCC Procedure] profiles.   For graphical clarity, only key references between profiles are shown (e.g., references to Patient profile are not shown).   Clicking on the profiles in the drawing will link to the defining specification.

The [SDOHCC Patient Task] provides the ability to direct the patient to seek service from a particular [SDOHCC HealthcareService], or to respond to a customer service questionnaire.

<object data="FHIRModeling.svg" type="image/svg+xml"></object>
<br/>
*Figure 3: Data Modeling Framework*

{% include markdown-link-references.md %}

---

// File: input/pagecontent/sdoh_clinical_care_scope.md

### Conceptual Framework

Coded SDOH content is captured across core health care activities: screening/assessment, establishing health concerns, goal setting, care planning, interventions, outcomes and reporting. The conceptual framework, illustrated below, shows how these activities form a cycle of care. Over time, a patient’s progress toward care goals can be tracked and measured.
{% include img.html img="ConceptualFramework-orig.jpeg" caption="Figure 1: Conceptual Framework" %}

### Scope of this IG

The focus for this version of the IG is to standardize the exchange of SDOH information related to the following activities:

* assessment of social risk,
* establishing coded health concerns/problems,
* creating patient driven goals, and
* defining a RESTful closed loop referral process to manage interventions.

####  Out of Scope

The following items are out of scope for this version of the IG.

* Providing guidance on the frequency of administering assessments (this is left up to the responsible organizations based on their standards of practice).
* Standards for reporting quality measures to payers or quality organizations (this is left to the [Data Exchange for Quality Measures Implementation Guide](https://hl7.org/fhir/us/davinci-deqm/) that was co-authored by NCQA).
* Addressing Consent beyond the consent to share information between a HIPAA covered entity and entities that are not covered by HIPAA.
* Administrative activities such as eligibility checking, prior authorization, or billing for SDOH services.

### Scope of Interactions

The focus of this IG is interactions between a patient, provider, and CBO, with possible intermediation by a Coordination Platform (CP).  Provider EHRs and CPs will act as both clients and servers, accepting data from other systems and allowing it to be queried, while also storing data on and retrieving data from other systems.  Patient systems will act only as clients - accessing and sometimes manipulating data on other systems, but not exposing interfaces for other systems to interact with. The IG supports interactions with CBOs that support either a FHIR-enabled application (e.g. phone, tablet, web application) that queries other systems but does not expose its own data for query, or as a FHIR-Server Enabled application that exposes its own data for query and manipulation as well as querying and sometimes updating other systems.  In the drawing below, bidirectional solid arrows reflect communication between two endpoints with FHIR servers, whereas unidirectional solid arrows reflect FHIR API calls by a FHIR-enabled application against a FHIR server.

{% include img.html img="SystemDiagram.svg" caption="Figure 2: System Interactions" %}
<br>
<br>
### Data Modeling Framework

The diagram below reflects the primary data structures and relationships associated with each of the major business processes covered by this implementation guide:
* Assessment - where information is gathered from a patient (typically via a [QuestionnaireResponse] based on a standardized [Questionnaire] resulting in one or more [SDOHCC Observation Screening Response]s. These may be accompanied by additional [SDOHCC Observation Assessment]s.   If there are concerns about a patient's social determinants situation, a [SDOHCC Condition] will be defined allowing the concern to be tracked as part of the patient's problem list.
* Goal Management - if an SDOH issue has been identified, the [SDOHCC Goal]s agreed to between the patient and practitioner will be created and, over time, updated.  These goals can be associated with the [SDOHCC Observation Screening Response]s, [SDOHCC Observation Assessment]s, and/or [SDOHCC Condition]s they seek to manage and improve.  In some cases, a Goal might also point to Observations to reflect the outcome of the goal.
* Referral Management - the formal order is captured as a [SDOHCC ServiceRequest] and linked to the [SDOHCC Goal], [SDOHCC Observation Screening Response], [SDOHCC Observation Assessment], and [SDOHCC Condition]s that justify the action.  It may also link to a [SDOHCC Consent] allowing the referral recipient to further share information.  The [SDOHCC Task For Referral Management] coordinates the solicitation and resulting process, possibly being linked to child actions by the referral recipient.  Eventually, [SDOHCC Procedure]s document what action was taken.
* Patient Engagement - allows [SDOHCC Task For Patient] requests to be made of the patient or their caregiver(s).  Depending on the nature of the task, it will point to a [Questionnaire] , with a result of a [QuestionnaireResponse] , to a [DocumentReference] containing a PDF form, and later another DocumentReference with the PDF response, a [SDOHCC Healthcare Service] containing information about who to contact, or nothing at all.

In the diagram, blue shapes indicate profiles defined in this IG and yellow shapes indicate profiles defined in IGs on which we have dependencies (US Core or SDC).  Only key references between profiles are shown.  Most participant resources (Patient, Practitioner, Organization, etc.) are excluded because they are referenced from most profiles.

<object data="FHIRModelingV2.svg" type="image/svg+xml"></object>
<br/>
**Figure 3: Data Modeling Framework**

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-Condition-intro.md

### Purpose

SDOHCC Condition is generally intended to represent a health concern, problem, or diagnosis related to a social risk or need. SDOHCC Condition may be the result of a screening response Observations (e.g., [SDOHCC Observation Screening Response]) or other Observations made as part of an encounter assessment (e.g., [SDOHCC Observation Assessment]). SDOHCC Condition may be addressed by a Goal ([SDOHCC Goal]) or be the reason for a ServiceRequest ([SDOHCC Service Request]) or Procedure ([SDOHCC Procedure]). See the [Data Modeling Framework] for more detail on the relationships between SDOHCC Condition and the other profiles in this IG.

### Usage

Condition.code has a binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html) ([required]({{site.data.fhir.path}}terminologies.html#required)). Condition.code also has additional bindings to SDOH domain-specific value sets (e.g., for Food Insecurity) which are determined by the value selected for Condition.category. When Condition.category is a value from [SDOHCC ValueSet SDOH Category] (e.g., food-insecurity), Condition.code SHALL be selected from the corresponding domain-specific value set found in Additional Bindings (i.e. [Food Insecurity Diagnoses](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.17/expansion)). If more than one value is selected from [SDOHCC ValueSet SDOH Category] (e.g., food-insecurity **and** financial-insecurity) for Condition.category, then Condition.code SHALL be selected from at least one of the corresponding domain-specific value sets found in Additional Bindings (e.g. [Food Insecurity Diagnoses](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.17/expansion)).

Of note, Gravity Project is continuously developing terminology for new SDOH domains. For new SDOH domains where the Gravity terminology development cycle is in progress, domain-specific value sets may not yet be available in VSAC. If a domain-specific value set is not yet available in VSAC, the Additional Binding is the default binding for the profile element. If a domain-specific value set is available in VSAC but does not yet include all standardized codes identified during the domain’s terminology development cycle, the value set’s VSAC “Description” tab will state, “In progress”. Additional information related to Gravity value sets is provided on the [Social Risk Terminology Value Sets](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) page on the Gravity Project Confluence site.

Additionally, some SDOH domains may not yet be represented in [SDOHCC ValueSet SDOH Category]. In this case, Condition.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) can be used so that the Condition instance can still be categorized as SDOH-related. If desired, category.text can also be used to further specify the domain. For example, at the time of publication of this IG, “disability-status” is not yet included in [SDOHCC ValueSet SDOH Category]. In this case, Condition.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) can be used along with category.text: Disability Status. For Condition.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified), there will not be domain-specific value sets and Additional Bindings for Condition.code will designate the default binding to [US Core Condition Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html) ([required]({{site.data.fhir.path}}terminologies.html#required)).

For more information on the correlation between Condition.category and the domain-specific value sets in Additional Bindings for Condition.code, see [Gravity Project Value Sets](gravity_terminology.html#gravity-project-value-sets).


<!--Rather than offer a separate Condition profile for each SDOH category (also called domain – e.g., food insecurity, transportation insecurity), this profile can support any SDOH category. For Condition.code, the minimum value set bindings are specified in the profile. Additionally, based on the code selected for the optional Condition.category slice, the Table below provides the Gravity-vetted, preferred value sets for Condition.code. Where a preferred value set contains a code to describe a needed concept, servers SHOULD use that code.

The preferred value sets in the Table are hosted in the [NIH Value Set Authority Center (VSAC)][VSAC]. [Social Determinants of Health Conditions Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.788/expansion) in VSAC is a grouper value set containing all members of the VSAC Value Sets below. The Gravity Project plans to continue to work with the HL7 Vocabulary WG to determine how best to represent and validate these preferred, category-specific value sets.




| [`Condition.category`](ValueSet-SDOHCC-ValueSetSDOHCategory.html) | Domain | `Condition.code` ValueSet | ValueSet OID | -->
<!--| ------ | -------------------- | ------------------------- | ------------ |-->
<!--| educational-attainment  | Educational Attainment | [VSAC -  Less than high school education Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.103/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.103|-->
<!--| elder-abuse  | Elder Abuse | [VSAC -  Elder Abuse Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.63/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.63|-->
<!--| employment-status  | Employment Status | [VSAC - Unemployment Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.42/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.42|-->
<!--| financial-insecurity  | Financial Insecurity | [VSAC -  Financial Insecurity Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.108/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.108|-->
<!--| food-insecurity  | Food Insecurity | [VSAC -  Food Insecurity Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.17/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.17|-->
<!--| health-insurance-coverage-status  | Health Insurance Coverage Status | [VSAC -  Health Insurance Coverage Status Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.148/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.148|-->
<!--| health-literacy  | Health Literacy | [VSAC -  Health Literacy Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.116/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.116|-->
<!--| homelessness  | Homelessness | [VSAC -  Homelessness Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.18/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.18|-->
<!--| housing-instability  | Housing Instability | [VSAC -  Housing Instability Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.24/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.24|-->
<!--| inadequate-housing  | Inadequate Housing | [VSAC -  Inadequate Housing Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.48/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.48|-->
<!--| intimate-partner-violence  | Intimate Partner Violence | [VSAC -  Intimate Partner Violence Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.84/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.84|-->
<!--| material-hardship  | Material Hardship | [VSAC -  Material Hardship Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.35/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.35|-->
<!--| medical-cost-burden  | Medical Cost Burden | [VSAC -  Medical Cost Burden Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.153/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.153|-->
<!--| social-connection  | Social Connection | [VSAC -  Social Connection Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.81/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.81|-->
<!--| stress  | Stress | [VSAC -  Stress Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.75/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.75|-->
<!--| transportation-insecurity  | Transportation Insecurity | [VSAC -  Transportation Insecurity Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.26/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.26|-->
<!--| veteran-status  | Veteran Status | [VSAC -  Veteran Status Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.78/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.78|-->
<!--| digital-literacy	| Digital Literacy | [VSAC - Digital Literacy Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.224/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.224|-->
<!--| digital-access  | Digital Access | [VSAC -  Digital Access Diagnoses ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.231/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.231|-->
<!--| sdoh-category-unspecified<br><br>**Note:** Use “sdoh-category-unspecified” for SDOH domains that are not specified in the [SDOHCC Category value set](ValueSet-SDOHCC-ValueSetSDOHCategory.html).<br><br>If desired, “Condition.category (SDOH): sdoh-category-unspecified” can be further specified with a domain not yet included in the [SDOHCC Category value set](ValueSet-SDOHCC-ValueSetSDOHCategory.html) by using category.text. | SDOH Category Unspecified | **Note:** For new SDOH domains, any Gravity value sets that are available in VSAC but not yet included in the IG can be found on the [Social Risk Terminology Value Sets](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) page on Confluence.|-->
<!--{:.grid}-->



{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-Consent-intro.md


### Purpose
SDOH data is sensitive personal information with significant privacy and security considerations. The SDOHCC Consent profile is intended for authorizing disclosure of the subject of care’s information between a HIPAA covered entity and a non-HIPAA covered entity (e.g., exchanged between a [Covered Entity](https://www.hhs.gov/hipaa/for-professionals/covered-entities/index.html) and a [Business Associate](https://www.hhs.gov/hipaa/for-professionals/privacy/guidance/business-associates/index.html) (BA). This profile is not a complete treatment of the issues related to consent; it is a starting point to test the viability of exchanging consent information.

### Usage
See also [Patient Privacy and Consent](privacy_and_security.html#patient-privacy-and-consent).

The consent can be provided as either an attachment or a reference.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-Goal-intro.md

### Purpose

[SDOHCC Goal] is generally intended to represent a goal established to address an identified social risk or need (e.g., [SDOHCC Condition], [SDOHCC Observation Screening Response], [SDOHCC Observation Assessment]). An [SDOHCC ServiceRequest] and [SDOHCC Procedure] can pertain to an SDOHCC Goal. See the [Data Modeling Framework] for more detail on the relationships between SDOHCC Goal and the other profiles in this IG.

### Usage

Goal.description has a binding to [SDOHCC ValueSet LOINC SNOMEDCT](ValueSet-SDOHCC-ValueSetLOINCSNOMEDCT.html) ([preferred]({{site.data.fhir.path}}terminologies.html#preferred)). Goal.description also has additional bindings to SDOH domain-specific value sets (e.g., for Food Insecurity) which are determined by the value selected for Goal.category. When Goal.category is a value from [SDOHCC ValueSet SDOH Category] (e.g., food-insecurity), Goal.description SHALL be selected from the corresponding domain-specific value set found in Additional Bindings (i.e. [Food Insecurity Goals](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.16/expansion/Latest)). If more than one value is selected from [SDOHCC ValueSet SDOH Category] (e.g., food-insecurity **and** financial-insecurity) for Goal.category, then Goal.description SHALL be selected from at least one of the corresponding domain-specific value sets found in Additional Bindings (e.g. [Food Insecurity Goals](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.16/expansion/Latest)).

Of note, Gravity Project is continuously developing terminology for new SDOH domains. For new SDOH domains where the Gravity terminology development cycle is in progress, domain-specific value sets may not yet be available in VSAC. If a domain-specific value set is not yet available in VSAC, the Additional Binding is the default binding for the profile element. If a domain-specific value set is available in VSAC but does not yet include all standardized codes identified during the domain’s terminology development cycle, the value set’s VSAC “Description” tab will state, “In progress”. Additional information related to Gravity value sets is provided on the [Social Risk Terminology Value Sets](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) page on the Gravity Project Confluence site.

Additionally, some SDOH domains may not yet be represented in [SDOHCC ValueSet SDOH Category]. In this case, Goal.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) can be used so that the Goal instance can still be categorized as SDOH-related. If desired, category.text can also be used to further specify the domain. For example, at the time of publication of this IG, “disability-status” is not yet included in [SDOHCC ValueSet SDOH Category]. In this case, Goal.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) can be used along with category.text: Disability Status. For Goal.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified), there will not be domain-specific value sets and Additional Bindings for Goal.description will designate the default binding to [SDOHCC ValueSet LOINC SNOMEDCT](ValueSet-SDOHCC-ValueSetLOINCSNOMEDCT.html) ([preferred]({{site.data.fhir.path}}terminologies.html#preferred)).

For more information on the correlation between Goal.category and the domain-specific value sets in Additional Bindings for Goal.description, see [Gravity Project Value Sets](gravity_terminology.html#gravity-project-value-sets).


<!--Rather than offer a separate Goal profile for each SDOH category (also called domain – e.g., food insecurity, transportation insecurity), this profile can support any SDOH category. For Goal.description, the minimum value set bindings are specified in the profile. Additionally, based on the code selected for the optional Goal.category slice, the Table below provides the Gravity-vetted, preferred value sets for Goal.description. Where a preferred value set contains a code to describe a needed concept, servers SHOULD use that code.

The preferred value sets in the Table are hosted in the [NIH Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/). [Social Determinants of Health Goals Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.71/expansion) in VSAC is a grouper value set containing all members of the VSAC Value Sets below. The Gravity Project plans to continue to work with the HL7 Vocabulary WG to determine how best to represent and validate these preferred, category-specific value sets.


<!--| [`Goal.category`](ValueSet-SDOHCC-ValueSetSDOHCategory.html) | Domain | `Goal.description` ValueSet | ValueSet OID |-->
<!--| ------ | -------------------- | ------------------------- | ------------ |-->
<!--| educational-attainment  | Educational Attainment | [VSAC -  Less than high school education Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.55/expansion/Latest) | 2.16.840.1.113762.1.4.1247.55 |-->
<!--| elder-abuse  | Elder Abuse | [VSAC -  Elder Abuse Goals ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.65/expansion/Latest) |2.16.840.1.113762.1.4.1247.65 |-->
<!--| employment-status  | Employment Status | [VSAC -  Unemployment Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.70/expansion/Latest) |2.16.840.1.113762.1.4.1247.70 |-->
<!--| financial-insecurity  | Financial Insecurity | [VSAC -  Financial Insecurity Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.30/expansion/Latest) |2.16.840.1.113762.1.4.1247.30 |-->
<!--| food-insecurity  | Food Insecurity | [VSAC -  Food Insecurity Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.16/expansion/Latest) |2.16.840.1.113762.1.4.1247.16 |-->
<!--| health-insurance-coverage-status  | Health Insurance Coverage Status | [VSAC -  Health Insurance Coverage Status Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.121/expansion/Latest) |2.16.840.1.113762.1.4.1247.121 |-->
<!--| health-literacy  | Health Literacy | [VSAC -  Health Literacy Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.117/expansion/Latest) |2.16.840.1.113762.1.4.1247.117 |-->
<!--| homelessness  | Homelessness | [VSAC -  Homelessness Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.159/expansion/Latest) |2.16.840.1.113762.1.4.1247.159 |-->
<!--| housing-instability  | Housing Instability | [VSAC -  Housing Instability Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.161/expansion/Latest) |2.16.840.1.113762.1.4.1247.161 |-->
<!--| inadequate-housing  | Inadequate Housing | [VSAC -  Inadequate Housing Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.50/expansion/Latest) |2.16.840.1.113762.1.4.1247.50 |-->
<!--| intimate-partner-violence  | Intimate Partner Violence | [VSAC -  Intimate Partner Violence Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.100/expansion/Latest) |2.16.840.1.113762.1.4.1247.100 |-->
<!--| material-hardship  | Material Hardship | [VSAC -  Material Hardship Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.37/expansion/Latest) |2.16.840.1.113762.1.4.1247.37 |-->
<!--| medical-cost-burden  | Medical Cost Burden | [VSAC -  Medical Cost Burden Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.120/expansion/Latest) |2.16.840.1.113762.1.4.1247.120 |-->
<!--| social-connection  | Social Connection | [VSAC -  Social Connection Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.89/expansion/Latest) |2.16.840.1.113762.1.4.1247.89 |-->
<!--| stress  | Stress | [VSAC -  Stress Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.86/expansion/Latest) |2.16.840.1.113762.1.4.1247.86 |-->
<!--| transportation-insecurity  | Transportation Insecurity | [VSAC -  Transportation Insecurity Goals ](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.163/expansion/Latest) |2.16.840.1.113762.1.4.1247.163 |-->
<!--| veteran-status  | Veteran Status | VSAC -  Veteran Status Goals  | none |-->
<!--| digital-literacy	| Digital Literacy | VSAC -  Digital Literacy Goals | none |-->
<!--| digital-access  | Digital Access | VSAC -  Digital Access Goals | none |-->
<!--| sdoh-category-unspecified<br><br>**Note:** Use “sdoh-category-unspecified” for SDOH domains that are not specified in the [SDOHCC Category value set](ValueSet-SDOHCC-ValueSetSDOHCategory.html).<br><br>If desired, “Goal.category (SDOH): sdoh-category-unspecified” can be further specified with a domain not yet included in the [SDOHCC Category value set](ValueSet-SDOHCC-ValueSetSDOHCategory.html) by using category.text. | SDOH Category Unspecified | **Note:** For new SDOH domains, any Gravity value sets that are available in VSAC but not yet included in the IG can be found on the [Social Risk Terminology Value Sets](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) page on Confluence.|-->

<!--{:.grid}-->

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-Group-intro.md


### Purpose

SDOHCC Group is intended to support identification of cohorts of individuals who have conditions in the same SDOH category (domain) AND are members of the same specific payer organization. (See [Gravity Use Case Package Use Case 3](https://confluence.hl7.org/pages/viewpage.action?pageId=51227176#GravityUseCasePackage-GravityUseCases) which involves aggregation and analysis of individual-level social risk and need data to support clinical, system, and community activities.) The two required slices on Group.characteristic can be used to identify a cohort of subjects who have coverage through a specific payer organization AND a condition that falls into a specified SDOH category/domain.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-HealthcareService-intro.md


### Purpose
SDOHCC Healthcare Service is intended to provide the Healthcare Service address and the contact information for making an appointment.
When a subject of care is referred to a Healthcare Service, [SDOHCC Task For Patient](StructureDefinition-SDOHCC-TaskForPatient.html) (via Task.input) can reference SDOHCC Healthcare Service which can provide the Healthcare Service address (via HealthcareService.location) and contact information for making an appointment (via HealthcareService.telecom and [SDOHCC Healthcare Service Telecom Appointment](StructureDefinition-SDOHCC-ExtensionHealthcareServiceTelecomAppointment.html)).


{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-Location-intro.md


### Purpose
SDOHCC Location provides the address of a Healthcare Service to which a subject is referred.
When a subject of care is referred to a Healthcare Service, [SDOHCC Task For Patient](StructureDefinition-SDOHCC-TaskForPatient.html) (via Task.input) references [SDOHCC Healthcare Service](StructureDefinition-SDOHCC-HealthcareService.html) which (via HealthcareService.location) references [SDOHCC Location](StructureDefinition-SDOHCC-Location.html) which requires Location.address.


{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-ObservationAssessment-intro.md

### Purpose

SDOHCC Observation Assessment is intended for social risk-related Observations that involve an assessment (e.g., by a provider, payer, etc.) rather than being derived only from question-answer pairs on assessment instruments (as is the case for [SDOHCC Observation Screening Response]).

### Usage

Rather than offer separate SDOHCC Observation Assessment profiles for each SDOH category (domain) covered in this IG (e.g., food insecurity, transportation insecurity, etc.), this profile supports any SDOH category. The Observation.category slice with binding to [SDOHCC ValueSet SDOH Category] allows categorization of the Observation into an SDOH category (domain). However, unlike [SDOHCC Observation Screening Response], this profile does not have Gravity-vetted, preferred value sets in VSAC. This was intentional since it would be very difficult to define value sets to constrain all social risk observations that might be made about an individual.

{% include markdown-link-references.md %}


---

// File: input/pagecontent/StructureDefinition-SDOHCC-ObservationScreeningResponse-intro.md

### Purpose

SDOHCC Observation Screening Response (OSR) is intended to represent question-answer pairs from Social Determinants of Health (SDOH) assessment instruments. An OSR that identifies a social risk or need can be referenced as evidence for an [SDOHCC Condition]. Additionally, an OSR may be addressed by, or be the outcome of, an [SDOHCC Goal], or the reason for an [SDOHCC ServiceRequest] or [SDOHCC Procedure]. See the [Data Modeling Framework](sdoh_clinical_care_scope.html#data-modeling-framework) for more detail on the relationships between OSR and other profiles in this IG.

This IG focuses on a workflow where completed assessment instruments are captured using QuestionnaireResponse. To facilitate querying and searching, individual question-answer pairs from a QuestionnaireResponse can be converted into Observations. The decision as to which responses from a QuestionnaireResponse to convert into Observations will generally be driven by the usage need. For more information on this topic see [Representing Assessment Instrument Data in a FHIR Format](assessment_instrument_support.html#representing-assessment-instrument-data-in-a-fhir-format).

In the future, for standardized assessment instruments, a StructureMap instance would ideally be provided by a Questionnaire steward to ensure consistency in the Observations and Conditions (i.e., unconfirmed health concerns) generated from the assessment instrument. For more information on this topic, see [Using StructureMap to Generate Observations or Conditions from QuestionnaireResponse](assessment_instrument_support.html#using-structuremap-to-generate-observations-or-conditions-from-questionnaireresponse).

### Usage

Observation.code and Observation.value have bindings to [LOINCCodes]({{site.data.fhir.path}}valueset-observation-codes.html) ([required]({{site.data.fhir.path}}terminologies.html#required)). Observation.code and Observation.value also have additional bindings to SDOH domain-specific value sets (e.g., for Food Insecurity, Inadequate Housing, etc.) which are determined by the value selected for Observation.category. When Observataion.category is a value from [SDOHCC ValueSet SDOH Category] (e.g., food-insecurity),  Observation.code and Observation.value SHALL be selected from the corresponding domain-specific value set found in Additional Bindings (e.g. [Food Insecurity Screening Assessments And Questions](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.194/expansion/Latest) for Observation.code and [Food Insecurity Screening Assessments Answers](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.174/expansion/Latest) for Observation.value). If more than one value is selected from [SDOHCC ValueSet SDOH Category] (e.g., food-insecurity and financial-insecurity) for Observation.category, then Observation.code and Observation.value SHALL be selected from at least one of the corresponding domain-specific value sets found in Additional Bindings (e.g. [Food Insecurity Screening Assessments And Questions](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.194/expansion/Latest) for Observation.code and [Food Insecurity Screening Assessments Answers](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.174/expansion/Latest) for Observation.value).

Occasionally, questions are reused across assessment instruments and represented by the same LOINC code, but the question’s allowed answer set may vary on different assessment instruments. Therefore, the allowed answer set (for Observation.value) for a question (Observation.code) is determined by the assessment instrument. For this reason, Gravity provides Downloadable Assessment Instrument Spreadsheets that link Gravity-vetted questions to the assessment instruments from which they were chosen and their allowed answer sets. For access to the Spreadsheets and more information on this topic, see [Social Risk Terminology Value Sets](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) on the Gravity Confluence site and specifically the [Assessment Instruments Spreadsheet Guidance](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets?preview=/97463504/161062739/Assessment_Instruments_Spreadsheet_Guidance_V1.pdf) document.

Of note, Gravity Project is continuously developing terminology for new SDOH domains. For new SDOH domains where the Gravity terminology development cycle is in progress, domain-specific value sets may not yet be available in VSAC. If a domain-specific value set is not yet available in VSAC, the Additional Binding is the default binding for the profile element. If a domain-specific value set is available in VSAC but does not yet include all standardized codes identified during the domain’s terminology development cycle, the value set’s VSAC “Description” tab will state, “In progress”. Additional information related to Gravity value sets is provided on the [Social Risk Terminology Value Sets](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) page on the Gravity Project Confluence site. 

Additionally, some SDOH domains may not yet be represented in [SDOHCC ValueSet SDOH Category]. In this case, Observation.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) can be used so that the Observation instance can still be categorized as SDOH-related. If desired, category.text can also be used to further specify the domain. For example, at the time of publication of this IG, “disability-status” is not yet included in [SDOHCC ValueSet SDOH Category]. In this case, Observation.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) can be used along with category.text: Disability Status. For Observation.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified), there will not be domain-specific value sets and Additional Bindings for Observation.code and Observation.value will designate the default binding to [LOINCCodes]({{site.data.fhir.path}}valueset-observation-codes.html) ([required]({{site.data.fhir.path}}terminologies.html#required)). 

For more information on the correlation between Observation.category and the domain-specific value sets in Additional Bindings for Observation.code and Observation.value, see [Gravity Project Value Sets](gravity_terminology.html#gravity-project-value-sets).

When Observation.category is used to tag Observations by SDOH domain (e.g., Food Insecurity, Housing Instability), Observation.interpretation: [POS](https://hl7.org/fhir/R4/v3/ObservationInterpretation/cs.html#v3-ObservationInterpretation-POS) (Positive) can be used to flag Observations that might represent a health-related social need (HRSN) in the specified SDOH domain(s). For more information on the use of Observation.category and Observation.interpretation and their interplay when used with OSR, see [Additional Guidance on SDOHCC Observation Screening Response Elements](assessment_instrument_support.html#additional-guidance-on-sdohcc-observation-screening-response-elements). 

Observation can also indicate relationships to other artifacts. For example:

* If a question-answer pair is not answered directly on an assessment instrument (e.g., when a score or value is based on other question-answer pairs), OSR can reference one or more other OSRs via Observation.derivedFrom (see [SDOHCC Observation Response NHANES Question 6 Example](artifacts.html#social-connection-and-isolation-panel-nhanes-examples)).
* If assessment instrument context is needed, Observations generated from a QuestionnaireResponse can reference QuestionnaireResponse via Observation.derivedFrom. 
* In addition to representing instances of question-answer pairs, SDOHCC Observation Screening Response can be used as an Observation Grouping that, via Observation.member, references the OSR instances that result from a completed assessment instrument. For this reason, in addition to codes that represent questions, the value sets bound to Observation.code include codes that represent assessment instruments (LOINC panel codes). For an Observation Grouping, Observation.code SHALL be a LOINC panel code and Observation.member SHALL reference the OSR instances generated from that LOINC panel (assessment instrument). Observation Grouping is most useful when additional assessment instrument context is needed and a QuestionnaireResponse has not been created. For more information on Observation Grouping, see [Using Observation Screening Response to Group Observations](assessment_instrument_support.html#using-observation-screening-response-to-group-observations).




{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-Procedure-intro.md

### Purpose

SDOHCC Procedure is generally intended to represent a procedure performed to address an identified social risk or need (e.g., [SDOHCC Condition], [SDOHCC Observation Screening Response], [SDOHCC Observation Assessment]). SDOHCC Procedure can be based on an [SDOHCC ServiceRequest], pertain to an [SDOHCC Goal], or be the output of an [SDOHCC Task For Referral Management]. See the [Data Modeling Framework] for more detail on the relationships between SDOHCC Procedure and the other profiles in this IG.

### Usage

Procedure.code has a binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html) ([required]({{site.data.fhir.path}}terminologies.html#required)). Procedure.code also has additional bindings to SDOH domain-specific value sets (e.g., for Food Insecurity) which are determined by the value selected for Procedure.category. When Procedure.category is a value from [SDOHCC ValueSet SDOH Category] (e.g., food-insecurity), Procedure.code SHALL be selected from the corresponding domain-specific value set found in Additional Bindings (i.e. [Food Insecurity Procedures](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.7/expansion/Latest). If more than one value is selected from [SDOHCC ValueSet SDOH Category] (e.g., food-insecurity and financial-insecurity) for Procedure.category, then Procedure.code SHALL be selected from at least one of the corresponding domain-specific value sets found in Additional Bindings (e.g. [Food Insecurity Procedures](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.7/expansion/Latest)).

Of note, Gravity Project is continuously developing terminology for new SDOH domains. For new SDOH domains where the Gravity terminology development cycle is in progress, domain-specific value sets may not yet be available in VSAC. If a domain-specific value set is not yet available in VSAC, the Additional Binding is the default binding for the profile element. If a domain-specific value set is available in VSAC but does not yet include all standardized codes identified during the domain’s terminology development cycle, the value set’s VSAC “Description” tab will state, “In progress”. Additional information related to Gravity value sets is provided on the [Social Risk Terminology Value Sets](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) page on the Gravity Project Confluence site.

Additionally, some SDOH domains may not yet be represented in [SDOHCC ValueSet SDOH Category]. In this case, Procedure.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) can be used so that the Procedure instance can still be categorized as SDOH-related. If desired, category.text can also be used to further specify the domain. For example, at the time of publication of this IG, “disability-status” is not yet included in [SDOHCC ValueSet SDOH Category]. In this case, Procedure.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) can be used along with category.text: Disability Status. For Procedure.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified), there will not be domain-specific value sets and Additional Bindings for Procedure.code will designate the default binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html) ([required]({{site.data.fhir.path}}terminologies.html#required)).

For more information on the correlation between Procedure.category and the domain-specific value sets in Additional Bindings for Procedure.code, see [Gravity Project Value Sets](gravity_terminology.html#gravity-project-value-sets).

<!--Rather than offer a separate Procedure profile for each SDOH category (also called domain – e.g., food insecurity, transportation insecurity), this profile can support any SDOH category. For Procedure.code, the minimum value set bindings are specified in the profile. Additionally, based on the code selected for the optional Procedure.category.coding slice, the Table below provides the Gravity-vetted, preferred value sets for Procedure.code. Where a preferred value set contains a code to describe a needed concept, servers SHOULD use that code.

The preferred value sets in the Table are hosted in the [NIH Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/). The [Social Determinants of Health Procedures Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.789/expansion) in VSAC is a grouper value set containing all members of the VSAC Value Sets below. The Gravity Project plans to continue to work with the HL7 Vocabulary WG to determine how best to represent and validate these preferred, category-specific value sets.


| [`Procedure.category.coding`](ValueSet-SDOHCC-ValueSetSDOHCategory.html) | Domain | `Procedure.code` ValueSet | ValueSet OID |
| ------ | -------------------- | ------------------------- | ------------ |
| educational-attainment  | Educational Attainment | [VSAC -  Less than high school education Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.56/expansion/Latest ) |2.16.840.1.113762.1.4.1247.56|
| elder-abuse  | Elder Abuse | [VSAC -  Elder Abuse Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.67/expansion/Latest ) |2.16.840.1.113762.1.4.1247.67|
| employment-status  | Employment Status | [VSAC -  Unemployment Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.59/expansion/Latest ) |2.16.840.1.113762.1.4.1247.59|
| financial-insecurity  | Financial Insecurity | [VSAC -  Financial Insecurity Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.32/expansion/Latest ) |2.16.840.1.113762.1.4.1247.32|
| food-insecurity  | Food Insecurity | [VSAC -  Food Insecurity Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.7/expansion/Latest ) |2.16.840.1.113762.1.4.1247.7|
| health-insurance-coverage-status  | Health Insurance Coverage Status | [VSAC -  Health Insurance Coverage Status Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.125/expansion/Latest ) |2.16.840.1.113762.1.4.1247.125|
| health-literacy  | Health Literacy | [VSAC -  Health Literacy Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.118/expansion/Latest ) |2.16.840.1.113762.1.4.1247.118|
| homelessness  | Homelessness | [VSAC -  Homelessness Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.20/expansion/Latest ) |2.16.840.1.113762.1.4.1247.20|
| housing-instability  | Housing Instability | [VSAC -  Housing Instability Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.44/expansion/Latest ) |2.16.840.1.113762.1.4.1247.44|
| inadequate-housing  | Inadequate Housing | [VSAC -  Inadequate Housing Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.52/expansion/Latest ) |2.16.840.1.113762.1.4.1247.52|
| intimate-partner-violence  | Intimate Partner Violence | [VSAC -  Intimate Partner Violence Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.97/expansion/Latest ) |2.16.840.1.113762.1.4.1247.97|
| material-hardship  | Material Hardship | [VSAC -  Material Hardship Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.39/expansion/Latest ) |2.16.840.1.113762.1.4.1247.39|
| medical-cost-burden  | Medical Cost Burden | [VSAC -  Medical Cost Burden Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.122/expansion/Latest ) |2.16.840.1.113762.1.4.1247.122|
| social-connection  | Social Connection | [VSAC -  Social Connection Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.94/expansion/Latest ) |2.16.840.1.113762.1.4.1247.94|
| stress  | Stress | [VSAC -  Stress Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.87/expansion/Latest ) |2.16.840.1.113762.1.4.1247.87|
| transportation-insecurity  | Transportation Insecurity | [VSAC -  Transportation Insecurity Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.27/expansion/Latest ) |2.16.840.1.113762.1.4.1247.27|
| veteran-status  | Veteran Status | [VSAC -  Veteran Status Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.90/expansion/Latest ) |2.16.840.1.113762.1.4.1247.90|



| digital-literacy	| Digital Literacy | [VSAC -  Digital Literacy Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.226/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.226 |


| digital-access  | Digital Access | [VSAC -  Digital Access Procedures ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.235/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.235|


| sdoh-category-unspecified<br><br>**Note:** Use “sdoh-category-unspecified” for SDOH domains that are not specified in the [SDOHCC Category value set](ValueSet-SDOHCC-ValueSetSDOHCategory.html).<br><br>If desired, Procedure.category (SDOH): sdoh-category-unspecified” can be further specified with a domain not yet included in the [SDOHCC Category value set](ValueSet-SDOHCC-ValueSetSDOHCategory.html) by using category.text. | SDOH Category Unspecified | **Note:** For new SDOH domains, any Gravity value sets that are available in VSAC but not yet included in the IG can be found on the [Social Risk Terminology Value Sets](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) page on Confluence.|
{:.grid} -->

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-ServiceRequest-intro.md

### Purpose

SDOHCC ServiceRequest is generally intended to represent a service request to address an identified social risk or need (e.g., [SDOHCC Condition], [SDOHCC Observation Screening Response], [SDOHCC Observation Assessment]). An SDOHCC ServiceRequest can pertain to an [SDOHCC Goal], and can reference the patient’s consent for the referral (e.g., [SDOHCC Consent]). An SDOHCC ServiceRequest can be the focus of an [SDOHCC Task For Referral Management] and an [SDOHCC Procedure] can be an based on an SDOHCC ServiceRequest. See the [Data Modeling Framework] for more detail on the relationships between SDOHCC ServiceRequest and the other profiles in this IG.

### Usage

ServiceRequest.code has a binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html) ([required]({{site.data.fhir.path}}terminologies.html#required)). ServiceRequest.code also has additional bindings to SDOH domain-specific value sets (e.g., for Food Insecurity) which are determined by the value selected for ServiceRequest.category. When ServiceRequest.category is a value from [SDOHCC ValueSet SDOH Category] (e.g., food-insecurity), ServiceRequest.code SHALL be selected from the corresponding domain-specific value set found in Additional Bindings (i.e. [Food Insecurity ServiceRequests](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.11/expansion/Latest). If more than one value is selected from [SDOHCC ValueSet SDOH Category] (e.g., food-insecurity and financial-insecurity) for ServiceRequest.category, then ServiceRequest.code SHALL be selected from at least one of the corresponding domain-specific value sets found in Additional Bindings (e.g. [Food Insecurity ServiceRequests](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.11/expansion/Latest)).

Of note, Gravity Project is continuously developing terminology for new SDOH domains. For new SDOH domains where the Gravity terminology development cycle is in progress, domain-specific value sets may not yet be available in VSAC. If a domain-specific value set is not yet available in VSAC, the Additional Binding is the default binding for the profile element. If a domain-specific value set is available in VSAC but does not yet include all standardized codes identified during the domain’s terminology development cycle, the value set’s VSAC “Description” tab will state, “In progress”. Additional information related to Gravity value sets is provided on the [Social Risk Terminology Value Sets](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) page on the Gravity Project Confluence site.

Additionally, some SDOH domains may not yet be represented in [SDOHCC ValueSet SDOH Category]. In this case, ServiceRequest.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) can be used so that the Service Request instance can still be categorized as SDOH-related. If desired, category.text can also be used to further specify the domain. For example, at the time of publication of this IG, “disability-status” is not yet included in [SDOHCC ValueSet SDOH Category]. In this case, ServiceRequest.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified) can be used along with category.text: Disability Status. For ServiceRequest.category: [sdoh-category-unspecified](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html#SDOHCC-CodeSystemTemporaryCodes-sdoh-category-unspecified), there will not be domain-specific value sets and Additional Bindings for ServiceRequest.code will designate the default binding to [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html) ([required]({{site.data.fhir.path}}terminologies.html#required)).

For more information on the correlation between ServiceRequest.category and the domain-specific value sets in Additional Bindings for ServiceRequest.code, see [Gravity Project Value Sets](gravity_terminology.html#gravity-project-value-sets).

<!--Rather than offer a separate ServiceRequest profile for each SDOH category (also called domain – e.g., food insecurity, transportation insecurity), this profile can support any SDOH category. For ServiceRequest.code, the minimum value set bindings are specified in the profile. Additionally, based on the code selected for the optional ServiceRequest.category slice, the Table below provides the Gravity-vetted, preferred value sets for ServiceRequest.code. Where a preferred value set contains a code to describe a needed concept, servers SHOULD use that code.

The preferred value sets in the Table are hosted in the [NIH Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/). The [Social Determinants of Health Service Requests Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.790/expansion) in VSAC is a grouper value set containing all members of the VSAC Value Sets below. The Gravity Project plans to continue to work with the HL7 Vocabulary WG to determine how best to represent and validate these preferred, category-specific value sets.

| [`ServiceRequest.category`](ValueSet-SDOHCC-ValueSetSDOHCategory.html) | Domain | `ServiceRequest.code` ValueSet | ValueSet OID |
| ------ | -------------------- | ------------------------- | ------------ |
| educational-attainment  | Educational Attainment | [VSAC -  Less than high school education ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.57/expansion/Latest ) |2.16.840.1.113762.1.4.1247.57|
| elder-abuse  | Elder Abuse | [VSAC -  Elder Abuse ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.68/expansion/Latest ) |2.16.840.1.113762.1.4.1247.68|
| employment-status  | Employment Status | [VSAC -  Unemployment ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.60/expansion/Latest ) |2.16.840.1.113762.1.4.1247.60|
| financial-insecurity  | Financial Insecurity | [VSAC -  Financial Insecurity ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.31/expansion/Latest ) |2.16.840.1.113762.1.4.1247.31|
| food-insecurity  | Food Insecurity | [VSAC -  Food Insecurity ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.11/expansion/Latest ) |2.16.840.1.113762.1.4.1247.11|
| health-insurance-coverage-status  | Health Insurance Coverage Status | [VSAC -  Health Insurance Coverage Status ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.124/expansion/Latest ) |2.16.840.1.113762.1.4.1247.124|
| health-literacy  | Health Literacy | [VSAC -  Health Literacy ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.119/expansion/Latest ) |2.16.840.1.113762.1.4.1247.119|
| homelessness  | Homelessness | [VSAC -  Homelessness ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.21/expansion/Latest ) |2.16.840.1.113762.1.4.1247.21|
| housing-instability  | Housing Instability | [VSAC -  Housing Instability ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.45/expansion/Latest ) |2.16.840.1.113762.1.4.1247.45|
| inadequate-housing  | Inadequate Housing | [VSAC -  Inadequate Housing ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.53/expansion/Latest ) |2.16.840.1.113762.1.4.1247.53|
| intimate-partner-violence  | Intimate Partner Violence | [VSAC -  Intimate Partner Violence ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.98/expansion/Latest ) |2.16.840.1.113762.1.4.1247.98|
| material-hardship  | Material Hardship | [VSAC -  Material Hardship ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.38/expansion/Latest ) |2.16.840.1.113762.1.4.1247.38|
| medical-cost-burden  | Medical Cost Burden | [VSAC -  Medical Cost Burden ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.123/expansion/Latest ) |2.16.840.1.113762.1.4.1247.123|
| social-connection  | Social Connection | [VSAC -  Social Connection ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.95/expansion/Latest ) |2.16.840.1.113762.1.4.1247.95|
| stress  | Stress | [VSAC -  Stress ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.92/expansion/Latest ) |2.16.840.1.113762.1.4.1247.92|
| transportation-insecurity  | Transportation Insecurity | [VSAC -  Transportation Insecurity ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.28/expansion/Latest ) |2.16.840.1.113762.1.4.1247.28|
| veteran-status  | Veteran Status | [VSAC -  Veteran Status ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.91/expansion/Latest ) |2.16.840.1.113762.1.4.1247.91|

| digital-literacy	| Digital Literacy | [VSAC -  Digital Literacy ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.227/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.227 |


| digital-access  | Digital Access | [VSAC -  Digital Access ServiceRequests ]( https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.236/expansion/Latest ) | 2.16.840.1.113762.1.4.1247.236 |


| sdoh-category-unspecified<br><br>**Note:** Use “sdoh-category-unspecified” for SDOH domains that are not specified in the [SDOHCC Category value set](ValueSet-SDOHCC-ValueSetSDOHCategory.html).<br><br>If desired, ServiceRequest.category (SDOH): sdoh-category-unspecified” can be further specified with a domain not yet included in the [SDOHCC Category value set](ValueSet-SDOHCC-ValueSetSDOHCategory.html) by using category.text. | SDOH Category Unspecified | **Note:** For new SDOH domains, any Gravity value sets that are available in VSAC but not yet included in the IG can be found on the [Social Risk Terminology Value Sets](https://confluence.hl7.org/display/GRAV/Social+Risk+Terminology+Value+Sets) page on Confluence.|
{:.grid} -->

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-TaskForPatient-intro.md

### Purpose
This profile is used to pass a Task authored by a Practitioner or Organization (.requester field) targeting a Patient or Related Person (.owner field) to the individual. These fields are required.  The .output is used to return a response appropriate to the requested Task code.

### Usage

#### Types of Tasks

The table shows the types of tasks that can be assigned to the patient and the constraints imposed by each usage that are enforced through invariants:


|    Task Type     | Task.code             | Task.description | Task.input                  |  Task.output                                    |   Task.focus |
| ------------------ | --------------------- | ---------------- | --------------------------- |------------------------------------------------ | ------ |
| Questionnaire (FHIR)| `complete-questionnaire` |  | questionnaire, questionnaire-category required | If present, questionnaire-response   | |
| Questionnaire (PDF)| `complete-questionnaire`  | | questionnaire-pdf, questionnaire-category required | If present, questionnaire-pdf-completed   | |
| Questionnaire (URL)| `complete-questionnaire` | | questionnaire-url, questionnaire-category required |     | |
| General Information  | `general-information` | required |        | If present, general-information-response |  |
| Make Contact Directions |  `make-contact` |  | at least one contact-entity is required | If present, chosen-contact |
| Review Material | `review-material` | |  | | DocumentReference required. |
{:.grid}

#### Checking Task Status
See [Checking Task Status](checking_task_status.html).

#### Status Management
The status values constrain the Task to specific states that are required to support communication with a patient application.

The allowed state transitions are defined graphically in the state diagram below, and are described in the table below.

{% include img.html img="PatientTaskStateDiagram.svg" caption="Figure 1: Patient Task State Diagram" %}

| Code | Display | Definition | Set By |
| ---- | ------- | ---------- | ------ |
| `ready` | Ready | The task is ready to be performed, but no action has been taken. Used in place of requested/received/accepted/rejected when request assignment and acceptance is given| Requester |
| `in-progress` | In Progress | The task has been started but is not yet complete | Patient App |
| `completed` | Completed | The task has been completed. |  Patient App|
| `cancelled`  |Cancelled  | The task was not completed | Requester or Patient App |
| `on-hold`  |On Hold | The task has been started but work has been paused. | Patient App |
| `failed` | Failed | The task was attempted but could not be completed due to some error. |  Patient App|
| `entered-in-error` | Entered in Error | The task should never have existed and is retained only because of the possibility it may have been used | Requester |
{:.grid}

### Modification of fields
In addition to a limited set of status values, the patient application is only permitted to modify a specific set of elements in responding to the task request.  These elements include: .status, .statusReason, and .output.  All other elements are outside of the scope of this IG. The patient application cannot modify the status of the referral task [SDOHCC Task For Referral Management], that can only be done by the requester and the performing or intermediary entity.

{% include markdown-link-references.md %}

---

// File: input/pagecontent/StructureDefinition-SDOHCC-TaskForReferralManagement-intro.md


### Purpose
This profile is used to pass an [SDOHCC Service Request] (the .focus field) authored by a Practitioner or Organization (.requester field) targeting a Patient, Related Person or Group (.for field) to a service-providing organization. These fields are required.  The .output is used to return a collection of procedure codes or references to procedures that were performed in fulfillment of the referral.

If the Task is posted to the service delivery system and the ServiceRequest is on a different system, the reference should be absolute.
The Task can be updated by either the service requester or the recipient.

### Usage

#### Checking Task Status
See [Checking Task Status](checking_task_status.html).


#### Status Management
The status values allow for a complete flow of the Task in both the requesting and performing systems.

The allowed state transitions are defined graphically in the state diagram below, and are described in the table below.

{% include img.html img="ReferralTaskStateDiagram.svg" caption="Figure 1: Referral Task State Diagram" %}

| Code | Display | Definition | Set By |
| ---- | ------- | ---------- | ------ |
| `draft` | Draft | The task is not yet ready to be acted upon | Requester |
| `requested` | Requested | The task is ready to be acted upon and action is sought | Requester |
| `accepted` | Accepted | The potential performer has agreed to execute the task but has not yet started work | Referral Target |
| `rejected` | Rejected | The potential performer has decided not to execute it prior to performing any action. | Referral Target |
| `canceled`  |Canceled  | The task was not completed | Requester or Referral Target |
| `in-progress` | In Progress | The task has been started but is not yet complete | Referral Target |
| `on-hold`  |On Hold | The task has been started but work has been paused. | Referral Target  |
| `failed` | Failed | The task was attempted but could not be completed due to some error. |  Referral Target|
| `completed` | Completed | The task has been completed. |  Referral Target|
| `entered-in-error` | Entered in Error | The task should never have existed and is retained only because of the possibility it may have been used | Requester |
{:.grid}


{% include markdown-link-references.md %}

---

// File: input/pagecontent/stu2_1_update_changes.md

### Jira Tickets – all applied -- see changes below

* [FHIR-40447](https://jira.hl7.org/browse/FHIR-40447) Document the use of Gravity VS in the multi-domain profiles
* [FHIR-40449](https://jira.hl7.org/browse/FHIR-40449) Improve rendering of Capability Statements
* [FHIR-40450](https://jira.hl7.org/browse/FHIR-40450) Glossary
* [FHIR-40460](https://jira.hl7.org/browse/FHIR-40460) SDOHCC Observation Assessment is not abstract
* [FHIR-40586](https://jira.hl7.org/browse/FHIR-40586) Referral Task outputs bound appropriately
* [FHIR-40611](https://jira.hl7.org/browse/FHIR-40611) Added slice to to ObservationScreeningResponse.member to reference all observations that are members of the group
* [FHIR-40771](https://jira.hl7.org/browse/FHIR-40771) Constrained TaskForReferralManagement.status to exclude requested value.
* [FHIR-41278](https://jira.hl7.org/browse/FHIR-41278) Fixed cardinality of extension to HealthcareService.telecom so that there would be one boolean flag per telecom
* [FHIR-41310](https://jira.hl7.org/browse/FHIR-FHIR-41310)  ObservationScreeningResponse.hasMember[SupportedHasMember] can only reference an ObservationScreeningResponse.  Previously it could also reference a QuestionnaireResponse.


This update is focused on improving the readability of the IG narrative content.

### StructureDefinitions

* Included value set references in narrative for the multi-domain profiles (Condition, Goal, ServiceRequest, Procedure, and Observation)
* Improved narrative in all Profiles
* Abstract flag in [SDOHCCObservationAssessment] is now false - [FHIR-40460 ](https://jira.hl7.org/browse/FHIR-40460)
* Corrected bindings for output procedures in [SDOHCCTaskForReferralManagement]   - [FHIR-40586](https://jira.hl7.org/browse/FHIR-40586)
* Added slice to to ObservationScreeningResponse.member to reference all observations that are members of the group [FHIR-40611](https://jira.hl7.org/browse/FHIR-40611)
* Updated valuesets and state transition diagrams for  [SDOHCCTaskForReferralManagement].status and [SDOHCCTaskForPatient].status [FHIR-41199](https://jira.hl7.org/browse/FHIR-41199)
* Remove abstract from [SDOHCCGroup] Profile. [FHIR-41198](https://jira.hl7.org/browse/FHIR-41198)


### CapabilityStatements

* Improved Rendering of all Capability Statements using [tools](https://github.com/caspears/CapStatement) and additional [scripts](https://github.com/HL7/fhir-sdoh-clinicalcare/tree/master/capstmt). [FHIR-40449](https://jira.hl7.org/browse/FHIR-40449)

### Narrative
* The narrative has been restructured and edited and all of the figures redrawn to improve overall readability
* [Glossary](glossary.html) – Added glossary [FHIR-40450](https://jira.hl7.org/browse/FHIR-40450)

### FHIR Shorthand
* The IG is now being maintained in [FHIR Shorthand syntax](http://hl7.org/fhir/uv/shorthand/)

{% include markdown-link-references.md %}

---

// File: input/pagecontent/stu2_2_update_changes.md

### Jira Tickets – all applied -- see changes below

* [FHIR-44753](https://jira.hl7.org/browse/FHIR-44753) - Add new codes to SDOHCC ValueSet SDOH Category and update value set tables for ObservationScreeningResponse, Condition, Procedure, ServiceRequest and Goal profile
* [FHIR-46247](https://jira.hl7.org/browse/FHIR-46247) - Update "Assessment Instrument Support" Page
* [FHIR-46248](https://jira.hl7.org/browse/FHIR-46248) - Update "Gravity Value Sets" Page
* [FHIR-46249](https://jira.hl7.org/browse/FHIR-46249) - Add Additional Bindings Tables for Condition, Goal, OSR, ServiceRequest and Task Profiles
* [FHIR-46250](https://jira.hl7.org/browse/FHIR-46250) - Update Descriptions for Condition, Goal, OSR, ServiceRequest and Task Profiles
* [FHIR-46251](https://jira.hl7.org/browse/FHIR-46251) - Hyperlink QA
* [FHIR-46422](https://jira.hl7.org/browse/FHIR-46422) - Update Subscription Backport dependency version (from 0.1.0 to 1.1.0)

 



{% include markdown-link-references.md %}

---

// File: input/pagecontent/stu2_ballot_changes.md

### Jira Tickets – all applied -- see changes below

1. [FHIR-34237](https://jira.hl7.org/browse/FHIR-34237) -- Replace Task with a Task for Referrals and one for the Patient, and add documentation
   - Patient task should support surveys, documentation, and contact information
2. [FHIR-34238](https://jira.hl7.org/browse/FHIR-34238) -- Add Draft observations for race and ethnicity that support the identification of “source” and “method” of collection and add documentation – need US core exceptions from CPWG for observations – submitted variance request to CPG and was approved (see profiles)
3. [FHIR-34242](https://jira.hl7.org/browse/FHIR-34241) -- Change ServiceRequest and Procedure profiles to use US core value set for .code
4. [FHIR-34243](https://jira.hl7.org/browse/FHIR-34243) -- Change Condition profile to use US Core .code value set and provide guidance on the use of both SNOMED-CT and ICD-10 (as codings)
5. [FHIR-34244](https://jira.hl7.org/browse/FHIR-34244) -- Add profile for HealthcareService and Location to use in the Patient Task to indicate contact information
6. [FHIR-34246](https://jira.hl7.org/browse/FHIR-34246) -- Add Service order detail in the ServiceRequest to indicate that the service organization is not to call the patient/client
7. [FHIR-34255](https://jira.hl7.org/browse/FHIR-34255) -- Define workflow with patient involvement
8. [FHIR-34256](https://jira.hl7.org/browse/FHIR-34256) -- Define workflow with multiple services organization
9. [FHIR-34257](https://jira.hl7.org/browse/FHIR-34257) -- Add additional examples for each of the new / changed profiles /requirements
10. [FHIR-34236](https://jira.hl7.org/browse/FHIR-34236) -- Update profiles must support and element definitions based on feedback from implementers
11. [FHIR-34233](https://jira.hl7.org/browse/FHIR-34233) -- Add support for external terminologies as part of ServiceRequest and Procedure.
12. [FHIR-34339](https://jira.hl7.org/browse/FHIR-34239) -- Add Guidance on relationship between new Race and Ethnicity Observation with US Core

This ballot is focused on a number of additions and corrections based on feedback from  addresses several additions, modifications, technical corrections, errata, clarifications listed below.



### CodeSystems

Added values and notes [FHIR-34237](https://jira.hl7.org/browse/FHIR-34237), [FHIR-34238](https://jira.hl7.org/browse/FHIR-34238), [FHIR-34246](https://jira.hl7.org/browse/FHIR-34246)

* [SDOHCC CodeSystem Temporary Codes](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html)



### Value Sets

Adopted US Core Value Sets [FHIR-34233](https://jira.hl7.org/browse/FHIR-34233)

*  [FHIR-34243](https://jira.hl7.org/browse/FHIR-34243)

*  Condition: from [Condition/Problem/Diagnosis Codes]({{site.data.fhir.path}}valueset-condition-code.html) to [US Core Condition Code](http://{{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)
*  ServiceRequest: from [Procedure Codes (SNOMED CT)]({{site.data.fhir.path}}valueset-procedure-code.html) to [US Core Procedure Codes](http://{{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)
*  Procedure: from SDOHCC ValueSet SNOMEDCT CPT LOINC HCPCSII to [US Core Procedure Codes](http://{{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)



Removed Values Sets (no longer required) [FHIR-34233](https://jira.hl7.org/browse/FHIR-34233)

* [SDOHCC ValueSet HCPCSII](https://hl7.org/fhir/us/sdoh-clinicalcare/STU1/ValueSet-SDOHCC-ValueSetHCPCSII.html)
* [SDOHCC ValueSet ICD10CM](https://hl7.org/fhir/us/sdoh-clinicalcare/STU1/ValueSet-SDOHCC-ValueSetICD10CM.html)
* [SDOHCC ValueSet SNOMEDCT CPT LOINC HCPCSII](https://hl7.org/fhir/us/sdoh-clinicalcare/STU1/ValueSet-SDOHCC-ValueSetSNOMEDCTCPTLOINCHCPCSII.html)



Added Value Sets for Race/Ethnicity Observation Profile [FHIR-34238](https://jira.hl7.org/browse/FHIR-34238)

* [SDOHCC ValueSet Observation DataAbsentReason](ValueSet-SDOHCC-ValueSetObservationDataAbsentReason.html)
* [FHIR-34238](https://jira.hl7.org/browse/FHIR-34238) [SDOHCC ValueSet Observation Method](ValueSet-SDOHCC-ValueSetObservationMethod.html)



Added Value Sets for Patient Task [FHIR-34237](https://jira.hl7.org/browse/FHIR-34237)


* [SDOHCC ValueSet SDOH Questionnaire Category](ValueSet-SDOHCC-ValueSetSDOHQuestionnaireCategory.html)
* [SDOHCC ValueSet Task Code](ValueSet-SDOHCC-ValueSetTaskCode.html)
* [SDOHCC ValueSet Task Priority](ValueSet-SDOHCC-ValueSetTaskPriority.html)
* [SDOHCC ValueSet Task Status](ValueSet-SDOHCC-ValueSetTaskStatus.html)



Added values and notes [FHIR-34233](https://jira.hl7.org/browse/FHIR-34233)

* [SDOHCC ValueSet Observation Status](ValueSet-SDOHCC-ValueSetObservationStatus.html)
* [SDOHCC ValueSet SDOH Category](ValueSet-SDOHCC-ValueSetSDOHCategory.html)



### StructureDefinitions

US Core [FHIR-34233](https://jira.hl7.org/browse/FHIR-34233)

* Updated from 3.1.1 to 4.0.0



Updated Profiles [FHIR-34233](https://jira.hl7.org/browse/FHIR-34233)

* [SDOHCC Condition](StructureDefinition-SDOHCC-Condition.html) [FHIR-34243](https://jira.hl7.org/browse/FHIR-34243)

- - Changed Condition.code value set to use [US Core Condition Code](http://{{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html) value set.

- - Added guidance on use of SDOH value sets



* [SDOHCC Goal](StructureDefinition-SDOHCC-Goal.html) [FHIR 34233](https://jira.hl7.org/browse/FHIR-34233)

* * Added guidance on use of SDOH value sets in VSAC

- - Make Goal.value due date MS




* [SDOHCC Procedure](StructureDefinition-SDOHCC-Procedure.html) [FHIR-34233](https://jira.hl7.org/browse/FHIR-34233), [FHIR-34242](https://jira.hl7.org/browse/FHIR-34242)

- - Procedure.code -- added reference to [US Core Condition Code](http://{{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html) value set [FHIR-34233](https://jira.hl7.org/browse/FHIR-34233)

- - Procedure.code.coding -- added slice for example of social services taxonomy (e.g. 211 LA) as Must Support



* [SDOHCC ServiceRequest](StructureDefinition-SDOHCC-ServiceRequest.html) [FHIR-34246](https://jira.hl7.org/browse/FHIR-34246), [FHIR-34233](https://jira.hl7.org/browse/FHIR-34233), [FHIR-34242](https://jira.hl7.org/browse/FHIR-34242)

* * ServiceRequest.status –- updated guidance

* * ServiceRequest.code -- removed slices and added reference to US Core Procedure value set

* * ServiceRequest.code.coding -- added slice for example of social services taxonomy (e.g. 211 LA) as Must Support

* * ServiceRequest.reasonReference – added guidance
* * ServiceRequest.orderDetail -- added order detail to indicate that the service organization is not to call the patient/client


Added new profiles


* [SDOHCC Healthcare Service](StructureDefinition-SDOHCC-HealthcareService.html) [FHIR-34244](https://jira.hl7.org/browse/FHIR-34244), [FHIR-34237](https://jira.hl7.org/browse/FHIR-3437)
* * Extension: [SDOHCC Extension HealthcareService Telecom Appointment](StructureDefinition-SDOHCC-ExtensionHealthcareServiceTelecomAppointment.html) [FHIR-34244](https://jira.hl7.org/browse/FHIR-34244), [FHIR-34237](https://jira.hl7.org/browse/FHIR-34237)


* [SDOHCC Location](StructureDefinition-SDOHCC-Location.html) [FHIR-34244](https://jira.hl7.org/browse/FHIR-34244), [FHIR-34237](https://jira.hl7.org/browse/FHIR-34237)
* [SDOHCC Task For Patient](StructureDefinition-SDOHCC-TaskForPatient.html)  [FHIR-34244](https://jira.hl7.org/browse/FHIR-34244), [FHIR-34237](https://jira.hl7.org/browse/FHIR-34237)
* [SDOHCC Task For Referral Management](StructureDefinition-SDOHCC-TaskForReferralManagement.html) [FHIR-34237](https://jira.hl7.org/browse/FHIR-34237)

New Draft Observation Profiles for Race and Ethnicity

* [SDOHCC Observation Ethnicity OMB](StructureDefinition-SDOHCC-ObservationEthnicityOMB.html) [FHIR-34238](https://jira.hl7.org/browse/FHIR-34238), [FHIR-34339](https://jira.hl7.org/browse/FHIR-34239)
* [SDOHCC Observation Race OMB](StructureDefinition-SDOHCC-ObservationRaceOMB.html) [FHIR-34238](https://jira.hl7.org/browse/FHIR-34238), [FHIR-34339](https://jira.hl7.org/browse/FHIR-34239)

Removed

* [SDOHCC Task](https://hl7.org/fhir/us/sdoh-clinicalcare/STU1/StructureDefinition-SDOHCC-Task.html) [FHIR-34237](https://jira.hl7.org/browse/FHIR-34237)

### CapabilityStatements

Changed name and updated content

* From [SDOH Clinical Care Coordination Platform](https://hl7.org/fhir/us/sdoh-clinicalcare/STU1/CapabilityStatement-SDOH-ClinicalCareCoordinationPlatform.html) to [SDOHCC Coordination Platform Capability Statement](CapabilityStatement-SDOHCC-CoordinationPlatform.html)
* From [SDOH Clinical Care Referral Recipient - Light](https://hl7.org/fhir/us/sdoh-clinicalcare/STU1/CapabilityStatement-SDOH-ClinicalCareReferralRecipientLight.html) to [SDOHCC Referral Recipient - Light](CapabilityStatement-SDOHCC-ReferralRecipientLight.html)
* From [SDOH Clinical Care Referral Recipient](https://hl7.org/fhir/us/sdoh-clinicalcare/STU1/CapabilityStatement-SDOH-ClinicalCareReferralRecipient.html) to [SDOHCC Referral Recipient](CapabilityStatement-SDOHCC-ReferralRecipient.html)
* From [SDOH Clinical Care Referral Source](https://hl7.org/fhir/us/sdoh-clinicalcare/STU1/CapabilityStatement-SDOH-ClinicalCareReferralSource.html) to  [SDOHCC Referral Source](CapabilityStatement-SDOHCC-ReferralSource.html)

Added CapabilityStatement

* [SDOHCC Patient Application](CapabilityStatement-SDOHCC-PatientApp.html) [FHIR-34255](https://jira.hl7.org/browse/FHIR-34255)

### Documentation

* [Home Page](index.html) – added reference to new content
* [STU2 Ballot Changes](stu2_ballot_changes.html) – this page
* Functional Use Cases – added Patient/Client use case [FHIR-34255](https://jira.hl7.org/browse/FHIR-34255)
* Support for Multiple Domains – added support for VSAC group value sets [FHIR-34236](https://jira.hl7.org/browse/FHIR-34236)
* Exchange Workflow – added new workflow for Patient/Client and CBO applications [FHIR-34255](https://jira.hl7.org/browse/FHIR-34255), [FHIR-34256](https://jira.hl7.org/browse/FHIR-34256)
* [Connecting Applications with API Data Sources](connecting_applications_with_api_data_sources.html) -- new [FHIR-34255](https://jira.hl7.org/browse/FHIR-34255)
* FHIR Artifacts Overview[artifacts.html] – updated to refer to new or changed artifacts
* [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html)-- new [FHIR-34339](https://jira.hl7.org/browse/FHIR-34239)



### Examples

* Many of the examples have been renamed, updated, or added to appropriately provide examples of the changes noted above [FHIR-34257](https://jira.hl7.org/browse/FHIR-34257)

{% include markdown-link-references.md %}

---

// File: input/pagecontent/stu2_changes.md

### Jira Tickets – all applied -- see changes below

1. FHIR-34237 -- Replace Task with a Task for Referrals and one for the Patient, and add documentation
   - Patient task should support surveys, documentation, and contact information
2. FHIR-34238 -- Add Draft observations for race and ethnicity that support the identification of “source” and “method” of collection and add documentation – need US core exceptions from CPWG for observations – submitted variance request to CPG and was approved (see profiles)
3. FHIR-34242 -- Change ServiceRequest and Procedure profiles to use US core value set for .code
4. FHIR-34243 -- Change Condition profile to use US Core .code value set and provide guidance on the use of both SNOMED-CT and ICD-10 (as codings)
5. FHIR-34244 -- Add profile for HealthcareService and Location to use in the Patient Task to indicate contact information
6. FHIR-34246 -- Add Service order detail in the ServiceRequest to indicate that the service organization is not to call the patient/client
7. FHIR-34255 -- Define workflow with patient involvement
8. FHIR-34256 -- Define workflow with multiple services organization
9. FHIR-34257 -- Add additional examples for each of the new / changed profiles /requirements
10. FHIR-34236 -- Update profiles must support and element definitions based on feedback from implementers
11. FHIR-34233 -- Add support for external terminologies as part of ServiceRequest and Procedure.
12. FHIR-34339 -- Add Guidance on relationship between new Race and Ethnicity Observation with US Core

This ballot is focused on a number of additions and corrections based on feedback from  addresses several additions, modifications, technical corrections, errata, clarifications listed below.



### CodeSystems

Added values and notes (FHIR-34237) (FHIR-34238) (FHIR-34246)

* [SDOHCC CodeSystem Temporary Codes](CodeSystem-SDOHCC-CodeSystemTemporaryCodes.html)



### Value Sets

Adopted US Core Value Sets(FHIR-34233) ( FHIR-34243)

* Condition: from [Condition/Problem/Diagnosis Codes]({{site.data.fhir.path}}valueset-condition-code.html) to [US Core Condition Code](http://{{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html)
* ServiceRequest: from [Procedure Codes (SNOMED CT)]({{site.data.fhir.path}}valueset-procedure-code.html) to [US Core Procedure Codes](http://{{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)
* Procedure: from SDOHCC ValueSet SNOMEDCT CPT LOINC HCPCSII to [US Core Procedure Codes](http://{{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html)



Removed Values Sets (no longer required) (FHIR-34233)

* [SDOHCC ValueSet HCPCSII](http://hl7.org/fhir/us/sdoh-clinicalcare/STU1/ValueSet-SDOHCC-ValueSetHCPCSII.html)
* [SDOHCC ValueSet ICD10CM](http://hl7.org/fhir/us/sdoh-clinicalcare/STU1/ValueSet-SDOHCC-ValueSetICD10CM.html)
* [SDOHCC ValueSet SNOMEDCT CPT LOINC HCPCSII](http://hl7.org/fhir/us/sdoh-clinicalcare/STU1/ValueSet-SDOHCC-ValueSetSNOMEDCTCPTLOINCHCPCSII.html)



Added Value Sets for Race/Ethnicity Observation Profile (FHIR-34238)

* [SDOHCC ValueSet Observation DataAbsentReason](ValueSet-SDOHCC-ValueSetObservationDataAbsentReason.html)
* [(FHIR-34238)SDOHCC ValueSet Observation Method](ValueSet-SDOHCC-ValueSetObservationMethod.html)



Added Value Sets for Patient Task (FHIR-34237)

* [SDOHCC ValueSet SDOH Questionnaire Category](ValueSet-SDOHCC-ValueSetSDOHQuestionnaireCategory.html)
* [SDOHCC ValueSet Task Code](ValueSet-SDOHCC-ValueSetTaskCode.html)
* [SDOHCC ValueSet Task Priority](ValueSet-SDOHCC-ValueSetTaskPriority.html)
* [SDOHCC ValueSet Task Status](ValueSet-SDOHCC-ValueSetTaskStatus.html)



Added values and notes (FHIR-34236)

* [SDOHCC ValueSet Observation Status](ValueSet-SDOHCC-ValueSetObservationStatus.html)
* [SDOHCC ValueSet SDOH Category](ValueSet-SDOHCC-ValueSetSDOHCategory.html)



### StructureDefinitions

US Core (FHIR-34236)

* Updated from 3.1.1 to 4.0.0



Updated Profiles (FHIR-34236)

* [SDOHCC Condition](StructureDefinition-SDOHCC-Condition.html) (FHIR-34243)

- - Changed Condition.code value set to use [US Core Condition Code](http://{{site.data.fhir.ver.uscore}}/ValueSet-us-core-condition-code.html) value set.

- - Added guidance on use of SDOH value sets



* [SDOHCC Goal](StructureDefinition-SDOHCC-Goal.html) (FHIR 34236)

* * Added guidance on use of SDOH value sets in VSAC

- - Make Goal.value due date MS




* [SDOHCC Procedure](StructureDefinition-SDOHCC-Procedure.html) (FHIR-34233) (FHIR-34242)

- - Procedure.code -- added reference to [US Core Condition Code](http://{{site.data.fhir.ver.uscore}}/ValueSet-us-core-procedure-code.html) value set (FHIR-34233)

- - Procedure.code.coding -- added slice for example of social services taxonomy (e.g. 211 LA) as Must Support



* [SDOHCC ServiceRequest](StructureDefinition-SDOHCC-ServiceRequest.html) (FHIR-34246) (FHIR-34233) (FHIR-34242)

* * ServiceRequest.status –- updated guidance

* * ServiceRequest.code -- removed slices and added reference to US Core Procedure value set

* * ServiceRequest.code.coding -- added slice for example of social services taxonomy (e.g. 211 LA) as Must Support

* * ServiceRequest.reasonReference – added guidance

* * ServiceRequest.orderDetail -- added order detail to indicate that the service organization is not to call the patient/client



Added new profiles


* [SDOHCC Healthcare Service](StructureDefinition-SDOHCC-HealthcareService.html) (FHIR-34244) (FHIR-34237)

* * Extension: [SDOHCC Extension HealthcareService Telecom Appointment](StructureDefinition-SDOHCC-ExtensionHealthcareServiceTelecomAppointment.html) (FHIR-34244) (FHIR-34237)


* [SDOHCC Location](StructureDefinition-SDOHCC-Location.html) (FHIR-34244) (FHIR-34237)
* [SDOHCC Task For Patient](StructureDefinition-SDOHCC-TaskForPatient.html)  (FHIR-34244) (FHIR-34237)
* [SDOHCC Task For Referral Management](StructureDefinition-SDOHCC-TaskForReferralManagement.html) (FHIR-34237)



New Draft Observation Profiles for Race and Ethnicity

* [SDOHCC Observation Ethnicity OMB](StructureDefinition-SDOHCC-ObservationEthnicityOMB.html) (FHIR-34238) (FHIR-34339)
* [SDOHCC Observation Race OMB](StructureDefinition-SDOHCC-ObservationRaceOMB.html) (FHIR-34238) (FHIR-34339)



Removed

* [SDOHCC Task](http://hl7.org/fhir/us/sdoh-clinicalcare/STU1/StructureDefinition-SDOHCC-Task.html) (FHIR-34237)



### CapabilityStatements

Changed name and updated content

* From [SDOH Clinical Care Coordination Platform](http://hl7.org/fhir/us/sdoh-clinicalcare/STU1/CapabilityStatement-SDOH-ClinicalCareCoordinationPlatform.html) to [SDOHCC Coordination Platform Capability Statement](CapabilityStatement-SDOHCC-CoordinationPlatform.html)
* From [SDOH Clinical Care Referral Recipient - Light](http://hl7.org/fhir/us/sdoh-clinicalcare/STU1/CapabilityStatement-SDOH-ClinicalCareReferralRecipientLight.html) to [SDOHCC Referral Recipient - Light](CapabilityStatement-SDOHCC-ReferralRecipientLight.html)
* From [SDOH Clinical Care Referral Recipient](http://hl7.org/fhir/us/sdoh-clinicalcare/STU1/CapabilityStatement-SDOH-ClinicalCareReferralRecipient.html) to [SDOHCC Referral Recipient](CapabilityStatement-SDOHCC-ReferralRecipient.html)
* From [SDOH Clinical Care Referral Source](http://hl7.org/fhir/us/sdoh-clinicalcare/STU1/CapabilityStatement-SDOH-ClinicalCareReferralSource.html) to  [SDOHCC Referral Source](CapabilityStatement-SDOHCC-ReferralSource.html)



Added CapabilityStatement

* [SDOHCC Patient Application](CapabilityStatement-SDOHCC-PatientApp.html) (FHIR-34255)



### Documentation

* [Home Page](index.html) – added reference to new content
* [STU2 Changes](stu2_changes.html) – this page
* Functional Use Cases – added Patient/Client use case (FHIR-34255) (FHIR-34255)
* Support for Multiple Domains – added support for VSAC group value sets (FHIR-34236)
* Exchange Workflow] – added new workflow for Patient/Client and CBO applications (FHIR-34255) (FHIR-34256)
* Synchronizing Applications with API Data Sources -- new (FHIR-34255)
* FHIR Artifacts Overview – updated to refer to new or changed artifacts
* [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html)-- new (FHIR-34339)



### Examples

* Many of the examples have been renamed, updated, or added to appropriately provide examples of the changes noted above (FHIR-34257)

---

// File: input/pagecontent/stu2_publication_changes.md

### Jira Tickets – all applied -- see changes below

#### Index

- [FHIR-35753](https://jira.hl7.org/browse/FHIR-35753)	Home page should have compelling sale of problem and solution spec solves/offers
  - Provided link to gravity project on the home page

#### General Changes

- [FHIR-38772](https://jira.hl7.org/browse/FHIR-38772)	Document change from US Core 4.0.0 to US Core 3.1.1
  - Changed base reference to US Core to 3.1.1 and adjusted any structure definitions required
- [FHIR-34857](https://jira.hl7.org/browse/FHIR-34857)	Update reference to US Core MS and Missing Data
  - [Updated references to US Core MS and Missing Data](mustsupport_and_missing_data.html)

#### Mapping

- [FHIR-38082](https://jira.hl7.org/browse/FHIR-38082)	Beef up the mapping instructions page
- [FHIR-38081](https://jira.hl7.org/browse/FHIR-38081)	Mapping page should not have the mapping language content
  - updated mapping instructions

#### Task Instructions

- [FHIR-37480](https://jira.hl7.org/browse/FHIR-37480)	Add Task.output slice to allow patient to indicate their "chosen-contact"
- [FHIR-35750](https://jira.hl7.org/browse/FHIR-35750)	Suggest more robust requirements around using Task for patient Communications
- [FHIR-35634](https://jira.hl7.org/browse/FHIR-35634)	Clarify SDOH Task distinction
- [FHIR-35746](https://jira.hl7.org/browse/FHIR-35746)	Be clear on what the patient can change in Task
- [FHIR-35740](https://jira.hl7.org/browse/FHIR-35740)	Tighter specification around the updating of Task fields by Patient.
- [FHIR-35751](https://jira.hl7.org/browse/FHIR-35751)	Link to this in the relevant context
- [FHIR-35739](https://jira.hl7.org/browse/FHIR-35739)	Examples should show historical progression with statuses
  - Added the above changes to the [checking task status](checking_task_status.html) page

#### Personal Characteristics

- [FHIR-34876](https://jira.hl7.org/browse/FHIR-34876)	Need specificity in requirements, e.g., state statutes.
- [FHIR-34863](https://jira.hl7.org/browse/FHIR-34863)	References from Race Profile to Spec Requirements
- [FHIR-34862](https://jira.hl7.org/browse/FHIR-34862)	References from Ethnicity Profile to Spec Requirements
- [FHIR-34860](https://jira.hl7.org/browse/FHIR-34860)	State Requirements Unclear
- [FHIR-34858](https://jira.hl7.org/browse/FHIR-34858)	Race and Ethnicity Text
- [FHIR-35679](https://jira.hl7.org/browse/FHIR-35679)	Illustrate that laws vary around sharing of race and ethnicity data
- [FHIR-35685](https://jira.hl7.org/browse/FHIR-35685)	Observation Subject Extension - use in Observation Profiles for Race and Ethnicity
- [FHIR-35338](https://jira.hl7.org/browse/FHIR-35338)	Concern over race and ethnicity data of "related person" and "practitioner"
- [FHIR-35329](https://jira.hl7.org/browse/FHIR-35329)	Concern over patient race and ethnicity data being shared for non-treatment purposes
- [FHIR-35022](https://jira.hl7.org/browse/FHIR-35022)	Use a single Observation Resource to include both Race and Ethnicity Observations
- [FHIR-34999](https://jira.hl7.org/browse/FHIR-34999)	Adding R/E Observations to the Structured Definitions without indicating they are draft will cause implementation confusion
- [FHIR-35691](https://jira.hl7.org/browse/FHIR-35691)	"Unknown" is not appropriate as an observation method
- [FHIR-34878](https://jira.hl7.org/browse/FHIR-34878)	Need to consider Provenance when R/E Extensions and Observation Resource is used for R/E
- [FHIR-35327](https://jira.hl7.org/browse/FHIR-35327)	For Observation.method value set, add guidance related to use of "observed"
- [FHIR-35325](https://jira.hl7.org/browse/FHIR-35325)	For Observation.method value set, clarify the definition of "reported-by-related-person" and add guidance related to use of "self-reported" and "reported-by-related-person"
- [FHIR-35206](https://jira.hl7.org/browse/FHIR-35206)	Patient Application Client CapabilityStatement does not include Observation therefore patients will not be able to Read nor search for R/E Observation Profiles
- [FHIR-35715](https://jira.hl7.org/browse/FHIR-35715)	Unclear what adhoc and adhocresponse are - please clarify
- [FHIR-35370](https://jira.hl7.org/browse/FHIR-35370)	For Observation.method value set, add guidance related to use of "observed".
- [FHIR-35375](https://jira.hl7.org/browse/FHIR-35375)	Add a challenge related to the sensitivity of SDOH data
  - Updated the [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html) page and referenced artifacts

#### Value set changes

- [FHIR-36591](https://jira.hl7.org/browse/FHIR-36591)	Add on-hold to the value set for .status to support patient inability to perform task for a period of time
  - Added on-hold to the [Task Status Valueset](ValueSet-SDOHCC-ValueSetTaskStatus.html)


#### Functional Use Cases

- [FHIR-35718](https://jira.hl7.org/browse/FHIR-35718)	Restructure and add diagrams to make functional requirements of spec clear
- [FHIR-35639](https://jira.hl7.org/browse/FHIR-35639)	The patient should be given an opportunity to weigh in on whether the referral was successful and goals have been accomplished (or progress made)
- [FHIR-35633](https://jira.hl7.org/browse/FHIR-35633)	Clarifications related to Closing the Loop
- [FHIR-35623](https://jira.hl7.org/browse/FHIR-35623)	Clarify: what happens when the CP shares that info with the CBO or other agency assisting with the Food Insecurity?
- [FHIR-35621](https://jira.hl7.org/browse/FHIR-35621)	What is the CP doing on behalf of the provider organization that renders it a business associate?
- [FHIR-35377](https://jira.hl7.org/browse/FHIR-35377)	Additional info about what a CP is might be helpful here
- [FHIR-34881](https://jira.hl7.org/browse/FHIR-34881)	Referral workflow steps need to be aligned
  - Applied the above ticket dispositions to the Functional Use Cases page

#### Structure Definitions

- [FHIR-34891](https://jira.hl7.org/browse/FHIR-34891)	Please relax Goal.Achievement cardinality to 0..1 to align with goals that are proposed or planned
  - changed goal.achievement cardinality to 0..1
- [FHIR-35369](https://jira.hl7.org/browse/FHIR-35369)	Streamline representation of SDOH screening instruments
  - based on US Core decision, change grouping observation to have individual observations for multiple selection questions

#### Exchange Workflow

- [FHIR-35733](https://jira.hl7.org/browse/FHIR-35733)	Patient interaction diagrams need more clarity
- [FHIR-35721](https://jira.hl7.org/browse/FHIR-35721)	Recommend better definition and consistence with diagram and rest of 9
- [FHIR-35717](https://jira.hl7.org/browse/FHIR-35717)	Move this section up so that it is easier to find
- [FHIR-35637](https://jira.hl7.org/browse/FHIR-35637)	Workflow and Managing Consent diagram should be expanded to include API Resources
  - Applied the above ticket dispositions to the Exchange Workflow page

#### Capability Statements

- [FHIR-36045](https://jira.hl7.org/browse/FHIR-36045)	Procedure _id search parameter Definition & Chaining makes reference to PractitionerRole records
- [FHIR-35960](https://jira.hl7.org/browse/FHIR-35960)	Subscription in the capability statements has SDOHCC-Procedure as the supported Profile
- [FHIR-35076](https://jira.hl7.org/browse/FHIR-35076)	Capability Statements - Please provide specific conformance assertions with respect to the various supported profiles
  - updated [capability statements](artifacts.html#capability-statements)

#### Privacy and Security

- [FHIR-35676](https://jira.hl7.org/browse/FHIR-35676)	Add language to clarify that not all legal requests are up to org policy - HIPAA has specific procedures that must be followed regarding these types of disclosures
  * added clarification to the [Privacy and Security](privacy_and_security.html) page

---

// File: input/pagecontent/support_for_multiple_domains.md

### Rationale
It is difficult to capture in the IG the full extent of the terminology inter-dependencies. Rather than build hundreds of profiles we have chosen to enumerate the relationships between value choice between dependent data elements. For example, in Observation when the SDOH category is ‘EducationalAttainment’ there is a specific subset of values  that can be used for the Observation.code. Within VSAC and our additional documentation we have tried to make these relationships clear.

We expect implementers to review the terminology documents below and implement logic to validate or use the correct term pairings. Again, we chose to not create hundreds of FHIR profiles with the pairings, as the logic is straightforward (e.g. if SDOH category X then code uses values from set Y) and redundant. Our tables of dependencies can be used to create lookup tables for validation or profile creation. By choosing to not create hundreds of profiles we have sought to both simplify and free implementers to use their own means to implement the required logic.

###  Code Systems and Value Sets

SDOH Clinical Care Implementation Guide is intended to support multiple SDOH domains and use domain specific value sets as they are created and approved by the Gravity Project.  The [Gravity Confluence Terminology Workstream](https://confluence.hl7.org/display/GRAV/Terminology+Workstream+Dashboard) describes the terminology identification and creation process.  To enable this, we are taking the following approach regarding terminologies and value sets related to profiles defined by this IG.

Each profile element that defines specific SDOH coded concepts will reference the entire code system or in some cases multiple codes systems from which the domain specific values (value set) will be defined.  It is our intent to define the specific value sets for each domain in the [NIH Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/) database (as they are created and validated) and the survey instruments in LOINC.  The Gravity Project will publish guidance for each of the SDOH elements in a separate [supplemental guide](https://confluence.hl7.org/display/GRAV/Supplemental+Guide) and update the guide at least twice a year.  Use of the supplemental guide is optional, but highly recommended.  Consensus based values are indicated in the supplemental guide along with values that are more general or commonly used but may be deprecated as the Gravity Project terminology work progresses.

The Gravity Project plans to work with the HL7 Vocabulary WG to determine how best to represent the domain specific value sets in each of the relevant resources and to establish appropriate methods to validate the consistent use of the correct domain specific codes. Future versions of this IG will include the logic to select specific value sets based on the SDOH domain.

In this IG, the exchange of the following activities is supported with specific SDOH profiles on either the base resources or on the respective [US Core Profile ](http://{{site.data.fhir.ver.uscore}}/index.html). A complete listing of the resources used is contained in the [FHIR Artifacts Overview](fhir_artifacts_overview.html) page.  The following is a brief summary focused on the specific activities:

* Assessments
  * [Observation](StructureDefinition-SDOHCC-ObservationScreeningResponse.html) profile based on the [Survey process](survey_instrument_support.html) defined in this IG uses [LOINC](https://loinc.org/) codes.  Each of the supported survey instruments are defined as [Survey Panels](https://loinc.org/panels/category/survey-instruments/) in the LOINC database.
  * [Observation](StructureDefinition-SDOHCC-ObservationAssessment.html) profile based on an interaction between a caregiver and the patient uses both [LOINC](https://loinc.org/)  and [SNOMED CT](http://www.snomed.org/) codes to describe SDOH conditions.
* Health Concerns / Problems
  * [Condition](StructureDefinition-SDOHCC-Condition.html) profile that uses both [SNOMED CT](http://www.snomed.org/) and ICD-10 codes generated by the Survey process defined in this IG.  The Gravity Project recommends defining the relevant codes in the mapping instructions for each Survey instrument utilizing the consensus values defined by the Gravity Project terminology workstream.
* Goals
  *  [Goal](StructureDefinition-SDOHCC-Goal.html) profile that uses both [LOINC](https://loinc.org/)  and [SNOMED CT](http://www.snomed.org/) codes for patient goals, and domain specific goals.
* Interventions/Referrals
  * [Service Request](StructureDefinition-SDOHCC-ServiceRequest.html) profile and [Procedure](StructureDefinition-SDOHCC-Procedure.html) profile use a combination of terminologies ([SNOMED CT Procedure Codes](http://www.snomed.org/), [HCPCS II](https://terminology.hl7.org/2.1.0/CodeSystem-HCPCS-all-codes.html), [CPT](http://{{site.data.fhir.ver.hl7tx}}/CodeSystem-v3-cpt-r.html), and occasionally [LOINC](https://loinc.org/)  ) to define specific referrals and interventions that may be domain specific, cross domains or reflect a subset of a domain specific health concerns, problems, and goals.

###  External Value Set Guidance

Servers  **SHOULD** use the following SDOH value sets when a code exists that describes the concept.  The value sets are maintained in the [Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/).  The following group value sets are for health conditions, goals, service requests and procedures respectively.

·    [Social Determinants of Health Conditions Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.788/expansion)

·    [Social Determinants of Health Goals Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.71/expansion)

·    [Social Determinants of Health Service Requests Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.790/expansion)

·    [Social Determinants of Health Procedures Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.789/expansion)

The Figure below illustrates how the SDOH group value set is structured for the  Condition Profile. When recording SDOH data, servers **SHOULD** use the SDOH value sets

 **Example of VSAC SDOH Group Value Set for Condition.Code**

<table><tr><td><img src="VSACValueSet.jpg" /></td></tr></table>

The following SDOH profile elements  **SHOULD** use values from the associated VSAC group value set for the specific SDOH domain when a relevant value is defined.

| SDOH Profile                                                 | Element             | Base Value Set                                               | VSAC Group Value Set                                         |
| ------------------------------------------------------------ | ------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| =================                                            | ===============     | ==================                                           | +................................................................................................................+ |
| [SDOHCCCondition](StructureDefinition-SDOHCC-Condition.html) | Condition.code      | [US Core Condition Code]({{site.data.fhir.ver.uscore}}/ValueSet/us-core-condition-code) | [Social Determinants of Health Conditions Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.788/expansion) |
| [SDOHCCGoal](StructureDefinition-SDOHCC-Goal.html)           | Goal.description    | [SDOHCC Goal Codes](http://hl7.org/fhir/us/sdoh-clinicalcare/STU1/ValueSet-SDOHCC-ValueSetLOINCSNOMEDCT.html) | [Social Determinants of Health Goals Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.71/expansion) |
| [SDOHCCServiceRequest](StructureDefinition-SDOHCC-ServiceRequest.html) | ServiceRequest.code | [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet/us-core-procedure-code) | [Social Determinants of Health Service Requests Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.790/expansion) |
| [SDOHCCProcedure](StructureDefinition-SDOHCC-Procedure.html) | Procedure.code      | [US Core Procedure Codes]({{site.data.fhir.ver.uscore}}/ValueSet/us-core-procedure-code) | [Social Determinants of Health Procedures Value Set](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.789/expansion) |

### Support for external terminologies for ServiceRequest and Procedure

If implementers of this IG wish to use terminologies that are not part of the required value sets for specific elements that have a type of CodableConcept (such as ServiceRequest.code and Procedure.code) they may include a specific Coding that specifies a system (URL that is defined and supported by the terminology author) as well as the specific code (define in the terminology) as long as the meaning of the code is a concept that is logically the same as, or contained in the concept, of the required code.

The following is an example for a ServiceRequest or Procedure where the external terminology

URL is  : http://terminologysystem and the code is : SummerProgram

		"code" : {
  	  "coding" : [
   	   {
 	       "system" : "http://snomed.info/sct",
	        "code" : "467681000124101",
	        "display" : "Assistance with application for Summer Food Service Program"
	      }
	      ]
	    },
	    {
	      "coding" : [
	        {
	          "system" : "http://terminologysystem",
	          "code" : "SummerProgram",
	          "display" : "Summer Food Service Program"
	        }
	      ]
	    }
	  ],


---

// File: input/pagecontent/technical_background.md

###  Underlying Technologies
This guide is based on the [HL7 FHIR](http://www.hl7.org/implement/standards/product_brief.cfm?product_id=491) standard. Therefore, implementers of this specification need to understand some basic information about the FHIR specification.


This Implementation Guide uses terminology, notations and design principles that are specific to FHIR. Before reading this IG, it’s important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following prior to reading the rest of this IG.

* 	[FHIR overview](http://www.hl7.org/fhir/R4/overview.html)
* 	[Developer's introduction (or Clinical introduction)](http://www.hl7.org/fhir/R4/overview-dev.html)
* 	[FHIR data types](http://www.hl7.org/fhir/R4/datatypes.html)
* 	[Using codes](http://www.hl7.org/fhir/R4/codesystem.html)
* 	[References between resources](http://www.hl7.org/fhir/R4/references.html)
* 	How to read [resource](http://www.hl7.org/fhir/R4/resourcelist.html) & [profile](http://www.hl7.org/fhir/R4/profiling.html) definitions
*   [RESTful API](http://www.hl7.org/fhir/R4/http.html)
*   [Search](http://www.hl7.org/fhir/R4/search.html)
*   [Base resource definitions](http://www.hl7.org/fhir/R4/resource.html)
  * [Condition](http://www.hl7.org/fhir/R4/condition.html)
  * [Consent](http://www.hl7.org/fhir/R4/consent.html)
  * [Goal](http://www.hl7.org/fhir/R4/goal.html)
  * [Group](http://www.hl7.org/fhir/R4/group.html)
  * [Healthcare Service](http://www.hl7.org/fhir/R4/healthcareservice.html)
  * [Location](http://www.hl7.org/fhir/R4/location.html)
  * [Observation](http://www.hl7.org/fhir/R4/observation.html)
  * [Procedure](http://www.hl7.org/fhir/R4/procedure.html)
  * [ServiceRequest](http://www.hl7.org/fhir/R4/servicerequest.html)
  * [Task](http://www.hl7.org/fhir/R4/task.html)

Implementers should also be familiar with the following Implementation Guides used by this specification:

* [US Core]({{site.data.fhir.ver.uscore}}/index.html)
* [Structured Data Capture]({{site.data.fhir.ver.sdc}}/index.html) 
  * [extraction]({{site.data.fhir.ver.sdc}}/extraction.html#map-extract)
  * [rendering]({{site.data.fhir.ver.sdc}}/rendering.html)
  * [behavior]({{site.data.fhir.ver.sdc}}/behavior.html)

This IG supports the [R4 version](http://hl7.org/fhir/R4) of the FHIR standard. 

---

// File: input/includes/markdown-link-references.md



<!-- Gravity Confluence  -->
[Patient Stories]: https://confluence.hl7.org/display/GRAV/Patient+Stories
[Gravity Confluence Technology Pages]: https://confluence.hl7.org/display/GRAV/Technical+Workstream+Dashboard
[Gravity Project]:  https://confluence.hl7.org/display/GRAV/The+Gravity+Project
[Use Cases]: https://confluence.hl7.org/display/GRAV/Gravity+Use+Case+Package

<!-- # Other IGs -->
[US Core Implementation Guide]: https://www.hl7.org/fhir/us/core/
[HL7 Structured Data Capture IG]: https://hl7.org/fhir/uv/sdc/STU3/extraction.html#structuremap-based-extraction
[Bulk Data exchange IG]: https://hl7.org/fhir/uv/bulkdata/

<!--# Technical IG Content -->
[SDOHCC Observation Screening Response]: StructureDefinition-SDOHCC-ObservationScreeningResponse.html
[SDOHCC Observation Assessment]: StructureDefinition-SDOHCC-ObservationAssessment.html
[SDOHCC ServiceRequest]: StructureDefinition-SDOHCC-ServiceRequest.html
[SDOHCC Task For Referral Management]: StructureDefinition-SDOHCC-TaskForReferralManagement.html
[SDOHCC Service Request]: StructureDefinition-SDOHCC-ServiceRequest.html
[SDOHCC Goal]: StructureDefinition-SDOHCC-Goal.html
[SDOHCC Healthcare Service]: StructureDefinition-SDOHCC-HealthcareService.html
[SDOHCC Procedure]: StructureDefinition-SDOHCC-Procedure.html
[SDOHCC Condition]: StructureDefinition-SDOHCC-Condition.html
[SDOHCC Consent]: StructureDefinition-SDOHCC-Consent.html
[SDOHCC ValueSet SDOH Category]: ValueSet-SDOHCC-ValueSetSDOHCategory.html

[QuestionnaireResponse]: https://hl7.org/fhir/R4B/questionnaireresponse.html
[Questionnaire]: https://hl7.org/fhir/R4B/questionnaire.html

<!--# SDC -->
[SDC QuestionnaireResponse]: https://hl7.org/fhir/us/sdc/sdc-questionnaireresponse.html
[SDC Questionnaire]: https://hl7.org/fhir/us/sdc/sdc-questionnaire.html
[StructureMap]: https://www.hl7.org/fhir/structuremap.html
[Timing]: https://www.hl7.org/fhir/datatypes.html#timing

<!--# Document Sections --> 
[Referral Workflow]: referral_workflow.html
[Patient Workflow]: referral_workflow.html#patientworkflow
[Assessment Instrument Support]: assessment_instrument_support.html
[Observations]: {{site.data.fhir.path}}observation.html
[Conditions]: {{site.data.fhir.path}}condition.html
[StructureMap]: {{site.data.fhir.path}}structuremap.html
[DocumentReference]: {{site.data.fhir.path}}documentreference.html
[FHIR Mapping Language]: {{site.data.fhir.path}}mapping-language.html
[Exchange Workflow]: referral_workflow.html
[Capability Statements]: artifacts.html#capability-statements
[SDOHCC Task For Referral Management]: StructureDefinition-SDOHCC-TaskForReferralManagement.html
[SDOHCC Task For Patient]: StructureDefinition-SDOHCC-TaskForReferralManagement.html
[SDOHCC ServiceRequest]: StructureDefinition-SDOHCC-ServiceRequest.html
[Gravity Project]:  https://confluence.hl7.org/display/GRAV/The+Gravity+Project
[US Core Implementation Guide]: https://www.hl7.org/fhir/us/core/
[Gravity Confluence Technology Pages]: https://confluence.hl7.org/display/GRAV/Technical+Workstream+Dashboard
[SDOHCCObservationAssessment]: StructureDefinition-SDOHCC-ObservationAssessment.html
[SDOH Clinical Care ImplementationGuide Resource]: ImplementationGuide-hl7.fhir.us.sdoh-clinicalcare.html
[Data Modeling Framework]: sdoh_clinical_care_scope.html#data-modeling-framework
[Checking Task Status]: checking_task_status.html
[Privacy and Security]: privacy_and_security.html
[Must Support and Missing Data]: mustsupport_and_missing_data.html
[VSAC]: https://vsac.nlm.nih.gov/
[Patient Coordination Workflow]: referral_workflow.html#patient-coordination-workflow
[Indirect Referral]: referral_workflow.html#indirect-referral
[Indirect Referral Light]: referral_workflow.html#indirect-referral-light
[Direct Referral]: referral_workflow.html#direct-referral
[Direct Referral Light]: referral_workflow.html#direct-referral-light
[Referral Workflow]: referral_workflow.html
[Assessment Instrument Support]: assessment_instrument_support.html
[Connecting Applications with API Data Sources]: connecting_applications_with_api_data_sources.html
[SDOHCC Observation Response Hunger Vital Sign Question 3 Example]: Observation-SDOHCC-ObservationResponseHungerVitalSignQuestion3Example.html
[Subscription Notification Bundle]: https://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition-backport-subscription-notification-r4.html
<!--# Icons -->
[patienticon]: ./Patient.png
{: height="35px" width="35px"}

[providericon]: Provider.png
{: height="35px" width="35px"}

[cboicon]: CBO.png
{: height="35px" width="35px"}

[ccicon]: CC.png
{: height="35px" width="35px"}

[cpicon]: CoordinationPlatform.png
{: height="35px" width="35px"}

[ehricon]: EHR.png
{: height="35px" width="35px"}

[fhiricon]: fhir-32.png
{: height="32px" width="32px"}

[fhirserver]: FHIRServer.png
{: height="32px" width="32px"}

[fhirapplication]: FHIRApplication.png
{: height="32px" width="32px"}

[patientapp]: PatientApplication.png
{: height="32px" width="32px"}

{% include fsh-link-references.md %}


---

// File: input/includes/Post_referral_task.md


- Patient's FHIR_id = "example"
- Observation category = "sdoh"

**Request**

Request url using GET

GET `http://wildfhir4.aegis.net/fhir4-0-1/Observation?patient=Patient/example&category=sdoh`


Request Headers
~~~
User-Agent: python-requests/2.25.1
Accept-Encoding: gzip, deflate
Accept: application/fhir+json
Connection: keep-alive
Content-Type: application/fhir+json
~~~

**Response**

200 OK

Response Headers
~~~
Connection: keep-alive
Content-Location: http://wildfhir4.aegis.net/fhir4-0-1/Observation?patient=Patient%2Fexample&category=sdoh
Content-Type: application/fhir+json;charset=utf-8
Content-Length: 4112
Date: Sun, 21 Nov 2021 03:15:18 GMT
~~~
Response Body
~~~
{
  "resourceType": "Bundle",
  "id": "158f4b97-5b3a-4363-81da-19d454a6df30",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2021-11-20T22:15:18.726-05:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "http://wildfhir4.aegis.net/fhir4-0-1/Observation?patient=Patient%2Fexample&category=sdoh"
    }
  ],
  "entry": [
    {
      "fullUrl": "http://wildfhir4.aegis.net/fhir4-0-1/Observation/hunger-question-example",
      "resource": {
        "resourceType": "Observation",
        "id": "hunger-question-example",
        "meta": {
          "extension": [
            {
              "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
              "valueString": "Hunger Question Example"
            },
            {
              "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
              "valueMarkdown": "This is a Hunger Question Example for the *US Core Screening Response Observation Profile*."
            }
          ],
          "versionId": "1",
          "lastUpdated": "2021-11-20T22:13:54.070-05:00",
          "profile": [
            "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-screening-response"
          ]
        },
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>meta</b>:       \n      </p><p><b>status</b>: FINAL      \n      </p><p><b>category</b>: SDOH         \n        <span style=\"background: LightGoldenRodYellow\">(Details : {LOINC code 'sdoh' = 'sdoh', given as 'SDOH'})</span>, Survey         \n        <span style=\"background: LightGoldenRodYellow\">(Details : {http://terminology.hl7.org/CodeSystem/observation-category code 'survey' = 'Survey', given as 'Survey'})</span></p><p><b>code</b>: Within the past 12 months we worried whether our food would run out before we got money to buy more [U.S. FSS]         \n        <span style=\"background: LightGoldenRodYellow\">(Details : {LOINC code '88122-7' = 'Within the past 12 months we worried whether our food would run out before we got money to buy more [U.S. FSS]', given as 'Within the past 12 months we worried whether our food would run out before we got money to buy more [U.S. FSS]'})</span></p><p><b>subject</b>:         \n        <a href=\"Patient/example\">Patient/example</a></p><p><b>effective</b>: Nov 12, 2021 8:59:15 PM      \n      </p><p><b>performer</b>:         \n        <a href=\"Patient/example\">Patient/example</a></p><p><b>value</b>: Often true         \n        <span style=\"background: LightGoldenRodYellow\">(Details : {LOINC code 'LA28397-0' = 'Often true', given as 'Often true'})</span></p><p><b>derivedFrom</b>: Hunger Vital Signs Questionnaire      \n      </p></div>"
        },
        "status": "final",
        "category": [
          {
            "coding": [
              {
                "system": "http://loinc.org",
                "code": "sdoh",
                "display": "SDOH"
              }
            ]
          },
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                "code": "survey",
                "display": "Survey"
              }
            ]
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "88122-7",
              "display": "Within the past 12 months we worried whether our food would run out before we got money to buy more [U.S. FSS]"
            }
          ]
        },
        "subject": {
          "reference": "Patient/example"
        },
        "effectiveDateTime": "2021-11-12T17:59:15-08:00",
        "performer": [
          {
            "reference": "Patient/example"
          }
        ],
        "valueCodeableConcept": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "LA28397-0",
              "display": "Often true"
            }
          ]
        },
        "derivedFrom": [
          {
            "display": "Hunger Vital Signs Questionnaire"
          }
        ]
      },
      "search": {
        "mode": "match",
        "score": 1
      }
    }
  ]
}
~~~


---

// File: input/pagecontent/draft_specifications_for_personal_characteristics.md

<div class="stu-note">
<b><i>The specifications described here are drafts.</i></b>
</div>
### Background

Collection of personal characteristics data (e.g., Race and Ethnicity (R/E), gender identity, sexual orientation, recorded sex and gender, and personal pronouns) is important to achieving the goal of health equity. For example, the recent [Cross-Industry Coalition Health Equity Pledge to Address Disparities](https://www.businesswire.com/news/home/20211026005241/en/Cross-Industry-Coalition-of-Health-Care-Organizations-Sign-Health-Equity-Pledge-to-Address-Disparities), and the proposed NCQA race/ethnicity stratification approach "Episode 9, from June 22, 2021,  [Future of HEDIS presentation](https://www.ncqa.org/wp-content/uploads/2021/11/Overview-Memo-Health-Equity-Accreditation-Plus.pdf?utm_medium=email&utm_campaign=publiccomment&utm_source=sf&utm_term=20211109) (see slides 15-25) both include a focus on the collection of Race & Ethnicity (R/E) data.

However, there are standards-based challenges for collection and exchange of personal characteristics data.  For example, some state insurance policies may require payers and/or providers to include R/E data in reporting and some states may require capturing the source (i.e., performer) and collection method for R/E data (e.g., the [Oregon Health Authority, Office of Equity and Inclusion Division 70, Race, Ethnicity, Language and Disability Demographic Data Collection Standards]( https://www.oregon.gov/oha/OEI/Policies/Race-Ethnicity-Language-Disability-Data-Collection-Standards.pdf) has rules and policy related to collection of R/E data.)

In general, personal characteristics data is sensitive personal information with significant privacy and security considerations. Laws vary on the extent to which this data can be disclosed.  Before exchanging personal characteristics data, regulatory and policy considerations related to consent and exchange of this data should be understood. Guidance as to the necessary privacy, security, and consent requirements related to the exchange of this data is beyond the scope of this implementation guide. Implementers should understand and abide by their local requirements.

### Draft Specifications

This Implementation Guide (IG) has defined draft specifications for the exchange of personal characteristics data.

For example, the draft R/E specifications are defined to meet the reporting requirements of a number of states. As an example, specific organizations require that the source and collection method of R/E data must be reported. Depending on the source and collection method, it is possible for an individual to have more than one observation about a specific personal characteristic (e.g., more than one race and/or more than one ethnicity expressed for an individual).

The current [race extension]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-race.html) and [ethnicity extension]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-ethnicity.html) for the [US Core Patient]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-patient.html) profile allow specification of multiple coded values, but do not allow multiple occurrences of either extension or the capture of source and collection method.

Since personal characteristics (e.g., R/E) are more consistent with an observation than demographic data, we have modeled the specifications as profiles on the base Observation resource.

There are seven personal characteristic Observation profiles included in this IG:

1. [Personal Characteristic](StructureDefinition-SDOHCC-ObservationPersonalCharacteristic.html) (Abstract)
2. [Race](StructureDefinition-SDOHCC-ObservationRaceOMB.html)
3. [Ethnicity](StructureDefinition-SDOHCC-ObservationEthnicityOMB.html)
4. [Gender Identity]( StructureDefinition-SDOHCC-ObservationGenderIdentity.html)
5. [Recorded Sex and Gender](StructureDefinition-SDOHCC-ObservationRecordedSexGender.html)
6. [Sexual Orientation](StructureDefinition-SDOHCC-ObservationSexualOrientation.html)
7. [Personal Pronouns]( StructureDefinition-SDOHCC-ObservationPersonalPronouns.html)

#### Value Sets for Personal Characteristics

Value sets for the draft personal characteristics profiles are based on existing value sets (e.g., US Core, Gender Harmony Project, VSAC, USCDI, etc.) and may change as feedback is solicited and other value sets are developed (e.g., the Gender Harmony Project value sets). 

The personal characteristic profiles adhere to the following consistent structure with respect to handling [null flavors](https://www.hl7.org/fhir/v3/NullFlavor/cs.html):

* Race and Ethnicity – These profiles allow more than one Observation.component.value in order to allow race or ethnicity to be expressed with high-level codes, and/or more detailed level codes, and/or as a string. Null values (e.g., unknown, asked-declined, etc.) apply to all assertions about race or ethnicity regardless of granularity. For this reason, null values cannot be captured as part of individual components and are instead captured as a single element using Observation.dataAbsentReason. As a consequence, the value sets for Observation.component.value. have been modified to exclude null value concepts. Thus, for R/E, the value sets for Observation.component.value are the same as those defined in the [US Core Patient]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-patient.html) extensions with the exception that null flavors are represented using dataAbsentReason.

* Sexual Orientation, Gender Identity, Recorded Sex and Gender, Personal Pronouns - These profiles allow only one Observation.value. Therefore, null value concepts are allowed in the value set for Observation.value.

The value set for Observation.method may also change as feedback is solicited and/or according to policy (e.g., at the organizational, state, or federal level). For further detail on method, see Recommendations for Collection and Reporting of Personal Characteristics.

#### Guidance for Personal Characteristics of a Related Person or Practitioner

The personal characteristic observations can be used to document not only personal characteristics of the patient but also of other actors (i.e., a practitioner or a related person such as a caretaker) who interact with the patient. Collection and use of personal characteristics data for a practitioner or related person should be treated with the same safeguards as for the patient.

#### Guidance for Personal Characteristics (e.g., R/E) that are also included as extensions on [US Core Patient]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-patient.html)

If there are one or more race observations, each with one or more races expressed, and the referenced [US Core Patient]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-patient.html) uses the [race extension ]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-race.html) to express one or more races, then the [US Core Patient]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-patient.html) race value(s) SHALL match the race value(s) of at least one of the race observations.

If there are one or more ethnicity observations, and the referenced [US Core Patient]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-patient.html) uses the [ethnicity extension]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-ethnicity.html), then the [US Core Patient]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-patient.html) ethnicity SHALL match the ethnicity of at least one of the ethnicity observations.

Similar guidance may be required as additional personal characteristic extensions are added to [US Core Patient]({{site.data.fhir.ver.uscore}}/StructureDefinition-us-core-patient.html).

### Recommendations for Collection and Reporting of Personal Characteristics

The value set for method as well as the allowed references for performer may change as feedback is solicited and/or according to policy (e.g., at the organizational, state, or federal level).

With respect to the values for method, the general recommendation is that personal characteristics should be determined by attestation of the subject. In the event that the subject is a minor or incapable of attesting, there may be situations where a related person may report on their behalf, and this might be captured as “reported-by-related-person”. Additionally, “reported-by-related-person” may apply when an individual is a subscriber to an insurance plan and supplies the plan with information (e.g., recorded sex) of other members/related persons included on the policy. However, when a competent adult is relaying their information to a “related-person”, who is merely filling out a form or sharing that information on their behalf, the general recommendation of this implementation guide is to use “self-reported” as opposed to “reported-by-related-person”.

**R/E Example**:

Since 1997, self-reported collection of R/E in a two question format has been the standard of the Office of Management and Budget (OMB) ([Revisions to the Standards for the Classification of Federal Data on Race and Ethnicity]( https://obamawhitehouse.archives.gov/omb/fedreg_1997standards)).

Currently, federal policy allows visual observation of R/E in some situations but prohibits it in others (e.g., USDA Food and Nutrition Service policy [Collection of Race and Ethnicity Data by Visual Observation](https://www.fns.usda.gov/cn/Race-and-Ethnicity-Data-Policy-Rescission)). Although the IG value set provides “observed” as a collection method for the R/E profiles, there are concerns over the lack of reliability of “visual observation” of R/E. Therefore, the general recommendation is that R/E should be determined by attestation of the subject (or a related person in the event the subject is a minor or incapable of attesting) and the use of visual observation (i.e., “observed”) to determine R/E is generally discouraged. If future federal law or regulation completely prohibits visual observation of R/E, “observed” will be removed from the IG value set.

In situations where an individual (e.g., a parent, guardian, caregiver, etc.) has legal authority on behalf of a subject, the complexity of whether R/E is “self-reported” versus “observed” versus “reported by related person” may need to be determined by policy at the local, state or federal level (e.g., [Department of Education](https://www.govinfo.gov/content/pkg/FR-2007-10-19/html/E7-20613.htm) pg. 59268, Section II C- Identification of Racial and Ethnic Categories and Missing Data).

#### Guidance for use of Provenance with Race and Ethnicity Personal Characteristics

There is a possibility that either or both the US Core Patient profile and Personal Characteristics observation profiles for race and ethnicity may have have provenance associated with them.  Since the Provenance resource only points to the resource instance that it is supporting (target), there is no way to determine which elements (if any) have been changed.  We suggest that provenance should be used in conjunction with this IG to determine one of the following:

​	the author organization responsible for the information, and

​	the transmitter (e.g. provider, payer, etc.) that provided the information.

Additional guidance is provided in the [US Core 3.1.1 Basic Provenance Guidance]({{site.data.fhir.ver.uscore}}/basic-provenance.html).


### Testing Draft Specifications

Please test the draft personal characteristic profiles and provide feedback on any changes that are necessary to support the exchange of this data. Please pay specific attention to the value sets for the characteristics (via Observation.value and Observation.component.value), the value set for collection method (via Observation.method), and the approach for specifying the data’s source (via Observation.performer [Reference](https://www.hl7.org/fhir/references.html#Reference)).

*Note: The draft specifications for personal characteristics should not be cited in regulations without further testing and balloting as part of a specific IG or as an update to US Core.*

### US Core Intent

If draft specification testing establishes that they are appropriate for exchanging personal characteristics data, the intent is that the profiles will be presented to [Cross Group Projects](http://www.hl7.org/Special/committees/cgp/index.cfm) with the request that they be included in the next version of the [US Core Specification]({{site.data.fhir.ver.uscore}}/).

Three potential outcomes from the review of the approaches to handling personal characteristics include, but are not limited to:

1. Some or all of the personal characteristics continue to be represented as extensions to Patient, Practitioner, and RelatedPerson. The extensions may or may not be expanded to include source and method and allow multiple instances (e.g., cardinality of the extension expanded from 0..1 to 0..*)
2. Some or all of the personal characteristics may be represented as observations as tested in this IGs Draft profiles for personal characteristics
3. A combination of both extensions and observations may be supported based on the specific use case.

{% include markdown-link-references.md %}

---

// File: input/fsh/aliases.fsh

Alias: $loinc = http://loinc.org
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-ObsInterpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $consentpolicycodes = http://terminology.hl7.org/CodeSystem/consentpolicycodes
Alias: $restful-security-service = http://terminology.hl7.org/CodeSystem/restful-security-service
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $condition-category = http://hl7.org/fhir/us/core/CodeSystem/condition-category
Alias: $SDOHCC-CodeSystemTemporaryCodes = http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes
Alias: $sct = http://snomed.info/sct
Alias: $icd-10-cm = http://hl7.org/fhir/sid/icd-10-cm
Alias: $goal-achievement = http://terminology.hl7.org/CodeSystem/goal-achievement
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $other-code-system = http://example.org/CodeSystem/other-code-system
Alias: $provider-taxonomy = http://nucc.org/provider-taxonomy
Alias: $questionnaire-item-control = http://hl7.org/fhir/questionnaire-item-control
Alias: $unitsofmeasure = http://unitsofmeasure.org
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $temp = http://hl7.org/fhir/uv/sdc/CodeSystem/temp
Alias: $task-code = http://hl7.org/fhir/CodeSystem/task-code
Alias: $data-absent-reason = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $extension-Observation.subject = http://hl7.org/fhir/5.0/StructureDefinition/extension-Observation.subject
Alias: $resource-pertainsToGoal = http://hl7.org/fhir/StructureDefinition/resource-pertainsToGoal
Alias: $2.16.840.1.113762.1.4.1247.103 = https://cts.nlm.nih.gov/fhir/res/ValueSet/2.16.840.1.113762.1.4.1247.103
Alias: $2.16.840.1.113762.1.4.1247.63 = https://cts.nlm.nih.gov/fhir/res/ValueSet/2.16.840.1.113762.1.4.1247.63
Alias: $2.16.840.1.113762.1.4.1247.62 = https://cts.nlm.nih.gov/fhir/res/ValueSet/2.16.840.1.113762.1.4.1247.62
Alias: $2.16.840.1.113762.1.4.1247.108 = https://cts.nlm.nih.gov/fhir/res/ValueSet/2.16.840.1.113762.1.4.1247.108
Alias: $2.16.840.1.113762.1.4.1247.17 = https://cts.nlm.nih.gov/fhir/res/ValueSet/2.16.840.1.113762.1.4.1247.17
Alias: $2.16.840.1.113762.1.4.1247.148 = https://cts.nlm.nih.gov/fhir/res/ValueSet/2.16.840.1.113762.1.4.1247.148
Alias: $2.16.840.1.113762.1.4.1021.32 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.32
Alias: $2.16.840.1.113883.3.2074.1.1.3 = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.2074.1.1.3
Alias: $LL6134-2 = http://loinc.org/vs/LL6134-2
Alias: $v3-UnitsOfMeasureCaseSensitive = http://terminology.hl7.org/ValueSet/v3-UnitsOfMeasureCaseSensitive
Alias: $LL3323-4 = http://loinc.org/vs/LL3323-4
Alias: $WG-extension = http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
Alias: $add-binding = http://hl7.org/fhir/tools/StructureDefinition/additional-binding

---

// File: input/fsh/codesystems/SDOHCCCodeSystemTemporaryCodes.fsh

CodeSystem: SDOHCCCodeSystemTemporaryCodes
Id: SDOHCC-CodeSystemTemporaryCodes
Title: "SDOHCC CodeSystem Temporary Codes"
Description: "A local code system defined within the context of the SDOH-CC IG."
* ^status = #active
* ^content = #complete
* ^version = "0.1.0"
* ^experimental = false
* ^purpose = "The purpose of this code system is to enable temporary codes to be assigned to concepts that are needed to document SDOH-related data elements defined by the Gravity Project community and concepts that are needed to facilitate the use of FHIR to exchange data as required in the use cases covered by this IG.  After the IG has been sufficiently tested through HL7 Connectathons and the coded concepts have been confirmed as fit for the intended purpose, and consensus on the use of the codes has been confirmed through the HL7 Ballot process, the temporary codes will be replaced with coded concepts established within nationally recognized, open code systems.  The replacement of temporary codes with permanent codes is intended to happen in a future version of the IG."
* ^copyright = "(c) 2020 HL7.org"
* ^caseSensitive = true
* ^count = 46
* #sdoh-category-unspecified "SDOH Category Unspecified" "Category for Social Determinant of Health artifacts that are not further specified with respect to category."
* #food-insecurity "Food Insecurity" "Category for Social Determinant of Health artifacts that pertain to Food Insecurity (which is defined as: Uncertain, limited, or unstable access to food that is: adequate in quantity and in nutritional quality; culturally acceptable; safe and acquired in socially acceptable ways.) This SDOH category covers records relevant to circumstances that range from Food Insecurity to Food Security."
* #housing-instability "Housing Instability" "Category for Social Determinant of Health artifacts that pertain to Housing Instability (which is defined as: Currently consistently housed, but experiencing any of the following circumstances in the past 12 months: being behind on rent or mortgage, multiple moves, or housing cost burden.) This SDOH category covers records relevant to circumstances that range from Housing Instability to Stably Housed."
* #homelessness "Homelessness" "Category for Social Determinant of Health artifacts that pertain to Homelessness (which is defined as including: 1) Sheltered Homelessness: because of economic difficulties, currently living in a shelter, motel, temporary or transitional living situation, scattered-site housing, or not having a consistent place to sleep at night; and 2) Unsheltered Homelessness: residing in a place not meant for human habitation, such as cars, parks, sidewalks, abandoned buildings, on the street.) This SDOH category covers records relevant to circumstances that range Homelessness to Housed."
* #inadequate-housing "Inadequate Housing" "Category for Social Determinant of Health artifacts that pertain to Inadequate Housing (which is defined as: Housing does not meet habitability standards.) This SDOH category covers records relevant to circumstances that range from Inadequate Housing to Adequate Housing."
* #transportation-insecurity "Transportation Insecurity" "Category for Social Determinant of Health artifacts that pertain to Transportation Insecurity (which is defined as: Uncertain, limited, or no access to safe, reliable, accessible, affordable, and socially acceptable transportation infrastructure and modalities necessary for maintaining one’s health, well-being, or livelihood.) This SDOH category covers records relevant to circumstances that range from Transportation Insecurity to Transportation Security."
* #financial-insecurity "Financial Insecurity" "Category for Social Determinant of Health artifacts that pertain to Financial Insecurity (which is defined as: A state of being wherein a person has difficulty fully meeting current and/or ongoing financial obligations and/or does not feel secure in their financial future.) This SDOH category covers records relevant to circumstances that range from Financial Insecurity to Financial Security."
* #material-hardship "Material Hardship" "Category for Social Determinant of Health artifacts that pertain to Material Hardship (which is defined as: The lack of specific socially perceived basic physical necessities.) This SDOH category covers records relevant to circumstances that range from 'Unable to obtain physical necessity X' to 'Able to obtain physical necessity X'."
* #educational-attainment "Educational Attainment" "Category for Social Determinant of Health artifacts that pertain to the level of education attained (which, in this context, is defined by whether one has or has not met academic criteria for high school diploma or equivalent.) This SDOH category covers records relevant to circumstances that range from 'Lacks a high school diploma/certificate' to 'Has a high school diploma/certificate'."
* #employment-status "Employment Status" "Category for Social Determinant of Health artifacts that pertain to the status of one's employment (which, in this context, is defined by whether one has or does not have a job and is looking for and available for work). This SDOH category covers records relevant to circumstances that range from 'In labor force' (Unemployed to Employed), or 'Not in labor force'."
* #veteran-status "Veteran Status" "Category for Social Determinant of Health artifacts that pertain to veteran status (which, in this context, is defined by whether one has or has not served as active military with honorable release or discharge.) This SDOH category covers records relevant to circumstances that range from 'History of military service' to 'No history of military service'."
* #stress "Stress" "Category for Social Determinant of Health artifacts that pertain to Stress (which is defined as: When a person perceives the demands of environmental stimuli to be greater than their ability to meet, mitigate, or alter those demands.) This SDOH category covers records relevant to circumstances that range from Stress to 'No stress'."
* #social-connection "Social Connection" "Category for Social Determinant of Health artifacts that pertain to Social Connection (which is defined as: An umbrella term that encompasses the structural, functional, and quality aspects of how individuals connect to each other.) This SDOH category covers records relevant to circumstances that range from inadequate social connections to adequate/satisfying social connections."
* #intimate-partner-violence "Intimate Partner Violence" "Category for Social Determinant of Health artifacts that pertain to Intimate Partner Violence (IPV) (which is defined as: Physical violence, sexual violence, or psychological harm by a current or former partner or spouse. Often including a pattern of methods and tactics to gain and maintain power and control over the other person.) This SDOH category covers records relevant to circumstances that range from being a victim of IPV to not being a victim of IPV."
* #elder-abuse "Elder Abuse" "Category for Social Determinant of Health artifacts that pertain to Elder Abuse (which is defined as: An intentional act or failure to act by a caregiver or another person in a relationship involving an expectation of trust that causes or creates a risk of harm to an older adult and can be in the form of physical abuse, psychological abuse, sexual abuse, financial abuse, and/or neglect by someone in a caregiving role.) This SDOH category covers records relevant to circumstances that range from being a victim of elder abuse to not being a victim of elder abuse."
* #personal-health-literacy "Personal Health Literacy" "Category for Social Determinant of Health artifacts that pertain to Personal Health Literacy (which is defined by Healthy People 2030 as: The degree to which individuals have the ability to find, understand, and use information and services to inform health-related decisions and actions for themselves and others.) This SDOH category covers records relevant to circumstances that range from personal health literacy problems/diagnoses to positive findings/goals related to personal health literacy."
* #health-insurance-coverage-status "Health Insurance Coverage Status" "Category for Social Determinant of Health artifacts that pertain to health insurance coverage (which is defined by whether one has, or does not have, healthcare coverage or insurance.) This SDOH category covers records relevant to circumstances that range from 'no health insurance coverage' to 'health insurance coverage'."
* #medical-cost-burden "Medical Cost Burden" "Category for Social Determinant of Health artifacts that pertain to medical cost burden (which is defined as: A measure of financial pressure resulting from health spending stemming from inadequate resources to meet medical cost needs.) This SDOH category covers records relevant to circumstances that range from 'financial insecurity due to medical cost burden' to 'no burdensome medical costs/debt'."
* #digital-literacy "Digital Literacy" "Category for Social Determinant of Health artifacts that pertain to Digital Literacy (which, based off the United States Agency for International Development (USAID) definition is defined as: The degree to which individuals have the ability to access, manage, understand, integrate, communicate, evaluate, and create information safely and appropriately through digital devices and networked technologies for participation in economic, social, and political life). This SDOH category covers records relevant to circumstances that range from digital literacy problems/diagnoses to positive findings/goals related to digital literacy."
* #digital-access "Digital Access" "Category for Social Determinant of Health artifacts that pertain to Digital Access (which is defined as: Lacking adequate internet (reliable and of sufficient speed to participate in day-to-day and work life) or a digital device to access the internet (the device must be appropriate for the user’s functional abilities)). This SDOH category covers records relevant to circumstances that range from digital access problems/diagnoses to positive findings/goals related to digital access."
* #utility-insecurity "Utility Insecurity" "Category for Social Determinant of Health artifacts that pertain to Utility Insecurity (which includes Energy Insecurity and Water Insecurity and is defined as: Inability to adequately (safely, stably, affordably, and sustainably) meet basic household energy needs (e.g., heating, cooling, lighting, cooking, refrigeration, medical and electronic devices, etc.) and/or water needs (e.g., drinking, cooking or preparing food, bathing, laundry, etc.) due to energy and/or water service difficulties). This SDOH category covers records relevant to circumstances that range from Utility Insecurity to Utility Security."


* #resulting-activity "Resulting Activity" "Code used for Task.output.type to represent the activity/action that is the result of a fulfilled task."
* #sdoh-condition-category "Current Condition Category From SDOH Category" "Code used for Group.characteristic to identify Group members with a current SDOH Condition (identified by a Condition with Condition.category from SDOH domain value set referenced by Group.characteristic.value)."
* #payer-coverage "Coverage By Payer Organization" "Code used for Group.characteristic to identify Group members currently covered by a specific payer organization."
* #general-information "General Information" "Designates that information with respect to an action to be performed 1) will be captured in Task.description in text form AND 2) has no computable expectation AND 3) any resulting response will be captured in Task.Output.GeneralInformationResponse.value as markdown."
* #make-contact "Make Contact" "Designates that the action performed is to make contact (e.g., schedule an appointment, call for results, etc.) with a designated entity (e.g., a healthcare provider, social program, etc.). Details about the reason for the contact may captured elsewhere"
* #review-material "Review Material" "Designates that the action performed is to review material (e.g., attached instructions). Details about the type of material to be reviewed, the reason for reviewing the material, etc. may be captured elsewhere."
* #risk-questionnaire "Risk Questionnaire" "A type of questionnaire that evaluates SDOH-related risk(s)."
* #feedback-questionnaire "Feedback Questionnaire" "A type of questionnaire that obtains feedback on a service that was offered or received."
* #application-questionnaire "Application Questionnaire" "A type of questionnaire that obtains information required on an application (e.g., for a social service program, insurance, benefits, etc.)."
* #personal-characteristics-questionnaire "Personal Characteristics Questionnaire" "A type of questionnaire that obtains information about an individual's personal characteristics (e.g., sexual orientation, gender identity, etc.)."
* #contact-entity "Contact Entity" "Identifies an entity (e.g., a practitioner, organization, or service) that needs to be contacted."
* #general-information-response "General Information Response" "When Task.code is 'general-information', 'general-information-response' for Task.output.type indicates that a free text response can be provided."
* #questionnaire-category "Questionnaire Category" "Identifies the category of questionnaire that should be completed."
* #questionnaire-pdf "Questionnaire PDF" "Identifies the questionnaire PDF to be completed."
* #questionnaire-url "Questionnaire URL" "Identifies the URL where a questionnaire to be completed can be accessed."
* #questionnaire-pdf-completed "Questionnaire PDF Completed" "Identifies the completed questionnaire PDF."
* #contacting-subject-prohibited "Contacting Subject Prohibited" "Identifies that the subject does not want to be contacted for any reason related to this request. There will be alternate arrangements made with respect to contact by the subject or someone acting on their behalf."
* #self-reported "Self Reported" "The subject reported the information about the subject."
* #reported-by-related-person "Reported By Related Person" "Someone related to the subject reported the information about the subject."
* #observed "Observed" "Direct observation of the subject was used to obtain information about the subject."
* #administrative "Administrative" "The information about the subject was collected by an organization for administrative reasons not necessarily directly related to obtaining healthcare or health insurance."
* #derived-specify "Derived Specify" "The information about the subject was derived from information or methods other than directly reported by an individual. Text or derivedFrom should be used to further specify the method."
* #other-specify "Other Specify" "The actual value is not a member of the set of permitted data values in the constrained value domain of a variable. Text should be used to further specify the value."
* #personal-characteristic "Personal Characteristic" "Category for artifacts that pertain to a personal characteristic (characteristics that are usually self-attested but may be attested to on behalf of the subject and are generally only verifiable by the source of attestation (e.g., sexual orientation, gender identity and personal pronouns), but may sometimes be verifiable by someone other than the source of attestation (e.g., recorded sex))."
* #chosen-contact "Chosen Contact" "Identifies the entity (e.g., a practitioner, organization, or service) that was contacted."

---

// File: input/fsh/extensions/SDOHCCExtensionConditionAsserter.fsh

Extension: SDOHCCExtensionConditionAsserter
Id: SDOHCC-ExtensionConditionAsserter
Title: "SDOHCC Extension Condition Asserter"
Description: "Extension for allowing the asserter of a condition to be Device (that was used to perform an operation to arrive at the condition)."
* ^status = #active
* ^context.type = #element
* ^context.expression = "Condition"
* value[x] only Reference

---

// File: input/fsh/extensions/SDOHCCExtensionHealthcareServiceTelecomAppointment.fsh

Extension: SDOHCCExtensionHealthcareServiceTelecomAppointment
Id: SDOHCC-ExtensionHealthcareServiceTelecomAppointment
Title: "SDOHCC Extension HealthcareService Telecom Appointment"
Description: "Extension for flagging a HealthcareService.telecom as one the patient can use to make an appointment."
* ^status = #active
* ^context.type = #element
* ^context.expression = "HealthcareService.telecom"
* . ..1
* . ^short = "Telecom is for making appointments"
* . ^definition = "For flagging a HealthcareService.telecom as one the patient can use to make an appointment."
* value[x] 1..
* value[x] only boolean
* value[x] = true (exactly)

---

// File: input/fsh/instances/pat-53234.fsh

Instance: pat-53234
InstanceOf: USCorePatientProfile
Title: "Patient Colin Abbas Example"
Description: "An example of a patient. This example is used as the referenced patient in other examples in this IG."
Usage: #example
* extension[0].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* extension[=].extension[+].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#1002-5 "American Indian or Alaska Native"
* extension[=].extension[+].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2028-9 "Asian"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#1586-7 "Shoshone"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2036-2 "Filipino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Mixed"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[+].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2184-0 "Dominican"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2148-5 "Mexican"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Hispanic or Latino"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #M
* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical Record Number"
* identifier.type.text = "Medical Record Number"
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "1032702"
* active = true
* name[0].family = "ABBAS"
* name[=].given[0] = "COLIN"
* name[=].given[+] = "V."
* name[=].period.start = "2016-12-06"
* name[=].period.end = "2020-07-22"
* name[+].family = "BAXTER"
* name[=].given[0] = "COLIN"
* name[=].given[+] = "V."
* name[=].suffix = "PharmD"
* name[=].period.start = "2020-07-22"
* telecom.system = #phone
* telecom.value = "555-555-5555"
* telecom.use = #home
* gender = #male
* birthDate = "1987-02-20"
* address[0].line = "49 Meadow St"
* address[=].city = "Mounds"
* address[=].state = "OK"
* address[=].postalCode = "74047"
* address[=].country = "US"
* address[=].period.start = "2016-12-06"
* address[=].period.end = "2020-07-22"
* address[+].line = "183 Mountain View St"
* address[=].city = "Mounds"
* address[=].state = "OK"
* address[=].postalCode = "74048"
* address[=].country = "US"
* address[=].period.start = "2020-07-22"

---

// File: input/fsh/instances/SDOHCC-ConditionAsserterDeviceExample.fsh

Instance: SDOHCC-ConditionAsserterDeviceExample
InstanceOf: SDOHCCCondition
Title: "SDOHCC Condition Asserter Device Example"
Description: "An example of a food insecurity Condition that references, as evidence, Observations derived from the LOINC Hunger Vital Sign [HVS] questionnaire (88121-9) and uses an extension on Condition.asserter to reference the software device that uses the answers to HVS questions 1 and 2 to derive the answer to HVS question 3 (at risk for food insecurity)."
Usage: #example
* extension.url = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ExtensionConditionAsserter"
* extension.valueReference.reference = "Device/SDOHCC-DeviceSoftwareExample"
* extension.valueReference.display = "Application program software"
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#unconfirmed "Unconfirmed"
* category[0] = $condition-category#health-concern "Health Concern"
* category[+] = $SDOHCC-CodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* code.coding[0] = $sct#733423003 "Food insecurity"
* code.coding[+] = $icd-10-cm#Z59.4 "Lack of adequate food"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* onsetPeriod.start = "2019-08-18T12:31:35.123Z"
* evidence.detail.reference = "Observation/SDOHCC-ObservationResponseHungerVitalSignQuestion3Example"

---

// File: input/fsh/instances/SDOHCC-ConditionFoodInsecurityExample.fsh

Instance: SDOHCC-ConditionFoodInsecurityExample
InstanceOf: SDOHCCCondition
Title: "SDOHCC Condition Food Insecurity Example"
Description: "An example of a food insecurity Condition (a health concern) that references, as evidence, Observations derived from the LOINC Hunger Vital Sign [HVS] questionnaire (88121-9)."
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#unconfirmed "Unconfirmed"
* category[0] = $condition-category#health-concern "Health Concern"
* category[+] = $SDOHCC-CodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* code.coding[0] = $sct#733423003 "Food insecurity"
* code.coding[+] = $icd-10-cm#Z59.4 "Lack of adequate food"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* onsetPeriod.start = "2019-08-18T12:31:35.123Z"
* evidence.detail.reference = "Observation/SDOHCC-ObservationResponseHungerVitalSignQuestion3Example"

---

// File: input/fsh/instances/SDOHCC-ConditionHomelessExample.fsh

Instance: SDOHCC-ConditionHomelessExample
InstanceOf: SDOHCCCondition
Title: "SDOHCC Condition Homeless Example"
Description: "An example of a homelessness Condition (a health concern) that is based on an Observation related to housing status that is derived from a QuestionnaireResponse to PRAPARE (represented in LOINC)."
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#unconfirmed "Unconfirmed"
* category[0] = $condition-category#health-concern "Health Concern"
* category[+] = $SDOHCC-CodeSystemTemporaryCodes#homelessness "Homelessness"
* code.coding[0] = $sct#32911000 "Homeless"
* code.coding[+] = $icd-10-cm#Z59.0 "Homelessness"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* onsetPeriod.start = "2021-04-26T13:56:33.747Z"
* asserter.reference = "Patient/pat-53234"
* asserter.display = "COLIN ABBAS"
* evidence.detail.reference = "Observation/SDOHCC-ObservationResponsePRAPAREHousingStatusExample"

---

// File: input/fsh/instances/SDOHCC-ConditionUnemployedExample.fsh

Instance: SDOHCC-ConditionUnemployedExample
InstanceOf: SDOHCCCondition
Title: "SDOHCC Condition Unemployed Example"
Description: "An example of a Condition (a health concern) that is based on an Observation related to employment status that is derived from a QuestionnaireResponse to PRAPARE (represented in LOINC)."
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#unconfirmed "Unconfirmed"
* category[0] = $condition-category#health-concern "Health Concern"
* category[+] = $SDOHCC-CodeSystemTemporaryCodes#employment-status "Employment Status"
* code.coding[0] = $sct#73438004 "Unemployed"
* code.coding[+] = $icd-10-cm#Z56.0 "Unemployment, unspecified"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* onsetPeriod.start = "2021-04-26T13:56:33.747Z"
* asserter.reference = "Patient/pat-53234"
* asserter.display = "COLIN ABBAS"
* evidence.detail.reference = "Observation/SDOHCC-ObservationResponsePRAPAREEmploymentStatusExample"

---

// File: input/fsh/instances/SDOHCC-ConsentInformationDisclosureExample.fsh

Instance: SDOHCC-ConsentInformationDisclosureExample
InstanceOf: SDOHCCConsent
Title: "SDOHCC Consent Information Disclosure Example"
Description: "An example of a Consent for information disclosure related to SDOH information.   A [PDF](ExampleConsent.pdf) is attached to this consent."
Usage: #example
* status = #active
* scope = $consentscope#patient-privacy "Privacy Consent"
* category[IDSCL] = $v3-ActCode#IDSCL "information disclosure"
* patient.reference = "Patient/pat-53234"
* patient.display = "Colin Abbas"
* dateTime = "2021-05-01"
* organization.reference = "Organization/SDOHCC-OrganizationPayerExample"
* sourceAttachment.contentType = #application/pdf
* sourceAttachment.language = #en
* sourceAttachment.data = "JVBERi0xLjUKJeLjz9MKMiAwIG9iago8PAovTGFuZyAoZW4tVVMpCi9UeXBlIC9DYXRhbG9nCi9QYWdlcyA0IDAgUgovTWV0YWRhdGEgNSAwIFIKL09wZW5BY3Rpb24gWzYgMCBSIC9YWVogbnVsbCBudWxsIDBdCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9UeXBlIC9NZXRhZGF0YQovTGVuZ3RoIDI4MzQKL1N1YnR5cGUgL1hNTAo+PgpzdHJlYW0KPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC4xLjEiPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgoJCQkJeG1sbnM6eGFwPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KCQkJPHhhcDpDcmVhdGVEYXRlPjIwMjEtMDQtMTNUMTU6Mzk6MjQtMDc6MDA8L3hhcDpDcmVhdGVEYXRlPgoJCQk8eGFwOkNyZWF0b3JUb29sPldyaXRlcjwveGFwOkNyZWF0b3JUb29sPgoJCQk8eGFwOk1vZGlmeURhdGU+MjAyMS0wNC0xM1QxNTo0MzoxOC0wNzowMDwveGFwOk1vZGlmeURhdGU+CgkJPC9yZGY6RGVzY3JpcHRpb24+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKCQkJCXhtbG5zOnBkZj0iaHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyI+CgkJCTxwZGY6UHJvZHVjZXI+TGlicmVPZmZpY2UgNi4xPC9wZGY6UHJvZHVjZXI+CgkJPC9yZGY6RGVzY3JpcHRpb24+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKCQkJCXhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CgkJCTxkYzpmb3JtYXQ+YXBwbGljYXRpb24vcGRmPC9kYzpmb3JtYXQ+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4KZW5kc3RyZWFtCmVuZG9iagoxMiAwIG9iago8PAovRmlsdGVyIFsvRmxhdGVEZWNvZGVdCi9MZW5ndGggMjMxNgo+PgpzdHJlYW0KeJy1WsuO6zYM3c9XZF1gUomy/AACA0nsLLq7wABdXHTXB9BFgd5Nf7+USEqULdvJ9BYDZGZkW+Lj8PDhmLM9/fP298mczNlAf/KDP0PnT31jz31rT99+e/v5h9NfdAf+fPvj7fbxZht3dqfO9+ehH04fv55+fNgTmNPH718vxo5wMWDc2PmLacZ3CJ++uxhvnGnHd3sxXVztzWCu8f+b8aOPd+PyfcSVKa7P4c8HPuT4GWvi+oDXZck8rB3f8T9vge+1bvzl46e3+ePty0LwxsNScDhZQMGD3B9/1p7x7bk/dc7XHjl4COBss4HiQ18vtrEef9qg2zXqiooEc+DSexv0IL1QSVzZUMTCgJ4rDgA5wEDYzqK1oz29aemPDi3eoaXfu6DsxsYkuOnP7lVt26E5+7Uww4iOvZpbdC3qOo/vPTptjM60F3ReAMD47mkRlQZjrQt34u+IH+vjZ7SY5Qvs+zFd7cNmA+0QV/DQOT2DG1pLYJtxhyBNvBYfo+Pp/xved0/HRelw1yAda2AtSkjy2TlsU1fggR9hB7AoR1yPiqdDAABF4k3Z87WTQQ5+wm1tb87dygNB3rG/KKPErQFVx0PZQmybYNubKAUYT9EwUYqHiAKORJFtUJnRG3I0eaEnVF/x3HBnuSGIPVcb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"
* policyRule = $consentpolicycodes#hipaa-auth "HIPAA Authorization"

---

