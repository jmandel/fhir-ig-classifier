File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/fsh/aliases.fsh

Alias: $ActCodes = http://terminology.hl7.org/CodeSystem/v3-ActCode 
Alias: $BundleType = http://hl7.org/fhir/bundle-type
Alias: $Use = http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-messaging-destinationUse
Alias: $MessageEvents = http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-messaging-eventCodes
Alias: $ActivityCode = http://medcomfhir.dk/ig/terminology/CodeSystem/medcom-messaging-activityCodes
Alias: $HNEncounterClass = http://medcomfhir.dk/ig/terminology/ValueSet/medcom-hospitalNotification-encounterClass
Alias: $HNEncounterStatus = http://medcomfhir.dk/ig/terminology/ValueSet/medcom-hospitalNotification-encounterStatus
Alias: $HNAcvitivtyCodes = http://medcomfhir.dk/ig/terminology/ValueSet/medcom-hospitalNotification-messageActivities

---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/fsh/GeneralInstances.fsh

// MedComCorePatient instance - STIN
Instance: t33cef33-3626-422b-955d-d506aaa65fe1
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Example of a MedComCorePatient with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"


// Reciever instance
Instance: o4cdf292-abf3-4f5f-80ea-60a48013ff6d
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: o7056980-a8b2-42aa-8a0e-c1fc85d1f40d
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital"


// MedComCorePatient instance - RE-STIN
Instance: 48393486-81c6-11ed-a1eb-0242ac120002
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Example of a MedComCorePatient with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"

// Reciever instance
Instance: 8858e7e6-81c6-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: abb09e14-81c6-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital"


// MedComCorePatient instance - AN-STIN
Instance: d6eeaca6-81c6-11ed-a1eb-0242ac120002
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Example of a MedComCorePatient with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"

// Reciever instance
Instance: eefc2dfa-81c6-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: 05266a00-81c7-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital"

// MedComCorePatient instance - STOR
Instance: 97404d10-81c8-11ed-a1eb-0242ac120002
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Example of a MedComCorePatient with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"

// Reciever instance
Instance: a39d4a04-81c8-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: b79a7914-81c8-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital" 

// MedComCorePatient instance - SLOR  
Instance: 519d5170-81ca-11ed-a1eb-0242ac120002
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Example of a MedComCorePatient with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"

// Reciever instance
Instance: 55ba5884-81ca-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: 5961ade8-81ca-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital" 

// MedComCorePatient instance - SLHJ (inpatient)  
Instance: 6841b54e-81cd-11ed-a1eb-0242ac120002
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Example of a MedComCorePatient with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"

// Reciever instance
Instance: 7e692262-81cd-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: 8d813af0-81cd-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital" 

// MedComCorePatient instance - MORS
Instance: t82fb8a3-6725-41e2-a615-2b1cfcfe9931 // MORS
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer (deceased)"
Description: "Example of a MedComCorePatient who is deceased and with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"
* deceasedBoolean = true

// Reciever instance
Instance: 753bdcba-81ce-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: 840b4046-81ce-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital" 

// MedComCorePatient instance - STAA
Instance: fdc1fc66-81d0-11ed-a1eb-0242ac120002
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Example of a MedComCorePatient with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"

// Reciever instance
Instance: 103fbebe-81d1-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: 1f5882b4-81d1-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital" 

// MedComCorePatient instance - SLHJ (Acute ambulant)
Instance: 6c16f41e-81d1-11ed-a1eb-0242ac120002
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Example of a MedComCorePatient with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"

// Reciever instance
Instance: e5682f5e-81d1-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: 0465ec66-81d2-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital" 

// MedComCorePatient instance - MORS (Acute ambulant)
Instance: 384b4a58-81d2-11ed-a1eb-0242ac120002 // MORS
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Example of a MedComCorePatient who is deceased and with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"
* deceasedBoolean = true

// Reciever instance
Instance: 55eb90b8-81d2-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: 66c12a92-81d2-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital" 

// MedComCorePatient instance - STIN - different serviceprovider
Instance: b00ea1c0-81d2-11ed-a1eb-0242ac120002 
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Deceased Example of a MedComCorePatient with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"

// Reciever instance
Instance: bea5b49e-81d2-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: cd72967c-81d2-11ed-a1eb-0242ac120002
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital" 


// Service provider instance
Instance: of839e87-4e44-4977-b38e-92b5a6f187b5
InstanceOf: MedComCoreOrganization
Title: "ServiceProvider organization - Hjertemedicinsk sengeafs. S103"
Description: "Example of a MedComCoreOrganization with SOR identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "399841000016000"
* name = "Hjertemedicinsk sengeafs. S103"

// MedComCorePatient instance - STIN - two episodeofcare
Instance: 545fd5e6-a924-11ed-afa1-0242ac120002 
InstanceOf: MedComCorePatient
Title: "Patient - Bruno Test Elmer"
Description: "Deceased Example of a MedComCorePatient with minimal information. Only valid if used in a Bundle."
Usage: #definition
* identifier[cpr].system = "urn:oid:1.2.208.176.1.2"
* identifier[cpr].value = "2509479989"
* name[official].use = #official
* name[official].family = "Elmer"

// Reciever instance
Instance: a8ec5ae1-e324-453d-9d9f-39ffe41f308a
InstanceOf: MedComMessagingOrganization  
Title: "Receiver organization - Plejecenter Herlev."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "953741000016009" 
* identifier[EAN-ID].value = "5790001348120" 
* name = "Plejecenter Herlev"

// Sender instance
Instance: 2565d3de-082e-4368-9160-4c719071026b
InstanceOf: MedComMessagingOrganization  
Title: "Sender organization - Hjerteafdelingen på Herlev og Gentofte hospital."
Description: "Example of a MedComMessagingOrganization with SOR and EAN identifier. Only valid if used in a Bundle."
Usage: #definition
* identifier[SOR-ID].value = "265161000016000" 
* identifier[EAN-ID].value = "5790000209354" 
* name = "Hjerteafdelingen på Herlev og Gentofte hospital"


---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/fsh/HospitalNotificationProvenanceInstances.fsh

// Provenances for Inpatient hospitalizations
// Admit instance
Instance: a7cf3888-6f42-4e4d-929c-d2475d24fba0
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - STIN"
Description: "Example of MedComMessagingProvenance used in 'Start hospital stay - admitted'. Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(b9b4818e-02de-4cc4-b418-d20cbc7b5404) // should be changed to the current MessageHeader
* occurredDateTime = 2022-12-07T12:00:02+02:00
* recorded = 2022-12-07T12:00:02+02:00
* activity.coding = $ActivityCode#admit-inpatient
* agent.who = Reference(o7056980-a8b2-42aa-8a0e-c1fc85d1f40d)

// Revise admit instance
Instance: b5f7de8c-957a-11ec-b909-0242ac120002
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - RE_STIN"
Description: "Example of MedComMessagingProvenance used in 'Update Start hospital stay -admitted'. Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(cc47c1e2-78e6-4291-b071-f423a4f7fbfe) // should be changed to the current MessageHeader
* occurredDateTime = 2022-12-07T14:00:02+02:00
* recorded = 2022-12-07T14:00:02+02:00
* activity.coding = $ActivityCode#revise-admit-inpatient 
* agent.who = Reference(abb09e14-81c6-11ed-a1eb-0242ac120002)
* entity.role = #revision
* entity.what = Reference(b9b4818e-02de-4cc4-b418-d20cbc7b5404)

// Cancel admit instance
Instance: c67ecb1c-957a-11ec-b909-0242ac120002
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - AN_STIN"
Description: "Example of MedComMessagingProvenance used in 'Cancellation Start hospital stay - admitted'. Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(d8749b54-1aeb-4089-8941-8d876bdffc51) // should be changed to the current MessageHeader
* occurredDateTime = 2022-12-07T15:00:02+02:00
* recorded = 2022-12-07T15:00:02+02:00
* activity.coding = $ActivityCode#cancel-admit-inpatient
* agent.who = Reference(05266a00-81c7-11ed-a1eb-0242ac120002)
* entity.role = #removal
* entity.what = Reference(b9b4818e-02de-4cc4-b418-d20cbc7b5404)

//start leave
Instance: dc421d0a-cded-470f-9a53-2ddba7583baa
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - STOR"
Description: "Example of MedComMessagingProvenance used in 'Start leave'. Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(e563a2b2-bf92-4b13-bbd2-0a021a95bded)
* occurredDateTime = 2022-12-13T14:00:12+02:00
* recorded = 2022-12-13T14:00:12+02:00
* activity.coding = $ActivityCode#start-leave-inpatient
* agent.who = Reference(b79a7914-81c8-11ed-a1eb-0242ac120002)
* entity.role = #revision
* entity.what = Reference(b9b4818e-02de-4cc4-b418-d20cbc7b5404)

// End leave example
Instance: e4db4939-7c60-4ac6-aefc-523f809ccba6
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - SLOR"
Description: "Example of MedComMessagingProvenance used in 'End leave'. Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(f47254da-f170-46f0-b624-4778a9c92b1f)
* occurredDateTime = 2022-12-14T15:30:02+02:00
* recorded = 2022-12-14T15:30:02+02:00
* activity.coding = $ActivityCode#end-leave-inpatient
* agent.who = Reference(5961ade8-81ca-11ed-a1eb-0242ac120002)
* entity.role = #revision
* entity.what = Reference(e563a2b2-bf92-4b13-bbd2-0a021a95bded)

// discharge inpatient
Instance: f710698c-83eb-4c3e-81c8-fe8e40baf524
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - SLHJ (inpatient)"
Description: "Example of MedComMessagingProvenance used in 'End hospital stay - patient completed to home/primary sector' (inpatient). Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(g1affa53-c157-4080-abb0-8e681524f969)
* occurredDateTime = 2022-12-18T09:45:32+02:00
* recorded = 2022-12-18T09:45:32+02:00
* activity.coding = $ActivityCode#discharge-inpatient-home
* agent.who = Reference(8d813af0-81cd-11ed-a1eb-0242ac120002)
* entity.role = #revision
* entity.what = Reference(b9b4818e-02de-4cc4-b418-d20cbc7b5404)

 // patient is deceased
