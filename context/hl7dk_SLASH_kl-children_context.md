File: repos/hl7dk_SLASH_kl-children/input/fsh/adbb.fsh

Instance: klgateway-children-adbb
InstanceOf: KLGatewayChildrenQuestionnaire
Usage: #definition
Title: "KLGatewayChildrenADBB"
* status = #active
* publisher = "Kommunernes Landsforening"
* description = "Alarm Distress Baby Scale (ADBB)"
* name = "KLGatewayChildrenADBB"
* copyright = "Users may only use ADBB if they first complete appropriate training as offered by University of Copenhagen https://psy.ku.dk/cif/kurser-og-efteruddannelse/. The copyright should be respected. ADBB was first described in: Guedeney, A. and Fermanian, J., 2001. A validity and reliability study of assessment and screening for sustained withdrawal reaction in infancy: The Alarm Distress Baby Scale. Infant Mental Health Journal: Official Publication of The World Association for Infant Mental Health, 22(5), pp.559-575."
* item[0].type = #integer
* item[0].text = "1. Ansigtsudtryk"
* item[0].linkId = "1facialExpression"
* item[0].extension[minValue].valueInteger = 0
* item[0].extension[maxValue].valueInteger = 4
* item[0].repeats = false

* item[+].type = #integer
* item[=].text = "2. Øjenkontakt"
* item[=].linkId = "2eyeContact"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 4
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "3. Generelt aktivitetsniveau"
* item[=].linkId = "3generalLevelOfActivity"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 4
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "4. Selvstimulation"
* item[=].linkId = "4selfStimulatingGestures"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 4
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "5. Vokalisering"
* item[=].linkId = "5vocalizations"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 4
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "6. Hastighed af respons på stimulation"
* item[=].linkId = "6brisknessOfResponseToStimulation"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 4
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "7. Relation"
* item[=].linkId = "7relationship"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 4
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "8. Attraktion"
* item[=].linkId = "8attraction"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 4
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "Samlet score"
* item[=].linkId = "score"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 32
* item[=].repeats = false

Instance: ADBBAnswerRikke
InstanceOf: KLGatewayChildrenQuestionnaireResponse
Usage: #example
Title: "ADBBAnswerRikke"
Description: "Udfyldt ADBB skema for Rikke"
* questionnaire = "http://fhir.kl.dk/children/Questionnaire/klgateway-children-adbb"
* status = #completed
* subject = Reference(Rikke)
* extension[findingInformer].valueCodeableConcept = $KLCommonCodes#8fe80acb-2c2a-4f10-b2b8-ddb77d2f69dc "Medarbejder alene"
* authored = 2021-07-04

* item[0].linkId = "1facialExpression"
* item[=].answer.valueInteger = 0

* item[+].linkId = "2eyeContact"
* item[=].answer.valueInteger = 1

* item[+].linkId = "3generalLevelOfActivity"
* item[=].answer.valueInteger = 0

* item[+].linkId = "4selfStimulatingGestures"
* item[=].answer.valueInteger = 0

* item[+].linkId = "5vocalizations"
* item[=].answer.valueInteger = 0

* item[+].linkId = "6brisknessOfResponseToStimulation"
* item[=].answer.valueInteger = 1

* item[+].linkId = "7relationship"
* item[=].answer.valueInteger = 0

* item[+].linkId = "8attraction"
* item[=].answer.valueInteger = 1

* item[+].linkId = "score"
* item[=].answer.valueInteger = 3

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/aims.fsh

Instance: klgateway-children-aims
InstanceOf: KLGatewayChildrenQuestionnaire
Usage: #definition
Title: "KLGatewayChildrenAIMS"
* status = #active
* publisher = "Kommunernes Landsforening"
* description = "Alberta Infant Motor Scale (AIMS)"
* name = "KLGatewayChildrenAIMS"
* copyright = "Users may only use AIMS if they respect the copyright and other intelectual property rights, which are held by Elsevier. AIMS was first described in: Piper, Martha C., et al. Construction and validation of the Alberta Infant Motor Scale (AIMS). Canadian journal of public health= Revue canadienne de sante publique 83 (1992): S46-50. Its currect use is described in: Piper, Martha, and Johanna Darrah. Motor Assessment of the Developing Infant-E-Book. Elsevier Health Sciences, 2021."
* item[0].type = #integer
* item[0].text = "Maveliggende (Prone Subscale Score)"
* item[0].linkId = "prone"
* item[0].extension[minValue].valueInteger = 0
* item[0].extension[maxValue].valueInteger = 21
* item[0].repeats = false

* item[+].type = #integer
* item[=].text = "Rygliggende (Surpine Subscale Score)"
* item[=].linkId = "surpine"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 9
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "Siddende (Sit Subscale Score)"
* item[=].linkId = "sit"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 12
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "Stående (Stand Subscale Score)"
* item[=].linkId = "stand"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 16
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "Samlet (Total Score)"
* item[=].linkId = "score"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 58
* item[=].repeats = false

Instance: AIMSAnswerRikke
InstanceOf: KLGatewayChildrenQuestionnaireResponse
Usage: #example
Title: "AIMSAnswerRikke"
Description: "Udfyldt AIMS skema for Rikke"
* questionnaire = "http://fhir.kl.dk/children/Questionnaire/klgateway-children-aims"
* status = #completed
* subject = Reference(Rikke)
* extension[findingInformer].valueCodeableConcept = $KLCommonCodes#8fe80acb-2c2a-4f10-b2b8-ddb77d2f69dc "Medarbejder alene"
* authored = 2021-07-04

* item[0].linkId = "prone"
* item[=].answer.valueInteger = 7

* item[+].linkId = "surpine"
* item[=].answer.valueInteger = 3

* item[+].linkId = "sit"
* item[=].answer.valueInteger = 0

* item[+].linkId = "stand"
* item[=].answer.valueInteger = 0

* item[+].linkId = "score"
* item[=].answer.valueInteger = 10

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/aliases.fsh

Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $KLCommonCodes = http://fhir.kl.dk/term/CodeSystem/CareSocialCodes
Alias: $RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $SCT = http://snomed.info/sct
Alias: $UCUM = http://unitsofmeasure.org
Alias: $LOINC =  http://loinc.org
Alias: $EncounterStatus = http://hl7.org/fhir/encounter-status
Alias: $V3ACTCODES = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $FBOE = http://fhir.kl.dk/term/CodeSystem/FBOE
Alias: $ExtMinValue = http://hl7.org/fhir/StructureDefinition/minValue
Alias: $ExtMaxValue = http://hl7.org/fhir/StructureDefinition/maxValue
Alias: $actCodes = http://terminology.hl7.org/CodeSystem/v3-ActCode

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/citizen.fsh

Profile: KLGatewayChildrenCitizen
Parent: dk-core-patient
Id: klgateway-children-citizen
Title: "KLGatewayChildrenCitizen"
Description: "Administrative information about a citizen receiving care or care related services."
* identifier 1..1
* identifier[x-ecpr] 0..0
* identifier[d-ecpr] 0..0
* identifier[cpr] 1..1
* active ..1
* name[official] 0..0
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
* generalPractitioner[referencedSORUnit] 0..0
* generalPractitioner ..0
* managingOrganization 1..1
* managingOrganization.reference ..0
* managingOrganization.type ..0
* managingOrganization.identifier 1..1
* managingOrganization.identifier only dk-core-sor-identifier
* managingOrganization.display ..0
* link ..*
* link MS
* link.type = http://hl7.org/fhir/link-type#seealso
* link.other only Reference(klgateway-children-related-parent)
* link.other ^type.aggregation = #bundled

//Danish descriptions
* identifier ^short = "[DK] cpr"
* managingOrganization ^short = "[DK] journalførendeOrganisation"
* link ^short = "[DK] erSammePersonSom"
* active ^short = "[DK] harAktivJournal" 

Instance: Rikke
InstanceOf: klgateway-children-citizen
Description: "Barnet Rikke"
Usage: #example
* identifier.use = #official
* identifier.value = "0505209996"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* active = true
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "123456789012345"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: Lars
InstanceOf: klgateway-children-citizen
Description: "Barnet Lars"
Usage: #example
* identifier.use = #official
* identifier.value = "0505159995"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "123456789012345"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"


Instance: Kirsten
InstanceOf: klgateway-children-citizen
Description: "Borger, Kirsten"
Usage: #example
* identifier.use = #official
* identifier.value = "2911829996"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "123456789012345"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"
* link.type = http://hl7.org/fhir/link-type#seealso
* link.other = Reference(RikkesParent)

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/codeSystem.fsh

// CodeSystem: Tempcodes
// Id: Tempcodes
// Title: "Tempcodes"
// Description: "Tempcodes to be implemented in KL-term"
// * ^experimental = false
// * ^caseSensitive = false
// * #6c2a4f15-d775-47f3-9868-b26fbff9ff8b "Forebyggelseskontakt i småbørnssundhedsplejen"
// * #6c2a4f15-d775-47f3-9868-b26fbff9ff8b #d3c00541-f1d3-4c43-b5fc-16e8914ca1df "Graviditetsbesøg"
// * #6c2a4f15-d775-47f3-9868-b26fbff9ff8b #7d35a193-e808-4e77-b361-6c0d114d021f "Barselsbesøg"
// * #6c2a4f15-d775-47f3-9868-b26fbff9ff8b #b4bf6058-502a-4d64-bb8e-369661f43b47 "Etableringsbesøg"
// * #6c2a4f15-d775-47f3-9868-b26fbff9ff8b #563c4174-f451-4c87-8db8-8d5472ca7ff6 "Andet besøg inden første måned"
// * #6c2a4f15-d775-47f3-9868-b26fbff9ff8b #51f30d1c-d60e-4e3e-ac22-ec9712ea962d "Besøg hos det ca. 2 måneder gamle barn"
// * #6c2a4f15-d775-47f3-9868-b26fbff9ff8b #58ff370b-a775-4bec-b24a-91604e0a5fe7 "Besøg hos det 4-6 måneder gamle barn"
// * #6c2a4f15-d775-47f3-9868-b26fbff9ff8b #3f3e6489-31bd-44cf-9920-3c632868feb7 "Besøg hos det 8-11 måneder gamle barn"
// * #4b039ba1-4005-42e6-b672-09b81ad7578a "Behovskontakt med småbørnssundhedsplejen" "Sundhedsplejens hjemmebesøg i barnets første 5 leveår efter behov"
// * #b30f139c-fac5-416e-b84a-a3429f0222c2 "Anden kontakt med småbørnssundhedsplejen ifm den almindelige forebyggende småbørnsindsats"
// * #b30f139c-fac5-416e-b84a-a3429f0222c2 #644dd6c1-5c80-4412-ae59-f6e0767cead5 "Kontakt med sundhedsplejen i åben konsultation"
// * #b30f139c-fac5-416e-b84a-a3429f0222c2 #a08d3cf6-58ef-4631-8893-3fa44bd67363 "Kontakt med sundhedsplejen ifm. gruppeaktivitet"
// * #9f3d853c-88d3-47e9-92a1-c7bbe0f9b4eb "Forebyggelseskontakt i skolesundhedsplejen"
// * #9f3d853c-88d3-47e9-92a1-c7bbe0f9b4eb #c06ed6f1-be9d-460e-a45e-34821bcbd533 "Indskolingsundersøgelse"
// * #9f3d853c-88d3-47e9-92a1-c7bbe0f9b4eb #0ddb3661-51da-471f-94d7-2a50b81f5fc6 "1. klasses undersøgelse"
// * #9f3d853c-88d3-47e9-92a1-c7bbe0f9b4eb #d01bcb90-2b29-44f4-834c-191d6dd4a08a "Undersøgelse i mellemtrin, med måling"
// * #9f3d853c-88d3-47e9-92a1-c7bbe0f9b4eb #dd766967-4d02-4c17-8ed3-021852785fdf "Udskolingsundersøgelse"
// * #606c6585-444b-4ecd-885c-2ee59dc33f32 "Behovsbaseret kontakt med skolesundhedsplejersken"
// * #17f5f9fa-3e1c-42fe-9ef3-178bc7900f67 "Anden kontakt med skolesundhedsplejersken ifm den almindelige forebyggende skolebørnsindsats"
// * #be128c20-851d-4217-b8df-744d8af39cac "For det meste meget glad" "Barnet vurderer selv for det meste at være meget glad"
// * #6bea1014-8e30-40e7-9274-2b02376c0b1b "For det meste glad" "Barnet vurderer selv for det meste at være glad"
// * #2c945a43-a07b-4b26-b4cc-205ba15a1251 "For det meste midt imellem" "Barnet vurderer selv for det meste at være midt imellem glad og ikke glad"
// * #10edfc52-3632-453b-8db1-af6691049885 "For det meste ikke glad" "Barnet vurderer selv for det meste ikke at være glad"
// * #9b4b5194-cf7f-4274-a691-734c24adb0b7 "For det meste meget glad i skolen" "Barnet vurderer selv for det meste at være meget glad i skolen"
// * #5dc857f6-1220-4762-a718-31a6101b5d61 "For det meste glad i skolen" "Barnet vurderer selv for det meste at være glad i skolen"
// * #2e026475-a2ec-45e3-92d8-f0bed307cceb "For det meste midt imellem i skolen" "Barnet vurderer selv for det meste at være midt imellem glad og ikke glad i skolen"
// * #822dffb2-3b29-4f86-9784-757954d6a047 "For det meste ikke glad i skolen" "Barnet vurderer selv for det meste ikke at være glad i skolen"
// * #2c39af9f-8e45-4c88-962f-e7a9e2cd31b6 "Observation af psykisk tilstand når man er blevet forælder ifm. forebyggelsesindsats for småbørn" 
// * #bee30064-8436-4762-83ed-e47d65f23fc6 "Observation af samvær, kontakt, forældre-barn relation ifm. forebyggelsesindsats for småbørn" 
// * #e88ddd81-4aa5-4c84-89fb-52de961a7c17 "Observation af signaler, reaktioner, kommunikation ifm. forebyggelsesindsats for småbørn"
// * #0701a892-2e6b-4b76-a041-97ceda78f973 "Observation af motorik ifm. forebyggelsesindsats for småbørn"
// * #bfc7062e-d529-4516-a698-fc87b339033a "Observation af søvn, døgnrytme ifm. forebyggelsesindsats for småbørn"
// * #5f4a21bb-6314-477a-a0fe-7924ff83954a "Observation af sprog ifm. indskolingsundersøgelse"
// * #2a8ebbc5-a4f0-485c-850f-1e95db492a6f "Observation af evne til at gå ifm. indskolingsundersøgelse"
// * #c61e0e57-b1fd-4e4a-9eb9-5086b14b7504 "Observation af evne til at hoppe ifm. indskolingsundersøgelse"
// * #5697e7df-3009-44d2-a495-ca8e4da167fb "Observation af evne til at holde balance ifm. indskolingsundersøgelse"
// * #550cad89-6036-453f-9536-d1adb4eae879 "Observation af evne til at løbe gadedrengeløb ifm. indskolingsundersøgelse"
// * #1c4b0adf-cd19-42af-ba43-80c28fcbc7e3 "Observation af evne til at stå på venstre ben ifm. indskolingsundersøgelse"
// * #c05a5706-c0df-4a66-a6a1-a01e948d9326 "Observation af evne til at stå på højre ben ifm. indskolingsundersøgelse"
// * #0e24a41d-6bb6-4c84-89e1-5635cd4ea481 "Observation af evne til at kaste bold med højre hån ifm. indskolingsundersøgelse"
// * #998d1b1e-b165-43c9-861f-0b620f753df3 "Observation af evne til at kaste bold med venstre hånd ifm. indskolingsundersøgelse"
// * #a3e32326-283d-47db-af92-3d8554fb7977 "Observation af evne til at gribe bold ifm. indskolingsundersøgelse"
// * #dfa9a5e4-c542-4491-8a4b-1dee0bab8b17 "Observation af evne til at holde om en blyant ifm. indskolingsundersøgelse"
// * #f8d7fba7-acc4-4481-bb8d-4b3112f411a9 "Observation vedr. fysisk aktivitet ifm. indskolingsundersøgelse"
// * #d240cad7-04ca-4f36-9dd7-86fb1987856a "Observation vedr. mad og måltider ifm. indskolingsundersøgelse"
// * #51a91eca-5a66-4e1a-bbf7-be4ccf12810f "Observation vedr. forældre-barn relation, kontakt, omsorg ifm. indskolingsundersøgelse"
// * #58464451-5fbb-4607-871d-1e01212c38d7 "Observation vedr. sundhedsplejerskens observationer og kontakt med barnet ifm. indskolingsundersøgelse"
// * #7dbe4d6a-a486-4d8a-bd85-d8803ecb9688 "Observation vedr. synstest ifm indskolingsundersøgelse"
// * #877a3705-ddd4-4e54-a6eb-f94a95276f99 "Observation vedr. høretest ifm. indskolingsundersøgelse"
// * #da541ade-cbc9-4377-bff7-5ec153c93a89 "Observation vedr. fysisk trivsel ifm. udskolingsundersøgelse"
// * #20a41422-1ea1-483e-8070-7ffd79c493c0 "Observation vedr. søvn/træthed ifm. udskolingsundersøgelse"
// * #089c064d-3e14-47d2-9e34-b753fcf18c7a "Observation vedr. spisning, kost og motion  ifm. udskolingsundersøgelse"
// * #933d7ded-0c10-48e0-9645-b84b7c8946c7 "Observation vedr. trivsel  ifm. udskolingsundersøgelse"
// * #ae0bc3c6-7084-4e62-8e83-427f14a09646 "Observation vedr. seksuel adfærd ifm. udskolingsundersøgelse"
// * #aeded840-d8da-408e-bb6d-d2d8560a6b79 "Observation vedr. alkohol  ifm. udskolingsundersøgelse"
// * #d59a5f7f-805c-44a6-9ab7-a4e7a1d9bd1e "Observation vedr. andre rusmidler  ifm. udskolingsundersøgelse"
// * #5a517611-64d6-4ebd-af33-f2b30d0ad874 "Observation vedr. mental sundhed  ifm. udskolingsundersøgelse"
// * #9069b5aa-d62c-48f9-a0d9-d17ecd12920a "Observation vedr. syntest ifm. udskolingsundersøgelse"
// * #6be08133-feca-4d2f-a45d-cb36d141011e "Observation vedr. høretest  ifm. udskolingsundersøgelse"
// * #96e3eda6-3eb7-4fbb-9850-fc6dfafadb4a "Problem/bemærkning" 
// * #1b64f768-5133-4633-85a4-2b97fcaa1f7a "Der er intet at bemærke"
// * #1b55a4b0-1156-4f58-b2df-b5c6014d9048 "Telefonisk" "Kontakten er foregået per telefon" //KLCommonCareSocialCodes
// * #124be95d-6924-4609-9d2a-e7c73ae3ab3d "Skærmbesøg" "Kontakten er foregået via skærm med mulighed for tændt kamera, så parterne har haft mulighed for at interagere ansigt til ansigt, og fremvise ting." //KLCommonCareSocialCodes
// //Behovsindsatser
// * #7620766c-6d3d-487b-9896-bfcf7f883f0f	"Behovsindsatser småbørn"
// * #6cbf8b19-5aff-4f6f-a7dc-9a411197bcff "Familieindsatser"
// * #6cbf8b19-5aff-4f6f-a7dc-9a411197bcff #b3de92ea-ac5e-4f87-809e-a9e40b59cc34 "Vejledning i kontakt, samspil og barnets behov"
// * #6cbf8b19-5aff-4f6f-a7dc-9a411197bcff #69b3ad8c-f228-405c-b556-b2ea78e196ee "Forældreuddannelse i kontakt og samspil"
// * #6cbf8b19-5aff-4f6f-a7dc-9a411197bcff #7f6488a9-f01c-4776-973c-846fdca75acc "Helhedsindsats med fokus på kontakt og samspil"
// * #6cbf8b19-5aff-4f6f-a7dc-9a411197bcff #ab058b70-6557-4844-957b-a16d71ea46f3 "Vejledning til forældre, hvor barnet har særlige behov"
// * #6cbf8b19-5aff-4f6f-a7dc-9a411197bcff #14ddb640-c2ce-4e79-9269-6302f72f02aa "Forældreuddannelse, hvor barnet har særlige behov"
// * #6cbf8b19-5aff-4f6f-a7dc-9a411197bcff #4c53b10a-6384-413a-b131-b94354337541 "Forældregruppe, hvor barnet har særlige behov"
// * #5a45df21-d80c-4b41-9e5a-4896a519c6c6 "Indsats til forælder"
// * #5a45df21-d80c-4b41-9e5a-4896a519c6c6 #d7985f9a-b714-4bbd-a116-75f7a55504ba "Tryghedsindsats"
// * #5a45df21-d80c-4b41-9e5a-4896a519c6c6 #e535fc78-ce61-4f97-b717-5901d5330ca9 "Forældregruppe, hvor forælder har psykisk reaktion"
// * #5a45df21-d80c-4b41-9e5a-4896a519c6c6 #09a24a80-1669-4984-850c-de1f66ad86f8 "Forældregruppe, hvor forælder har et særligt behov"
// * #5a45df21-d80c-4b41-9e5a-4896a519c6c6 #8af7f611-2bae-4ba5-923a-d748501d1ad3 "Støtte ved psykisk reaktion eller sårbarhed"
// * #5a45df21-d80c-4b41-9e5a-4896a519c6c6 #cf5d4171-eb86-4bca-afe6-5ded5b1107ee "Støtte ved psykisk reaktion eller sårbarhed som del af helhedsindsats"
// * #76a96391-7b5a-4d29-8471-9b7d238cb9df "Indsatser vedr. fysisk sundhed"
// * #76a96391-7b5a-4d29-8471-9b7d238cb9df #8e557f2c-43a6-4b5a-bfac-2cd78bad4c25 "Opsporing og vejledning ved vigende vægt/vækst"
// * #76a96391-7b5a-4d29-8471-9b7d238cb9df #1abd67eb-498a-4033-aebd-8285c1bf6ecb "Opsporing og vejledning ved overvægt"
// * #76a96391-7b5a-4d29-8471-9b7d238cb9df #712ef286-161c-4b9d-b2b9-b43e3f432646 "Ammeindsats"
// * #76a96391-7b5a-4d29-8471-9b7d238cb9df #2d9d7a6b-0d8c-4202-9434-876a1a6833b8 "Øvrig vejledning om fysisk sundhed"
// * #67adc79a-a09f-4166-9d4a-f7fce64dfe85 "Behovsindsatser skolebørn"
// * #3cd144c0-7b1e-4ca3-9f21-28f9c8918a74 "Familie- og trivselsindsatser"
// * #3cd144c0-7b1e-4ca3-9f21-28f9c8918a74 #c3100c9e-636e-4249-bc9a-b70644c04972 "Tryghedsindsats"
// * #3cd144c0-7b1e-4ca3-9f21-28f9c8918a74 #260a3000-9af0-4cc5-ae3a-cc90683772a5 "Opsporing og vejledning ved trivselsproblem"
// * #3cd144c0-7b1e-4ca3-9f21-28f9c8918a74 #550971e9-9581-4a3b-aa2f-da1520ad0e1c "Helhedsindsats ved trivselsproblem"
// * #3cd144c0-7b1e-4ca3-9f21-28f9c8918a74 #d877b771-0729-4e35-8ce0-1cc5972fdffb "Forældreuddannelse i kontakt og samspil"
// * #52d1d013-4fdd-49b1-bba0-b7c00458852c "Sundhedsindsatser"
// * #52d1d013-4fdd-49b1-bba0-b7c00458852c #b45c3d0e-7d19-4c75-bdf1-fe838b439b86 "Opsporing og vejledning ved overvægt"
// * #52d1d013-4fdd-49b1-bba0-b7c00458852c #3acaa88c-4227-415c-82e5-66d8699d23f8 "Opsporing og vejledning ved vigende vægt/vækst"
// * #52d1d013-4fdd-49b1-bba0-b7c00458852c #b7efe8ff-a502-4f06-9a97-a30b28b1d878 "Opsporing og vejledning ved uventet højdeøgning/tidlig pubertet"
// * #52d1d013-4fdd-49b1-bba0-b7c00458852c #4f247b6f-e937-42b8-a82b-be1a12405ad0 "Opsporing af potentiel syns- eller hørenedsættelse"
// * #52d1d013-4fdd-49b1-bba0-b7c00458852c #bc2fc09c-594b-40f5-bfd4-b4da0307fb64 "Vejledning ved udskillelsesproblematik"
// * #52d1d013-4fdd-49b1-bba0-b7c00458852c #79691b19-c141-4979-a95c-5dc719ad1fd7 "Øvrig vejledning om sundhed og sundhedsadfærd"
// * #b062a901-1364-4ed6-8d40-f4f14cfc737a "Samarbejdsindsatser"
// * #b062a901-1364-4ed6-8d40-f4f14cfc737a #11bae71b-89f5-4903-ab59-c516e638b44a "Underretning til kommunale socialområde"
// * #b062a901-1364-4ed6-8d40-f4f14cfc737a #90089a0d-10a6-4cd7-8733-3a6d8b784932 "Overlevering til andet kommunalt område"
// * #b062a901-1364-4ed6-8d40-f4f14cfc737a #7416c8d9-970c-4131-9314-b0b1d92e8253 "Anbefaling af kontakt til andet kommunalt område"
// * #b062a901-1364-4ed6-8d40-f4f14cfc737a #d2a33ec9-5f61-4cf5-b4d1-c99df83e4c9b "Henvisning til praktiserende læge"
// * #b062a901-1364-4ed6-8d40-f4f14cfc737a #b708c983-0bb8-4303-a442-9af4c8b950bb "Anbefaling af kontakt til praktiserende læge"
// * #b062a901-1364-4ed6-8d40-f4f14cfc737a #68c3cf91-6f42-484a-922f-e75569f2991a "Henvisning til regionalt tilbud"
// * #b062a901-1364-4ed6-8d40-f4f14cfc737a #b23adb79-91a1-4644-9b2c-6ed3d41a1388 "Anbefalet kontakt til regionalt tilbud"
// * #b062a901-1364-4ed6-8d40-f4f14cfc737a #02c1e91e-475f-4b56-9731-755087329982 "Koordinering ved overgange"
// * #b062a901-1364-4ed6-8d40-f4f14cfc737a #04cc94e7-1d89-4070-8bda-55f65637ab68 "Sparring med anden faggruppe"
// //Børneobservationer
// * #68605f88-49fb-44b9-b327-86947af6aa93 "Social kontakt"
// * #763c6f21-5467-4713-82fb-716c9d0a1fdf "Forældre-barn-relation"
// * #58997614-ba43-4534-90bd-10c7e76802f4 "Forælders sårbarhed"
// * #7e7fab2f-278a-4b14-9bc9-efc36fffcba5 "Netværk"
// * #653c2b0b-bb64-4906-888b-aea6fef3c3f8 "Kommunikation"
// * #73f981f8-455a-4158-b435-7c6d83ab84da "Søvn"
// * #e04f2ca1-888a-4671-a97a-371b525cd2a3 "Motorik"
// * #b331fe02-a781-4abd-b6db-9331d6a69b15 "Fysisk aktivitet"
// * #a22c4b53-b622-4394-ba13-910a7b0d7b0d "Hørelse"
// * #01fddd46-ed7c-423d-b191-ffdd977dd61e "Syn"
// * #e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
// * #28972d4b-fea3-42ec-b2a5-e2a26f79b14d "Passiv rygning"
// * #76891f7b-cf49-4cb2-88d6-728a509eb75d "Brug af nikotin"
// //normale børnefund
// * #008b1890-4be5-463a-b618-0ab3d89515d0 "Alderssvarende social kontakt"
// * #7a107df6-8fb8-4744-8413-be10b4c5c1d9	"Velfungerende forældre-barn-relation"
// * #0e5db980-8c6e-4034-abab-054e0eb40935 "Forventelig psykisk reaktion"
// * #57dd67d7-175a-4541-87ff-db1381c4e1d9	"Ingen sårbarhed" 
// * #fbd9a8a5-0ed6-4e1a-9841-066ade34b071	"Godt netværk"
// * #042d522d-0abe-46eb-a958-6e235b5d5408	"Kommunikerer alderssvarende" 
// * #b07eec60-941d-484d-8c2a-aeaa2ba798bf	"Søvn med normale variationer"
// * #d5b876e1-a86c-4768-b46d-cd795eaa89e4	"Alderssvarende motorik"
// * #78dcf013-8ae9-4541-b175-100cde77a9f0	"Almindeligt kostindtag"
// * #05086dad-8718-4a6c-b096-54c7101d0b2c	"Fysisk aktiv"
// * #9628db65-7460-4ecc-bbb1-48c0ac4b3f02	"Normal hørelse"
// * #bdcb835d-6ef6-4c4f-9fdf-94c3ebd17182	"Normalt syn"
// * #b54723cf-3114-4119-b1cb-28107a283a99	"Ikke udsat for tobaksrøg"
// * #a7a53cfd-c7bb-4573-a4ae-2eb18e3dda1f	"Ikke prøvet nikotin"

// //Børnetilstande
// //obligatoriske
// * #18938eb0-3f40-48c5-9971-7255aa86336a "Få tegn på udfordringer i social kontakt" 
// * #e1c1674c-9384-4d95-999f-763f3868f444 "Udfordring i social kontakt"

// * #274791a5-094d-4e6a-831e-e712d3d66aeb	"Let påvirket forældre-barn-relation"
// * #80aa0dab-aa41-45b1-a2cc-16d7e3733fdd	"Udfordringer i forældre-barn-relation"

// * #b8220216-e185-451b-8d2a-67cdf73c42c3 "Let psykisk reaktion"
// * #f86c2526-3b04-454c-a99e-d350f699dc94 "Psykisk reaktion"



// * #546e7bef-7a22-451e-971a-326fcd78a843	"Potentiel sårbarhed"
// * #2461e246-b75c-46bb-b6ad-c68d529ace7e	"Sårbarhed"

// * #983ff338-2e77-413d-b157-66d0141a4a96	"Sparsomt netværk"

// * #851ad2f2-a805-4d81-a1d8-15c3b09f5949	"Få tegn på udfordret kommunikation"
// * #d9f00ad4-4305-4bd0-aedf-2e51bef602e2	"Udfordring med kommunikation"

// * #d13ad530-d8f6-4933-be18-bb77e2334f9f	"Let forstyrret søvn"
// * #c25b5cda-3f6b-4ef7-998d-c22c58c6dd18	"Udfordring med søvn"

// * #936a0163-08eb-4fdb-bf0c-bcf5bc7cb3f6	"Få tegn på udfordret motorik"
// * #aeade013-b14a-4ad3-80da-66742782411e	"Udfordringer med motorik"

// * #abecea75-32cd-4388-80fd-319a30701bf6	"Enkelte udfordringer med kost"
// * #019e3a2d-775c-4660-8183-75206b47048f	"Problem med kost"

// * #2effe989-0cc3-4dce-ad93-9f6503b91eaa	"Moderat fysisk aktiv"
// * #38f72570-630f-40c6-8a60-cf2e1bddc8eb	"Meget stillesiddende aktivitet"
// * #2ef19cdf-f6e6-4b2c-aaef-f466e33cf261	"Overdreven motion"

// * #c4c79311-ba80-4890-9008-c2f62ab00eda	"Potentielt problem med hørelse"
// * #4d4b20b6-0159-4014-ac1c-46a7a860b204	"Kendt problem med hørelse"

// * #0896610c-1322-44f2-836c-774de52fc3f1 "Potentielt problem med syn"
// * #e489119b-de75-47cc-a53b-6ba90ed2c7e8	"Kendt problem med syn"

// * #5bc59698-bdf9-48db-ab97-20c43d7ff4f1	"Udsat for tobaksrøg"
// * #fd145ea6-b7de-466c-9053-8b4a0be960ac	"Har prøvet nikotin"
// * #cfe9150e-380e-4ce3-a120-2e2b227c8b9f	"Bruger nikotin"

// //optionelle
// * #a038c064-b57d-4a62-9333-c9456817595d "Fysiske behov mødes ikke"
// * #51bc227a-3455-474d-bf42-fc7a7875513c "Følelsesmæssige behov opfyldes ikke"
// * #d3fc57b7-3a5d-4f69-bcb0-bdb8363650eb "Udfordring i forældre-barn samspil"
// * #fc4b6e6d-a055-49bf-adab-474e0a810675 "Aktiviteter ikke afpasset"
// * #00a9f897-f784-4164-966c-eba94171ec82 "Uforudsigelighed"
// * #53db2598-28be-4d04-8b3a-0005581f1fda "Barn med særlige behov, forældreudfordringer"
// * #bfd18100-d007-4465-95ce-5bf2ac8bc091 "Afvigende øjenkontakt"
// * #0ec86d42-83b9-4d2d-b56a-f6d352b58ccf "Følelsesmæssigt nedtonet"
// * #3c18d87b-af46-4305-9040-320d90b2f343 "Nedsat aktivitetsniveau"
// * #be8a4c9c-7898-4263-b853-c5d7347e8cec "Manglende vokalisering"
// * #e818645e-47a7-4125-a579-a68f556b7344 "Græder meget"
// * #b5f8c711-8aa3-4a6d-8570-6e9312e86b09 "Engagerer sig ikke i kontakt"
// * #3f30980a-7bf3-401e-ada8-a3818c352c29 "Ukritisk i kontakt"
// * #fc3d65d1-1509-47ef-8845-60adea5d7a65 "Nedtrykthed"
// * #b2fcb139-2e61-480e-96f5-5a7cea82be4c "Nedsat lyst/interesse"
// * #1050e706-b685-4310-9194-89c6d8903865 "Nedsat energi/øget træthed"
// * #dc7cdfb3-d33b-41cc-bb18-2be3592fe323 "Depressive ledsagesymptomer"
// * #db926a42-517f-4cb0-94f7-0eebd74ce163 "Tanker om selvskade/selvmord"
// * #7820eaa8-72e0-4f4b-8da7-ddcd74f50c3a "Overbekymret/angst"
// * #b4032c0c-6e9a-4431-8ce4-97ba4f4574b3 "Misbrug"
// * #15fc2e8e-b27b-4957-be98-954c1bc318a3 "Konflikt med den anden forælder"
// * #de666a03-1211-4d75-b416-8c8785a40a4b "Problem med økonomi"
// * #7acf5936-6640-44a7-af6d-b20c7607dcfe "Traumatiske oplevelser"
// * #577d33d5-2eff-47ba-b5d0-c4438b8f49c0 "Dårlig fødselsoplevelse med dette barn"
// * #d1cd9a33-3800-4901-ab7b-b630ee1be46e "Tidligere dårlig fødselsoplevelse"
// * #87fbc4e5-717a-4395-aa8f-c2c0c0bca763 "Tab i familien"
// * #f7dfe2e4-d370-45bc-aca9-9649274d84d3 "Alvorlige sociale problemer"
// * #d126c096-30f0-49c0-8d15-7a50c888d50b "Sygdom eller handicap"
// * #8036b9f6-e00d-4956-8704-61ba08287735 "Dårlig appetitregulering og/eller overspisning."
// * #9b0e6538-a24f-47be-9c06-2988cfaef63a "Småt og/eller selektivt spisende eller vægrer sig ved at spise"
// * #82f2014b-339a-4497-a822-d284d73c63aa "Værger sig ved at spise"
// * #b887a387-c630-43a0-96a3-2b5c7c84e043 "Gylper meget/kaster meget op"
// * #4813e65d-4d24-4c82-8f17-ce9f084bb970 "Udfordring med amning"
// * #37bfe2f5-bdd2-42b0-a1c9-4787860ce624 "Udfordringer med gensidig kommunikation"
// * #8821649f-0f50-4dfa-87e3-8ac2d17d01d5 "Udfordringer med fælles opmærksomhed"
// * #df3e0246-892e-4d5e-af1d-1d1443196f20 "Udfordringer med sprogforståelse"
// * #355959ff-6122-4e23-9b69-835f739dd42d "Udfordringer med sprogligt udtryk"
// * #5e83b4b4-8bd0-442b-8e34-77c435105aed "Udfordringer med opmærksomhed"
// * #fcb3733c-e438-4d67-bf02-bb3071e0ba79 "Sover for lidt"
// * #a6808e88-8740-48a2-b67e-0ae6daf7aee2 "Ustabil døgnrytme"
// * #c684526e-a922-4bba-936e-3741b51ae1a4 "Lang indsovning"
// * #39dedc66-fe8a-45bb-ad05-e1dee689428a "Usammenhængende søvn"
// * #03c93c46-86ad-4102-a7d5-2c7b3ad0f616	"Føler sig ikke udhvilet"

// * #1ff97bed-f371-4db6-8556-7ec7bfec2274 "Trist"
// * #5eaa4b16-11de-44fa-88ed-639e2bb1dd11 "Genert/stille"
// * #575fec77-05e3-42f1-9701-478c3c4acb27 "Kontaktsøgende/grænseløs"
// * #15a16fbc-32f1-4eac-b18c-55ebe1887a57 "Konstant argumenterende"
// * #1e2fc60e-a56f-4523-8d45-df51b0c611bf "Urolig/ukoncentreret"
// * #a59cd6a9-b147-47ba-bd87-a9e3eaf7449f "Afvisende"
// * #b8611ea4-7235-4990-9ada-4dccd86448b7 "Modtager ikke instruktioner"
// * #a701d676-dfe5-49fc-862c-92befd64739a "Konflikter i forældre-barn samspil"
// * #07abb1dd-4853-4c3c-8fab-ebe89c10dbc8 "Springer måltider over"
// * #626b7b4b-eb0f-4561-a5d5-f9ac8119f4af "Spiser sjældent sammen med andre"
// * #02788248-f5cf-4d87-99c7-d89fba446255 "Kræsen"

