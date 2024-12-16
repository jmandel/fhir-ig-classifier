File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/additional Antepartum Observation examples.fsh

Instance: ex-Homelessness
InstanceOf: Homelessness
Usage: #example
Description: "The Example instance for the Homelessness observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueBoolean = false
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-DomesticViolenceRisk
InstanceOf: DomesticViolenceRisk
Usage: #example
Description: "The Example instance for the DomesticViolenceRisk observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueBoolean = false
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-PregnancyEducationObservation
InstanceOf: PregnancyEducationObservation
Usage: #example
Description: "The Example instance for the PregnancyEducationObservation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#54070000
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-DateOfLastMenstralPeriod
InstanceOf: DateOfLastMenstralPeriod
Usage: #example
Description: "The Example instance for the DateOfLastMenstralPeriod observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueDateTime = "2021-06-12"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-DateOfFirstPrenatalVisit
InstanceOf: DateOfFirstPrenatalVisit
Usage: #example
Description: "The Example instance for the DateOfFirstPrenatalVisit observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueDateTime = "2021-08-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-AntepartumLabs
InstanceOf: AntepartumLabs
Usage: #example
Description: "The Example instance for Antepartum Lab results"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* code = $loinc#10331-7
* valueCodeableConcept = $sct#10828004
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-Antepartum-Genetic-Screening
InstanceOf: Antepartum_Genetic_Screening
Usage: #example
Description: "The Example instance for Antepartum Genetic Screening lab results"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* code = $sct#417357006
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez) 

Instance: ex-AntepartumVisitSummaryFlowsheetBattery
InstanceOf: AntepartumVisitSummaryFlowsheetBattery
Usage: #example
Description: "The Example instance for the AntepartumVisitSummaryFlowsheetBattery"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2023-01-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* hasMember[+] = Reference(ex-GestationalAge) 
* hasMember[=] = Reference(ex-FetalBodyWeightPalpation)
* hasMember[=] = Reference(ex-FetalBodyWeightUltrasound)
* hasMember[=] = Reference(ex-UterusFundalHeight)
* hasMember[=] = Reference(ex-FetalPresentationPalpitation)
* hasMember[=] = Reference(ex-FetalPresentationUltrasound)
* hasMember[=] = Reference(ex-FetalHeartRateAuscultation)
* hasMember[=] = Reference(ex-FetalMovementReported)
* hasMember[=] = Reference(ex-bloodpressure-amanda-alvarez)
* hasMember[=] = Reference(ex-vitalSigns-BodyWeight)
* hasMember[=] = Reference(ex-PretermLaborSymptoms)
* hasMember[=] = Reference(ex-CervicalCanalExternalosDiameterUltrasound)
* hasMember[=] = Reference(ex-EffacementCervixPalpitation)
* hasMember[=] = Reference(ex-CervixLengthUltrasound)
* hasMember[=] = Reference(ex-AlbuminPresenceInUrine)
* hasMember[=] = Reference(ex-GlucosePresenceinUrine)
* hasMember[=] = Reference(ex-GlucosePresenceinUrineTestStrip)
* hasMember[=] = Reference(ex-Edema)
* hasMember[=] = Reference(ex-PainSeverityReported)
* hasMember[=] = Reference(ex-DateNextClinicVisit)
* hasMember[=] = Reference(ex-AnnotationComment)


Instance: ex-bloodpressure-amanda-alvarez
InstanceOf: http://hl7.org/fhir/StructureDefinition/bp
Usage: #example
Description: "The Example instance for the bloodpressure observation amanda alvarez"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* component[SystolicBP].valueQuantity = 132 'mm[Hg]'
  * unit = "mmHg"
* component[DiastolicBP].valueQuantity = 86 'mm[Hg]'
  * unit = "mmHg"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-FetalBodyWeightPalpation
InstanceOf: FetalBodyWeightPalpation
Usage: #example
Description: "The Example instance for the Fetal Body Weight Palpation observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 17 'g'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-FetalBodyWeightUltrasound
InstanceOf: FetalBodyWeightUltrasound
Usage: #example
Description: "The Example instance for the Fetal Body Weight ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 17 'g'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-UterusFundalHeight
InstanceOf: UterusFundalHeight
Usage: #example
Description: "The Example instance for the Uterus Fundal Height observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 20 'cm'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-FetalPresentationPalpitation
InstanceOf: FetalPresentationPalpitation
Usage: #example
Description: "The Example instance for the Fetal Presentation Palpitation observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#6096002
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-FetalPresentationUltrasound
InstanceOf: FetalPresentationUltrasound
Usage: #example
Description: "The Example instance for the Fetal Presentation Palpitation observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#6096002
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-FetalHeartRateUltrasound
InstanceOf: FetalHeartRateUltrasound
Usage: #example
Description: "The Example instance for the Fetal Heart Rate by Ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 93 '/min'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-FetalHeartRateAuscultation
InstanceOf: FetalHeartRateAuscultation
Usage: #example
Description: "The Example instance for the Fetal Heart Rate by Ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 93 '/min'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-FetalMovementReported
InstanceOf: FetalMovementReported
Usage: #example
Description: "The Example instance for the Fetal Movement Reported observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#364755008
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-PretermLaborSymptoms
InstanceOf: PretermLaborSymptoms
Usage: #example
Description: "The Example instance for the Fetal Movement Reported observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueBoolean = false
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-CervicalCanalExternalosDiameterUltrasound
InstanceOf: CervicalCanalExternalosDiameterUltrasound
Usage: #example
Description: "The Example instance for the Cervical Canal External os Diameter Ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 2 'cm'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-EffacementCervixPalpitation
InstanceOf: EffacementCervixPalpitation
Usage: #example
Description: "The Example instance for the Cervical Canal External os Diameter Ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 2 '%'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-CervixLengthUltrasound
InstanceOf: CervixLengthUltrasound
Usage: #example
Description: "The Example instance for the Cervical Canal External os Diameter Ultrasound observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 5 'cm'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-AlbuminPresenceInUrine
InstanceOf: AlbuminPresenceInUrine
Usage: #example
Description: "The Example instance for the Albumin Presence In Urine observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#167273002
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-GlucosePresenceinUrine
InstanceOf: GlucosePresenceinUrine
Usage: #example
Description: "The Example instance for the glucose Presence In Urine observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#167273002
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-GlucosePresenceinUrineTestStrip
InstanceOf: GlucosePresenceinUrineTestStrip
Usage: #example
Description: "The Example instance for the glucose Presence In Urine observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#167273002
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-Edema
InstanceOf: Edema
Usage: #example
Description: "The Example instance for the Edema observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $sct#420829009
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-PainSeverityReported
InstanceOf: PainSeverityReported
Usage: #example
Description: "The Example instance for the Pain Severity Reported observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueCodeableConcept = $loinc#LA6112-2   "1"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-DateNextClinicVisit
InstanceOf: DateNextClinicVisit
Usage: #example
Description: "The Example instance for the Date of Next Clinic Visit observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 3 'wk'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-AnnotationComment
InstanceOf: AnnotationComment
Usage: #example
Description: "The Example instance for the Annotation Comment observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueString = "all normal"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-GestationalAge
InstanceOf: GestationalAge
Usage: #example
Description: "The Example instance for the GestationalAge observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 14 'wk'
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/Aliases.fsh

