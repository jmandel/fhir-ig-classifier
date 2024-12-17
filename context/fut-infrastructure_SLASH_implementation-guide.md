File: repos/fut-infrastructure_SLASH_implementation-guide/sushi-config.yaml

# ╭──────────────────────────────────────ImplementationGuide───────────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource. For a list of       │
# │  supported properties, see: https://fshschool.org/docs/sushi/configuration/                    │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
id: dk.ehealth.sundhed.fhir.ig.core
canonical: http://ehealth.sundhed.dk/fhir
name: eHealth Infrastructure
title: eHealth Infrastructure
status: active # draft | active | retired | unknown
version: 3.3.0
fhirVersion: 4.0.1
copyrightYear: 2021+
releaseLabel: ci-build # ci-build | draft | qa-preview | ballot | trial-use | release | update | normative+trial-use
description: The Danish eHealth Infrastructure Implementation Guide defines a set of FHIR profiles with extensions and bindings needed to create interoperable, quality-focused applications.

publisher:
  name: Den telemedicinske infrastruktur (eHealth Infrastructure)
  url: http://ehealth.sundhed.dk

jurisdiction: urn:iso:std:iso:3166#DK "Denmark"

dependencies:
  hl7.fhir.dk.core: 1.1.0
  hl7.fhir.uv.sdc: 2.7.0

parameters: # see https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
  path-resource:
    - input/resources
    - fsh-generated/resources

  path-pages:
    - input/includes
#    - input/include-ops
  
  
  usage-stats-opt-out: true
  show-inherited-invariants: false



# ╭────────────────────────────────────────────menu.xml────────────────────────────────────────────╮
# │  To use a provided input/includes/menu.xml file, delete the "menu" property below.             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯
menu:
  Table of Contents: toc.html
  Home: index.html
  General guidance: guidance.html
  FHIR Artifacts:
    Profiles and extensions: profiles.html
    Search Parameters: searchparams.html
    Operations: operations.html
    Operation examples: example-operations.html
  Artifacts Summary: artifacts.html
  Terminology: terminology.html
  Events:
    Event message types: event-messages.html
    Service event messages: service-event-tables.html
  Error Messsages: error-messages.html
  Capability Statements:
    CarePlan service: CapabilityStatement-careplan.html
    Device service: CapabilityStatement-device.html
    DocumentQuery service: CapabilityStatement-document-query.html
    DocumentTransformation service: CapabilityStatement-document-transformation.html
    Library service: CapabilityStatement-library.html
    Measurement service: CapabilityStatement-measurement.html
    Organization service: CapabilityStatement-organization.html
    Patient service:  CapabilityStatement-patient.html
    Plan service: CapabilityStatement-plan.html
    Questionnaire service: CapabilityStatement-questionnaire.html
    Reporting service: CapabilityStatement-reporting.html
    Task service: CapabilityStatement-task.html
    Terminology service: CapabilityStatement-terminology.html
  #Capability Statements: capability-statements.html
  Downloads: downloads.html


---

// File: input/pagecontent/changelog.md

This is the log of changes made to the eHealth Implementation Guide.

## Unreleased changes

### General changes
### Custom operations
#### System operations
#### Instance operations
### Code systems
### ValueSets
- Added ALAL03 code from SKS CodeSystem (urn-oid-1.2.208.176.2.4) to ehealth-conditions ValueSet
### ConceptMaps
### Resource/profile changes
- Changed validations for occurrence[x] in the ServiceRequest introduction.
#### ServiceRequest (ehealth-servicerequest)
- Changed cardinality of performer to 0..*
- Added ehealth-careteam as possible performer
### Search parameters

## 3.3.0 (2024-11-07)

### General changes
- Added new Extension ehealth-participant, and made it searchable with composite search parameter
- Composite search parameters does not work with Reference, so we had to make a workaround where we use a string (actorref) instead of a reference.
- Included a reference to validations for occurrence[x] in the ServiceRequest introduction.
- Added description on ehealth-task intro page regarding handover of resources between CareTeams 
### Custom operations
#### System operations
#### Instance operations
### Code systems
- Added http://ehealth.sundhed.dk/cs/participant-function
- Added http://ehealth.sundhed.dk/cs/task-handover-roles
- Added `HandoverNegotiation` code to http://ehealth.sundhed.dk/cs/task-category
### ValueSets
- Added http://ehealth.sundhed.dk/vs/participant-function
- Added `HandoverNegotiation` code to http://ehealth.sundhed.dk/vs/task-category
- Added `702916001`, `284546000`, `272511002`, `557891000005101` and `557901000005102` codes to http://ehealth.sundhed.dk/vs/facility-type-codes
### ConceptMaps
### Resource/profile changes
- Added new generic extension ehealth-participant to be used on all resources where a participant is involved
- Added ehealth-participant extension to CarePlan
- Added ehealth-participant extension to EpisodeOfCare
- Added extension ehealth-questionnaire-item-is-copyright to Questionnaire.item
- Added invariant to Questionnaire item that only allows isCopyright to be true for type 'group' or 'display'
### Search parameters
- Added search parameter `function` to `participant` (`CarePlan.participant`, `EpisodeOfCare.participant`). Can be used to search for CarePlans or EpisodesOfCare based on the function of the participant.
- Added search parameter `actor` to `participant` (`CarePlan.participant`, `EpisodeOfCare.participant`). Can be used to search for CarePlans or EpisodesOfCare based on the actor reference of the participant.
- Added search parameter `actorref` to `participant` (`CarePlan.participant`, `EpisodeOfCare.participant`). Can be used as composite searchParameter in combination with `function` to search for CarePlans or EpisodesOfCare based on the actor reference of the participant with a given function.

## 3.2.0 (2024-08-22)

### General changes
- Search functionality has been updated to use Bing search instead of Google search. 
### Custom operations
- Updated $get-patient-procedures behavior on input specifying the optional 'extra' parameter. When 'extra' is true, the operation returns a row for extra activities as determined by ServiceRequest.includeAsExtra.
- Updated behavior of custom operation "$apply" on Plan/CarePlan service to transfer the value of includeAsExtra element in PlanDefinition.action to the resulting ServiceRequests.includeAsExtra.
- Added custom operation "search-measurements-bundle-limit" on Measurement service
- Improved the export and import plan definition operations on Plan service
#### System operations
#### Instance operations
### Code systems
- Added missing NPU codes to urn:oid:1.2.208.176.2.1 used in concept maps
- Updated urn:oid:1.2.208.176.2.4 with 11 SKS codes ("DF00","DF10","DF20","DF30","DF40","DF50","DF60","DF70","DF80","DF90","DF99")
- Updated ehealth-sor-organization-type CodeSystem with new code 557881000005104
- Added missing title to code systems
- Added missing measurement types (MCS88192, MCS88193, MCS88194) to urn:oid:1.2.208.184.100.8
- Added two new codes to UCUM printSymbol supplement (/d and /wk)
### ValueSets
- Updated `http://ehealth.sundhed.dk/vs/sor-organization-specialty` with 8 new codes for the `http://snomed.info/sct` concept (658171000005102, 658161000005107, 658151000005105, 658191000005101, 658201000005103, 658141000005108, 658181000005104, 2903041000005106).
- Updated ehealth-conditions ValueSet with 11 SKS codes from the urn:oid:1.2.208.176.2.4 system ("DF00","DF10","DF20","DF30","DF40","DF50","DF60","DF70","DF80","DF90","DF99")
- Updated ValueSet-sundhedsdatastyrelsen-dk-ihe-classcode-vs with 8 new specialty codes (658171000005102, 658161000005107, 658151000005105, 658191000005101, 658201000005103, 658141000005108, 658181000005104, 2903041000005106)
- Updated ehealth-sor-organization-type ValueSet with 3 new Snomed concepts (702916001, 284546000, 272511002)

### ConceptMaps
- Removed mapping for non-existing code 445988008 in http://ehealth.sundhed.dk/ConceptMap/activitydefinition-code-to-perform-sharing
- Added mapping for MCS88192, MCS88193, MCS88194 codes in ConceptMap: Activitydefinition-code to do missing measurement, Activitydefinition-code to do reminder and Activitydefinition-code-to-perform-sharing
- Added mapping for MCS88192, MCS88193, MCS88194 codes in ConceptMap: Activitydefinition-code to measurement resource type
- Added mapping for MCS88192, MCS88193, MCS88194 codes in ConceptMap: conceptmap-obs-code-to-value-type
- Added mapping for MCS88192, MCS88193, MCS88194 codes in ConceptMap: Observation code to UCUM mapping (Experimental)
- Added mapping for /d and /wk codes in ConceptMap: UCUM code to PrintSymbol mapping (Experimental)
### Resource/profile changes
- Expanded the `ehealth-organization-specialty` extension with `primaryIndicator` boolean to allow indication of whether a specialty is the primary for an organization.
- Added extension ehealth-include-as-extra to ServiceRequest
- Added extension ehealth-include-as-extra to PlanDefinition.action
### Search parameters
- Added search parameter `communicationRelatesTo` on `ehealth-message` (`Communication`). This search parameter can be used to search for Communications based on either participant or episodeOfCare.

## 3.1.0 (2024-05-14)

### General changes

### Custom operations
- Added custom operation "retrieve-and-transform-QRD" on DocumentQuery service
- Added custom operation "retrieve-and-transform-APD" on DocumentQuery service
- Added custom operation "retrieve-and-transform-PHMR" on DocumentQuery service
- Operation "retrieve-document" on DocumentQuery service has been extended with parameters `consentOverride` and `reason` to be able to specify if the operation should override the lack of consent from a patient to view their medical documents, and to indicate the reason for the override. 

#### System operations
#### Instance operations
### Code systems
### ValueSets
### ConceptMaps
### Resource/profile changes
- DkCorePractitioner set as parent for the ehealth-practitioner profile

### Search parameters
- Added search parameters `consentOverride` and `reason` on `ehealth-documentreference` (`DocumentReference`) search operation in DocumentQuery service, to be able to specify if the search should override the lack of consent from a patient to view their medical documents, and to indicate the reason for the override. 

## 3.0.0 (2024-01-08)

### General changes
- Publisher for all resources has been changed to "Den telemedicinske infrastruktur (eHealth Infrastructure)" instead of "Systematic | Trifork"

### Custom operations
- Added custom operation "deprecate-document" on DocumentTransformation service
- Added custom operation "upload-QFDD" on DocumentTransformation service
- Added custom operation "transform-from-QRD-based-on-questionnaire" on DocumentTransformation service
- Updated description of "import" operation on PlanDefinition service
- Updated description of "export" operation on PlanDefinition service
#### System operations
#### Instance operations
### Code systems
- Added http://ehealth.sundhed.dk/cs/measurement-sharing-approval-policies
- Updated urn:oid:1.2.208.176.2.1 with NPU22089 and NPU03963
- Updated urn:oid:1.2.208.176.2.4 with ALAL codes
- Added urn:oid:1.2.208.176.7.3.1
- Updated urn:oid:1.2.208.184.100.1 with CMR, PDC and MADC
- Updated urn:oid:1.2.208.184.100.10 with codes
- Added http://ehealth.sundhed.dk/cs/ehealth-questionnaire-elements
- Added http://ehealth.sundhed.dk/cs/clinicalimpression-investigation-item-codes
- Updated http://ehealth.sundhed.dk/cs/ehealth-usage-context-type with questionnaire-related code
### ValueSets
- Added http://ehealth.sundhed.dk/vs/measurement-sharing-approval-policies
- Updated ValueSet-sundhedsdatastyrelsen-dk-ihe-classcode-vs to match DK-IHE_Metadata Value_sets 0.96.5
- Updated ValueSet-sundhedsdatastyrelsen-dk-ihe-eventcodelists-vs to match DK-IHE_Metadata Value_sets 0.96.5
- Updated ValueSet-sundhedsdatastyrelsen-dk-ihe-formatcode-vs to match DK-IHE_Metadata Value_sets 0.96.5
- Updated ValueSet-sundhedsdatastyrelsen-dk-ihe-practicesettingcode-vs to match DK-IHE_Metadata Value_sets 0.96.5
- Updated ValueSet-sundhedsdatastyrelsen-dk-ihe-typecode-vs to match DK-IHE_Metadata Value_sets 0.96.5
- Updated ValueSet-ehealth-questionnaire-item-control to contain code `slider`
- Added http://ehealth.sundhed.dk/vs/clinicalimpression-investigation-item-codes
- Added http://ehealth.sundhed.dk/vs/ehealth-questionnaire-elements
- Removed 412776001 and 412777005 SNOMED CT codes from http://ehealth.sundhed.dk/vs/careplan-category due to codes being removed from SNOMED CT
### ConceptMaps
- Added http://ehealth.sundhed.dk/ConceptMap/activitydefinition-code-to-perform-sharing The map controls whether the sharingApprovalPolicy-field should be set on the given resource.
### Resource/profile changes
- Added extension ehealth-ext-sharingApprovalPolicy to ActivityDefinition and ServiceRequest
- Added extension ehealth-clinicalimpression-assesor-organization to ClinicalImpression
- Added invariant to Questionnaire that only allows one sliderStepValue at a time 
- Added extention ehealth-resolved-timing to Task
- Added extention ehealth-external-identifier to Questionnaire.QuestionnaireItem
- Updated binding for ClinicalImpression.investigation.code to http://ehealth.sundhed.dk/vs/clinicalimpression-investigation-item-codes (example)
- added a boolean flag extension to ehealth-document-reference detailing if the document has been manually deprecated.
### Search parameters
- Added search parameter `communicationParticipant` on `ehealth-message` (`Communication`) to be able to query either by CareTeam or Patient/Practitioner

## 2.10.0 (2023-11-09)

### General changes

### Custom operations
#### System operations
- Added description of `-s-execute-careplan-and-episode-of-care-stats` operation
- Added description of `-s-execute-careplan-customization-stats` operation
- Added description of `-s-execute-careplan-duration-stats` operation
- Added description of `-s-execute-careplans-by-patient` operation
- Added description of `-s-execute-careteam-stats` operation
- Added description of `-s-execute-measurement-stats` operation
- Added description of `-s-execute-patient-devices` operation
- Added description of `-s-execute-patient-gdpr` operation
- Added description of `-s-execute-patient-total` operation
- Added description of `-s-execute-patient-usage-stats` operation
- Added description of `-s-execute-practitioner-gdpr` operation
- Added description of `-s-execute-practitioner-stats` operation
- Added description of `-s-execute-questionnaireresponses` operation
- Added description of `-s-execute-ssl-orders` operation
- Added description of `-s-fetch-patient-usage-stats` operation
- Added description of `-s-fetch-questionnaireresponses` operation
- Added description of `-s-get-report-job-status` operation
- Added description of `-s-schedule-patient-usage-stats` operation
- Added description of `-s-schedule-questionnaireresponses` operation#### Instance operations
#### Instance operations
### Code systems
### ValueSets
### ConceptMaps
### Resource/profile changes
- Added ehealth-questionnaire-helpText to Questionnaire.QuestionnaireItem
- Added ehealth-enableBehavior-conditionId to EnableBehaviour in Questionnaire.QuestionnaireItem 
#### CarePlan (ehealth-careplan)
- Added search parameter 'condition'
- Added search parameter 'instantiates-canonical'

## 2.9.0 (2023-08-29)

### General changes
- Added missing documentation for group appointment/video appointment events

### Custom operations
#### System operations
- Added enforcement on Task (ehealth-task). Requires Task.for to contain Patient reference if Task.episodeOfCare is populated.
#### Instance operations
### Code systems
### ValueSets
### ConceptMaps
- Added `http://ehealth.sundhed.dk/ConceptMap/activitydefinition-code-to-do-reminder`: The map controls whether an activity shall be able to result in the production of reminders.
- Added `http://ehealth.sundhed.dk/ConceptMap/activitydefinition-code-to-measurement-resource-type`: The map controls what measurement-resource-type is relevant as submission for a given activity.

### Resource/profile changes

## 2.8.0 (2023-06-01)

### General changes
- Added mention of dataAbsentReason to intro for Observation.

### Custom operations
#### System operations
#### Instance operations
### Code systems
- Added "MeasurementForAssessmentAbsentValue" to http://ehealth.sundhed.dk/cs/task-category
- Added "data-absent" to http://ehealth.sundhed.dk/cs/clinicalimpression-finding-codes
### ValueSets
- Added http://ehealth.sundhed.dk/vs/data-absent-reason
### ConceptMaps
### Resource/profile changes
- Added ehealth-servicerequest-statusHistory and ehealth-servicerequest-statusSchedule to ServiceRequest
- ehealth-observation dataAbsentReason changed to http://ehealth.sundhed.dk/vs/data-absent-reason (required)

## 2.7.0 (2023-03-29)

### General changes
- Changed the description in section "Automatic NemSMS Notifications" for Ehealth-message. This is related to "CCR0167 Ingen automatisk NemSMS for ehealth-message med kategori message" from Release 13.
- Changed the descriptions of ehealth-message category to reflect CCR0154 changes.
### Custom operations
#### System operations
#### Instance operations
### Code systems
- Two new codes "AppointmentReminder" and "VideoAppointmentReminder" added to "ehealth-message-reasonCode" code system.
### ValueSets
### ConceptMaps
### Resource/profile changes
- EpisodeOfCare is now optional on Ehealth-communication-request.
  - Changed intro text for Ehealth-communication-request.
- Clinical Impression Codes valueSet reference was accidentally deleted from Ehealth-clinicalImpression.code in last IG release. Has been reintroduced
- Ehealth-message changed to reflect CCR0154 changes. This includes the following:
  - Device-type sender is no longer allowed for category "message".
  - For categories "advice" and "notification", only Device-type senders are now allowed.

## 2.6.0 (2023-01-16)

### General changes
- Change ValueSet bindings from id to url (FUT1-6050)
- Fix broken SearchParameter links in patient CapabilityStatement
### Custom operations
#### System operations
#### Instance operations
### Code systems
- Added http://ehealth.sundhed.dk/cs/message-reasonCode
- Change supplement link in v3-TimingEvent to R4 link: http://terminology.hl7.org/ValueSet/v3-TimingEvent (FUT1-7461) 
### ValueSets
- Updated http://ehealth.sundhed.dk/vs/message-reasonCode to include http://ehealth.sundhed.dk/cs/message-reasonCode
- Removed codesystem http://ehealth.sundhed.dk/cs/device-types from valueset http://ehealth.sundhed.dk/vs/device-types
### ConceptMaps
### Resource/profile changes
- telecom.system valueset binding updated in CareTeam and Organization.

## 2.5.0 (2022-10-25)

### General changes

### Custom operations
#### System operations
#### Instance operations
### Code systems
- Updated http://ehealth.sundhed.dk/cs/task-category with new Danish descriptions.
### ValueSets
### ConceptMaps
- Added http://ehealth.sundhed.dk/ConceptMap/activitydefinition-code-to-do-missing-measurement The map controls whether an activity shall be subjected to missing measurements checks or not.
### Resource/profile changes

## 2.4.0 (2022-10-11)

### General changes

### Custom operations
#### System operations
#### Instance operations
### Code systems
- Added codesystem for tags: http://ehealth.sundhed.dk/cs/ehealth-system
- Added "DI50: Hjertesvigt" concept to SKS CodeSystem
- Moved "DZ76: Personer i kontakt med sundhedsvæsenet af andre årsager" to correct place in SKS CodeSystem hierarchi
### ValueSets
- Added "DI50: Hjertesvigt" to ehealth-conditions ValueSet
### ConceptMaps
### Resource/profile changes
- Updated life cycle descriptions for ehealth-device and ehealth-deviceusestatement.

## 2.3.0 (2022-09-27)

### General changes

### Custom operations
#### System operations
#### Instance operations
### Code systems
- Added codes to ehealth-clinicalimpression-finding-codes: no-effective-answer-significance and no-answer-significance-defined.
- Updated definition of green-question-answer and yellow-question-answer codes in ehealth-clinicalimpression-finding-codes.
### ValueSets
### ConceptMaps
### Resource/profile changes
- Added extension ehealth-questionnaireresponse-basis to ehealth-clinicalimpression for additional info regarding the finding.
### Search parameters
- Added search on 'about' on ehealth-message

## 2022.2 (2022-06-30)

### General changes

### Custom operations
#### System operations
#### Instance operations
### Code systems
- Added http://ehealth.sundhed.dk/cs/ehealth-clone-operation for Clone operation codes `major-version`, `minor-version` and `copy`
- Updated SKS with new concepts from exttest
- Updated some descriptions of DAK-E-Codes
### Naming systems
- Added http://ehealth.sundhed.dk/id/ehealth-environment as naming system for all ehealth environments
### ValueSets
- http://ehealth.sundhed.dk/vs/trigger-behavior now includes concept `one-or-more` instead of `any`
- Updated http://ehealth.sundhed.dk/vs/conditions with new conditions from exttest
### ConceptMaps
### Resource/profile changes
#### ActionGuidance
- Cardinality of ehealth-actionguidance-for changed to 0..*
#### View
- Cardinality of ehealth-view-for changed to 0..*
#### ActivityDefinition, PlanDefinition and Questionnaire
- Added extension ehealth-base as an Identifier to describe the first business-version of a resource for ehealth-activitydefinition, ehealth-plandefinition and ehealth-questionnaire in `ehealth-plandefinition.fsh`, `ehealth-activitydefinition.fsh` and `ehealth-questionnaire.fsh`
- Added extension ehealth-predecessor as Identifier to describe which business-version precessed the current resource for ehealth-activitydefinition, ehealth-plandefinition and ehealth-questionnaire in `ehealth-plandefinition.fsh`, `ehealth-activitydefinition.fsh` and `ehealth-questionnaire.fsh`
- Added extension ehealth-base-environment as Identifier to describe which ehealth environment a resource originate from for ehealth-activitydefinition, ehealth-plandefinition and ehealth-questionnaire in `ehealth-plandefinition.fsh`, `ehealth-activitydefinition.fsh` and `ehealth-questionnaire.fsh`
- Added extension ehealth-employee-title as title directed at clinicians for ehealth-activitydefinition, ehealth-plandefinition and ehealth-questionnaire in  `ehealth-activitydefinition.fsh`, `ehealth-plandefinition.fsh` and `ehealth-questionnaire.fsh`
#### Questionnaire
- Added extension ehealth-usage as description directed at clinicians for ehealth-activitydefinition in `ehealth-questionnaire.fsh`
- Added extension item.ehealth-questionnaire-shortText for ehealth-questionnaire in `ehealth-questionnaire.fsh`
- Added more detailed description of Answer Significance to the Questionnaire profile.
#### PlanDefinition
- Added description of group-actions and timing to PlanDefinition intro

## 2022.1 (2022-01-19)

### General changes
- Cleaned up some obselete references to ProcedureRequest
- Added link to Documentreference Search in operations list

### Custom operations
- Added description of output parameters for $get-patient-procedures
#### System operations
#### Instance operations
### Code systems
- Added CodeSystem `http://ehealth.sundhed.dk/cs/action-type`
- Added CodeSystem `http://ehealth.sundhed.dk/cs/action`
- Added CodeSystem `http://ehealth.sundhed.dk/cs/trigger-enablement-code`
- Added approved-view to CodeSystem: http://ehealth.sundhed.dk/cs/clinicalimpression-codes
- Added citizen-view-approved to CodeSystem: http://ehealth.sundhed.dk/cs/clinicalimpression-decision-codes

### ValueSets
- Added ValueSet `http://ehealth.sundhed.dk/vs/action`
- Added ValueSet `http://ehealth.sundhed.dk/vs/trigger-behavior`
- Added ValueSet `http://ehealth.sundhed.dk/vs/trigger-enablement-code`

### ConceptMaps
### Resource/profile changes
- Removed mediaInvestigationItem from `ehealth-clinicalimpression.fsh`
- Added ehealth-media as option for investigation.item in `ehealth-clinicalimpression.fsh`

#### ActionGuidiance and View
- Both ActonGuidance and View extends Basic FHIR resource. New added extensions common for both:
  - actionguidance-view-title - http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-view-title
  - version - http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-version
  - description - http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-description
  - purpose - http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-purpose
  - useContext - http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-useContext
  - status - http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-status
  - content - http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-content
  - code - http://ehealth.sundhed.dk/fhir/StructureDefinition/basic-resource-type
- New extensions for ActionGuidance
  - actionguidance-type - http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-type
  - actionguidance-for -http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-for
- New extensions for View
  - view-type - http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-view-type
  - view-for - http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-view-for

#### ClinicalImpression
- Added extension: ehealth-clinicalimpression-viewInvestigationItem

#### Questionnaire
- added new xhtml extensions

#### QuestionnaireAdvanced
- QuestionnaireAdvanced extends EHealthQuestionnaire with new added extensions:
  - calculatedExpression - http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression
  - UsageMode - http://hl7.org/fhir/StructureDefinition/questionnaire-usageMode
  - OrdinalValue - http://hl7.org/fhir/StructureDefinition/ordinalValue
  - Variable - http://hl7.org/fhir/StructureDefinition/variable

#### PlanDefinition
- added extensions to PlanDefinition to enable actions performed by the planDefinition along with the conditions for the action
  - Action ActionTrigger - Profile http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionTrigger
  - TriggerCondition - Profile http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-triggerCondition

#### ServiceRequest
- added extension to ServiceRequest to enable a reaction to trigger conditions expressed in other activities.
  - TriggerEnablementCode - profile http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-trigger-enablement-code

#### Task
- Clarified the use of Task.focus element
  
## 2021.3 (2021-10-28)
 
### General changes
The changes described here are those beyond changes made with the FHIR R4 migration (see section Changes with FHIR R4 Migration). 

### Custom operations
#### System operations
#### Instance operations
### Code systems
- Added CodeSystem `http://ehealth.sundhed.dk/cs/questionnaire-item-significance-indicator`

### ValueSets
- Added ValueSet `http://ehealth.sundhed.dk/vs/questionnaire-item-control`
- Added ValueSet `http://ehealth.sundhed.dk/vs/questionnaire-item-significance-indicator`
- Added ValueSet `http://ehealth.sundhed.dk/vs/questionnaire-item-image-format`

### ConceptMaps
### Resource/profile changes

#### Questionnaire
- Added extensions to Questionnaire Item to support small images on items and answer options, as well as item control, answer significance and answer conditions: 
    - Item Image - Profile http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-appointment
    - Item Control - Profile http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl
    - Item AnswerSignificance  - Profile http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire-answerSignificance
    - AnswerCondition - Profile http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-answer-Condition
 
#### StructureDefinition ehealth-modifier-role and ehealth-recommendation
- Replaced TBD in StructureDefinitions ehealth-modifier-role and ehealth-recommendation
 
### Changes with FHIR R4 Migration
The entire eHealth Implementation Guide has been migrated from FHIR STU3 to FHIR R4. Core migration changes described in `https://www.hl7.org/fhir/r4/diff.html` are mentioned in the changelog entries below only when significant to eHealth use. For instance, such mentioning could be that another FHIR element, possible introduced with FHIR R4, is now used instead of a FHIR STU3 element. 

### Custom operations
#### System operations
#### Instance operations
### Code systems
### ValueSets
- Removed ValueSet with url http://ehealth.sundhed.dk/vs/it-selfreliance as not used and defined using system SNOMED CT but non-SNOMED CT concepts.
### ConceptMaps
### Resource/profile changes
- Added extension workflow-episodeOfCare to reintroduce reference to EpisodeOfCare (as removed with FHIR R4). This extension is added to all clinical resources that previously had a context reference. The episodeOfCare reference is now mandatory in all cases.  

#### Communication (ehealth-message)
- Added search parameter 'episodeOfCare' for querying extension http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare

#### Appointment
- Element 'reasonCode' is used instead of 'reason' as that har been removed in FHIR R4
- serviceType must now be set depending on the value of meta/profile (with system "http://ehealth.sundhed.dk/cs/appointment-servicetype" for all codes):
  
        Profile 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-appointment' => code = 'regular'
        Profile 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-videoappointment' => code = 'video'
        Profile 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-group-appointment' => code = 'group'
        Profile 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-group-videoappointment' => code = 'group-video'
  
#### Patient
- Now inherits from dk-core Patient: https://build.fhir.org/ig/hl7dk/dk-core//StructureDefinition-dk-core-patient.html
- This means that earlier ehealth-patient extensions are replaced by corresponding dk-core extensions
- Also, earlier CRN/CPR slicing on identifier, telecom, and address is replaced by the corresponding dk-core slicing

#### CarePlan

#### DeviceUseStatement
- No change: FHIR STU3 element whenUsed period to be modelled through element timing (as whenUsed removed in FHIR R4).

#### ProcedureRequest
- Removed in FHIR R4. Replaced by ServiceRequest

#### ServiceRequest
- Added and adapted as replacement for ProcedureRequest

## 2021.2 (2021-05-05)
#### System operations
- Added description and example of `-s-get-patient-procedures` operation

### Code systems
- Added new code `mg/L` to `http://ehealth.sundhed.dk/cs/ehealth-ucum-printsymbol-supplement`
- Added new code `Cel` to `http://ehealth.sundhed.dk/cs/ehealth-ucum-printsymbol-supplement`
- Added new code `1/min` to `http://ehealth.sundhed.dk/cs/ehealth-ucum-printsymbol-supplement`
- Added new code `percentpoint` to `http://ehealth.sundhed.dk/cs/ehealth-ucum-printsymbol-supplement`
- Added new code `percentpoint` to `http://ehealth.sundhed.dk/cs/ehealth-unit-code`
- Added concept 'ExpectedDelivery' to `http://ehealth.sundhed.dk/cs/task-category`
- Added concept 'MeasurementForAssessmentNotTriaged' to `http://ehealth.sundhed.dk/cs/task-category`
- Changed content value from 'fragment' to 'complete' in `urn:oid:1.2.208.184.100.1`
- Changed content value from 'fragment' to 'complete' in `urn:oid:1.2.208.176.2.4`
- Changed content value from 'fragment' to 'complete' in `urn:ietf:bcp:47`
- Added relative reference values to `http://ehealth.sundhed.dk/cs/reference-range-type`
- Added new code system: `http://ehealth.sundhed.dk/cs/goal-description`
- Added new code system: `http://ehealth.sundhed.dk/cs/resolved-timing-type`
- Added new code system: `http://ehealth.sundhed.dk/cs/ehealth-provenance-policies`
- Removed offending HTML from display: `urn:oid:1.2.208.176.2.1`
- Removed offending HTML from display: `urn:oid:1.2.208.184.100.8`
- Removed concepts marked as deprecated from code system `http://ehealth.sundhed.dk/cs/careteam-participant-role`
- Removed concepts marked as deprecated from code system `http://ehealth.sundhed.dk/cs/oio-bpp-roles`
### ValueSets
- Added new valueSet: `http://ehealth.sundhed.dk/vs/goal-description`
- Added new valueSet: `http://ehealth.sundhed.dk/vs/goal-target-measure`
- Added new valueSet: `http://ehealth.sundhed.dk/vs/resolved-timing-type`
- Changed valueSet: `http://ehealth.sundhed.dk/vs/ehealth-provenance-policies`
- Changed valueSet: `http://ehealth.sundhed.dk/vs/facility-type-codes`
### ConceptMaps
- Added mapping for code `mg/L` to `http://ehealth.sundhed.dk/ConceptMap/conceptmap-ucum-to-printsymbol`
- Added mapping for code `Cel` to `http://ehealth.sundhed.dk/ConceptMap/conceptmap-ucum-to-printsymbol`
- Added mapping for code `/min` to `http://ehealth.sundhed.dk/ConceptMap/conceptmap-ucum-to-printsymbol`
- Added mapping for code `percentpoint` to `http://ehealth.sundhed.dk/ConceptMap/conceptmap-ucum-to-printsymbol`
- Added mapping for code `NPU08676` to `http://ehealth.sundhed.dk/ConceptMap/conceptmap-obs-code-to-ucum`
- Added mapping for code `NPU19748` to `http://ehealth.sundhed.dk/ConceptMap/conceptmap-obs-code-to-ucum`
- Changed mapping for code `MCS88023` in `http://ehealth.sundhed.dk/ConceptMap/conceptmap-obs-code-to-ucum`
- Added mapping for code `NPU08676` to `http://ehealth.sundhed.dk/ConceptMap/conceptmap-obs-code-to-value-type`
- Added mapping for code `NPU19748` to `http://ehealth.sundhed.dk/ConceptMap/conceptmap-obs-code-to-value-type`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:supporter` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:team_administrator` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:administrator` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:report_generator` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:treatment_responsible` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:monitoring_responsible` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:healthcare_professional` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:administrative_personnel` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:tele_medicine_actor` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:incident_locator` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
- Removed mapping for code `urn:dk:sundhed:ehealth:role:user_administrator` in `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`
### Resource/profile changes
- Added ehealth-goal profile. Used to specify reference base values for relative reference ranges.
- Added new extension: ehealth-resolved-timing to Observation, QuestionnaireResponse, Media 

## 2020.8 (2021-01-12)

### Code systems
- Added `http://ehealth.sundhed.dk/cs/ehealth-usage-context-type`
### ValueSets
- Added `http://ehealth.sundhed.dk/vs/ehealth-usage-context-type`
- Expanded `http://ehealth.sundhed.dk/vs/clinicalimpression-finding-codes` with `http://ehealth.sundhed.dk/vs/observation-codes`
### ConceptMaps
- Added `http://ehealth.sundhed.dk/ConceptMap/conceptmap-obs-code-to-value-type`

### Resource/profile changes

#### Appointment (ehealth-appointment)
- Added search parameter intended-audience
- Added performing organization to appointments in order to support export of CDA's. Use is required when stating legal basis

#### Video appointment (ehealth-videoappointment)
- Added performing organization to appointments in order to support export of CDA's. Use is required when stating legal basis

#### Group appointment (ehealth-group-appointment)
- Initial version

#### Group video appointment (ehealth-group-videoappointment)
- Initial version

#### Creator (ehealth-creator)
- Initial version

#### Assigning careteam (ehealth-assigning-careteam)
- Initial version

#### Registration deadline (ehealth-registration-deadline)
- Initial version

#### Min participants (ehealth-min-participants)
- Initial version

#### Library (eHealth-library)
- Changed valueset binding for useContext to `http://ehealth.sundhed.dk/vs/ehealth-usage-context-type`

## 2020.7 (2020-10-28)

### Code systems
- Added `http://ehealth.sundhed.dk/cs/overviewUsageMode`
### ValueSets
- Added `http://ehealth.sundhed.dk/vs/overviewUsageMode`

### Resource/profile changes
- Added extension `OverviewUsageMode`

#### Appointments (ehealth-appointment)
- Removed organization as an option for being listed as responsible on all appointments

#### Video appointments (ehealth-videoappointment)
- Made responsible mandatory on video appointments
- Removed organization as an option for being listed as responsible on all appointments

#### Questionnaire
- Added extension OverviewUsageMode to item

#### PlanDefinition
- Added extension OverviewUsageMode to action

#### Defined question (ehealth-definedquestion)
- Initial version
 
### Code systems
- Added new code `1/30sec` to `http://ehealth.sundhed.dk/cs/ehealth-ucum-printsymbol-supplement`
- Added new system `http://ehealth.sundhed.dk/cs/ehealth-unit-code` with code `1/30sec`
- Added new code `RequiredQuestionAnswerMissing` to `http://ehealth.sundhed.dk/cs/task-category`
- Added new code `RefBaseFixingNeeded` to `http://ehealth.sundhed.dk/cs/task-category`
- Added new code `RefBaseNeeded` to `http://ehealth.sundhed.dk/cs/task-category`
- Added new code `RefRangeFixingNeeded` to `http://ehealth.sundhed.dk/cs/task-category`
- Added new code `RefRangeNeeded` to `http://ehealth.sundhed.dk/cs/task-category`
- Added new code `LibraryUseMismatchFixingNeeded` to `http://ehealth.sundhed.dk/cs/task-category`
- Added new code `MeasurementForAssessmentFailureInAutoProcessing` to `http://ehealth.sundhed.dk/cs/task-category`
- Added new code `red-question-answer` to `http://ehealth.sundhed.dk/cs/clinicalimpression-finding-codes`
- Added new code `yellow-question-answer` to `http://ehealth.sundhed.dk/cs/clinicalimpression-finding-codes`
- Added new code `green-question-answer` to `http://ehealth.sundhed.dk/cs/clinicalimpression-finding-codes`

### ValueSets
- Added new valueSet `http://ehealth.sundhed.dk/vs/ehealth-unit` to include the valueSets `http://ehealth.sundhed.dk/vs/ehealth-unit-code` and `http://hl7.org/fhir/ValueSet/ucum-common`
- Added new valueSet `http://ehealth.sundhed.dk/vs/ehealth-unit-code` to include the system `http://ehealth.sundhed.dk/cs/ehealth-unit-code`
- Changed includes in `http://ehealth.sundhed.dk/vs/task-category` to include the system `http://ehealth.sundhed.dk/cs/task-category` instead of the concepts individually

### ConceptMaps
- Added new group in `http://ehealth.sundhed.dk/ConceptMap/conceptmap-obs-code-to-ucum`
- Added new group in `http://ehealth.sundhed.dk/ConceptMap/conceptmap-ucum-to-printsymbol`

### Resource/profile changes

#### Reference range (ehealth-referenceRange)
- ehealth-referenceRange, used in ActivityDefinition and ProcedureRequest, definitions have been added to clarify that low and high values are inclusive, just like they are on Observation.referenceRange 

#### Questionnaire
- Updated introduction to describe use of minOccurs and maxOccurs.

## 2020.6.1 (2020-09-04)

### Code systems
- Added `http://ehealth.sundhed.dk/cs/ehealth-ucum-printsymbol-supplement`
### ValueSets
- Added `http://ehealth.sundhed.dk/vs/ehealth-ucum-printsymbol-supplement`
### ConceptMaps
- Added `http://ehealth.sundhed.dk/ConceptMap/conceptmap-obs-code-to-ucum`
- Added `http://ehealth.sundhed.dk/ConceptMap/conceptmap-ucum-to-printsymbol`

## 2020.6 (2020-08-20)

### General changes

### Custom operations
- added plandefinition-export and plandefinition-import
### Code systems
- Added new code `CalibrationNeeded` to `http://ehealth.sundhed.dk/cs/task-category`
- Added new code `OpenSSLOrder` to `http://ehealth.sundhed.dk/cs/task-category`
### ValueSets
- Added new code `CalibrationNeeded` to `http://ehealth.sundhed.dk/vs/task-category`
- Removed code `313299006` from `http://ehealth.sundhed.dk/vs/conditions`
- Added new code `OpenSSLOrder` to `http://ehealth.sundhed.dk/vs/task-category`
### SearchParameters
- added careteamParticipant as search parameter on Appointments
### Resource/profile changes
- added minimum requirement of 1 identifier for eHealth-Organization
- added administrative-status required on eHealth-Message
- DeviceMetric.type and DeviceMetric.unit strength changed from 'preferred' to 'required'

## 2020.5 (2020-06-25)

### Resource/profile changes

#### Patient
- Fixed krs profile name and slicing on identifier
- Opened up that patients does not necessarily have an address (the case for patients with name and address protection)

#### Careplan 
- Added teamSchedule and statusSchedule

#### EpisodeOfCare 
- Added teamSchedule and statusSchedule

#### CommunicationRequest 
- Changed cardinality of BasedOn to 0..1

## 2020.4 (2020-05-25)

### Custom operations
#### System operations
- Changed description and example of `-s-persist-login` operation

### Resource/profile changes

#### Appointment (ehealth-appointment / ehealth-videoappointment)
- Changed binding to correct jurisdiction valueset is now enforced

#### Organization (ehealth-organization)
- Added description of extension organization-source  to intro

## 2020.3 (2020-04-30)

### Custom operations
#### Instance operations
- Updated descriptions for reporting operations
- Added traverse-to-sor instance operation

## 2020.2 (2020-03-27)

### Custom operations
#### System operations
- Added description and example of `-s-persist-login` operation

#### Instance operations
- Changes to CodeSystem, ValueSet, ConceptMap and NamingSystem are limited to those not entirely defined through the terminology administration application. 

### Resource/profile changes

#### Device (ehealth-device)
- Changed so status is mandatory

#### Observation (ehealth-observation)
- Changed so device is not mandatory

#### Task (ehealth-task)
- Changed introduction to reflect Task elements for resources created by automated processing.

## 2020.1 (2020-02-04)

### General changes

- Changed wording in Reader's Guide on value sets and code systems
- Added capability statement for Document Query Service
- Added capability statement for Reporting Service 
- Changed typos on UCUM in General Guidance
 

Example operations updated.

### Custom operations

#### System operations

#### Instance operations

### Code systems
- Added `urn:oid:1.2.208.184.100.9`
- Added `urn:oid:1.2.208.184.100.10`
- Added `http://ehealth.sundhed.dk/cs/jurisdiction`
- Added `http://ehealth.sundhed.dk/cs/message-category`
- Added `http://ehealth.sundhed.dk/cs/message-medium`
- Added `http://snomed.info/sct/554471000005108/version/20150731`
- Added `http://snomed.info/sct/554471000005108/version/20180331`
- Added `http://snomed.info/sct/554471000005108/version/20180930`
- Changed `http://ehealth.sundhed.dk/cs/careteam-participant-role`
- Changed `http://ehealth.sundhed.dk/cs/oio-bpp-roles`
- Changed `http://ehealth.sundhed.dk/cs/organization-relation-type`
- Changed `https://www.iso.org/obp/ui/#iso:code:3166:DK`
- Changed `urn:oid:1.2.208.184.100.8`
- Changed `urn:oid:1.2.208.176.2.1`
- Removed `http://ehealth.sundhed.dk/cs/document-class`
- Removed `http://ehealth.sundhed.dk/cs/document-type`
- Removed `http://www.example.com/medcom/document-class`
- Added `urn:oid:1.2.208.176.2.4`
- Updated `urn:oid:1.2.208.176.2.1`
- Updated `urn:oid:1.2.208.184.100.8`
- Removed `http://ehealth.sundhed.dk/cs/practitioner-role`

### ValueSets
- Added `http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-eventcodelists-vs`
- Added `http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-classcode-vs`
- Added `http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-formatcode-vs`
- Added `http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-healthcarefacilitytypecode-vs`
- Added `http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-practicesettingcode-vs`
- Added `http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-typecode-vs`
- Added `http://ehealth.sundhed.dk/vs/jurisdiction`
- Added `http://ehealth.sundhed.dk/vs/message-reasonCode`
- Changed `http://ehealth.sundhed.dk/vs/document-class`
- Changed `http://ehealth.sundhed.dk/vs/document-type`
- Changed `http://ehealth.sundhed.dk/vs/event-type-codes`
- Changed `http://ehealth.sundhed.dk/vs/facility-type-codes`
- Changed `http://ehealth.sundhed.dk/vs/format-codes`
- Changed `http://ehealth.sundhed.dk/vs/organization-specialty`
- Changed `http://ehealth.sundhed.dk/vs/practice-setting-codes`
- Changed `http://ehealth.sundhed.dk/vs/reference-range-type`
- Changed `http://ehealth.sundhed.dk/vs/regional-subdivision-codes`
- Changed `http://ehealth.sundhed.dk/vs/sor-organization-specialty`
- Changed `http://ehealth.sundhed.dk/vs/sor-organization-type`
- Included ValueSet  `http://ehealth.sundhed.dk/vs/observation-codes` in ValueSet `http://ehealth.sundhed.dk/vs/reference-range-type`
- Included ValueSet  `http://ehealth.sundhed.dk/vs/observation-codes` in ValueSet `http://ehealth.sundhed.dk/vs/activitydefinition-code`
- Removed `http://ehealth.sundhed.dk/vs/practitioner-role`

### NamingSystems
- Added ehealth-identifier - _An identifier used internally in eHealth, possibly used for identifiers when transforming to CDA document representations of resources_

### ConceptMaps
- Removed `http://fhir.ch/ig/ch-core/ConceptMap/maritalstatus-ech11-to-fhir`
- Added `http://ehealth.sundhed.dk/ConceptMap/oio-bpp-roles-to-careteam-participant-roles`

### Resource/profile changes
 - Added deceased extension for use on `Person` when doing `Person$match`
 - Removed `http://ehealth.sundhed.dk/cs/practitioner-role` profile
 - Added PractitionerRole structure definition

 #### CareTeam (ehealth-careteam)
 - Added extension `telecom`

#### ActivityDefinition (ehealth-activitydefinition)
- ActivityDefinition.jurisdiction bound to ValueSet "http://ehealth.sundhed.dk/vs/jurisdiction"

#### Appointment (ehealth-appointment)
- Updated introduction to describe group-id
- Added
  - Appointment.extionsion:responsible.value[x]:valueReference
  - Appointment.extension:groupId
  - Appointment.extension:legalBasis
  - Appointment.extionsen:releasableResource
- Changed
  - Appointment.supportingInformation
    - Cardinality max 1
    - Reference to ehealth-episodeofcare
  - Appointment.participant.extension:careteam
    - Cardinality max 1

#### AppointmentResponse (ehealth-appointmentresponse)
- Removed

#### EpisodeOfCare (ehealth-episodeofcare)
- Updated introduction to mention correct initial status

#### CommunicationRequest (ehealth-communication-request)
- Added introduction

#### DeviceMetric (ehealth-devicemetric)
- Changed valueset binding for type/unit to http://ehealth.sundhed.dk/vs/device-measurement-unit

#### Library (ehealth-library)
- Library.jurisdiction bound to ValueSet `http://ehealth.sundhed.dk/vs/jurisdiction`

#### Message (ehealth-message)
- Updated introduction to explain use of group-id
- Added
  - Communication.extension:threadId.valueString:valueString
  - Communication.extension:groupId
- Profiled
  - Communication.reasonCode.coding

#### Organization (ehealth-organization)
- Updated introduction to mention organizations not maintained by SOR or STS-ORG registries

#### Observation (ehealth-observation)
- Changed element `Observation.component.code` value set binding to `http://ehealth.sundhed.dk/vs/observation-codes`
- Changed strength of `Observation.component.code` value set binding to "required"
- `Observation.component.referenceRange.type` was changed to `http://ehealth.sundhed.dk/vs/reference-range-type`
- `Observation.component.value[x]` was changed to contain either `Quantity` or `CodeableConcept`

#### PlanDefinition (ehealth-plandefinition)
- PlanDefinition.jurisdiction bound to ValueSet `http://ehealth.sundhed.dk/vs/jurisdiction`

#### Questionnaire (ehealth-questionnaire)
- Profiled
  - Questionnaire.jurisdiction

#### Task (ehealth-task)
- Updated intro description

#### VideoAppointment (ehealth-videoappointment)
- Updated introduction to mention vmr-uri, host pin code, group id
- Added
  - Appointment.extension.value[x]
  - Appointment.extension.groupId
- Changed
  - Appointment.responsible
    - cardinality 0..1
  - Appointment.participant.careteam
    - cardinality 0..1

### Events
- Added description of EHealthContextEvent

## 2019.6.1 (2019-12-04)

### Code systems
- All `CodeSystem` migrated to `active` status
- Added `http://ehealth.sundhed.dk/cs/oio-organization-type`
- Added `http://ehealth.sundhed.dk/cs/oio-bpp-roles`

### ValueSets
- All `ValueSet` migrated to `active` status
- Added `http://ehealth.sundhed.dk/vs/oio-organization-type`
- Added `http://ehealth.sundhed.dk/vs/oio-bpp-roles`
- Changed include of `http://hl7.org/fhir/ValueSet/practitioner-role` in `ehealth-practitioner-role` to be of type `valueSet` instead of `system`
- Included ValueSet `http://hl7.org/fhir/ValueSet/metric-category` in ValueSet `http://ehealth.sundhed.dk/vs/ssl-catalogue-item-annotations`  

### ConceptMaps
- All `ConceptMap` migrated to `active` status
- Added `oiobpp-roles-to-participant-role`

### Resource/profile changes
- Added CommunicationRequest profile

#### Appointment (ehealth-appointment)
- Max. one CareTeam per participant (0..n by mistake)
- Organization no longer possible as responsible
- Added extension for (optional) group-id to correlate different appointments
- Added search parameter for group-id

#### VideoAppointment (ehealth-videoappointment)
- Max. one CareTeam per participant (0..n by mistake)
- At most one responsible party (was 0..n by mistake)
- Organization no longer possible as responsible
- Added extension for (optional) group-id to correlate different video appointments
- Added search parameter for group-id

#### Message (ehealth-message)
- Added "title" extension to allow message "subject"
- Maximum allow 1 senderCareTeam/recipientCareTeam (multiple were allowed earlier by error)
- ReasonCode extended to allow task-category codes
- Added extension for (optional) group-id to correlate different messages
- Fixed search parameter for restriction-category
- Added search parameter for group-id

## 2019.6 (2019-11-08)

### General changes
- Added list of error messages
- Added missing operations in operations tables for capability statements (issue fixed by new release of IG Publisher tool used for generating this Implementation Guide)
- Added capabilitystatement for `CarePlan Service`, `Device Service`, `Library Service`, `Document Transformation Service`, `Task Service` and `Plan Service`
- Removed capabilitystatement for `Clinical Domain Stub - Systematic`
- Updated `-s-create-episode-of-care` operation examples for `ehealth-episodeofcare`
- Added description of message broker event messages
- Changed extension `modifierRole` to contain only `ehealth-organization` type reference
- Added page containing operation examples for all custom operations
- Update all operation examples
- Restructured `Operations and Search parameters` section
- Added specification of how Quantity and its defined variations should be used to General Guidance
- Emptied FHIR Resources Slated for Use or Profiling on page Profiles
- Removed descriptions of unused extensions `ehealth-author`, `ehealth-questionnaire-author`, and `ehealth-questionnaire-custodian`. 
- Removed ehealth-appointmentresponse profile
- Removed ehealth-detached-provenance (FUT1-2623 and FUT1-2734)

### Custom operations
#### System operations
- Changed description of `-s-create-episode-of-care`
- Added description and example of `-s-is-context-allowed` operation
- Changed description of `Library-i-evaluate`
- Changed description of `createPatient`
- Added description of `match` on Person

#### Instance operations
### Code systems
- Added `http://ehealth.sundhed.dk/cs/library-type` defining code `automated-processing`
- Added `http://ehealth.sundhed.dk/cs/device-safety`
- Added `http://ehealth.sundhed.dk/cs/device-calibration-period`
- Added `http://ehealth.sundhed.dk/cs/device-calibration-actor`
- Added `http://ehealth.sundhed.dk/cs/device-service-type`
- Added `http://ehealth.sundhed.dk/cs/clinicalimpression-decision-codes`
- Added `http://ehealth.sundhed.dk/cs/restriction-category`
- Added `http://ehealth.sundhed.dk/cs/organization-source`
- Added `http://ehealth.sundhed.dk/cs/sor-organization-type`
- Added `http://ehealth.sundhed.dk/cs/sor-organization-specialty`
- Added `http://ehealth.sundhed.dk/cs/organization-synchronization-status`
- Added `http://ehealth.sundhed.dk/cs/fs3-citizen-importance-scores`
- Added `http://ehealth.sundhed.dk/cs/fs3-citizen-performance-scores`
- Added `http://ehealth.sundhed.dk/cs/fs3-group-communitylife`
- Added `http://ehealth.sundhed.dk/cs/fs3-group-mentalfunctions`
- Added `http://ehealth.sundhed.dk/cs/fs3-group-mobility`
- Added `http://ehealth.sundhed.dk/cs/fs3-group-practicaltasks`
- Added `http://ehealth.sundhed.dk/cs/fs3-group-selfcare`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-communication`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-excretion-of-waste-materials`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-function-level`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-knowledge-and-development`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-musculoskeletal`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-nutrition`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-pain-and-sensory-impressions`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-psychosocial-conditions`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-respiration-and-circulation`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-sexuality`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-skin-and-mucous-membranes`
- Added `http://ehealth.sundhed.dk/cs/fs3-health-sleep-and-rest`
- Added `http://ehealth.sundhed.dk/cs/fs3-scores`
- Added `http://ehealth.sundhed.dk/cs/percentage-codes`
- Added `http://ehealth.sundhed.dk/cs/ehealth-communication-category`
- Added new code `SSLPCI` to `http://ehealth.sundhed.dk/cs/consent-category`
- Added new codes `550891000005100`, `398070004`, `550811000005108`, `557511000005107`, `550411000005105`, `264372000`, `557501000005109`, `554851000005102`, `557531000005103`, `20078004`, `722173008`, `554221000005108`, `554031000005103`, `546821000005103`, `702871004`, `554061000005105`, `276037005`, `550861000005106`, `547011000005103`, `546811000005109`, `554881000005108`, `554861000005100`, `554821000005109`, `550621000005101`, `702824005`, `557591000005104`, `554411000005101`, `550631000005103`, `550641000005106`, `557521000005101`, `557561000005105`, `557541000005106`, `550651000005108`, `550661000005105`, `557581000005102`, `557671000005101`, `42665001`, `554211000005102`, `554871000005105`, `550711000005101`, `556841000005105`, `550821000005102`, `550671000005100`, `264361005`, `554041000005106`, `554021000005101`, `703069008`, `550681000005102`, `550691000005104`, `550701000005104`, `554231000005106`, `554051000005108`, `550871000005101`, `554241000005103`, `309964003`, `550841000005107`, `309904001`, `551611000005102`, `309939001`, `225728007`, `554071000005100`, `550831000005104`, `255203001`, `449171008`, `448225001` to `http://snomed.info/sct`
- Added new specialty codes `394537008`, `394577000`, `394579002`, `394580004`, `394581000`, `394582007`, `394583002`, `394584008`, `394585009`, `394587001`, `394588006`, `394589003`, `394591006`, `394592004`, `394594003`, `394596001`, `394600006`, `394601005`, `394603008`, `394604002`, `394605001`, `394608004`, `394609007`, `394610002`, `394611003`, `394612005`, `394801008`, `394803006`, `394805004`, `394807007`, `394809005`, `394810000`, `394811001`, `394812008`, `394821009`, `394914008`, `394915009`, `408443003`, `408448007`, `408454008`, `408463005`, `408472002`, `418112009`, `419192003`, `421661004`, `551411000005104`, `554011000005107`, `773568002` to `http://snomed.info/sct`
- Changed `http://ehealth.sundhed.dk/cs/derived-quality-base` so the codes are not in all caps

### ValueSets
- Added `http://ehealth.sundhed.dk/vs/library-type` including code `automated-processing`
- Added `http://ehealth.sundhed.dk/vs/device-measurement-unit` 
- Added `http://ehealth.sundhed.dk/vs/device-safety`
- Added `http://ehealth.sundhed.dk/vs/device-calibration-type` 
- Added `http://ehealth.sundhed.dk/vs/device-calibration-period` 
- Added `http://ehealth.sundhed.dk/vs/device-calibration-actor` 
- Added `http://ehealth.sundhed.dk/vs/device-service-types`
- Added `http://ehealth.sundhed.dk/vs/ssl-catalogue-item-annotations`
- Added `http://ehealth.sundhed.dk/vs/clinicalimpression-decision-codes`
- Added `http://ehealth.sundhed.dk/vs/restriction-category`
- Added `http://ehealth.sundhed.dk/vs/sor-organization-type`
- Added `http://ehealth.sundhed.dk/vs/sor-organization-specialty`
- Added `http://ehealth.sundhed.dk/vs/organization-source`
- Added `http://ehealth.sundhed.dk/vs/organization-specialty`
- Added `http://ehealth.sundhed.dk/vs/organization-synchronization-status`
- Added `http://ehealth.sundhed.dk/vs/fs3-categories`
- Added `http://ehealth.sundhed.dk/vs/fs3-citizen-importance-scores`
- Added `http://ehealth.sundhed.dk/vs/fs3-citizen-performance-scores`
- Added `http://ehealth.sundhed.dk/vs/fs3-health`
- Added `http://ehealth.sundhed.dk/vs/fs3-scores`
- Added `http://ehealth.sundhed.dk/vs/itcompetencelevel-codes`
- Added `http://ehealth.sundhed.dk/vs/ehealth-communication-category`
- Added `http://ehealth.sundhed.dk/vs/ehealth-administrative-status`
- Changed `http://ehealth.sundhed.dk/vs/organization-type`
- Added new code `http://ehealth.sundhed.dk/policy/ehealth/organization-administration` to `http://ehealth.sundhed.dk/vs/ehealth-provenance-policies`
- Changed `http://ehealth.sundhed.dk/vs/contactpoint-system` to include `http://hl7.org/fhir/ValueSet/contact-point-system`
- Added new code `PITEOC` to `http://ehealth.sundhed.dk/vs/consent-category`
- Added SNOMED CT codes `449171008` and `448225001` to `http://ehealth.sundhed.dk/cs/clinicalimpression-finding-codes`
- Changed `http://ehealth.sundhed.dk/vs/ehealth-provenance-policies` added new policy : `http://ehealth.sundhed.dk/policy/ehealth/reuse-of-measurement-chosen-by-citizen`

### Resource/profile changes

#### ActivityDefinition (ehealth-activitydefinition)
- Added ehealth-reuseCriteria extension
- Added sharingPolicy extension

#### Appointment (ehealth-appointment & ehealth-videoappointment)
- Location is no longer required
- Changed description due to new cardinalities
- Added CodeSystem for appointmentType, updated example accordingly
- Added ValueSet "ehealth-appointment-reason"
- Added 'responsible' extension
- Added careteam as possible participant
- Added FhirPath constraint that assert responsible is always part of the participants
- Updated intro

#### CarePlan (ehealth-careplan)
- Removed extension `responsibilitySummary`
- Removed extension `responsibleHistory`
- Removed extension `responsible`
- Added extension `careTeamHistory`
- Updated intro

#### CareTeam (ehealth-careteam)
- Added `reasonCode`
- Changed cardinality of element `subject` to 0..0
- Changed cardinality of element `context` to 0..0
- Changed cardinality of element `reasonReference` to 0..0
- Changed cardinality of element `status` to 1..1
- Updated intro

#### ClinicalImpression (ehealth-clinicalimpression)
- Added extension `careplan`
- Added extension `decisionContext`
- Added extension `decision`
- Added option "Observation" as contained element to `finding.item`
- Removed extension `decisionRule`
- Removed option "Encounter" from `context`
- Removed option "Group" from `subject`
- Removed option "eHealth-Observation" from `finding.item`
- Updated intro

#### Communication (ehealth-communication)
- Added extension `senderCareTeam`
- Added extension `restrictionCategory`
- Changed category to 'http://ehealth.sundhed.dk/vs/communication-category'
- Changed cardinality of element `sender` to 0..1
- References to organization were removed from 'sender' and 'recipient'
- Added context reference to Encounter
- Added PATCH example
- Possible to use CareTeam as recipient using extension
- Updated intro

#### Composition (ehealth-composition)
- Change so references can be bundled or contained
- Updated intro

#### Consent (ehealth-consent)
- Added general resource description

#### EpisodeOfCare (ehealth-episodeofcare)
- Removed extension `careManagers`
- Removed extension `careManagersHistory`
- Removed extension `responsible`
- Removed extension `responsibleHistory`
- Added extension `caremanagerOrganization`
- Added extension `teamHistory`
- Updated intro

#### Library (ehealth-library)
- Removed extension `basedOn`
- Removed extension `parameterBinding`
- Removed extension `parameterName`
- Updated general resource description
- Changed `Library.type` value set reference to `http://ehealth.sundhed.dk/vs/library-type` - to allow value `automated-processing`. Changed to be required.

#### Media (ehealth-media)
- Removed sharingPolicy extension
- Changed cardinality of element `occurence[x]` to 1..1

#### Message (ehealth-message)
- Added CareTeam as recipient/sender option and changed sender/recipient requirement to 0
- Only one recipient is allowed
- Device added as possibility for sender
- CareTeam removed as possible recipient (profiling defect, extension must be used instead)
- Legal PATCH operations described
- Available search parameters added
- Added administrative-status and period (part of discarding detached-provenance)
- Restricted value set for status (ehealth-status)
- Added "priority" extension with value set as specified in R4 spec (but not included in R3)

#### Observation (ehealth-observation)
- Observation.referenceRange.type was changed to `http://ehealth.sundhed.dk/vs/reference-range-type`
- Observation.context reference to Encounter was added
- Removed sharingPolicy extension
- Updated intro

#### Organization (ehealth-organization)
- Added extension `cvrNumber`
- Added extension `regionCode`
- Added extension `municipalityCode`
- Added extension `source` (mandatory)
- Added extension `synchronizationStatus` (mandatory)
- Added extension `providerIdentifier`
- Added extension `specialty`
- Changed referenced ValueSet for `type`
- Changed type of extension element `contact.telecom.custodian` from `code` to `CodeableConcept`
- Changed type of extension element `contact.telecom.system` from `code` to `CodeableConcept`
- Renamed extension element `contact.telecom.system` to `contact.telecom.telecomSystem` 
- Renamed extension element `contact.telecom.value` to `contact.telecom.telecomValue` 
- Changed cardinality of extension element `contact.telecom.telecomValue` inside extension to min 1

#### Patient (ehealth-patient)
- Added PATCH example
- Added municipality code CodeSystem (DK: kommunekoder)
- Changed it-competence-level multiplicity from 0-1 to 0-*, and added ValueSet (ehealth-itcompetencelevel-codes)
- Added it-competence-level support for device-type and description data
- Removed managingOrganization
- Legal PATCH operations described
- Changed referenced resources to use aggregation type "referenced"
- Removed functional-capacity extension (not to be used for now)

#### PlanDefinition (ehealth-plandefinition)
- Removed `role`
- Updated intro

#### ProcedureRequest (ehealth-procedurerequest)
- Added ehealth-reuseCriteria extension
- Added sharingPolicy extension
- Updated intro

#### Provenance (ehealth-provenance)
- Added value set link for element `Provenance.agent.role` (issue fixed by new release of IG Publisher tool used for generating this Implementation Guide) 
- Added optional dateTimeOfReusedEntity
- Updated intro

#### Questionnaire (ehealth-questionnaire)
- Removed `reuseCriteria` extension

#### Questionnaire reuseCriteria (ehealth-questionnaire-reuseCriteria)
- Renamed to `ehealth-reuseCriteria`

#### QuestionnaireResponse (ehealth-questionnaireresponse)
- Changed cardinality of element `authored` to 1..1

#### ReuseCriteria (ehealth-reuseCriteria)
- Removed `dataActuality` (integer) & `dataActualityUnit` (timing)
- Added `dataActuality` (1 .. 1) consisting of a FHIR Duration.
- Renamed `operationQuality` to `usageQuality`
- Renamed `dataQuality` to `deviceMeasuringQuality`

#### Task (ehealth-task)
- Added extension `restriction-category`
- Remove Organization as possible task-responsible

## 2019.5.3 (2019-06-07)

### General changes
- Titles and headlines made more homogeneous

### Resource/profile changes

#### ActivityDefinition (ehealth-activitydefinition)
- Added general resource description

#### Condition (ehealth-condition)
- Added general resource description

#### Media (ehealth-media)
- Enhanced resource description

#### Patient (ehealth-patient)
- Added general resource description

#### Practitioner (ehealth-practitioner)
- Added general resource description

#### ProcedureRequest (ehealth-procedurerequest)
- Added general resource description

#### RelatedPerson (ehealth-relatedperson)
- Added general resource description

## 2019.5.2 (2019-05-29)

### General changes
- Added note to General Guidance on Coding code and system must be provided despite being optional in FHIR

### Code systems
- Added new codes `22232009`, `394761003`, `550881000005103`, `547211000005108`, `550851000005109` to `http://snomed.info/sct`
- Updated description of values in `http://ehealth.sundhed.dk/cs/ehealth-quality-types` to define relation to valid quality codes. 

### ValueSets
- Added `http://ehealth.sundhed.dk/vs/organization-type`

### Resource/profile changes
#### ActivityDefinition (ehealth-activitydefinition)
- Added definition of `minimumQuality` 
- Added definition of `modifierRole` 
- Changed definition of `reference`
- Changed referenced resources to use aggregation type "referenced"

#### Appointment (ehealth-appointment)
- Changed referenced resources to use aggregation type "referenced"

#### AppointmentResponse (ehealth-appointmentresponse)
- Changed referenced resources to use aggregation type "referenced"

#### CarePlan (ehealth-careplan)
- Changed referenced resources to use aggregation type "referenced"

#### CareTeam (ehealth-careteam)
- Changed description, reflecting that current use of CareTeam is not tied to patient
- Changed referenced resources to use aggregation type "referenced"

#### Communication (ehealth-communication)
- Changed referenced resources to use aggregation type "referenced"

#### Composition (ehealth-composition)
- Changed referenced resources to use aggregation type "referenced"

#### Provenance (ehealth-detached-provenance)
- Changed referenced resources to use aggregation type "referenced"

#### Device (ehealth-device)
- Updated resource description
- Updated description of `privatelyOwned`
- Updated description of `suppliers`
- Changed cardinality for `patient` to 0..0
- Changed referenced resources to use aggregation type "referenced"

#### DeviceMetric (ehealth-devicemetric)
- Updated resource description

#### DeviceUseStatement (ehealth-deviceusestatement)
- Added resource description
- Added extension `context` reference to CarePlan

#### DocumentReference (ehealth-documentreference)
- Added resource description
- Changed referenced resources to use aggregation type "referenced"

#### GuidanceResponse (ehealth-guidanceresponse)
- Added introduction
- Changed referenced resources to use aggregation type "referenced"
- Changed element `module` to use aggregation types "referenced" and "contained"

#### Library (ehealth-library)
- Added extension `modifierRole`

#### Organization (ehealth-organization)
- Added description of `telecomCustodian`, `telecomSystem` and `telecomValue`
- Updated introduction
- Updated description of `relatedTo.target`
- Changed element `type` value set binding to `http://ehealth.sundhed.dk/vs/organization-type`

#### Media (ehealth-media)
- Added Encounter as possible reference type for `context`

#### RelatedPerson (ehealth-patient-relatedPerson)
- Changed referenced resources to use aggregation type "referenced"

#### PlanDefinition (ehealth-plandefinition)
- Added definition of `modifierRole` 
- Added definition of `role` 
- Changed referenced resources to use aggregation type "referenced"

#### Provenance (ehealth-provenance)
- Added resource description
- Changed referenced resources to use aggregation type "referenced"

#### QuestionnaireResponse (ehealth-questionnaireresponse)
- Updated descriptions of `quality.qualityType` and `quality.qualityCode`.
- Changed referenced resources to use aggregation type "referenced"

#### RelatedPerson (ehealth-relatedperson)
- Changed referenced resources to use aggregation type "referenced"

#### Task (ehealth-task)
- Updated resource description

## 2019.5.1 (2019-05-15)

### Code systems
- Removed `http://ehealth.sundhed.dk/cs/careplan-status`

### ValueSets
- Added new codes `250554003`, `445988008` to `http://ehealth.sundhed.dk/vs/ehealth-activitydefinition-code`.
- Removed `http://ehealth.sundhed.dk/vs/careplan-status`

### Resource/profile changes

#### CarePlan (ehealth-careplan)
- Changed element `CarePlan.statusHistory.status` value set binding to `http://hl7.org/fhir/care-plan-status`

#### PlanDefinition (ehealth-plandefinition)
- Changed element `topic` value set binding to `http://ehealth.sundhed.dk/vs/topic-type`

## 2019.5 (2019-05-07)

### General changes

- Updated operation examples for most of the resources

### Resource/profile changes

#### ActivityDefinition (ehealth-activitydefinition)
- Changed element `code` to be mandatory
- Added definition of `modifierRole` 

#### PlanDefinition (ehealth-plandefinition)
- Added definition of `modifierRole` 
- Added definition of `role` 

#### ProcedureRequest (ehealth-procedurerequest)
- Changed element `code` to require code from value set `http://ehealth.sundhed.dk/vs/activitydefinition-code`
- Changed element `code.coding` removed value set binding

## 2019.5 (2019-05-07)

### General changes

- Added operations examples for `ehealth-activitydefinition`, `ehealth-careplan`, `ehealth-careteam`, `ehealth-clinicalimpression`, `ehealth-communication`, `ehealth-message`, `ehealth-condition`, `ehealth-consent`, `ehealth-device`, `ehealth-devicemetric`, `ehealth-deviceUseStatement`, `ehealth-episodeofcare`, `ehealth-library`, `ehealth-media`, `ehealth-observation`, `ehealth-organization`, `ehealth-plandefinition`, `ehealth-practitioner`, `ehealth-practitionerRole`, `ehealth-procedurerequest`, `ehealth-provenance`, `ehealth-questionnaire` and `ehealth-questionnaireresponse`.
- Added custom operations for transformations between `DK-HL7 QRD/eHealth QuestionnaireResponse`, `DK-HL7 APD/eHealth Appointment` and `DK-HL7 PHRM/eHealth Observation`.
- Added `http://ehealth.sundhed.dk/fhir/` as base-url to intra-IG links
- Added operation examples for most of the resources 
- Changed `DK CRN Identifier`, `Identifier.assigner` marked Referenced
- Changed strength of all value bindings to "required"
- Added capabilitystatements for `Measurement Service`, `Organization Service`, `Questionnaire Service` and `Terminology Service`
- Updated capabilitystatement for `Patient Service`

### Custom operations

#### System operations
- Added description of `-s-submit-measurement`
- Added description of `-s-transformToObservation`
- Added description of `-s-transformToPHMR`
- Added description of `-s-transformToAppointment`
- Added description of `-s-transformToAPD`
- Added description of `-s-transformToQuestionnaireResponse`
- Added description of `-s-transformToQRD`
- Changed description of `-s-search-measurements`, parameter `period` now required
- Changed description of `-s-create-episode-of-care`
- Deleted `fetch-external-organizations`
- Deleted `fetch-external-practitioners`
- Deleted `search-organization-and-practitioner-external`

#### Instance operations
- Added description of `Library-i-evaluate` 
- Added description of `PlanDefinition-i-apply`
- Changed return value of `Library-i-evaluate` to `Parameters`

### Code systems
- Added `http://www.example.com/medcom/document-class`
- Added `http://snomed.info/sct`
- Added `http://www.example.com/medcom/message-codes`
- Added `http://ehealth.sundhed.dk/cs/reference-range-type`  
- Added `http://ehealth.sundhed.dk/cs/modifier-role`
- Added `http://ehealth.sundhed.dk/cs/conditions`
- Added `http://ehealth.sundhed.dk/cs/device-use-reason`
- Changed `http://ehealth.sundhed.dk/cs/careplan-status`
- Changed `http://ehealth.sundhed.dk/cs/careteam-participant-role`
- Changed `http://ehealth.sundhed.dk/cs/clinicalimpression-codes`
- Changed `http://ehealth.sundhed.dk/cs/clinicalimpression-finding-codes`
- Changed `http://ehealth.sundhed.dk/cs/decision-rule-codes`
- Changed `http://ehealth.sundhed.dk/cs/device-types`
- Changed `http://ehealth.sundhed.dk/cs/plandefinition-recommendation` 
- Changed `http://ehealth.sundhed.dk/cs/quality-types`
- Changed `http://ehealth.sundhed.dk/cs/questionnaire-recommendation`
- Changed `http://ehealth.sundhed.dk/cs/questionnaire-types`
- Changed `http://ehealth.sundhed.dk/cs/usage-quality`
- Changed (renamed) `http://ehealth.sundhed.dk/cs/submission-sharing-policy` to `http://ehealth.sundhed.dk/cs/submission-sharing-policies`  
- Changed (renamed) `http://ehealth.sundhed.dk/cs/submission-sharing-policies` to `http://ehealth.sundhed.dk/cs/measurement-sharing-policies`  
  
### ValueSets
- Added `http://ehealth.sundhed.dk/vs/clinicalimpression-codes`
- Added `http://ehealth.sundhed.dk/vs/device-use-reason`
- Added `http://ehealth.sundhed.dk/vs/event-type-codes`, referenced by
  - `ehealth-composition`
  - `ehealth-documentreference`
- Added `http://ehealth.sundhed.dk/vs/facility-type-codes`, referenced by
  - `ehealth-documentreference`
- `http://ehealth.sundhed.dk/vs/format-codes`, referenced by
  - `ehealth-documentreference`
  - `ehealth-plandefinition-role`      
- Added `http://ehealth.sundhed.dk/vs/modifier-role`
- Added `http://ehealth.sundhed.dk/vs/practice-setting-codes`, referenced by
  - `ehealth-documentreference`
- Added `http://ehealth.sundhed.dk/vs/reference-range-type`
- Changed `http://ehealth.sundhed.dk/vs/activitydefinition-code`
- Changed `http://ehealth.sundhed.dk/vs/careplan-category`
- Changed `ehealth-careplan-status`
- Changed `http://ehealth.sundhed.dk/vs/careteam-participant-role`
- Changed `http://ehealth.sundhed.dk/vs/clinicalimpression-finding-codes`
- Changed `http://ehealth.sundhed.dk/vs/decision-rule-codes`
- Changed `http://ehealth.sundhed.dk/vs/device-types`
- Changed `http://ehealth.sundhed.dk/vs/document-class`
- Changed `http://ehealth.sundhed.dk/vs/document-type`
- Changed `http://ehealth.sundhed.dk/vs/plandefinition-recommendation`
- Changed `http://ehealth.sundhed.dk/vs/ehealth-provenance-policies`
- Changed `http://ehealth.sundhed.dk/vs/quality-types`
- Changed `http://ehealth.sundhed.dk/vs/questionnaire-recommendation`
- Changed `http://ehealth.sundhed.dk/vs/questionnaire-types`
- Changed `http://ehealth.sundhed.dk/vs/topic-type`
- Changed `http://ehealth.sundhed.dk/vs/usage-quality`
- Changed (renamed) `http://ehealth.sundhed.dk/vs/submission-sharing-policies` to `http://ehealth.sundhed.dk/vs/measurement-sharing-policies`

### Resource/profile changes

#### ActivityDefinition (ehealth-activitydefinition)
- Added extension `modifierRole` as a replacement for elements `author` and `owner`
- Changed extension element `minimumQuality` to be of type `ehealth-quality`
- Deleted element `author`
- Deleted element `owner`

#### CarePlan (ehealth-careplan)
- Added extension `responsibilitySummary`
- Changed referenced resources to use aggregation type "referenced"
- Changed element `CarePlan.category` value set binding to `http://ehealth.sundhed.dk/vs/careplan-category`
- Deleted extension `monitoringResponsible`
- Deleted extension `monitoringResponsibleHistory`
 
#### CareTeam (ehealth-careteam)
- Changed referenced resources to use aggregation type "referenced"
- Changed element `documentation`

#### ClinicalImpression (ehealth-clinicalimpression)
- Changed referenced resources to use aggregation type "referenced"
- Changed resource description
- Changed element `ClinicalImpression.action` to support `ehealth-appointment`
- Changed element `ClinicalImpression.code` value set binding to `http://ehealth.sundhed.dk/vs/clinicalimpression-codes`

#### Condition (ehealth-condition)
- Changed referenced resources to use aggregation type "referenced"
- Changed element `Condition.note.author[x]` to support `ehealth-relatedperson`

#### Consent (ehealth-consent)
- Changed referenced resources to use aggregation type "referenced"
- Changed element `category` value set binding to `http://ehealth.sundhed.dk/vs/consent-category`

#### Communication (ehealth-correspondance)
- Changed referenced resources to use aggregation type "referenced"
- Changed element `category` to require code from value set `http://hl7.org/fhir/ValueSet/communication-category`

#### Communication (ehealth-message)
- Changed referenced resources to use aggregation type "referenced"
- Changed element `medium` is now optional (not always relevant)

#### Composition (ehealth-composition)
- Added resource and relevant ValueSets

#### Device (ehealth-device)
- Changed referenced resources to use aggregation type "referenced"

#### DeviceMetric (ehealth-devicemetric)
- Changed referenced resources to use aggregation type "referenced"

#### DeviceUseStatement (ehealth-deviceusestatement)
- Changed referenced resources to use aggregation type "referenced"
- Changed indication to require code from value set `http://ehealth.sundhed.dk/vs/device-use-reason`

#### DocumentReference (ehealth-documentreference)
- Added resource and relevant ValueSets

#### EpisodeOfCare (ehealth-episodeofcare)
- Changed referenced resources to use aggregation type "referenced"

#### GuidanceResponse (ehealth-guidanceresponse)
- Added the profile as it is used as return parameter in `library$evaluate` operation

#### Library (ehealth-library)
- Changed referenced resources to use aggregation type "referenced"
- Changed (renamed) element `parameterbinding.name` to `boundParameterName`

#### Media (ehealth-media)
- Changed referenced resources to use aggregation type "referenced"
- Changed the type of extension element `qualityType` and `qualityCode` to CodeableConcept
- Changed the type of extension element `ehealth-sharingPolicy` to CodeableConcept
- Removed `ehealth-careplan` from `Media.basedOn` element

#### Observation (ehealth-observation)
- Added element `specimen` referencing FHIR Specimen
- Changed referenced resources to use aggregation type "referenced"
- Changed the type of extension element `qualityType` and `qualityCode` to CodeableConcept
- Changed the type of extension element `ehealth-sharingPolicy` to CodeableConcept

#### Organization (ehealth-organization)
- Added extensions for `system` and `value` to be used inside `organization.contact.telecom`
- Changed referenced resources to use aggregation type "referenced"
- Changed element `contact.telecom.extension.system` to be mandatory

#### PlanDefinition (ehealth-plandefinition)
- Added extension `modifierRole` as a replacement for elements `author` and `owner`
- Deleted element `author`
- Deleted element `owner` 

#### Practitioner (ehealth-practitioner)
- Changed referenced resources to use aggregation type "referenced"

#### PractitionerRole (ehealth-practitionerrole)
- Changed referenced resources to use aggregation type "referenced"

#### ProcedureRequest (ehealth-procedurerequest)
- Changed referenced resources to use aggregation type "referenced"
- Deleted extension `responsible`
- Deleted extension `responsibleHistory`

#### Provenance (ehealth-detached-provenance)
- Added as an unchanged copy of the existing `ehealth-provenance` to allow `provenance` to exist on multiple HAPI FHIR instances

#### Provenance (ehealth-provenance)
- Changed referenced resources to use aggregation type "referenced".

#### Questionnaire (ehealth-questionnaire)
- Added extension `modifierRole` as a replacement for elements `author` and `custodian`
- Added element `type` as replacement of element `code`
- Added extension `QuestionnaireType`
- Changed referenced resources to use aggregation type "referenced"
- Changed element `code` to default with 0-0 cardinality
- Changed `recommendation` extension from Coding to CodeableConcept 
- Changed extension `QuestionnaireReuseCriteria` from Coding to CodeableConcept for elements `situationQuality`, `operationQuality` and `dataQuality`
- Changed extension `QuestionnaireRecommendation` from Coding to CodeableConcept 
- Deleted element `author`
- Deleted element `custodian`

#### QuestionnaireResponse (ehealth-questionnaireresponse)
- Changed referenced resources to use aggregation type "referenced"
- Changed the type of extension element `qualityType` and `qualityCode` to CodeableConcept
- Changed element `context` to be mandatory
- Changed element `subject` to be mandatory

#### RelatedPerson (ehealth-relatedperson)
- Added resource definition
- Changed element `relationship` value set should not be a ResourceReference
- Changed (renamed) `related-person` to `relatedperson` 
- Added description for contactNote

#### Task (ehealth-task)
- Changed referenced resources to use aggregation type "referenced"
- Changed `ehealth-task-category` to CodeableConcept type
- Added extension `responsible`

## v1.0.0 - 2019-03-06


---

// File: input/pagecontent/downloads.md

## Downloads
The following sections lists various links and artifacts that may be useful during development

### Tools, frameworks and supported programming languages
- See [https://hl7.org/fhir/R4/downloads.html](https://hl7.org/fhir/R4/downloads.html)

### Examples

Autogenerated examples are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)

### Downloadable Copy of schematrons

A downloadable version of profiles, valuesets and other profiles used in this IG is available for download:

- [Downloadable Copy](package.tgz)

---

// File: input/pagecontent/ehealth-documentreference-search.md

## search

OPERATION: DocumentReference search

This operation returns DocumentReference resources that match given input search criteria by forwarding the search as a query for document metadata on the national IHE XDS.b based document sharing infrastructure.

The operation implements the Document Responder actor of the ITI-67 Find Document References transaction of Integrating the Healthcare Enterprise (IHE) Mobile access to Health Documents (MHD) with XDS on FHIR option. The ITI-67 is described in [IHE ITI Supplement MHD](https://www.ihe.net/uploadedFiles/Documents/ITI/IHE_ITI_Suppl_MHD.pdf).

## Input
The name and definition of search parameters given below are elaborated in the Find Document References ITI-67 specification section [3.67.4.1.2.1 Query Search Parameters](https://profiles.ihe.net/ITI/MHD/ITI-67.html#23674121-query-search-parameters).

In addition, there are two parameters related to the ability to perform break-the-glass querying (in Danish known as værdispring):

* `consentOverride` signifies, when set to true, that the search (query) for document metadata shall be performed with override of any withholding of information in accordance with patient's consents possibly performed by the national document sharing service.
* `reason` is the user's rationale for choosing to override consents and it is mandatory when parameter `consentOverride` is set to true. The value is logged in the eHealth Infrastructure.


## Output
When available to the requesting user, DocumentReference resources corresponding to found XDS document metadata are returned. Also returned in the Bundle is an OperationOutcome capturing any errors and warnings possibly returned with the document sharing response, whether those reflect a Success or PartialSuccess.

In general, Coded values and identifiers in input must be stated using the url used in the eHealth Infrastructure. These are then automatically transformed to object identifier (OID) form for querying XDS. Similarly, OID in the XDS response is transformed automatically to url form in the output.

Note that the output `Bundle.total` might reflect a greater number than the number of entries actually returned. As there is no paging support for the query, this means that there are matching entries that are not returned. In this case, the client should split the search period into smaller ones until the total reflects the number of entries.

URL: `GET [base]/DocumentReference?<query>`

Parameters

| Use | Name               | Cardinality | Type      | Binding                                                                          | Documentation             |
|:--- | ------------------ |-------------|-----------|----------------------------------------------------------------------------------| ------------------------- |
| IN  | patient            | 0..1        | Reference |                                                                                  |                           |
| IN  | patient.identifier | 0..1        | token     |                                                                                  |                           |
| IN  | status             | 1..*        | code      | http://hl7.org/fhir/ValueSet/document-reference-status                           | current and/or superseded |
| IN  | date               | 0..1        | Period    |                                                                                  |                           |
| IN  | class              | 0..*        | token     | [http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-classcode-vs](https://docs.ehealth.sundhed.dk/latest-released/ig/ValueSet-dk-ihe-classcode-vs.html)                     |                           |
| IN  | type               | 0..*        | token     | [http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-typecode-vs](https://docs.ehealth.sundhed.dk/latest-released/ig/ValueSet-dk-ihe-typecode-vs.html)                    |                           |
| IN  | setting            | 0..*        | token     | [http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-practicesettingcode-vs](https://docs.ehealth.sundhed.dk/latest-released/ig/ValueSet-dk-ihe-practicesettingcode-vs.html)        |                           |
| IN  | period             | 0..*        | Period    |                                                                                  |                           |
| IN  | facility           | 0..*        | token     | [http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-healthcarefacilitytypecode-vs](https://docs.ehealth.sundhed.dk/latest-released/ig/ValueSet-dk-ihe-healthcarefacilitytypecode-vs.html) |                           |
| IN  | event              | 0..*        | token     | [http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-eventcodelists-vs](https://docs.ehealth.sundhed.dk/latest-released/ig/ValueSet-dk-ihe-eventcodelists-vs.html)             |                           |
| IN  | format             | 0..*        | token     | [http://sundhedsdatastyrelsen.dk/terminologi/dk-ihe-formatcode-vs](https://docs.ehealth.sundhed.dk/latest-released/ig/ValueSet-dk-ihe-formatcode-vs.html)                 |                           |
| IN  | consentOverride    | 0..1        | token     |                                                                                  |                           |
| IN  | reason             | 0..1        | String    |                                                                                  |                           |
| OUT | return             | 1..1        | Bundle    |                                                                                  |                           |




---

// File: input/pagecontent/error-messages.md

- `GENERAL_RESOURCE_NOT_FOUND`: Resource %s with id %s is not found.

- `GENERAL_SUBJECT_AND_CONTEXT_NOT_PROVIDED`: At least one of subject and context must be provided.

- `GENERAL_VALIDATION_ERROR`: Validation error: %s.

- `GENERAL_TIMING_VALIDATION_ERROR`: Timing is invalid for ServiceRequest with id %s and status %s: %s.

- `GENERAL_VALIDATION_ERROR_NO_OCCURRENCE`: Service request with id %s has no occurrence.

- `GENERAL_TIMING_OCCURENCE_WITHOUT_START_VALIDATION_ERROR`: ServiceRequest with id %s not valid with status: %s since occurrence timing has no start date.

- `GENERAL_TRIGGER_ENABLEMENT_VALIDATION_ERROR`: ServiceRequest cannot be changed from %s to %s %s

- `GENERAL_EXPORT_FAILED`: Export resource has failed.

- `GENERAL_CANONICAL_TARGET_NOT_ALLOWED_ERROR`: Unsupported target in canonical: %s

- `GENERAL_NAMING_SYSTEM_NOT_FOUND`: NamingSystem with identifier %s is not found.

#### ehealth-actionguidanceview

- `ACTIONGUIDANCEVIEW_ILLEGAL_CONTENT_SIZE`: Size of content is greater than the max allowed size. Content size: %s, max size: %s

- `ACTIONGUIDANCEVIEW_ILLEGAL_STATUS_CHANGE`: Illegal status change for action_guidance or view from %s and to %s

- `ACTIONGUIDANCEVIEW_ILLEGAL_CHANGE_OF_ELEMENTS`: Illegal element change in either EHealthActonGuidance or EhealthView. If status is equal to Active or Retired, only the following elements can be changed (Recommendation, IntendedAudience, useContext, modifierrole and status)

#### ehealth-activitydefinition

- `ACTIVITYDEFINITION_UPDATE_ALLOWED_FOR_STATUS`: Update is only allowed for ActivityDefinition with status: %s or %s.

- `ACTIVITYDEFINITION_UPDATE_TO_NOT_ALLOWED_STATE`: Update is not allowed for ActivityDefinition with %s status to different than %s status.

- `ACTIVITYDEFINITION_SHARINGAPPROVALPOLICY_NOT_ALLOWED`: Resource %s does not allow SharingApprovalPolicy to be set with code: %s | %s.

- `ACTIVITYDEFINITION_SHARINGAPPROVALPOLICY_NOT_SET`: Resource %s with code: %s | %s must have SharingApprovalPolicy set.

#### ehealth-appointment

- `APPOINTMENT_LISTENER_APPOINTMENT_MISSING_CAREPLAN`: Appointment has no CarePlan

#### ehealth-assembler

- `ASSEMBLER_QRD_FOUND_NON_OR_SEVERAL_MATCHES_FOR_QFDD_DOCUMENT_REFERENCE`: Found non or more than 1 match for QFDD DocumentReference. Identifier: system: %s, value: %s.

- `ASSEMBLER_QRD_NOT_ABLE_TO_DETERMINE_QFDD_REFERENCE`: Not able to determine QFDD reference from questionnaire.identifier. Non or more than 1 identifier system starting with 'urn:oid'. Questionnaire: %s.

- `ASSEMBLER_QRD_QR_SOURCE_IS_UNSUPPORTED`: QuestionnaireResponse with id: '%s' has source '%s', which is not supported - Skipping publication

- `ASSEMBLER_APD_MISSING_SUPPORTING_INFORMATION`: Appointment must have supportingInformation

- `ASSEMBLER_APD_MISSING_PATIENT_PARTICIPANT`: Appointment must have at least one Patient participant

- `ASSEMBLER_APD_MISSING_RESPONSIBLE_ORGANIZATION`: Appointment must have responsible-organization

- `ASSEMBLER_APD_MISSING_PERFORMER`: Appointment must have performer

- `ASSEMBLER_APD_MISSING_RESPONSIBLE_PRACTITIONER`: Appointment must have responsible Practitioner

- `ASSEMBLER_APD_MISSING_PATIENT_CPR`: Patient has no CPR number

- `ASSEMBLER_PHMR_UNKNOWN_AUTHOR_TYPE`: Unknown author type:

#### ehealth-careplan

- `CAREPLAN_APPLY_NO_PLANDEFINITION`: There is no PlanDefinition with id %s

- `CAREPLAN_APPLY_NOT_ACTIVE_PLANDEFINITION`: The apply operation can only be performed on Plandefinitions with status "active"

- `CAREPLAN_APPLY_EPISODE_OF_CARE_REFERENCE_NOT_SPECIFIED`: EpisodeOfCare reference must be specified

- `CAREPLAN_APPLY_PLAN_DEFINITION_REFERENCE_NOT_SPECIFIED`: PlanDefinition reference must be specified

- `CAREPLAN_APPLY_CAN_NOT_FIND_ACTIVITY_DEFINITION`: Can not find activity definition with id :%s

- `CAREPLAN_NOT_FOUND`: CarePlan is not found.

- `CAREPLAN_SEARCH_SUBJECT_CONTEXT_OR_RESPONSIBLE_ACTOR_IS_NOT_SPECIFIED`: At least subject, context or responsible actor must be specified

#### ehealth-careteam

- `CARETEAM_GENERAL_EXTERNAL_SECURITY_TOKEN_CARETEAM_IDENTIFIER_SYSTEM_IS_MISSING`: The CareTeam must contain an identifier using system "urn:ietf:rfc:3986"

#### ehealth-cda

- `CDA_XML_VALIDATION_FAILED`: Validation of the CDA XML failed: %s

#### ehealth-codesystem

- `CODESYSTEM_CONCEPT_CHANGE_NOT_ALLOWED_WHEN_ACTIVE`: Not allowed to remove or update concept when status is active.

#### ehealth-communicationrequest

- `COMMUNICATIONREQUEST_CONTEXT_NOT_MATCHING_SERVICEREQUEST`: The context for the CommunicationRequest: %s does not match the context of the referenced ServiceRequest: %s

- `COMMUNICATIONREQUEST_SUBJECT_NOT_MATCHING_RECIPIENT`: Patient recipient: %s does not match the subject: %s

- `COMMUNICATIONREQUEST_SUBJECT_NOT_MATCHING_SERVICEREQUEST`: The subject for the CommunicationRequest: %s does not match the subject of the referenced ServiceRequest: %s

- `COMMUNICATIONREQUEST_EXCACTLY_ONE_RECIPIENT_SEARCHPRARAM`: Excactly one recipient search parameter required

#### ehealth-context

- `CONTEXT_VALIDATION_EPISODEOFCARE_EXCEPTION`: Episode of care does not match the security token context

#### ehealth-definition

- `DEFINITION_WITHOUT_SELF_TREATMENT_TOPIC`: %s has to be with self-treatment topic

#### ehealth-device

- `DEVICE_WRITE_WRONG_PATIENT_CONTEXT`: User with patient context can only read devices that has been issued to the patient

- `DEVICE_WRITE_WRONG_ORGANIZATION_CONTEXT`: User must be logged into the organization that is the owner of the device

- `DEVICE_METRIC_WRITE_WRONG_ORGANIZATION_CONTEXT`: User must be logged into the organization that is the owner of the device

- `DEVICE_USE_STATEMENT_WRITE_WRONG_ORGANIZATION_CONTEXT`: User must be logged into the organization that is the owner of the device

- `DEVICE_WRONG_PATIENT_CONTEXT`: User with patient context can only interact with devices that has been issued to the patient or not issued to anyone yet

- `DEVICE_WRITE_NON_PRIVATELY_OWNED`: Patient user can only create/update privately owned devices

#### ehealth-document

- `DOCUMENT_NOT_OF_TYPE_QFDD`: The document is expected to be of type QFDD

- `DOCUMENT_QUERY_SOR_ORGANIZATION_REQUIRED`: Security token organization context must be a SOR organization for query

- `DOCUMENT_QUERY_XDS_ERROR`: The following errors where received from Document Sharing

- `DOCUMENT_QUERY_DOCUMENT_URL_NOT_CORRECT_FORMAT`: Url doesn't have expected format: <DocumentEntry.uniqueId>_<DocumentEntry.repositoryUniqueId>_<DocumentEntry.homeCommunityId>

- `DOCUMENT_QUERY_DOCUMENT_NOT_VALID_TYPE`: Requested document type is not valid. The requested type was %s, but the operation only supports %s

- `DOCUMENT_QUERY_DOCUMENT_NOT_VALID_XML`: Retrieved document is not valid XML

- `DOCUMENT_QUERY_REASON_NOT_PRESENT_WHEN_CONSENT_OVERRIDDEN`: Reason is mandatory when the consent is overridden

#### ehealth-documentreference

- `DOCUMENTREFERENCE_SUBJECT_REFER_TO_PATIENT`: It is not possible to set a patient as a subject for a Document reference

#### ehealth-episodeofcare

- `EPISODEOFCARE_CREATE_WRONG_EOC_COUNT`: Bundle has to contain only one Episode of Care

- `EPISODEOFCARE_CREATE_UNSUPPORTED_RESOURCE_TYPE`: Bundle contains unsupported resource type

- `EPISODEOFCARE_CREATE_INCORRECT_PROVENANCE_TARGET`: Provenance has incorrect target

- `EPISODEOFCARE_CREATE_NO_REQUIRED_PROVENANCE_POLICIES`: No provenance with required policies

- `EPISODEOFCARE_CREATE_INCORRECT_CONDITION_SUBJECT`: EpisodeOfCare and Condition doesn't point to the same Patient

- `EPISODEOFCARE_PATCH_NO_CONSENT`: No valid Episode Of Care related consent

- `EPISODEOFCARE_CREATE_PATIENT_MUST_BE_ACTIVE_AND_NOT_DECEASED`: Patient.active must be true and Patient.deceased must be false to create episode of care

- `EPISODEOFCARE_CREATE_STATUS_HISTORY_NOT_EMPTY`: It is not allowed to fill status history manually

- `EPISODEOFCARE_CREATE_EPISODE_OF_CARE_IN_NON_PLANNED_STATUS`: It is only possible to create an episode of care in status 'Planned'

- `EPISODEOFCARE_CREATE_TEAM_HISTORY_NOT_EMPTY`: It is not allowed to fill team history manually

- `EPISODEOFCARE_CREATE_PATIENT_DOESNT_MATCH_CONTEXT`: Episode of care patient doesn't match to the context

- `EPISODEOFCARE_IS_CONTEXT_ALLOWED_MATCH_NOT_FOUND`: It is not possible to set the Episode Of Care as a context

- `EPISODEOFCARE_TEAM_REFERENCE_MISSING`: It is not possible to add or replace team without a CareTeam reference

#### ehealth-library

- `LIBRARY_EVALUATE_NO_INPUT_PARAMETER`: An input parameter of type Parameters should be provided.

- `LIBRARY_EVALUATE_INCORRECT_INPUT_PARAMETER`: Input parameter 'parameters' should contain exactly one resource of type QuestionnaireResponse, Observation or Media.

- `LIBRARY_EVALUATE_NO_RULE_DEFINED`: Library with id %s do not contain a rule to use for evaluation.

- `LIBRARY_EVALUATE_NO_CAREPLAN_REFERENCING_PROVIDED_PROCEDUREQUEST`: CarePlan with reference to ServiceRequest with id %s is not found.

- `LIBRARY_EVALUATE_RULE_SYNTAX_ERRORS`: Syntax for rule is invalid. %s

- `LIBRARY_EVALUATE_OUTPUT_PARAMETER_NOT_SUPPORTED`: Output parameter of type %s is not supported.

- `LIBRARY_EVALUATE_INPUT_PARAMETER_NOT_SUPPORTED`: Input parameter of type %s is not supported.

- `LIBRARY_EVALUATE_UNEXPECTED_LIBRARY`: Evaluate is invoked on Library with id %s. This Library is not the expected Library referenced by the ActivityDefinition.

- `LIBRARY_EVALUATE_UNABLE_TO_RESOLVE_RESOURCE`: Not able to resolve %s when input is of type %s.

- `LIBRARY_EVALUATE_DURATION_UNIT_CODE_UNKNOWN`: Unsupported code %s for Duration.code. Duration.code should be a valid UCUM code. Supported codes are ('s', 'min', 'h', 'd', 'wk', 'mo', 'a').

- `LIBRARY_EVALUATE_LOGIC_RULE_INVALID_INPUT`: Error evaluating logic rule. Category: %s, Focus: %s, RuleDescription: %s

- `LIBRARY_IDENTIFIER_UPDATE_RESTRICTED`: Validation error: attempt to update Library Identifiers list.

- `LIBRARY_UNKNOWN_IDENTIFIER`: Unable to find unique Library with identifier: %s and name: %s. Number of search results: %s

- `LIBRARY_MISSING_IDENTIFIER`: Library with identifier: %s and name: %s does not have identifier of type: %s

#### ehealth-measurement

- `MEASUREMENT_SEARCHMEASUREMENT_PERIOD_NOT_SPECIFIED`: Period must be specified

- `MEASUREMENT_SEARCHMEASUREMENT_PATIENT_AND_EPISODE_NOT_SPECIFIED`: At least patient or episodeOfCare must be specified

- `MEASUREMENT_SEARCHMEASUREMENT_PATIENT_AND_EPISODE_AND_SERVICEREQUEST_NOT_SPECIFIED`: At least one patient, episodeOfCare or serviceRequest must be specified

- `MEASUREMENT_SEARCHMEASUREMENT_COUNT_NOT_SPECIFIED`: A positive number for Count must be specified

- `MEASUREMENT_SEARCHMEASUREMENT_COUNT_LIMIT_EXCEEDED`: Count limit of 100 exceeded

- `MEASUREMENT_SEARCHMEASUREMENT_START_OR_END_NOT_SPECIFIED`: Either start or end must be provided, but none was provided

- `MEASUREMENT_SEARCHMEASUREMENT_START_AND_END_BOTH_SPECIFIED`: Both start and end cannot be specified

- `MEASUREMENT_SEARCHMEASUREMENT_UNSUPPORTED_REFERENCE`: Unsupported resource reference, expected %s but was %s

- `MEASUREMENT_SEARCHMEASUREMENT_UNSUPPORTED_DEVICE_REFERENCE`: Unsupported device reference

- `MEASUREMENT_SEARCHMEASUREMENT_UNSUPPORTED_BASEDON_REFERENCE`: Unsupported based-on reference: %s

- `MEASUREMENT_SEARCHMEASUREMENT_REFERENCED_RESOURCE_NOT_FOUND`: Referenced resource not found: %s

- `MEASUREMENT_SUBMITMEASUREMENT_INVALID_OBSERVATION_CODE`: Observation.code does not match the code of the referenced ServiceRequest with id %s.

- `MEASUREMENT_SUBMITMEASUREMENT_INVALID_QUESTIONNAIRE_REFERENCE`: Questionnaire reference with id %s is unexpected. Expected questionnaire reference to match questionnaire reference of related ActivityDefinition with id %s.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_SHOULD_REFERENCE_PATIENT`: Input resources of type EHealthObservation, EHealthMedia and EHealthQuestionnaireResponse should reference a patient.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_SHOULD_REFERENCE_EPISODEOFCARE`: Input resources of type EHealthObservation, EHealthMedia and EHealthQuestionnaireResponse should reference an episode of care.

- `MEASUREMENT_SUBMITMEASUREMENT_EMPTY_INPUT_BUNDLE`: The input bundle does not contain any resources.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_BUNDLE_CONTAINS_NONE_OF_EXPECTED_RESOURCES`: The input bundle does not contain any resources of type EHealthObservation, EHealthMedia, EHealthQuestionnaireResponse.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_BUNDLE_CONTAINS_INVALID_RESOURCES`: The input bundle contains resources which are not of type EHealthObservation, EHealthMedia, EHealthQuestionnaireResponse or EHealthProvenance.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_PROVENANCE_INVALID_POLICY`: Submitted provenances should use the policy 'Reuse of measurement chosen by citizen'

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_PROVENANCE_REFERENCE_MISSING`: EHealthProvenance resource is referencing %s but it is not provided as part of the input.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_PROVENANCE_NOT_SINGLE_TARGET`: Provenance.target should have exactly one reference.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_PROVENANCE_TARGET_AND_ENTITY_SHOULD_BE_SAME_TYPE`: Provenance.target and Provenance.entity should be of same type.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_PROVENANCE_TARGET_AND_ENTITY_SHOULD_REFERENCE_SAME_PATIENT`: Provenance.target and Provenance.entity should reference the same patient

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_PROVENANCE_TARGET_AND_ENTITY_SHOULD_USE_SAME_DATE`: Provenance.target and Provenance.entity should use the same date.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_PROVENANCE_ENTITY_IS_REUSING`: Provenance.entity is reusing another measurement and thus can not be used for reuse.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_PROVENANCE_INVALID`: %s is invalid.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_PROVENANCE_NOT_SINGLE_ENTITY`: Provenance.entity should have exactly one reference.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_FOR_DIFFERENT_PATIENTS`: The resources provided are for different patients.

- `MEASUREMENT_SUBMITMEASUREMENT_INPUT_NOT_PART_OF_SAME_EPISODEOFCARE`: The resources provided are not all part of the same episode of care.

- `MEASUREMENT_SUBMITMEASUREMENT_PROCEDURE_REQUEST_IS_NOT_ACTIVE`: Procedure request with id:[%s] is not active.

- `MEASUREMENT_SUBMITMEASUREMENT_ACTIVITYDEFINITION_MISSING_QUESTIONNAIRE_REFERENCE`: ActivityDefinition with id %s does not contain a relatedArtifact with a Questionnaire reference

- `MEASUREMENT_SUBMITMEASUREMENT_DIFFERENT_PATIENT_REFERENCE`: The patient referenced by the EpisodeOfCare is different than the patient referenced by the provided resources

- `MEASUREMENT_SUBMITMEASUREMENT_REUSE_NOT_ALLOWED`: Reuse of resource with id %s is not allowed.

- `MEASUREMENT_SUBMITMEASUREMENT_ASSOCIATED_QUALITY_NOT_PRESENT`: Associated quality %s is not present on submitted resource. Reuse of resource is not allowed.

- `MEASUREMENT_SUBMITMEASUREMENT_QUALITY_IS_NOT_SUBSUMED`: Quality %s does not subsume %s. Reuse of resource is not allowed.

- `MEASUREMENT_SUBMITMEASUREMENT_RESOURCE_TO_OLD_TO_BE_USED_FOR_REUSE`: Reuse of resource is not allowed due to the resource being too old.

- `MEASUREMENT_SUBMITMEASUREMENT_DURATION_UNIT_CODE_UNKNOWN`: Unsupported code %s for Duration.code. Duration.code should be a valid UCUM code. Supported codes are ('s', 'min', 'h', 'd', 'wk', 'mo', 'a').

- `MEASUREMENT_SUBMITMEASUREMENT_MORE_THAN_ONE_DEVICE_QUALITY`: Only one device quality allowed for each observation/media

- `MEASUREMENT_SUBMITMEASUREMENT_INVALID_RESOLVED_TIMING`: ResolvedTiming must have either type=Resolved and start/end or type=Unresolved/Adhoc/Extra and no start/end

- `MEASUREMENT_SUBMITMEASUREMENT_TOO_MANY_ANSWERS`: QuestionnaireResponse: %s has too many answers for the item with linkId: %s

- `MEASUREMENT_SUBMITMEASUREMENT_TOO_FEW_ANSWERS`: QuestionnaireResponse: %s has too few answers for the item with linkId: %s

- `MEASUREMENT_GET_DATA_NO_DATA_FOUND`: Encrypted media data with id %s was not found

#### ehealth-observation

- `OBSERVATION_MEDIA_NOT_SUPPORTED_MESSAGE`: Measurement was of media type. This was not translated to an observation since it is not supported in FHIR

#### ehealth-organization

- `ORGANIZATION_SOURCE_MUST_BE_MANUAL`: The operation can only be performed for Organization with source "manual"

- `ORGANIZATION_IDENTIFIER_MUST_BE_SSL_WHEN_SOURCE_MANUAL`: The operation can only be performed for SSL Organizations when the source is "manual"

- `ORGANIZATION_IDENTIFIER_NOT_UNIQUE`: Organization Identifier not unique: %s

- `ORGANIZATION_IDENTIFIER_SYSTEM_NOT_ALLOWED_FOR_SOURCE_MANUAL`: Identifier system is not allowed for Organization with source "manual"

- `ORGANIZATION_TRAVERSE_TO_SOR_NOT_POSSIBLE`: No related SOR organization could be found for: %s

- `ORGANIZATION_IDENTIFIER_MUST_CONTAIN_AT_LEAST_CVR_FOR_SOURCE_MANUAL`: Identifier system CVR required for Organization with source "manual"

- `ORGANIZATION_UNKNOWN_IDENTIFIER`: Unable to find unique Organization with identifier: %s. Number of search results: %s

- `ORGANIZATION_MISSING_IDENTIFIER`: Organization %s does not have identifier of type: %s

#### ehealth-plandefinition

- `PLANDEFINITION_UPDATE_ALLOWED_FOR_STATUS`: Update is only allowed for PlanDefinition with status: %s or %s.

- `PLANDEFINITION_UPDATE_TO_NOT_ALLOWED_STATE`: Update is not allowed for PlanDefinition with %s status to different than %s status.

- `PLANDEFINITION_VALIDATE_MANDATORY_ACTIVITYDEFINITION_OR_SUBPLAN_REFERENCE`: At least one activity definition or subplan should be referenced.

- `PLANDEFINITION_VALIDATE_ALL_REFERENCED_ACTIVITYDEFINITIONS_OR_SUBPLANS_SHOULD_BE_ACTIVE`: All referenced activity definitions or subplans should be with state: "active"

- `PLANDEFINITION_MISSING_RELATED_ACTION`: An action points to a non-existing related action

#### ehealth-provenance

- `PROVENANCE_NO_READ_PRIVILEGE`: User must be logged in with the provenance read privilege

- `PROVENANCE_NO_SEARCH_PRIVILEGE`: User must be logged in with the provenance search privilege

- `PROVENANCE_SEARCH_DATA_NOT_MATCH_CONTEXT`: The target property should match to the episode of care in context

#### ehealth-qfdd

- `QFDD_DISPLAY_ITEM_MUST_HAVE_A_TEXT`: Display item must have a text. LinkId: %s

- `QFDD_NARRATIVE_MISSING_EXTENSION_ERROR`: Information section does not have a rendering-xhtml extension. LinkId: %s

#### ehealth-questionnaire

- `QUESTIONNAIRE_NOT_ALLOWED_TO_UPDATE_IN_STATUS`: Update is not allowed for questionnaires with statuses: %s, %s

- `QUESTIONNAIRE_NOT_ALLOWED_TO_UPDATE_STATUS`: Update is not allowed for questionnaires with %s status to different than %s status

- `QUESTIONNAIRE_NOT_ALLOWED_TO_DELETE_WITH_STATUS`: Delete only possible for questionnaires with status: %s

- `QUESTIONNAIRE_IMAGE_FORMAT_VALIDATION_MESSAGE`:
  %s Image in questionnaire item with linkID %s and Binary contentType %s does not match any code in ValueSet: %s

- `QUESTIONNAIRE_IMAGE_SIZE_VALIDATION_MESSAGE`:
  %s Image in questionnaire item with linkID %s exceeds the maximum size of %s kB

- `QUESTIONNAIRE_QFDD_DOES_NOT_EXIST_IN_DOCUMENT_TRANSFORMATION`: The QFDD with the identifier %s does not exist in document transformation

- `QUESTIONNAIRE_TERMINOLOGY_HELPER_CODE_NOT_FOUND`: Code %s for CodeSystem %s not found

- `QUESTIONNAIRE_TERMINOLOGY_HELPER_CODE_SYSTEM_NOT_FOUND`: Code system not found for url: %s

- `QUESTIONNAIRE_TERMINOLOGY_HELPER_CODE_SYSTEM_FOUND_MORE_THAN_ONE`: Found more than one code system for url: %s

#### ehealth-reporting

- `REPORTING_MISSING_INPUT_PARAMETER`: Parameter "%s" is mandatory for report "%s".

- `REPORTING_REPORT_GENERATION_FAILED`: Report generation has failed

- `REPORTING_SYNCHRONOUS_GENERATION_NOT_ALLOWED`: Synchronous generation of the report is not allowed

- `REPORTING_SCHEDULE_NOT_ALLOWED`: Scheduled generation of the report is not allowed

- `REPORTING_EXECUTE_NOT_ALLOWED`: Asynchronous generation of the report is not allowed

- `REPORTING_MUTUALLY_EXCLUSIVE_INPUT_PARAMETER`: Parameters "%s" and "%s" are mutually exclusive for report "%s".

#### ehealth-security

- `SECURITY_TOKEN_CONTEXT_NOT_ALLOWED`: Security token context not allowed: %s

- `SECURITY_TOKEN_INSUFFICIENT_PERMISSION`: Insufficient permission for %s for %s

- `SECURITY_USER_NOT_ALLOWED`: Resource not allowed for user: %s

- `SECURITY_TOKEN_CONTEXT_MISSING`: Security token context missing for user type: %s

- `SECURITY_TOKEN_CONTEXT_MISSING_CONTEXT`: Security token context missing for context type: %s

- `SECURITY_RESOURCE_NOT_MATCHING_TOKEN_CONTEXT`: Resource not matching security token context: %s

- `SECURITY_OPERATION_NOT_ALLOWED_FOR_USER_TYPE`: Operation not allowed for user type: %s

- `SECURITY_SEARCH_PARAM_NOT_MATCHING_TOKEN_CONTEXT`: Search parameters not matching security token context: %s

- `SECURITY_SEARCH_PARAMS_MANDATORY`: Search parameters mandatory with current user type and combination of search parameters: %s

- `SECURITY_SEARCH_OPERATION_POST_CONSTRAINT`: Search on %s only supports POST style.

#### ehealth-status

- `STATUS_SCHEDULE_PAUSE_MAX_30_DAYS`: A scheduled pause may not last more than 30 days

- `STATUS_SCHEDULE_IDENTICAL_TIME`: Multiple status changes may not be scheduled to be activated simultaneously

#### ehealth-system

- `SYSTEM_TAG_UNEXPECTED_TAG`: Resource contains system tag(s), which do not match related resource.

#### ehealth-task

- `TASK_INVESTIGATION_ITEM_REFERENCES_MUST_HAVE_VERSION_AND_VERSIONLESS`: Investigation references must have an item with version and one versionless

- `TASK_RESTRICTION_CATEGORY_NONE_CANT_BE_COMBINED`: Restriction category 'None' can't be combined with others

- `TASK_RESTRICTION_CATEGORY_NOT_MATCHING_TOKEN_CONTEXT`: Restriction category '%s' does not match token context

- `TASK_MEASUREMENT_PROCESSING_FAILED`: Measurement processing failed for Provenance %s

- `TASK_AUTOMATED_PROCESSING_RESOURCE_HANDLER_INVALID_JSON`: Unable to parse json string: %s.

- `TASK_AUTOMATED_PROCESSING_INVALID_INPUT_RESOURCE`: Resource of type %s is not a valid input resource.

- `TASK_AUTOMATED_PROCESSING_MISSING_MEASUREMENT_PROCEDURE_REQUEST`: Could not determine if measurement is missing for procedure request: %s.

- `TASK_AUTOMATED_PROCESSING_FAILING_REQUESTS_JOB_TERMINATED`: Limit of %s consecutive failing requests is reached. Scheduled audit job is terminated.

- `TASK_AUTOMATED_PROCESSING_CAREPLAN_NOT_FOUND`: CarePlan is not found when searching by activity: %s.

- `TASK_AUTOMATED_PROCESSING_RULE_OUTPUT_NOT_FOUND`: RuleOutput not found when searching through Task Automated Processing Resource

- `TASK_FOR_NOT_SET`: When episode of care is set, the field 'for' must reference the corresponding patient

#### ehealth-transformation

- `TRANSFORMATION_DEPRECATE_DOCUMENT_CPR_DIDNT_MATCH`: Found document didn't match with CPR

- `TRANSFORMATION_DEPRECATE_DOCUMENT_MORE_THAN_ONE_FOUND`: More than 1 DocumentReference with same master identifier found. The master identifier should be unique.

- `TRANSFORMATION_DEPRECATE_DOCUMENT_NO_DOCUMENT_FOUND`: No matching document found

- `TRANSFORMATION_QFDD_UNKNOWN_QUESTION_TYPE`: Unknown QFDD question type. Question id: %s

- `TRANSFORMATION_QFDD_UNSUPPORTED_STRUCTURE`: The root item structure was neither an Information Only Section nor a Question Section. LinkId:  %s

- `TRANSFORMATION_QFDD_XML_MISSING`: Invalid input document reference, it must contain content with data of QFDD xml

- `TRANSFORMATION_QFDD_ITEM_WITH_SLIDER_MISSING_STEPVALUE`: Questionnaire item with linkId '%s' has itemControl: 'slider' but has no step value extension.

- `TRANSFORMATION_QFDD_ITEM_WITH_SLIDER_NOT_MATCHING_DISCRETE_SLIDER`: Questionnaire item with linkId '%s' has itemControl: 'slider' but either repeats if true. Was: %s. or maxOccursValue is larger than 1. Was: %s.

- `TRANSFORMATION_QFDD_CODESYSTEM_TITLE_MISSING`: CodeSystem title is missing, for CodeSystem with url: %s

- `TRANSFORMATION_QFDD_QUESTION_NARRATIVE_FILE_TEMPLATE_ERROR`: Template for question section narrative can't be found or written.

- `TRANSFORMATION_QFDD_QUESTION_NARRATIVE_TEMPLATE_SYNTAX_ERROR`: Could not process template for question section narrative due to syntax errors or missing variables

- `TRANSFORMATION_QRD_INVALID_INPUT_PARAMETERS`: Input bundle should contain just one EHealthComposition, EHealthQuestionnaireResponse, EHealthQuestionnaire and DocumentReference(QFDD).

- `TRANSFORMATION_FROM_QRD_INVALID_INPUT_PARAMETERS`: Input bundle should contain just one EHealthQuestionnaire and DocumentReference(QRD).

- `TRANSFORMATION_FROM_QRD_DUPLICATED_EXTERNAL_IDENTIFIER`: Cannot transform from QRD to QuestionnaireResponse. Duplicated external identifiers: %s.

- `TRANSFORMATION_FROM_QRD_EXTERNAL_DOCUMENT_NOT_MATCHING_QFDD_IDENTIFIER_ON_QUESTIONNAIRE`: External Document reference in QRD does not match QFDD identifier on Questionnaire. External Document reference: '%s'. QFDD identifier on Questionnaire: '%s'.

- `TRANSFORMATION_FROM_QRD_NO_EXTERNAL_DOCUMENT_FOUND_IN_QRD`: No External Document reference found in QRD.

- `TRANSFORMATION_FROM_QRD_NO_QFDD_IDENTIFIER_ON_QUESTIONNAIRE`: Questionnaire does not have a QFDD identifier. No identifier with system starting with 'urn:oid'.

- `TRANSFORMATION_FROM_QRD_COULD_NOT_FIND_PARENT_FOR_LINK_ID`: Could not find parent for item with linkId: %s.

- `TRANSFORMATION_FROM_QRD_QRD_HAS_NO_SECTIONS`: QRD has no sections with questions.

- `TRANSFORMATION_FROM_QRD_QRD_QUESTION_TYPE_DOES_NOT_MATCH_QUESTIONNAIRE_ITEM_TYPE`: QRD Question type '%s' does not match questionnaire item type '%s'. LinkId: %s.

- `TRANSFORMATION_QRD_UNSUPPORTED_QUESTION_TYPE`: Unsupported Questionnaire type: '%s'.

- `TRANSFORMATION_QRD_INVALID_NUMBER_OF_ANSWERS`: QuestionnaireResponse item should contain from '%s' to '%s' answers. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_SLIDER_MISMATCH_BETWEEN_TYPE_AND_SLIDER_STEP`: Questionnaire item with linkId '%s' has itemControl: 'slider' and item.type: 'Integer' but has decimal step value: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_INVALID_SLIDER_EXTENSIONS`: Questionnaire item with linkId '%s' has itemControl: 'slider', therefore it must contain at least the following extensions: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_NO_SLIDER_STEP_EXTENSION`: Questionnaire item with linkId '%s' has itemControl: 'slider', therefore it must contain one of the following extensions: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_NO_SLIDER_ITEM_CONTROL_EXTENSION`: Questionnaire item with linkId '%s' has no itemControl extension with code: 'slider'.

- `TRANSFORMATION_QRD_MISSING_IDENTIFIER`: Identifier on composition is mandatory

- `TRANSFORMATION_QRD_XML_MISSING`: Invalid input document reference, it must contain content with data of QRD xml

- `TRANSFORMATION_QRD_EXPECTING_DISPLAY_ITEM_FOR_INFO_SECTION`: QFDD section with title '%s' has no organizers(Information Only Section). Expecting FHIR Questionnaire root group to have exactly one item of display. Found %s items. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_EXPECTING_DISPLAY_ITEM_FOR_INFO_SECTION_FOUND_OTHER_TYPE`: QFDD section with title '%s' has no organizers(Information Only Section). Expecting FHIR Questionnaire root group to contain exactly one item of type 'display'. Found item of type: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_EXPECTING_DISPLAY_ITEM_FOR_COPYRIGHT_SECTION`: Expecting FHIR Questionnaire root group to have one or more items of type display for structure matching QFDD section with title '%s'. Found %s items. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_EXPECTING_DISPLAY_ITEM_FOR_COPYRIGHT_SECTION_FOUND_OTHER_TYPE`: Expecting FHIR Questionnaire root group to contain only sub items of type 'display'. QFDD section with title '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_EXPECTING_DISPLAY_ITEM_TO_MATCH_COPYRIGHT_ENTRIES_IN_QFDD`: Expecting FHIR Questionnaire root group to contain the same number of display items as copyright entries in the matching QFDD section. QFDD section with title '%s'. Found %s items, expecting %s items. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_EXPECTING_ROOT_GROUP_TO_BE_COPYRIGHT`: Expecting FHIR Questionnaire root group isCopyright to be true as corresponding QFDD section is a copyright section. QFDD section with title '%s'. QuestionnaireResponse: '%s'

- `TRANSFORMATION_QRD_EXPECTING_COPYRIGHT_SUBITEMS_TO_HAVE_IS_COPYRIGHT_TRUE`: Expecting FHIR Questionnaire root group to contain sub items with isCopyright set to true as corresponding QFDD section is a copyright section. QFDD section with title '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_NUMBER_OF_ITEMS_IN_ROOT_GROUP_DOES_NOT_MATCH_NUMBER_OF_ORGANIZERS`: QFDD section with title '%s' has %s organizers. Expect FHIR Questionnaire root group to contain the same number of items with type 'group'. Found: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_EXPECTING_ONLY_SUB_GROUPS_IN_ROOT_GROUP`: QFDD section with title '%s' has %s organizers. Expect FHIR Questionnaire root group to contain only items of type: 'group'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_EXPECTING_ROOT_ITEM_TO_BE_OF_TYPE_GROUP`: Root item on questionnaire is not of type 'group'. Type was: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_EXPECTING_ITEM_TO_BE_OF_TYPE_GROUP`: Item is not of type group. Type: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_NUMBER_OF_ITEMS_ON_ROOT_LEVEL_DOES_NOT_MATCH_NUMBER_OF_SECTIONS`: The number of root items on questionnaire does not match the number of QFDD sections. Questionnaire: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_FOUND_MORE_THAN_ONE_MATCH_FOR_LINKID_IN_QUESTIONNAIRE_RESPONSE`: Found more than 1 match for LinkId in QuestionnaireResponse. LinkId: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_EXPECTING_QUESTIONNAIRE_TIEM_TO_HAVE_EXTERNAL_IDENTIFIER`: Expected questionnaireItem to have externalIdentifier: '%s'. But was: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_FOUND_NO_QUESTIONNAIRE_RESPONSE_FOR_ASSOCIATED_TEST_QUESTION`: Found no QuestionnaireResponse for associatedTextQuestion. Found Questionnaire item with linkId: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_PRECONDITION_DO_NOT_MATCH_THE_QUESTION_FOR_ASSOCIATED_TEXT_QUESTION`: The precondition criterion code does not match the expected question code. Expected: '%s'. But was: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_MULTIPLE_CHOICE_ANSWER_EXPECTING_CODING_TYPE_FOR_VALUE`: Expecting answer value to be of type Coding. QuestionResponseItem with linkId: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_PRECONDITION_GROUP_GROUP_TYPE_UNKNOWN`: Unknown GroupType: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_PRECONDITION_MORE_THAN_ONE`: Transformation do not support more than one precondition for associatedTextQuestion. Found '%s'. AssociatedTextQuestion: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_EXPECT_IMAGE_IN_QUESTIONNAIRE_ITEM`: Expecting QuestionnaireItem to have an image as the corresponding QFDD question has an image. Question id: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_NOT_EXPECTING_IMAGE_IN_QUESTIONNAIRE_ITEM`: Not expecting QuestionnaireItem to have an image as the corresponding QFDD question do not have an image. Question id: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_UNKNOWN_QRD_RESPONSE_TYPE`: Unknown QRD response type. QRD Question id: '%s'

- `TRANSFORMATION_QRD_ASSOCIATED_TEXT_QUESTION_ITEM_NOT_OF_TYPE_TEXT_OR_STRING`: AssociatedTextQuestion item with id: '%s' is not of type 'text' or 'string'. Type was: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_QRD_QFDD_QUESTION_DOES_NOT_SUPPORT_ASSOCIATED_TEXT_QUESTION`: QFDDQuestion with id: '%s' does not support associatedText. Class was: '%s'. QuestionnaireResponse: '%s'.

- `TRANSFORMATION_PHMR_MISSING_RESOURCE`: Input bundle missing resource: %s

- `TRANSFORMATION_PHMR_NARRATIVE_ERROR`: Can't generate narrative for: %s

- `TRANSFORMATION_HEADER_MISSING_CPR`: CPR is mandatory for patient but not present in fhir bundle

- `TRANSFORMATION_PHMR_INVALID_OBSERVATION_CODING`: Observation coding system must be urn:oid:1.2.208.176.2.1

- `TRANSFORMATION_PHMR_INVALID_OBSERVATION_COMMENT_AUTHOR_REFERENCE`: The author of a measurement comment is a reference not provided in the bundle.

- `TRANSFORMATION_PHMR_INVALID_OBSERVATION_RANGES_CODING`: Observation.observationRanges[x].type.coding.system should be http://www.example.com/medcom/message-codes

- `TRANSFORMATION_PHMR_INVALID_OBSERVATION_RANGES_RAL`: RAL observation ranges should not have both High and Low set when transforming to PHRM, but High is: %s, and Low is: %s

- `TRANSFORMATION_PHMR_INVALID_OBSERVATION_RANGES_GAL`: GAL observation ranges should not have both High and Low set when transforming to PHRM, unless either bound is replaced with a RAL reference range, but High is: %s, and Low is: %s

- `TRANSFORMATION_PHMR_INVALID_NUMBER_OF_DECIMALS`: Value should have no more than 7 decimals, but is: %s

- `TRANSFORMATION_PHMR_OBSERVATION_QUANTITY_MISSING`: Value should be Quantity type and not null

- `TRANSFORMATION_PHMR_XML_MISSING`: Invalid input document reference, it must contain content with data of PHMR xml

- `TRANSFORMATION_PHMR_ID_OID_NOT_FOUND`: NamingSystem or CodeSystem with url %s is not found.

- `TRANSFORMATION_PHMR_MISSING_MEASUREMENT_IDENTIFIER`: No identifier found for measurement

- `TRANSFORMATION_PHMR_DOCUMENT_TIME_INTERVAL_MISSING`: Document is missing serviceStartTime and serviceStopTime.

- `TRANSFORMATION_PHMR_DOCUMENT_INVALID_EFFECTIVE`: Invalid Observation.effective, expecting DateTime, Period or Instant

- `TRANSFORMATION_PHMR_MEASUREMENT_INVALID_METHOD_CODES`: Method codes for performerType and provisionMethod for observation with id '%s' could not be established.

- `TRANSFORMATION_PHMR_MEASUREMENT_TOO_MANY_DECIMALS`: Could not transform measurement with reference range Low: %s and High: %s since we cannot correctly translate more than 7 decimals.

- `TRANSFORMATION_HEADER_MISSING_CONFIDENTIALITY_CODE`: Composition.confidentiality is mandatory

- `TRANSFORMATION_HEADER_WRONG_TYPE_COMPOSITION_SUBJECT`: Composition.subject should be a Patient

- `TRANSFORMATION_HEADER_MISSING_CUSTODIAN`: Custodian is mandatory for transformation

- `TRANSFORMATION_HEADER_MISSING_COMPOSITION`: Composition expected for transformation is not found

- `TRANSFORMATION_HEADER_MISSING_ATTESTER`: Composition.attester.party is mandatory for transformation

- `TRANSFORMATION_HEADER_WRONG_TYPE_COMPOSITION_AUTHOR`: Composition.author should either be a Patient or Practitioner

- `TRANSFORMATION_HEADER_MISSING_COMPOSITION_AUTHOR_ORGANIZATION`: Composition.authorOrganization is mandatory for transformation

- `TRANSFORMATION_HEADER_AUTHOR_ORGANIZATION_MUST_CONTAIN_SOR_ID`: Composition.authorOrganization must contain SOR identifier: %s

- `TRANSFORMATION_HEADER_ATTESTER_ORGANIZATION_MUST_CONTAIN_SOR_ID`: Composition.attester.party must contain SOR identifier: %s

- `TRANSFORMATION_HEADER_CUSTODIAN_MUST_CONTAIN_SOR_ID`: Custodian organization must contain SOR identifier: %s

- `TRANSFORMATION_HEADER_COMPOSITION_HAS_NO_TIMEZONE_OR_SECONDS`: Composition has no timezone or seconds set: %s

- `TRANSFORMATION_XDS_PROPERTY_MISSING_EXCEPTION`: '%s' is missing which is required for document sharing. DocumentReference id: '%s'.

- `TRANSFORMATION_XDS_PROPERTY_CODE_INVALID_EXCEPTION`: '%s' is required for document sharing but the specified coding is not valid for the valueSet '%s': system=%s, code=%s, display=%s. DocumentReference id: '%s'

- `TRANSFORMATION_FROM_XHTML_TO_CDA_XML_FAILED`: Unable to transform XHTML to CDA XML format

- `TRANSFORMATION_FROM_CDA_XML_TO_XHTML_FAILED`: Unable to tranform CDA XML to XHTML format

- `TRANSFORMATION_XSLT_CONFIGURATION_ERROR`: Error creating XLST transformer: %s

- `TRANSFORMATION_XSD_CONFIGURATION_ERROR`: Error creating XSD transformer: %s

- `TRANSFORMATION_APD_XML_MISSING`: Invalid input document reference, it must contain content with data of APD xml

#### ehealth-upload

- `UPLOAD_QFDD_MASTERIDENTIFIER_IS_ALREADY_IN_USE`: The masterIdentifier on the DocumentReference is not unique

- `UPLOAD_QFDD_THE_ID_OF_THE_DOCUMENT_IS_NULL`: Missing Id in the QFDD.

#### ehealth-versioning

- `VERSIONING_RESOURCE_MUST_BE_FROM_CURRENT_ENVIRONMENT`: Versioning validation error: Resource must be from current environment: %s.

- `VERSIONING_MULTIPLE_DRAFTS_IN_BASE_NOT_ALLOWED`: Versioning validation error: Only one draft resource at a time is allowed per base.

- `VERSIONING_RESOURCE_NOT_ELIGIBLE_FOR_CLONE`: Versioning validation error: A resource must have base-identifier, environment-identifier, versioning-identifier and version to be cloned.

- `VERSIONING_REFERENCE_NOT_RELEVANT_FOR_RESOURCE`: Versioning validation error: References included in deep_clone_references must be present in resource to clone, %s: %s.

- `VERSIONING_REFERENCE_MISSING_IN_TREE_PATH`: Versioning validation error: The following resources could not be cloned since their parent resource, %s, is not present in deep_clone_refernces: %s.



---

// File: input/pagecontent/event-messages.md

### Event messages

This document describes the types of event messages that are published to destinations (topic/queue) on the message broker for the eHealth Infrastructure. Each message consists of a JSON body and additionally some message properties.

The JSON body contains the event details, while the message properties enable the use of message selectors when consuming messages from a destination.

For each message type is documented:
- naming of destination (topic/queue)
- JSON schema for the message body
- table of message selector properties


#### EHealthContextEvent
Messages of EHealthContextEvent message type are issued when a resource is created, updated or deleted AND the context criteria is met. Eg. if the criteria is that a specific element of the resource has changed, the context would be the name of the element.

##### Destination
topic: Topic is named: [FHIR profile of the resource].[context]

##### Message

```
{
  "type" : "object",
  "id" : "urn:jsonschema:com:systematic:ehealth:event:event:EHealthContextEvent",
  "properties" : {
    "messageType" : {
      "type" : "string",
      "description" : "EHealthContextEvent"
    },
    "messageVersion" : {
      "type" : "string",
      "description" : "1.0"
    },
    "eventType" : {
      "type" : "string",
      "description" : "{ enum : [ created, updated, deleted ] }"
    },
    "resourceReference" : {
      "type" : "string",
      "description" : "The reference (absolute URL) of the resource for which the event message is issued"
    },
    "resourceVersion" : {
      "type" : "string",
      "description" : "The version of the resource after change"
    },
    "context" : {
      "type" : "string",
      "description" : "The name of the context"
    },
    "status" : {
      "type" : "string",
      "description" : "The status of the event"
    }
  }
}
```
##### Properties
- `context`: The context of the resource event. Context can be an element, or a special event type
- `eventType`: The type of event
- `messageType`: The name of the message type
- `messageVersion`: The version of the message type, eg. "1.0"
- `resourceReference`: The reference (absolute URL) of the resource for which the event message is issued
- `messageClass`: The Java class path of the event message. For internal use (serializing/deserializing from/to Java objects))
- `patientReference`: The reference (absolute URL) to the patient resource, if the resource, for which the event message is issued, is related to a patient
- `resourceProfile`: The FHIR profile of the resource for which the event message is issued


#### EHealthReferenceEvent
Messages of EHealthReferenceEvent message type are issued when a resource element containing references is updated. Separate messages are issued for references added, and references removed

##### Destination
topic: Topic is named: [FHIR profile of the resource].[name of resource element]

##### Message

```
{
  "type" : "object",
  "id" : "urn:jsonschema:com:systematic:ehealth:event:event:EHealthReferenceEvent",
  "properties" : {
    "messageType" : {
      "type" : "string",
      "description" : "EHealthReferenceEvent"
    },
    "messageVersion" : {
      "type" : "string",
      "description" : "1.0"
    },
    "eventType" : {
      "type" : "string",
      "description" : "{ enum : [ reference_added, reference_removed ] }"
    },
    "resourceReference" : {
      "type" : "string",
      "description" : "The reference (absolute URL) of the resource for which the event message is issued"
    },
    "resourceVersion" : {
      "type" : "string",
      "description" : "The version of the resource after change"
    },
    "resourceElement" : {
      "type" : "string",
      "description" : "The reference resource element that has changed"
    },
    "references" : {
      "type" : "array",
      "description" : "The resource element references (absolute URLs) that were added or removed",
      "items" : {
        "type" : "string"
      }
    }
  }
}
```
##### Properties
- `eventType`: The type of event
- `messageType`: The name of the message type
- `messageVersion`: The version of the message type, eg. "1.0"
- `resourceElement`: The reference resource element that has changed
- `resourceReference`: The reference (absolute URL) of the resource for which the event message is issued
- `messageClass`: The Java class path of the event message. For internal use (serializing/deserializing from/to Java objects))
- `patientReference`: The reference (absolute URL) to the patient resource, if the resource, for which the event message is issued, is related to a patient
- `resourceProfile`: The FHIR profile of the resource for which the event message is issued


#### EHealthSimpleEvent
Messages of EHealthSimpleEvent message type are issued when a resource is created, updated or deleted.

##### Destination
topic: Topic is named: [FHIR profile of the resource]

##### Message

```
{
  "type" : "object",
  "id" : "urn:jsonschema:com:systematic:ehealth:event:event:EHealthSimpleEvent",
  "properties" : {
    "messageType" : {
      "type" : "string",
      "description" : "EHealthSimpleEvent"
    },
    "messageVersion" : {
      "type" : "string",
      "description" : "1.0"
    },
    "eventType" : {
      "type" : "string",
      "description" : "{ enum : [ created, updated, deleted ] }"
    },
    "resourceReference" : {
      "type" : "string",
      "description" : "The reference (absolute URL) of the resource for which the event message is issued"
    },
    "resourceVersion" : {
      "type" : "string",
      "description" : "The version of the resource (version after: created, updated, version before: deleted)"
    }
  }
}
```
##### Properties
- `eventType`: The type of event
- `messageType`: The name of the message type
- `messageVersion`: The version of the message type, eg. "1.0"
- `resourceReference`: The reference (absolute URL) of the resource for which the event message is issued
- `messageClass`: The Java class path of the event message. For internal use (serializing/deserializing from/to Java objects))
- `patientReference`: The reference (absolute URL) to the patient resource, if the resource, for which the event message is issued, is related to a patient
- `resourceProfile`: The FHIR profile of the resource for which the event message is issued




---

// File: input/pagecontent/guidance.md

### Introduction to Domain
Introduction to the eHealth domain can be found at the [wiki site](https://ehealth-dk.atlassian.net/wiki/spaces/EDTW/).

### Use of FHIR

#### Modeling Approach
The eHealth Infrastructure is based on an open modeling approach to using FHIR. With the open modeling, optional elements of
the various FHIR resources have been retained even when not included in the initial data requirements. This except the few 
odd occurrences where elements have been removed to reduce they ways in which resources can be connected as the fewer ways
suffice.

Compared to the closed modeling approach, where those (initially) superfluous elements are removed, the open modeling approach
is prepared for adaptation. It enables an evolutionary use of elements where parties can agree on supporting otherwise
unused elements for, say, pilot projects and then propagate use of the elements once proven valuable. This without
interfering with regular use of the resources. 

#### Use of Coding and CodeableConcept
Elements of type [Coding](http://hl7.org/fhir/R4/datatypes.html#codesystem) and
 [CodeableConcept](http://hl7.org/fhir/R4/datatypes.html#codeableconcept) are used throughout the resources
  and the profiles that make up the eHealth Infrastructure clinical interface. Most often the elements where
  these types are used have a binding to a ValueSet specifying the allowed set of concepts. When assigning a
  value to such an element, that value must also be found in the corresponding ValueSet. 
  
  Coding (which is used in CodeableConcept) contains elements `code` and `system` which are optional 
  as per the definition in FHIR.
  
  In scope of the eHealth Infrastructure, however, `code` and `system` shall be provided
  at all times when expressing value for Coding (and CodeableConcept) type of elements.
  The services comprising the eHealth Infrastructure must be expected to introduce verification hereof
  at any time. 
  
#### Use of Quantity and its Defined Variations
[Quantity](http://hl7.org/fhir/R4/datatypes.html#quantity) contains a number of optional elements of which
some are part of constraints where they are deemed mandatory (see constraints 
under http://hl7.org/fhir/R4/datatypes.html#quantity).

In scope of the eHealth Infrastructure, the following elements shall be handled as mandatory:
* unit
* system
* code

It must be expected that eHealth Infrastructure services can introduce verification of this at any time.

When Unified Code for Units of Measure (UCUM) is used for system, and this is most likely the case in
the eHealth Infrastructure, the source of the values used are as follows:
* unit is typically based on the printSymbol element in the corresponding entry in http://unitsofmeasure.org/ucum-essence.xml, possibly starting with a prefix for metric units 
* code is typically based on the code element in the corresponding entry in http://unitsofmeasure.org/ucum-essence.xml, possibly starting with a prefix for metric units
* system is "http://unitsofmeasure.org"

This applies for the Quantity and [its defined variations](http://hl7.org/fhir/R4/datatypes.html#QuantityVariations)
except Count.

### Security
eHealth Infrastructure security mechanisms are described on the [wiki site](https://ehealth-dk.atlassian.net/wiki/spaces/EDTW/).



---

// File: input/pagecontent/index.md

### Introduction
This implementation guide is provided to support the use of FHIR<sup>&reg;&copy;</sup> in the Danish national
eHealth Infrastructure context.

This document is a specification that reflects the capabilities of the FHIR<sup>&reg;&copy;</sup>-infrastructural part
of the eHealth Infrastructure.

### Scope

This document presents Danish use concepts defined via FHIR processable artifacts; these are outputs with agreed approaches to varied kinds of healthcare related information based on the core FHIR R4 specification.
* [Profiles](profiles.html) - are constraints of core FHIR resources and datatype for use in the eHealth Infrastructure
* [Extensions](extensions.html) - are FHIR extensions that are added for local use, covering needed concepts of the eHealth Infrastructure
* [Terminologies](terminology.html) - are defined or referenced code systems and value sets for the context of the eHealth Infrastructure

FHIR profiles are managed under the constellation of the Danish municipalities and regions:

* [Danish regions](https://regioner.dk/)
* [Danish municipalities](https://kl.dk/)

### Conformance Requirements

The Capability Statements Section outlines the conformance requirements for the eHealth Infrastructure Core Servers and Client applications, identifying the specific profiles that need to be supported, the specific RESTful operations that need to be supported, and the search parameters that need to be supported.

Due to a defect in the tool that generates the implementation guide, the table of exposed operations on each resource is not correct. For a list of operations supported per FHIR resource, please consult the capability statement of the particular server. Displaying the capability statement as either XML or JSON, the operations can be found in the interaction element of each resource.

### Collaboration

This guide is the product of collaborative work undertaken with participants from:

* [Systematic A/S](https://systematic.com/)
* [Trifork A/S](https://trifork.com/)

### Note to FHIR Newcomers

If you are new to FHIR (Fast Healthcare Interoperability Resources), consider to head over to the FHIR specification at [http://hl7.org/fhir/R4/](http://hl7.org/fhir/R4/) and study it at your own pace. In particular, check out the following links:

- Summary: [http://hl7.org/fhir/R4/summary.html](http://hl7.org/fhir/R4/summary.html)
- Developers intro: [http://hl7.org/fhir/R4/overview-dev.html](http://hl7.org/fhir/R4/overview-dev.html)
- Clinical intro: [http://hl7.org/fhir/R4/overview-clinical.html](http://hl7.org/fhir/R4/overview-clinical.html)
- Architects intro: [http://hl7.org/fhir/R4/overview-arch.html](http://hl7.org/fhir/R4/overview-arch.html)

Great FHIR exercises and tutorials can be found at [https://fhir-drills.github.io/](https://fhir-drills.github.io/) and [https://simplifier.net/guide/ProfilingAcademy/](https://simplifier.net/guide/ProfilingAcademy/)

### Reader's Guide

The intended audience of the implementation guide is IT architects, developers and testers who are seeking to understand
the available resources in the eHealth Infrastructure and how they can be used.

* In general, business validation rules have not been described.
* Value sets and code systems should be expected to mature over time.


---

// File: input/pagecontent/operations.md

<ul>
<li><a href="ehealth-documentreference-search.html">Documentreference search</a></li>
{% include list-simple-operationdefinitions.xhtml %}
</ul>



---

// File: input/pagecontent/POST_apply.md

`POST [base]/$apply`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJQbGFuRGVmaW5pdGlvbiRhcHBseSJdfSwiY29udGV4dCI6eyJjYXJlX3RlYW1faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtY2FyZXBsYW4tMjgxOC5sb2NhbC9maGlyL0NhcmVUZWFtLzIwODYzIiwiZXBpc29kZV9vZl9jYXJlX2lkIjoiaHR0cHM6Ly9jYXJlcGxhbi5jaXQtY2FyZXBsYW4tMjgxOC5sb2NhbC9maGlyL0VwaXNvZGVPZkNhcmUvMTE3IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/117"
      }
    },
    {
      "name": "planDefinition",
      "valueReference": {
        "reference": "https://plan.cit-careplan-2818.local/fhir/PlanDefinition/61950"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "CarePlan",
  "id": "119",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T13:00:11.815+00:00",
    "source": "#969257d5-567b-43",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/117"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
      "extension": [
        {
          "url": "status",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/request-status",
                "code": "draft"
              }
            ]
          }
        },
        {
          "url": "period",
          "valuePeriod": {
            "start": "2024-07-29T13:00:11+00:00"
          }
        }
      ]
    }
  ],
  "instantiatesCanonical": [
    "https://plan.cit-careplan-2818.local/fhir/PlanDefinition/61950"
  ],
  "status": "draft",
  "intent": "order",
  "subject": {
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/48940"
  },
  "period": {
    "start": "2024-07-29T13:00:11+00:00"
  },
  "careTeam": [
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/20863"
    }
  ],
  "addresses": [
    {
      "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/116"
    }
  ],
  "activity": [
    {
      "reference": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/ServiceRequest/118"
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_Binary_retrieve-document.md

`POST [base]/Binary/$retrieve-document`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJCaW5hcnkkcmV0cmlldmUtZG9jdW1lbnQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWRvY3VtZW50LXF1ZXJ5LTY3Ny5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi8yNzgyNCIsInBhdGllbnRfaWQiOiJodHRwczovL3BhdGllbnQuY2l0LWRvY3VtZW50LXF1ZXJ5LTY3Ny5sb2NhbC9maGlyL1BhdGllbnQvNjg4NTgiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "XYZ_YYY_TTT"
    },
    {
      "name": "reason",
      "valueString": "I have a valid reason"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/xml",
  "data": "VGhpcyBpcyB0aGUgY29udGVudCBvZiB0aGUgZG9jdW1lbnQu"
}
```

---

// File: input/pagecontent/POST_Bundle_retrieve-and-transform-APD.md

`POST [base]/Bundle/$retrieve-and-transform-APD`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJCaW5hcnkkcmV0cmlldmUtZG9jdW1lbnQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWRvY3VtZW50LXF1ZXJ5LTY3Ny5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi8yMTM2MSIsInBhdGllbnRfaWQiOiJodHRwczovL3BhdGllbnQuY2l0LWRvY3VtZW50LXF1ZXJ5LTY3Ny5sb2NhbC9maGlyL1BhdGllbnQvNTA2MjYiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueString": "XYZ_YYY_TTT"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "id": "123",
  "type": "collection"
}
```

---

// File: input/pagecontent/POST_Bundle_retrieve-and-transform-PHMR.md

`POST [base]/Bundle/$retrieve-and-transform-PHMR`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJCaW5hcnkkcmV0cmlldmUtZG9jdW1lbnQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWRvY3VtZW50LXF1ZXJ5LTY3Ny5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi8xODAzNCIsInBhdGllbnRfaWQiOiJodHRwczovL3BhdGllbnQuY2l0LWRvY3VtZW50LXF1ZXJ5LTY3Ny5sb2NhbC9maGlyL1BhdGllbnQvNjUzNTgiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueString": "XYZ_YYY_TTT"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "id": "123",
  "type": "collection"
}
```

---

// File: input/pagecontent/POST_Bundle_retrieve-and-transform-QRD.md

`POST [base]/Bundle/$retrieve-and-transform-QRD`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJCaW5hcnkkcmV0cmlldmUtZG9jdW1lbnQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWRvY3VtZW50LXF1ZXJ5LTY3Ny5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi8zNDkwNSIsInBhdGllbnRfaWQiOiJodHRwczovL3BhdGllbnQuY2l0LWRvY3VtZW50LXF1ZXJ5LTY3Ny5sb2NhbC9maGlyL1BhdGllbnQvNjI5MjIiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueUri": "XYZ_YYY_TTT"
    },
    {
      "name": "bundle",
      "resource": {
        "resourceType": "Bundle",
        "type": "collection",
        "entry": [
          {
            "fullUrl": "https://questionnaire.cit-document-query-677.local/fhir/Questionnaire/51069",
            "resource": {
              "resourceType": "Questionnaire",
              "id": "51069",
              "meta": {
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire"
                ]
              },
              "extension": [
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire-type",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://ehealth.sundhed.dk/cs/questionnaire-types",
                        "code": "QQ"
                      }
                    ]
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
                  "extension": [
                    {
                      "url": "reference",
                      "valueReference": {
                        "reference": "https://organization.cit-document-query-677.local/fhir/Organization/82511"
                      }
                    },
                    {
                      "url": "role",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/modifier-role",
                            "code": "owner"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "version": "1.0.0",
              "name": "HQ",
              "status": "active"
            }
          }
        ]
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "collection",
  "entry": [
    {
      "resource": {
        "resourceType": "Binary",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/StructureDefinition/Binary"
          ]
        },
        "contentType": "text/xml",
        "data": "PENsaW5pY2FsRG9jdW1lbnQgeG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIgeG1sbnM9InVybjpobDctb3JnOnYzIiB4c2k6c2NoZW1hTG9jYXRpb249InVybjpobDctb3JnOnYzIC4uL1NjaGVtYS9DREFfU0RUQy54c2QiIGNsYXNzQ29kZT0iRE9DQ0xJTiIgbW9vZENvZGU9IkVWTiI+Cjxjb2RlIGNvZGU9Ijc0NDY1LTYiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIiBkaXNwbGF5TmFtZT0iUGVyc29uYWwgSGVhbHRoIE1vbml0b3JpbmcgUmVwb3J0Ii8+CjwvQ2xpbmljYWxEb2N1bWVudD4="
      }
    },
    {
      "resource": {
        "resourceType": "OperationOutcome",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">WARNING</td><td>[]</td><td>An error occurred when trying to transform to QuestionnaireResponse: HTTP 404 Not Found</td></tr></table></div>"
        },
        "issue": [
          {
            "severity": "warning",
            "code": "processing",
            "diagnostics": "An error occurred when trying to transform to QuestionnaireResponse: HTTP 404 Not Found"
          }
        ]
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_CarePlan_suggest-care-teams.md

`POST [base]/CarePlan/2212/$suggest-care-teams`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvMzgzMDgiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ2FyZVBsYW4kc3VnZ2VzdC1jYXJlLXRlYW1zIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sImNvbnRleHQiOnsiY2FyZV90ZWFtX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9DYXJlVGVhbS8yNjU0MiIsImVwaXNvZGVfb2ZfY2FyZV9pZCI6Imh0dHBzOi8vY2FyZXBsYW4uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9FcGlzb2RlT2ZDYXJlLzIyMTAiLCJwYXRpZW50X2lkIjoiaHR0cHM6Ly9wYXRpZW50LmNpdC1jYXJlcGxhbi0yODE4LmxvY2FsL2ZoaXIvUGF0aWVudC80MTgxMiIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "regionCode",
      "valueString": "DK-85"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "entry": [
    {
      "fullUrl": "https://organization.cit-careplan-2818.local/fhir/CareTeam/26542",
      "resource": {
        "resourceType": "CareTeam",
        "id": "26542",
        "meta": {
          "versionId": "1",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careteam"
          ]
        },
        "identifier": [
          {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:uuid:75eb0f42-4eaf-4bda-8516-eca8eabae1d9"
          }
        ],
        "status": "active",
        "name": "977e3e59-a490-48e5-9a1e-57ee8da68e1d",
        "period": {
          "start": "2024-07-29T13:18:05+00:00"
        },
        "reasonCode": [
          {
            "coding": [
              {
                "system": "urn:oid:1.2.208.176.2.4",
                "code": "DJ44"
              }
            ]
          }
        ]
      }
    },
    {
      "fullUrl": "https://organization.cit-careplan-2818.local/fhir/CareTeam/45310",
      "resource": {
        "resourceType": "CareTeam",
        "id": "45310",
        "meta": {
          "versionId": "1",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careteam"
          ]
        },
        "identifier": [
          {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:uuid:f9922ee9-c0fe-4ed2-a8e1-553c031ce6f4"
          }
        ],
        "status": "active",
        "name": "9455f3d5-25e0-491b-868e-3b54eca12558",
        "period": {
          "start": "2024-07-29T13:18:05+00:00"
        },
        "reasonCode": [
          {
            "coding": [
              {
                "system": "urn:oid:1.2.208.176.2.4",
                "code": "DJ44"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_CarePlan_update-care-teams.md

`POST [base]/CarePlan/2240/$update-care-teams`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ2FyZVBsYW4kc3VnZ2VzdC1jYXJlLXRlYW1zIiwiQ2FyZVBsYW4kdXBkYXRlLWNhcmUtdGVhbXMiLCJDYXJlUGxhbi5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJDYXJlUGxhbi5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "addCareTeams",
      "valueReference": {
        "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/83063"
      }
    },
    {
      "name": "removeCareTeams",
      "valueReference": {
        "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/43545"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "CarePlan",
  "id": "2240",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:18:20.191+00:00",
    "source": "#6478a5bd-a731-4c2e-ad0a-39933956b074",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/2238"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
      "extension": [
        {
          "url": "status",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/request-status",
                "code": "draft"
              }
            ]
          }
        },
        {
          "url": "period",
          "valuePeriod": {
            "start": "2024-07-29T13:18:18+00:00"
          }
        }
      ]
    }
  ],
  "instantiatesCanonical": [
    "https://plan.cit-careplan-2818.local/fhir/PlanDefinition/52014"
  ],
  "status": "draft",
  "intent": "option",
  "category": [
    {
      "coding": [
        {
          "system": "http://ehealth.sundhed.dk/cs/careplan-category",
          "code": "TBD"
        }
      ]
    }
  ],
  "subject": {
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/21992"
  },
  "period": {
    "start": "1970-01-01T00:00:01+00:00",
    "end": "1970-01-01T00:01:40+00:00"
  },
  "careTeam": [
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/52818"
    },
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/83063"
    }
  ],
  "addresses": [
    {
      "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/2239"
    }
  ]
}
```

---

// File: input/pagecontent/POST_create-episode-of-care.md

`POST [base]/$create-episode-of-care`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9wYXRpZW50LmNpdC1jYXJlcGxhbi0yODE4LmxvY2FsL2ZoaXIvUGF0aWVudC84MzQzOCIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJFcGlzb2RlT2ZDYXJlJGNyZWF0ZS1lcGlzb2RlLW9mLWNhcmUiXX0sImNvbnRleHQiOnsiY2FyZV90ZWFtX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9DYXJlVGVhbS84MTcyNCIsInBhdGllbnRfaWQiOiJodHRwczovL3BhdGllbnQuY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9QYXRpZW50LzgzNDM4IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Prefer: return=representation
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "episodeOfCareAndProvenances",
      "resource": {
        "resourceType": "Bundle",
        "type": "transaction",
        "entry": [
          {
            "fullUrl": "urn:uuid:d785a0cf-7a84-4639-8394-34b606ccb083",
            "resource": {
              "resourceType": "Provenance",
              "meta": {
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-provenance"
                ]
              },
              "target": [
                {
                  "reference": "urn:uuid:736f3ace-1ca5-44c4-a0c5-4fe54f6fe7cd"
                }
              ],
              "recorded": "2024-07-29T12:59:47.777+00:00",
              "policy": [
                "http://ehealth.sundhed.dk/policy/dk/sundhedsloven"
              ],
              "agent": [
                {
                  "who": {
                    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/83438"
                  }
                }
              ]
            },
            "request": {
              "method": "POST",
              "url": "Provenance"
            }
          },
          {
            "fullUrl": "urn:uuid:736f3ace-1ca5-44c4-a0c5-4fe54f6fe7cd",
            "resource": {
              "resourceType": "EpisodeOfCare",
              "meta": {
                "lastUpdated": "2024-07-29T12:59:47.777+00:00",
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare"
                ]
              },
              "extension": [
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare-caremanagerOrganization",
                  "valueReference": {
                    "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/34670"
                  }
                }
              ],
              "status": "planned",
              "diagnosis": [
                {
                  "condition": {
                    "reference": "urn:uuid:72725c76-cde9-48db-ba28-bd98795138cf"
                  }
                }
              ],
              "patient": {
                "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/83438"
              },
              "managingOrganization": {
                "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/34670"
              },
              "period": {
                "start": "1970-01-01T00:00:01+00:00",
                "end": "1970-01-01T00:01:40+00:00"
              },
              "team": [
                {
                  "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/81724"
                }
              ]
            },
            "request": {
              "method": "POST",
              "url": "EpisodeOfCare"
            }
          },
          {
            "fullUrl": "urn:uuid:72725c76-cde9-48db-ba28-bd98795138cf",
            "resource": {
              "resourceType": "Condition",
              "meta": {
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-condition"
                ]
              },
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                  "valueReference": {
                    "reference": "urn:uuid:736f3ace-1ca5-44c4-a0c5-4fe54f6fe7cd"
                  }
                }
              ],
              "clinicalStatus": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                    "code": "active"
                  }
                ]
              },
              "code": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.208.176.2.4",
                    "code": "DJ44"
                  }
                ]
              },
              "subject": {
                "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/83438"
              }
            },
            "request": {
              "method": "POST",
              "url": "Condition"
            }
          }
        ]
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "transaction-response",
  "entry": [
    {
      "resource": {
        "resourceType": "Provenance",
        "id": "74",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T12:59:47.884+00:00",
          "source": "#5d7a12b0-f213-4f99-95de-5024f837cf6b",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-provenance"
          ]
        },
        "target": [
          {
            "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/75"
          }
        ],
        "recorded": "2024-07-29T12:59:47.777+00:00",
        "policy": [
          "http://ehealth.sundhed.dk/policy/dk/sundhedsloven"
        ],
        "agent": [
          {
            "who": {
              "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/83438"
            }
          }
        ]
      },
      "response": {
        "status": "201 Created",
        "location": "https://careplan.cit-careplan-2818.local/fhir/Provenance/74/_history/1",
        "etag": "1",
        "lastModified": "2024-07-29T12:59:47.884+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;Provenance/74/_history/1&quot;. Took 6ms.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_CREATE",
                    "display": "Create succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully created resource \"Provenance/74/_history/1\". Took 6ms."
            }
          ]
        }
      }
    },
    {
      "resource": {
        "resourceType": "EpisodeOfCare",
        "id": "75",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T12:59:47.884+00:00",
          "source": "#5d7a12b0-f213-4f99-95de-5024f837cf6b",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare-caremanagerOrganization",
            "valueReference": {
              "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/34670"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-teamHistory",
            "extension": [
              {
                "url": "careTeam",
                "valueReference": {
                  "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/81724"
                }
              },
              {
                "url": "period",
                "valuePeriod": {
                  "start": "2024-07-29T12:59:47+00:00"
                }
              }
            ]
          }
        ],
        "status": "planned",
        "statusHistory": [
          {
            "status": "planned",
            "period": {
              "start": "2024-07-29T12:59:47+00:00"
            }
          }
        ],
        "diagnosis": [
          {
            "condition": {
              "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/76"
            }
          }
        ],
        "patient": {
          "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/83438"
        },
        "managingOrganization": {
          "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/34670"
        },
        "period": {
          "start": "1970-01-01T00:00:01+00:00",
          "end": "1970-01-01T00:01:40+00:00"
        },
        "team": [
          {
            "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/81724"
          }
        ]
      },
      "response": {
        "status": "201 Created",
        "location": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/75/_history/1",
        "etag": "1",
        "lastModified": "2024-07-29T12:59:47.884+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;EpisodeOfCare/75/_history/1&quot;. Took 4ms.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_CREATE",
                    "display": "Create succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully created resource \"EpisodeOfCare/75/_history/1\". Took 4ms."
            }
          ]
        }
      }
    },
    {
      "resource": {
        "resourceType": "Condition",
        "id": "76",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T12:59:47.884+00:00",
          "source": "#5d7a12b0-f213-4f99-95de-5024f837cf6b",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-condition"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/75"
            }
          }
        ],
        "clinicalStatus": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
              "code": "active"
            }
          ]
        },
        "code": {
          "coding": [
            {
              "system": "urn:oid:1.2.208.176.2.4",
              "code": "DJ44"
            }
          ]
        },
        "subject": {
          "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/83438"
        }
      },
      "response": {
        "status": "201 Created",
        "location": "https://careplan.cit-careplan-2818.local/fhir/Condition/76/_history/1",
        "etag": "1",
        "lastModified": "2024-07-29T12:59:47.884+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;Condition/76/_history/1&quot;. Took 8ms.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_CREATE",
                    "display": "Create succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully created resource \"Condition/76/_history/1\". Took 8ms."
            }
          ]
        }
      }
    },
    {
      "resource": {
        "resourceType": "Provenance",
        "id": "77",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T12:59:47.884+00:00",
          "source": "#5d7a12b0-f213-4f99-95de-5024f837cf6b",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-provenance"
          ]
        },
        "target": [
          {
            "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/75"
          }
        ],
        "recorded": "2024-07-29T12:59:47.884+00:00",
        "policy": [
          "http://ehealth.sundhed.dk/policy/ehealth/patient-data",
          "http://ehealth.sundhed.dk/policy/eu/general-data-protection-regulation"
        ],
        "reason": [
          {
            "coding": [
              {
                "system": "http://hl7.org/fhir/v3/ActReason",
                "code": "PATADMIN"
              }
            ]
          }
        ],
        "activity": {
          "coding": [
            {
              "system": "http://hl7.org/fhir/v3/DataOperation",
              "code": "CREATE"
            }
          ]
        },
        "agent": [
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/v3/ParticipationType",
                    "code": "AUT"
                  }
                ]
              }
            ],
            "who": {
              "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/83438"
            }
          }
        ]
      },
      "response": {
        "status": "201 Created",
        "location": "https://careplan.cit-careplan-2818.local/fhir/Provenance/77/_history/1",
        "etag": "1",
        "lastModified": "2024-07-29T12:59:47.884+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;Provenance/77/_history/1&quot;. Took 6ms.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_CREATE",
                    "display": "Create succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully created resource \"Provenance/77/_history/1\". Took 6ms."
            }
          ]
        }
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_DocumentReference_deprecate-document.md

`POST [base]/DocumentReference/$deprecate-document`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRG9jdW1lbnRSZWZlcmVuY2UuY3JlYXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCIkZGVwcmVjYXRlLWRvY3VtZW50IiwiRG9jdW1lbnRSZWZlcmVuY2UuZGVsZXRlIiwiRG9jdW1lbnRSZWZlcmVuY2Uuc2VhcmNoIiwiRG9jdW1lbnRSZWZlcmVuY2UucmVhZCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "documentId",
      "valueString": "urn:oid:1.2.208.184|524501d7-e2d1-43bc-9d76-020c1919f0da"
    },
    {
      "name": "cpr",
      "valueString": "0101011232"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>No issues detected during validation</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "diagnostics": "No issues detected during validation"
    }
  ]
}
```

---

// File: input/pagecontent/POST_EpisodeOfCare_is-context-allowed.md

`POST [base]/EpisodeOfCare/406/$is-context-allowed`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRXBpc29kZU9mQ2FyZSRpcy1jb250ZXh0LWFsbG93ZWQiLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "patient",
      "valueReference": {
        "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/97858"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "Patient",
      "valueReference": {
        "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/97858"
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_EpisodeOfCare_update-care-teams.md

`POST [base]/EpisodeOfCare/1731/$update-care-teams`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvMjI5MDQiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRXBpc29kZU9mQ2FyZS5zZWFyY2giLCJFcGlzb2RlT2ZDYXJlLnJlYWQiLCJDYXJlUGxhbi5yZWFkIiwiRXBpc29kZU9mQ2FyZSR1cGRhdGUtY2FyZS10ZWFtcyIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiRXBpc29kZU9mQ2FyZS5wYXRjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "addCareteams",
      "valueReference": {
        "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/33050"
      }
    },
    {
      "name": "removeCareteams",
      "valueReference": {
        "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/55940"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "EpisodeOfCare",
  "id": "1731",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:15:36.035+00:00",
    "source": "#db7f52e6-b9f8-4e44-9861-9634ad536927",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare-caremanagerOrganization",
      "valueReference": {
        "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/79661"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-teamHistory",
      "extension": [
        {
          "url": "careTeam",
          "valueReference": {
            "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/33050"
          }
        },
        {
          "url": "period",
          "valuePeriod": {
            "start": "2024-07-29T13:15:36+00:00"
          }
        }
      ]
    }
  ],
  "status": "active",
  "statusHistory": [
    {
      "status": "active",
      "period": {
        "start": "2024-07-29T13:15:35+00:00"
      }
    }
  ],
  "diagnosis": [
    {
      "condition": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/1730"
      },
      "rank": 1
    }
  ],
  "patient": {
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/41631"
  },
  "managingOrganization": {
    "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/79661"
  },
  "period": {
    "start": "1970-01-01T00:00:01+00:00",
    "end": "1970-01-01T00:01:40+00:00"
  },
  "team": [
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/21791"
    },
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/33050"
    }
  ]
}
```

---

// File: input/pagecontent/POST_execute-patient-usage-stats.md

`POST [base]/$execute-patient-usage-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYzgwODlhZGYtMmI1My00ZjM0LTk5OTMtNGU1MDc3NTBmOTM5IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1wYXRpZW50LXVzYWdlLXN0YXRzIiwiQmluYXJ5LnJlYWQiXX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "7",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:08:00.535+00:00",
    "source": "#2f79b377-d755-43ff-b364-340d25331caa",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "c8089adf-2b53-4f34-9993-4e507750f939"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_execute-questionnaireresponses.md

`POST [base]/$execute-questionnaireresponses`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMTBlYzhjMzctZDdhOS00NDA1LTliMDAtMjBiMmI2ZGMxYmFkIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1xdWVzdGlvbm5haXJlcmVzcG9uc2VzIiwiQmluYXJ5LnJlYWQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXJlcG9ydGluZy0xMTI5LmxvY2FsL2ZoaXIvT3JnYW5pemF0aW9uLzE0MTA1IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "_partition",
      "valueInteger": 1
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/14105"
      }
    },
    {
      "name": "condition",
      "valueCoding": {
        "system": "urn:oid:1.2.208.176.2.4",
        "code": "DJ44",
        "display": "Kronisk obstruktiv lungesygdom"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:09:00+00:00",
        "end": "2024-07-29T09:09:00+00:00"
      }
    },
    {
      "name": "questionnaire",
      "valueReference": {
        "reference": "https://questionnaire.cit-reporting-1129.local/fhir/Questionnaire/56825"
      }
    },
    {
      "name": "questionnaire",
      "valueReference": {
        "reference": "https://questionnaire.cit-reporting-1129.local/fhir/Questionnaire/19987"
      }
    },
    {
      "name": "careteam",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/CareTeam/95960"
      }
    },
    {
      "name": "careteam",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/CareTeam/45528"
      }
    },
    {
      "name": "tag",
      "valueCoding": {
        "system": "http://ehealth.sundhed.dk/cs/ehealth-system",
        "code": "xa"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "20",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:09:02.823+00:00",
    "source": "#263bc61e-5a10-41ff-b2f7-bef239b6903c",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "10ec8c37-d7a9-4405-9b00-20b2b6dc1bad"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_fetch-careplan-and-episode-of-care-stats.md

`POST [base]/$fetch-careplan-and-episode-of-care-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiODA3NDZjY2MtNTRiZS00YTFhLWIyNTgtMTViOThlNjNiMzJmIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1lcGlzb2Rlb2ZjYXJlLXN0YXRzIiwiQmluYXJ5LnJlYWQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXJlcG9ydGluZy0xMTI5LmxvY2FsL2ZoaXIvT3JnYW5pemF0aW9uLzk3NTE4IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/97518"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "80746ccc-54be-4a1a-b258-15b98e63b32f"
    }
  },
  "data": "UEsDBBQACAgIAOZI/VgAAAAAAAAAAAAAAABEAAAAQ2FyZVBsYW5BbmRFcGlzb2RlT2ZDYXJlU3RhdHNSZXBvcnRfMjAyNF8wN18yOV8wOV8wN18xMy9SZXBvcnRIZWFkZXJdj8FuwjAMht/FZ9q0GVlJbtO0KyDW06YdouJCpJJETkBiVd59gU6s2tH299m/RyD0juJanxAUvGrC7aDti92/eRPcHjf9rfcedQy7OwmLX6U1d4VXfFlUTcFlW0lVNap+Krl4XgkhZPORaa8pL49IAdSY3eDO1GF79Td7+zeckaA+R7BTJG2dvZ7Mt47G2Qxd9HDOecjYQ56unUVIiwft6KDtP3iHPRLaDqf7jwKOMfqgGJtLZWdiMT2YLxR1zWU5uE4PrD8aYpsZymQj6hWk9JXSD1BLBwiQI4Vb1AAAAEgBAABQSwMEFAAICAgA5kj9WAAAAAAAAAAAAAAAAEoAAABDYXJlUGxhbkFuZEVwaXNvZGVPZkNhcmVTdGF0c1JlcG9ydF8yMDI0XzA3XzI5XzA5XzA3XzEzL0NvbmRpdGlvbkNvZGUvREo0NEWNywrCMBBF/2XWJdhQVLKNbtxUcCkuxiZKoJmUPAol5N9NoOBqZs5c7skgHSkTjSPplAaRYcU56Xbge66TJr3ExienDH1BPDOELURtQUDyJJxRomec8cOZ9adj3QboWrq2weU2DFBepXR/0SNZi35rnThFs+rrYkKNjx+JvhoTVR/v9mdj9xlp530pP1BLBwir18PhjQAAALQAAABQSwMEFAAICAgA5kj9WAAAAAAAAAAAAAAAAEkAAABDYXJlUGxhbkFuZEVwaXNvZGVPZkNhcmVTdGF0c1JlcG9ydF8yMDI0XzA3XzI5XzA5XzA3XzEzL0NvbmRpdGlvbkNvZGUvVEJERY7BCsIwDIbfJeexoscenZ4V9CYeYhttsWvLmg7G6LvbwsRTyJfk/7LCELy2bIMfgiaQK8zoMrUGn65Wryhy4ypo698g7yukJTGNIMEwRykEGULHpk/Za0O61x+hklC/5ARdu67pcDscoTxK6f7eax5HnJamQMV2plO0qW6fXwNO9YHsq37fbcPGLg79xnelfAFQSwcIq4xfLpIAAADDAAAAUEsBAhQAFAAICAgA5kj9WJAjhVvUAAAASAEAAEQAAAAAAAAAAAAAAAAAAAAAAENhcmVQbGFuQW5kRXBpc29kZU9mQ2FyZVN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDdfMTMvUmVwb3J0SGVhZGVyUEsBAhQAFAAICAgA5kj9WKvXw+GNAAAAtAAAAEoAAAAAAAAAAAAAAAAARgEAAENhcmVQbGFuQW5kRXBpc29kZU9mQ2FyZVN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDdfMTMvQ29uZGl0aW9uQ29kZS9ESjQ0UEsBAhQAFAAICAgA5kj9WKuMXy6SAAAAwwAAAEkAAAAAAAAAAAAAAAAASwIAAENhcmVQbGFuQW5kRXBpc29kZU9mQ2FyZVN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDdfMTMvQ29uZGl0aW9uQ29kZS9UQkRQSwUGAAAAAAMAAwBhAQAAVAMAAAAA"
}
```

---

// File: input/pagecontent/POST_fetch-careplan-customization-stats.md

`POST [base]/$fetch-careplan-customization-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJGZldGNoLWNhcmVwbGFuLWN1c3RvbWl6YXRpb24tc3RhdHMiLCJyZXBvcnQtbm9uLWFub255bWl6ZWQiLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwiY29udGV4dCI6eyJvcmdhbml6YXRpb25faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcmVwb3J0aW5nLTExMjkubG9jYWwvZmhpci9Pcmdhbml6YXRpb24vOTEyMzAiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/91230"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "data": "UEsDBBQACAgIAARJ/VgAAAAAAAAAAAAAAABBAAAAQ2FyZVBsYW5DdXN0b21pemF0aW9uU3RhdHNSZXBvcnRfMjAyNF8wN18yOV8wOV8wOF8wOC9SZXBvcnRIZWFkZXJdz01vwjAMBuD/4jNt0rCPNlfuDEFPm3awKgORSlI57iRW5b8voxurJvkS+XltZwKmIbBs8UJgYYNMux79ZowSLu4TxQV/EJS4vzFY/fjW3bzR5qHQz4VpWt1YXecqzVOjH2tdr1+zHpDzZCGOYKecjWHkjtrr8J3e/TUXEuzbBH6+B33w1987MvrAfqSDsPOn3N0GT5BWdx34hP4f3tORmHxH8/77A84iQ7RKLUNl56SYP5g3FFVlmrIPHfbqeHasXhZUNZVZa0jpPaUvUEsHCOvDX4jNAAAARQEAAFBLAwQUAAgICAAESf1YAAAAAAAAAAAAAAAAUAAAAENhcmVQbGFuQ3VzdG9taXphdGlvblN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDhfMDgvRUhlYWx0aFBsYW5EZWZpbml0aW9uLzU5MDIwpZJLT8MwDID/S859rNNA2q4FCU6gjdu0Q0jdNiJNKscZjKn/HadjG0wTF6RKlR/J99XuXtw/gDTUPhtp76DWVpN2Viz2AsG7gApedj2IhbhoSISuOHszn0wnHHRAMh7aAnouP8ZawfkeXa0Nn1+Llqhf5Dm0Iy/zwVYtVFn1ltetxnxFGBQFhDPk2Jv2zK7O7M2QCPggsH5UXe9FQMPAfxA6V+laA6bo2Pb69Qg1IFgV61tpAixPiXFcp2AU8WzisJFWf8qIypSmFKF3SNo2aVFM55lxSpqD3NOP1nw+K2a3YhiSE/pgNVJLV4F8NfxmWE+RrdjeNqOq33mC7s9hKJ9ffi5fEL3duwUUw2bgZ5MclxlXmcUle5IUPIdSkd6C4DWUEiH+GWXw5Lpv/1XoOom7aEa6Y7Nf1dIFy9ZFch7ZUtoGrjYNwxdQSwcIxzs3k0kBAACiAgAAUEsBAhQAFAAICAgABEn9WOvDX4jNAAAARQEAAEEAAAAAAAAAAAAAAAAAAAAAAENhcmVQbGFuQ3VzdG9taXphdGlvblN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDhfMDgvUmVwb3J0SGVhZGVyUEsBAhQAFAAICAgABEn9WMc7N5NJAQAAogIAAFAAAAAAAAAAAAAAAAAAPAEAAENhcmVQbGFuQ3VzdG9taXphdGlvblN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDhfMDgvRUhlYWx0aFBsYW5EZWZpbml0aW9uLzU5MDIwUEsFBgAAAAACAAIA7QAAAAMDAAAAAA=="
}
```

---

// File: input/pagecontent/POST_fetch-careplan-duration-stats.md

`POST [base]/$fetch-careplan-duration-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMGMzZjU1NjctNzhkNi00OGY0LWE5MzktNDRkNWUwNzAwZGMwIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1jYXJlcGxhbi1kdXJhdGlvbi1zdGF0cyIsIkJpbmFyeS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1yZXBvcnRpbmctMTEyOS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi80NzY0MiIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/47642"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "0c3f5567-78d6-48f4-a939-44d5e0700dc0"
    }
  },
  "data": "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"
}
```

---

// File: input/pagecontent/POST_fetch-careplans-by-patient.md

`POST [base]/$fetch-careplans-by-patient`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYTZlYTY3NzUtMDhjNC00Nzc2LTkyNjUtNDU0MWYzOWE0YTNmIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1jYXJlcGxhbnMtYnktcGF0aWVudCIsIkJpbmFyeS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1yZXBvcnRpbmctMTEyOS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi84MDcxMyIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/80713"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "a6ea6775-08c4-4776-9265-4541f39a4a3f"
    }
  },
  "data": "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"
}
```

---

// File: input/pagecontent/POST_fetch-careteam-stats.md

`POST [base]/$fetch-careteam-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMGQ4YWVhMmItZThjMy00ZDA2LWJiZTktYTJhZTM0NDdlYTkwIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1jYXJldGVhbS1zdGF0cyIsIkJpbmFyeS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1yZXBvcnRpbmctMTEyOS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi83ODgzIiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/7883"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "0d8aea2b-e8c3-4d06-bbe9-a2ae3447ea90"
    }
  },
  "data": "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B4aZ997MG87k0xeQYzxspYcdyIl0Z+IhuMUr2J1mIB15S2XEDBjfMC4qDCaIMpUfwQfj7NeUK/F99k6bEZG/yCHGudts4LBq5GGxwwGGfHje6IPxm8foFxUXD3egjTURWf7VUoWqMak+XZIu2Gi0AY+sZxJOIQK2ShZvOwNRd16rrmpFg/JHOS7wmlsWM3Si4NAKXlOuuaJ1wwQVTaGpbrkQvepZzSW5PGUkRBmXgFCpojkCclk5JSolmr5lvaRq6AWt+VDSnomeNqwCdlOVouYsDQ7euCFZgkw+IpAVrKYFp6zdFW2Hp6w+FEVXFASH8iCDs1s3wDqUcoOx+//nczhCmbOcFSIveYO3GrXUCiN33+oae0/dT9LKPTI8+L205o9Mbq5sHjR4sCrVp4UE3Ii7KsqVidTD7HxEOC1L1uajU3J8WdI13wYdq5Je9vYrHpdpkv6UpobZBGzrQafc1i0WLSixVYy+j9K+vjQZiTI8r9HH01ZG2LsX/D0agp9hwl1/dv42BAghBaRjGflp4fcMKsJwVfYDf+p4XG2rM3JvQsD7+/nycrn8BVBLBwjl3f4Y2QEAAO4CAABQSwECFAAUAAgICAAnSf1Yxa9YNMcAAAA3AQAANAAAAAAAAAAAAAAAAAAAAAAAQ2FyZVRlYW1TdGF0c1JlcG9ydF8yMDI0XzA3XzI5XzA5XzA5XzE1L1JlcG9ydEhlYWRlclBLAQIUABQACAgIACdJ/VjZrTlcxgEAAMsCAAA9AAAAAAAAAAAAAAAAACkBAABDYXJlVGVhbVN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDlfMTUvRUhlYWx0aENhcmVUZWFtLzEyOTYzUEsBAhQAFAAICAgAJ0n9WD8hmNXWAQAA7gIAAD0AAAAAAAAAAAAAAAAAWgMAAENhcmVUZWFtU3RhdHNSZXBvcnRfMjAyNF8wN18yOV8wOV8wOV8xNS9FSGVhbHRoQ2FyZVRlYW0vMjY3MTVQSwECFAAUAAgICAAnSf1YmCKm9NUBAADuAgAAPQAAAAAAAAAAAAAAAACbBQAAQ2FyZVRlYW1TdGF0c1JlcG9ydF8yMDI0XzA3XzI5XzA5XzA5XzE1L0VIZWFsdGhDYXJlVGVhbS81NTQxMFBLAQIUABQACAgIACdJ/Vh7aMAovQEAAK4CAAA9AAAAAAAAAAAAAAAAANsHAABDYXJlVGVhbVN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDlfMTUvRUhlYWx0aENhcmVUZWFtLzIwOTUyUEsBAhQAFAAICAgAJ0n9WOXd/hjZAQAA7gIAAD0AAAAAAAAAAAAAAAAAAwoAAENhcmVUZWFtU3RhdHNSZXBvcnRfMjAyNF8wN18yOV8wOV8wOV8xNS9FSGVhbHRoQ2FyZVRlYW0vNTI3ODNQSwUGAAAAAAYABgB5AgAARwwAAAAA"
}
```

---

// File: input/pagecontent/POST_fetch-measurement-stats.md

`POST [base]/$fetch-measurement-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOGNhMjMyNWYtNmUyYi00NTk0LTgwOTktZThkZjUwNTJmN2EyIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1tZWFzdXJlbWVudC1zdGF0cyIsIkJpbmFyeS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1yZXBvcnRpbmctMTEyOS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi8xOTIzIiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/1923"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "8ca2325f-6e2b-4594-8099-e8df5052f7a2"
    }
  },
  "data": "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AEUAAAAAAAAAAAAAAAAAmAUAAE1lYXN1cmVtZW50U3RhdHNSZXBvcnRfMjAyNF8wN18yOV8wOV8wN180My9FSGVhbHRoRXBpc29kZU9mQ2FyZS80MTA0OVBLAQIUABQACAgIAPZI/Vg8klm0wQEAABcEAABEAAAAAAAAAAAAAAAAAM4HAABNZWFzdXJlbWVudFN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDdfNDMvRUhlYWx0aEVwaXNvZGVPZkNhcmUvNTIyMFBLAQIUABQACAgIAPZI/Vh8wbCBwwEAABgEAABFAAAAAAAAAAAAAAAAAAEKAABNZWFzdXJlbWVudFN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDdfNDMvRUhlYWx0aEVwaXNvZGVPZkNhcmUvNzk5MjRQSwECFAAUAAgICAD2SP1YUs39KsIBAAAYBAAARQAAAAAAAAAAAAAAAAA3DAAATWVhc3VyZW1lbnRTdGF0c1JlcG9ydF8yMDI0XzA3XzI5XzA5XzA3XzQzL0VIZWFsdGhFcGlzb2RlT2ZDYXJlLzI1NDU1UEsBAhQAFAAICAgA9kj9WCMDsce/AQAAGAQAAEUAAAAAAAAAAAAAAAAAbA4AAE1lYXN1cmVtZW50U3RhdHNSZXBvcnRfMjAyNF8wN18yOV8wOV8wN180My9FSGVhbHRoRXBpc29kZU9mQ2FyZS8yNTg5MVBLAQIUABQACAgIAPZI/ViAyjP1wAEAABgEAABFAAAAAAAAAAAAAAAAAJ4QAABNZWFzdXJlbWVudFN0YXRzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDdfNDMvRUhlYWx0aEVwaXNvZGVPZkNhcmUvMjM1NzBQSwECFAAUAAgICAD2SP1YzxNGsMEBAAAXBAAARAAAAAAAAAAAAAAAAADREgAATWVhc3VyZW1lbnRTdGF0c1JlcG9ydF8yMDI0XzA3XzI5XzA5XzA3XzQzL0VIZWFsdGhFcGlzb2RlT2ZDYXJlLzIzMjVQSwECFAAUAAgICAD2SP1Y+2HIl8ABAAAXBAAARAAAAAAAAAAAAAAAAAAEFQAATWVhc3VyZW1lbnRTdGF0c1JlcG9ydF8yMDI0XzA3XzI5XzA5XzA3XzQzL0VIZWFsdGhFcGlzb2RlT2ZDYXJlLzc1MTNQSwUGAAAAAAsACwDgBAAANhcAAAAA"
}
```

---

// File: input/pagecontent/POST_fetch-patient-devices.md

`POST [base]/$fetch-patient-devices`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiZTE3ZDBmYzYtNDBhYy00ZGYxLWIzMDItMmJjNDEyYmM1NmUxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRmZXRjaC1wYXRpZW50LWRldmljZXMiLCJyZXBvcnQtbm9uLWFub255bWl6ZWQiLCJCaW5hcnkucmVhZCJdfSwiY29udGV4dCI6eyJvcmdhbml6YXRpb25faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcmVwb3J0aW5nLTExMjkubG9jYWwvZmhpci9Pcmdhbml6YXRpb24vNjM0NDYiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "ANONYMIZED"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/63446"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "e17d0fc6-40ac-4df1-b302-2bc412bc56e1"
    }
  },
  "data": "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"
}
```

---

// File: input/pagecontent/POST_fetch-patient-gdpr.md

`POST [base]/$fetch-patient-gdpr`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOTlhNDkxZjktZjcwYS00OTU2LTg3ZGUtYWRjNGJkYzQ5MDZkIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRmZXRjaC1wYXRpZW50LWdkcHIiLCJyZXBvcnQtbm9uLWFub255bWl6ZWQiLCJCaW5hcnkucmVhZCJdfSwiY29udGV4dCI6eyJvcmdhbml6YXRpb25faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcmVwb3J0aW5nLTExMjkubG9jYWwvZmhpci9Pcmdhbml6YXRpb24vNzY1ODEiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/76581"
      }
    },
    {
      "name": "patient",
      "valueReference": {
        "reference": "https://patient.cit-reporting-1129.local/fhir/Patient/37628"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "99a491f9-f70a-4956-87de-adc4bdc4906d"
    }
  },
  "data": "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"
}
```

---

// File: input/pagecontent/POST_fetch-patient-usage-stats.md

`POST [base]/$fetch-patient-usage-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNmFiOWE3OWItNzg0YS00MTBmLWExZWItZGRhYWEwODg4MjYyIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1wYXRpZW50LXVzYWdlLXN0YXRzIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "ANONYMIZED"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "6ab9a79b-784a-410f-a1eb-ddaaa0888262"
    }
  },
  "data": "UEsDBBQACAgIADtJ/VgAAAAAAAAAAAAAAAA0AAAAUGF0aWVudHNVc2FnZVJlcG9ydF8yMDI0XzA3XzI5XzA5XzA5XzU1L1JlcG9ydEhlYWRlck2OwQrCMBBE/2XPVkJs1eQm6MGDVbQerHgIZSkBm4QkFWrpv7u0IsLc3tud6cGjsz7mqkGQcFJRo4nhGlSN55HA7KsUelQ442nCVgkXBROSkmVzsWRpthZ8UZLtlKdnEX0A2dNtsK2vsOjcVPCDfybIew9mmqCMNV2j37TEGpJe6tniJXptaqKb/JjfDvtyt4XhMQwfUEsHCHyZ8KqVAAAAvwAAAFBLAwQUAAgICAA7Sf1YAAAAAAAAAAAAAAAAUQAAAFBhdGllbnRzVXNhZ2VSZXBvcnRfMjAyNF8wN18yOV8wOV8wOV81NS9QYXRpZW50c1VzYWdlU3VtbWFyeS9QYXRpZW50c1VzYWdlU3VtbWFyeb1SQW7CMBD8y54jZNJyyY1AeyqiKkI9VDmskm1iCa+p7USyUP7ONikcEaC2N4/GOzsz9gFeMWji4Lcea9q0xqCLkB3AWA7NEgNC9vGDIINHSCASOjmmKn0QJLNOkx9uMRoSpmX91dJJ+F2H5mmvva1o/blARzlprudl0B1tqCNeu5V1tMToRa60LQfIpgnsyZUyv2iQa3p21rygD6vRh5qoPrl2302qxbfuKe3sn9Kml31N1Z15r9It+mJMeX7sP408dLuL846cfDgxMZklgCPKKVqucvS00yycOjNvEqiiavB8axm/s1Fq6vsjUEsHCPBaBDvsAAAALwMAAFBLAQIUABQACAgIADtJ/Vh8mfCqlQAAAL8AAAA0AAAAAAAAAAAAAAAAAAAAAABQYXRpZW50c1VzYWdlUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDlfNTUvUmVwb3J0SGVhZGVyUEsBAhQAFAAICAgAO0n9WPBaBDvsAAAALwMAAFEAAAAAAAAAAAAAAAAA9wAAAFBhdGllbnRzVXNhZ2VSZXBvcnRfMjAyNF8wN18yOV8wOV8wOV81NS9QYXRpZW50c1VzYWdlU3VtbWFyeS9QYXRpZW50c1VzYWdlU3VtbWFyeVBLBQYAAAAAAgACAOEAAABiAgAAAAA="
}
```

---

// File: input/pagecontent/POST_fetch-practitioner-gdpr.md

`POST [base]/$fetch-practitioner-gdpr`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiN2U1NzA1NGEtNWY0My00NjZhLWEyNGEtMDA0MWRjYTQyYmQwIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRmZXRjaC1wcmFjdGl0aW9uZXItZ2RwciIsInJlcG9ydC1ub24tYW5vbnltaXplZCIsIkJpbmFyeS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1yZXBvcnRpbmctMTEyOS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi80NzQxIiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/4741"
      }
    },
    {
      "name": "practitioner",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Practitioner/78529"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "7e57054a-5f43-466a-a24a-0041dca42bd0"
    }
  },
  "data": "UEsDBBQACAgIAEFJ/VgAAAAAAAAAAAAAAAA3AAAAUHJhY3RpdGlvbmVyR0RQUlJlcG9ydF8yMDI0XzA3XzI5XzA5XzEwXzAyL1JlcG9ydEhlYWRlcrWRy27CMBBF/2XWJH4kEOI1UncUpVm16sKKBrAUbGtikCDKv9dNKmp136V1z/jcsUcg9I7CXl8QFBxId8EE4yzSy+7QNHMIqx+qNTMluSwzXmWybnmtBFdc5ptCrMVmWxTvkfaa4n0BaQA1xtnBXanD9u5nx2+YkKA+RrBLC22dvV/MQ38XidBN91d8C2TsKab7WA6m1ZN2dNL2D9zgEQlth4v/eYBzCH5QjKVDeWdCtiwYDZkQss571+meHc+G2GuCsrIqBUyJ3Scv9h/29EdYtV3LOuo/p+kLUEsHCPNbwAnaAAAAuQEAAFBLAwQUAAgICABBSf1YAAAAAAAAAAAAAAAARAAAAFByYWN0aXRpb25lckdEUFJSZXBvcnRfMjAyNF8wN18yOV8wOV8xMF8wMi9FSGVhbHRoUHJhY3RpdGlvbmVyLzc4NTI5tZJBj9MwEIX/i6/UiZM6cZ3rLhJwAUFvaA+OPW4tGjtynEql6n9nnLarsnBDXKLE4zdv3pc5k/cfQB3S/ktUOrnkgodIujOJMIU5atieRiAd+a28Is7gmdg0tcSPAZLKkiPECS98zLUKz8cYrDug+jvZpzR2ZQn7xauYZm/2YArzo7R7F8tvKc46zRGewTq/2Nzv0vHR+eWyIl4NueeZWDW4wwnNwHAplBLUWqMol7WhvbSablreQl0xMK0il6z9S9ivYRnx5bX4pCJsQQ2LxxsMr7UbAt6sWf3fEWh0Tdk1R3AGfHLW5d+EA06nKQHOSuboOwfJdtHqbi03Ldof1WGGW22enekEs7xRIGlrbEN5IxFSLxmVbd2atRCsFz2SWpEpqTRPKM2gjkDu2AlUjWDStBSkWFNeVZLKtehpszGctQ1nGpocHKILJiPBTjGhsGY1p0zQWm6Z7CrWMfaO5SfBUCPecdqNyqcl1QBDf99DCxG8zt4Z4YQMQ9wp736qDKnQLtEIY8AGfkerqpbFIWh1uGJ9/NPldWEvOV8ENQX/FMx1lXQwqP4TaEBmVVEXNdsUlWjxjWM4vcjI8yfO81phu0F5tcMOnx8mu+3PP43/2K/kgleL3+UXUEsHCF8x0QTaAQAAtgMAAFBLAQIUABQACAgIAEFJ/VjzW8AJ2gAAALkBAAA3AAAAAAAAAAAAAAAAAAAAAABQcmFjdGl0aW9uZXJHRFBSUmVwb3J0XzIwMjRfMDdfMjlfMDlfMTBfMDIvUmVwb3J0SGVhZGVyUEsBAhQAFAAICAgAQUn9WF8x0QTaAQAAtgMAAEQAAAAAAAAAAAAAAAAAPwEAAFByYWN0aXRpb25lckdEUFJSZXBvcnRfMjAyNF8wN18yOV8wOV8xMF8wMi9FSGVhbHRoUHJhY3RpdGlvbmVyLzc4NTI5UEsFBgAAAAACAAIA1wAAAIsDAAAAAA=="
}
```

---

// File: input/pagecontent/POST_fetch-practitioner-stats.md

`POST [base]/$fetch-practitioner-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOGQ1ZDdhMTUtOTE3ZS00NmFmLWExYzgtYmE3YTlmOTc1M2JiIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1wcmFjdGl0aW9uZXItc3RhdHMiLCJCaW5hcnkucmVhZCJdfSwiY29udGV4dCI6eyJvcmdhbml6YXRpb25faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcmVwb3J0aW5nLTExMjkubG9jYWwvZmhpci9Pcmdhbml6YXRpb24vNzg2ODAiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/78680"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29",
        "end": "2024-07-29"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "8d5d7a15-917e-46af-a1c8-ba7a9f9753bb"
    }
  },
  "data": "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"
}
```

---

// File: input/pagecontent/POST_fetch-questionnaireresponses.md

`POST [base]/$fetch-questionnaireresponses`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiZjEwMjdhY2ItY2ZmOS00ZTkyLWFjZDQtYzlhMTFlOWExNDEwIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1xdWVzdGlvbm5haXJlcmVzcG9uc2VzIiwiQmluYXJ5LnJlYWQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXJlcG9ydGluZy0xMTI5LmxvY2FsL2ZoaXIvT3JnYW5pemF0aW9uLzc0MjE5IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "_partition",
      "valueInteger": 1
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/74219"
      }
    },
    {
      "name": "condition",
      "valueCoding": {
        "system": "urn:oid:1.2.208.176.2.4",
        "code": "DJ44",
        "display": "Kronisk obstruktiv lungesygdom"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:09:07+00:00",
        "end": "2024-07-29T09:09:07+00:00"
      }
    },
    {
      "name": "plan",
      "valueReference": {
        "reference": "https://plan.cit-reporting-1129.local/fhir/PlanDefinition/26068"
      }
    },
    {
      "name": "plan",
      "valueReference": {
        "reference": "https://plan.cit-reporting-1129.local/fhir/PlanDefinition/57178"
      }
    },
    {
      "name": "careteam",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/CareTeam/22185"
      }
    },
    {
      "name": "careteam",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/CareTeam/48210"
      }
    },
    {
      "name": "tag",
      "valueCoding": {
        "system": "http://ehealth.sundhed.dk/cs/ehealth-system",
        "code": "xa"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "f1027acb-cff9-4e92-acd4-c9a11e9a1410"
    }
  },
  "data": "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"
}
```

---

// File: input/pagecontent/POST_fetch-ssl-orders.md

`POST [base]/$fetch-ssl-orders`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMTEzMDM2OGMtZGQ1YS00ZGNiLTllMDUtNDA4NjMwNDJkMzY1IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRmZXRjaC1zc2wtb3JkZXJzIiwicmVwb3J0LW5vbi1hbm9ueW1pemVkIiwiQmluYXJ5LnJlYWQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXJlcG9ydGluZy0xMTI5LmxvY2FsL2ZoaXIvT3JnYW5pemF0aW9uLzI1MDgyIiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/25082"
      }
    },
    {
      "name": "seller",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/42523"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "1130368c-dd5a-4dcb-9e05-40863042d365"
    }
  },
  "data": "UEsDBBQACAgIAPtI/VgAAAAAAAAAAAAAAAAwAAAAU1NMT3JkZXJzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDdfNTQvUmVwb3J0SGVhZGVytY/BjoIwEIbfZc5CS4UIfYaNboSTmz007KhNakuGaqKEd3dWNkq873Hm//752gEIu0BxbU4IGur6Y0M/SP32sYXFX9zYR6ykyhO5SlTVyErLlS7yVC1lWXKQ7ZjuDPGhyAdAD9ztw5labK7db/vzFc5I0F8D+ElvfPDXk72ZaINn6GLcGetI1h84XQePMC6edKCD8W/wFvdI6Fuc/M8BjjF2vRZiXkpbG5Ppg2xIskxVqQutcWJ/tCQ2M1SoQpYKxpm+R+f4+f8tzlWhliz+Hsc7UEsHCLSnz2bSAAAArQEAAFBLAwQUAAgICAD7SP1YAAAAAAAAAAAAAAAANgAAAFNTTE9yZGVyc1JlcG9ydF8yMDI0XzA3XzI5XzA5XzA3XzU0L09yZGVyRGV0YWlscy9PUkRFUq1TwW7CMAz9l55bSqsdBkegk5DQmBgctmkHrzVgKU0qx6B1iH9fCksFaJfBpBxsv+jpxe9lF0y5QB6hACkb9HeBafqmoCLoB2uRyvbj2FoVHZBOThIxVoaF9CpKkrTXUSYHFW+T+HAjns5G2SwIA1kzQjF2NHqjVOgIUQstCdn6kRWQTdtVTIZJat9rI9iCH5u60fVHRRWw1PFg8XJQZFGpq0mes8nkhGWEirbI9dBogVyy0i3Qa82B8UmBnuHycjQnUeiHCKwIrXiuEUiLKVf/jjDm2AyP/T48WjYh3Szr7XrjIuUoju5Nxo9ZEPos3JSCc4tJsPQ1rBixeGBzMZkb3xe4pfzn3ft3lyiGHG9/6FFbnDQZpdJtGcrKMaXdpBclaZTezZP7frfrzqu7krsUCxaDesor0PQFQka3tnpwYb0hjhQ/pU34pqoUli75wPX8BPiP3bbGn/+n4Rr0ql3bfv8NUEsHCFs2HeFkAQAA5QMAAFBLAQIUABQACAgIAPtI/Vi0p89m0gAAAK0BAAAwAAAAAAAAAAAAAAAAAAAAAABTU0xPcmRlcnNSZXBvcnRfMjAyNF8wN18yOV8wOV8wN181NC9SZXBvcnRIZWFkZXJQSwECFAAUAAgICAD7SP1YWzYd4WQBAADlAwAANgAAAAAAAAAAAAAAAAAwAQAAU1NMT3JkZXJzUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDdfNTQvT3JkZXJEZXRhaWxzL09SREVSUEsFBgAAAAACAAIAwgAAAPgCAAAAAA=="
}
```

---

// File: input/pagecontent/POST_get-patient-procedures-AT.md

`POST [base]/$get-patient-procedures`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMzgwOWE1MGMtMDkzOS00N2YzLWE3N2ItMGNlZmI0MDlkMTA4IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNhcmVQbGFuLnNlYXJjaCJdfSwiY29udGV4dCI6eyJwYXRpZW50X2lkIjoiaHR0cHM6Ly9wYXRpZW50LmNpdC1jYXJlcGxhbi0xODA0LmxvY2FsL2ZoaXIvUGF0aWVudC8xOTIwNiIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBBVElFTlQifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.4.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
    "resourceType": "Parameters",
    "parameter": [{
            "name": "patient",
            "valueReference": {
                "reference": "https://patient.devtest.systematic-ehealth.com/fhir/Patient/328"
            }
        }, {
            "name": "start",
            "valueDateTime": "2021-04-02T08:00:00+02:00"
        }, {
            "name": "end",
            "valueDateTime": "2021-04-14T08:00:00+02:00"
        }, {
            "name": "episodeOfCare",
            "valueReference": {
                "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/EpisodeOfCare/164592"
            }
        }
    ]
}
```

__Response__
```json
{
    "resourceType": "Bundle",
    "type": "collection",
    "entry": [{
            "fullUrl": "CarePlan/164585",
            "resource": {
                "resourceType": "CarePlan",
                "id": "164585",
                "meta": {
                    "versionId": "2",
                    "lastUpdated": "2021-11-30T13:46:22.285+00:00",
                    "source": "#5ab1268e-b223-48",
                    "profile": ["http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"]
                },
                "extension": [{
                        "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                        "valueReference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/EpisodeOfCare/164575"
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
                        "extension": [{
                                "url": "status",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://hl7.org/fhir/request-status",
                                            "code": "draft"
                                        }
                                    ]
                                }
                            }, {
                                "url": "period",
                                "valuePeriod": {
                                    "start": "2021-11-30T13:46:20+00:00",
                                    "end": "2021-11-30T13:46:22+00:00"
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
                        "extension": [{
                                "url": "status",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://hl7.org/fhir/request-status",
                                            "code": "active"
                                        }
                                    ]
                                }
                            }, {
                                "url": "period",
                                "valuePeriod": {
                                    "start": "2021-11-30T13:46:22+00:00"
                                }
                            }
                        ]
                    }
                ],
                "instantiatesCanonical": ["https://plan.devtest.systematic-ehealth.com/fhir/PlanDefinition/48271"],
                "status": "active",
                "intent": "order",
                "subject": {
                    "reference": "https://patient.devtest.systematic-ehealth.com/fhir/Patient/328"
                },
                "period": {
                    "start": "2021-11-30T13:46:20+00:00"
                },
                "careTeam": [{
                        "reference": "https://organization.devtest.systematic-ehealth.com/fhir/CareTeam/425625"
                    }
                ],
                "addresses": [{
                        "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/Condition/164574"
                    }
                ],
                "activity": [{
                        "reference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/ServiceRequest/164586"
                        }
                    }
                ]
            }
        }, {
            "fullUrl": "CarePlan/164583",
            "resource": {
                "resourceType": "CarePlan",
                "id": "164583",
                "meta": {
                    "versionId": "2",
                    "lastUpdated": "2021-11-30T13:46:19.624+00:00",
                    "source": "#79f15d11-9d2e-45",
                    "profile": ["http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"]
                },
                "extension": [{
                        "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                        "valueReference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/EpisodeOfCare/164575"
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
                        "extension": [{
                                "url": "status",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://hl7.org/fhir/request-status",
                                            "code": "draft"
                                        }
                                    ]
                                }
                            }, {
                                "url": "period",
                                "valuePeriod": {
                                    "start": "2021-11-30T13:46:18+00:00",
                                    "end": "2021-11-30T13:46:19+00:00"
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
                        "extension": [{
                                "url": "status",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://hl7.org/fhir/request-status",
                                            "code": "active"
                                        }
                                    ]
                                }
                            }, {
                                "url": "period",
                                "valuePeriod": {
                                    "start": "2021-11-30T13:46:19+00:00"
                                }
                            }
                        ]
                    }
                ],
                "instantiatesCanonical": ["https://plan.devtest.systematic-ehealth.com/fhir/PlanDefinition/48270"],
                "status": "active",
                "intent": "order",
                "subject": {
                    "reference": "https://patient.devtest.systematic-ehealth.com/fhir/Patient/328"
                },
                "period": {
                    "start": "2021-11-30T13:46:18+00:00"
                },
                "careTeam": [{
                        "reference": "https://organization.devtest.systematic-ehealth.com/fhir/CareTeam/425625"
                    }
                ],
                "addresses": [{
                        "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/Condition/164574"
                    }
                ],
                "activity": [{
                        "reference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/ServiceRequest/164584"
                        }
                    }
                ]
            }
        }, {
            "fullUrl": "CarePlan/164581",
            "resource": {
                "resourceType": "CarePlan",
                "id": "164581",
                "meta": {
                    "versionId": "2",
                    "lastUpdated": "2021-11-30T13:46:17.866+00:00",
                    "source": "#afd4ec03-d898-4c",
                    "profile": ["http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"]
                },
                "extension": [{
                        "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                        "valueReference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/EpisodeOfCare/164575"
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
                        "extension": [{
                                "url": "status",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://hl7.org/fhir/request-status",
                                            "code": "draft"
                                        }
                                    ]
                                }
                            }, {
                                "url": "period",
                                "valuePeriod": {
                                    "start": "2021-11-30T13:46:16+00:00",
                                    "end": "2021-11-30T13:46:17+00:00"
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
                        "extension": [{
                                "url": "status",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://hl7.org/fhir/request-status",
                                            "code": "active"
                                        }
                                    ]
                                }
                            }, {
                                "url": "period",
                                "valuePeriod": {
                                    "start": "2021-11-30T13:46:17+00:00"
                                }
                            }
                        ]
                    }
                ],
                "instantiatesCanonical": ["https://plan.devtest.systematic-ehealth.com/fhir/PlanDefinition/48269"],
                "status": "active",
                "intent": "order",
                "subject": {
                    "reference": "https://patient.devtest.systematic-ehealth.com/fhir/Patient/328"
                },
                "period": {
                    "start": "2021-11-30T13:46:16+00:00"
                },
                "careTeam": [{
                        "reference": "https://organization.devtest.systematic-ehealth.com/fhir/CareTeam/425625"
                    }
                ],
                "addresses": [{
                        "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/Condition/164574"
                    }
                ],
                "activity": [{
                        "reference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/ServiceRequest/164582"
                        }
                    }
                ]
            }
        }, {
            "fullUrl": "CarePlan/164579",
            "resource": {
                "resourceType": "CarePlan",
                "id": "164579",
                "meta": {
                    "versionId": "2",
                    "lastUpdated": "2021-11-30T13:46:15.767+00:00",
                    "source": "#2ce3591f-95e6-41",
                    "profile": ["http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"]
                },
                "extension": [{
                        "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                        "valueReference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/EpisodeOfCare/164575"
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
                        "extension": [{
                                "url": "status",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://hl7.org/fhir/request-status",
                                            "code": "draft"
                                        }
                                    ]
                                }
                            }, {
                                "url": "period",
                                "valuePeriod": {
                                    "start": "2021-11-30T13:46:12+00:00",
                                    "end": "2021-11-30T13:46:15+00:00"
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
                        "extension": [{
                                "url": "status",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://hl7.org/fhir/request-status",
                                            "code": "active"
                                        }
                                    ]
                                }
                            }, {
                                "url": "period",
                                "valuePeriod": {
                                    "start": "2021-11-30T13:46:15+00:00"
                                }
                            }
                        ]
                    }
                ],
                "instantiatesCanonical": ["https://plan.devtest.systematic-ehealth.com/fhir/PlanDefinition/48268"],
                "status": "active",
                "intent": "order",
                "subject": {
                    "reference": "https://patient.devtest.systematic-ehealth.com/fhir/Patient/328"
                },
                "period": {
                    "start": "2021-11-30T13:46:12+00:00"
                },
                "careTeam": [{
                        "reference": "https://organization.devtest.systematic-ehealth.com/fhir/CareTeam/425625"
                    }
                ],
                "addresses": [{
                        "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/Condition/164574"
                    }
                ],
                "activity": [{
                        "reference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/ServiceRequest/164580"
                        }
                    }
                ]
            }
        }, {
            "fullUrl": "ServiceRequest/164582",
            "resource": {
                "resourceType": "ServiceRequest",
                "id": "164582",
                "meta": {
                    "versionId": "2",
                    "lastUpdated": "2021-11-30T13:46:17.306+00:00",
                    "source": "#c897d581-c258-4c",
                    "profile": ["http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest"]
                },
                "extension": [{
                        "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                        "valueReference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/EpisodeOfCare/164575"
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-sharingPolicy",
                        "valueCodeableConcept": {
                            "coding": [{
                                    "system": "http://ehealth.sundhed.dk/cs/measurement-sharing-policies",
                                    "code": "sharingAllowedDestinationNationalHealthData",
                                    "display": "sharingAllowedDestinationNationalHealthData"
                                }
                            ]
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "low",
                                "valueQuantity": {
                                    "value": 88,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "high",
                                "valueQuantity": {
                                    "value": 92,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "urn:oid:1.2.208.184.100.1",
                                            "code": "GAL",
                                            "display": "Terapeutiske grænseværdier for GUL alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "high",
                                "valueQuantity": {
                                    "value": 88,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "urn:oid:1.2.208.184.100.1",
                                            "code": "RAL",
                                            "display": "Terapeutiske grænseværdier for RØD alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "high",
                                "valueQuantity": {
                                    "value": 1,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/reference-range-type",
                                            "code": "RELRAL",
                                            "display": "Terapeutic relative reference range for RED alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "low",
                                "valueQuantity": {
                                    "value": -1,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "high",
                                "valueQuantity": {
                                    "value": 4,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/reference-range-type",
                                            "code": "RELGAL",
                                            "display": "Terapeutic relative reference range for YELLOW alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                "instantiatesCanonical": ["https://plan.devtest.systematic-ehealth.com/fhir/ActivityDefinition/48265"],
                "status": "active",
                "intent": "order",
                "code": {
                    "coding": [{
                            "system": "urn:oid:1.2.208.176.2.1",
                            "code": "NPU03011",
                            "display": "O2 sat.;Hb(aB)"
                        }
                    ]
                },
                "subject": {
                    "reference": "https://patient.devtest.systematic-ehealth.com/fhir/Patient/328"
                }
            }
        }, {
            "fullUrl": "ServiceRequest/164580",
            "resource": {
                "resourceType": "ServiceRequest",
                "id": "164580",
                "meta": {
                    "versionId": "2",
                    "lastUpdated": "2021-11-30T13:46:14.964+00:00",
                    "source": "#96b1bffb-b547-41",
                    "profile": ["http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest"]
                },
                "extension": [{
                        "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                        "valueReference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/EpisodeOfCare/164575"
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-sharingPolicy",
                        "valueCodeableConcept": {
                            "coding": [{
                                    "system": "http://ehealth.sundhed.dk/cs/measurement-sharing-policies",
                                    "code": "sharingAllowedDestinationNationalHealthData",
                                    "display": "sharingAllowedDestinationNationalHealthData"
                                }
                            ]
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "low",
                                "valueQuantity": {
                                    "value": 88,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "high",
                                "valueQuantity": {
                                    "value": 92,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "urn:oid:1.2.208.184.100.1",
                                            "code": "GAL",
                                            "display": "Terapeutiske grænseværdier for GUL alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "high",
                                "valueQuantity": {
                                    "value": 88,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "urn:oid:1.2.208.184.100.1",
                                            "code": "RAL",
                                            "display": "Terapeutiske grænseværdier for RØD alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "high",
                                "valueQuantity": {
                                    "value": 1,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/reference-range-type",
                                            "code": "RELRAL",
                                            "display": "Terapeutic relative reference range for RED alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "low",
                                "valueQuantity": {
                                    "value": -1,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "high",
                                "valueQuantity": {
                                    "value": 4,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/reference-range-type",
                                            "code": "RELGAL",
                                            "display": "Terapeutic relative reference range for YELLOW alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                "instantiatesCanonical": ["https://plan.devtest.systematic-ehealth.com/fhir/ActivityDefinition/48264"],
                "status": "active",
                "intent": "order",
                "code": {
                    "coding": [{
                            "system": "urn:oid:1.2.208.176.2.1",
                            "code": "NPU03011",
                            "display": "O2 sat.;Hb(aB)"
                        }
                    ]
                },
                "subject": {
                    "reference": "https://patient.devtest.systematic-ehealth.com/fhir/Patient/328"
                },
                "occurrenceTiming": {
                    "repeat": {
                        "boundsPeriod": {
                            "start": "2021-04-01T14:00:00+02:00",
                            "end": "2021-05-07T15:00:00+02:00"
                        },
                        "frequency": 3,
                        "period": 1,
                        "periodUnit": "wk"
                    }
                }
            }
        }, {
            "fullUrl": "ServiceRequest/164586",
            "resource": {
                "resourceType": "ServiceRequest",
                "id": "164586",
                "meta": {
                    "versionId": "3",
                    "lastUpdated": "2021-11-30T13:46:33.375+00:00",
                    "source": "#6d4e02a8-faf5-4c",
                    "profile": ["http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest"]
                },
                "extension": [{
                        "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                        "valueReference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/EpisodeOfCare/164575"
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-sharingPolicy",
                        "valueCodeableConcept": {
                            "coding": [{
                                    "system": "http://ehealth.sundhed.dk/cs/measurement-sharing-policies",
                                    "code": "sharingAllowedDestinationNationalHealthData",
                                    "display": "sharingAllowedDestinationNationalHealthData"
                                }
                            ]
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "low",
                                "valueQuantity": {
                                    "value": 88,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "high",
                                "valueQuantity": {
                                    "value": 92,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "urn:oid:1.2.208.184.100.1",
                                            "code": "GAL",
                                            "display": "Terapeutiske grænseværdier for GUL alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "high",
                                "valueQuantity": {
                                    "value": 88,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "urn:oid:1.2.208.184.100.1",
                                            "code": "RAL",
                                            "display": "Terapeutiske grænseværdier for RØD alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "high",
                                "valueQuantity": {
                                    "value": 1,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/reference-range-type",
                                            "code": "RELRAL",
                                            "display": "Terapeutic relative reference range for RED alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "low",
                                "valueQuantity": {
                                    "value": -1,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "high",
                                "valueQuantity": {
                                    "value": 4,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/reference-range-type",
                                            "code": "RELGAL",
                                            "display": "Terapeutic relative reference range for YELLOW alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                "instantiatesCanonical": ["https://plan.devtest.systematic-ehealth.com/fhir/ActivityDefinition/48267"],
                "status": "active",
                "intent": "order",
                "code": {
                    "coding": [{
                            "system": "urn:oid:1.2.208.176.2.1",
                            "code": "NPU03011",
                            "display": "O2 sat.;Hb(aB)"
                        }
                    ]
                },
                "subject": {
                    "reference": "https://patient.devtest.systematic-ehealth.com/fhir/Patient/328"
                },
                "occurrenceDateTime": "2021-07-05T21:00:00+02:00"
            }
        }, {
            "fullUrl": "ServiceRequest/164584",
            "resource": {
                "resourceType": "ServiceRequest",
                "id": "164584",
                "meta": {
                    "versionId": "2",
                    "lastUpdated": "2021-11-30T13:46:19.107+00:00",
                    "source": "#1f47b922-732b-40",
                    "profile": ["http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest"]
                },
                "extension": [{
                        "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                        "valueReference": {
                            "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/EpisodeOfCare/164575"
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-sharingPolicy",
                        "valueCodeableConcept": {
                            "coding": [{
                                    "system": "http://ehealth.sundhed.dk/cs/measurement-sharing-policies",
                                    "code": "sharingAllowedDestinationNationalHealthData",
                                    "display": "sharingAllowedDestinationNationalHealthData"
                                }
                            ]
                        }
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "low",
                                "valueQuantity": {
                                    "value": 88,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "high",
                                "valueQuantity": {
                                    "value": 92,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "urn:oid:1.2.208.184.100.1",
                                            "code": "GAL",
                                            "display": "Terapeutiske grænseværdier for GUL alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "high",
                                "valueQuantity": {
                                    "value": 88,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "urn:oid:1.2.208.184.100.1",
                                            "code": "RAL",
                                            "display": "Terapeutiske grænseværdier for RØD alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "high",
                                "valueQuantity": {
                                    "value": 1,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/reference-range-type",
                                            "code": "RELRAL",
                                            "display": "Terapeutic relative reference range for RED alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
                        "extension": [{
                                "url": "low",
                                "valueQuantity": {
                                    "value": -1,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "high",
                                "valueQuantity": {
                                    "value": 4,
                                    "unit": "%",
                                    "system": "http://unitsofmeasure.org",
                                    "code": "%"
                                }
                            }, {
                                "url": "type",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/reference-range-type",
                                            "code": "RELGAL",
                                            "display": "Terapeutic relative reference range for YELLOW alarm"
                                        }, {
                                            "system": "urn:oid:1.2.208.176.2.1",
                                            "code": "NPU03011",
                                            "display": "O2 sat.;Hb(aB)"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ],
                "instantiatesCanonical": ["https://plan.devtest.systematic-ehealth.com/fhir/ActivityDefinition/48266"],
                "status": "active",
                "intent": "order",
                "code": {
                    "coding": [{
                            "system": "urn:oid:1.2.208.176.2.1",
                            "code": "NPU03011",
                            "display": "O2 sat.;Hb(aB)"
                        }
                    ]
                },
                "subject": {
                    "reference": "https://patient.devtest.systematic-ehealth.com/fhir/Patient/328"
                },
                "occurrenceTiming": {
                    "repeat": {
                        "frequency": 2,
                        "dayOfWeek": ["mon", "wed", "fri"],
                        "timeOfDay": ["10:00:00"]
                    }
                }
            }
        }, {
            "resource": {
                "resourceType": "Parameters",
                "id": "a4178776-de0a-4c94-9d10-9fc6ab4137f8",
                "parameter": [{
                        "name": "item_1",
                        "part": [{
                                "name": "CarePlan",
                                "valueReference": {
                                    "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/CarePlan/164581"
                                }
                            }, {
                                "name": "ServiceRequest",
                                "valueReference": {
                                    "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/ServiceRequest/164582"
                                }
                            }, {
                                "name": "ServiceRequestVersionId",
                                "valueId": "2"
                            }, {
                                "name": "Activity",
                                "valueString": "Iltmætning"
                            }, {
                                "name": "ResolvedTimingStart"
                            }, {
                                "name": "ResolvedTimingEnd"
                            }, {
                                "name": "TotalSubmitted",
                                "valueInteger": 3
                            }, {
                                "name": "TimingType",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                                            "code": "Adhoc",
                                            "display": "Adhoc"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "name": "item_2",
                        "part": [{
                                "name": "CarePlan",
                                "valueReference": {
                                    "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/CarePlan/164579"
                                }
                            }, {
                                "name": "ServiceRequest",
                                "valueReference": {
                                    "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/ServiceRequest/164580"
                                }
                            }, {
                                "name": "ServiceRequestVersionId",
                                "valueId": "2"
                            }, {
                                "name": "Activity",
                                "valueString": "Iltmætning"
                            }, {
                                "name": "ResolvedTimingStart",
                                "valueDateTime": "2021-04-08T14:00:00+02:00"
                            }, {
                                "name": "ResolvedTimingEnd",
                                "valueDateTime": "2021-04-08T14:00:00+02:00"
                            }, {
                                "name": "TotalSubmitted",
                                "valueInteger": 6
                            }, {
                                "name": "SubmittedTimely",
                                "valueInteger": 3
                            }, {
                                "name": "TimingType",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                                            "code": "Resolved",
                                            "display": "Resolved"
                                        }
                                    ]
                                }
                            }, {
                                "name": "OccurrencesRequested",
                                "valueInteger": 3
                            }
                        ]
                    }, {
                        "name": "item_3",
                        "part": [{
                                "name": "CarePlan",
                                "valueReference": {
                                    "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/CarePlan/164585"
                                }
                            }, {
                                "name": "ServiceRequest",
                                "valueReference": {
                                    "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/ServiceRequest/164586"
                                }
                            }, {
                                "name": "ServiceRequestVersionId",
                                "valueId": "2"
                            }, {
                                "name": "Activity",
                                "valueString": "Iltmætning"
                            }, {
                                "name": "ResolvedTimingStart",
                                "valueDateTime": "2021-04-03T16:00:00+02:00"
                            }, {
                                "name": "ResolvedTimingEnd",
                                "valueDateTime": "2021-04-03T16:00:00+02:00"
                            }, {
                                "name": "TimingType",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                                            "code": "Resolved",
                                            "display": "Resolved"
                                        }
                                    ]
                                }
                            }
                        ]
                    }, {
                        "name": "item_4",
                        "part": [{
                                "name": "CarePlan",
                                "valueReference": {
                                    "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/CarePlan/164583"
                                }
                            }, {
                                "name": "ServiceRequest",
                                "valueReference": {
                                    "reference": "https://careplan.devtest.systematic-ehealth.com/fhir/ServiceRequest/164584"
                                }
                            }, {
                                "name": "ServiceRequestVersionId",
                                "valueId": "2"
                            }, {
                                "name": "Activity",
                                "valueString": "Iltmætning"
                            }, {
                                "name": "ResolvedTimingStart"
                            }, {
                                "name": "ResolvedTimingEnd"
                            }, {
                                "name": "TotalSubmitted",
                                "valueInteger": 3
                            }, {
                                "name": "TimingType",
                                "valueCodeableConcept": {
                                    "coding": [{
                                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                                            "code": "Unresolved",
                                            "display": "Unresolved"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        }, {
            "resource": {
                "resourceType": "OperationOutcome",
                "id": "5c29f26d-4edd-49c6-b8c9-5372ee73b3a1",
                "text": {
                    "status": "generated",
                    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n                  <h1>Operation Outcome</h1>\n                  <table border=\"0\">\n                     <tr>\n                        <td style=\"font-weight: bold;\">WARNING</td>\n                        <td>[]</td>\n                        <td>\n                           <pre>Measurement with unexpected version identified in when processing com.systematic.ehealth.fhirresources.EHealthServiceRequest with reference ServiceRequest/164586/_history/3</pre>\n                        </td> \n                     </tr> \n                  </table> \n               </div>"
                },
                "issue": [{
                        "severity": "warning",
                        "code": "informational",
                        "diagnostics": "Measurement with unexpected version identified in when processing com.systematic.ehealth.fhirresources.EHealthServiceRequest with reference ServiceRequest/164586/_history/3"
                    }
                ]
            }
        }
    ]
}
```


---

// File: input/pagecontent/POST_get-patient-procedures.md

`POST [base]/$get-patient-procedures`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNTg0MDA2OWUtMmVmYy00ZTk1LTg4ZDgtMDYxMWJjOWE5ZDM0IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNhcmVQbGFuLnNlYXJjaCJdfSwiY29udGV4dCI6eyJwYXRpZW50X2lkIjoiaHR0cHM6Ly9wYXRpZW50LmNpdC1jYXJlcGxhbi0yODE4LmxvY2FsL2ZoaXIvUGF0aWVudC80NjQwNiIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBBVElFTlQifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "patient",
      "valueReference": {
        "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/46406"
      }
    },
    {
      "name": "start",
      "valueDateTime": "2024-07-28T13:24:37+00:00"
    },
    {
      "name": "end",
      "valueDateTime": "2024-07-29T12:24:37+00:00"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "collection",
  "entry": [
    {
      "fullUrl": "CarePlan/3060",
      "resource": {
        "resourceType": "CarePlan",
        "id": "3060",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T13:24:38.105+00:00",
          "source": "#a6747bff-dbc7-47",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/3057"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
            "extension": [
              {
                "url": "status",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/request-status",
                      "code": "active"
                    }
                  ]
                }
              },
              {
                "url": "period",
                "valuePeriod": {
                  "start": "2024-07-28T13:24:37+00:00",
                  "end": "2024-07-29T12:24:37+00:00"
                }
              }
            ]
          }
        ],
        "instantiatesCanonical": [
          "https://plan.cit-careplan-2818.local/fhir/PlanDefinition/17896"
        ],
        "status": "active",
        "intent": "option",
        "category": [
          {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/careplan-category",
                "code": "TBD"
              }
            ]
          }
        ],
        "subject": {
          "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/46406"
        },
        "period": {
          "start": "1970-01-01T00:00:01+00:00",
          "end": "1970-01-01T00:01:40+00:00"
        },
        "addresses": [
          {
            "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/3059"
          }
        ],
        "activity": [
          {
            "reference": {
              "reference": "https://careplan.cit-careplan-2818.local/fhir/ServiceRequest/3058"
            }
          }
        ]
      }
    },
    {
      "fullUrl": "ServiceRequest/3058",
      "resource": {
        "resourceType": "ServiceRequest",
        "id": "3058",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T13:24:37.729+00:00",
          "source": "#6e81d514-73de-4b",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/3057"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-sharingPolicy",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/measurement-sharing-policies",
                  "code": "noSharing"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest-statusHistory",
            "extension": [
              {
                "url": "status",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://hl7.org/fhir/request-status",
                      "code": "active"
                    }
                  ]
                }
              },
              {
                "url": "period",
                "valuePeriod": {
                  "start": "2024-07-28T13:24:37+00:00",
                  "end": "2024-07-29T12:24:37+00:00"
                }
              }
            ]
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-include-as-extra",
            "valueBoolean": false
          }
        ],
        "instantiatesCanonical": [
          "https://plan.cit-careplan-2818.local/fhir/ActivityDefinition/86357"
        ],
        "status": "active",
        "intent": "filler-order",
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/activitydefinition-code",
              "code": "TBD"
            }
          ],
          "text": "ea284549-56a0-4cca-9c32-2f40becbecfc"
        },
        "subject": {
          "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/46406"
        },
        "occurrenceDateTime": "2024-07-28T13:24:37+00:00"
      }
    },
    {
      "resource": {
        "resourceType": "Parameters",
        "id": "f0542757-7e9c-4651-a17d-589d1df975f4",
        "parameter": [
          {
            "name": "item_1",
            "part": [
              {
                "name": "CarePlan",
                "valueReference": {
                  "reference": "https://careplan.cit-careplan-2818.local/fhir/CarePlan/3060"
                }
              },
              {
                "name": "ServiceRequest",
                "valueReference": {
                  "reference": "https://careplan.cit-careplan-2818.local/fhir/ServiceRequest/3058"
                }
              },
              {
                "name": "ServiceRequestVersionId",
                "valueId": "1"
              },
              {
                "name": "Activity",
                "valueString": "Iltmætning"
              },
              {
                "name": "ResolvedTimingStart",
                "valueDateTime": "2024-07-28T13:24:37+00:00"
              },
              {
                "name": "ResolvedTimingEnd",
                "valueDateTime": "2024-07-28T13:24:37+00:00"
              },
              {
                "name": "TimingType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                      "code": "Resolved",
                      "display": "Resolved"
                    }
                  ]
                }
              },
              {
                "name": "OccurrencesRequested",
                "valueInteger": 1
              }
            ]
          }
        ]
      }
    },
    {
      "resource": {
        "resourceType": "OperationOutcome",
        "id": "215582b7-0a82-4555-87a5-acde6c29e705",
        "text": {
          "status": "generated",
          "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"></table></div>"
        }
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_get-report-job-status.md

`POST [base]/$get-report-job-status`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOGExNGNiYzItZWYzZC00NzdjLTkyMWUtODlkNjJhOTcxMDM0IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIkJpbmFyeS5yZWFkIl19LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters"
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "collection"
}
```

---

// File: input/pagecontent/POST_import-organizations.md

`POST [base]/$import-organizations`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMGYyMTgyMjQtN2M5OS00ODJhLWFhMWEtYzhhMzQ1ZTJhODI0IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiR0ZXN0LW9ubHktY3JlYXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "organizations",
      "resource": {
        "resourceType": "Bundle",
        "type": "transaction",
        "entry": [
          {
            "fullUrl": "urn:uuid:f86ef3ac-d4e4-4664-b2c8-61c6faf228d3",
            "resource": {
              "resourceType": "Organization",
              "meta": {
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization"
                ]
              },
              "extension": [
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-source",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://ehealth.sundhed.dk/cs/organization-source",
                        "code": "SOR"
                      }
                    ]
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-synchronizationStatus",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://ehealth.sundhed.dk/cs/organization-synchronization-status",
                        "code": "NotSynchronized"
                      }
                    ]
                  }
                }
              ],
              "identifier": [
                {
                  "use": "official",
                  "system": "urn:oid:2.16.840.1.113883.2.24.1.1",
                  "value": "11111111",
                  "period": {
                    "start": "2024-07-29T09:15:10+00:00"
                  }
                },
                {
                  "use": "official",
                  "system": "urn:oid:1.2.208.176.1.1",
                  "value": "43616",
                  "period": {
                    "start": "2024-07-29T09:15:10+00:00"
                  }
                }
              ],
              "type": [
                {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/sor-organization-type",
                      "code": "56781000005109"
                    }
                  ]
                }
              ],
              "name": "b6e10dae-be34-48dc-9b86-38543ce0e0de"
            },
            "request": {
              "method": "POST",
              "url": "Organization"
            }
          }
        ]
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "transaction-response",
  "entry": [
    {
      "response": {
        "status": "200 OK",
        "location": "https://organization.cit-organization-1209.local/fhir/Organization/122/_history/2",
        "etag": "2",
        "lastModified": "2024-07-29T09:15:10.826+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully updated resource &quot;Organization/122/_history/2&quot;.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_UPDATE",
                    "display": "Update succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully updated resource \"Organization/122/_history/2\"."
            }
          ]
        }
      }
    },
    {
      "response": {
        "status": "201 Created",
        "location": "https://organization.cit-organization-1209.local/fhir/Provenance/123/_history/1",
        "etag": "1",
        "lastModified": "2024-07-29T09:15:11.086+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;Provenance/123/_history/1&quot;. Took 2ms.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_CREATE",
                    "display": "Create succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully created resource \"Provenance/123/_history/1\". Took 2ms."
            }
          ]
        }
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_Library_evaluate.md

`POST [base]/Library/31/$evaluate`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNGM3ZGRlMzEtYThiZC00ZWJkLTkwMzktNjhiZjMwNmIwZmE1IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkxpYnJhcnkuY3JlYXRlIiwiTGlicmFyeS51cGRhdGUiLCJMaWJyYXJ5LnJlYWQiLCJMaWJyYXJ5LnNlYXJjaCIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiTGlicmFyeSRldmFsdWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "parameters",
      "resource": {
        "resourceType": "Parameters",
        "parameter": [
          {
            "name": "observationHeight",
            "resource": {
              "resourceType": "Observation",
              "id": "95401",
              "meta": {
                "versionId": "1",
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-observation"
                ]
              },
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                  "valueReference": {
                    "reference": "https://careplan.cit-library-866.local/fhir/EpisodeOfCare/94531"
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-resolved-timing",
                  "extension": [
                    {
                      "url": "serviceRequestVersionId",
                      "valueId": "42"
                    },
                    {
                      "url": "type",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                            "code": "Adhoc"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "basedOn": [
                {
                  "reference": "https://careplan.cit-library-866.local/fhir/ServiceRequest/14747"
                }
              ],
              "status": "final",
              "code": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.208.176.2.1",
                    "code": "NPU03011"
                  }
                ]
              },
              "subject": {
                "reference": "https://patient.cit-library-866.local/fhir/Patient/59211"
              },
              "effectivePeriod": {
                "start": "2024-07-29T09:08:15+00:00",
                "end": "2024-07-29T09:08:15+00:00"
              },
              "performer": [
                {
                  "reference": "https://patient.cit-library-866.local/fhir/Patient/59211"
                }
              ],
              "valueQuantity": {
                "value": 1.7,
                "system": "http://unitsofmeasure.org",
                "code": "m"
              },
              "device": {
                "reference": "https://device.cit-library-866.local/fhir/Device/13965"
              }
            }
          },
          {
            "name": "observationWeight",
            "resource": {
              "resourceType": "Observation",
              "id": "6259",
              "meta": {
                "versionId": "1",
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-observation"
                ]
              },
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                  "valueReference": {
                    "reference": "https://careplan.cit-library-866.local/fhir/EpisodeOfCare/94395"
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-resolved-timing",
                  "extension": [
                    {
                      "url": "serviceRequestVersionId",
                      "valueId": "42"
                    },
                    {
                      "url": "type",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                            "code": "Adhoc"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "basedOn": [
                {
                  "reference": "https://careplan.cit-library-866.local/fhir/ServiceRequest/14747"
                }
              ],
              "status": "final",
              "code": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.208.176.2.1",
                    "code": "NPU03011"
                  }
                ]
              },
              "subject": {
                "reference": "https://patient.cit-library-866.local/fhir/Patient/74345"
              },
              "effectivePeriod": {
                "start": "2024-07-29T09:08:15+00:00",
                "end": "2024-07-29T09:08:15+00:00"
              },
              "performer": [
                {
                  "reference": "https://patient.cit-library-866.local/fhir/Patient/74345"
                }
              ],
              "valueQuantity": {
                "value": 100,
                "system": "http://unitsofmeasure.org",
                "code": "kg"
              },
              "device": {
                "reference": "https://device.cit-library-866.local/fhir/Device/83335"
              }
            }
          }
        ]
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "GuidanceResponse",
  "meta": {
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-guidanceresponse"
    ]
  },
  "contained": [
    {
      "resourceType": "Parameters",
      "id": "1",
      "parameter": [
        {
          "name": "rule-output",
          "valueDecimal": 34.60
        },
        {
          "name": "fact",
          "valueReference": {
            "reference": "https://plan.cit-library-866.local/fhir/PlanDefinition/59502/_history/1"
          }
        },
        {
          "name": "fact",
          "valueReference": {
            "reference": "https://careplan.cit-library-866.local/fhir/ServiceRequest/14747/_history/1"
          }
        },
        {
          "name": "fact",
          "valueReference": {
            "reference": "https://plan.cit-library-866.local/fhir/ActivityDefinition/41047/_history/1"
          }
        },
        {
          "name": "fact",
          "valueReference": {
            "reference": "http://patient.cit-library-866/fhir/Patient/59211/_history/1"
          }
        }
      ]
    }
  ],
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-guidanceresponse-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-library-866.local/fhir/EpisodeOfCare/94531"
      }
    }
  ],
  "moduleCanonical": "https://library.cit-library-866.local/fhir/Library/31",
  "status": "success",
  "subject": {
    "reference": "https://patient.cit-library-866.local/fhir/Patient/59211"
  },
  "outputParameters": {
    "reference": "#1"
  }
}
```

---

// File: input/pagecontent/POST_mark-all-resources-for-reindexing.md

`POST [base]/$mark-all-resources-for-reindexing`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOTg1Nzg0ZjgtNmNmNi00MzgyLTg2NmUtZjVlNjk0NWEyNGE1IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiR0ZXN0LW9ubHktY3JlYXRlIiwiJHJlaW5kZXgiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "reindexAll",
      "valueBoolean": false
    },
    {
      "name": "resourceTypes",
      "valueString": "Organization"
    },
    {
      "name": "resourceTypes",
      "valueString": "CareTeam"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "status",
      "valueString": "Marked resources"
    }
  ]
}
```

---

// File: input/pagecontent/POST_migrate-list.md

`POST [base]/$migrate-list`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUGxhbkRlZmluaXRpb24uY3JlYXRlIiwiQWN0aXZpdHlEZWZpbml0aW9uLnVwZGF0ZSIsIiRtaWdyYXRlIiwiQWN0aXZpdHlEZWZpbml0aW9uLnJlYWQiLCJQbGFuRGVmaW5pdGlvbi5zZWFyY2giLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIlBsYW5EZWZpbml0aW9uLnVwZGF0ZSIsIlBsYW5EZWZpbml0aW9uLnJlYWQiLCJQbGFuRGVmaW5pdGlvbiRhcHBseSIsIkRvY3VtZW50UmVmZXJlbmNlLnJlYWQiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "migrationId",
      "valueString": "AddApprovalPolicyToActivityDefinitions"
    },
    {
      "name": "ids",
      "valueString": "326"
    },
    {
      "name": "ids",
      "valueString": "327"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>No issues detected during validation</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "diagnostics": "No issues detected during validation"
    }
  ]
}
```

---

// File: input/pagecontent/POST_migrate.md

`POST [base]/$migrate`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiVGFzay5yZWFkIiwiJG1pZ3JhdGUiLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "migrationId",
      "valueString": "AddForReferenceToTaskMigration"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>No issues detected during validation</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "diagnostics": "No issues detected during validation"
    }
  ]
}
```

---

// File: input/pagecontent/POST_persist-login.md

`POST [base]/$persist-login`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMTEyMTZiY2ItYzdkYi00NzViLWEzZTctMWQ3ZWRkZWI0ZDY3IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlByYWN0aXRpb25lclJvbGUucmVhZCIsIiRwZXJzaXN0LWxvZ2luIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "careTeam",
      "resource": {
        "resourceType": "CareTeam",
        "id": "145",
        "meta": {
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careteam"
          ]
        },
        "status": "active",
        "name": "Name",
        "participant": [
          {
            "role": [
              {
                "coding": [
                  {
                    "system": "http://ehealth.sundhed.dk/cs/careteam-participant-role",
                    "code": "monitoring_adjuster"
                  }
                ]
              }
            ],
            "member": {
              "reference": "https://organization.cit-organization-1209.local/fhir/Practitioner/147"
            }
          }
        ],
        "reasonCode": [
          {
            "coding": [
              {
                "system": "urn:oid:1.2.208.176.2.4",
                "code": "DJ44"
              }
            ]
          }
        ]
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "collection"
}
```

---

// File: input/pagecontent/POST_PlanDefinition_apply.md

`POST [base]/PlanDefinition/456/$apply`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiZTM0N2ViY2EtODFhNy00YjgzLTljMjctOWNjMGFhMjNlMjU2IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlBsYW5EZWZpbml0aW9uJGFwcGx5Il19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1wbGFuLTE2NDEubG9jYWwvZmhpci9Pcmdhbml6YXRpb24vODc5MjYiLCJjYXJlX3RlYW1faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcGxhbi0xNjQxLmxvY2FsL2ZoaXIvQ2FyZVRlYW0vMTcwMzEiLCJlcGlzb2RlX29mX2NhcmVfaWQiOiJodHRwczovL2NhcmVwbGFuLmNpdC1wbGFuLTE2NDEubG9jYWwvZmhpci9FcGlzb2RlT2ZDYXJlLzUyMjIiLCJwYXRpZW50X2lkIjoiaHR0cHM6Ly9wYXRpZW50LmNpdC1wbGFuLTE2NDEubG9jYWwvZmhpci9QYXRpZW50LzEzMjU0IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUEFUSUVOVCJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-plan-1641.local/fhir/EpisodeOfCare/5222"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "CarePlan",
  "id": "57954",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-31T13:16:44.313+00:00",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-plan-1641.local/fhir/EpisodeOfCare/41202"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan-statusHistory",
      "extension": [
        {
          "url": "status",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://hl7.org/fhir/request-status",
                "code": "draft"
              }
            ]
          }
        },
        {
          "url": "period",
          "valuePeriod": {
            "start": "2024-07-31T13:16:44+00:00"
          }
        }
      ]
    }
  ],
  "instantiatesCanonical": [
    "https://plan.cit-plan-1641.local/fhir/PlanDefinition/457/_history/1"
  ],
  "status": "draft",
  "intent": "option",
  "category": [
    {
      "coding": [
        {
          "system": "http://ehealth.sundhed.dk/cs/careplan-category",
          "code": "TBD"
        }
      ]
    }
  ],
  "subject": {
    "reference": "https://patient.cit-plan-1641.local/fhir/Patient/68223"
  },
  "period": {
    "start": "1970-01-01T00:00:01+00:00",
    "end": "1970-01-01T00:01:40+00:00"
  },
  "addresses": [
    {
      "reference": "https://careplan.cit-plan-1641.local/fhir/Condition/53973"
    }
  ]
}
```

---

// File: input/pagecontent/POST_PlanDefinition_export.md

`POST [base]/PlanDefinition/465/$export`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMDk3MTY0ZWUtOGRhYi00ODIzLWI3NDItNjllZDY3OWUyMDNlIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkFjdGl2aXR5RGVmaW5pdGlvbi5yZWFkIiwiUGxhbkRlZmluaXRpb24uc2VhcmNoIiwiUGxhbkRlZmluaXRpb24ucmVhZCIsIkRvY3VtZW50UmVmZXJlbmNlLnJlYWQiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "exclude",
      "valueString": "dummy"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "meta": {
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "data": "UEsDBBQACAgIABdq/1gAAAAAAAAAAAAAAAA5AAAAUGxhbkRlZmluaXRpb25fNDY1XzIwMjRfMDdfMzFfMTNfMTZfNDYvUGxhbkRlZmluaXRpb24vNDY1pZJNT8MwDIb/SzjSr2xdu/UKF04gGCe0Q0jcNSJLqsQdjKn/HbfVNoQQF6RISfxafh87OTIPwXVewvrQAqvYgxH2FmptNWpnWcS0omheLOi4AxSsOrI9+EDi3aBwihsR8LlVAmGIzLJZHmdlPOdrPq94UeVFUq6W11lWZRllT3aUeLValPW8WIpYFVzE+YrE1rtaG1JfWIPYVmkKDQiDTRI6qxpQiXpL60b79Al9J7HzcKE95cYtNaEuTWz6iMEHgh2oqfSRdd4QwD8cdk7pWoOPvSPa38t7qMGDlYO+F6aDx3OAhnhRJ5BAJM5vhdWfYrBKpMaxkZgXOU+Mk8JMXPffstKSzwrO+j46u05Ao+GNUyBeDe3k0+JgKwncbkfKcAgIuz/nIEP6s1MqMCC7dwue9Zue1iY6fYnhQyTjI6PALtBVSNR7YP0XUEsHCMWHk/BKAQAAaQIAAFBLAwQUAAgICAAXav9YAAAAAAAAAAAAAAAAOQAAAFBsYW5EZWZpbml0aW9uXzQ2NV8yMDI0XzA3XzMxXzEzXzE2XzQ2L09yZ2FuaXphdGlvbi83MTI2MbWSTU8DIRCG/wtXyy6w2+26V42JFz20N9MDhVmXuIUGhsba7H8XqvUjMZ6UC5lheN95YI7EQ3DRK1gddkA6cu8fpTUvEo2zZEaMTrkFFw1PwRZQku5I9uBDOr7NZzm/8643Y7r9QAbEXVeWMIAccShCtHoAXeinsh+ML5foo8Lo4Rp6Y002OddS99V5Pc0IPCPYbJSEjyT6Mdn9kT59Y0697+UY4cppkJsx7VbBDjOjctrYx5NzOASE7a/mKpQ/yyeZ/KpbaaMcybSeptmfoxysGrw7x0uUGMP/kX13o+Fs905653D5UQL6hLzOcwQWTW/Av31myLWu740y6V1mn51EbztndCcK3hRtzQpecF61bVWIQtQ5OqPl4XtfeQbBG6czX+rIJ1AimKgpW9CKr3jV8aarmwvGOsbIqSMrt1lCQy/jiCsIeCMVOn+gLVebBhaCXoJgtBYbRi/ndU95NecNbGDRyJZMr1BLBwjuDDwVaAEAADoDAABQSwECFAAUAAgICAAXav9YxYeT8EoBAABpAgAAOQAAAAAAAAAAAAAAAAAAAAAAUGxhbkRlZmluaXRpb25fNDY1XzIwMjRfMDdfMzFfMTNfMTZfNDYvUGxhbkRlZmluaXRpb24vNDY1UEsBAhQAFAAICAgAF2r/WO4MPBVoAQAAOgMAADkAAAAAAAAAAAAAAAAAsQEAAFBsYW5EZWZpbml0aW9uXzQ2NV8yMDI0XzA3XzMxXzEzXzE2XzQ2L09yZ2FuaXphdGlvbi83MTI2MVBLBQYAAAAAAgACAM4AAACAAwAAAAA="
}
```

---

// File: input/pagecontent/POST_PlanDefinition_import.md

`POST [base]/PlanDefinition/$import`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNWMwMTg1YTYtMWVjNi00ZWQyLThjNGUtZGQ1YzhkNzJmYThlIiwibmFtZSI6IkltcG9ydGVyIE5hbWUiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUGxhbkRlZmluaXRpb24uY3JlYXRlIiwiQWN0aXZpdHlEZWZpbml0aW9uLnVwZGF0ZSIsIlF1ZXN0aW9ubmFpcmUucmVhZCIsIkFjdGl2aXR5RGVmaW5pdGlvbi5yZWFkIiwiUXVlc3Rpb25uYWlyZS5jcmVhdGUiLCJEb2N1bWVudFJlZmVyZW5jZS51cGRhdGUiLCJEb2N1bWVudFJlZmVyZW5jZS5jcmVhdGUiLCJQbGFuRGVmaW5pdGlvbi51cGRhdGUiLCJQbGFuRGVmaW5pdGlvbi5yZWFkIiwiQWN0aXZpdHlEZWZpbml0aW9uLmNyZWF0ZSIsIlBsYW5EZWZpbml0aW9uJGFwcGx5IiwiRG9jdW1lbnRSZWZlcmVuY2UucmVhZCJdfSwiY29udGV4dCI6eyJvcmdhbml6YXRpb25faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcGxhbi0xNzg0LmxvY2FsL2ZoaXIvT3JnYW5pemF0aW9uLzEyMzM0IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "planDefinitionPackage",
      "resource": {
        "resourceType": "Binary",
        "meta": {
          "profile": [
            "http://hl7.org/fhir/StructureDefinition/Binary"
          ]
        },
        "contentType": "application/gzip-json",
        "data": "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AQAA+gMAADkAAAAAAAAAAAAAAAAAAAAAAFBsYW5EZWZpbml0aW9uXzIwNV8yMDI0XzEwXzI2XzE1XzU1XzM4L1BsYW5EZWZpbml0aW9uLzIwNVBLAQIUABQACAgIAPN+WllCskoOLQEAAO8CAAA5AAAAAAAAAAAAAAAAAOEBAABQbGFuRGVmaW5pdGlvbl8yMDVfMjAyNF8xMF8yNl8xNV81NV8zOC9Pcmdhbml6YXRpb24vMjMyMjFQSwECFAAUAAgICADzflpZljQMtTEBAADyAgAAOQAAAAAAAAAAAAAAAAB1AwAAUGxhbkRlZmluaXRpb25fMjA1XzIwMjRfMTBfMjZfMTVfNTVfMzgvT3JnYW5pemF0aW9uLzEyMzM0UEsBAhQAFAAICAgA835aWUBNJz01AgAA1wYAAD0AAAAAAAAAAAAAAAAADQUAAFBsYW5EZWZpbml0aW9uXzIwNV8yMDI0XzEwXzI2XzE1XzU1XzM4L0FjdGl2aXR5RGVmaW5pdGlvbi8yMDRQSwECFAAUAAgICADzflpZTVCy2GMCAACXCAAAOQAAAAAAAAAAAAAAAACtBwAAUGxhbkRlZmluaXRpb25fMjA1XzIwMjRfMTBfMjZfMTVfNTVfMzgvUXVlc3Rpb25uYWlyZS85MzUwUEsFBgAAAAAFAAUABwIAAHcKAAAAAA=="
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "transaction-response",
  "entry": [
    {
      "fullUrl": "PlanDefinition/206",
      "resource": {
        "resourceType": "PlanDefinition",
        "id": "206",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-10-26T15:55:38.920+00:00",
          "source": "#a63780b8-287f-48ac-bdf1-fbce6064022a",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-plandefinition"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
            "extension": [
              {
                "url": "reference",
                "valueReference": {
                  "reference": "https://organization.cit-plan-1784.local/fhir/Organization/12334"
                }
              },
              {
                "url": "role",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/modifier-role",
                      "code": "co-author"
                    }
                  ]
                }
              }
            ]
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
            "extension": [
              {
                "url": "reference",
                "valueReference": {
                  "reference": "https://organization.cit-plan-1784.local/fhir/Organization/12334"
                }
              },
              {
                "url": "role",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/modifier-role",
                      "code": "owner"
                    }
                  ]
                }
              }
            ]
          }
        ],
        "version": "1.0",
        "status": "draft",
        "action": [
          {
            "definitionCanonical": "https://plan.cit-plan-1784.local/fhir/ActivityDefinition/207"
          }
        ]
      },
      "response": {
        "status": "201 Created",
        "location": "https://plan.cit-plan-1784.local/fhir/PlanDefinition/206/_history/1",
        "etag": "1",
        "lastModified": "2024-10-26T15:55:38.920+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;PlanDefinition/206/_history/1&quot;. Took 7ms.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_CREATE",
                    "display": "Create succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully created resource \"PlanDefinition/206/_history/1\". Took 7ms."
            }
          ]
        }
      }
    },
    {
      "fullUrl": "ActivityDefinition/207",
      "resource": {
        "resourceType": "ActivityDefinition",
        "id": "207",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-10-26T15:55:38.920+00:00",
          "source": "#a63780b8-287f-48ac-bdf1-fbce6064022a",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-activitydefinition"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-sharingPolicy",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/measurement-sharing-policies",
                  "code": "noSharing"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-sharingApprovalPolicy",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/measurement-sharing-approval-policies",
                  "code": "manual"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
            "extension": [
              {
                "url": "reference",
                "valueReference": {
                  "reference": "https://organization.cit-plan-1784.local/fhir/Organization/12334"
                }
              },
              {
                "url": "role",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/modifier-role",
                      "code": "co-author"
                    }
                  ]
                }
              }
            ]
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
            "extension": [
              {
                "url": "reference",
                "valueReference": {
                  "reference": "https://organization.cit-plan-1784.local/fhir/Organization/12334"
                }
              },
              {
                "url": "role",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/modifier-role",
                      "code": "owner"
                    }
                  ]
                }
              }
            ]
          }
        ],
        "version": "1.0",
        "name": "e7ed8337-2423-41d8-a0be-469979e79774",
        "status": "draft",
        "topic": [
          {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/definition-topic",
                "code": "treatment"
              }
            ]
          }
        ],
        "relatedArtifact": [
          {
            "type": "composed-of",
            "resource": "https://questionnaire.cit-plan-1784.local/fhir/Questionnaire/97009"
          }
        ],
        "code": {
          "coding": [
            {
              "system": "urn:oid:1.2.208.176.2.1",
              "code": "NPU03011"
            }
          ]
        }
      },
      "response": {
        "status": "201 Created",
        "location": "https://plan.cit-plan-1784.local/fhir/ActivityDefinition/207/_history/1",
        "etag": "1",
        "lastModified": "2024-10-26T15:55:38.920+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;ActivityDefinition/207/_history/1&quot;. Took 7ms.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_CREATE",
                    "display": "Create succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully created resource \"ActivityDefinition/207/_history/1\". Took 7ms."
            }
          ]
        }
      }
    },
    {
      "fullUrl": "Questionnaire/9350",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "9350",
        "meta": {
          "versionId": "1",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire-type",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/questionnaire-types",
                  "code": "QQ"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
            "extension": [
              {
                "url": "reference",
                "valueReference": {
                  "reference": "https://organization.cit-plan-1784.local/fhir/Organization/12334"
                }
              },
              {
                "url": "role",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/modifier-role",
                      "code": "owner"
                    }
                  ]
                }
              }
            ]
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-employee-title",
            "valueString": "Questionnaire_1_EmployeeTitle"
          }
        ],
        "identifier": [
          {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:uuid:2.16.840.1.113883.4.642.3.21",
            "assigner": {
              "identifier": {
                "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
                "value": "cit-plan-1784"
              }
            }
          }
        ],
        "version": "1.0",
        "name": "aa48b58f-418f-46cb-b0b3-60450f337669",
        "status": "draft",
        "publisher": "Importer Name",
        "item": [
          {
            "extension": [
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs",
                "valueInteger": 2
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs",
                "valueInteger": 7
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/minValue",
                "valueInteger": 1
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/maxValue",
                "valueInteger": 5
              },
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire-feedback",
                "extension": [
                  {
                    "url": "value",
                    "valueString": "value"
                  },
                  {
                    "url": "min",
                    "valueInteger": 2
                  },
                  {
                    "url": "max",
                    "valueInteger": 4
                  }
                ]
              },
              {
                "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue",
                "valueInteger": 2
              }
            ],
            "linkId": "link,link,linkA",
            "type": "integer",
            "required": true,
            "repeats": true
          }
        ]
      },
      "response": {
        "status": "201 Created",
        "location": "https://questionnaire.cit-plan-1784.local/fhir/Questionnaire/97009"
      }
    },
    {
      "response": {
        "status": "200",
        "outcome": {
          "resourceType": "OperationOutcome",
          "id": "1f214629-100f-4edd-abd8-b0915cabc2d8",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>$Questionnaire|urn:uuid:2.16.840.1.113883.4.642.3.21||CO_AUTHOR_ORGANIZATIONS_FOR_QUESTIONNAIRES_REMOVED</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "diagnostics": "$Questionnaire|urn:uuid:2.16.840.1.113883.4.642.3.21||CO_AUTHOR_ORGANIZATIONS_FOR_QUESTIONNAIRES_REMOVED"
            }
          ]
        }
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_reindex.md

`POST [base]/$reindex`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiZDJjZDZlNzMtNmUxMS00M2I0LWFmY2ItOTQxNzgyZTg4MjUzIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiR0ZXN0LW9ubHktY3JlYXRlIiwiJHJlaW5kZXgiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "url",
      "valueString": "Organization?"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "jobId",
      "valueString": "f9583262-9304-4f62-ae31-765c6d3838a8"
    }
  ]
}
```

---

// File: input/pagecontent/POST_schedule-careplan-and-episode-of-care-stats.md

`POST [base]/$schedule-careplan-and-episode-of-care-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNjkyNGJiZmYtNGE4OS00ZmZkLWFkNjctMzdiYzRhZjZmNGVlIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1lcGlzb2Rlb2ZjYXJlLXN0YXRzIiwiQmluYXJ5LnJlYWQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXJlcG9ydGluZy0xMTI5LmxvY2FsL2ZoaXIvT3JnYW5pemF0aW9uLzI1MDEwIiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/25010"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:07:15+00:00",
        "end": "2024-07-29T09:07:15+00:00"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "3",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:07:16.216+00:00",
    "source": "#2dee8626-72e5-4207-be3d-d947e0bdfa06",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "6924bbff-4a89-4ffd-ad67-37bc4af6f4ee"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-careplan-customization-stats.md

`POST [base]/$schedule-careplan-customization-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJGZldGNoLWNhcmVwbGFuLWN1c3RvbWl6YXRpb24tc3RhdHMiLCJyZXBvcnQtbm9uLWFub255bWl6ZWQiLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwiY29udGV4dCI6eyJvcmdhbml6YXRpb25faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcmVwb3J0aW5nLTExMjkubG9jYWwvZmhpci9Pcmdhbml6YXRpb24vNDM0MjciLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/43427"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:08:09+00:00",
        "end": "2024-07-29T09:08:09+00:00"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "9",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:08:10.807+00:00",
    "source": "#f03c35ae-7b21-4a1a-a84e-04d6385a74ea",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-careplan-duration-stats.md

`POST [base]/$schedule-careplan-duration-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMzczYWNkMTUtODgyOS00YzY1LWFkYWMtZmZkMTQ0NWFlZThkIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1jYXJlcGxhbi1kdXJhdGlvbi1zdGF0cyIsIkJpbmFyeS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1yZXBvcnRpbmctMTEyOS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi8zNDE3MiIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/34172"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:08:33+00:00",
        "end": "2024-07-29T09:08:33+00:00"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "12",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:08:34.917+00:00",
    "source": "#149f687a-24f4-40c4-8f70-4008bbb3754b",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "373acd15-8829-4c65-adac-ffd1445aee8d"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-careplans-by-patient.md

`POST [base]/$schedule-careplans-by-patient`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiZmIyNGQxODgtNWZkYi00MDkyLTljNDUtOWY5ODcwOTVmMDI3IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1jYXJlcGxhbnMtYnktcGF0aWVudCIsIkJpbmFyeS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1yZXBvcnRpbmctMTEyOS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi83OTk1MCIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/79950"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:09:24+00:00",
        "end": "2024-07-29T09:09:24+00:00"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "22",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:09:25.820+00:00",
    "source": "#3c24bed5-e7a0-467d-b314-ef747942c458",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "fb24d188-5fdb-4092-9c45-9f987095f027"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-careteam-stats.md

`POST [base]/$schedule-careteam-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiODNmM2RhOTUtYWUwMy00OTljLWFlNjgtYjZmZWNhNWYyODEyIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1jYXJldGVhbS1zdGF0cyIsIkJpbmFyeS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1yZXBvcnRpbmctMTEyOS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi83NDU3MyIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/74573"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:09:17+00:00",
        "end": "2024-07-29T09:09:17+00:00"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "21",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:09:18.359+00:00",
    "source": "#cce94de8-3dcd-433e-a611-18bfbd0ec899",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "83f3da95-ae03-499c-ae68-b6feca5f2812"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-measurement-stats.md

`POST [base]/$schedule-measurement-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMDQ5Njc2NDctNjlkYy00Y2FjLWE4MzgtMWVjNThjNTI3ZWFkIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1tZWFzdXJlbWVudC1zdGF0cyIsIkJpbmFyeS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1yZXBvcnRpbmctMTEyOS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi85MTk3OSIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/91979"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:07:46+00:00",
        "end": "2024-07-29T09:07:46+00:00"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "5",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:07:47.824+00:00",
    "source": "#7c06ce26-c826-9041-91b7-d9d15c0a8b06",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "04967647-69dc-4cac-a838-1ec58c527ead"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-patient-devices.md

`POST [base]/$schedule-patient-devices`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOTc0MjJmZWMtZDlhOC00NGUyLTk0OGYtMzAxOWExMmIxMjQzIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRmZXRjaC1wYXRpZW50LWRldmljZXMiLCJyZXBvcnQtbm9uLWFub255bWl6ZWQiLCJCaW5hcnkucmVhZCJdfSwiY29udGV4dCI6eyJvcmdhbml6YXRpb25faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcmVwb3J0aW5nLTExMjkubG9jYWwvZmhpci9Pcmdhbml6YXRpb24vOTM5OCIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/9398"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:08:26+00:00",
        "end": "2024-07-29T09:08:26+00:00"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "11",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:08:27.931+00:00",
    "source": "#85c07c4f-1c3b-4e50-868d-e0e5159ad3eb",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "97422fec-d9a8-44e2-948f-3019a12b1243"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-patient-gdpr.md

`POST [base]/$schedule-patient-gdpr`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYjY5Mzg4NDgtZDZlNi00MjVjLWFmMzktODlmN2U2MGRkNTk1IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRmZXRjaC1wYXRpZW50LWdkcHIiLCJyZXBvcnQtbm9uLWFub255bWl6ZWQiLCJCaW5hcnkucmVhZCJdfSwiY29udGV4dCI6eyJvcmdhbml6YXRpb25faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcmVwb3J0aW5nLTExMjkubG9jYWwvZmhpci9Pcmdhbml6YXRpb24vNDg0OTkiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/48499"
      }
    },
    {
      "name": "patient",
      "valueReference": {
        "reference": "https://patient.cit-reporting-1129.local/fhir/Patient/36975"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "4",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:07:34.388+00:00",
    "source": "#2159bced-75bb-4d0a-a226-27a4a1418aed",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "b6938848-d6e6-425c-af39-89f7e60dd595"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-patient-total.md

`POST [base]/$schedule-patient-total`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOWZjZDkzNzYtMmZiZC00ZTU0LWE2MWYtNTVmNzEzYjFkMTIwIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1wYXRpZW50LXRvdGFsIiwiQmluYXJ5LnJlYWQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXJlcG9ydGluZy0xMTI5LmxvY2FsL2ZoaXIvT3JnYW5pemF0aW9uLzU1ODU5IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/55859"
      }
    },
    {
      "name": "conditionCode",
      "valueCoding": {
        "system": "urn:oid:1.2.208.176.2.4",
        "code": "DJ44",
        "display": "Kronisk obstruktiv lungesygdom"
      }
    },
    {
      "name": "status",
      "valueString": "active"
    },
    {
      "name": "anonymization",
      "valueString": "ANONYMIZED"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "24",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:09:48.817+00:00",
    "source": "#a8365eb9-b8c1-4d81-846a-9b042039c73a",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "9fcd9376-2fbd-4e54-a61f-55f713b1d120"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-patient-usage-stats.md

`POST [base]/$schedule-patient-usage-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYmUxMjdhODUtOTQ5NC00YjgwLTkxNzUtMTNlZGQ3MDk1ZWIzIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1wYXRpZW50LXVzYWdlLXN0YXRzIiwiQmluYXJ5LnJlYWQiXX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "ANONYMIZED"
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "25",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:09:57.192+00:00",
    "source": "#0cb8cf34-0b2c-45f2-ae5f-bd8e99c1be28",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "be127a85-9494-4b80-9175-13edd7095eb3"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-practitioner-gdpr.md

`POST [base]/$schedule-practitioner-gdpr`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiODBiZGMzMzUtMDA1ZC00ODM0LTg3ZGQtYzM4ZGFiMzQzYTg5IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRmZXRjaC1wcmFjdGl0aW9uZXItZ2RwciIsInJlcG9ydC1ub24tYW5vbnltaXplZCIsIkJpbmFyeS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1yZXBvcnRpbmctMTEyOS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi81OTciLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/597"
      }
    },
    {
      "name": "practitioner",
      "valueReference": {
        "reference": "https://patient.cit-reporting-1129.local/fhir/Patient/91737"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "26",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:10:05.254+00:00",
    "source": "#1f20747c-a7e9-945b-ae66-139962e8a4a3",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "80bdc335-005d-4834-87dd-c38dab343a89"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-practitioner-stats.md

`POST [base]/$schedule-practitioner-stats`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNDliNDc5NzctYzRhNy00NzBmLWJmOTUtMjBjMmQwNDM2MTYxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInJlcG9ydC1ub24tYW5vbnltaXplZCIsIiRmZXRjaC1wcmFjdGl0aW9uZXItc3RhdHMiLCJCaW5hcnkucmVhZCJdfSwiY29udGV4dCI6eyJvcmdhbml6YXRpb25faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcmVwb3J0aW5nLTExMjkubG9jYWwvZmhpci9Pcmdhbml6YXRpb24vMzg0NDEiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/38441"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:08:18+00:00",
        "end": "2024-07-29T09:08:18+00:00"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "10",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:08:19.935+00:00",
    "source": "#2f3be037-8d75-4776-bec5-c152b0e45041",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "49b47977-c4a7-470f-bf95-20c2d0436161"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_schedule-ssl-orders.md

`POST [base]/$schedule-ssl-orders`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiZGQzOTAzOGMtMzI1Ny00ZGQxLThkNTEtY2FmMTIxZjFjODBkIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRmZXRjaC1zc2wtb3JkZXJzIiwicmVwb3J0LW5vbi1hbm9ueW1pemVkIiwiQmluYXJ5LnJlYWQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXJlcG9ydGluZy0xMTI5LmxvY2FsL2ZoaXIvT3JnYW5pemF0aW9uLzIxODgiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "anonymization",
      "valueString": "None"
    },
    {
      "name": "organization",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/2188"
      }
    },
    {
      "name": "seller",
      "valueReference": {
        "reference": "https://organization.cit-reporting-1129.local/fhir/Organization/18329"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2024-07-29T09:07:55+00:00",
        "end": "2024-07-29T09:07:55+00:00"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Binary",
  "id": "6",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:07:57.039+00:00",
    "source": "#4a5f993d-8d29-4093-a360-8d2b53aba08e",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "dd39038c-3257-4dd1-8d51-caf121f1c80d"
    }
  },
  "data": "Kk5PVCBHRU5FUkFURUQgWUVUKg=="
}
```

---

// File: input/pagecontent/POST_search-measurements-bundle-limit.md

`POST [base]/$search-measurements-bundle-limit`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNzE3ZWIyOTAtOTBlYS00OGIyLThkYmItZDlmOGI4ZmY5ZTQxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRzZWFyY2gtbWVhc3VyZW1lbnRzIl19LCJjb250ZXh0Ijp7ImNhcmVfdGVhbV9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1tZWFzdXJlbWVudC0xODI2LmxvY2FsL2ZoaXIvQ2FyZVRlYW0vOTUwMzgiLCJlcGlzb2RlX29mX2NhcmVfaWQiOiJodHRwczovL2NhcmVwbGFuLmNpdC1tZWFzdXJlbWVudC0xODI2LmxvY2FsL2ZoaXIvRXBpc29kZU9mQ2FyZS80MjE3MyIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/42173"
      }
    },
    {
      "name": "count",
      "valueInteger": 10
    },
    {
      "name": "start",
      "valueDateTime": "2024-07-18T09:09:33+00:00"
    },
    {
      "name": "based-on",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/27581"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "collection"
}
```

---

// File: input/pagecontent/POST_search-measurements.md

`POST [base]/$search-measurements`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYjUyYzUzOTctNWQyYS00NzE3LWIxODYtYzQ2ZTk0OWVkODFhIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRzZWFyY2gtbWVhc3VyZW1lbnRzIiwiJHN1Ym1pdC1tZWFzdXJlbWVudCJdfSwiY29udGV4dCI6eyJlcGlzb2RlX29mX2NhcmVfaWQiOiJodHRwczovL2NhcmVwbGFuLmNpdC1tZWFzdXJlbWVudC0xODI2LmxvY2FsL2ZoaXIvRXBpc29kZU9mQ2FyZS8yOTc5NiIsInBhdGllbnRfaWQiOiJodHRwczovL3BhdGllbnQuY2l0LW1lYXN1cmVtZW50LTE4MjYubG9jYWwvZmhpci9QYXRpZW50LzQ1Mzk0IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUEFUSUVOVCJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "patient",
      "valueReference": {
        "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/45394"
      }
    },
    {
      "name": "episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/29796"
      }
    },
    {
      "name": "period",
      "valuePeriod": {
        "start": "2023-07-29T00:00:00+00:00"
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "collection",
  "entry": [
    {
      "fullUrl": "c44c6af2-a751-42aa-8fe1-007e76fa243e",
      "resource": {
        "resourceType": "Bundle",
        "id": "c44c6af2-a751-42aa-8fe1-007e76fa243e",
        "type": "collection",
        "entry": [
          {
            "fullUrl": "https://measurement.cit-measurement-1826.local/fhir/Observation/984",
            "resource": {
              "resourceType": "Observation",
              "id": "984",
              "meta": {
                "versionId": "1",
                "lastUpdated": "2024-07-29T09:16:15.513+00:00",
                "source": "#b00a5c9f-2c61-4c",
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-observation"
                ]
              },
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                  "valueReference": {
                    "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/29796"
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-quality",
                  "extension": [
                    {
                      "url": "qualityType",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/quality-types",
                            "code": "DMQ",
                            "display": "Device Measuring Quality"
                          }
                        ]
                      }
                    },
                    {
                      "url": "qualityCode",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/device-measuring-quality",
                            "code": "TBD"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-resolved-timing",
                  "extension": [
                    {
                      "url": "serviceRequestVersionId",
                      "valueId": "42"
                    },
                    {
                      "url": "type",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                            "code": "Adhoc"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "identifier": [
                {
                  "system": "http://ehealth.sundhed.dk/id/ehealth-identifier",
                  "value": "5848c4f5-b44b-4866-8f36-bd8301106217"
                }
              ],
              "basedOn": [
                {
                  "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/71836"
                }
              ],
              "status": "final",
              "code": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.208.176.2.1",
                    "code": "NPU03011"
                  }
                ],
                "text": "601dde4f-0ee1-4b4c-b416-57fed94b03a2"
              },
              "subject": {
                "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/45394"
              },
              "effectivePeriod": {
                "start": "2024-07-29T09:16:14+00:00",
                "end": "2024-07-29T09:16:14+00:00"
              },
              "performer": [
                {
                  "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/45394"
                }
              ],
              "device": {
                "reference": "https://device.cit-measurement-1826.local/fhir/Device/84491"
              }
            }
          },
          {
            "fullUrl": "https://measurement.cit-measurement-1826.local/fhir/Media/985",
            "resource": {
              "resourceType": "Media",
              "id": "985",
              "meta": {
                "versionId": "1",
                "lastUpdated": "2024-07-29T09:16:15.513+00:00",
                "source": "#b00a5c9f-2c61-4c",
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-media"
                ]
              },
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                  "valueReference": {
                    "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/29796"
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-quality",
                  "extension": [
                    {
                      "url": "qualityType",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/quality-types",
                            "code": "TBD"
                          }
                        ]
                      }
                    },
                    {
                      "url": "qualityCode",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/usage-quality",
                            "code": "TBD"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-quality",
                  "extension": [
                    {
                      "url": "qualityType",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/quality-types",
                            "code": "DMQ",
                            "display": "Device Measuring Quality"
                          }
                        ]
                      }
                    },
                    {
                      "url": "qualityCode",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/device-measuring-quality",
                            "code": "unknown",
                            "display": "Unknown quality"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-resolved-timing",
                  "extension": [
                    {
                      "url": "serviceRequestVersionId",
                      "valueId": "42"
                    },
                    {
                      "url": "type",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                            "code": "Adhoc"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "identifier": [
                {
                  "system": "http://ehealth.sundhed.dk/id/ehealth-identifier",
                  "value": "941ba250-c59e-47f2-9f8d-3599e1a449cb"
                }
              ],
              "basedOn": [
                {
                  "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/71836"
                }
              ],
              "status": "completed",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/media-type",
                    "code": "audio"
                  }
                ]
              },
              "subject": {
                "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/45394"
              },
              "createdDateTime": "2024-07-29T09:16:14+00:00",
              "content": {
                "language": "en"
              }
            }
          },
          {
            "fullUrl": "https://measurement.cit-measurement-1826.local/fhir/QuestionnaireResponse/986",
            "resource": {
              "resourceType": "QuestionnaireResponse",
              "id": "986",
              "meta": {
                "versionId": "1",
                "lastUpdated": "2024-07-29T09:16:15.513+00:00",
                "source": "#b00a5c9f-2c61-4c",
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaireresponse"
                ]
              },
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                  "valueReference": {
                    "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/29796"
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-resolved-timing",
                  "extension": [
                    {
                      "url": "serviceRequestVersionId",
                      "valueId": "42"
                    },
                    {
                      "url": "type",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                            "code": "Adhoc"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "basedOn": [
                {
                  "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/71836"
                }
              ],
              "questionnaire": "https://questionnaire.cit-measurement-1826.local/fhir/Questionnaire/79463",
              "status": "completed",
              "subject": {
                "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/45394"
              },
              "authored": "2024-07-29T09:16:14+00:00",
              "source": {
                "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/65993"
              }
            }
          },
          {
            "fullUrl": "https://questionnaire.cit-measurement-1826.local/fhir/Questionnaire/79463",
            "resource": {
              "resourceType": "Questionnaire",
              "id": "79463",
              "meta": {
                "versionId": "1",
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire"
                ]
              },
              "extension": [
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire-type",
                  "valueCodeableConcept": {
                    "coding": [
                      {
                        "system": "http://ehealth.sundhed.dk/cs/questionnaire-types",
                        "code": "QQ"
                      }
                    ]
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
                  "extension": [
                    {
                      "url": "reference",
                      "valueReference": {
                        "reference": "https://organization.cit-measurement-1826.local/fhir/Organization/31665"
                      }
                    },
                    {
                      "url": "role",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/modifier-role",
                            "code": "owner"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "version": "1.0",
              "name": "0884fe1d-1e26-404a-96d1-accee14fac58",
              "status": "active"
            }
          }
        ]
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_submit-measurement.md

`POST [base]/$submit-measurement`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYjUyYzUzOTctNWQyYS00NzE3LWIxODYtYzQ2ZTk0OWVkODFhIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiRzZWFyY2gtbWVhc3VyZW1lbnRzIiwiJHN1Ym1pdC1tZWFzdXJlbWVudCJdfSwiY29udGV4dCI6eyJlcGlzb2RlX29mX2NhcmVfaWQiOiJodHRwczovL2NhcmVwbGFuLmNpdC1tZWFzdXJlbWVudC0xODI2LmxvY2FsL2ZoaXIvRXBpc29kZU9mQ2FyZS8yOTc5NiIsInBhdGllbnRfaWQiOiJodHRwczovL3BhdGllbnQuY2l0LW1lYXN1cmVtZW50LTE4MjYubG9jYWwvZmhpci9QYXRpZW50LzQ1Mzk0IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUEFUSUVOVCJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "measurement",
      "resource": {
        "resourceType": "Bundle",
        "type": "transaction",
        "entry": [
          {
            "fullUrl": "urn:uuid:e44b498b-795b-4112-a8df-f75ec95cfde6",
            "resource": {
              "resourceType": "Observation",
              "meta": {
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-observation"
                ]
              },
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                  "valueReference": {
                    "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/29796"
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-resolved-timing",
                  "extension": [
                    {
                      "url": "serviceRequestVersionId",
                      "valueId": "42"
                    },
                    {
                      "url": "type",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                            "code": "Adhoc"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "basedOn": [
                {
                  "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/71836"
                }
              ],
              "status": "final",
              "code": {
                "coding": [
                  {
                    "system": "urn:oid:1.2.208.176.2.1",
                    "code": "NPU03011"
                  }
                ],
                "text": "601dde4f-0ee1-4b4c-b416-57fed94b03a2"
              },
              "subject": {
                "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/45394"
              },
              "effectivePeriod": {
                "start": "2024-07-29T09:16:14+00:00",
                "end": "2024-07-29T09:16:14+00:00"
              },
              "performer": [
                {
                  "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/45394"
                }
              ],
              "device": {
                "reference": "https://device.cit-measurement-1826.local/fhir/Device/84491"
              }
            },
            "request": {
              "method": "POST",
              "url": "Observation"
            }
          },
          {
            "fullUrl": "urn:uuid:fffa4a53-c95a-4030-bab2-a4ef05cac7f5",
            "resource": {
              "resourceType": "Media",
              "meta": {
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-media"
                ]
              },
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                  "valueReference": {
                    "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/29796"
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-quality",
                  "extension": [
                    {
                      "url": "qualityType",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/quality-types",
                            "code": "TBD"
                          }
                        ]
                      }
                    },
                    {
                      "url": "qualityCode",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/usage-quality",
                            "code": "TBD"
                          }
                        ]
                      }
                    }
                  ]
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-resolved-timing",
                  "extension": [
                    {
                      "url": "serviceRequestVersionId",
                      "valueId": "42"
                    },
                    {
                      "url": "type",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                            "code": "Adhoc"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "basedOn": [
                {
                  "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/71836"
                }
              ],
              "status": "completed",
              "type": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/media-type",
                    "code": "audio"
                  }
                ]
              },
              "subject": {
                "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/45394"
              },
              "createdDateTime": "2024-07-29T09:16:14+00:00",
              "content": {
                "language": "en"
              }
            },
            "request": {
              "method": "POST",
              "url": "Media"
            }
          },
          {
            "fullUrl": "urn:uuid:389af7ac-74a5-4759-9ead-6905ad96a6c0",
            "resource": {
              "resourceType": "QuestionnaireResponse",
              "meta": {
                "profile": [
                  "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaireresponse"
                ]
              },
              "extension": [
                {
                  "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
                  "valueReference": {
                    "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/29796"
                  }
                },
                {
                  "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-resolved-timing",
                  "extension": [
                    {
                      "url": "serviceRequestVersionId",
                      "valueId": "42"
                    },
                    {
                      "url": "type",
                      "valueCodeableConcept": {
                        "coding": [
                          {
                            "system": "http://ehealth.sundhed.dk/cs/resolved-timing-type",
                            "code": "Adhoc"
                          }
                        ]
                      }
                    }
                  ]
                }
              ],
              "basedOn": [
                {
                  "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/71836"
                }
              ],
              "questionnaire": "https://questionnaire.cit-measurement-1826.local/fhir/Questionnaire/79463",
              "status": "completed",
              "subject": {
                "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/45394"
              },
              "authored": "2024-07-29T09:16:14+00:00",
              "source": {
                "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/65993"
              }
            },
            "request": {
              "method": "POST",
              "url": "QuestionnaireResponse"
            }
          }
        ]
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "transaction-response",
  "entry": [
    {
      "response": {
        "status": "201 Created",
        "location": "https://measurement.cit-measurement-1826.local/fhir/Observation/984/_history/1",
        "etag": "1",
        "lastModified": "2024-07-29T09:16:15.513+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;Observation/984/_history/1&quot;. Took 5ms.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_CREATE",
                    "display": "Create succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully created resource \"Observation/984/_history/1\". Took 5ms."
            }
          ]
        }
      }
    },
    {
      "response": {
        "status": "201 Created",
        "location": "https://measurement.cit-measurement-1826.local/fhir/Media/985/_history/1",
        "etag": "1",
        "lastModified": "2024-07-29T09:16:15.513+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;Media/985/_history/1&quot;. Took 4ms.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_CREATE",
                    "display": "Create succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully created resource \"Media/985/_history/1\". Took 4ms."
            }
          ]
        }
      }
    },
    {
      "response": {
        "status": "201 Created",
        "location": "https://measurement.cit-measurement-1826.local/fhir/QuestionnaireResponse/986/_history/1",
        "etag": "1",
        "lastModified": "2024-07-29T09:16:15.513+00:00",
        "outcome": {
          "resourceType": "OperationOutcome",
          "text": {
            "status": "generated",
            "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully created resource &quot;QuestionnaireResponse/986/_history/1&quot;. Took 12ms.</td></tr></table></div>"
          },
          "issue": [
            {
              "severity": "information",
              "code": "informational",
              "details": {
                "coding": [
                  {
                    "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
                    "code": "SUCCESSFUL_CREATE",
                    "display": "Create succeeded."
                  }
                ]
              },
              "diagnostics": "Successfully created resource \"QuestionnaireResponse/986/_history/1\". Took 12ms."
            }
          ]
        }
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_transform-from-APD.md

`POST [base]/$transform-from-APD`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRyYW5zZm9ybS1mcm9tLUFQRCIsIiR0cmFuc2Zvcm0tdG8tQVBEIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "documentReference",
      "resource": {
        "resourceType": "DocumentReference",
        "meta": {
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-documentreference"
          ]
        },
        "status": "current",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "69730-0"
            }
          ]
        },
        "date": "2024-07-29T08:33:22.209+00:00",
        "content": [
          {
            "attachment": {
              "contentType": "application/xml",
              "data": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PD94bWwtc3R5bGVzaGVldCB0eXBlPSJ0ZXh0L3hzbCIgaHJlZj0iLi9MYW50YW5hLWNkYS13ZWItREsueHNsIj8+IDxDbGluaWNhbERvY3VtZW50IHhtbG5zOnhzaT0iaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2UiIHhzaTpzY2hlbWFMb2NhdGlvbj0idXJuOmhsNy1vcmc6djMgLi9TY2hlbWEvQ0RBX1NEVEMueHNkIiB4bWxucz0idXJuOmhsNy1vcmc6djMiIGNsYXNzQ29kZT0iRE9DQ0xJTiIgbW9vZENvZGU9IkVWTiI+ICA8cmVhbG1Db2RlIGNvZGU9IkRLIi8+ICA8dHlwZUlkIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjEuMyIgZXh0ZW5zaW9uPSJQT0NEX0hEMDAwMDQwIi8+ICA8IS0tIE1lZENvbSBESyBDREEgQVBEIHByb2ZpbGUgT0lEIC0tPiAgPHRlbXBsYXRlSWQgcm9vdD0iMS4yLjIwOC4xODQuMTQuMSIgZXh0ZW5zaW9uPSIyMDE5LTA5LTEwIi8+ICA8aWQgZXh0ZW5zaW9uPSIzMWFmN2UxNC04OTFjLTQ4ZjAtYTQxNC1mZDQzMjI4OWJmN2QiIHJvb3Q9IjEuMi4yMDguMTg0IiAgICBhc3NpZ25pbmdBdXRob3JpdHlOYW1lPSJNZWRDb20iLz4gIDwhLS0gTE9JTkMgY29kZSBmb3IgYXBwb2ludG1lbnQgZGF0ZSAtLT4gIDxjb2RlIGNvZGU9IjM5Mjg5LTQiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIgY29kZVN5c3RlbU5hbWU9IkxPSU5DIiAgICAgZGlzcGxheU5hbWU9IkRhdG8gb2cgdGlkc3B1bmt0IGZvciBtw7hkZSBtZWxsZW0gcGF0aWVudCBvZyBzdW5kaGVkc3BlcnNvbiIvPiAgPCEtLSB0aXRsZSA9ICJBZnRhbGUgZm9yIiArIHBhdGllbnQgaWQgLS0+ICA8dGl0bGU+QWZ0YWxlIGZvciAyNTEyNDg5OTk2PC90aXRsZT4gIDxlZmZlY3RpdmVUaW1lIHZhbHVlPSIyMDE5MTIzMTEwMDAwMCswMTAwIi8+ICA8Y29uZmlkZW50aWFsaXR5Q29kZSBjb2RlPSJOIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My41LjI1Ii8+ICA8bGFuZ3VhZ2VDb2RlIGNvZGU9ImRhLURLIi8+ICAgIDwhLS0gaW5mb3JtYXRpb24gYWJvdXQgdGhlIHBhdGllbnQtLT4gIDxyZWNvcmRUYXJnZXQgdHlwZUNvZGU9IlJDVCIgY29udGV4dENvbnRyb2xDb2RlPSJPUCI+ICAgIDxwYXRpZW50Um9sZSBjbGFzc0NvZGU9IlBBVCI+ICAgICAgPGlkIGV4dGVuc2lvbj0iMjUxMjQ4OTk5NiIgcm9vdD0iMS4yLjIwOC4xNzYuMS4yIiBhc3NpZ25pbmdBdXRob3JpdHlOYW1lPSJDUFIiLz4gICAgICA8cGF0aWVudCBjbGFzc0NvZGU9IlBTTiIgZGV0ZXJtaW5lckNvZGU9IklOU1RBTkNFIj4gICAgICAgIDxuYW1lPiAgICAgICAgICA8Z2l2ZW4+TmFuY3k8L2dpdmVuPiAgICAgICAgICA8Z2l2ZW4+QW5uPC9naXZlbj4gICAgICAgICAgPGZhbWlseT5CZXJnZ3JlbjwvZmFtaWx5PiAgICAgICAgPC9uYW1lPiAgICAgICAgPGFkbWluaXN0cmF0aXZlR2VuZGVyQ29kZSBjb2RlPSJGIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My41LjEiLz4gICAgICAgIDxiaXJ0aFRpbWUgdmFsdWU9IjE5NDgxMjI1MDAwMDAwKzAwMDAiLz4gICAgICA8L3BhdGllbnQ+ICAgIDwvcGF0aWVudFJvbGU+ICA8L3JlY29yZFRhcmdldD4gICAgPCEtLSB0aGUgaGVhbHRoIGNhcmUgb3JnYW5pc2F0aW9uIGFuZCBwZXJzb24gcmVzcG9uc2libGUgZm9yIHRoZSBhcHBvaW50bWVudCAtLT4gIDxhdXRob3IgdHlwZUNvZGU9IkFVVCIgY29udGV4dENvbnRyb2xDb2RlPSJPUCI+ICA8dGltZSB2YWx1ZT0iMjAxOTA4MTYxMDAwMDArMDEwMCIvPiAgPGFzc2lnbmVkQXV0aG9yIGNsYXNzQ29kZT0iQVNTSUdORUQiPiAgICA8aWQgZXh0ZW5zaW9uPSIzNzg2MzEwMDAwMTYwMDkiIHJvb3Q9IjEuMi4yMDguMTc2LjEuMSIgYXNzaWduaW5nQXV0aG9yaXR5TmFtZT0iU09SIi8+ICAgICAgPGFzc2lnbmVkUGVyc29uIGNsYXNzQ29kZT0iUFNOIiBkZXRlcm1pbmVyQ29kZT0iSU5TVEFOQ0UiPiAgICAgICAgIDxuYW1lPiAgICAgICAgICAgPGdpdmVuPkplbnM8L2dpdmVuPiAgICAgICAgICAgPGZhbWlseT5KZW5zZW48L2ZhbWlseT4gICAgICA8L25hbWU+ICAgIDwvYXNzaWduZWRQZXJzb24+ICAgIDwvYXNzaWduZWRBdXRob3I+ICA8L2F1dGhvcj4gIDwhLS0gdGhlIG9yZ2FuaXNhdGlvbiByZXNwb25zaWJsZSBmb3IgbWFpbnRhaW5nIHRoZSBDREEgZG9jdW1lbnQgLS0+ICA8Y3VzdG9kaWFuIHR5cGVDb2RlPSJDU1QiPiAgPGFzc2lnbmVkQ3VzdG9kaWFuIGNsYXNzQ29kZT0iQVNTSUdORUQiPiAgICAgIDxyZXByZXNlbnRlZEN1c3RvZGlhbk9yZ2FuaXphdGlvbiBjbGFzc0NvZGU9Ik9SRyIgZGV0ZXJtaW5lckNvZGU9IklOU1RBTkNFIj4gICAgICAgIDxpZCBleHRlbnNpb249IjM3ODYzMTAwMDAxNjAwOSIgcm9vdD0iMS4yLjIwOC4xNzYuMS4xIiBhc3NpZ25pbmdBdXRob3JpdHlOYW1lPSJTT1IiLz4gICAgICA8L3JlcHJlc2VudGVkQ3VzdG9kaWFuT3JnYW5pemF0aW9uPiAgICA8L2Fzc2lnbmVkQ3VzdG9kaWFuPiAgPC9jdXN0b2RpYW4+ICAgICAgPGRvY3VtZW50YXRpb25PZiB0eXBlQ29kZT0iRE9DIj4gICAgPHNlcnZpY2VFdmVudCAgIGNsYXNzQ29kZT0iTVBST1QiIG1vb2RDb2RlPSJFVk4iPiAgICAgIDx0ZW1wbGF0ZUlkIHJvb3Q9IjEuMi4yMDguMTg0LjIwMC4xLjExIiBleHRlbnNpb249IjIwMTktMDktMTAiLz4gICAgICAgIDxlZmZlY3RpdmVUaW1lPiAgICAgICAgIDxsb3cgdmFsdWU9IjIwMTkxMjMxMDkwMDAwKzAxMDAiLz4gICAgICAgIDxoaWdoIHZhbHVlPSIyMDE5MTIzMTEyMDAwMCswMTAwIi8+ICAgICAgPC9lZmZlY3RpdmVUaW1lPiAgICAgICAgICA8L3NlcnZpY2VFdmVudD4gIDwvZG9jdW1lbnRhdGlvbk9mPiAgIDwhLS1UaGlzIGRvY3VtZW50YXRpb25PZiBob2xkcyB0aGUgdmVyc2lvbiBvZiB0aGUgQ0RBLXByb2ZpbGUgLS0+ICA8ZG9jdW1lbnRhdGlvbk9mPiAgICA8c2VydmljZUV2ZW50PiAgICAgIDwhLS1UaGlzIHRlbXBsYXRlSWQgdGVsbHMgdGhhdCB0aGlzIHNlcnZpY2VFdmVudCBob2xkcyB0aGUgaWRlbnRpZmljYXRpb24gKGFwZCkgICAgICAgICBhbmQgdmVyc2lvbiAodjIuMCkgb2YgdGhlIENEQSBwcm9maWxlIC0tPiAgICAgIDx0ZW1wbGF0ZUlkIHJvb3Q9IjEuMi4yMDguMTg0LjIwMC4xLjEwIiBleHRlbnNpb249IjIwMTktMDktMTAiLz4gICAgICA8IS0tVGhpcyBpZCBAZXh0ZW5zaW9uIGVxdWFscyB0aGUgaWRlbnRpZmljYXRpb24gYW5kIHZlcnNpb24gb2YgdGhlIENEQSBwcm9maWxlLS0+ICAgICAgPGlkIHJvb3Q9IjEuMi4yMDguMTg0LjEwMC4zIiBleHRlbnNpb249ImFwZC12Mi4wIiBhc3NpZ25pbmdBdXRob3JpdHlOYW1lPSJNZWRDb20iLz4gICAgPC9zZXJ2aWNlRXZlbnQ+ICA8L2RvY3VtZW50YXRpb25PZj4gICAgPGRvY3VtZW50YXRpb25PZiB0eXBlQ29kZT0iRE9DIj4gICAgIDxzZXJ2aWNlRXZlbnQgICBjbGFzc0NvZGU9Ik1QUk9UIiBtb29kQ29kZT0iRVZOIj4gICAgICA8dGVtcGxhdGVJZCByb290PSIxLjIuMjA4LjE4NC4yMDAuMS4xMiIgZXh0ZW5zaW9uPSIyMDE5LTA5LTEwIi8+ICAgICAgPGlkICAgZXh0ZW5zaW9uPSIzOWQ2MTVjZC01ZDYyLTRhNTQtOTc2Mi1kMzMxOTdjNjNhYmEiICByb290PSIxLjIuMjA4LjE4NCIgICAgICAgIGFzc2lnbmluZ0F1dGhvcml0eU5hbWU9Ik1lZENvbSIvPiAgICAgICA8aWQgIGV4dGVuc2lvbj0iZTc1MzJjMDgtNzI5Yi00NDEzLTgzZDctYmQyY2RmMTQ3ZWY3IiByb290PSIxLjIuMjA4LjE4NCIgICAgICAgIGFzc2lnbmluZ0F1dGhvcml0eU5hbWU9Ik1lZENvbSIvPiAgICAgICA8Y29kZSBjb2RlPSJBTEFMMDIiIGNvZGVTeXN0ZW09IjEuMi4yMDguMTg0LjMwMC4xIiAgY29kZVN5c3RlbU5hbWU9IkVwaXNvZGVPZkNhcmVMYWJlbHMiIGRpc3BsYXlOYW1lPSJIamVydGVzeWdkb21tZSIgLz4gICAgICAgICAgPC9zZXJ2aWNlRXZlbnQ+ICA8L2RvY3VtZW50YXRpb25PZj4gICAgPCEtLSBDREEgQm9keSAtLT4gIDxjb21wb25lbnQ+ICAgIDxzdHJ1Y3R1cmVkQm9keT4gICAgICA8Y29tcG9uZW50PiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc0NvZGU9IkRPQ1NFQ1QiIG1vb2RDb2RlPSJFVk4iPiAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIxLjIuMjA4LjE4NC4xNC4xMS4xIiBleHRlbnNpb249IjIwMTktMDktMTAiLz4gICAgICAgICAgPGNvZGUgY29kZT0iMTg3NzYtNSIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNi4xIiAgICAgICAgICAgICBjb2RlU3lzdGVtTmFtZT0iTE9JTkMiIGRpc3BsYXlOYW1lPSJQbGFuIG9mIGNhcmUgbm90ZSIgLz4gICAgICAgICAgPHRpdGxlPkFmdGFsZTwvdGl0bGU+ICAgICAgICAgIDx0ZXh0PiAgICAgICAgICAgIDxwYXJhZ3JhcGg+QWZ0YWxlOjwvcGFyYWdyYXBoPiAgICAgICAgICAgIDx0YWJsZSB3aWR0aD0iMTAwJSI+ICAgICAgICAgICAgICA8dGJvZHk+ICAgICAgICAgICAgICAgIDx0cj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BZnRhbGUgZGF0bzwvdGg+ICAgICAgICAgICAgICAgICAgPHRoPlZlZHLDuHJlbmRlPC90aD4gICAgICAgICAgICAgICAgICA8dGg+TcO4ZGVzdGVkPC90aD4gICAgICAgICAgICAgICAgICA8dGg+S29tbWVudGFyPC90aD4gICAgICAgICAgICAgICAgPC90cj4gICAgICAgICAgICAgICAgPHRyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMDE5LTEyLTMxIDA5OjAwIC0gMjAxOS0xMi0zMSAxMjowMC4gVGlkc3B1bmt0ZXQgZXIgdmVqbGVkZW5kZTwvdGQ+ICAgICAgICAgICAgICAgICAgPHRkPkhqZW1tZWhqw6ZscHNiZXPDuGc8L3RkPiAgICAgICAgICAgICAgICAgIDx0ZD5Cb3JnZXJzIEhqZW1tZWFkcmVzc2U8L3RkPiAgICAgICAgICAgICAgICAgIDx0ZD5BZnRhbGVuIGVyIGVuIGRlbCBhZiBldCByZXBldGVyZW5kZSBtw7huc3RlcjwvdGQ+ICAgICAgICAgICAgICAgIDwvdHI+ICAgICAgICAgICAgICA8L3Rib2R5PiAgICAgICAgICAgIDwvdGFibGU+ICAgICAgICAgIDwvdGV4dD4gICAgICAgICAgIDxlbnRyeT4gICAgICAgICAgICAgICAgICAgICAgICAgIDxlbmNvdW50ZXIgbW9vZENvZGU9IkFQVCIgY2xhc3NDb2RlPSJFTkMiID4gICAgICAgICAgICAgIDx0ZW1wbGF0ZUlkIHJvb3Q9IjEuMi4yMDguMTg0LjE0LjExLjIiIGV4dGVuc2lvbj0iMjAxOS0wOS0xMCIgLz4gICAgICAgICAgICAgIDxpZCAgICAgICAgICAgICAgICAgcm9vdD0iMS4yLjIwOC4xODQiIGV4dGVuc2lvbj0iOWE2ZDFiYWMtMTdkMy00MTk1LTg5YTQtMTEyMWJjODA5YjRkIiAgICAgICAgICAgICAgICAgYXNzaWduaW5nQXV0aG9yaXR5TmFtZT0iTWVkQ29tIi8+ICAgICAgICAgICAgICAgIDxjb2RlICAgICAgICAgICAgICAgICBjb2RlPSJNdW5pY2lwYWxpdHlBcHBvaW50bWVudCIgY29kZVN5c3RlbT0iMS4yLjIwOC4xODQuMTAwLjEiICAgICAgICAgICAgICAgICBjb2RlU3lzdGVtTmFtZT0iTWVkQ29tIE1lc3NhZ2UgQ29kZXMiPiAgICAgICAgICAgICAgPC9jb2RlPiAgICAgICAgICAgICAgICAgICAgICAgIDxzdGF0dXNDb2RlIGNvZGU9ImFjdGl2ZSIgLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxlZmZlY3RpdmVUaW1lPiAgICAgICAgICAgICAgICA8bG93IHZhbHVlPSIyMDE5MTIzMTA5MDAwMCswMTAwIi8+ICAgICAgICAgICAgICAgIDxoaWdoIHZhbHVlPSIyMDE5MTIzMTEyMDAwMCswMTAwIi8+ICAgICAgICAgICAgICA8L2VmZmVjdGl2ZVRpbWU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwZXJmb3JtZXIgdHlwZUNvZGU9IlBSRiI+ICAgICAgICAgICAgICAgICAgPGFzc2lnbmVkRW50aXR5IGNsYXNzQ29kZT0iQVNTSUdORUQiPiAgICAgICAgICAgICAgICAgIDxpZCBleHRlbnNpb249IjM3ODYzMTAwMDAxNjAwOSIgcm9vdD0iMS4yLjIwOC4xNzYuMS4xIiBhc3NpZ25pbmdBdXRob3JpdHlOYW1lPSJTT1IiLz4gICAgICAgICAgICAgICAgICA8YWRkciB1c2U9IldQIj4gICAgICAgICAgICAgICAgICAgICAgICA8c3RyZWV0QWRkcmVzc0xpbmU+VmVzdGVyZ2FkZSA1PC9zdHJlZXRBZGRyZXNzTGluZT4gICAgICAgICAgICAgICAgICAgICAgICA8cG9zdGFsQ29kZT4zMDAwPC9wb3N0YWxDb2RlPiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXR5Pk9kZW5zZTwvY2l0eT4gICAgICAgICAgICAgICAgICA8L2FkZHI+ICAgICAgICAgICAgICAgICAgPHRlbGVjb20gdmFsdWU9InRlbDo2NjExMzMzMy0zIiB1c2U9IldQIi8+ICAgICAgICAgICAgICAgICAgPHJlcHJlc2VudGVkT3JnYW5pemF0aW9uIGNsYXNzQ29kZT0iT1JHIiBkZXRlcm1pbmVyQ29kZT0iSU5TVEFOQ0UiPiAgICAgICAgICAgICAgICAgICAgPG5hbWU+SGplbW1laGrDpmxwLCBhZmRlbGluZyBDaXR5LCBPZGVuc2UgS29tbXVuZTwvbmFtZT4gICAgICAgICAgICAgICAgICA8L3JlcHJlc2VudGVkT3JnYW5pemF0aW9uPiAgICAgICAgICAgICAgICA8L2Fzc2lnbmVkRW50aXR5PiAgICAgICAgICAgICAgIDwvcGVyZm9ybWVyPiAgICAgICAgICAgICAgPHBhcnRpY2lwYW50IHR5cGVDb2RlPSJMT0MiPiAgICAgICAgICAgICAgICA8IS0tIENPTkYtREstQVBEOjg4OWUgb3IgQ09ORi1ESy1BUEQ6OWI0NyAtLT4gICAgICAgICAgICAgICAgPHBhcnRpY2lwYW50Um9sZSBjbGFzc0NvZGU9IlNETE9DIj4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIxLjIuMjA4LjE4NC4xNC4xMS4zIiBleHRlbnNpb249IjIwMTktMDktMTAiIC8+ICAgICAgICAgICAgICAgICAgPGlkIGV4dGVuc2lvbj0iMzI1NDQxMDAwMDE2MDA2IiByb290PSIxLjIuMjA4LjE3Ni4xLjEiIGFzc2lnbmluZ0F1dGhvcml0eU5hbWU9IlNPUiIvPiAgICAgICAgICAgICAgICAgIDxhZGRyPiAgICAgICAgICAgICAgICAgICAgPHN0cmVldEFkZHJlc3NMaW5lPkFsYmFuaWdhZGUgMTA8L3N0cmVldEFkZHJlc3NMaW5lPiAgICAgICAgICAgICAgICAgICAgPGNpdHk+T2RlbnNlPC9jaXR5PiAgICAgICAgICAgICAgICAgICAgPHBvc3RhbENvZGU+NTAwMDwvcG9zdGFsQ29kZT4gICAgICAgICAgICAgICAgICA8L2FkZHI+ICAgICAgICAgICAgICAgICAgPHRlbGVjb20gdmFsdWU9InRlbDo2MzIyMTMxMyIvPiAgICAgICAgICAgICAgICAgIDwhLS0gQ09ORi1ESy1BUEQ6ZDlhNCAtLT4gICAgICAgICAgICAgICAgICA8cGxheWluZ0VudGl0eT4gICAgICAgICAgICAgICAgICAgIDxuYW1lPlJlZ2lvbnNob3NwaXRhbGV0LCBvcGdhbmcgNCwgMyBzYWwgcnVtIDEwMTwvbmFtZT4gICAgICAgICAgICAgICAgICA8L3BsYXlpbmdFbnRpdHk+ICAgICAgICAgICAgICAgIDwvcGFydGljaXBhbnRSb2xlPiAgICAgICAgICAgICAgPC9wYXJ0aWNpcGFudD4gICAgICAgICAgICAgIDxlbnRyeVJlbGF0aW9uc2hpcCB0eXBlQ29kZT0iUlNPTiI+ICAgICAgICAgICAgICAgICAgPG9ic2VydmF0aW9uIGNsYXNzQ29kZT0iT0JTIiBtb29kQ29kZT0iRVZOIj4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGNvZGU9Ik5JIiBkaXNwbGF5TmFtZT0iSGplbW1laGrDpmxwIi8+ICAgICAgICAgICAgICAgICAgPC9vYnNlcnZhdGlvbj4gICAgICAgICAgICAgIDwvZW50cnlSZWxhdGlvbnNoaXA+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByZWNvbmRpdGlvbj4gICAgICAgICAgICAgICAgPHRlbXBsYXRlSWQgcm9vdD0iMS4yLjIwOC4xODQuMTQuMTEuNSIgZXh0ZW5zaW9uPSIyMDE5LTA5LTEwIiAvPiAgICAgICAgICAgICAgICA8Y3JpdGVyaW9uPiAgICAgICAgICAgICAgICAgIDxjb2RlIGNvZGU9Ikd1aWRlZEludGVydmFsVHlwZSIgY29kZVN5c3RlbT0iMS4yLjIwOC4xODQuMTAwLjEiICAgICAgICAgICAgICAgICAgICBjb2RlU3lzdGVtTmFtZT0iTWVkQ29tIE1lc3NhZ2UgQ29kZXMiLz4gICAgICAgICAgICAgICAgICA8dGV4dD5UaWRzcHVua3RldCBlciB2ZWpsZWRlbmRlPC90ZXh0PiAgICAgICAgICAgICAgICA8L2NyaXRlcmlvbj4gICAgICAgICAgICAgICAgICAgICAgICAgPC9wcmVjb25kaXRpb24+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcmVjb25kaXRpb24+ICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZUlkIHJvb3Q9IjEuMi4yMDguMTg0LjE0LjExLjQiIGV4dGVuc2lvbj0iMjAxOS0wOS0xMCIgLz4gICAgICAgICAgICAgICAgPGNyaXRlcmlvbj4gICAgICAgICAgICAgICAgICA8Y29kZSBjb2RlPSJSZXBlYXRpbmdBcHBvaW50bWVudFR5cGUiIGNvZGVTeXN0ZW09IjEuMi4yMDguMTg0LjEwMC4xIiAgICAgICAgICAgICAgICAgICAgY29kZVN5c3RlbU5hbWU9Ik1lZENvbSBNZXNzYWdlIENvZGVzIi8+ICAgICAgICAgICAgICAgICAgICA8dmFsdWUgeHNpOnR5cGU9IklJIiByb290PSIxLjIuMjA4LjE4NCIgZXh0ZW5zaW9uPSIwNmIyYjNiYi1kYWM1LTQ0NmYtYWExOS1lZDVjNDZkOGIwYjciICAgICAgICAgICAgICAgICAgICAgIGFzc2lnbmluZ0F1dGhvcml0eU5hbWU9Ik1lZENvbSIgIC8+ICAgICAgICAgICAgICAgICA8L2NyaXRlcmlvbj4gICAgICAgICAgICAgICAgICAgICAgICAgPC9wcmVjb25kaXRpb24+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2VuY291bnRlcj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2VudHJ5PiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAgICAgIDwvY29tcG9uZW50PiAgICA8L3N0cnVjdHVyZWRCb2R5PiAgPC9jb21wb25lbnQ+PC9DbGluaWNhbERvY3VtZW50Pg=="
            }
          }
        ]
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "collection",
  "entry": [
    {
      "resource": {
        "resourceType": "Composition",
        "id": "39c1abae-c071-4070-b800-f8af5d7babcb",
        "meta": {
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-composition"
          ]
        },
        "contained": [
          {
            "resourceType": "Organization",
            "id": "1",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization"
              ]
            },
            "extension": [
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-source",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/organization-source",
                      "code": "manual"
                    }
                  ]
                }
              },
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-synchronizationStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/organization-synchronization-status",
                      "code": "NotSynchronized"
                    }
                  ]
                }
              }
            ],
            "identifier": [
              {
                "system": "1.2.208.176.1.1",
                "value": "378631000016009"
              }
            ]
          },
          {
            "resourceType": "Patient",
            "id": "2",
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Nancy Ann <b>BERGGREN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>2512489996</td></tr><tr><td>Date of birth</td><td><span>25 December 1948</span></td></tr></tbody></table></div>"
            },
            "identifier": [
              {
                "system": "urn:oid:1.2.208.176.1.2",
                "value": "2512489996"
              }
            ],
            "name": [
              {
                "family": "Berggren",
                "given": [
                  "Nancy",
                  "Ann"
                ]
              }
            ],
            "gender": "female",
            "birthDate": "1948-12-25"
          },
          {
            "resourceType": "Practitioner",
            "id": "3",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-practitioner"
              ]
            },
            "name": [
              {
                "family": "Jensen",
                "given": [
                  "Jens"
                ]
              }
            ]
          },
          {
            "resourceType": "Organization",
            "id": "4",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization"
              ]
            },
            "extension": [
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-source",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/organization-source",
                      "code": "manual"
                    }
                  ]
                }
              },
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-synchronizationStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/organization-synchronization-status",
                      "code": "NotSynchronized"
                    }
                  ]
                }
              }
            ],
            "identifier": [
              {
                "system": "urn:oid:1.2.208.176.1.1",
                "value": "378631000016009"
              }
            ]
          }
        ],
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-composition-authorOrganization",
            "valueReference": {
              "reference": "#1"
            }
          }
        ],
        "identifier": {
          "system": "urn:oid:1.2.208.184",
          "value": "31af7e14-891c-48f0-a414-fd432289bf7d"
        },
        "status": "preliminary",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "39289-4",
              "display": "Dato og tidspunkt for møde mellem patient og sundhedsperson"
            }
          ]
        },
        "subject": {
          "reference": "#2"
        },
        "date": "2019-12-31T09:00:00+00:00",
        "author": [
          {
            "reference": "#3"
          }
        ],
        "title": "Aftale for 2512489996",
        "confidentiality": "N",
        "custodian": {
          "reference": "#4"
        },
        "event": [
          {
            "period": {
              "start": "2019-12-31T08:00:00+00:00",
              "end": "2019-12-31T11:00:00+00:00"
            }
          }
        ]
      }
    },
    {
      "resource": {
        "resourceType": "Appointment",
        "contained": [
          {
            "resourceType": "Organization",
            "id": "1",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization"
              ]
            },
            "extension": [
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-source",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/organization-source",
                      "code": "manual"
                    }
                  ]
                }
              },
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-synchronizationStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/organization-synchronization-status",
                      "code": "NotSynchronized"
                    }
                  ]
                }
              }
            ],
            "identifier": [
              {
                "system": "1.2.208.176.1.1",
                "value": "378631000016009"
              }
            ],
            "name": "Hjemmehjælp, afdeling City, Odense Kommune",
            "telecom": [
              {
                "system": "phone",
                "value": "66113333-3",
                "use": "work"
              }
            ],
            "address": [
              {
                "use": "work",
                "line": [
                  "Vestergade 5"
                ],
                "city": "Odense",
                "postalCode": "3000"
              }
            ]
          },
          {
            "resourceType": "Organization",
            "id": "2",
            "identifier": [
              {
                "system": "1.2.208.176.1.1",
                "value": "378631000016009"
              }
            ]
          },
          {
            "resourceType": "Location",
            "id": "3",
            "identifier": [
              {
                "system": "1.2.208.176.1.1",
                "value": "325441000016006"
              }
            ],
            "name": "Regionshospitalet, opgang 4, 3 sal rum 101",
            "telecom": [
              {
                "system": "phone",
                "value": "63221313",
                "use": "home"
              }
            ],
            "address": {
              "use": "work",
              "line": [
                "Albanigade 10"
              ],
              "city": "Odense",
              "postalCode": "5000"
            }
          },
          {
            "resourceType": "Patient",
            "id": "4",
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Nancy Ann <b>BERGGREN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>2512489996</td></tr><tr><td>Date of birth</td><td><span>25 December 1948</span></td></tr></tbody></table></div>"
            },
            "identifier": [
              {
                "system": "urn:oid:1.2.208.176.1.2",
                "value": "2512489996"
              }
            ],
            "name": [
              {
                "family": "Berggren",
                "given": [
                  "Nancy",
                  "Ann"
                ]
              }
            ],
            "gender": "female",
            "birthDate": "1948-12-25"
          }
        ],
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-performing-organization",
            "valueReference": {
              "reference": "#1"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible-organization",
            "valueReference": {
              "reference": "#2"
            }
          }
        ],
        "identifier": [
          {
            "system": "urn:oid:1.2.208.184",
            "value": "31af7e14-891c-48f0-a414-fd432289bf7d"
          }
        ],
        "status": "fulfilled",
        "description": "Hjemmehjælp",
        "start": "2019-12-31T08:00:00.000+00:00",
        "end": "2019-12-31T11:00:00.000+00:00",
        "participant": [
          {
            "actor": {
              "reference": "#3"
            }
          },
          {
            "actor": {
              "reference": "#4"
            }
          }
        ]
      }
    }
  ]
}
```

---

// File: input/pagecontent/POST_transform-from-PHMR.md

`POST [base]/$transform-from-PHMR`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRyYW5zZm9ybS1mcm9tLVBITVIiLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIiR0cmFuc2Zvcm0tdG8tUEhNUiJdfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Parameters",
  "parameter": [
    {
      "name": "documentReference",
      "resource": {
        "resourceType": "DocumentReference",
        "meta": {
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-documentreference"
          ]
        },
        "status": "current",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "69730-0"
            }
          ]
        },
        "date": "2024-07-29T08:33:01.470+00:00",
        "content": [
          {
            "attachment": {
              "contentType": "application/xml",
              "data": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PD94bWwtc3R5bGVzaGVldCB0eXBlPSJ0ZXh0L3hzbCIgaHJlZj0iLi4vU3R5bGVzaGVldC9jZGEueHNsIj8+PENsaW5pY2FsRG9jdW1lbnQgeG1sbnM6eHNpPSJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZSIgICAgICAgICAgICAgICAgICB4c2k6c2NoZW1hTG9jYXRpb249InVybjpobDctb3JnOnYzIC4uLy4uLy4uL0Rlc2t0b3AvZHJhZnRzL1N0YW5kYXJkZXIvSEw3L1BITVIvU2NoZW1hL0NEQV9TRFRDLnhzZCIgICAgICAgICAgICAgICAgICB4bWxucz0idXJuOmhsNy1vcmc6djMiIGNsYXNzQ29kZT0iRE9DQ0xJTiIgbW9vZENvZGU9IkVWTiI+ICAgIDx0eXBlSWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMS4zIiBleHRlbnNpb249IlBPQ0RfSEQwMDAwNDAiLz4gICAgPHRlbXBsYXRlSWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMTAuMjAuOSIvPiAgICA8dGVtcGxhdGVJZCByb290PSIxLjIuMjA4LjE4NC4xMS4xIi8+ICAgIDxpZCBleHRlbnNpb249ImY5NTYyYWQwLTJlM2YtMTFlNi1iZGY0LTA4MDAyMDBjOWE2NiIgcm9vdD0iMS4yLjIwOC4xODQiIGFzc2lnbmluZ0F1dGhvcml0eU5hbWU9Ik1lZENvbSIvPiAgICA8Y29kZSBjb2RlPSI1MzU3Ni01IiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiIGNvZGVTeXN0ZW1OYW1lPSJMT0lOQyIgZGlzcGxheU5hbWU9IlBlcnNvbmFsIEhlYWx0aCBNb25pdG9yaW5nIFJlcG9ydCIvPiAgICA8dGl0bGU+SGplbW1lbW9uaXRvcmVyaW5nIGZvciAyNTEyNDg5OTk2PC90aXRsZT4gICAgPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMTkwNDA5MTQ1MDEwKzAyMDAiLz4gICAgPGNvbmZpZGVudGlhbGl0eUNvZGUgY29kZT0iTiIgY29kZVN5c3RlbT0iMi4xNi44NDAuMS4xMTM4ODMuNS4yNSIvPiAgICA8bGFuZ3VhZ2VDb2RlIGNvZGU9ImRhLURLIi8+ICAgIDxyZWNvcmRUYXJnZXQgdHlwZUNvZGU9IlJDVCIgY29udGV4dENvbnRyb2xDb2RlPSJPUCI+ICAgICAgICA8cGF0aWVudFJvbGUgY2xhc3NDb2RlPSJQQVQiPiAgICAgICAgICAgIDxpZCBleHRlbnNpb249IjI1MTI0ODk5OTYiIHJvb3Q9IjEuMi4yMDguMTc2LjEuMiIgYXNzaWduaW5nQXV0aG9yaXR5TmFtZT0iQ1BSIi8+ICAgICAgICAgICAgPGFkZHIgdXNlPSJIIj4gICAgICAgICAgICAgICAgPHN0cmVldEFkZHJlc3NMaW5lPlTDpXJuaMO4anZlaiA0NyA8L3N0cmVldEFkZHJlc3NMaW5lPiAgICAgICAgICAgICAgICA8c3RyZWV0QWRkcmVzc0xpbmU+TGFuZGV0PC9zdHJlZXRBZGRyZXNzTGluZT4gICAgICAgICAgICAgICAgPHBvc3RhbENvZGU+OTIyMDwvcG9zdGFsQ29kZT4gICAgICAgICAgICAgICAgPGNpdHk+QWFsYm9yZyDDmHN0PC9jaXR5PiAgICAgICAgICAgICAgICA8Y291bnRyeT5EYW5tYXJrPC9jb3VudHJ5PiAgICAgICAgICAgIDwvYWRkcj4gICAgICAgICAgICA8dGVsZWNvbSB2YWx1ZT0idGVsOjY1MTIzNDU2IiB1c2U9IkgiLz4gICAgICAgICAgICA8dGVsZWNvbSB2YWx1ZT0ibWFpbHRvOm5hYkB1ZGthbnRzZGFubWFyay5kayIgdXNlPSJXUCIvPiAgICAgICAgICAgIDxwYXRpZW50IGNsYXNzQ29kZT0iUFNOIiBkZXRlcm1pbmVyQ29kZT0iSU5TVEFOQ0UiPiAgICAgICAgICAgICAgICA8bmFtZT4gICAgICAgICAgICAgICAgICAgIDxnaXZlbj5OYW5jeTwvZ2l2ZW4+ICAgICAgICAgICAgICAgICAgICA8Z2l2ZW4+QW5uPC9naXZlbj4gICAgICAgICAgICAgICAgICAgIDxmYW1pbHk+QmVyZ2dyZW48L2ZhbWlseT4gICAgICAgICAgICAgICAgPC9uYW1lPiAgICAgICAgICAgIDwvcGF0aWVudD4gICAgICAgIDwvcGF0aWVudFJvbGU+ICAgIDwvcmVjb3JkVGFyZ2V0PiAgICA8YXV0aG9yIHR5cGVDb2RlPSJBVVQiIGNvbnRleHRDb250cm9sQ29kZT0iT1AiPiAgICAgICAgPHRpbWUgdmFsdWU9IjIwMTkwNDA5MTQ0NjEwKzAyMDAiLz4gICAgICAgIDxhc3NpZ25lZEF1dGhvciBjbGFzc0NvZGU9IkFTU0lHTkVEIj4gICAgICAgICAgICA8IS0tIFRoaXMgaXMgdGhlIGlkZW50ZmljYXRpb24gb2YgdGhlIG9yZ2FuaXphdGlvbiwgd2UgZG9uJ3QgdXNlIHRoZSBwZXJzb25hbCBsZXZlbCBpZGVudGlmaWNhdGlvbi0tPiAgICAgICAgICAgIDxpZCBleHRlbnNpb249IjM2ODA2MTAwMDAxNjAwMyIgcm9vdD0iMS4yLjIwOC4xNzYuMS4xIiBhc3NpZ25pbmdBdXRob3JpdHlOYW1lPSJTT1IiLz4gICAgICAgICAgICA8YWRkciB1c2U9IldQIj4gICAgICAgICAgICAgICAgPHN0cmVldEFkZHJlc3NMaW5lPkx1bmdlbWVkaWNpbnNrIGFmZGVsaW5nPC9zdHJlZXRBZGRyZXNzTGluZT4gICAgICAgICAgICAgICAgPHN0cmVldEFkZHJlc3NMaW5lPk3DuGxsZXBhcmt2ZWogNDwvc3RyZWV0QWRkcmVzc0xpbmU+ICAgICAgICAgICAgICAgIDxwb3N0YWxDb2RlPjkwMDA8L3Bvc3RhbENvZGU+ICAgICAgICAgICAgICAgIDxjaXR5PkFhbGJvcmc8L2NpdHk+ICAgICAgICAgICAgICAgIDxjb3VudHJ5PkRhbm1hcms8L2NvdW50cnk+ICAgICAgICAgICAgPC9hZGRyPiAgICAgICAgICAgIDx0ZWxlY29tIHZhbHVlPSJ0ZWw6OTc2NjQ4MDAiIHVzZT0iV1AiLz4gICAgICAgICAgICA8YXNzaWduZWRQZXJzb24gY2xhc3NDb2RlPSJQU04iIGRldGVybWluZXJDb2RlPSJJTlNUQU5DRSI+ICAgICAgICAgICAgICAgIDxuYW1lPiAgICAgICAgICAgICAgICAgICAgPGdpdmVuPkFuZGVyczwvZ2l2ZW4+ICAgICAgICAgICAgICAgICAgICA8ZmFtaWx5PkFuZGVyc2VuPC9mYW1pbHk+ICAgICAgICAgICAgICAgIDwvbmFtZT4gICAgICAgICAgICA8L2Fzc2lnbmVkUGVyc29uPiAgICAgICAgPC9hc3NpZ25lZEF1dGhvcj4gICAgPC9hdXRob3I+ICAgIDxjdXN0b2RpYW4gdHlwZUNvZGU9IkNTVCI+ICAgICAgICA8YXNzaWduZWRDdXN0b2RpYW4gY2xhc3NDb2RlPSJBU1NJR05FRCI+ICAgICAgICAgICAgPHJlcHJlc2VudGVkQ3VzdG9kaWFuT3JnYW5pemF0aW9uIGNsYXNzQ29kZT0iT1JHIiBkZXRlcm1pbmVyQ29kZT0iSU5TVEFOQ0UiPiAgICAgICAgICAgICAgICA8aWQgZXh0ZW5zaW9uPSIzNjgwNjEwMDAwMTYwMDMiIHJvb3Q9IjEuMi4yMDguMTc2LjEuMSIgYXNzaWduaW5nQXV0aG9yaXR5TmFtZT0iU09SIi8+ICAgICAgICAgICAgPC9yZXByZXNlbnRlZEN1c3RvZGlhbk9yZ2FuaXphdGlvbj4gICAgICAgIDwvYXNzaWduZWRDdXN0b2RpYW4+ICAgIDwvY3VzdG9kaWFuPiAgICA8bGVnYWxBdXRoZW50aWNhdG9yIHR5cGVDb2RlPSJMQSIgY29udGV4dENvbnRyb2xDb2RlPSJPUCI+ICAgICAgICA8dGltZSB2YWx1ZT0iMjAxOTA0MDkxNDQ4MTArMDIwMCIvPiAgICAgICAgPHNpZ25hdHVyZUNvZGUgbnVsbEZsYXZvcj0iTkkiLz4gICAgICAgIDxhc3NpZ25lZEVudGl0eSBjbGFzc0NvZGU9IkFTU0lHTkVEIj4gICAgICAgICAgICA8aWQgZXh0ZW5zaW9uPSIzNjgwNjEwMDAwMTYwMDMiIHJvb3Q9IjEuMi4yMDguMTc2LjEuMSIgYXNzaWduaW5nQXV0aG9yaXR5TmFtZT0iU09SIi8+ICAgICAgICAgICAgPGFzc2lnbmVkUGVyc29uIGNsYXNzQ29kZT0iUFNOIiBkZXRlcm1pbmVyQ29kZT0iSU5TVEFOQ0UiPiAgICAgICAgICAgICAgICA8bmFtZT4gICAgICAgICAgICAgICAgICAgIDxwcmVmaXg+TMOmZ2U8L3ByZWZpeD4gICAgICAgICAgICAgICAgICAgIDxnaXZlbj5MYXJzPC9naXZlbj4gICAgICAgICAgICAgICAgICAgIDxmYW1pbHk+T2xzZW48L2ZhbWlseT4gICAgICAgICAgICAgICAgPC9uYW1lPiAgICAgICAgICAgIDwvYXNzaWduZWRQZXJzb24+ICAgICAgICAgICAgPHJlcHJlc2VudGVkT3JnYW5pemF0aW9uIGNsYXNzQ29kZT0iT1JHIiBkZXRlcm1pbmVyQ29kZT0iSU5TVEFOQ0UiPiAgICAgICAgICAgICAgICA8dGVsZWNvbSBudWxsRmxhdm9yPSJOSSIvPiAgICAgICAgICAgICAgICA8YWRkciB1c2U9IldQIj4gICAgICAgICAgICAgICAgICAgIDxzdHJlZXRBZGRyZXNzTGluZSBudWxsRmxhdm9yPSJOSSIvPiAgICAgICAgICAgICAgICA8L2FkZHI+ICAgICAgICAgICAgPC9yZXByZXNlbnRlZE9yZ2FuaXphdGlvbj4gICAgICAgIDwvYXNzaWduZWRFbnRpdHk+ICAgIDwvbGVnYWxBdXRoZW50aWNhdG9yPiAgICA8ZG9jdW1lbnRhdGlvbk9mIHR5cGVDb2RlPSJET0MiPiAgICAgICAgPHNlcnZpY2VFdmVudCBjbGFzc0NvZGU9Ik1QUk9UIiBtb29kQ29kZT0iRVZOIj4gICAgICAgICAgICA8ZWZmZWN0aXZlVGltZT4gICAgICAgICAgICAgICAgPGxvdyB2YWx1ZT0iMjAxOTA0MDkxMjEwMTArMDIwMCIvPiAgICAgICAgICAgICAgICA8aGlnaCB2YWx1ZT0iMjAxOTA0MDkxMjMwMTArMDIwMCIvPiAgICAgICAgICAgIDwvZWZmZWN0aXZlVGltZT4gICAgICAgIDwvc2VydmljZUV2ZW50PiAgICA8L2RvY3VtZW50YXRpb25PZj4gICAgPCEtLVRoaXMgZG9jdW1lbnRhdGlvbk9mIGhvbGRzIHRoZSB2ZXJzaW9uIG9mIHRoZSBDREEtcHJvZmlsZSAtLT4gICAgPGRvY3VtZW50YXRpb25PZj4gICAgICAgIDxzZXJ2aWNlRXZlbnQ+ICAgICAgICAgICAgPCEtLVRoaXMgdGVtcGxhdGVJZCB0ZWxscyB0aGF0IHRoaXMgc2VydmljZUV2ZW50IGhvbGRzIHRoZSBpZGVudGlmaWNhdGlvbiAocGRjKSBhbmQgdmVyc2lvbiAodjIuMCkgb2YgdGhlIENEQSBwcm9maWxlIC0tPiAgICAgICAgICAgIDx0ZW1wbGF0ZUlkIHJvb3Q9IjEuMi4yMDguMTg0LjIwMC4xLjEwIiBleHRlbnNpb249IjIwMTktMDktMTAiLz4gICAgICAgICAgICA8IS0tVGhpcyBpZCBAZXh0ZW5zaW9uIGVxdWFscyB0aGUgaWRlbnRpZmljYXRpb24gYW5kIHZlcnNpb24gb2YgdGhlIENEQSBwcm9maWxlLS0+ICAgICAgICAgICAgPGlkIHJvb3Q9IjEuMi4yMDguMTg0LjEwMC4zIiBleHRlbnNpb249InBobXItdjEuMyIgYXNzaWduaW5nQXV0aG9yaXR5TmFtZT0iTWVkQ29tIi8+ICAgICAgICA8L3NlcnZpY2VFdmVudD4gICAgPC9kb2N1bWVudGF0aW9uT2Y+ICAgIDxkb2N1bWVudGF0aW9uT2YgdHlwZUNvZGU9IkRPQyI+ICAgICAgICA8c2VydmljZUV2ZW50IGNsYXNzQ29kZT0iTVBST1QiIG1vb2RDb2RlPSJFVk4iPiAgICAgICAgICAgIDxjb2RlIGNvZGU9Ik5QVTAzMDExIiBjb2RlU3lzdGVtPSIxLjIuMjA4LjE3Ni4yLjEiIGRpc3BsYXlOYW1lPSJPMiBzYXQuO0hiKGFCKSIvPiAgICAgICAgPC9zZXJ2aWNlRXZlbnQ+ICAgIDwvZG9jdW1lbnRhdGlvbk9mPiAgICA8Y29tcG9uZW50IHR5cGVDb2RlPSJDT01QIiBjb250ZXh0Q29uZHVjdGlvbkluZD0idHJ1ZSI+ICAgICAgICA8c3RydWN0dXJlZEJvZHkgY2xhc3NDb2RlPSJET0NCT0RZIiBtb29kQ29kZT0iRVZOIj4gICAgICAgICAgICA8IS0tIFZpdGFsIFNpZ25zIC0tPiAgICAgICAgICAgIDxjb21wb25lbnQgdHlwZUNvZGU9IkNPTVAiIGNvbnRleHRDb25kdWN0aW9uSW5kPSJ0cnVlIj4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NDb2RlPSJET0NTRUNUIiBtb29kQ29kZT0iRVZOIj4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZUlkIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjEwLjIwLjEuMTYiLz4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZUlkIHJvb3Q9IjIuMTYuODQwLjEuMTEzODgzLjEwLjIwLjkuMiIvPiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlSWQgcm9vdD0iMS4yLjIwOC4xODQuMTEuMSIvPiAgICAgICAgICAgICAgICAgICAgPGNvZGUgY29kZT0iODcxNi0zIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiLz4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5WaXRhbCBTaWduczwvdGl0bGU+ICAgICAgICAgICAgICAgICAgICA8dGV4dD4gICAgICAgICAgICAgICAgICAgICAgICA8cGFyYWdyYXBoPk8yIHNhdC47SGIoYUIpPC9wYXJhZ3JhcGg+ICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHdpZHRoPSIxMDAlIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EYXRvPC90aD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VsOmcmRpPC90aD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UsO4ZCBSZWYuPC90aD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+R3VsIFJlZi48L3RoPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Nw6VsdCBhZjwvdGg+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk92ZXJmw7hydDwvdGg+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPktvbW1lbnRhcjwvdGg+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMDE2LTA2LTA5IDEyOjEwPC90ZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MC45NzwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk3DpWx0IGFmIGJvcmdlcjwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk3DpWxpbmcgb3ZlcmbDuHJ0IGF1dG9tYXRpc2s8L3RkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Db21wbGV0ZWQ8L3RkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OSTwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMDE2LTA2LTA5IDEyOjE1PC90ZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MC45MjwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkw9MC44OCBIPU4vQTwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkw9MC45MiBIPU4vQTwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk3DpWx0IGFmIGJvcmdlcjwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk3DpWxpbmcgb3ZlcmbDuHJ0IGF1dG9tYXRpc2s8L3RkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Db21wbGV0ZWQ8L3RkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OSTwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yMDE2LTA2LTA5IDEyOjMwPC90ZD4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MC45NTwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk3DpWx0IGFmIGJvcmdlcjwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPk3DpWxpbmcgb3ZlcmbDuHJ0IGF1dG9tYXRpc2s8L3RkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5Db21wbGV0ZWQ8L3RkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5OSTwvdGQ+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+ICAgICAgICAgICAgICAgICAgICA8L3RleHQ+ICAgICAgICAgICAgICAgICAgICA8IS0tIFNhdHVyYXRpb24gb25seSAtLT4gICAgICAgICAgICAgICAgICAgIDxlbnRyeSB0eXBlQ29kZT0iQ09NUCIgY29udGV4dENvbmR1Y3Rpb25JbmQ9InRydWUiPiAgICAgICAgICAgICAgICAgICAgICAgIDxvcmdhbml6ZXIgY2xhc3NDb2RlPSJDTFVTVEVSIiBtb29kQ29kZT0iRVZOIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlSWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMTAuMjAuMS4zNSIvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RhdHVzQ29kZSBjb2RlPSJDb21wbGV0ZWQiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMTkwNDA5MTIxMDEwKzAyMDAiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCB0eXBlQ29kZT0iQ09NUCIgY29udGV4dENvbmR1Y3Rpb25JbmQ9InRydWUiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9ic2VydmF0aW9uIGNsYXNzQ29kZT0iT0JTIiBtb29kQ29kZT0iRVZOIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My4xMC4yMC4xLjMxIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlSWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMTAuMjAuOS44Ii8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlkIGV4dGVuc2lvbj0iNGVlYTVjYjAtMmU2Ny0xMWU2LWJkZjQtMDgwMDIwMGM5YTY2IiByb290PSIxLjIuMjA4LjE4NCIgYXNzaWduaW5nQXV0aG9yaXR5TmFtZT0iTWVkQ29tIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgbnVsbEZsYXZvcj0iTkkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNsYXRpb24gY29kZT0iTlBVMDMwMTEiIGNvZGVTeXN0ZW09IjEuMi4yMDguMTc2LjIuMSIgZGlzcGxheU5hbWU9Ik8yIHNhdC47SGIoYUIpIiBjb2RlU3lzdGVtTmFtZT0iTlBVIHRlcm1pbm9sb2dpZW4iLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvZGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIHZhbHVlPSIwLjk3IiB4c2k6dHlwZT0iUFEiIHVuaXQ9Ik5BIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGhvZENvZGUgY29kZT0iUE9UIiBjb2RlU3lzdGVtPSIxLjIuMjA4LjE4NC4xMDAuMSIgZGlzcGxheU5hbWU9Ik3DpWx0IGFmIGJvcmdlciIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlU3lzdGVtTmFtZT0iTWVkQ29tIE1lc3NhZ2UgQ29kZXMiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWV0aG9kQ29kZSBjb2RlPSJBVVQiIGNvZGVTeXN0ZW09IjEuMi4yMDguMTg0LjEwMC4xIiBkaXNwbGF5TmFtZT0iTcOlbGluZyBvdmVyZsO4cnQgYXV0b21hdGlzayIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlU3lzdGVtTmFtZT0iTWVkQ29tIE1lc3NhZ2UgQ29kZXMiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2JzZXJ2YXRpb24+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3JnYW5pemVyPiAgICAgICAgICAgICAgICAgICAgPC9lbnRyeT4gICAgICAgICAgICAgICAgICAgIDxlbnRyeSB0eXBlQ29kZT0iQ09NUCIgY29udGV4dENvbmR1Y3Rpb25JbmQ9InRydWUiPiAgICAgICAgICAgICAgICAgICAgICAgIDxvcmdhbml6ZXIgY2xhc3NDb2RlPSJDTFVTVEVSIiBtb29kQ29kZT0iRVZOIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlSWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMTAuMjAuMS4zNSIvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RhdHVzQ29kZSBjb2RlPSJDb21wbGV0ZWQiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMTkwNDA5MTIxNTEwKzAyMDAiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCB0eXBlQ29kZT0iQ09NUCIgY29udGV4dENvbmR1Y3Rpb25JbmQ9InRydWUiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9ic2VydmF0aW9uIGNsYXNzQ29kZT0iT0JTIiBtb29kQ29kZT0iRVZOIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My4xMC4yMC4xLjMxIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlSWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMTAuMjAuOS44Ii8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlkIGV4dGVuc2lvbj0iNGVlYTVjYjEtMmU2Ny0xMWU2LWJkZjQtMDgwMDIwMGM5YTY2IiByb290PSIxLjIuMjA4LjE4NCIgYXNzaWduaW5nQXV0aG9yaXR5TmFtZT0iTWVkQ29tIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgbnVsbEZsYXZvcj0iTkkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNsYXRpb24gY29kZT0iTlBVMDMwMTEiIGNvZGVTeXN0ZW09IjEuMi4yMDguMTc2LjIuMSIgZGlzcGxheU5hbWU9Ik8yIHNhdC47SGIoYUIpIiBjb2RlU3lzdGVtTmFtZT0iTlBVIHRlcm1pbm9sb2dpZW4iLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvZGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIHZhbHVlPSIwLjkyIiB4c2k6dHlwZT0iUFEiIHVuaXQ9Ik5BIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGhvZENvZGUgY29kZT0iUE9UIiBjb2RlU3lzdGVtPSIxLjIuMjA4LjE4NC4xMDAuMSIgZGlzcGxheU5hbWU9Ik3DpWx0IGFmIGJvcmdlciIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlU3lzdGVtTmFtZT0iTWVkQ29tIE1lc3NhZ2UgQ29kZXMiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWV0aG9kQ29kZSBjb2RlPSJBVVQiIGNvZGVTeXN0ZW09IjEuMi4yMDguMTg0LjEwMC4xIiBkaXNwbGF5TmFtZT0iTcOlbGluZyBvdmVyZsO4cnQgYXV0b21hdGlzayIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlU3lzdGVtTmFtZT0iTWVkQ29tIE1lc3NhZ2UgQ29kZXMiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2JzZXJ2YXRpb24+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3JnYW5pemVyPiAgICAgICAgICAgICAgICAgICAgPC9lbnRyeT4gICAgICAgICAgICAgICAgICAgIDxlbnRyeSB0eXBlQ29kZT0iQ09NUCIgY29udGV4dENvbmR1Y3Rpb25JbmQ9InRydWUiPiAgICAgICAgICAgICAgICAgICAgICAgIDxvcmdhbml6ZXIgY2xhc3NDb2RlPSJDTFVTVEVSIiBtb29kQ29kZT0iRVZOIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlSWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMTAuMjAuMS4zNSIvPiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3RhdHVzQ29kZSBjb2RlPSJDb21wbGV0ZWQiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGVmZmVjdGl2ZVRpbWUgdmFsdWU9IjIwMTkwNDA5MTIzMDEwKzAyMDAiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCB0eXBlQ29kZT0iQ09NUCIgY29udGV4dENvbmR1Y3Rpb25JbmQ9InRydWUiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9ic2VydmF0aW9uIGNsYXNzQ29kZT0iT0JTIiBtb29kQ29kZT0iRVZOIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My4xMC4yMC4xLjMxIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlSWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMTAuMjAuOS44Ii8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgbnVsbEZsYXZvcj0iTkkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuOTYiIGNvZGVTeXN0ZW1OYW1lPSJTTk9NRUQgQ1QiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNsYXRpb24gY29kZT0iTlBVMDMwMTEiIGNvZGVTeXN0ZW09IjEuMi4yMDguMTc2LjIuMSIgZGlzcGxheU5hbWU9Ik8yIHNhdC47SGIoYUIpIiBjb2RlU3lzdGVtTmFtZT0iTlBVIHRlcm1pbm9sb2dpZW4iLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvZGU+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbHVlIHZhbHVlPSIwLjk1IiB4c2k6dHlwZT0iUFEiIHVuaXQ9Ik5BIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1ldGhvZENvZGUgY29kZT0iUE9UIiBjb2RlU3lzdGVtPSIxLjIuMjA4LjE4NC4xMDAuMSIgZGlzcGxheU5hbWU9Ik3DpWx0IGFmIGJvcmdlciIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlU3lzdGVtTmFtZT0iTWVkQ29tIE1lc3NhZ2UgQ29kZXMiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWV0aG9kQ29kZSBjb2RlPSJBVVQiIGNvZGVTeXN0ZW09IjEuMi4yMDguMTg0LjEwMC4xIiBkaXNwbGF5TmFtZT0iTcOlbGluZyBvdmVyZsO4cnQgYXV0b21hdGlzayIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlU3lzdGVtTmFtZT0iTWVkQ29tIE1lc3NhZ2UgQ29kZXMiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2JzZXJ2YXRpb24+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3JnYW5pemVyPiAgICAgICAgICAgICAgICAgICAgPC9lbnRyeT4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAgICAgICAgICAgIDwvY29tcG9uZW50PiAgICAgICAgICAgIDwhLS0gUmVzdWx0cyAtLT4gICAgICAgICAgICA8Y29tcG9uZW50IHR5cGVDb2RlPSJDT01QIiBjb250ZXh0Q29uZHVjdGlvbkluZD0idHJ1ZSI+ICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzQ29kZT0iRE9DU0VDVCIgbW9vZENvZGU9IkVWTiI+ICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My4xMC4yMC4xLjE0Ii8+ICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My4xMC4yMC45LjE0Ii8+ICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIxLjIuMjA4LjE4NC4xMS4xIi8+ICAgICAgICAgICAgICAgICAgICA8Y29kZSBjb2RlPSIzMDk1NC0yIiBjb2RlU3lzdGVtPSIyLjE2Ljg0MC4xLjExMzg4My42LjEiLz4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT5SZXN1bHRzPC90aXRsZT4gICAgICAgICAgICAgICAgICAgIDx0ZXh0Pk5vIFJlc3VsdHMgc2VjdGlvbjwvdGV4dD4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAgICAgICAgICAgIDwvY29tcG9uZW50PiAgICAgICAgICAgIDwhLS0gTWVkaWNhbCBFcXVpcG1lbnQgLS0+ICAgICAgICAgICAgPGNvbXBvbmVudCB0eXBlQ29kZT0iQ09NUCIgY29udGV4dENvbmR1Y3Rpb25JbmQ9InRydWUiPiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc0NvZGU9IkRPQ1NFQ1QiIG1vb2RDb2RlPSJFVk4iPiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlSWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMTAuMjAuMS43Ii8+ICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My4xMC4yMC45LjEiLz4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZUlkIHJvb3Q9IjEuMi4yMDguMTg0LjExLjEiLz4gICAgICAgICAgICAgICAgICAgIDxjb2RlIGNvZGU9IjQ2MjY0LTgiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMSIvPiAgICAgICAgICAgICAgICAgICAgPCEtLSBDT1BEIC0tPiAgICAgICAgICAgICAgICAgICAgPGVudHJ5IHR5cGVDb2RlPSJDT01QIiBjb250ZXh0Q29uZHVjdGlvbkluZD0idHJ1ZSI+ICAgICAgICAgICAgICAgICAgICAgICAgPG9yZ2FuaXplciBjbGFzc0NvZGU9IkNMVVNURVIiIG1vb2RDb2RlPSJFVk4iPiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My4xMC4yMC45LjQiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0YXR1c0NvZGUgY29kZT0iY29tcGxldGVkIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXJ0aWNpcGFudCB0eXBlQ29kZT0iU0JKIiBjb250ZXh0Q29udHJvbENvZGU9Ik9QIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXJ0aWNpcGFudFJvbGUgY2xhc3NDb2RlPSJNQU5VIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGVJZCByb290PSIyLjE2Ljg0MC4xLjExMzg4My4xMC4yMC4xLjUyIi8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlSWQgcm9vdD0iMi4xNi44NDAuMS4xMTM4ODMuMTAuMjAuOS45Ii8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlkIHJvb3Q9IjEuMi4yMDguMTg0LjEwMC4zIiBleHRlbnNpb249Ik1DSTAwMDA1IiBhc3NpZ25pbmdBdXRob3JpdHlOYW1lPSJNZWRDb20iLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGxheWluZ0RldmljZSBjbGFzc0NvZGU9IkRFViIgZGV0ZXJtaW5lckNvZGU9IklOU1RBTkNFIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGUgY29kZT0iTkkiIGNvZGVTeXN0ZW09IjIuMTYuODQwLjEuMTEzODgzLjYuMjQiIGNvZGVTeXN0ZW1OYW1lPSJNREMgRHluYW1pYyI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJhbnNsYXRpb24gY29kZT0iTUNJMDAwMDUiIGNvZGVTeXN0ZW09IjEuMi4yMDguMTg0LjEwMC4zIiBkaXNwbGF5TmFtZT0iTWVkQ29tIEluc3RydW1lbnQgQ29kZXMiLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jb2RlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWFudWZhY3R1cmVyTW9kZWxOYW1lPk1hbnVmYWN0dXJlcjogTm9uaW4gLyBNb2RlbDogT255eCBJSSA5NTYwIGJsdWV0b290aCBveGltZXRlcjwvbWFudWZhY3R1cmVyTW9kZWxOYW1lPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c29mdHdhcmVOYW1lPlNlcmlhbE5yOiBOL0EgLyBTVyBSZXYuIE4vQTwvc29mdHdhcmVOYW1lPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGxheWluZ0RldmljZT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFydGljaXBhbnRSb2xlPiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3BhcnRpY2lwYW50PiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3JnYW5pemVyPiAgICAgICAgICAgICAgICAgICAgPC9lbnRyeT4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPiAgICAgICAgICAgIDwvY29tcG9uZW50PiAgICAgICAgPC9zdHJ1Y3R1cmVkQm9keT4gICAgPC9jb21wb25lbnQ+PC9DbGluaWNhbERvY3VtZW50Pg=="
            }
          }
        ]
      }
    }
  ]
}
```

__Response__
```json
{
  "resourceType": "Bundle",
  "type": "collection",
  "entry": [
    {
      "resource": {
        "resourceType": "Composition",
        "id": "30937f43-4168-4fea-a7cb-1e991e8d3b2c",
        "meta": {
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-composition"
          ]
        },
        "contained": [
          {
            "resourceType": "Organization",
            "id": "1",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization"
              ]
            },
            "extension": [
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-source",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/organization-source",
                      "code": "manual"
                    }
                  ]
                }
              },
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-synchronizationStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/organization-synchronization-status",
                      "code": "NotSynchronized"
                    }
                  ]
                }
              }
            ],
            "identifier": [
              {
                "system": "1.2.208.176.1.1",
                "value": "368061000016003"
              }
            ],
            "telecom": [
              {
                "system": "phone",
                "value": "97664800",
                "use": "work"
              }
            ],
            "address": [
              {
                "use": "work",
                "line": [
                  "Lungemedicinsk afdeling",
                  "Mølleparkvej 4"
                ],
                "city": "Aalborg",
                "postalCode": "9000",
                "country": "Danmark"
              }
            ]
          },
          {
            "resourceType": "Patient",
            "id": "2",
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Nancy Ann <b>BERGGREN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>2512489996</td></tr><tr><td>Address</td><td><span>Tårnhøjvej 47 </span><br/><span>Landet </span><br/><span>Aalborg Øst </span><span>Danmark </span></td></tr></tbody></table></div>"
            },
            "identifier": [
              {
                "system": "urn:oid:1.2.208.176.1.2",
                "value": "2512489996"
              }
            ],
            "name": [
              {
                "family": "Berggren",
                "given": [
                  "Nancy",
                  "Ann"
                ]
              }
            ],
            "telecom": [
              {
                "system": "phone",
                "value": "65123456",
                "use": "home"
              },
              {
                "system": "email",
                "value": "nab@udkantsdanmark.dk",
                "use": "work"
              }
            ],
            "gender": "unknown",
            "address": [
              {
                "use": "home",
                "line": [
                  "Tårnhøjvej 47 ",
                  "Landet"
                ],
                "city": "Aalborg Øst",
                "postalCode": "9220",
                "country": "Danmark"
              }
            ]
          },
          {
            "resourceType": "Practitioner",
            "id": "3",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-practitioner"
              ]
            },
            "name": [
              {
                "family": "Andersen",
                "given": [
                  "Anders"
                ]
              }
            ]
          },
          {
            "resourceType": "Organization",
            "id": "4",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization"
              ]
            },
            "extension": [
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-source",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/organization-source",
                      "code": "manual"
                    }
                  ]
                }
              },
              {
                "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-synchronizationStatus",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/organization-synchronization-status",
                      "code": "NotSynchronized"
                    }
                  ]
                }
              }
            ],
            "identifier": [
              {
                "system": "urn:oid:1.2.208.176.1.1",
                "value": "368061000016003"
              }
            ]
          }
        ],
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-composition-authorOrganization",
            "valueReference": {
              "reference": "#1"
            }
          }
        ],
        "identifier": {
          "system": "urn:oid:1.2.208.184",
          "value": "f9562ad0-2e3f-11e6-bdf4-0800200c9a66"
        },
        "status": "preliminary",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "53576-5",
              "display": "Personal Health Monitoring Report"
            }
          ]
        },
        "subject": {
          "reference": "#2"
        },
        "date": "2019-04-09T12:50:10+00:00",
        "author": [
          {
            "reference": "#3"
          }
        ],
        "title": "Hjemmemonitorering for 2512489996",
        "confidentiality": "N",
        "custodian": {
          "reference": "#4"
        },
        "event": [
          {
            "period": {
              "start": "2019-04-09T10:10:10+00:00",
              "end": "2019-04-09T10:30:10+00:00"
            }
          }
        ]
      }
    },
    {
      "resource": {
        "resourceType": "Device",
        "id": "#3",
        "meta": {
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-device"
          ]
        },
        "manufacturer": "Manufacturer: Nonin / Model: Onyx II 9560 bluetooth oximeter",
        "serialNumber": "MCI00005",
        "type": {
          "coding": [
            {
              "system": "urn:oid:1.2.208.184.100.3",
              "code": "MCI00005",
              "display": "MedCom Instrument Codes"
            }
          ]
        },
        "version": [
          {
            "value": "SerialNr: N/A / SW Rev. N/A"
          }
        ]
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "d264d3a6-d758-4041-96ef-0fe2b87e9713",
        "meta": {
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-observation"
          ]
        },
        "contained": [
          {
            "resourceType": "Patient",
            "id": "2",
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Nancy Ann <b>BERGGREN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>2512489996</td></tr><tr><td>Address</td><td><span>Tårnhøjvej 47 </span><br/><span>Landet </span><br/><span>Aalborg Øst </span><span>Danmark </span></td></tr></tbody></table></div>"
            },
            "identifier": [
              {
                "system": "urn:oid:1.2.208.176.1.2",
                "value": "2512489996"
              }
            ],
            "name": [
              {
                "family": "Berggren",
                "given": [
                  "Nancy",
                  "Ann"
                ]
              }
            ],
            "telecom": [
              {
                "system": "phone",
                "value": "65123456",
                "use": "home"
              },
              {
                "system": "email",
                "value": "nab@udkantsdanmark.dk",
                "use": "work"
              }
            ],
            "gender": "unknown",
            "address": [
              {
                "use": "home",
                "line": [
                  "Tårnhøjvej 47 ",
                  "Landet"
                ],
                "city": "Aalborg Øst",
                "postalCode": "9220",
                "country": "Danmark"
              }
            ]
          },
          {
            "resourceType": "Device",
            "id": "3",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-device"
              ]
            },
            "manufacturer": "Manufacturer: Nonin / Model: Onyx II 9560 bluetooth oximeter",
            "serialNumber": "MCI00005",
            "type": {
              "coding": [
                {
                  "system": "urn:oid:1.2.208.184.100.3",
                  "code": "MCI00005",
                  "display": "MedCom Instrument Codes"
                }
              ]
            },
            "version": [
              {
                "value": "SerialNr: N/A / SW Rev. N/A"
              }
            ]
          }
        ],
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-quality",
            "extension": [
              {
                "url": "qualityType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/quality-types",
                      "code": "UQ",
                      "display": "Usage quality"
                    }
                  ]
                }
              },
              {
                "url": "qualityCode",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/usage-quality",
                      "code": "automatically-transferred",
                      "display": "Automatically transferred measurement"
                    }
                  ]
                }
              }
            ]
          }
        ],
        "identifier": [
          {
            "system": "urn:oid:1.2.208.184",
            "value": "4eea5cb0-2e67-11e6-bdf4-0800200c9a66",
            "assigner": {
              "reference": "https://document-transformation.cit-document-transformation-2592.local/fhir/Organization/76725"
            }
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "urn:oid:1.2.208.176.2.1",
              "code": "NPU03011",
              "display": "O2 sat.;Hb(aB)"
            }
          ]
        },
        "subject": {
          "reference": "#2"
        },
        "effectiveDateTime": "2019-04-09T10:10:10+00:00",
        "performer": [
          {
            "reference": "#2"
          }
        ],
        "valueQuantity": {
          "value": 97,
          "unit": "%"
        },
        "device": {
          "reference": "#3"
        }
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "58983381-ffdb-4f7f-8b3a-88e6fa96a3f8",
        "meta": {
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-observation"
          ]
        },
        "contained": [
          {
            "resourceType": "Patient",
            "id": "2",
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Nancy Ann <b>BERGGREN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>2512489996</td></tr><tr><td>Address</td><td><span>Tårnhøjvej 47 </span><br/><span>Landet </span><br/><span>Aalborg Øst </span><span>Danmark </span></td></tr></tbody></table></div>"
            },
            "identifier": [
              {
                "system": "urn:oid:1.2.208.176.1.2",
                "value": "2512489996"
              }
            ],
            "name": [
              {
                "family": "Berggren",
                "given": [
                  "Nancy",
                  "Ann"
                ]
              }
            ],
            "telecom": [
              {
                "system": "phone",
                "value": "65123456",
                "use": "home"
              },
              {
                "system": "email",
                "value": "nab@udkantsdanmark.dk",
                "use": "work"
              }
            ],
            "gender": "unknown",
            "address": [
              {
                "use": "home",
                "line": [
                  "Tårnhøjvej 47 ",
                  "Landet"
                ],
                "city": "Aalborg Øst",
                "postalCode": "9220",
                "country": "Danmark"
              }
            ]
          },
          {
            "resourceType": "Device",
            "id": "3",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-device"
              ]
            },
            "manufacturer": "Manufacturer: Nonin / Model: Onyx II 9560 bluetooth oximeter",
            "serialNumber": "MCI00005",
            "type": {
              "coding": [
                {
                  "system": "urn:oid:1.2.208.184.100.3",
                  "code": "MCI00005",
                  "display": "MedCom Instrument Codes"
                }
              ]
            },
            "version": [
              {
                "value": "SerialNr: N/A / SW Rev. N/A"
              }
            ]
          }
        ],
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-quality",
            "extension": [
              {
                "url": "qualityType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/quality-types",
                      "code": "UQ",
                      "display": "Usage quality"
                    }
                  ]
                }
              },
              {
                "url": "qualityCode",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/usage-quality",
                      "code": "automatically-transferred",
                      "display": "Automatically transferred measurement"
                    }
                  ]
                }
              }
            ]
          }
        ],
        "identifier": [
          {
            "system": "urn:oid:1.2.208.184",
            "value": "4eea5cb1-2e67-11e6-bdf4-0800200c9a66",
            "assigner": {
              "reference": "https://document-transformation.cit-document-transformation-2592.local/fhir/Organization/76725"
            }
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "urn:oid:1.2.208.176.2.1",
              "code": "NPU03011",
              "display": "O2 sat.;Hb(aB)"
            }
          ]
        },
        "subject": {
          "reference": "#2"
        },
        "effectiveDateTime": "2019-04-09T10:15:10+00:00",
        "performer": [
          {
            "reference": "#2"
          }
        ],
        "valueQuantity": {
          "value": 92,
          "unit": "%"
        },
        "device": {
          "reference": "#3"
        }
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "87ae629e-caf8-49a5-82b5-7f96d33018e3",
        "meta": {
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-observation"
          ]
        },
        "contained": [
          {
            "resourceType": "Patient",
            "id": "2",
            "text": {
              "status": "generated",
              "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Nancy Ann <b>BERGGREN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>2512489996</td></tr><tr><td>Address</td><td><span>Tårnhøjvej 47 </span><br/><span>Landet </span><br/><span>Aalborg Øst </span><span>Danmark </span></td></tr></tbody></table></div>"
            },
            "identifier": [
              {
                "system": "urn:oid:1.2.208.176.1.2",
                "value": "2512489996"
              }
            ],
            "name": [
              {
                "family": "Berggren",
                "given": [
                  "Nancy",
                  "Ann"
                ]
              }
            ],
            "telecom": [
              {
                "system": "phone",
                "value": "65123456",
                "use": "home"
              },
              {
                "system": "email",
                "value": "nab@udkantsdanmark.dk",
                "use": "work"
              }
            ],
            "gender": "unknown",
            "address": [
              {
                "use": "home",
                "line": [
                  "Tårnhøjvej 47 ",
                  "Landet"
                ],
                "city": "Aalborg Øst",
                "postalCode": "9220",
                "country": "Danmark"
              }
            ]
          },
          {
            "resourceType": "Device",
            "id": "3",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-device"
              ]
            },
            "manufacturer": "Manufacturer: Nonin / Model: Onyx II 9560 bluetooth oximeter",
            "serialNumber": "MCI00005",
            "type": {
              "coding": [
                {
                  "system": "urn:oid:1.2.208.184.100.3",
                  "code": "MCI00005",
                  "display": "MedCom Instrument Codes"
                }
              ]
            },
            "version": [
              {
                "value": "SerialNr: N/A / SW Rev. N/A"
              }
            ]
          }
        ],
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-quality",
            "extension": [
              {
                "url": "qualityType",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/quality-types",
                      "code": "UQ",
                      "display": "Usage quality"
                    }
                  ]
                }
              },
              {
                "url": "qualityCode",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/usage-quality",
                      "code": "automatically-transferred",
                      "display": "Automatically transferred measurement"
                    }
                  ]
                }
              }
            ]
          }
        ],
        "status": "final",
        "code": {
          "coding": [
            {
              "system": "urn:oid:1.2.208.176.2.1",
              "code": "NPU03011",
              "display": "O2 sat.;Hb(aB)"
            }
          ]
        },
        "subject": {
          "reference": "#2"
        },
        "effectiveDateTime": "2019-04-09T10:30:10+00:00",
        "performer": [
          {
            "reference": "#2"
          }
        ],
        "valueQuantity": {
          "value": 95,
          "unit": "%"
        },
        "device": {
          "reference": "#3"
        }
      }
    }
  ]
}
```

---

