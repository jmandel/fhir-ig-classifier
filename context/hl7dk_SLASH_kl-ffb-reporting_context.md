File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBAliases.fsh

Alias: $snomedCT = http://snomed.info/sct
Alias: $KLCommon =  http://fhir.kl.dk/term/CodeSystem/CareSocialCodes
Alias: $KLFFB = urn:oid:1.2.208.176.2.22
Alias: $requestStatus = http://hl7.org/fhir/request-status
Alias: $requestIntent = http://hl7.org/fhir/request-intent
Alias: $conditionClinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $conditionVerStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $goalStatus = http://hl7.org/fhir/goal-status
Alias: $observationStatus = http://hl7.org/fhir/observation-status
Alias: $carePlanActivityStatus = http://hl7.org/fhir/care-plan-activity-status
Alias: $v3ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode

---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBCareEvaluation.fsh

Profile: KLReportingFFBCareEvaluation
Parent: Observation
Id: kl-reporting-ffb-careEvaluation
Title: "CareEvaluation"
Description: "Støttebehovsvurdering"
* identifier ..0
* basedOn ..0
* partOf ..0
* category ..0
* status MS
* code ..1 MS
* code.coding 1..1 MS
* code.coding = $KLCommon#effe55c7-572c-4a99-8fb4-2a9dda2f6572
* code.text ..0
* subject 1.. MS
* subject only Reference(KLReportingFFBCitizen)
* subject ^type.aggregation = #bundled
* focus ..0
* encounter ..0
* value[x] only CodeableConcept
* valueCodeableConcept 1..1 MS
* valueCodeableConcept.text ..0
* valueCodeableConcept.coding from KLNeedsAssessmentCodesFFB //kun for støttebehov
* effective[x] 1..1 MS
* effective[x] only dateTime
* issued ..0
* performer ..0
* dataAbsentReason ..0
* interpretation ..0
* note ..0
* bodySite ..0
* method ..0
* specimen ..0
* device ..0
* referenceRange ..0
* hasMember ..0
* derivedFrom ..0
* component ..0

* code ^short = "[DK] vurderingskode"
* valueCodeableConcept.text ^short = "[DK] vurderingsresultat"
* valueCodeableConcept.coding ^short = "[DK] struktureretVurdering"
* subject ^short = "[DK] vurderingssubjekt"
* encounter ^short = "[DK] vurderingskontakt"
* performer ^short = "[DK] vurderingsansvarlig"
* basedOn ^short = "[DK] vurderingBaseretPå"
* effectiveDateTime ^short = "[DK] vurderingstid"
* status ^short = "[DK] vurderingsstatus"


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBCarePlan.fsh

Profile: KLReportingFFBCarePlan
Parent: CarePlan
Id: kl-reporting-ffb-carePlan
Title: "CarePlan"
Description: "FFB care plan"
* extension contains KLReportingFFBMunicipalityCaseNumber named municipalityCaseNumber 1..1 MS
* extension contains KLReportingFFBFollowUpDateExtension named followUpDate 0..1 MS
* identifier ..0
* instantiatesCanonical ..0
* instantiatesUri ..0
* basedOn ..0
* replaces ..0
* partOf ..0
* status MS
* intent MS
* category ..0
* title ..0
* description ..0
* subject 1.. MS
* subject only Reference(KLReportingFFBCitizen)
* subject ^type.aggregation = #bundled
* encounter ..0
* period 1.. MS
* period.start 1.. MS
* created ..0
* author ..0
* contributor ..0
* careTeam MS
* addresses 0.. MS
* addresses.extension contains ConditionRank named conditionRank 1..1 MS
* addresses.extension[conditionRank].value[x] ^maxValuePositiveInt = 2
* addresses only Reference(KLReportingFFBTargetGroup)
* addresses.reference 1.. MS
* addresses.type ..0
* addresses.identifier ..0
* addresses.display ..0
* addresses ^type.aggregation = #bundled
* supportingInfo ..0
* goal MS
* goal only Reference(KLReportingFFBInterventionGoal)
* goal ^type.aggregation = #bundled
* activity 0..1 MS
* activity.outcomeCodeableConcept ..0
* activity.outcomeReference 1..1 MS
* activity.outcomeReference only Reference(KLReportingFFBCareEvaluation)
* activity.outcomeReference ^type.aggregation = #bundled
* activity.progress ..0
* activity.reference ..0
* activity.detail ..0
* note ..0
* obeys kl-reporting-ffb-care-plan-1
* obeys kl-reporting-ffb-care-plan-2
// * obeys kl-reporting-ffb-care-plan-3
* obeys kl-reporting-ffb-care-plan-4
* obeys kl-reporting-ffb-care-plan-5

* category.coding ^short = "[DK] indsatsforløbKategori"
* description ^short = "[DK] indsatsforløbBeskrivelse" 
* created ^short = "[DK] indsatsforløbOprettelsestid" 
* period.start ^short = "[DK] indsatsforløbBevillingstid" 
* period.end ^short = "[DK] indsatsforløbAfslutningstid" 
* subject ^short = "[DK] indsatsforløbsubjekt" 
* author ^short = "[DK] indsatsforløbansvarlig" 
* careTeam ^short = "[DK] indsatsforløbsleverandør og indsatsforløbtilbud" 
* addresses ^short = "[DK] indsatsforløbmålgruppe"
* addresses.extension[conditionRank] ^short = "[DK] indsatsforløbsmålgruppeRang - 1 = primær, 2 = sekundær" 
* intent ^short = "[DK] indsatsforløbhensigt" 
* status ^short = "[DK] indsatsforløbstatus" 
* goal ^short = "[DK] indsatsforløbsmål" 
* activity.outcomeReference ^short = "[DK] støttebehovsvurdering"
* extension[municipalityCaseNumber] ^short = "[DK] anledningDokumenteretISag"

Invariant: kl-reporting-ffb-care-plan-1
Description: "CarePlan must have a follow-up encounter if ordered and not completed"
Severity: #error
Expression: "(intent != 'order') or (status = 'completed') or extension('http://fhir.kl.dk/ffbreporting/StructureDefinition/kl-reporting-ffb-follow-up-date-extension').exists()"

Invariant: kl-reporting-ffb-care-plan-2
Description: "CarePlan shall address no more than one condition with rank 1"
Severity: #error
Expression: "addresses.where(extension('http://fhir.kl.dk/core/StructureDefinition/ConditionRank').valuePositiveInt = '1').count() < 2"

Invariant: kl-reporting-ffb-care-plan-3
Description: "CarePlan shall contain intervention goals if ordered and not completed"
Severity: #error
Expression: "(intent != 'order') or (status = 'completed') or goal.exists()"

Invariant: kl-reporting-ffb-care-plan-4
Description: "CarePlan shall contain evaluation if ordered and not completed"
Severity: #error
Expression: "(intent != 'order') or (status = 'completed') or activity.outcomeReference.exists()"

Invariant: kl-reporting-ffb-care-plan-5
Description: "CarePlan shall contain target groups if ordered and not completed"
Severity: #error
Expression: "(intent != 'order') or (status = 'completed') or addresses.exists()"


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBCitizen.fsh

Profile: KLReportingFFBCitizen
Parent: Patient
Id: kl-reporting-ffb-citizen
Title: "Citizen"
Description: "Administrative information about a citizen receiving social services."
* identifier 1..1 MS
* identifier only dk-core-cpr-identifier
* active ..0
* name ..0
* telecom ..0
* gender ..0
* birthDate ..0
* deceased[x] ..0
* address ..0
* maritalStatus ..0
* multipleBirth[x] ..0
* photo ..0
* contact ..0
* communication ..0
* generalPractitioner ..0
* managingOrganization 1..1 MS
* managingOrganization.reference ..0
* managingOrganization.type ..0
* managingOrganization.identifier 1..1 MS
* managingOrganization.identifier only KombitStsOrgIdentifier
* managingOrganization.display ..0
* link ..0


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBCondition.fsh

Profile: KLReportingFFBCondition
Parent: Condition
Id: kl-reporting-ffb-condition
Title: "Condition"
Description: "Condition according to FFB"
* implicitRules ..0
* language ..0
* contained ..0
* extension contains
   ConditionLastAssertedDate named conditionLastAssertedDate 0..1 MS
* extension ^slicing.rules = #closed
* modifierExtension ..0
* identifier ..0
* clinicalStatus 1..1 MS
* verificationStatus MS
* category ..0
* severity MS
* severity from http://fhir.kl.dk/term/ValueSet/KLSeveritiesFFB
* severity.id ..0
* severity.extension ..0
* severity.text ..0
* code 1.. MS
* code.id ..0
* code.extension ..0
* code from http://fhir.kl.dk/term/ValueSet/KLConditionCodesFFB (required)
* code.text ..0
* bodySite ..0
* subject 1.. MS
* subject only Reference(KLReportingFFBCitizen)
* encounter ..0
* onset[x] ..0
* abatement[x] ..0
* recordedDate 1.. MS
* recorder ..0
* asserter ..0
* stage ..0
* evidence ..0
* note ..0
* obeys kl-reporting-ffb-condition-1

//Specifying danish descriptions
* code ^short = "[DK] tilstandskode"
* severity ^short = "[DK] tilstandssværhedsgrad" 
* clinicalStatus ^short = "[DK] tilstandsstatus"
* verificationStatus ^short = "[DK] tilstandsstatus"
* code.text ^short = "[DK] tilstandsvurdering" 
* note.text ^short = "[DK] tilstandFagligtNotat" 
* recordedDate ^short = "[DK] tilstandsoprettelsestid" 
* abatementDateTime ^short = "[DK] tilstandsafslutningstid" 
* subject ^short = "[DK] tilstandssubjekt" 
* asserter ^short = "[DK] tilstandsansvarlig" 
* evidence.detail ^short = "[DK] tilstandsevidens (herunder tilstandOplysning og tilstandOpfølgningsresultat)" 
* category.coding ^short = "[DK] tilstandsfokus"
* extension[conditionLastAssertedDate] ^short = "[DK] tilstandSidstVurderetTid"
 
* code.coding SU
* severity.coding SU
* code.text SU
* note.text SU
* evidence.detail SU
* category.coding SU
* extension[conditionLastAssertedDate] SU

Invariant: kl-reporting-ffb-condition-1
Description: "Severity is mandatory for condition codes of 'Aktivitet og Deltagelse' and not allowed for other condition codes"
Severity: #error
Expression: "(severity.exists() and code.memberOf('http://fhir.kl.dk/term/ValueSet/KLConditionADCodesFFB')) or
    (severity.exists().not() and code.memberOf('http://fhir.kl.dk/term/ValueSet/KLConditionADCodesFFB').not())"


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBDeliveryReport.fsh

Profile: KLReportingFFBDeliveryReport
Parent: Bundle
Id: kl-reporting-ffb-deliveryReport
Title: "DeliveryReport"
Description: "Deliver report to deliver for each citizen."
* identifier ..0
* type = #collection
* timestamp 1..1
* total ..0
* link ..0
* entry.resource 1..1
* entry.resource only
    KLReportingFFBCitizen or
    KLReportingFFBServiceRequest or
    KLReportingFFBInformationGathering or 
    KLReportingFFBInterventionGoal or
    KLReportingFFBServicePerformer or
    KLReportingFFBFollowUpEncounter or
    CarePlan or // (KLReportingFFBCarePlan or KLReportingFFBIntervention)
    Condition or // (KLReportingFFBCondition or KLReportingFFBTargetGroup)
    Observation // (KLReportingFFBCareEvaluation or KLReportingFFBFollowUp)
* entry.resource ^short = "Content constrained to known profiles (see also constraint kl-reporting-ffb-delivery-report-1, kl-reporting-ffb-delivery-report-2, and kl-reporting-ffb-delivery-report-3)"
* entry.search ..0
* entry.request ..0
* entry.response ..0
* signature ..0
* obeys kl-reporting-ffb-delivery-report-1
* obeys kl-reporting-ffb-delivery-report-2
* obeys kl-reporting-ffb-delivery-report-3

Invariant: kl-reporting-ffb-delivery-report-1
Description: "All Conditon resources shall conform to either kl-reporting-ffb-condition or kl-reporting-ffb-targetGroup profile"
Severity: #error
Expression: "entry.ofType(Condition).all(
    resource.conformsTo('http://fhir.kl.dk/ffbreporting/StructureDefinition/kl-reporting-ffb-condition')
 or resource.conformsTo('http://fhir.kl.dk/ffbreporting/StructureDefinition/kl-reporting-ffb-targetGroup'))"

Invariant: kl-reporting-ffb-delivery-report-2
Description: "All CarePlan resources shall conform to either kl-reporting-ffb-carePlan or kl-reporting-ffb-intervention profile"
Severity: #error
Expression: "entry.ofType(CarePlan).all(
    resource.conformsTo('http://fhir.kl.dk/ffbreporting/StructureDefinition/kl-reporting-ffb-carePlan')
 or resource.conformsTo('http://fhir.kl.dk/ffbreporting/StructureDefinition/kl-reporting-ffb-intervention'))"

Invariant: kl-reporting-ffb-delivery-report-3
Description: "All CarePlan resources shall conform to either kl-reporting-ffb-carePlan or kl-reporting-ffb-intervention profile"
Severity: #error
Expression: "entry.ofType(Observation).all(
    resource.conformsTo('http://fhir.kl.dk/ffbreporting/StructureDefinition/kl-reporting-ffb-careEvaluation')
 or resource.conformsTo('http://fhir.kl.dk/ffbreporting/StructureDefinition/kl-reporting-ffb-followUp'))"


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBExample.fsh

// ===================================================================================================================
// 1st Encounter
// ===================================================================================================================

// --- Citizen -------------------------------------------------------------------------------------------------------

Instance: da16c0a1-840a-46b0-98b3-761e4501b343
InstanceOf: KLReportingFFBCitizen
Description: "Børge Mogensen"
Usage: #inline
* identifier
  * use = #official
  * value = "0101814321"
  * system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier
  * use = #official
  * value =  "d4e3f4fb-6761-4d6c-9086-74c49231f11e"
  * system = "https://www.kombit.dk/organisation"

