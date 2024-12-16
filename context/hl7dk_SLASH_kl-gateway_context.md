File: repos/hl7dk_SLASH_kl-gateway/input/fsh/capabilitystatement.fsh

Instance: klgateway
InstanceOf: CapabilityStatement
Usage: #definition
* name = "RestServer"
* status = #active
* date = "2023-06-08T00:29:49.294+02:00"
* description = "The Care Gateway (henceforth gateway) is a service that recieves care delivery reports from the municipalities and asynchronously forwards them other data sources such as FLIS and SEI2. Care delivery reports follows the FHIR format specified in the KL-Gateway FHIR Implementation Guide (IG)."
//* publisher = "Not provided"
* kind = #instance
* software.name = "Trifork Gateway FHIR Server"
* software.version = "6.2.5"
* implementation.description = "Trifork Gateway FHIR Server"
//* implementation.url = "http://localhost:8080/fhir"
* fhirVersion = #4.0.1
* format[0] = #application/fhir+xml
* format[+] = #xml
* format[+] = #application/fhir+json
* format[+] = #json
* format[+] = #application/x-turtle
* format[+] = #ttl
* rest.mode = #server
* rest.resource[0].type = #Bundle
* rest.resource[=].profile = "http://gateway.kl.dk/1.0/StructureDefinition/klgateway-care-delivery-report"
* rest.resource[=].interaction[0].code = #search-type
* rest.resource[=].interaction[+].code = #update
* rest.resource[=].interaction[+].code = #vread
* rest.resource[=].interaction[+].code = #read
* rest.resource[=].searchInclude[0] = "*"
* rest.resource[=].searchInclude[+] = "Bundle:composition"
* rest.resource[=].searchInclude[+] = "Bundle:message"
* rest.resource[=].searchRevInclude[0] = "Bundle:composition"
* rest.resource[=].searchRevInclude[+] = "Bundle:message"
* rest.resource[=].searchParam[0].name = "_content"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a fulltext search"
* rest.resource[=].searchParam[+].name = "_filter"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's data using a filter"
* rest.resource[=].searchParam[+].name = "_has"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Return resources linked to by the given target"
* rest.resource[=].searchParam[+].name = "_id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "The ID of the resource"
* rest.resource[=].searchParam[+].name = "_language"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "The language of the resource"
* rest.resource[=].searchParam[+].name = "_lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Only return resources which were last updated as specified by the given range"
* rest.resource[=].searchParam[+].name = "_profile"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given profile"
* rest.resource[=].searchParam[+].name = "_security"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given security labels"
* rest.resource[=].searchParam[+].name = "_source"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given source value (Resource.meta.source)"
* rest.resource[=].searchParam[+].name = "_tag"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Search for resources which have the given tag"
* rest.resource[=].searchParam[+].name = "_text"
* rest.resource[=].searchParam[=].type = #string
* rest.resource[=].searchParam[=].documentation = "Search the contents of the resource's narrative using a fulltext search"
* rest.resource[=].searchParam[+].name = "composition"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The first resource in the bundle, if the bundle type is \"document\" - this is a composition, and this parameter provides access to search its contents"
* rest.resource[=].searchParam[+].name = "identifier"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Persistent identifier for the bundle"
* rest.resource[=].searchParam[+].name = "message"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "The first resource in the bundle, if the bundle type is \"message\" - this is a message header, and this parameter provides access to search its contents"
* rest.resource[=].searchParam[+].name = "timestamp"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "When the bundle was assembled"
* rest.resource[=].searchParam[+].name = "type"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "document | message | transaction | transaction-response | batch | batch-response | history | searchset | collection"
* rest.resource[+].type = #OperationDefinition
* rest.resource[=].profile = "http://hl7.org/fhir/StructureDefinition/OperationDefinition"
* rest.resource[=].interaction.code = #read
* rest.resource[=].searchInclude = "*"
* rest.resource[=].searchRevInclude[0] = "Bundle:composition"
* rest.resource[=].searchRevInclude[+] = "Bundle:message"


---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/citizen.fsh

Profile: KLGatewayCareCitizen
Parent: http://hl7.dk/fhir/core/StructureDefinition/dk-core-patient
Id: klgateway-care-citizen
Title: "CareCitizen"
Description: "Administrative information about a citizen receiving care or care related services."
* identifier 1..1
* identifier[x-ecpr] 0..0
* identifier[d-ecpr] 0..0
* identifier[cpr] 1..1
* deceasedDateTime 0..0
* deceasedBoolean 0..1 //should be changed to 1..1
* active ..1
* name[official] 0..0
* name ..0
* telecom ..0
* gender ..0
* birthDate ..0
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
* link ..0
* obeys data-about-deceased-citizen-warning

* identifier ^short = "[DK] borgerCprNummer"
* deceasedBoolean ^short = "[DK] borgerErDød"
* managingOrganization ^short = "[DK] borgerJournalførendeOrganisation"
* active ^short = "[DK] harAktivJournal"

Instance: TestPerson
InstanceOf: KLGatewayCareCitizen
Description: "Test person used in the examples of the implementation guide."
* identifier.use = #official
* identifier.value = "0101010101"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "123456789012345"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"
* deceasedBoolean = false

Instance: TestPersonError
InstanceOf: KLGatewayCareCitizen
Description: "Test person used in the examples of the implementation guide."
* identifier.use = #official
* identifier.value = "0101010101"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "123456789012345"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"
* deceasedBoolean = true

Invariant: data-about-deceased-citizen-warning
Description: "Warning: Data about deceased citizen is reported to kl-gateway"
Severity: #warning //To be changed to error
Expression: "(deceased.empty()) or (deceased.ofType(boolean) = false)"




---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/citizensOwnObservation.fsh

Profile: KLGatewayCareCitizensOwnObservation
Parent: Observation
Id: klgateway-care-citizens-own-observation
Title: "CareCitizensOwnObservation"
Description: "Measurements and simple assertions made about a patient by the patient."
* identifier ..0
* basedOn ..0
* partOf ..0
* category ..0
* status ^definition = "The status of the result value. Will typically be final or entered-in-error."
* code 1..1
* code from http://fhir.kl.dk/term/ValueSet/KLCitizenObservationCodesFSIII (required)
* code.coding.version ..0
* code.coding.display ..0
* code.coding.userSelected ..0
* code.text ..0
* subject only Reference(klgateway-care-citizen)
* subject ^type.aggregation = #bundled
* focus 1..1
* focus only Reference(KLGatewayCareCondition or KLGatewayCareMatterOfInterestObservation)
* focus ^type.aggregation = #bundled
* encounter ..0
* effective[x] 1..1
* effective[x] only dateTime
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from http://fhir.kl.dk/term/ValueSet/KLCitizenObservationResultCodesFSIII
* value[x].coding.version ..0
* value[x].coding.display ..0
* value[x].coding.userSelected ..0
* value[x].text ..0
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
* obeys klgateway-citizen-observation-code-and-value-must-match
* obeys klgateway-focus-must-be-home-care-condition-or-area

//Danish descriptions
* code.coding ^short = "[DK] borgervurderingskode"
* value[x].coding ^short = "[DK] borgervurderingsresultat"
* subject ^short = "[DK] borgervurderingssubjekt"
* focus ^short = "[DK] borgervurderingsfokus"
* effective[x] ^short = "[DK] borgervurderingstid"
* status ^short = "[DK] borgervurderingsstatus"

Invariant: klgateway-citizen-observation-code-and-value-must-match
Description: "The value of the observation shall be member of the valueset matching the code of the observation"
Severity: #error
Expression: "((code.coding.code = 'C') and ((value.ofType(CodeableConcept)).memberOf('http://fhir.kl.dk/term/ValueSet/KLPerformanceLevelCodesFSIII')))
          or ((code.coding.code = 'D') and ((value.ofType(CodeableConcept)).memberOf('http://fhir.kl.dk/term/ValueSet/KLImportanceLevelCodesFSIII')))"

Invariant: klgateway-focus-must-be-home-care-condition-or-area
Description: "The focus shall be a home care condition or a home care matter of interest"
Severity: #error
Expression: "focus.resolve().code.coding.memberOf('http://fhir.kl.dk/term/ValueSet/KLConditionCodesHomeCare')
          or focus.resolve().code.coding.memberOf('http://fhir.kl.dk/term/ValueSet/KLHomeCareAreasFSIII')"
                                                   

Instance: UdfoererSelvVaskeSig
InstanceOf: KLGatewayCareCitizensOwnObservation
Description: "Citizens own observation regarding abililty to wash himself"
* status = #final
* code = $FSIII#C
* subject = Reference(TestPerson)
* focus = Reference(VaskeSigLetteBegraensninger)
* effectiveDateTime = 2020-08-14
* valueCodeableConcept = $FSIII#C1

Instance: OpleverIkkeBegraensningerMedVaskeSig
InstanceOf: KLGatewayCareCitizensOwnObservation
Description: "Citizens own observation regarding the importance of the limitations on the ability to wash himself"
* status = #final
* code = $FSIII#D
* subject = Reference(TestPerson)
* focus = Reference(VaskeSigLetteBegraensninger)
* effectiveDateTime = 2020-08-14
* valueCodeableConcept = $FSIII#D1

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/codes.fsh

Alias: $FSIII = urn:oid:1.2.208.176.2.21

ValueSet: FSIIICareConditions
Id: FSIIICareConditions
Title: "FSIIICareConditions"
Description: "Conditions defined by FSIII for nursing and home care"
* ^experimental = false
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionCodesNursing
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLConditionCodesHomeCare

ValueSet: FSIIICareGoalTypes
Id: FSIIICareGoalTypes
Title: "FSIIICareGoalTypes"
Description: "Goal Types defined by FSIII for nursing and home care"
* ^experimental = false
* $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4

ValueSet: FSIIICareInterventions
Id: FSIIICareInterventions
Title: "FSIIICareInterventions"
Description: "Interventions defined by FSIII for nursing and home care"
* ^experimental = false
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLNursingInterventionsFSIII
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLHomeCareInterventionsFSIII

ValueSet: FSIIICareMatterOfInterests
Id: FSIIICareMatterOfInterests
Title: "FSIIICareMatterOfInterests"
Description: "Matters of Interests (areas) defined by FSIII for nursing and home care"
* ^experimental = false
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLNursingAreasFSIII
* include codes from valueset http://fhir.kl.dk/term/ValueSet/KLHomeCareAreasFSIII

CodeSystem: LocallyDefinedInterventions
Id: LocallyDefinedInterventions
Title: "LocallyDefinedInterventions"
Description: "Coding system to indicate a code defined locally in the managing organization"
* ^content = #fragment
* ^experimental = false
* ^caseSensitive = true

ValueSet: KLGatewayCareMatterOfInterestValues
Id: KLGatewayCareMatterOfInterestValues
Title: "KLGatewayCareMatterOfInterestValues"
Description: "Values of Matters of Interests (areas)"
* ^experimental = false
* $FSIII#B6
* $FSIII#d7ff926a-4955-478f-b300-0b0ec0785013

ValueSet: EncounterClassCodes
Title: "KontaktKlasseKoder"
Description: "Codes to describe the mode of delivery of an encounter"
* ^experimental = false
* include codes from valueset http://terminology.hl7.org/ValueSet/v3-ActEncounterCode
* $KLCommonCodes#1b55a4b0-1156-4f58-b2df-b5c6014d9048 //"Telefonisk" KLCommonCareSocialCodes
* $KLCommonCodes#124be95d-6924-4609-9d2a-e7c73ae3ab3d //"Skærmbesøg" KLCommonCareSocialCodes

ValueSet: DeliveryTypes
Id: DeliveryTypes
Title: "DeliveryTypes"
Description: "The delivery context types"
* ^experimental = false
* include codes from system $KLCommonCodes where concept descendent-of #3f79cee2-b148-4f2c-9cbd-387820e74685

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/completedIntervention.fsh

Profile: KLGatewayCareCompletedIntervention
Parent: Procedure
Id: klgateway-care-completed-intervention
Title: "CareCompletedIntervention"
Description: "Documentation for completed interventions (activities related to one and only one encounter) in Danish municipalities"
* identifier ..0
* instantiatesCanonical ..0
* instantiatesUri ..0
* basedOn ..0
* partOf ..0
* statusReason ..0
* category ..0
* code 1..1
* code.coding ^slicing.discriminator.type = #value
* code.coding ^slicing.discriminator.path = "system"
* code.coding ^slicing.rules = #closed
* code.coding contains level2 1..1 and level3 0..1 MS
* code.coding[level2].system = "urn:oid:1.2.208.176.2.21"
* code.coding[level2] from FSIIICareInterventions
* code.coding[level3].system = "http://fhir.kl.dk/gateway/CodeSystem/LocallyDefinedInterventions"
* code.coding[level3].code 1..1
* code.coding[level3].display 1..1
* code.coding[level3] ^definition = "Shall contain locally defined code if it is a locally defined level 3 intervention"
* subject only Reference(KLGatewayCareCitizen)
* subject ^type.aggregation = #bundled
* encounter ..0
* performed[x] only dateTime
* performedDateTime 1..
* recorder ..0
* asserter ..0
* performer ..0
* location ..0
* reasonCode ..0
* reasonReference only Reference(KLGatewayCareCondition)
* reasonReference MS
* reasonReference ^definition = "Reason for this intervention. Must contain all conditions known to be addressed by this intervention"
* reasonReference ^type.aggregation = #bundled
* bodySite ..0
* outcome ..0
* report ..0
* complication ..0
* complicationDetail ..0
* followUp ..0
* note ..0
* focalDevice ..0
* usedReference ..0
* usedCode ..0

//Danish descriptions
* status ^short = "[DK] leveretIndsatsstatus (completed | entered-in-error)"
* subject ^short = "[DK] leveretIndsatsSubjekt"
* code.coding ^short = "[DK] leveretIndsatsKode"
* performedDateTime ^short = "[DK] leveretIndsatsStart"
* reasonReference ^short = "[DK] leveretIndsatsbegrundelse"
* encounter ^short = "[DK] leveretIndsatsKontakt"


Instance: Saarbehandling
InstanceOf: KLGatewayCareCompletedIntervention
Description: "Completed intervention doing wound treatment according to FSIII on the test person"
* status = #completed
* code.coding[level2].system = "urn:oid:1.2.208.176.2.21"
* code.coding[level2].code = #G1.39
* subject = Reference(TestPerson)
* performedDateTime = 2020-08-14T10:15:00Z

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/condition.fsh

Alias: $ConditionClinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $ConditionCategory = http://terminology.hl7.org/CodeSystem/condition-category
Alias: $VerificationStatus = http://terminology.hl7.org/CodeSystem/condition-ver-status

Profile: KLGatewayCareCondition
Parent: Condition
Id: klgateway-care-condition
Title: "CareCondition"
Description: "Detailed information about conditions."
* identifier ..0
* clinicalStatus.coding 1..1
* clinicalStatus.coding.version ..0
* clinicalStatus.coding.display ..0
* clinicalStatus.coding.userSelected ..0
* clinicalStatus.text ..0
* verificationStatus MS
* verificationStatus ^definition = "Shall be present if entered-in-error. Assumed to be confirmed if absent."
* verificationStatus.coding 1..1
* verificationStatus.coding.version ..0
* verificationStatus.coding.display ..0
* verificationStatus.coding.userSelected ..0
* verificationStatus.text ..0
* category ..1 MS
* category ^definition = "Category must be problem-list-item for active and left out for inactive conditions"
* category.coding 1..1
* category.coding.code = #problem-list-item
* category.coding.version ..0
* category.coding.display ..0
* category.coding.userSelected ..0
* category.text ..0
* severity 0..1
* severity.coding 1..1
* severity from http://fhir.kl.dk/term/ValueSet/KLSeveritiesFSIII (required)
* code 1..1
* code from FSIIICareConditions (required)
* code.coding 1..1
* bodySite ..0
* subject only Reference(klgateway-care-citizen)
* subject ^type.aggregation = #bundled
* abatement[x] ..0
* encounter ..0
* onset[x] ..0
* recordedDate 1..1
* recorder ..0
* asserter ..0
* stage ..0
* evidence ..0
* note ..0
* extension contains klgateway-care-follow-up-encounter-extension named followUpEncounter 0..1
* extension[followUpEncounter] ^definition = "Encounter for following up on this condition. Will be depricated October 2025"
* obeys klgateway-severity-mandatory-in-home-care-not-allowed-in-nursing

//Danish descriptions
* code.coding ^short = "[DK] tilstandskode"
* code.coding ^short = "[DK] FSIII tilstandskode"
* severity.coding ^short = "[DK] tilstandssværhedsgrad" 
* clinicalStatus ^short = "[DK] tilstandsstatus"
* verificationStatus ^short = "[DK] tilstandsstatus"
* recordedDate ^short = "[DK] tilstandsoprettelsestid" 
* extension[followUpEncounter] ^short = "[DK] tilstandsplanlagtOpfølgning" 
* subject ^short = "[DK] tilstandssubjekt" 
* category.coding ^short = "[DK] tilstandsfokus"

Invariant: klgateway-severity-mandatory-in-home-care-not-allowed-in-nursing
Description: "The severity is mandatory for home care and not allowed for nursing conditions"
Severity: #error
Expression: "(severity.exists() and code.coding.memberOf('http://fhir.kl.dk/term/ValueSet/KLConditionCodesHomeCare'))
          or (severity.empty() and code.coding.memberOf('http://fhir.kl.dk/term/ValueSet/KLConditionCodesNursing'))"


Instance: VaskeSigLetteBegraensninger
InstanceOf: KLGatewayCareCondition
Description: "Assessed ability for the test person to wash himself"
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B2
* verificationStatus.coding = $VerificationStatus#confirmed
* code = $FSIII#J1.1
* subject = Reference(TestPerson)
* recordedDate = 2020-08-14
* extension[followUpEncounter].valueReference = Reference(NaesteOpfoelgningsdato)

Instance: VaskeSigLetteBegraensningerNy
InstanceOf: KLGatewayCareCondition
Description: "Assessed ability for the test person to wash himself - new way of defining followUp Encounter"
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B2
* verificationStatus.coding = $VerificationStatus#confirmed
* code = $FSIII#J1.1
* subject = Reference(TestPerson)
* recordedDate = 2020-08-14

Instance: ProblemerMedPersonligPleje
InstanceOf: KLGatewayCareCondition
Description: "Assessed ability for the test person to perform personal care"
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* code = $FSIII#I1.1
* subject = Reference(TestPerson)
* recordedDate = 2020-08-14
* extension[followUpEncounter].valueReference = Reference(NaesteOpfoelgningsdato)

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/deliveryReport.fsh

Profile: KLGatewayCareDeliveryReport
Parent: Bundle
Id: klgateway-care-delivery-report
Title: "CareDeliveryReport"
Description: "Deliver report to deliver for each citizen."
* identifier ..0
* type = #collection
* timestamp 1..1
* total ..0
* link ..0
* entry.resource 1..1
* entry.resource only
    KLGatewayCareCitizen or
    KLGatewayCareCondition or
    KLGatewayCareGoal or
    KLGatewayCarePlannedIntervention or
    KLGatewayCareCompletedIntervention or
    Observation or // KLGatewayCareCitizensOwnObservation or KLGatewayCareMatterOfInterestObservation or  KLGatewayCareFollowUpObservation
    Encounter //klgateway-care-general-encounter, KLGatewayCareEncounter
* entry.resource ^short = "Content constrained to known profiles (see also constraint gateway-care-report-1)"
* entry.search ..0
* entry.request ..0
* entry.response ..0
* signature ..0
* obeys gateway-care-report-1
* obeys gateway-care-report-2


Invariant: gateway-care-report-1
Description: "All observation resources shall conform to either klgateway-care-citizens-own-observation profile, klgateway-care-matter-of-interest-observation, or klgateway-care-follow-up-observation"
Severity: #error
Expression: "entry.select(resource as Observation).all(
    $this.conformsTo('http://fhir.kl.dk/gateway/StructureDefinition/klgateway-care-citizens-own-observation')
    or $this.conformsTo('http://fhir.kl.dk/gateway/StructureDefinition/klgateway-care-matter-of-interest-observation')
    or $this.conformsTo('http://fhir.kl.dk/gateway/StructureDefinition/klgateway-care-follow-up-observation'))"

Invariant: gateway-care-report-2
Description: "All Encounter resources shall conform to profiles in this implementation guide"
Severity: #error
Expression: "entry.select(resource as Encounter).all(
    $this.conformsTo('http://fhir.kl.dk/gateway/StructureDefinition/klgateway-care-general-encounter')
    or $this.conformsTo('http://fhir.kl.dk/gateway/StructureDefinition/klgateway-care-encounter'))"


Instance: TestPersonReport
InstanceOf: KLGatewayCareDeliveryReport
Description: "Example of a delivery report for the test person"
* type = #collection
* timestamp = 2020-08-14T00:00:00Z
* entry[+].fullUrl = "https://test.fhir.dk/Patient/TestPerson"
* entry[=].resource = TestPerson
* entry[+].fullUrl = "https://test.fhir.dk/Condition/VaskeSigLetteBegraensninger"
* entry[=].resource = VaskeSigLetteBegraensninger 
* entry[+].fullUrl = "https://test.fhir.dk/Goal/ForventetIngenBegraensninger"
* entry[=].resource = ForventetIngenBegraensninger
* entry[+].fullUrl = "https://test.fhir.dk/Observation/OpleverIkkeBegraensningerMedVaskeSig"
* entry[=].resource = OpleverIkkeBegraensningerMedVaskeSig
* entry[+].fullUrl = "https://test.fhir.dk/Observation/UdfoererSelvVaskeSig"
* entry[=].resource = UdfoererSelvVaskeSig
* entry[+].fullUrl = "https://test.fhir.dk/Condition/ProblemerMedPersonligPleje"
* entry[=].resource = ProblemerMedPersonligPleje
* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/PersonligHygiejne"
* entry[=].resource = PersonligHygiejne
* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/Dialyse"
* entry[=].resource = Dialyse
* entry[+].fullUrl = "https://test.fhir.dk/Procedure/Saarbehandling"
* entry[=].resource = Saarbehandling    
* entry[+].fullUrl = "https://test.fhir.dk/Observation/EgensomsorgBegraensninger"
* entry[=].resource = EgensomsorgBegraensninger
* entry[+].fullUrl = "https://test.fhir.dk/Encounter/NaesteOpfoelgningsdato"
* entry[=].resource = NaesteOpfoelgningsdato
* entry[+].fullUrl = "https://test.fhir.dk/Observation/VaskeSigFortsaettes"
* entry[=].resource = VaskeSigFortsaettes
* entry[+].fullUrl = "https://test.fhir.dk/Observation/PersonligPlejeFortsaettes"
* entry[=].resource = PersonligPlejeFortsaettes
* entry[+].fullUrl = "https://test.fhir.dk/Observation/PersonligHygiejneFortsaettes"
* entry[=].resource = PersonligHygiejneFortsaettes
* entry[+].fullUrl = "https://test.fhir.dk/Observation/DialyseFortsaettes"
* entry[=].resource = DialyseFortsaettes


---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/deliveryTypeExtension.fsh

Extension: DeliveryType
Title: "DeliveryType"
Description: "Extension for a code that specifies some context of how a treatment-activity is delivered to a patient"
* value[x] only CodeableConcept
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "CarePlan.activity.detail"

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/encounter.fsh

Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $KLCommonCodes = http://fhir.kl.dk/term/CodeSystem/CareSocialCodes

Profile: KLGatewayCareEncounter
Parent: Encounter
Id: klgateway-care-encounter
Title: "CareEncounter"
Description: "Encounter for following up on conditions, care plans, or observations."
* identifier ..0
* statusHistory ..0
* class = $v3-ActCode#HH
* class.version ..0
* class.display ..0
* class.userSelected ..0
* classHistory ..0
* type 1..1
* type from http://fhir.kl.dk/term/ValueSet/KLEncounterTypes (required)
* type.coding 1..1
* type.coding = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* type.coding.version ..0
* type.coding.display ..0
* type.coding.userSelected ..0
* type.text ..0
* serviceType ..0
* priority ..0
* subject 1..1
* subject only Reference(klgateway-care-citizen)
* subject ^type.aggregation = #bundled
* episodeOfCare ..0
* basedOn ..0
* participant ..0
* appointment ..0
* period 1..1
* period.start 1..1
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

//Danish descriptions
* status ^short = "[DK] kontaktstatus"
* type.coding ^short = "[DK] kontakttype"
* period.start ^short = "[DK] kontaktstart"
* period.end ^short = "[DK] kontaktslut"
* subject ^short = "[DK] kontaktsubjekt"
* class ^short = "[DK] kontaktklasse"


Instance: NaesteOpfoelgningsdato
InstanceOf: KLGatewayCareEncounter
Description: "Encounter documenting the next date for a follow-up"
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* subject = Reference(TestPerson)
* period.start = 2020-08-14

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/findingContextAtRiskExtension.fsh

Extension:  KLGatewayCareFindingContextAtRiskExtension
Id: klgateway-care-finding-context-at-risk-extension
Title: "CareFindingContextAtRiskExtension"
Description: "Context at risk for a given matter of interest given as a condition code."
* value[x] 1..1
* value[x] only Coding
* value[x] from FSIIICareConditions (required)
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "Observation"


