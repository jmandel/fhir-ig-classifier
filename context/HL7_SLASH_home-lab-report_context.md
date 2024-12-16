File: repos/HL7_SLASH_home-lab-report/input/fsh/extensions/ExtensionAtHomeInVitroTestProctoredInfo.fsh

Extension: ExtensionAtHomeInVitroTestProctoredInfo
Id: Extension-at-home-in-vitro-test-proctored-info
Title: "Extension - At-Home In-Vitro Test Proctored Info"
Description: "Information about whether or not the test was proctored and who the proctor was."
Context: Observation
* ^version = "1.0.0"
* ^date = "2022-06-21"
* ^jurisdiction = urn:iso:std:iso:3166#US
* . 0..1
* . ^short = "Extension - At-Home In-Vitro Test Proctored Information"
* . ^definition = "Information about whether or not the test was proctored and who the proctor was."
* extension contains
    proctoredTest 1..1 MS and
    proctoredBy 0..* MS
* extension[proctoredTest] only Extension
* extension[proctoredTest] ^short = "Whether or not the at-home in-vitro test was proctored"
* extension[proctoredTest] ^definition = "Whether or not the at-home in-vitro test was proctored"
* extension[proctoredTest].url 1..1 MS
* extension[proctoredTest].url only uri
* extension[proctoredTest].value[x] 1..1 MS
* extension[proctoredTest].value[x] only boolean
* extension[proctoredBy] only Extension
* extension[proctoredBy] ^short = "Information about the person(s) who proctored the test"
* extension[proctoredBy] ^definition = "Information about the person(s) who proctored the test"
* extension[proctoredBy].url 1..1 MS
* extension[proctoredBy].url only uri
* extension[proctoredBy].value[x] 1..1 MS
* extension[proctoredBy].value[x] only Reference(USCorePractitionerProfile or USCorePractitionerRoleProfile or USCoreRelatedPersonProfile or USCoreOrganizationProfile)
* url 1..1

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/extensions/ExtensionAtHomeInVitroTestSourceSoftwareInfo.fsh

Extension: ExtensionAtHomeInVitroTestSourceSoftwareInfo
Id: Extension-at-home-in-vitro-test-source-software-info
Title: "Extension - At-Home In-Vitro Test Source Software Information"
Description: "Information about the source software. The source software is the message producing app that changes the format of, or produces the data."
Context: MessageHeader.source
* ^version = "1.0.0"
* ^date = "2022-06-21"
* ^jurisdiction = urn:iso:std:iso:3166#US
* . 0..1
* . ^short = "Extension - At-Home In-Vitro Test Source Software Information"
* . ^definition = "Information about the source software."
* extension contains
    vendorOrganization 0..1 MS and
    softwareBinaryID 0..1 MS and
    softwareInstallDate 0..1 MS
* extension[vendorOrganization] only Extension
* extension[vendorOrganization] ^short = "Source software vendor organization. V2: SFT-1"
* extension[vendorOrganization] ^definition = "Source software vendor organization. V2: SFT-1"
* extension[vendorOrganization].url 1..1
* extension[vendorOrganization].value[x] 1..1 MS
* extension[vendorOrganization].value[x] only Reference(USCoreOrganizationProfile)
* extension[softwareBinaryID] only Extension
* extension[softwareBinaryID] ^short = "Source software binary ID. V2: SFT-4"
* extension[softwareBinaryID] ^definition = "Source software binary ID. V2: SFT-4"
* extension[softwareBinaryID].url 1..1
* extension[softwareBinaryID].value[x] 1..1 MS
* extension[softwareBinaryID].value[x] only string
* extension[softwareInstallDate] only Extension
* extension[softwareInstallDate] ^short = "Source software install date. V2: SFT-6"
* extension[softwareInstallDate] ^definition = "Source software install date. V2: SFT-6"
* extension[softwareInstallDate].url 1..1
* extension[softwareInstallDate].value[x] 1..1 MS
* extension[softwareInstallDate].value[x] only date
* url 1..1

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/extensions/ExtensionAtHomeInVitroTestSupportingInfo.fsh

Extension: ExtensionAtHomeInVitroTestSupportingInfo
Id: Extension-at-home-in-vitro-test-supporting-info
Title: "Extension - At-Home In-Vitro Test Supporting Info"
Description: "Additional information supporting the diagnostic report. Modeled after the DiagnosticReport.supportingInfo backbone element added to DiagnosticReport in FHIR R5."
Context: DiagnosticReport
* ^version = "1.0.0"
* ^date = "2023-01-04"
* ^jurisdiction = urn:iso:std:iso:3166#US
* . 0..*
* . ^short = "Extension - At-Home In-Vitro Test Supporting Information"
* . ^definition = "Additional information supporting the diagnostic report."
* extension contains
    type 1..1 MS and
    reference 0..* MS
* extension[type] only Extension
* extension[type] ^short = "Supporting information role code"
* extension[type] ^definition = "The code value for the role of the supporting information in the diagnostic report."
* extension[type].url 1..1 MS
* extension[type].url only uri
* extension[type].value[x] 1..1 MS
* extension[type].value[x] only CodeableConcept
* extension[type].value[x] = $v2-0936#QST
* extension[type].value[x] ^short = "Question"
* extension[reference] only Extension
* extension[reference] ^short = "Supporting information reference"
* extension[reference] ^definition = "The reference for the supporting information in the diagnostic report."
* extension[reference].url 1..1 MS
* extension[reference].url only uri
* extension[reference].value[x] 1..1 MS
* extension[reference].value[x] only Reference(ObservationPatientQuestionAnswer)
* url 1..1

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/bundle-at-home-in-vitro-test-results-p-noelle.fsh

Instance: bundle-at-home-in-vitro-test-results-p-noelle
InstanceOf: BundleAtHomeInVitroTest
Title: "Bundle - At-Home In-Vitro Test Results - P Noelle"
Description: "Bundle - At-Home In-Vitro Test Results - P Noelle example"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:683dde44f7664b03a20b6324f23986d9"
* type = #message
* timestamp = "2022-04-29T08:51:14.637+00:00"
* entry[0].fullUrl = "https://fhir.org/fhir/MessageHeader/messageheader-at-home-in-vitro-test-p-noelle"
* entry[=].resource = messageheader-at-home-in-vitro-test-p-noelle
* entry[+].fullUrl = "https://fhir.org/fhir/DiagnosticReport/diagnosticreport-at-home-in-vitro-results-covid-p-noelle"
* entry[=].resource = diagnosticreport-at-home-in-vitro-results-covid-p-noelle
* entry[+].fullUrl = "https://fhir.org/fhir/Observation/observation-at-home-in-vitro-test-result-covid-p-noelle"
* entry[=].resource = observation-at-home-in-vitro-test-result-covid-p-noelle
* entry[+].fullUrl = "https://fhir.org/fhir/Observation/observation-patient-answer-symptoms-present-covid-p-noelle"
* entry[=].resource = observation-patient-answer-symptoms-present-covid-p-noelle
* entry[+].fullUrl = "https://fhir.org/fhir/Patient/patient-at-home-in-vitro-test-patricia-noelle"
* entry[=].resource = patient-at-home-in-vitro-test-patricia-noelle
* entry[+].fullUrl = "https://fhir.org/fhir/Organization/us-core-organization-acme-corporation"
* entry[=].resource = us-core-organization-acme-corporation
* entry[+].fullUrl = "https://fhir.org/fhir/Specimen/specimen-anterior-nares-swab-p-noelle"
* entry[=].resource = specimen-anterior-nares-swab-p-noelle
* entry[+].fullUrl = "https://fhir.org/fhir/Device/device-fast-sars-antigen-test"
* entry[=].resource = device-fast-sars-antigen-test
* entry[+].fullUrl = "https://fhir.org/fhir/Observation/observation-patient-answer-symptom-onset-covid-p-noelle"
* entry[=].resource = observation-patient-answer-symptom-onset-covid-p-noelle
* entry[+].fullUrl = "https://fhir.org/fhir/Practitioner/practitioner-us-core-proctor"
* entry[=].resource = practitioner-us-core-proctor
* entry[+].fullUrl = "https://fhir.org/fhir/Organization/us-core-organization-aphl-aims-prd"
* entry[=].resource = us-core-organization-aphl-aims-prd

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/bundle-at-home-in-vitro-test-results-s-trevor.fsh

Instance: bundle-at-home-in-vitro-test-results-s-trevor
InstanceOf: BundleAtHomeInVitroTest
Title: "Bundle - At-Home In-Vitro Test Results - S Trevor"
Description: "Bundle - At-Home In-Vitro Test Results - S Trevor example"
Usage: #example
* identifier.system = "urn:ietf:rfc:3986"
* identifier.value = "urn:uuid:683dde44f7664b03a20b6324f23986d8"
* type = #message
* timestamp = "2021-01-28T16:07:15-05:00"
* entry[0].fullUrl = "https://fhir.org/fhir/MessageHeader/messageheader-at-home-in-vitro-test-s-trevor"
* entry[=].resource = messageheader-at-home-in-vitro-test-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/DiagnosticReport/diagnosticreport-at-home-in-vitro-results-covid-s-trevor"
* entry[=].resource = diagnosticreport-at-home-in-vitro-results-covid-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Observation/observation-at-home-in-vitro-test-result-covid-s-trevor"
* entry[=].resource = observation-at-home-in-vitro-test-result-covid-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Observation/observation-patient-answer-symptoms-present-covid-s-trevor"
* entry[=].resource = observation-patient-answer-symptoms-present-covid-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Observation/observation-patient-answer-hospitalized-s-trevor"
* entry[=].resource = observation-patient-answer-hospitalized-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Observation/observation-patient-answer-congregate-s-trevor"
* entry[=].resource = observation-patient-answer-congregate-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Observation/observation-patient-answer-employed-healthcare-s-trevor"
* entry[=].resource = observation-patient-answer-employed-healthcare-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Observation/observation-patient-answer-first-test-s-trevor"
* entry[=].resource = observation-patient-answer-first-test-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Observation/observation-patient-answer-pregnancy-s-trevor"
* entry[=].resource = observation-patient-answer-pregnancy-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Patient/patient-at-home-in-vitro-test-stacy-trevor"
* entry[=].resource = patient-at-home-in-vitro-test-stacy-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Specimen/specimen-swab-internal-nose-s-trevor"
* entry[=].resource = specimen-swab-internal-nose-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Device/device-hometest1-s-trevor"
* entry[=].resource = device-hometest1-s-trevor
* entry[+].fullUrl = "https://fhir.org/fhir/Organization/us-core-organization-reliable-informatics"
* entry[=].resource = us-core-organization-reliable-informatics
* entry[+].fullUrl = "https://fhir.org/fhir/Organization/us-core-organization-aphl-aims-prd"
* entry[=].resource = us-core-organization-aphl-aims-prd
* entry[+].fullUrl = "https://fhir.org/fhir/Organization/us-core-organization-abbot"
* entry[=].resource = us-core-organization-abbot

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/device-fast-sars-antigen-test.fsh

Instance: device-fast-sars-antigen-test
InstanceOf: DeviceAtHomeInVitroTest
Title: "Device - Fast SARS Antigen Test"
Description: "Device - Fast SARS Antigen Test example"
Usage: #example
* udiCarrier.deviceIdentifier = "30014613339374"
* udiCarrier.issuer = "GS1"
* status = #active
* manufacturer = "ACME CORPORATION"
* expirationDate = "2022-11-20"
* lotNumber = "7654321E"
* serialNumber = "10987654d322"
* deviceName[modelName].name = "Fast SARS Antigen Test"
* deviceName[modelName].type = #model-name
* modelNumber = "20387"
* partNumber = "20387"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/device-hometest1-s-trevor.fsh

Instance: device-hometest1-s-trevor
InstanceOf: DeviceAtHomeInVitroTest
Title: "Device - Acme Home Test"
Description: "Device - Acme Home Test example"
Usage: #example
* udiCarrier.deviceIdentifier = "Acme COVID-19 Home Test_Acme Limited_EUA"
* udiCarrier.issuer = "GS1"
* status = #active
* manufacturer = "ACME CORPORATION"
* expirationDate = "2022-11-20"
* lotNumber = "7654321F"
* serialNumber = "10987654d323"
* deviceName[modelName].name = "Acme COVID-19 Home Test_Acme Limited"
* deviceName[modelName].type = #model-name
* modelNumber = "20388"
* partNumber = "20388"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/diagnosticreport-at-home-in-vitro-results-covid-p-noelle.fsh

