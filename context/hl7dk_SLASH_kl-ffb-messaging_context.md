File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/Aliases.fsh

Alias: $KLCommon =  http://kl.dk/fhir/common/caresocial/CodeSystem/KLCommonCareSocialCodes
Alias: $FFB =  http://kl.dk/fhir/common/caresocial/CodeSystem/FFB
Alias: $messageEvent = http://ffb/messaging/kl.dk/1.0/CodeSystem/kl-messaging-ffb-messageEventSystem
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $v3-RoleCode = http://terminology.hl7.org/CodeSystem/v3-RoleCode
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode
Alias: $municipalityCodes = http://hl7.dk/fhir/core/CodeSystem/dk-core-municipality-codes
Alias: $consentScope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $consentpolicycodes = http://ffb/messaging/kl.dk/1.0/CodeSystem/kl-messaging-ffb-consentPolicyCodes
Alias: $goalStatus =  http://hl7.org/fhir/goal-status
Alias: $conditionClinical = http://terminology.hl7.org/CodeSystem/condition-clinical

Alias: $guardianshipForm = http://ffb/messaging/kl.dk/1.0/CodeSystem/kl-messaging-ffb-guardianshipFormCodes
Alias: $relationshipType = http://ffb/messaging/kl.dk/1.0/CodeSystem/kl-messaging-ffb-relationshipTypeCodes
Alias: $participantRole = http://ffb/messaging/kl.dk/1.0/CodeSystem/kl-messaging-ffb-participantRoleCodes


---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBAccount.fsh

Profile: KLMessagingFFBAccount
Parent: Account
Id: kl-messaging-ffb-account
Title: "Account"
Description: "Account Information for FFB messaging"
* status MS
* status = #active
* identifier MS
* identifier.system 1.. MS
* identifier.value 1.. MS
* identifier ^slicing.discriminator[0].type = #value
* identifier ^slicing.discriminator[0].path = "system"
* identifier ^slicing.rules = #open
* identifier contains accountno 1..1 MS
* identifier[accountno].system = "urn:accountno"

Profile: KLMessagingFFBAccountOwner
Parent: Organization
Id: kl-messaging-ffb-accountOwner
Title: "AccountOwner"
Description: "Organization behind an account"
* identifier MS
* identifier.system 1.. MS
* identifier.value 1.. MS
* identifier ^slicing.discriminator[0].type = #value
* identifier ^slicing.discriminator[0].path = "system"
* identifier ^slicing.rules = #open
* identifier contains eanIdentifier 1..1 MS
* identifier[eanIdentifier] only KLMessagingFFBEANIdentifier
* contact MS
* contact.name MS
* contact.name.prefix MS
* contact.name.family MS
* contact.name.given MS
* contact.telecom MS
* contact.telecom.system 1.. MS
* contact.telecom.value 1.. MS
* contact.telecom ^slicing.discriminator[0].type = #value
* contact.telecom ^slicing.discriminator[0].path = "system"
* contact.telecom ^slicing.rules = #open
* contact.telecom contains phone 1.. MS and email 0.. MS
* contact.telecom[phone].system = #phone
* contact.telecom[email].system = #email

Profile: KLMessagingFFBEANIdentifier
Parent: Identifier
Id: kl-messaging-ffb-eanIdentifier
Title: "EANIdentifier"
Description: "EAN identifier"
* system 1.. MS
* system = "urn:oid:1.3.88"
* value 1.. MS


---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBCitizen.fsh

Profile: KLMessagingFFBCitizen
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCitizen
Id: kl-messaging-ffb-citizen
Title: "Citizen"
Description: "Citizen for FFB messaging"
* name MS
* name.family MS
* name.given MS
* address MS
* address.line 1.. MS
* address.postalCode 1.. MS
* address.city 1.. MS
* telecom MS
* telecom.system 1.. MS
* telecom.value 1.. MS
* telecom ^slicing.discriminator[0].type = #value
* telecom ^slicing.discriminator[0].path = "system"
* telecom ^slicing.rules = #open
* telecom contains phone 1.. MS and email 0.. MS
* telecom[phone].system = #phone
* telecom[email].system = #email
* contact MS
* contact.relationship MS
* contact.name MS
* contact.name.family MS
* contact.name.given MS
* contact.telecom MS
* contact.telecom.system 1.. MS
* contact.telecom.value 1.. MS
* contact.telecom ^slicing.discriminator[0].type = #value
* contact.telecom ^slicing.discriminator[0].path = "system"
* contact.telecom ^slicing.rules = #open
* contact.telecom contains phone 1.. MS and email 0.. MS
* contact.telecom[phone].system = #phone
* contact.telecom[email].system = #email

Profile: KLMessagingFFBConsent
Parent: Consent
Id: kl-messaging-ffb-consent
Title: "Consent"
Description: "Consent given for a related person in FFB Messaging"
* status MS
* scope MS
* category MS
* patient 1.. MS
* patient only Reference(KLMessagingFFBCitizen)
* dateTime 1.. MS
* performer 1.. MS
* performer only Reference(KLMessagingFFBRelatedPerson)

Profile: KLMessagingFFBRelatedPerson
Parent: RelatedPerson
Id: kl-messaging-ffb-relatedPerson
Title: "RelatedPerson"
Description: "Related person for a citizen in FFB messaging"
* patient MS
* patient only Reference(KLMessagingFFBCitizen)
* relationship 1.. MS
* relationship from KLMessagingFFBRelationshipTypeValues (extensible)
* name MS
* name.family MS
* name.given MS
* address.line 1.. MS
* address.postalCode 1.. MS
* address.city 1.. MS
* telecom MS
* telecom.system 1.. MS
* telecom.value 1.. MS
* telecom ^slicing.discriminator[0].type = #value
* telecom ^slicing.discriminator[0].path = "system"
* telecom ^slicing.rules = #open
* telecom contains phone 0.. MS and email 0.. MS
* telecom[phone].system = #phone
* telecom[email].system = #email

Profile: KLMessagingFFBGuardian
Parent: KLMessagingFFBRelatedPerson
Id: kl-messaging-ffb-guardian
Title: "Guardian"
Description: "Guardian for citizen in FFB messaging"
* relationship = $v3-RoleCode#GUARD
* extension contains KLMessagingFFBGuardianshipFormExtension named guardianshipForm 1..1 MS

---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBCitizenData.fsh

Profile: KLMessagingFFBCitizenObjective
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialGoal
Id: kl-messaging-ffb-citizenObjective
Title: "CitizenObjective"
Description: "The overall objective of the citizen"
* lifecycleStatus MS
* category MS
* category = $KLCommon#416fe27d-3ccf-4390-8742-8b52a9d8dc78
* description MS
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)

Profile: KLMessagingFFBInterventionPurpose
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialPurpose
Id: kl-messaging-ffb-interventionPurpose
Title: "InterventionPurpose"
Description: "Purpose of an intervention for a citizen"
* lifecycleStatus MS
* description MS
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)

Profile: KLMessagingFFBInterventionGoal
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialFFBGoal
Id: kl-messaging-ffb-interventionGoal
Title: "InterventionGoal"
Description: "Goal related to an intervention for a citizen"
* lifecycleStatus MS
* description MS
* category MS
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)
* target MS
* target[changeValueSlice] MS
* target[changeValueSlice].detailCodeableConcept MS
* target[changeValueSlice].detailCodeableConcept from http://kl.dk/fhir/common/caresocial/ValueSet/KLChangeValueCodesFFB
* target[severitySlice] MS
* target[severitySlice].detailCodeableConcept MS
* target[severitySlice].detailCodeableConcept from http://kl.dk/fhir/common/caresocial/ValueSet/KLSeveritiesFFB
* addresses MS
* addresses only Reference(KLMessagingFFBCondition)
* addresses.extension[ConditionRank] MS

Profile: KLMessagingFFBTargetGroup
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialFocusCondition
Id: kl-messaging-ffb-targetGroup
Title: "TargetGroup"
Description: "Target group of a citizen"
* code 1.. MS
* code.coding 1.. MS
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)