Instance: g9942adb-197a-4e30-bec8-566e3a113efe
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - MORS (inpatient)"
Description: "Example of MedComMessagingProvenance used in 'Deceased' (inpatient). Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(hefc6d95-6161-4493-99c9-f359488dedb8)
* occurredDateTime = 2022-12-09T09:45:32+02:00
* recorded = 2022-12-09T09:45:32+02:00
* activity.coding = $ActivityCode#admit-inpatient
* agent.who = Reference(o7056980-a8b2-42aa-8a0e-c1fc85d1f40d) 
* entity.role = #revision
* entity.what = Reference(b9b4818e-02de-4cc4-b418-d20cbc7b5404)


// Provenance for acute ambulant hospitalization
// Admit instance
Instance: h60bd482-9c47-43c5-9b77-1134eaa2d5f0
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - STAA"
Description: "Example of MedComMessagingProvenance used in 'Start hospital stay - acute ambulant'. Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(i50fc5fe-2d11-4ef3-acac-2e2e5c6c0029) // should be changed to the current MessageHeader
* occurredDateTime = 2022-12-01T10:00:06+02:00
* recorded = 2022-12-01T10:00:06+02:00
* activity.coding = $ActivityCode#admit-emergency
* agent.who = Reference(1f5882b4-81d1-11ed-a1eb-0242ac120002)



// discharge acute ambulant
Instance: ka776a3e-3eca-407b-9f81-b8c16f089874
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - SLHJ (acute ambulant)"
Description: "Example of MedComMessagingProvenance used in 'End hospital stay - patient completed to home/primary sector' (acute ambulant). Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(m9bea09c-e662-4d59-b84f-9af570b57f42)
* occurredDateTime = 2022-12-02T22:00:11+02:00
* recorded = 2022-12-02T22:00:11+02:00
* activity.coding = $ActivityCode#discharge-emergency-home
* agent.who = Reference(0465ec66-81d2-11ed-a1eb-0242ac120002)
* entity.role = #revision
* entity.what = Reference(i50fc5fe-2d11-4ef3-acac-2e2e5c6c0029)

 // patient is deceased
Instance: l17de5f5-abb0-4701-93aa-6b0d7b4127bc
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - MORS (acute ambulant)"
Description: "Example of MedComMessagingProvenance used in 'Deceased' (acute ambulant). Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(nabb68aa-c97b-4905-a60c-71ff3209fd51)
* occurredDateTime = 2022-12-02T07:00:02+02:00
* recorded = 2022-12-02T07:00:02+02:00
* activity.coding = $ActivityCode#admit-emergency
* agent.who = Reference(66c12a92-81d2-11ed-a1eb-0242ac120002)
* entity.role = #revision
* entity.what = Reference(i50fc5fe-2d11-4ef3-acac-2e2e5c6c0029)

// Admit instance - different serviceprovider
Instance: m7cf3888-6f52-5e4d-939c-d2575d24fba0
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - STIN."
Description: "Example of MedComMessagingProvenance used in 'Start hospital stay - admitted'. With different serviceProvider and sender Organisation. Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(o9b4818e-12de-5cc4-c418-d30cbc7b5404) // should be changed to the current MessageHeader
* occurredDateTime = 2022-12-09T12:00:02+02:00
* recorded = 2022-12-09T12:00:02Z
* activity.coding = $ActivityCode#admit-inpatient
* agent.who = Reference(cd72967c-81d2-11ed-a1eb-0242ac120002)

// Provenances for Inpatient hospitalizations - with two episodeOfCareidentifiers
// Admit instance
Instance: 4e9f2c26-9d9b-4239-ade6-e26c130e855e
InstanceOf: MedComMessagingProvenance
Title: "MedComMessagingProvenance - STIN"
Description: "Example of MedComMessagingProvenance used in 'Start hospital stay - admitted'. Only valid if used in a Bundle (message)."
Usage: #definition
* target = Reference(1ca19ddf-31bc-4597-8739-968c38dd88f8) // should be changed to the current MessageHeader
* occurredDateTime = 2022-12-07T12:00:02+02:00
* recorded = 2022-12-07T12:00:02+02:00
* activity.coding = $ActivityCode#admit-inpatient
* agent.who = Reference(2565d3de-082e-4368-9160-4c719071026b)

---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/fsh/MedComHospitalNotificationEncounter.fsh

Profile: MedComHospitalNotificationEncounter
Parent: MedComCoreEncounter
Id: medcom-hospitalNotification-encounter
Description: "Encounter derivation that handles hospital notification when a patient is admitted to a hospital. The hospital notification is always send from a hospital. The receiver of the message is the patients home municipalicy. The hospital notification is send for example when patient is admitted, on leave, returned from leave, finished hospital stay."
* status MS
* status from $HNEncounterStatus
* status 1..1
* status ^short = "in-progress | onleave | finished | entered-in-error"
* class from $HNEncounterClass
* class ^short = "inpatient | emergency | other"
* type 0..0
* serviceType 0..0
* priority 0..0
/* * episodeOfCare contains
    localidentifier 0..1  */
* episodeOfCare 1..
* episodeOfCare.identifier 1..
* episodeOfCare ^definition = "Shall contain an episode of care identifier for the entire hospitalisation"
* episodeOfCare[lpr3identifier].identifier SU
* episodeOfCare[lpr3identifier].reference ..0
* episodeOfCare.reference ..0
/* * episodeOfCare[localidentifier] MS
* episodeOfCare[localidentifier].identifier MS SU */
* basedOn ..0
* participant ..0
* appointment ..0
* period 1.. MS
* period ^definition = "The start and end time of the encounter. For notification of hospitalisation an start interval is always known as the notification of adminssion is trigged by the arrival of a patient. There a period will always exist as the notification of admission always starts the communication flow. Please that the encounter.period values always referes to the encounter start and end. The period of the leave of absence is not part of the notification of hospitalization FHIR resource ."
* period.start 1.. MS
* period.end MS
* period.start ^short = "Encounter start time."
* period.start ^definition = "In HospitalNotification a start time is the timestamp that is registered by the hospital at patient physical attendance at the hospital."
* period.end ^short = "Encounter end time."
* period.end ^definition = "In HospitalNotification a end time is the timestamp that is registered by the hospital when the patient leaves the hospital after discharge."
* length ..0
* reasonCode ..0
* reasonReference ..0
* diagnosis ..0
* account ^definition = "The set of accounts and issurance information that may be used for billing for this Encounter. The account element shall not be used in NotificationOfHospitalStayEncounter"
* hospitalization ..0
* location ..0
* serviceProvider 1.. MS
* partOf ..0
* extension contains medcom-hospitalnotifiation-leave-period-extension named leavePeriod 0..1 MS SU
* obeys medcom-hospitalNotification-6

Invariant: medcom-hospitalNotification-6
Description: "When the status = 'onleave', the timestamp for beginning of a leave (extension.valuePeriod.start) shall be present."
Severity: #error
Expression: "where(status = 'onleave').extension.value.start.exists() or status != 'onleave'"


// All use cases associated with inpatient hospitalization
Instance: a790f964-88d3-4652-bbc8-81d2f3d035f8
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - STIN"
Description: "Example of MedComHospitalNotificationEncounter 'Start hospital stay - admitted'. Only Valid if used in a Bundle."
* status = #in-progress
* class = $ActCodes#IMP 
* subject = Reference(t33cef33-3626-422b-955d-d506aaa65fe1)
* episodeOfCare.identifier.value = "bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-07T12:00:00+02:00
* serviceProvider = Reference(o7056980-a8b2-42aa-8a0e-c1fc85d1f40d)


Instance: b9846c24-0335-11ed-b939-0242ac120002
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - RE_STIN"
Description: "Example of MedComHospitalNotificationEncounter 'Update Start hospital stay - admitted'. Only Valid if used in a Bundle."
* status = #in-progress
* class = $ActCodes#IMP 
* subject = Reference(48393486-81c6-11ed-a1eb-0242ac120002)
* episodeOfCare.identifier.value = "bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-07T13:00:00+02:00 //updated here
* serviceProvider = Reference(abb09e14-81c6-11ed-a1eb-0242ac120002)

Instance: c9782061-ce63-41b5-8be6-655812d23332
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - AN_STIN"
Description: "Example of MedComHospitalNotificationEncounter 'Cancellation Start hospital stay - admitted'. Only Valid if used in a Bundle."
* status = #entered-in-error
* class = $ActCodes#IMP 
* subject = Reference(d6eeaca6-81c6-11ed-a1eb-0242ac120002)
* episodeOfCare.identifier.value = "bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-07T12:00:00+02:00
* serviceProvider = Reference(05266a00-81c7-11ed-a1eb-0242ac120002)

Instance: d56e9c54-23d2-43a4-816e-951d2a6e3281
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - STOR"
Description: "Example of MedComHospitalNotificationEncounter 'Start leave'. Only Valid if used in a Bundle."
* status = #onleave
* class = $ActCodes#IMP 
* subject = Reference(97404d10-81c8-11ed-a1eb-0242ac120002)
* episodeOfCare.identifier.value = "bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-07T12:00:00+02:00
* extension[leavePeriod].valuePeriod.start = 2022-12-13T14:00:10+02:00
* serviceProvider = Reference(b79a7914-81c8-11ed-a1eb-0242ac120002)

Instance: e07c4bd4-cfad-4c4d-9c4b-e4ba3424a65b
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - SLOR"
Description: "Example of MedComHospitalNotificationEncounter 'End leave'. Only Valid if used in a Bundle."
* status = #in-progress
* class = $ActCodes#IMP 
* subject = Reference(519d5170-81ca-11ed-a1eb-0242ac120002)
* episodeOfCare.identifier.value = "bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-07T12:00:00+02:00
* extension[leavePeriod].valuePeriod.start = 2022-12-13T14:00:10+02:00
* extension[leavePeriod].valuePeriod.end = 2022-12-14T15:30:00+02:00
* serviceProvider = Reference(5961ade8-81ca-11ed-a1eb-0242ac120002)

Instance: f405ba2d-467a-4e92-9acc-9dc2a629760f
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - SLHJ (inpatient)"
Description: "Example of MedComHospitalNotificationEncounter 'End hospital stay - patient completed to home/primary sector' (inpatient). Only Valid if used in a Bundle."
* status = #finished
* class = $ActCodes#IMP 
* subject = Reference(6841b54e-81cd-11ed-a1eb-0242ac120002)
* episodeOfCare.identifier.value = "bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-07T12:00:00+02:00
* period.end = 2022-12-18T09:45:30+02:00
* serviceProvider = Reference(8d813af0-81cd-11ed-a1eb-0242ac120002)

