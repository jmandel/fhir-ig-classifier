File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/Aliases.fsh

Alias: $StatusCodes = http://hl7.org/fhir/encounter-status
Alias: $ActCodes = http://terminology.hl7.org/CodeSystem/v3-ActCode 
Alias: $EventStatus = http://hl7.org/fhir/event-status
Alias: $CategoryCodes = http://medcomfhir.dk/ig/terminology/ValueSet/medcom-careCommunication-categories
Alias: $ServerityCode = http://hl7.org/fhir/issue-severity
Alias: $CodeCode = http://hl7.org/fhir/issue-type
Alias: $AcknowledgementCode = http://hl7.org/fhir/ValueSet/Acknowledgement-code
Alias: $BundleType = http://hl7.org/fhir/bundle-type
Alias: $Use = http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-messaging-destinationUse
Alias: $MessageEvents = http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-messaging-eventCodes
Alias: $SORCode = urn:oid:1.2.208.176.1.1
Alias: $EANCode = urn:oid:1.3.88
Alias: $activityCodes = http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-messaging-activityCodes
Alias: $MessageTypes = http://medcomfhir.dk/ig/terminology/ValueSet/medcom-messaging-messageTypes
Alias: $ActivityCodesValueset = http://medcomfhir.dk/ig/terminology/ValueSet/medcom-messaging-activityCodes
Alias: $ProducenID = http://medcomfhir.dk/ig/terminology/CodeSystem/MedComProducentID  
Alias: $MessageDefinitionIdentifierSystem = http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-messagedefinition-identifer-system
Alias: $MessageDefinitionIdentifierSystemVS = http://medcomfhir.dk/ig/terminology/ValueSet/medcom-messagedefinition-identifer-system-valueset
Alias: $MedComMessageDefinitionType = http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-message-definition-type
Alias: $MedComMessageDefinitionTypeVS = http://medcomfhir.dk/ig/terminology/ValueSet/medcom-message-definition-type-valueset
Alias: $UsageContextCodeSystem = http://terminology.hl7.org/CodeSystem/usage-context-type
Alias: $UsageContextCodeSystemVS = http://medcomfhir.dk/ig/terminology/ValueSet/medcom-messagedefinition-use-context-code-valueset

---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/Instances.fsh

Instance: 733cef33-3626-422b-955d-d506aaa65fe1
InstanceOf: MedComCorePatient
Title: "Eric Flame"
Description: "Patient with a managing organization. Valid only if used in a bundle (message)."
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "0102030405"
* name[official].use = #official
* name[official].given = "Eric"
* name[official].family = "Flame"
* telecom.system = #phone
* telecom.value = "12345678"
* telecom.use = #mobile
* address.line = "Flammesvinget 1"
* address.city = "Aarhus"
* address.postalCode = "8000 C"

Instance: 12ee0dde-a672-462f-820d-5efe832d73c9
InstanceOf: MedComCoreOrganization
Title: "Aros Burn Center"
Description: "A core organization with a SOR identifier."
* identifier[SOR-ID].use = #official
* identifier[SOR-ID].value = "123456789012345"
* name = "Aros Burn Center"

// Practitioner
Instance: 58c811a5-4082-44eb-9d66-ccbb112d4973
InstanceOf: MedComCorePractitioner
Title: "Simple practitioner with a name"
Description: "Simple practitioner with a name"
* name.given = "Michael"
* name.family = "Burns"


---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/MedComMessagingDestinationUseExtension.fsh

Extension: MedComMessagingDestinationUseExtension
Id: medcom-messaging-destinationUseExtension
Title: "MedComDestinationUseExtension"
Description: "Indicates whether the use of a destination in a MedCom message header is as a primary or a carbon copy recipient of the message"
* value[x] 1..1
* value[x] only Coding
* valueCoding.system = "http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-messaging-destinationUse"


---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/MedComMessagingMessage.fsh

Profile: MedComMessagingMessage
Parent: Bundle
Id: medcom-messaging-message
Description: "Base resource for all MedCom messages."
* id 1..
* id MS
* type MS
* type = #message
* type ^short = "Always message"
* timestamp 1.. MS
* entry MS
* entry.resource MS
* entry.resource ^short = "Each MedCom message shall contain a MedComMessagingMessageHeader and MedComMessagingProvenance. Please refer to invariant medcom-messaging-1, medcom-messaging-2, and medcom-messaging-3."
* obeys medcom-messaging-1
* obeys medcom-messaging-2
//* obeys medcom-messaging-3