Profile: KLMessagingFFBCondition
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialCondition
Id: kl-messaging-ffb-condition
Title: "Condition"
Description: "Condition according to FFB"
* clinicalStatus MS
* severity MS
* severity from http://kl.dk/fhir/common/caresocial/ValueSet/KLSeveritiesFFB
* code 1.. MS
* code.coding 1..1 MS
* code.coding from http://kl.dk/fhir/common/caresocial/ValueSet/KLConditionCodesFFB (required)
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)

Profile: KLMessagingFFBFollowUp
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialEncounter
Id: kl-messaging-ffb-followUp
Title: "FollowUp"
Description: "Follow-up encounter for conditions"
* status MS
* class MS
* type 1..1 MS
* type = $KLCommon#9f03dfbb-7a97-45a5-94db-d4c3501714a9 "opfølgning"
* period MS
* period.start MS

Profile: KLMessagingFFBInformationGathering
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialInformationGathering
Id: kl-messaging-ffb-informationGathering
Title: "InformationGathering"
Description: "Assessment of the citizen"
* finding MS
* finding.itemReference MS
* finding.itemReference only Reference(KLMessagingFFBCondition or KLMessagingFFBDiagnosis)
* investigation MS
* investigation.item MS
* investigation.item only Reference(KLMessagingFFBEvaluation or KLMessagingFFBMatterOfInterest)
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)

Profile: KLMessagingFFBDiagnosis
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialCondition
Id: kl-messaging-ffb-disgnosis
Title: "Diagnosis"
Description: "A diagnosis of the citizen"
* clinicalStatus MS
* code 1.. MS
* code.coding contains diagnosis 0..1
* code.coding.system = ""
* code.text MS
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)

Profile: KLMessagingFFBEvaluation
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialEvaluation
Id: kl-messaging-ffb-evaluation
Title: "Evaluation"
Description: "Vurdering"
* code.coding[klEvaluationCode] MS
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)
* valueCodeableConcept MS

---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBDocumentReference.fsh

Profile: KLMessagingFFBDocumentReference
Parent: DocumentReference
Id: kl-messaging-ffb-documentReference
Title: "DocumentReference"
Description: "Document reference to attachment"
* status MS
* status = #current
* description MS
* content MS
* content.attachment MS


---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBExtensions.fsh

Extension: KLMessagingFFBActingMunicipalityExtension
Id: kl-messaging-ffb-actingMunicipality
Title: "ActingMunicipality"
Description: "Municipality acting for the subject in social matters"
* value[x] 1..1 MS
* value[x] only Coding
* value[x] from http://hl7.dk/fhir/core/ValueSet/dk-core-MunicipalityCodes (required)

Extension: KLMessagingFFBGuardianshipFormExtension
Id: kl-messaging-ffb-guardianshipForm
Title: "GuardianshipForm"
Description: "Form of guardianship for citizens in FFB messaging"
* value[x] 1..1 MS
* value[x] only Coding
* value[x] from KLMessagingFFBGuardianshipFormValues (required)

Extension: KLMessagingFFBParticipationDescriptionExtension
Id: kl-messaging-ffb-participationDescription
Title: "ParticipationDescription"
Description: "Decription of participants involvement in a careteam"
* value[x] 1..1 MS
* value[x] only string


---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBMatterOfInterest.fsh

Profile: KLMessagingFFBMatterOfInterest
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialMatterOfInterest
Id: kl-messaging-ffb-matterOfInterest
Title: "MatterOfInterest"
Description: "Matter of interest for FFB Themes"
* status MS
* code MS
* code.coding MS
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)
* effectiveDateTime MS
* valueCodeableConcept MS
* valueCodeableConcept.text MS


---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBOrder.fsh

Profile: KLMessagingFFBOrderMessage
Parent: Bundle
Id: kl-messaging-ffb-orderMessage
Title: "OrderMessage"
Description: "Message for sending an order from an authority organization to a provider organization" 
* type MS
* type = #message
* type ^short = "Always message"
* timestamp 1.. MS
* entry MS
* entry.resource 1.. MS

Profile: KLMessagingFFBOrganization
Parent: Organization
Id: kl-messaging-ffb-messagingOrganization
Title: "MessagingOrganization"
Description: "Organization for sending or receiving messages"
* name 1.. MS
// TODO addressing ids

Profile: KLMessagingFFBOrderMessageHeader
Parent: MessageHeader
Id: kl-messaging-ffb-orderMessageHeader
Title: "OrderMessageHeader"
Description: "Message header for an FFB order message"
* eventCoding 1.. MS
* eventCoding = $messageEvent#ffb-order
* focus 1.. MS
* focus only Reference(KLMessagingFFBOrderCarePlan or KLMessagingFFBInformationGathering or KLMessagingFFBAccount or KLMessagingFFBDocumentReference)
* focus ^type.aggregation = #bundled
* source.endpoint MS
* destination.receiver 1.. MS
* destination.receiver only Reference(KLMessagingFFBOrganization)
* destination.endpoint 1.. MS
* sender MS
* sender only Reference(KLMessagingFFBOrganization)

Profile: KLMessagingFFBIntervention
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialPlannedIntervention
Id: kl-messaging-ffb-intervention
Title: "Intervention"
Description: "Intervention in a ordered care plan"
* basedOn 1.. MS
* basedOn only Reference(KLMessagingFFBOrderCarePlan)
* status MS
* intent MS
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)
* created MS
* period MS
* activity MS
* activity.detail 1.. MS
* activity.detail.code 1.. MS
// * activity.detail.code.coding ^slicing.discriminator[0].type = #value
// * activity.detail.code.coding ^slicing.discriminator[0].path = "system"
// * activity.detail.code.coding ^slicing.rules = #open
* activity.detail.code.coding[FFBintervention] MS
* activity.detail.code.coding[FFBintervention] from http://kl.dk/fhir/common/caresocial/ValueSet/KLInterventionsFFB
* activity.detail.status MS

Profile: KLMessagingFFBServicePerformer
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonServicePerformer
Id: kl-messaging-ffb-servicePerformer
Title: "ServicePerformer"
Description: "ServicePerformer information and relevant related persons"
* category MS
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)
* participant 1.. MS
* participant.extension contains KLMessagingFFBParticipationDescriptionExtension named description 0..1 MS
* participant.role MS
* participant.role from KLMessagingFFBParticipantRoleValues
* participant.member MS
* participant.member only Reference(RelatedPerson or KLMessagingFFBParticipatingOrganization)
 

---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBOrderCarePlan.fsh

Profile: KLMessagingFFBOrderCarePlan
Parent: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialCarePlan
Id: kl-messaging-ffb-orderCarePlan
Title: "OrderCarePlan"
Description: "FFB care plan being ordered"
* extension contains KLMessagingFFBActingMunicipalityExtension named subjectActingMunicipality 0..1 MS
* status MS
* intent MS
* category MS
* supportingInfo MS
* supportingInfo only Reference(KLMessagingFFBRelatedCarePlan)
* goal MS
* goal contains citizenObjective 0..* MS
* goal[citizenObjective] only Reference(KLMessagingFFBCitizenObjective)
* goal[fpurpose] only Reference(KLMessagingFFBInterventionPurpose)
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)
* period MS
* created MS 
* author 1.. MS
* author only Reference(KLMessagingFFBParticipatingOrganization)
* careTeam MS
* careTeam only Reference(KLMessagingFFBServicePerformer)
* addresses 1.. MS
* addresses only Reference(KLMessagingFFBTargetGroup)


---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBOrderExample.fsh