// * #37862a2d-393d-4302-98bf-399d475cdb21 "Begrænser energiindtag"
// * #89ab2b34-bdb4-4c0a-95f5-d7cd5e0f94cc "Spiser overdrevet sundt"
// * #49aedea9-cbe2-492b-a268-de7f2673a438 "Fysiske symptomer på mistrivsel"
// * #19b79e85-8259-4aba-a0a9-3f492fd6aa04 "Mangler venskaber"
// * #3c39b305-16e4-4d0a-98b8-305b76f8e22b "Mangler nære relationer"
// * #772f3089-9742-4b3e-8d12-662a66bebfef "Udsat for mobning"
// * #ae2192f1-cade-4d71-9321-fa79b6356a09 "Stressfølelse"
// * #178e96b1-35a4-412c-9525-0b0112fd6984 "Bekymrede tanker"
// * #a7ccd6bb-0718-473e-84c6-37d97e8402a5 "Depressive tanker"
// * #b9293b2f-881d-4822-9877-bcbdaef298ca "Oplever ikke at kunne overkomme sit liv"
// * #e774a9f9-d6dd-4b55-95ce-5e3f6df17695 "Bekymrende kropsopfattelse"
// * #2e1f0a6c-7554-4eb4-bbdf-837c25af2607 "Anden psykisk sårbarhed"
// * #56eca506-efe1-456b-a29d-86a392a02679 "Adfærdsvanskeligheder"
// * #e252608e-b6b6-49f7-84a0-03685d3b5f74 "Seksuel risikoadfærd"
// * #9028ce3b-678c-483e-8e1a-336dde907767 "Risikoadfærd, alkohol"
// * #47e6ea42-c32d-4fd7-ad0f-fdc66c8ba1f9 "Risikoadfærd, andre rusmidler"
// * #68d1e73a-7866-4cf9-b911-ba2b46e4ebda "Digital risikoadfærd"
// * #bbbcdccd-8410-4cfb-bfba-32fb54cec9ed "Selvskadende adfærd"
// * #1b3ec341-1441-44c1-88a9-795e47d307dd "Udøver mobning"
// * #f3446cc5-9054-41e5-954d-c8c7a724f0c0 "Udfordring med udtale"
// * #54c87d2b-b4b2-40eb-89e7-46cca2be757e "Udfordring med stammen"
// * #b44d5315-41dc-4d02-a16a-3dbe1c31df0f "Udfordring med sproganvendelse"
// * #fbc23626-556f-4eeb-b494-0a5af1dd2dd6 "Udfordring med at målrette opmærksomhed"
// * #b79078ce-c5b1-44ad-ad55-7e01b6edc3c5 "Dagurininkontinens"
// * #54f42eb5-18f9-4e82-98e0-1c83988189b9 "Naturininkontinens"
// * #9642daa3-7ec8-41a8-b5a0-111123de4193 "Afføringsinkontinens"
// //Vægt og vækst tilstande
// * #37ef9400-2229-4cea-877c-8d653c9ec5ca	"Vigende hovedomfang"
// * #3c8735c2-f599-44ea-840d-a0d09db4ce2b	"Vigende vægt"
// * #8bb204b0-9d83-4562-bcde-aea7aee78e34	"Overvægt"
// * #03093611-8e3e-4d9b-9f65-6c9670c3fc91	"Vigende højdevækst"
// * #0e7c61be-403e-495b-90ec-348fd0647e66	"Andet ernæringsproblem"
// * #aabcb5b7-1523-4de9-9505-d685246beb04	"Problem med hud og/eller slimhinder"
// * #f4971268-d17b-41ec-a1d7-526ce0d08bec	"Andet psykosocialt problem"
// * #54f8263c-c4ac-494c-b276-90073c1f1a33	"Respirationsproblem"
// * #3bdc1cf9-dae1-40b1-9a82-b39ef72a433f	"Cirkulationsproblem"
// * #28a77e7c-c718-4187-9f46-84f50664a967	"Smerte og/eller sanseproblem"
// * #03b4d589-3ff5-437e-ba83-f212579d9707	"Viden- og udviklingsproblem"
// * #dc822827-a548-4e90-8bd6-90f231b89cb5	"Andet udskillelsesproblem"
// * #45144c31-9818-4dc8-9b63-4bf997a49961	"Misdannelse"
// //Fund for madning af spædbørn
// * #77a008dd-21cc-452f-a1ee-ac8d025b7817 "Fuldamning, inklusiv modermælk på flaske"
// * #0a993974-e314-4f76-8c80-c3770fdefe37 "Ammes primært"
// * #3edc905c-2830-442a-98cc-463cc3701dd1 "Ammes som supplement til anden kost"
// * #dfab6d07-b1b6-4210-ac8a-b8a0d095c8ab "Modermælkserstatning og/eller overgangskost"
// * #5101d1ac-b96f-4dd9-a42e-e3f765f747e1 "Udelukkende familiens mad"
// //kilde - flyttes fra FFinst til KL-term
// * #a3d30bf2-4a3c-4c49-9001-5363ae11681c "Borger"
// * #71675b26-285e-4551-9488-991d8b34a12a "Borger støttet af pårørende"
// * #5937b533-a4e3-45af-9ddf-61dce1d56b74 "Borger støttet af medarbejder"
// * #d5762abe-706b-4d52-ac2b-2621c60486b2 "Pårørende alene"
// * #111b2c8a-389d-4ecc-9187-ce78f019649b "Medarbejder alene"
// * #601dbb34-a0ad-449b-8f03-6dcce9121b97 "Medarbejder og pårørende alene"




CodeSystem: SNOMED_CT_INT
Title: "SNOMED CT International Edition"
Description: "SNOMED CT is a core clinical healthcare terminology that contains concepts with unique meanings and formal logic based definitions organized into hierarchies."
Id: SNOMED-CT-INT
* ^language = #en
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/codesystem-properties-mode"
* ^extension.valueCode = #not-present
* ^url = "http://snomed.info/sct"
* ^identifier.system = "urn:ietf:rfc:3986"
* ^identifier.value = "urn:oid:2.16.840.1.113883.6.96"
* ^status = #active
* ^experimental = false
* ^date = "2023-09-30"
* ^publisher = "International Health Terminology Standards Development Organisation (IHTSDO) trading as SNOMED International"
* ^contact.name = "International Health Terminology Standards Development Organisation (IHTSDO) trading as SNOMED International"
* ^contact.telecom.system = #email
* ^contact.telecom.value = "info@snomed.org"
* ^copyright = "This artefact includes content from SNOMED Clinical Terms (SNOMED CT) which is copyrighted material of the International Health Terminology Standards Development Organisation (IHTSDO). Where an implementation of this artefact makes use of SNOMED CT content, the implementer must have the appropriate SNOMED CT Affiliate license - for more information contact http://www.snomed.org/snomed-ct/get-snomed-ct or info@snomed.org"
* ^caseSensitive = true
* ^content = #fragment
* #27113001 "Body weight"
* #363812007 "Head circumference"
* #229819007 "Tobacco use and exposure (observable entity)"
* #285854004 "Emotion"
* #276885007 "Core body temperature"
* #1153637007 "Body height (observable entity)"
* #248333004 "Standing height"
* #1149101003 "Recumbent body height (observable entity)" 
* #225597007 "Ability to interact with others (observable entity)"
* #450320001 "Edinburgh postnatal depression scale score"
* #718133008 "Strengths and Difficulties Questionnaire for parents or teachers of 4-17 year olds score"
* #717639006 "Strengths and Difficulties Questionnaire self-rated for 11-17 year old score"
* #169740003 "Infant feeding method (observable entity)"
* #363788007 "Clinical history/examination observable (observable entity)"

CodeSystem: LOINC
Id: LOINC
Title: "Logical Observation Identifiers, Names and Codes (LOINC)"
Description: "LOINC provides a set of universal names and ID codes for identifying laboratory and clinical test results.1,2 LOINC facilitates the exchange and pooling of results, such as blood hemoglobin, serum potassium, or vital signs, for clinical care, outcomes management, and research. LOINC's universal identifiers (names and codes) can be used in the context of order and observation exchanges between information systems that use syntax standards such as HL73, CEN TC251, ISO TC215, ASTM4, and DICOM. Specifically, the identifier can be used as the coded value for an observation in any other standard that uses the observation/observation value paradigm, whether messages, documents, application programming interface (API), etc. For example, LOINC codes are used widely in the OBX segment Observation Identifier field (OBX-3) of an ORU HL7 (HL7 version 2.x or ASTM 1238-9410) message that may be sent between a Clinical Laboratory Information Management Systems (LIMS) and Electronic Health Record Systems (EHR).5, 6 In this way, LOINC codes provide universal identifiers that allow the exchange of clinical data between heterogeneous computing environments."
* ^language = #en
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/codesystem-properties-mode"
* ^extension.valueCode = #not-present
* ^url = "http://loinc.org"
* ^identifier[0].system = "urn:ietf:rfc:3986"
* ^identifier[=].value = "urn:oid:2.16.840.1.113883.6.1"
* ^version = "3.1.0"
* ^status = #active
* ^experimental = false
* ^date = "2022-11-22"
* ^publisher = "LOINC and Health Data Standards, Regenstrief Institute, Inc."
* ^contact.name = "LOINC and Health Data Standards, Regenstrief Institute, Inc."
* ^copyright = "Per the LOINC License \"Permission is hereby granted in perpetuity, without payment of license fees or royalties, to use, copy, or distribute the Licensed Materials for any commercial or non-commercial purpose, subject to the following terms and conditions\" Please also note that some content (for example some of the assessment scale content) within LOINC is subject to copyright from third parties and is present in LOINC with permission or under the applicable terms of use from the third party.  Some included third party content requires attribution specific to a particular LOINC code or codes. Such third party content is identified in the LOINC Table and LOINC Table Core by the applicable copyright notice stored in the EXTERNAL_COPYRIGHT_NOTICE field. For further information and for details of how implementers should manage use of third party content (including license obligations) please see https://loinc.org/kb/license/"
* ^caseSensitive = true
* ^content = #fragment
* #8302-2 "Body height"
* #29463-7 "Body weight"
* #9843-4 "Head Occipital-frontal circumference"

ValueSet: EncounterClassCodes
Title: "KontaktKlasseKoder"
Description: "Codes to describe the mode of delivery of an encounter"
* ^experimental = false
* include codes from valueset http://terminology.hl7.org/ValueSet/v3-ActEncounterCode
* $KLCommonCodes#1b55a4b0-1156-4f58-b2df-b5c6014d9048 //"Telefonisk" KLCommonCareSocialCodes
* $KLCommonCodes#124be95d-6924-4609-9d2a-e7c73ae3ab3d //"Skærmbesøg" KLCommonCareSocialCodes

ValueSet: FindingInformerCodes  //I virkeligheden FFInst-koder. Disse bør tilføjes til KLterm, hvis de ikke allered er?
Title: "KildeTilOplysningKoder"
Description: "Codes for who informed the findings"
* ^experimental = false
* $KLCommonCodes#25b4e705-2e9a-47a2-b11a-c829316b9d3a //"Borger"
* $KLCommonCodes#b66dc78a-a673-43fc-8ac0-1e859ba626e0 //"Borger støttet af pårørende"
* $KLCommonCodes#12428e48-7df8-441f-9a89-d92bb7874066 //"Borger støttet af medarbejder"
* $KLCommonCodes#166d2437-4e47-4a52-bd94-cdbe91086ca6 //"Pårørende alene"
* $KLCommonCodes#8fe80acb-2c2a-4f10-b2b8-ddb77d2f69dc //"Medarbejder alene"
* $KLCommonCodes#329774f9-7700-47cf-9c00-63765d9e8078 //"Medarbejder og pårørende alene"

ValueSet: KLHealthNurseInterventions
Id: KLHealthNurseInterventions
Title: "Sundhedsplejeindsatser"
Description: "Need based interventions used in municipality health nursing (sundhedsplejen)"
* ^experimental = false
* include codes from system $FBOE where concept descendent-of #6cbf8b19-5aff-4f6f-a7dc-9a411197bcff //Familieindsatser
* include codes from system $FBOE where concept descendent-of #5a45df21-d80c-4b41-9e5a-4896a519c6c6	//Indsats til forælder
* include codes from system $FBOE where concept descendent-of #76a96391-7b5a-4d29-8471-9b7d238cb9df	//Indsatser vedr. fysisk sundhed
* include codes from system $FBOE where concept descendent-of #3cd144c0-7b1e-4ca3-9f21-28f9c8918a74	//Familie- og trivselsindsatser
* include codes from system $FBOE where concept descendent-of #52d1d013-4fdd-49b1-bba0-b7c00458852c	//Sundhedsindsatser
* include codes from system $FBOE where concept descendent-of #b062a901-1364-4ed6-8d40-f4f14cfc737a	//Samarbejdsindsatser

ValueSet: KLHealthNurseConditions
Id: KLHealthNurseConditions
Title: "Sundhedsplejetilstande"
Description: "Health nurse conditions, that relates to nursing problem areas and/or challenges found in examinations and evaluations made by the health nurse (sundhedsplejerske)"
* ^experimental = false
* include codes from valueset ExamResults
// Ekskludering af normale fund i ExamResults
* exclude $FBOE#be128c20-851d-4217-b8df-744d8af39cac //For det meste meget glad
* exclude $FBOE#6bea1014-8e30-40e7-9274-2b02376c0b1b //For det meste glad
* exclude $FBOE#9b4b5194-cf7f-4274-a691-734c24adb0b7 //For det meste meget glad i skolen
* exclude $FBOE#5dc857f6-1220-4762-a718-31a6101b5d61 //For det meste glad i skolen

//aktuelle problemer fra obligatoriske datapunkter
* $FBOE#e1c1674c-9384-4d95-999f-763f3868f444 //"Udfordring i social kontakt"
* $FBOE#80aa0dab-aa41-45b1-a2cc-16d7e3733fdd //	"Udfordringer i forældre-barn-relation"
* $FBOE#f86c2526-3b04-454c-a99e-d350f699dc94 //"Udfordret psykisk tilstand"
* $FBOE#2461e246-b75c-46bb-b6ad-c68d529ace7e //"Sårbarhed"
* $FBOE#983ff338-2e77-413d-b157-66d0141a4a96 //	"Sparsomt netværk"
* $FBOE#d9f00ad4-4305-4bd0-aedf-2e51bef602e2 //	"Udfordring med kommunikation"
* $FBOE#c25b5cda-3f6b-4ef7-998d-c22c58c6dd18 //	"Udfordring med søvn"
* $FBOE#aeade013-b14a-4ad3-80da-66742782411e //	"Udfordringer med motorik"
* $FBOE#019e3a2d-775c-4660-8183-75206b47048f //	"Problem med kost"
* $FBOE#38f72570-630f-40c6-8a60-cf2e1bddc8eb //	"Meget stillesiddende aktivitet"
* $FBOE#2ef19cdf-f6e6-4b2c-aaef-f466e33cf261 //	"Overdreven motion"
* $FBOE#c4c79311-ba80-4890-9008-c2f62ab00eda //	"Potentielt problem med hørelse"
* $FBOE#4d4b20b6-0159-4014-ac1c-46a7a860b204 // "Kendt problem med hørelse"
* $FBOE#0896610c-1322-44f2-836c-774de52fc3f1 //	"Potentielt problem med syn"
* $FBOE#e489119b-de75-47cc-a53b-6ba90ed2c7e8 //	"Kendt problem med syn"
* $FBOE#5bc59698-bdf9-48db-ab97-20c43d7ff4f1 //	"Udsat for tobaksrøg"
* $FBOE#cfe9150e-380e-4ce3-a120-2e2b227c8b9f //	"Bruger nikotin"
//højde/vægt fund
* $FBOE#37ef9400-2229-4cea-877c-8d653c9ec5ca //	"Vigende hovedomfang"
* $FBOE#3c8735c2-f599-44ea-840d-a0d09db4ce2b //	"Vigende vægt"
* $FBOE#8bb204b0-9d83-4562-bcde-aea7aee78e34 //	"Overvægt"
* $FBOE#03093611-8e3e-4d9b-9f65-6c9670c3fc91 //	"Vigende højdevækst"
//Andre tilstande, hørede til de 12 områder
* $FBOE#0e7c61be-403e-495b-90ec-348fd0647e66 //	"Andet ernæringsproblem"
* $FBOE#aabcb5b7-1523-4de9-9505-d685246beb04 //	"Problem med hud og/eller slimhinder"
* $FBOE#f4971268-d17b-41ec-a1d7-526ce0d08bec //	"Andet psykosocialt problem"
* $FBOE#54f8263c-c4ac-494c-b276-90073c1f1a33 //	"Respirationsproblem"
* $FBOE#3bdc1cf9-dae1-40b1-9a82-b39ef72a433f //	"Cirkulationsproblem"
* $FBOE#28a77e7c-c718-4187-9f46-84f50664a967 //	"Smerte og/eller sanseproblem"
* $FBOE#03b4d589-3ff5-437e-ba83-f212579d9707 //	"Viden- og udviklingsproblem"
* $FBOE#dc822827-a548-4e90-8bd6-90f231b89cb5 //	"Andet udskillelsesproblem"
* $FBOE#45144c31-9818-4dc8-9b63-4bf997a49961 //	"Misdannelse"


ValueSet: EncounterTypes
Id: EncounterTypes
Title: "SundhedsplejeKontaktTyper"
Description: "Extension on encountertype valueset, to be implemented in KL-term and FKI, does not use exciting codes only those specific to childrens nursing"
* ^experimental = false
* $FBOE#d3c00541-f1d3-4c43-b5fc-16e8914ca1df //"Graviditetsbesøg"
* $FBOE#7d35a193-e808-4e77-b361-6c0d114d021f //"Barselsbesøg"
* $FBOE#b4bf6058-502a-4d64-bb8e-369661f43b47 //"Etableringsbesøg"
* $FBOE#563c4174-f451-4c87-8db8-8d5472ca7ff6 // "Andet besøg inden første måned"
* $FBOE#51f30d1c-d60e-4e3e-ac22-ec9712ea962d // "Besøg hos det ca. 2 måneder gamle barn"
* $FBOE#58ff370b-a775-4bec-b24a-91604e0a5fe7 // "Besøg hos det 4-6 måneder gamle barn"
* $FBOE#3f3e6489-31bd-44cf-9920-3c632868feb7 // "Besøg hos det 8-11 måneder gamle barn"
* $FBOE#4b039ba1-4005-42e6-b672-09b81ad7578a //'Behovskontakt med småbørnssundhedsplejen'/"Behovskontakt med småbørnssundhedsplejen" 
* $FBOE#b30f139c-fac5-416e-b84a-a3429f0222c2 //"Almindelig forebyggende småbørnskontakt"
* $FBOE#c06ed6f1-be9d-460e-a45e-34821bcbd533 // "Indskolingsundersøgelse"
* $FBOE#d01bcb90-2b29-44f4-834c-191d6dd4a08a // "Undersøgelse i mellemtrin, med måling"
* $FBOE#dd766967-4d02-4c17-8ed3-021852785fdf // "Udskolingsundersøgelse"
* $FBOE#606c6585-444b-4ecd-885c-2ee59dc33f32 //"Behovskontakt med skolesundhedsplejen"
* $FBOE#17f5f9fa-3e1c-42fe-9ef3-178bc7900f67 //"Almindelig forebyggende skolebørnskontakt"


ValueSet: ParentTypes
Id: ParentTypes
Title: "ForælderTyper"
Description: "Limitation on HL7 role class to only represent parent-relationships, as accepted in the children data-set"
* ^experimental = false
* $RoleCode#PRN
//* $RoleClass#GUARD

ValueSet: BodyheightSCTobservablesChildren
Title: "HøjdeObservationskoderSCT"
Description: "SNOMED CT observables for length/height"
* ^experimental = false
* $SCT#1153637007 //Body height (observable entity)
* $SCT#248333004 //Standing height
* $SCT#1149101003 //Recumbent body height (observable entity)

ValueSet: FeedingResultsChildren
Title: "ResultatkoderSmåbørnMad"
Description: "Resultcodes for feeding"
* ^experimental = false
* $FBOE#77a008dd-21cc-452f-a1ee-ac8d025b7817 //"Fuldamning, inklusiv modermælk på flaske"
* $FBOE#0a993974-e314-4f76-8c80-c3770fdefe37 //"Ammes primært"
* $FBOE#3edc905c-2830-442a-98cc-463cc3701dd1 //"Ammes som supplement til anden kost"
* $FBOE#dfab6d07-b1b6-4210-ac8a-b8a0d095c8ab //"Modermælkserstatning og/eller overgangskost"
* $FBOE#5101d1ac-b96f-4dd9-a42e-e3f765f747e1 //"Udelukkende familiens mad"


ValueSet: ObservationUnitsWeight
Title: "ObservationsEnhederVægt"
Description: "UCUM units for childrens weight"
* ^experimental = false
* $UCUM#kg
* $UCUM#g

ValueSet: IndicatorCodesChildren
Title: "SundhedsplejeIndikatorkoder"
Description: "Indicator-observables for parents and children"
* ^experimental = false
* $FBOE#2c39af9f-8e45-4c88-962f-e7a9e2cd31b6 // Forælders psykiske tilstand
* $FBOE#58997614-ba43-4534-90bd-10c7e76802f4 //	Forælders sårbarhed
* $FBOE#7e7fab2f-278a-4b14-9bc9-efc36fffcba5 //	Netværk
* $FBOE#68605f88-49fb-44b9-b327-86947af6aa93 //	Social kontakt
* $FBOE#763c6f21-5467-4713-82fb-716c9d0a1fdf //	Forældre-barn-relation
* $FBOE#653c2b0b-bb64-4906-888b-aea6fef3c3f8 //	Kommunikation
* $FBOE#73f981f8-455a-4158-b435-7c6d83ab84da //	Søvn
* $FBOE#e04f2ca1-888a-4671-a97a-371b525cd2a3 //	Motorik
* $FBOE#b331fe02-a781-4abd-b6db-9331d6a69b15 //	Fysisk aktivitet
* $FBOE#a22c4b53-b622-4394-ba13-910a7b0d7b0d //	Hørelse
* $FBOE#01fddd46-ed7c-423d-b191-ffdd977dd61e //	Syn
* $FBOE#28972d4b-fea3-42ec-b2a5-e2a26f79b14d //	Passiv rygning
* $FBOE#76891f7b-cf49-4cb2-88d6-728a509eb75d //	Brug af nikotin
* $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 //Ernæring

ValueSet: ParentsMentalCodes
Title: "ForældresPsykiskeTilstandKoder"
Description: "Mandatory result values for parents mental state"
* ^experimental = false
* $FBOE#0e5db980-8c6e-4034-abab-054e0eb40935 //"Forventelig psykisk reaktion"
* $FBOE#b8220216-e185-451b-8d2a-67cdf73c42c3 //"Let psykisk reaktion"
* $FBOE#f86c2526-3b04-454c-a99e-d350f699dc94 //"Psykisk reaktion"

ValueSet: SocialInteractionCodes
Title: "SocialKontaktKoder"
Description: "Mandatory result values for social interaction in small children and school children"
* ^experimental = false
* $FBOE#008b1890-4be5-463a-b618-0ab3d89515d0 //"Alderssvarende social kontakt"
* $FBOE#18938eb0-3f40-48c5-9971-7255aa86336a //"Få tegn på udfordringer i social kontakt" 
* $FBOE#e1c1674c-9384-4d95-999f-763f3868f444 //"Udfordring i social kontakt"

ValueSet: ChildrenParentRelationshipCodes
Title: "ForældreBarnRelationsKoder"
Description: "Mandatory result values for parent child relationship in small children and school children"
* ^experimental = false
* $FBOE#7a107df6-8fb8-4744-8413-be10b4c5c1d9 //	Velfungerende forældre-barn-relation
* $FBOE#274791a5-094d-4e6a-831e-e712d3d66aeb // Let påvirket forældre-barn-relation
* $FBOE#80aa0dab-aa41-45b1-a2cc-16d7e3733fdd //	Udfordringer i forældre-barn-relation

ValueSet: ParentSocialStatusCodes
Title: "ForældresSårbarhedKoder"
Description: "Mandatory result values for parents social status. Only documented in parents of small children"
* ^experimental = false
* $FBOE#57dd67d7-175a-4541-87ff-db1381c4e1d9 //	Ingen sårbarhed 
* $FBOE#546e7bef-7a22-451e-971a-326fcd78a843 //	Potentiel sårbarhed
* $FBOE#2461e246-b75c-46bb-b6ad-c68d529ace7e //	Sårbarhed

ValueSet: SocialSupportNetworkCodes
Title: "NetværkKoder"
Description: "Mandatory result values for social support network of the family"
* ^experimental = false
* $FBOE#fbd9a8a5-0ed6-4e1a-9841-066ade34b071 //	Godt netværk
* $FBOE#983ff338-2e77-413d-b157-66d0141a4a96 //	Sparsomt netværk

ValueSet: CommunicationCodes
Title: "KommunikationKoder"
Description: "Mandatory result values for ability to communicate in small children and school children"
* ^experimental = false
* $FBOE#042d522d-0abe-46eb-a958-6e235b5d5408 // Kommunikerer alderssvarende 
* $FBOE#851ad2f2-a805-4d81-a1d8-15c3b09f5949 //	Få tegn på udfordret kommunikation 
* $FBOE#d9f00ad4-4305-4bd0-aedf-2e51bef602e2 //	Udfordring med kommunikation

ValueSet: SleepCodes
Title: "SøvnKoder"
Description: "Mandatory result values for challenges in sleeping pattern in small children and school children"
* ^experimental = false
* $FBOE#b07eec60-941d-484d-8c2a-aeaa2ba798bf //	Søvn med normale variationer
* $FBOE#d13ad530-d8f6-4933-be18-bb77e2334f9f //	Let forstyrret søvn
* $FBOE#c25b5cda-3f6b-4ef7-998d-c22c58c6dd18 //	Udfordring med søvn

ValueSet: MotorFunctionCodes
Title: "MotorikKoder"
Description: "Mandatory result values for motor function in small children and school children"
* ^experimental = false
* $FBOE#d5b876e1-a86c-4768-b46d-cd795eaa89e4 //	Alderssvarende motorik
* $FBOE#936a0163-08eb-4fdb-bf0c-bcf5bc7cb3f6 //	Få tegn på udfordret motorik
* $FBOE#aeade013-b14a-4ad3-80da-66742782411e //	Udfordringer med motorik

ValueSet: NutritionCodes
Title: "ErnæringKoder"
Description: "Mandatory result values for nutrition in school children"
* ^experimental = false
* $FBOE#78dcf013-8ae9-4541-b175-100cde77a9f0 //	Almindeligt kostindtag
* $FBOE#abecea75-32cd-4388-80fd-319a30701bf6 //	Enkelte udfordringer med kost
* $FBOE#019e3a2d-775c-4660-8183-75206b47048f //	Problem med kost

ValueSet: PhysicalActivityCodes
Title: "FysiskAktiviteteKoder"
Description: "Mandatory result values for physical activity in school children"
* ^experimental = false
* $FBOE#05086dad-8718-4a6c-b096-54c7101d0b2c //	Fysisk aktiv
* $FBOE#2effe989-0cc3-4dce-ad93-9f6503b91eaa //	Moderat fysisk aktiv
* $FBOE#38f72570-630f-40c6-8a60-cf2e1bddc8eb //	Meget stillesiddende aktivitet
* $FBOE#2ef19cdf-f6e6-4b2c-aaef-f466e33cf261 //	Overdreven motion

ValueSet: HearingCodes
Title: "HørelseKoder"
Description: "Mandatory result values for hearning in school children"
* ^experimental = false
* $FBOE#9628db65-7460-4ecc-bbb1-48c0ac4b3f02 //	Normal hørelse
* $FBOE#c4c79311-ba80-4890-9008-c2f62ab00eda //	Potentielt problem med hørelse
* $FBOE#4d4b20b6-0159-4014-ac1c-46a7a860b204 //	"Kendt problem med hørelse"


ValueSet: SightCodes
Title: "SynKoder"
Description: "Mandatory result values for sight in school children"
* ^experimental = false
* $FBOE#bdcb835d-6ef6-4c4f-9fdf-94c3ebd17182 //	Normalt syn
* $FBOE#0896610c-1322-44f2-836c-774de52fc3f1 //	Potentielt problem med syn
* $FBOE#e489119b-de75-47cc-a53b-6ba90ed2c7e8 // "Kendt problem med syn"

ValueSet: PassiveSmokingCodes
Title: "PassivRygningKoder"
Description: "Mandatory result values for passive smoking in small- and school children"
* ^experimental = false
* $FBOE#b54723cf-3114-4119-b1cb-28107a283a99 //	"Ikke udsat for tobaksrøg"
* $FBOE#5bc59698-bdf9-48db-ab97-20c43d7ff4f1 //	"Udsat for tobaksrøg"

ValueSet: NicotineCodes
Title: "NikotinKoder"
Description: "Mandatory result values for nicotine use in school children"
* ^experimental = false
* $FBOE#a7a53cfd-c7bb-4573-a4ae-2eb18e3dda1f //	"Ikke prøvet nikotin"
* $FBOE#fd145ea6-b7de-466c-9053-8b4a0be960ac //	"Har prøvet nikotin"
* $FBOE#cfe9150e-380e-4ce3-a120-2e2b227c8b9f //	"Bruger nikotin"

ValueSet: ExamResults
Title: "UndersøgelsesResultatKoder"
Description: "Valueset for optional history and examination findings in small children and school children"
* ^experimental = false
* $FBOE#a038c064-b57d-4a62-9333-c9456817595d //	 "Fysiske behov mødes ikke"
* $FBOE#51bc227a-3455-474d-bf42-fc7a7875513c //	 "Følelsesmæssige behov opfyldes ikke"
* $FBOE#d3fc57b7-3a5d-4f69-bcb0-bdb8363650eb //	 "Udfordring i forældre-barn samspil "
* $FBOE#fc4b6e6d-a055-49bf-adab-474e0a810675	// "Aktiviteter ikke afpasset"
* $FBOE#00a9f897-f784-4164-966c-eba94171ec82	// "Uforudsigelighed"
* $FBOE#53db2598-28be-4d04-8b3a-0005581f1fda	// "Barn med særlige behov, forældreudfordringer"
* $FBOE#bfd18100-d007-4465-95ce-5bf2ac8bc091	// "Dårlig øjenkontakt"
* $FBOE#0ec86d42-83b9-4d2d-b56a-f6d352b58ccf	// "Følelsesmæssigt nedtonet"
* $FBOE#3c18d87b-af46-4305-9040-320d90b2f343	 // "Nedsat aktivitetsniveau"
* $FBOE#be8a4c9c-7898-4263-b853-c5d7347e8cec	// "Manglende vokalisering"
* $FBOE#e818645e-47a7-4125-a579-a68f556b7344	// "Græder meget"
* $FBOE#b5f8c711-8aa3-4a6d-8570-6e9312e86b09	// "Engagerer sig ikke i kontakt"
* $FBOE#3f30980a-7bf3-401e-ada8-a3818c352c29	// "Ukritisk i kontakt"
* $FBOE#fc3d65d1-1509-47ef-8845-60adea5d7a65	// "Nedtrykthed"
* $FBOE#b2fcb139-2e61-480e-96f5-5a7cea82be4c	// "Nedsat lyst/interesse"
* $FBOE#1050e706-b685-4310-9194-89c6d8903865	// "Nedsat energi/øget træthed"
* $FBOE#dc7cdfb3-d33b-41cc-bb18-2be3592fe323	// "Depressive ledsagesymptomer"
* $FBOE#db926a42-517f-4cb0-94f7-0eebd74ce163	// "Tanker om selvskade/selvmord"
* $FBOE#7820eaa8-72e0-4f4b-8da7-ddcd74f50c3a	// "Overbekymret/angst"
* $FBOE#b4032c0c-6e9a-4431-8ce4-97ba4f4574b3	// "Misbrug"
* $FBOE#15fc2e8e-b27b-4957-be98-954c1bc318a3	// "Konflikt med den anden forælder"
* $FBOE#de666a03-1211-4d75-b416-8c8785a40a4b	// "Problem med økonomi"
* $FBOE#7acf5936-6640-44a7-af6d-b20c7607dcfe	// "Traumatiske oplevelser"
* $FBOE#577d33d5-2eff-47ba-b5d0-c4438b8f49c0	// "Dårlig fødselsoplevelse med dette barn"
* $FBOE#d1cd9a33-3800-4901-ab7b-b630ee1be46e	// "Tidligere dårlig fødselsoplevelse"
* $FBOE#87fbc4e5-717a-4395-aa8f-c2c0c0bca763	// "Tab i familien"
* $FBOE#d126c096-30f0-49c0-8d15-7a50c888d50b	// "Sygdom eller handicap"
* $FBOE#8036b9f6-e00d-4956-8704-61ba08287735	// "Dårlig appetitregulering og/eller overspisning."
* $FBOE#9b0e6538-a24f-47be-9c06-2988cfaef63a	// "Småt og/eller selektivt spisende eller vægrer sig ved at spise"
* $FBOE#b887a387-c630-43a0-96a3-2b5c7c84e043	// "Gylper meget/kaster meget op"
* $FBOE#4813e65d-4d24-4c82-8f17-ce9f084bb970	// "Udfordring med amning"
* $FBOE#37bfe2f5-bdd2-42b0-a1c9-4787860ce624	// "Udfordringer med gensidig kommunikation "
* $FBOE#8821649f-0f50-4dfa-87e3-8ac2d17d01d5	// "Udfordringer med fælles opmærksomhed"
* $FBOE#df3e0246-892e-4d5e-af1d-1d1443196f20	// "Udfordringer med sprogforståelse"
* $FBOE#355959ff-6122-4e23-9b69-835f739dd42d	// "Udfordringer med sprogligt udtryk"
* $FBOE#5e83b4b4-8bd0-442b-8e34-77c435105aed	// "Udfordringer med opmærksomhed"
* $FBOE#fcb3733c-e438-4d67-bf02-bb3071e0ba79	// "Sover for lidt"
* $FBOE#a6808e88-8740-48a2-b67e-0ae6daf7aee2	// "Ustabil døgnrytme "
* $FBOE#c684526e-a922-4bba-936e-3741b51ae1a4	// "Lang indsovning"
* $FBOE#39dedc66-fe8a-45bb-ad05-e1dee689428a	// "Usammenhængende søvn"
* $FBOE#03c93c46-86ad-4102-a7d5-2c7b3ad0f616	// "Føler sig ikke udhvilet"
* $FBOE#1ff97bed-f371-4db6-8556-7ec7bfec2274	// "Trist"
* $FBOE#5eaa4b16-11de-44fa-88ed-639e2bb1dd11	// "Genert/stille"
* $FBOE#15a16fbc-32f1-4eac-b18c-55ebe1887a57	// "Konstant argumenterende"
* $FBOE#1e2fc60e-a56f-4523-8d45-df51b0c611bf	// "Urolig/ukoncentreret"
* $FBOE#a59cd6a9-b147-47ba-bd87-a9e3eaf7449f	// "Afvisende"
* $FBOE#b8611ea4-7235-4990-9ada-4dccd86448b7	// "Modtager ikke instruktioner"
* $FBOE#a701d676-dfe5-49fc-862c-92befd64739a	// "Konflikter i forældre-barn samspil"
* $FBOE#07abb1dd-4853-4c3c-8fab-ebe89c10dbc8	// "Springer måltider over"
* $FBOE#626b7b4b-eb0f-4561-a5d5-f9ac8119f4af	// "Spiser sjældent sammen med andre"
* $FBOE#02788248-f5cf-4d87-99c7-d89fba446255	// "Kræsen"
* $FBOE#37862a2d-393d-4302-98bf-399d475cdb21	// "Begrænser energiindtag"
* $FBOE#89ab2b34-bdb4-4c0a-95f5-d7cd5e0f94cc	// "Spiser overdrevet sundt"
* $FBOE#49aedea9-cbe2-492b-a268-de7f2673a438	// "Fysiske symptomer på mistrivsel"
* $FBOE#19b79e85-8259-4aba-a0a9-3f492fd6aa04	// "Mangler venskaber"
* $FBOE#3c39b305-16e4-4d0a-98b8-305b76f8e22b	// "Mangler nære relationer"
* $FBOE#772f3089-9742-4b3e-8d12-662a66bebfef	// "Udsat for mobning"
* $FBOE#ae2192f1-cade-4d71-9321-fa79b6356a09	// "Stressfølelse"
* $FBOE#178e96b1-35a4-412c-9525-0b0112fd6984	// "Bekymrede tanker"
* $FBOE#a7ccd6bb-0718-473e-84c6-37d97e8402a5	// "Depressive tanker"
* $FBOE#b9293b2f-881d-4822-9877-bcbdaef298ca	// "Oplever ikke at kunne overkomme sit liv"
* $FBOE#e774a9f9-d6dd-4b55-95ce-5e3f6df17695	// "Bekymrende kropsopfattelse"
* $FBOE#2e1f0a6c-7554-4eb4-bbdf-837c25af2607	// "Anden psykisk sårbarhed"
* $FBOE#56eca506-efe1-456b-a29d-86a392a02679	// "Adfærdsvanskeligheder"
* $FBOE#e252608e-b6b6-49f7-84a0-03685d3b5f74	// "Seksuel risikoadfærd"
* $FBOE#9028ce3b-678c-483e-8e1a-336dde907767	// "Risikoadfærd, alkohol"
* $FBOE#47e6ea42-c32d-4fd7-ad0f-fdc66c8ba1f9	// "Risikoadfærd, andre rusmidler"
* $FBOE#68d1e73a-7866-4cf9-b911-ba2b46e4ebda	// "Digital risikoadfærd"
* $FBOE#bbbcdccd-8410-4cfb-bfba-32fb54cec9ed	// "Selvskadende adfærd"
* $FBOE#1b3ec341-1441-44c1-88a9-795e47d307dd	// "Udøver mobning"
* $FBOE#f3446cc5-9054-41e5-954d-c8c7a724f0c0	// "Udfordring med udtale"
* $FBOE#54c87d2b-b4b2-40eb-89e7-46cca2be757e	// "Udfordring med stammen"
* $FBOE#b44d5315-41dc-4d02-a16a-3dbe1c31df0f	// "Udfordring med sproganvendelse"
* $FBOE#fbc23626-556f-4eeb-b494-0a5af1dd2dd6	// "Udfordring med at målrette opmærksomhed"
* $FBOE#b79078ce-c5b1-44ad-ad55-7e01b6edc3c5	// "Dagurininkontinens"
* $FBOE#54f42eb5-18f9-4e82-98e0-1c83988189b9	// "Naturininkontinens"
* $FBOE#9642daa3-7ec8-41a8-b5a0-111123de4193	// "Afføringsinkontinens"

* $FBOE#be128c20-851d-4217-b8df-744d8af39cac //"for det meste meget glad" "Barnet vurderer selv for det meste at være meget glad"
* $FBOE#6bea1014-8e30-40e7-9274-2b02376c0b1b //"for det meste glad" "Barnet vurderer selv for det meste at være glad"
* $FBOE#2c945a43-a07b-4b26-b4cc-205ba15a1251 //"for det meste midt imellem" "Barnet vurderer selv for det meste at være midt imellem glad og ikke glad"
* $FBOE#10edfc52-3632-453b-8db1-af6691049885 //"for det meste ikke glad" "Barnet vurderer selv for det meste ikke at være glad"
* $FBOE#9b4b5194-cf7f-4274-a691-734c24adb0b7 //"for det meste meget glad i skolen" "Barnet vurderer selv for det meste at være meget glad i skolen"
* $FBOE#5dc857f6-1220-4762-a718-31a6101b5d61 //"for det meste glad i skolen" "Barnet vurderer selv for det meste at være glad i skolen"
* $FBOE#2e026475-a2ec-45e3-92d8-f0bed307cceb //"for det meste midt imellem i skolen" "Barnet vurderer selv for det meste at være midt imellem glad og ikke glad i skolen"
* $FBOE#822dffb2-3b29-4f86-9784-757954d6a047 //"for det meste ikke glad i skolen"


---

File: repos/hl7dk_SLASH_kl-children/input/fsh/deliveryReport.fsh