Invariant: medcom-messaging-1
Description: "The MessageHeader resource shall conform to medcom-messaging-messageHeader profile"
Severity: #error
Expression: "entry[0].resource.conformsTo('http://medcomfhir.dk/ig/messaging/StructureDefinition/medcom-messaging-messageHeader')"

Invariant: medcom-messaging-2
Description: "There shall be at least one Provenance resource in a MedCom message"
Severity: #error
Expression: "entry.resource.ofType(Provenance).exists()"

Invariant: medcom-messaging-3
Description: "All Provenance resources shall conform to the medcom-messaging-provenance profile"
Severity: #error
Expression: "entry.resource.ofType(Provenance).conformsTo('http://medcomfhir.dk/ig/messaging/StructureDefinition/medcom-messaging-provenance').allTrue()"

Instance: eb26be85-fdb7-454d-a980-95cba6d1745b
InstanceOf: MedComMessagingMessage
Title: "Bundle used in an empty message."
Description: "Example of an empty message."
* type = $BundleType#message
* timestamp = 2020-09-28T12:34:56Z
* entry[+].fullUrl = "http://medcomfhir.dk/ig/messaging/MessageHeader/3881874e-2042-4a00-aee8-23512799f512"
* entry[=].resource = 3881874e-2042-4a00-aee8-23512799f512
* entry[+].fullUrl = "http://medcomfhir.dk/ig/messaging/Provenance/f61adfbe-d50f-11ec-9d64-0242ac120002"
* entry[=].resource = f61adfbe-d50f-11ec-9d64-0242ac120002
* entry[+].fullUrl = "http://medcomfhir.dk/ig/messaging/Organization/d7056980-a8b2-42aa-8a0e-c1fc85d1f40d"
* entry[=].resource = d7056980-a8b2-42aa-8a0e-c1fc85d1f40d
* entry[+].fullUrl = "http://medcomfhir.dk/ig/messaging/Organization/74cdf292-abf3-4f5f-80ea-60a48013ff6d"
* entry[=].resource = 74cdf292-abf3-4f5f-80ea-60a48013ff6d


---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/MedComMessagingMessageDefinition-fhir.fsh

Profile: MedComMessagingMessageDefinitionFhir
Parent: MedComMessagingMessageDefinition
Id: medcom-messaging-messagedefinition-fhir
Description: "An example profile of the MessageDefinition-fhir resource."
* identifier.system = $MessageDefinitionIdentifierSystem#urn:dk:healthcare:medcom:messaging:fhir (exactly)
* identifier.type = $MedComMessageDefinitionType#FHIR
* useContext.code = $UsageContextCodeSystem#workflow (exactly)
//* useContext.code.system = $UsageContextCodeSystem (exactly)

/*
Profile: EerMsgDefHomeCareObservation
Parent: EerMessageDefinitionFhir
Description: "An example profile of the MessageDefinition-fhir resource."
* identifier.system = $EerMessageDefinitionIdentifierSystem#urn:dk:healthcare:medcom:messaging:fhir (exactly)
* identifier.type = $EHMIMedComMessageDefinitionType#FHIR
* useContext.code = $EHMIUsageContextCodeSystem#workflow (exactly)
* useContext.code.system = $EHMIUsageContextCodeSystem (exactly)
*/

---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/MedComMessagingMessageDefinition.fsh

Profile: MedComMessagingMessageDefinition
Parent: MessageDefinition
Id: medcom-messaging-messagedefinition
Description: "An example profile of the MessageDefinition resource."
//* url from ehmi-medcom-message-definition-uri-valueset
* identifier 1..1 MS SU
//* identifier.system from ehmi-medcom-message-definition-uri-valueset
* identifier.system from $MessageDefinitionIdentifierSystemVS
* identifier.system 1..1 //MS SU
//* identifier.system = $MessageDefinitionIdentifierSystem#MedCom
* identifier.period.start 1..1 MS SU
* identifier.period.end 0..1 MS SU
* identifier.type from $MedComMessageDefinitionTypeVS
* identifier.type 1..1 MS SU
* identifier.type.coding.system = $MedComMessageDefinitionType
* identifier.use 1..1 MS SU
* identifier.value 1..1 MS SU
* version 1..1 MS SU
//* name 1..1 MS SU
* title 1..1 MS SU
* replaces.value 0..1 MS
* publisher 1..1 MS SU
* publisher = "MedCom, https://www.medcom.dk"
* contact 0.. MS SU
* contact ^slicing.discriminator.type = #value
  * ^slicing.discriminator.path = id
  * ^slicing.rules = #open //#closed eller #open 