Instance: 909e720e-3edb-45b9-aeb2-655a97861f7c
InstanceOf: KLMessagingFFBOrderMessage
Title: "Service request example message"
Description: "Example of a service request from an authority to a seervice provider"
* type = #message
* timestamp = 2021-03-15T13:05:37+01:00
* entry[+].fullUrl = "MessageHeader/da3fe85ebc6147109364d70be0124b18"
* entry[=].resource = da3fe85ebc6147109364d70be0124b18
* entry[+].fullUrl = "Organization/a9e0e18b-dbcb-40a1-9f5e-882365ab52d2" // Sender
* entry[=].resource = a9e0e18b-dbcb-40a1-9f5e-882365ab52d2
* entry[+].fullUrl = "Organization/6d109aab-3803-418b-8e5c-b50ea909623f" // Destination
* entry[=].resource = 6d109aab-3803-418b-8e5c-b50ea909623f
* entry[+].fullUrl = "CarePlan/55602964-b665-45bc-ad84-620c42e1761b" // Order care plan
* entry[=].resource = 55602964-b665-45bc-ad84-620c42e1761b
* entry[+].fullUrl = "ClinicalImpression/7e54d9df-b563-47f7-a91a-e35c94797090" // Information gathering
* entry[=].resource = 7e54d9df-b563-47f7-a91a-e35c94797090
* entry[+].fullUrl = "Goal/76e873e5-7a07-45b7-8247-ab867f3c98a3" // Intervention purpose
* entry[=].resource = 76e873e5-7a07-45b7-8247-ab867f3c98a3
* entry[+].fullUrl = "Goal/b6f135d6-ac63-401a-bd0c-95bb10c5dae1" // Intervention goal
* entry[=].resource = b6f135d6-ac63-401a-bd0c-95bb10c5dae1
* entry[+].fullUrl = "Goal/ad8bac88-eaad-4365-a25b-954df2fbc9ea" // Citizen objective
* entry[=].resource = ad8bac88-eaad-4365-a25b-954df2fbc9ea
* entry[+].fullUrl = "Condition/0ed08826-25f6-49be-9878-ac2e31bd5d50" // Target group - Autismespektrum
* entry[=].resource = 0ed08826-25f6-49be-9878-ac2e31bd5d50
* entry[+].fullUrl = "Condition/ec882075-693e-4626-9d29-a3f2292352f3" // Target group - Anden intellektuel/kognitiv forstyrrelse
* entry[=].resource = ec882075-693e-4626-9d29-a3f2292352f3
* entry[+].fullUrl = "Condition/7528df43-6d4d-4cc1-9c78-ff10e1b1fe5c" // Target group - Omsorgssvigt
* entry[=].resource = 7528df43-6d4d-4cc1-9c78-ff10e1b1fe5c
* entry[+].fullUrl = "Condition/e875c9a1-d40b-4c09-9897-ab2086c5f9bf" // Target group - Social isolation
* entry[=].resource = e875c9a1-d40b-4c09-9897-ab2086c5f9bf
* entry[+].fullUrl = "Condition/a4ca3cb0-015d-43e7-81e5-19fde059667b" // Target group - Udadreagerende adfærd
* entry[=].resource = a4ca3cb0-015d-43e7-81e5-19fde059667b
* entry[+].fullUrl = "Condition/28f1aa94-a993-4b74-b912-18825daa3367" // Diagnosis
* entry[=].resource = 28f1aa94-a993-4b74-b912-18825daa3367
// * entry[+].fullUrl = "Observation/bead3181-7188-4a06-8a57-6da8c5d73937" // Professional assessment - Omgivelsesfaktorer
// * entry[=].resource = bead3181-7188-4a06-8a57-6da8c5d73937
* entry[+].fullUrl = "Condition/a2af7c52-e74e-4ca9-8185-09b921aec3b4" // Condition - Indgå i samspil og kontakt  
* entry[=].resource = a2af7c52-e74e-4ca9-8185-09b921aec3b4
* entry[+].fullUrl = "Condition/71bb3445-cd03-49ad-81e7-845e5567d490" // Condition - Deltage i sociale fællesskaber og fritidsaktiviteter
* entry[=].resource = 71bb3445-cd03-49ad-81e7-845e5567d490
* entry[+].fullUrl = "Condition/33a685e3-7b73-4227-be96-927c5773204b" // Condition - Samtale
* entry[=].resource = 33a685e3-7b73-4227-be96-927c5773204b
* entry[+].fullUrl = "Condition/395b861d-8925-4463-b00f-3c74e637518c" // Condition - Lave mad
* entry[=].resource = 395b861d-8925-4463-b00f-3c74e637518c
* entry[+].fullUrl = "Encounter/9c0b8699-5a96-4af7-8142-a9643aa01510" // Follow-up encounter for conditions
* entry[=].resource = 9c0b8699-5a96-4af7-8142-a9643aa01510
* entry[+].fullUrl = "CarePlan/60fcf132-de0a-4aba-bf3e-7ed52a68c9f2" // Related Care Plan
* entry[=].resource = 60fcf132-de0a-4aba-bf3e-7ed52a68c9f2
* entry[+].fullUrl = "CareTeam/7829d961-1b91-4c98-893d-d4c20e8b6093" // Service performer information
* entry[=].resource = 7829d961-1b91-4c98-893d-d4c20e8b6093
* entry[+].fullUrl = "Organization/db5d4fb0-0b9d-4e92-a415-05c42b5362b6" // Produktion og Beskyttet beskæftigelsestilbud § 103
* entry[=].resource = db5d4fb0-0b9d-4e92-a415-05c42b5362b6
* entry[+].fullUrl = "CarePlan/d727dddc-840b-4f5f-a686-626a91058be1" // Beskyttet beskæftigelsesydelse, § 103
* entry[=].resource = d727dddc-840b-4f5f-a686-626a91058be1
* entry[+].fullUrl = "Observation/c52f2c0d-eed3-4778-a0f3-aa8f65b188b8" // Evaluation - FFB vurdering af borgers situation
* entry[=].resource = c52f2c0d-eed3-4778-a0f3-aa8f65b188b8
* entry[+].fullUrl = "Observation/156149b4-c918-4818-a97a-d81b77d86fba" // Evaluation - Støttebehovsvurdering
* entry[=].resource = 156149b4-c918-4818-a97a-d81b77d86fba
* entry[+].fullUrl = "Observation/9977d0a0-bad7-4607-9ea1-39837246d497" // Evaluation - Borgerens ressourcer i forhold til indsatsen
* entry[=].resource = 9977d0a0-bad7-4607-9ea1-39837246d497
* entry[+].fullUrl = "Observation/a1febca1-8cb3-4a00-a7f1-deefc9e1391e" // Evaluation - Borgerens perspektiv på indsatsen
* entry[=].resource = a1febca1-8cb3-4a00-a7f1-deefc9e1391e
* entry[+].fullUrl = "CarePlan/998af038-b3c1-48ee-abc9-b56ace276335" // Intervention - Længerevarende ophold
* entry[=].resource = 998af038-b3c1-48ee-abc9-b56ace276335
* entry[+].fullUrl = "CarePlan/4daf3f6a-810a-478d-9bf9-f7fb85c9335a" // Intervention - Støtte til daglige opgaver i hjemmet
* entry[=].resource = 4daf3f6a-810a-478d-9bf9-f7fb85c9335a
* entry[+].fullUrl = "CarePlan/1867a76f-4ea9-4409-8fb8-9582a43c9dcb" // Intervention - Støtte til sociale relationer
* entry[=].resource = 1867a76f-4ea9-4409-8fb8-9582a43c9dcb
* entry[+].fullUrl = "CarePlan/47643042-ce30-4110-bd17-2a7cbb4a521b" // Intervention - Støtte til psykisk trivsel
* entry[=].resource = 47643042-ce30-4110-bd17-2a7cbb4a521b
* entry[+].fullUrl = "CarePlan/2ad2ab17-31e4-4c03-b6c0-dcda037164ae" // Intervention - Kørsel efter §105 
* entry[=].resource = 2ad2ab17-31e4-4c03-b6c0-dcda037164ae
* entry[+].fullUrl = "CareTeam/66d6b6a4-c39d-493c-945d-73dffabf2549" // Care team
* entry[=].resource = 66d6b6a4-c39d-493c-945d-73dffabf2549
* entry[+].fullUrl = "Organization/b524b7d2-3ee2-425e-a640-c5429596e897" // Socialrådgivergruppe B
* entry[=].resource = b524b7d2-3ee2-425e-a640-c5429596e897
* entry[+].fullUrl = "Organization/444d7d11-0456-4144-807b-c10d28b930c6" // Ungeenheden
* entry[=].resource = 444d7d11-0456-4144-807b-c10d28b930c6
* entry[+].fullUrl = "Organization/e06c1cf9-5923-4ca6-afbe-b56cf41e38a8" // Afdeling Q
* entry[=].resource = e06c1cf9-5923-4ca6-afbe-b56cf41e38a8
* entry[+].fullUrl = "RelatedPerson/ea132916-522d-467f-837e-5acd991e308a" // Mother
* entry[=].resource = ea132916-522d-467f-837e-5acd991e308a
* entry[+].fullUrl = "RelatedPerson/77332be5-4721-4c2e-b72a-ed6593a3016a" // Guardian
* entry[=].resource = 77332be5-4721-4c2e-b72a-ed6593a3016a
* entry[+].fullUrl = "Consent/2ceccbaf-8cb2-4ef1-bec3-42d14fa062d8"
* entry[=].resource = 2ceccbaf-8cb2-4ef1-bec3-42d14fa062d8
* entry[+].fullUrl = "Patient/ef88b48e-e664-41e6-b5b1-2ed4f5c86009"
* entry[=].resource = ef88b48e-e664-41e6-b5b1-2ed4f5c86009
* entry[+].fullUrl = "Account/9a513f98-f63e-4601-8d85-1086452ef1ae" // Account
* entry[=].resource = 9a513f98-f63e-4601-8d85-1086452ef1ae
* entry[+].fullUrl = "Organization/a7c86933-e198-4692-81f4-76f2bf44c361" // Account Owner
* entry[=].resource = a7c86933-e198-4692-81f4-76f2bf44c361
* entry[+].fullUrl = "DocumentReference/26003edb-c0d7-4033-8ac2-62210221b914" // Attachment description
* entry[=].resource = 26003edb-c0d7-4033-8ac2-62210221b914
* entry[+].fullUrl = "DocumentReference/fc6b255b-3336-4b25-85a0-7f31cdf68482" // Attachment description
* entry[=].resource = fc6b255b-3336-4b25-85a0-7f31cdf68482