Profile: KLGatewayChildrenDeliveryReport
Parent: Bundle
Id: klgateway-children-delivery-report
Title: "KLGatewayChildrenDeliveryReport"
Description: "Delivery report to deliver data for each child, including state of the family."
* meta.profile 1..1
* meta.profile = Canonical(klgateway-children-delivery-report)
* identifier ..0
* type = #collection
* timestamp 1..1
* total ..0
* link 0..0
* entry.link 0..0
* entry.resource 1..1
* entry.resource only
    klgateway-children-encounter or
    klgateway-children-citizen or
    klgateway-children-related-parent or
    klgateway-children-intervention or
    klgateway-children-questionnaire-response or
    klgateway-children-location or
    Observation
* entry.search ..0
* entry.request ..0
* entry.response ..0
* signature ..0
* entry ^short = "[DK] indberetningsrapportIndhold"
* timestamp ^short = "[DK] indberetningsrapportTid"
* meta.profile ^short = "[DK] indberetningsrapportProfil"
* obeys gateway-children-report-1
* obeys gateway-children-report-parent-mental-state
* obeys gateway-children-report-parent-social-status
* obeys gateway-children-report-support-network
* obeys gateway-children-report-social-interaction
* obeys gateway-children-report-parent-relationship
* obeys gateway-children-report-weight
* obeys gateway-children-report-height
* obeys gateway-children-report-head-circumference
* obeys gateway-children-report-passive-smoking
* obeys gateway-children-report-nicotine
* obeys gateway-children-report-nutrition
* obeys gateway-children-report-communication
* obeys gateway-children-report-sleep
* obeys gateway-children-report-motor-function
* obeys gateway-children-report-physical-activity
* obeys gateway-children-report-hearing
* obeys gateway-children-report-sight

Invariant: gateway-children-report-1
Description: "All observation resources shall conform to the observation profiles defined in this IG"
Severity: #error
Expression: "entry.select(resource as Observation).all(
    $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-feeding-observation')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-headcircum')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-bodyheight')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-exam-result')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-bodyweight')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-social-interaction')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-parent-relationship')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-parent-social-status')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-parent-mental-status')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-social-support-network')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-communication')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-sleep')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-motor-function')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-nutrition')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-physical-activity')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-hearing')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-sight')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-passive-smoking')
 or $this.conformsTo('http://fhir.kl.dk/children/StructureDefinition/klgateway-children-nicotine'))"



//Invariant: gateway-children-report-2
//Description: "If there is an encounter of type 'Andet besøg inden første måned' eller 'Besøg hos det 4-6 måneder gamle barn' eller 'indskolingsundersøgelse' eller 'udskolingsundersøgelse' then weight and height meassurements should be included in the bundle"
//Severity: #error
//Expression: "entry.select((resource as Encounter).type.coding.where(
    // code = '563c4174-f451-4c87-8db8-8d5472ca7ff6'
    // or code = '58ff370b-a775-4bec-b24a-91604e0a5fe7'
    // or code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    // or code = 'dd766967-4d02-4c17-8ed3-021852785fdf')).exists() implies (
    // entry.select((resource as Observation).code.coding.where(code = '425024002')).exists()
    // and entry.select((resource as Observation).code.coding.where(code = '1153637007')).exists())"



Invariant: gateway-children-report-parent-mental-state
Description: "If there is an encounter of type 'Graviditetsbesøg', 'Besøg hos det ca. 2 måneder gamle barn' delivered face-to-face, then parents mental state should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = 'd3c00541-f1d3-4c43-b5fc-16e8914ca1df'
    or type.coding.code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '2c39af9f-8e45-4c88-962f-e7a9e2cd31b6')).exists()"

Invariant: gateway-children-report-parent-social-status
Description: "If there is an encounter of type 'Graviditetsbesøg', 'Etableringsbesøg' delivered face-to-face, then parent-social-status should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = 'd3c00541-f1d3-4c43-b5fc-16e8914ca1df'
    or type.coding.code = 'b4bf6058-502a-4d64-bb8e-369661f43b47')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '58997614-ba43-4534-90bd-10c7e76802f4')).exists()"

Invariant: gateway-children-report-support-network
Description: "If there is an encounter of type 'Graviditetsbesøg', 'Etableringsbesøg' delivered face-to-face, then support network should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = 'd3c00541-f1d3-4c43-b5fc-16e8914ca1df'
    or type.coding.code = 'b4bf6058-502a-4d64-bb8e-369661f43b47')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '7e7fab2f-278a-4b14-9bc9-efc36fffcba5')).exists()"

Invariant: gateway-children-report-social-interaction
Description: "If there is an encounter of type 'Besøg hos det ca. 2 måneder gamle barn', 'Besøg hos det 4-6 måneder gamle barn', 'Besøg hos det 8-11 måneder gamle barn', 'Indskolingsundersøgelse', 'Udskolingsundersøgelse',  delivered face-to-face, then social interaction should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d'
    or type.coding.code = '58ff370b-a775-4bec-b24a-91604e0a5fe7'
    or type.coding.code = '3f3e6489-31bd-44cf-9920-3c632868feb7'
    or type.coding.code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    or type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '68605f88-49fb-44b9-b327-86947af6aa93')).exists()"

Invariant: gateway-children-report-parent-relationship
Description: "If there is an encounter of type 'Barselsbesøg', 'Etableringsbesøg', 'Andet besøg inden første måned', 'Besøg hos det ca. 2 måneder gamle barn', 'Besøg hos det 4-6 måneder gamle barn', 'Besøg hos det 8-11 måneder gamle barn',  delivered face-to-face, then parent relationship should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = '7d35a193-e808-4e77-b361-6c0d114d021f'
    or type.coding.code = 'b4bf6058-502a-4d64-bb8e-369661f43b47'
    or type.coding.code = '563c4174-f451-4c87-8db8-8d5472ca7ff6'
    or type.coding.code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d'
    or type.coding.code = '58ff370b-a775-4bec-b24a-91604e0a5fe7')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '763c6f21-5467-4713-82fb-716c9d0a1fdf')).exists()"

Invariant: gateway-children-report-weight
Description: "If there is an encounter of type 'Barselsbesøg', 'Etableringsbesøg', 'Andet besøg inden første måned', 'Besøg hos det ca. 2 måneder gamle barn', 'Besøg hos det 4-6 måneder gamle barn', 'Besøg hos det 8-11 måneder gamle barn', 'Indskolingsundersøgelse', 'Undersøgelse i mellemtrin, med måling', 'Udskolingsundersøgelse',  delivered face-to-face, then weight should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = '7d35a193-e808-4e77-b361-6c0d114d021f'
    or type.coding.code = 'b4bf6058-502a-4d64-bb8e-369661f43b47'
    or type.coding.code = '563c4174-f451-4c87-8db8-8d5472ca7ff6'
    or type.coding.code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d'
    or type.coding.code = '58ff370b-a775-4bec-b24a-91604e0a5fe7'
    or type.coding.code = '3f3e6489-31bd-44cf-9920-3c632868feb7'
    or type.coding.code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    or type.coding.code = 'd01bcb90-2b29-44f4-834c-191d6dd4a08a'
    or type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '27113001')).exists()"

Invariant: gateway-children-report-height
Description: "If there is an encounter of type 'Etableringsbesøg', 'Andet besøg inden første måned', 'Besøg hos det ca. 2 måneder gamle barn', 'Besøg hos det 4-6 måneder gamle barn', 'Besøg hos det 8-11 måneder gamle barn', 'Indskolingsundersøgelse', 'Undersøgelse i mellemtrin, med måling', 'Udskolingsundersøgelse',  delivered face-to-face, then height should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = 'b4bf6058-502a-4d64-bb8e-369661f43b47'
    or type.coding.code = '563c4174-f451-4c87-8db8-8d5472ca7ff6'
    or type.coding.code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d'
    or type.coding.code = '58ff370b-a775-4bec-b24a-91604e0a5fe7'
    or type.coding.code = '3f3e6489-31bd-44cf-9920-3c632868feb7'
    or type.coding.code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    or type.coding.code = 'd01bcb90-2b29-44f4-834c-191d6dd4a08a'
    or type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies (
    entry.select((resource as Observation).code.coding.where(code = '1153637007')).exists()
    or entry.select((resource as Observation).code.coding.where(code = '248333004')).exists()
    or entry.select((resource as Observation).code.coding.where(code = '1149101003')).exists())"

Invariant: gateway-children-report-head-circumference
Description: "If there is an encounter of type 'Etableringsbesøg', 'Andet besøg inden første måned', 'Besøg hos det ca. 2 måneder gamle barn', 'Besøg hos det 4-6 måneder gamle barn', 'Besøg hos det 8-11 måneder gamle barn' delivered face-to-face, then head circumference should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = 'b4bf6058-502a-4d64-bb8e-369661f43b47'
    or type.coding.code = '563c4174-f451-4c87-8db8-8d5472ca7ff6'
    or type.coding.code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d'
    or type.coding.code = '58ff370b-a775-4bec-b24a-91604e0a5fe7'
    or type.coding.code = '3f3e6489-31bd-44cf-9920-3c632868feb7')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '363812007')).exists()"

Invariant: gateway-children-report-passive-smoking
Description: "If there is an encounter of type 'Etableringsbesøg' delivered face-to-face, then pasive smoking should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = 'b4bf6058-502a-4d64-bb8e-369661f43b47')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '28972d4b-fea3-42ec-b2a5-e2a26f79b14d')).exists()"

Invariant: gateway-children-report-nicotine
Description: "If there is an encounter of type 'Udskolingsundersøgelse' delivered face-to-face, then nicotine should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '76891f7b-cf49-4cb2-88d6-728a509eb75d')).exists()"

Invariant: gateway-children-report-nutrition
Description: "If there is an encounter of type 'Barselsbesøg', 'Etableringsbesøg', 'Andet besøg inden første måned', 'Besøg hos det ca. 2 måneder gamle barn', 'Besøg hos det 4-6 måneder gamle barn', 'Besøg hos det 8-11 måneder gamle barn', 'Indskolingsundersøgelse', 'Udskolingsundersøgelse',  delivered face-to-face, then nutrition should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = '7d35a193-e808-4e77-b361-6c0d114d021f'
    or type.coding.code = 'b4bf6058-502a-4d64-bb8e-369661f43b47'
    or type.coding.code = '563c4174-f451-4c87-8db8-8d5472ca7ff6'
    or type.coding.code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d'
    or type.coding.code = '58ff370b-a775-4bec-b24a-91604e0a5fe7'
    or type.coding.code = '3f3e6489-31bd-44cf-9920-3c632868feb7'
    or type.coding.code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    or type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = 'e61e4dab-54bb-4bf4-9b76-8d991cf4de08')).exists()"

Invariant: gateway-children-report-communication
Description: "If there is an encounter of type 'Besøg hos det ca. 2 måneder gamle barn', 'Besøg hos det 4-6 måneder gamle barn', 'Besøg hos det 8-11 måneder gamle barn', 'Indskolingsundersøgelse', 'Udskolingsundersøgelse',  delivered face-to-face, then communication should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = '563c4174-f451-4c87-8db8-8d5472ca7ff6'
    or type.coding.code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d'
    or type.coding.code = '58ff370b-a775-4bec-b24a-91604e0a5fe7'
    or type.coding.code = '3f3e6489-31bd-44cf-9920-3c632868feb7'
    or type.coding.code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    or type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '653c2b0b-bb64-4906-888b-aea6fef3c3f8')).exists()"

Invariant: gateway-children-report-sleep
Description: "If there is an encounter of type 'Besøg hos det ca. 2 måneder gamle barn', 'Besøg hos det 4-6 måneder gamle barn', 'Besøg hos det 8-11 måneder gamle barn', 'Indskolingsundersøgelse', 'Udskolingsundersøgelse',  delivered face-to-face, then sleep should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d'
    or type.coding.code = '58ff370b-a775-4bec-b24a-91604e0a5fe7'
    or type.coding.code = '3f3e6489-31bd-44cf-9920-3c632868feb7'
    or type.coding.code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    or type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '73f981f8-455a-4158-b435-7c6d83ab84da')).exists()"

Invariant: gateway-children-report-motor-function
Description: "If there is an encounter of type 'Besøg hos det ca. 2 måneder gamle barn', 'Besøg hos det 4-6 måneder gamle barn', 'Besøg hos det 8-11 måneder gamle barn', 'Indskolingsundersøgelse', 'Udskolingsundersøgelse',  delivered face-to-face, then sleep should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d'
    or type.coding.code = '58ff370b-a775-4bec-b24a-91604e0a5fe7'
    or type.coding.code = '3f3e6489-31bd-44cf-9920-3c632868feb7'
    or type.coding.code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    or type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '73f981f8-455a-4158-b435-7c6d83ab84da')).exists()"

Invariant: gateway-children-report-physical-activity
Description: "If there is an encounter of type 'Indskolingsundersøgelse', 'Udskolingsundersøgelse',  delivered face-to-face, then physical activity should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    or type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = 'b331fe02-a781-4abd-b6db-9331d6a69b15')).exists()"

Invariant: gateway-children-report-hearing
Description: "If there is an encounter of type 'Indskolingsundersøgelse', 'Udskolingsundersøgelse',  delivered face-to-face, then hearing should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    or type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = 'a22c4b53-b622-4394-ba13-910a7b0d7b0d')).exists()"

Invariant: gateway-children-report-sight
Description: "If there is an encounter of type 'Indskolingsundersøgelse', 'Udskolingsundersøgelse',  delivered face-to-face, then sight should be included in the bundle"
Severity: #error
Expression: "entry.select((resource as Encounter).where(
    (type.coding.code = 'c06ed6f1-be9d-460e-a45e-34821bcbd533'
    or type.coding.code = 'dd766967-4d02-4c17-8ed3-021852785fdf')
    and
    (class.code = 'HH'
    or class.code = 'AMB'))).exists() implies 
    entry.select((resource as Observation).code.coding.where(code = '01fddd46-ed7c-423d-b191-ffdd977dd61e')).exists()"


//retunerer sandt, hvis der findes en ressource af typen encounter med koden ......
//entry.select((resource as Encounter).type.coding.where(code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d')).exists()
// Implies
//retunerer sandt hvis en ressource af typen Observation har koden højde og en anden har koden vægt
//entry.select((resource as Observation).code.coding.where(code = '248334005')).exists() and entry.select((resource as Observation).code.coding.where(code = '276885007')).exists()
//altså, hvis encounteren er en 2 måneders undersøgelse, så skal der indberettes en højde (længde)
//entry.select((resource as Encounter).type.coding.where(code = '51f30d1c-d60e-4e3e-ac22-ec9712ea962d')).exists() implies entry.select((resource as Observation).code.coding.where(code = '276885007')).exists()

// Invariant: gateway-children-report-3
// Description: "If there is an encounter of type 'Etableringsbesøg' then tobacco observation should be included in the bundle"
// Severity: #error
// Expression: "entry.select((resource as Encounter).type.coding.where(code = 'b4bf6058-502a-4d64-bb8e-369661f43b47')).exists() implies (
//     entry.select((resource as Observation).code.coding.where(code = '229819007')).exists())"


// Instance: RikkeDeliveryReport2nd1mth
// InstanceOf: klgateway-children-delivery-report
// Description: "Indberetning for Rikke, andet besøg første levemåned"
// Usage: #example
// * type = #collection
// * timestamp = 2020-06-01T23:45:00.000Z

// * entry[+].fullUrl = Canonical(Rikke)
// * entry[=].resource = Rikke

// * entry[+].fullUrl = Canonical(2nd1mthEncounter)
// * entry[=].resource = 2nd1mthEncounter

// * entry[+].fullUrl = Canonical(RikkeBodyHeight)
// * entry[=].resource = RikkeBodyHeight

// * entry[+].fullUrl = Canonical(RikkeBodyWeight)
// * entry[=].resource = RikkeBodyWeight



Instance: RikkeDeliveryReport2months
InstanceOf: klgateway-children-delivery-report
Description: "Indberetning for Rikke 2 måneder"
Usage: #example
* type = #collection
* timestamp = 2020-07-08T23:45:00.000Z

* entry[+].fullUrl = Canonical(Rikke)
* entry[=].resource = Rikke

* entry[+].fullUrl = Canonical(Kirsten)
* entry[=].resource = Kirsten

* entry[+].fullUrl = Canonical(RikkesParent)
* entry[=].resource = RikkesParent

* entry[+].fullUrl = Canonical(2mthEncounter)
* entry[=].resource = 2mthEncounter

* entry[+].fullUrl = Canonical(KirstenParentMentalStatus)
* entry[=].resource = KirstenParentMentalStatus

* entry[+].fullUrl = Canonical(EPDSAnswerKirsten)
* entry[=].resource = EPDSAnswerKirsten

* entry[+].fullUrl = Canonical(RikkeSocialInteraction)
* entry[=].resource = RikkeSocialInteraction

* entry[+].fullUrl = Canonical(RikkeChildrenParentRelationship)
* entry[=].resource = RikkeChildrenParentRelationship

* entry[+].fullUrl = Canonical(RikkeBodyWeight2mth)
* entry[=].resource = RikkeBodyWeight2mth

* entry[+].fullUrl = Canonical(RikkeBodyHeight2mth)
* entry[=].resource = RikkeBodyHeight2mth

* entry[+].fullUrl = Canonical(RikkeHeadCircum)
* entry[=].resource = RikkeHeadCircum

* entry[+].fullUrl = Canonical(RikkeFeedingObservationPeriod)
* entry[=].resource = RikkeFeedingObservationPeriod

* entry[+].fullUrl = Canonical(RikkeFeedingObservationStatus)
* entry[=].resource = RikkeFeedingObservationStatus

* entry[+].fullUrl = Canonical(RikkeFeedingObservationNewPeriod)
* entry[=].resource = RikkeFeedingObservationNewPeriod

* entry[+].fullUrl = Canonical(RikkeCommunication2mth)
* entry[=].resource = RikkeCommunication2mth

* entry[+].fullUrl = Canonical(RikkeSleep2mth)
* entry[=].resource = RikkeSleep2mth

* entry[+].fullUrl = Canonical(RikkeMotorFunction2mth)
* entry[=].resource = RikkeMotorFunction2mth

* entry[+].fullUrl = Canonical(RikkeEyeContact2mth)
* entry[=].resource = RikkeEyeContact2mth

Instance: RikkeDeliveryReport3months
InstanceOf: klgateway-children-delivery-report
Description: "Indberetning for Rikke 3 måneder - eksempel på at der er foretaget en enkelt vægtmåling udenfor standardkontakter"
Usage: #example
* type = #collection
* timestamp = 2020-08-08T23:45:00.000Z

* entry[+].fullUrl = Canonical(Rikke)
* entry[=].resource = Rikke

* entry[+].fullUrl = Canonical(RikkeBodyWeight3mth)
* entry[=].resource = RikkeBodyWeight3mth


//instances used for testing

// Instance: RikkePainVAS
// InstanceOf: Observation
// Usage: #example
// Title: "RikkesPainVAS"
// Description: "rikke smerte målt med VAS"
// * subject = Reference(Rikke)
// * code.coding = $SCT#443394008
// * valueInteger = 20
// * status = #final

// Instance: ERRORinRikkeDeliveryReport2nd1mth
// InstanceOf: klgateway-children-delivery-report
// Description: "Indberetning for Rikke, andet besøg første levemåned uden højde og vægt giver fejl ift. invariant gateway-children-report-2"
// Usage: #example
// * type = #collection
// * timestamp = 2020-06-01T23:45:00.000Z

// * entry[+].fullUrl = "Patient/Rikke"
// * entry[=].resource = Rikke

// * entry[+].fullUrl = "Encounter/2nd1mthEncounter"
// * entry[=].resource = 2nd1mthEncounter

// * entry[+].fullUrl = "Observation/RikkePainVAS"
// * entry[=].resource = RikkePainVAS



---

File: repos/hl7dk_SLASH_kl-children/input/fsh/encounter.fsh

Profile: KLGatewayChildrenEncounter
Parent: Encounter
Id: klgateway-children-encounter
Title: "KLGatewayChildrenEncounter"
Description: "Encounter for health prevention and need-based visits from childrens nurses"
* identifier ..0
* statusHistory ..0
* class.version ..0
* class.userSelected ..0
* classHistory ..0
* class SU
* class from EncounterClassCodes (required)
* type SU 
* type from EncounterTypes (required)
* type 1..1
* type.coding 1..1
* type.coding.version ..0
* type.coding.userSelected ..0
* type.text ..0
* serviceType ..0
* priority ..0
* subject 1..1 SU
* subject only Reference(klgateway-children-citizen)
* subject ^type.aggregation = #bundled
* episodeOfCare ..0
* basedOn ..0
* participant ..0
* appointment ..0
* period 1..1
* period.start 1..1
* period.end ..1
* location ..1
* location.location only Reference(klgateway-children-location)
* location.location ^type.aggregation = #bundled
* location.status 0..0
* location.physicalType 0..0
* location.period 0..0
* length ..0
* reasonCode ..0
* reasonReference ..0
* diagnosis ..0
* account ..0
* hospitalization ..0

* serviceProvider ..0
* partOf ..0
* extension contains
   BasedOnInterventionExtension named basedOnIntervention 0..*
* extension[basedOnIntervention].valueReference ^type.aggregation = #bundled


//Danish descriptions
* status ^short = "[DK] kontaktstatus"
* type.coding ^short = "[DK] kontakttype"
* period.start ^short = "[DK] kontaktstart"
* period.end ^short = "[DK] kontaktslut"
* subject ^short = "[DK] kontaktsubjekt"
* class ^short = "[DK] kontaktklasse"
* extension[basedOnIntervention] ^short = "[DK] kontaktBaseretPå"
* location.location ^short = "[DK] kontaktLokation"

Instance: 2nd1mthEncounter
InstanceOf: klgateway-children-encounter
Title: "Andet besøg inden første måned ved Rikke"
Usage: #example
Description: "Kontakt, hvor der leveres Andet besøg inden første måned til Rikke og hendes familie"
* type = $FBOE#563c4174-f451-4c87-8db8-8d5472ca7ff6 "Andet besøg inden første måned"
* period.start = 2020-06-01
* status = $EncounterStatus#finished
* subject = Reference(Rikke)
* class = $V3ACTCODES#HH

Instance: 2mthEncounter
InstanceOf: klgateway-children-encounter
Title: "2 måneders besøg ved Rikke"
Usage: #example
Description: "Kontakt, hvor der leveres Besøg hos det ca. 2 måneder gamle barn til Rikke og hendes familie"
* type = $FBOE#51f30d1c-d60e-4e3e-ac22-ec9712ea962d "Besøg hos det ca. 2 måneder gamle barn"
* period.start = 2020-07-07T12:45:00.000Z
* status = $EncounterStatus#finished
* subject = Reference(Rikke)
* class = $V3ACTCODES#HH

Instance: 10mthEncounter
InstanceOf: klgateway-children-encounter
Title: "10 måneders besøg ved Rikke"
Usage: #example
Description: "Kontakt, hvor der leveres Besøg hos det 8-11 måneder gamle barn til Rikke og hendes familie"
* type = $FBOE#3f3e6489-31bd-44cf-9920-3c632868feb7 "Besøg hos det 8-11 måneder gamle barn"
* period.start = 2021-03-09T10:15:00.000Z
* status = $EncounterStatus#finished
* subject = Reference(Rikke)
* class = $V3ACTCODES#HH

Instance: SchoolStartEncounter
InstanceOf: klgateway-children-encounter
Title: "Indskolingsundersøgelse Lars"
Usage: #example
Description: "Kontakt, der er Lars' indskolingsundersøgelse"
* type = $FBOE#c06ed6f1-be9d-460e-a45e-34821bcbd533 "Indskolingsundersøgelse"
* period.start = 2021-10-21T10:45:00.000Z
* status = $EncounterStatus#finished
* subject = Reference(Lars)
* class = $V3ACTCODES#AMB
* location.location = Reference(SchoolHolbaek)

Instance: NeedBasedEncounterRikke
InstanceOf: klgateway-children-encounter
Title: "Behovskontakt ved Rikke på skærm"
Usage: #example
Description: "Kontakt, hvor der leveres behovskontakt på skærm ved Rikke og hendes familie"
* type = $FBOE#4b039ba1-4005-42e6-b672-09b81ad7578a "Behovskontakt med småbørnssundhedsplejen" 
* period.start = 2021-03-25T10:15:00.000Z
* status = $EncounterStatus#finished
* subject = Reference(Rikke)
* class = $KLCommonCodes#124be95d-6924-4609-9d2a-e7c73ae3ab3d "Skærmbesøg"
* extension[basedOnIntervention].valueReference = Reference(RikkeInterventionSocialContact)

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/epds.fsh

Instance: klgateway-children-epds
InstanceOf: KLGatewayChildrenQuestionnaire
Usage: #definition
Title: "KLGatewayChildrenEPDS"
* status = #active
* publisher = "Kommunernes Landsforening"
* description = "Edinburgh postnatale depressionscore (EPDS)"
* name = "KLGatewayChildrenEPDS"
* code = $SCT#450320001 //|Edinburgh postnatal depression scale score|
* copyright = "Users may reproduce this scale without further permission providing they respect the copyright. Copyright remains with the British Journal of Psychiatry. EPDS was first described by: Cox, J.L., Holden, J.M. and Sagovsky, R. (1987). Detection of postnatal depression: Development of the 10-item Edinburgh Postnatal Depression Scale. British Journal of Psychiatry, 150, 782-786."
* item[0].type = #integer
* item[0].text = "1. Har du de sidste 7 dage været i stand til at le og se tingene fra den humoristiske side?"
* item[0].linkId = "1humor"
* item[0].extension[minValue].valueInteger = 0
* item[0].extension[maxValue].valueInteger = 3
* item[0].repeats = false

* item[+].type = #integer
* item[=].text = "2. Har du de sidste 7 dage kunnet se frem til ting med glæde?"
* item[=].linkId = "2happiness"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 3
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "3. Har du de sidste 7 dage unødvendigt bebrejdet dig selv, når ting ikke gik som de skulle?"
* item[=].linkId = "3blame"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 3
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "4. Har du de sidste 7 dage været  anspændt og bekymret uden nogen særlig grund?"
* item[=].linkId = "4worry"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 3
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "5. Har du de sidste 7 dage følt dig angst eller panikslagen uden nogen særlig grund?"
* item[=].linkId = "5anxious"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 3
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "6. Har du de sidste 7 dage følt, at tingene voksede dig over hovedet?"
* item[=].linkId = "6grow"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 3
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "7. Har du de sidste 7 dage været så ked af det, at du har haft svært ved at sove?"
* item[=].linkId = "7sleep"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 3
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "8. Har du de sidste 7 dage følt dig trist eller elendigt til mode?"
* item[=].linkId = "8sad"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 3
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "9. Har du de sidste 7 dage været så ulykkelig, at du har grædt?"
* item[=].linkId = "9cry"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 3
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "10. Har tanken om at gøre skade på dig selv strejfet dig de sidste 7 dage?"
* item[=].linkId = "10harm"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 3
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "Samlet score"
* item[=].linkId = "score"
* item[=].extension[minValue].valueInteger = 0
* item[=].extension[maxValue].valueInteger = 30
* item[=].repeats = false

Instance: EPDSAnswerKirsten
InstanceOf: KLGatewayChildrenQuestionnaireResponse
Usage: #example
Title: "EPDSAnswerKirsten"
Description: "EPDS besvarelse mor, Kirsten"
* questionnaire = "http://fhir.kl.dk/children/Questionnaire/klgateway-children-epds"
* status = #completed
* subject = Reference(Kirsten)
* extension[findingInformer].valueCodeableConcept = $KLCommonCodes#25b4e705-2e9a-47a2-b11a-c829316b9d3a "Borger"
* authored = 2020-07-07

* item[0].linkId = "1humor"
* item[=].answer.valueInteger = 0

* item[+].linkId = "2happiness"
* item[=].answer.valueInteger = 2

* item[+].linkId = "3blame"
* item[=].answer.valueInteger = 1

* item[+].linkId = "4worry"
* item[=].answer.valueInteger = 1

* item[+].linkId = "5anxious"
* item[=].answer.valueInteger = 2

* item[+].linkId = "6grow"
* item[=].answer.valueInteger = 1

* item[+].linkId = "7sleep"
* item[=].answer.valueInteger = 3

* item[+].linkId = "8sad"
* item[=].answer.valueInteger = 0

* item[+].linkId = "9cry"
* item[=].answer.valueInteger = 0

* item[+].linkId = "10harm"
* item[=].answer.valueInteger = 0

* item[+].linkId = "score"
* item[=].answer.valueInteger = 10

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/example.fsh

Instance: b9479825-6be1-4fa1-a2ae-74fe67014caa
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Rikke-1"
Usage: #example
* type = #collection
* timestamp = 2020-02-05T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8" //Kirsten
* entry[=].resource = fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a" //Knud
* entry[=].resource = e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/dcaf11eb-1fa5-4bf6-aa8d-1d5a07dceba6" //Graviditetsbesøg
* entry[=].resource = dcaf11eb-1fa5-4bf6-aa8d-1d5a07dceba6

* entry[+].fullUrl = "https://test.fhir.dk/Observation/5dc67553-92c1-4d1d-a714-f683f9bdfe88" //Forælders sårbarhed, Kirsten
* entry[=].resource = 5dc67553-92c1-4d1d-a714-f683f9bdfe88

* entry[+].fullUrl = "https://test.fhir.dk/Observation/e1e03870-801d-420d-9eac-2a29de8c4134" // Forælders sårbarhed Knud
* entry[=].resource = e1e03870-801d-420d-9eac-2a29de8c4134

* entry[+].fullUrl = "https://test.fhir.dk/Observation/722b17a4-fbd0-46e5-a58b-62f7a4b87699" // Forælders psykiske status Kirsten
* entry[=].resource = 722b17a4-fbd0-46e5-a58b-62f7a4b87699

* entry[+].fullUrl = "https://test.fhir.dk/Observation/48b3dc28-b489-4cd1-893f-8973ed14e8f6" // Forælders psykiske status Knud
* entry[=].resource = 48b3dc28-b489-4cd1-893f-8973ed14e8f6

* entry[+].fullUrl = "https://test.fhir.dk/Observation/8ff12f7a-4e53-4061-ba00-fe473d390471" // Forælders netværk, Kirsten
* entry[=].resource = 8ff12f7a-4e53-4061-ba00-fe473d390471

* entry[+].fullUrl = "https://test.fhir.dk/Observation/6603abaf-1714-4052-a5ed-f8f026655177" // Forælders netværk, Knud
* entry[=].resource = 6603abaf-1714-4052-a5ed-f8f026655177

* entry[+].fullUrl = "https://test.fhir.dk/Observation/c98626d1-e3a1-42ac-8732-d7eb63236d8c"
* entry[=].resource = c98626d1-e3a1-42ac-8732-d7eb63236d8c // Kirsten ExamResult, Traumatiske oplevelser

Instance: fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8
InstanceOf: klgateway-children-citizen
Description: "Borger, Kirsten Test Berggren, fra MedCom test-cprnumre. Holbæk kommune er journalførende organisation."
Usage: #inline
* identifier.use = #official
* identifier.value = "2911829996"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "451000016003"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a
InstanceOf: klgateway-children-citizen
Description: "Borger, Knud Odvar Test Mosebryggersen, fra MedCom test-cprnumre. Holbæk kommune er journalførende organisation."
Usage: #inline
* identifier.use = #official
* identifier.value = "1502829995"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "451000016003"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: dcaf11eb-1fa5-4bf6-aa8d-1d5a07dceba6
InstanceOf: klgateway-children-encounter
Title: "Graviditetsbesøg ved Kirsten"
Usage: #inline
Description: "Kontakt, hvor der leveres graviditetsbesøg ved Kirsten og Knud"
* type = $FBOE#d3c00541-f1d3-4c43-b5fc-16e8914ca1df "Graviditetsbesøg"
* period.start = 2020-02-05
* status = $EncounterStatus#finished
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8)
* class = $V3ACTCODES#HH

Instance: 5dc67553-92c1-4d1d-a714-f683f9bdfe88
InstanceOf: klgateway-children-parent-social-status
Title: "Forælders sårbarhed, Kirsten"
Usage: #inline
Description: "Indikator vedr. forælders sårbarhed ifm graviditetsbesøg, Kirsten"
* code.coding[FBOECode] = $FBOE#58997614-ba43-4534-90bd-10c7e76802f4 "Forælders sårbarhed"
* valueCodeableConcept.coding = $FBOE#546e7bef-7a22-451e-971a-326fcd78a843 "Potentiel sårbarhed"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8)
* encounter = Reference(dcaf11eb-1fa5-4bf6-aa8d-1d5a07dceba6)

Instance: e1e03870-801d-420d-9eac-2a29de8c4134
InstanceOf: klgateway-children-parent-social-status
Title: "Forælders sårbarhed, Knud"
Usage: #inline
Description: "Indikator vedr. forælders sårbarhed ifm graviditetsbesøg, Knud"
* code.coding[FBOECode] = $FBOE#58997614-ba43-4534-90bd-10c7e76802f4 "Forælders sårbarhed"
* valueCodeableConcept.coding = $FBOE#57dd67d7-175a-4541-87ff-db1381c4e1d9 "Ingen sårbarhed"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z
* subject = Reference(e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a)

Instance: 722b17a4-fbd0-46e5-a58b-62f7a4b87699
InstanceOf: klgateway-children-parent-mental-status
Usage: #inline
Title: "Forælders psykiske tilstand, Kirsten"
Description: "Kirstens psykiske tilstand ved graviditetsbesøg"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8)
* code.coding[FBOECode] = $FBOE#2c39af9f-8e45-4c88-962f-e7a9e2cd31b6 "Forælders psykiske tilstand"
* valueCodeableConcept = $FBOE#0e5db980-8c6e-4034-abab-054e0eb40935 "Forventelig psykisk reaktion"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z
* encounter = Reference(dcaf11eb-1fa5-4bf6-aa8d-1d5a07dceba6)

Instance: 48b3dc28-b489-4cd1-893f-8973ed14e8f6
InstanceOf: klgateway-children-parent-mental-status
Usage: #inline
Title: "Forælders psykiske tilstand, Knud"
Description: "Knuds psykiske tilstand ved graviditetsbesøg"
* subject = Reference(e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a)
* code.coding[FBOECode] = $FBOE#2c39af9f-8e45-4c88-962f-e7a9e2cd31b6 "Forælders psykiske tilstand"
* valueCodeableConcept = $FBOE#0e5db980-8c6e-4034-abab-054e0eb40935 "Forventelig psykisk reaktion"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z

Instance: 8ff12f7a-4e53-4061-ba00-fe473d390471
InstanceOf: klgateway-children-social-support-network
Usage: #inline
Title: "Forælders netværk, Kirsten"
Description: "Kirstens netværk ved graviditetsbesøg"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8)
* code.coding[FBOECode] = $FBOE#7e7fab2f-278a-4b14-9bc9-efc36fffcba5 "Netværk"
* valueCodeableConcept = $FBOE#fbd9a8a5-0ed6-4e1a-9841-066ade34b071 "Godt netværk"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z
* encounter = Reference(dcaf11eb-1fa5-4bf6-aa8d-1d5a07dceba6)

Instance: 6603abaf-1714-4052-a5ed-f8f026655177
InstanceOf: klgateway-children-social-support-network
Usage: #inline
Title: "Forælders netværk, Knud"
Description: "Knuds netværk ved graviditetsbesøg"
* subject = Reference(e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a)
* code.coding[FBOECode] = $FBOE#7e7fab2f-278a-4b14-9bc9-efc36fffcba5 "Netværk"
* valueCodeableConcept = $FBOE#fbd9a8a5-0ed6-4e1a-9841-066ade34b071 "Godt netværk"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z

Instance: c98626d1-e3a1-42ac-8732-d7eb63236d8c
InstanceOf: klgateway-children-exam-result
Usage: #inline
Title: "Kirstens, forælders sårbarhed nuancering, graviditetsbesøg"
Description: "Kirstens nuancering på forælders sårbarhed: Traumatiske oplevelser"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8)
* encounter = Reference(dcaf11eb-1fa5-4bf6-aa8d-1d5a07dceba6)
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* valueCodeableConcept = $FBOE#7acf5936-6640-44a7-af6d-b20c7607dcfe	"Traumatiske oplevelser"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z


// 2nd - a

Instance: c5b55e0e-3bc4-468a-8600-1b23617dbb58
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Rikke-2a"
Usage: #example
* type = #collection
* timestamp = 2020-05-07T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e60106e2-413e-46c5-8a3f-62d8e77ce794" //Rikke
* entry[=].resource = e60106e2-413e-46c5-8a3f-62d8e77ce794

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/ebaaad51-e77f-4fc1-944a-24b0ace0a9f9" //Barselsbesøg
* entry[=].resource = ebaaad51-e77f-4fc1-944a-24b0ace0a9f9

* entry[+].fullUrl = "https://test.fhir.dk/Observation/4ad1eeba-85ca-47f1-bed5-b2b58f53cd9f" //Fundamning, periode-start
* entry[=].resource = 4ad1eeba-85ca-47f1-bed5-b2b58f53cd9f

* entry[+].fullUrl = "https://test.fhir.dk/Observation/23fe85c3-3ff2-4093-89aa-5051bfee9bc2" // Fuldamning, status
* entry[=].resource = 23fe85c3-3ff2-4093-89aa-5051bfee9bc2

* entry[+].fullUrl = "https://test.fhir.dk/Observation/8779aeaa-d7ed-4450-8a5f-d685ddc15dc3" // Rikkes vægt
* entry[=].resource = 8779aeaa-d7ed-4450-8a5f-d685ddc15dc3


Instance: e60106e2-413e-46c5-8a3f-62d8e77ce794
InstanceOf: klgateway-children-citizen
Description: "Barnet Rikke Test Berggren, fra MedComs liste af test cpr-numre"
Usage: #inline
* identifier.use = #official
* identifier.value = "0505209996"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* active = true
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "451000016003"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: ebaaad51-e77f-4fc1-944a-24b0ace0a9f9
InstanceOf: klgateway-children-encounter
Title: "Barselsbesøg ved Rikke"
Usage: #inline
Description: "Kontakt, hvor der leveres barselsbesøg ved Rikke"
* type = $FBOE#7d35a193-e808-4e77-b361-6c0d114d021f "Barselsbesøg"
* period.start = 2020-05-07
* status = $EncounterStatus#finished
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* class = $V3ACTCODES#HH

Instance: 4ad1eeba-85ca-47f1-bed5-b2b58f53cd9f
InstanceOf: klgateway-children-feeding-observation
Usage: #inline
Title: "Rikke fuldamning periodestart"
Description: "Rikke fuldamning periodestart"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(ebaaad51-e77f-4fc1-944a-24b0ace0a9f9)
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
* code.coding[SNOMEDCT] = $SCT#169740003 "Infant feeding method"
* valueCodeableConcept = $FBOE#77a008dd-21cc-452f-a1ee-ac8d025b7817 "Fuldamning, inklusiv modermælk på flaske"
* status = #final
* effectivePeriod.start = 2020-05-05T00:00:00.000Z