* contact contains
    InteroperabilityConsultant 0..1 MS SU and
    SubjectMatterExpert 0..1 MS SU
// InteroperabilityConsultant
* contact[InteroperabilityConsultant].id 1..1 MS
* contact[InteroperabilityConsultant].id = "InteroperabilityConsultant"
* contact[InteroperabilityConsultant].name 1..1 MS SU
* contact[InteroperabilityConsultant].telecom.system 1..1 MS SU
* contact[InteroperabilityConsultant].telecom.system = #email (exactly)
* contact[InteroperabilityConsultant].telecom.use 1..1 MS SU
* contact[InteroperabilityConsultant].telecom.use = #work (exactly)
* contact[InteroperabilityConsultant].telecom.value 1..1 MS SU
// SubjectMatterExpert
* contact[SubjectMatterExpert].id 1..1 MS
* contact[SubjectMatterExpert].id = "SubjectMatterExpert"
* contact[SubjectMatterExpert].name 1..1 MS SU
* contact[SubjectMatterExpert].telecom.system 1..1 MS SU
* contact[SubjectMatterExpert].telecom.system = #email (exactly)
* contact[SubjectMatterExpert].telecom.use 1..1 MS SU
* contact[SubjectMatterExpert].telecom.use = #work (exactly)
* contact[SubjectMatterExpert].telecom.value 1..1 MS SU
//* description 1..1 MS SU
//* description only valueMarkdown 
//* description.valueMarkdown = "Natural language description of the message definition" 
//* useContext 1..1 MS SU
//* Message Context
//* useContext.code.system from http://terminology.hl7.org/CodeSystem/usage-context-type
* useContext.code.system = $UsageContextCodeSystem
* useContext.code from $UsageContextCodeSystemVS
* jurisdiction 1..1 MS SU
* jurisdiction = #DK
//* jurisdiction.coding.system = 
* category 1..1 MS SU
* category = #notification (exactly)
* responseRequired 1..1 MS 


---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/MedComMessagingMessageHeader.fsh

Profile: MedComMessagingMessageHeader
Parent: MessageHeader
Id: medcom-messaging-messageHeader
Description: "MessageHeader for MedCom messages"
* id 1..
* id MS
* id ^short = "Each message shall include a globally unique id."
* event[x] 
* event[x] only Coding
* event[x] ^short = "The event element shall contain a value from MedComMessagingMessageTypes"
* eventCoding 1.. MS
* eventCoding from $MessageTypes
* eventCoding.code 1..
//* destination.extension contains MedComMessagingDestinationUseExtension named use
//* destination.extension[use] MS
* destination ^slicing.discriminator.type = #value
* destination ^slicing.discriminator.path = "$this.extension.value"
* destination ^slicing.rules = #closed
* destination contains primary 1..1 and cc 0..
* destination[primary].extension contains MedComMessagingDestinationUseExtension named use 1..1 MS
* destination[primary].extension[use].valueCoding = $Use#primary
* destination[primary].receiver only Reference(MedComMessagingOrganization)
* destination[primary].receiver 1.. MS
* destination[primary].receiver ^type.aggregation = #bundled
* destination[primary].endpoint MS
* destination[primary].receiver ^short = "The primary reciever of the message"
* destination[cc].extension contains MedComMessagingDestinationUseExtension named use 1..1 MS
//* destination[cc].extension[use] 1..1 MS
* destination[cc].extension[use].valueCoding = $Use#cc
* destination[cc].receiver only Reference(MedComMessagingOrganization)
* destination[cc].receiver 1.. MS
* destination[cc].receiver ^type.aggregation = #bundled
* destination[cc].endpoint MS
* destination[cc].receiver ^short = "The carbon copy reciever of the message. Is only used when a message has multiple recievers."
* sender 1.. MS
* sender ^type.aggregation = #bundled
* sender only Reference(MedComMessagingOrganization)
* sender ^short = "The actual sender of the message"
* source MS
* source.endpoint MS
* source ^short = "Contains the information about the target for the Acknowledgement message."
* text MS
* text ^short = "A summary of the resource content. The narrative text shall always be included when exchanging a MedCom message. All MustSupport elements and extensions shall be included."
* definition MS 

Instance: b4e7e16b-9658-4172-acd7-5e7193f2cc5f
InstanceOf: MedComMessagingDestinationUseExtension
Usage: #inline
* valueCoding.code = $Use#primary