Instance: da3fe85ebc6147109364d70be0124b18
InstanceOf: KLMessagingFFBOrderMessageHeader
Title: "Message Header"
Usage: #inline
* focus[+] = Reference(55602964-b665-45bc-ad84-620c42e1761b) // Care plan
* focus[+] = Reference(7e54d9df-b563-47f7-a91a-e35c94797090) // Information Gathering
* focus[+] = Reference(9a513f98-f63e-4601-8d85-1086452ef1ae) // Account
* focus[+] = Reference(26003edb-c0d7-4033-8ac2-62210221b914) // Attachment description
* focus[+] = Reference(fc6b255b-3336-4b25-85a0-7f31cdf68482) // Attachment description
* source.endpoint = "http://xkobing.dk"
* destination.receiver = Reference(6d109aab-3803-418b-8e5c-b50ea909623f)
* destination.endpoint = "http://lillested.dk"
* sender = Reference(a9e0e18b-dbcb-40a1-9f5e-882365ab52d2)

// Sender organization
Instance: a9e0e18b-dbcb-40a1-9f5e-882365ab52d2
InstanceOf: KLMessagingFFBOrganization
Title: "X-Købing kommune"
Usage: #inline
* name = "X-Købing kommune"
// TODO identifiers


// Destination organization
Instance: 6d109aab-3803-418b-8e5c-b50ea909623f
InstanceOf: KLMessagingFFBOrganization
Title: "Bostedet Lillested"
Usage: #inline
* name = "Bostedet Lillested"
// TODO Identifiers

// =========================================================================================
// ============================== CarePlan related resources ===============================
// =========================================================================================

// Care plan
Instance: 55602964-b665-45bc-ad84-620c42e1761b
InstanceOf: KLMessagingFFBOrderCarePlan
Title: "Care Plan"
Usage: #inline
* status = #active
* intent = #order
* category = $KLCommon#e459386d-1474-4c31-89c5-c8bc7a25e3d4
* goal[+] = Reference(76e873e5-7a07-45b7-8247-ab867f3c98a3) // InterventionPurpose
* goal[+] = Reference(b6f135d6-ac63-401a-bd0c-95bb10c5dae1) // InterventionGoal
* goal[+] = Reference(ad8bac88-eaad-4365-a25b-954df2fbc9ea) // CitizenObjective
* period.start = 2021-03-22
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* extension[subjectActingMunicipality].valueCoding = $municipalityCodes#0157
* created = 2021-03-15T13:05:37+01:00
* author = Reference(b524b7d2-3ee2-425e-a640-c5429596e897)
* careTeam = Reference(66d6b6a4-c39d-493c-945d-73dffabf2549)
* addresses[+] = Reference(0ed08826-25f6-49be-9878-ac2e31bd5d50) // Target groups
* addresses[=].extension[ConditionRank].valuePositiveInt = 1
* addresses[+] = Reference(ec882075-693e-4626-9d29-a3f2292352f3)
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(7528df43-6d4d-4cc1-9c78-ff10e1b1fe5c)
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(e875c9a1-d40b-4c09-9897-ab2086c5f9bf)
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(a4ca3cb0-015d-43e7-81e5-19fde059667b)
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* activity.detail.status = #not-started
* activity.detail.description = "Første opfølgning på mål er efter 3 mdr."
// activity.detail.code.coding = $KLCommon#9f03dfbb-7a97-45a5-94db-d4c3501714a9
* activity.detail.performer = Reference(b524b7d2-3ee2-425e-a640-c5429596e897)
* activity.detail.scheduledTiming.repeat.frequency = 1
* activity.detail.scheduledTiming.repeat.period = 1
* activity.detail.scheduledTiming.repeat.periodUnit = #a
* activity.detail.scheduledTiming.repeat.boundsPeriod.start = 2021-06-15

// Citizen Objective
Instance: ad8bac88-eaad-4365-a25b-954df2fbc9ea
InstanceOf: KLMessagingFFBCitizenObjective
Title: "CitizenObjective"
Usage: #inline
* lifecycleStatus = $goalStatus#accepted
* description.text = "Christian drømmer om at bo et sted, hvor han har det godt med pædagogerne og med de andre, der bor der, så han ikke skal flytte igen. Han vil også gerne bruge mere tid på sine bilkort og sammen med sin mor og blive bedre til at lave mad og gøre rent."
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)

// Intervention Purpose
Instance: 76e873e5-7a07-45b7-8247-ab867f3c98a3
InstanceOf: http://kl.dk/fhir/common/caresocial/StructureDefinition/KLCommonCareSocialPurpose
Title: "InterventionPurpose"
Usage: #inline
* lifecycleStatus = $goalStatus#accepted
* description.text = "At Christian trives i sit hjem og oplever at blive forstået."
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)

// Intervention Goal
Instance: b6f135d6-ac63-401a-bd0c-95bb10c5dae1
InstanceOf: KLMessagingFFBInterventionGoal
Title: "InterventionGoal"
Usage: #inline
* lifecycleStatus = $goalStatus#accepted
* description.text = "Jeg laver mad sammen med de andre, der bor på samme bosted"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* target[changeValueSlice].detailCodeableConcept.coding = $FFB#d41c8072-52f8-42b5-9375-ddbea454d27f
* target[severitySlice].detailCodeableConcept.coding = $FFB#5bdde847-2837-416b-ab63-bbff8b7aa531
* addresses[+] = Reference(a2af7c52-e74e-4ca9-8185-09b921aec3b4) // Indgå i samspil og kontakt
* addresses[=].extension[ConditionRank].valuePositiveInt = 1
* addresses[+] = Reference(71bb3445-cd03-49ad-81e7-845e5567d490) // Deltage i sociale fællesskaber og fritidsaktiviteter
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(33a685e3-7b73-4227-be96-927c5773204b) // Samtale
* addresses[=].extension[ConditionRank].valuePositiveInt = 2
* addresses[+] = Reference(395b861d-8925-4463-b00f-3c74e637518c) // Lave mad
* addresses[=].extension[ConditionRank].valuePositiveInt = 2