Alias: $sct = http://snomed.info/sct
Alias: $ucum = http://unitsofmeasure.org
Alias: $loinc = http://loinc.org
Alias: $m49.htm = http://unstats.un.org/unsd/methods/m49/m49.htm
Alias: $StructureDefinition-Patient-uv-ips.html = https://hl7.org/fhir/uv/ips/StructureDefinition-Patient-uv-ips.html
Alias: $referencerange-meaning = http://hl7.org/fhir/ValueSet/referencerange-meaning
Alias: $2.16.840.1.113883.12.292 = https://phinvads.cdc.gov/vads/ViewCodeSystem.action?id=2.16.840.1.113883.12.292
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category



---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-AdvanceDirectivesBloodTransfusion.fsh

Profile:        IHEadvanceDirectives
Parent:         Consent 
Id:             IHE.advanceDirectives
Title:          "Advance Directives"
Description:    """
Example of the consent resource in the deffined method that IHE uses to deffine advance directives. modified from IHE advance directives Observation. 
"""
* scope = http://terminology.hl7.org/CodeSystem/consentscope#treatment
* dateTime 1..1
* performer 1..*
* verification 1..* 
* provision 1..1 
* provision.type 1..1
* provision.code 1..*
* provision.code from Advance.Directives.VS (extensible)


Instance: ex-AdvanceDirectives-BloodTransfusion
InstanceOf: IHEadvanceDirectives
Usage: #example
Description: "The Example instance for the IHE Advance Directives resource for blood transfuaion"

* status = #active
* category = http://terminology.hl7.org/CodeSystem/consentcategorycodes#hcd
* dateTime = "2021-10-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* patient = Reference(Patient/ex-Patient-AmandaAlvarez)
* policyRule = http://terminology.hl7.org/CodeSystem/consentpolicycodes#cric
* verification.verified = true
* verification.verifiedWith = Reference(Patient/ex-Patient-AmandaAlvarez)
* verification.verificationDate = "2021-10-06T10:52:30-07:00"
* provision.type = #permit
* provision.code = $sct#116859006 

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Allergy-Fish.fsh

Instance: ex-Allergy-Fish
InstanceOf: USCoreAllergyIntolerance
Usage: #example
Description: "The Example instance for the Allergy Intolerance - fish"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* note.text = "allergy is to fresh fish. Tolerates canned fish"
* identifier.system = "http://acme.com/ids/patients/risks"
* identifier.value = "49476535"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification#confirmed
* category = #food
* code = $sct#417532002
* patient = Reference(Patient/ex-Patient-AmandaAlvarez)
* recordedDate = "2015-08-06T15:37:31-06:00"
* recorder = Reference(Practitioner/ex-Practitioner)
* asserter = Reference(Patient/ex-Patient-AmandaAlvarez)

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Allergy-Latex.fsh

Instance: ex-Allergy-Latex
InstanceOf: USCoreAllergyIntolerance
Usage: #example
Description: "The Example instance for the Allergy Intolerance - Latex"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* note.text = "allergy is to latex"
* identifier.system = "http://acme.com/ids/patients/risks"
* identifier.value = "2834532"
* clinicalStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification#confirmed
* category = #environment
* code = $sct#111088007
* patient = Reference(Patient/ex-Patient-AmandaAlvarez)
* recordedDate = "2015-08-06T15:37:31-06:00"
* recorder = Reference(Practitioner/ex-Practitioner)
* asserter = Reference(Patient/ex-Patient-AmandaAlvarez)  

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-CarePlan-BirthPlan.fsh

Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $mysys = http://example.org/mysys
Alias: $v3-ParticipationType = http://terminology.hl7.org/CodeSystem/v3-ParticipationType

Instance: ex-CarePlan-BirthPlan
InstanceOf: CarePlan
Description: "Example birth plan for ex composition."
Usage: #example

* status = http://hl7.org/fhir/request-status#active
* intent = http://hl7.org/fhir/request-intent#plan
* subject = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"
* category = $sct#735986004
* activity.reference = Reference(activity-3)
* period.start = "2021-07-15"
* period.end = "2022-04-20"
* careTeam = Reference(ex-careteam)
* goal = Reference(ex-goal)

Instance: p1
InstanceOf: Condition
Description: "Example condition for the ex-birthpan element."
Usage: #example
* clinicalStatus = $condition-clinical#active
* verificationStatus = $condition-ver-status#confirmed
* code.text = "pregnancy"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"

Instance: pr1
InstanceOf: Practitioner
Description: "Example practitioner 2 for the ex-birthpan care team"
Usage: #example
* name.family = "0'Malley"
* name.given = "Melinda"

Instance: pr2
InstanceOf: Practitioner
Description: "Example practitioner 2 for the ex-birthpan care team."
Usage: #example
* name.family = "Obstetrician"
* name.given = "Oscar"

