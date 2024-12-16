File: repos/IHE_SLASH_ITI.MHD/input/fsh/Aliases.fsh

Alias: ReasonCodeExtension = http://hl7.org/fhir/StructureDefinition/workflow-reasonCode
Alias: DCM = http://dicom.nema.org/resources/ontology/DCM

---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/audit-105.fsh

Profile:        AuditSimplifiedPublishRecipient
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.MHD.SimplifiedPublish.Audit.Recipient
Title:          "Audit Event for Simplified Publish ITI-105 Transaction at Recipient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Simplified Publish ITI-105 Transaction happens at the Recipient.
- Build off of the IHE Basic Audit Patient Create event
- add the ITI-105 as a subtype
- client is the Document Source
- Server is the Document Recipient
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have a documentReference identity entity
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti105 1..1
* subtype[iti105] = urn:ihe:event-type-code#ITI-105 "Simplified Publish"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Document Source"
* agent[server] ^short = "Document Recipient"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "DocumentReference"
* entity[data].what only Reference(DocumentReference)
// no good way to express that the Binary could also be indicated
//* entity contains binary 0..1
//* entity[binary] ^short = "May indicate the extracted Binary"
//* entity[binary].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
//* entity[binary].role from RestObjectRoles (required)
//* entity[binary].what 1..1
//* entity[binary].what only Reference(Binary)



Profile:        AuditSimplifiedPublishSource
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.MHD.SimplifiedPublish.Audit.Source
Title:          "Audit Event for Simplified Publish ITI-105 Transaction at Source"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Simplified Publish ITI-105 Transaction happens at the Soure.
- Build off of the IHE Basic Audit Patient Create event
- add the ITI-105 as a subtype
- client is the Document Source
- Server is the Document Recipient
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have a documentReference identity entity
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti105 1..1
* subtype[iti105] = urn:ihe:event-type-code#ITI-105 "Simplified Publish"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Document Source"
* agent[server] ^short = "Document Recipient"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "DocumentReference"
* entity[data].what only Reference(DocumentReference)



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/audit-106.fsh

Profile:        AuditGenerateMetadataRecipient
Parent:         IHE.BasicAudit.PatientCreate
Id:             IHE.MHD.GenerateMetadata.Audit.Recipient
Title:          "Audit Event for Generate Metadata ITI-106 Transaction at Recipient"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Generate Metadata ITI-106 Transaction happens at the Recipient.
- Build off of the IHE Basic Audit Patient Create event
- add the ITI-106 as a subtype
- client is the Document Source
- Server is the Document Recipient
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have a documentReference identity entity
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti106 1..1
* subtype[iti106] = urn:ihe:event-type-code#ITI-106 "Generate Metadata"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Document Source"
* agent[server] ^short = "Document Recipient"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "DocumentReference"
* entity[data].what only Reference(DocumentReference)


Profile:        AuditGenerateMetadataSource
Parent:         IHE.BasicAudit.Create
Id:             IHE.MHD.GenerateMetadata.Audit.Source
Title:          "Audit Event for Generate Metadata ITI-106 Transaction at Source"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Generate Metadata ITI-106 Transaction happens at the Soure.
- Build off of the IHE Basic Audit Create event
- add the ITI-106 as a subtype
- client is the Document Source
- Server is the Document Recipient
- may have user, app, organization agent(s)
- shall have a document uri
- note the Document Source may add a patient if it knows it.
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti106 1..1
* subtype[iti106] = urn:ihe:event-type-code#ITI-106 "Generate Metadata"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Document Source"
* agent[server] ^short = "Document Recipient"
* entity[data] ^short = "document"



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/audit-65.fsh

Profile:        AuditProvideBundleRecipient
Parent:         AuditEvent
Id:             IHE.MHD.ProvideBundle.Audit.Recipient
Title:          "Audit Event for Provide Bundle Transaction at Recipient"
Description:    "Defines constraints on the AuditEvent Resource to record when a Provide Bundle Transaction happens at the Recipient.
- Import event
- shall have source of itself
- shall have a document source agent
- shall have a document recipient agent
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have a submission set identity entity"
* modifierExtension 0..0
* type = DCM#110107 "Import"
* action = #C
* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 1..
* subtype contains iti65 1..1
* subtype[iti65] = urn:ihe:event-type-code#ITI-65 "Provide Document Bundle"
// * severity in R5
* recorded 1..1 // already required
* outcome 1..1
* outcomeDesc MS // encouraged
// source is already required, see invariant val-audit-source use
* agent 2..*
* agent ^slicing.discriminator.type = #pattern
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent ^slicing.description = "source, recipient, and possibly the user who participated"
* agent contains 
	documentSource 1..1 and
	documentRecipient 1..1 
	// may be many including app identity, user identity, etc
* agent[documentSource].type = DCM#110153 "Source Role ID"
* agent[documentSource].who 1..1
* agent[documentSource].network 1..1
* agent[documentRecipient].type = DCM#110152 "Destination Role ID"
* agent[documentRecipient].who 1..1
* agent[documentRecipient] obeys val-audit-source
* agent[documentRecipient].network 1..1
* agent[documentSource] ^short = "Document Source"
* agent[documentRecipient] ^short = "Document Recipient"
* entity 2..
* entity ^slicing.discriminator.type = #pattern
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity ^slicing.description = "patient and submission set involved"
* entity contains
	patient 1..1 and
	submissionSet 1..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[submissionSet].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[submissionSet].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[submissionSet].what 1..1
* entity[submissionSet].what only Reference(List) 
* entity[patient] ^short = "Patient"
* entity[submissionSet] ^short = "SubmissionSet"

Invariant: val-audit-source
Description: "The Audit Source is this agent too."
Expression: "$this.who = %resource.source.observer"
Severity: #error

Profile:        AuditProvideBundleSource
Parent:         AuditEvent
Id:             IHE.MHD.ProvideBundle.Audit.Source
Title:          "Audit Event for Provide Bundle Transaction at Source"
Description:    "Defines constraints on the AuditEvent Resource to record when a Provide Bundle Transaction happens at the Source.
- Export event
- shall have source of itself
- shall have a document source agent
- shall have a document recipient agent
- may have user, app, organization agent(s)
- shall have a patient entity
- shall have a submission set identity entity"
* modifierExtension 0..0
* type = DCM#110106 "Export"
* action = #R
* subtype ^slicing.discriminator.type = #value
* subtype ^slicing.discriminator.path = "$this"
* subtype ^slicing.rules = #open // allow other codes
* subtype 1..
* subtype contains iti65 1..1
* subtype[iti65] = urn:ihe:event-type-code#ITI-65 "Provide Document Bundle"
// * severity in R5
* recorded 1..1 // already required
* outcome 1..1
* outcomeDesc MS // encouraged
// source is already required, see invariant val-audit-source use
* agent 2..*
* agent ^slicing.discriminator.type = #pattern
* agent ^slicing.discriminator.path = "type"
* agent ^slicing.rules = #open
* agent ^slicing.description = "source, recipient, and possibly the user who participated"
* agent contains 
	documentSource 1..1 and
	documentRecipient 1..1 
	// may be many including app identity, user identity, etc
* agent[documentSource].type = DCM#110153 "Source Role ID"
* agent[documentSource].who 1..1
* agent[documentSource] obeys val-audit-source
* agent[documentSource].network 1..1
* agent[documentRecipient].type = DCM#110152 "Destination Role ID"
* agent[documentRecipient].who 1..1
* agent[documentRecipient].network 1..1
* agent[documentSource] ^short = "Document Source"
* agent[documentRecipient] ^short = "Document Recipient"
* entity 2..
* entity ^slicing.discriminator.type = #pattern
* entity ^slicing.discriminator.path = "type"
* entity ^slicing.rules = #open
* entity ^slicing.description = "patient and submission set involved"
* entity contains
	patient 1..1 and
	submissionSet 1..1
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what 1..1
* entity[patient].what only Reference(Patient)
* entity[submissionSet].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[submissionSet].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[submissionSet].what 1..1
* entity[submissionSet].what only Reference(List) 
* entity[patient] ^short = "Patient"
* entity[submissionSet] ^short = "SubmissionSet"



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/audit-66.fsh

Profile:        AuditFindDocumentListsConsumer
Parent:         IHE.BasicAudit.PatientQuery
Id:             IHE.MHD.FindDocumentLists.Audit.Consumer
Title:          "Audit Event for Find Document Lists Transaction by the Document Consumer"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Find Document Lists Transaction happens, as recorded by the Document Consumer.
- Build off of the IHE BasicAudit PatientQuery event
- add the ITI-67 as a subtype
- client is Document Consumer
- server is Document Responder
- entity slices for query, and patient are required
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti66 1..1
* subtype[iti66] = urn:ihe:event-type-code#ITI-66 "Find Document Lists"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Document Consumer"
* agent[server] ^short = "Document Responder"
* entity[patient] ^short = "Patient"
* entity[query] ^short = "Search Parameters"





Profile:        AuditFindDocumentListsResponder
Parent:         IHE.BasicAudit.PatientQuery
Id:             IHE.MHD.FindDocumentLists.Audit.Responder
Title:          "Audit Event for Find Document Lists Transaction at Document Responder"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Find Document Lists Transaction happens, as recorded by the Document Responder.
- Build off of the IHE BasicAudit PatientQuery event
- add the ITI-67 as a subtype
- client is Document Consumer
- server is Document Responder
- entity slices for query, and patient are required
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti66 1..1
* subtype[iti66] = urn:ihe:event-type-code#ITI-66 "Find Document Lists"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Document Consumer"
* agent[server] ^short = "Document Responder"
* entity[patient] ^short = "Patient"
* entity[query] ^short = "Search Parameters"



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/audit-67.fsh

Profile:        AuditFindDocumentReferencesConsumer
Parent:         IHE.BasicAudit.PatientQuery
Id:             IHE.MHD.FindDocumentReferences.Audit.Consumer
Title:          "Audit Event for Find Document References Transaction at Document Consumer"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Find Document References Transaction happens, as recorded by the Document Consumer.
- Build off of the IHE BasicAudit PatientQuery event
- add the ITI-67 as a subtype
- client is Document Consumer
- server is Document Responder
- entity slices for query, and patient are required
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti67 1..1
* subtype[iti67] = urn:ihe:event-type-code#ITI-67 "Find Document References"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Document Consumer"
* agent[server] ^short = "Document Responder"
* entity[patient] ^short = "Patient"
* entity[query] ^short = "Search Parameters"



Profile:        AuditFindDocumentReferencesResponder
Parent:         IHE.BasicAudit.PatientQuery
Id:             IHE.MHD.FindDocumentReferences.Audit.Responder
Title:          "Audit Event for Find Document References Transaction at Document Responder"
Description:    """
Defines constraints on the AuditEvent Resource to record when a Find Document References Transaction happens, as recorded by the Document Responder.
- Build off of the IHE BasicAudit PatientQuery event
- add the ITI-67 as a subtype
- client is Document Consumer
- server is Document Responder
- entity slices for query, and patient are required
- entity slice for transaction is available"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti67 1..1
* subtype[iti67] = urn:ihe:event-type-code#ITI-67 "Find Document References"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Document Consumer"
* agent[server] ^short = "Document Responder"
* entity[patient] ^short = "Patient"
* entity[query] ^short = "Search Parameters"




---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/audit-68.fsh

Profile:        AuditRetrieveDocumentConsumer
Parent:         IHE.BasicAudit.PatientRead
Id:             IHE.MHD.RetrieveDocument.Audit.Consumer
Title:          "Audit Event for Retrieve Document Transaction at Document Consumer"
Description:    """
Defines constraints on the Document Consumer AuditEvent Resource to record when a Retrieve Document Transaction happens, as recorded by the Document Consumer.
- Build off of the IHE BasicAudit PatientRead event
- add the ITI-68 as a subtype
- client is Document Consumer
- server is Document Responder
- entity slices for data, and patient are required
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti68 1..1
* subtype[iti68] = urn:ihe:event-type-code#ITI-68 "Retrieve Document"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* agent[client] obeys val-audit-source
* agent[client] ^short = "Document Consumer"
* agent[server] ^short = "Document Responder"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "the data"






Profile:        AuditRetrieveDocumentResponder
Parent:         IHE.BasicAudit.PatientRead
Id:             IHE.MHD.RetrieveDocument.Audit.Responder
Title:          "Audit Event for Retrieve Document Transaction at the Document Responder"
Description:    """
Defines constraints on the Document Responder AuditEvent Resource to record when a Retrieve Document Transaction happens, as recorded by the Document Responder.
- Build off of the IHE BasicAudit PatientRead event
- add the ITI-68 as a subtype
- client is Document Consumer
- server is Document Responder
- entity slices for data, and patient are required
- entity slice for transaction is available
"""
* modifierExtension 0..0
* subtype 2..
* subtype contains iti68 1..1
* subtype[iti68] = urn:ihe:event-type-code#ITI-68 "Retrieve Document"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* agent[server] obeys val-audit-source
* agent[client] ^short = "Document Consumer"
* agent[server] ^short = "Document Responder"
* entity[patient] ^short = "Patient"
* entity[data] ^short = "the data"


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/documentReference.fsh

Profile:        PatchParameters
Parent:         Parameters
Id:             IHE.MHD.Patch.Parameters
Title:          "MHD DocumentReference Patch Parameters"
Description:    "A profile on the Parameters resource to update the superseded DocumentReference status." 
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.rules = #open
* parameter contains operation 1..1
* parameter[operation].name = "operation"
* parameter[operation].part ^slicing.discriminator.type = #value
* parameter[operation].part ^slicing.discriminator.path = "name"
* parameter[operation].part ^slicing.rules = #open
* parameter[operation].part contains path 1..1 and type 1..1 and value 1..1
* parameter[operation].part[type].name = "type"
* parameter[operation].part[type].valueCode = #replace
* parameter[operation].part[path].name = "path"
* parameter[operation].part[path].valueString = "DocumentReference.status"
* parameter[operation].part[value].name = "value"
* parameter[operation].part[value].valueCode = #superseded

// equivalent to MHD Minimal DocumentReference
Profile:        MinimalDocumentReference
Parent:         DocumentReference
Id:             IHE.MHD.Minimal.DocumentReference
Title:          "MHD DocumentReference Minimal"
Description:    "A profile on the DocumentReference resource for MHD with minimal metadata constraints. 
- MHD is based on the [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) model, 
- the [3:4.1 Abstract Metadata Model](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.1.html#4.1), and 
- the use defined here is FHIR DocumentReference implementation of the 
- ebRIM implementation at [3:4.2.3.2 Document Entry](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2).
- with use-cases and constraints found in [3:4.3 Additional Document Sharing Requirements](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3)"
* modifierExtension 0..0
* masterIdentifier only UniqueIdIdentifier
* masterIdentifier 1..1
* identifier 0..* MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "use"
* identifier ^slicing.rules = #open
* identifier contains entryUUID 0..*
* identifier[entryUUID] only EntryUUIDIdentifier
* status 1..1
* status from DocumentReferenceStats (required)
* docStatus 0..0
* type 0..1 MS
* category 0..1 MS
* subject 0..1 MS
* subject only Reference(Patient)
* date 0..1 MS
* author 0..* MS
* authenticator 0..1
//* custodian 0..0
* description 0..1
* securityLabel 0..* MS
* content 1..1
* content ^definition = "The document and format referenced."
* content.attachment.contentType 1..1
* content.attachment.language 0..1 MS
* content.attachment.data 0..0
* content.attachment.url 1..1
* content.attachment.size 0..1
* content.attachment.hash 0..1
* content.attachment.title 0..1
* content.attachment.creation 0..1 MS
* content.format 0..1 MS
* content.format from http://ihe.net/fhir/ihe.formatcode.fhir/ValueSet/formatcode (preferred)
//* context.encounter 0..0
* context.event 0..*
* context.period 0..1 MS
* context.facilityType 0..1 MS
* context.practiceSetting 0..1 MS
* context.sourcePatientInfo 0..1 MS
* context.related 0..*
* relatesTo 0..* MS


// equivalent to MHD DocumentReference Comprehensive UnContained Option
Profile:        UnContainedComprehensiveDocumentReference
Parent:         IHE.MHD.Minimal.DocumentReference
Id:             IHE.MHD.UnContained.Comprehensive.DocumentReference
Title:          "MHD DocumentReference Comprehensive UnContained References Option"
Description:    "A profile on the DocumentReference resource for MHD with Comprehensive Metadata Option but without a requirement for contained author, authenticator, or sourcePatientInfo. 
- MHD is based on the [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) model, 
- the [3:4.1 Abstract Metadata Model](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.1.html#4.1), and 
- the use defined here is FHIR DocumentReference implementation of the 
- ebRIM implementation at [3:4.2.3.2 Document Entry](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2).
- with use-cases and constraints found in [3:4.3 Additional Document Sharing Requirements](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3)"
* type 1..1
* category 1..1
* subject 1..1
* securityLabel 1..*
* content.attachment.language 1..1
* content.attachment.creation 1..1
* content.format 1..1
* context 1..1
* context.facilityType 1..1
* context.practiceSetting 1..1
* context.sourcePatientInfo 1..1 

// equivalent to MHD Comprehensive DocumentReference - contained
Profile:        ComprehensiveDocumentReference
Parent:         IHE.MHD.UnContained.Comprehensive.DocumentReference
Id:             IHE.MHD.Comprehensive.DocumentReference
Title:          "MHD DocumentReference Comprehensive"
Description:    "A profile on the DocumentReference resource for MHD Comprehensive Option with Contained (not UnContained), compatible with XDS-on-FHIR and XCA use.
- MHD is based on the [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) model, 
- the [3:4.1 Abstract Metadata Model](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.1.html#4.1), and 
- the use defined here is FHIR DocumentReference implementation of the 
- ebRIM implementation at [3:4.2.3.2 Document Entry](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2).
- with use-cases and constraints found in [3:4.3 Additional Document Sharing Requirements](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3)"
* author ^type.aggregation = #contained
* authenticator ^type.aggregation = #contained
* context.sourcePatientInfo ^type.aggregation = #contained

// mappings to XDS 
Mapping: DocumentEntry-Mapping
Source:	MinimalDocumentReference
Target: "XDS"
Title: "XDS and MHD Mapping"
* -> "XDS DocumentEntry: Used in the context of the IHE MHD ImplementationGuide"
* category -> "DocumentEntry.classCode"
* author -> "DocumentEntry.author"
* status -> "DocumentEntry.availabilityStatus"
* description -> "DocumentEntry.comments"
* securityLabel -> "DocumentEntry.confidentialityCode"
* content.attachment.creation -> "DocumentEntry.creationTime"
* identifier -> "DocumentEntry.entryUUID"
* context.event -> "DocumentEntry.eventCodeList"
* content.format -> "DocumentEntry.formatCode"
* content.attachment.hash -> "DocumentEntry.hash"
* context.facilityType -> "DocumentEntry.healthcareFacilityTypeCode"
// DocumentEntry.homeCommunityId -- does not actually exist as metadata on DocumentEntry, and does not have a place in DocumentReference. might be encoded in the content.attachment.url
* content.attachment.language -> "DocumentEntry.languageCode"
* authenticator -> "DocumentEntry.legalAuthenticator"
* custodian -> "not mapped"
* content.attachment.contentType -> "DocumentEntry.mimeType"
* subject -> "DocumentEntry.patientId"
* context.practiceSetting -> "DocumentEntry.practiceSettingCode"
* content.attachment.url -> "DocumentEntry.repositoryUniqueId or DocumentEntry.URI"
* context.period.start -> "DocumetEntry.serviceStartTime"
* context.period.end -> "DocumentEntry.serviceStopTime"
* content.attachment.size -> "DocumentEntry.size"
* context.sourcePatientInfo.identifier -> "DocumentEntry.sourcePatientId"
* context.sourcePatientInfo.reference -> "DocumentEntry.sourcePatientInfo"
* content.attachment.title -> "DocumentEntry.title"
* type -> "DocumentEntry.typeCode"
* masterIdentifier -> "DocumentEntry.uniqueId"
* context.encounter -> "DocumentEntry.referenceIdList with CXi encoding for urn:ihe:iti:xds:2015:encounterId"
* context.related -> "DocumentEntry.referenceIdList using CXi encoding for type when possible"
* meta.profile -> "DocumentEntry.limitedMetadata"
// DocumentEntry.objectType -- is not represented
* relatesTo -> "DocumentEntry Associations"
* relatesTo.code -> "DocumentEntry Associations.type"
* relatesTo.target -> "DocumentEntry Associations.reference"


Instance:   AssociationTypeVsRelatesTo
InstanceOf: ConceptMap
Title:      "AssociationType vs RelatesTo"
Description: "map between XDS Association Types and MHD FHIR DocumentReference relatesTo code."
Usage: #definition
* url = "https://profiles.ihe.net/ITI/MHD/ConceptMap/AssociationTypeVsRelatesTo"
* name =  "AssociationTypeVsRelatesTo"
* title = "AssociationType vs RelatesTo"
* description = "map between XDS Association Types and MHD FHIR DocumentReference relatesTo code."
* experimental = false
* status = #active
* date = 2021-05-15
* publisher = "IHE"
* description = "map between XDS Association Types and MHD FHIR DocumentReference relatesTo code.

- Source Code - [XDS Association Types](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.2) are indicated as URN, they are here indicated as system and code
- Destination Code - [DocumentReference relatesTo code](http://hl7.org/fhir/valueset-document-relationship-type.html) are Required codes"
* purpose = "show the mapping between Association Types and relatesTo code"
* group.source = "urn:ihe:iti:2007:AssociationType"
* group.target = "http://hl7.org/fhir/document-relationship-type"
* group.element[+].code = #RPLC
* group.element[=].target.equivalence = #equal
* group.element[=].target.code = #replaces
* group.element[+].code = #XFRM
* group.element[=].target.equivalence = #equal
* group.element[=].target.code = #transforms
* group.element[+].code = #APND
* group.element[=].target.equivalence = #equal
* group.element[=].target.code = #appends
* group.element[+].code = #XFRM_RPLC
* group.element[=].target.equivalence = #narrower
* group.element[=].target.code = #replaces
* group.element[=].target.comment = "An XDS Transform Replacement is both a document that replaces and transforms. The mapping here indicates Replace as that is the most specific change."
* group.element[+].code = #signs
* group.element[=].target.equivalence = #equal
* group.element[=].target.code = #signs
* group.element[+].code = #IsSnapshotOf
* group.element[=].target.equivalence = #inexact
* group.element[=].target.code = #transforms
* group.element[=].target.comment = "An XDS IsSnapshotOf is a new instance of what is defined in the parent DocumentEntry (DocumentReference), thus it is a transform in a manner, but is not exactly a transform of the parent document."


ValueSet: DocumentReferenceStats
Title: "MHD DocumentReference status codes"
Description: "ValueSet that does not include entered-in-error as that does not map"
* ^experimental = false
* http://hl7.org/fhir/document-reference-status#current
* http://hl7.org/fhir/document-reference-status#superseded


Instance:   FhirStatusVsStatusCode
InstanceOf: ConceptMap
Title:      "FHIR status vs ebRIM Status Type Code"
Description: "map between XDS ebRIM Status Type Codes and MHD FHIR DocumentReference.status code."
Usage: #definition
* url = "https://profiles.ihe.net/ITI/MHD/ConceptMap/FhirStatusVsStatusCode"
* name =  "FhirStatusVsStatusCode"
* status = #active
* date = 2022-05-05
* publisher = "IHE"
* title = "FHIR status vs ebRIM Status Type Code"
* description = "map between XDS ebRIM Status Type Codes and MHD FHIR DocumentReference.status code. Table 2:3.67.4.1.3.1-2. Note that the codes given are used without a system in both FHIR and ebRIM."
* purpose = "show the mapping between ebRIM Status Type Codes and FHIR .status code"
* experimental = false
* group.source = "urn:ietf:rfc:3986"
* group.target = "http://hl7.org/fhir/document-reference-status"
* group.element[+].code = #urn:oasis:names:tc:ebxml-regrep:StatusType:Approved
* group.element[=].target.equivalence = #equal
* group.element[=].target.code = #current
* group.element[+].code = #urn:oasis:names:tc:ebxml-regrep:StatusType:Deprecated
* group.element[=].target.equivalence = #equal
* group.element[=].target.code = #superseded




---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-audit-105.fsh

Instance: ex-auditSimplifiedPublish-recipient
InstanceOf: IHE.MHD.SimplifiedPublish.Audit.Recipient
Title: "Audit Example of ITI-105 at recipient"
Description: "Audit Example for a Simplified Publish Transaction as recorded at the recipient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(DocumentReference/ex-DocumentReferenceSimplifiedPublish)
//* entity[2].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
//* entity[2].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
//* entity[2].what = Reference(DocumentReference/ex-DocumentReferenceSimplifiedPublish)

Instance: ex-auditSimplifiedPublish-source
InstanceOf: IHE.MHD.SimplifiedPublish.Audit.Source
Title: "Audit Example of ITI-105 at source"
Description: "Audit Example for a Simplified Publish Transaction from source perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "mobile app foo-bar"
* source.observer.display = "model number ABC, serial number 1234"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "model number ABC, serial number 1234"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(DocumentReference/ex-DocumentReferenceSimplifiedPublish)



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-audit-106.fsh

Instance: ex-auditGenerateMetadata-recipient
InstanceOf: IHE.MHD.GenerateMetadata.Audit.Recipient
Title: "Audit Example of ITI-106 at recipient"
Description: "Audit Example for a Generate Metadata Transaction as recorded at the recipient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "myMachine.example.org"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(DocumentReference/ex-DocumentReferenceMinimal)


Instance: ex-auditGenerateMetadata-source
InstanceOf: IHE.MHD.GenerateMetadata.Audit.Source
Title: "Audit Example of ITI-106 at source"
Description: "Audit Example for a Generate Metadata Transaction from source perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "mobile app foo-bar"
* source.observer.display = "model number ABC, serial number 1234"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].requestor = false
* agent[client].who.display = "model number ABC, serial number 1234"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#4 "Domain Resource"
* entity[data].what = Reference(ex-binary)



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-audit-65.fsh

Instance: ex-auditProvideBundle-recipient
InstanceOf: IHE.MHD.ProvideBundle.Audit.Recipient
Title: "Audit Example of ITI-65 at recipient"
Description: "Audit Example for a Provide Bundle Transaction as recorded at the recipient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110107 "Import"
* action = #C
* subtype[iti65] = urn:ihe:event-type-code#ITI-65 "Provide Document Bundle"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[documentSource].type = DCM#110153 "Source Role ID"
* agent[documentSource].requestor = false
* agent[documentSource].who.display = "myMachine.example.org"
* agent[documentSource].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[documentSource].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* agent[documentRecipient].type = DCM#110152 "Destination Role ID"
* agent[documentRecipient].who = Reference(Device/ex-device)
* agent[documentRecipient].requestor = false
* agent[documentRecipient].network.address = "http://server.example.com/fhir"
* agent[documentRecipient].network.type = http://hl7.org/fhir/network-type#5 "URI"
//* agent[2].type = http://terminology.hl7.org/CodeSystem/v3-RoleClass#PAT "Patient" // the user is the patient
//* agent[2].who.display = "John Smith" // just a display name pulled from the IUA token
//* agent[2].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[submissionSet].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[submissionSet].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[submissionSet].what = Reference(List/ex-minimalSubmissionSet)


Instance: ex-auditProvideBundle-source
InstanceOf: IHE.MHD.ProvideBundle.Audit.Source
Title: "Audit Example of ITI-65 at source"
Description: "Audit Example for a Provide Bundle Transaction from source perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = DCM#110106 "Export"
* action = #R
* subtype[iti65] = urn:ihe:event-type-code#ITI-65 "Provide Document Bundle"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "mobile app foo-bar"
* source.observer.display = "model number ABC, serial number 1234"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[documentSource].type = DCM#110153 "Source Role ID"
* agent[documentSource].who.display = "model number ABC, serial number 1234"
* agent[documentSource].requestor = false
* agent[documentSource].network.address = "myDevice.example.com"
* agent[documentSource].network.type = http://hl7.org/fhir/network-type#1 "domain name"
* agent[documentRecipient].type = DCM#110152 "Destination Role ID"
* agent[documentRecipient].requestor = false
* agent[documentRecipient].who.display = "myMachine.example.org"
* agent[documentRecipient].network.address = "http://server.example.com/fhir"
* agent[documentRecipient].network.type = http://hl7.org/fhir/network-type#5 "URI"
//* agent[2].type = http://terminology.hl7.org/CodeSystem/v3-RoleClass#PAT "Patient" // the user is the patient
//* agent[2].who = Reference(Patient/ex-patient)
//* agent[2].requestor = true
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[submissionSet].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[submissionSet].role = http://terminology.hl7.org/CodeSystem/object-role#20 "Job"
* entity[submissionSet].what = Reference(List/ex-minimalSubmissionSet)



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-audit-66.fsh

Instance: ex-auditFindDocumentLists-consumer
InstanceOf: IHE.MHD.FindDocumentLists.Audit.Consumer
Title: "Audit Example of ITI-66 at Consumer"
Description: "Audit Example for a Find Document Lists Transaction as recorded at the consumer"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti66] = urn:ihe:event-type-code#ITI-66 "Find Document Lists"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "fancy mobile app"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "R0VUIHRlc3QuZmhpci5uZXQvUjQvZmhpci9MaXN0P3BhdGllbnQ9OTg3NiZjb2RlPXN1Ym1pc3Npb25zZXQmc3RhdHVzPWN1cnJlbnQmZGVzaWduYXRpb25UeXBlPWh0dHA6Ly9sb2luYy5vcmd8MTIzNC01Cg=="


Instance: ex-auditFindDocumentLists-responder
InstanceOf: IHE.MHD.FindDocumentLists.Audit.Responder
Title: "Audit Example of ITI-66 at responder"
Description: "Audit Example for a Find Document Lists Transaction from responder perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti66] = urn:ihe:event-type-code#ITI-66 "Find Document Lists"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE MHD api example"
* source.observer.display = "http://server.example.com/fhir"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].query = "R0VUIHRlc3QuZmhpci5uZXQvUjQvZmhpci9MaXN0P3BhdGllbnQ9OTg3NiZjb2RlPXN1Ym1pc3Npb25zZXQmc3RhdHVzPWN1cnJlbnQmZGVzaWduYXRpb25UeXBlPWh0dHA6Ly9sb2luYy5vcmd8MTIzNC01Cg=="



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-audit-67.fsh

Instance: ex-auditFindDocumentReferences-consumer
InstanceOf: IHE.MHD.FindDocumentReferences.Audit.Consumer
Title: "Audit Example of ITI-67 at Consumer"
Description: "Audit Example for a Find Document References Transaction as recorded at the consumer"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti67] = urn:ihe:event-type-code#ITI-67 "Find Document References"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "fancy mobile app"
* source.observer = Reference(Device/ex-device)
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].description = """
GET test.fhir.net/R4/fhir/DocumentReference?patient=9876&status=current&type=http://loinc.org|1234-5
"""
* entity[query].query = "R0VUIHRlc3QuZmhpci5uZXQvUjQvZmhpci9Eb2N1bWVudFJlZmVyZW5jZT9wYXRpZW50PTk4NzYmc3RhdHVzPWN1cnJlbnQmdHlwZT1odHRwOi8vbG9pbmMub3JnfDEyMzQtNQo="


Instance: ex-auditFindDocumentReferences-responder
InstanceOf: IHE.MHD.FindDocumentReferences.Audit.Responder
Title: "Audit Example of ITI-67 at responder"
Description: "Audit Example for a Find Document References Transaction from responder perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti67] = urn:ihe:event-type-code#ITI-67 "Find Document References"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE MHD api example"
* source.observer.display = "http://server.example.com/fhir"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].description = """
GET test.fhir.net/R4/fhir/DocumentReference?patient=9876&status=current&type=http://loinc.org|1234-5
"""
* entity[query].query = "R0VUIHRlc3QuZmhpci5uZXQvUjQvZmhpci9Eb2N1bWVudFJlZmVyZW5jZT9wYXRpZW50PTk4NzYmc3RhdHVzPWN1cnJlbnQmdHlwZT1odHRwOi8vbG9pbmMub3JnfDEyMzQtNQo="

Instance: ex-auditFindDocumentReferences-post-responder
InstanceOf: IHE.MHD.FindDocumentReferences.Audit.Responder
Title: "Audit Example of ITI-67 using POST recorded at responder"
Description: "Audit Example for a Find Document References Transaction using POST search as recorded at the responder perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #E
* subtype[anySearch] = http://hl7.org/fhir/restful-interaction#search "search"
* subtype[iti67] = urn:ihe:event-type-code#ITI-67 "Find Document References"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "HIE MHD api example"
* source.observer.display = "http://server.example.com/fhir"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[client].type = DCM#110153 "Source Role ID"
* agent[client].who = Reference(Device/ex-device)
* agent[client].requestor = false
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
// not clear how a server uses the IUA Oauth token here
* agent[server].type = DCM#110152 "Destination Role ID"
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[query].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[query].role = http://terminology.hl7.org/CodeSystem/object-role#24 "Query"
* entity[query].description = """
POST test.fhir.net/R4/fhir/DocumentReference/_search
Host test.fhir.net
Content-Type: application/x-www-form-urlencoded
Accept: application/fhir+json; fhirVersion=4.0

patient=9876&status=current&type=http://loinc.org|1234-5
"""
* entity[query].query = "UE9TVCB0ZXN0LmZoaXIubmV0L1I0L2ZoaXIvRG9jdW1lbnRSZWZlcmVuY2UvX3NlYXJjaApIb3N0IHRlc3QuZmhpci5uZXQKQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQKQWNjZXB0OiBhcHBsaWNhdGlvbi9maGlyK2pzb247IGZoaXJWZXJzaW9uPTQuMAoKcGF0aWVudD05ODc2JnN0YXR1cz1jdXJyZW50JnR5cGU9aHR0cDovL2xvaW5jLm9yZ3wxMjM0LTUK"



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-audit-68.fsh

Instance: ex-auditRetrieveDocument-consumer
InstanceOf: IHE.MHD.RetrieveDocument.Audit.Consumer
Title: "Audit Example of ITI-68 at consumer"
Description: "Audit Example for a Retrieve Document Transaction as recorded at the consumer"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #R
* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
* subtype[iti68] = urn:ihe:event-type-code#ITI-68 "Retrieve Document"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "mobile app foo-bar"
* source.observer.display = "model number ABC, serial number 1234"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#1 "User Device"
* agent[server].type = DCM#110153 "Source Role ID"
* agent[server].who = Reference(Device/ex-device)
* agent[server].requestor = false
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110152 "Destination Role ID"
* agent[client].requestor = false
* agent[client].who.display = "model number ABC, serial number 1234"
* agent[client].network.address = "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
* agent[client].network.type = http://hl7.org/fhir/network-type#2 "IP Address"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* entity[data].what.reference = "http://example.org/blah/blah.pdf"


Instance: ex-auditRetrieveDocument-responder
InstanceOf: IHE.MHD.RetrieveDocument.Audit.Responder
Title: "Audit Example of ITI-68 at responder"
Description: "Audit Example for a Retrieve Document Transaction from responder perspective"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = http://terminology.hl7.org/CodeSystem/audit-event-type#rest "Restful Operation"
* action = #R
* subtype[anyRead] = http://hl7.org/fhir/restful-interaction#read "read"
* subtype[iti68] = urn:ihe:event-type-code#ITI-68 "Retrieve Document"
//* severity = #Informational
* recorded = 2020-04-29T09:49:00.000Z
* outcome = http://terminology.hl7.org/CodeSystem/audit-event-outcome#0 "Success"
* source.site = "server.example.com"
* source.observer.display = "http://server.example.com/fhir"
* source.type = http://terminology.hl7.org/CodeSystem/security-source-type#4 "Application Server"
* agent[server].type = DCM#110153 "Source Role ID"
* agent[server].requestor = false
* agent[server].who.display = "http://server.example.com/fhir"
* agent[server].network.address = "http://server.example.com/fhir"
* agent[server].network.type = http://hl7.org/fhir/network-type#5 "URI"
* agent[client].type = DCM#110152 "Destination Role ID"
* agent[client].who.display = "model number ABC, serial number 1234"
* agent[client].requestor = false
* agent[client].network.address = "myDevice.example.com"
* agent[client].network.type = http://hl7.org/fhir/network-type#1 "domain name"
* entity[patient].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#1 "Person"
* entity[patient].role = http://terminology.hl7.org/CodeSystem/object-role#1 "Patient"
* entity[patient].what = Reference(Patient/ex-patient)
* entity[data].type = http://terminology.hl7.org/CodeSystem/audit-entity-type#2 "System Object"
* entity[data].role = http://terminology.hl7.org/CodeSystem/object-role#3 "Report"
* entity[data].what.reference = "http://example.org/blah/blah.pdf"



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-DocumentReference.fsh

Instance:   ex-DocumentReferenceMinimal
InstanceOf: IHE.MHD.Minimal.DocumentReference
Title:      "DocumentReference for Minimal metadata"
Description: "Example of a minimal DocumentReference resource. This is very unlikely to be acceptable anywhere, but it is the minimum required."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:7d5bb8ac-68ee-4926-85e7-b8aac8e1f09d"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #text/plain
* content.attachment.url = "http://example.com/nowhere.txt"

Instance:   ex-DocumentReferenceMinimalEncounter
InstanceOf: IHE.MHD.Minimal.DocumentReference
Title:      "DocumentReference for Minimal metadata with an encounter"
Description: "Example of a minimal DocumentReference resource. This has minimal metadata plus an encounter and custodian."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:7d5bb8ac-68ee-4926-85e7-b8aac8e1f09d"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #text/plain
* content.attachment.url = "http://example.com/nowhere.txt"
* context.encounter = Reference(ex-encounter)
* custodian = Reference(ex-organization)

Instance:   ex-DocumentReferenceUnContained
InstanceOf: IHE.MHD.UnContained.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive minimally metadata"
Description: "Example of a Comprehensive DocumentReference resource. This is minimally filled for all mandatory elements."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46340"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:0c287d32-01e3-4d87-9953-9fcc9404eb21"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #text/plain
* content.attachment.url = "http://example.com/nowhere.txt"
// elements moved to mandatory
* type = http://loinc.org#55107-7
* category = http://loinc.org#11369-6
* subject = Reference(Patient/ex-patient)
* date = 2020-12-31T23:50:50-05:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-12-31T23:50:50-05:00
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* context.sourcePatientInfo = Reference(Patient/ex-patient)