//Embedded Encounter with admitted patient deceased
Instance: gcab7218-9584-11ec-b909-0242ac120002
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - MORS (inpatient)"
Description: "Example of MedComHospitalNotificationEncounter 'Deceased' (inpatient). Only Valid if used in a Bundle."
* status = #finished
* class = $ActCodes#IMP
* subject = Reference(t82fb8a3-6725-41e2-a615-2b1cfcfe9931)
* episodeOfCare.identifier.value = "bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-07T12:00:00+02:00
* period.end = 2022-12-09T09:45:30+02:00
* serviceProvider = Reference(840b4046-81ce-11ed-a1eb-0242ac120002)


// All use cases associated with acute ambulant hospitalization
Instance: h2cb16ce-af8c-46f3-be9e-89406ef3e7b5
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - STAA"
Description: "Example of MedComHospitalNotificationEncounter 'Start hospital stay - acute ambulant'. Only Valid if used in a Bundle."
* status = #in-progress
* class = $ActCodes#EMER 
* subject = Reference(fdc1fc66-81d0-11ed-a1eb-0242ac120002)
* episodeOfCare.identifier.value = "bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-01T10:00:04+02:00
* serviceProvider = Reference(1f5882b4-81d1-11ed-a1eb-0242ac120002)

Instance: kbbad98c-3310-404a-af0c-7e3739d7b49f
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - SLHJ (acute ambulant)"
Description: "Example of MedComHospitalNotificationEncounter 'End hospital stay - patient completed to home/primary sector' (acute ambulant). Only Valid if used in a Bundle."
* status = #finished
* class = $ActCodes#EMER 
* subject = Reference(6c16f41e-81d1-11ed-a1eb-0242ac120002)
* episodeOfCare.identifier.value = "bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-01T10:00:04+02:00
* period.end = 2022-12-02T22:00:09+02:00
* serviceProvider = Reference(0465ec66-81d2-11ed-a1eb-0242ac120002)

//Embedded Encounter with admitted patient deceased
Instance: l001c640-6b5d-414c-b6bd-e00ec6d4ceee
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - MORS (acute ambulant)"
Description: "Example of MedComHospitalNotificationEncounter 'Deceased' (acute ambulant). Only Valid if used in a Bundle."
* status = #finished
* class = $ActCodes#EMER
* subject = Reference(384b4a58-81d2-11ed-a1eb-0242ac120002)
* episodeOfCare.identifier.value = "bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-01T10:00:04+02:00
* period.end = 2022-12-02T07:00:00+02:00
* serviceProvider = Reference(66c12a92-81d2-11ed-a1eb-0242ac120002)

Instance: m790f964-98d3-4852-bac8-83d2f3d035f8
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - STIN (distinct sender and serviceProvider)"
Description: "Example of MedComHospitalNotificationEncounter 'Start hospital stay - admitted'. With different serviceProvider and sender organisation in the Bundle. Only Valid if used in a Bundle."
* status = #in-progress
* class = $ActCodes#IMP 
* subject = Reference(b00ea1c0-81d2-11ed-a1eb-0242ac120002)
* episodeOfCare.identifier.value = "urn:uuid:bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare.identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-07T12:00:00+02:00
* serviceProvider = Reference(of839e87-4e44-4977-b38e-92b5a6f187b5)

Instance: ne70f2b8-a924-11ed-afa1-0242ac120002
InstanceOf: MedComHospitalNotificationEncounter
Title: "HospitalNotification Encounter - STIN (two episodeOfCare-identifiers)"
Description: "Example of MedComHospitalNotificationEncounter 'Start hospital stay - admitted'. With two episodeOfCare-identifiers. Only Valid if used in a Bundle."
* status = #in-progress
* class = $ActCodes#IMP 
* subject = Reference(545fd5e6-a924-11ed-afa1-0242ac120002)
* episodeOfCare[+].identifier.value = "urn:uuid:fc60e762-b13b-5773-865e-67f3907bdcc7" 
* episodeOfCare[=].identifier.system = "https://www.esundhed.dk/Registre/Landspatientregisteret"
* episodeOfCare[+].identifier.value = "urn:uuid:bd481c38-a921-11ed-afa1-0242ac120002" 
* episodeOfCare[=].identifier.system = "https://sor2.sum.dsdn.dk/#id=265161000016000" // SOR id for afsender/serviceProvider
* period.start = 2022-12-07T12:00:00+02:00
* serviceProvider = Reference(2565d3de-082e-4368-9160-4c719071026b)

---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/fsh/MedComHospitalNotificationLeavePeriodExtension.fsh

Extension: MedComHospitalNotificationLeavePeriodExtension
Id: medcom-hospitalnotifiation-leave-period-extension
Title: "MedComHospitalNotificationLeavePeriodExtension"
Description: "Includes timestamps for start and end of leave of a hospitalization."
* valuePeriod MS
* valuePeriod.start 1.. MS
* valuePeriod.start ^short = "Describes the beginning of a period of leave."
* valuePeriod.end MS
* valuePeriod.end ^short = "Describes the end of a period of leave."


---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/fsh/MedComHospitalNotificationMessage.fsh

Profile: MedComHospitalNotificationMessage
Parent: MedComMessagingMessage
Id: medcom-hospitalNotification-message
Description: "A message for a HospitalNotification. The message is triggered as patients are admitted, onleave or has finished a hospital stay in order to notify the relevant Municipalicy home care"
* entry ^short = "Message content (MedComHospitalNotificationMessageHeader, MedComMessagingOrganization, MedComMessagingProvenance, MedComHospitalNotificationEncounter, MedComCorePatient) - Open"
* obeys medcom-hospitalNotification-1
* obeys medcom-hospitalNotification-2
* obeys medcom-hospitalNotification-3
* obeys medcom-hospitalNotification-4
* obeys medcom-hospitalNotification-5
* id ^short = "A unique identifier for a bundle. The element must be updated with a new value each time a new message is sent."
* timestamp ^short = "Holds information about when a bundle is created."

Invariant: medcom-hospitalNotification-1
Description: "The message header shall conform to medcom-hospitalNotification-messageHeader profile"
Severity: #error
Expression: "entry.ofType(MessageHeader).all(resource.conformsTo('http://medcomfhir.dk/fhir/hospitalnotification/StructureDefinition/medcom-hospitalNotification-messageHeader'))"

Invariant: medcom-hospitalNotification-2
Description: "Entry shall contain exactly one patient resource"
Severity: #error
Expression: "entry.where(resource.is(Patient)).count() = 1"

Invariant: medcom-hospitalNotification-3
Description: "All provenance resources shall contain activities from medcom-hospitalNotification-messageActivities valueset"
Severity: #error
Expression: "entry.ofType(Provenance).all(resource.activity.memberOf('http://medcomfhir.dk/fhir/dk-medcom-terminology/ValueSet/medcom-hospitalNotification-messageActivities'))"

Invariant: medcom-hospitalNotification-4
Description: "The system of Patient.identifier shall be 'urn:oid:1.2.208.176.1.2', which represents an official Danish CPR-number"
Severity: #error
Expression: "entry.resource.ofType(Patient).identifier.system = 'urn:oid:1.2.208.176.1.2'"

Invariant: medcom-hospitalNotification-5
Description: "The receiver of a HospitalNotification shall always be a primary receiver."
Severity: #error
Expression: "Bundle.entry.resource.ofType(MessageHeader).destination.extension.value.code = 'primary'"

// use cases associated with inpatient hospitalization
Instance: a5e5b880-c087-4055-b9ec-99108695f81d
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - STIN"
Description: "Example of MedComHospitalNotificationMessage 'Start hospital stay - admitted'"
* type = $BundleType#message
* timestamp = 2022-12-07T12:00:01+02:00
* entry[+].fullUrl = "MessageHeader/b9b4818e-02de-4cc4-b418-d20cbc7b5404"
* entry[=].resource = b9b4818e-02de-4cc4-b418-d20cbc7b5404
* entry[+].fullUrl = "Patient/t33cef33-3626-422b-955d-d506aaa65fe1"
* entry[=].resource = t33cef33-3626-422b-955d-d506aaa65fe1
* entry[+].fullUrl = "Encounter/a790f964-88d3-4652-bbc8-81d2f3d035f8"
* entry[=].resource = a790f964-88d3-4652-bbc8-81d2f3d035f8
* entry[+].fullUrl = "Organization/o4cdf292-abf3-4f5f-80ea-60a48013ff6d"
* entry[=].resource = o4cdf292-abf3-4f5f-80ea-60a48013ff6d
* entry[+].fullUrl = "Organization/o7056980-a8b2-42aa-8a0e-c1fc85d1f40d" 
* entry[=].resource = o7056980-a8b2-42aa-8a0e-c1fc85d1f40d
* entry[+].fullUrl = "Provenance/a7cf3888-6f42-4e4d-929c-d2475d24fba0"
* entry[=].resource = a7cf3888-6f42-4e4d-929c-d2475d24fba0


Instance: bfab3e80-9584-11ec-b909-0242ac120002
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - RE_STIN"
Description: "Example of MedComHospitalNotificationMessage 'Update Start hospital stay - admitted'"
* type = $BundleType#message
* timestamp = 2022-12-07T14:00:01+02:00
* entry[+].fullUrl = "MessageHeader/cc47c1e2-78e6-4291-b071-f423a4f7fbfe"
* entry[=].resource = cc47c1e2-78e6-4291-b071-f423a4f7fbfe
* entry[+].fullUrl = "Patient/48393486-81c6-11ed-a1eb-0242ac120002"
* entry[=].resource = 48393486-81c6-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Encounter/b9846c24-0335-11ed-b939-0242ac120002"
* entry[=].resource = b9846c24-0335-11ed-b939-0242ac120002
* entry[+].fullUrl = "Organization/abb09e14-81c6-11ed-a1eb-0242ac120002" //service provider Org
* entry[=].resource = abb09e14-81c6-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/8858e7e6-81c6-11ed-a1eb-0242ac120002"
* entry[=].resource = 8858e7e6-81c6-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Provenance/b5f7de8c-957a-11ec-b909-0242ac120002"
* entry[=].resource = b5f7de8c-957a-11ec-b909-0242ac120002
* entry[+].fullUrl = "Provenance/a7cf3888-6f42-4e4d-929c-d2475d24fba0"
* entry[=].resource = a7cf3888-6f42-4e4d-929c-d2475d24fba0