//Empty message Header
Instance: 3881874e-2042-4a00-aee8-23512799f512
InstanceOf: MedComMessagingMessageHeader
Title: "MessageHeader for an empty message. Valid only if used in a bundle (message)"
Description: "MessageHeader for an empty message. Valid only if used in a bundle (message)."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#empty-message
* destination[primary].endpoint = "http://medcomfhir.dk/unknown"
* destination[primary].receiver = Reference(74cdf292-abf3-4f5f-80ea-60a48013ff6d)
* sender = Reference(d7056980-a8b2-42aa-8a0e-c1fc85d1f40d)
* source.endpoint = "http://medcomfhir.dk/unknown"

// CareCommunication
Instance: 42c01434-8feb-11ec-b909-0242ac120002
InstanceOf: MedComMessagingMessageHeader
Title: "MessageHeader for a CareCommunication message. Valid only if used in a bundle (message)"
Description: "MessageHeader for a CareCommunication message. Valid only if used in a bundle (message). NB: A CareCommunication message shall use a CareCommunicationMessageHeader, as some elements and invariants are missing."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#care-communication-message
* destination[primary].endpoint = "http://medcomfhir.dk/unknown"
* destination[primary].receiver = Reference(74cdf292-abf3-4f5f-80ea-60a48013ff6d)
* sender = Reference(d7056980-a8b2-42aa-8a0e-c1fc85d1f40d)
* source.endpoint = "http://medcomfhir.dk/unknown"

//HospitalNotification
Instance: cb0b2ef0-8feb-11ec-b909-0242ac120002
InstanceOf: MedComMessagingMessageHeader
Title: "MessageHeader for a HospitalNotification message. Valid only if used in a bundle (message)"
Description: "MessageHeader for a HospitalNotification message. Valid only if used in a bundle (message). NB: A HospitalNotification message shall use a HospitalNotificationMessageHeader, as some elements and invariants are missing."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "http://medcomfhir.dk/unknown"
* destination[primary].receiver = Reference(74cdf292-abf3-4f5f-80ea-60a48013ff6d)
* sender = Reference(d7056980-a8b2-42aa-8a0e-c1fc85d1f40d)
* source.endpoint = "http://medcomfhir.dk/unknown"

// Acknowledgement
Instance: d28b9cb4-8feb-11ec-b909-0242ac120002
InstanceOf: MedComMessagingMessageHeader
Title: "MessageHeader for a Acknowledgement message. Valid only if used in a bundle (message)"
Description: "MessageHeader for a Acknowledgement message. Valid only if used in a bundle (message). NB: An Acknowledgement message shall use an AcknowledgementMessageHeader, as some elements and invariants are missing."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#acknowledgement-message
* destination[primary].endpoint = "http://medcomfhir.dk/unknown"
* destination[primary].receiver = Reference(74cdf292-abf3-4f5f-80ea-60a48013ff6d)
* sender = Reference(d7056980-a8b2-42aa-8a0e-c1fc85d1f40d)
* source.endpoint = "http://medcomfhir.dk/unknown"

---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/MedComMessagingOrganization.fsh

Profile: MedComMessagingOrganization
Parent: MedComCoreOrganization
Id: medcom-messaging-organization
Description: "A formally recognized organizations registered for exchanging messages within Danish healthcare, registered with a SOR identifier issued by The Danish Health Data Authority"
* . ^short = "A formally recognized organizations within Danish healthcare"
* identifier 2.. MS
* identifier[EAN-ID] 1.. 
* identifier[EAN-ID] MS SU
* text MS

// Reciever instance
 Instance: 74cdf292-abf3-4f5f-80ea-60a48013ff6d
InstanceOf: MedComMessagingOrganization
Title: "Example of a reciever organization with a SOR and an EAN identifier."
Description: "Example of an organization with a SOR and an EAN identifier."
Usage: #example
* identifier[SOR-ID].value = "543210987654321"
* identifier[EAN-ID].value = "5790000121526"
* name = "Receiver Organization" 

// Sender instance
Instance: d7056980-a8b2-42aa-8a0e-c1fc85d1f40d
InstanceOf: MedComMessagingOrganization
Title: "Example of a sender organization with a SOR and an EAN identifier."
Description: "Example of an organization with a SOR and an EAN identifier."
Usage: #example
* identifier[SOR-ID].value = "123456789012345"
* identifier[EAN-ID].value = "5790001382445"
* name = "Sender Organization"

// Service provider instance
Instance: bf839e87-4e44-4977-b38e-92b5a6f187b5
InstanceOf: MedComMessagingOrganization
Title: "Example of a service provider organization with a SOR and an EAN identifier."
Description: "Example of an organization with a SOR and an EAN identifier."
Usage: #example
* identifier[SOR-ID].value = "325421000016001"
* identifier[EAN-ID].value = "5798002472264"