// --- ServiceRequest ------------------------------------------------------------------------------------------------

Instance: 9947191b-270a-4f64-9b05-8be29e7f5c58
InstanceOf: KLReportingFFBServiceRequest
Description: "Service request from Børge Mogensen"
Usage: #inline
* extension[municipalityCaseNumber].extension[municipalitySpecific].valueIdentifier
  * system = "http://example.dk/identifier/case"
  * value = "Sag154689"
* status = #active
* intent = $requestIntent#proposal
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)

// ===================================================================================================================
// 2nd Encounter
// ===================================================================================================================

Instance: 498644ca-b26c-4ba7-a1ef-69d691297ba3
InstanceOf: KLReportingFFBDeliveryReport
Title: "2nd encounter"
Description: "2nd encounter / Second documentation phase – Case insight"
* type = #collection
* timestamp = 2021-05-28T17:13:41Z
* insert CitizenEntry(da16c0a1-840a-46b0-98b3-761e4501b343)
* insert ServiceRequestEntry(9947191b-270a-4f64-9b05-8be29e7f5c58)
* insert ConditionEntry(57dc36db-56ce-4a4a-95e8-2d2c8a85871a) // Bevidsthedstilstand
* insert ConditionEntry(00b972ba-0b06-4000-83f9-b733700c96e0) // Intellektuelle funktioner
* insert ConditionEntry(45b460b2-843e-48ec-8366-a3d184bf591f) // Problemløsning
* insert ConditionEntry(5089bbd1-6ec1-4f4d-a83e-4a89f44c482e) // Syn
* insert ConditionEntry(5b74d267-952d-487f-969a-68ea6a9aae39) // Døgnrytme
* insert ConditionEntry(6f77529a-d449-4e86-aaed-28b524090a32) // Tobak
* insert ConditionEntry(6468d4a7-012e-4639-8dcf-dcec775385a0) // Interesser
* insert ConditionEntry(b68548a8-b792-4aba-8358-b83a4e691b7c) // Familiesituation
* insert ConditionEntry(ec5efa29-6355-40c7-ada4-b534901242ab) // Boligområde
* insert ConditionEntry(47d82311-ba67-49c4-aacc-ab3b171b4524) // Personer i netværk
* insert ConditionEntry(3a0e2994-9f3f-44ab-a684-06bb85c7bf9d)  // Indgå i samspil og kontakt
* insert ConditionEntry(101f2519-adf9-43ba-b4f5-90f3917129c1)  // Varetage beskæftigelse
* insert ConditionEntry(e162f02a-6f82-4aed-97cd-a47a43c58413)  // Spise
* insert ConditionEntry(a2c6378d-66da-4aa8-b973-729687224ab0)  // Købe ind
* insert ConditionEntry(4908c9b2-fadc-4228-adbe-69ed9ef70ff3)  // Færdes med transportmidler
* insert ClinicalImpressionEntry(26d1a3de-0bd0-43d6-b52c-9c5687f01e45) // Information gathering

// --- Conditions ----------------------------------------------------------------------------------------------------

Instance: 57dc36db-56ce-4a4a-95e8-2d2c8a85871a
InstanceOf: KLReportingFFBCondition
Description: "Bevidsthedstilstand - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* code = $KLFFB#4934e45a-0f93-4c23-a767-2b681378700b
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: 00b972ba-0b06-4000-83f9-b733700c96e0
InstanceOf: KLReportingFFBCondition
Description: "Intellektuelle funktioner - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* code = $KLFFB#ef4271c4-f942-4194-a2b0-e9a7045eab22
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: 45b460b2-843e-48ec-8366-a3d184bf591f
InstanceOf: KLReportingFFBCondition
Description: "Problemløsning - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* code = $KLFFB#b93216fa-3843-4a7e-85bc-e3ef35a1967f
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: 5089bbd1-6ec1-4f4d-a83e-4a89f44c482e
InstanceOf: KLReportingFFBCondition
Description: "Syn - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* code = $KLFFB#9959e779-e8ee-47e8-989b-bbff4aae2883
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: 5b74d267-952d-487f-969a-68ea6a9aae39
InstanceOf: KLReportingFFBCondition
Description: "Døgnrytme - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* code = $KLFFB#e6f82424-da5a-41d1-bd1a-5796aa79d5f2
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: 6f77529a-d449-4e86-aaed-28b524090a32
InstanceOf: KLReportingFFBCondition
Description: "Tobak - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* code = $KLFFB#f5b8e809-7689-4952-838c-a069c99408b3
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: 6468d4a7-012e-4639-8dcf-dcec775385a0
InstanceOf: KLReportingFFBCondition
Description: "Interesser - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* code = $KLFFB#52efa2e9-e0dc-41eb-8c01-9865e2fdebae
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: b68548a8-b792-4aba-8358-b83a4e691b7c
InstanceOf: KLReportingFFBCondition
Description: "Familiesituation - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* code = $KLFFB#7a8f247b-baf8-4552-95bb-acf8ef004b74
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: ec5efa29-6355-40c7-ada4-b534901242ab
InstanceOf: KLReportingFFBCondition
Description: "Boligområde - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* code = $KLFFB#83342ff3-5f2e-4914-b045-e98357685866
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: 47d82311-ba67-49c4-aacc-ab3b171b4524
InstanceOf: KLReportingFFBCondition
Description: "Personer i netværk - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* code = $KLFFB#df194a84-6e4b-4f14-a194-d8d9d9a1fcad
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: 3a0e2994-9f3f-44ab-a684-06bb85c7bf9d
InstanceOf: KLReportingFFBCondition
Description: "Indgå i samspil og kontakt - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* severity = $KLFFB#5bdde847-2837-416b-ab63-bbff8b7aa531 // Moderat nedsat funktionsevne
* code = $KLFFB#3f9da5ac-9686-4eeb-b517-b46e17fcb1d7
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: 101f2519-adf9-43ba-b4f5-90f3917129c1
InstanceOf: KLReportingFFBCondition
Description: "Varetage beskæftigelse - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* severity = $KLFFB#8328ce4a-6238-4f73-bf1a-74aadb68eff8 // Let nedsat funktionsevne
* code = $KLFFB#685e8517-2f5c-4ef8-a7c4-fa2d008fdd9d
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: e162f02a-6f82-4aed-97cd-a47a43c58413
InstanceOf: KLReportingFFBCondition
Description: "Spise - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* severity = $KLFFB#cae545f5-2813-4d79-98fc-0a7d770af3cd // Svært nedsat funktionsevne
* code = $KLFFB#464a2ab6-a7df-4b3a-b74d-7873f4cfe668
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: a2c6378d-66da-4aa8-b973-729687224ab0
InstanceOf: KLReportingFFBCondition
Description: "Købe ind - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* severity = $KLFFB#5bdde847-2837-416b-ab63-bbff8b7aa531 // Moderat nedsat funktionsevne
* code = $KLFFB#01770afa-cd17-41fe-a966-b8895e4d55d8
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

Instance: 4908c9b2-fadc-4228-adbe-69ed9ef70ff3
InstanceOf: KLReportingFFBCondition
Description: "Færdes med transportmidler - 28/5"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* severity = $KLFFB#cae545f5-2813-4d79-98fc-0a7d770af3cd // Svært nedsat funktionsevne
* code = $KLFFB#eff3385d-01fa-4c9c-9850-52e179243f21
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z

// --- InformationGathering ------------------------------------------------------------------------------------------

Instance: 26d1a3de-0bd0-43d6-b52c-9c5687f01e45
InstanceOf: KLReportingFFBInformationGathering
Description: "Børge Mogensen case - second encounter"
Usage: #inline
* extension[basedOnServiceRequest].valueReference = Reference(9947191b-270a-4f64-9b05-8be29e7f5c58)
* status = #in-progress
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* effectiveDateTime = 2021-05-26T13:04:04Z
* finding[+].itemReference = Reference(57dc36db-56ce-4a4a-95e8-2d2c8a85871a)  // Bevidsthedstilstand
* finding[+].itemReference = Reference(00b972ba-0b06-4000-83f9-b733700c96e0)  // Intellektuelle funktioner
* finding[+].itemReference = Reference(45b460b2-843e-48ec-8366-a3d184bf591f)  // Problemløsning
* finding[+].itemReference = Reference(5089bbd1-6ec1-4f4d-a83e-4a89f44c482e)  // Syn
* finding[+].itemReference = Reference(5b74d267-952d-487f-969a-68ea6a9aae39)  // Døgnrytme
* finding[+].itemReference = Reference(6f77529a-d449-4e86-aaed-28b524090a32)  // Tobak
* finding[+].itemReference = Reference(6468d4a7-012e-4639-8dcf-dcec775385a0)  // Interesser
* finding[+].itemReference = Reference(b68548a8-b792-4aba-8358-b83a4e691b7c)  // Familiesituation
* finding[+].itemReference = Reference(ec5efa29-6355-40c7-ada4-b534901242ab)  // Boligområde
* finding[+].itemReference = Reference(47d82311-ba67-49c4-aacc-ab3b171b4524)  // Personer i netværk
* finding[+].itemReference = Reference(3a0e2994-9f3f-44ab-a684-06bb85c7bf9d)  // Indgå i samspil og kontakt
* finding[+].itemReference = Reference(101f2519-adf9-43ba-b4f5-90f3917129c1)  // Varetage beskæftigelse
* finding[+].itemReference = Reference(e162f02a-6f82-4aed-97cd-a47a43c58413)  // Spise
* finding[+].itemReference = Reference(a2c6378d-66da-4aa8-b973-729687224ab0)  // Købe ind
* finding[+].itemReference = Reference(4908c9b2-fadc-4228-adbe-69ed9ef70ff3)  // Færdes med transportmidler

// ===================================================================================================================
// 3rd Encounter
// ===================================================================================================================

Instance: 4b4e5f33-a9a2-42f6-b598-180543029ae5
InstanceOf: KLReportingFFBDeliveryReport
Title: "3rd encounter"
Description: "3rd encounter / Third documentation phase – Case assesment"
* type = #collection
* timestamp = 2021-05-29T12:13:41Z
* insert CitizenEntry(da16c0a1-840a-46b0-98b3-761e4501b343)
* insert ServiceRequestEntry(9947191b-270a-4f64-9b05-8be29e7f5c58)
* insert ConditionEntry(57dc36db-56ce-4a4a-95e8-2d2c8a85871a) // Bevidsthedstilstand
* insert ConditionEntry(00b972ba-0b06-4000-83f9-b733700c96e0) // Intellektuelle funktioner
* insert ConditionEntry(45b460b2-843e-48ec-8366-a3d184bf591f) // Problemløsning
* insert ConditionEntry(5089bbd1-6ec1-4f4d-a83e-4a89f44c482e) // Syn
* insert ConditionEntry(5b74d267-952d-487f-969a-68ea6a9aae39) // Døgnrytme
* insert ConditionEntry(6f77529a-d449-4e86-aaed-28b524090a32) // Tobak
* insert ConditionEntry(6468d4a7-012e-4639-8dcf-dcec775385a0) // Interesser
* insert ConditionEntry(b68548a8-b792-4aba-8358-b83a4e691b7c) // Familiesituation
* insert ConditionEntry(ec5efa29-6355-40c7-ada4-b534901242ab) // Boligområde
* insert ConditionEntry(47d82311-ba67-49c4-aacc-ab3b171b4524) // Personer i netværk
* insert ConditionEntry(3a0e2994-9f3f-44ab-a684-06bb85c7bf9d)  // Indgå i samspil og kontakt
* insert ConditionEntry(101f2519-adf9-43ba-b4f5-90f3917129c1)  // Varetage beskæftigelse
* insert ConditionEntry(e162f02a-6f82-4aed-97cd-a47a43c58413)  // Spise
* insert ConditionEntry(a2c6378d-66da-4aa8-b973-729687224ab0)  // Købe ind
* insert ConditionEntry(4908c9b2-fadc-4228-adbe-69ed9ef70ff3)  // Færdes med transportmidler
* insert GoalEntry(83fdfed2-f182-4a11-8ea1-de8181e6eab9) // Fastholde - Indgå i samspil og kontakt
* insert GoalEntry(fcbf670a-f310-485b-b717-07c027c3c808) // Udvikle - Købe ind
* insert GoalEntry(90fa089a-1f80-40d0-96db-8e875e241b06) // Begrænse tab - Spise
* insert ClinicalImpressionEntryVersion(26d1a3de-0bd0-43d6-b52c-9c5687f01e45, v3)
* insert ObservationEntry(213d0504-1a41-4330-b9a0-347d3ba4bb2a) // Let støttebehov

// --- InterventionGoals ---------------------------------------------------------------------------------------------

Instance: 83fdfed2-f182-4a11-8ea1-de8181e6eab9
InstanceOf: KLReportingFFBInterventionGoal
Description: "Fastholde - Indgå i samspil og kontakt - 29/5"
Usage: #inline
* lifecycleStatus = $goalStatus#active
* description.coding = $snomedCT#410518001
* category = $KLCommon#0bb3daef-538d-45dc-b444-abdbcb63f6bc "FFB indsatsmål"
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* target[changeValueSlice].measure = $KLCommon#90c48f03-f194-4b2f-ad7d-6cba1069ae48
* target[changeValueSlice].detailCodeableConcept = $KLFFB#10752a63-00b4-4958-b7f4-9f3a18f74266 // Fastholde funktionsevne
* target[severitySlice].measure = $KLCommon#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target[severitySlice].detailCodeableConcept = $KLFFB#8328ce4a-6238-4f73-bf1a-74aadb68eff8 // Let nedsat funktionsevne
* addresses[+] = Reference(3a0e2994-9f3f-44ab-a684-06bb85c7bf9d)
* addresses[=].extension[ConditionRank].valuePositiveInt = 1
* addresses[+] = Reference(101f2519-adf9-43ba-b4f5-90f3917129c1)
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(4908c9b2-fadc-4228-adbe-69ed9ef70ff3)
* addresses[=].extension[ConditionRank].valuePositiveInt = 2