Instance: diagnosticreport-at-home-in-vitro-results-covid-p-noelle
InstanceOf: DiagnosticReportAtHomeInVitroResultsCovid
Title: "DiagnosticReport - At-Home In-Vitro Results - COVID-19 - P Noelle"
Description: "DiagnosticReport - At-Home In-Vitro Results - Covid: P Noelle example"
Usage: #example
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].url = "type"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].valueCodeableConcept = $v2-0936#QST "Question"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].url = "reference"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.reference = "Observation/observation-patient-answer-symptoms-present-covid-p-noelle"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.display = "Whether the patient has symptoms related to condition of interest: Yes"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-supporting-info"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].url = "type"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].valueCodeableConcept = $v2-0936#QST "Question"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].url = "reference"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.reference = "Observation/observation-patient-answer-symptom-onset-covid-p-noelle"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.display = "Date and time of symptom onset: March 22, 2021"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-supporting-info"
* status = #final
* category[LaboratorySlice] = $v2-0074#LAB "Laboratory"
* code = $loinc#95209-3 "SARS-CoV+SARS-CoV-2 (COVID-19) Ag [Presence] in Respiratory system specimen by Rapid immunoassay"
* subject.reference = "Patient/patient-at-home-in-vitro-test-patricia-noelle"
* subject.display = "Patricia Noelle"
* effectiveDateTime = "2021-03-10T11:45:33+11:00"
* issued = "2021-03-10T11:45:33+11:00"
* result.reference = "Observation/observation-at-home-in-vitro-test-result-covid-p-noelle"
* result.display = "SARS-CoV+SARS-CoV-2"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/diagnosticreport-at-home-in-vitro-results-covid-s-trevor.fsh

Instance: diagnosticreport-at-home-in-vitro-results-covid-s-trevor
InstanceOf: DiagnosticReportAtHomeInVitroResultsCovid
Title: "DiagnosticReport - At-Home In-Vitro Results - COVID-19 - S Trevor"
Description: "DiagnosticReport - At-Home In-Vitro Results - COVID-19 - S Trevor example"
Usage: #example
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].url = "type"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].valueCodeableConcept = $v2-0936#QST "Question"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].url = "reference"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.reference = "Observation/observation-patient-answer-first-test-s-trevor"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.display = "Whether this is the patient's first test for the condition of interest: No"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-supporting-info"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].url = "type"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].valueCodeableConcept = $v2-0936#QST "Question"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].url = "reference"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.reference = "Observation/observation-patient-answer-employed-healthcare-s-trevor"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.display = "Whether patient is employed in a healthcare setting: No"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-supporting-info"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].url = "type"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].valueCodeableConcept = $v2-0936#QST "Question"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].url = "reference"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.reference = "Observation/observation-patient-answer-symptoms-present-covid-s-trevor"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.display = "Whether patient has symptoms related to condition of interest: Yes"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-supporting-info"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].url = "type"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].valueCodeableConcept = $v2-0936#QST "Question"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].url = "reference"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.reference = "Observation/observation-patient-answer-hospitalized-s-trevor"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.display = "Whether patient was hospitalized because of this condition: No"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-supporting-info"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].url = "type"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].valueCodeableConcept = $v2-0936#QST "Question"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].url = "reference"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.reference = "Observation/observation-patient-answer-congregate-s-trevor"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.display = "Whether patient resides in a congregate care setting: Yes"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-supporting-info"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].url = "type"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[type].valueCodeableConcept = $v2-0936#QST "Question"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].url = "reference"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.reference = "Observation/observation-patient-answer-pregnancy-s-trevor"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].extension[reference].valueReference.display = "Pregnancy status: Not pregnant"
* extension[ExtensionAtHomeInVitroTestSupportingInfo].url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-supporting-info"
* status = #final
* category[LaboratorySlice] = $v2-0074#LAB "Laboratory"
* code = $loinc#95209-3 "SARS-CoV+SARS-CoV-2 (COVID-19) Ag [Presence] in Respiratory system specimen by Rapid immunoassay"
* subject.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* subject.display = "Stacy Trevor"
* effectiveDateTime = "2021-01-28T11:45:33+11:00"
* issued = "2021-01-28T16:06:21-05:00"
* result.reference = "Observation/observation-at-home-in-vitro-test-result-covid-s-trevor"
* result.display = "SARS-CoV+SARS-CoV-2"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/expansion-parameters-at-home.fsh

Instance: expansion-parameters-at-home
InstanceOf: Parameters
Title: "expansion-parameters-at-home"
Description: "SNOMED-CT US Version"
Usage: #example
* parameter[0].name = "profile-url"
* parameter[=].valueString = "dc8fd4bd-091a-424a-8a3b-6198ef146891"
* parameter[+].name = "system-version"
* parameter[=].valueString = "http://snomed.info/sct|http://snomed.info/sct/731000124108"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/MessageDefinition-at-home-in-vitro-test-results.fsh

Instance: MessageDefinition-at-home-in-vitro-test-results
InstanceOf: MessageDefinition
Title: "MessageDefinition - At-Home In-Vitro Test Results"
Description: "MessageDefinition - At-Home In-Vitro Test Results"
Usage: #example
* url = "http://hl7.org/fhir/us/home-lab-report/MessageDefinition/MessageDefinition-at-home-in-vitro-test-results"
* name = "MessageDefinitionAtHomeInVitroTestResults"
* title = "MessageDefinition - At-Home In-Vitro Test Results"
* status = #active
* experimental = false
* date = "2023-01-07"
* eventCoding = $loinc#96552-5
* focus.code = #Bundle
* focus.profile = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Bundle-at-home-in-vitro-test"
* focus.min = 1
* focus.max = "1"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/messageheader-at-home-in-vitro-test-p-noelle.fsh

Instance: messageheader-at-home-in-vitro-test-p-noelle
InstanceOf: MessageHeaderAtHomeInVitroTestResults
Title: "MessageHeader - At-Home In-Vitro Results - COVID-19 - P Noelle"
Description: "MessageHeader - At-Home In-Vitro Results - COVID-19 - P Noelle Example"
Usage: #example
* eventCoding = $loinc#96552-5

* destination
  * name = "AIMS.INTEGRATION.PRD"
  * receiver = Reference(us-core-organization-aphl-aims-prd)
  * endpoint = "urn:oid:2.16.840.1.114222.4.3.15.1"

* sender = Reference(us-core-organization-acme-corporation)

* source
  * extension.extension[0].url = "vendorOrganization"
  * extension.extension[=].valueReference.reference = "Organization/us-core-organization-acme-corporation"
  * extension.extension[+].url = "softwareBinaryID"
  * extension.extension[=].valueString = "Binary ID unknown"
  * extension.extension[+].url = "softwareInstallDate"
  * extension.extension[=].valueDate = "2022-06-01"
  * extension.url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-source-software-info"
  * name = "ACME Application Server"
  * software = "ACME Application Software"
  * version = "1.2.3.4.5"
  * contact.system = #phone
  * contact.value = "+1 (555) 987 6543"
  * endpoint = "http://at-home-in-vitro-test.org/fhir/endpoint/1"
* focus.reference = "DiagnosticReport/diagnosticreport-at-home-in-vitro-results-covid-p-noelle"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/messageheader-at-home-in-vitro-test-s-trevor.fsh

Instance: messageheader-at-home-in-vitro-test-s-trevor
InstanceOf: MessageHeaderAtHomeInVitroTestResults
Title: "MessageHeaderMessageHeader - At-Home In-Vitro Results - COVID-19 - S Trevor"
Description: "MessageHeaderMessageHeader - At-Home In-Vitro Results - COVID-19 - S Trevor example"
Usage: #example
* eventCoding = $loinc#96552-5

* destination
  * name = "AIMS.INTEGRATION.PRD"
  * receiver = Reference(us-core-organization-aphl-aims-prd)
  * endpoint = "urn:oid:2.16.840.1.114222.4.3.15.1"

* sender = Reference(us-core-organization-abbot)

* source
  * extension.extension[0].url = "vendorOrganization"
  * extension.extension[=].valueReference.reference = "Organization/us-core-organization-reliable-informatics"
  * extension.extension[+].url = "softwareBinaryID"
  * extension.extension[=].valueString = "Binary ID unknown"
  * extension.url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-source-software-info"
  * name = "OneAbbottSol.STAG"
  * software = "ACMELIMS PH"
  * endpoint = "urn:oid:2.16.840.1.113883.3.8589.4.2.7.2"
* focus.reference = "DiagnosticReport/diagnosticreport-at-home-in-vitro-results-covid-s-trevor"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-at-home-in-vitro-test-result-covid-p-noelle-2.fsh

Instance: observation-at-home-in-vitro-test-result-covid-p-noelle-2
InstanceOf: ObservationAtHomeInVitroTestResultCovid
Title: "Observation - At-Home In-Vitro Test Result COVID-19 - P Noelle: Organization Proctor"
Description: "Observation - At-Home In-Vitro Test Result - Covid: P Noelle (proctored by an Organization) example"
Usage: #example
* extension[ExtensionAtHomeInVitroTestProctoredInfo].extension[proctoredTest].url = "proctoredTest"
* extension[ExtensionAtHomeInVitroTestProctoredInfo].extension[proctoredTest].valueBoolean = true
* extension[ExtensionAtHomeInVitroTestProctoredInfo].extension[proctoredBy].url = "proctoredBy"
* extension[ExtensionAtHomeInVitroTestProctoredInfo].extension[proctoredBy].valueReference.reference = "Organization/us-core-organization-proctor"
* extension[ExtensionAtHomeInVitroTestProctoredInfo].url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-proctored-info"
* status = #final
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $loinc#95209-3 "SARS-CoV+SARS-CoV-2 (COVID-19) Ag [Presence] in Respiratory system specimen by Rapid immunoassay"
* code.text = "SARS-CoV+SARS-CoV-2 (COVID-19) Ag [Presence] in Respiratory system specimen by Rapid immunoassay"
* subject.reference = "Patient/patient-at-home-in-vitro-test-patricia-noelle"
* subject.display = "Patricia Noelle"
* effectiveDateTime = "2020-03-10"
* performer.reference = "Patient/patient-at-home-in-vitro-test-patricia-noelle"
* valueCodeableConcept = $sct#260373001 "Detected"
* specimen.reference = "Specimen/specimen-anterior-nares-swab-p-noelle"
* specimen.display = "UR Specimen ID: MLD45-Z4-1234"
* device.reference = "Device/device-fast-sars-antigen-test"
* device.display = "UDI Device ID: 30014613339373"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-at-home-in-vitro-test-result-covid-p-noelle.fsh

Instance: observation-at-home-in-vitro-test-result-covid-p-noelle
InstanceOf: ObservationAtHomeInVitroTestResultCovid
Title: "Observation - At-Home In-Vitro Test Result COVID-19 - P Noelle: Practitioner Proctor"
Description: "Observation - At-Home In-Vitro Test Result - Covid: P Noelle (proctored by a Practitioner) example"
Usage: #example
* extension[ExtensionAtHomeInVitroTestProctoredInfo].extension[proctoredTest].url = "proctoredTest"
* extension[ExtensionAtHomeInVitroTestProctoredInfo].extension[proctoredTest].valueBoolean = true
* extension[ExtensionAtHomeInVitroTestProctoredInfo].extension[proctoredBy].url = "proctoredBy"
* extension[ExtensionAtHomeInVitroTestProctoredInfo].extension[proctoredBy].valueReference.reference = "Practitioner/practitioner-us-core-proctor"
* extension.url = "http://hl7.org/fhir/us/home-lab-report/StructureDefinition/Extension-at-home-in-vitro-test-proctored-info"
* status = #final
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $loinc#95209-3 "SARS-CoV+SARS-CoV-2 (COVID-19) Ag [Presence] in Respiratory system specimen by Rapid immunoassay"
* code.text = "SARS-CoV+SARS-CoV-2 (COVID-19) Ag [Presence] in Respiratory system specimen by Rapid immunoassay"
* subject.reference = "Patient/patient-at-home-in-vitro-test-patricia-noelle"
* subject.display = "Patricia Noelle"
* effectiveDateTime = "2020-03-10"
* performer.reference = "Patient/patient-at-home-in-vitro-test-patricia-noelle"
* valueCodeableConcept = $sct#260373001 "Detected"
* specimen.reference = "Specimen/specimen-anterior-nares-swab-p-noelle"
* specimen.display = "UR Specimen ID: MLD45-Z4-1234"
* device.reference = "Device/device-fast-sars-antigen-test"
* device.display = "UDI Device ID: 30014613339373"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-at-home-in-vitro-test-result-covid-s-trevor.fsh