Instance: ex-careteam
InstanceOf: CareTeam
Description: "Example care team for the ex-birthpan element."
Usage: #example
* participant[0].role = $mysys#lmc
* participant[=].role.text = "Midwife"
* participant[=].member = Reference(Practitioner/pr1) "Mavis Midwife"
* participant[+].role = $mysys#obs
* participant[=].role.text = "Obstretitian"
* participant[=].member = Reference(Practitioner/pr2) "Oscar Obstetrician"

Instance: ex-goal
InstanceOf: Goal
Description: "Example goal for the ex-birthpan element."
Usage: #example
* lifecycleStatus = #active
* description.text = "Maintain patient's health throughout pregnancy and ensure a healthy child"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"

Instance: activity-1 
InstanceOf: Appointment
Description: "Example appointment 1 for the ex-birthpan element."
Usage: #example
* status = #booked
* description = "The first antenatal encounter. This is where a detailed physical examination is performed and the pregnanacy discussed with the mother-to-be."
* start = "2021-09-18T10:38:00+00:00"
* end = "2021-09-18T10:50:00+00:00"
* requestedPeriod.start = "2021-09-18"
* requestedPeriod.end = "2021-09-28"
* participant[0].actor = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"
* participant[=].required = http://hl7.org/fhir/participantrequired#required
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted
* participant[+].type = $v3-ParticipationType#ATND
* participant[=].actor = Reference(Practitioner/pr1) "Mavis Midwife"
* participant[=].required = http://hl7.org/fhir/participantrequired#required 
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted

Instance: activity-2
InstanceOf: Appointment
Description: "Example appointment 2 for the ex-birthpan element."
Usage: #example
* status = #proposed
* description = "The second antenatal encounter. Discuss any issues that arose from the first antenatal encounter"
* requestedPeriod.start = "2021-10-12"
* requestedPeriod.end = "2021-10-12"
* participant[0].actor = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"
* participant[=].required = http://hl7.org/fhir/participantrequired#required
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted
* participant[+].type = $v3-ParticipationType#ATND
* participant[=].actor = Reference(Practitioner/pr1) "Mavis Midwife"
* participant[=].required = http://hl7.org/fhir/participantrequired#required
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted

Instance: activity-3
InstanceOf: Appointment
Description: "Example appointment 3 for the ex-birthpan element." 
Usage: #example
* status = #proposed
* description = "The home delivery."
* requestedPeriod.start = "2022-04-20"
* requestedPeriod.end = "2022-04-20"
* participant[0].actor = Reference(Patient/ex-Patient-AmandaAlvarez) "Amanda Alvarez"
* participant[=].required = http://hl7.org/fhir/participantrequired#required
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted
* participant[+].type = $v3-ParticipationType#ATND
* participant[=].actor = Reference(Practitioner/pr1) "Mavis Midwife"
* participant[=].required = http://hl7.org/fhir/participantrequired#required
* participant[=].status = http://hl7.org/fhir/participationstatus#accepted
* reasonReference = Reference(p1)

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Composition-AmandaAlvarez_US.fsh

Instance: ex-APS-Composition-AmandaAlvarez
InstanceOf: IHE.PCC.APS.Composition.US
Usage: #example
Description: "The Example instance for the Antepartum Summary composition for example patient Amanda Alvarez"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* title = "Antepartum Summary"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* date = "2023-01-08T14:30:00+01:00"
* author = Reference(Practitioner/ex-Practitioner)
* confidentiality = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* attester[0].mode = http://hl7.org/fhir/composition-attestation-mode#legal
* attester[=].time = "2023-01-08T14:30:00+01:00"
* attester[=].party = Reference(Practitioner/ex-Practitioner)
* attester[+].mode = http://hl7.org/fhir/composition-attestation-mode#legal
* attester[=].time = "2023-01-08T14:30:00+01:00"
* attester[=].party = Reference(Organization/ex-Organization-OB)
* custodian = Reference(Organization/ex-Organization-OB)


* section[sectionMedications]
  * title = "Medication Summary section"
  * code = $loinc#10160-0 "History of Medication use Narrative"
  * entry = Reference(ex-medicationStatement)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Active Medications - Amoxicillin</div>"

* section[sectionAllergies]
  * title = "Allergies and Intolerances"
  * code = $loinc#48765-2 "Allergies and adverse reactions Document"
  * entry[+] = Reference(ex-Allergy-Latex)
  * entry[+] = Reference(ex-Allergy-Fish)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">active allergies - latex and fish</div>"


* section[sectionProblems]
  * title = "Problems"
  * code = $loinc#11450-4 "Problem list - Reported"
  * entry[+] = Reference(ex-Problem-Sepsis)
  * entry[+] = Reference(ex-Problem-GestationalDiabetes)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">active problems - sepsis and gestational diabedies</div>"


* section[ChiefComplaint]
  * title = "Chief Complaint"
  * code = $loinc#10154-3 "Chief complaint Narrative - Reported"
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Complains of fever and having lack of energy</div>"

* section[sectionProceduresHx]
  * title = "Procedures History"
  * code = $loinc#47519-4 "History of Procedures Document"
  * entry[+] = Reference(ex-Procedure-CephalicVersion)
  * entry[+] = Reference(ex-Procedure-EducationSmoking)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">past procedures - Education for smoking provided and Cephallic Version</div>"


* section[sectionImmunizations]
  * title = "Immunizations"
  * code = $loinc#11369-6 "History of Immunization Narrative"
  * entry = Reference(ex-Immunization-Vericella)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Immunizations - Varicella</div>"


* section[sectionResults]
  * title = "Results"
  * code = $loinc#30954-2 "Relevant diagnostic tests/laboratory data Narrative"
  * entry[+] = Reference(ex-AntepartumLabs)
  * entry[+] = Reference(ex-Antepartum-Genetic-Screening)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">no abnormal results for labs</div>"


* section[sectionVitalSigns]
  * title = "Vital Signs"
  * code = $loinc#8716-3 "Vital signs"
  * entry[+] = Reference(ex-VitalSigns-BodyWeight)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">body weight - 185 lbs , prepregnancy weight - 148 lbs</div>"


