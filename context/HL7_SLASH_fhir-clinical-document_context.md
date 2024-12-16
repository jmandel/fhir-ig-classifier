File: repos/HL7_SLASH_fhir-clinical-document/input/fsh/Aliases.fsh

// Code Systems
Alias: $LNC = http://loinc.org
Alias: $SCT = http://snomed.info/sct
Alias: $UCUM = http://unitsofmeasure.org
Alias: $RXN = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $dose-rate-type = http://terminology.hl7.org/CodeSystem/dose-rate-type
Alias: $allergyintolerance-clinical = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical
Alias: $allergyintolerance-verification = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification
Alias: $system = http://example.org/system
Alias: $v3-ActCode = http://terminology.hl7.org/CodeSystem/v3-ActCode

//Extensions
Alias: $composition-clinicaldocument-versionNumber = http://hl7.org/fhir/StructureDefinition/composition-clinicaldocument-versionNumber


//Alias: $loinc = http://loinc.org
//Alias: $sct = http://snomed.info/sct

Alias: $participantTypes = http://terminology.hl7.org/CodeSystem/v3-ParticipationType

Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope




---

File: repos/HL7_SLASH_fhir-clinical-document/input/fsh/bundle1.fsh


//all first degree composition.references shall be included in the bundle.
Invariant: clindoc-first-degree
Description: "All first degree targets of entry[0].Composition.references shall be included in the bundle"
Expression: "TBD"
//entry.first()
Severity: #error

//bundle.timestamp >= composition.date
Invariant: clindoc-timestamp-ge-compoDate
Description: "For a FHIR Clinical Document the Bundle timestamp must be the same or after the Composition date" 
Expression: "timestamp >= entry.first().resource.date"
Severity: #error


Profile: ClinicalDocumentBundle
Parent: Bundle
Id: clinical-document-bundle
Title: "FHIR Clinical Document Bundle Profile"
Description: "Universal starting point for specifying a FHIR Clinical Document."

//* obeys clindoc-first-degree
* obeys clindoc-timestamp-ge-compoDate

* type = #document
* identifier 1..1
* identifier.system 1..1
* identifier.value 1..1
* identifier.value ^short = "Identifier system+value must be globally unique"
* identifier ^mapping[0].identity = "cda"
//* identifier ^mapping[=].map = "This is the Document identifier"
* identifier ^mapping[0].comment =  "This is the Document identifier"
* total 0..0

* timestamp 1..1
// Remove default mapping to ClinicalDocument.effectiveTime and state that this timestamp is >= ClinicalDocument.effectiveTime.
// constraint: bundle.timestamp >= composition.date

* entry 1..* MS
* entry.search 0..0
* entry.request 0..0
* entry.response 0..0
* entry.resource 1..1 MS // each entry must have a resource
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "$this.resource"
//"$this.information.resolve()"
* entry ^slicing.rules = #open
* entry ^slicing.description = "Slicing based on the resource type"
* entry contains 
    clinical-document-composition 1..1 MS
//	and subject 1..* MS
//	and participant 1..* MS

* entry[clinical-document-composition] ^short = "First entry is a composition"
* entry[clinical-document-composition].resource only ClinicalDocumentComposition
* entry[clinical-document-composition].search 0..0
* entry[clinical-document-composition].request 0..0
* entry[clinical-document-composition].response 0..0
//* entry[subject].resource only Patient
//* entry[participant].resource only Device or Organization or Patient or Person or Practitioner or PractitionerRole or RelatedPerson
// constraint: all first degree composition.references shall be included in the bundle.


//can have only one extension with a url of http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/ParticipantExtension and type of ENT
Invariant: clindoc-one-data-enterer
Description: "There can only be one date enterer. That means only one participant extension with type of data enterer." 
Expression: "extension.where(url='http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/ParticipantExtension').extension.where(url='type').value.coding.where(code='ENT').isDistinct()"
Severity: #error

//participantType cannot be AUT, AUTHEN, CST, LA, RCT, SBJ
Invariant: clindoc-limit-participantType
Description: "FHIR Clinical Document Composition Profile contains fields for AUT, AUTHEN, CST, LA, RCT, SBJ. These types are not allowed as types in the Participant Extension" 
Expression: "extension.where(url='http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/ParticipantExtension').extension.where(url='type').value.coding.exists(system='http://terminology.hl7.org/CodeSystem/v3-ParticipationType' and code='AUT').not() and extension.where(url='http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/ParticipantExtension').extension.where(url='type').value.coding.exists(system='http://terminology.hl7.org/CodeSystem/v3-ParticipationType' and code='AUTHEN').not() and
extension.where(url='http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/ParticipantExtension').extension.where(url='type').value.coding.exists(system='http://terminology.hl7.org/CodeSystem/v3-ParticipationType' and code='CST').not() and
extension.where(url='http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/ParticipantExtension').extension.where(url='type').value.coding.exists(system='http://terminology.hl7.org/CodeSystem/v3-ParticipationType' and code='LA').not() and
extension.where(url='http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/ParticipantExtension').extension.where(url='type').value.coding.exists(system='http://terminology.hl7.org/CodeSystem/v3-ParticipationType' and code='RCT').not() and
extension.where(url='http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/ParticipantExtension').extension.where(url='type').value.coding.exists(system='http://terminology.hl7.org/CodeSystem/v3-ParticipationType' and code='SBJ').not()"
Severity: #error

Profile: ClinicalDocumentComposition
Parent: Composition
Id: clinical-document-composition
Title: "FHIR Clinical Document Composition Profile"
Description: "Starting point for a specification for a composition of a FHIR Clinical Document."
//* obeys clindoc-one-data-enterer
* obeys clindoc-limit-participantType

* modifierExtension contains	
	http://hl7.org/fhir/5.0/StructureDefinition/extension-Composition.status named R5-Composition-status 0..1 MS


* extension contains 
	//$composition-clinicaldocument-versionNumber named composition-clinicaldocument-versionNumber 0..1 MS 
	
	http://hl7.org/fhir/5.0/StructureDefinition/extension-Composition.version named R5-Composition-version 0..1 MS and
	
	// DocumentID named document-id 0..1 MS and
	
    DataEntererExtension named data-enterer 0..1 MS and
    informant-extension named informant 0..* MS and
    information-recipient-extension named information-recipient 0..* MS and
    ParticipantExtension named participant 0..* MS and
    //ParticipantExtension named performer 0..* MS and
	
    ConsentExtension named consent 0..* MS and
    OrderExtension named order 0..* MS 
	//CancelledExtension named cancelled-status-indicator 0..1

* extension[R5-Composition-version] ^label = "clinical document version number"
//* extension[R5-Composition-version] ^short = "Consider if this should be must support, or if should explicitly backport R5 Composition.version" 
* extension[R5-Composition-version] ^mapping[0].identity = "cda"
* extension[R5-Composition-version] ^mapping[=].map = "versionNumber"

* extension[data-enterer] ^label = "date enterer"
* extension[data-enterer] ^short = "A Data Enterer represents the person who transferred the content, written or dictated, into the clinical document. To clarify, an author provides the content, subject to their own interpretation; a dataEnterer adds an author's information to the electronic system."
* extension[data-enterer] ^mapping[0].identity = "cda"
* extension[data-enterer] ^mapping[=].map = "assignedEntity.dataEnterer"
//* extension[data-enterer].extension[type].valueCodeableConcept = $participantTypes#ENT "data entry person"

* extension[informant] ^label = "informant"
* extension[informant] ^short = "An Informant is an information source for any content within the clinical document. This informant is constrained for use when the source of information is an assigned health care provider for the patient."
* extension[informant] ^mapping[0].identity = "cda"
* extension[informant] ^mapping[=].map = "informantChoice.informant"
//* extension[informant].extension[type].valueCodeableConcept = $participantTypes#INF "informant"

* extension[information-recipient] ^label = "information recipient of type primary, secondary information recipient or a generic information recipient"
* extension[information-recipient] ^short = "An Information Recipient is the intended recipient of the information at the time the document was created."
* extension[information-recipient] ^mapping[0].identity = "cda"
* extension[information-recipient] ^mapping[=].map = "intendedRecipient.informationRecipient"
//* extension[information-recipient].extension[type].valueCodeableConcept from ClinicalDocInformationRecipientVs (required)
//* extension[information-recipient].extension[type].valueCodeableConcept ^binding.description = "primary information recipient (PRCP), secondary information recipient (TRC) or generic information recipient (IRCP)"

* extension[participant] ^label = "A Participant that is not a data-enter, information-recipient nor an informant"
* extension[participant] ^short = "A Participant that is not a data-enter, information-recipient nor an informant"
* extension[participant] ^mapping[0].identity = "cda"
* extension[participant] ^mapping[=].map = "intendedRecipient.informationRecipient"
* extension[participant].extension[type].valueCodeableConcept from ClinicalDocParticipantVs (required)
* extension[participant].extension[type].valueCodeableConcept ^binding.description = "particpants that are not a data-enter, information-recipient nor an informant"
* extension[participant] ^mapping[0].identity = "cda"
* extension[participant] ^mapping[=].map = "associatedEntity.participant"

* extension[consent] ^label = "consent"
* extension[consent] ^short = "consent"
* extension[consent] ^mapping[0].identity = "cda"
* extension[consent] ^mapping[=].map = "authorization.Consent"

* extension[order] ^label = "order"
* extension[order] ^short = "order" 
* extension[order] ^mapping[0].identity = "cda"
* extension[order] ^mapping[=].map = "inFulfillmentOf.Order"

* modifierExtension[R5-Composition-status] ^short = "This allows for additional status values found in R5. However, exercise caution as the R4 Composition.status is required."
* modifierExtension[R5-Composition-status] ^isModifierReason = "This element is labelled as a modifier because it is a status element that contains status values such as cancelled (which means that the resource should not be treated as valid)."