Instance: observation-at-home-in-vitro-test-result-covid-s-trevor
InstanceOf: ObservationAtHomeInVitroTestResultCovid
Title: "Observation - At-Home In-Vitro Test Result COVID-19 - S Trevor"
Description: "Observation - At-Home In-Vitro Test Result COVID-19 - S Trevor"
Usage: #example
* status = #final
* category[us-core] = $observation-category#laboratory "Laboratory"
* category[us-core].text = "Laboratory"
* code = $loinc#95209-3 "SARS-CoV+SARS-CoV-2 (COVID-19) Ag [Presence] in Respiratory system specimen by Rapid immunoassay"
* code.text = "SARS-CoV+SARS-CoV-2 (COVID-19) Ag [Presence] in Respiratory system specimen by Rapid immunoassay"
* subject.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* subject.display = "Stacy Trevor"
* effectiveDateTime = "2021-01-28T16:06:21-05:00"
* performer.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* valueCodeableConcept = $sct#260373001 "Detected"
* specimen.reference = "Specimen/specimen-swab-internal-nose-s-trevor"
* specimen.display = "P21-0000105078OneReliableSol.STAG"
* device.reference = "Device/device-hometest1-s-trevor"
* device.display = "Acme COVID-19 Home Test_Acme Limited"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-patient-answer-congregate-s-trevor.fsh

Instance: observation-patient-answer-congregate-s-trevor
InstanceOf: ObservationPatientQuestionAnswer
Title: "Observation - Patient Answer - Congregate Living - S Trevor"
Description: "Observation - Patient Answer - Congregate Living - S Trevor example"
Usage: #example
* status = #final
* category[survey] = $observation-category#survey "Survey"
* category[survey].text = "Survey"
* code = $loinc#95421-4 "Whether patient resides in a congregate care setting"
* code.text = "Whether patient resides in a congregate care setting"
* subject.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* subject.display = "Stacy Trevor"
* effectiveDateTime = "2021-01-28T16:06:03-05:00"
* performer.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* valueCodeableConcept = $v2-0532#Y "Yes"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-patient-answer-employed-healthcare-s-trevor.fsh

Instance: observation-patient-answer-employed-healthcare-s-trevor
InstanceOf: ObservationPatientQuestionAnswer
Title: "Observation - Patient Answer - Employed in Healthcare - S Trevor"
Description: "Observation - Patient Answer - Employed in Healthcare - S Trevor example"
Usage: #example
* status = #final
* category[survey] = $observation-category#survey "Survey"
* category[survey].text = "Survey"
* code = $loinc#95418-0 "Whether patient is employed in a healthcare setting"
* code.text = "Whether patient is employed in a healthcare setting"
* subject.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* subject.display = "Stacy Trevor"
* effectiveDateTime = "2021-01-28T16:06:03-05:00"
* performer.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* valueCodeableConcept = $v2-0532#N "No"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-patient-answer-first-test-s-trevor.fsh

Instance: observation-patient-answer-first-test-s-trevor
InstanceOf: ObservationPatientQuestionAnswer
Title: "Observation - Patient Answer - First Test for Condition - S Trevor"
Description: "Observation - Patient Answer - First Test for Condition - S Trevor example"
Usage: #example
* status = #final
* category[survey] = $observation-category#survey "Survey"
* category[survey].text = "Survey"
* code = $loinc#95417-2 "Whether this is the patient's first test for condition of interest"
* code.text = "Whether this is the patient's first test for condition of interest"
* subject.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* subject.display = "Stacy Trevor"
* effectiveDateTime = "2021-01-28T16:06:03-05:00"
* performer.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* valueCodeableConcept = $v2-0532#N "No"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-patient-answer-hospitalized-s-trevor.fsh

Instance: observation-patient-answer-hospitalized-s-trevor
InstanceOf: ObservationPatientQuestionAnswer
Title: "Observation - Patient Answer - Hospitalized - S Trevor"
Description: "Observation - Patient Answer - Hospitalized - S Trevor example"
Usage: #example
* status = #final
* category[survey] = $observation-category#survey "Survey"
* category[survey].text = "Survey"
* code = $loinc#77974-4 "Whether the patient was hospitalized for condition of interest"
* code.text = "Whether the patient was hospitalized for condition of interest"
* subject.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* subject.display = "Stacy Trevor"
* effectiveDateTime = "2021-01-28T16:06:03-05:00"
* performer.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* valueCodeableConcept = $v2-0532#N "No"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-patient-answer-pregnancy-s-trevor.fsh

Instance: observation-patient-answer-pregnancy-s-trevor
InstanceOf: ObservationPatientQuestionAnswer
Title: "Observation - Patient Answer - Pregnancy - S Trevor"
Description: "Observation - Patient Answer - Pregnancy - S Trevor example"
Usage: #example
* status = #final
* category[survey] = $observation-category#survey "Survey"
* category[survey].text = "Survey"
* code = $loinc#82810-3 "Pregnancy status"
* code.text = "Pregnancy status"
* subject.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* subject.display = "Stacy Trevor"
* effectiveDateTime = "2021-01-28T16:06:03-05:00"
* performer.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* valueCodeableConcept = $sct#60001007 "Not pregnant (finding)"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-patient-answer-symptom-onset-covid-p-noelle.fsh

Instance: observation-patient-answer-symptom-onset-covid-p-noelle
InstanceOf: ObservationPatientQuestionAnswer
Title: "Observation - Patient Answer - Symptoms Onset COVID-19 P Noelle"
Description: "Observation - Patient Answer - Symptom Onset COVID-19 P Noelle Example"
Usage: #example
* status = #final
* category[survey] = $observation-category#survey "Survey"
* category[survey].text = "Survey"
* code = $loinc#65222-2 "Date and time of symptom onset"
* code.text = "Date and time of Covid 19 symptom onset"
* subject.reference = "Patient/patient-at-home-in-vitro-test-patricia-noelle"
* subject.display = "Patricia Noelle"
* effectiveDateTime = "2021-03-24"
* performer.reference = "Patient/patient-at-home-in-vitro-test-patricia-noelle"
* valueDateTime = "2021-03-22"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-patient-answer-symptoms-present-covid-p-noelle.fsh

Instance: observation-patient-answer-symptoms-present-covid-p-noelle
InstanceOf: ObservationPatientQuestionAnswer
Title: "Observation - Patient Answer - Symptoms Present COVID-19 P Noelle"
Description: "Observation - Patient Answer - Symptoms Present COVID-19 P Noelle Example"
Usage: #example
* status = #final
* category[survey] = $observation-category#survey "Survey"
* category[survey].text = "Survey"
* code = $loinc#95419-8 "Whether the patient has symptoms related to condition of interest"
* code.text = "Whether the patient has symptoms related to condition of interest"
* subject.reference = "Patient/patient-at-home-in-vitro-test-patricia-noelle"
* subject.display = "Patricia Noelle"
* effectiveDateTime = "2021-03-24"
* performer.reference = "Patient/patient-at-home-in-vitro-test-patricia-noelle"
* valueCodeableConcept = $v2-0532#Y "Yes"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/observation-patient-answer-symptoms-present-covid-s-trevor.fsh

Instance: observation-patient-answer-symptoms-present-covid-s-trevor
InstanceOf: ObservationPatientQuestionAnswer
Title: "Observation - Patient Answer - Symptoms Present - S Trevor"
Description: "Observation - Patient Answer - Symptoms Present - S Trevor example"
Usage: #example
* status = #final
* category[survey] = $observation-category#survey "Survey"
* category[survey].text = "Survey"
* code = $loinc#95419-8 "Whether the patient has symptoms related to condition of interest"
* code.text = "Whether the patient has symptoms related to condition of interest"
* subject.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* subject.display = "Stacy Trevor"
* effectiveDateTime = "2021-01-28T16:06:03-05:00"
* performer.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* valueCodeableConcept = $v2-0532#Y "Yes"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/patient-at-home-in-vitro-test-patricia-noelle.fsh

Instance: patient-at-home-in-vitro-test-patricia-noelle
InstanceOf: PatientAtHomeInVitroTest
Title: "Patient - At-Home In-Vitro Test - Patricia Noelle"
Description: "Patient - At-Home In-Vitro Test - Patricia Noelle Example"
Usage: #example
* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical Record Number"
* identifier.type.text = "Medical Record Number"
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "900"
* active = true
* name.family = "Noelle"
* name.given = "Patricia"
* telecom[0].system = #phone
* telecom[=].value = "555-555-2003"
* telecom[=].use = #home
* telecom[+].system = #email
* telecom[=].value = "Patricia.Noelle@example.com"
* gender = #female
* birthDate = "1954-10-17"
* address.line = "7247 Main St"
* address.city = "Springfield"
* address.district = "Sangamon"
* address.state = "IL"
* address.postalCode = "62707"
* address.country = "US"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/patient-at-home-in-vitro-test-stacy-trevor.fsh

Instance: patient-at-home-in-vitro-test-stacy-trevor
InstanceOf: PatientAtHomeInVitroTest
Title: "Patient - At-Home In-Vitro Test - Stacy Trevor"
Description: "Patient - At-Home In-Vitro Test - Stacy Trevor example"
Usage: #example
* extension[race].extension[ombCategory].url = "ombCategory"
* extension[race].extension[ombCategory].valueCoding = urn:oid:2.16.840.1.113883.6.238#2054-5 "Black or African American"
* extension[race].extension[text].url = "text"
* extension[race].extension[text].valueString = "Black or African American"
* extension[race].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[ethnicity].extension[ombCategory].url = "ombCategory"
* extension[ethnicity].extension[ombCategory].valueCoding = $v3-NullFlavor#UNK "Unknown"
* extension[ethnicity].extension[text].url = "text"
* extension[ethnicity].extension[text].valueString = "Unknown"
* extension[ethnicity].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical Record Number"
* identifier.type.text = "Medical Record Number"
* identifier.system = "http://hospital.reliableorg.org"
* identifier.value = "P21-0000105078"
* active = true
* name.family = "Trevor"
* name.given = "Stacy"
* telecom.system = #phone
* telecom.value = "947-226-0356"
* telecom.use = #home
* gender = #female
* birthDate = "1988-01-21"
* address.line = "11 Norman Drive"
* address.city = "Palatine"
* address.district = "Cook"
* address.state = "IL"
* address.postalCode = "60067"
* address.country = "US"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/practitioner-us-core-proctor.fsh

Instance: practitioner-us-core-proctor
InstanceOf: USCorePractitionerProfile
Title: "Practitioner - US Core - Proctor"
Description: "US Core Practitioner: Test Proctor example"
Usage: #example
* identifier.system = "http://hl7.org/fhir/sid/us-npi"
* identifier.value = "9941339100"
* name.family = "Henry"
* name.given = "Seven"
* name.suffix = "M.D."
* telecom.system = #email
* telecom.value = "henry.seven@example.com"
* address.line[0] = "BMass Doctors"
* address.line[+] = "2100 North Ave"
* address.city = "Burlington"
* address.state = "MA"
* address.postalCode = "02368"
* address.country = "US"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/specimen-anterior-nares-swab-p-noelle.fsh

Instance: specimen-anterior-nares-swab-p-noelle
InstanceOf: SpecimenAtHomeInVitroTestCovid
Title: "Specimen - Anterior Nares Swab - P Noelle"
Description: "Specimen - Anterior Nares Swab: P Noelle example"
Usage: #example
* identifier.system = "http://lab.acme.org/specimens/2021"
* identifier.value = "MLD45-Z4-1234"
* status = #available
* type = $sct#697989009 "Anterior nares swab (specimen)"
* type.text = "Anterior nares swab (specimen)"
* subject.reference = "Patient/patient-at-home-in-vitro-test-patricia-noelle"
* subject.display = "Patricia Noelle"
* receivedTime = "2021-12-03T16:00:00Z"
* collection.collectedDateTime = "2021-12-03T11:00:00Z"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/specimen-swab-internal-nose-s-trevor.fsh