* section[ReviewOfSystems]
  * title = "Review Of Systems"
  * code = $loinc#10187-3 "Review of systems Narrative - Reported"
  * entry = Reference(ex-MenstralStatus-Pregnancy)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">last menstral period</div>"


* section[PhysicalExams] 
  * title = "Physical Exams"
  * code = $loinc#29545-1 "Physical findings Narrative"
  * entry = Reference(ex-PhysicalExam-AbdominalTenderness)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">abdominal tenderness</div>"


* section[sectionPastIllnessHx]
  * title = "Past Illness History"
  * code = $loinc#11348-0 "History of Past illness Narrative"
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">none found</div>"
  * emptyReason = http://terminology.hl7.org/CodeSystem/list-empty-reason#unavailable


* section[HistoryOfInfection]
  * title = "History Of Infection"
  * code = $loinc#56838-6 "History of Infectious disease Narrative"
  * entry = Reference(ex-HistoryOfInfection)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">history of clamidia infection</div>"


* section[sectionPlanOfCare]
  * title = "Plan Of Care"
  * code = $loinc#18776-5 "Plan of care note"
  * entry = Reference(ex-CarePlan-BirthPlan)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Birth Plan</div>"


* section[sectionSocialHistory]
  * title = "Social History"
  * code = $loinc#29762-2 
  * entry[+] = Reference(ex-SocialHistory-smokingTobaccoUse)
  * entry[+] = Reference(ex-SocialHistory-alcoholUse)
  * entry[+] = Reference(ex-DomesticViolenceRisk)
  * entry[+] = Reference(ex-Homelessness)
  * entry[+] = Reference(ex-SocialHistory-EmploymentStatus)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">active smoker, drinks occasionally, no domestic violence risk, no homlessness, currently working</div>"


* section[sectionPregnancyHx]
  * title = "Pregnancy History"
  * code = $loinc#10162-6 "Pregnancies Hx"
  * entry[+] = Reference(ex-PregnencyStatus-pregnant)
  * entry[+] = Reference(ex-EstimatedDeliveryDate)
  * entry[+] = Reference(ex-GestationalAge)
  * entry[+] = Reference(ex-DateOfLastMenstralPeriod)
  * entry[+] = Reference(ex-DateOfFirstPrenatalVisit)
  * entry[+] = Reference(ex-PregnancyHistory-AmandaAlvarez)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">observations for pregnancy history</div>"


* section[sectionAdvanceDirectives]
  * title = "Advance Directives"
  * code = $loinc#42348-3 "Advance Directives"
  * entry = Reference(ex-AdvanceDirectives-BloodTransfusion)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">advance directve present</div>"


* section[Payors]
  * title = "Payors"
  * code = $loinc#48768-6 "Payment sources Document"
  * entry = Reference(ex-Coverage)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">payors for coverage</div>"


* section[AntepartumEducation]
  * title = "Antepartum Education"
  * code = $loinc#34895-3 "Education Note"
  * entry[+] = Reference(ex-PregnancyEducationObservation)
  * entry[+] = Reference(ex-PregnancyEducationObservation)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">education on smoking provided to patient in first and second trimesters</div>"


* section[AntepartumVisitSummaryFlowsheet]
  * title = "Antepartum Visit Summary Flowsheet"
  * code = $loinc#57059-8 "Pregnancy visit summary note Narrative"
  * entry[+] = Reference(ex-VitalSigns-BodyWeight-PrePregnancy)
  * entry[+] = Reference(ex-AntepartumVisitSummaryFlowsheetBattery)
  * text.status = #generated
  * text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Antepartum visit summary flowsheet documented</div>"


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Coverage.fsh

Instance: ex-Coverage
InstanceOf: Coverage
Description: "Example coverage for ex composition."
Usage: #example

* status = http://hl7.org/fhir/request-status#active
* identifier.system = "http://benefitsinc.com/certificate"
* identifier.value = "123456"
* type = http://terminology.hl7.org/CodeSystem/v3-ActCode#EHCPOL
* policyHolder = Reference(Patient/ex-Patient-AmandaAlvarez) 
* subscriberId = "582938"
* beneficiary = Reference(Patient/ex-Patient-AmandaAlvarez) 
* payor = Reference(Organization/ex-Coverage-Organization)



Instance: ex-Coverage-Organization
InstanceOf: Organization
Description: "Example organization for ex composition."
Usage: #example

* identifier.value = "22224456"
* active = true
* type = http://terminology.hl7.org/CodeSystem/organization-type#pay
* name = "Insurance 1"

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Employment Status.fsh

Instance:   ex-SocialHistory-EmploymentStatus
InstanceOf: http://hl7.org/fhir/us/odh/StructureDefinition/odh-EmploymentStatus
Title:      "Employment Status example"
Description: "Example for Employment status"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#74165-2 "History of employment status NIOSH"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* valueCodeableConcept = http://terminology.hl7.org/CodeSystem/v3-ObservationValue#Employed
* effectivePeriod.start = "2022-07-15"

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Encounter.fsh

Instance:   ex-Encounter
InstanceOf: Encounter
Title:      "Encounter Example for APS"
Description: "Encounter Example for Antepartum Summary"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #finished
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#EMER
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* statusHistory.status = #finished
* statusHistory.period.end = "2022-07-15"

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-estimatedDeliveryDate.fsh

Instance:   ex-EstimatedDeliveryDate
InstanceOf: DeliveryDateEstimatedFromLMP
Title:      "Estimated Delivery Date example"
Description: "Estimated Delivery Date"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#11779-6 "Delivery date Estimated from last menstrual period"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2022-09-18"
* valueDateTime = "2023-01-18"


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-EstimatedDueDate.fsh

Instance:   ex-pregnancy-edd
InstanceOf: Observation
Title:      "Pregnancy Estimated Due date example"
Description: "Pregnancy Estimated Due date example"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#11779-6	
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* effectiveDateTime = "2019-07-15"
* valueDateTime = "2024-04-15"
* performer = Reference(Practitioner/ex-Practitioner)


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-historyOfInfection.fsh

