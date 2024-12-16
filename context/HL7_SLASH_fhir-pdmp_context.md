File: repos/HL7_SLASH_fhir-pdmp/input/fsh/aliases.fsh

// Core FHIR resources and extensions
Alias: $detectedissue = http://hl7.org/fhir/StructureDefinition/DetectedIssue
Alias: $operation-outcome = http://hl7.org/fhir/StructureDefinition/OperationOutcome
Alias: $fhir-resource = http://hl7.org/fhir/StructureDefinition/Resource
Alias: $patient-animal-extension = http://hl7.org/fhir/StructureDefinition/patient-animal

// FHIR terminology
Alias: $medication-admin-status = http://hl7.org/fhir/ValueSet/medication-admin-status
Alias: $medicationdispense-status = http://hl7.org/fhir/ValueSet/medicationdispense-status
Alias: $taxonomy = http://nucc.org/provider-taxonomy
Alias: $operation-event-type = urn:ietf:rfc:3986
Alias: $patient-status = http://hl7.org/fhir/ValueSet/patient-status
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $rxnorm = http://www.nlm.nih.gov/research/umls/rxnorm
Alias: $ndc = http://hl7.org/fhir/sid/ndc

// US Core profiles
Alias: $us-core-encounter = http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter
Alias: $us-core-medication = http://hl7.org/fhir/us/core/StructureDefinition/us-core-medication
Alias: $us-core-medicationdispense = http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationdispense
Alias: $us-core-medicationrequest = http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest
Alias: $us-core-organization = http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization
Alias: $us-core-patient = http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient
Alias: $us-core-practitioner = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner
Alias: $us-core-practitionerrole = http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole
Alias: $us-core-relatedperson = http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson

// US Core terminology
Alias: $us-core-medication-clinical-drug = http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1010.4

// PDMP messaging-related profiles
Alias: $pdmp-bundle-history-result = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result
Alias: $pdmp-bundle-request-message = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message
Alias: $pdmp-bundle-response-message = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message
Alias: $pdmp-messageheader-request = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-messageheader-request
Alias: $pdmp-messageheader-response = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-messageheader-response

// PDMP operation-related profiles
Alias: $pdmp-parameters-request = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request
Alias: $pdmp-parameters-response = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response

// PDMP content profiles
Alias: $pdmp-extension-lme = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-lme
Alias: $pdmp-extension-mme = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-mme
Alias: $pdmp-extension-rx-fill-number = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number
Alias: $pdmp-extension-rx-transmission-method = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method
Alias: $pdmp-extension-method-of-payment = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-method-of-payment
Alias: $pdmp-extension-opioid-treatment-code = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-opioid-treatment-code
Alias: $pdmp-medicationadministration = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationadministration
Alias: $pdmp-medicationdispense = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense
Alias: $pdmp-patient = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient
Alias: $pdmp-pharmacy = http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy

// PDMP terminology
Alias: $pdmp-response-status-cs = http://hl7.org/fhir/us/pdmp/CodeSystem/temporary-pdmp-response-status
Alias: $pmix-response-status-cs = http://terminology.hl7.org/CodeSystem/PMIXStatusCode
Alias: $pmix-transmission-cs = http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType
Alias: $pmix-species-type-cs = http://terminology.hl7.org/CodeSystem/PMIXSpeciesTypeCode
Alias: $pmix-opioid-treatment-code-cs = http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode
Alias: $pmix-method-of-payment-cs = http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment
Alias: $pmix-patient-alert-category-code-cs = http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode


---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-bundle-history-result.fsh

Profile: PdmpBundleHistoryResult
Parent: Bundle
Id: pdmp-bundle-history-result
Title: "PDMP Bundle - History Result"
Description: "This profile constrains a Bundle resource to carry the history details and/or processing outcome in a Prescription Drug Monitoring Program (PDMP) response"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International - Pharmacy"
* ^contact[0].name = "HL7 International - Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* type only code
* type = #collection (exactly)
* type MS
* total MS
* entry 1..* MS
* entry ^comment = "The result bundle may contain one or more entries. If no PDMP history can be returned for the requested patient, the bundle SHALL NOT be generated."
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry.search 0..0
* entry.search ^mustSupport = false
* entry.request 0..0
* entry.request ^mustSupport = false
* entry.response 0..0
* entry.response ^mustSupport = false
* entry contains
    patient 1..* MS and
    medicationdispense 0..* MS and
    medicationadministration 0..* MS and
    pharmacy 0..* MS and
    medication 0..* MS and
    medicationrequest 0..* MS and
    practitioner 0..* MS and
    practitionerrole 0..* MS and
    alert 0..*
* entry[patient].resource 1..1 MS
* entry[patient].resource only $pdmp-patient
* entry[medicationdispense].resource 1..1 MS
* entry[medicationdispense].resource only $pdmp-medicationdispense
* entry[medicationadministration].resource 1..1 MS
* entry[medicationadministration].resource only $pdmp-medicationadministration
* entry[pharmacy].resource 1..1 MS
* entry[pharmacy].resource only $pdmp-pharmacy
* entry[medication].resource 1..1 MS
* entry[medication].resource only $us-core-medication
* entry[medicationrequest].resource 1..1 MS
* entry[medicationrequest].resource only $us-core-medicationrequest
* entry[practitioner].resource 1..1 MS
* entry[practitioner].resource only $us-core-practitioner
* entry[practitionerrole].resource 1..1 MS
* entry[practitionerrole].resource only $us-core-practitionerrole
* entry[alert].resource 1..1 MS
* entry[alert].resource only $detectedissue


Instance: pdmp-bundle-history-result-1
InstanceOf: pdmp-bundle-history-result
Usage: #example
Description: "Example of a Bundle resource used to transmit a patient's PDMP history"
* meta.profile = $pdmp-bundle-history-result
* type = #collection

* entry[0].fullUrl = "urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084"
* entry[=].resource.id = "meddispense-res-1"
* entry[=].resource.resourceType = "MedicationDispense"
* entry[=].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense"
* entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</div>"
* entry[=].resource.extension.url = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number"
* entry[=].resource.extension.valuePositiveInt = 1
* entry[=].resource.identifier.type = $v2-0203#FILL "Filler Identifier"
* entry[=].resource.identifier.system = "http://ourpharmacy.com/fillnumber"
* entry[=].resource.identifier.value = "2000353"
* entry[=].resource.status = #completed
* entry[=].resource.medicationCodeableConcept.coding[0] = $rxnorm#993781 "acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet"
* entry[=].resource.medicationCodeableConcept.coding[+] = $ndc#00093015001
* entry[=].resource.medicationCodeableConcept.coding[=].userSelected = true
* entry[=].resource.medicationCodeableConcept.text = "Acetaminophen 300 mg / Codeine 30 mg oral tablet"
* entry[=].resource.subject.reference = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* entry[=].resource.subject.display = "August Samuels"
* entry[=].resource.performer.actor.reference = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* entry[=].resource.performer.actor.identifier.system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* entry[=].resource.performer.actor.identifier.value = "999017"
* entry[=].resource.performer.actor.display = "Our Pharmacy"
* entry[=].resource.authorizingPrescription.identifier.type = $v2-0203#PLAC "Placer Identifier"
* entry[=].resource.authorizingPrescription.identifier.system = "http://myprescribingsystem.com/ordernumber"
* entry[=].resource.authorizingPrescription.identifier.value = "605153"
* entry[=].resource.quantity.value = 10 
* entry[=].resource.quantity.unit = "each"
* entry[=].resource.daysSupply.value = 5
* entry[=].resource.whenPrepared = "2023-06-05"
* entry[=].resource.whenHandedOver = "2023-06-05"
* entry[=].resource.dosageInstruction.sequence = 1
* entry[=].resource.dosageInstruction.text = "1 tab tid prn pain"

* entry[+].fullUrl = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* entry[=].resource.id = "patient-res-1-1"
* entry[=].resource.resourceType = "Patient"
* entry[=].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0"
* entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The PDMP Responder's patient record for the patient identified in the PDMP request: August Samuels</div>"
* entry[=].resource.identifier.type = $v2-0203#SS
* entry[=].resource.identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* entry[=].resource.identifier.value = "120-35-2435"
* entry[=].resource.name.family = "Samuels"
* entry[=].resource.name.given = "August"
* entry[=].resource.gender = #male
* entry[=].resource.birthDate = "1989-03-12"
* entry[=].resource.address.state = "MA"
* entry[=].resource.address.postalCode = "01059"

* entry[+].fullUrl = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* entry[=].resource.id = "pharmacy-res-1-1"
* entry[=].resource.resourceType = "Organization"
* entry[=].resource.meta.profile = $pdmp-pharmacy
* entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The pharmacy that dispensed the reported medication: Our Pharmacy</div>"
* entry[=].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* entry[=].resource.identifier[=].value = "1669512349"
* entry[=].resource.identifier[+].system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* entry[=].resource.identifier[=].value = "999017"
* entry[=].resource.active = true
* entry[=].resource.name = "Our Pharmacy"
* entry[=].resource.telecom[0].system = #phone
* entry[=].resource.telecom[=].value = "952-555-5555"
* entry[=].resource.telecom[+].system = #email
* entry[=].resource.telecom[=].value = "contact-our-pharmacy@email.org"
* entry[=].resource.address.line = "220 Oak St"
* entry[=].resource.address.city = "Minneapolis"
* entry[=].resource.address.state = "MN"
* entry[=].resource.address.postalCode = "55008"
* entry[=].resource.address.country = "USA"


Instance: pdmp-bundle-history-result-2
InstanceOf: pdmp-bundle-history-result
Usage: #example
Description: "Example of a Bundle resource used to transmit a patient's PDMP history, 2 dispenses, 2 patients, 2 pharmacies, 1 alert and from 2 different PDMPs"
* meta.profile = $pdmp-bundle-history-result
* type = #collection

* entry[0].fullUrl = "urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084"
* entry[=].resource.id = "meddispense-res-1"
* entry[=].resource.resourceType = "MedicationDispense"
* entry[=].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense"
* entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Record of a dispense to August Samuels for Acetaminophen/Codeine on 2023-06-05</div>"
* entry[=].resource.extension.url = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number"
* entry[=].resource.extension.valuePositiveInt = 1
* entry[=].resource.identifier.type = $v2-0203#FILL "Filler Identifier"
* entry[=].resource.identifier.system = "http://ourpharmacy.com/fillnumber"
* entry[=].resource.identifier.value = "2000353"
* entry[=].resource.status = #completed
* entry[=].resource.medicationCodeableConcept.coding[0] = $rxnorm#993781 "acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet"
* entry[=].resource.medicationCodeableConcept.coding[+] = $ndc#00093015001
* entry[=].resource.medicationCodeableConcept.coding[=].userSelected = true
* entry[=].resource.medicationCodeableConcept.text = "Acetaminophen 300 mg / Codeine 30 mg oral tablet"
* entry[=].resource.subject.reference = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* entry[=].resource.subject.display = "August Samuels"
* entry[=].resource.performer.actor.reference = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* entry[=].resource.performer.actor.identifier.system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* entry[=].resource.performer.actor.identifier.value = "999017"
* entry[=].resource.performer.actor.display = "Our Pharmacy"
* entry[=].resource.authorizingPrescription.reference = "urn:uuid:151b9dd1-ca84-48a4-b132-67b1bbed0194"
* entry[=].resource.authorizingPrescription.identifier.system = "http://myprescribingsystem.com/ordernumber"
* entry[=].resource.authorizingPrescription.identifier.value = "605153"
* entry[=].resource.quantity.value = 10 
* entry[=].resource.quantity.unit = "each"
* entry[=].resource.daysSupply.value = 5
* entry[=].resource.whenPrepared = "2023-06-05"
* entry[=].resource.whenHandedOver.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* entry[=].resource.whenHandedOver.extension.valueCode = #unknown
* entry[=].resource.dosageInstruction.sequence = 1
* entry[=].resource.dosageInstruction.text = "1 tab tid prn pain"

* entry[+].fullUrl = "urn:uuid:2706c68c-fb00-4f01-acb9-2547a20c5f63"
* entry[=].resource.id = "meddispense-res-2"
* entry[=].resource.resourceType = "MedicationDispense"
* entry[=].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense"
* entry[=].resource.meta.source = "http://example.org/ri-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">A record dispense to August Thomas Samuels for alprazolam on 2023-07-08</div>"
* entry[=].resource.extension[0].url = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number"
* entry[=].resource.extension[=].valuePositiveInt = 4
* entry[=].resource.extension[+].url = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-lme"
* entry[=].resource.extension[=].valueDecimal = 4
* entry[=].resource.extension[+].url = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method"
* entry[=].resource.extension[=].valueCoding = $pmix-transmission-cs#"05" "Electronic Prescription"
* entry[=].resource.identifier.type = $v2-0203#FILL "Filler Identifier"
* entry[=].resource.identifier.system = "http://anotherPharmacy.com/fillnumber"
* entry[=].resource.identifier.value = "87355201"
* entry[=].resource.status = #completed
* entry[=].resource.medicationCodeableConcept.coding[0] = $rxnorm#433800 "24 HR alprazolam 1 MG Extended Release Oral Tablet"
* entry[=].resource.medicationCodeableConcept.coding[+] = $ndc#00093545106
* entry[=].resource.medicationCodeableConcept.coding[=].userSelected = true
* entry[=].resource.medicationCodeableConcept.text = "24 HR alprazolam 1 MG Extended Release Oral Tablet"
* entry[=].resource.subject.reference = "urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190"
* entry[=].resource.subject.display = "August Thomas Samuels"
* entry[=].resource.performer.actor.reference = "urn:uuid:d0890c3e-45dc-489c-8498-31ffb6254003"
* entry[=].resource.performer.actor.identifier.system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* entry[=].resource.performer.actor.identifier.value = "990717"
* entry[=].resource.performer.actor.display = "Another Pharmacy"
* entry[=].resource.authorizingPrescription.reference = "urn:uuid:47a9b899-1bee-4490-bd41-b3ca12eb441a"
* entry[=].resource.authorizingPrescription.identifier.type = $v2-0203#PLAC "Placer Identifier"
* entry[=].resource.authorizingPrescription.identifier.system = "http://myprescribingsystem.com/ordernumber"
* entry[=].resource.authorizingPrescription.identifier.value = "580331"
* entry[=].resource.quantity.value = 60 
* entry[=].resource.quantity.unit = "each"
* entry[=].resource.daysSupply.value = 30
* entry[=].resource.whenPrepared = "2023-07-08"
* entry[=].resource.whenHandedOver = "2023-07-08"
* entry[=].resource.dosageInstruction.sequence = 1
* entry[=].resource.dosageInstruction.text = "2 tablets every morning"


* entry[+].fullUrl = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* entry[=].resource.id = "patient-res-1"
* entry[=].resource.resourceType = "Patient"
* entry[=].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0"
* entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The PDMP Responder's patient record for August Samuels, dob 1989-03-12, SSN 120-35-2435</div>"
* entry[=].resource.identifier.type = $v2-0203#SS
* entry[=].resource.identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* entry[=].resource.identifier.value = "120-35-2435"
* entry[=].resource.name.family = "Samuels"
* entry[=].resource.name.given = "August"
* entry[=].resource.gender = #male
* entry[=].resource.birthDate = "1989-03-12"
* entry[=].resource.address.state = "MA"
* entry[=].resource.address.postalCode = "01059"

* entry[+].fullUrl = "urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190"
* entry[=].resource.id = "patient-res-2"
* entry[=].resource.resourceType = "Patient"
* entry[=].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0"
* entry[=].resource.meta.source = "http://example.org/ri-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The PDMP Responder's patient record for August Thomas Samuels, dob 1989-03-12, MRN 28-145-2249</div>"
* entry[=].resource.identifier.type = $v2-0203#MR
* entry[=].resource.identifier.system = "http://Highview.org/EHR/patient/mrn"
* entry[=].resource.identifier.value = "28-145-2249"
* entry[=].resource.name.family = "Samuels"
* entry[=].resource.name.given[0] = "August"
* entry[=].resource.name.given[+] = "Thomas"
* entry[=].resource.gender = #male
* entry[=].resource.birthDate = "1989-03-12"
* entry[=].resource.address.state = "MA"
* entry[=].resource.address.postalCode = "01059"

* entry[+].fullUrl = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* entry[=].resource.id = "pharmacy-res-1-1"
* entry[=].resource.resourceType = "Organization"
* entry[=].resource.meta.profile = $pdmp-pharmacy
* entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Pharmacy: Our Pharmacy, NCPDP ID 999017</div>"
* entry[=].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* entry[=].resource.identifier[=].value = "1669512349"
* entry[=].resource.identifier[+].system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* entry[=].resource.identifier[=].value = "999017"
* entry[=].resource.active = true
* entry[=].resource.name = "Our Pharmacy"
* entry[=].resource.telecom[0].system = #phone
* entry[=].resource.telecom[=].value = "952-555-5555"
* entry[=].resource.telecom[+].system = #email
* entry[=].resource.telecom[=].value = "contact-our-pharmacy@email.org"
* entry[=].resource.address.line = "220 Oak St"
* entry[=].resource.address.city = "Sheldonville"
* entry[=].resource.address.state = "MA"
* entry[=].resource.address.postalCode = "02093"
* entry[=].resource.address.country = "USA"


* entry[+].fullUrl = "urn:uuid:d0890c3e-45dc-489c-8498-31ffb6254003"
* entry[=].resource.id = "pharmacy-res-2"
* entry[=].resource.resourceType = "Organization"
* entry[=].resource.meta.profile = $pdmp-pharmacy
* entry[=].resource.meta.source = "http://example.org/ri-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Pharmacy: Another Pharmacy, NCPDP ID 999717</div>"
* entry[=].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* entry[=].resource.identifier[=].value = "1682435585"
* entry[=].resource.identifier[+].system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* entry[=].resource.identifier[=].value = "999717"
* entry[=].resource.active = true
* entry[=].resource.name = "Another Pharmacy"
* entry[=].resource.telecom[0].system = #phone
* entry[=].resource.telecom[=].value = "952-555-1134"
* entry[=].resource.telecom[+].system = #email
* entry[=].resource.telecom[=].value = "contact-another-pharmacy@email.org"
* entry[=].resource.address.line = "1809 Broad St"
* entry[=].resource.address.city = "Cumberland"
* entry[=].resource.address.state = "RI"
* entry[=].resource.address.postalCode = "02864"
* entry[=].resource.address.country = "USA"

* entry[+].fullUrl = "urn:uuid:1ae374d2-7bb9-4298-8c54-2179410c549e"
* entry[=].resource.id = "alert-1"
* entry[=].resource.resourceType = "DetectedIssue"
* entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">An alert generated by the PDMP: 03 Doctor/pharmacy shopping alert</div>"
* entry[=].resource.status = #final
* entry[=].resource.code.coding = $pmix-patient-alert-category-code-cs#"03" 
* entry[=].resource.code.text = "Doctor/pharmacy shopping alert"
* entry[=].resource.patient.reference = "urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190"
* entry[=].resource.patient.display = "August Thomas Samuels"

* entry[+].fullUrl = "urn:uuid:47a9b899-1bee-4490-bd41-b3ca12eb441a"
* entry[=].resource.id = "authorizing-prescription-2"
* entry[=].resource.resourceType = "MedicationRequest"
* entry[=].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest|6.1.0"
* entry[=].resource.meta.source = "http://example.org/ri-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The authorizing prescription for prescription dispense 87355201</div>"
* entry[=].resource.identifier.type = $v2-0203#PLAC "Placer Identifier"
* entry[=].resource.identifier.system = "http://myprescribingsystem.com/ordernumber"
* entry[=].resource.identifier.value = "580331"
* entry[=].resource.status = #active
* entry[=].resource.intent = #order
* entry[=].resource.medicationCodeableConcept.coding[0] = $rxnorm#433800 "24 HR alprazolam 1 MG Extended Release Oral Tablet"
* entry[=].resource.medicationCodeableConcept.coding[=].userSelected = true
* entry[=].resource.subject.reference = "urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190"
* entry[=].resource.subject.display = "August Thomas Samuels"
* entry[=].resource.requester.reference = "urn:uuid:77ee025a-59fc-4d1e-a189-2133a9a56c26"
* entry[=].resource.requester.display = "Marie Fiorella, MD"
* entry[=].resource.dosageInstruction.text = "2 tablets every morning"
* entry[=].resource.dispenseRequest.numberOfRepeatsAllowed = 5
* entry[=].resource.dispenseRequest.quantity.value = 60 
* entry[=].resource.dispenseRequest.quantity.unit = "each"
* entry[=].resource.dispenseRequest.expectedSupplyDuration.value = 30
* entry[=].resource.dispenseRequest.expectedSupplyDuration.unit = "days"
* entry[=].resource.dispenseRequest.expectedSupplyDuration.system = "http://unitsofmeasure.org"
* entry[=].resource.dispenseRequest.expectedSupplyDuration.code = #"d"

* entry[+].fullUrl = "urn:uuid:77ee025a-59fc-4d1e-a189-2133a9a56c26"
* entry[=].resource.id = "practitioner-2"
* entry[=].resource.resourceType = "Practitioner"
* entry[=].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0"
* entry[=].resource.meta.source = "http://example.org/ri-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The PDMP record for Marie Fiorella, MD</div>"
* entry[=].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* entry[=].resource.identifier[=].value = "9941339100"
* entry[=].resource.identifier[+].system = "http://terminology.hl7.org/NamingSystem/usdeanumber"
* entry[=].resource.identifier[=].value = "CF1234563"
* entry[=].resource.name.family = "Fiorella"
* entry[=].resource.name.given = "Marie"
* entry[=].resource.name.suffix = "MD"
* entry[=].resource.telecom.system = #"phone"
* entry[=].resource.telecom.value = "401-333-3333"
* entry[=].resource.address.use = #"work"
* entry[=].resource.address.line = "201 S Main St #150"
* entry[=].resource.address.city = "Cumberland"
* entry[=].resource.address.state = "RI"
* entry[=].resource.address.postalCode = "02864"
* entry[=].resource.address.country = "USA"


* entry[+].fullUrl = "urn:uuid:151b9dd1-ca84-48a4-b132-67b1bbed0194"
* entry[=].resource.id = "authorizing-prescription-1"
* entry[=].resource.resourceType = "MedicationRequest"
* entry[=].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest|6.1.0"
* entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The authorizing prescription for prescription dispense 2000353</div>"
* entry[=].resource.identifier.type = $v2-0203#PLAC "Placer Identifier"
* entry[=].resource.identifier.system = "http://myprescribingsystem.com/ordernumber"
* entry[=].resource.identifier.value = "605153"
* entry[=].resource.status = #active
* entry[=].resource.intent = #order
* entry[=].resource.medicationCodeableConcept.coding = $rxnorm#993781 "acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet"
* entry[=].resource.medicationCodeableConcept.coding.userSelected = true
* entry[=].resource.subject.reference = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* entry[=].resource.subject.display = "August Samuels"
* entry[=].resource.requester.reference = "urn:uuid:23c69153-03c7-470d-9cc8-08265491d095"
* entry[=].resource.requester.display = "Marie Fiorella, MD"
* entry[=].resource.dosageInstruction.text = "1 tab tid prn pain"
* entry[=].resource.dispenseRequest.numberOfRepeatsAllowed = 1
* entry[=].resource.dispenseRequest.quantity.value = 10 
* entry[=].resource.dispenseRequest.quantity.unit = "each"
* entry[=].resource.dispenseRequest.expectedSupplyDuration.value = 5
* entry[=].resource.dispenseRequest.expectedSupplyDuration.unit = "days"
* entry[=].resource.dispenseRequest.expectedSupplyDuration.system = "http://unitsofmeasure.org"
* entry[=].resource.dispenseRequest.expectedSupplyDuration.code = #"d"

* entry[+].fullUrl = "urn:uuid:23c69153-03c7-470d-9cc8-08265491d095"
* entry[=].resource.id = "practitioner-1"
* entry[=].resource.resourceType = "Practitioner"
* entry[=].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0"
* entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* entry[=].resource.text.status = #generated
* entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The PDMP record for Marie Fiorella, MD</div>"
* entry[=].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* entry[=].resource.identifier[=].value = "9941339100"
* entry[=].resource.identifier[+].system = "http://terminology.hl7.org/NamingSystem/usdeanumber"
* entry[=].resource.identifier[=].value = "CF6543210"
* entry[=].resource.name.family = "Fiorella"
* entry[=].resource.name.given = "Marie"
* entry[=].resource.name.suffix = "MD"
* entry[=].resource.telecom.system = #"phone"
* entry[=].resource.telecom.value = "401-333-3333"
* entry[=].resource.address.use = #"work"
* entry[=].resource.address.line = "201 S Main St #150"
* entry[=].resource.address.city = "Cumberland"
* entry[=].resource.address.state = "RI"
* entry[=].resource.address.postalCode = "02864"
* entry[=].resource.address.country = "USA"




---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-bundle-request-message.fsh

Profile: PdmpBundleRequestMessage
Parent: Bundle
Id: pdmp-bundle-request-message
Title: "PDMP Bundle - Request Message"
Description: "This profile constrains a Bundle resource for use as the request message to a PDMP--with a Parameters resource as the bundle's message focus."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* . ^mustSupport = false
* type only code
* type = #message (exactly)
* type MS
* total 0..0
* total ^mustSupport = false
* entry ..* MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry.search 0..0
* entry.search ^mustSupport = false
* entry.request 0..0
* entry.request ^mustSupport = false
* entry.response 0..0
* entry.response ^mustSupport = false
* entry contains
    messageheader 1..1 MS and
    parameters 1..1 MS
* entry[messageheader].resource 1..1 MS
* entry[messageheader].resource only $pdmp-messageheader-request
* entry[parameters].resource 1..1 MS
* entry[parameters].resource only $pdmp-parameters-request


Instance: pdmp-bundle-request-message-1
InstanceOf: pdmp-bundle-request-message
Usage: #example
Description: "Example of a PDMP request message"
* meta.profile = $pdmp-bundle-request-message
* type = #message
* timestamp = "2023-10-10T15:26:30.162-07:00"
* entry[0].fullUrl = "http://example.org/MyEHR/MessageHeader/messageheader-req-op-1"
* entry[=].resource = messageheader-req-op-1
* entry[+].fullUrl = "http://example.org/MyEHR/Parameters/parameters-req-op-1"
* entry[=].resource = parameters-req-op-1

Instance: messageheader-req-op-1
InstanceOf: pdmp-messageheader-request
Usage: #inline
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-messageheader-request"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Event = the canonical URL for the pdmp-history operation. Focus is the Parameters resource holding request inputs.</div>"
* eventCoding.system = "urn:ietf:rfc:3986"
* eventCoding.code = #http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history "pdmp-history"
* source.name = "MyPDMPServer"
* source.endpoint = "http://pdmpserver.example.org/api"
* focus = Reference(Parameters/parameters-req-op-1)