Instance: specimen-swab-internal-nose-s-trevor
InstanceOf: SpecimenAtHomeInVitroTestCovid
Title: "Specimen - Swab Internal Nose - S Trevor"
Description: "Specimen - Swab Internal Nose - S Trevor"
Usage: #example
* identifier.type = $v2-0301#ISO "ISO Object Identifier"
* identifier.system = "http://reliable.org"
* identifier.value = "P21-0000105078OneReliableSol.STAG"
* status = #available
* type = $sct#445297001 "Swab of internal nose (specimen)"
* type.text = "Swab of internal nose (specimen)"
* subject.reference = "Patient/patient-at-home-in-vitro-test-stacy-trevor"
* subject.display = "Stacy Trevor"
* receivedTime = "2021-01-28T16:06:03-05:00"
* collection.collectedDateTime = "2021-01-28T16:06:03-05:00"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/us-core-organization-abbot.fsh

Instance: us-core-organization-abbot
InstanceOf: USCoreOrganizationProfile
Title: "Organization - US Core - Abbot"
Description: "US Core Organization: Abbot example"
Usage: #example
* active = true
* name = "AbbottInformatics"
* identifier.value = "00D0000002"
* identifier.system = "urn:oid:2.16.840.1.113883.4.7"
 

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/us-core-organization-acme-corporation.fsh

Instance: us-core-organization-acme-corporation
InstanceOf: USCoreOrganizationProfile
Title: "Organization - US Core - Acme Corporation"
Description: "US Core Organization: Acme Corporation example"
Usage: #example
* active = true
* name = "Acme Corporation"
* identifier.value = "00D0000003"
* identifier.system = "urn:oid:2.16.840.1.113883.4.7"
* telecom.system = #phone
* telecom.value = "+1(858)552-1100"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/us-core-organization-aphl-aims-prd.fsh

Instance: us-core-organization-aphl-aims-prd
InstanceOf: USCoreOrganizationProfile
Title: "Organization - US Core - APHL AIMS Production"
Description: "US Core Organization: APHL AIMS Production example"
Usage: #example
* active = true
* name = "AIMS.PLATFORM"
* identifier.type = $v2-0301#ISO "ISO Object Identifier"
* identifier.value = "AIMS.PLATFORM"
* identifier.system = "urn:oid:2.16.840.1.114222.4.1.217446"
 

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/us-core-organization-proctor.fsh

Instance: us-core-organization-proctor
InstanceOf: USCoreOrganizationProfile
Title: "Organization - US Core - Proctor"
Description: "US Core Organization: Proctor example"
Usage: #example
* active = true
* name = "Proctor Organization"
* telecom.system = #phone
* telecom.value = "+1(858)552-1111"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/instances/us-core-organization-reliable-informatics.fsh

Instance: us-core-organization-reliable-informatics
InstanceOf: USCoreOrganizationProfile
Title: "Organization - US Core - Reliable Informatics"
Description: "Organization - US Core - Reliable Informatics example"
Usage: #example
* active = true
* name = "Reliable Informatics"
* telecom.system = #phone
* telecom.value = "+1(858)552-1111"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/mappings/hl7v2home.fsh

Mapping: hl7v2home1
Id: hl7v2home
Title: "HL7 V2 At-Home In-Vitro Test Report"
Source: MessageHeaderAtHomeInVitroTestResults
Target: "https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/HL7v2-implementation-guide"
* destination -> "MSH-5"
* destination.name -> "MSH-5.1"
* destination.endpoint -> "MSH-5.2"
* destination.receiver -> "MSH-6" "Located in US Core Organization: Organization.identifier.value->MSH-6.1; Organization.identifier.system->MSH-6.2; Organization.identifier.type->MSH-6.3"
* sender -> "MSH-4" "Located in US Core Organization: Organization.name->MSH-4.1; Organization.identifier[CLIA].value->MSH-4.2; Organization.identifier[CLIA].system=urn:oid:2.16.840.1.113883.4.7->MSH-4.3"
* source -> "MSH-3"
* source.name -> "MSH-3.1"
* source.endpoint -> "MSH-3.2"
* source.software -> "SFT-3"
* source.version -> "SFT-2"

Mapping: hl7v2home2
Id: hl7v2home
Title: "HL7 V2 At-Home In-Vitro Test Report"
Source: ExtensionAtHomeInVitroTestSourceSoftwareInfo
Target: "https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/HL7v2-implementation-guide"
* extension[vendorOrganization] -> "SFT-1"
* extension[softwareBinaryID] -> "SFT-4"
* extension[softwareInstallDate] -> "SFT-6"

Mapping: hl7v2home3
Id: hl7v2home
Title: "HL7 V2 At-Home In-Vitro Test Report"
Source: BundleAtHomeInVitroTest
Target: "https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/HL7v2-implementation-guide"
* timestamp -> "MSH-7"

Mapping: hl7v2home
Id: hl7v2home
Title: "HL7 V2 At-Home In-Vitro Test Report"
Source: DeviceAtHomeInVitroTest
Target: "https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/HL7v2-implementation-guide"
* udiCarrier.deviceIdentifier -> "OBX-17.1"

Mapping: hl7v2home4
Id: hl7v2home
Title: "HL7 V2 At-Home In-Vitro Test Report"
Source: ObservationAtHomeInVitroTestResult
Target: "https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/HL7v2-implementation-guide"
* status -> "OBR-25, OBX-11"
* code -> "OBX-3"
* effective[x] -> "OBX-7.1, OBX-19"
* issued -> "OBR-22.1"
* value[x] -> "OBX-5"

Mapping: hl7v2home5
Id: hl7v2home
Title: "HL7 V2 At-Home In-Vitro Test Report"
Source: ObservationPatientQuestionAnswer
Target: "https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/HL7v2-implementation-guide"
* code -> "OBX-3"
* value[x] -> "OBX-5"

Mapping: hl7v2home6
Id: hl7v2home
Title: "HL7 V2 At-Home In-Vitro Test Report"
Source: PatientAtHomeInVitroTest
Target: "https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/HL7v2-implementation-guide"
* extension[race] -> "PID-10"
* extension[ethnicity] -> "PID-22"
* identifier.system -> "PID-3.4.2"
* identifier.value -> "PID-3.1"
* name -> "PID-5"
* telecom -> "PID-13"
* gender -> "PID-8"
* birthDate -> "PID-7"
* address -> "PID-11"

Mapping: hl7v2home7
Id: hl7v2home
Title: "HL7 V2 At-Home In-Vitro Test Report"
Source: SpecimenAtHomeInVitroTest
Target: "https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/HL7v2-implementation-guide"
* identifier.type -> "SPM-2.2.4"
* identifier.system -> "SPM-2.2.3"
* identifier.value -> "SPM-2.2.1"
* type -> "SPM-4"
* collection.collected[x] -> "SPM-17.1"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/mappings/livd.fsh

Mapping: livd
Id: livd
Title: "LIVD Spreadsheet"
Source: DeviceAtHomeInVitroTest
Target: "https://www.cdc.gov/csels/dls/sars-cov-2-livd-codes.html"
* udiCarrier.deviceIdentifier -> "LOINC Mapping.Testkit Name ID"
* udiCarrier.deviceIdentifier -> "LOINC Mapping.Equipment UID"
* manufacturer -> "LOINC Mapping.Manufacturer"
* deviceName[modelName] -> "LOINC Mapping.Model"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/BundleAtHomeInVitroTest.fsh

Profile: BundleAtHomeInVitroTest
Parent: Bundle
Id: Bundle-at-home-in-vitro-test
Title: "Bundle - At-Home In-Vitro Test"
Description: "This profile constrains the Bundle resource for At-Home In-Vitro Tests."
* identifier 1.. MS
* type = #message (exactly)
* type MS
* timestamp 1..1 MS
* timestamp ^short = "When the bundle was assembled. V2: MSH-7"
* entry MS
* entry ^slicing.discriminator.type = #profile
* entry ^slicing.discriminator.path = "$this.resource"
* entry ^slicing.rules = #open
* entry contains messageHeader 1..1 MS
* entry[messageHeader].resource 1.. MS
* entry[messageHeader].resource only MessageHeaderAtHomeInVitroTestResults
* entry[messageHeader].resource ^short = "MessageHeader - At-Home In-Vitro Test Results"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/DeviceAtHomeInVitroTest.fsh

Profile: DeviceAtHomeInVitroTest
Parent: Device
Id: Device-at-home-in-vitro-test
Title: "Device - At-Home In-Vitro Test"
Description: "This profile constrains the Device resource for At-Home In-Vitro Tests."
* udiCarrier ..1 MS
* udiCarrier.deviceIdentifier 1..1 MS
* udiCarrier.deviceIdentifier ^short = "LIVD Spreadsheet | LOINC Mapping.Testkit Name ID or LIVD Spreadsheet | LOINC Mapping.Testkit Equipment UID V2: OBX-17.1"
* udiCarrier.deviceIdentifier ^definition = "At-Home Test Device identifier. Although most at home test kits will have a single UDI for the \"test kit\" (all in one package of reagents, test card/device, etc.) it is possible for at home kits have a resuable \"reader device\" which would need a distinct \"equipment id\". In this case, the reader device would have an \"equipment UID\" that may be the same for multiple tests performed. For these cases record Equipment UID here, otherwise record Test Kit Name ID here. V2: OBX-17.1"
* udiCarrier.issuer 0..1 MS
* udiCarrier.issuer ^short = "Organization that issues the UDI for this test. Not included in V2 IG."
* manufacturer 0..1 MS
* manufacturer ^short = "LIVD Spreadsheet | LOINC Mapping.Manufacturer"
* manufactureDate MS
* expirationDate 0..1 MS
* expirationDate ^short = "Expiration date of the test kit. Not included in V2 IG."
* expirationDate ^short = "Expiration date of the test kit. Not included in V2 IG."
* lotNumber 0..1 MS
* lotNumber ^short = "Lot number of the test kit. Not included in V2 IG."
* serialNumber 0..1 MS
* serialNumber ^short = "Serial number of the test kit. Not included in V2 IG."
* deviceName ^slicing.discriminator.type = #value
* deviceName ^slicing.discriminator.path = "type"
* deviceName ^slicing.rules = #open
* deviceName contains modelName 1..1
* deviceName[modelName] ^short = "LIVD Spreadsheet | LOINC Mapping.Model"
* deviceName[modelName].name MS
* deviceName[modelName].type = #model-name (exactly)

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/DiagnosticReportAtHomeInVitroResult.fsh

Profile: DiagnosticReportAtHomeInVitroResult
Parent: USCoreDiagnosticReportProfileLaboratoryReporting
Id: DiagnosticReport-at-home-in-vitro-results
Title: "DiagnosticReport - At-Home In-Vitro Results"
Description: "This profile constrains the US Core Diagnostic Report for Laboratory Results profile to At-Home In-Vitro Tests."
* id MS
* extension only ExtensionAtHomeInVitroTestSupportingInfo
* extension MS
* identifier MS
* status only code
* status = #final (exactly)
* code MS
* code ^short = "Consult LIVD: https://www.cdc.gov/csels/dls/livd-codes.html to obtain the values to be used for each particular use case."
* subject only Reference(PatientAtHomeInVitroTest)
* effective[x] only dateTime
* effective[x] MS
* result 1..1 MS
* result only Reference(ObservationAtHomeInVitroTestResult)
* result ^short = "Observation representing the result of the at-home in-vitro test."
* media ^short = "Images related to the test, such as a photo of the test result, images to support proctor interpretation of test results, etc. Not included in V2 IG."

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/DiagnosticReportAtHomeInVitroResultsCovid.fsh

Profile: DiagnosticReportAtHomeInVitroResultsCovid
Parent: DiagnosticReportAtHomeInVitroResult
Id: DiagnosticReport-at-home-in-vitro-results-covid
Title: "DiagnosticReport - At-Home In-Vitro Results - COVID-19"
Description: "This profile further constrains the DiagnosticReport - At-Home In-Vitro Results profile to COVID-19 At-Home In-Vitro Tests."
//* code MS
//* code ^short = "Consult LIVD: https://www.cdc.gov/csels/dls/livd-codes.html to obtain the values to be used for each particular use case."
//* result 1..1 MS
* result only Reference(ObservationAtHomeInVitroTestResultCovid)

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/MessageHeaderAtHomeInVitroTestResults.fsh

