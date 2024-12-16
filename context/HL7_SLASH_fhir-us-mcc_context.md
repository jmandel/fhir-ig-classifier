File: repos/HL7_SLASH_fhir-us-mcc/input/fsh/aliases.fsh

Alias: $sct = http://snomed.info/sct
Alias: $careplan-category = http://hl7.org/fhir/us/core/CodeSystem/careplan-category
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status

Alias: $condition-category = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $condition-health-concern = http://hl7.org/fhir/us/core/CodeSystem/condition-category

Alias: $condition-dueTo = http://hl7.org/fhir/StructureDefinition/condition-dueTo

Alias: $loinc = http://loinc.org
Alias: $us-core-documentreference-category = http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category
Alias: $formatcode = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $administrative-gender = http://hl7.org/fhir/administrative-gender
Alias: $goal-priority = http://terminology.hl7.org/CodeSystem/goal-priority
Alias: $goal-relationship-type = http://terminology.hl7.org/CodeSystem/goal-relationship-type
Alias: $goal-category = http://terminology.hl7.org/CodeSystem/goal-category
Alias: $cvx = http://hl7.org/fhir/sid/cvx
Alias: $ndc = http://hl7.org/fhir/sid/ndc
Alias: $rxnorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $diet = http://terminology.hl7.org/CodeSystem/diet
Alias: $us-core-category = http://hl7.org/fhir/us/core/CodeSystem/us-core-category
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $referencerange-meaning = http://terminology.hl7.org/CodeSystem/referencerange-meaning
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $provider-taxonomy = http://nucc.org/provider-taxonomy

---

File: repos/HL7_SLASH_fhir-us-mcc/input/fsh/bundle_CarePlan_serviceRequestsEtc.fsh

//Dialysis
Instance: dialysis-request
InstanceOf: ServiceRequest
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCServiceRequest"
* status = #active
* intent = #plan
* code = $sct#417038009 "Referral for dialysis (procedure)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* reasonReference = Reference(Condition/ConditionCKD) "Chronic Kidney Disease"
* authoredOn = "2022-06-18"
* requester = Reference(PractitionerRole/dr-vince-jones) "Dr. Vince Jones"
* occurrenceTiming.repeat.count = 20
* occurrenceTiming.repeat.countMax = 30
* occurrenceTiming.repeat.frequency = 3
* occurrenceTiming.repeat.period = 1
* occurrenceTiming.repeat.periodUnit = #wk
* patientInstruction = "Call the clinic at 555-555-5555 to set up your appointments"

Instance: dialysis-for-bundle
InstanceOf: Procedure
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCProcedure"
* status = #completed
* code = $sct#302497006 "Hemodialysis (procedure)"
* code.text = "Hemodialysis"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* performedDateTime = "2022-06-03"
* recorder = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* asserter = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* performer.actor = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* reasonReference = Reference(Condition/ConditionCKD) "Chronic Kidney Disease"
* basedOn = Reference(ServiceRequest/dialysis-request)

Instance: dialysis-for-bundle2
InstanceOf: Procedure
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCProcedure"
* status = #completed
* code = $sct#302497006 "Hemodialysis (procedure)"
* code.text = "Hemodialysis"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* performedDateTime = "2022-06-03"
* recorder = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* asserter = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* performer.actor = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* reasonReference = Reference(Condition/ConditionCKD) "Chronic Kidney Disease"
* basedOn = Reference(ServiceRequest/dialysis-request)

Instance: dialysis-for-bundle3
InstanceOf: Procedure
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCProcedure"
* status = #completed
* code = $sct#302497006 "Hemodialysis (procedure)"
* code.text = "Hemodialysis"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* performedDateTime = "2022-07-03"
* recorder = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* asserter = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* performer.actor = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* reasonReference = Reference(Condition/ConditionCKD) "Chronic Kidney Disease"
* basedOn = Reference(ServiceRequest/dialysis-request)

Instance: ckd-app-education
InstanceOf: Procedure
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCProcedure"
* status = #completed
* category = $sct#311401005 "Patient education (procedure)"
* category.text = "Education"
* code = $sct#311401005 "Patient education (procedure)"
//* code.text = "Demonstrated (taught) to use CKD app"
* note.text = "Demonstrated (taught) to use CKD app"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* performedDateTime = "2022-07-03"
* recorder = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* asserter = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* performer.actor = Reference(Practitioner/practitionerMCC-1) "Dr Henry Levin"
* reasonReference = Reference(Condition/ConditionCKD) "Chronic Kidney Disease"
* basedOn = Reference(ServiceRequest/dialysis-request)

//Diet
Instance: dietitian-referral
InstanceOf: ServiceRequest
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCServiceRequest"
* status = #active
* intent = #plan
* code = $sct#103699006	"Referral to dietitian nutritionist"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* reasonReference = Reference(Condition/problem-list-1)
* authoredOn = "2022-05-05"
* requester = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* patientInstruction = "Call the clinic at 1-800-LUV-DIET to set up your appointments"

Instance: dietitian-consult
InstanceOf: Procedure
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCProcedure"
* status = #completed
* category = $sct#311401005 "Patient education (procedure)"
* category.text = "Education"
* code = $sct#370847001 "Dietary needs education (procedure)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* performedDateTime = "2022-05-25"
* performer.actor.display = "Dietitian ProviderRole reference"
* reasonReference = Reference(Condition/problem-list-1)
* basedOn = Reference(ServiceRequest/dietitian-referral)
* note.authorString = "Dietitian ProviderRole reference"
* note.text = "Instructions given on how to achieve a protein intake of 1-1.2g/kg per day and an increased fiber intake of 20-25g/day. Also, recommended to eat small frequent meals and to drink liquid between meals." 

//Observation better diet
//caregiver (daughter) Observation!
Instance: better-diet
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCPatientCaregiverConditionStatus"
* extension.url = "http://hl7.org/fhir/StructureDefinition/resource-pertainsToGoal"
* extension.valueReference = Reference(Goal/access-affordable-healthy-food)
* status = #final
* category = $observation-category#social-history "Social History"
* category.text = "Caregivers thoughts on the patient's condition status"
* code = $loinc#89253-9 "Trend"
* code.text = "Observation on patient/caregiver feelings on the condition status"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* focus[0] = Reference(Condition/patient-health-concern-3)
* focus[+] = Reference(Condition/patient-health-concern-4)
* focus[+]  = Reference(Condition/problem-list-1)
* effectiveDateTime = "2022-11-10T16:48:57.246958-08:00"
* performer = Reference(RelatedPerson/daughter1)
* valueCodeableConcept = $loinc#LA65-8 "Improved"
* valueCodeableConcept.text = "Patty has made diet changes and has an improved appetite. She is logging meals and the logs show protein intake of about 1g/kg/day and fiber intake of about 23g/day"

//Long COVID
Instance: long-covid-request
InstanceOf: ServiceRequest
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCServiceRequest"
* status = #active
* intent = #plan
* code = $sct#442135008 "Referral to infectious disease clinic (procedure)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* reasonReference = Reference(Condition/encounter-diag-1) "Long COVID"
* authoredOn = "2022-05-20"
* requester = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* patientInstruction = "Call the clinic at 444-COV-ID19 to set up your appointments"

//Chilblains Treatment:
//	nifedipine (Procardia)30 mg (extended release) PO once daily
//	Avoid scratching
//	Apply Calamine Lotion 3-4 x/day
//	Apply Lanolin or coconut oil 1x/day
//	Wear wool socks
//	Careful use of heating pad
Instance: med-for-chilblains
InstanceOf: MedicationRequest
Usage: #example
* identifier.use = #usual
* identifier.system = "urn:oid:1.2.840.114350.1.13.861.1.7.2.798268"
* identifier.value = "2454978"
* status = #active
* intent = #order
* category = http://terminology.hl7.org/CodeSystem/medicationrequest-category#outpatient "Outpatient"
* category.text = "Outpatient"
* medicationReference.display = "nifedipine (Procardia)30 mg (extended release)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* authoredOn = "2022-05-03T15:41:39Z"
* requester = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* recorder = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* dosageInstruction.sequence = 1
* dosageInstruction.patientInstruction = "Chilblains Treatment: Take nifedipine (Procardia)30 mg (extended release) PO once daily, Avoid scratching, Apply Calamine Lotion 3-4 x/day, Apply Lanolin or coconut oil 1x/day, wear wool socks, and carefully use heating pad to relieve pain."
* dosageInstruction.asNeededBoolean = false
* dosageInstruction.route = $sct#26643006 "Oral route (qualifier value)"
* dosageInstruction.timing.repeat.frequency = 1
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.doseAndRate[0].doseQuantity = 1 '{tbl}' "tablet"
* dosageInstruction.doseAndRate[=].type = http://terminology.hl7.org/CodeSystem/dose-rate-type#ordered "Ordered"
* dosageInstruction.doseAndRate[=].type.text = "ordered"
* dosageInstruction.doseAndRate[=].doseQuantity = 30 'mg' "mg"
* reasonReference = Reference(Condition/chilblain-found) "Chilblains"

//CarePlan.activity.outcomeReference(ServiceRequest/pt-3x-wk)
Instance: pt-3x-wk
InstanceOf: ServiceRequest
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCServiceRequest"
* status = #active
* intent = #plan
* code = $sct#444831000124102 "Referral for physical therapy (procedure)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* reasonReference = Reference(Condition/encounter-diag-1) "Long COVID"
* authoredOn = "2022-05-03"
* requester = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* occurrenceTiming.repeat.count = 20
* occurrenceTiming.repeat.countMax = 30
* occurrenceTiming.repeat.frequency = 3
* occurrenceTiming.repeat.period = 1
* occurrenceTiming.repeat.periodUnit = #wk
* patientInstruction = "Call the clinic at 444-COV-ID19 to set up your appointments"

//CarePlan.activity.outcomeReference(ServiceRequest/counseling-1x-wk)
Instance: counseling-1x-wk
InstanceOf: ServiceRequest
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCServiceRequest"
* status = #active
* intent = #plan
* code = $sct#409063005 "Counseling (procedure)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* reasonReference = Reference(Condition/encounter-diag-1) "Long COVID"
* authoredOn = "2022-05-03"
* requester = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* occurrenceTiming.repeat.count = 20
* occurrenceTiming.repeat.countMax = 30
* occurrenceTiming.repeat.frequency = 3
* occurrenceTiming.repeat.period = 1
* occurrenceTiming.repeat.periodUnit = #wk
* patientInstruction = "Call the clinic at 444-COV-ID19 to set up your appointments"

//CarePlan.activity.outcomeReference(ServiceRequest/meditation-7x-wk)
//Instance: meditation-7x-wk
//InstanceOf: ServiceRequest
//Usage: #example
//* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCServiceRequest"
//* status = #active
//* intent = #plan
//* code.text = "Meditation self-guided"
//* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
//* reasonReference = Reference(Condition/encounter-diag-1) "Long COVID"
//* authoredOn = "2022-05-03"
//* requester = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
//* occurrenceTiming.repeat.frequency = 1
//* occurrenceTiming.repeat.period = 1
//* occurrenceTiming.repeat.periodUnit = #wk
//* performer = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
//* patientInstruction = "Meditate every day"
Instance: meditation-7x-wk
InstanceOf: Task
Usage: #example
* status = #ready "Ready"
* intent = #order
* priority = #routine
* reasonReference = Reference(Condition/encounter-diag-1) "Long COVID"
* code = http://hl7.org/fhir/CodeSystem/task-code#fulfill "Fulfill the focal request"
* description = "Practice self-guided meditation every day"
* authoredOn = "2022-05-03"
* for = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* requester = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* owner = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"


//MOCA improved cognition
Instance: observation-moca
InstanceOf: Observation
//Description: "MOCA new result"
Usage: #example
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* status = #final
* effectiveDateTime = "2022-12-08T17:32:00-05:00"
* code = $loinc#72133-2 "Montreal Cognitive Assessment [MoCA]"
* category[0] = $observation-category#survey "Survey"
* category[+] = http://hl7.org/fhir/us/core/CodeSystem/us-core-category#cognitive-status "Cognitive Status"
* performer = Reference(PractitionerRole/careCoordinator-1) "Julie Smith"
* hasMember[0] = Reference(obs-response-moca)
* derivedFrom = Reference(questionnnaire-res-moca)

Instance: questionnnaire-res-moca
InstanceOf: QuestionnaireResponse
//Description: "MOCA new questionnaire response"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCQuestionnaireResponse"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* status = #completed
* questionnaire = "http://example.org/Questionnaire/MDS3.0-NC-1.17"
//"MDS3.0-NC-1.17"
//"Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* authored = "2022-12-08T17:32:00-05:00"
* author = Reference(PractitionerRole/careCoordinator-1) "Julie Smith"
* item[0].linkId = "MoCA"
* item[0].text =  "Montreal Cognitive Assessment [MoCA]"
* item[0].item[0].linkId = "MoCA/TotalScore"
* item[0].item[0].text =  "Total score [MoCA]"
* item[0].item[0].answer.valueQuantity = 25 '{score}' "score"

Instance: obs-response-moca
InstanceOf: Observation
//Description: "MOCA new converted observation from question"
Usage: #example
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* status = #final
* effectiveDateTime = "2022-12-08T17:32:00-05:00"
* code = $loinc#72172-0 "Total score [MoCA]"
* category[0] = $observation-category#survey "Survey"
* category[+] = http://hl7.org/fhir/us/core/CodeSystem/us-core-category#cognitive-status "Cognitive Status"
* valueQuantity = 25 '{score}' "score"
* performer = Reference(PractitionerRole/careCoordinator-1) "Julie Smith"
* derivedFrom = Reference(questionnnaire-res-moca)

Instance: observation-moca-original
InstanceOf: Observation
//Description: "MOCA initial result"
Usage: #example
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* status = #final
* effectiveDateTime = "2022-04-28T17:32:00-05:00"
* code = $loinc#72133-2 "Montreal Cognitive Assessment [MoCA]"
* category[0] = $observation-category#survey "Survey"
* category[+] = http://hl7.org/fhir/us/core/CodeSystem/us-core-category#cognitive-status "Cognitive Status"
* performer = Reference(PractitionerRole/careCoordinator-1) "Julie Smith"
* hasMember[0] = Reference(obs-response-moca)
* derivedFrom = Reference(questionnnaire-res-moca)

Instance: questionnnaire-res-moca-original
InstanceOf: QuestionnaireResponse
//Description: "MOCA initial questionnaire response"
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCQuestionnaireResponse"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* status = #completed
* questionnaire = "http://example.org/Questionnaire/MDS3.0-NC-1.17"
//"MDS3.0-NC-1.17"
//"Minimum Data Set (MDS) - version 3.0 - Resident Assessment Instrument (RAI) version 1.17.1 [CMS Assessment]"
* authored = "2022-04-28T17:32:00-05:00"
* author = Reference(PractitionerRole/careCoordinator-1) "Julie Smith"
* item[0].linkId = "MoCA"
* item[0].text =  "Montreal Cognitive Assessment [MoCA]"
* item[0].item[0].linkId = "MoCA/TotalScore"
* item[0].item[0].text =  "Total score [MoCA]"
* item[0].item[0].answer.valueQuantity = '{score}' "score"

Instance: obs-response-moca-original
InstanceOf: Observation
//Description: "MOCA converted original observation from question"
Usage: #example
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* status = #final
* effectiveDateTime = "2022-04-28T17:32:00-05:00"
* code = $loinc#72172-0 "Total score [MoCA]"
* category[0] = $observation-category#survey "Survey"
* category[+] = http://hl7.org/fhir/us/core/CodeSystem/us-core-category#cognitive-status "Cognitive Status"
* valueQuantity = 10 '{score}' "score"
* performer = Reference(PractitionerRole/careCoordinator-1) "Julie Smith"
* derivedFrom = Reference(questionnnaire-res-moca)

---

File: repos/HL7_SLASH_fhir-us-mcc/input/fsh/carePlanexampleInstanceForBundle.fsh

//careplan
Instance: careplan-for-bundle
InstanceOf: CarePlan
Usage: #example
//* meta.extension[0].valueMarkdown = "This is an example for the *MCC CarePlan Profile*."
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/mccCarePlan"
//* extension.url = "http://hl7.org/fhir/us/mcc/StructureDefinition/custodian"
//* extension.valueReference = Reference(Practitioner/careCoordinator1)
//* extension.url = "http://hl7.org/fhir/us/mcc/StructureDefinition/custodian"
//* extension.valueReference = Reference(RelatedPerson/caregiver-of-noelle)


* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b> Narrative: CarePlan </b><a name=\"careplan-for-bundle\"> </a><a name=\"hccareplan-for-bundle\"> </a></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">ResourceCarePlan \"careplan-for-bundle\" </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-mccCarePlan.html\">Multiple Chronic Care Condition Care Plan</a></p></div><p><b>Custodian R5 backport</b>: <a href=\"Practitioner-practitionerMCC-3v.html\">Practitioner/practitionerMCC-3v: Dr. John Carlson</a> \" CARLSON\"</p><p><b>status</b>: active</p><p><b>intent</b>: plan</p><p><b>category</b>: Care Plan <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"https://browser.ihtsdotools.org/\">SNOMED CT</a>#734163000; <a href=\"http://hl7.org/fhir/us/core/STU6.1/CodeSystem-careplan-category.html\">US Core CarePlan Category Extension Codes[6.1.0]</a>#assess-plan)</span></p><p><b>subject</b>: <a href=\"Patient-cc-pat-pnoelle.html\">Patient/cc-pat-pnoelle: Patricia Noelle</a> \" NOELLE\"</p><p><b>period</b>: 2022-05-20 --&gt; (ongoing)</p><p><b>created</b>: 2022-05-20</p><p><b>contributor</b>: </p><ul><li><a href=\"Practitioner-practitionerMCC-3v.html\">Practitioner/practitionerMCC-3v: Dr John Carlson, Primary Care Physician</a> \" CARLSON\"</li><li><a href=\"PractitionerRole-careCoordinator-1.html\">PractitionerRole/careCoordinator-1: Care-coordinator, served by Julie Smith</a></li><li><a href=\"Patient-cc-pat-pnoelle.html\">Patient/cc-pat-pnoelle: Noelle</a> \" NOELLE\"</li><li><a href=\"PractitionerRole-dr-vince-jones.html\">PractitionerRole/dr-vince-jones: Nephrologist Role, served by Dr Vince Jones</a></li><li><a href=\"RelatedPerson-daughter1.html\">RelatedPerson/daughter1: Rose Noelle, Daughter</a> \" ROSE\"</li></ul><p><b>careTeam</b>: <a href=\"CareTeam-careteam-for-bundle.html\">CareTeam/careteam-for-bundle: Long-COVID and CKD focused care team</a> \"Care Team of Noelle Example for LONG-COVID bundle\"</p><p><b>addresses</b>: </p><ul><li><a href=\"Condition-ConditionCKD.html\">Condition/ConditionCKD: Chronic Kidney Disease</a></li><li><a href=\"Condition-encounter-diag-1.html\">Condition/encounter-diag-1: Long COVID</a></li></ul><p><b>supportingInfo</b>: </p><ul><li><a href=\"Observation-arterial-blood-gas-panel.html\">Observation/arterial-blood-gas-panel</a></li><li><a href=\"Observation-reduced-pain.html\">Observation/reduced-pain: Outcome example. Caregiver's observed thoughts on pain</a></li><li><a href=\"Condition-patient-health-concern-1.html\">Condition/patient-health-concern-1: Patient Health Concern: Worry that Long Covid symptoms will effect CKD</a></li><li><a href=\"Condition-patient-health-concern-2.html\">Condition/patient-health-concern-2: Patient Health Concern: Hard to exercise due to pain</a></li><li><a href=\"Condition-patient-health-concern-3.html\">Condition/patient-health-concern-3: Patient Health Concern: Struggles to manage her diet and find affordable healthy food choices under her financial strain</a></li><li><a href=\"Condition-patient-health-concern-4.html\">Condition/patient-health-concern-4: Patient Health Concern: Poor appetite for healthy CKD appropriate foods, likes cola, cake and chips</a></li><li><a href=\"Condition-careTeam-concerns-1.html\">Condition/careTeam-concerns-1: CareTeam Health Concern: Imbalanced Nutrition</a></li><li><a href=\"Condition-careTeam-concerns-2.html\">Condition/careTeam-concerns-2: CareTeam Health Concern: Dyspnea</a></li><li><a href=\"Condition-careTeam-concerns-3.html\">Condition/careTeam-concerns-3: CareTeam Health Concern: Pain in Legs</a></li><li><a href=\"Condition-careTeam-concerns-4.html\">Condition/careTeam-concerns-4: CareTeam Health Concern: Pain in Hands</a></li><li><a href=\"Condition-careTeam-concerns-5.html\">Condition/careTeam-concerns-5: CareTeam Health Concern: Pain in arms</a></li><li><a href=\"Condition-problem-list-1.html\">Condition/problem-list-1: Finding: Food aversion and cravings</a></li><li><a href=\"Condition-problem-list-2.html\">Condition/problem-list-2: Diagnosis: Metabolic acidosis</a></li><li><a href=\"Condition-chilblain-resolved.html\">Condition/chilblain-resolved: Long Covid related condition: Pustular chilblain resolved</a></li><li><a href=\"Observation-symptom2.html\">Observation/symptom2: Long Covid symptom: Dyspnea</a></li><li><a href=\"Observation-symptom3.html\">Observation/symptom3: Long Covid symptom: Pain in Legs</a></li><li><a href=\"Observation-symptom4.html\">Observation/symptom4: Long Covid symptom: Pain in hands</a></li><li><a href=\"Observation-symptom5.html\">Observation/symptom5: Long Covid symptom: Pain in arms</a></li><li><a href=\"Observation-symptom6.html\">Observation/symptom6: Long Covid symptom: Brain Fog - Intermittent confusion</a></li><li><a href=\"Observation-symptom7.html\">Observation/symptom7: Long Covid symptom: Brain Fog - Memory impairment</a></li><li><a href=\"Observation-symptom8.html\">Observation/symptom8: Long Covid symptom: Covid Toes - Toe swelling</a></li><li><a href=\"Observation-symptom9.html\">Observation/symptom9: Long Covid symptom: Covid Toes - Pustular chilblain</a></li></ul><p><b>goal</b>: </p><ul><li><a href=\"Goal-lower-pain-minimal-opioids.html\">Goal/lower-pain-minimal-opioids: Lower pain with minimal opioids</a></li><li><a href=\"Goal-appetite-to-normal.html\">Goal/appetite-to-normal: Return appetite to normal</a></li><li><a href=\"Goal-electrolyte-protein-normal-range.html\">Goal/electrolyte-protein-normal-range: Get Electrolyte and proteins back to normal</a></li><li><a href=\"Goal-bmi-normal-range.html\">Goal/bmi-normal-range: Get BMI into healthy range</a></li><li><a href=\"Goal-access-affordable-healthy-food.html\">Goal/access-affordable-healthy-food: Improve access to affordable, healthy food</a></li></ul><blockquote><p><b>activity</b></p><p><b>outcomeReference</b>: </p><ul><li><a href=\"Procedure-dietitian-consult.html\">Procedure/dietitian-consult: Dietitian consult</a></li><li><a href=\"Observation-better-diet.html\">Observation/better-diet: Observation by caregiver (daughter) of improvement in diet</a></li></ul><p><b>reference</b>: <a href=\"ServiceRequest-dietitian-referral.html\">ServiceRequest/dietitian-referral: Dietitian Referral</a></p></blockquote><blockquote><p><b>activity</b></p><p><b>outcomeReference</b>: </p><ul><li><a href=\"Procedure-dialysis-for-bundle.html\">Procedure/dialysis-for-bundle</a></li><li><a href=\"Procedure-dialysis-for-bundle2.html\">Procedure/dialysis-for-bundle2</a></li><li><a href=\"Procedure-dialysis-for-bundle3.html\">Procedure/dialysis-for-bundle3</a></li></ul><p><b>reference</b>: <a href=\"ServiceRequest-dialysis-request.html\">ServiceRequest/dialysis-request</a></p></blockquote><blockquote><p><b>activity</b></p><p><b>outcomeReference</b>: <a href=\"Procedure-ckd-app-education.html\">Procedure/ckd-app-education</a></p></blockquote><blockquote><p><b>activity</b></p><p><b>outcomeReference</b>: </p><ul><li><a href=\"MedicationRequest-med-for-chilblains.html\">MedicationRequest/med-for-chilblains: Treatment for chilblains</a></li><li><a href=\"Condition-chilblain-resolved.html\">Condition/chilblain-resolved</a></li><li><a href=\"ServiceRequest-pt-3x-wk.html\">ServiceRequest/pt-3x-wk: PT 3x per week</a></li><li><a href=\"ServiceRequest-counseling-1x-wk.html\">ServiceRequest/counseling-1x-wk: Counseling 1x per week</a></li><li><a href=\"Task-meditation-7x-wk.html\">Task/meditation-7x-wk: Meditation 7x per week</a></li><li><a href=\"Observation-observation-moca.html\">Observation/observation-moca: MOCA new result showing improvement</a></li><li><a href=\"Observation-observation-moca-original.html\">Observation/observation-moca-original: MOCA initial result showing impairment</a></li></ul><p><b>progress</b>: Long COVID symptoms improving ( @2022-12-10)</p><p><b>reference</b>: <a href=\"ServiceRequest-long-covid-request.html\">ServiceRequest/long-covid-request: Long Covid Clinic Referral serviceRequest</a></p></blockquote></div>"

* text.status = #additional





* status = #active
* intent = #plan
* category.coding[0] = $sct#734163000 "Care Plan"
* category.coding[+].version = "6.1.0"
* category.coding[=] = $careplan-category#assess-plan
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* period.start = "2022-05-20"
* created = "2022-05-20"
* extension[0].url = "http://hl7.org/fhir/us/mcc/StructureDefinition/custodian"
* extension[=].valueReference = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* contributor[0] = Reference(Practitioner/practitionerMCC-3v) "Dr John Carlson, Primary Care Physician"
* contributor[+] = Reference(PractitionerRole/careCoordinator-1) "Care-coordinator, served by Julie Smith"
* contributor[+] = Reference(Patient/cc-pat-pnoelle) "Noelle"
* contributor[+] = Reference(PractitionerRole/dr-vince-jones) "Nephrologist Role, served by Dr Vince Jones"
* contributor[+] = Reference(RelatedPerson/daughter1) "Rose Noelle, Daughter"
* careTeam = Reference(CareTeam/careteam-for-bundle) "Long-COVID and CKD focused care team"
* addresses[0] = Reference(Condition/ConditionCKD) "Chronic Kidney Disease"
* addresses[+} = Reference(Condition/encounter-diag-1) "Long COVID"