---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/MedComMessagingProvenance.fsh

Profile: MedComMessagingProvenance
Parent: Provenance
Id: medcom-messaging-provenance
Description: "Provenance information about the messages preceeding the current message"
* target 1..1 MS
* target only Reference(MedComMessagingMessageHeader)
* target ^short = "Targets the MedComMessagingMessageHeader from the current message."
* occurredDateTime 1.. MS
* occurredDateTime ^short = "A human readable date and time for when the message is sent. Shall include a date, a time and timezone."
* recorded MS
* recorded ^short = "A system readable date and time for when the message is sent."
* activity 1.. MS
* activity from $ActivityCodesValueset
* activity ^definition = "Activity that occurred and triggered the current or a previous message"
* activity.coding 1.. MS
* activity.coding.code 1.. MS
* activity.coding.code ^definition = "The activity defined by the system"
* agent 1.. MS
* agent ^short = "The actors involved in the activity taking place"
* agent.who 1.. MS
* agent.who only Reference(MedComMessagingOrganization)
* agent.who ^type.aggregation = #bundled
* agent.who ^definition = "Shall contain the messaging organization performing the activity. This also apply to an internal transmission to another messaging organization within a given system."
* agent.who ^short = "A reference to the actor of the activity, which shall be a MedComMessagingOrganization. If more actors has been involved, the element must be sliced."
* entity MS
* entity ^definition = "Shall only be included if the current message is a response to a previous message."
* entity.role MS
* entity.role ^short = "When a message is a response, a correction or a forwarding message the role shall be 'revision' and when the message is a cancellation the role shall be 'removal'."
* entity.what MS
* entity.what ^short = "A reference to the previous message. If the previous message is a FHIR message, the reference element must be used and if the previous message is an EDIFACT or OIOXML, the identifier element must be used."
* entity.what.identifier MS
* entity.what.identifier ^definition = "Shall contain the message header id of messages given as input to the activity if the previous message is not a fhir message"
* entity.what.identifier ^short = "If previous message is EDIFACT or OIOXML, this element must be expressed as [lokationsnummer]#[brevid] from the EDIFACT or OIOXML message."
* entity.what.reference MS
* entity.what.reference ^definition = "Shall contain the message header id of messages given as input to the activity"
* entity.what.reference ^short = "If the previous message is a FHIR message, this element must hold the MessageHeader.id from previous message."
* text MS

// CareCommunication new-message example
Instance: 9c284936-5454-4116-95fc-3c8eeeed2400
InstanceOf: MedComMessagingProvenance
Title: "CareCommunication example. The Provenance instance is only valid if used in a bundle (message) - new message"
Description: "CareCommunication example. The Provenance instance is only valid if used in a bundle (message) - new message"
Usage: #example
* target = Reference(42c01434-8feb-11ec-b909-0242ac120002)
* occurredDateTime = 2020-09-28T12:34:56Z
* recorded = 2020-09-28T12:34:56Z
* activity.coding = $activityCodes#new-message
* agent.who = Reference(d7056980-a8b2-42aa-8a0e-c1fc85d1f40d)

// Provenance for an empty message
Instance: f61adfbe-d50f-11ec-9d64-0242ac120002
InstanceOf: MedComMessagingProvenance
Title: "Provenance for an empty message - new message"
Description: "Provenance for an empty message - new message"
Usage: #inline
* target = Reference(3881874e-2042-4a00-aee8-23512799f512)
* occurredDateTime = 2020-09-28T12:34:56Z
* recorded = 2020-09-28T12:34:56Z
* activity.coding = $activityCodes#new-message
* agent.who = Reference(d7056980-a8b2-42aa-8a0e-c1fc85d1f40d)

---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/MedComProducerOrganization.fsh

Profile: MedComProducerOrganization
Parent: MedComMessagingOrganization
Id: medcom-producer-organization
Title: "MedComCoreProducerOrganization"
Description: "This profile is intended to be used to represent the producer of the observations."
* identifier 3.. MS
* identifier[ProducentID].system 1..1 MS
* identifier[ProducentID].value 1..1 MS
* identifier[ProducentID] ^short = "Offical MedCom code describing the producer of the observation."


// Sender instance - new message
Instance: ef5cb9a6-835f-4d18-a34e-179c578b9a2a
InstanceOf: MedComProducerOrganization 
Title: "Example of a sender organization with a SOR, an EAN identifier, and ProdcentID"
Description: "Example of an organization with a SOR and an EAN identifier."
* identifier[SOR-ID].value = "1144561000016002" 
* identifier[EAN-ID].value = "5790000123117" 
* identifier[ProducentID].system = $ProducenID
* identifier[ProducentID].value = "KAF"
* name = "Pleje og Rehabilitering"