Instance: fcbf670a-f310-485b-b717-07c027c3c808
InstanceOf: KLReportingFFBInterventionGoal
Description: "Udvikle - Købe ind - 29/5"
Usage: #inline
* lifecycleStatus = $goalStatus#active
* description.coding = $snomedCT#410518001
* category = $KLCommon#0bb3daef-538d-45dc-b444-abdbcb63f6bc "FFB indsatsmål"
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* target[changeValueSlice].measure = $KLCommon#90c48f03-f194-4b2f-ad7d-6cba1069ae48
* target[changeValueSlice].detailCodeableConcept = $KLFFB#d41c8072-52f8-42b5-9375-ddbea454d27f // Udvikle funktionsevne
* target[severitySlice].measure = $KLCommon#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target[severitySlice].detailCodeableConcept = $KLFFB#b508ff66-6326-4862-a6d7-7bbf184c9823 // Ingen nedsat funktionsevne
* addresses[+] = Reference(a2c6378d-66da-4aa8-b973-729687224ab0)
* addresses[=].extension[ConditionRank].valuePositiveInt = 1

Instance: 90fa089a-1f80-40d0-96db-8e875e241b06
InstanceOf: KLReportingFFBInterventionGoal
Description: "Begrænse tab - Spise - 29/5"
Usage: #inline
* lifecycleStatus = $goalStatus#active
* description.coding = $snomedCT#410518001
* category = $KLCommon#0bb3daef-538d-45dc-b444-abdbcb63f6bc "FFB indsatsmål"
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* target[changeValueSlice].measure = $KLCommon#90c48f03-f194-4b2f-ad7d-6cba1069ae48
* target[changeValueSlice].detailCodeableConcept = $KLFFB#e47c22bd-d88d-48ab-882b-419923e1f44e // Begrænse tab af funktionsevne
* target[severitySlice].measure = $KLCommon#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target[severitySlice].detailCodeableConcept = $KLFFB#cae545f5-2813-4d79-98fc-0a7d770af3cd // Svært nedsat funktionsevne
* addresses[+] = Reference(e162f02a-6f82-4aed-97cd-a47a43c58413)
* addresses[=].extension[ConditionRank].valuePositiveInt = 1

// --- InformationGathering v3 ---------------------------------------------------------------------------------------

Instance: 26d1a3de-0bd0-43d6-b52c-9c5687f01e45-v3 // Fake id
InstanceOf: KLReportingFFBInformationGathering
Description: "Børge Mogensen case - third encounter"
Usage: #inline
* id = "26d1a3de-0bd0-43d6-b52c-9c5687f01e45" // Real id
* extension[basedOnServiceRequest].valueReference = Reference(9947191b-270a-4f64-9b05-8be29e7f5c58)
* status = #completed
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* effectiveDateTime = 2021-05-29T11:54:13Z
* finding[+].itemReference = Reference(57dc36db-56ce-4a4a-95e8-2d2c8a85871a)  // Bevidsthedstilstand
* finding[+].itemReference = Reference(00b972ba-0b06-4000-83f9-b733700c96e0)  // Intellektuelle funktioner
* finding[+].itemReference = Reference(45b460b2-843e-48ec-8366-a3d184bf591f)  // Problemløsning
* finding[+].itemReference = Reference(5089bbd1-6ec1-4f4d-a83e-4a89f44c482e)  // Syn
* finding[+].itemReference = Reference(5b74d267-952d-487f-969a-68ea6a9aae39)  // Døgnrytme
* finding[+].itemReference = Reference(6f77529a-d449-4e86-aaed-28b524090a32)  // Tobak
* finding[+].itemReference = Reference(6468d4a7-012e-4639-8dcf-dcec775385a0)  // Interesser
* finding[+].itemReference = Reference(b68548a8-b792-4aba-8358-b83a4e691b7c)  // Familiesituation
* finding[+].itemReference = Reference(ec5efa29-6355-40c7-ada4-b534901242ab)  // Boligområde
* finding[+].itemReference = Reference(47d82311-ba67-49c4-aacc-ab3b171b4524)  // Personer i netværk
* finding[+].itemReference = Reference(3a0e2994-9f3f-44ab-a684-06bb85c7bf9d)  // Indgå i samspil og kontakt
* finding[+].itemReference = Reference(101f2519-adf9-43ba-b4f5-90f3917129c1)  // Varetage beskæftigelse
* finding[+].itemReference = Reference(e162f02a-6f82-4aed-97cd-a47a43c58413)  // Spise
* finding[+].itemReference = Reference(a2c6378d-66da-4aa8-b973-729687224ab0)  // Købe ind
* finding[+].itemReference = Reference(4908c9b2-fadc-4228-adbe-69ed9ef70ff3)  // Færdes med transportmidler
* investigation[+].item = Reference(213d0504-1a41-4330-b9a0-347d3ba4bb2a) // Let støttebehov
* investigation[=].code.coding = $KLCommon#effe55c7-572c-4a99-8fb4-2a9dda2f6572 "FFB støttebehovsvurdering"

// --- CareEvaluation ------------------------------------------------------------------------------------------------

Instance: 213d0504-1a41-4330-b9a0-347d3ba4bb2a
InstanceOf: KLReportingFFBCareEvaluation
Description: "Støttebehovsvurdering for Børge Mogensen"
Usage: #inline
* status = $observationStatus#final
* code.coding = $KLCommon#effe55c7-572c-4a99-8fb4-2a9dda2f6572 "FFB støttebehovsvurdering"
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* valueCodeableConcept = $KLFFB#dd628e73-d6c9-4837-a2b8-aa62d73bd6ae // Let støttebehov
* effectiveDateTime = 2021-05-29T11:54:13Z

// ===================================================================================================================
// 4th Encounter
// ===================================================================================================================

// --- TargetGroups --------------------------------------------------------------------------------------------------

Instance: 76cecdcc-321c-479f-ae95-a8f020541650
InstanceOf: KLReportingFFBTargetGroup
Description: "Anden udviklingsforstyrrelse"
Usage: #inline
* code = $KLFFB#5cfc9530-a193-4f66-9981-3b980ee9ea7b
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-29

Instance: 18045390-e599-4b7a-95f2-287f41146975
InstanceOf: KLReportingFFBTargetGroup
Description: "Anden fysisk funktionsnedsættelse"
Usage: #inline
* code = $KLFFB#5cfc9530-a193-4f66-9981-3b980ee9ea7b
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-29

Instance: 787bb5e8-cb82-4e21-9459-285e5e14b814
InstanceOf: KLReportingFFBTargetGroup
Description: "Selvmordstanker eller -forsøg"
Usage: #inline
* code = $KLFFB#5e95db73-4d16-4084-93a3-595c0650b160
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-29

// ===================================================================================================================
// 5th Encounter
// ===================================================================================================================

Instance: 5bf6a186-ee66-4b0e-ba6e-623972ab5130
InstanceOf: KLReportingFFBDeliveryReport
Title: "5th encounter"
Description: "5th encounter / Fifth documentation phase – Case appropriation"
* type = #collection
* timestamp = 2021-05-29T17:13:41Z
* insert CitizenEntry(da16c0a1-840a-46b0-98b3-761e4501b343)
* insert ConditionEntry(76cecdcc-321c-479f-ae95-a8f020541650) // Anden udviklingsforstyrrelse
* insert ConditionEntry(18045390-e599-4b7a-95f2-287f41146975) // Anden fysisk funktionsnedsættelse
* insert ConditionEntry(787bb5e8-cb82-4e21-9459-285e5e14b814) // Selvmordstanker eller -forsøg
* insert ObservationEntry(213d0504-1a41-4330-b9a0-347d3ba4bb2a) // Let støttebehov
* insert CarePlanEntry(6ef8bead-fb42-4dbe-919f-e4a1f94135e2) // Støtte til daglige opgaver i hjemmet
* insert CarePlanEntry(b4ec722a-3cb4-4e9d-8a3b-58ebdb329361) // Støtte til sund levevis
* insert CarePlanEntry(e9374e0c-fea8-48d5-a545-6f893d527e98) // Social aktivitet
* insert CareTeamEntry(31a46e2d-0d54-4600-8ecb-1b239749cfd1) // Almindeligt længerevarende botilbud til voksne
* insert CareTeamEntry(9f4982de-34fd-440b-9980-fa72b51673eb) // Aktivitets- og samværstilbud
* insert EncounterEntry(ef6a3536-ecaa-49c5-ace1-53e19acb4cd1) // FollowUp on 29/8-2021
* insert CarePlanEntry(944c7c24-37b4-455e-9319-cd9f35a7aec9) // Botilbud
* insert CarePlanEntry(8ea1d7f3-3c40-4826-bf35-d16b313610d4) // Dagtilbud

// --- CareTeams -----------------------------------------------------------------------------------------------------
Instance: 31a46e2d-0d54-4600-8ecb-1b239749cfd1
InstanceOf: KLReportingFFBServicePerformer
Description: "Almindeligt længerevarende botilbud til voksne"
Usage: #inline
* category = $KLFFB#498fe92c-d7f7-41cd-9404-5b38fe113be0 // Almindeligt længerevarende botilbud til voksne
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)

Instance: 9f4982de-34fd-440b-9980-fa72b51673eb
InstanceOf: KLReportingFFBServicePerformer
Description: "Aktivitets- og samværstilbud"
Usage: #inline
* category = $KLFFB#9401777d-bdc5-4f52-9804-63c8cae9a792 // Aktivitets- og samværstilbud
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)

// --- CarePlans -----------------------------------------------------------------------------------------------------

Instance: 944c7c24-37b4-455e-9319-cd9f35a7aec9
InstanceOf: KLReportingFFBCarePlan
Description: "Børge Mogensen - Care Plan - Botilbud"
Usage: #inline
* extension[municipalityCaseNumber].extension[municipalitySpecific].valueIdentifier
  * system = "http://example.dk/identifier/case"
  * value = "Sag154689"
* extension[followUpDate].valueReference = Reference(ef6a3536-ecaa-49c5-ace1-53e19acb4cd1) // FollowUp on 29/8-2021
* status = $requestStatus#active
* intent = $requestIntent#plan
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* period.start = 2021-05-29
* careTeam[+] = Reference(31a46e2d-0d54-4600-8ecb-1b239749cfd1) // Almindeligt længerevarende botilbud til voksne
* addresses[+] = Reference(76cecdcc-321c-479f-ae95-a8f020541650) // Anden udviklingsforstyrrelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 1
* addresses[+] = Reference(18045390-e599-4b7a-95f2-287f41146975) // Anden fysisk funktionsnedsættelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(787bb5e8-cb82-4e21-9459-285e5e14b814) // Selvmordstanker eller -forsøg
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* activity.outcomeReference = Reference(213d0504-1a41-4330-b9a0-347d3ba4bb2a) // Let støttebehov

Instance: 8ea1d7f3-3c40-4826-bf35-d16b313610d4
InstanceOf: KLReportingFFBCarePlan
Description: "Børge Mogensen - Care Plan - Dagtilbud"
Usage: #inline
* extension[municipalityCaseNumber].extension[municipalitySpecific].valueIdentifier
  * system = "http://example.dk/identifier/case"
  * value = "Sag154689"
* extension[followUpDate].valueReference = Reference(ef6a3536-ecaa-49c5-ace1-53e19acb4cd1) // FollowUp on 29/8-2021
* status = $requestStatus#active
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* period.start = 2021-05-29
* careTeam[+] = Reference(9f4982de-34fd-440b-9980-fa72b51673eb) // Aktivitets- og samværstilbud
* addresses[+] = Reference(76cecdcc-321c-479f-ae95-a8f020541650) // Anden udviklingsforstyrrelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 1
* addresses[+] = Reference(18045390-e599-4b7a-95f2-287f41146975) // Anden fysisk funktionsnedsættelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(787bb5e8-cb82-4e21-9459-285e5e14b814) // Selvmordstanker eller -forsøg
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* activity.outcomeReference = Reference(213d0504-1a41-4330-b9a0-347d3ba4bb2a)

// --- FollowUpEncounter ---------------------------------------------------------------------------------------------

Instance: ef6a3536-ecaa-49c5-ace1-53e19acb4cd1
InstanceOf: KLReportingFFBFollowUpEncounter
Description: "Opfølgning på Børge Mogensen"
Usage: #inline
* status = #planned
* class = $v3ActCode#HH
* type.coding = $KLCommon#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* period.start = 2021-08-29

// --- Interventions -------------------------------------------------------------------------------------------------

Instance: 6ef8bead-fb42-4dbe-919f-e4a1f94135e2
InstanceOf: KLReportingFFBIntervention
Description: "Støtte til daglige opgaver i hjemmet"
Usage: #inline
* basedOn = Reference(944c7c24-37b4-455e-9319-cd9f35a7aec9)
* status = $requestStatus#active
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* created = 2021-05-29T16:10:23Z
* period.start = 2021-05-29
* activity.detail.code = $KLFFB#638f44df-6bf2-47f8-9935-b8fdc83e5bf5
* activity.detail.status = $carePlanActivityStatus#in-progress

Instance: b4ec722a-3cb4-4e9d-8a3b-58ebdb329361
InstanceOf: KLReportingFFBIntervention
Description: "Støtte til sund levevis"
Usage: #inline
* basedOn = Reference(944c7c24-37b4-455e-9319-cd9f35a7aec9)
* status = $requestStatus#active
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* created = 2021-05-29T16:10:23Z
* period.start = 2021-05-29
* activity.detail.code = $KLFFB#3c1639d0-e486-43c6-8add-448b8aff4b8f
* activity.detail.status = $carePlanActivityStatus#in-progress

Instance: e9374e0c-fea8-48d5-a545-6f893d527e98
InstanceOf: KLReportingFFBIntervention
Description: "Social aktivitet"
Usage: #inline
* basedOn = Reference(8ea1d7f3-3c40-4826-bf35-d16b313610d4)
* status = $requestStatus#active
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* created = 2021-05-29T16:10:23Z
* period.start = 2021-05-29
* activity.detail.code = $KLFFB#7e419926-bb04-4829-99c9-95ea20403c2c
* activity.detail.status = $carePlanActivityStatus#in-progress


