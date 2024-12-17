File: repos/HL7_SLASH_physical-activity/sushi-config.yaml

name: PhysicalActivity
title: Physical Activity Implementation Guide
id: physical-activity
extension:
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
    valueCode: trial-use
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm
    valueInteger: 2
  - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-wg
    valueCode: pc
packageId: hl7.fhir.us.physical-activity
canonical: http://hl7.org/fhir/us/physical-activity
version: 1.0.1
fhirVersion: 4.0.1
status: active
date: 2022-05-29
copyrightYear: 2022+
releaseLabel: STU Release 1
jurisdiction: urn:iso:std:iso:3166#US
publisher:
  name: HL7 International / Patient Care
  url: http://www.hl7.org/Special/committees/patientcare
dependencies:
#  hl7.fhir.core:
#    id: r4b
#    version: 4.6.0
#    reason: |
#      This IG leverages subscription constructs pre-adopted from R4B.  Importing this IG makes the relevant terminologies available.
  hl7.fhir.us.sdoh-clinicalcare:
    id: sdoh
    version: 2.1.0
    reason: |
      While focused on social determinants of health such as appropriate housing, food availability, interpersonal violence, there is a significant overlap between the SDOH implementation guide and the exchange needs relevant to physical activity.  In both the SDOH and physical activity spaces:
    
      * The relevant measures are typically gathered by asking questions of patients or their care-giver.
      * There is not yet national consistency in how the measures are captured (or even in the need to capture the measures at all).
      * Interventions to address any identified issues will often involve non-traditional service providers (e.g. food pantries and home repair services for SDOH; personal trainers and fitness centers for physical activity).  These non-traditional service providers often do not have sophisticated EHRs or other interoperability capabilities.
      * Improving the patient situation means agreeing on and sharing information about care plans and goals between primary care providers, patients, care givers, and the non-traditional service providers.
      * There is a need to 'close the loop' on interventions to determine whether the requested intervention was performed, whether the patient is satisfied, and whether the outcome met the original objectives.
      * There may be a need to seek payment for interventions that don't fall into the traditional realm of 'healthcare services'.
    
      For all these reasons, the physical activity implementation guide builds on the standards defined by the Gravity SDOH implementation guide.  Where SDOH artifacts are overly restrictive but still relevant, this guide will define aligned but parallel profiles and will try to continue alignment in future releases.
  hl7.fhir.us.core:
    id: uscore
    version: 3.1.1
    reason: |
      US Core defines profiles that express the data elements defined in [U.S. Core Data for Interopreability (USCDI)](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi) (which is mandated for implementation by EHR systems falling under the 21st Centure Cures Act) as well as other data elements the major U.S. EHR vendors have agreed to implement.  As such, this implementation guide is a foundation for interoperability with EHR systems in the U.S.  All profiles defined in this IG either derive from or align with US Core profiles whenever possible.
  hl7.fhir.uv.sdc:
    id: sdc
    version: 3.0.0
    reason: |
      SDC defines standards for creating, populating, extracting data from and otherwise manipulating [Questionnaires]({{site.data.fhir.path}}questionnaire.html) and [QuestionnaireResponses]({{site.data.fhir.path}}questionnaireresponse.html).  This implementation guide allows optional use of Questionnaires when gathering information from patients and care givers about physical activity levels.  It also uses questionnaires as part of the evaluation process.  Leveraging SDC ensures that questionnaires created with this guide will be able to be rendered and, where appropriate, automatically have some of their answers pre-populated into and/or extracted from using off-the-shelf tooling that already supports the SDC implementation guide.
  hl7.fhir.uv.subscriptions-backport.r4:
#  hl7.fhir.uv.subscriptions-backport:
    id: sub
    version: 1.1.0
    reason: |
      The backport IG defines standards for automatically detecting that data has changed on a system and providing notifications to interested systems.  The Gravity SDOH implementation guide uses this to allow systems to monitor for updates between EHR systems and service delivery systems.  This implementation guide allows the same approach.
  hl7.fhir.uv.extensions:
    id: ext
    version: 1.0.0
    reason: |
      Provides access to all of the 'standard' extensions defined in the core spec
  hl7.fhir.extensions.r5:
    id: r5ext
    version: 4.0.1
    reason: |
      Makes available certain R5 elements for use as part of this R4 IG
#  hl7.fhir.r4.examples:
#    id: examples
#    version: 4.0.1
description: "This implementation guide provides standardization around patient physical activity, including:&#x0a;* measures for recording a patient's level of physical activity;&#x0a;* measures to support assertions of physical activity, including device-based measures;&#x0a;* goals and care plans related to improving a patient's physical activity level;&#x0a;* orders for interventions seeking to improve a patient's physical activity level; and&#x0a;* processes to support closing the loop and evaluating the success of such interventions."
parameters:
  path-expansion-params: "../../input/terminology-settings.xml"
  path-liquid: "liquid"
#  apply-version: false
  apply-contact: false
  apply-publisher: false
#  default-version: true
  default-contact: true
  default-publisher: true
  globals-in-artifacts: true
instanceOptions:
  setMetaProfile: never
  manualSliceOrdering: true
pages:
  index.xml:
    title: Welcome to the Physical Activity IG
    background.xml: 
      title: Importance of Physical Activity
    scenarios.xml: 
      title: Implementation Scenarios
    fhir.xml: 
      title: FHIR Background
    design.xml: 
      title: Design Considerations
    conformance.xml: 
      title: Conformance Expectations
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: trial-use
    measures.xml: 
      title: Physical Activity Measures
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: trial-use
    interventions.xml: 
      title: Plans & Interventions
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: trial-use
    workflow.xml: 
      title: Physical Activity Workflow
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: trial-use
    security.xml: 
      title: Privacy and Security Considerations
      extension:
        - url: http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status
          valueCode: trial-use
    artifacts.xml: 
      title: IG Artifacts
    downloads.xml: 
      title: Downloads
    credits.xml: 
      title: Credits
    history.xml: 
      title: Changes and Publication History
    openissues.xml: 
      title: Open Issues
groups:
  -ex-scenario-1:
    name: "Example: Scenario 1 Example Instances"
    description: "Examples that are associated with the [first scenario](scenarios.html#provider-patient) (exercise prescription) on the Scenarios page."
    resources:
      - Scen1CarePlanV1
      - Scen1CarePlanV2
      - Scen1CarePlanBundle1
      - Scen1CarePlanBundle2
      - Scen1GoalV1
      - Scen1GoalV2
      - Scen1Goal2
      - Scen1GoalBundle1
      - Scen1GoalBundle2
      - Scen1ExerciseRx
      - Scen1ExerciseRxBundle
      - Scen1ObservationDaysPerWeek
      - Scen1ObservationMinsPerDay
      - Scen1ObservationMinsPerWeek
      - Scen1ObservationStrengthDaysPerWeek
      - Scen1OrgGoodhealth
      - Scen1PatientKhatun
      - Scen1PractitionerPatel
      - Scen1RolePatel
  -ex-scenario-2:
    name: "Example: Scenario 2 Example Instances"
    description: "Examples that are associated with the [second scenario](scenarios.html#rehab-referral) (post-rehab referral) on the Scenarios page."
    resources:
      - Scen2SubscriptionEhr
      - Scen2SubscriptionGetFit
      - Scen2OrgGoodCardio
      - Scen2OrgFit4Life
      - Scen2OrgGetFitTraining
      - Scen2PractitionerTrainerSearchsetBundle
      - Scen2RoleLopez
      - Scen2PractitionerLopez
      - Scen2RoleWang
      - Scen2PractitionerWang
      - Scen2RoleMatthews
      - Scen2PractitionerMatthews
      - Scen2SubscriptionNotificationNewTaskBundle
      - Scen2Parameters
      - Scen2TaskGetFitResponseBundle
      - Scen2TaskGetFitV1
      - Scen2TaskGetFitV2
      - Scen2PatientJohansson
      - Scen2ServiceRequest
      - Scen2TaskFit4LifeV1
      - Scen2TaskFit4LifeV2
      - Scen2TaskFit4LifeV3
      - Scen2ReferralFit4LifeResponseBundle
      - Scen2TaskEHRResponseBundle1
      - Scen2TaskEHRResponseBundle2
      - Scen2ConditionResponseBundle
      - Scen2ConditionLackOfExercise
      - Scen2ConditionHypertension
      - Scen2ObservationResponseBundle
      - Scen2ObsDaysPerWeek
      - Scen2ObsMinutesPerDay
      - Scen2NotificationUpdatedTaskBundle
      - Scen2Parameters2
      - Scen2NotificationCompletedTaskBundle
      - Scen2Parameters3
      - Scen2DiagnosticReportObservationsResponseBundle
      - Scen2DiagnosticReport
      - Scen2ObsDaysPerWeek2
      - Scen2ObsMinutesPerDay2
      - Scen2ObsActivityGroup
      - Scen2ObsActivityType
      - Scen2ObsActivityDuration
      - Scen2ObsActivityMeanHR
      - Scen2ObsActivityPeakHR
      - Scen2ObsActivityExperience
      - Scen2ObsCalories
  -ex-scenario-3:
    name: "Example: Scenario 3 Example Instances"
    description: "Examples that are associated with the [third scenario](scenarios.html#program-referral) (exercise program) on the Scenarios page."
    resources:
      - Scen3SubscriptionEhr
      - Scen3TaskYMCAV1
      - Scen3TaskYMCAV2
      - Scen3TaskYMCAV3
      - Scen3PatientShevchenko
      - Scen3ServiceRequest
      - Scen3NotificationUpdatedTaskBundle
      - Scen3ServiceRequestYMCAResponseBundle
      - Scen3Parameters1
      - Scen3NotificationCompletedTaskBundle
      - Scen3Parameters2
      - Scen3TaskEHRResponseBundle1
      - Scen3TaskEHRResponseBundle2
      - Scen3OrgMainClinic
      - Scen3OrgYMCA
      - Scen3PractitionerBlackrock
      - Scen3RoleBlackrock
  -ex-scenario-4:
    name: "Example: Scenario 4 Example Instances"
    description: "Examples that are associated with the [fourth scenario](scenarios.html#personal-trainer) (personal trainer) on the Scenarios page."
    resources:
      - Scen4CarePlanV1
      - Scen4CarePlanV2
      - Scen4Goal1V1
      - Scen4Goal1V2
      - Scen4Goal2V1
      - Scen4Goal2V2
      - Scen4CarePlanBundle1
      - Scen4CarePlanBundle2
      - Scen4GoalBundle1
      - Scen4GoalBundle2
      - Scen4TaskBundle1
      - Scen4TaskBundle2
      - Scen4TaskBundle3
      - Scen4ObservationActivityType
      - Scen4ObservationEVSMinutesPerDay
      - Scen4ObservationPeakDailyHeartRate
      - Scen4ObservationEVSMinutesPerDay2
      - Scen4ObservationCaloriesPerDay
      - Scen4ObservationDailySteps
      - Scen4ObservationEVSMinutesPerDay3
      - Scen4TaskFillSurveyV1
      - Scen4TaskFillSurveyV2
      - Scen4TaskFillSurvey2V1
      - Scen4TaskFillSurvey2V2
      - Scen4TaskReviewVideoV1
      - Scen4TaskReviewVideoV2
      - Scen4Questionnaire
      - Scen4QuestionnaireResponse
      - Scen4QuestionnaireResponse2
      - Scen4PatientScarborough
      - Scen4Practitioner
      - Scen4Role
  -ex-scenario-5:
    name: "Example: Scenario 5 Example Instances"
    description: "Examples that are associated with the [fifth scenario](scenarios.html#pediatrics) (pediatric diabetic) on the Scenarios page."
    resources:
      - Scen5ObsBloodGlucose
      - Scen5ObsActivityGroup
      - Scen5ObsActivityType
      - Scen5ObsActivityDuration
      - Scen5ObsActivityModerate
      - Scen5ObsActivityVigorous
      - Scen5ObsActivityMeanHR
      - Scen5ObservationsResponseBundle
      - Scen5RelatedPersonNadia
      - Scen5PatientRosalie
#resources:
#  ExampleRelatedPerson:
#    exampleCanonical: PARelatedPerson
#  ExampleEVSDaysPerWeek:
#    exampleCanonical: PAObservationEVSDaysPerWeek
#  ExampleEVSMinutesPerDay:
#    exampleCanonical: PAObservationEVSMinutesPerDay
#  ExampleEVSMinutesPerWeek:
#    exampleCanonical: PAObservationEVSMinutesPerWeek
#  ExampleStrengthDaysPerWeek:
#    exampleCanonical: PAObservationStrengthDaysPerWeek
#  ExampleCondition:
#    exampleCanonical: PAConditionLowPA
#  ExampleCarePlan:
#    exampleCanonical: PACarePlan
#  ExampleGoal:
#    exampleCanonical: PAGoal
#  ExampleServiceRequest:
#    exampleCanonical: PAServiceRequest
#  ExampleFulfillmentTask:
#    exampleCanonical: PATaskForReferralManagement
#  ExampleReport:
#    exampleCanonical: PADiagnosticReport
#  ExampleActivityGroup:
#    exampleCanonical: PAObservationActivityGroup
#  ExampleActivityType:
#    exampleCanonical: PAObservationActivityMeasure
#  ExampleActivityDuration:
#    exampleCanonical: PAObservationActivityMeasure
#  ExampleActivityModerate:
#    exampleCanonical: PAObservationActivityMeasure
#  ExampleActivityVigorous:
#    exampleCanonical: PAObservationActivityMeasure
#  ExampleActivityPeakHR:
#    exampleCanonical: PAObservationActivityMeasure
#  ExampleActivityCalories:
#    exampleCanonical: PAObservationActivityMeasure
#  ExampleDailySteps:
#    exampleCanonical: PAObservationTimeMeasure
#  ExamplePeakDailyHeartRate:
#    exampleCanonical: PAObservationTimeMeasure
#  ExampleAverageRestingHeartRate:
#    exampleCanonical: PAObservationTimeMeasure
#  ExampleCaloriesPerDay:
#    exampleCanonical: PAObservationTimeMeasure
#  ExampleSubscriptionWebhook:
#    exampleCanonical: BackportSubscription
#  ExampleSubscriptionEmail:
#    exampleCanonical: BackportSubscription
#  ExampleSubscriptionSMS:
#    exampleCanonical: BackportSubscription
#  ExampleSubscriptionBundleWithIds:
#    exampleCanonical: BackportSubscriptionNotificationR4
#  ExampleSubscriptionBundleWithNoIds:
#    exampleCanonical: BackportSubscriptionNotificationR4
#  ExampleSubscriptionStatusWithIds:
#    exampleCanonical: BackportSubscriptionStatusR4
#  ExampleSubscriptionStatusWithNoIds:
#    exampleCanonical: BackportSubscriptionStatusR4
menu:
  Contents: toc.html
  Home: index.html
  Background:
    Why Physical Activity?: background.html
    Implementation Scenarios: scenarios.html
    FHIR Background: fhir.html
    Design Considerations: design.html
    Credits: credits.html
    Changes & History: history.html
  Specification:
    Conformance Expectations: conformance.html
    Measures: measures.html
    Plans & Interventions: interventions.html
    Workflow: workflow.html
    Privacy & Security: security.html
  Artifacts: artifacts.html
  Support:
    Project Home: https://confluence.hl7.org/display/PC/Physical+Activity
    Help & Discussions: https://chat.fhir.org/#narrow/stream/327137-Physical-Activity
    Downloads: downloads.html

---

// File: input/fsh/CS-CareManager.fsh

