File: repos/HL7_SLASH_livd/input/fsh/bundle-uv-livd.fsh

Profile: LIVDBundle
Parent: http://hl7.org/fhir/StructureDefinition/Bundle
Id: bundle-uv-livd
Title: "LIVDBundle"
Description: "LIVD constraints on the Bundle resource"
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = false
* ^date = "2018-08-14"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/orders/index.cfm"
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* . ^short = "LIVDBundle"
* . ^mustSupport = false
* . ^mapping[0].identity = "v2"
* . ^mapping[0].map = "N/A"
* . ^mapping[1].identity = "rim"
* . ^mapping[1].map = "N/A"
* identifier 1..1 MS
* identifier ^comment = "This value must be the same as the Composition.identifier value as there is only on instance of LIVDCatalogProfile in the bundle.  It represents the logical identifier for the publication by the vendor."
* type 1..1 MS
* type only code
* type from http://hl7.org/fhir/uv/livd/ValueSet/livd-bundle-type (required)
* type ^short = "The bundle type"
* type ^definition = "Indicates the purpose of this bundle - how it was intended to be used.  It can be either a collection or a transaction (may depend on what servers will support)."
* type ^comment = "The bundle represents a collection of resources that make up the LIVD Publication."
* type ^binding.description = "Allowed types of bundles for the LIVD catalog"
* timestamp 0..0
* timestamp ^comment = "This element is constrained out as it is more suitable for dynamic query responses than when a publication was created considering that Composition.date already captures that."
* timestamp ^mustSupport = false
* total 0..0
* total ^mustSupport = false
* link 0..0
* link ^mustSupport = false
* link.relation ^mustSupport = false
* link.url ^mustSupport = false
* entry 6..* MS
* entry ^comment = "The bundle must contain at least 6 entries such that there is at exactly one LIVDCatalogProfile instance, at least one LIVDCatalogEntryProfile instance, at least one LIVDDeviceDefinitionProfile instance, at least one LIVDConceptMapProfile instance, and at least one LIVDCodeSystemProfile instance."
* entry.link 0..0
* entry.link ^mustSupport = false
* entry.fullUrl 0..1 MS
* entry.resource 1..1 MS
* entry.resource ^definition = "The Resources for the entry."
* entry.resource ^comment = "(LIVDCatalogProfile | LIVDCatalogEntryProfile | LIVDDeviceDefinitionProfile | LIVDConceptMapProfile | LIVDTestCodeSystemProfile | LIVDLOINCCodeSystemProfile )."
* entry.search 0..0
* entry.search ^mustSupport = false
* entry.search.mode ^mustSupport = false
* entry.search.score ^mustSupport = false
* entry.request 0..1 MS
* entry.request ^short = "Transaction Related Information"
* entry.request ^definition = "Additional information about how this entry should be processed as part of a transaction."
* entry.request.method 1..1 MS
* entry.request.method ^short = "GET | POST | PUT | DELETE"
* entry.request.method ^definition = "The HTTP verb for this entry in either a change history, or a transaction/ transaction response."
* entry.request.url 1..1 MS
* entry.request.ifNoneMatch ^mustSupport = false
* entry.request.ifModifiedSince ^mustSupport = false
* entry.request.ifMatch ^mustSupport = false
* entry.request.ifNoneExist ^mustSupport = false
* entry.response 0..0
* entry.response ^mustSupport = false
* entry.response.status ^mustSupport = false
* entry.response.location ^mustSupport = false
* entry.response.etag ^mustSupport = false
* entry.response.lastModified ^mustSupport = false
* entry.response.outcome ^mustSupport = false
* signature 0..0


---

File: repos/HL7_SLASH_livd/input/fsh/catalog-uv-livd.fsh