// ===================================================================================================================
// 6th Encounter
// ===================================================================================================================

Instance: aaa5d153-968e-46ec-9f9e-cfc6e93a3f1b
InstanceOf: KLReportingFFBDeliveryReport
Title: "6th encounter"
Description: "6th encounter / Sixth documentation phase – Case delivery"
* type = #collection
* timestamp = 2021-06-18T16:53:11Z
* insert CitizenEntry(da16c0a1-840a-46b0-98b3-761e4501b343)
* insert ServiceRequestEntry(9947191b-270a-4f64-9b05-8be29e7f5c58)
* insert ConditionEntry(57dc36db-56ce-4a4a-95e8-2d2c8a85871a) // Bevidsthedstilstand
* insert ConditionEntry(00b972ba-0b06-4000-83f9-b733700c96e0) // Intellektuelle funktioner
* insert ConditionEntry(45b460b2-843e-48ec-8366-a3d184bf591f) // Problemløsning
* insert ConditionEntry(5089bbd1-6ec1-4f4d-a83e-4a89f44c482e) // Syn
* insert ConditionEntry(5b74d267-952d-487f-969a-68ea6a9aae39) // Døgnrytme
* insert ConditionEntry(6f77529a-d449-4e86-aaed-28b524090a32) // Tobak
* insert ConditionEntry(6468d4a7-012e-4639-8dcf-dcec775385a0) // Interesser
* insert ConditionEntry(b68548a8-b792-4aba-8358-b83a4e691b7c) // Familiesituation
* insert ConditionEntry(ec5efa29-6355-40c7-ada4-b534901242ab) // Boligområde
* insert ConditionEntry(47d82311-ba67-49c4-aacc-ab3b171b4524) // Personer i netværk
* insert ConditionEntryVersion(3a0e2994-9f3f-44ab-a684-06bb85c7bf9d, v2)  // Indgå i samspil og kontakt
* insert ConditionEntry(101f2519-adf9-43ba-b4f5-90f3917129c1)  // Varetage beskæftigelse
* insert ConditionEntry(e162f02a-6f82-4aed-97cd-a47a43c58413)  // Spise
* insert ConditionEntry(a2c6378d-66da-4aa8-b973-729687224ab0)  // Købe ind
* insert ConditionEntry(4908c9b2-fadc-4228-adbe-69ed9ef70ff3)  // Færdes med transportmidler
* insert ClinicalImpressionEntry(96a38e6e-3fe4-4773-a7c7-ded60607d259)
* insert ConditionEntry(76cecdcc-321c-479f-ae95-a8f020541650) // Anden udviklingsforstyrrelse
* insert ConditionEntry(18045390-e599-4b7a-95f2-287f41146975) // Anden fysisk funktionsnedsættelse
* insert ConditionEntry(787bb5e8-cb82-4e21-9459-285e5e14b814) // Selvmordstanker eller -forsøg
* insert ObservationEntry(213d0504-1a41-4330-b9a0-347d3ba4bb2a) // Let støttebehov
* insert GoalEntry(76b9d91b-4b28-4c4a-944c-aa16b8cca82c) // Udvikle - Indgå i samspil og kontakt
* insert CarePlanEntryVersion(e9374e0c-fea8-48d5-a545-6f893d527e98, v2) // Social aktivitet
* insert CarePlanEntry(629c659a-8be2-44e9-a852-3efa2d95f856) // Kompetenceudviklende aktivitet
* insert CareTeamEntry(31a46e2d-0d54-4600-8ecb-1b239749cfd1) // Almindeligt længerevarende botilbud til voksne
* insert CareTeamEntry(9f4982de-34fd-440b-9980-fa72b51673eb) // Aktivitets- og samværstilbud
* insert EncounterEntry(ef6a3536-ecaa-49c5-ace1-53e19acb4cd1) // FollowUp on 29/8-2021
* insert ObservationEntry(a03a8641-e845-45c3-a7a9-16bf077af069) // Follow-up result on Botilbud
* insert ObservationEntry(e20ebaba-0622-43f5-ad55-7d56eb750ff3) // Follow-up result on Dagtilbud
* insert CarePlanEntry(944c7c24-37b4-455e-9319-cd9f35a7aec9) // Botilbud
* insert CarePlanEntryVersion(8ea1d7f3-3c40-4826-bf35-d16b313610d4, v2) // Previous Dagtilbud 
* insert CarePlanEntry(d54a2bb0-4fdc-4ea8-adaf-1241836a94f5) // New Dagtilbud

// --- Conditions -----------------------------------------------------------------------------------------------------

Instance: 3a0e2994-9f3f-44ab-a684-06bb85c7bf9d-v2
InstanceOf: KLReportingFFBCondition
Description: "Indgå i samspil og kontakt - 18/6"
Usage: #inline
* id = "3a0e2994-9f3f-44ab-a684-06bb85c7bf9d" // Real id
* clinicalStatus = $conditionClinical#active
* verificationStatus = $conditionVerStatus#confirmed
* severity = $KLFFB#5bdde847-2837-416b-ab63-bbff8b7aa531 // Moderat nedsat funktionsevne
* code = $KLFFB#3f9da5ac-9686-4eeb-b517-b46e17fcb1d7
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* recordedDate = 2021-05-28T09:17:33Z
* extension[conditionLastAssertedDate].valueDateTime = 2021-06-18

// --- InformationGathering -------------------------------------------------------------------------------------------

Instance: 96a38e6e-3fe4-4773-a7c7-ded60607d259
InstanceOf: KLReportingFFBInformationGathering
Description: "Børge Mogensen case - third encounter"
Usage: #inline
* extension[basedOnServiceRequest].valueReference = Reference(9947191b-270a-4f64-9b05-8be29e7f5c58)
* status = #in-progress
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* effectiveDateTime = 2021-06-18T16:53:11Z
* finding[+].itemReference = Reference(57dc36db-56ce-4a4a-95e8-2d2c8a85871a)  // Bevidsthedstilstand
* finding[+].itemReference = Reference(00b972ba-0b06-4000-83f9-b733700c96e0)  // Intellektuelle funktioner
* finding[+].itemReference = Reference(45b460b2-843e-48ec-8366-a3d184bf591f)  // Problemløsning
* finding[+].itemReference = Reference(5089bbd1-6ec1-4f4d-a83e-4a89f44c482e)  // Syn
* finding[+].itemReference = Reference(5b74d267-952d-487f-969a-68ea6a9aae39)  // Døgnrytme
* finding[+].itemReference = Reference(6f77529a-d449-4e86-aaed-28b524090a32)  // Tobak
* finding[+].itemReference = Reference(6468d4a7-012e-4639-8dcf-dcec775385a0)  // Interesser
* finding[+].itemReference = Reference(b68548a8-b792-4aba-8358-b83a4e691b7c)  // Familiesituation
* finding[+].itemReference = Reference(ec5efa29-6355-40c7-ada4-b534901242ab)  // Boligområde
* finding[+].itemReference = Reference(47d82311-ba67-49c4-aacc-ab3b171b4524)  // Personer i netværk
* finding[+].itemReference = Reference(3a0e2994-9f3f-44ab-a684-06bb85c7bf9d)  // Indgå i samspil og kontakt
* finding[+].itemReference = Reference(101f2519-adf9-43ba-b4f5-90f3917129c1)  // Varetage beskæftigelse
* finding[+].itemReference = Reference(e162f02a-6f82-4aed-97cd-a47a43c58413)  // Spise
* finding[+].itemReference = Reference(a2c6378d-66da-4aa8-b973-729687224ab0)  // Købe ind
* finding[+].itemReference = Reference(4908c9b2-fadc-4228-adbe-69ed9ef70ff3)  // Færdes med transportmidler

// --- InterventionGoal -----------------------------------------------------------------------------------------------

Instance: 76b9d91b-4b28-4c4a-944c-aa16b8cca82c
InstanceOf: KLReportingFFBInterventionGoal
Description: "Udvikle - Indgå i samspil og kontakt - 18/6"
Usage: #inline
* lifecycleStatus = $goalStatus#active
* description.coding = $snomedCT#410518001
* category = $KLCommon#0bb3daef-538d-45dc-b444-abdbcb63f6bc "FFB indsatsmål"
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* target[changeValueSlice].measure = $KLCommon#90c48f03-f194-4b2f-ad7d-6cba1069ae48
* target[changeValueSlice].detailCodeableConcept = $KLFFB#d41c8072-52f8-42b5-9375-ddbea454d27f // Udvikle funktionsevne
* target[severitySlice].measure = $KLCommon#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target[severitySlice].detailCodeableConcept = $KLFFB#b508ff66-6326-4862-a6d7-7bbf184c9823 // Ingen nedsat funktionsevne
* addresses[+] = Reference(3a0e2994-9f3f-44ab-a684-06bb85c7bf9d)
* addresses[=].extension[ConditionRank].valuePositiveInt = 1
* addresses[+] = Reference(101f2519-adf9-43ba-b4f5-90f3917129c1)
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(4908c9b2-fadc-4228-adbe-69ed9ef70ff3)
* addresses[=].extension[ConditionRank].valuePositiveInt = 2

// --- Intervention ---------------------------------------------------------------------------------------------------
Instance: e9374e0c-fea8-48d5-a545-6f893d527e98-v2 // Fake id
InstanceOf: KLReportingFFBIntervention
Description: "Social aktivitet"
Usage: #inline
* id = "e9374e0c-fea8-48d5-a545-6f893d527e98" // Real id
* basedOn = Reference(944c7c24-37b4-455e-9319-cd9f35a7aec9)
* status = $requestStatus#active
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* created = 2021-05-29T16:10:23Z
* period.start = 2021-05-29
* period.end = 2021-06-18
* activity.detail.code = $KLFFB#7e419926-bb04-4829-99c9-95ea20403c2c
* activity.detail.status = $carePlanActivityStatus#in-progress

Instance: 629c659a-8be2-44e9-a852-3efa2d95f856
InstanceOf: KLReportingFFBIntervention
Description: "Kompetenceudviklende aktivitet"
Usage: #inline
* basedOn = Reference(d54a2bb0-4fdc-4ea8-adaf-1241836a94f5)
* status = $requestStatus#active
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* created = 2021-06-18T15:04:47Z
* period.start = 2021-06-18
* activity.detail.code = $KLFFB#f25674bf-3162-45c3-bde4-6d542bf9629b
* activity.detail.status = $carePlanActivityStatus#in-progress

// --- Follow-up -----------------------------------------------------------------------------------------------------
Instance: a03a8641-e845-45c3-a7a9-16bf077af069
InstanceOf: KLReportingFFBFollowUp
Description: "Follow-up result - Continue Botilbud"
Usage: #inline
* status = #final
* code.coding = $snomedCT#712744002
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* focus = Reference(944c7c24-37b4-455e-9319-cd9f35a7aec9)
* effectiveDateTime = 2021-06-18
* valueCodeableConcept = $KLFFB#1e971d84-10a4-4ef8-a8b3-0daa4c7d088a	"Træf afgørelse om fortsættelse af indsats"

Instance: e20ebaba-0622-43f5-ad55-7d56eb750ff3
InstanceOf: KLReportingFFBFollowUp
Description: "Follow-up result - Change Dagtilbud"
Usage: #inline
* status = #final
* code.coding = $snomedCT#712744002
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* focus = Reference(8ea1d7f3-3c40-4826-bf35-d16b313610d4)
* effectiveDateTime = 2021-06-18
* valueCodeableConcept = $KLFFB#b4c01aa8-82fd-44e4-83ff-ca19ec02c779	"Træf afgørelse om afslutning af indsats og visiter til ny"

// --- CarePlan ------------------------------------------------------------------------------------------------------
Instance: 8ea1d7f3-3c40-4826-bf35-d16b313610d4-v2 // Fake id
InstanceOf: KLReportingFFBCarePlan
Description: "Børge Mogensen - Care Plan - Dagtilbud"
Usage: #inline
* id = "8ea1d7f3-3c40-4826-bf35-d16b313610d4" // Real id
* extension[municipalityCaseNumber].extension[municipalitySpecific].valueIdentifier
  * system = "http://example.dk/identifier/case"
  * value = "Sag154689"
* status = $requestStatus#completed
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* period.start = 2021-05-29
* period.end = 2021-06-18
* careTeam[+] = Reference(9f4982de-34fd-440b-9980-fa72b51673eb) // Aktivitets- og samværstilbud
* addresses[+] = Reference(76cecdcc-321c-479f-ae95-a8f020541650) // Anden udviklingsforstyrrelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 1
* addresses[+] = Reference(18045390-e599-4b7a-95f2-287f41146975) // Anden fysisk funktionsnedsættelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(787bb5e8-cb82-4e21-9459-285e5e14b814) // Selvmordstanker eller -forsøg
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* activity.outcomeReference = Reference(213d0504-1a41-4330-b9a0-347d3ba4bb2a) // Let støttebehov

Instance: d54a2bb0-4fdc-4ea8-adaf-1241836a94f5
InstanceOf: KLReportingFFBCarePlan
Description: "Børge Mogensen - Care Plan - New Dagtilbud"
Usage: #inline
* extension[municipalityCaseNumber].extension[municipalitySpecific].valueIdentifier
  * system = "http://example.dk/identifier/case"
  * value = "Sag154689"
* extension[followUpDate].valueReference = Reference(ef6a3536-ecaa-49c5-ace1-53e19acb4cd1) // FollowUp on 29/8-2021
* status = $requestStatus#active
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* period.start = 2021-06-18
* careTeam[+] = Reference(9f4982de-34fd-440b-9980-fa72b51673eb) // Aktivitets- og samværstilbud
* addresses[+] = Reference(76cecdcc-321c-479f-ae95-a8f020541650) // Anden udviklingsforstyrrelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 1
* addresses[+] = Reference(18045390-e599-4b7a-95f2-287f41146975) // Anden fysisk funktionsnedsættelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(787bb5e8-cb82-4e21-9459-285e5e14b814) // Selvmordstanker eller -forsøg
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* activity.outcomeReference = Reference(213d0504-1a41-4330-b9a0-347d3ba4bb2a) // Let støttebehov