---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/fsh/MedComRequesterOrganization.fsh

Profile: MedComRequesterOrganization
Parent: MedComMessagingOrganization
Id: medcom-requesterorganization
Title: "MedComMessagingRequesterOrganization"
Description: "This profile is intended to be used to represent the requester organization of the observations."
* identifier 3.. MS
* identifier[Ydernummer] 1.. 
* identifier[Ydernummer] MS 
* contact 1..1 MS
* contact.name 0..1 MS
* contact.name.given 1..1 MS
* contact.name.given ^short = "Initials of the practitioner that request the observation."
// * extension contains MedComMessagingRequesterInit named RequesterInitials 0..1
* contact.extension contains data-absent-reason named InitialsNotKnown 0..1
* contact obeys medcom-homecareObservation-4

Invariant: medcom-homecareObservation-4
Description: "There shall either be a RequesterInitials or a InitialsNotKnown."
Expression: "name.exists() or extension('http://hl7.org/fhir/StructureDefinition/data-absent-reason').exists()"
Severity: #error


// Reciever instance - new message
Instance: 42541447-b58c-4a1a-9514-02b80494bbd3
InstanceOf: MedComRequesterOrganization 
Title: "Example of a reciever organization with a SOR, an EAN  and Ydrenummer identifier."
Description: "Example of an organization with a SOR and an EAN and Ydrenummer identifier."
* identifier[SOR-ID].value = "52581000016005" 
* identifier[EAN-ID].value = "5790000127092"
* identifier[Ydernummer].value = "061654"
* contact.name.given = "OKM"
* name = "Skødstrup Lægepraksis"

// Extension: MedComMessagingRequesterInit
// Id: MedComMessagingRequesterInit
// Title: "MedComMessagingRequesterInit"
// Description: "Initials of the practitioner that request observations"
// * valueHumanName 0..1 MS
// * valueHumanName.given 1..1 MS
// * valueHumanName.given ^short = "Initials of the practitioner that request the observation."


---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/pagecontent/downloads.md

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

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/pagecontent/index.md

### Introduction

This Implementation Guide (IG) is provided by MedCom to describe the use of FHIR &reg;&copy; in message based exchange of data in Danish healthcare.