Instance:   ex-DocumentReferenceUnContainedFully
InstanceOf: IHE.MHD.UnContained.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive minimally filled metadata"
Description: "Example of a UnContained References Option with Comprehensive DocumentReference resource. This is fully filled for all mandatory elements and optional elements."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46340"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:0c287d32-01e3-4d87-9953-9fcc9404eb21"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #text/plain
* content.attachment.url = "http://example.com/nowhere.txt"
// elements moved to mandatory
* type = http://loinc.org#55107-7
* category = http://loinc.org#11369-6
* subject = Reference(Patient/ex-patient)
* date = 2020-12-31T23:50:50-05:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-12-31T23:50:50-05:00
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
// optional elements
* author = Reference(Practitioner/ex-practitioner)
* authenticator = Reference(Practitioner/ex-practitioner)
* context.sourcePatientInfo = Reference(Patient/ex-patient)
* context.period.start = 2020-12-31T23:50:50-05:00
* context.period.end = 2020-12-31T23:50:50-05:00
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActCode#ACCTRECEIVABLE
* context.related.identifier.system = "urn:ietf:rfc:3986"
* context.related.identifier.value = "urn:oid:1.2.840.113556.1.8000.2554.17917.46600.21181.17878.33419.62048.57128.2759"
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* content.attachment.title = "DocumentReference for Comprehensive minimally filled metadata"
* description = "Example of a Comprehensive DocumentReference resource. This is minimally filled for all mandatory elements."
// note the sha1 hash of a zero file is da39a3ee5e6b4b0d3255bfef95601890afd80709
* content.attachment.hash = "ZGEzOWEzZWU1ZTZiNGIwZDMyNTViZmVmOTU2MDE4OTBhZmQ4MDcwOQ=="
* content.attachment.size = 0
* relatesTo.code = #appends
* relatesTo.target = Reference(DocumentReference/ex-documentreference)

Instance:   ex-DocumentReferenceComprehensive
InstanceOf: IHE.MHD.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive fully filled metadata"
Description: "Example of a Comprehensive DocumentReference resource. This is fully filled for all mandatory elements and all optional elements."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46340"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:0c287d32-01e3-4d87-9953-9fcc9404eb21"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #text/plain
* content.attachment.url = "http://example.com/nowhere.txt"
// elements moved to mandatory
* type = http://loinc.org#55107-7
* category = http://loinc.org#11369-6
* subject = Reference(Patient/ex-patient)
* date = 2020-12-31T23:50:50-05:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-12-31T23:50:50-05:00
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
// optional elements
* author = Reference(in-author)
* authenticator = Reference(in-author)
* context.sourcePatientInfo = Reference(in-patient)
* contained[0] = in-author
* contained[1] = in-patient
* context.period.start = 2020-12-31T23:50:50-05:00
* context.period.end = 2020-12-31T23:50:50-05:00
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActCode#ACCTRECEIVABLE
* context.related.identifier.system = "urn:ietf:rfc:3986"
* context.related.identifier.value = "urn:oid:1.2.840.113556.1.8000.2554.17917.46600.21181.17878.33419.62048.57128.2759"
* content.attachment.title = "DocumentReference for Comprehensive fully filled metadata"
* description = "Example of a Comprehensive DocumentReference resource. This is fully filled for all mandatory elements and all optional elements."
// note the sha1 hash of actual content should be used. This hash 8a38f2633006fd535149c44a3a73f312437b3478
// is of some random content.
* content.attachment.hash = "OGEzOGYyNjMzMDA2ZmQ1MzUxNDljNDRhM2E3M2YzMTI0MzdiMzQ3OA=="
* content.attachment.size = 190
* relatesTo.code = #appends
* relatesTo.target = Reference(DocumentReference/ex-documentreference)

Instance:   ex-DocumentReferenceComprehensiveDelayedAssembly
InstanceOf: IHE.MHD.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive fully filled metadata for a Deferred Creation"
Description: "Example of a Comprehensive DocumentReference resource. 
- This is fully filled for all mandatory elements and all optional elements.
- This specifies a Delayed Document Assembly Document.
  - Thus the hash is the fixed value da39a3ee5e6b4b0d3255bfef95601890afd80709
  - and the size is explicitly zero
  - and when a Document Consumer retrieves the URL, then the document will be assembled and returned to it
  - and the DocumentReference would be updated with the resulting hash and size thus becoming a static entry"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.47340"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:0c287d32-01e3-4d87-9953-9fcc9407eb21"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #text/plain
// This URL would be used to retrieve the content, and in this case that is when the content would be created
* content.attachment.url = "http://example.com/nowhere.txt"
// elements moved to mandatory
* type = http://loinc.org#55107-7
* category = http://loinc.org#11369-6
* subject = Reference(Patient/ex-patient)
* date = 2020-12-31T23:50:50-05:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-12-31T23:50:50-05:00
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
// optional elements
* author = Reference(in-author)
* authenticator = Reference(in-author)
* context.sourcePatientInfo = Reference(in-patient)
* contained[0] = in-author
* contained[1] = in-patient
* context.period.start = 2020-12-31T23:50:50-05:00
* context.period.end = 2020-12-31T23:50:50-05:00
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActCode#ACCTRECEIVABLE
* context.related.identifier.system = "urn:ietf:rfc:3986"
* context.related.identifier.value = "urn:oid:1.2.840.113556.1.8000.2554.17917.46600.21181.17878.33419.62048.57128.2759"
* content.attachment.title = "DocumentReference for Comprehensive fully filled metadata"
* description = "Example of a Comprehensive DocumentReference resource. This is fully filled for all mandatory elements and all optional elements."
// note the sha1 hash of a zero file is da39a3ee5e6b4b0d3255bfef95601890afd80709
* content.attachment.hash = "ZGEzOWEzZWU1ZTZiNGIwZDMyNTViZmVmOTU2MDE4OTBhZmQ4MDcwOQ=="
* content.attachment.size = 0
* relatesTo.code = #appends
* relatesTo.target = Reference(DocumentReference/ex-documentreference)

Instance:   ex-DocumentReferenceComprehensiveOnDemand
InstanceOf: IHE.MHD.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive fully filled metadata for a On-Demand document"
Description: "Example of a Comprehensive DocumentReference resource. 
- This is fully filled for all mandatory elements.
- This specifies a On-Demand Document.
  - Thus the hash is not provided
  - and the size is not provided
  - and when a Document Consumer retrieves the URL, then a new document will be created and returned to it
  - and a linked snapshot DocumentReference would be created with the resulting hash and size thus becoming a static entry"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.57340"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:0c287d32-01e3-4d87-9953-9fc59407eb21"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #text/plain
// This URL would be used to retrieve the content, and in this case that is when the content would be created
* content.attachment.url = "http://example.com/nowhere.txt"
// elements moved to mandatory
* type = http://loinc.org#60591-5
* category = http://loinc.org#11369-6
* subject = Reference(Patient/ex-patient)
* date = 2020-01-31T23:50:50-05:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#N
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-12-31T23:50:50-05:00
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
// note the size and hash are NOT included at all
* context.sourcePatientInfo = Reference(in-patient)
* contained[0] = in-patient


Instance:   ex-DocumentReferenceComprehensiveWithBinary
InstanceOf: IHE.MHD.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive fully filled metadata for a document in a Binary"
Description: "Example of a Comprehensive DocumentReference resource. 
- This is fully filled for all mandatory elements.
- This specifies a Document in a Binary."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41381.57340"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:0c287d32-01e3-4d87-9953-91c59407eb21"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #text/plain
* type = http://loinc.org#60591-5
* category = http://loinc.org#11369-6
* subject = Reference(Patient/ex-patient)
* date = 2020-02-01T23:50:50-05:00
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* context.sourcePatientInfo = Reference(in-patient)
* contained[0] = in-patient
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-02-01T23:50:50-05:00
* content.attachment.url = "Binary/ex-b-binary"
* content.attachment.title = "Hello World"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA=="
* content.attachment.size = 11

Instance: ex-b-binary
InstanceOf: Binary
Title: "Example document that says: Hello World"
Description: "Example binary that holds just Hello World
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA=="
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="

Instance:   in-patient
InstanceOf: Patient
Title:      "Dummy inline Patient example"
Description: "Dummy inline patient example for completeness sake. No actual use of this resource other than an example target"
Usage: #inline


Instance: in-author
InstanceOf: Practitioner
Title: "Dummy inline Practitioner example"
Description: "Dummy inline Practitioner example for completeness sake. No actual use of this resource other than an example target"
Usage: #inline
* telecom.system = #email
* telecom.value = "JohnMoehrke@gmail.com"


Instance:   ex-findDocumentReferencesResponse
InstanceOf: IHE.MHD.FindDocumentReferencesResponseMessage
Title:      "Example of a Find Document References Response Message"
Description: "Example of a Find Document References Bundle Search Set with a single DocumentReference"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #searchset
* link[0].relation = "self"
* link[0].url = "test.fhir.net/R4/fhir/DocumentReference?patient=9876&status=current"
* total = 1
* timestamp = 2021-04-16T11:32:24Z
* entry[0].fullUrl = "http://example.org/DocumentReference/in-DocumentReferenceMinimal"
* entry[0].resource = in-DocumentReferenceMinimal

Instance:   in-DocumentReferenceMinimal
InstanceOf: IHE.MHD.Minimal.DocumentReference
Title:      "DocumentReference for Minimal metadata"
Description: "Example of a minimal DocumentReference resource. This is very unlikely to be acceptable anywhere, but it is the minimum required."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:7d5bb8ac-68ee-4926-85e7-b8aac8e1f09d"
* identifier[entryUUID].use = #official
* status = #current
* content.attachment.contentType = #text/plain
* content.attachment.url = "http://example.com/nowhere.txt"


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-dummy.fsh


Instance:   ex-patient
InstanceOf: Patient
Title:      "Dummy Patient example"
Description: "Dummy patient example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
// history - http://playgroundjungle.com/2018/02/origins-of-john-jacob-jingleheimer-schmidt.html
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[+].use = #usual
* name[=].family = "Schmidt"
* name[=].given = "John"
* name[+].use = #old
* name[=].family = "Schnidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingle"
* name[=].given[+] = "Heimer"
* name[=].period.end = "1960"
* name[+].use = #official
* name[=].family = "Schmidt"
* name[=].given[+] = "John"
* name[=].given[+] = "Jacob"
* name[=].given[+] = "Jingleheimer"
* name[=].period.start = "1960-01-01"
* name[+].use = #nickname
* name[=].family = "Schmidt"
* name[=].given = "Jack"
* gender = #other
* birthDate = "1923-07-25"
* address.state = "WI"
* address.country = "USA"

Instance:   ex-device
InstanceOf: Device
Title:      "Dummy Device example"
Description: "Dummy Device example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST

Instance:   ex-organization
InstanceOf: Organization
Title:      "Dummy Organization example"
Description: "Dummy Organization example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name = "nowhere"

Instance: ex-documentreference
InstanceOf: DocumentReference
Title: "Dummy DocumentReference example"
Description: "Dummy DocumentReference example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #current
* content.attachment.title = "Hello World"
* content.attachment.contentType = #text/plain

Instance: ex-documentreference2
InstanceOf: DocumentReference
Title: "Dummy DocumentReference 2 example"
Description: "Dummy DocumentReference 2 example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #current
* content.attachment.title = "Hello World"
* content.attachment.contentType = #text/plain

Instance: ex-list
InstanceOf: List
Title: "Dummy List example"
Description: "Dummy List example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #current
* mode = #working
* entry.item = Reference(DocumentReference/ex-documentreference2)

Instance: ex-practitioner
InstanceOf: Practitioner
Title: "Dummy Practitioner example"
Description: "Dummy Practitioner example for completeness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* telecom.system = #email
* telecom.value = "JohnMoehrke@gmail.com"

Instance: ex-encounter
InstanceOf: Encounter
Title: "Dummy Encounter example"
Description: "Dummy Encounter example for completness sake. No actual use of this resource other than an example target"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #in-progress
* class = http://terminology.hl7.org/CodeSystem/v3-ActCode#AMB
* subject = Reference(ex-patient)


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-dummyBundle.fsh



Instance:   cccccccc-2222-0000-0000-000000000001
InstanceOf: DocumentReference
Title:      "DocumentReference for Comprehensive fully filled metadata for a document in a Binary"
Description: "For bundling Example of a Comprehensive DocumentReference resource."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* status = #current
* type = http://loinc.org#60591-5
* category = http://loinc.org#11369-6
* date = 2020-02-01T23:50:50-05:00
// note that this resource is non MHD profiled DocumentReference, so the format code must follow FHIR core valueSet
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
//* content.format = urn:oid:1.3.6.1.4.1.19376.1.2.3#urn:ihe:iti:xds-sd:text:2008
* content.attachment.url = "urn:uuid:cccccccc-2222-0000-0000-000000000002"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA=="
* content.attachment.size = 11



Instance: cccccccc-2222-0000-0000-000000000002
InstanceOf: Binary
Title: "Dummy Binary document that says: Hello World"
Description: """
For Bundling Example binary that 
- holds \"Hello World\"
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA==
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="


Instance: ex-binary
InstanceOf: Binary
Title: "Dummy Binary document that says: Hello World"
Description: """
For Bundling Example binary that 
- holds \"Hello World\"
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA==
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="


Instance:   ex-dummyBundleDocAndBinary
InstanceOf: Bundle
Title:      "Dummy Bundle with DocumentReference + Binary"
Description: "Dummy Bundle with a DocumentReferenece and Binary
- with 1 documentReference
- with 1 document Binary"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction
* timestamp = 2020-11-24T23:50:50-05:00
* entry[+].fullUrl = "urn:uuid:cccccccc-2222-0000-0000-000000000001"
* entry[=].resource = cccccccc-2222-0000-0000-000000000001
* entry[=].request.url = "DocumentReference"
* entry[=].request.method = #POST
* entry[+].fullUrl = "urn:uuid:cccccccc-2222-0000-0000-000000000002"
* entry[=].resource = cccccccc-2222-0000-0000-000000000002
* entry[=].request.url = "Binary"
* entry[=].request.method = #POST



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-Folder.fsh

Instance:   ex-minimalFolder
InstanceOf: IHE.MHD.Minimal.Folder
Title: "Example Minimal Folder"
Description:      "Folder in List resource conforming only to Minimal metadata"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:5e2d58a3-2286-4a0e-8637-86f51be2d184"
* identifier[entryUUID].use = #official
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46391"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#folder
* entry[0].item = Reference(DocumentReference/ex-documentreference)


Instance:   ex-compFolder
InstanceOf: IHE.MHD.Comprehensive.Folder
Title: "Example Comprehensive Folder"
Description:      "Folder in List resource conforming only to Comprehensive metadata"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subject = Reference(Patient/ex-patient)
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:0a468477-5dd1-4a81-bddf-8d5ee9b0cac3"
* identifier[entryUUID].use = #official
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46341"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* title = "Example Folder with comprehensive metadata"
* code = MHDlistTypes#folder
* date = 2004-12-25T23:50:50-05:00
* entry[0].item = Reference(DocumentReference/ex-documentreference)
* entry[1].item = Reference(DocumentReference/ex-documentreference2)
* extension[designationType][0].valueCodeableConcept = http://snomed.info/sct#225728007
* extension[designationType][1].valueCodeableConcept = http://snomed.info/sct#284548004




// only include an example of a minimal FindDocumentLists as the IG builder crashes when I get more complete

Instance:   ex-findDocumentListsResponse
InstanceOf: IHE.MHD.FindDocumentListsResponseMessage
Title:      "Example of a Find Document Lists Response Message with a folder"
Description: "Example of a Find Documents List Response Bundle witha folder"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #searchset
* link[0].relation = "self"
* link[0].url = "test.fhir.net/R4/fhir/List?patient=9876&code=folder&status=current&designationType=http://snomed.info/sct|225728007"
* total = 1
* timestamp = 2021-04-16T11:32:24Z
* entry[Folder].fullUrl = "http://example.org/List/in-minimalFolder"
* entry[Folder].resource = in-minimalFolder

Instance:   in-minimalFolder
InstanceOf: IHE.MHD.Minimal.Folder
Title: "Example Minimal Folder"
Description:      "Folder in List resource conforming only to Minimal metadata"
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:29bef0e7-bb06-46b8-8241-ca2a5f8f7f2c"
* identifier[entryUUID].use = #official
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46342"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#folder
* entry[0].item = Reference(DocumentReference/ex-documentreference)


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-ProvideBundles1.fsh

// Simple PUSH style ITI-65, with a intended recipient email, one DocumentReference and the Document, also carrying the Patient resource


Instance: ex-response-minimalProvideDocumentBundleSimple
InstanceOf: IHE.MHD.ProvideDocumentBundleResponse 
Title:      "Response to Provide Document Bundle with Minimal metadata of one document"
Description: "Response bundle example given ex-minimalProvideDocumentBundleSimple
- for every entry in order given
  - successful create of SubmissionSet
  - successful create of DocumentReference
  - successful create of Binary
  - successful create of Patient

Note that in the case of the Patient, it is likely this successful create is just a fake success, as it was more likely to have been matched to a patient that already existed and THAT id was returned. (Alternative could have been a 303)"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction-response
* link[0].relation = "self"
* link[0].url = "http://example.com/fhir"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "List/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.094+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "DocumentReference/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.095+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "Binary/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.096+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "Patient/2"
* entry[=].response.lastModified = "2020-10-02T11:56:15.097+00:00"


Instance:   ex-minimalProvideDocumentBundleSimple
InstanceOf: IHE.MHD.Minimal.ProvideBundle
Title:      "Provide Document Bundle with Minimal metadata of one document"
Description: "Example of a minimal Provide Document Bundle for a push to an email intended recipient.
- The bundle contains
  - SubmissionSet - identifies to whom this is going and one documentReference
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Patient, as this is a push to a recipient that does not share a patient directory"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction
* timestamp = 2004-10-25T23:50:50-05:00
* entry[SubmissionSet].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00111100001"
* entry[SubmissionSet].resource = aaaaaaaa-bbbb-cccc-dddd-e00111100001
* entry[SubmissionSet].request.url = "List"
* entry[SubmissionSet].request.method = #POST
* entry[DocumentRefs].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00111100002"
* entry[DocumentRefs].resource = aaaaaaaa-bbbb-cccc-dddd-e00111100002
* entry[DocumentRefs].request.url = "DocumentReference"
* entry[DocumentRefs].request.method = #POST
* entry[Documents].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00111100003"
* entry[Documents].resource = aaaaaaaa-bbbb-cccc-dddd-e00111100003
* entry[Documents].request.url = "Binary"
* entry[Documents].request.method = #POST
* entry[Patient].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00111100004"
* entry[Patient].resource = aaaaaaaa-bbbb-cccc-dddd-e00111100004
* entry[Patient].request.url = "Patient"
* entry[Patient].request.method = #POST

Instance:   aaaaaaaa-bbbb-cccc-dddd-e00111100004
InstanceOf: Patient
Title:      "Dummy Patient example"
Description: "Dummy patient for push scenario, carried in the Bundle."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* name[+].family = "Schmidt"
* name[=].given = "Dee"

Instance: in-practitioner
InstanceOf: Practitioner
Title: "Intended Practitioner Recipient example"
Description: "a Practitioner identified only as an email address, carried as a contained resoruce."
Usage: #inline
* telecom.system = #email
* telecom.value = "JohnMoehrke@gmail.com"



Instance:   aaaaaaaa-bbbb-cccc-dddd-e00111100001
InstanceOf: IHE.MHD.Minimal.SubmissionSet
Title:      "SubmissionSet for Minimal metadata in a bundle"
Description: "Example of a minimal submissionSet in List resource with an intended recipient used in a bundle."
Usage: #inline
* text.status = #extensions
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">SubmissionSet with Patient</div>"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46343"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#submissionset
* date = 2004-10-25T23:50:50-05:00
* subject = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00111100004)
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00111100002)
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
* contained[0] = in-practitioner2
* extension[intendedRecipient].valueReference = Reference(in-practitioner2)


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00111100002
InstanceOf: IHE.MHD.Minimal.DocumentReference
Title:      "DocumentReference for Minimal metadata"
Description: "Example of a minimal DocumentReference resource. This points at a Binary also in the bundle."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* status = #current
* subject = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00111100004)
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* content.attachment.url = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00111100003"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA=="
* content.attachment.size = 11

Instance: aaaaaaaa-bbbb-cccc-dddd-e00111100003
InstanceOf: Binary
Title: "Dummy Binary document that says: Hello World"
Description: """
For Bundling Example binary that 
- holds \"Hello World\"
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA==
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-ProvideBundles2.fsh

// Simple PUSH style ITI-65, with a intended recipient email, one DocumentReference and the Document, using sourcePatientInfo


Instance: ex-response-minimalProvideDocumentBundleSimpleContained
InstanceOf: IHE.MHD.ProvideDocumentBundleResponse 
Title:      "Response to Provide Document Bundle with Minimal metadata of one document with sourcePatientInfo"
Description: """
Response bundle example given ex-minimalProvideDocumentBundleSimpleContained
- for every entry in order given
  - successful create of SubmissionSet
  - successful create of DocumentReference
  - successful create of Binary
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction-response
* link[0].relation = "self"
* link[0].url = "http://example.com/fhir"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "List/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.094+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "DocumentReference/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.095+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "Binary/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.096+00:00"





Instance:   ex-minimalProvideDocumentBundleSimpleContained
InstanceOf: IHE.MHD.Minimal.ProvideBundle
Title:      "Provide Document Bundle with Minimal metadata of one document with sourcePatientInfo"
Description: "Example of a minimal Provide Document Bundle for a push to an email intended recipient.
- The bundle contains
  - SubmissionSet - identifies to whom this is going and one documentReference
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Patient is contained in the DocumentReference. This would be more classic XDR/XDM model. Note there is no mention of the patient in the SubmissionSet in this case (hence minimal metadata), and if multiple documents were sent they would implicitly be the same patient, presumably with the same contained Patient; but given it is a contained Patinet there is no way to computably prove this beyond exact comparison of the contained object."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction
* timestamp = 2004-10-25T23:50:50-05:00
* entry[SubmissionSet].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00222200001"
* entry[SubmissionSet].resource = aaaaaaaa-bbbb-cccc-dddd-e00222200001
* entry[SubmissionSet].request.url = "List"
* entry[SubmissionSet].request.method = #POST
* entry[DocumentRefs].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00222200002"
* entry[DocumentRefs].resource = aaaaaaaa-bbbb-cccc-dddd-e00222200002
* entry[DocumentRefs].request.url = "DocumentReference"
* entry[DocumentRefs].request.method = #POST
* entry[Documents].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00222200003"
* entry[Documents].resource = aaaaaaaa-bbbb-cccc-dddd-e00222200003
* entry[Documents].request.url = "Binary"
* entry[Documents].request.method = #POST


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00222200004
InstanceOf: Patient
Title:      "Dummy Patient example"
Description: "Dummy patient for push scenario, carried in containment. Note that this Patient is not likely to meet recipient policy for matching, matching is a policy."
Usage: #inline
* name[+].family = "Schmidt"
* name[=].given = "Dee"

Instance: in-practitioner2
InstanceOf: Practitioner
Title: "Intended Practitioner Recipient example"
Description: "a Practitioner identified only as an email address, carried as a contained resoruce."
Usage: #inline
* telecom.system = #email
* telecom.value = "JohnMoehrke@gmail.com"



Instance:   aaaaaaaa-bbbb-cccc-dddd-e00222200001
InstanceOf: IHE.MHD.Minimal.SubmissionSet
Title:      "SubmissionSet for Minimal metadata in a bundle"
Description: "Example of a minimal submissionSet in List resource with an intended recipient used in a bundle."
Usage: #inline
* text.status = #extensions
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">SubmissionSet with Patient</div>"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46344"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#submissionset
* date = 2004-10-25T23:50:50-05:00
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00222200002)
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
* contained[+] = in-practitioner
* extension[intendedRecipient].valueReference = Reference(in-practitioner)


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00222200002
InstanceOf: IHE.MHD.Minimal.DocumentReference
Title:      "DocumentReference for Minimal metadata"
Description: "Example of a minimal DocumentReference resource being used in a PUSH. This contains only the sourcePatientInfo, thus equivilant of XDR/XDM use of sourcePatientInfo."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* status = #current
* contained[+] = aaaaaaaa-bbbb-cccc-dddd-e00222200004
* context.sourcePatientInfo  = Reference(aaaaaaaa-bbbb-cccc-dddd-e00222200004)
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* content.attachment.url = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00222200003"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA=="
* content.attachment.size = 11

Instance: aaaaaaaa-bbbb-cccc-dddd-e00222200003
InstanceOf: Binary
Title: "Dummy Binary document that says: Hello World"
Description: """
For Bundling Example binary that 
- holds \"Hello World\"
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA==
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-ProvideBundles3.fsh

// Simple publication style ITI-65, one DocumentReference and the Document -- classic XDS static document


Instance: ex-response-comprehensiveProvideDocumentBundleSimple
InstanceOf: IHE.MHD.ProvideDocumentBundleResponse 
Title:      "Response to Provide Document Bundle with one document with sourcePatientInfo"
Description: """
Response bundle example given ex-comprehensiveProvideDocumentBundleSimple
- for every entry in order given
  - successful create of SubmissionSet
  - successful create of DocumentReference - classic XDS static document
  - successful create of Binary
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction-response
* link[0].relation = "self"
* link[0].url = "http://example.com/fhir"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "List/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.094+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "DocumentReference/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.095+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "Binary/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.096+00:00"




Instance:   ex-comprehensiveProvideDocumentBundleSimple
InstanceOf: IHE.MHD.Comprehensive.ProvideBundle
Title:      "Provide Document Bundle with Comprehensive metadata of one document"
Description: "Example of a comprehensive Provide Document Bundle for a publication.
- The bundle contains
  - SubmissionSet - identifies one documentReference
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Patient is contained in the DocumentReference
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction
* timestamp = 2004-10-25T23:50:50-05:00
* entry[SubmissionSet].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00333300001"
* entry[SubmissionSet].resource = aaaaaaaa-bbbb-cccc-dddd-e00333300001
* entry[SubmissionSet].request.url = "List"
* entry[SubmissionSet].request.method = #POST
* entry[DocumentRefs].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00333300002"
* entry[DocumentRefs].resource = aaaaaaaa-bbbb-cccc-dddd-e00333300002
* entry[DocumentRefs].request.url = "DocumentReference"
* entry[DocumentRefs].request.method = #POST
* entry[Documents].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00333300003"
* entry[Documents].resource = aaaaaaaa-bbbb-cccc-dddd-e00333300003
* entry[Documents].request.url = "Binary"
* entry[Documents].request.method = #POST


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00333300004
InstanceOf: Patient
Title:      "Dummy Patient example"
Description: "Dummy patient for push scenario, carried in containment for sourcePatientInfo. This content is preserved to hold the Patient information as it was known at publication time."
Usage: #inline
* name[+].family = "Schmidt"
* name[=].given = "Dee"
* identifier[+].system = "http://example.org/patients"
* identifier[=].value = "mrn-1234"



Instance:   aaaaaaaa-bbbb-cccc-dddd-e00333300001
InstanceOf: IHE.MHD.Comprehensive.SubmissionSet
Title:      "SubmissionSet for Comprehensive metadata in a bundle"
Description: "Example of a comprehensive submissionSet in List resource with an intended recipient used in a bundle."
Usage: #inline
* text.status = #extensions
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">SubmissionSet with Patient</div>"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46346"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#submissionset
* date = 2004-10-25T23:50:50-05:00
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00333300002)
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
* subject = Reference(Patient/ex-patient)
* extension[designationType].valueCodeableConcept = http://snomed.info/sct#225728007


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00333300002
InstanceOf: IHE.MHD.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive metadata"
Description: "Example of a comprehensive DocumentReference resource being used in a PUSH. This contains the Patient, thus equivilant of XDR/XDM use of sourcePatientInfo."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* status = #current
* contained[+] = aaaaaaaa-bbbb-cccc-dddd-e00333300004
* context.sourcePatientInfo = Reference(aaaaaaaa-bbbb-cccc-dddd-e00333300004)
* subject = Reference(Patient/ex-patient)
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* content.attachment.url = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00333300003"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA=="
* content.attachment.size = 11
* type = http://loinc.org#60591-5
* category = http://loinc.org#11369-6
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-02-01T23:50:50-05:00
* content.attachment.title = "Hello World"
* date = 2020-02-01T23:50:50-05:00


Instance: aaaaaaaa-bbbb-cccc-dddd-e00333300003
InstanceOf: Binary
Title: "Dummy Binary document that says: Hello World"
Description: """
For Bundling Example binary that 
- holds \"Hello World\"
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA==
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="


Instance: aaaaaaaa-bbbb-cccc-eeee-e00333300003
InstanceOf: Binary
Title: "Dummy Binary document that says: Thanks for all the fish"
Description: """
For Bundling Example binary that 
- holds \"Thanks for all the fish\"
- hash e8e3172143001587cb7508446aa092eb51995809
- base64 of ZThlMzE3MjE0MzAwMTU4N2NiNzUwODQ0NmFhMDkyZWI1MTk5NTgwOQ==
- size 24
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "VGhhbmtzIGZvciBhbGwgdGhlIGZpc2g="


// example for artifacts presentation, replication of the #inline.
Instance:   ex-patchParameters
InstanceOf: PatchParameters
Title:      "DocumentReference for Comprehensive metadata beeing replaced"
Description: "Example of a comprehensive DocumentReference resource beeing replaced"
Usage: #example
* parameter[operation].name = "operation"
* parameter[operation].part[type].name = "type"
* parameter[operation].part[type].valueCode = #replace
* parameter[operation].part[path].name = "path"
* parameter[operation].part[path].valueString = "DocumentReference.status"
* parameter[operation].part[value].name = "value"
* parameter[operation].part[value].valueCode = #superseded

Instance:   aaaaaaaa-bbbb-cccc-ffff-e00333300002
InstanceOf: PatchParameters
Title:      "DocumentReference for Comprehensive metadata beeing replaced"
Description: "Example of a comprehensive DocumentReference resource beeing replaced"
Usage: #inline
* parameter[operation].name = "operation"
* parameter[operation].part[type].name = "type"
* parameter[operation].part[type].valueCode = #replace
* parameter[operation].part[path].name = "path"
* parameter[operation].part[path].valueString = "DocumentReference.status"
* parameter[operation].part[value].name = "value"
* parameter[operation].part[value].valueCode = #superseded

Instance:   aaaaaaaa-bbbb-cccc-eeee-e00333300001
InstanceOf: IHE.MHD.Comprehensive.SubmissionSet
Title:      "SubmissionSet for Comprehensive metadata in a bundle with a replace"
Description: "Example of a comprehensive submissionSet in List resource with an intended recipient used in a bundle."
Usage: #inline
* text.status = #extensions
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">SubmissionSet with Patient</div>"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46347"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#submissionset
* date = 2020-02-02T23:50:50-05:00
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-eeee-e00333300002)
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
* subject = Reference(Patient/ex-patient)
* extension[designationType].valueCodeableConcept = http://snomed.info/sct#225728007


Instance:   ex-comprehensiveProvideDocumentBundleReplace
InstanceOf: IHE.MHD.Comprehensive.ProvideBundle
Title:      "Provide Document Bundle with Comprehensive metadata of one document which replaces another document"
Description: "Example of a comprehensive Provide Document Bundle for a publication which replaces another document.
- The bundle contains
  - SubmissionSet - identifies one documentReference
  - DocumentReference - Two DocumentReferences, an update to the old DocumentReference and the new DocumentReferences relates to the old DocumentReference
  - Binary - the document
  - the Patient is contained in the DocumentReference
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction
* timestamp = 2020-02-02T23:50:50-05:00
* entry[SubmissionSet].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-eeee-e00333300001"
* entry[SubmissionSet].resource = aaaaaaaa-bbbb-cccc-eeee-e00333300001
* entry[SubmissionSet].request.url = "List"
* entry[SubmissionSet].request.method = #POST
* entry[UpdateDocumentRefs].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-ffff-e00333300002"
* entry[UpdateDocumentRefs].resource = aaaaaaaa-bbbb-cccc-ffff-e00333300002
* entry[UpdateDocumentRefs].request.url = "DocumentReference/ex-documentreference"
* entry[UpdateDocumentRefs].request.method = #PATCH
* entry[DocumentRefs].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-eeee-e00333300002"
* entry[DocumentRefs].resource = aaaaaaaa-bbbb-cccc-eeee-e00333300002
* entry[DocumentRefs].request.url = "DocumentReference"
* entry[DocumentRefs].request.method = #POST
* entry[Documents].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-eeee-e00333300003"
* entry[Documents].resource = aaaaaaaa-bbbb-cccc-eeee-e00333300003
* entry[Documents].request.url = "Binary"
* entry[Documents].request.method = #POST

Instance:   aaaaaaaa-bbbb-cccc-eeee-e00333300002
InstanceOf: IHE.MHD.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive metadata"
Description: "Example of a comprehensive DocumentReference resource being used in a PUSH. This contains the Patient, thus equivilant of XDR/XDM use of sourcePatientInfo."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* status = #current
* contained[+] = aaaaaaaa-bbbb-cccc-dddd-e00333300004
* context.sourcePatientInfo = Reference(aaaaaaaa-bbbb-cccc-dddd-e00333300004)
* subject = Reference(Patient/ex-patient)
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* content.attachment.url = "urn:uuid:aaaaaaaa-bbbb-cccc-eeee-e00333300003"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "ZThlMzE3MjE0MzAwMTU4N2NiNzUwODQ0NmFhMDkyZWI1MTk5NTgwOQ=="
* content.attachment.size = 24
* type = http://loinc.org#60591-5
* category = http://loinc.org#11369-6
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-02-02T23:50:50-05:00
* content.attachment.title = "Thanks for all the fish"
* date = 2020-02-02T23:50:50-05:00
* relatesTo.code = #replaces
* relatesTo.target = Reference(DocumentReference/ex-documentreference)


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-ProvideBundles4.fsh

// Simple publication style ITI-65, two DocumentReference(s) and the Document(s) -- classic XDS static document


Instance: ex-response-comprehensiveProvideDocumentBundleMultiple
InstanceOf: IHE.MHD.ProvideDocumentBundleResponse 
Title:      "Response to Provide Document Bundle with multiple documents with sourcePatientInfo"
Description: """
Response bundle example given ex-comprehensiveProvideDocumentBundleMultiple
- for every entry in order given
  - successful create of SubmissionSet
  - successful create of DocumentReference - classic XDS static document
  - successful create of Binary
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction-response
* link[0].relation = "self"
* link[0].url = "http://example.com/fhir"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "List/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.094+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "DocumentReference/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.095+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "Binary/1"
* entry[=].response.lastModified = "2020-10-02T11:56:15.096+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "DocumentReference/2"
* entry[=].response.lastModified = "2020-10-02T11:56:15.095+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "Binary/2"
* entry[=].response.lastModified = "2020-10-02T11:56:15.096+00:00"




Instance:   ex-comprehensiveProvideDocumentBundleMultiple
InstanceOf: IHE.MHD.Comprehensive.ProvideBundle
Title:      "Provide Document Bundle with Comprehensive metadata of multiple static document(s)"
Description: "Example of a comprehensive Provide Document Bundle for a publication.
- The bundle contains
  - SubmissionSet - identifies the documentReference(s)
  - DocumentReference - First DocumentReference
  - Binary - the first document
  - DocumentReference - Second DocumentReference
  - Binary - the second document
  - the Patient is contained in the DocumentReference
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction
* timestamp = 2004-10-25T23:50:50-05:00
* entry[SubmissionSet].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00444400001"
* entry[SubmissionSet].resource = aaaaaaaa-bbbb-cccc-dddd-e00444400001
* entry[SubmissionSet].request.url = "List"
* entry[SubmissionSet].request.method = #POST
* entry[DocumentRefs][+].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00444400002"
* entry[DocumentRefs][=].resource = aaaaaaaa-bbbb-cccc-dddd-e00444400002
* entry[DocumentRefs][=].request.url = "DocumentReference"
* entry[DocumentRefs][=].request.method = #POST
* entry[Documents][+].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00444400003"
* entry[Documents][=].resource = aaaaaaaa-bbbb-cccc-dddd-e00444400003
* entry[Documents][=].request.url = "Binary"
* entry[Documents][=].request.method = #POST
* entry[DocumentRefs][+].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00444400005"
* entry[DocumentRefs][=].resource = aaaaaaaa-bbbb-cccc-dddd-e00444400005
* entry[DocumentRefs][=].request.url = "DocumentReference"
* entry[DocumentRefs][=].request.method = #POST
* entry[Documents][+].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00444400006"
* entry[Documents][=].resource = aaaaaaaa-bbbb-cccc-dddd-e00444400006
* entry[Documents][=].request.url = "Binary"
* entry[Documents][=].request.method = #POST


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00444400004
InstanceOf: Patient
Title:      "Dummy Patient example"
Description: "Dummy patient for push scenario, carried in containment for sourcePatientInfo. This content is preserved to hold the Patient information as it was known at publication time."
Usage: #inline
* name[+].family = "Schmidt"
* name[=].given = "Dee"
* identifier[+].system = "http://example.org/patients"
* identifier[=].value = "mrn-1234"



Instance:   aaaaaaaa-bbbb-cccc-dddd-e00444400001
InstanceOf: IHE.MHD.Comprehensive.SubmissionSet
Title:      "SubmissionSet for Comprhensive metadata in a bundle"
Description: "Example of a comprehensive submissionSet in List resource with an intended recipient used in a bundle."
Usage: #inline
* text.status = #extensions
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">SubmissionSet with Patient</div>"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46348"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#submissionset
* date = 2004-10-25T23:50:50-05:00
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00444400002)
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00444400005)
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
* subject = Reference(Patient/ex-patient)
* extension[designationType].valueCodeableConcept = http://snomed.info/sct#225728007


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00444400002
InstanceOf: IHE.MHD.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive metadata"
Description: "Example of a comprehensive DocumentReference resource being used in a PUSH. This contains the Patient, thus equivilant of XDR/XDM use of sourcePatientInfo."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* status = #current
* contained[+] = aaaaaaaa-bbbb-cccc-dddd-e00444400004
* context.sourcePatientInfo = Reference(aaaaaaaa-bbbb-cccc-dddd-e00444400004)
* subject = Reference(Patient/ex-patient)
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* content.attachment.url = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00444400003"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA=="
* content.attachment.size = 11
* type = http://loinc.org#60591-5
* category = http://loinc.org#11369-6
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-02-01T23:50:50-05:00
* content.attachment.title = "Hello World"
* date = 2020-02-01T23:50:50-05:00


Instance: aaaaaaaa-bbbb-cccc-dddd-e00444400003
InstanceOf: Binary
Title: "Dummy Binary document that says: Hello World"
Description: """
For Bundling Example binary that 
- holds \"Hello World\"
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA==
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="