// ===================================================================================================================
// 7th Encounter
// ===================================================================================================================

Instance: ae9cdbef-ca35-4dae-b5df-ffd938cf0098
InstanceOf: KLReportingFFBDeliveryReport
Title: "7th encounter"
Description: "7th encounter / Seventh documentation phase – Case evaluation"
* type = #collection
* timestamp = 2021-08-30T18:03:31Z
* insert CitizenEntry(da16c0a1-840a-46b0-98b3-761e4501b343)
* insert ServiceRequestEntry(9947191b-270a-4f64-9b05-8be29e7f5c58)
* insert ClinicalImpressionEntry(753cbc43-8364-45be-9c21-cdb345e227ef)
* insert CarePlanEntryVersion(6ef8bead-fb42-4dbe-919f-e4a1f94135e2, v2) // Støtte til daglige opgaver i hjemmet
* insert CarePlanEntryVersion(b4ec722a-3cb4-4e9d-8a3b-58ebdb329361, v2) // Støtte til sund levevis
* insert CarePlanEntryVersion(629c659a-8be2-44e9-a852-3efa2d95f856, v2) // Kompetenceudviklende aktivitet
* insert ObservationEntry(e548c437-05e2-43d9-836f-5d3b4f8e331f) // Intet støttebehov
* insert ConditionEntry(76cecdcc-321c-479f-ae95-a8f020541650) // Anden udviklingsforstyrrelse
* insert ConditionEntry(18045390-e599-4b7a-95f2-287f41146975) // Anden fysisk funktionsnedsættelse
* insert ConditionEntry(787bb5e8-cb82-4e21-9459-285e5e14b814) // Selvmordstanker eller -forsøg
* insert CareTeamEntry(31a46e2d-0d54-4600-8ecb-1b239749cfd1) // Almindeligt længerevarende botilbud til voksne
* insert CareTeamEntry(9f4982de-34fd-440b-9980-fa72b51673eb) // Aktivitets- og samværstilbud
* insert CarePlanEntryVersion(944c7c24-37b4-455e-9319-cd9f35a7aec9, v2)

// --- InformationGathering ------------------------------------------------------------------------------------------

Instance: 753cbc43-8364-45be-9c21-cdb345e227ef
InstanceOf: KLReportingFFBInformationGathering
Description: "Børge Mogensen case - new assessment"
Usage: #inline
* extension[basedOnServiceRequest].valueReference = Reference(9947191b-270a-4f64-9b05-8be29e7f5c58)
* status = #completed
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* effectiveDateTime = 2021-05-26T13:04:04Z
* investigation[+].item = Reference(e548c437-05e2-43d9-836f-5d3b4f8e331f) // Intet støttebehov
* investigation[=].code.coding = $KLCommon#effe55c7-572c-4a99-8fb4-2a9dda2f6572 "FFB støttebehovsvurdering"

// --- Interventions -------------------------------------------------------------------------------------------------

Instance: 6ef8bead-fb42-4dbe-919f-e4a1f94135e2-v2 // Fake id
InstanceOf: KLReportingFFBIntervention
Description: "Støtte til daglige opgaver i hjemmet"
Usage: #inline
* id = "6ef8bead-fb42-4dbe-919f-e4a1f94135e2" // Real id
* basedOn = Reference(944c7c24-37b4-455e-9319-cd9f35a7aec9)
* status = $requestStatus#active
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* created = 2021-05-29T16:10:23Z
* period.start = 2021-05-29
* period.end = 2021-08-30
* activity.detail.code = $KLFFB#638f44df-6bf2-47f8-9935-b8fdc83e5bf5
* activity.detail.status = $carePlanActivityStatus#in-progress

Instance: b4ec722a-3cb4-4e9d-8a3b-58ebdb329361-v2 // Fake id
InstanceOf: KLReportingFFBIntervention
Description: "Støtte til sund levevis"
Usage: #inline
* id = "b4ec722a-3cb4-4e9d-8a3b-58ebdb329361" // Real id
* basedOn = Reference(944c7c24-37b4-455e-9319-cd9f35a7aec9)
* status = $requestStatus#active
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* created = 2021-05-29T16:10:23Z
* period.start = 2021-05-29
* period.end = 2021-08-30
* activity.detail.code = $KLFFB#3c1639d0-e486-43c6-8add-448b8aff4b8f
* activity.detail.status = $carePlanActivityStatus#in-progress

Instance: 629c659a-8be2-44e9-a852-3efa2d95f856-v2 // Fake id
InstanceOf: KLReportingFFBIntervention
Description: "Kompetenceudviklende aktivitet"
Usage: #inline
* id = "629c659a-8be2-44e9-a852-3efa2d95f856" // Real id
* basedOn = Reference(944c7c24-37b4-455e-9319-cd9f35a7aec9)
* status = $requestStatus#active
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* created = 2021-06-18T15:04:47Z
* period.start = 2021-06-18
* period.end = 2021-08-30
* activity.detail.code = $KLFFB#f25674bf-3162-45c3-bde4-6d542bf9629b
* activity.detail.status = $carePlanActivityStatus#in-progress

// --- CareEvaluation ------------------------------------------------------------------------------------------------

Instance: e548c437-05e2-43d9-836f-5d3b4f8e331f
InstanceOf: KLReportingFFBCareEvaluation
Description: "Ny støttebehovsvurdering for Børge Mogensen - 30/8"
Usage: #inline
* status = $observationStatus#final
* code.coding = $KLCommon#effe55c7-572c-4a99-8fb4-2a9dda2f6572 "FFB støttebehovsvurdering"
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* valueCodeableConcept = $KLFFB#ae9f388a-91c3-46cf-af55-f81952f2977c // Intet støttebehov
* effectiveDateTime = 2021-08-30T11:45:33Z

// --- CarePlan ------------------------------------------------------------------------------------------------------

Instance: 944c7c24-37b4-455e-9319-cd9f35a7aec9-v2 // Fake id
InstanceOf: KLReportingFFBCarePlan
Description: "Børge Mogensen - Care Plan"
Usage: #inline
* id = "944c7c24-37b4-455e-9319-cd9f35a7aec9" // Real id
* extension[municipalityCaseNumber].extension[municipalitySpecific].valueIdentifier
  * system = "http://example.dk/identifier/case"
  * value = "Sag154689"
* status = $requestStatus#completed
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* period.start = 2021-05-29
* period.end = 2021-08-30
* careTeam[+] = Reference(31a46e2d-0d54-4600-8ecb-1b239749cfd1) // Almindeligt længerevarende botilbud til voksne
* addresses[+] = Reference(76cecdcc-321c-479f-ae95-a8f020541650) // Anden udviklingsforstyrrelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 1
* addresses[+] = Reference(18045390-e599-4b7a-95f2-287f41146975) // Anden fysisk funktionsnedsættelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(787bb5e8-cb82-4e21-9459-285e5e14b814) // Selvmordstanker eller -forsøg
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* activity.outcomeReference = Reference(e548c437-05e2-43d9-836f-5d3b4f8e331f) // Intet støttebehov

Instance: d54a2bb0-4fdc-4ea8-adaf-1241836a94f5-v2 // Fake-id
InstanceOf: KLReportingFFBCarePlan
Description: "Børge Mogensen - Care Plan - New Dagtilbud"
Usage: #inline
* id = "d54a2bb0-4fdc-4ea8-adaf-1241836a94f5" // Real id
* extension[municipalityCaseNumber].extension[municipalitySpecific].valueIdentifier
  * system = "http://example.dk/identifier/case"
  * value = "Sag154689"
* status = $requestStatus#completed
* intent = $requestIntent#order
* subject = Reference(da16c0a1-840a-46b0-98b3-761e4501b343)
* period.start = 2021-06-18
* period.end = 2021-08-30
* careTeam[+] = Reference(9f4982de-34fd-440b-9980-fa72b51673eb) // Aktivitets- og samværstilbud
* addresses[+] = Reference(76cecdcc-321c-479f-ae95-a8f020541650) // Anden udviklingsforstyrrelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 1
* addresses[+] = Reference(18045390-e599-4b7a-95f2-287f41146975) // Anden fysisk funktionsnedsættelse
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(787bb5e8-cb82-4e21-9459-285e5e14b814) // Selvmordstanker eller -forsøg
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* activity.outcomeReference = Reference(e548c437-05e2-43d9-836f-5d3b4f8e331f) // Intet støttebehov


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBFollowUp.fsh

Profile: KLReportingFFBFollowUp
Parent: Observation
Id: kl-reporting-ffb-followUp
Title: "FollowUp"
Description: "Result of follow-up on a care plan"
* identifier ..0
* basedOn ..0
* partOf ..0
* category ..0
* status MS
* status ^definition = "The status of the result value. Shall be final or entered-in-error."
* code MS
* code.coding 1..1 MS
* code.coding = $snomedCT#712744002
* subject 1.. MS
* subject only Reference(KLReportingFFBCitizen)
* subject ^type.aggregation = #bundled
* focus 1.. MS
* focus only Reference(KLReportingFFBCarePlan) 
* encounter 0..0
* effective[x] 1..1 MS
* effective[x] only dateTime
* issued ..0
* performer ..0
* value[x] 1..1 MS
* value[x] only CodeableConcept
* value[x] from http://fhir.kl.dk/term/ValueSet/KLFollowUpCodesFFB
* dataAbsentReason ..0
* interpretation ..0
* note ..0
* bodySite ..0
* method ..0
* specimen ..0
* device ..0
* referenceRange ..0
* hasMember 0..0
* derivedFrom ..0
* component ..0
* obeys kl-reporting-ffb-follow-up-1

//Danish descriptions
* subject ^short = "[DK] opfølgningsubjekt"
* effective[x] ^short = "[DK] opfølgningstid"
* status ^short = "[DK] opfølgningsstatus"

Invariant: kl-reporting-ffb-follow-up-1
Description: "A follow-up observation resource shall have status final or entered-in-error"
Severity: #error
Expression: "status = 'final' or status = 'entered-in-error'"


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBFollowUpEncounter.fsh

Profile: KLReportingFFBFollowUpEncounter
Parent: Encounter
Id: kl-reporting-ffb-followUpEncounter
Title: "FollowUpEncounter"
Description: "Encounter for following up on care plans and interventions"
* identifier ..0
* status MS
* status = #planned
* statusHistory ..0
* class MS
* class = $v3ActCode#HH
* class.version ..0
* class.display ..0
* class.userSelected ..0
* classHistory ..0
* type 1..1 MS
* type from http://fhir.kl.dk/term/ValueSet/KLEncounterTypes (required)
* type.coding 1..1 MS
* type.coding = $KLCommon#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* type.coding.version ..0
* type.coding.display ..0
* type.coding.userSelected ..0
* type.text ..0
* serviceType ..0
* priority ..0
* subject 1..1 MS
* subject only Reference(KLReportingFFBCitizen)
* subject ^type.aggregation = #bundled
* episodeOfCare ..0
* basedOn ..0
* participant ..0
* appointment ..0
* period 1..1 MS
* period.start 1..1 MS
* period.end ..0
* length ..0
* reasonCode ..0
* reasonReference ..0
* diagnosis ..0
* account ..0
* hospitalization ..0
* location ..0
* serviceProvider ..0
* partOf ..0


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBFollowUpExtension.fsh

Extension:  KLReportingFFBFollowUpDateExtension
Id: kl-reporting-ffb-follow-up-date-extension
Title: "FollowUpDateExtension"
Description: "Reference to encounter with date for following up on this information."
* value[x] 1..
* value[x] only Reference(kl-reporting-ffb-followUpEncounter)
* value[x] ^type.aggregation = #bundled

---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBInformationGathering.fsh

Profile: KLReportingFFBInformationGathering
Parent: ClinicalImpression
Id: kl-reporting-ffb-informationGathering
Title: "InformationGathering"
Description: "Assessment of the citizen"
* implicitRules ..0
* language ..0
* contained ..0
* extension contains BasedOnServiceRequest named basedOnServiceRequest 1..1 MS
* extension[basedOnServiceRequest].valueReference only Reference(KLReportingFFBServiceRequest)
* extension[basedOnServiceRequest].valueReference ^type.aggregation = #bundled
* extension ^slicing.rules = #closed
* modifierExtension ..0
* identifier ..0
* status MS
* statusReason ..0
* code ..0
* description ..0
* subject 1.. MS
* subject only Reference(KLReportingFFBCitizen)
* subject ^type.aggregation = #bundled
* encounter ..0
* effective[x] 1.. MS
* effective[x] only dateTime
* date ..0
* assessor ..0
* previous ..0
* problem ..0
* protocol ..0
* summary ..0
* finding MS
* finding.itemCodeableConcept ..0
* finding.extension ..0
* finding.modifierExtension ..0
* finding.itemReference MS
* finding.itemReference only Reference(KLReportingFFBCondition)
* finding.itemReference ^type.aggregation = #bundled
* finding.basis ..0
* investigation ..1 MS
* investigation.item MS
* investigation.item only Reference(KLReportingFFBCareEvaluation)


* code.coding ^short = "[DK] oplysningsaktivitetstype"
* subject ^short = "[DK] oplysningsaktivitetsubjekt"
* assessor ^short = "[DK] oplysningsaktivitetsudfører"
* effectiveDateTime ^short = "[DK] oplysningsaktivitetstid"
* encounter ^short = "[DK] oplysningsaktivitetskontakt"
* extension[basedOnServiceRequest] ^short = "[DK] oplysningsaktivitetsordre"
* investigation.code.coding ^short = "[DK] oplysningsaktivitetsObservationstype"
* investigation.item ^short = "[DK] OplysningsaktivitetsOplysning"
* investigation.item ^short = "[DK] oplysningsaktivitetsKonklusion"
* finding.itemReference ^short = "[DK] oplysningsaktivitetsTilstand"
* status ^short = "[DK] oplysningsaktivitetsstatus"


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBIntervention.fsh

