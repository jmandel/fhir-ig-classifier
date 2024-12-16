File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonAliases.fsh

Alias:          SCTConditionValueset = http://hl7.org/fhir/ValueSet/condition-code
Alias:          SCT = http://snomed.info/sct
Alias:          ExtDueTo = http://hl7.org/fhir/StructureDefinition/condition-dueTo
Alias:          ICPC2DK = https://kiap.dk/koder/icpc-2-dk
Alias:          CONCLIN = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias:          EncounterStatus =  http://hl7.org/fhir/encounter-status
Alias:          V3ACTCODES = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias:          RelevantHist = http://hl7.org/fhir/StructureDefinition/request-relevantHistory
Alias:          CarePlanIntentCodes = http://hl7.org/fhir/care-plan-intent
Alias:          RequestStatusCodes = http://hl7.org/fhir/request-status
Alias:          SOR = urn:oid:1.2.208.176.1
Alias:          ContactPointCodes = http://hl7.org/fhir/contact-point-system 
Alias:          CarePlanActivityStatus = http://hl7.org/fhir/care-plan-activity-status     
Alias:          UCUM = http://unitsofmeasure.org
Alias:          MedComClinicalEmail = https://fhir.simplifier.net/MedCom-FHIR-Messaging/StructureDefinition/medcom-clinicalEmailComposition
Alias:          KLToolsCodeSystem = http://kl.dk/fhir/common/caresocial/CodeSystem/KLToolsCodes
Alias:          SCTConditionCodes = http://hl7.org/fhir/ValueSet/condition-code
Alias:          LOINC = http://loinc.org
Alias:          VerSTATUS = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias:          GoalRelationship = http://hl7.org/fhir/StructureDefinition/goal-relationship
Alias:          GoalStatusCodes = http://hl7.org/fhir/goal-status
Alias:          KLCommonproprietarySystem = http://kl.dk/fhir/common/caresocial/CodeSystem/KLCommonproprietary
Alias:          KLE = https://data.gov.dk/id/classification/KLE
Alias:          AGENTTYPE = http://terminology.hl7.org/CodeSystem/provenance-participant-type
Alias:          PROVENANCEREASON = http://terminology.hl7.org/CodeSystem/v3-ActReason
Alias:          REQUESTSTATUS = http://hl7.org/fhir/request-status
Alias:          REQUESTINTENT = http://hl7.org/fhir/request-intent
Alias:          $CareSocialCodes = http://fhir.kl.dk/term/CodeSystem/CareSocialCodes
Alias:          $FSIII = urn:oid:1.2.208.176.2.21
Alias:          $FFB = urn:oid:1.2.208.176.2.22
Alias:          $NPU = http://fhir.kl.dk/term/CodeSystem/NPU

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialCarePlan.fsh

Profile: KLCommonCareSocialCarePlan
Parent: CarePlan
Title: "CarePlan"
Description: "Overall CarePlan for Danish municipalities, for individual plans regarding social care, and health act §140 and §119"

* category from KLCarePlanCategoryCodes (extensible)
* category 1..1
* description MS
* goal 1..*

//Slicing code, declaring disciminator, and slicing type
* goal ^slicing.discriminator.type = #value
* goal ^slicing.discriminator.path = "resolve().category"
* goal ^slicing.rules = #open
* goal ^slicing.ordered = false   // can be omitted, since false is the default
* goal ^slicing.description = "Slice based on the category value which specify different goal-types as defined by FSIII og FFB respectively"  // optional - does not appear
//Declaring the slices, and their cardinalities, to allow a KL-code and a SNOMED CT code

* goal contains
   fpurpose 1..1 and ffbgoal 0..*

* goal[fpurpose] only Reference(KLCommonCareSocialPurpose)
* goal[ffbgoal] only Reference(KLCommonCareSocialFFBGoal)

* created 1..1
* subject only Reference(KLCommonCitizen)
* author only Reference(KLCommonOrganization)
* careTeam only Reference(KLCommonServicePerformer) // Careteam indeholder både tilbuds-typen og den organisation der står for levering af tilbudet
* addresses.extension contains ConditionRank named conditionRank 0..1 //primær og sekundær målgruppe https://chat.fhir.org/#narrow/stream/179166-implementers/topic/CarePlan.20addresses
* addresses only Reference(KLCommonCareSocialFocusCondition) 
* extension contains RelevantHist named relevantHistory 0..*

* activity ^slicing.discriminator.type = #value
* activity ^slicing.discriminator.path = "detail.code"
* activity ^slicing.rules = #open
* activity ^slicing.ordered = false 

* activity contains
   carePlanEvaluation 0..*

* activity[carePlanEvaluation].detail.code = $CareSocialCodes#95ec4535-8fe8-4296-867c-35de421794cf //Evaluering (som her overbegreb til støttebehovsvurdering, helhedsvurdering etc.)
* activity[carePlanEvaluation].outcomeReference only Reference(KLCommonCareSocialEvaluation) //støttebehovsvurdering

* extension contains
   MunicipalityCaseNumber named municipalityCaseNumber 0..1

* category.coding ^short = "[DK] indsatsforløbKategori"
* goal[fpurpose] ^short = "[DK] indsatsforløbFormål" 
* description ^short = "[DK] indsatsforløbBeskrivelse" 
* created ^short = "[DK] indsatsforløbOprettelsestid" 
* period.start ^short = "[DK] indsatsforløbBevillingstid" 
* period.end ^short = "[DK] indsatsforløbAfslutningstid" 
* subject ^short = "[DK] indsatsforløbsubjekt" 
* author ^short = "[DK] indsatsforløbansvarlig" 
* careTeam ^short = "[DK] indsatsforløbsleverandør og indsatsforløbtilbud" 
* addresses ^short = "[DK] indsatsforløbmålgruppe"
* addresses.extension[conditionRank] ^short = "[DK] indsatsforløbsmålgruppeRang" 
* intent ^short = "[DK] indsatsforløbhensigt" 
* status ^short = "[DK] indsatsforløbstatus" 
* extension[relevantHistory] ^short = "[DK] indsatsforløbændringshistorie" 
* goal[ffbgoal] ^short = "[DK] indsatsforløbsmål" 
* activity.outcomeReference ^short = "[DK] vurderinger"
* activity.detail.code.coding ^short = "[DK] vurderinger"
* extension[municipalityCaseNumber] ^short = "[DK] anledningDokumenteretISag"


Instance: FFBIndsats
InstanceOf: KLCommonCareSocialCarePlan
Title: "Andreas midlertidigt ophold"
Description: "Andreas social indsats vedr. midlertidigt ophold"
Usage: #example
* status = RequestStatusCodes#active
* intent = CarePlanIntentCodes#order
* category = $CareSocialCodes#4a297733-4d66-4726-a933-590d55cf91e0 "Social indsats"
* subject = Reference(Andreas)
* created = 2020-07-06
* period.start = 2020-07-07
* goal[fpurpose] = Reference(AndreasIndsatsformaal)
* description = "Andreas plan for midlertidigt ophold omfatter socialpædagogiske tiltag, med fokus på at klare sig selv i hverdagsaktiviteter, og opbygge relationer til personale og de andre beboere. Ved indsatsens afslutning skal Andreas genvurderes mhp. at finde en permanent løsning, der tilsvarer Andreas funktionsniveau."
* author = Reference(SocialOgSundhedMorsoe)
* careTeam = Reference(MidlertidigtOpholdBotilbuddetHvidbjerghus)
* addresses[0] = Reference(AndreasMaalgruppeUdviklingshamning)
* addresses[0].extension[conditionRank].valuePositiveInt = 1
* activity.outcomeReference = Reference(AndreasStottebehov)
* activity.detail.code = $CareSocialCodes#95ec4535-8fe8-4296-867c-35de421794cf
* activity.detail.status = CarePlanActivityStatus#completed

Instance: NySocialIndsats
InstanceOf: KLCommonCareSocialCarePlan
Title: "Andreas alment botilbud"
Description: "Andreas social indsats vedr. almen botilbud"
Usage: #example
* subject = Reference(Andreas)
* description = "Andreas plan for alment botilbud omfatter socialpædagogiske tiltag, med fokus på at klare sig selv i hverdagsaktiviteter, og opbygge relationer til personale og de andre beboere."
* careTeam = Reference(AlmBotilbud)
* category = $CareSocialCodes#4a297733-4d66-4726-a933-590d55cf91e0 "Social indsats"
* addresses = Reference(AndreasMaalgruppeUdviklingshamning)
* created = 2020-08-12
* goal[fpurpose] = Reference(AndreasIndsatsformaal2)
* status = RequestStatusCodes#active
* intent = CarePlanIntentCodes#order

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialCitizensOwnObservation.fsh

Profile: KLCommonCareSocialCitizensOwnObservation
Title: "CitizensOwnObservation"
Parent: Observation
Description: "Citizens own observation of performance level (udførelse) or importance level (betydning) as defined by FSIII"

* code from KLCitizenObservationCodesFSIII

* value[x] only CodeableConcept
* valueCodeableConcept from KLCitizenObservationResultCodesFSIII

* focus 1..1
* focus only Reference(KLCommonCareSocialCondition or KLCommonCareSocialMatterOfInterest)

* subject only Reference(KLCommonCitizen)

* effective[x] 1..1
* effective[x] only dateTime

* encounter only Reference(KLCommonCareSocialEncounter)

* performer only Reference(KLCommonPractitioner)

* code.coding ^short = "[DK] borgervurderingskode"
* valueCodeableConcept.coding ^short = "[DK] borgervurderingsresultat"
* subject ^short = "[DK] borgervurderingssubjekt"
* encounter ^short = "[DK] borgervurderingskontakt"
* performer ^short = "[DK] observationsansvarlig"
* focus ^short = "[DK] borgervurderingsfokus"
* effectiveDateTime ^short = "[DK] borgervurderingstid"
* status ^short = "[DK] borgervurderingsstatus"



Instance: JudithGaa
InstanceOf: KLCommonCareSocialCitizensOwnObservation
Usage: #example
Title: "Judith Gå Egenvurdering"
Description: "Judiths vurdering af egen evne til at gå"
* code.coding = $FSIII#D
* valueCodeableConcept = $FSIII#D2
* subject = Reference(Judith)
* focus = Reference(ConditionWalking)
* effectiveDateTime = 2020-08-11
* status = #final
* performer = Reference(HanneFraVisitationenAalborg)


---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialCompletedIntervention.fsh

Profile: KLCommonCareSocialCompletedIntervention
Parent: Procedure
Title: "CompletedIntervention"
Description: "Documentation for completed inteventions (activities related to one and only one encounter) in Danish municipalities"

* complication 0..1
* complication from KLComplicationCodesSCT
* note 0..1
* subject only Reference(KLCommonCitizen)
* recorder only Reference(KLCommonPractitioner)
* code from KLInterventions (required)
* basedOn only Reference(KLCommonCareSocialPlannedIntervention or KLCommonCareSocialServiceRequest)
* encounter only Reference(KLCommonCareSocialEncounter)
* note.author[x] 0..0

//Danish descriptions
* status ^short = "[DK] leveretIndsatsAktivitetstatus"
* statusReason.text  ^short = "[DK] leveretIndsatsAktivitetstatusTekst"
* complication.coding ^short = "[DK] leveretIndsatsAktivitetAfvigelseskode"
* complication.text ^short = "[DK] leveretIndsatsAktivitetAfvigelsestekst"
* note.text ^short = "[DK] leveretIndsatsAktivitetNotat"
* subject ^short = "[DK] leveretIndsatsAktivitetSubjekt"
* recorder ^short = "[DK] leveretIndsatsAktivitetDokumenterendeLeverandør"
* code.coding ^short = "[DK] leveretIndsatsAktivitetKode"
* basedOn ^short = "[DK] leveretIndsatsAktivitetbevilling"
* encounter ^short = "[DK] leveretIndsatsAktivitetKontakt"
* performedPeriod.start ^short = "[DK] leveretIndsatsAktivitetStart"
* performedPeriod.end ^short = "[DK] leveretIndsatsAktivitetSlut"

Instance: AkutSygeplejeMark
InstanceOf: KLCommonCareSocialCompletedIntervention
Title: "Akutsygepleje Mark"
Description: "Levering af indsats til Mark vedr. undersøgelser og måling af værdier efter henvisning fra læge vedr. akut sygepleje"
Usage: #example
* status = #completed
* note.text = "Vitale værdier målt, blodtrykket er lavt. Vurderer efter samtale med borger, at han ikke drikker nok vand til daglig. Ringet til praktiserende læge, og har aftalt, at hun vurderer blodtryk og væskebalance og giver besked hvis akutsygeplejen skal gøre yderligere."
* complication.coding = SCT#160245001
* subject = Reference(Mark)
* recorder = Reference(AbrahamFraAkutSygeplejen)
* code = $FSIII#G1.41 "Undersøgelser og måling af værdier"
* basedOn = Reference(HenvisningFraLageVedrAkutSygepleje)
* encounter = Reference(MarkOgAkutsygeplejerske)

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialCondition.fsh

Profile:        KLCommonCareSocialCondition
Parent:         Condition
Title:          "Condition"
Description:    """
Detailed information about conditions in Danish municiplities health, social and elderly care.
"""
//Setting the cardinality of the clinical status
* clinicalStatus 1..1
//Setting cardinality of recordedDate (oprettelsestid)
* recordedDate 0..1
//Declaring the cardinality of code
* code 1..1
//Slicing code, declaring disciminator, and slicing type
* code.coding ^slicing.discriminator.type = #value
* code.coding ^slicing.discriminator.path = "system"
* code.coding ^slicing.rules = #open
* code.coding ^slicing.ordered = false   // can be omitted, since false is the default
* code.coding ^slicing.description = "Slice based on the code.system value which allow both a FSIII/FFB condition code and a SNOMED CT code to represent a condition"  // optional - does not appear
//Declaring the slices, and their cardinalities, to allow a KL-code and a SNOMED CT code
* code.coding contains
   FSIIIConditionCode 0..1 and FFBConditionCode 0..1 and SCTConditionCode 0..1 

//Declaring the value set binding for the KLConditionCode slice, and setting the system.
//System is fixed to allow the slicing to work
* code.coding[FSIIIConditionCode] from KLConditionCodesFSIII (required)
* code.coding[FSIIIConditionCode].system = $FSIII

* code.coding[FFBConditionCode] from KLConditionCodesFFB (required)
* code.coding[FFBConditionCode].system = $FFB

//Declaring the value set binding for the SCTConditionCode slice, and setting the system.
//System is fixed to allow the slicing to work (See Aliases for value set, and system info)
* code.coding[SCTConditionCode] from SCTConditionValueset (required)
* code.coding[SCTConditionCode].system = SCT

//Setting the value set of the severities attribute
* severity from KLSeverities (required)
* severity ?!
* severity ^isModifierReason = "The ValueSet include values that modifies the model becuase they state that the condition is not relevant"

//Declaring extensions, used in this profile. 
//See extension file for the locally defined and,
//aliases for the externaly defined
* extension contains
   ExtEventHist named eventHistory 0..* and 
   ExtDueTo named dueTo 0..1 and
   FollowUpEncounter named followUpEncounter 0..1 and
   ConditionLastAssertedDate named conditionLastAssertedDate 0..1

//Specifying the use af the extension in this profile, by constraining content futher
* extension[dueTo].value[x] only Reference
* extension[dueTo].valueReference only Reference(KLCommonCareSocialCondition or KLCommonCareSocialFocusCondition)

//Specifying datatype of abatement, subject, asserter and evidence
* abatement[x] only dateTime
* subject only Reference(KLCommonCitizen)
* asserter only Reference(KLCommonPractitioner)
* evidence.detail only Reference(KLCommonCareSocialMatterOfInterest or KLCommonCareSocialFollowUp)

//Specifying note (fagligt notat)
* note.author[x] only Reference
* note.authorReference only Reference(KLCommonPractitioner)
* note.extension contains
   MatterOfInterestInformer named matterOfInterestInformer 0..1

//Specifying dansih descriptions
* code.coding ^short = "[DK] tilstandskode"
* code.coding[FSIIIConditionCode] ^short = "[DK] FSIII tilstandskode"
* code.coding[FFBConditionCode] ^short = "[DK] FFB undertemakode"
* code.coding[SCTConditionCode] ^short = "[DK] SNOMED CT tilstandskode"
* severity.coding ^short = "[DK] tilstandssværhedsgrad" 
* clinicalStatus ^short = "[DK] tilstandsstatus"
* verificationStatus ^short = "[DK] tilstandsstatus"
* code.text ^short = "[DK] tilstandsvurdering" 
* note.text ^short = "[DK] tilstandFagligtNotat" 
* recordedDate ^short = "[DK] tilstandsoprettelsestid" 
* abatementDateTime ^short = "[DK] tilstandsafslutningstid" 
* extension[followUpEncounter] ^short = "[DK] tilstandsplanlagtOpfølgning" 
* extension[dueTo] ^short = "[DK] tilstandsårsag" 
* subject ^short = "[DK] tilstandssubjekt" 
* asserter ^short = "[DK] tilstandsansvarlig" 
* extension[eventHistory] ^short = "[DK] tilstandsændringshistorie" 
* evidence.detail ^short = "[DK] tilstandsevidens (herunder tilstandOplysning og tilstandOpfølgningsresultat)" 
* category.coding ^short = "[DK] tilstandsfokus"
* note.extension[matterOfInterestInformer] ^short = "[DK] tilstandsInformant"
* extension[conditionLastAssertedDate] ^short = "[DK] tilstandSidstVurderetTid"
 
* code.coding SU
* severity.coding SU
* note.text SU
* extension[followUpEncounter] SU 
* extension[dueTo]  SU
* extension[eventHistory] SU
* extension[conditionLastAssertedDate] SU


// Invariant: Severity-not-allowed-in-nursing
// Description: "The severity is not allowed for nursing conditions"
// Severity: #error
// Expression: "(severity.empty() and code.coding.memberOf('http://kl.dk/fhir/common/caresocial/ValueSet/KLConditionCodesNursing'))"

// Invariant: If-severity-is-notRelevant-condition-status-should-reflect-it
// Description: "The severity might hold a not relevant OR not evaluated status, this should correspond correctly to Condition status attributes"
// Severity: #error
// Expression: "(severity.coding.code=’B6’ and (verificationStatus.coding.code='confirmed').not()) 
//          or (severity.coding.code=’B6’ and clinicalStatus.coding.code.subsumes('inactive'))
//          or (severity.coding.code=’2254dac8-8aa3-4334-8502-9720194f49ad’ and verificationStatus.coding.code='confirmed')
//          or (severity.coding.code=’2254dac8-8aa3-4334-8502-9720194f49ad’ and ClinicalStatus.coding.code.subsumes('active'))" 




Instance: ConditionPressureUlcer
InstanceOf: KLCommonCareSocialCondition
Description: "Example of the citizen, Mark, who has a pressure ulcer"
Usage: #example
* code.coding[0] = $FSIII#I4.4 "Problemer med tryksår"
* code.coding[1] = SCT#1163220007 //Pressure injury stage II
* code.text = "Tryksår i stadium 2, siddende på venstre lår. 4cmx5cm, dybde 3mm, ingen infektion."
* clinicalStatus = CONCLIN#active
* category.coding.system = "http://terminology.hl7.org/CodeSystem/condition-category"
* category.coding.code = #problem-list-item
* subject = Reference(Mark)
* recordedDate = 2020-06-05
* extension[followUpEncounter].valueReference = Reference(MarkFollowUpPlanned)
* asserter = Reference(HanneFraVisitationenAalborg)
* evidence.detail = Reference(SkinInformationMark)

Instance: ConditionWalking
InstanceOf: KLCommonCareSocialCondition
Description: "Borgeren judith der har udfordringer med at gå"
Title: "Judith Gå"
Usage: #example
* clinicalStatus.coding.code = #active
* clinicalStatus.coding.system = "http://terminology.hl7.org/CodeSystem/condition-clinical"
* code.coding = $FSIII#J3.8
* code.coding.display = "Gå"
* code.text = "Hun har en meget dårlig gangfunktion, selv om hun bruger rollator"
* category.coding.system = "http://terminology.hl7.org/CodeSystem/condition-category"
* category.coding.code = #problem-list-item
* severity = $FSIII#B4 "Svære begrænsninger"
* subject = Reference(Judith)
* recordedDate = 2020-08-11
* asserter = Reference(HanneFraVisitationenAalborg)

Instance: ConditionCleaning
InstanceOf: KLCommonCareSocialCondition
Description: "Borgeren Andreas der har udfordringer med rengøring"
Title: "Andreas rengøring"
Usage: #example
* subject = Reference(Andreas)
* clinicalStatus.coding.code = #active
* clinicalStatus.coding.system = "http://terminology.hl7.org/CodeSystem/condition-clinical"
* code.coding = $FFB#8f32c948-41c4-49d7-8913-cdeede2e7fe1
* code.coding.display = "Gøre rent"
* severity.coding = $FFB#cae545f5-2813-4d79-98fc-0a7d770af3cd
* severity.coding.display = "Svært nedsat funktionsevne"
* category.coding.system = "http://terminology.hl7.org/CodeSystem/condition-category"
* category.coding.code = #problem-list-item
* recordedDate = 2020-08-12
* asserter = Reference(BirteFraVisitationenMorsoe)

Instance: ConditionCleaningWithNote
InstanceOf: KLCommonCareSocialCondition
Title: "Andreas rengøring med notat"
Description: "Borgeren Andreas der har udfordringer med rengøring, og en udfører fra Hvidbjerghus, der laver et notat"
Usage: #example
* subject = Reference(Andreas)
* clinicalStatus.coding.code = #active
* clinicalStatus.coding.system = "http://terminology.hl7.org/CodeSystem/condition-clinical"
* code.coding = $FFB#8f32c948-41c4-49d7-8913-cdeede2e7fe1
* code.coding.display = "Gøre rent"
* severity.coding = $FFB#cae545f5-2813-4d79-98fc-0a7d770af3cd
* severity.coding.display = "Svært nedsat funktionsevne"
* category.coding.system = "http://terminology.hl7.org/CodeSystem/condition-category"
* category.coding.code = #problem-list-item
* recordedDate = 2020-08-12
* asserter = Reference(BirteFraVisitationenMorsoe)
* note.text = "Andreas er blevet bedre til at rydde op og gøre rent efter sig, når han har spist. Ryddelighed og renlighed på værelset kræver fortsat meget støtte"
* note.authorReference = Reference(AnneFraHvidbjerghus)