Instance:   aaaaaaaa-bbbb-cccc-dddd-e00444400005
InstanceOf: IHE.MHD.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive metadata"
Description: "Example of a comprehensive DocumentReference resource being used in a PUSH. This contains the Patient, thus equivilant of XDR/XDM use of sourcePatientInfo."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* status = #current
* contained[+] = aaaaaaaa-bbbb-cccc-dddd-e00444400004
* context.sourcePatientInfo = Reference(aaaaaaaa-bbbb-cccc-dddd-e00444400004)
* subject = Reference(Patient/ex-patient)
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* content.attachment.url = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00444400006"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "Y2QzNmIzNzA3NThhMjU5YjM0ODQ1MDg0YTZjYzM4NDczY2I5NWUyNw=="
* content.attachment.size = 445
* type = http://loinc.org#60591-5
* category = http://loinc.org#11369-6
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-02-01T23:50:50-05:00
* content.attachment.title = "Laurem ipsum"
* date = 2020-02-01T23:50:50-05:00


Instance: aaaaaaaa-bbbb-cccc-dddd-e00444400006
InstanceOf: Binary
Title: "Dummy Binary document that contains Laurem Ipsum text"
Description: """
For Bundling Example binary that 
- holds \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"
- size 445
- hash cd36b370758a259b34845084a6cc38473cb95e27
- base64 of the hash Y2QzNmIzNzA3NThhMjU5YjM0ODQ1MDg0YTZjYzM4NDczY2I5NWUyNw==
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluIGN1bHBhIHF1aSBvZmZpY2lhIGRlc2VydW50IG1vbGxpdCBhbmltIGlkIGVzdCBsYWJvcnVtLg=="



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-ProvideBundles5.fsh

// Fully populated publication style ITI-65, one folder, one DocumentReference and the Document -- classic XDS static document


Instance: ex-response-comprehensiveProvideDocumentBundleComplete
InstanceOf: IHE.MHD.ProvideDocumentBundleResponse 
Title:      "Response to fully populated Provide Document Bundle with one document with sourcePatientInfo"
Description: """
Response bundle example given ex-comprehensiveProvideDocumentBundleComplete
- for every entry in order given
  - successful create of SubmissionSet
  - successful create of Folder
  - successful create of DocumentReference - classic XDS static document
  - successful create of Binary
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction-response
* link[0].relation = "self"
* link[0].url = "http://example.com/fhir"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "List/501"
* entry[=].response.lastModified = "2020-10-05T11:56:15.094+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "List/502"
* entry[=].response.lastModified = "2020-10-05T11:56:15.095+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "DocumentReference/501"
* entry[=].response.lastModified = "2020-10-05T11:56:15.096+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "Binary/501"
* entry[=].response.lastModified = "2020-10-05T11:56:15.097+00:00"




Instance:   ex-comprehensiveProvideDocumentBundleComplete
InstanceOf: IHE.MHD.Comprehensive.ProvideBundle
Title:      "Provide Document Bundle with complete Comprehensive metadata of one document"
Description: "Example of a complete comprehensive Provide Document Bundle for a publication.
- The bundle contains
  - SubmissionSet - identifies one documentReference
  - Folder - identifies one documentReference
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Patient is contained in the DocumentReference
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction
* timestamp = 2004-10-05T11:50:50-05:00
* entry[SubmissionSet].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00555500001"
* entry[SubmissionSet].resource = aaaaaaaa-bbbb-cccc-dddd-e00555500001
* entry[SubmissionSet].request.url = "List"
* entry[SubmissionSet].request.method = #POST
* entry[Folders].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00555500004"
* entry[Folders].resource = aaaaaaaa-bbbb-cccc-dddd-e00555500004
* entry[Folders].request.url = "List"
* entry[Folders].request.method = #POST
* entry[DocumentRefs].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00555500002"
* entry[DocumentRefs].resource = aaaaaaaa-bbbb-cccc-dddd-e00555500002
* entry[DocumentRefs].request.url = "DocumentReference"
* entry[DocumentRefs].request.method = #POST
* entry[Documents].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00555500003"
* entry[Documents].resource = aaaaaaaa-bbbb-cccc-dddd-e00555500003
* entry[Documents].request.url = "Binary"
* entry[Documents].request.method = #POST


Instance:   in-patient5
InstanceOf: Patient
Title:      "Dummy Patient example"
Description: "Dummy patient for push scenario, carried in containment for sourcePatientInfo. This content is preserved to hold the Patient information as it was known at publication time."
Usage: #inline
* name[+].family = "Schmidt"
* name[=].given = "Dee"
* identifier[+].system = "http://example.org/patients"
* identifier[=].value = "mrn-1234"

Instance: in-practitionerAuthor
InstanceOf: Practitioner
Title: "Author Practitioner example"
Description: "a Practitioner identified only as an email address, carried as a contained resource."
Usage: #inline
* telecom.system = #email
* telecom.value = "iti@ihe.net"

Instance: in-practitionerRecipient
InstanceOf: Practitioner
Title: "Intended Practitioner Recipient example"
Description: "a Practitioner identified only as an email address, carried as a contained resource."
Usage: #inline
* telecom.system = #email
* telecom.value = "JohnMoehrke@gmail.com"

Instance: in-organizationAuthor
InstanceOf: Organization
Title: "Authoring Organization example"
Description: "An Organization identified as an author of content."
Usage: #inline
* name = "my Hospital"


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00555500001
InstanceOf: IHE.MHD.Comprehensive.SubmissionSet
Title:      "SubmissionSet for Comprehensive metadata in a bundle"
Description: "Example of a comprehensive submissionSet in List resource with an intended recipient used in a bundle."
Usage: #inline
* text.status = #extensions
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">SubmissionSet with Patient</div>"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46349"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#submissionset
* date = 2004-10-25T23:50:50-05:00
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00555500002)
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00555500004)
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
// comprehensive mandates
* subject = Reference(Patient/ex-patient)
* extension[designationType].valueCodeableConcept = http://snomed.info/sct#225728007
// complete adds
* contained[+] = in-practitionerRecipient
* extension[intendedRecipient].valueReference = Reference(in-practitionerRecipient)
* title = "Hello World SubmissionSet"
* contained[+] = in-practitionerAuthor
* source = Reference(in-practitionerAuthor)
* contained[+] = in-organizationAuthor
* source.extension[AuthorOrg].valueReference = Reference(in-organizationAuthor)
* note.text = "Comments about Hello World SubmissionSet"


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00555500002
InstanceOf: IHE.MHD.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive metadata"
Description: "Example of a comprehensive DocumentReference resource being used in a PUSH. This contains the Patient, thus equivilant of XDR/XDM use of sourcePatientInfo."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* status = #current
* contained[+] = in-patient5
* context.sourcePatientInfo = Reference(in-patient5)
* subject = Reference(Patient/ex-patient)
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* content.attachment.url = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00555500003"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA=="
* content.attachment.size = 11
* type = http://loinc.org#60591-5
* category = http://loinc.org#11369-6
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-02-01T23:50:50-05:00
* content.attachment.title = "Hello World"
* date = 2020-02-01T23:50:50-05:00
* contained[+] = in-organizationAuthor
* author[+] = Reference(in-organizationAuthor)
* contained[+] = in-practitionerAuthor
* author[+] = Reference(in-practitionerAuthor)
* authenticator[+] = Reference(in-organizationAuthor)
* relatesTo.code = #appends
* relatesTo.target = Reference(DocumentReference/ex-DocumentReferenceComprehensive)
* description = "a complete comprehensive metadata document reference"
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActCode#PATDOC
* context.period.start = 1990-02-01T23:50:50-05:00
* context.period.end = 2020-02-01T23:50:50-05:00
* context.related.identifier.system =  "urn:ietf:rfc:3986"
* context.related.identifier.value = "urn:uuid:7d5bb8ac-68ee-4926-85e7-baaaaaaaaaad"


Instance: aaaaaaaa-bbbb-cccc-dddd-e00555500003
InstanceOf: Binary
Title: "Dummy Binary document that says: Hello World"
Description: """
For Bundling Example binary that 
- holds \"Hello World\"
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA==
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00555500004
InstanceOf: IHE.MHD.Comprehensive.Folder
Title: "Example complete Comprehensive Folder"
Description:      "Folder in List resource conforming Comprehensive metadata fully populated"
Usage: #inline
* text.status = #extensions
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Folder with Patient</div>"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subject = Reference(Patient/ex-patient)
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46350"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* title = "Example Folder with comprehensive metadata"
* code = MHDlistTypes#folder
* date = 2004-12-25T23:50:50-05:00
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00555500002)
* extension[designationType][0].valueCodeableConcept = http://snomed.info/sct#225728007
* extension[designationType][1].valueCodeableConcept = http://snomed.info/sct#284548004
* note.text = "Folder for submission"


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-ProvideBundles6.fsh

// Fully populated publication style ITI-65, one folder, one DocumentReference and the Document -- classic XDS static document

// note this instance name is shortened because of the max length of 64 characters
Instance: ex-response-unContainedComprehensiveProvideDocumentBundleCompt
InstanceOf: IHE.MHD.ProvideDocumentBundleResponse 
Title:      "Response to fully populated Provide Document Bundle with one document with sourcePatientInfo"
Description: """
Response bundle example given ex-unContainedComprehensiveProvideDocumentBundleComplete
- for every entry in order given
  - successful create of SubmissionSet
  - successful create of DocumentReference - classic XDS static document
  - successful create of Binary
"""
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction-response
* link[0].relation = "self"
* link[0].url = "http://example.com/fhir"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "List/501"
* entry[=].response.lastModified = "2020-10-05T11:56:15.094+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "DocumentReference/501"
* entry[=].response.lastModified = "2020-10-05T11:56:15.096+00:00"
* entry[+].response.status = "201 Created"
* entry[=].response.location = "Binary/501"
* entry[=].response.lastModified = "2020-10-05T11:56:15.097+00:00"




Instance:   ex-unContainedComprehensiveProvideDocumentBundleComplete
InstanceOf: IHE.MHD.UnContained.Comprehensive.ProvideBundle
Title:      "Provide Document Bundle with complete UnContained Comprehensive metadata of one document"
Description: "Example of a complete uncontained comprehensive Provide Document Bundle for a publication.
- The bundle contains
  - SubmissionSet - identifies one documentReference
  - Folder - identifies one documentReference
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Practitioner and Organization are references
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction
* timestamp = 2004-10-05T11:50:50-05:00
* entry[SubmissionSet].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00666600001"
* entry[SubmissionSet].resource = aaaaaaaa-bbbb-cccc-dddd-e00666600001
* entry[SubmissionSet].request.url = "List"
* entry[SubmissionSet].request.method = #POST
* entry[DocumentRefs].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00666600002"
* entry[DocumentRefs].resource = aaaaaaaa-bbbb-cccc-dddd-e00666600002
* entry[DocumentRefs].request.url = "DocumentReference"
* entry[DocumentRefs].request.method = #POST
* entry[Documents].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00666600003"
* entry[Documents].resource = aaaaaaaa-bbbb-cccc-dddd-e00666600003
* entry[Documents].request.url = "Binary"
* entry[Documents].request.method = #POST



Instance:   aaaaaaaa-bbbb-cccc-dddd-e00666600001
InstanceOf: IHE.MHD.UnContained.Comprehensive.SubmissionSet
Title:      "SubmissionSet for UnContained Comprehensive metadata in a bundle"
Description: "Example of a uncontained comprehensive submissionSet in List resource with an intended recipient used in a bundle."
Usage: #inline
* text.status = #extensions
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">SubmissionSet with Patient</div>"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46351"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#submissionset
* date = 2004-10-25T23:50:50-05:00
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00666600002)
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
// comprehensive mandates
* subject = Reference(Patient/ex-patient)
* extension[designationType].valueCodeableConcept = http://snomed.info/sct#225728007
// complete adds
* extension[intendedRecipient].valueReference = Reference(Practitioner/ex-practitioner)
* title = "Hello World SubmissionSet"
* source = Reference(Practitioner/ex-practitioner)
* source.extension[AuthorOrg].valueReference = Reference(Organization/ex-organization)
* note.text = "Comments about Hello World SubmissionSet"


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00666600002
InstanceOf: IHE.MHD.UnContained.Comprehensive.DocumentReference
Title:      "DocumentReference for UnContained Comprehensive metadata"
Description: "Example of a comprehensive uncontained DocumentReference resource being used in a PUSH. This contains the Patient, thus equivilant of XDR/XDM use of sourcePatientInfo."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* status = #current
* subject = Reference(Patient/ex-patient)
* context.sourcePatientInfo = Reference(Patient/ex-patient)
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* content.attachment.url = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00666600003"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA=="
* content.attachment.size = 11
* type = http://loinc.org#60591-5
* category = http://loinc.org#11369-6
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-02-01T23:50:50-05:00
* content.attachment.title = "Hello World"
* date = 2020-02-01T23:50:50-05:00
* author[+] = Reference(Organization/ex-organization)
* author[+] = Reference(Practitioner/ex-practitioner)
* authenticator[+] = Reference(Organization/ex-organization)
* relatesTo.code = #appends
* relatesTo.target = Reference(DocumentReference/ex-DocumentReferenceComprehensive)
* description = "a complete comprehensive metadata document reference"
* context.event = http://terminology.hl7.org/CodeSystem/v3-ActCode#PATDOC
* context.period.start = 1990-02-01T23:50:50-05:00
* context.period.end = 2020-02-01T23:50:50-05:00
* context.related.identifier.system =  "urn:ietf:rfc:3986"
* context.related.identifier.value = "urn:uuid:7d5bb8ac-68ee-4926-85e7-baaaaaaaaaad"


Instance: aaaaaaaa-bbbb-cccc-dddd-e00666600003
InstanceOf: Binary
Title: "Dummy Binary document that says: Hello World"
Description: """
For Bundling Example binary that 
- holds \"Hello World\"
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA==
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-ProvideBundles7.fsh

// Add a new document to an existing Folder
// note did not include responses for all of these

Instance:   ex-ProvideDocumentBundle-addToFolder
InstanceOf: IHE.MHD.Comprehensive.ProvideBundle
Title:      "Provide Document Bundle with one document to be added to an existing folder"
Description: "Example of a comprehensive Provide Document Bundle for a publication and added to an existing folder.
- The bundle contains
  - SubmissionSet - identifies one documentReference
  - Folder - existing Folder to be updated
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Patient is contained in the DocumentReference
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* type = #transaction
* timestamp = 2004-10-25T23:50:50-05:00
* entry[SubmissionSet].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00777700001"
* entry[SubmissionSet].resource = aaaaaaaa-bbbb-cccc-dddd-e00777700001
* entry[SubmissionSet].request.url = "List"
* entry[SubmissionSet].request.method = #POST
* entry[Folders].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00777700005"
* entry[Folders].resource = aaaaaaaa-bbbb-cccc-dddd-e00777700005
* entry[Folders].request.url = "List"
* entry[Folders].request.method = #PUT
* entry[DocumentRefs].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00777700002"
* entry[DocumentRefs].resource = aaaaaaaa-bbbb-cccc-dddd-e00777700002
* entry[DocumentRefs].request.url = "DocumentReference"
* entry[DocumentRefs].request.method = #POST
* entry[Documents].fullUrl = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00777700003"
* entry[Documents].resource = aaaaaaaa-bbbb-cccc-dddd-e00777700003
* entry[Documents].request.url = "Binary"
* entry[Documents].request.method = #POST


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00777700004
InstanceOf: Patient
Title:      "Dummy Patient example"
Description: "Dummy patient for push scenario, carried in containment for sourcePatientInfo. This content is preserved to hold the Patient information as it was known at publication time."
Usage: #inline
* name[+].family = "Schmidt"
* name[=].given = "Dee"
* identifier[+].system = "http://example.org/patients"
* identifier[=].value = "mrn-1234"



Instance:   aaaaaaaa-bbbb-cccc-dddd-e00777700001
InstanceOf: IHE.MHD.Comprehensive.SubmissionSet
Title:      "SubmissionSet for Comprehensive metadata in a bundle"
Description: "Example of a comprehensive submissionSet in List resource with an intended recipient used in a bundle."
Usage: #inline
* text.status = #extensions
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">SubmissionSet with Patient</div>"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46352"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#submissionset
* date = 2004-10-25T23:50:50-05:00
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00777700002)
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00777700005)
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
* subject = Reference(Patient/ex-patient)
* extension[designationType].valueCodeableConcept = http://snomed.info/sct#225728007


Instance:   aaaaaaaa-bbbb-cccc-dddd-e00777700002
InstanceOf: IHE.MHD.Comprehensive.DocumentReference
Title:      "DocumentReference for Comprehensive metadata"
Description: "Example of a comprehensive DocumentReference resource being used in a PUSH. This contains the Patient, thus equivilant of XDR/XDM use of sourcePatientInfo."
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.50220.62012"
* status = #current
* contained[+] = aaaaaaaa-bbbb-cccc-dddd-e00777700004
* context.sourcePatientInfo = Reference(aaaaaaaa-bbbb-cccc-dddd-e00777700004)
* subject = Reference(Patient/ex-patient)
* content.format = http://ihe.net/fhir/ihe.formatcode.fhir/CodeSystem/formatcode#urn:ihe:iti:xds-sd:text:2008
* content.attachment.url = "urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00777700003"
* content.attachment.contentType = #text/plain
* content.attachment.hash = "MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA=="
* content.attachment.size = 11
* type = http://loinc.org#60591-5
* category = http://loinc.org#11369-6
* securityLabel = http://terminology.hl7.org/CodeSystem/v3-Confidentiality#R
* context.facilityType = http://snomed.info/sct#82242000
* context.practiceSetting =  http://snomed.info/sct#408467006
* content.attachment.language = urn:ietf:bcp:47#en
* content.attachment.creation = 2020-02-01T23:50:50-05:00
* content.attachment.title = "Hello World"
* date = 2020-02-01T23:50:50-05:00


Instance: aaaaaaaa-bbbb-cccc-dddd-e00777700003
InstanceOf: Binary
Title: "Dummy Binary document that says: Hello World"
Description: """
For Bundling Example binary that 
- holds \"Hello World\"
- size 11
- hash 0a4d55a8d778e5022fab701977c5d840bbc486d0
- base64 of the hash MGE0ZDU1YThkNzc4ZTUwMjJmYWI3MDE5NzdjNWQ4NDBiYmM0ODZkMA==
"""
Usage: #inline
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* contentType = #text/plain
* data = "SGVsbG8gV29ybGQ="

// the instance is simulating an existing
Instance:   aaaaaaaa-bbbb-cccc-dddd-e00777700005
InstanceOf: IHE.MHD.Comprehensive.Folder
Title: "Example complete Comprehensive Folder"
Description:      "Folder in List resource conforming Comprehensive metadata fully populated"
Usage: #inline
* text.status = #extensions
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Folder with Patient</div>"
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subject = Reference(Patient/ex-patient)
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46353"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* title = "Example Folder with comprehensive metadata"
* code = MHDlistTypes#folder
* date = 2004-12-25T23:50:50-05:00
* entry[+].item = Reference(DocumentReference/ex-DocumentReferenceComprehensive)
// The only change from what exists is that this new entry is added
* entry[+].item = Reference(urn:uuid:aaaaaaaa-bbbb-cccc-dddd-e00777700002)
* extension[designationType][0].valueCodeableConcept = http://snomed.info/sct#225728007
* extension[designationType][1].valueCodeableConcept = http://snomed.info/sct#284548004
* note.text = "Folder for submission"


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/ex-SubmissionSet.fsh

Instance:   ex-minimalSubmissionSet
InstanceOf: IHE.MHD.Minimal.SubmissionSet
Title:      "SubmissionSet for Minimal metadata"
Description: "Example of a minimal submissionSet in List resource."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:40b3366f-7e4b-4d02-bbac-901aaa8d7183"
* identifier[entryUUID].use = #official
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46354"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* code = MHDlistTypes#submissionset
* date = 2004-12-25T23:50:50-05:00
* entry[0].item = Reference(DocumentReference/ex-documentreference)
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"


Instance:   ex-compSubmissionSetList
InstanceOf: IHE.MHD.Comprehensive.SubmissionSet
Title: "Example Comprehensive SubmissionSet"
Description:      "SubmissionSet in List resource conforming minimally to Comprehensive metadata"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subject = Reference(Patient/ex-patient)
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:340d303b-b889-4d44-b766-27f14c212236"
* identifier[entryUUID].use = #official
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46355"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* title = "Example SubmissionSet for comprehensive metadata"
* code = MHDlistTypes#submissionset
* date = 2004-12-25T23:50:50-05:00
* entry[0].item = Reference(DocumentReference/ex-documentreference)
* entry[1].item = Reference(List/ex-list)
* extension[designationType].valueCodeableConcept = http://snomed.info/sct#225728007
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"

Instance:   ex-compEmailPackage
InstanceOf: IHE.MHD.Comprehensive.SubmissionSet
Title: "Example Comprehensive Email SubmissionSet"
Description:      "SubmissionSet in List resource conforming Comprehensive metadata with an intendedRecipient"
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subject = Reference(Patient/ex-patient)
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:1d136ed2-d27b-4353-8ccf-49581ab4ae66"
* identifier[entryUUID].use = #official
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46356"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* title = "Example SubmissionSet for comprehensive metadata with an intendedRecipient"
* code = MHDlistTypes#submissionset
* date = 2004-12-25T23:50:50-05:00
* entry[0].item = Reference(DocumentReference/ex-documentreference)
* extension[designationType].valueCodeableConcept = http://snomed.info/sct#225728007
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
* extension[intendedRecipient].valueReference = Reference(Practitioner/ex-practitioner)


Instance:   ex-compSubmissionSetFullUnContained
InstanceOf: IHE.MHD.UnContained.Comprehensive.SubmissionSet
Title: "Example UnContained Comprehensive Full SubmissionSet"
Description:      "SubmissionSet in List resource conforming fully to UnContained References Option and Comprehensive Metadata Option. This has all elements fully populated."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subject = Reference(Patient/ex-patient)
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:479f69ae-4bb1-4cdb-97bd-80e2c9b85d01"
* identifier[entryUUID].use = #official
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46357"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* title = "Example SubmissionSet for comprehensive metadata"
* code = MHDlistTypes#submissionset
* date = 2004-12-25T23:50:50-05:00
* entry[0].item = Reference(DocumentReference/ex-documentreference)
* entry[1].item = Reference(List/ex-list)
* extension[designationType].valueCodeableConcept = http://snomed.info/sct#225728007
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
* extension[intendedRecipient].valueReference = Reference(Practitioner/ex-practitioner)
* source = Reference(ex-practitioner)

Instance:   ex-compSubmissionSetFull
InstanceOf: IHE.MHD.Minimal.SubmissionSet
Title: "Example Comprehensive Full SubmissionSet"
Description:      "SubmissionSet in List resource conforming fully to Comprehensive metadata. This has all elements fully populated."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* subject = Reference(Patient/ex-patient)
* identifier[entryUUID].system = "urn:ietf:rfc:3986"
* identifier[entryUUID].value = "urn:uuid:2158bc9d-3d34-4503-9253-1e0383f828ff"
* identifier[entryUUID].use = #official
* identifier[uniqueId].system = "urn:ietf:rfc:3986"
* identifier[uniqueId].value = "urn:oid:1.2.840.113556.1.8000.2554.58783.21864.3474.19410.44358.58254.41281.46358"
* identifier[uniqueId].use = #usual
* status = #current
* mode = #working
* title = "Example SubmissionSet for comprehensive metadata"
* code = MHDlistTypes#submissionset
* date = 2004-12-25T23:50:50-05:00
* entry[0].item = Reference(DocumentReference/ex-documentreference)
* entry[1].item = Reference(List/ex-list)
* contained[0] = in-sender
* source = Reference(in-sender)
* source.extension[AuthorOrg].valueReference = Reference(Organization/ex-organization)
* extension[designationType].valueCodeableConcept = http://snomed.info/sct#225728007
* extension[sourceId].valueIdentifier.value = "urn:oid:1.2.3.4"
* extension[intendedRecipient].valueReference = Reference(ex-practitioner)


Instance: in-sender
InstanceOf: Practitioner
Usage: #inline
* telecom.system = #email
* telecom.value = "JohnMoehrke@gmail.com"

// do not include examples of search set as there are problems with the IG builder


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/findDocumentReferencesResponse.fsh

Profile:        FindDocumentReferencesResponse
Parent:         Bundle
Id:             IHE.MHD.FindDocumentReferencesResponseMessage
Title:          "MHD Find Document References Response message"
Description:    "A profile on the Find Document References Response message for ITI-67"
* type = #searchset (exactly)
* total 1..
* entry ^slicing.discriminator[0].type = #profile
* entry ^slicing.discriminator[0].path = "resource"
* entry ^slicing.rules = #open
* entry.fullUrl 1..
* entry contains DocumentReference 0..*
* entry[DocumentReference] ^short = "DocumentReference"
* entry[DocumentReference].resource 1..
* entry[DocumentReference].resource only MinimalDocumentReference

Profile:        FindDocumentReferencesComprehensiveResponse
Parent:         Bundle
Id:             IHE.MHD.FindDocumentReferencesComprehensiveResponseMessage
Title:          "MHD Find Document References Comprehensive Response message"
Description:    "A profile on the Find Document References Comprehensive Response message for ITI-67"
* type = #searchset (exactly)
* total 1..
* entry ^slicing.discriminator[0].type = #profile
* entry ^slicing.discriminator[0].path = "resource"
* entry ^slicing.rules = #open
* entry.fullUrl 1..
* entry contains DocumentReference 0..*
* entry[DocumentReference] ^short = "DocumentReference"
* entry[DocumentReference].resource 1..
* entry[DocumentReference].resource only ComprehensiveDocumentReference

Instance: DocumentReference-Creation
InstanceOf: SearchParameter
Title: "search on the DocumentReference.content.attachment.creation element"
Description: "Search Parameter extension enabling clients to search on the DocumentReference.content.attachment.creation element"
Usage: #definition
* url = "https://profiles.ihe.net/ITI/MHD/SearchParameter/DocumentReference-Creation"
* description = "This SearchParameter enables finding DocumentReference by the creation dateTime."
* name = "Creation"
* status = #active
* code = #creation
* base = #DocumentReference
* expression = "DocumentReference.content.attachment.creation"
* type = #date


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/findFindDocumentListsResponse.fsh

Profile:        FindListsResponse
Parent:         Bundle
Id:             IHE.MHD.FindDocumentListsResponseMessage
Title:          "MHD Find Document Lists Response Message"
Description:    "A profile on the Find Document Lists Response message for ITI-66"
* type = #searchset (exactly)
* total 1..
* entry ^slicing.discriminator[0].type = #profile
* entry ^slicing.discriminator[0].path = "resource"
* entry ^slicing.rules = #closed
* entry contains 
  SubmissionSet 0..* and
  Folder 0..*
* entry[SubmissionSet] ^short = "SubmissionSets"
* entry[SubmissionSet].fullUrl 1..
* entry[SubmissionSet].resource 1..
* entry[SubmissionSet].resource ^type.code = "List"
* entry[SubmissionSet].resource ^type.profile = Canonical(IHE.MHD.Minimal.SubmissionSet)
* entry[Folder] ^short = "Folders"
* entry[Folder].fullUrl 1..
* entry[Folder].resource 1..
* entry[Folder].resource ^type.code = "List"
* entry[Folder].resource ^type.profile = Canonical(IHE.MHD.Minimal.Folder)




---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/folder.fsh

