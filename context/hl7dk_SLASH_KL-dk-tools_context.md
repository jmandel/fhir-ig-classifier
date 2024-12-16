File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsAliases.fsh

Alias:          SCTConditionValueset = http://hl7.org/fhir/ValueSet/condition-code
Alias:          SCT = http://snomed.info/sct
Alias:          SKS-D = urn:oid:1.2.208.176.2.4.12
Alias:          ICPC2DK = https://kiap.dk/kiap/koder/icpckoder
Alias:          SOR = urn:oid:1.2.208.176.1
Alias:          KLCommonCareSocialCodeSystem = http://kl.dk/fhir/common/caresocial/CodeSystem/KLCommonCareSocialCodes         
Alias:          UCUM = http://unitsofmeasure.org
Alias:          KLToolsCodeSystem = http://fhir.kl.dk/ffinst/CodeSystem/KLToolsCodes
Alias:          KLCommonCareSocialCodes = http://kl.dk/fhir/common/caresocial/CodeSystem/KLCommonCareSocialCodes
Alias:          SCTConditionCodes = http://hl7.org/fhir/ValueSet/condition-code
Alias:          LOINC = http://loinc.org
Alias:          UCUM = http://unitsofmeasure.org
Alias:          KLCommonproprietaryObservation = http://kl.dk/fhir/common/caresocial/CodeSystem/KLCommonproprietary
Alias:          ExtMinValue = http://hl7.org/fhir/StructureDefinition/minValue
Alias:          ExtMaxValue = http://hl7.org/fhir/StructureDefinition/maxValue
Alias:          FSIII = urn:oid:1.2.208.176.2.21
Alias:          FFB = urn:oid:1.2.208.176.2.22
Alias:          NPU = urn:oid:1.2.208.176.2.1

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCare6minwalk.fsh

Profile: KLToolsCare6minwalk
Parent: KLCommonCareSocialObservation
Title: "6 min walk"
Description: "6 minutes walking test, as performed in Danish municipalities"
* code.coding = SCT#1144649008 //|Six minute walk test distance (observable entity)|
* value[x] only Quantity
* valueQuantity 1..1
* valueQuantity.system = UCUM
* valueQuantity.code = #m
* referenceRange.low.value = 0
* method 1..1
* method.coding ^slicing.discriminator.type = #value
* method.coding ^slicing.discriminator.path = "system"
* method.coding ^slicing.rules = #open
* method.coding contains
   KLCode 1..1 and SCTCode 0..1
* method.coding[KLCode] from KLtechniquesCodes (required)
* method.coding[KLCode].system = KLToolsCodeSystem
* method.coding[SCTCode] from TechniqesSCTCodes (required)
* method.coding[SCTCode].system = SCT

* code ^short = "[DK] 6MinutterGangKode"
* valueQuantity.value ^short = "[DK] 6MinutterGangResultat"
* valueQuantity.system ^short = "[DK] 6MinutterGangEnhed"
* valueQuantity.code ^short = "[DK] 6MinutterGangEnhed"
* subject ^short = "[DK] 6MinutterGangSubjekt"
* encounter ^short = "[DK] 6MinutterGangKontakt"
* performer ^short = "[DK] 6MinutterGangAnsvarlig"
* method ^short = "[DK] 6MinutterGangprocedure"
* effectiveDateTime ^short = "[DK] 6MinutterGangTid"
* note.text ^short = "[DK] 6MinutterGangbemærkning"

Instance: Helene6minwalk
InstanceOf: KLToolsCare6minwalk
Usage: #example
Title: "Helene6minwalk"
Description: "Helenes 6minutters gangtest"
* subject = Reference(Helene)
* code.coding = SCT#1144649008
* valueQuantity.value = 350
* valueQuantity.system = UCUM
* valueQuantity.code = #m
* method.coding[KLCode] = KLToolsCodes#17772b27-bc9d-4d62-9515-d268a98a3a27 //afvigelse i borgers udførelse
* method.coding[SCTCode] = SCT#761996005 // |Estimation technique (qualifier value)|
* note.text = "Borger støttede sig kortvarrigt til møbler to gange i løbet af testen. Hun fortsatte på min opfordring, så snart hun havde fået balancen"
* status = #final

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareBloodPressure.fsh

Profile: KLToolsCareBloodPressure
Parent: http://hl7.org/fhir/StructureDefinition/bp
Title: "Blood pressure"
Description: "Profile of HL7 Blood pressure profile used in Danish Municipalities"

* code.coding contains snomedSlice 1..1
* code.coding[snomedSlice].system = SCT
* code.coding[snomedSlice].code = #75367002

//SNOMED on FHIR recommendation

* component[SystolicBP].code.coding contains snomedSBPSlice 1..1
* component[SystolicBP].code.coding[snomedSBPSlice] from SystolicBloodPressureSCTObservables (extensible)
* component[SystolicBP].code.coding[snomedSBPSlice].system = SCT

* component[DiastolicBP].code.coding contains snomedDBPSlice 1..1
* component[DiastolicBP].code.coding[snomedDBPSlice] from DiastolicBloodPressureSCTObservables (extensible)
* component[DiastolicBP].code.coding[snomedDBPSlice].system = SCT

//associeret tilstand, procedure fulgt/teknik
* extension contains AssociatedConditions named associatedConditions 1..1
* extension[associatedConditions].valueCodeableConcept = SCT#106063007 // |fund vedr. kardiovaskulære system||
* method 1..1
* method.coding ^slicing.discriminator.type = #value
* method.coding ^slicing.discriminator.path = "system"
* method.coding ^slicing.rules = #open
* method.coding contains
   KLCode 1..1 and SCTCode 0..1
* method.coding[KLCode] from KLtechniquesCodes (required)
* method.coding[KLCode].system = KLToolsCodeSystem
* method.coding[SCTCode] from TechniqesSCTCodes (required)
* method.coding[SCTCode].system = SCT

* code ^short = "[DK] BlodtryksKode"
* component[SystolicBP].code ^short = "[DK] SystoliskBlodtrykKode"
* component[SystolicBP].value[x].value ^short = "[DK] SystoliskBlodtrykResultat"
* component[SystolicBP].value[x].system ^short = "[DK] SystoliskBlodtrykEnhed"
* component[SystolicBP].value[x].code ^short = "[DK] SystoliskBlodtrykEnhed"
* component[DiastolicBP].code ^short = "[DK] DiastoliskBlodtrykKode"
* component[DiastolicBP].value[x].value ^short = "[DK] DiastoliskBlodtrykResultat"
* component[DiastolicBP].value[x].system ^short = "[DK] DiastoliskBlodtrykEnhed"
* component[DiastolicBP].value[x].code ^short = "[DK] DiastoliskBlodtrykEnhed"
* subject ^short = "[DK] BlodtryksSubjekt"
* encounter ^short = "[DK] BlodtryksKontakt"
* performer ^short = "[DK] BlodtryksAnsvarlig"
* method ^short = "[DK] BlodtryksProcedure"
* effectiveDateTime ^short = "[DK] BlodtryksTid"
* extension[associatedConditions] ^short = "[DK] BlodtryksAssocieretTilstand"
* note.text ^short = "[DK] BlodtryksBemærkning"
* status ^short = "[DK] BlodtryksStatus"

Instance: HeleneBloodPressure
InstanceOf: KLToolsCareBloodPressure
Usage: #example
Title: "HeleneBloodPressure"
Description: "Helenes blodtryk"
* subject = Reference(Helene)
* performer = Reference(AbrahamFraAkutSygeplejen)
* code.coding[BPCode] = LOINC#85354-9
* code.coding[snomedSlice] = SCT#75367002
* component[SystolicBP].code.coding[snomedSBPSlice] = SCT#407554009
* component[SystolicBP].code.coding[SBPCode]	= LOINC#8480-6
* component[SystolicBP].valueQuantity.value = 128
* component[SystolicBP].valueQuantity.unit = "mmHg"
* component[SystolicBP].valueQuantity.system = UCUM
* component[SystolicBP].valueQuantity.code = #mm[Hg]
* component[DiastolicBP].code.coding[snomedDBPSlice] = SCT#407555005
* component[DiastolicBP].code.coding[DBPCode] = LOINC#8462-4
* component[DiastolicBP].valueQuantity.value = 80
* component[DiastolicBP].valueQuantity.unit = "mmHg"
* component[DiastolicBP].valueQuantity.system = UCUM
* component[DiastolicBP].valueQuantity.code = #mm[Hg]
* method.coding[KLCode] = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* method.coding[SCTCode] = SCT#272391002 //|Measurement technique (qualifier value)|
* status = #final
* effectiveDateTime = 2019-01-09T17:45:00.000Z

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareBodyHeight.fsh

Profile: KLToolsCareBodyHeight
Parent: http://hl7.org/fhir/StructureDefinition/bodyheight
Title: "Body height"
Description: "Body height profile used in Danish Municipalities, derived from HL7 standard profile"
//SNOMED on FHIR recommendation
* code.coding contains snomedSlice 1..1
* code.coding[snomedSlice] from BodyheightSCTobservables (extensible)
* code.coding[snomedSlice].system = SCT

//KL extensions "kilde", associeret tilstand, procedure fulgt/teknik
* method 1..1
* method.coding ^slicing.discriminator.type = #value
* method.coding ^slicing.discriminator.path = "system"
* method.coding ^slicing.rules = #open
* method.coding contains
   KLCode 1..1 and SCTCode 0..1
* method.coding[KLCode] from KLtechniquesCodes (required)
* method.coding[KLCode].system = KLToolsCodeSystem
* method.coding[SCTCode] from TechniqesSCTCodes (required)
* method.coding[SCTCode].system = SCT

* code ^short = "[DK] HøjdeKode"
* valueQuantity.value ^short = "[DK] HøjdeResultat"
* valueQuantity.code ^short = "[DK] HøjdeEnhed"
* valueQuantity.system ^short = "[DK] HøjdeEnhed"
* subject ^short = "[DK] Højdesubjekt"
* encounter ^short = "[DK] Højdekontakt"
* performer ^short = "[DK] Højdeansvarlig"
* method ^short = "[DK] HøjdeProcedure"
* effectiveDateTime ^short = "[DK] Højdetid"
* note.text ^short = "[DK] HøjdeBemærkning"
* status ^short = "[DK] HøjdeStatus"

Instance: HeleneBodyHeight
InstanceOf: KLToolsCareBodyHeight
Usage: #example
Title: "HeleneBodyHeight"
Description: "Helenes kropshøjde"
* subject = Reference(Helene)
* code.coding[snomedSlice] = SCT#165263003
* code.coding[BodyHeightCode] = LOINC#8302-2
* valueQuantity.value = 169
* valueQuantity.unit = "cm"
* valueQuantity.system = UCUM
* valueQuantity.code = #cm
* method.coding[KLCode] = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* method.coding[SCTCode] = SCT#272391002 //|Measurement technique (qualifier value)|
* status = #final
* effectiveDateTime = 2019-01-09T17:45:00.000Z

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareBodyTemperature.fsh

Profile: KLToolsCareBodyTemperature
Parent: http://hl7.org/fhir/StructureDefinition/bodytemp
Title: "Body temperature"
Description: "Profile of HL7 body temeprature profile used in Danish Municipalities"
//SNOMED on FHIR recommendation
* code.coding contains snomedSlice 1..1
* code.coding[snomedSlice] from BodyTemperatureSCTObservables (extensible)
* code.coding[snomedSlice].system = SCT

// procedure fulgt/teknik
* method 1..1
* method.coding ^slicing.discriminator.type = #value
* method.coding ^slicing.discriminator.path = "system"
* method.coding ^slicing.rules = #open
* method.coding contains
   KLCode 1..1 and SCTCode 0..1
* method.coding[KLCode] from KLtechniquesCodes (required)
* method.coding[KLCode].system = KLToolsCodeSystem
* method.coding[SCTCode] from TechniqesSCTCodes (required)
* method.coding[SCTCode].system = SCT

* code ^short = "[DK] TemperaturKode"
* valueQuantity.value ^short = "[DK] TemperaturResultat"
* valueQuantity.code ^short = "[DK] TemperaturEnhed"
* valueQuantity.system ^short = "[DK] TemperaturEnhed"
* subject ^short = "[DK] Temperatursubjekt"
* encounter ^short = "[DK] Temperaturkontakt"
* performer ^short = "[DK] Temperaturansvarlig"
* method ^short = "[DK] TemperaturProcedure"
* effectiveDateTime ^short = "[DK] Temperaturtid"
* note.text ^short = "[DK] TemperaturBemærkning"
* status ^short = "[DK] TemperaturStatus"

Instance: HeleneBodyTemperature
InstanceOf: KLToolsCareBodyTemperature
Usage: #example
Title: "HeleneBodyTemperature"
Description: "Helenes temperatur"
* subject = Reference(Helene)
* code.coding[snomedSlice] = SCT#276885007
* code.coding[BodyTempCode] = LOINC#8310-5
* valueQuantity.value = 38
* valueQuantity.unit = "grader celcius"
* valueQuantity.system = UCUM
* valueQuantity.code = #Cel
* method.coding[KLCode] = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* method.coding[SCTCode] = SCT#272391002 //|Measurement technique (qualifier value)|
* status = #final
* effectiveDateTime = 2019-01-09T17:45:00.000Z

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareBodyWeight.fsh

Profile: KLToolsCareBodyWeight
Parent: http://hl7.org/fhir/StructureDefinition/bodyweight
Title: "Body weight"
Description: "Profile of HL7 body weight profile used in Danish Municipalities"
//SNOMED on FHIR recommendation
* code.coding contains snomedSlice 1..1
* code.coding[snomedSlice] from BodyweightSCTobservables (extensible)
* code.coding[snomedSlice].system = SCT

//KL extensions "kilde", associeret tilstand, procedure fulgt/teknik
* extension contains AssociatedConditions named associatedConditions 1..1
* extension[associatedConditions].valueCodeableConcept = SCT#107647005 //|Weight finding (finding)|
* method 1..1
* method.coding ^slicing.discriminator.type = #value
* method.coding ^slicing.discriminator.path = "system"
* method.coding ^slicing.rules = #open
* method.coding contains
   KLCode 1..1 and SCTCode 0..1
* method.coding[KLCode] from KLtechniquesCodes (required)
* method.coding[KLCode].system = KLToolsCodeSystem
* method.coding[SCTCode] from TechniqesSCTCodes (required)
* method.coding[SCTCode].system = SCT

* code ^short = "[DK] VægtKode"
* valueQuantity.value ^short = "[DK] VægtResultat"
* valueQuantity.code ^short = "[DK] VægtEnhed"
* valueQuantity.system ^short = "[DK] VægtEnhed"
* subject ^short = "[DK] Vægtsubjekt"
* encounter ^short = "[DK] Vægtkontakt"
* performer ^short = "[DK] Vægtansvarlig"
* method ^short = "[DK] VægtProcedure"
* effectiveDateTime ^short = "[DK] Vægttid"
* extension[associatedConditions] ^short = "[DK] VægtAssocieretTilstand"
* note.text ^short = "[DK] VægtBemærkning"
* status ^short = "[DK] VægtStatus"

Instance: HeleneBodyWeight
InstanceOf: KLToolsCareBodyWeight
Usage: #example
Title: "HeleneBodyWeight"
Description: "Helenes vægt"
* subject = Reference(Helene)
* code.coding[snomedSlice] = SCT#276885007
* code.coding[BodyWeightCode] = LOINC#29463-7
* valueQuantity.value = 80
* valueQuantity.unit = "kg"
* valueQuantity.system = UCUM
* valueQuantity.code = #kg
* method.coding[KLCode] = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* method.coding[SCTCode] = SCT#272391002 //|Measurement technique (qualifier value)|
* status = #final
* effectiveDateTime = 2019-01-09T17:45:00.000Z

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareConsciousness.fsh

Profile: KLToolsCareConsciousness
Parent: KLCommonCareSocialObservation
Title: "Consciousness assessment"
Description: "Level of consciousness assessment as defined by TOBS, as performed in Danish municipalities. TOBS is Danish for early disease detection"

* code.coding = SCT#444714004 //|Assessment of consciousness level (procedure)|
* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1