Instance:       pa-care-manager
InstanceOf:     CapabilityStatement
Usage:          #definition
Title:        "PA Care Manager"
* description = "Describes the expected capabilities of a system that is responsible for managing issues related to the physical activity level of a patient."
* url         = "http://hl7.org/fhir/us/physical-activity/CapabilityStatement/pa-care-manager"
* name        = "PACareManager"
* status      = #active
* kind        = #requirements
* date        = 2022-06-18
* imports[+]  = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-server"
* fhirVersion = #4.0.1
* format[+]   = #json
* format[+]   = #xml
* rest[+]
  * mode = #client
  * documentation = "Care managers only act as clients in situation where they are interacting with 'full' [service providers](CapabilityStatement-pa-service-provider-full.html) which have their own FHIR server interfaces.  In this mode, the Care Manager can create and/or retrieve information from the referral recipient.  There is no expectation that [patient engagement](CapabilityStatement-pa-patient-engagement.html) systems will have their own FHIR server interfaces."
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #CarePlan
    * insert SupportedProfile(PACarePlan, #SHALL)
    * documentation = "Allows accessing and manipulating Care Plans stored on a Service Provider."
    * insert Interaction(#update, #SHOULD, "Allows a clinician to make updates to a plan owned by a service provider.")
    * insert Interaction(#search-type, #SHOULD, "Allows retrieval of care plans for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how a care plan has changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to the plan.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known care plan records - and more specifically\, retrieving more than one in a single call to check for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", CarePlan-category, #token, #SHALL, "Allows retrieving only those plans related to physical activity.  Required in US Core.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering plans based on the time frame they apply(ied\) to.")
    * insert SearchParam("status", CarePlan-status, #token, #SHOULD, "Allows filtering to only active or draft plans.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those plans for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Goal
    * insert SupportedProfile(PAGoal, #SHALL)
    * documentation = "Allows accessing and potentially updating goals maintained by a Service Provider."
    * insert Interaction(#update, #SHOULD, "Allows patients or service providers to modify a goal - for example shifting target values or dates\, updating the status\, etc.  Allowing patients\, care-givers\, and service providers to help maintain goals is a key aspect of a patient-centered care plan.  However\, not all care manager systems (or their organizations\) yet have the technical mechanisms or policies in place to support this.")
    * insert Interaction(#search-type, #SHOULD, "Allows retrieval of goals for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how goals have changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to goals.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known goal records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Goal-category, #token, #SHOULD, "Allows retrieving only those goals related to physical activity.  Not needed in US-Core.")
    * insert SearchParam("lifecycle-status", Goal-lifecycle-status, #token, #SHOULD, "Allows filtering to only active\, completed or other goal statuses.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those goals for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("target-date", Goal-target-date, #date, #SHOULD, "Allows filtering goals based on when they're to be achieved.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Observation
    * insert SupportedProfile(PAObservationEVSDaysPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerDay, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationStrengthDaysPerWeek, #SHOULD)
    * insert SupportedProfile(PAObservationActivityMeasure, #SHOULD)
    * insert SupportedProfile(PAObservationActivityGroup, #SHOULD)
    * insert SupportedProfile(PAObservationTimeMeasure, #SHOULD)
    * documentation = "Allows accessing observations maintained by a Service Provider."
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of observations for a given patient.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known observation records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Observation-category, #token, #SHALL, "Allows retrieving only those observations related to physical activity.  As well\, many clinical systems will require searches to specify a category so the server knows which part of the database to search as different types of observations are stored in different areas.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering to only retrieve a specific type of physical activity vital sign or supporting observation.")
    * insert SearchParam("date", clinical-date, #date, #SHALL, "Allows filtering to only retrieve a observations from a particular time period.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those observations for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("status", Observation-status, #token, #SHALL, "Allows excluding entered-in-error or non-final observations.")
    * insert SearchParam("value-quantity", Observation-value-quantity, #quantity, #SHOULD, "Allows retrieval of only those observations that fall in a particular range.  Particularly useful for cross-patient queries.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Patient
    * documentation = "Allows searching of the patients."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the patients.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("birthdate", individual-birthdate, #date, #MAY, "Allows filtering of individuals based on their date of birth.")
    * insert SearchParam("family", individual-family, #string, #MAY, "Allows filtering of individuals based on their family name.")
    * insert SearchParam("gender", individual-gender, #token, #MAY, "Allows filtering of individuals based on their gender.")
    * insert SearchParam("given", individual-given, #string, #MAY, "Allows filtering of individuals based on their given name.")
    * insert SearchParam("identifier", Patient-identifier, #token, #SHALL, "Enables filtering of patients based on their unique identifiers.")
    * insert SearchParam("name", Patient-name, #string, #SHALL, "Enables filtering of patients based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Practitioner
    * documentation = "Allows searching of the practitioners."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioners.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("identifier", Practitioner-identifier, #token, #SHOULD, "Enables filtering of practitioners based on their unique identifiers.")
    * insert SearchParam("name", Practitioner-name, #string, #SHOULD, "Enables filtering of practitioners based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #PractitionerRole
    * documentation = "Allows searching of the practitioner roles."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioner roles.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("specialty", PractitionerRole-specialty, #token, #SHOULD, "Allows filtering of practitioner specialty.")
    * insert SearchParam("practitioner", PractitionerRole-practitioner, #reference, #SHOULD, "Enables filtering of practitioner roles based on the associated practitioner.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #DiagnosticReport
    * insert SupportedProfile(PADiagnosticReport, #SHALL)
    * documentation = "Allows retrieval of reports created by a Full Service Provider."
    * insert Interaction(#search-type, #SHALL, "Allows searching for reports for a particular patient or checking for updates to previously retrieved records.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("basedOn", Procedure-based-on, #reference, #SHOULD, "Allows filtering to reports created in fulfillement of a particular order or referral.")
    * insert SearchParam("code", clinical-code, #token, #SHOULD, "Allows filtering to specific types of reports.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering reports based on the period the cover.")
    * insert SearchParam("category", Procedure-category, #token, #SHALL, "Allows retrieving only those reports related to physical activity.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those reports for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("performer", ServiceRequest-performer, #reference, #SHOULD, "Allows filtering to only retrieve reports created by a specific performer.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHOULD, "Allows filtering to only retrieve active or completed reports.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Task
    * insert SupportedProfile(PATaskForReferralManagement, #SHALL)
    * insert SupportedProfile(SDOHCCTaskForPatient, #MAY)
    * documentation = "Allows retrieval and updating of tasks stored on a Full Service Provider."
    * insert Interaction(#create, #SHALL, "Allows a creation of Task on a Full Service Provider system.")
    * insert Interaction(#update, #SHALL, "Allows cancelling or adding notes to an existing Task.")
    * insert Interaction(#search-type, #SHALL, "Allows checking for updates on a Task after receiving a subscription notification.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchInclude("Task:output", #SHOULD)
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known task records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering for 'fulfill' tasks as opposed to others. Some systems may require code to be included as a filter criteria as different Task codes may correspond to  different internal database tables.")
    * insert SearchParam("owner",Task-owner, #reference, #SHALL, "Allows filtering only for tasks that are assigned to a particular owner (or alternatively\, tasks that have not yet been assigned\).")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those tasks for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("requester", Task-requester, #reference, #SHALL, "Allows filtering to only retrieve tasks initiated by a specific provider.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHALL, "Allows filtering to only retrieve active or completed orders.")
    * insert SearchParam("focus", Task-focus, #reference, #SHALL, "Allows retrieving the task(s\) seeking fulfillment of a particular ServiceRequest.")
    * insert SearchParam2("output", http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/Task-output-reference, #reference, #SHOULD, "Allows for the 'output' of a Task to be included when retrieving a Task.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Subscription
    * insert SupportedProfile(BackportSubscription, #SHALL)
    * documentation = "Allows subscribing to Tasks hosted on a ServiceProvider."
    * insert Interaction(#create, #SHALL, "Allows establishing a new subscription.")
    * insert Interaction(#update, #SHALL, "Allows revising an existing subscription - to cancel it or change the email address or SMS number.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of existing subscriptions prior to update.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam2("topic", http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic, #uri, #SHOULD, "Allows filtering for just subscriptions for Task monitoring.")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known subscription records.")
    * insert SearchParam("url",Subscription-url, #uri, #SHALL, "Allows filtering only for subscriptions that notify a specific endpoint.  Substituting for the 'owner' search parameter\, which doesn't exist in R4.")    
//    * insert SearchParam("owner",Subscription-owner, #reference, #SHALL, "Allows filtering only for subscriptions that are owned by the subscribing system.")    
* rest[+]
  * mode = #server
  * documentation = "Care Managers act primarily as servers, allowing [light](CapabilityStatement-pa-service-provider-light.html) and [full](CapabilityStatement-pa-service-provider-full.html) service providers and [patient engagement systems](CapabilityStatement-pa-patient-engagement.html) to retrieve information stored on the manager, and in some cases to create and update information present on the manager."
  * security.service[+]  = $security#OAuth
  * security.description = "See additional guidance on the [security](security.html) page."
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #CarePlan
    * insert SupportedProfile(PACarePlan, #SHALL)
    * documentation = "Shares and, ideally, allows external systems to add and update care plans. If 'create' interaction is supported, 'update' becomes mandatory."
    * insert Interaction(#update, #SHOULD, "Allows patients or service providers to modify a care plan.  Allowing patients\, care-givers\, and service providers to help maintain care plans is a key aspect of a patient-centered care plan.  However\, not all care manager systems (or their organizations\) yet have the technical mechanisms or policies in place to support this. Please note if 'create' is supported\, 'update' becomes mandatory\, as systems supporting creation should have the necessary mechanisms in place to support updates.")
    * insert Interaction(#create, #SHOULD, "Allows patients or service providers to add additional physical activity related care plans.  As with updates\, this is a key part of a patient-centered care plan\, but not all systems or organizations will be able to do this.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of care plans for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how a care plan has changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to the plan.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known care plan records - and more specifically\, retrieving more than one in a single call to check for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", CarePlan-category, #token, #SHOULD, "Allows retrieving only those plans related to physical activity.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering plans based on the time frame they apply(ied\) to.")
    * insert SearchParam("lifecycle-status", CarePlan-status, #token, #SHALL, "Allows filtering to only active or draft plans.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those plans for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Condition
    * insert SupportedProfile(PAConditionLowPA, #SHALL)
    * documentation = "Shares information about any concerns about a patient's physical activity level.  There is no expectation that Conditions can be created or modified by other systems."
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of conditions for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how a condition has changed over time.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known condition records - and more specifically\, retrieving more than one in a single call to check for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Condition-category, #token, #SHALL, "Allows retrieving only those plans related to physical activity.")
    * insert SearchParam("clinical-status", Condition-clinical-status, #token, #SHOULD, "Allows filtering to only active conditions.")
    * insert SearchParam("code", clinical-code, #token, #SHOULD, "Allows retrieving specific patient conditions - e.g. all 'low physical activity' conditions.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those plans for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("verification-status", Condition-verification-status, #token, #SHOULD, "Allows excluding refuted or erroneous conditions.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #DocumentReference
    * insert SupportedProfile(USCoreDocumentReferenceProfile, #SHALL)
    * documentation = "Allows retrieving PDFs or similar content referenced by a Patient Task.  These generally will not be patient-specific resources."
    * insert Interaction(#create, #SHOULD, "Allows a ServiceProvider to add additional images/documents for later retrieval.")
    * insert Interaction(#update, #MAY, "Allows a ServiceProvider to replace an existing image/document with a newer version.")
    * insert Interaction(#search-type, #SHOULD, "Allows monitoring of previously-retrieved DocumentReferences in the event the image/document is amended\, corrected\, or updated.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known document-reference records - and more specifically\, retrieving  more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("contenttype", DocumentReference-contenttype, #token, #SHOULD, "Allows filtering for only PDFs\, images\, etc.")
    * insert SearchParam("category", DocumentReference-category, #token, #SHOULD, "Allows filtering for only records tied to a particular category (e.g. physical-activity\).")
    * insert SearchParam("description", DocumentReference-description, #string, #SHOULD, "Allows filtering based on words found in the description - i.e. with a 'contains' search.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Goal
    * insert SupportedProfile(PAGoal, #SHALL)
    * documentation = "Shares and, ideally, allows external systems to add and update goals. If 'create' interaction is supported, 'update' becomes mandatory."
    * insert Interaction(#update, #SHOULD, "Allows patients or service providers to modify a goal - for example shifting target values or dates\, updating the status\, etc.  Allowing patients\, care-givers\, and service providers to help maintain goals is a key aspect of a patient-centered care plan.  However\, not all care manager systems (or their organizations\) yet have the technical mechanisms or policies in place to support this. Please note if 'create' is supported\, 'update' becomes mandatory\, as systems supporting creation should have the necessary mechanisms in place to support updates.")
    * insert Interaction(#create, #SHOULD, "Allows patients or service providers to add additional physical activity related goals.  As with updates\, this is a key part of a patient-centered care plan\, but not all systems or organizations will be able to do this.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of goals for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how goals have changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to goals.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known goal records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Goal-category, #token, #SHALL, "Allows retrieving only those goals related to physical activity.")
    * insert SearchParam("lifecycle-status", Goal-lifecycle-status, #token, #SHOULD, "Allows filtering to only active\, completed or other goal statuses.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those goals for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("target-date", Goal-target-date, #date, #SHOULD, "Allows filtering goals based on when they're to be achieved.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Observation
    * insert SupportedProfile(PAObservationEVSDaysPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerDay, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationStrengthDaysPerWeek, #SHOULD)
    * insert SupportedProfile(PAObservationActivityMeasure, #SHOULD)
    * insert SupportedProfile(PAObservationActivityGroup, #SHOULD)
    * insert SupportedProfile(PAObservationTimeMeasure, #SHOULD)
    * documentation = "Exposes and allows manipulation of physical activity vital sign and supporting observations."
    * insert Interaction(#update, #SHALL, "Allows correction of or adding comments to previously recorded observations.")
    * insert Interaction(#create, #SHALL, "Allows other systems to record physical-activity related observations.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of observations for a given patient.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known observation records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Observation-category, #token, #SHALL, "Allows retrieving only those observations related to physical activity.  As well\, many clinical systems will require searches to specify a category so the server knows which part of the database to search as different types of observations are stored in different areas.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering to only retrieve a specific type of physical activity vital sign or supporting observation.")
    * insert SearchParam("date", clinical-date, #date, #SHALL, "Allows filtering to only retrieve a observations from a particular time period.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those observations for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("status", Observation-status, #token, #SHALL, "Allows excluding entered-in-error or non-final observations.")
    * insert SearchParam("value-quantity", Observation-value-quantity, #quantity, #SHOULD, "Allows retrieval of only those observations that fall in a particular range.  Particularly useful for cross-patient queries.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #DiagnosticReport
    * insert SupportedProfile(PADiagnosticReport, #SHALL)
    * documentation = "Allows recording and retrieval of the reports on physical activity-related interventions."
    * insert Interaction(#create, #SHALL, "Allows recording of reports about physical activity interventions.")
    * insert Interaction(#update, #SHALL, "Allows updating or correcting a report on physical activity interventions.  E.g. updating to change status\, add notes\, etc.")
    * insert Interaction(#search-type, #SHALL, "Allows searching for reports for a particular patient or checking for updates to previously retrieved records.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("basedOn", Procedure-based-on, #reference, #SHOULD, "Allows filtering to reports created in fulfillement of a particular order or referral.")
    * insert SearchParam("code", clinical-code, #token, #SHOULD, "Allows filtering to specific types of reports.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering reports based on the period the cover.")
    * insert SearchParam("category", Procedure-category, #token, #SHALL, "Allows retrieving only those reports related to physical activity.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those reports for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("performer", ServiceRequest-performer, #reference, #SHOULD, "Allows filtering to only retrieve reports created by a specific performer.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHOULD, "Allows filtering to only retrieve active or completed reports.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Patient
    * documentation = "Allows searching of the patients."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the patients.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("birthdate", individual-birthdate, #date, #MAY, "Allows filtering of individuals based on their date of birth.")
    * insert SearchParam("family", individual-family, #string, #MAY, "Allows filtering of individuals based on their family name.")
    * insert SearchParam("gender", individual-gender, #token, #MAY, "Allows filtering of individuals based on their gender.")
    * insert SearchParam("given", individual-given, #string, #MAY, "Allows filtering of individuals based on their given name.")
    * insert SearchParam("identifier", Patient-identifier, #token, #SHALL, "Enables filtering of patients based on their unique identifiers.")
    * insert SearchParam("name", Patient-name, #string, #SHALL, "Enables filtering of patients based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Practitioner
    * documentation = "Allows searching of the practitioners."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioners.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("identifier", Practitioner-identifier, #token, #SHOULD, "Enables filtering of practitioners based on their unique identifiers.")
    * insert SearchParam("name", Practitioner-name, #string, #SHOULD, "Enables filtering of practitioners based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #PractitionerRole
    * documentation = "Allows searching of the practitioner roles."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioner roles.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("specialty", PractitionerRole-specialty, #token, #SHOULD, "Allows filtering of practitioner specialty.")
    * insert SearchParam("practitioner", PractitionerRole-practitioner, #reference, #SHOULD, "Enables filtering of practitioner roles based on the associated practitioner.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Questionnaire
    * insert SupportedProfile(SDCQuestionnairePopulateObservation, #SHOULD)
    * insert SupportedProfile(SDCQuestionnaireExtractObservation, #SHOULD)
    * documentation = "Allows retrieval of Questionnaires to be filled in."
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of questionnaires to be completed.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known questionnaire records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("url", Questionnaire-url, #uri, #SHALL, "Allows retrieving a referenced Questionnaire.")
    * insert SearchParam("version", Questionnaire-version, #token, #SHOULD, "Allows retrieving a specific version of a referenced questionnaire.")
    * insert SearchParam("context-type-value", Questionnaire-context-type-value, #composite, #SHOULD, "Allows filtering for Questionnaires that are phyical activity-related.")
    * insert SearchParam("identifier", Questionnaire-identifier, #token, #SHOULD, "Allows retrieving Questionnaires with a known identifier.")
    * insert SearchParam("publisher", Questionnaire-publisher, #string, #SHOULD, "Allows retrieving Questionnaires based on who is responsible for having defined the form.")
    * insert SearchParam("status", Questionnaire-status, #token, #SHOULD, "Allows filtering to only retrieve active questionnaires.")
    * insert SearchParam("subject-type", Questionnaire-subject-type, #token, #SHOULD, "Allows retrieving Questionnaires that are intended to provide information about patients - as opposed to practitioners\, organizations\, etc.")
    * insert SearchParam("title", Questionnaire-title, #string, #SHOULD, "Allows searching for forms by name.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #QuestionnaireResponse
    * insert SupportedProfile(SDCQuestionnaireResponse, #SHALL)
    * documentation = "Allows recording and retrieval of questionnaire responses."
    * insert Interaction(#update, #SHALL, "Allows correction of or continued editing of a previously recorded questionnaire response.")
    * insert Interaction(#create, #SHALL, "Allows other systems to record questionnaire responses.")
    * insert Interaction(#search-type, #SHALL,"Allows retrieval of completed or in-progresss questionnaire responses.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known questionnaire response records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("author", QuestionnaireResponse-author, #reference, #SHALL, "Allows filtering responses previously created by a particular individual.")
    * insert SearchParam("authored", QuestionnaireResponse-authored, #date, #SHOULD, "Allows filtering responses based on when they were completed.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those responses for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("questionnaire", QuestionnaireResponse-questionnaire, #reference, #SHALL, "Allows retrieving a referenced Questionnaire.")
    * insert SearchParam("status", QuestionnaireResponse-status, #token, #SHOULD, "Allows filtering to only retrieve completed questionnaire responses.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #ServiceRequest
    * insert SupportedProfile(PAServiceRequest, #SHALL)
    * documentation = "Allows recording and retrieval of physical activity-related referrals and orders."
    * insert Interaction(#search-type, #SHALL, "Allows searching for orders or referrals for a particular patient or for updates to previously retrieved orders.")
    * referencePolicy = #literal
    * insert SearchInclude("ServiceRequest:patient", #SHOULD)
    * insert SearchInclude("ServiceRequest:requester", #SHOULD)
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known service request records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("authored", ServiceRequest-authored, #date, #SHOULD, "Allows filtering orders based on when they were created.")
    * insert SearchParam("category", ServiceRequest-category, #token, #SHALL, "Allows retrieving only those referrals related to physical activity.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows retrieving only orders for particular types of interventions.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those orders for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("performer", ServiceRequest-performer, #reference, #SHOULD, "Allows filtering to only retrieve orders targeted to a specific performer.")
    * insert SearchParam("requester", ServiceRequest-requester, #reference, #SHOULD, "Allows filtering to only retrieve orders solicited by a specific provider.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHOULD, "Allows filtering to only retrieve active or completed orders.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Subscription
    * insert SupportedProfile(BackportSubscription, #SHALL)
    * documentation = "Allows establishing and maintaining subscriptions for Patient Task as well as for referal tasks for 'light' service providers."
    * insert Interaction(#create, #SHALL, "Allows establishing a new subscription.")
    * insert Interaction(#update, #SHALL, "Allows revising an existing subscription - to cancel it or change the email address or SMS number.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of existing subscriptions prior to update.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam2("topic", http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic, #uri, #SHOULD, "Allows filtering for just subscriptions for Task monitoring.")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known subscription records.")
    * insert SearchParam("url",Subscription-url, #uri, #SHALL, "Allows filtering only for subscriptions that notify a specific endpoint.  Substituting for the 'owner' search parameter\, which doesn't exist in R4.")    
//    * insert SearchParam("owner",Subscription-owner, #reference, #SHALL, "Allows filtering only for tasks that are owned by the subscribing system.")    
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Task
    * insert SupportedProfile(PATaskForReferralManagement, #SHALL)
    * insert SupportedProfile(SDOHCCTaskForPatient, #SHOULD)
    * documentation = "Allows retrieval and updating of tasks seeking fulfillment of orders and referrals as well as creation, updating and retrieval of tasks assigned to patients."
    * insert Interaction(#create, #SHALL, "Allows a service provider to create a patient-assigned Task.")
    * insert Interaction(#update, #SHALL, "Allows existing tasks to be updated - to change their status and/or to attach 'outputs' resulting from the Task.")
    * insert Interaction(#search-type, #SHALL, "Allows polling multiple tasks simultaneously\, as well as retrieving referenced resources as part of a single query.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchInclude("Task:focus", #SHOULD)
    * insert SearchInclude("Task:output", #SHOULD)
    * insert SearchInclude("Task:patient", #SHOULD)
    * insert SearchInclude("ServiceRequest:requester", #SHOULD)
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known task records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering for 'fulfill' tasks as opposed to others. Some systems may require code to be included as a filter criteria as different Task codes may correspond to  different internal database tables.")
    * insert SearchParam("owner",Task-owner, #reference, #SHALL, "Allows filtering only for tasks that are assigned to a particular owner (or alternatively\, tasks that have not yet been assigned\).")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those tasks for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("requester", Task-requester, #reference, #SHALL, "Allows filtering to only retrieve tasks initiated by a specific provider.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHALL, "Allows filtering to only retrieve active or completed orders.")
    * insert SearchParam("focus", Task-focus, #reference, #SHALL, "Allows retrieving the task(s\) seeking fulfillment of a particular ServiceRequest.")
    * insert SearchParam2("output", http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/Task-output-reference, #reference, #SHOULD, "Allows for the 'output' of a Task to be included when retrieving a Task.")


---

// File: input/fsh/CS-Patient.fsh

Instance:       pa-patient-engagement
InstanceOf:     CapabilityStatement
Usage:          #definition
Title:        "PA Patient Engagement"
* description = "Describes the expected capabilities of a system intended for use by patients and caregivers of patients who are working to enhance or maintain their levels of physical activity.  These will typically be web-based or mobile applications."
* url         = "http://hl7.org/fhir/us/physical-activity/CapabilityStatement/pa-patient-engagement"
* name        = "PAPatientEngagement"
* status      = #active
* kind        = #requirements
* date        = 2022-06-18
* imports[+]  = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client"
* fhirVersion = #4.0.1
* format[+]   = #json
* format[+]   = #xml
* rest[+]
  * mode          = #client
  * documentation = "Systems for patients  only act as RESTful clients.  While they may create and store some of their own data, this data is always made available by 'pushing' it to the server of a [care manager](CapabilityStatement-pa-care-manager.html) or a [full service provider](CapabilityStatement-pa-service-provider-full.html) system."
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #CarePlan
    * insert SupportedProfile(PACarePlan, #SHALL)
    * documentation = "Allows accessing and manipulating Care Plans."
    * insert Interaction(#update, #SHOULD, "Allows a patient system to make updates to a plan.")
    * insert Interaction(#search-type, #SHOULD, "Allows retrieval of care plans for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how a care plan has changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to the plan.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known care plan records - and more specifically\, retrieving more than one in a single call to check for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", CarePlan-category, #token, #SHALL, "Allows retrieving only those plans related to physical activity.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering plans based on the time frame they apply(ied\) to.")
    * insert SearchParam("status", CarePlan-status, #token, #SHOULD, "Allows filtering to only active or draft plans.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those plans for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #DiagnosticReport
    * insert SupportedProfile(PADiagnosticReport, #SHALL)
    * documentation = "Allows viewiong of the reports summarizing the results of a referral."
    * insert Interaction(#search-type, #SHALL, "Allows searching for recorded reports.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("basedOn", Procedure-based-on, #reference, #SHOULD, "Allows filtering to reports created in fulfillement of a particular order or referral.")
    * insert SearchParam("code", clinical-code, #token, #SHOULD, "Allows filtering to specific types of reports.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering reports based on the period the cover.")
    * insert SearchParam("category", Procedure-category, #token, #SHALL, "Allows retrieving only those reports related to physical activity.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those reports for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("performer", ServiceRequest-performer, #reference, #SHOULD, "Allows filtering to only retrieve reports created by a specific performer.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHOULD, "Allows filtering to only retrieve active or completed reports.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #DocumentReference
    * insert SupportedProfile(USCoreDocumentReferenceProfile, #SHALL)
    * documentation = "Allows retrieving PDFs or similar content referenced by a Patient Task.  These generally will not be patient-specific resources."
    * insert Interaction(#create, #SHOULD, "Allows a ServiceProvider to add additional images/documents for later retrieval.")
    * insert Interaction(#update, #MAY, "Allows a ServiceProvider to replace an existing image/document with a newer version.")
    * insert Interaction(#search-type, #SHOULD, "Allows monitoring of previously-retrieved DocumentReferences in the event the image/document is amended\, corrected\, or updated.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known document-reference records - and more specifically\, retrieving  more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("contenttype", DocumentReference-contenttype, #token, #SHOULD, "Allows filtering for only PDFs\, images\, etc.")
    * insert SearchParam("category", DocumentReference-category, #token, #SHOULD, "Allows filtering for only records tied to a particular category (e.g. physical-activity\).")
    * insert SearchParam("description", DocumentReference-description, #string, #SHOULD, "Allows filtering based on words found in the description - i.e. with a 'contains' search.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Goal
    * insert SupportedProfile(PAGoal, #SHALL)
    * documentation = "Allows accessing and potentially updating patient goals."
    * insert Interaction(#update, #SHOULD, "Allows patients to modify a goal - for example shifting target values or dates\, updating the status\, etc.  Allowing patients and care-givers to help maintain goals is a key aspect of a patient-centered care plan.  However not all care manager or service provider systems (or their organizations\) yet have the technical mechanisms or policies in place to support this.")
    * insert Interaction(#search-type, #SHOULD, "Allows retrieval of goals for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how goals have changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to goals.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known goal records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Goal-category, #token, #SHOULD, "Allows retrieving only those goals related to physical activity.")
    * insert SearchParam("lifecycle-status", Goal-lifecycle-status, #token, #SHOULD, "Allows filtering to only active\, completed or other goal statuses.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those goals for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("target-date", Goal-target-date, #date, #SHOULD, "Allows filtering goals based on when they're to be achieved.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Observation
    * insert SupportedProfile(PAObservationEVSDaysPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerDay, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationStrengthDaysPerWeek, #SHOULD)
    * insert SupportedProfile(PAObservationActivityMeasure, #SHOULD)
    * insert SupportedProfile(PAObservationActivityGroup, #SHOULD)
    * insert SupportedProfile(PAObservationTimeMeasure, #SHOULD)
    * documentation = "Allows recording and viewing patient physical activity observations."
    * insert Interaction(#create, #SHALL, "Allows recording new observations")
    * insert Interaction(#update, #SHOULD, "Allows correcting a previous observation or revising the status")
    * insert Interaction(#search-type, #SHALL, "Allows viewing of previously recorded observations - e.g. to help calculate primary measures and/or to view trends.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known observation records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Observation-category, #token, #SHALL, "Allows retrieving only those observations related to physical activity.  As well\, many clinical systems will require searches to specify a category so the server knows which part of the database to search as different types of observations are stored in different areas.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering to only retrieve a specific type of physical activity vital sign or supporting observation.")
    * insert SearchParam("date", clinical-date, #date, #SHALL, "Allows filtering to only retrieve a observations from a particular time period.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those observations for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("status", Observation-status, #token, #SHALL, "Allows excluding entered-in-error or non-final observations.")
    * insert SearchParam("value-quantity", Observation-value-quantity, #quantity, #SHOULD, "Allows retrieval of only those observations that fall in a particular range.  Particularly useful for cross-patient queries.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Patient
    * documentation = "Allows searching of the patients."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the patients.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("birthdate", individual-birthdate, #date, #MAY, "Allows filtering of individuals based on their date of birth.")
    * insert SearchParam("family", individual-family, #string, #MAY, "Allows filtering of individuals based on their family name.")
    * insert SearchParam("gender", individual-gender, #token, #MAY, "Allows filtering of individuals based on their gender.")
    * insert SearchParam("given", individual-given, #string, #MAY, "Allows filtering of individuals based on their given name.")
    * insert SearchParam("identifier", Patient-identifier, #token, #SHALL, "Enables filtering of patients based on their unique identifiers.")
    * insert SearchParam("name", Patient-name, #string, #SHALL, "Enables filtering of patients based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Practitioner
    * documentation = "Allows searching of the practitioners."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioners.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("identifier", Practitioner-identifier, #token, #SHOULD, "Enables filtering of practitioners based on their unique identifiers.")
    * insert SearchParam("name", Practitioner-name, #string, #SHOULD, "Enables filtering of practitioners based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #PractitionerRole
    * documentation = "Allows searching of the practitioner roles."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioner roles.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("specialty", PractitionerRole-specialty, #token, #SHOULD, "Allows filtering of practitioner specialty.")
    * insert SearchParam("practitioner", PractitionerRole-practitioner, #reference, #SHOULD, "Enables filtering of practitioner roles based on the associated practitioner.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Questionnaire
    * insert SupportedProfile(SDCQuestionnairePopulateObservation, #SHOULD)
    * insert SupportedProfile(SDCQuestionnaireExtractObservation, #SHOULD)
    * documentation = "Allows retrieval of Questionnaires referenced by a patient Task."
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of questionnaires to be completed.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known questionnaire records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("url", Questionnaire-url, #uri, #SHALL, "Allows retrieving a referenced Questionnaire.")
    * insert SearchParam("version", Questionnaire-version, #token, #SHOULD, "Allows retrieving a specific version of a referenced questionnaire.")
    * insert SearchParam("context-type-value", Questionnaire-context-type-value, #composite, #SHOULD, "Allows filtering for Questionnaires that are phyical activity-related.")
    * insert SearchParam("identifier", Questionnaire-identifier, #token, #SHOULD, "Allows retrieving Questionnaires with a known identifier.")
    * insert SearchParam("publisher", Questionnaire-publisher, #string, #SHOULD, "Allows retrieving Questionnaires based on who is responsible for having defined the form.")
    * insert SearchParam("status", Questionnaire-status, #token, #SHOULD, "Allows filtering to only retrieve active questionnaires.")
    * insert SearchParam("subject-type", Questionnaire-subject-type, #token, #SHOULD, "Allows retrieving Questionnaires that are intended to provide information about patients - as opposed to practitioners\, organizations\, etc.")
    * insert SearchParam("title", Questionnaire-title, #string, #SHOULD, "Allows searching for forms by name.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #QuestionnaireResponse
    * insert SupportedProfile(SDCQuestionnaireResponse, #SHALL)
    * documentation = "Allows recording and updating of questionnaire responses in response to patient tasks."
    * insert Interaction(#update, #SHALL, "Allows correction of or continued editing of a previously recorded questionnaire response.")
    * insert Interaction(#create, #SHALL, "Allows other systems to record questionnaire responses.")
    * insert Interaction(#search-type, #SHALL,"Allows retrieval of completed or in-progresss questionnaire responses.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known questionnaire response records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("author", QuestionnaireResponse-author, #reference, #SHALL, "Allows filtering responses previously created by a particular individual.")
    * insert SearchParam("authored", QuestionnaireResponse-authored, #date, #SHOULD, "Allows filtering responses based on when they were completed.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those responses for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("questionnaire", QuestionnaireResponse-questionnaire, #reference, #SHALL, "Allows retrieving a referenced Questionnaire.")
    * insert SearchParam("status", QuestionnaireResponse-status, #token, #SHOULD, "Allows filtering to only retrieve completed questionnaire responses.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #ServiceRequest
    * insert SupportedProfile(PAServiceRequest, #SHALL)
    * documentation = "Allows retrieval 'execise prescriptions' - referrals addressed to the patient themselves - as well as monitoring of referrals assigned to others."
    * insert Interaction(#search-type, #SHALL, "Allows searching for orders or referrals for a particular patient or for updates to previously retrieved orders.")
    * referencePolicy = #literal
    * insert SearchInclude("ServiceRequest:patient", #SHOULD)
    * insert SearchInclude("ServiceRequest:requester", #SHOULD)
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known service request records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("authored", ServiceRequest-authored, #date, #SHOULD, "Allows filtering orders based on when they were created.")
    * insert SearchParam("category", ServiceRequest-category, #token, #SHALL, "Allows retrieving only those referrals related to physical activity.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows retrieving only orders for particular types of interventions.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those orders for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("performer", ServiceRequest-performer, #reference, #SHOULD, "Allows filtering to only retrieve orders targeted to a specific performer.")
    * insert SearchParam("requester", ServiceRequest-requester, #reference, #SHOULD, "Allows filtering to only retrieve orders solicited by a specific provider.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHOULD, "Allows filtering to only retrieve active or completed orders.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Subscription
    * insert SupportedProfile(BackportSubscription, #SHALL)
    * documentation = "Allows establishing and maintaining subscriptions for Task notifications.  Only needed if not handled manually."
    * insert Interaction(#create, #SHALL, "Allows establishing a new subscription.")
    * insert Interaction(#update, #SHALL, "Allows revising an existing subscription - to cancel it or change the email address or SMS number.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of existing subscriptions prior to update.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam2("topic", http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic, #uri, #SHOULD, "Allows filtering for just subscriptions for Task monitoring.")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known subscription records.")
    * insert SearchParam("url",Subscription-url, #uri, #SHALL, "Allows filtering only for subscriptions that notify a specific endpoint.  Substituting for the 'owner' search parameter\, which doesn't exist in R4.")    
//    * insert SearchParam("owner",Subscription-owner, #reference, #SHALL, "Allows filtering only for tasks that are owned by the Patient Engagement system.")    
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Task
    * insert SupportedProfile(PATaskForReferralManagement, #MAY)
    * insert SupportedProfile(SDOHCCTaskForPatient, #SHALL)
    * documentation = "Allows creation of tasks assigned to the patient, as well as potentially monitoring Tasks assigned to a service provider."
    * insert Interaction(#create, #SHALL, "Allows a creation of Task on a Full Service Provider system.")
    * insert Interaction(#update, #SHALL, "Allows updating the status and/or specifying outputs for patient tasks.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of existing tasks to check for changes or prior to making updates.  This will typically be prompted by a subscription notification.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchInclude("Task:focus", #SHOULD)
    * insert SearchInclude("Task:output", #SHOULD)
    * insert SearchInclude("Task:patient", #SHOULD)
    * insert SearchInclude("ServiceRequest:requester", #SHOULD)
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known task records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering for 'fulfill' tasks as opposed to others. Some systems may require code to be included as a filter criteria as different Task codes may correspond to  different internal database tables.")
    * insert SearchParam("owner",Task-owner, #reference, #SHALL, "Allows filtering only for tasks that are assigned to a particular owner (or alternatively\, tasks that have not yet been assigned\).")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those tasks for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("requester", Task-requester, #reference, #SHOULD, "Allows filtering to only retrieve tasks initiated by a specific provider.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHALL, "Allows filtering to only retrieve active or completed orders.")
    * insert SearchParam("focus", Task-focus, #reference, #SHOULD, "Allows retrieving the task(s\) seeking fulfillment of a particular ServiceRequest.")
    * insert SearchParam2("output", http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/Task-output-reference, #reference, #SHOULD, "Allows for the 'output' of a Task to be included when retrieving a Task.")


---

// File: input/fsh/CS-ServiceProviderFull.fsh

Instance:       pa-service-provider-full
InstanceOf:     CapabilityStatement
Usage:          #definition
Title:        "PA Service Provider (Full)"
* description = "Describes the expected capabilities of a system used by a personal trainer, community fitness organization, or other entity that delivers services that help a patient to improve or maintain their level of physical activity.  This set of capabilities is appropriate for service providers that CAN expose their own FHIR server and that store Tasks, reports and other resources locally and expose them for query by [Care Managers](CapabilityStatement-pa-care-manager.html) and [Patient Engagement systems](CapabilityStatement-pa-patient-engagement.html)."
* url         = "http://hl7.org/fhir/us/physical-activity/CapabilityStatement/pa-service-provider-full"
* name        = "PAServiceProviderFull"
* status      = #active
* kind        = #requirements
* date        = 2022-06-18
* imports[+]  = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client"
* fhirVersion = #4.0.1
* format[+]   = #json
* format[+]   = #xml
* rest[+]
  * mode          = #client
  * documentation = "A 'full' Service Provider needs less client capabilities than a [light](CapabilityStatement-pa-service-provider-light.html) one, as it does not rely on the [care manager](CapabilityStatement-pa-care-manager.html) to store the Task or report.  However, it might still need to access and sometimes manipulate observations, goals, plans and other resources stored on external systems."
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #CarePlan
    * insert SupportedProfile(PACarePlan, #SHALL)
    * documentation = "Allows accessing and manipulating Care Plans stored on a Care Manager."
    * insert Interaction(#update, #SHOULD, "Allows a service provider to make updates to a plan owned by a care manager.")
    * insert Interaction(#search-type, #SHOULD, "Allows retrieval of care plans for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how a care plan has changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to the plan.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known care plan records - and more specifically\, retrieving more than one in a single call to check for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", CarePlan-category, #token, #SHOULD, "Allows retrieving only those plans related to physical activity.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering plans based on the time frame they apply(ied\) to.")
    * insert SearchParam("lifecycle-status", CarePlan-status, #token, #SHALL, "Allows filtering to only active or draft plans.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those plans for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Condition
    * insert SupportedProfile(PAConditionLowPA, #SHOULD)
    * documentation = "Accessing the formal 'low physical activity' condition may be necessary to support prior authorization or claims."
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of conditions for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how a condition has changed over time.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known condition records - and more specifically\, retrieving more than one in a single call to check for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Condition-category, #token, #SHALL, "Allows retrieving only those plans related to physical activity.")
    * insert SearchParam("clinical-status", Condition-clinical-status, #token, #SHOULD, "Allows filtering to only active conditions.")
    * insert SearchParam("code", clinical-code, #token, #SHOULD, "Allows retrieving specific patient conditions - e.g. all 'low physical activity' conditions.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those plans for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("verification-status", Condition-verification-status, #token, #SHOULD, "Allows excluding refuted or erroneous conditions.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Goal
    * insert SupportedProfile(PAGoal, #SHALL)
    * documentation = "Allows accessing and potentially updating goals maintained by a Care Manager."
    * insert Interaction(#update, #SHOULD, "Allows patients or service providers to modify a goal - for example shifting target values or dates\, updating the status\, etc.  Allowing patients\, care-givers\, and service providers to help maintain goals is a key aspect of a patient-centered care plan.  However\, not all care manager systems (or their organizations\) yet have the technical mechanisms or policies in place to support this.")
    * insert Interaction(#search-type, #SHOULD, "Allows retrieval of goals for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how goals have changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to goals.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known goal records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Goal-category, #token, #SHOULD, "Allows retrieving only those goals related to physical activity.")
    * insert SearchParam("lifecycle-status", Goal-lifecycle-status, #token, #SHOULD, "Allows filtering to only active\, completed or other goal statuses.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those goals for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("target-date", Goal-target-date, #date, #SHOULD, "Allows filtering goals based on when they're to be achieved.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Observation
    * insert SupportedProfile(PAObservationEVSDaysPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerDay, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationStrengthDaysPerWeek, #SHOULD)
    * insert SupportedProfile(PAObservationActivityMeasure, #SHOULD)
    * insert SupportedProfile(PAObservationActivityGroup, #SHOULD)
    * insert SupportedProfile(PAObservationTimeMeasure, #SHOULD)
    * documentation = "Allows accessing observations maintained by a Care Manager."
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of observations for a given patient.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known observation records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Observation-category, #token, #SHALL, "Allows retrieving only those observations related to physical activity.  As well\, many clinical systems will require searches to specify a category so the server knows which part of the database to search as different types of observations are stored in different areas.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering to only retrieve a specific type of physical activity vital sign or supporting observation.")
    * insert SearchParam("date", clinical-date, #date, #SHALL, "Allows filtering to only retrieve a observations from a particular time period.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those observations for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("status", Observation-status, #token, #SHALL, "Allows excluding entered-in-error or non-final observations.")
    * insert SearchParam("value-quantity", Observation-value-quantity, #quantity, #SHOULD, "Allows retrieval of only those observations that fall in a particular range.  Particularly useful for cross-patient queries.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Patient
    * documentation = "Allows searching of the patients."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the patients.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("birthdate", individual-birthdate, #date, #MAY, "Allows filtering of individuals based on their date of birth.")
    * insert SearchParam("family", individual-family, #string, #MAY, "Allows filtering of individuals based on their family name.")
    * insert SearchParam("gender", individual-gender, #token, #MAY, "Allows filtering of individuals based on their gender.")
    * insert SearchParam("given", individual-given, #string, #MAY, "Allows filtering of individuals based on their given name.")
    * insert SearchParam("identifier", Patient-identifier, #token, #SHALL, "Enables filtering of patients based on their unique identifiers.")
    * insert SearchParam("name", Patient-name, #string, #SHALL, "Enables filtering of patients based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Practitioner
    * documentation = "Allows searching of the practitioners."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioners.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("identifier", Practitioner-identifier, #token, #SHOULD, "Enables filtering of practitioners based on their unique identifiers.")
    * insert SearchParam("name", Practitioner-name, #string, #SHOULD, "Enables filtering of practitioners based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #PractitionerRole
    * documentation = "Allows searching of the practitioner roles."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioner roles.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("specialty", PractitionerRole-specialty, #token, #SHOULD, "Allows filtering of practitioner specialty.")
    * insert SearchParam("practitioner", PractitionerRole-practitioner, #reference, #SHOULD, "Enables filtering of practitioner roles based on the associated practitioner.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #ServiceRequest
    * insert SupportedProfile(PAServiceRequest, #SHALL)
    * documentation = "Allows retrieval of physical activity-related referrals from Care managers."
    * insert Interaction(#search-type, #SHALL, "Allows searching for orders or referrals for a particular patient or for updates to previously retrieved orders.")
    * referencePolicy = #literal
    * insert SearchInclude("ServiceRequest:patient", #SHOULD)
    * insert SearchInclude("ServiceRequest:requester", #SHOULD)
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known service request records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("authored", ServiceRequest-authored, #date, #SHOULD, "Allows filtering orders based on when they were created.")
    * insert SearchParam("category", ServiceRequest-category, #token, #SHALL, "Allows retrieving only those referrals related to physical activity.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows retrieving only orders for particular types of interventions.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those orders for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("performer", ServiceRequest-performer, #reference, #SHOULD, "Allows filtering to only retrieve orders targeted to a specific performer.")
    * insert SearchParam("requester", ServiceRequest-requester, #reference, #SHOULD, "Allows filtering to only retrieve orders solicited by a specific provider.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHOULD, "Allows filtering to only retrieve active or completed orders.")
  * resource[+]
    * extension[$conf].valueCode = #MAY
    * type = #Subscription
    * insert SupportedProfile(BackportSubscription, #SHALL)
    * documentation = "Allows subscribing to Patient Tasks hosted on a CareManager."
    * insert Interaction(#create, #SHALL, "Allows establishing a new subscription.")
    * insert Interaction(#update, #SHALL, "Allows revising an existing subscription - to cancel it or change the email address or SMS number.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of existing subscriptions prior to update.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam2("topic", http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic, #uri, #SHOULD, "Allows filtering for just subscriptions for Task monitoring.")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known subscription records.")
    * insert SearchParam("url",Subscription-url, #uri, #SHALL, "Allows filtering only for subscriptions that notify a specific endpoint.  Substituting for the 'owner' search parameter\, which doesn't exist in R4.")    
//    * insert SearchParam("owner",Subscription-owner, #reference, #SHALL, "Allows filtering only for tasks that are owned by the subscribing system.")    
* rest[+]
  * mode = #server
  * documentation = "Unlike a [light Service Provider](CapabilityStatement-pa-service-provider-light.html), 'full' Service Providers expose a RESTful endpoint to allow submission of tasks as well as creation and/or manipulation of other resources by [Care Managers](CapabilityStatement-pa-care-manager.html) and [Patient Engagement systems](CapabilityStatement-pa-patient-engagement.html)."
  * security.service[+]  = $security#OAuth
  * security.description = "See additional guidance on the [security](security.html) page."
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #CarePlan
    * insert SupportedProfile(PACarePlan, #SHALL)
    * documentation = "Shares and, ideally, allows external systems to add and update care plans. If 'create' interaction is supported, 'update' becomes mandatory."
    * insert Interaction(#update, #SHOULD, "Allows patients or service providers to modify a care plan.  Allowing patients\, care-givers\, and service providers to help maintain care plans is a key aspect of a patient-centered care plan.  However\, not all care manager systems (or their organizations\) yet have the technical mechanisms or policies in place to support this. Please note if 'create' is supported\, 'update' becomes mandatory\, as systems supporting creation should have the necessary mechanisms in place to support updates.")
    * insert Interaction(#create, #SHOULD, "Allows patients or service providers to add additional physical activity related care plans.  As with updates\, this is a key part of a patient-centered care plan\, but not all systems or organizations will be able to do this.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of care plans for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how a care plan has changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to the plan.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known care plan records - and more specifically\, retrieving more than one in a single call to check for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", CarePlan-category, #token, #SHOULD, "Allows retrieving only those plans related to physical activity.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering plans based on the time frame they apply(ied\) to.")
    * insert SearchParam("lifecycle-status", CarePlan-status, #token, #SHALL, "Allows filtering to only active or draft plans.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those plans for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #DocumentReference
    * insert SupportedProfile(USCoreDocumentReferenceProfile, #SHALL)
    * documentation = "Allows retrieving PDFs or similar content referenced by a Patient Task.  These generally will not be patient-specific resources."
    * insert Interaction(#create, #SHOULD, "Allows a ServiceProvider to add additional images/documents for later retrieval.")
    * insert Interaction(#update, #MAY, "Allows a ServiceProvider to replace an existing image/document with a newer version.")
    * insert Interaction(#search-type, #SHOULD, "Allows monitoring of previously-retrieved DocumentReferences in the event the image/document is amended\, corrected\, or updated.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known document-reference records - and more specifically\, retrieving  more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("contenttype", DocumentReference-contenttype, #token, #SHOULD, "Allows filtering for only PDFs\, images\, etc.")
    * insert SearchParam("category", DocumentReference-category, #token, #SHOULD, "Allows filtering for only records tied to a particular category (e.g. physical-activity\).")
    * insert SearchParam("description", DocumentReference-description, #string, #SHOULD, "Allows filtering based on words found in the description - i.e. with a 'contains' search.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Goal
    * insert SupportedProfile(PAGoal, #SHALL)
    * documentation = "Shares and, ideally, allows external systems to add and update goals. If 'create' interaction is supported, 'update' becomes mandatory."
    * insert Interaction(#update, #SHOULD, "Allows patients or service providers to modify a goal - for example shifting target values or dates\, updating the status\, etc.  Allowing patients\, care-givers\, and service providers to help maintain goals is a key aspect of a patient-centered care plan.  However\, not all care manager systems (or their organizations\) yet have the technical mechanisms or policies in place to support this. Please note if 'create' is supported\, 'update' becomes mandatory\, as systems supporting creation should have the necessary mechanisms in place to support updates.")
    * insert Interaction(#create, #SHOULD, "Allows patients or service providers to add additional physical activity related goals.  As with updates\, this is a key part of a patient-centered care plan\, but not all systems or organizations will be able to do this.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of goals for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how goals have changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to goals.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known goal records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Goal-category, #token, #SHALL, "Allows retrieving only those goals related to physical activity.")
    * insert SearchParam("lifecycle-status", Goal-lifecycle-status, #token, #SHOULD, "Allows filtering to only active\, completed or other goal statuses.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those goals for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("target-date", Goal-target-date, #date, #SHOULD, "Allows filtering goals based on when they're to be achieved.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Observation
    * insert SupportedProfile(PAObservationEVSDaysPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerDay, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationStrengthDaysPerWeek, #SHOULD)
    * insert SupportedProfile(PAObservationActivityMeasure, #SHOULD)
    * insert SupportedProfile(PAObservationActivityGroup, #SHOULD)
    * insert SupportedProfile(PAObservationTimeMeasure, #SHOULD)
    * documentation = "Exposes and allows manipulation of physical activity vital sign and supporting observations."
    * insert Interaction(#update, #SHOULD, "Allows correction of or adding comments to previously recorded observations.")
    * insert Interaction(#create, #SHALL, "Allows other systems to record physical-activity related observations.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of observations for a given patient.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known observation records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Observation-category, #token, #SHALL, "Allows retrieving only those observations related to physical activity.  As well\, many clinical systems will require searches to specify a category so the server knows which part of the database to search as different types of observations are stored in different areas.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering to only retrieve a specific type of physical activity vital sign or supporting observation.")
    * insert SearchParam("date", clinical-date, #date, #SHALL, "Allows filtering to only retrieve a observations from a particular time period.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those observations for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("status", Observation-status, #token, #SHALL, "Allows excluding entered-in-error or non-final observations.")
    * insert SearchParam("value-quantity", Observation-value-quantity, #quantity, #SHOULD, "Allows retrieval of only those observations that fall in a particular range.  Particularly useful for cross-patient queries.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Patient
    * documentation = "Allows searching of the patients."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the patients.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("birthdate", individual-birthdate, #date, #MAY, "Allows filtering of individuals based on their date of birth.")
    * insert SearchParam("family", individual-family, #string, #MAY, "Allows filtering of individuals based on their family name.")
    * insert SearchParam("gender", individual-gender, #token, #MAY, "Allows filtering of individuals based on their gender.")
    * insert SearchParam("given", individual-given, #string, #MAY, "Allows filtering of individuals based on their given name.")
    * insert SearchParam("identifier", Patient-identifier, #token, #SHALL, "Enables filtering of patients based on their unique identifiers.")
    * insert SearchParam("name", Patient-name, #string, #SHALL, "Enables filtering of patients based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Practitioner
    * documentation = "Allows searching of the practitioners."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioners.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("identifier", Practitioner-identifier, #token, #SHOULD, "Enables filtering of practitioners based on their unique identifiers.")
    * insert SearchParam("name", Practitioner-name, #string, #SHOULD, "Enables filtering of practitioners based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #PractitionerRole
    * documentation = "Allows searching of the practitioner roles."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioner roles.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("specialty", PractitionerRole-specialty, #token, #SHOULD, "Allows filtering of practitioner specialty.")
    * insert SearchParam("practitioner", PractitionerRole-practitioner, #reference, #SHOULD, "Enables filtering of practitioner roles based on the associated practitioner.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #DiagnosticReport
    * insert SupportedProfile(PADiagnosticReport, #SHALL)
    * documentation = "Allows retrieval of the reports on physical activity-related interventions."
    * insert Interaction(#search-type, #SHALL, "Allows searching for reports for a particular patient or checking for updates to previously retrieved records.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("basedOn", Procedure-based-on, #reference, #SHOULD, "Allows filtering to reports created in fulfillement of a particular order or referral.")
    * insert SearchParam("code", clinical-code, #token, #SHOULD, "Allows filtering to specific types of reports.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering reports based on the period the cover.")
    * insert SearchParam("category", Procedure-category, #token, #SHALL, "Allows retrieving only those reports related to physical activity.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those reports for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("performer", ServiceRequest-performer, #reference, #SHOULD, "Allows filtering to only retrieve reports created by a specific performer.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHOULD, "Allows filtering to only retrieve active or completed reports.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Questionnaire
    * insert SupportedProfile(SDCQuestionnairePopulateObservation, #SHOULD)
    * insert SupportedProfile(SDCQuestionnaireExtractObservation, #SHOULD)
    * documentation = "Allows retrieval of Questionnaires to be filled in."
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of questionnaires to be completed.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known questionnaire records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("url", Questionnaire-url, #uri, #SHALL, "Allows retrieving a referenced Questionnaire.")
    * insert SearchParam("version", Questionnaire-version, #token, #SHOULD, "Allows retrieving a specific version of a referenced questionnaire.")
    * insert SearchParam("context-type-value", Questionnaire-context-type-value, #composite, #SHOULD, "Allows filtering for Questionnaires that are phyical activity-related.")
    * insert SearchParam("identifier", Questionnaire-identifier, #token, #SHOULD, "Allows retrieving Questionnaires with a known identifier.")
    * insert SearchParam("publisher", Questionnaire-publisher, #string, #SHOULD, "Allows retrieving Questionnaires based on who is responsible for having defined the form.")
    * insert SearchParam("status", Questionnaire-status, #token, #SHOULD, "Allows filtering to only retrieve active questionnaires.")
    * insert SearchParam("subject-type", Questionnaire-subject-type, #token, #SHOULD, "Allows retrieving Questionnaires that are intended to provide information about patients - as opposed to practitioners\, organizations\, etc.")
    * insert SearchParam("title", Questionnaire-title, #string, #SHOULD, "Allows searching for forms by name.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #QuestionnaireResponse
    * insert SupportedProfile(SDCQuestionnaireResponse, #SHALL)
    * documentation = "Allows recording and retrieval of questionnaire responses."
    * insert Interaction(#update, #SHOULD, "Allows correction of or continued editing of a previously recorded questionnaire response.")
    * insert Interaction(#create, #SHALL, "Allows other systems to record questionnaire responses.")
    * insert Interaction(#search-type, #SHALL,"Allows retrieval of completed or in-progresss questionnaire responses.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known questionnaire response records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("author", QuestionnaireResponse-author, #reference, #SHALL, "Allows filtering responses previously created by a particular individual.")
    * insert SearchParam("authored", QuestionnaireResponse-authored, #date, #SHOULD, "Allows filtering responses based on when they were completed.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those responses for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("questionnaire", QuestionnaireResponse-questionnaire, #reference, #SHALL, "Allows retrieving a referenced Questionnaire.")
    * insert SearchParam("status", QuestionnaireResponse-status, #token, #SHOULD, "Allows filtering to only retrieve completed questionnaire responses.")
  * resource[+]
    * extension[$conf].valueCode = #MAY
    * type = #ServiceRequest
    * insert SupportedProfile(PAServiceRequest, #SHALL)
    * documentation = "Allows 'prescribing' physical activity for a patient - for retrieval by a Patient Engagement system."
    * insert Interaction(#search-type, #SHALL, "Allows searching for orders or referrals for a particular patient or for updates to previously retrieved orders.")
    * referencePolicy = #literal
    * insert SearchInclude("ServiceRequest:patient", #SHOULD)
    * insert SearchInclude("ServiceRequest:requester", #SHOULD)
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known service request records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("authored", ServiceRequest-authored, #date, #SHOULD, "Allows filtering orders based on when they were created.")
    * insert SearchParam("category", ServiceRequest-category, #token, #SHALL, "Allows retrieving only those referrals related to physical activity.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows retrieving only orders for particular types of interventions.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those orders for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("performer", ServiceRequest-performer, #reference, #SHOULD, "Allows filtering to only retrieve orders targeted to a specific performer.")
    * insert SearchParam("requester", ServiceRequest-requester, #reference, #SHOULD, "Allows filtering to only retrieve orders solicited by a specific provider.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHOULD, "Allows filtering to only retrieve active or completed orders.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Subscription
    * insert SupportedProfile(BackportSubscription, #SHALL)
    * documentation = "Allows establishing and maintaining subscriptions for Task notifications.  Needed for both referral and patient tasks."
    * insert Interaction(#create, #SHALL, "Allows establishing a new subscription.")
    * insert Interaction(#update, #SHALL, "Allows revising an existing subscription - to cancel it or change the email address or SMS number.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of existing subscriptions prior to update.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam2("topic", http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic, #uri, #SHOULD, "Allows filtering for just subscriptions for Task monitoring.")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known subscription records.")
    * insert SearchParam("url",Subscription-url, #uri, #SHALL, "Allows filtering only for subscriptions that notify a specific endpoint.  Substituting for the 'owner' search parameter\, which doesn't exist in R4.")    
//    * insert SearchParam("owner",Subscription-owner, #reference, #SHALL, "Allows filtering only for tasks that are owned by the subscribing system.")    
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Task
    * insert SupportedProfile(PATaskForReferralManagement, #SHALL)
    * insert SupportedProfile(SDOHCCTaskForPatient, #SHALL)
    * documentation = "Allows receipt of requests to fulfill referrals from a Service Provider, possible cancellations or notes on those requests, as well as surfacing the status of the referral back to the Care Manager and possibly Patient Engagement systems."
    * insert Interaction(#create, #SHALL, "Allows a service provider to create a patient-assigned Task.")
    * insert Interaction(#update, #SHALL, "Allows existing tasks to be updated - to change their status and/or to attach 'outputs' resulting from the Task.")
    * insert Interaction(#search-type, #SHALL, "Allows polling multiple tasks simultaneously\, as well as retrieving referenced resources as part of a single query.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchInclude("Task:focus", #SHOULD)
    * insert SearchInclude("Task:output", #SHOULD)
    * insert SearchInclude("Task:patient", #SHOULD)
    * insert SearchInclude("ServiceRequest:requester", #SHOULD)
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known task records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering for 'fulfill' tasks as opposed to others. Some systems may require code to be included as a filter criteria as different Task codes may correspond to  different internal database tables.")
    * insert SearchParam("owner",Task-owner, #reference, #SHALL, "Allows filtering only for tasks that are assigned to a particular owner (or alternatively\, tasks that have not yet been assigned\).")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those tasks for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("requester", Task-requester, #reference, #SHALL, "Allows filtering to only retrieve tasks initiated by a specific provider.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHALL, "Allows filtering to only retrieve active or completed orders.")
    * insert SearchParam("focus", Task-focus, #reference, #SHALL, "Allows retrieving the task(s\) seeking fulfillment of a particular ServiceRequest.")
    * insert SearchParam2("output", http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/Task-output-reference, #reference, #SHOULD, "Allows for the 'output' of a Task to be included when retrieving a Task.")


---

// File: input/fsh/CS-ServiceProviderLight.fsh

Instance:       pa-service-provider-light
InstanceOf:     CapabilityStatement
Usage:          #definition
Title:        "PA Service Provider (Light)"
* description = "Describes the expected capabilities of a system used by a personal trainer, community fitness organization, or other entity that delivers services that help a patient to improve or maintain their level of physical activity.  This set of capabilities is appropriate for service providers that CANNOT expose their own FHIR server and that rely on the Care Manager to store Tasks, reports and other resources."
* url         = "http://hl7.org/fhir/us/physical-activity/CapabilityStatement/pa-service-provider-light"
* name        = "PAServiceProviderLight"
* status      = #active
* kind        = #requirements
* date        = 2022-06-18
* imports[+]  = "http://hl7.org/fhir/us/core/CapabilityStatement/us-core-client"
* fhirVersion = #4.0.1
* format[+]   = #json
* format[+]   = #xml
* rest[+]
  * mode          = #client
  * documentation = "A 'light' Service Provider has less sophistication than a [full Service Provider](CapabilityStatement-pa-service-provider-full.html).  They rely exclusively on the [care manager](CapabilityStatement-pa-care-manager.html) to store the Tasks and any reports associated with referrals.  Therefore, all interactions are handled as 'client' functionality."
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #CarePlan
    * insert SupportedProfile(PACarePlan, #SHALL)
    * documentation = "Allows accessing and manipulating Care Plans stored on a Care Manager."
    * insert Interaction(#update, #SHOULD, "Allows a service provider to make updates to a plan owned by a care manager.")
    * insert Interaction(#search-type, #SHOULD, "Allows retrieval of care plans for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how a care plan has changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to the plan.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known care plan records - and more specifically\, retrieving more than one in a single call to check for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", CarePlan-category, #token, #SHALL, "Allows retrieving only those plans related to physical activity.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering plans based on the time frame they apply(ied\) to.")
    * insert SearchParam("lifecycle-status", CarePlan-status, #token, #SHALL, "Allows filtering to only active or draft plans.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those plans for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Condition
    * insert SupportedProfile(PAConditionLowPA, #SHOULD)
    * documentation = "Accessing the formal 'low physical activity' condition may be necessary to support prior authorization or claims."
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of conditions for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how a condition has changed over time.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known condition records - and more specifically\, retrieving more than one in a single call to check for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Condition-category, #token, #SHALL, "Allows retrieving only those plans related to physical activity.")
    * insert SearchParam("clinical-status", Condition-clinical-status, #token, #SHOULD, "Allows filtering to only active conditions.")
    * insert SearchParam("code", clinical-code, #token, #SHOULD, "Allows retrieving specific patient conditions - e.g. all 'low physical activity' conditions.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those plans for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("verification-status", Condition-verification-status, #token, #SHOULD, "Allows excluding refuted or erroneous conditions.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #DiagnosticReport
    * insert SupportedProfile(PADiagnosticReport, #SHALL)
    * documentation = "Allows creation of the reports summarizing the results of a referral."
    * insert Interaction(#search-type, #SHALL, "Allows searching for reports already submitted.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("basedOn", Procedure-based-on, #reference, #SHOULD, "Allows filtering to reports created in fulfillement of a particular order or referral.")
    * insert SearchParam("code", clinical-code, #token, #SHOULD, "Allows filtering to specific types of reports.")
    * insert SearchParam("date", clinical-date, #date, #SHOULD, "Allows filtering reports based on the period the cover.")
    * insert SearchParam("category", Procedure-category, #token, #SHALL, "Allows retrieving only those reports related to physical activity.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those reports for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("performer", ServiceRequest-performer, #reference, #SHOULD, "Allows filtering to only retrieve reports created by a specific performer.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHOULD, "Allows filtering to only retrieve active or completed reports.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #DocumentReference
    * insert SupportedProfile(USCoreDocumentReferenceProfile, #SHALL)
    * documentation = "Allows looking up PDFs or similar content to referenced in Patient Tasks and later retrieved by Patient Engagement systems.  Note: These resources will not be patient-specific."
    * insert Interaction(#create, #SHOULD, "Allows adding additional images/documents for later retrieval.")
    * insert Interaction(#update, #MAY, "Allows replacing an existing image/document with a newer version.")
    * insert Interaction(#search-type, #SHOULD, "Allows searching for appropriate an appropriate image/document to reference.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known document reference records - and more specifically\, retrieving  more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("contenttype", DocumentReference-contenttype, #token, #SHOULD, "Allows filtering for only PDFs\, images\, etc.")
    * insert SearchParam("category", DocumentReference-category, #token, #SHOULD, "Allows filtering for only records tied to a particular category (e.g. physical-activity\).")
    * insert SearchParam("description", DocumentReference-description, #string, #SHOULD, "Allows filtering based on words found in the description - i.e. with a 'contains' search.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Goal
    * insert SupportedProfile(PAGoal, #SHALL)
    * documentation = "Allows accessing and potentially updating goals maintained by a Care Manager."
    * insert Interaction(#update, #SHOULD, "Allows patients or service providers to modify a goal - for example shifting target values or dates\, updating the status\, etc.  Allowing patients\, care-givers\, and service providers to help maintain goals is a key aspect of a patient-centered care plan.  However\, not all care manager systems (or their organizations\) yet have the technical mechanisms or policies in place to support this.")
    * insert Interaction(#create, #SHOULD, "Allows patients or service providers to add additional physical activity related goals.  As with updates\, this is a key part of a patient-centered care plan\, but not all systems or organizations will be able to do this.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of goals for a given patient.")
    * insert Interaction(#history-instance, #MAY, "Allows seeing how goals have changed over time.  This may be particularly important if multiple stakeholders have the ability to make adjustments to goals.  However\, history is not widely supported.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known goal records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Goal-category, #token, #SHOULD, "Allows retrieving only those goals related to physical activity.")
    * insert SearchParam("lifecycle-status", Goal-lifecycle-status, #token, #SHOULD, "Allows filtering to only active\, completed or other goal statuses.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those goals for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("target-date", Goal-target-date, #date, #SHOULD, "Allows filtering goals based on when they're to be achieved.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Observation
    * insert SupportedProfile(PAObservationEVSDaysPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerDay, #SHALL)
    * insert SupportedProfile(PAObservationEVSMinutesPerWeek, #SHALL)
    * insert SupportedProfile(PAObservationStrengthDaysPerWeek, #SHOULD)
    * insert SupportedProfile(PAObservationActivityMeasure, #SHOULD)
    * insert SupportedProfile(PAObservationActivityGroup, #SHOULD)
    * insert SupportedProfile(PAObservationTimeMeasure, #SHOULD)
    * documentation = "Allows accessing observations maintained by a Care Manager."
    * insert Interaction(#update, #SHALL, "Allows correction of or adding comments to previously recorded observations.")
    * insert Interaction(#create, #SHALL, "Allows other systems to record physical-activity related observations.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of observations for a given patient.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known observation records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("category", Observation-category, #token, #SHALL, "Allows retrieving only those observations related to physical activity.  As well\, many clinical systems will require searches to specify a category so the server knows which part of the database to search as different types of observations are stored in different areas.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering to only retrieve a specific type of physical activity vital sign or supporting observation.")
    * insert SearchParam("date", clinical-date, #date, #SHALL, "Allows filtering to only retrieve a observations from a particular time period.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those observations for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("status", Observation-status, #token, #SHALL, "Allows excluding entered-in-error or non-final observations.")
    * insert SearchParam("value-quantity", Observation-value-quantity, #quantity, #SHOULD, "Allows retrieval of only those observations that fall in a particular range.  Particularly useful for cross-patient queries.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Patient
    * documentation = "Allows searching of the patients."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the patients.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("birthdate", individual-birthdate, #date, #MAY, "Allows filtering of individuals based on their date of birth.")
    * insert SearchParam("family", individual-family, #string, #MAY, "Allows filtering of individuals based on their family name.")
    * insert SearchParam("gender", individual-gender, #token, #MAY, "Allows filtering of individuals based on their gender.")
    * insert SearchParam("given", individual-given, #string, #MAY, "Allows filtering of individuals based on their given name.")
    * insert SearchParam("identifier", Patient-identifier, #token, #SHALL, "Enables filtering of patients based on their unique identifiers.")
    * insert SearchParam("name", Patient-name, #string, #SHALL, "Enables filtering of patients based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #Practitioner
    * documentation = "Allows searching of the practitioners."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioners.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("identifier", Practitioner-identifier, #token, #SHOULD, "Enables filtering of practitioners based on their unique identifiers.")
    * insert SearchParam("name", Practitioner-name, #string, #SHOULD, "Enables filtering of practitioners based on their full name.")
  * resource[+]
    * extension[$conf].valueCode = #SHOULD
    * type = #PractitionerRole
    * documentation = "Allows searching of the practitioner roles."
    * insert Interaction(#search-type, #SHALL, "Allows searching of the practitioner roles.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known reports - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("specialty", PractitionerRole-specialty, #token, #SHOULD, "Allows filtering of practitioner specialty.")
    * insert SearchParam("practitioner", PractitionerRole-practitioner, #reference, #SHOULD, "Enables filtering of practitioner roles based on the associated practitioner.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Questionnaire
    * insert SupportedProfile(SDCQuestionnairePopulateObservation, #SHOULD)
    * insert SupportedProfile(SDCQuestionnaireExtractObservation, #SHOULD)
    * documentation = "Allows retrieval of Questionnaires to be filled in."
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of questionnaires to be completed.")
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known questionnaire records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("url", Questionnaire-url, #uri, #SHALL, "Allows retrieving a referenced Questionnaire.")
    * insert SearchParam("version", Questionnaire-version, #token, #SHOULD, "Allows retrieving a specific version of a referenced questionnaire.")
    * insert SearchParam("context-type-value", Questionnaire-context-type-value, #composite, #SHOULD, "Allows filtering for Questionnaires that are phyical activity-related.")
    * insert SearchParam("identifier", Questionnaire-identifier, #token, #SHOULD, "Allows retrieving Questionnaires with a known identifier.")
    * insert SearchParam("publisher", Questionnaire-publisher, #string, #SHOULD, "Allows retrieving Questionnaires based on who is responsible for having defined the form.")
    * insert SearchParam("status", Questionnaire-status, #token, #SHOULD, "Allows filtering to only retrieve active questionnaires.")
    * insert SearchParam("subject-type", Questionnaire-subject-type, #token, #SHOULD, "Allows retrieving Questionnaires that are intended to provide information about patients - as opposed to practitioners\, organizations\, etc.")
    * insert SearchParam("title", Questionnaire-title, #string, #SHOULD, "Allows searching for forms by name.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #QuestionnaireResponse
    * insert SupportedProfile(SDCQuestionnaireResponse, #SHALL)
    * documentation = "Allows recording and retrieval of questionnaire responses."
    * insert Interaction(#update, #SHOULD, "Allows correction of or continued editing of a previously recorded questionnaire response.")
    * insert Interaction(#create, #SHALL, "Allows other systems to record questionnaire responses.")
    * insert Interaction(#search-type, #SHALL,"Allows retrieval of completed or in-progresss questionnaire responses.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known questionnaire response records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("author", QuestionnaireResponse-author, #reference, #SHALL, "Allows filtering responses previously created by a particular individual.")
    * insert SearchParam("authored", QuestionnaireResponse-authored, #date, #SHOULD, "Allows filtering responses based on when they were completed.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those responses for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("questionnaire", QuestionnaireResponse-questionnaire, #reference, #SHALL, "Allows retrieving a referenced Questionnaire.")
    * insert SearchParam("status", QuestionnaireResponse-status, #token, #SHOULD, "Allows filtering to only retrieve completed questionnaire responses.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #ServiceRequest
    * insert SupportedProfile(PAServiceRequest, #SHALL)
    * documentation = "Allows retrieval of physical activity-related referrals from Care managers."
    * insert Interaction(#search-type, #SHALL, "Allows searching for orders or referrals for a particular patient or for updates to previously retrieved orders.")
    * referencePolicy = #literal
    * insert SearchInclude("ServiceRequest:patient", #SHOULD)
    * insert SearchInclude("ServiceRequest:requester", #SHOULD)
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known service request records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("authored", ServiceRequest-authored, #date, #SHOULD, "Allows filtering orders based on when they were created.")
    * insert SearchParam("category", ServiceRequest-category, #token, #SHALL, "Allows retrieving only those referrals related to physical activity.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows retrieving only orders for particular types of interventions.")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those orders for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("performer", ServiceRequest-performer, #reference, #SHOULD, "Allows filtering to only retrieve orders targeted to a specific performer.")
    * insert SearchParam("requester", ServiceRequest-requester, #reference, #SHOULD, "Allows filtering to only retrieve orders solicited by a specific provider.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHOULD, "Allows filtering to only retrieve active or completed orders.")
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Subscription
    * insert SupportedProfile(BackportSubscription, #SHALL)
    * documentation = "Allows establishing and maintaining subscriptions for Task notifications.  Only needed if not handled manually."
    * insert Interaction(#create, #SHALL, "Allows establishing a new subscription.")
    * insert Interaction(#update, #SHALL, "Allows revising an existing subscription - to cancel it or change the email address or SMS number.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of existing subscriptions prior to update.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchParam2("topic", http://hl7.org/fhir/uv/subscriptions-backport/SearchParameter/Subscription-topic, #uri, #SHOULD, "Allows filtering for just subscriptions for Task monitoring.")
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known subscription records.")
    * insert SearchParam("url",Subscription-url, #uri, #SHALL, "Allows filtering only for subscriptions that notify a specific endpoint.  Substituting for the 'owner' search parameter\, which doesn't exist in R4.")    
//    * insert SearchParam("owner",Subscription-owner, #reference, #SHALL, "Allows filtering only for tasks that are owned by the Service Provider system.")    
  * resource[+]
    * extension[$conf].valueCode = #SHALL
    * type = #Task
    * insert SupportedProfile(PATaskForReferralManagement, #SHALL)
    * insert SupportedProfile(SDOHCCTaskForPatient, #SHALL)
    * documentation = "Allows creation of tasks for patients, as well as retrieval of Tasks assigned to the Service Provider."
    * insert Interaction(#create, #SHALL, "Allows a service provider to create a patient-assigned Task.")
    * insert Interaction(#update, #SHALL, "Allows existing tasks to be updated - to change their status and/or to attach 'outputs' resulting from the Task.")
    * insert Interaction(#search-type, #SHALL, "Allows retrieval of existing tasks to check for changes or prior to making updates.  This will typically be prompted by a subscription notification.")
    * versioning      = #versioned-update
    * referencePolicy = #literal
    * insert SearchInclude("Task:focus", #SHOULD)
    * insert SearchInclude("Task:output", #SHOULD)
    * insert SearchInclude("Task:patient", #SHOULD)
    * insert SearchInclude("ServiceRequest:requester", #SHOULD)
    * insert SearchParam("_id", Resource-id, #token, #SHALL, "Allows retrieving known task records - and more specifically\, retrieving more than one in a single call to poll for updates.")
    * insert SearchParam("_lastUpdated", Resource-lastUpdated, #date, #SHOULD, "Allows filtering for only records that have changed since last query.")
    * insert SearchParam("code", clinical-code, #token, #SHALL, "Allows filtering for 'fulfill' tasks as opposed to others. Some systems may require code to be included as a filter criteria as different Task codes may correspond to  different internal database tables.")
    * insert SearchParam("owner",Task-owner, #reference, #SHALL, "Allows filtering only for tasks that are assigned to a particular owner (or alternatively\, tasks that have not yet been assigned\).")
    * insert SearchParam("patient", clinical-patient, #reference, #SHALL, "Allows filtering to only those tasks for a specific patient.  Most systems will treat this as a mandatory search parameter\, though systems MAY support cross-patient search\, at least through bulk-data interfaces for payer or research use.")
    * insert SearchParam("requester", Task-requester, #reference, #SHALL, "Allows filtering to only retrieve tasks initiated by a specific provider.")
    * insert SearchParam("status", ServiceRequest-status, #token, #SHALL, "Allows filtering to only retrieve active or completed orders.")
    * insert SearchParam("focus", Task-focus, #reference, #SHALL, "Allows retrieving the task(s\) seeking fulfillment of a particular ServiceRequest.")
    * insert SearchParam2("output", http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/Task-output-reference, #reference, #SHOULD, "Allows for the 'output' of a Task to be included when retrieving a Task.")


---

// File: input/fsh/ObservationExerciseSupport.fsh

Profile:        PAObservationBase
Parent:         Observation
Id:             pa-observation-base
Title:          "PA Observation Base"
Description:    "A profile describing base requirements for all primary physical activity observations."
* ^abstract = true
* . ^definition = "A profile describing base requirements for all primary physical activity observations."
* implicitRules ..0
* modifierExtension ..0
* status MS
* status from ObservationStatus
  * ^short = "final | amended | corrected | entered-in-error"
  * ^comment = "In the vast majority of cases, the status value will be 'final'.  Systems are not expected to distinguish amended and corrected results."
* category
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "$this"
  * ^slicing.rules = #open
* category contains Activity 1..1 MS and PhysicalActivity 1..1 MS
* category[Activity] = $obsCategory#activity
  * ^short = "Activity (Required for U.S. Core)"
  * ^definition = "Observations that measure or record any bodily activity that enhances or maintains physical fitness and overall health and wellness."
* category[PhysicalActivity] = PATemporaryCodes#PhysicalActivity
  * ^short = "Physical Activity"
  * ^comment = "Systems that are conformant to the IG are expected to have the ability to record, share, and search using the category. However, it's worth noting that it's not necessary for the category to be stored. Furthermore, systems might contain data related to physical activity that does not comply with this IG, and consequently, the data may not be accessible when executing searches by category."
* code 1..1 MS 
* code from LOINCCodes (preferred)
* subject 1..1 MS
* subject only Reference(us-core-patient)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
* focus ..0
* specimen ..0
* effective[x] 1..1 MS
* effective[x] only dateTime or Period
* effectiveDateTime ^extension[$minLength].valueInteger = 10
//* effectiveDateTime ^extension[$typeMS].valueBoolean = true
* effectivePeriod.start 1..1 MS
  * ^extension[$minLength].valueInteger = 10
* effectivePeriod.end 1..1 MS
  * ^extension[$minLength].valueInteger = 10
* performer MS
* performer only Reference(USCorePatientProfile or USCorePractitionerProfile or USCorePractitionerRoleProfile or RelatedPerson)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest-or-logical"
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
* value[x] MS
* value[x] only CodeableConcept or Quantity
* valueCodeableConcept 0..1
* valueQuantity 0..1
* valueQuantity only SimpleQuantity
  * value 1..1 MS
  * system 1..1 
  * system = "http://unitsofmeasure.org"
  * code 1..1 MS
* note MS
  * ^comment = "...Comments allows supporting and qualifying information"
  * author[x] 1..1 MS
  * author[x] only Reference(Practitioner or Patient or RelatedPerson)
    * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest-or-logical"
    * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
    * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * time 1..1 MS
  * text MS


Profile:        PAObservationActivityMeasure
Parent:         PAObservationBase
Id:             pa-observation-activity-measure
Title:          "PA Observation - Supporting, Activity-based"
Description:    "A profile for observations that capture physical activity-related measures that are specific to a single
  physical activity."
* . ^definition = "A profile for observations that capture physical activity-related measures that are specific to a single physical activity."
* code from PAObservationActivityMeasures (extensible)
* effective[x]
  * ^type[0].extension[$typeMS].valueBoolean = true
  * ^comment = "...This will typically be a dateTime specific to the day.  If the information is available, a Period can be used to indicate the specific start and end times."
* value[x] ^comment = "...The value **SHALL** be constrained to the type and unit or ValueSet as indicated in [the table](measures.html#activity)"


Profile:        PAObservationActivityGroup
Parent:         PAObservationBase
Id:             pa-observation-activity-group
Title:          "PA Observation - Supporting, Activity Group"
Description:    "A profile for observations that collects a set of activity-related measures that all pertain to the same physical activity instance."
* . ^definition = "A profile for observations that collects a set of activity-related measures that all pertain to the same physical activity instance."
* code = PATemporaryCodes#PAPanel
* effective[x]
  * ^type[0].extension[$typeMS].valueBoolean = true
  * ^comment = "...This will typically be a dateTime specific to the day.  If the information is available, a Period can be used to indicate the specific start and end times.  It **SHOULD** be the same as the effective[x] value for all member Observations."
* value[x] ..0
* hasMember 1..* MS
* hasMember only Reference(PAObservationActivityMeasure)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"


Profile:        PAObservationTimeMeasure
Parent:         PAObservationBase
Id:             pa-observation-time-measure
Title:          "PA Observation - Supporting, Time-based"
Description:    "A profile for observations that capture physical activity-related measures that apply over an extended period, such as a day or week."
* . ^definition = "A profile for observations that capture physical activity-related measures that apply over an extended period, such as a day or week."
* code from PAObservationTimeMeasures (extensible)
* value[x] only Quantity
  * ^comment = "...The value **SHALL** be constrained to the unit as indicated in [the table](measures.html#time)"
* valueCodeableConcept ..0
* effective[x]
  * ^type[0].extension[$typeMS].valueBoolean = true
  * ^type[1].extension[$typeMS].valueBoolean = true
* component
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "code"
  * ^slicing.rules = #open
* component contains percentActive 0..1 MS
* component[percentActive]
  * code = PATemporaryCodes#DeviceActivePercentage
  * value[x] only Quantity
  * valueQuantity
    * system = "http://unitsofmeasure.org"
    * code = #%
    * value 1..1 MS


---

// File: input/fsh/ObservationExerciseVitalSign.fsh

Profile:        PAObservationEVS
Parent:         PAObservationBase
Id:             pa-observation-evs
Title:          "PA Observation EVS Base"
Description:    "A generic profile that encapsulates all the physical activity vital sign observations."
* ^abstract = true
* . ^definition = "A generic profile that encapsulates all the physical activity vital sign observations."
* code from PAObservationCodeEVS (required)
* effective[x] only dateTime
* effectivePeriod ..0
* value[x] only Quantity
* valueCodeableConcept ..0
* derivedFrom
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "resolve()"
  * ^slicing.rules = #open
* derivedFrom contains supportingObs 0..* MS
* derivedFrom[supportingObs] only Reference(PAObservationBase)
  * ^comment = "...While this element is not required to be supported, we encourage systems to track supporting observations"

Profile:        PAObservationEVSDaysPerWeek
Parent:         PAObservationEVS
Id:             pa-observation-evs-days-per-week
Title:          "PA Observation - EVS, Days/Week"
Description:    "A profile for observations that capture a patient's average days per week of moderate-to-vigorous physical activity."
* . ^definition = "A profile for observations that capture a patient's average days per week of moderate-to-vigorous physical activity."
* code = $loinc#89555-7
* valueQuantity.code = #d/wk
  
Profile:        PAObservationEVSMinutesPerDay
Parent:         PAObservationEVS
Id:             pa-observation-evs-min-per-day
Title:          "PA Observation - EVS, Minutes/Day"
Description:    "A profile for observations that capture a patient's average minutes per day of moderate-to-vigorous physical activity."
* . ^definition = "A profile for observations that capture a patient's average minutes per day of moderate-to-vigorous physical activity."
* code = $loinc#68516-4
* valueQuantity.code = #min/d

Profile:        PAObservationEVSMinutesPerWeek
Parent:         PAObservationEVS
Id:             pa-observation-evs-min-per-week
Title:          "PA Observation - EVS, Minutes/Week"
Description:    "A profile for observations that capture a patient's average minutes per week of moderate-to-vigorous physical activity."
* . ^definition = "A profile for observations that capture a patient's average minutes per week of moderate-to-vigorous physical activity."
* code = $loinc#82290-8
* valueQuantity.code = #min/wk

Profile:        PAObservationStrengthDaysPerWeek
Parent:         PAObservationEVS
Id:             pa-observation-strength-days-per-week
Title:          "PA Observation - EVS, Strength Days/Week"
Description:    "A profile for observations that capture a patient's average days per week of muscle-strengthening physical activity."
* . ^definition = "A profile for observations that capture a patient's average days per week of muscle-strengthening physical activity."
* code = $loinc#82291-6
* valueQuantity.code = #d/wk

---

// File: input/fsh/Planning.fsh

Profile:        PARelatedPerson
Parent:         RelatedPerson
Id:             pa-relatedperson
Title:          "PA Related Person"
Description:    "A profile on RelatedPerson that mirrors the requirements of future US Core versions"
* . ^definition = "A profile on RelatedPerson that mirrors the requirements of future US Core versions"
* obeys us-core-14
* implicitRules ..0
* modifierExtension ..0
* active MS
* patient 1..1 MS
* patient only Reference(USCorePatientProfile)
* relationship MS
  * ^condition = us-core-14
  * text 1..1 MS
* name MS
  * ^condition = us-core-14
  * obeys pa-relatedperson-1
  * given MS
  * family MS
* telecom MS
  * system 1..1 MS
  * value 1..1 MS
  * use MS
* address MS
  * line MS
  * city MS
  * state MS
  * postalCode MS

Invariant:   us-core-14
Description: "Either a name or a relationship SHALL be provided (or both)"
Expression:  "name.exists() or relationship.exists()"
Severity:    #error
XPath:       "exists(f:name) or exists(f:relationship)"

Invariant:   pa-relatedperson-1
Description: "At least one of given and family must exist"
Expression:  "given.exists() or family.exists()"
Severity:    #error
XPath:       "exists(f:given) or exists(f:family)"


Profile:        PACarePlan
Parent:         USCoreCarePlanProfile
Id:             pa-careplan
Title:          "PA Care Plan"
Description:    "A plan describing the plan to improve or maintain a patient's level of physical activity"
* . ^definition = "A plan describing the plan to improve or maintain a patient's level of physical activity"
* implicitRules ..0
* modifierExtension ..0
* text.div MS
* intent = #plan
  * ^short = "Plan"
* status ^comment = "In most instances, the 'status' of the CarePlan is expected to be 'active'. However, when the goals of the CarePlan are either achieved or no longer applicable, the status should be updated to 'completed' or 'revoked' respectively. While there are additional statuses available, they might not be universally used across all systems.  Even though source systems are only expected to support 'active' and 'completed', receiving systems must handle the others if present, though they do not need to differentiate additional statues other than 'entered-in-error'."
* period MS
  * start MS
  * end MS
* category 
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "$this"
  * ^slicing.rules = #open
* category contains PA 1..1 MS
* category[PA] = PATemporaryCodes#PhysicalActivity
* note MS
  * author[x] 1..1 MS
  // TODO - add support for PractitionerRole when we move to different US Core
  * author[x] only Reference(USCorePractitionerProfile or USCoreOrganizationProfile or USCorePatientProfile or PARelatedPerson)
    * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest-or-logical"
    * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
    * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
    * ^type[0].targetProfile[2].extension[$typeMS].valueBoolean = true
//    * ^type[0].targetProfile[3].extension[$typeMS].valueBoolean = true
  * time 1..1 MS
  * text MS


Invariant:    pa-goal-1
Description:  "Either a description or a target SHALL be provided (or both)"
Expression:   "description.exists() or target.exists()"
Severity:     #error
XPath:        "exists(f:description) or exists(f:target)"

Profile:        PAGoal
Parent:         USCoreGoalProfile
Id:             pa-goal
Title:          "PA Goal"
Description:    "A goal that sets a target for a patient's physical activity level"
* . ^definition = "A goal that sets a target for a patient's physical activity level"
* obeys pa-goal-1
* implicitRules ..0
* modifierExtension ..0
* achievementStatus MS
* category
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "$this"
  * ^slicing.rules = #open
* category contains PA 1..1 MS
* category[PA] = PATemporaryCodes#PhysicalActivity
* description.text MS
* target MS
  * modifierExtension ..0
  * measure 0..1 MS
  * measure from PAGoalMeasurement (extensible)
    * ^comment = "... If a target is specified with only a date and no measure, then it is generally indicating a due date for the overall Goal as specified in the description"
  * detailQuantity 1.. MS
    * value MS
    * code MS
    * system MS
    * system ^fixedUri = "http://unitsofmeasure.org"
* addresses MS
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "$this.resolve()"
  * ^slicing.rules = #open
* addresses contains PAIssues 0..* MS
* addresses[PAIssues] only Reference(PAConditionLowPA or PAObservationEVSMinutesPerWeek or PAObservationStrengthDaysPerWeek)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[2].extension[$typeMS].valueBoolean = true
* note MS
  * author[x] 1..1 MS
  // TODO Add support for PractitionerRole when we move to newer US Core
  * author[x] only Reference(USCorePractitionerProfile or USCoreOrganizationProfile or USCorePatientProfile or PARelatedPerson)
    * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest-or-logical"
    * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
    * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
    * ^type[0].targetProfile[2].extension[$typeMS].valueBoolean = true
//    * ^type[0].targetProfile[3].extension[$typeMS].valueBoolean = true
  * time 1..1 MS
  * text MS


Profile:        PAConditionLowPA
Parent:         USCoreCondition
Id:             pa-condition-low-pa
Title:          "PA Condition - Low Physical Activity"
Description:    "A condition that conveys the fact that a patient has a clinically significant and insufficient level of physical activity"
* . ^definition = "A condition that conveys the fact that a patient has a clinically significant and insufficient level of physical activity"
* implicitRules ..0
* modifierExtension ..0
* verificationStatus from PAConditionVerificationStatus (required)
  * ^short = "confirmed | refuted | entered-in-error"
* category 2..*
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "$this"
  * ^slicing.rules = #open
  * ^definition = "Category codes related to the condition. This element is intended to allow inclusion of any of the three codes from the US Core Condition Category codes or other extensibly identified existing concepts. However, in addition to these, a coding instance with the temporary code 'PhysicalActivity' should be included in this category."
* category contains PA 1..1 MS
//* category[PA] from PATemporaryCodesValueSet (required)
* category[PA] = PATemporaryCodes#PhysicalActivity
  * ^short = "Additional category indicating the condition is related to physical activity"
* code = $ICD10#Z72.3 "Lack of physical exercise"
  * ^short = "Lack of physical exercise"
* bodySite 0..0
* onset[x] MS 
* onset[x] only dateTime or Period
  * ^type[0].extension[$typeMS].valueBoolean = true
* abatement[x] MS 
* abatement[x] only dateTime or Period
  * ^type[0].extension[$typeMS].valueBoolean = true
* asserter MS 
* asserter only Reference(USCorePractitionerProfile or USCorePractitionerRoleProfile)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest-or-logical"
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
* stage 0..0
* evidence MS
  * modifierExtension ..0
  * detail
    * ^slicing.discriminator.type = #profile
    * ^slicing.discriminator.path = "resolve()"
    * ^slicing.rules = #open
  * detail contains SupportedDetail 0..* MS
  * detail[SupportedDetail] only Reference(PAObservationEVSMinutesPerDay or PAObservationEVSDaysPerWeek or PAObservationEVSMinutesPerWeek or PAObservationStrengthDaysPerWeek)
    * ^comment = "... A variety of resources might provide support for asserting this condition, however at minimum, systems must support the Physical Activity Vital Sign observations."
    * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
    * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
    * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true


Invariant: pa-sr-1
Description: "At least one of reasonCode or reasonReference must be provided"
Expression: "reasonCode.exists() or reasonReference.exists()"
Severity: #error
XPath: "exists(f:reasonCode) or exists(f:reasonReference)"


Profile:        PAServiceRequest
Parent:         ServiceRequest
Id:             pa-servicerequest
Title:          "PA Service Request"
Description:    "Represents orders and referrals for interventions that help to improve or maintain a patient's level of physical activity"
* . ^definition = "Represents orders and referrals for interventions that help to improve or maintain a patient's level of physical activity"
* obeys pa-sr-1 
* implicitRules ..0
* modifierExtension ..0
* extension contains 
    $pertainsToGoal named pertainsToGoal 0..* MS and
    $observationFocus named observationFocus 0..1
* extension[pertainsToGoal]
  * ^requirements = "Allows linking a referral or exercise prescription to the goal(s) it's trying to address"
  * valueReference only Reference(PAGoal)
    * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
* extension[observationFocus]
  * ^requirements = "Allows referrals seeking services for relatives rather than the patient themselves - e.g. training or counselling for parents of a minor."
  * valueReference only Reference(PARelatedPerson)
* intent MS
* intent from PAServiceRequestIntent
  * ^short   = "original-order | order | filler-order"
  * ^comment = "...Multiple codes are allowed to support situations where a Task might point to a filler order instead of an original.  However, in almost all cases, the intent should be 'original-order' or just 'order'."
* status MS
* status from PAServiceRequestStatus (required)
  * ^short = "draft | active | on-hold | revoked | completed | entered-in-error"
* category 1..*
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "$this"
  * ^slicing.rules = #open
* category contains PA 1..1 MS and USCore 0..*
* category[PA] = PATemporaryCodes#PhysicalActivity
* category[USCore] from PAServiceRequestCategory (required)
* priority MS
* doNotPerform ..0
* code 1..1 MS
* code from PAServiceRequestInterventions (extensible)
* subject 1..1 MS 
* subject only Reference(USCorePatientProfile)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
* occurrence[x] MS
* occurrence[x] only dateTime or Period or Timing
  * ^type[1].extension[$typeMS].valueBoolean = true
* occurrencePeriod MS
  * start MS
  * end MS
* authoredOn 1..1 MS
* requester 1..1 MS
* requester only Reference(USCorePractitionerProfile or USCorePractitionerRoleProfile)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest-or-logical"
* performer MS
* performer only Reference(USCorePatientProfile or USCorePractitionerProfile or USCorePractitionerRoleProfile or USCoreOrganizationProfile or PARelatedPerson)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest-or-logical"
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[2].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[3].extension[$typeMS].valueBoolean = true
* reasonCode MS
* reasonCode from USCoreConditionCode (extensible)
  * text MS
* reasonReference
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "resolve()"
  * ^slicing.rules = #open
* reasonReference contains SupportedReasonReference 0..* MS
* reasonReference[SupportedReasonReference] only Reference(USCoreCondition)
* supportingInfo
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "resolve()"
  * ^slicing.rules = #open
* supportingInfo contains SupportedSupportingInfo 0..* MS
* supportingInfo[SupportedSupportingInfo] only Reference(PAObservationEVS)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
* specimen 0..0
* note
  * ^short = "Additional details about the service request"
  * ^definition = "This field contains additional details about the service request (for e.g. the appropriate time and mechanism for the service provider to contact the patient). Please note that service providers typically won't see notes that are added once a ServiceRequest has been accepted."
  * author[x] 1..1 MS
  // TODO - add support for PractitionerRole when we move to different US Core
  * author[x] only Reference(USCorePractitionerProfile or USCoreOrganizationProfile)
    * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
    * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
    * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * time 1..1 MS
  * text MS

Profile:        PADiagnosticReport
Parent:         USCoreDiagnosticReportProfileNoteExchange
Id:             pa-diagnosticreport
Title:          "PA Intervention Report"
Description:    "Conveys a summary of the interventions and patient interactions that have occurred over the course of the services delivered by a Service Provider, typically in response to a referral"
* . ^definition = "Conveys a summary of the interventions and patient interactions that have occurred over the course of the services delivered by a Service Provider, typically in response to a referral"
* implicitRules ..0
* modifierExtension ..0
* basedOn
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "resolve()"
  * ^slicing.rules = #open
* basedOn contains SupportedBasedOn 0..* MS
* basedOn[SupportedBasedOn] only Reference(PAServiceRequest)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
* category 1..*
  * ^slicing.discriminator.type = #pattern
  * ^slicing.discriminator.path = "$this"
  * ^slicing.rules = #open
  * ^definition = "Category codes related to the service category. This element is intended to allow inclusion of any of the three codes from the US Core Diagnostic report Category codes or other extensibly identified existing concepts. However, in addition to these, a coding instance with the temporary code 'PhysicalActivity' should be included in this category."
* category contains PA 1..1 MS
* category[PA] = PATemporaryCodes#PhysicalActivity
  * ^short = "Additional category indicating that the service category is related to physical activity"
* status from PADiagnosticReportStatus
  * ^short = "partial | preliminary | final | amended | corrected | appended | entered-in-error"
* code from PADiagnosticReportType (extensible)
* encounter ^comment = "... While this is inherited as MustSupport from US Core, this element will typically not be relevant in the physical activity space as most reports will describe events spanning multiple encounters"
* result
  * ^slicing.discriminator.type = #profile
  * ^slicing.discriminator.path = "resolve()"
  * ^slicing.rules = #open
* result contains SupportedResult 0..* MS
* result[SupportedResult] only Reference(PAObservationEVS or PAObservationActivityMeasure or PAObservationTimeMeasure or PAObservationActivityGroup)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[2].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[3].extension[$typeMS].valueBoolean = true
* presentedForm
  * obeys pa-dr-1
  * contentType = urn:ietf:bcp:13#application/pdf
    * ^comment = "... Implementers are encouraged to identify additional formats they would like to see supported, if any."
  * data MS
    * ^condition = pa-dr-1
  * url MS
    * ^condition = pa-dr-1

Invariant:   pa-dr-1
Description: "At least one of data and url must be present."
Expression:  "data.exists() or url.exists()"
Severity:    #error
XPath:       "exists(f:data) or exists(f:url)"


Profile:        PATaskForReferralManagement
Parent:         Task
Id:             pa-task-for-referral-management
Title:          "PA Task for Referral Management"
Description:    "Represents a request for fulfillment of a physical activity-related referral or order and supports management of the same."
* . ^definition = "Represents a request for fulfillment of a physical activity-related referral or order and supports management of the same."
* obeys pa-taskrm-1
* implicitRules ..0
* modifierExtension ..0
* intent = #order
* status MS
* status from PATaskFulfillmentStatus (required)
  * ^condition = pa-taskrm-1
* statusReason MS
  * ^condition = pa-taskrm-1
  * text MS
* businessStatus ^comment = "... This may be used to convey more fine-grained status if such tracking
  is supported by the performer (and of interest to the requester).  Support for this element is
  optional."
  * text 1..1 MS
* intent = #order
  * ^short = "order"
* priority MS
* code ..1
* code = http://hl7.org/fhir/CodeSystem/task-code#fulfill
* focus 1..1 MS
* focus only Reference(PAServiceRequest)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
* for 1..1 MS
* for only Reference(USCorePatientProfile)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
* authoredOn 1..1 MS
* reasonCode.text 1..1 MS
* note MS
  * author[x] 1..1 MS
  // TODO - add support for PractitionerRole when we move to different US Core
  * author[x] only Reference(USCorePractitionerProfile or USCoreOrganizationProfile)
    * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
    * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
    * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * time 1..1 MS
  * text MS
* requester 1..1 MS
* requester only Reference(USCorePractitionerProfile or USCorePractitionerRoleProfile or USCoreOrganizationProfile)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[2].extension[$typeMS].valueBoolean = true
* owner 1..1 MS
* owner only Reference(USCorePractitionerProfile or USCorePractitionerRoleProfile or USCoreOrganizationProfile)
  * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
  * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[1].extension[$typeMS].valueBoolean = true
  * ^type[0].targetProfile[2].extension[$typeMS].valueBoolean = true
* output
  * ^slicing.discriminator[+].type = #pattern
  * ^slicing.discriminator[=].path = "type"
  * ^slicing.discriminator[+].type = #type
  * ^slicing.discriminator[=].path = "value"
  * ^slicing.rules = #open
  * modifierExtension ..0
* output contains
    PerformedActivityType 0..* MS and
    PerformedActivityReference 0..* MS
* output[PerformedActivityType]
  * modifierExtension ..0
  * type = $SDOHCC-Temp#resulting-activity
  * value[x] MS
  * value[x] only CodeableConcept
    * ^type[0].extension[$typeMS].valueBoolean = true
  * valueCodeableConcept MS
  * valueCodeableConcept.text 1..1 MS
* output[PerformedActivityReference]
  * modifierExtension ..0
  * type = $SDOHCC-Temp#resulting-activity
  * value[x] MS
  * value[x] only Reference(PADiagnosticReport or Resource)
    * ^type[0].extension[$typeMS].valueBoolean = true
    * ^type[0].profile[0] = "http://hl7.org/fhir/us/physical-activity/StructureDefinition/reference-rest"
    * ^type[0].targetProfile[0].extension[$typeMS].valueBoolean = true
  * valueReference MS
    * ^comment = "This element MAY resolve to a contained resource in situations where the resulting report is not available from a stand-alone endpoint"

Invariant:   pa-taskrm-1
Description: "Task.statusReason is required if Task.status is 'rejected', 'on-hold', 'cancelled', or 'failed' and is not permitted otherwise."
Expression:  "statusReason.exists() = (status='rejected' or status='on-hold' or status='cancelled' or status='failed')"
Severity:    #error
XPath:       "exists(f:statusReason) = (f:status/@value=('rejected', 'on-hold', 'cancelled', 'failed'))"


---

// File: input/fsh/Shared.fsh

// External Code Systems
Alias: $ICD10 = http://hl7.org/fhir/sid/icd-10-cm
Alias: $loinc = http://loinc.org
Alias: $sct   = http://snomed.info/sct

// FHIR Code Systems
Alias: $obsStatus       = http://hl7.org/fhir/observation-status
Alias: $reportStatus    = http://hl7.org/fhir/diagnostic-report-status
Alias: $requestIntent   = http://hl7.org/fhir/request-intent
Alias: $task-code       = http://hl7.org/fhir/CodeSystem/task-code

// THO Code Systems
Alias: $clinicalStatus    = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $goal-achievement  = http://terminology.hl7.org/CodeSystem/goal-achievement
Alias: $obsCategory       = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $organization-type = http://terminology.hl7.org/CodeSystem/organization-type
Alias: $practitioner-role = http://terminology.hl7.org/CodeSystem/practitioner-role
Alias: $relationships     = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $security          = http://terminology.hl7.org/CodeSystem/restful-security-service
Alias: $verifyStatus      = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $v2-0203           = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v3-RoleCode       = http://terminology.hl7.org/CodeSystem/v3-RoleCode

// IG Code Systems
Alias: $careplan-category  = http://hl7.org/fhir/us/core/CodeSystem/careplan-category
Alias: $condition-category = http://hl7.org/fhir/us/core/CodeSystem/condition-category
Alias: $SDOHCC-Temp        = http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes
Alias: $SDC-Temp           = http://hl7.org/fhir/uv/sdc/CodeSystem/temp


// Extensions
Alias: $conf             = http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation
Alias: $dar              = http://hl7.org/fhir/StructureDefinition/data-absent-reason
Alias: $minLength        = http://hl7.org/fhir/StructureDefinition/minLength
Alias: $pertainsToGoal   = http://hl7.org/fhir/StructureDefinition/resource-pertainsToGoal
Alias: $typeMS           = http://hl7.org/fhir/StructureDefinition/elementdefinition-type-must-support

// Inter-version extensions
Alias: $observationFocus = http://hl7.org/fhir/5.0/StructureDefinition/extension-Observation.focus
Alias: $instanceContent  = http://hl7.org/fhir/5.0/StructureDefinition/extension-ExampleScenario.instance.content
Alias: $verContent       = http://hl7.org/fhir/5.0/StructureDefinition/extension-ExampleScenario.instance.version.content
Alias: $verTitle         = http://hl7.org/fhir/5.0/StructureDefinition/extension-ExampleScenario.instance.version.title


// CapabilityStatement RuleSets
RuleSet: SupportedProfile(profile, conf)
* supportedProfile[+] = Canonical({profile})
  * extension[$conf].valueCode = {conf}

RuleSet: Interaction(code, conf, doc)
* interaction[+]
  * extension[$conf].valueCode = {conf}
  * code  = {code}
  * documentation = {doc}

RuleSet: SearchInclude(include, conf)
* searchInclude[+] = {include}
  * extension[$conf].valueCode = {conf}

RuleSet: SearchParam(name, def, type, conf, doc)
* searchParam[+]
  * extension[$conf].valueCode = {conf}
  * name = {name}
  * definition = "http://hl7.org/fhir/SearchParameter/{def}"
  * type = {type}
  * documentation = {doc}

RuleSet: SearchParam2(name, def, type, conf, doc)
* searchParam[+]
  * extension[$conf].valueCode = {conf}
  * name = {name}
  * definition = "{def}"
  * type = {type}
  * documentation = {doc}


// ExampleScenario RuleSets
RuleSet: ActorEntity(id, name, description)
* actor[+]
  * actorId = "{id}"
  * type = #entity
  * name = {name}
  * description = "{description}"

RuleSet: Instance_Empty(id, type, name, description)
* instance[+]
  * resourceId = "{id}"
  * resourceType = #{type}
  * name = {name}
  * description = "{description}"

RuleSet: Instance_Content(id, type, name, description)
* insert Instance_Empty({id}, {type}, {name}, [[{description}]])
* instance[=].extension[$instanceContent].valueReference = Reference({id})

RuleSet: InstanceVersion(id, name, content, description)
* instance[=].version[+]
  * extension[$verTitle].valueString = {name}
  * extension[$verContent].valueReference = Reference({content})
  * versionId = "{id}"
  * description = "{description}"

RuleSet: InstanceContains(id, version)
* instance[=].containedInstance
  * resourceId = "{id}"
  * versionId = "{version}"

RuleSet: ProcessSearch(num, name, sender, receiver, request, response, description)
* step[+].operation
  * number = "{num}"
  * type = "search-type"
  * name = {name}
  * description = "{description}"
  * initiator = "{sender}"
  * receiver = "{receiver}"
  * request.resourceId = "{request}"
  * response.resourceId = "{response}"

RuleSet: ProcessCreate(num, name, sender, receiver, request, version, description)
* step[+].operation
  * number = "{num}"
  * type = "create"
  * name = {name}
  * description = "{description}"
  * initiator = "{sender}"
  * receiver = "{receiver}"
  * request.resourceId = "{request}"
  * request.versionId = "{version}"

RuleSet: ProcessUpdate(num, name, sender, receiver, request, version, description)
* step[+].operation
  * number = "{num}"
  * type = "update"
  * name = {name}
  * description = "{description}"
  * initiator = "{sender}"
  * receiver = "{receiver}"
  * request.resourceId = "{request}"
  * request.versionId = "{version}"

RuleSet: SubNotification(parameters, endpointPrefix, subscriptionId)
* entry
  * fullUrl = "http://example.org/fhir/Parameters/{parameters}"
  * resource = {parameters}
  * request
    * method = #GET
    * url = "https://{endpointPrefix}.example.org/fhir/Subscription/{subscriptionId}/$status"
  * response.status = "200"

RuleSet: SubParameters(subscription, resource, number)
* parameter[subscription].valueReference = Reference({subscription})
* parameter[topic].valueCanonical = "http://hl7.org/fhir/us/sdoh-clinicalcare/SubscriptionTopic/Task"
* parameter[status].valueCode = #active
* parameter[type].valueCode = #event-notification
* parameter[notificationEvent]
  * part[eventNumber].valueString = "{number}"
  * part[eventFocus].valueReference = Reference({resource})


// PA RuleSets
RuleSet: Note(time, author, authorName, note)
* note[+]
  * authorReference = Reference({author}) {authorName}
  * time = {time}
  * text = "{note}"

RuleSet: ConditionPA(patient, patientName, asserter, asserterName, onset)
* clinicalStatus = $clinicalStatus#active
* verificationStatus = $verifyStatus#confirmed
* category[+] = $condition-category#health-concern
* subject = Reference({patient}) {patientName}
* onsetDateTime = "{onset}"
* asserter = Reference({asserter}) {asserterName}

RuleSet: Condition(patient, patientName, asserter, asserterName, code, display, onset)
* insert ConditionPA({patient}, {patientName}, {asserter}, {asserterName}, {onset})
* code = {code} {display}


RuleSet: CarePlan(start, end, patient, patientName, author, authorName, detail)
* text
  * status = #additional
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">{detail}</div>"
* status = #active
* intent = #plan
* subject = Reference({patient}) {patientName}
* period
  * start = "{start}"
  * start = "{end}"
* author = Reference({author}) {authorName}

RuleSet: Goal(patient, patientName, status, description)
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#{status}
* description.text = "{description}"
* subject = Reference({patient}) {patientName}

RuleSet: GoalTarget(due, loinc, display, quantity)
* target
  * measure = $loinc#{loinc} {display}
  * detailQuantity = {quantity}
  * dueDate = "{due}"

RuleSet: ExerciseReferral(start, end, patient, patientName, author, authorName, code, display)
* status = #active
* intent = #order
* priority = #routine
* code = {code} "{display}"
* subject = Reference({patient}) {patientName}
* requester = Reference({author}) {authorName}
* authoredOn = "{start}"
* occurrencePeriod
  * start = "{start}"
  * end = "{end}"

RuleSet: ExerciseRx(start, end, patient, patientName, author, authorName)
* insert ExerciseReferral({start}, {end}, {patient}, {patientName}, {author}, {authorName}, $sct#229065009, [[Exercise therapy (regime/therapy)]])
* performer = Reference({patient}) {patientName}

RuleSet: FulfillTask(patient, patientName, requester, requesterName, owner, ownerName, order, status, date)
* status = #{status}
* intent = #order
* code = $task-code#fulfill
* focus = Reference({order})
* requester = Reference({requester}) {requesterName}
* for = Reference({patient}) {patientName}
* authoredOn = "{date}"
* owner = Reference({owner}) {ownerName}

RuleSet: QuestionnaireTask(patient, patientName, requester, requesterName, priority, date, status, canonical, description)
* status = #{status}
* intent = #order
* priority = #{priority}
* code = $SDC-Temp#complete-questionnaire
* description = "{description}"
* for = Reference({patient}) {patientName}
* owner = Reference({patient}) {patientName}
* authoredOn = {date}
* requester = Reference({requester}) {requesterName}
* input[Questionnaire].valueCanonical = "{canonical}"

RuleSet: ReviewTask(patient, patientName, requester, requesterName, priority, date, status, content, description)
* status = #{status}
* intent = #order
* priority = #{priority}
* code = $SDOHCC-Temp#review-material
* focus = Reference({content})
* description = "{description}"
* for = Reference({patient}) {patientName}
* owner = Reference({patient}) {patientName}
* authoredOn = {date}
* requester = Reference({requester}) {requesterName}

RuleSet: DocRefVideo(url)
* status = #current
* content[+]
  * attachment
    * contentType = #video/mp4
    * url = "{url}"

RuleSet: Questionnaire(url, version)
* url = "{url}"
* version = "{version}"
* status = #active
* subjectType = #Patient

RuleSet: Question(linkId, type, text)
* item[+]
  * linkId = "{linkId}"
  * text = "{text}"
  * type = #{type}

RuleSet: QuestionnaireResponse(patient, patientName, date, questionnaire)
* status = #completed
* questionnaire = "{questionnaire}"
* subject = Reference({patient}) {patientName}
* authored = {date}

RuleSet: BooleanAnswer(linkId, answer, text)
* item[+]
  * linkId = "{linkId}"
  * text = "{text}"
  * answer.valueBoolean = {answer}

RuleSet: StringAnswer(linkId, answer, text)
* item[+]
  * linkId = "{linkId}"
  * text = "{text}"
  * answer.valueString = {answer}

RuleSet: DiagnosticReport(patient, patientName, performer, performerName, code, display, order, start, end, base64)
* basedOn = Reference({order})
* status = #final
* code = {code} {display}
* subject = Reference({patient}) {patientName}
* effectivePeriod
  * start = "{start}"
  * end   = "{end}"
* performer = Reference({performer}) {performerName}
* presentedForm
  * contentType = #application/pdf
  * data = {base64}


// Bundle RuleSets
RuleSet: SearchBundle(count, search)
* type = #searchset
* total = {count}
* link
  * relation = "self"
  * url = "{search}"

RuleSet: EntryMatch(type, resourceId)
* entry[+]
  * fullUrl = "http://example.org/fhir/{type}/{resourceId}"
  * resource = {resourceId}
  * search.mode = #match

RuleSet: EntryInclude(type, resourceId)
* entry[+]
  * fullUrl = "http://example.org/fhir/{type}/{resourceId}"
  * resource = {resourceId}
  * search.mode = #include


// Observation RuleSets
RuleSet: Observation(patient, patientName, performer, performerName, effective)
* status = #final
* subject = Reference({patient}) {patientName}
* effectiveDateTime = "{effective}"
* performer = Reference({performer}) {performerName}

RuleSet: ObservationPeriod(patient, patientName, performer, performerName, start, end)
* status = #final
* subject = Reference({patient}) {patientName}
* effectivePeriod
  * start = "{start}"
  * end = "{end}"
* performer = Reference({performer}) {performerName}

// Exercise Vital Sign
RuleSet: DaysPerWeek(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#89555-7 "How many days per week did you engage in moderate to strenuous physical activity in the last 30 days"
* valueQuantity = {value} 'd/wk' "days per week"

RuleSet: MinPerDay(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#68516-4 "On those days that you engage in moderate to strenuous exercise, how many minutes, on average, do you exercise"
* valueQuantity = {value} 'min/d' "minutes per day"

RuleSet: MinPerWeek(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#82290-8 "Frequency of moderate to vigorous aerobic physical activity"
* valueQuantity = {value} 'min/wk' "minutes per week"

RuleSet: StrengthPerWeek(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#82291-6 "Frequency of muscle-strengthening physical activity"
* valueQuantity = {value} 'd/wk' "days per week"

// Activity Measures
RuleSet: ActivityGroup(patient, patientName, performer, performerName, effective)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = PATemporaryCodes#PAPanel "Physical Activity Panel"

RuleSet: HasMember(target)
* hasMember = Reference({target})

RuleSet: ActivityType(patient, patientName, performer, performerName, effective, code, display)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#73985-4 "Exercise activity"
* valueCodeableConcept = $loinc#{code} {display}

RuleSet: ActivityDuration(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#55411-3 "Exercise duration"
* valueQuantity = {value} 'min' "minutes"

RuleSet: ActivityModerate(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#77592-4 "Moderate physical activity [IPAQ]"
* valueQuantity = {value} 'min' "minutes"

RuleSet: ActivityVigorous(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#77593-2 "Vigorous physical activity [IPAQ]"
* valueQuantity = {value} 'min' "minutes"

RuleSet: PeakHeartRate(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#55426-1 "Heart rate unspecified time maximum by Pedometer"
* valueQuantity = {value} '/min' "beats per minute"

RuleSet: MeanHeartRate(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#55425-3 "Heart rate unspecified time mean by Pedometer"
* valueQuantity = {value} '/min' "beats per minute"

RuleSet: ActivityCalories(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#55424-6 "Calories burned in unspecified time Pedometer"
* valueQuantity = {value} 'kcal' "kilocalories"

RuleSet: ActivityExperience(patient, patientName, performer, performerName, effective, code, display)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = PATemporaryCodes#Experience "Experience of Activity"
* valueCodeableConcept = PATemporaryCodes#{code} {display}


// Time-based Measures
RuleSet: DailySteps(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#41950-7 "Number of steps in 24 hour Measured"
* valueQuantity = {value} '/d' "steps per day"

RuleSet: DailyPeakHR(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#8873-2  "Heart rate 24 hour maximum"
* valueQuantity = {value} '/min' "beats per minute"

RuleSet: RestingHR(patient, patientName, performer, performerName, start, end, value)
* insert ObservationPeriod({patient}, {patientName}, {performer}, {performerName}, {start}, {end})
* code = $loinc#40443-4 "Heart rate --resting"
* valueQuantity = {value} '/min' "beats per minute"

RuleSet: DailyCalories(patient, patientName, performer, performerName, effective, value)
* insert Observation({patient}, {patientName}, {performer}, {performerName}, {effective})
* code = $loinc#41979-6 "Calories burned in 24 hour Calculated"
* valueQuantity = {value} 'kcal/d' "kilokalories per day"


Profile:        ReferenceRest
Parent:         Reference
Id:             reference-rest
Title:          "Reference - RESTful"
Description:    "A Reference data type where the referenced resource is expected to be resolvable RESTfully."
* reference 1..1 MS
* display MS

Profile:       ReferenceRestOrLogical
Parent:        Reference
Id:            reference-rest-or-logical
Title:         "Reference - RESTful or Logical"
Description:   "A Reference data type where the referenced resource could be resolvable RESTfully or pointed to logically."
* obeys PA-ident-1 and PA-ident-2
* reference MS
  * ^condition[+] = PA-ident-1
  * ^condition[+] = PA-ident-2
* identifier MS
  * ^condition[+] = PA-ident-1
  * system = "http://hl7.org/fhir/sid/us-npi"
  * value 1..1 MS
* display MS
  * ^condition[+] = PA-ident-2

Invariant:   PA-ident-1
Description: "reference or identifier must be present"
Expression:  "reference.exists() or identifier.exists()"
Severity:    #error
XPath:       "exists(f:reference) or exists(f:identifier)"

Invariant:   PA-ident-2
Description: "If reference is not present, display must be present"
Expression:  "reference.exists().not() implies display.exists()"
Severity:    #error
XPath:       "exists(f:reference) or exists(f:display)"

---

// File: input/fsh/Vocabulary.fsh

CodeSystem:     PATemporaryCodes
Id:             pa-temporary-codes
Title:          "Temporary Codes"
Description:    "Codes that will eventually be proposed for LOINC or other code systems, but which 
  do not yet exist in 'official' code systems"
* ^caseSensitive = true
* ^hierarchyMeaning = #is-a
* ^experimental  = false
* ^property[+].code = #notSelectable
* ^property[=].uri = "http://hl7.org/fhir/concept-properties#notSelectable"
* ^property[=].type = #boolean
* #PhysicalActivity       "Physical Activity"              "A category assigned to resources pertaining to evaluating, improving or sustaining a patient's level of physical activity."
* #PAPanel                "Physical Activity Panel"        "A panel observation intended to group measures related to a specific occurrence of physical activity."
* #DeviceActivePercentage "Device Active Percentage"       "Indicates the percentage of the overall time associated with an aggregate or average measure that the device capturing the raw data used to calculate the sum or average was enabled and available to take measurements.  For example, if a pedometer capturing steps was only worn for 2 hours when calculating a daily step count, the percentage would be 2/24 - or 8%."
* #PAConsultNote          "Physical activity Consult note" "A consult note that describes assessments and interventions related to a patient's level of physical activity."
* #Experience             "Experience of Activity"         "Indicates how the performer felt during the activity"
* #_experienceCode        "Experience codes"               "Codes used to evaluate a performer's experience"
* #_experienceCode ^property[+].code = #notSelectable
* #_experienceCode ^property[=].valueBoolean = true
  * #-5                   "Very Bad"
  * #-4
  * #-3                   "Bad"
  * #-2
  * #-1                   "Fairly Bad"
  * #0                    "Neutral"
  * #1                    "Fairly Good"
  * #2
  * #3                    "Good"
  * #4
  * #5                    "Very Good"

ValueSet:      PAFeelingScale
Id:            pa-feeling-scale
Title:         "PA Observation Activity Feeling Scale"
Description:   "Codes to express the 'experience' of a physical activity."
* ^experimental = false
* include codes from system PATemporaryCodes where concept is-a #_experienceCode

ValueSet:      PAObservationStatus
Id:            pa-observation-status
Title:         "PA Observation Statuses"
Description:   "Codes for Observation.status for Observations that are appropriate for exchange for physical activity purposes.  Excludes non-completed and unknown-status Observations.  Entered-in-error is retained to allow correction of previously shared results that should not have existed."
* ^experimental = false
* $obsStatus#final
* $obsStatus#amended
* $obsStatus#corrected
* $obsStatus#entered-in-error

ValueSet:      PAConditionVerificationStatus
Id:            pa-condition-verification-status
Title:         "PA Condition Verification Status"
Description:   "Codes for Condition.verificationStatus for conditions that are appropriate for exchange for physical activity purposes.  Excludes unconfirmed, provisional and differential."
* ^experimental = false
* $verifyStatus#confirmed
* $verifyStatus#refuted
* $verifyStatus#entered-in-error

ValueSet:      PADiagnosticReportStatus
Id:            pa-diagnosticreport-status
Title:         "PA DiagnosticReport Statuses"
Description:   "Codes for DiagnosticReport.status for reports that are appropriate for exchange for physical activity purposes.  Excludes non-completed and unknown-status Observations.  Entered-in-error is retained to allow correction of previously shared results that should not have existed."
* ^experimental = false
* $reportStatus#partial
* $reportStatus#preliminary
* $reportStatus#final
* $reportStatus#amended
* $reportStatus#corrected
* $reportStatus#appended
* $reportStatus#entered-in-error

ValueSet:      PAServiceRequestIntent
Id:            pa-servicerequest-intent
Title:         "PA ServiceRequest Intents"
Description:   "Codes for ServiceRequest.intent for exercise prescriptions and referrals."
* ^experimental = false
* $requestIntent#original-order
* $requestIntent#order
* $requestIntent#filler-order

ValueSet:      PAObservationCodeEVS
Id:            pa-observation-code-evs
Title:         "PA Observation Vital Sign Codes"
Description:   "Codes for Physical Activity Vital Sign components"
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false
* $loinc#89555-7 "How many days per week did you engage in moderate to strenuous physical activity in the last 30 days"
* $loinc#68516-4 "On those days that you engage in moderate to strenuous exercise, how many minutes, on average, do you exercise"
* $loinc#82290-8 "Frequency of moderate to vigorous aerobic physical activity"
* $loinc#82291-6 "Frequency of muscle-strengthening physical activity"

ValueSet:      PADiagnosticReportType
Id:            pa-diagnosticreport-type
Title:         "PA DiagnosticReport Types"
Description:   "Codes for types of diagnostic reports relevant to physical activity referrals"
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false
* $loinc#11488-4 "Consult Note"
* $loinc#34833-4 "Recreational therapy Consult note"
* $loinc#34822-7 "Physical medicine and rehab Consult note"
* $loinc#34824-3 "Physical therapy Consult note"
* PATemporaryCodes#PAConsultNote "Physical activity Consult note"

ValueSet:    PAServiceRequestCategory
Id:          pa-diagnosticreport-category
Title:       "PA ServiceRequest Category - USCore"
Description: "A subset of US-Core ServiceRequest category codes that are applicable to physical activity interventions."
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ^experimental  = false
* $sct#409063005 "Counselling"
* $sct#409073007 "Education"
* $sct#386053000 "Evaluation procedure"
* $sct#91251008  "Physical therapy procedure" // TODO: propose adding to US-Core

ValueSet:    PAServiceRequestInterventions
Id:          pa-servicerequest-code
Title:       "PA ServiceRequest Intervention Codes"
Description: "Codes for types of physical activity interventions"
* ^copyright = "This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* ^experimental = false
* $sct#819961005       "PA guidance"
* $sct#398636004       "PA assessment"
* $sct#435551000124105 "Counseling about physical activity"
* $sct#390893007       "Referral to physical activity program"
* $sct#426866005       "Determination of phyisical activity tolerance"
* $sct#229095001       "Exercise class"
* $sct#229065009       "Exercise therapy"

ValueSet:    PAObservationActivityMeasures
Id:          pa-observation-code-activity
Title:       "PA Observation Activity-related codes"
Description: "Codes physical activity measures that relate to a single contiguous period of physical activity/exercise"
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false
* $loinc#73985-4 "Exercise activity"
* $loinc#55411-3 "Exercise duration"
* $loinc#77592-4 "Moderate physical activity [IPAQ]"
* $loinc#77593-2 "Vigorous physical activity [IPAQ]"
* $loinc#55426-1 "Heart rate unspecified time maximum by Pedometer"
* $loinc#55425-3 "Heart rate unspecified time mean by Pedometer"
* $loinc#55424-6 "Calories burned in unspecified time Pedometer"
* PATemporaryCodes#Experience "Experience of Activity"

ValueSet:    PAObservationTimeMeasures
Id:          pa-observation-code-time
Title:       "PA Observation Time-related codes"
Description: "Codes for physical activity measures that aggregate or summarize activity over a time period, such as a day or week"
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc"
* ^experimental = false
* $loinc#41950-7 "Number of steps in 24 hour Measured"
* $loinc#8873-2  "Heart rate 24 hour maximum"
* $loinc#40443-4 "Heart rate --resting"
* $loinc#41979-6 "Calories burned in 24 hour Calculated"

ValueSet:    PATaskFulfillmentStatus
Id:          pa-task-status
Title:       "PA Task Fulfillment Status"
Description: "Codes indicating allowed for Tasks seeking fulfillment of physical activity-related referrals"
* ^experimental = false
* ^compose.include[0].valueSet = "http://hl7.org/fhir/ValueSet/task-status"
* ^compose.exclude[0].system = "http://hl7.org/fhir/task-status"
* ^compose.exclude[0].concept[+].code = #received
* ^compose.exclude[0].concept[+].code = #ready

ValueSet: PAGoalMeasurement
Id: pa-goal-target-measure
Title: "PA Goal Target Measure Codes"
Description: "Value set for measure codes used in the target element of a Physical Activity-related Goal"
* ^status = #draft
* ^experimental = true
* include codes from valueset PAObservationTimeMeasures
* include codes from valueset PAObservationCodeEVS

ValueSet: PAServiceRequestStatus
Id: pa-servicerequest-status
Title: "PA ServiceRequest Status"
Description: "The status values that are permitted for the PAServiceRequest resource, excluding 'unknown'"
* ^status = #draft
* ^experimental = true
* http://hl7.org/fhir/request-status#draft
* http://hl7.org/fhir/request-status#active
* http://hl7.org/fhir/request-status#on-hold
* http://hl7.org/fhir/request-status#revoked
* http://hl7.org/fhir/request-status#completed
* http://hl7.org/fhir/request-status#entered-in-error


---

// File: input/fsh/ExampleIntervention.fsh

Instance:    ExampleRelatedPerson
InstanceOf:  PARelatedPerson
Title:       "RelatedPerson - Relative"
Description: "RelatedPerson conformant with future U.S. core profile used to show caregiver involvement in data sharing."
* active             = true
* patient            = Reference(http://example.org/fhir/Patient/1) "Example Patient"
* relationship       = $relationships#MTH "Mother"
  * text             = "Mother"
* name
  * given            = "Jane"
  * family           = "Doe"
* telecom
  * system           = #email
  * value            = "jane.doe@somewhere.com"
* address
  * line             = "123 Some Street"
  * city             = "Some town"
  * state            = "MI"
  * postalCode       = "012345"

Instance:    ExampleCondition
InstanceOf:  PAConditionLowPA
Title:       "Condition - Low Physical Activity"
Description: "Condition indicating a diagnosis of 'lack of physical exercise'."
* clinicalStatus     = $clinicalStatus#active
* verificationStatus = $verifyStatus#confirmed
* category[+] = $condition-category#health-concern "Health Concern"
* category[PA] = PATemporaryCodes#PhysicalActivity
* subject	         = Reference(http://example.org/fhir/Patient/1) "Example Patient"
* onsetDateTime      = "2022-06-08"
* asserter           = Reference(http://example.org/fhir/PractitionerRole/1) "Ordering Clinician"
* evidence.detail    = Reference(ExampleEVSMinutesPerWeek)

Instance:       ExampleGoal
InstanceOf:     PAGoal
Title:          "Goal - 100 min/week"
Description:    "A goal of 100 minutes/week of moderate-vigorous physical activity by a specified date."
* lifecycleStatus     = #active
* achievementStatus   = $goal-achievement#in-progress
* description.text    = """Over the next 6 months\, increase your weekly exercise in small increments to at least 100 minutes/week of physical activity that makes you sweat and breath heavily enough that holding a conversation is difficult."""
* subject	          = Reference(http://example.org/fhir/Patient/1) "Example Patient"
* target
  * measure           = http://loinc.org#82290-8
  * detailQuantity    = 100 'min/wk'
  * dueDate           = 2022-12-08
* addresses           = Reference(ExampleCondition) "Low Exercise"
* note
  * authorReference   = Reference(http://example.org/fhir/PractitionerRole/1) "Ordering Clinician"
  * time              = 2022-12-15
  * text              = "Significant progress.  Regularly exceeding 120 min/week and has found an activity he enjoys.  Need to branch out to one more activity to achieve guideline target."

Instance:       ExampleCarePlan
InstanceOf:     PACarePlan
Title:          "CarePlan - simple"
Description: 	  "Sample care plan."
* text
  * status            = #additional
  * div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">This care plan focuses on increasing the patient's physical activity levels. Over the next six months, the goal is to gradually increase the weekly exercise in small increments to at least 100 minutes of physical activity per week that makes the patient sweat and breathe heavily. Regular reviews will be conducted to assess the patient's progress and adjust the plan as necessary.</div>"
* status = #active
* intent              = #plan
* subject	          = Reference(http://example.org/fhir/Patient/1) "Example Patient"
* period
  * start             = 2022-06-08
  * end               = 2023-06-08
* goal = Reference(Goal/ExampleGoal) "Increase physical activity to 100 minutes/week"
* activity.detail                                                           
  * code = $sct#229065009 "Exercise therapy"
  * status = #not-started
  * description = "Over the next 6 months, increase your weekly exercise in small increments to at least 100 minutes/week of physical activity that makes you sweat and breathe heavily."
* note
  * authorReference   = Reference(ExampleRelatedPerson) "Mother"
  * time              = 2022-12-15
  * text = "The patient has been making significant progress, regularly exceeding the target and has found an activity they enjoy. Regular reviews will be conducted to assess the patient's progress and adjust the plan as necessary."

Instance:    ExampleServiceRequest
InstanceOf:  PAServiceRequest
Title:       "ServiceRequest - PA Referral"
Description: "A referral to a gym."
* extension[pertainsToGoal].valueReference = Reference(ExampleGoal)
* status                   = #active
* intent                   = #original-order
* priority                 = #routine
* category[USCore]              = $sct#409063005 "Counseling"
* category[PA]              = PATemporaryCodes#PhysicalActivity
* code                     = $sct#390893007 "Referral to physical activity program (Procedure)"
* subject                  = Reference(http://example.org/fhir/Patient/1) "Example Patient"
* occurrencePeriod
  * start                  = "2022-06-08"
  * end                    = "2022-08-01"
* authoredOn               = "2022-06-08"
* requester                = Reference(http://example.org/fhir/PractitionerRole/1) "Ordering Clinician"
* performer                = Reference(http://example.org/fhir/Organization/1)
* reasonReference          = Reference(ExampleCondition)

Instance:    ExampleFulfillmentTask
InstanceOf:  PATaskForReferralManagement
Title:       "Task - PA Referral Fulfillment Request"
Description: "An example task seeking fulfillment of a referral"
* status              = #in-progress
//* statusReason.text = */
* businessStatus.text = "Attended orientation meeting"
* priority            = #routine
* focus               = Reference(ExampleServiceRequest) "Referral"
* for                 = Reference(http://example.org/fhir/Patient/1) "Example Patient"
* authoredOn          = "2022-06-08"
* requester           = Reference(http://example.org/fhir/Organization/1) "Requesting Organization"
* owner               = Reference(http://example.org/fhir/Organization/2) "Performing Organization"
* note[+]
  * authorReference   = Reference(http://example.org/fhir/PractitionerRole/2) "Performing Provider"
  * time              = "2022-06-17"
  * text              = "Orientation went well.  Patient is looking forward to attending class."

Instance:    ExampleSubscriptionWebhook
InstanceOf:  BackportSubscription
Title:       "Subscription - Task - Care Manager"
Description: "An example showing what a subscription request would look like to monitor Tasks created by a Care Manager, with notifications by web-hook"
* status = #requested
* reason = "Allow monitoring of Tasks created by this organization"
* criteria = "http://hl7.org/fhir/us/sdoh-clinicalcare/SubscriptionTopic/Task"
  * extension[filterCriteria].valueString = "Task?requester=Organization/1"
* channel
  * type = #rest-hook
  * endpoint = "https://example.org/sub-notify/644c53f4-0dee-40bd-b2df-914b66ef43e6"
  * payload = #application/fhir+json
    * extension[content].valueCode = #id-only

Instance:    ExampleSubscriptionEmail
InstanceOf:  BackportSubscription
Title:       "Subscription - Task - Service Provider by Email"
Description: "An example showing what a subscription request would look like to monitor Tasks created for a Service Provider, with notifications by email.  (Could have used SMS instead.)"
* status = #requested
* reason = "Allow monitoring of Tasks created for this Practitioner"
* criteria = "http://hl7.org/fhir/us/sdoh-clinicalcare/SubscriptionTopic/Task"
  * extension[filterCriteria].valueString = "Task?owner=PractitionerRole/2"
* channel
  * type = #email
  * endpoint = "mailto:drfit@goodhealthgym.example.org"
  * payload = #application/fhir+json
    * extension[content].valueCode = #empty

Instance:    ExampleSubscriptionSMS
InstanceOf:  BackportSubscription
Title:       "Subscription - Task - Patient by SMS"
Description: "An example showing what a subscription request would look like to monitor Tasks created for a Patient, with notifications by SMS.  (Could have used email instead.)"
* status = #requested
* reason = "Allow monitoring of Tasks created for this Patient"
* criteria = "http://hl7.org/fhir/us/sdoh-clinicalcare/SubscriptionTopic/Task"
  * extension[filterCriteria].valueString = "Task?owner=Patient/1"
* channel
  * type = #sms
  * endpoint = "tel:1-234-567-8900"
  * payload = #application/fhir+json
    * extension[content].valueCode = #empty


Instance:    ExampleSubscriptionBundleWithIds
InstanceOf:  BackportSubscriptionNotificationR4
Title:       "Bundle (Subscription Notification) - Task with ids"
Description: "An example showing a subscription notification that identifies the specific new or changed tasks"
* type              = #history
* entry[+]
  * fullUrl  = "urn:uuid:33d202b6-df23-43fd-b190-d150dca8dd14"
  * resource = ExampleSubscriptionStatusWithIds
  * request
    * method = #GET
    * url = "https://example.org/fhir/Subscription/ExampleSubscriptionWebhook/$status"
  * response.status = "200"

Instance:    ExampleSubscriptionBundleWithNoIds
InstanceOf:  BackportSubscriptionNotificationR4
Title:       "Subscription (Notification Bundle) - Task with no Ids"
Description: "An example showing a subscription notification that merely indicates there are new or changed tasks without indicating what they are"
* type              = #history
* entry[+]
  * fullUrl  = "urn:uuid:b4fb4012-ff43-4e9d-8047-813b13914d72"
  * resource = ExampleSubscriptionStatusWithNoIds
  * request
    * method = #GET
    * url = "https://example.org/fhir/Subscription/ExampleSubscriptionEmail/$status"
  * response.status = "200"

Instance:    ExampleSubscriptionStatusWithIds
InstanceOf:  BackportSubscriptionStatusR4
Title:       "Parameters (Subscription Status) - Task with Ids"
Description: "An example showing a subscription status instance containing Task ids that are new or changed"
* parameter[subscription].valueReference = Reference(ExampleSubscriptionWebhook)
* parameter[topic].valueCanonical = "http://hl7.org/fhir/us/sdoh-clinicalcare/SubscriptionTopic/Task"
* parameter[status].valueCode = #active
* parameter[type].valueCode = #event-notification
* parameter[eventsSinceSubscriptionStart].valueString = "287"
* parameter[notificationEvent]
  * part[eventNumber].valueString = "288"
  * part[eventTimestamp].valueInstant = "2022-06-17T14:38:55.8826-05:00"
  * part[eventFocus].valueReference = Reference(ExampleFulfillmentTask)
  * part[eventAdditionalContext].valueReference = Reference(http://example.org/fhir/Patient/1) "Example Patient"

Instance:    ExampleSubscriptionStatusWithNoIds
InstanceOf:  BackportSubscriptionStatusR4
Title:       "Parameters (Subscription Status) - Task with no Ids"
Description: "An example showing a subscription status instance indicating that there are new or changed tasks, without indicating which ones have changed"
* parameter[subscription].valueReference = Reference(ExampleSubscriptionEmail)
* parameter[topic].valueCanonical = "http://hl7.org/fhir/us/sdoh-clinicalcare/SubscriptionTopic/Task"
* parameter[status].valueCode = #active
* parameter[type].valueCode = #event-notification
* parameter[eventsSinceSubscriptionStart].valueString = "7"

Instance:    ExampleBundleTaskSearchResponse
InstanceOf:  Bundle
Title:       "Bundle (Search Set) - Task"
Description: "An example showing the results of a Bundle search returning listed Tasks and their associated ServiceRequests which might be used by a 'light' Service Provider after receiving a subscription notification"
* type = #searchset
* total = 1
* link[+]
  * relation = #self
  * url = "https://example.org/fhir/Task?_id=ExampleFulfillmentTask&patient=http://example.org/fhir/Patient/1&_include=Task.focus"
* entry[+]
  * fullUrl  = "https://example.org/fhir/Task/ExampleFulfillmentTask"
  * resource = ExampleFulfillmentTask
  * search.mode = #match
* entry[+]
  * fullUrl  = "https://example.org/fhir/ServiceRequest/ExampleServiceRequest"
  * resource = ExampleServiceRequest
  * search.mode = #include

Instance:    ExampleReport
InstanceOf:  PADiagnosticReport
Title:       "DiagnosticReport - Physical Activity Report"
Description: "An example physical activity report"
* basedOn             = Reference(ExampleServiceRequest) "Referral"
* status              = #final
* category[+] = $loinc#LP29708-2 "Cardiology"
* category[PA] = PATemporaryCodes#PhysicalActivity
* code                = $loinc#11488-4 "Consult note"
* subject             = Reference(http://example.org/fhir/Patient/1) "Example Patient"
* effectivePeriod
  * start             = 2022-06-08
  * start             = 2022-09-18
* issued              = 2022-09-18T13:47:58.0282-05:00
* performer           = Reference(http://example.org/fhir/PractitionerRole/2) "Performing Provider"
* presentedForm


---

// File: input/fsh/ExampleObservations.fsh

Instance:    ExampleEVSDaysPerWeek
InstanceOf:  PAObservationEVSDaysPerWeek
Title:       "Observation - Exercise Vital Sign Days per Week"
Description: "An example observation capturing a patient's average days per week of moderate to vigorous physical exercise."
* insert DaysPerWeek(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 3)

Instance:    ExampleEVSMinutesPerDay
InstanceOf:  PAObservationEVSMinutesPerDay
Title:       "Observation - Exercise Vital Sign Minutes per Day"
Description: "An example observation capturing a patient's average minutes per day of moderate to vigorous physical exercise."
* insert MinPerDay(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 20)
* insert Note(2022-12-15, http://example.org/Patient/1, "Example Patient", [[Felt low-energy for most of month.]])

Instance:    ExampleEVSMinutesPerWeek
InstanceOf:  PAObservationEVSMinutesPerWeek
Title:       "Observation - Exercise Vital Sign Minutes per Week"
Description: "An example observation capturing a patient's average minutes per week of moderate to vigorous physical exercise."
* insert MinPerWeek(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 60)

Instance:    ExampleStrengthDaysPerWeek
InstanceOf:  PAObservationStrengthDaysPerWeek
Title:       "Observation - Exercise Vital Sign Strength Days per Week"
Description: "An example observation capturing a patient's average minutes per day of exercise."
* insert StrengthPerWeek(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 2)

Instance:    ExampleActivityGroup
InstanceOf:  PAObservationActivityGroup
Title:       "Observation - Activity Group"
Description: "An example observation grouping a collection of observations specific to an exercise activity."
* insert ActivityGroup(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08)
* hasMember[+] = Reference(ExampleActivityType)
* hasMember[+] = Reference(ExampleActivityDuration)
* hasMember[+] = Reference(ExampleActivityModerate)
* hasMember[+] = Reference(ExampleActivityVigorous)
* hasMember[+] = Reference(ExampleActivityPeakHR)
* hasMember[+] = Reference(ExampleActivityCalories)

Instance:    ExampleActivityType
InstanceOf:  PAObservationActivityMeasure
Title:       "Observation - Activity Measure - Type"
Description: "An example observation capturing that a patient ran."
* insert ActivityType(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, LA11836-6, "Running")

Instance:    ExampleActivityDuration
InstanceOf:  PAObservationActivityMeasure
Title:       "Observation - Activity Measure - Duration"
Description: "An example observation capturing how long the run was."
* insert ActivityDuration(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 45)

Instance:    ExampleActivityModerate
InstanceOf:  PAObservationActivityMeasure
Title:       "Observation - Activity Measure - Moderate Minutes"
Description: "An example observation capturing how many minutes of running were at moderate exertion level."
* insert ActivityModerate(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 10)

Instance:    ExampleActivityVigorous
InstanceOf:  PAObservationActivityMeasure
Title:       "Observation - Activity Measure - Vigorous Minutes"
Description: "An example observation capturing how many minutes of running were at vigorous exertion level."
* insert ActivityVigorous(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 35)

Instance:    ExampleActivityMeanHR
InstanceOf:  PAObservationActivityMeasure
Title:       "Observation  - Activity Measure - Mean Heart Rate"
Description: "An example observation capturing the patient's average heart rate during their run."
* insert MeanHeartRate(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 150)

Instance:    ExampleActivityPeakHR
InstanceOf:  PAObservationActivityMeasure
Title:       "Observation - Activity Measure - Peak Heart Rate"
Description: "An example observation capturing the patient's peak heart rate during their run."
* insert PeakHeartRate(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 178)

Instance:    ExampleActivityCalories
InstanceOf:  PAObservationActivityMeasure
Title:       "Observation - Activity Measure - Calories"
Description: "An example observation capturing the patient's estimated calorie expenditure during their run."
* insert ActivityCalories(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 738)

// Example time-based
Instance:    ExampleDailySteps
InstanceOf:  PAObservationTimeMeasure
Title:       "Observation - Daily Steps"
Description: "An example observation the total number of steps the patient has taken over the course of a specific day."
* insert DailySteps(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 7267)

Instance:    ExamplePeakDailyHeartRate
InstanceOf:  PAObservationTimeMeasure
Title:       "Observation - Peak Daily Heart Rate"
Description: "An example observation showing the patient's peak heart rate over the course of a day."
* insert DailyPeakHR(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 178)

Instance:    ExampleAverageRestingHeartRate
InstanceOf:  PAObservationTimeMeasure
Title:       "Observation - Average Resting Heart Rate"
Description: "An example observation capturing a patient's average resting heart rate over the course of a week."
* insert RestingHR(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-01, 2022-06-08, 68)

Instance:    ExampleCaloriesPerDay
InstanceOf:  PAObservationTimeMeasure
Title:       "Observation - Calories per Day"
Description: "An example observation capturing a patient's calories burned over the last day."
* insert DailyCalories(http://example.org/Patient/1, "Example Patient", http://example.org/Patient/1, "Example Patient", 2022-06-08, 1561)


---

// File: input/fsh/ExampleScenario1.fsh

// TODO:
// 1. Make sure the queries are complete and correct
// 2. Make sure the queries are consistent in the Query definition and in the 'self' link
// 3. Make sure the URLs are correct for all POST and PUT operations (note that Subscription notifications go to the endpoint nominated in the Subscription, not the RESTful Subscription endpoint)
// 4. Make sure the patient and provider names, genders, ages, roles, etc. jive with what's in the scenarios.  (I fixed several places where they weren't, but I may have missed some)
// 5. Make sure we're declaring InstanceOf for the specific US Core, Physical Activity, Subscription Backport, etc. profile.  We shouldn't *ever* have an InstanceOf a plain resource
// 6. Look at the titles and descriptions for things and make sure they're a) right, and b) consistent within (and ideally across) scenarios
// 7. Show 'contained' instances in rendering, show name of 'payload' when linking
// 8. Make sure 'contained' instances are defined

Instance: Scen1ExercisePrescriptionScenario
InstanceOf: ExampleScenario
Title:       "Scenario 1 - Exercise Prescription"
Description: "ExampleScenario instance illustrating how a patient app interacts with an EHR to manage and update an exercise plan. It covers the querying of resources such as CarePlan, Goal, and ServiceRequest, posting of Observations regarding physical activity levels, and how these resources are updated over time."
Usage: #definition
* status = #draft
* version = "4.0.1"
* name = "ExercisePrescription"
* insert ActorEntity(patientApp, "Patient App", [[A patient app used to query resources related to the exercise plan]])
* insert ActorEntity(goodHealth,        "EHR",         [[EHR that records patient's exercise plan]])
* insert Instance_Empty(Scen1query1,   Binary,   "Query for patient physical activity care plans",         [[Query for CarePlans for a patient: `GET https://goodhealth.example.org/fhir/CarePlan?patient=Patient/Scen1PatientKhatun&status=active,on-hold&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity`]])
* insert Instance_Empty(Scen1query2,   Binary,   "Query for patient physical activity goals",              [[Query for Goals for a patient: `GET https://goodhealth.example.org/fhir/Goal?patient=Patient/Scen1PatientKhatun&status=active,on-hold,completed&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity`]])
* insert Instance_Empty(Scen1query3,   Binary,   "Query for patient exercise prescriptions and referrals", [[Query for ServiceRequests for a patient: `GET https://goodhealth.example.org/fhir/ServiceRequest?patient=Patient/Scen1PatientKhatun&status=active,on-hold&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity`]])
* insert Instance_Empty(Scen1CarePlan, CarePlan, "Patient physical activity care plan",                    [[CarePlan describing proposed exercise regime]])
* insert InstanceVersion(1, "Initial CarePlan", Scen1CarePlanV1, [[Planning for jogging and stationary bike]])
* insert InstanceVersion(2, "Updated CarePlan", Scen1CarePlanV2, [[Planning for increased stationary bike]])
* insert Instance_Empty(Scen1Goal,     Goal,     "Physical Activity weekly target",                      [[Goal indicating target number of minutes/week of moderate-vigorous physical activity]])
* insert InstanceVersion(1, "Initial goal", Scen1GoalV1, [[Initial value of 100 mins/week]])
* insert InstanceVersion(1, "Initial goal", Scen1GoalV2, [[Initial value of 100 mins/week-completed]])
* insert Instance_Content(Scen1Goal2,                          Bundle,         "Updated goal",                                     [[Updated value of 150 mins/week]])
* insert Instance_Content(Scen1CarePlanBundle1,                Bundle,         "Initial care plan search response bundle", [[Only contains 1 plan, though in practice, more than one is possible]])
* insert InstanceContains(Scen1CarePlan, 1)
* insert Instance_Content(Scen1CarePlanBundle2,                Bundle,         "Second care plan search response bundle", [[In a real system, the id would be the same as the original]])
* insert InstanceContains(Scen1CarePlan, 2)
* insert Instance_Content(Scen1GoalBundle1,                    Bundle,         "Initial goal search response bundle", [[There could be multiple goals, but in the scenario there's only one.]])
* insert InstanceContains(Scen1Goal, 1)
* insert Instance_Content(Scen1GoalBundle2,                    Bundle,         "Second goal search response bundle", [[In a real system, the id would be the same as the original]])
* insert InstanceContains(Scen1Goal, 2)
* insert InstanceContains(Scen1Goal2, )
* insert Instance_Content(Scen1ExerciseRx,                     ServiceRequest, "Prescription for exercise", [[Expressed as a ServiceRequest with performer of the patient]])
* insert Instance_Content(Scen1ExerciseRxBundle,               Bundle,         "Search result of exercise prescriptions and referrals", [[There could be a mix of an exercise prescription plus referrals, but in this case there's only the prescription.]])
* insert InstanceContains(Scen1ExerciseRx, )
* insert Instance_Content(Scen1ObservationDaysPerWeek,         Observation,    "Example physical activity days per week record",    [[Average days per week of moderate-to-vigorous physical activity.]])
* insert Instance_Content(Scen1ObservationMinsPerDay,          Observation,    "Example physical activity minutes per day record",  [[Average minutes per day of moderate-to-vigorous physical activity.]])
* insert Instance_Content(Scen1ObservationMinsPerWeek,         Observation,    "Example physical activity minutes per week record", [[Average minutes per week of moderate-to-vigorous physical activity.]])
* insert Instance_Content(Scen1ObservationStrengthDaysPerWeek, Observation,    "Example strength days per week record",             [[Average days per week of muscle-strengthening physical activity.]])
* process[+]
  * title = "Day after appointment"
  * description = "The patient accesses the care plan, goals and exercise prescription made available on the EHR"
  * preConditions = "Encounter (and other supporting) resources created"
  * postConditions = "Patient app has retrieved exercise plan related resources"
  * insert ProcessSearch(1, "Query CarePlan",       patientApp, goodHealth, Scen1query1, Scen1CarePlanBundle1,  [[Patient app queries exercise CarePlan describing proposed exercise regime.]])
  * insert ProcessSearch(2, "Query Goal",           patientApp, goodHealth, Scen1query2, Scen1GoalBundle1,      [[Patient app queries Goals (100 minutes/week).]])
  * insert ProcessSearch(3, "Query ServiceRequest", patientApp, goodHealth, Scen1query3, Scen1ExerciseRxBundle, [[Patient app queries ServiceRequest (order for ‘exercise’).]])
* process[+]
  * title = "A couple of weeks later"
  * description = "The exchange noted here would actually occur many times (though not necessarily regularly).  Only a single set of data is shown for simplicity."
  * preConditions = "Patient app is able to write records to EHR"
  * postConditions = "EHR has weekly activity level observations"
  * insert ProcessCreate(5, "Post days/week",         patientApp, goodHealth, Scen1ObservationDaysPerWeek, ,         [[Patient app posts average days per week of moderate-to-vigorous physical activity. `POST https://goodhealth.example.org/fhir/Observation`]])
  * insert ProcessCreate(6, "Post minutes/day",       patientApp, goodHealth, Scen1ObservationMinsPerDay, ,          [[Patient app posts average minutes per day of moderate-to-vigorous physical activity. `POST https://goodhealth.example.org/fhir/Observation`]])
  * insert ProcessCreate(7, "Post minutes/week",      patientApp, goodHealth, Scen1ObservationMinsPerWeek, ,         [[Patient app posts average minutes per week of moderate-to-vigorous physical activity. `POST https://goodhealth.example.org/fhir/Observation`]])
  * insert ProcessCreate(8, "Post stength days/week", patientApp, goodHealth, Scen1ObservationStrengthDaysPerWeek, , [[Patient app posts average days per week of muscle-strengthening physical activity. `POST https://goodhealth.example.org/fhir/Observation`]])
* process[+]
  * title = "A little more than 6 months after first appointment"
  * preConditions = "CarePlan and Goal have been updated in EHR"
  * postConditions = "Patient app retrieves updated CarePlan and Goal"
  * description = "In practice, the patient app would likely check for new CarePlans and Goals each time it launches.  However, this is the first time there'd be something new to retrieve."
  * insert ProcessSearch(9,  "Query revised CarePlan", patientApp, goodHealth, Scen1query1, Scen1CarePlanBundle2,  [[Patient app queries revised CarePlan with providers notes.]])
  * insert ProcessSearch(10, "Query revised Goal",     patientApp, goodHealth, Scen1query2, Scen1GoalBundle2,      [[Patient app queries new Goals.]])
  * insert ProcessSearch(11, "Query ServiceRequest",   patientApp, goodHealth, Scen1query3, Scen1ExerciseRxBundle, [[The results of this search are the same as the initial call because the exercise 'prescription' has not changed.]])


Instance: Scen1CarePlanV1
InstanceOf: PACarePlan
Title:       "CarePlan - initial - Scenario 1"
Description:  "A CarePlan by Dr. Patel targeting physical activity for patient Jorin Khatun, including moderate to vigorous and muscle-strengthening exercises."
Usage: #example
* insert CarePlan(2022-12-01, 2023-06-01, Scen1PatientKhatun, "Jorin Khatun", Scen1RolePatel, "Dr. Rajesh Patel", [[Jorin will experiment with jogging in his neighborhood and using an exercise bike at the local gym at least 3 times a week and will continue to monitor his blood pressure.]])
* goal = Reference(Scen1GoalV1)


Instance: Scen1CarePlanV2
InstanceOf: PACarePlan
Title:       "CarePlan - updated - Scenario 1"
Description:  "A revised CarePlan by Dr. Patel for Jorin Khatun, aiming at an increased level of physical activity including moderate to vigorous and muscle-strengthening exercises."
Usage: #example
* insert CarePlan(2023-05-05, 2024-01-01, Scen1PatientKhatun, "Jorin Khatun", Scen1RolePatel, "Dr. Rajesh Patel", [[Jorin will continue with his exercise bike and will purchase a used one he can use at home, which should allow him to increase his weekly exercise to 150+ minutes.  He will continue to monitor his blood pressure.]])
* goal = Reference(Scen1GoalV2)
* insert Note(2023-05-05, Scen1PractitionerPatel, "Dr. Rajesh Patel", [[Jorin is adhering well and indicates he's motivated by increased energy playing with his children.]])


Instance: Scen1CarePlanBundle1
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - CarePlan - initial - Scenario 1"
Description:  "A search of all active or on-hold physical-activity related CarePlans for the patient.  In this case, there's only one, but in theory there could be more than one."
Usage: #example
* insert SearchBundle(1, [[https://goodhealth.example.org/fhir/CarePlan?patient=Patient/Scen1PatientKhatun&status=active,on-hold&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity]])
* insert EntryMatch(CarePlan, Scen1CarePlanV2)


Instance: Scen1CarePlanBundle2
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Care Plan - updated - Scenario 1"
Description:  "A search of all active or on-hold physical-activity related CarePlans for the patient.  In this case, we return the updated version of the CarePlan."
Usage: #example
* insert SearchBundle(1, [[https://goodhealth.example.org/fhir/CarePlan?patient=Patient/Scen1PatientKhatun&status=active,on-hold&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity]])
* insert EntryMatch(CarePlan, Scen1CarePlanV2)


Instance: Scen1GoalV1
InstanceOf: PAGoal
Title:       "Goal - 100 min/wk 'in-progress' - Scenario 1"
Description:  "A goal set for Jorin Khatun to incrementally increase his physical activity to at least 100 minutes per week over the next 6 months."
Usage: #example
* insert Goal(Scen1PatientKhatun, "Jorin Khatun", in-progress, [[Over the next 6 months, increase your weekly exercise in small increments to at least 100 minutes/week of physical activity that makes you sweat and breath heavily enough that holding a conversation is difficult.]])
* insert GoalTarget(2023-05-01, 82290-8, "Frequency of moderate to vigorous aerobic physical activity", 100 'min/wk')


Instance: Scen1GoalV2
InstanceOf: PAGoal
Title:       "Goal - 100 min/wk 'completed' - Scenario 1"
Description:  "A goal set for Jorin Khatun to incrementally increase his physical activity to at least 100 minutes per week over the next 6 months."
Usage: #example
* insert Goal(Scen1PatientKhatun, "Jorin Khatun", in-progress, [[Over the next 6 months, increase your weekly exercise in small increments to at least 100 minutes/week of physical activity that makes you sweat and breath heavily enough that holding a conversation is difficult.]])
* insert GoalTarget(2023-05-01, 82290-8, "Frequency of moderate to vigorous aerobic physical activity", 100 'min/wk')


Instance: Scen1Goal2
InstanceOf: PAGoal
Title:       "Goal - 150 min/wk 'in-progress' - Scenario 1"
Description:  "A new goal for Jorin Khatun to further increase his weekly exercise to 150 minutes, with notes on his progress and recommendations."
Usage: #example
* insert Goal(Scen1PatientKhatun, "Jorin Khatun", improving, [[Over the next 6 months, increase your weekly exercise in small increments to at least 150 minutes/week of physical activity that makes you sweat and breath heavily enough that holding a conversation is difficult.]])
* insert GoalTarget(2023-08-01, 82290-8, "", 150 'min/wk')
* insert Note(2023-11-01, Scen1PractitionerPatel, "Dr. Rajesh Patel", [[Significant progress.  Regularly exceeding the target and has found an activity he enjoys.  Need to branch out to one more activity to achieve guideline target.]])


Instance: Scen1GoalBundle1
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Goal - Initial goal - Scenario 1"
Description:  "A search of all active or on-hold physical-activity related Goals for the patient.  In this case, there's only one, but in theory there could be more than one."
Usage: #example
* insert SearchBundle(1, [[https://goodhealth.example.org/fhir/Goal?patient=Patient/Scen1PatientKhatun&status=active,on-hold,completed&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity]])
* insert EntryMatch(Goal, Scen1GoalV2)


Instance: Scen1GoalBundle2
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Goal - Updated goals - Scenario 1"
Description:  "A search of all active or on-hold physical-activity related Goals for the patient.  In this case, we return the updated version of the Goal."
Usage: #example
* insert SearchBundle(2, [[https://goodhealth.example.org/fhir/Goal?patient=Patient/Scen1PatientKhatun&status=active,on-hold,completed&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity]])
* insert EntryMatch(Goal, Scen1GoalV2)
* insert EntryMatch(Goal, Scen1Goal2)


Instance: Scen1ExerciseRx
InstanceOf: PAServiceRequest
Title:       "ServiceRequest - Prescription - Scenario 1"
Description:  "Exercise Prescription by Dr. Patel for Jorin Khatun to increase his physical activity level."
Usage: #example
* insert ExerciseRx(2022-12-01, 2023-05-01, Scen1PatientKhatun,"Jorin Khatun", Scen1PractitionerPatel, "Dr. Rajesh Patel")
* basedOn = Reference(Scen1CarePlanV1)
* extension[pertainsToGoal].valueReference = Reference(Scen1GoalV1)
* reasonCode[+] = $sct#38341003 "Hypertension"
* reasonCode[+] = $sct#40979000 "Lack of physical exercise"


Instance: Scen1ExerciseRxBundle
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - ServiceRequest - Scenario 1"
Description:  "A search of all active or on-hold physical-activity related ServiceRequests for the patient.  In this case, there's only one, but in theory there could be more than one."
Usage: #example
* insert SearchBundle(1, [[https://goodhealth.example.org/fhir/ServiceRequest?patient=Patient/Scen1PatientKhatun&status=active,on-hold&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity]])
* insert EntryMatch(ServiceRequest, Scen1ExerciseRx)


Instance: Scen1ObservationDaysPerWeek
InstanceOf: PAObservationEVSDaysPerWeek
Title:       "Observation - Days per week - Scenario 1"
Description:  "Observation record for Jorin Khatun indicating that he is exercising 5 days per week."
Usage: #example
* insert DaysPerWeek(Scen1PatientKhatun, "Jorin Khatun", Scen1PatientKhatun, "Jorin Khatun", 2023-03-15, 5)


Instance: Scen1ObservationMinsPerDay
InstanceOf: PAObservationEVSMinutesPerDay
Title:       "Observation - Minutes per Day - Scenario 1"
Description:  "Observation record for Jorin Khatun indicating that he is exercising for 15 minutes per day."
Usage: #example
* insert MinPerDay(Scen1PatientKhatun, "Jorin Khatun", Scen1PatientKhatun, "Jorin Khatun", 2023-01-15, 15)


Instance: Scen1ObservationMinsPerWeek
InstanceOf: PAObservationEVSMinutesPerWeek
Title:       "Observation - Minutes per Week - Scenario 1"
Description:  "Observation record for Jorin Khatun indicating that he is exercising for 80 minutes per week."
Usage: #example
* insert MinPerWeek(Scen1PatientKhatun, "Jorin Khatun", Scen1PatientKhatun, "Jorin Khatun", 2023-01-15, 80)


Instance: Scen1ObservationStrengthDaysPerWeek
InstanceOf: PAObservationStrengthDaysPerWeek
Title:       "Observation - Strength Days per Week - Scenario 1"
Description:  "Observation record for Jorin Khatun indicating that he performs strength training exercises 3 days per week."
Usage: #example
* insert StrengthPerWeek(Scen1PatientKhatun, "Jorin Khatun", Scen1PatientKhatun, "Jorin Khatun", 2023-01-15, 3)


Instance: Scen1OrgGoodhealth
InstanceOf: USCoreOrganizationProfile
Title:       "Organization - Good Health Clinic - Scenario 1"
Description:  "Good Health Clinic, a healthcare provider."
Usage: #example
* identifier
  * system = "http://example.org/organization"
  * value = "GH12345"
* active = true
* name = "Good Health Clinic"
* type = $organization-type#prov "Healthcare Provider"
  * text = "Healthcare Provider"
* telecom[+]
  * system = #phone
  * value = "+1(555) 555-6789"
  * use = #work
* telecom[+]
  * system = #email
  * value = "info@goodhealthclinic.com"
  * use = #work
* address
  * line = "456 Health Avenue"
  * city = "Medicity"
  * state = "NY"
  * postalCode = "54321"
  * country = "USA"

Instance: Scen1PatientKhatun
InstanceOf: USCorePatientProfile
Title:       "Patient - Jorin Khatun - Scenario 1"
Description:  "Profile of the patient Mr. Jorin Khatun."
Usage: #example
* identifier
  * system = "http://hospital.example.org/patients"
  * value = "123456"
* active = true
* name
  * family = "Khatun"
  * given = "Jorin"
  * prefix = "Mr."
* gender = #male
* birthDate = "1967-05-20"
* address
  * line = "123 Main St"
  * city = "Anytown"
  * state = "CA"
  * postalCode = "12345"
  * country = "USA"
* telecom[+]
  * system = #phone
  * value = "+1(555) 555-1234"
  * use = #home
* telecom[+]
  * system = #email
  * value = "Jorin.khatun@example.org"
  * use = #home


Instance: Scen1PractitionerPatel
InstanceOf: USCorePractitionerProfile
Title:       "Practitioner - Dr. Patel - Scenario 1"
Description:  "Profile of Dr. Rajesh Patel."
Usage: #example
* identifier
  * system = "http://example.org/practitioner"
  * value = "P12345"
* active = true
* name
  * family = "Patel"
  * given = "Rajesh"
  * prefix = "Dr."
* telecom[+]
  * system = #phone
  * value = "+1(555) 555-4321"
  * use = #work
* telecom[+]
  * system = #email
  * value = "rajesh.patel@example.org"
  * use = #work
* address
  * line = "456 Health Avenue"
  * city = "Medicity"
  * state = "NY"
  * postalCode = "54321"
  * country = "USA"
* gender = #male
* birthDate = "1975-06-15"
* qualification
  * identifier
    * system = "http://example.org/qualification"
    * value = "Q98765"
  * code.text = "General Practitioner"
  * period.start = "2000-07-01"


Instance: Scen1RolePatel
InstanceOf: USCorePractitionerRoleProfile
Title:       "Practitioner Role - Dr. Patel - Scenario 1"
Description:  "Dr. Rajesh Patel's role as a General Practitioner at Good Health Clinic"
Usage: #example
* identifier
  * system = "http://example.org/practitioner-role"
  * value = "PR45678"
* active = true
* practitioner = Reference(Scen1PractitionerPatel) "Dr. Rajesh Patel"
* organization = Reference(Scen1OrgGoodhealth) "Good Health Clinic"
* code = $practitioner-role#doctor "Doctor"
  * text = "Doctor"
* specialty = $sct#394814009 "General practice (specialty)"
  * text = "General Practitioner"

---

// File: input/fsh/ExampleScenario2.fsh

Instance: Scen2ProviderToPersonaltrainerReferral
InstanceOf: ExampleScenario
Title:       "Scenario 2 - Provider to Personal Trainer Post-Rehabilitation Referral"
Description: "A detailed scenario involving the referral of a patient from a healthcare provider to personal training services post-rehabilitation. The scenario includes subscription creation, task updates, and queries related to service request, patient health conditions, observations, and diagnostic reports."
Usage: #definition
* status = #draft
* version = "4.0.1"
* name = "ProviderToPersonalTrainerReferral"
* insert ActorEntity(goodCardio, "Good Health Cardiology", [[EHR that records patient's exercise plan]])
* insert ActorEntity(getFit,     "Get Fit Training",       [['Light' service provider']])
* insert ActorEntity(Fit4Life,   "Fit 4 Life",             [['Full' service provider']])
* insert ActorEntity(registry,   "Service Registry",       [[Registry of candidate service providers - outside the scope of this IG]])
* insert Instance_Empty(Scen2query1, Binary, "Query for personal trainers near Mrs. Johansson",  [[Search to retrieve list of Service Providers for personal trainers near Mrs. Johansson: `GET https://registry.example.org/fhir/PractitionerRole?role=228239008|http%3A//snomed.info/sct&location.near=37.8393|84.2700|20|[mi_us]&_include=PractitionerRole:practitioner`]])
* insert Instance_Empty(Scen2query2, Binary, "Query for Get Fit assigned referrals",             [[Query Task and associated ServiceRequest and Patient: `GET https://goodCardio.example.org/fhir/Task?status=requested&owner=https%3A//registry.example.org/fhir/Organization/Scen2OrgGetFitTraining&_include=Task:patient&_include=Task:focus`]])
* insert Instance_Empty(Scen2query3, Binary, "Query for Referral & Patient for retrieved Task",  [[Search to retrieve ServiceRequest and Patient for specified Task: `GET https://goodCardio.example.org/fhir/ServiceRequest?_id=Scen2ServiceRequest&_include=ServiceRequest:patient`]])
* insert Instance_Empty(Scen2query4, Binary, "Query for patient physical activity conditions",   [[Search to retrieve Conditions: `GET https://goodCardio.example.org/fhir/Condition?patient=Scen2PatientJohansson&category=http:%3A//hl7.org/fhir/us/physical-activity/CodeSystem/PATemporaryCodesorary-codes|PhysicalActivity`]])
* insert Instance_Empty(Scen2query5, Binary, "Query for patient physical activity observations", [[Search to retrieve Observations: `GET https://goodCardio.example.org/fhir/Observation?patient=Scen2PatientJohansson&category=http:%3A//hl7.org/fhir/us/physical-activity/CodeSystem/PATemporaryCodesorary-codes|PhysicalActivity`]])
* insert Instance_Empty(Scen2query6, Binary, "Query for EHR-issued task based on notification",  [[Search to retrieve Task: `GET https://fit4life.example.org/fhir/Task?_id=Scen2TaskFit4Life`]])
* insert Instance_Empty(Scen2query7, Binary, "Query for report and referenced observations",     [[Search on referenced Observations: `GET https://fit4.life.example.org/fhir/DiagnosticReport?id=Scen2DiagnosticReport&_include=DiagnosticReport:result`]])
* insert Instance_Content(Scen2PatientJohansson,                      Patient,          "Mrs. Johansson Patient Record", [[Demographics and contact information]])
* insert Instance_Content(Scen2PractitionerMatthews,                  Practitioner,     "Mr. Matthews Registry Entry",   [[Practitioner details for personal trainer Mr. Matthews]])
* insert Instance_Content(Scen2PractitionerWang,                      Practitioner,     "Ms. Wang Registry Entry",       [[Practitioner details for personal trainer Ms. Matthews]])
* insert Instance_Content(Scen2RoleMatthews,                          PractitionerRole, "Mr. Matthews Registry Entry",   [[Practitioner organization details for personal trainer Mr. Matthews]])
* insert Instance_Content(Scen2PractitionerWang,                      PractitionerRole, "Ms. Wang Registry Entry",       [[Practitioner organization details for personal trainer Ms. Matthews]])

* insert Instance_Content(Scen2SubscriptionEhr,                       Subscription,     "Subscription from EHR",         [[Establishes the subscription for the EHR to monitor tasks it's created]])
* insert Instance_Content(Scen2SubscriptionGetFit,                    Subscription,     "Subscription from Get Fit Training", [[Establishes the subscription for the service provider to monitor tasks created for it]])
* insert Instance_Content(Scen2PractitionerTrainerSearchsetBundle,    Bundle,           "Searchset Bundle returning list of personal trainers", [[In practice, the set of candidates would likely be longer.  Note that this functionality is outside the scope of this IG.]])
* insert InstanceContains(Scen2RoleWang, )
* insert InstanceContains(Scen2RoleMatthews, )
* insert InstanceContains(Scen2PractitionerWang, )
* insert InstanceContains(Scen2PractitionerMatthews, )
* insert Instance_Content(Scen2ConditionLackOfExercise,               Condition,        "Low physical activity condition",     [[New condition added to chart]])
* insert Instance_Content(Scen2ConditionHypertension,                 Condition,        "Hypertension condition",              [[Older condition]])
* insert Instance_Content(Scen2ObsDaysPerWeek,                        Observation,      "Initial days per week of activity",   [[Exercise of once per week]])
* insert Instance_Content(Scen2ObsDaysPerWeek2,                       Observation,      "New days per week of activity",       [[Exercising 5 times per week]])
* insert Instance_Content(Scen2ObsMinutesPerDay,                      Observation,      "Initial minutes per day of activity", [[15 minutes per day]])
* insert Instance_Content(Scen2ObsMinutesPerDay2,                     Observation,      "New minutes per day of activity",     [[32 minutes per day]])
* insert Instance_Content(Scen2ObsActivityGroup,                      Observation,      "Information about a run",             [[Collection of sub-observations about a single run]])
* insert Instance_Content(Scen2ObsActivityType,                       Observation,      "Type of activity - run",              [[Indicates that the activity performed was a run]])
* insert Instance_Content(Scen2ObsActivityDuration,                   Observation,      "Duration of run",                     [[Run was 30 minutes]])
* insert Instance_Content(Scen2ObsActivityMeanHR,                     Observation,      "Average heart rate during run",       [[Average heart rate of 132 bpm]])
* insert Instance_Content(Scen2ObsActivityPeakHR,                     Observation,      "Peak heart rate during run",          [[Peak heart rate of 177 bpm]])
* insert Instance_Content(Scen2ObsActivityExperience,                 Observation,      "Experience of run by patient",        [[Experience of run was positive]])
* insert Instance_Content(Scen2ObsCalories,                           Observation,      "Calories burned during run",          [[517 calories burned during run]])
* insert Instance_Content(Scen2DiagnosticReport,                      DiagnosticReport, "Report from personal trainer",        [[Letter to provider indicating how the consultation went]])
* insert Instance_Content(Scen2ServiceRequest,                        ServiceRequest,   "Referral for support",                [[Indicates what is to be done and when - but not by whom]])
* insert Instance_Empty(Scen2TaskGetFit,   Task, "Task seeking GetFit to fulfill referral", [[This is the initial Task seeking fulfillment]])
* insert InstanceVersion(1, "Initial GetFit Task", Scen2TaskGetFitV1, [[Initial version of the referral fulfillment request for GetFit with a status of 'requested']])
* insert InstanceVersion(2, "Updated GetFit Task", Scen2TaskGetFitV2, [[Version of the referral fulfillment request for GetFit after it has been changed to 'rejected']])
* insert Instance_Content(Scen2SubscriptionNotificationNewTaskBundle, Bundle,       "Subscription notification indicating new Task", [[Points to the initial 'requested' version of the Task]])
* insert Instance_Content(Scen2TaskGetFitResponseBundle,              Bundle,       "Search-set Bundle returning referenced Task",   [[Returns Task referenced in subscription notification.  Includes associated ServiceRequest and Patient]])
* insert InstanceContains(Scen2TaskGetFit, 1)
* insert Instance_Empty(Scen2TaskFit4Life, Task, "Task seeking FitLife to fulfill referral", [[This is the second Task seeking fulfillment (after the first was rejected)]])
* insert InstanceVersion(1, "Initial Fit4Life Task",   Scen2TaskFit4LifeV1, [[Initial version of the referral fulfillment request for Fit4Life with a status of 'requested']])
* insert InstanceVersion(2, "Updated Fit4Life Task",   Scen2TaskFit4LifeV2, [[Version of the referral fulfillment request for Fit4Life after it has been changed to 'accepted']])
* insert InstanceVersion(3, "Completed Fit4Life Task", Scen2TaskFit4LifeV3, [[Version of the referral fulfillment request for Fit4Life after it has been changed to 'completed' and a link to the report added]])
* insert Instance_Content(Scen2ReferralFit4LifeResponseBundle,             Bundle, "ServiceRequest search response for Fit4Life", [[Search-set Bundle returning ServiceRequest and Patient for the Task posted to Fit4Life]])
* insert InstanceContains(Scen2ServiceRequest, )
* insert InstanceContains(Scen2PatientJohansson, )
* insert Instance_Content(Scen2TaskEHRResponseBundle1,                     Bundle, "Accepted Task search response for EHR", [[Search-set Bundle returning 'accepted' Task with id based on subscription notification]])
* insert InstanceContains(Scen2TaskFit4Life, 2)
* insert Instance_Content(Scen2TaskEHRResponseBundle2,                     Bundle, "Completed Task search response for EHR", [[Search-set Bundle returning 'completed' Task with id based on subscription notification]])
* insert InstanceContains(Scen2TaskFit4Life, 3)
* insert Instance_Content(Scen2ConditionResponseBundle,                    Bundle, "Condition response for Fit 4 Life", [[Search-set Bundle containing the patient's Conditions (that Fit 4 Life has access to)]])
* insert InstanceContains(Scen2ConditionLackOfExercise, )
* insert InstanceContains(Scen2ConditionHypertension, )
* insert Instance_Content(Scen2ObservationResponseBundle,                  Bundle, "Observation response for Fit 4 Life", [[Search-set Bundle containing the patient's Observations (that Fit 4 Life has access to)]])
* insert InstanceContains(Scen2ObsDaysPerWeek, )
* insert InstanceContains(Scen2ObsMinutesPerDay, )
* insert Instance_Content(Scen2NotificationUpdatedTaskBundle,              Bundle, "Subscription Notification that Task has updated", [[Pointer to the Task that has been updated]])
* insert Instance_Content(Scen2NotificationCompletedTaskBundle,            Bundle, "Subscription Notification that Task has completed", [[Pointer to the Task that has been updated]])
* insert Instance_Content(Scen2DiagnosticReportObservationsResponseBundle, Bundle, "DiagnosticReport response for EHR", [[Search-set Bundle returning DiagnosticReport and the Observations it references]])
* insert InstanceContains(Scen2DiagnosticReport, )
* insert InstanceContains(Scen2ObsDaysPerWeek2, )
* insert InstanceContains(Scen2ObsMinutesPerDay2, )
* insert InstanceContains(Scen2ObsActivityGroup, )
* insert InstanceContains(Scen2ObsActivityType, )
* insert InstanceContains(Scen2ObsActivityDuration, )
* insert InstanceContains(Scen2ObsActivityMeanHR, )
* insert InstanceContains(Scen2ObsActivityPeakHR, )
* insert InstanceContains(Scen2ObsActivityExperience, )
* insert InstanceContains(Scen2ObsCalories, )
* process[+]
  * title = "Subscription Establishment"
  * preConditions = "Good Health Cardiology, Fit 4 Life, and Get Fit training have established legal and technical arrangements for interoperability"
  * postConditions = "Subscriptions are successfully created allowing Good Health Cardiology to monitor Fit4Life-assigned Tasks and GetFit to monitor Tasks assigned to it hosted on Good Health Cardiology"
  * insert ProcessCreate(1, "Create service provider-monitoring Subscription", goodCardio,    Fit4Life, Scen2SubscriptionEhr, ,    [[EHR posts Subscription to Fit 4 Life to monitor Tasks. Request: `POST https://fit4life.example.org/fhir/Subscription`  Response: `201 Created`]])
  * insert ProcessCreate(2, "Create EHR-monitoring Subscription",              getFit,        goodCardio,      Scen2SubscriptionGetFit, , [[Get Fit Training posts Subscription to EHR to monitor Tasks. Request: `POST https://goodCardio.example.org/fhir/Subscription`  Response: `201 Created`]])
* process[+]
  * title = "1 Hour after appointment"
  * preConditions = "EHR has completed the appointment with the patient"
  * postConditions = "EHR has retrieved list of personal trainers and notified GetFit of new Task"
  * insert ProcessSearch(3, "Retrieve service provider list",        goodCardio, registry, Scen2query1, Scen2PractitionerTrainerSearchsetBundle, [[Search to retrieve list of Service Providers for personal trainers near Mrs. Johansson.]])
  * insert ProcessCreate(4, "Subscription notification of new Task", goodCardio, getFit,   Scen2SubscriptionNotificationNewTaskBundle, ,         [[Service provider is notified of new Task via subscription. Request: `POST https://fit4life.example.org/fhir/Subscription`  Response: `201 Created`]])
* process[+]
  * title = "1 Day after appointment"
  * preConditions = "GetFit has received the notification of new Task"
  * postConditions = "GetFit has queried Task, associated ServiceRequest and Patient; and updated Task to refused"
  * insert ProcessSearch(5, "Getfit retrieves referral",      getFit,     goodCardio, Scen2query2, Scen2TaskGetFitResponseBundle, [[GetFit retrieves the referenced Task and its associated ServiceRequest and Patient.]])
  * insert ProcessUpdate(6, "GetFit refuses task",            getFit,     goodCardio, Scen2TaskGetFit, 2,                         [[GetFit updates the Task status to 'refused' with a reason.  Request: `PUT https://goodCardio.example.org/fhir/Task/Scen2TaskGetFitV1` Response: `200 Ok`]])
* process[+]
  * title = "An Hour later"
  * preConditions  = "EHR has a Task seeking fulfillment of ServiceRequest for Fit4Life"
  * postConditions = "Fit4Life has retrieved ServiceRequest, Patient, Conditions, Observations, and updated Task"
  * insert ProcessCreate(7,  "Create Task on Fit4Life",       goodCardio, Fit4Life,   Scen2TaskFit4Life, 1,                             [[New Task is created directly on Fit4Life's server.  Request: `POST https://fit4life.example.org/fhir/Task` Response: `201 Created`]])
  * insert ProcessSearch(8,  "Fit4Life retrieves referral",   Fit4Life,   goodCardio, Scen2query3, Scen2ReferralFit4LifeResponseBundle, [[Fit4Life retrieves the ServiceRequest and Patient referenced by the Task.]])
  * insert ProcessSearch(9,  "Fit4Life retrieves conditions", Fit4Life,   goodCardio, Scen2query4, Scen2ConditionResponseBundle,        [[Fit4Life retrieves the physical-activity related Conditions associated with the patient.]])
  * insert ProcessSearch(10, "Fit4Life retrieves referral",   Fit4Life,   goodCardio, Scen2query5, Scen2ObservationResponseBundle,      [[Fit4Life retrieves the physical-activity related Observations associated with the patient.  (In practice there would typically be more than are shown here, and some might not be for profiles defined in this IG.)]])
  * insert ProcessCreate(11, "EHR gets referral acceptance",  Fit4Life,   goodCardio, Scen2NotificationUpdatedTaskBundle, ,             [[A subscription notification to the EHR is triggered when Fit4Life changes the prescription status to 'accepted'.  Request: `POST https://goodCardio.example.org/mySubscriptions` Response: `200 Ok`]])
  * insert ProcessSearch(12, "EHR retrieves accepted Task",   goodCardio, Fit4Life,   Scen2query6, Scen2TaskEHRResponseBundle1,         [[EHR retrieves the Task referenced by the subscription notification]])
* process[+]
  * title = "2 Months Later"
  * preConditions = "Fit4Life has updated the Task"
  * postConditions = "EHR has retrieved the completed Task, DiagnosticReport, and associated Observations"
  * insert ProcessCreate(13, "EHR gets referral acceptance", Fit4Life, goodCardio,    Scen2NotificationCompletedTaskBundle, ,                       [[A subscription notification to the EHR is triggered when Fit4Life changes the Task status to 'completed'.  Request: `POST https://goodCardio.example.org/mySubscriptions` Response: `200 Ok`]])
  * insert ProcessSearch(14, "EHR retrieves completed Task",  goodCardio, Fit4Life,   Scen2query6, Scen2TaskEHRResponseBundle2,                     [[EHR retrieves the Task referenced by the subscription notification]])
  * insert ProcessSearch(15, "EHR retrieves report",          goodCardio, Fit4Life,   Scen2query7, Scen2DiagnosticReportObservationsResponseBundle, [[EHR retrieves the Fit4Life DiagnosticReport using the id provided in the Task.  It also uses _include to retrieve referenced observations]])

Instance: Scen2SubscriptionEhr
InstanceOf: BackportSubscription
Title:       "Subscription - EHR Monitoring Task - Scenario 2"
Description:  "A subscription from Good Health Cardiology EHR to monitor Tasks it has created on Fit4Life."
Usage: #example
* status = #requested
* criteria = "Task?requester=https://registry.example.org/fhir/Organization/Scen2OrgGoodCardio"
* channel
  * type = #rest-hook
  * endpoint = "https://goodCardio.example.org/mySubscriptions"
  * payload = #application/fhir+json
    * extension[content].valueCode = #id-only
* contact[+]
  * system = #phone
  * value = "123-456-7890"
  * use = #work
* contact[+]
  * system = #email
  * value = "ehr@example.org"
  * use = #work
* end = "2024-01-01T00:00:00Z"
* reason = "Monitoring tasks"

Instance: Scen2SubscriptionGetFit
InstanceOf: BackportSubscription
Title:       "Subscription - GetFit Monitoring Task - Scenario 2"
Description:  "A subscription from GetFit Training to monitor Tasks assigned to it on Good Health Cardiology EHR."
Usage: #example
* status = #requested
* criteria = "Task?owner=https%3A//registry.example.org/fhir/Organization/Scen2OrgGetFitTraining"
* channel
  * type = #rest-hook
  * endpoint = "https://getFit.example.org/subscriptionNotifications"
  * payload = #application/fhir+json
    * extension[content].valueCode = #empty
* contact[+]
  * system = #phone
  * value = "987-654-3210"
  * use = #work
* contact[+]
  * system = #email
  * value = "getFit@example.org"
  * use = #work
* end = "2024-01-01T00:00:00Z"
* reason = "Monitoring task updates"


Instance: Scen2PractitionerTrainerSearchsetBundle
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - PractitionerRole - Personal Trainers - Scenario 2"
Description:  "Bundle representing the search results for personal trainers within the specified postcode."
Usage: #example
* insert SearchBundle(2, [[PractitionerRole?role=228239008|http%3A//snomed.info/sct&location.near=37.8393|84.2700|20|[mi_us]&_include=PractitionerRole:practitioner]])
* insert EntryMatch(PractitionerRole, Scen2RoleWang)
* insert EntryMatch(PractitionerRole, Scen2RoleMatthews)
* insert EntryInclude(Practitioner, Scen2PractitionerWang)
* insert EntryInclude(Practitioner, Scen2PractitionerMatthews)

// Referral workflow
Instance: Scen2ServiceRequest
InstanceOf: PAServiceRequest
Title:       "ServiceRequest - for Physical Activity Program - Scenario 2"
Description:  "This ServiceRequest instance represents a physical activity request for patient Nancy Johansson"
Usage: #example
* insert ExerciseReferral(2023-03-16, 2023-06-16, Scen2PatientJohansson, "Nancy Johansson", Scen2RoleLopez, "Dr. Lopez", $sct#409063005, [[Counseling]])
* code.text = "Ms. Johansson suffered from a mild heart attack last fall.  She has made a full recovery.  However, her level of physical activity has significantly declined from that prior to her incident due to discomfort and concerns about triggering another event.  I have explained that this reduced level of activity has negative implications for her health.\n\nMs. Johnson has agreed that some 1-on-1 consultation with an exercise professional who can help her resume a level of physical activity that is safe and feels positive would be helpful.  Please meet with her and support her in this endeavor."
* reasonReference = Reference(Scen2ConditionLackOfExercise)
* reasonReference = Reference(Scen2ConditionHypertension)

Instance: Scen2TaskGetFitV1
InstanceOf: PATaskForReferralManagement
Title:       "Task - Seeking fulfillment from GetFit 'requested' - Scenario 2"
Description:  "Task instance represents a 'Fulfill' order task for patient Johansson."
Usage: #example
* insert FulfillTask(Scen2PatientJohansson, "Nancy Johansson", Scen2OrgGoodCardio, "Good Health Cardiology", Scen2OrgGetFitTraining, "Get Fit", Scen2ServiceRequest, requested, 2023-03-15)

Instance: Scen2TaskGetFitV2
InstanceOf: PATaskForReferralManagement
Title:       "Task - Seeking fulfillment from GetFit 'refused' - Scenario 2"
Description:  "The updated Task instance shows the 'Fulfill' order task for patient Johansson has been refused. "
Usage: #example
* insert FulfillTask(Scen2PatientJohansson, "Nancy Johansson", Scen2OrgGoodCardio, "Good Health Cardiology", Scen2OrgGetFitTraining, "Get Fit", Scen2ServiceRequest, rejected, 2023-03-15)
* statusReason.text = "Unavailable until 2 months later"

Instance: Scen2Parameters
InstanceOf: BackportSubscriptionStatusR4
Title:       "Parameters 'Subscription Status' - GetFit Task - Scenario 2"
Description:  "Parameters include the reference to the subscription, the type of notification, and the focus of the notification."
Usage: #example
* insert SubParameters(Scen2SubscriptionGetFit, Scen2TaskGetFitV1, 208)

Instance: Scen2SubscriptionNotificationNewTaskBundle
InstanceOf: BackportSubscriptionNotificationR4
Title:       "Bundle 'Subscription Notification' - GetFit Task - Scenario 2"
Description:  "Bundle represents a subscription notification triggered by the creation of a new task."
Usage: #example
* insert SubNotification(Scen2Parameters, GetFit, Scen2SubscriptionGetFit)

Instance: Scen2TaskGetFitResponseBundle
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Task - GetFit Fulfillment Request - Scenario 2"
Description:  "Bundle represents a search response to a Task query made for tasks related to patient 'Johansson' and owned by 'Get Fit Training'."
Usage: #example
* insert SearchBundle(1, [[Task?status=requested&owner=https%3A//registry.example.org/fhir/Organization/Scen2OrgGetFitTraining&_include=Task:patient&_include=Task:focus]])
* insert EntryMatch(Task, Scen2TaskGetFitV1)
* insert EntryInclude(Patient, Scen2PatientJohansson)
* insert EntryInclude(ServiceRequest, Scen2ServiceRequest)

Instance: Scen2TaskFit4LifeV1
InstanceOf: PATaskForReferralManagement
Title:       "Task - Fit 4 Life Referral 'requested' - Scenario 2"
Description: "Task instance represents a 'Fulfill' order task for patient Johansson."
Usage: #example
* insert FulfillTask(Scen2PatientJohansson, "Nancy Johansson", Scen2OrgGoodCardio, "Good Health Cardiology", Scen2OrgFit4Life, "Fit 4 Life", Scen2ServiceRequest, requested, 2023-03-16)

Instance: Scen2TaskFit4LifeV2
InstanceOf: PATaskForReferralManagement
Title:       "Task - Fit 4 Life Referral 'accepted' - Scenario 2"
Description: "This updated Task instance (version 2) represents an in-progress task for patient Nancy Johansson."
Usage: #example
* insert FulfillTask(Scen2PatientJohansson, "Nancy Johansson", Scen2OrgGoodCardio, "Good Health Cardiology", Scen2OrgFit4Life, "Fit 4 Life", Scen2ServiceRequest, accepted, 2023-03-16)

Instance: Scen2TaskFit4LifeV3
InstanceOf: PATaskForReferralManagement
Title:       "Task - Fit 4 Life Referral 'completed' - Scenario 2"
Description: "This updated Task instance (version 3) represents a completed task for patient Nancy Johansson"
Usage: #example
* insert FulfillTask(Scen2PatientJohansson, "Nancy Johansson", Scen2OrgGoodCardio, "Good Health Cardiology", Scen2OrgFit4Life, "Fit 4 Life", Scen2ServiceRequest, completed, 2023-03-16)
* output[PerformedActivityReference].valueReference = Reference(Scen2DiagnosticReport)

Instance: Scen2ReferralFit4LifeResponseBundle
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - ServiceRequest, Patient - Fit4Life Referral - Scenario 2"
Description: "Bundle instance returning ServiceRequest and associated patient"
Usage: #example
* insert SearchBundle(1, [[ServiceRequest?_id=Scen2ServiceRequest&_include=ServiceRequest:patient]])
* insert EntryMatch(ServiceRequest, Scen2ServiceRequest)
* insert EntryInclude(Patient, Scen2PatientJohansson)

Instance: Scen2TaskEHRResponseBundle1
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Fit 4 Life Task 'accepted' - Scenario 2"
Description: "Bundle instance returning accepted Task to EHR, prompted by subscription notification"
Usage: #example
* insert SearchBundle(1, [[https://fit4life.example.org/fhir/Task?_id=Scen2TaskFit4Life]])
* insert EntryMatch(Task, Scen2TaskFit4LifeV2)

Instance: Scen2TaskEHRResponseBundle2
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Fit 4 Life Task 'completed' - Scenario 2"
Description: "Bundle instance returning completed Task to EHR, prompted by subscription notification"
Usage: #example
* insert SearchBundle(1, [[https://fit4life.example.org/fhir/Task?_id=Scen2TaskFit4Life]])
* insert EntryMatch(Task, Scen2TaskFit4LifeV3)

Instance: Scen2ConditionResponseBundle
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Condition - Scenario 2"
Description:  "Bundle returning conditions for Patient Johansson"
Usage: #example
* insert SearchBundle(2, [[Condition?patient=Scen2PatientJohansson&category=http:%3A//hl7.org/fhir/us/physical-activity/CodeSystem/PATemporaryCodesorary-codes|PhysicalActivity]])
* insert EntryMatch(Condition, Scen2ConditionLackOfExercise)
* insert EntryMatch(Condition, Scen2ConditionHypertension)

Instance: Scen2ConditionLackOfExercise
InstanceOf: PAConditionLowPA
Title:       "Condition - Lack of Physical Exercise - Scenario 2"
Description:  "This instance represents Patient Johansson's condition, which is clinically active and confirmed."
Usage: #example
* insert ConditionPA(Scen2PatientJohansson, "Nancy Johansson", Scen2RoleLopez, "Dr. Lopez", 2022-09-01)

Instance: Scen2ConditionHypertension
InstanceOf: USCoreCondition
Title:       "Condition - Hypertension - Scenario 2"
Description:  "This instance represents Patient Johansson's hypertension condition, which is clinically active and confirmed."
Usage: #example
* insert Condition(Scen2PatientJohansson, "Nancy Johansson", http://registry.example.org/fhir/Practitioner/123, "Some other clinician", $sct#38341003, "Hypertension", 2019-06-05)

Instance: Scen2ObservationResponseBundle
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Observations - Supporting Measures  - Scenario 2"
Description:  "This bundle includes Patient Johansson's physical activity observations, including the number of days per week engaged in physical activity and the number of minutes per day spent on physical activity."
Usage: #example
* insert SearchBundle(2, [[Observation?patient=Scen2PatientJohansson&category=http:%3A//hl7.org/fhir/us/physical-activity/CodeSystem/PATemporaryCodesorary-codes|PhysicalActivity]])
* insert EntryMatch(Observation, Scen2ObsDaysPerWeek)
* insert EntryMatch(Observation, Scen2ObsMinutesPerDay)

Instance: Scen2ObsDaysPerWeek
InstanceOf: PAObservationEVSDaysPerWeek
Title:       "Observation - Days per Week - Scenario 2"
Description:  "This observation represents the number of days per week that Patient Johansson engages in physical activity."
Usage: #example
* insert DaysPerWeek(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15, 1)

Instance: Scen2ObsMinutesPerDay
InstanceOf: PAObservationEVSMinutesPerDay
Title:       "Observation - Minutes per Day - Scenario 2"
Description:  "This observation represents the number of minutes per day that Patient Johansson engages in physical activity."
Usage: #example
* insert MinPerDay(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15, 15)

Instance: Scen2Parameters2
InstanceOf: BackportSubscriptionStatusR4
Title:       "Parameters 'Subscription Status' - Task - Fit 4 Life 'accepted' - Scenario 2"
Description:  "These parameters contain information about the updated task notification, including the associated subscription and the focus task."
Usage: #example
* insert SubParameters(Scen2SubscriptionEhr, Scen2TaskFit4LifeV2, 831)

Instance: Scen2NotificationUpdatedTaskBundle
InstanceOf: BackportSubscriptionNotificationR4
Title:       "Bundle 'Subscription Notification' - Task - Fit 4 Life 'accepted' - Scenario 2"
Description:  "This bundle contains notifications for updated tasks for Patient Johansson."
Usage: #example
* insert SubNotification(Scen2Parameters2, goodCardio, Scen2SubscriptionEhr)

Instance: Scen2Parameters3
InstanceOf: BackportSubscriptionStatusR4
Title:       "Parameters 'Subscription Status' - Task - Fit 4 Life 'completed' - Scenario 2"
Description:  "These parameters contain information about the completed task notification."
Usage: #example
* insert SubParameters(Scen2SubscriptionEhr, Scen2TaskFit4LifeV3, 916)

Instance: Scen2NotificationCompletedTaskBundle
InstanceOf: BackportSubscriptionNotificationR4
Title:       "Bundle 'Subscription Notification' - Task - Fit 4 Life 'completed' - Scenario 2"
Description:  "This bundle contains notifications for completed tasks related to physical activity."
Usage: #example
* insert SubNotification(Scen2Parameters3, goodCardio, Scen2SubscriptionEhr)


Instance: Scen2DiagnosticReportObservationsResponseBundle
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - DiagnosticReport, Observations - Scenario 2"
Description:  "This bundle contains a diagnostic report and related observations for physical activity."
Usage: #example
* insert SearchBundle(1, [[DiagnosticReport?id=Scen2DiagnosticReport&_include=DiagnosticReport:result]])
* insert EntryMatch(DiagnosticReport, Scen2DiagnosticReport)
* insert EntryInclude(Observation, Scen2ObsDaysPerWeek2)
* insert EntryInclude(Observation, Scen2ObsMinutesPerDay2)
* insert EntryInclude(Observation, Scen2ObsActivityGroup)
* insert EntryInclude(Observation, Scen2ObsActivityType)
* insert EntryInclude(Observation, Scen2ObsActivityDuration)
* insert EntryInclude(Observation, Scen2ObsActivityMeanHR)
* insert EntryInclude(Observation, Scen2ObsActivityPeakHR)
* insert EntryInclude(Observation, Scen2ObsActivityExperience)
* insert EntryInclude(Observation, Scen2ObsCalories)

Instance: Scen2DiagnosticReport
InstanceOf: PADiagnosticReport
Title:       "DiagnosticReport - PA Consultation Report - Scenario 2"
Description:  "A diagnostic report documenting the physical activity consultation for patient Aisha Khatun."
Usage: #example
* insert DiagnosticReport(Scen2PatientJohansson, "Nancy Johansson", Scen2PractitionerMatthews, "Mr. Matthews", $loinc#11488-4, "Consult note", Scen2ServiceRequest, 2023-03-16, 2023-05-16, "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c3RyeShBZG9iZSkgL1N1cHBsZW1lbnQgMD4+DQplbmRvYmoNCjkgMCBvYmoNCjw8L1R5cGUvRm9udERlc2NyaXB0b3IvRm9udE5hbWUvQkNERUVFK0NhbGlicmkvRmxhZ3MgMzIvSXRhbGljQW5nbGUgMC9Bc2NlbnQgNzUwL0Rlc2NlbnQgLTI1MC9DYXBIZWlnaHQgNzUwL0F2Z1dpZHRoIDUyMS9NYXhXaWR0aCAxNzQzL0ZvbnRXZWlnaHQgNDAwL1hIZWlnaHQgMjUwL1N0ZW1WIDUyL0ZvbnRCQm94WyAtNTAzIC0yNTAgMTI0MCA3NTBdIC9Gb250RmlsZTIgODEgMCBSPj4NCmVuZG9iag0KMTAgMCBvYmoNCjw8L1R5cGUvRXh0R1N0YXRlL0JNL05vcm1hbC9jYSAxPj4NCmVuZG9iag0KMTEgMCBvYmoNCjw8L1R5cGUvRXh0R1N0YXRlL0JNL05vcm1hbC9DQSAxPj4NCmVuZG9iag0KMTIgMCBvYmoNCjw8L1R5cGUvRm9udC9TdWJ0eXBlL1RydWVUeXBlL05hbWUvRjIvQmFzZUZvbnQvQkNERkVFK0NhbGlicmkvRW5jb2RpbmcvV2luQW5zaUVuY29kaW5nL0ZvbnREZXNjcmlwdG9yIDEzIDAgUi9GaXJzdENoYXIgMzIvTGFzdENoYXIgMzIvV2lkdGhzIDgzIDAgUj4+DQplbmRvYmoNCjEzIDAgb2JqDQo8PC9UeXBlL0ZvbnREZXNjcmlwdG9yL0ZvbnROYW1lL0JDREZFRStDYWxpYnJpL0ZsYWdzIDMyL0l0YWxpY0FuZ2xlIDAvQXNjZW50IDc1MC9EZXNjZW50IC0yNTAvQ2FwSGVpZ2h0IDc1MC9BdmdXaWR0aCA1MjEvTWF4V2lkdGggMTc0My9Gb250V2VpZ2h0IDQwMC9YSGVpZ2h0IDI1MC9TdGVtViA1Mi9Gb250QkJveFsgLTUwMyAtMjUwIDEyNDAgNzUwXSAvRm9udEZpbGUyIDgxIDAgUj4+DQplbmRvYmoNCjE0IDAgb2JqDQo8PC9TdWJ0eXBlL0xpbmsvUmVjdFsgNjkuNzUgMTg0Ljc1IDE2Mi4wNSAyMDcuMjRdIC9CUzw8L1cgMD4+L0YgNC9BPDwvVHlwZS9BY3Rpb24vUy9VUkkvVVJJKG1haWx0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WyAyMjZdIA0KZW5kb2JqDQo4NCAwIG9iag0KPDwvVHlwZS9NZXRhZGF0YS9TdWJ0eXBlL1hNTC9MZW5ndGggMzA5MD4+DQpzdHJlYW0NCjw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+PHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iMy4xLTcwMSI+CjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiICB4bWxuczpwZGY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8iPgo8cGRmOlByb2R1Y2VyPk1pY3Jvc29mdMKuIFdvcmQgZm9yIE1pY3Jvc29mdCAzNjU8L3BkZjpQcm9kdWNlcj48L3JkZjpEZXNjcmlwdGlvbj4KPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+TGxveWQgTWNLZW56aWU8L3JkZjpsaT48L3JkZjpTZXE+PC9kYzpjcmVhdG9yPjwvcmRmOkRlc2NyaXB0aW9uPgo8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KPHhtcDpDcmVhdG9yVG9vbD5NaWNyb3NvZnTCriBXb3JkIGZvciBNaWNyb3NvZnQgMzY1PC94bXA6Q3JlYXRvclRvb2w+PHhtcDpDcmVhdGVEYXRlPjIwMjMtMDctMjJUMTI6NDQ6NTctMDY6MDA8L3htcDpDcmVhdGVEYXRlPjx4bXA6TW9kaWZ5RGF0ZT4yMDIzLTA3LTIyVDEyOjQ0OjU3LTA2OjAwPC94bXA6TW9kaWZ5RGF0ZT48L3JkZjpEZXNjcmlwdGlvbj4KPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIj4KPHhtcE1NOkRvY3VtZW50SUQ+dXVpZDpEMEIwNUY1OC1CQkQ3LTQzQjgtQUNCNy1BRTJFQkIzRDlCM0M8L3htcE1NOkRvY3VtZW50SUQ+PHhtcE1NOkluc3RhbmNlSUQ+dXVpZDpEMEIwNUY1OC1CQkQ3LTQzQjgtQUNCNy1BRTJFQkIzRDlCM0M8L3htcE1NOkluc3RhbmNlSUQ+PC9yZGY6RGVzY3JpcHRpb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8L3JkZjpSREY+PC94OnhtcG1ldGE+PD94cGFja2V0IGVuZD0idyI/Pg0KZW5kc3RyZWFtDQplbmRvYmoNCjg1IDAgb2JqDQo8PC9EaXNwbGF5RG9jVGl0bGUgdHJ1ZT4+DQplbmRvYmoNCjg2IDAgb2JqDQo8PC9UeXBlL1hSZWYvU2l6ZSA4Ni9XWyAxIDQgMl0gL1Jvb3QgMSAwIFIvSW5mbyAxNSAwIFIvSURbPDU4NUZCMEQwRDdCQkI4NDNBQ0I3QUUyRUJCM0Q5QjNDPjw1ODVGQjBEMEQ3QkJCODQzQUNCN0FFMkVCQjNEOUIzQz5dIC9GaWx0ZXIvRmxhdGVEZWNvZGUvTGVuZ3RoIDIxMj4+DQpzdHJlYW0NCnicNdI9UsJgEMbxNxFEAc0HSQhgogIqoARBIvjZM8MxPIB3oqGRlqHwFJTOcJX4sn/dYn+zxbPNrlK6sszQ3VFqzwJ+BNMU7BTWsBWcT9gI7hJ2QsWDb8H7Evy5XqhXh+oZXuAV3uAJTPgLvOt48PE/GZCDAziEPBxDAY6gBEU4hTKcgAMW2OCBCxWogg8B1CGEGkTQgDM4hxiacAGX0IYWXMMVdOEGOnAHPbiFBxhAHxK4hyGMIIUxTOERJvoOdV4jmu8xLDm44SYwE+KVUr8x9RzcDQplbmRzdHJlYW0NCmVuZG9iag0KeHJlZg0KMCA4Nw0KMDAwMDAwMDAxNiA2NTUzNSBmDQowMDAwMDAwMDE3IDAwMDAwIG4NCjAwMDAwMDAxNjMgMDAwMDAgbg0KMDAwMDAwMDIxOSAwMDAwMCBuDQowMDAwMDAwNTE0IDAwMDAwIG4NCjAwMDAwMDQxNDkgMDAwMDAgbg0KMDAwMDAwNDI3OSAwMDAwMCBuDQowMDAwMDA0MzA3IDAwMDAwIG4NCjAwMDAwMDQ0NjQgMDAwMDAgbg0KMDAwMDAwNDUzNyAwMDAwMCBuDQowMDAwMDA0Nzc2IDAwMDAwIG4NCjAwMDAwMDQ4MzAgMDAwMDAgbg0KMDAwMDAwNDg4NCAwMDAwMCBuDQowMDAwMDA1MDUzIDAwMDAwIG4NCjAwMDAwMDUyOTMgMDAwMDAgbg0KMDAwMDAwNTQ1MiAwMDAwMCBuDQowMDAwMDAwMDE3IDY1NTM1IGYNCjAwMDAwMDAwMTggNjU1MzUgZg0KMDAwMDAwMDAxOSA2NTUzNSBmDQowMDAwMDAwMDIwIDY1NTM1IGYNCjAwMDAwMDAwMjEgNjU1MzUgZg0KMDAwMDAwMDAyMiA2NTUzNSBmDQowMDAwMDAwMDIzIDY1NTM1IGYNCjAwMDAwMDAwMjQgNjU1MzUgZg0KMDAwMDAwMDAyNSA2NTUzNSBmDQowMDAwMDAwMDI2IDY1NTM1IGYNCjAwMDAwMDAwMjcgNjU1MzUgZg0KMDAwMDAwMDAyOCA2NTUzNSBmDQowMDAwMDAwMDI5IDY1NTM1IGYNCjAwMDAwMDAwMzAgNjU1MzUgZg0KMDAwMDAwMDAzMSA2NTUzNSBmDQowMDAwMDAwMDMyIDY1NTM1IGYNCjAwMDAwMDAwMzMgNjU1MzUgZg0KMDAwMDAwMDAzNCA2NTUzNSBmDQowMDAwMDAwMDM1IDY1NTM1IGYNCjAwMDAwMDAwMzYgNjU1MzUgZg0KMDAwMDAwMDAzNyA2NTUzNSBmDQowMDAwMDAwMDM4IDY1NTM1IGYNCjAwMDAwMDAwMzkgNjU1MzUgZg0KMDAwMDAwMDA0MCA2NTUzNSBmDQowMDAwMDAwMDQxIDY1NTM1IGYNCjAwMDAwMDAwNDIgNjU1MzUgZg0KMDAwMDAwMDA0MyA2NTUzNSBmDQowMDAwMDAwMDQ0IDY1NTM1IGYNCjAwMDAwMDAwNDUgNjU1MzUgZg0KMDAwMDAwMDA0NiA2NTUzNSBmDQowMDAwMDAwMDQ3IDY1NTM1IGYNCjAwMDAwMDAwNDggNjU1MzUgZg0KMDAwMDAwMDA0OSA2NTUzNSBmDQowMDAwMDAwMDUwIDY1NTM1IGYNCjAwMDAwMDAwNTEgNjU1MzUgZg0KMDAwMDAwMDA1MiA2NTUzNSBmDQowMDAwMDAwMDUzIDY1NTM1IGYNCjAwMDAwMDAwNTQgNjU1MzUgZg0KMDAwMDAwMDA1NSA2NTUzNSBmDQowMDAwMDAwMDU2IDY1NTM1IGYNCjAwMDAwMDAwNTcgNjU1MzUgZg0KMDAwMDAwMDA1OCA2NTUzNSBmDQowMDAwMDAwMDU5IDY1NTM1IGYNCjAwMDAwMDAwNjAgNjU1MzUgZg0KMDAwMDAwMDA2MSA2NTUzNSBmDQowMDAwMDAwMDYyIDY1NTM1IGYNCjAwMDAwMDAwNjMgNjU1MzUgZg0KMDAwMDAwMDA2NCA2NTUzNSBmDQowMDAwMDAwMDY1IDY1NTM1IGYNCjAwMDAwMDAwNjYgNjU1MzUgZg0KMDAwMDAwMDA2NyA2NTUzNSBmDQowMDAwMDAwMDY4IDY1NTM1IGYNCjAwMDAwMDAwNjkgNjU1MzUgZg0KMDAwMDAwMDA3MCA2NTUzNSBmDQowMDAwMDAwMDcxIDY1NTM1IGYNCjAwMDAwMDAwNzIgNjU1MzUgZg0KMDAwMDAwMDA3MyA2NTUzNSBmDQowMDAwMDAwMDc0IDY1NTM1IGYNCjAwMDAwMDAwNzUgNjU1MzUgZg0KMDAwMDAwMDA3NiA2NTUzNSBmDQowMDAwMDAwMDc3IDY1NTM1IGYNCjAwMDAwMDAwNzggNjU1MzUgZg0KMDAwMDAwMDA3OSA2NTUzNSBmDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDY4NzUgMDAwMDAgbg0KMDAwMDAwNzUwMCAwMDAwMCBuDQowMDAwMDY5NTk4IDAwMDAwIG4NCjAwMDAwNzAxOTAgMDAwMDAgbg0KMDAwMDA3MDIxNyAwMDAwMCBuDQowMDAwMDczMzkwIDAwMDAwIG4NCjAwMDAwNzM0MzUgMDAwMDAgbg0KdHJhaWxlcg0KPDwvU2l6ZSA4Ny9Sb290IDEgMCBSL0luZm8gMTUgMCBSL0lEWzw1ODVGQjBEMEQ3QkJCODQzQUNCN0FFMkVCQjNEOUIzQz48NTg1RkIwRDBEN0JCQjg0M0FDQjdBRTJFQkIzRDlCM0M+XSA+Pg0Kc3RhcnR4cmVmDQo3Mzg0OA0KJSVFT0YNCnhyZWYNCjAgMA0KdHJhaWxlcg0KPDwvU2l6ZSA4Ny9Sb290IDEgMCBSL0luZm8gMTUgMCBSL0lEWzw1ODVGQjBEMEQ3QkJCODQzQUNCN0FFMkVCQjNEOUIzQz48NTg1RkIwRDBEN0JCQjg0M0FDQjdBRTJFQkIzRDlCM0M+XSAvUHJldiA3Mzg0OC9YUmVmU3RtIDczNDM1Pj4NCnN0YXJ0eHJlZg0KNzU3NDUNCiUlRU9G")
* result[+] = Reference(Scen2ObsDaysPerWeek2)
* result[+] = Reference(Scen2ObsMinutesPerDay2)
* result[+] = Reference(Scen2ObsActivityGroup)
* result[+] = Reference(Scen2ObsActivityType)
* result[+] = Reference(Scen2ObsActivityDuration)
* result[+] = Reference(Scen2ObsActivityMeanHR)
* result[+] = Reference(Scen2ObsActivityPeakHR)
* result[+] = Reference(Scen2ObsActivityExperience)
* result[+] = Reference(Scen2ObsCalories)

Instance: Scen2ObsDaysPerWeek2
InstanceOf: PAObservationEVSDaysPerWeek
Title:       "Observation - Days per week 'patient-submitted' - Scenario 2"
Description:  "The number of days per week the patient engages in physical activity."
Usage: #example
* insert DaysPerWeek(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15, 5)

Instance: Scen2ObsMinutesPerDay2
InstanceOf: PAObservationEVSMinutesPerDay
Title:       "Observation - Minutes per day 'patient-submitted' - Scenario 2"
Description:  "The duration of physical activity in minutes per day for the patient."
Usage: #example
* insert MinPerDay(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15, 32)

Instance: Scen2ObsActivityGroup
InstanceOf: PAObservationActivityGroup
Title:       "Observation - Activity Group - Scenario 2"
Description:  "A grouping of observations associated with a single physical activity"
Usage: #example
* insert ActivityGroup(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15)
* insert HasMember(Scen2ObsActivityType)
* insert HasMember(Scen2ObsActivityDuration)
* insert HasMember(Scen2ObsActivityMeanHR)
* insert HasMember(Scen2ObsActivityPeakHR)
* insert HasMember(Scen2ObsActivityExperience)

Instance: Scen2ObsActivityType
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Activity Type - Scenario 2"
Description:  "Indicates that the specific activity was a run"
Usage: #example
* insert ActivityType(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15, LA11836-6, "Running")

Instance: Scen2ObsActivityDuration
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Activity Duration - Scenario 2"
Description:  "The length of a period of physical activity."
Usage: #example
* insert ActivityDuration(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15, 30)

Instance: Scen2ObsActivityMeanHR
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Average Activity Heart Rate - Scenario 2"
Description:  "The average heart rate achieved by the patient during physical activity."
Usage: #example
* insert MeanHeartRate(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15, 132)

Instance: Scen2ObsActivityPeakHR
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Maximum Activity Heart Rate - Scenario 2"
Description:  "The maximum heart rate achieved by the patient during physical activity."
Usage: #example
* insert PeakHeartRate(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15, 177)

Instance: Scen2ObsActivityExperience
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Patient's Activity Experience - Scenario 2"
Description:  "The amount of pleasure/displeasure the patient experienced during the run."
Usage: #example
* insert ActivityExperience(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15, 3, "Good")

Instance: Scen2ObsCalories
InstanceOf: PAObservationTimeMeasure
Title:       "Observation - Calories Burned in 24 Hours - Scenario 2"
Description:  "The number of calories burned by the patient through physical activity in a 24-hour period."
Usage: #example
* insert DailyCalories(Scen2PatientJohansson, "Nancy Johansson", Scen2PatientJohansson, "Nancy Johansson", 2023-03-15, 517)

// Participants
Instance: Scen2PatientJohansson
InstanceOf: USCorePatientProfile
Title:       "Patient - Johansson - Scenario 2"
Description:  "Patient instance represents Nancy Johansson"
Usage: #example
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical record number"
    * text = "Medical record number"
  * system = "http://goodCardio.example.org/identifiers/mrn"
  * value = "123456"
* active = true
* name
  * use = #official
  * family = "Johansson"
  * given = "Nancy"
* telecom[+]
  * system = #phone
  * value = "+1 (555) 555-5555"
  * use = #home
* telecom[+]
  * system = #email
  * value = "nancy.johansson@example.org"
  * use = #home
* gender = #male
* birthDate = "1960-05-15"
* address
  * use = #home
  * line = "123 Main St"
  * city = "Springfield"
  * state = "IL"
  * postalCode = "62701"
  * country = "USA"

Instance: Scen2OrgGoodCardio
InstanceOf: USCoreOrganizationProfile
Title:       "Organization - Good Health Cardiology - Scenario 2"
Description:  "An example cardiology clinic."
Usage: #example
* identifier[NPI].value = "87654"
* active = true
* name = "Good Health Cardiology"

Instance: Scen2OrgFit4Life
InstanceOf: USCoreOrganizationProfile
Title:       "Organization - Fit 4 Life - Scenario 2"
Description:  "A specialty exercise clinic named Fit 4 Life."
Usage: #example
* identifier[NPI].value = "65432"
* active = true
* name = "Fit 4 Life"

Instance: Scen2OrgGetFitTraining
InstanceOf: USCoreOrganizationProfile
Title:       "Organization - Get Fit Training - Scenario 2"
Description:  "A fitness center named Get Fit Training."
Usage: #example
* identifier[NPI].value = "54321"
* active = true
* name = "Get Fit Training"

Instance: Scen2PractitionerLopez
InstanceOf: USCorePractitionerProfile
Title:       "Practitioner - John Lopez - Scenario 2"
Description:  "Profile of Dr. Lopez."
Usage: #example
* identifier[NPI].value = "654321"
* name
  * family = "Lopez"
  * given = "John"

Instance: Scen2RoleLopez
InstanceOf: USCorePractitionerRoleProfile
Title:       "PractitionerRole - John Lopez - Scenario 2"
Description:  "Role of Dr. Lopez who serves as a cardiologist at the Good Health Cardiology organization."
Usage: #example
* practitioner = Reference(Scen2PractitionerLopez)
* code = $sct#17561000 "Cardiologist"
* organization = Reference(Scen2OrgGoodCardio) "Good Health Cardiology"

Instance: Scen2RoleWang
InstanceOf: USCorePractitionerRoleProfile
Title:       "PractitionerRole - Mrs. Wang - Scenario 2"
Description:  "Mrs. Kim Wang is a personal trainer working for Get Fit Training."
Usage: #example
* active = true
* practitioner = Reference(Scen2PractitionerWang) "Mrs. Wang"
* organization = Reference(Scen2OrgGetFitTraining) "Get Fit Training"
* code = $sct#228239008 "Trainers"

Instance: Scen2PractitionerWang
InstanceOf: USCorePractitionerProfile
Title:       "Practitioner - Mrs. Wang - Scenario 2"
Description:  "Mrs. Kim Wang is a qualified personal trainer at Get Fit Training."
Usage: #example
* identifier[NPI].value = "78903"
* active = true
* name
  * use = #official
  * family = "Wang"
  * given = "Kim"
* qualification
  * identifier
    * system = "http://registry.example.org/practitionerLicenseNumber"
    * value = "12347"
  * code = $sct#228239008 "Trainers"
  * period.start = "2000-01-01"
  * issuer = Reference(Scen2OrgGetFitTraining) "Get Fit Training"

Instance: Scen2RoleMatthews
InstanceOf: USCorePractitionerRoleProfile
Title:       "PractitionerRole - Mr. Matthews - Scenario 2"
Description:  "Role of Mr. Matthews who serves as a personal trainer at the Fit 4 Life organization."
Usage: #example
* active = true
* practitioner = Reference(Scen2PractitionerMatthews) "Mr. Matthews"
* organization = Reference(Scen2OrgFit4Life) "Fit 4 Life"
* code = $sct#228239008 "Trainers"

Instance: Scen2PractitionerMatthews
InstanceOf: USCorePractitionerProfile
Title:       "Practitioner - Mr. Matthews - Scenario 2"
Description:  "Profile of Mr. Daniel Matthews who serves as a personal trainer at the Fit 4 Life organization."
Usage: #example
* identifier[NPI].value = "78904"
* active = true
* name
  * use = #official
  * family = "Matthews"
  * given = "Daniel"
* qualification
  * identifier
    * system = "http://registry.example.org/practitionerLicenseNumber"
    * value = "12348"
  * code = $sct#228239008 "Trainers"
  * period.start = "2000-01-01"
  * issuer = Reference(Scen2OrgFit4Life) "Fit 4 Life"



---

// File: input/fsh/ExampleScenario3.fsh

Instance: Scen3ProviderToYMCAReferral
InstanceOf: ExampleScenario
Title:       "Scenario 3 - Patient Seeks Referral for Exercise Program"
Description: "This scenario illustrates the process of a referral from a healthcare provider to a fitness service provider. It outlines the creation and monitoring of a ServiceRequest for a patient, communication of task updates between entities, and the eventual completion of the task. "
Usage: #definition
* status = #draft
* version = "4.0.1"
* name = "PatientSeeksReferralforExerciseProgram"
* insert ActorEntity(mainClinic, "Main Street Clinic",      [[Dr. Blackrock's EHR - creates referral at patient's request]])
* insert ActorEntity(YMCA,       "Cincinnati Central YMCA", [[Fitness service provider who offers exercise program]])
* insert Instance_Empty(Scen3query1, Binary, "Query for Referral & Patient for YMCA Task",      [[Search to retrieve ServiceRequest and Patient for specified Task: `GET https://mainClinic.example.org/fhir/ServiceRequest?_id=Scen3ServiceRequest&_include=ServiceRequest:patient`]])
* insert Instance_Empty(Scen3query2, Binary, "Query for EHR-issued task based on notification", [[Search to retrieve Task: `GET https://YMCA.example.org/fhir/Task?_id=Scen3TaskYMCA`]])
* insert Instance_Content(Scen3SubscriptionEhr,                       Subscription, "Subscription from EHR", [[Establishes the subscription for the EHR to monitor tasks it's created]])
* insert Instance_Empty(Scen3TaskYMCA, Task, "Task seeking FitLife to fulfill referral", [[A Task seeking fulfillment by the YMCA of the referral for an exercise program]])
* insert InstanceVersion(1, "Initial YMCA Task",   Scen3TaskYMCAV1, [[Initial version of the referral fulfillment request for YMCA with a status of 'requested']])
* insert InstanceVersion(2, "Updated YMCA Task",   Scen3TaskYMCAV2, [[Version of the referral fulfillment request for YMCA after it has been changed to 'accepted']])
* insert InstanceVersion(3, "Completed YMCA Task", Scen3TaskYMCAV3, [[Version of the referral fulfillment request for YMCA after it has been changed to 'completed' and a link to the report added]])
* insert Instance_Content(Scen3ServiceRequestYMCAResponseBundle,      Bundle,       "ServiceRequest search response for YMCA", [[Search-set Bundle returning ServiceRequest and Patient for the Task posted to the YMCA]])
* insert Instance_Content(Scen3NotificationUpdatedTaskBundle,              Bundle, "Subscription Notification that Task has updated", [[Pointer to the Task that has been updated]])
* insert Instance_Content(Scen3NotificationCompletedTaskBundle,            Bundle, "Subscription Notification that Task has completed", [[Pointer to the Task that has been updated]])
* insert Instance_Content(Scen3TaskEHRResponseBundle1,                     Bundle, "Accepted Task search response for EHR", [[Search-set Bundle returning 'accepted' Task with id based on subscription notification]])
* insert InstanceContains(Scen3TaskYMCA, 2)
* insert Instance_Content(Scen3TaskEHRResponseBundle2,                     Bundle, "Completed Task search response for EHR", [[Search-set Bundle returning 'completed' Task with id based on subscription notification]])
* insert InstanceContains(Scen3TaskYMCA, 3)
* process[+]
  * title = "Subscription Establishment"
  * preConditions = "Main Street Clinic and Cinicinnati Central YMCA have established legal and technical arrangements for interoperability"
  * postConditions = "Subscription is successfully created allowing Main Street Clinic to monitor YMCA-assigned Tasks"
  * insert ProcessCreate(1, "Create EHR-monitoring Subscription", YMCA,       mainClinic, Scen3SubscriptionEhr, ,                             [[YMCA posts Subscription to EHR to monitor Tasks. Request: `POST https://mainClinic.example.org/fhir/Subscription`  Response: `201 Created`]])
* process[+]
  * title = "A minute after creation of ServiceRequest"
  * preConditions = "EHR has created a ServiceRequest for Mr. Shevchenko"
  * postConditions = "YMCA has retrieved the ServiceRequest and the Patient, and updated the Task to 'in-progress'"
  * insert ProcessCreate(2, "Create Task on YMCA",                mainClinic, YMCA,       Scen3TaskYMCA, 1,                                   [[New Task is created directly on YMCA's server.  Request: `POST https://YMCA.example.org/fhir/Task` Response: `201 Created`]])
  * insert ProcessSearch(3, "YMCA retrieves referral",            YMCA,       mainClinic, Scen3query1, Scen3ServiceRequestYMCAResponseBundle, [[YMCA retrieves the ServiceRequest and Patient referenced by the Task.]])
  * insert ProcessCreate(4, "EHR gets referral acceptance",       YMCA,       mainClinic, Scen3NotificationUpdatedTaskBundle, ,               [[A subscription notification to the EHR is triggered when YMCA changes the prescription status to 'in-progress'.  Request: `POST https://mainClinic.example.org/mySubscriptions` Response: `200 Ok`]])
  * insert ProcessSearch(5, "EHR retrieves in-progress Task",     mainClinic, YMCA,       Scen3query2, Scen3TaskEHRResponseBundle1,           [[EHR retrieves the Task referenced by the subscription notification]])
* process[+]
  * title = "About 4 Months Later"
  * preConditions = "YMCA is actively working on the Task"
  * postConditions = "YMCA has completed the referral and Dr. Blackrock is aware of the results"
  * insert ProcessCreate(6, "EHR gets referral acceptance",       YMCA,       mainClinic, Scen3NotificationCompletedTaskBundle, ,             [[A subscription notification to the EHR is triggered when the YMCA changes the Task status to 'completed'.  Request: `POST https://mainClinic.example.org/mySubscriptions` Response: `200 Ok`]])
  * insert ProcessSearch(7, "EHR retrieves completed Task",       mainClinic, YMCA,       Scen3query2, Scen3TaskEHRResponseBundle2,           [[EHR retrieves the Task referenced by the subscription notification]])

Instance: Scen3SubscriptionEhr
InstanceOf: BackportSubscription
Title:       "Subscription - EHR Monitoring Task - Scenario 3"
Description:  "Subscription to monitor tasks based on the criteria."
Usage: #example
* status = #requested
* criteria = "Task?owner=https://registry.example.org/fhir/Organization/Scen3YMCA"
* channel
  * type = #rest-hook
  * endpoint = "https://ehr.example.com/Subscription"
  * payload = #application/fhir+json
    * extension[content].valueCode = #id-only
* contact[+]
  * system = #phone
  * value = "123-456-7890"
  * use = #work
* contact[+]
  * system = #email
  * value = "ehr3@example.com"
  * use = #work
* end = "2024-01-01T00:00:00Z"
* reason = "Monitoring tasks"


Instance: Scen3ServiceRequest
InstanceOf: PAServiceRequest
Title:       "ServiceRequest - PA Program Referral - Scenario 3"
Description:  "Service request for a physical activity program, including counseling, for patient James Shevchenko."
Usage: #example
* insert ExerciseReferral(2023-05-15, 2023-08-30, Scen3PatientShevchenko, "Nancy Johansson", Scen3RoleBlackrock, "Dr. Blackrock", $sct#390893007, [[Referral to physical activity program]])
* reasonCode[+] = $sct#40979000 "Lack of physical exercise"

Instance: Scen3TaskYMCAV1
InstanceOf: PATaskForReferralManagement
Title:       "Task - Seeking fufillment from YMCA 'requested' - Scenario 3"
Description:  "Task assigned to the YMCA organization to fulfill a physical activity service request."
Usage: #example
* insert FulfillTask(Scen3PatientShevchenko, "James Shevchenko", Scen3OrgMainClinic, "Main Street Clinic", Scen3OrgYMCA, "Cincinnati Central YMCA", Scen3ServiceRequest, requested, 2023-05-15)

Instance: Scen3TaskYMCAV2
InstanceOf: PATaskForReferralManagement
Title:       "Task - Seeking fufillment from YMCA 'in-progress' - Scenario 3"
Description:  "Task in progress assigned to the YMCA organization to fulfill a physical activity service request."
Usage: #example
* insert FulfillTask(Scen3PatientShevchenko, "James Shevchenko", Scen3OrgMainClinic, "Main Street Clinic", Scen3OrgYMCA, "Cincinnati Central YMCA", Scen3ServiceRequest, in-progress, 2023-05-15)

Instance: Scen3TaskYMCAV3
InstanceOf: PATaskForReferralManagement
Title:       "Task - Seeking fulfillment from YMCA 'completed' - Scenario 3"
Description:  "Task successfully completed by the YMCA organization."
Usage: #example
* insert FulfillTask(Scen3PatientShevchenko, "James Shevchenko", Scen3OrgMainClinic, "Main Street Clinic", Scen3OrgYMCA, "Cincinnati Central YMCA", Scen3ServiceRequest, completed, 2023-05-15)
* insert Note(2023-08-21T15:37:18-04:00, Scen3OrgYMCA, "Cincinnati Central YMCA", [[Successful completion of the exercise program.]])

Instance: Scen3ServiceRequestYMCAResponseBundle
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - ServiceRequest - Exercise program referral - Scenario 3"
Description:  "Bundle containing ServiceRequest and Patient referenced by Task received by the YMCA organization."
Usage: #example
* insert SearchBundle(1, [[https://mainClinic.example.org/fhir/ServiceRequest?_id=Scen3ServiceRequest&_include=ServiceRequest:patient]])
* insert EntryMatch(ServiceRequest, Scen3ServiceRequest)
* insert EntryInclude(Patient, Scen3PatientShevchenko)

Instance: Scen3NotificationUpdatedTaskBundle
InstanceOf: BackportSubscriptionNotificationR4
Title:       "Bundle 'Subscription Notification' - Task - accepted - Scenario 3"
Description:  "Bundle containing the notification of an updated task related to physical activity."
Usage: #example
* insert SubNotification(Scen3Parameters1, mainClinic, Scen3SubscriptionEhr)

Instance: Scen3Parameters1
InstanceOf: BackportSubscriptionStatusR4
Title:       "Parameters 'Subscription Status' - Task - accepted - Scenario 3"
Description:  "Parameters include the reference to the subscription, the type of notification, and the focus of the notification."
Usage: #example
* insert SubParameters(Scen3SubscriptionEhr, Scen3TaskYMCAV2, 10721)

Instance: Scen3NotificationCompletedTaskBundle
InstanceOf: BackportSubscriptionNotificationR4
Title:       "Bundle 'Subscription Notification' - Task - completed - Scenario 3"
Description:  "Bundle containing the notification of a completed task related to physical activity."
Usage: #example
* insert SubNotification(Scen3Parameters2, mainClinic, Scen3SubscriptionEhr)

Instance: Scen3Parameters2
InstanceOf: BackportSubscriptionStatusR4
Title:       "Parameters 'Subscription Status' - Task - completed - Scenario 3"
Description:  "Parameters include the reference to the subscription, the type of notification, and the focus of the notification."
Usage: #example
* insert SubParameters(Scen3SubscriptionEhr, Scen3TaskYMCAV3, 11676)

Instance: Scen3TaskEHRResponseBundle1
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - YMCA Task 'accepted' - Scenario 3"
Description: "Bundle instance returning accepted Task to EHR, prompted by subscription notification"
Usage: #example
* insert SearchBundle(1, [[https://YMCA.example.org/fhir/Task?_id=Scen3TaskYMCA]])
* insert EntryMatch(ServiceRequest, Scen3TaskYMCAV2)

Instance: Scen3TaskEHRResponseBundle2
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - YMCA Task 'completed' - Scenario 3"
Description: "Bundle instance returning completed Task to EHR, prompted by subscription notification"
Usage: #example
* insert SearchBundle(1, [[https://YMCA.example.org/fhir/Task?_id=Scen3TaskYMCA]])
* insert EntryMatch(ServiceRequest, Scen3TaskYMCAV3)

Instance: Scen3PatientShevchenko
InstanceOf: USCorePatientProfile
Title:       "Patient - James Shevchenko - Scenario 3"
Description:  "Patient information for James Shevchenko."
Usage: #example
* identifier
  * system = "http://hospital.example.org/patients"
  * value = "123456"
* active = true
* name
  * use = #official
  * family = "Shevchenko"
  * given = "James"
* telecom[+]
  * system = #phone
  * value = "+1-800-123-4567"
  * use = #home
* telecom[+]
  * system = #email
  * value = "mshevchenko@example.com"
  * use = #home
* gender = #male
* birthDate = "1980-01-01"
* address
  * use = #home
  * line = "123 Main St"
  * city = "Cincinnati"
  * state = "OH"
  * postalCode = "45202"
  * country = "USA"

Instance: Scen3OrgMainClinic
InstanceOf: USCoreOrganizationProfile
Title:       "Organization - Main Street Clinic - Scenario 3"
Description:  "Organization information for the Main Street Clinic."
Usage: #example
* identifier[NPI].value = "123456"
* active = true
* name = "Main Street Clinic"

Instance: Scen3OrgYMCA
InstanceOf: USCoreOrganizationProfile
Title:       "Organization - Cincinnati Central YMCA - Scenario 3"
Description:  "Organization information for the Cincinnati Central YMCA."
Usage: #example
* identifier[NPI].value = "1234567890"
* active = true
* type = $organization-type#prov "Healthcare Provider"
* name = "Cincinnati Central YMCA"
* telecom
  * system = #phone
  * value = "+1-513-1234567"
  * use = #work
* address
  * use = #work
  * line = "1105 Elm St"
  * city = "Cincinnati"
  * state = "OH"
  * postalCode = "45202"
  * country = "USA"

Instance: Scen3PractitionerBlackrock
InstanceOf: USCorePractitionerProfile
Title:       "Practitioner - Dr. Blackrock - Scenario 3"
Description:  "Practitioner information for Dr. Blackrock, a general practitioner."
Usage: #example
* identifier[NPI].value = "78910"
* active = true
* name
  * use = #official
  * family = "Blackrock"
  * given = "Doctor"
* telecom[+]
  * system = #phone
  * value = "+1-800-456-7890"
  * use = #work
* telecom[+]
  * system = #email
  * value = "drblackrock@example.com"
  * use = #work
* address
  * use = #work
  * line = "123 Main St"
  * city = "City"
  * state = "State"
  * postalCode = "12345"
  * country = "Country"
* gender = #male

Instance: Scen3RoleBlackrock
InstanceOf: USCorePractitionerRoleProfile
Title:       "PractitionerRole - Dr. Blackrock - Scenario 3"
Description:  "Practitioner role of Dr. Blackrock as a general practitioner at the Main Street Clinic."
Usage: #example
* active = true
* practitioner = Reference(Scen3PractitionerBlackrock) "Dr. Blackrock"
* organization = Reference(Scen3OrgMainClinic) "Main Street Clinic"
* code = $practitioner-role#doctor
  * text = "General Practitioner"

---

// File: input/fsh/ExampleScenario4.fsh

Instance: Scen4PhysicalActivityPlan
InstanceOf: ExampleScenario
Title:       "Scenario 4 - Patient Works with Personal Trainer"
Description: "This scenario outlines a patient-provider interaction for managing a physical activity plan. It involves creating and updating care plans and goals, posting patient activity observations, and asking patient to fill surveys. This adaptive care approach allows providers to modify plans and set new goals based on the patient's progress."
Usage: #definition
* status = #draft
* version = "4.0.1"
* name = "PatientWorksWithPersonalTrainer"
* insert ActorEntity(patient-app,  "Patient Application",  [[A phone or web-based app used by Ms. Scarborough to track her physical activity]])
* insert ActorEntity(provider-app, "Provider Application", [[A phone or web-based app used by Ms. Rocha to manage her clients' data]])
* insert Instance_Empty(Scen4query1,   Binary,   "Query for patient physical activity care plans",       [[Query for CarePlans for a patient: `GET https://ufit.example.org/fhir/CarePlan?patient=Patient/Scen4PatientScarborough&status=active,on-hold&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity`]])
* insert Instance_Empty(Scen4query2,   Binary,   "Query for patient physical activity goals",            [[Query for Goals for a patient: `GET https://ufit.example.org/fhir/Goal?patient=Patient/Scen4PatientScarborough&status=active,on-hold,completed&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity`]])
* insert Instance_Empty(Scen4query3,   Binary,   "Query for patient uncomplete tasks",                   [[Query for uncomplete patient Tasks for a patient: `GET https://ufit.example.org/fhir/Task?owner=Patient/Scen4PatientScarborough&status=active,on-hold`]])
* insert Instance_Empty(Scen4CarePlan, CarePlan, "Patient physical activity care plan",                  [[CarePlan describing proposed exercise regime]])
* insert InstanceVersion(1, "Initial CarePlan", Scen4CarePlanV1, [[Planning for weight lifting, 30 minutes/day]])
* insert InstanceVersion(2, "Updated CarePlan", Scen4CarePlanV2, [[Planning for weight lifting, 15 + 30 minutes/day]])
* insert Instance_Empty(Scen4Goal1,             Goal,     "Physical Activity weekly target",             [[Goal indicating target number of minutes/day and days/week weight-lifting]])
* insert InstanceVersion(1, "Initial goal",      Scen4Goal1V1,           [[Initial value of 30 mins/day]])
* insert InstanceVersion(2, "Initial goal",      Scen4Goal1V2,           [[30 mins/day-completed]])
* insert Instance_Empty(Scen4Goal2,             Goal,    "Physical Activity weekly target",              [[Increased goal indicating target number of minutes/day and days/week weight-lifting]])
* insert InstanceVersion(1, "Initial goal",      Scen4Goal2V1,           [[Initial value of 45 mins/day]])
* insert InstanceVersion(2, "Initial goal",      Scen4Goal2V2,           [[Sustaining 45 mins/day]])
* insert Instance_Content(Scen4CarePlanBundle1,               Bundle,         "Search-set of Care Plans",                 [[Initial search results on Care plan for the patient]])
* insert InstanceContains(Scen4CarePlan, 1)
* insert Instance_Content(Scen4CarePlanBundle2,               Bundle,         "Search-set of Care Plans#2",               [[New search results on Care plan for the patient]])
* insert InstanceContains(Scen4CarePlan, 2)
* insert Instance_Content(Scen4GoalBundle1,                   Bundle,         "Search-set of Goals",                      [[Initial search results on Goal for the patient]])
* insert InstanceContains(Scen4Goal1, 1)
* insert Instance_Content(Scen4GoalBundle2,                   Bundle,         "Search-set of Goals",                      [[Initial search results on Goal for the patient]])
* insert InstanceContains(Scen4Goal1, 2)
* insert InstanceContains(Scen4Goal2, 1)
* insert Instance_Content(Scen4TaskBundle1,                   Bundle,         "Search-set of active patient Tasks#1",     [[Initial search results of uncomplete patient Tasks.  (Triggered by notification from trainer's app.)]])
* insert InstanceContains(Scen4TaskFillSurvey, 1)
* insert Instance_Content(Scen4TaskBundle2,                   Bundle,         "Search-set of active patient Tasks#2",     [[Second search results of uncomplete patient Tasks.  (Triggered by notification from trainer's app.)]])
* insert InstanceContains(Scen4TaskReviewVideo, 1)
* insert Instance_Content(Scen4TaskBundle3,                   Bundle,         "Search-set of active patient Tasks#3",     [[Third search results of uncomplete patient Tasks.  (Triggered by notification from trainer's app.)]])
* insert InstanceContains(Scen4TaskFillSurvey2, 1)
* insert Instance_Content(Scen4ObservationActivityType,       Observation,    "Example physical activity type record",    [[A sample record indicating the type of physical activity performed by the patient]])
* insert Instance_Content(Scen4ObservationEVSMinutesPerDay,   Observation,    "Initial minutes/day of cardio",            [[A sample record of the minutes per day of cardio done by the patient]])
* insert Instance_Content(Scen4ObservationPeakDailyHeartRate, Observation,    "Example peak daily heart rate",            [[A sample record of daily calories captured by the patient]])
* insert Instance_Content(Scen4ObservationEVSMinutesPerDay2,  Observation,    "Updated minutes/day of cardio",            [[A second sample record of the minutes per day of cardio done by the patient]])
* insert Instance_Content(Scen4ObservationDailySteps,         Observation,    "Example daily step count",                 [[A sample record of daily steps captured by the patient]])
* insert Instance_Content(Scen4ObservationCaloriesPerDay,     Observation,    "Example daily calories",                   [[A sample record of daily calories captured by the patient]])
* insert Instance_Content(Scen4ObservationEVSMinutesPerDay3,  Observation,    "Final minutes/day of cardio",              [[A third sample record of the minutes per day of cardio done by the patient]])
* insert Instance_Empty(Scen4TaskFillSurvey,    Task,   "Request for patient to fill out survey",        [[Patient Task requesting patient to fill out a satisfaction survey]])
* insert InstanceVersion(1, "Initial request",   Scen4TaskFillSurveyV1,  [[Initial request to fill out survey]])
* insert InstanceVersion(2, "Completed request", Scen4TaskFillSurveyV2,  [[Survey has been filled out and response has been attached to Task]])
* insert Instance_Empty(Scen4TaskFillSurvey2,   Task,   "Second request for patient to fill out survey", [[New patient Task requesting patient to fill out a satisfaction survey]])
* insert InstanceVersion(1, "Initial request",   Scen4TaskFillSurvey2V1, [[Initial request to fill out survey]])
* insert InstanceVersion(2, "Completed request", Scen4TaskFillSurvey2V2, [[Survey has been filled out and response has been attached to Task]])
* insert Instance_Empty(Scen4TaskReviewVideo,   Task,   "Request for patient to view video",             [[New patient Task requesting patient to fill out a satisfaction survey]])
* insert InstanceVersion(1, "Initial request",   Scen4TaskReviewVideoV1, [[Initial request to view a video]])
* insert InstanceVersion(2, "Completed request", Scen4TaskReviewVideoV2, [[Updated request indicating video has been viewed]])
* process[+]
  * title = "Physical Activity Plan Establishment and Observations"
  * preConditions = "CarePlan and initial Goal are created, Patient and Provider apps are operational"
  * postConditions = "CarePlan and Goal successfully retrieved"
  * insert ProcessSearch(1,  "Query CarePlan",            patient-app, provider-app, Scen4query1, Scen4CarePlanBundle1,    [[Patient app queries exercise CarePlan describing proposed exercise regime.]])
  * insert ProcessSearch(2,  "Query Goals",               patient-app, provider-app, Scen4query2, Scen4GoalBundle1,        [[Patient app queries Goals.]])
* process[+]
  * title = "Post Observations, CarePlan adjustment and new Goals"
  * preConditions = "Initial care plan and goal retrieved"
  * postConditions = "Care plan followed, various observations are posted by the patient and initial goal accomplished (along with filling survey). Care plan is adjusted, new goal is set, and observations are posted"
  * insert ProcessCreate(3,  "Post activity type",         patient-app, provider-app, Scen4ObservationActivityType, ,       [[Patient app posts an observation indicating type of physical activity. `POST https://ufit.example.org/fhir/Observation`]])
  * insert ProcessCreate(4,  "Post min/day",               patient-app, provider-app, Scen4ObservationEVSMinutesPerDay, ,   [[Patient app posts an observation indicating number of minutes/day of moderate to vigorous physical activity. `POST https://ufit.example.org/fhir/Observation`]])
    * step[=].pause = true
  * insert ProcessCreate(5,  "Post peak daily heart rate", patient-app, provider-app, Scen4ObservationPeakDailyHeartRate, , [[Patient app posts an observation indicating their peak daily heart rate. `POST https://ufit.example.org/fhir/Observation`]])
  * insert ProcessCreate(6,  "Post min/day #2",            patient-app, provider-app, Scen4ObservationEVSMinutesPerDay2, ,  [[Patient app posts another observation indicating number of minutes/day of moderate to vigorous physical activity. `POST https://ufit.example.org/fhir/Observation`]])
    * step[=].pause = true
  * insert ProcessCreate(7,  "Post daily steps",           patient-app, provider-app, Scen4ObservationDailySteps, ,         [[Patient app posts an observation indicating their peak daily heart rate. `POST https://ufit.example.org/fhir/Observation`]])
  * insert ProcessCreate(8,  "Post peak daily calories",   patient-app, provider-app, Scen4ObservationCaloriesPerDay, ,     [[Patient app posts an observation indicating their peak daily heart rate. `POST https://ufit.example.org/fhir/Observation`]])
    * step[=].pause = true
  * insert ProcessUpdate(9,  "Update goal",                patient-app, provider-app, Scen4Goal1, 2,                        [[Patient updates their initial goal to indicate it's achieved. `PUT https://ufit.example.org/fhir/Observation/Scen4Goal1`]])
    * step[=].pause = true
  * insert ProcessSearch(10, "Retrieve patient tasks#1",   patient-app, provider-app, Scen4query3, Scen4TaskBundle1,        [[Based on an SMS prompt from an 'internal' subscription, the patient app checks for new tasks assigned by their trainer and receives request to fill out a survey.]])
    * step[=].pause = true
  * insert ProcessUpdate(11, "Update task#1",              patient-app, provider-app, Scen4TaskFillSurvey, 2,               [[Patient updates the task with the completed survey. `PUT https://ufit.example.org/fhir/Task/Scen4TaskFillSurvey`]])
    * step[=].pause = true
  * insert ProcessSearch(12, "Retrieve patient tasks#2",   patient-app, provider-app, Scen4query3, Scen4TaskBundle2,        [[Based on an SMS prompt from an 'internal' subscription, the patient app checks for new tasks assigned by their trainer and receives request to reivew a video.]])
    * step[=].pause = true
  * insert ProcessUpdate(13, "Update task#2",              patient-app, provider-app, Scen4TaskReviewVideo, 2,              [[Patient updates the task indicating they've watched the video. `PUT https://ufit.example.org/fhir/Task/Scen4TaskReviewVideo`]])
    * step[=].pause = true
  * insert ProcessSearch(14, "Query CarePlan#2",           patient-app, provider-app, Scen4query1, Scen4CarePlanBundle2,    [[After a phone call, patient uses app to retrieve updated CarePlan describing revised exercise regime.]])
  * insert ProcessSearch(15, "Query Goals#2",              patient-app, provider-app, Scen4query2, Scen4GoalBundle2,        [[After a phone call, patient uses app to retrieve updated Goals.]])
    * step[=].pause = true
  * insert ProcessCreate(16, "Post min/day #3",            patient-app, provider-app, Scen4ObservationEVSMinutesPerDay3, ,  [[Patient app posts a third observation indicating number of minutes/day of moderate to vigorous physical activity. `POST https://ufit.example.org/fhir/Observation`]])
    * step[=].pause = true
  * insert ProcessUpdate(17,  "Update goal",               patient-app, provider-app, Scen4Goal2, 2,                        [[Patient updates their second goal to indicate it's achieved, but they want to stay where they are. `PUT https://ufit.example.org/fhir/Observation/Scen4Goal2`]])
    * step[=].pause = true
  * insert ProcessSearch(18, "Retrieve patient tasks#3",   patient-app, provider-app, Scen4query3, Scen4TaskBundle3,        [[Based on an SMS prompt from an 'internal' subscription, the patient app checks for new tasks assigned by their trainer and receives request to complete a second survey.]])
    * step[=].pause = true
  * insert ProcessUpdate(19, "Update task#3",              patient-app, provider-app, Scen4TaskFillSurvey2, 2,              [[Patient updates the task indicating it's complete with the new completed survey. `PUT https://ufit.example.org/fhir/Task/Scen4TaskFillSurvey2`]])


Instance: Scen4CarePlanV1
InstanceOf: PACarePlan
Title:       "CarePlan - initial version - Scenario 4"
Description:  "A care plan for physical activity for patient Scarborough."
Usage: #example
* insert CarePlan(2023-06-24, 2023-12-24, Scen4PatientScarborough, "Ms. Scarborough", Scen4Practitioner, "Ms. Rocha", [[Ms. Scarborough will use her home weights and alternate between lower-body and upper-body on week-days each morning for 30 minutes after waking.]])
* goal[+] = Reference(Scen4Goal1V1)

Instance: Scen4CarePlanV2
InstanceOf: PACarePlan
Title:       "CarePlan - updated version - Scenario 4"
Description:  "An updated care plan for physical activity for patient Scarborough."
Usage: #example
* insert CarePlan(2023-06-24, 2024-03-30, Scen4PatientScarborough, "Ms. Scarborough", Scen4Practitioner, "Ms. Rocha", [[Ms. Scarborough will use her home weights and alternate between lower-body and upper-body on week-days each morning for 15 minutes after waking and 30 minutes before dinner.]])
* goal[+] = Reference(Scen4Goal1V2)
* goal[+] = Reference(Scen4Goal2V1)


Instance: Scen4CarePlanBundle1
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - CarePlan - Initial care plan - Scenario 4"
Description:  "Results of a search of all active or on-hold physical-activity related care plans for the patient.  In this case, there's only one, but in theory there could be more than one."
Usage: #example
* insert SearchBundle(1, [[https://ufit.example.org/fhir/CarePlan?patient=Patient/Scen4PatientScarborough&status=active,on-hold&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity]])
* insert EntryMatch(CarePlan, Scen4CarePlanV1)

Instance: Scen4CarePlanBundle2
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - CarePlan - Updated care plan - Scenario 4"
Description:  "Results of a second search of all active or on-hold physical-activity related care plans for the patient.  In this case, there's only one, but in theory there could be more than one."
Usage: #example
* insert SearchBundle(1, [[https://ufit.example.org/fhir/CarePlan?patient=Patient/Scen4PatientScarborough&status=active,on-hold&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity]])
* insert EntryMatch(CarePlan, Scen4CarePlanV2)

Instance: Scen4Goal1V1
InstanceOf: PAGoal
Title:       "Goal - Lifting 'active' - Scenario 4"
Description:  "A goal to lift for 30 minutes a day, 5 days a week, for patient Scarborough."
Usage: #example
* insert Goal(Scen4PatientScarborough, "Jessica Scarborough", in-progress, [[Lifting 30 minutes a day, 5 days a week.]])

Instance: Scen4Goal1V2
InstanceOf: PAGoal
Title:       "Goal - Lifting 'achieved' - Scenario 4"
Description:  "An achieved goal of lifting for 30 minutes a day, 5 days a week, for patient Scarborough."
Usage: #example
* insert Goal(Scen4PatientScarborough, "Jessica Scarborough", achieved, [[Lifting 30 minutes a day, 5 days a week.]])

Instance: Scen4Goal2V1
InstanceOf: PAGoal
Title:       "Goal - Lifting2 'active' - Scenario 4"
Description:  "A goal to lift for 45 minutes a day, 5 days a week, for patient Scarborough."
Usage: #example
* insert Goal(Scen4PatientScarborough, "Jessica Scarborough", in-progress, [[Lifting 45 minutes a day, 5 days a week.]])

Instance: Scen4Goal2V2
InstanceOf: PAGoal
Title:       "Goal - Lifting2 'sustaining' - Scenario 4"
Description:  "A sustaining goal of lifting for 45 minutes a day, 5 days a week, for patient Scarborough."
Usage: #example
* insert Goal(Scen4PatientScarborough, "Jessica Scarborough", sustaining, [[Lifting 45 minutes a day, 5 days a week.]])

Instance: Scen4GoalBundle1
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Goal - Initial goal(s) - Scenario 4"
Description:  "Results of a search of all active, on-hold and completed physical-activity related goals for the patient."
Usage: #example
* insert SearchBundle(1, [[https://ufit.example.org/fhir/Goal?patient=Patient/Scen4PatientScarborough&status=active,on-hold,completed&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity]])
* insert EntryMatch(Goal, Scen4Goal1V1)

Instance: Scen4GoalBundle2
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Goal - Updated goal(s) - Scenario 4"
Description:  "Results of a second search of all active, on-hold and completed physical-activity related goals for the patient."
Usage: #example
* insert SearchBundle(2, [[https://ufit.example.org/fhir/Goal?patient=Patient/Scen4PatientScarborough&status=active,on-hold,completed&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity]])
* insert EntryMatch(Goal, Scen4Goal1V2)
* insert EntryMatch(Goal, Scen4Goal2V1)

Instance: Scen4ObservationActivityType
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Activity Type - Scenario 4"
Description:  "Observation of the exercise activity performed by patient Scarborough."
Usage: #example
* insert ActivityType(Scen4PatientScarborough, "Jessica Scarborough", Scen4PatientScarborough, "Jessica Scarborough", 2023-07-15T12:00:00-07:00, LA11839-0, "Weights")

Instance: Scen4ObservationEVSMinutesPerDay
InstanceOf: PAObservationEVSMinutesPerDay
Title:       "Observation - Minutes/Day - Scenario 4"
Description:  "An observation of the number of minutes per day engaged in EVS activity by patient Scarborough."
Usage: #example
* insert MinPerDay(Scen4PatientScarborough, "Jessica Scarborough", Scen4PatientScarborough, "Jessica Scarborough", 2023-07-15T12:00:00-07:00, 20)

Instance: Scen4ObservationPeakDailyHeartRate
InstanceOf: PAObservationTimeMeasure
Title:       "Observation - Peak Daily Heart Rate - Scenario 4"
Description:  "An observation of the peak daily heart rate of patient Scarborough."
Usage: #example
* insert PeakHeartRate(Scen4PatientScarborough, "Jessica Scarborough", Scen4PatientScarborough, "Jessica Scarborough", 2023-08-03T12:00:00-07:00, 179)

Instance: Scen4ObservationEVSMinutesPerDay2
InstanceOf: PAObservationEVSMinutesPerDay
Title:       "Observation - Minutes/Day#2 - Scenario 4"
Description:  "An observation of the number of minutes per day engaged in physical activity."
Usage: #example
* insert MinPerDay(Scen4PatientScarborough, "Jessica Scarborough", Scen4PatientScarborough, "Jessica Scarborough", 2023-08-03T12:00:00-07:00, 30)

Instance: Scen4ObservationDailySteps
InstanceOf: PAObservationTimeMeasure
Title:       "Observation - Daily Steps - Scenario 4"
Description:  "An observation of the number of steps taken per day by patient Scarborough."
Usage: #example
* insert DailySteps(Scen4PatientScarborough, "Jessica Scarborough", Scen4PatientScarborough, "Jessica Scarborough", 2023-09-11T12:00:00-07:00, 3000)

Instance: Scen4ObservationCaloriesPerDay
InstanceOf: PAObservationTimeMeasure
Title:       "Observation - Calories/Day - Scenario 4"
Description:  "An observation of the number of calories burned per day by patient Scarborough."
Usage: #example
* insert DailyCalories(Scen4PatientScarborough, "Jessica Scarborough", Scen4PatientScarborough, "Jessica Scarborough", 2023-09-11T12:00:00-07:00, 629)

Instance: Scen4ObservationEVSMinutesPerDay3
InstanceOf: PAObservationEVSMinutesPerDay
Title:       "Observation - Minutes/Day#3 - Scenario 4"
Description:  "An observation of the number of minutes per day engaged in physical activity."
Usage: #example
* insert MinPerDay(Scen4PatientScarborough, "Jessica Scarborough", Scen4PatientScarborough, "Jessica Scarborough", 2023-11-30T11:00:00-07:00, 45)

Instance: Scen4TaskFillSurveyV1
InstanceOf: SDOHCCTaskForPatient
Title:       "Task - fill Questionnaire#1 'requested' - Scenario 4"
Description:  "A task to fill out a survey indicating satisfaction with the physical activity plan for patient Scarborough."
Usage: #example
* insert QuestionnaireTask(Scen4PatientScarborough, "Jessica Scarborough", Scen4Role, "Ms. Rocha", routine, 2023-10-14T09:00:00-07:00, requested, https://example.org/fhir/Questionnaire/satisfaction|2.1, [[Fill out a survey indicating satisfaction with plan]])

Instance: Scen4TaskFillSurveyV2
InstanceOf: SDOHCCTaskForPatient
Title:       "Task - fill Questionnaire#1 'completed' - Scenario 4"
Description:  "A completed task of filling out a survey indicating discomfort with shoulder."
Usage: #example
* insert QuestionnaireTask(Scen4PatientScarborough, "Jessica Scarborough", Scen4Role, "Ms. Rocha", routine, 2023-10-14T09:00:00-07:00, completed, https://example.org/fhir/Questionnaire/satisfaction|2.1, [[Fill out a survey indicating satisfaction with plan]])
* output[QuestionnaireResponse].valueReference = Reference(Scen4QuestionnaireResponse)

Instance: Scen4TaskReviewVideoV1
InstanceOf: SDOHCCTaskForPatient
Title:       "Task - view video 'requested' - Scenario 4"
Description:  "A task for patient Scarborough to review an exercise video."
Usage: #example
* insert ReviewTask(Scen4PatientScarborough, "Jessica Scarborough", Scen4Role, "Ms. Rocha", routine, 2023-10-17T09:00:00-07:00, requested, Scen4Video, [[Please review this arm-curl video.  Pay particular attention to the 3:00 - 3:35 portion.  If you adjust your technique accordingly, it may help with your shoulder pain.]])
* contained[+] = Scen4Video

Instance: Scen4Video
InstanceOf: DocumentReference
Title:       "DocumentReference - Video to watch - Scenario 4"
Description:  "A video the patient is asked to view."
Usage: #inline
* insert DocRefVideo(http://example.org/videos/123.mpg)

Instance: Scen4TaskReviewVideoV2
InstanceOf: SDOHCCTaskForPatient
Title:       "Task - view video 'completed' - Scenario 4"
Description:  "A completed task of patient Scarborough reviewing an exercise video."
Usage: #example
* insert ReviewTask(Scen4PatientScarborough, "Jessica Scarborough", Scen4Role, "Ms. Rocha", routine, 2023-10-17T09:00:00-07:00, completed, Scen4Video, [[Please review this arm-curl video.  Pay particular attention to the 3:00 - 3:35 portion.  If you adjust your technique accordingly, it may help with your shoulder pain.]])
* contained[+] = Scen4Video
* output[GeneralInformationResponse].valueMarkdown = "Ok, that makes sense.  Thanks."

Instance: Scen4TaskFillSurvey2V1
InstanceOf: SDOHCCTaskForPatient
Title:       "Task - fill Questionnaire#2 'requested' - Scenario 4"
Description:  "A task to fill out a survey indicating satisfaction with the updated physical activity plan."
Usage: #example
* insert QuestionnaireTask(Scen4PatientScarborough, "Jessica Scarborough", Scen4Role, "Ms. Rocha", routine, 2024-02-20T09:00:00-07:00, requested, https://example.org/fhir/Questionnaire/satisfaction|2.1, [[Fill out a survey indicating satisfaction with plan]])

Instance: Scen4TaskFillSurvey2V2
InstanceOf: SDOHCCTaskForPatient
Title:       "Task - fill Questionnaire#2 'completed' - Scenario 4"
Description:  "A completed task of filling out a survey indicating satisfaction with the updated physical activity plan."
Usage: #example
* insert QuestionnaireTask(Scen4PatientScarborough, "Jessica Scarborough", Scen4Role, "Ms. Rocha", routine, 2024-02-20T09:00:00-07:00, completed, https://example.org/fhir/Questionnaire/satisfaction|2.1, [[Fill out a survey indicating satisfaction with plan]])
* output[QuestionnaireResponse].valueReference = Reference(Scen4QuestionnaireResponse2)

Instance: Scen4TaskBundle1
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Task - Initial task(s) - Scenario 4"
Description:  "Results of a search of all active and on-hold tasks assigned to the patient."
Usage: #example
* insert SearchBundle(1, [[https://ufit.example.org/fhir/Task?owner=Patient/Scen4PatientScarborough&status=active,on-hold]])
* insert EntryMatch(Task, Scen4TaskFillSurveyV1)

Instance: Scen4TaskBundle2
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Task - Second task(s) - Scenario 4"
Description:  "Results of a second search of all active and on-hold tasks assigned to the patient."
Usage: #example
* insert SearchBundle(1, [[https://ufit.example.org/fhir/Task?owner=Patient/Scen4PatientScarborough&status=active,on-hold]])
* insert EntryMatch(Task, Scen4TaskReviewVideoV1)

Instance: Scen4TaskBundle3
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Task - Third task(s) - Scenario 4"
Description:  "Results of a third search of all active and on-hold tasks assigned to the patient."
Usage: #example
* insert SearchBundle(1, [[https://ufit.example.org/fhir/Task?owner=Patient/Scen4PatientScarborough&status=active,on-hold]])
* insert EntryMatch(Task, Scen4TaskFillSurvey2V1)

Instance: Scen4Questionnaire
InstanceOf: SDCBaseQuestionnaire
Title:       "Questionnaire - Exercise Satisfaction - Scenario 4"
Description:  "A questionnaire to assess the patient's satisfaction with the exercise plan, including questions about satisfaction and discomfort.."
Usage: #example
* insert Questionnaire(https://example.org/fhir/Questionnaire/satisfaction, 2.1)
* insert Question(1, boolean, [[Are you satisfied with your current exercise plan?]])
* insert Question(2, boolean, [[Did you experience any discomfort with an exercise?]])
* insert Question(3, string,  [[If yes, which exercise?]])

Instance: Scen4QuestionnaireResponse
InstanceOf: SDCQuestionnaireResponse
Title:       "QuestionnaireResponse - Exercise Satisfaction - Scenario 4"
Description:  "A completed questionnaire response indicating the patient's satisfaction with the exercise plan, mentioning experiencing discomfort during shoulder exercises."
Usage: #example
* insert QuestionnaireResponse(Scen4PatientScarborough, "Ms. Scarborough", 2023-10-16, https://example.org/fhir/Questionnaire/satisfaction|2.1)
* basedOn = Reference(Scen4CarePlanV1)
* insert BooleanAnswer(1, true,                [[Are you satisfied with your current exercise plan?]])
* insert BooleanAnswer(2, true,                [[Did you experience any discomfort with an exercise?]])
* insert StringAnswer( 3, "Shoulder exercise", [[If yes, which exercise?]])

Instance: Scen4QuestionnaireResponse2
InstanceOf: SDCQuestionnaireResponse
Title:       "QuestionnaireResponse - Exercise Satisfaction2 - Scenario 4"
Description:  "A completed questionnaire response indicating the patient's satisfaction with the exercise plan, mentioning no discomfort during exercises."
Usage: #example
* insert QuestionnaireResponse(Scen4PatientScarborough, "Ms. Scarborough", 2024-02-21, https://example.org/fhir/Questionnaire/satisfaction|2.1)
* basedOn = Reference(Scen4CarePlanV2)
* insert BooleanAnswer(1, true,                [[Are you satisfied with your current exercise plan?]])
* insert BooleanAnswer(2, true,                [[Did you experience any discomfort with an exercise?]])

Instance: Scen4PatientScarborough
InstanceOf: USCorePatientProfile
Title:       "Patient - Ms. Scarborough - Scenario 4"
Description:  "Patient information for Jessica Scarborough."
Usage: #example
* identifier
  * system = "http://ufit.example.com/fhir/NamingSystem/client-id"
  * value = "1111111"
* name
  * family = "Scarborough"
  * given = "Jessica"
* gender = #female
* birthDate = "1991-05-17"

Instance: Scen4Practitioner
InstanceOf: USCorePractitionerProfile
Title:       "Practitioner - Ms. Rocha - Scenario 4"
Description:  "Practitioner information for Kim Rocha, a healthcare professional involved in patient care."
Usage: #example
* identifier[NPI].value.extension[$dar].valueCode = #not-applicable
* name
  * family = "Rocha"
  * given = "Kim"

Instance: Scen4Role
InstanceOf: USCorePractitionerRoleProfile
Title:       "PractitionerRole - Ms. Rocha - Scenario 4"
Description:  "Practitioner information for Kim Rocha - no assigned organization."
Usage: #example
* practitioner = Reference(Scen4Practitioner)
* organization
  * extension[$dar].valueCode = #not-applicable
  * display = "Independent Practitioner"

---

// File: input/fsh/ExampleScenario5.fsh

Instance: Scen5ActivityAndGlucoseObservations
InstanceOf: ExampleScenario
Title:       "Scenario 5 - Patient-Provider Communication on Activity and Blood Glucose Observations"
Description: "Scenario illustrating creation and retrieval of a patient's physical activity and blood glucose observations."
Usage: #definition
* version = "4.0.1"
* name = "PatientProviderCommunicationonActivityandBloodGlucoseObservations"
* status = #draft
* experimental = true
* insert ActorEntity(patient-app, "Rosalie's phone app", [[An app on Rosalie's phone with access to Nadia's record]])
* insert ActorEntity(flores-ehr,  "Mercy Clinic",        [[System that manages data for Dr. Flores's clinic]])
* insert ActorEntity(shea-ehr,    "Mrs. O’Shea's app",   [[System that manages data for Mrs. O'She's practice]])
* insert Instance_Empty(Scen5query1,                       Binary,      "Query for PA and blood glucose observations", [[Query for observations that Mrs. O'Shea has access to related to Rosalie: `GET https://mercy.example.org/fhir/Observation?patient=Patient/Scen5PatientRosalie&status=completed,amended,corrected&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity,http%3A//terminology.hl7.org/CodeSystem/observation-category|laboratory`]])
* insert Instance_Content(Scen5ObsBloodGlucose,            Observation, "Blood Glucose Observation for Rosalie",       [[Sample blood-glucose level captured for Rosalie by her mother.  (In practice there would be many.)]])
* insert Instance_Content(Scen5ObsActivityGroup,           Observation, "Activity Panel Observation for Rosalie",      [[Sample collection of information about one of Rosalie's exercise activities as recorded by her mother.  (In practice there would be many.)]])
* insert Instance_Content(Scen5ObsActivityType,            Observation, "Activity Type Observation for Rosalie",       [[Sample record of what type of exercise activity Rosalie was doing as recorded by her mother.  (In practice there would be many.)]])
* insert Instance_Content(Scen5ObsActivityDuration,        Observation, "Activity Duration Observation for Rosalie",   [[Sample record of the duration of exercise activity Rosalie was doing as recorded by her mother.  (In practice there would be many.)]])
* insert Instance_Content(Scen5ObsActivityModerate,        Observation, "Moderate Duation Observation for Rosalie",    [[Sample record of the duration of moderate exercise activity Rosalie was doing as recorded by her mother.  (In practice there would be many.)]])
* insert Instance_Content(Scen5ObsActivityVigorous,        Observation, "Vigorous Duration Observation for Rosalie",   [[Sample record of the duration of vigorous exercise activity Rosalie was doing as recorded by her mother.  (In practice there would be many.)]])
* insert Instance_Content(Scen5ObsActivityMeanHR,          Observation, "Mean Heart Rate Observation for Rosalie",     [[Sample record of Rosalie's average heart rate during her exercise activity as recorded by her mother.  (In practice there would be many.)]])
* insert Instance_Content(Scen5ObservationsResponseBundle, Bundle,      "Observations retrieved by Mrs. O'Shea",       [[Search-set Bundle returning Rosalie's observations (that Mrs. O'Shea has access to)]])
* insert InstanceContains(Scen5ObsBloodGlucose, )
* insert InstanceContains(Scen5ObsActivityGroup, )
* insert InstanceContains(Scen5ObsActivityType, )
* insert InstanceContains(Scen5ObsActivityDuration, )
* insert InstanceContains(Scen5ObsActivityModerate, )
* insert InstanceContains(Scen5ObsActivityVigorous, )
* insert InstanceContains(Scen5ObsActivityMeanHR, )
* process[+]
  * title = "Observation Creation"
  * description = "Nadia records observations for Rosalie.  While only a limited number of records are captured here, in practice there would likely be multiple glucose readings and activity entries per day every day."
  * preConditions = "Nadia has credentials on Dr. Flores's EHR system."
  * postConditions = "Dr. Flores's system has detailed records of Rosalie's blood glucose readings and exercise levels."
  * insert ProcessCreate(1, "Record blood glucose",     patient-app, flores-ehr, Scen5ObsBloodGlucose, ,     [[Nadia's app transmits Rosalie's blood glucose measurement to Dr. Flores's EHR.  (NOTE: This type of data is outside the scope of this IG, but is covered by US Core.) Request: `POST https://mercy.example.org/fhir/Observation`  Response: `201 Created`]])
  * insert ProcessCreate(2, "Record activity group",    patient-app, flores-ehr, Scen5ObsActivityGroup, ,    [[Nadia's app transmits a grouper describing Rosalie's exercise to Dr. Flores's EHR. Request: `POST https://mercy.example.org/fhir/Observation`  Response: `201 Created`]])
  * insert ProcessCreate(3, "Record activity type",     patient-app, flores-ehr, Scen5ObsActivityType, ,     [[Nadia's app transmits Rosalie's type of exercise to Dr. Flores's EHR. Request: `POST https://mercy.example.org/fhir/Observation`  Response: `201 Created`]])
  * insert ProcessCreate(4, "Record activity duration", patient-app, flores-ehr, Scen5ObsActivityDuration, , [[Nadia's app transmits Rosalie's duration of exercise to Dr. Flores's EHR. Request: `POST https://mercy.example.org/fhir/Observation`  Response: `201 Created`]])
  * insert ProcessCreate(5, "Record moderate activity", patient-app, flores-ehr, Scen5ObsActivityModerate, , [[Nadia's app transmits Rosalie's duration of moderate exercise to Dr. Flores's EHR. Request: `POST https://mercy.example.org/fhir/Observation`  Response: `201 Created`]])
  * insert ProcessCreate(6, "Record vigorous activity", patient-app, flores-ehr, Scen5ObsActivityVigorous, , [[Nadia's app transmits Rosalie's duration of vigorous exercise to Dr. Flores's EHR. Request: `POST https://mercy.example.org/fhir/Observation`  Response: `201 Created`]])
  * insert ProcessCreate(7, "Record mean heart rate",   patient-app, flores-ehr, Scen5ObsActivityMeanHR, ,   [[Nadia's app transmits Rosalie's average heart rate during exercise to Dr. Flores's EHR. Request: `POST https://mercy.example.org/fhir/Observation`  Response: `201 Created`]])
* process[+]
  * title = "Observation Retrieval"
  * description = "Mrs. O'Shea uses her app retrieves the observations created by Nadia from Dr. Flores's EHR."
  * preConditions = "Mrs. O'Shea has permision to retrieve certain types observations for Rosalie.  (There would generally need to be a consent on file with Dr. Flores's clinic.)"
  * postConditions = "Mrs. O'Shea can see the observations about Rosalie."
  * insert ProcessSearch(8, "Retrieve Rosalie's observations", shea-ehr, flores-ehr, Scen5query1, Scen5ObservationsResponseBundle, [[Search to retrieve observations about Rosalie that Mrs. O'Shea has a right to see.]])


Instance: Scen5ObsBloodGlucose
InstanceOf: USCoreLaboratoryResultObservationProfile
Title:       "Observation - US Core Blood Glucose - Scenario 5"
Description:  "Sample blood glucose reading captured by a glucometer andObservation of the exercise activity performed by patient Rosalie."
Usage: #example
* insert Observation(Scen5PatientRosalie, "Rosalie Belyaev", Scen5RelatedPersonNadia, "Nadia Belyaev", 2022-07-18T16:32:45-08:00)
* code = $loinc#41653-7 "Glucose [Mass/volume] in Capillary blood by Glucometer"
* valueQuantity = 61 'mg/dL' "mg/dL"

Instance: Scen5ObsActivityGroup
InstanceOf: PAObservationActivityGroup
Title:       "Observation - Activity Group - Scenario 5"
Description:  "A sample observation reporting one of Rosalie's soccer games"
Usage: #example
* insert ActivityGroup(Scen5PatientRosalie, "Rosalie Belyaev", Scen5RelatedPersonNadia, "Nadia Belyaev", 2022-07-18T16:31:00-08:00)
* insert HasMember(Scen5ObsActivityType)
* insert HasMember(Scen5ObsActivityDuration)
* insert HasMember(Scen5ObsActivityModerate)
* insert HasMember(Scen5ObsActivityVigorous)
* insert HasMember(Scen5ObsActivityMeanHR)
* insert Note(2022-07-18T16:31:00-08:00, Scen5RelatedPersonNadia, "Nadia Belyaev", [[Regular soccer game.  On field for all but 15 minutes]])

Instance: Scen5ObsActivityType
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Activity Type - Scenario 5"
Description:  "Indicates that the specific activity was a run (closest approximation to soccer)"
Usage: #example
* insert ActivityType(Scen5PatientRosalie, "Rosalie Belyaev", Scen5RelatedPersonNadia, "Nadia Belyaev", 2022-07-18T16:31:00-08:00, LA11836-6, "Running")

Instance: Scen5ObsActivityDuration
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Activity Duration - Scenario 5"
Description:  "The length of a period of physical activity calculated by Nadia's phone based on information transmitted from Rosalie's watch."
Usage: #example
* insert ActivityDuration(Scen5PatientRosalie, "Rosalie Belyaev", Scen5RelatedPersonNadia, "Nadia Belyaev", 2022-07-18T16:31:00-08:00, 156)

Instance: Scen5ObsActivityModerate
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Moderate Duration - Scenario 5"
Description:  "The length of a period of moderate physical activity calculated by Nadia's phone based on information transmitted from Rosalie's watch."
Usage: #example
* insert ActivityDuration(Scen5PatientRosalie, "Rosalie Belyaev", Scen5RelatedPersonNadia, "Nadia Belyaev", 2022-07-18T16:31:00-08:00, 117)

Instance: Scen5ObsActivityVigorous
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Vigorous Duration - Scenario 5"
Description:  "The length of a period of vigorous activity calculated by Nadia's phone based on information transmitted from Rosalie's watch."
Usage: #example
* insert ActivityDuration(Scen5PatientRosalie, "Rosalie Belyaev", Scen5RelatedPersonNadia, "Nadia Belyaev", 2022-07-18T16:31:00-08:00, 39)

Instance: Scen5ObsActivityMeanHR
InstanceOf: PAObservationActivityMeasure
Title:       "Observation - Average Activity Heart Rate - Scenario 5"
Description:  "The average heart rate achieved by the Rosalie over the course of the game."
Usage: #example
* insert MeanHeartRate(Scen5PatientRosalie, "Rosalie Belyaev", Scen5RelatedPersonNadia, "Nadia Belyaev", 2022-07-18T16:31:00-08:00, 153)

Instance: Scen5ObservationsResponseBundle
InstanceOf: Bundle
Title:       "Bundle 'Search Set' - Observation - activity and blood glucose - Scenario 5"
Description:  "Bundle of search results for observations related to physical activity and blood glucose for patient Rosalie."
Usage: #example
* insert SearchBundle(1, [[https://mercy.example.org/fhir/Observation?patient=Patient/Scen5PatientRosalie&status=completed,amended,corrected&category=http%3A//hl7.org/fhir/us/physical-activity/CodeSystem/pa-temporary-codes|PhysicalActivity,http%3A//terminology.hl7.org/CodeSystem/observation-category|laboratory]])
* insert EntryMatch(Observation, Scen5ObsBloodGlucose)
* insert EntryMatch(Observation, Scen5ObsActivityType)
* insert EntryMatch(Observation, Scen5ObsActivityDuration)
* insert EntryMatch(Observation, Scen5ObsActivityModerate)
* insert EntryMatch(Observation, Scen5ObsActivityVigorous)
* insert EntryMatch(Observation, Scen5ObsActivityMeanHR)

Instance: Scen5RelatedPersonNadia
InstanceOf: PARelatedPerson
Title:       "Patient - Nadia Belyaev - Scenario 5"
Description:  "Related person information for Nadia Belyaev, the mother of patient Rosalie."
Usage: #example
* patient = Reference(Scen5PatientRosalie)
* relationship = $v3-RoleCode#MTH "mother"
  * text = "Mother"
* name
  * use = #official
  * family = "Belyaev"
  * given = "Nadia"
* gender = #female

Instance: Scen5PatientRosalie
InstanceOf: USCorePatientProfile
Title:       "RelatedPerson - Rosalie Belyaev - Scenario 5"
Description:  "Patient information for Rosalie Belyaev."
Usage: #example
* identifier
  * use = #usual
  * type = $v2-0203#MR "Medical record number"
    * text = "Medical record number"
  * system = "http://someClinic.example.org/identifiers/mrn"
  * value = "13579"
* name
  * use = #official
  * family = "Belyaev"
  * given = "Rosalie"
* gender = #female
* birthDate = "2008-04-14"

---