Instance: 23fe85c3-3ff2-4093-89aa-5051bfee9bc2
InstanceOf: klgateway-children-feeding-observation
Usage: #inline
Title: "Rikkes ammestatus ved barselsbesøg, fuldammes"
Description: "Rikkes status på madning ved barselsbesøg: fuldamning"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(ebaaad51-e77f-4fc1-944a-24b0ace0a9f9)
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
* code.coding[SNOMEDCT] = $SCT#169740003 "Infant feeding method"
* valueCodeableConcept = $FBOE#77a008dd-21cc-452f-a1ee-ac8d025b7817 "Fuldamning, inklusiv modermælk på flaske"
* status = #final
* effectiveDateTime = 2020-05-07T00:00:00.000Z

Instance: 8779aeaa-d7ed-4450-8a5f-d685ddc15dc3
InstanceOf: klgateway-children-bodyweight
Usage: #inline
Title: "Rikkes vægt, barselsbesøg"
Description: "Rikkes vægt, barselsbesøg"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(ebaaad51-e77f-4fc1-944a-24b0ace0a9f9)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#27113001 "Body weight"
* code.coding[LOINC] = $LOINC#29463-7
* valueQuantity.value = 3100
* valueQuantity.unit = "g"
* valueQuantity.system = $UCUM
* valueQuantity.code = #g
* status = #final
* effectiveDateTime = 2020-05-07

//2nd - b

Instance: 74dcb49e-dd6a-4450-9fb8-85ad0e7bed38
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Rikke-2b"
Usage: #example
* type = #collection
* timestamp = 2020-05-09T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e60106e2-413e-46c5-8a3f-62d8e77ce794" //Rikke
* entry[=].resource = e60106e2-413e-46c5-8a3f-62d8e77ce794

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/ebaaad51-e77f-4fc1-944a-24b0ace0a9f9" //Barselsbesøg
* entry[=].resource = ebaaad51-e77f-4fc1-944a-24b0ace0a9f9

* entry[+].fullUrl = "https://test.fhir.dk/Observation/4ad1eeba-85ca-47f1-bed5-b2b58f53cd9f" //Fundamning, periode-start
* entry[=].resource = 4ad1eeba-85ca-47f1-bed5-b2b58f53cd9f

* entry[+].fullUrl = "https://test.fhir.dk/Observation/23fe85c3-3ff2-4093-89aa-5051bfee9bc2" // Fuldamning, status
* entry[=].resource = 23fe85c3-3ff2-4093-89aa-5051bfee9bc2

* entry[+].fullUrl = "https://test.fhir.dk/Observation/8779aeaa-d7ed-4450-8a5f-d685ddc15dc3" // Rikkes vægt
* entry[=].resource = 8779aeaa-d7ed-4450-8a5f-d685ddc15dc3

* entry[+].fullUrl = "https://test.fhir.dk/Observation/a5118cac-0fbc-4fed-a4b7-df246732c5f7" // Forældre-barn relation, ukendt
* entry[=].resource = a5118cac-0fbc-4fed-a4b7-df246732c5f7

Instance: a5118cac-0fbc-4fed-a4b7-df246732c5f7
InstanceOf: klgateway-children-parent-relationship
Usage: #inline
Title: "RikkeChildrenParentRelationship"
Description: "Rikkes relation til forældre barselsbesøg, data mangler"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(ebaaad51-e77f-4fc1-944a-24b0ace0a9f9)
* code.coding[FBOECode] = $FBOE#763c6f21-5467-4713-82fb-716c9d0a1fdf "Forældre-barn-relation"
* status = #final
* effectiveDateTime = 2020-07-07T00:00:00.000Z
* dataAbsentReason = http://terminology.hl7.org/CodeSystem/data-absent-reason#unknown

//3rd
Instance: a27ab0ea-4018-4516-900c-f1249a28dc37
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Rikke-3"
Usage: #example
* type = #collection
* timestamp = 2020-05-17T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8" //Kirsten
* entry[=].resource = fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a" //Knud
* entry[=].resource = e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a-v2

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e60106e2-413e-46c5-8a3f-62d8e77ce794" //Rikke
* entry[=].resource = e60106e2-413e-46c5-8a3f-62d8e77ce794

* entry[+].fullUrl = "https://test.fhir.dk/RelatedPerson/a4b064a0-7fdd-467f-81cc-d1575b52b7f8" //Kirsten mor
* entry[=].resource = a4b064a0-7fdd-467f-81cc-d1575b52b7f8

* entry[+].fullUrl = "https://test.fhir.dk/RelatedPerson/e9704ba6-f6ca-46b1-9d19-d9b4bcdc864c" //Knud far
* entry[=].resource = e9704ba6-f6ca-46b1-9d19-d9b4bcdc864c

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/62c429e2-fdc5-4e33-83e1-0db858175e08" //Etableringsbesøg
* entry[=].resource = 62c429e2-fdc5-4e33-83e1-0db858175e08

* entry[+].fullUrl = "https://test.fhir.dk/Observation/711081e9-46d7-4841-98cd-3f64130318b7" //ammestatus
* entry[=].resource = 711081e9-46d7-4841-98cd-3f64130318b7

* entry[+].fullUrl = "https://test.fhir.dk/Observation/5b9a6ff2-c941-41e9-9c4c-9f4667bc063a" //vægt
* entry[=].resource = 5b9a6ff2-c941-41e9-9c4c-9f4667bc063a

* entry[+].fullUrl = "https://test.fhir.dk/Observation/d07d8d25-bc06-487e-a4b5-e180601c62d9" //højde
* entry[=].resource = d07d8d25-bc06-487e-a4b5-e180601c62d9

* entry[+].fullUrl = "https://test.fhir.dk/Observation/258e2623-abf5-499b-887b-3b70dc19507c" //hovedomfang
* entry[=].resource = 258e2623-abf5-499b-887b-3b70dc19507c

* entry[+].fullUrl = "https://test.fhir.dk/Observation/62855009-6fbb-481e-9dd0-8a4c369bde0d" //forældre-barn relation
* entry[=].resource = 62855009-6fbb-481e-9dd0-8a4c369bde0d

* entry[+].fullUrl = "https://test.fhir.dk/Observation/0f6ddfae-2882-4ad5-aec4-1144d600eee8" //passiv rygning
* entry[=].resource = 0f6ddfae-2882-4ad5-aec4-1144d600eee8

* entry[+].fullUrl = "https://test.fhir.dk/Observation/5bc41bc3-b762-4a98-853d-d3daeac05ea4" //Forælders sårbarhed, Kirsten
* entry[=].resource = 5bc41bc3-b762-4a98-853d-d3daeac05ea4

* entry[+].fullUrl = "https://test.fhir.dk/Observation/a8cdc6fc-2bf8-457c-aa15-f7e547cf74f7" // Forælders sårbarhed Knud
* entry[=].resource = a8cdc6fc-2bf8-457c-aa15-f7e547cf74f7

* entry[+].fullUrl = "https://test.fhir.dk/Observation/d4df27ce-86f1-4330-b166-c4c4724a633e" // Forælders netværk, Kirsten
* entry[=].resource = d4df27ce-86f1-4330-b166-c4c4724a633e

* entry[+].fullUrl = "https://test.fhir.dk/Observation/0083e1d2-46d4-4da2-8497-596464cfc4b1" // Forælders netværk, Knud
* entry[=].resource = 0083e1d2-46d4-4da2-8497-596464cfc4b1

Instance: fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2
InstanceOf: klgateway-children-citizen
Description: "Borger, Kirsten Test Berggren, fra MedCom test-cprnumre. Holbæk kommune er journalførende organisation. Registreret som Rikkes forælder"
Usage: #inline
* id = "fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8"
* identifier.use = #official
* identifier.value = "2911829996"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "451000016003"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"
* link.type = http://hl7.org/fhir/link-type#seealso
* link.other = Reference(a4b064a0-7fdd-467f-81cc-d1575b52b7f8)

Instance: e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a-v2
InstanceOf: klgateway-children-citizen
Description: "Borger, Knud Odvar Test Mosebryggersen, fra MedCom test-cprnumre. Holbæk kommune er journalførende organisation. Registreret som Rikkes forælder"
Usage: #inline
* id = "e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a"
* identifier.use = #official
* identifier.value = "1502829995"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "451000016003"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"
* link.type = http://hl7.org/fhir/link-type#seealso
* link.other = Reference(e9704ba6-f6ca-46b1-9d19-d9b4bcdc864c)

Instance: a4b064a0-7fdd-467f-81cc-d1575b52b7f8
InstanceOf: klgateway-children-related-parent
Description: "Rikke's mor"
Usage: #inline
* patient = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* relationship = $RoleCode#PRN

Instance: e9704ba6-f6ca-46b1-9d19-d9b4bcdc864c
InstanceOf: klgateway-children-related-parent
Description: "Rikke's far"
Usage: #inline
* patient = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* relationship = $RoleCode#PRN

Instance: 62c429e2-fdc5-4e33-83e1-0db858175e08
InstanceOf: klgateway-children-encounter
Title: "Etableringsbesøg ved Rikke"
Usage: #inline
Description: "Kontakt, hvor der leveres etableringsbesøg ved Rikke"
* type = $FBOE#b4bf6058-502a-4d64-bb8e-369661f43b47 "Etableringsbesøg"
* period.start = 2020-05-17
* status = $EncounterStatus#finished
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* class = $V3ACTCODES#HH

Instance: 711081e9-46d7-4841-98cd-3f64130318b7
InstanceOf: klgateway-children-feeding-observation
Usage: #inline
Title: "Rikkes ammestatus ved etableringsbesøg, fuldammes"
Description: "Rikkes status på madning ved etableringsbesøg: fuldamning"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(62c429e2-fdc5-4e33-83e1-0db858175e08)
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
* code.coding[SNOMEDCT] = $SCT#169740003 "Infant feeding method"
* valueCodeableConcept = $FBOE#77a008dd-21cc-452f-a1ee-ac8d025b7817 "Fuldamning, inklusiv modermælk på flaske"
* status = #final
* effectiveDateTime = 2020-05-17T00:00:00.000Z

Instance: 5b9a6ff2-c941-41e9-9c4c-9f4667bc063a
InstanceOf: klgateway-children-bodyweight
Usage: #inline
Title: "Rikkes vægt, etableringsbesøg"
Description: "Rikkes vægt ved etableringsbesøg"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(62c429e2-fdc5-4e33-83e1-0db858175e08)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#27113001 "Body weight"
* code.coding[LOINC] = $LOINC#29463-7
* valueQuantity.value = 3400
* valueQuantity.unit = "g"
* valueQuantity.system = $UCUM
* valueQuantity.code = #g
* status = #final
* effectiveDateTime = 2020-05-17

Instance: d07d8d25-bc06-487e-a4b5-e180601c62d9
InstanceOf: klgateway-children-bodyheight
Usage: #inline
Title: "Rikkes længde etablering"
Description: "Rikkes kropslængde, etablering"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(62c429e2-fdc5-4e33-83e1-0db858175e08)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#1149101003 "Recumbent body height (observable entity)"
* code.coding[LOINC] = $LOINC#8302-2
* valueQuantity.value = 51
* valueQuantity.unit = "cm"
* valueQuantity.system = $UCUM
* valueQuantity.code = #cm
* status = #final
* effectiveDateTime = 2020-05-17

Instance: 258e2623-abf5-499b-887b-3b70dc19507c
InstanceOf: klgateway-children-headcircum
Usage: #inline
Title: "Rikkes hovedomkreds, etablering"
Description: "Rikkes hovedomkreds, etablering"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(62c429e2-fdc5-4e33-83e1-0db858175e08)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#363812007 "Head circumference"
* code.coding[LOINC] = $LOINC#9843-4 "Head Occipital-frontal circumference"
* valueQuantity.value = 35
* valueQuantity.unit = "cm"
* valueQuantity.system = $UCUM
* valueQuantity.code = #cm
* status = #final
* effectiveDateTime = 2020-05-17

Instance: 62855009-6fbb-481e-9dd0-8a4c369bde0d
InstanceOf: klgateway-children-parent-relationship
Usage: #inline
Title: "Rikkes relation til forældre ved etablering"
Description: "Rikkes relation til forældre ved etablering"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(62c429e2-fdc5-4e33-83e1-0db858175e08)
* code.coding[FBOECode] = $FBOE#763c6f21-5467-4713-82fb-716c9d0a1fdf "Forældre-barn-relation"
* valueCodeableConcept = $FBOE#7a107df6-8fb8-4744-8413-be10b4c5c1d9 "Velfungerende forældre-barn-relation"
* status = #final
* effectiveDateTime = 2020-05-07

Instance: 0f6ddfae-2882-4ad5-aec4-1144d600eee8
InstanceOf: klgateway-children-passive-smoking
Usage: #inline
Title: "Rikkes passiv rygning ved etablering"
Description: "Rikkes passiv rygning ved etablering"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(62c429e2-fdc5-4e33-83e1-0db858175e08)
* code.coding[FBOECode] = $FBOE#28972d4b-fea3-42ec-b2a5-e2a26f79b14d "Passiv rygning"
* valueCodeableConcept.coding = $FBOE#b54723cf-3114-4119-b1cb-28107a283a99	"Ikke udsat for tobaksrøg"
* status = #final
* effectiveDateTime = 2020-05-07

Instance: 5bc41bc3-b762-4a98-853d-d3daeac05ea4
InstanceOf: klgateway-children-parent-social-status
Title: "Forælders sårbarhed, Kirsten"
Usage: #inline
Description: "Indikator vedr. forælders sårbarhed ifm etablering, Kirsten"
* code.coding[FBOECode] = $FBOE#58997614-ba43-4534-90bd-10c7e76802f4 "Forælders sårbarhed"
* valueCodeableConcept.coding = $FBOE#546e7bef-7a22-451e-971a-326fcd78a843 "Potentiel sårbarhed"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)

Instance: a8cdc6fc-2bf8-457c-aa15-f7e547cf74f7
InstanceOf: klgateway-children-parent-social-status
Title: "Forælders sårbarhed, Knud"
Usage: #inline
Description: "Indikator vedr. forælders sårbarhed ifm etablering, Knud"
* code.coding[FBOECode] = $FBOE#58997614-ba43-4534-90bd-10c7e76802f4 "Forælders sårbarhed"
* valueCodeableConcept.coding = $FBOE#57dd67d7-175a-4541-87ff-db1381c4e1d9 "Ingen sårbarhed"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z
* subject = Reference(e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a-v2)

Instance: d4df27ce-86f1-4330-b166-c4c4724a633e
InstanceOf: klgateway-children-social-support-network
Usage: #inline
Title: "Forælders netværk, Kirsten"
Description: "Kirstens netværk ved etablering"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* code.coding[FBOECode] = $FBOE#7e7fab2f-278a-4b14-9bc9-efc36fffcba5 "Netværk"
* valueCodeableConcept = $FBOE#fbd9a8a5-0ed6-4e1a-9841-066ade34b071 "Godt netværk"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z

Instance: 0083e1d2-46d4-4da2-8497-596464cfc4b1
InstanceOf: klgateway-children-social-support-network
Usage: #inline
Title: "Forælders netværk, Knud"
Description: "Knuds netværk ved etablering"
* subject = Reference(e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a-v2)
* code.coding[FBOECode] = $FBOE#7e7fab2f-278a-4b14-9bc9-efc36fffcba5 "Netværk"
* valueCodeableConcept = $FBOE#fbd9a8a5-0ed6-4e1a-9841-066ade34b071 "Godt netværk"
* status = #final
* effectiveDateTime = 2020-02-05T00:00:00.000Z

// 4th - a
Instance: c60604d1-692b-4e6d-86e5-03046b2d2f16
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Rikke-4a"
Usage: #example
* type = #collection
* timestamp = 2020-06-01T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e60106e2-413e-46c5-8a3f-62d8e77ce794" //Rikke
* entry[=].resource = e60106e2-413e-46c5-8a3f-62d8e77ce794

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/78742a92-91b1-489f-9fea-6901f6d0b34b" //2. besøg i første levemåned
* entry[=].resource = 78742a92-91b1-489f-9fea-6901f6d0b34b


Instance: 78742a92-91b1-489f-9fea-6901f6d0b34b
InstanceOf: klgateway-children-encounter
Title: "Andet besøg inden første måned ved Rikke"
Usage: #inline
Description: "Kontakt, hvor der leveres Andet besøg inden første måned ved Rikke"
* type = $FBOE#563c4174-f451-4c87-8db8-8d5472ca7ff6 "Andet besøg inden første måned"
* period.start = 2020-06-01
* status = $EncounterStatus#finished
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* class = $V3ACTCODES#HH


Instance: 84cf4f74-0cc7-47fe-8301-3bc8eb0ddd8f
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Rikke-4b"
Usage: #example
* type = #collection
* timestamp = 2020-06-02T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e60106e2-413e-46c5-8a3f-62d8e77ce794" //Rikke
* entry[=].resource = e60106e2-413e-46c5-8a3f-62d8e77ce794

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/78742a92-91b1-489f-9fea-6901f6d0b34b" //2. besøg i første levemåned
* entry[=].resource = 78742a92-91b1-489f-9fea-6901f6d0b34b

* entry[+].fullUrl = "https://test.fhir.dk/Observation/a85a7271-1838-4b93-ad2e-8a115a91fff7" // Rikkes vægt
* entry[=].resource = a85a7271-1838-4b93-ad2e-8a115a91fff7

* entry[+].fullUrl = "https://test.fhir.dk/Observation/f1bc69fc-c059-4b3a-8277-e45e985f74d6" // Rikkes højde
* entry[=].resource = f1bc69fc-c059-4b3a-8277-e45e985f74d6

* entry[+].fullUrl = "https://test.fhir.dk/Observation/f71f887e-cf4b-44fc-b211-76230e56f5cd" // Rikkes hovedomfang
* entry[=].resource = f71f887e-cf4b-44fc-b211-76230e56f5cd

* entry[+].fullUrl = "https://test.fhir.dk/Observation/44655dde-e380-4df2-8bea-b3e64a18d49f" // Rikkes fuldamning
* entry[=].resource = 44655dde-e380-4df2-8bea-b3e64a18d49f

* entry[+].fullUrl = "https://test.fhir.dk/Observation/e10d5d17-9f63-41ca-96b9-f43caee79efb" // Rikkes relation til forældre
* entry[=].resource = e10d5d17-9f63-41ca-96b9-f43caee79efb

* entry[+].fullUrl = "https://test.fhir.dk/Observation/0db05d8b-00b9-4125-8cb1-2edc064394a4" // Rikkes kommunikation
* entry[=].resource = 0db05d8b-00b9-4125-8cb1-2edc064394a4

Instance: a85a7271-1838-4b93-ad2e-8a115a91fff7
InstanceOf: klgateway-children-bodyweight
Usage: #inline
Title: "Rikkes vægt, Andet besøg inden første måned"
Description: "Rikkes vægt ved Andet besøg inden første måned"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(78742a92-91b1-489f-9fea-6901f6d0b34b)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#27113001 "Body weight"
* code.coding[LOINC] = $LOINC#29463-7
* valueQuantity.value = 4150
* valueQuantity.unit = "g"
* valueQuantity.system = $UCUM
* valueQuantity.code = #g
* status = #final
* effectiveDateTime = 2020-06-01

Instance: f1bc69fc-c059-4b3a-8277-e45e985f74d6
InstanceOf: klgateway-children-bodyheight
Usage: #inline
Title: "Rikkes længde Andet besøg inden første måned"
Description: "Rikkes kropslængde, Andet besøg inden første måned"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(78742a92-91b1-489f-9fea-6901f6d0b34b)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#1149101003 "Recumbent body height (observable entity)"
* code.coding[LOINC] = $LOINC#8302-2
* valueQuantity.value = 53.5
* valueQuantity.unit = "cm"
* valueQuantity.system = $UCUM
* valueQuantity.code = #cm
* status = #final
* effectiveDateTime = 2020-06-01

Instance: f71f887e-cf4b-44fc-b211-76230e56f5cd
InstanceOf: klgateway-children-headcircum
Usage: #inline
Title: "Rikkes hovedomkreds, 2. besøg"
Description: "Rikkes hovedomkreds, 2. besøg"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(78742a92-91b1-489f-9fea-6901f6d0b34b)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#363812007 "Head circumference"
* code.coding[LOINC] = $LOINC#9843-4 "Head Occipital-frontal circumference"
* valueQuantity.value = 36.5
* valueQuantity.unit = "cm"
* valueQuantity.system = $UCUM
* valueQuantity.code = #cm
* status = #final
* effectiveDateTime = 2020-06-01

Instance: 44655dde-e380-4df2-8bea-b3e64a18d49f
InstanceOf: klgateway-children-feeding-observation
Usage: #inline
Title: "Rikkes ammestatus ved 2. besøg, fuldammes"
Description: "Rikkes status på madning ved 2. besøg: fuldamning"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(78742a92-91b1-489f-9fea-6901f6d0b34b)
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
* code.coding[SNOMEDCT] = $SCT#169740003 "Infant feeding method"
* valueCodeableConcept = $FBOE#77a008dd-21cc-452f-a1ee-ac8d025b7817 "Fuldamning, inklusiv modermælk på flaske"
* status = #final
* effectiveDateTime = 2020-06-01

Instance: e10d5d17-9f63-41ca-96b9-f43caee79efb
InstanceOf: klgateway-children-parent-relationship
Usage: #inline
Title: "Rikkes relation til forældre ved 2. besøg"
Description: "Rikkes relation til forældre ved 2. besøg"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(78742a92-91b1-489f-9fea-6901f6d0b34b)
* code.coding[FBOECode] = $FBOE#763c6f21-5467-4713-82fb-716c9d0a1fdf "Forældre-barn-relation"
* valueCodeableConcept = $FBOE#7a107df6-8fb8-4744-8413-be10b4c5c1d9 "Velfungerende forældre-barn-relation"
* status = #final
* effectiveDateTime = 2020-06-01

Instance: 0db05d8b-00b9-4125-8cb1-2edc064394a4
InstanceOf: klgateway-children-communication
Usage: #inline
Title: "Rikkes kommunikation 2. besøg"
Description: "Rikkes kommunikation ved 2. besøg"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(78742a92-91b1-489f-9fea-6901f6d0b34b)
* code.coding[FBOECode] = $FBOE#653c2b0b-bb64-4906-888b-aea6fef3c3f8 "Kommunikation"
* valueCodeableConcept = $FBOE#042d522d-0abe-46eb-a958-6e235b5d5408 "Kommunikerer alderssvarende" 
* status = #final
* effectiveDateTime = 2020-06-01

//5th
Instance: 567a4d32-b3eb-46d6-8564-c7c2a1a1b903
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Rikke-5"
Usage: #example
* type = #collection
* timestamp = 2020-07-07T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8" //Kirsten
* entry[=].resource = fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a" //Knud
* entry[=].resource = e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a-v2

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e60106e2-413e-46c5-8a3f-62d8e77ce794" //Rikke
* entry[=].resource = e60106e2-413e-46c5-8a3f-62d8e77ce794

* entry[+].fullUrl = "https://test.fhir.dk/RelatedPerson/a4b064a0-7fdd-467f-81cc-d1575b52b7f8" //Kirsten mor
* entry[=].resource = a4b064a0-7fdd-467f-81cc-d1575b52b7f8

* entry[+].fullUrl = "https://test.fhir.dk/RelatedPerson/e9704ba6-f6ca-46b1-9d19-d9b4bcdc864c" //Knud far
* entry[=].resource = e9704ba6-f6ca-46b1-9d19-d9b4bcdc864c

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/d84ae0c1-4054-476d-950a-993aa1de3320" //2 måneders besøg
* entry[=].resource = d84ae0c1-4054-476d-950a-993aa1de3320

* entry[+].fullUrl = "https://test.fhir.dk/QuestionnaireResponse/e95e75ea-bef7-4b37-bc38-6cb7b4d3a7df" //Kirstens EPDS
* entry[=].resource = e95e75ea-bef7-4b37-bc38-6cb7b4d3a7df

* entry[+].fullUrl = "https://test.fhir.dk/QuestionnaireResponse/6b1b28f3-f2f2-4f81-b840-b9aaf6a3fa9d" //Knuds EPDS
* entry[=].resource = 6b1b28f3-f2f2-4f81-b840-b9aaf6a3fa9d

* entry[+].fullUrl = "https://test.fhir.dk/Observation/36d31f74-0835-474d-825b-d37562cfaa0a" //Kirsten psykisk tilstand, påvirket
* entry[=].resource = 36d31f74-0835-474d-825b-d37562cfaa0a

* entry[+].fullUrl = "https://test.fhir.dk/Observation/620b137a-344a-46b4-b806-899744d927e9" //Kirsten exam result, nedtrykt
* entry[=].resource = 620b137a-344a-46b4-b806-899744d927e9

* entry[+].fullUrl = "https://test.fhir.dk/Observation/78dd76e4-3480-46ce-83d7-e81d4898bd52" //Kirsten exam result, depressive ledsagesymptomer
* entry[=].resource = 78dd76e4-3480-46ce-83d7-e81d4898bd52

* entry[+].fullUrl = "https://test.fhir.dk/Observation/ea3dd374-c0b8-4a5b-a55b-6f875250410d" //Knuds psykisk tilstand, forventelig
* entry[=].resource = ea3dd374-c0b8-4a5b-a55b-6f875250410d

* entry[+].fullUrl = "https://test.fhir.dk/Observation/af086f37-4784-42b0-bbfe-9517a8c4f910" //Rikke forældre-barn relation, let udfordret
* entry[=].resource = af086f37-4784-42b0-bbfe-9517a8c4f910

* entry[+].fullUrl = "https://test.fhir.dk/Observation/5f4dbe28-6fef-4c8d-92fd-5845cccdc10c" //Rikke exam result, følelsesmæssige behov ikke dækket
* entry[=].resource = 5f4dbe28-6fef-4c8d-92fd-5845cccdc10c

* entry[+].fullUrl = "https://test.fhir.dk/Observation/fbc991ff-39f3-414d-ae56-cc09f1191902" //Rikke social kontakt, ikke alderssvarende
* entry[=].resource = fbc991ff-39f3-414d-ae56-cc09f1191902

* entry[+].fullUrl = "https://test.fhir.dk/Observation/322439d1-6b40-457f-899f-79f3aa71465f" //Rikke exam result, græder meget
* entry[=].resource = 322439d1-6b40-457f-899f-79f3aa71465f

* entry[+].fullUrl = "https://test.fhir.dk/Observation/36003d32-79f2-4e49-aaad-b90361eff393" //Rikke exam result, afvigende øjenkontakt
* entry[=].resource = 36003d32-79f2-4e49-aaad-b90361eff393

* entry[+].fullUrl = "https://test.fhir.dk/Observation/c7a83370-eb45-40b1-af81-7340a640cc20" //ammestatus
* entry[=].resource = c7a83370-eb45-40b1-af81-7340a640cc20

* entry[+].fullUrl = "https://test.fhir.dk/Observation/23430a7d-2310-45d5-9e62-0d210c309a26" //vægt
* entry[=].resource = 23430a7d-2310-45d5-9e62-0d210c309a26

* entry[+].fullUrl = "https://test.fhir.dk/Observation/27a28610-3637-4042-a00f-2a183c743848" //højde
* entry[=].resource = 27a28610-3637-4042-a00f-2a183c743848

* entry[+].fullUrl = "https://test.fhir.dk/Observation/dc5df970-dcd3-4171-8c45-aa9aed1b7ac3" //hovedomfang
* entry[=].resource = dc5df970-dcd3-4171-8c45-aa9aed1b7ac3

* entry[+].fullUrl = "https://test.fhir.dk/Observation/8786751e-5d85-48c2-aade-3a9d321956ed" //kommunikation
* entry[=].resource = 8786751e-5d85-48c2-aade-3a9d321956ed

* entry[+].fullUrl = "https://test.fhir.dk/Observation/4e533431-661c-4be3-ac6b-fc2736527340" //søvn
* entry[=].resource = 4e533431-661c-4be3-ac6b-fc2736527340

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/64c5d9f1-1647-4ed0-9f61-172a0c96ecc1" //Kirstens ’Anbefalet kontakt til praktiserende læge’
* entry[=].resource = 64c5d9f1-1647-4ed0-9f61-172a0c96ecc1

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/39c7eccc-4cc4-496a-8664-ab73017edb58" //Kirstens ’Forældregruppe hvor forælder har psykisk reaktion’
* entry[=].resource = 39c7eccc-4cc4-496a-8664-ab73017edb58

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/d3df60d0-4380-43b4-8d15-2e3fb3b4c50a" //Kirstens ’Støtte ved psykisk reaktion eller sårbarhed’
* entry[=].resource = d3df60d0-4380-43b4-8d15-2e3fb3b4c50a

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/6122356d-a611-4660-8b0f-c86185f465f8" // Rikkes ’Vejledning i kontakt, samspil og barnets behov’
* entry[=].resource = 6122356d-a611-4660-8b0f-c86185f465f8

Instance: d84ae0c1-4054-476d-950a-993aa1de3320
InstanceOf: klgateway-children-encounter
Title: "2 måneders besøg ved Rikke"
Usage: #inline
Description: "Kontakt, hvor der leveres 2 måneders besøgved Rikke"
* type = $FBOE#51f30d1c-d60e-4e3e-ac22-ec9712ea962d "Besøg hos det ca. 2 måneder gamle barn"
* period.start = 2020-07-07
* status = $EncounterStatus#finished
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* class = $V3ACTCODES#HH

Instance: e95e75ea-bef7-4b37-bc38-6cb7b4d3a7df
InstanceOf: KLGatewayChildrenQuestionnaireResponse
Usage: #inline
Title: "EPDS Kirsten"
Description: "EPDS besvarelse mor, Kirsten"
* questionnaire = "http://fhir.kl.dk/children/Questionnaire/klgateway-children-epds"
* status = #completed
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* extension[findingInformer].valueCodeableConcept = $KLCommonCodes#25b4e705-2e9a-47a2-b11a-c829316b9d3a "Borger"
* authored = 2020-07-07

* item[0].linkId = "1humor"
* item[=].answer.valueInteger = 0

* item[+].linkId = "2happiness"
* item[=].answer.valueInteger = 2

* item[+].linkId = "3blame"
* item[=].answer.valueInteger = 3

* item[+].linkId = "4worry"
* item[=].answer.valueInteger = 1

* item[+].linkId = "5anxious"
* item[=].answer.valueInteger = 2

* item[+].linkId = "6grow"
* item[=].answer.valueInteger = 1

* item[+].linkId = "7sleep"
* item[=].answer.valueInteger = 1

* item[+].linkId = "8sad"
* item[=].answer.valueInteger = 3

* item[+].linkId = "9cry"
* item[=].answer.valueInteger = 2

* item[+].linkId = "10harm"
* item[=].answer.valueInteger = 0

* item[+].linkId = "score"
* item[=].answer.valueInteger = 15

Instance: 6b1b28f3-f2f2-4f81-b840-b9aaf6a3fa9d
InstanceOf: KLGatewayChildrenQuestionnaireResponse
Usage: #inline
Title: "EPDS Knud"
Description: "EPDS besvarelse far, Knud"
* questionnaire = "http://fhir.kl.dk/children/Questionnaire/klgateway-children-epds"
* status = #completed
* subject = Reference(e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a-v2)
* extension[findingInformer].valueCodeableConcept = $KLCommonCodes#25b4e705-2e9a-47a2-b11a-c829316b9d3a "Borger"
* authored = 2020-07-07

* item[0].linkId = "1humor"
* item[=].answer.valueInteger = 0

* item[+].linkId = "2happiness"
* item[=].answer.valueInteger = 0

* item[+].linkId = "3blame"
* item[=].answer.valueInteger = 0

* item[+].linkId = "4worry"
* item[=].answer.valueInteger = 1

* item[+].linkId = "5anxious"
* item[=].answer.valueInteger = 0

* item[+].linkId = "6grow"
* item[=].answer.valueInteger = 1

* item[+].linkId = "7sleep"
* item[=].answer.valueInteger = 1

* item[+].linkId = "8sad"
* item[=].answer.valueInteger = 0

* item[+].linkId = "9cry"
* item[=].answer.valueInteger = 0

* item[+].linkId = "10harm"
* item[=].answer.valueInteger = 0

* item[+].linkId = "score"
* item[=].answer.valueInteger = 2

Instance: 36d31f74-0835-474d-825b-d37562cfaa0a
InstanceOf: klgateway-children-parent-mental-status
Usage: #inline
Title: "Forælders psykiske tilstand, Kirsten"
Description: "Kirstens psykiske tilstand ved 2 mrd"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* code.coding[FBOECode] = $FBOE#2c39af9f-8e45-4c88-962f-e7a9e2cd31b6 "Forælders psykiske tilstand"
* valueCodeableConcept = $FBOE#f86c2526-3b04-454c-a99e-d350f699dc94 "Psykisk reaktion"
* status = #final
* effectiveDateTime = 2020-07-07

Instance: ea3dd374-c0b8-4a5b-a55b-6f875250410d
InstanceOf: klgateway-children-parent-mental-status
Usage: #inline
Title: "Forælders psykiske tilstand, Knud"
Description: "Knuds psykiske tilstand ved 2mrd"
* subject = Reference(e2cbbca1-ac3d-4bb1-b43b-c0d62b48b33a-v2)
* code.coding[FBOECode] = $FBOE#2c39af9f-8e45-4c88-962f-e7a9e2cd31b6 "Forælders psykiske tilstand"
* valueCodeableConcept = $FBOE#0e5db980-8c6e-4034-abab-054e0eb40935 "Forventelig psykisk reaktion"
* status = #final
* effectiveDateTime = 2020-07-07

Instance: 620b137a-344a-46b4-b806-899744d927e9
InstanceOf: klgateway-children-exam-result
Usage: #inline
Title: "Kirstens, forælders psykiske tilstand nuancering, 2mrds besøg"
Description: "Kirstens, forælders psykiske tilstand nuancering, 2mrds besøg: nedtrykt"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* valueCodeableConcept = $FBOE#fc3d65d1-1509-47ef-8845-60adea5d7a65 "Nedtrykthed"
* status = #final
* effectiveDateTime = 2020-07-07

Instance: 78dd76e4-3480-46ce-83d7-e81d4898bd52
InstanceOf: klgateway-children-exam-result
Usage: #inline
Title: "Kirstens, forælders psykiske tilstand nuancering, 2mrds besøg"
Description: "Kirstens, forælders psykiske tilstand nuancering, 2mrds besøg: Depressive ledsagesymptomer"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* valueCodeableConcept = $FBOE#dc7cdfb3-d33b-41cc-bb18-2be3592fe323 "Depressive ledsagesymptomer"
* status = #final
* effectiveDateTime = 2020-07-07

Instance: af086f37-4784-42b0-bbfe-9517a8c4f910
InstanceOf: klgateway-children-parent-relationship
Usage: #inline
Title: "Rikkes relation til forældre 2 mrds besøg"
Description: "Rikkes relation til forældre ved 2 mrds besøg: let påvirket"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* code.coding[FBOECode] = $FBOE#763c6f21-5467-4713-82fb-716c9d0a1fdf "Forældre-barn-relation"
* valueCodeableConcept = $FBOE#274791a5-094d-4e6a-831e-e712d3d66aeb "Let påvirket forældre-barn-relation"
* status = #final
* effectiveDateTime = 2020-07-07

Instance: 5f4dbe28-6fef-4c8d-92fd-5845cccdc10c
InstanceOf: klgateway-children-exam-result
Usage: #inline
Title: "Rikke, forældre barn relation nuancering, 2mrds besøg"
Description: "Rikke, forældre barn relation nuancering, 2mrds besøg: Følelsesmæssige behov dækkes ikke"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* valueCodeableConcept = $FBOE#51bc227a-3455-474d-bf42-fc7a7875513c "Følelsesmæssige behov opfyldes ikke"
* status = #final
* effectiveDateTime = 2020-07-07

Instance: fbc991ff-39f3-414d-ae56-cc09f1191902
InstanceOf: klgateway-children-social-interaction
Usage: #inline
Title: "Rikke social kontakt"
Description: "Rikkes sociale kontakt ved 2mrd"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* code.coding[FBOECode] = $FBOE#68605f88-49fb-44b9-b327-86947af6aa93 "Social kontakt"
* valueCodeableConcept = $FBOE#e1c1674c-9384-4d95-999f-763f3868f444 "Udfordring i social kontakt"
* status = #final
* effectiveDateTime = 2020-07-07

Instance: 322439d1-6b40-457f-899f-79f3aa71465f
InstanceOf: klgateway-children-exam-result
Usage: #inline
Title: "Rikke, social kontakt nuancering, 2mrds besøg"
Description: "Rikke, social kontakt nuancering, 2mrds besøg: græder meget"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* valueCodeableConcept = $FBOE#e818645e-47a7-4125-a579-a68f556b7344	"Græder meget"
* status = #final
* effectiveDateTime = 2020-07-07

Instance: 36003d32-79f2-4e49-aaad-b90361eff393
InstanceOf: klgateway-children-exam-result
Usage: #inline
Title: "Rikke, social kontakt nuancering, 2mrds besøg"
Description: "Rikke, social kontakt nuancering, 2mrds besøg: afvigende øjenkontakt"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* valueCodeableConcept = $FBOE#bfd18100-d007-4465-95ce-5bf2ac8bc091 "Afvigende øjenkontakt"
* status = #final
* effectiveDateTime = 2020-07-07

Instance: 23430a7d-2310-45d5-9e62-0d210c309a26
InstanceOf: klgateway-children-bodyweight
Usage: #inline
Title: "Rikkes vægt, 2 måneders besøg"
Description: "Rikkes vægt ved 2 måneders besøg"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#27113001 "Body weight"
* code.coding[LOINC] = $LOINC#29463-7
* valueQuantity.value = 5100
* valueQuantity.unit = "g"
* valueQuantity.system = $UCUM
* valueQuantity.code = #g
* status = #final
* effectiveDateTime = 2020-07-07

Instance: 27a28610-3637-4042-a00f-2a183c743848
InstanceOf: klgateway-children-bodyheight
Usage: #inline
Title: "Rikkes længde 2 måneders besøg"
Description: "Rikkes kropslængde, 2 måneders besøg"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#1149101003 "Recumbent body height (observable entity)"
* code.coding[LOINC] = $LOINC#8302-2
* valueQuantity.value = 57
* valueQuantity.unit = "cm"
* valueQuantity.system = $UCUM
* valueQuantity.code = #cm
* status = #final
* effectiveDateTime = 2020-07-07