* valueCodeableConcept.coding[KLToolsCode] from ConsciousnessCodes (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem


* valueCodeableConcept.coding[SCTCode] from ConsciousnessSCTFindings
* valueCodeableConcept.coding[SCTCode].system = SCT


* extension contains AssociatedConditions named associatedConditions 1..1
* extension[associatedConditions].valueCodeableConcept = SCT#106167005 //fund vedr. bevidsthed

* method 1..1
* method.coding from KLtechniquesCodes (required)

* code ^short = "[DK] BevidsthedKode"
* valueCodeableConcept ^short = "[DK] BevidsthedResultat"
* subject ^short = "[DK] BevidsthedSubjekt"
* encounter ^short = "[DK] BevidsthedKontakt"
* performer ^short = "[DK] BevidsthedAnsvarlig"
* method ^short = "[DK] BevidsthedProcedure"
* effectiveDateTime ^short = "[DK] BevidsthedTid"
* extension[associatedConditions] ^short = "[DK] BevidsthedAssocieretTilstand"
* note.text ^short = "[DK] BevidsthedBemærkning"
* status ^short = "[DK] BevidsthedStatus"

Instance: HeleneConsciousness
InstanceOf: KLToolsCareConsciousness
Usage: #example
Title: "HeleneBevidsthed"
Description: "Helene bevidsthedsniveau"
* subject = Reference(Helene)
* code.coding = SCT#444714004 //|Assessment of consciousness level (procedure)|
* valueCodeableConcept.coding[KLToolsCode].code = KLToolsCodes#0000e850-a51d-4867-a901-dd4c6a2a46a1 //Reagerer kun på smerte (2)
* valueCodeableConcept.coding[SCTCode].code = SCT#450847001 //|Responds to pain (finding)|
* method.coding = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* status = #final

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareEQ5D.fsh

Instance: KLToolsCareEQ5D
InstanceOf: KLToolsQuestionnaire
Usage: #definition
Title: "EQ-5D questionnaire"
* status = #draft
* publisher = "Kommunernes Landsforening"
* description = "Ikke-sygdomsspecifikt spørgeskema til at vurdere helbredsrelateret livskvalitet. Tidsrammen for borgers vurdering er borgers aktuelle tilstand (i dag)."
* name = "KLToolsCareEQ5D"
* code = SCT#1144655003 //|EuroQol five dimension three level index value (observable entity)|
* item[0].type = #choice
* item[0].text = "Bevægelighed"
* item[0].linkId = "mobility"
* item[0].answerValueSet = "http://fhir.kl.dk/ffinst/ValueSet/EQ5Dmobility"
* item[0].code =  SCT#301438001 //|Ability to mobilize (observable entity)|
* item[0].repeats = false

* item[1].type = #choice
* item[1].text = "Personlig pleje"
* item[1].linkId = "hygiene"
* item[1].answerValueSet = "http://fhir.kl.dk/ffinst/ValueSet/EQ5Dhygiene"
* item[1].code =  SCT#284773001 //|Ability to perform personal care activity (observable entity)|
* item[1].repeats = false

* item[2].type = #choice
* item[2].text = "Sædvanlige aktiviteter (fx arbejde, studie, husarbejde, familie- eller fritidsaktiviteter)"
* item[2].linkId = "activity"
* item[2].answerValueSet = "http://fhir.kl.dk/ffinst/ValueSet/EQ5Dactivity"
* item[2].code =  SCT#284545001 //|Ability to perform activities of everyday life (observable entity)|
* item[2].repeats = false

* item[3].type = #choice
* item[3].text = "Smerter/ubehag"
* item[3].linkId = "pain"
* item[3].answerValueSet = "http://fhir.kl.dk/ffinst/ValueSet/EQ5Dpain"
* item[3].code =  SCT#364624006 //|Pain / sensation observable (observable entity)|
* item[3].repeats = false

* item[4].type = #choice
* item[4].text = "Angst/Depression"
* item[4].linkId = "anxiety"
* item[4].answerValueSet = "http://fhir.kl.dk/ffinst/ValueSet/EQ5Danxiety"
* item[4].code =  SCT#285854004 //|Emotion (observable entity)|
* item[4].repeats = false

* item[5].type = #integer
* item[5].text = "EQ-VAS-score"
* item[5].linkId = "vas"
* item[5].code =  SCT#736535009 //|EuroQol visual analogue score (observable entity)|
* item[5].repeats = false
* item[5].extension[maxValue].valueInteger = 100
* item[5].extension[minValue].valueInteger = 0

* item[6].type = #text
* item[6].text = "Kommentar til EQ-5D"
* item[6].linkId = "eq5dcomment"
* item[6].repeats = false

Instance: EQ5DAnswerHelene
InstanceOf: KLToolsQuestionnaireResponse
Usage: #example
Title: "EQ5DAnswersHelene"
Description: "EQ5D BesvarelseHelene"
* questionnaire = "http://fhir.kl.dk/ffinst/Questionnaire/KLToolsCareEQ5D"
* status = #completed
* subject = Reference(Helene)
* author = Reference(AbrahamFraAkutSygeplejen)
* source = Reference(Helene)
* extension[techniqe].valueCodeableConcept = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja "Ingen problemer med test-setup og borgers udførelse"
* extension[findingInformer].valueCodeableConcept = KLToolsCodes#a3d30bf2-4a3c-4c49-9001-5363ae11681c "Borger"
//Hertil fejl OBS!
* item[0].linkId = "mobility"
* item[0].answer.valueCoding = KLToolsCodes#95be0ff6-ab05-4918-be8e-6dbb820366bb "Jeg har nogle problemer med at gå omkring (2)"

* item[1].linkId = "hygiene"
* item[1].answer.valueCoding = KLToolsCodes#0f33b1ee-a26b-47b0-ab99-0a67494656e3 "Jeg har ingen problemer med min personlige pleje (1)"

* item[2].linkId = "activity"
* item[2].answer.valueCoding = KLToolsCodes#815b8b40-e2f6-4f55-a328-17c886e41490 "Jeg har ingen problemer med at udføre mine sædvanlige aktiviteter (1)"

* item[3].linkId = "pain"
* item[3].answer.valueCoding = KLToolsCodes#3616b50a-440a-4268-9c8a-660123526540 "Jeg har moderate smerter eller ubehag (2)"

* item[4].linkId = "anxiety"
* item[4].answer.valueCoding = KLToolsCodes#841deb88-b0b1-4f3b-9101-98da06870088 "Jeg er ikke ængstelig eller deprimeret (1)"

* item[5].linkId = "vas"
* item[5].answer.valueInteger = 70

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareEQ5DObservation.fsh

Profile: KLToolsCareEQ5DObservationMobility
Parent: KLCommonCareSocialObservation
Title: "EQ-5D mobility"
Description: "EQ5D mobility observation, as performed in Danish municipalities"
* code = SCT#301438001 //|Ability to mobilize (observable entity)|
 
* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1

* valueCodeableConcept.coding[KLToolsCode] from EQ5Dmobility (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem


* valueCodeableConcept.coding[SCTCode] from EQ5DSCTfindingsMobility
* valueCodeableConcept.coding[SCTCode].system = SCT

* extension contains FindingInformer named findingInformer 0..1 and AssociatedConditions named associatedConditions 0..*
* extension[associatedConditions].valueCodeableConcept = SCT#364832000 //Fund vedr. evne til at udføre grovmotoriske funktioner

* derivedFrom 1..1
* derivedFrom only Reference(KLToolsQuestionnaireResponse)


Profile: KLToolsCareEQ5DObservationHygiene
Parent: KLCommonCareSocialObservation
Title: "EQ-5D hygiene"
Description: "EQ5D Hygiene observation, as performed in Danish municipalities"
* code = SCT#284773001 //|Ability to perform personal care activity (observable entity)|
 
* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1

* valueCodeableConcept.coding[KLToolsCode] from EQ5Dhygiene (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem


* valueCodeableConcept.coding[SCTCode] from EQ5DSCTfindingsHygiene
* valueCodeableConcept.coding[SCTCode].system = SCT
* derivedFrom 1..1
* derivedFrom only Reference(KLToolsQuestionnaireResponse)

* extension contains FindingInformer named findingInformer 0..1 and AssociatedConditions named associatedConditions 0..*
* extension[associatedConditions].valueCodeableConcept = SCT#365179009 //Fund vedr. evne til at udføre aktiviteter i forbindelse med personlig hygiejne




Profile: KLToolsCareEQ5DObservationActivity
Parent: KLCommonCareSocialObservation
Title: "EQ-5D activity"
Description: "EQ-5D Activity observation, as performed in Danish municipalities"
* code = SCT#284545001 //|Ability to perform activities of everyday life (observable entity)|
 
* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1

* valueCodeableConcept.coding[KLToolsCode] from EQ5Dactivity (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem


* valueCodeableConcept.coding[SCTCode] from EQ5DSCTfindingsActivity
* valueCodeableConcept.coding[SCTCode].system = SCT
* derivedFrom 1..1
* derivedFrom only Reference(KLToolsQuestionnaireResponse)

* extension contains FindingInformer named findingInformer 0..1 and AssociatedConditions named associatedConditions 0..*
* extension[associatedConditions].valueCodeableConcept = SCT#118233009 //Fund vedr. almindelig daglig livsførelse

Profile: KLToolsCareEQ5DObservationPain
Parent: KLCommonCareSocialObservation
Title: "EQ-5D pain"
Description: "EQ5D Pain observation, as performed in Danish municipalities"
* code = SCT#364624006 //|Pain / sensation observable (observable entity)|
 
* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1

* valueCodeableConcept.coding[KLToolsCode] from EQ5Dpain (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem


* valueCodeableConcept.coding[SCTCode] from EQ5DSCTfindingsPain
* valueCodeableConcept.coding[SCTCode].system = SCT
* derivedFrom 1..1
* derivedFrom only Reference(KLToolsQuestionnaireResponse)

* extension contains FindingInformer named findingInformer 0..1 and AssociatedConditions named associatedConditions 0..*
* extension[associatedConditions].valueCodeableConcept = SCT#106147001 // fund vedr. det sensoriske nervesystem

Profile: KLToolsCareEQ5DObservationAnxiety
Parent: KLCommonCareSocialObservation
Title: "EQ-5D anxiety"
Description: "EQ5D Anxiety observation, as performed in Danish municipalities"
* code = SCT#285854004 //|Emotion (observable entity)|
 
* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1

* valueCodeableConcept.coding[KLToolsCode] from EQ5Danxiety (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem


* valueCodeableConcept.coding[SCTCode] from EQ5DSCTfindingsAnxiety
* valueCodeableConcept.coding[SCTCode].system = SCT
* derivedFrom 1..1
* derivedFrom only Reference(KLToolsQuestionnaireResponse)

* extension contains FindingInformer named findingInformer 0..1 and AssociatedConditions named associatedConditions 0..*
* extension[associatedConditions].valueCodeableConcept = SCT#106126000 //|Emotional state finding (finding)|

Instance: HeleneEQ5Dmobility
InstanceOf: KLToolsCareEQ5DObservationMobility
Usage: #example
Title: "HeleneEQ5D-mobilitet"
Description: "Observation af Helenes mobilitet, som udtrykt i EQ5D spørgeskema"
* code = SCT#301438001 "Ability to mobilize"
* subject = Reference(Helene)
* performer = Reference(AbrahamFraAkutSygeplejen)
* valueCodeableConcept.coding[SCTCode] = SCT#719232003 "Difficulty walking"
* valueCodeableConcept.coding[KLToolsCode] = KLToolsCodes#95be0ff6-ab05-4918-be8e-6dbb820366bb "Jeg har nogle problemer med at gå omkring (2)"
* status = #final
* method = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja "Ingen problemer med test-setup og borgers udførelse"
* derivedFrom = Reference(EQ5DAnswerHelene)
* extension[associatedConditions].valueCodeableConcept = SCT#364832000 //Fund vedr. evne til at udføre grovmotoriske funktioner



---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareHeartRate.fsh

Profile: KLToolsCareHeartRate
Parent: http://hl7.org/fhir/StructureDefinition/heartrate
Title: "Heart Rate"
Description: "Heart rate profile used in Danish Municipalities, derived from HL7 heart rate profile"
//SNOMED on FHIR recommendation
* code.coding contains snomedSlice 1..1
* code.coding[snomedSlice] from HeartRateSCTobservables (extensible)
* code.coding[snomedSlice].system = SCT

//KL extensions "kilde", associeret tilstand, procedure fulgt/teknik
* extension contains AssociatedConditions named associatedConditions 1..1
* extension[associatedConditions].valueCodeableConcept = SCT#106063007 //|Cardiovascular finding (finding)|
* method 1..1
* method.coding ^slicing.discriminator.type = #value
* method.coding ^slicing.discriminator.path = "system"
* method.coding ^slicing.rules = #open
* method.coding contains
   KLCode 1..1 and SCTCode 0..1
* method.coding[KLCode] from KLtechniquesCodes (required)
* method.coding[KLCode].system = KLToolsCodeSystem
* method.coding[SCTCode] from TechniqesSCTCodes (required)
* method.coding[SCTCode].system = SCT

* code ^short = "[DK] HjertefrekvensKode"
* valueQuantity.value ^short = "[DK] HjertefrekvensResultat"
* valueQuantity.code ^short = "[DK] HjertefrekvensEnhed"
* valueQuantity.system ^short = "[DK] HjertefrekvensEnhed"
* subject ^short = "[DK] HjertefrekvensSubjekt"
* encounter ^short = "[DK] HjertefrekvensKontakt"
* performer ^short = "[DK] HjertefrekvensAnsvarlig"
* method ^short = "[DK] HjertefrekvensProcedure"
* effectiveDateTime ^short = "[DK] HjertefrekvensTid"
* extension[associatedConditions] ^short = "[DK] HjertefrekvensAssocieretTilstand"
* note.text ^short = "[DK] HjertefrekvensBemærkning"
* status ^short = "[DK] HjertefrekvensStatus"

Instance: HeleneHeartRate
InstanceOf: KLToolsCareHeartRate
Usage: #example
Title: "HeleneHeartRate"
Description: "Helenes puls"
* subject = Reference(Helene)
* code.coding[snomedSlice] = SCT#364075005	//Heart rate
* code.coding[HeartRateCode] = LOINC#8867-4
* valueQuantity.value = 88
* valueQuantity.unit = "slag/minut"
* valueQuantity.system = UCUM
* valueQuantity.code = #/min
* method.coding[KLCode] = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* method.coding[SCTCode] = SCT#272391002 //|Measurement technique (qualifier value)|
* status = #final
* effectiveDateTime = 2019-01-09T17:45:00.000Z

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareOxygenSaturation.fsh

Profile: KLToolsCareOxygenSaturation
Parent: http://hl7.org/fhir/StructureDefinition/oxygensat
Title: "Oxygen saturation"
Description: "Oxygen saturation profile as used in Danish Municipalities, derived from HL7 oxygen saturation profile"
//SNOMED on FHIR recommendation
* code.coding contains snomedSlice 1..1
* code.coding[snomedSlice] from OxygenSaturationSCTobservables (extensible)
* code.coding[snomedSlice].system = SCT

//KL extensions "kilde", associeret tilstand, procedure fulgt/teknik
* extension contains AssociatedConditions named associatedConditions 1..*
* extension[associatedConditions].valueCodeableConcept = SCT#106048009 //  fund vedr. respirationssystemet |
* method 1..1
* method.coding ^slicing.discriminator.type = #value
* method.coding ^slicing.discriminator.path = "system"
* method.coding ^slicing.rules = #open
* method.coding contains
   KLCode 1..1 and SCTCode 0..1
* method.coding[KLCode] from KLtechniquesCodes (required)
* method.coding[KLCode].system = KLToolsCodeSystem
* method.coding[SCTCode] from TechniqesSCTCodes (required)
* method.coding[SCTCode].system = SCT

* code ^short = "[DK] IltmætningKode"
* valueQuantity.value ^short = "[DK] IltmætningResultat"
* valueQuantity.code ^short = "[DK] IltmætningEnhed"
* valueQuantity.system ^short = "[DK] IltmætningEnhed"
* subject ^short = "[DK] IltmætningSubjekt"
* encounter ^short = "[DK] IltmætningKontakt"
* performer ^short = "[DK] IltmætningAnsvarlig"
* method ^short = "[DK] IltmætningProcedure"
* effectiveDateTime ^short = "[DK] IltmætningTid"
* extension[associatedConditions] ^short = "[DK] IltmætningAssocieretTilstand"
* note.text ^short = "[DK] IltmætningBemærkning"
* status ^short = "[DK] IltmætningStatus"

Instance: HeleneOxygenSaturation
InstanceOf: KLToolsCareOxygenSaturation
Usage: #example
Title: "HeleneOxygenSaturation"
Description: "Helenes oxygenmætning"
* subject = Reference(Helene)
* code.coding[snomedSlice] = SCT#431314004
* code.coding[OxygenSatCode] = LOINC#2708-6
* valueQuantity.value = 95
* valueQuantity.unit = "%"
* valueQuantity.system = UCUM
* valueQuantity.code = #%
* method.coding[KLCode] = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* method.coding[SCTCode] = SCT#272391002 //|Measurement technique (qualifier value)|
* status = #final
* effectiveDateTime = 2019-01-09T17:45:00.000Z

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCarePainVAS.fsh

Profile: KLToolsCarePainVAS
Parent: KLCommonCareSocialObservation
Title: "PainVAS"
Description: "Pain intensity evaluation using a visual analog scale, as performed in Danish municipalities"

* code.coding = SCT#443394008 //|Visual analog scale pain score (observable entity)|
* value[x] only integer
* referenceRange.low.value = 0
* referenceRange.high.value = 100
* extension contains AssociatedConditions named associatedConditions 1..1
* extension[associatedConditions].valueCodeableConcept = SCT#22253000 // |Pain (finding)|
* method 1..1
* method from KLtechniquesCodes (required)
* extension contains FindingInformer named findingInformer 1..1

Instance: HelenePainVAS
InstanceOf: KLToolsCarePainVAS
Usage: #example
Title: "HelenePainVAS"
Description: "Helenes smerte målt med VAS"
* subject = Reference(Helene)
* code.coding = SCT#443394008
* valueInteger = 20
* method = KLToolsCodes#a3231c9a-5569-49c4-8760-4fffbf0b2b80 "Afvigelse i test-setup"
* note.text = "Jeg havde ikke en rigtig VAS skala med, så jeg tegnede en på papir, og lod borger pege på den hjemmelavede VAS"
* extension[findingInformer].valueCodeableConcept = KLToolsCodes#a3d30bf2-4a3c-4c49-9001-5363ae11681c "Borger"
* status = #final

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCarePainVRS.fsh

Profile: KLToolsCarePainVRS
Parent: KLCommonCareSocialObservation
Title: "Pain VRS"
Description: "Pain intensity evaluation using a verbal rating scale, as performed in Danish municipalities"

* code.coding = SCT#1144798005 //|Verbal Rating Scale pain intensity score (observable entity)|
* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1

* valueCodeableConcept.coding[KLToolsCode] from VRSpain (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem


* valueCodeableConcept.coding[SCTCode] from VRSSCTfindingsPain
* valueCodeableConcept.coding[SCTCode].system = SCT


* extension contains AssociatedConditions named associatedConditions 1..1
* extension[associatedConditions].valueCodeableConcept = SCT#22253000 // |Pain (finding)|
* extension contains FindingInformer named findingInformer 1..1

Instance: HelenePainVRS
InstanceOf: KLToolsCarePainVRS
Usage: #example
Title: "HelenePainVRS"
Description: "Helenes smerte målt med VRS"
* subject = Reference(Helene)
* code.coding = SCT#1144798005 "Verbal Rating Scale pain intensity score"
* valueCodeableConcept.coding[KLToolsCode] = KLToolsCodes#d253770d-ce0b-4320-9806-b8fbe9e5af8a "Kraftige/svære smerter (3)"
* valueCodeableConcept.coding[SCTCode] = SCT#76948002 "Severe pain (finding)"
* extension[findingInformer].valueCodeableConcept = KLToolsCodes#a3d30bf2-4a3c-4c49-9001-5363ae11681c "Borger"
* status = #final

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareRespirationRate.fsh

Profile: KLToolsCareRespirationRate
Parent: http://hl7.org/fhir/StructureDefinition/resprate
Title: "Respiration rate"
Description: "Respiration rate profile used in Danish Municipalities, derived from HL7 respiration rate profile"
//SNOMED on FHIR recommendation
* code.coding contains snomedSlice 1..1
* code.coding[snomedSlice] from RespirationRateSCTObservables (extensible)
* code.coding[snomedSlice].system = SCT

//KL extensions "kilde", associeret tilstand, procedure fulgt/teknik
* extension contains AssociatedConditions named associatedConditions 1..*
* extension[associatedConditions].valueCodeableConcept = SCT#106048009 //| fund vedr. respirationssystemet |
* method 1..1
* method.coding ^slicing.discriminator.type = #value
* method.coding ^slicing.discriminator.path = "system"
* method.coding ^slicing.rules = #open
* method.coding contains
   KLCode 1..1 and SCTCode 0..1
* method.coding[KLCode] from KLtechniquesCodes (required)
* method.coding[KLCode].system = KLToolsCodeSystem
* method.coding[SCTCode] from TechniqesSCTCodes (required)
* method.coding[SCTCode].system = SCT

* code ^short = "[DK] RespirationsfrekvensKode"
* valueQuantity.value ^short = "[DK] RespirationsfrekvensResultat"
* valueQuantity.code ^short = "[DK] RespirationsfrekvensEnhed"
* valueQuantity.system ^short = "[DK] RespirationsfrekvensEnhed"
* subject ^short = "[DK] RespirationsfrekvensSubjekt"
* encounter ^short = "[DK] RespirationsfrekvensKontakt"
* performer ^short = "[DK] RespirationsfrekvensAnsvarlig"
* method ^short = "[DK] RespirationsfrekvensProcedure"
* effectiveDateTime ^short = "[DK] RespirationsfrekvensTid"
* extension[associatedConditions] ^short = "[DK] RespirationsfrekvensAssocieretTilstand"
* note.text ^short = "[DK] RespirationsfrekvensBemærkning"
* status ^short = "[DK] RespirationsfrekvensStatus"

Instance: HeleneRespirationRate
InstanceOf: KLToolsCareRespirationRate
Usage: #example
Title: "HeleneRespirationRate"
Description: "Helenes respirationsfrekvens"
* subject = Reference(Helene)
* code.coding[snomedSlice] = SCT#86290005
* code.coding[RespRateCode] = LOINC#9279-1
* valueQuantity.value = 13
* valueQuantity.unit = "/min"
* valueQuantity.system = UCUM
* valueQuantity.code = #/min
* method.coding[KLCode] = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* method.coding[SCTCode] = SCT#272391002 //|Measurement technique (qualifier value)|
* status = #final
* effectiveDateTime = 2019-01-09T17:45:00.000Z

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareRSS.fsh

Profile: KLToolsCareRSS
Parent: KLCommonCareSocialObservation
Title: "Chair stand test (RSS)"
Description: "Thirty second chair stand test score, as performed in Danish municipalities"
* code = SCT#450738001
* value[x] only integer
* valueInteger 1..1
* referenceRange.low.value = 0
* method 1..1
* method.coding ^slicing.discriminator.type = #value
* method.coding ^slicing.discriminator.path = "system"
* method.coding ^slicing.rules = #open
* method.coding contains
   KLCode 1..1 and SCTCode 0..1
* method.coding[KLCode] from KLtechniquesCodes (required)
* method.coding[KLCode].system = KLToolsCodeSystem
* method.coding[SCTCode] from TechniqesSCTCodes (required)
* method.coding[SCTCode].system = SCT

* code ^short = "[DK] RSSkode"
* valueInteger ^short = "[DK] RSSresultat"
* subject ^short = "[DK] RSSsubjekt"
* encounter ^short = "[DK] RSSkontakt"
* performer ^short = "[DK] RSSansvarlig"
* method ^short = "[DK] RSSprocedure"
* effectiveDateTime ^short = "[DK] RSStid"
* note.text ^short = "[DK] RSSbemærkning"
* status ^short = "[DK] RSSstatus"

Instance: HeleneRSS
InstanceOf: KLToolsCareRSS
Usage: #example
Title: "HeleneRSS"
Description: "Helenes rejse-sætte-sig test"
* subject = Reference(Helene)
* code.coding = SCT#450738001
* valueInteger = 17
* method.coding[KLCode] = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* method.coding[SCTCode] = SCT#272391002 //|Measurement technique (qualifier value)|
* status = #final

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareUrinStix.fsh

Profile: KLToolsCareUrinStix
Parent: KLCommonCareSocialObservation
Title: "Urin Stix"
Description: "Urin stix result, as performed in Danish municipalities"
* code.coding ^slicing.discriminator.type = #value
* code.coding ^slicing.discriminator.path = "system"
* code.coding ^slicing.rules = #open
* code.coding contains
    NPUcode 1..1 and SCTCode 0..1 

* code.coding[SCTCode] from SCTUrinStix
* code.coding[SCTCode].system = SCT 
//* code.coding[LOINCCode] from LOINCUrinStix
* code.coding[NPUcode] from NPUUrinStix
* code.coding[NPUcode].system = NPU
* value[x] only string or Quantity
* valueQuantity.system = UCUM

//KL extensions "kilde", associeret tilstand, procedure fulgt/teknik
* extension contains AssociatedConditions named associatedConditions 1..1
* extension[associatedConditions].valueCodeableConcept = SCT#252041008 //|fund vedr. vandladning|

* method 1..1
* method.coding from KLtechniquesCodes (required)

* code ^short = "[DK] UrinStixKode"
* valueQuantity.value ^short = "[DK] UrinStixResultat"
* valueQuantity.system ^short = "[DK] UrinStixEnhed"
* valueQuantity.code ^short = "[DK] UrinStixEnhed"
* subject ^short = "[DK] UrinStixSubjekt"
* encounter ^short = "[DK] UrinStixKontakt"
* performer ^short = "[DK] UrinStixAnsvarlig"
* method ^short = "[DK] UrinStixProcedure"
* effectiveDateTime ^short = "[DK] UrinStixTid"
* extension[associatedConditions] ^short = "[DK] UrinStixAssocieretTilstand"
* note.text ^short = "[DK] UrinStixBemærkning"
* status ^short = "[DK] UrinStixStatus"

Instance: HeleneUrinStix
InstanceOf: KLToolsCareUrinStix
Usage: #example
Title: "HeleneUrinStix leukocytter"
Description: "Helenes urinstix"
* subject = Reference(Helene)
* code.coding[SCTCode] = SCT#252385000 "Urine dipstick for leukocyte esterase (procedure)"
* code.coding[NPUcode] = NPU#NPU03987 "U—Leukocytter; arb.k.(proc.) = ?"
* valueString = "Påviselige leukocytter"
* method.coding = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* status = #final
* effectiveDateTime = 2019-01-09T17:45:00.000Z

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareWHO5.fsh

Instance: KLToolsCareWHO5
InstanceOf: KLToolsQuestionnaire
Usage: #definition
Title: "WHO-5 questionnaire"
* status = #draft
* publisher = "Kommunernes Landsforening"
* description = "Instrument til at måle graden af positive oplevelser, og som kan anvendes som et mål for personers generelle trivsel eller velbefindende. Tidsrammen er de seneste to uger."
* name = "KLToolsCareWHO5"
* code = SCT#1144665009
* item[0].type = #choice
* item[0].text = "I de sidste 2 uger har jeg været glad og i godt humør"
* item[0].linkId = "happy"
* item[0].answerValueSet = "http://fhir.kl.dk/ffinst/ValueSet/WHO5AnswerCodesHappy"
* item[0].code =  SCT#285854004 //|Emotion (observable entity)|
* item[0].repeats = false

* item[1].type = #choice
* item[1].text = "I de sidste 2 uger har jeg følt mig rolig og afslappet"
* item[1].linkId = "calm"
* item[1].answerValueSet = "http://fhir.kl.dk/ffinst/ValueSet/WHO5AnswerCodesCalm"
* item[1].code = SCT#285854004 //|Emotion (observable entity)|
* item[1].repeats = false

* item[2].type = #choice
* item[2].text = "I de sidste 2 uger har jeg følt mig aktiv og energisk"
* item[2].linkId = "active"
* item[2].answerValueSet = "http://fhir.kl.dk/ffinst/ValueSet/WHO5AnswerCodesActive"
* item[2].code =  SCT#406202006 //"Træk vedr. energi"
* item[2].repeats = false

* item[3].type = #choice
* item[3].text = "I de sidste 2 uger er jeg vågnet frisk og udhvilet"
* item[3].linkId = "rested"
* item[3].answerValueSet = "http://fhir.kl.dk/ffinst/ValueSet/WHO5AnswerCodesRested"
* item[3].code =  SCT#404949004 //"Hvilemønster"
* item[3].repeats = false

* item[4].type = #choice
* item[4].text = "I de sidste 2 uger har min dagligdag været fyldt med ting der interesserer mig"
* item[4].linkId = "interest"
* item[4].answerValueSet = "http://fhir.kl.dk/ffinst/ValueSet/WHO5AnswerCodesInterest"
* item[4].code =  SCT#247752005 //"Interesseniveau"
* item[4].repeats = false

* item[5].type = #text
* item[5].text = "Kommentar til WHO5"
* item[5].linkId = "who5comment"
* item[5].repeats = false

Instance: WHO-5AnswerMark
InstanceOf: KLToolsQuestionnaireResponse
Usage: #example
Title: "WHO-5AnswersMark"
Description: "WHO-5 besvarelse Mark"
* questionnaire = "http://fhir.kl.dk/ffinst/Questionnaire/KLToolsCareWHO5"
* status = #completed
* subject = Reference(Mark)
* author = Reference(AbrahamFraAkutSygeplejen)
* source = Reference(Mark)
* extension[techniqe].valueCodeableConcept = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja "Ingen problemer med test-setup og borgers udførelse"
* extension[findingInformer].valueCodeableConcept = KLToolsCodes#a3d30bf2-4a3c-4c49-9001-5363ae11681c "Borger"

* item[0].linkId = "happy"
* item[0].answer.valueCoding = KLToolsCodes#0e5aa952-d470-4219-b275-5e8204d96987 "WHO-5 Hele tiden - 5 (glad)"

* item[1].linkId = "calm"
* item[1].answer.valueCoding = KLToolsCodes#1ab11c78-6258-4069-9065-0f076833b133 "WHO-5 Lidt mere end halvdelen af tiden - 3 (rolig)"

* item[2].linkId = "active"
* item[2].answer.valueCoding = KLToolsCodes#3d3c13a6-befa-4a52-aef0-7e775ca11fdd "WHO-5 Hele tiden - 5 (aktiv)"

* item[3].linkId = "rested"
* item[3].answer.valueCoding = KLToolsCodes#7aaccc2e-ead3-41f0-a9ba-091f2e539753 "WHO-5 Hele tiden - 5 (frisk)" 

* item[4].linkId = "interest"
* item[4].answer.valueCoding = KLToolsCodes#2ca88533-c048-4b2a-9ac2-2206b63a25ac "WHO-5 Hele tiden - 5 (interesseret)" 

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsCareWHO5observation.fsh

Profile: KLToolsWHO5ObservationHappy1
Parent: KLCommonCareSocialObservation
Title: "WHO-5 happy (1)"
Description: "WHO5 observation, for the first question about feeling happy"
* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1
* valueCodeableConcept.coding[KLToolsCode] from WHO5AnswerCodesHappy (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem

* code = SCT#285854004 //|Emotion (observable entity)|
* valueCodeableConcept.coding[SCTCode] from WHO5SCTfindingsHappy1
* valueCodeableConcept.coding[SCTCode].system = SCT
* derivedFrom 1..1
* derivedFrom only Reference(KLToolsQuestionnaireResponse)

* extension contains FindingInformer named findingInformer 0..1 and AssociatedConditions named associatedConditions 0..*
* extension[associatedConditions].valueCodeableConcept = SCT#106126000 //|fund vedr. emotionel tilstand|


Profile: KLToolsWHO5ObservationCalm2
Parent: KLCommonCareSocialObservation
Title: "WHO-5 calm (2)"
Description: "WHO5 observation, for the second question about feeling calm"
* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1
* valueCodeableConcept.coding[KLToolsCode] from WHO5AnswerCodesCalm (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem

* code = SCT#285854004 //|Emotion (observable entity)|
* valueCodeableConcept.coding[SCTCode] from WHO5SCTfindingsCalm2
* derivedFrom 1..1
* derivedFrom only Reference(KLToolsQuestionnaireResponse)

* extension contains FindingInformer named findingInformer 0..1 and AssociatedConditions named associatedConditions 0..*
* extension[associatedConditions].valueCodeableConcept = SCT#106126000 // |fund vedr. emotionel tilstand|

* valueCodeableConcept.coding[SCTCode].system = SCT


Profile: KLToolsWHO5ObservationActive3
Parent: KLCommonCareSocialObservation
Title: "WHO-5 active (3)"
Description: "WHO5 observation, for the third question about being active"

* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1
* valueCodeableConcept.coding[KLToolsCode] from WHO5AnswerCodesActive (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem

* code = SCT#406202006 //"Træk vedr. energi"
* valueCodeableConcept.coding[SCTCode] from WHO5SCTfindingsActive3
* derivedFrom 1..1
* derivedFrom only Reference(KLToolsQuestionnaireResponse)

* extension contains FindingInformer named findingInformer 0..1 and AssociatedConditions named associatedConditions 0..*
* extension[associatedConditions].valueCodeableConcept = SCT#301325005 //fund vedr. energiniveau 

* valueCodeableConcept.coding[SCTCode].system = SCT

Profile: KLToolsWHO5ObservationRested4
Parent: KLCommonCareSocialObservation
Title: "WHO-5 rested (4)"
Description: "WHO5 observation, for the fourth question about being rested"

* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1
* valueCodeableConcept.coding[KLToolsCode] from WHO5AnswerCodesRested (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem

* code = SCT#363817001 // |Sleep related observable (observable entity)|
* valueCodeableConcept.coding[SCTCode] from WHO5SCTfindingsRested4
* derivedFrom 1..1
* derivedFrom only Reference(KLToolsQuestionnaireResponse)

* extension contains FindingInformer named findingInformer 0..1 and AssociatedConditions named associatedConditions 0..*
* extension[associatedConditions].valueCodeableConcept = SCT#106168000 //|fund vedr. søvn

* valueCodeableConcept.coding[SCTCode].system = SCT

Profile: KLToolsWHO5ObservationInterest5
Parent: KLCommonCareSocialObservation
Title: "WHO-5 Interest (5)"
Description: "WHO5 observation, for the fifth question about being interested"

* value[x] only CodeableConcept

* valueCodeableConcept.coding ^slicing.discriminator.type = #value
* valueCodeableConcept.coding ^slicing.discriminator.path = "system"
* valueCodeableConcept.coding ^slicing.rules = #open

* valueCodeableConcept.coding contains
   KLToolsCode 1..1 and SCTCode 1..1
* valueCodeableConcept.coding[KLToolsCode] from WHO5AnswerCodesInterest (required)
* valueCodeableConcept.coding[KLToolsCode].system = KLToolsCodeSystem

* code = SCT#247752005 //"Interesseniveau"
* valueCodeableConcept.coding[SCTCode] from WHO5SCTfindingsInterest5
* derivedFrom 1..1
* derivedFrom only Reference(KLToolsQuestionnaireResponse)

* extension contains FindingInformer named findingInformer 0..1 and AssociatedConditions named associatedConditions 0..*
* extension[associatedConditions].valueCodeableConcept = SCT#365462008 //|fund vedr. grad af interesse|

* valueCodeableConcept.coding[SCTCode].system = SCT

Instance: MarksWHO5-2
InstanceOf: KLToolsWHO5ObservationCalm2
Usage: #example
Title: "MarksWHO5-2"
Description: "Observation af Marks humør, som udtrykt i WHO5 spørgeskema"
* code = SCT#285854004 //|Emotion (observable entity)|
* subject = Reference(Mark)
* performer = Reference(AbrahamFraAkutSygeplejen)
* valueCodeableConcept.coding[SCTCode] = SCT#48694002
* valueCodeableConcept.coding[KLToolsCode] = KLToolsCodes#1ab11c78-6258-4069-9065-0f076833b133 "WHO-5 Lidt mere end halvdelen af tiden - 3 (rolig)"
* status = #final
* method = KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja "Ingen problemer med test-setup og borgers udførelse"
* derivedFrom = Reference(WHO-5AnswerMark)
* extension[associatedConditions].valueCodeableConcept = SCT#106126000 //|fund vedr. emotionel tilstand|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsExample.fsh

Instance: Mark
InstanceOf: KLCommonCitizen
Title: "Mark"
Description: "Borgeren Mark"
Usage: #example
* name.given = "Mark"
* name.family = "Jensen"
* birthDate = 1982-02-02
* identifier.value = "mark"

Instance:       AbrahamFraAkutSygeplejen
InstanceOf:     KLCommonPractitioner
Title:          "AbrahamFraAkutSygeplejen"
Description:    "Eksempel på medarbejderen Abraham fra akutsygeplejen"
Usage: #example
* name.given = "Abraham"
* name.family = "Murakami"

Instance: Helene
InstanceOf: KLCommonCitizen
Title: "Helene"
Description: "Borgeren Helene"
Usage: #example
* name.given = "Helene"
* name.family = "Markussen"
* birthDate = 1959-05-03
* identifier.value = "helene"

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsExtensions.fsh

Extension: FindingInformer
Title: "FindingInformer"
Description: "Extension for pointing to who the source of information is"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from FindingInformerCodes
* ^context[0].type = http://hl7.org/fhir/extension-context-type#element
* ^context[0].expression = "Observation"
* ^context[1].type = http://hl7.org/fhir/extension-context-type#element
* ^context[1].expression = "QuestionnaireResponse"

Extension: AssociatedConditions
Title: "AssociatedConditions"
Description: "Extension for pointing to Condition codes, for which the observation might be usefull"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from SCTConditionCodes
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "Observation"

Extension: Technique
Title: "Technique"
Description: "Extension for pointing to the techniqe used to obtain the result of a questionaire"
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from KLtechniquesCodes
* ^context[0].type = http://hl7.org/fhir/extension-context-type#element
* ^context[0].expression = "Observation"
* ^context[1].type = http://hl7.org/fhir/extension-context-type#element
* ^context[1].expression = "QuestionnaireResponse"

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsQuestionaire.fsh

Profile: KLToolsQuestionnaire
Parent: Questionnaire
Title: "General questionnaire"
Description: "Questionnaire profile, for all Questionaires in KLTools"
* item.extension contains ExtMinValue named minValue 0..1
* item.extension contains ExtMaxValue named maxValue 0..1 

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsQuestionnaireResponse.fsh

Profile: KLToolsQuestionnaireResponse
Parent: QuestionnaireResponse
Title: "Questionnaire response"
Description: "Questionnaire response profile, for all Questionaires in KLTools"
* extension contains 
    FindingInformer named findingInformer 1..1 and
    Technique named techniqe 0..1

* extension[findingInformer] SU
* extension[techniqe] SU


---

File: repos/hl7dk_SLASH_KL-dk-tools/input/fsh/KLToolsValueSets.fsh

CodeSystem: KLToolsCodes
Title: "KLToolsCodes"
Description: "Codes associated with KLTools, which is not part of KLCommonCareSocial, or international terminologies"
* ^experimental = false
* ^caseSensitive = false
* #0e5aa952-d470-4219-b275-5e8204d96987 "WHO-5 Hele tiden - 5 (glad)"
* #9fd3c658-d0b7-4018-84e9-8588be7de478 "WHO-5 Det meste af tiden - 4 (glad)"
* #a3779fc5-d7b3-4d03-bdaf-5ae5a40b0899 "WHO-5 Lidt mere end halvdelen af tiden - 3 (glad)"
* #228ee58f-5785-4364-a99c-8ba99943f510 "WHO-5 Lidt mindre end halvdelen af tiden - 2 (glad)"
* #c4002c8a-91c5-4737-bba6-ce364e83fd28 "WHO-5 Lidt af tiden - 1 (glad)"
* #d092cdf0-e4e0-4cf6-a506-0adf95f56a8d "WHO-5 På intet tidspunkt - 0 (glad)"
* #b9eb352d-145d-4c45-8f8c-5b92474c4af1 "WHO-5 Hele tiden - 5 (rolig)"
* #b128508b-8ef8-4516-b8e1-f5af02a408f3 "WHO-5 Det meste af tiden - 4 (rolig)"
* #1ab11c78-6258-4069-9065-0f076833b133 "WHO-5 Lidt mere end halvdelen af tiden - 3 (rolig)"
* #d599f667-9300-432d-9edf-a1afa4c9af85 "WHO-5 Lidt mindre end halvdelen af tiden - 2 (rolig)"
* #1fb14510-ec20-4a8e-bc3a-d45fa83909c9 "WHO-5 Lidt af tiden - 1 (rolig)"
* #130fbd15-4718-4fb7-9592-d205f575bc9c "WHO-5 På intet tidspunkt - 0 (rolig)"
* #3d3c13a6-befa-4a52-aef0-7e775ca11fdd "WHO-5 Hele tiden - 5 (aktiv)"
* #60da44d3-815e-426f-8c8a-0ae34d85863a "WHO-5 Det meste af tiden - 4 (aktiv)"
* #f573ad27-7d00-4505-99ac-f0f35cd16e6a "WHO-5 Lidt mere end halvdelen af tiden - 3 (aktiv)"
* #d9d031d9-3185-4f59-a125-ea5a3503011a "WHO-5 Lidt mindre end halvdelen af tiden - 2 (aktiv)"
* #08c8a19c-d135-4e05-a8d4-70c6da6f4842 "WHO-5 Lidt af tiden - 1 (aktiv)"
* #ccc3ecb4-3249-4c82-9c2b-dca72f4ba374 "WHO-5 På intet tidspunkt - 0 (aktiv)"
* #7aaccc2e-ead3-41f0-a9ba-091f2e539753 "WHO-5 Hele tiden - 5 (frisk)" 
* #b1375340-07a1-4ab4-9d3b-f5de61b878b5 "WHO-5 Det meste af tiden - 4 (frisk)"
* #0059dc5d-d174-45b9-a423-136e3d9c2bda "WHO-5 Lidt mere end halvdelen af tiden - 3 (frisk)"
* #8f403657-cdbd-4d87-aefe-ab040a6db428 "WHO-5 Lidt mindre end halvdelen af tiden - 2 (frisk)"
* #2bd7d702-99ac-4acc-b3f6-a9833a32f7c8 "WHO-5 Lidt af tiden - 1 (frisk)"
* #18c05b5f-97e6-4c08-a920-ec75a213f1f6 "WHO-5 På intet tidspunkt - 0 (frisk)"
* #2ca88533-c048-4b2a-9ac2-2206b63a25ac "WHO-5 Hele tiden - 5 (interesseret)" 
* #b62a3f31-9b63-4b86-b5bd-edf300b9fbd6 "WHO-5 Det meste af tiden - 4 (interesseret)"
* #392ee33f-e754-4443-a285-c19aff66726f "WHO-5 Lidt mere end halvdelen af tiden - 3 (interesseret)"
* #3c323281-fc96-47cb-b057-1dff2ffa835b "WHO-5 Lidt mindre end halvdelen af tiden - 2 (interesseret)"
* #314ab944-2f8a-453d-8653-b46cacf5f480 "WHO-5 Lidt af tiden - 1 (interesseret)"
* #f97749b5-e689-40a4-9eda-0b0e35d185fc "WHO-5 På intet tidspunkt - 0 (interesseret)"
* #4a069078-c3c3-4c67-899d-4e8876026f48Ja "Ingen problemer med test-setup og borgers udførelse" "Proceduren for observationen, som beskrevet af KL under test-setup og borgers udførelse, er fulgt"
* #17772b27-bc9d-4d62-9515-d268a98a3a27 "Afvigelse i borgers udførelse" "Proceduren for observationen, som beskrevet af KL, er ikke fulgt pga. afvigelser i borgers udførelse"
* #a3231c9a-5569-49c4-8760-4fffbf0b2b80 "Afvigelse i test-setup" "Proceduren for observationen, som beskrevet af KL, er ikke fulgt pga. afvigelse i test-setup"
* #6713249a-433e-4b93-8975-0214a473dab5 "Afvigelse i borgers udførelse og test-setup" "Proceduren for observationen, som beskrevet af KL, er ikke fulgt pga. afvigelse i borgers udførelse og test-setup"
* #a3d30bf2-4a3c-4c49-9001-5363ae11681c "Borger" "Borger har selv været kilde"
* #71675b26-285e-4551-9488-991d8b34a12a "Borger støttet af pårørende" "Borger blev støttet af en pårørende"
* #5937b533-a4e3-45af-9ddf-61dce1d56b74 "Borger støttet af medarbejder" "Borger blev støttet af medarbejder"
* #d5762abe-706b-4d52-ac2b-2621c60486b2 "Pårørende alene" "En pårørende er kilde"
* #111b2c8a-389d-4ecc-9187-ce78f019649b "Medarbejder alene" "En medarbejder er kilde"
* #128f0d78-aa41-4213-bff3-df0dcdcff753 "Jeg har ingen problemer med at gå omkring (1)"
* #95be0ff6-ab05-4918-be8e-6dbb820366bb "Jeg har nogle problemer med at gå omkring (2)"
* #05e7c7d0-a4fd-497c-a290-72c541edec14 "Jeg er bundet til sengen (3)"
* #0f33b1ee-a26b-47b0-ab99-0a67494656e3 "Jeg har ingen problemer med min personlige pleje (1)"
* #7837e254-4d5b-4edd-89b8-b106ffbda113 "Jeg har nogle problemer med at vaske mig og klæde mig på (2)"
* #33cbf5d9-e8e2-4e59-a5f7-c6e9d1842968 "Jeg kan ikke vaske mig eller klæde mig på (3)"
* #815b8b40-e2f6-4f55-a328-17c886e41490 "Jeg har ingen problemer med at udføre mine sædvanlige aktiviteter (1)"
* #b80a1898-aac7-4d20-88c5-80124691e9d9 "Jeg har nogle problemer med at udføre mine sædvanlige aktiviteter (2)"
* #3334936f-efe1-456b-8b45-ce965d6f559e "Jeg kan ikke udføre mine sædvanlige aktiviteter (3)"
* #16c984ad-9dcd-4214-9ca7-07669d65dd0a "Jeg har ingen smerter eller ubehag (1)"
* #3616b50a-440a-4268-9c8a-660123526540 "Jeg har moderate smerter eller ubehag (2)"
* #22d3d27b-f8fd-4c09-a4bf-a6a342442095 "Jeg har ekstreme smerter eller ubehag (3)"
* #841deb88-b0b1-4f3b-9101-98da06870088 "Jeg er ikke ængstelig eller deprimeret (1)"
* #6027bc9d-abad-4162-a156-839553e015e7 "Jeg er moderat ængstelig eller deprimeret (2)"
* #a9729d0b-3df2-445a-8b18-606f0c1889d6 "Jeg er ekstremt ængstelig eller deprimeret (3)"
* #51b9ff3a-604c-4a45-a8a2-5d9191b2056e "Ingen smerter (0)"
* #42b540bd-88bc-406c-b47d-ee0bae50b98e "Lette smerter (1)"
* #f3207523-d9f8-4e0b-8636-9e8b057b6971 "Moderate smerter (2)"
* #d253770d-ce0b-4320-9806-b8fbe9e5af8a "Kraftige/svære smerter (3)"
* #a3f25054-9f1d-4256-afa2-c1035b0bdd41 "Uudholdelige/værst tænkelige smerter (4)"
* #4d5eeb61-a9b4-40cc-af45-4e8e2caa6db0 "Agiteret (1)"
* #fc025609-8d3c-4d36-aa44-19fe839d548f "Habituel (0)"
* #916b3530-23e2-4c11-8973-52a90bc9ec31 "Reagerer kun på tiltale (1)"
* #0000e850-a51d-4867-a901-dd4c6a2a46a1 "Reagerer kun på smerte (2)"
* #55da9922-c22b-4bd2-b842-e200048bfb20 "Ingen reaktion (3)"

ValueSet: WHO5AnswerCodesHappy
Title: "WHO5AnswerCodesHappy"
Description: "Codes used to specify WHO-5 answers to the first question about being happy"
* ^experimental = false
* KLToolsCodes#0e5aa952-d470-4219-b275-5e8204d96987 //"WHO-5 Hele tiden (5) (glad)"
* KLToolsCodes#9fd3c658-d0b7-4018-84e9-8588be7de478 //"WHO-5 Det meste af tiden (4) (glad)"
* KLToolsCodes#a3779fc5-d7b3-4d03-bdaf-5ae5a40b0899 //"WHO-5 Lidt mere end halvdelen af tiden (3)(glad)"
* KLToolsCodes#228ee58f-5785-4364-a99c-8ba99943f510 //"WHO-5 Lidt mindre end halvdelen af tiden (2)(glad)"
* KLToolsCodes#c4002c8a-91c5-4737-bba6-ce364e83fd28 //"WHO-5 Lidt af tiden (1)(glad)"
* KLToolsCodes#d092cdf0-e4e0-4cf6-a506-0adf95f56a8d //"WHO-5 På intet tidspunkt (0)(glad)"


ValueSet: WHO5AnswerCodesCalm
Title: "WHO5AnswerCodesCalm"
Description: "Codes used to specify WHO-5 answers to the second question about being calm"
* ^experimental = false
* KLToolsCodes#b9eb352d-145d-4c45-8f8c-5b92474c4af1 //"WHO-5 Hele tiden - 5 (rolig)"
* KLToolsCodes#b128508b-8ef8-4516-b8e1-f5af02a408f3 //"WHO-5 Det meste af tiden - 4 (rolig)"
* KLToolsCodes#1ab11c78-6258-4069-9065-0f076833b133 //"WHO-5 Lidt mere end halvdelen af tiden - 3 (rolig)"
* KLToolsCodes#d599f667-9300-432d-9edf-a1afa4c9af85 //"WHO-5 Lidt mindre end halvdelen af tiden - 2 (rolig)"
* KLToolsCodes#1fb14510-ec20-4a8e-bc3a-d45fa83909c9 //"WHO-5 Lidt af tiden - 1 (rolig)"
* KLToolsCodes#130fbd15-4718-4fb7-9592-d205f575bc9c //"WHO-5 På intet tidspunkt - 0 (rolig)"


ValueSet: WHO5AnswerCodesActive
Title: "WHO5AnswerCodesActive"
Description: "Codes used to specify WHO-5 answers to the third question about being active"
* ^experimental = false
* KLToolsCodes#3d3c13a6-befa-4a52-aef0-7e775ca11fdd //"WHO-5 Hele tiden - 5 (aktiv)"
* KLToolsCodes#60da44d3-815e-426f-8c8a-0ae34d85863a //"WHO-5 Det meste af tiden - 4 (aktiv)"
* KLToolsCodes#f573ad27-7d00-4505-99ac-f0f35cd16e6a //"WHO-5 Lidt mere end halvdelen af tiden - 3 (aktiv)"
* KLToolsCodes#d9d031d9-3185-4f59-a125-ea5a3503011a //"WHO-5 Lidt mindre end halvdelen af tiden - 2 (aktiv)"
* KLToolsCodes#08c8a19c-d135-4e05-a8d4-70c6da6f4842 //"WHO-5 Lidt af tiden - 1 (aktiv)"
* KLToolsCodes#ccc3ecb4-3249-4c82-9c2b-dca72f4ba374 //"WHO-5 På intet tidspunkt - 0 (aktiv)"

ValueSet: WHO5AnswerCodesRested
Title: "WHO5AnswerCodesRested"
Description: "Codes used to specify WHO-5 answers to the fourth question about being rested"
* ^experimental = false
* KLToolsCodes#7aaccc2e-ead3-41f0-a9ba-091f2e539753 //"WHO-5 Hele tiden - 5 (frisk)" 
* KLToolsCodes#b1375340-07a1-4ab4-9d3b-f5de61b878b5 //"WHO-5 Det meste af tiden - 4 (frisk)"
* KLToolsCodes#0059dc5d-d174-45b9-a423-136e3d9c2bda //"WHO-5 Lidt mere end halvdelen af tiden - 3 (frisk)"
* KLToolsCodes#8f403657-cdbd-4d87-aefe-ab040a6db428 //"WHO-5 Lidt mindre end halvdelen af tiden - 2 (frisk)"
* KLToolsCodes#2bd7d702-99ac-4acc-b3f6-a9833a32f7c8 //"WHO-5 Lidt af tiden - 1 (frisk)"
* KLToolsCodes#18c05b5f-97e6-4c08-a920-ec75a213f1f6 //"WHO-5 På intet tidspunkt - 0 (frisk)"


ValueSet: WHO5AnswerCodesInterest
Title: "WHO5AnswerCodesInterest"
Description: "Codes used to specify WHO-5 answers to the fifth question about being interested"
* ^experimental = false
* KLToolsCodes#2ca88533-c048-4b2a-9ac2-2206b63a25ac //"WHO-5 Hele tiden - 5 (interesseret)" 
* KLToolsCodes#b62a3f31-9b63-4b86-b5bd-edf300b9fbd6 //"WHO-5 Det meste af tiden - 4 (interesseret)"
* KLToolsCodes#392ee33f-e754-4443-a285-c19aff66726f //"WHO-5 Lidt mere end halvdelen af tiden - 3 (interesseret)"
* KLToolsCodes#3c323281-fc96-47cb-b057-1dff2ffa835b //"WHO-5 Lidt mindre end halvdelen af tiden - 2 (interesseret)"
* KLToolsCodes#314ab944-2f8a-453d-8653-b46cacf5f480 //"WHO-5 Lidt af tiden - 1 (interesseret)"
* KLToolsCodes#f97749b5-e689-40a4-9eda-0b0e35d185fc //"WHO-5 På intet tidspunkt - 0 (interesseret)"

ValueSet: WHO5SCTfindingsHappy1
Title: "WHO5SCTfindingsHappy1"
Description: "SNOMED CT findings when conducting WHO-5 questionaires, question 1"
* ^experimental = false
* SCT#160245001  //"No current problems or disability"
* SCT#366979004 //|depressiv sindsstemning|

ValueSet: WHO5SCTfindingsCalm2
Title: "WHO5SCTfindingsCalm2"
Description: "SNOMED CT findings when conducting WHO-5 questionaires, question 2"
* ^experimental = false
* SCT#160245001  //"No current problems or disability"
* SCT#48694002 //|angst|

ValueSet: WHO5SCTfindingsActive3
Title: "WHO5SCTfindingsActive3"
Description: "SNOMED CT findings when conducting WHO-5 questionaires, question 3"
* ^experimental = false
* SCT#160245001  //"No current problems or disability"
* SCT#248274002 //"manglende energi"

ValueSet: WHO5SCTfindingsRested4
Title: "WHO5SCTfindingsRested4"
Description: "SNOMED CT findings when conducting WHO-5 questionaires, question 4"
* ^experimental = false
* SCT#160245001  //"No current problems or disability"
* SCT#422730001 // |utilstrækkelig hvile/søvn i forhold til fysisk tilstand|

ValueSet: WHO5SCTfindingsInterest5
Title: "WHO5SCTfindingsInterest5"
Description: "SNOMED CT findings when conducting WHO-5 questionaires, question 5"
* ^experimental = false
* SCT#160245001  //"No current problems or disability"
* SCT#713566001 //|manglende interesse|

ValueSet: EQ5Dmobility
Title: "EQ5Dmobility"
Description: "Findings for EQ-5D mobility"
* ^experimental = false
* KLToolsCodes#128f0d78-aa41-4213-bff3-df0dcdcff753 //"Jeg har ingen problemer med at gå omkring (1)"
* KLToolsCodes#95be0ff6-ab05-4918-be8e-6dbb820366bb //"Jeg har nogle problemer med at gå omkring (2)"
* KLToolsCodes#05e7c7d0-a4fd-497c-a290-72c541edec14 //"Jeg er bundet til sengen (3)"

ValueSet: EQ5DSCTfindingsMobility
Title: "EQ5DSCTfindingsMobility"
Description: "SNOMED CT findings for EQ-5D mobility"
* ^experimental = false
* SCT#160245001 // No current problems or disability
* SCT#719232003 //|Difficulty walking (finding)|
* SCT#160685001 //|Bed-ridden (finding)|

ValueSet: EQ5Dhygiene
Title: "EQ5Dhygiene"
Description: "Findings for EQ-5D hygiene"
* ^experimental = false
* KLToolsCodes#0f33b1ee-a26b-47b0-ab99-0a67494656e3 //"Jeg har ingen problemer med min personlige pleje (1)"
* KLToolsCodes#7837e254-4d5b-4edd-89b8-b106ffbda113 //"Jeg har nogle problemer med at vaske mig og klæde mig på (2)"
* KLToolsCodes#33cbf5d9-e8e2-4e59-a5f7-c6e9d1842968 //"Jeg kan ikke vaske mig eller klæde mig på (3)"

ValueSet: EQ5DSCTfindingsHygiene
Title: "EQ5DSCTfindingsHygiene"
Description: "SNOMED CT findings for EQ-5D hygiene"
* ^experimental = false
* SCT#160245001 // No current problems or disability
* SCT#284784008 //|Difficulty performing personal hygiene activity (finding)|
* SCT#284781000 //|Unable to perform personal hygiene activity (finding)|

ValueSet: EQ5Dactivity
Title: "EQ5Dactivity"
Description: "Findings for EQ-5D activity"
* ^experimental = false
* KLToolsCodes#815b8b40-e2f6-4f55-a328-17c886e41490 //"Jeg har ingen problemer med at udføre mine sædvanlige aktiviteter (1)"
* KLToolsCodes#b80a1898-aac7-4d20-88c5-80124691e9d9 //"Jeg har nogle problemer med at udføre mine sædvanlige aktiviteter (2)"
* KLToolsCodes#3334936f-efe1-456b-8b45-ce965d6f559e //"Jeg kan ikke udføre mine sædvanlige aktiviteter (3)"

ValueSet: EQ5DSCTfindingsActivity
Title: "EQ5DSCTfindingsActivity"
Description: "SNOMED CT Findings for EQ-5D activity"
* ^experimental = false
* SCT#160245001 // No current problems or disability
* SCT#365031000:280452008=371157007 //365031000 |Finding related to ability to perform activities of everyday life: 280452008 |Interpretation| = 371157007 |Able with difficulty|
* SCT#365031000:280452008=371151008 //365031000 |Finding related to ability to perform activities of everyday life: 280452008 |Interpretation| = 371151008 |Unable|

ValueSet: EQ5Dpain
Title: "EQ5Dpain"
Description: "Findings for EQ-5D pain"
* ^experimental = false
* KLToolsCodes#16c984ad-9dcd-4214-9ca7-07669d65dd0a //"Jeg har ingen smerter eller ubehag (1)"
* KLToolsCodes#3616b50a-440a-4268-9c8a-660123526540 //"Jeg har moderate smerter eller ubehag (2)"
* KLToolsCodes#22d3d27b-f8fd-4c09-a4bf-a6a342442095 //"Jeg har ekstreme smerter eller ubehag (3)"

ValueSet: EQ5DSCTfindingsPain
Title: "EQ5DSCTfindingsPain"
Description: "SNOMED CT findings for EQ-5D pain"
* ^experimental = false
* SCT#160245001 // No current problems or disability
* SCT#50415004 //|Moderate pain (finding)|
* SCT#67849003 //|Excruciating pain (finding)|

ValueSet: EQ5Danxiety
Title: "EQ5Danxiety"
Description: "Findings for EQ-5D anxiety"
* ^experimental = false
* KLToolsCodes#841deb88-b0b1-4f3b-9101-98da06870088 //"Jeg er ikke ængstelig eller deprimeret (1)"
* KLToolsCodes#6027bc9d-abad-4162-a156-839553e015e7 //"Jeg er moderat ængstelig eller deprimeret (2)"
* KLToolsCodes#a9729d0b-3df2-445a-8b18-606f0c1889d6 //"Jeg er ekstremt ængstelig eller deprimeret (3)"

ValueSet: EQ5DSCTfindingsAnxiety
Title: "EQ5DSCTfindingsAnxiety"
Description: "SNOMED CT findings for EQ-5D Anxiety"
* ^experimental = false
* SCT#160245001 // No current problems or disability
* SCT#366979004+48694002 //| depressiv sindsstemning |+|Anxiety (finding)| 

ValueSet: KLtechniquesCodes
Title: "KLtechniquesCodes"
Description: "Codes for the techniqe used when obtaining an observation"
* ^experimental = false
* KLToolsCodes#4a069078-c3c3-4c67-899d-4e8876026f48Ja //"Ingen problemer med test-setup og borgers udførelse"
* KLToolsCodes#17772b27-bc9d-4d62-9515-d268a98a3a27 //"Afvigelser i borgers udførelse" //761996005 |Estimation technique (qualifier value)| //733985002 |Reported (qualifier value)|
* KLToolsCodes#a3231c9a-5569-49c4-8760-4fffbf0b2b80 //"Afvigelse i test-setup"
* KLToolsCodes#6713249a-433e-4b93-8975-0214a473dab5 //"Afvigelse i borgers udførelse og test-setup"

ValueSet: TechniqesSCTCodes
Title: "TechniqesSCTCodes"
Description: "SNOMED CT Codes for the techniqe used when obtaining an observation"
* ^experimental = false
* SCT#761996005 //|Estimation technique (qualifier value)|
* SCT#733985002 //|Reported (qualifier value)|
* SCT#272391002 //|Measurement technique (qualifier value)|

ValueSet: FindingInformerCodes 
Title: "FindingInformerCodes"
Description: "Codes for who informed the findings"
* ^experimental = false
* KLToolsCodes#a3d30bf2-4a3c-4c49-9001-5363ae11681c //"Borger"
* KLToolsCodes#71675b26-285e-4551-9488-991d8b34a12a //"Borger støttet af pårørende"
* KLToolsCodes#5937b533-a4e3-45af-9ddf-61dce1d56b74 //"Borger støttet af medarbejder"
* KLToolsCodes#d5762abe-706b-4d52-ac2b-2621c60486b2 //"Pårørende alene"
* KLToolsCodes#111b2c8a-389d-4ecc-9187-ce78f019649b //"Medarbejder alene"

ValueSet: VRSpain
Title: "VRSpain"
Description: "Findings for VRS pain"
* ^experimental = false
* KLToolsCodes#51b9ff3a-604c-4a45-a8a2-5d9191b2056e // "Ingen smerter (0)"
* KLToolsCodes#42b540bd-88bc-406c-b47d-ee0bae50b98e //Lette smerter (1)"
* KLToolsCodes#f3207523-d9f8-4e0b-8636-9e8b057b6971 //"Moderate smerter (2)"
* KLToolsCodes#d253770d-ce0b-4320-9806-b8fbe9e5af8a //"Kraftige/svære smerter (3)"
* KLToolsCodes#a3f25054-9f1d-4256-afa2-c1035b0bdd41 //"Uudholdelige/værst tænkelige smerter (4)"

ValueSet: VRSSCTfindingsPain
Title: "VRSSCTfindingsPain"
Description: "SNOMED CT findings for VRS pain"
* ^experimental = false
* SCT#160245001 // No current problems or disability
* SCT#40196000 //|Mild pain (finding)|
* SCT#50415004 //|Moderate pain (finding)|
* SCT#76948002 //|Severe pain (finding)|
* SCT#67849003 //|Excruciating pain (finding)|

ValueSet: ConsciousnessCodes
Title: "ConsciousnessCodes"
Description: "Findings for Counsciousness"
* ^experimental = false
* KLToolsCodes#4d5eeb61-a9b4-40cc-af45-4e8e2caa6db0 //Agiteret (1)
* KLToolsCodes#fc025609-8d3c-4d36-aa44-19fe839d548f //Habituel (0)
* KLToolsCodes#916b3530-23e2-4c11-8973-52a90bc9ec31 //Reagerer kun på tiltale (1)
* KLToolsCodes#0000e850-a51d-4867-a901-dd4c6a2a46a1 //Reagerer kun på smerte (2)
* KLToolsCodes#55da9922-c22b-4bd2-b842-e200048bfb20 //Ingen reaktion (3)

ValueSet: ConsciousnessSCTFindings
Title: "ConsciousnessSCTFindings"
Description: "SNOMED CT findings for consciousness"
* ^experimental = false
* SCT#419567006 //|delirøs|
* SCT#271591004 //|ved fuld bevidsthed|
* SCT#300202002 //|Reagerer på stemme|
* SCT#450847001 //|Responds to pain (finding)|
* SCT#422768004 //|reagerer ikke|

ValueSet: BodyweightSCTobservables
Title: "BodyweightSCTobservables"
Description: "SNOMED CT observables for weight"
* ^experimental = false
//* codes from system http://snomed.info/sct where constraint = "(<< 27113001 | Body weight (observable entity) | MINUS (<< 248350002 | Reference weight (observable entity) | OR << 301334000 | Birth weight centile (observable entity) |))"
* SCT#424927000 //	Body weight with shoes	
* SCT#445541000	// Dry body weight	
* SCT#425024002	// Body weight without shoes	
* SCT#364589006	//Birth weight	
* SCT#27113001	//Body weight

ValueSet: BodyheightSCTobservables
Title: "BodyheightSCTobservables"
Description: "SNOMED CT observables for height"
* ^experimental = false
* SCT#248334005 //|Length of body (observable entity)|
* SCT#276351002 // |Infant length (observable entity)|
* SCT#276353004 //|Crown heel length (observable entity)|
* SCT#248333004 //|Standing height (observable entity)|

ValueSet: HeartRateSCTobservables
Title: "HeartRateSCTobservables"
Description: "SNOMED CT observables for heart rate"
* ^experimental = false
//* codes from system http://snomed.info/sct where constraint = "(<< 364075005 | Heart rate (observable entity) | MINUS 428420003 | Target heart rate (observable entity) |)"
* SCT#422119006	//Brachial pulse rate	
* SCT#429614003	//Posterior tibial pulse rate	
* SCT#429525003	//Dorsalis pedis pulse rate	
* SCT#399017001	//Heart rate on admission	
* SCT#78564009	//Pulse rate	
* SCT#444981005	//Resting heart rate	
* SCT#364075005	//Heart rate

ValueSet: OxygenSaturationSCTobservables
Title: "OxygenSaturationSCTobservables"
Description: "SNOMED CT observables for oxygen saturation"
* ^experimental = false
* codes from system SCT where concept is-a #431314004

ValueSet: SystolicBloodPressureSCTObservables
Title: "SystolicBloodPressureSCTObservables"
Description: "SNOMED CT observables for systolic blood pressure"
* ^experimental = false
* SCT#72313002	//Systolic arterial pressure
* SCT#400974009	//Standing systolic blood pressure	
* SCT#399304008	//Systolic blood pressure on admission	
* SCT#407556006	//Lying systolic blood pressure	
* SCT#407554009	//Sitting systolic blood pressure	
* SCT#271649006	//Systolic blood pressure

ValueSet: DiastolicBloodPressureSCTObservables
Title: "DiastolicBloodPressureSCTObservables"
Description: "SNOMED CT observables for diastolic blood pressure"
* ^experimental = false
//* codes from system http://snomed.info/sct where constraint = "(<< 271650006 | Diastolic blood pressure (observable entity) | MINUS (<< 314465004 | 24 hour diastolic blood pressure (observable entity) | OR << 716632005 | Baseline diastolic blood pressure (observable entity) | OR << 315613000 | Target diastolic blood pressure (observable entity) |))"
* SCT#446226005	//Diastolic blood pressure on admission	
* SCT#400975005	//Standing diastolic blood pressure	
* SCT#407557002	//Lying diastolic blood pressure	
* SCT#407555005	//Sitting diastolic blood pressure	
* SCT#271650006	//Diastolic blood pressure

ValueSet: RespirationRateSCTObservables
Title: "RespirationRateSCTObservables"
Description: "SNOMED CT observables for respiratory rate"
* ^experimental = false
* codes from system SCT where concept is-a #86290005 //(Respiratory rate)

ValueSet: BodyTemperatureSCTObservables
Title: "TemperatureSCTObservables"
Description: "SNOMED CT observables for temperature"
* ^experimental = false
* codes from system SCT where concept is-a #276885007 // Core Body temperature

ValueSet: SCTUrinStix 
Title: "SCTUrinStix"
Description: "SNOMED CT evaluation procedure codes for urin stix"
* ^experimental = false
* SCT#271000000 //|Urine albumin measurement (procedure)|
* SCT#313668003 //|Urine vitamin C measurement (procedure)|
* SCT#252384001 //|Urine dipstick for bilirubin (procedure)|
* SCT#271260009 //|Urine creatinine measurement (procedure)|
* SCT#270894005 //|Urine dipstick for blood (procedure)|
* SCT#269879003 //|Urine dipstick for glucose (procedure)|
* SCT#275714003 //|Urine dipstick for hemoglobin (procedure)|
* SCT#271347000 //|Measurement of ketones in urine using dipstick (procedure)|
* SCT#252385000 //|Urine dipstick for leukocyte esterase (procedure)|
* SCT#302791006 //|Urine dipstick for nitrite (procedure)|
* SCT#271348005 //|Urine dipstick for pH (procedure)|
* SCT#271346009 //|Urine dipstick for protein (procedure)|
* SCT#252386004 //|Urine dipstick for specific gravity (procedure)|
* SCT#167321001 //|Urine dipstick for urobilinogen (procedure)|
* SCT#167381004 //|Urine luteinizing hormone measurement (procedure)|

// ValueSet: LOINCUrinStix
// Title: "LOINCUrinStix"
// Description: "LOINC observables for urin stix"
// * LOINC#11218-5 //Microalbumin [Mass/volume] in Urine by Test strip - NPU17997
// * LOINC#5768-7 //Ascorbate [Mass/volume] in Urine by Test strip
// * LOINC#20505-4 //Bilirubin.total [Mass/volume] in Urine by Test strip
// * LOINC#30004-6 //Creatinine [Mass/volume] in Urine by Test strip - NPU04998
// * LOINC#20409-9 //Erythrocytes [#/volume] in Urine by Test strip – NPU04208 *
// * LOINC#5792-7 //Glucose [Mass/volume] in Urine by Test strip - NPU04207
// * LOINC#49137-3 //Hemoglobin [Mass/volume] in Urine by Test strip - NPU04208 *
// * LOINC#5797-6 //Ketones [Mass/volume] in Urine by Test strip - NPU10504
// * LOINC#20408-1 //Leukocytes [#/volume] in Urine by Test strip - NPU03987
// * LOINC#20407-3 //Nitrite [Mass/volume] in Urine by Test strip - NPU21578 (Indgår ofte i NPU14924)
// * LOINC#5803-2 //pH of Urine by Test strip - NPU02415
// * LOINC#5804-0 //Protein [Mass/volume] in Urine by Test strip - NPU03277
// * LOINC#5811-5 //Specific gravity of Urine by Test strip
// * LOINC#20405-7 //Urobilinogen [Mass/volume] in Urine by Test strip - NPU17997 U—Albumin; arb.k.(proc.) = ?
// * LOINC#15079-7 //Lutropin [Units/volume] in Urine

ValueSet: NPUUrinStix
Title: "NPUUrinStix"
Description: "NPU observables for urin stix"
* ^experimental = false
* NPU#NPU14924 "U—Urin; egenskabsart(liste; stix; proc.)"
* NPU#NPU10504 "U—Acetoacetat; arb.k.(proc.) = ?"
* NPU#NPU17997 "U—Albumin; arb.k.(proc.) = ?"
* NPU#NPU10506 "U—Bacterium, nitrit-producerende; arb.k.(proc.) = ?"
* NPU#NPU01372 "U—Bilirubiner; arb.k.(proc.) = ?"
* NPU#NPU03963 "U—Erythrocytter; arb.k.(proc.) = ?"
* NPU#NPU04207 "U—Glucose; arb.k.(proc.) = ?"
* NPU#NPU02415 "U—Hydrogen-ion; pH(proc.) = ?"
* NPU#NPU04208 "U—Hæmoglobin; arb.k.(proc.) = ?"
* NPU#NPU03987 "U—Leukocytter; arb.k.(proc.) = ?"
* NPU#NPU21578 "U—Nitrit; arb.k.(proc.) = ?"
* NPU#NPU04864 "U—Porphobilinogen; arb.k.(proc.) = ?"
* NPU#NPU04206 "U—Protein; arb.k.(proc.) = ?"
* NPU#NPU03694 "Pt—Urin; rel.massetæthed(20 °C/vand, 20 °C; proc.) = ?"
* NPU#NPU03697 "U—Urobilinogen; arb.k.(proc.) = ?"


---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/index.md

# municipalityTools
This implementation guide contains FHIR profiles and documentation relating to questionaires and observations, specified by Local Government Denmark, [Kommunernes Landsforening or KL](https://www.kl.dk/) in Danish. KL is a non-profit organisation financed by the Danish municipalities. The Danish municipalities deliver health and social care in homes, nursing homes and local facilities.

The Implementation guide is a derivative of the Common Municipality Information Model (FKI). The FKI FHIR profiles can be used to exchange and report health care and social care data from Danish municipalities. See more her: http://build.fhir.org/ig/hl7dk/KL-dk/

### Dependencies
{% include dependency-table.xhtml %}

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles
{% include globals-table.xhtml %}

### IP Statements
{% include ip-statements.xhtml %}

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/Questionnaire-KLToolsCareEQ5D-intro.md

### Scope and usage
Questionnnaire for meassuring the health related life quality. The Questionnnaire consist of a descriptive part with five questions and a visual analog scale for overall health condition.

### Explaination of the questionnaire
Each of the questions, the visual-analog scale and the comment has its own item.

Each of the five questions have the item.type 'choice', a linkId that relates to the content of the question e.g. "mobility" and "hygiene", and a SNOMED CT observation code that points to the semantic content of the question e.g. 301438001 'Ability to mobilize (observable entity)' for the first question and  284773001 'Ability to perform personal care activity (observable entity)' for the second. Each have an answer value set, consisting of the appropiate values for EQ-5D-L3 i.e. three levels for each questions. However, the codes are local codes, since no overall international or Danish standard exist.

The visual-analog scale has the item.type 'integer', linkId "vas" and a SNOMED CT item.code 736535009 'EuroQol visual analogue score (observable entity)' It has a max value of 100 and a min value of 0.

The comment has the linkId "eq5dcomment"

### Using the questionnaire
When instantiating this questionnaire, please use the KLToolsQuestionnaireResponse, and remember to explicitely state the findingInformer as required by KL.

When using this questionnaire in a municipality setting, where the answers can be re-used in rutine documentation e.g. the mobility question says something about the home care area "Mobility", please represent these re-usable items as Observations to get maximum re-usability. For this questionnaire five reusable observations have been identified:

* [EQ-5D mobility](StructureDefinition-KLToolsCareEQ5DObservationMobility.html)
* [EQ-5D hygiene](StructureDefinition-KLToolsCareEQ5DObservationHygiene.html)
* [EQ-5D activity](StructureDefinition-KLToolsCareEQ5DObservationActivity.html)
* [EQ-5D pain](StructureDefinition-KLToolsCareEQ5DObservationPain.html)
* [EQ-5D anxiety](StructureDefinition-KLToolsCareEQ5DObservationAnxiety.html)

Note that the overall index is not represented in the questionnaire and neither as an Observation. In this implementation guide, it has been chosen to focus on primary data only. However, if a score is needed, we recommend instantiating a KLCommonCareSocialObservation, using 736534008 'EuroQol five dimension five level index value (observable entity)' as observation code, and representing the index as a decimal in Observation.valueQuantity. Link to the QuestionnaireResponse in Observation.derivedFrom


---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/Questionnaire-KLToolsCareWHO-5-intro.md

### Scope and usage
Questionnnaire for meassuring general well-being. The Questionnnaire consist of five questions, each to be scored on a six level scale. 

### Explaination of the questionnaire
Each of the questions and the comment has its own item.

Each of the five questions have the item.type 'choice', a linkId that relates to the content of the question e.g. "rested" and "calm", and a SNOMED CT observation code that points to the semantic content of the question e.g. 285854004 'Emotion (observable entity)' for the first question. Each have an answer value set, consisting of the appropiate values for WHO-5 i.e. six levels for each questions. However, the codes are local codes, since no overall international or Danish standard exist.

The comment has the linkId "who5comment"

### Using the questionnaire
When instantiating this questionnaire, please use the KLToolsQuestionnaireResponse, and remember to explicitely state the findingInformer as required by KL.

When using this questionnaire in a municipality setting, where the answers can be re-used in rutine documentation e.g. the mobility question says something about the home care area "Mobility", please represent these re-usable items as Observations to get maximum re-usability. For this questionnaire five reusable observations have been identified:

* [WHO-5 happy](StructureDefinition-KLToolsWHO5ObservationHappy1.html)
* [WHO-5 calm](StructureDefinition-KLToolsWHO5ObservationCalm2.html)
* [WHO-5 active](StructureDefinition-KLToolsWHO5ObservationActive3.html)
* [WHO-5 rested](StructureDefinition-KLToolsWHO5ObservationRested4.html)
* [WHO-5 interest](StructureDefinition-KLToolsWHO5ObservationInterest5.html)

Note that the overall index is not represented in the questionnaire and neither as an Observation. In this implementation guide, it has been chosen to focus on primary data only. However, if a score is needed, we recommend instantiating a KLCommonCareSocialObservation, using 1144665009 '5-item World Health Organization Well-being Index value (observable entity)' as observation code, and representing the index as a decimal in Observation.valueQuantity. Link to the QuestionnaireResponse in Observation.derivedFrom


---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCare6minwalk-intro.md

### Scope and usage
KLToolsCare6minwalk is an Observation that holds the results of a Six-Minute Walk Test (6MWT). Its intended use is Danish municipalities. A Six-Minute Walk Test is used to evaluate the fuctional ability, which meassure how many meters a person can walk in 6 minutes.

#### Test-setup
The citizen walks on a surface with a length of 20-50meters 

#### Citizen performance
The citizen has performed the test without the use af walking aids or other physical support.

#### Using the model
The Observation.code is fixed to the SNOMED CT code 165263003 "Walking distance (observable entity)"
and the more precise LOINC code 64098-7 "Walking distance 6 minutes"

Observation.value[x] is of type Observation.valueQuantity. It should contain a positive decimal in Observation.valueQuantity.value, and use the UCUM unit for meter.

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. In addition, use the SNOMED CT code 761996005 'Estimation technique (qualifier value)' if the procedure standard has not been followed, and 272391002 'Measurement technique (qualifier value)' otherwise.

Observation.note.text may be used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|6MinutterGangKode|Klasse som udtrykker, at der observeres på borgers evne til at gå i 6 minutter.|Observation.code|
|6MinutterGangResultat|Decimaltal, der udtrykker, antallet af meter, borgeren kunne gå. |Observation.valueQuantity.value|
|6MinutterGangEnhed|Klasse, der udtrykker, at den enhed der anvendes er meter.|Observation.valueQuantity.system and Observation.valueQuantity.code|
|6MinutterGangsubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|6MinutterGangkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|6MinutterGangansvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|6MinutterGangprocedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|6MinutterGangtid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|6MinutterGangbemærkning|Bemærkning vedr. observationen|Observation.note.text|
|6MinutterGangstatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareBloodPressure-intro.md

### Scope and usage
KLToolsCareBloodPressure is an observation of blood pressure. Its intended use is Danish municipalities.

#### Test-setup
The blood pressure of the citizen is meassured using an appropriate device (typically but not always meassuring the pressure in a. brachialis in the upper arm).

#### Citizen performance
The citizen is standing, sitting or lying still, and is calm throughout the meassurement.

#### Using the model
The Observation.code is fixed to a single LOINC code 85354-9 'Blood pressure panel with all children optional' and a SNOMED CT code for Blood pressure 75367002 'Blood pressure (observable entity)'.

The result of the blood pressure observation is a systolic and diastolic blood pressure. They are each represented as an Observation.component.

The systolic blood pressure component have an observation code: Observation.component.code. This code is bound to the Loinc code: 8480-6 'Systolic blood pressure' and a ValueSet with different SNOMED CT codes for systolic blood pressure. The SNOMED CT code 271649006 'Systolic blood pressure' is appropriate for most use cases. However, the precision of the data can be improved by choosing one of the SNOMED CT codes that specify the position of the subject. The result of a systolic blood pressure meassurement is represented in Observation.component.valueQuantity. It should contain a positive decimal, and use the UCUM unit for mmHg.

The diastolic blood pressure component have an observation code: Observation.component.code. This code is bound to the Loinc code: 8462-4 'Diastolic blood pressure' and a ValueSet with different SNOMED CT codes for diastolic blood pressure. The SNOMED CT code 271650006 'Diastolic blood pressure' is appropriate for most use cases. However, the precision of the data can be improved by choosing one of the SNOMED CT codes that specify the position of the subject. The result of a diastolic blood pressure meassurement is represented in Observation.component.valueQuantity. It should contain a positive decimal, and use the UCUM unit for mmHg.

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. In addition, use the SNOMED CT code 761996005 'Estimation technique (qualifier value)' if the procedure standard has not been followed, and 272391002' Measurement technique (qualifier value)' otherwise.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 106063007 'Cardiovascular finding'.

Observation.note.text may be used to hold remarks about the observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|BlodtryksKode|Klasse som udtrykker, at der observeres på borgers blodtryk.|Observation.code|
|SystoliskBlodtrykKode|Klasse som udtrykker, at der observeres på borgers systoliske blodtryk.|Observation.component[SystolicBP].code|
|SystoliskBlodtrykResultat|Decimaltal, der udtrykker blodtrykket i mmHg|Observation.component[SystolicBP].valueQuantity.value|
|SystoliskBlodtrykEnhed|Klasse, der udtrykker, at den enhed der anvendes er mmHg.|Observation.component[SystolicBP].code and Observation.component[SystolicBP].system|
|DiastoliskBlodtrykKode|Klasse som udtrykker, at der observeres på borgers diastoliske blodtryk.|Observation.component[DiastolicBP].code|
|DiastoliskBlodtrykResultat|Decimaltal, der udtrykker blodtrykket i mmHg- |Observation.component[DiastolicBP].valueQuantity.value|
|DiastoliskBlodtrykEnhed|Klasse, der udtrykker at den enhed der anvendes er mmHg. |Observation.component[DiastolicBP].code and Observation.component[DiastolicBP].system|
|BlodtryksSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|BlodtryksKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|BlodtryksAnsvarlig|Den fagperson, der er ansvarlig for observationen.|Observation.performer|
|BlodtryksProcedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|BlodtryksTid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|BlodtryksAssocieretTilstand|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|BlodtryksBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|BlodtryksStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareBodyHeight-intro.md

### Scope and usage
KLToolsCareBodyHeight is an observation of height. Its intended use is Danish municipalities.

#### Test-setup
The length of the citizens body is meassured standing or lying down.

#### Citizen performance
The citizen holds a steady lying or standing pose

#### Using the model
The Observation.code is fixed to a single LOINC code 8302-2 "Body height" and a ValueSet with different SNOMED CT codes for height. The SNOMED CT code 248334005 |Length of body (observable entity)| is appropriate for most use cases.

Observation.value[x] is of type Observation.valueQuantity. It should contain a positive decimal in Observation.valueQuantity.value, and use the UCUM unit for centimeter.

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. The SNOMED CT code is 761996005 'Estimation technique (qualifier value)' if the procedure standard has not been followed, and 272391002' Measurement technique (qualifier value)' otherwise. However, if the height is obtained, by asking the citizen about their height, Observation.method should be set to FFInst: 6713249a-433e-4b93-8975-0214a47 Afvigelse i borgers udførelse og test-setup, and SNOMED CT: 733985002|Reported (qualifier value)|.

Observation.note.text may be used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|HøjdeKode|Klasse som udtrykker, at der observeres på borgers højde.|Observation.code|
|HøjdeResultat|Decimaltal, der udtrykker, antallet af centimeter, borgeren er høj. |Observation.valueQuantity.value|
|HøjdeEnhed|Klasse, der udtrykker, at den enhed der anvendes er centimeter.|Observation.valueQuantity.system and Observation.valueQuantity.code|
|Højdesubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|Højdekontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|Højdeansvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|HøjdeProcedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|Højdetid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|HøjdeBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|HøjdeStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareBodyTemperature-intro.md

## Scope and usage
KLToolsCareBodyTemperature is an observation of core body temperature. Its intended use is Danish municipalities.

#### Test-setup
The citizen's temperature is meassured using an appropriate device.

#### Citizen performance
The citizen is steady enough for the meassurement to occur

#### Using the model
The Observation.code is fixed to a single LOINC code 8310-5 "Body temperature" and a ValueSet with different SNOMED CT codes for temperature. The SNOMED CT codes can be used to specify, where the temperature have been meassured, if it is of importance. Otherwise just use 276885007 'Core body temperature (observable entity)'.

Observation.value[x] is of type Observation.valueQuantity. It should contain a positive decimal in Observation.valueQuantity.value, and use the UCUM unit for degree Celcius.

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. The SNOMED CT code is 761996005 'Estimation technique (qualifier value)' if the procedure standard has not been followed, and 272391002' Measurement technique (qualifier value)' otherwise.

Observation.note.text is used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|TemperaturKode|Klasse som udtrykker, at der observeres på borgers temperatur.|Observation.code|
|TemperaturResultat|Decimaltal, der udtrykker, borgerens temperatur i grader.|Observation.valueQuantity.value|
|TemperaturEnhed|Klasse, der udtrykker, at den enhed der anvendes er grader Celcius.|Observation.valueQuantity.system and Observation.valueQuantity.code|
|Temperatursubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|Temperaturkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|Temperaturansvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|TemperaturProcedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|Temperaturtid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|TemperaturBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|TemperaturStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareBodyWeight-intro.md

## Scope and usage
KLToolsCareBodyWeight is an observation of body weight. Its intended use is Danish municipalities.

#### Test-setup
The weight of the citizen's body is meassured using an appropriate device.

#### Citizen performance
The citizen is steady, and do not rest any bodyparts on furniture or walking aids.

#### Using the model
The Observation.code is fixed to a single LOINC code 29463-7 'Body weight' and a ValueSet with different SNOMED CT codes for weight. The SNOMED CT code 27113001	'Body weight' is appropriate for most use cases.

Observation.value[x] is of type Observation.valueQuantity. It should contain a positive decimal in Observation.valueQuantity.value, and use the UCUM unit for kilogram (kg) or gram (g).

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. The SNOMED CT code is 761996005 'Estimation technique (qualifier value)' if the procedure standard has not been followed, and 272391002' Measurement technique (qualifier value)' otherwise. However, if the weight is obtained, by asking the citizen about their weight, Observation.method should be set to FFInst: 6713249a-433e-4b93-8975-0214a47 Afvigelse i borgers udførelse og test-setup, and SNOMED CT: 733985002|Reported (qualifier value)|.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 107647005 'Weight finding (finding)'.

Observation.note.text may be used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|VægtKode|Klasse som udtrykker, at der observeres på borgers vægt.|Observation.code|
|VægtResultat|Decimaltal, der udtrykker, antallet af kilo eller gram, borgeren vejer. |Observation.valueQuantity.value|
|VægtEnhed|Klasse, der udtrykker, at den enhed der anvendes er kilo eller gram.|Observation.valueQuantity.system and Observation.valueQuantity.code|
|Vægtsubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|Vægtkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|Vægtansvarlig|Den fagperson, der er ansvarlig for observationen.|Observation.performer|
|VægtProcedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|Vægttid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|VægtAssocieretTilstand|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med|Observation:extension.associatedCondition|
|VægtBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|VægtStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareConsciousness-intro.md

## Scope and usage
KLToolsCareConciousness is a structured assessment of conciousness, as defined by TOBS. Its intended use is Danish municipalities.

#### Test-setup
The observation is performed at a time of day, where the citizen is normally awake. 

#### Citizen performance
The result is based on the performer's clinical observation of the citizen, at the observation-time. I.e. the result is not obscured by next-of-kin or other employees, that tries to report another finding, than what the perfomer is observing. 

#### Using the model
The Observation.code is fixed to a SNOMED CT code 444714004 'Assessment of consciousness level (procedure)'.

Observation.value[x] is of type Observation.valueCodeableConcept. Both a municipality TOBS-specific ValueSet and a SNOMED CT ValueSet define the valid values. 

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 106167005 'Consciousness related finding (finding)'.

Observation.note.text may be used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|BevidsthedKode|Klasse som udtrykker, at borgers bevidsthed vurderes.|Observation.code|
|BevidsthedResultat|Klasse, der udtrykker borgers bevidsthedsniveau.|Observation.valueCodeableConcept|
|BevidsthedSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|BevidsthedKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|BevidsthedAnsvarlig|Den fagperson, der er ansvarlig for observationen af bevidsthed.|Observation.performer|
|BevidsthedProcedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|BevidsthedTid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|BevidsthedAssocieretTilstand|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med|Observation:extension.associatedCondition|
|BevidsthedBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|BevidsthedStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareEQ5DObservationActivity-intro.md

### Scope and Usage
EQ-5D activity is used to represent the result of the question about activity in an EQ-5D questionnaire.

Observation.code is fixed to the SNOMED CT code 284545001 'Ability to perform activities of everyday life (observable entity)'

the value[x] is a valueCodeableConcept, which is bound to the answers from the questionaire, and a more generalized SNOMED CT ValueSet. The latter coding is included to allow for better data extraction.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 118233009 'Finding of activity of daily living (finding)'.

Observations.derivedFrom has a mandatory reference to the questionnaire response, that produced this observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|EQ5DAktivitetKode|Klasse som udtrykker, at der observeres på borgers EQ-5D Aktivitet.|Observation.code|
|EQ5DAktivitetResultat|Klasse, der udtrykker, svaret på spørgsmålet vedrørende Aktivitet |Observation.valueCodeableConcept.coding|
|EQ5DAktivitetsubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|EQ5DAktivitetkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|EQ5DAktivitetansvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|EQ5DAktivitetKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|EQ5DAktivitetAssocieretFund|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|EQ5DAktivitettid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|EQ5DAktivitetStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|



---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareEQ5DObservationAnxiety-intro.md

### Scope and Usage
EQ-5D anxiety is used to represent the result of the question about anxiety and depression in an EQ-5D questionnaire.

Observation.code is fixed to the SNOMED CT code 285854004 'Emotion (observable entity)'

the value[x] is a valueCodeableConcept, which is bound to the answers from the questionaire, and a more generalized SNOMED CT ValueSet. The latter is included to allow for better data extraction.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 106126000 'Emotional state finding (finding)'.

Observations.derivedFrom has a mandatory reference to the questionnaire response, that produced this observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|EQ5DAngstKode|Klasse som udtrykker, at der observeres på borgers EQ-5D Angst.|Observation.code|
|EQ5DAngstResultat|Klasse, der udtrykker, svaret på spørgsmålet vedrørende angst |Observation.valueCodeableConcept.coding|
|EQ5DAngstsubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|EQ5DAngstkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|EQ5DAngstansvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|EQ5DAngstKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|EQ5DAngstAssocieretFund|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|EQ5DAngsttid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|EQ5DAngstStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareEQ5DObservationHygiene-intro.md

### Scope and Usage
EQ-5D hygiene is used to represent the result of the question about hygiene in an EQ-5D questionnaire.

Observation.code is fixed to the SNOMED CT code 284773001 'Ability to perform personal care activity (observable entity)'

the value[x] is a valueCodeableConcept, which is bound to the answers from the questionaire, and a more generalized SNOMED CT ValueSet. The latter coding is included to allow for better data extraction.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 365179009 'Finding related to ability to perform personal hygiene activity (finding)'.

Observations.derivedFrom has a mandatory reference to the questionnaire response, that produced this observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|EQ5DHygiejneKode|Klasse som udtrykker, at der observeres på borgers EQ-5D hygiejne.|Observation.code|
|EQ5DHygiejneResultat|Klasse, der udtrykker, svaret på spørgsmålet vedrørende hygiejne |Observation.valueCodeableConcept.coding|
|EQ5DHygiejnesubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|EQ5DHygiejnekontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|EQ5DHygiejneansvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|EQ5DHygiejneKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|EQ5DHygiejneAssocieretFund|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|EQ5DHygiejnetid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|EQ5DHygiejneStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|



---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareEQ5DObservationMobility-intro.md

### Scope and Usage
EQ-5D mobility is used to represent the result of the first question about mobility in an EQ-5D questionnaire.

Observation.code is fixed to the SNOMED CT code 301438001 'Ability to mobilize (observable entity)'

the value[x] is a valueCodeableConcept, which is bound to the answers from the questionaire, and a more generalized SNOMED CT ValueSet. The latter coding is included to allow for better data extraction.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 364832000 'Finding related to ability to perform gross motor function (finding)'.

Observations.derivedFrom has a mandatory reference to the questionnaire response, that produced this observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|EQ5DMobilitetKode|Klasse som udtrykker, at der observeres på borgers EQ-5D Mobilitet.|Observation.code|
|EQ5DMobilitetResultat|Klasse, der udtrykker, svaret på spørgsmålet vedrørende mobilitet |Observation.valueCodeableConcept.coding|
|EQ5DMobilitetsubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|EQ5DMobilitetkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|EQ5DMobilitetansvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|EQ5DMobilitetKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|EQ5DMobilitetAssocieretFund|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|EQ5DMobilitettid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|EQ5DMobilitetStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareEQ5DObservationPain-intro.md

### Scope and Usage
EQ-5D pain is used to represent the result of the question about pain in an EQ-5D questionnaire.

Observation.code is fixed to the SNOMED CT code 364624006 'Pain / sensation observable (observable entity)'

the value[x] is a valueCodeableConcept, which is bound to the answers from the questionaire, and a more generalized SNOMED CT ValueSet. The latter coding is included to allow for better data extraction.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 106147001 'Sensory nervous system finding (finding)'.

Observations.derivedFrom has a mandatory reference to the questionnaire response, that produced this observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|EQ5DSmerteKode|Klasse som udtrykker, at der observeres på borgers EQ-5D Smerte.|Observation.code|
|EQ5DSmerteResultat|Klasse, der udtrykker, svaret på spørgsmålet vedrørende Smerte |Observation.valueCodeableConcept.coding|
|EQ5DSmertesubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|EQ5DSmertekontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|EQ5DSmerteansvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|EQ5DSmerteKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|EQ5DSmerteAssocieretFund|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|EQ5DSmertetid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|EQ5DSmerteStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|



---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareHeartRate-intro.md

## Scope and usage
KLToolsCareHeartRate is an observation of heart rate. Its intended use is Danish municipalities.

#### Test-setup
The heart rate of the citizen is meassured using an appropriate device (typically but not always meassuring pulse in a. brachialis in the upper arm), or by palpation of arteria radialis (wrist), a. corotis communis (throat), a. temporalis superficialis (in front of the ear), a. femoralis (groin), a. tibialis posterior (ankel), or a. dorsalis pedis (dorsum of foot). 15 seconds is the minimal meassuring time if heart rate is meassured by palpation.

#### Citizen performance
The citizen is sitting or lying still, and is calm throughout the meassurement.

#### Using the model
The Observation.code is fixed to a single LOINC code 8867-4 'Heart rate' and a ValueSet with different SNOMED CT codes for heart rate. The SNOMED CT code 364075005 'Heart rate (observable entity)' is appropriate for most use cases. However, a pulse rate might be meassured in the foot, to obseve the status of the vascular system, and the risk of ulcers. If so, please use the appropriate SNOMED CT codes 429525003 'Heart rate measured at dorsalis pedis artery (observable entity)' or 429614003 'Heart rate measured at posterior tibial artery (observable entity)'. 

Observation.value[x] is of type Observation.valueQuantity. It should contain a positive decimal in Observation.valueQuantity.value, and use the UCUM unit for 'per minute'.

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. In addition, use the SNOMED CT code 761996005 'Estimation technique (qualifier value)' if the procedure standard has not been followed, and 272391002' Measurement technique (qualifier value)' otherwise.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 106063007 'Cardiovascular finding'.

Observation.note.text may be used to hold remarks about the observation. Ideally, pulse rythm and pulse volume (pulsens rytme og kvalitet) should not be recorded here. They are better recorded using separate observations. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|HjertefrekvensKode|Klasse som udtrykker, at der observeres på borgers hjertefrekvens.|Observation.code|
|HjertefrekvensResultat|Decimaltal, der udtrykker, antallet af hjerteslag pr. minut. |Observation.valueQuantity.value|
|HjertefrekvensEnhed|Klasse, der udtrykker, at den enhed der anvendes er /min.|Observation.valueQuantity.system and Observation.valueQuantity.code|
|HjertefrekvensSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|HjertefrekvensKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|HjertefrekvensAnsvarlig|Den fagperson, der er ansvarlig for observationen.|Observation.performer|
|HjertefrekvensProcedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|HjertefrekvensTid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|HjertefrekvensAssocieretTilstand|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|HjertefrekvensBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|HjertefrekvensStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareOxygenSaturation-intro.md

## Scope and usage
KLToolsCareOxygenSaturation is an observation of oxygen saturation. Its intended use is Danish municipalities.

#### Test-setup
The oxygen saturation of the citizen is meassured using an appropriate device, and a prope appropriate for the place where the oxygen saturation is meassured. The device is not subjected to bright light e.g. direct sunlight during the meassurment. The place of meassurment have no articifial colouring i.e. nail polish, henna or tatoos.  

#### Citizen performance
The citizen is at rest, and holds steady. 

#### Using the model
The Observation.code is fixed to a single LOINC code 2708-6 'Oxygen saturation in Arterial blood' and a ValueSet with a single SNOMED CT codes for oxygen saturation: 431314004 |Peripheral oxygen saturation (observable entity)|, which is appropriate for all use cases.

Observation.value[x] is of type Observation.valueQuantity. It should contain a positive decimal in Observation.valueQuantity.value, and use the UCUM unit for percent.

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. In addition, use the SNOMED CT code 761996005 'Estimation technique (qualifier value)' if the procedure standard has not been followed, and 272391002' Measurement technique (qualifier value)' otherwise.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 106048009 "Respiratory finding (finding)".

Observation.note.text may be used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|IltmætningKode|Klasse som udtrykker, at der observeres på borgers iltmætning.|Observation.code|
|IltmætningResultat|Decimaltal, der udtrykker, iltmætningen procentvis. |Observation.valueQuantity.value|
|IltmætningEnhed|Klasse, der udtrykker, at den enhed der anvendes er /min.|Observation.valueQuantity.system and Observation.valueQuantity.code|
|IltmætningSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|IltmætningKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|IltmætningAnsvarlig|Den fagperson, der er ansvarlig for observationen.|Observation.performer|
|IltmætningProcedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|IltmætningTid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|IltmætningAssocieretTilstand|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|IltmætningBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|IltmætningStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCarePainVAS-intro.md

## Scope and usage
PainVAS is an observation of pain intensity using a visual scale. Please note that this implementation guide also include a verbal rating scale for pain, and use the two profiles according the context.

#### Test-setup
The visual scale is 100mm long without subdivisions. The starting point is marked with "no pain" and the end point is marked with "Worst imaginable/unbearable pain"
The score is meassured as the distance in mm from the starting point, to the mark set by the citizen.

#### Citizen performance
The citizen sets a mark on the line. Encouragement from the perfomer is fine. Influences from other persons e.g. next-of-kin placing the mark or saying where to place the mark, is not. For citizens with hand mobility problems, physical assistance with placing the mark according to the the wishes of the citizen is acceptable. 

#### Using the model
The Observation.code is fixed to the SNOMED CT code 443394008 'Visual analog scale pain score'.

Observation.value[x] is of type integer, and should be a number between 0 and 100.

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. In addition, use the SNOMED CT code 761996005 'Estimation technique (qualifier value)' if the procedure standard has not been followed, and 272391002' Measurement technique (qualifier value)' otherwise.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code SCT#22253000 'Pain (finding)'.

Observation.note.text may be used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|SmerteVASKode|Klasse som udtrykker, at der observeres på borgers Smerte målt vha. VAS.|Observation.code|
|SmerteVASResultat|Heltal, der udtrykker, SmerteVAS scoren. |Observation.valueQuantity.value|
|SmerteVASSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|SmerteVASKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|SmerteVASAnsvarlig|Den fagperson, der er ansvarlig for observationen.|Observation.performer|
|SmerteVASProcedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|SmerteVASTid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|SmerteVASAssocieretTilstand|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|SmerteVASBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|SmerteVASStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCarePainVRS-intro.md

## Scope and usage
PainVAS is an observation of pain intensity using a verbal rating scale. Please note that this implementation guide also include a visual rating scale for pain, and use the two profiles according the context.

#### Using the model
The Observation.code is fixed to the SNOMED CT code 225908003 'Pain score (observable entity'

Observation.value[x] is a valueCodeableConcept, which is bound to a five-level rating scale for pain. The rating scale is expressed using the Danish original rating scale with local codes, and with an equivalent SNOMED CT ValueSet.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code SCT#22253000 'Pain (finding)'.

Observation.note.text may be used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|SmerteVRSKode|Klasse som udtrykker, at der observeres på borgers Smerte målt vha. VRS.|Observation.code|
|SmerteVRSResultat|Klasse som udtrykker smerteintensiteten|Observation.value[x]|
|SmerteVRSSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|SmerteVRSKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|SmerteVRSAnsvarlig|Den fagperson, der er ansvarlig for observationen.|Observation.performer|
|SmerteVRSKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|SmerteVRSTid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|SmerteVRSAssocieretTilstand|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|SmerteVRSBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|SmerteVRSStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareQuestionnaireResponse-intro.md

### Scope and usage
QuestionnaireResponse profile, for all Questionaires in KLTools. It is a small extension of the FHIR QuestionnaireResponse resource. It includes two extensions that allow finding informer and techniqe to be specified. Note that only the finding informer is mandatory for KLTools questionnaires. Techniqe should only be specified if the questionnaire include a meassurement of some kind.


---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareRespirationRate-intro.md

## Scope and usage
KLToolsCareRespirationRate is an observation of rate of respiration. Its intended use is Danish municipalities.

#### Test-setup
The respiration rate of the citizen is meassured by counting number of breaths in a whole minute, while the citizen is at rest, or by using an appropriate device.

#### Citizen performance
The citizen is sitting or lying still, and is calm throughout the meassurement.

#### Using the model
The Observation.code is fixed to a single LOINC code 9279-1 'Respiratory rate' and a ValueSet with different SNOMED CT codes for respiratory rate. The SNOMED CT code 86290005 'Respiratory rate (observable entity)' is appropriate for most use cases.

Observation.value[x] is of type Observation.valueQuantity. It should contain a positive decimal in Observation.valueQuantity.value, and use the UCUM unit for 'per minute'.

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. In addition, use the SNOMED CT code 761996005 'Estimation technique (qualifier value)' if the procedure standard has not been followed, and 272391002' Measurement technique (qualifier value)' otherwise.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 106048009 'Respiratory finding (finding)'.

Observation.note.text may be used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|RespirationsfrekvensKode|Klasse som udtrykker, at der observeres på borgers respirationsfrekvens.|Observation.code|
|RespirationsfrekvensResultat|Decimaltal, der udtrykker, antallet af vejrtrækninger pr minut. |Observation.valueQuantity.value|
|RespirationsfrekvensEnhed|Klasse, der udtrykker, at den enhed der anvendes er /min.|Observation.valueQuantity.system and Observation.valueQuantity.code|
|RespirationsfrekvensSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|RespirationsfrekvensKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|RespirationsfrekvensAnsvarlig|Den fagperson, der er ansvarlig for observationen.|Observation.performer|
|RespirationsfrekvensProcedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|RespirationsfrekvensTid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|RespirationsfrekvensAssocieretTilstand|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|RespirationsfrekvensBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|RespirationsfrekvensStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareRSS-intro.md

### Scope and usage
KLToolsCareRSS is an Observation that holds the results of a thirty second stand test. Its intended use is Danish municipalities. A thirty second stand test is used to evaluate the fuctional ability, which meassure how many times a citizen may rise from a chair in 30 seconds. A thirty second stand test may be used and documented in this model without a special license.

#### Test-setup
The test is performed using a chair with a straight back without arm rests (højrygget stol) or a foldig chair. Seat should be 44-47cm high. If the citizen has risen more than half, when the 30seconds have passed, it counts as a rise.

#### Citizen performance
The citizen has been sitting in the middle of the chair, with a straight back, feets flat on the floor and have had arms crossed at the wrists and held the arms against the torso.

#### Using the model
The Observation.code is fixed to the SNOMED CT code 450738001 "Thirty second chair stand test score (observable entity)".

Observation.value[x] is of type Observation.valueInteger and should be a positive integer.

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. In addition, use the SNOMED CT code 761996005 'Estimation technique (qualifier value)' if the procedure standard has not been followed, and 272391002' Measurement technique (qualifier value)' otherwise.

Observation.note.text may be used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|RSSkode|Klasse som udtrykker, at der observeres på borgers evne til at rejse og sætte sig.|Observation.code|
|RSSresultat|Heltal, der udtrykker, hvor mange gange borger kunne rejse og sætte sig. |Observation.valueInteger|
|RSSsubjekt|Den borger, som er genstad for vurdering.|Observation.subject|
|RSSkontakt|Den kontakt, hvor vurderingen er foretaget.|Observation.encounter|
|RSSansvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|RSSprocedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|RSStid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|RSSbemærkning|Bemærkning vedr. observationen|Observation.note.text|
|RSSstatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|


---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsCareUrinStix-intro.md

### Scope and usage
KLToolsCareUrinStix is an observation that holds the results of a urin dipstick meassurement. Each value requires an instance of this profile.  Its intended use is Danish municipalities.

#### Test-setup
Test is performed in urin which is no more than two hours old. The test-procedure for the dipstick, as descriped by the manufacturer, has been followed.

#### Citizen performance
No requirements 

#### Using the model
The Observation.code is bound to three to three different ValueSets in NPU, LOINC and SNOMED CT respectively. Always use a NPU code, since this is the standard in Denmark. Use the SNOMED CT code whenever possible, because this is most compatible with other data in the Danish municipalities. 

Observation.value[x] is of type string or quantity. If the result is a quantity, the unit should be expressed as a UCUM unit. Typical UCUM laboratory units are g/L, 10*12/L (or some other multiplum of ten) and %. Note that the unit has to be relevant for the observation code e.g. mass/volume can be meassured in g/L but not in %. 

Observation.method holds information about whether the "Test-setup" and "Citizen performance" have met the procedure-standards as described by KL, which are summarized above in English. Citizen performance does not have any remarks in this profile, so only use the codes 'Ingen problemer med test-setup og borgers udførelse' and 'Afvigelse i test-setup'.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 252041008 'Micturition finding (finding)'

Observation.note.text may be used to hold remarks about the observation. Observation.status is typically 'final'.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|UrinStixKode|Klasse som udtrykker, hvilken egenskab der er målt, for den urinstix der er udført på borgeren.|Observation.code|
|UrinStixResultat|Tal eller tekst der udtrykker, resultatet af urinstix-proceduren. |Observation.valueQuantity.value|
|UrinStixEnhed|Klasse, der udtrykker, hvilken enhed der anvendes, hvis resultatet er et tal.|Observation.valueQuantity.system and Observation.valueQuantity.code|
|UrinStixSubjekt|Den borger, hvis urin der undersøges.|Observation.subject|
|UrinStixKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|UrinStixAnsvarlig|Den fagperson, der er ansvarlig for observationen.|Observation.performer|
|UrinStixProcedure|Information vedr. den procedure, der er brugt ifm. udførelsen ift. om test-setup og borgers udførelse har været i overensstemmelse med det beskrevne.|Observation.method|
|UrinStixTid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|UrinStixAssocieretTilstand|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|UrinStixBemærkning|Bemærkning vedr. observationen|Observation.note.text|
|UrinStixStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|


---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsQuestionnaire-intro.md

### Scope and usage
Questionnaire profile, for all Questionaires in KLTools. It is a small extension of the FHIR Questionnaire resource. It includes two standard-extensions that allow minimum and maximum values to be specified for questionaire-items.  

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsWHO5ObservationActive3-intro.md

### Scope and Usage
WHO-5 active is used to represent the result of the third question about being activive in an WHO-5 questionnaire.

Observation.code is fixed to a SNOMED CT code.

the value[x] is a valueCodeableConcept, which is bound to the answers from the questionaire, and a more generalized SNOMED CT ValueSet. The latter coding is included to allow for better data extraction.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 301325005 'Finding of general energy (finding)'

Observations.derivedFrom has a mandatory reference to the questionnaire response, that produced this observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|WHO5AktivKode|Klasse som udtrykker, at der observeres på borgers aktivitet ifølge WHO-5.|Observation.code|
|WHO5AktivResultat|Klasse, der udtrykker, svaret på spørgsmålet.|Observation.valueCodeableConcept.coding|
|WHO5AktivSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|WHO5Aktivkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|WHO5AktivAnsvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|WHO5AktivKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|WHO5AktivAssocieretFund|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|WHO5Aktivtid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|WHO5AktivStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsWHO5ObservationCalm2-intro.md

### Scope and Usage
WHO-5 calm is used to represent the result of the second question about being calm in an WHO-5 questionnaire.

Observation.code is fixed to a SNOMED CT code.

the value[x] is a valueCodeableConcept, which is bound to the answers from the questionaire, and a more generalized SNOMED CT ValueSet. The latter coding is included to allow for better data extraction.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 106126000 'Emotional state finding (finding)'

Observations.derivedFrom has a mandatory reference to the questionnaire response, that produced this observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|WHO5RoligKode|Klasse som udtrykker, at der observeres på borgers ro ifølge WHO-5.|Observation.code|
|WHO5RoligResultat|Klasse, der udtrykker, svaret på spørgsmålet |Observation.valueCodeableConcept.coding|
|WHO5RoligSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|WHO5Roligkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|WHO5RoligAnsvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|WHO5RoligKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|WHO5RoligAssocieretFund|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|WHO5Roligtid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|WHO5RoligStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsWHO5ObservationHappy1-intro.md

### Scope and Usage
WHO-5 happy is used to represent the result of the first question about being happy in an WHO-5 questionnaire.

Observation.code is fixed to a SNOMED CT code.

the value[x] is a valueCodeableConcept, which is bound to the answers from the questionaire, and a more generalized SNOMED CT ValueSet. The latter coding is included to allow for better data extraction.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 106126000 'Emotional state finding (finding)'

Observations.derivedFrom has a mandatory reference to the questionnaire response, that produced this observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|WHO5GladKode|Klasse som udtrykker, at der observeres på borgers følelse af glæde ifølge WHO-5.|Observation.code|
|WHO5GladResultat|Klasse, der udtrykker, svaret på spørgsmålet |Observation.valueCodeableConcept.coding|
|WHO5GladSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|WHO5Gladkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|WHO5GladAnsvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|WHO5GladKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|WHO5GladAssocieretFund|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|WHO5Gladtid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|WHO5GladStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsWHO5ObservationInterest5-intro.md

### Scope and Usage
WHO-5 Rested is used to represent the result of the fifth question about being interested in an WHO-5 questionnaire.

Observation.code is fixed to a SNOMED CT code.

the value[x] is a valueCodeableConcept, which is bound to the answers from the questionaire, and a more generalized SNOMED CT ValueSet. The latter coding is included to allow for better data extraction.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 365462008 'Finding of level of interest (finding)'

Observations.derivedFrom has a mandatory reference to the questionnaire response, that produced this observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|WHO5InteresseretKode|Klasse som udtrykker, at der observeres på borgers interesse ifølge WHO-5.|Observation.code|
|WHO5InteresseretResultat|Klasse, der udtrykker, svaret på spørgsmålet |Observation.valueCodeableConcept.coding|
|WHO5InteresseretSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|WHO5Interesseretkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|WHO5InteresseretAnsvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|WHO5InteresseretKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|WHO5InteresseretAssocieretFund|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|WHO5Interesserettid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|WHO5InteresseretStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_KL-dk-tools/input/pagecontent/StructureDefinition-KLToolsWHO5ObservationRested4-intro.md

### Scope and Usage
WHO-5 Rested is used to represent the result of the fourth question about being rested in an WHO-5 questionnaire.

Observation.code is fixed to a SNOMED CT code.

the value[x] is a valueCodeableConcept, which is bound to the answers from the questionaire, and a more generalized SNOMED CT ValueSet. The latter coding is included to allow for better data extraction.

To make explicite, who answered the questionnaire, a finding informer extension with a required value set is included.

Observation:extension.associatedCondition holds a reference to related municipality conditions. This is relevant when presenting observation results in municipality systems. In this profile, Observation.extension:associatedCondition is fixed to the SNOMED CT code 106168000 'Finding related to sleep (finding)'

Observations.derivedFrom has a mandatory reference to the questionnaire response, that produced this observation.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i værktøjsprojektet og den fælleskommunale informationsmodel, og definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet.

{:class="grid"}
|   Informationsmodel      | Definition        | FHIR  |
| ------------- |-------------| -----|
|WHO5UdhviletKode|Klasse som udtrykker, at der observeres på borgers Udhvilethed ifølge WHO-5.|Observation.code|
|WHO5UdhviletResultat|Klasse, der udtrykker, svaret på spørgsmålet |Observation.valueCodeableConcept.coding|
|WHO5UdhviletSubjekt|Den borger, som er genstand for observationen.|Observation.subject|
|WHO5Udhviletkontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|WHO5UdhviletAnsvarlig|Den fagperson der er ansvarlig for observationen.|Observation.performer|
|WHO5UdhviletKilde|Den person der er kilde til resultatet|Observation:extension.findingInformer|
|WHO5UdhviletAssocieretFund|Klasse, der udtrykker, hvilken kommunal tilstand denne observation er associeret med.|Observation:extension.associatedCondition|
|WHO5Udhvilettid|Tidspunkt for observationen.|Observation.effectiveDateTime|
|WHO5UdhviletStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