Instance:   ex-HistoryOfInfection
InstanceOf: USCoreConditionProblemsHealthConcernsProfile
Title:      "History Of Infection example"
Description: "History Of Infection example"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* category = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* code = $sct#105629000 "Chlamydial infection (disorder)"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* onsetDateTime = "2022-09-18"


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Immunization-Varicella.fsh

Instance: ex-Immunization-Vericella
InstanceOf: USCoreImmunizationProfile
Usage: #example
Description: "The Example instance for an immunizaiton - Vericella"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #completed
* vaccineCode = $2.16.840.1.113883.12.292#21 "Varicella"
* patient = Reference(Patient/ex-Patient-AmandaAlvarez)
* occurrenceDateTime = "2023-08-11"
* primarySource = false
* reportOrigin = http://terminology.hl7.org/CodeSystem/immunization-origin#record


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-medicationStatement.fsh

Instance: ex-medicationStatement
InstanceOf: MedicationStatement
Usage: #example
Description: "The Example instance for the Medication Statement"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #active 
* category = http://terminology.hl7.org/CodeSystem/medication-statement-category#outpatient 
* medicationCodeableConcept = $sct#27658006  "Product containing amoxicillin (medicinal product)"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* effectiveDateTime = "2023-01-02"
* dateAsserted = "2023-01-08"
* informationSource = Reference(Patient/ex-Patient-AmandaAlvarez)
* note.text = "indicates they miss the occasional dose"
* dosage.sequence = 1
* dosage.text = "5ml three times daily"
* dosage.asNeededBoolean = false 
* dosage.route = $sct#385268001
* dosage.doseAndRate.type = http://terminology.hl7.org/CodeSystem/dose-rate-type#ordered
* dosage.doseAndRate.doseQuantity = 5 'mL' "mL"
* dosage.maxDosePerPeriod.numerator = 3 'ml' "mL"
* dosage.maxDosePerPeriod.denominator = 1 'ml' "mL"




---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-MenstralHistory-Pregnant.fsh

Instance:   ex-MenstralStatus-Pregnancy
InstanceOf: MenstrualStatus
Title:      "Menstrual Status example"
Description: "Menstrual Status example for a pregnant patient"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2023-01-02T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* hasMember[+] = Reference(ex-DateOfLastMenstralPeriod) 
* hasMember[=] = Reference(ex-MensesMonthly)
* hasMember[=] = Reference(ex-HCGPositive-Positive)
* hasMember[=] = Reference(ex-FrequencyOfMenstrualCycles)

Instance: ex-HCGPositive-Positive 
InstanceOf: https://profiles.ihe.net/PCC/mAPS/StructureDefinition/IHE.hCGPositive 
Usage: #example
Description: "The Example instance for the HCGPlus observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2022-10-06T10:52:30-07:00"
* valueBoolean = true
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

Instance: ex-FrequencyOfMenstrualCycles
InstanceOf: FrequencyOfMenstrualCycles
Usage: #example
Description: "The Example instance for the FrequencyOfMenstrualCycles observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueQuantity = 24 'd' "days"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Organization-OB.fsh

Instance:   ex-Organization-OB
InstanceOf: Organization 
Title:      "mAPS Organization example"
Description: "OBGYN Organization example for antepartum summary"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.use = #official  
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
* identifier.value = "187659"
* identifier.period.start = "1999-03-19"
* active = true
* type = http://terminology.hl7.org/CodeSystem/organization-type#prov
* name = "Acme Healthcare"
* telecom.system = #phone 
* telecom.value = "(401) 623 8856"
* address.type = #both
* address.text = "25 Eddy St, Providence, RI  02903"
* address.line = "25 Eddy St"
* address.city = "Providence"
* address.postalCode = "RI"
* address.state = "02903"
* address.country = "USA"

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Patient-AmandaAlvarez.fsh

Instance:   ex-Patient-AmandaAlvarez
InstanceOf: USCorePatientProfile
Title:      "Amanda Alvarez example"
Description: "Amanda Alvarez patient example for antepartum summary"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.use = #usual 
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#MR
* identifier.value = "12345"
* identifier.system = "http://www.acme.com/identifiers/patient"
* identifier.period.start = "2001-05-06"
* identifier.assigner = Reference(Organization/ex-Organization-OB)
* name[+].use = #official
* name[=].family = "Alvarez"
* name[=].given = "Amanda"
* name[+].use = #usual
* name[=].given = "Mandy"
* name[+].use = #maiden
* name[=].family = "Windsor"
* name[=].given = "Amanda"
* name[=].period.end = "2002" 
* telecom[+].system = #phone
* telecom[=].value = "unknown"
* telecom[=].use = #home
* telecom[+].system = #phone
* telecom[=].value = "(203) 555 6473"
* telecom[=].use = #work
* telecom[=].rank = 1
* telecom[+].system = #phone
* telecom[=].value = "(203) 410 5613"
* telecom[=].use = #mobile
* telecom[=].rank = 2
* telecom[+].system = #phone
* telecom[=].value = "((203) 555 8834"
* telecom[=].use = #old
* telecom[=].period.end = "2014"
* gender = #female 
//* birthDate = "1994-12-25T14:35:45-05:00"
* birthDate = "1994-12-25"
* deceasedBoolean = false 
* address.use = #home 
* address.type = #both
* address.text = "534 Erewhon St, Greenville, RI  02828"
* address.line = "534 Erewhon St"
* address.city = "Greenville"
* address.postalCode = "RI"
* address.state = "02828"
* address.country = "USA"
* address.period.start = "1974-12-25"
* contact.relationship = http://terminology.hl7.org/CodeSystem/v2-0131#N
* contact.name[+].use = #official
* contact.name[=].family = "du Marché"
* contact.name[=].prefix = "W"
* contact.name[=].given = "Bénédicte"
* contact.telecom[+].system = #phone
* contact.telecom[=].value = "+33 (237) 998327"
* contact.address.use = #home 
* contact.address.type = #both
* contact.address.text = "534 Erewhon St, Greenville, RI  02828"
* contact.address.line = "534 Erewhon St"
* contact.address.city = "Greenville"
* contact.address.postalCode = "RI"
* contact.address.state = "02828"
* contact.address.country = "USA"
* contact.address.period.start = "1994-12-25"
* contact.gender = #female
* contact.period.start = "2012"
* managingOrganization = Reference(Organization/ex-Organization-OB)