//Danish descriptions
* value[x] ^short = "[DK] tilstandskode"


---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/followUpEncounterExtension.fsh

Extension:  KLGatewayCareFollowUpEncounterExtension
Id: klgateway-care-follow-up-encounter-extension
Title: "CareFollowUpEncounterExtension"
Description: "Encounter for following up on this information."
Context: Condition, CarePlan
* value[x] 1..
* value[x] only Reference(klgateway-care-encounter)
* value[x] ^type.aggregation = #bundled
// * ^context.type = http://hl7.org/fhir/extension-context-type#element
// * ^context.expression = "Condition"

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/followUpObservation.fsh

Alias: $SnomedCT = http://snomed.info/sct

Profile: KLGatewayCareFollowUpObservation
Parent: Observation
Id: klgateway-care-follow-up-observation
Title: "CareFollowUpObservation"
Description: "Structured result or outcome of a follow up."
* identifier ..0
* basedOn ..0
* partOf ..0
* category ..0
* status ^definition = "The status of the result value. Shall be final or entered-in-error."
* code.coding 1..1
* code.coding = $SnomedCT#712744002
* subject only Reference(klgateway-care-citizen)
* subject ^type.aggregation = #bundled
* focus 1..
* focus only Reference(KLGatewayCareCondition or KLGatewayCarePlannedIntervention) // after transistion only condition
* encounter 0..0
* effective[x] 1..1
* effective[x] only dateTime
* issued ..0
* performer ..0
* value[x] 1..1
* value[x] only CodeableConcept
* value[x] from http://fhir.kl.dk/term/ValueSet/KLFollowUpCodesFSIII
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
* obeys gateway-care-follow-up-1

//Danish descriptions
* subject ^short = "[DK] opfølgningsubjekt"
* effective[x] ^short = "[DK] opfølgningstid"
* status ^short = "[DK] opfølgningsstatus"

Invariant: gateway-care-follow-up-1
Description: "A follow-up observation resource shall have status final or entered-in-error"
Severity: #error
Expression: "status = 'final' or status = 'entered-in-error'"


Instance: VaskeSigFortsaettes
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that focus on ability to wash himself should be continued for the test person"
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(TestPerson)
* focus = Reference(VaskeSigLetteBegraensninger)
* effectiveDateTime = 2020-08-14
* valueCodeableConcept = $FSIII#E1

Instance: PersonligPlejeFortsaettes
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that focus on personal care should be continued for the test person"
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(TestPerson)
* focus = Reference(ProblemerMedPersonligPleje)
* effectiveDateTime = 2020-08-14
* valueCodeableConcept = $FSIII#E1

Instance: PersonligHygiejneFortsaettes
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that the planned intervention on personal hygiene should be continued for the test person"
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(TestPerson)
* focus = Reference(PersonligHygiejne)
* effectiveDateTime = 2020-08-14
* valueCodeableConcept = $FSIII#E1

Instance: DialyseFortsaettes
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that the planned intervention on dialysis should be continued for the test person"
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(TestPerson)
* focus = Reference(Dialyse)
* effectiveDateTime = 2020-08-14
* valueCodeableConcept = $FSIII#E1


---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/generalEncounter.fsh

Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $KLCommonCodes = http://fhir.kl.dk/term/CodeSystem/CareSocialCodes

Profile: KLGatewayCareGeneralEncounter
Parent: Encounter
Id: klgateway-care-general-encounter
Title: "CareGeneralEncounter"
Description: "Encounter for planned and completed meetings between citizens and care staff."
* identifier ..0
* statusHistory ..0
* class.version ..0
* class from EncounterClassCodes (required)
* class.userSelected ..0
* classHistory ..0
* type 1..*
* type from http://fhir.kl.dk/term/ValueSet/KLEncounterTypes (required)
* type.coding 1..1
* type.coding.version ..0
* type.coding.userSelected ..0
* type.text ..0
* serviceType ..0
* priority ..0
* subject 1..1
* subject only Reference(klgateway-care-citizen)
* subject ^type.aggregation = #bundled
* episodeOfCare ..0
* basedOn ..0
* participant ..0
* appointment ..0
* period 1..1
* period.start 1..1
* length ..0
* reasonCode ..0
* reasonReference 0..*
* reasonReference only Reference(klgateway-care-condition)
* diagnosis ..0
* account ..0
* hospitalization ..0
* location ..0
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
* extension[basedOnIntervention] ^short = "[DK] kontaktIndsats"
* reasonReference ^short = "[DK] kontaktTilstand"

Invariant: klgateway-follow-up-references-condition
Description: "The severity is mandatory for home care and not allowed for nursing conditions"
Severity: #error
Expression: "type.coding.exists(code = '9f03dfbb-7a97-45a5-94db-d4c3501714a9') implies reasonReference.exists()"
       
Extension: BasedOnInterventionExtension
Title:     "basedOnInterventionExtension"
Description: "Extension for pointing to the intervention describing why this encounter is taking place (will be part of R5 and comming FHIR versions without needing the extension)"
* value[x] 1..1
* value[x] only Reference(klgateway-care-planned-intervention)
* ^context.type = http://hl7.org/fhir/extension-context-type#element
* ^context.expression = "Encounter"

Instance: NaesteOpfoelgning
InstanceOf: klgateway-care-general-encounter
Description: "General encounter used to document the next date for a follow-up"
* status = http://hl7.org/fhir/encounter-status#planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(TestPerson)
* period.start = 2020-08-14
* reasonReference[+] = Reference(VaskeSigLetteBegraensningerNy)

Instance: LeveringAfDialyse
InstanceOf: klgateway-care-general-encounter
Description: "General encounter used to document delivery of an intervention"
* status = http://hl7.org/fhir/encounter-status#finished
* class = $v3-ActCode#HH
* type = $KLCommonCodes#784275f1-6822-4a88-b361-d958007d5253 "udførelse af planlagt indsats"
* subject = Reference(TestPerson)
* period.start = 2020-08-16
* extension[basedOnIntervention].valueReference = Reference(Dialyse)



---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/goal.fsh

Alias: $FSIII = urn:oid:1.2.208.176.2.21
Alias: $KLCommonCodes = http://fhir.kl.dk/term/CodeSystem/CareSocialCodes

Profile: KLGatewayCareGoal
Parent: Goal
Id: klgateway-care-goal
Title: "CareGoal"
Description: "Describes the intended or expected functional level for a condition of a citizen."
* identifier ..0
* lifecycleStatus ^definition = "Shall be planned, entered-in-error, or fit the current lifecycle status of the goal"
* category 1..1
* category from http://fhir.kl.dk/term/ValueSet/KLGoalTypeCodes
* category.coding 1..1
* category.coding = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* category.coding.version ..0
* category.coding.userSelected ..0
* category.text ..0
* achievementStatus ..0
* priority ..0
* description.coding 1..1
* description.coding = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject only Reference(klgateway-care-citizen)
* subject ^type.aggregation = #bundled
* start[x] 1..1
* start[x] only date
* target 1..1
* target.measure 1..1
* target.measure from http://fhir.kl.dk/term/ValueSet/KLTargetMeasureCodes
* target.measure.coding 1..1
* target.measure.coding = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.measure.coding.version ..0
* target.measure.coding.userSelected ..0
* target.measure.text ..0
* target.detail[x] only CodeableConcept
* target.detail[x] from http://fhir.kl.dk/term/ValueSet/KLSeveritiesFSIII
* statusDate ..0
* statusReason ..0
* expressedBy ..0
* addresses 1..1
* addresses only Reference(KLGatewayCareCondition)
* addresses ^type.aggregation = #bundled
* note ..0
* outcomeCode ..0
* outcomeReference ..0
* obeys klgateway-adresses-must-be-home-care-condition

//Danish descriptions
* category ^short = "[DK] målkategori"
* target ^short = "[DK] målSværhedsgrad"
* description ^short = "[DK] målbeskrivelse"
* subject ^short = "[DK] målSubjekt"
* addresses ^short = "[DK] målrelateret"
* target.measure ^short = "[DK] målemetode"


Invariant: klgateway-adresses-must-be-home-care-condition
Description: "The goal is only allowed to address home care conditions"
Severity: #error
Expression: "addresses.resolve().code.coding.memberOf('http://fhir.kl.dk/term/ValueSet/KLConditionCodesHomeCare')"


Instance: ForventetIngenBegraensninger
InstanceOf: KLGatewayCareGoal
Description: "A goal for the test person on the ability to wash himself"
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(TestPerson)
* startDate = 2020-08-14
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B2
* addresses = Reference(VaskeSigLetteBegraensninger)

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/incrementalDelivery.fsh

Profile: KLGatewayCareIncrementalDelivery
Parent: Bundle
Id: klgateway-care-incremental-delivery
Title: "CareIncrementalDelivery"
Description: "Delivery for all delivery reports made since last update (unordered)."
* identifier ..0
* type = #collection
* timestamp 1..1
* total ..0
* link ..0
* entry.resource 1..1
* entry.resource only
    KLGatewayCareDeliveryReport
* entry.resource ^short = "Content constrained to known delivery reports"
* entry.search ..0
* entry.request ..0
* entry.response ..0
* signature ..0

Instance: TestIncrementalDelivery
InstanceOf: KLGatewayCareIncrementalDelivery
Description: "Example of an incremental delivery with one delivery report"
* type = #collection
* timestamp = 2020-08-14T00:00:00Z
* entry[+].fullUrl = "https://test.fhir.dk/Bundle/TestPersonReport"
* entry[=].resource = TestPersonReport

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/JensHansen.fsh

Alias: $FSIII = urn:oid:1.2.208.176.2.21

// ------------------------------------------------------------------------------------------------

Instance: 3304e5f8-4b3f-4c19-8c68-e36c573f3f98
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-JensHansen-1"
Description: "Reporting of Jens Hansen after first encounter with Home Care Assessor at the hospital"
* type = #collection
* timestamp = 2021-02-10T11:14:09Z
* insert CitizenEntry(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* insert ConditionEntry(d45b02d1-be76-4968-812b-6b32338ad8ad) // Af- og påklædning
* insert ConditionEntry(34665f6d-7573-46fb-8b4d-72f30641284b) // Udføre daglige rutiner
* insert ConditionEntry(067e0542-1d8a-404d-b6db-f2bfa6a03c2e) // Lave mad
* insert ConditionEntry(cd8643fd-8a42-4ef8-81b4-bf5ec2253f14) // Lave husligt arbejde
* insert ConditionEntry(806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd) // Gå
* insert ConditionEntry(5ad5649a-6317-41de-8cc4-364b9bafd298) // Bevæge sig omkring
* insert ConditionEntry(fcc4040a-1803-434f-b633-8b354c5fbfb4) // Muskelstyrke
* insert GoalEntry(91bed89f-4365-4878-849c-61554de55248) // Moderate begrænsninger i af- og påklædning
* insert GoalEntry(33cd1262-c00f-440a-9e30-620166ff6b7a) // Moderate begrænsninger i at udføre daglige rutiner
* insert GoalEntry(a638744a-c6a9-49c5-940e-e16f94e806b9) // Moderate begrænsninger i at lave mad
* insert GoalEntry(1c62dbc4-91f7-4ad8-86be-783b7158c475) // Moderate begrænsninger i at lave husligt arbejde
* insert GoalEntry(cc6288f9-48d4-4aac-b640-b750a2dfeb0d) // Lette begrænsninger i at gå
* insert GoalEntry(dc40bf0d-4411-4317-b424-9bad5045836e) // Lette begrænsninger i at bevæge sig omkring
* insert GoalEntry(1efb9aec-4e79-4ead-8502-50168f569a18) // Moderate begrænsninger i muskelstyrke
* insert PlannedInterventionEntry(9ace0320-a6bd-4d90-bfed-b6e5d219dba3) // Personlig hygiejne 
* insert PlannedInterventionEntry(4f325b94-99fe-4781-9e05-97e27279f8ec) // Hverdagens aktiviteter 
* insert PlannedInterventionEntry(13c640c6-98d9-4066-abb3-ad7cd3072999) // Madservice 
* insert PlannedInterventionEntry(8a2e5904-ed0f-4d08-a9c2-fd75fa85cfb7) // Rengøring 
* insert PlannedInterventionEntry(d8130c0c-d8a1-47c7-acdf-d32f23c58db9) // Mobilitet
* insert EncounterEntry(4ca8acfb-1fd0-41b3-8a82-cac79ff9db51) // 15/2-2021

// Conditions
Instance: d45b02d1-be76-4968-812b-6b32338ad8ad
InstanceOf: KLGatewayCareCondition
Description: "Af- og påklædning, svære begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B4 // Svære begrænsninger
* code = $FSIII#J1.3 // Af- og påklædning
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10 
* extension[followUpEncounter].valueReference = Reference(4ca8acfb-1fd0-41b3-8a82-cac79ff9db51) // 15/2-2021

Instance: 34665f6d-7573-46fb-8b4d-72f30641284b
InstanceOf: KLGatewayCareCondition
Description: "Udføre daglige rutiner, svære begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B4 // Svære begrænsninger
* code = $FSIII#J2.3 // Udføre daglige rutiner
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(4ca8acfb-1fd0-41b3-8a82-cac79ff9db51) // 15/2-2021

Instance: 067e0542-1d8a-404d-b6db-f2bfa6a03c2e
InstanceOf: KLGatewayCareCondition
Description: "Lave mad, svære begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B4 // Svære begrænsninger
* code = $FSIII#J2.2 // Lave mad
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(4ca8acfb-1fd0-41b3-8a82-cac79ff9db51) // 15/2-2021

Instance: cd8643fd-8a42-4ef8-81b4-bf5ec2253f14
InstanceOf: KLGatewayCareCondition
Description: "Lave husligt arbejde, svære begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B4 // Svære begrænsninger
* code = $FSIII#J2.1 // Lave husligt arbejde
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(4ca8acfb-1fd0-41b3-8a82-cac79ff9db51) // 15/2-2021

Instance: 806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd
InstanceOf: KLGatewayCareCondition
Description: "Gå, moderate begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J3.8 // Gå
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(4ca8acfb-1fd0-41b3-8a82-cac79ff9db51) // 15/2-2021

Instance: 5ad5649a-6317-41de-8cc4-364b9bafd298
InstanceOf: KLGatewayCareCondition
Description: "Bevæge sig omkring, moderate begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J3.2 // Bevæge sig omkring
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(4ca8acfb-1fd0-41b3-8a82-cac79ff9db51) // 15/2-2021

Instance: fcc4040a-1803-434f-b633-8b354c5fbfb4
InstanceOf: KLGatewayCareCondition
Description: "Muskelstyrke, svære begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B4 // Svære begrænsninger
* code = $FSIII#J3.7 // Muskelstyrke
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(4ca8acfb-1fd0-41b3-8a82-cac79ff9db51) // 15/2-2021

// Goals
Instance: 91bed89f-4365-4878-849c-61554de55248
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, moderate begrænsninger i af- og påklædning for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B3 // Moderate begrænsninger
* addresses = Reference(d45b02d1-be76-4968-812b-6b32338ad8ad) // Af- og påklædning

Instance: 33cd1262-c00f-440a-9e30-620166ff6b7a
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, moderate begrænsninger i at udføre daglige rutiner for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B3 // Moderate begrænsninger
* addresses = Reference(34665f6d-7573-46fb-8b4d-72f30641284b) // Udføre daglige rutiner

Instance: a638744a-c6a9-49c5-940e-e16f94e806b9
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, moderate begrænsninger i at lave mad for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B3 // Moderate begrænsninger
* addresses = Reference(067e0542-1d8a-404d-b6db-f2bfa6a03c2e) // Lave mad

Instance: 1c62dbc4-91f7-4ad8-86be-783b7158c475
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, moderate begrænsninger i at lave husligt arbejde for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B3 // Moderate begrænsninger
* addresses = Reference(cd8643fd-8a42-4ef8-81b4-bf5ec2253f14) // Lave husligt arbejde

Instance: cc6288f9-48d4-4aac-b640-b750a2dfeb0d
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, lette begrænsninger i at gå for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B2 // Lette begrænsninger
* addresses = Reference(806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd) // Gå 

Instance: dc40bf0d-4411-4317-b424-9bad5045836e
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, lette begrænsninger i at bevæge sig omkring for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B2 // Lette begrænsninger
* addresses = Reference(5ad5649a-6317-41de-8cc4-364b9bafd298) // Bevæge sig omkring

Instance: 1efb9aec-4e79-4ead-8502-50168f569a18
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, moderate begrænsninger i muskelstyrke for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B3 // Moderate begrænsninger
* addresses = Reference(fcc4040a-1803-434f-b633-8b354c5fbfb4) // Muskelstyrke

// Planned interventions
Instance: 9ace0320-a6bd-4d90-bfed-b6e5d219dba3
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing personal hygiene for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#H1.1 // Personlig hygiejne
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(d45b02d1-be76-4968-812b-6b32338ad8ad) // Af- og påklædning

Instance: 4f325b94-99fe-4781-9e05-97e27279f8ec
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing hverdagens aktiviteter for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#H1.5 // Hverdagens aktiviteter
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(34665f6d-7573-46fb-8b4d-72f30641284b) // Udføre daglige rutiner
* activity.detail.reasonReference[+] = Reference(cd8643fd-8a42-4ef8-81b4-bf5ec2253f14) // Lave husligt arbejde

Instance: 13c640c6-98d9-4066-abb3-ad7cd3072999
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing madservice for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#H1.11 // Madservice
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(067e0542-1d8a-404d-b6db-f2bfa6a03c2e) // Lave mad

Instance: 8a2e5904-ed0f-4d08-a9c2-fd75fa85cfb7
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing rengøring for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#H1.8 // Rengøring
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(cd8643fd-8a42-4ef8-81b4-bf5ec2253f14) // Lave husligt arbejde

Instance: d8130c0c-d8a1-47c7-acdf-d32f23c58db9
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing mobilitet for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#H1.4 // Mobilitet
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd) // Gå
* activity.detail.reasonReference[+] = Reference(5ad5649a-6317-41de-8cc4-364b9bafd298) // Bevæge sig omkring
* activity.detail.reasonReference[+] = Reference(fcc4040a-1803-434f-b633-8b354c5fbfb4) // Muskelstyrke

// Followup encounters
Instance: 4ca8acfb-1fd0-41b3-8a82-cac79ff9db51
InstanceOf: KLGatewayCareEncounter
Description: "Encounter for a follow-up for Jens Hansen on February 15th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-15