// Care Team
Instance: 66d6b6a4-c39d-493c-945d-73dffabf2549
InstanceOf: KLMessagingFFBServicePerformer
Title: "Service performer information"
Usage: #inline
* category = $FFB#498fe92c-d7f7-41cd-9404-5b38fe113be0 "Almindeligt længerevarende botilbud til voksne"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* participant[+].member = Reference(b524b7d2-3ee2-425e-a640-c5429596e897) // Socialrådgiver gruppe B
* participant[=].role = $participantRole#koordinerende-myndighed "Ansvarlig for koordinering af myndighedssamarbejde"
* participant[+].member = Reference(444d7d11-0456-4144-807b-c10d28b930c6) // Ungeenheden
* participant[=].role = $participantRole#samarbejdende-myndighed "Samarbejdende myndighed"
* participant[+].member = Reference(e06c1cf9-5923-4ca6-afbe-b56cf41e38a8) // Afdeling Q
* participant[=].role = $participantRole#koordinerende-udfører "Ansvarlig for koordinering af udførersamarbejde"
* participant[+].member = Reference(ea132916-522d-467f-837e-5acd991e308a) // Mother
* participant[=].extension[description].valueString = "Det er aftalt med Christians mor Louise, at hun kontaktes og deltager, når der skal foregår aktiviteter i Christians liv, som er nye eller afviger fra hans dagligdag fx læge- og tandlægebesøg."
* participant[+].member = Reference(77332be5-4721-4c2e-b72a-ed6593a3016a) // Guardian


// Target groups
Instance: 0ed08826-25f6-49be-9878-ac2e31bd5d50
InstanceOf: KLMessagingFFBTargetGroup
Title: "Autismespektrum"
Usage: #inline
* code.coding = $FFB#9b3fd322-a75a-4ed8-9b74-425fa1e01c95 "Autismespektrum"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)

Instance: ec882075-693e-4626-9d29-a3f2292352f3
InstanceOf: KLMessagingFFBTargetGroup
Title: "Anden intellektuel/kognitiv forstyrrelse"
Usage: #inline
* code.coding = $FFB#17ce646b-4469-4a73-82a9-9628436f6c70 "Anden intellektuel/kognitiv forstyrrelse"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)

Instance: 7528df43-6d4d-4cc1-9c78-ff10e1b1fe5c
InstanceOf: KLMessagingFFBTargetGroup
Title: "Omsorgssvigt"
Usage: #inline
* code.coding = $FFB#f1f4d709-19d2-48cc-8942-231bf912323d "Omsorgssvigt"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)

Instance: e875c9a1-d40b-4c09-9897-ab2086c5f9bf
InstanceOf: KLMessagingFFBTargetGroup
Title: "Social isolation"
Usage: #inline
* code.coding = $FFB#16075f99-3694-4878-a48d-b2f4b515cb76 "Social isolation"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)

Instance: a4ca3cb0-015d-43e7-81e5-19fde059667b
InstanceOf: KLMessagingFFBTargetGroup
Title: "Udadreagerende adfærd"
Usage: #inline
* code.coding = $FFB#e1b59a4a-9cc2-4113-a5f1-84af588b02a2 "Udadreagerende adfærd"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)

// Interventions
Instance: 998af038-b3c1-48ee-abc9-b56ace276335
InstanceOf: KLMessagingFFBIntervention
Title: "Længerevarende ophold, §108 (Ophold)"
Usage: #inline
* basedOn = Reference(55602964-b665-45bc-ad84-620c42e1761b) // Care plan
* status = #active
* intent = #order
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* created = 2021-03-15T13:05:37+01:00
* activity.detail.code.coding = $FFB#5af56051-8413-4115-aaa2-83a0767e1137 "Længerevarende ophold"
* activity.detail.status = #not-started

Instance: 4daf3f6a-810a-478d-9bf9-f7fb85c9335a
InstanceOf: KLMessagingFFBIntervention
Title: "Støtte til daglige opgaver i hjemmet (Socialpædagogisk støtte, § 85)"
Usage: #inline
* basedOn = Reference(55602964-b665-45bc-ad84-620c42e1761b) // Care plan
* status = #active
* intent = #order
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* created = 2021-03-15T13:05:37+01:00
* activity.detail.code.coding = $FFB#638f44df-6bf2-47f8-9935-b8fdc83e5bf5 "Støtte til daglige opgaver i hjemmet"
* activity.detail.status = #not-started

Instance: 1867a76f-4ea9-4409-8fb8-9582a43c9dcb
InstanceOf: KLMessagingFFBIntervention
Title: "Støtte til sociale relationer (Socialpædagogisk støtte, § 85)"
Usage: #inline
* basedOn = Reference(55602964-b665-45bc-ad84-620c42e1761b) // Care plan
* status = #active
* intent = #order
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* created = 2021-03-15T13:05:37+01:00
* period.start = 2021-04-01
* period.end = 2021-10-01
* activity.detail.code.coding = $FFB#05cd5e81-1a3a-4bdd-901b-7ec96c12d990 "Støtte til sociale relationer"
* activity.detail.status = #not-started

Instance: 47643042-ce30-4110-bd17-2a7cbb4a521b
InstanceOf: KLMessagingFFBIntervention
Title: "Støtte til psykisk trivsel (Socialpædagogisk støtte, § 85)"
Usage: #inline
* basedOn = Reference(55602964-b665-45bc-ad84-620c42e1761b) // Care plan
* status = #active
* intent = #order
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* created = 2021-03-15T13:05:37+01:00
* period.start = 2021-04-01
* activity.detail.code.coding = $FFB#ad7755d2-11bf-468d-958b-2f0c8d9c3742 "Støtte til psykisk trivsel"
* activity.detail.status = #not-started

Instance: 2ad2ab17-31e4-4c03-b6c0-dcda037164ae
InstanceOf: KLMessagingFFBIntervention
Title: "Kørsel efter §105"
Usage: #inline
* basedOn = Reference(55602964-b665-45bc-ad84-620c42e1761b) // Care plan
* status = #active
* intent = #order
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* created = 2021-03-15T13:05:37+01:00
* period.start = 2021-04-01
* activity.detail.code.coding.system = "http://ffb/messaging/kl.dk/1.0/CodeSystem/Text"
* activity.detail.code.text = "Kørsel efter §105"
* activity.detail.status = #not-started

// Supporting Info
Instance: 60fcf132-de0a-4aba-bf3e-7ed52a68c9f2
InstanceOf: KLMessagingFFBRelatedCarePlan
Title: "Related Care Plan"
Usage: #inline
* status = #active
* intent = #order
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* careTeam = Reference(7829d961-1b91-4c98-893d-d4c20e8b6093)

Instance: 7829d961-1b91-4c98-893d-d4c20e8b6093
InstanceOf: CareTeam
Title: "Service performer information"
Usage: #inline
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* participant.member = Reference(db5d4fb0-0b9d-4e92-a415-05c42b5362b6)

Instance: db5d4fb0-0b9d-4e92-a415-05c42b5362b6
InstanceOf: Organization
Title: "Produktion og Beskyttet beskæftigelsestilbud § 103"
Usage: #inline
* name = "Produktion og Beskyttet beskæftigelsestilbud § 103"
* address.line = "Bakkevej 132"
* address.postalCode = "8888"
* address.city = "XKøbing"

Instance: d727dddc-840b-4f5f-a686-626a91058be1
InstanceOf: CarePlan
Title: "Christian har beskyttet beskæftigelsesydelse, fire timer to gange om ugen."
Usage: #inline
* basedOn = Reference(60fcf132-de0a-4aba-bf3e-7ed52a68c9f2) // Related care plan
* status = #active
* intent = #order
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* activity.detail.code.coding = $FFB#fb3d8722-90e0-4a80-ba65-490617ffeb0f "Produktion og værksted"
* activity.detail.status = #in-progress

// =========================================================================================
// ======================== InformationGathering related resources =========================
// =========================================================================================