The IG contains profiles which are used to define a general messaging model for MedCom messages, like [HospitalNotification](http://medcomfhir.dk/ig/hospitalnotification/), [CareCommunication](http://medcomfhir.dk/ig/carecommunication/) and [Acknowledgement](http://medcomfhir.dk/ig/acknowledgement/). 

#### General Messaging Model

The figure below illustrates a general messaging model, which all MedCom messages will comply to. Messaging profiles are all prefixed "MedComMessaging". Beside the profiles on the figure, a MedCom message will also include some MedComCore profiles and profiles made to support a specific use case. All together they constitute the actual content of a MedCom message. The following sections describe the overall purpose of each messaging profile.

<img alt="Shows the general MedCom messaging model. Each message must at least contain the following resources: Bundle, MessageHeader, Organization and Provenance." src="./MessagingModel.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

##### MedComMessagingMessage

A Bundle resource defined to be of the type 'message'. All profiles included in a message shall be referenced from the entry element in the MedComMessagingMessage profile, with a MessageHeader as the first resource. 

__Note:__ Be aware that entries in a message in general are unordered. Recipients of a message cannot assume any sequences of profiles.

##### MedComMessagingMessageHeader

The MessageHeader defines the sender and receiver organization of a message. In some messages it is optional to include a one or more carbon-copy receiver organization(s). From the focus element is the actual content of the message often referenced, like a Communication or Encounter resource. 

##### MedComMessagingOrganization

This profile inherits from MedComCoreOrganization and is used to describe a sender and receiver organization. The resource constrains the MedComCoreOrganization profile to contain both a SOR identifier and an EAN identifier (also known as GLN) for addressing purposes.

##### MedComMessagingProvenance

The Provenance resource describes the activity of the message and who has triggered the message. Further is it used to describes the history of message activities e.g., if the message is related to a previously exchanged message. 

#### Terminology
On [MedCom Terminology IG](http://medcomfhir.dk/ig/terminology/) all referenced CodeSystem and ValueSets developed by MedCom can be found.

#### Dependencies
This IG has a dependency to the [MedComCore IG](http://medcomfhir.dk/ig/core/) and [DK-core](https://hl7.dk/fhir/core/) v. 2.0.0, defined by [HL7 Denmark](https://hl7.dk/). This is currently reflected in MedComMessagingOrganization which inherits from MedComCoreOrganization. 

### Documentation

[More information about MedCom Messaging](https://medcomdk.github.io/dk-medcom-messaging/) can be found here. MedComMessaging profiles does not alone constitute a standard, why the documentation is limited.

### Governance

FHIR profiles are managed under MedCom: [Source code](https://github.com/medcomdk/dk-medcom-messaging). 

A description of [governance concerning change management and versioning](https://medcomdk.github.io/MedComLandingPage/#4-change-managment-and-versioning) of MedComs FHIR artefacts, can be found on the link.

#### Quality Assurance Report

In the Quality Assurance report (QA-report) for this IG, there is an error with the following description: *Reference is remote which isn’t supported by the specified aggregation mode(s) for the reference (bundled)*. The error occurs when creating instances of the profiles and is due to some elements having a Bundled flag {b}, however the referenced profile is not included in a Bundle in an instance, since the instance only represents a part of the entire message. This should not influence the implementation by IT-vendors.

### Contact

[MedCom](https://www.medcom.dk/) is responsible for this IG.

If you have any questions, please contact <fhir@medcom.dk> or write to MedCom's stream in [Zulip](https://chat.fhir.org/#narrow/stream/315677-denmark.2Fmedcom.2FFHIRimplementationErfaGroup).


---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/pagecontent/StructureDefinition-medcom-messaging-message-definition-fhir-intro.md

### Scope and usage 

This MessageDefinition profile is included to support FHIR messages. This profil inherits requirements in [MedComMessagingMessageDefinition](http://medcomfhir.dk/ig/messaging/StructureDefinition-medcom-messaging-messagedefinition.html) and further constrain these to support FHIR messages.

---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/pagecontent/StructureDefinition-medcom-messaging-message-definition-intro.md

### Scope and usage 

This MessageDefinition profile defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s) are permitted. This profile should not be included in the exchange of a message, but can be used to extract relevant information concerning the message for usage in an envelope. The MedComMessagingMessageHeader profile includes a url to this profile in the element MessageHeader.definition.

---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/pagecontent/StructureDefinition-medcom-messaging-message-intro.md

### Scope and usage 

This profile describes the Bundle resource that shall be used in all MedCom FHIR Messages. MedComMessagingMessage is the root in all messages, as shown on the figure below. As this profile is the used in a message, shall the element type in MedComMessagingMessage always be *message*. This entails that the first resource in the entry element shall be a MedComMessagingMessageHeader. 

For each messaging standard e.g., HospitalNotification or CareCommunication is a different set of profiles defined, but common to them both is that all included profiles shall be referenced from the entry element. Due to the different requirements for each standard, it should be expected that the MedComMessagingMessage is inherited in each standard. 

<img alt="Shows the general MedCom messaging model. Each message must contain the following resources: Bundle, MessageHeader, Organization and Provenance." src="./MessagingModel.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

Please refer to the tab "Snapshot Table(Must support)" below for the definition of the required content of a MedComMessagingMessage.


---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/pagecontent/StructureDefinition-medcom-messaging-messageHeader-intro.md

### Scope and usage 

This profile describes the MessageHeader resource that shall be used in all MedCom FHIR Messages. A MedComMessagingMessageHeader shall include a sender and receiver and it may include a carbon-copy receiver, however this is depended on type of standard. Each MedComMessagingMessageHeader shall include a globally unique id, which is used to describe the message history from the [MedComMessagingProvenance](http://medcomfhir.dk/ig/messaging/StructureDefinition-medcom-messaging-provenance.html) profile. 

The element event shall be defined in accordance with the type of standard the message concerns e.g., HospitalNotification and CareCommunication. Due to the different requirements for each standard, it should be expected that the MedComMessagingMessageHeader is inherited in each standard. 

<img alt="Shows the MedComMessageHeader, which references the MedComMessagingOrganization as a sender, reciever and carbon-copy." src="./MedComMessageHeader.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

Please refer to the tab "Snapshot Table(Must support)" below for the definition of the required content of a MedComMessagingMessageHeader.


---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/pagecontent/StructureDefinition-medcom-messaging-organization-intro.md

### Scope and usage 

This profile describes the Organization resource that shall be used in all MedCom FHIR Messages. MedComMessagingOrganization inherits from [MedComCoreOrganization](http://medcomfhir.dk/ig/core/StructureDefinition-medcom-core-organization.html) as it shall include both a SOR and EAN/GLN identifier. MedComMessagingOrganization is used to describe the sender and receiver organizations of a all MedCom FHIR Messages.

Please refer to the tab "Snapshot Table(Must support)" below for the definition of the required content of a MedComMessagingOrganization.


---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/pagecontent/StructureDefinition-medcom-messaging-provenance-intro.md

### Scope and usage 

This profile is used as the Provenance resource for MedCom FHIR messages. The Provenance resource tracks information about the activity what was created, revised, or deleted, while referencing the current message and previous messages if such exist. This is why the Provenance resource is valuable in MedCom messaging.

MedComMessagingProvenance describes the activity and history of a message. The element Provenance.agent.who contains information about the organisation that was involved in the activity, the element Provenance.target references the MessageHeader in the current message, and the element Provenance.what references the event that initiated a message e.g., a previous message. 

The figure below illustrates the references from the Provenance resource.

<img alt="MedComMessagingProvenance handles information about the involved organization in the element *who*, references the MessageHeader related to current message in the element *target*, and references to the event that initiated a message in the element *what*." src="./MedComMessagingProvenance.png" style="float:none; display:block; margin-left:auto; margin-right:auto;" />
 

Please refer to the tab "Snapshot Table(Must support)" below for the definition of the required content of a MedComMessagingProvenance.

#### Activity

In MedCom messaging, the Provenance.target shall always be a reference to a [MedComMessagingMessageHeader](http://medcomfhir.dk/ig/messaging/StructureDefinition-medcom-messaging-messageHeader.html) or an inherited of MedComMessagingMessageHeader. 
The target references the resources on which the activity has occurred. For instances if Provenance.activity is 'new-message', it describes that the message referenced from the Messageheader is a new message. 

The activitycodes used to describe the activity of the MedCom message may differ between standard e.g. [HospitalNotification](http://medcomfhir.dk/ig/hospitalnotification/) and [CareCommunication](http://medcomfhir.dk/ig/carecommunication/). Due to the different requirements of activities in a standard, it should be expected that there will be different invariants pointing at specific ValueSets for the given standard.

Provenance.agent describes the actor who is responsible for the activity that took place, by referencing the organisation responsible for the activity. The referenced organisation shall be an [MedComMessagingOrganization](http://medcomfhir.dk/ig/messaging/StructureDefinition-medcom-messaging-organization.html).

#### History

MedComMessagingProvenance handles the message history in the Provenacne.entity element. This element shall be included if the message is a response to a previous message. In this case the element Provenance.entity.role is used to describe how the entity is used in the message. Provenance.entity.role shall be: 
* *revision* when a message is a response, a correction, or a forwarding.
* *removal* when the message is a cancellation of a previously send message.

When a message is a response to a previous message, the previous message shall be referenced from the element Provenance.entity.what. The reference depends on the type of the previous message, which can be a MedCom FHIR message or a EDIFACT/OIOXML message. In the latter case, the reference shall be [lokationsnummer]#[brevid].

#### Timestamps

In MedComMessagingProvenance there are two timestamps, that represents the date and time the message was sent but in two different ways. Provenance.occuredDateTime is a human readable date and time and Provenance.recorded is a machine readable date and time. 



---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/pagecontent/StructureDefinition-medcom-producerorganization-intro.md

>Note: This profile is developed to be part of a production trial of the communication between the general practitioner and municipal acute care team.


#### Scope and usage
This profile is a MedCom messaging profile for the producer of the observation and is intended to represent the producer organization of the observation for a variety cases including:
* laboratory observations
* homeCareObservations

---

File: repos/medcomdk_SLASH_dk-medcom-messaging/input/pagecontent/StructureDefinition-medcom-requesterorganization-intro.md

>Note: This profile is intended to represent the requester organization of the observations. The requester can be the a general practitioner, who orders a number of homecare or laboratory observation.

### Scope and usage
This profile is intended to be used to represent the requester organization of the observations. 


#### Contact informations
It is required to specify contact person at the organization that reqests observations. The contact information shall contain either initials of the general practitioner or status "unknown" from the [data-absent-reason ValueSet](http://hl7.org/fhir/R4/valueset-data-absent-reason.html) shall be sent. In  MedComMessagingRequesterOrganization the contact.name.given shall be used to express the initials of the general practitioner. The standard follows HL7 rulse to expres initals. [Click here to read the rules](http://hl7.org/fhir/R4/datatypes.html#HumanName)

Furthermore identifiers such as SOR-, EAN and Ydernummer-identifier needs to be specified. 

---