Profile: MessageHeaderAtHomeInVitroTestResults
Parent: MessageHeader
Id: MessageHeader-at-home-in-vitro-test-results
Title: "MessageHeader - At-Home In-Vitro Test Results"
Description: "This MessageHeader represents the At-Home In-Vitro Test Results being sent from an application server to a health authority."
* event[x] only Coding
* event[x] = $loinc#96552-5
* event[x] MS
* event[x] ^short = "Result of most recent lab test for condition of interest"
* destination MS
* destination.name MS
* destination.name ^short = "Receiving system namespace (name of destination application). See 'Receiving System Specific Fields' (see Guidance->Getting Started for details). V2: MSH-5.1"
* destination.endpoint MS
* destination.endpoint ^short = "Receiving system OID. See 'Receiving System Specific Fields' (see Guidance->Getting Started for details). V2: MSH-5.2"
* destination.receiver only Reference(USCoreOrganizationProfile)
* destination.receiver MS
* destination.receiver ^short = "Organization.identifier.value & Organization.name: Receiving facility name; Organization.identifier.system: Receiving facility id; Organization.identifier.type: Receiving facility id type. See 'Receiving System Specific Fields' (see Guidance->Getting Started for details). V2: MSH-6.1, MSH-6.2, MSH-6.3"
* sender only Reference(USCoreOrganizationProfile)
* sender MS
* sender ^short = "Organization.name: Sending facility name; Organization.identifier[CLIA].value: Sending facility ID; Organization.identifier[CLIA].system (urn:oid:2.16.840.1.113883.4.7): Sending facility ID type. See 'Obtaining App Specific Identifiers' (see Guidance->Getting Started for details). V2: MSH-4.1, MSH-4.2, MSH-4.3"
* source MS
* source.extension MS
* source.extension ^slicing.discriminator.type = #value
* source.extension ^slicing.discriminator.path = "url"
* source.extension ^slicing.rules = #open
* source.extension ^min = 0
* source.extension contains ExtensionAtHomeInVitroTestSourceSoftwareInfo named sourceSoftwareVendorInfo 0..* MS
* source.extension[sourceSoftwareVendorInfo] ^short = "Source software information (vendor organization, binary id, install date)"
* source.extension[sourceSoftwareVendorInfo] ^min = 0
* source.name MS
* source.name ^short = "Sending system namespace (name of app). If converting FHIR to V2, must be less than 20 characters. V2: MSH-3.1" 
* source.endpoint MS
* source.endpoint ^short = "Sending system OID. See 'Obtaining App Specific Identifiers' (see Guidance->Getting Started for details). V2: MSH-3.2"
* source.software ^short = "Software product name including OS (e.g. Android, iOS). V2: SFT-3"
* source.version MS
* source.version ^short = "Software certified version or release number. V2: SFT-2"
* focus 1..1 MS
* focus only Reference(DiagnosticReportAtHomeInVitroResult)
* focus ^short = "The focus of this message header is a DiagnosticReport."

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/ObservationAtHomeInVitroTestResult.fsh

Profile: ObservationAtHomeInVitroTestResult
Parent: USCoreLaboratoryResultObservationProfile
Id: Observation-at-home-in-vitro-test-result
Title: "Observation - At-Home In-Vitro Test Result"
Description: "This profile constrains the US Core Laboratory Result Observation to At-Home In-Vitro Sample Tests."
* id 1.. MS
* extension only ExtensionAtHomeInVitroTestProctoredInfo
* status = #final (exactly)
* status ^short = "At-Home Test result status final. V2: OBR-25, OBX-11"
* code ^short = "At-Home Test performed code. Consult LIVD: https://www.cdc.gov/csels/dls/livd-codes.html to obtain the values to be used for each particular use case. V2: OBX-3.1, OBX-3.2, OBX-3.3, OBX-3.7"
* subject only Reference(PatientAtHomeInVitroTest)
* effective[x] 1.. MS
* effective[x] only dateTime
* effective[x] ^short = "At-Home Test date of interpretation/result date. The effectiveTime SHALL be precise to at least the minute and SHALL include a time zone offset. NOTE: For multiplex tests, this field must match across all results. V2: OBX-7.1, OBX-19"
* issued MS
* issued ^short = "At-Home Test result date released - when test item is done (in the at-home setting will mostly be the same as the Observation.effective[x], could be different when a proctor is involved - when the proctor releases the result). V2: OBR-22.1"
* performer MS
* performer only Reference(USCorePractitionerProfile or USCorePractitionerRoleProfile or USCoreOrganizationProfile or USCoreCareTeam or PatientAtHomeInVitroTest or USCoreRelatedPersonProfile)
* performer ^short = "If the performer is not the patient being tested, specify the person performing the test."
* value[x] only CodeableConcept
* value[x] MS
* value[x] ^short = "At-Home Test Result value. Consult LIVD: https://www.cdc.gov/csels/dls/livd-codes.html to obtain the values to be used for each particular use case. V2: OBX-5.1, OBX-5.2, OBX-5.3, OBX-5.7"
* specimen 1.. MS
* specimen only Reference(SpecimenAtHomeInVitroTest)
* specimen ^short = "The Specimen SHALL be from at-home sample. The referenced specifimen should contain a Specimen.identifier and a Specimen.identifier.assigner."
* device 1.. MS
* device only Reference(DeviceAtHomeInVitroTest)
* device ^label = "At home test device"
* device ^short = "The referenced device SHALL be at-home test device."
* device ^definition = "The referenced device is an at-home test device, The referenced device **SHALL** contain a Device.udiCarrier.deviceIdentifier. Please see GUDID data base: https://accessgudid.nlm.nih.gov/help/search/basic-search to find the device's UDI"
* hasMember only Reference(ObservationAtHomeInVitroTestResult)
* hasMember ^short = "Multiplex Assay tests that serve as a single test to diagnose infection caused by multiple viruses (e.g. CDC Flu SC2 Multiplex Assay for SARS-CoV-2, influenza A, and/or influenza B viruses) should be recorded using multiple Observation.hasMember elements."

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/ObservationAtHomeInVitroTestResultCovid.fsh

Profile: ObservationAtHomeInVitroTestResultCovid
Parent: ObservationAtHomeInVitroTestResult
Id: Observation-at-home-in-vitro-test-result-covid
Title: "Observation - At-Home In-Vitro Test Result - COVID-19"
Description: "This profile constrains the Observation - At-Home In-Vitro Test Result profile to COVID-19 At-Home In-Vitro Tests."
* code ^short = "Consult LIVD: https://www.cdc.gov/csels/dls/livd-codes.html to obtain the values to be used for the COVID-19 use case."
* value[x] 1.. MS
* value[x] only CodeableConcept
* value[x] ^short = "Consult LIVD: https://www.cdc.gov/csels/dls/livd-codes.html to obtain the values to be used for the COVID-19 use case."
* specimen 1.. MS
* specimen only Reference(SpecimenAtHomeInVitroTestCovid)
* specimen ^short = "The Specimen SHALL be from at-home COVID-19 sample."
* specimen ^definition = "The referenced specimen should contain a Specimen.identifier and a Specimen.identifier.assigner"
* device 1.. MS
* device only Reference(DeviceAtHomeInVitroTest)
* device ^short = "The referenced device is an at-home COVID-19 test device."
* device ^definition = "The referenced device is an at-home COVID-19 test device, and should contain a Device.udiCarrier.deviceIdentifier. Please see GUDID data base: https://accessgudid.nlm.nih.gov/help/search/basic-search to find the device's UDI."

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/ObservationPatientQuestionAnswer.fsh

Profile: ObservationPatientQuestionAnswer
Parent: USCoreObservationScreeningAssessmentProfile
Id: Observation-patient-question-answer
Title: "Observation - Patient Question Answer"
Description: "This profile constrains the FHIR Observation Resource to represent an answer given to a question asked of the patient by the app when recording or uploading their test results."
* code from AtHomeInVitroPatientQuestions (extensible)
* code ^short = "Questions asked of the patient by the app when recording or uploading their at-home in-vitro test results. V2: OBX-3.1, OBX-3.2, OBX-3.3, OBX-3.7"
* code ^binding.description = "Clinical Focus: This set of values contains concepts representing questions asked of the patient by the app when recording or uploading their at-home in-vitro test results."
* value[x] 1..
* value[x] ^short = "Answer given to a question asked of the patient by the app when recording or uploading their test results. V2: OBX-5"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/PatientAtHomeInVitroTest.fsh

Profile: PatientAtHomeInVitroTest
Parent: USCorePatientProfile
Id: Patient-at-home-in-vitro-test
Title: "Patient - At Home In Vitro Test"
Description: "This Patient profile represents an At-Home In-Vitro Test Patient."
* extension[race] ^short = "US Core Race Extension. V2: PID-10.1, PID-10.2, PID-10.3, PID-10.7"
* extension[ethnicity] ^short = "US Core Ethnicity Extension. V2: PID-22.1, PID-22-2, PID-22.3, PID-22.7"
* identifier ^short = "An identifier for this patient: the value that is unique within the system. Unique ID assigned to patient by App provider."
* identifier.system ^short = "See 'Obtaining App Specific Identifiers' (see Guidance->Getting Started for details). V2: PID-3.4.2"
* identifier.value ^short = "Unique ID assigned to patient by App provider. If converting FHIR to V2, must be 100 characters or less. V2: PID-3.1"
* name.family ^short = "Family name (often called 'Surname'). If excluded or not available, use '~^^^^^^S'. V2: PID-5.1"
* name.given ^short = "Given names (not always 'first'). Includes middle names. If excluded or not available, do not populate. V2: PID-5.2, PID-5.3"
* telecom ^short = "A contact detail for the individual V2: PID-13.3, PID-13.4, PID-13.6, PID-13.7"
* gender ^short = "Asserted by the At-Home Test patient. male | female | other | unknown V2: PID-8"
* birthDate 1..1 MS
* birthDate ^short = "The date of birth for the individual. V2: PID-7"
* address.line ^short = "Street name, number, direction & P.O. Box etc. V2: PID-11.1, PID-11-2"
* address.city ^short = "Name of city, town etc. V2: PID-11.3"
* address.district MS
* address.district ^short = "Patient County. V2: PID-11.9"
* address.district from http://phinvads.cdc.gov/fhir/ValueSet/2.16.840.1.114222.4.11.829 (extensible)
* address.state ^short = "Sub-unit of country (abbreviations ok). V2: PID-11.4"
* address.postalCode 1..1 MS
* address.postalCode ^short = "US Zip Codes. V2: PID-11.5"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/SpecimenAtHomeInVitroTest.fsh

Profile: SpecimenAtHomeInVitroTest
Parent: USCoreSpecimenProfile
Id: Specimen-at-home-in-vitro-test
Title: "Specimen - At-Home In-Vitro Test"
Description: "This Specimen profile identifies and describes the specimen used in an At-Home In-Vitro Test."
* identifier MS
* identifier ^short = "At-Home Test Specimen identifier."
* identifier.type ^short = "At-Home Test Specimen ID assigner ID type. 'ISO' V2: SPM-2.2.4"
* identifier.system ^short = "At-Home Specimen ID assigner ID type . See 'Obtaining App Specific Identifiers' (see Guidance->Getting Started for details). If converting FHIR to V2, must be 100 characters or less. V2: SPM-2.2.3"
* identifier.value ^short = "At-Home Test Specimen identifier. {Unique ID assigned to every test by app manufacturer} If converting FHIR to V2, must be 100 characters or less. V2: SPM-2.2.1"
* type ^short = "At-Home Test Specimen type of tissue or material. Consult [LIVD](https://www.cdc.gov/csels/dls/livd-codes.html) to obtain the values to be used for each particular use case. V2: SPM-4.1, SPM-4.2, SPM-4.3, SPM-4.7"
* subject 1..1
* subject ^short = "The subject is the person who took the at-home test."
* collection 1.. MS
* collection.collected[x] 1.. MS
* collection.collected[x] only dateTime
* collection.collected[x] ^short = "At-Home Test Specimen collected date. V2: SPM-17.1"

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/profiles/SpecimenAtHomeInVitroTestCovid.fsh