Instance: parameters-req-op-1
InstanceOf: pdmp-parameters-request
Usage: #inline
Description: "Example of a Parameters resource used to request a patient's PDMP history"
* parameter[patient].name = "patient"
* parameter[patient].resource.id = "patient-req-op-1"
* parameter[patient].resource.resourceType = "Patient"
* parameter[patient].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient"
* parameter[patient].resource.text.status = #generated
* parameter[patient].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">August Samuels</div>"
* parameter[patient].resource.identifier.type = $v2-0203#SS "Social Security number"
* parameter[patient].resource.identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* parameter[patient].resource.identifier.value = "120-35-2435"
* parameter[patient].resource.name.family = "Samuels"
* parameter[patient].resource.name.given = "August"
* parameter[patient].resource.gender = #male
* parameter[patient].resource.birthDate = "1989-03-12"
* parameter[patient].resource.address.state = "MA"
* parameter[patient].resource.address.postalCode = "01059"
* parameter[authorized-practitioner].name = "authorized-practitioner"
* parameter[authorized-practitioner].resource.id = "practitioner-req-op-1"
* parameter[authorized-practitioner].resource.resourceType = "Practitioner"
* parameter[authorized-practitioner].resource.meta.profile = $us-core-practitioner
* parameter[authorized-practitioner].resource.text.status = #generated
* parameter[authorized-practitioner].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Adam Amster MD</div>"
* parameter[authorized-practitioner].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* parameter[authorized-practitioner].resource.identifier[=].value = "1928340565"
* parameter[authorized-practitioner].resource.name.family = "Amster"
* parameter[authorized-practitioner].resource.name.given = "Adam"
* parameter[authorized-practitioner].resource.address.state = "MA"
* parameter[authorized-practitioner-role].name = "authorized-practitioner-role"
* parameter[authorized-practitioner-role].resource.resourceType = "PractitionerRole"
* parameter[authorized-practitioner-role].resource.id = "practitionerrole-req-op-1"
* parameter[authorized-practitioner-role].resource.meta.profile = $us-core-practitionerrole
* parameter[authorized-practitioner-role].resource.text.status = #generated
* parameter[authorized-practitioner-role].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Adam Amster, Internal Medicine, Highview Clinic</div>"
* parameter[authorized-practitioner-role].resource.practitioner.identifier.system = "http://hl7.org/fhir/sid/us-npi"
* parameter[authorized-practitioner-role].resource.practitioner.identifier.value = "9851234689"
* parameter[authorized-practitioner-role].resource.practitioner.display = "Adam Amster"
* parameter[authorized-practitioner-role].resource.organization.identifier.system = "http://hl7.org/fhir/sid/us-npi"
* parameter[authorized-practitioner-role].resource.organization.identifier.value = "1928340565"
* parameter[authorized-practitioner-role].resource.organization.display = "Highview Clinic"
* parameter[authorized-practitioner-role].resource.telecom[0].system = #phone
* parameter[authorized-practitioner-role].resource.telecom[=].value = "951-555-5555"
* parameter[authorized-practitioner-role].resource.telecom[+].system = #email
* parameter[authorized-practitioner-role].resource.telecom[=].value = "aamster-highview-clinic@exampleemail.org"
* parameter[authorized-practitioner-organization].name = "authorized-practitioner-organization"
* parameter[authorized-practitioner-organization].resource.resourceType = "Organization"
* parameter[authorized-practitioner-organization].resource.id = "organization-req-op-1"
* parameter[authorized-practitioner-organization].resource.meta.profile = $us-core-organization
* parameter[authorized-practitioner-organization].resource.text.status = #generated
* parameter[authorized-practitioner-organization].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Highview Clinic</div>"
* parameter[authorized-practitioner-organization].resource.identifier.system = "http://hl7.org/fhir/sid/us-npi"
* parameter[authorized-practitioner-organization].resource.identifier.value = "9851234689"
* parameter[authorized-practitioner-organization].resource.active = true
* parameter[authorized-practitioner-organization].resource.name = "Highview Clinic"
* parameter[authorized-practitioner-organization].resource.address.state = "MA"
* parameter[pre-stage-only].name = "pre-stage-only"
* parameter[pre-stage-only].valueBoolean = false

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-bundle-response-message.fsh

Profile: PdmpBundleResponseMessage
Parent: Bundle
Id: pdmp-bundle-response-message
Title: "PDMP Bundle - Response Message"
Description: "This profile constrains a Bundle resource for use as the response message from a PDMP--with a Parameters resource as the message's message focus."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* . ^mustSupport = false
* type only code
* type = #message (exactly)
* type MS
* total 0..0
* total ^mustSupport = false
* entry ..* MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry.search 0..0
* entry.search ^mustSupport = false
* entry.request 0..0
* entry.request ^mustSupport = false
* entry.response 0..0
* entry.response ^mustSupport = false
* entry contains
    messageheader 1..1 MS and
    response-parameters 1..1 MS
* entry[messageheader].resource 1..1 MS
* entry[messageheader].resource only $pdmp-messageheader-response
* entry[response-parameters].resource 1..1 MS
* entry[response-parameters].resource only $pdmp-parameters-response


Instance: pdmp-bundle-response-message-1
InstanceOf: pdmp-bundle-response-message
Usage: #example
Description: "Example of a PDMP response message"
* meta.profile = $pdmp-bundle-response-message
* type = #message
* timestamp = "2020-03-11T08:10:17-05:00"
* entry[0].fullUrl = "urn:uuid:b5000d0c-fed9-4746-ac26-b5ce0111a2b7"
* entry[=].resource = b5000d0c-fed9-4746-ac26-b5ce0111a2b7
* entry[+].fullUrl = "urn:uuid:aecbb129-9a73-4b59-9d66-ff5cdb3f3164"
* entry[=].resource = aecbb129-9a73-4b59-9d66-ff5cdb3f3164

Instance: b5000d0c-fed9-4746-ac26-b5ce0111a2b7
InstanceOf: MessageHeader
Usage: #inline
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-messageheader-response"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Event = the canonical URL for the pdmp-history operation. Focus is the Parameters resource holding response content.</div>"
* eventCoding = urn:ietf:rfc:3986#http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history "pdmp-history"
* source.name = "MyPDMPServer"
* source.endpoint = "https://pdmp1.testpdmp.org/"
* response.identifier = "messageheader-req-op-1"
* response.code = #ok
* focus = Reference(urn:uuid:aecbb129-9a73-4b59-9d66-ff5cdb3f3164)

Instance: aecbb129-9a73-4b59-9d66-ff5cdb3f3164
InstanceOf: pdmp-parameters-response
Usage: #inline
Description: "Example of a Parameters resource returning a patient's PDMP history"
* parameter[pdmp-history-data].name = "pdmp-history-data"
* parameter[pdmp-history-data].extension[0].url = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-header-timestamp-extension"
* parameter[pdmp-history-data].extension[=].valueDateTime = "2023-12-01"
* parameter[pdmp-history-data].extension[+].url = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension"
* parameter[pdmp-history-data].extension[=].valuePeriod.start = "2021-12-02"
* parameter[pdmp-history-data].extension[=].valuePeriod.end = "2023-12-01"
* parameter[pdmp-history-data].resource.id = "bundle-history-data-in-msg-1"
* parameter[pdmp-history-data].resource.resourceType = "Bundle"
* parameter[pdmp-history-data].resource.meta.profile = $pdmp-bundle-history-result
* parameter[pdmp-history-data].resource.type = #collection
* parameter[pdmp-history-data].resource.entry[0].fullUrl = "urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084"
* parameter[pdmp-history-data].resource.entry[=].id = "meddispense-res-1"
* parameter[pdmp-history-data].resource.entry[=].resource.resourceType = "MedicationDispense"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* parameter[pdmp-history-data].resource.entry[=].resource.text.status = #generated
* parameter[pdmp-history-data].resource.entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</div>"
* parameter[pdmp-history-data].resource.entry[=].resource.extension.url = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number"
* parameter[pdmp-history-data].resource.entry[=].resource.extension.valuePositiveInt = 1
* parameter[pdmp-history-data].resource.entry[=].resource.status = #completed
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.coding[0] = $rxnorm#993781 "acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet"
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.coding[+] = $ndc#00093015001
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.coding[0].userSelected = true
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.text = "Acetaminophen 300 mg / Codeine 30 mg oral tablet"
* parameter[pdmp-history-data].resource.entry[=].resource.subject.reference = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* parameter[pdmp-history-data].resource.entry[=].resource.subject.display = "August Samuels"
* parameter[pdmp-history-data].resource.entry[=].resource.performer.actor.reference = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* parameter[pdmp-history-data].resource.entry[=].resource.performer.actor.identifier.system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* parameter[pdmp-history-data].resource.entry[=].resource.performer.actor.identifier.value = "999017"
* parameter[pdmp-history-data].resource.entry[=].resource.performer.actor.display = "Our Pharmacy"
* parameter[pdmp-history-data].resource.entry[=].resource.authorizingPrescription.identifier.type = $v2-0203#FILL "Filler Identifier"
* parameter[pdmp-history-data].resource.entry[=].resource.authorizingPrescription.identifier.system = "http://mypharmacysystem.com/prescriptionnumber"
* parameter[pdmp-history-data].resource.entry[=].resource.authorizingPrescription.identifier.value = "065046045550"
* parameter[pdmp-history-data].resource.entry[=].resource.quantity.value = 10
* parameter[pdmp-history-data].resource.entry[=].resource.quantity.unit = "each"
* parameter[pdmp-history-data].resource.entry[=].resource.daysSupply.value = 5
* parameter[pdmp-history-data].resource.entry[=].resource.whenPrepared = "2023-06-05"
* parameter[pdmp-history-data].resource.entry[=].resource.whenHandedOver.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* parameter[pdmp-history-data].resource.entry[=].resource.whenHandedOver.extension.valueCode = #unknown
* parameter[pdmp-history-data].resource.entry[=].resource.dosageInstruction.sequence = 1
* parameter[pdmp-history-data].resource.entry[=].resource.dosageInstruction.text = "1 tab tid prn pain"

* parameter[pdmp-history-data].resource.entry[+].fullUrl = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* parameter[pdmp-history-data].resource.entry[=].resource.id = "patient-res-1-1"
* parameter[pdmp-history-data].resource.entry[=].resource.resourceType = "Patient"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.profile = $us-core-patient
* parameter[pdmp-history-data].resource.entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* parameter[pdmp-history-data].resource.entry[=].resource.text.status = #generated
* parameter[pdmp-history-data].resource.entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The PDMP Responder's patient record for the patient identified in the PDMP request: August Samuels</div>"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.type = $v2-0203#SS
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.value = "120-35-2435"
* parameter[pdmp-history-data].resource.entry[=].resource.name.family = "Samuels"
* parameter[pdmp-history-data].resource.entry[=].resource.name.given = "August"
* parameter[pdmp-history-data].resource.entry[=].resource.name.given = "John"
* parameter[pdmp-history-data].resource.entry[=].resource.gender = #male
* parameter[pdmp-history-data].resource.entry[=].resource.birthDate = "1989-03-12"
* parameter[pdmp-history-data].resource.entry[=].resource.address.line = "202 2nd Avenue"
* parameter[pdmp-history-data].resource.entry[=].resource.address.city = "North Amherst"
* parameter[pdmp-history-data].resource.entry[=].resource.address.state = "MA"
* parameter[pdmp-history-data].resource.entry[=].resource.address.postalCode = "01059"

* parameter[pdmp-history-data].resource.entry[+].fullUrl = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* parameter[pdmp-history-data].resource.entry[=].resource.id = "pharmacy-res-1-1"
* parameter[pdmp-history-data].resource.entry[=].resource.resourceType = "Organization"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.profile = $pdmp-pharmacy
* parameter[pdmp-history-data].resource.entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* parameter[pdmp-history-data].resource.entry[=].resource.text.status = #generated
* parameter[pdmp-history-data].resource.entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The pharmacy that dispensed the reported medication: Our Pharmacy</div>"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier[=].value = "1669512349"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier[+].system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier[=].value = "999017"
* parameter[pdmp-history-data].resource.entry[=].resource.active = true
* parameter[pdmp-history-data].resource.entry[=].resource.name = "Our Pharmacy"
* parameter[pdmp-history-data].resource.entry[=].resource.telecom[0].system = #phone
* parameter[pdmp-history-data].resource.entry[=].resource.telecom[=].value = "952-555-5555"
* parameter[pdmp-history-data].resource.entry[=].resource.telecom[+].system = #email
* parameter[pdmp-history-data].resource.entry[=].resource.telecom[=].value = "contact-our-pharmacy@email.org"
* parameter[pdmp-history-data].resource.entry[=].resource.address.line = "220 Oak St"
* parameter[pdmp-history-data].resource.entry[=].resource.address.city = "Minneapolis"
* parameter[pdmp-history-data].resource.entry[=].resource.address.state = "MN"
* parameter[pdmp-history-data].resource.entry[=].resource.address.postalCode = "55008"
* parameter[pdmp-history-data].resource.entry[=].resource.address.country = "USA"

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-capabilitystatement-client.fsh