Instance:   ex-Patient-AmandaAlvarez-Father
InstanceOf: Patient
Title:      "Amanda Alvarez Father example"
Description: "Amanda Alvarez patient father example for antepartum summary"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[+].use = #official
* name[=].family = "Alvarez"
* name[=].given = "Dave"

Instance:   ex-Condition-FamilyHistory
InstanceOf: Condition
Title:      "Example Family history condition - colon cancer"
Description: "Example Family history condition - colon cancer"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* code = $sct#312824007
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#inactive 
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* asserter = Reference(Patient/ex-Patient-AmandaAlvarez)

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-PhysicalExam.fsh

Instance:   ex-PhysicalExam-AbdominalTenderness
InstanceOf: Observation
Title:      "Physical Exam Abdominal tenderness example"
Description: "Physical Exam Abdominal tenderness example"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#exam
* code = $sct#43478001 "Abdominal tenderness"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectivePeriod[+].start = "2018-04-02T10:30:10+01:00"
* valueBoolean = true 
* interpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation#A


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Practitioner.fsh

Instance:   ex-Practitioner
InstanceOf: Practitioner  
Title:      "mAPS Practitioner  example"
Description: "Practitioner example for antepartum summary"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier.use = #usual  
* identifier.type = http://terminology.hl7.org/CodeSystem/v2-0203#NPI
* identifier.value = "567IUI51C154"
* active = true
* name[+].use = #official
* name[=].family = "Heps"
* name[=].given = "Simone"
* name[=].suffix = "MD"
* telecom[+].system = #phone 
* telecom[=].value = "2020556936"
* telecom[=].use = #work
* telecom[+].system = #email 
* telecom[=].value = "S.M.Heps@bmc.nl"
* telecom[=].use = #work
* telecom[+].system = #fax 
* telecom[=].value = "0205669283"
* telecom[=].use = #work
* address.use = #work 
* address.type = #both
* address.text = "25 Eddy St, Providence, RI  02903"
* address.line = "25 Eddy St"
* address.city = "Providence"
* address.postalCode = "RI"
* address.state = "02903"
* address.country = "USA"
* gender = #female
* birthDate = "1971-11-07"


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-PregnancyHistoryObservation.fsh

Instance:   ex-PregnancyHistory-AmandaAlvarez
InstanceOf: PregnancyHistory
Title:      "Pregnancy History observation example"
Description: "The Example instance for the PregnancyHistory observation"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2022-10-06T10:52:30-07:00"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* hasMember[+] = Reference(ex-DateOfLastLiveBirth-AmandaAlvarez) 
* hasMember[=] = Reference(ex-DateOfFirstPrenatalVisit-AmandaAlvarez)
* hasMember[=] = Reference(ex-NumberOfPreviousCesareanDeliveries)
* hasMember[=] = Reference(ex-NumberOfBirthsStillLiving)
* hasMember[=] = Reference(ex-NumberOfPreviousLiveBirthsNowDead)
* hasMember[=] = Reference(ex-NumberOfPrenatalVisitsForThisPregnancy)
* hasMember[=] = Reference(ex-NumberOfPregnancies)

Instance: ex-DateOfLastLiveBirth-AmandaAlvarez
InstanceOf: DateOfLastLiveBirth
Usage: #example
Description: "The Example instance for the DateOfLastLiveBirth observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2022-10-06T10:52:30-07:00"
* valueDateTime = "2021-09-18"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-DateOfFirstPrenatalVisit-AmandaAlvarez
InstanceOf: DateOfFirstPrenatalVisit
Usage: #example
Description: "The Example instance for the DateOfFirstPrenatalVisit observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2022-10-06T10:52:30-07:00"
* valueDateTime = "2022-08-18"
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)


Instance: ex-NumberOfPregnancies
InstanceOf: NumberOfPregnancies
Usage: #example
Description: "The Example instance for the NumberOfPregnancies observation"
* status = http://hl7.org/fhir/observation-status#final
* effectiveDateTime = "2021-10-06T10:52:30-07:00"
* valueInteger = 3
* performer = Reference(Practitioner/ex-Practitioner)
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-pregnancyStatus-Pregnant.fsh

Instance:   ex-PregnencyStatus-pregnant
InstanceOf: USCoreObservationPregnancyStatusProfile
Title:      "Pregnency Status - pregnant example"
Description: "Example for Pregnency Status where patient is pregnant"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#82810-3 "Pregnancy status"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2023-01-08"
* valueCodeableConcept = $loinc#LA15173-0 "Pregnant"
* hasMember = Reference(Observation/ex-pregnancy-edd)

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Problem-GestationalDiabetes.fsh

Instance: ex-Problem-GestationalDiabetes
InstanceOf: USCoreConditionProblemsHealthConcernsProfile
Usage: #example
Description: "The Example instance for the Problems - Gestational diabetes"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* category = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item
* severity = $sct#371924009
* code = $sct#11687002
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* onsetDateTime = "2023-01-02"
* recordedDate = "2023-01-02"
* recorder = Reference(Practitioner/ex-Practitioner)
* evidence.detail = Reference(DiagnosticReport/ex-DiagnosticReport-GestationalDiabetes)



Instance:   ex-DiagnosticReport-GestationalDiabetes
InstanceOf: DiagnosticReport
Title:      "Diagnostic Report Example for Gestational Diabetes"
Description: "Diagnostic Report Example for Gestational Diabetes"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final 
* category = http://terminology.hl7.org/CodeSystem/v2-0074#HM
* code = $loinc#2345-7
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* encounter = Reference(Encounter/ex-Encounter)
* performer = Reference(Practitioner/ex-Practitioner)

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Problem-sepsis.fsh