Instance: ConditionCareingForOwnHealthPerformerNoteFFB
InstanceOf: KLCommonCareSocialCondition
Title: "Andreas notat varetage egen sundhed"
Description: "Andreas notat vedr. det at varetage egen sundhed, når tilstanden ikke er kendt"
Usage: #example
* subject = Reference(Andreas)
* clinicalStatus.coding.code = #active
* clinicalStatus.coding.system = "http://terminology.hl7.org/CodeSystem/condition-clinical"
* verificationStatus.coding.code = #unconfirmed
* verificationStatus.coding.system = VerSTATUS
* code.coding = $FFB#4a58417e-9a75-43f2-9763-66505050159f	"Varetage egen sundhed"
* recordedDate = 2020-12-12
* note.text = "Andreas spiser mere og mere usundt, og ser ud til at have haft en betydelig vægtstigning efter at være begyndt i botilbuddet."
* note.authorReference = Reference(AnneFraHvidbjerghus)
* asserter = Reference(AnneFraHvidbjerghus)

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialEncounter.fsh

Profile:        KLCommonCareSocialEncounter
Parent:         Encounter
Title:          "Encounter"
Description:    "Encounters used for care and social services in Danish municipalities."

* type from KLEncounterTypes (required)
* period 1..1
* period.start 1..1
* participant.individual only Reference(KLCommonPractitioner)
* subject only Reference(KLCommonCitizen)


* status ^short = "[DK] borgerkontaktstatus"
* type.coding ^short = "[DK] borgerkontakttype"
* period.start ^short = "[DK] borgerkontaktstart"
* period.end ^short = "[DK] borgerkontaktslut"
* length ^short = "[DK] borgerkontaktlængde"
* participant ^short = "[DK] borgerkontaktudfører"
* subject ^short = "[DK] borgerkontaktsubjekt"
* class ^short = "[DK] borgerkontaktklasse"
* serviceProvider ^short = "[DK] borgerkontaktansvarlig"

Instance: MarkFollowUpPlanned
InstanceOf: KLCommonCareSocialEncounter
Title: "Mark Opfølgning Planlagt"
Usage: #example
Description: "Mark's planlagte opfølgning, med periode.start fremtidigt"
* type = $CareSocialCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* period.start = 2020-07-22
* status = EncounterStatus#planned
* subject = Reference(Mark)
* class = V3ACTCODES#HH

Instance: MarkOgAkutsygeplejerske
InstanceOf: KLCommonCareSocialEncounter
Title: "Mark og Akutsygeplejerske"
Usage: #example
Description: "Kontakt hvor der leveres en akutindsats til Mark"
* type = $CareSocialCodes#15775b0a-7ec6-469e-9d3c-a81fbc9a1b45 "udførelse af akutindsats"
* period.start = 2020-06-21T15:30:00.000Z
* status = EncounterStatus#finished
* subject = Reference(Mark)
* participant.individual = Reference(AbrahamFraAkutSygeplejen)
* class = V3ACTCODES#HH

Instance: MarkogSaarsygeplejerske
InstanceOf: KLCommonCareSocialEncounter
Title: "Mark og sårsygepleje"
Usage: #example
Description: "Kontakt hvor der leveres en sårbehandling til Mark efter planen"
* type = $CareSocialCodes#784275f1-6822-4a88-b361-d958007d5253	//udførelse af planlagt indsats "udførelse af akutindsats"
* period.start = 2020-06-07T15:30:00.000Z
* status = EncounterStatus#finished
* subject = Reference(Mark)
* participant.individual = Reference(NatasjaFraSygeplejen)
* class = V3ACTCODES#HH

Instance: MarkogUdredningSygepleje
InstanceOf: KLCommonCareSocialEncounter
Title: "Mark og udredningSygepleje"
Usage: #example
Description: "Kontakt hvor der udføres en sygeplejefaglig udredning på Mark"
* type = $CareSocialCodes#829ac647-c7fc-4964-836b-f708d886e0e3 //oplysning
* period.start = 2020-06-05
* status = EncounterStatus#finished
* subject = Reference(Mark)
* participant.individual = Reference(HanneFraVisitationenAalborg)
* class = V3ACTCODES#HH

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialEvaluation.fsh

Profile:        KLCommonCareSocialEvaluation
Parent:         Observation
Title:          "Evaluation"
Description:    "Professional evaluation on citizen status based on gathered information, conditions, observations and citizen preferences used in Danish municipalities"
* code.coding ^slicing.discriminator.type = #value
* code.coding ^slicing.discriminator.path = "system"
* code.coding ^slicing.rules = #open

* code.coding 1..2
* code.coding contains
   klEvaluationCode 1..1 and sctEvaluationCode 0..1

* code.coding[klEvaluationCode] from KLEvaluationTypeCodes (required)
* code.coding[klEvaluationCode].system = $CareSocialCodes

* code.coding[sctEvaluationCode] from KLEvaluationTypeCodesSCT (required)
* code.coding[sctEvaluationCode].system = SCT

* value[x] only CodeableConcept
* valueCodeableConcept.coding from KLNeedsAssessmentCodesFFB //kun for støttebehov
* subject only Reference(KLCommonCitizen)
* encounter only Reference(KLCommonCareSocialEncounter)
* performer only Reference(KLCommonPractitioner)
* effective[x] 1..1
* effective[x] only dateTime

* code ^short = "[DK] vurderingskode"
* valueCodeableConcept.text ^short = "[DK] vurderingsresultat"
* valueCodeableConcept.coding ^short = "[DK] struktureretVurdering"
* subject ^short = "[DK] vurderingssubjekt"
* encounter ^short = "[DK] vurderingskontakt"
* performer ^short = "[DK] vurderingsansvarlig"
* basedOn ^short = "[DK] vurderingBaseretPå"
* effectiveDateTime ^short = "[DK] vurderingstid"
* status ^short = "[DK] vurderingsstatus"

Instance: AndreasStottebehov
InstanceOf: KLCommonCareSocialEvaluation
Title: "Andreas støttebehov"
Description: "Visitationen vurderer at Andreas har et højt støttebehov"
Usage: #example
* code.coding[klEvaluationCode] = $CareSocialCodes#effe55c7-572c-4a99-8fb4-2a9dda2f6572 "FFB støttebehovsvurdering"
* code.coding[sctEvaluationCode] = SCT#225344000 //"vurdering af graden af påkrævet hjælp"
* valueCodeableConcept.text = "Andreas støttebehov er meget højt, når det drejer sig om relationer. Vedr. daglige rutiner er det mindre"
* valueCodeableConcept.coding = $FFB#b99a0790-4d70-4152-b149-3fe58b745583 "Højt støttebehov"
* effectiveDateTime = 2020-08-12
* status = #final
* subject = Reference(Andreas)
* performer = Reference(BirteFraVisitationenMorsoe)

Instance: MarkHelhedsvurdering
InstanceOf: KLCommonCareSocialEvaluation
Title: "Mark helhedsvurdering"
Description: "Eksempel på Marks helhedvurdering, som er opdateret efter der er lavet en sygeplejefaglig udredning"
Usage: #example
* code.coding[klEvaluationCode] = $CareSocialCodes#54c4ffea-7caf-4edc-8aa9-ef6e0be26c4c //"FSIII helhedsvurdering"
* code.coding[sctEvaluationCode] = SCT#225400002 //|Personal assessment (procedure)|
* valueCodeableConcept.text = "Mark har dårlig mobilitet, og derfor brug for hjælp til større rengøringsopgaver. Har fået konstateret et tryksår. Har hævede fødder som kan være udtryk for et cirkulatorisk problem."
* effectiveDateTime = 2020-06-05
* status = #final
* subject = Reference(Mark)
* performer = Reference(HanneFraVisitationenAalborg)
* encounter = Reference(MarkogUdredningSygepleje)

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialFocusCondition.fsh

Profile:        KLCommonCareSocialFocusCondition
Parent:         Condition
Title:          "FocusCondition"
Description:    "Conditions which may be used to express the focus of an intervention or the problem of a citizen in Danish municipalities. Mostly used for cross sector use cases."

//Slicing code, declaring disciminator, and slicing type
* code.coding ^slicing.discriminator.type = #value
* code.coding ^slicing.discriminator.path = "system"
* code.coding ^slicing.rules = #open
* code.coding ^slicing.ordered = false   // can be omitted, since false is the default
* code.coding ^slicing.description = "Slice based on the code.system value which allow both a FSIII/FFB condition code and a SNOMED CT code to represent a condition"  // optional - does not appear
//Declaring the slices, and their cardinalities, to allow a KL-code and a SNOMED CT code
* code.coding contains
   FSIIIConditionCode 0..1 and SCTConditionCode 0..1 and FFBCodesCT 0..1 and ICD10codes 0..1 and ICPC2codes 0..1

//Declaring the value set binding for the KLConditionCode slice, and setting the system.
//System is fixed to allow the slicing to work
* code.coding[FSIIIConditionCode] from KLConditionCodesFSIII (required)
* code.coding[FSIIIConditionCode].system = $FSIII

//Declaring the value set binding for the SCTConditionCode slice, and setting the system.
//System is fixed to allow the slicing to work (See Aliases for value set, and system info)
* code.coding[SCTConditionCode] from SCTConditionValueset (required)
* code.coding[SCTConditionCode].system = SCT

* code.coding[FFBCodesCT] from KLConditionsAndTargetGroupsFFB (required)
* code.coding[FFBCodesCT].system = $FFB

* code.coding[ICD10codes].system = "urn:oid:1.2.208.176.2.4.12"

* code.coding[ICPC2codes].system = ICPC2DK

//Specifying datatype of abatement, subject, asserter and evidence
* subject only Reference(Patient)
* asserter only Reference(Practitioner)

//Specifying note (fagligt notat)
* note.author[x] only Reference
* note.authorReference only Reference(Practitioner)

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

Instance: AndreasMaalgruppeUdviklingshamning
InstanceOf: KLCommonCareSocialFocusCondition
Title: "Andreas målgruppe udviklingshæmning"
Description: "Andreas' målgruppe"
Usage: #example
* code.coding[FFBCodesCT] = $FFB#97c355cc-84e3-46d0-ac1b-00bc627d089f "Udviklingshæmning"
* subject = Reference(Andreas)
* asserter = Reference(MarianneLaege)
* recorder = Reference(BirteFraVisitationenMorsoe)
* recordedDate = 2020-07-06
* onsetAge.value = 1
* onsetAge.code = #a
* onsetAge.system = UCUM
* onsetAge.unit = "år"
* clinicalStatus = CONCLIN#active
* verificationStatus = VerSTATUS#confirmed

Instance: JudithDiabetes
InstanceOf: KLCommonCareSocialFocusCondition
Title: "Judith diabetes"
Description: "En diagnose som registreret i kommunen, hvor Hanne fra Aalborg har registreret informationen fra lægen Marianne, som fx kunne komme fra diabetescenteret på hospitalet"
Usage: #example
* code.coding[ICD10codes].system = "urn:oid:1.2.208.176.2.4.12"
* code.coding[ICD10codes].code = #DE11
* code.coding[ICD10codes].display = "Type 2-diabetes (kan ikke valideres fordi der ikke er adgang til koderne)"
* subject = Reference(Judith)
* asserter = Reference(MarianneLaege)
* recorder = Reference(HanneFraVisitationenAalborg)
* onsetDateTime = 2017-04-01
* recordedDate = 2020-03-15
* clinicalStatus = CONCLIN#active
* verificationStatus = VerSTATUS#confirmed


---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialFollowUp.fsh

Profile:        KLCommonCareSocialFollowUp
Parent:         Observation
Title:          "FollowUp"
Description:    "Follow-up results used in Danish municipalities"

* code = SCT#712744002 // |Evaluation of care plan (procedure)| opfølgning
* value[x] only CodeableConcept
* valueCodeableConcept from KLFollowUpCodes
* subject only Reference(KLCommonCitizen)
* encounter only Reference(KLCommonCareSocialEncounter)
* performer only Reference(KLCommonPractitioner)
* effective[x] 1..1
* effective[x] only dateTime
* focus only Reference(KLCommonCareSocialPlannedIntervention or KLCommonCareSocialCondition or KLCommonCareSocialCarePlan) // As in Gateway - however, consider if the relationship might be reversed dropping the use of the focus attribute.

* code.coding ^short = "[DK] opfølgningsresultatkode"
* valueCodeableConcept.text ^short = "[DK] opfølgningsresultat"
* valueCodeableConcept.coding ^short = "[DK] struktureretOpfølgningsresultat"
* subject ^short = "[DK] opfølgningsresultatSubjekt"
* encounter ^short = "[DK] opfølgningsresultatKontakt"
* performer ^short = "[DK] opfølgningsresultatAnsvarlig"
* effectiveDateTime ^short = "[DK] opfølgningsresultatTid"
* status ^short = "[DK] opfølgningsresultatStatus"
* focus ^short = "[DK] opfølgningsresultatFokus"

Instance: MarkHjemmeplejeRevisitation
InstanceOf: KLCommonCareSocialFollowUp
Title: "Marks Hjemmepleje Revisitation"
Description: "Eksempel på opfølgningsresultatet revisitation"
Usage: #example
* subject = Reference(Mark)
* code = SCT#712744002
* valueCodeableConcept.text = "Borgers funktionsevne er blevet bedre, særligt ift. mobilitet. Der skal ses på om nogle af §83 indsatserne, med fordel kan gøres til §83a for yderligere at styrke hverdags rehabiliteringsindsatsen og dermed borgers funktionsniveau. "
* valueCodeableConcept = $FSIII#E4 "revisitation"
* effectiveDateTime = 2020-04-11
* performer = Reference(HanneFraVisitationenAalborg)
* status = #final

Instance: AndreasRevisitation
InstanceOf: KLCommonCareSocialFollowUp
Title: "Andreas Revisitation"
Description: "Eksempel på opfølgningsresultatet revisitation"
Usage: #example
* subject = Reference(Andreas)
* code = SCT#712744002
* valueCodeableConcept.text = "Det midlertidige botilbud har været godt for Andreas og hans mor. Andreas har udviklet sig positivt vedr. sociale relationer i perioden. Det vurderes at Andreas skal revisiteres mhp. at få tildelt alment botilbud"
* valueCodeableConcept = $FFB#b4c01aa8-82fd-44e4-83ff-ca19ec02c779
* effectiveDateTime = 2020-08-05
* performer = Reference(BirteFraVisitationenMorsoe)
* status = #final

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialGoal.fsh

Profile: KLCommonCareSocialGoal
Parent: Goal
Title: "Goal"
Description: "Goal as defined in Danish municipalities"

* category 1..1
* category from KLGoalTypeCodes
* target.measure from KLTargetMeasureCodes (extensible)

* target ^slicing.discriminator.type = #value
* target ^slicing.discriminator.path = "measure"
* target ^slicing.rules = #open

//Declaring the slices, and their cardinalities 
* target contains
   severitySlice 0..1 and changeValueSlice 0..1

//Declaring the value set binding for the KLConditionCode slice, and setting the system.
//System is fixed to allow the slicing to work
* target[severitySlice].detail[x] only CodeableConcept
* target[severitySlice].detailCodeableConcept from KLSeverities
* target[severitySlice].measure = $CareSocialCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa //"funktionsevneniveau"
* target[changeValueSlice].detail[x] only CodeableConcept
* target[changeValueSlice].detailCodeableConcept from KLChangeValueCodes
* target[changeValueSlice].measure = $CareSocialCodes#90c48f03-f194-4b2f-ad7d-6cba1069ae48 //"måltype"
* subject only Reference(KLCommonCitizen)
* expressedBy only Reference(KLCommonPractitioner or KLCommonCitizen)
* addresses only Reference(KLCommonCareSocialCondition or KLCommonCareSocialMatterOfInterest)
* addresses.extension contains ConditionRank named conditionRank 0..1 //only one with ConditionRank 1, this needs to be a condition, not an information. 
* extension contains
   GoalRelationship named goalRelationship 0..1
* extension[goalRelationship].extension[type].valueCodeableConcept.text = "based-on" //bruges til at relaterer et delmål, til et indsatsmål
* extension[goalRelationship].extension[target].valueReference only Reference(KLCommonCareSocialGoal)
* outcomeCode.extension contains
   MatterOfInterestInformer named matterOfInterestInformer 0..1

* category ^short = "[DK] målkategori"
* target[severitySlice] ^short = "[DK] målSværhedsgrad"
* target[changeValueSlice] ^short = "[DK] måltype"
* description ^short = "[DK] målbeskrivelse"
* subject ^short = "[DK] målSubjekt"
* expressedBy ^short = "[DK] målAnsvarlig"
* addresses ^short = "[DK] målrelateret"
* addresses.extension[conditionRank] ^short = "[DK] målrelateretRang"
* note.text ^short = "[DK] målnotat"
* outcomeCode.text ^short = "[DK] målvurdering"
* outcomeCode.extension[matterOfInterestInformer] ^short = "[DK] målvurderingsInformant"
* target.measure ^short = "[DK] målemetode"
* extension[goalRelationship].extension[type].valueCodeableConcept ^short = "[DK] delmålBaseretPå"
* extension[goalRelationship].extension[target].valueReference ^short = "[DK] delmålBaseretPå"

Profile: KLCommonCareSocialPurpose
Title: "Goal - Purpose"
Parent: KLCommonCareSocialGoal
Description: "Purpose as defined by FFB in Danish municipalities"
* category = $CareSocialCodes#424827b1-23aa-4848-962b-56ee47def560

Profile: KLCommonCareSocialFFBGoal
Title: "Goal - FFB Intervention"
Parent: KLCommonCareSocialGoal
Description: "FFB goal as defined by FFB in Danish municipalities"
* category = $CareSocialCodes#0bb3daef-538d-45dc-b444-abdbcb63f6bc "FFB indsatsmål"

Instance: JudithForventetTilstand
InstanceOf: KLCommonCareSocialGoal
Title: "Judith forventet tilstand"
Description: "Forventet tilstand for Judith, der har et mobilitetsproblem"
Usage: #example
* category = $CareSocialCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad //"FSIII tilstandsmål"
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4 "Tilstand forsvinder, mindskes eller forbliver uændret"
* target[severitySlice].measure.coding.code = #66959f77-6e2a-4574-8423-3ff097f8b9fa //severity
* target[severitySlice].measure.coding.system = $CareSocialCodes
* target[severitySlice].detailCodeableConcept.coding = $FSIII#B3 "Moderate begrænsninger"
* addresses = Reference(ConditionWalking)
* subject = Reference(Judith)
* expressedBy = Reference(HanneFraVisitationenAalborg)
* lifecycleStatus = GoalStatusCodes#active

Instance: MarkForventetTilstand
InstanceOf: KLCommonCareSocialGoal
Title: "Mark forventet tilstand"
Description: "Forventet tilstand for Mark, der har et tryksårsproblem"
Usage: #example
* category = $CareSocialCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad "FSIII tilstandsmål"
* description.text = "Tryksåret er helet"
* target[changeValueSlice].measure.coding.code = #90c48f03-f194-4b2f-ad7d-6cba1069ae48
* target[changeValueSlice].measure.coding.system = $CareSocialCodes
* target[changeValueSlice].detailCodeableConcept.coding = $FSIII#81c827de-ef31-4410-aa57-0d1d1bc6c264 "Tilstand forsvinder"
* addresses = Reference(ConditionPressureUlcer)
* subject = Reference(Mark)
* expressedBy = Reference(HanneFraVisitationenAalborg)
* lifecycleStatus = GoalStatusCodes#active

Instance: MarkIndsatsmaal
InstanceOf: KLCommonCareSocialGoal
Title: "Mark indsatsmål"
Description: "FSIII indsatsmål for Mark, der har et tryksårsproblem"
Usage: #example
* category = $CareSocialCodes#e6f35a88-6665-4471-9dce-9a98854532b4 "FSIII indsatsmål"
* description.text = "Målemetoden: Sårets areal sættes op for Marks tryksår"
* target.measure.coding = SCT#420753006 "Pressure ulcer surface area (observable entity)"
* addresses = Reference(ConditionPressureUlcer)
* subject = Reference(Mark)
* expressedBy = Reference(HanneFraVisitationenAalborg)
* lifecycleStatus = GoalStatusCodes#active

Instance: AndreasMaalOnsker
InstanceOf: KLCommonCareSocialGoal
Title: "Andreas mål og ønsker"
Description: "Mål og ønsker for Andreas"
Usage: #example
* category = $CareSocialCodes#416fe27d-3ccf-4390-8742-8b52a9d8dc78 "FFB borgers mål og ønsker"
* description.text = "Andreas ønsker en hverdag med venner og aktiviteter, så han har noget at stå op til og søde mennesker at være sammen med. Det er vigtigt for ham at være ren og pæn, og selv stå for det i videst muligt omfang."
* subject = Reference(Andreas)
* lifecycleStatus = GoalStatusCodes#active
* expressedBy = Reference(BirteFraVisitationenMorsoe)

Instance: AndreasIndsatsformaal
InstanceOf: KLCommonCareSocialPurpose
Title: "Andreas indsatsformål"
Description: "Indsatsformål for Andreas"
Usage: #example
* category = $CareSocialCodes#424827b1-23aa-4848-962b-56ee47def560 "Indsatsformål"
* description.text = "Andreas ønsker en hverdag med venner og aktiviteter, så han har noget at stå op til og søde mennesker at være sammen med. Det er vigtigt for ham at være ren og pæn, og selv stå for det i videst mulig omfang."
* subject = Reference(Andreas)
* lifecycleStatus = GoalStatusCodes#active
* expressedBy = Reference(BirteFraVisitationenMorsoe)

Instance: AndreasIndsatsformaal2
InstanceOf: KLCommonCareSocialPurpose
Title: "Andreas indsatsformål ifm ny indsats"
Description: "Indsatsformål for Andreas ifm. at han skifter fra midlertidig til almen botilbud"
Usage: #example
* category = $CareSocialCodes#424827b1-23aa-4848-962b-56ee47def560 "Indsatsformål"
* description.text = "understøtte Andreas i selv at tilegne sig færdigheder, der gør at han kan have kontakt med andre både ift. at samarbejdende om praktiske ting og ift klare almindelige sociale situationer som fx at se film eller spise med en gruppe af jævnaldrende. Desuden at holde orden på sit eget værelse, så han undgår frustration over ikke at kunne finde sine ting."
* subject = Reference(Andreas)
* lifecycleStatus = GoalStatusCodes#active
* expressedBy = Reference(BirteFraVisitationenMorsoe)