// ------------------------------------------------------------------------------------------------
Instance: b1c5348b-fe9f-4afc-96ff-8c42b6c6c7ff
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-JensHansen-2"
Description: "Reporting of Jens Hansen after second encounter with Home Care Assessor updating follow-up date"
* type = #collection
* timestamp = 2021-02-15T08:39:34Z
* insert CitizenEntry(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* insert ConditionEntryVersion(d45b02d1-be76-4968-812b-6b32338ad8ad, v2) // Af- og påklædning
* insert ConditionEntryVersion(34665f6d-7573-46fb-8b4d-72f30641284b, v2) // Udføre daglige rutiner
* insert ConditionEntryVersion(067e0542-1d8a-404d-b6db-f2bfa6a03c2e, v2) // Lave mad
* insert ConditionEntryVersion(cd8643fd-8a42-4ef8-81b4-bf5ec2253f14, v2) // Lave husligt arbejde
* insert ConditionEntryVersion(806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd, v2) // Gå
* insert ConditionEntryVersion(5ad5649a-6317-41de-8cc4-364b9bafd298, v2) // Bevæge sig omkring
* insert ConditionEntryVersion(fcc4040a-1803-434f-b633-8b354c5fbfb4, v2) // Muskelstyrke
* insert EncounterEntry(56c8d2c3-5da1-4a33-a358-d3ecfb67ef3b) // 24/2-2021
* insert FollowUpObservationEntry(4438410f-c879-45ec-9626-75c85fa1449a) // Fortsættes uændret

// Conditions
Instance: d45b02d1-be76-4968-812b-6b32338ad8ad-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Af- og påklædning, svære begrænsninger for Jens Hansen"
Usage: #inline
* id = "d45b02d1-be76-4968-812b-6b32338ad8ad" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B4 // Svære begrænsninger
* code = $FSIII#J1.3 // Af- og påklædning
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(56c8d2c3-5da1-4a33-a358-d3ecfb67ef3b) // 24/2-2021

Instance: 34665f6d-7573-46fb-8b4d-72f30641284b-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Udføre daglige rutiner, svære begrænsninger for Jens Hansen"
Usage: #inline
* id = "34665f6d-7573-46fb-8b4d-72f30641284b" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B4 // Svære begrænsninger
* code = $FSIII#J2.3 // Udføre daglige rutiner
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(56c8d2c3-5da1-4a33-a358-d3ecfb67ef3b) // 24/2-2021

Instance: 067e0542-1d8a-404d-b6db-f2bfa6a03c2e-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Lave mad, svære begrænsninger for Jens Hansen"
Usage: #inline
* id = "067e0542-1d8a-404d-b6db-f2bfa6a03c2e" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B4 // Svære begrænsninger
* code = $FSIII#J2.2 // Lave mad
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(56c8d2c3-5da1-4a33-a358-d3ecfb67ef3b) // 24/2-2021

Instance: cd8643fd-8a42-4ef8-81b4-bf5ec2253f14-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Lave husligt arbejde, svære begrænsninger for Jens Hansen"
Usage: #inline
* id = "cd8643fd-8a42-4ef8-81b4-bf5ec2253f14" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B4 // Svære begrænsninger
* code = $FSIII#J2.1 // Lave husligt arbejde
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(56c8d2c3-5da1-4a33-a358-d3ecfb67ef3b) // 24/2-2021

Instance: 806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Gå, moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J3.8 // Gå
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(56c8d2c3-5da1-4a33-a358-d3ecfb67ef3b) // 24/2-2021

Instance: 5ad5649a-6317-41de-8cc4-364b9bafd298-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Bevæge sig omkring, moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "5ad5649a-6317-41de-8cc4-364b9bafd298" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J3.2 // Bevæge sig omkring
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(56c8d2c3-5da1-4a33-a358-d3ecfb67ef3b) // 24/2-2021

Instance: fcc4040a-1803-434f-b633-8b354c5fbfb4-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Muskelstyrke, svære begrænsninger for Jens Hansen"
Usage: #inline
* id = "fcc4040a-1803-434f-b633-8b354c5fbfb4" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B4 // Svære begrænsninger
* code = $FSIII#J3.7 // Muskelstyrke
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(56c8d2c3-5da1-4a33-a358-d3ecfb67ef3b) // 24/2-2021

// Followup encounters
Instance: 56c8d2c3-5da1-4a33-a358-d3ecfb67ef3b
InstanceOf: KLGatewayCareEncounter
Description: "Encounter for a follow-up for Jens Hansen on February 15th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-24

// Followup Observations
Instance: 4438410f-c879-45ec-9626-75c85fa1449a
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that focus on all conditions should be continued unchanged for Jens Hansen"
Usage: #inline
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* focus[+] = Reference(d45b02d1-be76-4968-812b-6b32338ad8ad) // Af- og påklædning
* focus[+] = Reference(34665f6d-7573-46fb-8b4d-72f30641284b) // Udføre daglige rutiner
* focus[+] = Reference(067e0542-1d8a-404d-b6db-f2bfa6a03c2e) // Lave mad
* focus[+] = Reference(cd8643fd-8a42-4ef8-81b4-bf5ec2253f14) // Lave husligt arbejde
* focus[+] = Reference(806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd) // Gå
* focus[+] = Reference(5ad5649a-6317-41de-8cc4-364b9bafd298) // Bevæge sig omkring
* focus[+] = Reference(fcc4040a-1803-434f-b633-8b354c5fbfb4) // Muskelstyrke
* effectiveDateTime = 2021-02-15
* valueCodeableConcept = $FSIII#E1 // Fortsættes uændret


// ------------------------------------------------------------------------------------------------

Instance: 643c3e42-ab90-4354-9b98-f01b4740d3d9
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-JensHansen-3"
Description: "Reporting of Jens Hansen after first encounter with Home Care Assessor at the hospital"
* type = #collection
* timestamp = 2021-02-24T08:46:36Z
* insert CitizenEntry(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* insert ConditionEntryVersion(d45b02d1-be76-4968-812b-6b32338ad8ad, v3) // Af- og påklædning
* insert ConditionEntryVersion(34665f6d-7573-46fb-8b4d-72f30641284b, v3) // Udføre daglige rutiner
* insert ConditionEntryVersion(067e0542-1d8a-404d-b6db-f2bfa6a03c2e, v3) // Lave mad
* insert ConditionEntryVersion(cd8643fd-8a42-4ef8-81b4-bf5ec2253f14, v3) // Lave husligt arbejde
* insert ConditionEntryVersion(806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd, v3) // Gå
* insert ConditionEntryVersion(5ad5649a-6317-41de-8cc4-364b9bafd298, v3) // Bevæge sig omkring
* insert ConditionEntryVersion(fcc4040a-1803-434f-b633-8b354c5fbfb4, v3) // Muskelstyrke
* insert GoalEntryVersion(91bed89f-4365-4878-849c-61554de55248, v3) //  Ingen begrænsninger i af- og påklædning
* insert GoalEntryVersion(33cd1262-c00f-440a-9e30-620166ff6b7a, v3) // Ingen begrænsninger i at udføre daglige rutiner
* insert GoalEntryVersion(a638744a-c6a9-49c5-940e-e16f94e806b9, v3) // Lette begrænsninger i at lave mad
* insert GoalEntryVersion(1c62dbc4-91f7-4ad8-86be-783b7158c475, v3) // Lette begrænsninger i at lave husligt arbejde
* insert GoalEntryVersion(cc6288f9-48d4-4aac-b640-b750a2dfeb0d, v3) // Ingen begrænsninger i at gå
* insert GoalEntryVersion(dc40bf0d-4411-4317-b424-9bad5045836e, v3) // Ingen begrænsninger i at bevæge sig omkring
* insert GoalEntryVersion(1efb9aec-4e79-4ead-8502-50168f569a18, v3) // Ingen begrænsninger i muskelstyrke
* insert PlannedInterventionEntryVersion(9ace0320-a6bd-4d90-bfed-b6e5d219dba3, v3) // Personlig hygiejne afslttet 
* insert PlannedInterventionEntryVersion(4f325b94-99fe-4781-9e05-97e27279f8ec, v3) // Hverdagens aktiviteter ændret
* insert PlannedInterventionEntryVersion(d8130c0c-d8a1-47c7-acdf-d32f23c58db9, v3) // Mobilitet afsluttet
* insert PlannedInterventionEntry(7c22ac66-f42b-476e-8d54-0607ea06f9bf) // RH Personlig hygiejne
* insert PlannedInterventionEntry(5eb9f137-bd44-481a-95b0-18dacdb4c757) // RH Hverdagens aktiviteter
* insert PlannedInterventionEntry(e353b5b7-5e03-4142-bb74-e49015d95c50) // RH Mobilitet
* insert EncounterEntry(fbf243bb-9d70-489d-875d-87e14c980d7c) // 10/3-2021
* insert FollowUpObservationEntry(e434699d-5f4e-491b-9f76-5c5dbd539edc) // Revisitation


// Conditions
Instance: d45b02d1-be76-4968-812b-6b32338ad8ad-v3 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Af- og påklædning, moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "d45b02d1-be76-4968-812b-6b32338ad8ad" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J1.3 // Af- og påklædning
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10 
* extension[followUpEncounter].valueReference = Reference(fbf243bb-9d70-489d-875d-87e14c980d7c) // 10/3-2021

Instance: 34665f6d-7573-46fb-8b4d-72f30641284b-v3 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Udføre daglige rutiner, moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "34665f6d-7573-46fb-8b4d-72f30641284b" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J2.3 // Udføre daglige rutiner
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(fbf243bb-9d70-489d-875d-87e14c980d7c) // 10/3-2021

Instance: 067e0542-1d8a-404d-b6db-f2bfa6a03c2e-v3 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Lave mad, moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "067e0542-1d8a-404d-b6db-f2bfa6a03c2e" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J2.2 // Lave mad
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(fbf243bb-9d70-489d-875d-87e14c980d7c) // 10/3-2021

Instance: cd8643fd-8a42-4ef8-81b4-bf5ec2253f14-v3 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Lave husligt arbejde, moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "cd8643fd-8a42-4ef8-81b4-bf5ec2253f14" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J2.1 // Lave husligt arbejde
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(fbf243bb-9d70-489d-875d-87e14c980d7c) // 10/3-2021

Instance: 806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd-v3 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Gå, moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J3.8 // Gå
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(fbf243bb-9d70-489d-875d-87e14c980d7c) // 10/3-2021

Instance: 5ad5649a-6317-41de-8cc4-364b9bafd298-v3 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Bevæge sig omkring, moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "5ad5649a-6317-41de-8cc4-364b9bafd298" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J3.2 // Bevæge sig omkring
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(fbf243bb-9d70-489d-875d-87e14c980d7c) // 10/3-2021

Instance: fcc4040a-1803-434f-b633-8b354c5fbfb4-v3 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Muskelstyrke, moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "fcc4040a-1803-434f-b633-8b354c5fbfb4" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B3 // Moderate begrænsninger
* code = $FSIII#J3.7 // Muskelstyrke
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(fbf243bb-9d70-489d-875d-87e14c980d7c) // 10/3-2021

// Goals
Instance: 91bed89f-4365-4878-849c-61554de55248-v3 // Fake id
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, ingen begrænsninger i af- og påklædning for Jens Hansen"
Usage: #inline
* id = "91bed89f-4365-4878-849c-61554de55248" // Real id
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B1 // Ingen begrænsninger
* addresses = Reference(d45b02d1-be76-4968-812b-6b32338ad8ad) // Af- og påklædning

Instance: 33cd1262-c00f-440a-9e30-620166ff6b7a-v3 // Fake id
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, ingen begrænsninger i at udføre daglige rutiner for Jens Hansen"
Usage: #inline
* id = "33cd1262-c00f-440a-9e30-620166ff6b7a" // Real id
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B1 // Ingen begrænsninger
* addresses = Reference(34665f6d-7573-46fb-8b4d-72f30641284b) // Udføre daglige rutiner

Instance: a638744a-c6a9-49c5-940e-e16f94e806b9-v3 // Fake id
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, lette begrænsninger i at lave mad for Jens Hansen"
Usage: #inline
* id = "a638744a-c6a9-49c5-940e-e16f94e806b9" // Real id
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B2 // Lette begrænsninger
* addresses = Reference(067e0542-1d8a-404d-b6db-f2bfa6a03c2e) // Lave mad

Instance: 1c62dbc4-91f7-4ad8-86be-783b7158c475-v3 // Fake id
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, lette begrænsninger i at lave husligt arbejde for Jens Hansen"
Usage: #inline
* id = "1c62dbc4-91f7-4ad8-86be-783b7158c475" // Real id
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B2 // Lette begrænsninger
* addresses = Reference(cd8643fd-8a42-4ef8-81b4-bf5ec2253f14) // Lave husligt arbejde

Instance: cc6288f9-48d4-4aac-b640-b750a2dfeb0d-v3 // Fake id
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, ingen begrænsninger i at gå for Jens Hansen"
Usage: #inline
* id = "cc6288f9-48d4-4aac-b640-b750a2dfeb0d" // Real id
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B1 // Ingen begrænsninger
* addresses = Reference(806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd) // Gå 

Instance: dc40bf0d-4411-4317-b424-9bad5045836e-v3 // Fake id
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, ingen begrænsninger i at bevæge sig omkring for Jens Hansen"
Usage: #inline
* id = "dc40bf0d-4411-4317-b424-9bad5045836e" // Real id
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B1 // Ingen begrænsninger
* addresses = Reference(5ad5649a-6317-41de-8cc4-364b9bafd298) // Bevæge sig omkring

Instance: 1efb9aec-4e79-4ead-8502-50168f569a18-v3 // Fake id
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, ingen begrænsninger i muskelstyrke for Jens Hansen"
Usage: #inline
* id = "1efb9aec-4e79-4ead-8502-50168f569a18" // Real id
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B1 // Ingen begrænsninger
* addresses = Reference(fcc4040a-1803-434f-b633-8b354c5fbfb4) // Muskelstyrke

// Planned interventions
Instance: 9ace0320-a6bd-4d90-bfed-b6e5d219dba3-v3 // Fake id
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing personal hygiene for Jens Hansen"
Usage: #inline
* id = "9ace0320-a6bd-4d90-bfed-b6e5d219dba3" // Real id
* status = #completed
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-12
* period.end = 2021-02-24
* activity.detail.code.coding[level2] = $FSIII#H1.1 // Personlig hygiejne
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(d45b02d1-be76-4968-812b-6b32338ad8ad) // Af- og påklædning

Instance: 4f325b94-99fe-4781-9e05-97e27279f8ec-v3 // Fake id
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing hverdagens aktiviteter for Jens Hansen"
Usage: #inline
* id = "4f325b94-99fe-4781-9e05-97e27279f8ec" // Real id
* status = #active
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#H1.5 // Hverdagens aktiviteter
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(cd8643fd-8a42-4ef8-81b4-bf5ec2253f14) // Lave husligt arbejde

Instance: d8130c0c-d8a1-47c7-acdf-d32f23c58db9-v3 // Fake id
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing mobilitet for Jens Hansen"
Usage: #inline
* id = "d8130c0c-d8a1-47c7-acdf-d32f23c58db9" // Real id
* status = #completed
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-12
* period.end = 2021-02-24
* activity.detail.code.coding[level2] = $FSIII#H1.4 // Mobilitet
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd) // Gå
* activity.detail.reasonReference[+] = Reference(5ad5649a-6317-41de-8cc4-364b9bafd298) // Bevæge sig omkring
* activity.detail.reasonReference[+] = Reference(fcc4040a-1803-434f-b633-8b354c5fbfb4) // Muskelstyrke

Instance: 7c22ac66-f42b-476e-8d54-0607ea06f9bf
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing RH personlig hygiejne for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-25
* activity.detail.code.coding[level2] = $FSIII#H2.5 // RH Personlig hygiejne
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(d45b02d1-be76-4968-812b-6b32338ad8ad) // Af- og påklædning

Instance: 5eb9f137-bd44-481a-95b0-18dacdb4c757
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing RH hverdagens aktiviteter for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-25
* activity.detail.code.coding[level2] = $FSIII#H2.2 // RH Hverdagens aktiviteter
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(34665f6d-7573-46fb-8b4d-72f30641284b) // Udføre daglige rutiner

Instance: e353b5b7-5e03-4142-bb74-e49015d95c50
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing RH mobilitet for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-02-25
* activity.detail.code.coding[level2] = $FSIII#H2.4 // RH Mobilitet
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd) // Gå
* activity.detail.reasonReference[+] = Reference(5ad5649a-6317-41de-8cc4-364b9bafd298) // Bevæge sig omkring
* activity.detail.reasonReference[+] = Reference(fcc4040a-1803-434f-b633-8b354c5fbfb4) // Muskelstyrke

// Followup encounters
Instance: fbf243bb-9d70-489d-875d-87e14c980d7c
InstanceOf: KLGatewayCareEncounter
Description: "Encounter for a follow-up for Jens Hansen on Martch 10th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* period.start = 2021-03-10

// Followup Observations
Instance: e434699d-5f4e-491b-9f76-5c5dbd539edc
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that focus on all conditions should be continued unchanged for Jens Hansen"
Usage: #inline
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(eec9e8e9-221d-4eae-a54d-cdd403661def) // Jens Hansen
* focus[+] = Reference(d45b02d1-be76-4968-812b-6b32338ad8ad) // Af- og påklædning
* focus[+] = Reference(34665f6d-7573-46fb-8b4d-72f30641284b) // Udføre daglige rutiner
* focus[+] = Reference(067e0542-1d8a-404d-b6db-f2bfa6a03c2e) // Lave mad
* focus[+] = Reference(cd8643fd-8a42-4ef8-81b4-bf5ec2253f14) // Lave husligt arbejde
* focus[+] = Reference(806d1cf8-5a4a-4c0d-a020-8a3bb3eacebd) // Gå
* focus[+] = Reference(5ad5649a-6317-41de-8cc4-364b9bafd298) // Bevæge sig omkring
* focus[+] = Reference(fcc4040a-1803-434f-b633-8b354c5fbfb4) // Muskelstyrke
* effectiveDateTime = 2021-02-24
* valueCodeableConcept = $FSIII#E4 // Revisitation

// ------------------------------------------------------------------------------------------------

// Citizen
Instance: eec9e8e9-221d-4eae-a54d-cdd403661def
InstanceOf: KLGatewayCareCitizen
Description: "Citizen Jens Hansen"
Usage: #inline
* identifier.use = #official
* identifier.value = "0101410001"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "123456789012345"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/JensHansenNew.fsh

Alias: $FSIII = urn:oid:1.2.208.176.2.21

// ------------------------------------------------------------------------------------------------

Instance: 5c20b1b0-ec06-4d25-89e2-13521ebcf642
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-JensHansen-new-1"
Description: "Reporting of Jens Hansen after first encounter with Home Care Assessor at the hospital"
* type = #collection
* timestamp = 2021-02-10T11:14:09Z
* insert CitizenEntry(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen, OK
* insert ConditionEntry(38ea1a7f-251a-4817-aa4a-b59d556db92a) // Personlig pleje, OK
* insert ConditionEntry(80e7cd6e-f926-412c-b326-578f05af643e) // Lave mad, OK
* insert ConditionEntry(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde, OK
* insert ConditionEntry(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse, OK

* insert GoalEntry(82a5cd17-c4fa-4ede-be31-a26457a98834) // Moderate begrænsninger i personlig pleje, OK
* insert GoalEntry(13520a3e-0c63-4cf8-b1ab-028313c8bc11) // Moderate begrænsninger i at lave mad, OK
* insert GoalEntry(cf7f8c3c-3ff8-460f-8c70-88895630105c) // Moderate begrænsninger i at lave husligt arbejde, OK
* insert GoalEntry(0b16696f-1935-45a9-b716-135da8d9cef2) // Lette begrænsninger i mobilitet og bevægelse, OK

* insert PlannedInterventionEntry(0aff84ce-2b70-4677-bfa8-78c599d0eaf9) // Personlig hygiejne, ok
* insert PlannedInterventionEntry(4404487e-978d-4377-bd92-c219e0f1a456) // Hverdagens aktiviteter, ok 
* insert PlannedInterventionEntry(f5475c7b-4dac-477c-9e53-492e66177865) // Madservice, ok
* insert PlannedInterventionEntry(66c3870f-eb9f-4ee8-8f2e-353a6c2cd81a) // Rengøring, ok
* insert PlannedInterventionEntry(749857f9-fdae-4d9c-b180-cf1a2c6019cb) // Mobilitet, ok
* insert EncounterEntry(c0f62d4d-91e5-4d28-a107-526e0a2fc20b) // 15/2-2021

// Conditions
Instance: 38ea1a7f-251a-4817-aa4a-b59d556db92a
InstanceOf: KLGatewayCareCondition
Description: "Personlig pleje, svære begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#1ceef776-0cfa-4acd-b222-c5bb2424e0c1 "3"
* code = $FSIII#feb38b55-c2d7-4d57-99c2-93622eaa0025 "Personlig pleje"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* recordedDate = 2021-02-10

Instance: 80e7cd6e-f926-412c-b326-578f05af643e
InstanceOf: KLGatewayCareCondition
Description: "Lave mad, svære begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#1ceef776-0cfa-4acd-b222-c5bb2424e0c1 "3" // Svære begrænsninger
* code = $FSIII#75bfc8db-a220-4801-a8c7-5e968e94d44b "Lave mad" // Lave mad
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* recordedDate = 2021-02-10

Instance: 4f47118b-25a0-4998-8f71-86b1ce220f11
InstanceOf: KLGatewayCareCondition
Description: "Lave husligt arbejde, svære begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#1ceef776-0cfa-4acd-b222-c5bb2424e0c1 "3" // Svære begrænsninger
* code = $FSIII#a7ac8429-513f-43cd-bc69-96a8d0e0f0ff "Lave husligt arbejde"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* recordedDate = 2021-02-10

Instance: 1c13a997-628d-4d01-af7c-9adb7c19b2a6
InstanceOf: KLGatewayCareCondition
Description: "Mobilitet og bevægelse, moderate begrænsninger for Jens Hansen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#d984ad21-48fe-4619-845e-2aa0303048e7 "2"
* code = $FSIII#d8aa5f09-cd9c-4996-a853-1c95ee98f25c "Mobilitet og bevægelse"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* recordedDate = 2021-02-10

// Goals
Instance: 82a5cd17-c4fa-4ede-be31-a26457a98834
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, moderate begrænsninger i personlig pleje for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad "FSIII tilstandsmål"
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4 "Tilstand forsvinder, mindskes eller forbliver uændret"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* startDate = 2021-02-10
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa "funktionsevneniveau"
* target.detailCodeableConcept = $FSIII#d984ad21-48fe-4619-845e-2aa0303048e7 "2"
* addresses = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) // Personlig pleje

Instance: 13520a3e-0c63-4cf8-b1ab-028313c8bc11
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, moderate begrænsninger i at lave mad for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad "FSIII tilstandsmål"
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4 "Tilstand forsvinder, mindskes eller forbliver uændret"
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa "funktionsevneniveau"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* startDate = 2021-02-10
* target.detailCodeableConcept = $FSIII#d984ad21-48fe-4619-845e-2aa0303048e7 "2"
* addresses = Reference(80e7cd6e-f926-412c-b326-578f05af643e) // Lave mad

Instance: cf7f8c3c-3ff8-460f-8c70-88895630105c
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, moderate begrænsninger i at lave husligt arbejde for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad "FSIII tilstandsmål"
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4 "Tilstand forsvinder, mindskes eller forbliver uændret"
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa "funktionsevneniveau"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* startDate = 2021-02-10
* target.detailCodeableConcept = $FSIII#d984ad21-48fe-4619-845e-2aa0303048e7 "2"	 // Moderate begrænsninger
* addresses = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde, ok

Instance: 0b16696f-1935-45a9-b716-135da8d9cef2
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, lette begrænsninger i mobilitet og bevægelse for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad "FSIII tilstandsmål"
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4 "Tilstand forsvinder, mindskes eller forbliver uændret"
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa "funktionsevneniveau"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* startDate = 2021-02-10
* target.detailCodeableConcept = $FSIII#fcc16cb1-41f0-4832-b834-110fba0aaabe "1" // Lette begrænsninger
* addresses = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse 


// Planned interventions
Instance: 0aff84ce-2b70-4677-bfa8-78c599d0eaf9
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing personal hygiene for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#17312894-b23f-43d9-9723-b725ac25d872 "Personlig hygiejne"
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) //Personlig pleje

Instance: 4404487e-978d-4377-bd92-c219e0f1a456
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing hverdagens aktiviteter for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#1ae7906b-5f16-4ba4-9077-7f59067cbedb "Hverdagens aktiviteter"
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde

Instance: f5475c7b-4dac-477c-9e53-492e66177865
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing madservice for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#9aad7654-b9f9-40a3-84d9-2ae1dec4228a "Madservice"
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(80e7cd6e-f926-412c-b326-578f05af643e) // Lave mad, ok

Instance: 66c3870f-eb9f-4ee8-8f2e-353a6c2cd81a
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing rengøring for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#43608562-e356-4990-8b96-e35128bbdc4f "Rengøring"
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde, ok

Instance: 749857f9-fdae-4d9c-b180-cf1a2c6019cb
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing mobilitet for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-12
* activity.detail.code.coding[level2] = $FSIII#ef8ee035-00d2-48b9-b366-27753ccd5504 "Mobilitet"
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse, ok


// Followup encounters
Instance: c0f62d4d-91e5-4d28-a107-526e0a2fc20b
InstanceOf: klgateway-care-general-encounter
Description: "Follow-up date for Jens Hansen's condition"
Usage: #inline
* status = 	http://hl7.org/fhir/encounter-status#planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624)
* period.start = 2021-02-15
* reasonReference[+] = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) // personlig pleje
* reasonReference[+] = Reference(80e7cd6e-f926-412c-b326-578f05af643e) // lave mad
* reasonReference[+] = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde
* reasonReference[+] = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse

//__________________________________________________________________________________________________