Profile: SpecimenAtHomeInVitroTestCovid
Parent: SpecimenAtHomeInVitroTest
Id: Specimen-at-home-in-vitro-test-covid
Title: "Specimen - At-Home In-Vitro Test - COVID-19"
Description: "This Specimen profile identifies and describes the specimen used in a COVID-19 At-Home In-Vitro Test."
* type ^short = "Type of tissue or material. Consult LIVD: https://www.cdc.gov/csels/dls/livd-codes.html to obtain the values to be used for the COVID-19 use case."
* type.coding 1.. MS
* type.coding ^short = "The coded specimen type."

---

File: repos/HL7_SLASH_home-lab-report/input/fsh/aliases.fsh

Alias: $v2-0936 = http://terminology.hl7.org/CodeSystem/v2-0936
Alias: $v2-0074 = http://terminology.hl7.org/CodeSystem/v2-0074
Alias: $loinc = http://loinc.org
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $sct = http://snomed.info/sct
Alias: $v2-0532 = http://terminology.hl7.org/CodeSystem/v2-0532
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v2-0301 = http://terminology.hl7.org/CodeSystem/v2-0301

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/change_log.md

### Changes in Unballoted STU Update - STU 1.1 (1.1.0)


|JIRA Ticket|Ticket Description|
|---------|----------|
| [FHIR-46188](https://jira.hl7.org/browse/FHIR-46188) | Remove V2 example messages and mapping spreadsheet |
| [FHIR-45654](https://jira.hl7.org/browse/FHIR-45654) | Getting Started references | 
| [FHIR-45652](https://jira.hl7.org/browse/FHIR-45652) | Character limits not applicable to FHIR | 
| [FHIR-45007](https://jira.hl7.org/browse/FHIR-45007) | DiagnosticReport - At-Home In-Vitro Results - COVID-19 references generic profile rather than specific profile | 
| [FHIR-44718](https://jira.hl7.org/browse/FHIR-44718) | Update IG to be dependent on US Core 6.1.0 | 
| [FHIR-44320](https://jira.hl7.org/browse/FHIR-44320) | HL7 V2 to FHIR Mapping Spreadsheet - remove strikethrough on Patient.identifer.system | 
| [FHIR-44319](https://jira.hl7.org/browse/FHIR-44319) | Update and add hyperlinks, update element descriptions, update titles | 
| [FHIR-41218](https://jira.hl7.org/browse/FHIR-41218) | Update and add hyperlinks, update element descriptions, update titles | 
| [FHIR-41214](https://jira.hl7.org/browse/FHIR-41214) | Update link to mobile requirements | 
| [FHIR-41212](https://jira.hl7.org/browse/FHIR-41212) | Update mappings (FHIR to V2) to align with latest version of HL7 V2 spreadsheet | 
| [FHIR-41211](https://jira.hl7.org/browse/FHIR-41211) | Clarify Sex and Gender | 
| [FHIR-41203](https://jira.hl7.org/browse/FHIR-41203) | Update profile reqs against mobile application guidance | 


---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/downloads.md

**Full Implementation Guide**

The entire implementation guide (including the HTML files, definitions, validation information, etc.) may be downloaded [here](full-ig.zip).

In addition there are format specific definitions files.

* [XML](definitions.xml.zip)
* [JSON](definitions.json.zip)
* [TTL](definitions.ttl.zip)

**Examples:** all the examples that are used in this Implementation Guide available for download:

* [XML](examples.xml.zip)
* [JSON](examples.json.zip)
* [TTl](examples.ttl.zip)

#### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

#### Dependency Table

{% include dependency-table.xhtml %}

#### Globals Table

{% include globals-table.xhtml %}

#### IP Statements

{% include ip-statements.xhtml %}

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/getting_started.md

### Getting Started
[RADx® MARS - Mobile At Home Reporting through Standards](https://www.nibib.nih.gov/covid-19/radx-tech-program/mars) is an initiative aimed at providing guidance and resources for laboratories and healthcare facilities to rapidly implement and scale COVID-19 testing capabilities. One component of the RADx® MARS program is focused on HL7 version 2 (HL7v2) messaging, a widely used standard for healthcare data exchange.

### HL7 V2
Resources for HL7v2-based reporting can be found in the [“Getting Started: HL7v2”](https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/hl7v2-getting-started) page on the RADx® MARS website.

### FHIR
This implementation guide (IG) contains resources for FHIR-based reporting. It constrains the [US Core Diagnostic Report for Laboratory Results](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-diagnosticreport-lab.html) and the  [US Core Laboratory Observation Profile](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-lab.html) for use in transmitting At-Home In-Vitro Test results to downstream health systems, including public health systems.

#### Patient-specific fields
Patient-related fields fall into two categories: (1) user profile (such as name, address, phone) and (2) test results. User profile fields should require a one-time entry by the individual user of the application. Test result fields need to be populated separately every time a test is taken.

#### Sender-specific fields
Sender-specific fields help to uniquely identify the sending application and are shown in the table below:


| Sender-specific field | FHIR Element  |
|-----------------------|---------------|
| Sending system OID   | [MessageHeader-at-home-in-vitro-test-results.source.endpoint](StructureDefinition-MessageHeader-at-home-in-vitro-test-results-definitions.html#diff_MessageHeader.source.endpoint)|
| Sending facility name  | [MessageHeader-at-home-in-vitro-test-results.sender(US Core Organization.name)](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-organization-definitions.html#diff_Organization.name) |
| Sending facility ID  | [MessageHeader-at-home-in-vitro-test-results.sender(US Core Organization.identifier)](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-organization-definitions.html#diff_Organization.identifier:CLIA) |
| Patient ID Assigner  | [Patient-at-home-in-vitro-test.identifier.system](StructureDefinition-Patient-at-home-in-vitro-test-definitions.html#diff_Patient.identifier.system)  |
| Specimen ID Assigner OID  | [Specimen-at-home-in-vitro-test.identifier.system](StructureDefinition-Specimen-at-home-in-vitro-test-definitions.html#diff_Specimen.identifier.system) |
{:.table-striped}

The values of these fields will be provided by the [Association of Public Health Laboratories (APHL)](https://www.aphl.org/Pages/default.aspx) and will be unique to each application.

To request sender-specific field values for your organization and/or application, follow the link below:
 * [Sender-specific field values request form](https://app.smartsheet.com/b/form/7bf44b3acefa4fd38a9ed6a18957a296)

To look up existing sender/receiver-specific field values, follow the link below:
 * [Sender/receiver-specific field values look up](https://aphlinformatics.atlassian.net/wiki/spaces/CRL/pages/1454899212/OID+Report+Look+Up)
 
#### Test-specific fields
Test-specific fields help to uniquely identify the type of test that is taken. A diagnostics company may manufacture different types of tests. Each type of test will have its own unique ID. 

Test-specific fields are available in the CDC-published [LOINC In Vitro Diagnostic (LIVD) Test Code Mapping](https://www.cdc.gov/csels/dls/sars-cov-2-livd-codes.html) spreadsheet. Any references to “LIVD Spreadsheet” within this FHIR IG are referring to the [LIVD Test Code Mapping](https://www.cdc.gov/csels/dls/sars-cov-2-livd-codes.html) spreadsheet.

#### Receiver-specific fields

| Receiving System | [MessageHeader-at-home-in-vitro-test-results.destination.name](StructureDefinition-MessageHeader-at-home-in-vitro-test-results-definitions.html#diff_MessageHeader.destination.name) | [MessageHeader-at-home-in-vitro-test-results.destination.endpoint](StructureDefinition-MessageHeader-at-home-in-vitro-test-results-definitions.html#diff_MessageHeader.destination.endpoint) | [MessageHeader-at-home-in-vitro-test-results.destination.receiver(US Core Organization.identifier.value)](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-organization-definitions.html#diff_Organization.identifier) | [MessageHeader-at-home-in-vitro-test-results.destination.receiver(US Core Organization.identifier.system)](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-organization-definitions.html#diff_Organization.identifier) | [MessageHeader-at-home-in-vitro-test-results.destination.receiver(US Core Organization.identifier.type)](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-organization-definitions.html#diff_Organization.identifier) |
|---|---|---|---|---|---|---|
| APHL AIMS Testing | AIMS.INTEGRATION.STG | urn:oid:2.16.840.1.114222.4.3.15.2 | AIMS.PLATFORM  | urn:oid:2.16.840.1.114222.4.1.217446 | ISO |
| APHL AIMS Production | AIMS.INTEGRATION.PRD | urn:oid:2.16.840.1.114222.4.3.15.1 | AIMS.PLATFORM | urn:oid:2.16.840.1.114222.4.1.217446 | ISO |
| ReportStream | CDC PRIME | urn:oid:2.16.840.1.114222.4.1.237821 | AIMS.PLATFORM | urn:oid:2.16.840.1.114222.4.1.237821 | ISO |
{:.table-striped}


---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/implementation_guide.md

### Implementation Guide Overview

This At-Home In-Vitro Test Implementation Guide creates a common framework (e.g. FHIR resources, FHIR value sets, etc.) that will be leveraged by multiple condition-specific At-Home In-Vitro Test use cases. The framework artifacts included in this guide are intended to be use case independent.

### Framework Profiles

Rather than creating multiple condition-specific profiles that only differ by value set binding for each type of At-Home In-Vitro Test type, this IG contains a set of [framework profiles](artifacts.html#profiles-at-home-in-vitro-test-report-framework) which conform to US Core Profiles (where available) with At-Home In-Vitro specific constraints and/or extensions. Some of the framework profiles are intended to be used as-is and some are intended to be used as a base with further constraints, mainly bindings to condition-specific value sets. Each profile contains information about which type they are and which elements are expected to be further constrained for a specific use case.

There is a set of [COVID-19 use case profiles](artifacts.html#profiles-covid-19-at-home-in-vitro-test-report) which should act as guidance for implementation of different use cases. These profiles have been instantiated in the [example instances](artifacts.html#examples-covid-19-at-home-in-vitro-test-report) included in the guide.

 <table border="1">
  <thead>
    <tr>
      <th>Framework Profile</th>
      <th>Description</th>
      <th>Element to Constrain for Specific Use Case</th>
      <th>Constraint Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="column-width:30%">
        <a href="StructureDefinition-Bundle-at-home-in-vitro-test.html" title="StructureDefinition/Bundle-at-home-in-vitro-test">Bundle - At-Home In-Vitro Test</a>
      </td>
      <td>
        <p>This profile constrains the Bundle resource for At-Home Sample Tests.</p>
      </td>
      <td>Bundle.entry</td>
      <td>Reference to an <a href="StructureDefinition-DiagnosticReport-at-home-in-vitro-results.html" title="StructureDefinition/Observation-at-home-in-vitro-test-result"> DiagnosticReport - Home
        Lab Results</a> constrained to the specific use case</td>
    </tr>
    <tr>
      <td style="column-width:30%">
        <a href="StructureDefinition-Device-at-home-in-vitro-test.html" title="StructureDefinition/Device-at-home-in-vitro-test">Device - At-Home In-Vitro Test</a>
      </td>
      <td>
        <p>This profile constrains the Device resource for At-Home Sample Tests.</p>
      </td>
      <td colspan="2">Use as is for all use cases</td>
    </tr>
    <tr>
      <td style="column-width:30%">
        <a href="StructureDefinition-DiagnosticReport-at-home-in-vitro-results.html" title="StructureDefinition/DiagnosticReport-at-home-in-vitro-results">DiagnosticReport - At-Home In-Vitro Results</a>
      </td>
      <td>
        <p>This profile constrains the US Core DiagnosticReport for Laboratory Results profile to At-Home Sample Tests.</p>
      </td>
      <td>DiagnosticReport.result</td>
      <td>Reference to an <a href="StructureDefinition-Observation-at-home-in-vitro-test-result.html" title="StructureDefinition/Observation-at-home-in-vitro-test-result">Observation - At-Home In-Vitro
        Test Result</a> constrained to the specific use case (e.g. <a href="StructureDefinition-Observation-at-home-in-vitro-test-result.html"
          title="StructureDefinition/Observation-at-home-in-vitro-test-result-covid">Observation - At-Home In-Vitro Test Result - COVID-19</a>)</td>
    </tr>
    <tr>
      <td style="column-width:30%">
        <a href="StructureDefinition-MessageHeader-at-home-in-vitro-test-results.html" title="StructureDefinition/MessageHeader-at-home-in-vitro-test-results">MessageHeader - At-Home In-Vitro Test Results</a>
      </td>
      <td>
        <p>This MessageHeader represents the At-Home In-Vitro Test Results being sent from an application server to a health authority.</p>
      </td>
      <td colspan="2">Use as is for all use cases</td>
    </tr>
    <tr>
      <td style="column-width:30%">
        <a href="StructureDefinition-Observation-patient-question-answer.html" title="StructureDefinition/Observation-patient-question-answer">Observation - Patient Question Answer</a>
      </td>
      <td>
        <p>This profile constrains the FHIR Observation Resource to represent an answer given to a question asked of the patient by the app when recording or uploading their test results.</p>
      </td>
      <td colspan="2">Use as is for all use cases</td>
    </tr>
    <tr>
      <td rowspan="2" style="column-width:30%">
        <a href="StructureDefinition-Observation-at-home-in-vitro-test-result.html" title="StructureDefinition/Observation-at-home-in-vitro-test-result">Observation - At-Home In-Vitro Test Result</a>
      </td>
      <td rowspan="2">
        <p>This profile constrains the US Core Laboratory Result Observation to At-Home Sample Tests.</p>
      </td>
      <td>Observation.code</td>
      <td>Bind to a value set containing the condition-specific test types</td>
    </tr>
    <tr>
      <td>Observation.value[x]</td>
      <td>Bind to a value set containing the condition-specific test results</td>
    </tr>
    <tr>
      <td style="column-width:30%">
        <a href="StructureDefinition-Specimen-at-home-in-vitro-test.html" title="StructureDefinition/Specimen-at-home-in-vitro-test">Specimen - At-Home In-Vitro Test</a>
      </td>
      <td>
        <p>This Specimen profile identifies and describes the specimen used in an At-Home Sample Test.</p>
      </td>
      <td>Specimen.type</td>
      <td>Bind to a value set containing the use case specific specimen types</td>
    </tr>
  </tbody>
</table>

### Underlying Specifications

This guide is based on the [HL7 FHIR]({{site.data.fhir.path}}index.html) standard and the [US Core IG](https://www.hl7.org/fhir/us/core/index.html) specification, which builds additional capabilities on top of FHIR.  This IG is intended to maximize the number of systems that can conform to this guide as well as to allow for easy growth and extensibility of system capabilities in the future.

Implementers of this specification must understand some basic information about the underlying specifications listed above.

#### FHIR

This IG uses terminology, notations and design principles that are specific to the HL7 FHIR standard. Before reading this implementation guide, it is important to be familiar with the basic principles of FHIR and how to read FHIR specifications. Readers who are unfamiliar with FHIR are encouraged to review the following prior to reading the rest of this implementation guide.

* [FHIR overview]({{site.data.fhir.path}}overview.html)
* [Developer's introduction]({{site.data.fhir.path}}overview-dev.html) (or [Clinical introduction]({{site.data.fhir.path}}overview-clinical.html))
* [FHIR data types]({{site.data.fhir.path}}datatypes.html)
* [Using codes]({{site.data.fhir.path}}terminologies.html)
* [References between resources]({{site.data.fhir.path}}references.html)
* [How to read resource & profile definitions]({{site.data.fhir.path}}formats.html)
* [Base resource]({{site.data.fhir.path}}resource.html)

This implementation guide is based on R4 version of the HL7 FHIR Standard.

### FHIR Resources Used

The table below identifies the specific FHIR resources and profiles used in this IG. In most cases, the resources and profiles have been further constrained to meet the needs of the use case described in this IG.

<table>
  <thead>
    <tr>
      <th>FHIR Resource/Profile</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tr>
    <td>
      <a href="{{site.data.fhir.path}}bundle.html">Bundle</a>
    </td>
    <td>Used to group resources for submitting results.</td>
  </tr>
  <tr>
    <td>
      <a href="{{site.data.fhir.path}}device.html">Device</a>
    </td>
    <td>Used to represent At-Home In-Vitro tests.</td>
  </tr>
  <tr>
    <td>
      <a href="http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab">US Core DiagnosticReport for Laboratory Results Reporting</a>
    </td>
    <td>Used to organize the results of an At-Home In-Vitro test.</td>
  </tr>
  <tr>
    <td>
      <a href="{{site.data.fhir.path}}messageheader.html">MessageHeader</a>
    </td>
    <td>Used to specify metadata for routing.</td>
  </tr>

  <tr>
    <td>
      <a href="{{site.data.fhir.path}}observation.html">Observation</a>
    </td>
    <td>Used to represent the results of an At-Home In-Vitro test, presence of related symptoms, symptom onset time.</td>
  </tr>
  <tr>
    <td>
      <a href="http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization">US Core Organization</a>
    </td>
    <td>Representing test manufacturers.</td>
  </tr>
  <tr>
    <td>
      <a href="http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient">US Core Patient</a>
    </td>
    <td>Used to represent the patient taking the At-Home In-Vitro test.</td>
  </tr>
  <tr>
    <td>
      <a href="{{site.data.fhir.path}}specimen.html">Specimen</a>
    </td>
    <td>Used to represent type of specimen used in the At-Home In-Vitro test.</td>
  </tr>
  <tr>
    <td>
      <a href="http://hl7.org/fhir/us/core/StructureDefinition/us-core-location">US Core Location</a>
    </td>
    <td>Used to represent locations in workflows.</td>
  </tr>
  <tr>
    <td>
      <a href="{{site.data.fhir.path}}endpoint.html">Endpoint</a>
    </td>
    <td>Used to represent routing information.</td>
  </tr>
</table>

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/index.md

### Overview

|Implementation Guide (IG) Characteristic  | 	Value |
|------------------------------------------------------|--------------------------------------------|
|**FHIR Version:** |	FHIR R4 |
|**IG Realm:** |	US |
|**IG Type:** |	STU Ballot |
|**Exchange Methods:** |	RESTfulAPI, Messages, Transactions,  Tasks |
|**IG Note:** |	This HL7 FHIR Guide utilizes and adopts guidance or profiles developed in the US Core FHIR&reg; Implementation Guide. This FHIR IG has narrative pages describing the HL7 V2 Message for At-Home In-Vitro Test Reporting. Presently public health departments usually only can handle and store HL7 V2|
{:.table-striped}

|IG Dependencies	|
|----------------------------------|
| [HL7 FHIR US Core Version 6.1.0](http://hl7.org/fhir/us/core/STU6.1/) |
{:.table-striped}


### Background
At-home in-vitro tests have become widely available for self-testing without a prescription. Test results provide value to individuals taking the tests, to their healthcare providers, and to public health authorities who conduct surveillance. Digital platforms have been developed that allow individual test results, with permission of the individual, to be captured, organized, and transmitted to public health systems. With multiple at-home tests already on the market, there is a need for a unified strategy on data standards and flow of test results from digital platforms to downstream health systems.  

### Introduction
This implementation guide (IG) constrains the [US Core Diagnostic Report for Laboratory Results](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-diagnosticreport-lab.html) and the  [US Core Laboratory Observation Profile](http://hl7.org/fhir/us/core/STU6.1/StructureDefinition-us-core-observation-lab.html) for use in transmitting At-Home In-Vitro Test results to downstream health systems, including public health systems. The IG was developed as part of a collaborative project with the NIH/NIBIB, ONC, a vendor manufacturer of diagnostic healthcare products that makes one of the FDA approved At-Home In-Vitro Test kits, and an app developer who is a leading provider of secure interoperability solutions. The intention of this guide is to assist developers in producing and sending standardized FHIR test result data from tests performed at home. FHIR eases app development and the FHIR US Core IG is in a rapid adoption curve. This guide points to already existing US Core Guidance and other guidance with respect to FHIR Parameters, FHIR operations, and RESTful and SMART on FHIR information.

Due to public health department familiarity with HL7v2 and lack of FHIR compatibility, at-home in-vitro test results are currently being sent as V2 lab messages. Longer term, the intent is to leverage FHIR for reporting to public health systems. FHIR should also enable reporting of at-home test results into electronic healthcare record (EHR) systems.

**Please note**: This guide is a framework for future work. It contains “framework” profiles that contain constraints common to all At-Home In-Vitro Test Reporting use cases. These framework profiles can be further constrained to a particular use case such as the COVID-19 At-Home In-Vitro Test Reporting use case. The COVID-19 use case profiles have been created and included in this guide.

### Further Information
[RADx® Mobile At-home Reporting through Standards (MARS)](https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/)

[RADx® MARS - HL7v2 Implementation Guide](https://www.nibib.nih.gov/covid-19/radx-tech-program/mars/HL7v2-implementation-guide)

[LOINC In Vitro Diagnostic (LIVD) Test Code Mapping](https://www.cdc.gov/csels/dls/livd-codes.html)

### Acknowledgements/Primary Authors
* [National Institute of Biomedical Imaging and Bioengineering (NIBIB)](https://www.nibib.nih.gov/covid-19/radx-tech-program/mars)
* [CareEvolution](https://careevolution.com/)
* [Association of Public Health Laboratories](https://www.aphl.org/Pages/default.aspx)
* [Gay Dolin MSN RN (Namaste Informatics)](mailto:gdolin@NamasteInformatics.com)
* [Sarah Gaunt](mailto:sarah.gaunt@lantanaconsulting.com)


### Authors
<table>
<thead>
<tr>
<th>Name</th>
<th>Email/URL</th>
</tr>
</thead>
<tbody>
<tr>
<td>HL7 International - Orders and Observations</td>
<td><a href="http://www.hl7.org/Special/committees/orders/index.cfm" target="_new">http://www.hl7.org/Special/committees/orders/index.cfm</a></td>
</tr>
</tbody>
</table>

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/relationship_to_hl7_v2.md

### COVID-19 At-Home In-Vitro Test Report and V2
As stated in the [Introduction](index.html#introduction), public health agencies are at present primarily only able to receive HL7 V2 messages. Within the V2 message, many of the segments contain “hardcoded” information. Some examples of this are ordering information and app IDs. Even if the COVID-19 At-Home In-Vitro Test is an ordered test (as opposed to an OTC test), neither the app nor the assay will have knowledge of ordering information. This FHIR IG aligns, where appropriate, with known and documented FHIR to V2 mappings. In some cases, where the V2 message is hardcoded or constrained to a specific value, this FHIR specification is not further constrained beyond what is present in US Core, but the elements and attributes are available for use and may be noted in comments.

The data elements in this FHIR IG are determined by the use case, as well as to support translation to a HL7 V2.5.1 ELR R1 compliant message, which is what many public health departments currently require. Elements, especially in the MSH segment, that can be hardcoded for that IG, like the version number or the message event, are not included, but need to be added during translation. ORC elements need to be populated based on the [guidance around OTC reporting](https://confluence.hl7.org/display/OO/Proposed+HHS+ELR+Submission+Guidance+using+HL7+v2+Messages#ProposedHHSELRSubmissionGuidanceusingHL7v2Messages-ReportingatHomeTests).

#### COVID-19 At-Home In-Vitro Test Report to V2 and FHIR Profile Elements Mapping
This FHIR IG profiles specify FHIR-to-V2 mappings within their “Description & Constraints” fields.

### Examples
The FHIR examples for this IG are at the following locations:
* [Examples: COVID-19](artifacts.html#examples-covid-19-at-home-in-vitro-test-report)
* [Examples: Participant](artifacts.html#examples-participant)

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/StructureDefinition-Device-at-home-in-vitro-test-intro.md

The data elements in this profile contain narrative guidance (mappings) to specific columns in the "LOINC Mapping" tab contained in the LIVD Spreadsheet.

Although most at home test kits will have a single udiCarrier.deviceIdentifier for the "test kit" (all in one package of reagents, test card/device, etc.) it is possible for at home kits to have a resuable "reader device" which would need a distinct "equipment id". In this case, the reader device would have an "equipment UID" that may be the same for multiple tests performed. For these cases use multiple Devices - one to represent the test kit (which would have the Test Kit Name ID recorded in Device.udiCarrier.deviceIdentifier) and one to represent the reader device (which would have the Equipment ID recorded in Device.udiCarrier.deviceIdentifier).

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/StructureDefinition-DiagnosticReport-at-home-in-vitro-results-covid-intro.md

This is an example of a profile that is based on a framework profile and futher constrained to meet the requirements of the COVID-19 use case. It is based on the [DiagnosticReport - At-Home In-Vitro Results](StructureDefinition-DiagnosticReport-at-home-in-vitro-results.html) profile. 

It constrains the following elements:
* DiagnosticReport.code - consult [LIVD](https://www.cdc.gov/csels/dls/livd-codes.html) to obtain the values to be used for each particular use case
* DiagnosticReport.result - bound to the COVID-19 specific profile [Observation - At-Home In-Vitro Test Result - COVID-19](StructureDefinition-Observation-at-home-in-vitro-test-result-covid.html)

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/StructureDefinition-DiagnosticReport-at-home-in-vitro-results-intro.md

This is a framework profile and can be the base of another profile that is further constrained to meet the requirements of a specific use case. See [DiagnosticReport - At-Home In-Vitro Test Results - COVID-19](StructureDefinition-DiagnosticReport-at-home-in-vitro-results-covid.html) for an example of such a profile.

The following elements are expected to be constrained to use case specific value sets:
* DiagnosticReport.code - value set containing the use case specific test types (consult [LIVD](https://www.cdc.gov/csels/dls/livd-codes.html) to obtain the values to be used for each particular use case)
* DiagnosticReport.result - Reference to an [Observation - At-Home In-Vitro Test Result](StructureDefinition-Observation-at-home-in-vitro-test-result.html) constrained to the specific use case

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/StructureDefinition-MessageHeader-at-home-in-vitro-test-results-intro.md

See the following pages for guidance:
 * [Using OIDs as Identifiers](technical_guidance.html#using-oids-as-identifiers)
 * [Obtaining App Specific Identifiers](getting_started.html#sender-specific-fields)
 * [Receiving System Specific Fields](getting_started.html#receiver-specific-fields)
 * examples and value set [Hl7VSUniversalIdType](http://terminology.hl7.org/ValueSet/v2-0301) for coding the 'ISO' id type

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/StructureDefinition-Observation-at-home-in-vitro-test-result-covid-intro.md

This is an example of a profile that is based on a framework profile and futher constrained to meet the requirements of the COVID-19 use case. It is based on the [Observation - At-Home In-Vitro Test Result](StructureDefinition-Observation-at-home-in-vitro-test-result.html) profile. 

It constrains the following elements to COVID-19 specific value sets:
* Observation.code - consult [LIVD](https://www.cdc.gov/csels/dls/livd-codes.html) to obtain the values to be used for each particular use case
* Observation.value - consult [LIVD](https://www.cdc.gov/csels/dls/livd-codes.html) to obtain the values to be used for each particular use case

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/StructureDefinition-Observation-at-home-in-vitro-test-result-intro.md

This is a framework profile and can be the base of another profile that is further constrained to meet the requirements of a specific use case. See [Observation - At-Home In-Vitro Test Result - COVID-19](StructureDefinition-Observation-at-home-in-vitro-test-result-covid.html) for an example of such a profile. 

The following elements are expected to be constrained to use case specific value sets:
* Observation.code - value set containing the use case specific test types (consult [LIVD](https://www.cdc.gov/csels/dls/livd-codes.html) to obtain the values to be used for each particular use case)
* Observation.value - value set containing the use case specific test results (consult [LIVD](https://www.cdc.gov/csels/dls/livd-codes.html) to obtain the values to be used for each particular use case)
* For Multiplex Assay tests that serve as a single test to diagnose infection caused by multiple viruses (e.g. CDC Flu SC2 Multiplex Assay for SARS-CoV-2, influenza A, and/or influenza B viruses) use Observation.hasMember to reference another Observation - At-Home In-Vitro Test Result.

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/StructureDefinition-Observation-patient-question-answer-intro.md

The following table shows the Observation.value to use with each of the Observation.code options:

| Observation.code | Description | Observation.value |
| -------- | -------- | -------- |
| 65222-2     | 	Date and time of symptom onset | Date/time |
| 95419-8     | 	Whether the patient has symptoms related to condition of interest | [hl7VS-yes-no-Indicator](http://terminology.hl7.org/ValueSet/v2-0136) |
| 82810-3     | 	Pregnancy status | [US Public Health Pregnancy Status](http://hl7.org/fhir/us/ecr/ValueSet/us-ph-pregnancy-status) |

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/StructureDefinition-Patient-at-home-in-vitro-test-intro.md

It is based on the **US Core Patient** profile with a further constraint for the county (Patient.address.district) where the patient resides.

Patient.gender is the only required "sex" parameter. (Patient.gender is not "gender identity"). Patient.gender is asserted by the patient. As this profile is to be used with at-home test kits, there is no "clinical sex" information on result observations and the receiver would need to keep this in mind when determining the correct sex parameter for clinical use. It should be understood that Patient.gender is not necessarily appropriate to use for interpretation of result observations.

See the following pages for guidance:
 * [Using OIDs as Identifiers](technical_guidance.html#using-oids-as-identifiers)
 * [Obtaining App Specific Identifiers](https://build.fhir.org/ig/HL7/home-lab-report/getting_started.html#sender-specific-fields)
 * examples and value set [Hl7VSUniversalIdType](http://terminology.hl7.org/ValueSet/v2-0301) for coding the 'ISO' id type

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/StructureDefinition-Specimen-at-home-in-vitro-test-covid-intro.md

This is an example of a profile that is based on a framework profile and futher constrained to meet the requirements of the COVID-19 use case. It is based on the [Specimen - At-Home In-Vitro Test](StructureDefinition-Specimen-at-home-in-vitro-test.html) profile. 

It constrains the following element to a COVID-19 specific value set:
* Specimen.type -  consult [LIVD](https://www.cdc.gov/csels/dls/livd-codes.html) to obtain the values to be used for each particular use case

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/StructureDefinition-Specimen-at-home-in-vitro-test-intro.md

This is a framework profile and can be the base of another profile that is further constrained to meet the requirements of a specific use case. See [Specimen - At-Home In-Vitro Test - COVID-19](StructureDefinition-Specimen-at-home-in-vitro-test-covid.html) for an example of such a profile.

The following element is expected to be constrained to a use case specific value set:
* Specimen.type - value set containing the use case specific specimen types (consult [LIVD](https://www.cdc.gov/csels/dls/livd-codes.html) to obtain the values to be used for each particular use case)

See the following pages for guidance:
 * [Using OIDs as Identifiers](technical_guidance.html#using-oids-as-identifiers)
 * [Obtaining App Specific Identifiers](https://build.fhir.org/ig/HL7/home-lab-report/getting_started.html#sender-specific-fields)
 * examples and value set [Hl7VSUniversalIdType](http://terminology.hl7.org/ValueSet/v2-0301) for coding the 'ISO' id type

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/technical_guidance.md

### Modeling

#### US Core Laboratory Report vs. US Core Diagnostic Report

The [US Laboratory Observation Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-lab) is intended to record or update single laboratory results (though it can also contain component results - see [Multiplex Tests](#multiplex-tests)). An At-Home In-Vitro Test and Result is a “one at a time” test that is performed and resulted. Each test and result consists of a single test kit. A test kit can be a Multiplex Assay test that serves as a single test to diagnose infection caused by multiple viruses. Only one Observation is allowed per DiagnosticReport - that one Observation can contain multiple hasMembers that reference the results of the multiplex assay tests. The [US Core Diagnostic Report Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab) is used to group and summarize test results by reference. Public health agencies in most cases today, can only receive and record HL7 V2 messages. The V2 Lab Report message, by consensus, has been mapped to Diagnostic Report. Therefore, this guide has leveraged the [US Core Diagnostic Report Profile](http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab) to send this single result. In addition, it was necessary to leverage the FHIR [SupportingInfo extension](http://hl7.org/fhir/StructureDefinition/workflow-supportingInfo) to hold answers to questions patients are asked by the app when recording or uploading their test results.

#### Multiplex tests
Multiplex Assay tests that serve as a single test to diagnose infection caused by multiple viruses (e.g. CDC Flu SC2 Multiplex Assay for SARS-CoV-2, influenza A, and/or influenza B viruses), use multiple Observation.hasMember to record each type of test in a reference to another Observation.

### Serial Testing
Based on updated guidance from FDA advising that tests be repeated multiple times conditioned on symptoms, the guidance to record this is to use [Observation - Patient Question Answer](StructureDefinition-Observation-patient-question-answer.html) to ask whether patient has previously taken a test and can then determine other tests and their sequence by finding other tests taken by patient and using date.

### RESTful FHIR Interactions Quick Start Guidance
Please see the US Core Quick start sections of each US Core profile for an overview of search and read operations for that profile.

### SMART App Launch
Please see [SMART App Launch](http://www.hl7.org/fhir/smart-app-launch/) for guidance around SMART apps including IDs.
This flow is not the same as an App that integrates with an EHR - so the sequence diagram is likely simpler.

### Extended Operations on the RESTful API
Please see [Extended Operations on the RESTful API](http://hl7.org/fhir/R4/operations.html) for guidance on a set of common interactions (read, update, search, etc.) performed on a repository of typed resources. These interactions follow the RESTful paradigm of managing state by Create/Read/Update/Delete actions on a set of identified resources.

### FHIR Bundle Resource
Given that the COVID-19 At-Home In-Vitro Test Report use case consists of a single test or series of tests, independently run by a patient, and is resulted from a "Lateral Flow Assay" device and then collected and/or sent by an App, there is no database (e.g. EHR database) from which referenced resources can be queried and returned.  As such, any resource representing the lab result itself, "ask at order" (AOE) answers, etc. will need to be packaged together into a Bundle resource. As outlined in the Scope and Usage section of the [Resource Bundle](https://www.hl7.org/fhir/R4/bundle.html), the primary “bundling” function for this use case is “Sending a set of resources as part of a message exchange".

### Using OIDs as Identifiers
A numeric or alphanumeric string that is associated with a single object or entity within a given system. One type of identifier is an OID (object identifier). See the [FHIR identifier data type guidance](http://hl7.org/fhir/R4/datatypes.html#identifier) for further details on using OIDs as Identifiers, specifially the paragraph that discusses the case when the identifier value itself is naturally a globally unique URI.

---

File: repos/HL7_SLASH_home-lab-report/input/pagecontent/workflow.md

### Workflow (generic/typical workflow - informative)
A generic or typical At-Home In-Vitro Test Report use case starts when a patient either purchases an over the counter (OTC) at-home test or receives an ordered at-home test. The patient interacts with an At-Home In-Vitro Test app. The test result is then either:
 * manually entered into a web or mobile app, or
 * scanned by reader device which interprets the test and passes it to a mobile app.

A single patient may run more than one test. Each test result is a new interaction with the app.

The patient may be asked questions by the app, such as presence or absence of use case-specific symptoms. The questions and answers are considered to be supporting information and similar to “Ask at Order Entry” (AOE) questions. These questions are not considered the same as “Ask at Order Entry” (AOE) questions by lab standards experts because:

 * the answers to the questions do not affect the interpretation of the positive or negative result
 * they are there to support public health surveillance

This solution of representing the information with the [supportingInfo Extension](StructureDefinition-Extension-at-home-in-vitro-test-supporting-info.html) was chosen during the COVID-19 pandemic, as it is a supported way for laboratories to add information to their LIS and subsequently send it out. Long term, this information should be coming from other systems to public health systems, so the lab does not need to store information just for the sake of forwarding it. 

Whether the at-home test is ordered or purchased OTC, the app will not have access to the order details. Therefore, the ServiceRequest for the order will not be constrained in this IG.

Rather than apps establishing individual relationships with federal and state public health agencies, apps negotiate relationships with a data hub (i.e., routing service), which then relays the At-Home In-Vitro Test result to federal and state public health agencies with whom the hub has previously established relationships. This reduces the burden on the app manufacturer.


### Workflow (using the COVID-19 At-Home In-Vitro Test Report use case - normative)
The COVID-19 At-Home In-Vitro Test Report use case starts when a patient either purchases an OTC COVID-19 at-home test or receives an ordered COVID-19 at-home test. The patient interacts with a COVID-19 At-Home In-Vitro Test app. The test result is then either:

 * manually entered into a web or mobile app, or
 * scanned by a reader device which interprets the test and passes it to a mobile app.

A single patient may run more than one test. Each test result is a new interaction with the app.

The patient is asked questions by the app, such as presence or absence of COVID-19-like symptoms.

The app negotiates relationships with a data hub, which then relays the At-Home In-Vitro Test result to federal and state public health agencies with whom the hub has previously established relationships.

#### COVID-19 At-Home In-Vitro Test Report Workflow
<table><tr><td><img src="CovidAtHomeworkflow.png" /></td></tr></table>

---