Instance: Andreasindsatsmaal
InstanceOf: KLCommonCareSocialFFBGoal
Title: "Andreas indsatsmål"
Description: "Indsatsmål for Andreas"
Usage: #example
* category.coding.code = #0bb3daef-538d-45dc-b444-abdbcb63f6bc
* category.coding.display = "FFB indsatsmål"
* category.coding.system = $CareSocialCodes
* subject = Reference(Andreas)
* lifecycleStatus = GoalStatusCodes#active
* description.text = "holder orden på sit eget værelse"
* target[severitySlice].measure.coding.code = #66959f77-6e2a-4574-8423-3ff097f8b9fa
* target[severitySlice].measure.coding.system = $CareSocialCodes
* target[severitySlice].detailCodeableConcept.coding.code = #8328ce4a-6238-4f73-bf1a-74aadb68eff8
* target[severitySlice].detailCodeableConcept.coding.display = "Let nedsat funktionsevne"
* target[severitySlice].detailCodeableConcept.coding.system = $FFB
* target[changeValueSlice].measure.coding.code = #90c48f03-f194-4b2f-ad7d-6cba1069ae48
* target[changeValueSlice].measure.coding.system = $CareSocialCodes
* target[changeValueSlice].detailCodeableConcept.coding.code = #d41c8072-52f8-42b5-9375-ddbea454d27f
* target[changeValueSlice].detailCodeableConcept.coding.display = "Udvikle funktionsevne"
* target[changeValueSlice].detailCodeableConcept.coding.system = $FFB
* addresses = Reference(ConditionCleaning)
* addresses.extension[conditionRank].valuePositiveInt = 1
* expressedBy = Reference(BirteFraVisitationenMorsoe)

Instance: AndreasindsatsmaalOpfolgning
InstanceOf: KLCommonCareSocialFFBGoal
Title: "Andreas opfølgning på indsatsmål"
Description: "Indsatsmål for Andreas, som dokumenteret efter opfølgningstidspunktet (Tilstanden ikke opdateret, fordi implementation guiden ikke versionshåndterer)"
Usage: #example
* category.coding.code = #0bb3daef-538d-45dc-b444-abdbcb63f6bc
* category.coding.display = "FFB indsatsmål"
* category.coding.system = $CareSocialCodes
* subject = Reference(Andreas)
* lifecycleStatus = GoalStatusCodes#completed
* description.text = "holder orden på sit eget værelse"
* target[severitySlice].measure.coding.code = #66959f77-6e2a-4574-8423-3ff097f8b9fa
* target[severitySlice].measure.coding.system = $CareSocialCodes
* target[severitySlice].detailCodeableConcept.coding.code = #8328ce4a-6238-4f73-bf1a-74aadb68eff8
* target[severitySlice].detailCodeableConcept.coding.display = "Let nedsat funktionsevne"
* target[severitySlice].detailCodeableConcept.coding.system = $FFB
* target[changeValueSlice].measure.coding.code = #90c48f03-f194-4b2f-ad7d-6cba1069ae48
* target[changeValueSlice].measure.coding.system = $CareSocialCodes
* target[changeValueSlice].detailCodeableConcept.coding.code = #d41c8072-52f8-42b5-9375-ddbea454d27f
* target[changeValueSlice].detailCodeableConcept.coding.display = "Udvikle funktionsevne"
* target[changeValueSlice].detailCodeableConcept.coding.system = $FFB
* addresses = Reference(ConditionCleaning)
* addresses.extension[conditionRank].valuePositiveInt = 1
* outcomeCode.text = "Andreas har fået styr på morgenrutiner omkring oprydning på værelset. Skal dog stadig mindes om oprydning ind imellem og har brug for støtte fra piktogrammer."
* outcomeCode.extension[matterOfInterestInformer].valueCodeableConcept = $CareSocialCodes#f6ea2920-7dde-491e-a489-6b99a3904069 "Sagsbehandler"
* expressedBy = Reference(BirteFraVisitationenMorsoe)

Instance: AndreasDelmaal
InstanceOf: KLCommonCareSocialGoal
Title: "Andreas Delmål"
Description: "Delmål for Andreas"
Usage: #example
* category.coding = $CareSocialCodes#6746d4af-145a-4bfd-a672-05c0cf11b53b "FFB delmål"
* subject = Reference(Andreas)
* lifecycleStatus = GoalStatusCodes#active
* description.text = "Første delmål er at Andreas hver morgen for ryddet sit gulv for tøj, og sorteret det i rent og beskidt."
* note.text = "Andreas støttes hver morgen i at få ryddet gulvet. Der er hængt et piktogram op med rutinen trin for trin"
* note.time = 2020-09-10
* extension[goalRelationship].extension[type].valueCodeableConcept.text = "based-on" //bruges til at relaterer et delmål, til et indsatsmål
* extension[goalRelationship].extension[type].valueCodeableConcept.coding.system = "http://terminology.hl7.org/CodeSystem/goal-relationship-type"
* extension[goalRelationship].extension[type].valueCodeableConcept.coding.code = #other
* extension[goalRelationship].extension[target].valueReference = Reference(Andreasindsatsmaal)
* expressedBy = Reference(AnneFraHvidbjerghus)

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialInformationGathering.fsh

Profile: KLCommonCareSocialInformationGathering
Title: "InformationGathering"
Parent: ClinicalImpression
Description: "Information gathering resource used to group all the information collected in a clinical process such af a nursing status, a functional ability evaluation or a social paedagogical review"
* code from KLInformationGatheringTypeCodes (required)
* subject only Reference(KLCommonCitizen)
* assessor only Reference(KLCommonPractitioner)
* effective[x] only dateTime
* encounter only Reference(KLCommonCareSocialEncounter) 
* extension contains BasedOnServiceRequest named basedOnServiceRequest 0..1
* extension[basedOnServiceRequest].valueReference only Reference(KLCommonCareSocialServiceRequest)
* investigation.code from KLInformationGatheringInvestigationCodes (required)
* investigation.item only Reference(KLCommonCareSocialMatterOfInterest or KLCommonCareSocialEvaluation)
* finding.itemReference only Reference(KLCommonCareSocialCondition)

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

Instance: NursingStatusMark
InstanceOf: KLCommonCareSocialInformationGathering
Title: "Mark sygeplejefaglig udredning"
Description: "Borgeren Marks sygeplejefaglige udredning"
Usage: #example
* code.coding = $CareSocialCodes#47fd1468-89da-4803-9d7a-ecc039a30d92 "sygeplejefaglig udredning, FSIII"
* subject = Reference(Mark)
* assessor = Reference(HanneFraVisitationenAalborg)
* effectiveDateTime = 2020-06-05
* encounter = Reference(MarkogUdredningSygepleje)
* investigation[0].code = $FSIII#I7 "Respiration og cirkulation"
* investigation[0].item = Reference(RespirationCirculationInformationMark)
* investigation[1].code = $FSIII#I4 "Hud og slimhinder"
* investigation[1].item = Reference(SkinInformationMark)
* finding.itemReference = Reference(ConditionPressureUlcer)
* status = #completed
* extension[basedOnServiceRequest].valueReference = Reference(HenvendelseVedrSygeplejeMark)


---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialMatterOfInterest.fsh

Profile:        KLCommonCareSocialMatterOfInterest
Parent:         Observation
Title:          "MatterOfInterest"
Description:    "Matter or area of interest in relation to the care of the citizen, as used in Danish municipalities (Oplysning/Område/Tema)"
* code from KLInformationCodes (required)
* value[x] only CodeableConcept
* valueCodeableConcept.coding from KLMatterOfInterestValues
* subject only Reference(KLCommonCitizen)
* encounter only Reference(KLCommonCareSocialEncounter)

* performer 0..1
* performer only Reference(KLCommonPractitioner)
* basedOn 0..1 
* basedOn only Reference(KLCommonCareSocialServiceRequest)


* effective[x] 1..1
* effective[x] only dateTime

// * hasMember ^slicing.discriminator.type = #value
// * hasMember ^slicing.discriminator.path = "resolve().code" /*this is sliced by the code value of the target of the reference 
//                                                             there is a small risk that a self-reference to a home care area will pass the validator. 
//                                                             The alternative is to slice by profile, but this is said to take up a lot of computational power*/ 
// * hasMember ^slicing.rules = #open
// * hasMember ^slicing.ordered = false   // can be omitted, since false is the default
// * hasMember ^slicing.description = "Slice based on the code of the Observation, which is referenced"  // optional - does not appear

// //Declaring the slices, and their cardinalities, 
// * hasMember contains 
//     InformationSeverity 0..1

//* hasMember[InformationSeverity] only Reference(KLCommonCareSocialInformationSeverity)

* extension contains
   MatterOfInterestInformer named matterOfInterestInformer 0..1

* code ^short = "[DK] områdeKode"
* valueCodeableConcept.text ^short = "[DK] områdeTekst"
* subject ^short = "[DK] områdeSubjekt"
* encounter ^short = "[DK] områdeKontakt"
* performer ^short = "[DK] områdeAnsvarlig"
* basedOn ^short = "[DK] områdeOrdre"
* effectiveDateTime ^short = "[DK] områdeTid"
* extension[matterOfInterestInformer] ^short = "[DK] områdeInformant"
* status ^short = "[DK] områdeStatus"


Instance: MobilityInformationJudith
InstanceOf: KLCommonCareSocialMatterOfInterest
Title: "Mobilitet Judith"
Description: "Områdenotat vedr. Judiths mobilitet"
Usage: #example
* subject = Reference(Judith)
* code.coding.code = #J3
* code.coding.system = $FSIII
* code.coding.display = "Mobilitet"
* effectiveDateTime = 2020-08-11T15:28:17-01:00
* valueCodeableConcept.text = "Judith har faldtendens, men er meget dedikeret ift. at lære at bruge sin rollator indendørs og udendørs, og desuden går hun en tur på 30min hver dag"
* performer = Reference(HanneFraVisitationenAalborg)
* status = #final

Instance: RespirationCirculationInformationMark
InstanceOf: KLCommonCareSocialMatterOfInterest
Title: "Respiration og cirkulation Mark"
Description: "Områdenotat vedr. respiration og cirkulation for Mark"
Usage: #example
* subject = Reference(Mark)
* code.coding.code = #I7
* code.coding.system = $FSIII
* code.coding.display = "Respiration og cirkulation"
* effectiveDateTime = 2020-06-05
* valueCodeableConcept.text = "Mark har tendens til hævede fødder og ben, så der er et potentielt problem med cirkulationen, som kan forvære Mark's tryksår"
* performer = Reference(HanneFraVisitationenAalborg)
* status = #final

Instance: SkinInformationMark
InstanceOf: KLCommonCareSocialMatterOfInterest
Title: "Hud og slimhinder Mark"
Description: "Områdenotat vedr. hud og slimhinder for Mark"
Usage: #example
* subject = Reference(Mark)
* code.coding.code = #I4
* code.coding.system = $FSIII
* code.coding.display = "Hud og slimhinder"
* effectiveDateTime = 2020-06-05
* valueCodeableConcept.text = "Tryksår konstateret, ellers er Marks hud fin"
* performer = Reference(HanneFraVisitationenAalborg)
* status = #final

Instance: MentalInformationMads
InstanceOf: KLCommonCareSocialMatterOfInterest
Title: "Mentale funktioner Mads, borgerperspektiv"
Description: "Mads' mentale funktioner, med perspektivet, at det er oplysninger fra borger"
Usage: #example
* subject = Reference(Mads)
* code.coding.code = #25c5c614-305f-46cd-9891-55d564fc30cf
* code.coding.system = $FFB
* code.coding.display = "Mentale funktioner"
* effectiveDateTime = 2020-12-12T13:16:19-04:00
* valueCodeableConcept.text = "Besøg hos Mads, hvor hans mor, Malene, deltager, 3.
september 20xx: Mads fortæller, at han har svært ved at holde orden og have styr
på sine ting. Han vil gerne have noget af ”det der struktur”. Han
fortæller, at han bliver meget gal, når han bliver presset og ikke
kan overskue, det han skal. Så får han ondt bag i hovedet, og det
er som om, han ikke kan tænke. Det kan også ske, hvis andre ikke
behandler ham ordentligt eller ikke forstår ham"
* status = #final
* extension[matterOfInterestInformer].valueCodeableConcept = $CareSocialCodes#25b4e705-2e9a-47a2-b11a-c829316b9d3a
* performer = Reference(KristinaFraVoksensocialomraadet)

Instance: MentalInformationMadsOthers
InstanceOf: KLCommonCareSocialMatterOfInterest
Title: "Mentale funktioner Mads, andres perspektiv"
Description: "Mads' mentale funktioner, med perspektivet, at det er oplysninger af andre"
Usage: #example
* subject = Reference(Mads)
* code.coding.code = #25c5c614-305f-46cd-9891-55d564fc30cf
* code.coding.system = $FFB
* code.coding.display = "Mentale funktioner"
* effectiveDateTime = 2020-12-12T13:16:19-04:00
* valueCodeableConcept.text = "Besøg hos Mads, hvor hans mor, Malene, deltager, 3.
september 20xx: Mads’ mor fortæller, at det altid har været nødvendigt at forberede
Mads i god tid, hvis der skulle ske noget ud over det sædvanlige.
Ligesom det har været nødvendigt at give tid til at omstille sig til at
skulle stoppe med en aktivitet og gå i gang med en anden.
Hun fortæller, at Mads kan koncentrere sig og har tendens til at
nørde, når han er særligt optaget af et emne, fx dinosaurer eller et
computerspil. Når Mads er usikker eller synes, at noget er svært,
er det en udfordring for ham at komme i gang og at fastholde sin
opmærksomhed.
Han tager ikke selv initiativ til at stå op, rydde op eller tage bad.
Det skal han mindes om, og da han var mindre, havde han stor
glæde af en liste over, hvad han skulle om morgenen, som hang
på køleskabet. Han kan godt lide, når tingene forgår i en fast
rækkefølge og er kendte. Mads’ mor kan også genkende Mads’
beskrivelse af, hvordan han får det, når han ikke kan overskue ting.
Han kan godt få nogle meget voldsomme raseriudbrud og smadre
døre og møbler.
Journal fra speciallæge XX, august 20xx: Obj.: Vågen og bevidsthedsklar. Ingen motorisk uro. Der ses tics i
ansigt og skulder, men ingen verbale tics. […] Svarer relevant på
spørgsmål og virker åben og ærlig. […] Skønnes normalbegavet med
en samlet IQ på 110. […] God formel kontakt. God øjenkontakt.
Normal mimik og gestus.
Sub.: Mads har store eksekutive vanskeligheder. Han har svært ved
skift og forandringer, har svært ved at afpasse tiden til aktiviteter.
Han er rigid og afhængig af ydre struktur. […] I samvær med andre
er der normale formelle kontaktevner, men Mads tager tingene
personligt og bogstaveligt. Forstår ironi og underforståethed,
men bliver ensporet ved mange stimuli. […] Der er lette problemer
med vedholdende opmærksomhed og afledning, men ingen
impulsivitet eller hyperaktivitet. […] Følelsesmæssigt bliver Mads
udadreagerende, når han er vred. Vreden udløses af naturlige
årsager, men han kan ikke rumme vreden, og reaktionerne er
overdrevne. […] Der ses ikke øvrige symptomer på angst, OCD,
depression eller psykose."
* status = #final
* extension[matterOfInterestInformer].valueCodeableConcept = $CareSocialCodes#63338442-7b2e-405b-acc0-142361ef19f1
* performer = Reference(KristinaFraVoksensocialomraadet)

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialObservation.fsh

Profile: KLCommonCareSocialObservation
Parent: Observation
Title: "Observation"
Description: "Observations and measurements performed in Danish municipalities"

* code from KLObservationCodes (extensible)
* subject only Reference(KLCommonCitizen)
* encounter only Reference(KLCommonCareSocialEncounter)
* performer only Reference(KLCommonPractitioner)
* basedOn only Reference(KLCommonCareSocialPlannedIntervention or KLCommonCareSocialServiceRequest or KLCommonCareSocialCarePlan)

* code.coding ^short = "[DK] observationskode"
* value[x] ^short = "[DK] observationsresultat"
* subject ^short = "[DK] observationssubjekt"
* encounter ^short = "[DK] observationskontakt"
* performer ^short = "[DK] observationsansvarlig"
* basedOn ^short = "[DK] observationBaseretPå"
* effective[x] ^short = "[DK] observationstid"
* status ^short = "[DK] observationsstatus"

Instance: MarksPuls
InstanceOf: KLCommonCareSocialObservation
Usage: #example
Title: "Marks puls"
Description: "Observation af Marks puls (OBS: Mere specifik profil for puls findes i værktøjsprojektet, dette er udelukkende et eksempel,  dette er udelukkende et eksempel for denne implememnattion guide)"
* code = SCT#8499008 "Pulse"
* subject = Reference(Mark)
* performer = Reference(AbrahamFraAkutSygeplejen)
* basedOn = Reference(HenvisningFraLageVedrAkutSygepleje)
* valueQuantity.value = 78
* valueQuantity.unit = "Slag pr. minut"
* valueQuantity.system = UCUM
* valueQuantity.code = #{beats}/min
* status = #final
* effectiveDateTime = 2020-06-21

Instance: MarksDiastoliske
InstanceOf: KLCommonCareSocialObservation
Usage: #example
Title: "Marks diastoliske blodtryk"
Description: "Observation af Marks diastoliske blodtryk (OBS: Mere specifik profil for blodtryk findes i værktøjsprojektet, dette er udelukkende et eksempel for denne implememnattion guide)"
* code = SCT#271650006 "Diastolic blood pressure"
* subject = Reference(Mark)
* performer = Reference(AbrahamFraAkutSygeplejen)
* basedOn = Reference(HenvisningFraLageVedrAkutSygepleje)
* valueQuantity.value = 120
* valueQuantity.unit = "Millimeter kviksølv"
* valueQuantity.system = UCUM
* valueQuantity.code = #mm[Hg]
* status = #final
* effectiveDateTime = 2020-06-21

Instance: MarksBlodsukker
InstanceOf: KLCommonCareSocialObservation
Usage: #example
Title: "Marks blodsukker"
Description: "Observation af Marks blodsukker"
* code.coding[0] = SCT#434912009 // |glucosekoncentration i blod|
* code.coding[1] = NPU#NPU02195 //
* subject = Reference(Mark)
* performer = Reference(AbrahamFraAkutSygeplejen)
* valueQuantity.value = 3.6
* valueQuantity.unit = "mmol/l"
* valueQuantity.system = UCUM
* valueQuantity.code = #mmol/L
* status = #final
* effectiveDateTime = 2020-06-21
* basedOn = Reference(HenvisningFraLageVedrAkutSygepleje)




---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialPlannedIntervention.fsh

Profile:        KLCommonCareSocialPlannedIntervention
Parent:         CarePlan
Title:          "PlannedIntervention"
Description:    "Planned interventions (indsats/ydelse) in Danish Municipalities"

* activity 1..1
//* activity.detail.code 1..1
* activity.detail.code.coding ^slicing.discriminator.type = #value
* activity.detail.code.coding ^slicing.discriminator.path = "system"
* activity.detail.code.coding ^slicing.rules = #open
* activity.detail.code.coding contains 
   FFBintervention 0..1 and FSIIIlevel2 0..1 and FSIIIlevel3 0..1 and KLECode 0..1

* activity.detail.code.coding[FFBintervention].system = $FFB
* activity.detail.code.coding[FFBintervention] from KLInterventionsFFB

* activity.detail.code.coding[FSIIIlevel2].system = $FSIII
* activity.detail.code.coding[FSIIIlevel2] from KLInterventionsFSIII

* activity.detail.code.coding[FSIIIlevel3].system = KLCommonproprietarySystem
* activity.detail.code.coding[FSIIIlevel3].code 1..1
* activity.detail.code.coding[FSIIIlevel3].display 1..1

* activity.detail.code.coding[KLECode].system = KLE
//* activity.detail.description MS
* activity.detail.performer only Reference(KLCommonOrganization)
* created 1..1
* subject only Reference(KLCommonCitizen)
* author only Reference(KLCommonOrganization)
* extension contains
   FollowUpEncounter named followUpEncounter 0..1 and
   RelevantHist named relevantHistory 0..* and
   MunicipalityCaseNumber named municipalityCaseNumber 0..1

* basedOn only Reference(KLCommonCareSocialCarePlan)
* activity.detail.reasonReference only Reference(KLCommonCareSocialCondition)
* activity.detail.goal only Reference(KLCommonCareSocialGoal)
* activity.outcomeReference only Reference(KLCommonCareSocialEncounter)

//shorts
* activity.detail.code.coding ^short = "[DK] indsatsskode"
* activity.detail.description ^short = "[DK] handlingsanvisning"
* created ^short = "[DK] indsatsoprettelsestid"
* period.start ^short = "[DK] indsatsbevillingstid"
* period.end ^short = "[DK] indsatsafslutningstid"
* status ^short = "[DK] indsatsstatus"
* intent ^short = "[DK] indsatshensigt"
* subject ^short = "[DK] indsatssubjekt"
* author ^short = "[DK] indsatsansvarlig"
* activity.detail.performer ^short = "[DK] indsatsleverandør"
* extension[FollowUpEncounter] ^short = "[DK] indsatsPlanlagtOpfølgning"
* basedOn ^short = "[DK] indsatsDelAfPlan"
* activity.detail.reasonReference ^short = "[DK] indsatsbegrundelse"
* activity.detail.goal ^short = "[DK] indsatsmål"
* activity.outcomeReference ^short = "[DK] indsatsgennemførtAktivitet"
* extension[relevantHistory] ^short = "[DK] indsatsændringshistorie"
* activity.detail.status ^short = "[DK] indsatsAktivitetsstatus"
* extension[municipalityCaseNumber] ^short = "[DK] anledningDokumenteretISag"


Instance: PressureUlcerIntervention
InstanceOf: KLCommonCareSocialPlannedIntervention
Title: "MarkTryksårsindsats"
Description: "Mark's planlagte tryksårsindsats, med én tilknyttet kontakt"
Usage: #example
* activity.detail.code.coding[FSIIIlevel2] = $FSIII#G1.39 "Sårbehandling"
* activity.detail.description = "Tryksår på venstre ben skal tilses og behandles dagligt. Vigtigt at tjekke for infektion"
* created = 2020-05-29
* intent = CarePlanIntentCodes#order
* status = RequestStatusCodes#active
* period.start = 2020-05-30
* author = Reference(HjemmesygeplejeSonderborg)
* activity.detail.status = CarePlanActivityStatus#in-progress
* subject = Reference(Mark)
* author = Reference(HjemmesygeplejeSonderborg)
* activity.detail.performer = Reference(HjemmesygeplejeSonderborg)
* activity.outcomeReference = Reference(MarkogSaarsygeplejerske)

Instance: AndreasSocialeRelationer
InstanceOf: KLCommonCareSocialPlannedIntervention
Title: "AndreasSocialeRelationer"
Description: "Andreas' ydelse sociale relationer"
Usage: #example
* basedOn = Reference(NySocialIndsats)
* activity.detail.code.coding[FFBintervention] = $FFB#05cd5e81-1a3a-4bdd-901b-7ec96c12d990 "Støtte til sociale relationer"
* activity.detail.status = CarePlanActivityStatus#in-progress
* subject = Reference(Andreas)
* intent = CarePlanIntentCodes#order
* status = RequestStatusCodes#active
* created = 2020-08-12