Instance: dc5df970-dcd3-4171-8c45-aa9aed1b7ac3
InstanceOf: klgateway-children-headcircum
Usage: #inline
Title: "Rikkes hovedomkreds, 2 måneders besøg"
Description: "Rikkes hovedomkreds, 2 måneders besøg"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#363812007 "Head circumference"
* code.coding[LOINC] = $LOINC#9843-4 "Head Occipital-frontal circumference"
* valueQuantity.value = 38
* valueQuantity.unit = "cm"
* valueQuantity.system = $UCUM
* valueQuantity.code = #cm
* status = #final
* effectiveDateTime = 2020-07-07

Instance: c7a83370-eb45-40b1-af81-7340a640cc20
InstanceOf: klgateway-children-feeding-observation
Usage: #inline
Title: "Rikkes ammestatus ved 2 måneders besøg, fuldammes"
Description: "Rikkes status på madning ved 2 måneders besøg: fuldamning"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
* code.coding[SNOMEDCT] = $SCT#169740003 "Infant feeding method"
* valueCodeableConcept = $FBOE#77a008dd-21cc-452f-a1ee-ac8d025b7817 "Fuldamning, inklusiv modermælk på flaske"
* status = #final
* effectiveDateTime = 2020-07-07

Instance: 8786751e-5d85-48c2-aade-3a9d321956ed
InstanceOf: klgateway-children-communication
Usage: #inline
Title: "Rikkes kommunikation 2 måneders besøg"
Description: "Rikkes kommunikation ved 2 måneders besøg"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* code.coding[FBOECode] = $FBOE#653c2b0b-bb64-4906-888b-aea6fef3c3f8 "Kommunikation"
* valueCodeableConcept = $FBOE#042d522d-0abe-46eb-a958-6e235b5d5408 "Kommunikerer alderssvarende" 
* status = #final
* effectiveDateTime = 2020-07-07

Instance: 4e533431-661c-4be3-ac6b-fc2736527340
InstanceOf: klgateway-children-sleep
Usage: #inline
Title: "Rikkes søvn ved 2mrd"
Description: "Rikkes søvn ved 2mrd"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* encounter = Reference(d84ae0c1-4054-476d-950a-993aa1de3320)
* code.coding[FBOECode] = $FBOE#73f981f8-455a-4158-b435-7c6d83ab84da "Søvn"
* valueCodeableConcept = $FBOE#b07eec60-941d-484d-8c2a-aeaa2ba798bf "Søvn med normale variationer" 
* status = #final
* effectiveDateTime = 2020-07-07

Instance: 64c5d9f1-1647-4ed0-9f61-172a0c96ecc1
InstanceOf: klgateway-children-intervention
Usage: #inline
Title: "Kirsten intervention, praktiserende læge"
Description: "Kirsten intervention, praktiserende læge"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* period.start = 2020-07-07
* intent = #plan
* status = #active
* activity.detail.status = #unknown
* activity.detail.code.coding = $FBOE#b708c983-0bb8-4303-a442-9af4c8b950bb "Anbefaling af kontakt til praktiserende læge"
* activity.detail.reasonCode.coding = $FBOE#f86c2526-3b04-454c-a99e-d350f699dc94 "Psykisk reaktion"

Instance: 39c7eccc-4cc4-496a-8664-ab73017edb58
InstanceOf: klgateway-children-intervention
Usage: #inline
Title: "Kirsten intervention, forældregruppe"
Description: "Kirsten intervention, forældregruppe"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* period.start = 2020-07-07
* intent = #plan
* status = #active
* activity.detail.status = #unknown
* activity.detail.code.coding = $FBOE#e535fc78-ce61-4f97-b717-5901d5330ca9 "Forældregruppe, hvor forælder har psykisk reaktion"
* activity.detail.reasonCode.coding = $FBOE#f86c2526-3b04-454c-a99e-d350f699dc94 "Psykisk reaktion"

Instance: d3df60d0-4380-43b4-8d15-2e3fb3b4c50a
InstanceOf: klgateway-children-intervention
Usage: #inline
Title: "Kirsten intervention, Støtte ved psykisk reaktion eller sårbarhed"
Description: "Kirsten intervention, Støtte ved psykisk reaktion eller sårbarhed"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* period.start = 2020-07-07
* intent = #plan
* status = #active
* activity.detail.status = #unknown
* activity.detail.code.coding = $FBOE#8af7f611-2bae-4ba5-923a-d748501d1ad3 "Støtte ved psykisk reaktion eller sårbarhed"
* activity.detail.reasonCode.coding = $FBOE#f86c2526-3b04-454c-a99e-d350f699dc94 "Psykisk reaktion"

Instance: 6122356d-a611-4660-8b0f-c86185f465f8
InstanceOf: klgateway-children-intervention
Usage: #inline
Title: "Rikke behovsindsats social kontakt"
Description: "Rikkes behovsindsats vedr. social kontakt"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* period.start = 2020-07-07
* intent = #plan
* status = #active
* activity.detail.status = #unknown
* activity.detail.code.coding = $FBOE#b3de92ea-ac5e-4f87-809e-a9e40b59cc34 "Vejledning i kontakt, samspil og barnets behov"
* activity.detail.reasonCode.coding = $FBOE#e1c1674c-9384-4d95-999f-763f3868f444 "Udfordring i social kontakt"

//6th
Instance: dbe422ac-dd15-4562-838d-1f5ff9ae45d8
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Rikke-6"
Usage: #example
* type = #collection
* timestamp = 2020-07-09T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8" //Kirsten
* entry[=].resource = fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e60106e2-413e-46c5-8a3f-62d8e77ce794" //Rikke
* entry[=].resource = e60106e2-413e-46c5-8a3f-62d8e77ce794

* entry[+].fullUrl = "https://test.fhir.dk/RelatedPerson/a4b064a0-7fdd-467f-81cc-d1575b52b7f8" //Kirsten mor
* entry[=].resource = a4b064a0-7fdd-467f-81cc-d1575b52b7f8

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/96d43e08-4011-4003-9c37-4a2eabca0c4a" //behovskontakt 1, rikke
* entry[=].resource = 96d43e08-4011-4003-9c37-4a2eabca0c4a

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/8d097cb2-3b48-46e9-9d96-a097bbff0928" //behovskontakt 1, kirsten
* entry[=].resource = 8d097cb2-3b48-46e9-9d96-a097bbff0928

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/d3df60d0-4380-43b4-8d15-2e3fb3b4c50a" //Kirstens ’Støtte ved psykisk reaktion eller sårbarhed’
* entry[=].resource = d3df60d0-4380-43b4-8d15-2e3fb3b4c50a

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/6122356d-a611-4660-8b0f-c86185f465f8" // Rikkes ’Vejledning i kontakt, samspil og barnets behov’
* entry[=].resource = 6122356d-a611-4660-8b0f-c86185f465f8

Instance: 96d43e08-4011-4003-9c37-4a2eabca0c4a
InstanceOf: klgateway-children-encounter
Title: "Behovskontakt Kirsten 1"
Usage: #inline
Description: "Behovskontakt Kirsten 1"
* type = $FBOE#4b039ba1-4005-42e6-b672-09b81ad7578a "Behovskontakt med småbørnssundhedsplejen"
* period.start = 2020-07-09
* status = $EncounterStatus#finished
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* class = $KLCommonCodes#1b55a4b0-1156-4f58-b2df-b5c6014d9048 "Telefonisk"
* extension[basedOnIntervention].valueReference = Reference(d3df60d0-4380-43b4-8d15-2e3fb3b4c50a)

Instance: 8d097cb2-3b48-46e9-9d96-a097bbff0928
InstanceOf: klgateway-children-encounter
Title: "Behovskontakt Rikke 1"
Usage: #inline
Description: "Behovskontakt Rikke 1"
* type = $FBOE#4b039ba1-4005-42e6-b672-09b81ad7578a "Behovskontakt med småbørnssundhedsplejen"
* period.start = 2020-07-09
* status = $EncounterStatus#finished
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* class = $KLCommonCodes#1b55a4b0-1156-4f58-b2df-b5c6014d9048 "Telefonisk"
* extension[basedOnIntervention].valueReference = Reference(6122356d-a611-4660-8b0f-c86185f465f8)

//7th
Instance: a50c7477-c817-4f98-92a8-b8c15f015d9e
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Rikke-7"
Usage: #example
* type = #collection
* timestamp = 2020-07-14T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8" //Kirsten
* entry[=].resource = fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e60106e2-413e-46c5-8a3f-62d8e77ce794" //Rikke
* entry[=].resource = e60106e2-413e-46c5-8a3f-62d8e77ce794

* entry[+].fullUrl = "https://test.fhir.dk/RelatedPerson/a4b064a0-7fdd-467f-81cc-d1575b52b7f8" //Kirsten mor
* entry[=].resource = a4b064a0-7fdd-467f-81cc-d1575b52b7f8

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/ae1f1c80-af46-4893-b99e-0305c5a2bb95" //behovskontakt 2, rikke
* entry[=].resource = ae1f1c80-af46-4893-b99e-0305c5a2bb95

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/651dec86-17ee-4570-8759-964ca1270bcb" //behovskontakt 2, kirsten
* entry[=].resource = 651dec86-17ee-4570-8759-964ca1270bcb

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/d3df60d0-4380-43b4-8d15-2e3fb3b4c50a" //Kirstens ’Støtte ved psykisk reaktion eller sårbarhed’
* entry[=].resource = d3df60d0-4380-43b4-8d15-2e3fb3b4c50a-v2

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/6122356d-a611-4660-8b0f-c86185f465f8" // Rikkes ’Vejledning i kontakt, samspil og barnets behov’
* entry[=].resource = 6122356d-a611-4660-8b0f-c86185f465f8

Instance: 651dec86-17ee-4570-8759-964ca1270bcb
InstanceOf: klgateway-children-encounter
Title: "Behovskontakt Kirsten 2"
Usage: #inline
Description: "Behovskontakt Kirsten 2"
* type = $FBOE#4b039ba1-4005-42e6-b672-09b81ad7578a "Behovskontakt med småbørnssundhedsplejen"
* period.start = 2020-07-14
* status = $EncounterStatus#finished
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* class = $V3ACTCODES#HH
* extension[basedOnIntervention].valueReference = Reference(d3df60d0-4380-43b4-8d15-2e3fb3b4c50a-v2)

Instance: ae1f1c80-af46-4893-b99e-0305c5a2bb95
InstanceOf: klgateway-children-encounter
Title: "Behovskontakt Rikke 2"
Usage: #inline
Description: "Behovskontakt Rikke 2"
* type = $FBOE#4b039ba1-4005-42e6-b672-09b81ad7578a "Behovskontakt med småbørnssundhedsplejen"
* period.start = 2020-07-14
* status = $EncounterStatus#finished
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* class = $V3ACTCODES#HH
* extension[basedOnIntervention].valueReference = Reference(6122356d-a611-4660-8b0f-c86185f465f8)

Instance: d3df60d0-4380-43b4-8d15-2e3fb3b4c50a-v2
InstanceOf: klgateway-children-intervention
Usage: #inline
Title: "Kirsten intervention, Støtte ved psykisk reaktion eller sårbarhed"
Description: "Kirsten intervention, Støtte ved psykisk reaktion eller sårbarhed"
* id = "d3df60d0-4380-43b4-8d15-2e3fb3b4c50a"
* subject = Reference(fa03ee6c-e38a-44cf-8ef4-79f8ea91b3b8-v2)
* period.start = 2020-07-07
* period.end = 2020-07-14
* intent = #plan
* status = #completed
* activity.detail.status = #unknown
* activity.detail.code.coding = $FBOE#8af7f611-2bae-4ba5-923a-d748501d1ad3 "Støtte ved psykisk reaktion eller sårbarhed"
* activity.detail.reasonCode.coding = $FBOE#f86c2526-3b04-454c-a99e-d350f699dc94 "Psykisk reaktion"

//8th
Instance: d2e57785-7d0e-4b30-9e51-62c14185b9ed
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Rikke-8"
Usage: #example
* type = #collection
* timestamp = 2020-07-14T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/e60106e2-413e-46c5-8a3f-62d8e77ce794" //Rikke
* entry[=].resource = e60106e2-413e-46c5-8a3f-62d8e77ce794

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/aa43bf55-e593-4212-8e01-cb31a96f9726" //behovskontakt 3, rikke
* entry[=].resource = aa43bf55-e593-4212-8e01-cb31a96f9726

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/6122356d-a611-4660-8b0f-c86185f465f8" // Rikkes ’Vejledning i kontakt, samspil og barnets behov’
* entry[=].resource = 6122356d-a611-4660-8b0f-c86185f465f8-v2


Instance: aa43bf55-e593-4212-8e01-cb31a96f9726
InstanceOf: klgateway-children-encounter
Title: "Behovskontakt Rikke 3"
Usage: #inline
Description: "Behovskontakt Rikke 3"
* type = $FBOE#4b039ba1-4005-42e6-b672-09b81ad7578a "Behovskontakt med småbørnssundhedsplejen"
* period.start = 2020-07-23
* status = $EncounterStatus#finished
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* class = $V3ACTCODES#HH
* extension[basedOnIntervention].valueReference = Reference(6122356d-a611-4660-8b0f-c86185f465f8)

Instance: 6122356d-a611-4660-8b0f-c86185f465f8-v2
InstanceOf: klgateway-children-intervention
Usage: #inline
Title: "Rikke behovsindsats social kontakt, afsluttes"
Description: "Rikkes behovsindsats vedr. social kontakt, afsluttes"
* id = "6122356d-a611-4660-8b0f-c86185f465f8"
* subject = Reference(e60106e2-413e-46c5-8a3f-62d8e77ce794)
* period.start = 2020-07-07
* period.end = 2020-07-23
* intent = #plan
* status = #completed
* activity.detail.status = #unknown
* activity.detail.code.coding = $FBOE#b3de92ea-ac5e-4f87-809e-a9e40b59cc34 "Vejledning i kontakt, samspil og barnets behov"
* activity.detail.reasonCode.coding = $FBOE#e1c1674c-9384-4d95-999f-763f3868f444 "Udfordring i social kontakt"


---

File: repos/hl7dk_SLASH_kl-children/input/fsh/example2.fsh


Instance: 5f1d5816-a906-4314-a6f4-69b400682ec6
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Lars-1"
Usage: #example
* type = #collection
* timestamp = 2021-10-06T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/4ced31e7-f852-4bad-a320-fe2a02640434" //Lars
* entry[=].resource = 4ced31e7-f852-4bad-a320-fe2a02640434

* entry[+].fullUrl = "https://test.fhir.dk/Location/d1a03c42-7fdf-43da-9132-404a321c30b8" //Skolen i holbæk
* entry[=].resource = d1a03c42-7fdf-43da-9132-404a321c30b8

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/9a97ee62-ada2-45f6-8559-99477c028eb4" //Indskolingsundersøgelse
* entry[=].resource = 9a97ee62-ada2-45f6-8559-99477c028eb4

* entry[+].fullUrl = "https://test.fhir.dk/Observation/5e8df656-771c-4c17-a525-48c1ba7fe75e" //social kontakt
* entry[=].resource = 5e8df656-771c-4c17-a525-48c1ba7fe75e

* entry[+].fullUrl = "https://test.fhir.dk/Observation/f253b171-b876-4b54-9fd1-92369f0dc23a" // vægt
* entry[=].resource = f253b171-b876-4b54-9fd1-92369f0dc23a

* entry[+].fullUrl = "https://test.fhir.dk/Observation/b019bfd9-62df-46f1-9416-efa5711e5eb2" // højde
* entry[=].resource = b019bfd9-62df-46f1-9416-efa5711e5eb2

* entry[+].fullUrl = "https://test.fhir.dk/Observation/ed032dee-7f27-49c3-ac7e-0330173dc04c" // ernæring
* entry[=].resource = ed032dee-7f27-49c3-ac7e-0330173dc04c

* entry[+].fullUrl = "https://test.fhir.dk/Observation/f4306eb1-d999-41d8-bc02-7b33703038f4" // kommunikation
* entry[=].resource = f4306eb1-d999-41d8-bc02-7b33703038f4

* entry[+].fullUrl = "https://test.fhir.dk/Observation/b1767807-438e-403d-ae79-1f2f81029867" //Motorik
* entry[=].resource = b1767807-438e-403d-ae79-1f2f81029867

* entry[+].fullUrl = "https://test.fhir.dk/Observation/bf4fd089-7f27-4b86-9575-140519c0bb85" //fysisk aktivitet
* entry[=].resource = bf4fd089-7f27-4b86-9575-140519c0bb85

* entry[+].fullUrl = "https://test.fhir.dk/Observation/241aec34-ae18-4746-abbc-35a0b9a3064f" //Hørelse
* entry[=].resource = 241aec34-ae18-4746-abbc-35a0b9a3064f

* entry[+].fullUrl = "https://test.fhir.dk/Observation/9925d07b-566a-43dd-9a37-6ed55c363e84" //Syn
* entry[=].resource = 9925d07b-566a-43dd-9a37-6ed55c363e84

* entry[+].fullUrl = "https://test.fhir.dk/Observation/52fe56d9-748d-4638-a1c9-42ed92f9cc5c" //Søvn, let forstyrret
* entry[=].resource = 52fe56d9-748d-4638-a1c9-42ed92f9cc5c

* entry[+].fullUrl = "https://test.fhir.dk/Observation/100f7033-30e1-4a7d-8bb2-ba13909bd240" //naturininkontinens
* entry[=].resource = 100f7033-30e1-4a7d-8bb2-ba13909bd240

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/067d90b6-751f-4d8e-945b-f501a8acbf54" //'Vejledning ved udskillelsesproblematik'
* entry[=].resource = 067d90b6-751f-4d8e-945b-f501a8acbf54

Instance: 4ced31e7-f852-4bad-a320-fe2a02640434
InstanceOf: klgateway-children-citizen
Description: "Barnet Lars"
Usage: #inline
* identifier.use = #official
* identifier.value = "0505159995"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "451000016003"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"

Instance: d1a03c42-7fdf-43da-9132-404a321c30b8
InstanceOf: klgateway-children-location
Usage: #inline
Title: "SchoolHolbaek"
Description: "Skole i Holbæk"
* identifier.system = "https://viden.stil.dk/display/OFFINSTREG/Institutionsregisteret"
* identifier.value = "280295"
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#SCHOOL

Instance: 9a97ee62-ada2-45f6-8559-99477c028eb4
InstanceOf: klgateway-children-encounter
Title: "Indskolingsundersøgelse Lars"
Usage: #inline
Description: "Kontakt, der er Lars' indskolingsundersøgelse"
* type = $FBOE#c06ed6f1-be9d-460e-a45e-34821bcbd533 "Indskolingsundersøgelse"
* period.start = 2021-10-06T10:45:00.000Z
* status = $EncounterStatus#finished
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* class = $V3ACTCODES#AMB
* location.location = Reference(d1a03c42-7fdf-43da-9132-404a321c30b8)

Instance: 5e8df656-771c-4c17-a525-48c1ba7fe75e
InstanceOf: klgateway-children-social-interaction
Usage: #inline
Title: "Lars social kontakt ved indskoling"
Description: "Lars social kontakt ved indskoling"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* code.coding[FBOECode] = $FBOE#68605f88-49fb-44b9-b327-86947af6aa93 "Social kontakt"
* valueCodeableConcept = $FBOE#008b1890-4be5-463a-b618-0ab3d89515d0 "Alderssvarende social kontakt"
* status = #final
* effectiveDateTime = 2021-10-06

Instance: f253b171-b876-4b54-9fd1-92369f0dc23a
InstanceOf: klgateway-children-bodyweight
Usage: #inline
Title: "Lars vægt indskoling"
Description: "Lars vægt indskoling"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#27113001 "Body weight"
* code.coding[LOINC] = $LOINC#29463-7
* valueQuantity.value = 26
* valueQuantity.unit = "kg"
* valueQuantity.system = $UCUM
* valueQuantity.code = #kg
* status = #final
* effectiveDateTime = 2021-10-06

Instance: b019bfd9-62df-46f1-9416-efa5711e5eb2
InstanceOf: klgateway-children-bodyheight
Usage: #inline
Title: "Lars højde indskoling"
Description: "Lars højde indskoling"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#248333004 "Standing height"
* code.coding[LOINC] = $LOINC#8302-2
* valueQuantity.value = 125
* valueQuantity.unit = "cm"
* valueQuantity.system = $UCUM
* valueQuantity.code = #cm
* status = #final
* effectiveDateTime = 2021-10-06

Instance: ed032dee-7f27-49c3-ac7e-0330173dc04c
InstanceOf: klgateway-children-nutrition
Usage: #inline
Title: "Lars kost, indskoling"
Description: "Lars kost indskoling"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
* valueCodeableConcept.coding = $FBOE#78dcf013-8ae9-4541-b175-100cde77a9f0 "Almindeligt kostindtag"
* status = #final
* effectiveDateTime = 2021-10-06


Instance: f4306eb1-d999-41d8-bc02-7b33703038f4
InstanceOf: klgateway-children-communication
Usage: #inline
Title: "Lars kommunikation indskoling"
Description: "Lars kommunikation indskoling"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* code.coding[FBOECode] = $FBOE#653c2b0b-bb64-4906-888b-aea6fef3c3f8 "Kommunikation"
* valueCodeableConcept = $FBOE#042d522d-0abe-46eb-a958-6e235b5d5408 "Kommunikerer alderssvarende" 
* status = #final
* effectiveDateTime = 2021-10-06

Instance: b1767807-438e-403d-ae79-1f2f81029867
InstanceOf: klgateway-children-motor-function
Usage: #inline
Title: "Lars motorik indskoling"
Description: "Lars motorik indskoling"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* code.coding[FBOECode] = $FBOE#e04f2ca1-888a-4671-a97a-371b525cd2a3 //	Motorik
* valueCodeableConcept = $FBOE#d5b876e1-a86c-4768-b46d-cd795eaa89e4 "Alderssvarende motorik"
* status = #final
* effectiveDateTime = 2021-10-06

Instance: bf4fd089-7f27-4b86-9575-140519c0bb85
InstanceOf: klgateway-children-physical-activity
Usage: #inline
Title: "Lars fysisk aktivitet indskoling"
Description: "Lars fysisk aktivitet indskoling"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* code.coding[FBOECode] = $FBOE#b331fe02-a781-4abd-b6db-9331d6a69b15 "Fysisk aktivitet"
* valueCodeableConcept = $FBOE#05086dad-8718-4a6c-b096-54c7101d0b2c "Fysisk aktiv"
* status = #final
* effectiveDateTime = 2021-10-06

Instance: 241aec34-ae18-4746-abbc-35a0b9a3064f
InstanceOf: klgateway-children-hearing
Usage: #inline
Title: "Lars hørelse indskoling"
Description: "Lars hørelse indskoling"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* code.coding[FBOECode] = $FBOE#a22c4b53-b622-4394-ba13-910a7b0d7b0d "Hørelse"
* valueCodeableConcept = $FBOE#9628db65-7460-4ecc-bbb1-48c0ac4b3f02 "Normal hørelse"
* status = #final
* effectiveDateTime = 2021-10-06

Instance: 9925d07b-566a-43dd-9a37-6ed55c363e84
InstanceOf: klgateway-children-sight
Usage: #inline
Title: "Lars syn indskoling"
Description: "Lars syn indskoling"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* code.coding[FBOECode] = $FBOE#01fddd46-ed7c-423d-b191-ffdd977dd61e "Syn"
* valueCodeableConcept = $FBOE#bdcb835d-6ef6-4c4f-9fdf-94c3ebd17182 "Normalt syn"
* status = #final
* effectiveDateTime = 2021-10-06

Instance: 52fe56d9-748d-4638-a1c9-42ed92f9cc5c
InstanceOf: klgateway-children-sleep
Usage: #inline
Title: "Lars søvn indskoling"
Description: "Lars søvn indskoling"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* code.coding[FBOECode] = $FBOE#73f981f8-455a-4158-b435-7c6d83ab84da "Søvn"
* valueCodeableConcept = $FBOE#d13ad530-d8f6-4933-be18-bb77e2334f9f	"Let forstyrret søvn"
* status = #final
* effectiveDateTime = 2021-10-06

Instance: 100f7033-30e1-4a7d-8bb2-ba13909bd240
InstanceOf: klgateway-children-exam-result
Usage: #inline
Title: "Lars naturininkontinens"
Description: "Lars naturininkontinens"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* encounter = Reference(9a97ee62-ada2-45f6-8559-99477c028eb4)
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* valueCodeableConcept = $FBOE#54f42eb5-18f9-4e82-98e0-1c83988189b9 "Naturininkontinens"
* status = #final
* effectiveDateTime = 2021-10-06

Instance: 067d90b6-751f-4d8e-945b-f501a8acbf54
InstanceOf: klgateway-children-intervention
Usage: #inline
Title: "Lars behovsindsats, Vejledning ved udskillelsesproblematik"
Description: "Lars behovsindsats, Vejledning ved udskillelsesproblematik"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* period.start = 2021-10-06
* intent = #plan
* status = #active
* activity.detail.status = #unknown
* activity.detail.code.coding = $FBOE#bc2fc09c-594b-40f5-bfd4-b4da0307fb64 "Vejledning ved udskillelsesproblematik"
* activity.detail.reasonCode.coding = $FBOE#54f42eb5-18f9-4e82-98e0-1c83988189b9 "Naturininkontinens"


//2nd - a

Instance: 4cda6c3c-856c-4fe3-ac90-9b6f968207c3
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Lars-2a"
Usage: #example
* type = #collection
* timestamp = 2021-10-09T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/4ced31e7-f852-4bad-a320-fe2a02640434" //Lars
* entry[=].resource = 4ced31e7-f852-4bad-a320-fe2a02640434

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/c170882f-0e2f-4b89-ad82-3b4b57fd4c2b" //Behovskontakt
* entry[=].resource = c170882f-0e2f-4b89-ad82-3b4b57fd4c2b

* entry[+].fullUrl = "https://test.fhir.dk/Location/d1a03c42-7fdf-43da-9132-404a321c30b8" //Skolen i holbæk
* entry[=].resource = d1a03c42-7fdf-43da-9132-404a321c30b8

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/a0a6a0f4-f58c-4cc8-b2af-cc636aaceb3e" //Vejledning overvægt'
* entry[=].resource = a0a6a0f4-f58c-4cc8-b2af-cc636aaceb3e

Instance: c170882f-0e2f-4b89-ad82-3b4b57fd4c2b
InstanceOf: klgateway-children-encounter
Title: "Behovskontakt Lars"
Usage: #inline
Description: "Behovskontakt Lars"
* type = $FBOE#606c6585-444b-4ecd-885c-2ee59dc33f32 "Behovskontakt med skolesundhedsplejen"
* period.start = 2021-10-09T11:15:00.000Z
* status = $EncounterStatus#finished
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* class = $V3ACTCODES#AMB
* location.location = Reference(d1a03c42-7fdf-43da-9132-404a321c30b8)

Instance: a0a6a0f4-f58c-4cc8-b2af-cc636aaceb3e
InstanceOf: klgateway-children-intervention
Usage: #inline
Title: "Lars behovsindsats, overvægt"
Description: "Lars behovsindsats, overvægt"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* period.start = 2021-10-06
* intent = #plan
* status = #active
* activity.detail.status = #unknown
* activity.detail.code.coding = $FBOE#b45c3d0e-7d19-4c75-bdf1-fe838b439b86 "Opsporing og vejledning ved overvægt"

Instance: 9a966368-052f-42e5-87fa-e57d9b8cbf2c
InstanceOf: klgateway-children-delivery-report
Description: "DeliveryReport-Lars-2b"
Usage: #example
* type = #collection
* timestamp = 2021-10-09T23:25:12Z

* entry[+].fullUrl = "https://test.fhir.dk/Patient/4ced31e7-f852-4bad-a320-fe2a02640434" //Lars
* entry[=].resource = 4ced31e7-f852-4bad-a320-fe2a02640434

* entry[+].fullUrl = "https://test.fhir.dk/Encounter/c170882f-0e2f-4b89-ad82-3b4b57fd4c2b" //Behovskontakt
* entry[=].resource = c170882f-0e2f-4b89-ad82-3b4b57fd4c2b-v2

* entry[+].fullUrl = "https://test.fhir.dk/Location/d1a03c42-7fdf-43da-9132-404a321c30b8" //Skolen i holbæk
* entry[=].resource = d1a03c42-7fdf-43da-9132-404a321c30b8

* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/a0a6a0f4-f58c-4cc8-b2af-cc636aaceb3e" //Vejledning overvægt'
* entry[=].resource = a0a6a0f4-f58c-4cc8-b2af-cc636aaceb3e-v2

Instance: c170882f-0e2f-4b89-ad82-3b4b57fd4c2b-v2
InstanceOf: klgateway-children-encounter
Title: "Behovskontakt Lars"
Usage: #inline
Description: "Behovskontakt Lars"
* id = "c170882f-0e2f-4b89-ad82-3b4b57fd4c2b"
* type = $FBOE#606c6585-444b-4ecd-885c-2ee59dc33f32 "Behovskontakt med skolesundhedsplejen"
* period.start = 2021-10-09T11:15:00.000Z
* status = $EncounterStatus#entered-in-error
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* class = $V3ACTCODES#AMB
* location.location = Reference(d1a03c42-7fdf-43da-9132-404a321c30b8)

Instance: a0a6a0f4-f58c-4cc8-b2af-cc636aaceb3e-v2
InstanceOf: klgateway-children-intervention
Usage: #inline
Title: "Lars behovsindsats, overvægt"
Description: "Lars behovsindsats, overvægt"
* id = "a0a6a0f4-f58c-4cc8-b2af-cc636aaceb3e"
* subject = Reference(4ced31e7-f852-4bad-a320-fe2a02640434)
* period.start = 2021-10-06
* intent = #plan
* status = #entered-in-error
* activity.detail.status = #unknown
* activity.detail.code.coding = $FBOE#b45c3d0e-7d19-4c75-bdf1-fe838b439b86 "Opsporing og vejledning ved overvægt"

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/examResult.fsh

Profile: KLGatewayChildrenExamResult
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-observation
Id: klgateway-children-exam-result
Title: "KLGatewayChildrenExamResult"
Description: "Observation used to express qualitative examination results to be reported to the children database"
//Constraints
* code.coding 1..1
* code.coding ^slicing.rules = #closed
* code.coding[LOINC] 0..0
* code.coding[NPU] 0..0
* code.coding[IEEE] 0..0
* code.coding[MedCom] 0..0
* code.coding[SKS] 0..0
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* subject 1..1
* subject only Reference(klgateway-children-citizen)
* subject ^type.aggregation = #bundled
* encounter only Reference(klgateway-children-encounter)
* encounter ^type.aggregation = #bundled
* effective[x] 1..1
* value[x] only CodeableConcept
* valueCodeableConcept.coding 1..1
* valueCodeableConcept.coding from ExamResults
//0..0 cardinalities
* identifier 0..0
* basedOn 0..0
* partOf 0..0
* focus 0..0
* issued 0..0
* performer 0..0
* interpretation 0..0
* note 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* hasMember 0..0
* derivedFrom 0..0
* category 0..0
* dataAbsentReason 0..0

//Short Danish descriptions
* code ^short = "[DK] undersøgelsesKode"
* value[x] ^short = "[DK] UndersøgelsesResultat"
* subject ^short = "[DK] Undersøgelsessubjekt"
* encounter ^short = "[DK] Undersøgelseskontakt"
* effectiveDateTime ^short = "[DK] Undersøgelsestid" //Behøver ikke både kontakt og tid.
* status ^short = "[DK] UndersøgelsesStatus"

Instance: LarsMentalStateObservation
InstanceOf: klgateway-children-exam-result
Usage: #example
Title: "LarsMentalState"
Description: "Lars' egenvurderede generelle trivsel ved indskolingsundersøgelsen"
* subject = Reference(Lars)
* encounter = Reference(SchoolStartEncounter)
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* valueCodeableConcept = $FBOE#6bea1014-8e30-40e7-9274-2b02376c0b1b "For det meste glad"
* status = #final
* effectiveDateTime = 2021-10-21T10:45:00.000Z

Instance: LarsIncontinenceObservation
InstanceOf: klgateway-children-exam-result
Usage: #example
Title: "LarsIncontinenceObservation"
Description: "Lars' unrininkontinens ved indskolingsundersøgelsen"
* subject = Reference(Lars)
* encounter = Reference(SchoolStartEncounter)
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* valueCodeableConcept = $FBOE#54f42eb5-18f9-4e82-98e0-1c83988189b9 "Naturininkontinens"
* status = #final
* effectiveDateTime = 2021-10-21T10:45:00.000Z

Instance: RikkeEyeContact2mth
InstanceOf: klgateway-children-exam-result
Usage: #example
Title: "RikkeEyeContact2mth"
Description: "Rikke har afvigende øjenkontakt ved 2 måneder"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* code.coding[SNOMEDCT] = $SCT#363788007 // "Clinical history/examination observable"
* valueCodeableConcept = $FBOE#bfd18100-d007-4465-95ce-5bf2ac8bc091 "Afvigende øjenkontakt"
* status = #final
* effectiveDateTime = 2020-07-07

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/extensions.fsh

Extension: BasedOnInterventionExtension
Title:     "basedOnInterventionExtension"
Description: "Extension for pointing to the intervention describing why this encounter is taking place (will be part of R5 and comming FHIR versions without needing the extension)"
* value[x] 1..1
* value[x] only Reference(klgateway-children-intervention)
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "Encounter"

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

// Extension: Technique
// Title: "Technique"
// Description: "Extension for pointing to the techniqe used to obtain the result of a questionaire"
// * value[x] 1..1
// * value[x] only CodeableConcept
// * value[x] from KLtechniquesCodes
// * ^context[0].type = http://hl7.org/fhir/extension-context-type#element
// * ^context[0].expression = "Observation"
// * ^context[1].type = http://hl7.org/fhir/extension-context-type#element
// * ^context[1].expression = "QuestionnaireResponse"

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/feeding.fsh

Profile: KLGatewayChildrenFeedingObservation
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-observation
Id: klgateway-children-feeding-observation
Title: "KLGatewayChildrenFeedingObservation"
Description: "Feeding observation profile used in the children database"
//Constraints
* code.coding 2..2
* code.coding ^slicing.rules = #closed
* code.coding contains
    FBOECode 1..1
* code.coding[FBOECode].system = $FBOE
* code.coding[LOINC] 0..0
* code.coding[NPU] 0..0
* code.coding[IEEE] 0..0
* code.coding[MedCom] 0..0
* code.coding[SKS] 0..0
* code.coding[SNOMEDCT] 1..1
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 //Ernæring
* code.coding[SNOMEDCT] = $SCT#169740003
* subject 1..1
* subject only Reference(klgateway-children-citizen)
* subject ^type.aggregation = #bundled
* encounter only Reference(klgateway-children-encounter)
* encounter ^type.aggregation = #bundled
* effective[x] 1..1
* effective[x] only Period or dateTime
* effectivePeriod.start 1..1
* effectivePeriod.end 0..1
* effectiveDateTime 0..1
* value[x] only CodeableConcept
* valueCodeableConcept from FeedingResultsChildren (required)
//0..0 cardinalities
* identifier 0..0
* basedOn 0..0
* partOf 0..0
* focus 0..0
* issued 0..0
* performer 0..0
* interpretation 0..0
* note 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* hasMember 0..0
* derivedFrom 0..0
* obeys obs-2
// * obeys feed-1


//Short Danish descriptions
* dataAbsentReason ^short = "[DK] madningsobservationMangler"
* code ^short = "[DK] madningsobservationsKode"
* value[x] ^short = "[DK] madningsobservationsResultat"
* subject ^short = "[DK] madningsobservationSubjekt"
* encounter ^short = "[DK] madningsobservationKontakt"
* effective[x] ^short = "[DK] madningsobservationTid" 
* status ^short = "[DK] madningsobservationStatus"


// Invariant: feed-1
// Description: "If code is'breastfeeding stopped', effective should be given as a dateTime"
// Severity: #error
// Expression: "value.coding.code = '169746009' implies (effective.start.empty())"

// Invariant: feed-2
// Description: "If code is 'Exclusively breastfed' or 'Breastfeeding with supplement' effective[x] should be given as a period"
// Severity: #error
// Expression: "((value.coding.code = '169743001') or (value.coding.code = '1145307003')) implies (effective.start.exists())"

// https://hl7.github.io/fhirpath.js/


Instance: RikkeFeedingObservationPeriod
InstanceOf: klgateway-children-feeding-observation
Usage: #example
Title: "RikkeFeedingObservationPeriod"
Description: "Rikkes periode for fuldamning"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
* code.coding[SNOMEDCT] = $SCT#169740003 "Infant feeding method"
* valueCodeableConcept = $FBOE#77a008dd-21cc-452f-a1ee-ac8d025b7817 "Fuldamning, inklusiv modermælk på flaske"
* status = #final
* effectivePeriod.start = 2020-05-05T00:00:00.000Z
* effectivePeriod.end = 2020-06-28T00:00:00.000Z

Instance: RikkeFeedingObservationStatus
InstanceOf: klgateway-children-feeding-observation
Usage: #example
Title: "RikkeFeedingObservationStatus"
Description: "Rikkes status på madning ved 2 mrd"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
* code.coding[SNOMEDCT] = $SCT#169740003 "Infant feeding method"
* valueCodeableConcept = $FBOE#3edc905c-2830-442a-98cc-463cc3701dd1 "Ammes som supplement til anden kost"
* status = #final
* effectiveDateTime = 2020-07-07T00:00:00.000Z

Instance: RikkeFeedingObservationNewPeriod
InstanceOf: klgateway-children-feeding-observation
Usage: #example
Title: "RikkeFeedingObservationNewPeriod"
Description: "Rikkes periode-start for ammes som supplement til anden kost"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
* code.coding[SNOMEDCT] = $SCT#169740003 "Infant feeding method"
* valueCodeableConcept = $FBOE#3edc905c-2830-442a-98cc-463cc3701dd1 "Ammes som supplement til anden kost"
* status = #final
* effectivePeriod.start = 2020-06-28T00:00:00.000Z

Instance: RikkeFeedingObservationStatus10mth
InstanceOf: klgateway-children-feeding-observation
Usage: #example
Title: "RikkeFeedingObservationStatus10mth"
Description: "Rikkes status, ved 10 måneder, udelukkende status fordi perioden er startet tidligere, og ikke er afsluttet"
* subject = Reference(Rikke)
* encounter = Reference(10mthEncounter)
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 "Ernæring"
* code.coding[SNOMEDCT] = $SCT#169740003 "Infant feeding method"
* valueCodeableConcept = $FBOE#dfab6d07-b1b6-4210-ac8a-b8a0d095c8ab "Modermælkserstatning og/eller overgangskost"
* status = #final
* effectiveDateTime = 2021-02-02T00:00:00.000Z

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/headcircumference.fsh