Profile: LIVDCatalog
Parent: http://hl7.org/fhir/StructureDefinition/Composition
Id: catalog-uv-livd
Title: "LIVDCatalog"
Description: "Profile on the Composition resource to specify and organize the sections and references to the necessary resource content to express the LIVD catalog."
* ^version = "0.3.0"
* ^experimental = false
* ^date = "2018-08-14"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/orders/index.cfm"
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* . ^short = "LIVDCatalog"
* . ^mustSupport = false
* extension ..* MS
* extension ^slicing.discriminator[0].type = #value
* extension ^slicing.discriminator[0].path = "url"
* extension ^slicing.rules = #open
* extension contains http://hl7.org/fhir/uv/livd/StructureDefinition/ext-region named CatalogRegion 0..* MS
* language 1..1 MS
* language only code
* language ^short = "Publication Language"
* language ^definition = "Provides the language that the LIVD Mapping Publication is expressed in."
* language ^comment = "This is represented using BCP-47 (http://tools.ietf.org/html/bcp47) which includes RFC-5646."
* identifier 1..1 MS
* identifier only Identifier
* identifier ^short = "Logical identifier of the LIVD Publication"
* identifier ^definition = "The logical identifier for the publication by the vendor."
* identifier ^comment = "See discussion in resource definition for how these relate."
* identifier ^mapping[0].identity = "workflow"
* identifier ^mapping[0].map = "Event.identifier"
* identifier ^mapping[1].identity = "rim"
* identifier ^mapping[1].map = "Document.id / Document.setId"
* identifier ^mapping[2].identity = "cda"
* identifier ^mapping[2].map = ".setId"
* identifier.use 0..0
* identifier.use ^mustSupport = false
* identifier.type 0..0
* identifier.type ^mustSupport = false
* identifier.system 1..1 MS
* identifier.system only uri
* identifier.system ^short = "Publication Identifier Name Space"
* identifier.system ^definition = "Establishes the namespace for the value - that is, a URL that describes a set values that are unique."
* identifier.value 1..1 MS
* identifier.value only string
* identifier.value ^short = "Publication Identifier Value"
* identifier.value ^definition = "Provides the value of the identifier."
* identifier.period 0..0
* identifier.period ^mustSupport = false
* identifier.assigner 1..1 MS
* identifier.assigner.reference 0..0
* identifier.assigner.reference ^mustSupport = false
* identifier.assigner.identifier 0..0
* identifier.assigner.identifier ^mustSupport = false
* identifier.assigner.display 1..1 MS
* identifier.assigner.display ^short = "Publication Vendor Name"
* identifier.assigner.display ^definition = "The display name of the organization that issued/manages the identifier."
* status 1..1 MS
* status only code
* status ^short = "preliminary | final | amended | entered-in-error"
* status ^definition = "The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document."
* status ^comment = "Support for final is required, while other statuses are optional.\n\nPrior statuses listed (not accurate currently?:\ninterim | final |  withdrawn."
* status ^requirements = "Need to be able to mark interim, amended, or withdrawn compositions or documents."
* status ^mapping[0].identity = "workflow"
* status ^mapping[0].map = "Event.status"
* status ^mapping[1].identity = "rim"
* status ^mapping[1].map = "interim: .completionCode=\"IN\" & ./statusCode[isNormalDatatype()]=\"active\";  final: .completionCode=\"AU\" &&  ./statusCode[isNormalDatatype()]=\"complete\" and not(./inboundRelationship[typeCode=\"SUBJ\" and isNormalActRelationship()]/source[subsumesCode(\"ActClass#CACT\") and moodCode=\"EVN\" and domainMember(\"ReviseComposition\", code) and isNormalAct()]);  amended: .completionCode=\"AU\" &&  ./statusCode[isNormalDatatype()]=\"complete\" and ./inboundRelationship[typeCode=\"SUBJ\" and isNormalActRelationship()]/source[subsumesCode(\"ActClass#CACT\") and moodCode=\"EVN\" and domainMember(\"ReviseComposition\", code) and isNormalAct() and statusCode=\"completed\"];  withdrawn : .completionCode=NI &&  ./statusCode[isNormalDatatype()]=\"obsolete\""
* status ^mapping[2].identity = "cda"
* status ^mapping[2].map = "n/a"
* type 1..1 MS
* type only CodeableConcept
* type ^short = "Kind of composition (LOINC if possible)"
* type ^definition = "Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition."
* type ^comment = "For Composition type, LOINC is ubiquitous and strongly endorsed by HL7. Most implementation guides will require a specific LOINC code, or use LOINC as an extensible binding."
* type ^requirements = "Key metadata element describing the composition, used in searching/filtering."
* type ^mapping[0].identity = "workflow"
* type ^mapping[0].map = "Event.code"
* type ^mapping[1].identity = "rim"
* type ^mapping[1].map = "./code"
* type ^mapping[2].identity = "cda"
* type ^mapping[2].map = ".code"
* type.coding 1..1 MS
* type.coding only Coding
* type.coding ^definition = "Provides the LOINC Code for the LIVD Mapping Publication."
* type.coding.system 1..1 MS
* type.coding.system only uri
* type.coding.system ^short = "LOINC Coding System"
* type.coding.version 1..1 MS
* type.coding.version only string
* type.coding.version ^short = "LOINC Code Version"
* type.coding.code 1..1 MS
* type.coding.code only code
* type.coding.code ^short = "LIVD Mapping Publication LOINC Code"
* type.coding.code ^definition = "LOINC Code representing the LIVD Mapping Publication."
* type.coding.display 1..1 MS
* type.coding.display only string
* type.coding.userSelected 0..0
* type.coding.userSelected only boolean
* type.coding.userSelected ^mustSupport = false
* type.text 0..0
* type.text only string
* type.text ^mustSupport = false
* category 0..0
* category only CodeableConcept
* category ^short = "Categorization of Composition"
* category ^definition = "A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type."
* category ^comment = "This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD))."
* category ^requirements = "Helps humans to assess whether the composition is of interest when viewing an index of compositions or documents."
* category ^mustSupport = false
* category ^mapping[0].identity = "workflow"
* category ^mapping[0].map = "Event.subject"
* category ^mapping[1].identity = "rim"
* category ^mapping[1].map = ".outboundRelationship[typeCode=\"COMP].target[classCode=\"LIST\", moodCode=\"EVN\"].code"
* category ^mapping[2].identity = "cda"
* category ^mapping[2].map = "n/a"
* subject 0..0
* subject only Reference(http://hl7.org/fhir/StructureDefinition/Resource)
* subject ^short = "Who and/or what the composition is about"
* subject ^definition = "Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure)."
* subject ^comment = "For clinical documents, this is usually the patient."
* subject ^requirements = "Essential metadata for searching for the composition. Identifies who and/or what the composition/document is about."
* subject ^mustSupport = false
* subject ^mapping[0].identity = "rim"
* subject ^mapping[0].map = ".participation[typeCode=\"SBJ\"].role[typeCode=\"PAT\"]"
* subject ^mapping[1].identity = "cda"
* subject ^mapping[1].map = ".recordTarget"
* encounter 0..0
* encounter only Reference(http://hl7.org/fhir/StructureDefinition/Encounter)
* encounter ^short = "Context of the Composition"
* encounter ^definition = "Describes the clinical encounter or type of care this documentation is associated with."
* encounter ^requirements = "Provides context for the composition and supports searching."
* encounter ^mustSupport = false
* encounter ^mapping[0].identity = "workflow"
* encounter ^mapping[0].map = "Event.context"
* encounter ^mapping[1].identity = "rim"
* encounter ^mapping[1].map = "unique(highest(./outboundRelationship[typeCode=\"SUBJ\" and isNormalActRelationship()], priorityNumber)/target[moodCode=\"EVN\" and classCode=(\"ENC\", \"PCPR\") and isNormalAct])"
* encounter ^mapping[2].identity = "cda"
* encounter ^mapping[2].map = ".componentOf.encompassingEncounter"
* date 1..1 MS
* date only dateTime
* date ^short = "Composition editing time"
* date ^definition = "The date the LIVD Mapping Publication was published."
* date ^comment = "We do not need a separate effective date/time at this point."
* date ^requirements = "dateTime is used for tracking, organizing versions and searching."
* date ^mapping[0].identity = "workflow"
* date ^mapping[0].map = "Event.occurrence[x]"
* date ^mapping[1].identity = "rim"
* date ^mapping[1].map = ".effectiveTime[type=\"TS\"]"
* date ^mapping[2].identity = "cda"
* date ^mapping[2].map = ".effectiveTime"
* author 1..1 MS
* author only Reference(http://hl7.org/fhir/StructureDefinition/Organization)
* author ^short = "Who and/or what authored the composition"
* author ^definition = "Identifies who is responsible for the information in the LIVD Mapping Publication, not necessarily who typed it in."
* author ^requirements = "Identifies who is responsible for the content."
* author ^mapping[0].identity = "workflow"
* author ^mapping[0].map = "Event.performer"
* author ^mapping[1].identity = "rim"
* author ^mapping[1].map = ".participation[typeCode=\"AUT\"].role[classCode=\"ASSIGNED\"]"
* author ^mapping[2].identity = "cda"
* author ^mapping[2].map = ".author.assignedAuthor"
* author.reference 0..0
* author.reference only string
* author.reference ^mustSupport = false
* author.identifier 0..0
* author.identifier only Identifier
* author.identifier ^mustSupport = false
* author.display 1..1 MS
* author.display only string
* author.display ^short = "Vendor Name"
* author.display ^definition = "The name of the vendor that authored the LIVD Mapping Publication."
* title 1..1 MS
* title only string
* title ^short = "LIVD Mapping Publication Title"
* title ^definition = "Official human-readable label for the LIVD Mapping Publication."
* title ^mapping[0].identity = "rim"
* title ^mapping[0].map = "./title"
* title ^mapping[1].identity = "cda"
* title ^mapping[1].map = ".title"
* confidentiality 0..0
* confidentiality only code
* confidentiality ^short = "As defined by affinity domain"
* confidentiality ^definition = "The code specifying the level of confidentiality of the Composition."
* confidentiality ^comment = "The exact use of this element, and enforcement and issues related to highly sensitive documents are out of scope for the base specification, and delegated to implementation profiles (see security section).\n\nThis element is labeled as a modifier because highly confidential documents must not be treated as if they are not."
* confidentiality ^mustSupport = false
* confidentiality ^mapping[0].identity = "rim"
* confidentiality ^mapping[0].map = ".confidentialityCode"
* confidentiality ^mapping[1].identity = "cda"
* confidentiality ^mapping[1].map = ".confidentialityCode"
* attester 0..0
* attester ^short = "Attests to accuracy of composition"
* attester ^definition = "A participant who has attested to the accuracy of the composition/document."
* attester ^comment = "Only list each attester once."
* attester ^requirements = "Identifies responsibility for the accuracy of the composition content."
* attester ^mustSupport = false
* attester ^mapping[0].identity = "rim"
* attester ^mapping[0].map = ".participation[typeCode=\"AUTHEN\"].role[classCode=\"ASSIGNED\"]"
* attester ^mapping[1].identity = "cda"
* attester ^mapping[1].map = ".authenticator/.legalAuthenticator"
* attester.mode 1..1
* attester.mode only code
* attester.mode ^short = "personal | professional | legal | official"
* attester.mode ^definition = "The type of attestation the authenticator offers."
* attester.mode ^comment = "Use more than one code where a single attester has more than one mode (professional and legal are often paired)."
* attester.mode ^requirements = "Indicates the level of authority of the attestation."
* attester.mode ^mustSupport = false
* attester.mode ^mapping[0].identity = "rim"
* attester.mode ^mapping[0].map = "unique(./modeCode)"
* attester.mode ^mapping[1].identity = "cda"
* attester.mode ^mapping[1].map = "implied by .authenticator/.legalAuthenticator"
* attester.time 0..1
* attester.time only dateTime
* attester.time ^short = "When the composition was attested"
* attester.time ^definition = "When the composition was attested by the party."
* attester.time ^requirements = "Identifies when the information in the composition was deemed accurate.  (Things may have changed since then.)."
* attester.time ^mustSupport = false
* attester.time ^mapping[0].identity = "rim"
* attester.time ^mapping[0].map = "./time[type=\"TS\" and isNormalDatatype()]"
* attester.time ^mapping[1].identity = "cda"
* attester.time ^mapping[1].map = ".authenticator.time"
* attester.party 0..1
* attester.party only Reference(http://hl7.org/fhir/StructureDefinition/Patient or http://hl7.org/fhir/StructureDefinition/Practitioner or http://hl7.org/fhir/StructureDefinition/PractitionerRole or http://hl7.org/fhir/StructureDefinition/Organization)
* attester.party ^short = "Who attested the composition"
* attester.party ^definition = "Who attested the composition in the specified way."
* attester.party ^requirements = "Identifies who has taken on the responsibility for accuracy of the composition content."
* attester.party ^mustSupport = false
* attester.party ^mapping[0].identity = "rim"
* attester.party ^mapping[0].map = "./role[classCode=\"ASSIGNED\" and isNormalRole]/player[determinerCode=\"INST\" and classCode=(\"DEV\", \"PSN\") and isNormalEntity()] or ./role[classCode=\"ASSIGNED\" and isNormalRole and not(player)]/scoper[determinerCode=\"INST\" and classCode=\"ORG\" and isNormalEntity()]"
* attester.party ^mapping[1].identity = "cda"
* attester.party ^mapping[1].map = ".authenticator.assignedEnttty"
* custodian 0..0
* custodian only Reference(http://hl7.org/fhir/StructureDefinition/Organization)
* custodian ^short = "Organization which maintains the composition"
* custodian ^definition = "Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information."
* custodian ^comment = "This is useful when documents are derived from a composition - provides guidance for how to get the latest version of the document. This is optional because this is sometimes not known by the authoring system, and can be inferred by context. However, it is important that this information be known when working with a derived document, so providing a custodian is encouraged."
* custodian ^requirements = "Identifies where to go to find the current version, where to report issues, etc."
* custodian ^mustSupport = false
* custodian ^mapping[0].identity = "rim"
* custodian ^mapping[0].map = ".participation[typeCode=\"RCV\"].role[classCode=\"CUST\"].scoper[classCode=\"ORG\" and determinerCode=\"INST\"]"
* custodian ^mapping[1].identity = "cda"
* custodian ^mapping[1].map = ".custodian.assignedCustodian"
* relatesTo 0..0
* relatesTo ^short = "Relationships to other compositions/documents"
* relatesTo ^definition = "Relationships that this composition has with other compositions or documents that already exist."
* relatesTo ^comment = "A document is a version specific composition."
* relatesTo ^mustSupport = false
* relatesTo ^mapping[0].identity = "rim"
* relatesTo ^mapping[0].map = ".outboundRelationship"
* relatesTo ^mapping[1].identity = "cda"
* relatesTo ^mapping[1].map = ".relatedDocument"
* relatesTo.code 1..1
* relatesTo.code only code
* relatesTo.code ^short = "replaces | transforms | signs | appends"
* relatesTo.code ^definition = "The type of relationship that this composition has with anther composition or document."
* relatesTo.code ^comment = "If this document appends another document, then the document cannot be fully understood without also accessing the referenced document."
* relatesTo.code ^mustSupport = false
* relatesTo.code ^mapping[0].identity = "rim"
* relatesTo.code ^mapping[0].map = ".outboundRelationship.typeCode"
* relatesTo.code ^mapping[1].identity = "cda"
* relatesTo.code ^mapping[1].map = ".relatedDocument.typeCode"
* relatesTo.target[x] 1..1
* relatesTo.target[x] only Identifier or Reference(http://hl7.org/fhir/StructureDefinition/Composition)
* relatesTo.target[x] ^short = "Target of the relationship"
* relatesTo.target[x] ^definition = "The target composition/document of this relationship."
* relatesTo.target[x] ^mustSupport = false
* relatesTo.target[x] ^mapping[0].identity = "rim"
* relatesTo.target[x] ^mapping[0].map = ".target[classCode=\"DOC\", moodCode=\"EVN\"].id"
* relatesTo.target[x] ^mapping[1].identity = "cda"
* relatesTo.target[x] ^mapping[1].map = ".relatedDocument.id"
* event 0..0
* event ^short = "The clinical service(s) being documented"
* event ^definition = "The clinical service, such as a colonoscopy or an appendectomy, being documented."
* event ^comment = "The event needs to be consistent with the type element, though can provide further information if desired."
* event ^requirements = "Provides context for the composition and creates a linkage between a resource describing an event and the composition created describing the event."
* event ^mustSupport = false
* event ^mapping[0].identity = "rim"
* event ^mapping[0].map = "outboundRelationship[typeCode=\"SUBJ\"].target[classCode<'ACT']"
* event ^mapping[1].identity = "cda"
* event ^mapping[1].map = ".documentationOf.serviceEvent"
* event.code 0..*
* event.code only CodeableConcept
* event.code ^short = "Code(s) that apply to the event being documented"
* event.code ^definition = "This list of codes represents the main clinical acts, such as a colonoscopy or an appendectomy, being documented. In some cases, the event is inherent in the typeCode, such as a \"History and Physical Report\" in which the procedure being documented is necessarily a \"History and Physical\" act."
* event.code ^comment = "An event can further specialize the act inherent in the typeCode, such as where it is simply \"Procedure Report\" and the procedure was a \"colonoscopy\". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries."
* event.code ^mustSupport = false
* event.code ^mapping[0].identity = "rim"
* event.code ^mapping[0].map = ".code"
* event.code ^mapping[1].identity = "cda"
* event.code ^mapping[1].map = ".code"
* event.period 0..1
* event.period only Period
* event.period ^short = "The period covered by the documentation"
* event.period ^definition = "The period of time covered by the documentation. There is no assertion that the documentation is a complete representation for this period, only that it documents events during this time."
* event.period ^mustSupport = false
* event.period ^mapping[0].identity = "rim"
* event.period ^mapping[0].map = ".effectiveTime"
* event.period ^mapping[1].identity = "cda"
* event.period ^mapping[1].map = ".effectiveTime"
* event.detail 0..*
* event.detail only Reference(http://hl7.org/fhir/StructureDefinition/Resource)
* event.detail ^short = "The event(s) being documented"
* event.detail ^definition = "The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy."
* event.detail ^mustSupport = false
* event.detail ^mapping[0].identity = "rim"
* event.detail ^mapping[0].map = ".outboundRelationship[typeCode=\"SUBJ\"].target"
* event.detail ^mapping[1].identity = "cda"
* event.detail ^mapping[1].map = "n/a"
* section 1..* MS
* section only BackboneElement
* section ^extension[0].url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-explicit-type-name"
* section ^extension[0].valueString = "Section"
* section ^short = "Composition is broken into sections"
* section ^definition = "The set of resource instances for the same type, e.g., device definition or LOINC codes, of the LIVD Mapping Publication."
* section ^mapping[0].identity = "rim"
* section ^mapping[0].map = "./outboundRelationship[typeCode=\"COMP\" and isNormalActRelationship()]/target[moodCode=\"EVN\" and classCode=\"DOCSECT\" and isNormalAct]"
* section ^mapping[1].identity = "cda"
* section ^mapping[1].map = ".component.structuredBody.component.section"
* section.title 1..1 MS
* section.title only string
* section.title ^short = "Label for section (e.g. for Devices)"
* section.title ^definition = "The label for this particular section, e.g., Devices, LOINC Codes or Concept Maps."
* section.title ^comment = "This will be used to organize CatalogEntries, Devices, Concept Maps, and Coding System resources."
* section.title ^alias[0] = "header"
* section.title ^alias[1] = "label"
* section.title ^alias[2] = "caption"
* section.title ^mapping[0].identity = "rim"
* section.title ^mapping[0].map = "./title"
* section.title ^mapping[1].identity = "cda"
* section.title ^mapping[1].map = ".title"
* section.code 1..1 MS
* section.code only CodeableConcept
* section.code from http://hl7.org/fhir/uv/livd/ValueSet/livd-section-type (required)
* section.code ^short = "devices | concept-map | loinc-codes | ivd-test-codes | entry-definitions"
* section.code ^definition = "A code identifying the kind of content contained within the section. This must be consistent with the section title."
* section.code ^comment = "The code identifies the section for an automated processor of the document. This is particularly relevant when using profiles to control the structure of the document.   If the section has content (instead of sub-sections), the section.code does not change the meaning or interpretation of the resource that is the content of the section in the comments for the section.code."
* section.code ^requirements = "Provides computable standardized labels to topics within the document."
* section.code ^binding.description = "The type of sections used in the LIVD Mapping Publication"
* section.code ^mapping[0].identity = "rim"
* section.code ^mapping[0].map = "./code"
* section.code ^mapping[1].identity = "cda"
* section.code ^mapping[1].map = ".code"
* section.text 0..0
* section.text only Narrative
* section.text ^short = "Text summary of the section, for human interpretation"
* section.text ^definition = "A human-readable narrative that contains the attested content of the section, used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it \"clinically safe\" for a human to just read the narrative."
* section.text ^comment = "Document profiles may define what content should be represented in the narrative to ensure clinical safety."
* section.text ^mustSupport = false
* section.text ^mapping[0].identity = "rim"
* section.text ^mapping[0].map = ".text"
* section.text ^mapping[1].identity = "cda"
* section.text ^mapping[1].map = ".text"
* section.mode 0..0
* section.mode only code
* section.mode ^short = "working | snapshot | changes"
* section.mode ^definition = "How the entry list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted."
* section.mode ^comment = "This element is labeled as a modifier because a change list must not be mis-understood as a complete list."
* section.mode ^requirements = "Sections are used in various ways, and it must be known in what way it is safe to use the entries in them."
* section.mode ^mustSupport = false
* section.mode ^mapping[0].identity = "rim"
* section.mode ^mapping[0].map = ".outBoundRelationship[typeCode=COMP].target[classCode=OBS\"].value"
* section.mode ^mapping[1].identity = "cda"
* section.mode ^mapping[1].map = "n/a"
* section.orderedBy 0..0
* section.orderedBy only CodeableConcept
* section.orderedBy ^short = "Order of section entries"
* section.orderedBy ^definition = "Specifies the order applied to the items in the section entries."
* section.orderedBy ^comment = "Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order."
* section.orderedBy ^requirements = "Important for presentation and rendering.  Lists may be sorted to place more important information first or to group related entries."
* section.orderedBy ^mustSupport = false
* section.orderedBy ^mapping[0].identity = "rim"
* section.orderedBy ^mapping[0].map = ".outboundRelationship[typeCode=COMP].sequenceNumber > 1"
* section.orderedBy ^mapping[1].identity = "cda"
* section.orderedBy ^mapping[1].map = "n/a"
* section.entry 1..* MS
* section.entry only Reference(http://hl7.org/fhir/StructureDefinition/Resource)
* section.entry ^short = "A reference to data that supports this section"
* section.entry ^definition = "A reference to the actual resource from which the narrative in the section is derived."
* section.entry ^comment = "If there are no entries in the list, an emptyReason SHOULD be provided."
* section.entry ^mapping[0].identity = "rim"
* section.entry ^mapping[0].map = ".outboundRelationship[typeCode=COMP] or  .participation[typeCode=SBJ]"
* section.entry ^mapping[1].identity = "cda"
* section.entry ^mapping[1].map = ".entry"
* section.entry.reference 1..1 MS
* section.entry.reference only string
* section.entry.identifier 0..0
* section.entry.identifier only Identifier
* section.entry.identifier ^mustSupport = false
* section.entry.display 0..0
* section.entry.display only string
* section.entry.display ^mustSupport = false
* section.emptyReason 0..0
* section.emptyReason only CodeableConcept
* section.emptyReason ^short = "Why the section is empty"
* section.emptyReason ^definition = "If the section is empty, why the list is empty. An empty section typically has some text explaining the empty reason."
* section.emptyReason ^comment = "The various reasons for an empty section make a significant interpretation to its interpretation. Note that this code is for use when the entire section content has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases."
* section.emptyReason ^requirements = "Allows capturing things like \"none exist\" or \"not asked\" which can be important for most lists."
* section.emptyReason ^mustSupport = false
* section.emptyReason ^mapping[0].identity = "rim"
* section.emptyReason ^mapping[0].map = ".inboundRelationship[typeCode=SUBJ,code<ListEmptyReason].value[type=CD]"
* section.emptyReason ^mapping[1].identity = "cda"
* section.emptyReason ^mapping[1].map = "n/a"
* section.section 0..0
* section.section ^short = "Nested Section"
* section.section ^definition = "A nested sub-section within this section."
* section.section ^comment = "Nested sections are primarily used to help human readers navigate to particular portions of the document."
* section.section ^contentReference = "#Composition.section"
* section.section ^mustSupport = false
* section.section ^mapping[0].identity = "rim"
* section.section ^mapping[0].map = "./outboundRelationship[typeCode=\"COMP\" and isNormalActRelationship()]/target[moodCode=\"EVN\" and classCode=\"DOCSECT\" and isNormalAct]"
* section.section ^mapping[1].identity = "cda"
* section.section ^mapping[1].map = ".component.section"


---

File: repos/HL7_SLASH_livd/input/fsh/codesystem-loinc-frag-uv-livd.fsh

Profile: LIVDCodeSystemFragmentLOINC
Parent: http://hl7.org/fhir/StructureDefinition/CodeSystem
Id: codesystem-loinc-frag-uv-livd
Title: "LIVDCodeSystemFragmentLOINC"
Description: "Profile on the CodeSystem resource to include the relevant information from LOINC to enable the full mapping context without having to connect to a remote terminology service or other source of LOINC terminology content."
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = false
* ^date = "2018-08-14"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/orders/index.cfm"
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* . ^short = "LIVDCodeSystemFragmentLOINC"
* . ^mustSupport = false
* . ^mapping[0].identity = "rim"
* . ^mapping[0].map = "N/A"
* url 1..1 MS
* url only uri
* url = "http://loinc.org" (exactly)
* url ^short = "& (Coding.system)"
* url ^definition = "& This is used in [Coding]{datatypes.html#Coding}.system."
* identifier 1..1 MS
* version 1..1 MS
* version ^short = "& (Coding.version)"
* version ^definition = "& This is used in [Coding]{datatypes.html#Coding}.version."
* name 1..1 MS
* title 1..1 MS
* status 1..1 MS
* experimental 0..0
* experimental ^mustSupport = false
* date ^mustSupport = false
* publisher 1..1 MS
* contact 0..0
* contact ^mustSupport = false
* description 0..0
* description ^alias[0] = "Scope"
* description ^alias[1] = "Purpose"
* description ^mustSupport = false
* description ^mapping[0].identity = "rim"
* description ^mapping[0].map = "N/A"
* useContext 0..0
* useContext ^mustSupport = false
* jurisdiction ^mustSupport = false
* purpose 0..0
* purpose ^mustSupport = false
* copyright 1..1 MS
* copyright ^comment = "... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement should clearly differentiate between these when required."
* caseSensitive 0..1
* caseSensitive only boolean
* caseSensitive = false (exactly)
* caseSensitive ^short = "If code comparison is case sensitive"
* caseSensitive ^definition = "If code comparison is case sensitive when codes within this system are compared to each other."
* caseSensitive ^comment = "If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not known, Postel's law should be followed: produce codes with the correct case, and accept codes in any case. This element is primarily provided to support validation software."
* caseSensitive ^mustSupport = false
* valueSet 0..0
* valueSet ^short = "Canonical URL for value set with entire code system"
* valueSet ^definition = "Canonical URL of value set that contains the entire code system."
* valueSet ^comment = "The definition of the value set SHALL include all codes from this code system, and it SHALL be immutable."
* valueSet ^mustSupport = false
* hierarchyMeaning 0..0
* hierarchyMeaning ^short = "grouped-by | is-a | part-of | classified-with"
* hierarchyMeaning ^definition = "The meaning of the hierarchy of concepts."
* hierarchyMeaning ^mustSupport = false
* compositional 0..0
* compositional ^short = "If code system defines a post-composition grammar"
* compositional ^definition = "True If code system defines a post-composition grammar."
* compositional ^comment = "Note that the code system resource does not define what the compositional grammar is, only whether or not there is one."
* compositional ^alias[0] = "grammar"
* compositional ^mustSupport = false
* versionNeeded 0..0
* versionNeeded ^short = "If definitions are not stable"
* versionNeeded ^definition = "This flag is used to signify that the code system has not (or does not) maintain the definitions, and a version must be specified when referencing this code system."
* versionNeeded ^comment = "Best practice is that code systems do not redefine concepts, or that if concepts are redefined, a new code system definition is created. But this is not always possible, so some code systems may be defined as 'versionNeeded'."
* versionNeeded ^mustSupport = false
* content 1..1 MS
* content only code
* content = #fragment (exactly)
* content ^short = "fragment"
* content ^definition = "This codes system profile contains the applicable subset of the LOINC codes used in the LIVD Catalog."
* supplements 0..0
* supplements ^mustSupport = false
* count 0..0
* count ^short = "Total concepts in the code system"
* count ^definition = "The total number of concepts defined by the code system. Where the code system has a compositional grammar, the count refers to the number of base (primitive) concepts."
* count ^comment = "The count of concepts defined in this resource cannot be more than this value, but may be less for several reasons - see the content value."
* count ^mustSupport = false
* filter 0..0
* filter ^short = "Filter that can be used in a value set"
* filter ^definition = "A filter that can be used in a value set compose statement when selecting concepts using a filter."
* filter ^mustSupport = false
* filter.code 1..1 MS
* filter.code ^short = "Code that identifies the filter"
* filter.code ^definition = "The code that identifies this filter when it is used in the instance."
* filter.description 0..1 MS
* filter.description ^short = "How or why the filter is used"
* filter.description ^definition = "A description of how or why the filter is used."
* filter.operator 1..* MS
* filter.operator ^short = "Operators that can be used with filter"
* filter.operator ^definition = "A list of operators that can be used with the filter."
* filter.value 1..1 MS
* filter.value ^short = "What to use for the value"
* filter.value ^definition = "A description of what the value for the filter should be."
* property 6..6 MS
* property ^slicing.discriminator[0].type = #value
* property ^slicing.discriminator[0].path = "code"
* property ^slicing.rules = #closed
* property ^short = "Additional information supplied about each concept"
* property ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* property ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* property.code 1..1 MS
* property.code ^short = "Identifies the property on the concepts, and when referred to in operations"
* property.code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* property.uri 0..1
* property.uri ^short = "Formal identifier for the property"
* property.uri ^definition = "Reference to the formal meaning of the property. One possible source of meaning is the [Concept Properties](codesystem-concept-properties.html) code system."
* property.uri ^mustSupport = false
* property.description 1..1 MS
* property.description ^short = "Why the property is defined, and/or what it conveys"
* property.description ^definition = "A description of the property- why it is defined, and how its value might be used."
* property.type 1..1 MS
* property.type only code
* property.type = #Coding (exactly)
* property.type ^short = "code | Coding | string | integer | boolean | dateTime"
* property.type ^definition = "The type of the property value. Properties of type \"code\" contain a code defined by the code system (e.g. a reference to anotherr defined concept)."
* property contains loinc_component 1..1 MS
* property[loinc_component] ^short = "Additional information supplied about each concept"
* property[loinc_component] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* property[loinc_component] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* property[loinc_component].code 1..1 MS
* property[loinc_component].code only code
* property[loinc_component].code = #COMPONENT (exactly)
* property[loinc_component].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* property[loinc_component].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* property contains loinc_property 1..1 MS
* property[loinc_property] ^short = "Additional information supplied about each concept"
* property[loinc_property] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* property[loinc_property] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* property[loinc_property].code 1..1 MS
* property[loinc_property].code only code
* property[loinc_property].code = #PROPERTY (exactly)
* property[loinc_property].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* property[loinc_property].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* property contains loinc_time_aspct 1..1 MS
* property[loinc_time_aspct] ^short = "Additional information supplied about each concept"
* property[loinc_time_aspct] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* property[loinc_time_aspct] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* property[loinc_time_aspct].code 1..1 MS
* property[loinc_time_aspct].code only code
* property[loinc_time_aspct].code = #TIME_ASPCT (exactly)
* property[loinc_time_aspct].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* property[loinc_time_aspct].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* property contains loinc_system 1..1 MS
* property[loinc_system] ^short = "Additional information supplied about each concept"
* property[loinc_system] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* property[loinc_system] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* property[loinc_system].code 1..1 MS
* property[loinc_system].code only code
* property[loinc_system].code = #SYSTEM (exactly)
* property[loinc_system].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* property[loinc_system].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* property contains loinc_scale_typ 1..1 MS
* property[loinc_scale_typ] ^short = "Additional information supplied about each concept"
* property[loinc_scale_typ] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* property[loinc_scale_typ] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* property[loinc_scale_typ].code 1..1 MS
* property[loinc_scale_typ].code only code
* property[loinc_scale_typ].code = #SCALE_TYP (exactly)
* property[loinc_scale_typ].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* property[loinc_scale_typ].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* property contains loinc_method_typ 1..1 MS
* property[loinc_method_typ] ^short = "Additional information supplied about each concept"
* property[loinc_method_typ] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* property[loinc_method_typ] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* property[loinc_method_typ].code 1..1 MS
* property[loinc_method_typ].code only code
* property[loinc_method_typ].code = #METHOD_TYP (exactly)
* property[loinc_method_typ].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* property[loinc_method_typ].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* concept 1..* MS
* concept ^short = "Concepts in the code system"
* concept ^definition = "Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are."
* concept ^comment = "If this is empty, it means that the code system resource does not represent the content of the code system."
* concept.code 1..1 MS
* concept.code ^short = "Code that identifies concept"
* concept.code ^definition = "A code - a text symbol - that uniquely identifies the concept within the code system."
* concept.display 1..1 MS
* concept.display ^short = "Text to display to the user"
* concept.display ^definition = "A human readable string that is the recommended default way to present this concept to a user."
* concept.display ^comment = "This contains the LOINC Long Name."
* concept.definition 0..0
* concept.definition ^short = "Formal definition"
* concept.definition ^definition = "The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept."
* concept.definition ^mustSupport = false
* concept.designation 0..0
* concept.designation ^short = "Additional representations for the concept"
* concept.designation ^definition = "Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc."
* concept.designation ^requirements = "Many concept definition systems support multiple representations, in multiple languages, and for multiple purposes."
* concept.designation ^mustSupport = false
* concept.designation.language 0..1
* concept.designation.language ^short = "Human language of the designation"
* concept.designation.language ^definition = "The language this designation is defined for."
* concept.designation.language ^comment = "In the absence of a language, the resource language applies."
* concept.designation.language ^mustSupport = false
* concept.designation.use 0..1
* concept.designation.use ^short = "Details how this designation would be used"
* concept.designation.use ^definition = "A code that details how this designation would be used."
* concept.designation.use ^comment = "If no use is provided, the designation can be assumed to be suitable for general display to a human user."
* concept.designation.use ^mustSupport = false
* concept.designation.value 1..1
* concept.designation.value ^short = "The text value for this designation"
* concept.designation.value ^definition = "The text value for this designation."
* concept.designation.value ^mustSupport = false
* concept.property 0..6 MS
* concept.property ^slicing.discriminator[0].type = #value
* concept.property ^slicing.discriminator[0].path = "code"
* concept.property ^slicing.rules = #closed
* concept.property ^short = "Property value for the concept"
* concept.property ^definition = "A property value for this concept."
* concept.property.code 1..1 MS
* concept.property.code ^short = "Reference to CodeSystem.property.code"
* concept.property.code ^definition = "A code that is a reference to CodeSystem.property.code."
* concept.property.value[x] 1..1 MS
* concept.property.value[x] only Coding
* concept.property.value[x] ^short = "Value of the property for this concept"
* concept.property.value[x] ^definition = "The value of this property."
* concept.property contains loinc_component 0..1 MS
* concept.property[loinc_component] ^short = "Additional information supplied about each concept"
* concept.property[loinc_component] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* concept.property[loinc_component] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* concept.property[loinc_component].code 1..1 MS
* concept.property[loinc_component].code only code
* concept.property[loinc_component].code = #COMPONENT (exactly)
* concept.property[loinc_component].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* concept.property[loinc_component].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* concept.property contains loinc_property 0..1 MS
* concept.property[loinc_property] ^short = "Additional information supplied about each concept"
* concept.property[loinc_property] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* concept.property[loinc_property] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* concept.property[loinc_property].code 1..1 MS
* concept.property[loinc_property].code only code
* concept.property[loinc_property].code = #PROPERTY (exactly)
* concept.property[loinc_property].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* concept.property[loinc_property].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* concept.property contains loinc_time_aspct 0..1 MS
* concept.property[loinc_time_aspct] ^short = "Additional information supplied about each concept"
* concept.property[loinc_time_aspct] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* concept.property[loinc_time_aspct] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* concept.property[loinc_time_aspct].code 1..1 MS
* concept.property[loinc_time_aspct].code only code
* concept.property[loinc_time_aspct].code = #TIME_ASPCT (exactly)
* concept.property[loinc_time_aspct].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* concept.property[loinc_time_aspct].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* concept.property contains loinc_system 0..1 MS
* concept.property[loinc_system] ^short = "Additional information supplied about each concept"
* concept.property[loinc_system] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* concept.property[loinc_system] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* concept.property[loinc_system].code 1..1 MS
* concept.property[loinc_system].code only code
* concept.property[loinc_system].code = #SYSTEM (exactly)
* concept.property[loinc_system].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* concept.property[loinc_system].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* concept.property contains loinc_scale_typ 0..1 MS
* concept.property[loinc_scale_typ] ^short = "Additional information supplied about each concept"
* concept.property[loinc_scale_typ] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* concept.property[loinc_scale_typ] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* concept.property[loinc_scale_typ].code 1..1 MS
* concept.property[loinc_scale_typ].code only code
* concept.property[loinc_scale_typ].code = #SCALE_TYP (exactly)
* concept.property[loinc_scale_typ].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* concept.property[loinc_scale_typ].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* concept.property contains loinc_method_typ 0..1 MS
* concept.property[loinc_method_typ] ^short = "Additional information supplied about each concept"
* concept.property[loinc_method_typ] ^definition = "A property defines an additional slot through which additional information can be provided about a concept."
* concept.property[loinc_method_typ] ^comment = "To cover through slices: Component, Property, Time, System, Scale, Method."
* concept.property[loinc_method_typ].code 1..1 MS
* concept.property[loinc_method_typ].code only code
* concept.property[loinc_method_typ].code = #METHOD_TYP (exactly)
* concept.property[loinc_method_typ].code ^short = "Identifies the property on the concepts, and when referred to in operations"
* concept.property[loinc_method_typ].code ^definition = "A code that is used to identify the property. The code is used internally (in CodeSystem.concept.property.code) and also externally, such as in property filters."
* concept.concept 0..0
* concept.concept ^short = "Child Concepts (is-a/contains/categorizes)"
* concept.concept ^definition = "Defines children of a concept to produce a hierarchy of concepts. The nature of the relationships is variable (is-a/contains/categorizes) - see hierarchyMeaning."
* concept.concept ^mustSupport = false


---

File: repos/HL7_SLASH_livd/input/fsh/codesystem-snomed-frag-uv-livd.fsh

Profile: LIVDCodeSystemFragmentSNOMED
Parent: http://hl7.org/fhir/StructureDefinition/CodeSystem
Id: codesystem-snomed-frag-uv-livd
Title: "LIVDCodeSystemFragmentSNOMED"
Description: "Profile on the CodeSystem resource to include the relevant information from SNOMED CT to enable the full mapping context without having to connect to a remote terminology service or other source of SNOMED CT terminology content."
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = false
* ^date = "2018-08-14"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/orders/index.cfm"
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* . ^short = "LIVDCodeSystemFragmentSNOMED"
* . ^mustSupport = false
* . ^mapping[0].identity = "rim"
* . ^mapping[0].map = "N/A"
* url 1..1 MS
* url only uri
* url = "http://snomed.info/sct" (exactly)
* url ^short = "& (Coding.system)"
* url ^definition = "& This is used in [Coding]{datatypes.html#Coding}.system."
* identifier 1..1 MS
* version 1..1 MS
* version ^short = "& (Coding.version)"
* version ^definition = "& This is used in [Coding]{datatypes.html#Coding}.version."
* name 1..1 MS
* title 1..1 MS
* status 1..1 MS
* experimental 0..0
* experimental ^mustSupport = false
* date ^mustSupport = false
* publisher 1..1 MS
* contact 0..0
* contact ^mustSupport = false
* description 0..0
* description ^alias[0] = "Scope"
* description ^alias[1] = "Purpose"
* description ^mustSupport = false
* description ^mapping[0].identity = "rim"
* description ^mapping[0].map = "N/A"
* useContext 0..0
* useContext ^mustSupport = false
* jurisdiction ^mustSupport = false
* purpose 0..0
* purpose ^mustSupport = false
* copyright 1..1 MS
* copyright ^comment = "... Sometimes, the copyright differs between the code system and the codes that are included. The copyright statement should clearly differentiate between these when required."
* caseSensitive 0..1
* caseSensitive only boolean
* caseSensitive = false (exactly)
* caseSensitive ^short = "If code comparison is case sensitive"
* caseSensitive ^definition = "If code comparison is case sensitive when codes within this system are compared to each other."
* caseSensitive ^comment = "If this value is missing, then it is not specified whether a code system is case sensitive or not. When the rule is not known, Postel's law should be followed: produce codes with the correct case, and accept codes in any case. This element is primarily provided to support validation software."
* caseSensitive ^mustSupport = false
* valueSet 0..0
* valueSet ^short = "Canonical URL for value set with entire code system"
* valueSet ^definition = "Canonical URL of value set that contains the entire code system."
* valueSet ^comment = "The definition of the value set SHALL include all codes from this code system, and it SHALL be immutable."
* valueSet ^mustSupport = false
* hierarchyMeaning 0..0
* hierarchyMeaning ^short = "grouped-by | is-a | part-of | classified-with"
* hierarchyMeaning ^definition = "The meaning of the hierarchy of concepts."
* hierarchyMeaning ^mustSupport = false
* compositional 0..0
* compositional ^short = "If code system defines a post-composition grammar"
* compositional ^definition = "True If code system defines a post-composition grammar."
* compositional ^comment = "Note that the code system resource does not define what the compositional grammar is, only whether or not there is one."
* compositional ^alias[0] = "grammar"
* compositional ^mustSupport = false
* versionNeeded 0..0
* versionNeeded ^short = "If definitions are not stable"
* versionNeeded ^definition = "This flag is used to signify that the code system has not (or does not) maintain the definitions, and a version must be specified when referencing this code system."
* versionNeeded ^comment = "Best practice is that code systems do not redefine concepts, or that if concepts are redefined, a new code system definition is created. But this is not always possible, so some code systems may be defined as 'versionNeeded'."
* versionNeeded ^mustSupport = false
* content 1..1 MS
* content only code
* content = #fragment (exactly)
* content ^short = "fragment"
* content ^definition = "This codes system profile contains the applicable subset of the LOINC codes used in the LIVD Catalog."
* supplements 0..0
* supplements ^mustSupport = false
* count 0..0
* count ^short = "Total concepts in the code system"
* count ^definition = "The total number of concepts defined by the code system. Where the code system has a compositional grammar, the count refers to the number of base (primitive) concepts."
* count ^comment = "The count of concepts defined in this resource cannot be more than this value, but may be less for several reasons - see the content value."
* count ^mustSupport = false
* filter 0..0
* filter ^short = "Filter that can be used in a value set"
* filter ^definition = "A filter that can be used in a value set compose statement when selecting concepts using a filter."
* filter ^mustSupport = false
* filter.code 1..1 MS
* filter.code ^short = "Code that identifies the filter"
* filter.code ^definition = "The code that identifies this filter when it is used in the instance."
* filter.description 0..1 MS
* filter.description ^short = "How or why the filter is used"
* filter.description ^definition = "A description of how or why the filter is used."
* filter.operator 1..* MS
* filter.operator ^short = "Operators that can be used with filter"
* filter.operator ^definition = "A list of operators that can be used with the filter."
* filter.value 1..1 MS
* filter.value ^short = "What to use for the value"
* filter.value ^definition = "A description of what the value for the filter should be."
* property 0..0
* property ^mustSupport = false
* concept 1..* MS
* concept ^short = "Concepts in the code system"
* concept ^definition = "Concepts that are in the code system. The concept definitions are inherently hierarchical, but the definitions must be consulted to determine what the meaning of the hierarchical relationships are."
* concept ^comment = "If this is empty, it means that the code system resource does not represent the content of the code system."
* concept.code 1..1 MS
* concept.code ^short = "Code that identifies concept"
* concept.code ^definition = "A code - a text symbol - that uniquely identifies the concept within the code system."
* concept.display 1..1 MS
* concept.display ^short = "Text to display to the user"
* concept.display ^definition = "A human readable string that is the recommended default way to present this concept to a user."
* concept.display ^comment = "This contains the LOINC Long Name."
* concept.definition 0..0
* concept.definition ^short = "Formal definition"
* concept.definition ^definition = "The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept."
* concept.definition ^mustSupport = false
* concept.designation 0..0
* concept.designation ^short = "Additional representations for the concept"
* concept.designation ^definition = "Additional representations for the concept - other languages, aliases, specialized purposes, used for particular purposes, etc."
* concept.designation ^requirements = "Many concept definition systems support multiple representations, in multiple languages, and for multiple purposes."
* concept.designation ^mustSupport = false
* concept.designation.language 0..1
* concept.designation.language ^short = "Human language of the designation"
* concept.designation.language ^definition = "The language this designation is defined for."
* concept.designation.language ^comment = "In the absence of a language, the resource language applies."
* concept.designation.language ^mustSupport = false
* concept.designation.use 0..1
* concept.designation.use ^short = "Details how this designation would be used"
* concept.designation.use ^definition = "A code that details how this designation would be used."
* concept.designation.use ^comment = "If no use is provided, the designation can be assumed to be suitable for general display to a human user."
* concept.designation.use ^mustSupport = false
* concept.designation.value 1..1
* concept.designation.value ^short = "The text value for this designation"
* concept.designation.value ^definition = "The text value for this designation."
* concept.designation.value ^mustSupport = false
* concept.property 0..0
* concept.property ^mustSupport = false
* concept.concept 0..0
* concept.concept ^mustSupport = false


---

File: repos/HL7_SLASH_livd/input/fsh/codesystem-vendor-result-frag-uv-livd.fsh

Profile: LIVDCodeSystemFragmentVendorResult
Parent: http://hl7.org/fhir/StructureDefinition/CodeSystem
Id: codesystem-vendor-result-frag-uv-livd
Title: "LIVDCodeSystemFragmentVendorResult"
Description: "Profile on the CodeSystem resource to include the relevant information from a manufacturer for their set of IVD Result Codes that are relevant to this LIVD catalog."
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = false
* ^date = "2018-08-14"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/orders/index.cfm"
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* . ^short = "LIVDCodeSystemFragmentVendorResult"
* . ^mustSupport = false
* . ^mapping[0].identity = "rim"
* . ^mapping[0].map = "N/A"
* url 1..1 MS
* url only uri
* url ^short = "& (Coding.system)"
* url ^definition = "& This is used in [Coding]{datatypes.html#Coding}.system."
* version ^short = "& (Coding.version)"
* version ^definition = "& This is used in [Coding]{datatypes.html#Coding}.version."
* name 1..1 MS
* title 1..1 MS
* status 1..1 MS
* experimental 0..0
* experimental ^mustSupport = false
* date ^mustSupport = false
* contact 0..0
* contact ^mustSupport = false
* description 0..0
* description ^alias[0] = "Scope"
* description ^alias[1] = "Purpose"
* description ^mustSupport = false
* description ^mapping[0].identity = "rim"
* description ^mapping[0].map = "N/A"
* useContext 0..0
* useContext ^mustSupport = false
* jurisdiction ^mustSupport = false
* purpose 0..0
* purpose ^mustSupport = false
* caseSensitive 0..1
* caseSensitive only boolean
* caseSensitive = false (exactly)
* caseSensitive ^mustSupport = false
* valueSet 0..0
* valueSet ^mustSupport = false
* hierarchyMeaning 0..0
* hierarchyMeaning ^mustSupport = false
* compositional 0..0
* compositional ^mustSupport = false
* versionNeeded 0..0
* versionNeeded ^mustSupport = false
* content 1..1 MS
* content only code
* content = #fragment (exactly)
* content ^short = "fragment"
* content ^definition = "This codes system profile contains the applicable subset of the IVD Vendor Result codes used in the LIVD Catalog."
* supplements 0..0
* supplements ^mustSupport = false
* count 0..0
* count ^mustSupport = false
* filter 0..0
* filter ^mustSupport = false
* property 0..0
* property ^mustSupport = false
* concept 1..* MS
* concept.code 1..1 MS
* concept.display 1..1 MS
* concept.display ^comment = "This contains the manufacturers result description (commonly will be the same as the code)."
* concept.definition 0..0
* concept.definition ^mustSupport = false
* concept.designation 0..0
* concept.designation ^mustSupport = false
* concept.property 0..0
* concept.property ^mustSupport = false
* concept.concept 0..0
* concept.concept ^mustSupport = false

---

File: repos/HL7_SLASH_livd/input/fsh/conceptmap-resultvalue-uv-livd.fsh

Profile: LIVDResultValueConceptMap
Parent: http://hl7.org/fhir/StructureDefinition/ConceptMap
Id: conceptmap-resultvalue-uv-livd
Title: "LIVDResultValueConceptMap"
Description: "ConceptMap profile for mappoings of manufacturer IVD result value codes to standard LOINC or SNOMED CT codes."
* ^version = "0.3.0"
* ^experimental = false
* ^date = "2018-08-14"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/orders/index.cfm"
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* . ^short = "LIVDResultValueConceptMap"
* . ^mustSupport = false
* . ^mapping[0].identity = "rim"
* . ^mapping[0].map = "N/A"
* url 0..1 MS
* identifier 0..0
* identifier ^mustSupport = false
* version 0..0
* version ^mustSupport = false
* name 1..1 MS
* title 0..0
* title ^mustSupport = false
* status 1..1 MS
* status ^comment = "Only \"Active\" must be supported as it reflects the time of publication.  Others are not valid for that."
* experimental 0..0
* experimental ^mustSupport = false
* date ^mustSupport = false
* publisher 0..0
* publisher ^mustSupport = false
* contact 0..0
* contact ^mustSupport = false
* description 0..0
* description ^mustSupport = false
* useContext 0..0
* useContext ^mustSupport = false
* jurisdiction ^mustSupport = false
* purpose 0..0
* purpose ^mustSupport = false
* copyright 0..0
* copyright ^mustSupport = false
* source[x] 1..1 MS
* source[x] ^comment = "This points to the manufacturer IVD Result Codes value set of the codes that are mapped to the suggested LOINC or SNOMED CT codes."
* target[x] 1..1 MS
* target[x] ^comment = "This points to the LIVD value set that contains the target LOINC or SNOMED CT codes (and their properties, if applicable), used to map the IVD result codes."
* group 1..2 MS
* group ^comment = "IVD result code mappings may be to either LOINC or SNOMED CT, or both."
* group.source 0..0
* group.source ^mustSupport = false
* group.sourceVersion 0..0
* group.sourceVersion ^mustSupport = false
* group.target 0..1 MS
* group.targetVersion 0..1 MS
* group.element 1..* MS
* group.element ^short = "Mappings for a Vendor Result Code from the source set"
* group.element ^definition = "Mappings for an individual Vendor Result Code in the source to one or more LOINC or SNOMED CT Codes in the target."
* group.element ^comment = "Generally an Vendor Result Code points to one or more LOINC or SNOMED CT Codes, but it is possible that a standard code does not exist yet."
* group.element.code 1..1 MS
* group.element.code ^short = "Identifies the Vendor Result Code being mapped"
* group.element.code ^definition = "Identity (code or path) of the Vendor Result Code being mapped."
* group.element.display 1..1 MS
* group.element.display ^short = "The Vendor Result Name"
* group.element.display ^definition = "The Vendor Result Name for the Vendor Result Code. The display is only provided to help editors when editing the concept map."
* group.element.target 0..* MS
* group.element.target ^short = "Identifies the LOINC or SNOMED CT code being mapped to"
* group.element.target ^definition = "A reference to the LOINC or SNOMED CT code being mapped to, including mapping criteria."
* group.element.target.code 1..1 MS
* group.element.target.code ^short = "Code that identifies the LOINC or SNOMED CT Code"
* group.element.target.code ^definition = "Identity (code or path) the LOINC or SNOMED CT Code that the map refers to."
* group.element.target.display 1..1 MS
* group.element.target.display ^short = "LOINC Long Name or SNOMED CT preferred description"
* group.element.target.display ^definition = "The LOINC Long Name or SNOMED CT preferred description for the code. The display is only provided to help editors when editing the concept map."
* group.element.target.equivalence 1..1 MS
* group.element.target.comment 0..1 MS
* group.element.target.comment ^short = "Vendor Comment"
* group.element.target.comment ^comment = "This provides the ability for the vendor for additional human readable clarifications to the Laboratory on how to consider mapping IVD Result Codes to LOINC or SNOMED CT codes."
* group.element.target.dependsOn 0..0
* group.element.target.dependsOn ^mustSupport = false
* group.element.target.product 0..0
* group.element.target.product ^mustSupport = false
* group.unmapped 0..0
* group.unmapped ^mustSupport = false
* group.unmapped.mode ^mustSupport = false
* group.unmapped.code ^mustSupport = false
* group.unmapped.display ^mustSupport = false
* group.unmapped.url ^mustSupport = false


---

File: repos/HL7_SLASH_livd/input/fsh/conceptmap-testcode-uv-livd.fsh

Profile: LIVDTestCodeConceptMap
Parent: http://hl7.org/fhir/StructureDefinition/ConceptMap
Id: conceptmap-testcode-uv-livd
Title: "LIVDTestCodeConceptMap"
Description: "ConceptMap profile for mappoings of manufacturer IVD test codes to standard LOINC codes."
* ^version = "0.3.0"
* ^experimental = false
* ^date = "2018-08-14"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/orders/index.cfm"
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* . ^short = "LIVDTestCodeConceptMap"
* . ^mustSupport = false
* . ^mapping[0].identity = "rim"
* . ^mapping[0].map = "N/A"
* url 0..1 MS
* identifier 0..0
* identifier ^mustSupport = false
* version 0..0
* version ^mustSupport = false
* name 1..1 MS
* title 0..0
* title ^mustSupport = false
* status 1..1 MS
* status ^comment = "Only \"Active\" must be supported as it reflects the time of publication.  Others are not valid for that."
* experimental 0..0
* experimental ^mustSupport = false
* date ^mustSupport = false
* publisher 0..0
* publisher ^mustSupport = false
* contact 0..0
* contact ^mustSupport = false
* description 0..0
* description ^mustSupport = false
* useContext 0..0
* useContext ^mustSupport = false
* jurisdiction ^mustSupport = false
* purpose 0..0
* purpose ^mustSupport = false
* copyright 0..0
* copyright ^mustSupport = false
* source[x] 1..1 MS
* source[x] ^comment = "This points to the set of ObservationDefinition resource instances for the device for which the IVD Test Codes are mapped to the suggested LOINC codes."
* target[x] 1..1 MS
* target[x] ^comment = "This points to the LIVD value set that contains the target LOINC codes and their properties, used to map the  IVD Test Codes."
* group 1..1 MS
* group ^comment = "Considering the scope is only IVD Test Code to LOINC, one group is sufficient."
* group.source 0..0
* group.source ^mustSupport = false
* group.sourceVersion 0..0
* group.sourceVersion ^mustSupport = false
* group.targetVersion 0..1 MS
* group.element 1..* MS
* group.element ^short = "Mappings for a Vendor Analyte Code from the source set"
* group.element ^definition = "Mappings for an individual Vendor Analyte Code in the source to one or more LOINC Codes in the target."
* group.element ^comment = "Generally an Vendor Analyte Code points to one or more LOINC Codes, but it is possible that a LOINC Code does not exist yet."
* group.element.code 1..1 MS
* group.element.code ^short = "Identifies the Vendor Analyte Code being mapped"
* group.element.code ^definition = "Identity (code or path) of the Vendor Analyte Code being mapped."
* group.element.display 1..1 MS
* group.element.display ^short = "The Vendor Analyte Name"
* group.element.display ^definition = "The Vendor Analyte Name for the Vendore Analyte Code. The display is only provided to help editors when editing the concept map."
* group.element.target 0..* MS
* group.element.target ^short = "Identifies the LOINC code being mapped to"
* group.element.target ^definition = "A reference to the LOINC code being mapped to, including mapping criteria."
* group.element.target.code 1..1 MS
* group.element.target.code ^short = "Code that identifies the LOINC Code"
* group.element.target.code ^definition = "Identity (code or path) the LOINC Code that the map refers to."
* group.element.target.display 1..1 MS
* group.element.target.display ^short = "LOINC Long Name"
* group.element.target.display ^definition = "The LOINC Long Name for the LOINC code. The display is only provided to help editors when editing the concept map."
* group.element.target.equivalence 1..1 MS
* group.element.target.comment 0..1 MS
* group.element.target.comment ^short = "Vendor Comment"
* group.element.target.comment ^comment = "This provides the ability for the vendor for additional human readable clarifications to the Laboratory on how to consider mapping IVD Test Codes to LOINC codes beyond the Result and Specimen descriptions in the dependsOn construct."
* group.element.target.dependsOn 0..4 MS
* group.element.target.dependsOn ^slicing.discriminator[0].type = #value
* group.element.target.dependsOn ^slicing.discriminator[0].path = "property"
* group.element.target.dependsOn ^slicing.rules = #open
* group.element.target.dependsOn ^comment = "Either .code or .display must be valued.\nThere must be both a specimen and result related description."
* group.element.target.dependsOn ^condition[0] = "livd-1"
* group.element.target.dependsOn ^constraint[0].key = "livd-1"
* group.element.target.dependsOn ^constraint[0].severity = #error
* group.element.target.dependsOn ^constraint[0].human = "If the dependsOn is valued, either the code or display must be present"
* group.element.target.dependsOn ^constraint[0].expression = "(group.element.target.dependsOn.exists() and (group.element.target.code.exists() or group.element.target.display.exists())) or group.element.target.dependsOn.empty()"
* group.element.target.dependsOn ^constraint[0].xpath = "(exists(f:group.element.target.dependsOn) and (exists(f:group.element.target.code) or exists(f:group.element.target.display))) or !exists(f:group.element.target.dependsOn)"
* group.element.target.dependsOn contains specimen 0..1 MS
* group.element.target.dependsOn[specimen] ^short = "The property for specimen"
* group.element.target.dependsOn[specimen].property 1..1 MS
* group.element.target.dependsOn[specimen].property only uri
* group.element.target.dependsOn[specimen].property = "specimen" (exactly)
* group.element.target.dependsOn[specimen].system 0..0
* group.element.target.dependsOn[specimen].system ^mustSupport = false
* group.element.target.dependsOn[specimen].value 1..1 MS
* group.element.target.dependsOn[specimen].value ^short = "Value of the specimen property"
* group.element.target.dependsOn[specimen].value ^definition = "This provides the coded representation of the description for the Specimen description."
* group.element.target.dependsOn[specimen].value ^comment = "This human readable description provides further information for use by the Lab staff to finalize the appropriate mapping of the analyte test code to the LOINC code for the specific device and purpose within that Lab."
* group.element.target.dependsOn[specimen].display 0..0
* group.element.target.dependsOn[specimen].display ^mustSupport = false
* group.element.target.dependsOn contains result 0..1 MS
* group.element.target.dependsOn[result] ^short = "The property for result"
* group.element.target.dependsOn[result].property 1..1 MS
* group.element.target.dependsOn[result].property only uri
* group.element.target.dependsOn[result].property = "result" (exactly)
* group.element.target.dependsOn[result].system 0..0
* group.element.target.dependsOn[result].system ^mustSupport = false
* group.element.target.dependsOn[result].value 1..1 MS
* group.element.target.dependsOn[result].value ^short = "Value of the result property"
* group.element.target.dependsOn[result].value ^definition = "This provides the coded representation of the description for the Result description."
* group.element.target.dependsOn[result].value ^comment = "This human readable description provides further information for use by the Lab staff to finalize the appropriate mapping of the analyte test code to the LOINC code for the specific device and purpose within that Lab."
* group.element.target.dependsOn[result].display 0..0
* group.element.target.dependsOn[result].display ^mustSupport = false
* group.element.target.dependsOn contains device 0..1 MS
* group.element.target.dependsOn[device] ^short = "The property for device"
* group.element.target.dependsOn[device].property 1..1 MS
* group.element.target.dependsOn[device].property only uri
* group.element.target.dependsOn[device].property = "device" (exactly)
* group.element.target.dependsOn[device].system 0..0
* group.element.target.dependsOn[device].system ^mustSupport = false
* group.element.target.dependsOn[device].value 1..1 MS
* group.element.target.dependsOn[device].value ^short = "Value of the device property"
* group.element.target.dependsOn[device].value ^definition = "This provides the coded representation of the description for the Device description."
* group.element.target.dependsOn[device].value ^comment = "This human readable description provides further information for use by the Lab staff to finalize the appropriate mapping of the analyte test code to the LOINC code for the specific device and purpose within that Lab."
* group.element.target.dependsOn[device].display 0..0
* group.element.target.dependsOn[device].display ^mustSupport = false
* group.element.target.dependsOn contains other 0..1 MS
* group.element.target.dependsOn[other] ^short = "The property for other"
* group.element.target.dependsOn[other].property 1..1 MS
* group.element.target.dependsOn[other].property only uri
* group.element.target.dependsOn[other].property = "other" (exactly)
* group.element.target.dependsOn[other].system 0..0
* group.element.target.dependsOn[other].system ^mustSupport = false
* group.element.target.dependsOn[other].value 1..1 MS
* group.element.target.dependsOn[other].value ^short = "Value of the other value property"
* group.element.target.dependsOn[other].value ^definition = "This provides the coded representation of the description for an additional dependency (not Specimen or Result) description."
* group.element.target.dependsOn[other].value ^comment = "This human readable description provides further information for use by the Lab staff to finalize the appropriate mapping of the analyte test code to the LOINC code for the specific device and purpose within that Lab."
* group.element.target.dependsOn[other].display 0..0
* group.element.target.dependsOn[other].display ^mustSupport = false
* group.element.target.product 0..0
* group.element.target.product ^mustSupport = false
* group.unmapped 0..0
* group.unmapped ^mustSupport = false
* group.unmapped.mode ^mustSupport = false
* group.unmapped.code ^mustSupport = false
* group.unmapped.display ^mustSupport = false
* group.unmapped.url ^mustSupport = false


---

File: repos/HL7_SLASH_livd/input/fsh/devicedefinition-uv-livd.fsh

Profile: LIVDDeviceDefinition
Parent: http://hl7.org/fhir/StructureDefinition/DeviceDefinition
Id: devicedefinition-uv-livd
Title: "LIVDDeviceDefinition"
Description: "Profile on the DeviceDefinition resource for representing the devices included in the LIVD catalog for which mappings are defined."
* ^version = "0.3.0"
* ^experimental = false
* ^date = "2018-08-14"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/orders/index.cfm"
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* ^mapping[0].identity = "rim"
* ^mapping[0].uri = "http://hl7.org/v3"
* ^mapping[0].name = "RIM Mapping"
* ^mapping[1].identity = "udi"
* ^mapping[1].uri = "http://fda.gov/UDI"
* ^mapping[1].name = "UDI Mapping"
* ^mapping[2].identity = "v2"
* ^mapping[2].uri = "http://hl7.org/v2"
* ^mapping[2].name = "HL7 v2 Mapping"
* ^mapping[3].identity = "w5"
* ^mapping[3].uri = "http://hl7.org/fhir/fivews"
* ^mapping[3].name = "FiveWs Pattern Mapping"
* . ^short = "LIVDDeviceDefinition"
* . ^mustSupport = false
* . ^mapping[0].identity = "rim"
* . ^mapping[0].map = "Device"
* identifier 0..0
* identifier ^mustSupport = false
* udiDeviceIdentifier 0..1 MS
* udiDeviceIdentifier ^comment = "In this profile only a type of device can be represented where the UDI only identifies the type of the device."
* udiDeviceIdentifier ^mapping[0].identity = "rim"
* udiDeviceIdentifier ^mapping[0].map = ".id and .code"
* udiDeviceIdentifier.deviceIdentifier 1..1 MS
* udiDeviceIdentifier.deviceIdentifier ^definition = "The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device."
* udiDeviceIdentifier.deviceIdentifier ^comment = "While the device identifier is a mandatory part of the UDI definition, for this profile the deviceidentifier does not need to be communicated.  If it is communicated, it is communicated here.  This would represent the device model/type at the level of granularity that the manufacturer believes is most appropriate to enable the best guidance to assist in the mapping for a particular device used in the Lab."
* udiDeviceIdentifier.deviceIdentifier ^alias[0] = "DI"
* udiDeviceIdentifier.deviceIdentifier ^mapping[0].identity = "v2"
* udiDeviceIdentifier.deviceIdentifier ^mapping[0].map = "OBX-18 (pre-V2.7) or PRT 10 or PRT-16 (V2.7 onward)"
* udiDeviceIdentifier.deviceIdentifier ^mapping[1].identity = "rim"
* udiDeviceIdentifier.deviceIdentifier ^mapping[1].map = "Role.id.extension"
* udiDeviceIdentifier.deviceIdentifier ^mapping[2].identity = "udi"
* udiDeviceIdentifier.deviceIdentifier ^mapping[2].map = "The device identifier (DI), a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device."
* udiDeviceIdentifier.issuer 1..1 MS
* udiDeviceIdentifier.issuer ^short = "UDI Issuing Organization"
* udiDeviceIdentifier.issuer ^definition = "Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include :\n1) GS1: \nhttp://hl7.org/fhir/NamingSystem/gs1-di, \n2) HIBCC:\nhttp://hl7.org/fhir/NamingSystem/hibcc-dI, \n3) ICCBBA for blood containers:\nhttp://hl7.org/fhir/NamingSystem/iccbba-blood-di, \n4) ICCBA for other devices:\nhttp://hl7.org/fhir/NamingSystem/iccbba-other-di."
* udiDeviceIdentifier.issuer ^requirements = "This field is required when Device.udi.deviceIdentifier is valued."
* udiDeviceIdentifier.issuer ^alias[0] = "Barcode System"
* udiDeviceIdentifier.issuer ^mapping[0].identity = "rim"
* udiDeviceIdentifier.issuer ^mapping[0].map = "Role.id.root"
* udiDeviceIdentifier.issuer ^mapping[1].identity = "udi"
* udiDeviceIdentifier.issuer ^mapping[1].map = "All UDIs are to be issued under a system operated by an Jurisdiction-accredited issuing agency.\nGS1 DIs: \n http://hl7.org/fhir/NamingSystem/gs1\nHIBCC DIs:\n http://hl7.org/fhir/NamingSystem/hibcc\nICCBBA DIs for blood containers:\n http://hl7.org/fhir/NamingSystem/iccbba-blood\nICCBA DIs for other devices:\n http://hl7.org/fhir/NamingSystem/iccbba-other"
* udiDeviceIdentifier.jurisdiction 1..1 MS
* udiDeviceIdentifier.jurisdiction ^short = "Regional UDI authority"
* udiDeviceIdentifier.jurisdiction ^definition = "The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace. with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi."
* udiDeviceIdentifier.jurisdiction ^requirements = "Allows a recipient of a UDI to know which database will contain the UDI-associated metadata."
* udiDeviceIdentifier.jurisdiction ^mapping[0].identity = "rim"
* udiDeviceIdentifier.jurisdiction ^mapping[0].map = "Role.scoper"
* manufacturer[x] 1..1 MS
* manufacturer[x] only string
* deviceName 0..0
* deviceName ^mustSupport = false
* deviceName.name ^mustSupport = false
* deviceName.type ^mustSupport = false
* modelNumber 1..1 MS
* modelNumber ^short = "Model id assigned by the manufacturer"
* modelNumber ^definition = "The \"model\" is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by all the devices sold as the same type.  This would represent the device model/type at the level of granularity that the manufacturer believes is most appropriate to enable the best guidance to assist in the mapping for a particular device used in the Lab."
* modelNumber ^comment = "The Device.model field is used to map the Device to the correct Concept Map (using ConceptMap.group.source) and IVD Test Code System (using CodeSystem.identifier)."
* modelNumber ^mapping[0].identity = "v2"
* modelNumber ^mapping[0].map = "OBX-18.1 (pre-V2.7) or PRT-10.1 (V2.7 onward)"
* modelNumber ^mapping[1].identity = "rim"
* modelNumber ^mapping[1].map = ".playedRole[typeCode=MANU].code"
* type 0..1 MS
* type from http://hl7.org/fhir/uv/livd/ValueSet/livd-device-type (extensible)
* type ^binding.description = "IVD device types for LIVD device definitions (extensible)."
* specialization 0..0
* specialization ^mustSupport = false
* specialization.systemType ^mustSupport = false
* specialization.version ^mustSupport = false
* version 0..0
* version ^mustSupport = false
* safety 0..0
* safety ^mustSupport = false
* shelfLifeStorage 0..0
* shelfLifeStorage ^mustSupport = false
* physicalCharacteristics 0..0
* physicalCharacteristics ^mustSupport = false
* languageCode 0..0
* languageCode ^mustSupport = false
* capability 1..* MS
* capability.extension contains http://hl7.org/fhir/uv/livd/StructureDefinition/ext-analyte named DeviceDefinitionExtensionAnalyte 1..* MS
* capability.type 1..1 MS
* capability.type ^comment = "removed \"DeviceCapabilityType (ObservationDefinition)\" from Value column."
* capability.description 0..0
* capability.description ^mustSupport = false
* property 0..0
* property ^mustSupport = false
* property.type ^mustSupport = false
* property.valueQuantity ^mustSupport = false
* property.valueCode ^mustSupport = false
* owner 0..0
* owner ^mustSupport = false
* contact 0..0
* contact ^mustSupport = false
* url 0..0
* url ^mustSupport = false
* onlineInformation 0..0
* onlineInformation ^mustSupport = false
* note 0..0
* note ^mustSupport = false
* quantity 0..0
* quantity ^mustSupport = false


---

File: repos/HL7_SLASH_livd/input/fsh/extensions.fsh

Extension: LIVDDevice
Id: ext-device
Title: "LIVD Device"
Description: "Add a reference from the ObservationDefinition to the Device."
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* ^context[0].type = #element
* ^context[0].expression = "ObservationDefinition"
* url = "http://hl7.org/fhir/uv/livd/StructureDefinition/ext-device" (exactly)
* valueReference 1..1
* valueReference only Reference(http://hl7.org/fhir/uv/livd/StructureDefinition/devicedefinition-uv-livd)

Extension: LIVDTestAnalyte
Id: ext-analyte
Title: "LIVD Test Analyte"
Description: "Add a reference from DeviceDefinition.capability to one or more ObservationDefinition resources representing test analytes that may be measured."
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* ^context[0].type = #element
* ^context[0].expression = "DeviceDefinition.capability"
* url = "http://hl7.org/fhir/uv/livd/StructureDefinition/ext-analyte" (exactly)
* valueReference 1..
* valueReference only Reference(http://hl7.org/fhir/uv/livd/StructureDefinition/observationdefinition-uv-livd)

Extension: LIVDVendorReferenceIdentifier
Id: ext-vendorReferenceIdentifier
Title: "LIVD Vendor Reference Identifier"
Description: "Add a vendor reference identifier to ObservationDefinition."
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* ^context[0].type = #element
* ^context[0].expression = "ObservationDefinition"
* url = "http://hl7.org/fhir/uv/livd/StructureDefinition/ext-vendorReferenceIdentifier" (exactly)
* valueIdentifier 1..1
* valueIdentifier only Identifier

Extension: LIVDRegion
Id: ext-region
Title: "LIVD Region"
Description: "Provides the region(s), such as country, state, continent, set of countries or states, where the LIVD Mapping Publication applies."
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* ^context[0].type = #element
* ^context[0].expression = "Composition"
* url = "http://hl7.org/fhir/uv/livd/StructureDefinition/ext-region" (exactly)
* valueCodeableConcept 1..1
* valueCodeableConcept only CodeableConcept


---

File: repos/HL7_SLASH_livd/input/fsh/observationdefinition-uv-livd.fsh

Profile: LIVDObservationDefinition
Parent: http://hl7.org/fhir/StructureDefinition/ObservationDefinition
Id: observationdefinition-uv-livd
Title: "LIVDObservationDefinition"
Description: "Profile on the ObservationDefinition resource for representing the analytes that can be measured by the included devices for which the test codes and applicable result values are mapped."
* ^version = "0.3.0"
* ^experimental = false
* ^date = "2018-08-14"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/orders/index.cfm"
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* . ^short = "LIVDObservationDefinition"
* . ^comment = "An instance of this resource informs the consumer of a health-related service (such as a lab diagnostic test or panel) about how the observations used or produced by this service will look like."
* . ^mustSupport = false
* . ^mapping[0].identity = "v2"
* . ^mapping[0].map = "OM2\nOM3\nOMC"
* . ^mapping[1].identity = "rim"
* . ^mapping[1].map = "Observation[classCode=OBS, moodCode=DEF]"
* extension ..* MS
* extension ^slicing.discriminator[0].type = #value
* extension ^slicing.discriminator[0].path = "url"
* extension ^slicing.rules = #open
* extension contains http://hl7.org/fhir/uv/livd/StructureDefinition/ext-device named ObservationDefinitionDevice 1..* MS
* extension contains http://hl7.org/fhir/uv/livd/StructureDefinition/ext-vendorReferenceIdentifier named ObservationDefinitionVendorReferenceIdentifier 0..1 MS
* extension[ObservationDefinitionVendorReferenceIdentifier] ^comment = "Provides an alternate reference identifier by which the IVD Test is known.  Only the identifier.value is required."
* category 0..0
* category only CodeableConcept
* category ^definition = "A code that classifies the general type of observation."
* category ^comment = "In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once. The level of granularity is defined by the category concepts in the value set."
* category ^requirements = "Used for filtering what observations are retrieved and displayed."
* category ^alias[0] = "Class of observation"
* category ^mustSupport = false
* category ^mapping[0].identity = "rim"
* category ^mapping[0].map = ".outboundRelationship[typeCode=\"COMP].target[classCode=\"LIST\", moodCode=\"DEF\"].code"
* code 1..1 MS
* code only CodeableConcept
* code ^definition = "Describes what will be observed. Sometimes this is called the observation \"name\"."
* code ^comment = "Contains both the IVD Test Code and Name of the analyte."
* code ^requirements = "Knowing what kind of observation is being made is essential to understanding the observation."
* code ^alias[0] = "Name"
* code ^mapping[0].identity = "v2"
* code ^mapping[0].map = "OM1-2"
* code ^mapping[1].identity = "rim"
* code ^mapping[1].map = "code"
* identifier 0..* MS
* permittedDataType 0..1 MS
* permittedDataType only code
* permittedDataType ^definition = "data type allowed for the result of the observation."
* permittedDataType ^mapping[0].identity = "v2"
* permittedDataType ^mapping[0].map = "OM1-3"
* multipleResultsAllowed 0..0
* multipleResultsAllowed only boolean
* multipleResultsAllowed ^definition = "Multiple results allowed for this kind of observation."
* multipleResultsAllowed ^mustSupport = false
* method 0..1 MS
* method only CodeableConcept
* method ^definition = "The method or technique used to perform the observation."
* method ^comment = "Only used if not implicit in observation code."
* method ^requirements = "In some cases, method can impact results."
* method ^mapping[0].identity = "v2"
* method ^mapping[0].map = "OM1-14"
* method ^mapping[1].identity = "rim"
* method ^mapping[1].map = "methodCode"
* preferredReportName 0..0
* preferredReportName only string
* preferredReportName ^definition = "The preferred name to be used when reporting the results of this observation."
* preferredReportName ^mustSupport = false
* preferredReportName ^mapping[0].identity = "v2"
* preferredReportName ^mapping[0].map = "OM1-9"
* quantitativeDetails 0..1 MS
* quantitativeDetails ^definition = "Characteristics for quantitative results of this observation."
* quantitativeDetails ^mapping[0].identity = "v2"
* quantitativeDetails ^mapping[0].map = "OM2"
* quantitativeDetails.customaryUnit 0..1 MS
* quantitativeDetails.customaryUnit only CodeableConcept
* quantitativeDetails.customaryUnit ^definition = "Customary unit used to report quantitative results of this observation."
* quantitativeDetails.customaryUnit ^mapping[0].identity = "v2"
* quantitativeDetails.customaryUnit ^mapping[0].map = "OM2-2"
* quantitativeDetails.unit 0..1 MS
* quantitativeDetails.unit only CodeableConcept
* quantitativeDetails.unit ^definition = "SI unit used to report quantitative results of this observation."
* quantitativeDetails.unit ^mapping[0].identity = "v2"
* quantitativeDetails.unit ^mapping[0].map = "OM2-4"
* quantitativeDetails.conversionFactor 0..1 MS
* quantitativeDetails.conversionFactor only decimal
* quantitativeDetails.conversionFactor ^short = "SI unit to customary unit conversion factor"
* quantitativeDetails.conversionFactor ^definition = "Factor for converting value expressed with SI unit to value expressed with customary unit."
* quantitativeDetails.conversionFactor ^mapping[0].identity = "v2"
* quantitativeDetails.conversionFactor ^mapping[0].map = "OM2-5"
* quantitativeDetails.decimalPrecision 0..1 MS
* quantitativeDetails.decimalPrecision only integer
* quantitativeDetails.decimalPrecision ^definition = "number of digits after decimal separator when the results of this observation are of type Quantity."
* quantitativeDetails.decimalPrecision ^mapping[0].identity = "v2"
* quantitativeDetails.decimalPrecision ^mapping[0].map = "OM2-3"
* qualifiedInterval 0..0
* qualifiedInterval ^definition = "Reference range for ordinal and continuous observations."
* qualifiedInterval ^requirements = "multiple reference ranges, for different patient contexts."
* qualifiedInterval ^mustSupport = false
* qualifiedInterval ^mapping[0].identity = "v2"
* qualifiedInterval ^mapping[0].map = "OM2-6"
* qualifiedInterval.category 0..1
* qualifiedInterval.category only code
* qualifiedInterval.category ^mustSupport = false
* qualifiedInterval.range 0..1
* qualifiedInterval.range only Range
* qualifiedInterval.range ^definition = "The value and associated unit of the low bound (inclusive) of the reference range."
* qualifiedInterval.range ^requirements = "The unit may be not relevant for ordinal values. In case it is there, it is the same as SIunit or customaryUnit."
* qualifiedInterval.range ^mustSupport = false
* qualifiedInterval.range ^mapping[0].identity = "v2"
* qualifiedInterval.range ^mapping[0].map = "OM2-6.1.1"
* qualifiedInterval.context 0..1
* qualifiedInterval.context only CodeableConcept
* qualifiedInterval.context ^definition = "Codes to indicate what part of the targeted reference population it applies to. For example, the normal or therapeutic range."
* qualifiedInterval.context ^comment = "normal range is the default."
* qualifiedInterval.context ^requirements = "what kind of reference range this is - normal, recommended, therapeutic, etc., - for proper interpretation."
* qualifiedInterval.context ^mustSupport = false
* qualifiedInterval.context ^mapping[0].identity = "v2"
* qualifiedInterval.context ^mapping[0].map = "n.a."
* qualifiedInterval.appliesTo 0..*
* qualifiedInterval.appliesTo only CodeableConcept
* qualifiedInterval.appliesTo ^definition = "Codes to indicate the target population this reference range applies to."
* qualifiedInterval.appliesTo ^comment = "If this element is not present then the global population is assumed."
* qualifiedInterval.appliesTo ^requirements = "target population (male, female, pregnancy, a specific race …."
* qualifiedInterval.appliesTo ^mustSupport = false
* qualifiedInterval.appliesTo ^mapping[0].identity = "v2"
* qualifiedInterval.appliesTo ^mapping[0].map = "OM2-6.2 OM2-6.6"
* qualifiedInterval.gender 0..1
* qualifiedInterval.gender only code
* qualifiedInterval.gender ^mustSupport = false
* qualifiedInterval.age 0..1
* qualifiedInterval.age only Range
* qualifiedInterval.age ^definition = "The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so."
* qualifiedInterval.age ^requirements = "Some analytes vary greatly over age."
* qualifiedInterval.age ^mustSupport = false
* qualifiedInterval.age ^mapping[0].identity = "v2"
* qualifiedInterval.age ^mapping[0].map = "OM2-6.3"
* qualifiedInterval.gestationalAge 0..1
* qualifiedInterval.gestationalAge only Range
* qualifiedInterval.gestationalAge ^definition = "The gestational age at which this reference range is applicable, in the context of pregnancy."
* qualifiedInterval.gestationalAge ^mustSupport = false
* qualifiedInterval.gestationalAge ^mapping[0].identity = "v2"
* qualifiedInterval.gestationalAge ^mapping[0].map = "OM2-6.4"
* qualifiedInterval.condition 0..1
* qualifiedInterval.condition only string
* qualifiedInterval.condition ^definition = "Text based condition for which the reference range is valid."
* qualifiedInterval.condition ^mustSupport = false
* qualifiedInterval.condition ^mapping[0].identity = "v2"
* qualifiedInterval.condition ^mapping[0].map = "OM2-6.7"
* validCodedValueSet 0..1 MS
* validCodedValueSet only Reference(http://hl7.org/fhir/StructureDefinition/ValueSet)
* validCodedValueSet ^definition = "The set of valid coded results for the observation."
* validCodedValueSet ^mapping[0].identity = "v2"
* validCodedValueSet ^mapping[0].map = "OM3-3"
* normalCodedValueSet 0..0
* normalCodedValueSet only Reference(http://hl7.org/fhir/StructureDefinition/ValueSet)
* normalCodedValueSet ^definition = "The set of normal coded results for the observation."
* normalCodedValueSet ^mustSupport = false
* normalCodedValueSet ^mapping[0].identity = "v2"
* normalCodedValueSet ^mapping[0].map = "OM3-4"
* abnormalCodedValueSet 0..0
* abnormalCodedValueSet only Reference(http://hl7.org/fhir/StructureDefinition/ValueSet)
* abnormalCodedValueSet ^definition = "The set of abnormal coded results for the observation."
* abnormalCodedValueSet ^mustSupport = false
* abnormalCodedValueSet ^mapping[0].identity = "v2"
* abnormalCodedValueSet ^mapping[0].map = "OM3-5"
* criticalCodedValueSet 0..0
* criticalCodedValueSet only Reference(http://hl7.org/fhir/StructureDefinition/ValueSet)
* criticalCodedValueSet ^definition = "The set of critical coded results for the observation."
* criticalCodedValueSet ^mustSupport = false
* criticalCodedValueSet ^mapping[0].identity = "v2"
* criticalCodedValueSet ^mapping[0].map = "OM3-6"


---

File: repos/HL7_SLASH_livd/input/fsh/valueset-uv-livd.fsh

Profile: LIVDValueSet
Parent: http://hl7.org/fhir/StructureDefinition/ValueSet
Id: valueset-uv-livd
Title: "LIVDValueSet"
Description: "LIVD value set profile."
* ^version = "0.3.0"
* ^status = #draft
* ^experimental = false
* ^date = "2020-12-15"
* ^publisher = "HL7 International - Orders and Observations Work Group"
* ^contact[0].telecom[0].system = #url
* ^contact[0].telecom[0].value = "http://hl7.org/Special/committees/orders/index.cfm"
* ^jurisdiction[0].coding[0].system = "http://unstats.un.org/unsd/methods/m49/m49.htm"
* ^jurisdiction[0].coding[0].code = #001
* . ^short = "LIVDValueSet"
* url 1..1 MS
* identifier 0..0
* version 1..1 MS
* name 1..1 MS
* status 1..1 MS
* experimental 0..0
* publisher 0..0
* contact 0..0
* useContext 0..0
* immutable 0..0
* purpose 0..0
* copyright 0..0
* compose 1..1 MS
* compose.lockedDate 0..0
* compose.inactive 0..0
* compose.include 1..* MS
* compose.include.system 1..1 MS
* compose.include.version 0..1 MS
* compose.include.concept 1..* MS
* compose.include.concept.code 1..1 MS
* compose.include.concept.display 1..1 MS
* compose.include.concept.designation 0..0
* compose.include.filter 0..0
* compose.include.valueSet 0..0
* compose.exclude 0..0
* expansion 0..0


---

File: repos/HL7_SLASH_livd/input/pagecontent/acknowledgements.md

The LIVD Implementation Guide is the result of a combined IICC and HL7 project team to express the content into FHIR profiles. The following individuals supported creating this guide:

* Hans Buitendijk - Oracle Health
* Rob Hausam - Hausam Consulting
* Ed Heierman - Abbott
* Ralf Herzog - Roche
* Riki Merrick - Association of Public Health Laboratories
* JD Nolen - Children's Mercy Hospital
* Andrea Pitkus
* Dan Rutz - Epic
* Kathy Walsh - LabCorp
* Pam Banning - 3M
* David Burgess - LabCorp
* Ron van Duyne - CDC
* In Memoriam: Michael Waters - FDA

The Food and Drug Administration (FDA ) supports the development and use of the LIVD Implementation Guide.

The FDA recognized that with the increasing implementation of electronic health records (EHR), there has been a greater demand to standardize the way that in vitro diagnostic (IVD) tests are coded. Efforts to harmonize and standardize information captured and stored in electronic healthcare systems carry important implications for public health, including expediting access to patient diagnostic information for healthcare providers, reducing burdens on laboratories for connecting new diagnostic systems to Laboratory Information Systems (LIS), and facilitating the use of healthcare information for decision support tools, in addition to many more potential uses.

At present, LOINC is the IVD coding system that is most widely used by clinical laboratories and EHRs, and is the IVD coding standard recommended by the Office of the National Coordinator for Health Information Technology (ONC) in the U.S. Department of Health and Human Services (HHS) as an essential part of meaningful use. LOINC is a partially FDA-recognized consensus standard, where the recognition is limited to IVD tests.

FDA strongly supports the use of an FDA-recognized consensus standard as the mechanism to communicate or disseminate the LOINC codes provided by manufacturers . The LOINC transmission document for IVDs (LIVD) standard is one standard explicitly developed for this purpose by the IVD Industry Connectivity Consortium (IICC), and can be found at the following location: [http://ivdconnectivity.org/livd/](http://ivdconnectivity.org/livd/). The LIVD Implementation Guide is based on this work.

The development of the LIVD Specification and Implementation Guide was an international effort, as highlighted by the involvement of the following organizations:

* IVD Industry Connectivity Consortium (IICC)
* FDA
* CDC
* NLM
* CMS
* ONC
* IHE Pathology and Laboratory Medicine (PaLM) Technical Committee
* Phast
* LIS vendors
    * Epic
    * LabCorp
    * Oracle Health Corporation
    * Orchard Software
* IVD instrument manufacturers
    * Abbott Laboratories
    * Becton Dickenson
    * bioMerieux
    * Roche Diagnostics International, Ltd
    * Siemens
    * Swiss Laboratory Interoperability Interest Group (Joint Venture of FAMH.ch, IHE-Suisse.ch, HL7.ch, SULM.ch)
    * 3M


---

File: repos/HL7_SLASH_livd/input/pagecontent/CodeSystem-loinc-fragment-livd-intro.md

### Description

The *LOINC CodeSystem fragment for LIVD* CodeSystem resource contains the subset of LOINC codes that will be used in this LIVD bundle instance, based on the specific devices and LOINC mappings that are included.  This content is replicated in this CodeSystem resource instance to provide the source for all of the needed content fully contained within the LIVD bundle.

---

File: repos/HL7_SLASH_livd/input/pagecontent/downloads.md

### Links

This implementation guide is web-based and is intended to be browsed online.  However, for the convenience of implementers, both this implementation guide, various sub-packages of it and some of the source specifications are available for download.

* This [full IG](full-ig.zip)
* The [R4](definitions.json.zip) resource definitions from this IG
* The FHIR [R4]({{site.data.fhir.path}}fhir-spec.zip) specification
* The FHIR [R4]({{site.data.fhir.path}}definitions.json.zip) definitions (value sets, profiles, etc.)
* A [validator](https://github.com/hapifhir/org.hl7.fhir.core/releases/latest/download/validator_cli.jar) that can be used to check FHIR resource instance validity 
* The [R4](https://hl7.org/fhir/R4/hl7.fhir.r4.core.tgz) NPM package that can be used with that validator

<!-- Todo: SMART App, reference implementations --> 

---

File: repos/HL7_SLASH_livd/input/pagecontent/general-concepts.md

The basic structure that the LIVD Publication must support is based on the **_[Digital Format for Publication of LOINC to Vendor IVD Test Results](https://ivdconnectivity.org/wp-content/uploads/2024/01/2021_02_28_-_IICC_LIVD_Digital_Format_V2.pdf)_** as published by [IICC](https://ivdconnectivity.org/) - IVD Industry Connectivity Consortium. It can be represented as follows:

![LIVD Publication Structure](Publication_Structure - Version 2.jpg)

The implementation guide supports the following mappings:

<h3> IVD Test Performed </h3>
<ul>
     <li> A publication is typically for one vendor's devices, but it is possible to combine information from multiple vendors into an aggregate publication.
     </li>
     <li> One <b><i>IVD Test Performed</i></b> to zero or many <b><i>LOINC</i></b>s </li>
         <ul>
             <li> Depending on the context of the result, specimen, or other qualification, the same IVD Test Performed can be mapped to different suggested LOINC codes as also shown in the example in Section 2.1 [general-summary.html#example-1-%E2%80%93-glucose] and 2.2 [general-summary.html#example-2-total-protein-csf-urine] .  An example may be that an IVD Test Performed for serum glucose could map to one LOINC code considering a mass concentration (e.g. mg/dL) or another LOINC considering a substance concentration (e.g. mol/L). Or, a urine albumin could map to one LOINC code for a 24 hour excretion rate with units of mg/(24.h), versus another LOINC code for a random urine with unit of md/dL.</li>
             <li> It is also possible that a LOINC code is not yet known or available at the time of the LIVD Publication, thus it is possible to not indicate any mapping.</li>
         </ul>
     <li> One <b><i>LOINC</i></b> to zero or many vendor <b><i>IVD Test Performed</i></b></li>
         <ul>
             <li> Having a LOINC code mapped to by multiple IVD Test Performed for a given device is less likely, but having the same LOINC code referenced by difference IVD Test Performed for different Vendor Equipment, certainly by different vendors, is very common.</li>
                  <ul>
                     <li> For example, an IVD instrument may distinguish stat tests from routine tests by the IVD Test Performed's vendor analyte code. In this case, the LOINC [13969-1] Creatine kinase.MB [Mass/volume] in Serum or Plasma is associated with two IVD Test Performed, depending if the test is routine or stat (prioritized).</li>
                     <li> Or, consider a susceptibility test that has different IVD Test Performed IDs based on the original specimen source. In this case, the LOINC [6932-8] Penicillin [Susceptibility] by Minimum inhibitory concentration (MIC), which is named for testing on the isolate, could be associated with multiple IVD Test Performed for one IVD Instrument depending on the clinical context. For example, the break points are different for suspected meningitis versus blood infections and to date LOINC has only distinguished test codes by suspected source of infection for some antibiotic susceptibility codes.</li>
                 </ul>
        </ul>
     <li> The IVD Test Map enable these many to many mappings, also considering that there may not be a suggested LOINC code for a particular IVD Test Performed, or clearly that not every LOINC code is related to an IVD Test Performed.</li>
</ul>

<h3> IVD Coded Result Values </h3>
<ul>
     <li> One vendor <b><i>IVD Test Performed</i></b> to zero or many <b><i>IVD Coded Result Values</i></b>.</li>
          <ul>
                <li> When an IVD Test Performed represents a non-quantititative test, then there would be one or more coded result values that are used to result on the test.</li>
          </ul>
     <li> One <b><i>IVD Coded Result Value</i></b> to zero or many <b><i>LOINC</i></b> or <b><i>SNOMED codes</i></b></li>
          <ul>
               <li> The IVD Coded Result Value may have a corresponding LOINC and/or SNOMED code.</li>
               <li> While the IVD Coded Result Value could be represented in LOINC and SNOMED, the intent is not that a particular configuration mixes both coding approaches for the specific IVD Test's IVD Coded Result Values.  Rather it should use one encoding or the other.  The LIVD Publication allows for documenting both to enable the LIS to make that choice.</li>
          </ul>
</ul>


---

File: repos/HL7_SLASH_livd/input/pagecontent/general-definitions.md

The following provides the specific definitions for each of the data elements relevant to LIVD.

We encourage the use of GUIDs (Globally Unique IDentifier) for identifiers to enable consumers and aggregators of LIVD Catalogs to easily merge and identify duplicates.

<h3> LIVD Publication </h3>
This information that describes the overall LIVD publication is expressed through the [LIVD Catalog](StructureDefinition-catalog-uv-livd.html) profile, including:

* **_Publisher_** is the entity publishing the mapping information.
* **_Publication Version ID_** is human-readable information provided by the vendor that can be used to differentiate LIVD Publication versions.
* **_LOINC Version ID_** is the version of LOINC that was used for the mapping.
* The **_[LOINC License](https://loinc.org/license/)_** requires a statement of attribution and notice that LOINC content is copyrighted.
* **_LOINCCopyright_** component holds the required attribution statement.
* **_Localization_** is the language used for this LIVD Publication.
* **_Region_** is an optional vendor description for which geographic or administrative region this localization is valid, e.g.  de-CH (German (Switzerland)) is self-explanatory, but not en-CH (English (Switzerland)).

<h3> Equipment </h3>
The equipment elements are expressed through the [LIVD Device Definition](StructureDefinition-devicedefinition-uv-livd.html) profile, including:

* **_Manufacturer_** is the name of the manufacturer of the device.
* **_Model_** is the model of the device as provided by the manufacturer.
* **_UID_** is the unique device identifier, that may be the one used in the Unique Device Identifier (UDI) constructs.
* **_UID Type_** is capable of supporting the unique device identification system to identify medical devices through their distribution and use. When fully implemented, the label of most devices will include a unique device identifier (UDI) in human- and machine-readable form.

Note that types and cardinality are aligned with values reported in the Integrating the Healthcare Enterpires (IHE) [Laboratory Analytical Workflow (LAW) Profile](https://www.ihe.net/resources/technical_frameworks/#PaLM) OBX-18 Equipment Instance Identifier.

<h3> IVD Test Performed </h3>

The IVD Test Performed attributes are aligned with obvservation definition attributes and expressed using the [LIVD Observation Definition](StructureDefinition-observationdefinition-uv-livd.html) profile.

<ul>
     <li> <b><i>Vendor Analyte Code</i></b> is one of two possible values:
         <ul>
             <li> For an automated test result, it contains <b><i>Vendor Transmission Code</i></b> used by the instrument when sending the test result to a health information system, such as an LIS.</li>
             <li> For a manual test result, it is the <b><i>Vendor Analyte Identifier</i></b> for the test result produced by the Test Kit.</li>
         </ul>
     </li>
     <li> <b><i>Vendor Analyte Name</i></b> is human-readable text the vendor used to identify the analyte. The text might be displayed by the instrument or could be used within an assay insert.</li>
     <li> <b><i>Vendor Reference ID</i></b> is an additional vendor identifier, such as an identifier that can be used to locate the associated assay insert published by the vendor.</li>
</ul>

Additionally, various details on the Observation Definition that can aid in the mapping from the IVD Test Performed's Vendor Analyte Code to a LOINC are included as optional attributes, even though not referenced in the original [IICC white paper](http://ivdconnectivity.org/wp-content/uploads/delightful-downloads/2017/06/IICC_LIVD_Digital_Format_2017_06_01_R2.pdf).

<h3> IVD Test Performed - LOINC Mapping </h3>

The potential mappings of the IVD Test Performed's Vendor Analyte Code to LOINC code are captured in the [LIVD Test Concept Map](StructureDefinition-conceptmap-testcode-uv-livd.html) profile.  For each IVD Test Performed's Vendor Analyte Code and a suggested LOINC code, the following attributes are captured.

<ul>
     <li> <b><i>Vendor Specimen Description</i></b> is human-readable text that provides information about the specimen used for the test, such as “Serum or Plasma.” The field is used to document the vendor description of the specimen used for the IVD Test Performed.</li>
     <li> <b><i>Vendor Result Description</i></b> is human-readable text that provides information about the result that is produced.
         <ul>
             <li> For non-numeric results, this field should describe the result by including one of the following:
                 <ul>
                     <li> <b>Binary</b> – pos/neg, reactive/non-reactive.</li>
                     <li> <b>Ordinal</b> – none, few, many.</li>
                     <li> <b>Nominal</b> – the test can report none found or one or more possibilities from a taxonomy of choices, such as organism names.</li>
                 </ul>
             </li>
             <li> Numeric results and associated units of measure:
                 <ul>
                     <li> For numeric results, this field should describe the result by including a representative unit of measure, preferably represented as a UCUM unit.</li>
                     <li> If one unit of measure is reported, then include it in this field.</li>
                     <li> If multiple units can be reported that can be converted to one another by a multiplicative scale factor independent of the analyte (such as mg/L and ug/dL), select one of the units as a representative unit.</li>
                     <li> If multiple units can be reported that cannot be converted by an analyte-independent scale factor (such as mol/L and as mg/L), then define a mapping for each unit. These different types of numeric results require their own LOINC codes – one for the test reported as molar concentration and one for the test reported as mass concentration. Similarly, the results of a urine analyte (e.g. Sodium) reported as either mmol/L (spot urine) versus mmol/(24.h) (24 hour urine) have different LOINC properties and map to two different LOINC codes. The same is true for viral loads which can be reported in units of copies/mL, Log (copies/mL), IU/mL and Log (IU)/mL; and none of which can be converted by a simple scale factor. These result types have different properties and thus different LOINC codes. In such cases, define a mapping for all units that are appropriate for this IVD Test Performed.</li>
                      <li> In some cases, the same IVD Test Performed may be reported as a <b>Binary</b> result, or a spot numeric result of the mass concentration, etc. In such instances, the same <b><i>LIVD Test Performed</i></b> will map to multiple LOINCs. The Vendor Result Description should be used to assist the laboratory in manually selecting the appropriate LOINC for their laboratory.</li>
                 </ul>
             </li>
         </ul>
     </li>
     <li> <b><i>Vendor Comment</i></b> is human-readable text clarification, such as “This is a STAT (prioritized) version of the test”. </li>
</ul>

Note that **_Vendor Specimen Description_**, **_Vendor Result Description_**, and **_Vendor Comment_** are included to assist a laboratory in selecting the appropriate LOINC code(s) for the vendor IVD Test Performed used by the laboratory. This information is not intended to be parsed by an IVD Software System that automates the mapping of vendor IVD transmission codes to LOINC codes. The inclusion of this information should reduce errors in the manual selection of LOINC codes by a laboratory.

<h3> LOINC Code System </h3>
For each of the LOINC codes being considered, a minimum set from the code system is included to further aid in the mapping process.  These are included in the [LIVD LOINC Fragment CodeSystem](StructureDefinition-codesystem-loinc-frag-uv-livd.html) profile.

* **_LOINC Code_**
* **_LOINC Long Name_**
* **_Component_**
* **_Property_**
* **_Time_**
* **_System_**
* **_Scale_**
* **_Method_**

<h3> Sample Data </h3>
As part of defining the whitepaper, IICC also developed a spreadsheets that contains the relevant data and a potential representation of that data that can be found [here](https://ivdconnectivity.org/livd/).


---

File: repos/HL7_SLASH_livd/input/pagecontent/general-implementation.md

<h3> Workflow Considerations </h3>
The main goal of this IG is the definition of the proper data exchange format. The following provides a general process context from the initial creation of the LIVD Catalog and its use by the laboratory.

The device manufacturer creates the LIVD mappings based on their intended use of IVD Test Performed and Coded Result Values relative to the appropriate LOINC and/or SNOMED codes.  The manufacturer is expected to make the LIVD Catalog available in accordance with this LIVD IG defined format.
The FHIR-based LIVD Catalog mwy actually be generated from a spreadsheet based mapping based on the LOINC transmission document for IVDs (LIVD) standard, which is a standard explicitly developed for this purpose by the IVD Industry Connectivity Consortium (IICC).  They may use their own spreadsheet formats as well.

The manufacturer may provide the LIVD Catalog using any of the following methods and may include a spreadsheet format as well for human readability when not used in its electronic form by the receiver:

* includes the LIVD Catalog in whole or in part (e.g., specific to the device) as an electronic insert to the device's electronic documentation
* makes the LIVD Catalog accessable as a downloadable file on the manufacturer's site in whole across all their devices, or in parts for each of their devices.
* enables a FHIR based API, with or without a subscription capability enabling notification when content changes

An intermediary organization may gather LIVD catalogs from multiple vendors and makes those available through a library that laboratories and/or LIS systems can access.

A laboratory may receive the LIVD Catalog in varying forms, directly from the manufacturer or through an intermediary party:

* laboratory staff accesses the manufacturer's website to download the most current version when they configure a new device
* laboratory staff uses the LIVD catalog included in the device's package insert that came with the device
* the LIS queries for the LIVD catalog entries for the device being configured and either displays the mappings, or may suggest a mapping based on other information available in the LIS for the device and intended tests at hand

<h3> Display Considerations </h3>
When the receiver is an electronic system, LIS or otherwise, it will determine how best to display the content to the user to aid in their configuration of LIS test codes and the use of LOINC and/or SNOMED. When displaying the information one must consider the relevant data to assist in the mapping.  We provide the following guidance for consideration:

<ul>
   <li> General </li>
     <ul>
       <li> Whenever external code systems are being displayed (e.g. LOINC and SNOMED CT) care should be taken to follow the rules in the respective license agreement.  For LOINC see <a href="https://loinc.org/license/">this guidance</a>.  For SNOMED see <a href="https://www.snomed.org/snomed-ct/get-snomed">this guidance</a>. One may want to link to the proper web page, or make otherwise easily accessible.</li>
       <li> Whenever the information is made available in multiple languages, one may make alternate languages available from the default language for the laboratory.</li>
     </ul>
   <li> Test Codes </li>
     <ul>
       <li> IVD Test Performed  </li>
          <ul>
            <li> IVD Test Performed, particularly when presented from a multi-vendor catalog, should clearly be associated and recognized as belonging to a specific device model (including equipment UID and type), and the device vendor.</li>
         </ul>
       <li> LOINC Code(s)  </li>
          <ul>
            <li> For each of the suggested LOINC codes for the IVD Test Performed, one should display the LOINC long name and the vendor descriptions of results, specimen, and other comments together, while the applicable LOINC part information should be directly displayed or easily accessible as well.  </li>
          </ul>
      </ul>  
<li> Answer Values  </li>
     <ul>
        <li> Vendor Values  </li>
           <ul>
            <li> Vendor Values should clearly be recognized as belonging to a specific IVD Test Performed for a particular device model (including equipment UID and type), and the device vendor.</li>
           </ul>  
        <li> SNOMED Codes and/or LOINC Codes  </li>
           <ul>
              <li> While typically only SNOMED code or LOINC codes are presented based on local vocabulary choices, if both are made available not all vendor values may have a corresponding SNOMED and/or LOINC code.  On should therefore consider clearly distinguish either mapping by using columns or separate lists.</li> 
           </ul>
     </ul>  
</ul>


---

File: repos/HL7_SLASH_livd/input/pagecontent/general-mapping.md

This guide is based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard and therefore uses terminology, notations and design principles that are specific to FHIR.  Before continuing to read this implementation guide, it's important to be familiar with some of the basic principles of FHIR as well as general guidance on how to read FHIR specifications.  Readers who are unfamiliar with FHIR are encouraged to read (or at least skim) the following prior to reading the rest of this implementation guide.

* [FHIR overview]({{site.data.fhir.path}}overview.html)
* [Developer's introduction]({{site.data.fhir.path}}overview-dev.html)
* (or [Clinical introduction]({{site.data.fhir.path}}overview-clinical.html))
* [FHIR data types]({{site.data.fhir.path}}datatypes.html)
* [Using codes]({{site.data.fhir.path}}terminologies.html)
* [References between resources]({{site.data.fhir.path}}references.html)
* [How to read resource & profile definitions]({{site.data.fhir.path}}formats.html)
* [Base resource]({{site.data.fhir.path}}resource.html)

<h3> Overview </h3>

The concepts described above are mapped to a number of FHIR resources that have been profiled to support the scope of the LIVD Publication.  The diagram below shows the HL7 FHIR resources/profiles and their relationship:

![LIVD Profile Structure](LIVD_Profile_Structure - Version 2.jpg)

* LIVD Bundle - Packages all relevant resources of the LIVD Catalog.
* LIVD Catalog Profile - This provides the information about the LIVD Publication.  The profile is based on the Catalog profile based on the Composition resource.   Note that, while the LIVD Catalog Profile does some organization of the resources, there is no need for representing the format of the data.  The formatting and presentation is left to the client consuming these resources.
* LIVD Device Definition Profile - This profile reflects the equipment (device) that is represented in the publication.  
   * (A) Each LIVD publication must include at least one device, and can cover many.
* LIVD Device Observation Definition - This profile reflects the IVD Test Performeds that each device can produce.
  * (B) Each LIVD Device Definition has the capability to perform at least one observation, i.e., IVD Test Performed.
* LIVD Test Concept Map Profile - This profile supports the data necessary to document the actual mapping between the IVD Test Performed for a device and the LOINC codes to consider.
   * (C) A LIVD Test Concept Map must be associated with at least one LIVD Device Definition.  It may represent multiple LIVD Device Definitions where, e.g., different models performing the same tests could share the same map.
   * The ConceptMap.source reflects the IVD Test Performed's code and must exist (D) as a LIVD Device Observation Definition.
   * The ConceptMap.target reflects the LOINC code that the IVD Test Performed's code maps to, as well as context information to aid in the mapping such as result, specimen or other considerations.
      * An IVD Test Performed may not have a mapping (e.g., no LOINC code available yet), one, or more.
* LIVD LOINC Value Set Profile - This profile supports the applicable LOINC codes from the LOINC Code System that is relevant to the mapping process.
      * (E) Each LOINC code in the LIVD Test Concept Map must exist in the LIVD LOINC Value Set.
* LIVD LOINC Code System Profile - This profile supports the relevant LOINC Code System data to assist in the mapping process.  This enables the mapping process to be off-line as needed.
   * (F) Each LOINC Code in the LIVD LOINC Value Set must exist in the LIVD LOINC Code System
* LIVD Coded Result Value Set Sub-Set Profile - This profile supports the non-quantitative, coded values that an IVD Test can yield as the observation value.
   * (G) Each LIVD Device Observation Definition can only reference one Result Value Value Set Sub Set.
   * (H) Each LIVD Coded Result Value Value Set Sub Set may further reference another LIVD Coded Result Value Value Set Sub Set to ease configuration and re-use.
* LIVD Coded Result Value Code System Profile - This profile contains the full set of result values used across devices sharing the same result value definitions.
   * (I) Each LIVD Coded Result Value in the LIVD Coded Result Value Value Set Sub Set must exist in the LIVD Coded Result Value Code System
* LIVD Coded Result Value Value Set Super-Set Profile - This profile is used to eas the mapping definitions by aggregating the all LIVD Coded Result Values to be mapped.
   * (J) Each LIVD Coded Result Value in the LIVD Coded Result Value Value Set Super Set must exist in the LIVD Coded Result Value Code System
* LIVD Coded Result Value Concept Map Profile - This profile contains the mappings from the IVD Test Coded Result Values to the respective SNOMED and/or LOINC codes
   * The ConceptMap.source reflects the IVD Coded Result Value and must exist in the LIVD Coded Result Value Value Set Super Set (K) in the context of the LIVD Coded Result Value Value Set Subset (L) for the LIVD Device Observation Definition at hand.
   * The ConceptMap.target reflects the SNOMED and/or LOINC Answer codes that the IVD Test's code maps to.  Although an IVD Coded Result Value can have both a SNOMED and a LOINC Answer code representation, it can only be mapped to one or the other based on for the actual coded result value for the test performed.
* LIVD LOINC Answer Value Set Profile - This profile supports the applicable LOINC codes from the LOINC Code System that is relevant to the mapping process.
   * (M) Each LOINC code in the LIVD Coded Result Value Concept Map must exist in the LIVD LOINC Answer Value Set or the LIVD SNOMED Value Set.
   * (N) Each LIVD LOINC Answer code must exist in the LIVD LOINC Code System.
* LIVD SNOMED Code System Profile - This profile supports the relevant SNOMED Code System data to assist in the mapping process.  This enables the mapping process to be off-line as needed.
   * (O) Each LIVD SNOMED code must exist in the LIVD SNOMED Code Sysetm.

 

The LIVD Bundle Profile will enable packaging of the resources.

<h3> Detailed Mapping </h3>

The following table provides the mapping of LIVD data of interest to FHIR resource attributes.  Note that the use of FHIR introduces additional attributes that either are needed as required elements in FHIR or provide additional capabilities.
<table>
<table>
<tr>
    <th><b>LIVD Attribute</b></th>
    <th><b>FHIR</b></th>
    <th><b>Comments</b></th>
</tr>
<tr>
  <td></td>
  <td>Bundle.type</td>
  <td>This is set to "collection" as LIVD is modeled in FHIR to serve as a payload while it is not needed to be in the form of a document either, thus a well structured collection.</td>
<tr>
    <td><b><i>Publication</i></b></td>
</tr>
<tr>
    <td>Publisher - the entity publishing the mapping information</td>
    <td>Composition.author.display</td>
</tr>
<tr>
    <td>Publication Version ID - human-readable information provided by the vendor that can be used to differentiate LIVD Publication versions</td>
    <td>Composition.identifier.system
    <br>Composition.identifier.value
    <br>Composition.assigner.display</td>
</tr>
<tr>
    <td></td>
    <td>Composition.type.coding.code
      <br>Composition.type.coding.display
      <br>Composition.type.coding.version
      <br>Composition.type.coding.system</td>
    <td>This represents only the LOINC Code representing this publication is a LIVD Catalog.  It does not reflect the version of the LOINC code used in the detailed mapping.</td>
</tr>
<tr>
  <td> LOINC Version ID - the version of LOINC that was used for the mapping</td>
  <td> ValueSet.expansion.contains.system.version</td>
  <td>Since a LIVD Catalog can include LOINC codes from different versions</td>
</tr>
<tr>
    <td>LOINC Copyright - holds the required attribution statement</td>
    <td>Composition.section.title
      <br>Composition.section.code
      <br>Composition.section.entry.reference</td>
    <td>The relevant copyright text is in .section.entry.reference where the .section.title is "Copyrights" and the section.code is "copy-right".</td>
</tr>
<tr>
    <td>Localization - the language used for this LIVD Publication</td>
    <td>extension-Composition.language</td>
</tr>
<tr>
    <td>Region - an optional vendor description for which geographic or administrative region this localization is valid.</td>
    <td>extension-Composition.region</td>
</tr>
<tr>
    <td></td>
    <td>Composition.extension-version</td>
</tr>
<tr>
    <td> </td>
    <td>Composition.status</td>
</tr>
<tr>
    <td> </td>
    <td>Composition.date</td>
</tr>
<tr>
    <td> </td>
    <td>Composition.title</td>
</tr>
<tr>
    <td> </td>
    <td>extension-Composition.note</td>
</tr>
<tr>
    <td> </td>
    <td>Composition.section</td>
    <td>This enables organization like information together, particularly the equipment, tests, and mappings.
</tr>
<tr>
    <td><b><i>Equipment</i></b></td>
</tr>
<tr>
   <td></td>
   <td>DeviceDefinition.identifier</td>
</tr>
<tr>
    <td>Manufacturer - the name of the manufacturer of the device.</td>
    <td>DeviceDefinition.manufacturerString</td>
</tr>
<tr>
    <td>Model - the model of the device as provided by the manufacturer</td>
    <td>DeviceDefinition.modelNumber</td>
</tr>
<tr>
    <td>Testkit UID - the unique device identifier, that may be the one used in the Unique Device Identifier (UDI) constructs</td>
    <td>DeviceDefinition.udiDeviceIdentifier.deviceIdentifier</td>
</tr>
<tr>
    <td>Testkit UID Type - capable of supporting the unique device identification system to identify medical devices through their distribution and use.</td>
    <td>DeviceDefinition.udiDeviceIdentifier.issuer</td>
</tr>
<tr>
    <td></td>
    <td>DeviceDefinition.udiDeviceIdentifier.jurisdiction</td>
</tr>
<tr>
    <td> </td>
    <td>DeviceDefinition.capability.type
      <br>extension-DeviceDefinition.capability.observationDefinition</td>
    <td>This enables a linkage to the ObservationDefinition that represents the test that the device can perform.</td>
</tr>
<tr>
  <td></td>
  <td>extension-DeviceDefinition.classification</td>
</tr>
<tr>
  <td></td>
  <td>extension-DeviceDefinition.hasPart</td>
</tr>
<tr>
    <td><b><i>IVD Test Performed</i>,</b></td>
</tr>
<tr>
    <td>Vendor Analyte Code - Vendor Transmission Code for automated tests or Vendor Analyte Identifier for manual tests.</td>
    <td>ObservationDefinition.coding.code.system
    <br>ObservationDefinition.coding.code.code
    </td>
</tr>
<tr>
    <td>Vendor Analyte Name - human-readable text the vendor used to identify the analyte</td>
    <td>ObservationDefinition.coding.code.display</td>
</tr>
<tr>
    <td>Vendor Reference ID - an additional vendor identifier, such as an identifier that can be used to locate the associated assay insert published by the vendor.</td>
    <td>ObservationDefinition.identifier.type
    <br>ObservationDefinition.identifiervalue</td>
</tr>
<tr>
    <td> </td>
    <td>extension-ObservationDefinition.device</td>
    <td>This enables a link to the device(s) that can perform this test</td>
</tr>
<tr>
    <td><b><i>IVD Analyte Code - LOINC Mapping</i></b></td>
</tr>
<tr>
  <td> LOINC Mapping Version</td>
  <td>ConceptMap.group.element.target.version</td>
</tr>
<tr>
  <td></td>
  <td>ConceptMap.identifier</td>
</tr>
<tr>
    <td>Vendor Specimen Description - human-readable text that provides information about the specimen used for the test, such as “Serum or Plasma.”</td>
    <td>ConceptMap.group.element.target.dependsOn:specimen.property
    <br>ConceptMap.group.element.target.dependsOn:specimen.value
    </td>
</tr>
<tr>
    <td>Vendor Result Description - human-readable text that provides information about the result that is produce
    <br>Binary
    <br>Ordinal
    <br>Nominal
    </td>
    <td>ConceptMap.group.element.target.dependsOn:result.property
    <br>ConceptMap.group.element.target.dependsOn:result.value
    </td>
</tr>
<tr>
    <td>Vendor Device Description</td>
    <td>ConceptMap.group.element.target.dependsOn:device.property
    <br>ConceptMap.group.element.target.dependsOn:device.value
    </td>
</tr>
<tr>
    <td>Vendor Comment - human-readable text clarification, such as “This is a STAT (prioritized) version of the test”.</td>
    <td>TestCodeConceptMap.group.element.target.dependsOn:other.property
    <br>TestCodeConceptMap.group.element.target.dependsOn:other.value
    </td>
</tr>
<tr>
    <td> </td>
    <td>ConceptMap.status</td>
</tr>
<tr>
    <td> </td>
    <td>ConceptMap.source</td>
</tr>
<tr>
    <td> </td>
    <td>ConceptMap.target</td>
    <td>This represents the target value set where the suggested LOINC codes are further defined.</td>
</tr>
<tr>
  <td></td>
  <td>ConceptMap.group.target
  <br>ConceptMap.group.targetVerion</td>
  <td>This represents the LOINC code system and the version that was used for the mapping to the LOINC codes referenced.</td>
</tr>
<tr>
    <td> </td>
    <td>ConceptMap.group.element.code</td>
    <td>This represents the test code used by the manufacturer for which a mapping to a LOINC is provided.</td>
</tr>
<tr>
    <td> </td>
    <td>ConceptMap.group.element.target.display</td>
</tr>
<tr>
 <td><b><i>Test Result Values</i></b></td>
 </tr>
<tr>
 <td>Vendor Test Result Value Code</td>	
 <td>to be provided</td>
</tr>
<tr>
 <td>Vendor Test Result Value Code Name</td>
 <td>to be provided</td>
</tr>
<tr>
 <td>Vendor Test Result Value Coding System</td>	
 <td>to be provided</td>
</tr>
<tr>
    <td><b><i>LOINC Code System</i></b></td>
</tr>
<tr>
 <td><b><i>Test Code Value Set</i></b></td>
</tr>
<tr>
    <td></td>
    <td>ValueSet.version</td>
</tr>
<tr>
    <td></td>
    <td>ValueSet.status</td>
</tr>
<tr>
    <td>LOINC Code</td>
    <td>ValueSet.expansion.contains.code</td>
</tr>
<tr>
    <td>LOINC Long Name</td>
    <td>ValueSet.expansion.contains.display</td>
</tr>
<tr>
    <td></td>
    <td>ValueSet.expansion.contains.system</td>
</tr>
<tr>
    <td>Component, Property, time Aspect, System, Scale Type, Method Type</td>
    <td>extension-ValueSet.expansion.conctains.extR5-property.code ("COMPONENT", "PROPERTY", "TIME ASPCT", "SYSTEM", "SCALE TYPE", "METHOD")
    <br>extension-ValueSet.expansion.conctains.extR5-property.valueCoding.code
    </td>
</tr>
</table>













---

File: repos/HL7_SLASH_livd/input/pagecontent/general-summary.md

When communicating results from a device to the Laboratory Information System (LIS), the following concepts must be mapped: 
<ul>
    <li> The IVD Test Performed (In-Vitro Diagnostic Test) representing the analyte to the LIS Test Result; and</li>
    <li> The IVD Coded Result Value to the LIS Test Result's Coded Result Value when non-quantitative and codified</li>
</ul>
Neither the IVD Test Performed, the LIS Test Result, nor the respective IVD Coded Result Values are likely based on industry standard vocabulary.  The manufacturer assigns analyte information such as vendor analyte code (transmission code or identifier), a name, and reference identifier, plus associated IVD Coded Result Value codes, while the Laboratory creates LIS Test Results and its LIS Result Values for the tests they provide.  Through LIS configuration tools, the IVD Test Performed's Vendor Analyte Code is associated with one or more LIS Test Result Codes based on context, e.g., IVD Test Performed used with one vs. another specimen would yield a different LIS Test Results.  This process has been in place for decades and has been optimized to support the Laboratory's specific reporting requirements (including conformance to Clinical Laboratory Improvement Amendments (CLIA) for the US).

To enable analytics and clinical decision support, harmonization to a common vocabulary is critical.  For laboratory test results, Logical Observation Identifiers Names and Codes (LOINC<sup>(R)</sup>) is the coding system of choice, while for non-quantitative, encoded result values, SNOMED and LOINC are both in use to enable a consistent expression.  This introduces the question on how to map the LIS Test Result code to LOINC, as well as corresponding Coded Result Value code to either LOINC or SNOMED, and do so consistently across all laboratories to enable analytics and clinical decision support reliably.

For now, and particularly until an LIS communicates ordered tests to the device using LOINC, the device cannot provide the appropriate LOINC code for the IVD Test Performed with the test result and similarly the SNOMED or LOINC code for the Coded Result Value.  The LIS must provide the mapping as they associate the IVD Test Performed and its IVD Coded Result Value with the LIS Test Result and its LIS Result value respectively.   To date this mapping process has relied on a combination of the LOINC registry, RELMA, and the individual's knowledge of LOINC plus the LIS' test compendium and further information on the Vendor Analyte Code's Coded Result Value codes to arrive at the appropriate LOINC or SNOMED codes for the actual value where applicable.

The device manufacturer can aid in the process by providing a list of suggested LOINC codes for each of their IVD Test Performed, including context of the result, specimen, and other considerations that would influence the choice, as well as the appropriate LOINC or SNOMED codes for their IVD Coded Result Values.  Such guidance would help reduce the scope of potential LOINC and SNOMED codes to consider, thus improving efficiency and quality of the mapping process, particularly across laboratories, i.e., arriving at the same LOINC or SNOMED code for the same test.

The following diagram may help further clarify that:

![LIVD FHIR Mapping](LIVD_FHIR_Mapping - Version 2.jpg)

<ul>
    <li> The LIS maintains a map between the IVD Test Performed's vendor analyte code and their LIS Test Result code.</li>
        <ul>
            <li> One IVD Test Performed can yield different LIS Test Results depending on specimen and other parameters.</li>
            <li> Each of the LIS Test Results must have a LOINC code associated with it so the results report includes the appropriate LOINC code as well for downstream use.</li>
            <li> Laboratory staff today rely on LOINC definitions (using RELMA or the web based tool), their local mappings, and their expertise/knowledge about the device, test, and parameters, to associate a specific LOINC code to the LIS Test Result Code. </li>
        </ul>
    <li> The LIS also maintains a map between the Vendor Analyte Coded Result Value and the LIS Test Result's Coded Result Values.</li>
        <ul>
            <li> One IVD Coded Result Value yields one LOINC code or SNOMED code.</li>  
            <li> While it may have a map to both, local reporting requirements would yield an LIS to only use the LOINC or only then SNOMED codes.</li>
        </ul>
    <li> Adding the LIVD suggested mappings, where available, enhances the Laboratory's staff to arrive more quickly and correctly at the right LOINC and SNOMED codes.</li>
</ul>

When the laboratory professional builds the test results that their LIS will manage and interact with the devices, they can use the device vendor's suggestions to more accurately, consistently, and efficiently map the results in their LIS to a LOINC and/or SNOMED code in context of the device's IVD Test Performed and the IVD Coded Result Value.  Note that, as these are device vendor's suggestions, the expectation is that the suggested mappings are displayed and assist the laboratory staff to narrow the likely options that fit the laboratory's intended use.  Therefore, the mappings are not suitable for automated configuration. The following example clarifies the information a laboratory professional would use during their configuration.

<h3> Example#1 – Glucose</h3>
Vendor Analyte Code = 1067 (Gluc) is mapped in the LIS to:
<ul>
   <li> LIS Test Result Info = 123 - Glucose CSF mg/dL </li>
   <li> LIS Test Result Info = 456 - Fasting Glucose Urine mg/dL </li>
   <li> LIS Test Result Info = 789 - 1 Hour Glucose Plasma mg/dL </li>
</ul>
LIVD Mapping Vendor Analyte Code = 1067 (Gluc) suggests:
<ul>
   <li> Based on vendor comment [comment], vendor result description [result] A, vendor specimen description [specimen] "cerebrospinal", unit of measure "mg/dL", LOINC axes => 2342-4 Glucose [Mass/volume] in Cerebral spinal fluid </li>
   <li> Based on vendor comment [comment], vendor result description [result] B, vendor specimen description "urine", unit of measure "mg/dL", LOINC axes => 63382-6 </li>
   <li> Based on vendor comment [comment], vendor result description [result] C, vendor specimen description "serum/plasma", unit of measure "mg/dL", LOINC axes => 20438-8 </li>
</ul>
Consequently, most appropriate mapping:
<ul>
   <li> LIS Test Result Code = 123 - Glucose CSF mg/dL MAP TO LOINC Code = 2342-4 Glucose [Mass/volume] in Cerebral spinal fluid </li>
   <li> LIS Test Result Code = 456 - Fasting Glucose Urine mg/dL MAP TO LOINC Code = 63382-6 Fasting glucose [Mass/volume] in Urine </li>
   <li> LIS Test Result Code = 789 - 1 Hour Glucose Plasma mg/dL MAP TO LOINC Code = 20438-8 Glucose [Mass/volume] in Serum or Plasma --1 hour post dose glucose </li>
</ul>

<h3> Example#2 - Total Protein (CSF/Urine)</h3>
This IVD "test kit" is usually named Total Protein (CSF/Urine) and utilized for the analysis of CSF, Random/Spot Urine, or Timed urine (24 hr, 2 hr, etc) specimens.  It is often used to perform body fluid Total Proteins.  However, a different IVD "test kit" is typically used for serum/plasma Total Protein levels, which is out of scope for this example. Note that the LIVD file would NOT contain the local Ask at Order entry questions (local codes 444 and 555), nor the calculated value for local code 777. CSF=Cerebrospinal Fluid.
Vendor Analyte Code = 1099 (Total Protein CSF/Ur) is mapped in the LIS to:
<ul>
   <li> LIS Test Info =  Result Code 111 - Result Name <b>Protein, CSF</b>  Units <b>mg/dL</b> </li>
   <li> LIS Test Info =  Result Code 222 - Result Name <b>Protein, Random Urine</b>  Units <b>mg/dL</b> </li>
   <li> LIS Test Info =  Result Code 333 - Result Name <b>Protein, 24 Hour Urine</b>  Units <b>mg/dL</b> </li>
</ul>
LIVD Mapping Vendor Analyte Code = 1099 (Total Protein CSF/Ur) suggests:
<ul>
   <li> Based on vendor comment [comment], vendor <b>result description</b> [result] A, vendor <b>specimen</b> description [specimen] "<b>CSF</b>", LOINC axes => 2880-3 </li>
   <li> Based on vendor comment [comment], vendor <b>result description</b> [result] B, vendor <b>specimen</b> description [specimen] "<b>Urine</b>", LOINC axes => 2888-6 </li>
   <li> Based on vendor comment [comment], vendor <b>result description</b> [result] C, vendor <b>specimen</b> description [specimen] "<b>24 hour Urine</b>", LOINC axes => 21482-5 </li>
</ul> 
Consequently, most appropriate mapping would be:
<ul>
   <li>LIS Test Info =  Result Code111 - Result Name <b>Protein, CSF</b>  Units <b>mg/dL</b> </li>
   <ul>
       <li> LOINC Code = 2880-3 Protein [Mass/volume] in Cerebral spinal fluid </li>
   </ul>
   <li> LIS Test Info =  Result Code 222 - Result Name <b>Protein, Random Urine</b>  Units <b>mg/dL</b> </li>
   <ul>
      <li> LOINC Code = 2888-6 Protein [Mass/volume] in Urine </li>
   </ul>
   <li> LIS Test Info =  Result Code 333 - Result Name <b>Protein, 24 Hour Urine</b>  Units <b>mg/dL</b> </li>
   <ul>
      <li> LOINC Code = 21482-5 Protein [Mass/volume] in 24 hour Urine </li>
   </ul>
   <li> LIS Test Info =  Result Code 444 - Result Name <b>Hours of Collection</b> Units <b>Hours</b> - calculated from values in 333 and 444 </li>
   <ul> 
      <li> LOINC Code = 13362-9 Collection duration of Urine - provided as AOE </li>
   </ul>
   <li> LIS Test Info =  Result Code 555 - Result Name <b>Total Volume 24 Hour Urine Volume</b>  Units <b>mL</b> </li>
   <ul>
      <li> LOINC Code = 3167-4 Volume of 24 hour Urine - provided as AOE </li>
   </ul>
   <li> LIS Test Info =  Result Code 777 - Result Name <b>Total Protein, 24 Hour Urine Rate</b>  Units <b>g/24 Hr</b> </li>
   <ul>
       <li> LOINC Code = 2889-4 Protein [Mass/time] in 24 hour Urine - calculated from values in 333, 444 and 555 </li>
   </ul>
</ul>

<h3> Example #3 - Coded Result Values </h3>

A manufacturer defined the following codes for an Immunoassay molecular antigen test:
<ul>
    <li>Positive</li>
    <li>Negative</li>
    <li>Invalid</li>
</ul>
The manufacture established the following SNOMED CT mappings for the result values:
<ul>
    <li>Positive = 260373001, “Detected”</li>
    <li>Negative = 260415000, “Not Detected”</li>
    <li>Invalid = 455371000124106, “Invalid result”</li>
</ul>


---

File: repos/HL7_SLASH_livd/input/pagecontent/glossary.md

**Analyte:** CLIA defines an analyte as “a substance or constituent for which the laboratory conducts testing.”[1] Lab Tests Online indicates in lay terms, it may be called a test[2].

Some laboratories and IVD vendors may use the term parameter instead of analyte. Others may use assay to describe the test process. Synonyms: parameter, assay, result.

**Assay:** According to LabTestsOnline.org, an assay is a” procedure used to detect or measure a substance or reaction.” It is also may be known as a test.[3]

**CLIA:** CLIA is the abbreviation for the Clinical Laboratory Improvement Amendments of 1988, which is federal law regulating laboratory testing in the United States.”

**In Vitro Diagnostics (IVD):** Instruments and software systems which utilize assays for the analysis of patient specimens outside the body.

**Test Order:** Although this term is frequently used to indicate what the physician is requesting of the laboratory to be performed on a patient specimen, for LIVD, it is referring to the term built in the LIS corresponding to what the performing laboratory performs when requested by the provider. The name in the LIS build for the test order is what is contained in the laboratory’s Specimen Collection Manual (required by CLIA) or laboratory compendium or order catalog and provided to all locations where test ordering occurs. The name of the test order established by the performing laboratory may be the same or different than the name for the test order (for the same test) as displayed in CPOE EHR systems or other LISs who request the test order.

The test order may be for a single test requested and resulted such as a potassium level. It may also be a panel order consisting of multiple test results such as a complete blood count (CBC) which includes results for hemoglobin, hematocrit, white cell count, etc. Test orders may be grouped together in convenience panels for physicians to order multiple tests (panels or single tests) in a single action such as a click.

**Test Result:** The test result corresponds to the analyses performed by a laboratory in response to an order. The test result is the name built in the LIS and reported on the test report of record and is the official naming convention by the performing laboratory. This name may or may not be the same as the analyte or assay utilized in performing the test analysis.

For example, an IVD vendor offers a serum glucose assay. The laboratory performs the assay on a patient specimen to obtain a glucose result value, which travels across the instrument interface or is manually entered by a laboratory professional into the LIS. The LIS has multiple glucose test results that are built and used for reporting serum glucoses. One of these is “glucose level,” which would correspond to the IVD vendor provided LOINC code. However, another LIS test result is “1 hour glucose tolerance test level.” This test result would require another LOINC code corresponding to different details for the test result reported. A different LOINC would need to be mapped to it, which reflects these test result differences. Both test results would produce numeric test result values in this example.

LOINC codes pertaining to the test result information are provided in the LIVD standard, which can be used in many cases to map to the test result(s) built in the LIS. In other cases, such as for most challenge and timed tests, the LOINC may correspond to the assay and analyte, but not the LIS test result. The laboratory professional can use the IVD provided LOINC as a guide to assist them in looking up the appropriate LOINC for their test result for use in the LIS and other downstream mappings.

**Test Result Value:** The Test Result value is what has been determined via analysis of a patient specimen and associated with a specific test result. It can be numeric as reported for many IVD assays and associated with units and a reference range. In other cases, it may be qualitative with a value, such as detected or not detected per the manufacturer’s package insert instructions. In other cases, the value may be a short answer or phrase such as the name of an organism reported. In more manual testing processes and interpretations, longer sentences or narratives may be reported as a test result value.

Test result value mappings will vary depending on the context and regulatory requirements for that data for which code systems are required for the mapping(s). For example, numeric test result values are unable to be codified. Qualitative test result values are required to be mapped to SNOMED CT Codes from the Qualifier Values hierarchy in the US. In addition to the SNOMED CT codes, some implementers may wish to map LOINC Answer codes to qualitative test result values. If the qualitative test result value is an organism, then the SNOMED CT codes from the Organism hierarchy are the required mapping in the US.

**Test System:** CLIA defines a test system as “the instructions and all of the instrumentation, equipment, reagents, and supplies needed to perform an assay or examination and generate test results.” [1]

**Glossary Term examples:**

|      Test Order (LIS build)      | Order LOINC (out of scope) (LIS) |                  Order LOINC Long Name (LIS)                  | IVD Analyte (requested by order) | IVD Result LOINC Code (LIVD) |       IVD Result LOINC Long Name (LIVD)       | IVD Result Value | Units  | Test Result (LIS build) | Test Result LOINC code (LIS) |                  Test Result LOINC Long Name (LIS)                  | Test Result Value (LIS) |
| :------------------------------: | :------------------------------: | :-----------------------------------------------------------: | :------------------------------: | :--------------------------: | :-------------------------------------------: | :--------------: | :----: | :---------------------: | :--------------------------: | :-----------------------------------------------------------------: | :---------------------: |
|              Lytes               |             24326-1              |           Electrolytes 1998 panel – Serum or Plasma           |           Sodium (NA)            |            2951-2            |   Sodium [Moles/volume] in Serum or Plasma    |       138        | mmol/L |       Sodium Ser        |            2951-2            |              Sodium [Moles/volume] in Serum or Plasma               |           138           |
|              Lytes               |             24326-1              |           Electrolytes 1998 panel – Serum or Plasma           |          Potassium (K)           |            2823-3            |  Potassium [Moles/volume] in Serum or Plasma  |       3.9        | mmol/L |          K Ser          |            2823-3            |             Potassium [Moles/volume] in Serum or Plasma             |           3.9           |
|              Lytes               |             24326-1              |           Electrolytes 1998 panel – Serum or Plasma           |          Chloride (Cl)           |            2075-0            |  Chloride [Moles/volume] in Serum or Plasma   |       102        | mmol/L |      Chloride Ser       |            2075-0            |             Chloride [Moles/volume] in Serum or Plasma              |           103           |
|              Lytes               |             24326-1              |           Electrolytes 1998 panel – Serum or Plasma           |               CO2                |            1963-8            | Bicarbonate [Moles/volume] in Serum or Plasma |        28        | mmol/L |         CO2 Ser         |            1963-8            |            Bicarbonate [Moles/volume] in Serum or Plasma            |           28            |
|      2 hour Urine Potassium      |             57379-0              |           Potassium [Moles/volume] in 2 hour Urine            |          Potassium (K)           |           2828-2 m           |       Potassium [Moles/volume] in Urine       |                  | mmol/L |         2h U K          |           57379-0            |              Potassium [Moles/volume] in 2 hour Urine               |                         |
| 3 H GTT (Glucose Tolerance Test) |             50608-9              | Glucose tolerance 3 hours gestational panel – Serum or Plasma |             Glucose              |            2345-7            |   Glucose [Mass/volume] in Serum or Plasma    |        99        | mg/dL  |      Fasting Gluc       |            1558-6            |          Fasting glucose [Mass/volume] in Serum or Plasma           |           99            |
| 3 H GTT (Glucose Tolerance Test) |             50608-9              | Glucose tolerance 3 hours gestational panel – Serum or Plasma |             Glucose              |            2345-7            |   Glucose [Mass/volume] in Serum or Plasma    |       150        | mg/dL  |         1H Gluc         |           20438-8            | Glucose [Mass/volume] in Serum or Plasma- 1 hour post dose glucose  |           150           |
| 3 H GTT (Glucose Tolerance Test) |             50608-9              | Glucose tolerance 3 hours gestational panel – Serum or Plasma |             Glucose              |            2345-7            |   Glucose [Mass/volume] in Serum or Plasma    |       250        | mg/dL  |         2H Gluc         |           20436-2            | Glucose [Mass/volume] in Serum or Plasma- 2 hours post dose glucose |           250           |
| 3 H GTT (Glucose Tolerance Test) |             50608-9              | Glucose tolerance 3 hours gestational panel – Serum or Plasma |             Glucose              |            2345-7            |   Glucose [Mass/volume] in Serum or Plasma    |       200        | mg/dL  |         3H Gluc         |           20437-0            | Glucose [Mass/volume] in Serum or Plasma- 3 hours post dose glucose |           200           |

[1] CLIA regulations https://www.ecfr.gov/cgi-bin/retrieveECFR?gp=1&SID=9b42cf158b7c913fe20af21d8d820148&ty=HTML&h=L&mc=true&n=pt42.5.493&r=PART

[2] Lab Tests Online Analyte Definition https://labtestsonline.org/glossary/analyte

[3] Lab Tests Online Assay Definition https://labtestsonline.org/glossary/assay


---

File: repos/HL7_SLASH_livd/input/pagecontent/index.md

<blockquote class="stu-note">
<p>
This specification represents the updates from the first ballot (September 2019) and subsequent addition enabling documentation of Result Value mapping guidance.  It furthermore reflects updates in the "LIVD - Digital Format for Publication of LOINC to Vendor IVD Test Results" specification that is undergoing further updates to reflect Result Value mapping as well.  A draft is available  <a href="https://github.com/HL7/livd/blob/master/input/images/IICC%20LIVD%20Digital%20Format%20v2%20-%20Final%20Draft%20v0.1%20-%2020201113.docx">here</a>.  This is the second STU ballot with the intent to publish LIVD STU R1 version upon completing ballot reconciliaton.
</p>
<p>
Feedback is welcome and may be submitted through the <a href="http://hl7.org/fhir-issues">FHIR Jira tracker</a>
</p>
</blockquote>

### Background

The objective of this implementation guide is to define an In Vitro Diagnostic (IVD) industry format to facilitate the publication and exchange of suggested LOINC codes for vendor IVD test assays, based on either vendor IVD test transmission codes or manual test identification, for use by laboratory personnel or laboratory applications. It is not intended to cover information for other related activities, such as purchasing tests from a vendor. Expected systems using the format include Laboratory Information Systems (LIS), clinical middleware applications, databases, and terminology servers.

This implementation guide defines a digital format that can be easily:

* Used as-is by IVD software systems to guide the mapping between vendor IVD test transmission codes and LOINC codes.
* Transformed into an alternate format, such as an Excel spreadsheet, to support the manual selection of LOINC codes for results produced by vendor IVD tests used by the laboratory.

Both vendor-defined IVD test by a vendor IVD instrument and vendor-defined manual IVD test are in scope.

By voluntarily adopting the format described here as an industry convention, IVD vendors will understand what data and in what format they should provide when publishing suggested LOINC codes for their IVD tests. By doing so, this work will significantly reduce the variability of the content and format of the multiple publications received by laboratory environments, further reducing the time and effort required by laboratories to review and integrate this information into their laboratory software systems. The format includes additional vendor information, such as a description of the result, used to easily discriminate between multiple LOINC codes for the same IVD test. 

Ideally it is envisioned that the LOINC codes selected by manufacturers would be reviewed by a common party (e.g. Regenstrief) for correctness and consistency across vendors, and also that the industry would establish conventions for the storage and access of the IVD vendor LOINC publications. The effort required for these objectives will also be reduced by having this standard publication format and associated content.

### Out of Scope

The implementation guide has an **initial** scope that does not address:

* The mapping of IVD test orders, which requires additional data and alignment on a standardized coding system for orders.  Although IVD test orders and IVD test Results are related, information required for IVD test order mapping should be provided by a separate mapping table.
* The mapping of result values to LOINC and/or SNOMED.
* Any long-term or common storage locations hosting the published LOINC codes.
* Regulatory impacts of vendors providing LOINC codes for their IVD tests.
* The definition of the specific protocols or technologies that could be used to transmit the industry-defined digital content between IVD and LIS or other systems.
* Transmitting LOINC codes directly from IVD instruments, leaving that content to be represented by vendor-defined codes due to issues in achieving one-to-one appropriate LOINC codes, as discussed in the Data Definition section.
* Which LOINC codes vendors should choose for their tests, or what content is needed to make this decision. It only addresses the format used to publish these associations, for use by laboratory personnel or laboratory applications.
* What information is required to automatically set up a configuration between an IVD instrument and an IVD software system.


---

File: repos/HL7_SLASH_livd/input/pagecontent/StructureDefinition-bundle-uv-livd-intro.md

### Description

The *LIVD Bundle* is a profile on the Bundle resource to include all the necessary resources to express the LIVD catalog.

---

File: repos/HL7_SLASH_livd/input/pagecontent/StructureDefinition-catalog-uv-livd-intro.md

### Description

The *LIVD Catalog* is a profile on the Composition resource to specify and organize the sections and references to the necessary resource content to express the LIVD catalog.

---

File: repos/HL7_SLASH_livd/input/pagecontent/StructureDefinition-codesystem-loinc-frag-uv-livd-intro.md

### Description

The *LIVD LOINC Fragment CodeSystem* is a profile on the CodeSystem resource to include the relevant information from LOINC to enable the full mapping context without having to connect to a remote terminology service or other source of LOINC terminology content.

---

File: repos/HL7_SLASH_livd/input/pagecontent/StructureDefinition-codesystem-snomed-frag-uv-livd-intro.md

### Description

The *LIVD SNOMED CT Fragment CodeSystem* is a profile on the CodeSystem resource to include the relevant information from SNOMED CT to enable the full mapping context without having to connect to a remote terminology service or other source of SNOMED CT terminology content.

---

File: repos/HL7_SLASH_livd/input/pagecontent/StructureDefinition-codesystem-vendor-result-frag-uv-livd-intro.md

### Description

The *LIVD Vendor Result Code Fragment CodeSystem* is a profile on the CodeSystem resource to include the relevant information from an IVD vendor for the result codes to be used in a LIVD instance to enable the full mapping context without having to connect to a remote terminology service or other source of vendor terminology content.

---

File: repos/HL7_SLASH_livd/input/pagecontent/StructureDefinition-conceptmap-resultvalue-uv-livd-intro.md

### Description

The *LIVD Result Value ConceptMap* is a profile on the ConceptMap resource for representing the result value mappings from a vendor IVD result value code to a LOINC and/or SNOMED CT code.

---

File: repos/HL7_SLASH_livd/input/pagecontent/StructureDefinition-conceptmap-testcode-uv-livd-intro.md

### Description

The *LIVD Test Code ConceptMap* is a profile on the ConceptMap resource for representing the test code mappings from a vendor IVD analyte code to a LOINC code.

---

File: repos/HL7_SLASH_livd/input/pagecontent/StructureDefinition-devicedefinition-uv-livd-intro.md

### Description

The *LIVD DeviceDefinition* is a profile on the DeviceDefinition resource for representing the devices included in the LIVD catalog for which mappings are defined.

---

File: repos/HL7_SLASH_livd/input/pagecontent/StructureDefinition-observationdefinition-uv-livd-intro.md

### Description

The *LIVD ObservationDefinition* is a profile on the ObservationDefinition resource for representing the analytes that can be measured by the included devices for which the test codes and applicable result values are mapped.

---

File: repos/HL7_SLASH_livd/input/pagecontent/StructureDefinition-valueset-loinc-uv-livd-intro.md

### Description

The *LIVD LOINC ValueSet* is a profile on the ValueSet resource to include the relevant information from LOINC to enable the full mapping context without having to connect to a remote terminology service or other source of LOINC terminology content.

---

File: repos/HL7_SLASH_livd/input/pagecontent/ValueSet-loinc-livd-intro.md

### Description

The *LIVD LOINC value set* ValueSet resource includes the subset of LOINC codes that are used for ConceptMap.group.element.target.code in this LIVD bundle instance.

---