Instance: 832c69db-98b5-4aee-ab00-c24967e89d25
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-JensHansen-InterventionDelivery"
Description: "Reporting of Jens Hansen's delivered intervention on Febrauary 13th"
* type = #collection
* timestamp = 2021-02-14T02:47:35Z
* insert CitizenEntry(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* insert EncounterEntry(dc15e643-1ca7-4a94-a581-641efb9bb890) //morgenbesøg
* insert EncounterEntry(66e5facc-4231-4fcf-a277-58d67360e6a6) //middagsbesøg
* insert EncounterEntry(4177484b-b96a-4661-8664-dc8bd8df4dfe) //aftenbesøg
* insert PlannedInterventionEntry(0aff84ce-2b70-4677-bfa8-78c599d0eaf9) // Personlig hygiejne, ok
* insert PlannedInterventionEntry(4404487e-978d-4377-bd92-c219e0f1a456) // Hverdagens aktiviteter, ok
* insert PlannedInterventionEntry(749857f9-fdae-4d9c-b180-cf1a2c6019cb) // Mobilitet, ok
* insert ConditionEntry(38ea1a7f-251a-4817-aa4a-b59d556db92a) // Personlig pleje, OK
* insert ConditionEntry(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde, OK
* insert ConditionEntry(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse, OK

Instance: dc15e643-1ca7-4a94-a581-641efb9bb890 // Morgenbesøg
InstanceOf: klgateway-care-general-encounter
Description: "General encounter used to document delivery of Jens Hansen's Intervetions in the morning"
Usage: #inline
* status = http://hl7.org/fhir/encounter-status#finished
* class = $v3-ActCode#HH
* type = $KLCommonCodes#784275f1-6822-4a88-b361-d958007d5253 "udførelse af planlagt indsats"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624)
* period.start = 2021-02-13T08:05:00Z
* period.end = 2021-02-13T08:25:00Z
* extension[basedOnIntervention][+].valueReference = Reference(0aff84ce-2b70-4677-bfa8-78c599d0eaf9)
* extension[basedOnIntervention][+].valueReference = Reference(4404487e-978d-4377-bd92-c219e0f1a456)
* extension[basedOnIntervention][+].valueReference = Reference(749857f9-fdae-4d9c-b180-cf1a2c6019cb)


Instance: 66e5facc-4231-4fcf-a277-58d67360e6a6 // Middagsbesøg
InstanceOf: klgateway-care-general-encounter
Description: "General encounter used to document delivery of Jens Hansen's Intervetions in the middel of the day"
Usage: #inline
* status = http://hl7.org/fhir/encounter-status#finished
* class = $v3-ActCode#HH
* type = $KLCommonCodes#784275f1-6822-4a88-b361-d958007d5253 "udførelse af planlagt indsats"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624)
* period.start = 2021-02-13T13:25:00Z
* period.end = 2021-02-13T13:45:00Z
* extension[basedOnIntervention][+].valueReference = Reference(0aff84ce-2b70-4677-bfa8-78c599d0eaf9)
* extension[basedOnIntervention][+].valueReference = Reference(4404487e-978d-4377-bd92-c219e0f1a456)
* extension[basedOnIntervention][+].valueReference = Reference(749857f9-fdae-4d9c-b180-cf1a2c6019cb)

Instance: 4177484b-b96a-4661-8664-dc8bd8df4dfe // Aftenbesøg
InstanceOf: klgateway-care-general-encounter
Description: "General encounter used to document delivery of Jens Hansen's Intervetions in the evening"
Usage: #inline
* status = http://hl7.org/fhir/encounter-status#finished
* class = $v3-ActCode#HH
* type = $KLCommonCodes#784275f1-6822-4a88-b361-d958007d5253 "udførelse af planlagt indsats"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624)
* period.start = 2021-02-13T21:00:00Z
* period.end = 2021-02-13T21:20:00Z
* extension[basedOnIntervention][+].valueReference = Reference(0aff84ce-2b70-4677-bfa8-78c599d0eaf9)
* extension[basedOnIntervention][+].valueReference = Reference(4404487e-978d-4377-bd92-c219e0f1a456)
* extension[basedOnIntervention][+].valueReference = Reference(749857f9-fdae-4d9c-b180-cf1a2c6019cb)

// ------------------------------------------------------------------------------------------------
Instance: 8ec154f2-1429-4a41-aca7-f900e1d3bee2
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-JensHansen-2"
Description: "Reporting of Jens Hansen after second encounter with Home Care Assessor updating follow-up date"
* type = #collection
* timestamp = 2021-02-15T08:39:34Z
* insert CitizenEntry(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* insert ConditionEntry(38ea1a7f-251a-4817-aa4a-b59d556db92a) // Personlig pleje, OK
* insert ConditionEntry(80e7cd6e-f926-412c-b326-578f05af643e) // Lave mad, OK
* insert ConditionEntry(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde, OK
* insert ConditionEntry(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse, OK

* insert EncounterEntryVersion(c0f62d4d-91e5-4d28-a107-526e0a2fc20b, v2) //15/2-2021
* insert EncounterEntry(26116f56-3f78-4dbd-9bfc-8d83c0272a2a) // 24/2-2021
* insert FollowUpObservationEntry(58a9388b-87ff-4e09-842a-3109cfce1566) // Fortsættes


// Followup encounters
Instance: 26116f56-3f78-4dbd-9bfc-8d83c0272a2a
InstanceOf: klgateway-care-general-encounter
Description: "Encounter for a follow-up for Jens Hansen on February 24th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-24
* reasonReference[+] = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) // personlig pleje
* reasonReference[+] = Reference(80e7cd6e-f926-412c-b326-578f05af643e) // lave mad
* reasonReference[+] = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde
* reasonReference[+] = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse

Instance: c0f62d4d-91e5-4d28-a107-526e0a2fc20b-v2
InstanceOf: klgateway-care-general-encounter
Description: "Follow-up date for Jens Hansen's condition on February 15th, 2021"
Usage: #inline
* id = "c0f62d4d-91e5-4d28-a107-526e0a2fc20b"
* status = 	http://hl7.org/fhir/encounter-status#finished
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624)
* period.start = 2021-02-15
* reasonReference[+] = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) // personlig pleje
* reasonReference[+] = Reference(80e7cd6e-f926-412c-b326-578f05af643e) // lave mad
* reasonReference[+] = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde
* reasonReference[+] = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse

// Followup Observations
Instance: 58a9388b-87ff-4e09-842a-3109cfce1566
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that focus on all conditions should be continued unchanged for Jens Hansen"
Usage: #inline
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* focus[+] = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) // personlig pleje
* focus[+] = Reference(80e7cd6e-f926-412c-b326-578f05af643e) // lave mad
* focus[+] = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde
* focus[+] = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse
* effectiveDateTime = 2021-02-15
* valueCodeableConcept = $FSIII#9c90b0e5-9c0a-4b72-a18c-76cd6d6c6213 "Fortsættes"


// ------------------------------------------------------------------------------------------------

Instance: 89071c96-e053-40d5-8873-105b7bad40f9
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-JensHansen-3"
Description: "Reporting of Jens Hansen after first encounter with Home Care Assessor at the hospital"
* type = #collection
* timestamp = 2021-02-25T02:00:36Z
* insert CitizenEntry(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* insert ConditionEntryVersion(38ea1a7f-251a-4817-aa4a-b59d556db92a, v2) // Personlig pleje
* insert ConditionEntryVersion(80e7cd6e-f926-412c-b326-578f05af643e, v2) // Lave mad
* insert ConditionEntryVersion(4f47118b-25a0-4998-8f71-86b1ce220f11, v2) // Lave husligt arbejde
* insert ConditionEntry(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse
* insert GoalEntry(0b1999e8-4b72-4ed1-8766-4acbff7962c9) // Ingen begrænsninger i Personlig pleje
* insert GoalEntry(98c95f84-b32c-49b9-8d25-d6268f3710aa) // Lette begrænsninger i at lave mad
* insert GoalEntry(6c22784a-1303-46a8-bbae-8b9f19dd6319) // Lette begrænsninger i at lave husligt arbejde
* insert GoalEntry(877958e2-27c2-4b9e-bd12-e1a051a22cdb) // Ingen eller ubetydelige begrænsninger i mobilitet og bevægelse
* insert PlannedInterventionEntryVersion(0aff84ce-2b70-4677-bfa8-78c599d0eaf9, v2) // Personlig hygiejne afslttet 
* insert PlannedInterventionEntryVersion(749857f9-fdae-4d9c-b180-cf1a2c6019cb, v2) // Mobilitet afsluttet
* insert PlannedInterventionEntry(f824fbab-28a7-4b13-87d3-24e120873455) // RH Personlig hygiejne
* insert PlannedInterventionEntry(474e79f1-86b4-4e74-a122-da0b48bf8936) // RH Mobilitet
* insert EncounterEntryVersion(26116f56-3f78-4dbd-9bfc-8d83c0272a2a, v2) // 24/2-2021
* insert EncounterEntry(48c2b2c1-afbd-4d28-a51b-57b6837829e4) // 10/3-2021
* insert FollowUpObservationEntry(a80bb9e0-5838-4bf1-924b-31f88aecc3c7) // Revisitation


// Conditions
Instance: 38ea1a7f-251a-4817-aa4a-b59d556db92a-v2
InstanceOf: KLGatewayCareCondition
Description: "Personlig pleje, Moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "38ea1a7f-251a-4817-aa4a-b59d556db92a"
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#d984ad21-48fe-4619-845e-2aa0303048e7 "2" //Moderate begrænsninger
* code = $FSIII#feb38b55-c2d7-4d57-99c2-93622eaa0025 "Personlig pleje"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* recordedDate = 2021-02-10

Instance: 80e7cd6e-f926-412c-b326-578f05af643e-v2
InstanceOf: KLGatewayCareCondition
Description: "Lave mad, Moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "80e7cd6e-f926-412c-b326-578f05af643e"
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#d984ad21-48fe-4619-845e-2aa0303048e7 "2" //Moderate begrænsninger
* code = $FSIII#75bfc8db-a220-4801-a8c7-5e968e94d44b "Lave mad" // Lave mad
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* recordedDate = 2021-02-10

Instance: 4f47118b-25a0-4998-8f71-86b1ce220f11-v2
InstanceOf: KLGatewayCareCondition
Description: "Lave husligt arbejde, moderate begrænsninger for Jens Hansen"
Usage: #inline
* id = "4f47118b-25a0-4998-8f71-86b1ce220f11"
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#d984ad21-48fe-4619-845e-2aa0303048e7 "2" //Moderate begrænsninger
* code = $FSIII#a7ac8429-513f-43cd-bc69-96a8d0e0f0ff "Lave husligt arbejde"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* recordedDate = 2021-02-10

// Goals
Instance: 0b1999e8-4b72-4ed1-8766-4acbff7962c9 // Ingen begrænsninger i Personlig pleje
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, Ingen begrænsninger i personlig pleje for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad "FSIII tilstandsmål"
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4 "Tilstand forsvinder, mindskes eller forbliver uændret"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* startDate = 2021-02-24
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa "funktionsevneniveau"
* target.detailCodeableConcept = $FSIII#9c5cfb57-a498-40e5-98a7-792bf5fb205b "0"
* addresses = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) // Personlig pleje

Instance: 98c95f84-b32c-49b9-8d25-d6268f3710aa // Lette begrænsninger i at lave mad
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, Lette begrænsninger i at lave mad for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad "FSIII tilstandsmål"
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4 "Tilstand forsvinder, mindskes eller forbliver uændret"
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa "funktionsevneniveau"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* startDate = 2021-02-24
* target.detailCodeableConcept = $FSIII#fcc16cb1-41f0-4832-b834-110fba0aaabe "1"
* addresses = Reference(80e7cd6e-f926-412c-b326-578f05af643e) // Lave mad

Instance: 6c22784a-1303-46a8-bbae-8b9f19dd6319 // Lette begrænsninger i at lave husligt arbejde
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, Lette begrænsninger i at lave husligt arbejde for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad "FSIII tilstandsmål"
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4 "Tilstand forsvinder, mindskes eller forbliver uændret"
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa "funktionsevneniveau"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* startDate = 2021-02-24
* target.detailCodeableConcept = $FSIII#fcc16cb1-41f0-4832-b834-110fba0aaabe "1"	 // Lette begrænsninger
* addresses = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde, ok

Instance: 877958e2-27c2-4b9e-bd12-e1a051a22cdb // Ingen eller ubetydelige begrænsninger i mobilitet og bevægelse
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, Ingen eller ubetydelige begrænsninger i mobilitet og bevægelse for Jens Hansen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad "FSIII tilstandsmål"
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4 "Tilstand forsvinder, mindskes eller forbliver uændret"
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa "funktionsevneniveau"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* startDate = 2021-02-24
* target.detailCodeableConcept = $FSIII#9c5cfb57-a498-40e5-98a7-792bf5fb205b "0" // Ingen/ubetydelige begrænsninger.
* addresses = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse 

// Planned interventions
Instance: 0aff84ce-2b70-4677-bfa8-78c599d0eaf9-v2
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing personal hygiene for Jens Hansen"
Usage: #inline
* id = "0aff84ce-2b70-4677-bfa8-78c599d0eaf9"
* status = #completed
* intent = #plan
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-12
* period.end = 2021-02-24
* activity.detail.code.coding[level2] = $FSIII#17312894-b23f-43d9-9723-b725ac25d872 "Personlig hygiejne"
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) //Personlig pleje

Instance: 749857f9-fdae-4d9c-b180-cf1a2c6019cb-v2
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing mobilitet for Jens Hansen"
Usage: #inline
* id = "749857f9-fdae-4d9c-b180-cf1a2c6019cb"
* status = #completed
* intent = #plan
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-12
* period.end = 2021-02-24
* activity.detail.code.coding[level2] = $FSIII#ef8ee035-00d2-48b9-b366-27753ccd5504 "Mobilitet"
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse, ok

Instance: f824fbab-28a7-4b13-87d3-24e120873455
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing RH personlig hygiejne for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-25
* activity.detail.code.coding[level2] = $FSIII#2912752c-2e9e-4702-8787-b45f73ff5b05 "RH Personlig hygiejne"
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) //Personlig pleje

Instance: 474e79f1-86b4-4e74-a122-da0b48bf8936
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing RH mobilitet for Jens Hansen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-25
* activity.detail.code.coding[level2] = $FSIII#0b654911-f2b6-47d3-948b-3e9fb315b4c9 "RH Mobilitet"
* activity.detail.status = #in-progress
* activity.detail.reasonReference[+] = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse, ok

// Followup encounters
Instance: 26116f56-3f78-4dbd-9bfc-8d83c0272a2a-v2
InstanceOf: klgateway-care-general-encounter
Description: "Encounter for a follow-up for Jens Hansen on February 24th, 2021"
Usage: #inline
* id = "26116f56-3f78-4dbd-9bfc-8d83c0272a2a"
* status = http://hl7.org/fhir/encounter-status#finished
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-02-24
* reasonReference[+] = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) // personlig pleje
* reasonReference[+] = Reference(80e7cd6e-f926-412c-b326-578f05af643e) // lave mad
* reasonReference[+] = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde
* reasonReference[+] = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse

Instance: 48c2b2c1-afbd-4d28-a51b-57b6837829e4
InstanceOf: klgateway-care-general-encounter
Description: "Encounter for a follow-up for Jens Hansen on March 10th, 2021"
Usage: #inline
* status = http://hl7.org/fhir/encounter-status#planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* period.start = 2021-03-10
* reasonReference[+] = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) // personlig pleje
* reasonReference[+] = Reference(80e7cd6e-f926-412c-b326-578f05af643e) // lave mad
* reasonReference[+] = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde
* reasonReference[+] = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse


// Followup Observations
Instance: a80bb9e0-5838-4bf1-924b-31f88aecc3c7
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that focus on all conditions should be continued unchanged for Jens Hansen"
Usage: #inline
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(0533e773-c9e6-4cf5-b42d-f3ee07a9c624) // Jens Hansen
* focus[+] = Reference(38ea1a7f-251a-4817-aa4a-b59d556db92a) // personlig pleje
* focus[+] = Reference(80e7cd6e-f926-412c-b326-578f05af643e) // lave mad
* focus[+] = Reference(4f47118b-25a0-4998-8f71-86b1ce220f11) // Lave husligt arbejde
* focus[+] = Reference(1c13a997-628d-4d01-af7c-9adb7c19b2a6) // Mobilitet og bevægelse
* effectiveDateTime = 2021-02-24
* valueCodeableConcept = $FSIII#61b9a5c2-2ea7-45ad-82b8-53cbb513290e "Revisitation"

// // ------------------------------------------------------------------------------------------------

// Citizen
Instance: 0533e773-c9e6-4cf5-b42d-f3ee07a9c624
InstanceOf: KLGatewayCareCitizen
Description: "Citizen Jens Hansen"
Usage: #inline
* identifier.use = #official
* identifier.value = "0101410001"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "123456789012345"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"
* deceasedBoolean = false

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/matterOfInterestObservation.fsh

Profile: KLGatewayCareMatterOfInterestObservation
Parent: Observation
Id: klgateway-care-matter-of-interest-observation
Title: "CareMatterOfInterestObservation"
Description: "Matter or area of interest in relation to the care of the citizen."
* identifier ..0
* basedOn ..0
* partOf ..0
* category ..0
* code.coding 1..1
* code.coding from FSIIICareMatterOfInterests
* subject only Reference(klgateway-care-citizen)
* subject ^type.aggregation = #bundled
* focus ..0
* encounter ..0
* effective[x] 1..1
* effective[x] only dateTime
* issued ..0
* performer ..0
* value[x] MS
* value[x] only CodeableConcept
* value[x] from KLGatewayCareMatterOfInterestValues
* value[x] ^definition = "Shall contain 'B6 Ikke relevant' when the matter of interest is no longer in focus, otherwise the value shall not be set."
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
* extension contains klgateway-care-finding-context-at-risk-extension named findingContextAtRisk 0..

//Danish descriptions
* code ^short = "[DK] oplysningskode"
* subject ^short = "[DK] oplysningssubjekt"
* effective[x] ^short = "[DK] oplysningstid"
* status ^short = "[DK] oplysningsstatus"


Alias: $FSIII = urn:oid:1.2.208.176.2.21

Instance: EgensomsorgBegraensninger
InstanceOf: KLGatewayCareMatterOfInterestObservation
Description: "An observation that self-care is an area that is a matter of interest regarding the test person"
* status = #final
* code.coding = $FSIII#J1
* subject = Reference(TestPerson)
* effectiveDateTime = 2020-08-14

Instance: EgensomsorgBegraensningerOmkringKropspleje
InstanceOf: KLGatewayCareMatterOfInterestObservation
Description: "An observation that self-care is an area that is a matter of interest regarding the test person with potential problems around bodily care"
* status = #final
* code.coding = $FSIII#J1
* subject = Reference(TestPerson)
* effectiveDateTime = 2020-08-14
* extension[findingContextAtRisk].valueCoding = $FSIII#J1.2


---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/PeterOlsen.fsh

Alias: $FSIII = urn:oid:1.2.208.176.2.21

// ------------------------------------------------------------------------------------------------