Instance: c83671a4-9584-11ec-b909-0242ac120002
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - AN_STIN"
Description: "Example of MedComHospitalNotificationMessage 'Cancellation Start hospital stay - admitted'"
* type = $BundleType#message
* timestamp = 2022-12-07T15:00:01+02:00
* entry[+].fullUrl = "MessageHeader/d8749b54-1aeb-4089-8941-8d876bdffc51"
* entry[=].resource = d8749b54-1aeb-4089-8941-8d876bdffc51
* entry[+].fullUrl = "Patient/d6eeaca6-81c6-11ed-a1eb-0242ac120002"
* entry[=].resource = d6eeaca6-81c6-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Encounter/c9782061-ce63-41b5-8be6-655812d23332"
* entry[=].resource = c9782061-ce63-41b5-8be6-655812d23332
* entry[+].fullUrl = "Organization/05266a00-81c7-11ed-a1eb-0242ac120002" //service provider Org
* entry[=].resource = 05266a00-81c7-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/eefc2dfa-81c6-11ed-a1eb-0242ac120002"
* entry[=].resource = eefc2dfa-81c6-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Provenance/c67ecb1c-957a-11ec-b909-0242ac120002"
* entry[=].resource = c67ecb1c-957a-11ec-b909-0242ac120002
* entry[+].fullUrl = "Provenance/a7cf3888-6f42-4e4d-929c-d2475d24fba0"
* entry[=].resource = a7cf3888-6f42-4e4d-929c-d2475d24fba0

Instance: d3128d9b-cede-4c7f-8904-809eab322d7d
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - STOR"
Description: "Example of MedComHospitalNotificationMessage 'Start leave'"
* type = $BundleType#message
* timestamp = 2022-12-13T14:00:11+02:00
* entry[+].fullUrl = "MessageHeader/e563a2b2-bf92-4b13-bbd2-0a021a95bded"
* entry[=].resource = e563a2b2-bf92-4b13-bbd2-0a021a95bded
* entry[+].fullUrl = "Patient/97404d10-81c8-11ed-a1eb-0242ac120002"
* entry[=].resource = 97404d10-81c8-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Encounter/d56e9c54-23d2-43a4-816e-951d2a6e3281"
* entry[=].resource = d56e9c54-23d2-43a4-816e-951d2a6e3281
* entry[+].fullUrl = "Organization/a39d4a04-81c8-11ed-a1eb-0242ac120002"
* entry[=].resource = a39d4a04-81c8-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/b79a7914-81c8-11ed-a1eb-0242ac120002" //service provider Org
* entry[=].resource = b79a7914-81c8-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Provenance/a7cf3888-6f42-4e4d-929c-d2475d24fba0" //admit prov
* entry[=].resource = a7cf3888-6f42-4e4d-929c-d2475d24fba0
* entry[+].fullUrl = "Provenance/dc421d0a-cded-470f-9a53-2ddba7583baa" //start leave prov
* entry[=].resource = dc421d0a-cded-470f-9a53-2ddba7583baa

Instance: e94de8ee-bd94-475e-b454-b8fbbef8a685
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - SLOR"
Description: "Example of MedComHospitalNotificationMessage 'End leave'"
* type = $BundleType#message
* timestamp = 2022-12-14T15:30:01+02:00
* entry[+].fullUrl = "MessageHeader/f47254da-f170-46f0-b624-4778a9c92b1f"
* entry[=].resource = f47254da-f170-46f0-b624-4778a9c92b1f
* entry[+].fullUrl = "Patient/519d5170-81ca-11ed-a1eb-0242ac120002"
* entry[=].resource = 519d5170-81ca-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Encounter/e07c4bd4-cfad-4c4d-9c4b-e4ba3424a65b"
* entry[=].resource = e07c4bd4-cfad-4c4d-9c4b-e4ba3424a65b
* entry[+].fullUrl = "Organization/55ba5884-81ca-11ed-a1eb-0242ac120002"
* entry[=].resource = 55ba5884-81ca-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/5961ade8-81ca-11ed-a1eb-0242ac120002" //service provider Org
* entry[=].resource = 5961ade8-81ca-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Provenance/a7cf3888-6f42-4e4d-929c-d2475d24fba0" //admit
* entry[=].resource = a7cf3888-6f42-4e4d-929c-d2475d24fba0
* entry[+].fullUrl = "Provenance/dc421d0a-cded-470f-9a53-2ddba7583baa" //start leave
* entry[=].resource = dc421d0a-cded-470f-9a53-2ddba7583baa
* entry[+].fullUrl = "Provenance/e4db4939-7c60-4ac6-aefc-523f809ccba6" //end leave
* entry[=].resource = e4db4939-7c60-4ac6-aefc-523f809ccba6

Instance: f4aa42a4-86db-4e68-9b38-9dda0dfd5774
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - SLHJ (inpatient)"
Description: "Example of MedComHospitalNotificationMessage 'End hospital stay - patient completed to home/primary sector' (inpatient)"
* type = $BundleType#message
* timestamp = 2022-12-18T09:45:31+02:00
* entry[+].fullUrl = "MessageHeader/g1affa53-c157-4080-abb0-8e681524f969"
* entry[=].resource = g1affa53-c157-4080-abb0-8e681524f969
* entry[+].fullUrl = "Patient/6841b54e-81cd-11ed-a1eb-0242ac120002"
* entry[=].resource = 6841b54e-81cd-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Encounter/f405ba2d-467a-4e92-9acc-9dc2a629760f"
* entry[=].resource = f405ba2d-467a-4e92-9acc-9dc2a629760f
* entry[+].fullUrl = "Organization/8d813af0-81cd-11ed-a1eb-0242ac120002" //service provider Org
* entry[=].resource = 8d813af0-81cd-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/7e692262-81cd-11ed-a1eb-0242ac120002"
* entry[=].resource = 7e692262-81cd-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Provenance/a7cf3888-6f42-4e4d-929c-d2475d24fba0" //admit
* entry[=].resource = a7cf3888-6f42-4e4d-929c-d2475d24fba0
* entry[+].fullUrl = "Provenance/f710698c-83eb-4c3e-81c8-fe8e40baf524" //discharge
* entry[=].resource = f710698c-83eb-4c3e-81c8-fe8e40baf524



//Example of MedComHospitalNotificationMessage patient deceased message
Instance: g099bbf3-3fca-4722-a248-bfe1aa956410
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - MORS (inpatient)"
Description: "Example of MedComHospitalNotificationMessage 'Deceased' (inpatient)"
* type = $BundleType#message
* timestamp = 2022-12-09T09:45:31+02:00
* entry[+].fullUrl = "MessageHeader/hefc6d95-6161-4493-99c9-f359488dedb8"
* entry[=].resource = hefc6d95-6161-4493-99c9-f359488dedb8
* entry[+].fullUrl = "Patient/t82fb8a3-6725-41e2-a615-2b1cfcfe9931"
* entry[=].resource = t82fb8a3-6725-41e2-a615-2b1cfcfe9931
* entry[+].fullUrl = "Encounter/gcab7218-9584-11ec-b909-0242ac120002"
* entry[=].resource = gcab7218-9584-11ec-b909-0242ac120002
* entry[+].fullUrl = "Organization/753bdcba-81ce-11ed-a1eb-0242ac120002"
* entry[=].resource = 753bdcba-81ce-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/840b4046-81ce-11ed-a1eb-0242ac120002" //service provider Org
* entry[=].resource = 840b4046-81ce-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Provenance/a7cf3888-6f42-4e4d-929c-d2475d24fba0" //admit
* entry[=].resource = a7cf3888-6f42-4e4d-929c-d2475d24fba0
* entry[+].fullUrl = "Provenance/g9942adb-197a-4e30-bec8-566e3a113efe"
* entry[=].resource = g9942adb-197a-4e30-bec8-566e3a113efe


// use cases associated with acute ambulant hospitalization


Instance: h1c8e4a8-6b45-4669-94ad-2a99ad96bf03
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - STAA"
Description: "Example of MedComHospitalNotificationMessage 'Start hospital stay - acute ambulant'"
* type = $BundleType#message
* timestamp = 2022-12-01T10:00:05+02:00
* entry[+].fullUrl = "MessageHeader/i50fc5fe-2d11-4ef3-acac-2e2e5c6c0029"
* entry[=].resource = i50fc5fe-2d11-4ef3-acac-2e2e5c6c0029
* entry[+].fullUrl = "Patient/fdc1fc66-81d0-11ed-a1eb-0242ac120002"
* entry[=].resource = fdc1fc66-81d0-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Encounter/h2cb16ce-af8c-46f3-be9e-89406ef3e7b5"
* entry[=].resource = h2cb16ce-af8c-46f3-be9e-89406ef3e7b5
* entry[+].fullUrl = "Organization/103fbebe-81d1-11ed-a1eb-0242ac120002"
* entry[=].resource = 103fbebe-81d1-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/1f5882b4-81d1-11ed-a1eb-0242ac120002" //service provider Org
* entry[=].resource = 1f5882b4-81d1-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Provenance/h60bd482-9c47-43c5-9b77-1134eaa2d5f0"
* entry[=].resource = h60bd482-9c47-43c5-9b77-1134eaa2d5f0


Instance: kcab461b-f44e-4d97-a041-ef7e64800587
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - SLHJ (acute ambulant)"
Description: "Example of MedComHospitalNotificationMessage 'End hospital stay - patient completed to home/primary sector' (acute ambulant)"
* type = $BundleType#message
* timestamp = 2022-12-02T22:00:10+02:00
* entry[+].fullUrl = "MessageHeader/m9bea09c-e662-4d59-b84f-9af570b57f42"
* entry[=].resource = m9bea09c-e662-4d59-b84f-9af570b57f42
* entry[+].fullUrl = "Patient/6c16f41e-81d1-11ed-a1eb-0242ac120002"
* entry[=].resource = 6c16f41e-81d1-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Encounter/kbbad98c-3310-404a-af0c-7e3739d7b49f"
* entry[=].resource = kbbad98c-3310-404a-af0c-7e3739d7b49f
* entry[+].fullUrl = "Organization/e5682f5e-81d1-11ed-a1eb-0242ac120002"
* entry[=].resource = e5682f5e-81d1-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/0465ec66-81d2-11ed-a1eb-0242ac120002" //service provider Org
* entry[=].resource = 0465ec66-81d2-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Provenance/h60bd482-9c47-43c5-9b77-1134eaa2d5f0"
* entry[=].resource = h60bd482-9c47-43c5-9b77-1134eaa2d5f0
* entry[+].fullUrl = "Provenance/ka776a3e-3eca-407b-9f81-b8c16f089874" //discharge
* entry[=].resource = ka776a3e-3eca-407b-9f81-b8c16f089874