Instance: ex-Problem-Sepsis
InstanceOf: USCoreConditionProblemsHealthConcernsProfile
Usage: #example
Description: "The Example instance for the Problems - bacterial sepsis"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* clinicalStatus = http://terminology.hl7.org/CodeSystem/condition-clinical#active
* verificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status#confirmed
* category[+] = http://terminology.hl7.org/CodeSystem/condition-category#problem-list-item
* severity = $sct#371924009
* code = $sct#281158006
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* encounter = Reference(Encounter/ex-Encounter)
* onsetDateTime = "2023-01-02"
* recordedDate = "2023-01-02"
* recorder = Reference(Practitioner/ex-Practitioner)
* evidence.detail = Reference(DiagnosticReport/ex-DiagnosticReport-Sepsis)



Instance:   ex-DiagnosticReport-Sepsis
InstanceOf: DiagnosticReport
Title:      "Diagnostic Report Example for Sepsis"
Description: "Diagnostic Report Example for Sepsis"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final 
* category = http://terminology.hl7.org/CodeSystem/v2-0074#HM
* code = $loinc#94554-3
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* encounter = Reference(Encounter/ex-Encounter)
* performer = Reference(Practitioner/ex-Practitioner)
* conclusionCode = $sct#10828004


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Procedure-CephalicVersion.fsh

Instance: ex-Procedure-CephalicVersion
InstanceOf: USCoreProcedureProfile
Usage: #example
Description: "The Example instance for the procedure - Cephalic Version"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #completed
* category = $sct#386637004
* code = $sct#240278000
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performedDateTime = "2023-01-05"
* performer.actor = Reference(Practitioner/ex-Practitioner)
* reasonCode = $sct#1231436008
* outcome = $sct#385669000


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-Procedure-EducationSmoking.fsh

Instance: ex-Procedure-EducationSmoking
InstanceOf: USCoreProcedureProfile
Usage: #example
Description: "The Example instance for the procedure - Education Smoking"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* basedOn = Reference(ServiceRequest/ex-ServiceRequest-EducationSmoking)
* status = #completed
* category = $sct#311401005
* code = $sct#171055003
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performedDateTime = "2022-08-25"
* performer.actor = Reference(Practitioner/ex-Practitioner)
* reasonCode = $sct#449868002

Instance: ex-ServiceRequest-EducationSmoking
InstanceOf: ServiceRequest
Usage: #example
Description: "The Example instance for the Service Request for the Education Smoking procedure"

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #completed
* intent = #order
* category = $sct#409073007
* code = $sct#171055003
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* occurrenceDateTime = "2022-08-25"
* performer = Reference(Practitioner/ex-Practitioner)

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-SocialHistory-Alcohol.fsh

Instance:   ex-SocialHistory-alcoholUse
InstanceOf: AlcoholUseFrequency
Title:      "Social History alcohol Use example"
Description: "Social History alcohol Use example"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#74013-4 "Alcoholic drinks per day"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2019-07-15"
* valueQuantity = 2 '/d'

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-SocialHistory-Smoking.fsh

Instance:   ex-SocialHistory-smokingTobaccoUse
InstanceOf: USCoreSmokingStatusProfile
Title:      "Social History smoking Tobacco Use example"
Description: "Example for Social History -  smoking Tobacco Use"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#72166-2 "Tobacco smoking status"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2022-08-15"
* valueCodeableConcept = $loinc#LA18976-3	

Instance:   ex-SocialHistory-smokingTobaccoUse-formerSmoker
InstanceOf: USCoreSmokingStatusProfile
Title:      "Social History smoking Tobacco Use example"
Description: "Example for Social History -  smoking Tobacco Use"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code = $loinc#72166-2 "Tobacco smoking status"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2023-01-04"
* valueCodeableConcept = $loinc#LA15920-4		


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-vitalSigns-BodyWeight-PrePregnancy.fsh

Instance:   ex-VitalSigns-BodyWeight-PrePregnancy 
InstanceOf: BodyWeightMeasuredPrePregnancy
Title:      "Vital Signs Body Weight example"
Description: "Example for vital signs -  body weight"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* code.coding[0] = $loinc#8348-5 "Body weight Measured --pre pregnancy"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2023-01-06"
* valueQuantity = 148 '[lb_av]' "lbs"

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/ex-vitalSigns-BodyWeight.fsh

Instance:   ex-VitalSigns-BodyWeight
InstanceOf: Observation
Title:      "Vital Signs Body Weight example"
Description: "Example for vital signs -  body weight"
Usage: #example

* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #final
* category = http://terminology.hl7.org/CodeSystem/observation-category#vital-signs
* code.coding = $loinc#29463-7 "Body Weight"
* subject = Reference(Patient/ex-Patient-AmandaAlvarez)
* performer = Reference(Practitioner/ex-Practitioner)
* effectiveDateTime = "2023-01-06"
* valueQuantity = 185 '[lb_av]' "lbs"

---

File: repos/IHE_SLASH_PCC.mAPS.us/input/fsh/IHE_APS_Composition_US.fsh

Profile:   IHE_APS_Composition_US
Parent: IHE.PCC.APS.Composition
Id:             IHE.PCC.APS.Composition.US
Title: "Antapartum Summary US Realm"
Description:      """
Antepartum Summary is a content profile that defines the structure for the aggregation of significant events, diagnoses, and plans of care derived from the visits over the course of an antepartum episode. 
It is represented in part by Estimated Due Dates and a Visit Summary Flowsheet, in which the aggregated data from the ambulatory office visits is recorded, as well as allergies, advance directives, care plans, 
and selected histories are provided. The Antepartum Summary represents a summary of the most critical information to an antepartum care provider regarding the status of a patient’s pregnancy.
For the US Realm
"""

* title = "Antepartum Summary"
* section[sectionPlanOfCare] MS
* section[ChiefComplaint] MS
* section[ReviewOfSystems] MS
* section[PhysicalExams] MS
* section[Payors] MS     


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/images-source/ActorsAndTransactions.plantuml

@startuml
skinparam svgDimensionStyle false
agent "[[#client Client]]" as Client
agent "[[#server Server]]" as Server
Client -down-> Server : "go [[domain-YY.html Domain-YY]]"
@enduml


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/images-source/domain-Y-seq.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
participant "Client" as Client
participant "Server" as Server
activate "Client"
activate "Server"
"Client" -> "Server" : 1. Go Query [domain-YY]
"Server" --> "Client" : 2. Go Response [domain-YY]
deactivate "Client"
deactivate "Server"
@enduml


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/images-source/usecase1-processflow.plantuml