* language 0..1 MS 
* language ^mapping[0].identity = "cda"
* language ^mapping[=].map = "languageCode"
* text MS
* identifier 0..1 MS
* type MS
* subject 1..1 MS
* subject only Reference(Patient or Group)
* date MS

* author MS
* author only Reference(Patient or Practitioner or PractitionerRole or RelatedPerson or Device or Organization)
* author ^mapping[0].identity = "cda"
* author ^mapping[=].map = "assignedAuthor.author"
// can we remove the default mapping? 

* title MS

* attester MS
* attester.mode MS
* attester.time MS
* attester.party MS
* attester ^slicing.discriminator.type = #pattern
* attester ^slicing.discriminator.path = mode
* attester ^slicing.rules = #open
* attester ^slicing.description = "Slicing based on the resource type"
* attester contains 
    legal_attester 0..1 MS
	and professional_attester 0..* MS
* attester[legal_attester] ^short = "aka legal authenticator"
* attester[legal_attester].mode = http://hl7.org/fhir/composition-attestation-mode#legal
* attester[legal_attester] ^mapping[0].identity = "cda"
* attester[legal_attester] ^mapping[=].map = "assignedEntity.legalAuthenticator"
* attester[professional_attester] ^short = "aka authenticator"
* attester[professional_attester].mode = http://hl7.org/fhir/composition-attestation-mode#professional
* attester[professional_attester] ^mapping[0].identity = "cda"
* attester[professional_attester] ^mapping[=].map = "assignedEntity.authenticator"


* custodian 1..1 MS
* custodian ^mapping[0].identity = "cda"
* custodian ^mapping[=].map = "assignedCustodian.custodian"
// can we remove the default mapping? 

* relatesTo MS
* relatesTo.targetIdentifier.system 1..1
* relatesTo.targetIdentifier.value 1..1
* relatesTo.targetIdentifier ^short = "Reference to the Bundle.identifier of the FHIR Clinical Document being appended, or to some other identifier of a non FHIR document"
* relatesTo ^slicing.discriminator.type = #value
* relatesTo ^slicing.discriminator.path = code
* relatesTo ^slicing.rules = #open
* relatesTo ^slicing.description = "Slicing based on code"
* relatesTo contains 
    replaced_document 0..* MS
	and appended_document 0..* MS
	
* relatesTo[replaced_document] ^short = "The document(s) being superceded"
* relatesTo[replaced_document].code = #replaces
* relatesTo[replaced_document].targetIdentifier 1..1
//* relatesTo[replaced_document].targetIdentifier.use 1..1
//* relatesTo[replaced_document].targetIdentifier.use = #official
//* relatesTo[replaced_document].targetIdentifier.system 1..1
//* relatesTo[replaced_document].targetIdentifier.value 1..1
//* relatesTo[replaced_document].targetIdentifier ^short = "Reference to the Bundle.identifier of the FHIR Clinical Document being replaced, or to some other identifier of a non FHIR document"
* relatesTo[replaced_document] ^mapping[0].identity = "cda"
* relatesTo[replaced_document] ^mapping[=].map = "parentDocument.relatedDocument"

* relatesTo[appended_document] ^short = "The document(s) being appended too"
* relatesTo[appended_document].code = #appends
* relatesTo[appended_document].targetIdentifier 1..1
//* relatesTo[appended_document].targetIdentifier.use 1..1
//* relatesTo[appended_document].targetIdentifier.use = #official

//* relatesTo[appended_document] ^mapping[0].identity = "cda"
//* relatesTo[appended_document] ^mapping[=].map = "parentDocument.relatedDocument"


* section 1..* MS
* section ^mapping[+].identity = "cda"
* section ^mapping[+].map = "bodyChoice.component.NonXMLBody"
* section.code MS
* section.text MS
* section.title 1..1 MS
//seems consistent that where there is a slice in a profile that the Title is required and MS

//* section ^slicing.discriminator.type = #type
//* section ^slicing.discriminator.path = section.entry
//* section ^slicing.rules = #open
//* section ^slicing.description = "Slicing based on the resource type"
//* section contains 
//	nonFHIR_body 0..*
//* section[nonFHIR_body].entry 1..1
//* section[nonFHIR_body] ^short = "A non-FHIR clinical document being wrapped by the FHIR Clinical Document Composition. This can be used where it is necessary to wrap a non-FHIR document in a standard header so as to enable consistent document management."
//* section[nonFHIR_body].entry only Reference(DocumentReference)
//* section[nonFHIR_body] ^mapping[0].identity = "cda"
//* section[nonFHIR_body] ^mapping[+].map = "bodyChoice.component.NonXMLBody"
//might want a specific code for this slice in the future



---

File: repos/HL7_SLASH_fhir-clinical-document/input/fsh/example-document.fsh


Instance: clinical-document-bundle-example1
InstanceOf: Bundle
Description: "Document Bundle example for FHIR Clinical Document"Usage: #example
* meta.lastUpdated = "2024-05-07T13:28:17.000+00:00"
* meta.profile = "http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/clinical-document-bundle"
* identifier.system = "https://example.com/bundleId"
* identifier.value = "26d52355-b71b-4992-a34b-a2476983c166"
* type = #document
* timestamp = "2024-05-07T13:28:17.000+00:00"
* entry[0].fullUrl = "https://example.com/Composition/clinical-document-composition-example1"
* entry[=].resource = clinical-document-composition-example1

* entry[+].fullUrl = "https://example.com/Organization/custodianOrganization"
* entry[=].resource = custodianOrganization
* entry[+].fullUrl = "https://example.com/Practitioner/example"
* entry[=].resource = example
* entry[+].fullUrl = "https://example.com/Practitioner/example2"
* entry[=].resource = example2
* entry[+].fullUrl = "https://example.com/Patient/d1"
* entry[=].resource = d1
* entry[+].fullUrl = "https://example.com/Encounter/doc-example"
* entry[=].resource = doc-example
* entry[+].fullUrl = "https://example.com/Observation/541a72a8-df75-4484-ac89-ac4923f03b81"
* entry[=].resource = 541a72a8-df75-4484-ac89-ac4923f03b81
* entry[+].fullUrl = "https://example.com/MedicationRequest/124a6916-5d84-4b8c-b250-10cefb8e6e86"
* entry[=].resource = 124a6916-5d84-4b8c-b250-10cefb8e6e86
* entry[+].fullUrl = "https://example.com/MedicationStatement/673f8db5-0ffd-4395-9657-6da00420bbc1"
* entry[=].resource = 673f8db5-0ffd-4395-9657-6da00420bbc1
* entry[+].fullUrl = "https://example.com/AllergyIntolerance/47600e0f-b6b5-4308-84b5-5dec157f7637"
* entry[=].resource = 47600e0f-b6b5-4308-84b5-5dec157f7637

* entry[+].fullUrl = "https://example.com/ServiceRequest/service1"
* entry[=].resource = service1
* entry[+].fullUrl = "https://example.com/Consent/consent1"
* entry[=].resource = consent1


Instance: clinical-document-composition-example1
InstanceOf: Composition
Description: "Composition example for FHIR Clinical Document"Usage: #example
* meta.lastUpdated = "2024-05-07T13:28:17.000+00:00"
* meta.profile = "http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/clinical-document-composition"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">          <p><b>Discharge Summary</b></p>          <p><b>CC</b>: Dr. BettaB Careful</p>                   <p><b>status</b>: final</p>          <p><b>patient</b>: Eve Everiewoman</p>          <p><b>author</b>: Doctor Dave / Good Health Clinic</p>          <p><b>encounter</b>: Inpatient encounter, 2024-05-03 - 2024-05-07</p>          <p><b>confidentiality</b>: N</p>          <p><b>Contained sections</b>: </p>          <ul>          <li>Reason for admission</li>          <li>Medications on Discharge</li>          <li>Known allergies</li>          </ul>          </div>"
* extension[0].url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-Composition.version"
* extension[=].valueString = "1715088497"

* extension[+].url = "http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/information-recipient-extension"
* extension[=].extension[0].url = "type"
* extension[=].extension[=].valueCodeableConcept = $participantTypes#PRCP "primary information recipient"
* extension[=].extension[+].url = "party"
* extension[=].extension[=].valueReference = Reference(Practitioner/example2)

* extension[DataEntererExtension].extension[type].valueCodeableConcept = $participantTypes#ENT "data entry person"
* extension[DataEntererExtension].extension[party].valueReference = Reference(Practitioner/example2)

* extension[InformantExtension].extension[type].valueCodeableConcept = $participantTypes#INF "informant"
* extension[InformantExtension].extension[party].valueReference = Reference(Practitioner/example2)

* extension[ParticipantExtension].extension[type].valueCodeableConcept = $participantTypes#ESC "escort"
* extension[ParticipantExtension].extension[party].valueReference = Reference(Practitioner/example2)


* extension[+].url = "http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/OrderExtension"
* extension[=].valueReference = Reference(service1)
* extension[+].url = "http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/consent-extension"
* extension[=].valueReference = Reference(consent1)