Profile: KLReportingFFBIntervention
Parent: CarePlan
Id: kl-reporting-ffb-intervention
Title: "Intervention"
Description: "Intervention in a reported care plan"
* identifier ..0
* instantiatesCanonical ..0
* instantiatesUri ..0
* basedOn 1.. MS
* basedOn only Reference(KLReportingFFBCarePlan)
* basedOn ^type.aggregation = #bundled
* replaces ..0
* partOf ..0
* status MS
* intent MS
* category ..0
* title ..0
* description ..0
* subject 1.. MS
* subject only Reference(KLReportingFFBCitizen)
* subject ^type.aggregation = #bundled
* encounter ..0
* author ..0
* period MS
* period.id ..0
* period.start 1.. MS
* period.end MS
* created MS
* created 1.. MS
* contributor ..0
* careTeam ..0
* addresses ..0
* supportingInfo ..0
* goal ..0
* activity 1.. MS
* activity.id ..0
* activity.outcomeCodeableConcept ..0
* activity.outcomeReference ..0
* activity.progress ..0
* activity.reference ..0
* activity.detail 1..1 MS
* activity.detail.id ..0
* activity.detail.kind ..0
* activity.detail.instantiatesCanonical ..0
* activity.detail.instantiatesUri ..0
* activity.detail.code 1..1 MS
* activity.detail.code.id ..0
* activity.detail.code.text ..0
* activity.detail.code.coding 1..1 MS
* activity.detail.code.coding from KLInterventionsFFB
* activity.detail.reasonCode ..0
* activity.detail.reasonReference ..0
* activity.detail.status MS
* activity.detail.statusReason ..0
* activity.detail.doNotPerform ..0
* activity.detail.scheduled[x] ..0
* activity.detail.location ..0
* activity.detail.product[x] ..0
* activity.detail.dailyAmount ..0
* activity.detail.quantity ..0
* activity.detail.description ..0
* activity.detail.goal ..0
* activity.detail.performer ..0
* note ..0

//shorts
* activity.detail.code.coding ^short = "[DK] indsatsskode"
* created ^short = "[DK] indsatsoprettelsestid"
* period.start ^short = "[DK] indsatsbevillingstid"
* period.end ^short = "[DK] indsatsafslutningstid"
* status ^short = "[DK] indsatsstatus"
* intent ^short = "[DK] indsatshensigt"
* subject ^short = "[DK] indsatssubjekt"
* activity.detail.performer ^short = "[DK] indsatsleverandør"
* basedOn ^short = "[DK] indsatsDelAfPlan"
* activity.detail.goal ^short = "[DK] indsatsmål"
* activity.detail.status ^short = "[DK] indsatsAktivitetsstatus"

// Invariant: kl-reporting-ffb-intervention-1
// Description: "Intervention must have a follow-up encounter if end date is not set"
// Severity: #error
// Expression: "(period.end.exists()) or extension('http://fhir.kl.dk/ffbreporting/StructureDefinition/kl-reporting-ffb-follow-up-date-extension').exists()"


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBInterventionGoal.fsh

Profile: KLReportingFFBInterventionGoal
Parent: Goal
Id: kl-reporting-ffb-interventionGoal
Title: "InterventionGoal"
Description: "Goal related to an intervention for a citizen"
* identifier ..0
* lifecycleStatus MS
* achievementStatus ..0
* category 1..1 MS
* category from KLGoalTypeCodes
* category = $KLCommon#0bb3daef-538d-45dc-b444-abdbcb63f6bc // FFB indsatsmål
* priority ..0
* description MS
* description.coding 1..1
* description.coding = $snomedCT#410518001
* subject 1.. MS
* subject only Reference(KLReportingFFBCitizen)
* start[x] ..0
* target MS
* target ^slicing.discriminator.type = #value
* target ^slicing.discriminator.path = "measure"
* target ^slicing.rules = #open
* target contains
   severitySlice 1..1 and changeValueSlice 1..1
* target[changeValueSlice] MS
* target[changeValueSlice].detailCodeableConcept MS
* target[changeValueSlice].detailCodeableConcept from http://fhir.kl.dk/term/ValueSet/KLChangeValueCodesFFB
* target[severitySlice] MS
* target[severitySlice].detailCodeableConcept MS
* target[severitySlice].detailCodeableConcept from http://fhir.kl.dk/term/ValueSet/KLSeveritiesFFB
* target.measure from KLTargetMeasureCodes (extensible)
* target[severitySlice].measure = $KLCommon#66959f77-6e2a-4574-8423-3ff097f8b9fa //"funktionsevneniveau"
* target[changeValueSlice].measure = $KLCommon#90c48f03-f194-4b2f-ad7d-6cba1069ae48 //"måltype"
* statusDate ..0
* statusReason ..0
* expressedBy ..0
* addresses MS
* addresses only Reference(KLReportingFFBCondition)
* addresses.extension contains ConditionRank named conditionRank 0..1
* addresses.extension[ConditionRank] MS
* addresses.extension[conditionRank].value[x] ^maxValuePositiveInt = 2
* note ..0
* outcomeCode ..0
* outcomeReference ..0
* obeys kl-reporting-ffb-intervention-goal-1
* obeys kl-reporting-ffb-intervention-goal-2

* category ^short = "[DK] målkategori"
* target[severitySlice] ^short = "[DK] målSværhedsgrad"
* target[changeValueSlice] ^short = "[DK] måltype"
* description ^short = "[DK] målbeskrivelse"
* subject ^short = "[DK] målSubjekt"
* expressedBy ^short = "[DK] målAnsvarlig"
* addresses ^short = "[DK] målrelateret"
* addresses.extension[conditionRank] ^short = "[DK] målrelateretRang - 1 = primær, 2 = sekundær"
* note.text ^short = "[DK] målnotat"
* outcomeCode.text ^short = "[DK] målvurdering"
* target.measure ^short = "[DK] målemetode"

Invariant: kl-reporting-ffb-intervention-goal-1
Description: "Intervention goal shall only address conditions under 'Aktivitet og Deltagelse'"
Severity: #error
Expression: "addresses.all(reference.resolve().code.memberOf('http://fhir.kl.dk/term/ValueSet/KLConditionADCodesFFB'))"

Invariant: kl-reporting-ffb-intervention-goal-2
Description: "InterventionGoal shall address excactly one condition with rank 1"
Severity: #error
Expression: "addresses.where(extension('http://fhir.kl.dk/term/StructureDefinition/ConditionRank').valuePositiveInt = '1').count() = 1"


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBMunicipalityCaseNumber.fsh

Extension: KLReportingFFBMunicipalityCaseNumber
Id: kl-reporting-ffb-municipalityCaseNumber
Title: "MunicipalityCasenumber"
Description: "Extension for municipality case numbers"
* extension contains
    municipalitySpecific 0..1 and
    official 0..1
* extension[municipalitySpecific].value[x] only Identifier
* extension[municipalitySpecific].valueIdentifier.use = #usual
* extension[municipalitySpecific].valueIdentifier.assigner ..0


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBServicePerformer.fsh

Profile: KLReportingFFBServicePerformer
Parent: CareTeam
Id: kl-reporting-ffb-servicePerformer
Title: "ServicePerformer"
Description: "Type of service performer for a care plan"
* identifier ..0
* status ..0
* category 1..1 MS
* category from http://fhir.kl.dk/term/ValueSet/KLServiceCodesFFB
* name ..0
* subject 1.. MS
* subject only Reference(KLReportingFFBCitizen)
* encounter ..0
* period ..0
* participant ..0
* reasonCode ..0
* reasonReference ..0
* managingOrganization ..0
* telecom ..0
* note ..0

---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBServiceRequest.fsh

Profile: KLReportingFFBServiceRequest
Parent: ServiceRequest
Id: kl-reporting-ffb-serviceRequest
Title: "ServiceRequest"
Description: "ServiceRequest leading to the gathering of information"
* implicitRules ..0
* language ..0
* contained ..0
* extension contains
    KLReportingFFBMunicipalityCaseNumber named municipalityCaseNumber 0..1 MS
* extension ^slicing.rules = #closed
* modifierExtension ..0
* instantiatesCanonical ..0
* instantiatesUri ..0
* identifier ..0
* basedOn ..0
* replaces ..0
* requisition ..0
* status MS
* intent MS
* intent = $requestIntent#proposal
* category ..0
* priority ..0
* doNotPerform ..0
* code ..0
* orderDetail ..0
* quantity[x] ..0
* subject MS
* subject only Reference(KLReportingFFBCitizen)
* subject ^type.aggregation = #bundled
* encounter ..0
* occurrence[x] ..0
* asNeeded[x] ..0
* authoredOn ..0
* requester ..0
* performerType ..0
* performer ..0
* locationCode ..0
* locationReference ..0
* reasonCode ..0
* reasonReference ..0
* insurance ..0
* supportingInfo ..0
* specimen ..0
* bodySite ..0
* note ..0
* patientInstruction ..0
* relevantHistory ..0

* requester ^short = "[DK] anledningAnsvarlig"
* reasonCode.text ^short = "[DK] anledningsÅrsag"
* status ^short = "[DK] anledningsStatus"
* intent ^short = "[DK] anledningsHensigt"
* code.coding ^short = "[DK] anledningsIndsats"
* orderDetail.coding ^short = "[DK] anledningsAnmodetIndsats"
* subject ^short = "[DK] anledningsSubjekt"
* authoredOn ^short = "[DK] anledningstid"
* reasonReference ^short = "[DK] Afhængig af datatype enten anledningsBegrundelse eller anledningsÅrsagsreference"
* extension[municipalityCaseNumber] ^short = "[DK] anledningDokumenteretISag"

---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KLReportingFFBTargetGroup.fsh

Profile: KLReportingFFBTargetGroup
Parent: Condition
Id: kl-reporting-ffb-targetGroup
Title: "TargetGroup"
Description: "Target group of a citizen"
* identifier ..0
* clinicalStatus MS
* verificationStatus MS
* category ..0
* severity ..0
* code 1.. MS
* code.coding 1.. MS
* code.coding from KLConditionsAndTargetGroupsFFB (required)
* code.text ..0
* bodySite ..0
* subject 1.. MS
* subject only Reference(KLReportingFFBCitizen)
* subject ^type.aggregation = #bundled
* encounter ..0
* onset[x] ..0
* abatement[x] ..0
* recordedDate 1.. MS
* recorder ..0
* asserter ..0
* stage ..0
* evidence ..0
* note ..0

* code.coding ^short = "[DK] tværorganisatoriskTilstandskode"
* code.text ^short = "[DK] tværorganisatoriskTilstandsvurdering"
* subject ^short = "[DK] tværorganisatoriskTilstandsubjekt"
* asserter ^short = "[DK] tværorganisatoriskTilstandAnsvarlig"
* recorder ^short = "[DK] tværorganisatoriskTilstandDokumentationsansvarlig"
* verificationStatus ^short = "[DK] tværorganisatoriskTilstandstatus"
* clinicalStatus ^short = "[DK] tværorganisatoriskTilstandstatus"
* onset[x] ^short = "[DK] tværorganisatoriskTilstandstart"
* abatement[x] ^short = "[DK] tværorganisatoriskTilstandsafslutningstid"
* recordedDate ^short = "[DK] tværorganisatoriskTilstandregistreringstid"
* note ^short = "[DK] tværorganisatoriskTilstandFagligtNotat"


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/KombitSTSOrgIdentifier.fsh

// Temporary copy of dk-core profile to come
Profile: KombitStsOrgIdentifier
Parent: Identifier
Id: dk-core-kombit-sts-org-identifier
Title: "Kombit STS Org Identifier"
Description: "Identifier holding the organization code issued by KOMBIT"
* ^status = #draft
* use = #official (exactly)
* system 1..
* system = "https://www.kombit.dk/organisation" (exactly)
* value 1..

---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/fsh/RuleSets.fsh

RuleSet: CitizenEntry(instance)
* entry[+].fullUrl = "Patient/{instance}"
* entry[=].resource = {instance}

RuleSet: ConditionEntry(instance)
* entry[+].fullUrl = "Condition/{instance}"
* entry[=].resource = {instance}

// Assumes fake id <guid>-<version>
RuleSet: ConditionEntryVersion(instance, version)
* entry[+].fullUrl = "Condition/{instance}"
* entry[=].resource = {instance}-{version}

RuleSet: ClinicalImpressionEntry(instance)
* entry[+].fullUrl = "ClinicalImpression/{instance}"
* entry[=].resource = {instance}

// Assumes fake id <guid>-<version>
RuleSet: ClinicalImpressionEntryVersion(instance, version)
* entry[+].fullUrl = "ClinicalImpression/{instance}"
* entry[=].resource = {instance}-{version}

RuleSet: ServiceRequestEntry(instance)
* entry[+].fullUrl = "ServiceRequest/{instance}"
* entry[=].resource = {instance}

RuleSet: GoalEntry(instance)
* entry[+].fullUrl = "Goal/{instance}"
* entry[=].resource = {instance}

RuleSet: CarePlanEntry(instance)
* entry[+].fullUrl = "CarePlan/{instance}"
* entry[=].resource = {instance}

// Assumes fake id <guid>-<version>
RuleSet: CarePlanEntryVersion(instance, version)
* entry[+].fullUrl = "CarePlan/{instance}"
* entry[=].resource = {instance}-{version}

RuleSet: ObservationEntry(instance)
* entry[+].fullUrl = "Observation/{instance}"
* entry[=].resource = {instance}

RuleSet: CareTeamEntry(instance)
* entry[+].fullUrl = "CareTeam/{instance}"
* entry[=].resource = {instance}

RuleSet: EncounterEntry(instance)
* entry[+].fullUrl = "Encounter/{instance}"
* entry[=].resource = {instance}


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/images-sources/KLReportingFFBDeliveryReport.plantuml

@startuml DeliveryReport
'left to right direction

rectangle "DeliveryReport" as report

rectangle "Citizen" as citizen
rectangle "ServiceRequest" as request