Instance: AndreasDagligeOpgaver
InstanceOf: KLCommonCareSocialPlannedIntervention
Title: "AndreasDagligeOpgaver"
Description: "Andreas' ydelse daglige opgaver"
Usage: #example
* basedOn = Reference(NySocialIndsats)
* activity.detail.code.coding[FFBintervention] = $FFB#638f44df-6bf2-47f8-9935-b8fdc83e5bf5 "Støtte til daglige opgaver i hjemmet"
* activity.detail.status = CarePlanActivityStatus#in-progress
* subject = Reference(Andreas)
* intent = CarePlanIntentCodes#order
* status = RequestStatusCodes#active
* created = 2020-08-12

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCareSocialServiceRequest.fsh

Profile:        KLCommonCareSocialServiceRequest
Parent:         ServiceRequest
Title:          "ServiceRequest"
Description:    "Referals/requests used in Danish municipalities"

* requester 1..1
* requester only Reference(Organization or KLCommonPractitioner) //organization used for people from the outside, KLCommonPractitioner for internal requests
* extension contains
    RequesterType named requesterType 0..1 and
    SubjectConsentToLiaising named subjectConsentToLiasing 0..1 and
    MunicipalityCaseNumber named municipalityCaseNumber 0..1 

* code from KLServicesTypes
* orderDetail from KLInterventions
* subject only Reference(KLCommonCitizen)
* authoredOn 1..1
* reasonReference only Reference(KLCommonCareSocialFocusCondition or KLCommonCareSocialFollowUp) //kan måske slicies på "type" fordi der er hhv en observation og en condition

* requester ^short = "[DK] anledningAnsvarlig"
* extension[requesterType] ^short = "[DK] anledningFra"
* reasonCode.text ^short = "[DK] anledningsÅrsag"
* status ^short = "[DK] anledningsStatus"
* intent ^short = "[DK] anledningsHensigt"
* code.coding ^short = "[DK] anledningsIndsats"
* orderDetail.coding ^short = "[DK] anledningsAnmodetIndsats"
* subject ^short = "[DK] anledningsSubjekt"
* authoredOn ^short = "[DK] anledningstid"
* extension[subjectConsentToLiasing] ^short = "[DK] anledningBorgerIndforståetMed"
* reasonReference ^short = "[DK] Afhængig af datatype enten anledningsBegrundelse eller anledningsÅrsagsreference"
* extension[municipalityCaseNumber] ^short = "[DK] anledningDokumenteretISag"


Instance: HenvendelseFraMorVedrSocialIndsats
InstanceOf: KLCommonCareSocialServiceRequest
Title: "Henvendelse mor social indsats"
Description: "Henvendelse fra mor vedr. social indsats"
Usage: #example
* requester = Reference(SocialOgSundhedMorsoe)
* extension[requesterType].valueCodeableConcept = $FSIII#A2 "Pårørende"
* extension[subjectConsentToLiasing].valueCodeableConcept = $CareSocialCodes#e67035da-9179-466b-99ad-ea86835d38c9 "indforstået"
* reasonCode.text = "Andreas er udviklingshæmmet og bor pt. hjemme hos sin mor. Moderen har fået svær gigt og har derfor ikke mulighed for at have ham boende længere, og Andreas ønsker derfor at komme i et botilbud."
* code = $CareSocialCodes#4a297733-4d66-4726-a933-590d55cf91e0 "Social indsats"
* orderDetail[0] = $FFB#80aa8ea7-4ad8-405f-876a-4c0f89fde06a "Midlertidigt ophold"
* orderDetail[1] = $FFB#638f44df-6bf2-47f8-9935-b8fdc83e5bf5 "Støtte til daglige opgaver i hjemmet"
* subject = Reference(Andreas)
* authoredOn = 2020-06-23
* status = REQUESTSTATUS#active
* intent = REQUESTINTENT#proposal
* reasonReference = Reference(AndreasMaalgruppeUdviklingshamning)

Instance: HenvendelseFraMorVedrSocialIndsatsProvenance
InstanceOf: Provenance
Title: "Provenance, henvendelse mor social indsats"
Description: "Ekstraoplysninger vedr. dokumentationsarbejdsgang og ansvar for henvendelse fra mor vedr. social indsats"
Usage: #example
* target = Reference(HenvendelseFraMorVedrSocialIndsats)
* recorded = 2020-06-23T15:17:24+02:00
* agent[0].type = AGENTTYPE#author
* agent[0].who = Reference(BirteFraVisitationenMorsoe)
* agent[0].onBehalfOf = Reference(SocialOgSundhedMorsoe)
* agent[1].type = AGENTTYPE#informant
* agent[1].who = Reference(AndreasMor)
* reason = PROVENANCEREASON#TREAT

Instance: AndreasMor
InstanceOf: RelatedPerson
Title: "Andreas' Mor, Gitte Hansen"
Description: "Eksempel på pårørende Andreas' mor Gitte"
Usage: #example
* relationship.coding.code = #MTH
* relationship.coding.system = "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
* name.given = "Gitte"
* name.family = "Hansen"
* patient = Reference(Andreas)

Instance: HenvisningFraLageVedrAkutSygepleje
InstanceOf: KLCommonCareSocialServiceRequest
Title: "Henvisning læge akut sygepleje"
Description: "Henvisning fra læge vedr. akut sygepleje"
Usage: #example
* requester = Reference(LaegerneHasserisBymidte)
* extension[requesterType].valueCodeableConcept = $FSIII#A9 "Egen læge/vagtlæge"
* reasonCode.text = "Mark har efter et ildebefindende brug for at akutsygeplejen undersøger situationen og måler vitale værdier."
* code = $CareSocialCodes#490ab7be-ddb1-4a54-baf1-009fe6e8a83b "Hjemmesygepleje"
* orderDetail[0] = $FSIII#G1.41 "Undersøgelser og måling af værdier"
* subject = Reference(Mark)
* authoredOn = 2020-06-21
* status = REQUESTSTATUS#active
* intent = REQUESTINTENT#order

Instance: HenvendelseVedrSygeplejeMark
InstanceOf: KLCommonCareSocialServiceRequest
Title: "Henvendelse vedr hjemmesygepleje"
Description: "Henvisning fra læge vedr. akut sygepleje"
Usage: #example
* requester = Reference(SundhedsforvaltningAalborg)
* extension[requesterType].valueCodeableConcept = $FSIII#A1 "Borger"
* reasonCode.text = "Borger har henvendt sig pga. et sår, der skal undersøges nærmere."
* code = $CareSocialCodes#490ab7be-ddb1-4a54-baf1-009fe6e8a83b "Hjemmesygepleje"
* subject = Reference(Mark)
* authoredOn = 2020-06-21
* status = REQUESTSTATUS#active
* intent = REQUESTINTENT#proposal
* extension[municipalityCaseNumber].extension[official].valueIdentifier.use = #official
* extension[municipalityCaseNumber].extension[official].valueIdentifier.system = "https://data.gov.dk/id/organization"
* extension[municipalityCaseNumber].extension[official].valueIdentifier.value = "524a66c5-d1b6-4cc4-adca-dad6d058a8f5"


Instance: HenvisningFraLageVedrAkutSygeplejeProvenance
InstanceOf: Provenance
Title: "Provenance, henvisning læge akut sygepleje"
 Description: "Ekstraoplysninger vedr. dokumentationsarbejdsgang og ansvar for henvisning fra læge vedr. akut sygepleje"
Usage: #example
* target = Reference(HenvisningFraLageVedrAkutSygepleje)
* recorded = 2020-06-21T15:56:24+02:00
* agent[0].type = AGENTTYPE#enterer
* agent[0].who = Reference(HanneFraVisitationenAalborg)
* agent[0].onBehalfOf = Reference(SundhedsforvaltningAalborg)
* agent[1].type = AGENTTYPE#legal
* agent[1].who = Reference(LaegerneHasserisBymidte)
* reason =  PROVENANCEREASON#TREAT

Instance: InternHenvendelseEfterOpfolgning
InstanceOf: KLCommonCareSocialServiceRequest
Title: "Intern henvendelse efter opfølgning"
Description: "Intern henvisning i hjemmeplejen, efter en opfølgning der viste behov for revisitation"
Usage: #example
* requester = Reference(HanneFraVisitationenAalborg)
* extension[requesterType].valueCodeableConcept = $FSIII#A4 "Hjemmeplejen"
* reasonCode.text = "Sidste opfølgning på Marks hjemmepleje viste behov for revisitation fordi funktionsevnen er blevet bedre, særligt ift. mobilitet. Der skal ses på om nogle af §83 indsatserne, med fordel kan gøres til §83a for yderligere at styrke hverdags rehabiliteringsindsatsen og dermed borgers funktionsniveau."
* code = $CareSocialCodes#ad865929-7363-4b2d-a271-01993181fbaf "Hjemmepleje"
* orderDetail[0] = $FSIII#H1.4 "Mobilitet"
* orderDetail[1] = $FSIII#H2.2 "RH Hverdagens aktiviteter"
* subject = Reference(Mark)
* authoredOn = 2020-04-11
* status = REQUESTSTATUS#active
* intent = REQUESTINTENT#proposal
* reasonReference = Reference(MarkHjemmeplejeRevisitation)

Instance: InternHenvendelseEfterOpfolgningProvenance
InstanceOf: Provenance
Title: "Provenance til InternHenvendelseEfterOpfølgning"
Usage: #example
* target = Reference(InternHenvendelseEfterOpfolgning)
* recorded = 2020-04-11T09:06:15+02:00
* agent[0].type = AGENTTYPE#author
* agent[0].who = Reference(HanneFraVisitationenAalborg)
* agent[0].onBehalfOf = Reference(SundhedsforvaltningAalborg)
* reason =  PROVENANCEREASON#TREAT

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCaseIdentifier.fsh

Instance: KLCommonMunicipalitySpecificCaseIdentifier
InstanceOf: Identifier
Description: "MunicipalitySpecificCaseIdentifier"
Usage: #inline
* use = #usual

Instance: KLCommonOfficialCaseIdentifier
InstanceOf: Identifier
Description: "OfficialCaseIdentifier"
Usage: #inline 
* use = #official
* system = "https://data.gov.dk/id/organization"

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonCitizen.fsh

Profile:        KLCommonCitizen
Parent:         dk-core-patient
Title:          "Citizen"
Description:    "Citizen demographics, as expressed by dk-core"

Instance: Mark
InstanceOf: KLCommonCitizen
Title: "Mark"
Description: "Borger Mark"
Usage: #example
* identifier.value = "mark"
* name.given = "Mark"
* name.family = "Jensen"
* birthDate = 1982-02-02

Instance: Andreas
InstanceOf: KLCommonCitizen
Title: "Andreas"
Description: "Borger Andreas"
Usage: #example
* identifier.value = "andreas"
* name.given = "Andreas"
* name.family = "Hansen"
* birthDate = 1993-01-05

Instance: Judith
InstanceOf: KLCommonCitizen
Title: "Judith"
Description: "Borger Judith"
Usage: #example
* identifier.value = "judith"
* name.given = "Judith"
* name.family = "Nielsen"
* birthDate = 1936-01-08

Instance: Mads
InstanceOf: KLCommonCitizen
Title: "Mads"
Description: "Borger Mads"
Usage: #example
* identifier.value = "mads"
* name.given = "Mads"
* name.family = "Sørensen"
* birthDate = 2000-05-11

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonExtensions.fsh

Extension: FollowUpEncounter
Title:     "FollowupEncounter"
Description: "Extension for pointing to previous and planned follow up encounters for a condition"
* value[x] 1..1
* value[x] only Reference(KLCommonCareSocialEncounter)

Extension: RequesterType
Title: "RequesterType"
Description: "Extension for pointing to type of organisation/person that requests a service from the municipality"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from KLRequestFromFSIII

Extension: MunicipalityCaseNumber
Title: "MunicipalityCasenumber"
Description: "Extension for municipality case numbers"
* extension contains
    municipalitySpecific 0..1 and
    official 0..1
* extension[municipalitySpecific].value[x] only Identifier
* extension[municipalitySpecific].valueIdentifier.use = #usual
* extension[municipalitySpecific].valueIdentifier.assigner 1..1

* extension[official].value[x] only Identifier
* extension[official].valueIdentifier.use = #official
* extension[official].valueIdentifier.system = "https://data.gov.dk/id/organization"


Extension: ConditionLastAssertedDate
Title: "ConditionLastAssertedDate"
Description: "Extension for the last date a condition was confirmed valid with its current clinical- and verification status, stage and severity, typically the last performed follow-up"
* value[x] only dateTime


Extension: SubjectConsentToLiaising
Title: "SubjectConsentToLiaising"
Description: "Extension for describing whether the citizen knows about the request/referal"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from KLConsentToLiasing

Extension: ConditionRank
Title: "ConditionRank"
Description: "The rank of a condition. Used for event-resources that refer to conditions that are ranked."
* value[x] 1..1
* value[x] only positiveInt

Extension: BasedOnServiceRequest
Description: "A reference to a ServiceRequest. Used to connect an event resource with the order that warranted it"
Title: "BasedOnServiceRequest"
* value[x] 1..1
* value[x] only Reference(ServiceRequest)

Extension: MatterOfInterestInformer
Title: "MatterOfInterestInformer"
Description: "Extension for pointing to who's perspective the matter-of-interest is comming from"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from KLMatterOfInterestInformerFFB

Extension: ExtEventHist
Title: "EventHist"
Description: "Event history, pointing to earlier significant versions of this resource. Comparable to http://hl7.org/fhir/StructureDefinition/event-eventHistory, working for Conditions"
* value[x] 1..1
* value[x] only Reference(Provenance)

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonOrganization.fsh

Profile: KLCommonOrganization
Parent: Organization
Title: "Organization"
Description:    "Organisation as expressed by Danish municipalities."

Instance: HjemmesygeplejeSonderborg
InstanceOf: KLCommonOrganization
Title: "Hjemmesygepleje sønderborg"
Usage: #example
Description: "Hjemmesygepleje – visitation –hjemmehjælp i Sønderborg kommune som defineret af SOR"
* identifier[0].value = "330411000016001"
* identifier[0].system = SOR
* name = "Hjemmesygepleje – visitation –hjemmehjælp, Sønderborg Kommune"
* telecom.value = "88725537"
* telecom.system = ContactPointCodes#phone

Instance: SocialOgSundhedMorsoe
InstanceOf: KLCommonOrganization
Title: "Social og sundhed Morsø"
Usage: #example
Description: "Social og Sundhed, Morsø Kommune, som defineret af SOR"
* identifier[0].value = "449201000016001"
* identifier[0].system = SOR
* name = "Social og Sundhed, Morsø Kommune"
* telecom.value = "99707000"
* telecom.system = ContactPointCodes#phone

Instance: SundhedsforvaltningAalborg
InstanceOf: KLCommonOrganization
Title: "Sundhedsforvaltning Aalborg"
Usage: #example
Description: "Sundheds- og kulturforvaltningen, Aalborg Kommune, som defineret af SOR"
* identifier[0].value = "922661000016005"
* identifier[0].system = SOR
* name = "Sundheds- og kulturforvaltningen, Aalborg Kommune"
* telecom.value = "99313131"
* telecom.system = ContactPointCodes#phone

Instance: BotilbudetHvidbjerghus
InstanceOf: KLCommonOrganization
Title: "Botilbudet Hvidbjerghus"
Usage: #example
Description: "Botilbudet Hvidbjerghus som defineret af https://findsocialetilbud.dk/sociale-tilbud/botilbuddet-hvidbjerghus, og SOR"
* identifier[0].value = "699941000016001"
* identifier[0].system = SOR
* name = "Fonden botilbudet Hvidbjerghus"
* telecom.value = "+45 97872525"
* telecom.system = ContactPointCodes#phone

Instance: BotilbudetSommergaarden
InstanceOf: KLCommonOrganization
Title: "Botilbudet Sommergaarden"
Usage: #example
Description: "Botilbudet Sommergaarden, som er et fiktivt eksempel"
* name = "Botilbudet Sommergaarden"
* telecom.value = "+45 77889910"
* telecom.system = ContactPointCodes#phone


Instance: LaegerneHasserisBymidte
InstanceOf: KLCommonOrganization
Title: "LaegerneHasserisBymidte"
Usage: #example
Description: "Praktisernede læge i Hasseris, som defineret af SOR"
* identifier[0].value = "61731000016000"
* identifier[0].system = SOR
* name = "Lægerne Hasseris Bymidte"
* telecom.value = "98182233"
* telecom.system = ContactPointCodes#phone

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonPractitioner.fsh

Profile:        KLCommonPractitioner
Parent:         Practitioner
Title:          "Practioner"
Description:    "Practitioners as expressed by dk-core."


Instance:       BirteFraVisitationenMorsoe
InstanceOf:     KLCommonPractitioner
Title:          "BirteFraVisitationenMorsø"
Description:    "Eksempel på medarbejderen Birte fra visitationen i Morsø"
* name.given = "Birte"
* name.family = "Mathiassen"

Instance:       HanneFraVisitationenAalborg
InstanceOf:     KLCommonPractitioner
Title:          "HanneFraVisitationenAalborg"
Description:    "Eksempel på medarbejderen Hanne fra visitationen i Aalborg"
* name.given = "Hanne"
* name.family = "Simonsen"

Instance:       AbrahamFraAkutSygeplejen
InstanceOf:     KLCommonPractitioner
Title:          "AbrahamFraAkutSygeplejen"
Description:    "Eksempel på medarbejderen Abraham fra akutsygeplejen"
* name.given = "Abraham"
* name.family = "Murakami"

Instance:       NatasjaFraSygeplejen
InstanceOf:     KLCommonPractitioner
Title:          "NatasjaFraSygeplejen"
Description:    "Eksempel på medarbejderen Natasja fra sygeplejen"
* name.given = "Natasja"
* name.family = "Petersen"

Instance:       AnneFraHvidbjerghus
InstanceOf:     KLCommonPractitioner
Title:          "AnneFraHvidbjerghus"
Description:    "Eksempel på medarbejderen Anne fra botilbudet Hvidbjerghus"
* name.given = "Anne"
* name.family = "Hansen"

Instance:       KristinaFraVoksensocialomraadet
InstanceOf:     KLCommonPractitioner
Title:          "KristinaFraVoksensocialområdet"
Description:    "Eksempel på medarbejderen Kristina fra Voksensocialområdet i Holstebro"
* name.given = "Kristina"
* name.family = "Jensen"

Instance:       MarianneLaege
InstanceOf:     KLCommonPractitioner
Title:          "MarianneLæge"
Description:    "Eksempel på læge Marianne"
* name.given = "Marianne"
* name.family = "Aagaard"

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonServicePerformer.fsh

Profile: KLCommonServicePerformer
Parent: CareTeam
Title: "ServicePerformer"
Description:    "Service performing CareTeam as expressed by Danish municipalities."

* category from KLServiceCodesFFB
* managingOrganization only Reference(KLCommonOrganization)

Instance: MidlertidigtOpholdBotilbuddetHvidbjerghus
InstanceOf: KLCommonServicePerformer
Usage: #example
Title: "Midlertidigt ophold Botilbuddet Hvidbjerghus"
Description: "Midlertidigt ophold efter servicelovens §107 på Hvidhjerghus"
* category = $FFB#25de7444-3919-4dab-b844-8cec6c15f30e "Midlertidigt botilbud til voksne"
* managingOrganization = Reference(BotilbudetHvidbjerghus)

Instance: AlmBotilbud
InstanceOf: KLCommonServicePerformer
Usage: #example
Title: "Almindeligt botilbus Sommergaarden"
Description: "Almindeligt længerevarende botilbud på Sommergaarden"
* category.coding.code = #498fe92c-d7f7-41cd-9404-5b38fe113be0          
* category.coding.display = "Almindeligt længerevarende botilbud til voksne"
* category.coding.system = $FFB
* managingOrganization = Reference(BotilbudetSommergaarden)


---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/KLCommonValuesets.fsh

ValueSet: KLConditionCodesHomeCare
Title: "KLTilstandeKoderHjemmepleje"   
Description: "Danish municipality home care condition codes (funktionsevnetilstande)"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionCodesHomeCare

ValueSet: KLConditionCodesNursing
Title: "KLTilstandeKoderSygepleje"
Description: "Danish municipality nursing condition codes"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionCodesNursing


ValueSet: KLMatterOfInterestValues
Title: "KLOplysningKoder"
Description: "Matter of interes values to support when no observations have been made"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLMatterOfInterestValues

ValueSet: KLConditionCodesTheraphy
Title: "KLTilstandKoderTræning"
Description: "Danish municipality theraphy condition codes"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionCodesTheraphy

ValueSet: KLConditionCodesPrevention
Title: "KLTilstandKoderForebyggelse"
Description: "Danish municipality Prevention condition codes"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionCodesPrevention

ValueSet: KLConditionCodesFFB
Title: "KLTilstandKoderFFB"
Description: "Danish municipality FFB condition codes"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionCodesFFB

ValueSet: KLConditionFFCodesFFB
Title: "KLTilstandFFKoderFFB"
Description: "Danish municipality FFB condition codes for body functions and structures"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionFFCodesFFB


ValueSet: KLConditionADCodesFFB
Title: "KLTilstandADKoderFFB"
Description: "Danish municipality FFB condition codes for Activities and Participation"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionADCodesFFB


ValueSet: KLConditionOCodesFFB
Title: "KLTilstandOKoderFFB"
Description: "Danish municipality FFB condition codes for Environmental Factors"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionOCodesFFB

ValueSet: KLConditionCodesFSIII
Title: "KLTilstandKoderFSIII"
Description: "Danish municipality FSIII condition codes"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionCodesFSIII

ValueSet: KLConditionCodes
Title: "KLTilstandKoder"
Description: "Danish municipality condition codes"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionCodes

ValueSet: KLTargetGroupsFFB
Title: "KLMålgrupperFFB"
Description: "Target groups as defined by FFB"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLTargetGroupsFFB

ValueSet: KLConditionsAndTargetGroupsFFB
Title: "KLTilstandeOgMålgrupperFFB"
Description: "Conditions and target groups as defined by FFB"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionsAndTargetGroupsFFB

ValueSet: KLSeverities
Title: "KLSværhedgrader"
Description: "Severities related to conditions"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLSeverities

ValueSet: KLSeveritiesFFB
Title: "KLFunktionsevneniveauFFB"
Description: "Severities related to conditions in FFB (funktionsevneniveau)"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLSeveritiesFFB

ValueSet: KLSeveritiesFSIII
Title: "KLFunktionsevneniveauFSIII"
Description: "Severities related to conditions in FSIII home care (funktionsniveau)"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLSeveritiesFSIII

ValueSet: KLChangeValueCodes
Title: "KLMåltypeKoder"
Description: "Change values for goals (måltype). Express the target value for change of a condition"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLChangeValueCodes

ValueSet: KLChangeValueCodesFSIII
Title: "KLMåltypeKoderFSIII"
Description: "Change values for goals in FSIII (FSIII måltype). Express the target value for change of a health condition or funtional condition"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLChangeValueCodesFSIII

ValueSet: KLChangeValueCodesFFB
Title: "KLMåltypekoderFFB"
Description: "Change values for goals in FFB (FFB måltype). Express the target value for change of an activity or participation condition"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLChangeValueCodesFFB

ValueSet: KLTargetMeasureCodes
Title: "KLTypeAfObservationPåMål"
Description: "Target measure code, that determines whether the target is expressed as a severity, change value or using another observation"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLTargetMeasureCodes

ValueSet: KLInformationCodes
Title: "KLOplysningKoder"
Description: "Information codes from FSIII and FFB (Område, Tema, Generelle oplysninger)"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLInformationCodes

ValueSet: KLPerformanceLevelCodesFSIII
Title: "KLUdførelsesKoderFSIII"
Description: "Performance level codes (Udførelse), as evaluated by the citizen"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLPerformanceLevelCodesFSIII

ValueSet: KLImportanceLevelCodesFSIII
Title: "KLBetydningKoderFSIII"
Description: "Importance level codes (Betydning), as evaluated by the citizen"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLImportanceLevelCodesFSIII

ValueSet: KLCitizenObservationResultCodesFSIII
Title: "KLBorgervurderingsResultatkoderFSIII"
Description: "Performance and Importance level codes, as evaluated by the citizen"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLCitizenObservationResultCodesFSIII

ValueSet: KLCitizenObservationCodesFSIII
Title: "KLBorgervurderingsObservationskoderFSIII"
Description: "Observation codes for citizens own observations as defined by FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLCitizenObservationCodesFSIII


ValueSet: KLGeneralInformationFSIII
Title: "KLGenerelInformationFSIII"
Description: "Generel information codes (observations) as defined by FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLGeneralInformationFSIII

ValueSet: KLNursingAreasFSIII
Title: "KLSygeplejeOmråderFSIII"
Description: "Observation codes for the 12 nursing areas as defined by FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLNursingAreasFSIII

ValueSet: KLHomeCareAreasFSIII
Title: "KLHjemmeplejeOmråderFSIII"
Description: "Observation codes for the five home care areas as defined by FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLHomeCareAreasFSIII

ValueSet: KLTheraphyAreasFSIII
Title: "KLTræningOmråderFSIII"
Description: "Theraphy areas (observation codes), used for documentation within physical training, physiotheraphy and occupational theraphy in Danish Municipalities as defined by FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLTheraphyAreasFSIII

ValueSet: KLPreventionAreasFSIII
Title: "KLForebyggelseOmråderFSIII"
Description: "Prevention areas (observation codes), used for documentation within prevention and health promotion"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLPreventionAreasFSIII

ValueSet: KLThemesFFB
Title: "KLTemaerFFB"
Description: "FFB Themes"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLThemesFFB

ValueSet: KLFollowUpCodesFSIII
Title: "KLOpfølgningKoderFSIII"
Description: "Follow-up codes used in FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLFollowUpCodesFSIII

ValueSet: KLFollowUpCodesFFB
Title: "KLOpfølgningKoderFFB"
Description: "Follow-up codes used in FFB"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLFollowUpCodesFFB

ValueSet: KLFollowUpCodes
Title: "KLOpfølgningKodes"
Description: "Follow-up codes used in Danish municipalities"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLFollowUpCodes

ValueSet: KLRequestFromFSIII
Title: "KLHenvendelseHenvisningFraFSIII"
Description: "Type of service requesters as defined by FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLRequestFromFSIII

ValueSet: KLNursingInterventionsFSIII
Title: "KLSygeplejeIndsatserFSIII"
Description: "Nursing interventions as described by FSIII" 
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLNursingInterventionsFSIII

ValueSet: KLHomeCareInterventionsFSIII
Title: "KLHjemmeplejeIndsatserFSIII"
Description: "Home Care Interventions as described by FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLHomeCareInterventionsFSIII

ValueSet: KLTrainingInterventionsFSIII
Title: "KLTræningIndsatserFSIII"
Description: "Training interventions as defined by FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLTrainingInterventionsFSIII

ValueSet: KLPreventionInterventionsFSIII
Title: "KLForebyggelseIndsatserFSIII"
Description: "Prevention and health promotion interventions as defined by FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLPreventionInterventionsFSIII

ValueSet: KLInterventionsFFB
Title: "KLYdelserFFB"
Description: "social interventions (ydelser) as defined by FFB"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLInterventionsFFB

ValueSet: KLServiceCodesFFB
Title: "KLTilbudsKoderFFB"
Description: "Social service (tilbud) as defined by FFB"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLServiceCodesFFB

ValueSet: KLInterventions
Title: "KLIndsatser" 
Description: "Interventions as described by FSIII and FFB"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLInterventions

ValueSet: KLInterventionsFSIII
Title: "KLIndsatserFSIII" 
Description: "Interventions as described by FSIII"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLInterventionsFSIII

ValueSet: KLEncounterTypes
Title: "KLKontaktTyper"
Description: "Encounter types in Danish municipality health, social and elderly care (note that these are specific to this model, they are not replicas of a municipality terminology service)"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLEncounterTypes

ValueSet: KLServicesTypes
Title: "KLServiceTyper"
Description: "Types of services that the Danish municipalities provide which is covered by FSIII and FFB"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLServicesTypes

ValueSet: KLConsentToLiasing
Title: "KLBorgerIndforståetMedHenvendelseKoder"
Description: "Codes for citizens knowledge of referal/request as defined by FFB"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConsentToLiasing

ValueSet: KLCarePlanCategoryCodes
Title: "KLIndsatsforløbTypekoder"
Description: "Codes for constraining the CarePlan category"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLCarePlanCategoryCodes

ValueSet: KLGoalTypeCodes
Title: "KLMålKategoriKoder"
Description: "Codes used to distinguish different kinds of goals"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLGoalTypeCodes

ValueSet: KLEvaluationTypeCodes
Title: "KLVurderingTypekoder"
Description: "Codes used to distinguish different kinds of evaluations"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLEvaluationTypeCodes

ValueSet: KLEvaluationTypeCodesSCT
Title: "KLVurderingTypekoderSCT"
Description: "SNOMED CT codes used to distinguish different kinds of evaluations"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLEvaluationTypeCodesSCT

ValueSet: KLNeedsAssessmentCodesFFB
Title: "KLStøttebehovsvurderingskoderFFB"
Description: "Needs assesment codes as defined in FFB"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLNeedsAssessmentCodesFFB

ValueSet: KLComplicationCodesSCT
Title: "KLKomplikationskoderSCT"
Description: "Codes that indicate whether an intervention had complications or not"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLComplicationCodesSCT

ValueSet: KLObservationCodes
Title: "KLObservationskoder"
Description: "SNOMED CT and NPU codes used in Danish municipalities"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLObservationCodes

ValueSet: KLInformationGatheringTypeCodes
Title: "KLOplysningsaktivitetsTypeKoder"
Description: "Codes used to specify which kind of information gathering is conducted"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLInformationGatheringTypeCodes

ValueSet: KLInformationGatheringInvestigationCodes
Title: "KLOplysningsaktivitetsOgVurderingskoder"
Description: "Codes that identify valid items in an investigation in Danish municipalities"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLInformationGatheringInvestigationCodes

ValueSet: KLMatterOfInterestInformerFFB
Title: "KLKildeTilOplysningFFB"
Description: "Codes that identify who's perspective the matter-of-interest is comming from"
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLMatterOfInterestInformerFFB

---

File: repos/hl7dk_SLASH_KL-dk/input/fsh/testConditionChange.fsh

//Denne test kræver patienten BorgerEjnar, Practitioner/7777777/NatasjaFraSygeplejen,  opfølgningskontakten Encounter/333 (dato: 2021-02-10)
//, og dueTo (Condition/444 - sorg over konens død), opfølgningsresultatet (Observation/22), oplysning (Observation/1234)

//tilstand v1
Instance: BorgerEjnar
InstanceOf: KLCommonCitizen
Title: "BorgerEjnar"
Description: "Borgeren Ejnar"
Usage: #example
* identifier.system = "urn:oid:1.2.208.176.1.2"
* identifier.value = "0201609995"
* name.use = #official
* name.family = "Lauridsen"
* name.given[0] = "Ejnar"
* name.given[1] = "Test"
* gender = #male
* birthDate = "1960-01-02"


Instance: Condition111
InstanceOf: KLCommonCareSocialCondition
Title: "EjnarProblemerMedMisbrug"
Description: "Ejnars tilstand:Problemer med misbrug"
Usage: #example
//statusattributter
* clinicalStatus.coding.code = #active
* clinicalStatus.coding.system = "http://terminology.hl7.org/CodeSystem/condition-clinical"
* category.coding.code = #problem-list-item
* category.coding.system = "http://terminology.hl7.org/CodeSystem/condition-category"
* verificationStatus.coding.code = #confirmed
* verificationStatus.coding.system = VerSTATUS

//kodning
* code.coding[0] = $FSIII#I6.3
* code.coding[0].display = "Problemer med misbrug"
* code.coding[1] = SCT#160590009
* code.coding[1].display = "Drinks beer and hard liquor (finding)"
* code.text = "Der er problemer med misbrug, særlig drikker borger øl og spiritus om aftenen"

//personer
* subject = Reference(BorgerEjnar)
* asserter = Reference(NatasjaFraSygeplejen)

//Datorer
* recordedDate = 2020-03-17T10:09:27+01:00
* extension[conditionLastAssertedDate].valueDateTime = 2020-03-17T10:09:27+01:00

//Opfølgningskontakt
* extension[followUpEncounter].valueReference = Reference(Encounter333)

//årsag
* extension[dueTo].valueReference = Reference(Condition444)

//område, som tilstanden er udredt ifm.
* evidence.detail[0] = Reference(Observation1234)

Instance: ProvenanceCondition111
InstanceOf: Provenance
Usage: #example
* target = Reference(Condition111)
* recorded = 2020-03-17T10:09:27+01:00
* agent[0].type = AGENTTYPE#legal
* agent[0].who = Reference(NatasjaFraSygeplejen)
* reason.coding.system =  "http://terminology.hl7.org/CodeSystem/v3-ActReason"
* reason.coding.code = #TREAT

//tilstand v2
Instance: Condition111v2
InstanceOf: KLCommonCareSocialCondition
Title: "EjnarProblemerMedMisbrugV2"
Description: "Opdatering til version 2 af Ejnars tilstand:Problemer med misbrug"
Usage: #example
//statusattributter
* clinicalStatus.coding.code = #active
* clinicalStatus.coding.system = "http://terminology.hl7.org/CodeSystem/condition-clinical"
* category.coding.code = #problem-list-item
* category.coding.system = "http://terminology.hl7.org/CodeSystem/condition-category"
* verificationStatus.coding.code = #confirmed
* verificationStatus.coding.system = VerSTATUS

//kodning
* code.coding[0] = $FSIII#I6.3
* code.coding[0].display = "Problemer med misbrug"
* code.coding[1] = SCT#160590009
* code.coding[1].display = "Drinks beer and hard liquor (finding)"
* code.text = "Der er problemer med misbrug, særlig drikker borger øl og spiritus"

//personer
* subject = Reference(BorgerEjnar)
* asserter = Reference(NatasjaFraSygeplejen)
//* asserter = Reference(Bi)

//Datorer
* recordedDate = 2020-03-17T10:09:27+01:00
* extension[conditionLastAssertedDate].valueDateTime = 2020-12-17T10:09:27+01:00
//* abatementDateTime = 2021-03-10T10:09:27+01:00

//Faglige notater og FFB observationer
* note.text = "Drikker mindre, der har været et overforbrug, men der er tilsyneladende ikke tale om afhængighed"
* note.authorReference = Reference(NatasjaFraSygeplejen)
* note.time = 2020-12-17T10:09:27+01:00

//Opfølgningskontakt
* extension[followUpEncounter].valueReference = Reference(Encounter333)

//årsag
* extension[dueTo].valueReference = Reference(Condition444)

//område, som tilstanden er udredt ifm.
* evidence.detail[0] = Reference(Observation1234)

//EventHistory
* extension[eventHistory].valueReference = Reference(ProvenanceCondition111)

Instance: ProvenanceCondition111v2
InstanceOf: Provenance
Usage: #example
* target = Reference(Condition111v2)
* recorded = 2020-12-17T10:09:27+01:00
* agent[0].type = AGENTTYPE#legal
* agent[0].who = Reference(NatasjaFraSygeplejen)
* reason.coding.system =  "http://terminology.hl7.org/CodeSystem/v3-ActReason"
* reason.coding.code = #TREAT

Instance: Condition111v3
InstanceOf: KLCommonCareSocialCondition
Title: "EjnarProblemerMedMisbrugV3"
Description: "Opdatering til version 3 af Ejnars tilstand:Problemer med misbrug, hvor tilstanden afsluttes"
Usage: #example
//statusattributter
* clinicalStatus.coding.code = #inactive
* clinicalStatus.coding.system = "http://terminology.hl7.org/CodeSystem/condition-clinical"
//* category.coding.code = #problem-list-item
//* category.coding.system = "http://terminology.hl7.org/CodeSystem/condition-category"
* verificationStatus.coding.code = #confirmed
* verificationStatus.coding.system = VerSTATUS

//kodning
* code.coding[0] = $FSIII#I6.3
* code.coding[0].display = "Problemer med misbrug"
* code.coding[1] = SCT#160590009
* code.coding[1].display = "Drinks beer and hard liquor (finding)"
* code.text = "Der er problemer med misbrug, særligt drikker borger øl og spiritus"

//personer
* subject = Reference(BorgerEjnar)
* asserter = Reference(NatasjaFraSygeplejen)

//Datorer
* recordedDate = 2020-03-17T10:09:27+01:00
* extension[conditionLastAssertedDate].valueDateTime = 2021-02-10T10:09:27+01:00
* abatementDateTime = 2021-02-10T10:09:27+01:00

//årsag
* extension[dueTo].valueReference = Reference(Condition444)

//område, som tilstanden er udredt ifm.
* evidence.detail[0] = Reference(Observation1234)

//opfølgningsresultat
* evidence.detail[1] = Reference(Observation22) 

* extension[eventHistory][0].valueReference = Reference(ProvenanceCondition111)
* extension[eventHistory][1].valueReference = Reference(ProvenanceCondition111v2)
//* extension[eventHistory].valueReference = Reference(ProvenanceCondition111)

Instance: ProvenanceCondition111v3
InstanceOf: Provenance
Usage: #example
* target = Reference(Condition111v3)
* recorded = 2021-02-10T10:09:27+01:00
* agent[0].type = AGENTTYPE#legal
* agent[0].who = Reference(NatasjaFraSygeplejen)
* reason.coding.system =  "http://terminology.hl7.org/CodeSystem/v3-ActReason"
* reason.coding.code = #TREAT


Instance: Condition444
InstanceOf: KLCommonCareSocialFocusCondition
Title: "EjnarSorg"
Description: "Ejnar er i sorg pga. ægtefælles død. Dette anvendes i eksemplet som bagvedliggende årsag til misbrug"
Usage: #example
* code.text = "Er i sorg pga. ægtefællens død"
* subject = Reference(BorgerEjnar)
* asserter = Reference(NatasjaFraSygeplejen)
* recorder = Reference(NatasjaFraSygeplejen)
* recordedDate = 2020-03-17T10:09:27+01:00
* clinicalStatus.coding.code = #active
* clinicalStatus.coding.system = "http://terminology.hl7.org/CodeSystem/condition-clinical"
* verificationStatus.coding.code = #confirmed
* verificationStatus.coding.system = VerSTATUS

Instance: Encounter333
InstanceOf: KLCommonCareSocialEncounter
Title: "EjnarsPlanlagteOpfølgning"
Description: "Ejnars planlagte opfølgning"
Usage: #example
* type = $CareSocialCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* period.start = 2021-02-10
* status = EncounterStatus#planned
* subject = Reference(BorgerEjnar)
* class = V3ACTCODES#HH

//opfølgningskontakt version 2
Instance: Encounter333v2
InstanceOf: KLCommonCareSocialEncounter
Title: "EjnarsOpfølgning"
Description: "Ejnars udførte opfølgning, der er en opdatering af Ejnars planlagte opfølgning"
Usage: #example
* type = $CareSocialCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* period.start = 2021-02-10
* status = EncounterStatus#finished
* subject = Reference(BorgerEjnar)
* class = V3ACTCODES#HH

//opfølgningsresultat
Instance: Observation22
InstanceOf: KLCommonCareSocialFollowUp
Title: "EjnarOpfølgningsresultat"
Description: "Ejner opfølgningsresultat"
Usage: #example
* subject = Reference(BorgerEjnar)
* code = SCT#712744002
* valueCodeableConcept.text = "Borger har fået hjælp til håndtering af sin sorg, og drikker ikke for meget længere"
* valueCodeableConcept = $FSIII#E3 "Afsluttes"
* effectiveDateTime = 2021-02-10
* performer = Reference(NatasjaFraSygeplejen)
* status = #final

Instance: Observation1234
InstanceOf: KLCommonCareSocialMatterOfInterest
Title: "EjnarPsykosociale"
Description: "Notat vedr. psykosociale forhold, som beskrevet af hjemmesygeplejen ifm sygeplejefaglig udredning"
Usage: #example
* subject = Reference(BorgerEjnar)
* code.coding.code = #I6
* code.coding.system = $FSIII
* code.coding.display = "Psykosociale forhold"
* effectiveDateTime = 2020-03-17
* valueCodeableConcept.text = "Borger drikker for meget, sandsynligvis pga. sorg over ægtefællens død, men der skal selvf"
* performer = Reference(NatasjaFraSygeplejen)
* status = #final

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/index.md

### Background
This is the FKI FHIR implementation guide. FKI stands for "Fælleskommunal InformationsModel" in English "Common Municipality Information Model". The FKI FHIR profiles can be used to exchange and report health care and social care data from Danish municipalities. 