// Information gathering
Instance: 7e54d9df-b563-47f7-a91a-e35c94797090
InstanceOf: KLMessagingFFBInformationGathering 
Title: "InformationGathering"
Usage: #inline
* status = #completed
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* investigation[+].item = Reference(c52f2c0d-eed3-4778-a0f3-aa8f65b188b8)
* investigation[=].code.coding = $KLCommon#053a301d-1bb8-4cc4-b781-87825ecf0ef8 "FFB vurdering af borgers situation"
* investigation[+].item = Reference(156149b4-c918-4818-a97a-d81b77d86fba)
* investigation[=].code.coding = $KLCommon#effe55c7-572c-4a99-8fb4-2a9dda2f6572 "FFB støttebehovsvurdering"
* investigation[+].item = Reference(9977d0a0-bad7-4607-9ea1-39837246d497)
* investigation[=].code.coding = $KLCommon#f52887de-023f-4193-b6b0-4b0a37b1cffc "VUM Borgerens ressourcer i forhold til indsatsen"
* investigation[+].item = Reference(a1febca1-8cb3-4a00-a7f1-deefc9e1391e)
* investigation[=].code.coding = $KLCommon#3f7a8ca0-afca-4b0d-8773-a99b5f2f8aaf "VUM Borgerens perspektiv på indsatsen"
// * investigation[+].item = Reference(bead3181-7188-4a06-8a57-6da8c5d73937)
// * investigation[=].code.coding = $FFB#7445fb2b-0009-43d9-b49b-1b9782f2fcd9 "Omgivelsesfaktorer"
* finding[+].itemReference = Reference(28f1aa94-a993-4b74-b912-18825daa3367)
* finding[+].itemReference = Reference(a2af7c52-e74e-4ca9-8185-09b921aec3b4)
* finding[+].itemReference = Reference(71bb3445-cd03-49ad-81e7-845e5567d490)
* finding[+].itemReference = Reference(33a685e3-7b73-4227-be96-927c5773204b)
* finding[+].itemReference = Reference(395b861d-8925-4463-b00f-3c74e637518c)

// Evaluation
Instance: c52f2c0d-eed3-4778-a0f3-aa8f65b188b8
InstanceOf: KLMessagingFFBEvaluation
Title: "Vurdering af borgerens situation"
Usage: #inline
* status = #final
* code.coding[klEvaluationCode] = $KLCommon#053a301d-1bb8-4cc4-b781-87825ecf0ef8 "FFB vurdering af borgers situation"
* effectiveDateTime = 2021-03-15T13:05:37+01:00
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* valueCodeableConcept.text = "Funktioner og forhold
Christian er som følge af kromosomafvigelsen født med hul i ganen, Dette er han opereret for, men kan stadig opleve problemer med at få maden ned i svælget. 
Han har tidligere haft en del talevanskeligheder, men kan nu sagtens kommunikere med ord og har et relativt stort ordforråd. 
Hans immunsystem er svagt og han er let modtagelig for især øreinfektioner. 
Christian er svært udfordret på en række mentale funktioner som følge af sine diagnoser. Christians udfordringer viser sig især ved, at han har svært ved selv at skabe struktur og genkendelighed, hvilket betyder at han bliver usikker og kan reagere med vrede og afmagt i situationer hvor han ikke støttes heri. 
Christian har gennem sin opvækst været tilknyttet flere forskellige specialbørnehaver og specialskoler og har boet på flere botilbud siden sit 18. år.
Omgivelser
Christians forældre blev skilt da Christian var 7 år og han har ingen kontakt til sin far og har stadig svært ved at forstå, hvorfor faren ikke vil tale med ham. Han har en god relation til sin mor, som har været hans primære omsorgsperson op til det 18. år.
Aktivitet og Deltagelse
Christian har svært ved at opbygge en relation til andre, da han har svært ved at forstå de ’’sociale spilleregler’’ og fordi han ikke kan sætte sig i den andens sted, en svært nedsat mentaliseringsevne.  Han har vanskelig ved at opretholde en relation og føler sig ikke hørt og forstået. Han er meget glad for biler og arbejder på et værksted, hvor han hjælper mekanikeren med forfaldent arbejde. Hans mor hjælper ham med økonomien, uden at der er værgeforhold og Christian er god til at styre sine penge, som han siger. Christian bruger piktogrammer til at styre sin hverdag, hvilket gør ham i stand til at klare de fleste ting selv, hvis han har støtte til at planlægge ugen. Christian kan ikke selv lave mad og gøre rent, men kan med guidning hjælpe til og giver udtryk for, at han gerne vil blive bedre."

Instance: 156149b4-c918-4818-a97a-d81b77d86fba
InstanceOf: KLMessagingFFBEvaluation
Title: "Støttebehov"
Usage: #inline
* status = #final
* code.coding[klEvaluationCode] = $KLCommon#effe55c7-572c-4a99-8fb4-2a9dda2f6572 "FFB støttebehovsvurdering"
* effectiveDateTime = 2021-03-15T13:05:37+01:00
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* valueCodeableConcept.coding = $FFB#401a397b-b3aa-4ca3-8b23-bd8f99dd3f76 "Moderat støttebehov"
* valueCodeableConcept.text = "Christian vurderes at have behov for støtte til at have en indholdsrig hverdag, hvor han dagligt kan blive støttet i at få en god rytme og rutine på de daglige gøremål og hvor han støttes i at opbygge og fastholde relationer til andre. Da hans nedsættelsen af hans mentale funktioner vurderes at være af væsentligt omfang og der er risiko for, at han som følge af især sin kromosomafvigelse vil udvikle følgesygdomme, der kræver yderligere støtte, er det min vurdering at Christian har behov for en indsats, der kan rumme både pædagogisk støtte og pleje på sigt.  Christian vurderes derfor fortsat i målgruppen til et botilbud uden døgndækning."

Instance: 9977d0a0-bad7-4607-9ea1-39837246d497
InstanceOf: KLMessagingFFBEvaluation
Title: "Borgerens ressourcer"
Usage: #inline
* status = #final
* code.coding[klEvaluationCode] = $KLCommon#f52887de-023f-4193-b6b0-4b0a37b1cffc "VUM Borgerens ressourcer i forhold til indsatsen"
* effectiveDateTime = 2021-03-15T13:05:37+01:00
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* valueCodeableConcept.text = "Christian er god til at bruge sine piktogrammer som understøttende for en god rutine. Han vil gerne blive bedre til nogle af de ting, der er særligt udfordrende for ham bl.a. lave mad og gøre rent. Han har gode relationer på værkstedet, hvor han arbejder, hvor han primært taler med mekanikeren."

Instance: a1febca1-8cb3-4a00-a7f1-deefc9e1391e
InstanceOf: KLMessagingFFBEvaluation
Title: "Borgerens perspektiv"
Usage: #inline
* status = #final
* code.coding[klEvaluationCode] = $KLCommon#3f7a8ca0-afca-4b0d-8773-a99b5f2f8aaf "VUM Borgerens perspektiv på indsatsen"
* effectiveDateTime = 2021-03-15T13:05:37+01:00
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* valueCodeableConcept.text = "Christian vil gerne flytte til et nyt sted med andre på sin alder. Han er dog lidt opgivende, idet han ikke synes det rigtige sted er fundet endnu. Det skal helst være et sted, hvor han sammen med andre kan lave nogle ting for eksempel lave mad eller på biludstilling."


// Diagnosis
Instance: 28f1aa94-a993-4b74-b912-18825daa3367 
InstanceOf: KLMessagingFFBDiagnosis
Title: "Diagnosis"
Usage: #inline
* clinicalStatus = $conditionClinical#active
* code.text = "Christian er i 2008 diagnosticeret med autisme, middelsvær metal retardering og kromosomafvigelse 22q11 Deletion jf. lægeattest fra speciallæge Lars Larsen, august 2008. (journalnummer 2008 – 3687)"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)

// Investigations from assessment with simple structure
// Instance: bead3181-7188-4a06-8a57-6da8c5d73937
// InstanceOf: KLMessagingFFBMatterOfInterest
// Title: "Omgivelsesfaktorer"
// Usage: #inline
// * status = #final
// * code.coding = $FFB#7445fb2b-0009-43d9-b49b-1b9782f2fcd9 "Omgivelsesfaktorer"
// * subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
// * effectiveDateTime = 2021-03-03
// * valueCodeableConcept.text = "Christians forældre blev skilt da Christian var 7 år og han har ingen kontakt til sin far og har stadig svært ved at forstå, hvorfor faren ikke vil tale med ham. Han har en god relation til sin mor, som har været hans primære omsorgsperson op til det 18. år."