rectangle "InformationGathering" as information

rectangle "CarePlan" as careplan

rectangle "InterventionGoal" as goal
rectangle "FollowUpEncounter" as encounter

rectangle "Condition" as condition

rectangle "CareEvaluation" as careplanevaluation

rectangle "TargetGroup" as targetgroup

rectangle "Intervention" as intervention
rectangle "ServicePerformer" as provider

rectangle "FollowUp" as followup

report -- citizen
report --"*" information
report --"*" careplan

information -->"finding *" condition
information -->"investigation" careplanevaluation

' request "basedon"<- information
information -->"basedOn" request
careplan -->"goal *\n" goal
careplan -->"outcome" careplanevaluation
careplan -->"addresses *" targetgroup
careplan "basedon"<-- intervention
careplan -->"careteam *" provider
careplan "focus"<-- followup
condition "addresses"<-- goal

careplan -->"followUpDate" encounter
goal ->"followUpDate" encounter
@enduml

---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/pagecontent/downloads.md

The following sections lists various links and artifacts that may be useful during development

### Tools, frameworks and supported programming languages
- See [https://hl7.org/fhir/R4/downloads.html](https://hl7.org/fhir/R4/downloads.html)

### Examples

Autogenerated examples are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)

### Downloadable Copy of schematrons

A downloadable version of profiles, valuesets and other profiles used in this IG is available for download (npm format):

- [Downloadable Copy](package.tgz)

---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/pagecontent/example.md

This page describes seven subsequent delivery reports for the citizen Børge Mogensen.
For each delivery report the story is told (in Danish), the FFB documentation is listed, and the reporting example is given.

### 1st encounter / First documentation phase / phase – Case opening

#### Story
Børge Mogensen henvender sig på kommunen efter aftale med en frivillig på hans stamcafé, hvor han har givet udtryk for at han har det svært i livet generelt.

Børge døjer med eftervirkningerne af et Covid-19 forløb, hvor senfølger har gjort at han har forskellige udfordringer i dagligdagen.
Børge har en fortid med stofmisbrug og har haft perioder med hjemløshed.
Han har dog indenfor de senere år fået struktur på hverdagen, minimeret sit misbrug og fået tag over hovedet.
Dog er han udfordret i at fastholde sin hverdag efter covid-19 forløbet.

Børge tilknyttes en sagsbehandler, der starter med at åbne en social sag.
Herefter spørger sagsbehandler ind til Børges ”Tro, håb og drømme for fremtiden”.
Børge drømmer om en tilværelse hvor han kan blive ved med at fungere i hverdagen til trods for de nye senfølger.

Visiterende sagsbehandler starter sagen med at indhente diagnoseoplysninger på Børge, og kan se at der ikke foreligger nogle gældende lægefaglige diagnoser på Børge.

#### FFB Documentation
The following FFB documentation is documented in the record system.

##### Citizen

{:class="grid"}
| Identifier |
| ---------- |
| 010181-4321 |

##### ServiceRequest

{:class="grid"}
| MunicipalityCaseNumber |
| ---------------------- |
| Sag154689 |

#### Reporting
A delivery report is not generated here as the target groups will be reported on the subsequent care plans.

### 2nd encounter / Second documentation phase – Case insight

#### Story
Visiterende myndighedssagsbehandler udformer, efter sagsåbningen, en objektiv og individuel udredning af Børges funktioner og forhold, omgivelser og aktivitets- og deltagelsestemaer.
Visitator udarbejder udredningen på baggrund af samtale med Børge Mogensen og pårørende, samt journalnotater fra tidligere kontakter med kommunen.
Ved udredning af Børge Mogensens aktivitets- og deltagelsestemaer vurderer og registrerer visiterende myndighedssagsbehandler Børge Mogensens funktionsevneniveau på en skala mellem 0-4.

#### FFB Documentation
The following new FFB documentation is documented in the record system.

##### Condition

{:class="grid"}
| Condition group | Condition | Severity | Recorded date | Last asserted date |
| --------------- | --------- | -------- | ------------- | ------------------ |
| Funktioner og forhold | Bevidsthedstilstand | - | 28/5-2021 | - |
|  | Intellektuelle funktioner | - | 28/5-2021 | - |
|  | Problemløsning | - | 28/5-2021 | - |
|  | Syn | - | 28/5-2021 | - |
|  | Døgnrytme | - | 28/5-2021 | - |
|  | Tobak | - | 28/5-2021 | - |
|  | Interesser | - | 28/5-2021 | - |
|  | Familiesituation | - | 28/5-2021 | - |
| Omgivelsesfaktorer | Boligområde | - | 28/5-2021 | - |
|  | Personer i netværk | - | 28/5-2021 | - |
| Aktivitet og deltagelse | Indgå i samspil og kontakt | 2 - Moderat nedsat funktionsevne | 28/5-2021 | - |
|  | Varetage beskæftigelse | 1 - Let nedsat funktionsevne | 28/5-2021 | - |
|  | Spise | 3 - Svært nedsat funktionsevne | 28/5-2021 | - |
|  | Købe ind | 2 - Moderat nedsat funktionsevne | 28/5-2021 | - |
|  | Færdes med transportmidler | 3 - Svært nedsat funktionsevne | 28/5-2021 | - |

#### Reporting
A delivery report is generated containing:

- Citizen (new)
- Information gathering (new)
    - Reference to service request
    - Reference to conditions
- Service request (new)
- Conditions (new)

The report for this is found here: [DeliveryReport-2nd-Encounter](Bundle-498644ca-b26c-4ba7-a1ef-69d691297ba3.html)

### 3rd encounter / Third documentation phase – Case assesment

#### Story
Visiterende myndighedssagsbehandler udformer derefter, i samarbejde med Børge Mogensen, tre indsatsmål der er rammesættende for den kommunale støtte til Børge Mogensen.
Børges 1. indsatsmål omhandler at kunne fastholde funktionsevneniveauet på et let nedsat funktionsevneniveau (værdi 1) indenfor aktivitets- og deltagelsestemaet ”indgå i samspil og kontakt”.
Målet er relateret til at kunne varetage beskæftigelse og færdes med transportmidler, da det er ved brug af disse A&D temaer, at Børge skal fastholde sit funktionsevneniveau.
Børges 2. mål omhandler at kunne udvikle funktionsevnen, til værdien 0, til at ”købe ind”.
Målet relaterer sig til A&D temaerne Gang og bevægelse og forstå meddelelser.
Børges 3., og sidste, mål er at begrænse et tab af funktionsevne ift. at kunne spise.
Børges bevidsthedstilstand gør at han får sværere og sværere ved at spise, da han har tiltagende bevidsthedsudfald ved fødeindtag.

Efter udformningen af mål for støtten vurderer visiterende myndighedssagsbehandler Børge Mogensens samlede behov for kommunal støtte.
Her sammenholder den visiterende myndighedssagsbehandler informationer fra de foregående faser med graden af støtte der er nødvendig for at Børge Mogensen kan nå sine opsatte mål.
Det vurderes at Børge har et let støttebehov (værdi 1), da det ikke er nødvendigt med omfattende støtte for at kunne nå sin tid.
Der knyttes et lokalt sagsafgørelsesID til vurderingen af støttebehov, da denne kan være forskellig pr. individuel oprettet sag.

#### FFB Documentation
The following new FFB documentation is documented in the record system.

##### CareEvaluation

{:class="grid"}
| Evaluation | Vurderingsdato |
| ---------- | -------------- |
| 1 - Let støttebehov | 29/5-2021 |

##### InterventionGoal

{:class="grid"}
| Addresses (primary) | Addresses (secondary) | Severity | ChangeValue |
| ------------------- | --------------------- | -------- | ----------- |
| Indgå i samspil og kontakt | Varetage beskæftigelse; Færdes med transportmidler | 1 - Let nedsat funktionsevne | Fastholde funktionsevne |
| Købe ind | - | 0 - Ingen nedsat funktionsevne | Udvikle funktionsevne |
| Spise | - | 3 - Svært nedsat funktionsevne | Begrænse tab af funktionsevne |

#### Reporting
A delivery report is generated containing:

- Citizen (unchanged)
- Information gathering (updated)
    - Reference to service request (unchanged)
    - Reference to conditions (unchanged)
    - Reference to care evaluation (new)
- Care evaluation (new)
- Intervention goals (new)
    - Reference to conditions
- Service request (unchanged)
- Conditions (unchanged)

The report for this is found here: [DeliveryReport-3rd-Encounter](Bundle-4b4e5f33-a9a2-42f6-b598-180543029ae5.html)

### 4th encounter / Fourth documentation phase – Case verdict

#### Story
Visiterende myndighedssagsbehandler udvælger, på baggrund af den lægefagligt stillede diagnose – og en vurdering af hvilken målgruppe der er primær ift. den kommunale støtte, at Børge Mogensens primære målgruppe er ”anden udviklingsforstyrrelse”.
Da visiterende myndighedssagsbehandler vurderer at Børge Mogensen er i målgruppen for ”opmærksomhedsforstyrrelse”, men ikke har en decideret diagnose, gælder det for hhv. fysiske- og psykiske funktionsnedsættelser at sagsbehandler skal afkrydse på laveste niveau.

Visiterende myndighedssagsbehandler vurderer at Børge Mogensen, foruden at være i primær målgruppe for ”anden udviklingsforstyrrelse” også at Børge har en synsnedsættelse, og derved er i målgruppen for ”anden fysisk funktionsnedsættelse” (iht. det tidligere omtalte princip).
Børge har ligeledes givet udtryk for at have sporadiske selvmordstanker, hvorfor han er i målgruppen for ”selvmordstanker- eller forsøg”.

Der knyttes et sagsafgørelsesID til registreringen af målgrupper, da det kun er de for sagen relevante målgrupper der registreres på Børge Mogensens sag.
Disse kan være varierende på tværs af sager.

#### FFB Documentation
The following new FFB documentation is documented in the record system.

##### TargetGroup

{:class="grid"}
| TargetGroup | Recorded date |
| ----------- | ------------- |
| Anden udviklingsforstyrrelse | 29-5-2021 |
| Anden fysisk funktionsnedsættelse | 29-5-2021 |
| Selvmordstanker eller -forsøg | 29-5-2021 |

#### Reporting
A delivery report is not generated here as the target groups will be reported on the subsequent care plans.

### 5th encounter / Fifth documentation phase – Case appropriation

#### Story
Visiterende myndighedssagsbehandler vurderer at der skal bevilges to sociale indsatser for bedst muligt at understøtte arbejdet med at indfri de opsatte indsatsmål for Børge Madsen.
Den første sociale indsats sammensætter hun så det botilbudslignende tilbud Solstrålen i Viborg arbejder med ydelserne ”støtte til daglige opgaver i hjemmet” og ”støtte til sund levevis” efter servicelovens §85 (socialpædagogisk støtte), hvorfor der bevilges to ydelser.
Der bevilges ligeledes en social indsats hvor dagtilbuddet til voksne; måneskinnet bestilles til at arbejde med ydelsen ”social aktivitet”.
Begge indsatser kobles til den oprindelige afgørelse med et sagsafgørelsesID.
Bevillingen afsluttet ved at der sendes en bestilling til de to sociale tilbud, og et brev til Børge.

#### FFB Documentation
The following new FFB documentation is documented in the record system.

##### CarePlan

{:class="grid"}
| Start date | ServicePerformer |
| ---------- | ---------------- |
| 29/5-2021 | Almindeligt længerevarende botilbud til voksne |
| 29/5-2021 | Aktivitets- og samværstilbud |

##### Intervention

{:class="grid"}
| Intervention | Start date | End date | Recorded date | Care plan |
| ------------ | ---------- | -------- | ------------- | ---------------- |
| Støtte til daglige opgaver i hjemmet | 29/5-2021 | - | 29/5-2021 | Almindeligt længerevarende botilbud til voksne |
| Støtte til sund levevis | 29/5-2021 | - | 29/5-2021 | Almindeligt længerevarende botilbud til voksne |
| Sociale aktivitet | 29/5-2021 | - | 29/5-2021 | Aktivitets- og samværstilbud |

#### Reporting
A delivery report is generated containing:

- Citizen (unchanged)
- Care plans (new)
    - Reference to care evaluation
    - Reference to target groups
    - Reference to service performers
    - Reference to follow-up encounter
- Interventions (new)
    - Reference to care plan
- Target groups (new)
- Service performers (new)
- Follow-up encounter (new)

The report for this is found here: [DeliveryReport-5th-Encounter](Bundle-5bf6a186-ee66-4b0e-ba6e-623972ab5130.html)

### 6th encounter / Sixth documentation phase – Changing case appropriation

#### Story
Efter Børge er startet op på hans indsatser, deltager han i den første af de månedligt tilbagevende statusser, hvor han og en socialpædagogisk medarbejder vender arbejdet med indsatsmålene og hans generelle trivsel.
Børge giver udtryk for at ikke synes at aktivitets- og samværsindsatsen på tilbuddet Måneskinnet giver mening for ham, da han gerne vil med på et EDB-hold de har på stedet. Den socialpædagogiske medarbejder tager kontakt til visiterende myndighedssagsbehandler og indstiller til at aktivitets- og samværsindsatsens primære fokus bliver ”kompetenceudviklende aktivitet”, og indsatsmålet om sociale relationer ændres til at være et udviklende mål med ambitionen om at Børge ingen nedsat funktionsevne har ved indfrielse af målet.
Visiterende myndighedssagsbehandler godkender indstillingen og ændrer i den sociale indsats og i det pågældende indsatsmål.
Samtidigt opdaterer den visiterende myndighedssagsbehandler aktivitets- og deltagelsestemaet for ”samspil og kontakt” til ”1: Let nedsat funktionsevne”.

Den socialpædagogiske medarbejder udformer journalnotater på Børges Funktioner & Forhold, Omgivelser og Aktivitets- og deltagelsestemaer.

#### FFB Documentation
The following new FFB documentation is documented in the record system.

##### Follow-up