Instance: pdmp-client
InstanceOf: CapabilityStatement
Usage: #definition
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p> See <a href=\"capability-statements.html\">Capability Statements</a> for additional details.</p></div>"
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #phx
* url = "http://hl7.org/fhir/us/pdmp/CapabilityStatement/pdmp-client"
* version = "1.0.0"
* name = "PDMP_Client"
* status = #active
* date = "2024-04-01T00:00:00-05:00"
* publisher = "HL7 International / Pharmacy"
* contact[0].name = "HL7 International / Pharmacy"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* contact[+].name = "Frank McKinney"
* contact[=].telecom[0].system = #email
* contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fm@frankmckinney.com"
* description = "This resource defines the expected capabilities of the PDMP Client actor when conforming to the PDMP IG and it is expected that it will be used in conjunction with the US Core CapabilityStatement. Together they describe the complete list of actual profiles, RESTful operations, and messaging capabilities supported by PDMP Clients. PDMP Client requirements may also be impacted by the rules of local jurisdictions or other contextual requirements."
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #json
* format[+] = #xml
* format[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
* format[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHOULD
* rest.mode = #client
* rest.operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation.extension.valueCode = #SHALL
* rest.operation.name = "pdmp-history"
* rest.operation.definition = "http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history"
* rest.operation.documentation = "Operation returning an individual patient's PDMP history"


---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-capabilitystatement-server.fsh

Instance: pdmp-server
InstanceOf: CapabilityStatement
Usage: #definition
* text.status = #additional
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p> See <a href=\"capability-statements.html\">Capability Statements</a> for additional details.</p></div>"
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #phx
* url = "http://hl7.org/fhir/us/pdmp/CapabilityStatement/pdmp-server"
* version = "1.0.0"
* name = "PDMP_Server"
* status = #active
* date = "2024-04-01T00:00:00-05:00"
* publisher = "HL7 International / Pharmacy"
* contact[0].name = "HL7 International / Pharmacy"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* contact[+].name = "Frank McKinney"
* contact[=].telecom[0].system = #email
* contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fm@frankmckinney.com"
* description = "This resource defines the expected capabilities of the PDMP Server actor when conforming to the PDMP IG and it is expected that it will be used in conjunction with the US Core CapabilityStatement. Together they describe the complete list of specific profiles, RESTful operations, and messaging capabilities supported by PDMP Servers. PDMP Server requirements may also be impacted by the rules of local jurisdictions or other contextual requirements."
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #json
* format[+] = #xml
* format[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHALL
* format[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* format[=].extension.valueCode = #SHOULD
* rest.mode = #server
* rest.operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.operation.extension.valueCode = #SHALL
* rest.operation.name = "pdmp-history"
* rest.operation.definition = "http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history"
* rest.operation.documentation = "Operation returning an individual patient's PDMP history"


---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-codesystem-temporary-additional-response-status.fsh

CodeSystem: TemporaryPdmpResponseStatus
Id: temporary-pdmp-response-status
Title: "PDMP Response Status Codes (Temporary)"
Description: "Codes indicating the overall status of a PDMP response. Intended to augment the PMIX Status Message code set"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* #pre-stage-accepted "Pre-Stage Request Accepted" "The request to pre-stage PDMP history results for the submitted individual has been accepted"

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-extension-activity-period.fsh

Extension: PDMPActivityPeriodExtension
Id: pdmp-activity-period-extension
Title: "PDMP Extension - Activity Period"
Description: "The date period (start/end) of the response returned by a Prescription Drug Monitoring Program (PDMP)."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^meta.versionId = "1"
* ^meta.lastUpdated = "2024-04-01T00:00:00.000-05:00"
* ^version = "1.0.0"
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "MessageHeader"
* ^context[+].type = #element
* ^context[=].expression = "Parameters.parameter"
* ^context[+].type = #element
* ^context[=].expression = "Bundle.entry.Parameters.parameter"
* value[x] 1..
* value[x] only Period
* value[x] ^short = "PDMP Activity Period"
* value[x] ^definition = "Indicates the date period of dispenses and administrations returned by the PDMP"

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-extension-header-timestamp.fsh

Extension: PDMP_Header_Timestamp_Extension
Id: pdmp-header-timestamp-extension
Title: "PDMP Extension - Header Timestamp"
Description: "The date the request was sent to the PDMP Responder."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^meta.versionId = "1"
* ^meta.lastUpdated = "2024-04-01T00:00:00.000-05:00"
* ^version = "1.0.0"
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "MessageHeader"
* ^context[+].type = #element
* ^context[=].expression = "Parameters.parameter"
* ^context[+].type = #element
* ^context[=].expression = "Bundle.entry.Parameters.parameter"
* value[x] 1..
* value[x] only dateTime
* value[x] ^short = "Message Timestamp"
* value[x] ^definition = "Represents the date time the request was sent to the PDMP Responder"

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-extension-lme.fsh

Extension: Lorazepam_Milligram_Equivalent
Id: pdmp-extension-lme
Title: "PDMP Extension - LME"
Description: "LME - Lorazepam Milligram Equivalent.  The lorazepam dose (mg) equivalent to the sedative dose of the prescription as dispensed."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^meta.versionId = "1"
* ^meta.lastUpdated = "2024-04-01T00:00:00.000-07:00"
* ^version = "1.0.0"
* ^date = "2024-04-01T00:00:00.000-07:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Scott Robertson"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "scott.robertson@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "scott@BearHealthTech.consulting"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "MedicationDispense"
* ^context[+].type = #element
* ^context[=].expression = "MedicationAdministration"
* value[x] 1..
* value[x] only decimal
* value[x] ^short = "LME"
* value[x] ^definition = "Represents the equivalent lorazepam dose (mg) for sedative dose of prescription as dispensed."

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-extension-method-of-payment.fsh

Extension: Method_Of_Payment
Id: pdmp-extension-method-of-payment
Title: "PDMP Extension - Method of Payment"
Description: "A code representing the method of payment for the dispensation"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^meta.versionId = "1"
* ^meta.lastUpdated = "2024-04-01T00:00:00.000-07:00"
* ^version = "1.0.0"
* ^date = "2024-04-01T00:00:00.000-07:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Scott Robertson"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "scott.robertson@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "scott@BearHealthTech.consulting"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "MedicationDispense"
* value[x] 1..
* value[x] only Coding
* value[x] ^short = "Method of payment"
* value[x] ^definition = "A code representing the method of payment for the dispensation"
* valueCoding from pmix-method-of-payment (extensible)


---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-extension-mme.fsh

Extension: Morphine_Milligram_Equivalent
Id: pdmp-extension-mme
Title: "PDMP Extension - MME"
Description: "MME - Morphine Milligram Equivalent.  The quantity of morphine (mg/day, except for fentanyl patchs use mcg/hr) equivalent to the daily opioid dose for the prescription as dispensed."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^meta.versionId = "1"
* ^meta.lastUpdated = "2024-04-01T00:00:00.000-07:00"
* ^version = "1.0.0"
* ^date = "2024-04-01T00:00:00.000-07:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Scott Robertson"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "scott.robertson@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "scott@BearHealthTech.consulting"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "MedicationDispense"
* ^context[+].type = #element
* ^context[=].expression = "MedicationAdministration"
* value[x] 1..
* value[x] only decimal
* value[x] ^short = "MME"
* value[x] ^definition = "Represents the equivalent daily morphine dose (mg/day or mcg/hr) for prescription as dispensed."


---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-extension-opioid-treatment-code.fsh

Extension: Opioid_Treatment_Code
Id: pdmp-extension-opioid-treatment-code
Title: "PDMP Extension - Opioid Treatment Code"
Description: "A code identifying the reason for an opioid prescription"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^meta.versionId = "1"
* ^meta.lastUpdated = "2024-04-01T00:00:00.000-07:00"
* ^version = "1.0.0"
* ^date = "2024-04-01T00:00:00.000-07:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Scott Robertson"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "scott.robertson@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "scott@BearHealthTech.consulting"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "MedicationDispense"
* value[x] 1..
* value[x] only Coding
* value[x] ^short = "Method of payment"
* value[x] ^definition = "A code representing the method of payment for the dispensation"
* valueCoding from pdmp-opioid-treatment-code


---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-extension-rx-fill-number.fsh

Extension: PrescriptionFillNumberExtension
Id: pdmp-extension-rx-fill-number
Title: "PDMP Extension - Prescription Fill Number"
Description: "Represents the specific fill number for the prescription dispensed, with 0 representing the initial fill, 1 representing the first refill, etc.  Each fill number represents one dispensation, even if that dispensation is not for the full quantity.  Partial fills are not represented by decimal quantities.  For example, an initial fill of 100 tablets would have rx-fill-number = 0.  A subsequent refill, per patient request, 40 tablets (full quantity is 100 tablets) would have rx-fill-number = 1 (not 0.4).  The next subsequent refill, for any quantity, would have rx-fill-number = 2."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^meta.versionId = "1"
* ^meta.lastUpdated = "2024-04-01T00:00:00.000-05:00"
* ^version = "1.0.0"
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^context.type = #element
* ^context.expression = "MedicationDispense"
* value[x] 1..
* value[x] only positiveInt
* value[x] ^short = "Fill Number"
* value[x] ^definition = "Represents the specific fill number for the prescription dispensed, with 0 representing the initial fill, 1 representing the first refill, etc.  Each fill number represents one dispensation, even if that dispensation is not for the full quantity.  Partial fills are not represented by decimal quantities.  For example, an initial fill of 100 tablets would have rx-fill-number = 0.  A subsequent refill, per patient request, 40 tablets (full quantity is 100 tablets) would have rx-fill-number = 1 (not 0.4).  The next subsequent refill, for any quantity, would have rx-fill-number = 2."

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-extension-rx-transmission-method.fsh

Extension: Prescription_Transmission_Method
Id: pdmp-extension-rx-transmission-method
Title: "PDMP Extension - Prescription Transmission Method"
Description: "The method by which the prescription was trasmitted to the dispensing or administering party."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^meta.versionId = "1"
* ^meta.lastUpdated = "2024-04-01T00:00:00.000-05:00"
* ^version = "1.0.0"
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* ^context[0].type = #element
* ^context[=].expression = "MedicationDispense"
* ^context[+].type = #element
* ^context[=].expression = "MedicationAdministration"
* value[x] 1..1
* value[x] only Coding
* value[x] ^short = "Prescription Transmission Method"
* value[x] ^definition = "The method by which the prescription was transmitted to the dispensing or administering party."
* valueCoding from pdmp-rx-transmission-method (extensible)



---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-mapping-pmix.fsh

Mapping: pdmp-meddispense-to-pmix-report
Source: pdmp-medicationdispense
Target: "http://pmixpmp.org/niem/4.0/extension"
Id: pdmp-medication--pmix-report
Title: "PMIX/NIEM 4.0 Prescription Report"
* whenPrepared -> "pmp:PrescriptionFilledDate"
// * authorizingPrescription.authoredOn -> "pmp:PrescriptionWrittenDate<"
* identifier.value -> "pmp:PrescriptionNumberText"
* medicationCodeableConcept.text -> "pmp:PrescriptionDrug/pmp:DrugProductNameText"
* medicationCodeableConcept.coding.code -> "pmp:PrescriptionDrug/pmp:DrugNDCProductIdentifier" "coding.system='http://hl7.org/fhir/sid/ndc'"
// * medicationCodeableConcept.ingredient.strength -> "pmp:PrescriptionDrug/pmp:DrugStrengthText"
// * medicationCodeableConcept.form -> "pmp:PrescriptionDrug/pmp:DrugUnitOfMeasureText"
* quantity -> "pmp:DispensedQuantity"
* daysSupply -> "pmp:DaysSupplyCount"
* extension[pdmp-extension-rx-fill-number] -> "pmp:DrugRefillNumberCount"
// * authorizingPrescription.dispenseRequest.numberOfRepeatsAllowed -> "pmp:RefillsAuthorizedCount"
* type -> "pmp:PartialFillIndicator"
* extension[pdmp-extension-method-of-payment] -> "pmp:MethodOfPaymentCode"
* extension[pdmp-extension-opioid-treatment-code] -> "pmp:OpioidTreatmentCategoryCode"
* extension[pdmp-extension-rx-transmission-method] -> "pmp:TransmissionFormOfRxOriginCode"

Mapping: pdmp-patient-to-pmix-report
Source: pdmp-patient
Target: "http://pmixpmp.org/niem/4.0/extension"
Id: pdmp-patient-pmix-report
Title: "PMIX/NIEM 4.0 Prescription Report"
* name.given -> "nc:PersonName/nc:PersonGivenName"
* name.family -> "nc:PersonName/nc:PersonSurName"
* birthDate -> "nc:PersonBirthDate/Date"
* gender -> "PersonSexCode"
* address.line -> "pmp:PersonPrimaryContactInformation/ContactMailingAddress/LocationStreet"
* address.city -> "pmp:PersonPrimaryContactInformation/ContactMailingAddress/nc:LocationCityName"
* address.state -> "pmp:PersonPrimaryContactInformation/ContactMailingAddress/LocationState"
* address.postalCode -> "pmp:PersonPrimaryContactInformation/ContactMailingAddress/nc:LocationPostalCode"
* identifier.value -> "PersonSocialSecurityNumberIdentifier" "identifier.system=http://hl7.org/fhir/sid/us-ssn'"


Mapping: pdmp-pharmacy-to-pmix-report
Source: pdmp-organization-pharmacy
Target: "http://pmixpmp.org/niem/4.0/extension"
Id: pdmp-pharmacy-pmix-report
Title: "PMIX/NIEM 4.0 Prescription Report"
* name -> "nc:OrganizationDoingBusinessAsName"
* address.line -> "nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationStreet/nc:StreetFullText"
* address.city -> "nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationCityName"
* address.state -> "nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationStateUSPostalServiceCode"
* address.postalCode -> "nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationPostalCode"
* telecom -> "nc:OrganizationPrimaryContactInformation/nc:ContactTelephoneNumber/nc:FullTelephoneNumber"
* identifier.value -> "pmp:DEANumberIdentifier" "identifier.system='http://terminology.hl7.org/NamingSystem/usdeanumber'"
* identifier.value -> "pmp:NCPDPIdentifier" "identifier.system='http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber'"
* identifier.value -> "pmp:NPIIdentifier" "identifier.system='http://hl7.org/fhir/sid/us-npi'"





---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-mapping-script.fsh

Mapping: pdmp-meddispense-to-script-rxhistoryresponse
Source: pdmp-medicationdispense
Target: "http://ncpdp.org/SCRIPT2017071/RxHistoryResponse"
Id: pdmp-medication-ncpdp-script-RxHistoryResponse
Title: "NCPDP SCRIPT 2017071 RxHistory Response - Dispense"
* whenPrepared -> "LastFillDate"
// * authorizingPrescription.authoredOn -> "WrittenDate"
* identifier -> "HistorySource/SourceReference"
* medicationCodeableConcept.text -> "DrugDescription"
* medicationCodeableConcept.coding.system -> "DrugCoded/ProductCode/Qualifier = 'ND'"
* medicationCodeableConcept.coding.code -> "DrugCoded/ProductCode/Code" "coding.system='http://hl7.org/fhir/sid/ndc'"
// * medicationCodeableConcept.ingredient.strength -> "DrugCoded/Strength"
// * medicationCodeableConcept.form -> "Quantity/QuantityUnitOfMeasure"
* quantity -> "Quantity/Value"
* daysSupply -> "DaysSupply"
* extension[pdmp-extension-rx-fill-number] -> "HistorySource/FillNumber"
// * authorizingPrescription.dispenseRequest.numberOfRepeatsAllowed -> "not directly represented in RxHistoryResponse"
* type -> "not supported in RxHistoryResponse"
* extension[pdmp-extension-method-of-payment] -> "HistorySource/PaymentType"
* extension[pdmp-extension-opioid-treatment-code] -> "not supported"
* extension[pdmp-extension-rx-transmission-method] -> "not supported"

Mapping: pdmp-patient-to-script-rxhistoryresponse
Source: pdmp-patient
Target: "http://ncpdp.org/SCRIPT2017071/RxHistoryResponse"
Id: pdmp-patient-ncpdp-script-RxHistoryResponse
Title: "NCPDP SCRIPT 2017071 RxHistory Response - Patient"
* name.given -> "Name/FirstName"
* name.family -> "Name/LastName"
* birthDate -> "DateOfBirth"
* gender -> "Gender"
* address.line -> "Address/AddressLine1"
* address.line -> "Address/AddressLine2"
* address.city -> "Address/City"
* address.state -> "Address/StateProvince"
* address.postalCode -> "Address/PostalCode"
* identifier.value -> "Identification/SocialSecurity" "identifier.system=http://hl7.org/fhir/sid/us-ssn'"


Mapping: pdmp-pharmacy-to-script-rxhistoryresponse
Source: pdmp-organization-pharmacy
Target: "http://ncpdp.org/SCRIPT2017071/RxHistoryResponse"
Id: pdmp-pharmacy-ncpdp-script-RxHistoryResponse
Title: "NCPDP SCRIPT 2017071 RxHistory Response - Patient"
* name -> "BusinessName"
* address.line -> "Address/AddressLine1"
* address.line -> "Address/AddressLine2"
* address.city -> "Address/City"
* address.state -> "Address/StateProvince"
* address.postalCode -> "Address/PostalCode"
* telecom -> "CommunicationNumbers/PrimaryTelephone"
* identifier.value -> "Identification/DEANumber" "identifier.system='http://terminology.hl7.org/NamingSystem/usdeanumber'"
* identifier.value -> "Identification/NCPDPID" "identifier.system='http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber'"
* identifier.value -> "Identification/NPI" "identifier.system='http://hl7.org/fhir/sid/us-npi'"



---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-medicationadministration.fsh

Invariant: pdmp-administration-performer
Severity: #error
Description: "MedicationAdministration SHALL include a performer actor reference or performer actor identifier"
Expression: "reference.exists() or identifier.exists()"


Profile: PdmpMedicationAdministration
Parent: MedicationAdministration
Id: pdmp-medicationadministration
Title: "PDMP MedicationAdministration"
Description: "Defines constraints and extensions on the MedicationAdministration resource when used by a Prescription Drug Monitoring Program (PDMP) to return an individual's medication administration history."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^date = "2024-04-01"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* . ^definition = "Administration that a medication is/was actively taken by a patient."
* . ^mustSupport = false
* extension contains
    pdmp-extension-rx-transmission-method named rx-transmission-method 0..1 MS
* status 1..1 MS
* status only code
* status from $medication-admin-status (required)
* status ^binding.description = "A set of codes indicating the current status of a MedicationAdministration."
* medication[x] 1..1 MS
* medication[x] only CodeableConcept or Reference($us-core-medication)
* medication[x] from $us-core-medication-clinical-drug (extensible)
* medication[x] ^binding.description = "Prescribable medications"
* medicationCodeableConcept.coding.userSelected MS
* subject only Reference($us-core-patient)
* subject MS
* subject ^isModifier = false
* context only Reference($us-core-encounter)
* context MS
* context ^isModifier = false
* effective[x] MS
* effective[x] ^isModifier = false
* performer 1..1 MS
* performer ^isModifier = false
* performer.actor obeys pdmp-administration-performer
* performer.actor 1..1 MS
* performer.actor ^isModifier = false
* performer.actor.reference MS
* performer.actor.identifier MS
* performer.actor.identifier ^comment = "NPI, DEA or state license number preferred."
* performer.actor.identifier.system 1..1 MS
* performer.actor.identifier.system only uri
* performer.actor.identifier.value 1..1 MS
* performer.actor.identifier.value only string
* performer.actor.display MS
* performer.actor.display ^comment = "Performer's name"
* request MS
* request only Reference($us-core-medicationrequest)
* dosage 1..1 MS
* dosage ^isModifier = false
* dosage.text MS
* dosage.text ^comment = "Textual administration directions (e.g., Give 1 tablet)"
* dosage.dose 1..1 MS
* dosage.dose.value 1..1 MS
* dosage.dose.unit 1..1 MS
* dosage.dose.system 0..1 MS
* dosage.dose.code 0..1 MS


Instance: pdmp-medadmin-1
InstanceOf: pdmp-medicationadministration
Usage: #example
Description: "Example of a PDMP medication administration"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationadministration"
* meta.source = "http://example.org/md-pdmp"
* extension[0].url = $pdmp-extension-rx-transmission-method
* extension[=].valueCoding = $pmix-transmission-cs#"02" "Telephone Prescription"
* status = #completed
* medicationCodeableConcept.coding[0] = $rxnorm#864706 "methadone hydrochloride 10 MG Oral Tablet"
* medicationCodeableConcept.coding[+] = $ndc#00406577123 "METHADONE HYDROCHLORIDE, 1 TABLET in 1 BLISTER PACK (0406-5771-23) (package)"
* medicationCodeableConcept.coding[=].userSelected = true
* medicationCodeableConcept.text = "methadone hydrochloride 10 MG Oral Tablet"
* subject.display = "Amy V. Shaw"
* effectivePeriod.start = "2023-01-15T04:30:00+01:00"
* performer.actor.identifier.system = "http://hl7.org/fhir/sid/us-npi"
* performer.actor.identifier.value = "1669512349"
* performer.actor.display = "Ronald Bone, MD"
* dosage.text = "Give 1 tablet"
* dosage.dose.value = 1 
* dosage.dose.unit = "each"

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-medicationdispense.fsh

Invariant: pdmp-dispense-performer
Severity: #error
Description: "MedicationDispense SHALL include a performer actor reference or performer actor identifier"
Expression: "reference.exists() or identifier.exists()"

Profile: PdmpMedicationDispense
Parent: $us-core-medicationdispense
Id: pdmp-medicationdispense
Title: "PDMP MedicationDispense"
Description: "Defines constraints and extensions on the MedicationDispense resource when used by a Prescription Drug Monitoring Program (PDMP) to return an individual's medication dispense history."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^date = "2024-04-01"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* . ^definition = "Record of a medication dispensation."
* . ^mustSupport = false
* . ^isModifier = false
* extension contains
    pdmp-extension-rx-fill-number named rx-fill-number 0..1 MS and
    pdmp-extension-rx-transmission-method named rx-transmission-method 0..1 MS and
    pdmp-extension-mme named rx-mme 0..1 MS and
    pdmp-extension-lme named rx-lme 0..1 MS and
    pdmp-extension-method-of-payment named rx-method-of-payment 0..1 and
    pdmp-extension-opioid-treatment-code named rx-opioid-treatment-code 0..1
* status 1.. MS
* status from $medicationdispense-status (required)
* status ^binding.description = "A set of codes indicating the current status of a MedicationDispense."
* medication[x] only CodeableConcept or Reference($us-core-medication)
* medication[x] MS
* medication[x] from $us-core-medication-clinical-drug (extensible)
* medication[x] ^isModifier = false
* medication[x] ^binding.description = "Prescribable medications"
* medicationCodeableConcept.coding.userSelected MS
* subject 1.. MS
* subject only Reference($us-core-patient)
* subject ^isModifier = false
* performer 1..1 MS
* performer ^isModifier = false
* performer.actor 1..1 MS
* performer.actor obeys pdmp-dispense-performer
* performer.actor ^isModifier = false
* performer.actor only Reference($us-core-practitioner or $pdmp-pharmacy)
* performer.actor.reference MS
* performer.actor.identifier MS
* performer.actor.identifier ^comment = "NPI, DEA, NCPDP Provider ID or state license number preferred."
* performer.actor.identifier.system 1..1 MS
* performer.actor.identifier.system only uri
* performer.actor.identifier.value 1..1 MS
* performer.actor.identifier.value only string
* performer.actor.display MS
* performer.actor.display ^comment = "Performer's name"
* authorizingPrescription 0..1 MS
* authorizingPrescription.identifier 0..1 MS
//* authorizingPrescription.authoredOn 0..1 MS
//* authorizingPrescription.dispenseRequest 0..1 MS
//* authorizingPrescription.dispenseRequest.numberOfRepeatsAllowed 0..1 MS


/*
* authorizingPrescription.identifier ^slicing.discriminator.type = #value
* authorizingPrescription.identifier ^slicing.discriminator.path = "type.coding.code"
* authorizingPrescription.identifier ^slicing.rules = #open
* authorizingPrescription.identifier ^slicing.description = "Slice based on the identifier.type.code"
* authorizingPrescription.identifier.value MS
* authorizingPrescription.identifier contains
    pharmacy-prescription-id 0..*
    prescriber-order-id 0..* and
* authorizingPrescription.identifier[pharmacy-prescription-id] ^short = "Pharmacy Prescription ID"
* authorizingPrescription.identifier[pharmacy-prescription-id] ^comment = "Prescription ID assigned by the pharmacy"
* authorizingPrescription.identifier[pharmacy-prescription-id].type.coding.code = #FILL
* authorizingPrescription.identifier[pharmacy-prescription-id] ^mustSupport = true
* authorizingPrescription.identifier[prescriber-order-id] ^short = "Prescriber Order ID"
* authorizingPrescription.identifier[prescriber-order-id] ^comment = "Order ID assigned by the prescriber system"
* authorizingPrescription.identifier[prescriber-order-id].type.coding.code = #PLAC
*/

* quantity 1..1 MS
* quantity.value 1..1 MS
* quantity.unit 1..1 MS
* quantity.system 0..1 MS
* quantity.code 0..1 MS
* daysSupply 1..1 MS
* daysSupply.value 1..1 MS
* whenPrepared 1.. MS
* whenPrepared ^isModifier = false
* dosageInstruction ..1 MS
* dosageInstruction ^isModifier = false


Instance: pdmp-meddispense-1
InstanceOf: pdmp-medicationdispense
Usage: #example
Description: "Example of a PDMP medication dispensation record with MME extension"
* meta.versionId = "1"
* meta.lastUpdated = "2023-06-05T06:38:52Z"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</div>"
* meta.source = "http://example.org/ma-pdmp"
* extension[0].url = $pdmp-extension-rx-fill-number
* extension[=].valuePositiveInt = 1
* extension[+].url = $pdmp-extension-rx-transmission-method
* extension[=].valueCoding = $pmix-transmission-cs#"05" "Electronic Prescription"
* extension[+].url = $pdmp-extension-mme
* extension[=].valueDecimal = 18
* extension[+].url  = $pdmp-extension-method-of-payment
* extension[=].valueCoding = $pmix-method-of-payment-cs#"01" "Private Pay (Cash, Charge, Credit Card)"
* extension[+].url  = $pdmp-extension-opioid-treatment-code
* extension[=].valueCoding = $pmix-opioid-treatment-code-cs#"10" "Acute Opioid Therapy"
* identifier.type = $v2-0203#FILL "Filler Identifier"
* identifier.system = "http://ourpharmacy.com/fillnumber"
* identifier.value = "2000353"
* status = #completed
* medicationCodeableConcept.coding[0] = $rxnorm#993781 "acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet"
* medicationCodeableConcept.coding[+] = $ndc#00093015001
* medicationCodeableConcept.coding[=].userSelected = true
* medicationCodeableConcept.text = "Acetaminophen 300 mg / Codeine 30 mg oral tablet"
* subject.reference = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* subject.display = "August Samuels"
* performer.actor.reference = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* performer.actor.identifier.system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* performer.actor.identifier.value = "999017"
* performer.actor.display = "Our Pharmacy"
* authorizingPrescription.identifier.type = $v2-0203#FILL "Filler Identifier"
* authorizingPrescription.identifier.system = "http://mypharmacysystem.com/prescriptionnumber"
* authorizingPrescription.identifier.value = "065046045550"
* quantity.value = 15 
* quantity.unit = "each"
* daysSupply.value = 5
* whenPrepared = "2023-06-05"
* whenHandedOver.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* whenHandedOver.extension.valueCode = #unknown
* dosageInstruction.sequence = 1
* dosageInstruction.text = "1 tablet every 6-8 hours as needed for pain"



Instance: pdmp-meddispense-2
InstanceOf: pdmp-medicationdispense
Usage: #example
Description: "Example of a PDMP medication dispensation record with LME extension "
* meta.versionId = "1"
* meta.lastUpdated = "2016-12-10T06:38:52Z"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense"
* extension[0].url = $pdmp-extension-rx-fill-number
* extension[=].valuePositiveInt = 4
* extension[+].url = $pdmp-extension-rx-transmission-method
* extension[=].valueCoding = $pmix-transmission-cs#"05" "Electronic Prescription"
* extension[+].url = $pdmp-extension-lme
* extension[=].valueDecimal = 4
* status = #in-progress
* medicationCodeableConcept.coding[0] = $rxnorm#433800 "24 HR alprazolam 1 MG Extended Release Oral Tablet"
* medicationCodeableConcept.coding[+] = $ndc#00093545106
* medicationCodeableConcept.coding[=].userSelected = true
* medicationCodeableConcept.text = "24 HR alprazolam 1 MG Extended Release Oral Tablet"
* subject.display = "August Samuels"
* performer.actor.identifier[0].system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* performer.actor.identifier[=].value = "999017"
* performer.actor.display = "Our Pharmacy"
* authorizingPrescription.identifier.type = $v2-0203#FILL "Filler Identifier"
* authorizingPrescription.identifier.system = "http://mypharmacysystem.com/prescriptionnumber"
* authorizingPrescription.identifier.value = "065046045550"
* quantity.value = 60 
* quantity.unit = "each"
* daysSupply.value = 30
* whenPrepared = "2023-07-08T06:45:52Z"
* dosageInstruction.sequence = 1
* dosageInstruction.text = "2 tablets every morning"

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-messagedefinition-request.fsh

Instance: pdmp-request
InstanceOf: MessageDefinition
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #phx
* url = "http://hl7.org/fhir/us/pdmp/MessageDefinition/pdmp-request"
* version = "1.0.0"
* name = "PdmpMessageDefinitionRequest"
* title = "PDMP Message Definition - Request"
* status = #active
* experimental = false
* date = "2024-04-01T00:00:00-05:00"
* publisher = "HL7 International / Pharmacy"
* contact[0].name = "HL7 International / Pharmacy"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* contact[+].name = "Frank McKinney"
* contact[=].telecom[0].system = #email
* contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fm@frankmckinney.com"
* description = "Message requesting information from a PDMP facilitator system about medication dispensations and administrations"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* purpose = "Request information from a PDMP facilitator about medication dispensations and administrations"
* eventCoding = $operation-event-type#http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history
* category = #currency
* focus.code = #Parameters
* focus.min = 1
* focus.max = "1"
* allowedResponse.message = "http://hl7.org/fhir/us/pdmp/MessageDefinition/pdmp-response"
* allowedResponse.situation = "Returned when processing completes"

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-messagedefinition-response.fsh

Instance: pdmp-response
InstanceOf: MessageDefinition
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #phx
* url = "http://hl7.org/fhir/us/pdmp/MessageDefinition/pdmp-response"
* version = "1.0.0"
* name = "PdmpMessageDefinitionResponse"
* title = "PDMP Message Definition - Response"
* status = #active
* experimental = false
* date = "2024-04-01T00:00:00-05:00"
* publisher = "HL7 International / Pharmacy"
* contact[0].name = "HL7 International / Pharmacy"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* contact[+].name = "Frank McKinney"
* contact[=].telecom[0].system = #email
* contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fm@frankmckinney.com"
* description = "Response returning information from a PDMP facilitator system about medication dispensations and administrations"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* purpose = "Return information from a PDMP facilitator about medication dispensations and administrations"
* eventCoding = $operation-event-type#http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history
* category = #currency
* focus.code = #Parameters
* focus.min = 1
* focus.max = "1"

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-messageheader-request.fsh

Profile: PdmpMessageHeaderRequest
Parent: MessageHeader
Id: pdmp-messageheader-request
Title: "PDMP MessageHeader - Request"
Description: "This profile constrains a MessageHeader resource for use in a PDMP request data bundle. A Parameters resource is the focus."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* . ^mustSupport = false
* eventCoding 1..1 MS
* eventCoding.system 1..1 MS
* eventCoding.system = "urn:ietf:rfc:3986" (exactly)
* eventCoding.code 1..1 MS
* eventCoding.code = #http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history (exactly)
* sender only Reference($us-core-practitionerrole)
* focus 1..1 MS
* focus only Reference($pdmp-parameters-request)
* focus ^type.aggregation = #bundled

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-messageheader-response.fsh

Profile: PdmpMessageHeaderResponse
Parent: MessageHeader
Id: pdmp-messageheader-response
Title: "PDMP MessageHeader - Response"
Description: "This profile constrains a MessageHeader resource for use in a PDMP response data bundle. A Parameters resource is the focus."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* . ^mustSupport = false
* eventCoding 1..1 MS
* eventCoding.system 1..1 MS
* eventCoding.system = "urn:ietf:rfc:3986" (exactly)
* eventCoding.code 1..1 MS
* eventCoding.code = #http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history (exactly)
* focus 1..1 MS
* focus only Reference(Parameters)
* focus ^type.aggregation = #bundled

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-operationdefinition-pdmp-history.fsh

Instance: pdmp-history
InstanceOf: OperationDefinition
Usage: #definition
* extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* extension.valueCode = #phx
* version = "1.0.0"
* name = "PdmpOperationGetPdmpHistory"
* title = "PDMP Operation PDMP History"
* status = #active
* kind = #operation
* date = "2024-04-01T00:00:00-05:00"
* publisher = "HL7 International / Pharmacy"
* contact[0].name = "HL7 International / Pharmacy"
* contact[=].telecom.system = #url
* contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* contact[+].name = "Frank McKinney"
* contact[=].telecom[0].system = #email
* contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "fm@frankmckinney.com"
* contact[+].name = "Scott Robertson"
* contact[=].telecom[0].system = #email
* contact[=].telecom[=].value = "scott.robertson@pocp.com"
* contact[=].telecom[+].system = #email
* contact[=].telecom[=].value = "scott@BearHealthTech.consulting"
* description = "Operation returning an individual patient's PDMP history"
* jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* affectsState = false
* code = #pdmp-history
* system = true
* type = false
* instance = false
* inputProfile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request"
* outputProfile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response"
* parameter[0].name = #patient
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The patient whose PDMP history is desired"
* parameter[=].type = #Patient
* parameter[=].targetProfile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient"
* parameter[+].name = #animal-owner
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "If the patient is an animal, this parameter reflects its owner's information"
* parameter[=].type = #RelatedPerson
* parameter[=].targetProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson"
* parameter[+].name = #authorized-practitioner
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The Practitioner resource reflecting the provider who is authorized to view the returned PDMP information"
* parameter[=].type = #Practitioner
* parameter[=].targetProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
* parameter[+].name = #authorized-practitioner-role
* parameter[=].use = #in
* parameter[=].min = 1
* parameter[=].max = "1"
* parameter[=].documentation = "The PractitionerRole resource reflecting the authorized provider's practice information"
* parameter[=].type = #PractitionerRole
* parameter[=].targetProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole"
* parameter[+].name = #authorized-practitioner-organization
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "An Organization resource reflecting the authorized provider's organization"
* parameter[=].type = #Organization
* parameter[=].targetProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
* parameter[+].name = #delegate-practitioner
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "A Practitioner resource reflecting a provider who is requesting the PDMP information on behalf of another party"
* parameter[=].type = #Practitioner
* parameter[=].targetProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
* parameter[+].name = #delegate-practitioner-role
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "A PractitionerRole resource reflecting the delegate's practice information"
* parameter[=].type = #PractitionerRole
* parameter[=].targetProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole"
* parameter[+].name = #delegate-organization
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "An Organization resource reflecting the delegate's organization"
* parameter[=].type = #Organization
* parameter[=].targetProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
* parameter[+].name = #pre-stage-only
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "Indicates that the PDMP Responder is expected to gather the requested information and stage it for future retrieval (via a subsequent invocation of this operation)"
* parameter[=].type = #boolean
* parameter[+].name = #pre-stage-retrieval-key
* parameter[=].use = #in
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "The pre-stage-retrieval-key returned from a previous operation call in which the pre-stage-only parameter was set to true"
* parameter[=].type = #string
* parameter[+].name = #pdmp-history-data
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "A Bundle of type 'collection' that contains medication dispensation and administration information for the requested patient (if found)"
* parameter[=].type = #Bundle
* parameter[=].targetProfile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result"
* parameter[+].name = #pdmp-history-link
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "A URL to access an external report containing a PDMP history for the requested patient"
* parameter[=].type = #url
* parameter[+].name = #pre-stage-retrieval-key
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "This parameter is used only when responding to an invocation in which the pre-stage-only parameter was set to true. This element may be populated with a string value that the requester is to submit in the pre-stage-retrieval-key parameter of the subsequent invocation that retrieves the staged information"
* parameter[=].type = #string
* parameter[+].name = #outcome
* parameter[=].use = #out
* parameter[=].min = 0
* parameter[=].max = "1"
* parameter[=].documentation = "An OperationOutcome resource containing processing information associated with the operation response, including error, warning and/or informational information"
* parameter[=].type = #OperationOutcome

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-organization-pharmacy.fsh

Profile: PdmpOrganizationPharmacy
Parent: $us-core-organization
Id: pdmp-organization-pharmacy
Title: "PDMP Organization - Pharmacy"
Description: "Defines constraints and extensions on the Organization resource when used by a Prescription Drug Monitoring Program (PDMP) to represent a dispensing pharmacy."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^date = "2024-04-01"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* . ^definition = "Organization population guidance to represent a dispensing pharmacy in a PDMP response."
* . ^mustSupport = false
* . ^isModifier = false
* identifier 1..* MS
* identifier ^slicing.discriminator.type = #pattern
* identifier ^slicing.discriminator.path = "$this"
* identifier ^slicing.rules = #open
* identifier ^comment = "NPI preferred."
* identifier.system ..1 MS
* identifier.system only uri
* identifier.value ..1 MS
* identifier.value only string
* identifier contains
    NCPDP 0..1 and
    DEA 0..1
* identifier[NCPDP] ^short = "NCPDP Provider ID"
* identifier[NCPDP] ^comment = "NCPDP Provider Identification Number."
* identifier[NCPDP] ^patternIdentifier.system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* identifier[NCPDP] ^mustSupport = true
* identifier[DEA] ^short = "DEA Number"
* identifier[DEA] ^comment = "Drug Enforcement Administration registration number"
* identifier[DEA] ^patternIdentifier.system = "http://terminology.hl7.org/NamingSystem/usdeanumber"
* identifier[DEA] ^mustSupport = true
* address MS

Instance: pdmp-pharmacy-1
InstanceOf: pdmp-organization-pharmacy
Usage: #example
Description: "Example of a PDMP dispensing pharmacy"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy"
* text.status = #generated
* text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The pharmacy that dispensed the reported medication: Our Pharmacy</div>"
* identifier[0].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[=].type.coding.code = #DEA
* identifier[=].type.coding.display = "Drug Enforcement Administration registration number"
* identifier[=].system = "http://terminology.hl7.org/NamingSystem/usdeanumber"
* identifier[=].value = "CS4861378"
* identifier[+].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "1669512349"
* identifier[+].system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* identifier[=].value = "999017"
* active = true
* name = "Our Pharmacy"
* telecom[0].system = #phone
* telecom[=].value = "952-555-5555"
* telecom[+].system = #email
* telecom[=].value = "contact-our-pharmacy@email.org"
* address.line = "220 Oak St"
* address.city = "Minneapolis"
* address.state = "MN"
* address.postalCode = "55008"
* address.country = "USA"

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-parameters-request.fsh

Profile: PdmpParametersRequest
Parent: Parameters
Id: pdmp-parameters-request
Title: "PDMP Parameters - Request"
Description: "This profile tailors the Parameters resource to convey PDMP History operation inputs."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^meta.lastUpdated = "2024-04-01T00:00:00-05:00"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* parameter MS
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.ordered = false
* parameter ^slicing.rules = #open
* parameter contains
    patient 1..1 MS and
    animal-owner 0..1 MS and
    authorized-practitioner 1..1 MS and
    authorized-practitioner-role 1..1 MS and
    authorized-practitioner-organization 1..1 MS and
    delegate-practitioner 0..1 MS and
    delegate-practitioner-role 0..1 MS and
    delegate-organization 0..1 MS and
    pre-stage-only 0..* MS and
    pre-stage-retrieval-key 0..* MS
* parameter[patient].name = "patient" (exactly)
* parameter[patient].name MS
* parameter[patient].value[x] only Reference($pdmp-patient)
* parameter[patient].value[x] MS
* parameter[animal-owner].name = "animal-owner" (exactly)
* parameter[animal-owner].name MS
* parameter[animal-owner].value[x] only Reference($us-core-relatedperson)
* parameter[animal-owner].value[x] MS
* parameter[authorized-practitioner].name = "authorized-practitioner" (exactly)
* parameter[authorized-practitioner].name MS
* parameter[authorized-practitioner].value[x] only Reference($us-core-practitioner)
* parameter[authorized-practitioner].value[x] MS
* parameter[authorized-practitioner-role].name = "authorized-practitioner-role" (exactly)
* parameter[authorized-practitioner-role].name MS
* parameter[authorized-practitioner-role].value[x] only Reference($us-core-practitionerrole)
* parameter[authorized-practitioner].value[x] MS
* parameter[authorized-practitioner-organization].name = "authorized-practitioner-organization" (exactly)
* parameter[authorized-practitioner-organization].name MS
* parameter[authorized-practitioner-organization].value[x] only Reference($us-core-organization)
* parameter[authorized-practitioner-organization].value[x] MS
* parameter[delegate-practitioner].name = "delegate-practitioner" (exactly)
* parameter[delegate-practitioner].name MS
* parameter[delegate-practitioner].value[x] only Reference($us-core-practitioner)
* parameter[delegate-practitioner].value[x] MS
* parameter[delegate-practitioner-role].name = "delegate-practitioner-role" (exactly)
* parameter[delegate-practitioner-role].name MS
* parameter[delegate-practitioner-role].value[x] only Reference($us-core-practitionerrole)
* parameter[delegate-practitioner].value[x] MS
* parameter[delegate-organization].name = "delegate-organization" (exactly)
* parameter[delegate-organization].name MS
* parameter[delegate-organization].value[x] only Reference($us-core-organization)
* parameter[delegate-organization].value[x] MS
* parameter[pre-stage-only].name = "pre-stage-only" (exactly)
* parameter[pre-stage-only].name MS
* parameter[pre-stage-only].value[x] only boolean
* parameter[pre-stage-retrieval-key].name = "pre-stage-retrieval-key" (exactly)
* parameter[pre-stage-retrieval-key].name MS
* parameter[pre-stage-retrieval-key].value[x] only string


Instance: pdmp-history-input-parameters-1
InstanceOf: pdmp-parameters-request
Usage: #example
Description: "Example of a Parameters resource used to request a patient's PDMP history"
* parameter[patient].name = "patient"
* parameter[patient].resource.id = "patient-req-1"
* parameter[patient].resource.resourceType = "Patient"
* parameter[patient].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient"
* parameter[patient].resource.text.status = #generated
* parameter[patient].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">August Samuels</div>"
* parameter[patient].resource.identifier.type = $v2-0203#SS "Social Security number"
* parameter[patient].resource.identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* parameter[patient].resource.identifier.value = "120-35-2435"
* parameter[patient].resource.name.family = "Samuels"
* parameter[patient].resource.name.given = "August"
* parameter[patient].resource.gender = #male
* parameter[patient].resource.birthDate = "1989-03-12"
* parameter[patient].resource.address.state = "MA"
* parameter[patient].resource.address.postalCode = "01059"
* parameter[authorized-practitioner].name = "authorized-practitioner"
* parameter[authorized-practitioner].resource.id = "practitioner-req-1"
* parameter[authorized-practitioner].resource.resourceType = "Practitioner"
* parameter[authorized-practitioner].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0"
* parameter[authorized-practitioner].resource.text.status = #generated
* parameter[authorized-practitioner].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Adam Amster MD</div>"
* parameter[authorized-practitioner].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* parameter[authorized-practitioner].resource.identifier[=].value = "1928340565"
* parameter[authorized-practitioner].resource.name.family = "Amster"
* parameter[authorized-practitioner].resource.name.given = "Adam"
* parameter[authorized-practitioner].resource.address.state = "MA"
* parameter[authorized-practitioner-role].name = "authorized-practitioner-role"
* parameter[authorized-practitioner-role].resource.resourceType = "PractitionerRole"
* parameter[authorized-practitioner-role].resource.id = "practitionerrole-req-1"
* parameter[authorized-practitioner-role].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0"
* parameter[authorized-practitioner-role].resource.text.status = #generated
* parameter[authorized-practitioner-role].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Adam Amster, Internal Medicine, Highview Clinic</div>"
* parameter[authorized-practitioner-role].resource.practitioner.reference = "Practitioner/practitioner-req-1"
* parameter[authorized-practitioner-role].resource.practitioner.display = "Adam Amster"
* parameter[authorized-practitioner-role].resource.organization.reference = "Organization/organization-req-1"
* parameter[authorized-practitioner-role].resource.organization.display = "Highview Clinic"
* parameter[authorized-practitioner-role].resource.telecom[0].system = #phone
* parameter[authorized-practitioner-role].resource.telecom[=].value = "951-555-5555"
* parameter[authorized-practitioner-role].resource.telecom[+].system = #email
* parameter[authorized-practitioner-role].resource.telecom[=].value = "aamster-highview-clinic@exampleemail.org"
* parameter[authorized-practitioner-organization].name = "authorized-practitioner-organization"
* parameter[authorized-practitioner-organization].resource.resourceType = "Organization"
* parameter[authorized-practitioner-organization].resource.id = "organization-req-1"
* parameter[authorized-practitioner-organization].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0"
* parameter[authorized-practitioner-organization].resource.text.status = #generated
* parameter[authorized-practitioner-organization].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Highview Clinic</div>"
* parameter[authorized-practitioner-organization].resource.identifier.system = "http://hl7.org/fhir/sid/us-npi"
* parameter[authorized-practitioner-organization].resource.identifier.value = "9851234689"
* parameter[authorized-practitioner-organization].resource.active = true
* parameter[authorized-practitioner-organization].resource.name = "Highview Clinic"
* parameter[authorized-practitioner-organization].resource.address.state = "MA"
* parameter[pre-stage-only].name = "pre-stage-only"
* parameter[pre-stage-only].valueBoolean = false


Instance: pdmp-history-input-parameters-2-minimum
InstanceOf: pdmp-parameters-request
Usage: #example
Description: "Example of the minimal Parameters resource population to request a patient's PDMP history"
* parameter[patient].name = "patient"
* parameter[patient].resource.id = "patient-req-2"
* parameter[patient].resource.resourceType = "Patient"
* parameter[patient].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient"
* parameter[patient].resource.text.status = #generated
* parameter[patient].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">August Samuels</div>"
* parameter[patient].resource.identifier.type = $v2-0203#SS "Social Security number"
* parameter[patient].resource.identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* parameter[patient].resource.identifier.value = "120-35-2435"
* parameter[patient].resource.name.family = "Samuels"
* parameter[patient].resource.name.given = "August"
* parameter[patient].resource.gender = #unknown
* parameter[patient].resource.birthDate = "1989-03-12"
* parameter[authorized-practitioner].name = "authorized-practitioner"
* parameter[authorized-practitioner].resource.id = "practitioner-req-2"
* parameter[authorized-practitioner].resource.resourceType = "Practitioner"
* parameter[authorized-practitioner].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0"
* parameter[authorized-practitioner].resource.text.status = #generated
* parameter[authorized-practitioner].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Adam Amster MD</div>"
* parameter[authorized-practitioner].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* parameter[authorized-practitioner].resource.identifier[=].value = "1928340565"
* parameter[authorized-practitioner].resource.name.family = "Amster"
* parameter[authorized-practitioner-role].name = "authorized-practitioner-role"
* parameter[authorized-practitioner-role].resource.resourceType = "PractitionerRole"
* parameter[authorized-practitioner-role].resource.id = "practitionerrole-req-2"
* parameter[authorized-practitioner-role].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0"
* parameter[authorized-practitioner-role].resource.text.status = #generated
* parameter[authorized-practitioner-role].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Adam Amster, Internal Medicine, Highview Clinic</div>"
* parameter[authorized-practitioner-role].resource.practitioner.reference = "Practitioner/practitioner-req-2"
* parameter[authorized-practitioner-role].resource.practitioner.display = "Adam Amster"
* parameter[authorized-practitioner-role].resource.organization.reference = "Organization/organization-req-2"
* parameter[authorized-practitioner-role].resource.organization.display = "Highview Clinic"
* parameter[authorized-practitioner-role].resource.telecom[0].system = #phone
* parameter[authorized-practitioner-role].resource.telecom[=].value = "951-555-5555"
* parameter[authorized-practitioner-organization].name = "authorized-practitioner-organization"
* parameter[authorized-practitioner-organization].resource.resourceType = "Organization"
* parameter[authorized-practitioner-organization].resource.id = "organization-req-2"
* parameter[authorized-practitioner-organization].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0"
* parameter[authorized-practitioner-organization].resource.text.status = #generated
* parameter[authorized-practitioner-organization].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Highview Clinic</div>"
* parameter[authorized-practitioner-organization].resource.active = true
* parameter[authorized-practitioner-organization].resource.name = "Highview Clinic"
* parameter[pre-stage-only].name = "pre-stage-only"
* parameter[pre-stage-only].valueBoolean = false


Instance: pdmp-history-input-parameters-3-veterinary
InstanceOf: pdmp-parameters-request
Usage: #example
Description: "Example of a PDMP operation request for an animal patient"
* parameter[patient].name = "patient"
* parameter[patient].resource.id = "patient-req-3"
* parameter[patient].resource.resourceType = "Patient"
* parameter[patient].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient"
* parameter[patient].resource.text.status = #generated
* parameter[patient].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Animal patient: Fido Samuels</div>"
* parameter[patient].resource.extension[0].url = $patient-animal-extension
* parameter[patient].resource.extension[=].extension[0].url = "species"
* parameter[patient].resource.extension[=].extension[0].valueCodeableConcept.coding = $pmix-species-type-cs#02 "Veterinary Patient"
* parameter[patient].resource.identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* parameter[patient].resource.identifier.type.coding.code = #MR
* parameter[patient].resource.identifier.type.coding.display = "Medical record number"
* parameter[patient].resource.identifier.system = "http://vet-medical.example.org/mrn"
* parameter[patient].resource.identifier.value = "10035406"
* parameter[patient].resource.name.family = "Samuels"
* parameter[patient].resource.name.given = "Fido"
* parameter[patient].resource.gender = #male
* parameter[patient].resource.birthDate.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* parameter[patient].resource.birthDate.extension.valueCode = #unknown
* parameter[patient].resource.address.line[0] = "10023 Oakways Ln"
* parameter[patient].resource.address.state = "Concord"
* parameter[patient].resource.address.state = "MA"
* parameter[patient].resource.address.postalCode = "01742"
* parameter[animal-owner].name = "animal-owner"
* parameter[animal-owner].resource.id = "patient-req-3"
* parameter[animal-owner].resource.resourceType = "RelatedPerson"
* parameter[animal-owner].resource.meta.profile = $us-core-relatedperson
* parameter[animal-owner].resource.text.status = #generated
* parameter[animal-owner].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Animal's owner: August Samuels</div>"
* parameter[animal-owner].resource.identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* parameter[animal-owner].resource.identifier.type.coding.code = #DL
* parameter[animal-owner].resource.identifier.type.coding.display = "Driver's license number"
* parameter[animal-owner].resource.identifier.value = "M231-64600-565-55"
* parameter[animal-owner].resource.active = true
* parameter[animal-owner].resource.name.family = "Samuels"
* parameter[animal-owner].resource.name.given = "August"
* parameter[animal-owner].resource.gender = #male
* parameter[animal-owner].resource.birthDate = "1989-03-12"
* parameter[animal-owner].resource.address.line[0] = "10023 Oakways Ln"
* parameter[animal-owner].resource.address.state = "Concord"
* parameter[animal-owner].resource.address.state = "MA"
* parameter[animal-owner].resource.address.postalCode = "01742"
* parameter[animal-owner].resource.patient.reference = "Patient/patient-req-3"
* parameter[authorized-practitioner].name = "authorized-practitioner"
* parameter[authorized-practitioner].resource.id = "practitioner-req-3"
* parameter[authorized-practitioner].resource.resourceType = "Practitioner"
* parameter[authorized-practitioner].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0"
* parameter[authorized-practitioner].resource.text.status = #generated
* parameter[authorized-practitioner].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Susan Patel, Veterinarian</div>"
* parameter[authorized-practitioner].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* parameter[authorized-practitioner].resource.identifier[=].value = "1928340565"
* parameter[authorized-practitioner].resource.name.family = "Patel"
* parameter[authorized-practitioner-role].name = "authorized-practitioner-role"
* parameter[authorized-practitioner-role].resource.resourceType = "PractitionerRole"
* parameter[authorized-practitioner-role].resource.id = "practitionerrole-req-3"
* parameter[authorized-practitioner-role].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0"
* parameter[authorized-practitioner-role].resource.text.status = #generated
* parameter[authorized-practitioner-role].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Susan Patel, Veterinary Medicine, Highview Veterinary</div>"
* parameter[authorized-practitioner-role].resource.practitioner.reference = "Practitioner/practitioner-req-3"
* parameter[authorized-practitioner-role].resource.practitioner.display = "Susan Patel"
* parameter[authorized-practitioner-role].resource.organization.reference = "Organization/organization-req-3"
* parameter[authorized-practitioner-role].resource.organization.display = "Highview Veterinary"
* parameter[authorized-practitioner-role].resource.telecom[0].system = #phone
* parameter[authorized-practitioner-role].resource.telecom[=].value = "951-555-5555"
* parameter[authorized-practitioner-organization].name = "authorized-practitioner-organization"
* parameter[authorized-practitioner-organization].resource.resourceType = "Organization"
* parameter[authorized-practitioner-organization].resource.id = "organization-req-3"
* parameter[authorized-practitioner-organization].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0"
* parameter[authorized-practitioner-organization].resource.text.status = #generated
* parameter[authorized-practitioner-organization].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Highview Veterinary</div>"
* parameter[authorized-practitioner-organization].resource.active = true
* parameter[authorized-practitioner-organization].resource.name = "Highview Veterinary"
* parameter[pre-stage-only].name = "pre-stage-only"
* parameter[pre-stage-only].valueBoolean = false
Instance: pdmp-history-input-parameters-4-delegate
InstanceOf: pdmp-parameters-request
Usage: #example
Description: "Example of a PDMP operation request submitted by a delegate"
* parameter[patient].name = "patient"
* parameter[patient].resource.id = "patient-req-4"
* parameter[patient].resource.resourceType = "Patient"
* parameter[patient].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient"
* parameter[patient].resource.text.status = #generated
* parameter[patient].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Patient: Jules Julien</div>"
* parameter[patient].resource.identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* parameter[patient].resource.identifier.type.coding.code = #MR
* parameter[patient].resource.identifier.type.coding.display = "Medical record number"
* parameter[patient].resource.identifier.system = "http://highview-va.example.org/mrn"
* parameter[patient].resource.identifier.value = "10035666601"
* parameter[patient].resource.active = true
* parameter[patient].resource.name.family = "Julien"
* parameter[patient].resource.name.given = "Jules"
* parameter[patient].resource.gender = #female
* parameter[patient].resource.birthDate = "1980-05-20"
* parameter[patient].resource.address.line[0] = "10023 Santa Clara Blvd"
* parameter[patient].resource.address.state = "Concord"
* parameter[patient].resource.address.state = "MA"
* parameter[patient].resource.address.postalCode = "01742"
* parameter[authorized-practitioner].name = "authorized-practitioner"
* parameter[authorized-practitioner].resource.id = "practitioner-req-4"
* parameter[authorized-practitioner].resource.resourceType = "Practitioner"
* parameter[authorized-practitioner].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0"
* parameter[authorized-practitioner].resource.text.status = #generated
* parameter[authorized-practitioner].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Mari Kimble MD</div>"
* parameter[authorized-practitioner].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* parameter[authorized-practitioner].resource.identifier[=].value = "1665015602"
* parameter[authorized-practitioner].resource.name.family = "Kimble"
* parameter[authorized-practitioner-role].name = "authorized-practitioner-role"
* parameter[authorized-practitioner-role].resource.resourceType = "PractitionerRole"
* parameter[authorized-practitioner-role].resource.id = "practitionerrole-req-4"
* parameter[authorized-practitioner-role].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0"
* parameter[authorized-practitioner-role].resource.text.status = #generated
* parameter[authorized-practitioner-role].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Mari Kimble, Internal Medicine, Highview VA Clinic</div>"
* parameter[authorized-practitioner-role].resource.practitioner.reference = "Practitioner/practitioner-req-4"
* parameter[authorized-practitioner-role].resource.practitioner.display = "Mari Kimble"
* parameter[authorized-practitioner-role].resource.organization.reference = "Organization/organization-req-4"
* parameter[authorized-practitioner-role].resource.organization.display = "Highview VA Clinic"
* parameter[authorized-practitioner-role].resource.specialty = $taxonomy#207R00000X "Internal Medicine Physician"
* parameter[authorized-practitioner-role].resource.telecom[0].system = #phone
* parameter[authorized-practitioner-role].resource.telecom[=].value = "508-856-1234"
* parameter[authorized-practitioner-organization].name = "authorized-practitioner-organization"
* parameter[authorized-practitioner-organization].resource.resourceType = "Organization"
* parameter[authorized-practitioner-organization].resource.id = "organization-req-4"
* parameter[authorized-practitioner-organization].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0"
* parameter[authorized-practitioner-organization].resource.text.status = #generated
* parameter[authorized-practitioner-organization].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Highview VA Clinic</div>"
* parameter[authorized-practitioner-organization].resource.active = true
* parameter[authorized-practitioner-organization].resource.name = "Highview VA Clinic"
* parameter[authorized-practitioner-organization].resource.telecom.system = #phone
* parameter[authorized-practitioner-organization].resource.telecom.value = "508-856-5555"
* parameter[authorized-practitioner-organization].resource.address.line = "2002 Highview Ln"
* parameter[authorized-practitioner-organization].resource.address.city = "Worcester"
* parameter[authorized-practitioner-organization].resource.address.state = "MA"
* parameter[authorized-practitioner-organization].resource.address.postalCode = "01604"
* parameter[delegate-practitioner].name = "delegate-practitioner"
* parameter[delegate-practitioner].resource.id = "practitioner-req-4-del"
* parameter[delegate-practitioner].resource.resourceType = "Practitioner"
* parameter[delegate-practitioner].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0"
* parameter[delegate-practitioner].resource.text.status = #generated
* parameter[delegate-practitioner].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Boris Bartok</div>"
* parameter[delegate-practitioner].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* parameter[delegate-practitioner].resource.identifier[=].value = "1554505606"
* parameter[delegate-practitioner].resource.name.family = "Bartok"
* parameter[delegate-practitioner-role].name = "delegate-practitioner-role"
* parameter[delegate-practitioner-role].resource.resourceType = "PractitionerRole"
* parameter[delegate-practitioner-role].resource.id = "practitionerrole-req-4-del"
* parameter[delegate-practitioner-role].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0"
* parameter[delegate-practitioner-role].resource.text.status = #generated
* parameter[delegate-practitioner-role].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Boris Bartok RN, Highview VA Clinic</div>"
* parameter[delegate-practitioner-role].resource.practitioner.reference = "Practitioner/practitioner-req-4-del"
* parameter[delegate-practitioner-role].resource.practitioner.display = "Mari Kimble"
* parameter[delegate-practitioner-role].resource.organization.reference = "Organization/organization-req-4-del"
* parameter[delegate-practitioner-role].resource.organization.display = "Highview VA Clinic"
* parameter[delegate-practitioner-role].resource.specialty = $taxonomy#163W00000X "Registered Nurse"
* parameter[delegate-practitioner-role].resource.telecom[0].system = #phone
* parameter[delegate-practitioner-role].resource.telecom[=].value = "508-856-9999"
* parameter[delegate-organization].name = "delegate-organization"
* parameter[delegate-organization].resource.resourceType = "Organization"
* parameter[delegate-organization].resource.id = "organization-req-4-del"
* parameter[delegate-organization].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0"
* parameter[delegate-organization].resource.text.status = #generated
* parameter[delegate-organization].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Highview VA Clinic</div>"
* parameter[delegate-organization].resource.active = true
* parameter[delegate-organization].resource.name = "Highview VA Clinic"
* parameter[delegate-organization].resource.telecom.system = #phone
* parameter[delegate-organization].resource.telecom.value = "508-856-5555"
* parameter[delegate-organization].resource.address.line = "2002 Highview Ln"
* parameter[delegate-organization].resource.address.city = "Worcester"
* parameter[delegate-organization].resource.address.state = "MA"
* parameter[delegate-organization].resource.address.postalCode = "01604"
* parameter[pre-stage-only].name = "pre-stage-only"
* parameter[pre-stage-only].valueBoolean = false

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-parameters-response.fsh

Profile: PdmpParametersResponse
Parent: Parameters
Id: pdmp-parameters-response
Title: "PDMP Parameters - Response"
Description: "This profile tailors the Parameters resource to convey PDMP History operation outputs."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^meta.lastUpdated = "2024-04-01T00:00:00-05:00"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* parameter 1..4 MS
* parameter ^slicing.discriminator.type = #value
* parameter ^slicing.discriminator.path = "name"
* parameter ^slicing.ordered = false
* parameter ^slicing.rules = #open
* parameter contains
    pdmp-history-data 0..1 MS and
    pdmp-history-link 0..1 MS and
    pre-stage-retrieval-key 0..1 MS and
    outcome 0..1 MS
* parameter[pdmp-history-data].name = "pdmp-history-data" (exactly)
* parameter[pdmp-history-data].name MS
* parameter[pdmp-history-data].value[x] only Reference($pdmp-bundle-history-result)
* parameter[pdmp-history-data].value[x] MS
* parameter[pdmp-history-link].name = "pdmp-history-link" (exactly)
* parameter[pdmp-history-link].name MS
* parameter[pdmp-history-link].value[x] only url
* parameter[pdmp-history-link].value[x] MS
* parameter[pre-stage-retrieval-key].name = "pre-stage-retrieval-key" (exactly)
* parameter[pre-stage-retrieval-key].name MS
* parameter[pre-stage-retrieval-key].value[x] only string
* parameter[pre-stage-retrieval-key].value[x] MS
* parameter[outcome].name = "outcome" (exactly)
* parameter[outcome].name MS
* parameter[outcome].value[x] only Reference($operation-outcome)
* parameter[outcome].value[x] MS


Instance: pdmp-history-output-parameters-1
InstanceOf: pdmp-parameters-response
Usage: #example
Description: "Example of a Parameters resource used to respond to a request a patient's PDMP history"
* parameter[pdmp-history-data].name = "pdmp-history-data"
* parameter[pdmp-history-data].resource.id = "bundle-history-data-1"
* parameter[pdmp-history-data].resource.resourceType = "Bundle"
* parameter[pdmp-history-data].resource.meta.profile = $pdmp-bundle-history-result
* parameter[pdmp-history-data].resource.type = #collection
* parameter[pdmp-history-data].resource.entry[0].fullUrl = "urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084"
* parameter[pdmp-history-data].resource.entry[=].id = "meddispense-res-1"
* parameter[pdmp-history-data].resource.entry[=].resource.resourceType = "MedicationDispense"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.lastUpdated = "2023-06-05T18:38:52Z"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* parameter[pdmp-history-data].resource.entry[=].resource.text.status = #generated
* parameter[pdmp-history-data].resource.entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</div>"
* parameter[pdmp-history-data].resource.entry[=].resource.extension[0].url = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number"
* parameter[pdmp-history-data].resource.entry[=].resource.extension[=].valuePositiveInt = 1
* parameter[pdmp-history-data].resource.entry[=].resource.extension[+].url = $pdmp-extension-rx-transmission-method
* parameter[pdmp-history-data].resource.entry[=].resource.extension[=].valueCoding = $pmix-transmission-cs#"05" "Electronic Prescription"
* parameter[pdmp-history-data].resource.entry[=].resource.extension[+].url = $pdmp-extension-mme
* parameter[pdmp-history-data].resource.entry[=].resource.extension[=].valueDecimal = 18
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.type = $v2-0203#FILL "Filler Identifier"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.system = "http://ourpharmacy.com/fillnumber"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.value = "2000353"
* parameter[pdmp-history-data].resource.entry[=].resource.status = #completed
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.coding[0] = $rxnorm#993781 "acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet"
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.coding[+] = $ndc#00093015001
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.coding[=].userSelected = true
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.text = "Acetaminophen 300 mg / Codeine 30 mg oral tablet"
* parameter[pdmp-history-data].resource.entry[=].resource.subject.reference = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* parameter[pdmp-history-data].resource.entry[=].resource.subject.display = "August Samuels"
* parameter[pdmp-history-data].resource.entry[=].resource.performer.actor.reference = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* parameter[pdmp-history-data].resource.entry[=].resource.performer.actor.identifier.system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* parameter[pdmp-history-data].resource.entry[=].resource.performer.actor.identifier.value = "999017"
* parameter[pdmp-history-data].resource.entry[=].resource.performer.actor.display = "Our Pharmacy"
* parameter[pdmp-history-data].resource.entry[=].resource.authorizingPrescription.identifier.type = $v2-0203#FILL "Filler Identifier"
* parameter[pdmp-history-data].resource.entry[=].resource.authorizingPrescription.identifier.system = "http://mypharmacysystem.com/prescriptionnumber"
* parameter[pdmp-history-data].resource.entry[=].resource.authorizingPrescription.identifier.value = "000022056"
* parameter[pdmp-history-data].resource.entry[=].resource.quantity.value = 15 
* parameter[pdmp-history-data].resource.entry[=].resource.quantity.unit = "each"
* parameter[pdmp-history-data].resource.entry[=].resource.daysSupply.value = 5
* parameter[pdmp-history-data].resource.entry[=].resource.whenPrepared = "2023-06-05"
* parameter[pdmp-history-data].resource.entry[=].resource.whenHandedOver.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* parameter[pdmp-history-data].resource.entry[=].resource.whenHandedOver.extension.valueCode = #unknown
* parameter[pdmp-history-data].resource.entry[=].resource.dosageInstruction.sequence = 1
* parameter[pdmp-history-data].resource.entry[=].resource.dosageInstruction.text = "1 tab every 6 to 8 hours as needed for pain"

* parameter[pdmp-history-data].resource.entry[+].fullUrl = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* parameter[pdmp-history-data].resource.entry[=].resource.id = "patient-res-1-1"
* parameter[pdmp-history-data].resource.entry[=].resource.resourceType = "Patient"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* parameter[pdmp-history-data].resource.entry[=].resource.text.status = #generated
* parameter[pdmp-history-data].resource.entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The PDMP Responder's patient record for the patient identified in the PDMP request: August Samuels</div>"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.type = $v2-0203#SS
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.value = "120-35-2435"
* parameter[pdmp-history-data].resource.entry[=].resource.name.family = "Samuels"
* parameter[pdmp-history-data].resource.entry[=].resource.name.given = "August"
* parameter[pdmp-history-data].resource.entry[=].resource.gender = #male
* parameter[pdmp-history-data].resource.entry[=].resource.birthDate = "1989-03-12"
* parameter[pdmp-history-data].resource.entry[=].resource.address.state = "MA"
* parameter[pdmp-history-data].resource.entry[=].resource.address.postalCode = "01059"

* parameter[pdmp-history-data].resource.entry[+].fullUrl = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* parameter[pdmp-history-data].resource.entry[=].resource.id = "pharmacy-res-1-1"
* parameter[pdmp-history-data].resource.entry[=].resource.resourceType = "Organization"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.profile = $pdmp-pharmacy
* parameter[pdmp-history-data].resource.entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* parameter[pdmp-history-data].resource.entry[=].resource.text.status = #generated
* parameter[pdmp-history-data].resource.entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The pharmacy that dispensed the reported medication: Our Pharmacy</div>"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier[=].value = "1669512349"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier[+].system = "http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier[=].value = "999017"
* parameter[pdmp-history-data].resource.entry[=].resource.active = true
* parameter[pdmp-history-data].resource.entry[=].resource.name = "Our Pharmacy"
* parameter[pdmp-history-data].resource.entry[=].resource.telecom[0].system = #phone
* parameter[pdmp-history-data].resource.entry[=].resource.telecom[=].value = "952-555-5555"
* parameter[pdmp-history-data].resource.entry[=].resource.telecom[+].system = #email
* parameter[pdmp-history-data].resource.entry[=].resource.telecom[=].value = "contact-our-pharmacy@email.org"
* parameter[pdmp-history-data].resource.entry[=].resource.address.line = "220 Oak St"
* parameter[pdmp-history-data].resource.entry[=].resource.address.city = "Minneapolis"
* parameter[pdmp-history-data].resource.entry[=].resource.address.state = "MN"
* parameter[pdmp-history-data].resource.entry[=].resource.address.postalCode = "55008"
* parameter[pdmp-history-data].resource.entry[=].resource.address.country = "USA"


Instance: pdmp-history-output-parameters-2-minimal-history
InstanceOf: pdmp-parameters-response
Usage: #example
Description: "Example of minimal population of a Parameters resource used to respond when a patient has PDMP history"
* parameter[pdmp-history-data].name = "pdmp-history-data"
* parameter[pdmp-history-data].resource.id = "bundle-history-data-2-minimal"
* parameter[pdmp-history-data].resource.resourceType = "Bundle"
* parameter[pdmp-history-data].resource.meta.profile = $pdmp-bundle-history-result
* parameter[pdmp-history-data].resource.type = #collection

* parameter[pdmp-history-data].resource.entry[0].fullUrl = "urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084"
* parameter[pdmp-history-data].resource.entry[=].id = "meddispense-res-2"
* parameter[pdmp-history-data].resource.entry[=].resource.resourceType = "MedicationDispense"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* parameter[pdmp-history-data].resource.entry[=].resource.text.status = #generated
* parameter[pdmp-history-data].resource.entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</div>"
* parameter[pdmp-history-data].resource.entry[=].resource.status = #completed
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.coding[0] = $ndc#00093015001
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.coding[0].userSelected = true
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.coding[+] = $rxnorm#993781 "acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet"
* parameter[pdmp-history-data].resource.entry[=].resource.medicationCodeableConcept.text = "Acetaminophen 300 mg / Codeine 30 mg oral tablet"
* parameter[pdmp-history-data].resource.entry[=].resource.subject.reference = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* parameter[pdmp-history-data].resource.entry[=].resource.subject.display = "August Samuels"
* parameter[pdmp-history-data].resource.entry[=].resource.performer.actor.reference = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* parameter[pdmp-history-data].resource.entry[=].resource.authorizingPrescription.identifier.type = $v2-0203#FILL "Filler Identifier"
* parameter[pdmp-history-data].resource.entry[=].resource.authorizingPrescription.identifier.system = "http://mypharmacysystem.com/prescriptionnumber"
* parameter[pdmp-history-data].resource.entry[=].resource.authorizingPrescription.identifier.value = "065046045550"
* parameter[pdmp-history-data].resource.entry[=].resource.quantity.value = 10 
* parameter[pdmp-history-data].resource.entry[=].resource.quantity.unit = "each"
* parameter[pdmp-history-data].resource.entry[=].resource.daysSupply.value = 5
* parameter[pdmp-history-data].resource.entry[=].resource.whenPrepared = "2023-06-05"
* parameter[pdmp-history-data].resource.entry[=].resource.whenHandedOver.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* parameter[pdmp-history-data].resource.entry[=].resource.whenHandedOver.extension.valueCode = #unknown

* parameter[pdmp-history-data].resource.entry[+].fullUrl = "urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57"
* parameter[pdmp-history-data].resource.entry[=].resource.id = "patient-res-1-2"
* parameter[pdmp-history-data].resource.entry[=].resource.resourceType = "Patient"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.profile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* parameter[pdmp-history-data].resource.entry[=].resource.text.status = #generated
* parameter[pdmp-history-data].resource.entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The PDMP Responder's patient record for the patient identified in the PDMP request: August Samuels</div>"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.type = $v2-0203#SS
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier.value = "120-35-2435"
* parameter[pdmp-history-data].resource.entry[=].resource.name.family = "Samuels"
* parameter[pdmp-history-data].resource.entry[=].resource.name.given = "August"
* parameter[pdmp-history-data].resource.entry[=].resource.gender = #unknown
* parameter[pdmp-history-data].resource.entry[=].resource.birthDate = "1989-03-12"

* parameter[pdmp-history-data].resource.entry[+].fullUrl = "urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e"
* parameter[pdmp-history-data].resource.entry[=].resource.id = "pharmacy-res-2-1"
* parameter[pdmp-history-data].resource.entry[=].resource.resourceType = "Organization"
* parameter[pdmp-history-data].resource.entry[=].resource.meta.profile = $pdmp-pharmacy
* parameter[pdmp-history-data].resource.entry[=].resource.meta.source = "http://example.org/ma-pdmp"
* parameter[pdmp-history-data].resource.entry[=].resource.text.status = #generated
* parameter[pdmp-history-data].resource.entry[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">The pharmacy that dispensed the reported medication: Our Pharmacy</div>"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* parameter[pdmp-history-data].resource.entry[=].resource.identifier[=].value = "1669512349"
* parameter[pdmp-history-data].resource.entry[=].resource.active = true
* parameter[pdmp-history-data].resource.entry[=].resource.name = "Our Pharmacy"


Instance: pdmp-history-output-parameters-3-patient-not-found
InstanceOf: pdmp-parameters-response
Usage: #example
Description: "Example of population of the Parameters resource when the requested patient is not found and no PDMP history is returned"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response"
* parameter.name = "outcome"
* parameter.resource.resourceType = "OperationOutcome"
* parameter.resource.id = "100"
* parameter.resource.text.status = #generated
* parameter.resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">No PDMP history was found for the submitted patient</div>"
* parameter.resource.issue.severity = #information
* parameter.resource.issue.code = #informational
* parameter.resource.issue.details = $pmix-response-status-cs#no-data "No Data"
* parameter.resource.issue.diagnostics = "No PDMP history was found for the submitted patient"

Instance: pdmp-history-output-parameters-4-link-response
InstanceOf: pdmp-parameters-response
Usage: #example
Description: "Example of population of the Parameters resource when a link to the PDMP history is returned"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response"
* parameter.name = "pdmp-history-link"
* parameter.valueUrl = "http://pdmp.example.org/response/013050650054450"

Instance: pdmp-history-output-parameters-5-pre-stage-response
InstanceOf: pdmp-parameters-response
Usage: #example
Description: "Example of population of the Parameters resource when pre-staging of PDMP history was requested"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response"
* parameter[0].name = "pre-stage-retrieval-key"
* parameter[=].valueString = "0938e860-2f61-433b-982a-9044bd2f42d5"
* parameter[+].name = "outcome"
* parameter[=].resource.resourceType = "OperationOutcome"
* parameter[=].resource.id = "4d76ff54-21d1-419f-9ec1-233cfbd45b0e"
* parameter[=].resource.text.status = #generated
* parameter[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Pre-stage request was accepted successfully</div>"
* parameter[=].resource.issue.severity = #information
* parameter[=].resource.issue.code = #informational
* parameter[=].resource.issue.details = $pdmp-response-status-cs#pre-stage-accepted "Pre-Stage Request Accepted"

Instance: pdmp-history-output-parameters-6-non-fatal-warning
InstanceOf: pdmp-parameters-response
Usage: #example
Description: "Example of population of the Parameters resource when a link to the PDMP history is returned with a warning"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response"
* parameter[0].name = "pdmp-history-link"
* parameter[=].valueUrl = "http://pdmp.example.org/response/976a5495-72b6-4ed2-b913-a7dc21e7e5e0"
* parameter[+].name = "outcome"
* parameter[=].resource.resourceType = "OperationOutcome"
* parameter[=].resource.id = "86b95d37-653b-4d46-9af1-02f43eba4f72"
* parameter[=].resource.text.status = #generated
* parameter[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Incomplete results: History includes only information from the MN PDMP. Iowa PDMP did not respond within the timeout window</div>"
* parameter[=].resource.issue.severity = #warning
* parameter[=].resource.issue.code = #incomplete
* parameter[=].resource.issue.details = $pmix-response-status-cs#error "Error"
* parameter[=].resource.issue.diagnostics = "Incomplete results: History includes only information from the MN PDMP. Iowa PDMP did not respond within the timeout window"

Instance: pdmp-history-output-parameters-7-fatal-error
InstanceOf: pdmp-parameters-response
Usage: #example
Description: "Example of population of the Parameters resource when a fatal exception is encountered and processing doesn't complete"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response"
* parameter[0].name = "outcome"
* parameter[=].resource.resourceType = "OperationOutcome"
* parameter[=].resource.id = "86b95d37-653b-4d46-9af1-02f43eba4f72"
* parameter[=].resource.text.status = #generated
* parameter[=].resource.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\">Incomplete results: A system error occurred during processing</div>"
* parameter[=].resource.issue.severity = #error
* parameter[=].resource.issue.code = #exception
* parameter[=].resource.issue.details = $pmix-response-status-cs#error "Error"
* parameter[=].resource.issue.diagnostics = "An unexpected system error occurred during processing. Please resubmit."


---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-patient.fsh

Invariant: pdmp-full-birthdate
Severity: #error
Description: "Date SHALL include year, month and day if present"
Expression: "extension.exists() or toString().length()=10"

Profile: PdmpPatient
Parent: $us-core-patient
Id: pdmp-patient
Title: "PDMP Patient"
Description: "Defines constraints and extensions on the Patient resource when used by a Prescription Drug Monitoring Program (PDMP) to request or return an individual's medication dispensation history."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* . ^definition = "Patient population guidance for use in a PDMP request or response."
* . ^mustSupport = false
* . ^isModifier = false
* extension contains
	$patient-animal-extension named patient-animal 0..1 MS
* name.family 1.. 
* name.given 1..
* birthDate 1..1 MS
* birthDate obeys pdmp-full-birthdate
* address.country MS  
* identifier ^slicing.discriminator.type = #value
* identifier ^slicing.discriminator.path = "type.coding.code"
* identifier ^slicing.rules = #open
* identifier ^slicing.description = "Slice based on the identifier.type.code"
* identifier contains
    medicalRecordNumber 0.. and
    driversLicense 0.. and
    socialSecurity 0..1 
* identifier[medicalRecordNumber].type.coding.code = #MR
* identifier[medicalRecordNumber].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[driversLicense].type.coding.code = #DL
* identifier[driversLicense].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[socialSecurity].type.coding.code = #SS
* identifier[socialSecurity].type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier[socialSecurity].system = "http://hl7.org/fhir/sid/us-ssn"


Instance: pdmp-patient-1
InstanceOf: pdmp-patient
Usage: #example
Description: "Example of a PDMP patient - as submitted in a request or returned in a response"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient"
* identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding.code = #SS
* identifier.type.coding.display = "Social Security number"
* identifier.system = "http://hl7.org/fhir/sid/us-ssn"
* identifier.value = "120-35-2435"
* name.family = "Samuels"
* name.given = "August"
* gender = #male
* birthDate = "1989-03-12"
* address.line[0] = "10023 Oakways Ln"
* address.state = "Concord"
* address.state = "MA"
* address.postalCode = "01742"


Instance: pdmp-patient-2-veterinary
InstanceOf: pdmp-patient
Usage: #example
Description: "Example of a PDMP patient representing an animal"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient"
* extension[0].url = $patient-animal-extension
* extension[=].extension[0].url = "species"
* extension[=].extension[0].valueCodeableConcept.coding = $pmix-species-type-cs#02 "Veterinary Patient"
* identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding.code = #MR
* identifier.type.coding.display = "Medical record number"
* identifier.system = "http://vet-medical.example.org/mrn"
* identifier.value = "10035406"
* name.family = "Samuels"
* name.given = "Fido"
* gender = #male
* birthDate.extension.url = "http://hl7.org/fhir/StructureDefinition/data-absent-reason"
* birthDate.extension.valueCode = #unknown
* address.line[0] = "10023 Oakways Ln"
* address.state = "Concord"
* address.state = "MA"
* address.postalCode = "01742"

Instance: relatedperson-2-veterinary
InstanceOf: RelatedPerson
Usage: #example
Description: "Example of the owner of an animal patient"
* meta.profile = $us-core-relatedperson
* identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding.code = #DL
* identifier.type.coding.display = "Driver's license number"
* identifier.system = "urn:oid:2.16.840.1.113883.4.3.25"
* identifier.value = "M231-64600-565-55"
* active = true
* name.family = "Samuels"
* name.given = "August"
* gender = #male
* birthDate = "1989-03-12"
* address.line[0] = "10023 Oakways Ln"
* address.state = "Concord"
* address.state = "MA"
* address.postalCode = "01742"
* patient.reference = "Patient/pdmp-patient-2-veterinary"

Instance: pdmp-patient-3
InstanceOf: pdmp-patient
Usage: #example
Description: "Example of a PDMP patient - similar to pdmp-patient-1, but may or may not be the same person"
* meta.profile = "http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient"
* identifier.type.coding.system = "http://terminology.hl7.org/CodeSystem/v2-0203"
* identifier.type.coding.code = #MR
* identifier.type.coding.display = "Medical Record Number"
* identifier.system = "http://Highview.org/EHR/patient/mrn"
* identifier.value = "28-145-2249"
* name.family = "Samuels"
* name.given = "August"
* name.given = "Thomas"
* gender = #male
* birthDate = "1989-03-12"
* address.line[0] = "10023 Oakways Ln #23"
* address.state = "Concord"
* address.state = "MA"
* address.postalCode = "01742"

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-valueset-method-of-payment.fsh

ValueSet: PdmpMethodOfPayment
Id: pmix-method-of-payment
Title: "PDMP Value Set - Method of Payment"
Description: "This value set contains codes representing the method of payment for the dispensation"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Scott Robertson"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "scott.robertson@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "scott@BearHealthTech.consulting"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* include codes from system $pmix-method-of-payment-cs

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-valueset-opioid-treatment-code.fsh

ValueSet: PdmpOpioidTreatmentCode
Id: pdmp-opioid-treatment-code
Title: "PDMP Value Set - Opioid Treatment Code"
Description: "This value set contains codes the reason for the opioid treatment prescribed"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Scott Robertson"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "scott.robertson@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "scott@BearHealthTech.consulting"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* include codes from system $pmix-opioid-treatment-code-cs

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-valueset-patient-alert-category-code.fsh

ValueSet: PdmpPatientAlertCategoryCode
Id: pdmp-patient-alert-category-code
Title: "PDMP Value Set - Patient Alert Category Code"
Description: "A code identifying a kind of patient alert."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Scott Robertson"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "scott.robertson@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "scott@BearHealthTech.consulting"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* include codes from system $pmix-patient-alert-category-code-cs

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-valueset-response-status.fsh

ValueSet: PdmpResponseStatus
Id: pdmp-response-status
Title: "PDMP Value Set - Response Status"
Description: "This value set contains codes indicating the overall status of a PDMP response"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* include codes from system $pmix-response-status-cs
* include codes from system $pdmp-response-status-cs

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-valueset-rx-transmission-method.fsh

ValueSet: PdmpRxTransmissionMethod
Id: pdmp-rx-transmission-method
Title: "PDMP Value Set - Prescription Transmission Method"
Description: "This value set contains codes for the methods by which a prescription was received by the dispensing or administering party."
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^url = "http://hl7.org/fhir/us/pdmp/ValueSet/pdmp-rx-transmission-method"
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* include codes from system $pmix-transmission-cs

---

File: repos/HL7_SLASH_fhir-pdmp/input/fsh/pdmp-valueset-species-type.fsh

ValueSet: PdmpSpeciesType
Id: pdmp-species-type
Title: "PDMP Value Set - Species Type"
Description: "This value set contains codes identifying the species type (human vs veterinary)"
* ^extension.url = "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg"
* ^extension.valueCode = #phx
* ^version = "1.0.0"
* ^status = #active
* ^experimental = false
* ^date = "2024-04-01T00:00:00-05:00"
* ^publisher = "HL7 International / Pharmacy"
* ^contact[0].name = "HL7 International / Pharmacy"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "http://www.hl7.org/Special/committees/medication"
* ^contact[+].name = "Frank McKinney"
* ^contact[=].telecom[0].system = #email
* ^contact[=].telecom[=].value = "frank.mckinney@pocp.com"
* ^contact[=].telecom[+].system = #email
* ^contact[=].telecom[=].value = "fm@frankmckinney.com"
* ^jurisdiction = urn:iso:std:iso:3166#US "United States of America"
* include codes from system $pmix-species-type-cs

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/Bundle-pdmp-bundle-history-result-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Bundle</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-bundle-history-result-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result</span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">collection</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">entry[1]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MedicationDispense" class="emph0 summary">MedicationDispense</span><span id="_Bundle_entry_resource_MedicationDispense" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">meddispense-res-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MedicationDispense_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry_resource_MedicationDispense_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://ourpharmacy.com/fillnumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2000353</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093015001</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Acetaminophen 300 mg / Codeine 30 mg oral tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="emph3">type</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">PLAC</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Placer Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://myprescribingsystem.com/ordernumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">605153</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tab tid prn pain</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[2]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Patient" class="emph0 summary">Patient</span><span id="_Bundle_entry2_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP Responder's patient record for the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[3]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry3_resource_Organization" class="emph0 summary">Organization</span><span id="_Bundle_entry3_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pharmacy-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry3_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry3_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The pharmacy that dispensed the reported medication: Our Pharmacy</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Our Pharmacy</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-our-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">220 Oak St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Minneapolis</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MN</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">55008</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/></span></div>

<hr>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/Bundle-pdmp-bundle-history-result-2-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Bundle</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-bundle-history-result-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result</span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">collection</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">entry[1]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MedicationDispense" class="emph0 summary">MedicationDispense</span><span id="_Bundle_entry_resource_MedicationDispense" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">meddispense-res-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MedicationDispense_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry_resource_MedicationDispense_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Record of a dispense to August Samuels for Acetaminophen/Codeine on 2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://ourpharmacy.com/fillnumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2000353</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093015001</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Acetaminophen 300 mg / Codeine 30 mg oral tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:151b9dd1-ca84-48a4-b132-67b1bbed0194</span></span><span style="display:inline-block"><span class="emph2">identifier</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://myprescribingsystem.com/ordernumber</span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">605153</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tab tid prn pain</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[2]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:2706c68c-fb00-4f01-acb9-2547a20c5f63</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_MedicationDispense" class="emph0 summary">MedicationDispense</span><span id="_Bundle_entry2_resource_MedicationDispense" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">meddispense-res-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ri-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_MedicationDispense_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_MedicationDispense_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">A record dispense to August Thomas Samuels for alprazolam on 2023-07-08</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">extension[1]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">4</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[2]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-lme</span></span></span><span style="display:inline-block"><span class="emph2">valueDecimal</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">4</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[3]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">05</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Electronic Prescription</span></span></span></span><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://anotherPharmacy.com/fillnumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">87355201</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">433800</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">24 HR alprazolam 1 MG Extended Release Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093545106</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">24 HR alprazolam 1 MG Extended Release Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Thomas Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:d0890c3e-45dc-489c-8498-31ffb6254003</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">990717</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Another Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:47a9b899-1bee-4490-bd41-b3ca12eb441a</span></span><span style="display:inline-block"><span class="emph2">identifier</span><span style="display:inline-block"><span class="emph3">type</span></span></span><span style="display:inline-block"><span class="emph4">coding</span><span style="display:inline-block"><span class="emph5">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">PLAC</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Placer Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://myprescribingsystem.com/ordernumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">580331</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">60</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">30</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-07-08</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-07-08</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2 tablets every morning</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[3]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry3_resource_Patient" class="emph0 summary">Patient</span><span id="_Bundle_entry3_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-res-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry3_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry3_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP Responder's patient record for August Samuels, dob 1989-03-12, SSN 120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[4]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry4_resource_Patient" class="emph0 summary">Patient</span><span id="_Bundle_entry4_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-res-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ri-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry4_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry4_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP Responder's patient record for August Thomas Samuels, dob 1989-03-12, MRN 28-145-2249</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MR</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://Highview.org/EHR/patient/mrn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">28-145-2249</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">given[1]</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><span style="display:inline-block"><span class="emph2">given[2]</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Thomas</span></span></span></span><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[5]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry5_resource_Organization" class="emph0 summary">Organization</span><span id="_Bundle_entry5_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pharmacy-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry5_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry5_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Pharmacy: Our Pharmacy, NCPDP ID 999017</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Our Pharmacy</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-our-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">220 Oak St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Sheldonville</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02093</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[6]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:d0890c3e-45dc-489c-8498-31ffb6254003</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry6_resource_Organization" class="emph0 summary">Organization</span><span id="_Bundle_entry6_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pharmacy-res-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ri-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry6_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry6_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Pharmacy: Another Pharmacy, NCPDP ID 999717</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1682435585</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999717</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Another Pharmacy</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-1134</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-another-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1809 Broad St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Cumberland</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">RI</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02864</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[7]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:1ae374d2-7bb9-4298-8c54-2179410c549e</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry7_resource_DetectedIssue" class="emph0 summary">DetectedIssue</span><span id="_Bundle_entry7_resource_DetectedIssue" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">alert-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry7_resource_DetectedIssue_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry7_resource_DetectedIssue_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">An alert generated by the PDMP: 03 Doctor/pharmacy shopping alert</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">final</span></span></span><br><span style="display:inline-block"><span class="emph1">code</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXPatientAlertCatCode</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">03</span></span></span><br><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Doctor/pharmacy shopping alert</span></span></span><br><span style="display:inline-block"><span class="emph1">patient</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Thomas Samuels</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[8]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:47a9b899-1bee-4490-bd41-b3ca12eb441a</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry8_resource_MedicationRequest" class="emph0 summary">MedicationRequest</span><span id="_Bundle_entry8_resource_MedicationRequest" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorizing-prescription-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ri-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry8_resource_MedicationRequest_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry8_resource_MedicationRequest_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The authorizing prescription for prescription dispense 87355201</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">PLAC</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Placer Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://myprescribingsystem.com/ordernumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">580331</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">active</span></span></span><br><span style="display:inline-block"><span class="emph1">intent</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">order</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">433800</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">24 HR alprazolam 1 MG Extended Release Oral Tablet</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:8b0fcac7-eeb8-4558-a1f6-46f2f4293190</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Thomas Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">requester</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:77ee025a-59fc-4d1e-a189-2133a9a56c26</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Marie Fiorella, MD</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">text</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2 tablets every morning</span></span><br><span style="display:inline-block"><span class="emph1">dispenseRequest</span><span style="display:inline-block"><span class="emph2">numberOfRepeatsAllowed</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><span style="display:inline-block"><span class="emph2">quantity</span><span style="display:inline-block"><span class="emph3">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">60</span></span><span style="display:inline-block"><span class="emph3">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph2">expectedSupplyDuration</span><span style="display:inline-block"><span class="emph3">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">30</span></span><span style="display:inline-block"><span class="emph3">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">days</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://unitsofmeasure.org</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">d</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[9]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:77ee025a-59fc-4d1e-a189-2133a9a56c26</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry9_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Bundle_entry9_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ri-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry9_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry9_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP record for Marie Fiorella, MD</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">9941339100</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/NamingSystem/usdeanumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">CF1234563</span></span></span></span><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Fiorella</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Marie</span></span></span><span style="display:inline-block"><span class="emph2">suffix</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MD</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">401-333-3333</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">use</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">work</span></span><span style="display:inline-block"><span class="emph2">line</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">201 S Main St #150</span></span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Cumberland</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">RI</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02864</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[10]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:151b9dd1-ca84-48a4-b132-67b1bbed0194</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry10_resource_MedicationRequest" class="emph0 summary">MedicationRequest</span><span id="_Bundle_entry10_resource_MedicationRequest" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorizing-prescription-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry10_resource_MedicationRequest_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry10_resource_MedicationRequest_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The authorizing prescription for prescription dispense 2000353</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">PLAC</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Placer Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://myprescribingsystem.com/ordernumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">605153</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">active</span></span></span><br><span style="display:inline-block"><span class="emph1">intent</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">order</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span><span style="display:inline-block"><span class="emph2">coding</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">requester</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:23c69153-03c7-470d-9cc8-08265491d095</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Marie Fiorella, MD</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">text</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tab tid prn pain</span></span><br><span style="display:inline-block"><span class="emph1">dispenseRequest</span><span style="display:inline-block"><span class="emph2">numberOfRepeatsAllowed</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">quantity</span><span style="display:inline-block"><span class="emph3">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span><span style="display:inline-block"><span class="emph3">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph2">expectedSupplyDuration</span><span style="display:inline-block"><span class="emph3">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><span style="display:inline-block"><span class="emph3">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">days</span></span></span><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://unitsofmeasure.org</span></span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">d</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[11]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:23c69153-03c7-470d-9cc8-08265491d095</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry11_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Bundle_entry11_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry11_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry11_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP record for Marie Fiorella, MD</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">9941339100</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/NamingSystem/usdeanumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">CF6543210</span></span></span></span><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Fiorella</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Marie</span></span></span><span style="display:inline-block"><span class="emph2">suffix</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MD</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">401-333-3333</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">use</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">work</span></span><span style="display:inline-block"><span class="emph2">line</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">201 S Main St #150</span></span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Cumberland</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">RI</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02864</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/></span></div>

<hr>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/Bundle-pdmp-bundle-request-message-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Bundle</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-bundle-request-message-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message</span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">message</span></span></span><br><span style="display:inline-block"><span class="emph1">timestamp</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-10-10T15:26:30.162-07:00</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">entry[1]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/MyEHR/MessageHeader/messageheader-req-op-1</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MessageHeader" class="emph0 summary">MessageHeader</span><span id="_Bundle_entry_resource_MessageHeader" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">messageheader-req-op-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-messageheader-request</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MessageHeader_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry_resource_MessageHeader_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Event = the canonical URL for the pdmp-history operation. Focus is the Parameters resource holding request inputs.</span></span></span><br><span style="display:inline-block"><span class="emph1">eventCoding</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:ietf:rfc:3986</span></span><span style="display:inline-block"><span class="emph2">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history</span></span></span><br><span style="display:inline-block"><span class="emph1">source</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MyPDMPServer</span></span><span style="display:inline-block"><span class="emph2">endpoint</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://pdmpserver.example.org/api</span></span></span><br><span style="display:inline-block"><span class="emph1">focus</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Parameters/parameters-req-op-1</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[2]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/MyEHR/Parameters/parameters-req-op-1</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters" class="emph0 summary">Parameters</span><span id="_Bundle_entry2_resource_Parameters" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">parameters-req-op-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request</span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span style="display:inline-block"><span class="emph3">Patient</span></span></span><span style="display:inline-block"><span class="emph4">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-op-1</span></span></span><span style="display:inline-block"><span class="emph4">meta</span><span style="display:inline-block"><span class="emph5">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><span style="display:inline-block"><span class="emph4">text</span><span style="display:inline-block"><span class="emph5">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph4">identifier</span><span style="display:inline-block"><span class="emph5">type</span></span></span><span style="display:inline-block"><span class="leastEmph">coding</span><span style="display:inline-block"><span class="leastEmph">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="leastEmph">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><span style="display:inline-block"><span class="leastEmph">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Social Security number</span></span></span><br><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph5">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph4">name</span><span style="display:inline-block"><span class="emph5">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph5">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph4">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><span style="display:inline-block"><span class="emph4">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><span style="display:inline-block"><span class="emph4">address</span><span style="display:inline-block"><span class="emph5">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph5">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span><br><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span style="display:inline-block"><span class="emph3">Practitioner</span></span></span><span style="display:inline-block"><span class="emph4">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-req-op-1</span></span></span><span style="display:inline-block"><span class="emph4">meta</span><span style="display:inline-block"><span class="emph5">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner</span></span><span style="display:inline-block"><span class="emph4">text</span><span style="display:inline-block"><span class="emph5">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter2_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter2_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster MD</span></span></span><br><span style="display:inline-block"><span class="emph4">identifier</span><span style="display:inline-block"><span class="emph5">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph5">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1928340565</span></span></span><br><span style="display:inline-block"><span class="emph4">name</span><span style="display:inline-block"><span class="emph5">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Amster</span></span><span style="display:inline-block"><span class="emph5">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Adam</span></span></span><br><span style="display:inline-block"><span class="emph4">address</span><span style="display:inline-block"><span class="emph5">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><br><span style="display:inline-block"><span class="emph1">parameter[3]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-role</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span style="display:inline-block"><span class="emph3">PractitionerRole</span></span></span><span style="display:inline-block"><span class="emph4">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitionerrole-req-op-1</span></span></span><span style="display:inline-block"><span class="emph4">meta</span><span style="display:inline-block"><span class="emph5">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole</span></span><span style="display:inline-block"><span class="emph4">text</span><span style="display:inline-block"><span class="emph5">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter3_resource_PractitionerRole_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter3_resource_PractitionerRole_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster, Internal Medicine, Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph4">practitioner</span><span style="display:inline-block"><span class="emph5">identifier</span></span></span><span style="display:inline-block"><span class="leastEmph">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span></span><span style="display:inline-block"><span class="leastEmph">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">9851234689</span></span></span><br><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Adam Amster</span></span></span><br><span style="display:inline-block"><span class="emph4">organization</span><span style="display:inline-block"><span class="emph5">identifier</span></span></span><span style="display:inline-block"><span class="leastEmph">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span></span><span style="display:inline-block"><span class="leastEmph">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1928340565</span></span></span><br><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Highview Clinic</span></span></span><span class="indent2"><span style="display:inline-block"><span class="emph4">telecom[1]</span><span style="display:inline-block"><span class="emph5">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph5">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">951-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph4">telecom[2]</span><span style="display:inline-block"><span class="emph5">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph5">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">aamster-highview-clinic@exampleemail.org</span></span></span></span><span style="display:inline-block"><span class="emph1">parameter[4]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-organization</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span style="display:inline-block"><span class="emph3">Organization</span></span></span><span style="display:inline-block"><span class="emph4">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">organization-req-op-1</span></span></span><span style="display:inline-block"><span class="emph4">meta</span><span style="display:inline-block"><span class="emph5">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization</span></span><span style="display:inline-block"><span class="emph4">text</span><span style="display:inline-block"><span class="emph5">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter4_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter4_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph4">identifier</span><span style="display:inline-block"><span class="emph5">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph5">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">9851234689</span></span></span><br><span style="display:inline-block"><span class="emph4">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><span style="display:inline-block"><span class="emph4">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Highview Clinic</span></span></span><span style="display:inline-block"><span class="emph4">address</span><span style="display:inline-block"><span class="emph5">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><br><span style="display:inline-block"><span class="emph1">parameter[5]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-only</span></span><span style="display:inline-block"><span class="emph2">valueBoolean</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">false</span></span></span></span></span></span><br/></span></span></div>

<hr>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/Bundle-pdmp-bundle-response-message-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Bundle</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-bundle-response-message-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message</span></span><br><span style="display:inline-block"><span class="emph1">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">message</span></span></span><br><span style="display:inline-block"><span class="emph1">timestamp</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2020-03-11T08:10:17-05:00</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">entry[1]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:b5000d0c-fed9-4746-ac26-b5ce0111a2b7</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MessageHeader" class="emph0 summary">MessageHeader</span><span id="_Bundle_entry_resource_MessageHeader" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">b5000d0c-fed9-4746-ac26-b5ce0111a2b7</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-messageheader-response</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry_resource_MessageHeader_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry_resource_MessageHeader_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Event = the canonical URL for the pdmp-history operation. Focus is the Parameters resource holding response content.</span></span></span><br><span style="display:inline-block"><span class="emph1">eventCoding</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:ietf:rfc:3986</span></span><span style="display:inline-block"><span class="emph2">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/OperationDefinition/pdmp-history</span></span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">pdmp-history</span></span></span><br><span style="display:inline-block"><span class="emph1">source</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MyPDMPServer</span></span><span style="display:inline-block"><span class="emph2">endpoint</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">https://pdmp1.testpdmp.org/</span></span></span><br><span style="display:inline-block"><span class="emph1">response</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">messageheader-req-op-1</span></span><span style="display:inline-block"><span class="emph2">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">ok</span></span></span><br><span style="display:inline-block"><span class="emph1">focus</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:aecbb129-9a73-4b59-9d66-ff5cdb3f3164</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">entry[2]</span><span style="display:inline-block"><span class="emph2">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:aecbb129-9a73-4b59-9d66-ff5cdb3f3164</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters" class="emph0 summary">Parameters</span><span id="_Bundle_entry2_resource_Parameters" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">aecbb129-9a73-4b59-9d66-ff5cdb3f3164</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response</span></span><br><span style="display:inline-block"><span class="emph1">parameter</span></span><span class="indent1"><span style="display:inline-block"><span class="emph2">extension[1]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-header-timestamp-extension</span></span></span><span style="display:inline-block"><span class="emph3">valueDateTime</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-12-01</span></span></span><br><span style="display:inline-block"><span class="emph2">extension[2]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension</span></span></span><span style="display:inline-block"><span class="emph3">valuePeriod</span><span style="display:inline-block"><span class="emph4">start</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2021-12-02</span></span><span style="display:inline-block"><span class="emph4">end</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-12-01</span></span></span></span><span style="display:inline-block"><span class="emph2">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-data</span></span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span style="display:inline-block"><span class="emph3">Bundle</span></span></span><span style="display:inline-block"><span class="emph4">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">bundle-history-data-in-msg-1</span></span></span><span style="display:inline-block"><span class="emph4">meta</span><span style="display:inline-block"><span class="emph5">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result</span></span><span style="display:inline-block"><span class="emph4">type</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">collection</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph4">entry[1]</span><span style="display:inline-block"><span class="leastEmph">@id</span>: &nbsp;<span class="valueEmph">meddispense-res-1</span></span></span><span style="display:inline-block"><span class="emph5">fullUrl</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:9ce2a97b-5cab-4986-814f-4734016e6084</span></span></span><br><span style="display:inline-block"><span class="emph5">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense" class="emph0 summary">MedicationDispense</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense" class="detail in"><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry_resource_MedicationDispense_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">A record of a medication that was dispensed to the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent2"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093015001</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Acetaminophen 300 mg / Codeine 30 mg oral tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="emph3">type</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://mypharmacysystem.com/prescriptionnumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">065046045550</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tab tid prn pain</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph4">entry[2]</span><span style="display:inline-block"><span class="emph5">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><br><span style="display:inline-block"><span class="emph5">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry2_resource_Patient" class="emph0 summary">Patient</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry2_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry2_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry2_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The PDMP Responder's patient record for the patient identified in the PDMP request: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">John</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">202 2nd Avenue</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">North Amherst</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph4">entry[3]</span><span style="display:inline-block"><span class="emph5">fullUrl</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span><br><span style="display:inline-block"><span class="emph5">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry3_resource_Organization" class="emph0 summary">Organization</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry3_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pharmacy-res-1-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry3_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Bundle_entry2_resource_Parameters_parameter_resource_Bundle_entry3_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">The pharmacy that dispensed the reported medication: Our Pharmacy</span></span></span><span class="indent2"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Our Pharmacy</span></span></span><span class="indent2"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-our-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">220 Oak St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Minneapolis</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MN</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">55008</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></span></span></span><br/></span></span></span><br/></span></span></div>

<hr>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/capability-statements.md

This section identifies the CapabilityStatements defined for this implementation guide. The section outlines conformance requirements for each of the PDMP FHIR IG actors which includes the specific profiles, operations and security mechanisms that need to be supported.

**Notes**: 
* The individual profiles contained in this guide identify specific structural constraints, terminology bindings and invariants.
* This section is in-process and will be updated based on review and input from PDMP stakeholders

#### Conformance requirements for the PDMP Responder

The section describes the expected capabilities of the PDMP Responder actor which is responsible for providing responses to the requests submitted by PDMP Requester applications.

##### Behavior

The PDMP Responder **SHALL**:

* Support the PDMP Patient, PDMP MedicationDispense and PDMP Pharmacy Organization resource profiles.
* Support the US Core Practitioner, US Core PractitionerRole and US Core Organization (for organizations other than pharmacies) profiles.
* Support the pdmp-history operation and associated Parameters and Bundle profiles.
* Implement the RESTful behavior according to the [FHIR specification](https://www.hl7.org/fhir/http.html).
	* which includes returning the following response classes:
		* (Status 200): successful operation
		* (Status 400): invalid parameter
		* (Status 401/4xx): unauthorized request
		* (Status 403): insufficient scope
		* (Status 404): unknown resource
		* (Status 410): deleted resource
* Support JSON resource formats for all  interactions.
* Declare a CapabilityStatement identifying the list of profiles, operations, and search parameters supported.

The PDMP Responder **SHOULD**:

* Support the following US Core and PDMP resource profiles:
	* US Core Medication
	* PDMP MedicationAdministration

* Support xml resource formats for all PDMP interactions.
* Identify the US Core profile(s) and PDMP profiles supported as part of the FHIR meta.profile attribute for each instance.

The PDMP Responder MAY:

* Support submission of the pdmp-history operation using FHIR Messaging, including support for the associated MessageDefinition and guidance.


##### Security:

* The PDMP Responder **SHOULD** support the SMART Backend Services Authorization Guide for verifying authentication and providing authorization to PDMP Requesters.

* The PDMP Responder **MAY** support the HTTP Header parameter X-Request-ID for request correlation between the PDMP Requester and PDMP Responder.


#### Conformance requirements for the PDMP Requester

The section describes the expected capabilities of the PDMP Requester actor which is responsible for providing responses to the queries submitted by the PDMP Requester applications.


##### Behavior

The PDMP Requester **SHALL**:

* Support the PDMP Patient, PDMP MedicationDispense and PDMP Pharmacy Organization resource profiles.
* Support the US Core Practitioner, US Core PractitionerRole and US Core Organization (for organizations other than pharmacies) profiles.
* Support the pdmp-history operation and associated Parameters and Bundle profiles.
* Consume the RESTful responses according to the FHIR specification.
	* which includes returning the following response classes:
		* (Status 200): successful operation
		* (Status 400): invalid parameter
		* (Status 401/4xx): unauthorized request
		* (Status 403): insufficient scope
		* (Status 404): unknown resource
		* (Status 410): deleted resource.
* Support JSON resource formats for all  interactions.

The PDMP Requester **SHOULD**:

* Support the following US Core and PDMP resource profiles:
	* US Core Medication
	* PDMP MedicationAdministration

* Support xml resource formats for all  interactions.



##### Security:

* The PDMP Requester **SHOULD** support the SMART Backend Services Authorization Guide applicable to clients.

* The PDMP Requester **MAY** add the HTTP Header parameter X-Request-ID as part of the Search request for request correlation between the PDMP Requester and PDMP Responder.



<br>





---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/cds-smart.md

This section describes approaches for using FHIR's CDS Hooks and SMART App Launch standards to retrieve a patient's information from a PDMP Responder from within the provider's system, as an alternative to the operation-based approached described [here](submission-options.html).


<p></p>

### Overview - Using CDS Hooks and SMART App Launch for PDMP

FHIR's CDS Hooks and SMART App Launch standards enable information exchange and user interaction with external systems to be integrated into a provider system's workflows. 
- [CDS Hooks](https://cds-hooks.hl7.org/2.0/) focuses on triggering interactions with external CDS Servers at appropriate points in a user's process, such as during drug ordering. At a high level...
  - the provider system sends the CDS Server information about the patient and other clinical context at an appropriate step in the provider's workflow (e.g., when ordering a procedure or medication)
  - the CDS Server evaluates the submitted information and returns alerts, suggestions, a link to a SMART app for use by the provider, and/or other decision-support information
  - the provider system presents the information to the user and enables them to launch an app if received in the response.

<p></p>

- [SMART App Launch](https://www.hl7.org/fhir/smart-app-launch/) enables a provider system to launch an externally-hosted SMART app within a user's workflow, authorizing data exchange between the provider system and the external app and allowing the user to view and interact with the app's interface.
  - The provider system launches the SMART app within its user interface, enabling the user to interact with the app without first navigating to it or completing a separate sign-on
  - The launch can be in the context of a CDS Hooks interaction (above), based on rules maintained by the provider system, or as the result of a manual user action (e.g., clicking a '"launch app" button on the patient view page)
  - The SMART App Launch protocol takes care of authorizing the external app and appropriately limiting its data access rights without any user intervention.

<p></p>

When applied to PDMP...
- **CDS Hooks can alert the provider to check a patient's PDMP history** in situations where it may not be apparent that the patient's use of opioids may be pertinent, for example when the provider is ordering a colonoscopy (as long-term opioid use decreases gastric motility). This can provide value in workflows where checking PDMP history is not mandated.
- **SMART App Launch supports mandated use** of PDMP information during drug ordering or dispensing by rendering the PDMP history in a standard way within the provider's workflow.

#### Guidance for using CDS Hooks and SMART App Launch for PDMP
This guide defers to the CDS Hooks and SMART App Launch implementation guides for details on their implementation. However, it provides the following direction for using those standards to retrieve PDMP history.

<p></p>

**Use scenarios for CDS Hooks versus SMART App Launch.** 

Implementers:
- **MAY** use CDS Hooks for decision support alerts associated with non-drug orders, to inform the provider of a situation where opioid use might be an issue and checking PDMP is recommended.
- **SHOULD NOT** use CDS Hooks as a mechanism to support a provider requirement to always check PDMP
- **SHALL NOT** return discrete patient PDMP history detail in a CDS Hooks response (instead, the CDS Server **SHOULD** return a URL or SMART app link card to access the information)
- **SHOULD** use  SMART App Launch alone (not triggered by CDS Hooks) for situations where the provider must view a patient's PDMP history.

**CDS Hooks workflow event options**

- The CDS Hooks specification defines event triggers, called "hooks", reflecting workflow points where a request to a CDS Server can be called. In order to provide early notification that PDMP information may be useful to the provider, hooks that occur earlier in the decision-making process, such as...
  - order-select which fires at the start of the ordering process 
  - patient-view which occurs when the provider first views the patient's chart in an encounter

... may be preferable to those that happen after the provider has made determinations.

However, if receiving finalized order details in the CDS request would better enable the PDMP's CDS service to respond, use of the order-sign hook may be more appropriate.

<p></p>

**Providing context information to a PDMP Responder's CDS Server or SMART App**

The PDMP Responder must receive the same patient and authorized provider information when called using CDS Hooks or SMART App Launch as when the provider system submits a request using the pdmp-history operation--to support its authorization and processing requirements.

When submitting a CDS Hooks request or launching an SMART app, the provider system **MAY** include the [request Parameters resource](StructureDefinition-pdmp-parameters-request.html) to provide needed context:
- as prefetch data in a CDS Hooks request
- in the appContext launch parameter in a SMART app launch.



<p></p>
<p></p>


---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/changes.md

### STU 1

This is the initial, ballot version of the US Prescription Drug Monitoring Program (PDMP) FHIR Implementation Guide.

This IG consists primarily of new content that is being balloted for the first time. However, it includes some content from a previous work that was balloted but not published, the US Meds FHIR IG, which has been updated and incorporated here.



---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/CodeSystem-temporary-pdmp-response-status-intro.md


<blockquote class="fm_ex-alert fm_ex-alert--info">
<p>
 <b>Note regarding this temporary code system.</b> The authors believe the single value of this code system is unique to the PDMP use case this implementation guide supports. We expect that it may either be proposed as an addition to a related <a href="https://www.pdmpassist.org/PMIX/Standards">PMIX (Prescription Monitoring Information Exchange)</a> code system or maintained within this IG.
</p>
</blockquote>

<p></p>


---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/conformance.md

### Handling Missing Data

#### In Must Support Elements

**Unknown Reason.** If the PDMP Responder system does not have data for a *Must Support* data element, and the reason for absence is unknown:

- The PDMP Responder system responding to a query SHALL NOT include the element in the resource. 

- The PDMP Requester system SHALL interpret missing data elements within resource instances as data not present in the PDMP Responder system.

**Known Reason.** In situations where information on a particular data element is missing and the PDMP Responder knows the precise reason for the absence of data: 

- The PDMP Responder system SHALL send the reason for the missing information using values (such as nullFlavors) from the value set where they exist or using the dataAbsentReason extension. *(See next section)*

- The PDMP Requester system SHALL be able to process resource instances containing data elements asserting missing information.

#### In Required Elements

If the source system does not have data for a *required* data element (in other words, where the minimum cardinality is greater than 0), participants must follow the rules below.

**Non-Coded Data Elements**. Use the FHIR [DataAbsentReason Extension](http://hl7.org/fhir/R4/extension-data-absent-reason.html) with the code, unknown, which means *the value is expected to exist but is not known*.

**Coded Data Elements** 

- ***Example, preferred, or extensible* binding strengths**
  
  - If the source systems has text but no coded data, only the text element is used.
  - If there is neither text nor coded data, use the appropriate “unknown” concept code from the value set if available
  - If the value set does not have the appropriate “unknown” concept code, use “unknown” from the  [DataAbsentReason Code System](http://hl7.org/fhir/R4/codesystem-data-absent-reason.html)
  
- ***Required* binding strength** 

    - Use the appropriate “unknown” concept code from the value set, if available. 
    - In cases where the PDMP Responder does not know the correct code, and the value set lacks an appropriate "unknown" code, it SHALL respond to a query for the resource with an OperationOutcome accompanied by a 404 HTTP error code. 
    
    For example, the following status elements do not contain an “unknown” concept code--and so, the element cannot be populated as unknown:
    
    - AllergyIntolerance.clinicalStatus
    - Condition.clinicalStatus
    - DocumentReference.status

<p></p>



---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/index.md

### Introduction

Prescription Drug Monitoring Programs (PDMPs) are state-based databases that provide prescribers and pharmacists with timely information about controlled substance, and in some states non-controlled substance, dispensing, administration and patient behaviors. Use of information stored in PDMPs during care delivery helps avoid drug misuse and diversion and can provide improved patient care and safety.

To reduce opioid misuse, reduce drug diversion, and for other purposes, states have implemented policies mandating providers to reference PDMPs to obtain a patient's PDMP history before prescribing or dispensing certain medications. The Prescription Drug Monitoring Program (PDMP) FHIR Implementation Guide defines a method for providers to request and retrieve patient PDMP information using the HL7 FHIR standard. 

For general background on state PDMP programs, see the Centers for Disease Control and Prevention [PDMP - What States Need to Know](https://www.cdc.gov/overdose-prevention/php/interventions/prescription-drug-monitoring-programs.html).
 
#### PDMP Ecosystem

The Figure 1, below, shows an overview of the PDMP reporting ecosystem.  This diagram was adapted from Prescription Drug Monitoring Program Training and Technical Assistance Center ([PDMP TTAC](https://www.pdmpassist.org)).  PDMP TTAC is an organization of PDMPs, federal partners and other stakeholders which has establish technical standards and provides other services, support, resources, & strategies to further the efforts and effectiveness of PDMPs.

In this figure, 
* a user can interact with a State PDMP System directly (i.e., a web portal) or through a Health care or pharmacy entity (e.g., EHR, pharmacy system)
* Health care or pharmacy entity can interact with a State PDMP System directly or via an Integration Facilitator
* State PDMP Systems exchange information with each other through an inter-PDMP Hub
* ovals have been added to the diagram to identify PDMP Requestors (yellow) and PDMP Responders (green)

Outside of a user accessing a State PDMP System via a web portal, the interactions in Figure 1 can support discrete data exchange. 

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: An overview of the PDMP ecosystem</strong> adapted from PDMP TTAC</figcaption>
  <p>
  <img src="pdmp-ecosystem-small.png" style="float:none">  
  </p>
</figure>
</div>
<p></p>

#### Adding FHIR to the PDMP Ecosystem

This Implementation Guide provides another method for Users (or Users + Health care or Pharmacy entities) to request and receive PDMP history reports.  Systems may elect to follow the method in this Implementation Guide to leverage existing FHIR Infrastructure, particularly when discrete PDMP data is allowed to be stored or incorporated locally.

### Scope

For this Implementation Guide, we limit and abstract the ecosystem in Figure 1 to focus on PDMP request and PDMP response messages exchanged between the PDMP Requester and the PDMP Responder as depicted in Figure 2. 

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 2:  Abstract Model and Actors</strong></figcaption>
  <p>
  <img src="pdmp-overview-scope.png" style="float:none">  
  </p>
</figure>
</div>
<p></p>

To support varying regulatory requirements, PDMP response supports both the PDMP history as discrete data and a URL pointing to the PDMP history rendered (fully-formatted) to regulatory requirements.

This guide provides both RESTful operation and messaging submission methods to match implementers' particular environments as described [here](submission-options.html).

This Implementation Guide is intended to be used in the United States.  It reflects US pharmacy processes and conventions.

### Out of Scope
**Hubs and Integration Facilitators**
The inter-PDMP hubs and Integration Facilitators in Figure 1 may be associated with either the PDMP Requestor or the PDMP Responder in Figure 2, depending upon the implementation.  They are not specifically addressed as separate entities in this Implementation Guide.

**Other interactions** between PDMP ecosystem parties, including parties not depicted in Figure 1, are ***out of scope*** for this Implementation Guide.  These exchanges include, but are not limited to:
- data exchange between PDMPs
- prescription dispensations reported by the pharmacy to the PDMP
- electronic prescriptions sent from the prescriber to the pharmacy


**Patient Matching:** This Implementation Guide does not specify patient matching requirements.  States may require requesters to include certain patient information to enable or facilitate patient matching.  This guide supports that patient information, however, the specific patient matching criteria requirements for each PDMP are ***out of scope***.

**PDMP Logging Requirements:**  This Implementation Guide does not address PDMP logging requirements since the requirements vary between jurisdictions and are not typically messaged (i.e., not communicated back to the PDMP).  

### Actors and Definitions

- **PDMP Requester:** A system that sends PDMP requests to PDMP Responders and receives PDMP responses in return. The system may include both a local system (e.g., EHR, Pharmacy System) and associated intermediaries (e.g., message routing and other value-added service providers). This system can be thought of as the client in a client-server interaction.  

- **PDMP Responder:** A system that receives PDMP requests from PDMP Requesters and responds with PDMP responses. The system may include, in addition to the state PDMP, other partner systems (e.g., hubs).  This system can be thought of as the server in a client-server interaction.

- **PDMP request:** A message, sent by a PDMP requester on behalf of a user, which contains all necessary and required information such that a PDMP Responder can, if appropriate, respond with a PDMP response.  This includes, but is not limited to, user identification and authorization and patient identification.

- **PDMP response:** A message, sent by a PDMP Responder that particular PDMP Requester that submitted a specific  PDMP request.  The message may include any combination of: the PDMP history in discrete data, a URL to a formatted PDMP history report, additional alerts and message, error messages, and other relevant information.

- **PDMP history:** The content of a PDMP response including pertinent patient, pharmacy, prescriber, and dispensation records. The PDMP Responder may also include alerts, administration records, and other information as appropriate or as required by policy or regulation.


### Content and Organization

The guide is organized into the following sections:

- [Use Case Overview](use-case.html) describes the PDMP use case, participants and environment variations.
- [Operation Submission Options](submission-options.html) details PDMP request submission and response processing using a FHIR operation.
- [CDS Hooks and SMART App Options](cds-smart.html) describes use of these FHIR mechanisms to integrate retrieval and view of PDMP information into the provider's workflow.
- [Security](security.html) provides information for implementers related to security and privacy.
- [Conformance Expectations](conformance.html) defines use of Must Support elements and also describes conventions for situations where information is not available.
- [Mappings to Related Standards](mappings.html) describes how FHIR content relates to other standards use in the larger PDMP ecosystem.
- [Applicable US Core Profiles](us-core-profiles.html) defines expectations for the use of US Core profiles in the guide's searches.
- [Profiles, Terminology and Examples](artifacts.html) lists the FHIR profiles and other artifacts defined in this IG.

### FHIR Basics 

For those new to FHIR, the material below describes basic FHIR principles and gives guidance for reading FHIR specifications.

- [FHIR overview](http://hl7.org/fhir/R4/overview.html)
- [Developer’s introduction](http://hl7.org/fhir/R4/overview-dev.html) (or [Clinical introduction](http://hl7.org/fhir/R4/overview-clinical.html))
- [FHIR data types](http://hl7.org/fhir/R4/datatypes.html)
- [Using codes](http://hl7.org/fhir/R4/terminologies.html)
- [References between resources](http://hl7.org/fhir/R4/references.html)
- [How to read resource & profile definitions](http://hl7.org/fhir/R4/formats.html)
- [Base resource](http://hl7.org/fhir/R4/resource.html)

### Sponsoring HL7 Workgroup  
[Pharmacy](http://www.hl7.org/Special/committees/medication/index.cfm)

### Authors

<table class="grid">
    <tbody>
	  <tr>
		<td colspan="2">HL7 Pharmacy Workgroup</td>
  	  </tr>
	  <tr>
		<td>Frank McKinney</td>
		<td><a href="mailto:frank.mckinney@pocp.com">frank.mckinney@pocp.com</a></td>
	  </tr>
	  <tr>
		<td>Scott Robertson</td>
		<td><a href="mailto:scott.robertson@pocp.com">scott.robertson@pocp.com</a></td>
	  </tr>
	  <tr>
		<td colspan="2">Brett Marquard, Nagesh Bashyam, Melva Peters and Eric Haas authored the predecessor to this guide, the US Meds FHIR IG. Certain content from that work has been updated and included here.</td>
	  </tr>
	</tbody>
  </table>

### Stakeholders
The authors acknowledge and thank our stakeholders for their essential contribution.  A limited number of those stakeholders are listed here:
<table class="grid">
    <tbody>
		<tr><td> Carly Crownover </td><td> Database Administrator </td><td> CSMD </td></tr>
		<tr><td> Craig Wetzelberger </td><td> Director of Software Engineering </td><td> Bamboo Health </td></tr>
		<tr><td> Dara Zarley, PharmD </td><td> Grant & Project Analyst </td><td> Nevada State Board of Pharmacy </td></tr>
		<tr><td> Don Vogt </td><td>  </td><td> Prescription Drug Monitoring Program Training and Technical Assistance Center (PDMP TTAC) </td></tr>
		<tr><td> Fan Xiong, MPH </td><td> Senior Epidemiologist </td><td> Washington State Department of Health </td></tr>
		<tr><td> Fred Aabedi </td><td> CTO </td><td> LogiCoy Inc </td></tr>
		<tr><td> Jean Hall </td><td> Program Director, PDMP Solutions </td><td> LogiCoy Inc. </td></tr>
		<tr><td> Jim Giglio </td><td>  </td><td> Prescription Drug Monitoring Program Training and Technical Assistance Center (PDMP TTAC) </td></tr>
		<tr><td> Joseph Fibich, PharmD </td><td> Director, Pharmacy Services Program </td><td> CyncHealth </td></tr>
		<tr><td> Keller Martin </td><td> Staff Solutions Architect </td><td> Bamboo Health </td></tr>
		<tr><td> Kevin Borcher </td><td>  </td><td> Prescription Drug Monitoring Program Training and Technical Assistance Center (PDMP TTAC) </td></tr>
		<tr><td> Mitchell Barnett, PharmD, MS </td><td> Associate PMP Director </td><td> Iowa PDMP </td></tr>
		<tr><td> Nerissa Montgomery </td><td>  </td><td> Louisiana Board of Pharmacy </td></tr>
		<tr><td> Pat Knue </td><td>  </td><td> Prescription Drug Monitoring Program Training and Technical Assistance Center (PDMP TTAC) </td></tr>
		<tr><td> Rachel Buelow </td><td> </td><td>Surescripts </td></tr>
		<tr><td> Reshmi Ravindranath </td><td> PMP Administrator </td><td> Louisiana Board of Pharmacy </td></tr>
		<tr><td> Robert May </td><td> Program Director </td><td> IJIS Institute</td></tr>
		<tr><td> Ronald Larsen </td><td> PDMP Consultant </td><td> IJIS Institute - RxCheck </td></tr>
		<tr><td> Siri Chadalavada </td><td> </td><td> Biztek Innovations </td></tr>
		<tr><td> Wanda Govan-Jenkins, DNP, MBA, MS, RN </td><td> ONC Project Officer Lead </td><td> Office of the National Coordinator for Health Information Technology </td></tr>
		<tr><td> Zohaib Salim </td><td> Senior Product Manager </td><td> Bamboo Health </td></tr>
	</tbody>
  </table>

### Dependencies
{% include dependency-table.xhtml %}

### Cross Version Analysis
{% include cross-version-analysis.xhtml %}

### Global Profiles
{% include globals-table.xhtml %}

### IP Statements
- PIMX references are available through the Prescription Drug Monitoring Program Training and Technical Assistance Center (PDMP TTAC) [https://www.pdmpassist.org/PMIX/Standards](https://www.pdmpassist.org/PMIX/Standards). 
- NCPDP references are copyright National Council for Prescription Drug Programs (NCPDP) [https://standards.ncpdp.org](https://standards.ncpdp.org/)
- ASAP references are copyright American Society for Automation in Pharmacy (ASAP) [https://asapnet.org/publications/](https://asapnet.org/publications/)

{% include ip-statements.xhtml %}



---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/mappings.md

### Other Data Standards Supporting the PDMP Ecosystem

The broad PDMP ecosystem - from writing a prescription to reporting PDMP history - employs a combination of NCPDP, ASAP and PMIX/NIEM standards, as illustrated below:

<div>
<figure class="figure">
<figcaption class="figure-caption"><strong>Figure 1: Standards supporting the PDMP ecosystem</strong></figcaption>
  <p>
  <img src="pdmp-overview-standards.png" style="float:none">  
  </p>
</figure>
</div>

In Figure 1, above, 
* prescribers write a prescription and forward it electronically to the pharmacy using NCPDP SCRIPT.
* upon dispensation or sale of the prescription, the pharmacy reports the dispensation to the appropriate PDMP system(s) using ASAP Standard for Prescription Drug Monitoring Programs (ASAP Reporting)
* PDMP systems exchange information between each other using PMIX/NIEM
* in contrast, getting the PDMP information to providers (prescribers and pharmacists) does not utilize a single, consistent, methodology.  Current implementations include
  * all PDMP provide a web portal for provider access
  * some PDMPs support NCPDP SCRIPT RxHistory for PDMP report request/response
  * some PDMPs support ASAP Web Services for PDMP report request/response
  * some PDMPs have other proprietary integration options for PDMP report request/response

In introducing FHIR as a methodology in connecting providers (prescribers and pharmacists) to the PDMPs, the Implementation Guide stakeholders agreed that mappings between FHIR, PMIX/NIEM, and NCPDP SCRIPT RxHistory may be beneficial for users of this Implementation Guide.

### Mapping

Mapping from each FHIR resource in this Implementation Guide to PMIX/NIEM and NCPDP SCRIPT RxHistory is included in the resource profile pages. On the resource page (e.g., [PDMP MedicationDispense](StructureDefinition-pdmp-medicationdispense.html)), click on the 'Mappings' tab and scroll to find the mapping of interest.  The following tables consolidate the mappings for request and response scenarios by standard.

Resources which are not profiled in this Implementation Guide (e.g, US Core Prescriber) do not include mappings to PMIX/NIEM or NCPDP SCRIPT RxHistory. Mapping to these resources is included below, but is not included in the resource definitions (e.g., the mapping tab for US Core Prescriber does not include mapping to PMIX/NIEM)

Fully qualified element names in each standard can be very long.  To reduce the text in each cell, the tables below provide "context" and "XPath" or "FHIRPath" for the mapped data elements.  The context is a simplified representation of the XPath/FHIRPath referring to the major nodes in the XML Schema, or PDMP FHIR Bundles defined in this Implementation Guide.  The XPath/FHIRPath are prefixes to the XPath or FHIRPath for each element in the table.


#### NCPDP to FHIR Mapping for Request

This section includes a representative field mapping from NCPDP SCRIPT 2017071 RxHistoryRequest to the FHIR elements in this Implementation Guide.

<style type="text/css">.ritz .waffle a { color: inherit; }.ritz .waffle .maptable17{border-bottom:1px SOLID #000000;border-right:1px SOLID #000000;background-color:#ffffff;text-align:left;color:#000000;font-family:'Calibri',Arial;font-size:11pt;vertical-align:middle;white-space:normal;overflow:hidden;word-wrap:break-word;direction:ltr;padding:0px 3px 0px 3px;}.ritz .waffle .maptable11{border-bottom:1px SOLID #000000;border-right:1px SOLID #000000;background-color:#4f81bd;text-align:center;font-weight:bold;color:#ffffff;font-family:'Calibri',Arial;font-size:12pt;vertical-align:middle;white-space:normal;overflow:hidden;word-wrap:break-word;direction:ltr;padding:0px 3px 0px 3px;}.ritz .waffle .maptable10{border-bottom:1px SOLID #000000;border-right:1px SOLID #000000;background-color:#4f81bd;text-align:left;color:#000000;font-family:'Calibri',Arial;font-size:12pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:0px 3px 0px 3px;}.ritz .waffle .maptable16{border-bottom:1px SOLID #000000;border-right:1px SOLID #000000;background-color:#c6d9f0;text-align:center;color:#000000;font-family:'Calibri',Arial;font-size:12pt;vertical-align:middle;white-space:normal;overflow:hidden;word-wrap:break-word;direction:ltr;padding:0px 3px 0px 3px;}</style>
<div class="ritz grid-container" dir="ltr">
  <table class="waffle" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td class="maptable11">Element Group</td>
        <td class="maptable11">Element Name</td>
        <td class="maptable11">NCPDP Data Element</td>
        <td class="maptable11">FHIR Data Element</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="5">Request</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message <br/> XPath:<i>/Message</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message<br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Request ID</td>
        <td class="maptable17">Header/MessageID</td>
        <td class="maptable17">entry.resource.where(resourceType='MessageHeader').id</td>
      </tr>
      <tr>
        <td class="maptable17">Request date/time</td>
        <td class="maptable17">Header/SentTime</td>
        <td class="maptable17">timestamp</td>
      </tr>
      <tr>
        <td class="maptable17">Start Date</td>
        <td class="maptable17">Body/RxHistoryRequest/RequestedDates/StartDate</td>
        <td class="maptable17"><i>not supported</i></td>
      </tr>
      <tr>
        <td class="maptable17">End Date</td>
        <td class="maptable17">Body/RxHistoryRequest/RequestedDates/EndDate;</td>
        <td class="maptable17"><i>not supported</i></td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="4">Patient</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Rx History Request / Patient <br/> XPath: <i>/Message/Body/RxHistoryRequest/Patient/HumanPatient</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message / pdmp-parameters-request / us-core-practitioner <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message').entry.resource.where(resourceType='Parameters').parameter.resource.where(resourceType='Patient')</i></td>
      </tr>
      <tr>
        <td class="maptable17">First Name</td>
        <td class="maptable17">Name/FirstName</td>
        <td class="maptable17">name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">Name/LastName</td>
        <td class="maptable17">name.family</td>
      </tr>
      <tr>
        <td class="maptable17">Date of Birth</td>
        <td class="maptable17">DateOfBirth</td>
        <td class="maptable17">birthdate</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="4">Requester</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Rx History Request / Prescriber <br/> XPath: <i>/Message/Body/RxHistoryRequest/Prescriber/NonVeterinarian</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message / pdmp-parameters-request / us-core-practitioner <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message').entry.resource.where(resourceType='Parameters').parameter.resource.where(resourceType='Practitioner')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Name</td>
        <td class="maptable17">Name</td>
        <td class="maptable17">name</td>
      </tr>
        <td class="maptable17">NPI</td>
        <td class="maptable17">Identification/NPI</td>
        <td class="maptable17">identifier.where(system='http://hl7.org/fhir/sid/us-npi').value</td>
      </tr>
      <tr>
        <td class="maptable17">DEA</td>
        <td class="maptable17">Identification/DEANumber</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/NamingSystem/usdeanumber)'.value</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="6">Requesting Facility</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Rx History Request / Facility <br/> XPath: <i>/Message/Body/RxHistoryRequest</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message / pdmp-parameters-request / us-core-organization <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message').entry.resource.where(resourceType='Parameters').parameter.resource.where(resourceType='Organization')</i></td>
      </tr>
      <tr>
        <td class="maptable17"> Name</td>
        <td class="maptable17">FacilityName</td>
        <td class="maptable17">name</td>
      </tr>
      <tr>
        <td class="maptable17">State</td>
        <td class="maptable17">Address/StateProvince</td>
        <td class="maptable17">address.state</td>
      </tr>
      <tr>
        <td class="maptable17">DEA</td>
        <td class="maptable17">Identification/DEANumber</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/NamingSystem/usdeanumber)'.value</td>
      </tr>
      <tr>
        <td class="maptable17">NCPDP ID</td>
        <td class="maptable17">Identification/NCPDPID</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber').value</td>
      </tr>
      <tr>
        <td class="maptable17">NPI</td>
        <td class="maptable17">Identification/NPI</td>
        <td class="maptable17">identifier.where(system='http://hl7.org/fhir/sid/us-npi').value</td>
      </tr>
    </tbody>
  </table>
</div>



#### NCPDP to FHIR Mappings for Response

This section includes a representative field mapping from NCPDP SCRIPT 2017071 RxHistoryResponse to the FHIR elements in this Implementation Guide.

<div class="ritz grid-container" dir="ltr">
  <table class="waffle" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td class="maptable11">Element Group</td>
        <td class="maptable11">Element Name</td>
        <td class="maptable11">NCPDP Data Element </td>
        <td class="maptable11">FHIR Data Element </td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="5">Response Information</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message <br/>XPath: <i>/Message</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message<br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(resourceType='MessageHeader')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Request ID</td>
        <td class="maptable17">Header/RelatesToMessageID</td>
        <td class="maptable17">response.identifier</td>
      </tr>
        <td class="maptable17">Response Date/Time</td>
        <td class="maptable17">Header/SentTime</td>
        <td class="maptable17">Parameters.extension.where(extension.url='phttp://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-header-timestamp-extension')</td>
      </tr>
      <tr>
        <td class="maptable17">Report Start Date</td>
        <td class="maptable17">Body/RxHistoryResponse/RequestedDates/StartDate</td>
        <td class="maptable17">Parameters.extension.where(extension.url='phttp://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension').valuePeriod.start</td>
      </tr>
      <tr>
        <td class="maptable17">Report End date</td>
        <td class="maptable17">Body/RxHistoryResponse/RequestedDates/EndDate</td>
        <td class="maptable17">Parameters.extension.where(extension.url='phttp://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension').valuePeriod.end</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="11">Patient</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message / RxHistoryResponse / Patient <i>/Message/Body/RxHistoryResponse/Patient/HumanPatient</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(resourceType='Parameters').parameter.where(name='pdmp-history-data').resource.entry.resource.where(resourceType='Patient')</i></td>
      </tr>
      <tr>
        <td class="maptable17">First Name</td>
        <td class="maptable17">Name/FirstName</td>
        <td class="maptable17">name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">Name/LastName</td>
        <td class="maptable17">name.family</td>
      </tr>
        <td class="maptable17">Date of Birth</td>
        <td class="maptable17">DateOfBirth</td>
        <td class="maptable17">birthdate</td>
      </tr>
      <tr>
        <td class="maptable17">Gender</td>
        <td class="maptable17">Gender</td>
        <td class="maptable17">gender</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address 1</td>
        <td class="maptable17">Address/AddressLine1</td>
        <td class="maptable17">address.line[0]</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address 2</td>
        <td class="maptable17">Address/AddressLine2</td>
        <td class="maptable17">address.line[1]</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">Address/City</td>
        <td class="maptable17">address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">Address/StateProvince</td>
        <td class="maptable17">address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">Address/PostalCode</td>
        <td class="maptable17">address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">SSN</td>
        <td class="maptable17">Identification/SocialSecurity</td>
        <td class="maptable17">identifier.where(system=http://hl7.org/fhir/sid/us-ssn)</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="17">Prescription</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message / RxHistoryResponse / MedicationDispensed <i>/Message/Body/RxHistoryResponse/MedicationDispensed</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(resourceType='Parameters').parameter.where(name='pdmp-history-data').resource.entry.resource.where(resourceType='MedicationDispense')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Filled Date</td>
        <td class="maptable17">LastFillDate</td>
        <td class="maptable17">whenPrepared</td>
      </tr>
      <tr>
        <td class="maptable17">Written Date</td>
        <td class="maptable17">WrittenDate</td>
        <td class="maptable17">authorizingPrescription.authoredOn</td>
      </tr>
      <tr>
        <td class="maptable17">Number</td>
        <td class="maptable17">HistorySource/SourceReference</td>
        <td class="maptable17">identifier</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Name</td>
        <td class="maptable17">DrugDescription</td>
        <td class="maptable17">medicationCodeableConcept.text</td>
      </tr>
      <tr>
        <td class="maptable17">Product ID Qualifier (NDC)</td>
        <td class="maptable17">DrugCoded/ProductCode/Qualifier = 'ND'</td>
        <td class="maptable17">medicationCodeableConcept.coding.system = 'http://hl7.org/fhir/sid/ndc'</td>
      </tr>
      <tr>
        <td class="maptable17">Product ID (NDC)</td>
        <td class="maptable17">DrugCoded/ProductCode/Code</td>
        <td class="maptable17">medicationCodeableConcept.coding.where(system='http://hl7.org/fhir/sid/ndc').code</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Strength</td>
        <td class="maptable17">DrugCoded/Strength</td>
        <td class="maptable17">medicationCodeableConcept.ingredient.strength</td>
      </tr>
      <tr>
        <td class="maptable17">Dosage Form</td>
        <td class="maptable17">Quantity/QuantityUnitOfMeasure</td>
        <td class="maptable17">medicationCodeableConcept.form</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Quantity</td>
        <td class="maptable17">Quantity/Value</td>
        <td class="maptable17">quantity</td>
      </tr>
      <tr>
        <td class="maptable17">Days of Supply</td>
        <td class="maptable17">DaysSupply</td>
        <td class="maptable17">daysSupply</td>
      </tr>
      <tr>
        <td class="maptable17">Refill Number</td>
        <td class="maptable17">HistorySource/FillNumber</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number').valuePositiveInt</td>
      </tr>
      <tr>
        <td class="maptable17">Refills Authorized</td>
        <td class="maptable17"><i>not directly represented in RxHistoryResponse</i></td>
        <td class="maptable17">authorizingPrescription.dispenseRequest.numberOfRepeatsAllowed</td>
      </tr>
      <tr>
        <td class="maptable17">Partial Fill Indicator</td>
        <td class="maptable17"><em>not supported in RxHistoryResponse</em></td>
        <td class="maptable17">type</td>
      </tr>
      <tr>
        <td class="maptable17">Method of Payment</td>
        <td class="maptable17">HistorySource/PaymentType</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-method-of-payment')</td>
      </tr>
      <tr>
        <td class="maptable17">Opioid Treatment Code</td>
        <td class="maptable17"><i>not supported</i></td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-opioid-treatment-code').Coding.code</td>
      </tr>
      <tr>
        <td class="maptable17">Transmission Method</td>
        <td class="maptable17"><i>not supported</i></td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method').Coding.code</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="11">Dispenser Organization</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message / RxHistoryResponse / MedicationDispensed / Pharmacy<i>/Message/Body/RxHistoryResponse/MedicationDispensed/Pharmacy</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(resourceType='Parameters').parameter.where(name='pdmp-history-data').resource.entry.resource.where(resourceType='Organization')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Name (Facility)</td>
        <td class="maptable17">BusinessName</td>
        <td class="maptable17">name</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address line 1</td>
        <td class="maptable17">Address/AddressLine1</td>
        <td class="maptable17">address.line[0]</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address line 2</td>
        <td class="maptable17">Address/AddressLine2</td>
        <td class="maptable17">address.line[1]</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">Address/City</td>
        <td class="maptable17">address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">Address/StateProvince</td>
        <td class="maptable17">address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">Address/PostalCode</td>
        <td class="maptable17">address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">Phone Number</td>
        <td class="maptable17">CommunicationNumbers/PrimaryTelephone</td>
        <td class="maptable17">telecom</td>
      </tr>
      <tr>
        <td class="maptable17">DEA</td>
        <td class="maptable17">Identification/DEANumber</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/NamingSystem/usdeanumber)'.value</td>
      </tr>
      <tr>
        <td class="maptable17">NCPDP ID</td>
        <td class="maptable17">Identification/NCPDPID</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber').value</td>
      </tr>
      <tr>
        <td class="maptable17">NPI</td>
        <td class="maptable17">Identification/NPI</td>
        <td class="maptable17">identifier.where(system='http://hl7.org/fhir/sid/us-npi').value</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="12">Prescriber</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Message / RxHistoryResponse / MedicationDispensed / Prescriber <i>/Message/Body/RxHistoryResponse/MedicationDispensed/Prescriber</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(resourceType='Parameters').parameter.where(name='pdmp-history-data').resource.entry.resource.where(resourceType='Prescriber')</i></td>
      </tr>
      <tr>
        <td class="maptable17">First Name</td>
        <td class="maptable17">NonVeterinarian/Name/FirstName</td>
        <td class="maptable17">name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">NonVeterinarian/Name/LastName</td>
        <td class="maptable17">name.family</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address Line 1</td>
        <td class="maptable17">NonVeterinarian/Address/AddressLine1</td>
        <td class="maptable17">address.line[0]</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address Line 2</td>
        <td class="maptable17">Prescriber/NonVeterinarian/Address/AddressLine2</td>
        <td class="maptable17">address.line[1]</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">NonVeterinarian/Address/City</td>
        <td class="maptable17">Practitioner.address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">NonVeterinarian/Address/StateProvince</td>
        <td class="maptable17">Practitioner.address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">NonVeterinarian/Address/PostalCode</td>
        <td class="maptable17">address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">DEA Number</td>
        <td class="maptable17">NonVeterinarian/Identification/DEANumber</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/NamingSystem/usdeanumber)'.value</td>
      </tr>
      <tr>
        <td class="maptable17">NPI Number</td>
        <td class="maptable17">NonVeterinarian/Identification/NPI</td>
        <td class="maptable17">identifier.where(system='http://hl7.org/fhir/sid/us-npi').value</td>
      </tr>
      <tr>
        <td class="maptable17">State License</td>
        <td class="maptable17">NonVeterinarian/Identification/StateLicenseNumber</td>
        <td class="maptable17">identifier</td>
      </tr>
      <tr>
        <td class="maptable17">State of License</td>
        <td class="maptable17"><i>not supported</i></td>
        <td class="maptable17">identifier.extension.where(url='http://hl7.org/fhir/us/core/StructureDefinition/us-core-jurisdiction')</td>
      </tr>
    </tbody>
  </table>
</div>


#### PMIX to FHIR Mapping for Request

This section includes a representative field mapping from PMIX/NIEM 4.0 Request to the FHIR elements in this Implementation Guide.

<div class="ritz grid-container" dir="ltr">
  <table class="waffle" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td class="maptable11">Element Group</td>
        <td class="maptable11"> Element Name</td>
        <td class="maptable11">PMIX Data Element</td>
        <td class="maptable11">FHIR Data Element </td>
      </tr>
      <tr>
        <td class="maptable16" colspan="2"></td>
        <td class="maptable16">context: PMP Request <br/> XPath: <i>pmix:PMPRequest</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message / pdmp-parameters-request / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message').entry.resource.where(resourceType='Parameters').parameter.where(name='patient')</i></td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="2">Request Date Range</td>
        <td class="maptable17">Start Date</td>
        <td class="maptable17">pmp:RequestPrescriptionDateRange/pmp:RequestPrescriptionDateRangeBegin</td>
        <td class="maptable17"><i>not supported</i></td>
      </tr>
      <tr>
        <td class="maptable17">End Date</td>
        <td class="maptable17">pmp:RequestPrescriptionDateRange/pmp:RequestPrescriptionDateRangeEnd</td>
        <td class="maptable17"><i>not supported</i></td>
      </tr>
      <tr>
        <td class="maptable16" colspan="2"></td>
        <td class="maptable16">context: <i>pmix:PMPRequest</i></td>
        <td class="maptable16">context: pdmp-bundle-request-message / pdmp-parameters-request / pdmp-patient <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-request-message').entry.resource.where(resourceType='Parameters').parameter.where(name='patient')</i></td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="3">Patient</td>
        <td class="maptable17">First Name</td>
        <td class="maptable17">pmp:RequestPatient/nc:PersonName/nc:PersonGivenName</td>
        <td class="maptable17">Patient.name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">pmp:RequestPatient/nc:PersonName/nc:PersonSurName</td>
        <td class="maptable17">Patient.name.family</td>
      </tr>
      <tr>
        <td class="maptable17">Date of Birth</td>
        <td class="maptable17">pmp:RequestPatient/nc:PersonBirthDate/Date</td>
        <td class="maptable17">Patient.birthdate</td>
      </tr>
    </tbody>
  </table>
</div>


#### PMIX to FHIR Mapping for Response

This section includes a representative field mapping from PMIX/NIEM 4.0 Prescription Report to the FHIR elements in this Implementation Guide.

<div class="ritz grid-container" dir="ltr">
  <table class="waffle" cellspacing="0" cellpadding="0">
    <tbody>
      <tr>
        <td class="maptable11">Element Group</td>
        <td class="maptable11"> Element Name</td>
        <td class="maptable11">PMIX Data Element</td>
        <td class="maptable11">FHIR Data Element</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="4">Response Information</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Response Report <br/> XPath:<i>pmix:PMPPrescriptionReport/pmp:RequestResponsePrescriptionReport</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response <br/>FHIRPath:  <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response').paramenter</i></td>
      </tr>
      <tr>
        <td class="maptable17">Report Date/Time</td>
        <td class="maptable17">pmp:ReportExecutionDate <br/> pmp:ReportExecutionTime </td>
        <td class="maptable17">extension.where(extension.url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-header-timestamp-extension')</td>
      </tr>
      <tr>
        <td class="maptable17">Report Start Date</td>
        <td class="maptable17">pmp:ReportDateRange/pmp:ReportDateRangeBegin</td>
        <td class="maptable17">extension.where(extension.url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension').valuePeriod.start</td>
      </tr>
      <tr>
        <td class="maptable17">Report End Date</td>
        <td class="maptable17">pmp:ReportDateRange/pmp:ReportDateRangeEnd</td>
        <td class="maptable17">extension.where(extension.url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-activity-period-extension').valuePeriod.end</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="10">Patient</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Response Report / Prescription / Patient <br/>XPath: <i>pmix:PMPPrescriptionReport/pmp:RequestResponsePrescriptionReport/pmp:Prescription/pmp:Patient</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / us-core-patient <br/>FHIRPath: <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response').parameter.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result').entry.resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient')</i></td>
      </tr>
      <tr>
        <td class="maptable17">First Name</td>
        <td class="maptable17">nc:PersonName/nc:PersonGivenName</td>
        <td class="maptable17">name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">nc:PersonName/nc:PersonSurName</td>
        <td class="maptable17">name.family</td>
      </tr>
      <tr>
        <td class="maptable17">Date of Birth</td>
        <td class="maptable17">nc:PersonBirthDate/Date</td>
        <td class="maptable17">birthdate</td>
      </tr>
      <tr>
        <td class="maptable17">Gender</td>
        <td class="maptable17">PersonSexCode</td>
        <td class="maptable17">gender</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/ContactMailingAddress/LocationStreet</td>
        <td class="maptable17">address.line</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/ContactMailingAddress/nc:LocationCityName</td>
        <td class="maptable17">address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/ContactMailingAddress/LocationState</td>
        <td class="maptable17">address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/ContactMailingAddress/nc:LocationPostalCode</td>
        <td class="maptable17">address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">SSN</td>
        <td class="maptable17">PersonSocialSecurityNumberIdentifier</td>
        <td class="maptable17">identifier.where(system=http://hl7.org/fhir/sid/us-ssn).value</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="16">Prescription</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Response Report / Prescription <br/>XPath: <i>pmix:PMPPrescriptionReport/pmp:RequestResponsePrescriptionReport/pmp:Prescription</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-medicationdispense <br/>FHIRPath: <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response').parameter.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result').entry.resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/pdmp-medicationdispense')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Filled Date</td>
        <td class="maptable17">pmp:PrescriptionFilledDate</td>
        <td class="maptable17">whenPrepared</td>
      </tr>
      <tr>
        <td class="maptable17">Written Date</td>
        <td class="maptable17">pmp:PrescriptionWrittenDate</td>
        <td class="maptable17">authorizingPrescription.authoredOn</td>
      </tr>
      <tr>
        <td class="maptable17">Number</td>
        <td class="maptable17">pmp:PrescriptionNumberText</td>
        <td class="maptable17">identifier.value</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Name</td>
        <td class="maptable17">pmp:PrescriptionDrug/pmp:DrugProductNameText</td>
        <td class="maptable17">medicationCodeableConcept.text</td>
      </tr>
      <tr>
        <td class="maptable17">Product NDC</td>
        <td class="maptable17">pmp:PrescriptionDrug/pmp:DrugNDCProductIdentifier</td>
        <td class="maptable17">medicationCodeableConcept.coding.where(system='http://hl7.org/fhir/sid/ndc').code</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Strength</td>
        <td class="maptable17">pmp:PrescriptionDrug/pmp:DrugStrengthText</td>
        <td class="maptable17">medicationCodeableConcept.ingredient.strength</td>
      </tr>
      <tr>
        <td class="maptable17">Dosage Form</td>
        <td class="maptable17">pmp:PrescriptionDrug/pmp:DrugUnitOfMeasureText</td>
        <td class="maptable17">medicationCodeableConcept.form</td>
      </tr>
      <tr>
        <td class="maptable17">Drug Quantity</td>
        <td class="maptable17">pmp:DispensedQuantity</td>
        <td class="maptable17">quantity</td>
      </tr>
      <tr>
        <td class="maptable17">Days of Supply</td>
        <td class="maptable17">pmp:DaysSupplyCount</td>
        <td class="maptable17">daysSupply</td>
      </tr>
      <tr>
        <td class="maptable17">Refill Number</td>
        <td class="maptable17">pmp:DrugRefillNumberCount</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number').valuePositiveInt</td>
      </tr>
      <tr>
        <td class="maptable17">Refills Authorized</td>
        <td class="maptable17">pmp:RefillsAuthorizedCount</td>
        <td class="maptable17">authorizingPrescription.dispenseRequest.numberOfRepeatsAllowed</td>
      </tr>
      <tr>
        <td class="maptable17">Partial Fill Indicator</td>
        <td class="maptable17">pmp:PartialFillIndicator</td>
        <td class="maptable17">type</td>
      </tr>
      <tr>
        <td class="maptable17">Method of Payment</td>
        <td class="maptable17">pmp:MethodOfPaymentCode</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-method-of-payment').code</td>
      </tr>
      <tr>
        <td class="maptable17">Opioid Treatment Code</td>
        <td class="maptable17">pmp:OpioidTreatmentCategoryCode</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-opioid-treatment-code').Coding.code</td>
      </tr>
      <tr>
        <td class="maptable17">Transmission Method</td>
        <td class="maptable17">pmp:TransmissionFormOfRxOriginCode</td>
        <td class="maptable17">extension.where(url='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method').Coding.code</td>
      </tr>
      <tr>
         <td class="maptable16" rowspan="10">Dispenser Organization</td>
       <td class="maptable16"></td>
        <td class="maptable16">context: Response Report / Prescription / Dispenser <br/>XPath: <i>pmix:PMPPrescriptionReport/pmp:RequestResponsePrescriptionReport/pmp:Prescription/pmp:Dispenser</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / pdmp-organization-pharmacy <br/>FHIRPath: <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response').parameter.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result').entry.resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/pdmp-organization-pharmacy')</i></td>
      </tr>
      <tr>
        <td class="maptable17">Name (Facility)</td>
        <td class="maptable17">nc:OrganizationDoingBusinessAsName</td>
        <td class="maptable17">name</td>
      </tr>
      <tr>
        <td class="maptable17"> Street Address</td>
        <td class="maptable17">nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationStreet/nc:StreetFullText</td>
        <td class="maptable17">address.line</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationCityName</td>
        <td class="maptable17">address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationStateUSPostalServiceCode</td>
        <td class="maptable17">address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">nc:OrganizationPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationPostalCode</td>
        <td class="maptable17">address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">Phone Number</td>
        <td class="maptable17">nc:OrganizationPrimaryContactInformation/nc:ContactTelephoneNumber/nc:FullTelephoneNumber</td>
        <td class="maptable17">telecom</td>
      </tr>
      <tr>
        <td class="maptable17">DEA</td>
        <td class="maptable17">pmp:DEANumberIdentifier</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/NamingSystem/usdeanumber)'.value</td>
      </tr>
      <tr>
        <td class="maptable17">NCPDP ID</td>
        <td class="maptable17">pmp:NCPDPIdentifier</td>
        <td class="maptable17">identifier.where(system='http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber').value</td>
      </tr>
      <tr>
        <td class="maptable17">NPI</td>
        <td class="maptable17">pmp:NPIIdentifier</td>
        <td class="maptable17">identifier.where(system='http://hl7.org/fhir/sid/us-npi').value</td>
      </tr>
      <tr>
        <td class="maptable16" rowspan="11">Prescriber</td>
        <td class="maptable16"></td>
        <td class="maptable16">context: Response Report / Prescription / Prescriber <br/>XPath: <i>pmix:PMPPrescriptionReport/pmp:RequestResponsePrescriptionReport/pmp:Prescription/pmp:Prescriber</i></td>
        <td class="maptable16">context: pdmp-bundle-response-message / pdmp-parameters-response / pdmp-history-data / us-core-practitioner <br/>FHIRPath: <i>Bundle.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-response-message').entry.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-response').parameter.resource.where(meta.profile='http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-bundle-history-result').entry.resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner')</i></td>
      </tr>
      <tr>
        <td class="maptable17">First Name</td>
        <td class="maptable17">nc:PersonName/nc:PersonGivenName</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').name.given</td>
      </tr>
      <tr>
        <td class="maptable17">Last Name</td>
        <td class="maptable17">nc:PersonName/nc:PersonSurName</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').name.family</td>
      </tr>
      <tr>
        <td class="maptable17">Street Address</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationStreet/nc:StreetFullText</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').address.line</td>
      </tr>
      <tr>
        <td class="maptable17">City Address</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationCityName</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').address.city</td>
      </tr>
      <tr>
        <td class="maptable17">State Code</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationStateUSPostalServiceCode</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').address.state</td>
      </tr>
      <tr>
        <td class="maptable17">Zip Code</td>
        <td class="maptable17">pmp:PersonPrimaryContactInformation/nc:ContactMailingAddress/nc:LocationPostalCode</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').address.postalCode</td>
      </tr>
      <tr>
        <td class="maptable17">DEA </td>
        <td class="maptable17">pmp:DEANumberIdentifier/nc:IdentificationID</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').identifier</td>
      </tr>
      <tr>
        <td class="maptable17">NPI </td>
        <td class="maptable17">pmp:NPIIdentifier/nc:IdentificationID</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').identifier.where(coding.system'http://hl7.org/fhir/sid/us-npi')</td>
      </tr>
      <tr>
        <td class="maptable17">State License </td>
        <td class="maptable17">pmp:StateLicenseIdentifier:nc:IdentificationID</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').identifier</td>
      </tr>
      <tr>
        <td class="maptable17">State of License</td>
        <td class="maptable17">pmp:StateLicenseIdentifier:nc:IdentificationJurisdiction</td>
        <td class="maptable17">resource.where(meta.profile='http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner').identifier</td>
      </tr>
    </tbody>
  </table>
</div>




---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/MedicationAdministration-pdmp-medadmin-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">MedicationAdministration</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-medadmin-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">source</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/md-pdmp</span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationadministration</span></span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Telephone Prescription</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent0"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">864706</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">methadone hydrochloride 10 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00406577123</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">METHADONE HYDROCHLORIDE, 1 TABLET in 1 BLISTER PACK (0406-5771-23) (package)</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">methadone hydrochloride 10 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">display</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Amy V. Shaw</span></span><br><span style="display:inline-block"><span class="emph1">effectivePeriod</span><span style="display:inline-block"><span class="emph2">start</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-01-15T04:30:00+01:00</span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Ronald Bone, MD</span></span></span><br><span style="display:inline-block"><span class="emph1">dosage</span><span style="display:inline-block"><span class="emph2">text</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Give 1 tablet</span></span><span style="display:inline-block"><span class="emph2">dose</span><span style="display:inline-block"><span class="emph3">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph3">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span></div>

<hr>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/MedicationDispense-pdmp-meddispense-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">MedicationDispense</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-meddispense-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">versionId</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">lastUpdated</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05T06:38:52+00:00</span></span></span><span style="display:inline-block"><span class="emph2">source</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://example.org/ma-pdmp</span></span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">extension[1]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[2]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">05</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Electronic Prescription</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[3]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-mme</span></span></span><span style="display:inline-block"><span class="emph2">valueDecimal</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">18</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[4]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-method-of-payment</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXMethodofPayment</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Private Pay (Cash, Charge, Credit Card)</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[5]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-opioid-treatment-code</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXOpioidTreatmentCode</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Acute Opioid Therapy</span></span></span></span><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://ourpharmacy.com/fillnumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2000353</span></span></span><br><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">completed</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent0"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">993781</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">acetaminophen 300 MG / codeine phosphate 30 MG Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093015001</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Acetaminophen 300 mg / Codeine 30 mg oral tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:53a1e123-5b56-44ae-b7e8-36e0b9800f57</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">reference</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">urn:uuid:82ae67e4-f23a-4c17-b80a-9076a37f5d6e</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="emph3">type</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://mypharmacysystem.com/prescriptionnumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">065046045550</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">15</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">5</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-06-05</span></span></span><br><span style="display:inline-block"><span class="emph1">whenHandedOver</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1 tablet every 6-8 hours as needed for pain</span></span></span></div>

<hr>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/MedicationDispense-pdmp-meddispense-2-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">MedicationDispense</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-meddispense-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">versionId</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">lastUpdated</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2016-12-10T06:38:52+00:00</span></span></span><span style="display:inline-block"><span class="emph2">profile</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-medicationdispense</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">extension[1]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-fill-number</span></span></span><span style="display:inline-block"><span class="emph2">valuePositiveInt</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">4</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[2]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-rx-transmission-method</span></span></span><span style="display:inline-block"><span class="emph2">valueCoding</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXTransmissionFormRxOriginCodeType</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">05</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Electronic Prescription</span></span></span><br><span style="display:inline-block"><span class="emph1">extension[3]</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-extension-lme</span></span></span><span style="display:inline-block"><span class="emph2">valueDecimal</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">4</span></span></span></span><span style="display:inline-block"><span class="emph1">status</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">in-progress</span></span></span><br><span style="display:inline-block"><span class="emph1">medicationCodeableConcept</span></span><span class="indent0"><span style="display:inline-block"><span class="emph2">coding[1]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://www.nlm.nih.gov/research/umls/rxnorm</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">433800</span></span></span><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">24 HR alprazolam 1 MG Extended Release Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph2">coding[2]</span><span style="display:inline-block"><span class="emph3">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/ndc</span></span><span style="display:inline-block"><span class="emph3">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">00093545106</span></span></span><span style="display:inline-block"><span class="emph3">userSelected</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">24 HR alprazolam 1 MG Extended Release Oral Tablet</span></span></span><br><span style="display:inline-block"><span class="emph1">subject</span><span style="display:inline-block"><span class="emph2">display</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">August Samuels</span></span><br><span style="display:inline-block"><span class="emph1">performer</span><span style="display:inline-block"><span class="emph2">actor</span></span></span><span style="display:inline-block"><span class="emph3">identifier</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph4">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span><br><span style="display:inline-block"><span class="emph3">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Our Pharmacy</span></span></span><br><span style="display:inline-block"><span class="emph1">authorizingPrescription</span><span style="display:inline-block"><span class="emph2">identifier</span></span></span><span style="display:inline-block"><span class="emph3">type</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">FILL</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Filler Identifier</span></span></span><br><span style="display:inline-block"><span class="emph3">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://mypharmacysystem.com/prescriptionnumber</span></span></span><span style="display:inline-block"><span class="emph3">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">065046045550</span></span></span><br><span style="display:inline-block"><span class="emph1">quantity</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">60</span></span><span style="display:inline-block"><span class="emph2">unit</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">each</span></span></span><br><span style="display:inline-block"><span class="emph1">daysSupply</span><span style="display:inline-block"><span class="emph2">value</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">30</span></span><br><span style="display:inline-block"><span class="emph1">whenPrepared</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2023-07-08T06:45:52Z</span></span></span><br><span style="display:inline-block"><span class="emph1">dosageInstruction</span><span style="display:inline-block"><span class="emph2">sequence</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1</span></span><span style="display:inline-block"><span class="emph2">text</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">2 tablets every morning</span></span></span></div>

<hr>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/OperationDefinition-pdmp-history-intro.md

**Notes:**

- **Detailed parameter definitions.** The table below describes the input and output parameters, including their uses and base FHIR resource types.The content conveyed in those parameters is further constrained by the [PDMP Parameters - Request](StructureDefinition-pdmp-parameters-request.html) and [PDMP Parameters - Response](StructureDefinition-pdmp-parameters-response.html) profiles referenced below. 

<p></p>

- **PDMP dispensation history data definition.** The [PDMP History Result Bundle](StructureDefinition-pdmp-bundle-history-result.html) profile further profiles the pdmp-history-data response parameter's content.

<p></p>

- **Output parameter cardinality.** The four response parameters are each individually optional, but at least one must be present in the operation response, reflecting these scenarios:
  - **PDMP history available.** pdmp-history-data and/or pdmp-history-link are populated when the PDMP Responder has PDMP information available for the requested patient.
  - **Pre-stage-only.** outcome and, optionally, pre-stage-retrieval-key are populated when the PDMP Responder is replying to a request in which the pre-stage-only parameter is set to true (see details below).
  - **Patient not found.** outcome is populated if the PDMP Responder is unable to locate information for the requested patient. pdmp-history-link may also be populated in this scenario. See [this section](submission-options.html#successful-processing-that-does-not-locate-pdmp-history-for-the-requested-patient) for additional response specifics and an example.
  - **Fatal exception.** only outcome is populated if the PDMP Responder encounters an exception that prevents completion of response processing. See [this section](submission-options.html#error-preventing-completion-of-response-processing) for additional response specifics and an example.
  - **Non-fatal exception impacting response content.** outcome is populated in addition to one or more other parameters if the PDMP Responder encounters a non-fatal exception when executing a request that impacts the content of the response,  to indicate the issue and impact on the PDMP history content see [this section](submission-options.html#non-fatal-processing-exception) for additional response specifics and an example.
  - **Other warning or information.** outcome may be populated in addition to one or more other parameters to return other warning or processing information.
  
  <p></p>

 - **Requests to stage data for later retrieval.** A request with the pre-stage-only input parameter set to true directs the PDMP Responder to gather information for the requested patient and stage it for retrieval via a subsequent pdmp-history call.
   - In response, the PDMP Responder populates the outcome parameter with an indication that the request was accepted and optionally returns a key value in the pre-stage-retrieval-key output parameter that the PDMP Requester must include in the subsequent operation call's pre-stage-retrieval-key input parameter.
   - see [this section](submission-options.html#successful-acceptance-of-a-pre-stage-only-request) for additional response specifics and an example.

<p></p>

 - **FHIR resource references.** Resources conveyed in the operation's input and output parameters will 

<p></p>

 - **FHIR resource references.** Resources conveyed in the operation's input and output parameters will typically contain references to other FHIR resources. Certain of these references are expected to resolve to other resources in the respective submission or response. Others, however, may refer to resources that are not present in the operation because they are not pertinent to the PDMP use case. Below are this guide's expectations:

<p></p>

   - **Operation request:**
     - _Authorized Practitioner Relationships._ The PractitionerRole resource submitted in the authorized-practitioner-role parameter: 
       - **SHOULD** contain a reference to the Practitioner resource submitted in the corresponding authorized-practitioner parameter in its .practitioner element.
       - **SHOULD** contain a reference to the Organization resource submitted in the corresponding authorized-practitioner-organization parameter in its .organization element.
     - _Delegate Relationships._ The PractitionerRole resource submitted in the delegate-practitioner-role parameter: 
       - **SHOULD** contain a reference to the Practitioner resource submitted in the corresponding delegate-practitioner parameter in its .practitioner element.
       - **SHOULD** contain a reference to the Organization resource submitted in the corresponding delegate-organization parameter in its .organization element.
       - _Note:_ a delegate is an individual authorized by a provider or pharmacist who is requesting the PDMP information on their behalf.  For example, an intake or triage person in an emergency department may be a delegate for a physician in that department
     - _Other references_ may be present in submitted resources but are not required to resolve to other resources in the request.

   <p></p>

   - **Operation response - PDMP History Data parameter:** 
     - Resources contained in the bundle conveyed in the pdmp-history-data parameter are expected to reference one another according to the rules of the associated FHIR profiles. 
     - See [PDMP History Result Bundle](StructureDefinition-pdmp-bundle-history-result.html) for details about the Bundle that populates this parameter.
 
<p></p>

**Examples:**

An example of the Parameters resource submitted to this operation:
- [pdmp-history-input-parameters-1](Parameters-pdmp-history-input-parameters-1.html)

An example of the Parameters resource returned by this operation:
- [pdmp-history-output-parameters-1](Parameters-pdmp-history-output-parameters-1.html)


<p></p>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/Organization-pdmp-pharmacy-1-intro.md

<h3>Example data content</h3>

<div class="fm_ex"><span class="emph0">Organization</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-pharmacy-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-organization-pharmacy</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">identifier[1]</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">DEA</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Drug Enforcement Administration registration number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/NamingSystem/usdeanumber</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">CS4861378</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1669512349</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier[3]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/NCPDPProviderIdentificationNumber</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">999017</span></span></span></span><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Our Pharmacy</span></span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">952-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">contact-our-pharmacy@email.org</span></span></span></span><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">220 Oak St</span></span><span style="display:inline-block"><span class="emph2">city</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Minneapolis</span></span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MN</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">55008</span></span></span><span style="display:inline-block"><span class="emph2">country</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">USA</span></span></span></div>

<hr>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/Parameters-pdmp-history-input-parameters-1-intro.md

This is an example of a Parameters resource used to invoke the Patient/$pdmp-history operation

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-input-parameters-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient" class="emph0 summary">Patient</span><span id="_Parameters_parameter_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Social Security number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01059</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Parameters_parameter2_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-req-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter2_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster MD</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1928340565</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Amster</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Adam</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[3]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-role</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole" class="emph0 summary">PractitionerRole</span><span id="_Parameters_parameter3_resource_PractitionerRole" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitionerrole-req-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter3_resource_PractitionerRole_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster, Internal Medicine, Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">practitioner</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Practitioner/practitioner-req-1</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Adam Amster</span></span></span><br><span style="display:inline-block"><span class="emph1">organization</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Organization/organization-req-1</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Highview Clinic</span></span></span><span class="indent1"><span style="display:inline-block"><span class="emph1">telecom[1]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">951-555-5555</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom[2]</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">email</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">aamster-highview-clinic@exampleemail.org</span></span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[4]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-organization</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization" class="emph0 summary">Organization</span><span id="_Parameters_parameter4_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">organization-req-1</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter4_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">9851234689</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">state</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[5]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-only</span></span><span style="display:inline-block"><span class="emph2">valueBoolean</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">false</span></span></span></span></div>

<hr>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/Parameters-pdmp-history-input-parameters-2-minimum-intro.md

This is an example of a Parameters resource used to invoke the Patient/$pdmp-history operation. This example illustrates the minimum population for a request. Note that additional content will often be required by jurisditional rules.

<p></p>

<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-input-parameters-2-minimum</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient" class="emph0 summary">Patient</span><span id="_Parameters_parameter_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">SS</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Social Security number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-ssn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">120-35-2435</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Parameters_parameter2_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-req-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter2_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster MD</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1928340565</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Amster</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[3]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-role</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole" class="emph0 summary">PractitionerRole</span><span id="_Parameters_parameter3_resource_PractitionerRole" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitionerrole-req-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter3_resource_PractitionerRole_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Adam Amster, Internal Medicine, Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">practitioner</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Practitioner/practitioner-req-2</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Adam Amster</span></span></span><br><span style="display:inline-block"><span class="emph1">organization</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Organization/organization-req-2</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">951-555-5555</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[4]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-organization</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization" class="emph0 summary">Organization</span><span id="_Parameters_parameter4_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">organization-req-2</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter4_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Highview Clinic</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Highview Clinic</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[5]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-only</span></span><span style="display:inline-block"><span class="emph2">valueBoolean</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">false</span></span></span></span></div>

<hr>

---

File: repos/HL7_SLASH_fhir-pdmp/input/pagecontent/Parameters-pdmp-history-input-parameters-3-veterinary-intro.md

This example illustrates how a request is populated when submitted from a veterinary setting and the patient is an animal. 

- The Patient.patient-animal extension is populated to indicate that the patient is an animal. The animal's species is included from the [PDMP Species Type ValueSet](ValueSet-pdmp-species-type.html)
- **Patient.name**
  - Populate the animal's name in name.given, and the owner's family name in name.family
- **Patient.birthDate**
  - Populate birthDate value if known. Otherwise, populate birthdate.extension using the [data absent reason extension](http://hl7.org/fhir/StructureDefinition/data-absent-reason) with the value "unkonwn"
- **RelatedPerson representing the owner**
  - When the patient is an animal, the Patient resource **SHOULD** be accompanied by a RelatedPerson reflecting the animal's owner's information
  

<p></p>


<h3>Example data content</h3>

<div class="fm_ex"><span id="expandNote"><a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.collapse').forEach(el => {el.classList.remove('collapse'); el.classList.remove('in'); el.classList.add('in');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.remove('collapsed');});}">expand all</a> | <a class="expandLink" href="#" onclick="javascript:{document.querySelectorAll('.fm_ex .detail.in').forEach(el => {el.classList.remove('in'); el.classList.remove('in'); el.classList.add('collapse');}); document.querySelectorAll('.fm_ex .summary').forEach(el => {el.classList.add('collapsed');}); }">contract all</a></span><span class="emph0">Parameters</span><br /><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pdmp-history-input-parameters-3-veterinary</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-parameters-request</span></span><span class="indent0"><span style="display:inline-block"><span class="emph1">parameter[1]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient" class="emph0 summary">Patient</span><span id="_Parameters_parameter_resource_Patient" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/pdmp/StructureDefinition/pdmp-patient</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter_resource_Patient_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter_resource_Patient_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Animal patient: Fido Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/patient-animal</span></span></span><span style="display:inline-block"><span class="emph2">extension</span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">species</span></span></span><span style="display:inline-block"><span class="emph3">valueCodeableConcept</span><span style="display:inline-block"><span class="emph4">coding</span></span></span><span style="display:inline-block"><span class="emph5">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/PMIXSpeciesTypeCode</span></span></span><span style="display:inline-block"><span class="emph5">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">02</span></span></span><span style="display:inline-block"><span class="emph5">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Veterinary Patient</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MR</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Medical record number</span></span></span><br><span style="display:inline-block"><span class="emph2">system</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://vet-medical.example.org/mrn</span></span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10035406</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Fido</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="emph2">extension</span></span></span><span style="display:inline-block"><span class="leastEmph">@url</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/StructureDefinition/data-absent-reason</span></span><span style="display:inline-block"><span class="emph3">valueCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">unknown</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10023 Oakways Ln</span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01742</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[2]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner" class="emph0 summary">Practitioner</span><span id="_Parameters_parameter2_resource_Practitioner" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitioner-req-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter2_resource_Practitioner_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter2_resource_Practitioner_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Susan Patel, Veterinarian</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/sid/us-npi</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1928340565</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Patel</span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[3]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-role</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole" class="emph0 summary">PractitionerRole</span><span id="_Parameters_parameter3_resource_PractitionerRole" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">practitionerrole-req-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter3_resource_PractitionerRole_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter3_resource_PractitionerRole_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Susan Patel, Veterinary Medicine, Highview Veterinary</span></span></span><br><span style="display:inline-block"><span class="emph1">practitioner</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Practitioner/practitioner-req-3</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Susan Patel</span></span></span><br><span style="display:inline-block"><span class="emph1">organization</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Organization/organization-req-3</span></span><span style="display:inline-block"><span class="emph2">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Highview Veterinary</span></span></span><br><span style="display:inline-block"><span class="emph1">telecom</span><span style="display:inline-block"><span class="emph2">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">phone</span></span><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">951-555-5555</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[4]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">authorized-practitioner-organization</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization" class="emph0 summary">Organization</span><span id="_Parameters_parameter4_resource_Organization" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">organization-req-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization|6.1.0</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter4_resource_Organization_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter4_resource_Organization_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Highview Veterinary</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Highview Veterinary</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[5]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">animal-owner</span></span><br><span style="display:inline-block"><span class="emph2">resource</span><span style="margin-left:50px; display:block"><span class="preSummary"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter5_resource_RelatedPerson" class="emph0 summary">RelatedPerson</span><span id="_Parameters_parameter5_resource_RelatedPerson" class="detail in"><br><span style="display:inline-block"><span class="emph1">id</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">patient-req-3</span></span></span><br><span style="display:inline-block"><span class="emph1">meta</span><span style="display:inline-block"><span class="emph2">profile</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson</span></span><br><span style="display:inline-block"><span class="emph1">text</span><span style="display:inline-block"><span class="emph2">status</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">generated</span></span><span class="fhirText"><span class="preText"></span><span data-toggle="collapse" style="display:inline-block;"  data-target="#_Parameters_parameter5_resource_RelatedPerson_text_div" class="emph2 fhirDiv summary collapsed">div</span><span id="_Parameters_parameter5_resource_RelatedPerson_text_div" class="detail collapse"><span class="longContentEdit"></span><span class="longHiddenContent">Animal's owner: August Samuels</span></span></span><br><span style="display:inline-block"><span class="emph1">identifier</span><span style="display:inline-block"><span class="emph2">type</span></span></span><span style="display:inline-block"><span class="emph3">coding</span><span style="display:inline-block"><span class="emph4">system</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">http://terminology.hl7.org/CodeSystem/v2-0203</span></span><span style="display:inline-block"><span class="emph4">code</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">DL</span></span></span><span style="display:inline-block"><span class="emph4">display</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="boldValueEmph">Driver&#39;s license number</span></span></span><br><span style="display:inline-block"><span class="emph2">value</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">M231-64600-565-55</span></span></span><br><span style="display:inline-block"><span class="emph1">active</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">true</span></span></span><br><span style="display:inline-block"><span class="emph1">patient</span><span style="display:inline-block"><span class="emph2">reference</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Patient/patient-req-3</span></span><br><span style="display:inline-block"><span class="emph1">name</span><span style="display:inline-block"><span class="emph2">family</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">Samuels</span></span><span style="display:inline-block"><span class="emph2">given</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">August</span></span></span><br><span style="display:inline-block"><span class="emph1">gender</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">male</span></span></span><br><span style="display:inline-block"><span class="emph1">birthDate</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">1989-03-12</span></span></span><br><span style="display:inline-block"><span class="emph1">address</span><span style="display:inline-block"><span class="emph2">line</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">10023 Oakways Ln</span></span><span style="display:inline-block"><span class="emph2">state</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">MA</span></span></span><span style="display:inline-block"><span class="emph2">postalCode</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">01742</span></span></span></span></span></span><br/><span style="display:inline-block"><span class="emph1">parameter[6]</span><span style="display:inline-block"><span class="emph2">name</span></span></span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">pre-stage-only</span></span><span style="display:inline-block"><span class="emph2">valueBoolean</span><span style="display:inline-block"><span class="leastEmph fhirValue">@value</span>: &nbsp;<span class="valueEmph">false</span></span></span></span></div>

<hr>

---