// equivalent to MHD Minimal Folder
Profile:        Folder
Parent:         MhdList
Id:             IHE.MHD.Minimal.Folder
Title:          "MHD Folder Minimal"
Description:    "A profile on the List resource for MHD use as a Folder with minimal metadata constraints. 
- MHD is based on the [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) model, 
- the [3:4.1 Abstract Metadata Model](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.1.html#4.1), and 
- the use defined here is FHIR List for use as a Folder implementation of the 
- ebRIM implementation at [3:4.2.3.4 Folder Attributes](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.4).
- with use-cases and constraints found in [3:4.3 Additional Document Sharing Requirements](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3)"
* extension[designationType] 0..* MS
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "use"
* identifier ^slicing.rules = #open
* identifier contains uniqueId 0..1
* identifier[uniqueId] only UniqueIdIdentifier
* identifier contains entryUUID 0..*
* identifier[entryUUID] only EntryUUIDIdentifier
//* status 
* mode = #working
* title 0..1
* code = MHDlistTypes#folder
* subject 0..1 MS
* subject only Reference(Patient)
* encounter 0..0
* date 0..1
* orderedBy 0..0
* source 0..0
* note 0..1
* entry.flag 0..0
* entry.deleted 0..0
* entry.date 0..0
* entry.item 1..1
* entry.item only Reference(DocumentReference)
* emptyReason 0..0


// Note there is no impact of UnContained on a folder
// equivalent to MHD Comprehensive List Folder 
Profile:        FolderComprehensive
Parent:         IHE.MHD.Minimal.Folder
Id:             IHE.MHD.Comprehensive.Folder
Title:          "MHD Folder Comprehensive"
Description:    "A profile on the List resource for MHD Comprehensive Metadata Folder. Note UnContained has no impact on Folder.
- MHD is based on the [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) model, 
- the [3:4.1 Abstract Metadata Model](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.1.html#4.1), and 
- the use defined here is FHIR List for use as a Folder implementation of the 
- ebRIM implementation at [3:4.2.3.4 Folder Attributes](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.4).
- with use-cases and constraints found in [3:4.3 Additional Document Sharing Requirements](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3)"
* subject 1..1
* extension[designationType] 1..*
* title 1..1

//  mappings to XDS 
Mapping: Folder-Mapping
Source:	IHE.MHD.Minimal.Folder
Target: "XDS"
Title: "XDS and MHD Mapping"
* -> "XDS Folder: Used in the context of the IHE MHD ImplementationGuide"
* meta.profile -> "Folder.limitedMetadata"
* extension[designationType] -> "Folder.codeList"
* identifier -> "Folder.entryUUID and Folder.uniqueId"
* status -> "Folder.availabilityStatus"
* mode -> "shall be 'working'"
* title -> "Folder.title"
* code -> "shall be 'folder'"
* subject -> "Folder.patientId"
* encounter -> "n/a"
* date -> "Folder.lastUpdateTime"
* source -> "n/a"
* orderedBy -> "n/a"
* note -> "Folder.comments"
* entry.flag -> "n/a"
* entry.deleted -> "n/a"
* entry.date -> "n/a"
* entry.item -> "references to DocumentReference(s)"
* emptyReason -> "n/a"


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/generate.fsh



Profile: MHDgenerateMetadataParametersIn
Parent: Parameters
Id: IHE.MHD.GenerateMetadata.Parameters.In
Title: "IHE MHD GenerateMetadata Parameters In"
Description: "The Input Parameters for the $generate-metadata operation
- Input: binary, bundle"
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.description = "allowed parameters are binary or bundle"
* parameter ^slicing.rules = #closed
* parameter 1..1
* parameter contains
    document 1..1
* parameter[document] ^short = "document"
* parameter[document].name = "document" (exactly)
* parameter[document].value[x] 0..0
* parameter[document].resource 1..1
* parameter[document].resource only Binary or Bundle

Profile: MHDgenerateMetadataParametersOut
Parent: Parameters
Id: IHE.MHD.GenerateMetadata.Parameters.Out
Title: "IHE MHD GenerateMetadata Parameters Out"
Description: "The Output Parameters for the $generate-metadata operation
- Output: DocumentReference reference"
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.description = "DocumentReference reference"
* parameter ^slicing.rules = #closed
* parameter 1..1
* parameter contains
    docRef 1..1
* parameter[docRef] ^short = "DocumentReference created"
* parameter[docRef].name = "DocumentReference" (exactly)
* parameter[docRef].value[x] 1..1
* parameter[docRef].value[x] only Reference
* parameter[docRef].valueReference only Reference(DocumentReference)



Instance: ex-input-binary
InstanceOf: MHDgenerateMetadataParametersIn
Description: "example Parameters with a binary"
Usage: #example
* parameter[document].name = "document"
* parameter[document].resource = aaaaaaaa-bbbb-cccc-dddd-e00111100003

Instance: ex-out
InstanceOf: MHDgenerateMetadataParametersOut
Description: "example output from GenerateMetadata"
Usage: #example
* parameter[docRef].name = "DocumentReference"
* parameter[docRef].valueReference = Reference(ex-DocumentReferenceMinimal)

// TODO: example with a Document Bundle

Instance: generate-metadata
InstanceOf: OperationDefinition
Description: """
The $generate-metadata Operation defintion. 

This operation is needed as the $generate in FHIR R4 is not properly defined, and thus has incorrect parameters. 
The MHD $generate-metadata should be replaced when MHD is upgraded to FHIR R5. 
This MHD $generate-metadata is modeled after the expected changes in FHIR R5, and follows the example given in FHIR R4:

Input:
- Binary 0..1 the *document* in Binary Resource format. Usually used with CDA documents.
- Bundle 0..1 the *document* in FHIR-Document form of a Bundle of kind Document
Output:
- reference to a DocumentReference with metadata generated from the *document*
"""
Usage: #definition
* url = "https://profiles.ihe.net/ITI/MHD/OperationDefinition/generate-metadata"
* name = "GenerateMetadata"
* code = #generate-metadata
* status = #active
* kind = #operation
* publisher = "Integrating the Healthcare Enterprise (IHE)"
* title = "Generate a DocumentReference from a document"
* description = """
A client can ask a server to generate a documentReference from a document.
The server reads the existing document and generates a matching DocumentReference resource, or returns one it has previously generated. 
The server will persist the document and the DocumentReference; and may propigate based on grouping with other Actors.
Servers may be able to return or generate document references for the following types of content:
- CDA
- FHIR Document
"""
* system = false
* type = true
* instance = false
* experimental = false
* affectsState = true  // as a DocumentReference may be created
* resource[0] = #DocumentReference
* inputProfile = Canonical(IHE.MHD.GenerateMetadata.Parameters.In)
* outputProfile = Canonical(IHE.MHD.GenerateMetadata.Parameters.Out)

---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/identifier.fsh

Profile: UniqueIdIdentifier
Parent: Identifier
Id: IHE.MHD.UniqueIdIdentifier
Title: "uniqueId Identifier"
Description: "uniqueId Identifier

- see [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.9.1-identifier-type)"
* system 1..
* use = #usual
* value 1..

Profile: SubmissionSetUniqueIdIdentifier
Parent: UniqueIdIdentifier
Id: IHE.MHD.SubmissionSetUniqueIdIdentifier
Title: "uniqueId Identifier for SubmissionSet"
Description: "uniqueId Identifier holding a OID"
* system = "urn:ietf:rfc:3986" (exactly)
* value obeys mhd-startswithoid

Invariant: mhd-startswithoid
Description: "value must start with urn:oid:"
Severity: #error
Expression: "startsWith('urn:oid:')"

Profile: EntryUUIDIdentifier
Parent: Identifier
Id: IHE.MHD.EntryUUID.Identifier
Title: "entryUUID Identifier"
Description: "entryUUID Identifier holding a UUID"
* system 1..
* system = "urn:ietf:rfc:3986" (exactly)
* value 1..
* value obeys mhd-startswithuuid
* use = #official

Invariant: mhd-startswithuuid
Description: "value must start with urn:uuid:"
Severity: #error
Expression: "startsWith('urn:uuid:')"

---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/mhdList.fsh

Profile:        MhdList
Parent:         List
Id:             IHE.MHD.List
Title:          "MHD common List with designationType"
Description:    "A profile on the List resource for MHD. Used with both Folder and SubmissionSet.
- MHD adds a codeable Concept to List for use with Folder and SubmissionSet"
* extension contains DesignationType named designationType 0..*
* modifierExtension 0..0
// code is used ONLY to switch between folder and submissionSet
* identifier 0..* 
* code 1..1
* code from MHDlistTypesVS (required)

Extension: DesignationType
Id: ihe-designationType
Title: "Clinical code of the List"
Description: "Expresses contentType of submissionSet or the codeList of a Folder. Usually expressed in LOINC or SNOMED."
* ^context[+].type = #element
* ^context[=].expression = "List"
* value[x] only CodeableConcept
* valueCodeableConcept 1..1

Instance: List-DesignationType
InstanceOf: SearchParameter
Title: "search on the IHE defined extension for designationType"
Usage: #definition
* url = "https://profiles.ihe.net/ITI/MHD/SearchParameter/List-DesignationType"
* description = "This SearchParameter enables finding Lists by the designationType code in a submissionSet or folder."
* name = "DesignationType"
* status = #active
* code = #designationType
* base = #List
* expression = "(extension('https://profiles.ihe.net/ITI/MHD/StructureDefinition/ihe-designationType').value.ofType(CodeableConcept))"
* type = #token

CodeSystem:  MHDlistTypes 
Title: "MHD List Types"
Description:  "To use the List resource for two different use-cases we define a code-system with the types of List needed in MHD"
* ^caseSensitive = true
* ^experimental = false
* #folder "Folder as a FHIR List"
* #submissionset "SubmissionSet as a FHIR List"

ValueSet: MHDlistTypesVS
Title: "MHD List Types ValueSet"
Description: "ValueSet of the MHD List Types allowed"
* ^experimental = false
* MHDlistTypes#folder
* MHDlistTypes#submissionset




---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/provideBundle.fsh

// equivalent to MHD Provide Document Bundle transaction
Profile:        MinimalProvideDocumentBundle
Parent:         Bundle
Id:             IHE.MHD.Minimal.ProvideBundle
Title:          "MHD Minimal Provide Document Bundle"
Description:    "A profile on the Bundle transaction for ITI-65 Provide Document resources with Minimal metadata for MHD.

- [Minimal Metadata](StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html): `https://profiles.ihe.net/ITI/MHD/StructureDefinition/IHE.MHD.Minimal.ProvideBundle`
  - shall be a Transaction Bundle
  - all resources shall be compliant with minimal constraints, they may be marked minimal, comprehensive, or unContained
  - shall create a [SubmissionSet type List](StructureDefinition-IHE.MHD.Minimal.SubmissionSet.html) that is either minimal, comprehensive, or unContained
  - may create one or more [DocumentReference](StructureDefinition-IHE.MHD.Minimal.DocumentReference.html) that is either minimal, comprehensive, or unContained
    - with a document as a [Binary](http://hl7.org/fhir/R4/binary.html)
    - or, when implementing the **ITI-65 FHIR Document Publish** option, a [FHIR Document Bundle](http://hl7.org/fhir/R4/bundle.html)
  - when DocumentReference replace is used the UpdateDocumentRefs slice is used to indicate the superseded DocumentReference
  - may create/update one or more [Folder type List](StructureDefinition-IHE.MHD.Minimal.Folder.html) that is either minimal, comprehensive, or unContained
  - may create/update/read one [Patient](http://hl7.org/fhir/R4/patient.html)"
* meta.profile 1..*
* type = #transaction
* entry ^slicing.discriminator[0].type = #profile
* entry ^slicing.discriminator[0].path = "resource"
* entry ^slicing.discriminator[1].type = #value
* entry ^slicing.discriminator[1].path = "request.method"
* entry ^slicing.rules = #closed
* entry ^slicing.description = "Slicing based on the profile conformance of the entry"
* entry and entry.resource MS
* entry contains 
    SubmissionSet 1..1 and
    DocumentRefs 0..* and
    UpdateDocumentRefs 0..* and
    Documents 0..* and
    FhirDocuments 0..* and
    Folders 0..* and
    Patient 0..1
* entry[SubmissionSet].resource only
    IHE.MHD.Minimal.SubmissionSet 
* entry[SubmissionSet] ^short = "the SubmissionSet"
* entry[SubmissionSet] ^definition = "The SubmissionSet defines who submitted it, why they submitted it, when they submitted, what is in it, and where it is destine."
* entry[SubmissionSet].resource 1..1
* entry[SubmissionSet].request 1..1
* entry[SubmissionSet].request.method = #POST
* entry[DocumentRefs].resource only 
    IHE.MHD.Minimal.DocumentReference 
* entry[DocumentRefs] ^short = "the DocumentReference resources"
* entry[DocumentRefs] ^definition = "any new DocumentReference that are part of the SubmissionSet. These might be new or other associations"
* entry[DocumentRefs].resource 1..1
* entry[DocumentRefs].request 1..1
* entry[DocumentRefs].request.method = #POST
* entry[UpdateDocumentRefs].resource only 
    IHE.MHD.Patch.Parameters 
* entry[UpdateDocumentRefs] ^short = "the superseded DocumentReference resources"
* entry[UpdateDocumentRefs] ^definition = "any updated DocumentReference that are part of the SubmissionSet if a new DocumentReference replaces this DocumentReference."
* entry[UpdateDocumentRefs].resource 1..1
* entry[UpdateDocumentRefs].request 1..1
* entry[UpdateDocumentRefs].request.method = #PATCH
* entry[Documents].resource ^type.code = "Binary"
* entry[Documents].resource ^type.profile = Canonical(Binary)
* entry[Documents] ^short = "the Documents"
* entry[Documents] ^definition = "the Documents referenced by the DocumentReference resources"
* entry[Documents].resource 1..1
* entry[Documents].request 1..1
* entry[FhirDocuments].request.method = #POST
* entry[FhirDocuments].resource ^type.code = "Bundle"
* entry[FhirDocuments].resource ^type.profile = Canonical(Bundle)
// TODO Should there be more to be sure it is a FHIR Document Bundle?
* entry[FhirDocuments] ^short = "the FHIR-FhirDocuments"
* entry[FhirDocuments] ^definition = "the FHIR-FhirDocuments referenced by the DocumentReference resources"
* entry[FhirDocuments].resource 1..1
* entry[FhirDocuments].request 1..1
* entry[FhirDocuments].request.method = #POST
* entry[Folders].resource only 
    IHE.MHD.Minimal.Folder 
* entry[Folders] ^short = "Folders"
* entry[Folders] ^definition = "any Folders being created or updated"
* entry[Folders].resource 1..1
* entry[Folders].request 1..1
* entry[Folders].request.method from MHDprovideFolderActions
* entry[Patient].resource ^type.code = "Patient"
* entry[Patient].resource ^type.profile = Canonical(Patient)
* entry[Patient] ^short = "the Patient"
* entry[Patient] ^definition = "the Patient"
* entry[Patient].resource 1..1
* entry[Patient].request.method from MHDprovidePatientActions

ValueSet: MHDprovideFolderActions
Title: "MHD Folder List Types ValueSet"
Description: "A ValueSet of the allowed actions in a ITI-65 Provide Document Bundle for the Folder List type Resources. Where Folders are allowed to be Updated in addition to Created."
* ^experimental = false
* http://hl7.org/fhir/http-verb#POST
* http://hl7.org/fhir/http-verb#PUT

ValueSet: MHDprovidePatientActions
Title: "MHD Patient Types ValueSet"
Description: "A ValueSet of the allowed actions in a ITI-65 Provide Document Bundle for the Patient type Resource. Where Patient would typically be indicated as a GET (read), but might be created or updated depending on policy."
* ^experimental = false
* http://hl7.org/fhir/http-verb#GET
* http://hl7.org/fhir/http-verb#POST
* http://hl7.org/fhir/http-verb#PUT



Profile:        UnContainedComprehensiveProvideDocumentBundle
Parent:         IHE.MHD.Minimal.ProvideBundle
Id:             IHE.MHD.UnContained.Comprehensive.ProvideBundle
Title:          "MHD UnContained Comprehensive Provide Document Bundle"
Description:    "A profile on the Bundle transaction for ITI-65 Provide Document resources with UnContained allowed but requiring Comprehensive Metadata for MHD.

- [UnContained Comprehensive Metadata](StructureDefinition-IHE.MHD.UnContained.Comprehensive.ProvideBundle.html): `https://profiles.ihe.net/ITI/MHD/StructureDefinition/IHE.MHD.UnContained.Comprehensive.ProvideBundle` 
  - note that Minimal Metadata does not require containment, so UnContained Minimal is the same as Minimal Metadata
  - note that UnContained only applies to DocumentReference and SubmissionSet type Lists; so the following apply
  - shall be a Transaction Bundle
  - all resources shall be compliant with comprehensive unContained constraints, they may be marked comprehensive unContained
  - shall create a [SubmissionSet type List](StructureDefinition-IHE.MHD.Minimal.SubmissionSet.html) that is either minimal, comprehensive, or unContained
  - may create one or more [DocumentReference](StructureDefinition-IHE.MHD.Minimal.DocumentReference.html) that is either minimal, comprehensive, or unContained
    - with a document as a [Binary](http://hl7.org/fhir/R4/binary.html)
    - or, when implementing the **ITI-65 FHIR Document Publish** option, a [FHIR Document Bundle](http://hl7.org/fhir/R4/bundle.html)
  - may create/update one or more [Folder type List](StructureDefinition-IHE.MHD.Minimal.Folder.html) that is either minimal, comprehensive, or unContained
  - may create/update/read one [Patient](http://hl7.org/fhir/R4/patient.html)"
* entry[SubmissionSet].resource only
    IHE.MHD.UnContained.Comprehensive.SubmissionSet
* entry[DocumentRefs].resource only 
    IHE.MHD.UnContained.Comprehensive.DocumentReference




Profile:        ComprehensiveProvideDocumentBundle
Parent:         IHE.MHD.UnContained.Comprehensive.ProvideBundle
Id:             IHE.MHD.Comprehensive.ProvideBundle
Title:          "MHD Comprehensive Provide Document Bundle"
Description:    "A profile on the Bundle transaction for ITI-65 Provide Document resources with Comprehensive Metadata for MHD.

- [Comprehensive Metadata](StructureDefinition-IHE.MHD.Comprehensive.ProvideBundle.html): `https://profiles.ihe.net/ITI/MHD/StructureDefinition/IHE.MHD.Comprehensive.ProvideBundle`
  - this is otherwise known as XDS-on-FHIR
  - shall be a Transaction Bundle
  - all resources shall be compliant with comprehensive constraints, they may be marked comprehensive
  - shall create a [SubmissionSet type List](StructureDefinition-IHE.MHD.Minimal.SubmissionSet.html) that is either minimal, comprehensive, or unContained
  - may create one or more [DocumentReference](StructureDefinition-IHE.MHD.Minimal.DocumentReference.html) that is either minimal, comprehensive, or unContained
    - with a document as a [Binary](http://hl7.org/fhir/R4/binary.html)
    - or, when implementing the **ITI-65 FHIR Document Publish** option, a [FHIR Document Bundle](http://hl7.org/fhir/R4/bundle.html)
  - may create/update one or more [Folder type List](StructureDefinition-IHE.MHD.Minimal.Folder.html) that is either minimal, comprehensive, or unContained
  - may create/update/read one [Patient](http://hl7.org/fhir/R4/patient.html)"
* entry[SubmissionSet].resource only
    IHE.MHD.Comprehensive.SubmissionSet
* entry[DocumentRefs].resource only 
    IHE.MHD.Comprehensive.DocumentReference


Profile:        ProvideDocumentBundleResponse
Parent:         Bundle
Id:             IHE.MHD.ProvideDocumentBundleResponse
Title:          "MHD Provide Document Bundle Response"
Description:    """
A profile on the Bundle transaction-response for ITI-65 Provide Document Bundle response.

- shall be a transaction response
- shall have at least 1 entry for each entry in the request, in the same order as received in the request
  - entry response location must be indicated
"""
* type = #transaction-response
* entry 1..* 
* entry ^short = "One entry for each entry in the request, in the same order as received"
* entry.response 1..
* entry.response ^short = "Indicating the results of processing the entry"
* entry.response.location 1..



---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/SimplifiedPublish.fsh

// Simplified Publish style ITI-105, one DocumentReference with .data holding the Document

Profile:        SimplifiedPublishDocumentReference
Parent:         DocumentReference
Id:             IHE.MHD.SimplifiedPublish.DocumentReference
Title:          "MHD DocumentReference for Simplified Publish"
Description:    """
A profile on the DocumentReference resource for MHD Simplified Publish constraints. 
- MHD is based on the [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) model, 
- the [3:4.1 Abstract Metadata Model](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.1.html#4.1), and 
- the use defined here is FHIR DocumentReference implementation of the 
- ebRIM implementation at [3:4.2.3.2 Document Entry](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2).
- with use-cases and constraints found in [3:4.3 Additional Document Sharing Requirements](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3)

Simplified Publish
- Similar to Minimal Metadata constraints
  - must be status current
  - must have a patient indicated
- uses attachment.data to carry the document, rather than attachment.url
  - so that the Simplified Publish is a simple POST of the DocumentReference
  - Document Recipient is expected to extract the .data, use .url
"""
* modifierExtension 0..0
* masterIdentifier 1..1
* identifier 0..0
* status 1..1
* status = http://hl7.org/fhir/document-reference-status#current
* docStatus 0..0
* type 0..1 MS
* category 0..1 MS
* subject 1..1
* subject only Reference(Patient)
* date 0..1 MS
* author 0..* MS
* authenticator 0..1
* relatesTo 0..* MS
* description 0..1
* securityLabel 0..* MS
* content 1..1
* content ^definition = "The document and format referenced."
* content.attachment.contentType 1..1
* content.attachment.language 0..1 MS
* content.attachment.data 1..1
* content.attachment.data ^short = "The document is contained in the .data element, base64 encoded"
* content.attachment.url 0..0
* content.attachment.size 0..1
* content.attachment.hash 0..1
* content.attachment.title 0..1
* content.attachment.creation 0..1 MS
* content.format 0..1 MS
//* content.format from http://ihe.net/fhir/ihe.formatcode.fhir/ValueSet/formatcode (preferred)
* context.event 0..*
* context.period 0..1 MS
* context.facilityType 0..1 MS
* context.practiceSetting 0..1 MS
* context.sourcePatientInfo 0..1 MS
* context.related 0..*





Instance:   ex-DocumentReferenceSimplifiedPublish
InstanceOf: IHE.MHD.SimplifiedPublish.DocumentReference
Title:      "DocumentReference for Simplified Publish with an encounter"
Description: "Example of a Simplified Publish DocumentReference resource. This has minimal metadata plus an encounter and custodian."
Usage: #example
* meta.security = http://terminology.hl7.org/CodeSystem/v3-ActReason#HTEST
* masterIdentifier.system = "urn:ietf:rfc:3986"
* masterIdentifier.value = "urn:oid:1.2.840.113556.1.8000.2554.53432.348.12973.17740.34205.4355.60220.62012"
* status = #current
* content.attachment.contentType = #text/plain
* content.attachment.data = "SGVsbG8gV29ybGQ="
* subject = Reference(Patient/ex-patient)
* context.encounter = Reference(ex-encounter)
* custodian = Reference(ex-organization)


---

File: repos/IHE_SLASH_ITI.MHD/input/fsh/submissionSet.fsh

// equivalent to MHD Minimal SubmissionSet
Profile:        SubmissionSet
Parent:         MhdList
Id:             IHE.MHD.Minimal.SubmissionSet
Title:          "MHD SubmissionSet Minimal"
Description:    "A profile on the List resource for MHD SubmissionSet.
- MHD is based on the [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) model, 
- the [3:4.1 Abstract Metadata Model](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.1.html#4.1), and 
- the use defined here is FHIR List for use as a SubmissionSet implementation of the 
- ebRIM implementation at [3:4.2.3.3 SubmissionSet Attributes](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3).
- with use-cases and constraints found in [3:4.3.1 Submission Metadata Attribute Optionality](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3.1) for 
  - Document Source implementing not implementing Comprehensive Metadata Option
  - Document Source implementing UnContained Option but not Comprehensive Option
  - equivalent to XDR Document Source implementing Metadata-Limited Option requirements
  - aka the default MHD Document Source"
* extension[designationType] 0..1 MS
* extension contains SourceId named sourceId 1..1
* extension contains IntendedRecipient named intendedRecipient 0..*
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "use"
* identifier ^slicing.rules = #open
* identifier contains uniqueId 0..1
* identifier[uniqueId] only SubmissionSetUniqueIdIdentifier
* identifier contains entryUUID 0..*
* identifier[entryUUID] only EntryUUIDIdentifier
* status = #current
* mode = #working
* title 0..1
* code = MHDlistTypes#submissionset
* subject 0..1 MS
* subject only Reference(Patient)
* encounter 0..0
* date 1..1
// source is author
* source 0..1 MS
* source.extension contains AuthorOrg named authorOrg 0..1
* orderedBy 0..0
* note 0..1
//*entry 
* entry.flag 0..0
* entry.deleted 0..0
* entry.date 0..0
* entry.item only Reference(DocumentReference or List)
* emptyReason 0..0


Extension: SourceId
Id: ihe-sourceId
Title: "Publisher organization identity of the SubmissionSet"
Description: "The globally unique, immutable, identifier of the entity that contributed the SubmissionSet. When a broker is involved in sending SubmissionSets from a collection of client systems, it shall use a different sourceId for submissions from each separate system to allow for tracking. The format of the identifier is an OID."
* ^context[+].type = #element
* ^context[=].expression = "List"
* value[x] only Identifier
* valueIdentifier 1..1

Extension: AuthorOrg
Id: ihe-authorOrg
Title: "Author organization of the SubmissionSet"
Description: "When the author of the SubmissionSet is an Organization, this extension shall be used."
* ^context[+].type = #element
* ^context[=].expression = "List.source"
* value[x] only Reference(Organization)
* valueReference 1..1

Instance: List-SourceId
InstanceOf: SearchParameter
Title: "search on the IHE defined extension for SourceId"
Usage: #definition
* url = "https://profiles.ihe.net/ITI/MHD/SearchParameter/List-SourceId"
* description = "This SearchParameter enables finding Lists by the SourceId of a submissionSet."
* name = "SourceId"
* status = #active
* code = #sourceId
* base = #List
* expression = "(extension('https://profiles.ihe.net/ITI/MHD/StructureDefinition/ihe-sourceId').value.ofType(Identifier))"
* type = #token


Extension: IntendedRecipient
Id: ihe-intendedRecipient
Title: "Intended recipient of the SubmissionSet"
Description: "holds the identity of the organization or person the SubmissionSet is intended. For XDR and eMail (e.g. Direct) this tends to be a Practitioner or Patient with a telecom holding an email, but this is not strictly required."
* ^context[+].type = #element
* ^context[=].expression = "List"
* value[x] only Reference(Practitioner or Organization or Patient or RelatedPerson or Group or Device or Location)
* valueReference 1..1

// equivalent to MHD SubmissionSet Comprehensive UnContained
Profile:        SubmissionSetComprehensiveUnContained
Parent:         IHE.MHD.Minimal.SubmissionSet
Id:             IHE.MHD.UnContained.Comprehensive.SubmissionSet
Title:          "MHD SubmissionSet Comprehensive UnContained"
Description:    "A profile on the List resource for MHD UnContained Comprehensive SubmissionSet.
- MHD is based on the [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) model, 
- the [3:4.1 Abstract Metadata Model](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.1.html#4.1), and 
- the use defined here is FHIR List for use as a SubmissionSet implementation of the 
- ebRIM implementation at [3:4.2.3.3 SubmissionSet Attributes](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3).
- with use-cases and constraints found in [3:4.3.1 Submission Metadata Attribute Optionality](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3.1) for 
  - MHD Document Source that has implemented both Comprehensive Metadata Option and UnContained References Option"
* subject 1..1
* extension[designationType] 1..1


// equivalent to MHD Comprehensive SubmissionSet Contained
Profile:        SubmissionSetComprehensive
Parent:         IHE.MHD.UnContained.Comprehensive.SubmissionSet
Id:             IHE.MHD.Comprehensive.SubmissionSet
Title:          "MHD SubmissionSet Comprehensive"
Description:    "A profile on the List resource for MHD Comprehensive SubmissionSet.
- MHD is based on the [IHE Document Sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) model, 
- the [3:4.1 Abstract Metadata Model](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.1.html#4.1), and 
- the use defined here is FHIR List for use as a SubmissionSet implementation of the 
- ebRIM implementation at [3:4.2.3.3 SubmissionSet Attributes](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3).
- with use-cases and constraints found in [3:4.3.1 Submission Metadata Attribute Optionality](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3.1) for 
  - MHD Comprehensive Option Document Source
  - aka the XDS Document Source requirements
  - aka the XDR Document Source requirements"
* source ^type.aggregation = #contained

// mappings to XDS 
Mapping: SubmissionSet-Mapping
Source:	IHE.MHD.Minimal.SubmissionSet
Target: "XDS"
Title: "XDS and MHD Mapping"
* -> "XDS SubmissionSet: Used in the context of the IHE MHD ImplementationGuide"
* meta.profile -> "SubmissionSet.limitedMetadata"
* extension[sourceId] -> "SubmissionSet.sourceId"
* extension[intendedRecipient] -> "SubmissionSet.intendedRecipient"
* extension[designationType] -> "SubmissionSet.contentTypeCode"
* source.extension[authorOrg] -> "SubmissionSet.author when the author is an Organization"
* identifier -> "SubmissionSet.entryUUID and SubmissionSet.uniqueId"
* status -> "SubmissionSet.availabilityStatus"
* mode -> "shall be 'working'"
* title -> "SubmissionSet.title"
* code -> "shall be 'submissionset'"
* subject -> "SubmissionSet.patientId"
* encounter -> "n/a"
* date -> "SubmissionSet.submissionTime"
* source -> "SubmissionSet.author"
* orderedBy -> "n/a"
* note -> "SubmissionSet.comments"
* entry.flag -> "n/a"
* entry.deleted -> "n/a"
* entry.date -> "n/a"
* entry.item -> "references to DocumentReference(s) and Folder List(s)"
* emptyReason -> "n/a"



---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/ActorsAndTransactions.plantuml

@startuml
title MHD Actor Diagram
agent "Document Source" as DocumentSource [[1331_actors_and_transactions.html#133111-document-source]]
agent "Document Consumer" as DocumentConsumer [[1331_actors_and_transactions.html#133112-document-consumer]]
agent "Document Responder" as DocumentResponder [[1331_actors_and_transactions.html#133113-document-recipient]]
agent "Document Recipient" as DocumentRecipient [[1331_actors_and_transactions.html#133114-document-responder]]
DocumentConsumer -- DocumentResponder : "[[ITI-66.html ITI-66 Find Document Lists]] ↓\n[[ITI-67.html ITI-67 Find Document References]] ↓\n[[ITI-68.html ITI-68 Retrieve Document]] ↓"
DocumentSource -- DocumentRecipient : "[[ITI-65.html ITI-65 Provide Document Bundle]] ↓\n[[ITI-105.html ITI-105 Simplified Publish]] ↓\n[[ITI-106.html ITI-106 Generate Metadata]] ↓"
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/ITI-105-seq.plantuml

@startuml
title Publish Document Bundle [ITI-105]
hide footbox
participant "Document Source" as DocumentSource
participant "Document Recipient" as DocumentRecipient
autonumber
activate DocumentSource
activate DocumentRecipient
DocumentSource -> DocumentRecipient : Request to publish document [ITI-105]
DocumentRecipient -> DocumentRecipient : Validate DocumentReference
DocumentRecipient -> DocumentRecipient : Extract the document
DocumentRecipient -> DocumentRecipient : Revise DocumentReference to point at document 
DocumentRecipient --> DocumentRecipient : Create SubmissionSet from DocumentReference and context
DocumentRecipient --> DocumentRecipient : persist (e.g. XDS Provide and Register)
DocumentRecipient --> DocumentSource : Document published [ITI-105]
deactivate DocumentSource
deactivate DocumentRecipient
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/ITI-106-seq.plantuml

@startuml
hide footbox
autonumber
participant "Document Source" as DocumentSource
participant "Document Recipient" as DocumentRecipient
autonumber
activate DocumentSource
activate DocumentRecipient
DocumentSource -> DocumentRecipient : Generate Metadata (document)
DocumentRecipient -> DocumentRecipient : Extract the document
DocumentRecipient -> DocumentRecipient : Create DocumentReference from document 
DocumentRecipient --> DocumentRecipient : Create SubmissionSet from DocumentReference and context
DocumentRecipient --> DocumentRecipient : persist (e.g. XDS Provide and Register)
DocumentSource <-- DocumentRecipient : Generated DocumentReference
deactivate DocumentSource
deactivate DocumentRecipient
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/ITI-65-seq.plantuml

@startuml
title Provide Document Bundle [ITI-65]
hide footbox
participant "Document Source" as DocumentSource
participant "Document Recipient" as DocumentRecipient
autonumber
activate DocumentSource
activate DocumentRecipient
DocumentSource -> DocumentRecipient : Request to publish documents [ITI-65]
DocumentRecipient -> DocumentRecipient : validate content received
DocumentRecipient --> DocumentRecipient : propigate to Grouped Actor (e.g. XDS Provide and Register)
DocumentRecipient --> DocumentSource : Documents published [ITI-65]
deactivate DocumentSource
deactivate DocumentRecipient
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/ITI-66-seq.plantuml

@startuml
title Find Document Lists [ITI-66]
hide footbox
participant "Document Consumer" as DocumentConsumer
participant "Document Responder" as DocumentResponder
activate "DocumentConsumer"
activate "DocumentResponder"
"DocumentConsumer" -> "DocumentResponder" : 1. Find Document Lists [ITI-66]
return
deactivate "DocumentConsumer"
deactivate "DocumentResponder"
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/ITI-67-seq.plantuml

@startuml
title Find Document References [ITI-67]
hide footbox
participant "Document Consumer" as DocumentConsumer
participant "Document Responder" as DocumentResponder
activate "DocumentConsumer"
activate "DocumentResponder"
"DocumentConsumer" -> "DocumentResponder" : 1. Find Document References [ITI-67]
return
deactivate "DocumentConsumer"
deactivate "DocumentResponder"
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/ITI-68-seq.plantuml

@startuml
title Retrieve Document [ITI-68]
hide footbox
participant "Document Consumer" as DocumentConsumer
participant "Document Responder" as DocumentResponder
activate "DocumentConsumer"
activate "DocumentResponder"
"DocumentConsumer" -> "DocumentResponder" : 1. Retrieve Document [ITI-68]
return
deactivate "DocumentConsumer"
deactivate "DocumentResponder"
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/QueryActors.plantuml

@startuml
title Query Actors Interactions
agent "Document Consumer" as DocumentConsumer
agent "Document Responder" as DocumentResponder
DocumentConsumer -- DocumentResponder : "Find Document Lists [ITI-66] ↓\nFind Document References [ITI-67] ↓\nRetrieve Document [ITI-68]"
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/umlFigure1.plantuml

@startuml
title Document Sharing Actors
agent "content creator" as creator
cloud "Document Sharing Infrastructure" as sharing
agent "content consumer" as consumer
creator -> sharing
sharing -> consumer
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/usecase1-processflow.plantuml

@startuml
title Use Case 1 Process Flow
hide footbox
participant "Document Source" as DocumentSource
participant "Document Recipient" as DocumentRecipient
DocumentSource -> DocumentRecipient : 1. Document Source initiates Publication Request
activate DocumentSource
activate DocumentRecipient
DocumentRecipient --> DocumentSource : 2. Documents are published
deactivate DocumentSource
deactivate DocumentRecipient
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/usecase2-processflow.plantuml

@startuml
title Basic Process Flow in MHD Profile
hide footbox
actor "Consumer of Documents"
participant "Document Consumer" as DocumentConsumer
participant "Document Responder" as DocumentResponder
"Consumer of Documents" -> DocumentConsumer : 1. User initiates Search
activate "Consumer of Documents"
activate DocumentConsumer
DocumentConsumer -> DocumentResponder : 2. Query for available documents
activate DocumentResponder
return
deactivate DocumentResponder
DocumentConsumer --> "Consumer of Documents" : 3. Display Results
deactivate DocumentConsumer
"Consumer of Documents" -> DocumentConsumer : 4. User refines specific documents of interest
activate DocumentConsumer
DocumentConsumer -> DocumentResponder : 5. Retrieve selected documents
activate DocumentResponder
return
deactivate DocumentResponder
DocumentConsumer --> "Consumer of Documents" : 6. Display document contents
deactivate "Consumer of Documents"
deactivate DocumentConsumer
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/images-source/usecase3-processflow.plantuml

@startuml
title Use Case 3 Process Flow
hide footbox
participant "Document Source" as DocumentSource
participant "Document Recipient" as DocumentRecipient
DocumentSource -> DocumentRecipient : 1. invoke $generate-metadata operation
activate DocumentSource
activate DocumentRecipient
DocumentRecipient -> DocumentRecipient : 2. inspect document \ncreate metadata
DocumentSource <-- DocumentRecipient : 3. Document is published
deactivate DocumentRecipient
deactivate DocumentSource
@enduml


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/1331_actors_and_transactions.md


This section defines the actors and transactions in this implementation guide.

The figure below shows the actors directly
involved in the MHD 
Profile and the relevant transactions between them.

<div>
{%include ActorsAndTransactions.svg%}
</div>

<br clear="all">

**Figure 1:33.1-1: MHD Actor Diagram**

Table 1:33.1-1 lists the transactions for each actor directly involved in the MHD Implementation Guide. To claim compliance with this guide, an actor shall
support all required transactions (labeled "R") and may support the
optional transactions (labeled "O").


<table border="1" borderspacing="0" style='border: 1px solid black; border-collapse: collapse'>
<caption>
<b>
Table 1:33.1-1: MHD Implementation Guide - Actors and Transactions
</b>
</caption>
<thead>
<tr style='background: gray;'>
<th>Actors</th>
<th>Transactions</th>
<th>Optionality</th>
</tr>
</thead>
<tbody>
    <tr>
        <td rowspan="3">
        <a href="1331_actors_and_transactions.html#133111-document-source">Document Source</a>
        </td>
        <td>
        <a href='ITI-65.html'>Provide Document Bundle [ITI-65]</a>
        </td>
        <td align='center'>
        O
        </td>
        </tr>
        <tr>
        <td>
        <a href='ITI-105.html'>Simplified Publish [ITI-105]</a>
        </td>
        <td align='center'>
        O
        </td>
        </tr>
        <tr>
        <td>
        <a href='ITI-106.html'>Generate Metadata [ITI-106]</a>
        </td>
        <td align='center'>
        O
        </td>
    </tr>
    <tr>
        <td rowspan="3">
        <a href="1331_actors_and_transactions.html#133113-document-recipient">Document Recipient</a>
        </td>
        <td>
        <a href='ITI-65.html'>Provide Document Bundle [ITI-65]</a>
        </td>
        <td align='center'>
        R
        </td>
        </tr>
        <tr>
        <td>
        <a href='ITI-105.html'>Simplified Publish [ITI-105]</a>
        </td>
        <td align='center'>
        O
        </td>
        </tr>
        <tr>
        <td>
        <a href='ITI-106.html'>Generate Metadata [ITI-106]</a>
        </td>
        <td align='center'>
        O
        </td>
    </tr>
    <tr>
        <td rowspan="3">
        <a href="1331_actors_and_transactions.html#133112-document-consumer">Document Consumer</a>
        </td>
        <td>
        <a href='ITI-66.html'>Find Document Lists [ITI-66]</a>
        </td>
        <td align='center'>
        R
        </td>
        </tr>
        <tr>
        <td>
        <a href='ITI-67.html'>Find Document References [ITI-67]</a>
        </td>
        <td align='center'>
        R
        </td>
        </tr>
        <tr>
        <td>
        <a href='ITI-68.html'>Retrieve Document [ITI-68]</a>
        </td>
        <td align='center'>
        R
        </td>
    </tr>
    <tr>
        <td rowspan="3">
        <a href="1331_actors_and_transactions.html#133114-document-responder">Document Responder</a>
        </td>
        <td>
        <a href='ITI-66.html'>Find Document Lists [ITI-66]</a>
        </td>
        <td align='center'>
        R
        </td>
        </tr>
        <tr>
        <td>
        <a href='ITI-67.html'>Find Document References [ITI-67]</a>
        </td>
        <td align='center'>
        R
        </td>
        </tr>
        <tr>
        <td>
        <a href='ITI-68.html'>Retrieve Document [ITI-68]</a>
        </td>
        <td align='center'>
        R
        </td>
    </tr>                    
</tbody>
</table>
        
Note: The Document Source shall implement at least one of the transactions.        
            

### 1:33.1.1 Actor Descriptions and Actor Profile Requirements
The actors in this profile are described in more detail in the sections below.

#### 1:33.1.1.1 Document Source

The Document Source is the producer and publisher of Document Content to a Document Recipient.

The Document Source uses either the [ITI-65], [ITI-105], or [ITI-106].

The following CapabilityStatements define the actor capabilities given the various Options
* [Document Source](CapabilityStatement-IHE.MHD.DocumentSource.html) 
* [Document Source implementing Comprehensive Metadata Option](CapabilityStatement-IHE.MHD.DocumentSource.Comprehensive.html)
* [Document Source implementing UnContained Reference Option](CapabilityStatement-IHE.MHD.DocumentSource.UnContained.html)
* [Document Source implementing Simplified Publish Option](CapabilityStatement-IHE.MHD.DocumentSource.Simplified.html)
* [Document Source implementing Generate Metadata Option](CapabilityStatement-IHE.MHD.DocumentSource.Generate.html)
* [Document Source implementing ITI-65 FHIR Documents Publish Option](CapabilityStatement-IHE.MHD.DocumentSource.Fdoc.html)

#### 1:33.1.1.2 Document Consumer

The Document Consumer queries Document Responder for SubmissionSet, Folder, and DocumentReference metadata meeting certain criteria and may retrieve selected documents.

The following CapabilityStatements define the actor capabilities
* [Document Consumer](CapabilityStatement-IHE.MHD.DocumentConsumer.html)

#### 1:33.1.1.3 Document Recipient

The Document Recipient receives documents and metadata sent by the Document Source.

The following CapabilityStatements define the actor capabilities
* [Document Recipient](CapabilityStatement-IHE.MHD.DocumentRecipient.html)
* [Document Recipient implementing Comprehensive Metadata Option](CapabilityStatement-IHE.MHD.DocumentRecipient.Comprehensive.html)
* [Document Recipient implementing UnContained Reference Option](CapabilityStatement-IHE.MHD.DocumentRecipient.UnContained.html)
* [Document Recipient implementing Simplified Publish Option](CapabilityStatement-IHE.MHD.DocumentRecipient.Simplified.html)
* [Document Source implementing Generate Metadata Option](CapabilityStatement-IHE.MHD.DocumentSource.Generate.html)
* [Document Source implementing ITI-65 FHIR Documents Publish Option](CapabilityStatement-IHE.MHD.DocumentSource.Fdoc.html)

#### 1:33.1.1.4 Document Responder

The Document Responder responds with SubmissionSet, Folder, and DocumentReference metadata in response to a search request, and responds with documents in response to a retrieve request, from a Document Consumer.        

The following CapabilityStatements define the actor capabilities
* [Document Responder](CapabilityStatement-IHE.MHD.DocumentResponder.html)

### 1:33.1.2 Transaction Descriptions
The transactions in this profile are summarized in the sections below.

#### 1:33.1.2.1 Provide Document Bundle

This transaction is used to transfer documents and metadata and is analogous to a [Provide and Register Document Set-b ITI-41](https://profiles.ihe.net/ITI/TF/Volume2/ITI-41.html) transaction.

For more details see the detailed [ITI-65 transaction description](ITI-65.html).

#### 1:33.1.2.2 Find Document Lists

This transaction is used to issue parameterize queries that result in a List resource representing a SubmissionSet or a Folder.

For more details see the detailed [ITI-66 transaction description](ITI-66.html).

#### 1:33.1.2.3 Find Document References

This transaction is used to issue parameterized queries that result in a list of Document Reference resources.

For more details see the detailed [ITI-67 transaction description](ITI-67.html).

#### 1:33.1.2.4 Retrieve Document

This transaction is used to get documents.

For more details see the detailed [ITI-68 transaction description](ITI-68.html).

#### 1:33.1.2.5 Simplified Publish

This transaction is used to publish a document and the document metadata. This transaction does not support publishing multiple documents. This transaction will produce a simplified SubmissionSet based solely on the DocumentReference, security context between Document Source and Document Recipient, and local configuration for metadata conversion.

For more details see the detailed [ITI-105 transaction description](ITI-105.html).

#### 1:33.1.2.6 Generate Metadata

This transaction is used to generate DocumentReference metadata given a document. The Document Source provides a document. The Document Responder will create, update, or use an existing DocumentReference instance. 

For more details see the detailed [ITI-106 transaction description](ITI-106.html).


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/1332_actor_options.md


Options that may be selected for each actor in this implementation guide, are listed in Table 1:33.2-1 below. Dependencies 
between options when applicable are specified in notes.

<table border="1" style="border: 1px solid black; border-collapse: collapse">
    <caption><b>Table 1:33.2-1 Actor Options</b></caption>
    <thead>
        <tr style="background: gray;" class="odd">
            <td>Actor</td>
            <td>Option Name</td>
        </tr>
    </thead>
    <tbody>        
        <tr>        
            <td rowspan='5'>Document Source</td>       
            <td><a href="#13321-comprehensive-metadata-option">Comprehensive Metadata</a></td>
            </tr>
            <tr>
            <td><a href="#13323-uncontained-reference-option">UnContained Reference</a></td>
            </tr>
            <tr>
            <td><a href="#13324-simplified-publish-option">Simplified Publish</a></td>
            </tr>
            <tr>
            <td><a href="#13325-generate-metadata-option">Generate Metadata</a></td>
            </tr>
            <tr>
            <td><a href="#13326-iti-65-fhir-documents-publish-option">ITI-65 FHIR documents Publish</a></td>
        </tr>
        <tr>
            <td rowspan='6'>Document Recipient</td>        
            <td><a href="#13321-comprehensive-metadata-option">Comprehensive Metadata</a></td>
            </tr>
            <tr>
            <td><a href="#13322-xds-on-fhir-option">XDS on FHIR</a></td>
            </tr>
            <tr>        
            <td><a href="#13323-uncontained-reference-option">UnContained Reference</a></td>
            </tr>   
            <tr>
            <td><a href="#13324-simplified-publish-option">Simplified Publish</a></td>
            </tr>
            <tr>
            <td><a href="#13325-generate-metadata-option">Generate Metadata</a></td>
            </tr>
            <tr>
            <td><a href="#13326-iti-65-fhir-documents-publish-option">ITI-65 FHIR documents Publish</a></td>
        </tr>
        <tr>
            <td rowspan='1'>Document Consumer</td>
            <td><a href="#13323-uncontained-reference-option">UnContained Reference</a></td>
        </tr>
        <tr>
            <td rowspan='2'>Document Responder</td>
            <td><a href="#13322-xds-on-fhir-option">XDS on FHIR</a></td>
            </tr>
            <tr>
            <td><a href="#13323-uncontained-reference-option">UnContained Reference</a></td>
        </tr>
    </tbody>
</table>
        
The options in this guide are described in more detail in the sections below.

### 1:33.2.1 Comprehensive Metadata Option

Support of this option assures that the Document Source will provide comprehensive metadata. Comprehensive metadata fulfill the cardinality requirements of XDS. 

A Document Source that supports this option will provide metadata consistent with the additional document sharing requirements for an XDS Document Source described in [ITI TF-3: 4.3.1- Submission Metadata Attribute Optionality](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3.1) and [ITI TF-3: 4.5.1 Metadata Object Types mapped to FHIR](32_fhir_maps.html).

A Document Recipient that supports this option will require that any metadata provided is consistent with the additional document sharing requirements for an XDS Document Source described in [ITI TF-3: 4.3.1- Submission Metadata Attribute Optionality](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3.1).

### 1:33.2.2 XDS on FHIR Option

The Document Recipient that supports this option shall be able to be grouped with an [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) [Document Source](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.1.1.1) so that any publication request is passed on to that XDS environment. See the transaction specific requirements outlined in [ITI-65 XDS on FHIR Option](ITI-65.html#23654131-grouping-with-actors-in-other-document-sharing-profiles). The grouped XDS Document Source shall implement the [Document Replacement Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.1), [Document Addendum Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.2), [Document Transformation Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.3), and [Folder Management Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.4) to ensure that these functionalities can be transferred from the MHD Document Source through to the [XDS Document Registry](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.1.1.3).

The Document Responder that supports this option shall be able to be grouped with an [XDS Document Consumer](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.1.1.2) so that any query or retrieve requests can be passed on to, and responded to, by an XDS environment. The transaction specific requirements are outlined in [ITI-66 XDS on FHIR Options](ITI-66.html#23664131-xds-on-fhir-option) and [ITI-67 XDS on FHIR Option](ITI-67.html#23674131-xds-on-fhir-option). 

The [XDS on FHIR Option](#13322-xds-on-fhir-option) is not compatible with the [UnContained Reference Option](#13323-uncontained-reference-option). A system may be able to support both options, but only one will be able to be used at a given deployment.

### 1:33.2.3 UnContained Reference Option

The **UnContained Reference Option** recognizes that a Community may choose to longitudinally maintain their provider and patient directories, for example, an [mCSD](https://profiles.ihe.net/ITI/TF/Volume1/ch-46.html) Care Services Selective Supplier and [PMIR](https://profiles.ihe.net/ITI/TF/Volume1/ch-49.html) Patient Identity Registry. When this longitudinal consistency is managed, then the author, authenticator, sourcePatientInfo, and author entries do not need to be a contained copy of the information known at the time of publication [ITI-65](ITI-65.html) since a Reference to the information in these directories will be valid over the full lifecycle of the entries. 

The actors that support the [UnContained Reference Option](#13323-uncontained-reference-option) shall be able to create and consume full URL values in the DocumentReference.author, the DocumentReference.authenticator, the DocumentReference.context.sourcePatientInfo, and the List.source. This requirement encourages the persisting of the information at the time the document is published. 

The [UnContained Reference Option](#13323-uncontained-reference-option) is not compatible with the [XDS on FHIR Option](#13322-xds-on-fhir-option). A system may be able to support both options, but only one will be able to be used at a given deployment.

### 1:33.2.4 Simplified Publish Option

The **Simplified Publish Option** recognizes that there are Document Source Actors that have simple publication needs that can be automated on the Document Recipient. The simplifications include:
* Publishing one document at a time 
  * Any mime-type is supported
* The document must be included
* The Document Source can create the DocumentReference metadata and has some need to control the element values provided
* No support for On-Demand or Delayed Document Assembly
* No support for Replace
* No support for Folders
* No support for a defined SubmissionSet metadata, the Document Recipient can deterministically create the SubmissionSet from the provided DocumentReference
* No support to target a publication to a given intended recipient

The "need" may be simply that the Document Source is not capable to understand these features or does not need them.

The Document Source claiming the Simplified Push Option shall implement use of [ITI-105](ITI-105.html) transaction to publish document content. The Document Source may also use [ITI-65](ITI-65.html).

The Document Recipient claiming the Simplified Push Option shall implement the [ITI-105](ITI-105.html) transaction. The Document Recipient will extract the document, translate the DocumentReference metadata elements into a SubmissionSet following the [PCC TF-2: 4.1 Medical Document Binding to Document Sharing Metadata](https://profiles.ihe.net/ITI/sIPS/pcc.html#41-medical-document-binding-to-document-sharing-metadata), and may have further metadata translation requirements specified by the local Document Sharing Community policy.

### 1:33.2.5 Generate Metadata Option

The **Generate Metadata Option** recognizes that there are Document Source Actors that have a structured and coded format of a document (CDA or FHIR-Document) and simple publication needs that can be automated on the Document Recipient. The simplifications include:
* Only the document is provided
  * must be CDA or FHIR Document
* Publishing one document at a time
* The document must be included
* The Document Recipient can deterministically create the DocumentReference metadata
* No support for On-Demand or Delayed Document Assembly
* No support for Replace
* No support for Folders
* No support for a defined SubmissionSet metadata
* No support to target a publication to a given intended recipient

The "need" may be simply that the Document Source is not capable to understand these features or does not need them.

The Document Source claiming the Generate Metadata Option shall implement use of [ITI-106](ITI-106.html) transaction to submit a document content. The Document Source may also use [ITI-65](ITI-65.html).

The Document Recipient claiming the Generate Metadata Option shall implement the [ITI-106](ITI-106.html) transaction. The Document Recipient will interpret the document, create or update a DocumentReference metadata, convert DocumentReference elements into a SubmissionSet. The metadata derivation shall following the [PCC TF-2: 4.1 Medical Document Binding to Document Sharing Metadata](https://profiles.ihe.net/ITI/sIPS/pcc.html#41-medical-document-binding-to-document-sharing-metadata), and may have further metadata translation requirements specified by the local Document Sharing Community policy.

### 1:33.2.6 ITI-65 FHIR Documents Publish Option

The **ITI-65 FHIR Documents Publish Option** adds support to ITI-65 to carry a FHIR-Document encoded within the ITI-65, rather than needing this FHIR-Document encoded within a Binary. Actors not declaring this option are expected to only support Binary documents in ITI-65.

The Document Recipient will process the FHIR-Document accordingly to the persistance needs that it supports (e.g., XDS, MHDS). 



---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/1333_required_grouping.md

Actor(s) which are required to be grouped with other actor(s) are listed in this section. The grouped actor may be from this profile or a different domain/profile. 

An actor from this profile (Column 1) must implement all the required transactions in this profile in addition to all of the required transactions for the grouped profile/actor listed (Column 3).

**Table 1:33.3-1: MHD Required Actor Groupings**

| MHD Actor          | Grouping Condition | Actor(s) to be grouped with              | Reference      |
|--------------------|--------------------|------------------------------------------|----------------|
| Document Source    | -                  | None                                     | -              |
| Document Recipient | XDS on FHIR Option | XDS.b / Document Source / Document Replacement, Document Addendum, Document Transformation, and Folder Management Options | [ITI TF-1: 33.2.2](1332_actor_options.html#13322-xds-on-fhir-option) |
| Document Consumer  | -                  | None                                     | -              |
| Document Responder | XDS on FHIR Option | XDS.b / Document Consumer                | [ITI TF-1: 33.2.2](1332_actor_options.html#13322-xds-on-fhir-option) |
{: .grid}


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/1334_overview.md


- Actors
  - [Document Source](1331_actors_and_transactions.html#133111-document-source)
  - [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient)
  - [Document Consumer](1331_actors_and_transactions.html#133112-document-consumer)
  - [Document Responder](1331_actors_and_transactions.html#133114-document-responder)
- Transactions
  - [Provide Document Bundle \[ITI-65\]](ITI-65.html)
  - [Find Document Lists \[ITI-66\]](ITI-66.html)
  - [Find Document References \[ITI-67\]](ITI-67.html)
  - [Retrieve Document \[ITI-68\]](ITI-68.html)
  - [Simplified Publish \[ITI-105\]](ITI-105.html)
  - [Generate Metadata \[ITI-106\]](ITI-106.html)

## 1:33.4 MHD Overview
The MHD Profile enables sharing of patient documents to, or from, mobile or constrained devices. Other IHE profiles, chiefly Cross-Enterprise Document Sharing (XDS), describe sharing of patient document in less constrained environments, and many of the concepts from those profiles are applicable to the MHD environment. For more information on IHE Document Sharing, see [Health Information Exchange: Enabling Document Sharing Using IHE Profiles](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) White Paper.

### 1:33.4.1 Concepts
The MHD Profile supports a broad set of the XDS use cases and functionality while keeping the implementation as simple as possible. The MHD Profile is focused on a subset of the use cases that XDS supports and does not try to reproduce the full scalability, flexibility, privacy, or security supported by a more robust XDS infrastructure. Example use cases are:

* Medical devices such as those targeted by the IHE Patient Care Devices (PCD) domain, submitting data in the form of documents.
* Kiosks used by patients in hospital registration departments.
* PHR publishing into a staging area for later import into an EHR or HIE.
* Patient or provider applications that are configured to securely connect to a PHR in order to submit healthcare history document (e.g., BlueButton+).
* Electronic measurement devices participating in XDW workflows and pulling medical history documents from an HIE.
* A General Practitioner physician’s office with minimal IT capabilities using a mobile application to connect to an HIE or EHR.

These specific use cases can be generalized into two broad use cases. The first is the general use case of publishing new document(s) from the mobile device. The second general use case is where the mobile device needs to discover available documents and retrieve documents of interest. There are clearly complex use cases that combine these two general use cases; however, they are not specifically described in this profile. When more complex use cases are encountered, use of one of the more robust Document Sharing profiles is more appropriate. 

### 1:33.4.2 Use Case 1: Publication of New Documents

#### 1:33.4.2.1 Publication of New Documents Use Case Description
In this use case, a new document or set of documents is published from the mobile device. For example, a mobile device is a medical device that is submitting new health measurements, or a mobile device has a user-interface used to capture user input such as a Patient Consent. The mobile device does not need to be classically mobile, just simply one using the http REST technology commonly available on mobile devices. This device-created content is formed by the application, implementing the MHD Document Source, into a Document and submitted with the metadata.

This use case presumes that the mobile device knows or discovers the patient identity. The patient identity might be obtained through some IHE transactional method such as the Patient Demographics Query for Mobile [PDQm](https://profiles.ihe.net/ITI/TF/Volume1/ch-38.html) or Patient Identifier Cross-Reference for Mobile [PIXm](https://profiles.ihe.net/ITI/TF/Volume1/ch-41.html) Profile. The patient id might simply be entered via some device interface (RFID, Bar-Code), a user interface, or be specified in a configuration setting (e.g., mobile PHR application). The use case also allows for identity cross-referencing to be implemented by the Document Recipient. 

This use case presumes that the sending mobile device knows the location of the receiving URL endpoints, likely through a configuration setting, or through a workflow driven by a web interface.

#### 1:33.4.2.2 Publication of New Documents Process Flow
The publication of a new document(s) is done using the Provide Document Bundle [\[ITI-65\]](ITI-65.html) transaction or the Simplified Publish [\[ITI-105\]](ITI-105.html) transaction, which carries both the document and its metadata. The [\[ITI-65\]](ITI-65.html) transaction is analogous to an XDS Provide and Register Document Set-b [\[ITI-41\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-41.html) transaction. The [\[ITI-105\]](ITI-105.html) is a more simple transaction where the publication needs are more simple, moving the SubmissionSet mapping task to the Document Recipient.

<div>
{%include usecase1-processflow.svg%}
</div>
<br clear="all">

**Figure 1:33.4.2.2-1: Use Case 1 Process Flow**


### 1:33.4.3 Use Case 2: Discovery and Retrieval of Existing Documents

#### 1:33.4.3.1 Discovery and Retrieval of Existing Documents Use Case Description
In this use case, the mobile device needs access to existing documents. For example, a mobile device involved in a workflow needs to determine the current state of the workflow, or the mobile device needs to discover the most current medical summary. 

#### 1:33.4.3.2 Discovery Retrieval of Existing Documents Process Flow
The Find Document References [\[ITI-67\]](ITI-67.html) transaction is used to issue parameterized queries that result in a list of DocumentReference Resources, where a DocumentReference Resource carries the XDS DocumentEntry metadata, which is metadata about a document.

Alternatively, the Find Document Lists [\[ITI-66\]](ITI-66.html) transaction is used to issue parameterized queries that result in a set of List Resources, where a List Resource carries the XDS SubmissionSet metadata for a set of DocumentEntry objects that were published as a set, or XDS Folder metadata for a set of DocumentEntry objects that are said to be members of the same grouping.

The Retrieve Document [\[ITI-68\]](ITI-68.html) transaction is used to get the document itself.

<div>
{%include usecase2-processflow.svg%}
</div>
<br clear="all">

**Figure 1:33.4.3.2-1: Basic Process Flow in MHD Profile**


### 1:33.4.4 Use Case 3: Generate Metadata and Publish Process Flow
An alternative flow to Use Case 1, supports the case where the Document Source has only a structured and coded document such as CDA, or FHIR-Document. The Document Recipient inspects the document and generates a DocumentReference. The Document Recipient may need to create a SubmissionSet depending on the persistance and grouping requirements. 

The Generate Metadata is a FHIR Operation defined in the Generate Metadata [\[ITI-106\]](ITI-106.html) transaction. 

<div>
{%include usecase3-processflow.svg%}
</div>
<br clear="all">

**Figure 1:33.4.4-1: Use Case 3 Process Flow**


### 1:33.4.5 Mapping to RESTful Operators
The MHD Profile defines a set of transactions against FHIR Resources. These are summarized in Table 1:33.4.5-1. MHD does not use any additional extended or custom methods.

**Table 1:33.4.5-1: REST Methods and Resources**

| HTTP<br/>Method | Transactions on <br/> DocumentReference | Transactions on <br/> List | Transactions on Binary <br/> (document) |
|--------|----------------------------------|------------------------------|----------------------------|
| GET    | Find Document Reference [ITI-67] | Find Document Lists [ITI-66] | Retrieve Document [ITI-68] |
| PUT    | Not Specified                    | Not Specified                | Not Specified              |
| POST   | Provide Document Bundle [ITI-65]<br/>Simplified Publish [ITI-105] | Provide Document Bundle [ITI-65] | Provide Document Bundle [ITI-65] |
| DELETE | Not Specified                    | Not Specified                | Not Specified              |
| UPDATE | Not Specified                    | Not Specified                | Not Specified              |
| HEAD   | Not Specified                    | Not Specified                | Not Specified              |
| OPTIONS| Not Specified                    | Not Specified                | Not Specified              |
| TRACE  | Not Specified                    | Not Specified                | Not Specified              |
{: .grid}

Note: Items are marked *Not Specified* because the MHD Profile is focused on core Document Sharing (XDS, XDR, etc.) capability and is not trying to address the larger use case of metadata update.


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/1335_security_considerations.md

See ITI TF-2x: [Appendix Z.8 “Mobile Security Considerations”](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations).

When MHD actors also implement actors in the [Internet User Authorization (IUA)](https://profiles.ihe.net/ITI/IUA/index.html) Profile, there are [additional requirements documented in the IUA supplement](https://profiles.ihe.net/ITI/IUA/index.html#33-mhd-profile).


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/1336_cross_profile_considerations.md

Considerations when applications group MHD actors with other IHE actors.

### 1:33.6.1 MHD Actor Grouped with XDS Infrastructure

When the MHD Document Recipient is acting as a proxy for an XDS environment, it could be grouped with an XDS Document Source as the “XDS on FHIR” Option defines. In this way, a received Provide Document Bundle [ITI-65] transaction would be converted by the grouped system into an XDS Provide and Register Document Set-b [ITI-41] transaction. The MHD Document Recipient, acting as a proxy, could be configured to support only a designated set of mobile devices authorized by the hosting organization and use the security model defined by that hosting organization. The proxy might convert user authentication credentials, and fully implement the ATNA Secure Node or Secure Application Actors. 

Other proxy architectures to XDS are possible such as grouped with an XDS Integrated Document Source/Repository.

When the MHD Document Responder is acting as a proxy for an XDS environment, it could be grouped with an XDS Document Consumer. In this way, the MHD Find Document Lists [ITI-66], Find Document References [ITI-67], and Retrieve Document [ITI-68] transactions will be supported in the system using the appropriate XDS Registry Stored Query [ITI-18] and Retrieve Document Set-b [ITI-43] transactions. This proxy would be configured to support a designated set of mobile devices and the security model defined by the hosting organization. The proxy might fill in missing metadata information, convert user authentication credentials, and fully implement the IHE ATNA Secure Node or Secure Application Actors.

Not diagrammed here is how [PDQm](https://profiles.ihe.net/ITI/TF/Volume1/ch-38.html) and/or [PIXm](https://profiles.ihe.net/ITI/TF/Volume1/ch-41.html) could similarly be used and implemented.

These two environments are illustrated in Figure 1:33.6.1-1.

<div>
<img alt="Figure: MHD Actors grouped with XDS Document Sharing" src="Figure33.6.1-1.png" width="100%">
</div>
**Figure 1:33.6.1-1: MHD Actors Grouped with XDS Document Sharing**

### 1:33.6.2 MHD Actors Grouped with XCA Infrastructure

When an MHD Document Responder acts as a proxy into an XCA environment, it could be grouped with an Initiating Gateway. This type of MHD Document Responder will support the Find Document Lists [ITI-66], Find Document References [ITI-67], and Retrieve Document [ITI-68] transactions by utilizing the XCA Cross Gateway Query [ITI-38] and Cross Gateway Retrieve [ITI-39] transactions as necessary. This type of proxy would be configured to support a designated set of mobile devices and enable a security model as defined by the hosting organization. The proxy might fill in missing metadata information, convert user authentication credentials, and fully implement the ATNA Secure Node or Secure Application requirements.

<div>
<img alt="Figure: MHD Actors grouped with XCA" src="Figure33.6.2-1.png" width="100%">
</div>
**Figure 1:33.6.2-1: MHD Actors Grouped with XCA**

### 1:33.6.3 MHD Actor Grouped with Retrieve Information for Display (RID) Profile

The Retrieve Information for Display (RID) Profile includes a similar set of transactions to those defined in the MHD Profile for Document Consumer. The RID Profile is focused more on delivering display-ready health information that may or may not be document based, whereas the MHD Profile focuses on providing access to Documents and the metadata about the document. Grouping the RID Information Source with an MHD Document Responder will provide both access to the metadata and document content, and also access to display-ready information. 

<div>
<img alt="Figure: MHD Actors grouped with RID" src="Figure33.6.3-1.png" width="100%">
</div>
**Figure 1:33.6.3-1: MHD Actors Grouped with RID**


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/31_xds.md


## 3:4.2
...
### 3:4.2.4
...
#### 3:4.2.4.1 RegistryError Element

...

| Editor, please add the following rows to Table 4.2.4.1-2: Error Codes (previously Table 4.1-11) in [ITI TF-3: 4.2.4.1](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.4.1) |
{: .grid}

...

| Error Code | Discussion | Transaction (See Note 1) |
|------------|------------|--------------------------|
| UnknownRecipient | An IntendedRecipient is not recognized. | P |
| UnavailableRecipient | An IntendedRecipient which would have been contacted was not available. | P |
| FHIRDocumentNotSupported | A request to Publish a FHIR Document was attempted but not supported by the Document Recipient Actor. | P |
{: .grid}

...


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/32_fhir_maps.md


| Editor, please Add Section 4.5 |
{: .grid}

## 3:4.5 FHIR Representation of Document Sharing Metadata

This section documents the mapping between IHE [Document Sharing Metadata](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.1.html#4.1) and the FHIR Resources. 

### 3:4.5.1 Metadata Object Types mapped to FHIR

For details on FHIR resources and data types see HL7 FHIR http://hl7.org/fhir/R4/index.html.

Some Document Sharing Metadata attributes must be treated as `contained` FHIR Resources. These are indicated in with a "Note 1” and the word `contained`. The details of the FHIR `contained` mechanism is found at http://hl7.org/fhir/R4/references.html#contained.

When encoding XDS identifiers into FHIR Resource data elements of type Identifier, the FHIR notation of OIDs and UUIDs uses the system identifier of `urn:ietf:rfc:3986`. For more details and examples, see [ITI TF-2: Appendix E.3 “FHIR Identifier Type”](https://profiles.ihe.net/ITI/TF/Volume2/ch-E.html#E.3).

#### 3:4.5.1.1 DocumentEntry Metadata Attributes {#documentEntry}

The documented [mapping of the metadata elements](StructureDefinition-IHE.MHD.Minimal.DocumentReference-mappings.html#mappings-for-xds-and-mhd-mapping-xds) associated with a [Document Sharing DocumentEntry object](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2) attributes.

Note: FHIR contains an informative mapping that is intended to be equivalent and can be found at http://hl7.org/fhir/R4/documentreference-mappings.html#xds. For the purposes of IHE MHD conformance the mapping documented here (in IHE) are normative.

#### 3:4.5.1.2 DocumentReference StructureDefinition
The conformance requirements are different between a Provide Document Bundle [ITI-65](ITI-65.html) transaction and a Find Document References [ITI-67](ITI-67.html) transaction, and between Minimal Metadata, Comprehensive Metadata, and UnContained References.

The conformance requirements are different between Comprehensive, minimal, and UnContained References. The canonical URI is found as the "Defining URL:":
* [Comprehensive DocumentReference Metadata](StructureDefinition-IHE.MHD.Comprehensive.DocumentReference.html)
* [Comprehensive DocumentReference UnContained References](StructureDefinition-IHE.MHD.UnContained.Comprehensive.DocumentReference.html)
* [Minimal DocumentReference Metadata](StructureDefinition-IHE.MHD.Minimal.DocumentReference.html)
* Minimal DocumentReference does not include `contained` requirements

Resources are not required to carry the meta.profile element and may only carry the profile element defined for the Provide Document Bundle [ITI-65] transaction, as the Receiver is not required to add the profile tags. The value of the meta.profile is a soft indicator of conformance expectation. Receivers may choose to validate actual conformance and fail transactions due to non-conformance.

### 3:4.5.2 SubmissionSet Metadata Attributes {#submissionSet}

The documented [mapping of the metadata elements](StructureDefinition-IHE.MHD.Minimal.SubmissionSet-mappings.html#mappings-for-xds-and-mhd-mapping-xds) associated with a [Document Sharing SubmissionSet object](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.3) attributes.

#### 3:4.5.2.1 SubmissionSet List StructureDefinition
The conformance requirements are different between Comprehensive, Minimal, and UnContained References. The canonical URI is found as the "Defining URL:":
* [Comprehensive SubmissionSet Metadata](StructureDefinition-IHE.MHD.Comprehensive.SubmissionSet.html)
* [Comprehensive SubmissionSet UnContained References](StructureDefinition-IHE.MHD.UnContained.Comprehensive.SubmissionSet.html)
* [Minimal SubmissionSet Metadata](StructureDefinition-IHE.MHD.Minimal.SubmissionSet.html)
* Minimal SubmissionSet Metadata does not include `contained` requirements

Resources are not required to carry the meta.profile element and may only carry the profile element defined for the Provide Document Bundle [ITI-65](ITI-65.html) transaction, as the Receiver is not required to add the profile tags. The value of the meta.profile is a soft indicator of conformance expectation. Receivers may choose to validate actual conformance and fail transactions due to non-conformance.

### 3:4.5.3 Folder Metadata Attributes {#folder}

The documented [mapping of the metadata elements](StructureDefinition-IHE.MHD.Minimal.Folder-mappings.html#mappings-for-xds-and-mhd-mapping-xds) associated with a [Document Sharing Folder object](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.4) attributes.

Note that FHIR List Resource in the FHIR core specification does not include a Mapping to XDS.

#### 3:4.5.3.1 Folder StructureDefinition
The conformance requirements are different between Comprehensive and Minimal metadata. The canonical URI is found as the "Defining URL:":
* [Comprehensive Folder Metadata](StructureDefinition-IHE.MHD.Comprehensive.Folder.html)
* Comprehensive Folder Metadata does not include `contained` requirements
* [Minimal Folder Metadata](StructureDefinition-IHE.MHD.Minimal.Folder.html)
* Minimal Folder Metadata does not include `contained` requirements

Resources are not required to carry the meta.profile element and may only carry the profile element defined for the Provide Document Bundle [ITI-65](ITI-65.html) transaction, as the Receiver is not required to add the profile tags. The value of the meta.profile is a soft indicator of conformance expectation. Receivers may choose to validate actual conformance and fail transactions due to non-conformance.


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/a_issues.md

<div markdown="1" class="stu-note">

### Signficant changes in MHD Version 4.2.2

Version 4.2.2
- Quality improvements
- List-SourceId bad cast to Token by @JohnMoehrke in https://github.com/IHE/ITI.MHD/pull/217
- fix possible identifier value invariant bug by @JohnMoehrke in https://github.com/IHE/ITI.MHD/pull/215
- Update documentReference.fsh by @JohnMoehrke in https://github.com/IHE/ITI.MHD/pull/218
- IG Builder warnings ignored by @JohnMoehrke in https://github.com/IHE/ITI.MHD/pull/219
- build cleaning  by @JohnMoehrke in https://github.com/IHE/ITI.MHD/pull/225
- mapping had an extra column due to a second string by @JohnMoehrke in https://github.com/IHE/ITI.MHD/pull/228
- reference to PCC section should use sIPS extract by @JohnMoehrke in https://github.com/IHE/ITI.MHD/pull/224
- open the slicing on audit entity by @JohnMoehrke in https://github.com/IHE/ITI.MHD/pull/221
- Profiling of Bundle with PATCH #222 by @oliveregger in https://github.com/IHE/ITI.MHD/pull/227
- Updates to testplan to align with Gazelle and identify improvements to the tests

### Significant changes in MHD Version 4.2.1

Version 4.2.1
- quality improvements
- downloads and analysis page
- add context to extensions
- CP-ITI-1254 Date range clarity, 
- capabilityStatement improvements.

### Significant changes in MHD Version 4.2.0

Version 4.2.0
- changed to AuditEvent profiling leveraging [Basic Audit Log Patterns (BALP) Release 1.1.0](https://profiles.ihe.net/ITI/BALP/index.html)
  - changes to RESTful type, and query subtype
- Added new features
  - Add an [Generate Metadata](1332_actor_options.html#13325-generate-metadata-option) that adds the [ITI-106](ITI-106.html) operation that allows for one structured/coded document to be published.
    - Is the use of Operation preferrable to the Simplified Publish?
  - Add an [Simplified Publish](1332_actor_options.html#13324-simplified-publish-option) option that allows for one DocumentReference with the document in the .data element to be published, expecting the Document Recipient to create the SubmissionSet derived off of the DocumentReference and Community mapping policy.
  - Add an [ITI-65 FHIR Documents Publish](1332_actor_options.html#13326-iti-65-fhir-documents-publish-option) option with support in ITI-65 to include a FHIR Document Bundle as an alternative to Binary. This makes less the burden on the Document Source to seralize the content into an appropriate Binary format, as that requirement is moved to the Document Recipient. There are use-cases where the Document Recipient will use the FHIR Document Bundle directly, and there are requirements on the Document Recipient to seralize the FHIR Document Bundle when grouped with non-FHIR Actors like XDS/XDR/XDM.
    - This is added as an option at this time to keep base compatibility with existing MHD. This may become normal functionality of ITI-65 eventually
  - Each of these new options may survive or may be removed. Please voice your interest, and sign up for IHE-Connectathon to test these options. Based on interest these Options may survive or be removed.
- better clarity on types of Identifier
- a method has been added to support DocumentReference replace that is used by the Document Source to mark the old/replaced DocumentReference instance as superseded.

#### Other changes
- added clarity on when ITI-65 would/should/could include a Patient resource, vs relying on Patient services like PIXm/PDQm/PMIR.
- added a search parameter for searching against DocumentReference.content.attachment.creation
- eliminated mandate for entryUUID in ITI-65 from the StructureDefinitions, it was already relaxed in the ITI-65 narrative.
- allow .custodian element
- allow .context.encounter element and indicate how it can be handled with legacy Document Sharing (e.g. XDS)
- add clarification that search results do NOT need to be and may NOT be conformant to the MHD structureDefinition profiles. They will be in an enclosed environment, but the ITI-66 and ITI-67 transactions do not require that the results are compliant, simply that they meet the search parameters given.
- added clarity on the benefits of using CXi datatype in DocumentEntry.referenceIdList to distinguish various kinds of identifiers.
- moved status mapping table closer to where it is referenced
- link testplan better to test tools
- cleanup of various quality concerns illuminated by newer IG builder and validator.

### Significant changes in MHD Version 4.0.1

- Due to "breaking" changes, this version of MHD is Version 4.0.1
- Canonical URLs are different, using '.' rather than '_' as the underbar is not allowed in Canonical URLs.
- DocumentManifest has been replaced by List. Thus both SubmissionSet and Folder are supported with List Resource.
- To support use of List a few extensions have been added, and a few query parameters have been defined for those extensions.
- A full set of conformance resources and examples are included.
- Defined AuditEvent using profiling and examples.
- Hyperlinked to https://profiles.ihe.net publication of ITI specifications.

Please review the open issues and provide your response to the questions and statements.

## Issues

IHE welcomes [New Issues](https://github.com/IHE/ITI.MHD/issues/new/choose) from the GitHub community. 
For those without GitHub access, issues may be submitted to the [Public Comment form](https://www.ihe.net/resources/public_comment/).

As issues are submitted they will be managed on the [MHD GitHub Issues](https://github.com/IHE/ITI.MHD/issues), where discussion and workarounds may be found. These issues, when critical, will be processed using the normal [IHE Change Proposal](https://wiki.ihe.net/index.php/Category:CPs) management and balloting. 
It is important to note that as soon as a Change Proposal is approved, it carries the same weight as a published Implementation Guide (i.e., it is testable at an [IHE Connectathon](https://www.ihe.net/participate/connectathon/) from the time it is approved, even if it will not be integrated until several months later).

### Open Issues
These issues were known as part of the publication, and IHE invites comments. Comments can be submitted to [iticomments@googlegroups.com](mailto:iticomments@googlegroups.com) or may be submitted as comments to the specific GitHUB issue identified for that Open-Issue.

- [MHD_063](https://github.com/IHE/ITI.MHD/issues/158): Should MHD defined CapabilityStatement requirements so that a client can determine that the server supports MHD and which MHD server actor? Today we do require servers to support metadata endpoint returning their CapabilityStatment, but do not require it to contain anything specifically. We could first require that the CapabilityStatment.implementationGuide be populated with MHD canonical IG URL. We could additionally require specific .transaction values for DocumentRecipient, and .rest.resource.supportedProfile for DocumentResponder. Might we need an extension in .transaction to be more specific for Document Recipient? Should a DocumentRecipient need to publish that it is capable of receiving a create/update on these .rest resources (which we only defined thru the transaction, not individually REST)? Might we add an extension on CapabilityStatement.implementationGuide to hold the actor name and options? 
- [MHD_061](https://github.com/IHE/ITI.MHD/issues/157): The new IUA supplement includes guidance on use of OAuth scopes when grouped with MHD. That text updates MHD, but be maintained in MHD until IUA goes Final Text. see https://profiles.ihe.net/ITI/IUA/index.html#33-mhd-profile
- [MHD_055](https://github.com/IHE/ITI.MHD/issues/156): List.source does not allow for Organization which is needed for SubmissionSet.author. So created an extension (SourceOrg) to hold the SubmissionSet sourceId as a Reference(Organization). This could be reverted if the submitted CR changes R5 https://jira.hl7.org/browse/FHIR-30154 
- [MHD_058](https://github.com/IHE/ITI.MHD/issues/91): The profile requires that the document submitted is encoded in a FHIR Binary. Is there interest in also allowing a Bundle of type Document? This would be useful when publishing FHIR-Documents. The FHIR-Document would still need to be seralized into a Bundle of type Document, but that Bundle would not need to be further encoded into a Binary (e.g. base64 encoding). Note that the mime-type in this case would be forced to be the same mime-type as the ITI-65 Bundle, where a Document Source wants to encode ITI-65 in a mime-type that is different than the document, the Binary methodology would need to be used.
  - note that retrieve (ITI-68) does allow the Document Client to ask for the document content in various mime types, thus allowing support for preferred mime type encoding if the Document Responder has the ability to return the content in a encoding other than the DocumentReference indicates.
- [MHD_065](https://github.com/IHE/ITI.MHD/issues/155): Is it needed to have a mapping between XDS RegistryError and FHIR OperationOutcome at the element level, and also addressing OperationOutcome.issue.code vocabulary could be mapped to the XDS error vocabulary between XDS https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.4.1 and FHIR OperationOutcome?
- [MHD_066](https://github.com/IHE/ITI.MHD/issues/154): Note that On-Demand may become supported in FHIR R5 https://jira.hl7.org/browse/FHIR-22501
- [MHD_067](https://github.com/IHE/ITI.MHD/issues/109): Potential use of $docref operation from HL7 Implementation Guide. This operation is currently in US-Core, and is being added/moved to IPA. It is unclear how MHD would be able to use just this operation without being fully dependant upon all of IPA.
- [MHD_068](https://github.com/IHE/ITI.MHD/issues/197): Document Source "replace" methodology to better support FHIR backends like MHDS.
 
### Closed Issues
These issues have been decided and documented in the publication.

- Resolved in 4.0 (first IG build)
- MHD_062: Should the structureDefinition profiles forbid modifier extensions? It seems we have no reason for modifierExtensions, and modifierExtensions are allowed to radically change the meaning of the resource. -- with no objection this is likely to be added as a constraint.
  - marked all profiles in this IG as forbiddng modifierExtensions
- MHD_053: Note that there is an emerging issue that FHIR has not addressed and that is how distributed systems behave, and how Patient links affect recorded data. Thus, it is difficult to determine today that the response Bundle content all will be pointing at the exact same Patient, although they should all be referring to the same human.
  - Not clear there is anything that can be done with this. Also not sure anything should be done with this. It is up to the server to assure, to the best of the servers ability, that the results are about the same patient. And it is equally true that the client must presume this to be the case. This is the way it is done in XCA. In MHDS and XDS this is driven to be true thru unified patient identity that is centrally managed (XDS Affinity Domain, PMIR golden identity).
- MHD_057: On-Demand and Delayed-Assembly are mostly addressed in MHD to the extent that an API can define. The available solution is that a Document Consumer can tell stable from On-Demand or Delayed-Assembly through the hash and size elements. The solution for publication of On-Demand or Delayed-Assembly is that the Document Source can place any URL into the DocumentReference.content.attachment.url, and thus that URL might be to a service that dynamically creates the content. Given that MHD does not include a persistance mechanism, there is no mandate for retrieve processing for On-Demand or Delayed-Assembly; however the behaviour provided by XDS would be exposed in MHD.
- CP-ITI-1116: Dissonance between FHIR concept of Transaction, and XDS Provide and Register transaction. This is partially addressed in CP-ITI-1095 regarding PartialFolderContentNotProcessed. In that a Document Responder is allowed to fail the full transaction according to FHIR transaction rules but is also allowed to soft warn. The soft warn would most likely be needed when implementing XDS-on-FHIR, as the XDS actors will have returned warnings. Thus, the Document Recipient must be allowed to return these soft warnings. In this case the MHD Document Recipient can’t undo the XDS transaction, so it must be allowed to return success with warnings.
  - The partial processing is a defined behaviour in MHD, so this is not seen as a failure that should cause the whole transaction fail. 
- MHD_064: Should ITI-65 be an Operation rather than a Transaction? This might make MHD_063 easier?
  - Not moving to Operaiton, Given that Bundle Transaction is acceptable, and there is no interest presented to move to an Operation.
- MHD_051: More of the [ITI-18] queries could be utilized with the addition of the identifier FHIR parameter, however this would then present combinations of query parameters at the MHD (FHIR) API that are not simple transforms to [ITI-18] queries. For example, a Document Consumer provides both identifier query parameter, and another query parameter. At this time, MHD is focused on the most likely queries that a ‘mobile’ client would need, and these are satisfied with FindDocuments, FindFolders, and FindSubmissionSets alone. Trial Implementation experience should be provided to IHE ITI Technical Committee in view of the need for other query parameters. Additional query parameters are allowed by MHD, they are simply not required of servers to do anything other than ignore the additional query parameters.
- MHD_039: How important are Folders? We could support Document Source  Document Recipient ability to create and update Folders. To support Document Consumer  Document Responder support of folders would require adding another Transaction for Find Folders, or some other method that the Document Consumer obtains knowledge of the Folder (such as through _include). Are folders really important today, or have they been replaced by the ReferenceIdList?
- MHD_044: There is more detail in an XDS error on Provide and Register Document Set-b that is not obvious how to translate into the FHIR response [ITI-65]. Suggestions welcome.
- MHD_059: Note that Comprehensive constraints leave intendedRecipient as optional, where in XDR intendedRecipient is R2. This distinction was not considered sufficient to add the complexity to the profiles, and recognizes that in a PUSH use-case (XDR) where an intendedRecipent is known that it will be populated and that thus the distinction of R2 vs O is a non-issue.
- MHD_052: Need an element in List to hold contentCodeList element from XDS. Previous versions of MHD put this into the .code element. However, the .code element is 0..1, and intended to identify the kind of List. See GF#19822 requested for R5.
- MHD_056:  the canonical urls have changed from '_' to '.'. The definition in FHIR for an "id" does not allow '_', but does allow '.'. The id value is the unique part of the defining canonical URL.
- Resolved in MHD Revision 3.0
- MHD_054: Request to add the identifier query parameter to DocumentReference and DocumentManifest. 
- MHD_043: We neither mandate nor forbid the [ITI-68] from acting as a FHIR Binary endpoint. It would return a FHIR Binary resource with the content contained if the Accept headers ask for FHIR types, depending on the server capability.
- MHD_042: MHD does not declare options for the various associations (replaces, transforms, appends), but rather provides the capability to all. However, the Document Responder in XDS-on-FHIR Option must support all of these association types. It may still get a failure from the Registry that it must pass back to the Document Source.
- MHD_047: The tag used to indicate the Provide transaction must change. The encoding rules don't allow for "-" character. We could just change ITI-65 into ITI_65, but a breaking change is a breaking change. So, we have replaced with an actual structure definition based in the same URI space as our other Structure definitions. This means that we would no-longer use http://ihe.net/fhir/tag/iti-65, but rather we would use http://ihe.net/fhir/StructureDefinition/IHE_MHD_Provide_Comprehensive_DocumentBundle, or http://ihe.net/fhir/StructureDefinition/IHE_MHD_Provide_Minimal_DocumentBundle"MHD_048: We have chosen to define some secondary resources as ‘contained’, which in FHIR means that they would not standalone, and thus would not be revisable. We chose this characteristic as the closest to XDS metadata principle. However, this means that these secondary resources would not be searchable.
- CP-ITI-1115: Added requirement for location on the Bundle response and indicate etag is required if the server supports versioning (which the profile does not require). Also added GF#19824 to request this be clarified in FHIR in R5.
- CP-ITI-1126: added clarification that the transaction status is 200, and that each entry is 201 with location must be populated.
- CP-ITI-1114: clarify that in a Provide transaction all of the DocumentReference, DocumentManifest, and List resources must point at the same Patient resource. Added clarity to query transactions that when Patient parameter is used that both actors must have access to that Patient resource. Also added cautions to the security considerations.
- CP-ITI-1113: Added additional clarification of Reference url compliance vs .attachment.url compliance. Where attachment.url is a datatype “URL” it can carry a value that is compliant with Reference but can also carry any valid URL.
- CP-ITI-1102: Addressed bugs in the volume 3 table.
- CP-ITI-1101: This CP requests specifics on what is expected of a Document Responder implementing the Comprehensive Metadata Option. This is already handled in the more correct location in Volume 2 on the expected actions for the Document Responder. See Section 3.65.4.1.3.
- CP-ITI-1095: It is observed that in FHIR a transaction must succeed or fail. Thus, the inclusion of a Folder that the Document Recipient can’t process should result in failure of the whole transaction. The text of MHD has aligned with the text of XDS ITI TF-2:3.41.4.1.3.1 that allows a soft failure on Folders that are not supported. Should MHD take this softer position or stick with normal FHIR transaction behavior. For those systems based on a FHIR system they would likely prefer sticking with the FHIR definition, but those are likely also to easily support Folder (List Resource). Those that are a frontend to an XDS (XDS-on-FHIR) are more likely to prefer the softer approach, as they are going to need to pass through PartialFolderContentNotProcessed. Thus, the MHD Profile has been updated to indicate that either a full transaction failure or soft failure shall happen. 
- CP-ITI-1089: Added emphasis on the response to the query transactions are compliant resources to the FHIR specification and will likely be compliant with MHD. There was already emphasis for the Document Consumer to be robust when processing the Bundle. There were questions of needing to address an operational environment with mismatched minimal vs comprehensive, this seems well enough explained and unclear what further wording would help with this clarity.
- MHD_049: ProviderRole has been added to FHIR STU3, and now added to DocumentReference and DocumentManifest. A FHIR CR 13266 resolved this. 
- MHD_050: Using FHIR List as a Folder is minimally supported. Have defined a constant List.code that identifies those List resources that are Document Sharing Folders. 
- MHD_036: There is a missing capability to fully represent XDS author in FHIR. This because FHIR DocumentReference and DocumentManifest only support ‘author’, not the other roles that could be supported in XDS. This author element precoordinates that the value is only the author. GF#13266: DocumentReference and DocumentManifest author element needs to be more like Provenance.agent  Current FHIR core uses PractitionerRole and has wider support for author types.
- MHD_038: Issue with how to carry CDA®  root plus extension. We have documented current solution in Appendix Z– How to represent root+extension in a FHIR Identifier. However, FHIR should be more normative, so we have opened a CR http://gforge.hl7.org/gf/project/fhir/tracker/?action=TrackerItemEdit&tracker_item_id=13223 FHIR core has decided upon the root, and root+extension as we have defined it in Appendix Z.
- Resolved in MHD revision 2.4
- MHD_040: Find Document References does not support the GetRelatedDocuments stored query in the same way, but the queries provided can provide the same functionality.
- MHD_041: There is now a declared option to indicate a system that requires minimal metadata support. Therefore, a Document Source that uses minimal metadata may receive an error from a Document Recipient that does not support minimal metadata.
- MHD_037: STU3 now the Reference datatype can carry a URL to a Resource, or an Identifier of what could be a resource. We chose to specify use of URI and are silent on identifier until a compelling use case or issue appears.
- MHD_045: MHD scope is as a front API. Thus, it intends to be standalone, or as a front API to XDS/XCA/XDR. It therefore does not intend to support where XDS is the frontend API with MHD as the backend. The result is that MHD query model is a subset of XDS.
- MHD_046: MHD is an Interoperability Profile and does not include systems design that would be necessary to efficiently implement. There is considerable room for creative systems design.
- MHD_001: Standards selection is now FHIR DSTU2. The profile restricts FHIR use to that which can be supported by an underlying XDS environment. The broad expectation is to use DocumentReference for DocumentEntry, DocumentManifest for SubmissionSet, and List for Folders. The inclusion of other FHIR resources as needed. The Provide Document Bundle is a bundle of the various resources necessary to be equivalent to the XDS Provide And Register Document Set-b [ITI-41]. The Find Document References will query on DocumentReference resources. The Find Document Manifests will query on DocumentManifest resources. 
- MHD_002: Use of the IUA Profile is recommended, but not mandated as there are plenty of HTTP-based security models that layer in between the low-level transport (TCP) and the HTTP encoding. These security models can be layered in without modifying the characteristics of this profile. Use of TLS is encouraged, specifically as profiled in ATNA, but is not mandated. The IUA Profile includes guidance on the use of the current common implementations of OpenID Connect and OAuth 2. 
- MHD_027: The Provide Document Bundle transaction allows for referencing the document content or including the document content. This is a capability not included in XDS for a Document Source but is reasonable for a Document Recipient to implement. Does IHE need to define a Create Document type transaction so that the Document Source could publish before using references in the Provide Document Bundle Transaction? Resolution: there is expectation of supporting this in the future.
- MHD_031: This version of MHD supports Replace operations. 
- MHD_032: This version of MHD supports other Association types. 
- MHD_033: This version of MHD provides only minimal support for Folders. A Document Source can create Folders, and update Folders. A Document Responder can return Folders related to other queries. However, there is no defined method to search for Folders. Searching for Folders, as FHIR List resources, should be obvious. 
- MHD_025: This version of MHD is based on HL7 FHIR DSTU2. Lessons learned were folded into HL7 FHIR for DSTU2 under a joint effort of IHE and HL7. Revisions of MHD are not expected to be backward compatible, until FHIR goes normative and MHD goes Final Text.
- MHD_026: DSTU2 has aligned the use of typeCode as DocumentReference.type, and classCode as DocumentReference.class. 
- MHD_030: Include support for ReferenceIdList
- MHD_034: MHD updated in 2020 includes an “UnContained References Option” to enable use-cases where known references are managed over their lifecycle and thus contained is not helpful. This option identifies sourcePatientInfo, Authenticator, and Author resources within the DocumentReference, and DocumentManifest.
- MHD_035: FHIR does not provide an ad-hoc metadata extension mechanism like custom slots in XDS. 

</div>


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/Bundle-ex-comprehensiveProvideDocumentBundleComplete-intro.md

Example of a complete comprehensive Provide Document Bundle for a publication.
- The bundle contains
  - SubmissionSet - identifies one documentReference
  - Folder - identifies one documentReference
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Patient is contained in the DocumentReference
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource.
  
Response [example](Bundle-ex-response-comprehensiveProvideDocumentBundleComplete.html)
  

---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/Bundle-ex-comprehensiveProvideDocumentBundleMultiple-intro.md

Example of a comprehensive Provide Document Bundle for a publication.
- The bundle contains
  - SubmissionSet - identifies the documentReference(s)
  - DocumentReference - First DocumentReference
  - Binary - the first document
  - DocumentReference - Second DocumentReference
  - Binary - the second document
  - the Patient is contained in the DocumentReference
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource.
  
Response [example](Bundle-ex-response-comprehensiveProvideDocumentBundleMultiple.html)
  

---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/Bundle-ex-comprehensiveProvideDocumentBundleSimple-intro.md

Example of a comprehensive Provide Document Bundle for a publication.
- The bundle contains
  - SubmissionSet - identifies one documentReference
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Patient is contained in the DocumentReference
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource.
  
Response [example](Bundle-ex-response-comprehensiveProvideDocumentBundleSimple.html)
  

---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/Bundle-ex-minimalProvideDocumentBundleSimple-intro.md

Example of a minimal Provide Document Bundle for a push to an email intended recipient.
- The bundle contains
  - SubmissionSet - identifies to whom this is going and one documentReference
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Patient, as this is a push to a recipient that does not share a patient directory
  
Response [example](Bundle-ex-response-comprehensiveProvideDocumentBundleSimple.html)
  

---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/Bundle-ex-minimalProvideDocumentBundleSimpleContained-intro.md

Example of a minimal Provide Document Bundle for a push to an email intended recipient.
- The bundle contains
  - SubmissionSet - identifies to whom this is going and one documentReference
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Patient is contained in the DocumentReference. This would be more classic XDR/XDM model. Note there is no mention of the patient in the SubmissionSet in this case (hence minimal metadata), and if multiple documents were sent they would implicitly be the same patient, presumably with the same contained Patient; but given it is a contained Patinet there is no way to computably prove this beyond exact comparison of the contained object.
  
Response [example](Bundle-ex-response-minimalProvideDocumentBundleSimpleContained.html)
  

---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/Bundle-ex-ProvideDocumentBundle-addToFolder-intro.md

Example of a comprehensive Provide Document Bundle for a publication and added to an existing folder.
- The bundle contains
  - SubmissionSet - identifies one documentReference
  - Folder - existing Folder to be updated
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Patient is contained in the DocumentReference
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource.

no response example is provided


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/Bundle-ex-unContainedComprehensiveProvideDocumentBundleComplete-intro.md

Example of a complete uncontained comprehensive Provide Document Bundle for a publication.
- The bundle contains
  - SubmissionSet - identifies one documentReference
  - Folder - identifies one documentReference
  - DocumentReference - One DocumentReference
  - Binary - the document
  - the Practitioner and Organization are references
  - the Patient is also a reference to a PIXm/PDQm retrieved Resource.
  
Response [example](Bundle-ex-response-unContainedComprehensiveProvideDocumentBundleCompt.html)
  

---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentConsumer-intro.md

This is the **Requirements** CapabilityStatement for a [Document Consumer](1331_actors_and_transactions.html#133112-document-consumer). The Document Consumer may  declared the UnContained References [Options](1332_actor_options.html). This Actor is allowed to use [Find Document List ITI-66](ITI-66.html), [Find Document References ITI-67](ITI-67.html), and [Retrieve Document ITI-68](ITI-68.html) transactions. The Document Consumer Actor should be robust for unconstrained DocumentReference and List Resources, as the results returned to the Document Consumer from the Document Responder may not follow the conformance constraints.

<div>
{%include QueryActors.svg%}
</div>

<br clear="all">

**Figure: Query Actors Interactions**



---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentRecipient-intro.md

This is the **Requirements** CapabilityStatement for a [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient) with no declared [Options](1332_actor_options.html), or all declared [Options](1332_actor_options.html). This Actor is allowed to use Minimal Metadata, [Comprehensive Metadata](1332_actor_options.html#13321-comprehensive-metadata-option) Option, [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option, or [UnContained Comprehensive Metadata](1332_actor_options.html#13323-uncontained-reference-option).

The [Document Source](1331_actors_and_transactions.html#133111-document-source) uses the [Provide Document Bundle ITI-65](ITI-65.html) to communicate metadata and documents to the [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient).

<div>
{%include ITI-65-seq.svg%}
</div>

<br clear="all">

**Figure: Provide Document Bundle Interactions**





---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentRecipient.Comprehensive-intro.md

This is the **Requirements** CapabilityStatement for a [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient) with Comprehensive Metadata Option declared [Option](1332_actor_options.html). 
This actor must use [Comprehensive Metadata](1332_actor_options.html#13321-comprehensive-metadata-option) Option.
Note that [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option requires the Comprehensive Metadata Option. 

The [Document Source](1331_actors_and_transactions.html#133111-document-source) uses the [Provide Document Bundle ITI-65](ITI-65.html) to communicate metadata and documents to the [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient).

<div>
{%include ITI-65-seq.svg%}
</div>

<br clear="all">

**Figure: Provide Document Bundle Interactions**





---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentRecipient.Generate-intro.md

This is the **Requirements** CapabilityStatement for a [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient) with Generate Metadata Option declared [Option](1332_actor_options.html). 

The [Document Source](1331_actors_and_transactions.html#133111-document-source) uses the [Generate Metadata ITI-106](ITI-106.html) to communicate a document to the [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient) to have a DocumentReference generated and processed.

<div>
{%include ITI-106-seq.svg%}
</div>

<br clear="all">

**Figure: Generate Metadata Interactions**





---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentRecipient.Simplified-intro.md

This is the **Requirements** CapabilityStatement for a [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient) with Simplified Publish Option declared [Option](1332_actor_options.html). 

The [Document Source](1331_actors_and_transactions.html#133111-document-source) uses the [Simplified Publish ITI-105](ITI-105.html) to communicate metadata and a document to the [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient).

<div>
{%include ITI-105-seq.svg%}
</div>

<br clear="all">

**Figure: Simplified Publish Interactions**





---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentRecipient.UnContained-intro.md

This is the **Requirements** CapabilityStatement for a [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient) with UnContained Reference declared [Option](1332_actor_options.html). 
This actor must use either [Comprehensive Metadata](1332_actor_options.html#13321-comprehensive-metadata-option) Option or UnContained Reference or [UnContained Reference](1332_actor_options.html#13323-uncontained-reference-option) Option.
Note that the [UnContained Reference](1332_actor_options.html#13323-uncontained-reference-option) Option can not be used with [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option. 

The [Document Source](1331_actors_and_transactions.html#133111-document-source) uses the [Provide Document Bundle ITI-65](ITI-65.html) to communicate metadata and documents to the [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient).

<div>
{%include ITI-65-seq.svg%}
</div>

<br clear="all">

**Figure: Provide Document Bundle Interactions**





---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentResponder-intro.md

This is the **Requirements** CapabilityStatement for a [Document Responder](1331_actors_and_transactions.html#133114-document-responder). The Document Responder may  declared the [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option or the UnContained References [Options](1332_actor_options.html). This Actor Shall provide server implementing [Find Document List ITI-66](ITI-66.html), [Find Document References ITI-67](ITI-67.html), and [Retrieve Document ITI-68](ITI-68.html) transactions. 

<div>
{%include QueryActors.svg%}
</div>

<br clear="all">

**Figure: Query Actors Interactions**



---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentSource-intro.md

This is the **Requirements** CapabilityStatement for a [Document Source](1331_actors_and_transactions.html#133111-document-source) with no declared [Options](1332_actor_options.html), or all declared [Options](1332_actor_options.html). This Actor is allowed to use Minimal Metadata, [Comprehensive Metadata](1332_actor_options.html#13321-comprehensive-metadata-option) Option, [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option, or [UnContained Comprehensive Metadata](1332_actor_options.html#13323-uncontained-reference-option).

The [Document Source](1331_actors_and_transactions.html#133111-document-source) uses the [Provide Document Bundle ITI-65](ITI-65.html) to communicate metadata and documents to the [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient).

<div>
{%include ITI-65-seq.svg%}
</div>

<br clear="all">

**Figure: Provide Document Bundle Interactions**





---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentSource.Comprehensive-intro.md

This is the **Requirements** CapabilityStatement for a [Document Source](1331_actors_and_transactions.html#133111-document-source) with the Comprehensive Metadata Option declared [Option](1332_actor_options.html). 
This actor must use [Comprehensive Metadata](1332_actor_options.html#13321-comprehensive-metadata-option) Option.
Note that [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option requires the Comprehensive Metadata Option.

The [Document Source](1331_actors_and_transactions.html#133111-document-source) uses the [Provide Document Bundle ITI-65](ITI-65.html) to communicate metadata and documents to the [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient).

<div>
{%include ITI-65-seq.svg%}
</div>

<br clear="all">

**Figure: Provide Document Bundle Interactions**





---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentSource.Generate-intro.md

This is the **Requirements** CapabilityStatement for a [Document Source](1331_actors_and_transactions.html#133111-document-source) with the Generate Metadata Option declared [Option](1332_actor_options.html). 

The [Document Source](1331_actors_and_transactions.html#133111-document-source) uses the [Generate Metadata ITI-106](ITI-106.html) to communicate a document to the [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient) to have a DocumentReference generated and processed.

<div>
{%include ITI-106-seq.svg%}
</div>

<br clear="all">

**Figure: Generate Metadata Interactions**






---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentSource.Simplified-intro.md

This is the **Requirements** CapabilityStatement for a [Document Source](1331_actors_and_transactions.html#133111-document-source) with the Simplified Publish Option declared [Option](1332_actor_options.html). 

The [Document Source](1331_actors_and_transactions.html#133111-document-source) uses the [Simplified Publish ITI-105](ITI-105.html) to communicate metadata and a document to the [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient).

<div>
{%include ITI-105-seq.svg%}
</div>

<br clear="all">

**Figure: Simplified Publish Interactions**






---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/CapabilityStatement-IHE.MHD.DocumentSource.UnContained-intro.md

This is the **Requirements** CapabilityStatement for a [Document Source](1331_actors_and_transactions.html#133111-document-source) with the UnContained Reference declared [Option](1332_actor_options.html). 
This actor must use either [Comprehensive Metadata](1332_actor_options.html#13321-comprehensive-metadata-option) Option or UnContained Reference or [UnContained Reference](1332_actor_options.html#13323-uncontained-reference-option) Option.
Note that the [UnContained Reference](1332_actor_options.html#13323-uncontained-reference-option) Option can not be used with [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option. 

The [Document Source](1331_actors_and_transactions.html#133111-document-source) uses the [Provide Document Bundle ITI-65](ITI-65.html) to communicate metadata and documents to the [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient).

<div>
{%include ITI-65-seq.svg%}
</div>

<br clear="all">

**Figure: Provide Document Bundle Interactions**





---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/download.md


You can download:

- [this entire guide](full-ig.zip),
- the definition resources in [json](definitions.json.zip), [xml](definitions.xml.zip), [ttl](definitions.ttl.zip), or [csv](csvs.zip) format, or
- the example resources in [json](examples.json.zip), [xml](examples.xml.zip) or [ttl](examples.ttl.zip) format.

The source code for this Implementation Guide can be found on [IHE ITI.MHD Github Repo](https://github.com/IHE/ITI.MHD).

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/index.md


Applications specific to resource-constrained and mobile devices are an emerging platform for healthcare-enhancing software. The MHD Profile is not limited to mobile devices, using the term “mobile” only as a grouping for mobile applications, mobile devices or any other systems that are resource and platform-constrained. These constraints may drive the implementer to use simpler network interface technology. There are numerous deployed implementations of [Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) that need a simpler network interface technology, for example those hosted by a Health Information Exchange (HIE), large health provider electronic health record (EHR), or personal health record (PHR). 

The Mobile access to Health Documents (MHD) Profile defines one standardized interface to [health document sharing](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html) (a.k.a. an Application Programming Interface (API)) for use by mobile devices so that deployment of mobile applications is more consistent and reusable. In this context, mobile devices include tablets, smart-phones, and embedded devices including home-health devices. This profile is also applicable to more capable systems where needs are simple, such as pulling the latest summary for display. The critical aspects of the "mobile device" are that it is resource-constrained, has a simple programming environment (e.g., JSON, JavaScript), simple protocol stack (e.g., HTTP), and simple display functionality (e.g., HTML browser). The goal is, in part, to avoid burdening the client with additional libraries such as those that are necessary to process SOAP, WSSE, MIME-Multipart, MTOM/XOP, ebRIM, and multi-depth XML. 

The Mobile access to Health Documents (MHD) Profile defines one pair of actors and a transaction to submit or push new “document entries” from the mobile device to a receiving system. Another set of actors and transactions is used to query a list of “document entries” having specific metadata, and to retrieve a document. 

The transactions defined here leverage the [document content- and format-agnostic metadata concepts](https://profiles.ihe.net/ITI/TF/Volume3/index.html#4) that were initially developed for [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) but simplify them for access in constrained environments including mobile devices. 

The MHD Profile can be used as an [API to a Document Sharing exchange using XDS](1336_cross_profile_considerations.html#13361-mhd-actor-grouped-with-xds-infrastructure) or [XCA](1336_cross_profile_considerations.html#13362-mhd-actors-grouped-with-xca-infrastructure). The MHD Profile is used by the [MHDS Document Sharing](https://profiles.ihe.net/ITI/TF/Volume1/ch-50.html) solution. The MHD Profile can be used in [push solutions](1334_overview.html#133422-publication-of-new-documents-process-flow) alone or as an API to solutions like XDR or XDM. These are further elaborated in [Cross Profile Considerations](1336_cross_profile_considerations.html).

The [Mobile Cross-Enterprise Document Data Element Extraction (mXDE)](https://profiles.ihe.net/ITI/TF/Volume1/ch-45.html) Profile combines MHD with the PCC Query for Existing Data for Mobile (QEDm) Profile to provide element level access to the medical information available in a Document Sharing exchange. More details can be found in the white paper on [Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper/index.html).

MHD is part of [IHE](https://profiles.ihe.net) -- [IT-Infrastructure](https://profiles.ihe.net/ITI) Domain and 
part of the [IHE Document Sharing Health Information Exchange](https://profiles.ihe.net/ITI/HIE-Whitepaper) solution.

<div markdown="1" class="stu-note">

| [Significant Changes, Open and Closed Issues](a_issues.html) |
{: .grid}

**[Search this IG](https://www.google.com/search?q=site%3Ahttps%3A%2F%2Fprofiles.ihe.net%2FITI%2FMHD&rlz=1C1GCEU_enUS815US815&sxsrf=ALeKk02egtK8A20vWkRrPApvkcoQjnIiDA%3A1620864970799&ei=ym-cYPmMMMq6tQa8vre4CA&oq=site%3Ahttps%3A%2F%2Fprofiles.ihe.net%2FITI%2FMHD&gs_lcp=Cgdnd3Mtd2l6EANQ7CZYmDBg9TdoAXAAeACAAWaIAcIDkgEDNS4xmAEAoAEBqgEHZ3dzLXdpesABAQ&sclient=gws-wiz&ved=0ahUKEwj5mcDGsMXwAhVKXc0KHTzfDYcQ4dUDCA4&uact=5)**

</div>

#### Organization of This Guide 

This guide is organized into the following sections:

- Volume 1: Use-Case analysis
  - [Actors and Transactions](1331_actors_and_transactions.html)
  - [Actor Options](1332_actor_options.html)
  - [Actor Required Groupings](1333_required_grouping.html)
  - [Overview](1334_overview.html)
  - [Security Considerations](1335_security_considerations.html)
  - [Cross Profile Considerations](1336_cross_profile_considerations.html)
- Volume 2: Transaction Detail
  - [Provide Document Bundle [ITI-65]](ITI-65.html)
  - [Find Document Lists [ITI-66]](ITI-66.html)
  - [Find Document References [ITI-67]](ITI-67.html)
  - [Retrieve Document [ITI-68]](ITI-68.html)
  - [Simplified Publish [ITI-105]](ITI-105.html)
  - [Generate Metadata [ITI-106]](ITI-106.html)
- Volume 3: Metadata
  - [XDS Error Codes](31_xds.html)
  - [FHIR Representation](32_fhir_maps.html)
- Other
  - [Test Plan](testplan.html)
  - [Download and Analysis](download.html)

Click on any of the links above, see the [Table of Contents](toc.html), or
if you are looking for a specific artifact, see the index of [Artifacts](artifacts.html).

#### Must Support

MHD defines `Must Support` in StructureDefinition profiles as the element, when the minimal cardinality is zero, is **R2** `Required if Known`, as found in [Appendix Z](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.10-profiling-conventions-for-constraints-on-fhir). `Must Support` when the element minimal cardinality is not zero means **R**.


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/ITI-105.md

This section corresponds to transaction [ITI-105] of the IHE Technical Framework. Transaction [ITI-105] is used by the Document Source and Document Recipient Actors. The Simplified Publish [ITI-105] transaction is used to transmit a document and the document metadata.

### 2:3.105.1 Scope

The Simplified Publish [ITI-105] transaction passes a Simplified Publish Request from a Document Source to a Document Recipient.

### 2:3.105.2 Actors Roles

**Table 2:3.105.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Document Source](1331_actors_and_transactions.html#133111-document-source)    | Sends document and metadata to the Document Recipient |
| [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient) | Accepts the document and metadata sent from the Document Source |
{: .grid}

### 2:3.105.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

### 2:3.105.4 Messages

<div>
{%include ITI-105-seq.svg%}
</div>

<br clear="all">

**Figure 2:3.105.4-1: Simplified Publish Interactions**

#### 2:3.105.4.1 Simplified Publish Request Message
This message uses the HTTP POST method on the target Simplified Publish endpoint to convey the metadata and the document as a FHIR DocumentReference.

##### 2:3.105.4.1.1 Trigger Events

This method is invoked when the Document Source needs to submit one document to a Document Recipient. 

##### 2:3.105.4.1.2 Message Semantics

The Document Source shall initiate a FHIR “create” action by sending an HTTP POST request method composed of a FHIR [Simplified Publish DocumentReference](StructureDefinition-IHE.MHD.SimplifiedPublish.DocumentReference.html), with the document encoded in the `DocumentReference.content.attachment.data` element. Refer to [ITI TF-3: 4.5.1](32_fhir_maps.html) for details on the FHIR Resources and how Document Sharing metadata attributes are mapped. 

The media type of the HTTP body shall be either `application/fhir+json` or `application/fhir+xml`.

The Simplified Publish message is sent to the DocumentReference at the base URL as defined in FHIR. See [http://hl7.org/fhir/R4/http.html](http://hl7.org/fhir/R4/http.html) for the definition of “HTTP” access methods and “base”.
```
[base]/DocumentReference
```

The Document Source shall assure the [Simplified Publish DocumentReference](StructureDefinition-IHE.MHD.SimplifiedPublish.DocumentReference.html) resource are consistent with the [Document Sharing metadata](https://profiles.ihe.net/ITI/TF/Volume3/index.html#4) requirements as specified for attributes [ITI TF-3: Table 4.3.1-3 “Sending Actor Metadata Attribute Optionality”](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3.1). The Document Source that supports the [Comprehensive Metadata](1332_actor_options.html#13322-xds-on-fhir-option) or the [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Options shall assure consistency with column “XDS DS”; otherwise, the Document Source shall assure consistency with column “XDR MS”. 
Except that the Document Source does not need to provide any entryUUID values, as the entryUUID will be populated by the Document Recipient when necessary. 

###### 2:3.105.4.1.2.1 DocumentReference Resources

For complete information on constructing a FHIR [Simplified Publish DocumentReference](StructureDefinition-IHE.MHD.SimplifiedPublish.DocumentReference.html) Resource metadata requirements. Recommend to populate all elements possible.

When resources are `contained` , see [ITI TF-3: 4.5.1](32_fhir_maps.html), they shall be contained using the FHIR contained method (see [http://hl7.org/fhir/R4/references.html#contained](http://hl7.org/fhir/R4/references.html#contained) ).

The Document Source shall populate accurate .hash and .size for the raw document content artifact, that has been base64encoded in the `DocumentReference.content.attachment.data` element.  

The `DocumentReference.subject` value shall be populated with the identity of the Patient.

###### 2:3.105.4.1.2.2 Patient Identity

The DocumentReference.subject value shall be a Reference to a FHIR Patient Resource. The Patient Reference shall be a Patient Resource hosted on a commonly accessible server. 
* A Patient Reference to a commonly accessible server may be obtained through use of [PDQm](https://profiles.ihe.net/ITI/TF/Volume1/ch-38.html), [PIXm](https://profiles.ihe.net/ITI/TF/Volume1/ch-41.html), [PMIR](https://profiles.ihe.net/ITI/TF/Volume1/ch-49.html), or by some other means. 
* A commonly accessible logical reference using Patient Identifier, instead of a literal reference, may be acceptable where there is a common Identifier, such as a national individual identifier.

When the [UnContained Reference Option](1332_actor_options.html#13323-uncontained-reference-option) is used, there is no need to populate the sourcePatientInfo element. Otherwise, when sourcePatientInfo is provided, the DocumentReference.context.sourcePatientInfo shall be a reference to a “contained” Patient Resource. That is, the source patient info is encoded in a Patient Resource within the DocumentReference.contained element (see [http://hl7.org/fhir/R4/references.html#contained](http://hl7.org/fhir/R4/references.html#contained) ).

###### 2:3.105.4.1.2.3 Replace, Transform, Signs, and Append Associations

The DocumentReference.relatesTo element indicates an association between DocumentReference resources. The relatesTo.target element in the provided DocumentReference points at the pre-existing DocumentReference that is being replaced, transformed, signed, or appended. The relatesTo.code element in the provided DocumentReference shall be the appropriate relationship type code defined in [http://hl7.org/fhir/R4/valueset-document-relationship-type.html](http://hl7.org/fhir/R4/valueset-document-relationship-type.html). If a DocumentReference will be replaced, the to be replaced DocumentReference needs to be added and updated to status `superseded` within the transaction bundle.

##### 2:3.105.4.1.3 Expected Actions

The Document Recipient shall accept both media types `application/fhir+json` and `application/fhir+xml`.

On receipt of the Simplified Publish Request Message, the Document Recipient shall validate the DocumentReference resource provided, extract the document from the DocumentReference.content.attachment.data element, create a Binary and SubmissionSet derived off of the DocumentReference, and respond with one of the HTTP codes defined in the response [Message Semantics](#23105412-message-semantics). 

The Document Recipient should verify the FHIR resource elements for consistency with the Document Sharing metadata requirements as specified for attributes [ITI TF-3: Table 4.3.1-3: “Sending Actor Metadata Attribute Optionality”](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3.1). 
- The Document Recipient that supports the [Comprehensive Metadata](1332_actor_options.html#13322-xds-on-fhir-option) or the [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option should validate against column “XDS DS”; 
- Otherwise the Document Recipient should validate against column “XDR MS”.  

The Document Recipient shall extract the document, translate the DocumentReference metadata elements into a SubmissionSet following the [PCC TF-2: 4.1 Medical Document Binding to Document Sharing Metadata](https://profiles.ihe.net/ITI/sIPS/pcc.html#41-medical-document-binding-to-document-sharing-metadata), and may have further metadata translation requirements specified by the local Document Sharing Community policy.

A Document Recipient is allowed to be robust for non-compliant resources that violate the Document Sharing metadata requirements. 

If necessary for processing, the Document Recipient shall retrieve Resources referenced by absolute URLs in the FHIR DocumentReference Resource.

If the Document Recipient encounters any errors or if any validation fails, the Document Recipient shall return an error using a FHIR OperationOutcome. If appropriate, it shall use error codes from [ITI TF-3: Table 4.2.4.1-2](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.4.1).

If the DocumentReference Resource is populated with a relatesTo element and the Document Recipient does not support the relatesTo.code value given, it shall return a warning message, as indicated in *Table 2:3.65.4.1.3-1: Warning message when relatesTo code is not supported*.

**Table 2:3.65.4.1.3-1: Warning message when relatesTo code is not supported**

|relatesTo.code |	Warning |
|---------------|-----------|
|replaces	 | PartialReplaceContentNotProcessed |
|transforms	 | PartialTransformContentNotProcessed |
|appends	 | PartialAppendContentNotProcessed |
{: .grid}

###### 2:3.105.4.1.3.1 Grouping with Actors in other Document Sharing Profiles

This section applies to grouping MHD Document Recipient with [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) [Document Source](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.1.1.1) Actor, [XDR](https://profiles.ihe.net/ITI/TF/Volume1/ch-15.html) Document Source Actor, [XDR](https://profiles.ihe.net/ITI/TF/Volume1/ch-15.html) Limited-Metadata Document Source Actor, and [XDM](https://profiles.ihe.net/ITI/TF/Volume1/ch-16.html) Portable Media Creator Actor (e.g., with the [XDM ZIP over Email Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-16.html#16.2.3) ). 

The Document Recipient shall transform the DocumentReference content into a proper message for the given grouped actor (e.g., the XDS Document Source using the Provide and Register Document Set-b [\[ITI-41\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-41.html) transaction). The Document Recipient shall create appropriate metadata from Resources in the FHIR DocumentReference Resource, including SubmissionSet, and DocumentEntry. 

Where values provided are References to FHIR resources (e.g., DocumentReference.encounter), the Reference should be converted to a [Document Sharing `CXi` Identifier Datatype](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.1.7) for recording in the Document Sharing ebRIM using the Identifier Type Codes when appropriate (see [Appendix Z.9.1.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.9.1.2-xds-cxi-mapped-to-fhir-identifier-type) ). The conversion may be by using the referenced Resource business .identifier. Note, there is not an obvious conversion of a reference .id to `CXi` identifier. Note that DocumentReference.encounter would be mapped into DocumentEntry.referenceIdList as an Identifier Type Code of `urn:ihe:iti:xds:2015:encounterId`.

If the Provide Document Bundle Message contains a DocumentReference with a relatesTo element, the code shall be translated using the [AssociationType vs RelatesTo ConceptMap](ConceptMap-AssociationTypeVsRelatesTo.html).

Some FHIR elements do not translate to XDS concepts; the handling of these elements is left to the implementer of the Document Recipient. 

Upon successful conversion of the FHIR DocumentReference to XDS Document Sharing metadata, the grouped source actor shall execute the appropriate transaction. The transaction result, and any error or warning messages, shall be reported to the MHD Document Source. The Document Recipient is responsible for translating the response to the appropriate HTTP Status Code and FHIR OperationOutcome Resource in the Simplified Publish Response Message.

#### 2:3.105.4.2 Simplified Publish Response Message

The Document Recipient returns a HTTP Status code appropriate to the processing outcome, conforming to the create transaction specification requirements as specified in [http://hl7.org/fhir/R4/http.html#create](http://hl7.org/fhir/R4/http.html#create). 

##### 2:3.105.4.2.1 Trigger Events

This message shall be sent when a success or error condition needs to be communicated. Success is only indicated once the document is received and completely processed and persisted as appropriate to the Document Recipient Actor configuration. 

##### 2:3.105.4.2.2 Message Semantics

To enable the Document Source to know the outcome of processing the transaction, and the identities assigned to the resources by the Document Recipient, the Document Recipient shall return the DocumentReference as created. The Document Recipient shall comply with FHIR [http://hl7.org/fhir/R4/http.html#ops](http://hl7.org/fhir/R4/http.html#ops). 

##### 2:3.105.4.2.3 Expected Actions

The Document Source processes the results according to application-defined rules.	

#### 2:3.105.4.3 CapabilityStatement Resource

Document Recipient shall provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
* Requirements CapabilityStatement for [Document Recipient Simplified Publish Option](CapabilityStatement-IHE.MHD.DocumentRecipient.Simplified.html). This indicates that the Simplified Publish Option is declared. 

Document Source should provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
* Requirements CapabilityStatement for [Document Source Simplified Publish Metadata Option](CapabilityStatement-IHE.MHD.DocumentSource.Simplified.html). This indicates that the Simplified Publish Option is declared. 

### 2:3.105.5 Security Considerations

See [MHD Security Considerations](1335_security_considerations.html).

#### 2:3.105.5.1 Security Audit Considerations

The security audit criteria are similar to those for the Provide and Register Document Set-b [\[ITI-41\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-41.html) transaction as this transaction does export a document.

##### 2:3.105.5.1.1 Document Source Audit 

The Document Source when grouped with ATNA Secure Node or Secure Application Actor shall be able to record a [Simplified Publish Audit Event Log](StructureDefinition-IHE.MHD.SimplifiedPublish.Audit.Source.html). [Audit Example for a Simplified Publish Bundle Transaction from source perspective](AuditEvent-ex-auditSimplifiedPublish-source.html). 

##### 2:3.105.5.1.2 Document Recipient Audit 

The Document Recipient when grouped with ATNA Secure Node or Secure Application Actor shall be able to record a [Simplified Publish Audit Event Log](StructureDefinition-IHE.MHD.SimplifiedPublish.Audit.Recipient.html). [Audit Example for a Simplified Publish Bundle Transaction from recipient perspective](AuditEvent-ex-auditSimplifiedPublish-recipient.html). 


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/ITI-106.md

This section corresponds to transaction [ITI-106] of the IHE Technical Framework. Transaction [ITI-106] is used by the Document Source and Document Recipient Actors. The Generate Metadata [ITI-106] transaction is used to transmit a structured and coded document (i.e., CDA or FHIR-Document) and have the Document Recipient create associated metadata.

### 2:3.106.1 Scope

The Generate Metadata [ITI-106] transaction passes a Generate Metadata Request from a Document Source to a Document Recipient.

### 2:3.106.2 Actors Roles

**Table 2:3.106.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Document Source](1331_actors_and_transactions.html#133111-document-source)    | Sends document to the Document Recipient |
| [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient) | Accepts the document and creates metadata |
{: .grid}

### 2:3.106.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

### 2:3.106.4 Messages

<div>
{%include ITI-106-seq.svg%}
</div>

<br clear="all">

**Figure 2:3.106.4-1: Generate Metadata Interactions**

#### 2:3.106.4.1 Generate Metadata Request Message
This message uses the FHIR [Operation](http://hl7.org/fhir/R4/operations.html) method on the target Generate Metadata endpoint to convey the document.

##### 2:3.106.4.1.1 Trigger Events

This method is invoked when the Document Source needs to submit one structured and coded document to a Document Recipient. 

##### 2:3.106.4.1.2 Message Semantics

The Document Source shall initiate an http `POST` operation request as defined in FHIR [Operations](http://hl7.org/fhir/R4/operations.html)  using the [Generate Metadata Operation Definition](OperationDefinition-generate-metadata.html) on the `DocumentReference` endpoint. 

    POST http://fhir.someserver.org/fhir/DocumentReference/$generate-metadata

The Document Source provides the document. It can be provided in either a Binary or a Bundle form.
- Binary resource, used with a CDA document, might be used with a FHIR-Document
- Bundle resource, must be a Document kind Bundle. aka, [FHIR-Document](http://hl7.org/fhir/R4/documents.html)

##### 2:3.106.4.1.3 Expected Actions

The Document Recipient shall accept both media types `application/fhir+json` and `application/fhir+xml`.

On receipt of the Generate Metadata Request Message, the Document Recipient shall read the existing document and confirm that the document is sufficiently structured and coded for processing. 
The Document Recipient may impose specific constraints on the input document, such as conforming to [International Patient Summary (IPS)](https://confluence.hl7.org/display/PC/International+Patient+Summary) or [Consolidated Clinical Document Architecture (C-CDA) 2.1](https://www.hl7.org/ccdasearch/). These constraints may be further refined within the Community.
The Document Recipient shall persist the document, the Bundle will be persisted using the original mime-type from the operation.
The Document Recipient shall persist the document in a format consistent with the media type in DocumentReference.attachment.contentType. It may make the document available in other formats, for example, making a FHIR Document Bundle submitted in XML format available in JSON format, but it is not required to.
The Document Recipient shall generate a valid DocumentReference resource given the document content. 
The DocumentReference that is generated may be an existing DocumentReference or may be a new one as necessary. The DocumentReference.content.attachment.url shall point at the persisted document.

Note that persist methodology will depend on the actors and functionality grouped with the Document Recipient. For example when grouped with a XDS Document Source, the persistence is achieved using XDS; when grouped with MHDS, the persistence is achieved at the MHDS Document Registry. The Document Recipient may need to produce a SubmissionSet derived off of the DocumentReference, such as when persistence is via XDS, XDR, or MHDS where a SubmissionSet is required to track the provenance of the publication request.

The Document Recipient shall extract the document, generate the DocumentReference metadata, and translate the DocumentReference metadata elements into a SubmissionSet following the [PCC TF-2: 4.1 Medical Document Binding to Document Sharing Metadata](https://profiles.ihe.net/ITI/sIPS/pcc.html#41-medical-document-binding-to-document-sharing-metadata), and may have further metadata translation requirements specified by the local Document Sharing Community policy.

The Document Recipient shall generate Document Sharing metadata requirements as specified for attributes [ITI TF-3: Table 4.3.1-3: “Sending Actor Metadata Attribute Optionality”](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3.1). 
- The Document Recipient that supports the [Comprehensive Metadata](1332_actor_options.html#13322-xds-on-fhir-option) or the [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option shall generate metadata consistent with column “XDS DS”; 

###### 2:3.106.4.1.3.1 Grouping with Actors in other Document Sharing Profiles

This section applies to grouping MHD Document Recipient with [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) [Document Source](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.1.1.1) Actor, [XDR](https://profiles.ihe.net/ITI/TF/Volume1/ch-15.html) Document Source Actor, [XDR](https://profiles.ihe.net/ITI/TF/Volume1/ch-15.html) Limited-Metadata Document Source Actor, and [XDM](https://profiles.ihe.net/ITI/TF/Volume1/ch-16.html) Portable Media Creator Actor (e.g., with the [XDM ZIP over Email Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-16.html#16.2.3)). 

The Document Recipient shall transform the DocumentReference content into a proper message for the given grouped actor (e.g., the XDS Document Source using the Provide and Register Document Set-b [[ITI-41]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-41.html) transaction). The Document Recipient shall create appropriate metadata from Resources in the FHIR DocumentReference Resource, including SubmissionSet, and DocumentEntry. 

Where values provided are References to FHIR resources (e.g., DocumentReference.encounter), the Reference should be converted to a [Document Sharing `CXi` Identifier Datatype](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.1.7) for recording in the Document Sharing ebRIM using the Identifier Type Codes when appropriate (see [Appendix Z.9.1.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.9.1.2-xds-cxi-mapped-to-fhir-identifier-type) ). The conversion may be by using the referenced Resource business .identifier. Note, there is not an obvious conversion of a reference .id to `CXi` identifier. Note that DocumentReference.encounter would be mapped into DocumentEntry.referenceIdList as an Identifier Type Code of `urn:ihe:iti:xds:2015:encounterId`.

Some FHIR elements do not translate to XDS concepts; the handling of these elements is left to the implementer of the Document Recipient. 

Upon successful conversion of the FHIR DocumentReference to XDS Document Sharing metadata, the grouped source actor shall execute the appropriate transaction. The transaction result, and any error or warning messages, shall be reported to the MHD Document Source. The Document Recipient is responsible for translating the response to the appropriate HTTP Status Code and FHIR OperationOutcome Resource in the Generate Metadata Response Message.

#### 2:3.106.4.2 Generate Metadata Response Message

The Document Recipient responds with success or failure

##### 2:3.106.4.2.1 Trigger Events

This message shall be sent when a success or error condition needs to be communicated. Success is only indicated once the document is received and completely processed and persisted as appropriate to the Document Recipient Actor configuration. 

##### 2:3.106.4.2.2 Message Semantics

The Document Recipient upon success returns a Parameter resource with a reference to the DocumentReference.

The Document Recipient returns an OperationOutcome upon failure.

##### 2:3.106.4.2.3 Expected Actions

The Document Source processes the results according to application-defined rules.	

#### 2:3.106.4.3 CapabilityStatement Resource

Document Recipient shall provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
* Requirements CapabilityStatement for [Document Recipient Generate Metadata Option](CapabilityStatement-IHE.MHD.DocumentRecipient.Generate.html). This indicates that the Generate Metadata Option is declared. 

Document Source should provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
* Requirements CapabilityStatement for [Document Source Generate Metadata Metadata Option](CapabilityStatement-IHE.MHD.DocumentSource.Generate.html). This indicates that the Generate Metadata Option is declared. 

### 2:3.106.5 Security Considerations

See [MHD Security Considerations](1335_security_considerations.html).

#### 2:3.106.5.1 Security Audit Considerations

The security audit criteria are similar to those for the Provide and Register Document Set-b [ITI-41](https://profiles.ihe.net/ITI/TF/Volume2/ITI-41.html) transaction as this transaction does export a document.

##### 2:3.106.5.1.1 Document Source Audit 

The Document Source when grouped with ATNA Secure Node or Secure Application Actor shall be able to record a [Generate Metadata Audit Event Log](StructureDefinition-IHE.MHD.GenerateMetadata.Audit.Source.html). [Audit Example for a Generate Metadata Transaction from source perspective](AuditEvent-ex-auditGenerateMetadata-source.html). 

##### 2:3.106.5.1.2 Document Recipient Audit 

The Document Recipient when grouped with ATNA Secure Node or Secure Application Actor shall be able to record a [Generate Metadata Audit Event Log](StructureDefinition-IHE.MHD.GenerateMetadata.Audit.Recipient.html). [Audit Example for a Generate Metadata Bundle Transaction from recipient perspective](AuditEvent-ex-auditGenerateMetadata-recipient.html). 


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/ITI-65.md

This section corresponds to transaction [ITI-65] of the IHE Technical Framework. Transaction [ITI-65] is used by the Document Source and Document Recipient Actors. The Provide Document Bundle [ITI-65] transaction is used to transmit a set of documents and associated metadata.

### 2:3.65.1 Scope

The Provide Document Bundle [ITI-65] transaction passes a Provide Document Bundle Request from a Document Source to a Document Recipient.

### 2:3.65.2 Actors Roles

**Table 2:3.65.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Document Source](1331_actors_and_transactions.html#133111-document-source)    | Sends documents and metadata to the Document Recipient |
| [Document Recipient](1331_actors_and_transactions.html#133113-document-recipient) | Accepts the document and metadata sent from the Document Source |
{: .grid}

### 2:3.65.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

### 2:3.65.4 Messages

<div>
{%include ITI-65-seq.svg%}
</div>

<br clear="all">

**Figure 2:3.65.4-1: Provide Document Bundle Interactions**

#### 2:3.65.4.1 Provide Document Bundle Request Message
This message uses the HTTP POST method on the target Provide Document Bundle endpoint to convey the metadata and the document(s) as a FHIR transaction.

##### 2:3.65.4.1.1 Trigger Events

This method is invoked when the Document Source needs to submit one or more documents to a Document Recipient. 

##### 2:3.65.4.1.2 Message Semantics

The Document Source shall initiate a FHIR “transaction” using a “create” action by sending an HTTP POST request method composed of a FHIR Bundle Resource containing: one SubmissionSet type List Resource; one or more DocumentReference Resources; zero or more Folder type List Resources; and zero or more Binary Resources to the Document Recipient. When implementing the **ITI-65 FHIR Document Publish** Option a FHIR Document Bundle may be used in place of the Binary Resource. Refer to [ITI TF-3: 4.5.1](32_fhir_maps.html) for details on the FHIR Resources and how Document Sharing metadata attributes are mapped. 

The media type of the HTTP body shall be either `application/fhir+json` or `application/fhir+xml`.

See [http://hl7.org/fhir/R4/http.html#transaction](http://hl7.org/fhir/R4/http.html#transaction) for complete requirements of a transaction. See [http://hl7.org/fhir/R4/bundle-transaction.html](http://hl7.org/fhir/R4/bundle-transaction.html) for example of a transaction bundle.

The Provide Document Bundle message is sent to the base URL as defined in FHIR. See [http://hl7.org/fhir/R4/http.html](http://hl7.org/fhir/R4/http.html) for the definition of “HTTP” access methods and “base”.

The Document Source shall assure all FHIR resource elements are consistent with the [Document Sharing metadata](https://profiles.ihe.net/ITI/TF/Volume3/index.html#4) requirements as specified for attributes [ITI TF-3: Table 4.3.1-3 “Sending Actor Metadata Attribute Optionality”](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3.1). The Document Source that supports the [Comprehensive Metadata](1332_actor_options.html#13322-xds-on-fhir-option) or the [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Options shall assure consistency with column “XDS DS”; otherwise, the Document Source shall assure consistency with column “XDR MS”. Except that the Document Source does not need to provide any entryUUID values, as the entryUUID will be populated by the Document Recipient when necessary. 

###### 2:3.65.4.1.2.1 Bundle Resources

For complete information on constructing a FHIR Bundle Resource, see [http://hl7.org/fhir/R4/bundle.html](http://hl7.org/fhir/R4/bundle.html).

The FHIR Bundle.meta.profile shall have the following value depending on the actor implementation of no options (Minimal Metadata), Comprehensive Metadata Option, or UnContained References Option: 
- [Minimal Metadata](StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html): `https://profiles.ihe.net/ITI/MHD/StructureDefinition/IHE.MHD.Minimal.ProvideBundle`
  - shall be a Transaction Bundle
  - all resources shall be compliant with minimal constraints, they may be marked minimal, comprehensive, or unContained
  - shall create a [SubmissionSet type List](StructureDefinition-IHE.MHD.Minimal.SubmissionSet.html) that is either minimal, comprehensive, or unContained
  - may create one or more [DocumentReference](StructureDefinition-IHE.MHD.Minimal.DocumentReference.html) that is either minimal, comprehensive, or unContained
    - with a document as a [Binary](http://hl7.org/fhir/R4/binary.html)
    - or, when implementing the **ITI-65 FHIR Document Publish** option, a [FHIR Document Bundle](http://hl7.org/fhir/R4/bundle.html)
  - when DocumentReference replace is used the UpdateDocumentRefs slice is used to indicate the superseded DocumentReference
  - may create/update one or more [Folder type List](StructureDefinition-IHE.MHD.Minimal.Folder.html) that is either minimal, comprehensive, or unContained
  - may create/update/read one [Patient](http://hl7.org/fhir/R4/patient.html)
- [Comprehensive Metadata](StructureDefinition-IHE.MHD.Comprehensive.ProvideBundle.html): `https://profiles.ihe.net/ITI/MHD/StructureDefinition/IHE.MHD.Comprehensive.ProvideBundle`
  - this is otherwise known as XDS-on-FHIR
  - shall be a Transaction Bundle
  - all resources shall be compliant with comprehensive constraints, they may be marked comprehensive
  - shall create a [SubmissionSet type List](StructureDefinition-IHE.MHD.Comprehensive.SubmissionSet.html) that is comprehensive
  - may create one or more [DocumentReference](StructureDefinition-IHE.MHD.Comprehensive.DocumentReference.html) that is comprehensive
    - with a document as a [Binary](http://hl7.org/fhir/R4/binary.html)
    - or, when implementing the **ITI-65 FHIR Document Publish** Option, a [FHIR Document Bundle](http://hl7.org/fhir/R4/bundle.html)
  - when DocumentReference replace is used the UpdateDocumentRefs slice is used to indicate the superseded DocumentReference
  - may create/update one or more [Folder type List](StructureDefinition-IHE.MHD.Comprehensive.Folder.html) that is comprehensive
  - may create/update/read one [Patient](http://hl7.org/fhir/R4/patient.html)
- [UnContained Comprehensive Metadata](StructureDefinition-IHE.MHD.UnContained.Comprehensive.ProvideBundle.html): `https://profiles.ihe.net/ITI/MHD/StructureDefinition/IHE.MHD.UnContained.Comprehensive.ProvideBundle` 
  - note that Minimal Metadata does not require containment, so UnContained Minimal is the same as Minimal Metadata
  - note that UnContained only applies to DocumentReference and SubmissionSet type Lists; so the following apply
  - shall be a Transaction Bundle
  - all resources shall be compliant with comprehensive unContained constraints, they may be marked comprehensive unContained
  - shall create a [SubmissionSet type List](StructureDefinition-IHE.MHD.UnContained.Comprehensive.SubmissionSet.html) that is comprehensive or unContained
  - may create one or more [DocumentReference](StructureDefinition-IHE.MHD.UnContained.Comprehensive.DocumentReference.html) that is comprehensive or unContained
    - with a document as a [Binary](http://hl7.org/fhir/R4/binary.html)
    - or, when implementing the **ITI-65 FHIR Document Publish** Option, a [FHIR Document Bundle](http://hl7.org/fhir/R4/bundle.html)
  - when DocumentReference replace is used the UpdateDocumentRefs slice is used to indicate the superseded DocumentReference
  - may create/update one or more [Folder type List](StructureDefinition-IHE.MHD.Comprehensive.Folder.html) that is comprehensive
  - may create/update/read one [Patient](http://hl7.org/fhir/R4/patient.html)

When resources are `contained` , see [ITI TF-3: 4.5.1](32_fhir_maps.html), they shall be contained using the FHIR contained method (see [http://hl7.org/fhir/R4/references.html#contained](http://hl7.org/fhir/R4/references.html#contained) ).

When the DocumentReference.content.attachment.url points at a Binary Resource, the Binary Resource shall be in the Bundle. When the DocumentReference.content.attachment.url points at a FHIR Document Bundle Resource, the FHIR Document Bundle Resource shall be in the Bundle. See FHIR Resolving references in Bundles at [http://hl7.org/fhir/R4/bundle.html#references](http://hl7.org/fhir/R4/bundle.html#references). 

The Document Source shall populate accurate .hash and .size for the document content: 
- Where the document content is a Binary Resource instance, the .hash and .size measure the raw artifact that has been base64encoded in the Binary.data element. 
- Where the document content is a FHIR Document Bundle Resource instance, the .hash and size shall be absent from the DocumentReference Resource. 
- Where the document content is hosted elsewhere, the .hash and the .size shall represent the document content that would be retrieved using the mime-type specified in contentType element. 
- Where the document content is [On-Demand Document Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.7), the .hash and the .size shall be absent from the DocumentReference Resource. See On-Demand Document [Use Cases Summary](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.4.11.3). 
- Where the document content is [Delayed Document Assembly](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.10), the .size of `0` (zero), and the .hash with the fixed value `da39a3ee5e6b4b0d3255bfef95601890afd80709` (SHA1 hash of a zero length file).

Folders may be created or updated. A Document Recipient may require that an Updated Folder only have new .entry elements added as would be the requirement of XDS.

All DocumentReference.subject and List.subject values shall be populated with the identity of the Patient.

###### 2:3.65.4.1.2.2 Patient Identity

All DocumentReference.subject, and List.subject values shall be a Reference to a FHIR Patient Resource. The Patient Reference will be either to a Patient Resource that is in the Bundle, or to a Patient Resource hosted on a commonly accessible server. Recommendation is to use a commonly accessible Patient Resource reference, but some situations may need to include the Patient resource within the Bundle, or may allow use of a common Patient Identifier. 
- A Patient Reference to a commonly accessible server may be obtained through use of [PDQm](https://profiles.ihe.net/ITI/TF/Volume1/ch-38.html), [PIXm](https://profiles.ihe.net/ITI/TF/Volume1/ch-41.html), [PMIR](https://profiles.ihe.net/ITI/TF/Volume1/ch-49.html), or by some other means. 
- A Patient Resource carried within the Bundle would typically only be allowed by the Document Recipient in PUSH interaction situations where the Document Recipient will do matching to a Patient identity. 
- The inclusion of a copy of a commonly accessible Patient Resource in the bundle is discouraged but not forbidden.
- A commonly accessible logical reference using Patient Identifier, instead of a literal reference, may be acceptable where there is a common Identifier, such as a national individual identifier.

If the Patient Resource is accessible to both the Document Source and Document Recipient via an external reference to a commonly accessible server then that external reference shall be used and the Patient Resource will not be included in the Bundle. Otherwise, the Patient Resource shall be included in the Bundle.

When the [UnContained Reference Option](1332_actor_options.html#13323-uncontained-reference-option) is used, there is no need to populate the sourcePatientInfo element. Otherwise, when sourcePatientInfo is provided, the DocumentReference.context.sourcePatientInfo shall be a reference to a “contained” Patient Resource. That is, the source patient info is encoded in a Patient Resource within the DocumentReference.contained element (see [http://hl7.org/fhir/R4/references.html#contained](http://hl7.org/fhir/R4/references.html#contained) ).

###### 2:3.65.4.1.2.3 Replace, Transform, Signs, and Append Associations

The DocumentReference.relatesTo element indicates an association between DocumentReference resources. The relatesTo.target element in the provided DocumentReference points at the pre-existing DocumentReference that is being replaced, transformed, signed, or appended. The relatesTo.code element in the provided DocumentReference shall be the appropriate relationship type code defined in [http://hl7.org/fhir/R4/valueset-document-relationship-type.html](http://hl7.org/fhir/R4/valueset-document-relationship-type.html). 

If a DocumentReference is being replaced, that DocumentReference needs to have the `status` element updated to `superseded` within the transaction bundle with the [UpdateDocumentsRef slice](StructureDefinition-IHE.MHD.Minimal.ProvideBundle.html) (see [Example Bundle: Provide Document Bundle with Comprehensive metadata of one document which replaces another document](Bundle-ex-comprehensiveProvideDocumentBundleReplace.html) entry 2).

##### 2:3.65.4.1.3 Expected Actions

The Document Recipient shall accept both media types `application/fhir+json` and `application/fhir+xml`.

On receipt of the submission, the Document Recipient shall validate the resources and respond with one of the HTTP codes defined in the response [Message Semantics](#2365412-message-semantics). 

The Document Recipient shall process the bundle atomically, analogous to both the Provide and Register Document Set-b [ITI-41] transaction and FHIR “transaction” as specified in [http://hl7.org/fhir/R4/http.html#transaction](http://hl7.org/fhir/R4/http.html#transaction). 

The Document Recipient shall validate the bundle first against the FHIR specification. Guidance on what FHIR considers a valid Resource can be found at [http://hl7.org/fhir/R4/validation.html](http://hl7.org/fhir/R4/validation.html). 

The Document Recipient should verify the FHIR resource elements for consistency with the Document Sharing metadata requirements as specified for attributes [ITI TF-3: Table 4.3.1-3: “Sending Actor Metadata Attribute Optionality”](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.3.html#4.3.1). 
- The Document Recipient that supports the [Comprehensive Metadata](1332_actor_options.html#13322-xds-on-fhir-option) or the [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option should validate against column “XDS DS”; 
- Otherwise the Document Recipient should validate against column “XDR MS”.  

A Document Recipient is allowed to be robust for non-compliant resources that violate the Document Sharing metadata requirements. 

If necessary for processing, the Document Recipient shall retrieve Resources referenced by absolute URLs in the FHIR Bundle Resource.

If the Document Recipient encounters any errors or if any validation fails, the Document Recipient shall return an error, as documented in [Provide Document Bundle Response Message](#236542-provide-document-bundle-response-message). If appropriate, it shall use error codes from [ITI TF-3: Table 4.2.4.1-2](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.4.1).

If the Provide Document Bundle Message contains a DocumentReference Resource with a relatesTo element and the Document Recipient does not support the relatesTo.code value given, it shall return a warning message, as indicated in *Table 2:3.65.4.1.3-1: Warning message when relatesTo code is not supported*.

**Table 2:3.65.4.1.3-1: Warning message when relatesTo code is not supported**

|relatesTo.code |	Warning |
|---------------|-----------|
|replaces	 | PartialReplaceContentNotProcessed |
|transforms	 | PartialTransformContentNotProcessed |
|appends	 | PartialAppendContentNotProcessed |
{: .grid}

If the Provide Document Bundle Message contains a Folder type List Resource and the Document Recipient does not support the Folder type List Resource (aka, Folders), the Document Recipient shall either fail the whole transaction or may ignore the Folder type List, continuing processing of the transaction, and return a “PartialFolderContentNotProcessed” warning. 

If the SubmissionSet `intendedRecipient` is populated, the Document Recipient SHALL make reasonable efforts to determine whether each recipient can be notified, but MAY return success before confirming full receipt and processing by the intendedRecipients. A Document Recipient MAY delegate notification of some or all intendedRecipients, for example, by grouping with an XCDR Initiating Gateway that pushes to XCDR Responding Gateways. If notification of an intendedRecipient is not possible, the Document Recipient MAY do any of the following (the Error/Warning codes are defined in section [3:4.2.4.1](31_xds.html#34241-registryerror-element)):
- Fail the transaction and return the code `UnknownRecipient` or `UnavailableRecipient` as an error
- Succeed and return the code `UnknownRecipient` or `UnavailableRecipient` as a warning
- Succeed silently

If the recipient is known to be an XDR/XCDR community, the error codes `XDSUnknownCommunity` or `XDSUnavailableCommunity` may be used instead.

If the recipient is not implementing **ITI-65 FHIR Document Publish** Option and there is a FHIR Document Bundle within the ITI-65 transaction Bundle; then Fail the transaction and return the code `FHIRDocumentNotSupported` as an error. Document Source Actors may receive a FHIR validation error from Document Recipients that are unaware of the ITI-65 FHIR Document Publish Option.

###### 2:3.65.4.1.3.1 Grouping with Actors in other Document Sharing Profiles

This section applies to grouping the MHD Document Recipient Actor with [XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) [Document Source](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.1.1.1) Actor, [XDR](https://profiles.ihe.net/ITI/TF/Volume1/ch-15.html) Document Source Actor, [XDR](https://profiles.ihe.net/ITI/TF/Volume1/ch-15.html) Limited-Metadata Document Source Actor, and [XDM](https://profiles.ihe.net/ITI/TF/Volume1/ch-16.html) Portable Media Creator Actor (e.g., with the [XDM ZIP over Email Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-16.html#16.2.3) ). 

The Document Recipient shall transform the Bundle content into a proper message for the given grouped actor (e.g., the XDS Document Source using the Provide and Register Document Set-b [\[ITI-41\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-41.html) transaction). The Document Recipient shall create appropriate metadata from Resources in the FHIR Bundle Resource, including SubmissionSet, DocumentEntry, Folder, and Associations. 

Where values provided are References to FHIR resources (e.g., DocumentReference.encounter), the Reference should be converted to a [Document Sharing `CXi` Identifier Datatype](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.1.7) for recording in the Document Sharing ebRIM using the Identifier Type Codes when appropriate (See [Appendix Z.9.1.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.9.1.2-xds-cxi-mapped-to-fhir-identifier-type) ). The conversion may be by using the referenced Resource business .identifier. Note, there is not an obvious conversion of a reference .id to `CXi` identifier. Note that DocumentReference.encounter would be mapped into DocumentEntry.referenceIdList as an Identifier Type Code of `urn:ihe:iti:xds:2015:encounterId`.

If the Provide Document Bundle Message contains a DocumentReference with a relatesTo element, the code shall be translated using the [AssociationType vs RelatesTo ConceptMap](ConceptMap-AssociationTypeVsRelatesTo.html).

The Document Recipient shall map Folder type List Resources in the Bundle Resource to XDS Folders, as specified in [ITI TF-3: 4.5.1.1](32_fhir_maps.html#folder). The Document Registry may apply further constraints on Folder content and revision, for example removal of entries from Folders is not generally allowed.

Some FHIR elements do not translate to XDS concepts; the handling of these elements is left to the implementer of the Document Recipient. 

When implementing the **ITI-65 FHIR Document Publish** Option, when a `DocumentReference.content.attachment.url` points at a FHIR Document Bundle within the ITI-65 Bundle; then the FHIR Document Bundle needs to be serialized into a binary format for propagation to the grouped Document Source Actor. This serialization shall be using the mime-type given in the [ITI-65] transaction (i.e., json, xml), see [FHIR Serialization Formats Representations](http://hl7.org/fhir/R4/formats.html#wire). The MHD Document Recipient Actor is allowed to also serialize the document into the alternative mime-type format, when this is done the MHD Document Recipient also creates an additional DocumentEntry that replicates the original DocumentReference elements as described above with a association relationship to the first DocumentEntry of `transforms`; calculate the hash and size and populate them appropriately; and the mime-type indicating the alternative mime-type.

Upon successful conversion of the FHIR Bundle to XDS Document Sharing metadata, the grouped source actor shall execute the appropriate transaction. The transaction result, and any error or warning messages, shall be reported to the MHD Document Source. The Document Recipient is responsible for translating the response to the appropriate HTTP Status Code and FHIR OperationOutcome Resource in the Provide Document Bundle Response Message.

###### 2:3.65.4.1.3.2 Grouping with MHDS Implementation Guide (Profile)

This section applies to grouping the MHD Document Recipient Actor with [MHDS](https://profiles.ihe.net/ITI/MHDS) [Document Registry](https://profiles.ihe.net/ITI/MHDS/volume-1.html#150111-document-registry) Actor. As MHDS uses the same FHIR syntax, there is no changing of the ITI-65 bundle necessary.

When implementing the **ITI-65 FHIR Document Publish** Option; when a `DocumentReference.content.attachment.url` points at a FHIR Document Bundle within the ITI-65 Bundle; then 
1. The MHD Document Recipient Actor should serialize the FHIR Document Bundle into a Binary format for propagation to the grouped Document Registry Actor for persistence. This serialization shall be using the mime-type given in the [ITI-65] transaction (i.e., json, xml), see [FHIR Serialization Formats Representations](http://hl7.org/fhir/R4/formats.html#wire), and place the serialized results into a new Binary resource. The MHD Document Recipient Actor shall add a DocumentReference and the Binary to the ITI-65 Bundle. The added DocumentReference is populated with the original DocumentReference element values; with a `.relatesTo` relationship to the first DocumentReference of `transforms`; associate the serialized content with this new Binary resource; calculate the hash and size and populate them appropriately; and set the mime-type appropriately. 
2. The MHD Document Recipient Actor is allowed to also serialize the document into the alternative mime-type format, when this is done the MHD Document Recipient also creates an additional DocumentReference that replicates the original DocumentReference elements; with a `.relatesTo` relationship to the first DocumentReference of `transforms`; associate the serialized content with this new Binary resource; calculate the hash and size and populate them appropriately; and set the mime-type indicating the alternative mime-type.

These additional DocumentReference and Binary enable the Document Consumer to choose the best mime-type for that Document Consumer Actor needs.

#### 2:3.65.4.2 Provide Document Bundle Response Message

The Document Recipient returns a HTTP Status code appropriate to the processing outcome, conforming to the transaction specification requirements as specified in [http://hl7.org/fhir/R4/http.html#transaction](http://hl7.org/fhir/R4/http.html#transaction). 

##### 2:3.65.4.2.1 Trigger Events

This message shall be sent when a success or error condition needs to be communicated. Success is only indicated once the document(s) is/are received and completely processed and persisted as appropriate to the Document Recipient Actor configuration. 

##### 2:3.65.4.2.2 Message Semantics

To enable the Document Source to know the outcome of processing the transaction, and the identities assigned to the resources by the Document Recipient, the Document Recipient shall return a Bundle, with `type` set to `transaction-response`, that contains one entry for each entry in the request, in the same order as received. The Bundle.entry.response.outcome may indicate warning results of processing the entry,  such as PartialFolderContentNotProcessed. The Document Recipient shall comply with FHIR [http://hl7.org/fhir/R4/bundle.html#transaction-response](http://hl7.org/fhir/R4/bundle.html#transaction-response) and [http://hl7.org/fhir/R4/http.html#transaction-response](http://hl7.org/fhir/R4/http.html#transaction-response). 

To indicate success the overall http `200` response is used. The Bundle.entry.response.status shall be `201` to indicate the Resource has been created, the .location element shall be populated, and the .etag element may be populated when the Document Recipient supports FHIR resource versioning.

An informative StructureDefinition is outlined for [MHD Provide Bundle Document Response Message](StructureDefinition-IHE.MHD.ProvideDocumentBundleResponse.html), with an [example](StructureDefinition-IHE.MHD.ProvideDocumentBundleResponse-examples.html).

##### 2:3.65.4.2.3 Expected Actions

The Document Source processes the results according to application-defined rules.	

#### 2:3.65.4.3 CapabilityStatement Resource

Document Recipient shall provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
- General Requirements CapabilityStatement for [Document Recipient](CapabilityStatement-IHE.MHD.DocumentRecipient.html). This indicates that either no options are declared or that all options are declared.
- Requirements CapabilityStatement for [Document Recipient Comprehensive Metadata Option](CapabilityStatement-IHE.MHD.DocumentRecipient.Comprehensive.html). This indicates that the Comprehensive Metadata Option is declared. Note that XDS-on-FHIR Option requires Comprehensive and thus this Requirements CapabilityStatement applies to XDS-on-FHIR also.
- Requirements CapabilityStatement for [Document Recipient UnContained References Option](CapabilityStatement-IHE.MHD.DocumentRecipient.UnContained.html). This indicates that the UnContained Option is declared.

Document Source should provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
- General Requirements CapabilityStatement for [Document Source](CapabilityStatement-IHE.MHD.DocumentSource.html). This indicates that either no options are declared or that all options are declared.
- Requirements CapabilityStatement for [Document Source Comprehensive Metadata Option](CapabilityStatement-IHE.MHD.DocumentSource.Comprehensive.html). This indicates that the Comprehensive Metadata Option is declared. Note that XDS-on-FHIR Option requires Comprehensive and thus this Requirements CapabilityStatement applies to XDS-on-FHIR also.
- Requirements CapabilityStatement for [Document Source UnContained References Option](CapabilityStatement-IHE.MHD.DocumentSource.UnContained.html). This indicates that the UnContained Option is declared.


### 2:3.65.5 Security Considerations

See [MHD Security Considerations](1335_security_considerations.html).

#### 2:3.65.5.1 Security Audit Considerations

The security audit criteria are similar to those for the Provide and Register Document Set-b [\[ITI-41\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-41.html) transaction as this transaction does export a document.

##### 2:3.65.5.1.1 Document Source Audit 

The Document Source, when grouped with ATNA Secure Node or Secure Application Actor, shall be able to record a [Provide Audit Bundle Source Audit Event Log](StructureDefinition-IHE.MHD.ProvideBundle.Audit.Source.html). [Audit Example for a Provide Bundle Transaction from source perspective](AuditEvent-ex-auditProvideBundle-source.html). 

##### 2:3.65.5.1.2 Document Recipient Audit 

The Document Recipient, when grouped with ATNA Secure Node or Secure Application Actor, shall be able to record a [Provide Audit Bundle Recipient Audit Event Log](StructureDefinition-IHE.MHD.ProvideBundle.Audit.Recipient.html). [Audit Example for a Provide Bundle Transaction from recipient perspective](AuditEvent-ex-auditProvideBundle-recipient.html). 


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/ITI-66.md

This section corresponds to transaction [ITI-66] of the IHE Technical Framework. Transaction [ITI-66] is used by the Document Consumer and Document Responder Actors. This transaction is used to locate and return metadata for previously stored document submission sets or folders.

### 2:3.66.1 Scope

The Find Document Lists [ITI-66] transaction is used to find List Resources that satisfy a set of parameters. It is equivalent to the: 

* FindSubmissionSets query in the Registry Stored Query [\[ITI-18\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-18.html) transaction, as documented in [ITI TF-2: 3.18.4.1.2.3.7.2](https://profiles.ihe.net/ITI/TF/Volume2/ITI-18.html#3.18.4.1.2.3.7.2). 
* FindFolders query in the Registry Stored Query [\[ITI-18\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-18.html) transaction, as documented in [ITI TF-2: 3.18.4.1.2.3.7.3](https://profiles.ihe.net/ITI/TF/Volume2/ITI-18.html#3.18.4.1.2.3.7.3). 

The result of the query is a Bundle containing List Resources that match the query parameters.

### 2:3.66.2 Actors Roles

**Table 3.66.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Document Consumer](1331_actors_and_transactions.html#133112-document-consumer)     | Requests List Resources, matching the supplied set of criteria, from the Document Responder |
| [Document Responder](1331_actors_and_transactions.html#133114-document-responder) | Returns List Resources that match the search criteria provided by the Document Consumer |
{: .grid}

### 2:3.66.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

### 2:3.66.4 Messages

<div>
{%include ITI-66-seq.svg%}
</div>

<br clear="all">

**Figure 2:3.66.4-1: Find Document Lists Interactions**

#### 2:3.66.4.1 Find Document Lists Request Message

This message uses the search method parameterized query to obtain List Resources from the Document Responder. 

##### 2:3.66.4.1.1 Trigger Events

When the Document Consumer needs to discover List Resources matching various metadata parameters it issues a Find Document Lists message. 

##### 2:3.66.4.1.2 Message Semantics

The Document Consumer executes an HTTP search against the Document Responder List endpoint. The search target follows the FHIR HTTP specification, addressing the List Resource [http://hl7.org/fhir/R4/http.html](http://hl7.org/fhir/R4/http.html):
```
[base]/List?<query>
```
This URL is configurable by the Document Responder and is subject to the following constraints: 

The `<query>` represents a series of encoded name-value pairs representing the filter for the query as well as control parameters to modify the behavior of the Document Responder such as response format, or pagination.

The Document Consumer may use GET or POST based searches. The Document Responder shall support both GET and POST based searches [http://hl7.org/fhir/R4/http.html#search](http://hl7.org/fhir/R4/http.html#search).

###### 2:3.66.4.1.2.1 Query Search Parameters

The Document Consumer may supply, and the Document Responder shall be capable of processing all query parameters listed below. All query parameter values shall be appropriately encoded per RFC3986 “percent” encoding rules. Note that percent encoding does restrict the character set to a subset of ASCII characters which is used for encoding all other characters used in the URL.

The Document Consumer shall include search parameter `patient` or `patient.identifier`, `code`, and `status`. The other parameters described below are optional. The Document Responder shall implement the parameters described below. The Document Responder may choose to support additional query parameters beyond the subset listed below. Any additional query parameters supported shall be supported according to the core FHIR specification. Such additional parameters are considered out of scope for this transaction. Any additional parameters not supported should be ignored. See [http://hl7.org/fhir/R4/search.html#errors](http://hl7.org/fhir/R4/search.html#errors).

**code**: 
This parameter, of type token, specifies the code.coding value supplied in the List Resource. The value of the code element indicates the List of type SubmissionSet or Folder as indicated.

**date**:
This parameter, of type date, specifies the time when the List was created. See FHIR [http://hl7.org/fhir/R4/search.html#date](http://hl7.org/fhir/R4/search.html#date) for use of the date search type.

**designationType**:
This IHE extension on parameters defined as [List-DesignationType](SearchParameter-List-DesignationType.html), of type token, specifies the designation type of the List. The value of the designation type element expresses contentType of submissionSet or the codeList of a Folder. Usually expressed in LOINC or SNOMED. Note that servers that do not support this extended search parameter will ignore it, and thus return more results than expected.

**identifier**:
This parameter, of type token, specifies an identifier for this List. The search results represent the results of a search on List.identifier. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type. 

**patient**:
This parameter is of type Reference(Patient). The Document Consumer may get this reference through the use of the [PDQm](https://profiles.ihe.net/ITI/TF/Volume1/ch-38.html) or [PIXm](https://profiles.ihe.net/ITI/TF/Volume1/ch-41.html) Profiles, or by some other method. When the patient parameter is used, the Patient reference would need to be accessible to both the Document Consumer and the Document Responder.

**patient.identifier**:
This parameter, of type token, specifies an identifier associated with the patient to which the List Resource is assigned. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for use of the token data type for identifiers. This use of **patient.identifier** follows the [FHIR Chaining Parameters](http://hl7.org/fhir/search.html#chaining) search methodology.

**source.given and source.family**:
These parameters, of type string, specify the name parts of the author person which is associated with the List. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for use of the string data type. This use of **source.given** and **source.family** follows the [FHIR Chaining Parameters](http://hl7.org/fhir/search.html#chaining) search methodology.

**sourceId**:
This IHE extension on parameters defined as [List-SourceId](SearchParameter-List-SourceId.html), of type token, specifies the source (author) value supplied in the List Resource. 

**status**:
This parameter, of type token, specifies the status of the List. If included in the query, the Document Consumer shall populate the code portion of the token, the system portion of the token shall not be populated. See Table 2:3.66.4.1.3.1-3: Values for status of List for mapping to XDS on FHIR Option.

###### 2:3.66.4.1.2.2 Populating Expected Response Format

The FHIR standard provides encodings for responses as either XML or JSON. The Document Responder shall support both message encodings, whilst the Document Consumer shall support one and may support both.

See [ITI TF-2x: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for details. 

###### 2:3.66.4.1.2.3 Example List Search

For example given:
- FHIR server root is `http://test.fhir.org/R4/fhir`
- Patient reference id is `9876`
- looking for a SubmissionSet
- status of current
- with clinical code from loinc of `1234-5`
- examples do not include all http headers such as the security headers						   

###### 2:3.66.4.1.2.3.1 Example GET
```
GET test.fhir.net/R4/fhir/List?patient=9876&code=submissionset&status=current&designationType=http://loinc.org|1234-5
```

###### 2:3.66.4.1.2.3.2 Example POST
```
POST test.fhir.net/R4/fhir/List/_search?patient=9876&code=submissionset&status=current&designationType=http://loinc.org|1234-5
```

###### 2:3.66.4.1.2.3.3 Example POST Body
```
POST test.fhir.net/R4/fhir/List/_search
Content-Type: application/x-www-form-urlencoded

patient=9876&code=submissionset&status=current&designationType=http://loinc.org|1234-5
```

##### 2:3.66.4.1.3 Expected Actions

The Document Responder shall process the query to discover the List entries that match the search parameters given.

###### 2:3.66.4.1.3.1 XDS on FHIR Option

The Document Responder is grouped with an XDS Document Consumer when it supports the [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option. The Document Responder shall map the query parameters as listed in Table 2:3.66.4.1.3.1-1 and shall execute a Registry Stored Query [ITI-18] for FindSubmissionSets or FindFolders. No additional query parameters as defined in FHIR are required of the Document Responder.

**Table 2:3.66.4.1.3.1-1: FindSubmissionSets Query Parameter Mapping**

|[ITI-66] Parameter Name	| [ITI-18] Parameter Name |
|code | "submissionset" |
|patient or patient.identifier	| $XDSSubmissionSetPatientId |
|date (Note 1)	| $XDSSubmissionSetSubmissionTimeFrom |
|date (Note 2)	| $XDSSubmissionSetSubmissionTimeTo |
|source.given / source.family	| $XDSSubmissionSetAuthorPerson |
|designationType | $XDSSubmissionSetContentType |
|sourceId	| $XDSSubmissionSetSourceId |
|status	| $XDSSubmissionSetStatus |
{: .grid}

Note 1: This FindSubmissionSets parameter is used when the greater or equal to (`ge`) parameter modifier is used on the created parameter.

Note 2: This FindSubmissionSets parameter is used when the less than (`lt`) parameter modifier is used on the created parameter. 

**Table 2:3.66.4.1.3.1-2: FindFolders Query Parameter Mapping**

|[ITI-66] Parameter Name	| [ITI-18] Parameter Name |
|code | "folder" |
|patient or patient.identifier	| $XDSFolderPatientId |
|date (Note 1)	| $XDSFolderLastUpdateTimeFrom |
|date (Note 2)	| $XDSFolderLastUpdateTimeTo |
|designationType | $XDSFolderCodeList |
|status	| $XDSFolderStatus |
{: .grid}

Note 1: This FindFolder parameter is used when the greater or equal to (`ge`) parameter modifier is used on the created parameter.

Note 2: This FindFolder parameter is used when the less than (`lt`) parameter modifier is used on the created parameter. 

Note 3: Parameters specific to "submissionset" shall be silently ignored.

**Translation of Token Parameter**

Query parameters of type token are used to represent codes and identifiers. See [https://www.hl7.org/fhir/R4/search.html#token](https://www.hl7.org/fhir/R4/search.html#token). 

The manner in which the Document Responder translates these parameters to ebXML to support the Registry Stored Query [ITI-18] transaction will depend on the type of the corresponding parameter within the FindSubmissionSets stored query (see [ITI TF-2: 3.18.4.1.2.3.7.2](https://profiles.ihe.net/ITI/TF/Volume2/ITI-18.html#3.18.4.1.2.3.7.2) ). 
* If the token parameter translates to a codified stored query parameter, then the Document Responder shall represent the token parameter in the stored query as: `<Value>('code^^system')</Value>`
* If the token parameter translates to a patient identifier in the FindSubmissionSets stored query, then the Document Responder shall represent the token parameter in the stored query as: `<Value>code^^^&amp;system&amp;ISO</Value>` 
* If the token parameter translates to a simple string, then the code shall be used for the parameter and the system shall be ignored

**Translation of Name Components**

Query parameters representing a name, for example `source.given` and `source.family` shall be translated to an appropriate XCN instance in the ebXML query. For example: 
```
…&source.given=Marcus&source.family=Welby
```
would translate to:
```
<Value>^Welby^Marcus^^^</Value>
```

**Table 2:3.66.4.1.3.1-3: Values for status of List**

| status	| ebRIM Code |
|current	| urn:oasis:names:tc:ebxml-regrep:StatusType:Approved |
|superseded	| urn:oasis:names:tc:ebxml-regrep:StatusType:Deprecated |
{: .grid}

#### 2:3.66.4.2 Find Document Lists Response Message

The Document Responder returns a HTTP Status code appropriate to the processing as well as a list of the matching document list resources.

##### 2:3.66.4.2.1 Trigger Events

The Document Responder completed processing of the Find Document Lists message. 

##### 2:3.66.4.2.2 Message Semantics

Based on the query results, the Document Responder will either return an error or success. Guidance on handling Access Denied related to use of 200, 403 and 404 can be found in [ITI TF-2x: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations).

When the Document Responder needs to report an error, it shall use HTTP error response codes and should include a FHIR OperationOutcome with more details on the failure. See FHIR [http://hl7.org/fhir/R4/http.html](http://hl7.org/fhir/R4/http.html) and [http://hl7.org/fhir/R4/operationoutcome.html](http://hl7.org/fhir/R4/operationoutcome.html).

If the Find Document Lists message is processed successfully, whether or not any List Resources are found, the HTTP status code shall be 200. The Find Document Lists Response message shall be a Bundle Resource containing zero or more List Resources. If the Document Responder is sending warnings, the Bundle Resource shall also contain an OperationOutcome Resource that contains those warnings.

The response shall adhere to the FHIR Bundle constraints specified in [ITI TF-2x: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles). 

An informative StructureDefinition is outlined for [MHD Find Document Lists Response message](StructureDefinition-IHE.MHD.FindDocumentListsResponseMessage.html), with an [example](Bundle-ex-findDocumentListsResponse.html).

##### 2:3.66.4.2.2.1 List Resource Contents

The List Resources returned shall be compliant with the FHIR specification [http://hl7.org/fhir/R4/list.html](http://hl7.org/fhir/R4/list.html).

The List Resources returned should be compliant with the [IHE restrictions on the List Resource](32_fhir_maps.html) and with the mapping of ebXML attributes to List elements to [SubmissionSet](32_fhir_maps.html#submissionSet) and to [Folder](32_fhir_maps.html#folder).

###### 2:3.66.4.2.2.1.1 XDS Identifiers to Resource References

Where the List Resource being returned is being translated from an XDS SubmissionSet or Folder, there will be identifiers in the SubmissionSet or Folder (e.g., IntendedRecipient) that may be represented in the List as Resource References. The Document Responder is not required to convert identifiers into Resource References, but it is allowed to do this conversion. 

##### 2:3.66.4.2.3 Expected Actions

The Document Consumer shall process the results according to application-defined rules. The Document Consumer should be robust as the response may contain List Resources that match the query parameters but are not compliant with the List constraints defined in [ITI TF-3: 4.5](32_fhir_maps.html).

#### 2:3.66.4.3 CapabilityStatement Resource

Document Responders implementing this transaction shall provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
- Requirements CapabilityStatement for [Document Consumer](CapabilityStatement-IHE.MHD.DocumentConsumer.html)
- Requirements CapabilityStatement for [Document Responder](CapabilityStatement-IHE.MHD.DocumentResponder.html)


### 2:3.66.5 Security Considerations

See [MHD Security Considerations](1335_security_considerations.html).

This transaction should not return information that the Document Consumer is not authorized to access. Where authorization here is inclusive of system, app, and user according to local policy, patient consents, and security layering. However, the transaction may return List resources that have Reference elements that the Document Consumer may not have access to. This is to say that the authorization need only be to the content returned in the Bundle. There may be references (URLs) for which the content is not authorized. This is considered proper as the Document Consumer would need to retrieve the content pointed to by those references, and at that time the proper authorization decision would be made on that context and content. In this way it is possible for a Document Consumer to get List Resources that are pointing at data that the Document Consumer is not authorized to retrieve. Thus, the URLs used must be carefully crafted so as to not expose sensitive data in the URL value.

#### 2:3.66.5.1 Security Audit Considerations

The security audit criteria are similar to those for the Registry Stored Query [\[ITI-18\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-18.html) transaction.

##### 2:3.66.5.1.1 Document Consumer Audit

The Document Consumer when grouped with ATNA Secure Node or Secure Application Actor shall be able to record a [Find Document Lists Consumer Audit Event Log](StructureDefinition-IHE.MHD.FindDocumentLists.Audit.Consumer.html). [Audit Example for a Find Document Lists transaction from consumer perspective](AuditEvent-ex-auditFindDocumentLists-consumer.html).

##### 2:3.66.5.1.2 Document Responder Audit

The Document Responder when grouped with ATNA Secure Node or Secure Application Actor shall be able to record a [Find Document Lists Responder Audit Event Log](StructureDefinition-IHE.MHD.FindDocumentLists.Audit.Responder.html). [Audit Example for a Find Document Lists Transaction from responder perspective](AuditEvent-ex-auditFindDocumentLists-responder.html).


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/ITI-67.md

This section corresponds to transaction [ITI-67] of the IHE Technical Framework. Transaction [ITI-67] is used by the Document Consumer and Document Responder Actors.

### 2:3.67.1 Scope

The Find Document References transaction is used to find DocumentReference Resources that satisfy a set of parameters. It is equivalent to the FindDocuments and FindDocumentsByReferenceId queries from the Registry Stored Query [ITI-18] transaction. The result of the query is a FHIR Bundle containing DocumentReference Resources that match the query parameters.

### 2:3.67.2 Actors Roles

**Table 2:3.67.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Document Consumer](1331_actors_and_transactions.html#133112-document-consumer)     | Requests a list of DocumentReference Resources, matching the supplied set of criteria, from the Document Responder |
| [Document Responder](1331_actors_and_transactions.html#133114-document-responder) | Returns DocumentReference Resources that match the search criteria provided by the Document Consumer |
{: .grid}

### 2:3.67.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

### 2:3.67.4 Messages

<div>
{%include ITI-67-seq.svg%}
</div>

<br clear="all">

**Figure 2:3.67.4-1: Find Document References Interactions**

#### 2:3.67.4.1 Find Document References Request Message

This message uses the search method parameterized query to obtain DocumentReference Resources from the Document Responder. 

##### 2:3.67.4.1.1 Trigger Events

When the Document Consumer needs to discover DocumentReference Resources matching various metadata parameters, it issues a Find Document References message. 

##### 2:3.67.4.1.2 Message Semantics

The Document Consumer executes an HTTP search against the Document Responders DocumentReference URL. The search target follows the FHIR HTTP specification, addressing the DocumentReference Resource [http://hl7.org/fhir/R4/http.html](http://hl7.org/fhir/R4/http.html):
```
[base]/DocumentReference?<query>
```
This URL is configurable by the Document Responder and is subject to the following constraints: 

The `<query>` represents a series of encoded name-value pairs representing the filter for the query, as specified in Section [Query Search Parameters](#23674121-query-search-parameters), as well as control parameters to modify the behavior of the Document Responder such as response format, or pagination.

The Document Consumer may use GET or POST based searches. The Document Responder shall support both GET and POST based searches [http://hl7.org/fhir/R4/http.html#search](http://hl7.org/fhir/R4/http.html#search).


###### 2:3.67.4.1.2.1 Query Search Parameters

The Document Consumer may supply, and the Document Responder shall be capable of processing, all query parameters listed below. All query parameter values shall be appropriately encoded per RFC3986 “percent” encoding rules. Note that percent encoding does restrict the character set to a subset of ASCII characters which is used for encoding all other characters used in the URL.

The Document Consumer shall include search parameter `patient` or `patient.identifier`, and `status`. The other parameters described below are optional. The Document Responder must implement the parameters described below. The Document Responder may choose to support additional query parameters beyond the subset listed below. Any additional query parameters supported shall be supported according to the core FHIR specification. Such additional parameters are considered out of scope for this transaction. Any additional parameters not supported should be ignored. See [http://hl7.org/fhir/R4/search.html#errors](http://hl7.org/fhir/R4/search.html#errors). 

**author.given** and **author.family**:
These parameters, of type string, specify the name parts of the author person, which is associated with the DocumentReference Resource, or in Document Sharing nomenclature, the author of the Document Entry. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for use of the string data type.  This use of **author.given** and **author.family** follows the [FHIR Chaining Parameters](http://hl7.org/fhir/search.html#chaining) search methodology.

**category**:
This parameter, of type token, specifies the general classification of the DocumentReference Resource, or in Document Sharing nomenclature, the classCode of the Document Entry. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type.

**creation**:
This IHE defined parameter defined as [DocumentReference-Creation](SearchParameter-DocumentReference-Creation.html), of type dateTime, specifies a search against the DocumentReference.content.attachment.creation. See FHIR [http://hl7.org/fhir/R4/search.html#date](http://hl7.org/fhir/R4/search.html#date) for use of the date search type.

**date**:
This parameter, of type date, specifies the time when the DocumentReference was created. See FHIR [http://hl7.org/fhir/R4/search.html#date](http://hl7.org/fhir/R4/search.html#date) for use of the date search type.

**event**:
This parameter, of type token, specifies the main clinical acts documented by the DocumentReference Resource, or in Document Sharing nomenclature, the eventCodeList of the Document Entry. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type.

**facility**:
This parameter, of type token, specifies the kind of facility found in DocumentReference.context.facilityType, or in Document Sharing nomenclature, the healthcareFacilityTypeCode of the Document Entry. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type.

**format**:
This parameter, of type token, specifies the format of the DocumentReference Resource, or in Document Sharing nomenclature, the formatCode of the Document Entry. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type.

**identifier**:
This parameter, of type token, specifies an identifier for this DocumentReference and/or the contained document. The search results represent the results of a search on DocumentReference.masterIdentifier and DocumentReference.identifier. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type. 

**patient**:
This parameter is of type Reference(Patient). The Document Consumer may get this reference using the [PDQm](https://profiles.ihe.net/ITI/TF/Volume1/ch-38.html) or [PIXm](https://profiles.ihe.net/ITI/TF/Volume1/ch-41.html) Profile. When the patient parameter is used, the Patient reference would need to be accessible to both the Document Consumer and the Document Responder.

**patient.identifier**:
This parameter, of type token, specifies an identifier associated with the patient to which the DocumentReference Resource is assigned.  See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type. This use of **patient.identifier** follows the [FHIR Chaining Parameters](http://hl7.org/fhir/search.html#chaining) search methodology.

**period**:
This parameter, of type date, represents the time of service that is being documented by the DocumentReference. The period search parameter specifies an interval which the time of service overlaps. In Document Sharing nomenclature, this query parameter represents from/to parameters for the serviceStartTime and serviceStopTime of the Document Entry. See FHIR [http://hl7.org/fhir/R4/search.html#date](http://hl7.org/fhir/R4/search.html#date) for use of the date search type.

**related**:
This parameter, of type reference, represents other identifiers associated with the DocumentReference Resource, or in Document Sharing nomenclature, the referenceIdList of the Document Entry. 

**security-label**:
This parameter, of type token, specifies the security labels of the document referenced by DocumentReference Resource, or in Document Sharing nomenclature, the confidentialityCode of the Document Entry. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type.

**setting**:
This parameter, of type token, specifies the specific practice setting of the DocumentReference Resource, or in Document Sharing nomenclature, the practiceSettingCode of the Document Entry. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type.

**status**:
This parameter, of type token, specifies the status of the DocumentReference Resource, or in Document Sharing nomenclature, the availabilityStatus of the Document Entry. The Document Consumer shall populate the identifier portion of the token using one of the short codes in Table 2:3.67.4.1.2.1-1. The system portion of the token shall not be populated.

**type**:
This parameter, of type token, specifies the specific type of the DocumentReference resource or in Document Sharing nomenclature, the typeCode of the Document Entry. See [ITI TF-2x: Appendix Z.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.2-query-parameters) for additional constraints on the use of the token search parameter type.

###### 2:3.67.4.1.2.2 Populating Expected Response Format

The FHIR standard provides encodings for responses as either XML or JSON. The Document Responder shall support both message encodings, whilst the Document Consumer shall support one and may support both.

See [ITI TF-2x: Appendix Z.6](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.6-populating-the-expected-response-format) for details. 

###### 2:3.67.4.1.2.3 Example DocumentReference Search

For example given:
- FHIR server root is `http://test.fhir.org/R4/fhir`
- Patient reference id is `9876`
- status of current
- with clinical code from loinc of `1234-5`
- examples do not include all http headers such as the security headers

###### 2:3.67.4.1.2.3.1 Example GET
```
GET test.fhir.net/R4/fhir/DocumentReference?patient=9876&status=current&type=http://loinc.org|1234-5
```

###### 2:3.67.4.1.2.3.2 Example POST
```
POST test.fhir.net/R4/fhir/DocumentReference/_search?patient=9876&status=current&type=http://loinc.org|1234-5
```

###### 2:3.67.4.1.2.3.3 Example POST Body
```
POST test.fhir.net/R4/fhir/DocumentReference/_search	  
Host test.fhir.net
Content-Type: application/x-www-form-urlencoded
Accept: application/fhir+json; fhirVersion=4.0										  

patient=9876&status=current&type=http://loinc.org|1234-5
```

##### 2:3.67.4.1.3 Expected Actions

The Document Responder shall process the query to discover the DocumentReference entries that match the search parameters given. 

###### 2:3.67.4.1.3.1 XDS on FHIR Option

The Document Responder is grouped with an XDS Document Consumer when it supports the [XDS on FHIR](1332_actor_options.html#13322-xds-on-fhir-option) Option. The Document Responder shall map the query parameters as listed in Table 2:3.67.4.1.3.1-1 and shall execute a Registry Stored Query [ITI-18] for FindDocuments or FindDocumentsByReferenceIdList (see [ITI TF-2: 3.18.4.1.2.3.7.1](https://profiles.ihe.net/ITI/TF/Volume2/ITI-18.html#3.18.4.1.2.3.7.1) and [3.18.4.1.2.3.7.14](https://profiles.ihe.net/ITI/TF/Volume2/ITI-18.html#3.18.4.1.2.3.7.14) ). All of the query parameters in Table 3.67.4.1.3-1 shall be supported by the Document Responder. No additional query parameters as defined in FHIR are required of the Document Responder, but they may be offered.

**Table 2:3.67.4.1.3.1-1: ITI-18 FindDocuments Query Parameter Mapping**

| [ITI-67] Parameter Name	| [ITI-18] Parameter Name |
|-----------|-----------|
| patient or patient.identifier	| $XDSDocumentEntryPatientId |
| creation (Note 1) (Note 5)	| $XDSDocumentEntryCreationTimeFrom |
| creation (Note 2) (Note 5)	| $XDSDocumentEntryCreationTimeTo |
| author.given / author.family	| $XDSDocumentEntryAuthorPerson |
| status	| $XDSDocumentEntryStatus |
| (Not supported) (Note 3)	| $XDSDocumentEntryType |
| category	| $XDSDocumentEntryClassCode |
| type	| $XDSDocumentEntryTypeCode |
| setting	| $XDSDocumentEntryPracticeSettingCode |
| period (Note 1)	| $XDSDocumentEntryServiceStartTimeFrom |
| period (Note 2)	| $XDSDocumentEntryServiceStartTimeTo |
| period (Note 1)	| $XDSDocumentEntryServiceStopTimeFrom |
| period (Note 2)	| $XDSDocumentEntryServiceStopTimeTo |
| facility	| $XDSDocumentEntryHealthcareFacilityTypeCode |
| event	| $XDSDocumentEntryEventCodeList |
| security-label	| $XDSDocumentEntryConfidentialityCode |
| format	| $XDSDocumentEntryFormatCode |
| related (Note 4)	| $XDSDocumentEntryReferenceIdList |
{: .grid}

Note 1: This FindDocuments parameter is used when the greater or equal to (`ge`) parameter modifier is used on the given parameter. 

Note 2: This FindDocuments parameter is used when the less than (`lt`) parameter modifier is used on the given parameter. 

Note 3: The $XDSDocumentEntryType is not a supported query parameter in HL7 FHIR.

Note 4: The $XDSDocumentEntryReferenceIdList can only be mapped when using the XDS FindDocumentsByReferenceId query. This parameter support requires XDS [Reference ID Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.6).

Note 5: The FHIR R4 DocumentReference does not yet have a `.attachment.creation` query parameter, it has only a date element which is the creation date/time of the DocumentReference. MHD adds the search parameter `DocumentReference-Creation`, to provide the functionality of search against the document creation date/time.

**Table 2:3.67.4.1.3.1-2: Values for code for status of DocumentReference**

The following table is also available in a [concept map](ConceptMap-FhirStatusVsStatusCode.html) artifact.

|FHIR Code	|ebRIM Code |
|-----------|-----------|
|current	|urn:oasis:names:tc:ebxml-regrep:StatusType:Approved |
|superseded	|urn:oasis:names:tc:ebxml-regrep:StatusType:Deprecated |
{: .grid}

#### 2:3.67.4.2 Find Document References Response Message

The Document Responder returns a HTTP Status code appropriate to the processing as well as a Bundle of the matching DocumentReference Resources.

##### 2:3.67.4.2.1 Trigger Events

The Document Responder completed processing of the Find Document Reference Request message. 

##### 2:3.67.4.2.2 Message Semantics

Based on the query results, the Document Responder will either return an error or success. Guidance on handling Access Denied related to use of 200, 403 and 404 can be found in [ITI TF-2x: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations). 

When the Document Responder needs to report an error, it shall use HTTP error response codes and should include a FHIR OperationOutcome with more details on the failure. See FHIR [http://hl7.org/fhir/R4/http.html](http://hl7.org/fhir/R4/http.html) and [http://hl7.org/fhir/R4/operationoutcome.html](http://hl7.org/fhir/R4/operationoutcome.html).

If the Find Document References message is processed successfully, whether or not any DocumentReference Resources are found, the HTTP status code shall be 200. The Find Document References Response message shall be a Bundle Resource containing zero or more DocumentReference Resources. If the Document Responder is sending warnings, the Bundle Resource shall also contain an OperationOutcome Resource that contains those warnings.

The response shall adhere to the FHIR Bundle constraints specified in [ITI TF-2x: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles). The response bundle for a MHD Find Document References Comprehensive Response [is defined here](StructureDefinition-IHE.MHD.FindDocumentReferencesComprehensiveResponseMessage.html), with an [example](StructureDefinition-IHE.MHD.FindDocumentReferencesComprehensiveResponseMessage-examples.html).

###### 2:3.67.4.2.2.1 DocumentReference Resource Contents

The DocumentReference Resources returned shall be compliant with the FHIR specification [http://hl7.org/fhir/R4/documentreference.html](http://hl7.org/fhir/R4/documentreference.html).

The DocumentReference Resources returned should be compliant with the [MHD metadata](32_fhir_maps.html) for the IHE restrictions on DocumentReference Resource and with the [mapping to DocumentEntry](32_fhir_maps.html#documentEntry) from IHE Document Sharing profiles (e.g., XDS) to FHIR. 

###### 2:3.67.4.2.2.1.1 Document Location

The Document Responder shall place into the DocumentReference.content.attachment.url element a full URL that can be used by the Document Consumer to retrieve the document using the Retrieve Document [\[ITI-68\]](ITI-68.html) transaction. IHE does not specify the format of the URL. There are many ways to encode this URL that allow for easy processing on a [Retrieve Document](ITI-68.html) transaction. Some examples are to encode homeCommunityId, repositoryUniqueId, uniqueId, and patientId into the URL. This could be done in many ways including using character separators or directory separators. In this way, the Document Responder can support many communities, and/or many repositories. 

###### 2:3.67.4.2.2.1.2 Support for On-Demand Documents

[XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) introduced the concept of a [On-Demand Document Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.7), and is explained in the [Use Cases Summary](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.4.11.3). The use of On-Demand Documents allows for documents that would be produced for a specific patient with content assembled at the time of processing the document consumer retrieve request.

On-Demand Documents are indicated in the DocumentReference by the DocumentReference.content.attachment with an absent .hash and .size element. For more background on [On-Demand Documents](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.7). There is no need to declare an On-Demand Documents Option in MHD. 

Informative note: When the Document Consumer retrieves the document using the Document location, then the retrieved document might exist as an [IsSnapshotOf Association according to XDS \[ITI-43\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-43.html#3.43.4.2.3). The IsSnapshotOf Association is identified as a new DocumentReference with relatesTo.code of `transforms`.

###### 2:3.67.4.2.2.1.3 Support for Delayed Document Assembly

[XDS](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html) introduced the concept of [Delayed Document Assembly Option](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.10), and is explained in the [Use Cases Summary](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.4.11.3). The use of Delayed Document Assembly allows source systems to register the existence of stable document content but defer actually assembling the document content only if and when it is retrieved. 

Delayed Document Assembly is distinct from On-Demand Documents in that Delayed Document Assembly is a Documents that are static, clinician attested documents and the content of the document is identified prior to registration of the Document Entry. On-Demand Documents allows the content of the document to be identified at the time of receipt of the retrieval request (e.g., summary, or current). Delayed Document Assembly has been designed to be as transparent as possible to Document Consumer Actors. Document Consumers Actors may easily support Stable Documents whose assembly has been delayed just as if they were a regular Stable Document since the only constraint on Document Consumers brought by this Delayed Document Assembly Option is to support responses to queries with the presence of Stable Document Entries that have zero size and hash values.

Delayed Document Assembly are indicated in the DocumentReference by the DocumentReference.content.attachment with an .size element of `0` (zero), and a .hash element with the fixed value `da39a3ee5e6b4b0d3255bfef95601890afd80709` (SHA1 hash of a zero length file). For more background on the [Delayed Document Assembly](https://profiles.ihe.net/ITI/TF/Volume1/ch-10.html#10.2.10). There is no need to declare a Delayed Document Assembly in MHD. 

Informative note: When the Document Consumer retrieves the document using the Document location, then the retrieved document actual size and hash is updated in the DocumentReference. In this way the Document Consumer may retrieve the updated DocumentReference after successful retrieval of the document to find the size and hash for content integrity validation.

###### 2:3.67.4.2.2.1.4 XDS Associations

Where the DocumentReference Resource being returned has an XDS Association, this shall be represented in the DocumentReference.relatesTo element. Where the DocumentReference.relatesTo.target element holds the Reference to the other DocumentReference Resource, and the DocumentReference.relatesTo.code element holds the relationship type translated using the [AssociationType vs RelatesTo ConceptMap](ConceptMap-AssociationTypeVsRelatesTo.html).

###### 2:3.67.4.2.2.1.5 XDS Identifiers to Resource References

Where the DocumentReference Resource being returned is being translated from an XDS DocumentEntry, there will be identifiers in the DocumentEntry (e.g., ReferenceIdList) that may be represented in the DocumentReference as Resource References. The Document Responder is not required to convert identifiers into Resource References, but it is allowed to do this conversion. For example an identifier in ReferenceIdList may simply be copied into DocumentReference.content.related.identifier. Alternatively the ReferenceIdList may be resolved to a Resource Reference and that reference be placed into DocumentReference.content.related.reference.

Identifiers in XDS are encoded using the [Document Sharing CXi Metadata datatype](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.1.7), which will indicate the kind of identifier. This kind of identifier shall be used when mapping values into DocumentReference elements (See [Appendix Z.9.1.2](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.9.1.2-xds-cxi-mapped-to-fhir-identifier-type) ). Specifically the `CXi` Identifier Type Code of `urn:ihe:iti:xds:2015:encounterId` would indicate the Identifier value be mapped into DocumentReference.encounter. 

###### 2:3.67.4.2.2.2 Resource Bundling

Resource Bundling shall comply with the guidelines in [ITI TF-2x: Appendix Z.1](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.1-resource-bundles). 

#### 2:3.67.4.2.3 Expected Actions

The Document Consumer shall process the results according to application-defined rules. The Document Consumer should be robust as the response may contain DocumentReference Resources that match the query parameters but are not compliant with the DocumentReference constraints defined here.

#### 2:3.67.4.3 CapabilityStatement Resource

Document Responders implementing this transaction shall provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
- Requirements CapabilityStatement for [Document Consumer](CapabilityStatement-IHE.MHD.DocumentConsumer.html)
- Requirements CapabilityStatement for [Document Responder](CapabilityStatement-IHE.MHD.DocumentResponder.html)

### 2:3.67.5 Security Considerations

See [MHD Security Considerations](1335_security_considerations.html).

This transaction should not return information that the Document Consumer is not authorized to access. Where authorization here is inclusive of system, app, and user according to local policy, patient consents, and security layering. However, the transaction may return DocumentReference resources that have Reference elements that the Document Consumer may not have access to. This is to say that the authorization need only be to the content returned in the Bundle. There may be references (URLs) for which the content is not authorized. This is considered proper as the Document Consumer would need to retrieve the content pointed to by those references, and at that time the proper authorization decision would be made on that context and content. In this way it is possible for a Document Consumer to get DocumentReference resources that are pointing at data that the Document Consumer is not authorized to retrieve. Thus, the URLs used must be carefully crafted so as to not expose sensitive data in the URL value.

Given that the Document Responder is responsible for the URL placed into DocumentReference.content.attachment.url, care must be taken to assure that manipulation of this URL prior to a Retrieve Document transaction does not expose resources the Document Consumer should not have access to.

#### 2:3.67.5.1 Security Audit Considerations

The security audit criteria are similar to those for the Registry Stored Query [\[ITI-18\]](https://profiles.ihe.net/ITI/TF/Volume2/ITI-18.html#3.18.5) transaction. 

##### 2:3.67.5.1.1 Document Consumer Audit

The Document Consumer when grouped with ATNA Secure Node or Secure Application Actor shall be able to record a [Find Document References Consumer Audit Event Log](StructureDefinition-IHE.MHD.FindDocumentReferences.Audit.Consumer.html). [Audit Example for a Find Document References transaction from consumer perspective](AuditEvent-ex-auditFindDocumentReferences-consumer.html). 

##### 2:3.67.5.1.2 Document Responder Audit

The Document Responder when grouped with ATNA Secure Node or Secure Application Actor shall be able to record a [Find Document References Responder Audit Event Log](StructureDefinition-IHE.MHD.FindDocumentReferences.Audit.Responder.html). [Audit Example for a Find Document Lists Transaction from responder perspective](AuditEvent-ex-auditFindDocumentReferences-responder.html). 


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/ITI-68.md

This section corresponds to transaction [ITI-68] of the IHE Technical Framework. Transaction [ITI-68] is used by the Document Consumer and Document Responder Actors.

### 2:3.68.1 Scope

The Retrieve Document [ITI-68] transaction is used by the Document Consumer to retrieve a document from the Document Responder.

### 2:3.68.2 Actors Roles

**Table 2:3.68.2-1: Actor Roles**

|Actor | Role |
|-------------------+--------------------------|
| [Document Consumer](1331_actors_and_transactions.html#133112-document-consumer)    | Requests a document from the Document Responder |
| [Document Responder](1331_actors_and_transactions.html#133114-document-responder) | Serves the document to the Document Consumer |
{: .grid}

### 2:3.68.3 Referenced Standards

**FHIR-R4** [HL7 FHIR Release 4.0](http://www.hl7.org/FHIR/R4)

### 2:3.68.4 Messages

<div>
{%include ITI-68-seq.svg%}
</div>

<br clear="all">

**Figure 2:3.68.4-1: Retrieve Document Interactions**

#### 2:3.68.4.1 Retrieve Document Request Message

This message is an HTTP GET request to retrieve the document. 

##### 2:3.68.4.1.1 Trigger Events

The Document Consumer wants to obtain a document. 

##### 2:3.68.4.1.2 Message Semantics

The Document Consumer sends a HTTP GET request to the server. The Document Consumer request may be to retrieve the document content referenced by a DocumentReference.content.attachment.url. 

The Document Consumer may provide HTTP Accept header, according to the semantics of the HTTP protocols (see RFC2616, Section 14.1).  This enables the Document Consumer to indicate preferred mime-types such that the Document Responder could provide the document requested in an encoding other than the encoding indicated in the DocumentReference. For example, indicating `application/fhir+json` could result in the response from the Document Responder being a json FHIR Bundle of type `document` with all the content encoded as FHIR resources.

The only MIME type assured to be returned is the MIME type indicated in the DocumentReference.content.attachment.contentType.

The HTTP If-Unmodified-Since header shall not be included in the GET request.

##### 2:3.68.4.1.3 Expected Actions

The Document Responder shall provide the document in the requested MIME type or reply with an HTTP status code indicating the error condition. The Document Responder is not required to transform the document.

#### 2:3.68.4.2 Retrieve Document Response Message

This is the return message sent by the Document Responder. 

##### 2:3.68.4.2.1 Trigger Events

The HTTP Response message is sent upon completion of the Retrieve Document Request. 

##### 2:3.68.4.2.2 Message Semantics

This message shall be an HTTP Response, as specified by RFC2616. When the requested document is returned, the Document Responder shall respond with HTTP Status Code 200. The HTTP message-body shall be the content of the requested document.

Table 2:3.68.4.2.2-1 contains error situations and the HTTP Response.

**Table 2:3.68.4.2.2-1: HTTP Error Response Codes and Suggested Text**

|Situation	| HTTP Response |
|-----------|---------------|
|URI not known	| 404 Document Not Found |
|Document is Deprecated or not available	| 410 Gone (or 404 when 410 is unacceptable due to security/privacy policy) |
|Document Responder unable to format document in content types listed the 'Accept' field	| 406 Not Acceptable |
|HTTP request specified is otherwise not a legal value	| 403 Forbidden/Request Type Not Supported |
{: .grid}

The Document Responder may return other HTTP Status Codes. Guidance on handling Access Denied related to use of 200, 403 and 404 can be found in [ITI TF-2x: Appendix Z.7](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.8-mobile-security-considerations).

The Document Responder should complement the returned error code with a human readable description of the error condition.

##### 2:3.68.4.2.3 Expected Actions

The Document Consumer processes the results according to application-defined rules.

The .hash and .size, when populated, represent the content in the MIME type indicated in the DocumentReference.content.attachment.contentType. Note there are special .size and .hash handling for [On-Demand Documents](ITI-67.html#236742212-support-for-on-demand-documents) and [Delayed Document Assembly](ITI-67.html#236742213-support-for-delayed-document-assembly).

#### 2:3.68.4.3 CapabilityStatement Resource

Document Responders implementing this transaction shall provide a CapabilityStatement Resource as described in [ITI TF-2x: Appendix Z.3](https://profiles.ihe.net/ITI/TF/Volume2/ch-Z.html#z.3-capabilitystatement-resource) indicating the transaction has been implemented. 
- Requirements CapabilityStatement for [Document Consumer](CapabilityStatement-IHE.MHD.DocumentConsumer.html)
- Requirements CapabilityStatement for [Document Responder](CapabilityStatement-IHE.MHD.DocumentResponder.html)

### 2:3.68.5 Security Considerations

See [MHD Security Considerations](1335_security_considerations.html).

This transaction should not return information that the Document Consumer is not authorized to access. 

#### 2:3.68.5.1 Security Audit Considerations

The security audit criteria are similar to those for the Retrieve Document Set-b [ITI-43] transaction.

##### 2:3.68.5.1.1 Document Consumer Audit

The Document Consumer when grouped with ATNA Secure Node or Secure Application Actor shall be able to record a [Retrieve Document Consumer Audit Event Log](StructureDefinition-IHE.MHD.RetrieveDocument.Audit.Consumer.html). [Audit Example for a Retrieve Document transaction from consumer perspective](AuditEvent-ex-auditRetrieveDocument-consumer.html). 

##### 2:3.68.5.1.2 Document Responder Audit

The Document Responder when grouped with ATNA Secure Node or Secure Application Actor shall be able to record a [Retrieve Document Responder Audit Event Log](StructureDefinition-IHE.MHD.RetrieveDocument.Audit.Responder.html). [Audit Example for a Find Document Lists Transaction from responder perspective](AuditEvent-ex-auditRetrieveDocument-responder.html). 


---

File: repos/IHE_SLASH_ITI.MHD/input/pagecontent/testplan.md

<div markdown="1" class="stu-note">

We expect the maturity of testing will improve over time independent of the versions of MHD.

This page was last updated May 2024.
</div>

## Introduction

MHD is an API between four actors. The transactions between actors specify semantics of the data exchanged.  The MHD test plan focuses on these semantics and on the expected actions on the server-side actors (Document Recipient and Document Responder).

The overall scope of MHD testing is affected by the infrastructure that MHD is connected to. For example, where the Document Responder and Document Recipient are grouped with XDS or MHDS infrastructure, more tests apply.

MHD does not mandate the functionality to be provided by the data communicated via MHD transactions. How MHD actors use the data communicated via these transaction is out-of-scope for MHD testing, but may apply to other related Implementation Guides or IHE Profiles.

## High-level Test Scope

### Submit [ITI-65], [ITI-105], and [ITI-106]

- Document Source publishes document and folder combinations
  - Note that the Document Content is not material to these tests. It could be a simple text file, CDA, FHIR-Document, PNG image, DICOM KOS, or anything that has a mime type
- Document Recipient receives and responds as appropriate 
  - Document Recipient may have policy against some content types.

### [ITI-66] Find Document Lists, [ITI-67] Find Document References, [ITI-68] Retrieve Document

- Document Consumer requests query for List (Submission Set & Folder), query for DocumentReference, and retrieve document
- Document Responder responds to query and retrieve as appropriate

### End-to-End testing

The best case testing would be to have Document Source submit various content, combinations, and transforms; and these are detected to have happened correctly by using a Document Consumer. This kind of end-to-end testing can't be done in all cases, such as PUSH, but can be used when the Document Recipient and Document Responder are grouped with a Document Sharing infrastructure. Such as using the XDSonFHIR option, MHDS, or simply having MHD as a direct API to an XDS Registry/Repository.

## Unit Test Procedure (Conformance Testing)

Unit testing this context entails testing a SUT with a simulator or validator tool.  A simulator is a implementation of an actor that is designed specifically to test the opposite pair actor. The simulator might be a reference implementation or may be a specially designed test-bench.  Often, when a reference implementation is used, the negative tests are harder to simulate. A validator is a implementation that can check conformance. A validator may be a simulator, but may also be a standalone tool used to validate only a message encoding. Some reference implementations may be able to validate to a StructureDefinition profile, but often these do not include sufficient constraints given the overall actor conformance criteria. 

### Available Tools for MHD Unit Testing

#### FHIR Toolkit (aka "Asbestos") - Simulator and Validator

- Provider: NIST (US National Institute of Standards and Technology)
- FHIR Toolkit online status: https://github.com/usnistgov/asbestos/wiki/Online-tool-availability-status
- Tool distribution: https://github.com/usnistgov/asbestos/releases/
  - Release 4.x.x is compatible with IHE MHD version 3.x and 4.0.1
  - Features may be added to FHIR Toolkit in subsequent releases. Check release notes in the tool distribution link above
- Documentation (installation):  https://github.com/usnistgov/asbestos/wiki/Installation-Guide
- Tool support: http://groups.google.com/group/ihe-mhd-implementors
- Actors (options) tested:  Document Source (minimal metadata), Document Source (comprehensive metadata), Document Source (minimal metadata), Document Source (comprehensive metadata)
- Other notes:  

#### Gazelle External Validation Service (aka "EVS Client") - Validator

- Provider:  INRIA (Rennes, France), KEREVAL (https://www.kereval.com/), and Mallinckrodt Institute of Radiology (Saint Louis, USA) 
- Tool location: https://gazelle.ihe.net/EVSClient/home.seam
- Documentation: https://gazelle.ihe.net/content/evsfhirvalidation
- Scope of testing: validation of FHIR Resources using StructureDefinitions for MHD
- Other notes: StructureDefinitions available in EVSClient validation are published by IHE here: https://github.com/IHE/fhir/tree/master/StructureDefinition

## Integration Test Procedure (Interoperability Testing)

Integration Testing in this context is where two SUT of paired actors test against each other.  Integration testing is often limited by the capability of the client (Document Source or Document Consumer), which may support only a subset of the semantics required to be supported by the server (Document Recipient or Document Responder).  Full message semantics and failure-modes are more thoroughly exercised with unit (conformance) tests.

The tests listed below are defined in Gazelle Master Model (https://gazelle.ihe.net/GMM) and are performed by systems testing MHD at IHE Connectathons. Note the following links into the Gazelle Master Model do require a account to view.

- [Capability Statement Checks](https://gazelle.ihe.net/GMM/test.seam?id=13700)
  
### Document Source --> Document Recipient Interoperability Tests

- [Setup proxy tools](https://gazelle.ihe.net/GMM/test.seam?id=13690)
- Document Recipient without **Comprehensive Metadata Option** - [MHD_11_Toolkit_RecipMinimal](https://gazelle.ihe.net/GMM/test.seam?id=13691)
  - Should be Document Recipient declaring **UnContained Option** can handle it.
- Document Recipient with **Comprehensive Metadata Option** - [MHD_12_Toolkit_RecipComprehensiv](https://gazelle.ihe.net/GMM/test.seam?id=13692)
- [MHD_22_ProvideDocBundle_ITI-65](https://gazelle.ihe.net/GMM/test.seam?id=13427) - Testing of ITI-65
  - alternative flows for **Comprehensive Metadata Option** and **UnContained Option** and **XDS on FHIR Option**
  - alternative flows for Replace, Append, and Transform
- Document Source with **Comprehensive Metadata Option** - [MHD_13_Toolkit_SourceComprehensive](https://gazelle.ihe.net/GMM/test.seam?id=13693)
  - alternative flow for **UnContained Option**
- [MHD_22a_ITI-65_Resource_Check](https://gazelle.ihe.net/GMM/test.seam?id=13713) - AuditEvent tests
- [MHD_25_Create_with_List_Resource](https://gazelle.ihe.net/GMM/test.seam?id=13699) -- testing Folders

#### Document Recipient - XDS on FHIR Option

- [MHD_70_Submit_XDSonFHIR](https://gazelle.ihe.net/GMM/test.seam?id=13698) - basic ITI-65 test of Document Recipient declaring **XDS On FHIR Option**
- [MHD_71_XDSonFHIR_Replace](https://gazelle.ihe.net/GMM/test.seam?id=13694)
- [MHD_72_XDSonFHIR_Append](https://gazelle.ihe.net/GMM/test.seam?id=13695)
- [MHD_73_XDSonFHIR_Transform](https://gazelle.ihe.net/GMM/test.seam?id=13696)

### Document Consumer --> Document Responder Interoperability Tests

- [MHD_30a_ITI-66_Resource_Check](https://gazelle.ihe.net/GMM/test.seam?id=13709) - AuditEvent tests
- [MHD_30_FindDocumentLists_ITI-66](https://gazelle.ihe.net/GMM/test.seam?id=13727) - Test ITI-66
  - should be Document Consumer declaring **UnContained Option** can handle it.
- [MHD_30a_ITI-66_Resource_Check](https://gazelle.ihe.net/GMM/test.seam?id=13709) - AuditEvent tests
- [MHD_31a-ITI-67_Resource_Check](https://gazelle.ihe.net/GMM/test.seam?id=13711) AuditEvent tests
- [MHD_31_FindDocReferences_ITI-67](https://gazelle.ihe.net/GMM/test.seam?id=13726) - Test ITI-67
  - should be Document Consumer declaring **UnContained Option** can handle it.
- [MHD_33a-ITI-68_Resource_Check](https://gazelle.ihe.net/GMM/test.seam?id=13714) AuditEvent tests
- [MHD_32_RetrieveDocument_ITI-68](https://gazelle.ihe.net/GMM/test.seam?id=13725) - test ITI-68

#### XDS on FHIR Option

- [MHD_75_QryRetr_XDSonFHIR](https://gazelle.ihe.net/GMM/test.seam?id=13697) - The Doc Responder supports the XDS on FHIR and is grouped with an XDS Document Consumer

### Additional Tests not included in Gazelle today

- Update a Folder, where the test is focused on creating a Folder, but the ITI-65 supports updating an existing folder.
- UnContained is not tested specifically for Practitioner not being contained
- Should be tests for Replace, Transform, or Append for non XDS on FHIR situations (aka MHDS, or just push)
- Test MHD as a direct API to XDS Registry/Repository. Where the MHD Document Recipient to XDS Document Source is logical and not exposed; and where the MHD Document Responder to XDS Document Consumer is logical and not exposed. 

#### Simplified Publish Option

- no tests for this option:

#### Generate Metadata Option

- no tests for this option:

#### ITI-65 FHIR Documents Publish Option

- no tests for this option


---