* identifier.system = "https://example.com/compId"
* identifier.value = "1d6d6eb8-7d08-4ce1-94d4-19cdaa76ad6f"
* status = #final
* type = $LNC#28655-9
* type.text = "Attending Discharge summary"
* subject = Reference(d1) "Eve Everiewoman"
* encounter = Reference(doc-example)
* date = "2024-05-07T13:28:17.000+00:00"
* author = Reference(example) "Doctor Dave"
* title = "Discharge Summary"
* attester.mode = http://hl7.org/fhir/composition-attestation-mode#legal
* attester.time = "2024-05-07"
* attester.party = Reference(example) "Doctor Dave"
* custodian = Reference(custodianOrganization) "Good Health Clinic"
* confidentiality = #N
* section[0].title = "Reason for admission"
* section[=].code = $LNC#29299-5 "Reason for visit Narrative"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Details</td>\n\n                    <td/>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Acute Asthmatic attack. Was wheezing for days prior to admission.</td>\n\n                    <td/>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>"
* section[=].entry = Reference(541a72a8-df75-4484-ac89-ac4923f03b81)
* section[+].title = "Medications on Discharge"
* section[=].code = $LNC#10183-2 "Hospital discharge medications Narrative"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Medication</td>\n\n                    <td>Last Change</td>\n\n                    <td>Last ChangeReason</td>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Theophylline 200mg BD after meals</td>\n\n                    <td>continued</td>\n\n                  </tr>\n\n                  <tr>\n\n                    <td>Ventolin Inhaler</td>\n\n                    <td>stopped</td>\n\n                    <td>Getting side effect of tremor</td>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>"
* section[=].entry[0] = Reference(124a6916-5d84-4b8c-b250-10cefb8e6e86)
* section[=].entry[+] = Reference(673f8db5-0ffd-4395-9657-6da00420bbc1)
* section[+].title = "Known allergies"
* section[=].code = $LNC#48765-2 "Allergies and adverse reactions Document"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Allergen</td>\n\n                    <td>Reaction</td>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Doxycycline</td>\n\n                    <td>Hives</td>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>"
* section[=].entry = Reference(47600e0f-b6b5-4308-84b5-5dec157f7637)

Instance: custodianOrganization
InstanceOf: Organization
Description: "Example composition content"Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:2.16.840.1.113883.19.5"
* name = "Good Health Clinic"

Instance: example
InstanceOf: Practitioner
Description: "Example composition content"Usage: #example
* meta.lastUpdated = "2013-05-05T16:13:03Z"
* identifier.system = "http://www.acme.org/practitioners"
* identifier.value = "23"
* name.family = "Careful"
* name.given = "Adam"
* name.prefix = "Dr"

Instance: example2
InstanceOf: Practitioner
Description: "Example composition content"Usage: #example
* meta.lastUpdated = "2013-05-05T16:13:03Z"
* identifier.system = "http://www.acme.org/practitioners"
* identifier.value = "27"
* name.family = "Careful"
* name.given = "BettaB"
* name.prefix = "Dr"

Instance: d1
InstanceOf: Patient
Description: "Example composition content"
Usage: #example
* active = true
* name.text = "Eve Everiewoman"
* name.family = "Everiewoman1"
* name.given = "Eve"
* telecom.system = #phone
* telecom.value = "555-555-2003"
* telecom.use = #work
* gender = #female
* birthDate = "1955-01-06"
* address.use = #home
* address.line = "2222 Home Street"

Instance: doc-example
InstanceOf: Encounter
Description: "Example composition content"Usage: #example
* meta.lastUpdated = "2024-05-07T11:28:17.000+00:00"
* identifier.value = "S100"
* status = #finished
* class = $v3-ActCode#IMP "inpatient encounter"
* type.text = "Orthopedic Admission"
* subject = Reference(d1) "Eve Everiewoman"
* period.start = "2024-05-03T13:28:17.000+00:00"
* period.end = "2024-05-07T11:28:17.000+00:00"
* hospitalization.dischargeDisposition.text = "Discharged to care of GP"

Instance: 541a72a8-df75-4484-ac89-ac4923f03b81
InstanceOf: Observation
Description: "Example composition content"Usage: #example
* meta.lastUpdated = "2024-05-03T14:28:17.000+00:00"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"> Acute Asthmatic attack. Was wheezing\n                        for days prior to admission. </div>"
* status = #final
* code = $LNC#46241-6
* code.text = "Reason for admission"
* effectiveDateTime = "2023-08-03"
* performer = Reference(example2) "Dr Careful"
* subject = Reference(d1) "Eve Everiewoman"
* encounter.display = "http://fhir.healthintersections.com.au/open/Encounter/doc-example"
* valueString = "Acute Asthmatic attack. Was wheezing for days prior to admission."

Instance: 124a6916-5d84-4b8c-b250-10cefb8e6e86
InstanceOf: MedicationRequest
Description: "Example composition content"
Usage: #example
* meta.lastUpdated = "2024-05-07T11:28:17.000+00:00"
* status = #unknown
* intent = #order
* medicationCodeableConcept = $SCT#66493003
* medicationCodeableConcept.text = "Theophylline 200mg"
* subject = Reference(d1) "Eve Everiewoman"
* requester = Reference(example) "Peter Practitioner"
* reasonCode.text = "Management of Asthma"
* dosageInstruction.additionalInstruction.text = "Take with Food"
* dosageInstruction.timing.repeat.frequency = 2
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.route = $SCT#394899003 "oral administration of treatment"
* dosageInstruction.doseAndRate.type = $dose-rate-type#ordered "Ordered"
* dosageInstruction.doseAndRate.doseQuantity = 1 '{tablet}' "tablet"

Instance: 673f8db5-0ffd-4395-9657-6da00420bbc1
InstanceOf: MedicationStatement
Description: "Example composition content"
Usage: #example
* status = #active
* statusReason.text = "Management of Asthma"
* medicationCodeableConcept.text = "Ventolin Inhaler"
* subject = Reference(d1) "Eve Everiewoman"
* dateAsserted = "2024-05-07T11:28:17.000+00:00"

Instance: 47600e0f-b6b5-4308-84b5-5dec157f7637
InstanceOf: AllergyIntolerance
Description: "Example composition content"
Usage: #example
* meta.lastUpdated = "2024-05-07T11:28:17.000+00:00"
* clinicalStatus = $allergyintolerance-clinical#active "Active"
* verificationStatus = $allergyintolerance-verification#confirmed "Confirmed"
* type = #allergy
* criticality = #high
* code.text = "Doxycycline"
* patient = Reference(d1) "Eve Everiewoman"
* recordedDate = "2012-09-17"
//* reaction.manifestation = $system#xxx "Hives"
* reaction.manifestation.text = "Hives"

Instance: service1
InstanceOf: ServiceRequest
Description: "Example composition content"
Usage: #example
* meta.lastUpdated = "2024-05-07T11:28:17.000+00:00"
* status = #active "Active"
* intent = #order
* subject = Reference(d1) "Eve Everiewoman"
* code.text = "Discharge to home"

Instance: consent1
InstanceOf: Consent
Description: "Example composition content"
Usage: #example
* meta.lastUpdated = "2024-05-07T11:28:17.000+00:00"
* status = #active "Active"
* patient = Reference(d1) "Eve Everiewoman"
* scope = $consentscope#patient-privacy
* category = $LNC#59284-0
//* sourceAttachment.title = "The terms of the consent in lawyer speak."
* policyRule = $v3-ActCode#OPTIN

---

File: repos/HL7_SLASH_fhir-clinical-document/input/fsh/example-documentReplace.fsh


Instance: clinical-document-bundle-revision
InstanceOf: Bundle
Description: "Document Bundle revision example for FHIR Clinical Document"Usage: #example
* meta.lastUpdated = "2024-05-08T12:28:34.000+00:00"
* meta.profile = "http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/clinical-document-bundle"
* identifier.system = "https://example.com/bundleId"
* identifier.value = "90380bb8-e545-4100-a929-de70b086d023"
* type = #document
* timestamp = "2024-05-08T12:28:34.000+00:00"
* entry[0].fullUrl = "https://example.com/Composition/clinical-document-composition-revision"
* entry[=].resource = clinical-document-composition-revision

* entry[+].fullUrl = "https://example.com/Organization/revised-custodianOrganization"
* entry[=].resource = revised-custodianOrganization
* entry[+].fullUrl = "https://example.com/Practitioner/revised-example"
* entry[=].resource = revised-example
* entry[+].fullUrl = "https://example.com/Practitioner/revised-example2"
* entry[=].resource = revised-example2
* entry[+].fullUrl = "https://example.com/Patient/revised-d1"
* entry[=].resource = revised-d1
* entry[+].fullUrl = "https://example.com/Encounter/revised-doc-example"
* entry[=].resource = revised-doc-example
* entry[+].fullUrl = "https://example.com/Observation/revised-541a72a8-df75-4484-ac89-ac4923f03b81"
* entry[=].resource = revised-541a72a8-df75-4484-ac89-ac4923f03b81
* entry[+].fullUrl = "https://example.com/MedicationRequest/revised-124a6916-5d84-4b8c-b250-10cefb8e6e86"
* entry[=].resource = revised-124a6916-5d84-4b8c-b250-10cefb8e6e86
* entry[+].fullUrl = "https://example.com/MedicationStatement/revised-673f8db5-0ffd-4395-9657-6da00420bbc1"
* entry[=].resource = revised-673f8db5-0ffd-4395-9657-6da00420bbc1
* entry[+].fullUrl = "https://example.com/AllergyIntolerance/revised-47600e0f-b6b5-4308-84b5-5dec157f7637"
* entry[=].resource = revised-47600e0f-b6b5-4308-84b5-5dec157f7637

* entry[+].fullUrl = "https://example.com/ServiceRequest/revised-service1"
* entry[=].resource = revised-service1
* entry[+].fullUrl = "https://example.com/Consent/revised-consent1"
* entry[=].resource = revised-consent1

Instance: clinical-document-composition-revision
InstanceOf: Composition
Description: "Composition revision example for FHIR Clinical Document"Usage: #example
* meta.lastUpdated = "2024-05-07T13:28:17.000+00:00"
* meta.profile = "http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/clinical-document-composition"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">          <p><b>Discharge Summary</b></p>          <p><b>CC</b>: Dr. BettaB Careful</p>                   <p><b>status</b>: final</p>          <p><b>patient</b>: Eve Everywoman</p>          <p><b>author</b>: Doctor Dave / Good Health Clinic</p>          <p><b>encounter</b>: Inpatient encounter, 2024-05-03 - 2024-05-07</p>          <p><b>confidentiality</b>: N</p>          <p><b>Contained sections</b>: </p>          <ul>          <li>Reason for admission</li>          <li>Medications on Discharge</li>          <li>Known allergies</li>          </ul>          </div>"
* extension[0].url = "http://hl7.org/fhir/5.0/StructureDefinition/extension-Composition.version"
* extension[=].valueString = "1715171314"