* supportingInfo[0] = Reference(Observation/arterial-blood-gas-panel)

* supportingInfo[+] = Reference(Observation/reduced-pain) "Outcome example. Caregiver's observed thoughts on pain"

* supportingInfo[+] = Reference(Condition/patient-health-concern-1) "Patient Health Concern: Worry that Long Covid symptoms will effect CKD"
* supportingInfo[+] = Reference(Condition/patient-health-concern-2) "Patient Health Concern: Hard to exercise due to pain"
* supportingInfo[+] = Reference(Condition/patient-health-concern-3) "Patient Health Concern: Struggles to manage her diet and find affordable healthy food choices under her financial strain"
* supportingInfo[+] = Reference(Condition/patient-health-concern-4) "Patient Health Concern: Poor appetite for healthy CKD appropriate foods, likes cola, cake and chips"
* supportingInfo[+] = Reference(Condition/careTeam-concerns-1) "CareTeam Health Concern: Imbalanced Nutrition"
* supportingInfo[+] = Reference(Condition/careTeam-concerns-2) "CareTeam Health Concern: Dyspnea"
* supportingInfo[+] = Reference(Condition/careTeam-concerns-3) "CareTeam Health Concern: Pain in Legs"
* supportingInfo[+] = Reference(Condition/careTeam-concerns-4) "CareTeam Health Concern: Pain in Hands"
* supportingInfo[+] = Reference(Condition/careTeam-concerns-5) "CareTeam Health Concern: Pain in arms"
* supportingInfo[+] = Reference(Condition/problem-list-1) "Finding: Food aversion and cravings"
* supportingInfo[+] = Reference(Condition/problem-list-2) "Diagnosis: Metabolic acidosis"
//* supportingInfo[+] = Reference(Condition/chilblain-found) "Long Covid related condition: Pustular chilblain found"
* supportingInfo[+] = Reference(Condition/chilblain-resolved) "Long Covid related condition: Pustular chilblain resolved"
* supportingInfo[+] = Reference(Observation/symptom2) "Long Covid symptom: Dyspnea"
* supportingInfo[+] = Reference(Observation/symptom3) "Long Covid symptom: Pain in Legs"
* supportingInfo[+] = Reference(Observation/symptom4) "Long Covid symptom: Pain in hands"
* supportingInfo[+] = Reference(Observation/symptom5) "Long Covid symptom: Pain in arms"
* supportingInfo[+] = Reference(Observation/symptom6) "Long Covid symptom: Brain Fog - Intermittent confusion"
* supportingInfo[+] = Reference(Observation/symptom7) "Long Covid symptom: Brain Fog - Memory impairment"
* supportingInfo[+] = Reference(Observation/symptom8) "Long Covid symptom: Covid Toes - Toe swelling"
* supportingInfo[+] = Reference(Observation/symptom9) "Long Covid symptom: Covid Toes - Pustular chilblain"


* goal[0] = Reference(Goal/lower-pain-minimal-opioids) "Lower pain with minimal opioids"
* goal[+] = Reference(Goal/appetite-to-normal) "Return appetite to normal"
* goal[+] = Reference(Goal/electrolyte-protein-normal-range) "Get Electrolyte and proteins back to normal"
* goal[+] = Reference(Goal/bmi-normal-range) "Get BMI into healthy range"
* goal[+] = Reference(Goal/access-affordable-healthy-food) "Improve access to affordable, healthy food"

//Dietitian
* activity[0].reference = Reference(ServiceRequest/dietitian-referral) "Dietitian Referral"
* activity[0].outcomeReference[0] = Reference(Procedure/dietitian-consult) "Dietitian consult"
* activity[0].outcomeReference[+] = Reference(Observation/better-diet) "Observation by caregiver (daughter) of improvement in diet"

//CKD related
//Dialysis did a very small subset of the actual records of dialysis procedures...some guidance will be need in the future for repeated procedures
* activity[+}.reference = Reference(ServiceRequest/dialysis-request)
* activity[=].outcomeReference[0] = Reference(Procedure/dialysis-for-bundle)
* activity[=].outcomeReference[+] = Reference(Procedure/dialysis-for-bundle2)
* activity[=].outcomeReference[+] = Reference(Procedure/dialysis-for-bundle3)
//Demonstrated (taught) to use CKD app (Procedure text)
* activity[+].outcomeReference[0] = Reference(Procedure/ckd-app-education)

//Long Covid
* activity[+].reference = Reference(ServiceRequest/long-covid-request) "Long Covid Clinic Referral serviceRequest"
* activity[=].progress.time = "2022-12-10"
* activity[=].progress.text = "Long COVID symptoms improving"
* activity[=].outcomeReference[0] = Reference(MedicationRequest/med-for-chilblains) "Treatment for chilblains"
* activity[=].outcomeReference[+] = Reference(Condition/chilblain-resolved) 
* activity[=].outcomeReference[+] = Reference(ServiceRequest/pt-3x-wk) "PT 3x per week"
* activity[=].outcomeReference[+] = Reference(ServiceRequest/counseling-1x-wk) "Counseling 1x per week"
* activity[=].outcomeReference[+] = Reference(Task/meditation-7x-wk) "Meditation 7x per week"
* activity[=].outcomeReference[+] = Reference(Observation/observation-moca) "MOCA new result showing improvement"
* activity[=].outcomeReference[+] = Reference(Observation/observation-moca-original) "MOCA initial result showing impairment"


---

File: repos/HL7_SLASH_fhir-us-mcc/input/fsh/exampleInstancesForBundle.fsh

//timeline
//2018 ckd diagnosis
//2022 January findings lead to further clinical investigation
//2022 May visit with Dr. whole bunch of action (labs and new diagnosis and goals related to them)
//2022 careplan created May-ish
//2022 May 14 goal initated to not use much opioids to reduce pain
//2022 June diagnosis of LongCovid
//2022 July feeling bad about the future patient health concern
//2022 Dec the Goal of May 14 met! and means less active pain - this relates to July feeling bad about the future patient health concern - have it in Goal addresses for the last version 
//notes on https://docs.google.com/document/d/1LNaNrNLPzC-aNNa55wZl7fv_egomCcKhJn0u6JQ0DmI/edit


Instance: daughter1
InstanceOf: RelatedPerson
Usage: #example
* active = true
* patient = Reference(Patient/cc-pat-pnoelle)
* relationship.coding = $v3-RoleCode#DAUC
* name.text = "Rose Noelle"
* name.family = "Rose"
* name.given = "Noelle"

//Vince Jones (Nephrologist SCT 11911009 Nephrologist (occupation) )
Instance: practitionerMCC-V
InstanceOf: Practitioner
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "practitionerMCC-V"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This is a practitioner 1 example for the *US Core Practitioner Profile*."
//* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
* identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "9941339100"
* identifier[+].system = "http://www.acme.org/practitioners"
* identifier[=].value = "254567"
* name.family = "Jones"
* name.given = "Vince"
* name.prefix = "Dr"
* address.use = #home
* address.line = "1003 Healthcare Drive"
* address.city = "Amherst"
* address.state = "MA"
* address.postalCode = "01002"