{:class="grid"}
| Care plan | Value | Effective |
| --------- | ----- | --------- |
| Almindeligt længerevarende botilbud til voksne | Træf afgørelse om fortsættelse af indsats | 18/6-2021 |
| Aktivitets- og samværstilbud | Træf afgørelse om afslutning af indsats og visiter til ny | 18/6-2021 |

##### Condition

{:class="grid"}
| Condition group | Condition | Severity | Recorded date | Last asserted date |
| --------------- | --------- | -------- | ------------- | ------------------ |
| Aktivitet og deltagelse | Indgå i samspil og kontakt | 1 - Let nedsat funktionsevne | 28/5-2021 | 18/6-2021 |

##### Intervention

{:class="grid"}
| Intervention | Start date | End date | Recorded date |
| ------------ | ---------- | -------- | ------------- |
| Social aktivitet | 29/5-2021 | 18/6-2021 | 29/5-2021 |
| Kompetenceudviklende aktivitet | 18/6-2021 | - | 29/5-2021 |

##### InterventionGoal

{:class="grid"}
| Addresses (primary) | Addresses (secondary) | Severity | ChangeValue |
| ------------------- | --------------------- | -------- | ----------- |
| Indgå i samspil og kontakt | Varetage beskæftigelse; Færdes med transportmidler | 0 - Ingen nedsat funktionsevne | Udvikle funktionsevne |

#### Reporting
A delivery report is generated containing:

- Citizen (unchanged)
- Information gathering (unchanged)
    - Reference to service request (unchanged)
    - Reference to the conditions (unchanged)
    - Reference to care evaluation (new)
- Care plans (one unchanged, one updated, and one new)
    - Reference to care evaluation
    - Reference to target groups
    - Reference to service performers
    - Reference to follow-up encounter
- Interventions (one new and one updated)
    - Reference to care plan
- Intervention goals (one new)
    - Reference to conditions
- Service request (unchanged)
- Conditions (one is updated)
- Service performers (unchanged)
- Follow-up encounter (unchanged)
- Follow-ups (new)
    - Reference to care plan

The report for this is found here: [DeliveryReport-6th-Encounter](Bundle-aaa5d153-968e-46ec-9f9e-cfc6e93a3f1b.html)

### 7th encounter / Seventh documentation phase – Case closing

#### Story
Visiterende myndighedssagsbehandler laver på ny en udredning af Børge Mogensen under den planlagte sagsopfølgning.
Her ses det at Børge Mogensen har rykket sig på de udredte aktivitets- og deltagelsestemaer.
Det særlige fokus for sagsbehandler er hhv. ”indgå i samspil og kontakt”, ”spise” og ”købe ind”, da det er her der er opsat indsatsmål for.
Sagsbehandler vurderer ligeledes at Børge Mogensen ikke længere har behov for kommunal støtte og hjælp, hvorfor der registreres et 0 ”intet behov for støtte” under støttebehovsvurderingen.
De to indsatser på hhv. aktivitets- og samværstilbuddet og det botilbudslignende tilbud afsluttes, og der registreres en faktisk afslutningsdato på de indeholdende ydelser.

#### FFB Documentation
The following new FFB documentation is documented in the record system.

##### CareEvaluation

{:class="grid"}
| Evaluation | Vurderingsdato |
| ---------- | -------------- |
| 0 - Intet støttebehov | 30/8-2021 |

##### Intervention

{:class="grid"}
| Intervention | Start date | End date | Recorded date |
| ------------ | ---------- | -------- | ------------- |
| Kompetenceudviklende aktivitet | 18/6-2021 | 30/8-2021 | 29/5-2021 |
| Støtte til daglige opgaver i hjemmet | 29/5-2021 | 30/8-2021 | 29/5-2021 |
| Støtte til sund levevis | 29/5-2021 | 30/8-2021 | 29/5-2021 |

#### Reporting
A delivery report is generated containing:

- Citizen (unchanged)
- Information gathering (new)
    - Reference to service request
- Care plan (updated)
    - Reference to new care evaluation (updated)
- Service request (unchanged)
- Interventions (updated)

The report for this is found here: [DeliveryReport-7th-Encounter](Bundle-ae9cdbef-ca35-4dae-b5df-ffd938cf0098.html)


---

File: repos/hl7dk_SLASH_kl-ffb-reporting/input/pagecontent/index.md

### KLFFBReporting 

This implementation guide describes the delivery of social data from the vendor specific solutions to a common gateway. The reporting aims for compliance with the Danish core profiles and the current work on the shared information model (FKI) for data in the Danish municipalities.

The profiles for the reporting are restricted to allow only the information that is required to report to the gateway. This will not be compliant with the shared information model for data in the Danish municipalities and FFB (Fælles Faglige begreber) as it describes a subset where not all mandatory data is allowed.

### Content

The data contained in the reporting is a subset of the data defined in the Danish standard for social care (FFB), with focus on structured information about conditions and care plans where all free text information is omitted. Furthermore, the reporting is based on the method given by VUM (Voksenudredningsmetoden).

<img alt="Model" src="./DeliveryReport.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

__Note:__ All resources refer to citizen in the bundle (some relations are omitted from the diagram to make it readable).

The reporting contains the following types of information. The validation section for each type describes the validations enforced by the profile. See the specific profile for a formal specification of the constraints.

In general all referenced ressources must be included in the report.

#### Citizen
Information about the citizen that is the subject of the report. The main information about the citizen is the civil registration number (CPR-nr) and identification of the municipality holding and reporting the data.

Free text information about the citizen is not part of this reporting.

##### Validation
- Only one citizen resource
- The civil registration number is a syntactically valid CPR-nr.
- The managing organization is a syntactically valid STS Organization code

#### Service Request
Information about the request that initiated an information gathering about the citizens situation. The main information about the request is the municipality case number (sagsnummer).

##### Validation
- CitizenRequest refer to the citizen
- CitizenRequest must contain the municipality case number

#### Information Gathering
Information about a given information gathering (udredning). The main information about the information gathering is the time of the event and a collection of the findings.

A new information gathering is reported as a new InformationGathering resource with a new id. It must be new if a information gathering has been performed. This will always be the case if the granted interventions (ydelser), target groups (målgrupper), or service provider (tilbudstype) has changed. (**Note** This is not validated by the profile)

Free text information about the information gathering is not part of this reporting.

##### Validation
- InformationGathering refer to the citizen
- InformationGathering refer to a service request 
- InformationGathering contains the time of the event
- InformationGathering contains only valid FFB conditions

#### Condition
Information about the conditions (FFB temaer) of the citizen as assessed by the social care practitioners. A condition represents an assessement of that condition, and it must contain condition code as defined by FFB, and the time that it was recorded. Conditions under "Aktivitet og deltagelse" must also contain the severity of the condition represented as the functioning level as defined by FFB. Other conditions must not contain severity.

All information about conditions that has changed since the last reporting must be contained in a new report. Changes in the assessment may include conditions that are new, updated by a new assessment or no longer in relevant. A condition that has changed since previously reported shall have the same code according to FFB and is considered to be an update to the assessment in which case the last asserted date must be set to the date of the update.

Free text information about the conditions is not part of this reporting.

##### Validation
- Condition refer to the citizen
- Condition have a valid condition code according to FFB
- Condition have the date of the initial documentation of the condition
- Condition under "Aktivitet og deltagelse" have a valid severity code according to FFB (Funktionsniveau)
- Condition not under "Aktivitet og deltagelse" does not have a severity code

#### Intervention Goal
Information about the intervention goal for a primary condition and secondary conditions under "Aktivitet og deltagelse. The intervention goal must contain the expected severity as defined by FFB.

All changes to the goals since the last reporting must be included in a new report, including the referenced conditions and all the resources referenced by the conditions.

Free text information about the goals is not part of this reporting.

##### Validation
- InterventionGoal refer to the citizen included in the report
- InterventionGoal addresses exactly one primary condition under "Aktivitet og deltagelse" (rank 1)
- InterventionGoal addresses a number of secondary conditions under "Aktivitet og deltagelse" (rank 2)
- The target of a goal is a valid severity code according to FFB (Funktionsniveau)
- The change value of a goal is a valid change value code (Måltype)

#### Care Plan
Information about a care plan for the citizen. The care plan (indsats) defines the intervention goals (forventet funktionsevne), the care plan evaluation (støttebehov), the target groups (målgrupper), the interventions (ydelser), the service performers (tilbudstyper), the follow-up date (opfølgningsdato), and the follow-up result (opfølgningsresultat).

All information about care plans that has changed since the last reporting must be contained in a new report. Changes in the care plan caused by a new information gathering must be reproted as a new care plan (with a new id).

Free text information about care plans is not part of this reporting.

##### Validation
- CarePlan refer to the citizen
- CarePlan contains a municipality case number
- CarePlan refer to a valid follow-up encounter if ordered and not completed
- CarePlan contains a start date
- CarePlan refer to a valid service performer if it is set (tilbudstype)
- CarePlan addresses zero or one valid primary target group (målgruppe - rank 1)
- CarePlan addresses a number of valid secondary target groups (målgruppe -rank 2)
- CarePlan refer to zero or one care plan evaluation (støttebehov)

#### Follow-up Encounter
Information about the encounters referenced from a care plan or an intervention goal to hold the follow-up dates. The encounter must contain the expected start date of the next follow-up.

Free text information about follow-up encounters is not part of this reporting.

##### Validation
- Encounter refer to the citizen
- Encounter have a start date (Opfølgningsdato)

#### Care Plan Evaluation
Evaluation of the amount of support the citizen need (støttebehov).

All changes to the care plan evalueation since the last reporting must be contained in a new report.

Free text information about care plan evaluations is not part of this reporting.

##### Validation
- CareEvaluation refer to the citizen
- CareEvaluation contains the date of the evaluation
- CareEvaluation contains a valid code according to FFB (støttebehov)

#### Target Group
Information about the target group (målgruppe) for the citizen. A target group must contain a valid target group code and the date of its original documentation.

All changes to the target groups since the last reporting must be included in a new report.

Free text information about target groups is not part of this reporting.

##### Validation
- TargetGroup refer to the citizen
- TargetGroup contains a valid code according to FFB (målgruppe)
- TargetGroup contains the date of its original documentation

#### Interventions
Information about the planned interventions (FFB ydelser) that the municipality has granted to address the conditions of the citizen. An intervention represents one type of social care given to the citizen. It must contain the code for the intervention according to FFB, the start time, and the end time if ended.

All changes to the interventions since the last reporting must be contained in a new report, including conditions and follow-up encounters referenced by the reported interventions.

Free text information about interventions is not part of this reporting.

##### Validation
- Intervention refer to the citizen
- Intervention refer to a care plan
- Intervention has a start date
- Intervention has a valid intervention code according to FFB (ydelse)

#### Service Performer
Information about the type of service proformer (tilbudstype) that is granted to the citizen.

Free text information about the service performer is not part of this reporting.

##### Validation
- ServicePerformer refer to the citizen
- ServicePerformer contains a valid code according to FFB (tilbudstype)

#### Follow-up
Information about the outcome of a follow-up encounter. The follow-up observations must contain the coding for the outcome (FFB resultat af opfølgning) and a reference to the relevant care plan.

All changes to the follow-up observations since the last reporting must be included in a new report, including the care plan referenced by the observations.

Free text information about the follow-up is not part of this reporting.

##### Validation
- FollowUp refer to the citizen
- FollowUp refer to a care plan
- FollowUp have a timestamp for the observation
- FollowUp have a valid follow-up code according to FFB (Resultat af opfølgning)

### Reporting
Reporting is done using the profile KLReportingFFBDeliveryReport, which is a bundle containing multiple resources about one citizen. The source systems must periodically (at least daily) transfer a delivery report containing a snapshot of the current information for each changed citizen with all information gatherings and care plans that has changed since the previous delivery report was transferred. Multiple delivery reports must be delivered if the previous reporting for some reason happened more than one day ago, each covering no more than one day. A full history of changes is not required.

Note, that the snapshot of the current information contains information about the hole day, not only the current state for the citizen. An intervention that fx has ended during the day shall therefore be included in the report with an end date and time along with possible new interventions.

The id of any resource must be universally unique, e.g. a uuid. Resources with the same id as previously reported are considered to be an update of the previously reported information at the time indicated in the metadata of the resource. A resource that has been enterered in error is invalidated by an update with the same resource id as previously reported.

All resources must contain the metadata giving the profile and lastUpdated information.

#### Validation
The delivery report is immediately validated when a source system posts it to the gateway. The gateway validates all the rules defined in this profile for each delivery report and returns the list of errors found in the response. The gateway returns a machine readable error code if validation errors are found, and a textual description (not machine readable) of each error which explains the error in terms of the FHIR protocol.

The gateway thus validates that the format of the content is valid, the structure of all resources are correct, the cardinatity of all values are valid, codings only contains valid codes, and that all referenced resources are included in the report. The rules described on this page are validated to the extent possible through more complex constraints in the profiles. The constraints in the profiles also contains a textual description to describe the error when the validation finds that a constraint is not observed. This includes more technical validations not listed above, such as fixed values aligned with the shared information model (FKI) and the FHIR standard in general.

The gateway is not able to validate immediately whether the reported data conflicts with previously reported data. Problems like this will probably not be found until the data is processed for business intelligence or reporting to other recipients. Handling these problems will have to be a manual process. The gateway will for obvious reasons not be able to validate whether all the data from the source systems has been reported, including attributes with zero to one or zero to many cardinality marked as "must support".

#### Examples
The implementation guide contains a number of examples for each profile used in a delivery report. See [Example](example.html) for a set of examples of complete delivery reports.

__Note:__ Must support markers are used according to the FHIR specification and means that it shall be included in the report if the information is available. A precise definition of what available means in each case is described in the definition of the element.

### Contact
Questions regarding the business requirements may be directed to <ffb@kombit.dk>, and questions regarding TouchStone testscripts may be directed to <fhir@medcom.dk>. 

### Dependencies
{% include dependency-table.xhtml %}

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles
{% include globals-table.xhtml %}

### IP Statements
{% include ip-statements.xhtml %}

---