The health and care related data is a result of routine documentation in home care nursing, home care, health promotion and prevention and physical rehabilitation. The documentation practice follows [FSIII](http://fs3.nu/).

Social care data results from routine documentation in adult social care. The documentation practice follows [VUM](https://socialstyrelsen.dk/udgivelser/metodehandbog-til-vum-2.0/) and [FFB](https://www.kl.dk/kommunale-opgaver/socialomraadet/faelles-faglige-begreber/materialer/)  

### FKI is a core model
FKI is a core model, which means that it is the recommended way to encapsulate the above-mentioned data, but it does not in itself specify use cases. FKI has so far been used for two use cases:
* Reporting of municipality data to KLGateway, which is e.g., used for management information and national statistics. [Implementation guide KLGateway](http://build.fhir.org/ig/hl7dk/kl-gateway/)
* Structuring documentation tools, meassurements and observations commonly used in Danish municipalities. [Implementation guide for FFinst](http://build.fhir.org/ig/hl7dk/KL-dk-tools/branches/main/)

### Documentation in Danish
The documentation of the FHIR profiles is also available in a Danish edition for non-FHIR users. This edition is called [Guide til den Fælleskommunale informationsmodel](https://www.kl.dk/media/51540/guide-til-den-faelleskommunale-informationsmodel.pdf). The guide includes four appendices:
* [Application of FKI in FFB](https://www.kl.dk/media/51542/guide-til-brug-af-fki-med-udgangspunkt-i-faelles-faglige-begreber.pdf)
* [Application of FKI in FSIII](https://www.kl.dk/media/51541/guide-til-brug-af-fki-med-udgangspunkt-i-faelles-sprog-iii.pdf)
* [Explaination of FKI concepts](https://www.kl.dk/media/51543/forklaring-af-fki-begreber.pdf)
* [FKI to FKI FHIR conversion](https://www.kl.dk/media/51585/fkifhirbilagv1.pdf)

The HL7 FHIR-profiles are based on information modelling work done according to a common municipality architectural framework (Fælleskommunal rammearkitektur). You may dive into the [interactive UML model](https://rammearkitektur.kl.dk/forretningsviden/anvendelsesmodeller/faelleskommunal-informationsmodel-paa-sundheds-aeldre-og-voksensocialomraadet-fki/).

### Getting started
To get a comprehension of the content included in FKI, and the way it may be combined to form meaningful collections of information, starter-examples have been created.  

* Home care service requests and information gathering (Sagsåbning og sagsoplysning) in the home care area have been illustrated using the Judith-example.
* The difference between regular and acute home nursing including planning and carrying out interventions, and the use of the Encounter-profile have been illustrated in the Mark-example
* Adult social care information gathering, and intervention planning is illustrated using the Andreas-example.
* Adult social care information gathering is also illustrated in the Mads-example. Here the focus is on illustrating how to make the finding informer explicit as required by FFB.

#### Judith example
[Judith](Patient-Judith.html) is a citizen, with and existing [diagnosis of type-2 diabetes](Condition-JudithDiabetes.html), who has problems with mobility. In her record, we can see that a home care evaluation (funktionsevnevurdering hjemmepleje) has been carried out at some point, and a [note](Observation-MobilityInformationJudith.html) has been written under the heading "Mobilitet". While examining Judiths mobility, it is ascertained that she has the [condition "Gå"](Condition-ConditionWalking.html). Judith also [rates her own ability to walk](Observation-JudithGaa.html) (Betydning - oplever begrænsninger), and [a goal](Goal-JudithForventetTilstand.json.html) i.e. an expected future condition (forventet tilstand) is formulated for Judith. 

#### Mark example
[Mark](Patient-Mark.html) is a citizen receiving home nursing interventions. I his record we can see his [nursing status](ClinicalImpression-NursingStatusMark.html) (sygeplejefaglig udredning). Note that this is an example, not a full nursing status. The nursing status contains notes under two areas [respiration and circulation](Observation-RespirationCirculationInformationMark.html) and [skin and mucosa](Observation-SkinInformationMark.html). In addition, the nurse register the [condition: pressure ulcer](Condition-ConditionPressureUlcer.html) because Mark has a pressure ulcer on his left leg. A [goal/expected future condition](Goal-MarkForventetTilstand.html) is formulated for the pressure ulcer. In addition, a follow-up date is specified for the pressure ulcer condition, by formulating a future [encounter](Encounter-MarkFollowUpPlanned.html).

After the nursing status is completed, the home care nurse updates the [overall evaluation](Observation-MarkHelhedsvurdering.html) of Mark (Helhedsvurdering). From this evaluation we can read, that at the time where the nursing status is done, Mark actually have preexisting problems with mobility that means that he receives help with cleaning (conditions and interventions relating to this is not included as explicit examples). The nurse writes a new overall evaluation pointing out the mobility problem as well as the pressure ulcer and a potential problem with circulation. The nursing status and overall evaluation have been caried out, in an [encounter](Encounter-MarkogUdredningSygepleje.html).

After the nursing status, Mark's [pressure ulcer care intervention](CarePlan-PressureUlcerIntervention.html) is planned, and we can see that it is progressing because [an encounter](Encounter-MarkogSaarsygeplejerske.html), where ulcer care is carried out, is added. In addition, we can see that an [observation method](Goal-MarkIndsatsmaal.html) (målemetode) is added to the intervention, where it is stated that the pressure ulcer should be monitored by measuring the surface area regularly.

At some point, the municipality receives a referral by message or phone from a general practitioner, stating that Mark is feeling sick, and needs his vitals taken as soon as possible. The municipality records [the referal](ServiceRequest-HenvisningFraLageVedrAkutSygepleje.html). [Extra information](Provenance-HenvisningFraLageVedrAkutSygeplejeProvenance.html) might be necessary to accurately state that the general practitioner is responsible, but the municipality staff have done the recording.  

Now, an acute care nurse is send to Mark's residence i.e. [an encounter](Encounter-MarkOgAkutsygeplejerske.html) occurs in the record. At this encounter, different measurements are taken:[Diastolic blood pressure](Observation-MarksDiastoliske.html), [heart rate](Observation-MarksPuls.html) and [blood glycose](Observation-MarksBlodsukker.html). After the encounter, the nurse records the [intervention that has been carried out](Procedure-AkutSygeplejeMark.html).

#### Andreas example
[Andreas](Patient-Andreas.html) has a developmental disability and has lives with his mother. His mother [requests](ServiceRequest-HenvendelseFraMorVedrSocialIndsats.html) help from the municipality, because she is getting older and can no longer provide the needed help for Andreas.

A full examination of FFB Themes and subthemes is not provided in this example, but we can see that Andreas' [goals and wishes](Goal-AndreasMaalOnsker.html) are recorded. In addition, the [condition/subtheme: cleaning](Condition-ConditionCleaning.html) has been recorded for Andreas.

We can see that Andreas receives a [social intervention](CarePlan-FFBIndsats.json.html) (social indsats), which also holds a reference to an [assessment of degree of assistance required](Observation-AndreasStottebehov.html) (støttebehovsvurdering). As specified by FFB, the social intervention consist of target group, specific interventions and performer-type (målgruppe, ydelser og tilbud). The [target group is developmental disability](Condition-AndreasMaalgruppeUdviklingshamning.html), the specific interventions are related to [daily tasks](CarePlan-AndreasDagligeOpgaver.html), and [support in establishing social relations](CarePlan-AndreasSocialeRelationer.html). The performer-type is [temporary stay](CareTeam-MidlertidigtOpholdBotilbuddetHvidbjerghus.html). The performer-type is documented together with the actual performer in this example, but it may be documented generally, using only the category-attribute.

Note that the [social intervention](CarePlan-FFBIndsats.json.html) also contain the purposes and goals as formulated by FFB: An [overall goal](Goal-AndreasIndsatsformaal.html) (indsatsformål), [Intervention goal](Goal-Andreasindsatsmaal.html) related to Andreas' condition (indsatsmål) and [sub-goal](Goal-AndreasDelmaal.html) (delmål).

While receiving the social intervention i.e. the temporary stay at 'Hvidbjerghus', the staff record different notes about Andreas, one is relating to the known condition: cleaning - and [the note](Condition-ConditionCleaningWithNote.html) is recorded as an update to the existing condition. The staff also notes that Andreas has [problems with his health related behaviour](Condition-ConditionCareingForOwnHealthPerformerNoteFFB.html) (varetage egen sundhed), this is recorded as a note to an unconfirmed condition, because the condition is not documented in the record before-hand.

In the end of Andreas temporary stay, a follow-up on Andreas social intervention is performed, and the [structured result](Observation-AndreasRevisitation.json.html) is documented. The follow-up result, and a new evaluation (not in the example) comes to the conclusion that Andreas should have a new permanent housing in a care facility - this is documented in a new [social intervention](CarePlan-NySocialIndsats.html).

#### Mads example
[Mads](Patient-Mads.html) is a citizen with a few recorded FFB Themes. The difference between having a [citizen perspective on an FFB Theme](Observation-MentalInformationMads.html) or having [information from others](Observation-MentalInformationMadsOthers.html) is illustrated in this short example.

### Overview
In the image below, on overview of FKI is provided. The illustration does not include any attributes, and only the most important relationships.

<img alt="OverviewModel" src="./FHIROverview.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

#### Occasion to act 
The occasion to act in the municipality health and social care system, is a request for help from a citizen or next-of-kin, a referral from a health provider or an internal or between municipality request. In FKI, the municipality registration of a received request or referral can be documented using [ServiceRequest](StructureDefinition-KLCommonCareSocialServiceRequest.html). The reason for a request, may be a diagnosis or condition already known by another health provider, which can be documented using [FocusCondition](StructureDefinition-KLCommonCareSocialFocusCondition.html). The reason could also be that a follow-up result has shown the need to re-do the visitation of the citizen, which is documented using [FollowUp](StructureDefinition-KLCommonCareSocialFollowUp.html).

An 'occasion to act' is most typically a reason to start activity planning. However, in some acute cases, it may be needed to start execution of intervention based on the service request alone. This is often the case for acute home nursing, requested by general practitioners.

#### Activity planning
The activity planning is the planning of information gathering processes, assessments, and interventions. According to FSIII and FFB, some information gatherings and assessments are planned before execution, others are not. E.g. 'nursing status' is an intervention code in FSIII, whereas no such thing exists in FFB.
Interventions (indsatser og ydelser) and goals are planned and authorized at this stage. A [CarePlan](StructureDefinition-KLCommonCareSocialCarePlan.html) is used for broader defined plans that may include several [PlannedInterventions](StructureDefinition-KLCommonCareSocialPlannedIntervention.html). Social intervention (FFB sociale indsatser) is an example of care defined this way in Denmark.
Other parts of the care are simply defined as single interventions, where each intervention has a single focus e.g., 'Cleaning' or 'Ulcer management'. These are defined as instances of [PlannedIntervention](StructureDefinition-KLCommonCareSocialPlannedIntervention.html). Home nursing and home care are examples of care defined this way in Denmark. When planning activities, [Goals](StructureDefinition-KLCommonCareSocialGoal.html) are also defined. Be aware that very different types of goals exist in the Danish municipality realm, and that different constraints apply to them, so refer to the FSIII and FFB methods. The different types are explicitly stated in the [GoalType ValueSet](ValueSet-KLGoalTypeCodes.html). Note that an expected condition (forventet tilstand) is expressed a goal, not as part of a Condition.
Despite the simple view in the figure, encounters may be planned, rather than only being part of the execution process. Planned and executed encounters are distinguished using the Encounter.status attribute. This is especially true for planned follow-up, which is expressed using planned encounters.

#### Execution
The execution package contains all documentation related to activities, which have actually occurred.  [Encounters](StructureDefinition-KLCommonCareSocialEncounter.html) contain information about when citizens and practitioners meet. Encounters are used for administrative/planning purposes, rather than for carrying clinical/care content. They state time, place, and type of contact. An encounter may be spend carrying out precisely what was planned. In this case, the [PlannedIntervention] (StructureDefinition-KLCommonCareSocialPlannedIntervention.html), might simply refer to the encounter. However, if anything differs from the planned, or if an acute situation arises, the intervention actually carried out, within the boundaries of a single Encounter, may be documented using [CompletedIntervention](StructureDefinition-KLCommonCareSocialCompletedIntervention.html).
The [InformationGathering](StructureDefinition-KLCommonCareSocialInformationGathering.html) is used to document information gathering processes e.g., the execution of a nursing status, the documentation of a therapeutic examinations etc. However, information gathering only holds references. All the information-content is documented using the Observations and conditions package.

#### Observations and conditions
Information gathering and follow-up encounters results in updated information about the citizen status. In addition, the interventions are performed to improve or at prevent worsening of the citizen's status. The observations and conditions package makes it possible to express the status of a citizen. The status may be expressed using a variety of observations and conditions and required by FSIII and FFB.
Information gathering processes, follow different patterns depending on the professional focus - e.g., a nursing status have 12 themes or questions associated with it. Each of the themes/questions needed to perform information collection according to FFB and FSIII, should be expresses using [MatterOfInterest](StructureDefinition-KLCommonCareSocialMatterOfInterest.html). If information gathering or follow-ups result in the identification of conditions, which should be considered for interventions, [Conditions](StructureDefinition-KLCommonCareSocialMatterOfInterest.html) are instantiated. For home care, when a condition is identified, the citizen should rate their own execution-level, this may be done using [CitizenOwnObservation](StructureDefinition-KLCommonCareSocialCitizensOwnObservation.html). After an information gathering process, FFB and FSIII require, that an evaluation of the overall status of the citizen is performed. The result is documented using [Evaluation](StructureDefinition-KLCommonCareSocialEvaluation.html). After a follow-up, a follow up result can be documented using [FollowUp](StructureDefinition-KLCommonCareSocialFollowUp.html).
Throughout the care trajectory, observations might support findings, and be used before and after meassurements for evaluating the intervention efficiency. These are expressed using [Observation](StructureDefinition-KLCommonCareSocialObservation.html).
The last option, is that a citizen condition is known, because it has been found someplace else, and communicated to the municipality. In this case, the [FocusCondition](StructureDefinition-KLCommonCareSocialFocusCondition.html) can be instantiated. Note that FFB target groups (målgruppe) is a type of FocusCondition, because the target group is basically found elsewhere, even though it is a classification used by the municipalities.

Whenever an updated status of the citizen has been obtained, this might result in new plans being made, or execution of interventions if acute problems has arisen. However, the status might be so significantly changed, that the citizen should be re-evaluated completely. In this case, the changed status is considered a new occasion to act.



### Versioning and change management

#### This implementation guide
This implementation guide is regularly updated, and stable versions published on simplifier.net via MedCom. Note that FSIII and FFB Code systems are included as copies in the implementation guide. This results in a very simplistic versioning mechanism i.e. any time changes occur in either the model or municipality terminologies, a new version will be made available. The package number has three levels.
* First level updates are made when new areas of documentation are added to the model, which requires new community reviews of the model.
* Second level updates are any updates that adds or removes content from either model or terminology.
* Third level updates are updates that only relates to naming and communication, which means that the FHIR validator will not have errors running on another minor version, than the current (except for some warnings if coding.displays' are changed).

#### Instance level
When implementing use cases exploiting the profiles in this implementation guide, there may be a need to keep track of temporal development in data. Without knowing the specific use cases and implementation paradigm, unambiguous guidance about change management cannot be given. However, general guidance is available [here](https://www.kl.dk/media/51545/notat-om-tidsmaessig-udvikling-i-fsiii-og-ffb-data-vha-fki.pdf) in Danish.

### Dependencies
{% include dependency-table.xhtml %}

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles
{% include globals-table.xhtml %}

### IP Statements
{% include ip-statements.xhtml %}

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialCarePlan-intro.md

### Scope and usage
KLCommonCareSocialCarePlan is used to document a collection of PlannedInterventions, which have a common goal or focus. 

CarePlan.category specifies the different types of CarePlans and has the following valid values: Rehabilitation following the health act §140, health promotion and prevention following the health act §119, and social intervention (social indsats) as described by FFB and VUM. The latter is well-described. §140 and §119 as healthcare processes are not thorughly described by FSIII yet, but there is a recognized need, to see them as processes rather than stand-alone interventions. Consequently, attributes are designes as specified by FFB.

The CarePlan.goal have two slices because it is used to describe both the mandatory purpose of the CarePlan (indsatsformål) and any number of connected intevention goals (FFB indsatsmål). An overall description of the intended intervention activities should be provided in CarePlan.description, which have a MUST SUPPORT flag. This means that even though it is not mandatory, it is highly recommended.     

CarePlan.careTeam refers to the CareTeam ressource and is used to describe both the organisation that delivers the interventions described in the care plan (CarePlan.careTeam:CareTeam.participant.member), and the type of delivery (FFB tilbud) (CarePlan.careTeam:CareTeam.category). 

The target group (Målgruppe) for FFB is specified in the Goal.adressess attribute. Note that the primary and secondary target groups are distinguished using a ConditionRank extension. The primary target group should have rank 1, all others do not have a required rank. FFB requires a primary target group only. The target group is expressed using a FocusCondition profile. Note that only FocusConditions, where the code is actually a target group is relevant here.

CarePlan.intent, CarePlan.status and CarePlan.subject are mandatory in the FHIR CarePlan resource. It is important that the intent is set to "order", when the interventions have been approved by municipality authorities (når bevillingen er sket). The status should, as a minimum distinguish between draft, active, revoked and completed plans. Note that the meaning of active is "ready to be acted upon", so it does not signify that the first activities have occured.

The relevantHistory extension points to earlier significant versions of the CarePlan. Using the relevantHistory extension is recommended if changes to carePlans over time is of relevance for the use case.

CarePlan.activity.outcomeReference is used to represent assesments. Typically Assessment of needs, assessment of citizen resources, and assesment of citizen perspective is relevant, but others may be included. When it comes to of needs (støttebehovsvurdering), it may be used to represent both the initial assesment of needs, and the assesment made when terminating the CarePlan. To make explicite which activity is performed, set activity.detail.code.coding to the appropriate code e.g. effe55c7-572c-4a99-8fb4-2a9dda2f6572 "Støttebehovsvurdering".

CarePlan:extension.municipalityCaseNumber is a relation to the municipality case (Sag). The officialCaseIdentifier uses an official http-adress and uuid to relate to a municipality case (Rammearkitektur: Sag.ID). The municipalitySpecificCaseIdentifier uses a municipality specific ID as a value, and relates to the organization that owns this caseIdentifier(Rammearkitektur Sag.Sagsnummer og Sag.ejer Sagsaktør).

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter, der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk, og specificerer hvilke af FHIR-profilens atributter, der skal bruges til specifikation af indholdet.

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|indsatsforløbKategori|Klasse der udtrykker, hvilken slags indsatsforløb der er tale om.|CarePlan.category.coding|
|indsatsforløbFormål|Den overordnede intention med indsatsen.|CarePlan.goal|
|indsatsforløbBeskrivelse|Beskrivelse af indsatsforløbets indhold.|CarePlan.description|
|indsatsforløbOprettelsestid|Det tidspunkt hvor indsatsforløbsdokumentationen først blev oprettet.|CarePlan.created|
|indsatsforløbBevillingstid|Det tidspunkt hvor indsatsforløbet blev bevilliget.|CarePlan.period.start|
|indsatsforløbAfslutningstid|Det tidspunkt hvor indsatsforløbet blev afsluttet, eller planlægges afsluttet.|CarePlan.period.end|
|indsatsforløbsubjekt|Den borger som er genstand for indsatsforløbet.|CarePlan.subject|
|indsatsforløbansvarlig|Den organisation som er ansvarlig for bevilling og opfølgning på indsatsforløbet.|CarePlan.author|
|indsatsforløbsleverandør|Den organisation, der er ansvarlig for udførelsen af indsatsforløbet.|CarePlan.careTeam:CareTeam.participant.member|
|indsatsforløbmålgruppe|Forkustilstand der udtrykker den FFB målgruppe, der er knyttet til en social indsats. (Målgruppen udtrykkes vha profilen FocusCondition)|CarePlan.adresses|
|indsatsforløbmålgruppeRang|Heltal der udtrykker, hvordan målgruppen er prioriteret, så der kan skelnes mellem primær målgruppe og øvrige målgrupper.|CarePlan.adresses:extension.conditionRank|
|indsatsforløbtilbud|Klasse der udtrykker hvilken type tilbud (i FFB forstand), der skal varetage leveringen af ydelser.|CarePlan.careTeam:CareTeam.category|
|indsatsforløbhensigt|Indikerer niveauet af autorisation og hvor langt i planlægningen indsatsforløbet er.|CarePlan.intent|
|indsatsforløbstatus|Indikerer om der bliver handlet på der planlagte indsatsforløb, eller om dokumentationen repræsentere en fremtidig intention eller er historisk.|CarePlan.status|
|indsatsforløbændringshistorie|Tidligere versioner af Indsatsforløbet, hvor der er sket klinisk relevante ændringer.|CarePlan:extension.relevantHistory|
|indsatsforløbsmål|Mål for indsatsforløbet.|CarePlan.Goal|
|indsatsforløbVurderinger|Vurderinger foretaget ifm. formulering af og opfølgning på indsatsforløbet.|CarePlan.activity.outcomeReference (activity.detail.code.coding)|
|indsatsforløbDokumenteretISag|Kommunalt sagsnummer på den sag, som indsatsforløbet vedrører. Enten officielt uuid eller kommune-specifikt nummer|CarePlan:extension.municipalityCaseNumber|


---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialCitizensOwnObservation-intro.md

### Scope and usage
CommonCareSocialCitizensOwnObservation is used to document, performance level (udførelse) or importance level (betydning) as defined by FSIII. Note that each of the observations require its own instance of this model. The observation only makes sense linked to an already defined Condition or MatterOfInterest. Consequently, the focus-attribute is mandatory.

The code-attribute refers to either performance level or importance level using a required ValueSet, and the result is expressed in valueCodeableConcept, which is also bound to a required FSIII valueSet. Observation and value codes should be correctly matched, so that a performance-result is not used with a importance observation-code.

Note that the profile does not specify explicitely, which role the citizen had in evaluating his or her own performance/importance level. The model just presumes that the citizen (refered in Observation.subject) has been asked about their own evaluation of the matter, and that is has been documented by a municipality practitioner (refered in Observation.performer). However, if further specification of roles in the documentation proces is required for a specific use case, please use [Provenance](https://www.hl7.org/fhir/provenance.html).

The encounter in which the citizen make the observation can be refered to in Observation.encounter. Notice that the status-attribute is mandatory. For normal use, just set to "final". If data is missing or another problem has occured, follow the FHIR guidance to populate the field correctly.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter, der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|borgervurderingskode|Klasse som udtrykker, at der observeres på borgers evne til at udføre funktion eller aktivitet.|Observation.code.coding|
|borgervurderingsresultat|Klasse, der udtrykker resultatet af borgers vurdering.|Observation.valueCodeableConcept.coding|
|borgervurderingssubjekt|Den borger, som er genstad for vurdering.|Observation.subject|
|borgervurderingskontakt|Den kontakt, hvor vurderingen er foretaget.|Observation.encounter|
|borgervurderingsansvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|borgervurderingsfokus|Tilstand eller matter of interest, som denne borgervurdering er direkte observation på.|Observation.focus|
|borgervurderingstid|Tidspunkt for borgervurderingen.|Observation.effectiveDateTime|
|borgervurderingsstatus|Klasse der udtrykker, hvor i sin proces, borgervurderingen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialCompletedIntervention-intro.md

### Scope and usage
In a Danish municipality setting, CommonCareSocialCompletedIntervention is used to describe what activities has been delivered (e.g. a visit from a nurse to a citizen home where wound care is delivered). A CompletedIntervention always describes actual activities of one encounter. It should not be confused with PlannedIntervention, which describes the intention of activities, typically for several encounters.
The CompletedIntervention may point to the request-resource that authorized the intervention. This can be either a PlannedIntervention, where the municipality visitation has authorized the intervention or a ServiceRequest, if the request directly has initiated the intervention e.g. acute nurse care issued by a general practitioner. It should be blank for activities delivered without pre-authorization e.g. when a home care practitioner comes to clean the house but finds the citizen on the floor after a fall and helps with this.

Procedure.complication.coding should be set if the planned intervention has been delivered with some complication. If the complication code is set, the basedOn-attribute should point to the relevant PlannedIntervention OR the code attribute should be populated with a FSIII or FFB intervention code. The complication should be described in Procedure.complication.text.

Procedure.performedPeriod.start og Procedure.performedPeriod.end are only important if the time spend on one out of more interventions delivered in one encounter needs monitoring. E.g. one home care visit on the 20th of June with cleaning from 8:30-8:50 and help with food preparation from 8:50-9:00.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|leveretIndsatsAktivitetstatus|Indikation af hvor i det kliniske forløb indsatsen er.|Procedure.status|
|leveretIndsatsAktivitetstatusTekst|Grund til at en indsats ikke er gennemført|Procedure.statusReason.text|
|leveretIndsatsAktivitetAfvigelseskode|En klasse der, hvis den er til stede, angiver på hvilken måde indsatsen ikke er leveret i overensstemmelse med den PlanlagteIndsats.|Procedure.complication.coding|
|leveretIndsatsAktivitetAfvigelsestekst|Beskrivelse af hvilken afvigelse der er ift. det planlagte|Procedure.complication.text|
|leveretIndsatsAktivitetNotat|Beskrivelse af hvilken indsats der konkret er leveret.|Procedure.note.text|
|leveretIndsatsAktivitetSubjekt|Den borger som indsatsen er leveret til.|Procedure.subject|
|leveretIndsatsAktivitetDokumenterendeLeverandør|Den leverandør, som er ansvarlig for dokumentationen af den leverede indsats.|Procedure.recorder|
|leveretIndsatsAktivitetKode|Klasse, der udtrykker hvad den leverede indsats omhandler.|Procedure.code.coding|
|leveretIndsatsAktivitetbevilling|Den autorisation som leveringen er baseret på via en reference til den planlagte og bevilgede indsats eller en henvisning fra læge. Er kun fraværende når leverandøren leverer noget andet end det planlagte på eget initiativ.|Procedure.basedOn|
|leveretIndsatsAktivitetKontakt|Den kontakt, hvor denne del af indsatsen leveres.|Procedure.encounter|
|leveretIndsatsAktivitetStart|Starttidspunkt for levering af indsatsen.|Procedure.performedPeriod.start|
|leveretIndsatsAktivitetSlut|Sluttidspunkt for levering af indsatsen.|Procedure.performedPeriod.end|























---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialCondition-intro.md

### Scope and usage
The KLCommonCareSocialCondition may be instatiated whenever a condition is found and registered for citizens in Danish municipalities. In social care, conditions are also referred to as subthemes (undertemaer).

Conditions are always defined by Condition.code, which may originate from FSIII or FFB. In addition, a SNOMED CT code may be added either to improve understanding for those outside the Danish municipalities, or to express more detailed content.

Condition.severity.coding has as valid values the functioning ability levels (FFB funktionsevneniveau) or funtional levels (FSIII funktionsniveau). Make sure that FFB subthemes use FFB functioning ability levels and FSIII conditions use FSIII functional levels - the codes have somewhat the same wording, but they do not have the same meaning.

Condition.recordedDate is the date where the condition was first recorded, NOT the date where the problem first known to be present.

Condition.clinicalStatus should be populated with the value "active" if the citizen has the condition, and inactive if the citizen no longer have the condition. Condition.verificationStatus should be set to "unconfirmed", if a note is associated with a condition code, which is not already active and confirmed (this is specific to FFB). In most other use cases, Condition.verificationStatus should be "confirmed". clinicalStatus is mandatory, and it is a good idea to always provide the verificationStatus. If not populated, the condition is assumed to be "confirmed".

Conditions are related to a professional context (through its code). These are the different contexts in which codelists of conditions are formulated:

* Home nursing SUL §138 (FSIII)
* Home care SEL §83, §83a, §84, §86 (FSIII)
* Prevention SUL §119 (FSIII)
* Training SUL §140 (FSIII)
* Specialized social care SEL §85, §103, §104, §107, §108, and Almenboligloven §105. (FFB)

Condition.category is, in this implementation, used as a way to determine whether the condition is in focus in a professional context. In focus means that this condition is solely or partially the reason why interventions are performed in the professional context. If a condition is "in focus" Condition.category is populated with the value "problem-list-item". An empty Condition.category means that the focus have not been considered (if it is the first version of a condition). If the latter is the case, it might be difficult to determine whether a condition have been ended.

Ending a condition have two meanings. The first is that the citizen no longer has the condition e.g. a pressure ulcer has healed. In this case, Condition.clinicalStatus=inactive and Condition.abatementTime is the date where the condition was no longer a problem. The second meaning of "ended" is that the condition falls out of focus in a professional context e.g. if the citizen moves, or another professional group takes over the care for the citizen. In this case, the Condition.category looses its "problem-list-item" flag. The idea is to state that from a citizen viewpoint the condition has not changed, but in this professional context it is no longer in focus.

Condition.code.text holds a short description or evaluation of the condition including how serious it is. The attribute is mandatory for the home nursing context. The attribute should only be changed, if the condition significatly changes e.g. a pressure ulcer that is significantly worse or better. All other text descriptions and notes should be placed in Condition.note.text. For most use cases, it is important that notes explicitely state the author in Condition.note.author. Special care should be taken if you want to explicitely state the source of the information, as it is explicitely done in FFB for 'activity and participation conditions'. It is recommended that 'information from the citizen', 'information from others' and 'employee evaluation'(sagsbehandlers bemærkning) are documented using three separate Condition.note.text and with the correct associated code in Condition.note:extension.matterOfInterestInformer. The employee evaluation should be documented in short form in Condition.code.text.

Condition.extension:dueTo is the reason for the condition, which is an optional attribute in FSIII. It references either KLCommonCareSocialCondition or KLCommonCareSocialFocusCondition.

Condition follow-up is documented using Condition.extension:followUpEncounter, which points to a future encounter, with Encounter.type= "opfølgning".

Condition.evidence.detail may hold a reference to both KLCommonCareSocialMatterOfInterest and KLCommonCareSocialEvaluation. Associated KLCommonCareSocialEvaluations are previous follow-up results. Associated KLCommonCareSocialMatterOfInterest's are information about the citizen recorded under the headings defined by FFB Themes, Areas (FSIII områder), which are related to this specific condition. E.g. if the condition is "J3.4 - Færden i forskellige omgivelser" then there might be associated information recorded as a KLCommonCareSocialMatterOfInterest within the code "J3 - Mobilitet".

Conditions may have several different versions. Those that are important from a municipality viewpoint may be followed using the extension:EventHistory.

Condition.extension:conditionLastAssertedDate holds information about the last date a condition was confirmed valid in its current state. Eg. with its current clinical- and verification status, and severity. In municipalities, this is often the date of the last performed follow-up, given that the follow-up has included an active evaluation of this particular condition. Note that the condition need not have changed (e.g. severity or status) to have a new conditionLastAssertedDate

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|tilstandskode|Udtrykker hvilken klasse tilstanden tilhører.|Condition.code.coding|
|tilstandssværhedsgrad|Udtrykker hvilken klasse tilstandens sværhedsgrad har.|Condition.severity.coding|
|tilstandsstatus|Klasse der udtrykker en status for om tilstanden er til stede eller ej.|Condition.clinicalStatus og Condition.verificationStatus|
|tilstandsvurdering|Beskrivelse af en persontilstand |Condition.code.text|
|tilstandFagligtNotat|Beskrivelse af løbende status, der ikke ændrer på vurdering, og sværhedsgrad.|Condition.note.text|
|tilstandsInformant|Klasse der udtrykker hvem oplysninger vedr. tilstanden kommer fra.|Condition.note.extension:matterOfInterestInformer|
|tilstandsoprettelsestid|Tidsangivelse for hvornår tilstanden først blev oprettet i journalen|Condition.recordedDate|
|tilstandsafslutningstid|Tidsangivelse for hvornår tilstanden er afsluttet. Med afsluttet menes at tilstanden ikke mere er et problem for borger.|Condition.abatementDateTime|
|tilstandsplanlagtOpfølgning|Kontakt, hvor det planlægges at følge op på tilstanden |Condition.extension:followUpEncounter|
|tilstandsårsag|Årsag til en persontilstand |Condition.extension:dueTo|
|tilstandssubjekt|Den borger som har tilstanden|Condition.subject|
|tilstandsansvarlig|Den fagperson, der bedømmer borgerns tilstand|Condition.asserter|
|tilstandsændringshistorie|Tidligere versioner af tilstanden, hvor der er sket klinisk relevante ændringer|Condition.extension:eventHistory|
|tilstandsevidens|Oplysning fra en udredning eller afklaring, der ligger til grund for denne tilstand, eller opfølgningsresultater, der er opfølgning på denne tilstand til forskellige tider.|Condition.evidence.detail|
|tilstandsfokus|Klasse der udtrykker, om en faggruppe har tilstanden i fokus for sine indsatser|Condition.category.coding|
|tilstandSidstVurderetTid|Tidsangivelse for hvornår tilstanden sidst er vurderet valid i sin nuværende form (fx sværhedsgrad og status).|Condition.extension:conditionLastAssertedDate|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialEncounter-intro.md

### Scope and usage
The CommonCareSocialEncounter may be instantiated whenever citizens and practitioners meet in a Danish municipality context. The CommonCareSocialEncounters are e.g.
* Home visits in citizens homes by nurses or home-care staff
* Training sessions
* Histroy taking, examinations and clarifying conversations
* Follow-up

The Encounter.type.coding attribute is used to classify the type of activities that occur at the encounter. More than one activity may occur. Note that it is not the intention that these codes should be documented by staff. Rather, they should be derived from the documentation following an encounter e.g. if an observation is documented, the code 'observation' should be added to the Encounter.type.coding. Note that if there are more than one code, they should be added as separate CodeableConcepts, not separate codings under the same CodeableConcept.

It is important in FSIII to be able to express follow-up encounters. In the planning state, these are documented by setting Encounter.status = "planned", and Encounter.type.coding = "opfølgning". When a followUp has been performed, the Encounter.status is changed to "finished".

Encounter.class is mandatory in FHIR. In Danish municipalities the values are used as follows.
* Visits in citizens homes have the code 'HH' home health, the code is also used for services that are not strictly health related e.g. help with cleaning. This code is also used, even if the activities stretch outside the citizens residence e.g. a physiotherapist that want to see a citizen walk outside, or a social worker helping with shpping activities.
* Sessions where the citizens visit municipality facilities e.g. for training or health prevention have the code "AMB" ambulatory. 
* For visits in municipality health facilities e.g. municipality acute centers the code 'IMP' inpatient encounter. All activities are related one and the same encounter.
* Rooms in nursing homes are considered citizens own homes. If the encounter model is used, each visit (or for simplicities sake, each day) must be considered its own encounter. The code is 'HH' home health.
* For telehealth/telecare encounters, where the patient is contacted by telephone, by teleconference or e-mail, the code is 'VR' virtual.

In Denmark, the term "indirekte indsatser" is used to express staff activities where citizens are not present. E.g. coordination or follow-up. These activities may still be part of PlanlagtIndsats or PlanlagtIndsatsforløb, but they may not be expressed as encounters. Instead, a Provenance resource may be instantiated, to express the carried out coordination work.

Encounter.period.start is mandatory. Note that "time of day" is optional. 

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|borgerkontaktstatus|Klasse der indikerer om kontakten er igangværende, eller om dokumentationen repræsentere en fremtidig intention eller er historisk|Encounter.status|
|borgerkontakttype|Klasse der udtrykker typen af aktivitet der gennemføres ved kontakten|Encounter.type.coding|
|borgerkontaktstart|Kontaktens start, eller planlagte start|Encounter.period.start|
|borgerkontaktslut|Kontaktens sluttidspunkt, eller planlagte sluttidspunkt|Encounter.period.end|
|borgerkontaktlængde|Kontaktens længde, eller planlagte længde. |Encounter.length|
|borgerkontaktudfører|Liste af fagpersoner, der gennemfører kontakten|Encounter.participant|
|borgerkontaktsubjekt|Den borger kontakten vedrører|Encounter.subject|
|borgerkontaktklasse|Klasse, der udtrykker en generel kategori for kontakten, som rækker ud over den kommunale kontekst.|Encounter.class|
|borgerkontaktansvarlig|Den organisation der er ansvarlig for kontakten|Encounter.serviceProvider|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialEvaluation-intro.md


### Scope and usage
CommonCareSocialEvaluation is used for documenting the result of an evaluation, typically being the last part of or following an information collection process. The different kinds of evaluations currently supported are defined by FSIII and FFB, and they are "FSIII helhedsvurdering", "FFB vurdering af borgers situation", "FFB støttebehovsvurdering", "VUM Borgerens perspektiv på indsatsen", "VUM Borgerens ressourcer i forhold til indsatsen".

The Observation.code is mandatory, and fixed to a ValueSet specified by Local Govenment Denmark (KL), which may be suplemented with a SNOMED CT code.

This resource has a text-based results in Observation.valueCodeableConcept.text, but can have a coded result as well. The coded result is only defined for structured needs assessment (FFB støttebehovsvurdering), and is represented in Observation.codeableConcept.coding. This means that Observation.codeableConcept.coding is only allowed if the Observation.code is effe55c7-572c-4a99-8fb4-2a9dda2f6572"FFB støttebehovsvurdering", and possibly the SNOMED CT code 225344000 "Assessment of degree of assistance required (procedure)".

The Evaluation may reference a ServiceRequest, if the evaluation is percieved as an answer to that request. 

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|vurderingskode|Klasse der udtrykker typen af vurdering.|Observation.code|
|vurderingsresultat|Tekst der udgør vurderingsresultatet.|Observation.valueCodeableConcept.text|
|struktureretVurdering|En struktureret støttebehovsvurdering.|Observation.valueCodeableConcept.coding|
|vurderingssubjekt|Den borger der vurderes.|Observation.subject|
|vurderingskontakt|Den kontakt, hvor vurderingen gennemføres.|Observation.encounter|
|vurderingsansvarlig|Den fagperson der er ansvarlig for vurderingen.|Observation.performer|
|vurderingBaseretPå|Den henvendelse/henvisning som vurderingen er opsummering/svar på.|Observation.basedOn|
|vurderingstid|Det tidspunkt hvor vurderingen er foretaget.|Observation.effectiveDateTime|
|vurderingsstatus|Klasse der udtrykker, hvor i sin proces, vurderingen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialFocusCondition-intro.md

### Scope and usage
The FocusCondition is used for the documentation and exchange of conditions, that does not originate from the municipality from which a citizen currently recieves their care, but which are nevertheless important for the care or treatment that the citizen recieves from the municipality. As the conditions originates from different organisations, they have different code systems and Value sets associated with them, which are documented in different slices of Condition.code.coding. The different types of conditions allowed are:
* Diagnoses from hospitals (using ICD10/SKS-D codes)
* Diagnosis or problems as registered by general practitioners (using ICPC2) 
* Conditions that other municipalities have previously cared for (Using FSIII and FFB condition codes)
* An FFB target-group registration (Using FFB target group codes)
* Condition that the citizen, next-of-kin or others tell about (No codes used)

A short description of the citizens condition can be provided in Condition.code.text, which is especially important if the condition does not have a code or if the code is not very specific. If the external party wishes to send more thorough descriptions or historic notes about the condition, they may be added using Condition.note - in addition to text, Condition.note contains a date and author, making it possible to refer to historic notes documented by others, than the one autoring the Condition itself.

The Condition.asserter can reference a practitioner, who is responsible for finding the condition or first describing the condition as a condition. Condition.recorder can reference the practioner responsible for this recording of the condition.

Three time-references define the clinical course of the condition:
* The Condition.recordedDate is the day of the recording of the condition
* Condition.onset[x] the time where the condition first showed
* Condition.abatement[x] is the day where the condition is first recognized as no longer being present

It is a good idea to always provide clinicalStatus and verificationStatus. If they are not populated, the condition is assumed to be confirmed and active.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|tværorganisatoriskTilstandskode|klasse der udtrykker, hvilken persontilstand der er tale om.|Condition.code.coding|
|tværorganisatoriskTilstandsvurdering|Kortfattet beskrivelse af tilstanden, som uddybning af kode eller koder.|Condition.code.text|
|tværorganisatoriskTilstandsubjekt|Den borger, som den tværorganisatoriske tilstand vedrører|Condition.subject|
|tværorganisatoriskTilstandAnsvarlig|Den fagperson, der er ansvarlig for at have fundet tilstanden. |Condition.asserter|
|tværorganisatoriskTilstandDokumentationsansvarlig|Den fagperson, der er ansvarlig for denne dokumentation af tilstanden|Condition.recorder|
|tværorganisatoriskTilstandstatus|Klasse der udtrykker en status for om tilstanden er til stede eller ej.|Condition.clinicalStatus og Condition.verificationStatus|
|tværorganisatoriskTilstandstart|Det tidspunkt, hvor tilstanden først har vist sig|Condition.onset[x]|
|tværorganisatoriskTilstandsafslutningstid|Det tidspunkt hvor tilstanden først er erkendt som ikke længere værende til stede.|Condition.abatement[x]|
|tværorganisatoriskTilstandregistreringstid|Det tidspunkt hvor denne registrering vedr. tilstanden er gennemført|Condition.recordedDate|
|tværorganisatoriskTilstandFagligtNotat|Uddybninger eller journalnotater hørende til den tværorganisatorisk tilstand|Condition.note|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialFollowUp-intro.md

### Scope and usage
KLCommonCareSocialFollowUp is used for documenting the result of a follow-up procedure, as documented by both FSIII and FFB. Follow-ups are documented using this profile, whether they are documented by suppliers during an intervention, or documented by autorities, at planned follow-ups.

The profile has a text-based follow-up results in Observation.valueCodeableConcept.text, and a structured Follow-up result in Observation.valueCodeableConcept.coding

The ObservationCode is mandatory, and fixed to a specific SNOMED CT code that signifies that this is an evaluation of a care plan (evaluering af indsats i bred forstand).

Note that this ressource may reference an Encounter. Use this opportunity only if the follow-up takes place in an actual meeting between a practitioner and citizen.

The focus of the follow-up can be documented in Observation.focus, so that it becomes explicite which conditions and interventions this follow-up result pertains to.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter, der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|opfølgningsresultatKode|Klasse, der udtrykker at der evalueres på den indsats der er igangsat.|Observation.code.coding|
|opfølgningsresultat|Tekst der udtrykker hvad resultatet af opfølgningen er.|Observation.valueCodeableConcept.text|
|opfølgningsresultatStruktureret|Struktureret resultat af en opfølgningen|Observation.valueCodeableConcept.coding|
|opfølgningsresultatSubjekt|Den borger, der er genstand for opfølgningen|Observation.subject|
|opfølgningsresultatKontakt|Den kontakt hvor opfølgningen er foretaget|Observation.encounter|
|opfølgningsresultatAnsvarlig|Den fagperson der har ansvaret for opfølgningen|Observation.performer|
|opfølgningsresultatTid|Det tidspunkt, hvor opfølgningen er foretaget|Observation.effectiveDateTime|
|opfølgningsresultatStatus|Kode der udtrykker, hvor i sin proces, opfølgningen er|Observation.status|
|opfølgningsresultatFokus|Den eller de tilstande og indsatser der er fokus for opfølgningen.|Observation.focus|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialGoal-intro.md

### Scope and usage
In a Danish municipality setting, CommonCareSocialGoal is used to describe all the different kinds of goals and purposes defined by FSIII and FFB. Note that two specialized goal resources exist - use these for "FFB borgers mål og ønsker" og "Indsatsformål" if you want the CommonCareSocialCarePlan to work as intended.

The cateogory-attribute defines the different goals using the KLCommonGoalTypeCodes ValueSet. The goal-type often controls, which of the other attributes that are relevant to use. See more in the section "Bemærkninger vedr. eksempler"

The goal itself is described using Goal.target and/or Goal.description. The target may either be a severity related to functioning, or a changeValue. Goal.target.meassure may also be used to express the method by which a condition is evaluated without providing specific information about target.detail as described for "Indsatsmål" in FSIII (målmetode). The description may supplement the structured information and is used as primary description of the goal for categories that does not include structured data.

Goal.adresses has an extension (ConditionRank), which provide the means to prioritize the Conditions and MatterOfInterest that the goal addresses. The ConditionRank should be used in FFB to express the condition, which the goal primarily addresses (måltilstand), which is equivalent to rank 1. Other Condition or Information resources does not need to specify a rank. FFB only requires a Condition with rank 1 for "FFB Indsatsmål", relating more conditions and matterOfInteres ressources is optional.

The goal outcome attributes are expressed as required by "FFB Indsatsmål", with a note about outcome in Goal.outcomeCode.text, and the informer of that outcome stated in Goal.outcomeCode.extention:matterOfInterestInformer. Other than this, the goal outcome is often documented as a change in the condition. However, this is already handled by the Goal.adresses attribute. For reporting use cases, you just need to explicitely state at which points in time you need reporting of Goals and Conditions.

There may be several instanses of annotation stored in Goal.note.text, which describe how working with the goal progresses. Goal.note should be populated with a time and an author whenever relevant. Should not be confused with the Goal.description and Goal.outcomeCode.text.

Note that FFB, for some goals describe, whose goal it is. E.g. "borgers mål og ønsker" should be documented as described by the citizen. However, the Goal.expressedBy attribute should always be populated with the responsible practitioner. If describing the different roles of the documentation process in more detail is needed, use a Provanance resource and set the Goal as Provenance.target.

In Goal.extension:goalRelationship.type.text the string "based-on" define that the goal is based on another more overall goal. Goal.extension:goalRelationship.target references this overall goal. The relationship is used to link sub-goals (delmål) and intervention goals (indsatsmål) in FFB.

Goal.target.measure is used to express the type of observations, that should be performed to follow the goal, E.g. Pressure Ulcer Surface area observations, for goal related to curing an ulcer (FSIII målemetode). Goal.target.measure has a binding to an Observation ValueSet, which may be extended as needed. If possible, extend with observation codes fra SNOMED CT, and report the codes used to Local Government Denmark (KL).

The FHIR Goal ressource has a mandatory attribute Goal.lifecycleStatus with a binding to a status ValueSet. The whole ValueSet may be used, but you may constrain it, and only use "proposed" for all goals that are not yet active, "active" for active goals, and "completed" for all goals that are either reached or no longer being persued.

### Bemærkninger vedr. eksempler
Bemærk desuden at denne profil har et eksempel for hver type af mål:

* FSIII tilstandsmål (også kendt som forventet tilstand. Er kyttet til den tilstand der sættes mål for gennem Goal.adresses). Se: JudithForventetTilstand og MarkForventetTilstand
* FSIII indsatsmål (Det FSIII beskriver som udførers indsatsmål, ressourcen rummer også målemetode) Se: MarkIndsatsmaal
* FFB borgers mål og ønsker (Den overordnede beskrivelse der dokumenteres ifm. sagsåbning). Se: AndreasMaalOnsker
* Indsatsformål (Overordnet mål for en FFB social indsats, forventning om at den også kan anvendes for §140 forløb og §119 forløb). Se profilen KLCommonCareSocialPurpose - eksemplerne: AndreasIndsatsformaal og AndreasIndsatsformaal2
* FFB indsatsmål (FFB's mål med indsatsen, som relaterer sig til de tilstand der sættes mål for ifm en social indsats. Tilstandene relateres gennem Goal.adresses). Se profilen KLCommonCareSocialFFBGoal - eksempel: Andreasindsatsmaal
* FFB delmål (FFB's udfører mål) Se: AndreasDelmaal

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter, der skal bruges til specifikation af indholdet.


{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|målkategori|Klasse, der udtrykker hvilket mål der er tale om.|Goal.category|
|målSværhedsgrad|En klasse, der udtrykker en tilstands mål for sværhedsgrad.|Goal.target[severitySlice]|
|måltype|En klasse der udtrykker, om målet er at indsatsen skal ændre eller fastholde en tilstand, og i hvilken grad.|Goal.target[changeValueSlice]|
|målbeskrivelse|Beskrivelse af hvad målet er.|Goal.description|
|målSubjekt|Den borger som målet er opstillet for.|Goal.subject|
|målAnsvarlig|Den fagperson der er ansvarlig for oprettelsen af målet|Goal.expressedBy|
|målrelateret|Den eller de Tilstande eller Oplysninger, der er relvant for målet.|Goal.addresses|
|målrelateretRang|Heltal, der udtrykker hvordan tilstanden er prioriteret, så der kan skelnes mellem primær tilstand og øvrige tilstande|Goal.addresses.extension:conditionRank|
|målnotat|Løbende notat, der fortæller hvordan det går med at arbejde med målet.|Goal.note.text|
|målvurdering|En beskrivelse af om målet er opfyldt.|Goal.outcomeCode.text|
|målvurderingsInformant|Klasse der udtrykker, hvem der har vurderet målet.|Goal.outcomeCode.extention:matterOfInterestInformer|
|målemetode|Den type af observationer der skal til for at følge med i dette mål.|Goal.target.measure|
|delmålBaseretPå|Det FFB indsatsmål, som et FFB delmål er baseret på.|Goal.extension:goalRelationship.target / Goal.extension:goalRelationship.type|
|målstatus|Status for målet|Goal.lifecycleStatus|
































---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialInformationGathering-intro.md

# Scope and usage
The CommonCareSocialInformationGathering may be instatiated, whenever an information gathering activity occur. The InformationGathering-profile groups data from of information gathering process e.g. therapeutic examination and nursing statuses (therapeutisk udredning og sygeplejefaglig udredning). The full list of supported information gathering types are expressed as a ValueSet for ClinicalImpression.code.coding

The result of an information gathering is:
* "information", which reference [KLCommonCareSocialMatterOfInterest](StructureDefinition-KLCommonCareSocialMatterOfInterest.html), and is structured according to FSIII area codes, FFB general information codes or FFB theme codes. Use ClinicalImpression.investigation.code.coding and ClinicalImpression.investigation.item
* Conditions, which reference [KLCommonCareSocialCondition](StructureDefinition-KLCommonCareSocialCondition.html), and is structured according to FSIII conditions or FFB conditions/sub-themes. Use ClinicalImpression.finding.itemReference, and 
* Evaluations, which reference [KLCommonCareSocialEvaluation](StructureDefinition-KLCommonCareSocialEvaluation.html). In the FSIII specification, the evaluation (FSIII helhedsvurdering), is not the conclusion of information gathering. I.e. this attribute should not reference it. ClinicalImpression.investigation.code.coding and ClinicalImpression.investigation.item

In Danish Municipalities, some information gathering procedures may strech more than one encounter. In these cases, you only have the opportunity to document the latest time and reference the latest encounter. Use ClinicalImpression.effectiveDateTime, and ClinicalImpression.encounter. If more is needed, look into the use af FHIR Provenance.

Information gathering is often the first activity after a request or referal to the municipality. To show what initiated the informationGathering, a ServiceRequest may be referenced in ClinicalImpression:extension.basedOnServiceRequest

ClinicalImpression.status is mandatory valid values are "in-progress", "completed" and "entered-in-error". Use the code "in-progress" if the information gathering activity stated by ClinicalImpression.code.coding is started, but not finished.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|oplysningsaktivitetstype|Den type af oplysningsaktivitet der udføres|ClinicalImpression.code.coding|
|oplysningsaktivitetsubjekt|Den borger som oplysningerne vedrører|ClinicalImpression.subject|
|oplysningsaktivitetsudfører|Den fagperson, der udfører oplysningsaktiviteten|ClinicalImpression.assessor|
|oplysningsaktivitetstid|Det seneste tidspunkt hvor oplysningsaktiviteten fandt sted|ClinicalImpression.effectiveDateTime|
|oplysningsaktivitetskontakt|Den seneste kontakt hvor oplysningsaktiviteten fandt sted|ClinicalImpression.encounter|
|oplysningsaktivitetsordre|Den henvendelse eller henvisning der er grunden til at oplysningsaktiviteten finder sted|ClinicalImpression:extension.basedOnServiceRequest|
|oplysningsaktivitetsObservationstype|Klasse, der angiver om de tilknyttede observationer er oplysninger eller vurderinger.|ClinicalImpression.investigation.code.coding|
|OplysningsaktivitetsOmråde|Oplysninger organiseret under et fagligt område eller tema|ClinicalImpression.investigation.item|
|oplysningsaktivitetsKonklusion|Vurdering, der er konklusion på oplysningsaktiviteten.|ClinicalImpression.investigation.item|
|oplysningsaktivitetsTilstand|Tilstand, der er udredt ifm oplysningsaktiviteten.|ClinicalImpression.finding.itemReference|
|oplysningsaktivitetsstatus|Klasse der udtrykker, hvor i sin proces, oplysningsaktiviteten er.|ClinicalImpression.status|























---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialMatterOfInterest-intro.md

## Scope and usage
The KLCommonCareSocialMatterOfInterest is used in Danish Municipalities, and may be instantiated whenever information about the citizen is recorded, under the headings defined by FFB Themes, Areas (FSIII områder), General Information (FSIII generelle oplysninger). For each heading, a new instance of CommonCareSocialInformation is used. If using the findingInformer extension, each of the matterOfInterest informers’ perspectives have their own instance. I.e. one FFB theme may be associated with three different instances, if all matter-of-interest informers are documented explicitly. 

Observation.valueCodeableConcept holds the text-based result of the observation.

The documentation of the care-pathway may be supported using the Observation.encounter which tells in which encounter the KLCommonCareSocialMatterOfInterest has been recorded. Observation.basedOn may tell, which ServiceRequest resulted in the information gathering that this KLCommonCareSocialMatterOfInterest is part of.

Notice that the status-attribute is mandatory. For normal use, just set to "final", if data is missing or another problem has occured, follow the FHIR guidance to populate the field correctly.


### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|områdekode|Klasse der udtrykker området der belyses. |Observation.code.coding|
|områdetekst|Oplysningen af området udtrykt som tekst|Observation.valueCodeableConcept.text|
|områdesubjekt|Den borger som oplysningen af området omhandler|Observation.subject|
|områdekontakt|Den kontakt hvor oplysningsaktiviteten har fundet sted.|Observation.encounter|
|områdeansvarlig|Den fagperson, der er ansvarlig for oplysningsaktiviteten|Observation.performer|
|områdeordre|Den anledning, der har udløst at oplysningsaktiviteten er igangsat|Observation.basedOn|
|områdetid|Det tidspunkt hvor området er oplyst.|Observation.effectiveDateTime|
|områdeinformant|Klasse der udtrykker hvem område/tema er belyst af.|Observation.extension:matterOfInterestInformer|
|områdestatus|Klasse der udtrykker, hvor i sin proces, oplysning af området er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialObservation-intro.md

### Scope and usage
KLCommonCareSocialObservation is used to document results of activities where a property of a citizen is observed or meassured. This means that both FSIII meassurements (målinger) and FSIII observations (observationer) may be captured using this resource. FFB does not specify observations per se, but could use this resource if a need arise. The use of this resource should not be confused with what FFB defines as professional notes/observations (faglige notater/observationer), which are notes made by service providers during an intervention. Use the CommonCareSocialCondition resource instead.

KLCommonCareSocialObservation is loosely modelled. Special care should be taken when choosing the Observation.code.coding, which is mandatory. It is currently bound to an extensible set of SNOMED CT codes. If extending the set is nessesary for a use case, it is recommended that a SNOMED CT observation code is chosen, and that you report which code you use to Local Government Denmark (Kommunernes Landsforening). Be aware that more specific profiles are also designed. Browse this implementation guide, and the [Tooling implementation guide](http://build.fhir.org/ig/hl7dk/KL-dk-tools/branches/main/index.html) for specific observation profiles before using this general one.

The CommonCareSocialObservation may be linked to the plan, proposal or order that autorized the observation. Use the basedOn attribute to link to CommonCareSocialPlannedIntervention, CommonCareSocialServiceRequest or CommonCareSocialCarePlan.

Notice that the status-attribute is mandatory. For normal use, just set to "final", if data is missing or another problem has occured, follow the FHIR guidance to populate the field correctly.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|observationskode|Klasse som udtrykker, hvad der observeres.|Observation.code.coding|
|observationsresultat|Resultatet af observationen.|Observation.value[x]|
|observationsenhed|Enheden på observationsresultatet, hvis denne er kvantitativ.|Observation.valueQuantity.unit|
|observationssubjekt|Den borger, for hvem der er foretaget en observation.|Observation.subject|
|observationskontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|observationsansvarlig|Den der er ansvarlig for observationen.|Observation.performer|
|observationBaseretPå|Indsats, indsatsforløb eller henvisning som denne observation er del af udmøntningen af|Observation.basedOn|
|observationstid|Tidspunkt for observationen.|Observation.effective|
|observationsstatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialPlannedIntervention-intro.md

# Scope and usage
The KLCommonCareSocialPlannedIntervention may be instatiated whenever an intervention is planned for a citizen in Danish municipalities. One or more planned interventions (ydelser/indsatser) may relate to a CommonCareSocialCarePlan, which are more overall in scope, and is mainly used for FFB sociale indsatser. CommonCareSocialPlannedIntervention is only used for planning ahead, when documentation is related to treatment or care, which is already carried out, use CommonCareSocialCompletedIntervention instead.

When a planned intervention is carried out, the resulting encounters may be linked to the planned intervention through the CarePlan.activity.outcomeReference. Planned interventions are only used for interventions that requires a plan, which is autorized by the municipality. Incomming "orders" e.g. referals from general practitioners for the acute nursing teams, are handled using CommonCareSocialServiceRequest, CommonCareSocialEncounter and CommonCareSocialCompletedIntervention.

CarePlan.activity.detail.code.coding holds the intervention code, which may come from FSIII or FFB.

CarePlan.activity.detail.description is a description of the intervention that should be carried out. It is important to support for FSIII, where it is almost always relevant. It is not used in FFB.

It is important to distiguish correctly between the dates and times stated in the model. CarePlan.created is when the PlannedIntervention was first created, also is it only has draft status at the time. CarePlan.period.start is when the PlannedIntervention was authorized (bevillingstid). The planned end-date is CarePlan.period.end, unless the date has already occured and the status is "completed", then it is the actual end-date.
Sometimes you might be interested in the time where the the first activities were performed in connection to the plannedIntervention, this might be tracked through the earliest enconter referred to in CarePlan.activity.outcomeReference.

CarePlan.activity.outcomeReference generally holds all information about known encounters, where PlannedInterventions have been acted upon. 

CarePlan.status and CarePlan.intent are mandatory in the FHIR CarePlan resource. It is important that the intent is set to "order", when the intervention have been approved by municipality authorities (når bevillingen er sket). The status should, as a minimum distinguish between draft, active, revoked and completed plans. Note that the meaning of active is "ready to be acted upon", so it does not signify that the first activities have occured. CarePlan.activity.detail.status is also mandatory, and has the values not-started, scheduled, in-progress, on-hold, completed, cancelled, stopped, unknown, entered-in-error. The detail-status should at least distinguish between not-started, in-progress and stopped, but all the statuses are relevant in a municipality context. In-progress means that the first activity has occured.

The CarePlan.author, is the organisation with is responsible for the autorisation (myndighed), whereas CarePlan.activity.detail.performer is the organisation that carries out the intervention (leverandør). They might be the same.

CarePlan:extension.FollowUpEncounter makes it possible to explicitely state when follow up on the intervention should occur. This attribute is never used for FFB and is not mandatory for FSIII.

CarePlan.basedOn makes it possible to link any number of PlannedIntervention to a KLCommonCareSocialCarePlan. This is what makes it possible in a FFB context to link interventions (ydelser) to a CarePlan (social indsats).

CarePlan.activity.detail.reasonReference holds the link between conditions and interventions which are mandatory is FSIII. This is not used for FFB. 

CarePlan.activity.detail.goal holds the connection between an intervention and its goals. It is used for intervention-goals, and target meassures (målemetoder) in FSIII.

CarePlan:extension.relevantHistory makes it possible to track earlierssignificant versions of the PlannedIntervention.

CarePlan:extension.municipalityCaseNumber is a relation to the municipality case (Sag). The officialCaseIdentifier uses an official http-adress and uuid to relate to a municipality case (Rammearkitektur: Sag.ID). The municipalitySpecificCaseIdentifier uses a municipality specific ID as a value, and a relates to the organization that owns this caseIdentifier(Rammearkitektur Sag.Sagsnummer og Sag.ejer Sagsaktør).

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|indsatsskode|Udtrykker hvilken klasse indsatsen tilhører.|CarePlan.activity.detail.code.coding|
|handlingsanvisning|Beskrivelse, der knytter sig til en ydelse, som skal udføres|CarePlan.activity.detail.description|
|indsatsoprettelsestid|Tidspunkt for hvornår den planlagte indsats først forekom i journalen|CarePlan.created|
|indsatsbevillingstid|Tidspunktet for hvornår indsatsen er bevilget|CarePlan.period.start|
|indsatsafslutningstid|Tidspunktet for hvornår indsatsen er afsluttet, eller planlægges afsluttet|CarePlan.period.end|
|indsatsstatus|Indikerer om indsatsplanen er klar til at blive handlet på, om dokumentationen repræsentere en fremtidig intention eller er historisk.|CarePlan.status|
|indsatshensigt|Indikerer niveauet af autorisation og hvor langt i planlægningen indsatsen er|CarePlan.intent|
|indsatssubjekt|Den borger som den planlagte indsats retter sig mod|CarePlan.subject|
|indsatsansvarlig|Den organisation som er ansvarlig for beskrivelse, bevilling og opfølgning på den planlagte indsats|CarePlan.author|
|indsatsleverandør|Organisation, der har ansvaret for at udføre den planlagte indsats|CarePlan.activity.detail.performer|
|indsatsPlanlagtOpfølgning|Kontakt, hvor det planlægges at følge op på tilstanden |CarePlan:extension.FollowUpEncounter|
|indsatsDelAfPlan|Planlagt indsatsforløb, som den planlagte indsats er en del af.|CarePlan.basedOn|
|indsatsbegrundelse|Tilstand som indsatsen rettes mod|CarePlan.activity.detail.reasonReference|
|indsatsmål|Mål knyttet til indsatsen|CarePlan.activity.detail.goal|
|indsatsgennemførtAktivitet|Kontakter, der er gennemført som del af den planlagte indsats|CarePlan.activity.outcomeReference|
|indsatsændringshistorie|Tidligere versioner af PlanlagtIndsats, hvor der er sket klinisk relevante ændringer|CarePlan:extension.relevantHistory|
|indsatsAktivitetsstatus|Indikerer om indsatsen er igangsat, eller om den ikke er startet, eller er færdiggjort|CarePlan.activity.detail.status|
|indsatsDokumenteretISag|Kommunalt Sagsnummer. enten officielt uuid eller kommune-specifikt nummer|CarePlan:extension.municipalityCaseNumber|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialServicePerformer-intro.md

### Scope and usage
The CommonCareSocialServicePerformer express a service (tilbud), and who provides it as expressed by FFB, and is used as part of formulating a social intervetion using [CommonCareSocialCarePlan](StructureDefinition-KLCommonCareSocialCarePlan.html).

The service is expressed using the category-attribute, and is bound to service-codes (tilbud) as expressed by FFB. The managingOrganization reference the organization, which is responsible for the delivery of the service.


### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|tilbudstype|Det tilbud som udføreren tilbyder. |CareTeam.category|
|tilbudsudførerOrganisation|Den organisation, der er udførerer på tilbudet.|CareTeam.managingOrganization|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialServiceRequest-intro.md

## Scope and usage
The CommonCareSocialServiceRequest may be instatiated to signify that a request for a service is recieved in a Danish Municipality. A ServiceRequest may either be a request or a referal (Henvendelse/Henvisning), but the use of the model should reflect this.

A referal, where a GP or a hospital has already decided that the service is required should have the sending organisation as the requester, and if no further information and/or authorisation from the municipality is needed, the intent-attribute value is 'order'. This is e.g. true for GP's orders to acute nursing teams, here the ServiceRequest is the documentation that the interventions, that the nurses perfrom, are authorized.

When a citizen or next-of-kin request a service from the municipality, the requester is the municipality practitioner that talks to the citizen or next-of-kin, and who is responsible for its communication to the right parties in the municipality. Here, the intent is often 'propsal', because the PlannedIntervention should be authorized before interventions may be delivered for this scenario.

The subjectConsentToLiasing extension is used in FFB to signify whether the citizen knows about the service request or not. It should not be stated unless it is explicitely known, and only for FFB.

ServiceRequest.reasonCode.text (anledningsårsag) is the text-based description of why an entity have contacted the municipality and asked for help. Sometimes, this text already describes what exactly should be delivered. Sometimes, it describes some concern that the municipality should look further into. As such, the attribute relates directly to the text option for "FSIII Henvendelses-/henvisningsårsag".

SeviceRequest.reasonReference (anledningsbegrundelse) is a FocusCondition that describe the citizen's disease, reduced functioning or problem, which is the background for the ServiceRequest. As such, the attribute relates directly to the condition and diagnosis options for "FSIII Henvendelses-/henvisningsårsag".

ServiceRequest.code.coding and ServiceRequest.orderDetail.coding may be used to explicitely state, what kind of interventions the requester wants for the citizen. That is not to say, that these are the interventions that the citizen is autorized to recieve (unless the intent-attribute is 'order'). ServiceRequest.orderDetail.coding relates to the intervention option for "FSIII Henvendelses-/henvisningsårsag". If more than one type of intervention is required, e.g. both nursing and training, two service requests should be present, with two different ServiceRequest.code.coding.

ServiceRequest.reasonReference also makes it possible to follow the care-pathway. In the case of a re-evaluation of a citizen (re-visitation), it is interesting which follow-up (opfølgning), was the reason for it.

ServiceRequest:extension.municipalityCaseNumber is a relation to the municipality case (Sag). The officialCaseIdentifier uses an official http-adress and uuid to relate to a municipality case (Rammearkitektur: Sag.ID). The municipalitySpecificCaseIdentifier uses a municipality specific ID as a value, and a relates to the organization that owns this caseIdentifier(Rammearkitektur Sag.Sagsnummer og Sag.ejer Sagsaktør).

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|anledningAnsvarlig|Den som har ansvar for henvendelsen/henvisningen|ServiceRequest.requester|
|anledningFra|Klasse der angiver, hvilken instans, der har henvist eller har henvendt sig.|ServiceRequest.extension: RequesterType|
|anledningsårsag|Beskrivelse af årsagen til henvisningen/henvendelsen|ServiceRequest.reasonCode.text|
|anledningsstatus|Klasse der udtrykker status for henvendelsen|ServiceRequest.status|
|anledningsHensigt|Klasse der udtrykker hensigten med henvendelsen|ServiceRequest.intent|
|anledningsIndsats|Klasse der udtrykker, hvilken type kommunal indsats/ydelse der anmodes om.|ServiceRequest.code.coding|
|anledningsAnmodetIndsats|Klasse der udtrykker, hvilken kommunal indsats/ydelse der anmodes om.|Servicerequest.orderDetail.coding|
|anledningsSubjekt|Den borger som henvisningen/henvendelsen vedrører|ServiceRequest.subject|
|anledningstid|Det tidspunkt hvor henvisning/henvendelsen er forfattet af den ansvarlige|ServiceRequest.authoredOn|
|anledningBorgerIndforståetMed|Klasse der angiver om borger er indforstået med henvendelsen|SeviceRequest.extension: SubjectConsentToLiaising|
|anledningsbegrundelse|Den borgertilstand, der ligger til grund for henvendelsen/henvisningen. |SeviceRequest.reasonReference|
|anledningsårsagsreference|Et klassificeret opfølgningsresultat, der er baggrund for at borger revisiteres.|ServiceRequest.reasonReference|
|anledningDokumenteretISag|Kommunalt sagsnummer på den sag, som anledningen vedrører. Enten officielt uuid eller kommune-specifikt nummer|ServiceRequest:extension.municipalityCaseNumber|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCareSocialSeverity-intro.md

### Scope and usage
The CommonCareSocialSeverity may be instatiated for FSIII and FFB objects, where a severity is recorded as a functional ablitity level. Not that it does not make sense to  The observation.code is fixed to the KL-code 66959f77-6e2a-4574-8423-3ff097f8b9fa "funktionsevneniveau". Note that it does not make sense to record the Severity, without it being reference by another resource that gives the context of the score i.e. which condition, area or goal is it related to.

The valueCodeableConcept may only be valid severity codes as expressed by FFB and FSIII.


### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|sværhedsgradskode|Klasse der udtrykker, at der er tale om en sværhedsgrad. |Observation.code|
|sværhedsgradsresultat|Klasse, der udtrykker sværhedsgraden.|Observation.CodableConceptvalue|
|sværhedsgradssubjekt|Borger, der er genstand for vurdering af sværhedsgrad.|Observation.subject|
|sværhedsgradskontakt|Kontakt hvori sværhedsgraden vurderes.|Observation.encounter|
|sværhedsgradsansvarlig|Fagperson der er ansvarlig for vurderingen af sværhedsgrad.|Observation.performer|
|sværhedsgradstiddstid|Det tidspunkt hvor oplysningen er fremkommet, vurderet eller dokumenteret.|Observation.effective.datetime|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonCitizen-intro.md

### Scope and usage
Note that this profile has been taken directly from dk-core
Additional requirements or constraints may exist in Danish municipalities, but has not been explicitely stated in this IG.

Note that the example-instances, do not have CPR-identifier. For example-patients with CPR-identifiers MedComs approved list of example-patients have to be used, and the examples in this implementation guide is not matched to the MedCom list. See dk-core for example patients/citizens with CPR identifiers.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter, der er defineret i den fælleskommunale rammearkitektur og FHIR profilen. Alle rammearkitektur-attributter er ikke medtaget, kun de der umiddelbart er relevante for interoperabilitets use cases. Tabellen definerer kort den enkelte attribut på dansk, og specificerer hvilke af FHIR-profilens atributter, der skal bruges til specifikation af indholdet.

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|Personnummer.Nummer|Entydig Identifikation af en person i CPR. Indeholder information om fødselsdato, køn og århunderede.|Patient.identifier(cpr-slice).value|
|identifikation|Entydig Identifikation af en person (definition valgt anderledes end rammearkitektur)|Patient.identifier.value|
|patientIDsystem(ikke i rammearkitektur)|Angivelse af udstederen af personnummer eller andet patientid, for Personnummer.Nummer er systemet urn:oid:1.2.208.176.1.2|Patient.identifier(cpr-slice).system|
|Person.fødselsdato|Personens fødselsdato.|Patient.birthDate|
|Person.køn|Personens køn.|Patient.gender|
|Personnavn.Efternavn|Personens efternavn.(definition valgt anderledes end rammearkitektur)|Patient.name.family|
|Personnavn.Fornavne|Persons fornavne.|Patient.name.given|
|Personnavn.Mellemnavn|Personens mellemnavne.|Patient.name.given|
|Civilstand.civilstandstype|Personens civilstand som specificeret af CPR. Læg mærke til at det deles ud over flere attributter i FHIR |Patient.maritalStatus/Patient.deceased[x]|
|SimpelAdresse|Simpel adresse er CPR’s definition på ustrukturerede klarskrifts adresser. Ingen felter er krævede, og der er ikke nogen krav til specifikt indhold i de forskellige felter.|Patient.adress.line|
|CPRAdresse.CPRKommunekode|Kode for en kommune.|Patient.adress:extension.dk-core-municipalityCodes|
|CPRAdresse.Postnummer|Postvæsenets landsdækkende postnummerkode. Postnummer er et obligatorisk vejdistrikt.|Patient.address.postalCode|

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonOrganization-intro.md

### Scope and usage
Note that this profile should been taken directly from dk-core, as soon as it is ready.
Additional requirements or constraints may exist in Danish municipalities, but has not been explicitely stated in this IG.

### Conversions between Danish information model and FHIR-profile
Organization svarer til en type af Aktør i den fælleskommunale rammearkitektur.

---

File: repos/hl7dk_SLASH_KL-dk/input/pagecontent/StructureDefinition-KLCommonPractitioner-intro.md

### Scope and usage
Note that this profile should been taken directly from dk-core, as soon as it is ready.
Additional requirements or constraints may exist in Danish municipalities, but has not been explicitely stated in this IG.

### Conversions between Danish information model and FHIR-profile
Practitioner er en type af Aktør i den fælleskommunale rammearkitektur.

---

