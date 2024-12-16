File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-actionguidance.fsh

Profile: ehealth-actionguidance
Id: ehealth-actionguidance
Parent: Basic
* ^status = #active
* extension contains ehealth-recommendation named recommendation 0..1
* extension contains ehealth-intendedAudience named intendedAudience 0..*
* extension contains ehealth-modifier-role named modifierRole 1..*
* extension contains ehealth-basic-title named title 0..1
* extension contains ehealth-version named version 0..1
* extension contains ehealth-description named description 0..1
* extension contains ehealth-purpose named purpose 0..1
* extension contains ehealth-useContext named useContext 0..1
* extension contains ehealth-status named status 1..1
* extension contains ehealth-content named content 1..1
* extension contains ehealth-actionguidance-type named type 1..1
* extension contains ehealth-actionguidance-for named forType 0..*
* code from http://ehealth.sundhed.dk/vs/basic-resource-type (required)


Extension: ehealth-actionguidance-type
Title:     "Ehealth action guidance type"
Description: "The action guidance type"
* . ^short = "The action guidance type"
* value[x] only Coding
* valueCoding from http://ehealth.sundhed.dk/vs/action-guidance-types
* valueCoding 1..1


Extension: ehealth-actionguidance-for
Title:     "Ehealth action guidance for"
Description: "Action guidance for"
* . ^short = "Action guidance for"
* extension contains
    forType 1..1 and
    forReference 1..1
* extension[forReference].valueReference 1..1
* extension[forReference]. ^short = "What resource is this an action guide for"
* extension[forType].valueCoding from http://ehealth.sundhed.dk/vs/action-guidance-for-types
* extension[forType].valueCoding 1..1
* extension[forType]. ^short = "In type is stated what this is a reference to"



---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-activitydefinition.fsh

Profile: ehealth-activitydefinition
Id: ehealth-activitydefinition
Parent: ActivityDefinition
* extension contains ehealth-reuseCriteria named reuseCriteria 0..1
* extension contains ehealth-recommendation named recommendation 0..1
* extension contains ehealth-intendedAudience named intendedAudience 0..*
* extension contains ehealth-referenceRange named referenceRange 0..*
* extension contains ehealth-modifier-role named modifierRole 1..*
* extension contains ehealth-quality named quality 0..*
* extension contains ehealth-sharingPolicy named sharingPolicy 1..1
* extension contains ehealth-sharingApprovalPolicy named sharingApprovalPolicy 0..1
* extension contains ehealth-employee-title named employeeTitle 0..1
* extension contains ehealth-predecessor named predecessor 0..1
* extension contains ehealth-base named base 0..1
* extension contains ehealth-base-environment named baseEnvironment 0..1
* version 1..1
* jurisdiction from http://ehealth.sundhed.dk/vs/jurisdiction
* topic from http://ehealth.sundhed.dk/vs/topic-type
* topic 1..1
* library only Canonical(ehealth-library)
* code from http://ehealth.sundhed.dk/vs/activitydefinition-code
* code 1..1
* location only Reference(Location)
* location ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-appointment.fsh

Profile: ehealth-appointment
Id: ehealth-appointment
Parent: Appointment
* obeys responsible-1 and single-patient-appointment
* extension contains ehealth-responsible named responsible 1..1
* extension contains ehealth-group-id named groupId 0..1
* extension contains ehealth-legalBasis named legalBasis 0..1
* extension contains ehealth-releasableResource named releasableResource 0..1
* extension contains ehealth-responsible-organization named responsibleOrganization 0..1
* extension contains ehealth-performer named performer 0..1
* extension contains ehealth-performing-organization named performingOrganization 0..1
* extension[ehealth-legalBasis] obeys governance-1 and responsible-2
* appointmentType 1..1
* appointmentType from http://ehealth.sundhed.dk/vs/appointmenttype-codes
* reasonCode 0..1
* reasonCode from http://ehealth.sundhed.dk/vs/appointment-reason
* supportingInformation only Reference(ehealth-episodeofcare or ehealth-careplan)
* supportingInformation ^type.aggregation = #referenced
* supportingInformation 0..1
* participant 2..*
* participant.extension contains ehealth-ext-careteam named careteam 0..1
* participant.actor only Reference(ehealth-patient or ehealth-practitioner or ehealth-relatedperson or Location)
* participant.actor ^type.aggregation[+] = #referenced
* participant.actor ^type.aggregation[+] = #contained
* serviceType 0..*
* serviceType ^slicing.discriminator.type = #value
* serviceType ^slicing.discriminator.path = "coding.code"
* serviceType ^slicing.rules = #open
* serviceType contains appointmentType 1..1
* serviceType[appointmentType].coding from http://ehealth.sundhed.dk/vs/appointment-servicetype
* serviceType[appointmentType].coding.code = #regular (exactly)


Instance: appointment01
InstanceOf: Appointment
Usage: #example
* meta.profile = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-appointment"
* extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-performing-organization"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/Organization/108752)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible-organization"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/Organization/108752)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible"
* extension[=].valueReference = Reference(http://inttest.ehealth.sundhed.dk/CareTeam/42) "CareTeam Aarhus"
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-legalBasis"
* extension[=].valueCodeableConcept = http://ehealth.sundhed.dk/cs/jurisdiction#service-act
* status = #proposed
* appointmentType = http://ehealth.sundhed.dk/cs/appointmenttype-codes#FOLLOWUP
* serviceType = http://ehealth.sundhed.dk/cs/appointment-servicetype#regular
* reasonCode = http://ehealth.sundhed.dk/cs/appointment-reason#412776001
* reasonCode.text = "Clinical Review"
* supportingInformation = Reference(http://inttest.ehealth.sundhed.dk/EpisodeOfCare/42)
* participant[0].actor = Reference(http://inttest.ehealth.sundhed.dk/organization/fhir/Practitioner/42) "Tove Jensen"
* participant[=].status = #needs-action
* participant[+].actor = Reference(http://inttest.ehealth.sundhed.dk/organization/fhir/Practitioner/123)
* participant[=].status = #needs-action
* participant[+].extension.url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam"
* participant[=].extension.valueReference = Reference(http://inttest.ehealth.sundhed.dk/CareTeam/42) "CareTeam Aarhus"
* participant[=].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#ATND
* participant[=].status = #needs-action

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-auditevent.fsh

Profile: ehealth-auditevent
Id: ehealth-auditevent
Parent: AuditEvent

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-careplan.fsh

Profile: ehealth-careplan
Id: ehealth-careplan
Parent: CarePlan
* extension contains http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare named episodeOfCare 1..1
* extension[episodeOfCare] ^type.aggregation = #referenced
* extension contains ehealth-careplan-statusHistory named statusHistory 0..*
* extension contains ehealth-teamHistory named teamHistory 0..*
* extension contains ehealth-careplan-statusschedule named statusSchedule 0..*
* extension contains ehealth-teamschedule named teamSchedule 0..*
// definition is deleted in R4
// * definition 1..1
// * definition only Reference(ehealth-plandefinition or ehealth-questionnaire)
* basedOn 0..0
* replaces 0..0
* partOf only Reference(ehealth-careplan)
* partOf ^type.aggregation = #referenced
* partOf 0..1
* status from http://hl7.org/fhir/ValueSet/request-status
* intent only code
* category from http://ehealth.sundhed.dk/vs/careplan-category
* subject only Reference(ehealth-patient)
* subject ^type.aggregation = #referenced
// * context only Reference(ehealth-episodeofcare) not in R4
* period 1..1
* author only Reference(ehealth-patient or ehealth-practitioner or ehealth-relatedperson or ehealth-organization or ehealth-careteam)
* careTeam only Reference(ehealth-careteam)
* careTeam ^type.aggregation = #referenced
* addresses only Reference(ehealth-condition)
* addresses ^type.aggregation = #referenced
* addresses 1..1
* supportingInfo only Reference(Resource)
* supportingInfo ^type.aggregation = #referenced
* goal only Reference(ehealth-goal)
* goal ^type.aggregation = #referenced
* activity.outcomeReference only Reference(Resource)
* activity.outcomeReference ^type.aggregation = #referenced
* activity.progress.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* activity.progress.authorString only string
* activity.reference 1..1
* activity.reference ^type.aggregation = #referenced
* activity.reference ^type.aggregation[+] = #referenced
* activity.reference ^type.aggregation[+] = #bundled
* activity.reference only Reference(ehealth-servicerequest)
// * activity.detail.definition only Reference(ehealth-plandefinition or ehealth-activitydefinition or ehealth-questionnaire) not in R4
* activity.detail.reasonReference only Reference(ehealth-condition)
* activity.detail.reasonReference ^type.aggregation = #referenced
* activity.detail.goal only Reference(Goal)
* activity.detail.goal ^type.aggregation = #referenced
* activity.detail.location only Reference(Location)
* activity.detail.location ^type.aggregation = #referenced
* activity.detail.performer only Reference(ehealth-practitioner or ehealth-organization or ehealth-relatedperson or ehealth-patient or ehealth-careteam)
* activity.detail.performer ^type.aggregation = #referenced
* note.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* note.authorString only string
* extension contains ehealth-participant named participant 0..*

Extension:   ehealth-careplan-statusHistory
Title:       "Careplan status history"
* extension contains
    status 1..1 and
    period 1..1
* extension[status].value[x] only CodeableConcept
* extension[status].valueCodeableConcept 1..1
* extension[period].value[x] only Period
* extension[period].valuePeriod 1..1

Extension:   ehealth-careplan-statusschedule
Title:       "Careplan status schedule"
* extension contains
    status 1..1 and
    scheduledTime 1..1
* extension[status].value[x] only code
* extension[status].valueCode 1..1
* extension[status].value[x] from http://hl7.org/fhir/ValueSet/request-status
* extension[scheduledTime].value[x] only dateTime
* extension[scheduledTime].valueDateTime 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-careteam.fsh

Profile: ehealth-careteam
Id: ehealth-careteam
Parent: CareTeam
* status 1..1
* name 1..1
* subject 0..0
* category from http://ehealth.sundhed.dk/vs/careteam-category
* participant.role from http://ehealth.sundhed.dk/vs/careteam-participant-role
* participant.role 1..*
* participant.member only Reference(ehealth-practitioner or ehealth-practitionerrole or ehealth-relatedperson or ehealth-patient or ehealth-organization or ehealth-careteam)
* participant.member ^type.aggregation = #referenced
* participant.member 1..1
* participant.onBehalfOf only Reference(ehealth-organization)
* participant.onBehalfOf ^type.aggregation = #referenced
* reasonCode from http://ehealth.sundhed.dk/vs/conditions
* reasonCode 1..*
* reasonReference 0..0
* managingOrganization only Reference(ehealth-organization)
* managingOrganization ^type.aggregation = #referenced
* note.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* note.authorString only string
* telecom.value 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-clinicalimpression.fsh

Profile: ehealth-clinicalimpression
Id: ehealth-clinicalimpression
Parent: ClinicalImpression
* extension contains ehealth-clinicalimpression-assessor-organization named assessorOrganization 0..1
* extension contains ehealth-clinicalimpression-careplan named carePlan 0..1
* extension contains ehealth-clinicalimpression-decisionContext named decisionContext 0..*
* extension contains ehealth-clinicalimpression-decision named decision 0..*
* extension contains http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare named episodeOfCare 1..1
* extension contains ehealth-questionnaireresponse-finding-basis named findingBasis 0..*
* extension[episodeOfCare] ^type.aggregation = #referenced
* code 1..1
* code from http://ehealth.sundhed.dk/vs/clinicalimpression-codes
* subject only Reference(ehealth-patient)
* subject ^type.aggregation = #referenced
* assessor only Reference(ehealth-practitioner)
* assessor ^type.aggregation = #referenced
* previous only Reference(ehealth-clinicalimpression)
* previous ^type.aggregation = #referenced
* problem only Reference(ehealth-condition or AllergyIntolerance)
* problem ^type.aggregation = #referenced
* investigation.extension contains ehealth-clinicalimpression-viewInvestigationItem named viewInvestigationItem 0..*
* investigation.item only Reference(ehealth-media or ehealth-observation or ehealth-questionnaireresponse or FamilyMemberHistory or DiagnosticReport or RiskAssessment or ImagingStudy)
* investigation.item ^type.aggregation = #referenced
* investigation.code from http://ehealth.sundhed.dk/vs/clinicalimpression-investigation-item-codes (example)
* finding.itemCodeableConcept from http://ehealth.sundhed.dk/vs/clinicalimpression-finding-codes
* finding.itemReference only Reference(Observation or ehealth-condition)
* prognosisReference only Reference(RiskAssessment)
* prognosisReference ^type.aggregation = #referenced
// Not in R4: * action only Reference(ReferralRequest or ehealth-procedurerequest or Procedure or MedicationRequest or ehealth-appointment)
* note.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* note.authorString only string
* note 0..*

Extension: ehealth-clinicalimpression-assessor-organization
Title:     "assessor-Organization"
Description: "The organization that the assessor is a part of."
* . ^short = "Assessors Organization"
* value[x] only Reference(ehealth-organization)
* valueReference 1..1
* value[x] ^type.aggregation = #referenced

Extension:   ehealth-clinicalimpression-careplan
Title:       "Careplan"
Description: "Identifies the CarePlan context in which this particular resource was created."
* . ^short = "The Careplan"
* value[x] only Reference(ehealth-careplan)
* valueReference 1..1
* value[x] ^type.aggregation = #referenced

Extension:   ehealth-clinicalimpression-decisionContext
Title:       "Decision context"
Description: "Library and relevant resources used for evaluation"
* . ^short = "Library and relevant resources used for evaluation"
* value[x] only Reference(Parameters)
* valueReference 1..1
* value[x] ^type.aggregation[+] = #referenced
* value[x] ^type.aggregation[+] = #contained

Extension:   ehealth-clinicalimpression-decision
Title:       "Decision"
Description: "Clinical impression decision, 'approved' or 'approved-for-sharing'"
* . ^short = "approved | approved-for-sharing"
* value[x] only CodeableConcept
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/clinicalimpression-decision-codes

Extension:   ehealth-clinicalimpression-mediaInvestigationItem
Title:       "Media investigation item"
Description: "Investigation item for Media resources so they can be approved."
* . ^short = "Media item"
* value[x] only Reference(ehealth-media)
* valueReference 1..1
* value[x] ^type.aggregation = #referenced

Extension:   ehealth-clinicalimpression-viewInvestigationItem
Title:       "View investigation item"
Description: "Investigation item for View resources so they can be approved."
* . ^short = "View item"
* value[x] only Reference(ehealth-view)
* valueReference 1..1
* value[x] ^type.aggregation = #referenced

Extension:   ehealth-questionnaireresponse-finding-basis
Title:       "Questionnaire response finding basis"
Description: "Basis for the overall clinical impression finding of the questionnaire response"
* . ^short = "The basis for a clinical impression finding"
* extension contains
    linkId 1..1 and
    value 0..1 and
    finding 1..1
* extension[value].value[x] 1..1
* extension[value].value[x] only decimal or integer or string or Coding or boolean
* extension[value] ^short = "Value from questionnaire response"
* extension[finding].valueCodeableConcept from http://ehealth.sundhed.dk/vs/clinicalimpression-finding-codes
* extension[finding] ^short = "What was found"
* extension[linkId].value[x] only string
* extension[linkId] ^short = "Unique id for item in questionnaire"
* extension contains ehealth-questionnaire-answerSignificance named answerSignificance 1..1
* extension[answerSignificance] ^short = "The Answer significance for an answer"


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-communication-request.fsh

Profile: ehealth-communication-request
Id: ehealth-communication-request
Parent: CommunicationRequest
* extension contains http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare named episodeOfCare 0..1
* extension[episodeOfCare] ^type.aggregation = #referenced
// No ProcedureRequest in R4: * basedOn only Reference(ProcedureRequest)
* basedOn 0..1
* category from http://ehealth.sundhed.dk/vs/message-category
* priority from http://hl7.org/fhir/ValueSet/request-priority
* medium from http://ehealth.sundhed.dk/vs/message-medium
* subject 1..1
* subject only Reference(Patient)
* recipient only Reference(Patient or CareTeam)
* recipient ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-communication.fsh

Profile: ehealth-communication
Id: ehealth-communication
Parent: Communication
* extension contains http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare named episodeOfCare 1..1
* extension[episodeOfCare] ^type.aggregation = #referenced
* extension contains ehealth-communication-recipientCareTeam named recipientCareTeam 0..*
* extension contains ehealth-communication-senderCareTeam named senderCareTeam 0..*
* extension contains ehealth-restriction-category named restrictionCategory 1..*
// not in R4: * definition only Reference(ehealth-plandefinition or ehealth-activitydefinition)
* basedOn only Reference(Resource)
* basedOn ^type.aggregation = #referenced
* partOf only Reference(Resource)
* partOf ^type.aggregation = #referenced
* category 1..*
* category from http://ehealth.sundhed.dk/vs/communication-category
* subject 1..1
* subject only Reference(ehealth-patient)
* subject ^type.aggregation = #referenced
* recipient only Reference(ehealth-device or ehealth-patient or ehealth-practitioner or ehealth-relatedperson)
* recipient ^type.aggregation = #referenced
// is CodeableConcept in R4: * topic only Reference(Resource)
* sender only Reference(ehealth-device or ehealth-patient or ehealth-practitioner or ehealth-relatedperson)
* sender ^type.aggregation = #referenced
* reasonReference only Reference(ehealth-condition or ehealth-observation)
* reasonReference ^type.aggregation = #referenced
* payload.contentString 1..1
* payload.contentString only string


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-composition.fsh

Profile: ehealth-composition
Id: ehealth-composition
Parent: Composition
* extension contains ehealth-composition-authorOrganization named authorOrganization 0..*
* type from http://ehealth.sundhed.dk/vs/document-type
* category from http://ehealth.sundhed.dk/vs/document-class
* category 0..1
* subject 1..1
* subject only Reference(Resource)
* encounter only Reference(Encounter)
* encounter ^type.aggregation[+] = #bundled
* encounter ^type.aggregation[+] = #contained
* author only Reference(ehealth-practitioner or ehealth-device or ehealth-patient or ehealth-relatedperson)
* attester.party only Reference(ehealth-patient or ehealth-practitioner or ehealth-organization)
* custodian only Reference(ehealth-organization)
* custodian ^type.aggregation[+] = #bundled
* custodian ^type.aggregation[+] = #contained
* relatesTo.targetIdentifier only Identifier
* relatesTo.targetReference only Reference(ehealth-composition)
* event.code from http://ehealth.sundhed.dk/vs/event-type-codes

Extension: ehealth-composition-authorOrganization
Title: "Author organization"
Description: "Organization that authored the Composition"
* . ^short = "Organization that authored the Composition"
* value[x] only Reference(ehealth-organization)
* valueReference 1..1
* value[x] ^type.aggregation[+] = #bundled
* value[x] ^type.aggregation[+] = #contained


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-condition.fsh

Profile: ehealth-condition
Id: ehealth-condition
Parent: Condition
* extension contains http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare named episodeOfCare 0..1
* extension[episodeOfCare] ^type.aggregation = #referenced
* code 1..1
* code from http://ehealth.sundhed.dk/vs/conditions
* subject only Reference(ehealth-patient or Group)
* subject ^type.aggregation = #referenced
* asserter only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* asserter ^type.aggregation = #referenced
* stage.assessment only Reference(ehealth-clinicalimpression or DiagnosticReport or ehealth-observation)
* stage.assessment ^type.aggregation = #referenced
* note.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* note.authorString only string


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-consent.fsh

Profile: ehealth-consent
Id: ehealth-consent
Parent: Consent
* category from http://ehealth.sundhed.dk/vs/consent-category
* patient 1..1
* patient only Reference(ehealth-patient)
* patient ^type.aggregation = #referenced
// actor not in R4 - but maybe use provision.actor as below?
// * provision.actor.reference only Reference(ehealth-device or Group or ehealth-careteam or ehealth-organization or ehealth-patient or ehealth-practitioner or ehealth-patient)
// * provision.data.reference only Reference(ehealth-episodeofcare)
* organization only Reference(ehealth-organization)
* organization ^type.aggregation = #referenced
* sourceReference only Reference(ehealth-consent or ehealth-documentreference or Contract or ehealth-questionnaireresponse)


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-definedquestion.fsh

Profile: ehealth-definedquestion
Id: ehealth-definedquestion
Parent: StructureDefinition
// Done - nothing to be profiled

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-device.fsh

Profile: ehealth-device
Id: ehealth-device
Parent: Device
* extension contains ehealth-device-privatelyOwned named privatelyOwned 0..1
* extension contains ehealth-device-suppliers named suppliers 0..*
* status 1..1
* type from http://ehealth.sundhed.dk/vs/device-types
* patient 0..0
* owner only Reference(ehealth-organization)
* owner ^type.aggregation = #referenced
* note.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* note.authorString only string

Extension: ehealth-device-privatelyOwned
Title: "Privately owned"
Description: "True if this device is privately owned (BYOD - Bring you own device)."
* . ^short = "True if this device is owned or provided by the patient."
* value[x] only boolean

Extension:  ehealth-device-suppliers
Title:      "Suppliers"
Description: "Suppliers of different kinds. E.g device suppliers, support suppliers, training suppliers, etc."
* . ^short = "Different types of suppliers for a device."
* extension contains
    supplier 1..1 and
    role 1..*
* extension[supplier].value[x] only Reference(ehealth-organization or ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* extension[role].value[x] only CodeableConcept
* extension[role].valueCodeableConcept 1..1
* extension[role].valueCodeableConcept from http://ehealth.sundhed.dk/vs/device-supplier-roles


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-devicemetric.fsh

Profile: ehealth-devicemetric
Id: ehealth-devicemetric
Parent: DeviceMetric
* extension contains ehealth-devicemetric-properties named properties 0..*
* extension contains ehealth-devicemetric-qualities named qualities 1..1
* extension contains ehealth-devicemetric-qualityHistory named qualitiyHistory 0..*
* extension contains ehealth-devicemetric-templateQualities named templateQualities 3..3
* type from http://ehealth.sundhed.dk/vs/device-measurement-unit
* unit from http://ehealth.sundhed.dk/vs/device-measurement-unit
* source 1..1
* source ^type.aggregation = #referenced
* source only Reference(ehealth-device)
* parent 0..0
* calibration.extension contains ehealth-devicemetric-calibrationExpires named calibrationExpires 0..1

Extension:  ehealth-devicemetric-properties
Title:      "Properties"
Description: "Properties of this device. Properties are static by nature whereas qualities are dynamic and may change during the life cycle or calibration cycle of a device."
* . ^short = "Properties of the Device"
* extension contains
    type 1..1 and
    value 1..1
* extension[type].value[x] only CodeableConcept
* extension[type].valueCodeableConcept from http://ehealth.sundhed.dk/vs/devicemetric-property-types
* extension[value].value[x] 1..1
* extension[value].value[x] only boolean or code or date or dateTime or decimal or integer or markdown or string or CodeableConcept or Quantity or Range

Extension:  ehealth-devicemetric-qualities
Title:      "Qualities"
Description: "Current device quality"
* . ^short = "Qualities of the Device"
* extension contains
    category 1..1 and
    value 0..1
* extension[category].value[x] only CodeableConcept
* extension[category].valueCodeableConcept from http://ehealth.sundhed.dk/vs/devicemetric-quality-types
* extension[value] 1..1
* extension[value].value[x] only decimal or integer or CodeableConcept

Extension:  ehealth-devicemetric-qualityHistory
Title:      "Quality history"
Description: "History of device quality"
* . ^short = "History of device quality"
* extension contains
    category 1..1 and
    value 1..1 and
    period 1..1 and
    reason 0..1
* extension[category].value[x] only CodeableConcept
* extension[category].valueCodeableConcept from http://ehealth.sundhed.dk/vs/devicemetric-quality-types
* extension[value].value[x] only decimal or integer or CodeableConcept
* extension[period].value[x] only Period
* extension[reason].value[x] only string

Extension:  ehealth-devicemetric-templateQualities
Title:      "Template qualities"
Description: "Device quality default settings for an initial, a degraded, and an overridden device quality."
* . ^short = "Device quality default settings"
* extension contains
    category 1..1 and
    value 1..1
* extension[category].value[x] only CodeableConcept
* extension[category].valueCodeableConcept from http://ehealth.sundhed.dk/vs/devicemetric-quality-types
* extension[value].value[x] only decimal or integer or CodeableConcept

Extension:   ehealth-devicemetric-calibrationExpires
Title:       "Calibration expires"
Description: "Date when the current calibration expires and recalibration is required."
* . ^short = "Date when the current calibration expires."
* value[x] only dateTime


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-deviceusestatement.fsh

Profile: ehealth-deviceusestatement
Id: ehealth-deviceusestatement
Parent: DeviceUseStatement
* extension contains ehealth-deviceusestatement-context named Context 1..1
* subject only Reference(ehealth-patient)
* subject ^type.aggregation = #referenced
* source only Reference(ehealth-patient or ehealth-practitioner or ehealth-relatedperson)
* source ^type.aggregation = #referenced
* device only Reference(ehealth-device)
* device only Reference(ehealth-device)
// not in R4: * indication from http://ehealth.sundhed.dk/vs/device-use-reason
* note.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* note.authorString only string

Extension:   ehealth-deviceusestatement-context
Title:       "Context"
Description: "The careplan context for the device use"
* . ^short = "The careplan context for the device use"
* value[x] only Reference(ehealth-careplan)
* valueReference 1..1
* value[x] ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-documentreference.fsh

Profile: ehealth-documentreference
Id: ehealth-documentreference
Parent: DocumentReference
* type from http://ehealth.sundhed.dk/vs/document-type
* category 0..1
* category from http://ehealth.sundhed.dk/vs/document-class
* subject only Reference(ehealth-patient or ehealth-practitioner or Group or ehealth-device)
* subject ^type.aggregation = #referenced
* author only Reference(ehealth-practitioner or ehealth-organization or ehealth-device or ehealth-patient or ehealth-relatedperson)
* author ^type.aggregation = #referenced
* authenticator only Reference(ehealth-practitioner or ehealth-organization)
* authenticator ^type.aggregation = #referenced
* custodian only Reference(ehealth-organization)
* custodian ^type.aggregation = #referenced
* relatesTo.target only Reference(ehealth-documentreference)
* content.format from http://ehealth.sundhed.dk/vs/format-codes
* context.event from http://ehealth.sundhed.dk/vs/event-type-codes
* context.facilityType from http://ehealth.sundhed.dk/vs/facility-type-codes
* context.practiceSetting from http://ehealth.sundhed.dk/vs/practice-setting-codes
* context.sourcePatientInfo only Reference(ehealth-patient)
* extension contains ehealth-manuallydeprecated-type named manuallyDeprecated 0..1

Extension: ehealth-manuallydeprecated-type
Title:     "Ehealth Document manually deprecated"
Description: "Ehealth Document manually deprecated"
* . ^short = "Ehealth Document manually deprecated"
* value[x] only boolean
* value[x] 1..1

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-episodeofcare.fsh

Profile: ehealth-episodeofcare
Id: ehealth-episodeofcare
Parent: EpisodeOfCare
* extension contains ehealth-episodeofcare-caremanagerOrganization named caremanagerOrganization 1..1
* extension contains ehealth-teamHistory named teamHistory 0..*
* extension contains ehealth-episodeofcare-statusschedule named episodeofcareStatusschedule 0..*
* extension contains ehealth-teamschedule named teamschedule 0..*
* extension contains ehealth-participant named participant 0..*
* diagnosis 1..*
* diagnosis.condition only Reference(ehealth-condition)
* diagnosis.condition ^type.aggregation = #referenced
* patient only Reference(ehealth-patient)
* patient ^type.aggregation = #referenced
* managingOrganization 1..1
* managingOrganization ^type.aggregation = #referenced
* managingOrganization only Reference(ehealth-organization)
* period 1..1
// No ReferralRequest in R4: * referralRequest only Reference(ReferralRequest)
* careManager 0..0
* team only Reference(ehealth-careteam)
* team ^type.aggregation = #referenced
* account 0..0

Extension: ehealth-episodeofcare-caremanagerOrganization
Title: "Caremanager organization"
Description: "Reference to caremanagers organization"
* . ^short = "Reference to caremanagers organization"
* value[x] only Reference(ehealth-organization)
* valueReference 1..1
* value[x] ^type.aggregation = #referenced

Extension:  ehealth-episodeofcare-statusschedule
Title:      "Status schedule"
Description: "Scheduled status change"
* . ^short = "Status Schedule"
* extension contains
    status 1..1 and
    scheduledTime 1..1
* extension[status].value[x] only code
* extension[status].valueCode 1..1
* extension[status].value[x] from http://hl7.org/fhir/ValueSet/episode-of-care-status
* extension[scheduledTime].value[x] only dateTime


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-actionguidance-view-content.fsh

Extension: ehealth-content
Title:     "Content"
Description: "The content"
* . ^short = "The content"
* valueReference 1..1
* value[x] only Reference(Binary)
* value[x] ^type.aggregation = #contained

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-actionguidance-view-description.fsh

Extension: ehealth-description
Title:     "Description"
Description: "Natural language description"
* . ^short = "Natural language description"
* value[x] only markdown


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-actionguidance-view-purpose.fsh

Extension: ehealth-purpose
Title:     "Purpose"
Description: "Why this is defined"
* . ^short = "Why this is defined"
* value[x] only markdown


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-actionguidance-view-status.fsh

Extension: ehealth-status
Title:     "Status"
Description: "The current status"
* . ^short = "The current status"
* value[x] only Coding
* valueCoding from http://hl7.org/fhir/ValueSet/publication-status
* valueCoding 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-actionguidance-view-title.fsh

Extension: ehealth-basic-title
Title:     "Title"
Description: "Name for this (human friendly)"
* . ^short = "Name for this (human friendly)"
* value[x] only string
* valueString 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-actionguidance-view-usecontext.fsh

Extension: ehealth-useContext
Title:     "useContext"
Description: "The context that the content is intended to support"
* . ^short = "The context that the content is intended to support"
* value[x] only UsageContext


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-actionguidance-view-version.fsh

Extension: ehealth-version
Title:     "Version"
Description: "Business version"
* . ^short = "The current version"
* value[x] only string
* valueString 1..1

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-assigning-careteam.fsh

Extension: ehealth-assigning-careteam
Title: "Assigning careteam"
* value[x] 1..1
* valueReference 1..1
* value[x] only Reference(ehealth-careteam)


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-base-environment.fsh

Extension:   ehealth-base-environment
Title:       "Base environment"
Description: "Base environment"
* . ^short = "Base environment"
* value[x] only Identifier
* value[x].system = "http://ehealth.sundhed.dk/id/ehealth-environment"

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-base.fsh

Extension:   ehealth-base
Title:       "Base"
Description: "Version Base"
* . ^short = "Base"
* value[x] only Identifier
* value[x].system = "urn:ietf:rfc:3986"

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-careteam.fsh

Extension:   ehealth-ext-careteam
Title:       "Careteam"
Description: "Careteam"
* . ^short = "Careteam"
* value[x] only Reference(ehealth-careteam)
* value[x] ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-communication-recipientCareTeam.fsh

Extension: ehealth-communication-recipientCareTeam
Title:     "Recipient careteam"
Description: "CareTeam that is a recipient of a Communication"
* . ^short = "CareTeam message recipient"
* value[x] only Reference(ehealth-careteam)
* value[x] ^type.aggregation = #referenced
* valueReference 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-communication-senderCareTeam.fsh

Extension: ehealth-communication-senderCareTeam
Title:     "Sender careteam"
Description: "CareTeam that is a sender of a Communication"
* . ^short = "CareTeam message sender"
* value[x] only Reference(ehealth-careteam)
* valueReference 1..1
* value[x] ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-creator.fsh

Extension: ehealth-creator
Title: "Creator"
Description: "Creator Careteam"
* . ^short = "Creator Careteam"
* value[x] only Reference(ehealth-careteam)
* value[x] ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-employee-title.fsh

Extension: ehealth-employee-title
Title:     "Employee title"
Description: "Title for employed clinicians"
* . ^short = "Title for clinicians"
* value[x] only string

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-end-meeting-on-end-time.fsh

Extension: ehealth-end-meeting-on-end-time
Title: "End meeting on end time"
Description: "Indicates if a video meeting must end on end time"
* . ^short = "Indicates if a video meeting must end on end time"
* value[x] only boolean


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-group-id.fsh

Extension:   ehealth-group-id
Title:       "Group id"
Description: "A logical id identifying a set of messages, which have the same recipient (considered a 'group message'). Must be supplied by the client, eg. as a UUID"
* . ^short = "Logical id identifying a set of messages with the same recipient"
* value[x] only string


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-guest-pin-code.fsh

Extension: ehealth-guest-pin-code
Title: "Guest PIN code"
Description: "The PIN code to be used to gain access to a video meeting. Is provided by the service, not the client, and is not updateable."
* . ^short = "Guest PIN code"
* value[x] only string


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-host-pin-code.fsh

Extension: ehealth-host-pin-code
Title: "Guest PIN code"
Description: "The PIN code to be used to gain access to a video meeting. Is provided by the service, not the client, and is not updateable. Host PIN must be used in order to start the meeting"
* . ^short = "Host PIN code"
* value[x] only string


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-include-as-extra.fsh

Extension: ehealth-include-as-extra
Title: "includeAsExtra"
Description: "Used to mark that the action/service request may be performed as extra, meaning the action/service request may also be performed outside the resolved timing slots."
* . ^short = "Used to mark that the action/service request may be performed as extra, meaning the action/service request may also be performed outside the resolved timing slots."
* value[x] only boolean
* valueBoolean 1..1

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-intendedAudience.fsh

Extension:   ehealth-intendedAudience
Title:       "Intended audience"
Description: "Specifies that the resource is only intended for use in the specified organisations. Leave blank if the resource is intended for global use."
* . ^short = "The intended audience of the resource"
* value[x] only Reference(ehealth-organization)
* value[x] ^type.aggregation = #referenced
* valueReference 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-legalBasis.fsh

Extension:   ehealth-legalBasis
Title:       "Legal basis"
Description: "Legal basis"
* . ^short = "Legal basis"
* value[x] only CodeableConcept
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/jurisdiction


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-max-participants.fsh

Extension: ehealth-max-participants
Title: "Max participants"
Description: "The maximum number of participants allowed to participate in a video meeting"
* . ^short = "The maximum number of participants allowed to participate in a video meeting"
* value[x] only integer


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-meeting-url.fsh

Extension: ehealth-meeting-url
Title: "Meeting URL"
Description: "The URL at which a video meeting will take place. Is provided by the service, not the client, and may not be updated"
* . ^short = "Meeting URL"
* value[x] only uri


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-modifier-role.fsh

Extension: ehealth-modifier-role
Title:     "Modified role"
Description: "This is a modifier role that can hold a role and a reference to the item who has the role. Ex. owner + a reference to the owner organization."
* . ^short = "Modifier role"
* extension contains
    reference 1..1 and
    role 1..1
* extension[reference].value[x] only Reference(ehealth-organization)
* extension[reference].valueReference ^type.aggregation = #referenced
* extension[reference].valueReference 1..1
* extension[role].value[x] only CodeableConcept
* extension[role].valueCodeableConcept from http://ehealth.sundhed.dk/vs/modifier-role
* extension[role].valueCodeableConcept 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-nameandaddressprotection.fsh

Extension: ehealth-nameandaddressprotection
Title:     "Name and address protection"
Description: "Period of name and address protection. Patients with name and address protection are marked with security label ‘restricted’ (R in http://hl7.org/fhir/v3/Confidentiality)."
* . ^short = "Period of name and address protection"
* value[x] only Period
* valuePeriod 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-overviewUsageMode.fsh

Extension: ehealth-overviewUsageMode
Title:     "Overview usage mode"
Description: "Identifies whether the specified element and/or results of the element should appear in overview or table presentation."
* . ^short = "Identifies whether the specified element and/or results of the element should appear in overview or table presentation."
* value[x] only CodeableConcept
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/overviewUsageMode
* valueCodeableConcept 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-participant.fsh

Extension: ehealth-participant
Title: "Participant"
Description: "The participating CareTeam or Practitioner."
* . ^short = "Who or what is participating"
* extension contains
    function 0..1 and
    actor 0..1 and
    actorref 0..1
* extension[function].value[x] only Coding
* extension[function].value[x] from http://ehealth.sundhed.dk/vs/participant-function (required)
* extension[function].valueCoding 0..1
* extension[function] ^short = "The function of the participant"
* extension[function] ^definition = "The code defining the function of the participant."
* extension[actor].value[x] only Reference(CareTeam or Practitioner)
* extension[actor].value[x] ^type.aggregation = #referenced
* extension[actor].valueReference 0..1
* extension[actor] ^short = "The participant"
* extension[actor] ^definition = "The CareTeam or Practitioner that is participating."
* extension[actorref].value[x] only string
* extension[actorref].valueString 0..1
* extension[actorref] ^short = "The participant ref (string)"
* extension[actorref] ^definition = "The CareTeam or Practitioner that is participating."


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-patient-contactnote.fsh

Extension: ehealth-patient-contactnote
Title:     "Patient contact note"
Description: "This note holds the information of when the patient is available for communication - eg. between 10 and 12 every monday"
* . ^short = "Note regarding patient contact"
* value[x] only string


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-performer.fsh

Extension:   ehealth-performer
Title:       "Performer"
Description: "The actual performer in an appointment, eg. teacher in a group class"
* . ^short = "Performer"
* value[x] only Reference(ehealth-careteam or ehealth-practitioner)
* value[x] ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-performing-organization.fsh

Extension:   ehealth-performing-organization
Title:       "Performing organization"
Description: "Organization who is performing in the given context"
* . ^short = "Organization who is performing in the given context"
* value[x] only Reference(ehealth-organization)
* value[x] ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-predecessor.fsh

Extension:   ehealth-predecessor
Title:       "Predecessor"
Description: "Version Predecessor"
* . ^short = "Predecessor"
* value[x] only Identifier
* value[x].system = "urn:ietf:rfc:3986"

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-quality.fsh

Extension: ehealth-quality
Title:     "Quality"
Description: "Minimum required or actually assessed quality values. The qualityType element states the type of quality. For different values of qualityType the required or assessed quality value (qualityCode) must be from different value sets. The relation between qualityType and allowed value sets are defined in the definition of value set http://ehealth.sundhed.dk/vs/quality-types."
* . ^short = "Minimum requirements for qualities"
* extension contains
    qualityType 1..1 and
    qualityCode 1..1
* extension[qualityType].value[x] only CodeableConcept
* extension[qualityType].valueCodeableConcept 1..1
* extension[qualityType].valueCodeableConcept from http://ehealth.sundhed.dk/vs/quality-types
* extension[qualityCode].value[x] ^short = "Included ValueSets: Usage quality (http://ehealth.sundhed.dk/vs/usage-quality), device measuring quality (http://ehealth.sundhed.dk/vs/device-measuring-quality) and situation quality (http://ehealth.sundhed.dk/vs/situation-quality)"
* extension[qualityCode].valueCodeableConcept 1..1
* extension[qualityCode].value[x] only CodeableConcept // cannot reference three value sets as below. Build into one?
//* extension[qualityCode].valueCodeableConcept from http://ehealth.sundhed.dk/vs/device-measuring-quality or ehealth-quality-types or ehealth-situation-quality


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-questionnaire-answerSignificance.fsh

Extension: ehealth-questionnaire-answerSignificance
Title:     "Answer significance"
Description: "Defines the Answer significance for an answer option in the questionnaire."
* . ^short = "The Answer significance for an answer"
* extension contains
    ehealth-answer-Condition named answerCondition 1..2 and
    significance 1..1
* extension[significance].valueCoding from http://ehealth.sundhed.dk/vs/questionnaire-item-significance-indicator
* extension[significance].valueCoding 1..1

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-questionnaire-shortText.fsh

Extension: ehealth-questionnaire-shortText
Title:     "Short text"
Description: "Short text for questionnaires"
* . ^short = "Short text"
* value[x] only string


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-recommendation.fsh

Extension:   ehealth-recommendation
Title:       "recommendation"
Description: "Recommendation state of the plan definition"
* . ^short = "Recommendation state of the plan definition"
* value[x] only CodeableConcept
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/plandefinition-recommendation
* valueCodeableConcept 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-referenceRange.fsh

Extension:   ehealth-referenceRange
Title:       "Reference range"
Description: "Provides guide for interpretation. Must have at least a low or a high."
* . ^short = "Provides guide for interpretation."
* extension contains
    low 0..1 and
    high 0..1 and
    type 0..1
* extension[low].value[x] only SimpleQuantity
* extension[low].valueQuantity 1..1
* extension[high].value[x] only SimpleQuantity
* extension[high].valueQuantity 1..1
* extension[type].value[x] only CodeableConcept
* extension[type].valueCodeableConcept from http://ehealth.sundhed.dk/vs/reference-range-type
* extension[type].valueCodeableConcept 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-registration-deadline.fsh

Extension: ehealth-registration-deadline
Title: "Registration deadline"
Description: "Registration deadline"
* . ^short = "Registration deadline"
* value[x] only dateTime


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-releasableResource.fsh

Extension:   ehealth-releasableResource
Title:       "Releasable resource"
Description: "Indicates if the resource may be shared through national document repositories"
* . ^short = "Indicates if the resource may be shared through national document repositories"
* value[x] only boolean


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-resolved-timing.fsh

Extension:   ehealth-resolved-timing
Title:       "Resolved timing"
Description: "Resolved timing reflects whether a measurement (Observation, QuestionnaireResponse or Media) has been performed ad-hoc or as fulfillment of a measurement regime time slot in which case the extent of the time slot is given by start and end. If the measurement regime has a form for which a time slot cannot be resolved or determining is/was not supported, the type unresolved is used."
* . ^short = "Resolved Timing"
* extension contains
    serviceRequestVersionId 1..1 and
    start 0..1 and
    end 0..1 and
    type 1..1
* extension[serviceRequestVersionId].value[x] only id
* extension[serviceRequestVersionId].valueId 1..1
* extension[start].value[x] only dateTime
* extension[start].valueDateTime 1..1
* extension[end].value[x] only dateTime
* extension[end].valueDateTime 1..1
* extension[type].value[x] only CodeableConcept
* extension[type].valueCodeableConcept from http://ehealth.sundhed.dk/vs/resolved-timing-type
* extension[type].valueCodeableConcept 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-responsible-organization.fsh

Extension:   ehealth-responsible-organization
Title:       "Responsible organization"
Description: "Organization responsible in a given context"
* . ^short = "Responsible organization"
* value[x] only Reference(ehealth-organization)
* value[x] ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-responsible.fsh

Extension:   ehealth-responsible
Title:       "Responsible"
Description: "Individuals, careteam and/or organization who are responsible in the given context"
* . ^short = "Responsible careteam/practitioner"
* value[x] only Reference(ehealth-careteam or ehealth-practitioner)
* value[x] ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-restriction-category.fsh

Extension: ehealth-restriction-category
Title:     "Restriction category"
Description: "The resource is intended for certain category of workflow/responsibility only"
* . ^short = "Restriction category"
* value[x] only CodeableConcept
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/restriction-category


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-reuseCriteria.fsh

Extension:   ehealth-reuseCriteria
Title:       "Reuse criteria"
Description: "Defines if and when a response can be reused"
* . ^short = "Criteria to be met for reuse of responses to be allowed"
* extension contains
    allowed 1..1 and
    situationQuality 0..1 and
    usageQuality 0..1 and
    deviceMeasuringQuality 0..1 and
    dataActuality 1..1
* extension[allowed].value[x] only boolean
* extension[allowed].valueBoolean 1..1
* extension[situationQuality].value[x] only CodeableConcept
* extension[situationQuality].valueCodeableConcept 1..1
* extension[usageQuality].value[x] only CodeableConcept
* extension[usageQuality].valueCodeableConcept 1..1
* extension[deviceMeasuringQuality].value[x] only CodeableConcept
* extension[deviceMeasuringQuality].valueCodeableConcept 1..1
* extension[dataActuality].value[x] only Duration
* extension[dataActuality].valueDuration 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-revision.fsh

Extension: ehealth-revision
Title: "Revision"
Description: "Business revision of the resource"
* . ^short = "Business revision"
* value[x] only string
* valueString 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-sharingApprovalPolicy.fsh

Extension: ehealth-sharingApprovalPolicy
Title:     "Sharing Approval Policy"
Description: "Policy for approval of sharing a resource with national data banks"
* . ^short = "Policy for approval of sharing a resource with national data banks"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/measurement-sharing-approval-policies



---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-sharingPolicy.fsh

Extension: ehealth-sharingPolicy
Title:     "Sharing policy"
Description: "Policy for sharing a resource with national data banks"
* . ^short = "Policy for sharing a resource with national data banks"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/measurement-sharing-policies


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-teamHistory.fsh

Extension:  ehealth-teamHistory
Title:      "Team history"
Description: "History of assigned careTeam"
* . ^short = "History of assigned careTeam"
* extension contains
    careTeam 1..1 and
    period 1..1
* extension[careTeam].value[x] only Reference(ehealth-careteam)
* extension[careTeam].value[x] ^type.aggregation = #referenced
* extension[careTeam].valueReference 1..1
* extension[period].value[x] only Period
* extension[period].valuePeriod 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-teamschedule.fsh

Extension:   ehealth-teamschedule
Title:       "Team schedule"
Description: "Scheduled team change"
* . ^short = "Team Schedule"
* extension contains
    careteam 1..1 and
    scheduledTime 1..1 and
    addCareteam 0..*
* extension[careteam].value[x] only Reference(ehealth-careteam)
* extension[careteam].valueReference 1..1
* extension[careteam].value[x] ^type.aggregation = #referenced
* extension[scheduledTime].value[x] only dateTime
* extension[scheduledTime].valueDateTime 1..1
* extension[addCareteam].value[x] only boolean
* extension[addCareteam].valueBoolean 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-triggerCondition.fsh

Extension: ehealth-triggerCondition
Title:     "Trigger Condition"
Description: "Conditions for a triggering action to be met for other action to be triggered."
* . ^short = "Conditions for a triggering action"
* extension contains
    actionId 1..1 and
    count 1..1
* extension[actionId].valueId 1..1
* extension[actionId] ^short = "What action is triggering action"
* extension[count].valueInteger 1..1
* extension[count] ^short = "Amount of measurements for triggering action."
* extension[count] ^definition = "Amount of measurements (Observation, QuestionnaireResponse or Media) for triggering action that must have been submitted."

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-usage.fsh

Extension: ehealth-usage
Title:     "Usage"
Description: "Description for clinicians"
* . ^short = "usage"
* value[x] only string

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-ext-vmr-uri.fsh

Extension: ehealth-vmr-uri
Title: "VMR URI"
Description: "Virtual Meeting Room URI that can be used in eg. webRTC clients. Is provided by the service, not the client, and may not be updated."
* . ^short = "Video meeting URL"
* value[x] only uri


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-goal.fsh

Profile: ehealth-goal
Id: ehealth-goal
Parent: Goal
* description from http://ehealth.sundhed.dk/vs/goal-description
* subject 1..1
* subject ^type.aggregation = #referenced
* subject only Reference(ehealth-patient)
* target.measure from http://ehealth.sundhed.dk/vs/goal-target-measure
* expressedBy only Reference(ehealth-patient or ehealth-practitioner or ehealth-relatedperson)
* addresses only Reference(ehealth-condition or ehealth-observation or MedicationStatement or NutritionOrder or ehealth-servicerequest or RiskAssessment)
* addresses ^type.aggregation = #referenced
* outcomeReference only Reference(ehealth-observation)
* outcomeReference ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-group-appointment.fsh

Profile: ehealth-group-appointment
Id: ehealth-group-appointment
Parent: Appointment
* obeys responsible-1 and max-participants and min-participants
* extension contains ehealth-responsible named responsible 1..1
* extension contains ehealth-group-id named groupId 0..1
* extension contains ehealth-legalBasis named legalBasis 0..1
* extension contains ehealth-releasableResource named releasableResource 0..1
* extension contains ehealth-responsible-organization named responsibleOrganization 0..1
* extension contains ehealth-performer named performer 0..1
* extension contains ehealth-performing-organization named performingOrganization 0..1
* extension contains ehealth-creator named creator 0..1
* extension contains ehealth-intendedAudience named intendedAudience 0..*
* extension contains ehealth-registration-deadline named registrationDeadline 0..1
* extension[ehealth-legalBasis] obeys governance-1 and responsible-2
* appointmentType 1..1
* appointmentType from http://ehealth.sundhed.dk/vs/appointmenttype-codes
* reasonCode 0..1
* reasonCode from http://ehealth.sundhed.dk/vs/appointment-reason
* supportingInformation only Reference(ehealth-episodeofcare or ehealth-careplan)
* supportingInformation ^type.aggregation = #referenced
* supportingInformation 0..1
* participant.extension contains ehealth-ext-careteam named careteam 0..1
* participant.actor only Reference(ehealth-patient or ehealth-practitioner or ehealth-relatedperson or Location)
* participant.actor ^type.aggregation[+] = #referenced
* participant.actor ^type.aggregation[+] = #contained
* participant.extension contains ehealth-assigning-careteam named assigningCareteam 1..1
* serviceType 0..*
* serviceType ^slicing.discriminator.type = #value
* serviceType ^slicing.discriminator.path = "coding.code"
* serviceType ^slicing.rules = #open
* serviceType contains appointmentType 1..1
* serviceType[appointmentType].coding from http://ehealth.sundhed.dk/vs/appointment-servicetype
* serviceType[appointmentType].coding.code = #group (exactly)

Instance: group-appointment01
InstanceOf: Appointment
Usage: #example
* meta.versionId = "3"
* meta.lastUpdated = "2021-07-15T07:06:36.667+00:00"
* meta.profile = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-group-appointment"
* contained = Inline-Instance-for-group-appointment01-1
* extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-group-id"
* extension[=].valueString = "42"
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-releasableResource"
* extension[=].valueBoolean = true
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible-organization"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/Organization/108752)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-creator"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-performer"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-performing-organization"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/Organization/108752)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-intendedAudience"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/Organization/8564)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-registration-deadline"
* extension[=].valueDateTime = "2021-12-25T14:35:45-05:00"
* identifier[0].system = "http://ehealth.sundhed.dk/id/ehealth-identifier"
* identifier[=].value = "5d1a3107-9fc8-4a6f-b66a-16fcf1937ade"
* identifier[+].system = "http://vdx.medcom.dk/meeting"
* identifier[=].value = "894e56b4-53bb-4004-8f06-6a4d7ad115ca"
* status = #booked
* appointmentType = http://ehealth.sundhed.dk/cs/appointmenttype-codes#FOLLOWUP
* serviceType = http://ehealth.sundhed.dk/cs/appointment-servicetype#group
* reasonCode = http://ehealth.sundhed.dk/cs/appointment-reason#412776001
* priority = 1
* description = "Forundersøgelse"
* start = "2021-07-16T09:00:00.000+00:00"
* end = "2021-07-16T11:00:00.000+00:00"
* comment = "Forundersøgelse for grå stær hos Trifork.\n Patienten møder op hos Trifork med udfyldt spørgeskema"
* participant[0].extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-assigning-careteam"
* participant[=].extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam"
* participant[=].extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#PART "Participation"
* participant[=].required = #required
* participant[=].status = #accepted
* participant[+].extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-assigning-careteam"
* participant[=].extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam"
* participant[=].extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].actor = Reference(https://organization.fut.trifork.com/fhir/Practitioner/107302) "actor1 display text"
* participant[=].required = #required
* participant[=].status = #tentative
* participant[+].extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-assigning-careteam"
* participant[=].extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam"
* participant[=].extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].actor = Reference(https://patient.fut.trifork.com/fhir/Patient/102)
* participant[=].required = #required
* participant[=].status = #accepted
* participant[+].extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-assigning-careteam"
* participant[=].extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam"
* participant[=].extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].actor = Reference(1)
* participant[=].required = #required
* participant[=].status = #accepted

Instance: Inline-Instance-for-group-appointment01-1
InstanceOf: Location
Usage: #inline
* id = "1"
* name = "Room 43b"

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-group-videoappointment.fsh

Profile: ehealth-group-videoappointment
Id: ehealth-group-videoappointment
Parent: Appointment
* obeys responsible-1 and max-participants and min-participants
* extension contains ehealth-end-meeting-on-end-time named endMeetingOnEndTime 0..1
* extension contains ehealth-max-participants named maxParticipants 0..1
* extension contains ehealth-meeting-url named meetingUrl 0..1
* extension contains ehealth-vmr-uri named vmrUri 0..1
* extension contains ehealth-guest-pin-code named guestPinCode 0..1
* extension contains ehealth-host-pin-code named hostPinCode 0..1
* extension contains ehealth-responsible named responsible 1..1
* extension contains ehealth-group-id named groupId 0..1
* extension contains ehealth-legalBasis named legalBasis 0..1
* extension contains ehealth-releasableResource named releasableResource 0..1
* extension contains ehealth-responsible-organization named responsibleOrganization 0..1
* extension contains ehealth-performer named performer 0..1
* extension contains ehealth-creator named creator 0..1
* extension contains ehealth-intendedAudience named intendedAudience 0..*
* extension contains ehealth-registration-deadline named registrationDeadline 0..1
* extension contains ehealth-performing-organization named performingOrganization 0..1
* extension[ehealth-legalBasis] obeys governance-1 and responsible-2
* appointmentType 1..1
* appointmentType from http://ehealth.sundhed.dk/vs/appointmenttype-codes
* reasonCode 0..1
* reasonCode from http://ehealth.sundhed.dk/vs/appointment-reason
* supportingInformation only Reference(ehealth-episodeofcare or ehealth-careplan)
* supportingInformation ^type.aggregation = #referenced
* supportingInformation 0..1
* participant.extension contains ehealth-ext-careteam named careteam 0..1
* participant.actor only Reference(ehealth-patient or ehealth-practitioner or ehealth-relatedperson or Location)
* participant.actor ^type.aggregation[+] = #referenced
* participant.actor ^type.aggregation[+] = #contained
* participant.extension contains ehealth-assigning-careteam named assigningCareteam 0..1
* start 1..1
* end 1..1
* description 1..1
* serviceType 0..*
* serviceType ^slicing.discriminator.type = #value
* serviceType ^slicing.discriminator.path = "coding.code"
* serviceType ^slicing.rules = #open
* serviceType contains appointmentServiceType 1..1
* serviceType[appointmentServiceType].coding from http://ehealth.sundhed.dk/vs/appointment-servicetype
* serviceType[appointmentServiceType].coding.code = #group-video (exactly)

Instance: group-videoappointment01
InstanceOf: Appointment
Usage: #example
* meta.versionId = "3"
* meta.lastUpdated = "2021-07-15T07:06:36.667+00:00"
* meta.profile = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-group-videoappointment"
* contained = Inline-Instance-for-group-videoappointment01-1
* extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-max-participants"
* extension[=].valueInteger = 4
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-meeting-url"
* extension[=].valueUri = "https://portal.vconf.dk/?url=721834@rooms.vconf-stage.dk&pin=37835&start_dato=2021-07-16T09:00:00"
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-vmr-uri"
* extension[=].valueUri = "721834@rooms.vconf-stage.dk"
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-end-meeting-on-end-time"
* extension[=].valueBoolean = false
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-creator"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-intendedAudience"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/Organization/8564)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-registration-deadline"
* extension[=].valueDateTime = "2021-12-25T14:35:45-05:00"
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-host-pin-code"
* extension[=].valueString = "29202"
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-guest-pin-code"
* extension[=].valueString = "37835"
* identifier[0].system = "http://ehealth.sundhed.dk/id/ehealth-identifier"
* identifier[=].value = "5d1a3107-9fc8-4a6f-b66a-16fcf1937ade"
* identifier[+].system = "http://vdx.medcom.dk/meeting"
* identifier[=].value = "894e56b4-53bb-4004-8f06-6a4d7ad115ca"
* status = #booked
* appointmentType = http://ehealth.sundhed.dk/cs/appointmenttype-codes#FOLLOWUP
* serviceType = http://ehealth.sundhed.dk/cs/appointment-servicetype#group-video
* reasonCode = http://ehealth.sundhed.dk/cs/appointment-reason#412776001
* priority = 1
* description = "Forundersøgelse"
* start = "2021-07-16T09:00:00.000+00:00"
* end = "2021-07-16T11:00:00.000+00:00"
* comment = "Forundersøgelse for grå stær hos Trifork.\n Patienten møder op hos Trifork med udfyldt spørgeskema"
* participant[0].extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-assigning-careteam"
* participant[=].extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam"
* participant[=].extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#PART "Participation"
* participant[=].required = #required
* participant[=].status = #accepted
* participant[+].actor = Reference(https://organization.fut.trifork.com/fhir/Practitioner/107302) "actor1 display text"
* participant[=].required = #required
* participant[=].status = #tentative
* participant[+].actor = Reference(https://patient.fut.trifork.com/fhir/Patient/102)
* participant[=].required = #required
* participant[=].status = #accepted
* participant[+].actor = Reference(1)
* participant[=].required = #required
* participant[=].status = #accepted

Instance: Inline-Instance-for-group-videoappointment01-1
InstanceOf: Location
Usage: #inline
* id = "1"
* name = "Room 43b"


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-guidanceresponse.fsh

Profile: ehealth-guidanceresponse
Id: ehealth-guidanceresponse
Parent: GuidanceResponse
* extension contains ehealth-guidanceresponse-episodeOfCare named episodeOfCare 1..1
* extension[episodeOfCare] ^type.aggregation = #referenced
// not in R4: * module only Reference(ServiceDefinition)
* subject only Reference(ehealth-patient)
* subject ^type.aggregation = #referenced
* performer only Reference(ehealth-device)
* performer ^type.aggregation = #referenced
// not in R4: * reason only Reference(Resource)
* evaluationMessage ^type.aggregation = #referenced
* result only Reference(ehealth-careplan or RequestGroup)
* result ^type.aggregation = #referenced

Extension:   ehealth-guidanceresponse-episodeOfCare
Title:       "EpisodeOfCare"
Description: "Episode of care"
* . ^short = "Episode of care"
* value[x] ^type.aggregation = #referenced
* value[x] only Reference(ehealth-episodeofcare)


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-inv-appointment-common.fsh

// Appointment profile invariants

Invariant:   responsible-1
Description: "Ensuring that responsible entity is a participating party"
Expression:  "(extension('http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible').value.reference in participant.extension('http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam').value.reference) or (extension('http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible').value.reference in participant.actor.reference)"
Severity:    #error

Invariant:   single-patient-appointment
Description: "Only a single patient is allowed pr. appointment"
Expression:  "participant.actor.where(reference.contains('/Patient')).count() < 2"
Severity:    #error

Invariant:   governance-1
Description: "When extension is used a Episode of Care MUST be referenced"
Expression:  "%resource.supportingInformation.reference.contains('EpisodeOfCare/')"
Severity:    #error

Invariant:   responsible-2
Description: "Both performing organization and responsible organization must be populated when legal basis is used"
Expression:  "%resource.extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-performing-organization').exists() and %resource.extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible-organization').exists()"
Severity:    #error

Invariant:   max-participants
Description: "Too many intended participants"
Expression:  "extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-max-participants').exists() implies participant.actor.where(reference.startsWith('#').not()).count() <= extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-max-participants').valueInteger"
Severity:    #warning

Invariant:   min-participants
Description: "Too few intended participants"
Expression:  "extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-min-participants').exists() implies participant.actor.where(reference.startsWith('#').not()).count() >= extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-min-participants').valueInteger"
Severity:    #warning


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-library.fsh

Profile: ehealth-library
Id: ehealth-library
Parent: Library
* extension contains ehealth-intendedAudience named intendedAudience 0..*
* extension contains ehealth-revision named revision 1..1
* extension contains ehealth-modifier-role named modifierRole 1..1
* version 1..1
* type from http://ehealth.sundhed.dk/vs/library-type
* useContext.code from http://ehealth.sundhed.dk/vs/usage-context-type
* jurisdiction from http://ehealth.sundhed.dk/vs/jurisdiction
* parameter 1..*


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-media.fsh

Profile: ehealth-media
Id: ehealth-media
Parent: Media
* extension contains http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare named episodeOfCare 1..1
* extension[episodeOfCare] ^type.aggregation = #referenced
* extension contains ehealth-quality named quality 0..*
* extension contains ehealth-resolved-timing named resolvedTiming 1..1
* basedOn 1..1
* basedOn only Reference(ehealth-servicerequest)
* basedOn ^type.aggregation = #referenced
* subject 1..1
* subject only Reference(ehealth-patient or ehealth-practitioner or Group or ehealth-device or Specimen)
* subject.reference ^type.aggregation = #referenced
* subject.reference 1..1
* created[x] 1..1
* operator only Reference(ehealth-practitioner)
* operator ^type.aggregation = #referenced
* device only Reference(ehealth-device or ehealth-devicemetric)
* device ^type.aggregation = #referenced
* note.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* note.authorString only string


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-message.fsh

Profile: ehealth-message
Id: ehealth-message
Parent: Communication
* obeys nemsms-invariant and note-invariant and notification-invariant and message-invariant and advice-invariant
* extension contains http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare named episodeOfCare 0..1
* extension[episodeOfCare] ^type.aggregation = #referenced
* extension contains ehealth-communication-recipientCareTeam named recipientCareTeam 0..1
* extension contains ehealth-communication-senderCareTeam named senderCareTeam 0..1
* extension contains ehealth-restriction-category named restrictionCategory 0..*
* extension contains ehealth-thread-id named threadId 0..1
* extension contains ehealth-period named period 0..*
* extension contains ehealth-administrative-status named administrativeStatus 1..1
* extension contains ehealth-title named title 0..1
* extension contains ehealth-priority named priority 0..1
* extension contains ehealth-group-id named groupId 0..1
* extension contains ehealth-on-behalf-of named onBehalfOf 0..1 MS
* partOf only Reference(CarePlan)
* partOf ^type.aggregation = #referenced
// Not in R4: * notDoneReason MS

* category.coding.system 0..1
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "coding.system"
* category ^slicing.rules = #open
* category 1..*
* category contains DkTmCategory 1..1
* category[DkTmCategory].coding.system = "http://ehealth.sundhed.dk/cs/message-category"
* category[DkTmCategory].coding.code from http://ehealth.sundhed.dk/vs/message-category (required)

* medium.coding.system 0..1
* medium ^slicing.discriminator.type = #value
* medium ^slicing.discriminator.path = "coding.system"
* medium ^slicing.rules = #open
* medium 0..*
* medium contains DkTmMedium 0..1
* medium[DkTmMedium].coding.system = "http://ehealth.sundhed.dk/cs/message-medium"
* medium[DkTmMedium].coding.code from http://ehealth.sundhed.dk/vs/message-medium (required)

* recipient 0..1
* recipient only Reference(Patient or Practitioner)
* recipient ^type.aggregation = #referenced
* sender only Reference(Device or Patient or Practitioner)
* sender ^type.aggregation[+] = #referenced
* sender ^type.aggregation[+] = #contained
* reasonCode from http://ehealth.sundhed.dk/vs/message-reasonCode
* reasonReference only Reference(Condition or Observation)
* reasonReference ^type.aggregation = #referenced

* payload 0..1
* payload.content[x] ^slicing.rules = #closed
* payload.content[x] ^slicing.discriminator.type = #type
* payload.content[x] ^slicing.discriminator.path = "$this"
* payload.content[x] contains contentString 1..1
* payload.content[x] 1..1
* payload.contentString[contentString] only string

* note.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* note.authorString only string

Extension: ehealth-thread-id
Title:     "Thread id"
Description: "A logical id identifying a set of messages, which are grouped in a thread. Can be supplied by the client, eg. as a UUID"
* . ^short = "Thread id"
* value[x] only string

Extension: ehealth-period
Title:     "Period"
Description: "Specifies the temporal validity of an ehealth/message instance. Contains a period, eg. specifying temporal validity"
* . ^short = "Specifies the temporal validity of an ehealth/message instance"
* value[x] only Period
* valuePeriod 1..1

Extension: ehealth-administrative-status
Title:     "Administrative status"
Description: "The administrative status of how a message recipient has handled a message"
* . ^short = "The administrative status of how a message recipient has handled a message"
* value[x] only Coding
* valueCoding from http://ehealth.sundhed.dk/vs/administrative-status
* valueCoding 1..1

Extension: ehealth-title
Title:     "Title"
Description: "The title of the message"
* . ^short = "Message title"
* value[x] only string

Extension: ehealth-priority
Title:     "Priority"
Description: "The priority of a message"
* . ^short = "The priority of a message"
* value[x] only code
* valueCode from http://ehealth.sundhed.dk/vs/priority

Extension: ehealth-on-behalf-of
Title:     "On behalf of"
Description: "On behalf of"
* . ^short = "On behalf of"
* value[x] only Reference(ehealth-careteam)
* valueReference 1..1
* value[x] ^type.aggregation = #referenced

Invariant:   message-invariant
Description: "Category message invariant"
Expression:  "category.coding.code = 'message' implies (recipient.reference.contains('Patient/') and ( extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam').valueReference.exists())) or (( extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-recipientCareTeam').valueReference.exists()) and (sender.reference.contains('Patient/')) or (extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-recipientCareTeam').valueReference.exists() and extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam').valueReference.exists() ))"
Severity:    #error

Invariant:   note-invariant
Description: "Category note invariant"
Expression:  "category.coding.code = 'note' implies (sender.reference = recipient.reference) or (recipient.reference.exists().not() and extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-recipientCareTeam').valueReference.exists())"
Severity:    #error

Invariant:   nemsms-invariant
Description: "If communication resource is a NemSMS payload cannot exceed 160"
Expression:  "medium.coding.where(code = 'nemsms').exists() implies payload.contentString.length() <= 160"
Severity:    #error

Invariant:   notification-invariant
Description: "Category notification invariant"
Expression:  "category.coding.code = 'notification' implies (recipient.reference.contains('Patient/') or extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-recipientCareTeam').valueReference.exists()) and ( sender.reference.contains('Device/') or contained.ofType(Device).where('#' + id = %resource.sender.reference).empty().not())"
Severity:    #error

Invariant:   advice-invariant
Description: "Category advice invariant"
Expression:  "category.coding.code = 'advice' implies (recipient.reference.contains('Patient/') or extension.where(url = 'http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-recipientCareTeam').valueReference.exists()) and ( sender.reference.contains('Device/') or contained.ofType(Device).where('#' + id = %resource.sender.reference).empty().not())"
Severity:    #error


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-observation.fsh

Profile: ehealth-observation
Id: ehealth-observation
Parent: Observation
* extension contains http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare named episodeOfCare 1..1
* extension[episodeOfCare] ^type.aggregation = #referenced
* extension contains ehealth-quality named quality 0..*
* extension contains ehealth-resolved-timing named resolvedTiming 1..1
* basedOn 1..1
* basedOn only Reference(ehealth-servicerequest)
* basedOn ^type.aggregation = #referenced
* code from http://ehealth.sundhed.dk/vs/observation-codes
* subject 1..1
* subject only Reference(ehealth-patient)
* subject ^type.aggregation = #referenced
* effective[x] 1..1
* performer 1..1
* performer only Reference(ehealth-practitioner or ehealth-organization or ehealth-patient or ehealth-relatedperson)
* performer ^type.aggregation = #referenced
* value[x] only Quantity or CodeableConcept
* device only Reference(ehealth-device)
* device ^type.aggregation = #referenced
* referenceRange.type from http://ehealth.sundhed.dk/vs/reference-range-type
// not in r4: * related.target only Reference(ehealth-observation or ehealth-questionnaireresponse or Sequence)
* component.code from http://ehealth.sundhed.dk/vs/observation-codes
* component.value[x] only Quantity or CodeableConcept
* dataAbsentReason from http://ehealth.sundhed.dk/vs/data-absent-reason (required)

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-organization.fsh

Profile: ehealth-organization
Id: ehealth-organization
Parent: Organization
* extension contains ehealth-organization-cvrNumber named cvrNumber 0..1
* extension contains ehealth-organization-regionCode named regionCode 0..1
* extension contains ehealth-organization-municipalityCode named municipalityCode 0..1
* extension contains ehealth-organization-source named source 1..1
* extension contains ehealth-organization-synchronizationStatus	named synchronizationStatus 1..1
* extension contains ehealth-organization-providerIdentifier named providerIdentifier 0..1
* extension contains ehealth-organization-specialty named specialty 0..*
* extension contains ehealth-organization-relatedTo named relatedTo 0..*
* identifier 1..*
* name 1..1
* telecom.value 1..1
* partOf only Reference(ehealth-organization)
* partOf ^type.aggregation = #referenced
* type from http://ehealth.sundhed.dk/vs/organization-type
* contact.telecom.extension contains ehealth-organization-telecomValue named telecomValue 1..1
* contact.telecom.extension contains ehealth-organization-telecomSystem named telecomSystem 1..1
* contact.telecom.extension contains ehealth-organization-telecomCustodian named telecomCustodian 1..1
* contact.telecom.system 0..0
* contact.telecom.value 0..0


Extension:  ehealth-organization-relatedTo
Title:      "Related to"
Description: "Relations to other Organizations"
* . ^short = "Relations to other Organizations"
* extension contains
    target 1..1 and
    relationType 1..1 and
    period 1..1 
* extension[target].value[x] only Reference(ehealth-organization)
* extension[target].value[x] ^type.aggregation = #referenced
* extension[relationType].value[x] only CodeableConcept
* extension[relationType].valueCodeableConcept from http://ehealth.sundhed.dk/vs/organization-relation-type
* extension[period].value[x] only Period

Extension:   ehealth-organization-cvrNumber
Title:       "CVR Number"
Description: "The organization's identification code in the Danish 'Centrale Virksomhedsregister'"
* . ^short = "The organization's identification code in the Danish 'Centrale Virksomhedsregister'"
* value[x] only string
* valueString 1..1

Extension:   ehealth-organization-telecomValue
Title:       "Telecom Value"
Description: "The actual contact point details (i.e. phone number or email address)"
* . ^short = "The actual contact point details (i.e. phone number or email address)"
* value[x] only string
* valueString 1..1


Extension:   ehealth-organization-regionCode
Title:       "Region code"
Description: "The regionCode of the organization"
* . ^short = "The organization's region code"
* value[x] only string
* valueString 1..1

Extension:   ehealth-organization-municipalityCode
Title:       "Municipality Code"
Description: "The organization's municipality code in the Danish 'Det Centrale Personregister'"
* . ^short = "The organization's municipality code in the Danish 'Det Centrale Personregister'"
* value[x] only string

Extension:   ehealth-organization-providerIdentifier
Title:       "Provider identifier"
Description: "The providerIdentifier of the organization"
* . ^short = "The organization's provider identifier"
* valueString 1..1
* value[x] only string

Extension:   ehealth-organization-source
Title:       "Organization Source"
Description: "The source of the organization"
* . ^short = "The organization's source"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/organization-source

Extension:   ehealth-organization-telecomSystem
Title:       "Telecom System"
Description: "Type of communications system required to make use of the contact point: phone | fax | email | pager | url | sms | ean | other"
* . ^short = "Type of communications system required to make use of the contact point: phone | fax | email | pager | url | sms | ean | other"
* value[x] only CodeableConcept
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/contactpoint-system
* valueCodeableConcept 1..1

Extension:   ehealth-organization-telecomCustodian
Title:       "Telecom Custodian"
Description: "Custodian of this ContactPoint."
* . ^short = "The custodian that maintains the contact point: SOR | ORG | MAN"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/contactpoint-custodian

Extension:   ehealth-organization-synchronizationStatus
Title:       "Organization Synchronization status"
Description: "The synchronization status of the organization"
* . ^short = "The organization's synchronization status"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/organization-synchronization-status

Extension:   ehealth-organization-specialty
Title:       "Organization specialty"
Description: "The specialty of the organization"
* . ^short = "The organization's specialty"
* extension contains
    specialty 1..1 and
    primaryIndicator 0..1
* extension[specialty].value[x] only CodeableConcept
* extension[specialty].valueCodeableConcept from http://ehealth.sundhed.dk/vs/organization-specialty
* extension[specialty].valueCodeableConcept 1..1
* extension[specialty] ^short = "The specialty code"
* extension[specialty] ^definition = "The code defining the specialty of the organization."
* extension[primaryIndicator].value[x] only boolean
* extension[primaryIndicator].valueBoolean 0..1
* extension[primaryIndicator] ^short = "Indicator of primary specialty"
* extension[primaryIndicator] ^definition = "Indicates if the specialty is the primary specialty of the organization."

Instance: 312
InstanceOf: ehealth-organization
Usage: #example
* meta.versionId = "2"
* meta.lastUpdated = "2021-10-14T07:58:31.119+00:00"
* meta.source = "#5d7e2cca-a0ec-9d"
* meta.profile = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization"
* extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-source"
* extension[=].valueCodeableConcept = http://ehealth.sundhed.dk/cs/organization-source#manual
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-synchronizationStatus"
* extension[=].valueCodeableConcept = http://ehealth.sundhed.dk/cs/organization-synchronization-status#NotSynchronized
* identifier.use = #official
* identifier.system = "urn:oid:2.16.840.1.113883.2.24.1.1"
* identifier.value = "11111111"
* identifier.period.start = "2021-10-14T07:58:28+00:00"
* name = "63785662-18ad-4896-b960-505e94bdc5c4"
* contact.name.period.end = "2021-01-01"
* contact.telecom.extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomCustodian"
* contact.telecom.extension[=].valueCodeableConcept = http://ehealth.sundhed.dk/cs/contactpoint-custodian#SOR
* contact.telecom.extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomSystem"
* contact.telecom.extension[=].valueCodeableConcept = http://ehealth.sundhed.dk/cs/contactpoint-system#TBD
* contact.telecom.extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomValue"
* contact.telecom.extension[=].valueString = "5513495a-ed1b-43a9-b890-c2a09762c584"


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-patient.fsh

Profile: ehealth-patient
Id: ehealth-patient
Parent: DkCorePatient
* extension contains ehealth-itcompetencelevel named itCompetenceLevel 0..*
* extension contains patient-interpreterRequired named interpreterRequired 0..1
* extension contains ehealth-general-health-condition named generalHealthCondition 0..*
* extension contains ehealth-nameandaddressprotection named nameAndAddressProtection 0..1

* address 0..*
* address ^slicing.discriminator.type = #value
* address ^slicing.discriminator.path = "use"
* address ^slicing.rules = #open
* address contains officialHomeAddress 0..1
* address[officialHomeAddress].use = #home (exactly)

* telecom ^slicing.discriminator.type = #value
* telecom ^slicing.discriminator.path = "value"
* telecom ^slicing.rules = #open
* telecom contains NemSMS 0..* and eBoks 0..*
* telecom[NemSMS].system = #other
* telecom[NemSMS].value = "NemSMS" (exactly)
* telecom[NemSMS].system 1..1
* telecom[NemSMS].value 1..1
* telecom[NemSMS].use 0..0
* telecom[NemSMS].rank 0..0
* telecom[eBoks].system = #other
* telecom[eBoks].value = "eBoks" (exactly)
* telecom[eBoks].system 1..1
* telecom[eBoks].value 1..1
* telecom[eBoks].use 0..0
* telecom[eBoks].rank 0..0

* identifier[cpr] 1..1

* gender 1..1
* contact.extension contains ehealth-patient-contactnote named patientContactnote 0..*
* contact.address.extension contains http://hl7.dk/fhir/core/StructureDefinition/dk-core-municipalityCodes named municipalityCodes 0..*
* contact.address.extension contains http://hl7.dk/fhir/core/StructureDefinition/dk-core-RegionalSubDivisionCodes named regionalSubDivisionCodes 0..*

* communication.language.coding.system = "urn:ietf:bcp:47" (exactly)
* generalPractitioner only Reference(Organization or Practitioner)
* generalPractitioner ^type.aggregation = #referenced

Extension: ehealth-itcompetencelevel
Title:     "IT competence level"
Description: ""
* . ^short = "IT competence level"
* extension contains
    deviceType 0..* and
    score 0..* and
    description 0..*
* extension[deviceType].value[x] only Coding
* extension[deviceType].valueCoding from http://ehealth.sundhed.dk/vs/device-types
* extension[score].value[x] only CodeableConcept
* extension[score].valueCodeableConcept from http://ehealth.sundhed.dk/vs/itcompetencelevel-codes
* extension[description].value[x] only string

Extension: patient-interpreterRequired
Title:     "Interpreter required"
Description: "This extension describes the IT skills/competence of a patient. The IT competence may optionally be related to a specific device type, and may be assessed using a score (either a FS3 score or a percentage), or as a free text description."
* . ^short = "Whether the patient needs an interpreter"
* value[x] only boolean

Extension: ehealth-general-health-condition
Title:     "General health condition"
Description: "Describes the general health condition of a patient using FSIII concepts (see http://www.fs3.nu/filer/Dokumenter/Metode/FSIII-Guide-til-helbredstilstande.pdf)"
* . ^short = "General health condition"
* extension contains
    type 1..1 and
    description 0..*
* extension[type].value[x] only Coding
* extension[type].valueCoding from fs3-health
* extension[description].value[x] only string


Instance: patient01
InstanceOf: Patient
Usage: #example
* meta.profile = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* identifier.value = "2512489996"
* identifier.use = #official
* name.family = "Berggren"
* name.given[0] = "Nancy"
* name.given[+] = "Ann"
* name.use = #official
* telecom[0].value = "NemSMS"
* telecom[=].system = #other
* telecom[+].value = "eBoks"
* telecom[=].system = #other
* gender = #unknown
* address.extension[0].url = "http://hl7.dk/fhir/core/StructureDefinition/dk-core-municipalityCodes"
* address.extension[=].valueCodeableConcept = http://hl7.dk/fhir/core/CodeSystem/dk-core-municipality-codes#0330
* address.extension[+].url = "http://hl7.dk/fhir/core/StructureDefinition/dk-core-RegionalSubDivisionCodes"
* address.extension[=].valueCodeableConcept = http://hl7.dk/fhir/core/CodeSystem/dk-core-regional-subdivision-codes#DK-85
* address.use = #home
* address.line[0] = "Tårnhøjvej 47"
* address.line[+] = "Landet"
* address.city = "Aalborg Øst"
* address.postalCode = "9220"
* address.country = "Danmark"

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-plandefinition.fsh

Profile: ehealth-plandefinition
Id: ehealth-plandefinition
Parent: PlanDefinition
* extension contains ehealth-recommendation named recommendation 0..1
* extension contains ehealth-intendedAudience named intendedAudience 0..*
* extension contains ehealth-modifier-role named modifierRole 1..*
* extension contains ehealth-employee-title named employeeTitle 0..1
* extension contains ehealth-predecessor named predecessor 0..1
* extension contains ehealth-base named base 0..1
* extension contains ehealth-base-environment named baseEnvironment 0..1

* version 1..1
* jurisdiction from http://ehealth.sundhed.dk/vs/jurisdiction
* topic from http://ehealth.sundhed.dk/vs/topic-type
* library only Canonical(ehealth-library)
* action.extension contains ehealth-overviewUsageMode named overviewUsageMode 0..*
* action.definition[x] only Canonical(ehealth-activitydefinition or ehealth-plandefinition)
* action.extension contains ehealth-actionTrigger named ehealth-actionTrigger 0..1
* action.extension contains ehealth-include-as-extra named includeAsExtra 0..1

Extension: ehealth-actionTrigger
Title:     "Action Trigger"
Description: "Defines a reaction along with its trigger conditions."
* . ^short = "Reaction and trigger conditions"
* extension contains
    ehealth-triggerCondition named triggerCondition 1..* and
    triggerBehavior 1..1 and
    offset 0..1 and
    action 1..1
* extension[triggerBehavior].valueCode from http://ehealth.sundhed.dk/vs/trigger-behavior
* extension[triggerBehavior].valueCode 1..1
* extension[triggerBehavior] ^short = "Controls how multiple triggerCondition must be met"
* extension[triggerBehavior] ^definition = "Controls how multiple triggerCondition must be met - all or one-or-more."
* extension[offset].valueDuration 0..1
* extension[offset].valueDuration only Duration
* extension[offset] ^short = "Offset applied to timing bounds"
* extension[offset] ^definition = "Controls offset applied to timing bounds of the current action when trigger conditions are met and reaction triggered."
* extension[action].valueCoding from http://ehealth.sundhed.dk/vs/action
* extension[action].valueCoding 1..1
* extension[action] ^short = "Reaction to perform on current action"
* extension[action] ^definition = "Reaction to perform on current action when trigger conditions are met"


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-practitioner.fsh

Profile: ehealth-practitioner
Id: ehealth-practitioner
Parent: DkCorePractitioner
* name 1..1
* qualification.issuer only Reference(ehealth-organization)
* qualification.issuer ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-practitionerrole.fsh

Profile: ehealth-practitionerrole
Id: ehealth-practitionerrole
Parent: PractitionerRole
* practitioner only Reference(ehealth-practitioner)
* practitioner ^type.aggregation = #referenced
* organization only Reference(ehealth-organization)
* organization ^type.aggregation = #referenced
* code from http://ehealth.sundhed.dk/vs/careteam-participant-role


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-provenance.fsh

Profile: ehealth-provenance
Id: ehealth-provenance
Parent: Provenance
* entity.extension contains ehealth-provenance-dateTimeOfReusedEntity named dateTimeOfReusedEntity 0..1
* policy 1..*
* policy from http://ehealth.sundhed.dk/vs/ehealth-provenance-policies
* agent.who only Reference(ehealth-practitioner or ehealth-relatedperson or ehealth-patient or ehealth-device or ehealth-organization)
* agent.onBehalfOf only Reference(ehealth-practitioner or ehealth-relatedperson or ehealth-patient or ehealth-device or ehealth-organization)

Extension: ehealth-provenance-dateTimeOfReusedEntity
Title:     "Date/time of re-used entity"
Description: "Contains date and time of Reused Entity"
* . ^short = "Contains date and time of Reused Entity"
* value[x] 1..1
* value[x] only dateTime or Period


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-questionnaire-advanced.fsh

Profile: ehealth-questionnaire-advanced
Id: ehealth-questionnaire-advanced
Parent: ehealth-questionnaire
* extension contains http://hl7.org/fhir/StructureDefinition/variable named variable 0..*

* item.extension contains http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression named calculatedExpression 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-usageMode named usageMode 0..1

* item.answerOption.extension contains http://hl7.org/fhir/StructureDefinition/ordinalValue named ordinalValue 0..1

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-questionnaire.fsh

Profile: ehealth-questionnaire
Id: ehealth-questionnaire
Parent: Questionnaire
* extension contains ehealth-questionnaire-recommendation named recommendation 0..1
* extension contains ehealth-questionnaire-intendedOrganization named intendedOrganization 0..*
* extension contains ehealth-revision named revision 0..1
* extension contains ehealth-modifier-role named modifierRole 1..*
* extension contains ehealth-questionnaire-type named type 1..*
* extension contains http://hl7.org/fhir/StructureDefinition/rendering-styleSensitive named styleSensitive 0..1
* extension contains ehealth-employee-title named employeeTitle 0..1
* extension contains ehealth-usage named usage 0..1
* extension contains ehealth-predecessor named predecessor 0..1
* extension contains ehealth-base named base 0..1
* extension contains ehealth-base-environment named baseEnvironment 0..1

* version 1..1
* jurisdiction from http://ehealth.sundhed.dk/vs/jurisdiction
* item obeys sliderStepValueDecimal-Type and copyright-type
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-minOccurs named questionnaire-minOccurs 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-maxOccurs named questionnaire-maxOccurs 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/minValue named minValue 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/maxValue named maxValue 0..1
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-sliderStepValue named questionnaire-sliderStepValue 0..1
* item.extension contains ehealth-questionnaire-sliderStepValueDecimal named questionnaire-sliderStepValueDecimal 0..1
* item.extension contains ehealth-questionnaire-feedback named feedback 0..1
* item.extension contains ehealth-overviewUsageMode named overviewUsageMode 0..*
* item.extension contains http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl named itemControl 0..1
* item.extension contains ehealth-questionnaire-image named ehealth-question-image 0..1
* item.extension contains ehealth-questionnaire-shortText named shortText 0..1
* item.extension contains ehealth-questionnaire-helpText named helpText 0..1
* item.answerOption.extension contains ehealth-questionnaire-image named ehealth-answeroption-image 0..1
* item.extension contains ehealth-questionnaire-answerSignificance named answerSignificance 0..*
* item.extension contains ehealth-external-identifier named externalIdentifier 0..1
* item.extension contains ehealth-questionnaire-item-is-copyright named isCopyright 0..1
* item.extension[itemControl].valueCodeableConcept from http://ehealth.sundhed.dk/vs/questionnaire-item-control
* item.text.extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named xhtml 0..1
* item.initial.value[x].extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named xhtml 0..1
* item.answerOption.value[x].extension contains http://hl7.org/fhir/StructureDefinition/rendering-xhtml named xhtml 0..1
* item.enableBehavior.extension contains ehealth-enableBehavior-conditionId named conditionId 0..1

Extension: ehealth-questionnaire-sliderStepValueDecimal
Title:     "Slider Step-value Decimal"
Description: "Defines a decimal number step-value for the slider in the questionnaire."
* . ^short = "The slider step-value as decimal-number"
* value[x] only decimal
* valueDecimal 1..1

Extension: ehealth-questionnaire-recommendation
Title:     "Questionnaire recommendation"
Description: "Defines the recommendation state of the questionnaire."
* . ^short = "Degree to which this questionnaire is recommended for use."
* value[x] only CodeableConcept
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/questionnaire-recommendation
* valueCodeableConcept 1..1

Extension: ehealth-questionnaire-intendedOrganization
Title:     "Questionnaire intended organization"
Description: "The questionnaire is intended to be used by these organizations."
* . ^short = "The organization intended to use this questionnaire."
* value[x] only Reference(ehealth-organization)
* valueReference ^type.aggregation = #referenced
* valueReference 1..1

Extension: ehealth-questionnaire-type
Title:     "Questionnaire type"
Description: "Concept that represents the overall questionnaire"
* . ^short = "Concept that represents the overall questionnaire"
* value[x] only CodeableConcept
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/questionnaire-types
* valueCodeableConcept 1..1

Extension: ehealth-questionnaire-feedback
Title:     "Feedback"
Description: "Feedback if reponse is within the defined range."
* . ^short = "Feedback if reponse is within the defined range."
* extension contains
    value 1..1 and
    min 1..1 and
    max 1..1
* extension[value].value[x] only string
* extension[value].valueString 1..1
* extension[min].value[x] only integer
* extension[min].valueInteger 1..1
* extension[max].value[x] only integer
* extension[max].valueInteger 1..1

Extension: ehealth-questionnaire-image
Title:     "Questionnaire image"
Description: "Defines the images in the questionnaire answers and questions."
* . ^short = "The image for a questionnaire"
* extension contains
    content 1..1 and
    terms 0..1
* extension[terms].value[x] only string
* extension[content].valueReference(Binary)
* extension[content].valueReference ^type.aggregation = #contained

Extension: ehealth-answer-Condition
Title:     "Answer condition"
Description: "Defines the Answer condition for an answer option in the questionnaire."
* . ^short = "An Answer condition for an answer"
* extension contains
    value 1..1 and
    operator 1..1
* extension[value].value[x] 1..1
* extension[value].value[x] only decimal or integer or string or Coding or boolean
* extension[operator].valueCode from http://hl7.org/fhir/ValueSet/questionnaire-enable-operator

Extension: ehealth-questionnaire-helpText
Title:     "Help text"
Description: "Help text for questions. xhtml contains an equivalent of the text string, but includes additional XHTML markup, such as bold, italics, styles, tables, etc. Existing restrictions on XHTML content apply. Note that using markdown allows for greater flexibility of display."
* . ^short = "Help text"
* extension contains
    text 1..1 and
    xhtml 0..1
* extension[text].value[x] 1..1
* extension[text].value[x] only string
* extension[xhtml].value[x] 1..1
* extension[xhtml].value[x] only string
* value[x] 0..0

Extension: ehealth-enableBehavior-conditionId
Title:     "Condition Id"
Description: "Id for condition on question."
* . ^short = "Condition Id"
* value[x] only string

Extension:   ehealth-external-identifier
Title:       "ExternalIdentifier"
Description: "External Identifier. Note that this Identifier does not have to unique within the Questionnaire."
* . ^short = "External Identifier"
* value[x] only Identifier

Extension: ehealth-questionnaire-item-is-copyright
Title:     "Copyright item indicator"
Description: "Indicates that the item is part of a copyright structure (CDA Document sharing - QFDD/QRD)"
* . ^short = "Indicates that the item is part of a copyright structure (CDA Document sharing - QFDD/QRD)"
* value[x] only boolean
* valueBoolean 1..1

Invariant:   copyright-type
Description: "If item extension 'ehealth-questionnaire-item-is-copyright' is set to true, item.type must be either 'group' or 'display'."
Expression:  "extension('http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire-item-is-copyright').exists() and extension('http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire-item-is-copyright').value = true implies type = 'group' or type = 'display'"
Severity:    #error

Invariant:   sliderStepValueDecimal-Type
Description: "Item must have type='decimal' when using extension 'ehealth-questionnaire-sliderStepValueDecimal'"
Expression:  "extension('http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaire-sliderStepValueDecimal').exists() implies type = 'decimal'"
Severity:    #error


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-questionnaireresponse.fsh

Profile: ehealth-questionnaireresponse
Id: ehealth-questionnaireresponse
Parent: QuestionnaireResponse
* extension contains http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare named episodeOfCare 1..1
* extension[episodeOfCare] ^type.aggregation = #referenced
* extension contains ehealth-quality named quality 0..*
* extension contains ehealth-resolved-timing named resolvedTiming 1..1
* basedOn 1..1
* basedOn only Reference(ehealth-servicerequest)
* basedOn ^type.aggregation = #referenced
* partOf 0..1
* partOf ^type.aggregation = #referenced
* partOf only Reference(ehealth-observation or Procedure)
* questionnaire 1..1
* questionnaire ^type.aggregation = #referenced
* questionnaire only Canonical(ehealth-questionnaire)
* subject 1..1
* authored 1..1
* author only Reference(ehealth-device or ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* author ^type.aggregation = #referenced
* source 1..1
* source only Reference(ehealth-patient or ehealth-practitioner or ehealth-relatedperson)
* source ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-relatedperson.fsh

Profile: ehealth-relatedperson
Id: ehealth-relatedperson
Parent: RelatedPerson
* extension contains ehealth-patient-contactnote named contactNote 0..1

* identifier 0..*
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier contains ehealth-dk-crn-identifier 0..1
* identifier[ehealth-dk-crn-identifier] only dk-core-cpr-identifier

* patient only Reference(ehealth-patient)
* patient ^type.aggregation = #referenced
* relationship.coding from http://ehealth.sundhed.dk/vs/relatedperson-relationshiptype
* name 1..*

Instance: relatedperson01
InstanceOf: RelatedPerson
Usage: #example
* meta.versionId = "1"
* meta.lastUpdated = "2021-07-15T07:08:53.568+00:00"
* meta.profile = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-relatedperson"
* extension.url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient-contactnote"
* extension.valueString = "This is a contact note"
* patient = Reference(https://patient.fut.trifork.com/fhir/Patient/102)
* name.use = #official
* name.family = "Test"
* name.given = "RelatedPerson"
* address.extension[0].url = "http://hl7.dk/fhir/core/StructureDefinition/dk-core-municipalityCodes"
* address.extension[=].valueCodeableConcept = http://hl7.dk/fhir/core/CodeSystem/dk-core-municipality-codes#0330
* address.extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-regional-subdivision-code"
* address.extension[=].valueCodeableConcept = https://www.iso.org/obp/ui/#iso:code:3166:DK#DK-85
* address.use = #home
* address.line = "Mønsgade 20 5. tv"
* address.city = "Aarhus"
* address.postalCode = "8000"
* address.country = "Danmark"

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-servicerequest.fsh

Profile: ehealth-servicerequest
Id: ehealth-servicerequest
Parent: ServiceRequest
* extension contains http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare named episodeOfCare 1..1
* extension[episodeOfCare] ^type.aggregation = #referenced
* extension contains ehealth-referenceRange named referenceRange 0..*
* extension contains ehealth-sharingPolicy named sharingPolicy 1..1
* extension contains ehealth-sharingApprovalPolicy named sharingApprovalPolicy 0..1
* extension contains ehealth-reuseCriteria named reuseCriteria 0..1
* extension contains ehealth-trigger-enablement-code named triggerEnablementCode 0..1
* extension contains ehealth-servicerequest-statusHistory named statusHistory 0..*
* extension contains ehealth-servicerequest-statusSchedule named statusSchedule 0..*
* extension contains ehealth-include-as-extra named includeAsExtra 1..1

* instantiatesCanonical 1..1
* instantiatesCanonical only Canonical(ehealth-activitydefinition)
* basedOn 0..0
* replaces 0..0
* code from http://ehealth.sundhed.dk/vs/activitydefinition-code
* subject only Reference(ehealth-patient)
* subject ^type.aggregation = #referenced
* performer only Reference(ehealth-practitioner or ehealth-organization or ehealth-patient or ehealth-device or ehealth-relatedperson or ehealth-careteam or HealthcareService)
* performer ^type.aggregation = #referenced
* reasonReference only Reference(ehealth-condition or ehealth-observation)
* reasonReference ^type.aggregation = #referenced
* note.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* note.authorString only string
* relevantHistory only Reference(ehealth-provenance)
* relevantHistory ^type.aggregation = #referenced

Extension: ehealth-trigger-enablement-code
Title:     "triggerEnablementCode"
Description: "Controls whether this ServiceRequest will react to trigger conditions expressed in other activities of the plan."
* . ^short = "Enablement of reaction to triggering conditions being met."
* value[x] only code
* valueCode from http://ehealth.sundhed.dk/vs/trigger-enablement-code
* valueCode 1..1

Extension:   ehealth-servicerequest-statusHistory
Title:       "ServiceRequest status history"
* extension contains
    status 1..1 and
    period 1..1
* extension[status].value[x] only CodeableConcept
* extension[status].valueCodeableConcept 1..1
* extension[period].value[x] only Period
* extension[period].valuePeriod 1..1

Extension:   ehealth-servicerequest-statusSchedule
Title:       "ServiceRequest status schedule"
* extension contains
    status 1..1 and
    scheduledTime 1..1
* extension[status].value[x] only code
* extension[status].valueCode 1..1
* extension[status].value[x] from http://hl7.org/fhir/ValueSet/request-status
* extension[scheduledTime].value[x] only dateTime
* extension[scheduledTime].valueDateTime 1..1


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-skrs-patient.fsh

Profile: ehealth-skrs-patient
Id: ehealth-skrs-patient
Parent: Patient

* extension contains ehealth-nameandaddressprotection named nameAndAddressProtection 0..1

* identifier 1..1 MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier contains ehealth-dk-crn-identifier 1..1
* identifier[ehealth-dk-crn-identifier] only dk-core-cpr-identifier

* deceased[x] 0..1
* deceased[x] ^slicing.discriminator.type = #type
* deceased[x] ^slicing.discriminator.path = "$this"
* deceased[x] ^slicing.rules = #closed
* deceased[x] contains deceasedDateTime 0..1
* deceased[x][deceasedDateTime] only dateTime

* address 0..1
* address ^slicing.discriminator.type = #value
* address ^slicing.discriminator.path = "use"
* address ^slicing.rules = #closed
* address contains officialHomeAddress 0..1
* address[officialHomeAddress].use = #home (exactly)
* address[officialHomeAddress].extension contains http://hl7.dk/fhir/core/StructureDefinition/dk-core-municipalityCodes named municipalityCodes 0..*
* address[officialHomeAddress].extension contains http://hl7.dk/fhir/core/StructureDefinition/dk-core-RegionalSubDivisionCodes named regionalSubDivisionCodes 0..*


Instance: 291
InstanceOf: Patient
Usage: #example
* meta.versionId = "1"
* meta.profile = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-skrs-patient"
* extension.url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-nameandaddressprotection"
* extension.valuePeriod.start = "2021-08-19T15:22:44+02:00"
* extension.valuePeriod.end = "2021-08-23T15:22:44+02:00"
* identifier.use = #official
* identifier.system = "urn:oid:1.2.208.176.1.2"
* identifier.value = "1908560343"
* address.use = #home
* address.city = "Aalborg"

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-task.fsh

Profile: ehealth-task
Id: ehealth-task
Parent: Task
* extension contains ehealth-task-episodeOfCare named episodeOfCare 1..1
* extension[episodeOfCare] ^type.aggregation = #referenced
* extension contains ehealth-task-category named taskCategory 1..1
* extension contains ehealth-task-responsible named taskResponsible 1..*
* extension contains ehealth-restriction-category named restrictionCategory 1..*

// not in R4: * definition[x].definitionReference only Reference(ehealth-activitydefinition)
* groupIdentifier.assigner only Reference(ehealth-organization)
* groupIdentifier.assigner ^type.aggregation = #referenced
* partOf only Reference(ehealth-task)
* partOf ^type.aggregation = #referenced
* intent MS
* priority 1..1 MS
* requester 0..1
* requester only Reference(ehealth-device or ehealth-organization or ehealth-patient or ehealth-practitioner or ehealth-relatedperson)
* requester ^type.aggregation = #referenced
* owner only Reference(ehealth-organization or ehealth-patient or ehealth-practitioner or ehealth-relatedperson)
* owner ^type.aggregation = #referenced
* note.authorReference only Reference(ehealth-practitioner or ehealth-patient or ehealth-relatedperson)
* note.authorString only string
* relevantHistory only Reference(ehealth-provenance)
* relevantHistory ^type.aggregation = #referenced
* restriction.recipient only Reference(ehealth-patient or ehealth-practitioner or ehealth-relatedperson or Group or ehealth-organization)
* restriction.recipient ^type.aggregation = #referenced
* extension contains ehealth-resolved-timing named resolvedTiming 0..1

Extension: ehealth-task-category
Title:     "Task category"
Description: "Category of task."
* . ^short = "Category of task."
* value[x] only CodeableConcept
* valueCodeableConcept from http://ehealth.sundhed.dk/vs/task-category
* valueCodeableConcept 1..1

Extension: ehealth-task-responsible
Title:     "Task responsible"
Description: "Individual organization or Device currently responsible for task execution."
* . ^short = "Responsible entity"
* value[x] ^type.aggregation = #referenced
* value[x] only Reference(ehealth-patient or ehealth-practitioner or ehealth-relatedperson or ehealth-careteam)
* valueReference 1..1

Extension:   ehealth-task-episodeOfCare
Title:       "EpisodeOfCare"
* value[x] only Reference(ehealth-episodeofcare)
* value[x] ^type.aggregation = #referenced


---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-videoappointment.fsh

Profile: ehealth-videoappointment
Id: ehealth-videoappointment
Parent: Appointment
* obeys responsible-1 and single-patient-appointment
* extension contains ehealth-end-meeting-on-end-time named endMeetingOnEndTime 0..1
* extension contains ehealth-max-participants named maxParticipants 0..1
* extension contains ehealth-meeting-url named meetingUrl 0..1
* extension contains ehealth-vmr-uri named vmrUri 0..1
* extension contains ehealth-guest-pin-code named guestPinCode 0..1
* extension contains ehealth-host-pin-code named hostPinCode 0..1
* extension contains ehealth-responsible named responsible 1..1
* extension contains ehealth-group-id named groupId 0..1
* extension contains ehealth-legalBasis named legalBasis 0..1
* extension contains ehealth-releasableResource named releasableResource 0..1
* extension contains ehealth-responsible-organization named responsibleOrganization 0..1
* extension contains ehealth-performer named performer 0..1
* extension contains ehealth-performing-organization named performingOrganization 0..1
* extension[ehealth-legalBasis] obeys governance-1 and responsible-2
* appointmentType 1..1
* appointmentType from http://ehealth.sundhed.dk/vs/appointmenttype-codes
* reasonCode 0..1
* reasonCode from http://ehealth.sundhed.dk/vs/appointment-reason
* supportingInformation only Reference(ehealth-episodeofcare or ehealth-careplan)
* supportingInformation ^type.aggregation = #referenced
* supportingInformation 0..1
* participant.extension contains ehealth-ext-careteam named careteam 0..1
* participant.actor ^type.aggregation = #referenced
* participant.actor only Reference(ehealth-patient or ehealth-practitioner or ehealth-relatedperson or Location)
* participant.actor ^type.aggregation[+] = #referenced
* participant.actor ^type.aggregation[+] = #contained
* start 1..1
* end 1..1
* identifier.system 0..1
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "system"
* identifier ^slicing.rules = #open
* identifier contains vdxMeetingId 0..1
* identifier[vdxMeetingId].system = "http://vdx.medcom.dk/meeting" (exactly)
* serviceType 0..*
* serviceType ^slicing.discriminator.type = #value
* serviceType ^slicing.discriminator.path = "coding.code"
* serviceType ^slicing.rules = #open
* serviceType contains appointmentType 1..1
* serviceType[appointmentType].coding from http://ehealth.sundhed.dk/vs/appointment-servicetype
* serviceType[appointmentType].coding.code = #video (exactly)

Instance: videoappointment01
InstanceOf: Appointment
Usage: #example
* meta.versionId = "3"
* meta.lastUpdated = "2021-07-15T07:06:36.667+00:00"
* meta.profile = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-videoappointment"
* contained = Inline-Instance-for-videoappointment01-1
* extension[0].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-max-participants"
* extension[=].valueInteger = 4
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-meeting-url"
* extension[=].valueUri = "https://portal.vconf.dk/?url=721834@rooms.vconf-stage.dk&pin=37835&start_dato=2021-07-16T09:00:00"
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-vmr-uri"
* extension[=].valueUri = "721834@rooms.vconf-stage.dk"
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-end-meeting-on-end-time"
* extension[=].valueBoolean = false
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible"
* extension[=].valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-host-pin-code"
* extension[=].valueString = "29202"
* extension[+].url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-guest-pin-code"
* extension[=].valueString = "37835"
* identifier.system = "http://vdx.medcom.dk/meeting"
* identifier.value = "894e56b4-53bb-4004-8f06-6a4d7ad115ca"
* status = #booked
* appointmentType = http://ehealth.sundhed.dk/cs/appointmenttype-codes#EMERGENCY
* serviceType = http://ehealth.sundhed.dk/cs/appointment-servicetype#video
* reasonCode = http://ehealth.sundhed.dk/cs/appointment-reason#412776001
* priority = 1
* description = "Forundersøgelse"
* start = "2021-07-16T09:00:00.000+00:00"
* end = "2021-07-16T11:00:00.000+00:00"
* comment = "Forundersøgelse for grå stær hos Trifork.\n Patienten møder op hos Trifork med udfyldt spørgeskema"
* participant[0].extension.url = "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam"
* participant[=].extension.valueReference = Reference(https://organization.fut.trifork.com/fhir/CareTeam/108752)
* participant[=].type = http://terminology.hl7.org/CodeSystem/v3-ParticipationType#PART "Participation"
* participant[=].required = #required
* participant[=].status = #accepted
* participant[+].actor = Reference(https://organization.fut.trifork.com/fhir/Practitioner/107302) "actor1 display text"
* participant[=].required = #required
* participant[=].status = #tentative
* participant[+].actor = Reference(https://patient.fut.trifork.com/fhir/Patient/102)
* participant[=].required = #required
* participant[=].status = #accepted
* participant[+].actor = Reference(1)
* participant[=].required = #required
* participant[=].status = #accepted

Instance: Inline-Instance-for-videoappointment01-1
InstanceOf: Location
Usage: #inline
* id = "1"
* name = "Room 43b"

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/fsh/ehealth-view.fsh

Profile: ehealth-view
Id: ehealth-view
Parent: Basic
* ^status = #active
* extension contains ehealth-recommendation named recommendation 0..1
* extension contains ehealth-intendedAudience named intendedAudience 0..*
* extension contains ehealth-modifier-role named modifierRole 1..*
* extension contains ehealth-basic-title named title 0..1
* extension contains ehealth-version named version 0..1
* extension contains ehealth-description named description 0..1
* extension contains ehealth-purpose named purpose 0..1
* extension contains ehealth-useContext named useContext 0..1
* extension contains ehealth-status named status 1..1
* extension contains ehealth-content named content 1..1
* extension contains ehealth-view-type named type 1..1
* extension contains ehealth-view-for named viewFor 0..*
* code from http://ehealth.sundhed.dk/vs/basic-resource-type (required)


Extension: ehealth-view-type
Title:     "View type"
Description: "Ehealth view type"
* . ^short = "View type"
* value[x] only Coding
* valueCoding from http://ehealth.sundhed.dk/vs/view-type
* valueCoding 1..1


Extension: ehealth-view-for
Title:     "View for"
Description: "The valueset matching the view"
* . ^short = "The valueset matching the view"
* extension contains
    forType 1..1 and
    forReference 1..1
* extension[forReference].valueReference 1..1
* extension[forReference]. ^short = "What resource is this a view for"
* extension[forType].valueCoding from http://ehealth.sundhed.dk/vs/view-for-type
* extension[forType].valueCoding 1..1
* extension[forType]. ^short = "In type is stated what this is a reference to"

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_Binary.md

`DELETE [base]/Binary/32`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYWJhNzNmZTgtMmQ3OS00YmMxLWFjNDAtZTQyODJjNTY2YzE3IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkJpbmFyeS5yZWFkIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully deleted 1 resource(s). Took 65ms.</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "details": {
        "coding": [
          {
            "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
            "code": "SUCCESSFUL_DELETE",
            "display": "Delete succeeded."
          }
        ]
      },
      "diagnostics": "Successfully deleted 1 resource(s). Took 65ms."
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_CareTeam.md

`DELETE [base]/CareTeam/157`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMzJlMWQxZmEtZTdiNC00OTNlLWIyYzctYjMyZDQ2NjkzZjcxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNhcmVUZWFtLndyaXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully deleted 1 resource(s). Took 46ms.</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "details": {
        "coding": [
          {
            "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
            "code": "SUCCESSFUL_DELETE",
            "display": "Delete succeeded."
          }
        ]
      },
      "diagnostics": "Successfully deleted 1 resource(s). Took 46ms."
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_CommunicationRequest.md

`DELETE [base]/CommunicationRequest/2695`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRXBpc29kZU9mQ2FyZS5yZWFkIiwiQ29tbXVuaWNhdGlvblJlcXVlc3QudXBkYXRlIiwiQ29tbXVuaWNhdGlvblJlcXVlc3QucmVhZCIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiQ29tbXVuaWNhdGlvblJlcXVlc3Quc2VhcmNoIiwiQ29tbXVuaWNhdGlvblJlcXVlc3QuY3JlYXRlIiwiQ29tbXVuaWNhdGlvblJlcXVlc3QuZGVsZXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully deleted 1 resource(s). Took 23ms.</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "details": {
        "coding": [
          {
            "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
            "code": "SUCCESSFUL_DELETE",
            "display": "Delete succeeded."
          }
        ]
      },
      "diagnostics": "Successfully deleted 1 resource(s). Took 23ms."
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_Composition.md

`DELETE [base]/Composition/126`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ29tcG9zaXRpb24ucmVhZCIsIkNvbXBvc2l0aW9uLmNyZWF0ZSIsIkNvbXBvc2l0aW9uLnNlYXJjaCIsIkNvbXBvc2l0aW9uLmRlbGV0ZSIsIiR0ZXN0LW9ubHktY3JlYXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully deleted 1 resource(s). Took 86ms.</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "details": {
        "coding": [
          {
            "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
            "code": "SUCCESSFUL_DELETE",
            "display": "Delete succeeded."
          }
        ]
      },
      "diagnostics": "Successfully deleted 1 resource(s). Took 86ms."
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_DeviceMetric.md

`DELETE [base]/DeviceMetric/104`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRGV2aWNlTWV0cmljLnJlYWQiLCJEZXZpY2VNZXRyaWMud3JpdGUiLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.7.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td><pre>Successfully deleted 1 resource(s) in 71ms</pre></td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "diagnostics": "Successfully deleted 1 resource(s) in 71ms"
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_DocumentReference.md

`DELETE [base]/DocumentReference/89`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRG9jdW1lbnRSZWZlcmVuY2UuY3JlYXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJEb2N1bWVudFJlZmVyZW5jZS5kZWxldGUiLCJEb2N1bWVudFJlZmVyZW5jZS5zZWFyY2giLCJEb2N1bWVudFJlZmVyZW5jZS5yZWFkIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully deleted 1 resource(s). Took 51ms.</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "details": {
        "coding": [
          {
            "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
            "code": "SUCCESSFUL_DELETE",
            "display": "Delete succeeded."
          }
        ]
      },
      "diagnostics": "Successfully deleted 1 resource(s). Took 51ms."
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_Message_3.md

`DELETE [base]/Communication/180777`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```

__Body__:
```json

```

__Response__
```json
{
  "resourceType" : "OperationOutcome",
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td><pre>Successfully deleted 1 resource(s) in 121ms</pre></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>"
  },
  "issue" : [ {
    "severity" : "information",
    "code" : "informational",
    "diagnostics" : "Successfully deleted 1 resource(s) in 121ms"
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_PractitionerRole.md

`DELETE [base]/PractitionerRole/236`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUHJhY3RpdGlvbmVyUm9sZS5jcmVhdGUiLCJQcmFjdGl0aW9uZXJSb2xlLnNlYXJjaCIsIlByYWN0aXRpb25lclJvbGUucmVhZCIsIlByYWN0aXRpb25lclJvbGUuZGVsZXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJQcmFjdGl0aW9uZXJSb2xlLnVwZGF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully deleted 1 resource(s). Took 16ms.</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "details": {
        "coding": [
          {
            "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
            "code": "SUCCESSFUL_DELETE",
            "display": "Delete succeeded."
          }
        ]
      },
      "diagnostics": "Successfully deleted 1 resource(s). Took 16ms."
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_Questionnaire.md

`DELETE [base]/Questionnaire/104`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXF1ZXN0aW9ubmFpcmUtMTI3NC5sb2NhbC9maGlyL1ByYWN0aXRpb25lci8yMDg1MSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJRdWVzdGlvbm5haXJlLmRlbGV0ZSJdfSwiY29udGV4dCI6eyJvcmdhbml6YXRpb25faWQiOiJodHRwczovL29yZ2FuaXphdGlvbi5jaXQtcXVlc3Rpb25uYWlyZS0xMjc0LmxvY2FsL2ZoaXIvT3JnYW5pemF0aW9uLzE4ODU5IiwicGF0aWVudF9pZCI6Imh0dHBzOi8vcGF0aWVudC5jaXQtcXVlc3Rpb25uYWlyZS0xMjc0LmxvY2FsL2ZoaXIvUGF0aWVudC80MDUyOSIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully deleted 1 resource(s). Took 63ms.</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "details": {
        "coding": [
          {
            "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
            "code": "SUCCESSFUL_DELETE",
            "display": "Delete succeeded."
          }
        ]
      },
      "diagnostics": "Successfully deleted 1 resource(s). Took 63ms."
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_RelatedPerson_1.md

`DELETE [base]/RelatedPerson/180822`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```

__Body__:
```json

```

__Response__
```json
{
  "resourceType" : "OperationOutcome",
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td><pre>Successfully deleted 1 resource(s) in 30ms</pre></td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>"
  },
  "issue" : [ {
    "severity" : "information",
    "code" : "informational",
    "diagnostics" : "Successfully deleted 1 resource(s) in 30ms"
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/DELETE_StructureDefinition.md

`DELETE [base]/StructureDefinition/218`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUXVlc3Rpb25uYWlyZS5kZWxldGUiLCJRdWVzdGlvbm5haXJlLnNlYXJjaCIsIlF1ZXN0aW9ubmFpcmUucmVhZCIsIlF1ZXN0aW9ubmFpcmUuY3JlYXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJRdWVzdGlvbm5haXJlLnVwZGF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">INFORMATION</td><td>[]</td><td>Successfully deleted 1 resource(s). Took 63ms.</td></tr></table></div>"
  },
  "issue": [
    {
      "severity": "information",
      "code": "informational",
      "details": {
        "coding": [
          {
            "system": "https://hapifhir.io/fhir/CodeSystem/hapi-fhir-storage-response-code",
            "code": "SUCCESSFUL_DELETE",
            "display": "Delete succeeded."
          }
        ]
      },
      "diagnostics": "Successfully deleted 1 resource(s). Took 63ms."
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Actionguidance_search.md

`GET [base]/Basic?_profile=http%3A%2F%2Fehealth.sundhed.dk%2Ffhir%2FStructureDefinition%2Fehealth-actionguidance&_count=1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQWN0aW9uR3VpZGFuY2Uud3JpdGUiLCJBY3Rpb25HdWlkYW5jZS5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.7.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "a59a0661-6a92-44b1-9d62-5c86cf44bf82",
  "meta": {
    "lastUpdated": "2022-06-16T09:17:30.716+00:00"
  },
  "type": "searchset",
  "total": 43,
  "link": [
    {
      "relation": "self",
      "url": "https://questionnaire.cit-questionnaire-1024.local/fhir/Basic?_count=1&_format=json&_pretty=true&_profile=http%3A%2F%2Fehealth.sundhed.dk%2Ffhir%2FStructureDefinition%2Fehealth-actionguidance"
    },
    {
      "relation": "next",
      "url": "https://questionnaire.cit-questionnaire-1024.local/fhir?_getpages=a59a0661-6a92-44b1-9d62-5c86cf44bf82&_getpagesoffset=1&_count=1&_format=json&_pretty=true&_bundletype=searchset"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://questionnaire.cit-questionnaire-1024.local/fhir/Basic/3",
      "resource": {
        "resourceType": "Basic",
        "id": "3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2022-06-16T09:05:04.921+00:00",
          "source": "#105682a9-898e-44",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance"
          ]
        },
        "contained": [
          {
            "resourceType": "Binary",
            "id": "1",
            "meta": {
              "profile": [
                "http://hl7.org/fhir/StructureDefinition/Binary"
              ]
            },
            "contentType": "application/json",
            "data": "eyJIZWxsbyI6IldvcmxkIn0="
          }
        ],
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
            "extension": [
              {
                "url": "reference",
                "valueReference": {
                  "reference": "https://organization.cit-questionnaire-1024.local/fhir/Organization/20885"
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
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-version",
            "valueString": "1.0"
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-status",
            "valueCoding": {
              "system": "http://hl7.org/fhir/publication-status",
              "code": "draft",
              "display": "draft"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-content",
            "valueReference": {
              "reference": "#1"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-type",
            "valueCoding": {
              "system": "http://ehealth.sundhed.dk/cs/action-guidance-types",
              "code": "actionguidance",
              "display": "Action guidance display"
            }
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/basic-resource-type",
              "code": "actionguidance",
              "display": "Action guidance"
            }
          ]
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Actionguidance_version.md

`GET [base]/Basic/201/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQWN0aW9uR3VpZGFuY2Uud3JpdGUiLCJBY3Rpb25HdWlkYW5jZS5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.7.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Basic",
  "id": "201",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2022-06-16T09:17:36.256+00:00",
    "source": "#6d6d0a1b-4932-47",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance"
    ]
  },
  "contained": [
    {
      "resourceType": "Binary",
      "id": "1",
      "meta": {
        "profile": [
          "http://hl7.org/fhir/StructureDefinition/Binary"
        ]
      },
      "contentType": "application/json",
      "data": "eyJIZWxsbyI6IldvcmxkIn0="
    }
  ],
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
      "extension": [
        {
          "url": "reference",
          "valueReference": {
            "reference": "https://organization.cit-questionnaire-1024.local/fhir/Organization/34949"
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-version",
      "valueString": "1.0"
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-status",
      "valueCoding": {
        "system": "http://hl7.org/fhir/publication-status",
        "code": "draft",
        "display": "draft"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-content",
      "valueReference": {
        "reference": "#1"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-for",
      "extension": [
        {
          "url": "forReference",
          "valueReference": {
            "reference": "https://questionnaire.cit-questionnaire-1024.local/fhir/Questionnaire/202"
          }
        },
        {
          "url": "forType",
          "valueCoding": {
            "system": "http://hl7.org/fhir/resource-types",
            "code": "Questionnaire",
            "display": "Questionnaire"
          }
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-type",
      "valueCoding": {
        "system": "http://ehealth.sundhed.dk/cs/action-guidance-types",
        "code": "actionguidance",
        "display": "Action guidance display"
      }
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://ehealth.sundhed.dk/cs/basic-resource-type",
        "code": "actionguidance",
        "display": "Action guidance"
      }
    ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_ActivityDefinition_search.md

`GET [base]/ActivityDefinition?_source=4d72df85-b3cd-4464-9b3b-68980de8bf46`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQWN0aXZpdHlEZWZpbml0aW9uLnVwZGF0ZSIsIkFjdGl2aXR5RGVmaW5pdGlvbi5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJBY3Rpdml0eURlZmluaXRpb24uY3JlYXRlIiwiQWN0aXZpdHlEZWZpbml0aW9uLnNlYXJjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "6f7e9712-ed97-4f3e-bd23-18db802dd2d6",
  "meta": {
    "lastUpdated": "2024-07-31T13:16:19.161+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://plan.cit-plan-1641.local/fhir/ActivityDefinition?_format=json&_pretty=true&_source=4d72df85-b3cd-4464-9b3b-68980de8bf46"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://plan.cit-plan-1641.local/fhir/ActivityDefinition/433",
      "resource": {
        "resourceType": "ActivityDefinition",
        "id": "433",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-31T13:16:18.909+00:00",
          "source": "4d72df85-b3cd-4464-9b3b-68980de8bf46#8b149c7d-8677-40",
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
                  "reference": "https://organization.cit-plan-1641.local/fhir/Organization/8096"
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
        "name": "61eba122-84d3-4828-9942-8769e416208f",
        "status": "active",
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
        "code": {
          "coding": [
            {
              "system": "urn:oid:1.2.208.176.2.1",
              "code": "NPU03011"
            }
          ]
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_ActivityDefinition_version.md

`GET [base]/ActivityDefinition/488/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQWN0aXZpdHlEZWZpbml0aW9uLnVwZGF0ZSIsIkFjdGl2aXR5RGVmaW5pdGlvbi5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXBsYW4tMTY0MS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi83MTcwOCIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBBVElFTlQifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "ActivityDefinition",
  "id": "488",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-31T13:17:04.193+00:00",
    "source": "#4ec5faad-7859-45",
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
            "reference": "https://organization.cit-plan-1641.local/fhir/Organization/71708"
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base",
      "valueIdentifier": {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:eb3a2269-c558-417b-833d-b47cff48cd44",
        "assigner": {
          "identifier": {
            "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
            "value": "cit-plan-1641"
          }
        }
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base-environment",
      "valueIdentifier": {
        "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
        "value": "cit-plan-1641"
      }
    }
  ],
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:uuid:40bbb3a6-8880-4d0b-ae67-cea8b65c5826"
    }
  ],
  "version": "1.0",
  "name": "51e25a47-26aa-4787-82c1-3828e86e1ca0",
  "status": "retired",
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
  "code": {
    "coding": [
      {
        "system": "urn:oid:1.2.208.176.2.1",
        "code": "NPU03011"
      }
    ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_ActivityDefinition.md

`GET [base]/ActivityDefinition/398`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQWN0aXZpdHlEZWZpbml0aW9uLnVwZGF0ZSIsIkFjdGl2aXR5RGVmaW5pdGlvbi5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJBY3Rpdml0eURlZmluaXRpb24uY3JlYXRlIiwiQWN0aXZpdHlEZWZpbml0aW9uLnNlYXJjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "ActivityDefinition",
  "id": "398",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-31T13:16:07.662+00:00",
    "source": "#3346e71a-e1fb-4a",
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-recommendation",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/plandefinition-recommendation",
            "code": "TBD"
          }
        ]
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-intendedAudience",
      "valueReference": {
        "reference": "https://organization.cit-plan-1641.local/fhir/Organization/48224"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-intendedAudience",
      "valueReference": {
        "reference": "https://organization.cit-plan-1641.local/fhir/Organization/71295"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
      "extension": [
        {
          "url": "reference",
          "valueReference": {
            "reference": "https://organization.cit-plan-1641.local/fhir/Organization/34910"
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-referenceRange",
      "extension": [
        {
          "url": "low",
          "valueQuantity": {
            "value": 2.0
          }
        },
        {
          "url": "high",
          "valueQuantity": {
            "value": 4.0
          }
        },
        {
          "url": "type",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/reference-range-type",
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-reuseCriteria",
      "extension": [
        {
          "url": "allowed",
          "valueBoolean": true
        },
        {
          "url": "situationQuality",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/situation-quality",
                "code": "unknown"
              }
            ]
          }
        },
        {
          "url": "usageQuality",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/usage-quality",
                "code": "TBD"
              }
            ]
          }
        },
        {
          "url": "deviceMeasuringQuality",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/device-measuring-quality",
                "code": "TBD"
              }
            ]
          }
        },
        {
          "url": "dataActuality",
          "valueDuration": {
            "value": 851858301,
            "system": "http://unitsofmeasure.org",
            "code": "h"
          }
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base",
      "valueIdentifier": {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:abc2c38d-b947-4276-a263-f76b60e5d98f",
        "assigner": {
          "identifier": {
            "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
            "value": "cit-plan-1641"
          }
        }
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base-environment",
      "valueIdentifier": {
        "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
        "value": "cit-plan-1641"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-employee-title",
      "valueString": "TestFactoryQuestionnaire"
    }
  ],
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:uuid:3a9ff883-2677-4e3d-96fa-9d6937863226"
    }
  ],
  "version": "1.0",
  "name": "43b6e595-32f6-4cc6-a7e5-3fee22907d77",
  "status": "active",
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
  "code": {
    "coding": [
      {
        "system": "urn:oid:1.2.208.176.2.1",
        "code": "NPU03011"
      }
    ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Appointment_5.md

`GET [base]/Appointment/180770`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```

__Body__:
```json

```

__Response__
```json
{
  "resourceType" : "Appointment",
  "id" : "180770",
  "meta" : {
    "versionId" : "3",
    "lastUpdated" : "2021-09-09T07:07:53.842+00:00",
    "source" : "#01c604e9-9fcb-4b",
    "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-appointment" ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Forundersøgelse</div><table class=\"hapiPropertyTable\"><tbody><tr><td>Id</td><td/></tr><tr><td>Appointment Type</td><td><span>FOLLOWUP</span></td></tr><tr><td>Status</td><td><span>Booked</span></td></tr></tbody></table></div>"
  },
  "contained" : [ {
    "resourceType" : "Location",
    "id" : "1",
    "name" : "Room 43b"
  } ],
  "extension" : [ {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible",
    "valueReference" : {
      "reference" : "https://organization.fut.trifork.com/fhir/CareTeam/108752"
    }
  } ],
  "identifier" : [ {
    "system" : "http://ehealth.sundhed.dk/id/ehealth-identifier",
    "value" : "401dc353-668c-4ecc-a95e-533ef0d5d609"
  } ],
  "status" : "booked",
  "serviceType" : [ {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointment-servicetype",
      "code" : "regular"
    } ]
  } ],
  "appointmentType" : {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointmenttype-codes",
      "code" : "EMERGENCY"
    } ]
  },
  "reasonCode" : [ {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointment-reason",
      "code" : "412776001"
    } ]
  } ],
  "priority" : 1,
  "description" : "Forundersøgelse",
  "start" : "2021-09-10T09:00:00.000+00:00",
  "end" : "2021-09-10T11:00:00.000+00:00",
  "comment" : "Forundersøgelse for grå stær hos Trifork.\n Patienten møder op hos Trifork med udfyldt spørgeskema",
  "participant" : [ {
    "extension" : [ {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam",
      "valueReference" : {
        "reference" : "https://organization.fut.trifork.com/fhir/CareTeam/108752"
      }
    } ],
    "type" : [ {
      "coding" : [ {
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        "code" : "PART",
        "display" : "Participation"
      } ]
    } ],
    "required" : "required",
    "status" : "accepted"
  }, {
    "actor" : {
      "reference" : "https://organization.fut.trifork.com/fhir/Practitioner/107302",
      "display" : "actor1 display text"
    },
    "required" : "required",
    "status" : "tentative"
  }, {
    "actor" : {
      "reference" : "https://patient.fut.trifork.com/fhir/Patient/179103"
    },
    "required" : "required",
    "status" : "accepted"
  }, {
    "actor" : {
      "reference" : "#1"
    },
    "required" : "required",
    "status" : "accepted"
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Appointment_Video.md

`GET [base]/Appointment/180772`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```

__Body__:
```json

```

__Response__
```json
{
  "resourceType" : "Appointment",
  "id" : "180772",
  "meta" : {
    "versionId" : "3",
    "lastUpdated" : "2021-09-09T07:08:02.665+00:00",
    "source" : "#de11c8ec-b5d1-46",
    "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-videoappointment" ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Forundersøgelse</div><table class=\"hapiPropertyTable\"><tbody><tr><td>Id</td><td/></tr><tr><td>Appointment Type</td><td><span>FOLLOWUP</span></td></tr><tr><td>Status</td><td><span>Booked</span></td></tr></tbody></table></div>"
  },
  "contained" : [ {
    "resourceType" : "Location",
    "id" : "1",
    "name" : "Room 43b"
  } ],
  "extension" : [ {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-end-meeting-on-end-time",
    "valueBoolean" : false
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-guest-pin-code",
    "valueString" : "43589"
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible",
    "valueReference" : {
      "reference" : "https://organization.fut.trifork.com/fhir/CareTeam/108752"
    }
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-host-pin-code",
    "valueString" : "57211"
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-vmr-uri",
    "valueUri" : "122081@rooms.vconf-stage.dk"
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-max-participants",
    "valueInteger" : 4
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-meeting-url",
    "valueUri" : "https://portal.vconf.dk/?url=122081@rooms.vconf-stage.dk&pin=43589&start_dato=2021-09-10T09:00:00"
  } ],
  "identifier" : [ {
    "system" : "http://ehealth.sundhed.dk/id/ehealth-identifier",
    "value" : "8273ecb4-ccaf-4eda-8244-9cd4b4449ff8"
  }, {
    "system" : "http://vdx.medcom.dk/meeting",
    "value" : "507756f3-0d6f-45d0-a00b-a03cf148aba3"
  } ],
  "status" : "booked",
  "serviceType" : [ {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointment-servicetype",
      "code" : "video"
    } ]
  } ],
  "appointmentType" : {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointmenttype-codes",
      "code" : "EMERGENCY"
    } ]
  },
  "reasonCode" : [ {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointment-reason",
      "code" : "412776001"
    } ]
  } ],
  "priority" : 1,
  "description" : "Forundersøgelse",
  "start" : "2021-09-10T09:00:00.000+00:00",
  "end" : "2021-09-10T11:00:00.000+00:00",
  "comment" : "Forundersøgelse for grå stær hos Trifork.\n Patienten møder op hos Trifork med udfyldt spørgeskema",
  "participant" : [ {
    "extension" : [ {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam",
      "valueReference" : {
        "reference" : "https://organization.fut.trifork.com/fhir/CareTeam/108752"
      }
    } ],
    "type" : [ {
      "coding" : [ {
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        "code" : "PART",
        "display" : "Participation"
      } ]
    } ],
    "required" : "required",
    "status" : "accepted"
  }, {
    "actor" : {
      "reference" : "https://organization.fut.trifork.com/fhir/Practitioner/107302",
      "display" : "actor1 display text"
    },
    "required" : "required",
    "status" : "tentative"
  }, {
    "actor" : {
      "reference" : "https://patient.fut.trifork.com/fhir/Patient/179103"
    },
    "required" : "required",
    "status" : "accepted"
  }, {
    "actor" : {
      "reference" : "#1"
    },
    "required" : "required",
    "status" : "accepted"
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Basic_search.md

`GET [base]/Basic?_profile=http%3A%2F%2Fehealth.sundhed.dk%2Ffhir%2FStructureDefinition%2Fehealth-actionguidance&_count=1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQWN0aW9uR3VpZGFuY2Uud3JpdGUiLCJBY3Rpb25HdWlkYW5jZS5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "9cfc4edc-fca9-4f83-ba14-a8108b5dc64f",
  "meta": {
    "lastUpdated": "2024-07-29T08:28:50.702+00:00"
  },
  "type": "searchset",
  "link": [
    {
      "relation": "self",
      "url": "https://questionnaire.cit-questionnaire-1274.local/fhir/Basic?_count=1&_format=json&_pretty=true&_profile=http%3A%2F%2Fehealth.sundhed.dk%2Ffhir%2FStructureDefinition%2Fehealth-actionguidance"
    },
    {
      "relation": "next",
      "url": "https://questionnaire.cit-questionnaire-1274.local/fhir?_getpages=9cfc4edc-fca9-4f83-ba14-a8108b5dc64f&_getpagesoffset=1&_count=1&_format=json&_pretty=true&_bundletype=searchset"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://questionnaire.cit-questionnaire-1274.local/fhir/Basic/3",
      "resource": {
        "resourceType": "Basic",
        "id": "3",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:17:12.770+00:00",
          "source": "#75c29831-d3dc-44",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance"
          ]
        },
        "contained": [
          {
            "resourceType": "Binary",
            "id": "1",
            "meta": {
              "profile": [
                "http://hl7.org/fhir/StructureDefinition/Binary"
              ]
            },
            "contentType": "application/json",
            "data": "eyJIZWxsbyI6IldvcmxkIn0="
          }
        ],
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
            "extension": [
              {
                "url": "reference",
                "valueReference": {
                  "reference": "https://organization.cit-questionnaire-1274.local/fhir/Organization/32842"
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
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-version",
            "valueString": "1.0"
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-status",
            "valueCoding": {
              "system": "http://hl7.org/fhir/publication-status",
              "code": "draft",
              "display": "draft"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-content",
            "valueReference": {
              "reference": "#1"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-type",
            "valueCoding": {
              "system": "http://ehealth.sundhed.dk/cs/action-guidance-types",
              "code": "actionguidance",
              "display": "Action guidance display"
            }
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/basic-resource-type",
              "code": "actionguidance",
              "display": "Action guidance"
            }
          ]
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Basic_version.md

`GET [base]/Basic/211/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQWN0aW9uR3VpZGFuY2Uud3JpdGUiLCJBY3Rpb25HdWlkYW5jZS5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Basic",
  "id": "211",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:28:54.890+00:00",
    "source": "#2acfe525-ea67-49",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance"
    ]
  },
  "contained": [
    {
      "resourceType": "Binary",
      "id": "1",
      "meta": {
        "profile": [
          "http://hl7.org/fhir/StructureDefinition/Binary"
        ]
      },
      "contentType": "application/json",
      "data": "eyJIZWxsbyI6IldvcmxkIn0="
    }
  ],
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
      "extension": [
        {
          "url": "reference",
          "valueReference": {
            "reference": "https://organization.cit-questionnaire-1274.local/fhir/Organization/6784"
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-version",
      "valueString": "1.0"
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-status",
      "valueCoding": {
        "system": "http://hl7.org/fhir/publication-status",
        "code": "draft",
        "display": "draft"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-content",
      "valueReference": {
        "reference": "#1"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-for",
      "extension": [
        {
          "url": "forReference",
          "valueReference": {
            "reference": "https://questionnaire.cit-questionnaire-1274.local/fhir/Questionnaire/212"
          }
        },
        {
          "url": "forType",
          "valueCoding": {
            "system": "http://hl7.org/fhir/resource-types",
            "code": "Questionnaire",
            "display": "Questionnaire"
          }
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-type",
      "valueCoding": {
        "system": "http://ehealth.sundhed.dk/cs/action-guidance-types",
        "code": "actionguidance",
        "display": "Action guidance display"
      }
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://ehealth.sundhed.dk/cs/basic-resource-type",
        "code": "actionguidance",
        "display": "Action guidance"
      }
    ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Binary_version.md

`GET [base]/Binary/34/_history/1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNDI2ZjRlN2ItNjc0OS00NzA4LWEyOGQtMDMyMmMwZTliZDk5IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiR0ZXN0LW9ubHktY3JlYXRlIiwiQmluYXJ5LnJlYWQiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Binary",
  "id": "34",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:10:23.858+00:00",
    "source": "#04c842ea-5704-44",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "text/plain",
  "securityContext": {
    "identifier": {
      "value": "426f4e7b-6749-4708-a28d-0322c0e9bd99"
    }
  },
  "data": "eyJIZWxsbyI6IldvcmxkIn0="
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Binary.md

`GET [base]/Binary/24`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOWZjZDkzNzYtMmZiZC00ZTU0LWE2MWYtNTVmNzEzYjFkMTIwIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIiR0ZXN0LW9ubHktY3JlYXRlIiwiQmluYXJ5LnJlYWQiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Binary",
  "id": "24",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T09:09:50.124+00:00",
    "profile": [
      "http://hl7.org/fhir/StructureDefinition/Binary"
    ]
  },
  "contentType": "application/gzip-json",
  "securityContext": {
    "identifier": {
      "value": "9fcd9376-2fbd-4e54-a61f-55f713b1d120"
    }
  },
  "data": "UEsDBBQACAgIADlJ/VgAAAAAAAAAAAAAAAAzAAAAUGF0aWVudFRvdGFsUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDlfNTAvUmVwb3J0SGVhZGVyXZDNTsMwEIRfpfK5+VXSNr4hygEQLSq5UMTBJNvUamJH9qZSqPLubBoaBSQf1p5vZla+MAO1NrgRFTDOXgVKUJhqFOXuKrD5L5HKKxH6YeT4SydMUj/hdGLf9ReLVRCRsCe6FoayEIxl/EJeqxuTQdrWQ/4oTkjGPy5MDRtoUwglv2kPrYg5i7KBHRzAgMpgSBwv7IhYW+55U5ObSXSGlaUqnCAIE7fUmSi9w1EabztBvThexQnruvlYn2mVy1671znc+mmmqL7cthahIq4ximuZ88AN3dBfucFyQVNEjqw3crZ+ivpbLm1dipYeno1W0p5m+suiaU4oz7OyUQXYtsh19WcJiwIbe2t/Q3NtZyIjE7AJKJRWbfXvt0b+brPdvL887h/WrPvsuh9QSwcIZEVCUSsBAADrAQAAUEsDBBQACAgIADlJ/VgAAAAAAAAAAAAAAABcAAAAUGF0aWVudFRvdGFsUmVwb3J0XzIwMjRfMDdfMjlfMDlfMDlfNTAvRUhlYWx0aEVwaXNvZGVPZkNhcmUvQjI2NTgyMzBFRTcxQjg5NEI2NkEyQjU4MjMwOTI3RDntWltz28YV/isZvtaU9n7R214naSe1Eyt96fgBJpcSapJQANCp6vF/71kApEiJlOyQzLQZa2RZApZ77t+57H4ahe9TMW9vw13ZVNP0euaKOo2uPo3q1FSrepKu7+/g79Hu+1ejcgoPLRFcEYpCkNgqzawQhtjukSbSa1i3SG2Rt/uY6qaslj/kj2F4Pi+a9pe7adGm/IQgwsZIjom+RvoKvhm/wJT+BaErhGD1XV3Nyjnw8c/RbdveXV1eptuO7YtmtZzepunF9MPl7LasL9+29WrSrurk06xcli3QvBSaU0JixIqwgIlklKEAvyHmPfGaAYHfseuwdpx6zVSzSdbMu8+vRunfbVpmaYHfT6NVPQcJT0VgnH8simVxk+rX9U2xLP9T5NUgw8divko/p1mq03Iy2HDzR8dAAxxUWx+6mJTtuE53Vd2Wy5sxxkRfzKtJMe+Z2t7/UgtjBBYIGesU0gx7QQ0TNjilOSJ29Pnzu1ejpi3aVQPkiklbfsyO0j/5vmzaqr7vFPJ0zV2qy2qaOYZ3dbvfIQZn6MhMy+JmWTVl0204qZbTTmWHZM46u5sXL8nr1vtccqRkIEbr4IiSSHDvtcGEYRI9lt6MwMp1sfwwusKZnTtQUVq2h8gPr1+g/qZfdYmRt5gQoWiUQJNGzZT2HhxWBKFCyLQ7B4BNdjzgDzf4PsNhLdEYYfi+7ux1hfAmitNy+nQFvmJoY9pXazjKKPMGLNbZ9xEUbd4NKBQAc6Ri1jAbA+aMxuii1cQxrRnH5CgUIpqdCIVoYFZ7Q1BEVikmkZfCSKaCYFgrgo9DobWLvwRAt3N5AR5xeMPfqvrDbF79toadDeJ/Gbx8YajtpJPLF/MIeMYJgHTN23gXk/bra0CpQW4HzBbv5/A/iHvXRfqkmoJkPaLdN21aHFBynX5dpaYdbzaED2aNTeti1o4+v9uSbQingeabr0PFDETlEpYu2xIcunHFslqWoPG1v3ZQ9LJpcmhtKY+xQBEPnBnuNDcaYUMEJsYFo7RRYrSN+r1MmY+2w8NRdTckpwmwdLPOAM+obo9dJ83Gq8abbTZqvLZ+1AvfrN7/K01OhMKUQwYIhGorAsbBUu+VkV5iaaOVzp0B/V6NiukUsK5JzQB7p8hkUPJQJ7SXjmsZqIfqhyLLJKeWQ1k06G4Nu/Oyc5kfFneZkXVEPAbgp6sGKDY2ChSwxVaQiJhkxCMTg9VMOwpfz0DxceBqgyAyOosFlwTSJxKOcqYJDgI7hfWR4DoIXD4I/CeF2e1gLpdjMMpNlngTbr8ndp8ob5z3ap6E8IkjOGhJIvGWUCaEpdoEJZUghFoZSQiDtGvHfygh9/j75uW64lACRUdVYNRw7AwWzBiFlSXwJBh8NjenRkrNoo3EWhmQdlY5cPMoKDLBOHKkm2/k/PN699ob3w5e/qxDt6lelMtqXt3cX6xlzpXA227d5UZfG4B48Omht+nc+rnQWdXLq6qcXuELckGQusBSwG/sYSP/V8ZGuUT4yo/kJqkBJULGHf2thkqg+fBd9b4BY30Azr6br5Y3qbm/mVaLM8Se0kjIyAMRSAspnSFORo0jc9BUUaMex17TVQt7I697NcSdJNB/cMhihEcUCYIQj5ILD8naS4XZ2eKOQDpjlhmPqLSWQZMhKLHIUAcFvHfh6LjrpOzM8LSBnlR3LyHvy46aCfQ7bdykrVPRLnr1PvjK9eZp77vH1W094WfLtpM2z8Z6h7V3WlEBX8QGrAEpAaKlDijT7Mq2WVUvUn2wyvo6mt5TGaLDgSgbOccxKmyjZFFwjXzEo07Kal5O7n9ezU9jyn67R3l0UpeT3mrg7R/LZhgKnL5MnUDf1DHfRSUpJE54IsbFlE3HTCE9VkjRMUcAA3IitC4msHFdHSs7ZKS6GDdpsqrL9n6cNxy399suXaza2ybVEPy9HuqXMs3XWRp56xnBLmCoIqCZ58EL5BC0Zdg56/AwnCoyBIF4i1QsO1GB9LybMXwBR2fLfduQ69PHMlN9irjDmwFw4bNUcG6gsOaA20F5G6iUyENJRfCzo5XjANdHroT0hAHQS8+jMdozaaghUkQU4nGAO+2FPMOstt8Z6ubyIxh8fv/6t2XaNPS2Ao/NMy3YIO2blj6x0I+pzTF90E7D+8Fa0KYTJbyWmEGm5VpgjCxVLEhJQ+yi+zzWik5HDw0YghwM/6AZo9QiATQdN0aIU1hr0Yt6Npv1+49/XUGnAtHeHBgLbWWy3zEY2p8l9zBw3wHbFrZ3TEOBuTMv6jhYc/LDEjjLSY1n6Du1XkCMu4xhP/3/6wejbwp6XkHkm4KeVxAbxq1TqArKWTmUkv1iwGZGGJSCUBdaTag2jBIdI1MYYJhY4Tuc7wqXr2oK8QOvf3/zC6II46F16xLDoYKil/2FcqJPJ5cv5vudjgB+nU9W8/706Unu+qVJuclOiwO93Z5V6zZPCOc51PA+4Ki4k8FyJIWS8Cyf254tjynigVYQGHpXjKRUXkjHnQV7QrmHjjwo7g2xalKzEfhs2WybSu4vW6By6vHL+hzuklKDoMYgknqKopfMo+Cg7Y8UQwgwfvBo+KQDe+U4h0aPYMlNAD82yBDo0AOXDOyJs+sOdd8fEihb8fBjmpbFvhDoX6xrbQTOLgWLShDhoiJWO8ExVFbQtzLjzle9+SAtE14oSr021BMdsIW/oM+JOrrjvH7RyfgnHSieIkkO6ehANhzeXvdt7skS4oEcOExlHuQa1mWSpyS/aoqbtCX5I/KnqT5ysM0/pum4LReZvQPnvKnOEf1zf0r7j01krXN+jjFGRg8ctSc2xSM2H000zPS2mgxKAUR5XzRp+np5cHL1hY7+dkfoS28Bqq1XJkakBHMkWki3kXLoKCENotEOfk8qKORSP854ror5sqFOhw9PxjjTsjrDWBprrJBB1HhrOA4Aq0hQQqBLtcjaPkdM8vwzTT38uC4X6dlT98zwcNL9aQRav1mBW8Mn0nIH/1+/z05WHDpe2n495IIYWNQ880UEMR574R18RxplN38636CbaS4s4Tn3eBKstk4zrIzgVgXtj7ykUm1J+i0jfAOuo4ErRBQtFhAfkSsJRuCMI0tcFDEoYx4BFyh664juNK3XKeGJyOCt4lBLU6qhruQOYcSZdNEZafsbd2k2S139/CW3g8Sjqf7hFWc4FnlZmnenrMijCVYAqisro4eSlntNERXSIwekxXA/9c32YdMOCq/fDAj84i3Ms91kcSoKxYO20gA9KlDQKEZhIHkJjWgHnDdgz2yo0SwtinmOuj/iRqj1GhpiCYUBdAYYumLsIxUKaa9AK1hvX+DcDdR9ae/RikHvNBhOsNGBI6OsgN5K0CBjcIFAOUKPuVIuLmDnU13mpNgEmm8EY+e9lY7mWiL3vAQsF488nxigfbg5+C1VPqOp26IGZt50x6GnTG6LVDRAspufDETG3aFrud0vLau3/bvdrulkpv/fuKn6UPAfeVtVnP62qsnJEJrILVUGyoSLMp+CcRIiBKZUJBgljOGBYDs61Mxsbq0CMMxTPa7qDLJHXH0rBuamG+a6q2+PG15oo/J4DlCMvacKehSQUusxe8+nYzWTcjyDAJqkRAg0K6NTVx0mqoCjEUEDegWFnBU0WpGTH+Aa5zutzE/ZQUCOZVHWgBzNXb6OsA/d9y9cj7owzSipg6cxYCgJoP1iwlCVB68mnu+aKNhfcucVN0w5x3jMF3yxVwDioAOujoPtX7dlrtcyf0Pvb43O0Y0OxCLPQ2DsmTJQDFqELJgGrKFj4LIvpnf8b4vkzvMX6O7E7WVU1keOtVXUByjeIUygxUJRUkGYivn+x14kPSlAaaaldpIJkkfhLgNGIMQwQw2lnnd3uvLFn6o+VPhtir7nT8q+EjdNxFQEJLyB6s8FS8A+xjAoCzn8Trss919QSwcIoW8tXYILAABgOQAAUEsBAhQAFAAICAgAOUn9WGRFQlErAQAA6wEAADMAAAAAAAAAAAAAAAAAAAAAAFBhdGllbnRUb3RhbFJlcG9ydF8yMDI0XzA3XzI5XzA5XzA5XzUwL1JlcG9ydEhlYWRlclBLAQIUABQACAgIADlJ/Vihby1dggsAAGA5AABcAAAAAAAAAAAAAAAAAIwBAABQYXRpZW50VG90YWxSZXBvcnRfMjAyNF8wN18yOV8wOV8wOV81MC9FSGVhbHRoRXBpc29kZU9mQ2FyZS9CMjY1ODIzMEVFNzFCODk0QjY2QTJCNTgyMzA5MjdEOVBLBQYAAAAAAgACAOsAAACYDQAAAAA="
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_CarePlan_search.md

`GET [base]/CarePlan?instantiates-canonical=https%3A%2F%2Fplan.cit-careplan-2980.local%2Ffhir%2FPlanDefinition%2F76897%2Chttps%3A%2F%2Fplan.cit-careplan-2980.local%2Ffhir%2FPlanDefinition%2F84473&episodeOfCare.organization=https%3A%2F%2Forganization.cit-careplan-2980.local%2Ffhir%2FOrganization%2F48238&condition.code=urn%3Aoid%3A1.2.208.176.2.4%7CDJ44&_include=CarePlan%3AepisodeOfCare&_include=CarePlan%3Aactivity-reference&_include=CarePlan%3Acondition`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ2FyZVBsYW4kc3VnZ2VzdC1jYXJlLXRlYW1zIiwiQ2FyZVBsYW4kdXBkYXRlLWNhcmUtdGVhbXMiLCJDYXJlUGxhbi5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJDYXJlUGxhbi5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "d480570f-545f-4b39-9a05-44ee2e959885",
  "meta": {
    "lastUpdated": "2024-10-26T17:09:47.819+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://careplan.cit-careplan-2980.local/fhir/CarePlan?_format=json&_include=CarePlan%3AepisodeOfCare&_include=CarePlan%3Aactivity-reference&_include=CarePlan%3Acondition&_pretty=true&condition.code=urn%3Aoid%3A1.2.208.176.2.4%7CDJ44&episodeOfCare.organization=https%3A%2F%2Forganization.cit-careplan-2980.local%2Ffhir%2FOrganization%2F48238&instantiates-canonical=https%3A%2F%2Fplan.cit-careplan-2980.local%2Ffhir%2FPlanDefinition%2F76897%2Chttps%3A%2F%2Fplan.cit-careplan-2980.local%2Ffhir%2FPlanDefinition%2F84473"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://careplan.cit-careplan-2980.local/fhir/CarePlan/2332",
      "resource": {
        "resourceType": "CarePlan",
        "id": "2332",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-10-26T17:09:47.583+00:00",
          "source": "#6fdbfa35-1263-47",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-careplan-2980.local/fhir/EpisodeOfCare/2326"
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
                  "start": "2024-10-26T17:09:47+00:00"
                }
              }
            ]
          }
        ],
        "instantiatesCanonical": [
          "https://plan.cit-careplan-2980.local/fhir/PlanDefinition/76897",
          "https://plan.cit-careplan-2980.local/fhir/PlanDefinition/84473"
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
          "reference": "https://patient.cit-careplan-2980.local/fhir/Patient/9025"
        },
        "period": {
          "start": "1970-01-01T00:00:01+00:00",
          "end": "1970-01-01T00:01:40+00:00"
        },
        "addresses": [
          {
            "reference": "https://careplan.cit-careplan-2980.local/fhir/Condition/2327"
          }
        ],
        "activity": [
          {
            "reference": {
              "reference": "https://careplan.cit-careplan-2980.local/fhir/ServiceRequest/2331"
            }
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://careplan.cit-careplan-2980.local/fhir/EpisodeOfCare/2326",
      "resource": {
        "resourceType": "EpisodeOfCare",
        "id": "2326",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-10-26T17:09:45.913+00:00",
          "source": "#67457686-a1a3-47",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare-caremanagerOrganization",
            "valueReference": {
              "reference": "https://organization.cit-careplan-2980.local/fhir/Organization/48238"
            }
          }
        ],
        "status": "active",
        "statusHistory": [
          {
            "status": "active",
            "period": {
              "start": "2024-10-26T17:09:45+00:00"
            }
          }
        ],
        "diagnosis": [
          {
            "condition": {
              "reference": "https://careplan.cit-careplan-2980.local/fhir/Condition/2325"
            },
            "rank": 1
          }
        ],
        "patient": {
          "reference": "https://patient.cit-careplan-2980.local/fhir/Patient/61033"
        },
        "managingOrganization": {
          "reference": "https://organization.cit-careplan-2980.local/fhir/Organization/48238"
        },
        "period": {
          "start": "1970-01-01T00:00:01+00:00",
          "end": "1970-01-01T00:01:40+00:00"
        }
      },
      "search": {
        "mode": "include"
      }
    },
    {
      "fullUrl": "https://careplan.cit-careplan-2980.local/fhir/Condition/2327",
      "resource": {
        "resourceType": "Condition",
        "id": "2327",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-10-26T17:09:46.026+00:00",
          "source": "#9776915a-7f18-93",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-condition"
          ]
        },
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
          "reference": "https://patient.cit-careplan-2980.local/fhir/Patient/87864"
        }
      },
      "search": {
        "mode": "include"
      }
    },
    {
      "fullUrl": "https://careplan.cit-careplan-2980.local/fhir/ServiceRequest/2331",
      "resource": {
        "resourceType": "ServiceRequest",
        "id": "2331",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-10-26T17:09:47.467+00:00",
          "source": "#a3e74bc8-ff60-4a",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-careplan-2980.local/fhir/EpisodeOfCare/2330"
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
                      "code": "completed"
                    }
                  ]
                }
              },
              {
                "url": "period",
                "valuePeriod": {
                  "start": "2024-10-26T17:09:46+00:00"
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
          "https://plan.cit-careplan-2980.local/fhir/ActivityDefinition/98465"
        ],
        "status": "completed",
        "intent": "filler-order",
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/activitydefinition-code",
              "code": "TBD"
            }
          ],
          "text": "723479d9-266e-42c9-915b-8712be542101"
        },
        "subject": {
          "reference": "https://patient.cit-careplan-2980.local/fhir/Patient/88125"
        },
        "occurrencePeriod": {
          "start": "2024-10-21T17:09:46+00:00"
        }
      },
      "search": {
        "mode": "include"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_CarePlan_version.md

`GET [base]/CarePlan/2456/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ2FyZVBsYW4kc3VnZ2VzdC1jYXJlLXRlYW1zIiwiQ2FyZVBsYW4kdXBkYXRlLWNhcmUtdGVhbXMiLCJDYXJlUGxhbi5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJDYXJlUGxhbi5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "CarePlan",
  "id": "2456",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:20:07.877+00:00",
    "source": "#52a5c6ba-1411-43",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/2454"
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
            "start": "2024-07-29T13:20:06+00:00"
          }
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-teamHistory",
      "extension": [
        {
          "url": "careTeam",
          "valueReference": {
            "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/48563"
          }
        },
        {
          "url": "period",
          "valuePeriod": {
            "start": "2024-07-28T13:20:06+00:00",
            "end": "2024-07-29T13:20:07+00:00"
          }
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-teamHistory",
      "extension": [
        {
          "url": "careTeam",
          "valueReference": {
            "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/758"
          }
        },
        {
          "url": "period",
          "valuePeriod": {
            "start": "2024-07-29T13:20:07+00:00"
          }
        }
      ]
    }
  ],
  "instantiatesCanonical": [
    "https://plan.cit-careplan-2818.local/fhir/PlanDefinition/4635"
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
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/3769"
  },
  "period": {
    "start": "1970-01-01T00:00:01+00:00",
    "end": "1970-01-01T00:01:40+00:00"
  },
  "careTeam": [
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/758"
    }
  ],
  "addresses": [
    {
      "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/2455"
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_CarePlan.md

`GET [base]/CarePlan/2236`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ2FyZVBsYW4kc3VnZ2VzdC1jYXJlLXRlYW1zIiwiQ2FyZVBsYW4kdXBkYXRlLWNhcmUtdGVhbXMiLCJDYXJlUGxhbi5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJDYXJlUGxhbi5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "CarePlan",
  "id": "2236",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:18:16.443+00:00",
    "source": "#119b774a-c27b-44",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careplan"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/2234"
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
            "start": "2024-07-29T13:18:13+00:00"
          }
        }
      ]
    }
  ],
  "instantiatesCanonical": [
    "https://plan.cit-careplan-2818.local/fhir/PlanDefinition/12368"
  ],
  "partOf": [
    {
      "reference": "https://careplan.cit-careplan-2818.local/fhir/CarePlan/2232"
    }
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
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/15035"
  },
  "period": {
    "start": "1970-01-01T00:00:01+00:00",
    "end": "1970-01-01T00:01:40+00:00"
  },
  "careTeam": [
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/16408"
    },
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/26356"
    },
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/24907"
    }
  ],
  "addresses": [
    {
      "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/2235"
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_CareTeam_search.md

`GET [base]/CareTeam?status=active&date=ge2024-07-29T09%3A16%3A33%2B00%3A00&date=le2024-07-29T09%3A16%3A33%2B00%3A00&managingOrganization=https%3A%2F%2Forganization.cit-organization-1209.local%2Ffhir%2FOrganization%2F252%2F_history%2F1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOWYwZmJiZDQtM2M1YS00N2YyLWE2ZTItN2IzN2NiY2Q3ZjRlIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNhcmVUZWFtLnNlYXJjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "46d1850d-a8af-4f0e-bb7d-2f82fcae4f13",
  "meta": {
    "lastUpdated": "2024-07-29T09:16:34.427+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://organization.cit-organization-1209.local/fhir/CareTeam?_format=json&_pretty=true&date=ge2024-07-29T09%3A16%3A33%2B00%3A00&date=le2024-07-29T09%3A16%3A33%2B00%3A00&managingOrganization=https%3A%2F%2Forganization.cit-organization-1209.local%2Ffhir%2FOrganization%2F252%2F_history%2F1&status=active"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://organization.cit-organization-1209.local/fhir/CareTeam/253",
      "resource": {
        "resourceType": "CareTeam",
        "id": "253",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T09:16:33.556+00:00",
          "source": "#4bff85c0-d394-4b",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careteam"
          ]
        },
        "identifier": [
          {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:uuid:4f77c84d-7ac8-4c87-9b11-99faad5f19d3"
          }
        ],
        "status": "active",
        "name": "caaac567-89db-4460-ad9f-22e592ac6830",
        "period": {
          "end": "2024-07-29T09:16:33+00:00"
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
        ],
        "managingOrganization": [
          {
            "reference": "https://organization.cit-organization-1209.local/fhir/Organization/252"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://organization.cit-organization-1209.local/fhir/CareTeam/254",
      "resource": {
        "resourceType": "CareTeam",
        "id": "254",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T09:16:33.699+00:00",
          "source": "#41233507-e0d3-47",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careteam"
          ]
        },
        "identifier": [
          {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:uuid:5f4cd69c-e2d0-4574-86a0-039be8f3b66b"
          }
        ],
        "status": "active",
        "name": "94a7203d-f08d-492c-9f87-4bb9136bcbc2",
        "period": {
          "end": "2024-07-29T09:16:33+00:00"
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
        ],
        "managingOrganization": [
          {
            "reference": "https://organization.cit-organization-1209.local/fhir/Organization/252"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_CareTeam_version.md

`GET [base]/CareTeam/202/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYTI2ZmY2MzMtZTFlNC00MmE5LWIyODUtZTM5MWM1NWU4MDgyIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNhcmVUZWFtLnJlYWQiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "CareTeam",
  "id": "202",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T09:16:04.893+00:00",
    "source": "#dd4b5987-c5b0-45",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careteam"
    ]
  },
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:uuid:30e0b89b-ef97-483d-a35a-a7d66a243ed5"
    }
  ],
  "status": "active",
  "name": "7a467575-2db6-451d-8563-59bc46da019b",
  "period": {
    "start": "2024-07-29T09:16:04+00:00"
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
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_CareTeam.md

`GET [base]/CareTeam/434`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNjQzZDU1MDEtODFkNi00ZTk3LTkxZTAtZmVlOTRjM2YxMmZlIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNhcmVUZWFtLnJlYWQiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "CareTeam",
  "id": "434",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:19:03.979+00:00",
    "source": "#fc658693-d1f0-48",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-careteam"
    ]
  },
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:uuid:6ee011e0-98bc-4235-9ee6-abf28df04af0"
    }
  ],
  "status": "active",
  "name": "e74eac48-68fb-4eb8-9f01-18050df01be5",
  "period": {
    "start": "2024-07-29T09:19:03+00:00"
  },
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
        "reference": "https://patient.cit-organization-1209.local/fhir/Patient/17835"
      }
    },
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
        "reference": "https://organization.cit-organization-1209.local/fhir/CareTeam/431"
      }
    },
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
        "reference": "https://organization.cit-organization-1209.local/fhir/Practitioner/433"
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
  ],
  "managingOrganization": [
    {
      "reference": "https://organization.cit-organization-1209.local/fhir/Organization/432"
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_ClinicalImpression_search.md

`GET [base]/ClinicalImpression?_id=https%3A%2F%2Ftask.cit-task-1940.local%2Ffhir%2FClinicalImpression%2F314%2F_history%2F1%2Chttps%3A%2F%2Ftask.cit-task-1940.local%2Ffhir%2FClinicalImpression%2F317%2F_history%2F1&_revinclude%3Aiterate=ClinicalImpression%3Aprevious`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJDbGluaWNhbEltcHJlc3Npb24uc2VhcmNoIiwiQ2xpbmljYWxJbXByZXNzaW9uLnBhdGNoIiwiQ2xpbmljYWxJbXByZXNzaW9uLnJlYWQiLCJDbGluaWNhbEltcHJlc3Npb24uY3JlYXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "4c8954a6-c04c-4d4e-81a1-4b473a91282b",
  "meta": {
    "lastUpdated": "2024-07-29T08:56:39.986+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://task.cit-task-1940.local/fhir/ClinicalImpression?_format=json&_id=https%3A%2F%2Ftask.cit-task-1940.local%2Ffhir%2FClinicalImpression%2F314%2F_history%2F1%2Chttps%3A%2F%2Ftask.cit-task-1940.local%2Ffhir%2FClinicalImpression%2F317%2F_history%2F1&_pretty=true&_revinclude%3Aiterate=ClinicalImpression%3Aprevious"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://task.cit-task-1940.local/fhir/ClinicalImpression/314",
      "resource": {
        "resourceType": "ClinicalImpression",
        "id": "314",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:56:38.769+00:00",
          "source": "#15d5ad9f-1e18-4f",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/5005"
            }
          }
        ],
        "status": "in-progress",
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-codes",
              "code": "TBD"
            }
          ]
        },
        "subject": {
          "reference": "https://patient.cit-task-1940.local/fhir/Patient/40210"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://task.cit-task-1940.local/fhir/ClinicalImpression/317",
      "resource": {
        "resourceType": "ClinicalImpression",
        "id": "317",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:56:39.258+00:00",
          "source": "#195b801b-8cab-49",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/65998"
            }
          }
        ],
        "status": "in-progress",
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-codes",
              "code": "TBD"
            }
          ]
        },
        "subject": {
          "reference": "https://patient.cit-task-1940.local/fhir/Patient/2813"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://task.cit-task-1940.local/fhir/ClinicalImpression/318",
      "resource": {
        "resourceType": "ClinicalImpression",
        "id": "318",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:56:39.422+00:00",
          "source": "#978721c9-e0d1-47",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/69566"
            }
          }
        ],
        "status": "in-progress",
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-codes",
              "code": "TBD"
            }
          ]
        },
        "subject": {
          "reference": "https://patient.cit-task-1940.local/fhir/Patient/23061"
        },
        "previous": {
          "reference": "https://task.cit-task-1940.local/fhir/ClinicalImpression/317"
        }
      },
      "search": {
        "mode": "include"
      }
    },
    {
      "fullUrl": "https://task.cit-task-1940.local/fhir/ClinicalImpression/319",
      "resource": {
        "resourceType": "ClinicalImpression",
        "id": "319",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:56:39.608+00:00",
          "source": "#cbff9164-57ba-44",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/36855"
            }
          }
        ],
        "status": "in-progress",
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-codes",
              "code": "TBD"
            }
          ]
        },
        "subject": {
          "reference": "https://patient.cit-task-1940.local/fhir/Patient/38341"
        },
        "previous": {
          "reference": "https://task.cit-task-1940.local/fhir/ClinicalImpression/318"
        }
      },
      "search": {
        "mode": "include"
      }
    },
    {
      "fullUrl": "https://task.cit-task-1940.local/fhir/ClinicalImpression/315",
      "resource": {
        "resourceType": "ClinicalImpression",
        "id": "315",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:56:38.940+00:00",
          "source": "#9870c13a-0789-45",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/84628"
            }
          }
        ],
        "status": "in-progress",
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-codes",
              "code": "TBD"
            }
          ]
        },
        "subject": {
          "reference": "https://patient.cit-task-1940.local/fhir/Patient/46770"
        },
        "previous": {
          "reference": "https://task.cit-task-1940.local/fhir/ClinicalImpression/314"
        }
      },
      "search": {
        "mode": "include"
      }
    },
    {
      "fullUrl": "https://task.cit-task-1940.local/fhir/ClinicalImpression/316",
      "resource": {
        "resourceType": "ClinicalImpression",
        "id": "316",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:56:39.117+00:00",
          "source": "#4eae357d-bb7c-4c",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/57528"
            }
          }
        ],
        "status": "in-progress",
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-codes",
              "code": "TBD"
            }
          ]
        },
        "subject": {
          "reference": "https://patient.cit-task-1940.local/fhir/Patient/57917"
        },
        "previous": {
          "reference": "https://task.cit-task-1940.local/fhir/ClinicalImpression/315"
        }
      },
      "search": {
        "mode": "include"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_ClinicalImpression_version.md

`GET [base]/ClinicalImpression/295/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJDbGluaWNhbEltcHJlc3Npb24uc2VhcmNoIiwiQ2xpbmljYWxJbXByZXNzaW9uLnBhdGNoIiwiQ2xpbmljYWxJbXByZXNzaW9uLnJlYWQiLCJDbGluaWNhbEltcHJlc3Npb24uY3JlYXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "ClinicalImpression",
  "id": "295",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:56:29.719+00:00",
    "source": "#ae433db1-a753-4c",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/19935"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression-decision",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-decision-codes",
            "code": "approved-for-sharing"
          }
        ]
      }
    }
  ],
  "status": "entered-in-error",
  "code": {
    "coding": [
      {
        "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-codes",
        "code": "TBD"
      }
    ]
  },
  "subject": {
    "reference": "https://patient.cit-task-1940.local/fhir/Patient/74694"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_ClinicalImpression.md

`GET [base]/ClinicalImpression/348`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiVGFzay5yZWFkIiwiJG1pZ3JhdGUiLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIkNsaW5pY2FsSW1wcmVzc2lvbi5yZWFkIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "ClinicalImpression",
  "id": "348",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-10-26T16:44:55.712+00:00",
    "source": "#2451d071-8868-46",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-task-2052.local/fhir/EpisodeOfCare/35729"
      }
    }
  ],
  "status": "in-progress",
  "code": {
    "coding": [
      {
        "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-codes",
        "code": "TBD"
      }
    ]
  },
  "subject": {
    "reference": "https://patient.cit-task-2052.local/fhir/Patient/70791"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Communication_search.md

`GET [base]/Communication?episodeOfCare=https%3A%2F%2Fcareplan.cit-measurement-1826.local%2Ffhir%2FEpisodeOfCare%2F5345&sender=https%3A%2F%2Fpatient.cit-measurement-1826.local%2Ffhir%2FPatient%2F37473`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9wYXRpZW50LmNpdC1tZWFzdXJlbWVudC0xODI2LmxvY2FsL2ZoaXIvUGF0aWVudC8zNzQ3MyIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJDb21tdW5pY2F0aW9uLnNlYXJjaCJdfSwiY29udGV4dCI6eyJlcGlzb2RlX29mX2NhcmVfaWQiOiJodHRwczovL2NhcmVwbGFuLmNpdC1tZWFzdXJlbWVudC0xODI2LmxvY2FsL2ZoaXIvRXBpc29kZU9mQ2FyZS81MzQ1IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "1d40e29a-d63e-4cb2-b140-06968134e429",
  "meta": {
    "lastUpdated": "2024-07-29T09:15:04.106+00:00"
  },
  "type": "searchset",
  "total": 0,
  "link": [
    {
      "relation": "self",
      "url": "https://measurement.cit-measurement-1826.local/fhir/Communication?_format=json&_pretty=true&episodeOfCare=https%3A%2F%2Fcareplan.cit-measurement-1826.local%2Ffhir%2FEpisodeOfCare%2F5345&sender=https%3A%2F%2Fpatient.cit-measurement-1826.local%2Ffhir%2FPatient%2F37473"
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Communication_version.md

`GET [base]/Communication/981/_history/1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNmYzMjQxYzQtMzUyOS00NmY4LTk4NGItNzQyYjYwOTEwOWJkIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNvbW11bmljYXRpb24ucmVhZCIsIkNvbW11bmljYXRpb24ucGF0Y2giLCJNZWRpYS5zZWFyY2giLCJRdWVzdGlvbm5haXJlUmVzcG9uc2UucmVhZCIsIk9ic2VydmF0aW9uLnNlYXJjaCIsIiRzZWFyY2gtbWVhc3VyZW1lbnRzIiwiT2JzZXJ2YXRpb24ucmVhZCIsIiRzdWJtaXQtbWVhc3VyZW1lbnQiLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIkNvbW11bmljYXRpb24uY3JlYXRlIiwiUXVlc3Rpb25uYWlyZVJlc3BvbnNlLnNlYXJjaCIsIiRtaWdyYXRlIiwiQ29tbXVuaWNhdGlvbi5zZWFyY2giLCJQcm92ZW5hbmNlLnJlYWQiLCJNZWRpYS5yZWFkIiwiUHJvdmVuYW5jZS5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Communication",
  "id": "981",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:16:01.723+00:00",
    "source": "#763eb919-e018-4d",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/56324"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/restriction-category",
            "code": "None"
          }
        ]
      }
    }
  ],
  "status": "completed",
  "category": [
    {
      "coding": [
        {
          "system": "http://ehealth.sundhed.dk/cs/communication-category",
          "code": "annotation"
        }
      ]
    }
  ],
  "subject": {
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/26911"
  },
  "about": [
    {
      "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/94308"
    }
  ],
  "sender": {
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/89239"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Communication.md

`GET [base]/Communication/1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMmQxMGU0ZDUtMzllZS00NTFiLTljYzMtZDYyYmU5Y2ZhYWY0IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNvbW11bmljYXRpb24ucmVhZCIsIkNvbW11bmljYXRpb24ucGF0Y2giLCJNZWRpYS5zZWFyY2giLCJRdWVzdGlvbm5haXJlUmVzcG9uc2UucmVhZCIsIk9ic2VydmF0aW9uLnNlYXJjaCIsIiRzZWFyY2gtbWVhc3VyZW1lbnRzIiwiT2JzZXJ2YXRpb24ucmVhZCIsIiRzdWJtaXQtbWVhc3VyZW1lbnQiLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIkNvbW11bmljYXRpb24uY3JlYXRlIiwiUXVlc3Rpb25uYWlyZVJlc3BvbnNlLnNlYXJjaCIsIiRtaWdyYXRlIiwiQ29tbXVuaWNhdGlvbi5zZWFyY2giLCJQcm92ZW5hbmNlLnJlYWQiLCJNZWRpYS5yZWFkIiwiUHJvdmVuYW5jZS5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Communication",
  "id": "1",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:07:16.111+00:00",
    "source": "#d79867c1-0220-4e",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/81538"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
      "valueReference": {
        "reference": "https://organization.cit-measurement-1826.local/fhir/CareTeam/6015"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/restriction-category",
            "code": "None"
          }
        ]
      }
    }
  ],
  "status": "in-progress",
  "category": [
    {
      "coding": [
        {
          "system": "http://ehealth.sundhed.dk/cs/communication-category",
          "code": "annotation"
        }
      ]
    }
  ],
  "subject": {
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/12381"
  },
  "topic": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/communication-topic",
        "code": "report-labs"
      }
    ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_CommunicationRequest_search.md

`GET [base]/CommunicationRequest?recipient=https%3A%2F%2Fpatient.cit-careplan-2980.local%2Ffhir%2FPatient%2F10313&_include=CommunicationRequest%3Abased-on`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI5ODAubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvOTU1MDEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJDb21tdW5pY2F0aW9uUmVxdWVzdC5zZWFyY2giXX0sImNvbnRleHQiOnsicGF0aWVudF9pZCI6Imh0dHBzOi8vcGF0aWVudC5jaXQtY2FyZXBsYW4tMjk4MC5sb2NhbC9maGlyL1BhdGllbnQvMTAzMTMiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQQVRJRU5UIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "09196ff2-95bc-4ae1-b128-f34d1ecd260e",
  "meta": {
    "lastUpdated": "2024-10-26T17:13:51.654+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://careplan.cit-careplan-2980.local/fhir/CommunicationRequest?_format=json&_include=CommunicationRequest%3Abased-on&_pretty=true&recipient=https%3A%2F%2Fpatient.cit-careplan-2980.local%2Ffhir%2FPatient%2F10313"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://careplan.cit-careplan-2980.local/fhir/CommunicationRequest/2906",
      "resource": {
        "resourceType": "CommunicationRequest",
        "id": "2906",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-10-26T17:13:51.579+00:00",
          "source": "#c046dd3e-0eb1-43",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-request"
          ]
        },
        "basedOn": [
          {
            "reference": "https://careplan.cit-careplan-2980.local/fhir/ServiceRequest/2905"
          }
        ],
        "status": "active",
        "subject": {
          "reference": "https://patient.cit-careplan-2980.local/fhir/Patient/10313"
        },
        "recipient": [
          {
            "reference": "https://patient.cit-careplan-2980.local/fhir/Patient/10313"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://careplan.cit-careplan-2980.local/fhir/ServiceRequest/2905",
      "resource": {
        "resourceType": "ServiceRequest",
        "id": "2905",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-10-26T17:13:51.461+00:00",
          "source": "#d9f4d492-5d03-46",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest"
          ]
        },
        "extension": [
          {
            "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-careplan-2980.local/fhir/EpisodeOfCare/2904"
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
                      "code": "completed"
                    }
                  ]
                }
              },
              {
                "url": "period",
                "valuePeriod": {
                  "start": "2024-10-26T17:13:50+00:00"
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
          "https://plan.cit-careplan-2980.local/fhir/ActivityDefinition/62948"
        ],
        "status": "completed",
        "intent": "filler-order",
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/activitydefinition-code",
              "code": "TBD"
            }
          ],
          "text": "e4e94cbc-c50f-4e84-afff-14a155859a6b"
        },
        "subject": {
          "reference": "https://patient.cit-careplan-2980.local/fhir/Patient/10313"
        },
        "occurrencePeriod": {
          "start": "2024-10-21T17:13:50+00:00"
        }
      },
      "search": {
        "mode": "include"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_CommunicationRequest_version.md

`GET [base]/CommunicationRequest/2753/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRXBpc29kZU9mQ2FyZS5yZWFkIiwiQ29tbXVuaWNhdGlvblJlcXVlc3QudXBkYXRlIiwiQ29tbXVuaWNhdGlvblJlcXVlc3QucmVhZCIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiQ29tbXVuaWNhdGlvblJlcXVlc3Quc2VhcmNoIiwiQ29tbXVuaWNhdGlvblJlcXVlc3QuY3JlYXRlIiwiQ29tbXVuaWNhdGlvblJlcXVlc3QuZGVsZXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "CommunicationRequest",
  "id": "2753",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:22:00.364+00:00",
    "source": "#f755a5eb-9777-45",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-request"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/2751"
      }
    }
  ],
  "basedOn": [
    {
      "reference": "https://careplan.cit-careplan-2818.local/fhir/ServiceRequest/2752"
    }
  ],
  "status": "on-hold",
  "subject": {
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/17817"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_CommunicationRequest.md

`GET [base]/CommunicationRequest/2554`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ2FyZVBsYW4kc3VnZ2VzdC1jYXJlLXRlYW1zIiwiQ29uc2VudC5yZWFkIiwiQ2FyZVBsYW4kdXBkYXRlLWNhcmUtdGVhbXMiLCJFcGlzb2RlT2ZDYXJlLnJlYWQiLCJDYXJlUGxhbi5yZWFkIiwiJG1pZ3JhdGUiLCJDb21tdW5pY2F0aW9uUmVxdWVzdC5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJQcm92ZW5hbmNlLnJlYWQiLCJDYXJlUGxhbi5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "CommunicationRequest",
  "id": "2554",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:20:54.518+00:00",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-request"
    ],
    "tag": [
      {
        "system": "http://ehealth.sundhed.dk/cs/ehealth-system",
        "code": "xa",
        "display": "xa"
      }
    ]
  },
  "basedOn": [
    {
      "reference": "https://careplan.cit-careplan-2818.local/fhir/ServiceRequest/2553"
    }
  ],
  "status": "active",
  "category": [
    {
      "coding": [
        {
          "system": "http://ehealth.sundhed.dk/cs/message-category",
          "code": "message",
          "display": "Message"
        }
      ]
    }
  ],
  "doNotPerform": true,
  "subject": {
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/12359"
  },
  "occurrencePeriod": {
    "start": "2024-07-29T13:20:53+00:00"
  },
  "reasonCode": [
    {
      "coding": [
        {
          "system": "http://ehealth.sundhed.dk/cs/message-reasonCode",
          "code": "CarePlanCreated",
          "display": "CarePlan Created"
        }
      ]
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Composition_search.md

`GET [base]/Composition?title=701ba35f-aa81-4170-b221-d614dd96063c`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ29tcG9zaXRpb24ucmVhZCIsIkNvbXBvc2l0aW9uLmNyZWF0ZSIsIkNvbXBvc2l0aW9uLnNlYXJjaCIsIkNvbXBvc2l0aW9uLmRlbGV0ZSIsIiR0ZXN0LW9ubHktY3JlYXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "5b4dc0a3-ab7f-4eff-9c84-d8cf31049636",
  "meta": {
    "lastUpdated": "2024-07-29T08:45:30.642+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://document-transformation.cit-document-transformation-2592.local/fhir/Composition?_format=json&_pretty=true&title=701ba35f-aa81-4170-b221-d614dd96063c"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://document-transformation.cit-document-transformation-2592.local/fhir/Composition/130",
      "resource": {
        "resourceType": "Composition",
        "id": "130",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:45:30.249+00:00",
          "source": "#5949bebe-0d21-41",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-composition"
          ]
        },
        "contained": [
          {
            "resourceType": "Patient",
            "id": "1",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient"
              ]
            },
            "identifier": [
              {
                "system": "urn:oid:1.2.208.176.1.2",
                "value": "0101010001"
              }
            ],
            "name": [
              {
                "use": "usual",
                "family": "LastName",
                "given": [
                  "FirstName"
                ]
              }
            ],
            "gender": "female",
            "address": [
              {
                "use": "home",
                "line": [
                  "Scot 2"
                ]
              }
            ],
            "managingOrganization": {
              "reference": "https://organization.cit-document-transformation-2592.local/fhir/Organization/80666"
            }
          },
          {
            "resourceType": "Practitioner",
            "id": "2",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-practitioner"
              ]
            },
            "name": [
              {
                "family": "dd2dfaee-0556-40d9-9af7-ffd7fb02adcd"
              }
            ]
          }
        ],
        "status": "preliminary",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "53576-5"
            }
          ]
        },
        "subject": {
          "reference": "#1"
        },
        "date": "2024-07-29T08:45:30+00:00",
        "author": [
          {
            "reference": "#2"
          }
        ],
        "title": "701ba35f-aa81-4170-b221-d614dd96063c"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://document-transformation.cit-document-transformation-2592.local/fhir/Composition/131",
      "resource": {
        "resourceType": "Composition",
        "id": "131",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:45:30.384+00:00",
          "source": "#afb22cd1-f4ec-4c",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-composition"
          ]
        },
        "contained": [
          {
            "resourceType": "Patient",
            "id": "1",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient"
              ]
            },
            "identifier": [
              {
                "system": "urn:oid:1.2.208.176.1.2",
                "value": "0101010001"
              }
            ],
            "name": [
              {
                "use": "usual",
                "family": "LastName",
                "given": [
                  "FirstName"
                ]
              }
            ],
            "gender": "female",
            "address": [
              {
                "use": "home",
                "line": [
                  "Scot 2"
                ]
              }
            ],
            "managingOrganization": {
              "reference": "https://organization.cit-document-transformation-2592.local/fhir/Organization/91589"
            }
          },
          {
            "resourceType": "Practitioner",
            "id": "2",
            "meta": {
              "profile": [
                "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-practitioner"
              ]
            },
            "name": [
              {
                "family": "634f3275-e9ac-4fe4-8c4c-88588fd63fb2"
              }
            ]
          }
        ],
        "status": "preliminary",
        "type": {
          "coding": [
            {
              "system": "http://loinc.org",
              "code": "53576-5"
            }
          ]
        },
        "subject": {
          "reference": "#1"
        },
        "date": "2024-07-29T08:45:30+00:00",
        "author": [
          {
            "reference": "#2"
          }
        ],
        "title": "701ba35f-aa81-4170-b221-d614dd96063c"
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Composition.md

`GET [base]/Composition/125`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ29tcG9zaXRpb24ucmVhZCIsIkNvbXBvc2l0aW9uLmNyZWF0ZSIsIkNvbXBvc2l0aW9uLnNlYXJjaCIsIkNvbXBvc2l0aW9uLmRlbGV0ZSIsIiR0ZXN0LW9ubHktY3JlYXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Composition",
  "id": "125",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T08:45:28.354+00:00",
    "source": "#40f3f841-bd94-95",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-composition"
    ]
  },
  "contained": [
    {
      "resourceType": "Patient",
      "id": "1",
      "meta": {
        "profile": [
          "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient"
        ]
      },
      "identifier": [
        {
          "system": "urn:oid:1.2.208.176.1.2",
          "value": "0101010001"
        }
      ],
      "name": [
        {
          "use": "usual",
          "family": "LastName",
          "given": [
            "FirstName"
          ]
        }
      ],
      "gender": "female",
      "address": [
        {
          "use": "home",
          "line": [
            "Scot 2"
          ]
        }
      ],
      "managingOrganization": {
        "reference": "https://organization.cit-document-transformation-2592.local/fhir/Organization/69565"
      }
    },
    {
      "resourceType": "Practitioner",
      "id": "2",
      "meta": {
        "profile": [
          "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-practitioner"
        ]
      },
      "name": [
        {
          "family": "fd9ef170-c51d-4f46-8a45-3415c1dea8b4"
        }
      ]
    }
  ],
  "status": "preliminary",
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "53576-5"
      }
    ]
  },
  "subject": {
    "reference": "#1"
  },
  "date": "2024-07-29T08:45:28+00:00",
  "author": [
    {
      "reference": "#2"
    }
  ],
  "title": "49f711fe-43f6-48a6-8909-d8f8865615ce"
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Condition_version.md

`GET [base]/Condition/2478/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvMzMxODIiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ29uZGl0aW9uLnJlYWQiLCJDb25kaXRpb24ucGF0Y2giLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwiY29udGV4dCI6eyJlcGlzb2RlX29mX2NhcmVfaWQiOiJodHRwczovL2NhcmVwbGFuLmNpdC1jYXJlcGxhbi0yODE4LmxvY2FsL2ZoaXIvRXBpc29kZU9mQ2FyZS8yNDc3IiwicGF0aWVudF9pZCI6Imh0dHBzOi8vcGF0aWVudC5jaXQtY2FyZXBsYW4tMjgxOC5sb2NhbC9maGlyL1BhdGllbnQvNTk5ODAiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Condition",
  "id": "2478",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:20:20.695+00:00",
    "source": "#91633e77-022b-94",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-condition"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/2477"
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
  "verificationStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        "code": "differential",
        "display": "Differential"
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
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/59980"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Condition.md

`GET [base]/Condition/2471`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvMzQzNyIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJDb25kaXRpb24ucmVhZCIsIkNvbmRpdGlvbi5wYXRjaCIsIkNvbmRpdGlvbi5jcmVhdGUiLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Condition",
  "id": "2471",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T13:20:16.391+00:00",
    "source": "#6dcd8786-69f0-4f",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-condition"
    ]
  },
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
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/66579"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Consent_search.md

`GET [base]/Consent?patient=https%3A%2F%2Fpatient.cit-careplan-2818.local%2Ffhir%2FPatient%2F58712&data=https%3A%2F%2Fcareplan.cit-careplan-2818.local%2Ffhir%2FEpisodeOfCare%2F1416%2F_history%2F1&category=SSLPCI&status=active`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ29uc2VudC5yZWFkIiwiQ29uc2VudC5zZWFyY2giLCJDb25zZW50LnVwZGF0ZSIsIkNvbnNlbnQuY3JlYXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "57d516f3-35ef-4d04-95c0-8d444e640884",
  "meta": {
    "lastUpdated": "2024-07-29T13:12:05.178+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://careplan.cit-careplan-2818.local/fhir/Consent?_format=json&_pretty=true&category=SSLPCI&data=https%3A%2F%2Fcareplan.cit-careplan-2818.local%2Ffhir%2FEpisodeOfCare%2F1416%2F_history%2F1&patient=https%3A%2F%2Fpatient.cit-careplan-2818.local%2Ffhir%2FPatient%2F58712&status=active"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://careplan.cit-careplan-2818.local/fhir/Consent/1417",
      "resource": {
        "resourceType": "Consent",
        "id": "1417",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T13:12:04.961+00:00",
          "source": "#889b0fd0-5ca1-43",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-consent"
          ]
        },
        "status": "active",
        "scope": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/consentscope",
              "code": "treatment",
              "display": "Treatment"
            }
          ]
        },
        "category": [
          {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/consent-category",
                "code": "SSLPCI"
              }
            ]
          }
        ],
        "patient": {
          "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/58712"
        },
        "performer": [
          {
            "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/37379"
          }
        ],
        "policyRule": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/consentpolicycodes",
              "code": "cric"
            }
          ]
        },
        "provision": {
          "period": {
            "start": "1970-01-01T00:00:01+00:00",
            "end": "1970-01-01T00:01:40+00:00"
          },
          "actor": [
            {
              "id": "715a920d-4f83-455f-8718-404dc2e1c896",
              "role": {
                "coding": [
                  {
                    "system": "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
                    "code": "authserver"
                  }
                ]
              },
              "reference": {
                "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/78685"
              }
            }
          ],
          "data": [
            {
              "meaning": "related",
              "reference": {
                "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/1416"
              }
            }
          ]
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Consent_version.md

`GET [base]/Consent/1439/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ29uc2VudC5yZWFkIiwiQ29uc2VudC5zZWFyY2giLCJDb25zZW50LnVwZGF0ZSIsIkNvbnNlbnQuY3JlYXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Consent",
  "id": "1439",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:12:21.170+00:00",
    "source": "#cbed532d-5a80-42",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-consent"
    ]
  },
  "status": "draft",
  "scope": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/consentscope",
        "code": "treatment",
        "display": "Treatment"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://ehealth.sundhed.dk/cs/consent-category",
          "code": "TBD"
        }
      ]
    }
  ],
  "patient": {
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/50545"
  },
  "performer": [
    {
      "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/75050"
    }
  ],
  "policyRule": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/consentpolicycodes",
        "code": "cric"
      }
    ]
  },
  "provision": {
    "period": {
      "start": "1970-01-01T00:00:01+00:00",
      "end": "1970-01-01T00:01:40+00:00"
    },
    "actor": [
      {
        "id": "d39d61ac-ec05-45ac-9bc0-7b169c818d23",
        "role": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/extra-security-role-type",
              "code": "authserver"
            }
          ]
        },
        "reference": {
          "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/39429"
        }
      }
    ],
    "data": [
      {
        "meaning": "related",
        "reference": {
          "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/1438"
        }
      }
    ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Device_search.md

`GET [base]/Device?manufacturer%3Aexact=cab47716-3ab8-4fde-b637-c8c406881a7d&model%3Aexact=149baf9f-b4f4-40e2-84e3-108481fcafdc`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRGV2aWNlLnJlYWQiLCJEZXZpY2Uud3JpdGUiLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "57de8bc9-f22c-4140-966e-31b75e85c75b",
  "meta": {
    "lastUpdated": "2024-07-29T08:37:56.799+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://device.cit-device-886.local/fhir/Device?_format=json&_pretty=true&manufacturer%3Aexact=cab47716-3ab8-4fde-b637-c8c406881a7d&model%3Aexact=149baf9f-b4f4-40e2-84e3-108481fcafdc"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://device.cit-device-886.local/fhir/Device/141",
      "resource": {
        "resourceType": "Device",
        "id": "141",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:37:56.082+00:00",
          "source": "#1ee8c8c6-12d8-49",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-device"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-device-privatelyOwned",
            "valueBoolean": true
          }
        ],
        "status": "active",
        "manufacturer": "cab47716-3ab8-4fde-b637-c8c406881a7d",
        "modelNumber": "149baf9f-b4f4-40e2-84e3-108481fcafdc"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://device.cit-device-886.local/fhir/Device/143",
      "resource": {
        "resourceType": "Device",
        "id": "143",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:37:56.445+00:00",
          "source": "#1e1509e1-6133-4a",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-device"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-device-privatelyOwned",
            "valueBoolean": true
          }
        ],
        "status": "active",
        "manufacturer": "cab47716-3ab8-4fde-b637-c8c406881a7d",
        "modelNumber": "149baf9f-b4f4-40e2-84e3-108481fcafdc"
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Device_version.md

`GET [base]/Device/155/_history/1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMjkyZjcyZTYtYjE2MC00NmYyLTliOGYtNzJiZGQ0OTcxZWE1IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkRldmljZS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6IjQyIiwicGF0aWVudF9pZCI6IjQyIiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Device",
  "id": "155",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T08:38:10.055+00:00",
    "source": "#0848a477-5a77-47",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-device"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-device-privatelyOwned",
      "valueBoolean": false
    }
  ],
  "status": "active",
  "owner": {
    "reference": "https://organization.cit-device-886.local/fhir/Organization/30913"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_DeviceMetric_search.md

`GET [base]/DeviceMetric?qualityCategory=initial&source=https%3A%2F%2Fdevice.cit-device-886.local%2Ffhir%2FDevice%2F89`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRGV2aWNlTWV0cmljLnJlYWQiLCJEZXZpY2VNZXRyaWMud3JpdGUiLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "eea5dca4-6805-4ae5-9605-1524083a7827",
  "meta": {
    "lastUpdated": "2024-07-29T08:36:55.468+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://device.cit-device-886.local/fhir/DeviceMetric?_format=json&_pretty=true&qualityCategory=initial&source=https%3A%2F%2Fdevice.cit-device-886.local%2Ffhir%2FDevice%2F89"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://device.cit-device-886.local/fhir/DeviceMetric/92",
      "resource": {
        "resourceType": "DeviceMetric",
        "id": "92",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:36:55.226+00:00",
          "source": "#aba14016-8cb9-46",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-qualities",
            "extension": [
              {
                "url": "category",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                      "code": "initial"
                    }
                  ]
                }
              },
              {
                "url": "value",
                "valueInteger": 23
              }
            ]
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-templateQualities",
            "extension": [
              {
                "url": "category",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                      "code": "initial"
                    }
                  ]
                }
              },
              {
                "url": "value",
                "valueInteger": 10
              }
            ]
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-templateQualities",
            "extension": [
              {
                "url": "category",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                      "code": "initial"
                    }
                  ]
                }
              },
              {
                "url": "value",
                "valueInteger": 12
              }
            ]
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-templateQualities",
            "extension": [
              {
                "url": "category",
                "valueCodeableConcept": {
                  "coding": [
                    {
                      "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                      "code": "initial"
                    }
                  ]
                }
              },
              {
                "url": "value",
                "valueInteger": 14
              }
            ]
          }
        ],
        "identifier": [
          {
            "value": "Foo"
          }
        ],
        "type": {
          "coding": [
            {
              "system": "urn:oid:1.2.208.176.2.1",
              "code": "NPU03011"
            }
          ]
        },
        "source": {
          "reference": "https://device.cit-device-886.local/fhir/Device/89"
        },
        "category": "calculation"
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_DeviceMetric_version.md

`GET [base]/DeviceMetric/116/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRGV2aWNlTWV0cmljLnJlYWQiLCJEZXZpY2VNZXRyaWMud3JpdGUiLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "DeviceMetric",
  "id": "116",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:37:31.342+00:00",
    "source": "#764366f2-ec4b-41",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-qualities",
      "extension": [
        {
          "url": "category",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                "code": "initial"
              }
            ]
          }
        },
        {
          "url": "value",
          "valueInteger": 5
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-templateQualities",
      "extension": [
        {
          "url": "category",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                "code": "initial"
              }
            ]
          }
        },
        {
          "url": "value",
          "valueInteger": 10
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-templateQualities",
      "extension": [
        {
          "url": "category",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                "code": "initial"
              }
            ]
          }
        },
        {
          "url": "value",
          "valueInteger": 12
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-templateQualities",
      "extension": [
        {
          "url": "category",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                "code": "initial"
              }
            ]
          }
        },
        {
          "url": "value",
          "valueInteger": 14
        }
      ]
    }
  ],
  "identifier": [
    {
      "value": "Foo"
    }
  ],
  "type": {
    "coding": [
      {
        "system": "urn:oid:1.2.208.176.2.1",
        "code": "NPU03011"
      }
    ]
  },
  "source": {
    "reference": "https://device.cit-device-886.local/fhir/Device/115"
  },
  "operationalStatus": "off",
  "category": "calculation"
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_DeviceMetric.md

`GET [base]/DeviceMetric/123`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiZjk4MjAxZjItMWJhOC00Zjk0LWE0ZmQtOTk2NTQzODhmN2M2IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkRldmljZU1ldHJpYy5yZWFkIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "DeviceMetric",
  "id": "123",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T08:37:43.445+00:00",
    "source": "#065a370e-a663-4b",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-qualities",
      "extension": [
        {
          "url": "category",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                "code": "initial"
              }
            ]
          }
        },
        {
          "url": "value",
          "valueInteger": 1
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-templateQualities",
      "extension": [
        {
          "url": "category",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                "code": "initial"
              }
            ]
          }
        },
        {
          "url": "value",
          "valueInteger": 10
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-templateQualities",
      "extension": [
        {
          "url": "category",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                "code": "initial"
              }
            ]
          }
        },
        {
          "url": "value",
          "valueInteger": 12
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-templateQualities",
      "extension": [
        {
          "url": "category",
          "valueCodeableConcept": {
            "coding": [
              {
                "system": "http://ehealth.sundhed.dk/cs/devicemetric-quality-types",
                "code": "initial"
              }
            ]
          }
        },
        {
          "url": "value",
          "valueInteger": 14
        }
      ]
    }
  ],
  "identifier": [
    {
      "value": "Foo"
    }
  ],
  "type": {
    "coding": [
      {
        "system": "urn:oid:1.2.208.176.2.1",
        "code": "NPU03011"
      }
    ]
  },
  "source": {
    "reference": "https://device.cit-device-886.local/fhir/Device/121"
  },
  "category": "calculation",
  "calibration": [
    {
      "extension": [
        {
          "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-devicemetric-calibrationExpires",
          "valueDateTime": "2024-07-30T08:37:43+00:00"
        }
      ]
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_DeviceUseStatement_search.md

`GET [base]/DeviceUseStatement?patient=https%3A%2F%2Fpatient.cit-device-886.local%2Ffhir%2FPatient%2F61592&timing=lt2023-12-29`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMWZkYzkyOWUtMjJlOC00NTRhLTk5ZTMtMDlhYTUxM2U3OGRiIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkRldmljZVVzZVN0YXRlbWVudC5yZWFkIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "4db6d5c0-5904-4a7b-944c-54e2d29bda7a",
  "meta": {
    "lastUpdated": "2024-07-29T08:35:47.825+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://device.cit-device-886.local/fhir/DeviceUseStatement?_format=json&_pretty=true&patient=https%3A%2F%2Fpatient.cit-device-886.local%2Ffhir%2FPatient%2F61592&timing=lt2023-12-29"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://device.cit-device-886.local/fhir/DeviceUseStatement/31",
      "resource": {
        "resourceType": "DeviceUseStatement",
        "id": "31",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:35:46.593+00:00",
          "source": "#d918a75e-ef95-41",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-deviceusestatement"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-deviceusestatement-context",
            "valueReference": {
              "reference": "https://careplan.cit-device-886.local/fhir/CarePlan/47802"
            }
          }
        ],
        "status": "active",
        "subject": {
          "reference": "https://patient.cit-device-886.local/fhir/Patient/61592"
        },
        "timingPeriod": {
          "start": "2023-07-29T08:35:46+00:00",
          "end": "2023-09-29T08:35:46+00:00"
        },
        "device": {
          "reference": "https://device.cit-device-886.local/fhir/Device/30"
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://device.cit-device-886.local/fhir/DeviceUseStatement/33",
      "resource": {
        "resourceType": "DeviceUseStatement",
        "id": "33",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:35:47.102+00:00",
          "source": "#2269e4c8-697d-44",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-deviceusestatement"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-deviceusestatement-context",
            "valueReference": {
              "reference": "https://careplan.cit-device-886.local/fhir/CarePlan/21657"
            }
          }
        ],
        "status": "active",
        "subject": {
          "reference": "https://patient.cit-device-886.local/fhir/Patient/61592"
        },
        "timingPeriod": {
          "start": "2023-11-29T08:35:46+00:00",
          "end": "2024-01-29T08:35:46+00:00"
        },
        "device": {
          "reference": "https://device.cit-device-886.local/fhir/Device/32"
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_DeviceUseStatement_version.md

`GET [base]/DeviceUseStatement/41/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiN2YyNTIwOGUtZTg4Yy00Y2MwLTljZDctZjQyYzViMDZmZjBiIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkRldmljZVVzZVN0YXRlbWVudC5yZWFkIiwiRGV2aWNlVXNlU3RhdGVtZW50LndyaXRlIl19LCJjb250ZXh0Ijp7InBhdGllbnRfaWQiOiJodHRwczovL3BhdGllbnQuY2l0LWRldmljZS04ODYubG9jYWwvZmhpci9QYXRpZW50LzYxNTkyIiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "DeviceUseStatement",
  "id": "41",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:35:49.974+00:00",
    "source": "#e41775fa-a048-42",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-deviceusestatement"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-deviceusestatement-context",
      "valueReference": {
        "reference": "https://careplan.cit-device-886.local/fhir/CarePlan/61681"
      }
    }
  ],
  "status": "completed",
  "subject": {
    "reference": "https://patient.cit-device-886.local/fhir/Patient/61592"
  },
  "device": {
    "reference": "https://device.cit-device-886.local/fhir/Device/40"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_DocumentReference_search.md

`GET [base]/DocumentReference?description=473a33c0-34ff-45b0-8d57-92d28625c4c5`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRG9jdW1lbnRSZWZlcmVuY2UuY3JlYXRlIiwiRG9jdW1lbnRSZWZlcmVuY2UudXBkYXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJEb2N1bWVudFJlZmVyZW5jZS5zZWFyY2giLCJEb2N1bWVudFJlZmVyZW5jZS5yZWFkIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "c7a181bb-bf4c-4ea6-ad57-390f811d2c97",
  "meta": {
    "lastUpdated": "2024-07-31T13:14:42.274+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://plan.cit-plan-1641.local/fhir/DocumentReference?_format=json&_pretty=true&description=473a33c0-34ff-45b0-8d57-92d28625c4c5"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://plan.cit-plan-1641.local/fhir/DocumentReference/316",
      "resource": {
        "resourceType": "DocumentReference",
        "id": "316",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-31T13:14:41.788+00:00",
          "source": "#25d152eb-5851-46",
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
        "date": "2024-07-31T13:14:41.783+00:00",
        "description": "473a33c0-34ff-45b0-8d57-92d28625c4c5",
        "content": [
          {
            "attachment": {
              "url": "http://some.com/"
            }
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://plan.cit-plan-1641.local/fhir/DocumentReference/318",
      "resource": {
        "resourceType": "DocumentReference",
        "id": "318",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-31T13:14:42.116+00:00",
          "source": "#aa43fbd2-f456-4b",
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
        "date": "2024-07-31T13:14:42.119+00:00",
        "description": "473a33c0-34ff-45b0-8d57-92d28625c4c5",
        "content": [
          {
            "attachment": {
              "url": "http://some.com/"
            }
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_DocumentReference_version.md

`GET [base]/DocumentReference/479/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRG9jdW1lbnRSZWZlcmVuY2UudXBkYXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJEb2N1bWVudFJlZmVyZW5jZS5yZWFkIl19LCJjb250ZXh0Ijp7Im9yZ2FuaXphdGlvbl9pZCI6Imh0dHBzOi8vb3JnYW5pemF0aW9uLmNpdC1wbGFuLTE2NDEubG9jYWwvZmhpci9Pcmdhbml6YXRpb24vMTA4NDIiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQQVRJRU5UIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "DocumentReference",
  "id": "479",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-31T13:16:56.084+00:00",
    "source": "#e3b0c1be-7ea3-4a",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-documentreference"
    ]
  },
  "status": "entered-in-error",
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "69730-0"
      }
    ]
  },
  "date": "2024-07-31T13:16:55.983+00:00",
  "custodian": {
    "reference": "https://organization.cit-plan-1641.local/fhir/Organization/10842"
  },
  "content": [
    {
      "attachment": {
        "url": "http://some.com/"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_DocumentReference.md

`GET [base]/DocumentReference/145`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOTgwZTc1ZmUtZGVkNC00NGQ3LWJjNmEtOThkZDJiNGU5NjQ3IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlBsYW5EZWZpbml0aW9uLmNyZWF0ZSIsIkFjdGl2aXR5RGVmaW5pdGlvbi51cGRhdGUiLCJRdWVzdGlvbm5haXJlLnJlYWQiLCJBY3Rpdml0eURlZmluaXRpb24ucmVhZCIsIlF1ZXN0aW9ubmFpcmUuY3JlYXRlIiwiRG9jdW1lbnRSZWZlcmVuY2UudXBkYXRlIiwiRG9jdW1lbnRSZWZlcmVuY2UuY3JlYXRlIiwiUGxhbkRlZmluaXRpb24udXBkYXRlIiwiQWN0aXZpdHlEZWZpbml0aW9uLmNyZWF0ZSIsIlBsYW5EZWZpbml0aW9uLnJlYWQiLCJQbGFuRGVmaW5pdGlvbiRhcHBseSIsIkRvY3VtZW50UmVmZXJlbmNlLnJlYWQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXBsYW4tMTY0MS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi8xNDc2NSIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "DocumentReference",
  "id": "145",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-31T13:12:45.635+00:00",
    "source": "#bb8787fc-2d15-46",
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
  "date": "2024-07-31T13:12:43.513+00:00",
  "author": [
    {
      "reference": "https://organization.cit-plan-1641.local/fhir/Organization/56990"
    }
  ],
  "content": [
    {
      "attachment": {
        "url": "http://some.com/"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_EpisodeOfCare_search.md

`GET [base]/EpisodeOfCare?team=https%3A%2F%2Forganization.cit-careplan-2818.local%2Ffhir%2FCareTeam%2F30822%2Chttps%3A%2F%2Forganization.cit-careplan-2818.local%2Ffhir%2FCareTeam%2F18680`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvOTQ0NTkiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRXBpc29kZU9mQ2FyZS5zZWFyY2giLCJFcGlzb2RlT2ZDYXJlLnJlYWQiLCJDYXJlUGxhbi5yZWFkIiwiRXBpc29kZU9mQ2FyZSR1cGRhdGUtY2FyZS10ZWFtcyIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiRXBpc29kZU9mQ2FyZS5wYXRjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "396e1227-ad6c-4741-9d8c-34a4078f882e",
  "meta": {
    "lastUpdated": "2024-07-29T13:15:27.087+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare?_format=json&_pretty=true&team=https%3A%2F%2Forganization.cit-careplan-2818.local%2Ffhir%2FCareTeam%2F30822%2Chttps%3A%2F%2Forganization.cit-careplan-2818.local%2Ffhir%2FCareTeam%2F18680"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/1703",
      "resource": {
        "resourceType": "EpisodeOfCare",
        "id": "1703",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T13:15:25.364+00:00",
          "source": "#15c6e86a-be18-49",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare-caremanagerOrganization",
            "valueReference": {
              "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/22732"
            }
          }
        ],
        "status": "active",
        "statusHistory": [
          {
            "status": "active",
            "period": {
              "start": "2024-07-29T13:15:25+00:00"
            }
          }
        ],
        "diagnosis": [
          {
            "condition": {
              "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/1702"
            },
            "rank": 1
          }
        ],
        "patient": {
          "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/86576"
        },
        "managingOrganization": {
          "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/22732"
        },
        "period": {
          "start": "1970-01-01T00:00:01+00:00",
          "end": "1970-01-01T00:01:40+00:00"
        },
        "team": [
          {
            "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/30822"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/1705",
      "resource": {
        "resourceType": "EpisodeOfCare",
        "id": "1705",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T13:15:26.960+00:00",
          "source": "#bd5e5286-cc44-49",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare-caremanagerOrganization",
            "valueReference": {
              "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/3372"
            }
          }
        ],
        "status": "active",
        "statusHistory": [
          {
            "status": "active",
            "period": {
              "start": "2024-07-29T13:15:25+00:00"
            }
          }
        ],
        "diagnosis": [
          {
            "condition": {
              "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/1704"
            },
            "rank": 1
          }
        ],
        "patient": {
          "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/63888"
        },
        "managingOrganization": {
          "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/3372"
        },
        "period": {
          "start": "1970-01-01T00:00:01+00:00",
          "end": "1970-01-01T00:01:40+00:00"
        },
        "team": [
          {
            "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/18680"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_EpisodeOfCare_version.md

`GET [base]/EpisodeOfCare/1725/_history/1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvODUxNzUiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRXBpc29kZU9mQ2FyZS5zZWFyY2giLCJFcGlzb2RlT2ZDYXJlLnJlYWQiLCJDYXJlUGxhbi5yZWFkIiwiRXBpc29kZU9mQ2FyZSR1cGRhdGUtY2FyZS10ZWFtcyIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiRXBpc29kZU9mQ2FyZS5wYXRjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "EpisodeOfCare",
  "id": "1725",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T13:15:33.089+00:00",
    "source": "#e7e90195-e7ea-40",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare-caremanagerOrganization",
      "valueReference": {
        "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/41431"
      }
    }
  ],
  "status": "active",
  "statusHistory": [
    {
      "status": "active",
      "period": {
        "start": "2024-07-29T13:15:32+00:00"
      }
    }
  ],
  "diagnosis": [
    {
      "condition": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/1724"
      },
      "rank": 1
    }
  ],
  "patient": {
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/95828"
  },
  "managingOrganization": {
    "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/41431"
  },
  "period": {
    "start": "1970-01-01T00:00:01+00:00",
    "end": "1970-01-01T00:01:40+00:00"
  },
  "team": [
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/94269"
    },
    {
      "reference": "https://organization.cit-careplan-2818.local/fhir/CareTeam/33370"
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_EpisodeOfCare.md

`GET [base]/EpisodeOfCare/1633`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRXBpc29kZU9mQ2FyZS5yZWFkIiwiJG1pZ3JhdGUiLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "EpisodeOfCare",
  "id": "1633",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:14:36.199+00:00",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare-caremanagerOrganization",
      "valueReference": {
        "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/13634"
      }
    }
  ],
  "status": "active",
  "statusHistory": [
    {
      "status": "active",
      "period": {
        "start": "2024-07-29T13:14:35+00:00"
      }
    }
  ],
  "diagnosis": [
    {
      "condition": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/1632"
      },
      "rank": 1
    }
  ],
  "patient": {
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/21903"
  },
  "managingOrganization": {
    "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/13634"
  },
  "period": {
    "start": "1970-01-01T00:00:01+00:00",
    "end": "1970-01-01T00:01:40+00:00"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Goal_search.md

`GET [base]/Goal?lifecycle-status=entered-in-error&subject=https%3A%2F%2Fpatient.cit-careplan-2818.local%2Ffhir%2FPatient%2F21415&addresses=https%3A%2F%2Fcareplan.cit-careplan-2818.local%2Ffhir%2FServiceRequest%2F1620%2F_history%2F1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ2FyZVBsYW4ucmVhZCIsIkNhcmVQbGFuLnVwZGF0ZSIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiQ2FyZVBsYW4uc2VhcmNoIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "74094c01-b026-4e34-9f14-d6de0d6ba6d0",
  "meta": {
    "lastUpdated": "2024-07-29T13:14:28.791+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://careplan.cit-careplan-2818.local/fhir/Goal?_format=json&_pretty=true&addresses=https%3A%2F%2Fcareplan.cit-careplan-2818.local%2Ffhir%2FServiceRequest%2F1620%2F_history%2F1&lifecycle-status=entered-in-error&subject=https%3A%2F%2Fpatient.cit-careplan-2818.local%2Ffhir%2FPatient%2F21415"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://careplan.cit-careplan-2818.local/fhir/Goal/1621",
      "resource": {
        "resourceType": "Goal",
        "id": "1621",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T13:14:27.050+00:00",
          "source": "#6d305329-49c7-4b",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-goal"
          ]
        },
        "lifecycleStatus": "entered-in-error",
        "description": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/goal-description",
              "code": "reference-value"
            }
          ]
        },
        "subject": {
          "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/21415"
        },
        "startDate": "2024-07-29",
        "target": [
          {
            "measure": {
              "coding": [
                {
                  "system": "urn:oid:1.2.208.176.2.1",
                  "code": "NPU03011"
                }
              ]
            }
          }
        ],
        "addresses": [
          {
            "reference": "https://careplan.cit-careplan-2818.local/fhir/ServiceRequest/1620"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://careplan.cit-careplan-2818.local/fhir/Goal/1623",
      "resource": {
        "resourceType": "Goal",
        "id": "1623",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T13:14:28.703+00:00",
          "source": "#360cc255-fef2-44",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-goal"
          ]
        },
        "lifecycleStatus": "entered-in-error",
        "description": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/goal-description",
              "code": "reference-value"
            }
          ]
        },
        "subject": {
          "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/21415"
        },
        "startDate": "2024-07-29",
        "target": [
          {
            "measure": {
              "coding": [
                {
                  "system": "urn:oid:1.2.208.176.2.1",
                  "code": "NPU03011"
                }
              ]
            }
          }
        ],
        "addresses": [
          {
            "reference": "https://careplan.cit-careplan-2818.local/fhir/ServiceRequest/1620"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Goal_version.md

`GET [base]/Goal/1631/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ2FyZVBsYW4ucmVhZCIsIkNhcmVQbGFuLnVwZGF0ZSIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiQ2FyZVBsYW4uc2VhcmNoIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Goal",
  "id": "1631",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:14:31.009+00:00",
    "source": "#8f23ace1-5cf3-4f",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-goal"
    ]
  },
  "lifecycleStatus": "accepted",
  "description": {
    "coding": [
      {
        "system": "http://ehealth.sundhed.dk/cs/goal-description",
        "code": "reference-value"
      }
    ]
  },
  "subject": {
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/39738"
  },
  "startDate": "2024-07-29",
  "target": [
    {
      "measure": {
        "coding": [
          {
            "system": "urn:oid:1.2.208.176.2.1",
            "code": "NPU03011"
          }
        ]
      }
    }
  ],
  "addresses": [
    {
      "reference": "https://careplan.cit-careplan-2818.local/fhir/ServiceRequest/1630"
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Library_search.md

`GET [base]/Library?name=e2e21e8c-a16a-49bb-9ec2-6a8e567df4c1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMTBhYzgyMzItY2QwYy00NzVkLWFlM2UtODg5NjY5ZGI4ZTJhIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkxpYnJhcnkuY3JlYXRlIiwiTGlicmFyeS51cGRhdGUiLCJMaWJyYXJ5LnJlYWQiLCJMaWJyYXJ5LnNlYXJjaCIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiTGlicmFyeSRldmFsdWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "9f741289-1176-4e5b-9987-55ac810105ac",
  "meta": {
    "lastUpdated": "2024-07-29T09:08:18.876+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://library.cit-library-866.local/fhir/Library?_format=json&_pretty=true&name=e2e21e8c-a16a-49bb-9ec2-6a8e567df4c1"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://library.cit-library-866.local/fhir/Library/32",
      "resource": {
        "resourceType": "Library",
        "id": "32",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T09:08:17.937+00:00",
          "source": "#28e6c641-7e9c-41",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-library"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-revision",
            "valueString": "de92c56c-7805-4d15-b6c6-e52abafc80d8"
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
            "extension": [
              {
                "url": "reference",
                "valueReference": {
                  "reference": "https://organization.cit-library-866.local/fhir/Organization/93648"
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
        "version": "076c3ca3-999c-4b88-b321-08d54be19d4e",
        "name": "e2e21e8c-a16a-49bb-9ec2-6a8e567df4c1",
        "status": "draft",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/library-type",
              "code": "asset-collection"
            }
          ]
        },
        "parameter": [
          {
            "use": "in",
            "type": "Address"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://library.cit-library-866.local/fhir/Library/34",
      "resource": {
        "resourceType": "Library",
        "id": "34",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T09:08:18.638+00:00",
          "source": "#3e0814dc-c97a-43",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-library"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-revision",
            "valueString": "a7110ef5-52b6-4753-93dd-145fd9ef3b20"
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
            "extension": [
              {
                "url": "reference",
                "valueReference": {
                  "reference": "https://organization.cit-library-866.local/fhir/Organization/96040"
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
        "version": "d270a638-f678-4445-9562-7118d2ff0486",
        "name": "e2e21e8c-a16a-49bb-9ec2-6a8e567df4c1",
        "status": "draft",
        "type": {
          "coding": [
            {
              "system": "http://terminology.hl7.org/CodeSystem/library-type",
              "code": "asset-collection"
            }
          ]
        },
        "parameter": [
          {
            "use": "in",
            "type": "Address"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Library_version.md

`GET [base]/Library/36/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMWQ2MmFjZjAtZTFkMS00ZmYzLTk2MjgtMDU1NWZkZjk3ZDU3IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkxpYnJhcnkuY3JlYXRlIiwiTGlicmFyeS51cGRhdGUiLCJMaWJyYXJ5LnJlYWQiLCJMaWJyYXJ5LnNlYXJjaCIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiTGlicmFyeSRldmFsdWF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Library",
  "id": "36",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T09:08:20.320+00:00",
    "source": "#bcb69855-2ba3-41",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-library"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-revision",
      "valueString": "d3f3801b-a471-4c27-be2d-40d5a9465041"
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
      "extension": [
        {
          "url": "reference",
          "valueReference": {
            "reference": "https://organization.cit-library-866.local/fhir/Organization/79826"
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
  "version": "588fac22-8445-43d4-ae9a-28dfdcf32661",
  "status": "draft",
  "type": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/library-type",
        "code": "asset-collection"
      }
    ]
  },
  "parameter": [
    {
      "use": "in",
      "type": "Address"
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Media_search.md

`GET [base]/Media?episodeOfCare=https%3A%2F%2Fcareplan.cit-measurement-1826.local%2Ffhir%2FEpisodeOfCare%2F1892`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYWIwN2ZkMzMtMDA0NC00YjFjLTk2MWEtMTg1OTQyMzEzODFlIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIk1lZGlhLnNlYXJjaCIsIlF1ZXN0aW9ubmFpcmVSZXNwb25zZS5zZWFyY2giLCJPYnNlcnZhdGlvbi5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "9845ee5f-a8d1-4bd4-a603-3eaedc100b4d",
  "meta": {
    "lastUpdated": "2024-07-29T09:16:45.267+00:00",
    "tag": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationValue",
        "code": "SUBSETTED",
        "display": "Resource encoded in summary mode"
      }
    ]
  },
  "type": "searchset",
  "total": 1
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Media_version.md

`GET [base]/Media/766/_history/1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYzcyOGM2NGMtNTM4ZC00MzBjLTk5NTAtOTBmOTI1OThlMWRjIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNvbW11bmljYXRpb24ucmVhZCIsIkNvbW11bmljYXRpb24ucGF0Y2giLCJNZWRpYS5zZWFyY2giLCJRdWVzdGlvbm5haXJlUmVzcG9uc2UucmVhZCIsIk9ic2VydmF0aW9uLnNlYXJjaCIsIiRzZWFyY2gtbWVhc3VyZW1lbnRzIiwiT2JzZXJ2YXRpb24ucmVhZCIsIiRzdWJtaXQtbWVhc3VyZW1lbnQiLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIkNvbW11bmljYXRpb24uY3JlYXRlIiwiUXVlc3Rpb25uYWlyZVJlc3BvbnNlLnNlYXJjaCIsIiRtaWdyYXRlIiwiQ29tbXVuaWNhdGlvbi5zZWFyY2giLCJQcm92ZW5hbmNlLnJlYWQiLCJNZWRpYS5yZWFkIiwiUHJvdmVuYW5jZS5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Media",
  "id": "766",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:12:27.795+00:00",
    "source": "#9a214bfb-7d1b-4d",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-media"
    ],
    "tag": [
      {
        "system": "http://ehealth.sundhed.dk/cs/ehealth-system",
        "code": "xa"
      }
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/99768"
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
      "value": "fa852f29-2a87-43fd-8a6c-5e0e7f8f1316"
    }
  ],
  "basedOn": [
    {
      "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/20800"
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
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/62250"
  },
  "createdDateTime": "2024-07-29T09:12:25+00:00",
  "content": {
    "contentType": "text",
    "url": "https://measurement.cit-measurement-1826.local/fhir/Media/$get-data?uuid=ce7a9136-6a78-4617-b093-3ac65c37fcc8"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Media.md

`GET [base]/Media/795`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMTQyNzhiNTctZDBiMS00MWI1LTg0MGQtOWQ2YTc4MGYwMjZlIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNvbW11bmljYXRpb24ucmVhZCIsIkNvbW11bmljYXRpb24ucGF0Y2giLCJNZWRpYS5zZWFyY2giLCJRdWVzdGlvbm5haXJlUmVzcG9uc2UucmVhZCIsIk9ic2VydmF0aW9uLnNlYXJjaCIsIiRzZWFyY2gtbWVhc3VyZW1lbnRzIiwiT2JzZXJ2YXRpb24ucmVhZCIsIiRzdWJtaXQtbWVhc3VyZW1lbnQiLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIkNvbW11bmljYXRpb24uY3JlYXRlIiwiUXVlc3Rpb25uYWlyZVJlc3BvbnNlLnNlYXJjaCIsIiRtaWdyYXRlIiwiQ29tbXVuaWNhdGlvbi5zZWFyY2giLCJQcm92ZW5hbmNlLnJlYWQiLCJNZWRpYS5yZWFkIiwiUHJvdmVuYW5jZS5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Media",
  "id": "795",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:12:56.411+00:00",
    "source": "#be3df97d-5d60-4e",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-media"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/3341"
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
      "value": "f428eb96-97a8-454d-832f-1c68849e827b"
    }
  ],
  "basedOn": [
    {
      "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/23599"
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
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/12886"
  },
  "createdDateTime": "2024-07-29T09:12:52+00:00",
  "content": {
    "language": "en"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Message_4.md

`GET [base]/Communication?recipient=http%3A%2F%2Flocalhost%3A8080%2Ffhir%2FPatient%2F240&_sort=-_id`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxYWFsWjNuOGV6NW5NSkt2b2hrNWdVaW82QXc5cE0tbTRJaFFRcjdyS29zIn0.eyJqdGkiOiJjYTlkMjVjZi1jMTE3LTRmMzAtOTJkYi02NjY1N2M3M2QwYzQiLCJleHAiOjE1NzMwMzI5MDQsIm5iZiI6MCwiaWF0IjoxNTczMDMyNjA0LCJpc3MiOiJodHRwczovL3NhbWwuZnV0LnRyaWZvcmsuY29tL2F1dGgvcmVhbG1zL25lbWxvZ2luIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImFkMmQ3OWI2LTQ1OTctNDFkZi04ZDkwLTE4NWIzMGQzYWQ1OSIsInR5cCI6IkJlYXJlciIsImF6cCI6InBhdGllbnRfbW9jayIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6ImY0MzQ5MzM5LTllMTAtNDA3NC1iZmU3LTRkZjNhNjNjNzA4MyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcGF0aWVudF9jdXN0b20gcHJvZmlsZSIsInVzZXJfdHlwZSI6IlBBVElFTlQiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwidXNlcl9pZCI6Imh0dHA6Ly9wYXRpZW50LmVoZWFsdGgtcHVibGljL2ZoaXIvUGF0aWVudC8yNTIiLCJjb250ZXh0Ijp7InBhdGllbnRfaWQiOiJodHRwOi8vcGF0aWVudC5laGVhbHRoLXB1YmxpYy9maGlyL1BhdGllbnQvMjUyIn0sInByZWZlcnJlZF91c2VybmFtZSI6ImN1Y3VtYmVyX3BhdGllbnQxIn0.nO5m1dGqM6n9lmdHwvuLUuZOqwk10HkTvwXHozm9YV8f57FOkT4aagpFb5oKmNWaS3rM2sqzzFWkY-4IwMdA9RxtzDG2QsUCrx9gMTwlH-xCe6LDq30yXLDjS2Pmj2A0x5YoMQut4hM-gsKnvX-oe2B96_A-SCub7oP8pXeMGmarMLrcY3X_ebyB4bgYrJq39DF6fLAAvcdwVCgpMWavpjOzNbk1_JvLR8WgM3tuNdG3xdH5SC31v7NiRd2N54H-7L_3lVBLFP4BQpYV2PYgkOlWTp7OPLAljDzXjBlUVAIVgKKcmabQudf5RDqsnzz_iI5gpojzIMJFhulEqDHP6g
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/4.0.0 (FHIR Client; FHIR 3.0.1/DSTU3; apache)
Accept-Encoding: gzip
```

__Body__:
```json

```

__Response__
```json
{
  "resourceType" : "Bundle",
  "id" : "bff637bc-2b7a-4e75-b0a6-423b7cc68aa7",
  "meta" : {
    "lastUpdated" : "2019-11-06T10:30:10.545+01:00"
  },
  "type" : "searchset",
  "total" : 30,
  "link" : [ {
    "relation" : "self",
    "url" : "http://localhost:8080/fhir/Communication?_sort=-_id&recipient=http%3A%2F%2Flocalhost%3A8080%2Ffhir%2FPatient%2F240"
  }, {
    "relation" : "next",
    "url" : "http://localhost:8080/fhir?_getpages=bff637bc-2b7a-4e75-b0a6-423b7cc68aa7&_getpagesoffset=20&_count=20&_pretty=true&_bundletype=searchset"
  } ],
  "entry" : [ {
    "fullUrl" : "http://localhost:8080/fhir/Communication/318",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "318",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#264e1a0beeaf1f13"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:30:10.380+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "f7141e61-6693-49c2-b008-07531a6dedea"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "sender" : {
        "reference" : "http://organization.fut.trifork.com/fhir/Practitioner/36157"
      },
      "payload" : [ {
        "contentString" : "SOME PAYLOAD OF A MESSAGE"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/316",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "316",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#91ef771e8210f908"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:30:09.265+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "35cdabf3-f51f-447d-85a9-b3e9f5c4dc7d"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium",
          "code" : "eboks"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/315",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "315",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#0cbd52413c08c790"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:30:08.744+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "789174eb-429f-4165-862c-2f1ae3b2e760"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium",
          "code" : "nemsms"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/314",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "314",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#a36361da3308e811"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:30:08.119+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "a3a6c056-e6b8-4ceb-b210-3aa4adaa1e51"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "advice"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/313",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "313",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#e268be02abd9c071"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:30:07.724+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "452d1f75-773a-49be-804d-b7fbd1f57098"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "notification"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/312",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "312",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#3462ddb6db5233d5"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:30:07.307+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "749d4807-e342-4c7f-84e6-e28b20ea9502"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/303",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "303",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#2ba8fc8cbdc26238"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:25:19.637+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "fb1df2b2-400a-4e21-b08d-0d7304ad202b"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "sender" : {
        "reference" : "http://organization.fut.trifork.com/fhir/Practitioner/36157"
      },
      "payload" : [ {
        "contentString" : "SOME PAYLOAD OF A MESSAGE"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/301",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "301",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#d136c1513cc371a6"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:25:18.452+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "9870eedf-30f1-4049-9a2e-58ee4b444b7e"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium",
          "code" : "eboks"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/300",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "300",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#346968a87a26cefe"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:25:17.296+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "c124eaba-db7f-4619-99f3-d72b1a96e1d8"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium",
          "code" : "nemsms"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/299",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "299",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#c9e03089cc0f52c7"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:25:16.357+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "b0122cc8-1acd-4dba-8bbd-435b43d16774"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "advice"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/298",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "298",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#f69c56ff316b6f1f"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:25:15.854+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "8e697a57-7bba-4c17-8323-6a738f6940ea"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "notification"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/297",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "297",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#a5fb62ff0093737f"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:25:15.343+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "05be3ca0-b7ac-470f-bc8d-eb7be947ec8c"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/288",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "288",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#a3c96fa3d377a731"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:22:51.411+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "a3bdce63-fdf6-42c1-a058-f1582f08e415"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "sender" : {
        "reference" : "http://organization.fut.trifork.com/fhir/Practitioner/36157"
      },
      "payload" : [ {
        "contentString" : "SOME PAYLOAD OF A MESSAGE"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/286",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "286",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#5432e00851eb711e"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:22:50.157+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "d4cc1e2e-cbf2-46d0-8652-55d99b6ef9ae"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium",
          "code" : "eboks"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/285",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "285",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#05f2c40e74a028da"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:22:49.503+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "3c875e88-cfdb-47e0-a989-1cc409271677"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium",
          "code" : "nemsms"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/284",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "284",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#e5297ccec44097d7"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:22:48.654+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "d9f19bd2-de71-4a71-9686-00cd1114b932"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "advice"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/283",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "283",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#c81b12fc0075b3d5"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:22:48.158+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "f8b52826-3f65-4492-b869-9e48deab7323"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "notification"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/282",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "282",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#f71026647d9528cb"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:22:47.408+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "ff7aac99-e42a-4457-97e9-907dd5a9bbdc"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/274",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "274",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#2e83e9f2937893a6"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:20:11.166+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "b1499c6c-a40b-48ba-bd70-be76166a8511"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "sender" : {
        "reference" : "http://organization.fut.trifork.com/fhir/Practitioner/36157"
      },
      "payload" : [ {
        "contentString" : "SOME PAYLOAD OF A MESSAGE"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  }, {
    "fullUrl" : "http://localhost:8080/fhir/Communication/272",
    "resource" : {
      "resourceType" : "Communication",
      "id" : "272",
      "meta" : {
        "extension" : [ {
          "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
          "valueUri" : "#e34bb676304a6107"
        } ],
        "versionId" : "1",
        "lastUpdated" : "2019-11-06T10:20:09.747+01:00",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
        "valueString" : "2738b3ee-43ee-464a-bfba-6c3fa0fc1b75"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
        "valueString" : "Sample title..."
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
        "valueCoding" : {
          "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
          "code" : "activate"
        }
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
        "valueCode" : "routine"
      }, {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication-senderCareTeam",
        "valueReference" : {
          "reference" : "http://organization.fut.trifork.com/fhir/CareTeam/35102"
        }
      } ],
      "status" : "completed",
      "category" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-category",
          "code" : "message"
        } ]
      } ],
      "medium" : [ {
        "coding" : [ {
          "system" : "http://ehealth.sundhed.dk/message-medium",
          "code" : "eboks"
        } ]
      } ],
      "recipient" : [ {
        "reference" : "Patient/240"
      } ],
      "payload" : [ {
        "contentString" : "MESSAGE PAYLOAD"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Observation_search.md

`GET [base]/Observation?episodeOfCare=https%3A%2F%2Fcareplan.cit-measurement-1826.local%2Ffhir%2FEpisodeOfCare%2F1892`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYWIwN2ZkMzMtMDA0NC00YjFjLTk2MWEtMTg1OTQyMzEzODFlIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIk1lZGlhLnNlYXJjaCIsIlF1ZXN0aW9ubmFpcmVSZXNwb25zZS5zZWFyY2giLCJPYnNlcnZhdGlvbi5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "b4d9a92a-d2c8-470c-a011-947d814ed32b",
  "meta": {
    "lastUpdated": "2024-07-29T09:16:45.153+00:00",
    "tag": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationValue",
        "code": "SUBSETTED",
        "display": "Resource encoded in summary mode"
      }
    ]
  },
  "type": "searchset",
  "total": 1
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Observation_version.md

`GET [base]/Observation/835/_history/1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNzg4YWQ0YzEtZmJkOC00ZWZlLTg3OTItNDQ5M2Y0NmM2NGJjIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIk9ic2VydmF0aW9uLnJlYWQiXX0sImNvbnRleHQiOnsiY2FyZV90ZWFtX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LW1lYXN1cmVtZW50LTE4MjYubG9jYWwvZmhpci9DYXJlVGVhbS8zNTIzOCIsImVwaXNvZGVfb2ZfY2FyZV9pZCI6Imh0dHBzOi8vY2FyZXBsYW4uY2l0LW1lYXN1cmVtZW50LTE4MjYubG9jYWwvZmhpci9FcGlzb2RlT2ZDYXJlLzY3MDQ4IiwidGVhbV9vbl9lb2MiOnRydWV9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Observation",
  "id": "835",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:14:26.049+00:00",
    "source": "#96b2235f-5f9f-44",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-observation"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/67048"
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
      "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/87704"
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
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/21555"
  },
  "effectivePeriod": {
    "start": "2024-07-29T09:14:25+00:00",
    "end": "2024-07-29T09:14:25+00:00"
  },
  "performer": [
    {
      "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/21555"
    }
  ],
  "device": {
    "reference": "https://device.cit-measurement-1826.local/fhir/Device/84946"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Observation.md

`GET [base]/Observation/812`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJG1pZ3JhdGUiLCJPYnNlcnZhdGlvbi5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJQcm92ZW5hbmNlLnJlYWQiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Observation",
  "id": "812",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-10-28T09:05:47.433+00:00",
    "source": "#9059fee3-5205-4f",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-observation"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1917.local/fhir/EpisodeOfCare/33691"
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
      "reference": "https://careplan.cit-measurement-1917.local/fhir/ServiceRequest/37005"
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
    "reference": "https://patient.cit-measurement-1917.local/fhir/Patient/48370"
  },
  "effectivePeriod": {
    "start": "2024-10-28T09:05:47+00:00",
    "end": "2024-10-28T09:05:47+00:00"
  },
  "performer": [
    {
      "reference": "https://organization.cit-measurement-1917.local/fhir/Organization/3261"
    }
  ],
  "device": {
    "reference": "https://device.cit-measurement-1917.local/fhir/Device/68844"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Organization_search.md

`GET [base]/Organization?name=defaultTestFactory-f04c326b-a52d-4e80-b453-db58618c5a5c&_count=1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNThkOGNmOGUtNjdmOC00ODRmLWIwZGQtNGMwZmY0OTBkMzg1IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbXX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "c1a803d4-6852-419f-a7f3-db4f5a645c33",
  "meta": {
    "lastUpdated": "2024-07-29T09:17:37.084+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://organization.cit-organization-1209.local/fhir/Organization?_count=1&_format=json&_pretty=true&name=defaultTestFactory-f04c326b-a52d-4e80-b453-db58618c5a5c"
    },
    {
      "relation": "next",
      "url": "https://organization.cit-organization-1209.local/fhir?_getpages=c1a803d4-6852-419f-a7f3-db4f5a645c33&_getpagesoffset=1&_count=1&_format=json&_pretty=true&_bundletype=searchset"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://organization.cit-organization-1209.local/fhir/Organization/371",
      "resource": {
        "resourceType": "Organization",
        "id": "371",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T09:17:35.590+00:00",
          "source": "#415a6dd6-54cf-42",
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
            "use": "official",
            "system": "urn:oid:2.16.840.1.113883.2.24.1.1",
            "value": "11111111",
            "period": {
              "start": "2024-07-29T09:17:35+00:00"
            }
          }
        ],
        "name": "defaultTestFactory-f04c326b-a52d-4e80-b453-db58618c5a5c"
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Organization_traverse-to-sor.md

`GET [base]/Organization/379/$traverse-to-sor`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMmNjNjIxNzgtNjBlMy00MGYyLWE0NTAtYzZhMTFhMzgwOWJiIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Organization",
  "id": "376",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:17:39.165+00:00",
    "source": "#98328243-e4ab-4d",
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
        "start": "2024-07-29T09:17:39+00:00"
      }
    }
  ],
  "name": "defaultTestFactory-91c42144-8ec6-47f3-9016-89b708ea8220"
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Organization_version.md

`GET [base]/Organization/396/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiN2FiYTg5OGUtNGUwYS00MDY5LWE3ODYtYmU2OTAwZWU1NzU0IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Organization",
  "id": "396",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T09:18:09.916+00:00",
    "source": "#ca8b6e66-0444-4a",
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
      "use": "official",
      "system": "urn:oid:2.16.840.1.113883.2.24.1.1",
      "value": "11111111",
      "period": {
        "start": "2024-07-29T09:18:07+00:00"
      }
    }
  ],
  "name": "defaultTestFactory-f163fe71-acf3-423e-bf41-7d143ebed1f8",
  "contact": [
    {
      "purpose": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
            "code": "HR"
          }
        ]
      },
      "name": {
        "use": "official",
        "text": "Mr John Snow Junior",
        "family": "Snow",
        "given": [
          "John"
        ],
        "period": {
          "start": "2017-01-01",
          "end": "2020-01-01"
        }
      },
      "telecom": [
        {
          "extension": [
            {
              "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomCustodian",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://ehealth.sundhed.dk/cs/contactpoint-custodian",
                    "code": "SOR"
                  }
                ]
              }
            },
            {
              "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomSystem",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://ehealth.sundhed.dk/cs/contactpoint-system",
                    "code": "TBD"
                  }
                ]
              }
            },
            {
              "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomValue",
              "valueString": "john.snow@gmail.com"
            }
          ],
          "use": "home",
          "rank": 1,
          "period": {
            "start": "2017-01-01",
            "end": "2020-01-01"
          }
        }
      ],
      "address": {
        "use": "home",
        "type": "physical",
        "text": "Westeros, The North, Winterfell, John Snow street, 1/14",
        "line": [
          "John Snow street, 1/14"
        ],
        "city": "Winterfell",
        "district": "Winterfell",
        "state": "The North",
        "postalCode": "79070",
        "country": "Westeros",
        "period": {
          "start": "2017-01-01",
          "end": "2020-01-01"
        }
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Organization.md

`GET [base]/Organization/403`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMjk1MWUzYjAtOGY0Mi00MjAyLTkzNjItZTYyN2E4YzAzMjlkIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Organization",
  "id": "403",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T09:18:42.980+00:00",
    "source": "#575b5452-11f4-45",
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
      "use": "official",
      "system": "urn:oid:2.16.840.1.113883.2.24.1.1",
      "value": "11111111",
      "period": {
        "start": "2024-07-29T09:18:40+00:00"
      }
    }
  ],
  "name": "defaultTestFactory-fff2a4ed-e91a-44fb-9dfc-2007c1b61232",
  "contact": [
    {
      "name": {
        "period": {
          "end": "2021-01-01"
        }
      },
      "telecom": [
        {
          "extension": [
            {
              "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomCustodian",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://ehealth.sundhed.dk/cs/contactpoint-custodian",
                    "code": "SOR"
                  }
                ]
              }
            },
            {
              "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomSystem",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://ehealth.sundhed.dk/cs/contactpoint-system",
                    "code": "TBD"
                  }
                ]
              }
            },
            {
              "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomValue",
              "valueString": "434c625b-64d2-442e-a8e3-1e895ee9187b"
            }
          ]
        }
      ]
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Patient_1.md

`GET [base]/Patient/179103`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```

__Body__:
```json

```

__Response__
```json
{
  "resourceType" : "Patient",
  "id" : "179103",
  "meta" : {
    "versionId" : "62",
    "lastUpdated" : "2021-09-09T07:08:49.786+00:00",
    "source" : "#ad5cd18e-b7c0-4d",
    "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient" ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tjalfe <b>MATHIASEN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>0506504003</td></tr><tr><td>Address</td><td><span>Nordre Ringgade 1 </span><br/><span>Harboøre </span><span>DK </span></td></tr><tr><td>Date of birth</td><td><span>05 June 1950</span></td></tr></tbody></table></div>"
  },
  "extension" : [ {
    "url" : "http://hl7.org/fhir/StructureDefinition/patient-interpreterRequired",
    "valueBoolean" : true
  } ],
  "identifier" : [ {
    "use" : "official",
    "system" : "urn:oid:1.2.208.176.1.2",
    "value" : "0506504003"
  } ],
  "name" : [ {
    "use" : "official",
    "family" : "Mathiasen",
    "given" : [ "Tjalfe" ]
  } ],
  "telecom" : [ {
    "system" : "other",
    "value" : "NemSMS"
  } ],
  "gender" : "male",
  "birthDate" : "1950-06-05",
  "address" : [ {
    "extension" : [ {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-municipality-code",
      "valueCoding" : {
        "system" : "http://danmarksadresser.dk/kommunekode",
        "code" : "0410"
      }
    }, {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-regional-subdivision-code",
      "valueCodeableConcept" : {
        "coding" : [ {
          "system" : "https://www.iso.org/obp/ui/#iso:code:3166:DK",
          "code" : "DK-83"
        } ]
      }
    } ],
    "use" : "home",
    "type" : "postal",
    "line" : [ "Nordre Ringgade 1" ],
    "city" : "Harboøre",
    "postalCode" : "8000",
    "country" : "DK"
  } ],
  "maritalStatus" : {
    "coding" : [ {
      "system" : "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
      "code" : "U",
      "display" : "unmarried"
    } ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_PlanDefinition_export.md

`GET [base]/PlanDefinition/201/$export`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUGxhbkRlZmluaXRpb24uY3JlYXRlIiwiQWN0aXZpdHlEZWZpbml0aW9uLnVwZGF0ZSIsIkFjdGl2aXR5RGVmaW5pdGlvbi5yZWFkIiwiUGxhbkRlZmluaXRpb24uc2VhcmNoIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJQbGFuRGVmaW5pdGlvbi51cGRhdGUiLCJQbGFuRGVmaW5pdGlvbi5yZWFkIiwiRG9jdW1lbnRSZWZlcmVuY2UucmVhZCIsIlBsYW5EZWZpbml0aW9uJGFwcGx5Il19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
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
  "data": "UEsDBBQACAgIAKlp/1gAAAAAAAAAAAAAAAA5AAAAUGxhbkRlZmluaXRpb25fMjAxXzIwMjRfMDdfMzFfMTNfMTNfMTgvUGxhbkRlZmluaXRpb24vMjAx3VPLTsMwEPwXcyTvhDbNDZULJxCPE+rBOJvGwrUje1MoVf6ddUMfQogLByQkS3F2Jjuzo+yWWXCmtwIeNh2wit0qrq+gkVqiNJoFTNZUzZKUritAzqotW4N1BF57xNcVd/jY1Rxh5GZFmEzDPH1I88qfaVTm+XmSVElC7FGOiGfJpBHZtEjDaTZJw6IhsLOmkYrQJ9YidlUcQwtcYRu5Xtct1FH9EjettPE92l5gb+Hods8NOxqiPg6xGAIGbwjau6bWW9ZbRQZ+obAytWwk2NAacvt9ewsNWNDC42uuerg7FCjEIzoaceTE2CXX8p17qUhI3A0SppMijZQRXI2+bk5YcTkr85INQ3BQHQ3tBOemBv6s6Ek6HXpZQcb1cufSbRzC6scchIu/TkoNvGXzqsGyYTHQCf5ToLPyosj+IFBhQt5ja/ahLoL9nvkti3abgxx7R69coFz7b/3lM6Lj/z7n2mhJ0xHz0jMlbk4Sz2gLqf8HUEsHCEb0CwN0AQAA+gMAAFBLAwQUAAgICACpaf9YAAAAAAAAAAAAAAAAOQAAAFBsYW5EZWZpbml0aW9uXzIwMV8yMDI0XzA3XzMxXzEzXzEzXzE4L09yZ2FuaXphdGlvbi84OTgzOLWSvU7DMBSFXwV5rpO2KW2SFRYWOoQNdXDsm8ZqYkf2dUOo8u7YgSAQiKlM1v07n499L8SA1c5weBo6IDnZmyNT8pWh1IosiBQ+l2ZpkvqgBWQkv5AzGOvLD6G28vnO6Eo2fvqZ1IhdHsdQA2uwjqxTogYRiVNc1dLEBRrH0Rm4h0oqGSBzL9VfyYdxQeAFQQWQF74QZxqPu5I+fffs735mjYM7LYCVjT8Vhw6DR66FVMeJbAeL0P4J5zb+Xd7LhFdtmXKsIeNhHBdXtzIoXhs9xwUydPb/nH2nUTvjPpw+aiw+W0BMlg9hj0ChrCSYn2DryX3fRyfdlhID1OJMtfMiTm78gEjYepctl3S3KTndZMktzZJVRddlIlJWbrdptiKBqFgb+ovpJ272vfLo8Q1QSwcIRkk4CTABAADvAgAAUEsDBBQACAgIAKlp/1gAAAAAAAAAAAAAAAA5AAAAUGxhbkRlZmluaXRpb25fMjAxXzIwMjRfMDdfMzFfMTNfMTNfMTgvT3JnYW5pemF0aW9uLzk4NTQytZI9T8MwEIb/CvJcN0pJorZrWVjoEDbU4WpfGquJHdnnhlLlv2MHgkAgpnay7ut9/Np3YRad8Vbg87lDtmZbewCt3oCU0WzGlAy51TLPFiFokYCtL+yE1oXyY6ylId9ZU6kmTL+wmqhbJwnWCA3Vc+e1rFHO5TGpamWTkqwX5C0+YKW0ipCpl5vv5N0wY/hKqCMoCF+Yt03AXUmff3gOdz9B43FjJMK+CacW2FH0KIxU+jCS3dkRtv/ChUv+lg8y8VVb0B4aNuyGYXZ1K2ctamumuCQg727n7CeNuwn36fTJUPnVgnK0vIt7hJpUpdD+BrtA7vt+fjTtXlGEOpqoblrE0U0YgPsK9sUq5cusWPIszyq+ggXwfJEXkBeYYipYJGpoY385/sTdxvBtrwN9eAdQSwcIEkn93jEBAADyAgAAUEsDBBQACAgIAKlp/1gAAAAAAAAAAAAAAAA9AAAAUGxhbkRlZmluaXRpb25fMjAxXzIwMjRfMDdfMzFfMTNfMTNfMTgvQWN0aXZpdHlEZWZpbml0aW9uLzIwMN1VS4/TMBD+L+ZInTjpI49bBRcusLC7J9SDa082Fo4dbKdQVv3vjJO+hJa9sAIJKVIizyd/j3HGj8SBt4MTcLfvgdRkLYLaqbB/C40yKihryIwoiZWcMfzsIHBSP5IdOI/Fd7GS4brmPtz3kgeYsPmCsoLOs7tsXsenSFZF9pqxetxlokTgq2orWVUWDV3KKqOLLRZ7ZxulsfqZtCH0dZpCC1yHNvGDkS3IRH5Jm1a59Da4QYTBwUXtCUv50Yi8GNkcZgS+BzBROW7/SAanUcQfsPiWO2UebqxWYo/ad1wP8MZK4FuNbyOgDzEuYSXCRk6/9wG6Z2mFTzvgHik7MOFEQvvIosAjD+4X4zP2dqqRw+ZwmL2coXWPXUAzf8cYP7I94bDjZuD6xex1KLdR4KizeMKePg4OGnCADk+2P50X0PClOgnxqMS6B27UDx6pEqEC7TU3NFstskRbwfWk68MVKi2rcl6SK1NHQS+X8y9Oj3nabwbcGOfm/wq0KpeL/B8EKizlQ2jtKdTN7DQb42RM4rQzvItIJuZyuai2tJLbBkfdHGhZVoKWcsmAyVWTF3GS+sDD4BE/TrDIFGyvxKj0GdEBXKeM1fZhn7S6SDDCNNq+HXHpZQzSabuzgeCAh/g7kkm9Ax2n+NoF1aCEkSxMl4OwXW89SGobMjvfHFd9+zqAjxyGKwe/b9zHa1ha5BXDzm1Oip62OThTWyXrLMmTnJVJVqzwK7v4eH9zz+Ysy8Y+/ARQSwcISc2bvjUCAADYBgAAUEsDBBQACAgIAKlp/1gAAAAAAAAAAAAAAAA6AAAAUGxhbkRlZmluaXRpb25fMjAxXzIwMjRfMDdfMzFfMTNfMTNfMTgvUXVlc3Rpb25uYWlyZS83MjkwMt1Wy27bMBD8F54t2nrYknUr2h5yCtIEvRRGwFArizBFKny4SQP/e5fyO3GCujBQoBfLJEezM0NyoRdiwGpvONw9d0BKcuPBOqGVYsIAGRBR4WSeTEcJDlpwjJQvZAnGIuYqrMU43xldC4mv/yCNc105HEIDTLqGWq+qBipaLYZ1I8zw1hnPnTfwBWqhRKi0xUaPR6VnqwGBJwcqVELmF+KNxHqXKhC5YHhAlkx6+KwrYA8Sn4pD54JHriuh5n1h+2wdtB/W5nb4lt0iPdL0sd6Q1Wy1GlzARYvCagEmMloGA6dCMlCDAfSyNfhtN4HW9qtrIRaVaDNnSvxioRTlwkWdZCqKJ1lMpeZMrnVdH6CGxbRIC3JgaiPoYom+drrJUv9UYPo4Z/9XoNNinCX/IFCuI+Zdoy8ZKrSd1M+AF0G4vQl8o1d83Gbu4/uvG/hdj17NQuMB5Xq1xwa9UaUAV5em5mU6LSZb7s2a96IqExpPaJGNaEzjOC2KlGZ0kiU0pUnoV8xaMQ+HCEM8rPNHOYpqb1IthdGqRYYDFUebjdsZ3Gw6ZuiXdIRYxdoemo4YxNM8SosRRNk4z6OizooojqdZOhpXWZFniLaOOW8Rz7gTy74t9yoxlw9aZCNziqfw/b067litUNece2O3Vq6Ug3mIJXlzIs6lZk/vUOfnU6PO733Sr7niv+BiT6e5xhe5BMcp1ADVA+OLd1rM8lDI7qKsZ/dq0P1H+4OG3ixnJ670mRtoJV4Tc+ugOx1XEs64FGrRfxKEP4PdzydEu/XHhdjgB9gxHz0SIxprQxh3wJxdD1Hvb1BLBwgxx7U4ZAIAAJgIAABQSwECFAAUAAgICACpaf9YRvQLA3QBAAD6AwAAOQAAAAAAAAAAAAAAAAAAAAAAUGxhbkRlZmluaXRpb25fMjAxXzIwMjRfMDdfMzFfMTNfMTNfMTgvUGxhbkRlZmluaXRpb24vMjAxUEsBAhQAFAAICAgAqWn/WEZJOAkwAQAA7wIAADkAAAAAAAAAAAAAAAAA2wEAAFBsYW5EZWZpbml0aW9uXzIwMV8yMDI0XzA3XzMxXzEzXzEzXzE4L09yZ2FuaXphdGlvbi84OTgzOFBLAQIUABQACAgIAKlp/1gSSf3eMQEAAPICAAA5AAAAAAAAAAAAAAAAAHIDAABQbGFuRGVmaW5pdGlvbl8yMDFfMjAyNF8wN18zMV8xM18xM18xOC9Pcmdhbml6YXRpb24vOTg1NDJQSwECFAAUAAgICACpaf9YSc2bvjUCAADYBgAAPQAAAAAAAAAAAAAAAAAKBQAAUGxhbkRlZmluaXRpb25fMjAxXzIwMjRfMDdfMzFfMTNfMTNfMTgvQWN0aXZpdHlEZWZpbml0aW9uLzIwMFBLAQIUABQACAgIAKlp/1gxx7U4ZAIAAJgIAAA6AAAAAAAAAAAAAAAAAKoHAABQbGFuRGVmaW5pdGlvbl8yMDFfMjAyNF8wN18zMV8xM18xM18xOC9RdWVzdGlvbm5haXJlLzcyOTAyUEsFBgAAAAAFAAUACAIAAHYKAAAAAA=="
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_PlanDefinition_search.md

`GET [base]/PlanDefinition?name=7e7c7896-da6b-49c4-a485-c0dcd169aac0&_include%3Aiterate=*`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQWN0aXZpdHlEZWZpbml0aW9uLnJlYWQiLCJQbGFuRGVmaW5pdGlvbi5zZWFyY2giLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIlBsYW5EZWZpbml0aW9uLnJlYWQiLCJEb2N1bWVudFJlZmVyZW5jZS5yZWFkIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "5c0f7d9b-2e35-4427-a5a7-c61dd688c633",
  "meta": {
    "lastUpdated": "2024-07-31T13:14:30.812+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://plan.cit-plan-1641.local/fhir/PlanDefinition?_format=json&_include%3Aiterate=*&_pretty=true&name=7e7c7896-da6b-49c4-a485-c0dcd169aac0"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://plan.cit-plan-1641.local/fhir/PlanDefinition/313",
      "resource": {
        "resourceType": "PlanDefinition",
        "id": "313",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-31T13:14:30.627+00:00",
          "source": "#f3ba86ee-75af-41",
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
                  "reference": "https://organization.cit-plan-1641.local/fhir/Organization/50289"
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
        "name": "7e7c7896-da6b-49c4-a485-c0dcd169aac0",
        "status": "active",
        "relatedArtifact": [
          {
            "type": "predecessor",
            "display": "38473df1-86c0-4f3d-b454-79966def48e0",
            "resource": "https://plan.cit-plan-1641.local/fhir/DocumentReference/312"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://plan.cit-plan-1641.local/fhir/DocumentReference/312",
      "resource": {
        "resourceType": "DocumentReference",
        "id": "312",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-31T13:14:30.445+00:00",
          "source": "#0384ce3e-fda9-47",
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
        "date": "2024-07-31T13:14:30.438+00:00",
        "content": [
          {
            "attachment": {
              "url": "http://some.com/"
            }
          }
        ]
      },
      "search": {
        "mode": "include"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_PlanDefinition_version.md

`GET [base]/PlanDefinition/470/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOTEzYzQ4YzUtMWNmZC00NTE3LWE2YjUtMTE1MGMyN2E5NmVhIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlBsYW5EZWZpbml0aW9uLnVwZGF0ZSIsIlBsYW5EZWZpbml0aW9uLnJlYWQiXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXBsYW4tMTY0MS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi85NjUwMCIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBBVElFTlQifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "PlanDefinition",
  "id": "470",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-31T13:16:48.937+00:00",
    "source": "#5fb527e8-0e5f-45",
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
            "reference": "https://organization.cit-plan-1641.local/fhir/Organization/96500"
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base",
      "valueIdentifier": {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:9f4406af-ee5e-4b23-ad72-3314016a81b6",
        "assigner": {
          "identifier": {
            "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
            "value": "cit-plan-1641"
          }
        }
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base-environment",
      "valueIdentifier": {
        "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
        "value": "cit-plan-1641"
      }
    }
  ],
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:uuid:3f953ca1-1341-4c94-9c3d-74268d156c22"
    }
  ],
  "version": "1.0",
  "status": "retired"
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_PlanDefinition.md

`GET [base]/PlanDefinition/349`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUGxhbkRlZmluaXRpb24uY3JlYXRlIiwiQWN0aXZpdHlEZWZpbml0aW9uLnVwZGF0ZSIsIiRtaWdyYXRlIiwiQWN0aXZpdHlEZWZpbml0aW9uLnJlYWQiLCJQbGFuRGVmaW5pdGlvbi5zZWFyY2giLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIlBsYW5EZWZpbml0aW9uLnVwZGF0ZSIsIlBsYW5EZWZpbml0aW9uLnJlYWQiLCJQbGFuRGVmaW5pdGlvbiRhcHBseSIsIkRvY3VtZW50UmVmZXJlbmNlLnJlYWQiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "PlanDefinition",
  "id": "349",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-31T13:15:43.525+00:00",
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
            "reference": "https://organization.cit-plan-1641.local/fhir/Organization/37081"
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base",
      "valueIdentifier": {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:1dbcbf9c-bccd-4443-87c5-42acf008c409",
        "assigner": {
          "identifier": {
            "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
            "value": "cit-plan-1641"
          }
        }
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base-environment",
      "valueIdentifier": {
        "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
        "value": "cit-plan-1641"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-employee-title",
      "valueString": "Navn"
    }
  ],
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:uuid:9c347993-f944-4ded-bf44-d90bf0ef963e"
    }
  ],
  "version": "1.0",
  "name": "Navn",
  "status": "draft"
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Practitioner_search.md

`GET [base]/Practitioner?identifier=urn%3Aoid%3A1.2.208.176.1.2%7Ca784075b-9bd7-4ac5-927f-5ddd3872afc7`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMzE3MWY4NjYtN2NkMi00YjcxLWE3YWYtZGJkNjgxOGUwN2ZmIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlByYWN0aXRpb25lci5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "d9e3f5ae-42b5-443a-82e9-91ba6273759a",
  "meta": {
    "lastUpdated": "2024-07-29T09:18:57.123+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://organization.cit-organization-1209.local/fhir/Practitioner?_format=json&_pretty=true&identifier=urn%3Aoid%3A1.2.208.176.1.2%7Ca784075b-9bd7-4ac5-927f-5ddd3872afc7"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://organization.cit-organization-1209.local/fhir/Practitioner/423",
      "resource": {
        "resourceType": "Practitioner",
        "id": "423",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T09:18:56.799+00:00",
          "source": "#a81eecb5-7d4a-43",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-practitioner"
          ]
        },
        "identifier": [
          {
            "system": "urn:oid:1.2.208.176.1.2",
            "value": "a784075b-9bd7-4ac5-927f-5ddd3872afc7"
          }
        ],
        "name": [
          {
            "family": "d1088a2b-cfc5-4a7f-af92-147197346e33"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://organization.cit-organization-1209.local/fhir/Practitioner/425",
      "resource": {
        "resourceType": "Practitioner",
        "id": "425",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T09:18:57.043+00:00",
          "source": "#fc4f1426-1bde-98",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-practitioner"
          ]
        },
        "identifier": [
          {
            "system": "urn:oid:1.2.208.176.1.2",
            "value": "a784075b-9bd7-4ac5-927f-5ddd3872afc7"
          }
        ],
        "name": [
          {
            "family": "e1ef9add-30c8-48d4-bbaa-577a46e5a27a"
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Practitioner_version.md

`GET [base]/Practitioner/428/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMjVmODAyM2ItYjMxYi00MGY5LTg3NWYtYzM2MDkzOTgxYTg0IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlByYWN0aXRpb25lci53cml0ZSIsIlByYWN0aXRpb25lci5yZWFkIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Practitioner",
  "id": "428",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T09:18:57.691+00:00",
    "source": "#3e3d53d2-bab8-4f",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-practitioner"
    ]
  },
  "name": [
    {
      "family": "4c7ae386-47bd-4db8-b342-288764e91040"
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_PractitionerRole_search.md

`GET [base]/PractitionerRole?practitioner=https%3A%2F%2Forganization.cit-organization-1209.local%2Ffhir%2FPractitioner%2F237%2F_history%2F1&organization=https%3A%2F%2Forganization.cit-organization-1209.local%2Ffhir%2FOrganization%2F238%2F_history%2F1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUHJhY3RpdGlvbmVyUm9sZS5jcmVhdGUiLCJQcmFjdGl0aW9uZXJSb2xlLnNlYXJjaCIsIlByYWN0aXRpb25lclJvbGUucmVhZCIsIlByYWN0aXRpb25lclJvbGUuZGVsZXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJQcmFjdGl0aW9uZXJSb2xlLnVwZGF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "8b59f41c-9ede-448d-86c8-e26890570a99",
  "meta": {
    "lastUpdated": "2024-07-29T09:16:26.029+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://organization.cit-organization-1209.local/fhir/PractitionerRole?_format=json&_pretty=true&organization=https%3A%2F%2Forganization.cit-organization-1209.local%2Ffhir%2FOrganization%2F238%2F_history%2F1&practitioner=https%3A%2F%2Forganization.cit-organization-1209.local%2Ffhir%2FPractitioner%2F237%2F_history%2F1"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://organization.cit-organization-1209.local/fhir/PractitionerRole/239",
      "resource": {
        "resourceType": "PractitionerRole",
        "id": "239",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T09:16:25.886+00:00",
          "source": "#4a1ff34f-112d-47",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-practitionerrole"
          ]
        },
        "active": true,
        "practitioner": {
          "reference": "https://organization.cit-organization-1209.local/fhir/Practitioner/237"
        },
        "organization": {
          "reference": "https://organization.cit-organization-1209.local/fhir/Organization/238"
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_PractitionerRole_version.md

`GET [base]/PractitionerRole/240/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUHJhY3RpdGlvbmVyUm9sZS5jcmVhdGUiLCJQcmFjdGl0aW9uZXJSb2xlLnNlYXJjaCIsIlByYWN0aXRpb25lclJvbGUucmVhZCIsIlByYWN0aXRpb25lclJvbGUuZGVsZXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJQcmFjdGl0aW9uZXJSb2xlLnVwZGF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "PractitionerRole",
  "id": "240",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T09:16:26.338+00:00",
    "source": "#770f40ba-1817-4a",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-practitionerrole"
    ]
  },
  "active": false
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Provenance_search.md

`GET [base]/Provenance?target=https%3A%2F%2Forganization.cit-organization-1209.local%2Ffhir%2FOrganization%2F411%2F_history%2F1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJQcm92ZW5hbmNlLnJlYWQiLCJQcm92ZW5hbmNlLnNlYXJjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "eb7fb69d-3cac-46db-bf8d-7d8468129dd2",
  "meta": {
    "lastUpdated": "2024-07-29T09:18:51.454+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://organization.cit-organization-1209.local/fhir/Provenance?_format=json&_pretty=true&target=https%3A%2F%2Forganization.cit-organization-1209.local%2Ffhir%2FOrganization%2F411%2F_history%2F1"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://organization.cit-organization-1209.local/fhir/Provenance/413",
      "resource": {
        "resourceType": "Provenance",
        "id": "413",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T09:18:51.105+00:00",
          "source": "#760230d6-b0f8-4c",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-provenance"
          ]
        },
        "target": [
          {
            "reference": "https://organization.cit-organization-1209.local/fhir/Organization/411"
          },
          {
            "reference": "https://organization.cit-organization-1209.local/fhir/Organization/412"
          }
        ],
        "recorded": "2024-07-29T09:18:50.926+00:00",
        "policy": [
          "healthcare-act"
        ],
        "agent": [
          {
            "who": {
              "reference": "https://patient.cit-organization-1209.local/fhir/Patient/81728"
            }
          }
        ]
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Provenance_version.md

`GET [base]/Provenance/196/_history/1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiOGRhNjY3OTUtM2Y2Ny00Y2RlLWJiMzktYzUzMDlmNTAyNWY1IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlByb3ZlbmFuY2UucmVhZCJdfSwiY29udGV4dCI6eyJlcGlzb2RlX29mX2NhcmVfaWQiOiJodHRwczovL2NhcmVwbGFuLmNpdC1jYXJlcGxhbi0yODE4LmxvY2FsL2ZoaXIvRXBpc29kZU9mQ2FyZS8xOTUiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Provenance",
  "id": "196",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T13:00:49.298+00:00",
    "source": "#544514fd-2f66-44",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-provenance"
    ]
  },
  "target": [
    {
      "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/195"
    }
  ],
  "recorded": "2024-07-29T13:00:48.198+00:00",
  "policy": [
    "healthcare-act"
  ],
  "agent": [
    {
      "who": {
        "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/21445"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Provenance.md

`GET [base]/Provenance/405`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJQcm92ZW5hbmNlLnJlYWQiLCJQcm92ZW5hbmNlLnNlYXJjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Provenance",
  "id": "405",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:18:49.705+00:00",
    "source": "#c0c16a87-afb4-48",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-provenance"
    ]
  },
  "target": [
    {
      "reference": "https://patient.cit-organization-1209.local/fhir/Patient/71538"
    }
  ],
  "recorded": "2024-07-29T09:18:49.637+00:00",
  "policy": [
    "healthcare-act"
  ],
  "agent": [
    {
      "who": {
        "reference": "https://patient.cit-organization-1209.local/fhir/Patient/84374"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Questionnaire_search.md

`GET [base]/Questionnaire?name%3Aexact=a15adc83-5caa-445f-9eba-c4b90cf772ff&ehealthPredecessor=urn%3Auuid%3A53fefa32-fcbb-4ff8-8a92-55ee120877b7`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiZjdhNTg5MzMtODU1Yi00ZTJjLWE1YWUtNDEyNGVmNWU4NzQ0IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIlF1ZXN0aW9ubmFpcmUuc2VhcmNoIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "ec40680b-27a2-4fe2-b86d-8faba36d13c7",
  "meta": {
    "lastUpdated": "2024-07-29T08:19:58.037+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://questionnaire.cit-questionnaire-1274.local/fhir/Questionnaire?_format=json&_pretty=true&ehealthPredecessor=urn%3Auuid%3A53fefa32-fcbb-4ff8-8a92-55ee120877b7&name%3Aexact=a15adc83-5caa-445f-9eba-c4b90cf772ff"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://questionnaire.cit-questionnaire-1274.local/fhir/Questionnaire/127",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "127",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:19:57.302+00:00",
          "source": "#1f79a591-6ec7-4b",
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
                  "reference": "https://organization.cit-questionnaire-1274.local/fhir/Organization/60063"
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
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-predecessor",
            "valueIdentifier": {
              "system": "urn:ietf:rfc:3986",
              "value": "urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7",
              "assigner": {
                "identifier": {
                  "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
                  "value": "cit-questionnaire-1274"
                }
              }
            }
          }
        ],
        "version": "1.0",
        "name": "a15adc83-5caa-445f-9eba-c4b90cf772ff",
        "status": "active"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://questionnaire.cit-questionnaire-1274.local/fhir/Questionnaire/129",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "129",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:19:57.788+00:00",
          "source": "#5bd08af7-07d9-45",
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
                  "reference": "https://organization.cit-questionnaire-1274.local/fhir/Organization/64435"
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
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-predecessor",
            "valueIdentifier": {
              "system": "urn:ietf:rfc:3986",
              "value": "urn:uuid:53fefa32-fcbb-4ff8-8a92-55ee120877b7",
              "assigner": {
                "identifier": {
                  "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
                  "value": "cit-questionnaire-1274"
                }
              }
            }
          }
        ],
        "version": "1.0",
        "name": "a15adc83-5caa-445f-9eba-c4b90cf772ff",
        "status": "active"
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Questionnaire_version.md

`GET [base]/Questionnaire/138/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUXVlc3Rpb25uYWlyZS5kZWxldGUiLCJRdWVzdGlvbm5haXJlLnNlYXJjaCIsIlF1ZXN0aW9ubmFpcmUucmVhZCIsIlF1ZXN0aW9ubmFpcmUuY3JlYXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJRdWVzdGlvbm5haXJlLnVwZGF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Questionnaire",
  "id": "138",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:27:55.998+00:00",
    "source": "#a2a8ff0d-8f14-41",
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
            "reference": "https://organization.cit-questionnaire-1274.local/fhir/Organization/90538"
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base",
      "valueIdentifier": {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:c59ea8bd-a4b5-4641-9c2a-f7caec57f8ed",
        "assigner": {
          "identifier": {
            "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
            "value": "cit-questionnaire-1274"
          }
        }
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base-environment",
      "valueIdentifier": {
        "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
        "value": "cit-questionnaire-1274"
      }
    }
  ],
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:uuid:09136ef1-796f-4bd0-ba95-5fea6db8f6ed"
    }
  ],
  "version": "1.0",
  "name": "597a7ae4-8b4e-44a0-b760-9ca7f69ab310",
  "status": "active"
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Questionnaire.md

`GET [base]/Questionnaire/213`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUXVlc3Rpb25uYWlyZS5yZWFkIiwiUXVlc3Rpb25uYWlyZS5zZWFyY2giLCIkbWlncmF0ZSIsIiR0ZXN0LW9ubHktY3JlYXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Questionnaire",
  "id": "213",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:29:08.738+00:00",
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
            "reference": "https://organization.cit-questionnaire-1274.local/fhir/Organization/54940"
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
      "valueString": "Navn"
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base",
      "valueIdentifier": {
        "system": "urn:ietf:rfc:3986",
        "value": "urn:uuid:9d7b1513-0deb-4117-9d41-c454420d991d",
        "assigner": {
          "identifier": {
            "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
            "value": "cit-questionnaire-1274"
          }
        }
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base-environment",
      "valueIdentifier": {
        "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
        "value": "cit-questionnaire-1274"
      }
    }
  ],
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:uuid:c48df59b-3b2d-404b-a9b5-99579a1151ad"
    }
  ],
  "version": "1.0",
  "name": "Navn",
  "status": "draft"
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_QuestionnaireResponse_search.md

`GET [base]/QuestionnaireResponse?episodeOfCare=https%3A%2F%2Fcareplan.cit-measurement-1826.local%2Ffhir%2FEpisodeOfCare%2F1892`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiYWIwN2ZkMzMtMDA0NC00YjFjLTk2MWEtMTg1OTQyMzEzODFlIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIk1lZGlhLnNlYXJjaCIsIlF1ZXN0aW9ubmFpcmVSZXNwb25zZS5zZWFyY2giLCJPYnNlcnZhdGlvbi5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "af378f7a-70ec-4337-9214-0864af7e085b",
  "meta": {
    "lastUpdated": "2024-07-29T09:16:45.354+00:00",
    "tag": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationValue",
        "code": "SUBSETTED",
        "display": "Resource encoded in summary mode"
      }
    ]
  },
  "type": "searchset",
  "total": 1
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_QuestionnaireResponse_version.md

`GET [base]/QuestionnaireResponse/894/_history/1`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiNjZlN2M3M2YtNWQ0MS00MGM4LTkxM2UtMjQxYmQ1YjI5YTliIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNvbW11bmljYXRpb24ucmVhZCIsIkNvbW11bmljYXRpb24ucGF0Y2giLCJNZWRpYS5zZWFyY2giLCJRdWVzdGlvbm5haXJlUmVzcG9uc2UucmVhZCIsIk9ic2VydmF0aW9uLnNlYXJjaCIsIiRzZWFyY2gtbWVhc3VyZW1lbnRzIiwiT2JzZXJ2YXRpb24ucmVhZCIsIiRzdWJtaXQtbWVhc3VyZW1lbnQiLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIkNvbW11bmljYXRpb24uY3JlYXRlIiwiUXVlc3Rpb25uYWlyZVJlc3BvbnNlLnNlYXJjaCIsIiRtaWdyYXRlIiwiQ29tbXVuaWNhdGlvbi5zZWFyY2giLCJQcm92ZW5hbmNlLnJlYWQiLCJNZWRpYS5yZWFkIiwiUHJvdmVuYW5jZS5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "QuestionnaireResponse",
  "id": "894",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:15:14.725+00:00",
    "source": "#b063b2a4-354c-4e",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaireresponse"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/50022"
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
      "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/22662"
    }
  ],
  "questionnaire": "https://questionnaire.cit-measurement-1826.local/fhir/Questionnaire/28307",
  "status": "completed",
  "subject": {
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/37844"
  },
  "authored": "2024-07-29T09:15:14+00:00",
  "source": {
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/66356"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_QuestionnaireResponse.md

`GET [base]/QuestionnaireResponse/982`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMDc3NTAwNzEtNjE2ZS00YzQ1LWFlZmQtZDBjOTBmZmFkZGEwIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIkNvbW11bmljYXRpb24ucmVhZCIsIkNvbW11bmljYXRpb24ucGF0Y2giLCJNZWRpYS5zZWFyY2giLCJRdWVzdGlvbm5haXJlUmVzcG9uc2UucmVhZCIsIk9ic2VydmF0aW9uLnNlYXJjaCIsIiRzZWFyY2gtbWVhc3VyZW1lbnRzIiwiT2JzZXJ2YXRpb24ucmVhZCIsIiRzdWJtaXQtbWVhc3VyZW1lbnQiLCIkdGVzdC1vbmx5LWNyZWF0ZSIsIkNvbW11bmljYXRpb24uY3JlYXRlIiwiUXVlc3Rpb25uYWlyZVJlc3BvbnNlLnNlYXJjaCIsIiRtaWdyYXRlIiwiQ29tbXVuaWNhdGlvbi5zZWFyY2giLCJQcm92ZW5hbmNlLnJlYWQiLCJNZWRpYS5yZWFkIiwiUHJvdmVuYW5jZS5zZWFyY2giXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "QuestionnaireResponse",
  "id": "982",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-07-29T09:16:06.146+00:00",
    "source": "#34cffdce-aa8d-46",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-questionnaireresponse"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/60964"
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
      "reference": "https://careplan.cit-measurement-1826.local/fhir/ServiceRequest/85025"
    }
  ],
  "questionnaire": "https://questionnaire.cit-measurement-1826.local/fhir/Questionnaire/90101",
  "status": "completed",
  "subject": {
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/11271"
  },
  "authored": "2024-07-29T09:16:06+00:00",
  "source": {
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/34901"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_RelatedPerson_1.md

`GET [base]/RelatedPerson?patient=https%3A%2F%2Fpatient.fut.trifork.com%2Ffhir%2FPatient%2F179103&_sort=-_id`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```

__Body__:
```json

```

__Response__
```json
{
  "resourceType" : "Bundle",
  "id" : "acc3d3a9-e5af-458f-80dc-2bf5b83f93ad",
  "meta" : {
    "lastUpdated" : "2021-09-09T07:08:57.468+00:00"
  },
  "type" : "searchset",
  "total" : 1,
  "link" : [ {
    "relation" : "self",
    "url" : "https://patient.fut.trifork.com/fhir/RelatedPerson?_sort=-_id&patient=https%3A%2F%2Fpatient.fut.trifork.com%2Ffhir%2FPatient%2F179103&patient=Patient%2F179103"
  } ],
  "entry" : [ {
    "fullUrl" : "https://patient.fut.trifork.com/fhir/RelatedPerson/180822",
    "resource" : {
      "resourceType" : "RelatedPerson",
      "id" : "180822",
      "meta" : {
        "versionId" : "3",
        "lastUpdated" : "2021-09-09T07:08:56.874+00:00",
        "source" : "#8c0ac329-0f6b-4f",
        "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-relatedperson" ]
      },
      "text" : {
        "status" : "generated",
        "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table class=\"hapiPropertyTable\"><tbody><tr><td>Name</td><td><span>RelatedPerson Test</span></td></tr><tr><td>Related to patient</td><td><span>Patient/179103</span></td></tr></tbody></table></div>"
      },
      "extension" : [ {
        "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient-contactnote",
        "valueString" : "patch contact note"
      } ],
      "patient" : {
        "reference" : "https://patient.fut.trifork.com/fhir/Patient/179103"
      },
      "name" : [ {
        "use" : "official",
        "family" : "Test",
        "given" : [ "RelatedPerson" ]
      } ],
      "address" : [ {
        "extension" : [ {
          "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-municipality-code",
          "valueCoding" : {
            "system" : "http://danmarksadresser.dk/kommunekode",
            "code" : "0101"
          }
        }, {
          "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-regional-subdivision-code",
          "valueCodeableConcept" : {
            "coding" : [ {
              "system" : "https://www.iso.org/obp/ui/#iso:code:3166:DK",
              "code" : "DK-85"
            } ]
          }
        } ],
        "use" : "home",
        "line" : [ "Mønsgade 20 5. tv" ],
        "city" : "Aarhus",
        "postalCode" : "8000",
        "country" : "Danmark"
      } ]
    },
    "search" : {
      "mode" : "match"
    }
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_ServiceRequest_version.md

`GET [base]/ServiceRequest/3024/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ2FyZVBsYW4ucmVhZCIsIiR0ZXN0LW9ubHktY3JlYXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "ServiceRequest",
  "id": "3024",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-10-26T17:14:54.211+00:00",
    "source": "#79faf04b-9bf9-48",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-careplan-2980.local/fhir/EpisodeOfCare/3023"
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
            "start": "2024-10-26T17:14:52+00:00"
          }
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest-statusSchedule",
      "extension": [
        {
          "url": "status",
          "valueCode": "on-hold"
        },
        {
          "url": "scheduledTime",
          "valueDateTime": "2024-10-26T17:14:52+00:00"
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest-statusSchedule",
      "extension": [
        {
          "url": "status",
          "valueCode": "revoked"
        },
        {
          "url": "scheduledTime",
          "valueDateTime": "2024-11-24T17:14:52+00:00"
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-include-as-extra",
      "valueBoolean": false
    }
  ],
  "instantiatesCanonical": [
    "https://plan.cit-careplan-2980.local/fhir/ActivityDefinition/7232"
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
    "text": "ab8ca657-ab9b-4440-bf5d-beba19cc1834"
  },
  "subject": {
    "reference": "https://patient.cit-careplan-2980.local/fhir/Patient/78737"
  },
  "occurrenceTiming": {
    "repeat": {
      "boundsPeriod": {
        "start": "2024-10-26T17:14:54+00:00",
        "end": "2024-10-26T22:14:54+00:00"
      },
      "duration": 24,
      "durationUnit": "h",
      "frequency": 1,
      "dayOfWeek": [
        "mon"
      ]
    }
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_ServiceRequest.md

`GET [base]/ServiceRequest/2937`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ2FyZVBsYW4ucmVhZCIsIiR0ZXN0LW9ubHktY3JlYXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "ServiceRequest",
  "id": "2937",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2024-10-26T17:14:08.547+00:00",
    "source": "#604a2829-9cd8-48",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-servicerequest"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-careplan-2980.local/fhir/EpisodeOfCare/2936"
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
                "code": "completed"
              }
            ]
          }
        },
        {
          "url": "period",
          "valuePeriod": {
            "start": "2024-10-26T17:14:07+00:00"
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
    "https://plan.cit-careplan-2980.local/fhir/ActivityDefinition/98303"
  ],
  "status": "completed",
  "intent": "filler-order",
  "code": {
    "coding": [
      {
        "system": "http://ehealth.sundhed.dk/cs/activitydefinition-code",
        "code": "TBD"
      }
    ],
    "text": "2b8b1b5e-439d-426e-915d-199d2cbf4ad0"
  },
  "subject": {
    "reference": "https://patient.cit-careplan-2980.local/fhir/Patient/94913"
  },
  "occurrencePeriod": {
    "start": "2024-10-21T17:14:07+00:00"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_StructureDefinition_search.md

`GET [base]/StructureDefinition?name=32996e25-0bed-4f00-ae69-8581f890439c`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUXVlc3Rpb25uYWlyZS5kZWxldGUiLCJRdWVzdGlvbm5haXJlLnNlYXJjaCIsIlF1ZXN0aW9ubmFpcmUucmVhZCIsIlF1ZXN0aW9ubmFpcmUuY3JlYXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJRdWVzdGlvbm5haXJlLnVwZGF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "b7179cd0-ca33-402b-adb2-ae1344973e5f",
  "meta": {
    "lastUpdated": "2024-07-29T08:29:16.779+00:00"
  },
  "type": "searchset",
  "total": 2,
  "link": [
    {
      "relation": "self",
      "url": "https://questionnaire.cit-questionnaire-1274.local/fhir/StructureDefinition?_format=json&_pretty=true&name=32996e25-0bed-4f00-ae69-8581f890439c"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://questionnaire.cit-questionnaire-1274.local/fhir/StructureDefinition/219",
      "resource": {
        "resourceType": "StructureDefinition",
        "id": "219",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:29:15.377+00:00",
          "source": "#50a6d39e-0d34-97",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-definedquestion"
          ]
        },
        "url": "http://afabd4de-5d2c-4ed9-9a5f-ec8be89ff7de",
        "name": "32996e25-0bed-4f00-ae69-8581f890439c",
        "status": "draft",
        "kind": "resource",
        "abstract": true,
        "type": "StructureDefinition",
        "baseDefinition": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-definedquestion",
        "derivation": "constraint",
        "differential": {
          "element": [
            {
              "id": "StructureDefinition",
              "path": "StructureDefinition"
            }
          ]
        }
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://questionnaire.cit-questionnaire-1274.local/fhir/StructureDefinition/221",
      "resource": {
        "resourceType": "StructureDefinition",
        "id": "221",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:29:16.623+00:00",
          "source": "#10cb8928-7426-47",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-definedquestion"
          ]
        },
        "url": "http://80359331-ede8-45c2-9d6a-617465bcbf7a",
        "name": "32996e25-0bed-4f00-ae69-8581f890439c",
        "status": "draft",
        "kind": "resource",
        "abstract": true,
        "type": "StructureDefinition",
        "baseDefinition": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-definedquestion",
        "derivation": "constraint",
        "differential": {
          "element": [
            {
              "id": "StructureDefinition",
              "path": "StructureDefinition"
            }
          ]
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_StructureDefinition_version.md

`GET [base]/StructureDefinition/222/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiUXVlc3Rpb25uYWlyZS5kZWxldGUiLCJRdWVzdGlvbm5haXJlLnNlYXJjaCIsIlF1ZXN0aW9ubmFpcmUucmVhZCIsIlF1ZXN0aW9ubmFpcmUuY3JlYXRlIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJRdWVzdGlvbm5haXJlLnVwZGF0ZSJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "StructureDefinition",
  "id": "222",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:29:17.048+00:00",
    "source": "#a4042fe1-31b8-4e",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-definedquestion"
    ]
  },
  "url": "http://eb88bba9-09e2-4de2-b142-05c06b8fa5e4",
  "name": "731a8fa0-e6f6-4d29-ab66-f413a27ae9be",
  "status": "draft",
  "kind": "resource",
  "abstract": true,
  "type": "StructureDefinition",
  "baseDefinition": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-definedquestion",
  "derivation": "constraint",
  "differential": {
    "element": [
      {
        "id": "StructureDefinition",
        "path": "StructureDefinition"
      }
    ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Task_search.md

`GET [base]/Task?episodeOfCare=https%3A%2F%2Fcareplan.cit-task-1940.local%2Ffhir%2FEpisodeOfCare%2F29715&restriction-category=measurement-monitoring%2Cnone`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiVGFzay5zZWFyY2giLCJUYXNrLnJlYWQiLCJUYXNrLmNyZWF0ZSIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiVGFzay5wYXRjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "ed01b56f-9940-42a7-92ba-b63bdd76d7d5",
  "meta": {
    "lastUpdated": "2024-07-29T08:58:27.157+00:00"
  },
  "type": "searchset",
  "total": 3,
  "link": [
    {
      "relation": "self",
      "url": "https://task.cit-task-1940.local/fhir/Task?_format=json&_pretty=true&episodeOfCare=https%3A%2F%2Fcareplan.cit-task-1940.local%2Ffhir%2FEpisodeOfCare%2F29715&restriction-category=measurement-monitoring%2Cnone"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://task.cit-task-1940.local/fhir/Task/377",
      "resource": {
        "resourceType": "Task",
        "id": "377",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:58:26.452+00:00",
          "source": "#3fa8192a-be28-44",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/29715"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-category",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/task-category",
                  "code": "TBD"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/restriction-category",
                  "code": "measurement-monitoring"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/restriction-category",
                  "code": "measuring-support"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-responsible",
            "valueReference": {
              "reference": "https://organization.cit-task-1940.local/fhir/Practitioner/59657"
            }
          }
        ],
        "status": "draft",
        "intent": "proposal",
        "priority": "routine"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://task.cit-task-1940.local/fhir/Task/379",
      "resource": {
        "resourceType": "Task",
        "id": "379",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:58:26.900+00:00",
          "source": "#d11b3b4f-924d-4b",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/29715"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-category",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/task-category",
                  "code": "TBD"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/restriction-category",
                  "code": "measurement-monitoring"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-responsible",
            "valueReference": {
              "reference": "https://organization.cit-task-1940.local/fhir/Practitioner/17531"
            }
          }
        ],
        "status": "draft",
        "intent": "proposal",
        "priority": "routine"
      },
      "search": {
        "mode": "match"
      }
    },
    {
      "fullUrl": "https://task.cit-task-1940.local/fhir/Task/380",
      "resource": {
        "resourceType": "Task",
        "id": "380",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-29T08:58:27.063+00:00",
          "source": "#0c7739b2-2e56-96",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task"
          ]
        },
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-episodeOfCare",
            "valueReference": {
              "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/29715"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-category",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/task-category",
                  "code": "TBD"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
            "valueCodeableConcept": {
              "coding": [
                {
                  "system": "http://ehealth.sundhed.dk/cs/restriction-category",
                  "code": "none"
                }
              ]
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-responsible",
            "valueReference": {
              "reference": "https://organization.cit-task-1940.local/fhir/Practitioner/18029"
            }
          }
        ],
        "status": "draft",
        "intent": "proposal",
        "priority": "routine"
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Task_version.md

`GET [base]/Task/355/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiVGFzay5zZWFyY2giLCJUYXNrLnJlYWQiLCJUYXNrLmNyZWF0ZSIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiVGFzay5wYXRjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Task",
  "id": "355",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:58:12.947+00:00",
    "source": "#9072ac61-fe9c-45",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/46460"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-category",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/task-category",
            "code": "TBD"
          }
        ]
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/restriction-category",
            "code": "None"
          }
        ]
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-responsible",
      "valueReference": {
        "reference": "https://organization.cit-task-1940.local/fhir/Practitioner/77721"
      }
    }
  ],
  "status": "cancelled",
  "intent": "proposal",
  "priority": "routine"
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_Task.md

`GET [base]/Task/354`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiVGFzay5zZWFyY2giLCJUYXNrLnJlYWQiLCJUYXNrLmNyZWF0ZSIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiVGFzay5wYXRjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Task",
  "id": "354",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:58:02.135+00:00",
    "source": "#4bf1c115-7133-45",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/7576"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-category",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/task-category",
            "code": "TBD"
          }
        ]
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/restriction-category",
            "code": "None"
          }
        ]
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-responsible",
      "valueReference": {
        "reference": "https://organization.cit-task-1940.local/fhir/Practitioner/83004"
      }
    }
  ],
  "status": "draft",
  "intent": "proposal",
  "priority": "routine",
  "owner": {
    "reference": "https://organization.cit-task-1940.local/fhir/Practitioner/7635"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_View_search.md

`GET [base]/Basic?code=http%3A%2F%2Fehealth.sundhed.dk%2Fcs%2Fbasic-resource-type%7Cview`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiVmlldy5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJWaWV3LndyaXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.4.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Bundle",
  "id": "4f6ccb15-afc0-4292-88ef-303da754e0f3",
  "meta": {
    "lastUpdated": "2022-01-05T10:24:16.255+00:00"
  },
  "type": "searchset",
  "total": 1,
  "link": [
    {
      "relation": "self",
      "url": "https://questionnaire.local.ehealth.sundhed.dk/fhir/Basic?_format=json&_pretty=true&code=http%3A%2F%2Fehealth.sundhed.dk%2Fcs%2Fbasic-resource-type%7Cview"
    }
  ],
  "entry": [
    {
      "fullUrl": "https://questionnaire.local.ehealth.sundhed.dk/fhir/Basic/2",
      "resource": {
        "resourceType": "Basic",
        "id": "2",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2022-01-05T10:24:12.498+00:00",
          "source": "#6b40ed51-52dc-49",
          "profile": [
            "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-view"
          ]
        },
        "contained": [
          {
            "resourceType": "Binary",
            "id": "1",
            "meta": {
              "profile": [
                "http://hl7.org/fhir/StructureDefinition/Binary"
              ]
            },
            "contentType": "application/json",
            "data": "eyJIZWxsbyI6IldvcmxkIn0="
          }
        ],
        "extension": [
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
            "extension": [
              {
                "url": "reference",
                "valueReference": {
                  "reference": "https://organization.local.ehealth.sundhed.dk/fhir/Organization/47590"
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
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-version",
            "valueString": "1.0"
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-status",
            "valueCoding": {
              "system": "http://hl7.org/fhir/publication-status",
              "code": "draft",
              "display": "draft"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-content",
            "valueReference": {
              "reference": "#1"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-view-for",
            "extension": [
              {
                "url": "forReference",
                "valueReference": {
                  "reference": "https://questionnaire.local.ehealth.sundhed.dk/fhir/Questionnaire/1"
                }
              },
              {
                "url": "forType",
                "valueCoding": {
                  "system": "http://hl7.org/fhir/resource-types",
                  "code": "Questionnaire",
                  "display": "Questionnaire"
                }
              }
            ]
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-view-type",
            "valueCoding": {
              "system": "http://ehealth.sundhed.dk/cs/view-type",
              "code": "interpretedview",
              "display": "Interpreted view"
            }
          }
        ],
        "code": {
          "coding": [
            {
              "system": "http://ehealth.sundhed.dk/cs/basic-resource-type",
              "code": "view",
              "display": "View"
            }
          ]
        }
      },
      "search": {
        "mode": "match"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/GET_View_version.md

`GET [base]/Basic/268/_history/2`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiVmlldy5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJWaWV3LndyaXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.4.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
```



__Response__
```json
{
  "resourceType": "Basic",
  "id": "268",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2021-12-21T19:52:20.299+00:00",
    "source": "#894f9452-5263-4f",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-view"
    ]
  },
  "contained": [
    {
      "resourceType": "Binary",
      "id": "1",
      "meta": {
        "profile": [
          "http://hl7.org/fhir/StructureDefinition/Binary"
        ]
      },
      "contentType": "application/json",
      "data": "eyJIZWxsbyI6IldvcmxkIn0="
    }
  ],
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
      "extension": [
        {
          "url": "reference",
          "valueReference": {
            "reference": "https://organization.cit-questionnaire-874.local/fhir/Organization/27422"
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-version",
      "valueString": "1.0"
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-status",
      "valueCoding": {
        "system": "http://hl7.org/fhir/publication-status",
        "code": "active",
        "display": "active"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-content",
      "valueReference": {
        "reference": "#1"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-view-for",
      "extension": [
        {
          "url": "forReference",
          "valueReference": {
            "reference": "https://questionnaire.cit-questionnaire-874.local/fhir/Questionnaire/267"
          }
        },
        {
          "url": "forType",
          "valueCoding": {
            "system": "http://hl7.org/fhir/resource-types",
            "code": "Questionnaire",
            "display": "Questionnaire"
          }
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-view-type",
      "valueCoding": {
        "system": "http://ehealth.sundhed.dk/cs/view-type",
        "code": "interpretedview",
        "display": "Interpreted view"
      }
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://ehealth.sundhed.dk/cs/basic-resource-type",
        "code": "view",
        "display": "View"
      }
    ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_Appointment_5.md

`PATCH [base]/Appointment/180770`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[ {
  "op" : "add",
  "path" : "/appointmentType/coding",
  "value" : [ {
    "system" : "http://ehealth.sundhed.dk/cs/appointmenttype-codes",
    "code" : "EMERGENCY"
  } ]
} ]
```

__Response__
```json
{
  "resourceType" : "Appointment",
  "id" : "180770",
  "meta" : {
    "versionId" : "3",
    "lastUpdated" : "2021-09-09T07:07:53.842+00:00",
    "source" : "#275f5e83-7bd1-42",
    "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-appointment" ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Forundersøgelse</div><table class=\"hapiPropertyTable\"><tbody><tr><td>Id</td><td/></tr><tr><td>Appointment Type</td><td><span>FOLLOWUP</span></td></tr><tr><td>Status</td><td><span>Booked</span></td></tr></tbody></table></div>"
  },
  "contained" : [ {
    "resourceType" : "Location",
    "id" : "1",
    "name" : "Room 43b"
  } ],
  "extension" : [ {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible",
    "valueReference" : {
      "reference" : "https://organization.fut.trifork.com/fhir/CareTeam/108752"
    }
  } ],
  "identifier" : [ {
    "system" : "http://ehealth.sundhed.dk/id/ehealth-identifier",
    "value" : "401dc353-668c-4ecc-a95e-533ef0d5d609"
  } ],
  "status" : "booked",
  "serviceType" : [ {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointment-servicetype",
      "code" : "regular"
    } ]
  } ],
  "appointmentType" : {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointmenttype-codes",
      "code" : "EMERGENCY"
    } ]
  },
  "reasonCode" : [ {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointment-reason",
      "code" : "412776001"
    } ]
  } ],
  "priority" : 1,
  "description" : "Forundersøgelse",
  "start" : "2021-09-10T09:00:00.000+00:00",
  "end" : "2021-09-10T11:00:00.000+00:00",
  "comment" : "Forundersøgelse for grå stær hos Trifork.\n Patienten møder op hos Trifork med udfyldt spørgeskema",
  "participant" : [ {
    "extension" : [ {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam",
      "valueReference" : {
        "reference" : "https://organization.fut.trifork.com/fhir/CareTeam/108752"
      }
    } ],
    "type" : [ {
      "coding" : [ {
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        "code" : "PART",
        "display" : "Participation"
      } ]
    } ],
    "required" : "required",
    "status" : "accepted"
  }, {
    "actor" : {
      "reference" : "https://organization.fut.trifork.com/fhir/Practitioner/107302",
      "display" : "actor1 display text"
    },
    "required" : "required",
    "status" : "tentative"
  }, {
    "actor" : {
      "reference" : "https://patient.fut.trifork.com/fhir/Patient/179103"
    },
    "required" : "required",
    "status" : "accepted"
  }, {
    "actor" : {
      "reference" : "#1"
    },
    "required" : "required",
    "status" : "accepted"
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_Appointment_Video.md

`PATCH [base]/Appointment/180772`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[ {
  "op" : "add",
  "path" : "/appointmentType/coding",
  "value" : [ {
    "system" : "http://ehealth.sundhed.dk/cs/appointmenttype-codes",
    "code" : "EMERGENCY"
  } ]
} ]
```

__Response__
```json
{
  "resourceType" : "Appointment",
  "id" : "180772",
  "meta" : {
    "versionId" : "2",
    "lastUpdated" : "2021-09-09T07:08:01.782+00:00",
    "source" : "#c5040918-12e5-43",
    "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-videoappointment" ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Forundersøgelse</div><table class=\"hapiPropertyTable\"><tbody><tr><td>Id</td><td/></tr><tr><td>Appointment Type</td><td><span>FOLLOWUP</span></td></tr><tr><td>Status</td><td><span>Booked</span></td></tr></tbody></table></div>"
  },
  "contained" : [ {
    "resourceType" : "Location",
    "id" : "1",
    "name" : "Meeting Room 1",
    "telecom" : [ {
      "system" : "email",
      "value" : "location@example.com"
    } ],
    "address" : {
      "line" : [ "Trifork", "Europaplads 2" ],
      "city" : "Aarhus C",
      "postalCode" : "8000",
      "country" : "DK"
    }
  } ],
  "extension" : [ {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-meeting-url",
    "valueUri" : "https://portal.vconf.dk/?url=122081@rooms.vconf-stage.dk&pin=43589&start_dato=2021-09-10T09:00:00"
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-end-meeting-on-end-time",
    "valueBoolean" : false
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-max-participants",
    "valueInteger" : 4
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-vmr-uri",
    "valueUri" : "122081@rooms.vconf-stage.dk"
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-guest-pin-code",
    "valueString" : "43589"
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-host-pin-code",
    "valueString" : "57211"
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-responsible",
    "valueReference" : {
      "reference" : "https://organization.fut.trifork.com/fhir/CareTeam/108752"
    }
  } ],
  "identifier" : [ {
    "system" : "http://ehealth.sundhed.dk/id/ehealth-identifier",
    "value" : "8273ecb4-ccaf-4eda-8244-9cd4b4449ff8"
  }, {
    "system" : "http://vdx.medcom.dk/meeting",
    "value" : "507756f3-0d6f-45d0-a00b-a03cf148aba3"
  } ],
  "status" : "booked",
  "serviceType" : [ {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointment-servicetype",
      "code" : "video"
    } ]
  } ],
  "appointmentType" : {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointmenttype-codes",
      "code" : "EMERGENCY"
    } ]
  },
  "reasonCode" : [ {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/appointment-reason",
      "code" : "412776001"
    } ]
  } ],
  "priority" : 1,
  "description" : "Forundersøgelse",
  "start" : "2021-09-10T09:00:00.000+00:00",
  "end" : "2021-09-10T11:00:00.000+00:00",
  "comment" : "Forundersøgelse for grå stær hos Trifork.\n Patienten møder op hos Trifork med udfyldt spørgeskema",
  "participant" : [ {
    "extension" : [ {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-ext-careteam",
      "valueReference" : {
        "reference" : "https://organization.fut.trifork.com/fhir/CareTeam/108752"
      }
    } ],
    "type" : [ {
      "coding" : [ {
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ParticipationType",
        "code" : "PART",
        "display" : "Participation"
      } ]
    } ],
    "required" : "required",
    "status" : "accepted"
  }, {
    "actor" : {
      "reference" : "https://organization.fut.trifork.com/fhir/Practitioner/107302",
      "display" : "actor1 display text"
    },
    "required" : "required",
    "status" : "tentative"
  }, {
    "actor" : {
      "reference" : "https://patient.fut.trifork.com/fhir/Patient/179103"
    },
    "required" : "required",
    "status" : "accepted"
  }, {
    "actor" : {
      "reference" : "#1"
    },
    "required" : "required",
    "status" : "accepted"
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_ClinicalImpression.md

`PATCH [base]/ClinicalImpression/295`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiJHRlc3Qtb25seS1jcmVhdGUiLCJDbGluaWNhbEltcHJlc3Npb24uc2VhcmNoIiwiQ2xpbmljYWxJbXByZXNzaW9uLnBhdGNoIiwiQ2xpbmljYWxJbXByZXNzaW9uLnJlYWQiLCJDbGluaWNhbEltcHJlc3Npb24uY3JlYXRlIl19LCJ1c2VyX3R5cGUiOiJTWVNURU0ifQ.
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[
  {
    "op": "replace",
    "path": "/status",
    "value": "entered-in-error"
  }
]
```

__Response__
```json
{
  "resourceType": "ClinicalImpression",
  "id": "295",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:56:29.719+00:00",
    "source": "#ae433db1-a753-4c29-9d54-ef56970a8a30",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/19935"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-clinicalimpression-decision",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-decision-codes",
            "code": "approved-for-sharing"
          }
        ]
      }
    }
  ],
  "status": "entered-in-error",
  "code": {
    "coding": [
      {
        "system": "http://ehealth.sundhed.dk/cs/clinicalimpression-codes",
        "code": "TBD"
      }
    ]
  },
  "subject": {
    "reference": "https://patient.cit-task-1940.local/fhir/Patient/74694"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_Communication.md

`PATCH [base]/Communication/860`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LW1lYXN1cmVtZW50LTE4MjYubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvNjIxMDIiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ29tbXVuaWNhdGlvbi5yZWFkIiwiQ29tbXVuaWNhdGlvbi5wYXRjaCJdfSwiY29udGV4dCI6eyJlcGlzb2RlX29mX2NhcmVfaWQiOiJodHRwczovL2NhcmVwbGFuLmNpdC1tZWFzdXJlbWVudC0xODI2LmxvY2FsL2ZoaXIvRXBpc29kZU9mQ2FyZS83NzA2MCIsInBhdGllbnRfaWQiOiJodHRwczovL3BhdGllbnQuY2l0LW1lYXN1cmVtZW50LTE4MjYubG9jYWwvZmhpci9QYXRpZW50LzY1Nzg2IiwidGVhbV9vbl9lb2MiOmZhbHNlfSwidXNlcl90eXBlIjoiUFJBQ1RJVElPTkVSIn0.
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[
  {
    "op": "replace",
    "path": "/status",
    "value": "stopped"
  }
]
```

__Response__
```json
{
  "resourceType": "Communication",
  "id": "860",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T09:14:51.406+00:00",
    "source": "#87cf5fea-d1df-442f-b8df-9e5ef6a023ec",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-communication"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-measurement-1826.local/fhir/EpisodeOfCare/77060"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/restriction-category",
            "code": "None"
          }
        ]
      }
    }
  ],
  "status": "stopped",
  "category": [
    {
      "coding": [
        {
          "system": "http://ehealth.sundhed.dk/cs/communication-category",
          "code": "annotation"
        }
      ]
    }
  ],
  "subject": {
    "reference": "https://patient.cit-measurement-1826.local/fhir/Patient/65786"
  },
  "topic": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/communication-topic",
        "code": "report-labs"
      }
    ]
  },
  "sender": {
    "reference": "https://organization.cit-measurement-1826.local/fhir/Practitioner/62102"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_Condition.md

`PATCH [base]/Condition/2478`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvMzMxODIiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ29uZGl0aW9uLnJlYWQiLCJDb25kaXRpb24ucGF0Y2giLCIkdGVzdC1vbmx5LWNyZWF0ZSJdfSwiY29udGV4dCI6eyJlcGlzb2RlX29mX2NhcmVfaWQiOiJodHRwczovL2NhcmVwbGFuLmNpdC1jYXJlcGxhbi0yODE4LmxvY2FsL2ZoaXIvRXBpc29kZU9mQ2FyZS8yNDc3IiwicGF0aWVudF9pZCI6Imh0dHBzOi8vcGF0aWVudC5jaXQtY2FyZXBsYW4tMjgxOC5sb2NhbC9maGlyL1BhdGllbnQvNTk5ODAiLCJ0ZWFtX29uX2VvYyI6ZmFsc2V9LCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIifQ.
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[
  {
    "op": "replace",
    "path": "/verificationStatus",
    "value": {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
          "code": "differential",
          "display": "Differential"
        }
      ]
    }
  }
]
```

__Response__
```json
{
  "resourceType": "Condition",
  "id": "2478",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:20:20.695+00:00",
    "source": "#91633e77-022b-9488-a5e5-d089a7219227",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-condition"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/workflow-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/EpisodeOfCare/2477"
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
  "verificationStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        "code": "differential",
        "display": "Differential"
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
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/59980"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_DocumentReference.md

`PATCH [base]/DocumentReference/137`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWRvY3VtZW50LXRyYW5zZm9ybWF0aW9uLTI1OTIubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvNTk0OCIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJEb2N1bWVudFJlZmVyZW5jZS5wYXRjaCIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiRG9jdW1lbnRSZWZlcmVuY2UucmVhZCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[
  {
    "op": "replace",
    "path": "/description",
    "value": "Test2"
  }
]
```

__Response__
```json
{
  "resourceType": "DocumentReference",
  "id": "137",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:46:12.211+00:00",
    "source": "#bad5ff72-b0a4-4d31-a36c-6a407ea3e04c",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-documentreference"
    ]
  },
  "status": "current",
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "74468-0"
      }
    ]
  },
  "date": "2024-07-29T08:46:11.885+00:00",
  "description": "Test2",
  "content": [
    {
      "attachment": {
        "url": "http://some.com/"
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_EpisodeOfCare.md

`PATCH [base]/EpisodeOfCare/1547`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LWNhcmVwbGFuLTI4MTgubG9jYWwvZmhpci9QcmFjdGl0aW9uZXIvODY5NjIiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiRXBpc29kZU9mQ2FyZS5zZWFyY2giLCJFcGlzb2RlT2ZDYXJlLnJlYWQiLCJDYXJlUGxhbi5yZWFkIiwiRXBpc29kZU9mQ2FyZSR1cGRhdGUtY2FyZS10ZWFtcyIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiRXBpc29kZU9mQ2FyZS5wYXRjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[
  {
    "op": "replace",
    "path": "/status",
    "value": "active"
  }
]
```

__Response__
```json
{
  "resourceType": "EpisodeOfCare",
  "id": "1547",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T13:13:34.561+00:00",
    "source": "#62edee60-4fc3-9c09-a456-7cd2adb33466",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-episodeofcare-caremanagerOrganization",
      "valueReference": {
        "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/86577"
      }
    }
  ],
  "status": "active",
  "statusHistory": [
    {
      "status": "finished",
      "period": {
        "start": "2024-07-29T13:13:34+00:00",
        "end": "2024-07-29T13:13:34+00:00"
      }
    },
    {
      "status": "active",
      "period": {
        "start": "2024-07-29T13:13:34+00:00"
      }
    }
  ],
  "diagnosis": [
    {
      "condition": {
        "reference": "https://careplan.cit-careplan-2818.local/fhir/Condition/1546"
      },
      "rank": 1
    }
  ],
  "patient": {
    "reference": "https://patient.cit-careplan-2818.local/fhir/Patient/97295"
  },
  "managingOrganization": {
    "reference": "https://organization.cit-careplan-2818.local/fhir/Organization/86577"
  },
  "period": {
    "start": "1970-01-01T00:00:01+00:00",
    "end": "1970-01-01T00:01:40+00:00"
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_Message_3.md

`PATCH [base]/Communication/180777`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[ {
  "op" : "add",
  "path" : "/payload/0/contentString",
  "value" : "new content"
} ]
```

__Response__
```json
{
  "resourceType" : "Communication",
  "id" : "180777",
  "meta" : {
    "versionId" : "2",
    "lastUpdated" : "2021-09-09T07:08:24.341+00:00",
    "source" : "#df23e99d-4fce-43",
    "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-message" ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table class=\"hapiPropertyTable\"><tbody><tr><td>Status</td><td><span>Completed</span></td></tr></tbody></table></div>"
  },
  "extension" : [ {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-thread-id",
    "valueString" : "f9f2103d-93c1-4db8-bd7c-86baad44c969"
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-title",
    "valueString" : "Sample title..."
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-administrative-status",
    "valueCoding" : {
      "system" : "http://ehealth.sundhed.dk/cs/administrative-status",
      "code" : "activate"
    }
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-priority",
    "valueCode" : "routine"
  }, {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
    "valueCodeableConcept" : {
      "coding" : [ {
        "system" : "http://ehealth.sundhed.dk/cs/restriction-category",
        "code" : "None"
      } ]
    }
  } ],
  "status" : "completed",
  "category" : [ {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/message-category",
      "code" : "note"
    } ]
  } ],
  "medium" : [ {
    "coding" : [ {
      "system" : "http://ehealth.sundhed.dk/cs/message-medium"
    } ]
  } ],
  "recipient" : [ {
    "reference" : "https://patient.fut.trifork.com/fhir/Patient/179103"
  } ],
  "sender" : {
    "reference" : "https://patient.fut.trifork.com/fhir/Patient/179103"
  },
  "payload" : [ {
    "contentString" : "new content"
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_Organization.md

`PATCH [base]/Organization/403`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiMGE2ZTJkYWMtMTAzMi00YzZiLTkwYzctOTk0YmU2NzY5NDY0IiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIk9yZ2FuaXphdGlvbi5wYXRjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[
  {
    "op": "replace",
    "path": "/contact/0/name/period/end",
    "value": "2021-01-01"
  }
]
```

__Response__
```json
{
  "resourceType": "Organization",
  "id": "403",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T09:18:42.980+00:00",
    "source": "#575b5452-11f4-456d-b4e7-5a60275c3507",
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
      "use": "official",
      "system": "urn:oid:2.16.840.1.113883.2.24.1.1",
      "value": "11111111",
      "period": {
        "start": "2024-07-29T09:18:40+00:00"
      }
    }
  ],
  "name": "defaultTestFactory-fff2a4ed-e91a-44fb-9dfc-2007c1b61232",
  "contact": [
    {
      "name": {
        "period": {
          "end": "2021-01-01"
        }
      },
      "telecom": [
        {
          "extension": [
            {
              "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomCustodian",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://ehealth.sundhed.dk/cs/contactpoint-custodian",
                    "code": "SOR"
                  }
                ]
              }
            },
            {
              "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomSystem",
              "valueCodeableConcept": {
                "coding": [
                  {
                    "system": "http://ehealth.sundhed.dk/cs/contactpoint-system",
                    "code": "TBD"
                  }
                ]
              }
            },
            {
              "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-organization-telecomValue",
              "valueString": "434c625b-64d2-442e-a8e3-1e895ee9187b"
            }
          ]
        }
      ]
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_Patient_7.md

`PATCH [base]/Patient/179103`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[ {
  "op" : "add",
  "path" : "/extension",
  "value" : [ {
    "valueBoolean" : true,
    "url" : "http://hl7.org/fhir/StructureDefinition/patient-interpreterRequired"
  } ]
} ]
```

__Response__
```json
{
  "resourceType" : "Patient",
  "id" : "179103",
  "meta" : {
    "versionId" : "62",
    "lastUpdated" : "2021-09-09T07:08:49.786+00:00",
    "source" : "#200d3a27-7152-40",
    "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient" ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Tjalfe <b>MATHIASEN </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>0506504003</td></tr><tr><td>Address</td><td><span>Nordre Ringgade 1 </span><br/><span>Harboøre </span><span>DK </span></td></tr><tr><td>Date of birth</td><td><span>05 June 1950</span></td></tr></tbody></table></div>"
  },
  "extension" : [ {
    "url" : "http://hl7.org/fhir/StructureDefinition/patient-interpreterRequired",
    "valueBoolean" : true
  } ],
  "identifier" : [ {
    "use" : "official",
    "system" : "urn:oid:1.2.208.176.1.2",
    "value" : "0506504003"
  } ],
  "name" : [ {
    "use" : "official",
    "family" : "Mathiasen",
    "given" : [ "Tjalfe" ]
  } ],
  "telecom" : [ {
    "system" : "other",
    "value" : "NemSMS"
  } ],
  "gender" : "male",
  "birthDate" : "1950-06-05",
  "address" : [ {
    "extension" : [ {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-municipality-code",
      "valueCoding" : {
        "system" : "http://danmarksadresser.dk/kommunekode",
        "code" : "0410"
      }
    }, {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-regional-subdivision-code",
      "valueCodeableConcept" : {
        "coding" : [ {
          "system" : "https://www.iso.org/obp/ui/#iso:code:3166:DK",
          "code" : "DK-83"
        } ]
      }
    } ],
    "use" : "home",
    "type" : "postal",
    "line" : [ "Nordre Ringgade 1" ],
    "city" : "Harboøre",
    "postalCode" : "8000",
    "country" : "DK"
  } ],
  "maritalStatus" : {
    "coding" : [ {
      "system" : "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
      "code" : "U",
      "display" : "unmarried"
    } ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_Patient.md

`PATCH [base]/Patient/236`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkcXlmaEdsRGkzM2prU2o5NWNRYXp3Zk9MOWUzRDlTbFQ1czQxOFplTzlvIn0.eyJqdGkiOiJlOGFiNjJlNy1jZTJkLTQ3ZTYtOThmYS1kMGZhMTkyYjdhNTEiLCJleHAiOjE1NzI5Mzg2OTUsIm5iZiI6MCwiaWF0IjoxNTcyOTM4Mzk1LCJpc3MiOiJodHRwczovL3NhbWwuZnV0LnRyaWZvcmsuY29tL2F1dGgvcmVhbG1zL2VoZWFsdGgiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYjlhZTI5N2YtMzNmMC00MTQzLTgxYTQtZjhmYTNhNzQ2ODUyIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY3VjdW1iZXIiLCJhdXRoX3RpbWUiOjAsInNlc3Npb25fc3RhdGUiOiI0MzAyMmZmMi02NTdlLTRkNTQtOWY2ZS0yMzg5NjliNjY3NmMiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIk9yZ2FuaXphdGlvbi5yZWFkIiwiQ29tbXVuaWNhdGlvbi5yZWFkIiwiRXBpc29kZU9mQ2FyZS51cGRhdGUiLCJRdWVzdGlvbm5haXJlUmVzcG9uc2UucmVhZCIsIlByb2NlZHVyZVJlcXVlc3QudXBkYXRlIiwiUGF0aWVudC5yZWFkIiwiQWN0aXZpdHlEZWZpbml0aW9uLnJlYWQiLCIkc2VhcmNoLW1lYXN1cmVtZW50cyIsIkVwaXNvZGVPZkNhcmUuZGVsZXRlIiwiUGF0aWVudCRjcmVhdGVQYXRpZW50RnJvbVBlcnNvbiIsIlBhdGllbnQucGF0Y2giLCJQcm9jZWR1cmVSZXF1ZXN0LnBhdGNoIiwiUGF0aWVudC4qIiwiRXBpc29kZU9mQ2FyZS4qIiwiQ29tbXVuaWNhdGlvbi4qIiwidW1hX2F1dGhvcml6YXRpb24iLCJDb21tdW5pY2F0aW9uLnVwZGF0ZSIsIkNhcmVQbGFuJHVwZGF0ZS1jYXJlLXRlYW1zIiwiQ29tbXVuaWNhdGlvbi5wYXRjaCIsIkFwcG9pbnRtZW50LnVwZGF0ZSIsIkNhcmVQbGFuLnBhdGNoIiwiRXBpc29kZU9mQ2FyZS53cml0ZSIsIkxpYnJhcnkkZXZhbHVhdGUiLCJFcGlzb2RlT2ZDYXJlLnBhdGNoIiwiQ2FyZVBsYW4ud3JpdGUiLCJDb21tdW5pY2F0aW9uLmNyZWF0ZSIsIkFwcG9pbnRtZW50LioiLCJMaWJyYXJ5LnJlYWQiLCJDb21tdW5pY2F0aW9uLndyaXRlIiwiRXBpc29kZU9mQ2FyZS5jcmVhdGUiLCJQYXRpZW50LmRlbGV0ZSIsIkNhcmVQbGFuLmNyZWF0ZSIsIlByYWN0aXRpb25lci5yZWFkIiwiUGF0aWVudCR1cGRhdGVQYXRpZW50V2l0aFNLUlNEYXRhIiwiTWVkaWEucmVhZCIsIlByb2NlZHVyZVJlcXVlc3Qud3JpdGUiLCJQYXRpZW50LndyaXRlIiwiQXBwb2ludG1lbnQuc2VhcmNoIiwiUHJvY2VkdXJlUmVxdWVzdC5yZWFkIiwiRXBpc29kZU9mQ2FyZS5yZWFkIiwiUXVlc3Rpb25uYWlyZS5yZWFkIiwiUGF0aWVudC5jcmVhdGUiLCJQcm9jZWR1cmVSZXF1ZXN0LioiLCJQcm9jZWR1cmVSZXF1ZXN0LmNyZWF0ZSIsIiRzdWJtaXQtbWVhc3VyZW1lbnQiLCJFcGlzb2RlT2ZDYXJlJGlzLWNvbnRleHQtYWxsb3dlZCIsIlBhdGllbnQuc2VhcmNoIiwiQ2FyZVBsYW4uZGVsZXRlIiwiQ2FyZVBsYW4uKiIsIm9mZmxpbmVfYWNjZXNzIiwiQXBwb2ludG1lbnQuZGVsZXRlIiwiQXBwb2ludG1lbnQud3JpdGUiLCJDYXJlUGxhbi51cGRhdGUiLCJFcGlzb2RlT2ZDYXJlJGNyZWF0ZS1lcGlzb2RlLW9mLWNhcmUiLCJUcmVhdG1lbnQgUmVzcG9uc2libGUiLCJFcGlzb2RlT2ZDYXJlLnNlYXJjaCIsIkNhcmVUZWFtLnJlYWQiLCJBcHBvaW50bWVudC5wYXRjaCIsIkNvbW11bmljYXRpb24uZGVsZXRlIiwiRXBpc29kZU9mQ2FyZSR1cGRhdGUtY2FyZS10ZWFtcyIsIkFwcG9pbnRtZW50LmNyZWF0ZSIsIk9ic2VydmF0aW9uLnJlYWQiLCJDYXJlUGxhbiR1cGRhdGUtcmVzcG9uc2liaWxpdHkiLCJQcm9jZWR1cmVSZXF1ZXN0LnNlYXJjaCIsIlBsYW5EZWZpbml0aW9uJGFwcGx5IiwiQ2FyZVBsYW4ucmVhZCIsIkNvbW11bmljYXRpb24uc2VhcmNoIiwiQXBwb2ludG1lbnQucmVhZCIsIlBhdGllbnQudXBkYXRlIiwiQ2FyZVBsYW4uc2VhcmNoIiwiUGxhbkRlZmluaXRpb24ucmVhZCIsIlByb2NlZHVyZVJlcXVlc3QuZGVsZXRlIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvaW9fY3VzdG9tIGVtYWlsIHByb2ZpbGUiLCJ1c2VyX3R5cGUiOiJQUkFDVElUSU9ORVIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwidXNlcl9pZCI6Imh0dHA6Ly9vcmdhbml6YXRpb24uZnV0LnRyaWZvcmsuY29tL2ZoaXIvUHJhY3RpdGlvbmVyLzM1MjA1IiwibmFtZSI6IlBvbnRpdXMgUGlsYXR1cyIsImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cDovL29yZ2FuaXphdGlvbi5mdXQudHJpZm9yay5jb20vZmhpci9Pcmdhbml6YXRpb24vMTAzNTciLCJjYXJlX3RlYW1faWQiOiJodHRwOi8vb3JnYW5pemF0aW9uLmZ1dC50cmlmb3JrLmNvbS9maGlyL0NhcmVUZWFtLzM1MTAyIiwicGF0aWVudF9pZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9maGlyL1BhdGllbnQvMjM2In0sInByZWZlcnJlZF91c2VybmFtZSI6ImN1Y3VtYmVyX3RyZWF0bWVudCIsImdpdmVuX25hbWUiOiJQb250aXVzIiwiZmFtaWx5X25hbWUiOiJQaWxhdHVzIn0.JsD-l1dJWJ0_eHsEqdLX2lRbI4HtuJP4sPhojwkQZmQ8nTm_SHZ6T3VdvpCNBCsrShJoZtSKjn_BRoMxNH2SuNRN1YaR_Q3MzQnS2SaazTaL1s0x4e_WD4JiehZ-2wwLTfk2aVGqqJjm2MabOf5g3lQLZ9nNRqB51TMj29WYjALId638aTSk-1datclhW1fCMn7cIiPpS_b9ae2JpTfaR_bOeAO0u-6xc_BM9ZR0OiAYg5CEHsEpdm2vc6POr3C0BaX5H0xVHPOzyRbzlNj3oMamZBooFpmmiuMn-5_VMx_sZ63-Cjb0eLcT8d-ZXTmoHLvF3xxi5C0zcbEdOOP5Tw
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/4.0.0 (FHIR Client; FHIR 3.0.1/DSTU3; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[ {
  "op" : "add",
  "path" : "/extension",
  "value" : [ {
    "valueBoolean" : true,
    "url" : "http://hl7.org/fhir/StructureDefinition/patient-interpreterRequired"
  } ]
} ]
```

__Response__
```json
{
  "resourceType" : "Patient",
  "id" : "236",
  "meta" : {
    "extension" : [ {
      "url" : "http://hapifhir.io/fhir/StructureDefinition/resource-meta-source",
      "valueUri" : "#2f1591bacc3a9811"
    } ],
    "versionId" : "56",
    "lastUpdated" : "2019-11-05T08:19:50.252+01:00",
    "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient" ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><div class=\"hapiHeaderText\">Anne Holm <b>MØLLER </b></div><table class=\"hapiPropertyTable\"><tbody><tr><td>Identifier</td><td>0506504003</td></tr><tr><td>Address</td><td><span>Bjergagervej 110 </span><br/><span>Karrebæksminde </span></td></tr></tbody></table></div>"
  },
  "extension" : [ {
    "url" : "http://hl7.org/fhir/StructureDefinition/patient-interpreterRequired",
    "valueBoolean" : true
  } ],
  "identifier" : [ {
    "use" : "official",
    "system" : "urn:oid:1.2.208.176.1.2",
    "value" : "0506504003"
  } ],
  "name" : [ {
    "family" : "Møller",
    "given" : [ "Anne", "Holm" ]
  } ],
  "telecom" : [ {
    "system" : "other",
    "value" : "eBoks"
  } ],
  "gender" : "female",
  "address" : [ {
    "extension" : [ {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-municipality-code",
      "valueCoding" : {
        "system" : "http://danmarksadresser.dk/kommunekode",
        "code" : "0370",
        "display" : "Næstved"
      }
    }, {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-regional-subdivision-code",
      "valueCodeableConcept" : {
        "coding" : [ {
          "system" : "https://www.iso.org/obp/ui/#iso:code:3166:DK",
          "code" : "DK-85"
        } ]
      }
    } ],
    "use" : "home",
    "line" : [ "Bjergagervej 110" ],
    "city" : "Karrebæksminde",
    "postalCode" : "4736"
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_RelatedPerson_1.md

`PATCH [base]/RelatedPerson/180822`

__Header__
```
Accept-Charset: utf-8
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.5.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[ {
  "op" : "add",
  "path" : "/extension",
  "value" : [ {
    "valueString" : "patch contact note",
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient-contactnote"
  } ]
} ]
```

__Response__
```json
{
  "resourceType" : "RelatedPerson",
  "id" : "180822",
  "meta" : {
    "versionId" : "3",
    "lastUpdated" : "2021-09-09T07:08:56.874+00:00",
    "source" : "#c7c52539-151d-40",
    "profile" : [ "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-relatedperson" ]
  },
  "text" : {
    "status" : "generated",
    "div" : "<div xmlns=\"http://www.w3.org/1999/xhtml\"><table class=\"hapiPropertyTable\"><tbody><tr><td>Name</td><td><span>RelatedPerson Test</span></td></tr><tr><td>Related to patient</td><td><span>Patient/179103</span></td></tr></tbody></table></div>"
  },
  "extension" : [ {
    "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-patient-contactnote",
    "valueString" : "patch contact note"
  } ],
  "patient" : {
    "reference" : "https://patient.fut.trifork.com/fhir/Patient/179103"
  },
  "name" : [ {
    "use" : "official",
    "family" : "Test",
    "given" : [ "RelatedPerson" ]
  } ],
  "address" : [ {
    "extension" : [ {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-municipality-code",
      "valueCoding" : {
        "system" : "http://danmarksadresser.dk/kommunekode",
        "code" : "0101"
      }
    }, {
      "url" : "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-regional-subdivision-code",
      "valueCodeableConcept" : {
        "coding" : [ {
          "system" : "https://www.iso.org/obp/ui/#iso:code:3166:DK",
          "code" : "DK-85"
        } ]
      }
    } ],
    "use" : "home",
    "line" : [ "Mønsgade 20 5. tv" ],
    "city" : "Aarhus",
    "postalCode" : "8000",
    "country" : "Danmark"
  } ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/PATCH_Task.md

`PATCH [base]/Task/355`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiVGFzay5zZWFyY2giLCJUYXNrLnJlYWQiLCJUYXNrLmNyZWF0ZSIsIiR0ZXN0LW9ubHktY3JlYXRlIiwiVGFzay5wYXRjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
Accept: application/fhir+xml;q=1.0, application/fhir+json;q=1.0, application/xml+fhir;q=0.9, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/6.10.5 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/json-patch+json; charset=UTF-8
```

__Body__:
```json
[
  {
    "op": "replace",
    "path": "/status",
    "value": "cancelled"
  }
]
```

__Response__
```json
{
  "resourceType": "Task",
  "id": "355",
  "meta": {
    "versionId": "2",
    "lastUpdated": "2024-07-29T08:58:12.947+00:00",
    "source": "#9072ac61-fe9c-45b0-9094-02b6a009563d",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task"
    ]
  },
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-episodeOfCare",
      "valueReference": {
        "reference": "https://careplan.cit-task-1940.local/fhir/EpisodeOfCare/46460"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-category",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/task-category",
            "code": "TBD"
          }
        ]
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-restriction-category",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/restriction-category",
            "code": "None"
          }
        ]
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-task-responsible",
      "valueReference": {
        "reference": "https://organization.cit-task-1940.local/fhir/Practitioner/77721"
      }
    }
  ],
  "status": "cancelled",
  "intent": "proposal",
  "priority": "routine"
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/POST_Actionguidance.md

`POST [base]/Basic`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQWN0aW9uR3VpZGFuY2Uud3JpdGUiLCJBY3Rpb25HdWlkYW5jZS5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiXX0sInVzZXJfdHlwZSI6IlNZU1RFTSJ9.
Accept: application/fhir+json;q=1.0, application/json+fhir;q=0.9
User-Agent: HAPI-FHIR/5.7.0 (FHIR Client; FHIR 4.0.1/R4; apache)
Accept-Encoding: gzip
Content-Type: application/fhir+json; charset=UTF-8
```

__Body__:
```json
{
  "resourceType": "Basic",
  "meta": {
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance"
    ]
  },
  "contained": [
    {
      "resourceType": "Binary",
      "id": "1",
      "contentType": "application/json",
      "data": "eyJIZWxsbyI6IldvcmxkIn0="
    }
  ],
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-recommendation",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/plandefinition-recommendation",
            "code": "TBD",
            "display": "Example value - Under construction"
          }
        ],
        "text": "abcd"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-intendedAudience",
      "valueReference": {
        "reference": "https://organization.cit-questionnaire-1024.local/fhir/Organization/48454",
        "display": "Abcd"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
      "extension": [
        {
          "url": "reference",
          "valueReference": {
            "reference": "https://organization.cit-questionnaire-1024.local/fhir/Organization/98717"
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-basic-title",
      "valueString": "Jeg gik mig en tur"
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-version",
      "valueString": "1.0"
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-description",
      "valueMarkdown": "A record of an event made for purposes of maintaining a security log."
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-purpose",
      "valueMarkdown": "A record of an event made for purposes of maintaining a security log."
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-useContext",
      "valueUsageContext": {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "age",
          "display": "Age Range"
        },
        "valueReference": {
          "reference": "https://organization.cit-questionnaire-1024.local/fhir/Organization/2444",
          "display": "1234"
        }
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-status",
      "valueCoding": {
        "system": "http://hl7.org/fhir/publication-status",
        "code": "draft",
        "display": "draft"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-content",
      "valueReference": {
        "reference": "#1",
        "display": "A record of an event made for purposes of maintaining a security log."
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-for",
      "extension": [
        {
          "url": "forReference",
          "valueReference": {
            "reference": "https://organization.cit-questionnaire-1024.local/fhir/Organization/91571"
          }
        },
        {
          "url": "forType",
          "valueCoding": {
            "system": "http://hl7.org/fhir/resource-types",
            "code": "Questionnaire",
            "display": "Questionnaire"
          }
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-type",
      "valueCoding": {
        "system": "http://ehealth.sundhed.dk/cs/action-guidance-types",
        "code": "actionguidance",
        "display": "Action guidance display"
      }
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://ehealth.sundhed.dk/cs/basic-resource-type",
        "code": "actionguidance",
        "display": "Action guidance"
      }
    ]
  }
}
```

__Response__
```json
{
  "resourceType": "Basic",
  "id": "169",
  "meta": {
    "versionId": "1",
    "lastUpdated": "2022-06-16T09:16:59.601+00:00",
    "profile": [
      "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance"
    ]
  },
  "contained": [
    {
      "resourceType": "Binary",
      "id": "1",
      "meta": {
        "profile": [
          "http://hl7.org/fhir/StructureDefinition/Binary"
        ]
      },
      "contentType": "application/json",
      "data": "eyJIZWxsbyI6IldvcmxkIn0="
    }
  ],
  "extension": [
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-recommendation",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://ehealth.sundhed.dk/cs/plandefinition-recommendation",
            "code": "TBD",
            "display": "Example value - Under construction"
          }
        ],
        "text": "abcd"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-intendedAudience",
      "valueReference": {
        "reference": "https://organization.cit-questionnaire-1024.local/fhir/Organization/48454",
        "display": "Abcd"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-modifier-role",
      "extension": [
        {
          "url": "reference",
          "valueReference": {
            "reference": "https://organization.cit-questionnaire-1024.local/fhir/Organization/98717"
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
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-basic-title",
      "valueString": "Jeg gik mig en tur"
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-version",
      "valueString": "1.0"
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-description",
      "valueMarkdown": "A record of an event made for purposes of maintaining a security log."
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-purpose",
      "valueMarkdown": "A record of an event made for purposes of maintaining a security log."
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-useContext",
      "valueUsageContext": {
        "code": {
          "system": "http://terminology.hl7.org/CodeSystem/usage-context-type",
          "code": "age",
          "display": "Age Range"
        },
        "valueReference": {
          "reference": "https://organization.cit-questionnaire-1024.local/fhir/Organization/2444",
          "display": "1234"
        }
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-status",
      "valueCoding": {
        "system": "http://hl7.org/fhir/publication-status",
        "code": "draft",
        "display": "draft"
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-content",
      "valueReference": {
        "reference": "#1",
        "display": "A record of an event made for purposes of maintaining a security log."
      }
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-for",
      "extension": [
        {
          "url": "forReference",
          "valueReference": {
            "reference": "https://organization.cit-questionnaire-1024.local/fhir/Organization/91571"
          }
        },
        {
          "url": "forType",
          "valueCoding": {
            "system": "http://hl7.org/fhir/resource-types",
            "code": "Questionnaire",
            "display": "Questionnaire"
          }
        }
      ]
    },
    {
      "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-actionguidance-type",
      "valueCoding": {
        "system": "http://ehealth.sundhed.dk/cs/action-guidance-types",
        "code": "actionguidance",
        "display": "Action guidance display"
      }
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://ehealth.sundhed.dk/cs/basic-resource-type",
        "code": "actionguidance",
        "display": "Action guidance"
      }
    ]
  }
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/POST_ActivityDefinition_create-clone.md

`POST [base]/ActivityDefinition/394/$create-clone`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJ1c2VyX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXBsYW4tMTY0MS5sb2NhbC9maGlyL1ByYWN0aXRpb25lci8xMjM2NCIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJRdWVzdGlvbm5haXJlLnJlYWQiLCJRdWVzdGlvbm5haXJlLnNlYXJjaCIsIkFjdGl2aXR5RGVmaW5pdGlvbi5yZWFkIiwiUXVlc3Rpb25uYWlyZS5jcmVhdGUiLCJEb2N1bWVudFJlZmVyZW5jZS5jcmVhdGUiLCJEb2N1bWVudFJlZmVyZW5jZS5zZWFyY2giLCJBY3Rpdml0eURlZmluaXRpb24uY3JlYXRlIiwiRG9jdW1lbnRSZWZlcmVuY2UucmVhZCIsIkFjdGl2aXR5RGVmaW5pdGlvbi5zZWFyY2giXX0sImNvbnRleHQiOnsib3JnYW5pemF0aW9uX2lkIjoiaHR0cHM6Ly9vcmdhbml6YXRpb24uY2l0LXBsYW4tMTY0MS5sb2NhbC9maGlyL09yZ2FuaXphdGlvbi85MDQ4NCIsInRlYW1fb25fZW9jIjpmYWxzZX0sInVzZXJfdHlwZSI6IlBSQUNUSVRJT05FUiJ9.
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
      "name": "clone-operation",
      "valueCoding": {
        "system": "http://ehealth.sundhed.dk/cs/ehealth-clone-operation",
        "code": "minor-version"
      }
    },
    {
      "name": "default-clone-behavior",
      "valueBoolean": false
    },
    {
      "name": "deep-clone-references",
      "valueReference": {
        "reference": "https://plan.cit-plan-1641.local/fhir/DocumentReference/392"
      }
    },
    {
      "name": "deep-clone-references",
      "valueReference": {
        "reference": "https://plan.cit-plan-1641.local/fhir/DocumentReference/393"
      }
    },
    {
      "name": "deep-clone-references",
      "valueReference": {
        "reference": "https://questionnaire.cit-plan-1641.local/fhir/Questionnaire/17416"
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
      "fullUrl": "https://plan.cit-plan-1641.local/fhir/https://questionnaire.cit-plan-1641.local/fhir/Questionnaire/70050",
      "resource": {
        "resourceType": "Questionnaire",
        "id": "70050",
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
                  "reference": "https://organization.cit-plan-1641.local/fhir/Organization/22499"
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
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base",
            "valueIdentifier": {
              "system": "urn:ietf:rfc:3986",
              "value": "urn:uuid:bb19e17f-96d8-49b0-9e19-05e8c5a84118",
              "assigner": {
                "identifier": {
                  "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
                  "value": "cit-plan-1641"
                }
              }
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-predecessor",
            "valueIdentifier": {
              "system": "urn:ietf:rfc:3986",
              "value": "urn:uuid:fe8f58f3-ab5e-44ee-91ea-6823844d867d",
              "assigner": {
                "identifier": {
                  "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
                  "value": "cit-plan-1641"
                }
              }
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base-environment",
            "valueIdentifier": {
              "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
              "value": "cit-plan-1641"
            }
          }
        ],
        "identifier": [
          {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:uuid:8d9fe979-f5da-4af7-a1aa-a2e0e84bca3f"
          }
        ],
        "version": "1.0",
        "name": "a78f34ef-3a5e-4ac9-81dd-3d37b98ec7ff",
        "status": "active"
      }
    },
    {
      "fullUrl": "https://plan.cit-plan-1641.local/fhir/DocumentReference/395",
      "resource": {
        "resourceType": "DocumentReference",
        "id": "395",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-31T13:16:04.984+00:00",
          "source": "#15c5d661-1e89-4447-bcf9-3452de164cd8",
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
        "date": "2024-07-31T13:16:04.230+00:00",
        "content": [
          {
            "attachment": {
              "url": "http://some.com/"
            }
          }
        ]
      }
    },
    {
      "fullUrl": "https://plan.cit-plan-1641.local/fhir/DocumentReference/396",
      "resource": {
        "resourceType": "DocumentReference",
        "id": "396",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-31T13:16:04.995+00:00",
          "source": "#15c5d661-1e89-4447-bcf9-3452de164cd8",
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
        "date": "2024-07-31T13:16:04.375+00:00",
        "content": [
          {
            "attachment": {
              "url": "http://some.com/"
            }
          }
        ]
      }
    },
    {
      "fullUrl": "https://plan.cit-plan-1641.local/fhir/ActivityDefinition/397",
      "resource": {
        "resourceType": "ActivityDefinition",
        "id": "397",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-31T13:16:05.006+00:00",
          "source": "#15c5d661-1e89-4447-bcf9-3452de164cd8",
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
                  "reference": "https://organization.cit-plan-1641.local/fhir/Organization/90484"
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
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base",
            "valueIdentifier": {
              "system": "urn:ietf:rfc:3986",
              "value": "urn:uuid:06ffd68d-781a-4466-a16d-06f2547d6243",
              "assigner": {
                "identifier": {
                  "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
                  "value": "cit-plan-1641"
                }
              }
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-predecessor",
            "valueIdentifier": {
              "system": "urn:ietf:rfc:3986",
              "value": "urn:uuid:04600b77-42c0-4fc0-b4c1-0bce12cb4c07"
            }
          },
          {
            "url": "http://ehealth.sundhed.dk/fhir/StructureDefinition/ehealth-base-environment",
            "valueIdentifier": {
              "system": "http://ehealth.sundhed.dk/id/ehealth-environment",
              "value": "cit-plan-1641"
            }
          }
        ],
        "identifier": [
          {
            "system": "urn:ietf:rfc:3986",
            "value": "urn:uuid:500e8ca7-4691-4fb6-9282-e6d69ce12fe0"
          }
        ],
        "version": "2.5",
        "name": "41e209bd-37df-4e4c-9ef5-fce023528145",
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
            "type": "documentation",
            "resource": "https://plan.cit-plan-1641.local/fhir/https://questionnaire.cit-plan-1641.local/fhir/Questionnaire/70050"
          },
          {
            "type": "documentation",
            "resource": "https://plan.cit-plan-1641.local/fhir/DocumentReference/395/_history/1"
          },
          {
            "type": "documentation",
            "resource": "https://plan.cit-plan-1641.local/fhir/DocumentReference/396/_history/1"
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
      }
    }
  ]
}
```

---

File: repos/fut-infrastructure_SLASH_implementation-guide/input/includes/POST_ActivityDefinition_validate.md

`POST [base]/ActivityDefinition/448/$validate`

__Header__
```
Accept-Charset: utf-8
Authorization: Bearer eyJhbGciOiJub25lIn0.eyJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQWN0aXZpdHlEZWZpbml0aW9uLnVwZGF0ZSIsIkFjdGl2aXR5RGVmaW5pdGlvbi5yZWFkIiwiJHRlc3Qtb25seS1jcmVhdGUiLCJBY3Rpdml0eURlZmluaXRpb24uY3JlYXRlIiwiQWN0aXZpdHlEZWZpbml0aW9uLnNlYXJjaCJdfSwidXNlcl90eXBlIjoiU1lTVEVNIn0.
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
      "name": "resource",
      "resource": {
        "resourceType": "ActivityDefinition",
        "id": "448",
        "meta": {
          "versionId": "1",
          "lastUpdated": "2024-07-31T13:16:31.868+00:00",
          "source": "#b5046fd1-3eb1-47da-9db2-e393118bfcc0",
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
                  "reference": "https://organization.cit-plan-1641.local/fhir/Organization/54235"
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
        "name": "23e950d5-0f1e-453f-81d9-45ad5df9be4f",
        "status": "active",
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
        "code": {
          "coding": [
            {
              "system": "urn:oid:1.2.208.176.2.1",
              "code": "NPU03011"
            }
          ]
        }
      }
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
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><h1>Operation Outcome</h1><table border=\"0\"><tr><td style=\"font-weight: bold;\">WARNING</td><td>[Parameters.parameter[0].resource/*ActivityDefinition/448*/, Line[1] Col[1381]]</td><td>Rule adf-0: 'Name should be usable as an identifier for the module by machine processing applications such as code generation' Failed</td></tr><tr><td style=\"font-weight: bold;\">WARNING</td><td>[Parameters.parameter[0].resource/*ActivityDefinition/448*/, Line[1] Col[1381]]</td><td>Rule adf-0: 'Name should be usable as an identifier for the module by machine processing applications such as code generation' Failed</td></tr></table></div>"
  },
  "issue": [
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/operationoutcome-issue-line",
          "valueInteger": 1
        },
        {
          "url": "http://hl7.org/fhir/StructureDefinition/operationoutcome-issue-col",
          "valueInteger": 1381
        }
      ],
      "severity": "warning",
      "code": "processing",
      "diagnostics": "Rule adf-0: 'Name should be usable as an identifier for the module by machine processing applications such as code generation' Failed",
      "location": [
        "Parameters.parameter[0].resource/*ActivityDefinition/448*/",
        "Line[1] Col[1381]"
      ]
    },
    {
      "extension": [
        {
          "url": "http://hl7.org/fhir/StructureDefinition/operationoutcome-issue-line",
          "valueInteger": 1
        },
        {
          "url": "http://hl7.org/fhir/StructureDefinition/operationoutcome-issue-col",
          "valueInteger": 1381
        }
      ],
      "severity": "warning",
      "code": "processing",
      "diagnostics": "Rule adf-0: 'Name should be usable as an identifier for the module by machine processing applications such as code generation' Failed",
      "location": [
        "Parameters.parameter[0].resource/*ActivityDefinition/448*/",
        "Line[1] Col[1381]"
      ]
    }
  ]
}
```

---