//Example of MedComHospitalNotificationMessage patient deceased message
Instance: ld31e08a-b91f-49c3-841a-ce80e6380517
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - MORS (acute ambulant)"
Description: "Example of MedComHospitalNotificationMessage 'Deceased' (acute ambulant)"
* type = $BundleType#message
* timestamp = 2022-12-02T07:00:01+02:00
* entry[+].fullUrl = "MessageHeader/nabb68aa-c97b-4905-a60c-71ff3209fd51"
* entry[=].resource = nabb68aa-c97b-4905-a60c-71ff3209fd51
* entry[+].fullUrl = "Patient/384b4a58-81d2-11ed-a1eb-0242ac120002"
* entry[=].resource = 384b4a58-81d2-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Encounter/l001c640-6b5d-414c-b6bd-e00ec6d4ceee"
* entry[=].resource = l001c640-6b5d-414c-b6bd-e00ec6d4ceee
* entry[+].fullUrl = "Organization/55eb90b8-81d2-11ed-a1eb-0242ac120002"
* entry[=].resource = 55eb90b8-81d2-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/66c12a92-81d2-11ed-a1eb-0242ac120002" //service provider Org
* entry[=].resource = 66c12a92-81d2-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Provenance/h60bd482-9c47-43c5-9b77-1134eaa2d5f0"
* entry[=].resource = h60bd482-9c47-43c5-9b77-1134eaa2d5f0
* entry[+].fullUrl = "Provenance/l17de5f5-abb0-4701-93aa-6b0d7b4127bc"
* entry[=].resource = l17de5f5-abb0-4701-93aa-6b0d7b4127bc


// use cases associated with inpatient hospitalization
Instance: m908i967-9ie3-9023-b9ec-98108695f01d
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - STIN (different sender and serviceProvider)"
Description: "Example of MedComHospitalNotificationMessage 'Start hospital stay - admitted'. With different serviceProvider and sender Organization."
* type = $BundleType#message
* timestamp = 2022-12-07T12:00:01+02:00
* entry[+].fullUrl = "MessageHeader/o9b4818e-12de-5cc4-c418-d30cbc7b5404"
* entry[=].resource = o9b4818e-12de-5cc4-c418-d30cbc7b5404
* entry[+].fullUrl = "Patient/b00ea1c0-81d2-11ed-a1eb-0242ac120002"
* entry[=].resource = b00ea1c0-81d2-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/of839e87-4e44-4977-b38e-92b5a6f187b5" // service provider org
* entry[=].resource = of839e87-4e44-4977-b38e-92b5a6f187b5
* entry[+].fullUrl = "Encounter/m790f964-98d3-4852-bac8-83d2f3d035f8"
* entry[=].resource = m790f964-98d3-4852-bac8-83d2f3d035f8
* entry[+].fullUrl = "Organization/bea5b49e-81d2-11ed-a1eb-0242ac120002"
* entry[=].resource = bea5b49e-81d2-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Organization/cd72967c-81d2-11ed-a1eb-0242ac120002" 
* entry[=].resource = cd72967c-81d2-11ed-a1eb-0242ac120002
* entry[+].fullUrl = "Provenance/m7cf3888-6f52-5e4d-939c-d2575d24fba0"
* entry[=].resource = m7cf3888-6f52-5e4d-939c-d2575d24fba0

// use cases associated with inpatient hospitalization
Instance: n73ccf30-80b9-4bd2-bf50-1ac1914498f0
InstanceOf: MedComHospitalNotificationMessage
Title: "HospitalNotification Message - STIN (with two episodeOfCare-identifiers)"
Description: "Example of MedComHospitalNotificationMessage 'Start hospital stay - admitted' (with two episodeOfCare-identifiers)"
* type = $BundleType#message
* timestamp = 2022-12-07T12:00:01+02:00
* entry[+].fullUrl = "MessageHeader/1ca19ddf-31bc-4597-8739-968c38dd88f8"
* entry[=].resource = 1ca19ddf-31bc-4597-8739-968c38dd88f8
* entry[+].fullUrl = "Patient/545fd5e6-a924-11ed-afa1-0242ac120002"
* entry[=].resource = 545fd5e6-a924-11ed-afa1-0242ac120002
* entry[+].fullUrl = "Encounter/ne70f2b8-a924-11ed-afa1-0242ac120002"
* entry[=].resource = ne70f2b8-a924-11ed-afa1-0242ac120002
* entry[+].fullUrl = "Organization/a8ec5ae1-e324-453d-9d9f-39ffe41f308a"
* entry[=].resource = a8ec5ae1-e324-453d-9d9f-39ffe41f308a
* entry[+].fullUrl = "Organization/2565d3de-082e-4368-9160-4c719071026b" 
* entry[=].resource = 2565d3de-082e-4368-9160-4c719071026b
* entry[+].fullUrl = "Provenance/4e9f2c26-9d9b-4239-ade6-e26c130e855e"
* entry[=].resource = 4e9f2c26-9d9b-4239-ade6-e26c130e855e


---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/fsh/MedComHospitalNotificationMessageHeader.fsh

Profile: MedComHospitalNotificationMessageHeader
Parent: MedComMessagingMessageHeader
Id: medcom-hospitalNotification-messageHeader
Description: "MessageHeader for a HospitalNotification message."
* id ^short = "A unique identifier for each message. This identifier should be globally unique."
* eventCoding = $MessageEvents#hospital-notification-message
* destination[cc] ..0
* focus 1..1 MS
* focus only Reference(MedComHospitalNotificationEncounter)
* focus ^type.aggregation = #bundled
* extension contains MedComHospitalNotificationReportOfAdmissionExtension named reportOfAdmissionFlag ..1
* extension contains MedComHospitalNotificationReportOfAdmissionRecipientExtension named reportOfAdmissionRecipient ..1
* extension[reportOfAdmissionFlag] MS SU
* extension[reportOfAdmissionFlag] ^definition = "Shall be set to true if recipient is requested to send a report of admission"
* extension[reportOfAdmissionRecipient] MS SU
* extension[reportOfAdmissionRecipient] ^definition = "Shall contain recipient of report of admission if the recipient is not the sender of the hospital notification"
* event[x] ^short = "The MedComMessagingMessageHeader shall contain the event value hospital-notification-message"


Instance: b4e7e16b-9658-4172-acd7-5e7193f2cc5f
InstanceOf: MedComMessagingDestinationUseExtension
Usage: #inline
* valueCoding = $Use#primary

Instance: a1b27813-8aa8-4fa1-846b-aeabf5afb7d4
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - STIN"
Description: "Example of MedComHospitalNotificationMessageHeader 'Start hospital stay - admitted'. Without request for a reportOfAdmission. Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(o4cdf292-abf3-4f5f-80ea-60a48013ff6d)
* sender = Reference(o7056980-a8b2-42aa-8a0e-c1fc85d1f40d)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(a790f964-88d3-4652-bbc8-81d2f3d035f8)

// admit message 
Instance: b9b4818e-02de-4cc4-b418-d20cbc7b5404
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - STIN (including reportOfAdmissionFlag = 'true')"
Description: "Example of MedComHospitalNotificationMessageHeader 'Start hospital stay - admitted'. reportOfAdmissionFlag is 'true'. Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(o4cdf292-abf3-4f5f-80ea-60a48013ff6d)
* sender = Reference(o7056980-a8b2-42aa-8a0e-c1fc85d1f40d)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(a790f964-88d3-4652-bbc8-81d2f3d035f8)
* extension[reportOfAdmissionFlag].valueBoolean = true
* extension[reportOfAdmissionRecipient].valueReference = Reference(o7056980-a8b2-42aa-8a0e-c1fc85d1f40d)