//* extension[+].url = "http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/ParticipantExtension"
//* extension[=].extension[0].url = "type"
//* extension[data-enterer].extension[type].valueCodeableConcept = $participantTypes#PRCP "primary information recipient"


//* extension[InformationRecipientExtension].extension[type].valueCodeableConcept = $participantTypes#ENT "data entry person"
* extension[InformationRecipientExtension].extension[type].valueCodeableConcept = $participantTypes#PRCP "primary information recipient"
* extension[InformationRecipientExtension].extension[party].valueReference = Reference(Practitioner/revised-example2)


* extension[+].url = "http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/OrderExtension"
* extension[=].valueReference = Reference(revised-service1)
* extension[+].url = "http://hl7.org/fhir/uv/fhir-clinical-document/StructureDefinition/consent-extension"
* extension[=].valueReference = Reference(revised-consent1)


* identifier.system = "https://example.com/compId"
* identifier.value = "1d6d6eb8-7d08-4ce1-94d4-19cdaa76ad6f"
* status = #final
* type = $LNC#28655-9
* type.text = "Attending Discharge summary"
* subject = Reference(revised-d1) "Eve Everywoman"
* encounter = Reference(revised-doc-example)
* date = "2024-05-08T11:28:17.000+00:00"
* author = Reference(revised-example) "Doctor Dave"
* title = "Discharge Summary Revision"
* attester.mode = http://hl7.org/fhir/composition-attestation-mode#legal
* attester.time = "2024-05-07"
* attester.party = Reference(revised-example) "Doctor Dave"
* custodian = Reference(revised-custodianOrganization) "Good Health Clinic"
* confidentiality = #N

* relatesTo[0].code = #replaces
* relatesTo[=].targetIdentifier.system = "https://example.com/bundleId"
* relatesTo[=].targetIdentifier.value = "26d52355-b71b-4992-a34b-a2476983c166"

* section[0].title = "Reason for admission"
* section[=].code = $LNC#29299-5 "Reason for visit Narrative"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Details</td>\n\n                    <td/>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Acute Asthmatic attack. Was wheezing for days prior to admission.</td>\n\n                    <td/>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>"
* section[=].entry = Reference(revised-541a72a8-df75-4484-ac89-ac4923f03b81)
* section[+].title = "Medications on Discharge"
* section[=].code = $LNC#10183-2 "Hospital discharge medications Narrative"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Medication</td>\n\n                    <td>Last Change</td>\n\n                    <td>Last ChangeReason</td>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Theophylline 200mg BD after meals</td>\n\n                    <td>continued</td>\n\n                  </tr>\n\n                  <tr>\n\n                    <td>Ventolin Inhaler</td>\n\n                    <td>stopped</td>\n\n                    <td>Getting side effect of tremor</td>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>"
* section[=].entry[0] = Reference(revised-124a6916-5d84-4b8c-b250-10cefb8e6e86)
* section[=].entry[+] = Reference(revised-673f8db5-0ffd-4395-9657-6da00420bbc1)
* section[+].title = "Known allergies"
* section[=].code = $LNC#48765-2 "Allergies and adverse reactions Document"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n\n              <table>\n\n                <thead>\n\n                  <tr>\n\n                    <td>Allergen</td>\n\n                    <td>Reaction</td>\n\n                  </tr>\n\n                </thead>\n\n                <tbody>\n\n                  <tr>\n\n                    <td>Doxycycline</td>\n\n                    <td>Hives</td>\n\n                  </tr>\n\n                </tbody>\n\n              </table>\n\n            </div>"
* section[=].entry = Reference(revised-47600e0f-b6b5-4308-84b5-5dec157f7637)

Instance: revised-custodianOrganization
InstanceOf: Organization
Description: "Example composition content"Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:2.16.840.1.113883.19.5"
* name = "Good Health Clinic"

Instance: revised-example
InstanceOf: Practitioner
Description: "Example composition content"Usage: #example
* meta.lastUpdated = "2013-05-05T16:13:03Z"
* identifier.system = "http://www.acme.org/practitioners"
* identifier.value = "23"
* name.family = "Careful"
* name.given = "Adam"
* name.prefix = "Dr"

Instance: revised-example2
InstanceOf: Practitioner
Description: "Example composition content"Usage: #example
* meta.lastUpdated = "2013-05-05T16:13:03Z"
* identifier.system = "http://www.acme.org/practitioners"
* identifier.value = "27"
* name.family = "Careful"
* name.given = "BettaB"
* name.prefix = "Dr"

Instance: revised-d1
InstanceOf: Patient
Description: "Example composition content"
Usage: #example
* active = true
* name.text = "Eve Everywoman"
* name.family = "Everywoman1"
* name.given = "Eve"
* telecom.system = #phone
* telecom.value = "555-555-2003"
* telecom.use = #work
* gender = #female
* birthDate = "1955-01-06"
* address.use = #home
* address.line = "2222 Home Street"

Instance: revised-doc-example
InstanceOf: Encounter
Description: "Example composition content"Usage: #example
* meta.lastUpdated = "2024-05-07T11:28:17.000+00:00"
* identifier.value = "S100"
* status = #finished
* class = $v3-ActCode#IMP "inpatient encounter"
* type.text = "Orthopedic Admission"
* subject = Reference(revised-d1) "Eve Everywoman"
* period.start = "2024-05-03T13:28:17.000+00:00"
* period.end = "2024-05-07T11:28:17.000+00:00"
* hospitalization.dischargeDisposition.text = "Discharged to care of GP"

Instance: revised-541a72a8-df75-4484-ac89-ac4923f03b81
InstanceOf: Observation
Description: "Example composition content"Usage: #example
* meta.lastUpdated = "2024-05-03T14:28:17.000+00:00"
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"> Acute Asthmatic attack. Was wheezing\n                        for days prior to admission. </div>"
* status = #final
* code = $LNC#46241-6
* code.text = "Reason for admission"
* effectiveDateTime = "2023-08-03"
* performer = Reference(revised-example2) "Dr Careful"
* subject = Reference(revised-d1) "Eve Everywoman"
* encounter.display = "http://fhir.healthintersections.com.au/open/Encounter/revised-doc-example"
* valueString = "Acute Asthmatic attack. Was wheezing for days prior to admission."

Instance: revised-124a6916-5d84-4b8c-b250-10cefb8e6e86
InstanceOf: MedicationRequest
Description: "Example composition content"
Usage: #example
* meta.lastUpdated = "2024-05-07T11:28:17.000+00:00"
* status = #unknown
* intent = #order
* medicationCodeableConcept = $SCT#66493003
* medicationCodeableConcept.text = "Theophylline 200mg"
* subject = Reference(revised-d1) "Eve Everywoman"
* requester = Reference(revised-example) "Peter Practitioner"
* reasonCode.text = "Management of Asthma"
* dosageInstruction.additionalInstruction.text = "Take with Food"
* dosageInstruction.timing.repeat.frequency = 2
* dosageInstruction.timing.repeat.period = 1
* dosageInstruction.timing.repeat.periodUnit = #d
* dosageInstruction.route = $SCT#394899003 "oral administration of treatment"
* dosageInstruction.doseAndRate.type = $dose-rate-type#ordered "Ordered"
* dosageInstruction.doseAndRate.doseQuantity = 1 '{tablet}' "tablet"

Instance: revised-673f8db5-0ffd-4395-9657-6da00420bbc1
InstanceOf: MedicationStatement
Description: "Example composition content"
Usage: #example
* status = #active
* statusReason.text = "Management of Asthma"
* medicationCodeableConcept.text = "Ventolin Inhaler"
* subject = Reference(revised-d1) "Eve Everywoman"
* dateAsserted = "2024-05-07T11:28:17.000+00:00"

Instance: revised-47600e0f-b6b5-4308-84b5-5dec157f7637
InstanceOf: AllergyIntolerance
Description: "Example composition content"
Usage: #example
* meta.lastUpdated = "2024-05-07T11:28:17.000+00:00"
* clinicalStatus = $allergyintolerance-clinical#active "Active"
* verificationStatus = $allergyintolerance-verification#confirmed "Confirmed"
* type = #allergy
* criticality = #high
* code.text = "Doxycycline"
* patient = Reference(revised-d1) "Eve Everywoman"
* recordedDate = "2012-09-17"
//* reaction.manifestation = $system#xxx "Hives"
* reaction.manifestation.text = "Hives"

Instance: revised-service1
InstanceOf: ServiceRequest
Description: "Example composition content"
Usage: #example
* meta.lastUpdated = "2024-05-07T11:28:17.000+00:00"
* status = #active "Active"
* intent = #order
* subject = Reference(revised-d1) "Eve Everywoman"
* code.text = "Discharge to home"

Instance: revised-consent1
InstanceOf: Consent
Description: "Example composition content"
Usage: #example
* meta.lastUpdated = "2024-05-07T11:28:17.000+00:00"
* status = #active "Active"
* patient = Reference(revised-d1) "Eve Everywoman"
* scope = $consentscope#patient-privacy
* category = $LNC#59284-0
//* sourceAttachment.title = "The terms of the consent in lawyer speak."
* policyRule = $v3-ActCode#OPTIN

---

File: repos/HL7_SLASH_fhir-clinical-document/input/fsh/example-Transaction.fsh