Profile: KLGatewayChildrenHeadCircum
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-basic-observation
Id: klgateway-children-headcircum
Title: "KLGatewayChildrenHeadCircumference"
Description: "Head circumference profile used in Danish Municipalities, derived from HL7 Denmark standard profile"
//Constraints
* code.coding[LOINC] = $LOINC#9843-4 //"Head circumference"
* code.coding[SNOMEDCT] = $SCT#363812007 //"Head circumference"
* valueQuantity.code = #cm
* subject 1..1
* subject only Reference(klgateway-children-citizen)
* subject ^type.aggregation = #bundled
* encounter only Reference(klgateway-children-encounter)
* encounter ^type.aggregation = #bundled
* effective[x] 1..1
* effective[x] only dateTime
//0..0 cardinalities
* identifier 0..0
* basedOn 0..0
* partOf 0..0
* focus 0..0
* issued 0..0
* performer 0..0
* interpretation 0..0
* note 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* hasMember 0..0
* derivedFrom 0..0
* obeys obs-1
* obeys obs-2

//Short Danish descriptions
* category ^short = "[DK] hovedomkredsKategori"
* dataAbsentReason ^short = "[DK] hovedomkredsMangler"
* code ^short = "[DK] hovedomkredsKode"
* valueQuantity.value ^short = "[DK] hovedomkredsResultat"
* valueQuantity.code ^short = "[DK] hovedomkredsEnhed"
* valueQuantity.system ^short = "[DK] hovedomkredsEnhed"
* subject ^short = "[DK] hovedomkredsSubjekt"
* encounter ^short = "[DK] hovedomkredsKontakt"
* effectiveDateTime ^short = "[DK] hovedomkredsTid"
* status ^short = "[DK] hovedomkredsStatus"

Instance: RikkeHeadCircum
InstanceOf: klgateway-children-headcircum
Usage: #example
Title: "RikkeHeadCircum"
Description: "Rikkes hovedomkreds"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#363812007 "Head circumference"
* code.coding[LOINC] = $LOINC#9843-4 "Head Occipital-frontal circumference"
* valueQuantity.value = 38.3
* valueQuantity.unit = "cm"
* valueQuantity.system = $UCUM
* valueQuantity.code = #cm
* status = #final
* effectiveDateTime = 2020-07-07T12:45:00.000Z

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/height.fsh

Profile: KLGatewayChildrenBodyHeight
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-basic-observation
Id: klgateway-children-bodyheight
Title: "KLGatewayChildrenBodyHeight"
Description: "Body height profile used in Danish Municipalities, derived from HL7 DK standard profile"
//Constraints
* code.coding[LOINC] = $LOINC#8302-2 //Body height
* code.coding[SNOMEDCT] from BodyheightSCTobservablesChildren (required)
* value[x] only Quantity
* valueQuantity.code = #cm
* subject 1..1
* subject only Reference(klgateway-children-citizen)
* subject ^type.aggregation = #bundled
* encounter only Reference(klgateway-children-encounter)
* encounter ^type.aggregation = #bundled
* effective[x] 1..1
* effective[x] only dateTime
//0..0 cardinalities
* identifier 0..0
* basedOn 0..0
* partOf 0..0
* focus 0..0
* issued 0..0
* performer 0..0
* interpretation 0..0
* note 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* hasMember 0..0
* derivedFrom 0..0

//Short Danish descriptions
* category ^short = "[DK] højdeKategori"
* dataAbsentReason ^short = "[DK] højdeMangler"
* code ^short = "[DK] højdeKode"
* valueQuantity.value ^short = "[DK] højdeResultat"
* valueQuantity.code ^short = "[DK] højdeEnhed"
* valueQuantity.system ^short = "[DK] højdeEnhed"
* subject ^short = "[DK] højdeSubjekt"
* encounter ^short = "[DK] højdeKontakt"
* effectiveDateTime ^short = "[DK] højdeTid"
* status ^short = "[DK] højdeStatus"
* obeys obs-1
* obeys obs-2



Invariant: obs-1
Description: "If value is given as a decimal point number with more than one precision, an error is returned"
Severity: #error
Expression: "value.ofType(Quantity).value.toString().matches('^[0-9]*\\u002e?[0-9]$')"
//Expression: "value.ofType(Quantity).value.toString().matches('^[0-9]*\u002e?[0-9]$')"



Instance: RikkeBodyHeight
InstanceOf: klgateway-children-bodyheight
Usage: #example
Title: "RikkeBodyHeight"
Description: "Rikkes kropslængde"
* subject = Reference(Rikke)
* encounter = Reference(2nd1mthEncounter)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#1153637007
* code.coding[LOINC] = $LOINC#8302-2
* valueQuantity.value = 54.4
* valueQuantity.unit = "cm"
* valueQuantity.system = $UCUM
* valueQuantity.code = #cm
* status = #final
* effectiveDateTime = 2020-06-01

Instance: RikkeBodyHeight2mth
InstanceOf: klgateway-children-bodyheight
Usage: #example
Title: "RikkeBodyHeight2mth"
Description: "Rikkes kropslængde"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#1153637007
* code.coding[LOINC] = $LOINC#8302-2
* valueQuantity.value = 58
* valueQuantity.unit = "cm"
* valueQuantity.system = $UCUM
* valueQuantity.code = #cm
* status = #final
* effectiveDateTime = 2020-07-07

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/incrementalDelivery.fsh

Profile: KLGatewayChildrenIncrementalDelivery
Parent: Bundle
Id: klgateway-children-incremental-delivery
Title: "CareIncrementalDelivery"
Description: "Delivery for all delivery reports made since last update (unordered)."
* identifier ..0
* type = #collection
* timestamp 1..1
* total ..0
* link ..0
* entry.resource 1..1
* entry.resource only
    KLGatewayChildrenDeliveryReport
* entry.resource ^short = "Content constrained to known delivery reports"
* entry.search ..0
* entry.request ..0
* entry.response ..0
* signature ..0

Instance: TestIncrementalDelivery
InstanceOf: KLGatewayChildrenIncrementalDelivery
Description: "Example of an incremental delivery with one delivery report"
* type = #collection
* timestamp = 2020-07-08T23:45:00.000Z
* entry[+].fullUrl = "https://test.fhir.dk/Bundle/RikkeDeliveryReport2months"
* entry[=].resource = RikkeDeliveryReport2months

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/indicator.fsh

Profile: KLGatewayChildrenIndicator
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-observation
Id: klgateway-children-indicator
Title: "KLGatewayChildrenIndicator"
Description: "Abstract indicator profile, used in the children database"
//Constraints
* code.coding 1..1
* code.coding ^slicing.rules = #closed
* code.coding contains
    FBOECode 1..1 // 1..1
* code.coding[LOINC] 0..0
* code.coding[NPU] 0..0
* code.coding[IEEE] 0..0
* code.coding[MedCom] 0..0
* code.coding[SKS] 0..0
* code.coding[SNOMEDCT] 0..0
* code.coding[FBOECode] from IndicatorCodesChildren (required)
* code.coding[FBOECode].system = $FBOE
* ^abstract = true
* subject 1..1
* subject only Reference(klgateway-children-citizen)
* subject ^type.aggregation = #bundled
* encounter only Reference(klgateway-children-encounter)
* encounter ^type.aggregation = #bundled
* effective[x] 1..1
* value[x] only CodeableConcept
* valueCodeableConcept.coding 1..1
//0..0 cardinalities
* identifier 0..0
* basedOn 0..0
* partOf 0..0
* focus 0..0
* issued 0..0
* performer 0..0
* interpretation 0..0
* note 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* hasMember 0..0
* derivedFrom 0..0
* category 0..0
* effectiveInstant 0..0
* effectivePeriod 0..0
* effectiveTiming 0..0
* obeys obs-2

//Short Danish descriptions
* dataAbsentReason ^short = "[DK] IndikatorMangler"
* code ^short = "[DK] IndikatorKode"
* value[x] ^short = "[DK] IndikatorResultat"
* subject ^short = "[DK] Indikatorsubjekt"
* encounter ^short = "[DK] Indikatorkontakt"
* effectiveDateTime ^short = "[DK] Indikatortid" //Behøver ikke både kontakt og tid.
* status ^short = "[DK] IndikatorStatus"


Invariant: obs-2
Description: "If the value is not given, then explain why using dataAbsentReason"
Severity: #error
Expression: "value.empty() implies dataAbsentReason.exists()"

//udkommenteret fordi slicingen ikke virker med FBOE, kommer senere når resten af koderne også er i FBOE
//Profile: KLGatewayChildrenIndicatorParentsMentalIndicator
//Parent: KLGatewayChildrenIndicator
//Id: klgateway-children-parent-mental
//itle: "KLGatewayChildrenIndicatorParentsMental"
//Description: "Parents mental state model, that inherits from Indicator"
//* code.coding[FBOECode] = $FBOE#2c39af9f-8e45-4c88-962f-e7a9e2cd31b6
//* code.coding[SNOMEDCT] = $SCT#285854004 //|Emotion (observable entity)|
//* valueCodeableConcept.coding[FBOECode] from ParentsMentalCodes (required)

Profile: KLGatewayChildrenIndicatorSocialInteraction
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-social-interaction
Title: "KLGatewayChildrenIndicatorInteraction"
Description: "Childrens social interaction, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#68605f88-49fb-44b9-b327-86947af6aa93 //Social kontakt
* valueCodeableConcept.coding from SocialInteractionCodes (required)

Instance: RikkeSocialInteraction
InstanceOf: klgateway-children-social-interaction
Usage: #example
Title: "RikkeSocialInteraction"
Description: "Rikkes sociale kontakt ved 2mrd"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* code.coding[FBOECode] = $FBOE#68605f88-49fb-44b9-b327-86947af6aa93 "Social kontakt"
* valueCodeableConcept = $FBOE#e1c1674c-9384-4d95-999f-763f3868f444 "Udfordring i social kontakt"
* status = #final
* effectiveDateTime = 2020-07-07T00:00:00.000Z

Profile: KLGatewayChildrenIndicatorParentRelationship
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-parent-relationship
Title: "KLGatewayChildrenIndicatorParentRelationship"
Description: "Parent-child relationship, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#763c6f21-5467-4713-82fb-716c9d0a1fdf //Forældre-barn-relation
* valueCodeableConcept.coding from ChildrenParentRelationshipCodes (required)

Instance: RikkeChildrenParentRelationship
InstanceOf: klgateway-children-parent-relationship
Usage: #example
Title: "RikkeChildrenParentRelationship"
Description: "Rikkes relation til forældre ved 2mrd"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* code.coding[FBOECode] = $FBOE#763c6f21-5467-4713-82fb-716c9d0a1fdf "Forældre-barn-relation"
* valueCodeableConcept = $FBOE#7a107df6-8fb8-4744-8413-be10b4c5c1d9 "Velfungerende forældre-barn-relation"
* status = #final
* effectiveDateTime = 2020-07-07T00:00:00.000Z

Profile: KLGatewayChildrenIndicatorParentSocialStatus
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-parent-social-status
Title: "KLGatewayChildrenIndicatorParentSocialStatus"
Description: "parent's social status, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#58997614-ba43-4534-90bd-10c7e76802f4 //	Forælders sårbarhed
* valueCodeableConcept.coding from ParentSocialStatusCodes (required)

Profile: KLGatewayChildrenIndicatorParentMentalStatus
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-parent-mental-status
Title: "KLGatewayChildrenIndicatorParentMentalStatus"
Description: "Parent's mental status, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#2c39af9f-8e45-4c88-962f-e7a9e2cd31b6 // Forælders psykiske tilstand
* valueCodeableConcept.coding from ParentsMentalCodes (required)

Instance: KirstenParentMentalStatus
InstanceOf: klgateway-children-parent-mental-status
Usage: #example
Title: "KirstenParentMentalStatus"
Description: "Kirstens psykiske tilstand ved Rikkes 2mrd"
* subject = Reference(Kirsten)
* code.coding[FBOECode] = $FBOE#2c39af9f-8e45-4c88-962f-e7a9e2cd31b6 "Forælders psykiske tilstand"
* valueCodeableConcept = $FBOE#b8220216-e185-451b-8d2a-67cdf73c42c3 "Let psykisk reaktion"
* status = #final
* effectiveDateTime = 2020-07-07T00:00:00.000Z

Profile: KLGatewayChildrenIndicatorSocialSupportNetwork
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-social-support-network
Title: "KLGatewayChildrenIndicatorSocialSupportNetwork"
Description: "Families social support network, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#7e7fab2f-278a-4b14-9bc9-efc36fffcba5 //Netværk
* valueCodeableConcept.coding from SocialSupportNetworkCodes (required)

Profile: KLGatewayChildrenIndicatorCommunication
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-communication
Title: "KLGatewayChildrenIndicatorCommunication"
Description: "Childrens communication, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#653c2b0b-bb64-4906-888b-aea6fef3c3f8 //Kommunikation
* valueCodeableConcept.coding from CommunicationCodes (required)

Instance: RikkeCommunication2mth
InstanceOf: klgateway-children-communication
Usage: #example
Title: "RikkeCommunication2mth"
Description: "Rikkes kommunikation ved 2mrd"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* code.coding[FBOECode] = $FBOE#653c2b0b-bb64-4906-888b-aea6fef3c3f8 "Kommunikation"
* valueCodeableConcept = $FBOE#042d522d-0abe-46eb-a958-6e235b5d5408 "Kommunikerer alderssvarende" 
* status = #final
* effectiveDateTime = 2020-07-07T00:00:00.000Z

Profile: KLGatewayChildrenIndicatorSleep
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-sleep
Title: "KLGatewayChildrenIndicatorSleep"
Description: "Childrens sleep observation, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#73f981f8-455a-4158-b435-7c6d83ab84da //	Søvn
* valueCodeableConcept.coding from SleepCodes (required)

Instance: RikkeSleep2mth
InstanceOf: klgateway-children-sleep
Usage: #example
Title: "RikkeSleep2mth"
Description: "Rikkes søvn ved 2mrd"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* code.coding[FBOECode] = $FBOE#73f981f8-455a-4158-b435-7c6d83ab84da "Søvn"
* valueCodeableConcept = $FBOE#b07eec60-941d-484d-8c2a-aeaa2ba798bf "Søvn med normale variationer" 
* status = #final
* effectiveDateTime = 2020-07-07T00:00:00.000Z

Profile: KLGatewayChildrenIndicatorMotorFunction
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-motor-function
Title: "KLGatewayChildrenIndicatorMotorFunction"
Description: "Childrens motor function, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#e04f2ca1-888a-4671-a97a-371b525cd2a3 //	Motorik
* valueCodeableConcept.coding from MotorFunctionCodes (required)

Instance: RikkeMotorFunction2mth
InstanceOf: klgateway-children-motor-function
Usage: #example
Title: "RikkeMotorFunction2mth"
Description: "Rikkes motorik ved 2mrd"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* code.coding[FBOECode] = $FBOE#e04f2ca1-888a-4671-a97a-371b525cd2a3 "Motorik"
* valueCodeableConcept = $FBOE#936a0163-08eb-4fdb-bf0c-bcf5bc7cb3f6 "Få tegn på udfordret motorik"
* status = #final
* effectiveDateTime = 2020-07-07T00:00:00.000Z

Profile: KLGatewayChildrenIndicatorNutrition
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-nutrition
Title: "KLGatewayChildrenIndicatorNutrition"
Description: "Childrens nutrition, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#e61e4dab-54bb-4bf4-9b76-8d991cf4de08 //	Ernæring
* valueCodeableConcept.coding from NutritionCodes (required)

Profile: KLGatewayChildrenIndicatorPhysicalActivity
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-physical-activity
Title: "KLGatewayChildrenIndicatorPhysicalActivity"
Description: "Childrens physical activity, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#b331fe02-a781-4abd-b6db-9331d6a69b15 //	Fysisk aktivitet
* valueCodeableConcept.coding from PhysicalActivityCodes (required)

Profile: KLGatewayChildrenIndicatorHearing
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-hearing
Title: "KLGatewayChildrenIndicatorHearing"
Description: "Childrens hearing, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#a22c4b53-b622-4394-ba13-910a7b0d7b0d //	Hørelse
* valueCodeableConcept.coding from HearingCodes (required)

Profile: KLGatewayChildrenIndicatorSight
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-sight
Title: "KLGatewayChildrenIndicatorSight"
Description: "Childrens sight, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#01fddd46-ed7c-423d-b191-ffdd977dd61e //"Syn"
* valueCodeableConcept.coding from SightCodes (required)

Profile: KLGatewayChildrenIndicatorPassiveSmoking
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-passive-smoking
Title: "KLGatewayChildrenIndicatorPassiveSmoking"
Description: "Children's passive smoking, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#28972d4b-fea3-42ec-b2a5-e2a26f79b14d "Passiv rygning"
* valueCodeableConcept.coding from PassiveSmokingCodes (required)

Profile: KLGatewayChildrenIndicatorNicotine
Parent: KLGatewayChildrenIndicator
Id: klgateway-children-nicotine
Title: "KLGatewayChildrenIndicatorNicotine"
Description: "Children's use of nicotine, that inherits from Indicator"
* code.coding[FBOECode] = $FBOE#76891f7b-cf49-4cb2-88d6-728a509eb75d "Brug af nikotin"
* valueCodeableConcept.coding from NicotineCodes (required)

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/intervention.fsh

Profile: KLGatewayChildrenIntervention
Parent: CarePlan
Id: klgateway-children-intervention
Title: "KLGatewayChildrenIntervention"
Description: "Profile representing interventions in the children database"
//Requirements
* status ^definition = "Shall be either unknown, entered-in-error, or the status of the intervention at the time of reporting"
* intent = #plan
* activity.detail.status ^definition = "Shall be either unknown, or cancelled, or the activity status of the intervention at the time of reporting"
* basedOn 0..0
* subject only Reference(klgateway-children-citizen) //borger
* subject ^type.aggregation = #bundled
* period 1..1
* period.start 1..1 //Bevillingsdato
//period.end er mulig men ikke obligatorisk
* activity 1..1
* activity.reference 0..0
* activity.detail 1..
* activity.detail.code 1..1 //Indsatskoder niveau 2 og 3
* activity.detail.code.coding 1..1 SU
* activity.detail.code.text 0..0
* activity.detail.code.coding.system = $FBOE //
* activity.detail.code.coding from KLHealthNurseInterventions
* activity.detail.reasonCode ..*
* activity.detail.reasonCode.coding from KLHealthNurseConditions
* activity.detail.scheduled[x] 0..0
* activity.detail.reasonReference 0..0

// relation mellem tilstand og indsats
//* activity.detail.reasonReference only Reference(klgateway-children-condition)
//* activity.detail.reasonReference ^definition = "Reason for this intervention. Must contain all conditions known to be addressed by this intervention"
//* activity.detail.reasonReference ^type.aggregation = #bundled

//0..0 kardinaliteter
* identifier ..0
* instantiatesCanonical ..0
* instantiatesUri ..0
* replaces ..0
* partOf ..0
* category ..0
* title ..0
* description ..0
* encounter ..0
* created ..0
* author ..0
* contributor ..0
* careTeam 0..0
* addresses ..0
* supportingInfo ..0
* goal ..0
* activity.outcomeCodeableConcept ..0
* activity.progress ..0
* activity.detail.kind ..0
* activity.detail.instantiatesCanonical ..0
* activity.detail.instantiatesUri ..0
* activity.detail.goal ..0
* activity.detail.doNotPerform ..0
* activity.detail.statusReason 0..0
* activity.detail.location ..0
* activity.detail.product[x] ..0
* activity.detail.dailyAmount ..0
* activity.detail.quantity ..0
* activity.detail.description ..0
* activity.outcomeReference 0..0
* note ..0

//Danish descriptions
* activity.detail.code.coding ^short = "[DK] indsatsskode"
* period.start ^short = "[DK] indsatsbevillingstid"
* period.end ^short = "[DK] indsatsafslutningstid"
* status ^short = "[DK] indsatsstatus"
* intent ^short = "[DK] indsatshensigt"
* subject ^short = "[DK] indsatssubjekt"
* activity.detail.reasonCode.coding ^short = "[DK] indsatsbegrundelse"
* activity.detail.status ^short = "[DK] indsatsAktivitetsstatus"

Instance: RikkeInterventionSocialContact
InstanceOf: klgateway-children-intervention
Usage: #example
Title: "RikkeInterventionSocialContact"
Description: "Rikkes behovsindsats vedr. social kontakt"
* subject = Reference(Rikke)
* period.start = 2021-03-09T10:15:00.000Z
* intent = #plan
* status = #active
* activity.detail.status = #unknown
* activity.detail.code.coding = $FBOE#b3de92ea-ac5e-4f87-809e-a9e40b59cc34 "Vejledning i kontakt, samspil og barnets behov"
* activity.detail.reasonCode.coding = $FBOE#d3fc57b7-3a5d-4f69-bcb0-bdb8363650eb "Udfordring i forældre-barn samspil"


---

File: repos/hl7dk_SLASH_kl-children/input/fsh/location.fsh

Profile: KLGatewayChildrenLocation
Parent: Location
Id: klgateway-children-location
Title: "KLGatewayChildrenLocation"
Description: "Profile representing a location, in this implementation guide only used to represent a school"

* identifier 1..1
* identifier.system 1..1
* identifier.system = "https://viden.stil.dk/display/OFFINSTREG/Institutionsregisteret" (exactly)
* identifier.value 1..1
* identifier.type 0..0
* identifier.use 0..0
* identifier.assigner 0..0
* identifier.period 0..0
* status 0..1
* operationalStatus 0..0
* name 0..0
* alias 0..0
* description 0..0
* mode 0..0
* type 1..1
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#SCHOOL
* telecom 0..0
* address 0..0
* physicalType 0..0
* position 0..0
* managingOrganization 0..0
* partOf 0..0
* hoursOfOperation 0..0
* availabilityExceptions 0..0
* endpoint 0..0

//Danish descriptions
* identifier ^short = "[DK] Lokationsid"
* type ^short = "[DK] Lokationstype"
* status ^short = "[DK] Lokationsstatus"

Instance: SchoolHolbaek
InstanceOf: klgateway-children-location
Usage: #example
Title: "SchoolHolbaek"
Description: "Skole i Holbæk"
* identifier.system = "https://viden.stil.dk/display/OFFINSTREG/Institutionsregisteret"
* identifier.value = "280295"
* type = http://terminology.hl7.org/CodeSystem/v3-RoleCode#SCHOOL

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/puf.fsh

Instance: klgateway-children-puf
InstanceOf: KLGatewayChildrenQuestionnaire
Usage: #definition
Title: "KLGatewayChildrenPUF"
* status = #active
* publisher = "Kommunernes Landsforening"
* description = "Copenhagen Infant Mental Health Screening/PSYKISK UDVIKLING OG FUNKTION (PUF)"
* name = "KLGatewayChildrenPUF"
//* code = $SCT#450320001 //|Edinburgh postnatal depression scale score|
* copyright = "Users may only use PUF if they first complete appropriate training as offered by University of Southern Denmark https://www.sdu.dk/da/sif/forskning/projekter/puf-programmet. The copyright should be respected. PUF was first described in: Ammitzbøll, J., Holstein, B. E., Wilms, L., Andersen, A., & Skovgaard, A. M. (2016). A new measure for infant mental health screening: development and initial validation. BMC pediatrics, 16, 1-10."
* item[0].type = #boolean
* item[0].text = "Fast søvnrytme"
* item[0].linkId = "1sleepPattern"
* item[0].repeats = false

* item[+].type = #boolean
* item[=].text = "Indsovning"
* item[=].linkId = "2fallingAsleep"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Sammenhængende søvn"
* item[=].linkId = "3cohesiveSleep"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Appetitregulering"
* item[=].linkId = "4appetite"

* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Småtspisende"
* item[=].linkId = "5pickyEater"

* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Vægrer sig ved at spise"
* item[=].linkId = "6rejectsFood"

* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Kaster op uden i øvrigt at være syg"
* item[=].linkId = "7throwsUp"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Gennemgående glad og tilfreds"
* item[=].linkId = "8happy"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Ofte irritabel, pirrelig, utilfreds"
* item[=].linkId = "9irritable"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Græder meget"
* item[=].linkId = "10cry"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Følelsesmæssig nedtonet"
* item[=].linkId = "11feelingLow"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Nysgerrig, udforskende"
* item[=].linkId = "12curious"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Kan fokusere sin opmærksomhed"
* item[=].linkId = "13attention"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Fastholde koncentration"
* item[=].linkId = "14concentration"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Afledes let"
* item[=].linkId = "15distracted"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Motorisk udvikling"
* item[=].linkId = "16motorFunction"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Generelt nedsat aktivitetsniveau"
* item[=].linkId = "17lowActivity"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Generelt øget aktivitetsniveau"
* item[=].linkId = "18highActivity"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Impulsivitet"
* item[=].linkId = "19Impulsive"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Øjenkontakt"
* item[=].linkId = "20eyeContact"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Kontaktsmil"
* item[=].linkId = "21contactSmiles"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Gensidig kommunikation"
* item[=].linkId = "22communication"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Fælles opmærksomhed"
* item[=].linkId = "23commonAttention"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Kropskontakt"
* item[=].linkId = "24bodyContact"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Selektivitet"
* item[=].linkId = "25selective"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Sprogforståelse"
* item[=].linkId = "26understand"
* item[=].repeats = false

* item[+].type = #boolean
* item[=].text = "Sprogligt udtryk"
* item[=].linkId = "27language"
* item[=].repeats = false

* item[+].type = #integer
* item[=].text = "Samlet score"
* item[=].linkId = "score"
* item[=].repeats = false

Instance: PUFAnswerRikke
InstanceOf: KLGatewayChildrenQuestionnaireResponse
Usage: #example
Title: "PUFAnswerRikke"
Description: "PUF besvarelse Rikke"
* questionnaire = "http://fhir.kl.dk/children/Questionnaire/klgateway-children-puf"
* status = #completed
* subject = Reference(Rikke)
* extension[findingInformer].valueCodeableConcept = $KLCommonCodes#329774f9-7700-47cf-9c00-63765d9e8078 "Medarbejder og pårørende alene"
* authored = 2021-10-01

* item[0].linkId = "1sleepPattern"
* item[=].answer.valueBoolean = true

* item[+].linkId = "2fallingAsleep"
* item[=].answer.valueBoolean = true

* item[+].linkId = "3cohesiveSleep"
* item[=].answer.valueBoolean = true

* item[+].linkId = "4appetite"
* item[=].answer.valueBoolean = true

* item[+].linkId = "5pickyEater"
* item[=].answer.valueBoolean = false

* item[+].linkId = "6rejectsFood"
* item[=].answer.valueBoolean = false

* item[+].linkId = "7throwsUp"
* item[=].answer.valueBoolean = false

* item[+].linkId = "8happy"
* item[=].answer.valueBoolean = true

* item[+].linkId = "9irritable"
* item[=].answer.valueBoolean = false

* item[+].linkId = "10cry"
* item[=].answer.valueBoolean = false

* item[+].linkId = "11feelingLow"
* item[=].answer.valueBoolean = false

* item[+].linkId = "12curious"
* item[=].answer.valueBoolean = true

* item[+].linkId = "13attention"
* item[=].answer.valueBoolean = true

* item[+].linkId = "14concentration"
* item[=].answer.valueBoolean = true

* item[+].linkId = "15distracted"
* item[=].answer.valueBoolean = false

* item[+].linkId = "16motorFunction"
* item[=].answer.valueBoolean = true

* item[+].linkId = "17lowActivity"
* item[=].answer.valueBoolean = false

* item[+].linkId = "18highActivity"
* item[=].answer.valueBoolean = false

* item[+].linkId = "19Impulsive"
* item[=].answer.valueBoolean = false

* item[+].linkId = "20eyeContact"
* item[=].answer.valueBoolean = true

* item[+].linkId = "21contactSmiles"
* item[=].answer.valueBoolean = true

* item[+].linkId = "22communication"
* item[=].answer.valueBoolean = true

* item[+].linkId = "23commonAttention"
* item[=].answer.valueBoolean = true

* item[+].linkId = "24bodyContact"
* item[=].answer.valueBoolean = true

* item[+].linkId = "25selective"
* item[=].answer.valueBoolean = true

* item[+].linkId = "26understand"
* item[=].answer.valueBoolean = true

* item[+].linkId = "27language"
* item[=].answer.valueBoolean = true

* item[+].linkId = "score"
* item[=].answer.valueInteger = 0


---

File: repos/hl7dk_SLASH_kl-children/input/fsh/questionnaire.fsh

Profile: KLGatewayChildrenQuestionnaire
Parent: Questionnaire
Title: "KLGatewayChildrenQuestionnaire"
Description: "Questionnaire profile, for all Questionaires in kl-children"
* item.extension contains $ExtMinValue named minValue 0..1
* item.extension contains $ExtMaxValue named maxValue 0..1 

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/questionnaireResponse.fsh

Profile: KLGatewayChildrenQuestionnaireResponse
Id: klgateway-children-questionnaire-response
Parent: QuestionnaireResponse
Title: "KLGatewayChildrenQuestionnaireResponse"
Description: "Questionnaire response profile, for all questionaires in kl-children"
* extension contains 
    FindingInformer named findingInformer 0..1 SU // and  Technique named techniqe 0..1 SU

* questionnaire 1..1 //write invariant that ensures that only the allowed questionnaires are included
//* questionnaire only $epds
* item 0..36
* item.answer 1..1
* item.answer.value[x] 1..1
* item.answer.value[x] only integer or boolean or string
* item.answer.valueString obeys questionnaire-response-string-length
* item.answer.valueInteger 0..1
* item.answer.valueBoolean 0..1
* subject 1..1
* subject only Reference(klgateway-children-citizen) //borger
* subject ^type.aggregation = #bundled
* authored 1..1

// 0..0
* identifier 0..0
* partOf 0..0
* basedOn 0..0
* encounter 0..0
* author 0..0
* source 0..0
* item.definition 0..0
* item.text 0..0
* item.item 0..0
* item.answer.item 0..0

* extension[FindingInformer].valueCodeableConcept ^short = "[DK] SpørgeskemaSvarKilde"
* questionnaire ^short = "[DK] SpørgeskemaSvarSpørgeskemaDefinition"
* item.linkId ^short = "[DK] SpørgeskemaSvarPunktId"
* item.answer.value[x] ^short = "[DK] SpørgeskemaSvarPunktSvar"
* subject ^short = "[DK] SpørgeskemaSvarSubjekt"
* authored ^short = "[DK] SpørgeskemaSvarTid"

Invariant: questionnaire-response-string-length
Description: "Answer given as string must be a minimum of 1 character, and maximum of 30 characters long"
Severity: #error
Expression: "matches('^.{1,30}$')"



---

File: repos/hl7dk_SLASH_kl-children/input/fsh/relatedParent.fsh

Profile: KLGatewayChildrenRelatedParent
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-related-person
Id: klgateway-children-related-parent
Title: "KLGatewayChildrenRelatedParent"
Description: "Profile for describing the relationship between the child, and the parents who are also relevant for the journal"
* patient only Reference(klgateway-children-citizen)
* patient ^type.aggregation = #bundled
* relationship from ParentTypes (required)
* identifier[cpr] 0..0
* identifier[x-ecpr] 0..0
* identifier[d-ecpr] 0..0
* identifier 0..0
* active 0..1
* name[official] 0..0
* name 0..0
* telecom 0..0
* gender 0..0
* birthDate 0..0
* address 0..0
* photo 0..0
* period 0..0
* communication 0..0

* patient ^short = "[DK] harBarn"
* relationship ^short = "[DK] type"
* active ^short = "[DK] harAktivJournal" 

Instance: RikkesParent
InstanceOf: klgateway-children-related-parent
Description: "RikkesParent"
Usage: #example
* patient = Reference(Rikke)
* relationship = $RoleCode#PRN

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/sdq11-17.fsh

Instance: klgateway-children-sdq11-17
InstanceOf: KLGatewayChildrenQuestionnaire
Usage: #definition
Title: "KLGatewayChildrenSDQ1117"
* status = #active
* publisher = "Kommunernes Landsforening"
* description = "Strength and Difficulties Questionnaire (SDQ), including impact supplement for self-completion by 11-17 year olds (SDQ S11-17)"
* name = "KLGatewayChildrenSDQ1117"
* code = $SCT#717639006 "Strengths and Difficulties Questionnaire self-rated for 11-17 year old score"
* copyright = "Please note that Strengths and Difficulties Questionnaires, whether in English or in translation, are copyright documents that are not in the public domain. As such, they may not be modified in any way (e.g. changing the wording of questions, adding questions or administering only subsets of questions). This is to ensure that the SDQ is fully comparable across studies and settings. Similarly, to ensure high quality and consistency, unauthorized translations are not permitted. Paper versions may be downloaded and subsequently photocopied without charge by individuals or non-profit organizations provided they are not making any charge to families.
Users are not permitted to create or distribute electronic versions for any purpose without prior authorization from youthinmind. If you are interested in making translations or creating electronic versions you MUST first contact support@youthinmind.com."

* item[0].type = #choice
* item[=].text = "Jeg prøver at være venlig mod andre. Jeg tænker over hvordan andre har det"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "1friendly"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg er rastløs, har svært ved at holde mig i ro i længere tid"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "2restless"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg har tit hovedpine, ondt i maven eller kvalme"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "3headache"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg deler gerne med andre (slik, spil og lign.)"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "4sharing"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg kan blive meget vred og bliver tit hidsig"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "5angry"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg holder mig mest for mig selv. Jeg gør mange ting alene eller passer mig selv"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "6keepingToOneSelf"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg gør som regel det, jeg får besked på"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "7followInstructions"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg er tit bekymret"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "8oftenWorried"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg prøver at hjælpe hvis nogen slår sig, er kede af det eller har det dårligt"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "9helpfull"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg har altid uro i kroppen. Jeg har svært ved at sidde stille og holde mig i ro (arme, ben,
fingre, hoved eller krop)"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "10restlessBody"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg har mindst én god ven"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "11friend"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg slås meget. Jeg kan få andre til at gøre, som jeg vil"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "12fighting"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg er tit ked af det, trist eller lige ved at græde"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "13sad"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Andre på min egen alder synes for det meste godt om mig"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "14liked"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg bliver nemt distraheret. Jeg har svært ved at koncentrere mig"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "15distracted"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg bliver utryg i nye situationer. Jeg bliver let usikker på mig selv"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "16uneasy"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg er god mod yngre børn"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "17treatWell"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg bliver tit beskyldt for at lyve eller snyde"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "18lying"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg bliver mobbet eller drillet af andre børn eller unge"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "19bullied"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg spørger tit om jeg kan hjælpe til, hvis nogen har brug for det (forældre, lærere, børn)"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "20offersHelp"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg tænker mig om, før jeg gør noget"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "21consideration"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg tager ting som ikke er mine (derhjemme, i skolen eller andre steder)"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "22steal"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg kommer bedre ud af det med voksne end med mine jævnaldrende"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "23PreferAdults"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg er bange for mange ting. Jeg bliver nemt skræmt"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "24afraid"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Jeg gør de opgaver færdige som jeg begynder på (f.eks. lektier). Jeg er god til at fastholde
min opmærksomhed"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "25finish"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Synes du, at du har vanskeligheder på et eller flere af følgende områder:
følelser, koncentration, opførsel eller at komme ud af det med andre mennesker?"
* item[=].answerOption[0].valueString = "Nej"
* item[=].answerOption[1].valueString = "Ja, mindre vanskeligheder"
* item[=].answerOption[2].valueString = "Ja, tydelige vanskeligheder"
* item[=].answerOption[3].valueString = "Ja, alvorlige vanskeligheder"
* item[=].linkId = "26difficulties"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Hvor længe har vanskelighederne stået på?"
* item[=].answerOption[0].valueString = "Mindre end 1 måned"
* item[=].answerOption[1].valueString = "1-5 måneder"
* item[=].answerOption[2].valueString = "6-12 måneder"
* item[=].answerOption[3].valueString = "Mere end et år"
* item[=].linkId = "27difficultiesPeriod"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Gør vanskelighederne dig ked af det eller ulykkelig?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "28difficultiesUnhappy"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Påvirker vanskelighederne din dagligdag i forhold til: Familieliv?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "29affectFamilyLife"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Påvirker vanskelighederne din dagligdag i forhold til: Venskaber?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "30affectFriendships"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Påvirker vanskelighederne din dagligdag i forhold til: Indlæring?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "31affectLearning"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Påvirker vanskelighederne din dagligdag i forhold til: Fritidsaktiviteter?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "32affectLeisureActivities"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Gør vanskelighederne det sværere for dem omkring dig (familien, venner, lærere osv.)?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "33AffectOthers"
* item[=].repeats = false

Instance: SDQ11-17AnswerRikke
InstanceOf: KLGatewayChildrenQuestionnaireResponse
Usage: #example
Title: "SDQ11-17AnswerRikke"
Description: "SDQ svar lavet af Rikke (Rikkes alder passer ikke til spørgeskemaet)"
* questionnaire = "http://fhir.kl.dk/children/Questionnaire/klgateway-children-sdq11-17"
* status = #completed
* subject = Reference(Rikke)
* authored = 2024-04-23
* extension[findingInformer].valueCodeableConcept = $KLCommonCodes#25b4e705-2e9a-47a2-b11a-c829316b9d3a "Borger"

* item[0].linkId = "1friendly"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "2restless"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "3headache"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "4sharing"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "5angry"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "6keepingToOneSelf"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "7followInstructions"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "8oftenWorried"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "9helpfull"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "10restlessBody"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "11friend"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "12fighting"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "13sad"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "14liked"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "15distracted"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "16uneasy"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "17treatWell"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "18lying"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "19bullied"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "20offersHelp"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "21consideration"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "22steal"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "23PreferAdults"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "24afraid"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "25finish"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "26difficulties"
* item[=].answer.valueString = "Ja, mindre vanskeligheder"

* item[+].linkId = "27difficultiesPeriod"
* item[=].answer.valueString = "Mere end et år"

* item[+].linkId = "28difficultiesUnhappy"
* item[=].answer.valueString = "Kun lidt"

* item[+].linkId = "29affectFamilyLife"
* item[=].answer.valueString = "Slet ikke"

* item[+].linkId = "30affectFriendships"
* item[=].answer.valueString = "Ret meget"

* item[+].linkId = "31affectLearning"
* item[=].answer.valueString = "Slet ikke"

* item[+].linkId = "32affectLeisureActivities"
* item[=].answer.valueString = "Kun lidt"

* item[+].linkId = "33AffectOthers"
* item[=].answer.valueString = "Kun lidt"

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/sdq4-10.fsh

Instance: klgateway-children-sdq4-10
InstanceOf: KLGatewayChildrenQuestionnaire
Usage: #definition
Title: "KLGatewayChildrenSDQ410"
* status = #active
* publisher = "Kommunernes Landsforening"
* description = "Strength and Difficulties Questionnaire (SDQ), including impact supplement for completion by parents of 4-10 year olds (SDQ P4-10)"
* name = "KLGatewayChildrenSDQ410"
* code = $SCT#718133008 "Strengths and Difficulties Questionnaire for parents or teachers of 4-17 year olds score"
* copyright = "Please note that Strengths and Difficulties Questionnaires, whether in English or in translation, are copyright documents that are not in the public domain. As such, they may not be modified in any way (e.g. changing the wording of questions, adding questions or administering only subsets of questions). This is to ensure that the SDQ is fully comparable across studies and settings. Similarly, to ensure high quality and consistency, unauthorized translations are not permitted. Paper versions may be downloaded and subsequently photocopied without charge by individuals or non-profit organizations provided they are not making any charge to families.
Users are not permitted to create or distribute electronic versions for any purpose without prior authorization from youthinmind. If you are interested in making translations or creating electronic versions you MUST first contact support@youthinmind.com."