Instance: dr-vince-jones
InstanceOf: PractitionerRole
Usage: #example
* meta.versionId = "1"
* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole"
* identifier.system = "http://www.acme.org/practitioners"
* identifier.value = "23"
* active = true
* period.start = "2012-01-01"
* period.end = "2012-03-31"
* practitioner = Reference(practitionerMCC-V) "Dr Vince Jones"
* organization = Reference(http://example.org/Organization/123)
* code = $sct#11911009 "Nephrologist (occupation)"
* specialty[0] = $provider-taxonomy#246ZN0300X "Nephrology Specialist/Technologist"
* specialty[+] = $sct#394589003 "Nephrology"
* location = Reference(http://example.org/Location/SouthWing) "South Wing, second floor"
* healthcareService = Reference(http://example.org/HealthcareService/123)
* telecom[0].system = #phone
* telecom[=].value = "215-947-0319"
* telecom[=].use = #work
* telecom[+].system = #email
* telecom[=].value = "HLV.southern@example.org"
* telecom[=].use = #work
* availableTime[0].daysOfWeek[0] = #mon
* availableTime[=].daysOfWeek[+] = #tue
* availableTime[=].daysOfWeek[+] = #wed
* availableTime[=].availableStartTime = "09:00:00"
* availableTime[=].availableEndTime = "16:30:00"
* availableTime[+].daysOfWeek[0] = #thu
* availableTime[=].daysOfWeek[+] = #fri
* availableTime[=].availableStartTime = "09:00:00"
* availableTime[=].availableEndTime = "12:00:00"
* notAvailable.description = "Vince will be on extended leave during May 2017"
* notAvailable.during.start = "2017-05-01"
* notAvailable.during.end = "2017-05-20"
* availabilityExceptions = "Vince is generally unavailable on public holidays and during the Christmas/New Year break"

//John Carlson (Primary Care Physician [PCP] SCT 446050000 Primary care physician (occupation))
Instance: practitionerMCC-3v
InstanceOf: Practitioner
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "PractitionerMCC-3v"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This is a practitioner 1 example for the *US Core Practitioner Profile*."
//* meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
* identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "9941339100"
* identifier[+].system = "http://www.acme.org/practitioners"
* identifier[=].value = "25456"
* name.family = "Carlson"
* name.given = "John"
* name.prefix = "Dr"
* address.use = #home
* address.line = "1003 Healthcare Drive"
* address.city = "Amherst"
* address.state = "MA"
* address.postalCode = "01002"

//Julie Smith (Care Coordinator SCT 768820003	Care coordinator (occupation))
Instance: careCoordinator1
InstanceOf: Practitioner
Usage: #example
* identifier[+].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "1144221847"
* identifier[+].system = "http://www.acme.org/practitioners"
* identifier[=].value = "25457"
* name.text = "Julie Smith"
* name.family = "Julie"
* name.given = "Smith"
* telecom.system = #phone
* telecom.value = "(210) 224 1599"

Instance: funding1
InstanceOf: Organization
Usage: #example
* active = true
* identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "1144221847"    
* identifier[+].system = "urn:oid:2.16.840.1.113883.4.7"
* identifier[=].value = "12D4567890"
//* identifier[+].value = "ICWP"
* name = "Texas Department of Community Health"
* address.text = "7430 Louis Pasteur Dr, San Antonio, TX 78229"

Instance: communitysite
InstanceOf: Location
Usage: #example
* name = "community site"
* address.text = "7430 Louis Pasteur Dr, San Antonio, TX 78229"

Instance: careCoordinator-1
InstanceOf: PractitionerRole
Usage: #example
* practitioner = Reference(Practitioner/careCoordinator1) "Julie Smith"
* organization = Reference(Organization/funding1) "Texas Department of Community Health"
* code.coding[0] = $provider-taxonomy#172V00000X "Community Health Worker"
* specialty = $provider-taxonomy#171M00000X "Case Manager/Care Coordinator"
* location = Reference(Location/communitysite) "Health Level Seven International"
* telecom.system = #phone
* telecom.value = "(210) 555 1222"

Instance: careteam-for-bundle
InstanceOf: CareTeam
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "CareTeam Example for LONG-COVID bundle"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This is a careteam example for the MCC CareTeam."
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCCareTeam"
* status = #active
* name = "Care Team of Noelle Example for LONG-COVID bundle"
* subject = Reference(Patient/cc-pat-pnoelle)
* participant[0].role = $sct#11911009 "Nephrologist"

//* participant[=].member = Reference(PractitionerRole/dr-vince-jones) Vince Jones"
* participant[0].role.coding.version = "http://snomed.info/sct/731000124108/version/20220301"
* participant[=].role.coding = $sct#446050000 "Primary care physician (occupation)"
* participant[=].member = Reference(practitionerMCC-3v) "Dr. John Carlson"
* participant[+].role = $sct#116154003 "Patient (person)"
* participant[=].member = Reference(Patient/cc-pat-pnoelle) "Noelle"
* participant[+].role =  $sct#768820003 "Care coordinator (occupation)"
* participant[=].member = Reference(careCoordinator-1) "Julie Smith"
* participant[+].role = $sct#133932002 "Caregiver (person)"
* participant[=].member = Reference(daughter1) "Rose  Noelle"

//Patricia's Concerns: (conditions - health concerns)
Instance: patient-health-concern-1
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* extension[$condition-dueTo][0].valueReference = Reference(Condition/encounter-diag-1)
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* verificationStatus.text = "Confirmed"
* category[0] = $condition-health-concern#health-concern "Health Concern"
* category[+] = $us-core-category#sdoh
//* code = $sct#198288003	"Anxiety state (finding)"
* code.text = "Worried and depressed regarding her progressive CKD and that Long Covid will make CKD worse due to decreased activity, shortness of breath and pain."
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* recordedDate = "2022-07-01"
* recorder = Reference(careCoordinator-1) "Julie Smith"
* asserter = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"

Instance: patient-health-concern-2
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* verificationStatus.text = "Confirmed"
* category[0] = $condition-health-concern#health-concern "Health Concern"
* category[+] = $us-core-category#sdoh
* code.text = "Struggles to exercise due to pain."
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* recordedDate = "2022-01-01"
* recorder = Reference(careCoordinator-1) "Julie Smith"
* asserter = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"

Instance: patient-health-concern-3
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* verificationStatus.text = "Confirmed"
* category[0] = $condition-health-concern#health-concern "Health Concern"
* category[+] = $us-core-category#sdoh
* code.text = "Struggles to manage her diet and find affordable healthy food choices under her financial strain."
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* recordedDate = "2022-01-01"
* recorder = Reference(careCoordinator-1) "Julie Smith"
* asserter = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"

Instance: patient-health-concern-4
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* verificationStatus.text = "Confirmed"
* category[0] = $condition-health-concern#health-concern "Health Concern"
* category[+] = $us-core-category#sdoh
* code.text = "Poor appetite for healthy CKD appropriate foods, likes cola, cake and chips."
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* recordedDate = "2022-01-01"
* recorder = Reference(careCoordinator-1) "Julie Smith"
* asserter = Reference(daughter1) "Rose  Noelle"

//Care Team Health Concerns with codes
Instance: careTeam-concerns-1
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* category[0] = $condition-health-concern#health-concern "Health Concern"
* code = $sct#88202002 "Alteration in nutrition: less than body requirements (finding)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* asserter = Reference(practitionerMCC-3v) "Dr. John Carlson"
* recordedDate = "2022-05-01"

Instance: careTeam-concerns-2
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* category[0] = $condition-health-concern#health-concern "Health Concern"
* code = $sct#267036007 "Dyspnea (finding)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* asserter = Reference(practitionerMCC-3v) "Dr. John Carlson"
* recordedDate = "2022-05-01"

Instance: careTeam-concerns-3
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* category[0] = $condition-health-concern#health-concern "Health Concern"
* code = $sct#15634511000119108  "Pain in bilateral legs (finding)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* asserter = Reference(practitionerMCC-3v) "Dr. John Carlson"
* recordedDate = "2022-05-01"

Instance: careTeam-concerns-4
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* category[0] = $condition-health-concern#health-concern "Health Concern"
* code = $sct#15634551000119109  "Pain of bilateral hands (finding)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* asserter = Reference(practitionerMCC-3v) "Dr. John Carlson"
* recordedDate = "2022-05-01"

Instance: careTeam-concerns-5
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* category[0] = $condition-health-concern#health-concern "Health Concern"
* code = $sct#15749341000119107  "Pain in bilateral upper arms (finding)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* asserter = Reference(practitionerMCC-3v) "Dr. John Carlson"
* recordedDate = "2022-05-01"

//Formal Diagnoses with SCT codes
//problem list
//SCT 431857002 Chronic kidney disease stage 4 (disorder) - CHANGED TO 3B on 2018-12-01 REUSING Existing
//SCT 289143000 | Finding of food aversion and cravings (finding) |
//SCT 59455009 | Metabolic acidosis (disorder) | - labs are evidence.detail
Instance: problem-list-1
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* category = $condition-category#problem-list-item "Problem List Item"
* category.text = "Problem"
* code = $sct#289143000  "Finding of food aversion and cravings (finding)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* asserter = Reference(practitionerMCC-3v) "Dr. John Carlson"
* recordedDate = "2022-05-01"

Instance: problem-list-2
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* category = $condition-category#problem-list-item "Problem List Item"
* category.text = "Problem"
* code = $sct#59455009 "Metabolic acidosis (disorder)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* asserter = Reference(practitionerMCC-3v) "Dr. John Carlson"
* onsetDateTime = "2022-05-01"
* recordedDate = "2022-05-08"
* evidence.detail[0] = Reference(Observation/arterial-blood-gas-panel)
* evidence.detail[+] = Reference(Observation/ph-lab-observation)
* evidence.detail[+] = Reference(Observation/hco3-arterial-observation)
* evidence.detail[+] = Reference(Observation/pCO2-arterial-observation)
* evidence.detail[+] = Reference(Observation/pO2-arterial-observation)
* evidence.detail[+] = Reference(Observation/serum-lactate-observation)
* evidence.detail[+] = Reference(Observation/blood-ketones-observation)
* evidence.detail[+] = Reference(Observation/serum-electrolytes-panel)
* evidence.detail[+] = Reference(Observation/sodium-serum-observation)
* evidence.detail[+] = Reference(Observation/potassium-serum-observation)
* evidence.detail[+] = Reference(Observation/chloride-serum-observation)
* evidence.detail[+] = Reference(Observation/bicarbonate-serum-observation)
* evidence.detail[+] = Reference(Observation/carbon-dioxide-serum-observation)
* evidence.detail[+] = Reference(Observation/anion-gap-serum-observation)
* evidence.detail[+] = Reference(Observation/protein-serum-observation)
* evidence.detail[+] = Reference(Observation/albumin-serum-observation)
* evidence.detail[+] = Reference(Observation/glomerular-filtration-observation)

//encounter diagnosis
//SCT 1119303003 Post-acute COVID-19 (disorder) 2022 - 06
//ICD10 U09 Post COVID-19 condition
Instance: encounter-diag-1
InstanceOf: Condition 
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* verificationStatus = $condition-ver-status#confirmed
* category = $condition-category#encounter-diagnosis "Encounter Diagnosis"
* category.text = "Encounter Diagnosis"

* code.coding[0] = $sct#1119303003 "Post-acute COVID-19 (disorder)"
* code.coding[1] = http://hl7.org/fhir/sid/icd-10-cm#U09.9 "Post COVID-19 condition, unspecified"

* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* onsetDateTime = "2022-06-01"
* recordedDate = "2022-06-01"
* encounter.display = "Encounter Reference"
* evidence.detail[0] = Reference(Observation/symptom2)
* evidence.detail[+] = Reference(Observation/symptom3)
* evidence.detail[+] = Reference(Observation/symptom4)
* evidence.detail[+] = Reference(Observation/symptom5)
* evidence.detail[+] = Reference(Observation/symptom6)
* evidence.detail[+] = Reference(Observation/symptom7)
* evidence.detail[+] = Reference(Observation/symptom8)
* evidence.detail[+] = Reference(Observation/symptom9)

//Labs (indicating metabolic acidosis) (supporting information): evidence.detail

Instance: arterial-blood-gas-panel
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#252275004 "Hematology test (procedure)"
* category[=].text = "Hematology"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"

* code = $loinc#24336-0 "Gas panel - Arterial blood"
* code.text = "Arterial Blood Gas"

* hasMember[0].reference = "Observation/ph-lab-observation"
* hasMember[=].display = "pH"
* hasMember[+].reference = "Observation/hco3-arterial-observation"
* hasMember[=].display = "HCO3"
* hasMember[+].reference = "Observation/pCO2-arterial-observation"
* hasMember[=].display = "pCO2"
* hasMember[+].reference = "Observation/pO2-arterial-observation"
* hasMember[=].display = "pO2"

Instance: ph-lab-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#252275004 "Hematology test (procedure)"
* category[=].text = "Hematology"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#2744-1 "pH of Arterial blood"
* valueQuantity = 7.29 '[pH]' "pH"

Instance: hco3-arterial-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#252275004 "Hematology test (procedure)"
* category[=].text = "Hematology"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#1960-4 "Bicarbonate [Moles/volume] in Arterial blood"
* valueQuantity = 20 'mmol/L' "mmol/L"

Instance: pCO2-arterial-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#252275004 "Hematology test (procedure)"
* category[=].text = "Hematology"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#2019-8 "Carbon dioxide [Partial pressure] in Arterial blood"
* valueQuantity = 35 'mm[Hg]' "mmHg"

Instance: pO2-arterial-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#252275004 "Hematology test (procedure)"
* category[=].text = "Hematology"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#2703-7 "Oxygen [Partial pressure] in Arterial blood"
* valueQuantity = 89 'mm[Hg]' "mmHg"

Instance: serum-lactate-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#252275004 "Hematology test (procedure)"
* category[=].text = "Hematology"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#2524-7 "Lactate [Moles/volume] in Serum or Plasma"
* valueQuantity = 5 'mmol/L' "mmol/L"

Instance: blood-ketones-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#252275004 "Hematology test (procedure)"
* category[=].text = "Hematology"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#53061-8 "Ketones [Moles/volume] in Blood"
* valueQuantity = 3.1 'mmol/L' "mmol/L"

Instance: serum-electrolytes-panel
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#275711006 "Serum chemistry test (procedure)"
* category[=].text = "Chemistry"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"

* code = $loinc#24326-1 "Electrolytes 1998 panel - Serum or Plasma"
* code.text = "Serum electrolytes"

* hasMember[0].reference = "Observation/sodium-serum-observation"
//* hasMember[=].display = "Sodium"
* hasMember[+].reference = "Observation/potassium-serum-observation"
//* hasMember[=].display = "Potassium"
* hasMember[+].reference = "Observation/chloride-serum-observation"
//* hasMember[=].display = "Chloride"
* hasMember[+].reference = "Observation/bicarbonate-serum-observation"
//* hasMember[=].display = "Bicarbonate "
* hasMember[+].reference = "Observation/carbon-dioxide-serum-observation"
//* hasMember[=].display = "Body Temperature"
* hasMember[+].reference = "Observation/anion-gap-serum-observation"
//* hasMember[=].display = "Body Temperature"

Instance: sodium-serum-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#275711006 "Serum chemistry test (procedure)"
* category[=].text = "Chemistry"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#2951-2 "Sodium [Moles/volume] in Serum or Plasma"
* valueQuantity = 135 'mmol/L' "mmol/L"

Instance: potassium-serum-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#275711006 "Serum chemistry test (procedure)"
* category[=].text = "Chemistry"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#2823-3 "Potassium [Moles/volume] in Serum or Plasma"
* valueQuantity = 6.0 'mmol/L' "mmol/L"

Instance: chloride-serum-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#275711006 "Serum chemistry test (procedure)"
* category[=].text = "Chemistry"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#2075-0 "Chloride [Moles/volume] in Serum or Plasma"
* valueQuantity = 110 'mmol/L' "mmol/L"

Instance: bicarbonate-serum-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#275711006 "Serum chemistry test (procedure)"
* category[=].text = "Chemistry"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#1963-8 "Bicarbonate [Moles/volume] in Serum or Plasma"
* valueQuantity = 20 'mmol/L' "mmol/L"

Instance: carbon-dioxide-serum-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#275711006 "Serum chemistry test (procedure)"
* category[=].text = "Chemistry"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#2028-9 "Carbon dioxide, total [Moles/volume] in Serum or Plasma"
* valueQuantity = 20 'mmol/L' "mmol/L"

Instance: anion-gap-serum-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#275711006 "Serum chemistry test (procedure)"
* category[=].text = "Chemistry"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#2028-9 "Carbon dioxide, total [Moles/volume] in Serum or Plasma"
* valueQuantity = 14 'meq/L' "mEq/L"

Instance: protein-serum-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#252275004 "Hematology test (procedure)"
* category[=].text = "Hematology"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#2885-2 "Protein [Mass/volume] in Serum or Plasma"
* valueQuantity = 4.0 'g/dL' "g/dL"

Instance: albumin-serum-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#252275004 "Hematology test (procedure)"
* category[=].text = "Hematology"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#1751-7 "Albumin [Mass/volume] in Serum or Plasma"
* valueQuantity = 3.0 'g/dL' "g/dL"

Instance: glomerular-filtration-observation
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCLaboratoryResultObservation"
//* basedOn = Reference(ServiceRequest/edgL1qrdpvDNnJNMxFUDV81i4toQJN0dTqmIcrPamkUI3)
* status = #final
* category[0] = $observation-category#laboratory "Laboratory"
* category[=].text = "Lab"
* category[+] = $sct#252275004 "Hematology test (procedure)"
* category[=].text = "Hematology"
* performer.display = "Performer Reference"
* specimen.display = "Specimen Reference"
* subject = Reference(Patient/cc-pat-pnoelle)
* effectiveDateTime = "2022-05-01"
* referenceRange.text = "A real test should include a reference range"
* code.coding[0] = $loinc#50044-7 "Glomerular filtration rate/1.73 sq M.predicted among females [Volume Rate/Area] in Serum, Plasma or Blood by Creatinine-based formula (MDRD)"
* valueQuantity = 15 'mL/min/{1.73_m2}' "mL/min/{1.73_m2}"

//Long Covid Symptoms: (observations) 2022-05
Instance: symptom2
InstanceOf: Observation
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "MCC Symptom Observation Example"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This example of a MCC Symptom Observation Profile illustrates its use to capture observation of a patient's symptoms study findings."
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCSymptomObservation"
* status = #final
* category = $loinc#75325-1 "Symptom"
* category.text = "Symptom"
* code = $loinc#75325-1 "Symptom"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* effectiveDateTime = "2022-05-01"
* performer = Reference(practitionerMCC-3v) "Dr. John Carlson"
* valueCodeableConcept = $sct#267036007 "Dyspnea (finding)"

Instance: symptom3
InstanceOf: Observation
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "MCC Symptom Observation Example"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This example of a MCC Symptom Observation Profile illustrates its use to capture observation of a patient's symptoms study findings."
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCSymptomObservation"
* status = #final
* category = $loinc#75325-1 "Symptom"
* category.text = "Symptom"
* code = $loinc#75325-1 "Symptom"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* effectiveDateTime = "2022-05-01"
* performer = Reference(practitionerMCC-3v) "Dr. John Carlson"
* valueCodeableConcept = $sct#15634511000119108 "Pain in bilateral legs (finding)"

Instance: symptom4
InstanceOf: Observation
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "MCC Symptom Observation Example"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This example of a MCC Symptom Observation Profile illustrates its use to capture observation of a patient's symptoms study findings."
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCSymptomObservation"
* status = #final
* category = $loinc#75325-1 "Symptom"
* category.text = "Symptom"
* code = $loinc#75325-1 "Symptom"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* effectiveDateTime = "2022-05-01"
* performer = Reference(practitionerMCC-3v) "Dr. John Carlson"
* valueCodeableConcept = $sct#15634551000119109 "Pain of bilateral hands (finding)"

Instance: symptom5
InstanceOf: Observation
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "MCC Symptom Observation Example"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This example of a MCC Symptom Observation Profile illustrates its use to capture observation of a patient's symptoms study findings."
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCSymptomObservation"
* status = #final
* category = $loinc#75325-1 "Symptom"
* category.text = "Symptom"
* code = $loinc#75325-1 "Symptom"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* effectiveDateTime = "2022-05-01"
* performer = Reference(practitionerMCC-3v) "Dr. John Carlson"
* valueCodeableConcept = $sct#15749341000119107 "Pain in bilateral upper arms (finding)"

Instance: symptom6
InstanceOf: Observation
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "MCC Symptom Observation Example"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This example of a MCC Symptom Observation Profile illustrates its use to capture observation of a patient's symptoms study findings."
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCSymptomObservation"
* status = #final
* category = $loinc#75325-1 "Symptom"
* category.text = "Symptom"
* code = $loinc#75325-1 "Symptom"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* effectiveDateTime = "2022-05-01"
* performer = Reference(PractitionerRole/dr-vince-jones) "Dr. Vince Jones"
* valueCodeableConcept = $sct#281793005 "Intermittent confusion (finding)"

Instance: symptom7
InstanceOf: Observation
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "MCC Symptom Observation Example"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This example of a MCC Symptom Observation Profile illustrates its use to capture observation of a patient's symptoms study findings."
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCSymptomObservation"
* status = #final
* category = $loinc#75325-1 "Symptom"
* category.text = "Symptom"
* code = $loinc#75325-1 "Symptom"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* effectiveDateTime = "2022-05-01"
* performer = Reference(PractitionerRole/dr-vince-jones) "Dr. Vince Jones"
* derivedFrom = Reference(Observation/observation-moca-original)
* valueCodeableConcept = $sct#386807006	"Memory impairment (finding)"

Instance: symptom8
InstanceOf: Observation
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "MCC Symptom Observation Example"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This example of a MCC Symptom Observation Profile illustrates its use to capture observation of a patient's symptoms study findings."
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCSymptomObservation"
* status = #final
* category = $loinc#75325-1 "Symptom"
* category.text = "Symptom"
* code = $loinc#75325-1 "Symptom"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* effectiveDateTime = "2022-05-01"
* performer = Reference(PractitionerRole/dr-vince-jones) "Dr. Vince Jones"
* valueCodeableConcept = $sct#277890004	"Toe swelling (finding)"

Instance: symptom9
InstanceOf: Observation
Usage: #example
//* meta.extension[0].url = "http://hl7.org/fhir/StructureDefinition/instance-name"
//* meta.extension[=].valueString = "MCC Symptom Observation Example"
//* meta.extension[+].url = "http://hl7.org/fhir/StructureDefinition/instance-description"
//* meta.extension[=].valueMarkdown = "This example of a MCC Symptom Observation Profile illustrates its use to capture observation of a patient's symptoms study findings."
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCSymptomObservation"
* status = #final
* category = $loinc#75325-1 "Symptom"
* category.text = "Symptom"
* code = $loinc#75325-1 "Symptom"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* effectiveDateTime = "2022-05-01"
* performer = Reference(PractitionerRole/dr-vince-jones) "Dr. Vince Jones"
* valueCodeableConcept = $sct#238509006	"Pustular chilblain (disorder)"

//problem that resolves
Instance: chilblain-found
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#active "Active"
* clinicalStatus.text = "Active"
* identifier[+].system = "http://www.acme.org/businessIdentifiers"
* identifier[=].value = "aConditionIdentifierToTrackThisChangingCondition"
* verificationStatus = $condition-ver-status#confirmed
* category = $condition-category#problem-list-item "Problem List Item"
* category.text = "Problem"
* code = $sct#238509006	"Pustular chilblain (disorder)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* asserter = Reference(practitionerMCC-3v) "Dr. John Carlson"
* recordedDate = "2022-05-01"
* onsetDateTime = "2022-05-01"

//problem that resolves
Instance: chilblain-resolved
InstanceOf: Condition
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCChronCondHealthConcern"
* clinicalStatus = $condition-clinical#resolved "Resolved"
* clinicalStatus.text = "Resolved"
* identifier[+].system = "http://www.acme.org/businessIdentifiers"
* identifier[=].value = "aConditionIdentifierToTrackThisChangingCondition"
* verificationStatus = $condition-ver-status#confirmed
* category = $condition-category#problem-list-item "Problem List Item"
* category.text = "Problem"
* code = $sct#238509006	"Pustular chilblain (disorder)"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* asserter = Reference(practitionerMCC-3v) "Dr. John Carlson"
* recordedDate = "2022-05-01"
* onsetDateTime = "2022-05-01"
* abatementDateTime = "2022-12-12"

//GOALS
//

//patient-health-concern-1
//version 2 updated goal
Instance: lower-pain-minimal-opioids
InstanceOf: Goal
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCGoal"
* meta.lastUpdated = "2020-12-14T00:00:00Z"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/goal-acceptance"
* extension[=].extension[0].url = "individual"
* extension[=].extension[=].valueReference = Reference(Patient/cc-pat-pnoelle)
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #agree
* extension[=].extension[+].url = "priority"
* extension[=].extension[=].valueCodeableConcept = $goal-priority#high-priority
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/goal-acceptance"
* extension[=].extension[0].url = "individual"
* extension[=].extension[=].valueReference = Reference(Practitioner/practitionerMCC-3v)
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #agree
* extension[=].extension[+].url = "priority"
* extension[=].extension[=].valueCodeableConcept = $goal-priority#high-priority
//* extension[+].url = "http://hl7.org/fhir/StructureDefinition/goal-relationship"
//* extension[=].extension[0].url = "type"
//* extension[=].extension[=].valueCodeableConcept = $goal-relationship-type#other
//* extension[=].extension[=].valueCodeableConcept.text = "This goal relates to the Weight loss goal"
//* extension[=].extension[+].url = "target"
//* extension[=].extension[=].valueReference = Reference(WGT-loss)
* lifecycleStatus = http://hl7.org/fhir/goal-status#completed 
* achievementStatus = http://terminology.hl7.org/CodeSystem/goal-achievement#achieved
* priority = $goal-priority#high-priority "High Priority"
* priority.text = "high"
* description.text = "Decrease Pain with minimal opioids and alternative methods"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* startDate = "2020-05-14"
* statusDate = "2020-12-14"
* statusReason = "Goal met"
* expressedBy = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* addresses[0] = Reference(Condition/patient-health-concern-1)
* addresses[+] = Reference(Condition/careTeam-concerns-3)
* addresses[+] = Reference(Observation/symptom3)
* addresses[+] = Reference(Condition/careTeam-concerns-4)
* addresses[+] = Reference(Observation/symptom4)
* addresses[+] = Reference(Condition/careTeam-concerns-5)
* addresses[+] = Reference(Observation/symptom5)
* outcomeReference = Reference(Observation/reduced-pain) "Caregiver says pain reduced with minimal use of opioids"

//Observation/reduced-pain
Instance: reduced-pain
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCPatientCaregiverConditionStatus"
* extension.url = "http://hl7.org/fhir/StructureDefinition/resource-pertainsToGoal"
* extension.valueReference = Reference(lower-pain-minimal-opioids)
* status = #final
* category = $observation-category#social-history "Social History"
* category.text = "Caregivers thoughts on the patient's condition status"
* code = $loinc#89253-9 "Trend"
* code.text = "Observation on patient/caregiver feelings on the condition status"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* focus[0] = Reference(Condition/careTeam-concerns-3)
* focus[+] = Reference(Condition/careTeam-concerns-4)
* focus[+]  = Reference(Condition/careTeam-concerns-5)
* focus[+]  = Reference(Condition/patient-health-concern-2)
* focus[+]  = Reference(Condition/patient-health-concern-1)
* effectiveDateTime = "2022-11-10T16:48:57.246958-08:00"
* performer = Reference(daughter1)
* valueCodeableConcept = $loinc#LA65-8 "Improved"
* valueCodeableConcept.text = "Improved"

//Achieve adequate appetite level:SCT 161825005 | Appetite normal (finding) |
Instance: appetite-to-normal
InstanceOf: Goal
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCGoal"
* meta.lastUpdated = "2020-12-14T00:00:00Z"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/goal-acceptance"
* extension[=].extension[0].url = "individual"
* extension[=].extension[=].valueReference = Reference(Patient/cc-pat-pnoelle)
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #agree
* extension[=].extension[+].url = "priority"
* extension[=].extension[=].valueCodeableConcept = $goal-priority#high-priority
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/goal-acceptance"
* extension[=].extension[0].url = "individual"
* extension[=].extension[=].valueReference = Reference(Practitioner/practitionerMCC-3v)
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #agree
* extension[=].extension[+].url = "priority"
* extension[=].extension[=].valueCodeableConcept = $goal-priority#high-priority
* lifecycleStatus = http://hl7.org/fhir/goal-status#active
* achievementStatus = http://terminology.hl7.org/CodeSystem/goal-achievement#in-progress
* priority = $goal-priority#high-priority "High Priority"
* priority.text = "high"
* description.text = "Achieve adequate appetite level"
* description.coding[0] = $sct#161825005 "Appetite normal (finding)"
//* description = $sct#161825005 "Appetite normal (finding)" "Achieve adequate appetite level"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* startDate = "2020-05-08"
* statusReason = "Goal initiated"
* expressedBy = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* addresses[0] = Reference(Condition/careTeam-concerns-1)
* addresses[1] = Reference(Condition/problem-list-1)

//Achieve electrolyte and protein levels in normal range
Instance: electrolyte-protein-normal-range
InstanceOf: Goal
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCGoal"
* meta.lastUpdated = "2020-12-14T00:00:00Z"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/goal-acceptance"
* extension[=].extension[0].url = "individual"
* extension[=].extension[=].valueReference = Reference(Patient/cc-pat-pnoelle)
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #agree
* extension[=].extension[+].url = "priority"
* extension[=].extension[=].valueCodeableConcept = $goal-priority#high-priority
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/goal-acceptance"
* extension[=].extension[0].url = "individual"
* extension[=].extension[=].valueReference = Reference(Practitioner/practitionerMCC-3v)
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #agree
* extension[=].extension[+].url = "priority"
* extension[=].extension[=].valueCodeableConcept = $goal-priority#high-priority
//* extension[+].url = "http://hl7.org/fhir/StructureDefinition/goal-relationship"
//* extension[=].extension[0].url = "type"
//* extension[=].extension[=].valueCodeableConcept = $goal-relationship-type#other
//* extension[=].extension[=].valueCodeableConcept.text = "This goal relates to the Weight loss goal"
//* extension[=].extension[+].url = "target"
//* extension[=].extension[=].valueReference = Reference(WGT-loss)
* lifecycleStatus = http://hl7.org/fhir/goal-status#active
* achievementStatus = http://terminology.hl7.org/CodeSystem/goal-achievement#in-progress
* priority = $goal-priority#high-priority "High Priority"
* priority.text = "high"
* description.text = "Achieve electrolyte and protein levels in normal range"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* startDate = "2020-05-08"
* target.measure = $loinc#2951-2 "Sodium [Moles/volume] in Serum or Plasma"
* target.detailRange.low = 136 'mmol/L' "mmol/L"
* target.detailRange.high = 145 'mmol/L' "mmol/L" 
* target.measure = $loinc#2823-3 "Potassium [Moles/volume] in Serum or Plasma"
* target.detailRange.low = 3.5 'mmol/L' "mmol/L"
* target.detailRange.high = 5.0 'mmol/L' "mmol/L" 
* target.measure = $loinc#2075-0 "Chloride [Moles/volume] in Serum or Plasma"
* target.detailRange.low = 95 'mmol/L' "mmol/L"
* target.detailRange.high = 105 'mmol/L' "mmol/L" 
* target.measure = $loinc#1963-8 "Bicarbonate [Moles/volume] in Serum or Plasma"
* target.detailRange.low = 23 'mmol/L' "mmol/L"
* target.detailRange.high = 26 'mmol/L' "mmol/L" 
* target.measure = $loinc#2019-8 "Carbon dioxide [Partial pressure] in Arterial blood"
* target.detailRange.low = 35 'mm[Hg]' "mmHg"
* target.detailRange.high = 45 'mm[Hg]' "mmHg" 
* target.measure = $loinc#2885-2 "Protein [Mass/volume] in Serum or Plasma"
* target.detailRange.low = 5.5 'g/dL' "g/dL"
* target.detailRange.high = 9.0 'g/dL' "g/dL"
* target.measure = $loinc#1751-7 "Albumin [Mass/volume] in Serum or Plasma"
* target.detailRange.low = 3.5 'g/dL' "g/dL"
* target.detailRange.high = 5.5 'g/dL' "g/dL"
* statusReason = "Goal initiated"
* expressedBy = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* addresses[0] = Reference(Condition/problem-list-2)
* addresses[+] = Reference(Condition/careTeam-concerns-1)

//Lower high BMI count by losing 10 lbs. in 1 year
Instance: bmi-normal-range
InstanceOf: Goal
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCGoal"
* meta.lastUpdated = "2020-12-14T00:00:00Z"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/goal-acceptance"
* extension[=].extension[0].url = "individual"
* extension[=].extension[=].valueReference = Reference(Patient/cc-pat-pnoelle)
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #agree
* extension[=].extension[+].url = "priority"
* extension[=].extension[=].valueCodeableConcept = $goal-priority#high-priority
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/goal-acceptance"
* extension[=].extension[0].url = "individual"
* extension[=].extension[=].valueReference = Reference(Practitioner/practitionerMCC-3v)
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #agree
* extension[=].extension[+].url = "priority"
* extension[=].extension[=].valueCodeableConcept = $goal-priority#high-priority
//* extension[+].url = "http://hl7.org/fhir/StructureDefinition/goal-relationship"
//* extension[=].extension[0].url = "type"
//* extension[=].extension[=].valueCodeableConcept = $goal-relationship-type#other
//* extension[=].extension[=].valueCodeableConcept.text = "This goal relates to the Weight loss goal"
//* extension[=].extension[+].url = "target"
//* extension[=].extension[=].valueReference = Reference(WGT-loss)
* lifecycleStatus = http://hl7.org/fhir/goal-status#active
* achievementStatus = http://terminology.hl7.org/CodeSystem/goal-achievement#in-progress
* priority = $goal-priority#high-priority "High Priority"
* priority.text = "high"
* description.text = "Lower high BMI count by losing 10 lbs. in 1 year"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* startDate = "2020-05-08"
* target.measure = $loinc#29463-7 "Body Weight"
* target.detailRange.low = 60 'kg' "kg"
* target.detailRange.high = 64 'kg' "kg"
* target.dueDate = "2021-05-12"
* statusReason = "Goal initiated"
* expressedBy = Reference(Practitioner/practitionerMCC-3v) "Dr. John Carlson"
* addresses[0] = Reference(Condition/problem-list-1)
* addresses[+] = Reference(Condition/patient-health-concern-4)

//Improve access to affordable healthy food
Instance: access-affordable-healthy-food
InstanceOf: Goal
Usage: #example
* meta.profile = "http://hl7.org/fhir/us/mcc/StructureDefinition/MCCGoal"
* meta.lastUpdated = "2020-12-14T00:00:00Z"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/goal-acceptance"
* extension[=].extension[0].url = "individual"
* extension[=].extension[=].valueReference = Reference(Patient/cc-pat-pnoelle)
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #agree
* extension[=].extension[+].url = "priority"
* extension[=].extension[=].valueCodeableConcept = $goal-priority#high-priority
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/goal-acceptance"
* extension[=].extension[0].url = "individual"
* extension[=].extension[=].valueReference = Reference(Practitioner/practitionerMCC-3v)
* extension[=].extension[+].url = "status"
* extension[=].extension[=].valueCode = #agree
* extension[=].extension[+].url = "priority"
* extension[=].extension[=].valueCodeableConcept = $goal-priority#high-priority
* lifecycleStatus = http://hl7.org/fhir/goal-status#active 
* achievementStatus = http://terminology.hl7.org/CodeSystem/goal-achievement#in-progress
* priority = $goal-priority#high-priority "High Priority"
* priority.text = "high"
* description.text = "Improve access to affordable healthy food"
* subject = Reference(Patient/cc-pat-pnoelle) "Patricia Noelle"
* startDate = "2020-05-08"
* statusReason = "Goal initiated"
* expressedBy = Reference(careCoordinator-1) "Julie Smith"
* addresses[0] = Reference(Condition/problem-list-1)
* addresses[+] = Reference(Condition/patient-health-concern-4)
* addresses[+] = Reference(Condition/patient-health-concern-3)
* addresses[+] = Reference(Condition/careTeam-concerns-1)

---

File: repos/HL7_SLASH_fhir-us-mcc/input/fsh/longcovid_theBundle.fsh

Instance: long-covid-and-ckd-bundle
InstanceOf: Bundle
Usage: #example
* type = #collection
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/observation-moca"
* entry[=].resource = observation-moca
* entry[+].fullUrl = "https://hl7.org/fhir/QuestionnaireResponse/questionnnaire-res-moca"
* entry[=].resource = questionnnaire-res-moca
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/obs-response-moca"
* entry[=].resource = obs-response-moca
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/observation-moca-original"
* entry[=].resource = observation-moca-original
* entry[+].fullUrl = "https://hl7.org/fhir/QuestionnaireResponse/questionnnaire-res-moca-original"
* entry[=].resource = questionnnaire-res-moca-original
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/obs-response-moca-original"
* entry[=].resource = obs-response-moca-original
* entry[+].fullUrl = "https://hl7.org/fhir/ServiceRequest/dialysis-request"
* entry[=].resource = dialysis-request
* entry[+].fullUrl = "https://hl7.org/fhir/Procedure/dialysis-for-bundle"
* entry[=].resource = dialysis-for-bundle
* entry[+].fullUrl = "https://hl7.org/fhir/Procedure/dialysis-for-bundle2"
* entry[=].resource = dialysis-for-bundle2
* entry[+].fullUrl = "https://hl7.org/fhir/Procedure/dialysis-for-bundle3"
* entry[=].resource = dialysis-for-bundle3
* entry[+].fullUrl = "https://hl7.org/fhir/Procedure/ckd-app-education"
* entry[=].resource = ckd-app-education
* entry[+].fullUrl = "https://hl7.org/fhir/ServiceRequest/dietitian-referral"
* entry[=].resource = dietitian-referral
* entry[+].fullUrl = "https://hl7.org/fhir/Procedure/dietitian-consult"
* entry[=].resource = dietitian-consult
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/better-diet"
* entry[=].resource = better-diet
* entry[+].fullUrl = "https://hl7.org/fhir/ServiceRequest/long-covid-request"
* entry[=].resource = long-covid-request
* entry[+].fullUrl = "https://hl7.org/fhir/MedicationRequest/med-for-chilblains"
* entry[=].resource = med-for-chilblains
* entry[+].fullUrl = "https://hl7.org/fhir/ServiceRequest/pt-3x-wk"
* entry[=].resource = pt-3x-wk
* entry[+].fullUrl = "https://hl7.org/fhir/ServiceRequest/counseling-1x-wk"
* entry[=].resource = counseling-1x-wk
* entry[+].fullUrl = "https://hl7.org/fhir/Task/meditation-7x-wk"
* entry[=].resource = meditation-7x-wk
* entry[+].fullUrl = "https://hl7.org/fhir/CarePlan/careplan-for-bundle"
* entry[=].resource = careplan-for-bundle
* entry[+].fullUrl = "https://hl7.org/fhir/RelatedPerson/daughter1"
* entry[=].resource = daughter1
* entry[+].fullUrl = "https://hl7.org/fhir/Practitioner/practitionerMCC-V"
* entry[=].resource = practitionerMCC-V
* entry[+].fullUrl = "https://hl7.org/fhir/PractitionerRole/dr-vince-jones"
* entry[=].resource = dr-vince-jones
* entry[+].fullUrl = "https://hl7.org/fhir/Practitioner/practitionerMCC-3v"
* entry[=].resource = practitionerMCC-3v
* entry[+].fullUrl = "https://hl7.org/fhir/Practitioner/careCoordinator1"
* entry[=].resource = careCoordinator1
* entry[+].fullUrl = "https://hl7.org/fhir/Organization/funding1"
* entry[=].resource = funding1
* entry[+].fullUrl = "https://hl7.org/fhir/Location/communitysite"
* entry[=].resource = communitysite
* entry[+].fullUrl = "https://hl7.org/fhir/PractitionerRole/careCoordinator-1"
* entry[=].resource = careCoordinator-1
* entry[+].fullUrl = "https://hl7.org/fhir/CareTeam/careteam-for-bundle"
* entry[=].resource = careteam-for-bundle
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/patient-health-concern-1"
* entry[=].resource = patient-health-concern-1
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/patient-health-concern-2"
* entry[=].resource = patient-health-concern-2
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/patient-health-concern-3"
* entry[=].resource = patient-health-concern-3
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/patient-health-concern-4"
* entry[=].resource = patient-health-concern-4
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/careTeam-concerns-1"
* entry[=].resource = careTeam-concerns-1
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/careTeam-concerns-2"
* entry[=].resource = careTeam-concerns-2
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/careTeam-concerns-3"
* entry[=].resource = careTeam-concerns-3
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/careTeam-concerns-4"
* entry[=].resource = careTeam-concerns-4
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/careTeam-concerns-5"
* entry[=].resource = careTeam-concerns-5
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/problem-list-1"
* entry[=].resource = problem-list-1
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/problem-list-2"
* entry[=].resource = problem-list-2
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/encounter-diag-1"
* entry[=].resource = encounter-diag-1
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/arterial-blood-gas-panel"
* entry[=].resource = arterial-blood-gas-panel
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/ph-lab-observation"
* entry[=].resource = ph-lab-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/hco3-arterial-observation"
* entry[=].resource = hco3-arterial-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/pCO2-arterial-observation"
* entry[=].resource = pCO2-arterial-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/pO2-arterial-observation"
* entry[=].resource = pO2-arterial-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/serum-lactate-observation"
* entry[=].resource = serum-lactate-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/blood-ketones-observation"
* entry[=].resource = blood-ketones-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/serum-electrolytes-panel"
* entry[=].resource = serum-electrolytes-panel
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/sodium-serum-observation"
* entry[=].resource = sodium-serum-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/potassium-serum-observation"
* entry[=].resource = potassium-serum-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/chloride-serum-observation"
* entry[=].resource = chloride-serum-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/bicarbonate-serum-observation"
* entry[=].resource = bicarbonate-serum-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/carbon-dioxide-serum-observation"
* entry[=].resource = carbon-dioxide-serum-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/anion-gap-serum-observation"
* entry[=].resource = anion-gap-serum-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/protein-serum-observation"
* entry[=].resource = protein-serum-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/albumin-serum-observation"
* entry[=].resource = albumin-serum-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/glomerular-filtration-observation"
* entry[=].resource = glomerular-filtration-observation
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/symptom2"
* entry[=].resource = symptom2
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/symptom3"
* entry[=].resource = symptom3
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/symptom4"
* entry[=].resource = symptom4
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/symptom5"
* entry[=].resource = symptom5
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/symptom6"
* entry[=].resource = symptom6
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/symptom7"
* entry[=].resource = symptom7
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/symptom8"
* entry[=].resource = symptom8
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/symptom9"
* entry[=].resource = symptom9
//* entry[+].fullUrl = "https://hl7.org/fhir/Condition/chilblain-found"
//* entry[=].resource = chilblain-found
* entry[+].fullUrl = "https://hl7.org/fhir/Condition/chilblain-resolved"
* entry[=].resource = chilblain-resolved
* entry[+].fullUrl = "https://hl7.org/fhir/Goal/lower-pain-minimal-opioids"
* entry[=].resource = lower-pain-minimal-opioids
* entry[+].fullUrl = "https://hl7.org/fhir/Observation/reduced-pain"
* entry[=].resource = reduced-pain
* entry[+].fullUrl = "https://hl7.org/fhir/Goal/appetite-to-normal"
* entry[=].resource = appetite-to-normal
* entry[+].fullUrl = "https://hl7.org/fhir/Goal/electrolyte-protein-normal-range"
* entry[=].resource = electrolyte-protein-normal-range
* entry[+].fullUrl = "https://hl7.org/fhir/Goal/bmi-normal-range"
* entry[=].resource = bmi-normal-range
* entry[+].fullUrl = "https://hl7.org/fhir/Goal/access-affordable-healthy-food"
* entry[=].resource = access-affordable-healthy-food

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/capability_statements.md

This guide builds on US Core. The CapabilityStatements import all the features of the US Core versions. [Server](CapabilityStatement-mcc-server.html) and [Client](CapabilityStatement-mcc-client.html) are versions are provided.

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/careplanAggregation.md

### CarePlan transaction alternatives:
The choice in how to package an aggregated CarePlan is dependent on the capabilities of the sender and receiver.

Push from sender to recipient that is expecting only the CarePlan: Push to a system that has an available FHIR server endpoint and which has client architecture capable of following the references within the CarePlan. The sending system carries out a [FHIR create](https://hl7.org/fhir/R4/http.html#create), using the HTTP POST request method, that contains the CarePlan. The recipient server then can follow the FHIR references in the CarePlan to find relevant details, such as the CareTeam associated with the CarePlan.

Push from sender to recipient that expects all the relevant details to be included: Push to a system that has an available FHIR server endpoint and which has client architecture capable of following the references within the CarePlan. The sending system creates a [FHIR batch or transaction](http://hl7.org/fhir/R4/http.html#transaction), using the HTTP POST request method, containing the CarePlan and the referenced resources. Note, how deep the referenced resources go is a business level decision.

(Pull) Subscription by recipient: Subscription by FHIR Client that alerts Client to new available CarePlan.
Client creates subscription [Subscription - FHIR v4.0.1 (hl7.org)](http://hl7.org/fhir/R4/subscription.html) using the HTTP POST method. When conditions are met, the client is alerted by the FHIR server that there is new content available. The FHIR Client then retrieves the CarePlan, and any additional referenced resources it needs, using a FHIR API transaction.

Use of Bulk FHIR: For a Bulk Data [HL7.FHIR.UV.BULKDATA\Bulk Data IG Home Page - FHIR v4.0.1](https://hl7.org/fhir/uv/bulkdata/) FHIR enabled server the client would use the bulk data paradigm to retrieve the CarePlan, and possibly the constituent parts. This is a ‘pull’ by the recipient

### Application example using FHIR batch - eCare Plan App transmission to downstream systems
The eCare Plan App has been built alongside the IG to demonstrate the principals of the IG in action. It is an example of allowing for patient-mediated exchange of health data as part of care planning. By aggregating care plan data, the standards-based application platform empowers patients and caregivers to actively participate in their care planning for MCC. It enables them to write and share information with their providers, while also providing a comprehensive view of their health data from all providers for goal-oriented care planning. Moreover, the platform supports better care coordination through interoperable data exchange and serves as a companion app to the provider-facing platform, facilitating shared care planning among all members of the care team.

The following figure depicts the types of interactions it performs.
<table><tr><td><img src="MCCCarePatientMediatedHealthInformationExchange.png" width="550" height="391" /></td></tr></table>

The figure below depicts a high-level view of the application aggregating data from multiple sources and then transmitting an aggregated CarePlan to multiple outputs using the FHIR batch transaction interaction through the HTTP POST method.
<table><tr><td><img src="MCCCarePlanBundlePOST_TransactionDiagram.png" width="640" height="360" /></td></tr></table>

### Developer notes on finding components of a CarePlan to aggregate
To aggregate FHIR Careplan instances and care plan data, it's crucial to understand the necessary data for a specific condition. However, the mental model of a care plan varies among providers, systems, and use cases. Sometimes one must look for individual care planning data, in addition to CarePlan instances. Fortunately, there are helpful patterns for aggregating care plan information. The implementation guide defines constraints on key FHIR profiles, emphasizing MUST Support flags to identify essential data elements. It also explains the use of _includes, _revincludes, and other FHIR API features, along with offering use case examples and structure/design considerations. Recall that for a FHIR Careplan the data structure will look something like [this diagram](structure_and_design_considerations.html#multiple-chronic-condition-fhir-care-plan-profile-relationship-diagram). This guidance provides valuable patterns for retrieving and structuring care planning data. Additionally, the effective use of ontologically linked vocabulary is crucial for identifying relevant data to retrieve and structure.

Electronically accessible data in EMRs is associated with codes from standard terminologies. Utilizing these codes enables the retrieval of care planning data. For instance, the condition ['persistent hypertension'](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1563/expansion) can be captured as an ICD10 or SNOMED code from the value set OID:2.16.840.1.113762.1.4.1222.1563. So, to pull relevant FHIR Condition instances one looks for a 'Condition.code' that matches one of the concepts from the value set.

Here is an example FHIR query, using a value set and Condition.code, to search for persistent hypertension as a condition of a patient. The value set is expanded by the server and all Condition instances with a code in the list of codes in the expansion would be returned:
    
GET [base]/Condition?code:in=http[terminology server base url]/ValueSet/$expand?url=https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1563/

note: if the expansion is too large an error will be returned. 

Some systems may not support value set expansions in queries. In such cases, you can adopt an alternative strategy by pulling all Conditions and iteratively looking through them for the Condition.code values one needs.

As an implementer you are looking to find the goal, treatments/procedures and team that is relevant to a specific condition, and then link them as an overall plan for a patient with multiple chronic conditions. To know the vocabulary terms (codes) to use to pull data elements, use our value sets as a starter and iteratively work with the provider systems that treat your patients to determine the value set you need to meet the specific conditions or care of interest. 



---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition there are format specific definitions files.

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

**Cross Version Analysis**

{% include cross-version-analysis.xhtml %}

**Dependency Table**

{% include dependency-table.xhtml %}

**Globals Table**

{% include globals-table.xhtml %}

**IP Statements**

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/index.md

<!--div class="note-to-balloters"-->

  <!--h4 id="plain-language-summary">Plain Language Summary about HL7 and this Guide<a class="anchorjs-link " href="#plain-language-summary" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h4-->

  <!--p>The <strong>"Plain Language Summary about HL7 and this Guide"</strong> is an experimental section that potentially could become a required part of HL7 FHIR implementation guides. The MCC IG team has agreed to incorporate this in the MCC guide and as part of ballot and ask for:</p-->

  <!--ul>
    <li>Evaluation of whether or not it would be a useful section in a guide for non-technical and/or non-clinical readers</li>
    <li>Evaluation of the content as written for the MCC guide, especially in terms of appropriate reading level and if fit for purpose.</li>
	<li>Evaluation of the presentation. We present both an expandable button version and a non-expandable version. The purpose of the expandable button is to limit the interruption of the IG-flow by the Plain Language Summary. Are either preferred? Or, is there some other user interface modality that would be preferred?</li>
  </ul-->
<!--/div-->

<!--a tabindex="0" class="btn btn-lg btn-danger" role="button" data-toggle="popover" data-trigger="focus" title="Dismissible popover" data-content="And here's some amazing content. It's very engaging. Right?">Dismissible popover</a-->

<div style="width: 100%;" >
<h3 id="plain-language-summary-about-hl7-and-this-guide">Plain Language Summary about HL7 and this Guide<a class="anchorjs-link " href="#plain-language-summary-about-hl7-and-this-guide" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a>
  <button class="btn btn-info btn-lg collapsed" type="button" title="Click to Open or Close the Plain Language Summary" data-toggle="collapse" data-target="#plain-lang-summary" aria-expanded="false" aria-controls="collapseExample">
    Welcome! Thank-you for wanting to learn about this guide.  Click Here to see the Plain Language Summary
  </button>
</h3>
</div>
<div class="collapse" id="plain-lang-summary" aria-expanded="false" style="height: 0px;">
  <div class="card card-body" style="border:1px solid;border-color:#cccccc;padding:10px">
  
<h4 id="about-hl7">About HL7<a class="anchorjs-link " href="#about-hl7" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h4>
<p><a href="http://hl7.org/">HL7</a>, which stands for Health Level Seven, creates standards to help different healthcare computer systems talk to each other. These HL7 standards are a special language or set of rules that lets information be shared between hospitals, doctors’ offices (e.g. Electronic Health Record Systems), labs, patients (e.g. via patient portals), pharmacies, and insurers, among others.</p>

<p>One of the HL7 standards is HL7 FHIR (Fast Healthcare Interoperability Resources). It helps connect healthcare systems, making it easier for doctors, nurses, and other healthcare professionals to share important information about patients. For example, if you have a lab test at a hospital, HL7 FHIR helps send the results to your doctor’s office so they can provide the right care.</p>

<p>A goal of HL7 is to make sure everyone involved in your healthcare has the right information at the right time. Our standards help machines and people, including you, work together to make better decisions for your health. HL7 sets rules that computer systems follow, so they can understand and share information in a consistent and reliable way.</p>

<p>To learn more about HL7, you can visit the website <a href="http://hl7.org/">hl7.org</a></p>

<p>The people at HL7 make guides that explain how to use the rules (standards) for different things. These guides bring the rules together and show how to use them for specific purposes.</p>

<h4 id="about-this-guide">About this Guide<a class="anchorjs-link " href="#about-this-guide" aria-label="Anchor" data-anchorjs-icon="" style="font: 1em / 1 anchorjs-icons; padding-left: 0.375em;"></a></h4>

<p>The FHIR HL7® Multiple Chronic Condition (MCC) Care Plan Implementation Guide helps healthcare technology experts design systems that help the healthcare team take care of people with multiple chronic conditions.</p>

<p><strong>A care plan</strong> is a tool that helps ensure that you get the right care at the right time to stay as healthy as possible.</p>

<p><strong>A healthcare technology expert</strong> is someone who helps healthcare teams use new technology. They make sure the technology is set up correctly, train the staff to use it, and provide ongoing support. Their goal is to improve healthcare using technology.</p>

<p>Long-term health issues like asthma, diabetes, or depression are called chronic conditions. Sometimes people have more than one chronic condition, which we call multiple chronic conditions. Care plans help make sure that nothing important is missed, which is especially important for people with many healthcare needs. Care plans also help prevent conflicts in treatments by improving communication among healthcare teams, people needing healthcare, and their caregivers.This helps create stronger partnerships in managing chronic conditions to help people build plans of care that help them be as healthy and functional as possible.</p>

<p>The step-by-step instructions in this guide are for building electronic care plan systems. These systems help healthcare providers give dependable, steady, and safe care for people with <strong>multiple chronic conditions</strong> across different healthcare places. The guide contains specific rules that are needed in United States healthcare.</p>

<p>Healthcare technology experts worked with patients, caregivers, and clinicians to create this guide. This guide contains important information and guidelines for healthcare technology professionals to use when building care plan tools.</p>

  </div>
</div>




<!-- ### Plain Language Summary about HL7 and this Guide

Welcome! Thank-you for wanting to learn about this guide. 

#### About HL7
[HL7](http://hl7.org/), which stands for Health Level Seven, creates standards to help different healthcare computer systems talk to each other. These HL7 standards are a special language or set of rules that lets information be shared between hospitals, doctors' offices (e.g. Electronic Health Record Systems), labs, patients (e.g. via patient portals), pharmacies, and insurers, among others.

One of the HL7 standards is HL7 FHIR (Fast Healthcare Interoperability Resources). It helps connect healthcare systems, making it easier for doctors, nurses, and other healthcare professionals to share important information about patients. For example, if you have a lab test at a hospital, HL7 FHIR helps send the results to your doctor's office so they can provide the right care.

A goal of HL7 is to make sure everyone involved in your healthcare has the right information at the right time. Our standards help machines and people, including you, work together to make better decisions for your health. HL7 sets rules that computer systems follow, so they can understand and share information in a consistent and reliable way.

To learn more about HL7, you can visit the website [hl7.org](http://hl7.org/)

The people at HL7 make guides that explain how to use the rules (standards) for different things. These guides bring the rules together and show how to use them for specific purposes.

#### About this Guide

The FHIR HL7® Multiple Chronic Condition (MCC) Care Plan Implementation Guide helps healthcare technology experts design systems that help the healthcare team take care of people with multiple chronic conditions.

**A care plan** is a tool that helps ensure that you get the right care at the right time to stay as healthy as possible. 

**A healthcare technology expert** is someone who helps healthcare teams use new technology. They make sure the technology is set up correctly, train the staff to use it, and provide ongoing support. Their goal is to improve healthcare using technology.

Long-term health issues like asthma, diabetes, or depression are called chronic conditions. Sometimes people have more than one chronic condition, which we call multiple chronic conditions. Care plans help make sure that nothing important is missed, which is especially important for people with many healthcare needs. Care plans also help prevent conflicts in treatments by improving communication among healthcare teams, people needing healthcare, and their caregivers.This helps create stronger partnerships in managing chronic conditions to help people build plans of care that help them be as healthy and functional as possible.

The step-by-step instructions in this guide are for building electronic care plan systems. These systems help healthcare providers give dependable, steady, and safe care for people with **multiple chronic conditions** across different healthcare places. The guide contains specific rules that are needed in United States healthcare.

Healthcare technology experts worked with patients, caregivers, and clinicians to create this guide. This guide contains important information and guidelines for healthcare technology professionals to use when building care plan tools. -->




### Overview

### Introduction
This HL7&reg; Multiple Chronic Condition (MCC) Care Plan Implementation Guide (IG) defines FHIR R4 profiles, structures, extensions, transactions and value sets needed to represent, query for, and exchange Care Plan information. It defines how to represent coded content used to support the care planning activities focusing on the needs of patients with multiple chronic conditions. This initial version focuses on Chronic Kidney Disease, Type 2 diabetes mellitus, common cardiovascular disease (hypertension, ischemic heart disease and heart failure), chronic pain and Long Covid. The profiles defined within this IG were based on data elements of importance identified by technical expert panels assembled by the National Institute of Health’s (NIH) National Institute of Diabetes and Digestive and Kidney Disease (NIDDK) and the Agency for Healthcare Research and Quality (AHRQ).

A Care Plan is a consensus-driven dynamic plan that represents the prioritized concerns, goals, planned and actual interventions and the resultant care outcomes from the entire care team (including the patient, their caregivers, and providers). It serves as a blueprint shared by all care team members, to guide the patient’s care. A Care Plan integrates multiple interventions proposed by multiple providers and disciplines for multiple conditions. A care plan may represent one or more treatment plans, care plans or plans of care (the plan naming and definition varies across institutions) and serves to reconcile and resolve conflicts between the various plans developed for a specific patient by different providers. It supports the following use cases:
 
1.        	Query for patient data across providers/care settings and compile into a consolidated care plan representation.
2.        	Encourage capture of and communication of a patient's health concerns and related goals, interventions, and outcomes.
3.        	Gather and aggregate patient data for uses beyond the point of care (e.g. public health, population health, quality measurement, risk adjustment, quality improvement, and/or research.)

This FHIR IG addresses the needs of multiple audiences. It provides technical artifacts that assist programmers when implementing standards-based FHIR application program interfaces (APIs) for specific purposes. It provides instructive material that explains how FHIR is used to accomplish specific use cases. It also provides general information that helps business analysts and technology decision-makers understand the use cases and benefits associated with achieving specific data exchange capabilities. A FHIR IG is as much a business planning tool as it is an educational resource and a technical specification.

### How to Read this Guide and Cautions
This Guide is divided into several pages which are listed in the navigation bar at the top each page. To aid navigation, the subsection headings of each page are listed in a yellow "Contents" box at the top right of each page.

### Value Set Library

Rather than creating nearly 1000 profiles covering important concepts for chronic care coordination for use within the MCC FHIR Care Plan profile, we have created 21 foundation profiles which conform to US Core Profiles (where available), adding constraints or extensions pertinent to their representation within a dynamic FHIR care plan.  To represent specific concepts within these foundational profiles, we then created libraries of value sets pertinent to the base profiles for representing chronic conditions, and their related interventions and goals and outcomes. This project has built and houses its value sets in the [National Library of Medicine’s (NLM) Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/). The value sets are not directly bound within the foundation profiles, but value set library pages are provided with links to the value sets in VSAC and descriptions of where within the profile each value set may be used. Because the value sets are housed in VSAC, it is necessary for implementation sites to obtain a free (for the US) [UMLS license](https://www.nlm.nih.gov/databases/umls.htm). In addition, HL7 FHIR Policies requiring everything to be open source in all realms, may present some implementation validation issues when interfacing with a value set housed in VSAC. This IG will provide guidance for this issue.

### Project Overview

More than 25 percent of Americans have MCC, accounting for more than 65 percent of U.S. healthcare spending. These individuals have complex health needs handled by diverse providers, across multiple settings of care. As a result, their care is often fragmented, poorly coordinated, and inefficient. Therefore, data aggregation and coordination is particularly important and challenging for people with MCC. These challenges will increasingly strain the U.S. health system with the aging of the U.S. population. Projections suggest numbers of adults aged 65 and older will more than double and numbers of those aged 85 and older will triple by 2050.
Care plans are a prominent part of multifaceted, care coordination interventions that reduce mortality and hospitalizations and improve disease management and satisfaction. In addition, proactive care planning promotes person-centeredness, improves outcomes, and reduces the cost of care. By design, care plans take a patient-centered approach, both by making comprehensive health data available across providers and settings and through the incorporation of data elements that have not traditionally been included in health IT systems (e.g., social determinants of health [SDOH], patient health and life goals, patient preferences). While Care Plans have been developed, they remain paper-based in many U.S. healthcare settings and are not standardized and interoperable across care settings when electronic. While care plans focused on a single disease or condition are unlikely to be tenable for patients with MCC or their providers, existing care plans infrequently address individuals with MCC. The development of care plans based on structured data has been proposed as a method for enabling electronic systems to pull together and share data elements automatically and dynamically. Such aggregated data would not only provide actionable information to identify and achieve health and wellness goals for individuals with MCC, but also would reduce missingness and improve quality of point-of-care data for use in pragmatic research.
Initiated by the National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) and the Agency for Healthcare Research and Quality (AHRQ)—with support from the Assistant Secretary for Planning and Evaluation’s Patient-Centered Outcomes Research Trust Fund, the multiple chronic conditions (MCC) electronic care (eCare) Plan Project aims to develop, test, and pilot an interoperable eCare plan that will facilitate aggregation and sharing of critical patient-centered data across home, community, clinic, and research-based settings for persons with MCC, including chronic kidney disease (CKD), type 2 diabetes mellitus (T2D), cardiovascular disease (CVD), chronic pain, and long COVID.
The HL7-based activities of the MCC eCare Plan Project included:
 - Identification of use cases to support the documentation and exchange of MCC eCare plan data within EHRs and related systems.
 - Identified, developed, and prioritized the necessary MCC data elements and clinical terminology standards and FHIR® mappings that will enable the standardized transfer of data across health settings.
 - Developed, tested, and balloted an HL7® Fast Health Interoperability Resources (FHIR®) Implementation Guide based on the defined use cases and MCC data elements.
 
Non-HL7 related activities of the MCC eCare Plan project were facilitated through the [AHRQ eCare Plan Project Confluence](https://ecareplan.ahrq.gov/collaborate):
 - The project included the development and testing of open-source clinician and patient/caregiver- facing SMART-on-FHIR eCare plan applications for managing persons with MCC.

### History of the Care Plan and Electronic Care Plans

The concept of a care plan began as a teaching tool for nursing students to research and document the medical conditions their patients had and identify the associated nursing care and family support needed. This was documented in a structured paper format that fostered the nursing process. The nursing process identifies health concerns, related goals, and the interventions needed to meet those goals and then evaluates the outcomes to determine whether goals were met. Over the years, the care plan evolved from a student teaching tool to something required for most patients in some format by various regulating or certifying bodies, and further, from a nursing-based care plan, to an interdisciplinary patient-centered tool.

Most major vendors have electronic Care Plan modules, but the degree to which the modules are implemented and actively used is unknown. Few, if any, are exchange standards ready or mapped to exchange standards. The first HL7 standard representing Care Plan was the C-CDA Care Plan document designed to represent an instance of an EHR Care Plan similar to the Continuity of Care (CCD) CDA. Many of the learnings and designs for the FHIR Care Plan Resource and this IG were derived from the C-CDA Care Plan. There is also an Integrating the Healthcare Enterprise (IHE)  Dynamic Care Planning (DCP) profile that provides the structures and transactions for care planning, creating, updating and sharing Care Plans that meet the needs of many, such as providers, patients and payers. The Office of the National Coordinator (ONC) has put into regulation requirements around goals and health concerns which can currently be met by free text. The Dynamic Care Planning (DCP) Profile uses FHIR Resources to provide the structures and transactions for care planning and sharing Care Plans that meet the needs of many, such as providers, patients and payers. The DCP profile leverages the FHIR Care Plan resource, but does not specify, describe or define the use of it for representing specific conditions or multiple conditions. We are unaware of any real-world implementations of it at this time.
We believe that this IG will be the first fully defined HL7 FHIR IG leveraging the FHIR Care Plan resources as its backbone structure for representing a dynamic care plan and testing its ability to bring together aggregated patient care plan data including patient outcomes.


### Guidance
This guidance section provides general implementation guidance and best practices. It describes the relation to and reuse of the US Core Implementation Guide profiles and reuse of its conformance requirements and expectations for the servers and client applications. Vocabulary use and value set binding heuristics are described.

####  Relationship to US Core

This Implementation Guide reuses US Core profiles for representation within a FHIR Care Plan profile. Where US Core does not have a profile or function that is needed for the use cases or data elements, the IG created new profiles, or constrains or directly reuses other resources, or profiles defined in other FHIR IGs. This guide re-uses and contrains the US Core Care Plan as its core profile.


#####  General US Core IG Conformance

This guide adheres to or build on US conformance requirements, most of its [General Guidance](https://www.hl7.org/fhir/us/core/STU6.1/general-guidance.html), and its [Capability Statements](https://www.hl7.org/fhir/us/core/STU6.1/capability-statements.html) where applicable. 

#####  Provenance

This IG recommends implementers adhere to guidelines and definitions provided in US Core’s [Basic Provenance Guidance](https://www.hl7.org/fhir/us/core/STU6.1/basic-provenance.html). 

#####  Must Support

This IG adheres to the US Core [Must Support](https://www.hl7.org/fhir/us/core/STU6.1/general-guidance.html#must-support) concept and rules.

### Acknowledgements
This Implementation Guide was made possible through the visionary leadership of the [National Institute of Diabetes and Digestive and Kidney Diseases (NIDDK) ](https://www.niddk.nih.gov/)and the [Agency for Healthcare Research and Quality (AHRQ) ](https://www.ahrq.gov/) with funding from the [Patient-Centered Outcomes Research Trust Fund of the Office of the Assistant Secretary for Planning and Evaluation (ASPE)](https://aspe.hhs.gov/collaborations-committees-advisory-groups/os-pcortf/explore-portfolio). The joint NIDDK-AHRQ project team can be found [here](https://cmext.ahrq.gov/confluence/display/EC/Project+Team). We would also like to thank the many clinicians, patients, caregivers, researchers, advocates, and subject matter experts who served on our [Technical Expert Panels](https://cmext.ahrq.gov/confluence/display/EC/Technical+Expert+Panels) and [Contract Monitoring Board ](https://cmext.ahrq.gov/confluence/display/EC/Contract+Monitoring+Board) for their time, insight, and support. 

This Implementation Guide was created under the supervision and review of the [HL7 Patient Care Work Group (PCWG)](https://www.hl7.org/Special/committees/patientcare/index.cfm). This is the HL7 project page for the HL7 PCWG [Multiple Chronic Conditions e-Care Project.](https://confluence.hl7.org/display/PC/Multiple+Chronic+Conditions+%28MCC%29+eCare+Plan)
The [HL7 Learning Health System](https://confluence.hl7.org/display/LHS) and [Clinical Decision Support Work](https://confluence.hl7.org/display/CDS) Groups were co-sponsors of the Implementation Guide development.

**Implementation Guide Contributors:**
<table border="1" cellspacing="0" style="width:100.0%">
        <tbody>
            <tr>
                <td style="background-color:#d9e2f3; width:89.75pt">
                    <p><strong>Contributor</strong></p>
                </td>
                <td style="background-color:#d9e2f3; width:148.5pt">
                    <p><strong>Organization</strong></p>
                </td>
                <td style="background-color:#d9e2f3; width:229.5pt">
                    <p><strong>Role</strong></p>
                </td>
                <td style="background-color:#d9e2f3; width:211.5pt">
                    <p><strong>email</strong></p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Jenna Norton</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>NIH/NIDDK</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Project Champion</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>jenna.norton@nih.gov</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Kevin Abbott</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>NIH/NIDDK</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Project Champion</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>kevin.abbott@nih.gov</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Arlene Bierman</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>AHRQ</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Project Champion</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>arlene.bierman@ahrq.hhs.gov</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Evelyn Gallego</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>EMI Advisors</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Project Champion</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>evelyn.gallego@emiadvisors.net</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Gay Dolin</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>Namaste Informatics</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>IG Design Lead</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>gdolin@namasteinformatics.com</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Bret Heale</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>Humanized Health Consulting</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>IG Developer</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>bheale@humanizedhealthconsulting.com</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Himali Saitwal</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>EMI Advisors</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Terminologist</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>himali.saitwal@emiadvisors.net</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Sara Armson</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>RTI/ONC</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Terminologist</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>sara.armson@hhs.gov</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Karen Bertodatti</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>EMI Advisors</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Project Manager</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>karen.bertodatti@emiadvisors.net</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Savanah Mueller</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>EMI Advisors</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Analyst</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>savanah.mueller@emiadvisors.net</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Emma Jones</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>Allscripts Veradigm</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Clinical IG Modeler</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>emma.jones@allscripts.com</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Dave Carlson</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>Clinical Cloud Solutions</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Solutions Architect, Test Implementations</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>dcarlson@clinicalcloud.solutions</p>
                </td>
            </tr>
            <tr>
                <td style="vertical-align:top; width:89.75pt">
                    <p>Sean Muir</p>
                </td>
                <td style="vertical-align:top; width:148.5pt">
                    <p>JKM Software</p>
                </td>
                <td style="vertical-align:top; width:229.5pt">
                    <p>Developer, Test Implementations</p>
                </td>
                <td style="vertical-align:top; width:211.5pt">
                    <p>sean.muir@jkmsoftware.com</p>
                </td>
            </tr>
        </tbody>
    </table>



### Authors

<table>
<thead>
<tr>
<th>Name</th>
<th>Email/URL</th>
</tr>
</thead>
<tbody>
<tr>
<td>HL7 International - Patient Care</td>
<td><a href="http://www.hl7.org/Special/committees/patientcare" target="_new">http://www.hl7.org/Special/committees/patientcare</a></td>
</tr>
</tbody>
</table>


---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_care_plan_sdoh_guidance.md

### MCC Care Plan Approach to Social Determinants of Health (SDOH) Data Representation

The [United States Core Data for Interoperability (USCDI)](https://www.healthit.gov/isa/united-states-core-data-interoperability-uscdi#uscdi-v3), published by the Office of the National Coordinator for Health Information Technology (ONC) includes SDoH data elements. SDOH are the conditions in which people live, learn, work, and play. Social risks are adverse SDoH associated with poor health (e.g., food insecurity, lack of access to health care, lack of transportation, housing instability, etc.). Social needs are the social risks an individual patient feels are most pressing and need to be addressed. 
Interdisciplinary Care Planning and Care Coordination have long acknowledged the SDOH because of their effects on health risks and outcomes. The [Gravity Project](https://thegravityproject.net/) has led a national public collaborative to develop consensus-based data standards to improve use and sharing of SDOH data. Their growing and evolving body of work includes defining use cases, suggesting/defining workflows and developing value sets in order to encourage and facilitate the capture of data in a structured and standardized way to get the data flowing into EHRs and other systems. The HL7 US Core Implementation Guide  is the method by which USCDI Data Element are standardized for exchanging the data using FHIR.
Given that the MCC IG reuses and constrains US Core Profiles for use in a FHIR Care Plan, by default, the IG inherits the [US Core Screening and Assessment Guidance](https://hl7.org/fhir/us/core/STU6.1/screening-and-assessments.html) with special attention to [Codes for Problems/HealthConcerns, Goals, Service Requests, and Procedures](http://hl7.org/fhir/us/core/STU6.1/screening-and-assessments.html#codes-for-problemshealthconcerns-goals-service-requests-and-procedures).

#### The MCC eCare Plan and SDOH Activities
The differences between US Core Profiles and their corresponding MCC profiles are the constraining or emphasis on FHIR elements or extensions used to represent linkages between profiles to align with the care planning process of assessing to identify conditions or health concerns and associated goals, planning and executing interventions/activities, and tracking outcomes. The description and supporting diagram shows the Care Planning process with an SDOH view and states the profiles used to represent the SDOH concepts.
* **SDOH Assessment:** SDOH Assessments represent the recording of SDOH assessment screening tools and other questionnaires as well as individual clinical observations. These assessments are represented by the [MCC Observation SDOH profile](StructureDefinition-MCCObservationSDOHAssessment.html) derived from the [US Core Observation Screening Assessment Profile](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-screening-assessment.html) 
* **SDOH Problems/Health Concerns/Social risks or needs**: Identifying a social risk (for example, homelessness) is represented by the [MCC Chronic Condition and Health Concern Profile ](StructureDefinition-MCCChronCondHealthConcern.html)derived from [US Core Condition Problems and Health Concerns Profile](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-condition-problems-health-concerns.html).
* **SDOH Goals**: Identifying and defining a future desired condition or change in condition related to a social need (for example, Has adequate quality meals and snacks) is represented by the [MCC Goal ](StructureDefinition-MCCGoal.html) derived from the [US Core Goal](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-goal.html).
* **SDOH Interventions:** Services offered to a patient to address identified SDoH concerns/priorities, or social needs, (for example, referral to transportation support programs) are represented by the [MCC Service Request profile ](StructureDefinition-MCCServiceRequest.html) derived from [US Core ServiceRequest Profile](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-servicerequest.html). In addition, the [MCC Care Plan Procedure](StructureDefinition-MCCProcedure.html) derived from [US Core Procedure Profile](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-procedure.html) can be used to record a completed service or intervention.


**SDOH eCare Planning Activities**
<table><tr><td><img src="SDOHAssessmentPlan.PNG" /></td></tr></table>

#### Codes for MCC Problems/HealthConcerns, Goals, Service Requests, and Procedures
The Gravity project is developing granular value sets that contain concepts for very specific SDOH situations. These small, specific value sets are being developed overtime to support workflow and consistent data collection. Gravity has grouped these small value sets into broadly defined sets for use across other uses case. Both US Core and the MCC IG leverage these value sets so that SDOH concepts that have been collected may be queried for and aggregated. As new Gravity value sets are developed, they will be added to the appropriate, broadly defined grouped value set. These value sets may be used with problems/health concerns, goals, procedures, and service requests:

* [Social Determinants of Health Condition](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.788/expansion)
* [Social Determinants of Health Procedures](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.789/expansion)
* [Social Determinants of Health Goals](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.71/expansion)
* [Social Determinants of Health Service Requests](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.790/expansion)

MCC and US Core use these broadly defined value sets that contain concepts that are used across many use cases including SDOH. The Figure below illustrates how the Gravity value sets are grouped for use in the MCC Chronic Condition Problems and Health Concerns Profile and how the grouped value set is compatible with the US Core Problem code valueset. When recording SDOH data MCC Profiles and servers **SHOULD** use the SDOH value sets listed above.

**Example of SDOH Grouping Value set available for use in MCC Chronic Condition Profile**
<table><tr><td><img src="GravityGroupedValueSets.PNG" /></td></tr></table>


---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_chronic_condition_value_sets.md

This table holds the value sets that may be used with the [MCC Chronic Condition and Health Concern Profile](StructureDefinition-MCCChronCondHealthConcern.html). 

**Table Key**
* **Value Set Name and Link**: All of these value sets are housed in the [NLM Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/welcome). The value set name is a link to the value set. You must have an NLM/UMLS account to access. There is no charge for an account. Note: the first time you click on the value set name link in a given session, there my be a delay in loading and you will need to sign in once loaded.
* **Value Set Clinical Focus**: The Value Set Clinical Focus is the same as the clinical focus as written in VSAC which is a free text statement describing the general context of the concepts in the set.
* **OID**: The Object Identifier (OID) of the set. OIDs of value sets are unique, whereas the names may not be. If accessing the value set outside of this table link, it is safest to perform that search with the OID
* **Profile Element**: The Profile element asserts the location within the profile the value set term **SHALL** be used.

**MCC Value Sets Use and Validation**
The value sets in the MCC Value Set Library pages are not bound within any profile. As a result "automatic" validation (confirmation) that a code sent in an instance is a member of that value set will not occur. Validation support can be added in implementation. These Symptom Value Sets may be used for several different purposes and no clinically appropriate use is precluded: 
* Querying for patients that have experienced particular conditions or diagnoses
* Within Quality Measures or for research using [Clinical Quality Language (CQL)](http://cql.hl7.org/) (for example)
* For display within applications
* Terminology validation support

**Accessing Value Sets using FHIR Value Set Resource**
* To fetch the FHIR ValueSet resource (in other words, the value set definition) use:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID] 
* To fetch the FHIR ValueSet resource expansion use the FHIR $expand operation:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]/$expand 

For more information refer to the [FHIR Terminology Service for VSAC Resources](https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html#:~:text=The%20FHIR%20Terminology%20Service%20for,included%20in%20the%20value%20sets.)


<table border="1" cellspacing="0" style="width:100.0%">
	<tbody>
		<tr>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:11%">
			<p><strong>Value Set Name and VSAC Link</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:28.3pt; width:11%">
			<p><strong>Arthritis Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:28.3pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:28.3pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:28.3pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.81/expansion">Arthritis Disorders</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnoses or problem terms representing arthritis disorders.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.81</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.654/expansion">Infectious Arthritis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Infectious Arthritis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.654</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.648/expansion">Osteoarthritis (Oa)</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Osteoarthritis (Oa).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.648</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.587/expansion">Psoriatic Arthritis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Psoriatic Arthritis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.587</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.588/expansion">Reactive Arthritis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Reactive Arthritis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.588</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.651/expansion">Rheumatoid Arthritis (Ra)</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Rheumatoid Arthritis (Ra).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.651</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Cardiovascular Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.3157.2000.10/expansion">Acute Coronary Syndromes</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This comprehensive set of codes is intended to capture a patient with acute coronary syndromes (e.g., acute myocardial infarction, acute coronary thrombosis and unstable angina diagnoses).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.3157.2000.10</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.666.5.3011/expansion">Acute Myocardial Infarction</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This grouping value set contains diagnoses used to identify patients with acute myocardial infarction.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.666.5.3011</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.581/expansion">American Heart Association Heart Failure Stage</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing the American Heart Association Heart Failure Stage.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.581</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.627/expansion">Aneurysm</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Aneurysm.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.627</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.608/expansion">Angina</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Angina.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.608</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.636/expansion">Aortic Disease</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Aortic Disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.636</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.526.3.366/expansion">Arrhythmia</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts of a diagnosis of arrhythmia.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.526.3.366</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.584/expansion">Atherosclerotic Cardiovascular Disease</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Atherosclerotic Cardiovascular Disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.584</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.579/expansion">Cardiomyopathy</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Cardiomyopathy.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.579</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.639/expansion">Carotid Stenosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Carotid Stenosis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.639</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1524/expansion">Congestive Heart Failure Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Congestive heart failure.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1524</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.526.3.369/expansion">Coronary Artery Disease No MI</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts of a diagnosis of coronary artery disease without myocardial infarction.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.526.3.369</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1540/expansion">Coronary Revascularization History</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing the presence of coronary stent or history of coronary revascularization procedure.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1540</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1543/expansion">Heart Failure Diagnois</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing heart failure.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1543</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1563/expansion">Hypertension, Persistent</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains concepts representing persistent hypertension.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1563</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1547/expansion/Latest">Hypertension, Primary and Secondary Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Essential or Primary Hypertension.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1547</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.stage</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.571/expansion">Hypertension Stage</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Hypertension Stage.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.571</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1484/expansion">Hypertension, Pulmonary Hypertension</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Pulmonary hypertension.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1484</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.642/expansion">Intracranial Stenosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Intracranial Stenosis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.642</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.614/expansion">Ischemic Heart Disease</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Ischemic Heart Disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.614</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.615/expansion">Left Ventricular Hypertrophy</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Left Ventricular Hypertrophy.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.615</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.stage</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.580/expansion">NYHA Heart Failure Functional Classifications</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing NYHA Heart Failure Functional Classifications.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.580</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.27/expansion">Peripheral Vascular Disease</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains condition or diagnosis terms representing peripheral vascular disease conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.27</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1488/expansion">Postural tachycardia syndrome (POTS) Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Postural tachycardia syndrome (POTS).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1488</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
	    <tr>
	        <td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
	            <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1488/expansion">Unstable Angina</a></p>
	        </td>
	        <td style="height:15.75pt; vertical-align:top; width:32%">
	            <p>This set of values addresses terms representing Unstable Angina.</p>
	        </td>
	        <td style="height:15.75pt; vertical-align:top; width:20%">
	            <p>2.16.840.1.113762.1.4.1222.611</p>
	        </td>
	        <td style="height:15.75pt; vertical-align:top; width:12%">
	            <p>Condition.code</p>
	        </td>
	    </tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:44.65pt; width:11%">
			<p><strong>Chronic Kidney Disease (CKD)Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:44.65pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:44.65pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:44.65pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1534/expansion/Latest">Acute Renal Failure Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing acute renal failure.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1534</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.159/expansion">Chronic Kidney Disease All Stages (1 through 5)</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing All Stages (1 or 2 or 3 or 4 or 5) of chronic kidney disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.159</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.6/expansion">Chronic Kidney Disease Type or Cause</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains condition or diagnosis terms representing causes of, or types of, chronic kidney disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.6</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Cognitive and Neurological Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1549/expansion">Cerebrovascular Disease Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing cerebrovascular disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1549</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.137/expansion">Cognitive disorder Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing cognitive disorder.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1247.137</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.codes</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			    <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.3157.4043/expansion">Dementia and Related Intracranial Pathologies</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for dementia.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.3157.4043</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.672/expansion">Entrapment Neuropathy</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Entrapment Neuropathy.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.672</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1034.187/expansion">Multiple Sclerosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This value set includes ICD10CM &amp; SNOMED diagnostic codes for multiple sclerosis (MS).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1034.187</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.675/expansion">Myalgic Encephalomyelitis or Chronic Fatigue </a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Myalgic Encephalomyelitis or Chronic Fatigue Syndrome.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.675</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.666/expansion">Neuromas</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Neuromas.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.666</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1518/expansion">Neuropathy Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing neuropathy.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1518</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1516/expansion">Small Fiber Neuropathy Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Small Fiber Neuropathy.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1516</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.841/expansion">Spinal Cord Compression</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Spinal Cord Compression.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.841</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.618/expansion">Stroke</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing stroke and history of stroke related concepts.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.618</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.621/expansion">Transient Ischemic Attack</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Transient Ischemic Attack.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.621</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:23.35pt; width:11%">
			<p><strong>Diabetes Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:23.35pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:23.35pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:23.35pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.556/expansion">Acanthosis Nigricans</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Acanthosis Nigricans.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.556</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.563/expansion">Amputated Limb (Not Traumatic)</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Amputated Limb (Not Traumatic).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.563</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.115.12.1089/expansion">Blindness</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>Blindness</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.464.1003.115.12.1089</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.498/expansion">Cataract of the eye</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Cataract of the Eye.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.498</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.533/expansion">Cellulitis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Cellulitis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.533</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.531/expansion">Charcot Foot</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Charcot Foot.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.531</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1537/expansion">Complication due to Diabetes Mellitus Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing complication due to diabetes mellitus.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1537</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.482/expansion">Diabetic Coma</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Diabetic Coma.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.482</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.523/expansion">Diabetic Foot</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Diabetic Foot.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.523</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.526/expansion">Diabetic Foot Ulcer</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Diabetic Foot Ulcer.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.526</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			    <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.535/expansion">Diabetic Hand or Diabetic Cheiroarthropathy</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Diabetic Hand or Diabetic Cheiroarthropathy.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.535</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.33/expansion">Diabetic Neuropathy Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing neuropathy caused by diabetes.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.33</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.492/expansion">Diabetic Peripheral Angiopathy</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Diabetic Peripheral Angiopathy.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.492</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.526.3.327/expansion">Diabetic Retinopathy</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts of a diagnosis of diabetic retinopathy.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.526.3.327</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.546/expansion">Dupuytren&#39;s Contracture</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Dupuytren&#39;s Contracture.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.546</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.508/expansion">Emotional Distress caused by Chronic Condition</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Emotional Distress caused by Chronic Condition.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.508</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.557/expansion">Eruptive Xanthomatosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Eruptive Xanthomatosis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.557</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.543/expansion">Gangrene</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Gangrene.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.543</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.90/expansion">Gestational Diabetes</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This value set contains codes that represent Gestational Diabetes.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1032.90</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.517/expansion">Hyperglycemic Hyperosmolar Nonketotic Syndrome HHNS</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Hyperglycemic Hyperosmolar Nonketotic Syndrome HHNS.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.517</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.514/expansion">Hypoglycemia unawareness</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Hypoglycemia Unawareness.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.514</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.513/expansion">Hypoglycemic event</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Hypoglycemic Event.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.513</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.520/expansion">Ketoacidosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Ketoacidosis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.520</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.420/expansion">Maturity Onset Diabetes of the Young (MODY)</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Maturity Onset Diabetes of the Young (MODY).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.420</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.540/expansion">Necrobiosis Lipoidica (Skin Lesions)</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Necrobiosis Lipoidica (Skin Lesions).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.540</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.560/expansion">Periodontitis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Periodontitis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.560</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.419/expansion">Prediabetes (borderline diabetes)</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Prediabetes (Borderline Diabetes).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.419</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.501/expansion">Rubeosis Iridis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Rubeosis Iridis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.501</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.549/expansion">Scleroderma or Thick Skin Syndrome</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Scleroderma or Thick Skin Syndrome.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.549</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.103.12.1020/expansion">Type 1 Diabetes</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for a diagnosis of type I diabetes mellitus.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.464.1003.103.12.1020</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.103.12.1021/expansion">Type II Diabetes</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This value set contains concepts related to a diagnosis of Type II Diabetes.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.464.1003.103.12.1021</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Digestive System/Gastrointestinal Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.660/expansion">Irritable Bowel Syndrome</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Irritable Bowel Syndrome.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.660</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.770/expansion">Nonalcoholic Fatty Liver Disease</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Nonalcoholic Fatty Liver Disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.770</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Dissimilar Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.764/expansion">Angioedema</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Angioedema.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.764</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1394/expansion">Lymphadenopathy Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing lymphadenopathy disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1394</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1498/expansion">Mast Cell Activation Syndrome (MCAS) Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Mast Cell Activation Syndrome (MCAS).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1498</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1521/expansion">Multisystem Inflammatory Syndrome in Adults (MIS A) Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Multisystem Inflammatory Syndrome in Adults (MIS-A).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1521</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1388/expansion">Pink Eye Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing pink eye.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1388</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.84/expansion">Preeclampsia Disorders</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnoses or problem terms representing preeclampsia disorders.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.84</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1566/expansion">Pregnancy</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for the pregnant state.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1566</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.7643.3.1064/expansion">Pruritus</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This value set contains concepts related to a diagnosis of pruritus.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.7643.3.1064</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.757/expansion">Restless leg syndrome</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Restless Leg Syndrome.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.757</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1029.35/expansion">Sickle Cell Disease and Related Blood Disorders</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This value set contains concepts that represent sickle cell disease and related blood disorders.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1029.35</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.1240.2017.3.2.2007/expansion">Sleep Disorders</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>Sleep disorders</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.1240.2017.3.2.2007</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.773/expansion">Thalassemia</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Thalassemia.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.773</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.96/expansion">Uremic Pruritus Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing uremic pruritus conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.96</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Functional Health Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Functional Health Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>Functional Health Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Functional Health Conditions</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.113.12.1074/expansion">Frailty Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for a diagnosis of potential indicators of frailty.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.464.1003.113.12.1074</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1491/expansion">Functional disorder of gastrointestinal tract Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Functional disorder of gastrointestinal tract.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1491</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.592/expansion">Hearing Impairment</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Hearing Impairment.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.592</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.709/expansion">Sensory Status</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Sensory Status.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.709</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Genitourinary Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.733/expansion">Erectile Dysfunction</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Erectile Dysfunction.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.733</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.67/expansion">Hematuria Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing hematuria conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.67</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.736/expansion">Interstitial Cystitis or Bladder Pain Syndrome</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Interstitial Cystitis or Bladder Pain Syndrome.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.736</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.715/expansion">Lower Urinary Tract Symptoms (LUTS) From Benign Prostatic Hyperplasia</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Lower Urinary Tract Symptoms (LUTS) From Benign Prostatic Hyperplasia.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.715</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.727/expansion">Nocturia</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Nocturia.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.727</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.730/expansion">Pelvic Organ Prolapse</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Pelvic Organ Prolapse.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.730</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.739/expansion">Recurrent Urinary Tract Infections</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Recurrent Urinary Tract Infections.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.739</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.724/expansion">Urinary Frequency</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Urinary Frequency.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.724</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.718/expansion">Urinary Incontinence</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Urinary Incontinence.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.718</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.721/expansion">Urinary Urgency</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Urinary Urgency.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.721</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1106.26/expansion">Urolithiasis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1106.26</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Hormonal Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.117.12.1016/expansion">Hyperparathyroidism</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for a diagnosis of hyperparathyroidism.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.464.1003.117.12.1016</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.117.12.1015/expansion">Hyperthyroidism</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for a diagnosis of hyperthyroidism.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.464.1003.117.12.1015</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:34.5pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.745/expansion">Hypothyroidism</a></p>
			</td>
			<td style="height:34.5pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Hypothyroidism.</p>
			</td>
			<td style="height:34.5pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.745</p>
			</td>
			<td style="height:34.5pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.97/expansion">Insomnia Disorders</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnoses or problems terms representing insomnia disorders.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.97</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.748/expansion">Menopause</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Menopause.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.748</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1510/expansion">Narcolepsy</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Narcolepsy.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1510</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.754/expansion">Primary aldosteronism</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Primary Aldosteronism.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.754</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.751/expansion">Testicular Hypofunction</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Testicular Hypofunction.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.751</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Infectious Disease Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.110.12.1024/expansion">Hepatitis A</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for a diagnosis of Hepatitis A infection.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.464.1003.110.12.1024</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.67.1.101.1.269/expansion">Hepatitis B</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts of diagnoses for acute or chronic Hepatitis B infections.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.67.1.101.1.269</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.30/expansion">Hepatitis C Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This value set contains diagnosis terms that represent acute or chronic hepatitis C infection.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.30</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1478/expansion">Herpes zoster</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Herpes zoster.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1478</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.120.12.1003/expansion">HIV</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for a diagnosis of human immunodeficiency virus (HIV) disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.464.1003.120.12.1003</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.43/expansion">Tuberculosis Disorders</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnoses or problems that represent that the patient has tuberculosis regardless of the clinical presentation of the condition</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.43</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Long Covid Diagnosis Condition</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1530/expansion">Post Acute Sequelae of Sars Cov 2 Infection (PASC) Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Post Acute Sequelae of Sars-Cov-2 infection (PASC) (Long Covid) disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1530</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
				<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1099.58/expansion">Acute COVID 19 Diagnosis Value Set</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Acute COVID-19 disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1099.58</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Mental Health Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.52/expansion">Anxiety</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This value set contains ICD10CM and SNOMEDCT codes representing conditions related to anxiety.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1032.52</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.600.450/expansion">Bipolar Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for diagnosis of bipolar disorder.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.600.450</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.600.145/expansion">Depression Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for a diagnosis of a depressed state or actual depressive disorder whether recurrent, chronic, or diagnosed as moderate, major, or severe.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.600.145</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.67.1.101.1.254/expansion">Dysthymia</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for diagnoses related to dysthymia.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.67.1.101.1.254</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.590/expansion">Experience of Traumatic Events</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Experience of Traumatic Events.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.590</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.690/expansion">Grief or Loss</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Grief or Loss.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.690</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.105.12.1007/expansion">Major Depression</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for a diagnosis of major depression.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.464.1003.105.12.1007</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.681/expansion">Post Partum Depression</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Post Partum Depression.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.681</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.103/expansion">PostTraumatic Stress Disorder PTSD</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnoses or problem terms representing Post-Traumatic Stress Disorder (PTSD) conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.103</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.687/expansion">Psychological Trauma</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Psychological Trauma.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.687</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.678/expansion">Psychotic Depression</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Psychotic Depression.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.678</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.684/expansion">Seasonal Affective Disorder</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Seasonal Affective Disorder.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.684</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.693/expansion">Suicide Risk</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Suicide Risk.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.693</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Musculoskeletal Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.761/expansion">Claudication</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Claudication.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.761</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1475/expansion">Fibromyalgia Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Fibromyalgia.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1475</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.800/expansion">Temporomandibular Disorder Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Temporomandibular Disorder Diagnosis.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.800</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Nutrition / Metabolic Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.93/expansion">Alkaline Phosphatase Deficiency Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing alkaline phosphatase deficiency conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.93</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.53/expansion">Anemia Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing anemia conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.53</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1047.100/expansion">Familial Hypercholesterolemia</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for familial hypercholesterolemia.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1047.100</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.586/expansion">Gout</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Gout.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.586</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.60/expansion">Hypercalcemia Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing hypercalcemia conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.60</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.50/expansion">Hyperkalemia Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing hyperkalemia conditions</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.50</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.73/expansion">Hyperlipidemia Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing hyperlipidemia conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.73</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.66/expansion">Hyperphosphatemia Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing hyperphosphatemia conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.66</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.742/expansion">Hypertriglyceridemia</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Hypertriglyceridemia.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.742</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.85/expansion">Hyperuricemia Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Hyperuricemia conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.85</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.47/expansion">Hypoalbuminemia Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing hypoalbuminemia conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.47</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.61/expansion">Hypocalcemia Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing hypocalcemia conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.61</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1517/expansion">Malnutrition Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Malnutrition.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1517</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.70/expansion">Metabolic Acidosis Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Metabolic acidosis conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.70</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1561/expansion">Metabolic Syndrome Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing metabolic syndrome.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1561</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.36/expansion">Obesity Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing obesity.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.36</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.90/expansion">Vitamin D Deficiency Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Vitamin D Deficiency conditions.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.90</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:21.1pt; width:11%">
			<p><strong>Pain Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:21.1pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:21.1pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:21.1pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.76/expansion">Chronic Pain Conditions</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnoses or problem terms representing that chronic pain exists.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.76</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1558/expansion">Low Back Pain</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains terms representing low back pain.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1558</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1552/expansion">Migraine Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing migraine.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1552</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1555/expansion">Chronic Tension Type Headache Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing chronic tension-type headache.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1555</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.663/expansion">Neuropathic Pain (Neuralgia)</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Neuropathic Pain (Neuralgia).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.663</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.669/expansion">Phantom Pain</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Phantom Pain.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.669</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Respiratory Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1472/expansion">Asthma Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Asthma.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1472</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1463/expansion">Bronchiectasis Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Bronchiectasis disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1463</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1466/expansion">Chronic obstructive pulmonary disease (COPD) Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Chronic obstructive pulmonary disease (COPD).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1466</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1469/expansion">Interstitial lung disease Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Interstitial Lung Disease.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1469</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.645/expansion">Pulmonary Edema</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Pulmonary Edema.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.645</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1481/expansion">Pulmonary embolism Diagnosis</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis terms representing Pulmonary embolism.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1481</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.102/expansion">Sleep Apnea Disorders</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnoses or problem terms representing central, obstructive, and unknown cause sleep apnea disorders.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.102</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Social Determinants of Health Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.75pt; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1336/expansion">Elder and Child Abuse</a></p>
			</td>
			<td style="background-color:#fcfdfd; height:15.75pt; width:32%">
			<p>This set of values addresses terms representing Experience of Abuse.</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.75pt; width:20%">
			    <p>2.16.840.1.113762.1.4.1222.1281</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.75pt; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.75pt; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.788/expansion">Social Determinants of Health Conditions</a></p>
			</td>
			<td style="background-color:#fcfdfd; height:15.75pt; width:32%">
			<p>The value sets in this group represent all of the individual domain diagnoses identified by the Gravity Project.</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.75pt; width:20%">
			<p>2.16.840.1.113762.1.4.1196.788</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.75pt; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#d0cece; border-color:black; height:15.75pt; width:11%">
			<p><strong>Substance Use / Misuse Conditions</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d0cece; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.845/expansion">Alcohol Use</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Alcohol Use (Revised 2021).</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.845</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.24/expansion">Alcohol Use Disorder</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values contains condition or diagnosis terms representing alcohol use disorders.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.24</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.702/expansion">Binge Drinking</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Binge Drinking.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.702</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.591/expansion">Cannabis Use</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Cannabis Use.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.591</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.707/expansion">Drug Misuse</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Drug Misuse.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.707</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.106.12.1004/expansion">Substance Abuse</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for a diagnosis of substance abuse.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.464.1003.106.12.1004</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.699/expansion">Tobacco Use or Exposure</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Tobacco Use or Exposure.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.699</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.696/expansion">Vaping</a></p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Vaping use.</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.696</p>
			</td>
			<td style="height:15.75pt; vertical-align:top; width:12%">
			<p>Condition.code</p>
			</td>
		</tr>
	</tbody>
</table>

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_clinical_test_value_sets.md

This table holds the value sets that may be used with the [MCC Clinical Test Profile](StructureDefinition-MCCClinicalResultObservation.html). 

**Table Key**
* **Value Set Name and Link**: All of these value sets are housed in the [NLM Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/welcome). The value set name is a link to the value set. You must have an NLM/UMLS account to access. There is no charge for an account. Note: the first time you click on the value set name link in a given session, there my be a delay in loading and you will need to sign in once loaded.
* **Value Set Clinical Focus**: The Value Set Clinical Focus is the same as the clinical focus as written in VSAC which is a free text statement describing the general context of the concepts in the set.
* **OID**: The Object Identifier (OID) of the set. OIDs of value sets are unique, whereas the names may not be. If accessing the value set outside of this table link, it is safest to perform that search with the OID
* **Profile Element**: The Profile element asserts the location within the profile the value set term **SHALL** be used.

**MCC Value Sets Use and Validation**
The value sets in the MCC Value Set Library pages are not bound within any profile. As a result "automatic" validation (confirmation) that a code sent in an instance is a member of that value set will not occurr. Validation support can be added in implmentation. These Symptom Value Sets may be used for several different purposes and no clinically appropriate use is precluded: 
* Querying for patients that have experienced particular conditions or diagnoses
* Within Quality Measures or for research using [Clinical Quality Language (CQL)](http://cql.hl7.org/) (for example)
* For display within applications
* Terminology validation support

**Accessing Value Sets using FHIR Value Set Resource**
* To fetch the FHIR ValueSet resource (in other words, the value set definition) use:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID] 
* To fetch the FHIR ValueSet resource expansion use the FHIR $expand operation:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]/$expand 

For more information refer to the [FHIR Terminology Service for VSAC Resources](https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html#:~:text=The%20FHIR%20Terminology%20Service%20for,included%20in%20the%20value%20sets.)

<table border="1" cellspacing="0" style="width:100.0%">
    <tbody>
        <tr>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:139.25pt">
                <p><strong>Value Set Name and VSAC Link</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:151.5pt">
                <p><strong>Value Set Clinical Focus</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:78.0pt">
                <p><strong>OID</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:98.75pt">
                <p><strong>Profile Element</strong></p>
            </td>
        </tr>
        <tr>
            <td style="border-color:black; height:15.0pt; vertical-align:top; width:139.25pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1583/expansion">Cystography</a></p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:151.5pt">
                <p>This set of values represents cystography test concepts.</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:78.0pt">
                <p>2.16.840.1.113762.1.4.1222.1583</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:98.75pt">
                <p>observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="border-color:black; height:15.0pt; vertical-align:top; width:139.25pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.873/expansion">Echocardiogram</a></p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:151.5pt">
                <p>This set of values represent echocardiogram test concepts. These terms may be used when reporting a result associated with echocardiogram or may be used to represent the procedure.</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:78.0pt">
                <p>2.16.840.1.113762.1.4.1222.873</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:98.75pt">
                <p>observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="border-color:black; height:15.0pt; vertical-align:top; width:139.25pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.968/expansion">Electroencephalogram</a></p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:151.5pt">
                <p>This set of values represent Electroencephalogram test concepts. These terms may be used when reporting a result associated with Electroencephalogram or may be used to represent the procedure.</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:78.0pt">
                <p>2.16.840.1.113762.1.4.1222.968</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:98.75pt">
                <p>observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="border-color:black; height:15.0pt; vertical-align:top; width:139.25pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.967/expansion">Electromyography</a></p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:151.5pt">
                <p>This set of values addresses terms representing Electromyography.</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:78.0pt">
                <p>2.16.840.1.113762.1.4.1222.967</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:98.75pt">
                <p>observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="border-color:black; height:30.0pt; vertical-align:top; width:139.25pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.969/expansion">Exercise Stress Test</a></p>
            </td>
            <td style="height:30.0pt; vertical-align:top; width:151.5pt">
                <p>This set of values addresses terms representing Exercise Stress Test.</p>
            </td>
            <td style="height:30.0pt; vertical-align:top; width:78.0pt">
                <p>2.16.840.1.113762.1.4.1222.969</p>
            </td>
            <td style="height:30.0pt; vertical-align:top; width:98.75pt">
                <p>observation.code</p>
            </td>
        </tr>
    </tbody>
</table>

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_diagnostic_report_and_note_imaging_value_sets.md

This table holds the value sets that may be used with the [MCC DiagnosticReport And Note Profile](StructureDefinition-MCCDiagnosticReportAndNote.html)

**Table Key**
* **Value Set Name and Link**: All of these value sets are housed in the [NLM Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/welcome). The value set name is a link to the value set. You must have an NLM/UMLS account to access. There is no charge for an account. Note: the first time you click on the value set name link in a given session, there my be a delay in loading and you will need to sign in once loaded.
* **Value Set Clinical Focus**: The Value Set Clinical Focus is the same as the clinical focus as written in VSAC which is a free text statement describing the general context of the concepts in the set.
* **OID**: The Object Identifier (OID) of the set. OIDs of value sets are unique, whereas the names may not be. If accessing the value set outside of this table link, it is safest to perform that search with the OID
* **Profile Element**: The Profile element asserts the location within the profile the value set term **SHALL** be used.

**MCC Value Sets Use and Validation**
The value sets in the MCC Value Set Library pages are not bound within any profile. As a result "automatic" validation (confirmation) that a code sent in an instance is a member of that value set will not occur. Validation support can be added in implementation. These Symptom Value Sets may be used for several different purposes and no clinically appropriate use is precluded: 
* Querying for patients that have experienced particular symptoms
* Within Quality Measures or for research using [Clinical Quality Language (CQL)](http://cql.hl7.org/) (for example)
* For display within applications
* Terminology validation support

**Accessing Value Sets using FHIR Value Set Resource**
* To fetch the FHIR ValueSet resource (in other words, the value set definition) use:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID] 
* To fetch the FHIR ValueSet resource expansion use the FHIR $expand operation:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]/$expand 

For more information refer to the [FHIR Terminology Service for VSAC Resources](https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html#:~:text=The%20FHIR%20Terminology%20Service%20for,included%20in%20the%20value%20sets.)

<table border="1" cellspacing="0" style="width:100.0%">
	<tbody>
		<tr>
			<td style="background-color:#c6d9f1; border-color:black; height:15.0pt; width:11%">
			<p><strong>Value Set Name</strong></p>
			</td>
			<td style="background-color:#c6d9f1; border-color:black; height:15.0pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#c6d9f1; border-color:black; height:15.0pt; width:width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#c6d9f1; border-color:black; height:15.0pt; width:width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.894/expansion">Abdomen X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Abdomen X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.894</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.943/expansion">Abdominal MRA</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Abdominal MRA or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.943</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:54.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.910/expansion">Abdominal MRI</a></p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Abdominal Region MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.910</p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:81.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.882/expansion">Abdominal or Pelvic CT</a></p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:32%">
			<p>This set of values represent computer assisted diagnostic medical imaging test concepts. These terms may be used when reporting a result associated with Abdominal or Pelvic CT or may be used to represent the procedure.</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.882</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.911/expansion">Adrenal Gland MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Adrenal Gland MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.911</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.935/expansion">Ankle MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Ankle MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.935</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.904/expansion">Ankle X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Ankle X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.904</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:27.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.155/expansion">Bone Density</a></p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:32%">
			<p>This set of values contains codes commonly used to describe Bone Density.</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.155</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:27.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.526.2.1374/expansion">Bone Scan</a></p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts of bone scan diagnostic imaging.</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113883.3.526.2.1374</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:27.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.156/expansion">Bone Survey X Rays</a></p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:32%">
			<p>This set of values contains codes commonly used to describe Bone Survey X Rays.</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.156</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.922/expansion">Brain MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Brain MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.922</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.918/expansion">Cardiac MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Cardiac MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.918</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:68.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.881/expansion">Chest CT</a></p>
			</td>
			<td style="height:68.25pt; vertical-align:top; width:32%">
			<p>This set of values represent computer assisted diagnostic medical imaging test concepts. These terms may be used when reporting a result associated with chest CT or may be used to represent the procedure.</p>
			</td>
			<td style="height:68.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.881</p>
			</td>
			<td style="height:68.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:81.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.888/expansion">Chest CT Angiogram</a></p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:32%">
			<p>This set of values represent computer assisted diagnostic medical imaging test concepts. These terms may be used when reporting a result associated with Chest CT angiogram or may be used to represent the procedure.</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.888</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.944/expansion">Chest MRA</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Chest MRA or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.944</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.916/expansion">Chest Region MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Chest Region MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.916</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1571/expansion">Chest US</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Chest US or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.1571</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:81.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.885/expansion">Coronary CT Angiogram</a></p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:32%">
			<p>This set of values represent computer assisted diagnostic medical imaging test concepts. These terms may be used when reporting a result associated with Coronary CT Angiogram or may be used to represent the procedure.</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.885</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.526.3.1134/expansion">Ejection Fraction</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts of diagnostic studies for ejection fraction.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113883.3.526.3.1134</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.938/expansion">Elbow MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Elbow MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.938</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.899/expansion">Elbow X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Elbow X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.899</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.925/expansion">Foot MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Foot MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.925</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.903/expansion">Foot X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Foot X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.903</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.937/expansion">Forearm MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Forearm MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.937</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:54.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.898/expansion">Forearm X Ray</a></p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Forearm (Radius and Ulna) X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.898</p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.949/expansion">Functional MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Functional MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.949</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.892/expansion">Gallbladder X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Gallbladder X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.892</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:54.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.891/expansion">Gastrointestinal Tract X Ray</a></p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Gastrointestinal Tract X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.891</p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.940/expansion">Hand MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Hand MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.940</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.896/expansion">Hand X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Hand X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.896</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:81.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.889/expansion">Head and Neck CT Angiogram</a></p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:32%">
			<p>This set of values represent computer assisted diagnostic medical imaging test concepts. These terms may be used when reporting a result associated with Head and Neck CT Angiogram or may be used to represent the procedure.</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.889</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.947/expansion">Head and Neck MRA</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with head and Neck MRA or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.947</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.921/expansion">Head and Neck MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Head and Neck MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.921</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:27.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.17.4077.2.1019/expansion">Head CT</a></p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:32%">
			<p>This value set contains concepts that represent a CT of the head.</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113883.17.4077.2.1019</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:27.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.884/expansion">Heart Calcium Score</a></p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Heart Calcium Score.</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.884</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.933/expansion">Hip MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Hip MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.933</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.908/expansion">Hip X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Hip X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.908</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.915/expansion">Kidney MRA</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Kidney MRA or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.915</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.912/expansion">Kidney MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Kidney MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.912</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.893/expansion">Kidney X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Kidney X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.893</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.924/expansion">Knee MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with knee MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.924</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.906/expansion">Knee X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Knee X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.906</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:68.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.883/expansion">Limb CT</a></p>
			</td>
			<td style="height:68.25pt; vertical-align:top; width:32%">
			<p>This set of values represent computer assisted diagnostic medical imaging test concepts. These terms may be used when reporting a result associated with Limb CT or may be used to represent the procedure.</p>
			</td>
			<td style="height:68.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.883</p>
			</td>
			<td style="height:68.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:81.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.886/expansion">Limb CT Angiogram</a></p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:32%">
			<p>This set of values represent computer assisted diagnostic medical imaging test concepts. These terms may be used when reporting a result associated with Limb CT Angiogram or may be used to represent the procedure.</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.886</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.928/expansion">Lower Extremity MRA</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Lower Extremity MRA or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.928</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.936/expansion">Lower Extremity MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Lower Extremity MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.936</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.909/expansion">Lower Extremity X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Lower Extremity X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.909</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:54.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.951/expansion">Optical Coherence Tomography</a></p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Optical Coherence Tomography or may be used to represent the procedure.</p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.951</p>
			</td>
			<td style="height:54.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.913/expansion">Pancreas MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Pancreas MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.913</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.948/expansion">Pelvic Region MRA</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Pelvic Region MRA or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.948</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.923/expansion">Pelvic Region MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Pelvic Region MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.923</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.895/expansion">Pelvis X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Pelvis X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.895</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.917/expansion">Pulmonary MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Pulmonary MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.917</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.905/expansion">Shin X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Shin bone (Tibia) X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.905</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.927/expansion">Shoulder MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Shoulder MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.927</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.901/expansion">Shoulder X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Shoulder X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.901</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:81.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.880/expansion">Spinal or Back CT</a></p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:32%">
			<p>This set of values represent computer assisted diagnostic medical imaging test concepts. These terms may be used when reporting a result associated with Spinal or Back CT or may be used to represent the procedure.</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.880</p>
			</td>
			<td style="height:81.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.920/expansion">Spine MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Spine MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.920</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.930/expansion">Spine X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Spine X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.930</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.934/expansion">Thigh or Femur MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Thigh or Femur MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.934</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.907/expansion">Thigh X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Thigh X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.907</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.900/expansion">Upper Arm X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Upper Arm X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.900</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.945/expansion">Upper Extremity MRA</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Upper Extremity MRA or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.945</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.942/expansion">Upper Extremity MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Upper Extremity MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.942</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.902/expansion">Upper Extremity X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Upper Extremity X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.902</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.939/expansion">Wrist MRI</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Wrist MRI or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.939</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:41.25pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.897/expansion">Wrist X Ray</a></p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:32%">
			<p>These terms may be used when reporting a result associated with Wrist X-ray or may be used to represent the procedure.</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1222.897</p>
			</td>
			<td style="height:41.25pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:27.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1146.9/expansion">Xray of Chest (Imaging)</a></p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:32%">
			<p>This set of values contains codes for chest x-rays</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:20%">
			<p>2.16.840.1.113762.1.4.1146.9</p>
			</td>
			<td style="height:27.75pt; vertical-align:top; width:width:12%">
			<p>DiagnosticReport.code</p>
			</td>
		</tr>
	</tbody>
</table>

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_goal_value_sets.md

There are no additional value sets developed for the [MCC Goal Profile](StructureDefinition-MCCGoal.html) beyond the vocabulary bindings as defined in the US Core Goal Profile that the MCC Goal profile is derived from, and the SDOH Goals value set defined by the Gravity project. 
The US Core Goal profile Goal.description and the Goal.target.measure are extensible bindings or example bindings respectively. Extensible bindings mean if there is no applicable concept in value set (based on human review), an alternate concept (either system/code pair, or text) may be used instead. Example bindings are just suggestions.

In today's systems, goals are most often captured as free text, and sometimes high-level terms/codes such as *LOINC 97842-9 Achievement of therapeutic goals by discharge,* or re-using an observable lab code within a goal context, such as *LOINC (41995-2) Hemoglobin A1c [Mass/volume] in Blood*, and specifying a target measure or detail value of less than 5.7% and a due date. Nursing Care Plan specific EHR modules may take advantage of specific nursing terminology terms that can also often be found in SNOMED CT such as *1144884009  Improvement in level of integrity of skin (finding) * or *703941003 Improved exercise tolerance (finding)*

Most of the value sets defined in the MCC libraries, in the context of the MCC Goal profile, could represent goals. For example, the [Laboratory Result Value Sets](mcc_laboratory_result_value_sets.html#mcc-laboratory-result-value-sets) may be used in the MCC Goal Profile as discussed above, and the Symptom Value Sets, may be used in the MCC Goal profiles with an encoded target measure or detail of *SNOMED CT 1250004  Decreased (qualifier value).*

**Table Key**
* **Value Set Name and Link**: All of these value sets are housed in the [NLM Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/welcome). The value set name is a link to the value set. You must have an NLM/UMLS account to access. There is no charge for an account. Note: the first time you click on the value set name link in a given session, there my be a delay in loading and you will need to sign in once loaded.
* **Value Set Clinical Focus**: The Value Set Clinical Focus is the same as the clinical focus as written in VSAC which is a free text statement describing the general context of the concepts in the set.
* **OID**: The Object Identifier (OID) of the set. OIDs of value sets are unique, whereas the names may not be. If accessing the value set outside of this table link, it is safest to perform that search with the OID
* **Profile Element**: The Profile element asserts the location within the profile the value set term **SHALL** be used.

**MCC Value Sets Use and Validation**
The value sets in the MCC Value Set Library pages are not bound within any profile. As a result "automatic" validation (confirmation) that a code sent in an instance is a member of that value set will not occurr. Validation support can be added in implmentation. These Symptom Value Sets may be used for several different purposes and no clinically appropriate use is precluded: 
* Querying for patients that have experienced particular symptoms
* Within Quality Measures or for research using [Clinical Quality Language (CQL)](http://cql.hl7.org/) (for example)
* For display within applications
* Terminology validation support

**Accessing Value Sets using FHIR Value Set Resource**
* To fetch the FHIR ValueSet resource (in other words, the value set definition) use:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID] 
* To fetch the FHIR ValueSet resource expansion use the FHIR $expand operation:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]/$expand 

For more information refer to the  [FHIR Terminology Service for VSAC Resources](https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html#:~:text=The%20FHIR%20Terminology%20Service%20for,included%20in%20the%20value%20sets.)

Comments are welcome as to whether specific goal value sets should be developed for use in the context of a Multiple Chronic Condition Care Plan and the likelihood of being able to successfully query for encoded goals.
<table border="1" cellspacing="0" style="width:100.0%">
    <tbody>
        <tr>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:139.25pt">
                <p><strong>Value Set Name and VSAC Link</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:151.5pt">
                <p><strong>Value Set Clinical Focus</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:78.0pt">
                <p><strong>OID</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:98.75pt">
                <p><strong>Profile Element</strong></p>
            </td>
        </tr>
        <tr>
            <td style="border-color:black; height:15.0pt; vertical-align:top; width:139.25pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.71/expansion">Social Determinants of Health Goals</a></p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:151.5pt">
                <p>The value sets in this group represent all of the individual domain goals identified by the Gravity Project</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:78.0pt">
                <p>2.16.840.1.113762.1.4.1247.71</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:98.75pt">
                <p>Goal.description</p>
                <p>or</p>
                <p>Goal.target.measure</p>
            </td>
        </tr>
    </tbody>
</table>

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_laboratory_result_value_sets.md

This table holds the value sets that may be used with the [MCC Laboratory Result Observation Profile](StructureDefinition-MCCLaboratoryResultObservation.html). 


**Table Key**
* **Value Set Name and Link**: All of these value sets are housed in the [NLM Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/welcome). The value set name is a link to the value set. You must have an NLM/UMLS account to access. There is no charge for an account. Note: the first time you click on the value set name link in a given session, there my be a delay in loading and you will need to sign in once loaded.
* **Value Set Clinical Focus**: The Value Set Clinical Focus is the same as the clinical focus as written in VSAC which is a free text statement describing the general context of the concepts in the set.
* **OID**: The Object Identifier (OID) of the set. OIDs of value sets are unique, whereas the names may not be. If accessing the value set outside of this table link, it is safest to perform that search with the OID
* **Profile Element**: The Profile element asserts the location within the profile the value set term **SHALL** be used. In this table, the appropriate profile element is listed as Observation.code, but in most cases the terms would also be appropriate for observation.component.code when part of a panel

**MCC Value Sets Use and Validation**
The value sets in the MCC Value Set Library pages are not bound within any profile. As a result "automatic" validation (confirmation) that a code sent in an instance is a member of that value set will not occurr. Validation support can be added in implmentation. These Symptom Value Sets may be used for several different purposes and no clinically appropriate use is precluded: 
* Querying for patients that have experienced particular symptoms
* Within Quality Measures or for research using [Clinical Quality Language (CQL)](http://cql.hl7.org/) (for example)
* For display within applications
* Terminology validation support

**Accessing Value Sets using FHIR Value Set Resource**
* To fetch the FHIR ValueSet resource (in other words, the value set definition) use:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID] 
* To fetch the FHIR ValueSet resource expansion use the FHIR $expand operation:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]/$expand 

For more information refer to the  [FHIR Terminology Service for VSAC Resources](https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html#:~:text=The%20FHIR%20Terminology%20Service%20for,included%20in%20the%20value%20sets.)


<table border="1" cellspacing="0" style="width:100.0%">
	<tbody>
		<tr>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:11%">
			<p><strong>Value Set Name and VSAC Link</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.792/expansion">24 Hour Urine Protein Excretion</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing 24 Hour Urine Protein Excretion.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.792</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.791/expansion">24 Hour Urine Volume</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing 24 Hour Urine Volume.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.791</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.3616.200.110.102.5001/expansion">Alanine Aminotransferase (ALT), Bld/Ser/Plas</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values contains terms related to alanine aminotransferase (ALT) levels in blood, serum, or plasma.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.3616.200.110.102.5001</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.151/expansion">Albumin in Blood, Plasma, or Serum</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Albumin results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.151</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.811/expansion">Aldosterone/Renin Ratio</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Aldosterone/Renin Ratio.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.811</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.805/expansion">Alkaline Phosphatase (Alp) in Blood, Serum or Plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Alkaline Phosphatase (Alp) in blood, serum or plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.805</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.153/expansion">Anion Gap</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Anion Gap results in blood, plasma, and other body fluids.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.153</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1575/expansion">Arterial Blood Gas (ABG)</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable panel code(s) for Arterial Blood Gas (ABG).</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1575</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.3616.200.110.102.5006/expansion">Aspartate Aminotransferase (AST), Ser/Plas</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values contains terms related to aspartate aminotransferase (AST) in serum or plasma.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.3616.200.110.102.5006</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.804/expansion">Aspartate Transaminase or Alanine Aminotransferase Ratio</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Aspartate Transaminase or Alanine Aminotransferase Ratio.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.804</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.795/expansion">B Type Natriuretic Peptide [Bnp] in Blood, Serum or Plasma</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing B Type Natriuretic Peptide [Bnp] in blood, serum or plasma.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.795</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.130/expansion">Bicarbonate in blood, serum or plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Serum Bicarbonate results in blood, serum or plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.130</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.3616.200.110.102.5007/expansion">Bilirubin, Total, Bld/Ser/Plas</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values contains terms related to total bilirubin levels in blood, serum or plasma.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.3616.200.110.102.5007</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:19.35pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.813/expansion">Blood Ethanol Level</a></p>
			</td>
			<td style="height:19.35pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Blood Ethanol Level.</p>
			</td>
			<td style="height:19.35pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.813</p>
			</td>
			<td style="height:19.35pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.113/expansion">Blood Urea Nitrogen</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains lab test codes used for a blood/serum/plasma Blood Urea Nitrogen lab test using a Mass or Moles per unit volume measurement, regardless of context, such as pre- or post- dialysis, and including both arterial and venous blood sources.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.113</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.870/expansion">Bone Biopsy Report</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Bone Biopsy Report.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.870</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.3616.200.110.102.5015/expansion">C reactive Protein (CRP), Bld/Ser/Plas</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values contains terms related to C-reactive protein levels in blood, serum, or plasma.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.3616.200.110.102.5015</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.794/expansion">Calcium (Not Corrected for Serum Albumin) in Blood, Plasms, or Serum</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Serum or Plasma or Blood Calcium (Not Corrected for Serum Albumin).</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.794</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1573/expansion">Cerebral Spinal Fluid (CSF) Analysis</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable panel code(s) for Cerebral Spinal Fluid (CSF) Analysis.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1573</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.132/expansion">Chloride in blood, serum or plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Chloride results in blood, serum or plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.132</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1576/expansion">Coagulation Assay (PT, aPTT, Fibrinogen)</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable panel code(s) for Coagulation Assay (PT, aPTT, Fibrinogen).</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1576</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/1.3.6.1.4.1.6997.4.1.2.271.13.38167.1.1.999.594/expansion/Latest">Complete Blood Count (with Diff)</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>Define list of blood tests that represent a complete blood count with differential.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>1.3.6.1.4.1.6997.4.1.2.271.13.38167.1.1.999.594</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1574/expansion">Comprehensive Metabolic Panel (CMP)</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable panel codes for Comprehensive Metabolic Panel (CMP).</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1574</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.122/expansion">Corrected Calcium</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable terms for predicted Corrected Calciums in serum or plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.122</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1580/expansion">COVID 19 (SARS CoV 2), SARS CoV, Influenza virus A and B Tests</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable panel codes for COVID-19 (SARS-CoV-2), SARS-CoV, and Influenza virus A and B Tests.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1580</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1579/expansion">Creatine Kinase (CK, CK MB) in Blood, Serum, or Plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable panel code(s) for Creatine Kinase (CK, CK-MB).</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1579</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.111/expansion">Creatinine in blood, serum or plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory terms representing blood, serum or plasma Creatinine.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.111</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.138/expansion">Cystatin C</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory terms representing Cystatin C protein in mass/volume with a specimen source of blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.138</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1577/expansion">D Dimer Test</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable panel code(s) for D-Dimer Test.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1577</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
				<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1597/expansion">Drugs of Abuse Screen</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Drugs of Abuse Screen.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
				<p>2.16.840.1.113762.1.4.1222.1597</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.147/expansion">Erythrocyte Distribution Width</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Erythrocyte Distribution Width results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.147</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.3616.200.110.102.5019/expansion">Erythrocyte Sedimentation Rate (ESR), Blood</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values contains terms related to the measurement of erythrocyte sedimentation rate (ESR) in blood.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.3616.200.110.102.5019</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.150/expansion">Estimated Average Glucose</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Estimated Average Glucose results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.150</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.179/expansion">Estimated Glomerular Filtration Rate (eGFR)</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This value set contains concepts that represent estimated glomerular filtration rate (eGFR) tests.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.179</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.808/expansion">Fasting Blood Glucose</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Fasting Blood Glucose.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.808</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.140/expansion">Ferritin</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable Ferritin terms in blood, serum and plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.140</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.7643.2.1019/expansion">Free T4 (Thyroxine) Test</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This value set captures free T4 test.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.7643.2.1019</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.806/expansion">Gamma Glutamyl Transpeptidase (Ggt) in blood, serum or plasma</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Gamma Glutamyl Transpeptidase (Ggt) in blood, serum or plasma.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.806</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.869/expansion">Gastric Tissue Biopsy Report</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Gastric Tissue Biopsy Report.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.869</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.94/expansion">Glucose Tolerance Test Results</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>Lists any LOINC code that could represent a Glucose Tolerance Test result</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1032.94</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.143/expansion">Hematocrit</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Hematocrit results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.143</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.114/expansion">Hemoglobin</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains codes for lab tests commonly used to measure hemoglobin done on a source of blood, serum or plasma with a reporting scale of mass/volume or Moles/volume.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.114</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.119/expansion">Hemoglobin A1C</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains codes for lab tests commonly used to measure Hemoglobin A1C done on a source of blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.119</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.135/expansion">High Density Lipoprotein</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for High Density Lipoprotein (HDL) related codes results in blood including its ratio with Low Density Lipoprotein (LDL) and cholesterol.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.135</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.801/expansion">High Sensitivity Troponin</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing High Sensitivity Troponin.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.801</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.117.1.7.1.213/expansion">INR</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>The purpose of this value set is to represent concepts for laboratory test for international normalized ratio (INR).</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.117.1.7.1.213</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.129/expansion">Intact Parathyroid Hormone</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Intact Parathyroid Hormone results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.129</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.118/expansion">Iron Saturation (Transferrin Saturation/TSAT)</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains codes for lab tests commonly used to measure Iron Saturation done on a source of serum or plasma with a reporting scale of mass/volume or Moles/volume.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.118</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/expansions?pr=all&amp;rel=Latest&amp;q=2.16.840.1.113762.1.4.1222.864">Kidney Biopsy Report</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Kidney Biopsy Report.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.864</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
				<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
				<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.128/expansion">KT/V Hemodialysis Ratio</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
				<p>This set of values contains laboratory observable term codes for KT/V. Kt/V is a measure of the dose of dialysis given in a single treatment where K is the dialyzer urea clearance, t is the total treatment time, and V is the total volume </p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
				<p>2.16.840.1.113762.1.4.1222.128</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
				<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1568/expansion">Low Density Lipoprotein</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Low Density Lipoprotein (LDL) related codes results in blood including its ratio with High Density Lipoprotein (HDL) and cholesterol.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1568</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.145/expansion">Mean Corpuscular Hemoglobin Concentration</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Mean Corpuscular Hemoglobin Concentration results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.145</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.144/expansion">Mean Corpuscular Volume</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Mean Corpuscular Volume results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.144</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1581/expansion">Microorganisms Detection by Blood Culture</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable panel codes for microorganism detection in Blood Culture.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1581</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1582/expansion">Microorganisms Detection by Sputum Culture</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains codes for lab tests to identify microorganisms in sputum culture.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1582</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.868/expansion">Muscle Biopsy Report</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Muscle Biopsy Report.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.868</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.797/expansion">N Terminal Pro_B_Type Natriuretic Peptide [Nt_Probnp] in blood, serum or plasma</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing N Terminal Pro_B_Type Natriuretic Peptide [Nt_Probnp] in blood, serum or plasma.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.797</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.3616.200.110.102.5033/expansion">Oxygen Saturation, Blood</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values contains terms related to oxygen saturation.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.3616.200.110.102.5033</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.123/expansion">Phosphorus in blood, serum or plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable terms for Phosphorus in blood, serum or plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.123</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.146/expansion">Platelet Count</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable Platelet Count terms in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.146</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.148/expansion">Platelet Distribution Width</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Platelet Distribution Width results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.148</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.149/expansion">Platelet Mean Volume</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Platelet Mean Volume results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.149</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.120/expansion">Potassium in blood, serum or plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains codes for lab tests to measure Potassium in blood, serum or plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.120</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1578/expansion">Procalcitonin in Blood, Serum, or Plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains codes for lab tests to measure Procalcitonin in blood, serum or plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1578</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.809/expansion">Random Blood Glucose Test</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Random Blood Glucose Test.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.809</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.141/expansion">Red Blood Cell Count (Erythrocytes)</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Red Blood Cell (Erythrocyte) Count results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.141</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.812/expansion">Serum Rheumatoid Factor</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Serum Rheumatoid Factor.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.812</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.867/expansion">Skin Biopsy Report</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Skin Biopsy Report.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.867</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.131/expansion">Sodium in blood, serum or plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Sodium results in blood, serum or plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.131</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.7643.3.1024/expansion">Thyroid Stimulating Hormone (TSH) Test</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This value set captures TSH test.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.7643.3.1024</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.793/expansion">Total Carbon Dioxide or Bicarbonate in blood, serum or plasma</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>Total Carbon Dioxide or Bicarbonate in blood, serum or plasma.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.793</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.139/expansion">Total Cholesterol</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Total Cholesterol results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.139</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.137/expansion">Triglyceride in blood, serum or plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for triglyceride results in blood, serum and plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.137</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.807/expansion">Triiodothyronine in serum or plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Triiodothyronine in serum or plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.807</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.3616.200.110.102.5061/expansion">Troponin I, Bld/Ser/Plas</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values contains terms related to the measurement of troponin I levels in blood, serum, or plasma.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.3616.200.110.102.5061</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.3616.200.110.102.5062/expansion">Troponin T, Bld/Ser/Plas</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:32%">
			<p>This set of values contains terms related to the measurement of troponin T levels in blood, serum, or plasma.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.3616.200.110.102.5062</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.819/expansion">Urea Reduction Ratio</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Urea Reduction Ratio.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.819</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.810/expansion">Uric Acid (Urate) in blood, serum or plasma</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Uric Acid (Urate) in blood, serum or plasma.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.810</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.6929.2.1002/expansion">Urine Albumin Creatinine Ratio</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This value set contains concepts that represent urine albumin creatinine ratio (uACR) tests.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113883.3.6929.2.1002</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.790/expansion">Urine Protein to Creatinine Ratio (UPCR)</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Urine Protein-to-Creatinine Ratio (UPCR).</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.790</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
	    <tr>
	        <td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
	            <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.176/expansion">Urine Sediment</a></p>
	        </td>
	        <td style="height:15.0pt; vertical-align:top; width:32%">
	            <p>This set of values contains laboratory observable terms for urine sediment including RBC, RBC casts, WBC, WBC casts, Tubular cells. Cellular casts, Granular casts, and Fat (oval fat bodies, fatty casts, free fat).</p>
	        </td>
	        <td style="height:15.0pt; vertical-align:top; width:20%">
	            <p>2.16.840.1.113762.1.4.1222.176</p>
	        </td>
	        <td style="height:15.0pt; vertical-align:top; width:12%">
	            <p>Observation.code</p>
	        </td>
	    </tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.154/expansion">Urine Urea Nitrogen</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for Urine Urea Nitrogen.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.154</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.823/expansion">Uroflowmetry</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values addresses terms representing Uroflowmetry observations.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.823</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.126/expansion">Vitamin D Levels</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory test observable term codes for Vitamin D level results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.126</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.142/expansion">White Blood Cell (Leukocytes) Count</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:32%">
			<p>This set of values contains laboratory observable term codes for White Blood Cell (Leukocytes) Count results in blood.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.142</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:12%">
			<p>Observation.code</p>
			</td>
		</tr>
	</tbody>
</table>

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_medication_request_value_sets.md

There are no additional value sets developed for the [MCC Medication Request](StructureDefinition-MCCMedicationRequest.html) profile beyond the [Medication Clinical Drug](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1010.4/expansion) value set inherited from US Core. We did not want to limit the retrieval or communication of medications that patients with multiple chronic conditions may be taking.

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_must-support.md

The MCC IG is built on the premise that the US Core IG is implemented on conformant servers. As such, where the MCC IG does not additionally constrain a US Core profile, the US Core definition of Must Support and Missing Data SHOULD be followed [http://hl7.org/fhir/us/core/STU6.1/must-support.html](http://hl7.org/fhir/us/core/STU6.1/must-support.html).  In addtion, where MCC constrains a profile the [US Core definition of Must Support and Missing Data](http://hl7.org/fhir/us/core/STU6.1/must-support.html#must-support-elements) applies.

To clarify, in the context of MCC, Support, implementations are expected to 

+ be capable of including supported data elements as part of the query results specified by the MCC conformance resources.
+ interpret missing, supported data elements within resource instances as data not present in the Responder’s systems (or the requestor is unauthorized).
+ apply the US Core guidance for [Must Support and Missing Data](http://hl7.org/fhir/us/core/STU6.1/must-support.html#must-support-elements) to all MCC Profiles and data elements where Must Support or Missing data requirements are made, in addition to any that US Core Profiles specify.

For example, a staff scheduling system may not have the technical capability to collect and store patient-specific care planning data and therefore is not expected to respond with patient-specific care planning data when queried.

When information on a particular data element is not present, and the reason for its absence is unknown, MCC Responders SHALL NOT include the data elements in the resource instance returned as part of the query results. Conversely, MCC Requestors SHALL be able to process resource instances containing data elements asserting missing information.


---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_observation_sdoh_assessment_value_sets.md

This table holds the value sets that may be used with the [MCC Observation SDOH Assessment Profile](StructureDefinition-MCCObservationSDOHAssessment.html). 
In general, these value sets represent simple social determinants of health questions that may have answers lists that should be used with them and are assocated with the code in LOINC. In some cases the value (answer) at Observation.value may be boolean true | false. They may or may not be part of a larger LOINC panel that could be referred to or from a QuestionnaireResponse profile.

**Table Key**
* **Value Set Name and Link**: All of these value sets are housed in the [NLM Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/welcome). The value set name is a link to the value set. You must have an NLM/UMLS account to access. There is no charge for an account. Note: the first time you click on the value set name link in a given session, there my be a delay in loading and you will need to sign in once loaded.
* **Value Set Clinical Focus**: The Value Set Clinical Focus is the same as the clinical focus as written in VSAC which is a free text statement describing the general context of the concepts in the set.
* **OID**: The Object Identifier (OID) of the set. OIDs of value sets are unique, whereas the names may not be. If accessing the value set outside of this table link, it is safest to perform that search with the OID
* **Profile Element**: The Profile element asserts the location within the profile the value set term **SHALL** be used.

**MCC Value Sets Use and Validation**
The value sets in the MCC Value Set Library pages are not bound within any profile. As a result "automatic" validation (confirmation) that a code sent in an instance is a member of that value set will not occurr. Validation support can be added in implementation. 
These several different purposes and no clinically appropriate use is precluded: 
* Querying for patients that have experienced particular symptoms
* Within Quality Measures or for research using [Clinical Quality Language (CQL)](http://cql.hl7.org/) (for example)
* For display within applications
* Terminology validation support

**Accessing Value Sets using FHIR Value Set Resource**
* To fetch the FHIR ValueSet resource (in other words, the value set definition) use:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID] 
* To fetch the FHIR ValueSet resource expansion use the FHIR $expand operation:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]/$expand 

For more information refer to the  [FHIR Terminology Service for VSAC Resources](https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html#:~:text=The%20FHIR%20Terminology%20Service%20for,included%20in%20the%20value%20sets.)

<table border="1" cellspacing="0" style="width:100.0%">
    <tbody>
        <tr>
            <td style="background-color:#d9e2f3; border-color:#cccccc; height:15.0pt; width:116.75pt">
                <p><strong>Value Set Name and VSAC Link</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:#cccccc; height:15.0pt; width:132.7pt">
                <p><strong>Value Set Clinical Focus</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:#cccccc; height:15.0pt; width:153.55pt">
                <p><strong>OID</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:#cccccc; height:15.0pt; width:64.9pt">
                <p><strong>Profile Element</strong></p>
            </td>
        </tr>
        <tr>
            <td style="background-color:white; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1058/expansion">Caregiver Availability</a></p>
            </td>
            <td style="background-color:white; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of caregiver availability.</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1058</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1057/expansion">Caregiver Characteristics</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of caregiver characteristics.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1057</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1082/expansion">Criminal Justice Involvement or Incarceration History</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of criminal justice involvement or incarceration history.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1082</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1048/expansion">Current or Former Occupation</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of current or former occupation.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1048</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1065/expansion">Dependents in Home</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of the number of dependents in home.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1065</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="border-color:#cccccc; height:41.25pt; vertical-align:top; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1030/expansion">English Proficiency</a></p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:132.7pt">
                <p>This set of values addresses terms representing an observation of English proficiency.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1030</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1080/expansion">Experiences of Discrimination</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing questions intended to capture experiences of discrimination.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1080</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:white; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1075/expansion">Exposure to Environmental Hazards</a></p>
            </td>
            <td style="background-color:white; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of exposure to environmental hazards.</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1075</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1083/expansion">Immigration Status</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of immigration status or citizenship.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1083</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:white; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1053/expansion">Income Level</a></p>
            </td>
            <td style="background-color:white; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing questions intended to capture observations of individual or household income level.</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1053</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1069/expansion">Leisure Activity Engagement</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of engagement in leisure activities.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1069</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1060/expansion">Living Situation</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing questions about living situations/living arrangements.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1060</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:white; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1064/expansion">Marital or Spousal Status</a></p>
            </td>
            <td style="background-color:white; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of marital or spousal status.</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1064</p>
            </td>
            <td style="background-color:white; height:41.25pt; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:27.75pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1042/expansion">Neglect</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:27.75pt; width:132.7pt">
                <p>This set of values addresses terms representing an observation of neglect.</p>
            </td>
            <td style="background-color:#fcfdfd; height:27.75pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1042</p>
            </td>
            <td style="height:27.75pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1068/expansion">Physical Activity Level</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values addresses terms representing questions about physical activity level.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1068</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1076/expansion">Unsafe Neighborhood</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values contains terms representing Questions about neighborhood safety.</p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1076</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
        <tr>
            <td style="background-color:#fcfdfd; border-color:#cccccc; height:41.25pt; width:116.75pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1050/expansion">Work Productivity</a></p>
            </td>
            <td style="background-color:#fcfdfd; height:41.25pt; width:132.7pt">
                <p>This set of values represent question terms about work productivity.</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:153.55pt">
                <p>2.16.840.1.113762.1.4.1222.1050</p>
            </td>
            <td style="height:41.25pt; vertical-align:top; width:64.9pt">
                <p>Observation.code</p>
            </td>
        </tr>
    </tbody>
</table>

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_procedure_and_service_request_value_sets.md

There are no additional value sets developed for the [MCC Procedure](StructureDefinition-MCCProcedure.html) profile or the [MCC Service Request](StructureDefinition-MCCServiceRequest.html) profile beyond the value sets derived from the [US Core Procedure](http://hl7.org/fhir/us/core/STU6.1/ValueSet-us-core-procedure-code.html#root) profile. The value sets defined by the Gravity project for use with US Core are described and linked in the table below. Procedure and Service Request encoded concepts are typically interchangeable, but there may be some nuanced differences, and so Gravity has created two similar sets.

This table holds the value sets that may be used with the [MCC Procedure](StructureDefinition-MCCProcedure.html) profile or the [MCC Service Request](StructureDefinition-MCCServiceRequest.html). 

**Table Key**
* **Value Set Name and Link**: All of these value sets are housed in the [NLM Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/welcome). The value set name is a link to the value set. You must have an NLM/UMLS account to access. There is no charge for an account. Note: the first time you click on the value set name link in a given session, there my be a delay in loading and you will need to sign in once loaded.
* **Value Set Clinical Focus**: The Value Set Clinical Focus is the same as the clinical focus as written in VSAC which is a free text statement describing the general context of the concepts in the set.
* **OID**: The Object Identifier (OID) of the set. OIDs of value sets are unique, whereas the names may not be. If accessing the value set outside of this table link, it is safest to perform that search with the OID
* **Profile Element**: The Profile element asserts the location within the profile the value set term **SHALL** be used.

**MCC Value Sets Use and Validation**
The value sets in the MCC Value Set Library pages are not bound within any profile. As a result "automatic" validation (confirmation) that a code sent in an instance is a member of that value set will not occurr. Validation support can be added in implmentation. These Symptom Value Sets may be used for several different purposes and no clinically appropriate use is precluded: 
* Querying for patients that have experienced particular conditions or diagnoses
* Within Quality Measures or for research using [Clinical Quality Language (CQL)](http://cql.hl7.org/) (for example)
* For display within applications
* Terminology validation support

**Accessing Value Sets using FHIR Value Set Resource**
* To fetch the FHIR ValueSet resource (in other words, the value set definition) use:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID] 
* To fetch the FHIR ValueSet resource expansion use the FHIR $expand operation:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]/$expand 

For more information refer to the [FHIR Terminology Service for VSAC Resources](https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html#:~:text=The%20FHIR%20Terminology%20Service%20for,included%20in%20the%20value%20sets.)


The Gravity sets are grouped sets made up many contained value sets. The value sets may be used individually or as an entire set depending on the context and need.

### MCC Procedure Value Sets
<table border="1" cellspacing="0" style="width:100.0%">
    <tbody>
        <tr>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:139.25pt">
                <p><strong>Value Set Name and VSAC Link</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:287.85pt">
                <p><strong>Value Set Clinical Focus</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:2.25in">
                <p><strong>OID</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:1.25in">
                <p><strong>Profile Element</strong></p>
            </td>
        </tr>
        <tr>
            <td style="border-color:black; height:15.0pt; vertical-align:top; width:139.25pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.789/expansion">Social Determinants of Health Procedures</a></p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:287.85pt">
                <p>The value sets in this group represent domain-specific interventions identified by the Gravity Project to document services delivered across the clinical and social care ecosystem (including clinical settings, community-based organizations, departments of health and housing, designated agencies, educational settings, etc.). This value set will continue to be refined to contain specific procedures typically performed by clinical and social care partners in response to a service request. Many social care partners document procedures in compliance with their own data requirements and taxonomies (e.g., 211 LA, Homeless Management Information System, etc.). Although the SDOH ServiceRequest value sets and SDOH Procedure value sets are currently identical, they will diverge as value set development continues under the Gravity governance process.</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:2.25in">
                <p>2.16.840.1.113762.1.4.1196.789</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:1.25in">
                <p>Procedure.code</p>
            </td>
        </tr>
    </tbody>
</table>

### MCC Service Request Value Set
<table border="1" cellspacing="0" style="width:100.0%">
    <tbody>
        <tr>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:139.25pt">
                <p><strong>Value Set Name and VSAC Link</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:256.35pt">
                <p><strong>Value Set Clinical Focus</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:2.25in">
                <p><strong>OID</strong></p>
            </td>
            <td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:112.5pt">
                <p><strong>Profile Element</strong></p>
            </td>
        </tr>
        <tr>
            <td style="border-color:black; height:15.0pt; vertical-align:top; width:139.25pt">
                <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1196.790/expansion">Social Determinants of Health Service Requests</a></p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:256.35pt">
                <p>The value sets in this group represent all of the individual domain interventions identified by the Gravity Project that can be used to request services from partners in the clinical and social care ecosystem (including clinical specialists such as community health workers, social workers and dieticians, and community partners such as community-based organizations, departments of education, health and housing, libraries, etc.). This value set will continue to be refined to contain the more general higher-level concepts that typically comprise referrals for services. Clinical and social care partners will typically fulfill the service requests by performing activities (procedures) at a much more detailed level. Currently, the ServiceRequest and Procedure SDOH value sets are identical, but they will diverge in the near future to reflect these differences as they mature and consensus is reached through the Gravity governance process.</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:2.25in">
                <p>2.16.840.1.113762.1.4.1196.790</p>
            </td>
            <td style="height:15.0pt; vertical-align:top; width:112.5pt">
                <p>ServiceRequest.code</p>
            </td>
        </tr>
    </tbody>
</table>

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_questionnaire_response_value_sets.md

This draft of the IG recommends the use of the NIH, [Lister Hill Center (LHC) FHIR Tools ](https://lhcforms.nlm.nih.gov/ ) for Structured Data Capture (SDC) Questionnaire/QuestionnaireResponse in implementations of the MCC eCare Plan. The [The LHC-Forms widget](https://lhcforms.nlm.nih.gov/) supports both actual generation of forms for user interfaces and the generation of the conformant FHIR R4 Questionnaire/QuestionnaireResponse resource instances. Other tooling or methods are not precluded. The only difference between the QuestionnaireResponse in the form JSON generator and the MCC QuestionnaireResponse is the addition of the Resource_pertains to Goal extension in the MCC version. 

The value sets in the table below contain LOINC Panel codes pertaining to questionnaire panels of importance to chronic disease management.
It is assumed that questionnaires will be completed in the original EHR or other health IT system or application, and the QuestionnaireResponses will be imported into this aggregated FHIR Care Plan associated with the relevent observation, condition, goal etc. It is expected that the LOINC panel codes in the value sets can be used to find questionnaires a given patient has completed, or to find patients that have completed questionnaires. The codes may also be used to generate questionnaire forms and conformant FHIR Questionnaire and QuestionnaireResponse Resources using the NIH LHC Forms Widget.
FHIR QuestionnaireResponses do not contain the high-level panel LOINC codes, only the contained question codes. However, the QuestionnaireResponse must contain a reference back to the Questionnaire upon which it is based.
This IG does not constrain [FHIR Questionairre Resource](http://hl7.org/fhir/R4/questionnaire.html), but expects it will be used as technically required to properly convey and communicate the Questionnaire/QuestionnaireResponse relationship.

**Table Key**
* **Value Set Name and Link**: All of these value sets are housed in the [NLM Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/welcome). The value set name is a link to the value set. You must have an NLM/UMLS account to access. There is no charge for an account. Note: the first time you click on the value set name link in a given session, there my be a delay in loading and you will need to sign in once loaded.
* **Value Set Clinical Focus**: The Value Set Clinical Focus is the same as the clinical focus as written in VSAC which is a free text statement describing the general context of the concepts in the set.
* **OID**: The Object Identifier (OID) of the set. OIDs of value sets are unique, whereas the names may not be. If accessing the value set outside of this table link, it is safest to perform that search with the OID
* **Profile Element**: The Profile element asserts the location within the profile the value set term **SHALL** be used. In this table, the appropriate profile element is listed as Questionnaire.code in the [FHIR Questionairre Resource](http://hl7.org/fhir/R4/questionnaire.html)
* **LHC LOINC Form examples**: Contains links to the LHC forms widget leveraged by LOINC and associated with each LOINC panel code in the value set. This presents a rendering of the Questionnaire form, the panel code and contained questions and all posssible answers. In order to use or view the LHC form widget and the panels FHIR Conformant Questionnaire and QuestionnaireResponse instance example visit [LHC Forms](https://lhcforms.nlm.nih.gov/lhcforms) and enter the LOINC panel code and the lower left of the screen under, "Search LOINC panels". Select the panel and the form is rendered. Select "Show Form Data As..." and choose to show the FHIR SDC Questionnaire or the FHIR SDC QuestionnaireResponse in JSON instance examples.

The codes in the value sets below should be able to retrieve [MCC QuestionnaireResponses](StructureDefinition-MCCQuestionnaireResponse.html) associated with its [FHIR Questionairre Resource](http://hl7.org/fhir/R4/questionnaire.html).

<table border="1" cellspacing="0" style="width:100.0%">
	<tbody>
		<tr>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:91.15pt">
			<p><strong>Value Set Name and VSAC Link</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:116.25pt">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:95.25pt">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:137.9pt">
			<p><strong>QuestionnaireResource Element </strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:247.65pt">
			<p><strong>LHC LOINC Form examples</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1585/expansion">Alcohol Use Related Questionnaire Panel Codes</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to Alcohol Use.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1585</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/72109-2">Alcohol Use Disorder Identification Test - Consumption [AUDIT-C]</a></p>
			<p><a href="https://forms.loinc.org/77003-2">PROMIS short form - alcohol - alcohol use 7a - version 1.0</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.828/expansion">Balance Assessments</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values addresses terms representing Balance Assessments.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.828</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/64388-2">PhenX - balance protocol 170801</a></p>
			<p><a href="https://forms.loinc.org/83142-0">Standing Balance Test [NIH Toolbox]</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1594/expansion">Caregiver Considerations Related Questionnaire Panel Codes</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to Caregiver Considerations Related Questionnaire Panel Codes.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1594</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/87704-3">Caregiver Patient Activation Measure - 10 [PAM] Caregiver</a></p>
			<p><a href="https://forms.loinc.org/87703-5">Caregiver Patient Activation Measure - 13 [PAM] Caregiver</a></p>
			<p><a href="https://forms.loinc.org/96447-8">WE CARE Survey [WE CARE] Caregiver</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1584/expansion">Cognitive Health Related Questionnaire Panel Codes</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to cognitive health questionnaire panels.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1584</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/71130-9">Cognitive Functioning [FACIT]</a></p>
			<p><a href="https://forms.loinc.org/79115-2">General Practitioner Assessment of Cognition [GPCOG] </a></p>
			<p><a href="https://forms.loinc.org/72133-2">Montreal Cognitive Assessment [MoCA]</a></p>
			<p><a href="https://forms.loinc.org/70785-1">Perceived cognitive abilities [FACIT]</a></p>
			<p><a href="https://forms.loinc.org/70849-5">Perceived cognitive impairments [FACIT]</a></p>
			<p><a href="https://forms.loinc.org/81492-1">PROMIS item bank - cognitive function - abilities subset - version 2.0</a></p>
			<p><a href="https://forms.loinc.org/81525-8">PROMIS short form - cognitive function - abilities subset 4a - version 2.0 </a></p>
			<p><a href="https://forms.loinc.org/81526-6">PROMIS short form - cognitive function - abilities subset 6a - version 2.0</a></p>
			<p><a href="https://forms.loinc.org/81527-4">PROMIS short form - cognitive function - abilities subset 8a - version 2.0</a></p>
			<p><a href="https://forms.loinc.org/81528-2">PROMIS short form - cognitive function 4a - version 2.0</a></p>
			<p><a href="https://forms.loinc.org/81529-0">PROMIS short form - cognitive function 6a - version 2.0</a></p>
			<p><a href="https://forms.loinc.org/81530-8">PROMIS short form - cognitive function 8a - version 2.0</a><a href="https://forms.loinc.org/71946-8">Short Informant Questionnaire on Cognitive Decline in the Elderly [IQCODE]</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1593/expansion">Covid 19 Related Health Questionnaire Panel Codes</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to Covid 19 Related Health Questionnaire Panel Codes</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1593</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/96892-5">COVID-19 participant experience survey</a></p>
			<p><a href="https://forms.loinc.org/97096-2">COVID-19 experiences - media use panel [COVEX]</a></p>
			<p><a href="https://forms.loinc.org/97123-4">COVID-19 experiences - employment and school changes panel [COVEX]</a></p>
			<p><a href="https://forms.loinc.org/97147-3">COVID-19 experiences - coping panel [COVEX]</a></p>
			<p><a href="https://forms.loinc.org/98071-4">Post COVID-19 functional status scale [PCFS]</a></p>
			<p><a href="https://forms.loinc.org/98871-7">COVID-19 comorbidity and healthcare questionnaire</a></p>
			<p><a href="https://forms.loinc.org/98889-9">COVID-19 related household finances</a></p>
			<p><a href="https://forms.loinc.org/99357-6">COVID-19 health questions panel</a></p>
			<p><a href="https://forms.loinc.org/99673-6">COVID-19 Knowledge, Attitudes, and Avoidant Behaviors panel</a></p>
			</td>
		</tr>
				<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1598/expansion">Criminal Justice Involvement or Incarceration History</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to criminal justice involvement or incarceration in the past year.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1598</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/62940-2">PhenX - crime and delinquency - adult protocol 181202</a></p>
			<p><a href="https://forms.loinc.org/62939-4">PhenX - crime and delinquency - adolescent protocol 181201</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.582/expansion">Framingham Risk Assessments</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values addresses terms representing Panel code(S) for Framingham Risk Assessments.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.582</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/66336-9">Framingham Risk Assessments Framingham</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1586/expansion">Functional Status Related Questionnaire Panel Codes</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to functional status questionnaire panels.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1586</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/61587-2">PROMIS item bank - physical function - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/62199-5">PROMIS short form - physical function 10a - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/76700-4">PROMIS short form - physical function 4a - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/76702-0">PROMIS short form - physical function 20a - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/76804-4">PROMIS short form - physical function 6b - version 1.2</a></p>
			<p><a href="https://forms.loinc.org/76805-1">PROMIS short form - physical function 8b - version 1.2 </a></p>
			<p><a href="https://forms.loinc.org/79062-6">PROMIS item bank - physical function w mobility aids - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/79063-4">PROMIS short form - physical function w mobility aids - version 1.0</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1587/expansion">Kidney Disease Related Questionnaire Panel Codes</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to kidney disease questionnaire panels.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1587</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/85597-3">Renal replacement therapy goals panel NKDEP</a></p>
			<p><a href="https://forms.loinc.org/85626-0">Kidney failure 2-year and 5-year risk panel by KFRE</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1588/expansion">Long Covid Related Questionnaire Panel Codes</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to Long Covid questionnaire panels</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1588</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/69737-5">Generalized anxiety disorder 7 item (GAD-7)</a></p>
			<p><a href="https://forms.loinc.org/70221-7">Post traumatic stress disorder (PTSD) checklist - civilian version [PCL-C]</a></p>
			<p><a href="https://forms.loinc.org/90568-7">Polysomnography panel</a></p>
			<p><a href="https://forms.loinc.org/98071-4">Post COVID-19 functional status scale [PCFS]</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1589/expansion">Nutrition Status Related Questionnaire Panel Codes</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to nutrition status questionnaire panels.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1589</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/62282-9">PhenX - dietary supplements protocol 050501</a></p>
			<p><a href="https://forms.loinc.org/75282-4">Nutrition assessment panel</a></p>
			<p><a href="https://forms.loinc.org/75304-6">Nutrition status observation panel</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1590/expansion">Pain Perception Related Questionnaire Panel Codes</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to pain perception questionnaire panels.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1590</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/38212-7">Pain assessment panel</a></p>
			<p><a href="https://forms.loinc.org/61753-0">PROMIS item bank - pain interference - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/62193-8">PROMIS short form - pain interference 6b - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/62194-6">PROMIS short form - pain behavior 7a - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/62212-6">PROMIS item bank - pain behavior - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/75259-2">PROMIS short form - pain intensity 3a - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/75870-6">PROMIS short form - pain interference 8a - version 1.0</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1591/expansion">Patient Goal Related Questionnaire Panel Codes</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values contain LOINC Panel codes pertaining to patient goal questionnaire panels.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1591</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/86922-2">Therapeutic goals panel</a></p>
			<p><a href="https://forms.loinc.org/87533-6">Chronic kidney disease management personal goals panel</a></p>
			<p><a href="https://forms.loinc.org/92562-8">Physical therapy goals panel</a></p>
			<p><a href="https://forms.loinc.org/85597-3">Renal replacement therapy goals panel NKDEP</a></p>
			<p><a href="https://forms.loinc.org/87533-6">Chronic kidney disease management personal goals panel</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1572/expansion">Sleep Disorder Assessment</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
			<p>This set of values addresses terms representing patient-reported Sleep Disorder Assessment.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
			<p>2.16.840.1.113762.1.4.1222.1572</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/61982-5">PROMIS item bank - sleep disturbance - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/62010-4">PROMIS item bank - sleep related impairment - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/62197-9">PROMIS short form - sleep disturbance 8b - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/62198-7">PROMIS short form - sleep impairment 8a - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/62742-2">PhenX - sleep disorders screener protocol 121001</a></p>
			<p><a href="https://forms.loinc.org/67898-7">Neuro-Qol item bank - sleep disturbance - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/75258-4">PROMIS short form - sleep disturbance 4a - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/76703-8">PROMIS short form - sleep disturbance 6a - version 1.0</a></p>
			<p><a href="https://forms.loinc.org/97890-8">Sleep panel [R-Outcomes]</a></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:91.15pt">
				<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1247.126/expansion">Social Determinants of Health Screening Assessments</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:116.25pt">
				<p>This set of values represents screening assessments for all SDOH domains as selected by the Gravity Project.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:95.25pt">
				<p>2.16.840.1.113762.1.4.1247.126</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:137.9pt">
			<p>Questionnaire.code</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:247.65pt">
			<p><a href="https://forms.loinc.org/62337-1">PROMIS item bank - 29 profile</a></p>
			<p><a href="https://forms.loinc.org/62509-5">PhenX - substance - 30D frequency protocol 031301</a></p>
			<p><a href="https://forms.loinc.org/62842-0">PhenX - physical activity - neighborhood environment protocol 151201</a></p>
			<p><a href="https://forms.loinc.org/62918-8">PhenX - current quality of life protocol 180301</a></p>
			<p><a href="https://forms.loinc.org/62929-5">PhenX - perceived social support - conflict protocol 180701</a></p>
			<p><a href="https://forms.loinc.org/62933-7">PhenX - social isolation protocol 181001</a></p>
			<p><a href="https://forms.loinc.org/62942-8">PhenX - chronic stress protocol 181301</a></p>
			<p><a href="https://forms.loinc.org/63015-2">PhenX - discrimination protocol 210301</a></p>
			<p><a href="https://forms.loinc.org/63028-5">PhenX - neighborhood safety protocol 210901</a></p>
			<p><a href="https://forms.loinc.org/63036-8">PhenX - neighborhood concentrated disadvantage protocol 211301</a></p>
			<p><a href="https://forms.loinc.org/63058-2">PhenX - annual family income protocol 011101</a></p>
			<p><a href="https://forms.loinc.org/70499-9">Social - family well-being [FACIT]</a></p>
			<p><a href="https://forms.loinc.org/70693-7">Relationships [FACIT]</a></p>
			<p><a href="https://forms.loinc.org/71141-6">Social - family well-being - FAMS [FACIT]</a></p>
			<p><a href="https://forms.loinc.org/76506-5">Social connection and isolation panel</a></p>
			<p><a href="https://forms.loinc.org/76789-7">PROMIS item bank - emotional support - version 2.0</a></p>
			<p><a href="https://forms.loinc.org/76791-3">PROMIS item bank - instrumental support - version 2.0</a></p>
			<p><a href="https://forms.loinc.org/76806-9">PROMIS item bank - social isolation - version 2.0</a></p>
			<p><a href="https://forms.loinc.org/85524-7">PROMIS short form - global - version 1.2</a></p>
			</td>
		</tr>
	</tbody>
</table>

---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_simple_observation_value_sets.md

This table holds the value sets that may be used with the [MCC Simple Observation Profile](StructureDefinition-MCCSimpleObservation.html). 

**Table Key**
* **Value Set Name and Link**: All of these value sets are housed in the [NLM Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/welcome). The value set name is a link to the value set. You must have an NLM/UMLS account to access. There is no charge for an account. Note: the first time you click on the value set name link in a given session, there my be a delay in loading and you will need to sign in once loaded.
* **Value Set Clinical Focus**: The Value Set Clinical Focus is the same as the clinical focus as written in VSAC which is a free text statement describing the general context of the concepts in the set.
* **OID**: The Object Identifier (OID) of the set. OIDs of value sets are unique, whereas the names may not be. If accessing the value set outside of this table link, it is safest to perform that search with the OID
* **Profile Element**: The Profile element asserts the location within the profile the value set term **SHALL** be used.

**MCC Value Sets Use and Validation**
The value sets in the MCC Value Set Library pages are not bound within any profile. As a result "automatic" validation (confirmation) that a code sent in an instance is a member of that value set will not occurr. Validation support can be added in implmentation. These Symptom Value Sets may be used for several different purposes and no clinically appropriate use is precluded: 
* Querying for patients that have experienced particular symptoms
* Within Quality Measures or for research using [Clinical Quality Language (CQL)](http://cql.hl7.org/) (for example)
* For display within applications
* Terminology validation support

**Accessing Value Sets using FHIR Value Set Resource**
* To fetch the FHIR ValueSet resource (in other words, the value set definition) use:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID] 
* To fetch the FHIR ValueSet resource expansion use the FHIR $expand operation:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]/$expand 

For more information refer to the  [FHIR Terminology Service for VSAC Resources](https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html#:~:text=The%20FHIR%20Terminology%20Service%20for,included%20in%20the%20value%20sets.)

<table border="1" cellspacing="0" style="width:100.0%">
	<tbody>
		<tr>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:131.25pt">
			<p><strong>Value Set Name and VSAC Link</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:154.5pt">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:87.0pt">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d9e2f3; border-color:black; height:15.75pt; width:94.5pt">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.583/expansion">American College of Cardiology or American Heart Association Ascvd Risk Score (acc/aha Ascvd Risk)</a></p>
			</td>
			<td style="background-color:white; height:30.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation for American College of Cardiology/American Heart Association ASCVD risk score (ACC/AHA ASCVD risk)</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.583</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-color:black; height:30.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.954/expansion">Bathing or grooming/hygiene (ADL/IADL)</a></p>
			</td>
			<td style="background-color:white; height:30.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of bathing/grooming/hygiene (ADL/IADL) ability.</p>
			</td>
			<td style="background-color:white; height:30.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.954</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.962/expansion">Bed Mobility (ADL or IADL)</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of bed mobility (ADL/IADL).</p>
			</td>
			<td style="background-color:white; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.962</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.822/expansion">Bowel Sounds</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of Bowel sounds</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.822</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1026/expansion">Carbohydrate Intake</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of carbohydrate intake.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1026</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.979/expansion">Cognitive Function Clinician Interpretation</a></p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing a clinical interpretation of a patient&#39;s cognitive function.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.979</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:30.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.960/expansion">Domestic Duties or Household Tasks (ADL/IADL)</a></p>
			</td>
			<td style="background-color:white; height:30.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of domestic duties/household tasks (ADL/IADL) ability.</p>
			</td>
			<td style="background-color:#fcfdfd; height:30.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.960</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.955/expansion">Dressing (ADL or IADL)</a></p>
			</td>
			<td style="background-color:white; height:30.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of dressing (ADL/IADL) ability.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.955</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:30.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1229/expansion">Education Level SCT</a></p>
			</td>
			<td style="background-color:#fcfdfd; height:30.0pt; width:154.5pt">
			<p>This set of values addresses terms representing Education Level.</p>
			</td>
			<td style="background-color:#fcfdfd; height:30.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1229</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.711/expansion">Fall Risk</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation indicating fall risk.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.711</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:30.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1023/expansion">Fat Intake</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of fat intake.</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1023</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1022/expansion">Fluid Management</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of fluid management.</p>
			</td>
			<td style="background-color:white; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1022</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1029/expansion">Fruit Intake</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of fruit intake.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1029</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-color:black; height:30.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.826/expansion">Gait Quality</a></p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing observation of quality and speed of gait, including the amount of time it takes the person to walk a set distance.</p>
			</td>
			<td style="background-color:white; height:30.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.826</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-color:black; height:30.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1203/expansion">Medication Literacy</a></p>
			</td>
			<td style="background-color:white; height:30.0pt; width:154.5pt">
			<p>This set of values addresses terms representing Medication Literacy.</p>
			</td>
			<td style="background-color:white; height:30.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1203</p>
			</td>
			<td style="height:30.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.964/expansion">Medication Management (ADL or IADL)</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of medication management (ADL/IADL) ability.</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.964</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.996/expansion">Pain Intensity or Severity</a></p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of pain intensity or severity.</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.996</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.997/expansion">Pain Quality</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of pain quality.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.997</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.978/expansion">Physical Activity Level, Device</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of physical activity level measured by a device.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.978</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1569/expansion">Physical findings of the abdomen</a></p>
			</td>
			<td style="background-color:#f8f8f8; height:15.0pt; width:154.5pt">
			<p>This set of values addresses concepts for the assessment of the patient&#39;s abdomen.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1569</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.987/expansion">Psychosis Symptoms</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of psychosis symptoms.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.987</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1027/expansion">Salt Intake</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of salt intake.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1027</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1025/expansion">Saturated Fat Intake</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of saturated fat intake.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1025</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1020/expansion">Screen Time</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of a person&#39;s screen time</p>
			</td>
			<td style="background-color:white; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1020</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1005/expansion">Sexual Satisfaction</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of reported sexual satisfaction.</p>
			</td>
			<td style="background-color:white; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1005</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.836/expansion">Sit to Stand Ability</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of sit-to-stand ability.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.836</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1197/expansion">Sleep Behavior</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of sleep behaviors.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1197</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.994/expansion">Sleep Duration</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing Sleep Duration.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.994</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.976/expansion">Sleep Duration, Device</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of sleep duration measured by a device.</p>
			</td>
			<td style="background-color:white; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.976</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.963/expansion">Stair Use (ADL or IADL)</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of stair use (ADL/IADL) ability.</p>
			</td>
			<td style="background-color:white; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.963</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.977/expansion">Steps Per Time, Device</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of steps per time measured by a device.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.977</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1015/expansion">Substance Use</a></p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of reported substance use.</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1015</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.991/expansion">Suicidal Ideation and Behaviors</a></p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:154.5pt">
			<p>This set of values contains terms representing questions about suicidal ideation and behaviors.</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.991</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.961/expansion">Telephone Use (ADL or IADL)</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of telephone use (ADL/IADL) ability.</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.961</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1016/expansion">Tobacco Use</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of a person&#39;s tobacco use</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1016</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.956/expansion">Toileting (ADL or IADL)</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of toileting (ADL/IADL) ability.</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.956</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:white; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.957/expansion">Transferring (ADL or IADL)</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of transferring (ADL/IADL) ability.</p>
			</td>
			<td style="background-color:white; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.957</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1024/expansion">Unsaturated Fat Intake</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of unsaturated fat intake.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1024</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:black; height:15.0pt; vertical-align:top; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1028/expansion">Vegetable Intake</a></p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:154.5pt">
			<p>This set of values addresses terms representing an observation of vegetable intake.</p>
			</td>
			<td style="height:15.0pt; vertical-align:top; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.1028</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
		<tr>
			<td style="background-color:#fcfdfd; border-color:black; height:15.0pt; width:131.25pt">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.958/expansion">Walking or ambulation/locomotion (ADL/IADL)</a></p>
			</td>
			<td style="background-color:white; height:15.0pt; width:154.5pt">
			<p>This set of values addresses terms representing an observation of walking/ambulation/locomotion (ADL/IADL) ability.</p>
			</td>
			<td style="background-color:#fcfdfd; height:15.0pt; width:87.0pt">
			<p>2.16.840.1.113762.1.4.1222.958</p>
			</td>
			<td style="height:15.0pt; vertical-align:bottom; width:94.5pt">
			<p>Observation.code</p>
			</td>
		</tr>
	</tbody>
</table>


---

File: repos/HL7_SLASH_fhir-us-mcc/input/pagecontent/mcc_symptom_value_sets.md

This table holds the value sets that may be used with the [MCC Symptom Observation Profile](StructureDefinition-MCCSymptomObservation.html). 

**Table Key**
* **Value Set Name and Link**: All of these value sets are housed in the [NLM Value Set Authority Center (VSAC)](https://vsac.nlm.nih.gov/welcome). The value set name is a link to the value set. You must have an NLM/UMLS account to access. There is no charge for an account. Note: the first time you click on the value set name link in a given session, there my be a delay in loading and you will need to sign in once loaded.
* **Value Set Clinical Focus**: The Value Set Clinical Focus is the same as the clinical focus as written in VSAC which is a free text statement describing the general context of the concepts in the set.
* **OID**: The Object Identifier (OID) of the set. OIDs of value sets are unique, whereas the names may not be. If accessing the value set outside of this table link, it is safest to perform that search with the OID
* **Profile Element**: The Profile element asserts the location within the profile the value set term **SHALL** be used.

**MCC Value Sets Use and Validation**
The value sets in the MCC Value Set Library pages are not bound within any profile. As a result "automatic" validation (confirmation) that a code sent in an instance is a member of that value set will not occurr. Validation support can be added in implmentation. These Symptom Value Sets may be used for several different purposes and no clinically appropriate use is precluded: 
* Querying for patients that have experienced particular symptoms
* Within Quality Measures or for research using [Clinical Quality Language (CQL)](http://cql.hl7.org/) (for example)
* For display within applications
* Terminology validation support

**Accessing Value Sets using FHIR Value Set Resource**
* To fetch the FHIR ValueSet resource (in other words, the value set definition) use:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID] 
* To fetch the FHIR ValueSet resource expansion use the FHIR $expand operation:
 * GET https://cts.nlm.nih.gov/fhir/ValueSet/[VSAC OID]/$expand 

For more information refer to the  [FHIR Terminology Service for VSAC Resources](https://www.nlm.nih.gov/vsac/support/usingvsac/vsacfhirapi.html#:~:text=The%20FHIR%20Terminology%20Service%20for,included%20in%20the%20value%20sets.)

<table border="1" cellspacing="0" style="width:100.0%">
	<tbody>
		<tr>
			<td style="background-color:#d9e2f3; border-color:black; height:13.0pt; width:11%">
			<p><strong>Value Set Name and VSAC Link</strong></p>
			</td>
			<td style="background-color:#d9e2f3; height:13.0pt; width:32%">
			<p><strong>Value Set Clinical Focus</strong></p>
			</td>
			<td style="background-color:#d9e2f3; height:13.0pt; width:20%">
			<p><strong>OID</strong></p>
			</td>
			<td style="background-color:#d9e2f3; height:13.0pt; width:12%">
			<p><strong>Profile Element</strong></p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:36.5pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1435/expansion/Latest">Abdominal Pain</a></p>
			</td>
			<td style="height:36.5pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing abdominal pain between the chest and pelvic regions.</p>
			</td>
			<td style="height:36.5pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1435</p>
			</td>
			<td style="height:36.5pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1380/expansion/Latest">Anxiety</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with anxiety symptoms such as the sense of uneasiness, distress, or dread.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1380</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1425/expansion/Latest">Arthralgia</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing aching or pain in one or more of the joints in the body.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1425</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1492/expansion/Latest">Autonomic dysfunction</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values contains diagnosis and finding terms representing autonomic dysfunction. These patients may experience lightheadedness, orthostatic headache, syncope, hyperhidrosis, burning pain, and other Somatoform autonomic dysfunction.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1492</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1429/expansion/Latest">Back Pain</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing pain in the lower or upper back.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1429</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1434/expansion/Latest">Bleeding</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing loss of blood from the body.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1434</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1377/expansion/Latest">Brain Fog</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect a patient feeling of being sluggish, fuzzy, and not sharp.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1377</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1426/expansion/Latest">Chest Pain</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing discomfort in the chest including a dull ache, a crushing or burning feeling, a sharp stabbing pain, and pain that radiates to the neck or shoulder.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1426</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1399/expansion/Latest">Chills</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with chills, a feeling of being cold without an apparent cause.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1399</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1458/expansion/Latest">Chronic Pain</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing chronic pain that lasts more than several months.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1458</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1440/expansion/Latest">Constipation</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing infrequent bowel movements or difficult passage of stools that persists for several days or weeks.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1440</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1405/expansion/Latest">Cough</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients having cough symptoms.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1405</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			    <p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1446/expansion/Latest">Covid Toes (Toes and/or Fingers)</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing Covid Toes is a condition that develops on your toes, fingers, or both. Along with the swelling and discoloration, COVID toes can also cause blisters, itch, or pain. Some people develop painful raised bumps or areas of rough skin. Others may see a small amount of pus under their skin.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1446</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
				<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
				<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1502/expansion/Latest">Debility or Frailty</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
				<p>This set of values contains finding of Debility or Frailty related terms representing physical weakness, feebleness, or infirmity.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
				<p>2.16.840.1.113762.1.4.1222.1502</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
				<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1378/expansion/Latest">Depression Symptoms</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patient feelings of being depressed due to isolation, loneliness, anxiety and stress.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1378</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1436/expansion/Latest">Diarrhea</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing loose, watery and possibly more frequent bowel movements.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1436</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1441/expansion/Latest">Difficulty Swallowing</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing difficulty swallowing food or liquids.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1441</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1455/expansion/Latest">Disability Severity</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients&#39; disability severity as mild, moderate, severe or profound.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1455</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1451/expansion/Latest">Dizziness</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing dizziness feeling faint or unsteady.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1451</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1406/expansion/Latest">Dyspnea</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing Dyspnea or shortness of breath, an intense tightening in the chest, air hunger, breathlessness, increased respiratory efforts or a feeling of suffocation.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1406</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1415/expansion/Latest">Edema</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing edema, a swelling caused by excess fluid trapped in the body&#39;s tissues.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1415</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1398/expansion/Latest">Fatigue</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with an extreme tiredness or feeling wiped out that persists despite resting or getting a good night&#39;s sleep. This includes physical fatigue such as post-exertional malaise and mental fatigue.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1398</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1400/expansion/Latest">Fever</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with fever, a temporary increase in your body temperature, often due to an illness.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1400</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
				<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
				<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1401/expansion">Functional and Mobility Impairment</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
				<p>This set of values reflect patients with difficulty completing activities of daily living and instrumental activities of daily living. The disability that affects movement ranging from gross motor skills, such as walking, to fine motor movement, involving manipulation of objects by hand..</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
				<p>2.16.840.1.113762.1.4.1222.1401</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
				<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1437/expansion/Latest">Gastroesophageal Reflux</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing gastroesophageal reflux or acid reflux.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1437</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1383/expansion/Latest">Grief and Suffering</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with grief and suffering related symptoms (a natural reaction to loss and a state of pain or distress).</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1383</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1453/expansion/Latest">Hair Loss</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing a loss of hair from part of the head or body.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1453</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1427/expansion/Latest">Headache</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing headache.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1427</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1456/expansion/Latest">Hypercoagulability</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients hypercoagulability state with increased risk for blood clots developing in the arteries and veins. This value set is intended to capture microclots tendency observed in long COVID patients.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1456</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1422/expansion/Latest">Immunologic Changes</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing immunological changes such as increased frequency of infections, increased allergic responses, idiosyncratic responses to medications, fears about response to vaccines or other medications.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1422</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1460/expansion/Latest">Impaired Hearing</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with impaired hearing, a diminished acuity to sounds which would otherwise be heard normally.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1460</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1396/expansion/Latest">Impaired Sense of Smell</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with impaired sense of smell including anosmia, hyposmia, and dysosmia.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1396</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1385/expansion/Latest">Impaired Sense of Taste</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with impaired sense of taste which is a distortion or complete loss of sense of taste.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1385</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1384/expansion/Latest">Insomnia and Other Sleep Difficulties</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with insomnia and other sleep difficulties.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1384</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1447/expansion/Latest">Itching</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing itching, an uncomfortable, irritating sensation that makes you want to scratch.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1447</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1485/expansion/Latest">Language and Speech Problems</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing language problems, a difficulty expressing and understanding what others are saying and speech problems that affect a person&#39;s ability to produce sounds that create words.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1485</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1381/expansion/Latest">Lightheadedness</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with lightheadedness symptoms such as feeling of faintness, dizziness or being close to passing out.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1381</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1443/expansion/Latest">Loss of Appetite</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing loss of appetite or absence of hunger.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1443</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1449/expansion/Latest">Lower Urinary Tract Symptoms</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing lower urinary tract symptoms primarily associated with overactive bladder (frequency, urgency, and nocturia).</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1449</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1448/expansion/Latest">Menstrual Cycle Irregularities</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing menstrual cycle irregularities such as shorter or longer than normal, heavier or lighter than normal, or other problems, like abdominal cramps.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1448</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1379/expansion/Latest">Mood Swings</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with rapidly and intensely fluctuating emotions.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1379</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1428/expansion/Latest">Myalgia</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing muscle aches and pain.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1428</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1438/expansion/Latest">Nausea</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing nausea, a feeling of sickness or discomfort in the stomach that may come with an urge to vomit.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1438</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1459/expansion/Latest">Neurogenic Pain</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing neurogenic pain. This value set is intended to capture neurologic pain observed in long COVID patients.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1459</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1403/expansion/Latest">Orthostatic Intolerance</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing symptoms related to Orthostatic Intolerance such as lightheadedness, dizziness, nausea, and vision changes.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1403</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1424/expansion/Latest">Pain</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing pain, localized or generalized uncomfortable sensations in the body.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1424</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1430/expansion/Latest">Pain in Extremities</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing discomfort sensation in the upper or lower extremities.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1430</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1431/expansion/Latest">Pain in Throat</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflects patients experiencing discomfort or irritation of the throat.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1431</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1432/expansion/Latest">Palpitations</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing feelings of having a fast-beating, fluttering or pounding heart.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1432</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1444/expansion/Latest">Paresthesia</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing an abnormal sensation of the body, such as numbness, tingling, or burning.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1444</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1461/expansion/Latest">Parkinsonia Like Symptoms</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing parkinsonia like symptoms such as tremor, slowed movement (bradykinesia), rigid muscles, impaired posture and balance, loss of automatic movements, speech changes, and writing changes.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1461</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1457/expansion/Latest">Post Exertional Malaise</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing post-exertional malaise.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1457</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1445/expansion/Latest">Rash</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing rash, an area of irritated, swollen skin with eruptions on it.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1445</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1414/expansion/Latest">Respiratory Distress</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing wheezing, dyspnea and other signs of respiratory distress.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1414</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1413/expansion/Latest">Sinonasal Congestion</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing nasal congestion or sinus congestion.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1413</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1382/expansion/Latest">Stress</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with mental Stress related symptoms mainly physical and emotional reactions that people experience as they encounter changes in life.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1382</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1433/expansion/Latest">Tachycardia</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing fast heart beats.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1433</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1375/expansion/Latest">Tinnitus</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with ringing or other noises in one or both ears.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1375</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1450/expansion/Latest">Urinary Incontinence</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing an involuntary leakage of urine from the bladder.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1450</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1395/expansion/Latest">Visual Changes</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients with visual changes such as blurry vision, visual alteration, fatigue and tired eye.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1395</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1439/expansion/Latest">Vomiting</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing vomiting, a forceful discharge of stomach contents.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1439</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1419/expansion/Latest">Weight Changes</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing abnormal weight, weight gain and weight loss.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1419</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
		<tr>
			<td style="border-color:#222222; height:12.75pt; vertical-align:top; width:11%">
			<p><a href="https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1222.1409/expansion/Latest">Wheezing</a></p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:32%">
			<p>This set of values reflect patients experiencing wheezing, a high-pitched whistling sound made while breathing.</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:20%">
			<p>2.16.840.1.113762.1.4.1222.1409</p>
			</td>
			<td style="height:12.75pt; vertical-align:top; width:12%">
			<p>Observation.valueCodableConcept</p>
			</td>
		</tr>
	</tbody>
</table>

---