Instance: clinical-document-as-transaction-bundle
InstanceOf: Bundle
Description: "Document Bundle example for FHIR Clinical Document"
Usage: #example
* meta.lastUpdated = "2024-05-07T13:28:17.000+00:00"
* identifier.system = "https://example.com/bundleId"
* identifier.value = "26d52355-b71b-4992-a34b-a2476983c999"
* type = #transaction
* timestamp = "2024-05-07T13:28:17.000+00:00"
* entry[0].fullUrl = "https://example.com/Composition/clinical-document-composition-example1"
* entry[=].resource = clinical-document-composition-example1
* entry[=].request.method = #POST
* entry[=].request.url = "Composition"
* entry[+].fullUrl = "https://example.com/Organization/custodianOrganization"
* entry[=].resource = custodianOrganization
* entry[=].request.method = #POST
* entry[=].request.url = "Organization"
* entry[+].fullUrl = "https://example.com/Practitioner/example"
* entry[=].resource = example
* entry[=].request.method = #POST
* entry[=].request.url = "Practitioner"
* entry[+].fullUrl = "https://example.com/Practitioner/example2"
* entry[=].resource = example2
* entry[=].request.method = #POST
* entry[=].request.url = "Practitioner"
* entry[+].fullUrl = "https://example.com/Patient/d1"
* entry[=].resource = d1
* entry[=].request.method = #POST
* entry[=].request.url = "Patient"
* entry[+].fullUrl = "https://example.com/Encounter/doc-example"
* entry[=].resource = doc-example
* entry[=].request.method = #POST
* entry[=].request.url = "Encounter"
* entry[+].fullUrl = "https://example.com/Observation/541a72a8-df75-4484-ac89-ac4923f03b81"
* entry[=].resource = 541a72a8-df75-4484-ac89-ac4923f03b81
* entry[=].request.method = #POST
* entry[=].request.url = "Observation"
* entry[+].fullUrl = "https://example.com/MedicationRequest/124a6916-5d84-4b8c-b250-10cefb8e6e86"
* entry[=].resource = 124a6916-5d84-4b8c-b250-10cefb8e6e86
* entry[=].request.method = #POST
* entry[=].request.url = "MedicationRequest"
* entry[+].fullUrl = "https://example.com/MedicationStatement/673f8db5-0ffd-4395-9657-6da00420bbc1"
* entry[=].resource = 673f8db5-0ffd-4395-9657-6da00420bbc1
* entry[=].request.method = #POST
* entry[=].request.url = "MedicationStatement"
* entry[+].fullUrl = "https://example.com/AllergyIntolerance/47600e0f-b6b5-4308-84b5-5dec157f7637"
* entry[=].resource = 47600e0f-b6b5-4308-84b5-5dec157f7637
* entry[=].request.method = #POST
* entry[=].request.url = "AllergyIntolerance"
* entry[+].fullUrl = "https://example.com/ServiceRequest/service1"
* entry[=].resource = service1
* entry[=].request.method = #POST
* entry[=].request.url = "ServiceRequest"
* entry[+].fullUrl = "https://example.com/Consent/consent1"
* entry[=].resource = consent1
* entry[=].request.method = #POST
* entry[=].request.url = "Consent"

---

File: repos/HL7_SLASH_fhir-clinical-document/input/fsh/extensions.fsh



Extension: ConsentExtension
Id: consent-extension
Title: "Consent Extension"
Description: "Consent Extension refers to a FHIR Consent instance that indicates a patient's consent"
* ^context.type = #element
* ^context.expression = "Composition"
* url MS
* valueReference 1.. MS
* valueReference only Reference(Consent)
* valueReference ^sliceName = "valueReference"

Extension: DataEntererExtension
Id: data-enterer-extension
Title: "Data Enterer Extension"
Description: "The Data Enterer Extension represents the person who transferred the content, written or dictated, into the clinical document. To clarify, an author provides the content, subject to their own interpretation; a dataEnterer adds an author's information to the electronic system."
//* ^context.type = #element
//* ^context.expression = "Composition"
//* valueReference 1.. MS
//* valueReference only Reference(Practitioner or PractitionerRole)
//* valueReference ^sliceName = "valueReference"
* ^context.type = #element
* ^context.expression = "Composition"
* extension contains
	type 1..* and
	function 0..* and
	time 0..1 and
	party 1..1 MS
* extension[type]
//* extension[type] ^short = "A code specifying the type of participation, such as data entry person, informant, primary information recipient, or tracker"
* extension[type] ^short = "Meaning and purpose of participation, in creation of the clinical document. The list includes: data entry person, informant, primary information recipient, and tracker. Other types are allowed."
//* extension[type].value[x] only CodeableConcept

* extension[type].valueCodeableConcept 1..1
* extension[type].valueCodeableConcept = $participantTypes#ENT "data entry person"
* extension[function]
//* extension[function] ^short = "A code specifying the granular, or exact, function in participation"
* extension[function] ^short = "Exact function of the participant in the creation of the clinical document. This is more granular than type."
* extension[function].value[x] only CodeableConcept
* extension[function].valueCodeableConcept from http://terminology.hl7.org/ValueSet/v3-ParticipationFunction (extensible)
* extension[function].valueCodeableConcept 1..1
* extension[time]
* extension[time] ^short = "Time period of participation"
//* extension[time] ^short = "Period of time during which the participant is involved in creation of the clinical document."
* extension[time].value[x] only Period
* extension[time].valuePeriod 1..1
* extension[party]
* extension[party] ^short = "participant"
//* extension[party] ^short = "A FHIR Reference to the person, PracitionerRole, device or organization participating in the clinical document."
* extension[party].value[x] only Reference
* extension[party].valueReference only Reference(Practitioner or PractitionerRole or Patient or RelatedPerson or Device or Organization)
* extension[party].valueReference 1..1



Extension: InformantExtension
Id: informant-extension
Title: "Informant Extension"
Description: "Informant Extension describes an information source for any content within the clinical document. This informant is constrained for use when the source of information is an assigned health care provider for the patient."
//* ^context.type = #element
//* ^context.expression = "Composition"
//* valueReference 1.. MS
//* valueReference only Reference(Practitioner or PractitionerRole or Patient or RelatedPerson)
//* valueReference ^sliceName = "valueReference"
* ^context.type = #element
* ^context.expression = "Composition"
* extension contains
	type 1..* and
	function 0..* and
	time 0..1 and
	party 1..1 MS
* extension[type]
//* extension[type] ^short = "A code specifying the type of participation, such as data entry person, informant, primary information recipient, or tracker"
* extension[type] ^short = "Meaning and purpose of participation, in creation of the clinical document. The list includes: data entry person, informant, primary information recipient, and tracker. Other types are allowed."
//* extension[type].value[x] only CodeableConcept

* extension[type].valueCodeableConcept 1..1
* extension[type].valueCodeableConcept = $participantTypes#INF "informant"
* extension[function]
//* extension[function] ^short = "A code specifying the granular, or exact, function in participation"
* extension[function] ^short = "Exact function of the participant in the creation of the clinical document. This is more granular than type."
* extension[function].value[x] only CodeableConcept
* extension[function].valueCodeableConcept from http://terminology.hl7.org/ValueSet/v3-ParticipationFunction (extensible)
* extension[function].valueCodeableConcept 1..1
* extension[time]
* extension[time] ^short = "Time period of participation"
//* extension[time] ^short = "Period of time during which the participant is involved in creation of the clinical document."
* extension[time].value[x] only Period
* extension[time].valuePeriod 1..1
* extension[party]
* extension[party] ^short = "participant"
//* extension[party] ^short = "A FHIR Reference to the person, PracitionerRole, device or organization participating in the clinical document."
* extension[party].value[x] only Reference
* extension[party].valueReference only Reference(Practitioner or PractitionerRole or Patient or RelatedPerson or Device or Organization)
* extension[party].valueReference 1..1



Extension: InformationRecipientExtension
Id: information-recipient-extension
Title: "Information Recipient Extension"
Description: "The Information Recipient Extension records the intended recipient of the information at the time the document was created."
//* ^context.type = #element
//* ^context.expression = "Composition"
//* valueReference 1.. MS
//* valueReference only Reference(Practitioner or PractitionerRole or Patient)
//* valueReference ^sliceName = "valueReference"
* ^context.type = #element
* ^context.expression = "Composition"
* extension contains
	type 1..* and
	function 0..* and
	time 0..1 and
	party 1..1 MS
* extension[type]
//* extension[type] ^short = "A code specifying the type of participation, such as data entry person, informant, primary information recipient, or tracker"
* extension[type] ^short = "Meaning and purpose of participation, in creation of the clinical document. The list includes: data entry person, informant, primary information recipient, and tracker. Other types are allowed."
* extension[type].value[x] only CodeableConcept
* extension[type].valueCodeableConcept from clinical-doc-participant-types-vs (required)
* extension[type].valueCodeableConcept ^binding.description = "primary information recipient (PRCP), secondary information recipient (TRC) or generic information recipient (IRCP)"
* extension[type].valueCodeableConcept 1..1
* extension[function]
//* extension[function] ^short = "A code specifying the granular, or exact, function in participation"
* extension[function] ^short = "Exact function of the participant in the creation of the clinical document. This is more granular than type."
* extension[function].value[x] only CodeableConcept
* extension[function].valueCodeableConcept from http://terminology.hl7.org/ValueSet/v3-ParticipationFunction (extensible)
* extension[function].valueCodeableConcept 1..1
* extension[time]
* extension[time] ^short = "Time period of participation"
//* extension[time] ^short = "Period of time during which the participant is involved in creation of the clinical document."
* extension[time].value[x] only Period
* extension[time].valuePeriod 1..1
* extension[party]
* extension[party] ^short = "participant"
//* extension[party] ^short = "A FHIR Reference to the person, PracitionerRole, device or organization participating in the clinical document."
* extension[party].value[x] only Reference
* extension[party].valueReference only Reference(Practitioner or PractitionerRole or Patient or RelatedPerson or Device or Organization)
* extension[party].valueReference 1..1




//Extension: ParticipantExtension
//Id: ParticipantExtension
//Title: "Participant Extension"
//Description: "Participant Extension identifies supporting entities, including parents, relatives, caregivers, insurance policyholders, guarantors, and others related in some way to the patient. A supporting person or organization is an individual or an organization with a relationship to the patient. A supporting person who is playing multiple roles would be recorded in multiple participants (e.g., emergency contact and next-of-kin)."