@startuml
skinparam svgDimensionStyle false
hide footbox
participant "Client" as Client
participant "Server" as Server
activate "Client"
"Client" -> "Server" : 1. Go Query [domain-YY]
activate "Server"
"Server" --> "Client" : 2. Go Response [domain-YY]
deactivate "Client"
deactivate "Server"
@enduml


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/pagecontent/download.md


You can also download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on https://github.com/IHE/PCC.mAPS.us

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}



---

File: repos/IHE_SLASH_PCC.mAPS.us/input/pagecontent/index.md

Mobile Antepartum Summary is a content profile that defines the structure for the aggregation of significant events, diagnoses, and plans of care derived from the visits over the course of an antepartum episode.

This National Extension is intended to be a summary for supporting pregnancy care prior to and leading up to delivery in the United States.

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](issues.html) |
{: .grid}

</div>

### Organization of This Guide

This guide is organized into the following sections:

1. National Extensions:
   1. [Mobile Antepartum Summary US Realm](https://build.fhir.org/ig/IHE/PCC.mAPS.us/branches/master/StructureDefinition-IHE.PCC.APS.Composition.US.html#root)
1. Other
   1. [Changes to Other IHE Specifications](other.html)
   1. [Download and Analysis](download.html)
   1. [Test Plan](testplan.html)

See also the [Table of Contents](toc.html) and the index of [Artifacts](artifacts.html) defined as part of this implementation guide.

### Conformance Expectations

IHE uses the normative words: Shall, Should, and May according to [standards conventions](https://profiles.ihe.net/GeneralIntro/ch-E.html).

#### Must Support

The use of ```mustSupport``` in StructureDefinition profiles equivalent to the IHE use of **R2** as defined in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir).

mustSupport of true - only has a meaning on items that are minimal cardinality of zero (0), and applies only to the source actor populating the data. The source actor shall populate the elements marked with MustSupport, if the concept is supported by the actor, a value exists, and security and consent rules permit.
The consuming actors should handle these elements being populated or being absent/empty.
Note that sometimes mustSupport will appear on elements with a minimal cardinality greater than zero (0), this is due to inheritance from a less constrained profile.


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/pagecontent/issues.md


## Significant Changes

### Significant Changes from Previous Release

This is the first release of this Implementation Guide.

##Issues

### Submit an Issue
IHE welcomes [New Issues](https://github.com/IHE/PCC.mAPS.us/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues may be submitted to the [Public Comment form](https://www.ihe.net/PCC_Public_Comments/).

As issues are submitted they will be managed on the [mAPS.us GitHub Issues](https://github.com/IHE/PCC.mAPS.us/issues), where discussion and workarounds may be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues

- None

### Closed Issues

- None


---

File: repos/IHE_SLASH_PCC.mAPS.us/input/pagecontent/other.md

<div markdown="1" class="stu-note">
This section modifies other IHE profiles or the General Introduction appendices and is not a part of the xxx Profile. The content here will be incorporated into the target narrative at a future time, usually when xxx Profile goes normative.
</div>

## IHE Technical Frameworks General Introduction Appendix A: Actors

|------------------------------------------------|
| Editor, add the following new or modified actors to the [IHE Technical Frameworks General Introduction Appendix A](https://profiles.ihe.net/GeneralIntro/ch-A.html): |
{:.grid .bg-info}

| Actor                         | Definition                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------------|
| none |  |
{:.grid .table-striped}



## IHE Technical Frameworks General Introduction Appendix B: Transactions

|------------------------------------------------|
| Editor, add the following new or modified transactions to the [IHE Technical Frameworks General Introduction Appendix B](https://profiles.ihe.net/GeneralIntro/ch-B.html): |
{:.grid .bg-info}


| Transaction                    | Definition                                                                              |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| none |  |
{:.grid .table-striped}

## IHE Technical Frameworks General Introduction Appendix D: Glossary

|------------------------------------------------|
| Editor, add the following new or modified terms to the [IHE Technical Frameworks General Introduction Appendix D](https://profiles.ihe.net/GeneralIntro/ch-D.html): |
{:.grid .bg-info}

| Term                         | Definition                                                    | Acronyms/Abbreviations | Synonyms    |
| ---------------------------- | --------------------------------------------------------------| -----------------------| ------------|
| none |  |
{:.grid .table-striped}





---

File: repos/IHE_SLASH_PCC.mAPS.us/input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

This Test Plan page is a prototype.   We expect the maturity of the content will improve over time.  For now, we summarize high level testing scope and available tools. Comments are welcome.
</div>

The goals of testing for this National Extention for the US Realm is to test the conformance of the Antepartum Summary FHIR IG with confomance to US CORE. 


## Introduction

Overall test plan leverages the Profiles and Examples shown on the [Artifacts Summary](artifacts.html). The [Profiles](artifacts.html#structures-resource-profiles) listed are describing the constraints that would be adhered to by actors claiming conformance to this implementation guide. Thus any applicable Resources that are known to have been published by an app or server MUST be conformant to these profiles as appropriate.

The Examples listed in [Example Instances](artifacts.html#example-example-instances) are example instances. Some are conformant to the profiles. Other examples that either assist with the structure of the examples (e.g., Patient and Encounter) or are examples that should be able to handle in various ways. 

This section will be filled in as the IHE-Connectathon need drives the creation of the test plans, test procedures, test tools, and reporting.

**TODO: include actor based tests, include positive and edge cases. **

### Unit Test Procedure

Unit Tests in this context is where a SUT is tested against a simulator or validator.  A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench. Where a reference implementation is used the negative tests are harder to simulate. A validator is a implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

### Integration Test Procedure

Integration Tests in this context is where two SUT of paired actors test against each other. In this case the subset of tests that can be tested is the intersection. Testing only this intersection is necessary but not sufficient. The testing must also include the capability of the client to exercise the test scenarios that this SUT can test, to determine that failure-modes are handled properly by both SUT.




---