Instance: d54206de-c95b-4c53-9517-6eb155dca99a
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-1"
Description: "Reporting of Peter Olsen after first encounter with the Acute Team"
* type = #collection
* timestamp = 2021-02-10T13:34:56Z
* insert CitizenEntry(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* insert ConditionEntry(a881788d-1b27-46e3-8b76-607bc49876fd) // Respirationsproblemer
* insert ConditionEntry(ad506910-9030-4ddb-b8ce-7bb6a69d808e) // Problemer med mobilitet og bevægelse
* insert CompletedInterventionEntry(a3062931-5443-4c2f-b1af-7426c23cd362) // Undersøgelse og måling af værdier 
* insert CompletedInterventionEntry(ac3d11f3-666e-4b66-b3d3-deb9b7d8dba9) // Supplerende udredning
* insert PlannedInterventionEntry(f99b219d-8b70-4423-a32f-d7e97d553305) // Respirationsbehandling
* insert EncounterEntry(0c4469c9-a8c2-4691-9994-d8493217f564) // 12/2-2021

// Conditions
Instance: a881788d-1b27-46e3-8b76-607bc49876fd
InstanceOf: KLGatewayCareCondition
Description: "Respirationsproblemer for Peter Olsen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* code = $FSIII#I7.1 // Respirationsproblemer
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(0c4469c9-a8c2-4691-9994-d8493217f564) // 12/2-2021

Instance: ad506910-9030-4ddb-b8ce-7bb6a69d808e
InstanceOf: KLGatewayCareCondition
Description: "Problemer med mobilitet og bevægelse for Peter Olsen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* code = $FSIII#I2.1 // Problemer med mobilitet og bevægelse
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(0c4469c9-a8c2-4691-9994-d8493217f564) // 12/2-2021

// Completed interventions
Instance: a3062931-5443-4c2f-b1af-7426c23cd362
InstanceOf: KLGatewayCareCompletedIntervention
Description: "Completed intervention doing undersøgelse og måling af værdier for Peter Olsen"
Usage: #inline
* status = #completed
* code.coding[level2].system = "urn:oid:1.2.208.176.2.21"
* code.coding[level2].code = #G1.41 // Undersøgelse og måling af værdier
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* performedDateTime = 2021-02-10T13:00:00Z
* reasonReference = Reference(a881788d-1b27-46e3-8b76-607bc49876fd) // Respirationsproblemer

Instance: ac3d11f3-666e-4b66-b3d3-deb9b7d8dba9
InstanceOf: KLGatewayCareCompletedIntervention
Description: "Completed intervention doing supplerende udredning for Peter Olsen"
Usage: #inline
* status = #completed
* code.coding[level2].system = "urn:oid:1.2.208.176.2.21"
* code.coding[level2].code = #G1.47 // Supplerende udredning
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* performedDateTime = 2021-02-10T13:00:00Z
* reasonReference = Reference(a881788d-1b27-46e3-8b76-607bc49876fd) // Respirationsproblemer

// Planned interventions
Instance: f99b219d-8b70-4423-a32f-d7e97d553305
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing respirationsbehandling for Peter Olsen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* period.start = 2021-02-10
* activity.detail.code.coding[level2] = $FSIII#G1.29 // Respirationsbehandling
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(ad506910-9030-4ddb-b8ce-7bb6a69d808e) // Problemer med mobilitet og bevægelse

// Followup encounters
Instance: 0c4469c9-a8c2-4691-9994-d8493217f564
InstanceOf: KLGatewayCareEncounter
Description: "Encounter for a follow-up for Peter Olsen on February 12th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* period.start = 2021-02-12

// ------------------------------------------------------------------------------------------------

Instance: abc81b1f-b3ba-41f0-9f4b-2fc4df5aaabb
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-2"
Description: "Reporting of Peter Olsen after second encounter with the Acute Team"
* type = #collection
* timestamp = 2021-02-12T12:46:48Z
* insert CitizenEntry(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* insert ConditionEntryVersion(a881788d-1b27-46e3-8b76-607bc49876fd, v2) // Respirationsproblemer
* insert ConditionEntryVersion(ad506910-9030-4ddb-b8ce-7bb6a69d808e, v2) // // Problemer med mobilitet og bevægelse
* insert FollowUpObservationEntry(ee421741-4e60-46f2-b4d6-fc60bf85c42b) // Fortsættes
* insert EncounterEntry(817de94d-84f0-47c3-839a-ae438075ec6f) // 14/2-2021

// Conditions
Instance: a881788d-1b27-46e3-8b76-607bc49876fd-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Respirationsproblemer for Peter Olsen"
Usage: #inline
* id = "a881788d-1b27-46e3-8b76-607bc49876fd" // Real id
* clinicalStatus = $ConditionClinical#inactive
* code = $FSIII#I7.1 // Respirationsproblemer
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(817de94d-84f0-47c3-839a-ae438075ec6f) // 14/2-2021

Instance: ad506910-9030-4ddb-b8ce-7bb6a69d808e-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Problemer med mobilitet og bevægelse for Peter Olsen"
Usage: #inline
* id = "ad506910-9030-4ddb-b8ce-7bb6a69d808e" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* code = $FSIII#I2.1 // Problemer med mobilitet og bevægelse
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(817de94d-84f0-47c3-839a-ae438075ec6f) // 14/2-2021

// Followup Observations
Instance: ee421741-4e60-46f2-b4d6-fc60bf85c42b
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that focus on respirationsproblemer should be continued unchanged for Jens Hansen"
Usage: #inline
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* focus[+] = Reference(a881788d-1b27-46e3-8b76-607bc49876fd) // Respirationsproblemer
* focus[+] = Reference(ad506910-9030-4ddb-b8ce-7bb6a69d808e) // Problemer med mobilitet og bevægelse
* effectiveDateTime = 2021-02-12
* valueCodeableConcept = $FSIII#E1 // Fortsættes uændret

// Followup encounters
Instance: 817de94d-84f0-47c3-839a-ae438075ec6f
InstanceOf: KLGatewayCareEncounter
Description: "Encounter for a follow-up for Peter Olsen on February 14th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* period.start = 2021-02-14

// ------------------------------------------------------------------------------------------------

Instance: 0c1112c3-77b5-4d85-965c-0c26228ec7ef
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-3"
Description: "Reporting of Peter Olsen after third encounter with the Acute Team"
* type = #collection
* timestamp = 2021-02-14T15:23:12Z
* insert CitizenEntry(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* insert ConditionEntryVersion(a881788d-1b27-46e3-8b76-607bc49876fd, v3) // Respirationsproblemer
* insert ConditionEntryVersion(ad506910-9030-4ddb-b8ce-7bb6a69d808e, v3) // // Problemer med mobilitet og bevægelse
* insert FollowUpObservationEntry(c0e46d1a-bcd2-4b4f-bc74-db1237157d4e) // Afsluttes
* insert FollowUpObservationEntry(4c160af3-dc6f-4405-a52a-b93447e06b68) // Ændres inden for rammen
* insert EncounterEntry(1fb0990d-aac7-4661-b976-874e051c5ae6) // 15/2-2021

// Conditions
Instance: a881788d-1b27-46e3-8b76-607bc49876fd-v3 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Respirationsproblemer for Peter Olsen"
Usage: #inline
* id = "a881788d-1b27-46e3-8b76-607bc49876fd" // Real id
* clinicalStatus = $ConditionClinical#inactive
* code = $FSIII#I7.1 // Respirationsproblemer
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* recordedDate = 2021-02-10

Instance: ad506910-9030-4ddb-b8ce-7bb6a69d808e-v3 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Problemer med mobilitet og bevægelse for Peter Olsen"
Usage: #inline
* id = "ad506910-9030-4ddb-b8ce-7bb6a69d808e" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* code = $FSIII#I2.1 // Problemer med mobilitet og bevægelse
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(1fb0990d-aac7-4661-b976-874e051c5ae6) // 15/2-2021

// Follow-up observations
Instance: c0e46d1a-bcd2-4b4f-bc74-db1237157d4e
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that focus on respirationsproblemer should be continued unchanged for Jens Hansen"
Usage: #inline
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* focus[+] = Reference(a881788d-1b27-46e3-8b76-607bc49876fd) // Respirationsproblemer
* effectiveDateTime = 2021-02-12
* valueCodeableConcept = $FSIII#E3 // Afsluttes

Instance: 4c160af3-dc6f-4405-a52a-b93447e06b68
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that focus on respirationsproblemer should be changed (inden for rammen) for Jens Hansen"
Usage: #inline
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* focus[+] = Reference(ad506910-9030-4ddb-b8ce-7bb6a69d808e) // Problemer med mobilitet og bevægelse
* effectiveDateTime = 2021-02-14
* valueCodeableConcept = $FSIII#E2 // Ændres inden for rammen


// Followup encounters
Instance: 1fb0990d-aac7-4661-b976-874e051c5ae6
InstanceOf: KLGatewayCareEncounter
Description: "Encounter for a follow-up for Peter Olsen on February 15th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* period.start = 2021-02-15

// ------------------------------------------------------------------------------------------------

Instance: 374484d0-00cb-4b63-94d1-a0d984afc339
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-4"
Description: "Reporting of Peter Olsen after first encounter with home nursing"
* type = #collection
* timestamp = 2021-02-15T08:17:19Z
* insert CitizenEntry(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* insert ConditionEntryVersion(ad506910-9030-4ddb-b8ce-7bb6a69d808e, v4) // Problemer med mobilitet og bevægelse
* insert ConditionEntry(39869f95-3b5f-4cbf-9af9-79d1344791f6) // Gå
* insert GoalEntry(08c1aa9d-ab60-423d-900b-1fc2eba0a2a7) // Ingen begrænsninger i at gå
* insert PlannedInterventionEntry(36ac2e9c-cbe4-4f2d-978e-7cccaf6750c2) // Vedligehold af færdigheder 
* insert EncounterEntry(99e5f54d-f9cd-44ea-9901-b6b5d6bf9285) // 17/2-2021
* insert EncounterEntry(f5b962ec-f815-4f12-a1d8-bbd504db79ed) // 6/4-2021

// Conditions
Instance: ad506910-9030-4ddb-b8ce-7bb6a69d808e-v4 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Problemer med mobilitet og bevægelse for Peter Olsen"
Usage: #inline
* id = "ad506910-9030-4ddb-b8ce-7bb6a69d808e" // Real id
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* code = $FSIII#I2.1 // Problemer med mobilitet og bevægelse
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* recordedDate = 2021-02-10
* extension[followUpEncounter].valueReference = Reference(99e5f54d-f9cd-44ea-9901-b6b5d6bf9285) // 17/2-2021

Instance: 39869f95-3b5f-4cbf-9af9-79d1344791f6
InstanceOf: KLGatewayCareCondition
Description: "Gå, lette begrænsninger for Peter Olsen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#B2 // Lette begrænsninger
* code = $FSIII#J3.8 // Gå
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* recordedDate = 2021-02-15
* extension[followUpEncounter].valueReference = Reference(f5b962ec-f815-4f12-a1d8-bbd504db79ed) // 6/4-2021

// Goals
Instance: 08c1aa9d-ab60-423d-900b-1fc2eba0a2a7
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, ingen eller ubetydelige begrænsninger i at gå for Peter Olsen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* startDate = 2021-02-15
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa
* target.detailCodeableConcept = $FSIII#B1 // Ingen eller ubetydelige begrænsninger
* addresses = Reference(39869f95-3b5f-4cbf-9af9-79d1344791f6) // Gå 

// Planned interventions
Instance: 36ac2e9c-cbe4-4f2d-978e-7cccaf6750c2
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing vedligehold af færdigheder for Peter Olsen"
Usage: #inline
* status = #completed
* intent = #plan
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* period.start = 2021-02-18
* activity.detail.code.coding[level2] = $FSIII#H6.1 // Vedligehold af færdigheder
* activity.detail.status = #completed
* activity.detail.reasonReference = Reference(39869f95-3b5f-4cbf-9af9-79d1344791f6) // Gå

// Followup encounters
Instance: 99e5f54d-f9cd-44ea-9901-b6b5d6bf9285
InstanceOf: KLGatewayCareEncounter
Description: "Encounter for a follow-up for Peter Olsen on February 17th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* period.start = 2021-02-17

Instance: f5b962ec-f815-4f12-a1d8-bbd504db79ed
InstanceOf: KLGatewayCareEncounter
Description: "Encounter for a follow-up for Peter Olsen on April 6th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* period.start = 2021-04-06

// ------------------------------------------------------------------------------------------------

Instance: cc93afc5-7849-4895-84eb-00bb5c129c0b // End nursing condition and intervention
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-5"
Description: "Reporting of Peter Olsen after second encounter with home nursing"
* type = #collection
* timestamp = 2021-02-17T11:51:44Z
* insert CitizenEntry(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* insert ConditionEntryVersion(ad506910-9030-4ddb-b8ce-7bb6a69d808e, v5) // Problemer med mobilitet og bevægelse
* insert PlannedInterventionEntryVersion(f99b219d-8b70-4423-a32f-d7e97d553305, v5) // Respirationsbehandling
* insert FollowUpObservationEntry(d54367e4-c2c5-49f6-bd28-a154af029b36) // Afsluttes

// Conditions
Instance: ad506910-9030-4ddb-b8ce-7bb6a69d808e-v5 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Problemer med mobilitet og bevægelse for Peter Olsen"
Usage: #inline
* id = "ad506910-9030-4ddb-b8ce-7bb6a69d808e" // Real id
* clinicalStatus = $ConditionClinical#inactive
* code = $FSIII#I2.1 // Problemer med mobilitet og bevægelse
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* recordedDate = 2021-02-15

// Planned interventions
Instance: f99b219d-8b70-4423-a32f-d7e97d553305-v5 // Fake id
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing respirationsbehandling for Peter Olsen"
Usage: #inline
* id = "f99b219d-8b70-4423-a32f-d7e97d553305" // Real id
* status = #completed
* intent = #plan
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* period.start = 2021-02-10
* period.end = 2021-02-17
* activity.detail.code.coding[level2] = $FSIII#G1.30 // Respirationsbehandling
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(ad506910-9030-4ddb-b8ce-7bb6a69d808e) // Problemer med mobilitet og bevægelse

// Follow-up observations
Instance: d54367e4-c2c5-49f6-bd28-a154af029b36
InstanceOf: KLGatewayCareFollowUpObservation
Description: "Follow-up observation documenting that focus on problemer med mobilitet og bevægelse afsluttes for Peter Olsen"
Usage: #inline
* status = #final
* code = $SnomedCT#712744002
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* focus[+] = Reference(ad506910-9030-4ddb-b8ce-7bb6a69d808e) // Problemer med mobilitet og bevægelse
* effectiveDateTime = 2021-02-17
* valueCodeableConcept = $FSIII#E3 // Afsluttes

// ------------------------------------------------------------------------------------------------

Instance: 1652f2a9-510a-4cd3-8fc4-8b69d0ffedae
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-6"
Description: "Reporting of Peter Olsen after first encounter with training"
* type = #collection
* timestamp = 2021-02-18T09:11:29Z
* insert CitizenEntry(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* insert ConditionEntry(39869f95-3b5f-4cbf-9af9-79d1344791f6) // Gå
* insert CitizensOwnObservationEntry(2d5aab71-9c3f-49b2-92e0-07619ae321e5) // Udfører selv
* insert CitizensOwnObservationEntry(f35aa1be-0ed2-4d86-8d62-178a7d20c923) // Oplever ikke begrænsninger
* insert EncounterEntry(f5b962ec-f815-4f12-a1d8-bbd504db79ed) // 6/4-2021

// Citizens own observations
Instance: 2d5aab71-9c3f-49b2-92e0-07619ae321e5
InstanceOf: KLGatewayCareCitizensOwnObservation
Description: "Peter Olsen udfører selv at gå"
Usage: #inline
* status = #final
* code = $FSIII#C // Udførelse
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* focus = Reference(39869f95-3b5f-4cbf-9af9-79d1344791f6) // Gå
* effectiveDateTime = 2020-08-21
* valueCodeableConcept = $FSIII#C1 // Udfører selv

Instance: f35aa1be-0ed2-4d86-8d62-178a7d20c923
InstanceOf: KLGatewayCareCitizensOwnObservation
Description: "Peter Olsen oplever ikke begrænsninger i at gå"
Usage: #inline
* status = #final
* code = $FSIII#D // Betydning
* subject = Reference(4a45e179-ace1-4ace-9991-8276c0ba490a) // Peter Olsen
* focus = Reference(39869f95-3b5f-4cbf-9af9-79d1344791f6) // Gå
* effectiveDateTime = 2020-08-21
* valueCodeableConcept = $FSIII#D1 // Oplever ikke begrænsninger

// ------------------------------------------------------------------------------------------------

// Citizen
Instance: 4a45e179-ace1-4ace-9991-8276c0ba490a
InstanceOf: KLGatewayCareCitizen
Description: "Citizen Peter Olsen"
Usage: #inline
* identifier.use = #official
* identifier.value = "0101570001"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "123456789012345"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/PeterOlsenNew.fsh

Instance: 4768772b-67f3-4468-9a2f-ee9a0254a323
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-1"
Description: "Reporting of Peter Olsen after first encounter with the Acute Team"
* type = #collection
* timestamp = 2021-02-10T13:34:56Z
* insert CitizenEntry(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* insert ConditionEntry(f8a70023-0688-4a93-9b74-21e5089dc365) // Respirationsproblemer
* insert ConditionEntry(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // Problemer med mobilitet og bevægelse
* insert CompletedInterventionEntry(442929fc-46ab-446c-80ad-5ab70410f32d) // Undersøgelse og måling af værdier 
* insert CompletedInterventionEntry(6e1323cf-d73f-4394-ad4b-4a370c281495) // Supplerende udredning
* insert PlannedInterventionEntry(9a07e8ad-4e71-42c7-a67f-96f5944f51a6) // Respirationsbehandling
* insert EncounterEntry(6e7188a7-048d-4060-96fe-7ae7b4201739) // 12/2-2021

// Conditions
Instance: f8a70023-0688-4a93-9b74-21e5089dc365
InstanceOf: KLGatewayCareCondition
Description: "Respirationsproblemer for Peter Olsen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* code = $FSIII#dae40f60-8dab-4bd3-ab72-b07d0f278692 "Respirationsproblemer"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* recordedDate = 2021-02-10

Instance: 9c818a37-6525-49bb-bcea-5fe5df01f6f4
InstanceOf: KLGatewayCareCondition
Description: "Problemer med mobilitet og bevægelse for Peter Olsen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* code = $FSIII#92caace8-60e3-4861-80ac-6e372a700e1d "Problemer med mobilitet og bevægelse"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* recordedDate = 2021-02-10

// Completed interventions
Instance: 442929fc-46ab-446c-80ad-5ab70410f32d
InstanceOf: KLGatewayCareCompletedIntervention
Description: "Completed intervention doing undersøgelser og måling af værdier for Peter Olsen"
Usage: #inline
* status = #completed
* code.coding[level2].system = "urn:oid:1.2.208.176.2.21"
* code.coding[level2].code = #34b8b9a0-41bf-4dce-88f6-409de21fb175 // Undersøgelse og måling af værdier
* code.coding[level2].display = "Undersøgelser og måling af værdier"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* performedDateTime = 2021-02-10T13:00:00Z
* reasonReference = Reference(f8a70023-0688-4a93-9b74-21e5089dc365) // Respirationsproblemer

Instance: 6e1323cf-d73f-4394-ad4b-4a370c281495
InstanceOf: KLGatewayCareCompletedIntervention
Description: "Completed intervention doing supplerende udredning for Peter Olsen"
Usage: #inline
* status = #completed
* code.coding[level2].system = "urn:oid:1.2.208.176.2.21"
* code.coding[level2].code = #b2634ff3-544b-46e8-8908-b056b3c4e27c // Supplerende udredning
* code.coding[level2].display = "Supplerende udredning"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* performedDateTime = 2021-02-10T13:00:00Z
* reasonReference = Reference(f8a70023-0688-4a93-9b74-21e5089dc365) // Respirationsproblemer

// Planned interventions
Instance: 9a07e8ad-4e71-42c7-a67f-96f5944f51a6
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing respirationsbehandling for Peter Olsen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* period.start = 2021-02-10
* activity.detail.code.coding[level2] = $FSIII#3198a6ba-879c-4d2e-914b-560ba1e0d63a "Respirationsbehandling"
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // Problemer med mobilitet og bevægelse
* activity.detail.reasonReference = Reference(f8a70023-0688-4a93-9b74-21e5089dc365) // Respirationsproblemer

// Followup encounters
Instance: 6e7188a7-048d-4060-96fe-7ae7b4201739
InstanceOf: klgateway-care-general-encounter
Description: "General encounter for a follow-up for Peter Olsen on February 12th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* period.start = 2021-02-12
* reasonReference[+] = Reference(f8a70023-0688-4a93-9b74-21e5089dc365) // Respirationsporblem
* reasonReference[+] = Reference(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // Mobilitet og bevægelse
// ------------------------------------------------------------------------------------------------

Instance: bad12c80-85ff-4b36-8396-414a1b58cd0d
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-2"
Description: "Reporting of Peter Olsen after second encounter with the Acute Team"
* type = #collection
* timestamp = 2021-02-12T12:46:48Z
* insert CitizenEntry(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* insert ConditionEntry(f8a70023-0688-4a93-9b74-21e5089dc365) // Respirationsproblemer
* insert ConditionEntry(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // // Problemer med mobilitet og bevægelse
* insert EncounterEntry(32488061-8263-4b39-b209-f6b38c1ba1d3) // 14/2-2021

// Conditions

// Followup encounters
Instance: 32488061-8263-4b39-b209-f6b38c1ba1d3
InstanceOf: klgateway-care-general-encounter
Description: "Encounter for a follow-up for Peter Olsen on February 14th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* period.start = 2021-02-14
* reasonReference[+] = Reference(f8a70023-0688-4a93-9b74-21e5089dc365) // Respirationsproblem
* reasonReference[+] = Reference(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // Mobilitet og bevægelse
// // ------------------------------------------------------------------------------------------------
// 
Instance: 3c4919f9-aec9-485f-808a-3f9ff6c95786
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-3"
Description: "Reporting of Peter Olsen after third encounter with the Acute Team"
* type = #collection
* timestamp = 2021-02-14T15:23:12Z
* insert CitizenEntry(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* insert ConditionEntryVersion(f8a70023-0688-4a93-9b74-21e5089dc365, v2) // Respirationsproblemer
* insert ConditionEntry(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // // Problemer med mobilitet og bevægelse
* insert MatterOfInterestEntry(388a4c08-42a2-4ad9-a6bb-41b26a7c5e28) // Respiration og cirkulation
* insert EncounterEntry(1d2b1282-23fb-4238-930b-4d10b13e735a) // 15/2-2021
* insert PlannedInterventionEntryVersion(9a07e8ad-4e71-42c7-a67f-96f5944f51a6, v2)

// Conditions
Instance: f8a70023-0688-4a93-9b74-21e5089dc365-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Respirationsproblemer for Peter Olsen"
Usage: #inline
* id = "f8a70023-0688-4a93-9b74-21e5089dc365" // Real id
* clinicalStatus = $ConditionClinical#inactive
* code = $FSIII#dae40f60-8dab-4bd3-ab72-b07d0f278692 "Respirationsproblemer"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* recordedDate = 2021-02-10

// Matter of interest observations
Instance: 388a4c08-42a2-4ad9-a6bb-41b26a7c5e28
InstanceOf: KLGatewayCareMatterOfInterestObservation
Description: "Respiration og cirkulation area is not relevant for Peter Olsen"
Usage: #inline
* status = #final
* code.coding = $FSIII#01150cdb-6098-48ce-bb61-60967f6bcc37 "Respiration og cirkulation"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* effectiveDateTime = 2021-02-15
* valueCodeableConcept = $FSIII#d7ff926a-4955-478f-b300-0b0ec0785013 "9"

// Followup encounters
Instance: 1d2b1282-23fb-4238-930b-4d10b13e735a
InstanceOf: klgateway-care-general-encounter
Description: "Encounter for a follow-up for Peter Olsen on February 15th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* period.start = 2021-02-15
* reasonReference[+] = Reference(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // Mobilitet og bevægelse

// Planned interventions
Instance: 9a07e8ad-4e71-42c7-a67f-96f5944f51a6-v2
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing respirationsbehandling for Peter Olsen"
Usage: #inline
* id = "9a07e8ad-4e71-42c7-a67f-96f5944f51a6"
* status = #active
* intent = #plan
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* period.start = 2021-02-10
* activity.detail.code.coding[level2] = $FSIII#3198a6ba-879c-4d2e-914b-560ba1e0d63a "Respirationsbehandling"
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // Problemer med mobilitet og bevægelse

// // ------------------------------------------------------------------------------------------------

Instance: d85460fb-b39e-4cf7-9750-12be44417dfd
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-4"
Description: "Reporting of Peter Olsen after first encounter with home nursing"
* type = #collection
* timestamp = 2021-02-15T08:17:19Z
* insert CitizenEntry(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* insert ConditionEntry(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // Problemer med mobilitet og bevægelse
* insert ConditionEntry(0031b906-9fec-44c9-bcf1-fd06aa41ab6d) // Mobilitet og bevægelse
* insert GoalEntry(222f728f-e484-4986-b00c-642b54354dae) // Ingen begrænsninger i at gå
* insert PlannedInterventionEntry(231ebab6-5e80-4ae7-82aa-f4e0dda9efce) // Vedligehold af færdigheder 
* insert EncounterEntry(712d1188-2704-4df1-8c48-c381c46e7bd2) // 17/2-2021
* insert EncounterEntry(23dbe07d-ddbd-4da5-b5d8-5defa7451c74) // 6/4-2021

// Conditions

Instance: 0031b906-9fec-44c9-bcf1-fd06aa41ab6d
InstanceOf: KLGatewayCareCondition
Description: "Mobilitet og bevægelse, lette begrænsninger for Peter Olsen"
Usage: #inline
* clinicalStatus = $ConditionClinical#active
* category = $ConditionCategory#problem-list-item
* severity = $FSIII#fcc16cb1-41f0-4832-b834-110fba0aaabe "1"
* code = $FSIII#d8aa5f09-cd9c-4996-a853-1c95ee98f25c "Mobilitet og bevægelse"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* recordedDate = 2021-02-15

// Goals
Instance: 222f728f-e484-4986-b00c-642b54354dae
InstanceOf: KLGatewayCareGoal
Description: "Forventet tilstand, ingen eller ubetydelige begrænsninger i mobilitet og bevægelse for Peter Olsen"
Usage: #inline
* lifecycleStatus = #planned
* category = $KLCommonCodes#ca552020-6ed1-4cdc-b0d4-32697f1f27ad "FSIII tilstandsmål"
* description = $FSIII#e182c5dc-9f91-474a-92e8-f62be3d498f4 "Tilstand forsvinder, mindskes eller forbliver uændret"
* target.measure = $KLCommonCodes#66959f77-6e2a-4574-8423-3ff097f8b9fa "funktionsevneniveau"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* startDate = 2021-02-15
* target.detailCodeableConcept = $FSIII#9c5cfb57-a498-40e5-98a7-792bf5fb205b "0"
* addresses = Reference(0031b906-9fec-44c9-bcf1-fd06aa41ab6d) // Mobilitet og bevægelse 

// Planned interventions
Instance: 231ebab6-5e80-4ae7-82aa-f4e0dda9efce
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing vedligehold af færdigheder for Peter Olsen"
Usage: #inline
* status = #active
* intent = #plan
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* period.start = 2021-02-18
* activity.detail.code.coding[level2] = $FSIII#c7d79b23-a53d-4ad5-a536-24d7c7fe8e18 "Vedligehold af færdigheder"
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(0031b906-9fec-44c9-bcf1-fd06aa41ab6d) // Mobilitet og bevægelse, hjemmepleje

// Followup encounters
Instance: 712d1188-2704-4df1-8c48-c381c46e7bd2
InstanceOf: klgateway-care-general-encounter
Description: "Encounter for a follow-up for Peter Olsen on February 17th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* period.start = 2021-02-17
* reasonReference[+] = Reference(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // Mobilitet og bevægelse, sygepleje


Instance: 23dbe07d-ddbd-4da5-b5d8-5defa7451c74
InstanceOf: klgateway-care-general-encounter
Description: "Encounter for a follow-up for Peter Olsen on April 6th, 2021"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* type = $KLCommonCodes#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* period.start = 2021-04-06
* reasonReference[+] = Reference(0031b906-9fec-44c9-bcf1-fd06aa41ab6d) // Mobilitet og bevægelse, hjemmepleje

// // ------------------------------------------------------------------------------------------------

Instance: 616ce3ef-b7e8-46e1-aefc-ff5bde81b153 // End nursing condition and intervention
InstanceOf: KLGatewayCareDeliveryReport
Title: "DeliveryReport-PeterOlsen-5"
Description: "Reporting of Peter Olsen after second encounter with home nursing"
* type = #collection
* timestamp = 2021-02-17T11:51:44Z
* insert CitizenEntry(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* insert ConditionEntryVersion(9c818a37-6525-49bb-bcea-5fe5df01f6f4, v2) // Problemer med mobilitet og bevægelse
* insert PlannedInterventionEntryVersion(9a07e8ad-4e71-42c7-a67f-96f5944f51a6, v3) // Respirationsbehandling
* insert MatterOfInterestEntry(dcd2273d-426d-421a-b82e-155ce7cc7173) // Psykosociale forhold
* insert MatterOfInterestEntry(b2cff9f0-7b03-4f03-a443-70c17b1cd623) // Søvn og hvile

// Conditions
Instance: 9c818a37-6525-49bb-bcea-5fe5df01f6f4-v2 // Fake id
InstanceOf: KLGatewayCareCondition
Description: "Problemer med mobilitet og bevægelse for Peter Olsen"
Usage: #inline
* id = "9c818a37-6525-49bb-bcea-5fe5df01f6f4" // Real id
* clinicalStatus = $ConditionClinical#inactive
* code = $FSIII#92caace8-60e3-4861-80ac-6e372a700e1d "Problemer med mobilitet og bevægelse" // Problemer med mobilitet og bevægelse
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* recordedDate = 2021-02-15

// Planned interventions
Instance: 9a07e8ad-4e71-42c7-a67f-96f5944f51a6-v3 // Fake id
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing respirationsbehandling for Peter Olsen"
Usage: #inline
* id = "9a07e8ad-4e71-42c7-a67f-96f5944f51a6" // Real id
* status = #completed
* intent = #plan
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* period.start = 2021-02-10
* period.end = 2021-02-17
* activity.detail.code.coding[level2] = $FSIII#3198a6ba-879c-4d2e-914b-560ba1e0d63a "Respirationsbehandling"
* activity.detail.status = #in-progress
* activity.detail.reasonReference = Reference(9c818a37-6525-49bb-bcea-5fe5df01f6f4) // Problemer med mobilitet og bevægelse

// Matter of interest observations
Instance: dcd2273d-426d-421a-b82e-155ce7cc7173
InstanceOf: KLGatewayCareMatterOfInterestObservation
Description: "Psykosociale forhold area is a potential problem for Peter Olsen"
Usage: #inline
* status = #final
* code.coding = $FSIII#5bfe4bda-2358-41da-946e-1fdaa33d5fe8 // Psykosociale forhold
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* effectiveDateTime = 2021-02-17

Instance: b2cff9f0-7b03-4f03-a443-70c17b1cd623
InstanceOf: KLGatewayCareMatterOfInterestObservation
Description: "Søvn og hvile area is a potential problem for Peter Olsen"
Usage: #inline
* status = #final
* code.coding = $FSIII#8c539fd9-7f31-4b4e-8b30-8298c8ab640f // Søvn og hvile
* subject = Reference(17911a9f-69ff-4041-8dd0-6fc96864d04b) // Peter Olsen
* effectiveDateTime = 2021-02-17

// Citizen
Instance: 17911a9f-69ff-4041-8dd0-6fc96864d04b
InstanceOf: KLGatewayCareCitizen
Description: "Citizen Peter Olsen"
Usage: #inline
* identifier.use = #official
* identifier.value = "0101570001"
* identifier.system = "urn:oid:1.2.208.176.1.2"
* managingOrganization.identifier.use = #official
* managingOrganization.identifier.value =  "123456789012345"
* managingOrganization.identifier.system = "urn:oid:1.2.208.176.1.1"
* deceasedBoolean = false

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/plannedIntervention.fsh

Profile: KLGatewayCarePlannedIntervention
Parent: CarePlan
Id: klgateway-care-planned-intervention
Title: "CarePlannedIntervention"
Description: "Planned interventions for nursing and home care in Danish Municipalities."
* identifier ..0
* instantiatesCanonical ..0
* instantiatesUri ..0
* basedOn ..0
* replaces ..0
* partOf ..0
* status ^definition = "Shall be either unknown, entered-in-error, or the status of the intervention at the time of reporting"
* intent = #plan
* category ..0
* title ..0
* description ..0
* subject only Reference(klgateway-care-citizen)
* subject ^type.aggregation = #bundled
* encounter ..0
* period 1..1
* period.start 1..1
* created ..0
* author ..0
* contributor ..0
* careTeam ..0
* addresses ..0
* supportingInfo ..0
* goal ..0
* activity 1..1
* activity.outcomeCodeableConcept ..0
* activity.outcomeReference ..0
* activity.progress ..0
* activity.reference ..0
* activity.detail 1..
* activity.detail.kind ..0
* activity.detail.instantiatesCanonical ..0
* activity.detail.instantiatesUri ..0
* activity.detail.code 1..1
* activity.detail.code.coding ^slicing.discriminator.type = #value
* activity.detail.code.coding ^slicing.discriminator.path = "system"
* activity.detail.code.coding ^slicing.rules = #closed
* activity.detail.code.coding contains level2 1..1 and level3 0..1 MS
* activity.detail.code.coding[level2].system = "urn:oid:1.2.208.176.2.21"
* activity.detail.code.coding[level2] from FSIIICareInterventions
* activity.detail.code.coding[level3].system = "http://fhir.kl.dk/gateway/CodeSystem/LocallyDefinedInterventions"
* activity.detail.code.coding[level3].code 1..1
* activity.detail.code.coding[level3].display 1..1
* activity.detail.code.coding[level3] ^definition = "Shall contain locally defined code if it is a locally defined level 3 intervention"
* activity.detail.reasonCode ..0
* activity.detail.reasonReference only Reference(KLGatewayCareCondition)
* activity.detail.reasonReference MS
* activity.detail.reasonReference ^definition = "Reason for this intervention. Must contain all conditions known to be addressed by this intervention"
* activity.detail.reasonReference ^type.aggregation = #bundled
* activity.detail.goal ..0
* activity.detail.status ^definition = "Shall be either unknown, entered-in-error, or the activity status of the intervention at the time of reporting"
* activity.detail.statusReason ..0
* activity.detail.doNotPerform ..0
* activity.detail.scheduled[x] ..0
* activity.detail.location ..0
* activity.detail.performer ..0
* activity.detail.product[x] ..0
* activity.detail.dailyAmount ..0
* activity.detail.quantity ..0
* activity.detail.description ..0
* note ..0
* extension contains klgateway-care-follow-up-encounter-extension named followUpEncounter 0..1 MS
* extension[followUpEncounter] ^definition = "Encounter for following up on this intervention. Must be present if a follow-up date is known"
* activity.detail.extension contains DeliveryType named deliveryType 0..*
* activity.detail.extension[deliveryType].valueCodeableConcept.coding from DeliveryTypes (required)

//Danish descriptions
* activity.detail.code.coding ^short = "[DK] indsatsskode"
* activity.detail.description ^short = "[DK] handlingsanvisning"
* period.start ^short = "[DK] indsatsbevillingstid"
* period.end ^short = "[DK] indsatsafslutningstid"
* status ^short = "[DK] indsatsstatus"
* intent ^short = "[DK] indsatshensigt"
* subject ^short = "[DK] indsatssubjekt"
* extension[followUpEncounter] ^short = "[DK] indsatsPlanlagtOpfølgning"
* activity.detail.reasonReference ^short = "[DK] indsatsbegrundelse"
* activity.outcomeReference ^short = "[DK] indsatsgennemførtAktivitet"
* activity.detail.status ^short = "[DK] indsatsAktivitetsstatus"
* activity.detail.extension[deliveryType] ^short = "[DK] indsatsLeveringstype"


Alias: $FSIII = urn:oid:1.2.208.176.2.21
Alias: $LocalInterventions = http://fhir.kl.dk/gateway/CodeSystem/LocallyDefinedInterventions

Instance: PersonligHygiejne
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing personal hygiene according to FSIII on the test person"
* status = #active
* intent = #plan
* subject = Reference(TestPerson)
* period.start = 2020-08-14
* activity.detail.code.coding[level2] = $FSIII#H1.1
* activity.detail.code.coding[level3] = $LocalInterventions#H1.1.1 "Speciel personlig pleje"
* activity.detail.status = #in-progress

Instance: Dialyse
InstanceOf: KLGatewayCarePlannedIntervention
Description: "Planned intervention doing dialysis according to FSIII on the test person"
* status = #active
* intent = #plan
* subject = Reference(TestPerson)
* period.start = 2020-08-14
* activity.detail.code.coding[level2] = $FSIII#G1.10
* activity.detail.status = #in-progress

---

File: repos/hl7dk_SLASH_kl-gateway/input/fsh/RuleSets.fsh

RuleSet: CitizenEntry(instance)
* entry[+].fullUrl = "https://test.fhir.dk/Patient/{instance}"
* entry[=].resource = {instance}

RuleSet: ConditionEntry(instance)
* entry[+].fullUrl = "https://test.fhir.dk/Condition/{instance}"
* entry[=].resource = {instance}

// Assumes fake id <guid>-<version>
RuleSet: ConditionEntryVersion(instance, version)
* entry[+].fullUrl = "https://test.fhir.dk/Condition/{instance}"
* entry[=].resource = {instance}-{version}

RuleSet: GoalEntry(instance)
* entry[+].fullUrl = "https://test.fhir.dk/Goal/{instance}"
* entry[=].resource = {instance}

// Assumes fake id <guid>-<version>
RuleSet: GoalEntryVersion(instance, version)
* entry[+].fullUrl = "https://test.fhir.dk/Goal/{instance}"
* entry[=].resource = {instance}-{version}

RuleSet: CitizensOwnObservationEntry(instance)
* entry[+].fullUrl = "https://test.fhir.dk/Observation/{instance}"
* entry[=].resource = {instance}

RuleSet: PlannedInterventionEntry(instance)
* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/{instance}"
* entry[=].resource = {instance}

// Assumes fake id <guid>-<version>
RuleSet: PlannedInterventionEntryVersion(instance, version)
* entry[+].fullUrl = "https://test.fhir.dk/CarePlan/{instance}"
* entry[=].resource = {instance}-{version}

RuleSet: CompletedInterventionEntry(instance)
* entry[+].fullUrl = "https://test.fhir.dk/Procedure/{instance}"
* entry[=].resource = {instance}

RuleSet: EncounterEntry(instance)
* entry[+].fullUrl = "https://test.fhir.dk/Encounter/{instance}"
* entry[=].resource = {instance}

// Assumes fake id <guid>-<version>
RuleSet: EncounterEntryVersion(instance, version)
* entry[+].fullUrl = "https://test.fhir.dk/Encounter/{instance}"
* entry[=].resource = {instance}-{version}

RuleSet: FollowUpObservationEntry(instance)
* entry[+].fullUrl = "https://test.fhir.dk/Observation/{instance}"
* entry[=].resource = {instance}

RuleSet: MatterOfInterestEntry(instance)
* entry[+].fullUrl = "https://test.fhir.dk/Observation/{instance}"
* entry[=].resource = {instance}


---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/downloads.md

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

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/Homecare.md

This page describes three subsequent delivery reports for the citizen Jens Hansen.
For each delivery report the story is told (in Danish), the FSIII documentation is listed, and the reporting example is given.

### First Encounter February 10th, 2021

#### Story
Jens Hansen har været indlagt på sygehus i 3 uger grundet en apopleksi med højresidige udfald/lammelser i overkroppen og generel funktionsnedsættelse til følge.
Det betyder at Jens Hansen vil få meget svært ved selvstændigt at håndtere egenomsorg og praktiske opgaver.
Ved udskrivningskonferencen d. 10. februar på sygehuset deltager den kommunale visitator.
Da Jens Hansens indlæggelse har været forholdsvis kort er der stadig forventning om spontan remission og dermed en bedring af hans funktionsniveau.

Visitator udarbejder på baggrund af journaloplysninger og samtale med Jens Hansen og sygehuspersonalet, en funktionsevnevurdering.
Da Jens Hansen er enkemand og bor alene, er der behov for iværksættelse af hjælp og støtte efter Servicelovens § 83 gældende fra udskrivningsdatoen d. 12. februar.
Visitator laver en sagsåbning, og herefter en sagsoplysning på baggrund af ovennævnte udfordringer og behov. 
Som udgangspunkt dokumenterer visitator på relevante funktionsevnetilstande og angiver niveau som vist i nedenstående skema. 

Visitator træffer afgørelse i sagen og bestiller udfører til at iværksætte indsatser i forhold til de respektive tilstande. Yderligere aftales det at visitator kommer på hjemmebesøg d. 15. februar, når Jens Hansen er tilbage i egen bolig, hvor en der skal foretages en ny funktionsvurdering hvor boligens beskaffenhed og indkøbsmuligheder skal vurderes.

#### FSIII Documentation
The following FSIII documentation is documented in the record system.

{:class="grid"}
| Condition | Severity | Goal | Intervention |
| --------- | -------- | ---- | ------------ |
|Af- og påklædning|3 - Svære begrænsninger|2 - Moderate begrænsninger|Personlig hygiejne|
|Udføre daglige rutiner|3 - Svære begrænsninger|2 - Moderate begrænsninger|Hverdagens aktiviteter|
|Lave mad|3- Svære begrænsninger|2 - Moderate begrænsninger|Madservice|
|Lave husligt arbejde|3 - Svære begrænsninger|2 - Moderate begrænsninger|Hverdagens aktiviteter and Rengøring|
|Gå|2 - Moderate begrænsninger|1- Lette begrænsninger|Mobilitet|
|Bevæge sig omkring|2 - Moderate begrænsninger|1- Lette begrænsninger|Mobilitet|
|Muskelstyrke|3 - Svære begrænsninger|2 - Moderate begrænsninger|Mobilitet|

#### Reporting
A delivery report is generated containing the citizen, 7 conditions, 7 goals, 5 planned interventions starting February 12th, and a follow-up encounter on February 15th for the conditions. The planned interventions reference the conditions according to the table above.

The report for this is found here: [DeliveryReport-JensHansen-1](Bundle-3304e5f8-4b3f-4c19-8c68-e36c573f3f98.html)

### Second Encounter February 15th, 2021

#### Story
Ved hjemmebesøg tre dage efter udskrivelse, foretager visitator en fornyet funktionsevnevurdering.
Hjælpen som blev bevilliget ved udskrivelsen, har fungeret fint og der er sket mindre forbedringer i Jens Hansens funktionsevne.
Desuden slapper Jens Hansen mere af i sin egen bolig, han har god tid til at udføre sine aktiviteter, og han har fået hjælp af sin søn til at indrette hjemmet lidt mere hensigtsmæssigt. (Kommunens hjælpemiddelterapeut har været på besøg og der er bevilliget badebænk, greb og toiletforhøjer).

Hjælpen efter § 83 fortsættes uden ændringer frem til myndighedsopfølgning, svarende til 14 dage efter udskrivelse – d. 24.februar.

#### FSIII Documentation
The previous FSIII documentation is unchanged, except that a follow-up observation is added and a new follow-up encounter is set to February 24th 2021.

#### Reporting
A delivery report is generated containing the citizen, the 7 conditions referenced from the follow-up observation with a reference to a new follow-up encounter.

The goals, planned interventions, and the previous follow-up encounter are unchanged and are thus not included in the report.

The report for this is found here: [DeliveryReport-JensHansen-2](Bundle-b1c5348b-fe9f-4afc-96ff-8c42b6c6c7ff.html)

### Third Encounter February 24th, 2021

#### Story
Sosu-hjælperen der kommer hos Jens Hansen, observerer markante fremskridt d. 18. februar, altså allerede 10 dage efter udskrivelsen.
I den afficerede højre side er der kommet flere kræfter og øget kontrol, hvilket betyder at Jens Hensen mere selvstændigt kan deltage/varetage flere aktiviteter.

Sosu-hjælperen dokumenterer sin observationen og borgers egen meget positive opfattelse af sin situation. Hun dokumenterer det under generelle oplysninger i journalen.
Da det er leverandørens ansvar at sikre, at oplysninger omkring borgeren er opdateret, kontakter hun ligeledes ’planlægger’ og foreslår, at terapeuten fra Team-Hverdagsrehabilitering kommer ud til Jens Hansen og vurderer træningspotentiale og behov for RH-indsatser.

Da der er 6 dage til at myndighedsopfølgningen, skal ske kontakter terapeuten fra Team-Hverdagsrehabilitering visitator for at fortælle, at hun på baggrund af markante forbedringer i Jens Hansens funktionsevne vil foretage en vurdering i forhold til indsatser efter servicelovens § 83 a.

Terapeuten vurderer de tidligere dokumenterede tilstande. Jens Hansen har potentiale til selv at kunne varetage dele af aktiviteterne, hvis han tilbydes et tidsafgrænset § 83 a Hverdagsrehabiliteringsforløb.

Vurderingen bevirker altså en opdatering af Jens Hansen journal og aktuelle ændringer i forhold til de tidligere bevilligede indsatser skal opdateres.
Opdaterede ændringer fremgår af nedenstående skema og der aftales en ny myndighedsopfølgning d. 10. marts.

#### FSIII Documentation
The previous FSIII documentation is updated with new severities and goals, and some of the interventions are replaced by the correpsonding rehabilitating intervention.

{:class="grid"}
| Condition | Severity | Goal | Intervention |
| --------- | -------- | ---- | ------------ |
|Af- og påklædning|2 - Moderate begrænsninger|0 - Ingen eller ubetydelige begrænsninger|RH - Personlig hygiejne|
|Udføre daglige rutiner|2 - Moderate begrænsninger|0 - Ingen eller ubetydelige begrænsninger|RH - Hverdagens aktiviteter|
|Lave mad|2 - Moderate begrænsninger|1- Lette begrænsninger|Madservice|
|Lave husligt arbejde|2 - Moderate begrænsninger|1- Lette begrænsninger|Hverdagens aktiviteter and Rengøring|
|Gå|2 - Moderate begrænsninger|0 - Ingen eller ubetydelige begrænsninger|RH - Mobilitet|
|Bevæge sig omkring|2 - Moderate begrænsninger|0 - Ingen eller ubetydelige begrænsninger|RH - Mobilitet|
|Muskelstyrke|2 - Moderate begrænsninger|0 - Ingen eller ubetydelige begrænsninger|RH - Mobilitet|

#### Reporting
A delivery report is generated containing the citizen, the 7 conditions with updated severities and a reference to a new follow-up encounter, the 7 updated goals, and a new follow-up observation.
2 planned interventions are ended, and 1 planned intervention has one less reference to a condition.
3 new planned interventions are added.

2 planned interventions, the previous follow-up encounter and the follow-up observation are unchanged and are thus not included in the report.

The report for this is found here: [DeliveryReport-JensHansen-3](Bundle-643c3e42-ab90-4354-9b98-f01b4740d3d9.html)

---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/HomecareNew.md

This page describes three subsequent delivery reports for the citizen Jens Hansen.
For each delivery report the story is told (in Danish), the FSIII documentation is listed, and the reporting example is given.

### First Event February 10th, 2021

#### Story
Jens Hansen har været indlagt på sygehus i 3 uger grundet en apopleksi med højresidige lammelser i overkroppen og generel funktionsnedsættelse til følge.
Det betyder, at Jens Hansen vil få meget svært ved selvstændigt at håndtere egenomsorg og praktiske opgaver.
Ved udskrivningskonferencen d. 10. februar på sygehuset deltager den kommunale visitator.
Da Jens Hansens indlæggelse har været forholdsvis kort er der stadig forventning om spontan remission og dermed en bedring af hans funktionsevne.

Visitator udarbejder en funktionsevnevurdering på baggrund af journaloplysninger og samtale med Jens Hansen og sygehuspersonalet.
Da Jens Hansen er enkemand og bor alene, er der behov for iværksættelse af hjælp og støtte efter Servicelovens § 83 gældende fra udskrivningsdatoen d. 12. februar.
Visitator laver en sagsåbning, og herefter en sagsoplysning på baggrund af ovennævnte udfordringer og behov. 
Som udgangspunkt dokumenterer visitator på relevante tilstande og angiver niveau som vist i nedenstående skema. 

Visitator træffer afgørelse i sagen og bestiller udfører til at iværksætte indsatser i forhold til de respektive tilstande. Yderligere aftales det, at visitator kommer på hjemmebesøg d. 15. februar, når Jens Hansen er tilbage i egen bolig, hvor der skal foretages en ny funktionsevnevurdering. Her skal boligens beskaffenhed og indkøbsmuligheder vurderes.

#### FSIII Documentation
The following FSIII documentation is documented in the record system.

{:class="grid"}
| Condition | Severity | Goal | Intervention |
| --------- | -------- | ---- | ------------ |
|Personlig pleje|3 - Svære begrænsninger|2 - Moderate begrænsninger|Personlig hygiejne|
|Lave mad|3- Svære begrænsninger|2 - Moderate begrænsninger|Madservice|
|Lave husligt arbejde|3 - Svære begrænsninger|2 - Moderate begrænsninger|Hverdagens aktiviteter, Rengøring|
|Mobilitet og bevægelse|2 - Moderate begrænsninger|1 - Lette begrænsninger|Mobilitet|

#### Reporting
A delivery report is generated containing the citizen, 4 conditions, 4 goals, 5 planned interventions starting February 12th, and a follow-up encounter on February 15th for the conditions. The planned interventions reference the conditions according to the table above.

The report for this is found here: [DeliveryReport-JensHansen-1](Bundle-5c20b1b0-ec06-4d25-89e2-13521ebcf642.html)

### Delivery of planned interventions between February 12th and Febrary 15th, 2021
**Det er en mulighed at indberette på kontakter, for at kunne dokumentere tyngden af indsatserne. Det følgende er et eksempel herpå. Dette er ikke obligatorisk før udgangen af 2027.** 

#### Story
Mellem udskrivningsdatoen frem til den 15. februar leverer hjemmeplejen de indsatser, der blev visiteret d. 10. februar. Der leveres tre hjemmebesøg pr. dag, hvor der leveres på Personlig hygiejne, Hverdagens aktiviteter og Mobilitet. Rengøring, som også er visiteret, er blevet bestilt til en gang hver 14. dag, men dette leveres der ikke på i perioden, og derfor sker der heller ingen indberetning af det. Madservice er ikke forbundet med en konkret opgave, men viser, at borger er tilknyttet madservice-ordning. Derfor er der ikke konkrete kontakter tilknyttet denne indsats. 
Det følgende er et eksempel på en rapport fra d. 13. februar. For de øvrige dage ville det se tilsvarende ud.

#### Reporting
A delivery report is generated containing the citizen and three encounters from the 13th of february. The encounters reference the PlannedInterventions 'Personlig hygiejne', 'Hverdagens aktiviteter' and 'Mobilitet'. Consequently, these are added to the report as well even though they are unchanged. The PlannedInterventions reference three of the four Conditions, which are added as well.
The report for this is found here: [DeliveryReport-JensHansen-InterventionDelivery](Bundle-832c69db-98b5-4aee-ab00-c24967e89d25.html) 

### Second Event February 15th, 2021

#### Story
Ved hjemmebesøg tre dage efter udskrivelse, foretager visitator en fornyet funktionsevnevurdering.
Hjælpen, som blev bevilliget ved udskrivelsen, har fungeret fint og der er sket mindre forbedringer i Jens Hansens funktionsevne.
Desuden slapper Jens Hansen mere af i sin egen bolig, han har god tid til at udføre sine aktiviteter, og han har fået hjælp af sin søn til at indrette hjemmet lidt mere hensigtsmæssigt. (Kommunens hjælpemiddelterapeut har været på besøg og der er bevilliget badebænk, greb og toiletforhøjer).

Hjælpen efter § 83 fortsættes uden ændringer frem til myndighedsopfølgning, svarende til 14 dage efter udskrivelse – d. 24. februar.

#### FSIII Documentation
The previous FSIII documentation is unchanged, except that a follow-up observation is added and a new follow-up encounter is set to February 24th 2021. The previous follow-up encounter is marked as completed.

#### Reporting
A delivery report is generated containing the citizen, the follow-up observation, and the 4 conditions referenced from the follow-up observation. A new follow-up encounter, and the now completed follow-up encounter are also included (the latter is marked as finished. Note that it is not mandatory to report finished/completed follow-up encounters, neither is it mandatory to report follow-up observations.)

The goals and planned interventions are unchanged and are thus not included in the report.

The report for this is found here: [DeliveryReport-JensHansen-2](Bundle-8ec154f2-1429-4a41-aca7-f900e1d3bee2.html)

### Third Event February 24th, 2021

#### Story
Sosu-hjælperen, der kommer hos Jens Hansen, observerer markante fremskridt d. 18. februar, altså allerede 10 dage efter udskrivelsen.
I den afficerede højre side er der kommet flere kræfter og øget kontrol, hvilket betyder, at Jens Hensen mere selvstændigt kan deltage/varetage flere aktiviteter.

Sosu-hjælperen dokumenterer sin observationen.
Det skal sikres, at oplysningerne om borgerne er opdateret. hun kontakter derfor ’planlægger’ og foreslår, at terapeuten fra Team-Hverdagsrehabilitering kommer ud til Jens Hansen og vurdere træningspotentiale og behov for RH-indsatser.

Da, der er 6 dage til at myndighedsopfølgningen, skal ske kontakter terapeuten fra Team-Hverdagsrehabilitering visitator for at fortælle, at hun på baggrund af markante forbedringer i Jens Hansens funktionsevne vil foretage en vurdering i forhold til indsatser efter servicelovens § 83 a.

Terapeuten vurderer de tidligere dokumenterede tilstande. Jens Hansen har potentiale til selv at kunne varetage dele af aktiviteterne, hvis han tilbydes et tidsafgrænset § 83 a Hverdagsrehabiliteringsforløb.

Vurderingen bevirker altså en opdatering af Jens Hansen journal og aktuelle ændringer i forhold til de tidligere bevilligede indsatser skal opdateres.
Opdaterede ændringer fremgår af nedenstående skema og der aftales en ny myndighedsopfølgning d. 10. marts.

#### FSIII Documentation
The previous FSIII documentation is updated with new severities and goals, and some of the interventions are replaced by the correpsonding rehabilitating intervention.

{:class="grid"}
| Condition | Severity | Goal | Intervention |
| --------- | -------- | ---- | ------------ |
|Personlig pleje|2 - Moderate begrænsninger|0 - Ingen eller ubetydelige begrænsninger|RH - Personlig hygiejne|
|Lave mad|2 - Moderate begrænsninger|1- Lette begrænsninger|Madservice|
|Lave husligt arbejde|2 - Moderate begrænsninger|1- Lette begrænsninger|Hverdagens aktiviteter, Rengøring|
|Mobilitet og bevægelse|2 - Moderate begrænsninger|0 - Ingen eller ubetydelige begrænsninger|RH - Mobilitet|

The follow-up observation is set to 'Revisitation'. The follow-up is marked as finished, and a new follow-up date is planned. Note that follow-up observations are not mandatory. Follow-up dates are still mandatory.

#### Reporting
A delivery report is generated containing the citizen and the 3 conditions with updated severities and the one condition which is not updated. (The latter is included because its goal and follow-up references it). The old and the new follow-up encounter references these conditions. The report also contain new goals, and a follow-up observation.

In addition, 2 planned interventions are ended (Personlig pleje, Mobilitet). 2 new planned interventions are added (RH - Personlig hygiejne, RH - Mobilitet). 3 planned interventions (Hverdagens aktiviteter, Rengøring, Madservice) are unchanged and are thus not included in the report.

The report for this is found here: [DeliveryReport-JensHansen-3](Bundle-89071c96-e053-40d5-8873-105b7bad40f9.html)

---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/index.md

This implementation guide describes the delivery of health and eldercare data to FK Gateway. The reporting aims for compliance with the Danish core profiles and the current work on a shared information model (FKI) for data in the Danish municipalities.

The profiles for the reporting are restricted to allow only the information that is required to report to the FK Gateway. This is only a subset of information described in FSIII and FKI.

Note that this is a transitional version, designed to allow a smooth implementation of the FSIII simplicfication. This front page now describes the reporting, as it will look after the simplification, but the old way is still possible, and is described on the page "Old home". Be aware, that it is also possible, to report to FK Gateway using a hybrid of old and new profiles and terminology. This will help to allow users to still have content in their records that uses the old FSIII, while new content is documented using the simplified FSIII.

The specific changes to the FSIII terminology will not be described here, as they are documented elsewhere, and FK-klassifikation holds the authoritative copy. However, be aware of the following:
* Both the FSIII codes valid before the simplification and after the simplification are accepted in this IG. After the transition, only new codes will be accepted.
* In the transition period, FK Gateway accepts old FSIII displays and legacy codes (brugervendte nøgler). After the transistion, only UUID's and only current titles/displays from FSIII as defined by FK-klassifikation will be accepted in reporting.

Other changes include:
* A new encounter called GeneralEncounter has been designed. GeneralEncounter will superseed Encounter after the transition period. GeneralEncounter can be used to report the planned follow-up encounters, as well as completed encounters that have delivered interventions. GeneralEncounter uses more values for the class-attribute. This means that the mode of delivery can be repported e.g. home visit, screen visit etc. GeneralEncounter can reference both conditions (on which it is a follow-up) and interventions (on which it is a delivery). Consequently the Condition profile, will no longer need the FollowUpEncounterExtension. So this will be depricated after the transistion as well.
* CitizensOwnObservation and MatterOfInterestObservation will be depricated after the transition period.
* FollowUpObservation will only be used in home care, not in nursing, after the transition. After the transistion, FollowUpObservation will only be allowed to reference Condition in the focus-attribute. Right now, both Condition and PlannedIntervention can be referenced.
* The citizen profile has two new attributes. Patient.active and Patient.deceased. Patient.active is optional, and used for error-reporting. Patient.deceased is optional in the transition, and is used to state whether the citizen is alive or dead. A warning will be thrown, if data is reported about dead citizens. Patient.deseased will be mandatory after the transition, and reporting about dead citizens will not be accepted and result in an error.
* Error-reporting documentation have been updated. Read it here [here](./FejlrettelseNotatKLGateway.pdf) (in Danish): 

## Overview
The data is reported as a collection of instances. A report may contain instances that conforms to the profiles defined in this implementation guide. See figure below.

<img alt="OverviewModel" src="./DeliveryReport.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

In addition to being structured as a report, relationships exist between the profiles. These are illustrated in the UML Class Diagram in the figure below.

<img alt="ClassDiagram" src="./ClassDiagramGateway.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

The Class diagram shows that all profiles refer to Citizen. Other than that, the documentation is centered aroung Conditions. The PlannedInterventions and CompletedInterventions can reference the Condition to document why these activities are carried out. A goal (forvented tilstand) always focuses on a certain Condition. A followUpObservation references the Condition which it follow up on.
The GeneralEncounter can be used to report a planned follow up date for Conditions, which is mandatory. It can also be used to report the delivery of PlannedInterventions, which is optional.

The content of the DeliveryReport is described in more detail in the following:

#### Citizen
Information about the citizen that is the subject of the report. The main information about the citizen is the civil registration number (CPR-nr) and identification of the municipality holding and reporting the data. Information about deceased status is includes as well. 

##### Validation
- Only one citizen resource is present in the report
- The civil registration number is a syntactically valid CPR-nr.
- The managing organization is a syntactically valid SOR code (only code length is currently validated in the profile, but the authorization validates the actual SOR code)
- The citizen is not dead (throws warning)

#### Condition
Information about the conditions (FSIII tilstande) of the citizen as assessed by the care practitioners. A condition represents an assessement of either a home care or a nursing condition and it must contain the level 2 condition code as defined by FSIII, the time that it was recorded, and a reference to an encounter with the follow-up date of the condition if it is known. Home care conditions must also contain the severity of the condition represented as the functioning level as defined by FSIII.

All information about conditions that has changed since the last reporting must be contained in a new report. Changes in the assessment may include conditions that are new, updated by a new assessment or no longer is relevant. A condition that has changed since previously reported shall have the same code according to FSIII.

Free text information about the conditions is not part of this reporting.

Note: A potential problem at home care or nursing condition area level is not a condition. Matter of Interest observations are used for this.

##### Validation
- Conditions are either home care or nursing conditions
- Conditions refer to the citizen included in the report
- Home care conditions have a valid home care condition code according to FSIII (Funktionsevnetilstand)
- Home care conditions have a valid severity code according to FSIII (Funktionsniveau)
- Nursing conditions have a valid nursing condition code according to FSIII (Helbredstilstand)
- Nursing conditions does not have a severity code

#### Goal
Information about the goal (FSIII forventet tilstand) for each home care condition. The goal must contain the condition that the goal addresses and the expected severity as defined by FSIII. Only one goal for a home care condition must exist at a given time.

All changes to the goals since the last reporting must be included in a new report. However, changes typically only include entered-in-error. Other changes are considered to be new goals.

Free text information about the goals is not part of this reporting.

##### Validation
- Goals refer to the citizen included in the report
- Goals adresses one home care condition included in the report
- Goals does not address nursing conditions
- The target of a goal is a valid severity code according to FSIII (Funktionsniveau - forventet tilstand)

#### Planned Intervention
Information about the planned interventions (FSIII indsatser) that the municipality has granted to address the conditions of the citizen. A planned intervention represents one type of care given to the citizen. It must contain the level 2 code for the intervention, the start time, the end time if ended, references to the conditions that the intervention addresses if known.

A citizen may be granted several level 3 interventions for the same level 2 intervention. Level 3 interventions are reported using both the level 2 code and the locally defined level 3 code. Interventions are allowed to be overlapping to support this.

All changes to the planned interventions since the last reporting must be contained in a new report, including conditions referenced by the reported interventions.

Free text information about Planned interventions is not part of this reporting.

##### Validation
- Planned interventions refer to the citizen included in the report
- Planned interventions have a start date
- Planned interventions have a valid home care or nursing intervention code according to FSIII (Servicelov/sundhedslovlov indsats)
- Planned interventions refer to zero or more health care or nursing conditions included in the report as reason for intervention

#### Completed Intervention
Information about completed interventions (FSIII Indsatser) that the municipality has delivered acute or in any other way not as planned interventions. A completed intervention represents one type of care given to the citizen. It must contain the level 2 code for the intervention, references to the conditions the intervention addresses if known, and the start time of the delivery. CompletedIntervention may reference an Encounter, but this is optional.

A completed intervention my be documented as a level 3 intervension. Level 3 interventions are reported using both the level 2 code and the locally defined level 3 code.

All changes to the completed but not planned interventions since the last reporting must be contained in a new report.

Free text information about care plans is not part of this reporting.

##### Validation
- Completed interventions refer to the citizen included in the report
- Completed interventions have a start date
- Completed interventions have a valid home care or nursing intervention code according to FSIII (Servicelov/sundhedslovlov indsats)
- Planned interventions refer to zero or more health care or nursing conditions included in the report as reason for intervention

#### General Encounters
GeneralEncounter can be used to report a planned follow-up date for Conditions, which is mandatory. It can also be used to report delivered PlannedInterventions, which is optional. The encounter references the relevant Conditions and PlannedInterventions.

The type of the encounter can be reported as a follow-up or a delivery of an intervention.

The encounter must contain the expected start date or the actual start time.

All referenced encounters from other resources in a report must also be included.

Free text information about encounters is not part of this reporting.

##### Validation
- Encounters refer to the citizen included in the report
- Encounters have a start date (opfølgningsdato eller starttidspunkt)
- Encounter have a type, that state whether it is a follow-up or a delivery of an intervention.

#### Follow-up Observations
Information about the outcome of a follow-up encounter. The follow-up observations must contain the coding for the outcome (FSIII resultat af opfølgning) and a reference to one or more conditions about which the observation is made.

All changes to the follow-up observations since the last reporting must be included in a new report, including the conditions and interventions referenced by the observations.

Free text information about the follow-up outcome is not part of this reporting.

##### Validation
- Follow-up observations refer to the citizen included in the report
- Follow-up observations refer to one or more conditions included in the report
- Follow-up observations have a timestamp for the observation
- Follow-up observations have a valid follow-up code according to FSIII (Resultat af opfølgning)

### DeliveryReport
Reporting is done using the profile KLGatewayCareDeliveryReport, which is a bundle containing multiple resources about one citizen. The source systems must periodically (at least daily) transfer a delivery report containing a snapshot of the current information for each changed citizen with all registrations that has changed since the previous delivery report was transferred. Multiple delivery reports must be delivered if the previous reporting for some reason happened more than one day ago, each covering no more than one day. A full history of changes is not required.

Note, that the snapshot of the current information contains information about the hole day, not only the current state for the citizen. An intervention that fx has ended during the day shall therefore be included in the report with an end date and time along with possible new interventions.

The id of any resource must be universally unique, e.g. a uuid. Resources with the same id as previously reported are considered to be an update of the previous reported information at the time indicated in the metadata of the resource. A resource that has been enterered in error is invalidated by an update with the same resource id as previously reported.

All resources must contain the metadata giving the profile and lastUpdated information.

#### Validation
The delivery report is immediately validated when a source system posts it to the gateway. The gateway validates all the rules defined in this profile for each delivery report and returns the list of errors found in the response. The gateway returns a machine readable error code if validation errors are found, and a textual description (not machine readable) of each error which explains the error in terms of the FHIR protocol.

The gateway thus validates that the format of the content is valid, the structure of all resources are correct, the cardinatity of all values are valid, codings only contains valid codes, and that all referenced resources are included in the report. The rules described on this page are validated to the extent possible through more complex constraints in the profiles. The constraints in the profiles also contains a textual description to describe the error when the validation finds that a constraint is not observed. This includes more technical validations not listed above, such as fixed values aligned with the shared information model (FKI) and the FHIR standard in general.

The gateway is not able to validate immediately whether the reported data conflicts with previously reported data. Problems like this will probably not be found until the data is processed for business intelligence or reporting to other recipients. Handling these problems will have to be a manual process. The gateway will for obvious reasons not be able to validate whether all the data from the source systems has been reported, including attributes with zero to one or zero to many cardinality marked as "must support".

#### Examples
The implementation guide contains a number of examples for each profile used in a delivery report. See [Delivery report example](Bundle-TestPersonReport.html) for an example of a complete delivery report.

__Note:__ Must support markers are used according to the FHIR specification and means that it shall be included in the report if the information is available. A precise definition of what available means in each case is described in the definition of the element.

## Dependencies
{% include dependency-table.xhtml %}

## Cross Version Analysis
{% include cross-version-analysis.xhtml %}

## Global Profiles
{% include globals-table.xhtml %}

## IP Statements
{% include ip-statements.xhtml %}

---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/indexOld.md

This implementation guide describes the delivery of health and eldercare data to the KL Gateway. The reporting aims for compliance with the Danish core profiles and the current work on a shared information model (FKI) for data in the Danish municipalities.

The profiles for the reporting are restricted to allow only the information that is required to report to the KL Gateway. This will not be compliant with the shared information model for data in the Danish municipalities and FSII as it describes a subset where not all mandatory data is allowed.

### Content

The data contained in the reporting is a subset of the data defined in the Danish standard for eldercare and health data (FSIII, v. 1.6), with focus on structured information about conditions and care plans where all free text information is omitted. Enhancement of FSIII with training and rehabilitation is not in scope for this reporting.

An overview of the model of the delivery report content is provided in the following illustration:

<img alt="Model" src="./GatewayModel.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

__Note:__ All resources refer to citizen in the bundle (some relations are omitted from the diagram to make it readable).

The reporting contains the following types of information:

#### Citizen
Information about the citizen that is the subject of the report. The main information about the citizen is the civil registration number (CPR-nr) and identification of the municipality holding and reporting the data.

##### Validation
- Only one citizen resource is present in the report
- The civil registration number is a syntactically valid CPR-nr.
- The managing organization is a syntactically valid SOR code (only code length is currently validated in the profile, but the authorization validates the actual SOR code)

#### Conditions
Information about the conditions (FSIII tilstande) of the citizen as assessed by the care practitioners. A condition represents an assessement of either a home care or a nursing condition and it must contain the level 2 condition code as defined by FSIII, the time that it was recorded, and a reference to an encounter with the follow-up date of the condition if it is known. Home care conditions must also contain the severity of the condition represented as the functioning level as defined by FSIII.

All information about conditions that has changed since the last reporting must be contained in a new report, including referenced follow-up encounters. Changes in the assessment may include conditions that are new, updated by a new assessment or no longer in relevant. A condition that has changed since previously reported shall have the same code according to FSIII and is considered to be an update to the assessment regardless of the id of the resource.

Free text information about the conditions is not part of this reporting.

Note: A potential problem at home care or nursing condition area level is not a condition. Matter of Interest observations are used for this.

##### Validation
- Conditions are either home care or nursing conditions
- Conditions refer to the citizen included in the report
- Home care conditions have a valid home care condition code according to FSIII (Funktionsevnetilstand)
- Home care conditions have a valid severity code according to FSIII (Funktionsniveau)
- Nursing conditions have a valid nursing condition code according to FSIII (Helbredstilstand)
- Nursing conditions does not have a severity code

#### Goals
Information about the goal (FSIII forventet tilstand) for each home care condition. The goal must contain the condition that the goal addresses and the expected severity as defined by FSIII. Only one goal for a home care condition must exist at a given time.

All changes to the goals since the last reporting must be included in a new report, including the referenced conditions and all the resources referenced by the conditions.

Free text information about the goals is not part of this reporting.

##### Validation
- Goals refer to the citizen included in the report
- Goals adresses one home care condition included in the report
- Goals does not address nursing conditions
- The target of a goal is a valid severity code according to FSIII (Funktionsniveau - forventet tilstand)

#### Citizens Own Observations
Information provided by the citizen about the conditions assessed by the care practitioners or a matter of interest. This includes the citizens own observation of their performance (FSIII udførelse) and the importance (FSIII betydning) of the condition or matter of interest in focus.

All changed to the observations sinces the last reporting must be contained in a new report, including the referenced conditions and all the resources referenced by the conditions.

Free text information about the citizens own observations is not part of this reporting.

##### Validation
- Citizens own observations are either importance or performance observations
- Citizens own observations refer to the citizen included in the report
- Citizens own observations focus on one home care condition or one home care matter of interest included in the report
- The value of an importance observation is a valid importance code according to FSIII (Betydning)
- The value of a performance observation is a valid performance code according to FSIII (Udførelse)

#### Planned Interventions
Information about the planned interventions (FSIII indsatser) that the municipality has granted to address the conditions of the citizen. A planned intervention represents one type of care given to the citizen. It must contain the level 2 code for the intervention, the start time, the end time if ended, references to the conditions the intervention addresses if known, and a reference to an encounter with the follow-up date of the intervention if known.

A citizen may be granted several level 3 interventions for the same level 2 intervention. Level 3 interventions are reported using both the level 2 code and the locally defined level 3 code. Interventions are allowed to be overlapping to support this.

All changes to the planned interventions since the last reporting must be contained in a new report, including conditions and follow-up encounters referenced by the reported interventions.

Free text information about care plans is not part of this reporting.

##### Validation
- Planned interventions refer to the citizen included in the report
- Planned interventions have a start date
- Planned interventions have a valid home care or nursing intervention code according to FSIII (Servicelov/sundhedslovlov indsats)
- Planned interventions refer to zero or more health care or nursing conditions included in the report as reason for intervention

#### Completed Interventions
Information about completed interventions (FSIII Indsatser) that the municipality has delivered acute or in any other way not as planned interventions. A completed intervention represents one type of care given to the citizen. It must contain the level 2 code for the intervention, references to the conditions the intervention addresses if known, and the start time of the delivery.

A completed intervention my be documented as a level 3 intervension. Level 3 interventions are reported using both the level 2 code and the locally defined level 3 code.

All changes to the completed but not planned interventions since the last reporting must be contained in a new report.

Free text information about care plans is not part of this reporting.

##### Validation
- Completed interventions refer to the citizen included in the report
- Completed interventions have a start date
- Completed interventions have a valid home care or nursing intervention code according to FSIII (Servicelov/sundhedslovlov indsats)
- Planned interventions refer to zero or more health care or nursing conditions included in the report as reason for intervention

#### Matter of Interest Observations
Information about matters of interest for home care or nursing condition areas (FSIII tilstandsområder). A matter of interest observation must contain the condition area, either home care or nursing, and the time of the observation.

All changes to the matter of interest observations since the last reporting must be included in a new report, including referenced follow-up encounters.

Free text information about area observations is not part of this reporting.

##### Validation
- Matter of interest observations refer to the citizen included in the report
- Matter of interest observations have a valid matter of interest code according to FSIII (Funktionsevneområde eller helbredsområde)
- Matter of interest observations have a timestamp for the observation

#### Encounters
Information about the encounters referenced from conditions and care plans to hold the follow-up dates. The encounter must contain the expected start date of the next follow-up.

All referenced encounters from other resources in a report must also be included.

Free text information about encounters is not part of this reporting.

##### Validation
- Encounters refer to the citizen included in the report
- Encounters have a start date (Opfølgningsdato)

#### Follow-up Observations
Information about the outcome of a follow-up encounter. The follow-up observations must contain the coding for the outcome (FSIII resultat af opfølgning) and a reference to condition or intervension about which the observation is made.

All changes to the follow-up observations since the last reporting must be included in a new report, including the conditions and intervensions referenced by the observations.

Free text information about the follow-up outcome is not part of this reporting.

##### Validation
- Follow-up observations refer to the citizen included in the report
- Follow-up observations refer to a condition or planned intervension included in the report
- Follow-up observations have a timestamp for the observation
- Follow-up observations have a valid follow-up code according to FSIII (Resultat af opfølgning)

### Reporting
Reporting is done using the profile KLGatewayCareDeliveryReport, which is a bundle containing multiple resources about one citizen. The source systems must periodically (at least daily) transfer a delivery report containing a snapshot of the current information for each changed citizen with all registrations that has changed since the previous delivery report was transferred. Multiple delivery reports must be delivered if the previous reporting for some reason happened more than one day ago, each covering no more than one day. A full history of changes is not required.

Note, that the snapshot of the current information contains information about the hole day, not only the current state for the citizen. An intervention that fx has ended during the day shall therefore be included in the report with an end date and time along with possible new interventions.

The id of any resource must be universally unique, e.g. a uuid. Resources with the same id as previously reported are considered to be an update of the previous reported information at the time indicated in the metadata of the resource. A resource that has been enterered in error is invalidated by an update with the same resource id as previously reported.

All resources must contain the metadata giving the profile and lastUpdated information.

#### Validation
The delivery report is immediately validated when a source system posts it to the gateway. The gateway validates all the rules defined in this profile for each delivery report and returns the list of errors found in the response. The gateway returns a machine readable error code if validation errors are found, and a textual description (not machine readable) of each error which explains the error in terms of the FHIR protocol.

The gateway thus validates that the format of the content is valid, the structure of all resources are correct, the cardinatity of all values are valid, codings only contains valid codes, and that all referenced resources are included in the report. The rules described on this page are validated to the extent possible through more complex constraints in the profiles. The constraints in the profiles also contains a textual description to describe the error when the validation finds that a constraint is not observed. This includes more technical validations not listed above, such as fixed values aligned with the shared information model (FKI) and the FHIR standard in general.

The gateway is not able to validate immediately whether the reported data conflicts with previously reported data. Problems like this will probably not be found until the data is processed for business intelligence or reporting to other recipients. Handling these problems will have to be a manual process. The gateway will for obvious reasons not be able to validate whether all the data from the source systems has been reported, including attributes with zero to one or zero to many cardinality marked as "must support".

#### Examples
The implementation guide contains a number of examples for each profile used in a delivery report. See [Delivery report example](Bundle-TestPersonReport.html) for an example of a complete delivery report.

__Note:__ Must support markers are used according to the FHIR specification and means that it shall be included in the report if the information is available. A precise definition of what available means in each case is described in the definition of the element.

---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/Nursing.md

This page describes three subsequent delivery reports for the citizen Peter Olsen.
For each delivery report the story is told (in Danish), the FSIII documentation is listed, and the reporting example is given.

### First Encounter February 10th, 2021 - Acute team 

#### Story
Gerda Olsen har ringet til praktiserende læge.
Hendes mand Peter har det ikke godt.
Peter er udskrevet fra sygehuset, for tre dage siden, efter en akut exacerbationer (midlertidig forværring) af hans KOL.
Han har egentlig været i bedring, men her sidst på dagen fik han feber, hovedpine og øget vejrtrækningsfrekvens. 

Peter og Gerda fik besked på sygehuset om at holde øje med almentilstanden og kontakte egen læge ved forværringer.
Exacerbationer er alvorlige, idet hver episode reducerer lungefunktionen irreversibelt, og akut exacerbation af KOL er den hyppigste dødsårsag hos disse patienter.
Gerda er derfor meget nervøs for Peter og vil gerne have at egen læge vil indlægge ham igen.

Egen læge aftaler i stedet med Gerda, at der kommer en sygeplejerske hjem og kigger til Peter.

Herefter kontakter egen læge det kommunale akutteam og oplyser at Peter Olsen oplever forværring i almentilstanden – blandt andet feber, hovedpine og øget vejrtrækningsfrekvens.
Han ønsker derfor at akutteamet skal besøge Peter og foretage nogle målinger og vurdere tilstanden.

Akutteamet besøger Peter Olsen første gang d. 10/2 og foretager de undersøgelser og målinger som egen læge har anmodet om.
Peter har øget respirationsfrekvens med udpræget svimmelhed til følge.
Peter har øget mængde sekret og kan ikke hoste frit, så de foretager en supplerende udredning (sekret test til dyrkning).

Desuden er Peter er præget af insufficient iltning og har problemer med at gå på sikker vis, så de planlægger de en respirationsbehandling (vejledning i vejrtrækningsteknikker og PEEP-fløjte) for at afhjælpe problemer med mobilitet og bevægelse.
Dette dokumenteres - se nedenstående. Opfølgning på tilstandene planlægges til den 12/2.

#### FSIII Documentation
The following FSIII information is documented in the record system.

{:class="grid"}
| Condition | Intervention |
| --------- | ------------ |
|Respirationsproblemer|Undersøgelse og måling af værdier (akut) samt Supplerende udredning(akut)|
|Problemer med mobilitet og bevægelse|Respirationsbehandling|

#### Reporting
A delivery report is generated containing the citizen, 2 conditions, 2 completed interventions, 1 planned interventions starting February 10th, and a follow-up encounter on February 12th for the conditions. The planned intervention reference the condition according to the table above.

[DeliveryReport-PeterOlsen-1](Bundle-d54206de-c95b-4c53-9517-6eb155dca99a.html)

### Second Encounter February 12th, 2021 - Acute team

#### Story
Akutteamet besøger Peter Olsen anden gang d. 12/2 til en opfølgning.
Peters respirationsfrekvens er tæt på normaliseret og svimmelheden er aftagende. Akut teamet vurderer at fokus på respirationsproblemer og problemer med mobilitet og bevægelse fortsættes. Dette dokumenteres - se nedenstående. Opfølgning på tilstandene planlægges til den 14/2.

#### FSIII Documentation
The following FSIII information is documented in the record system.

{:class="grid"}
| Condition | Intervention |
| --------- | ------------ |
|Respirationsproblemer||
|Problemer med mobilitet og bevægelse|Respirationsbehandling|

#### Reporting
A delivery report is generated containing the citizen, 2 conditions, a follow-up observation, and a follow-up encounter on February 14th for the conditions. The planned intervention is unchanged and thus not included in the report.

[DeliveryReport-PeterOlsen-2](Bundle-abc81b1f-b3ba-41f0-9f4b-2fc4df5aaabb.html)

### Third Encounter February 14th, 2021 - Acute team

#### Story
Akutteamet vurderer ved besøget d. 14/2, at Peter Olsen har god effekt af vejledning i vejrtrækningsteknikkerne og han bruger PEEP-fløjet, og opnår således en mere kontrolleret vejrtrækning. De dokumenterer at området Respiration og Cirkulation ikke længere er relevant for Peter.

Ved samme opfølgning vurderes det at tilstanden Problemer med mobilitet og bevægelse med den tilhørende indsats Respirationsbehandling bør ændres inden for rammen, og at der er behov for en ny faglig planlægning og disponering.
Akutteamet afslutter og Peter Olsen overgår til hjemmesygeplejen.

#### FSIII Documentation
The following FSIII information is documented in the record system.

{:class="grid"}
| Condition | Intervention |
| --------- | ------------ |
|Problemer med mobilitet og bevægelse|Respirationsbehandling|

#### Reporting
A delivery report is generated containing the citizen, 2 conditions, 1 matter of interest observation, 2 follow-up observations (afsluttes, fortsættes), and a follow-up encounter on February 15th for the conditions. The planned intervention is unchanged and thus not included in the report.

[DeliveryReport-PeterOlsen-3](Bundle-0c1112c3-77b5-4d85-965c-0c26228ec7ef.html)

### Fourth Encounter February 15th, 2021 - Nursing team

#### Story
Hjemmesygeplejen aflægger hjemmebesøg den efterfølgende dag 15/2. De vurderer her at Peter Olsen kunne have glæde af genoptræning efter servicelovens § 86 stk. 2. Hjemmesygeplejen planlægger opfølgning til d. 17/2, og Peter Olsen bliver indkaldt til det lokale træningscenter d. 18/2 med en opfølgningsdato den 6/4.

#### FSIII Documentation
The following FSIII information is documented in the record system.

{:class="grid"}
| Condition | Severity | Goal | Intervention |
| --------- | -------- | ---- | ------------ |
|Problemer med mobilitet og bevægelse|||Respirationsbehandling|
|Gå (servicelov)|1 - Lette begrænsninger|0 - Ingen eller ubetydlige begrænsninger|Vedligehold af færdigheder|

#### Reporting
A delivery report is generated containing the citizen, 1 previous and 1 new condition, 1 goal, and 2 follow-up encounters on February 17th and April 6th for each of the conditions.

[DeliveryReport-PeterOlsen-4](Bundle-374484d0-00cb-4b63-94d1-a0d984afc339.html)

### Fifth Encounter February 17th, 2021 - Nursing team

#### Story
I hjemmesygeplejen noteres det i Peter Olsens journal, at han nu er tilbage i habitualtilstanden med sin kroniske sygdom og har fortsat glæde af PEEP-fløjten, og der er ikke aktuelle tilstande eller indsatser.
Peter er selv tilfreds, men han har reduceret lungekapacitet grundet exacerbationer.
Imidlertid har hele forløbet været en ’hård omgang’ og parret (Gerda er meget usikker på om Peter nu også selv kan mærke om det går godt!).

Derfor dokumenteres det på Problemområderne - Psykosociale forhold samt Søvn og hvile, at der bør være fokus på Peter Olsens habitus.
Han har både i forløbet og efterfølgende umiddelbart virket meget positiv.
Imidlertid har Peter Olsen ved nogle aftenbesøg oplyst, at han sover skidt om natten og at han har været lidt ked af det hele.

#### FSIII Documentation
The following FSIII information is documented in the record system.

{:class="grid"}
| Condition | Severity | Goal | Intervention |
| --------- | -------- | ---- | ------------ |
|Gå (servicelov)|1 - Lette begrænsninger|0 - Ingen eller ubetydlige begrænsninger|Vedligehold af færdigheder|

#### Reporting
A delivery report is generated containing the citizen, 1 previous condition, 1 previous intervention, 2 matter of interest observations, and a follow-up observation.

[DeliveryReport-PeterOlsen-5](Bundle-cc93afc5-7849-4895-84eb-00bb5c129c0b.html)

### Sixth Encounter February 18th, 2021 - Training

#### Story
I træningscenterets udredning efter serviceloven spørges Peters om sin egne vurdering i forhold til udførelse og betydning af de forskellige aktiviteter.
Efter at have deltaget i vedligeholdelsestræningen føler Peter Olsen sig sikker på benene igen og han vurdere selv at ’det går som det gjorde før indlæggelsen’.

Træningscenteret dokumenterer, at Peter udfører selv og ikke oplever begrænsninger i at gå.

#### FSIII Documentation
The following FSIII information is documented in the record system.

{:class="grid"}
| Condition | Severity | Goal | Intervention |
| --------- | -------- | ---- | ------------ |
|Gå (servicelov)|1 - Lette begrænsninger|0 - Ingen eller ubetydlige begrænsninger|Vedligehold af færdigheder|

#### Reporting
A delivery report is generated containing the citizen, 1 condition, 2 citizens own observations, and a follow-up encounter on 6th of April.

[DeliveryReport-PeterOlsen-6](Bundle-1652f2a9-510a-4cd3-8fc4-8b69d0ffedae.html)


---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/NursingNew.md

This page describes three subsequent delivery reports for the citizen Peter Olsen.
For each delivery report the story is told (in Danish), the FSIII documentation is listed, and the reporting example is given.

In this example, the GeneralEncounter ressource is used for follow up encounters, but no new usage is shown here. See the new home care example instead.

### First Event February 10th, 2021 - Acute team 

#### Story
Gerda Olsen har ringet til praktiserende læge.
Hendes mand Peter har det ikke godt.
Peter er udskrevet fra sygehuset for tre dage siden efter en akut exacerbationer (midlertidig forværring) af hans KOL.
Han har egentlig været i bedring, men her sidst på dagen fik han feber, hovedpine og øget vejrtrækningsfrekvens. 

Peter og Gerda fik besked på sygehuset om at holde øje med almentilstanden og kontakte egen læge ved forværringer.
Exacerbationer er alvorlige, idet hver episode reducerer lungefunktionen irreversibelt, og akut exacerbation af KOL er den hyppigste dødsårsag hos disse patienter.
Gerda er derfor meget nervøs for Peter og vil gerne have at egen læge vil indlægge ham igen.

Egen læge aftaler i stedet med Gerda, at der kommer en sygeplejerske hjem og kigger til Peter.

Herefter kontakter egen læge det kommunale akutteam og oplyser at Peter Olsen oplever forværring i almentilstanden – blandt andet feber, hovedpine og øget vejrtrækningsfrekvens.
Han ønsker derfor, at akutteamet skal besøge Peter og foretage nogle målinger og vurdere tilstanden.

Akutteamet besøger Peter Olsen første gang d. 10/2 og foretager de undersøgelser og målinger som egen læge har anmodet om.
Peter har øget respirationsfrekvens med udpræget svimmelhed til følge.
Peter har øget mængde sekret og kan ikke hoste frit, så de foretager en supplerende udredning (sekret test til dyrkning).

Desuden er Peter præget af insufficient iltning og har problemer med at gå på sikker vis, så de planlægger en respirationsbehandling (vejledning i vejrtrækningsteknikker og PEEP-fløjte) for at afhjælpe problemer med mobilitet og bevægelse.
Dette dokumenteres - se nedenstående. Opfølgning på tilstandene planlægges til den 12/2.

#### FSIII Documentation
The following FSIII information is documented in the record system.

{:class="grid"}
| Condition | Intervention |
| --------- | ------------ |
|Respirationsproblemer|Undersøgelse og måling af værdier (akut), Supplerende udredning(akut)|
|Respirationsproblemer, Problemer med mobilitet og bevægelse|Respirationsbehandling|

#### Reporting
A delivery report is generated containing the citizen, 2 conditions, 2 completed interventions (Undersøgelse og måling af værdier, Supplerende udredning), 1 planned intervention (Respirationsbehandling) starting February 10th, and a follow-up encounter on February 12th for the conditions. The planned intervention reference the condition according to the table above.

[DeliveryReport-PeterOlsen-1](Bundle-4768772b-67f3-4468-9a2f-ee9a0254a323.html)

### Second Event February 12th, 2021 - Acute team

#### Story
Akutteamet besøger Peter Olsen anden gang d. 12/2 til en opfølgning.
Peters respirationsfrekvens er tæt på normaliseret og svimmelheden er aftagende. Akut teamet vurderer at der fortsat skal være fokus på respirationsproblemer og problemer med mobilitet og bevægelse. Se nedenstående. Opfølgning på tilstandene planlægges til den 14/2.

#### FSIII Documentation
The following FSIII information is documented in the record system.

{:class="grid"}
| Condition | Intervention |
| --------- | ------------ |
|Respirationsproblemer, Problemer med mobilitet og bevægelse|Respirationsbehandling|

#### Reporting
A delivery report is generated containing the citizen, 2 conditions, and a follow-up encounter on February 14th for the conditions. The planned intervention is unchanged and thus not included in the report.

[DeliveryReport-PeterOlsen-2](Bundle-bad12c80-85ff-4b36-8396-414a1b58cd0d.html)

### Third Event February 14th, 2021 - Acute team

#### Story
Akutteamet vurderer ved besøget d. 14/2, at Peter Olsen har god effekt af vejledning i vejrtrækningsteknikkerne og han bruger PEEP-fløjte, og opnår således en mere kontrolleret vejrtrækning. De dokumenterer at Peter ikke længere har tilstanden 'Respirationsproblemer'. Akutteamet vurderer, at det er på tide at lade Peter Olsen overgå til hjemmesygeplejen.

Ved samme opfølgning vurderes det, at tilstanden Problemer med mobilitet og bevægelse med den tilhørende indsats Respirationsbehandling bør ændres, og at der er behov for en ny faglig planlægning og disponering. Hjemmesygeplejen skal dagen efter komme og vurdere, hvad der videre skal ske.

#### FSIII Documentation
The following FSIII information is documented in the record system.

{:class="grid"}
| Condition | Intervention |
| --------- | ------------ |
|Problemer med mobilitet og bevægelse|Respirationsbehandling|

#### Reporting
A delivery report is generated containing the citizen, 2 conditions (one is closed), and a follow-up encounter on February 15th for the conditions. The planned intervention is included as well to document that one of the conditions is no longer referenced.

[DeliveryReport-PeterOlsen-3](Bundle-3c4919f9-aec9-485f-808a-3f9ff6c95786.html)

### Fourth Event February 15th, 2021 - Nursing team

#### Story
Hjemmesygeplejen aflægger hjemmebesøg den efterfølgende dag 15/2. De vurderer her, at Peter Olsen kunne have glæde af genoptræning efter Servicelovens § 86 stk. 2. Hjemmesygeplejen planlægger opfølgning til d. 17/2, og Peter Olsen bliver indkaldt til det lokale træningscenter d. 18/2 med en opfølgningsdato den 6/4.

#### FSIII Documentation
The following FSIII information is documented in the record system.

{:class="grid"}
| Condition | Severity | Goal | Intervention |
| --------- | -------- | ---- | ------------ |
|Problemer med mobilitet og bevægelse|||Respirationsbehandling|
|Mobilitet og bevægelse (servicelov)|1 - Lette begrænsninger|0 - Ingen eller ubetydlige begrænsninger|Vedligehold af færdigheder|

#### Reporting
A delivery report is generated containing the citizen, 1 previous and 1 new condition, 1 goal, and 2 follow-up encounters on February 17th and April 6th for each of the conditions respectively.

[DeliveryReport-PeterOlsen-4](Bundle-d85460fb-b39e-4cf7-9750-12be44417dfd.html)

### Fifth Event February 17th, 2021 - Nursing team

#### Story
I hjemmesygeplejen noteres det i Peter Olsens journal, at han nu er tilbage i habitualtilstanden med sin kroniske sygdom og har fortsat glæde af PEEP-fløjten, og der er ikke aktuelle tilstande eller indsatser.
Peter er selv tilfreds, men han har reduceret lungekapacitet grundet exacerbationer.
Forløbet har været hårdt for parret, og der er usikkerhed omkring, hvorvidt Peter selv kan mærke om, der er en forværring på vej. Derfor dokumenteres det på Problemområderne - Psykosociale forhold samt Søvn og hvile, at der bør være fokus på Peter Olsens habitus. (Dokumentationen på problemområderne indberettes dog ikke efter forenklingen)

#### FSIII Documentation
The following FSIII information is in the record system.

{:class="grid"}
| Condition | Severity | Goal | Intervention |
| --------- | -------- | ---- | ------------ |
|Mobilitet og bevægelse|1 - Lette begrænsninger|0 - Ingen eller ubetydlige begrænsninger|Vedligehold af færdigheder|

#### Reporting
A delivery report is generated containing the citizen, 1 condition (closing nursing condition), 1 intervention(closing nursing intervention). The home care condition and intervention are not reported because there are no changes.

[DeliveryReport-PeterOlsen-5](Bundle-616ce3ef-b7e8-46e1-aefc-ff5bde81b153.html)



---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/StructureDefinition-klgateway-care-citizen-intro.md

### Scope and usage
Citizen is used to identify the subject of a delivery report by the personal id number (CPR-nummer) and the managing organization that acts as the custodian of the reported data. The personal id number must be an official Danish CPR-nummer without hyphen, and the SOR code must be an official SOR code.

The managing organization is given by its SOR code. For most municipalities this will be the code for then municipality, but if a municipality delivers services covered by FSIII in different departments using different record systems (thus having mulitple custodians) the SOR codes of the department that acts as custodian is used.


### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter, der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|cpr-nummer|Officielt cpr-nummer på borgeren|identifier.value|
|Journalførende organisation|Organisation som ejer journalen med oplysninger|managingOrganization.identifier.value|


---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/StructureDefinition-klgateway-care-citizens-own-observation-intro.md

### Scope and usage
CitizensOwnObservation is used to document, performance level (udførelse) or importance level (betydning) as defined by FSIII. Note that each of the observations require its own instance of this model. The observation only makes sense linked to an already defined Condition or MatterOfInterest. Consequently, the focus-attribute is mandatory.

The code-attribute refers to either performance level or importance level using a required ValueSet, and the result is expressed in valueCodeableConcept, which is also bound to a required FSIII valueSet. Observation and value codes should be correctly matched, so that a performance-result is not used with a importance observation-code.

Notice that the status-attribute is mandatory. For normal use, just set to "final". If data is missing or another problem has occured, follow the FHIR guidance to populate the field correctly.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter, der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|borgervurderingskode|Klasse som udtrykker, at der observeres på borgers evne til at udføre funktion eller aktivitet.|Observation.code.coding|
|borgervurderingsresultat|Klasse, der udtrykker resultatet af borgers vurdering.|Observation.valueCodeableConcept.coding|
|borgervurderingssubjekt|Den borger, som er genstand for vurdering.|Observation.subject|
|borgervurderingsfokus|Tilstand eller matter of interest, som denne borgervurdering er direkte observation på.|Observation.focus|
|borgervurderingstid|Tidspunkt for borgervurderingen.|Observation.effectiveDateTime|
|borgervurderingsstatus|Klasse der udtrykker, hvor i sin proces, borgervurderingen er.|Observation.status|

---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/StructureDefinition-klgateway-care-completed-intervention-intro.md

### Scope and usage
In a Danish municipality setting, CompletedIntervention is used to describe what activities has been delivered (e.g. a visit from a nurse to a citizen home where wound care is delivered). A CompletedIntervention always describes actual activities of one encounter. It should not be confused with PlannedIntervention, which describes the intention of activities, typically for several encounters.

In this implementation guide it is only used for interventions delivered acute or otherwise not planned at the time of delivery.

Procedure.subject references the citizen. Procedure.code.coding holds the intervention code from FSIII of the intervention that should be carried out. Start-time is documented in Procedure.performedDateTime. They are all mandatory.

It is optional to document the Condition which is the reason for delivering the CompletedIntervention. If it is present, register it in Procedure.reasonReference. The Encounter where the CompletedIntervention took place, can be referenced in Procedure.encounter. This is also optional.

Procedure.status holds a mandatory status attribute, use only values "completed" and "entered-in-error".

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|leveretIndsatsSubjekt|Den borger som indsatsen er leveret til.|Procedure.subject|
|leveretIndsatsKode|Klasse, der udtrykker hvad den leverede indsats omhandler.|Procedure.code.coding|
|leveretIndsatsStart|Starttidspunkt for levering af indsatsen.|Procedure.performedDateTime|
|leveretIndsatsbegrundelse|Tilstand som indsatsen rettes mod|Procedure.reasonReference|
|leveretIndsatsKontakt|Den kontakt hvor indsatsen leveres|Procedure.encounter|
|leveretIndsatsstatus|Indikation af hvor i det kliniske forløb indsatsen er.|Procedure.status|


---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/StructureDefinition-klgateway-care-condition-intro.md

### Scope and usage
The Condition may be instatiated whenever a condition is found and registered for citizens in Danish municipalities.

Conditions are always defined by Condition.code, which may originate from FSIII.

Condition.severity.coding has as valid values the funtional level (FSIII funktionsniveau).

Condition.recordedDate is the date where the condition was first recorded, NOT the date where the problem first known to be present.

Condition.clinicalStatus should be populated with the value "active" if the citizen has the condition, and inactive if the citizen no longer have the condition. In most other use cases, Condition.verificationStatus should be "confirmed". clinicalStatus is mandatory, and it is a good idea to always provide the verificationStatus. If not populated, the condition is assumed to be "confirmed".

Conditions are related to a professional context (through its code). These are the different contexts in which codelists of conditions are formulated:

* Home nursing SUL §138 (FSIII)
* Home care SEL §83, §83a, §84, §86 (FSIII)

Condition.category is, in this implementation, used as a way to determine whether the condition is in focus in a professional context. In focus means that this condition is solely or partially the reason why interventions are performed in the professional context. If a condition is "in focus" Condition.category is populated with the value "problem-list-item". An empty Condition.category means that the focus have not been considered (if it is the first version of a condition). If the latter is the case, it might be difficult to determine whether a condition have been ended.

Ending a condition means that the condition falls out of focus in a professional context e.g. if the citizen moves, or another professional group takes over the care for the citizen. This does not necessarily mean that the citizen no longer has the condition. When a condition is ended, the Condition.category looses its "problem-list-item" flag. The idea is to state that from a citizen viewpoint the condition has not nessesarily changed, but in this professional context it is no longer in focus. It follows that it is valid to close a condition with Condition.clinicalStatus = active and an empty Condition.category.

Condition follow-up is documented using Condition.extension:followUpEncounter, which points to a future encounter, with Encounter.type = "opfølgning". However, the followUpEncounter-extension will be depricated in the next version of this implementation guide. In the new version, GeneralEncounter holds a reference to the Condition.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|tilstandskode|Udtrykker hvilken klasse tilstanden tilhører.|Condition.code.coding|
|tilstandsstatus|Klasse der udtrykker en status for om tilstanden er til stede eller ej.|Condition.clinicalStatus og Condition.verificationStatus|
|tilstandsoprettelsestid|tidsangivelse for hvornår tilstanden først blev oprettet i journalen|Condition.recordedDate|
|tilstandsplanlagtOpfølgning|Kontakt, hvor det planlægges at følge op på tilstanden |Condition.extension:followUpEncounter|
|tilstandssubjekt|Den borger som har tilstanden|Condition.subject|
|tilstandsfokus|Klasse der udtrykker, om en faggruppe har tilstanden i fokus for sine indsatser|Condition.category.coding|

---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/StructureDefinition-klgateway-care-encounter-intro.md

### Scope and usage
The Encounter may be instantiated whenever citizens and practitioners meet in a Danish municipality context. In this implementation guide it is only used for follow-up on conditions and interventions. The Encounter.type.coding attribute is thus the fixed code for "opfølgning".

It is important in FSIII to be able to express follow-up encounters. In the planning state, these are documented by setting Encounter.status = "planned", and Encounter.type.coding = "opfølgning". Encounters which are finished should not be reported hence Encounters with Encounter.status = 'finished' should not be reported and can be omitted entirely.

Encounter.class is mandatory in FHIR. In this implementation guide encounter have the fixed code 'HH' home health.

Encounter.period.start is mandatory and contains the follow-up date. Note that "time of day" is optional. 

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|kontaktstatus|Klasse der indikerer om kontakten er igangværende, eller om dokumentationen repræsentere en fremtidig intention eller er historisk|Encounter.status|
|kontakttype|Klasse der udtrykker typen af aktivitet der gennemføres ved kontakten|Encounter.type.coding|
|kontaktstart|Kontaktens start, eller planlagte start|Encounter.period.start|
|kontaktsubjekt|Den borger kontakten vedrører|Encounter.subject|
|kontaktklasse|Klasse, der udtrykker en generel kategori for kontakten, som rækker ud over den kommunale kontekst.|Encounter.class|


---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/StructureDefinition-klgateway-care-follow-up-observation-intro.md

### Scope and usage
FollowUpObservation is optional. It is used to document the result of a follow-up procedure, as described by FSIII. Follow-ups are documented using this profile, whether they are documented by suppliers during an intervention, or documented by autorities, at planned follow-ups.

The profile has the Follow-up result in Observation.valueCodeableConcept.coding

The ObservationCode is mandatory, and fixed to a specific SNOMED CT code that signifies that this is an evaluation of a care plan (evaluering af indsats i bred forstand).

The status is in this implementation guide should either be final or entered-in-error.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer, hvilke af FHIR-profilens atributter, der skal bruges til specifikation af indholdet. 

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|opfølgningskode|Klasse, der udtrykker at der evalueres på den indsats der er igangsat.|Observation.code.coding|
|opfølgningsresultatStruktureret|Struktureret resultat af en opfølgningen|Observation.valueCodeableConcept.coding|
|opfølgningssubjekt|Den borger, der er genstand for opfølgningen|Observation.subject|
|opfølgningstid|Det tidspunkt, hvor opfølgningen er foretaget|Observation.effectiveDateTime|
|opfølgningsstatus|Kode der udtrykker, hvor i sin proces, opfølgningen er|Observation.status|

---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/StructureDefinition-klgateway-care-general-encounter-intro.md

### Scope and usage
The Encounter may be instantiated whenever citizens and practitioners meet in a Danish municipality context.

It is mandatory in FSIII to be able to express follow-up encounters on Conditions. In the planning state, these are documented by setting Encounter.status = 'planned', and Encounter.type.coding = 'opfølgning'. 

Encounters which are finished may also be reported. This can be especially relevant for Encounter.type.coding = 'opfølgning' and Encounter.type.coding = 'udførelse af planlagt indsats'. Use Encounter.status 'finished'. Reporting on finished encounters is optional.

To report errors use status 'entered-in-error'

Encounter.class is mandatory in FHIR. In Danish municipalities the values are used as follows.
* Visits in citizens homes have the code 'HH' Home health, the code is also used for services that are not strictly health related e.g. help with cleaning. This code is also used, even if the activities stretch outside the citizens residence e.g. a physiotherapist that want to see a citizen walk outside, or a social worker helping with shopping activities.
* Sessions where the citizens visit municipality facilities e.g. for training or health prevention have the code 'AMB' Ambulatory.
* Encounters delivered as a screen visit should be registered as 'Skærmbesøg'.
* Encounters delivered using a phone should be registered as 'Telefonisk'

The time of the encounter is documented in Encounter.period.start and Encounter.periode.end, and Encounter.period.start is mandatory. Only planned time is mandatory to report. There is no expectation that the staff update the time if they finish a little earlier or a little later. Time of day is also not mandatory. Encounter.periode.end and time of day is encouraged when reporting on finished Encounters.

Encounters can be related to the PlannedIntervention on which they are a delivery. Use Encounter.extension[basedOnCarePlan]. Encounters can also be related to the condition or conditions which are the reason for having the encounter. This is used for documenting the condition follow-up encounter. Use Encounter.reasonReference

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificere hvilke af FHIR-profilens atributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|borgerkontaktstatus|Klasse der indikerer om kontakten er igangværende, eller om dokumentationen repræsentere en fremtidig intention eller er historisk|Encounter.status|
|kontakttype|Klasse der udtrykker typen af aktivitet der gennemføres ved kontakten|Encounter.type.coding|
|borgerkontaktklasse|Klasse, der udtrykker en generel kategori for kontaktens leveringsform.|Encounter.class|
|borgerkontaktstart|Kontaktens start, eller planlagte start|Encounter.period.start|
|borgerkontaktslut|Kontaktens sluttidspunkt, eller planlagte sluttidspunkt|Encounter.period.end|
|borgerkontaktsubjekt|Den borger kontakten vedrører|Encounter.subject|
|borgerkontaktBaseretPå|Den eller de indsatser, der er grunden til at denne kontakt udføres|Encounter.extension:basedOnCarePlan|
|borgerkontaktTilstand|Den eller de tilstande, der er grunden til at denne kontakt udføres|Encounter.reasonReference|

---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/StructureDefinition-klgateway-care-goal-intro.md

### Scope and usage
In a Danish municipality setting, Goal is used to describe all the different kinds of goals and purposes defined by FSIII.

The goal itself is described using Goal.target and Goal.description. The target describes the severity related to functioning. Goal.target.meassure is used to express the method which in this profile is fixed to the code for funktionsevneniveau.

The FHIR Goal ressource has a mandatory attribute Goal.lifecycleStatus with a binding to a status ValueSet. Use "active" for active goals, "completed" for all goals that are either reached or no longer being persued, and entered-in-error for corrrections.

### Conversions between Danish information model and FHIR-profile
Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens attributter, der skal bruges til specifikation af indholdet.


{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|målkategori|Klasse, der udtrykker hvilket mål der er tale om.|Goal.category|
|målSværhedsgrad|En klasse, der udtrykker en tilstands mål for sværhedsgrad.|Goal.target|
|målbeskrivelse|Beskrivelse af hvad målet er.|Goal.description|
|målSubjekt|Den borger som målet er opstillet for.|Goal.subject|
|målrelateret|Den eller de Tilstande eller Oplysninger, der er relvant for målet.|Goal.addresses|
|målemetode|Den type af observationer der skal til for at følge med i dette mål.|Goal.target.measure|
|målstatus|Status for målet|Goal.lifecycleStatus|


---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/StructureDefinition-klgateway-care-matter-of-interest-observation-intro.md

## Scope and usage
The MatterOfInterestObservation is used in Danish Municipalities, and may be instantiated whenever information about the citizen is recorded, under the headings defined by Areas (FSIII områder). For each heading, a new instance of MatterOfInterestObservation is used.

It is allowed to add a finding to represent the context at risk (tilstandskode) if this is documented as part of the matters of interest. Use the findingContextAtRisk extension for this.

Notice that the status-attribute is mandatory. For normal use, just set to "final", if data is missing or another problem has occured, follow the FHIR guidance to populate the field correctly. In case of a correction use entered-in-error.

When a matter of interest is no longer in focus the values is set to B6 "Ikke relevant", otherwise the value shall not be set.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens attributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|oplysningskode|Klasse der udtrykker, hvilket fagligt emneområde, oplysningen tilhører. |Observation.code.coding|
|oplysningssværhedsgrad|Sværhedsgraden af de udfordringer som indhentede informationer observationer og vurderinger har belyst, organiseret under faglige emneområder|Observation.valueCodeableConcept.coding|
|oplysningssubjekt|Den borger som oplysningen omhandler|Observation.subject|
|oplysningstid|Det tidspunkt hvor oplysningen er vurderet.|Observation.effectiveDateTime|
|oplysningsstatus|Klasse der udtrykker, hvor i sin proces, oplysningen er.|Observation.status|
|tilstandskode|Klasse der udtrykker en tilstand som er kontekst for det faglige emneområde.|Observation.extension:contextAtRisk|

---

File: repos/hl7dk_SLASH_kl-gateway/input/pagecontent/StructureDefinition-klgateway-care-planned-intervention-intro.md

### Scope and usage
The PlannedIntervention may be instatiated whenever an intervention is planned for a citizen in Danish municipalities. PlannedIntervention is used for planning ahead. When the intervention is acute or otherwise not planned, use CompletedIntervention instead.

CarePlan.activity.detail.code.coding holds the intervention code from FSIII of the intervention that should be carried out.

It is important to distiguish correctly between the dates and times stated in the model. CarePlan.period.start is from when the PlannedIntervention is authorized (bevillingstid). The planned end-date is CarePlan.period.end, unless the date has already occured and the status is "completed", then it is the actual end-date.

CarePlan.status and CarePlan.intent are mandatory in the FHIR CarePlan resource. CarePlan.intent is always 'plan' in this implementation guide. CarePlan status should be either 'unknown', 'entered-in-error', or the status of the intervention at the time of reporting. Note that the meaning of 'active' is "ready to be acted upon", so it does not signify that the first activity has occured.

CarePlan.activity.detail.status is also mandatory, and all the statuses in the FHIR ValueSet may be used, however 'unknown' is permitted from the time where the intervention occurs in the record until its completion. It is recommended not to use 'entered-in-error' - if the CarePlan is entered-in-error use CarePlan.status.

CarePlan:extension.FollowUpEncounter can be used to explicitely state when follow-up on the intervention should occur. However, the followUpEncounter-extension will be depricated in the next version of this implementation guide. In the new version, GeneralEncounter can hold a reference to the PlannedIntervention.

CarePlan.activity.detail.reasonReference holds the link between conditions and interventions which are mandatory is FSIII, but optional in this context to allow reporting of interventions not yet linked to a reason.

CarePlan.activity.detail:extension.deliveryType can be used to state, how interventions are delivered. Valid values are 'individual', 'group based', 'delivered using a robot' 'delivered using digital solutions'. Note that more than one code may apply to one intervention e.g. cleaning may be done partially by a robot vacuum cleaner, and partially by a person. In this case, use both 'individual' and 'delivered using a robot'.

### Conversions between Danish information model and FHIR-profile

Nedenstående tabel oversætter mellem de attributter der er defineret i den fælleskommunale informationsmodel (FKI), definerer kort den enkelte attribut på dansk og specificerer hvilke af FHIR-profilens attributter der skal bruges til specifikation af indholdet

{:class="grid"}
|   FKI-attribut      | Definition        | FHIR  |
| ------------- |-------------| -----|
|indsatsskode|Udtrykker hvilken klasse indsatsen tilhører.|CarePlan.activity.detail.code.coding|
|indsatsbevillingstid|Tidspunktet for hvornår indsatsen er bevilget|CarePlan.period.start|
|indsatsafslutningstid|Tidspunktet for hvornår indsatsen er afsluttet, eller planlægges afsluttet|CarePlan.period.end|
|indsatsstatus|Indikerer om indsatsplanen er klar til at blive handlet på, om dokumentationen repræsentere en fremtidig intention eller er historisk.|CarePlan.status|
|indsatshensigt|Indikerer niveauet af autorisation og hvor langt i planlægningen indsatsen er|CarePlan.intent|
|indsatssubjekt|Den borger som den planlagte indsats retter sig mod|CarePlan.subject|
|indsatsPlanlagtOpfølgning|Kontakt, hvor det planlægges at følge op på tilstanden |CarePlan:extension.FollowUpEncounter|
|indsatsbegrundelse|Tilstand som indsatsen rettes mod|CarePlan.activity.detail.reasonReference|
|indsatsAktivitetsstatus|Indikerer om indsatsen er igangsat, eller om den ikke er startet, eller er færdiggjort|CarePlan.activity.detail.status|
|indsatsLeveringstype|Type der beskriver hvordan indsatsen leveres|activity.detail.extension:deliveryType|

---