Extension: ParticipantExtension
Id: ParticipantExtension
Title: "Participant Extension"
Description: "Participant Extension identifies supporting entities, including parents, relatives, caregivers, insurance policyholders, guarantors, and others related in some way to the patient. A supporting person or organization is an individual or an organization with a relationship to the patient. A supporting person who is playing multiple roles would be recorded in multiple participants (e.g., emergency contact and next-of-kin)."
//
//**Data Enterer**
//A Data Enterer represents the person who transferred the content, written or dictated, into the clinical document. To clarify, an author provides the content, subject to their own interpretation; a dataEnterer adds an author's information to the electronic system.
//
//**Informant**
//An Informant is an information source for any content within the clinical document. This informant is constrained for use when the source of information is an assigned health care provider for the patient.
//
//**Information Recipient**
//An Information Recipient is the intended recipient of the information at the time the document was created.
//
//**Participant**
//A Participant identifies supporting entities, including parents, relatives, caregivers, insurance policyholders, guarantors, and others related in some way to the patient. A supporting person or organization is an individual or an organization with a relationship to the patient. A supporting person who is playing multiple roles would be recorded in multiple participants (e.g., emergency contact and next-of-kin)."
* ^context.type = #element
* ^context.expression = "Composition"
* extension contains
	type 1..* and
	function 0..* and
	time 0..1 and
	party 1..1 MS

* extension[type]
//* extension[type] ^short = "A code specifying the type of participation, such as data entry person, informant, primary information recipient, or tracker"
* extension[type] ^short = "Meaning and purpose of participation, in creation of the clinical document. The list includes: data entry person, informant, primary information recipient, and tracker. Other types are allowed."
* extension[type].value[x] only CodeableConcept
* extension[type].valueCodeableConcept from clinical-doc-participant-types-vs (extensible)
* extension[type].valueCodeableConcept 1..1

* extension[function]
//* extension[function] ^short = "A code specifying the granular, or exact, function in participation"
* extension[function] ^short = "Exact function of the participant in the creation of the clinical document. This is more granular than type."
* extension[function].value[x] only CodeableConcept
* extension[function].valueCodeableConcept from http://terminology.hl7.org/ValueSet/v3-ParticipationFunction (extensible)
* extension[function].valueCodeableConcept 1..1

* extension[time]
* extension[time] ^short = "Time period of participation"
//* extension[time] ^short = "Period of time during which the participant is involved in creation of the clinical document."
* extension[time].value[x] only Period
* extension[time].valuePeriod 1..1

* extension[party]
* extension[party] ^short = "participant"
//* extension[party] ^short = "A FHIR Reference to the person, PracitionerRole, device or organization participating in the clinical document."
* extension[party].value[x] only Reference
* extension[party].valueReference only Reference(Practitioner or PractitionerRole or Patient or RelatedPerson or Device or Organization)
* extension[party].valueReference 1..1




Extension: OrderExtension
Id: OrderExtension
Title: "Order Extension"
Description: "The Order Extension represents orders that are fulfilled by this document such as a radiologists report of an x-ray."
* ^context.type = #element
* ^context.expression = "Composition"
* valueReference 1.. MS
* valueReference only Reference(ServiceRequest)
* valueReference ^sliceName = "valueReference"

// Extension: PerformerExtension
// Id: PerformerExtension
// Title: "Performer Extension"
// Description: "The Performer Extension represents clinicians who actually and principally carry out the clinical services being documented. In a transfer of care this represents the healthcare providers involved in the current or pertinent historical care of the patient. Preferably, the patients key healthcare care team members would be listed, particularly their primary physician and any active consulting physicians, therapists, and counselors."
// * ^context.type = #element
// * ^context.expression = "Composition"
// * valueReference 1.. MS
// * valueReference only Reference(Practitioner or PractitionerRole)
// * valueReference ^sliceName = "valueReference"


---

File: repos/HL7_SLASH_fhir-clinical-document/input/fsh/operations.fsh

Instance: convert-to-transaction-bundle
InstanceOf: OperationDefinition
Title: "Convert to transaction bundle"
Usage: #definition
Description: "Convert a FHIR Clinical Document into a FHIR transaction bundle."
* name = "ConvertToTransactionBundle"
* title = "Convert to Transaction Bundle"
* status = #active
* kind = #operation
* publisher = "HL7 International Structure Documents Work Group"
* system = false
* type = true
* instance = false
* code = #match
* parameter[+]
  * name = #FHIRClinicalDocument
  * use = #in
  * min = 1
  * max = "1"
  * documentation = "Post a FHIR Clinical Document"
  * type = #Bundle
* parameter[+]
  * name = #FHIRTransactionBundle
  * use = #out
  * min = 1
  * max = "1"
  * documentation = "Operation returns a FHIR Transaction Bundle"
  * type = #Bundle


---

File: repos/HL7_SLASH_fhir-clinical-document/input/fsh/valuesets.fsh

ValueSet: ClinicalDocParticipantTypesVs
Id: clinical-doc-participant-types-vs 
Title: "Clinical Document Participant Types Value set"
Description: "Subset of codes from v3-ParticipationType for use as Clinical Document Participant Type codes"
* ^status = #draft
* ^experimental = true
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#ENT "data entry person"
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#INF "informant"
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#PRCP "primary information recipient"
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#TRC "tracker"

ValueSet: ClinicalDocInformationRecipientVs
Id: clinical-doc-information-recipient-vs 
Title: "Clinical Document Participant Types that are information recipients"
Description: "Subset of codes from v3-ParticipationType for use as Clinical Document Participant Type codes, which are specifically CDA information recipients"
* ^status = #draft
* ^experimental = true
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#PRCP "primary information recipient"
* http://terminology.hl7.org/CodeSystem/v3-ParticipationType#TRC "tracker"

ValueSet: ClinicalDocParticipantVs
Id: clinical-doc-participant-vs 
Title: "Clinical Document Participant Value set"
Description: "Value set is a subset that limits to values not used in other slices"
* ^status = #draft
* ^experimental = true
* include codes from system http://terminology.hl7.org/CodeSystem/v3-ParticipationType
* exclude http://terminology.hl7.org/CodeSystem/v3-ParticipationType#ENT "data entry person"
* exclude http://terminology.hl7.org/CodeSystem/v3-ParticipationType#INF "informant"
* exclude http://terminology.hl7.org/CodeSystem/v3-ParticipationType#IRCP "information recipient"
* exclude http://terminology.hl7.org/CodeSystem/v3-ParticipationType#PRCP "primary information recipient"
* exclude http://terminology.hl7.org/CodeSystem/v3-ParticipationType#TRC "tracker"


---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/appendix.md



---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/capabilitystatements.md

### Brief note on CapabilityStatements
You will not find requirement CapabilityStatements in this IG. The IG is a high level guidance for CORE FHIR Clinical Documents. It is expected that IGs deriving from the guidance in this IG will contain appropriate CapabilityStatements for servers and clients.

---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/dependencies_globals_CrossVersionAnalysis.md

**Dependency Table**

{% include dependency-table.xhtml %}

**Globals Table**

{% include globals-table.xhtml %}

**Cross FHIR Version Analysis**

{% include cross-version-analysis.xhtml %}

---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

The following package file contains an NPM Package used by many FHIR tools. It includes the profiles, list of pages and URLs in the IG, etc. as defined in this version of the Implementation Guide: [Package](package.tgz)

In addition there are format specific definitions files.

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/immutableParseable.md