* item[0].type = #choice
* item[=].text = "Er hensynsfuld og betænksom overfor andre"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "1friendly"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Er rastløs, overaktiv, har svært ved at holde sig i ro i længere tid"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "2restless"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Klager ofte over hovedpine, ondt i maven eller kvalme"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "3headache"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Deler gerne med andre børn (slik, legetøj, spil og lign.)"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "4sharing"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Har ofte raserianfald eller bliver let hidsig"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "5angry"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Er lidt af en enspænder, holder sig mest for sig selv"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "6keepingToOneSelf"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Gør for det meste hvad der bliver sagt"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "7followInstructions"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Bekymrer sig om mange ting eller virker ofte bekymret"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "8oftenWorried"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Prøver at hjælpe hvis nogen slår sig, er kede af det eller skidt tilpas"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "9helpfull"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Kan ikke sidde stille på stolen, har svært ved at holde hænder og fødder i ro"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "10restlessBody"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Har mindst én god ven"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "11friend"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Slås ofte eller mobber andre børn"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "12fighting"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Er ofte ked af det, trist eller har let til gråd"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "13sad"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Er generelt vellidt af andre børn"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "14liked"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Bliver nemt distraheret, mister let koncentrationen"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "15distracted"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Er utryg eller klæbende i nye situationer, bliver nemt usikker"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "16uneasy"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Er god mod yngre børn"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "17treatWell"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Lyver eller snyder ofte"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "18lying"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Bliver mobbet eller drillet af andre børn"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "19bullied"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Tilbyder ofte at hjælpe andre (forældre, lærere, andre børn)"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "20offersHelp"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Tænker sig om før han/hun handler"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "21consideration"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Stjæler fra hjemmet, i skolen eller andre steder"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "22steal"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Kommer bedre ud af det med voksne end med andre børn"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "23PreferAdults"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Er bange for mange ting, bliver nemt skræmt"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "24afraid"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Færdiggør opgaver (f.eks. lektier), er god til at fastholde opmærksomheden"
* item[=].answerOption[0].valueString = "Passer ikke"
* item[=].answerOption[1].valueString = "Passer delvist"
* item[=].answerOption[2].valueString = "Passer godt"
* item[=].linkId = "25finish"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Synes du samlet set din søn/datter har vanskeligheder på et eller flere af følgende områder:
følelser, koncentration, adfærd eller samspil med andre mennesker?"
* item[=].answerOption[0].valueString = "Nej"
* item[=].answerOption[1].valueString = "Ja, mindre vanskeligheder"
* item[=].answerOption[2].valueString = "Ja, tydelige vanskeligheder"
* item[=].answerOption[3].valueString = "Ja, alvorlige vanskeligheder"
* item[=].linkId = "26difficulties"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Hvor længe har vanskelighederne stået på?"
* item[=].answerOption[0].valueString = "Mindre end 1 måned"
* item[=].answerOption[1].valueString = "1-5 måneder"
* item[=].answerOption[2].valueString = "6-12 måneder"
* item[=].answerOption[3].valueString = "Mere end et år"
* item[=].linkId = "27difficultiesPeriod"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Gør vanskelighederne din søn/datter ked af det eller ulykkelig?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "28difficultiesUnhappy"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Påvirker vanskelighederne hans/hendes dagligdag i forhold til: Familieliv?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "29affectFamilyLife"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Påvirker vanskelighederne hans/hendes dagligdag i forhold til: Venskaber?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "30affectFriendships"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Påvirker vanskelighederne hans/hendes dagligdag i forhold til: Indlæring?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "31affectLearning"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Påvirker vanskelighederne hans/hendes dagligdag i forhold til: Fritidsaktiviteter?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "32affectLeisureActivities"
* item[=].repeats = false

* item[+].type = #choice
* item[=].text = "Er vanskelighederne en belastning for dig eller familien som helhed?"
* item[=].answerOption[0].valueString = "Slet ikke"
* item[=].answerOption[1].valueString = "Kun lidt"
* item[=].answerOption[2].valueString = "Ret meget"
* item[=].answerOption[3].valueString = "Virkelig meget"
* item[=].linkId = "33AffectOthers"
* item[=].repeats = false

Instance: SDQ4-10AnswerLars
InstanceOf: KLGatewayChildrenQuestionnaireResponse
Usage: #example
Title: "SDQ4-10AnswerLars"
Description: "SDQ svar om Lars lavet af Lars' mor eller far"
* questionnaire = "http://fhir.kl.dk/children/Questionnaire/klgateway-children-sdq11-17"
* status = #completed
* subject = Reference(Lars)
* authored = 2024-04-23
* extension[findingInformer].valueCodeableConcept = $KLCommonCodes#166d2437-4e47-4a52-bd94-cdbe91086ca6 "Pårørende alene"

* item[0].linkId = "1friendly"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "2restless"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "3headache"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "4sharing"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "5angry"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "6keepingToOneSelf"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "7followInstructions"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "8oftenWorried"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "9helpfull"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "10restlessBody"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "11friend"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "12fighting"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "13sad"
* item[=].answer.valueString = "Passer delvist"

* item[+].linkId = "14liked"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "15distracted"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "16uneasy"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "17treatWell"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "18lying"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "19bullied"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "20offersHelp"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "21consideration"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "22steal"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "23PreferAdults"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "24afraid"
* item[=].answer.valueString = "Passer ikke"

* item[+].linkId = "25finish"
* item[=].answer.valueString = "Passer godt"

* item[+].linkId = "26difficulties"
* item[=].answer.valueString = "Nej"

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/topi.fsh

Instance: klgateway-children-topi
InstanceOf: KLGatewayChildrenQuestionnaire
Usage: #definition
Title: "KLGatewayChildrenTOPI"
* status = #active
* publisher = "Kommunernes Landsforening"
* description = "Tidlig opsporing og indsats (TOPI), samlet faglig vurdering lavet af sundhedsplejersker og evt. samarbejdspartnere"
* name = "KLGatewayChildrenTOPI"
* copyright = "Socialstyrelsen: https://www.sbst.dk/media/12903/guide-til-tidlig-opsporing-af-b%C3%B8rn-i-en-udsat-position.pdf"
* item[0].type = #choice
* item[=].text = "Faglig vurdering"
* item[=].answerOption[0].valueString = "Grøn"
* item[=].answerOption[1].valueString = "Gul"
* item[=].answerOption[2].valueString = "Rød"
* item[=].linkId = "1vurdering"
* item[=].repeats = false

Instance: TOPIRikke
InstanceOf: KLGatewayChildrenQuestionnaireResponse
Usage: #example
Title: "TOPIAnswerRikke"
Description: "TOPI vurdering af Rikke lavet af sundhedsplejersker og eventuelle samarbejdspartnere."
* questionnaire = "http://fhir.kl.dk/children/Questionnaire/klgateway-children-topi"
* status = #completed
* subject = Reference(Lars)
* authored = 2020-12-23

* item[0].linkId = "1vurdering"
* item[=].answer.valueString = "Grøn"

---

File: repos/hl7dk_SLASH_kl-children/input/fsh/weight.fsh

Profile: KLGatewayChildrenBodyWeight
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-basic-observation
Id: klgateway-children-bodyweight
Title: "KLGatewayChildrenBodyWeight"
Description: "Profile of HL7 body weight profile used in Danish Municipalities"
* code.coding[LOINC] = $LOINC#29463-7 //Body weight
* code.coding[SNOMEDCT] = $SCT#27113001
* valueQuantity.code from ObservationUnitsWeight
* subject 1..1
* subject only Reference(klgateway-children-citizen)
* subject ^type.aggregation = #bundled
* encounter only Reference(klgateway-children-encounter)
* encounter ^type.aggregation = #bundled
* effective[x] 1..1
* effective[x] only dateTime
//0..0 cardinalities
* identifier 0..0
* basedOn 0..0
* partOf 0..0
* focus 0..0
* issued 0..0
* performer 0..0
* interpretation 0..0
* note 0..0
* bodySite 0..0
* method 0..0
* specimen 0..0
* device 0..0
* hasMember 0..0
* derivedFrom 0..0

* category ^short = "[DK] vægtKategori"
* dataAbsentReason ^short = "[DK] vægtMangler"
* code ^short = "[DK] vægtKode"
* valueQuantity.value ^short = "[DK] vægtResultat"
* valueQuantity.code ^short = "[DK] vægtEnhed"
* valueQuantity.system ^short = "[DK] vægtEnhed"
* subject ^short = "[DK] vægtsubjekt"
* encounter ^short = "[DK] vægtkontakt"
* effectiveDateTime ^short = "[DK] vægttid"
* status ^short = "[DK] vægtStatus"
* obeys obs-2 //"If the value is not given, then explain why using dataAbsentReason"
* obeys obs-1 //"If value is given as a decimal point number with more than one precision, an error is returned"

Instance: RikkeBodyWeight
InstanceOf: klgateway-children-bodyweight
Usage: #example
Title: "RikkeBodyWeight"
Description: "Rikkes vægt"
* subject = Reference(Rikke)
* encounter = Reference(2nd1mthEncounter)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#27113001
* code.coding[LOINC] = $LOINC#29463-7
* valueQuantity.value = 5100
* valueQuantity.unit = "g"
* valueQuantity.system = $UCUM
* valueQuantity.code = #g
* status = #final
* effectiveDateTime = 2020-06-01

Instance: RikkeBodyWeight2mth
InstanceOf: klgateway-children-bodyweight
Usage: #example
Title: "RikkeBodyWeight"
Description: "Rikkes vægt"
* subject = Reference(Rikke)
* encounter = Reference(2mthEncounter)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#27113001 "Body weight"
* code.coding[LOINC] = $LOINC#29463-7
* valueQuantity.value = 6200
* valueQuantity.unit = "g"
* valueQuantity.system = $UCUM
* valueQuantity.code = #g
* status = #final
* effectiveDateTime = 2020-06-30

Instance: RikkeBodyWeight3mth
InstanceOf: klgateway-children-bodyweight
Usage: #example
Title: "RikkeBodyWeight3mth"
Description: "Rikkes vægt ved 3 måneder"
* subject = Reference(Rikke)
* category.coding.system = "http://terminology.hl7.org/CodeSystem/observation-category"
* category.coding.code = #vital-signs
* code.coding[SNOMEDCT] = $SCT#27113001 "Body weight"
* code.coding[LOINC] = $LOINC#29463-7
* valueQuantity.value = 7100
* valueQuantity.unit = "g"
* valueQuantity.system = $UCUM
* valueQuantity.code = #g
* status = #final
* effectiveDateTime = 2020-08-08

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/example.md

This page describes subsequent delivery reports for the child Rikke Test Berggren and her parents Kirsten Test Berggren and Knud Odvar Test Mosebryggersen. The three citizens all come from MedCom’s set of test patients, but MedCom’s original family-connections had to be ignored to form a coherent example. For each delivery report the story is told (in Danish), and a reporting example is given.

### First Event February 5th, 2020
#### Story
Kirsten er gravid, og er i uge 27. Hun møder sundhedsplejersken sammen med sin mand Knud. Der er kommet et graviditetsbesøg i stand, fordi Kirsten af jordemoderen er blevet vurderet sårbar. Kirsten har haft en svær opvækst præget af omsorgssvigt. Hun har tidligere haft en depression, men har det nu godt i hverdagen. Ellers er der ikke noget at bemærke ved forældrene.
#### Reporting
The delivery report contains two Citizens (Kirsten and Knud), one Encounter (Type: ‘Graviditetsbesøg’), and an instance of the mandatory Observations for each parent IndicatorParentSocialStatus (Kirsten’s psychological vulnerability is marked as “Potentiel sårbarhed”) , IndicatorParentMentalStatus, IndicatorSocialSupportNetwork. In addition, Kirsten has an instance of ExamResult (her childhood trauma is registered as ‘Traumatiske oplevelser’).

The report for this is found here: [DeliveryReport-Rikke-1](Bundle-b9479825-6be1-4fa1-a2ae-74fe67014caa.html)

### Second Event May 7th, 2020
#### Story
Rikke blev født d. 5. maj. D. 7. maj kommer sundhedsplejersken på barselsbesøg. Kirsten er kommet godt i gang med at amme. Vægten er 3100g og forældre-barn relation er normal.
Sundhedsplejersken får dog ved en fejl ikke registreret forældre-barn-relationen i journalen. Derfor fejler indberetningen. Næste nat forsøges data afsendt igen, og fejler af samme årsag. Herefter afsendes rapporten med en registrering af, at data mangler for forældre-barn-relationen.

#### Failed reporting
The delivery report contains one Citizen (Rikke), one Encounter (Type: ‘Barselsbesøg’), and two instances of the mandatory Observation FeedingObservation (One feeding periode and one feeding status), and one instance of BodyWeight. The report fails because IndicatorParentRelationship is missing.

The report for this is found here: [DeliveryReport-Rikke-2a](Bundle-c5b55e0e-3bc4-468a-8600-1b23617dbb58.html)

#### Successful reporting
IndicatorParentRelationship is added to the report with no value and a dataAbsentReason, and the content is validated and send.

The report for this is found here: [DeliveryReport-Rikke-2b](Bundle-74dcb49e-dd6a-4450-9fb8-85ad0e7bed38.html)

### Third Event May 17th, 2020
#### Story
Ved etableringsbesøget er alt som det skal være. Kirsten ammer fortsat, vægten er 3400g, længden 51cm og hovedomfang 35cm. Der skal på besøget rapporteres på forældres sårbarhed, ligesom på graviditetsbesøget. Da der ikke er noget der har ændret sig, bliver forældre og sundhedsplejerske hurtigt enige om, at det er samme situation som før fødslen. Der ryges ikke i hjemmet, ej heller hvor Rikke hyppigt opholder sig. Derfor registreres det, at Rikke ikke udsættes for passiv rygning.

#### Reporting
The delivery report contains three Citizens (Rikke, Kirsten, Knud), two RelatedParent instances to maintain the relationship between the three,  one Encounter (Type: ‘Etableringsbesøg’). For Rikke, there is an instance of the mandatory Observations IndicatorParentRelationship, BodyWeight, BodyHeight, HeadCircumference, IndicatorPassiveSmoking, and FeedingObservation.
The parent’s Observations result in two instances of IndicatorParentSocialStatus and IndicatorSocialSupportNetwork respectively.

The report for this is found here: [DeliveryReport-Rikke-3](Bundle-a27ab0ea-4018-4516-900c-f1249a28dc37.html)

### Fourth Event June 1st, 2020
#### Story
Ved 2. besøg i barnets første levemåned, kommer sundhedsplejersken forbi sen eftermiddag. Alt er normalt. Rikke vejer 4150g, er 53,5 cm og har et hovedomfang på 36,5cm. Kirsten fuldammer stadig.
Desværre når sundhedsplejersken ikke at skrive resultaterne fra besøget ind i systemet fordi hun har fyraften lige efter besøget. Derfor fejler afleveringen af data første nat. Næste dag skrives de resterende data ind i systemet, hvormed data kan valideres og afsendes følgende nat.

#### Failed reporting
The delivery report contains one Citizen (Rikke), one Encounter (Type: ‘2. Besøg i barnets første levemåned’). The report fails because the mandatory observations are missing.

The report for this is found here: [DeliveryReport-Rikke-4a](Bundle-c60604d1-692b-4e6d-86e5-03046b2d2f16.html)

#### Successful reporting
The observations are added. In addition to the instances mentioned above, the report contains IndicatorParentRelationship, BodyWeight, BodyHeight, HeadCircumference, FeedingObservation, IndicatorCommunication.

The report for this is found here: [DeliveryReport-Rikke-4b](Bundle-84cf4f74-0cc7-47fe-8301-3bc8eb0ddd8f.html)

### Fifth Event July 7th, 2020
#### Story
Ved 2 måneders besøget udfylder begge forældre EPDS.  Kirstens score ligger på 15, og sundhedsplejen må konstatere at Kirsten, når der spørges ind, er påvirket særligt med nedtrykthed, dårlig selvfølelse og selvbebrejdelse (de to sidstnævnte er depressive ledsagesymptomer).  Der registreres derfor en psykisk reaktion i journalen, som også nuanceres med Kirstens symptomer. Knuds EPDS er normal, og hans psykiske reaktion er forventelig.
Sandsynligvis pga. sin mors mistrivsel, kan sundhedsplejersken konstatere let påvirket forældre-barn-relation, fordi Kirsten nogle gange har svært ved at dække Rikkes følelsesmæssige behov, de timer, hvor de er alene. Desuden græder Rikke meget både ifm. besøget, og ellers, og sundhedsplejersken vurderer, at hendes egen kontakt med barnet ikke er alderssvarende, særligt er der afvigende øjenkontakt. Alt andet er normalt. Vægten er 5100g, længden er 57cm og hovedomfanget er 38cm.
Sundhedsplejersken opstarter vejledning i kontakt, samspil og barnets behov.
Sundhedsplejersken opfordrer Kirsten til at søge egen læge hurtigst muligt med henblik på diagnosticering af fødselsdepression og psykologhjælp, dvs. indsatsen ’Anbefalet kontakt til praktiserende læge’. Desuden takker Kirsten ja til at deltage i en forældregruppe med andre forældre der har en psykisk reaktion, dvs. indsatsen ’Forældregruppe hvor forælder har psykisk reaktion’.
Sundhedsplejen igangsætter desuden indsatsen ’Støtte ved psykisk reaktion eller sårbarhed’ i Kirstens journal. Og indsatsen ’Vejledning i kontakt, samspil og barnets behov’ i Rikkes journal. De aftaler at sundhedsplejersken ringer et par dage efter for at følge op, og kommer forbi fysisk efter en uge.
#### Reporting
The delivery report contains three Citizens (Rikke, Kirsten, Knud), two RelatedParent instances to maintain the relationship between the three, and one Encounter (Type: ‘Besøg hos det ca. 2 måneder gamle barn’). 
For Knud, there is an instance of QuestionnaireResponse (EPDS), IndicatorParentMentalStatus
For Kirsten, there is an instance of QuestionnaireResponse (EPDS), IndicatorParentMentalStatus and two instances of ExamResult to contain Kirsten’s depression symptoms. In addition, three instances of Intervention contains the three need-based interventions that are started for Kirsten.
For Rikke, there is an instance of IndicatorSocialInteraction, IndicatorParentRelationship, BodyWeight, BodyHeight, HeadCircumference, FeedingObservation, IndicatorCommunication and IndicatorSleep. In addition, three instances of ExamResult, that holds the observations related to social interaction (græder meget, afvigende øjenkontakt) and child-parent relationship (‘Følelsesmæssige behov opfyldes ikke’). Rikke’s need-based intervention is also reported as an instance of Intervention.

The report for this is found here: [DeliveryReport-Rikke-5](Bundle-567a4d32-b3eb-46d6-8564-c7c2a1a1b903.html)

### Sixth Event July 9th, 2020
#### Story
Sundhedsplejersken ringer til Kirsten, i en behovskontakt leveret som telefonopkald. Kirsten fortæller blandt andet, at hun siden sidst har kontaktet egen læge, og at Knud har talt med sin arbejdsgiver om, at kunne være meget mere hjemme i den kommende tid. Ud over at spørge ind til familien fortsætter sundhedsplejersken sin vejledning i kontakt, samspil og barnets behov.
#### Reporting
The delivery report contains two citizens (Rikke, Kirsten), and a RelatedParent instances to maintain the relationship between them.
For Kirsten, it is registered that she had an Encounter (Type: ‘Behovskontakt med småbørnssundhedsplejen’), and that this encounter was a delivery of her intervention ’Støtte ved psykisk  eller sårbarhed’, which means that an Instance of her Intervention is also included.
For Rikke, it is registered that she had an Encounter (Type: ‘Behovskontakt med småbørnssundhedsplejen’), and that this encounter was a delivery of her intervention ‘Vejledning i kontakt, samspil og barnets behov’, which means that an Instance of her Intervention is also included.
Note that two instances of Encounter is related to one visit. This is done for two reasons: Not mixing up Rikkes and Kirstens patient journals, and keeping the FHIR standard, which says that encounters are personal i.e. has one subject. For ease of registration, just use the same start-time, and (if registered at all) the same end-time.

The report for this is found here: [DeliveryReport-Rikke-6](Bundle-dbe422ac-dd15-4562-838d-1f5ff9ae45d8.html)

### Seventh Event July 14th, 2020
#### Story
Sundhedsplejersken besøger Kirsten, Knud og Rikke, i en behovskontakt. Familien fortæller, at det går bedre. Kirsten er allerede begyndt i sin nye forældregruppe og til psykolog, og Knud er mere hjemme. Sundhedsplejen vurderer, at der nu gøres det der kan i andet regi mht. Kirstens psykiske tilstand, og afslutter derfor Kirstens indsats vedr. ’Støtte ved psykisk reaktion eller sårbarhed’.
Rikke er stadig ikke alderssvarende i sin sociale kontakt, særligt ikke mht. øjenkontakt, men der er forbedring og forældrene responderer godt på sundhedsplejerskens vejledning. Derfor fortsætter indsatsen ‘Vejledning i kontakt samspil og barnets behov’. Sundhedsplejersken afslutter besøget med at lave aftale om nyt besøg 9 dage efter.
#### Reporting
The delivery report contains two citizens (Rikke, Kirsten), and a RelatedParent instances to maintain the relationship between them.
For Kirsten, it is registered that she had an Encounter (Type: “Behovskontakt med småbørnssundhedsplejen”), and that this encounter was a delivery of her intervention ’Støtte ved psykisk reaktion eller sårbarhed’, which means that an Instance of her Intervention is also included. This Intervention is now ended (i.e. given an end-date).
For Rikke, it is registered that she had an Encounter (Type: “Behovskontakt med småbørnssundhedsplejen”), and that this encounter was a delivery of her intervention ‘Vejledning i kontakt samspil og barnets behov’, which means that an Instance of her Intervention is also included.

The report for this is found here:
[DeliveryReport-Rikke-7](Bundle-a50c7477-c817-4f98-92a8-b8c15f015d9e.html)


### Eighth Event July 23rd, 2020
#### Story
Sundhedsplejersken besøger Kirsten, Knud og Rikke, i en behovskontakt. Familien fortæller at de har det rigtig godt og synes Rikke er i trivsel.
Sundhedsplejersken vurderer, at Rikke nu er alderssvarende i sin sociale kontakt. Derfor afsluttes ‘Vejledning i kontakt samspil og barnets behov’.
Sundhedsplejersken aftaler med familien, at de ser hinanden næste gang til 4-6 måneders besøget.
#### Reporting
The delivery report contains one citizens (Rikke). It is registered that she had an Encounter (Type: ‘Behovskontakt med småbørnssundhedsplejen’), and that this encounter was a delivery of her intervention ‘Vejledning i kontakt samspil og barnets behov’, which means that an Instance of her Intervention is also included. This Intervention is now ended (i.e. given an end-date).

The report for this is found here:
[DeliveryReport-Rikke-8](Bundle-d2e57785-7d0e-4b30-9e51-62c14185b9ed.html)

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/example2.md

This page describes subsequent delivery reports for the child Lars Test Berggren. Lars comes from MedCom’s set of test patients. For each delivery report the story is told (in Danish), and a reporting example is given. This story is made to illustrate the use of Location (school code), and entered-in-error. For a more extesive story read the small children example.

### First Event October 6th, 2021
#### Story
Lars kommer til indskolingsundersøgelse sammen med sine forældre, på en skole i Holbæk.
Lars er 125 cm høj og vejer 26 kg. Kost, kommunikation, motorik, fysisk aktivitet, hørelse, syn og social kontakt er normalt/alderssvarende. Lars har let forstyrret søvn pga. naturininkontinens. Sundhedsplejersken igangsætter indsatsen 'Vejledning ved udskillelsesproblematik'
#### Reporting
The delivery report contains one Citizen (Lars), one Encounter (Type: ‘Indskolingsundersøgelse’), and the encounters Location (the school). The report holds the mandatory Observations IndicatorSocialInteraction, Weight, Height, IndicatorNutrition, IndicatorCommunication, IndicatorSleep ('Let forstyrret søvn'), IndicatorMotorFunction, IndicatorPhysicalActivity, IndicatorHearing and IndicatorSight.
In addition, Lars has an instance of ExamResult ('naturininkontinens'), and an instance of Intervention ('Vejledning ved udskillelsesproblematik').

The report for this is found here: [DeliveryReport-Lars-1](Bundle-5f1d5816-a906-4314-a6f4-69b400682ec6.html)

### Second Event October 9th, 2021
#### Story
Sundhedsplejersken skal have en behovskontakt med Lars fra 3. klasse vedr. overvægt. Ved en fejl, kommer hun til at skrive det i Lars fra 0.klasses journal (Lars Test Berggren). Eksemplet viser, hvordan data først indberettes til den forkerte Lars' journal, og hvordan fejlen herefter rettes. Læg mærke til at hverken Lars, eller Lokationen (skolen i Holbæk) tages med i fejlretningen. Det er fordi, det er entiteter, der rent faktisk eksisterer og ikke skal rettes. 

#### Error-filled reporting
The delivery report contains one Citizen (Lars), one Encounter (Type: ‘Behovskontakt’), the encounters location (the school). In addition, an Intervention ('Opsporing og vejledning ved overvægt').

The report for this is found here: [DeliveryReport-Lars-2a](Bundle-4cda6c3c-856c-4fe3-ac90-9b6f968207c3.html)

#### Error-correction report
The delivery report contains a new version of the Encounter and Intervention mentioned above, where status is entered-in-error.

The report for this is found here: [DeliveryReport-Lars-2b](Bundle-9a966368-052f-42e5-87fa-e57d9b8cbf2c.html)


---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/index.md

# KLChildren
This implementation guide describes the delivery of children health data to KL Gateway. The data originates from the documentation made by health nurses (sundhedsplejersker) in the Danish municipalities. The reporting aims for compliance with the Danish core profiles and the current work on a shared information model (FKI) for data in the Danish municipalities.  

The profiles for the reporting are restricted to allow only the information that is required to report to KL Gateway.

## Overview
The data is reported as a collection of instances. A report may contain instances that conforms to the profiles defined in this implementation guide. See figure below.

<img alt="OverviewModel" src="./ReportStructure.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

In addition to being structured as a report, relationships exist between the profiles. These are illustrated in the UML Class Diagram in the figure below.

<img alt="ClassDiagram" src="./ClassDiagram.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

The Class diagram shows that Citizen and RelatedParent known each other. The association where the Citizen refers to the RelatedParent is used to represent a parent-citizen associated with a parent role. The association where RelatedPerson refers to the Citizen is used to represent that the parent-role is in relation to the child-citizen.

Intervention, Encounter, Observation and QuestionnaireResponse are all associated with Citizen i.e. these profiles know which Citizen they hold information about. Encounter may be associated with a Location, which is used for school codes. QuestionnaireResponse refers to the Questionnaire defining it. Questionnaire instances relevant for children's health are defined in this implementation guide, thus implementers can refer to these using their canonical url, in QuestionnaireResponse instances. Consequently, Questionnaire instances are not send in reports.

The Observation class represents a basic FHIR Observation, which is not instantiated in the report. Notice that the resource Indicator is abstract, so this is not instantiated either. However, all the other Observations, inherits from these two. The classes that inherits from Indicator are evaluations of child or parent health as made by the Health nurse. They are characterized by being mandatory at some point (see special constraints below), and by including codes that represent both normal findings and problems as possible results. Weight, Height HeadCircumference and Feeding are also mandatory at different points in time. However, the results of these Observations have another structure than Indicator e.g. quantity. The Exam Results are characterized by being history taking information or observations that are never mandatory, and only documented when relevant i.e. they typically express abnormal findings.      
 
Relevant profiles inherit from dk-core, even though it is not illustrated specifically in the Class Diagram. The following profiles from dk-core are used: Citizen, Observation, BasicObservation, Condition and RelatedPerson.