// admit message 
Instance: cc47c1e2-78e6-4291-b071-f423a4f7fbfe
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - RE_STIN."
Description: "Example of MedComHospitalNotificationMessageHeader 'Revise Start hospital stay - admitted'. Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(8858e7e6-81c6-11ed-a1eb-0242ac120002)
* sender = Reference(abb09e14-81c6-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(b9846c24-0335-11ed-b939-0242ac120002)

// admit message 
Instance: d8749b54-1aeb-4089-8941-8d876bdffc51
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - AN_STIN."
Description: "Example of MedComHospitalNotificationMessageHeader 'Cancellation Start hospital stay - admitted'. Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(eefc2dfa-81c6-11ed-a1eb-0242ac120002)
* sender = Reference(05266a00-81c7-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(c9782061-ce63-41b5-8be6-655812d23332)

Instance: e563a2b2-bf92-4b13-bbd2-0a021a95bded
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - STOR."
Description: "Example of MedComHospitalNotificationMessageHeader 'Start leave'. Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(a39d4a04-81c8-11ed-a1eb-0242ac120002)
* sender = Reference(b79a7914-81c8-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(d56e9c54-23d2-43a4-816e-951d2a6e3281)

Instance: f47254da-f170-46f0-b624-4778a9c92b1f
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - SLOR."
Description: "Example of MedComHospitalNotificationMessageHeader 'End leave'. Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(55ba5884-81ca-11ed-a1eb-0242ac120002)
* sender = Reference(5961ade8-81ca-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(e07c4bd4-cfad-4c4d-9c4b-e4ba3424a65b)

Instance: g1affa53-c157-4080-abb0-8e681524f969
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - SLHJ (inpatient)."
Description: "Example of MedComHospitalNotificationMessageHeader 'End hospital stay - patient completed to home/primary sector' (inpatient). Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(7e692262-81cd-11ed-a1eb-0242ac120002)
* sender = Reference(8d813af0-81cd-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(f405ba2d-467a-4e92-9acc-9dc2a629760f)

// Discharge message - patient discharged as deceased
Instance: hefc6d95-6161-4493-99c9-f359488dedb8
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - MORS (inpatient)."
Description: "Example of MedComHospitalNotificationMessageHeader 'Deceased' (inpatient). Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(753bdcba-81ce-11ed-a1eb-0242ac120002)
* sender = Reference(840b4046-81ce-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(gcab7218-9584-11ec-b909-0242ac120002)


// Use cases associated with acute ambulant hospitalization

Instance: i50fc5fe-2d11-4ef3-acac-2e2e5c6c0029
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - STAA."
Description: "Example of MedComHospitalNotificationMessageHeader 'Start hospital stay - acute ambulant'. reportOfAdmissionFlag is 'true'. Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(103fbebe-81d1-11ed-a1eb-0242ac120002)
* sender = Reference(1f5882b4-81d1-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(h2cb16ce-af8c-46f3-be9e-89406ef3e7b5)
* extension[reportOfAdmissionFlag].valueBoolean = true
* extension[reportOfAdmissionRecipient].valueReference = Reference(1f5882b4-81d1-11ed-a1eb-0242ac120002)

// admit message 
Instance: j3675c4a-33db-40f1-b578-ff16e3e9134c
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - STAA."
Description: "Example of MedComHospitalNotificationMessageHeader 'Start hospital stay - acute ambulant'. Without request for a reportOfAdmission. Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(103fbebe-81d1-11ed-a1eb-0242ac120002)
* sender = Reference(1f5882b4-81d1-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(h2cb16ce-af8c-46f3-be9e-89406ef3e7b5)


Instance: m9bea09c-e662-4d59-b84f-9af570b57f42
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - SLHJ (acute ambulant)."
Description: "Example of MedComHospitalNotificationMessageHeader 'End hospital stay - patient completed to home/primary sector' (acute ambulant). Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(e5682f5e-81d1-11ed-a1eb-0242ac120002)
* sender = Reference(0465ec66-81d2-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(kbbad98c-3310-404a-af0c-7e3739d7b49f)

// Discharge message - patient discharged as deceased
Instance: nabb68aa-c97b-4905-a60c-71ff3209fd51
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - MORS (acute ambulant)."
Description: "Example of MedComHospitalNotificationMessageHeader 'Deceased' (acute ambulant). Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(55eb90b8-81d2-11ed-a1eb-0242ac120002)
* sender = Reference(66c12a92-81d2-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(l001c640-6b5d-414c-b6bd-e00ec6d4ceee)

// admit message 
Instance: o9b4818e-12de-5cc4-c418-d30cbc7b5404
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - STIN (different serviceProvider and sender organisation)"
Description: "Example of MedComHospitalNotificationMessageHeader 'Start hospital stay - admitted'. With different serviceProvider and sender organisation. Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(bea5b49e-81d2-11ed-a1eb-0242ac120002)
* sender = Reference(cd72967c-81d2-11ed-a1eb-0242ac120002)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(m790f964-98d3-4852-bac8-83d2f3d035f8)


// admit message 
Instance: 1ca19ddf-31bc-4597-8739-968c38dd88f8
InstanceOf: MedComHospitalNotificationMessageHeader
Title: "HospitalNotification MessageHeader - STIN (With two episodeOfCare-identifiers)"
Description: "Example of MedComHospitalNotificationMessageHeader 'Start hospital stay - admitted'. With two episodeOfCare-identifiers. Only Valid if used in a Bundle."
* destination[primary].extension[use] = b4e7e16b-9658-4172-acd7-5e7193f2cc5f
* eventCoding = $MessageEvents#hospital-notification-message
* destination[primary].endpoint = "https://sor2.sum.dsdn.dk/#id=953741000016009"
* destination[primary].receiver = Reference(a8ec5ae1-e324-453d-9d9f-39ffe41f308a)
* sender = Reference(2565d3de-082e-4368-9160-4c719071026b)
* source.endpoint = "https://sor2.sum.dsdn.dk/#id=265161000016000"
* focus = Reference(ne70f2b8-a924-11ed-afa1-0242ac120002)


---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/fsh/MedComHospitalNotificationReportOfAdmissionExtension.fsh

Extension: MedComHospitalNotificationReportOfAdmissionExtension
Id: medcom-messaging-reportOfAdmissionExtension
Title: "MedComReportOfAdmissionExtension"
Description: "Indicates whether the recipient should send a report of admission"
* value[x] 1..1
* value[x] only boolean


---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/fsh/MedComHospitalNotificationReportOfAdmissionRecipientExtension.fsh

Extension: MedComHospitalNotificationReportOfAdmissionRecipientExtension
Id: medcom-messaging-reportOfAdmissionRecipientExtension
Title: "MedComReportOfAdmissionRecipientExtension"
Description: "Recipient of a report of admission response"
* value[x] 1..1
* value[x] only Reference(MedComMessagingOrganization)


---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/pagecontent/downloads.md

The following sections lists various links and artifacts that may be useful during development

### Tools, frameworks and supported programming languages
- See [https://hl7.org/fhir/R4/downloads.html](https://hl7.org/fhir/R4/downloads.html)

### Examples

Autogenerated examples are available for download:

- [XML](examples.xml.zip)
- [JSON](examples.json.zip)

### Downloadable Copy of schematrons

A downloadable version of profiles and extensions used in this IG is available for download (npm format):

- [Downloadable Copy](package.tgz)

---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/pagecontent/index.md

### Introduction

This implementation guide (IG) is provided by MedCom to describe the use of FHIR &reg;&copy; in message based exchange of data in Danish healthcare.

The IG contains profiles for MedCom HospitalNotification (Dansk: Sygehusadvis), which is used to inform a municipality about hospitalization of a patient. The HospitalNotification contributes to securing the foundation for a coherent clinical pathway across sectors. The specific purpose of the HospitalNotification is to inform the citizen's current care and health provider in the primary sector about the start and end of the citizen's stay at the hospital. It makes it possible to pause the current care and health providers' services during the hospital stay and resume them when it ends. At the same time, the HospitalNotification can trigger the automatic sending of Report of Admission ([XDIS16](https://svn.medcom.dk/svn/releases/Standarder/National%20Sygehus-Kommunesamarbejde/1.0.3/XDIS16/Dokumentation/)) from the receiver's system, which gives the health professionals an overview of the citizen's current services, level of function and health-related problems. The HospitalNotification also contains notification of the patient's leave from the hospital stay and acute ambulant care.

Profiles used in HospitalNotification are not as open as other profiles because the message is automatically sent and thus not based on a patient consent. The legislation permits this exchange, but the message shall not contain more information than necessary.

More information about the [clinical guidelines and legislation](https://medcomdk.github.io/dk-medcom-hospitalnotification/) can be found here.

#### HospitalNotification Message

The following diagram depicts the structure of the HospitalNotification message.

<img alt="Shows the structure of a HospitalNotification message. The MedComHospitalNotificationMessage includes a MedComHospitalNotificationMessageHeader and a MedComMessagingProvenance. MedComHospitalNotificationMessageHeader references a sender and receiver organization, the MedComMessagingOrganization and a focus which is a reference to a MedComHospitalNotificationEncounter. From the MedComHospitalNotificationEncounter is a MedComCorePatient and a MedComCoreOrganization referenced." src="./hospitalnotification/HospitalNotification.svg" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

The HospitalNotification message follows the general MedCom FHIR messaging structure, except that the carbon-copy destination is not allowed. The following sections describe the overall purpose of each profile.

##### MedComHospitalNotificationMessage

The [MedComHospitalNotificationMessage](http://medcomfhir.dk/ig/hospitalnotification/StructureDefinition-medcom-hospitalNotification-message.html) profile constrains the [MedComMessagingMessage](http://medcomfhir.dk/ig/messaging/StructureDefinition-medcom-messaging-message.html) to further use the MedComHospitalNotificationMessageHeader and to require exactly one patient resource in the message. Furthermore, it constrains the Provenance.activity to contain only activities from the MedComHospitalNotificationMessageActivities ValueSet.

All referenced resources within the message shall be contained in the entry list in MedComHospitalNotificationMessage.

##### MedComHospitalNotificationMessageHeader

The [MedComHospitalNotificationMessageHeader](http://medcomfhir.dk/ig/hospitalnotification/StructureDefinition-medcom-hospitalNotification-messageHeader.html) profile constrains the [MedComMessagingMessageHeader](http://medcomfhir.dk/ig/messaging/StructureDefinition-medcom-messaging-messageHeader.html) further to specify the fixed coding for this message and require a focus of the message to be a MedComHospitalNotificationEncounter. 

##### MedComHospitalNotificationEncounter

The [MedComHospitalNotificationEncounter](http://medcomfhir.dk/ig/hospitalnotification/StructureDefinition-medcom-hospitalNotification-encounter.html) profile contains the main clinical content of the message. It constrains the [MedComCoreEncounter](http://medcomfhir.dk/ig/core/StructureDefinition-medcom-core-encounter.html) further to require a episodeOfCare-identifier and restricts the status and class to ValueSet of relevant values. The start time of the encounter and a reference to the service provider organization are also mandatory. Most other values are disallowed due to the legislation.

##### MedComMessagingProvenance

The [MedComMessagingProvenance](http://medcomfhir.dk/ig/messaging/StructureDefinition-medcom-messaging-provenance.html) profile is used to track information about the activity of the notification, e.g. if the message describes a 'start hospital stay - inpatient' or 'end leave'. The allowed activity codes for a HospitalNotification message can be found in [MedComHospitalNotificationMessageActivityCodes ValueSet](http://medcomfhir.dk/ig/terminology/ValueSet-medcom-hospitalNotification-messageActivities.html) on the Terminology IG. 

In cases of a previously sent HospitalNotification message, MedComMessagingProvenance references the lateste message which makes it possible to create a historic overview of the admission. 

##### MedComCorePatient
The [MedComCorePatient](http://medcomfhir.dk/ig/core/StructureDefinition-medcom-core-patient.html) profile is used in a HospitalNotification message. However, a HospitalNotification message may only be exchanged for patients with an official Danish civil person register (CPR)-number.

##### MedComCoreOrganization
The [MedComCoreOrganization](http://medcomfhir.dk/ig/core/StructureDefinition-medcom-core-organization.html) profile is used in a HospitalNotification message to describe the serviceprovider organisation, which is the organisation responsible for the patient's admission.

##### MedComMessagingOrganization
The [MedComMessagingOrganization](http://medcomfhir.dk/ig/messaging/StructureDefinition-medcom-messaging-organization.html) profile is used in a HospitalNotification message to describe the sender and primary receiver of the notification. Please notice, that carbon-copy receiver is not allowed in a HospitalNotification message.

#### Timestamps 

HospitalNotification messages are generated and sent based on real-time registration in the EPR/PAS system. In case the EPR allows future registrations of planned contacts or a period of leave, the HospitalNotifications shall only be triggered when the event occurs, i.e. at the patient's physical attendance, as described in the [Clinical guidelines for application](https://medcomdk.github.io/dk-medcom-hospitalnotification/#11-clinical-guidelines-for-application). 

The HospitalNotification message contains several timestamps. These timestamps are present in the profiles MedComHospitalNotificationEncounter, MedComHospitalNotificationMessage and MedComMessagingProvenance and have different purposes: 

* Encounter-timestamps represent the time of an event. For receiving systems, this is the timestamps that must be displayed for the end user in the HospitalNotification as ‘date and time of start/end for the event’. [The usage of these timestamps is more thoroughly described here.](http://medcomfhir.dk/ig/hospitalnotification/StructureDefinition-medcom-hospitalNotification-encounter.html)
* Bundle.timestamp represents the time bundle is generated.
* Provenance.occuredDateTime[x] represents the time the HospitalNotification is sent, in a human-readable time
* Provenance.recorded represents the time the HospitalNotification is sent, in a machine-readable time


#### ID's

All profiles shall have a global unique id by using an UUID. [Read more about the use of ids here](https://medcomdk.github.io/MedCom-FHIR-Communication/assets/documents/052.2_MessageHeader_Identifiers_Timestamps.html).

#### Simplified examples of the HospitalNotification message flow

The simplified examples contain the required content of a HospitalNotification message. Throughout this section different activity codes and statuses are used. [To get an overview of all the codes and statuses, please go to GitHub pages for HospitalNotification](https://medcomdk.github.io/dk-medcom-hospitalnotification/#14-hospitalnotification-codes).

In the sections below is a limited number HospitalNotifications simplified examples. [More examples of a HospitalNotification message can be found here](http://medcomfhir.dk/ig/hospitalnotification/StructureDefinition-medcom-hospitalNotification-message-examples.html). For examples of a profile, take a look under the tab 'Examples' on the site for the given profile.

> Please notice, that in the following examples is the resources listed as an array. This is just an example of an order, resources may be listed in any order. 

##### STIN - Start hospital stay - admitted
The simplified example below is an example of a 'Start hospital stay - admitted' HospitalNotification. In the MessageHeader there is a request for a reportOfAdmission (extension:reportOfAdmissionFlag). In the Encounter instance the status is 'in-progress', and the Encounter is populated with a start timestamp (period.start). In the Provenance instance is the activity code 'admit-inpatient'. The sender and serviceProvider organisation is the same. 

* [1 - Simplified example of 'Start hospital stay - admitted'](./hospitalnotification/HNAdmitInPat.svg)

[Click here to see the generated example of simplified example number 1.](https://medcomfhir.dk/ig/hospitalnotification/Bundle-a5e5b880-c087-4055-b9ec-99108695f81d.html)

##### STOR - Start leave
The simplified example below is an example of a 'Start leave' HospitalNotification which is sent in continuation of simplified example number 1. The status in the Encounter is changed from 'in-progress' to 'onleave', and the Encounter is populated with a start timestamp for the period of leave (extension:leavePeriod.start). In the Provenance instance is the activity code 'start-leave-inpatient'. The sender and serviceProvider organisation is the same. 

* [2 - Simplified example of 'Start leave'](./hospitalnotification/HNstartOnleave.svg)

[Click here to see the generated example of simplified example number 2.](https://medcomfhir.dk/ig/hospitalnotification/Bundle-d3128d9b-cede-4c7f-8904-809eab322d7d.html)

##### SLOR - End leave
The simplified example below is an example of a 'End leave' HospitalNotification which is sent in continuation of simplified example number 2. The status in the Encounter is changed from 'onleave' to 'in-progress', and the Encounter is populated with a end timestamp for the period of leave (extension:leavePeriod.end). In the Provenance instance is the activity code 'end-leave-inpatient'. The sender and serviceProvider organisation is the same. 

* [3 - Simplified example of 'End leave'](./hospitalnotification/HNendOnleave.svg)

[Click here to see the generated example of simplified example number 3.](https://medcomfhir.dk/ig/hospitalnotification/Bundle-e94de8ee-bd94-475e-b454-b8fbbef8a685.html)

##### SLHJ - End hospital stay - patient completed to home/primary sector (inpatient)
The simplified example below is an example of a 'End hospital stay - patient completed to home/primary sector' HospitalNotification which is sent in continuation of simplified example number 1. The status in the Encounter is changed from 'in-progress' to 'finished', and the Encounter is populated with a timestamp indicating end of the encounter (period.end). In the Provenance instance is the activity code 'discharge-inpatient-home'. The sender and serviceProvider organisation is the same. 

* [4 - Simplified example of 'End hospital stay - patient completed to home/primary sector'](./hospitalnotification/HNdischargeInPat.svg)

[Click here to see the generated example of simplified example number 4.](https://medcomfhir.dk/ig/hospitalnotification/Bundle-f4aa42a4-86db-4e68-9b38-9dda0dfd5774.html)

##### MORS - Deceased (inpatient)
The simplified example below is an example of a 'Deceased' HospitalNotification which is sent in continuation of simplified example number 1. The status in the Encounter is changed from 'in-progress' to 'finished', and the Encounter is populated with a timestamp indicating end of the encounter (period.end) i.e. the death of the patient. The element Patient.deceased is sat to 'true', indicating that the patient is deceased. In the Provenance instance is the activity code 'admit-inpatient', as it shall remain the current activity. The sender and serviceProvider organisation is the same. 

* [5 - Simplified example of 'Deceased'](./hospitalnotification/HNdeceasedInPat.svg)

[Click here to see the generated example of simplified example number 5.](https://medcomfhir.dk/ig/hospitalnotification/Bundle-g099bbf3-3fca-4722-a248-bfe1aa956410.html)

##### AN_STIN - Cancellation Start hospital stay - admitted
The simplified example below is an example of a 'Cancellation Start hospital stay - admitted' HospitalNotification which is sent in continuation of simplified example number 1. In the Provenance instance the activity code is changed to 'cancel-admit-inpatient' and the entity.what is now 'removal' indicating that the previous message is cancelled. The sender and serviceProvider organisation is the same. 

* [6 - Simplified example of 'Cancellation Start hospital stay - admitted'](./hospitalnotification/HNcancelEnteredInError.svg)

[Click here to see the generated example of simplified example number 6.](https://medcomfhir.dk/ig/hospitalnotification/Bundle-c83671a4-9584-11ec-b909-0242ac120002.html)


#### Terminology
On [MedCom Terminology IG](http://medcomfhir.dk/ig/terminology/) all referenced CodeSystem and ValueSets developed by MedCom can be found.

#### Dependencies
This IG has a dependency to the [MedCom Core IG](http://medcomfhir.dk/ig/core/), [MedCom Messaging IG](http://medcomfhir.dk/ig/messaging/) and [DK-core v. 2.0.0](https://hl7.dk/fhir/core/), where the latter is defined by [HL7 Denmark](https://hl7.dk/). This is currently reflected in MedComHospitalNotificationMessage, MedComHospitalNotificationMessageHeader and MedComHospitalNotificationEncounter which all inherits from profiles defined in MedComCore or MedComMessaging IG. Further, it is reflected in references to MedComCorePatient, MedComCoreOrganization and MedComMessagingOrganization.

### Download
Content in this IG can be downloaded in npm format under [Download](https://medcomfhir.dk/ig/hospitalnotification/downloads.html). This can be used to validate locale FHIR profiles against.

### Documentation

On the [introduction page for HospitalNotification](https://medcomdk.github.io/dk-medcom-hospitalnotification/) the following documentation can be found: 
* Clinical guidelines
* Use cases
* Overview of codes used a HospitalNotification message
* Mapping document from the previous OIOXML standard (XDIS17 and XDIS20) to HospitalNotification

### Governance

MedComs FHIR profiles and extension are managed in GitHub under MedCom: [Source code](https://github.com/medcomdk/dk-medcom-hospitalnotification)

A description of [governance concerning change management and versioning](https://medcomdk.github.io/MedComLandingPage/#4-change-management-and-versioning) of MedComs FHIR artefacts, can be found on the link.

#### Quality Assurance Report

In the Quality Assurance report (QA-report) for this IG, there is an error with the following description: *Reference is remote which isn’t supported by the specified aggregation mode(s) for the reference (bundled)*. The error occurs when creating instances of the profiles and is due to some elements having a Bundled flag {b}, however the referenced profile is not included in a Bundle in an instance, since the instance only represents a part of the entire message. This should not influence the implementation by IT-vendors.

### Contact 

[MedCom](https://www.medcom.dk/) is responsible for this IG.

If you have any questions, please contact <fhir@medcom.dk> or write to MedCom's stream in [Zulip](https://chat.fhir.org/#narrow/stream/315677-denmark.2Fmedcom.2FFHIRimplementationErfaGroup).


---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/pagecontent/StructureDefinition-medcom-hospitalNotification-encounter-intro.md

### Scope and usage 
This profile is used as the Encounter resource for the HospitalNotification message. The HospitalNotificationEncounter inherits from the MedComCoreEncounter. 
Besides the references shown on the figure below, the MedComHospitalNotificationEncounter contains an episode of care identifier (Danish: forløbsid), a status describing the status of the encounter e.g., if the patient is *onleave* and the class of the admission, which can be either *inpatient* or *emergency*. Both status and class shall be included in all messages and depending on the status of the encounter, the status and class shall be assigned to different codes. [Here you the find the combination of codes](https://medcomdk.github.io/dk-medcom-hospitalnotification/#hospitalnotification-codes-in-fhir).

The HospitalNotification message is sent without patient consent, why only a limited data set is allowed to transmit due to Danish legislation. For this reason, is the HospitalNotificationEncounter profile quite narrow. <a href="https://medcomdk.github.io/dk-medcom-hospitalnotification/#clinical-guidelines" target="_blank">More information about the legal aspects can be found here</a>. 

The figure below shows the references from a MedComHospitalNotificationEncounter.

<img alt="The MedComHospitalNotificationEncounter references a subject which is a MedComCorePatient and a serviceProvider organization which is a MedComCoreOrganization." src="./hospitalnotification/HospitalNotificationEncounter.svg" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

Please refer to the tab "Snapshot Table(Must support)" below for the definition of the required content of a MedComHospitalNotificationEncounter.

### Service Provider

The element Encounter.serviceProvider describes the organization or hospital department in charge of the patient's admission. 
The element references a MedComMessagingOrganization or MedComCoreOrganization, since MedComMessaigingOrganization inherits properties from MedComCoreOrganization.

The sender of a HospitalNotification (MessageHeader.sender) and the serviceProvider (Encounter.serviceProvider) may be the same hospital department, hence be represented referencing the same instance of a Organization resource, which shall be a MedComMessagingOrganization. However, the sender organisation may be a higher-level department (in the SOR register) than the serviceProvider organisation, and in this case they shall be represented referencing two different instances of a Organization resource.

[An example of different serviceProvider and sender organisation can be found here](http://medcomfhir.dk/ig/hospitalnotification/Bundle-m908i967-9ie3-9023-b9ec-98108695f01d.html). Other examples will have the same organisation as serviceProvider and sender.

### Episode of care identifier
The MedComHospitalNotificationEncounter profile requires at least one episode of care identifiers to be included, but allows more than one to be included. The episode of care identifier can be a locally defined UUID for the specific admission/contact or it can be an LPR3 identifier. The identifier is used for linking messages exchanged during a specific message flow. Hence, the episode of care identifier send and received in the initial HospitalNotification message must also be returned in e.g ReportOfAdmission (Danish: Indlæggelsesrapport), ProgressOfCarePlan (Danish: Plejeforløbsplan), CareCommunication (Danish: Korrespondancemeddelelse) etc.
 
**In case only one episode of care identifier is included in the initial HospitalNotification message, either a locally defined UUID for the specific admission/contact or an LPR3 identifier:** The following messages exchanged must apply/return this episode of care identifier, regardless of whether it is a locally defined UUID or an LPR3 identifier. If more identifiers are subsequently added, these can be ignored (or returned if possible).
 
**In case more episode of care identifiers are included in the initial HospitalNotification message:** The following messages exchanged must return the locally defined UUID for the specific admission/contact. The other identifiers can be ignored (or returned if possible).

#### System for locally defined episode of care identifiers
When a locally defined identifier for the specific admission/contact is included in a HospitalNotification message, a system for the identifier shall also be included. The system is used to destinguish between the LPR3 identifier and the locally defined identifier. The system is found at Encounter.episodeOfCare.identifier.system in the profile. The datatype of the system is Unique Resource Identifier Reference (uri), meaning that the system must be absolut or relative unique. It is recommended to use SOR-endpoint, which is also definied in the MessageHeader.source.endpoint. This is shown in the XML-snippet and examples below.

```xml
 <episodeOfCare>
    <identifier>
      <system value="https://sor2.sum.dsdn.dk/#id=265161000016000"/>
      <value value="bd481c38-a921-11ed-afa1-0242ac120002"/>
    </identifier>
  </episodeOfCare>
```

[A simplified example with two episode of care identifieres can be found here](./hospitalnotification/HNAdmitInPatEoC.svg) and [a FHIR example with two episode of care identifieres can be found here](http://medcomfhir.dk/ig/hospitalnotification/Bundle-n73ccf30-80b9-4bd2-bf50-1ac1914498f0.html) Other examples will have just one episode of care identifier.

### Timestamps 

The Encounter profile contains four timestamps each representing a different time during a hospitalisation. Common for the four timestamps is that they represent the time of the event, e.g. the patient's physical attendance at the hospital (Encounter.period.start) or a patient going on leave from the hospital (Encounter.extension:leavePeriod.start).  

|FHIR-element|Description|Event|See Encounter example|
|-----|------|------| ------| 
|Encounter.period.start|Start hospital stay, i.e. the actual beginning of the meeting between the health care professional and patient|Patient's physical attendance at the hospital|[HospitalNotification Encounter - STIN](https://medcomfhir.dk/ig/hospitalnotification/Encounter-a790f964-88d3-4652-bbc8-81d2f3d035f8.html) and [HospitalNotification Encounter - STAA](https://medcomfhir.dk/ig/hospitalnotification/Encounter-h2cb16ce-af8c-46f3-be9e-89406ef3e7b5.html)|
|Encounter.period.end|End hospital stay, i.e. the actual end of the meeting between the health care professional and patient|Patient leaves the hospital after discharge or when a patient dies (on arrival or during hospital stay)| [HospitalNotification Encounter - SLHJ (inpatient)](https://medcomfhir.dk/ig/hospitalnotification/Encounter-f405ba2d-467a-4e92-9acc-9dc2a629760f.html) and [HospitalNotification Encounter - MORS (inpatient)](https://medcomfhir.dk/ig/hospitalnotification/Encounter-gcab7218-9584-11ec-b909-0242ac120002.html)|
|Encounter.extension:leavePeriod.start|Patient starts leave, i.e. the actual beginning of a leave-period|Patient leaves the hospital to go on leave.|[HospitalNotification Encounter - STOR](https://medcomfhir.dk/ig/hospitalnotification/Encounter-d56e9c54-23d2-43a4-816e-951d2a6e3281.html)|
|Encounter.extension:leavePeriod.end|Patient ends leave, i.e. the actual end of a leave-period|Patient's physical attendance at the hospital after a period of leave|[HospitalNotification Encounter - SLOR](https://medcomfhir.dk/ig/hospitalnotification/Encounter-e07c4bd4-cfad-4c4d-9c4b-e4ba3424a65b.html)|

#### Start and end of hospital stay
As described above, the timestamp of start and end of hospital stay are included in the elements Encounter.period.start and Encounter.period.end, respectively. 
Encounter.period.start shall always be present, also when sending a HospitalNotification describing a period of leave or end or hospital stay. 

In cases where a patient is transferred to a hospital in the same region or in another region, or a hospitalisation changes from 'acute ambulant' to 'inpatient', a new start hospital stay HospitalNotification shall be sent. These three cases shall result in a new instance of the Encounter profile which has a new Encounter.period.start representing the time of the change in the hospitalisation. All cases are described in the [Clinical guidelines for application](https://medcomdk.github.io/dk-medcom-hospitalnotification/#11-clinical-guidelines-for-application).

#### Leave
To express the timestamps for a period of leave, the MedComHospitalNotificationLeavePeriodExtension shall be used. 

When a patient goes on leave the Encounter.extension:leavePeriod.start shall be used, and when the patient returns from leave both Encounter.extension:leavePeriod.start and Encounter.extension:leavePeriod.end shall be present. 

The cardinality of MedComHospitalNotificationLeavePeriodExtension is 0..1 meaning that only one period of leave can be included in a HospitalNotification to avoid confusion about which period of leave is the current. In case a patient goes on leave several times during the same hospitalisation, the period shall be described in separate HospitalNotifications, that are being sent when each period of leave occurs. 

#### Death
When a patient dies either on arrival or during hospital stay, the timestamp Encounter.period.end represents the time the encounter ended i.e the time of death. The Encounter.period.start shall also be populated. If a patient dies on arrival Encounter.period.start shall be equal to Encounter.period.end, and if the patient dies during hospital stay Encounter.period.start shall represent the actual beginning of the hospital stay. A HospitalNotification can only be interpreted as describing a deceased patient when the element Patient.deaceased = 'true'.  


---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/pagecontent/StructureDefinition-medcom-hospitalNotification-message-intro.md

### Scope and usage 
This profile is the root profile of MedCom HospitalNotification message. This profile is inherited from the MedComMessagingMessage.
The following figure represent the profiles that shall be included in a MedCom FHIR HospitalNotification message.

<img alt="Shows the structure of a HospitalNotification message. The MedComHospitalNotificationMessage includes a MedComHospitalNotificationMessageHeader and a MedComMessagingProvenance. MedComHospitalNotificationMessageHeader references a sender and receiver organization in terms of the MedComMessagingOrganization, and a focus which is a reference to a MedComHospitalNotificationEncounter. From the MedComHospitalNotificationEncounter is a MedComCorePatient and a MedComCoreOrganization referenced." src="./hospitalnotification/HospitalNotification.svg" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

The Bundle containing the HospitalNotification message is selfcontained, why it shall contain one instance of the MedComHospitalNotificationMessageHeader. By convention the cardinality is shown as 0..*.

Please refer to the tab "Snapshot Table(Must support)" below for the definition of the required content of a MedComHospitalNotificationMessage.  









---

File: repos/medcomdk_SLASH_dk-medcom-hospitalnotification/input/pagecontent/StructureDefinition-medcom-hospitalNotification-messageHeader-intro.md

### Scope and usage 
This profile is used as the MessageHeader resource for the MedCom HospitalNotification message. Constraints and rules from MedComMessagingMessageHeader are inherited to this profile, but MedComHospitalNotificationMessageHeader is further restricted as carbon-copy is not allowed.
The MedComHospitalNotificationMessageHeader contains an id which shall be globally unique for each message and an event code which shall be *hospital-notification-message* for a HospitalNotification message. Additionally, is it required to include a serviceprovider organization in the message.

<img alt="MedComHospitalNotificationMessageHeader references a sender and receiver organization in terms of the MedComMessagingOrganization, and a focus which is a reference to a MedComHospitalNotificationEncounter. From the MedComHospitalNotificationEncounter is a MedComCorePatient and a MedComCoreOrganization referenced." src="./hospitalnotification/HospitalNotificationMessageHeader.svg" style="float:none; display:block; margin-left:auto; margin-right:auto;" />

Please refer to the tab "Snapshot Table(Must support)" below for the definition of the required content of a MedComHospitalNotificationMessageHeader.

### Report of admission 

The request for a report of admission from a municipality shall  be sent when a patient is initially admitted either as an inpatient or emergency admission or when an patient admitted as an inpatient is moved to a hospital in another region. Technically this includes setting the MessageHeader.extension.reportOfAdmissionFlag to 'true' and include a reference to the receiver of the report of admission in the element MessageHeader.extension.reportOfAdmissionRecipient. Section 2.1, in the [use case document](https://medcomdk.github.io/dk-medcom-hospitalnotification/#12-use-cases) describes more thoroughly in which cases the report of admission flag shall be sat to 'true'. The request for a report of admission should be made automatically. 

---