FHIR Clinical Documents are used in a number of different ways. To support these different uses, it can be necessary to store a received document as an immutable object and/or parse a received document to extract observations and other entries. The following discussion expands upon the [Document End-Points discussion](https://hl7.org/fhir/R4/documents.html#bundle) in FHIR Documents. 

### FHIR Clinical Document as an Immutable Object
A FHIR Clinical Document is a FHIR bundle of type=document whose first entry is a FHIR composition. A FHIR Clinical Document that is posted to a FHIR server's **[baseURL]/Bundle** or **[baseURL]/Binary** becomes an immutable object on that server in that the document can be retrieved just as it was posted, with no alterations in legally authenticated document contents. (Bundle.id and Bundle.meta will change upon posting).

### FHIR Clinical Document as a Parseable Object
FHIR allows for a clinical document to be parseable such that a FHIR server can process all of the resources that it contains as individual resources. The resulting parsed objects are no longer part of the original immutable document which was received. There is no guarantee that reconstruction of a document from parsed objects will return exactly the same legally authenticated document -  ordering can change, scope of transitively included bundle entries may differ, etc. 

While FHIR servers vary, **many FHIR servers are only designed to parse FHIR bundles of specific types** (e.g. type=transaction). For example, A FHIR Clinical Document of type=document that is posted to a server's **[baseURL]** end-point can generate an error. In such a case, it is possible to transform a document bundle into a transaction bundle, which can then be successfully posted to **[baseURL]**. Transformation from a bundle of type=document to a bundle of type=transaction can be implemented as part of a server-side [operation](https://hl7.org/fhir/R4/operations.html) - see Operation [convert-to-transaction-bundle](operations.html) for more details.


---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/index.md

<blockquote class="note-to-balloters">
Structured Documents committee will more fully consider FHIR R6 Composition revisions based on the result of balloting this IG. 
Accordingly, it is the intent of the HL7 Structured Documents WG that this IG replace the current FHIR R4 and R5 Core Clinical Document guidance.
</blockquote>

### Background
Today there are more than 257 existing profiles on Bundle, and more than 180 existing profiles on Composition, many of which represent clinical documents, which take different approaches to representing the information and structures needed in a clinical document. The [HL7 Clinical Document Architecture (CDA) standard](https://hl7.org/cda/stds/online-navigation/2024May/index.html) has been widely implemented. CDA was created in 2005 with industry stakeholders to represent interoperable Clinical Documents. Universally, consistently represented, interoperable FHIR Clinical Documents are needed as the industry moves towards FHIR. FHIR stakeholders interested in exchanging Clinical Documents in FHIR intend to leverage the learnings and principles of CDA. 

This implementation guide defines a canonical representation of a clinical document in FHIR. It serves as a common universal starting point for those creating their own FHIR clinical document specifications, and supports CDA users who wish to migrate to a FHIR-based representation of clinical documents. This is a universal realm guide for use worldwide to facilitate consistency. 
  
### What is a FHIR Clinical Document?
A FHIR Clinical Document is a clinical document that conforms to this implementation guide. A clinical document is a documentation of clinical observations and services, with the following characteristics:
* **Persistence**– A clinical document continues to exist in an unaltered state, for a time period defined by local and regulatory requirements. Note: documents outlive the servers (and often the syntax) on which they are created.
* **Stewardship** – A clinical document is maintained by an organization entrusted with its care.
* **Potential for authentication** – A clinical document is an assemblage of information that is intended to be legally authenticated.
* **Context** – A clinical document establishes the default context for its contents.
* **Wholeness** – Authentication of a clinical document applies to the whole and does not apply to portions of the document without the full context of the document.
* **Human readability** – A clinical document is human readable.

From a technical perspective, a FHIR Clinical Document is a document Bundle containing a Composition and artifacts referred to by the Composition sections. The Composition is similar to an index, but also contains key header information. The FHIR Clinical Document IG derives from [core FHIR Documents guidance](https://hl7.org/fhir/R4/documents.html), adding further guidance and constraints. It is important to remember that the entire document Bundle is the FHIR Clinical Document, not just the Composition. 
  
### Human readability and rendering FHIR Clinical Documents
[FHIR core narrative guidance](https://hl7.org/fhir/R4/narrative.html) stipulates that a resource's narrative "SHALL reflect all content needed for a human to understand the essential clinical and business information for the resource". In addition, to ensure the unambiguous communication of a clinical document's attested narrative, this IG requires that:

1. There must be a deterministic method by which a recipient of an arbitrary FHIR Clinical Document can display the narrative content of the note on a standard Web browser. 
2. Human readability shall not require a sender to transmit a special style sheet along with a FHIR Clinical Document. It must be possible to render all FHIR Clinical Documents with a single style sheet and general-market display tools.
3. Human readability applies to the authenticated content. There may be additional information conveyed in the document that is there primarily for machine processing that is not authenticated and need not be rendered.

Clinical document metadata (e.g. patient name and date of birth, participating providers) may also need to be rendered, with the caveat as stated in the [Consolidated CDA Templates for Clinical Notes](https://www.hl7.org/ccdasearch/pdfs/CCDA_Volume_One.pdf) standard, "Metadata carried in the header may already be available for rendering from EHRs or other sources external to the document. An example of this would be a doctor using an EHR that already contains the patient’s name, date of birth, current address, and phone number. When a CDA document is rendered within that EHR, those pieces of information may not need to be displayed since they are already known and displayed within the EHR’s user interface".

The Composition resource is special in that it can convey narrative in both Composition.text and Composition.section.text. This IG recommends that document metadata be conveyed in Composition.text whereas attested narrative be conveyed in Composition.section.text. Furthermore, while the document recipient must be able to render the contents of Composition.section.text, they can optionally render Composition.text or choose to ignore Composition.text particularly where they are capable of parsing the structured Composition fields. To summarize: 

* The FHIR Clinical Document creator
  * **SHALL** place attested narrative into Composition.section.text.
  * **SHOULD NOT** redundantly place attested narrative in both Composition.text and Composition.section.text. 
  * **MAY** include narrative that is not derived from any structured data.
  * **SHOULD** include document metadata (e.g. patient) in Composition.text.
  * **MAY** include a list of document sections in Composition.text
* The FHIR Clinical Document recipient
  * **SHALL** include, at a minimum, Composition.title, Composition.section.title and Composition.section.text in any rendition of the document. 
  * **MAY** include Composition.text in a rendition of the document.
  * **MAY** render additional document information (such as patient name and date of birth) derived from structured Composition fields.

These rules apply even for other narrative type fields (e.g. FHIR R5 Composition.note, FHIR 'note' extension). 

Good practice recommends that the following be present whenever the document is viewed: Document title and document dates; Service and encounter types, and date ranges as appropriate; Names of all persons along with their roles, participations, participation date ranges, identifiers, address, and telecommunications information; Names of selected organizations along with their roles, participations, participation date ranges, identifiers, address, and telecommunications information; Date of birth for subject(s); Patient identifying information.

Possible security concerns and mitigations related to malicious narrative, particularly narrative that contains active content, are discussed [here](https://hl7.org/fhir/R4/security.html#narrative).

  
### Relationship to other FHIR document specifications
As noted above, a primary motivation for this IG is to present a canonical starting point for those creating their own FHIR clinical document specifications or for those CDA users who wish to migrate to a FHIR-based representation of clinical documents. That said, for the existing Bundle- and Composition-derived artifacts designed to support clinical documents, it is important to have a long-range reconciliation plan. 

The reconciliation plan suggested by this IG is:
* Detailed analysis of existing artifacts. For instance, we derive from FHIR Core and have borrowed from the [International Patient Summary IG](http://hl7.org/fhir/uv/ips/) and the [C-CDA on FHIR IG]( http://hl7.org/fhir/us/ccda/). This includes several extensions from the C-CDA on FHIR IG.
* Let this IG mature and gain implementation experience.
* Plan for artifacts to derive from this IG by FHIR R6. Preparation includes: (1) backport key FHIR R6 capabilities now so as to minimize impact on implementers; (2) propose deprecating the FHIR core [ClinicalDocument](https://hl7.org/fhir/R4/clinicaldocument.html) profile in FHIR R6; (3) work with artifact developers that derive from FHIR core [ClinicalDocument](https://hl7.org/fhir/R4/clinicaldocument.html) to ensure their requirements have been met; (4) Propose revisions to FHIR R6 Composition that subsume Composition extensions in this IG (such as adding Composition.participant, adding Composition.basedOn, adding Composition.partOf). 

### Contact information
Please contact the HL7 Structured Documents WG with any questions, or the following IG developers about the content in this IG:
Bob Dolin - bdolin@elimu.org
Bret Heale - bheale@humanizedhealthconsulting.com


---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/ip_statement.md

**IP Statements**

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/mapping.md

### CDA mapping background
The FHIR Clinical Document IG was originally derived from the HL7 Clinical Document Architecture, and was developed in part to resolve CDA to FHIR mapping discrepancies found across a number of FHIR-based artifacts. Landscape analysis leading up to the development of this IG revealed HUNDREDS of existing Bundle and Composition profiles, many of which are designed for clinical documents, with no clear canonical pattern upon which future FHIR-based clinical documents work should be based. Existing profiles and IGs take many different approaches to representing various CDA constructs. 
  
### CDA mapping scope
The FHIR Clinical Document IG is aligned with CDA, but not a mirror image of CDA. While this IG is based on CDA and will enable a straightforward mapping from CDA to FHIR, it will not necessarily provide a reverse mapping. Future IG updates will assess the need for additional profiles, and may add features that go beyond what is capable with today's CDA. 

Scope for this version of the IG is limited to FHIR artifacts reflecting the CDA Header. More precisely, and as shown in the following figure within the red boxes, scope includes FHIR artifacts corresponding to:
1. CDA header attributes;
2. CDA header participants, excluding profiles corresponding to CDA header entities; 
3. CDA header relationships, excluding profiles corresponding to CDA header related Acts; 
4. CDA body choice; 
5. CDA section attributes; 
6. CDA section participants, excluding profiles corresponding to RIM entities; 
7. CDA section relationships, excluding profiles corresponding to RIM Acts. 
<img src="CDA_RMIM.png" height="471" width="715" border=1/>
  
### CDA mapping
Detailed mappings of this IG can be found on the Profile Structure Definitions. See [Composition](StructureDefinition-clinical-document-composition-mappings.html) and [Bundle](StructureDefinition-clinical-document-bundle-mappings.html) mappings.

<p>A high level mapping from CDA to FHIR Clinical Document is shown here. Composition attributes in <b>bold</b> have a minimal cardinality of 1 in the core resource. Composition attributes in green represent extensions. <a href="https://confluence.hl7.org/display/SD/CDA+Extensions">CDA extensions</a> that map into the FHIR bundle and composition (prefixed with "sdtc:") are also shown.</p>

<table><tr><td><img width="80%" height="80%" src="HL7 CDA-FHIR Alignment - Image-Mapping.svg" /></td></tr></table>
  
### CDA mapping caveats
 - **Limitations on certain CDA document types**: The [FHIR DiagnosticReport Resource](https://hl7.org/fhir/R4/diagnosticreport.html) provides guidance around use of DiagnosticReport vs. Composition, stating that "if you have a highly structured report, then use DiagnosticReport" and "for more narrative driven reports ... the Composition resource would be more appropriate". As a result, highly structured CDA documents (e.g. a detailed operative report or a detailed imaging report) may be more appropriately mapped to the FHIR DiagnosticReport. 
 - **CDA recordTarget**: CDA recordTarget has cardinality 1..* whereas FHIR composition.subject has cardinality 0..1. To accommodate those cases where CDA has more than one recordTarget, this IG allows composition.subject to be a Group (which can then contain more than one patient).
 - **Composition required attributes not present in CDA**: Whereas CDA opted to not include a document status, Composition.status is a required field. In general, Composition.status will be "final", but see Special Topic [Clinical Document Succession Management](versioning.html) for a more detailed discussion.
 - **CDA NonXMLBody**: This IG maps CDA's NonXMLBody into Composition.section. To communicate, say, a PDF document using this approach, one would populate the Composition, where that Composition has a single Composition.section with a Composition.section.entry that references the PDF (e.g. as a FHIR [Binary](https://hl7.org/fhir/R4/binary.html) or FHIR [DocumentReference](https://hl7.org/fhir/R4/documentreference.html)). A use case for communicating a PDF in this way, as opposed to simply communicating a DocumentReference, is where a clinical document management system needs to have uniform document metadata for clinical documents in a range of formats.
<blockquote class="note-to-balloters">
We are seeking feedback on the CDA NonXMLBody mapping. One can communicate an unstructured document such as a PDF as the target of a DocumentReference OR one can convert the unstructured document to a FHIR Clinical Document which then serves as the target of a DocumentReference. Current guidance allows either approach.</blockquote>

---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/operations.md

### FHIR Clinical Document Operations
[FHIR Operations](https://hl7.org/fhir/R4/operations.html) are a supplement to standard queries, and are used to fulfill a number of purposes, such as where the server needs to play an active role in formulating the content of the response, where the intended purpose is to cause side effects such as the creation of new resources, or where there are server-side expectations in response to a client request. 

**FHIR Clinical Document Operations**:
* [convert-to-transaction-bundle](OperationDefinition-convert-to-transaction-bundle.html): Convert a FHIR Clinical Document into a FHIR transaction bundle.

**FHIR Operations from CORE**:
* [StructureMap based Transform Operation](https://hl7.org/fhir/R4/structuremap-operation-transform.html)
	<p>Many clinical documents are represented as CDA and many legacy systems will likely continue to produce CDA. It will be useful for FHIR servers to offer a means of transforming CDA to FHIR Clinical Documents in order for the server to consume them. The StructureMap Transform Operation offers a standard endpoint for this operation. As part of the input FHIR StructureMaps can be provided.</p>

	<blockquote class="stu-note">The following is a list of resources, including FHIR StructureMaps:  </blockquote>
	
	<ul>
		<li><a href="https://hl7.org/fhir/R5/structuremap.html">R5 StructureMap resource</a></li>
		<li><a href="https://hl7.org/fhir/R5/mapping-language.html">The FHIR Mapping Language (FML) page</a> (this is R5 which does have some advances on the R4 version)</li>
		<li><a href="https://hl7.org/fhir/R5/mapping-tutorial.html">The FHIR spec FML tutorial, written by Oliver Egger</a></li>
		<li><a href="https://github.com/ahdis/fhir-mapping-tutorial">Corresponding GitHub repo to use as a basis for experimentation</a></li>
		<li><a href="https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Mapping+Language">HL7 International confluence page on FML</a></li>
		<li>The Swiss matchbox server (c/o Oliver Egger et al)
			<ul>
				<li><a href="https://www.matchbox.health/">Home page</a></li>
				<li><a href="https://test.ahdis.ch/matchbox/fhir">Public test server endpoint</a></li>
			</ul>
		</li>
		<li>HL7 Switzerland IG cda-fhir-maps:
			<ul>
				<li><a href="https://github.com/hl7ch/cda-fhir-maps">GitHub repository</a></li>
				<li><a href="https://github.com/hl7ch/cda-fhir-maps/blob/master/input/maps/BundleToCda.map">Example FHIR-to-CDA FML file</a></li>
				<li><a href="https://github.com/hl7ch/cda-fhir-maps/blob/master/input/maps/FHIRtoCDATypes.map">FHIR to CDA datatype mapping FML file</a></li>
				<li><a href="https://github.com/hl7ch/cda-fhir-maps/blob/master/fhirtocda.http">Example REST requests to matchbox server using the above FML file</a></li>
			</ul>
		</li>
	</ul>
<p></p>
* [$document Core Operation](https://hl7.org/fhir/R4/composition-operation-document.html)
	<p>The $document Core Operation provides a means for a client to request a FHIR Document based on a Composition. It is suggested that a server may wish to emulate this behavior but using an operation that delivers a FHIR Clinical Document conformant to the profile in this guide (and possibly guidance from a use case specific IG). The specific Operation should be named appropriately.</p>

**FHIR Operation experimental examples**:
* [$summary from the International Patient Summary (IPS) IG](https://build.fhir.org/ig/HL7/fhir-ips/OperationDefinition-summary.html)
<p>The Operation provides a means to invoke the creation of a specific FHIR Clinical Document conformant to the IPS IG. Note: the current link is from build - this will be updated post-ballot.</p>

---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/security.md

Please review the guidance on Security from [FHIR Core Security and Privacy Module](https://hl7.org/fhir/r4/secpriv-module.html). The noted security considerations are expected to be followed.

---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/testing.md

Testing server capabilities through Implementation Guides (IGs) is a crucial aspect of Fast Healthcare Interoperability Resources (FHIR). Various methods can be employed to leverage the IG effectively.

A primary application of IG is the validation of data instances. This validation can be conducted using standalone tools, as referenced on the official FHIR validation page [here](https://www.hl7.org/fhir/validation.html), or by submitting the data instance to a server familiar with the desired profile for validation.

Validation processes can also be carried out manually. In all instances, computable StructureDefinitions play a pivotal role in evaluating data instances, with features such as cardinality, invariants, and terminology bindings being integral aspects of the specification guiding the validation process.

Furthermore, the Must Support (MS) and CapabilityStatement articulate specific requirements for servers and clients in terms of behavior. As implementation progresses, it becomes evident that MS and CapabilityStatement serve as guardrails rather than burdens, ensuring that the requisite behavior is available to fulfill the intended use case. The development of IGs involves rigorous testing and collaboration with data senders and receivers.

While the provided examples of data instances in this guide serve as development aids, they do not encompass the full spectrum of possibilities. Generally, these examples focus on populating MS data elements, which constitutes a significant component of conformance testing.

Beyond FHIR validation and computable conformance, ensuring adherence to necessary business rules is imperative. This includes verifying that data is not withheld arbitrarily or ignored as a means of support, aligning with the specifications allowing for the absence of a data element.

Several tools can enhance the utilization of IGs for testing purposes:

- Inferno's Test Kits and Validator: Available at [https://inferno.healthit.gov/](https://inferno.healthit.gov/)
- Touchstone's TestScript Implementation and Testing Services: Accessible through [https://touchstone.aegis.net/touchstone/](https://touchstone.aegis.net/touchstone/)
- Crucible Mitre Test Service: Explore at [https://projectcrucible.org/](https://projectcrucible.org/)

The FHIR TestScript specification introduces intriguing possibilities for scripted interactions, enabling comprehensive testing of data support. For instance, the ability to send a data instance to a system with a FHIR server, retrieve it, modify it in the receiving system, and subsequently retrieve the changed data provides valuable insights into system capabilities, accommodating diverse testing workflows.


---

File: repos/HL7_SLASH_fhir-clinical-document/input/pagecontent/versioning.md


### Clinical document succession management
A FHIR Clinical Document can be replaced by a new document and/or appended with an addendum document. (Clinical documents that provide a summary snapshop of a patient's record generally do not version. Rather, each document is a valid document with the specific date/time it was generated. For example, if one were to generate a summary document for a patient every day for 5 days in a row, that patient would have 5 active FHIR Clinical Documents. However even in the summary document scenario, it is possible to use document succession management where needed to fix an error in a generated snapshot). 


#### Clinical document replacement
A replacement document is a new version of a document. The replaced document is considered superseded, but a system may retain it for historical or auditing purposes. The replacement document references the replaced document via the replacement document's Composition.relatesTo, where relatesTo.code is 'replaces' and the target of relatesTo.targetIdentifier is the replaced document's Bundle.identifier. Both The replacement and original document statuses are 'final'. 

Additional notes:
* Bundle.identifier is a required element, representing the globally unique FHIR Clinical Document identifier. Composition.identifier and Composition.version are optional fields than can redundantly be used to track document succession. Composition.identifier can be used to identify a family of FHIR compositions (e.g. an original clinical document and a replacement of that clinical document share the same Composition.identifier), using the Composition.date to chronologically order the compositions. 
* In retrieving replaced versions of a FHIR Clinical Document, one can search for Bundles that contain a Composition with a specific identifier. While Composition.identifier is optional, if populated, such a search returns all the versions resident on a server. The version history can then be reconstructed using the mentioned fields of Composition.relatesTo and the composition creation time and/or version number. Typically, however, one will expect to have the latest (or most current) version returned.
* Resource.id and resource.meta fields enable resource succession management within a single server. Values may be auto-assigned by a server, and values for a given instance are not guaranteed to be the same across servers, making these fields not suitable for succession exchange semantics. It is important to remember that the Composition.identifier and Bundle.identifier are not equivalent to the Resource.id. The identifiers are business identifiers and include the system where the business identifier was created. 

<p>The FHIR Clinical Document <b>replaces</b> scenario is illustrated in the following figure.</p>
<table><tr><td><img width="75%" height="75%" src="HL7 CDA-FHIR Alignment - ImagesReplace.svg" /></td></tr></table>  


#### Other succession management scenarios
An addendum is a separate document that references another document, and may extend or alter the observations in the referenced document. The referenced document remains active, and the addendum and its related document are both read by report recipients. The addendum document references the document being appended via the addendum document's Composition.relatesTo, where relatesTo.code is 'appends' and the target of relatesTo.targetIdentifier is the appended document's Bundle.identifier. Both The addendum and original document statuses are 'final'. 

<blockquote class="note-to-balloters">
We are seeking input on the need to persist the 'addendum' use case. Our understanding is that while the 'replacement' use case has seen some industry traction, the 'addendum' use case has not. Rather than issuing addenda, implementations are issuing full replacements. This is in part because a document sender may not know whether or not the recipient has access to the document being appended.
</blockquote>

Where a document has been issued in error (e.g. wrong patient), the original document can be replaced with an empty document that has a status of 'entered-in-error'.    

<blockquote class="note-to-balloters">
We are seeking input on the 'issued-in-error' use case. Our understanding is that this use case is relatively new, and has not (yet?) gained industry traction. We are interested in hearing about FHIR-based solutions others have used to meet this requirement.
</blockquote>

<p>The FHIR Clinical Document <b>appends</b> and <b>entered-in-error</b> scenarios are illustrated in the following figure.</p>
<p><img width="75%" height="75%" src="HL7 CDA-FHIR Alignment - ImagesAppend.svg" /></p>



---