## Special constraints, and resulting reporting practises
Whereas the report may seem unconstrained, each profile define constraints on attributes, datatypes and cardinalities. In addition, extra constraints are implemented to accommodate the rules of reporting data to The National Child Health Register, see [guidance](https://sundhedsdatastyrelsen.dk/da/rammer-og-retningslinjer/indberetning_sei/vejledninger_indberetning/bornedatabasen) and Fælleskommunal standard for forebyggende sundhedsydelser til børn og unge (FBU). These additional constraints are established to guarantee that all required observations are included when reporting specific standard encounters. Note that the constraints only apply, when the appropriate encounter-type is applied, and when Enconter.Class is ambulatory "AMB" or Home visit "HH". A table is presented below (Danish names for standard-visits):

{:class="grid"}
|Standard visit| Mandatory Observations in Report|
| ------------- |-------------|
|Graviditetsbesøg |IndicatorParentMentalState, IndicatorSocialSupportNetwork, IndicatorParentSocialStatus|
|Barselsbesøg |ParentRelationship, Weight, Feeding|
|Etableringsbesøg |IndicatorSocialSupportNetwork, IndicatorParentSocialStatus, IndicatorParentRelationship, Weight, Height, HeadCircumference, IndicatorTobacco, Feeding|
|Andet besøg inden første måned|IndicatorParentRelationship, Weight, Height, HeadCircumference, Feeding|
|Besøg hos det ca. 2 måneder gamle barn |IndicatorParentMentalState, IndicatorSocialInteraction, IndicatorParentRelationship, Weight, Height, HeadCircumference, Feeding, IndicatorCommunication, IndicatorSleep, IndicatorMotorFunction|
|Besøg hos det 4-6 måneder gamle barn|IndicatorSocialInteraction, IndicatorParentRelationship, Weight, Height, HeadCircumference, Feeding, IndicatorCommunication, IndicatorSleep, IndicatorMotorFunction|
|Besøg hos det 8-11 måneder gamle barn|IndicatorSocialInteraction, IndicatorParentRelationship, Weight, Height, HeadCircumference, Feeding, IndicatorCommunication, IndicatorSleep, IndicatorMotorFunction|
|Indskolingsundersøgelse |IndicatorSocialInteraction, Weight, Height, IndicatorNutrition, IndicatorCommunication, IndicatorSleep, IndicatorMotorFunction, IndicatorPhysicalActivity, IndicatorHearing, IndicatorSight|
|Undersøgelse i mellemtrin, med måling |Weight, Height|
|Udskolingsundersøgelse| IndicatorSocialInteraction, Weight, Height, IndicatorNutrition, IndicatorNicotine, IndicatorCommunication, IndicatorSleep, IndicatorPhysicalActivity, IndicatorHearing, IndicatorSight.|

When an encounter is completed without obtaining the a mandatory observations, the rules require that an observation be reported and given a 'dataAbsentReason'.

 See more in the descriptions below and in the [Enconter-profile](StructureDefinition-klgateway-children-encounter.html)

Be aware that reporting challenges may arise if documentation is completed in the days after a visit. If a report lacks mandatory observations, you should attempt to submit the record within the next two days to check if documentation has been completed. If the data remains undocumented by the end of the second day, report the observations immediately without a value and provide an appropriate 'dataAbsentReason'.

## Citizen
Information about the citizens that are the subjects of the report. This resource is used to get a reference to the child. However, sometimes a report holds data about the child's parents. To ensure that this data goes into the parent's record, the data should be related to the parent represented as a citizen. Before birth, only Citizen records for parents should be send. After birth, Citizen and relatedPerson resources for the parents should only be included when and if, they are relevant for the child's report.

##### Attributes
* civil registration number (CPR-nr)
* identification of the municipality holding and reporting the data
* a reference to ParentRelation that holds additional information about the citizen's children.
* a FHIR status attribute used to report errors.

##### Validation
* One and only one civil registration number exists, and is a syntactically valid CPR-nr
* One and only one managing organization exists, and is a syntactically valid SOR code (only code length is currently validated in the profile, but the authorization validates the actual SOR code)
* One reference to ParentRelation may exist
* One FHIR status may exist, and should be drawn from the standard ValueSet.

## ParentRelation
Information about the relationship between a child and its parents.

##### Attributes
* a reference to the Citizen instance that holds the child's information
* a relationship type that states that this is a 'parent'-relationship.
* a FHIR status attribute used to report errors.
* One FHIR status may exist, and should be drawn from the standard ValueSet.

##### Validation
* one and only one reference to the Citizen exists
* one and only one relationship type exists, and the value is fixed to 'PRN' for parent.

## Encounter
Information about when a child and/or parents meet the health nurse (sundhedsplejerske) in a Danish municipality context. 

##### Attributes
* Type of encounter. The attribute describe which health nurse visit/encounter is delivered using a code.
* Encounter class. The attribute holds a code which describe the place of delivery e.g. home visit, ambulatory or virtual.
* The encounter start-time
* The encounter end-time
* A reference to the Citizen instance that holds the child's information
* A FHIR status attribute
* A reference to a Location, that holds the school code
##### Validation
* One and only one encounter-type exists, and should be drawn from a specific ValueSet, no other codes may be reported.
* One and only one encounter class exists, and should be drawn from the standard FHIR-ValueSet
* One and only one encounter start-time exists
* One encounter start-time may exist
* One and only one reference to the Citizen exists
* One and only one FHIR status exists, and should be drawn from the standard FHIR-ValueSet
* A reference to a location may exist

## Location
A place physical or abstract

##### Attributes
* An identifier, which holds the Danish school code
* A type, which states that the location is a school
* A FHIR status attribute ^short = "[DK] Lokationsstatus"

##### Validation
* One and only one identifier exists
* type is always ‘SCHOOL’
* status may exist, and is assumed active if not present

## Indicator
A simple form of observation where a whole area of concern is evaluated. The value is always a code. Indicator is abstract. The following describes how the specializations of Indicator is validated.

##### Attributes
* Code that describe the kind of indicator.
* Value that describes whether everything is normal, a potential problem exist, or a problem is present. Note that each of the specializations of Indicator, controls the valid values. 
* A reference to the Citizen instance that holds either the parents or the child's information
* A reference to the Encounter in which the indicator have been evaluated
* The time of the evaluation
* A dataAbsentReason, which is a possibility to describe why data is absent
* A FHIR status attribute

##### Validation
* One and only one code exists to describe the kind of indicator. It is a fixed code for each of the specializations.
* One value which is always a code may exist. For each specialization, it should be drawn from a specific ValueSet, no other codes may be reported.
* One and only one reference to the Citizen exists
* A reference to an Encounter may exist
* The time of the evaluation is mandatory
* DataAbsentReason is possible when the value is absent, and should be drawn from the standard FHIR ValueSet
* One and only one FHIR status exists, and should be drawn from the standard FHIR-ValueSet

## ExamResult
Optional detailed history and examination findings from the health nurse record. For each finding a new instance of this model is needed.

##### Attributes
* One codes that means that this is a history and/or examination observable
* A value which is a code
* An observation-time
* A reference to the Citizen instance that holds the child's information
* A reference to the Encounter in which the observation occurred
* A FHIR status attributeFHIR-ValueSet

##### Validation
* The observation code should be present, and fixed to a specific SNOMED CT code
* One value may exist. It should be drawn from a specific ValueSet, no other codes may be reported.
* The observation-time is mandatory
* One and only one reference to the Citizen exists
* A reference to an Encounter may exist
* One and only one FHIR status exists, and should be drawn from the standard FHIR-ValueSet

## Weight
A child's weight

##### Attributes
* A category that is used for commonly used vital-signs observations internationally
* Two codes that describes that this is a weight observable
* A value that describes how much the child weighs
* A dataAbsentReason, which makes it possible to describe why data is absent
* An observation-time
* A reference to the Citizen instance that holds the child's information
* A reference to the Encounter in which the observation occurred
* A FHIR status attribute

##### Validation
* The category should be present, and fixed to a specific code
* The two weight codes should be present, and fixed to a specific LOINC and SNOMED CT code respectively
* The value should be given as a decimal point in grams or kilograms, and the UCUM-unit should be applied
* One dataAbsentReason is mandatory if the value is empty
* The time is mandatory
* One and only one reference to the Citizen exists
* A reference to an Encounter may exist
* One and only one FHIR status exists, and should be drawn from the standard FHIR-ValueSet

## Height
A child's length/height 

##### Attributes
* A category that is used for commonly used vital-signs observations internationally
* Two codes that describes that this is a height/length observable
* A value that describes how long/tall the child is
* A dataAbsentReason, which makes it possible to describe why data is absent
* An observation-time
* A reference to the Citizen instance that holds the child's information
* A reference to the Encounter in which the observation occurred
* A FHIR status attribute

##### Validation
* The category should be present, and fixed to a specific code
* The two weight codes should be present. One is a fixed LOINC code. The other is either a SNOMED CT length or a SNOMED CT height code.
* The value should be given as an integer in cm, and the UCUM-unit should be applied
* One dataAbsentReason is mandatory if the value is empty
* The time is mandatory
* One and only one reference to the Citizen exists
* A reference to an Encounter may exist
* One and only one FHIR status exists, and should be drawn from the standard FHIR-ValueSet

## HeadCircumference
The child's head circumference 

##### Attributes
* A category that is used for commonly used vital-signs observations internationally
* Two codes that describes that this is a head circumference observable
* A value that describes the child's head circumference
* A dataAbsentReason, which makes it possible to describe why data is absent
* An observation-time
* A reference to the Citizen instance that holds the child's information
* A reference to the Encounter in which the observation occured
* A FHIR status attribute

##### Validation
* The category should be present, and fixed to a specific code
* The two observation codes should be present, and fixed to a specific LOINC and SNOMED CT code respectively
* The value should be given as a decimal point in cm, and the UCUM-unit is applied
* One dataAbsentReason is possible if the value is empty
* The time is mandatory
* One and only one reference to the Citizen exists
* A reference to an Encounter may exist
* One and only one FHIR status exists, and should be drawn from the standard FHIR-ValueSet

## Feeding
Information about how small children are fed. It is used for observations of a childs breastfeeding.

##### Attributes
* One codes that describes that this is a feeding observation
* A value that describes what feeding method the observation is about
* A dataAbsentReason, which makes it possible to describe why data is absent
* An observation period in which the feeding method is used, or an observation time.
* A reference to the Citizen instance that holds the child's information
* A reference to the Encounter in which the observation occured
* A FHIR status attributeFHIR-ValueSet

##### Validation
* The observation code should be present, and fixed to a specific SNOMED CT code
* One value may exist. It should be drawn from a specific ValueSet, no other codes may be reported.
* One dataAbsentReason is possible if the value is empty
* The period start, or observation time is mandatory. periode-end is optional
* One and only one reference to the Citizen exists
* A reference to an Encounter may exist
* One and only one FHIR status exists, and should be drawn from the standard FHIR-ValueSet

## Intervention
Interventions that are carried out by health nurses in childrens health promotion and disease prevention. Only need-based interventions are reported. The standard program that all children in Denmark recieves is not reported as interventions.

##### Attributes
* A code that decribes which intervention it is
* A start-time
* An end-time
* A reference to the Citizen instance that holds the child's information
* A reasonCode that describe the condition which is the reason for the intervention
* Three FHIR status attributes

##### Validation
* One and only one code is mandatory and should be drawn from the specified ValueSet
* One and only one start-time is mandatory
* Only one end-time may be given
* One and only one reference to Citizen is mandatory
* The reasonCode is optional. If present it should be drawn from the specified ValueSet. More than one code is allowed.
* The FHIR status attributes are mandatory, and should be drawn from the standard FHIR-ValueSet.

## QuestionnaireResponse
Response to a Questionnaire. Questionnaires may concern child or parents. The questionnaire may be filled out by the health nurse or the citizen.

##### Attributes
* An adress pointing to the Questionnaire being answered
* A reference to the Citizen instance that holds the child's or a parent's information
* A reference to the Encounter in which the Questionnaire is answered
* A questionnaire completion time
* A number of answers to the questions in the Questionnaire 
* A FHIR status attribute

##### Validation
* One and only one adress pointing to the Questionnaire exists
* One and only one reference to citizen exists
* One reference to encounter may exist
* The questionnaire completion time is mandatory
* At least one answer should be reported
* One and only one FHIR status exists, and should be drawn from the standard FHIR-ValueSet

## Dependencies
{% include dependency-table.xhtml %}

## Cross Version Analysis
{% include cross-version-analysis.xhtml %}

## Global Profiles
{% include globals-table.xhtml %}

## IP Statements
{% include ip-statements.xhtml %}



---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/Questionnaire-klgateway-children-adbb-intro.md

### Scope and usage
KLGatewayChildrenADBB is used to define the Alarm Distress BaBy Scale (ADBB). The link-ids from this questionnaire have to be referred in the QuestionnaireResponse, that holds the answers to an ADBB questionnaire.

Note that this Questionnaire defines datatype (integer) and minimum and maximum value for these integers. This is done for each item in the Questionnaire. However, the FHIR-validator is not able to validate a QuestionnaireResponse using these rules (because there is a loose coupling between Questionnaire and QuestionnaireResponse in FHIR). We encourage vendors to ensure that responses are validated according to the rules described here.

### Copyright
Permissions obtained by Local Government Denmark(Kommunernes Landsforening) to include this questionnaire in this standard, does not mean that clinical systems and users that report to KLGateway using this standard automatically have permission. It is the sole responsibility of users to handle their own permissions.

Users may only use ADBB if they first complete appropriate training as offered by University of Copenhagen https://psy.ku.dk/cif/kurser-og-efteruddannelse/. The copyright should be respected. ADBB was first described in: Guedeney, A. and Fermanian, J., 2001. A validity and reliability study of assessment and screening for sustained withdrawal reaction in infancy: The Alarm Distress Baby Scale. Infant Mental Health Journal: Official Publication of The World Association for Infant Mental Health, 22(5), pp.559-575.



---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/Questionnaire-klgateway-children-aims-intro.md

### Scope and usage
KLGatewayChildrenAIMS is used to define the Alberta Infant Motor Scale (AIMS). The link-ids from this questionnaire have to be referred in the QuestionnaireResponse, that holds the answers to an AIMS questionnaire.

Note that this Questionnaire defines datatype (integer) and minimum and maximum value for these integers. This is done for each item in the Questionnaire. However, the FHIR-validator is not able to validate a QuestionnaireResponse using these rules (because there is a loose coupling between Questionnaire and QuestionnaireResponse in FHIR). We encourage vendors to ensure that responses are validated according to the rules described here.

### Copyright
Permissions obtained by Local Government Denmark(Kommunernes Landsforening) to include this questionnaire in this standard, does not mean that clinical systems and users that report to KLGateway using this standard automatically have permission. It is the sole responsibility of users to handle their own permissions.

Users may only use AIMS if they respect the copyright and other intellectual property rights, which are held by Elsevier. AIMS was first described in: Piper, Martha C., et al. Construction and validation of the Alberta Infant Motor Scale (AIMS). Canadian journal of public health= Revue canadienne de sante publique 83 (1992): S46-50. Its current use is described in: Piper, Martha, and Johanna Darrah. Motor Assessment of the Developing Infant-E-Book. Elsevier Health Sciences, 2021.

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/Questionnaire-klgateway-children-epds-intro.md

### Scope and usage
KLGatewayChildrenEPDS is used to define the Edinburgh postnatal depression scale (EPDS). The link-ids from this questionnaire have to be referred in the QuestionnaireResponse, that holds the answers to an EPDS questionnaire.

Note that this Questionnaire defines datatype (Integer) and minimum and maximum value for these integers. This is done for each item in the Questionnaire. However, the FHIR-validator is not able to validate a QuestionnaireResponse using these rules (because there is a loose coupling between Questionnaire and QuestionnaireResponse in FHIR). We encourage vendors to ensure that responses are validated according to the rules described here.

### Copyright
Permissions obtained obtained by Local Government Denmark(Kommunernes landsforening) to include this questionnaire in this standard, does not mean that clinical systems and users that report to KLGateway using this standard automatically have permission. It is the sole responsibility of users to handle their own permissions.

Users may reproduce this scale without further permission providing they respect the copyright. Copyright remains with the British Journal of Psychiatry. EPDS was first described by: Cox, J.L., Holden, J.M. and Sagovsky, R. (1987). Detection of postnatal depression: Development of the 10-item Edinburgh Postnatal Depression Scale. British Journal of Psychiatry, 150, 782-786.

Read the precise copyright notice here: https://med.stanford.edu/content/dam/sm/ppc/documents/DBP/EDPS_text_added.pdf

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/Questionnaire-klgateway-children-puf-intro.md

### Scope and usage
KLGatewayChildrenPUF is used to define the Copenhagen Infant Mental Health Screening/Psykisk Udvikling OG Funktion (PUF). The link-ids from this questionnaire have to be referred in the QuestionnaireResponse, that holds the answers to an PUF questionnaire.

Note that this Questionnaire defines datatype (boolean and integer) This is done for each item in the Questionnaire. However, the FHIR-validator is not able to validate a QuestionnaireResponse using these rules (Because there is a very loose coupling between Questionnaire and QuestionnaireResponse in FHIR). We encourage vendors to ensure that responses are validated according to the rules described here.

### Copyright
Permissions obtained by Local Government Denmark(Kommunernes Landsforening) to include this questionnaire in this standard, does not mean that clincal systems and users that report to KLGateway using this standard automatically have permission. It is the sole responsibility of users to handle their own permissions.

Users may only use PUF if they first complete appropriate training as offered by University of Southern Denmark https://www.sdu.dk/da/sif/forskning/projekter/puf-programmet. The copyright should be respected. PUF was first described in: Ammitzbøll, J., Holstein, B. E., Wilms, L., Andersen, A., & Skovgaard, A. M. (2016). A new measure for infant mental health screening: development and initial validation. BMC pediatrics, 16, 1-10.

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/Questionnaire-klgateway-children-sdq11-17-intro.md

### Scope and usage
KLGatewayChildrenSDQ11-17 is used to define the Strength and Difficulties Questionnaire (SDQ), including impact supplement for self-completion by 11-17 year olds (SDQ S11-17). The questionnaire uses the official Danish translation. The link-ids from this questionnaire have to be referred in the QuestionnaireResponse, that holds the answers to a SDQ S11-17 questionnaire.

Note that this Questionnaire defines question type as 'choice' and datatype (string) This is done for each item in the Questionnaire. However, the FHIR-validator is not able to validate a QuestionnaireResponse using these rules (Because there is a loose coupling between Questionnaire and QuestionnaireResponse in FHIR). We encourage vendors to ensure that responses are validated according to the rules described here. In other words, only the exact strings provided in Questionnaire.item.answerOption.valueString should be accepted in the QuestionnaireResponse.

### Copyright
Permissions obtained by Local Government Denmark(Kommunernes Landsforening) to include this questionnaire in this standard, does not mean that clinical systems and users that report to KLGateway using this standard automatically have permission. It is the sole responsibility of users to handle their own permissions.

In Denmark, copyright for SDQ is handled by Komiteen for Sundhedsoplysning https://www.sundhedsoplysning.dk/. Below, the international copyright notice is pasted.

Please note that Strengths and Difficulties Questionnaires, whether in English or in translation, are copyright documents that are not in the public domain. As such, they may not be modified in any way (e.g. changing the wording of questions, adding questions or administering only subsets of questions). This is to ensure that the SDQ is fully comparable across studies and settings. Similarly, to ensure high quality and consistency, unauthorized translations are not permitted. Paper versions may be downloaded and subsequently photocopied without charge by individuals or non-profit organizations provided they are not making any charge to families.
Users are not permitted to create or distribute electronic versions for any purpose without prior authorization from youthinmind. If you are interested in making translations or creating electronic versions you MUST first contact support@youthinmind.com.

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/Questionnaire-klgateway-children-sdq4-10-intro.md

### Scope and usage
KLGatewayChildrenSDQ04-10 is used to define the Strength and Difficulties Questionnaire (SDQ), including impact supplement for completion by parents of 4-10 year olds (SDQ P4-10). The questionnaire uses the official Danish translation. The link-ids from this questionnaire have to be referred in the QuestionnaireResponse, that holds the answers to a SDQ P4-10 questionnaire.

Note that this Questionnaire defines question type as 'choice' and datatype (string) This is done for each item in the Questionnaire. However, the FHIR-validator is not able to validate a QuestionnaireResponse using these rules (Because there is a loose coupling between Questionnaire and QuestionnaireResponse in FHIR). We encourage vendors to ensure that responses are validated according to the rules described here. In other words, only the exact strings provided in Questionnaire.item.answerOption.valueString should be accepted in the QuestionnaireResponse.

### Copyright
Permissions obtained by Local Government Denmark(Kommunernes landsforening) to include this questionnaire in this standard, does not mean that clincal systems and users that report to KLGateway using this standard automatically have permission. It is the sole responsibility of users to handle their own permissions.

In Denmark, copyright for SDQ is handled by Komiteen for Sundhedsoplysning https://www.sundhedsoplysning.dk/. Below, the international copyright notice is pasted.

Please note that Strengths and Difficulties Questionnaires, whether in English or in translation, are copyright documents that are not in the public domain. As such, they may not be modified in any way (e.g. changing the wording of questions, adding questions or administering only subsets of questions). This is to ensure that the SDQ is fully comparable across studies and settings. Similarly, to ensure high quality and consistency, unauthorized translations are not permitted. Paper versions may be downloaded and subsequently photocopied without charge by individuals or non-profit organizations provided they are not making any charge to families.
Users are not permitted to create or distribute electronic versions for any purpose without prior authorization from youthinmind. If you are interested in making translations or creating electronic versions you MUST first contact support@youthinmind.com.

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/Questionnaire-klgateway-children-topi-intro.md

### Scope and usage
KLGatewayChildrenTOPI is used to define an early intervention tool, first developed by Socailstyrelsen. Its result is a 'green', 'yellow', 'red' score, which can be reported using this questionnaire. 

Note that this Questionnaire defines question type as 'choice' and datatype (string) This is done for each item in the Questionnaire. However, the FHIR-validator is not able to validate a QuestionnaireResponse using these rules (Because there is a loose coupling between Questionnaire and QuestionnaireResponse in FHIR). We encourage vendors to ensure that responses are validated according to the rules described here. In other words, only the exact strings provided in Questionnaire.item.answerOption.valueString should be accepted in the QuestionnaireResponse.

### Copyright
Please note that the copyright to this tool is held by Socialstyrelsen: https://www.sbst.dk/media/12903/guide-til-tidlig-opsporing-af-b%C3%B8rn-i-en-udsat-position.pdf".

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-bodyheight-intro.md

### Scope and usage
KLGatewayChildrenBodyHeight is used to document children’s length or height.

Observation.code.coding holds the valid values for the types of observations allowed. It is bound to a mandatory LOINC code: 8302-2 'Body height', and a mandatory set of SNOMED CT codes. The allowed SNOMED CT observation codes are:
 * Body height
 * Body height standing
 * Body height recumbent

Choose 'body height recumbent' as long as the child is lying down while being measured, and shift to 'body heigh standing' when the child starts to stand up. Use 'Body height' if body position is unknown. 

The Observation.value[x] is a valueQuantity. The unit is drawn from UCUM and is always 'cm'. The height should be given as a decimal point with one precision. The Danish Health Authorities recommend rounding to the nearest half centimeter. Remember to use '.' not ',' for decimal points.

The effective time of the observation is documented in Observation.effective[x].

Observation.category is populated to conform to national and international vital-sign/basic observation standards. The value should always be 'vital-signs'.

Observation.subject holds the reference to the child. Observation.encounter holds the reference to the encounter in which the observation is performed.

Notice that the status-attribute is mandatory. For normal use, just set to "final", if data is missing or another problem has occurred, follow the FHIR guidance to populate the field correctly. To indicate missing data, Observation.dataAbsentReason is used. Observation.dataAbsentReason is mandatory if no value is given. The value 'unknown' can always be used. It is also possible to use one of the other values in the ValueSet defined by the FHIR standard, if more details are nedded locally.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|højdeKode|Klasse som udtrykker, hvad der observeres.|Observation.code.coding|
|højdeResultat|Resultatet af observationen.|Observation.value[x]|
|højdeEnhed|Enheden på observationsresultatet.|Observation.valueQuantity.unit|
|højdeTid|Tidspunkt for observationen.|Observation.effective|
|højdeKategori|Klasse der udtrykker en overordnet kategori for hvad der observeres|Observation.category|
|højdeSubjekt|Den borger, for hvem der er foretaget en observation.|Observation.subject|
|højdeKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|højdeStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|
|højdeMangler|Klasse, der udtrykker hvorfor data mangler|Observation.dataAbsentReason|


---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-bodyweight-intro.md

### Scope and usage
KLGatewayChildrenBodyWeight is used to document children weight results.

Observation.code.coding, holds the valid values for the types of observations allowed. It is bound to a mandatory LOINC code: 29463-7 'Body weight', and a mandatory SNOMED CT code 'Body weight'.

The Observation.value[x] is a valueQuantity. The unit is drawn from UCUM and is 'g' or 'kg'. In small children, the weight should be given as an integer. In chool children, the weight should be given as a decimal point with one precision. Remember to use '.' not ',' for decimal points.

The effective time of the observation is documented in Observation.effective[x].

Observation.category is populated to conform to international vital-sign standards. The value should always be 'vital-signs'.

Observation.subject holds the reference to the child. Observation.encounter holds the reference to the encounter in which the observation is performed.

Notice that the status-attribute is mandatory. For normal use, just set to "final", if data is missing or another problem has occurred, follow the FHIR guidance to populate the field correctly.  To indicate missing data, Observation.dataAbsentReason is used. Observation.dataAbsentReason is mandatory if no value is given. The value 'unknown' can always be used. It is also possible to use one of the other values in the ValueSet defined by the FHIR standard, if more details are nedded locally.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|vægtKode|Klasse som udtrykker, hvad der observeres.|Observation.code.coding|
|vægtResultat|Resultatet af observationen.|Observation.value[x]|
|vægtEnhed|Enheden på observationsresultatet. |Observation.valueQuantity.unit|
|vægtTid|Tidspunkt for observationen.|Observation.effective|
|vægtSubjekt|Den borger, for hvem der er foretaget en observation.|Observation.subject|
|vægtKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|vægtStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|
|vægtMangler|Klasse, der udtrykker hvorfor data mangler|Observation.dataAbsentReason|
|vægtKategori|Klasse der udtrykker en overordnet katagori for hvad der observeres.|Observation.category|

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-citizen-intro.md

### Scope and usage
KLGatewayChildrenCitizen is used to identify the subject of a delivery report by the personal id number (CPR-nummer), which should go into Patient.identifier. The personal id number must be an official Danish CPR-nummer without hyphen. 

The model also identifies the managing organization that acts as the custodian of the reported data. The managing organization is identified by its official SOR code. The SOR codes should be documented in Patient.managingOrganization.identifier.

For most municipalities the SOR code will be the code for the municipality, but if a municipality delivers services in different departments using different record systems (thus having multiple custodians) the SOR codes of the department that acts as custodian is used.

Citizen resources can be used to identify both child and parents. However, the parents should only be includes when and if, they are relevant for the child reporting e.g. when reporting the mental state of the mother. In this case, a relatedPerson resource should also be included and referenced using Patient.link.

Patient.link is a reference to a relatedPerson object. In the context of the childrens database, it is used to link a grown-up citizen with the relatedPerson resource. The relatedPerson resource defines that this grown-up is actually the child's parent. In other words, a citizen object cannot hold information about relationships between citizens, for that we use the relatedPerson resource.

Patient.active is optional and assumed true, if not given. Patient.active = false is used to report  entered-in-error. However, this option should only be used, if the patient is fully unknown to the municipality system, and should never have been in the system at all.


### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter, der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|borgersCpr|Officielt cpr-nummer på borgeren|Patient.identifier|
|borgersJournalførendeOrganisation|Organisation som ejer journalen med oplysninger|Patient.managingOrganization.identifier|
|borgerErSammePersonSom|Reference til et pårørende-objekt, som er samme person som denne borger|Patient.link|
|borgerHarAktivJournal|Angiver om borger har en aktiv journal i den journalførende organisation eller ej|Patient.active|


---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-delivery-report-intro.md

## Scope and usage
This model is used to represent the reporting of children's data from the health nurse prevention program in Denmark.

The report is a FHIR Bundle that allows different resources to be grouped and handled as a collection. Bundle.entry references and includes each of the Resource instances. The valid resources in this bundle are the ones defined in this implementation guide. No others are allowed.

Bundle.timestamp holds the time where the bundle is collected or sent.

Bundle.meta.profile specifies the profile of this delivery report. It should always be 'http://fhir.kl.dk/children/StructureDefinition/klgateway-children-delivery-report'.

For some encounter types, specific observations are required. This report has implemented rules known as FHIR invariants that check, that these conditions holds true. The implemented invariants are:

* gateway-children-report-parent-mental-state
* gateway-children-report-parent-social-status
* gateway-children-report-support-network
* gateway-children-report-social-interaction
* gateway-children-report-parent-relationship
* gateway-children-report-weight
* gateway-children-report-height
* gateway-children-report-head-circumference
* gateway-children-report-passive-smoking
* gateway-children-report-nicotine
* gateway-children-report-nutrition
* gateway-children-report-communication
* gateway-children-report-sleep
* gateway-children-report-motor-function
* gateway-children-report-physical-activity
* gateway-children-report-hearing
* gateway-children-report-sight

Look up narratives and FHIR-paths for these invariants in the bottom of this page.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|indberetningsrapportIndhold|Hver af indberetningsrapportens indholds-ressourcer|Bundle.entry|
|indberetningsrapportTid|Tid hvor rapporten samles eller afsendes|Bundle.timestamp|
|indberetningsrapportProfil|Den profil som dette bundle overholder|Bundle.meta.profile|


---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-encounter-intro.md

### Scope and usage
KLGatewayChildrenEncounter is used whenever a child with or without family members meet the health nurse (sundhedsplejerske) in a Danish municipality context.

The Encounter.type.coding attribute is used to classify the type of activities that occur at the encounter. The encounters have been classified according to the guidance document from the Health Authorities (Sundhedsstyrelsen).

* Graviditetsbesøg
* Barselsbesøg
* Etableringsbesøg
* Andet besøg inden første måned
* Besøg hos det ca. 2 måneder gamle barn
* Besøg hos det 4-6 måneder gamle barn
* Besøg hos det 8-11 måneder gamle barn
* Almindelig forebyggende småbørnskontakt 
* Behovskontakt med småbørnssundhedsplejen
* Indskolingsundersøgelse
* Undersøgelse i mellemtrin, med måling
* Udskolingsundersøgelse
* Almindelig forebyggende skolebørnskontakt
* Behovskontakt med skolesundhedsplejen

Sometimes, it might be difficult to apply the correct type to an encounter. The following guiding principles exists:
* The encounter in which most of the activities of a certain visit or examination (as described in the guidance document) is carried out, is classified as that type of visit or examination. This holds true even if the guidance document describes this encounter or examination for a child of a certain age, and the child examined is in fact younger or older. (fx hvis man besøger et 12 måneder gammelt barn, og udfører de ting sundhedsstyrelsen vejledning beskriver for 'Besøg hos det 8-11 måneder gamle barn', så klassificeres det som 'Besøg hos det 8-11 måneder gamle barn'.)
* If certain mandatory activities are not carried out, and another encounter is planned and completed to account for this, classify this secondary encounter as 'Almindelig forebyggende småbørnskontakt' or 'Almindelig forebyggende skolebørnskontakt'.
* If local encounter types exists, report them as the most specific type which is still true. Be especially aware if the reason for the encounter is prevention, or a specific need in the family. E.g. a municipality may have a specific encounter type to help mothers that have problems with breastfeeding. These should be reported as 'Behovskontakt med småbørnssundhedsplejen'. If the municipality has regular extra visits with all children in the 3rd month, they should be reported as 'Almindelig forebyggende småbørnskontakt'.

In the context of the children database, only encounters actually carried out should be documented. Consequently, for most intends and purposes the encounter.status should be 'finished'. However, if errors have been reported use the 'entered-in-error' status as described by the FHIR-documentation.

Encounter.class is mandatory in FHIR. In Danish municipalities the values are used as follows.
* Visits in citizens homes have the code 'HH' Home health, the code is also used for services that are not strictly health related e.g. help with cleaning. This code is also used, even if the activities stretch outside the citizens residence e.g. a physiotherapist that want to see a citizen walk outside, or a social worker helping with shopping activities.
* Sessions where the citizens visit municipality facilities e.g. for training or health prevention have the code 'AMB' Ambulatory.
* Encounters delivered as a screen visit should be registered as 'Skærmbesøg'.
* Encounters delivered using a phone should be registered as 'Telefonisk'

For school nurse encounters, the Danish school-code should be registered as well, using Encounter.location that relates to a Location resource. Note that the school code should be registered even though the encounter does not take place at the school. FHIR Locations can be used to describe a more abstract location, and as such the school nurse works in the context of a school when seeing the child. If the child does not have a school affiliation, a school-code should not be registered.

The time of the encounter is documented in Encounter.period.start, and it is mandatory. The end time is not mandatory. If Encounter.period.end is reported it may be either planned end time or actual end time.

Encounter.subject relates to the subject that the encounter is about. In the context of the children database, primarily the children's encounters are documented. This should be respected even though many visits are directed at the family as a whole. However, before the child is born, this is not possible.  For pregnancy visits/'Graviditetsbesøg', the encounter is linked to one of the parents (typically the mother). For need-based encounters, they should be linked to citizen who has the intervention, whether this is the child, one of the parents or both. Consequently, one visit might result in more than one encounter if both parent and child has a need-based intervention going on.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|borgerkontakttype|Klasse der udtrykker typen af aktivitet der gennemføres ved kontakten|Encounter.type.coding|
|borgerkontaktstatus|Klasse der indikerer om kontakten er igangværende, eller om dokumentationen repræsentere en fremtidig intention eller er historisk|Encounter.status|
|borgerkontaktklasse|Klasse, der udtrykker en generel kategori for kontakten, som rækker ud over den kommunale kontekst.|Encounter.class|
|borgerkontaktstart|Kontaktens start, eller planlagte start|Encounter.period.start|
|borgerkontaktslut|Kontaktens sluttidspunkt, eller planlagte sluttidspunkt|Encounter.period.end|
|borgerkontaktsubjekt|Den borger kontakten vedrører|Encounter.subject|
|borgerkontaktBaseretPå|Den behovsindsats, der er grunden til at denne kontakt udføres|Encounter.extension:basedOnIntervention|

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-exam-result-intro.md

### Scope and usage
KLGatewayChildrenExamResult is a profile for holding structured qualitative history and examination findings. Note that each finding should have its own instance of KLGatewayChildrenExamResult, and that nothing should be reported if things are normal.

Observation.code.coding, always hold a fixed SNOMED CT code, that states that this is a history and/or examination observation.

Observation.value[x] is a coded value Observation.valueCodeableConcept. Values should be derived from the required ValueSet.

The effective time of the observation is documented in Observation.effectiveDateTime, all results should use the time, where the health nurse has an encounter with the family or child, not try to guess the time where a problem first occurred. Note that only current findings are registered, making this a correct use of efffectiveDateTime.

Observation.subject holds the reference to the child or parent, who is observed. Observation.encounter holds the reference to the encounter in which the observation is performed. For parent's observations do not reference the child's encounter, just leave it blank.

Notice that the status-attribute is mandatory. For normal use, just set to "final". If data is missing or another problem has occurred, follow the FHIR guidance to populate the field correctly.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|undersøgelsesKode|Klasse som udtrykker, hvad der observeres.|Observation.code.coding|
|undersøgelsesResultat|Resultatet af observationen.|Observation.value[x]|
|undersøgelsesTid|Tidspunkt eller periode for observationen.|Observation.effective|
|undersøgelsesSubjekt|Den borger, for hvem der er foretaget en observation.|Observation.subject|
|undersøgelsesKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|undersøgelsesstatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-feeding-observation-intro.md

### Scope and usage
KLGatewayChildrenFeeding is used to document how small children are fed. It is used for observations of children’s breast feeding, partial breastfeeding and other feeding method periods. Feeding status can be registered as well.

Observation.code.coding is bound to a fixed municipality code 'ernæring' and SNOMED CT code 'Infant feeding method'.

Observation.value[x] is a coded value Observation.valueCodeableConcept, which should be drawn from the required ValueSet. The valid values are:
* 'Fuldamning, inklusiv modermælk på flaske'
* 'Ammes primært'
* 'Ammes som supplement til anden kost'
* 'Modermælkserstatning og/eller overgangskost'
* 'Udelukkende familiens mad'

The effective time of the observation is documented in Observation.effective[x], which in this feeding method model have the option of two different datatypes. EffectivePeriod is used to set the start and end date of periods where a certain feeding method is used. EffectiveDateTime is used to set the date for an actual status of feeding method. I.e. when a health nurse visits the family, she has to collect information about in which period each feeding method is used, and get a status about what feeding method is used today. If a period is started, but not ended yet, EffectivePeriod.end is not populated. Note that this means that more than one instance of the feeding Observation might be reported for the same visit.

Observation.subject holds the reference to the child, who is observed. Observation.encounter holds the reference to the encounter in which the observation is performed.

Notice that the status-attribute is mandatory. For normal use, just set to "final", if data is missing or another problem has occurred, follow the FHIR guidance to populate the field correctly. To indicate missing data, Observation.dataAbsentReason is used. Observation.dataAbsentReason is mandatory if no value is given. The value 'unknown' can always be used. It is also possible to use one of the other values in the ValueSet defined by the FHIR standard, if more details are nedded locally.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|madningsobservationsKode|Klasse som udtrykker, hvad der observeres.|Observation.code.coding|
|madningsobservationsResultat|Resultatet af observationen.|Observation.value[x]|
|madningsobservationTid|Tidspunkt eller periode for observationen.|Observation.effective|
|madningsobservationSubjekt|Den borger, for hvem der er foretaget en observation.|Observation.subject|
|madningsobservationKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|madningsobservationStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|
|madningsobservationMangler|Klasse, der udtrykker hvorfor data mangler|Observation.dataAbsentReason|

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-headcircum-intro.md

### Scope and usage
KLGatewayChildrenHeadCircumference is used to document children’s head circumference.

Observation.code.coding holds the valid values for the types of observations allowed. It is bound to a mandatory LOINC code: 9843-4 'Head Occipital-frontal circumference', and a SNOMED CT code 363812007 'Head circumference (observable entity)'.

The Observation.value[x] is a valueQuantity. The unit is drawn from UCUM and is always 'cm'. The head circumference should be given as a decimal point with one precision.

The effective time of the observation is documented in Observation.effective[x].

Observation.category is populated to conform to international vital-sign standards. The value should always be 'vital-signs'.

Observation.subject holds the reference to the child. Observation.encounter holds the reference to the encounter in which the observation is performed.

Notice that the status-attribute is mandatory. For normal use, just set to "final", if data is missing or another problem has occurred, follow the FHIR guidance to populate the field correctly. To indicate missing data, Observation.dataAbsentReason is used. Observation.dataAbsentReason is mandatory if no value is given. The value 'unknown' can always be used. It is also possible to use one of the other values in the ValueSet defined by the FHIR standard, if more details are nedded locally.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|hovedomkredsKode|Klasse som udtrykker, hvad der observeres.|Observation.code.coding|
|hovedomkredsResultat|Resultatet af observationen.|Observation.value[x]|
|hovedomkredsEnhed|Enheden på observationsresultatet.|Observation.valueQuantity.unit|
|hovedomkredsTid|Tidspunkt for observationen.|Observation.effective|
|hovedomkredsKategori|Klasse der udtrykker en overordnet katagori for hvad der observeres|Observation.category|
|hovedomkredsSubjekt|Den borger, for hvem der er foretaget en observation.|Observation.subject|
|hovedomkredsKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|hovedomkredsStatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|
|hovedomkredsMangler|Klasse, der udtrykker hvorfor data mangler|Observation.dataAbsentReason|


---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-indicator-intro.md

### Scope and usage
KLGatewayChildrenIndicator is an abstract profile (i.e. cannot be instantiated). Indicators are characterized from the children’s standard, where a whole area of concern is evaluated using a two-, three- or four-point scale of no problems, potential concern and concerns respectively. A number of mandatory observations/evaluations inherits from this abstract profile. The profiles are:

* Social interaction (Same profile for small children and school children)
* Parent-child relationship (Only small children)
* Parents mental state (Only small children)
* Parents social status (Only small children)
* Social support network (Only small children)
* Passive smoking (Same profile for small children and school children)
* Use of Nicotine (Only school children) 
* Communication (Same profile for Small children and school children)
* Sleep (Only small children)
* Motor function (Same profile for Small children and school children)
* Nutrition (Only School children)
* Physical activity (Only school children)
* Hearing (Only school children)
* Sight (Only school children)

 Observation.code.coding, holds the valid values for the types of indicators. It is bound to a mandatory set of codes reflecting the areas mentioned above. The codes are owned by the municipalities and defined specifically for the children database.

For each indicator, Observation.value[x] is a coded value Observation.valueCodeableConcept. Each of the profiles that inherits from the abstract indicator defines the required ValueSets, which contain children database codes.

The effective time of the observation is documented in Observation.effectiveDateTime, all indicators should use the time, where the health nurse has an encounter with the family or child, not the time where a problem first occurred.

Observation.subject holds the reference to the child or parent, who is observed. Observation.encounter hold the reference to the encounter in which the observation is performed. For parent observations do not reference the child’s encounter, just leave it blank.

Notice that the status-attribute is mandatory. For normal use, just set to "final", if data is missing or another problem has occurred, follow the FHIR guidance to populate the field correctly. 

To indicate missing data, Observation.dataAbsentReason is used. The value 'unknown' can always be used. It is also possible to use one of the other values in the ValueSet defined by the FHIR standard, if more details are nedded locally.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|indikatorKode|Klasse som udtrykker, hvad der observeres.|Observation.code.coding|
|indikatorResultat|Resultatet af observationen.|Observation.value[x]|
|indikatorTid|Tidspunkt eller periode for observationen.|Observation.effective|
|indikatorSubjekt|Den borger, for hvem der er foretaget en observation.|Observation.subject|
|indikatorKontakt|Den kontakt, hvor observationen er foretaget.|Observation.encounter|
|indikatorstatus|Klasse der udtrykker, hvor i sin proces, observationen er.|Observation.status|
|indikatorMangler|Klasse, der udtrykker hvorfor data mangler|Observation.dataAbsentReason|


---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-intervention-intro.md

### Scope and usage
The KLGatewayChildrenIntervention for the FBU standard is used whenever a need-based intervention is planned for a child or parent in Danish municipalities.

CarePlan.activity.detail.code.coding holds the intervention code, which has to come from the official list of interventions.

It is important to distinguish correctly between the dates and times stated in the model. CarePlan.period.start is when the PlannedIntervention was authorized (bevillingstid). The planned end-date is CarePlan.period.end, unless the date has already occurred and the status is 'completed', then it is the actual end-date. It is not necessary to report a planned end-date, if it is unknown. All dates may be reported with or without time of day.

Notice that some interventions have a timeframe, in which several encounters are delivered. Others are planned and delivered without that eliciting extra encounters for the child or parents (or at least without specific documentation of it). The last mentioned may be reported with the same CarePlan.period.start and CarePlan.period.end, or with only a start-date, and there is no requirement to report associated encounters. This holds true for the interventions related to parent-education (forældreuddannelse), parent-group (forældregruppe) and collaboration/referrals (samarbejdsindsatser inkl. henvisninger).

CarePlan.status and CarePlan.intent are mandatory in the FHIR CarePlan resource. CarePlan.intent is always 'plan' in this implementation guide. CarePlan status should be either 'unknown', 'entered-in-error', or the status of the intervention at the time of reporting. Note that the meaning of 'active' is "ready to be acted upon", so it does not signify that the first activity has occurred.

CarePlan.activity.detail.status is also mandatory, and all the statuses in the FHIR ValueSet may be used, however 'unknown' is permitted from the time where the intervention occurs in the record until its completion. It is recommended not to use 'entered-in-error' - if the CarePlan is entered-in-error use CarePlan.status.

CarePlan.subject references the citizen, that receives the interventions. Note that some interventions should be linked to the child, and others to the parents.

CarePlan.activity.detail.reasonCode.coding may hold one or more condition-codes. Though not mandatory to use, conditions provide a structured way of linking what challenges a family have, with the intervention provided.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|indsatsskode|Udtrykker hvilken klasse indsatsen tilhører.|CarePlan.activity.detail.code.coding|
|indsatsbevillingstid|Tidspunktet for hvornår indsatsen er bevilget|CarePlan.period.start|
|indsatsafslutningstid|Tidspunktet for hvornår indsatsen er afsluttet, eller planlægges afsluttet|CarePlan.period.end|
|indsatsstatus|Indikerer om indsatsplanen er klar til at blive handlet på, om dokumentationen repræsentere en fremtidig intention eller er historisk.|CarePlan.status|
|indsatshensigt|Indikerer niveauet af autorisation og hvor langt i planlægningen indsatsen er|CarePlan.intent|
|indsatsAktivitetsstatus|Indikerer om indsatsen er igangsat, eller om den ikke er startet, er aflyst, eller er færdiggjort|CarePlan.activity.detail.status|
|indsatssubjekt|Den borger som den planlagte indsats retter sig mod|CarePlan.subject|
|indsatsBegrundelse|Kode for den eller de tilstande, der ligge til grund for denne behovsindsats| CarePlan.activity.detail.reasonCode.coding|


---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-location-intro.md

### Scope and usage
KLGatewayChildrenLocation is used to identify the school of the child.

Location.identifier holds the Danish institution identifier. Only schools are permitted, which result in Location.type always having the value 'SCHOOL'.

Location.status is optional and assumed active, if not given. Location.status = inactive is used to report entered-in-error. However, this option should only be used, if the school is fully unknown to the municipality system, and should never have been in the system at all.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter, der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|Lokationsid|Lokations-id, her altid skolekoden, som kan findes i institutionsregisteret|Location.identifier|
|Lokationstype|Typen af lokation (som altid er sat til skole)|Location.type|
|Lokationsstatus|Angiver om lokationen er aktiv |Location.status|

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-questionnaire-intro.md

### Scope and usage
This questionnaire profile is used for all questionnaires in this implementation guide. It is a small extension of the FHIR Questionnaire resource. It includes two standard-extensions that allow minimum and maximum values to be specified for questionnaire-items.

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-questionnaire-response-intro.md

### Scope and usage
This QuestionnaireResponse is used to report all answers to questionnaires to KLGateway.

The QuestionnaireResponse refers the Questionnaire in QuestionnaireResponse.questionnaire using a canonical reference, which means that the Questionnaire itself does not have to be reported to KLGateway.

QuestionnaireResponse.subject is the citizen, who the Questionnaire is about.

This profile includes the extension findingInformer QuestionnaireResponse.extension:FindingInformer. It is an optional attribute, which may be used to describe who is answering the Questionnaire.

QuestionnaireResponse.authored holds the time that the questionnaire is answered.

Each item refers the appropriate linkId from the Questionnaire-definition in QuestionnaireResponse.item.linkId.

Answers can be given in QuestionnaireResponse.item.answer.value[x] using integer, boolean or string. These should follow the rules of the Questionnaire-definition. Note that strings are also limited a minimum of 1 character, and maximum of 30 characters.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|SpørgeskemaSvarSpørgeskemaDefinition|Reference til definitionen på det spørgeskema der besvares.|QuestionnaireResponse.questionnaire|
|SpørgeskemaSvarSubjekt|Den borger, som spørgeskemasvaret omhandler|QuestionnaireResponse.subject|
|SpørgeskemaSvarKilde|Klasse der udtrykker kilden til spørgeskemasvaret dvs. den der reelt har besvaret spørgsmålene.|QuestionnaireResponse.extension:FindingInformer|
|SpørgeskemaSvarTid|Tidspunkt for spørgeskemabesvarelsen|QuestionnaireResponse.authored|
|SpørgeskemaSvarPunktId|Id for det enkelte punkt/spørgsmål i spørgeskemaet|QuestionnaireResponse.item.linkId|
|SpørgeskemaSvarPunktSvar|Svaret på det enkelte punkt/svar i spørgeskemaet|QuestionnaireResponse.item.answer.value[x]|

---

File: repos/hl7dk_SLASH_kl-children/input/pagecontent/StructureDefinition-klgateway-children-related-parent-intro.md

### Scope and usage
KLGatewayChildrenRelatedParent is used to identify the relationship between a child and its parents. Include Citizen and RelatedPerson resources for the parents only when relevant to the child’s report.

In this implementation:

* RelatedPerson.patient refers to the child.
* RelatedPerson.relationship contains a code that specifies the relationship type. The relationship code is always 'PRN' for parent.

It might seem counter intuitive that this resource does not have a cpr identifier, or other identifier. However, such identifiers are stored in the Citizen resources of the parents, which links back to the RelatedPerson resource. Therefore, duplicating this information in the RelatedPerson resource is unnecessary.

The RelatedPerson.active attribute is optional and assumed to be true unless otherwise specified. Setting RelatedPerson.active to false should only be used to indicate that the entry was made in error and that the relationship does not exist in the municipal system and should not have been recorded.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter, der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|forælderHarBarn|Relation til den borger, der er barn af denne forælder|RelatedPerson.patient|
|forælderType|Typen af relation (som altid er sat til forælder)|ReleatedPerson.relationship|
|forældrerelationHarAktivJournal|Angiver om relationen er sand i den journalførende organisation eller ej|RelatedPerson.active|

---