// Conditions related to intervention goal
Instance: a2af7c52-e74e-4ca9-8185-09b921aec3b4
InstanceOf: KLMessagingFFBCondition
Title: "Indgå i samspil og kontakt"
Usage: #inline
* extension[followUpEncounter].valueReference = Reference(9c0b8699-5a96-4af7-8142-a9643aa01510)
* clinicalStatus = $conditionClinical#active
* severity = $FFB#cae545f5-2813-4d79-98fc-0a7d770af3cd "Svært nedsat funktionsevne"
* code.coding = $FFB#3f9da5ac-9686-4eeb-b517-b46e17fcb1d7 "Indgå i samspil og kontakt"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* recordedDate = 2021-03-03

Instance: 71bb3445-cd03-49ad-81e7-845e5567d490
InstanceOf: KLMessagingFFBCondition
Title: "Deltage i sociale fællesskaber og fritidsaktiviteter"
Usage: #inline
* extension[followUpEncounter].valueReference = Reference(9c0b8699-5a96-4af7-8142-a9643aa01510)
* clinicalStatus = $conditionClinical#active
* code.coding = $FFB#dcc6bb77-45af-4625-9c4d-7d7878307220 "Deltage i sociale fællesskaber og fritidsaktiviteter"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* recordedDate = 2021-03-03

Instance: 33a685e3-7b73-4227-be96-927c5773204b
InstanceOf: KLMessagingFFBCondition
Title: "Samtale"
Usage: #inline
* extension[followUpEncounter].valueReference = Reference(9c0b8699-5a96-4af7-8142-a9643aa01510)
* clinicalStatus = $conditionClinical#active
* code.coding = $FFB#986898d0-e2e5-4afa-9cb3-ee7aecaa0143 "Samtale"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* recordedDate = 2021-03-03

Instance: 395b861d-8925-4463-b00f-3c74e637518c
InstanceOf: KLMessagingFFBCondition
Title: "Lave mad"
Usage: #inline
* extension[followUpEncounter].valueReference = Reference(9c0b8699-5a96-4af7-8142-a9643aa01510)
* clinicalStatus = $conditionClinical#active
* code.coding = $FFB#b947f321-7cdb-4b33-9653-f3ff800572b0 "Lave mad"
* subject = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* recordedDate = 2021-03-03

// Follow-up for conditions
Instance: 9c0b8699-5a96-4af7-8142-a9643aa01510
InstanceOf: KLMessagingFFBFollowUp
Title: "Follow-up"
Usage: #inline
* status = #planned
* class = $v3-ActCode#HH
* period.start = 2021-06-15
* serviceProvider = Reference(b524b7d2-3ee2-425e-a640-c5429596e897)


// Participating organizations
Instance: b524b7d2-3ee2-425e-a640-c5429596e897
InstanceOf: KLMessagingFFBParticipatingOrganization
Title: "Socialrådgivergruppe B"
Usage: #inline
* name = "Socialrådgivergruppe B"
* contact.name.prefix = "Socialrådgiver"
* contact.name.family = "Karlsen"
* contact.name.given = "Karen"
* contact.telecom[phone].system = #phone
* contact.telecom[phone].value = "99775533"
* contact.telecom[email].system = #email
* contact.telecom[email].value = "kaka@x-købing.dk"

Instance: 444d7d11-0456-4144-807b-c10d28b930c6
InstanceOf: KLMessagingFFBParticipatingOrganization
Title: "Ungeenheden"
Usage: #inline
* name = "Ungeenheden"
* contact.name.prefix = "Studievejleder"
* contact.name.family = "Sørensen"
* contact.name.given = "Sussie"
* contact.telecom[phone].system = #phone
* contact.telecom[phone].value = "55443322"
* contact.telecom[email].system = #email
* contact.telecom[email].value = "kjkn@x-købing.dk"
* contact.name.prefix = "Jobkonsulent"
* contact.name.family = "Jensen"
* contact.name.given = "John"
* contact.telecom[phone].system = #phone
* contact.telecom[phone].value = "99887766"
* contact.telecom[email].system = #email
* contact.telecom[email].value = "joje@x-købing.dk"

Instance: e06c1cf9-5923-4ca6-afbe-b56cf41e38a8
InstanceOf: KLMessagingFFBParticipatingOrganization
Title: "Afdeling Q"
Usage: #inline
* name = "Afdeling Q"
* contact.name.prefix = "Socialpædagog"
* contact.name.family = "Sandemose"
* contact.name.given = "Søren"
* contact.telecom[phone].system = #phone
* contact.telecom[phone].value = "22446688"
* contact.telecom[email].system = #email
* contact.telecom[email].value = "soesa@lillested.dk"


// Citizen
Instance: ef88b48e-e664-41e6-b5b1-2ed4f5c86009
InstanceOf: KLMessagingFFBCitizen
Title: "Christian Christiansen"
Usage: #inline
* identifier[cpr].use = #official
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "1111111111"
* name.use = #official
* name.family = "Christiansen"
* name.given = "Christian"
* address.line = "Bostedet Storested, Harevænget 11"
* address.postalCode = "9999"
* address.city = "Y-borg"
* telecom[phone].system = #phone
* telecom[phone].value = "22334455"
* telecom[email].system = #email
* telecom[email].value = "chch@mail.com"
* contact.relationship = $v2-0131#N 
* contact.relationship.text = "Mor"
* contact.name.family = "Christiansen"
* contact.name.given = "Louise"
* contact.telecom[phone].system = #phone
* contact.telecom[phone].value = "55667788"
* contact.telecom[email].system = #email
* contact.telecom[email].value = "loch@mail.com"

// Consent
Instance: 2ceccbaf-8cb2-4ef1-bec3-42d14fa062d8
InstanceOf: KLMessagingFFBConsent
Title: "Consent to disclose information to mother"
Usage: #inline
* status = #active
* scope = $consentScope#patient-privacy
* category = $v3-ActCode#IDSCL
* category.text = "Christian har givet fuldmagt til, at hans mor, må have fuld indsigt i hans sag og få tilsendt alle oplysninger."
* patient = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* dateTime = 2021-01-07T08:14:21+01:00
* performer = Reference(ea132916-522d-467f-837e-5acd991e308a)
* policyRule = $consentpolicycodes#persondataloven

// Mother
Instance: ea132916-522d-467f-837e-5acd991e308a
InstanceOf: KLMessagingFFBRelatedPerson
Title: "Mother"
Usage: #inline
* patient = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* relationship[+] = $v3-RoleCode#MTH
* relationship[+] = $relationshipType#advocate
* name.family = "Christiansen"
* name.given = "Louise"
* telecom[phone].system = #phone
* telecom[phone].value = "55667788"
* telecom[email].system = #email
* telecom[email].value = "loch@mail.com"

// Guardian
Instance: 77332be5-4721-4c2e-b72a-ed6593a3016a
InstanceOf: KLMessagingFFBGuardian
Title: "Børge Børgesen"
Usage: #inline
* patient = Reference(ef88b48e-e664-41e6-b5b1-2ed4f5c86009)
* relationship = $v3-RoleCode#GUARD
* extension[guardianshipForm].valueCoding = $guardianshipForm#5
* name.family = "Børgesen"
* name.given = "Børge"
* address.line = "Østervej 9"
* address.postalCode = "9999"
* address.city = "Y-borg"
* telecom[phone].system = #phone
* telecom[phone].value = "99112233"
* telecom[email].system = #email
* telecom[email].value = "boeboe@mail.dk"

// =========================================================================================
// ============================== Account related resources ================================
// =========================================================================================

Instance: 9a513f98-f63e-4601-8d85-1086452ef1ae
InstanceOf: KLMessagingFFBAccount
Title: "Account"
Usage: #inline
* identifier.value = "4444-88888888"
* owner = Reference(a7c86933-e198-4692-81f4-76f2bf44c361)

Instance: a7c86933-e198-4692-81f4-76f2bf44c361
InstanceOf: KLMessagingFFBAccountOwner
Title: "AccountOwner"
Usage: #inline
* name = "Økonomiafdelingen X-købing Kommune"
* identifier.system = "urn:oid:1.3.88"
* identifier.value = "1313131313131"
* contact.name.prefix = "Økonomimedarbejder"
* contact.name.family = "Ørn"
* contact.name.given = "Øjvind"
* contact.telecom[phone].system = #phone
* contact.telecom[phone].value = "11335577"
* contact.telecom[email].system = #email
* contact.telecom[email].value = "oeoe@x-købing.dk"

// =========================================================================================
// ============================= Document Reference resources ==============================
// =========================================================================================

Instance: 26003edb-c0d7-4033-8ac2-62210221b914
InstanceOf: KLMessagingFFBDocumentReference
Title: "Attachment"
Usage: #inline
* description = "Journal fra speciallæge August Krog, august 2012"
* content.attachment.title = "Journal for Christian Christensen"
* content.attachment.contentType = #application/pdf

Instance: fc6b255b-3336-4b25-85a0-7f31cdf68482
InstanceOf: KLMessagingFFBDocumentReference
Title: "Attachment"
Usage: #inline
* description = "Kontinuation fra Børne- og ungdomspsykiatrisk hus i X-købing Kommune, 2011"
* content.attachment.title = "Kontinuation for Christian Christensen"
* content.attachment.contentType = #application/pdf


---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBParticipatingOrganization.fsh

Profile: KLMessagingFFBParticipatingOrganization
Parent: KLCommonOrganization
Id: kl-messaging-ffb-participatingOrganization
Title: "ParticipatingOrganization"
Description: "Organization involved in the care plan for the citizen"
* name 1.. MS
* contact 1.. MS
* contact.name 1.. MS
* contact.name.prefix 1.. MS
* contact.name.family 1.. MS
* contact.name.given 1.. MS
* contact.telecom.system 1.. MS
* contact.telecom.value 1.. MS
* contact.telecom ^slicing.discriminator[0].type = #value
* contact.telecom ^slicing.discriminator[0].path = "system"
* contact.telecom ^slicing.rules = #open
* contact.telecom contains phone 1.. MS and email 0.. MS
* contact.telecom[phone].system = #phone
* contact.telecom[email].system = #email


---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingFFBRelatedCarePlan.fsh

Profile: KLMessagingFFBRelatedCarePlan
Parent: CarePlan
Id: kl-messaging-ffb-relatedCarePlan
Title: "RelatedCarePlan"
Description: "FFB care plan related to the order"
* status MS
* intent MS
* subject 1.. MS
* subject only Reference(KLMessagingFFBCitizen)
* careTeam 1.. MS
// * careTeam only Reference(KLMessagingFFBServicePerformer)


---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/fsh/KLMessagingTerminology.fsh

CodeSystem: KLMessagingMessageEventSystem
Id: kl-messaging-ffb-messageEventSystem
Title: "MessageEventSystem"
Description: "Event codes for FFB messages"
* #ffb-order "order"

ValueSet: KLMessagingFFBRelationshipTypeValues
Id: kl-messaging-ffb-relationshipTypeValues
Title: "RelationshipTypes"
Description: "Relationship type roles to use in FFB messaging"
* include $v3-RoleCode#GUARD
* include $v3-RoleCode#POWATT
* include codes from system KLMessagingFFBRelationshipTypeCodes
* include codes from system http://terminology.hl7.org/CodeSystem/v2-0131

CodeSystem: KLMessagingFFBRelationshipTypeCodes
Id: kl-messaging-ffb-relationshipTypeCodes
Title: "RelationshipTypeSystem"
Description: "Relationship type code system for a related person in FFB messaging"
* #advocate "Bisidder"

ValueSet: KLMessagingFFBGuardianshipFormValues
Id: kl-messaging-ffb-guardianshipFormValues
Title: "GuardianshipForms"
Description: "Guardianship form value set for citizens in FFB messaging"
* include codes from system KLMessagingFFBGuardianshipFormCodes

CodeSystem: KLMessagingFFBGuardianshipFormCodes
Id: kl-messaging-ffb-guardianshipFormCodes
Title: "GuardianshipFormSystem"
Description: "Guardianship form code system for citizens in FFB messaging"
* #5 "Personlige og/eller økonomiske forhold, værgemålslovens § 5"
* #6 "Fratagelse af retlig handleevne, værgemålslovens § 6"
* #7 "Samværgemål, værgemålslovens § 7"

ValueSet: KLMessagingConsentPolicyValues
Id: kl-messaging-ffb-consentPolicyValues
Title: "ConsentPolicies"
Description: "Consent policy value set for FFB messaging"
* include codes from system KLMessagingFFBGuardianshipFormCodes

CodeSystem: KLMessagingFFBConsentPolicyCodes
Id: kl-messaging-ffb-consentPolicyCodes
Title: "ConsentPolicySystem"
Description: "Consent policy code system for FFB messaging"
* #persondataloven "Persondataloven, §6-8"

ValueSet: KLMessagingFFBParticipantRoleValues
Id: kl-messaging-ffb-participantRoleValues
Title: "ParticipantRoles"
Description: "Participant roles in a care team for FFB Messaging"
* include codes from system KLMessagingFFBParticipantRoleCodes

CodeSystem: KLMessagingFFBParticipantRoleCodes
Id: kl-messaging-ffb-participantRoleCodes
Title: "ParticipantRoleSystem"
Description: "Participant role code system for FFB messaging"
* #koordinerende-myndighed "Ansvarlig for koordinering af myndighedssamarbejde"
* #samarbejdende-myndighed "Samarbejdende myndighed"
* #koordinerende-udfører "Ansvarlig for koordinering af udførersamarbejde"

---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/images-sources/CarePlanOrder.plantuml

@startuml CarePlanOrder

rectangle "OrderMessage" as message
rectangle "MessageHeader" as messageheader
rectangle "Organization" as sender
rectangle "Organization" as receiver
rectangle "CarePlan" as careplan
rectangle "InformationGathering" as information
rectangle "Account" as account
rectangle "Organization" as author
rectangle "Citizen" as citizen
rectangle "CarePlan" as relatedcareplan
rectangle "CareTeam" as team
rectangle "RelatedPerson" as relatedperson
rectangle "Consent" as consent
rectangle "Intervention" as intervention
rectangle "FocusCondition" as focuscondition
rectangle "Encounter" as followup
rectangle "Intervention" as relatedintervention
rectangle "CareTeam" as relatedcareteam
rectangle "Organization" as relatedorganization
rectangle "Goal" as goal
rectangle "Evaluation" as evaluation
rectangle "MatterOfInterest" as theme
rectangle "Condition" as condition
rectangle "Organization" as payer
rectangle "DocumentReference" as attachment

message -- messageheader
messageheader -->"sender" sender
messageheader -->"receiver" receiver
messageheader -->"focus" careplan
messageheader -->"focus" information
careplan -->"subject" citizen
careplan -->"author" author
careplan -->"addresses *" focuscondition
careplan -->"goal *" goal
careplan -->"team" team
team -->"participant *" relatedperson
careplan "basedon"<--"*" intervention
careplan -->"follow-up" followup
relatedcareplan -->"team" relatedcareteam
relatedcareplan "basedon"<--"*" relatedintervention
relatedcareteam -->"participant " relatedorganization
relatedperson "performer"<--"*" consent
careplan -->"supportingInfo" relatedcareplan
information -->"finding *" condition
information -->"investigation *" theme
information -->"investigation *" evaluation
messageheader -->"focus" account
account -->"owner" payer
messageheader -->"focus *" attachment

goal ->"addresses" condition

condition .[hidden] evaluation
evaluation .[hidden] theme
@enduml

---

File: repos/hl7dk_SLASH_kl-ffb-messaging/input/pagecontent/index.md

# KLFFBMessaging

Feel free to modify this index page with your own awesome content!


<img alt="Model" src="./CarePlanOrder.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />


---

