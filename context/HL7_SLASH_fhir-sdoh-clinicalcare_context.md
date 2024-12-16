File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/codesystems/SDOHCCCodeSystemTemporaryCodes.fsh

CodeSystem: SDOHCCCodeSystemTemporaryCodes
Id: SDOHCC-CodeSystemTemporaryCodes
Title: "SDOHCC CodeSystem Temporary Codes"
Description: "A local code system defined within the context of the SDOH-CC IG."
* ^status = #active
* ^content = #complete
* ^version = "0.1.0"
* ^experimental = false
* ^purpose = "The purpose of this code system is to enable temporary codes to be assigned to concepts that are needed to document SDOH-related data elements defined by the Gravity Project community and concepts that are needed to facilitate the use of FHIR to exchange data as required in the use cases covered by this IG.  After the IG has been sufficiently tested through HL7 Connectathons and the coded concepts have been confirmed as fit for the intended purpose, and consensus on the use of the codes has been confirmed through the HL7 Ballot process, the temporary codes will be replaced with coded concepts established within nationally recognized, open code systems.  The replacement of temporary codes with permanent codes is intended to happen in a future version of the IG."
* ^copyright = "(c) 2020 HL7.org"
* ^caseSensitive = true
* ^count = 46
* #sdoh-category-unspecified "SDOH Category Unspecified" "Category for Social Determinant of Health artifacts that are not further specified with respect to category."
* #food-insecurity "Food Insecurity" "Category for Social Determinant of Health artifacts that pertain to Food Insecurity (which is defined as: Uncertain, limited, or unstable access to food that is: adequate in quantity and in nutritional quality; culturally acceptable; safe and acquired in socially acceptable ways.) This SDOH category covers records relevant to circumstances that range from Food Insecurity to Food Security."
* #housing-instability "Housing Instability" "Category for Social Determinant of Health artifacts that pertain to Housing Instability (which is defined as: Currently consistently housed, but experiencing any of the following circumstances in the past 12 months: being behind on rent or mortgage, multiple moves, or housing cost burden.) This SDOH category covers records relevant to circumstances that range from Housing Instability to Stably Housed."
* #homelessness "Homelessness" "Category for Social Determinant of Health artifacts that pertain to Homelessness (which is defined as including: 1) Sheltered Homelessness: because of economic difficulties, currently living in a shelter, motel, temporary or transitional living situation, scattered-site housing, or not having a consistent place to sleep at night; and 2) Unsheltered Homelessness: residing in a place not meant for human habitation, such as cars, parks, sidewalks, abandoned buildings, on the street.) This SDOH category covers records relevant to circumstances that range Homelessness to Housed."
* #inadequate-housing "Inadequate Housing" "Category for Social Determinant of Health artifacts that pertain to Inadequate Housing (which is defined as: Housing does not meet habitability standards.) This SDOH category covers records relevant to circumstances that range from Inadequate Housing to Adequate Housing."
* #transportation-insecurity "Transportation Insecurity" "Category for Social Determinant of Health artifacts that pertain to Transportation Insecurity (which is defined as: Uncertain, limited, or no access to safe, reliable, accessible, affordable, and socially acceptable transportation infrastructure and modalities necessary for maintaining one’s health, well-being, or livelihood.) This SDOH category covers records relevant to circumstances that range from Transportation Insecurity to Transportation Security."
* #financial-insecurity "Financial Insecurity" "Category for Social Determinant of Health artifacts that pertain to Financial Insecurity (which is defined as: A state of being wherein a person has difficulty fully meeting current and/or ongoing financial obligations and/or does not feel secure in their financial future.) This SDOH category covers records relevant to circumstances that range from Financial Insecurity to Financial Security."
* #material-hardship "Material Hardship" "Category for Social Determinant of Health artifacts that pertain to Material Hardship (which is defined as: The lack of specific socially perceived basic physical necessities.) This SDOH category covers records relevant to circumstances that range from 'Unable to obtain physical necessity X' to 'Able to obtain physical necessity X'."
* #educational-attainment "Educational Attainment" "Category for Social Determinant of Health artifacts that pertain to the level of education attained (which, in this context, is defined by whether one has or has not met academic criteria for high school diploma or equivalent.) This SDOH category covers records relevant to circumstances that range from 'Lacks a high school diploma/certificate' to 'Has a high school diploma/certificate'."
* #employment-status "Employment Status" "Category for Social Determinant of Health artifacts that pertain to the status of one's employment (which, in this context, is defined by whether one has or does not have a job and is looking for and available for work). This SDOH category covers records relevant to circumstances that range from 'In labor force' (Unemployed to Employed), or 'Not in labor force'."
* #veteran-status "Veteran Status" "Category for Social Determinant of Health artifacts that pertain to veteran status (which, in this context, is defined by whether one has or has not served as active military with honorable release or discharge.) This SDOH category covers records relevant to circumstances that range from 'History of military service' to 'No history of military service'."
* #stress "Stress" "Category for Social Determinant of Health artifacts that pertain to Stress (which is defined as: When a person perceives the demands of environmental stimuli to be greater than their ability to meet, mitigate, or alter those demands.) This SDOH category covers records relevant to circumstances that range from Stress to 'No stress'."
* #social-connection "Social Connection" "Category for Social Determinant of Health artifacts that pertain to Social Connection (which is defined as: An umbrella term that encompasses the structural, functional, and quality aspects of how individuals connect to each other.) This SDOH category covers records relevant to circumstances that range from inadequate social connections to adequate/satisfying social connections."
* #intimate-partner-violence "Intimate Partner Violence" "Category for Social Determinant of Health artifacts that pertain to Intimate Partner Violence (IPV) (which is defined as: Physical violence, sexual violence, or psychological harm by a current or former partner or spouse. Often including a pattern of methods and tactics to gain and maintain power and control over the other person.) This SDOH category covers records relevant to circumstances that range from being a victim of IPV to not being a victim of IPV."
* #elder-abuse "Elder Abuse" "Category for Social Determinant of Health artifacts that pertain to Elder Abuse (which is defined as: An intentional act or failure to act by a caregiver or another person in a relationship involving an expectation of trust that causes or creates a risk of harm to an older adult and can be in the form of physical abuse, psychological abuse, sexual abuse, financial abuse, and/or neglect by someone in a caregiving role.) This SDOH category covers records relevant to circumstances that range from being a victim of elder abuse to not being a victim of elder abuse."
* #personal-health-literacy "Personal Health Literacy" "Category for Social Determinant of Health artifacts that pertain to Personal Health Literacy (which is defined by Healthy People 2030 as: The degree to which individuals have the ability to find, understand, and use information and services to inform health-related decisions and actions for themselves and others.) This SDOH category covers records relevant to circumstances that range from personal health literacy problems/diagnoses to positive findings/goals related to personal health literacy."
* #health-insurance-coverage-status "Health Insurance Coverage Status" "Category for Social Determinant of Health artifacts that pertain to health insurance coverage (which is defined by whether one has, or does not have, healthcare coverage or insurance.) This SDOH category covers records relevant to circumstances that range from 'no health insurance coverage' to 'health insurance coverage'."
* #medical-cost-burden "Medical Cost Burden" "Category for Social Determinant of Health artifacts that pertain to medical cost burden (which is defined as: A measure of financial pressure resulting from health spending stemming from inadequate resources to meet medical cost needs.) This SDOH category covers records relevant to circumstances that range from 'financial insecurity due to medical cost burden' to 'no burdensome medical costs/debt'."
* #digital-literacy "Digital Literacy" "Category for Social Determinant of Health artifacts that pertain to Digital Literacy (which, based off the United States Agency for International Development (USAID) definition is defined as: The degree to which individuals have the ability to access, manage, understand, integrate, communicate, evaluate, and create information safely and appropriately through digital devices and networked technologies for participation in economic, social, and political life). This SDOH category covers records relevant to circumstances that range from digital literacy problems/diagnoses to positive findings/goals related to digital literacy."
* #digital-access "Digital Access" "Category for Social Determinant of Health artifacts that pertain to Digital Access (which is defined as: Lacking adequate internet (reliable and of sufficient speed to participate in day-to-day and work life) or a digital device to access the internet (the device must be appropriate for the user’s functional abilities)). This SDOH category covers records relevant to circumstances that range from digital access problems/diagnoses to positive findings/goals related to digital access."
* #utility-insecurity "Utility Insecurity" "Category for Social Determinant of Health artifacts that pertain to Utility Insecurity (which includes Energy Insecurity and Water Insecurity and is defined as: Inability to adequately (safely, stably, affordably, and sustainably) meet basic household energy needs (e.g., heating, cooling, lighting, cooking, refrigeration, medical and electronic devices, etc.) and/or water needs (e.g., drinking, cooking or preparing food, bathing, laundry, etc.) due to energy and/or water service difficulties). This SDOH category covers records relevant to circumstances that range from Utility Insecurity to Utility Security."


* #resulting-activity "Resulting Activity" "Code used for Task.output.type to represent the activity/action that is the result of a fulfilled task."
* #sdoh-condition-category "Current Condition Category From SDOH Category" "Code used for Group.characteristic to identify Group members with a current SDOH Condition (identified by a Condition with Condition.category from SDOH domain value set referenced by Group.characteristic.value)."
* #payer-coverage "Coverage By Payer Organization" "Code used for Group.characteristic to identify Group members currently covered by a specific payer organization."
* #general-information "General Information" "Designates that information with respect to an action to be performed 1) will be captured in Task.description in text form AND 2) has no computable expectation AND 3) any resulting response will be captured in Task.Output.GeneralInformationResponse.value as markdown."
* #make-contact "Make Contact" "Designates that the action performed is to make contact (e.g., schedule an appointment, call for results, etc.) with a designated entity (e.g., a healthcare provider, social program, etc.). Details about the reason for the contact may captured elsewhere"
* #review-material "Review Material" "Designates that the action performed is to review material (e.g., attached instructions). Details about the type of material to be reviewed, the reason for reviewing the material, etc. may be captured elsewhere."
* #risk-questionnaire "Risk Questionnaire" "A type of questionnaire that evaluates SDOH-related risk(s)."
* #feedback-questionnaire "Feedback Questionnaire" "A type of questionnaire that obtains feedback on a service that was offered or received."
* #application-questionnaire "Application Questionnaire" "A type of questionnaire that obtains information required on an application (e.g., for a social service program, insurance, benefits, etc.)."
* #personal-characteristics-questionnaire "Personal Characteristics Questionnaire" "A type of questionnaire that obtains information about an individual's personal characteristics (e.g., sexual orientation, gender identity, etc.)."
* #contact-entity "Contact Entity" "Identifies an entity (e.g., a practitioner, organization, or service) that needs to be contacted."
* #general-information-response "General Information Response" "When Task.code is 'general-information', 'general-information-response' for Task.output.type indicates that a free text response can be provided."
* #questionnaire-category "Questionnaire Category" "Identifies the category of questionnaire that should be completed."
* #questionnaire-pdf "Questionnaire PDF" "Identifies the questionnaire PDF to be completed."
* #questionnaire-url "Questionnaire URL" "Identifies the URL where a questionnaire to be completed can be accessed."
* #questionnaire-pdf-completed "Questionnaire PDF Completed" "Identifies the completed questionnaire PDF."
* #contacting-subject-prohibited "Contacting Subject Prohibited" "Identifies that the subject does not want to be contacted for any reason related to this request. There will be alternate arrangements made with respect to contact by the subject or someone acting on their behalf."
* #self-reported "Self Reported" "The subject reported the information about the subject."
* #reported-by-related-person "Reported By Related Person" "Someone related to the subject reported the information about the subject."
* #observed "Observed" "Direct observation of the subject was used to obtain information about the subject."
* #administrative "Administrative" "The information about the subject was collected by an organization for administrative reasons not necessarily directly related to obtaining healthcare or health insurance."
* #derived-specify "Derived Specify" "The information about the subject was derived from information or methods other than directly reported by an individual. Text or derivedFrom should be used to further specify the method."
* #other-specify "Other Specify" "The actual value is not a member of the set of permitted data values in the constrained value domain of a variable. Text should be used to further specify the value."
* #personal-characteristic "Personal Characteristic" "Category for artifacts that pertain to a personal characteristic (characteristics that are usually self-attested but may be attested to on behalf of the subject and are generally only verifiable by the source of attestation (e.g., sexual orientation, gender identity and personal pronouns), but may sometimes be verifiable by someone other than the source of attestation (e.g., recorded sex))."
* #chosen-contact "Chosen Contact" "Identifies the entity (e.g., a practitioner, organization, or service) that was contacted."

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/extensions/SDOHCCExtensionConditionAsserter.fsh

Extension: SDOHCCExtensionConditionAsserter
Id: SDOHCC-ExtensionConditionAsserter
Title: "SDOHCC Extension Condition Asserter"
Description: "Extension for allowing the asserter of a condition to be Device (that was used to perform an operation to arrive at the condition)."
* ^status = #active
* ^context.type = #element
* ^context.expression = "Condition"
* value[x] only Reference

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/extensions/SDOHCCExtensionHealthcareServiceTelecomAppointment.fsh

Extension: SDOHCCExtensionHealthcareServiceTelecomAppointment
Id: SDOHCC-ExtensionHealthcareServiceTelecomAppointment
Title: "SDOHCC Extension HealthcareService Telecom Appointment"
Description: "Extension for flagging a HealthcareService.telecom as one the patient can use to make an appointment."
* ^status = #active
* ^context.type = #element
* ^context.expression = "HealthcareService.telecom"
* . ..1
* . ^short = "Telecom is for making appointments"
* . ^definition = "For flagging a HealthcareService.telecom as one the patient can use to make an appointment."
* value[x] 1..
* value[x] only boolean
* value[x] = true (exactly)

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/pat-53234.fsh

Instance: pat-53234
InstanceOf: USCorePatientProfile
Title: "Patient Colin Abbas Example"
Description: "An example of a patient. This example is used as the referenced patient in other examples in this IG."
Usage: #example
* extension[0].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* extension[=].extension[+].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#1002-5 "American Indian or Alaska Native"
* extension[=].extension[+].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2028-9 "Asian"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#1586-7 "Shoshone"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2036-2 "Filipino"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Mixed"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
* extension[+].extension[0].url = "ombCategory"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2184-0 "Dominican"
* extension[=].extension[+].url = "detailed"
* extension[=].extension[=].valueCoding = urn:oid:2.16.840.1.113883.6.238#2148-5 "Mexican"
* extension[=].extension[+].url = "text"
* extension[=].extension[=].valueString = "Hispanic or Latino"
* extension[=].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
* extension[+].url = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex"
* extension[=].valueCode = #M
* identifier.use = #usual
* identifier.type = $v2-0203#MR "Medical Record Number"
* identifier.type.text = "Medical Record Number"
* identifier.system = "http://hospital.smarthealthit.org"
* identifier.value = "1032702"
* active = true
* name[0].family = "ABBAS"
* name[=].given[0] = "COLIN"
* name[=].given[+] = "V."
* name[=].period.start = "2016-12-06"
* name[=].period.end = "2020-07-22"
* name[+].family = "BAXTER"
* name[=].given[0] = "COLIN"
* name[=].given[+] = "V."
* name[=].suffix = "PharmD"
* name[=].period.start = "2020-07-22"
* telecom.system = #phone
* telecom.value = "555-555-5555"
* telecom.use = #home
* gender = #male
* birthDate = "1987-02-20"
* address[0].line = "49 Meadow St"
* address[=].city = "Mounds"
* address[=].state = "OK"
* address[=].postalCode = "74047"
* address[=].country = "US"
* address[=].period.start = "2016-12-06"
* address[=].period.end = "2020-07-22"
* address[+].line = "183 Mountain View St"
* address[=].city = "Mounds"
* address[=].state = "OK"
* address[=].postalCode = "74048"
* address[=].country = "US"
* address[=].period.start = "2020-07-22"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ConditionAsserterDeviceExample.fsh

Instance: SDOHCC-ConditionAsserterDeviceExample
InstanceOf: SDOHCCCondition
Title: "SDOHCC Condition Asserter Device Example"
Description: "An example of a food insecurity Condition that references, as evidence, Observations derived from the LOINC Hunger Vital Sign [HVS] questionnaire (88121-9) and uses an extension on Condition.asserter to reference the software device that uses the answers to HVS questions 1 and 2 to derive the answer to HVS question 3 (at risk for food insecurity)."
Usage: #example
* extension.url = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ExtensionConditionAsserter"
* extension.valueReference.reference = "Device/SDOHCC-DeviceSoftwareExample"
* extension.valueReference.display = "Application program software"
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#unconfirmed "Unconfirmed"
* category[0] = $condition-category#health-concern "Health Concern"
* category[+] = $SDOHCC-CodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* code.coding[0] = $sct#733423003 "Food insecurity"
* code.coding[+] = $icd-10-cm#Z59.4 "Lack of adequate food"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* onsetPeriod.start = "2019-08-18T12:31:35.123Z"
* evidence.detail.reference = "Observation/SDOHCC-ObservationResponseHungerVitalSignQuestion3Example"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ConditionFoodInsecurityExample.fsh

Instance: SDOHCC-ConditionFoodInsecurityExample
InstanceOf: SDOHCCCondition
Title: "SDOHCC Condition Food Insecurity Example"
Description: "An example of a food insecurity Condition (a health concern) that references, as evidence, Observations derived from the LOINC Hunger Vital Sign [HVS] questionnaire (88121-9)."
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#unconfirmed "Unconfirmed"
* category[0] = $condition-category#health-concern "Health Concern"
* category[+] = $SDOHCC-CodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* code.coding[0] = $sct#733423003 "Food insecurity"
* code.coding[+] = $icd-10-cm#Z59.4 "Lack of adequate food"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* onsetPeriod.start = "2019-08-18T12:31:35.123Z"
* evidence.detail.reference = "Observation/SDOHCC-ObservationResponseHungerVitalSignQuestion3Example"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ConditionHomelessExample.fsh

Instance: SDOHCC-ConditionHomelessExample
InstanceOf: SDOHCCCondition
Title: "SDOHCC Condition Homeless Example"
Description: "An example of a homelessness Condition (a health concern) that is based on an Observation related to housing status that is derived from a QuestionnaireResponse to PRAPARE (represented in LOINC)."
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#unconfirmed "Unconfirmed"
* category[0] = $condition-category#health-concern "Health Concern"
* category[+] = $SDOHCC-CodeSystemTemporaryCodes#homelessness "Homelessness"
* code.coding[0] = $sct#32911000 "Homeless"
* code.coding[+] = $icd-10-cm#Z59.0 "Homelessness"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* onsetPeriod.start = "2021-04-26T13:56:33.747Z"
* asserter.reference = "Patient/pat-53234"
* asserter.display = "COLIN ABBAS"
* evidence.detail.reference = "Observation/SDOHCC-ObservationResponsePRAPAREHousingStatusExample"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ConditionUnemployedExample.fsh

Instance: SDOHCC-ConditionUnemployedExample
InstanceOf: SDOHCCCondition
Title: "SDOHCC Condition Unemployed Example"
Description: "An example of a Condition (a health concern) that is based on an Observation related to employment status that is derived from a QuestionnaireResponse to PRAPARE (represented in LOINC)."
Usage: #example
* clinicalStatus = $condition-clinical#active "Active"
* verificationStatus = $condition-ver-status#unconfirmed "Unconfirmed"
* category[0] = $condition-category#health-concern "Health Concern"
* category[+] = $SDOHCC-CodeSystemTemporaryCodes#employment-status "Employment Status"
* code.coding[0] = $sct#73438004 "Unemployed"
* code.coding[+] = $icd-10-cm#Z56.0 "Unemployment, unspecified"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* onsetPeriod.start = "2021-04-26T13:56:33.747Z"
* asserter.reference = "Patient/pat-53234"
* asserter.display = "COLIN ABBAS"
* evidence.detail.reference = "Observation/SDOHCC-ObservationResponsePRAPAREEmploymentStatusExample"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ConsentInformationDisclosureExample.fsh

Instance: SDOHCC-ConsentInformationDisclosureExample
InstanceOf: SDOHCCConsent
Title: "SDOHCC Consent Information Disclosure Example"
Description: "An example of a Consent for information disclosure related to SDOH information.   A [PDF](ExampleConsent.pdf) is attached to this consent."
Usage: #example
* status = #active
* scope = $consentscope#patient-privacy "Privacy Consent"
* category[IDSCL] = $v3-ActCode#IDSCL "information disclosure"
* patient.reference = "Patient/pat-53234"
* patient.display = "Colin Abbas"
* dateTime = "2021-05-01"
* organization.reference = "Organization/SDOHCC-OrganizationPayerExample"
* sourceAttachment.contentType = #application/pdf
* sourceAttachment.language = #en
* sourceAttachment.data = "JVBERi0xLjUKJeLjz9MKMiAwIG9iago8PAovTGFuZyAoZW4tVVMpCi9UeXBlIC9DYXRhbG9nCi9QYWdlcyA0IDAgUgovTWV0YWRhdGEgNSAwIFIKL09wZW5BY3Rpb24gWzYgMCBSIC9YWVogbnVsbCBudWxsIDBdCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9UeXBlIC9NZXRhZGF0YQovTGVuZ3RoIDI4MzQKL1N1YnR5cGUgL1hNTAo+PgpzdHJlYW0KPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC4xLjEiPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgoJCQkJeG1sbnM6eGFwPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KCQkJPHhhcDpDcmVhdGVEYXRlPjIwMjEtMDQtMTNUMTU6Mzk6MjQtMDc6MDA8L3hhcDpDcmVhdGVEYXRlPgoJCQk8eGFwOkNyZWF0b3JUb29sPldyaXRlcjwveGFwOkNyZWF0b3JUb29sPgoJCQk8eGFwOk1vZGlmeURhdGU+MjAyMS0wNC0xM1QxNTo0MzoxOC0wNzowMDwveGFwOk1vZGlmeURhdGU+CgkJPC9yZGY6RGVzY3JpcHRpb24+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKCQkJCXhtbG5zOnBkZj0iaHR0cDovL25zLmFkb2JlLmNvbS9wZGYvMS4zLyI+CgkJCTxwZGY6UHJvZHVjZXI+TGlicmVPZmZpY2UgNi4xPC9wZGY6UHJvZHVjZXI+CgkJPC9yZGY6RGVzY3JpcHRpb24+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKCQkJCXhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyI+CgkJCTxkYzpmb3JtYXQ+YXBwbGljYXRpb24vcGRmPC9kYzpmb3JtYXQ+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4KZW5kc3RyZWFtCmVuZG9iagoxMiAwIG9iago8PAovRmlsdGVyIFsvRmxhdGVEZWNvZGVdCi9MZW5ndGggMjMxNgo+PgpzdHJlYW0KeJy1WsuO6zYM3c9XZF1gUomy/AACA0nsLLq7wABdXHTXB9BFgd5Nf7+USEqULdvJ9BYDZGZkW+Lj8PDhmLM9/fP298mczNlAf/KDP0PnT31jz31rT99+e/v5h9NfdAf+fPvj7fbxZht3dqfO9+ehH04fv55+fNgTmNPH718vxo5wMWDc2PmLacZ3CJ++uxhvnGnHd3sxXVztzWCu8f+b8aOPd+PyfcSVKa7P4c8HPuT4GWvi+oDXZck8rB3f8T9vge+1bvzl46e3+ePty0LwxsNScDhZQMGD3B9/1p7x7bk/dc7XHjl4COBss4HiQ18vtrEef9qg2zXqiooEc+DSexv0IL1QSVzZUMTCgJ4rDgA5wEDYzqK1oz29aemPDi3eoaXfu6DsxsYkuOnP7lVt26E5+7Uww4iOvZpbdC3qOo/vPTptjM60F3ReAMD47mkRlQZjrQt34u+IH+vjZ7SY5Qvs+zFd7cNmA+0QV/DQOT2DG1pLYJtxhyBNvBYfo+Pp/xved0/HRelw1yAda2AtSkjy2TlsU1fggR9hB7AoR1yPiqdDAABF4k3Z87WTQQ5+wm1tb87dygNB3rG/KKPErQFVx0PZQmybYNubKAUYT9EwUYqHiAKORJFtUJnRG3I0eaEnVF/x3HBnuSGIPVcb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"
* policyRule = $consentpolicycodes#hipaa-auth "HIPAA Authorization"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-CoordinationPlatform.fsh

Instance: SDOHCC-CoordinationPlatform
InstanceOf: CapabilityStatement
Title: "SDOHCC Coordination Platform Capability Statement"
Description: "This resource describes the required and desired behavior of systems acting as SDOH clinical care 'coordination platforms' (CPs)."
Usage: #definition
* url = "http://hl7.org/fhir/us/sdoh-clinicalcare/CapabilityStatement/SDOHCC-CoordinationPlatform"
* name = "SDOHCC_CoordinationPlatform"
* title = "SDOHCC Coordination Platform"
* status = #active
* date = "2021-06"
* description = "This resource describes the required and desired behavior of systems acting as SDOH clinical care 'coordination platforms' (CPs)."
* purpose = "CPs are intermediaries who take on responsibility for managing SDOH referrals and ensuring they are executed by appropriate service delivery organizations.  These systems must respond to referral fulfillment Tasks received from [Clinical Care Referral Sources](CapabilityStatement-SDOHCC-ReferralSource.html) and also the initiation and management of referral fulfillment Tasks subsequently directed out to [Referral Recipients](CapabilityStatement-SDOHCC-ReferralRecipient.html).  They may also take on some of the diagnostic work, including having patients or care-givers complete questionnaires, extract relevant observations and preliminary findings and work with patients to define goals."
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #xml
* format[+] = #json
* rest[0].mode = #client
* rest[=].documentation = "The clinical care coordinator needs to receive information from and update information in SDOH clinical care [referral sources](CapabilityStatement-SDOHCC-ReferralSource.html)."
* rest[=].security.service = $restful-security-service#SMART-on-FHIR
* rest[=].security.description = "Implementations must meet the general privacy & security requirements documented in [this implementation guide](privacy_and_security.html)."
* rest[=].resource[0].type = #CareTeam
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access information about the intended performer of a ServiceRequest when the performer is a specific team of people.  Note: Conformance expectations for this resource are lower because CareTeam performers are expected to be uncommon in most SDOH uses"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a CareTeam that is the intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved CareTeams that are the intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known CareTeam records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #Condition
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Condition"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access information about a patient's SDOH-related conditions, particularly those that are the reason for a referral"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a Condition that is the reason for a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Conditions that are referenced by ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Condition records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "category"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-category"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only SDOH-related conditions"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "clinical-status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-clinical-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only active conditions"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only specific SDOH conditions or sets of conditions"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only conditions associated with a specific patient.  Some systems will require that searches be patient-specific"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "verification-status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-verification-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to exclude refuted or entered-in-error conditions"
* rest[=].resource[+].type = #Consent
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Consent"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access the consent that authorizes disclosure of ServiceRequest information to non-HIPAA-covered entities"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a Consent referenced as a 'supportingInformation' item of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Consents related to ServiceRequests of interest."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchInclude = "Consent:source-reference:DocumentReference"
* rest[=].resource[=].searchInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude.extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known consent records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "source-reference"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Consent-source-reference"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows including the document that contains the PDF or similar representation of a paper consent"
* rest[=].resource[+].type = #Device
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/StructureDefinition/Device"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to retrieve the requester or intended performer of an SDOH ServiceRequest.  Note: Conformance expectations for this resource are lower because Device requesters and performers are expected to be uncommon in most SDOH uses"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a Device that is the requester or intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Devices that are the requester or intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Device records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #DocumentReference
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to retrieve a scanned or other form of document representing the text of a consent.  Also used for PDF forms."
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a PDF or similar content referenced by a Consent or Task."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved DocumentReferences in the event the image/document is amended/corrected/updated."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known DocumentReference records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #Goal
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Goal"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access goals related to an SDOH referral"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a goal referenced by a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Goals in the event they are updated."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Goal records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "achievement-status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-achievement-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only include unmet goals"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "category"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-category"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only include SDOH-related goals"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "lifecycle-status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-lifecycle-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only include active goals"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only include goals for a particular patient.  Some systems will require searches to be patient-specific"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "target-date"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-target-date"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering based on when a particular goal is desired to be achieved"
* rest[=].resource[+].type = #HealthcareService
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-HealthcareService"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access information about the intended performer of a ServiceRequest when the performer is a specific service within a larger facility.  Note: Conformance expectations for this resource are lower because HealthcareService performers are expected to be uncommon in most SDOH uses.  Also used to indicate who a patient or caregiver should contact about a particular service."
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a HealthcareService that is the intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved HealthcareServices that are the intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known HealthcareService records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "location"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/HealthcareService-location"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieval of the phyical site(s) associated with a HealthService"
* rest[=].resource[+].type = #Location
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Location"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access information about the potential sites at which a requested service might be performed.  Allows a patient to evaluate the suitability of a proposed activity or service."
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a Location that is an available location for a service."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Locations that are the intended locations for services."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Location records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #Observation
* rest[=].resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationAssessment"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationScreeningResponse"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationEthnicityOMB"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationRaceOMB"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationGenderIdentity"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationPersonalCharacteristic"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationPersonalPronouns"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationRecordedSexGender"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationSexualOrientation"
* rest[=].resource[=].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].documentation = "Used to access information about SDOH-related observations for a patient - particularly those that are reasons for a referral.  Also used to access certain SDOH-relevant demographic information."
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve an Observation referenced by a ServiceRequest or associated with the patient."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Observations for updates/corrections."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Observation records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "category"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-category"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only SDOH-related observations"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for specific types of observations"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #MAY
* rest[=].resource[=].searchParam[=].name = "code-value-concept"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-code-value-concept"
* rest[=].resource[=].searchParam[=].type = #composite
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for observations that have a specific coded value answer for a specified observation type"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "date"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for observations that held in a particular time period"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "derived-from"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-derived-from"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for observations derived from a particular QuestionnaireResponse"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for observations specific to a particular patient.  Some systems will require that all queries be patient-specific"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for observations that are completed or revised (i.e. not in-progress or entered-in-error)"
* rest[=].resource[+].type = #Organization
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access information about an Organization that is the requester or intended performer of a ServiceRequest"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve an Organization that is the requester or intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Organizations that are the requester or intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Organization records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #Patient
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access information about the Patient that is the subject a ServiceRequest"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve the Patient that is the subject of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Patients."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Patient records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #Practitioner
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access information about an Practitioner that is the requester or intended performer of a ServiceRequest"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a Practitioner that is the requester or intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Practitioners that are the requester or intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Practitioner records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #PractitionerRole
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access information about an PractitionerRole that is the requester or intended performer of a ServiceRequest"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a PractitionerRole that is the requester or intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved PractitionerRoles that are the requester or intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchInclude[0] = "PractitionerRole:organization"
* rest[=].resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest[=].resource[=].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known PractitionerRole records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "organization"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PractitionerRole-organization"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows doing an _include on Organization when retrieving the PractitionerRole"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "practitioner"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows doing an _include on Practitioner when retrieving the PractitionerRole"
* rest[=].resource[+].type = #Procedure
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Procedure"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access information about actions that have been performed as a result of a referral"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows the system to write records of procedures done in response to a referral on the system that asked for the referral."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows the system to update records of procedures done in response to a referral on the system that asked for the referral."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the coordination platform to retrieve procedures referenced by Tasks from more sophisticated 'delivery' systems that store their data on their own system rather than using the coordination platform as a persistence layer."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the coordination platform to check for updates on Procedures after they've already been received or to look for procedures that haven't yet been linked as outputs to the Tasks that initiated the work."
* rest[=].resource[=].versioning = #versioned-update
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Proceddure records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "based-on"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Procedure-based-on"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures resulting from a particular service request"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "category"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Procedure-category"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures that are SDOH-related"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures based on the specific service delivered"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "date"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures based on when they were delivered"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures based on who they were delivered to.  Some systems may require that all searches be patient-specific."
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "performer"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Procedure-performer"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures based on who delivered the procedure."
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Procedure-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures that are complete or in progress"
* rest[=].resource[+].type = #Questionnaire
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-extr-smap"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to retrieve SDOH-related Questionnaires to be filled out by a patient or representative.  Also allows retrieving Questionnaires associated with existing QuestionnaireResponses for editing by SMART-on-FHIR apps."
* rest[=].resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction.extension.valueCode = #SHOULD
* rest[=].resource[=].interaction.code = #search-type
* rest[=].resource[=].interaction.documentation = "Allows the coordination platform to search for questionnaires relevant to a patient context."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for questionnaires associated with particular LOINC or similar codes"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "context-type-value"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-context-type-value"
* rest[=].resource[=].searchParam[=].type = #composite
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures that are SDOH-related"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "identifier"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-identifier"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires with a known identifier"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "publisher"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-publisher"
* rest[=].resource[=].searchParam[=].type = #string
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires based on who is responsible for them"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires that are active (and not draft or required)"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "subject-type"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-subject-type"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires that are intended to be completed about patients - as opposed to practitioner, organizations, etc."
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "title"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-title"
* rest[=].resource[=].searchParam[=].type = #string
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires based on the name of the form"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "url"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-url"
* rest[=].resource[=].searchParam[=].type = #uri
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires based on its canonical URL"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "version"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-version"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving a specific version of a Questionnaire"
* rest[=].resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].operation.extension.valueCode = #MAY
* rest[=].resource[=].operation.name = "populate"
* rest[=].resource[=].operation.definition = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-populate"
* rest[=].resource[=].operation.documentation = "Allows SMART on FHIR or other systems to pre-populate a questionnaire response with existing information either available locally or queried from elsewhere"
* rest[=].resource[+].type = #QuestionnaireResponse
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow QuestionnaireResponses referenced by a ServiceRequest or Task"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the retrieval of QuestionnaireResponses pointed to as supporting information by a ServiceRequest or as output of a Task."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows checking for updates in previously retrieved QuestionnaireResponses."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known QuestionnaireResponse records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "author"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-author"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering QuestionnaireResponses previously created/edited by a particular individual"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "authored"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for QuestionnaireResponses by when they were created/last edited"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponses associated with a particular patient.  Some systems may only permit searches that are patient-specific"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "questionnaire"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-questionnaire"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponses that have been completed against a specified form"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponses that are complete (or incomplete)"
* rest[=].resource[+].type = #RelatedPerson
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/StructureDefinition/RelatedPerson"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to access information about the requester or intended performer of a ServiceRequest when they are someone with a personal relationship to the Patient.  Note: Conformance expectations for this resource are lower because CareTeam performers are expected to be uncommon in most SDOH uses"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the system to retrieve a RelatedPerson that is the requester or intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved RelatedPersons that are the requester or intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known RelatedPerson records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #ServiceRequest
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ServiceRequest"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to retrieve an order for SDOH-related services"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows client systems to retrieve the ServiceRequest pointed to by a Task."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows client systems to monitor multiple ServiceRequests for change simultaneously via polling."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchInclude[0] = "HealthCareService:location"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:supporting-info"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:pertains-to-goal"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:patient"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:requester"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:performer"
* rest[=].resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest[=].resource[=].searchInclude[+] = "PractitionerRole:organization"
* rest[=].resource[=].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known ServiceRequests records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "category"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-category"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only retrieve ServiceRequests that are SDOH-related"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve ServiceRequests for specific types of services"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "intent"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-intent"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve only 'order' ServiceRequests and not plans, proposals, etc."
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "occurrence"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-occurrence"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve ServiceRequests based on the timeframe in which the service needs to be provided"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve only ServiceRequests associated with a particular patient.  Note that some systems may mandate that searches are always patient-specific"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "performer"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-performer"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve only ServiceRequests that designate a specific performer"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "requester"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-requester"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve only ServiceRequests created by a specific practitioner"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve only active ServiceRequests"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "supporting-info"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/ServiceRequest-supporting-info"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows _include to retrieve supporting information for a ServiceRequest - particularly Consent"
* rest[=].resource[+].type = #Subscription
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to monitor updates to Tasks on downstream systems"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Necessary if using subscriptions to monitor updates to the Task"
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Needed to allow the requester to update a subscription - to adjust delivery target, to add additional tasks to monitor (if subscribing by id) typically to cancel a request for fulfillment"
* rest[=].resource[=].operation[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].operation[=].extension.valueCode = #SHOULD
* rest[=].resource[=].operation[=].name = "status"
* rest[=].resource[=].operation[=].definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"
* rest[=].resource[=].operation[=].documentation = "Necessary for systems supporting subscriptions to ensure that the subscription is functioning properly and to check for errors"
//* rest[=].resource[=].operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[=].resource[=].operation[=].extension.valueCode = #MAY
//* rest[=].resource[=].operation[=].name = "topic-list"
//* rest[=].resource[=].operation[=].definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscriptiontopic-list"
//* rest[=].resource[=].operation[=].documentation = "Allows discovery of what subscription topics the systems supports - needed for systems that aren't pre-configured to be aware of what topics are available for use."
* rest[=].resource[+].type = #Task
* rest[=].resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-TaskForPatient"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-TaskForReferralManagement"
* rest[=].resource[=].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to create Tasks on downstream systems seeking fufillment of ServiceRequests or performance of a patient activity on a coordinating system serving as an intermediary and to retrieve Task updates from a fulfilling system."
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows the coordination platform system to create tasks on a delivery system (or downstream coordination system)."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows the coordination platform to modify the status of previously created tasks - e.g. to cancel them.  Servers SHALL enforce appropriate permissions on systems with respect to updates.  Specifically, only authors of a Task have authority to update all aspects of the Task.  (Systems MAY limit what changes can be made to tasks that have been accepted or completed.)  Assigned task owners may change the status, statusReason and outputs.  Users who are neither the author or owner of a Task cannot make changes to it."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the coordination platform to poll a single Task for changes."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the coordination platform to poll multiple tasks simultaneously, as well as to retrieve referenced resources as part of a single query."
* rest[=].resource[=].versioning = #versioned-update
* rest[=].resource[=].conditionalRead = #modified-since
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchInclude[0] = "Task:focus"
* rest[=].resource[=].searchInclude[+] = "Task:output"
* rest[=].resource[=].searchInclude[+] = "HealthCareService:location"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:supporting-info"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:pertains-to-goal"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:patient"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:requester"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:performer"
* rest[=].resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest[=].resource[=].searchInclude[+] = "PractitionerRole:organization"
* rest[=].resource[=].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Task records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for 'fulfill' tasks as opposed to others.  Some systems may require code to be included as a filter criteria as different Task codes may correspond to different internal database tables."
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "owner"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-owner"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering only for tasks that are assigned to a particular owner (or alternatively, tasks that have not yet been assigned)"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows monitoring of tasks associated with a particular patient.  (Some systems may require that all queries be done in the context of a single patient.)"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "requester"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-requester"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving all tasks that have been requested by a particular organization or individual.  This will commonly be used to monitor the tasks initiated by a particular system"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only active or completed tasks"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "focus"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-focus"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving the task(s) seeking fulfillment of a particular ServiceRequest"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "output"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/Task-output-reference"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows for the 'output' of a Task to be included when retrieving a Task"
* rest[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].interaction.extension.valueCode = #SHOULD
* rest[=].interaction.code = #batch
* rest[=].interaction.documentation = "Allows polling for changes to multiple resource types simultaneously"
* rest[+].mode = #server
* rest[=].documentation = "Coordinating systems and service providers will frequently need to access information from the SDOH clinical care manager."
* rest[=].security.service = $restful-security-service#SMART-on-FHIR
* rest[=].security.description = "Implementations must meet the general privacy & security requirements documented in [this implementation guide](privacy_and_security.html)."
* rest[=].resource[0].type = #CareTeam
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow downstream systems to access to information about the intended performer of a ServiceRequest when the performer is a specific team of people"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve a CareTeam that is the intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved CareTeams that are the intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known CareTeam records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #Condition
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Condition"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow downstream systems to access to information about a patient's SDOH-related conditions, particularly those that are the reason for a referral"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows records to be authored by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows records to be edited by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve a Condition that is the requester or performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved Conditions that are referenced by ServiceRequests."
* rest[=].resource[=].versioning = #versioned-update
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Condition records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "category"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-category"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only SDOH-related conditions"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "clinical-status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-clinical-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only active conditions"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only specific SDOH conditions or sets of conditions"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only conditions associated with a specific patient.  Some systems will require that searches be patient-specific"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "verification-status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-verification-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to exclude refuted or entered-in-error conditions"
* rest[=].resource[+].type = #Consent
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Consent"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow access to the consent that authorizes disclosure of ServiceRequest information to non-HIPAA-covered entities"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows records to be authored by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows records to be edited by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve a Consent referenced as a 'supportingInformation' item of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved Consents related to ServiceRequests of interest."
* rest[=].resource[=].versioning = #versioned-update
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchInclude = "Consent:source-reference:DocumentReference"
* rest[=].resource[=].searchInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude.extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known consent records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "source-reference"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Consent-source-reference"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows including the document that contains the PDF or similar representation of a paper consent"
* rest[=].resource[+].type = #Device
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/StructureDefinition/Device"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow retrieval of the requester or intended performer of an SDOH ServiceRequest"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve a Device that is the requester or intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved Devices that are the requester or intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Device records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #DocumentReference
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used convey a scanned or other form of document representing the text of a consent.  Also used for PDF forms."
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows the app to record a new PDF (e.g. a completed form)"
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows the system to revise a previously stored PDF"
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve a PDF or similar content referenced by a Consent or Task."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved DocumentReferences in the event the image/document is amended/corrected/updated."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known DocumentReference records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #Goal
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Goal"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow access to goals related to an SDOH referral"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows records to be authored by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows records to be edited by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve a goal referenced by a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved Goals in the event they are updated."
* rest[=].resource[=].versioning = #versioned-update
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Goal records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "achievement-status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-achievement-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only include unmet goals"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "category"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-category"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only include SDOH-related goals"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "lifecycle-status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-lifecycle-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only include active goals"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only include goals for a particular patient.  Some systems will require searches to be patient-specific"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "target-date"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-target-date"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering based on when a particular goal is desired to be achieved"
* rest[=].resource[+].type = #Group
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Group"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Exposes information about which patients associated with a particular payor coverage type currently have SDOH concerns under management"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows a payer or other oversight agency to a Group whose identity is already known (e.g. for polling)."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows a payer or oversight agency to search for groups of interest to allow monitoring of what patients are under care/management for SDOH issues."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchInclude = "Group:member"
* rest[=].resource[=].searchInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude.extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Group records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "characteristic-value"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Group-characteristic-value"
* rest[=].resource[=].searchParam[=].type = #composite
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering based on the insurer or plan associated with the group"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Group-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering based on the type of group"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "managing-entity"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Group-managing-entity"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering based on who is maintaining the group"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "member"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Group-member"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows performing an _include to retrieve the members of the group"
* rest[=].resource[+].type = #HealthcareService
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-HealthcareService"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow downstream systems to access to information about the intended performer of a ServiceRequest when the performer is a specific service within a larger facility.  Also used to indicate who a patient or caregiver should contact about a particular service."
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve a HealthcareService that is the intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved HealthcareServices that are the intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known HealthcareService records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "location"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/HealthcareService-location"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieval of the phyical site(s) associated with a HealthService"
* rest[=].resource[+].type = #Location
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Location"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to expose information about the potential sites at which a requested service might be performed.  Allows a patient to evaluate the suitability of a proposed activity or service."
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows other systems to retrieve a Location that is an available location for a service."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Locations that are the intended locations for services."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Location records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #Observation
* rest[=].resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationAssessment"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationScreeningResponse"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationEthnicityOMB"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationRaceOMB"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationGenderIdentity"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationPersonalCharacteristic"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationPersonalPronouns"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationRecordedSexGender"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationSexualOrientation"
* rest[=].resource[=].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #MAY
* rest[=].resource[=].documentation = "Used to allow downstream systems to access to information about SDOH-related observations for a patient - particularly those that are reasons for a referral as well as certain SDOH-relevant demographic information"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows records to be authored by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows records to be edited by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve an Observation referenced by a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved Observations for updates/corrections."
* rest[=].resource[=].versioning = #versioned-update
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Observation records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "category"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-category"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only SDOH-related observations"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for specific types of observations"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #MAY
* rest[=].resource[=].searchParam[=].name = "code-value-concept"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-code-value-concept"
* rest[=].resource[=].searchParam[=].type = #composite
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for observations that have a specific coded value answer for a specified observation type"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "date"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for observations that held in a particular time period"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "derived-from"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-derived-from"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for observations derived from a particular QuestionnaireResponse"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for observations specific to a particular patient.  Some systems will require that all queries be patient-specific"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Observation-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for observations that are completed or revised (i.e. not in-progress or entered-in-error)"
* rest[=].resource[+].type = #Organization
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow downstream systems to access to information about an Organization that is the requester or intended performer of a ServiceRequest"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve an Organization that is the requester or intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved Organizations that are the requester or intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Organization records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #Patient
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow downstream systems to access to information about the Patient that is the subject a ServiceRequest"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve the Patient that is the subject of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved Patients."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Patient records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #Practitioner
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow downstream systems to access to information about an Practitioner that is the requester or intended performer of a ServiceRequest"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve a Practitioner that is the requester or intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved Practitioners that are the requester or intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Practitioner records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #PractitionerRole
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow downstream systems to access to information about an PractitionerRole that is the requester or intended performer of a ServiceRequest"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve a PractitionerRole that is the requester or intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved PractitionerRoles that are the requester or intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchInclude[0] = "PractitionerRole:organization"
* rest[=].resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest[=].resource[=].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known PractitionerRole records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "organization"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PractitionerRole-organization"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows doing an _include on Organization when retrieving the PractitionerRole"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "practitioner"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows doing an _include on Practitioner when retrieving the PractitionerRole"
* rest[=].resource[+].type = #Procedure
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Procedure"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow downstream coordination platforms and referral recipients to provide information about actions that have been performed as a result of a referral as well as to allow upstream systems to access that information."
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms and referral recipients to write records of procedures done in response to a referral in situations where they can't store the procedure on their own local system."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms and referral recipients to update records of procedures done - e.g. changing status, adding notes."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows upstream systems to retrieve procedures referenced by Tasks."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows upstream systems to check for updates on Procedures after they've already been received or to look for procedures that haven't yet been linked as outputs to the Tasks that initiated the work."
* rest[=].resource[=].versioning = #versioned-update
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known PractitionerRole records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "based-on"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Procedure-based-on"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures resulting from a particular service request"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "category"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Procedure-category"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures that are SDOH-related"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures based on the specific service delivered"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "date"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-date"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures based on when they were delivered"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures based on who they were delivered to.  Some systems may require that all searches be patient-specific."
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "performer"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Procedure-performer"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures based on who delivered the procedure."
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Procedure-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures that are complete or in progress"
* rest[=].resource[+].type = #Questionnaire
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-extr-smap"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow retrieval of SDOH-related Questionnaires to be filled out by a patient or representative.  Also allows retrieving Questionnaires associated with existing QuestionnaireResponses for editing by SMART-on-FHIR apps."
* rest[=].resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction.extension.valueCode = #MAY
* rest[=].resource[=].interaction.code = #search-type
* rest[=].resource[=].interaction.documentation = "Allows SMART apps or downstream systems to search for questionnaires relevant to a patient context."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for questionnaires associated with particular LOINC or similar codes"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "context-type-value"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-context-type-value"
* rest[=].resource[=].searchParam[=].type = #composite
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for procedures that are SDOH-related"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "identifier"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-identifier"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires with a known identifier"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "publisher"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-publisher"
* rest[=].resource[=].searchParam[=].type = #string
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires based on who is responsible for them"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires that are active (and not draft or required)"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "subject-type"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-subject-type"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires that are intended to be completed about patients - as opposed to practitioner, organizations, etc."
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "title"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-title"
* rest[=].resource[=].searchParam[=].type = #string
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires based on the name of the form"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "url"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-url"
* rest[=].resource[=].searchParam[=].type = #uri
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires based on its canonical URL"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "version"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-version"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving a specific version of a Questionnaire"
* rest[=].resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].operation.extension.valueCode = #MAY
* rest[=].resource[=].operation.name = "populate"
* rest[=].resource[=].operation.definition = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-populate"
* rest[=].resource[=].operation.documentation = "Allows SMART on FHIR or other systems to pre-populate a questionnaire response with existing information either available locally or queried from elsewhere"
* rest[=].resource[+].type = #QuestionnaireResponse
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow SMART apps to cread, update and retrieve QuestionnaireResponses relevant to SDOH care"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows questionnaire responses to be authored by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows questionnaire responses to be edited by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows the retrieval of QuestionnaireResponses to use as a starting point for new responses or to continue editing."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows checking for updates in previously retrieved QuestionnaireResponses."
* rest[=].resource[=].versioning = #versioned-update
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known QuestionnaireResponse records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "author"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-author"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering QuestionnaireResponses previously created/edited by a particular individual"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "authored"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for QuestionnaireResponses by when they were created/last edited"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponses associated with a particular patient.  Some systems may only permit searches that are patient-specific"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "questionnaire"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-questionnaire"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponses that have been completed against a specified form"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponses that are complete (or incomplete)"
* rest[=].resource[+].type = #RelatedPerson
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/StructureDefinition/RelatedPerson"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow downstream systems to access to information about the requester or intended performer of a ServiceRequest when they are someone with a personal relationship to the Patient"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to retrieve a RelatedPerson that is the requester or intended performer of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows downstream coordination platforms or referral recipients to monitor previously-retrieved RelatedPersons that are the requester or intended performer of ServiceRequests."
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known RelatedPerson records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[+].type = #ServiceRequest
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ServiceRequest"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow retrieval of an order for SDOH-related services"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows records to be authored by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows records to be edited by a SMART app if the manager system does not have the capability itself - or finds it better to use a third-party interface."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows client systems to retrieve the ServiceRequest pointed to by a Task."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows client systems to monitor multiple ServiceRequests for change simultaneously via polling."
* rest[=].resource[=].versioning = #versioned-update
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchInclude[0] = "HealthCareService:location"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:supporting-info"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:pertains-to-goal"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:patient"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:requester"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:performer"
* rest[=].resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest[=].resource[=].searchInclude[+] = "PractitionerRole:organization"
* rest[=].resource[=].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known ServiceRequests records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "category"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-category"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only retrieve ServiceRequests that are SDOH-related"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve ServiceRequests for specific types of services"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "intent"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-intent"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve only 'order' ServiceRequests and not plans, proposals, etc."
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "occurrence"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-occurrence"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve ServiceRequests based on the timeframe in which the service needs to be provided"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve only ServiceRequests associated with a particular patient.  Note that some systems may mandate that searches are always patient-specific"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "performer"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-performer"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve only ServiceRequests that designate a specific performer"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "requester"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-requester"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve only ServiceRequests created by a specific practitioner"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to retrieve only active ServiceRequests"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "supporting-info"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/ServiceRequest-supporting-info"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows _include to retrieve supporting information for a ServiceRequest - particularly Consent"
* rest[=].resource[+].type = #Subscription
* rest[=].resource[=].supportedProfile = "http://hl7.org/fhir/uv/subscriptions-backport/StructureDefinition/backport-subscription"
* rest[=].resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile.extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used to allow upstream and occasionally downstream systems to subscribe to and monitor Tasks this system for change"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHOULD
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows upstream systems to initiate a subscription to monitor updates to Tasks (and theoretically other things)"
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #MAY
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows upstream systems to revise existing subscriptions - to adjust delivery target, to add additional tasks to monitor (if subscribing by id), etc."
* rest[=].resource[=].operation[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].operation[=].extension.valueCode = #SHOULD
* rest[=].resource[=].operation[=].name = "status"
* rest[=].resource[=].operation[=].definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscription-status"
* rest[=].resource[=].operation[=].documentation = "Allows upstream systems to verify their subscription is functioning properly and to check for errors"
//* rest[=].resource[=].operation[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
//* rest[=].resource[=].operation[=].extension.valueCode = #MAY
//* rest[=].resource[=].operation[=].name = "topic-list"
//* rest[=].resource[=].operation[=].definition = "http://hl7.org/fhir/uv/subscriptions-backport/OperationDefinition/backport-subscriptiontopic-list"
//* rest[=].resource[=].operation[=].documentation = "Allows upstream systems to discover of what subscription topics this system supports - needed for systems that aren't pre-configured to be aware of what topics are available for use."
* rest[=].resource[+].type = #Task
* rest[=].resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-TaskForPatient"
* rest[=].resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-TaskForReferralManagement"
* rest[=].resource[=].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest[=].resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest[=].resource[=].documentation = "Used by upstream referral sources and coordination platforms to create and update Tasks seeking fufillment of ServiceRequests or performance of activities by patients and care-givers.  Also used by downstream referral recipients to monitor and update Tasks stored on this system as they respond to requests to fulfill referrals and link in information about actions taken so far"
* rest[=].resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #create
* rest[=].resource[=].interaction[=].documentation = "Allows upstream coordination platforms and referral sources system to create tasks on this system seeking fulfillment of a ServiceRequest."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #update
* rest[=].resource[=].interaction[=].documentation = "Allows modification of an existing Task by upstream systems (e.g. to cancel it) or by downstream systems (to accept or reject it or add output links to performed procedures)."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #read
* rest[=].resource[=].interaction[=].documentation = "Allows retrieval of a Task that was referenced in a subscription notification or per-Task polling for change."
* rest[=].resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].interaction[=].extension.valueCode = #SHALL
* rest[=].resource[=].interaction[=].code = #search-type
* rest[=].resource[=].interaction[=].documentation = "Allows the other systems to poll multiple tasks simultaneously, as well as to retrieve referenced resources as part of a single query."
* rest[=].resource[=].versioning = #versioned-update
* rest[=].resource[=].conditionalRead = #modified-since
* rest[=].resource[=].referencePolicy = #literal
* rest[=].resource[=].searchInclude[0] = "Task:focus"
* rest[=].resource[=].searchInclude[+] = "Task:output"
* rest[=].resource[=].searchInclude[+] = "HealthCareService:location"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:supporting-info"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:pertains-to-goal"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:patient"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:requester"
* rest[=].resource[=].searchInclude[+] = "ServiceRequest:performer"
* rest[=].resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest[=].resource[=].searchInclude[+] = "PractitionerRole:organization"
* rest[=].resource[=].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "_id"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving known Task records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "_lastUpdated"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest[=].resource[=].searchParam[=].type = #date
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "code"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-code"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering for 'fulfill' tasks as opposed to others.  Some systems may require code to be included as a filter criteria as different Task codes may correspond to different internal database tables."
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "owner"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-owner"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering only for tasks that are assigned to a particular owner (or alternatively, tasks that have not yet been assigned)"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "patient"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-patient"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows monitoring of tasks associated with a particular patient.  (Some systems may require that all queries be done in the context of a single patient.)"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "requester"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-requester"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving all tasks that have been requested by a particular organization or individual.  This will commonly be used to monitor the tasks initiated by a particular system"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "status"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-status"
* rest[=].resource[=].searchParam[=].type = #token
* rest[=].resource[=].searchParam[=].documentation = "Allows filtering to only active or completed tasks"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHALL
* rest[=].resource[=].searchParam[=].name = "focus"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-focus"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows retrieving the task(s) seeking fulfillment of a particular ServiceRequest"
* rest[=].resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest[=].resource[=].searchParam[=].name = "output"
* rest[=].resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/Task-output-reference"
* rest[=].resource[=].searchParam[=].type = #reference
* rest[=].resource[=].searchParam[=].documentation = "Allows for the 'output' of a Task to be included when retrieving a Task"
* rest[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest[=].interaction.extension.valueCode = #SHOULD
* rest[=].interaction.code = #batch
* rest[=].interaction.documentation = "Allows other systems to poll for changes to multiple resource types simultaneously"


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-DeviceSoftwareExample.fsh

Instance: SDOHCC-DeviceSoftwareExample
InstanceOf: Device
Title: "SDOHCC Device Software Example"
Description: "An example of a software device. This example is used as the referenced device in other SDOHCC examples."
Usage: #example
* identifier.system = "http://software.org/devices/id"
* identifier.value = "345675"
* type = $sct#706689003 "Application program software"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-GoalFoodSecurityExample.fsh

Instance: SDOHCC-GoalFoodSecurityExample
InstanceOf: SDOHCCGoal
Title: "SDOHCC Goal Food Security Example"
Description: "An example of a food security Goal that addresses a food insecurity Condition."
Usage: #example
* lifecycleStatus = #active
* achievementStatus = $goal-achievement#improving "Improving"
* category = $SDOHCC-CodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* description = $sct#1078229009 "Food security"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* target.measure = $loinc#88124-3 "Food insecurity risk [HVS]"
* target.detailCodeableConcept = $loinc#LA19983-8 "No risk"
* target.dueDate = "2020-12-10"
* statusDate = "2020-10-21"
* addresses.reference = "Condition/SDOHCC-ConditionFoodInsecurityExample"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-GroupSDOHPatientsForPayerExample.fsh

Instance: SDOHCC-GroupSDOHPatientsForPayerExample
InstanceOf: SDOHCCGroup
Title: "SDOHCC Group SDOH Patients For Payer Example"
Description: "An example of Group for patients that have any SDOH condition and are members of a specific payer organization."
Usage: #example
* active = true
* type = #person
* actual = true
//* characteristic[category].code = $SDOHCC-CodeSystemTemporaryCodes#sdoh-condition-category "Current Condition Category From SDOH Category"
//* characteristic[HasSDOHCondition].valueReference.reference = "http://hl7.org/fhir/us/sdoh-clinicalcare/ValueSet/SDOHCC-ValueSetSDOHCategory"
* characteristic[HasSDOHCondition].valueReference.reference = Canonical(SDOHCCValueSetSDOHCategory)
* characteristic[HasSDOHCondition].exclude = false
//* characteristic[+].code = $SDOHCC-CodeSystemTemporaryCodes#payer-coverage "Coverage By Payer Organization"
* characteristic[HasPayer].exclude = false
* characteristic[HasPayer].valueReference.reference = "Organization/SDOHCC-OrganizationPayerExample"
* name = "CDE payer's SDOH condition patients"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-HealthcareServiceTelecomAppointmentExample.fsh

Instance: SDOHCC-HealthcareServiceTelecomAppointmentExample
InstanceOf: SDOHCCHealthcareService
Title: "SDOHCC HealthcareService Telecom Appointment Example"
Description: "An example of a HealthcareService with telecom(s) that can be used to make an appointment flagged. This example is used as the referenced healthcare service in other IG examples."
Usage: #example
* active = true
* location.reference = "Location/SDOHCC-LocationExample"
* name = "Family Counseling Services"
* telecom[AppointmentContact][0]
  * system = #phone
  * value = "(555) appoint"
  * use = #work
  * extension[ForAppointment].valueBoolean = true 
* telecom[AppointmentContact][+]
  * system = #email
  * value = "familyCounseling@example.com"
  * use = #work
  * extension[ForAppointment].valueBoolean = true 
* telecom[2]
  * system = #phone
  * value = "(555) office"
  * use = #work
* telecom[+]
  * system = #phone
  * value = "(555) nursepr"
  * use = #work

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-LocationExample.fsh

Instance: SDOHCC-LocationExample
InstanceOf: SDOHCCLocation
Title: "SDOHCC Location Example"
Description: "An example of a Location for a HealthcareService that the patient might want to schedule an appointment at. This example is used as the referenced location in other IG examples."
Usage: #example
* name = "Family Counseling Services Deerland Clinic"
* address.text = "245 Amble St, Deerland, IL 62223"
* address.line = "245 Amble St,"
* address.city = "Deerland"
* address.state = "IL"
* address.postalCode = "62223"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationAssessmentInadequateFoodIntakeExample.fsh

Instance: SDOHCC-ObservationAssessmentInadequateFoodIntakeExample
InstanceOf: SDOHCCObservationAssessment
Title: "SDOHCC Observation Assessment Inadequate Food Intake Example"
Description: "An example of an inadequate food intake Observation that is not necessarily derived only from a screening survey. This observation involves additional assessment (e.g., by a provider, payer, etc.)."
Usage: #example
//* category[0] = $observation-category#social-history "Social History"
* category[SDOH] = $SDOHCC-CodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* status = #final
* code = $sct#699653008 "Inadequate oral food intake for physiological needs"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2021-05-10T21:56:54.671Z"
* performer.reference = "Practitioner/SDOHCC-PractitionerDrJanWaterExample"
* performer.display = "Dr Jan Water"
* valueBoolean = true

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationAssessmentSocialIsolationExample.fsh

/*Instance: SDOHCC-ObservationAssessmentSocialIsolationExample
InstanceOf: SDOHCCObservationAssessment
Title: "SDOHCC Observation Assessment Social Isolation Example"
Description: "An example of a social isolation Observation that is not necessarily derived only from a screening survey. This observation involves additional assessment (e.g., by a provider, payer, etc.). This example also includes an Observation.category (i.e., Social Connection) that, at the time the example was added to the IG, was not yet in the “SDOHCC ValueSet SDOH Category”. The example illustrates that categorization is possible using category codes that may not yet be included in the SDOHCC ValueSet SDOH Category (which will continue to be expanded as the Gravity Project continues to develop SDOH terminology content)."
Usage: #example
//* category[0] = $observation-category#social-history "Social History"
* category[SDOH] = $other-code-system#social-connection "Social Connection"
* status = #final
* code = $sct#422650009 "Social isolation"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2021-05-10T21:56:54.671Z"
* performer.reference = "Practitioner/SDOHCC-PractitionerDrJanWaterExample"
* performer.display = "Dr Jan Water"
* valueBoolean = true
*/

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationAssessmentTransportTooExpensiveExample.fsh

Instance: SDOHCC-ObservationAssessmentTransportTooExpensiveExample
InstanceOf: SDOHCCObservationAssessment
Title: "SDOHCC Observation Assessment Transport Too Expensive Example"
Description: "An example of a transportation Observation that is not necessarily derived only from a screening survey. This observation involves additional assessment (e.g., by a provider, payer, etc.). This example also includes an Observation.category (i.e., Transportation Insecurity) that is included in the “SDOHCC ValueSet SDOH Category”. Additionally, a subcategory of Transportation Insecurity (i.e., Transportation Insecurity Financial) is included to illustrate that it is possible to further subcategorize a “SDOHCC ValueSet SDOH Category” code with a code that is not in the ValueSet."
Usage: #example
//* category[0] = $observation-category#social-history "Social History"
* category[SDOH].coding[0] = $SDOHCC-CodeSystemTemporaryCodes#transportation-insecurity "Transportation Insecurity"
* category[SDOH].coding[+] = SDOHCC-CodeSystemTemporaryCodes#financial-insecurity "Financial Insecurity"
* status = #final
* code = $sct#160695008 "Transport too expensive"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2021-05-10T21:56:54.671Z"
* performer.reference = "Practitioner/SDOHCC-PractitionerDrJanWaterExample"
* performer.display = "Dr Jan Water"
* valueBoolean = true

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationEthnicityOMBExample.fsh

Instance: SDOHCC-ObservationEthnicityOMBExample
InstanceOf: SDOHCCObservationEthnicityOMB
Title: "SDOHCC Observation Ethnicity OMB Example"
Description: "An example of an ethnicity Observation where the subject self-reports as Hispanic or Latino with detailed ethnicity information that highlights elements and repetitions."
Usage: #example
//* category[SDOH] = $SDOHCC-CodeSystemTemporaryCodes#personal-characteristic "Personal Characteristic"
//* code = $loinc#69490-1 "Ethnicity OMB.1997"
* status = #final
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2022-04-10T23:56:54.671Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* method = $SDOHCC-CodeSystemTemporaryCodes#self-reported "Self Reported"
* component[DetailedEthnicity][0].valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#2182-4 "Cuban"
* component[DetailedEthnicity][1].valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#2159-2 "Nicaraguan"
* component[Ethnicity].valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#2135-2 "Hispanic or Latino"
* component[EthnicityDescription].valueString = "Hispanic, Cuban on my mom's side and Nicaraguan on my dad's side"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationGenderIdentityExample.fsh

Instance: SDOHCC-ObservationGenderIdentityExample
InstanceOf: SDOHCCObservationGenderIdentity
Title: "SDOHCC Observation Gender Identity Example"
Description: "An example of a gender identity Observation where the subject self-reports their gender identity as male."
Usage: #example
//* category = $SDOHCC-CodeSystemTemporaryCodes#personal-characteristic "Personal Characteristic"
//* code = $loinc#76691-5 "Gender identity"
* status = #final
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2022-04-10T23:56:54.671Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* valueCodeableConcept = $sct#446151000124109 "Identifies as male gender"
* method = $SDOHCC-CodeSystemTemporaryCodes#self-reported "Self Reported"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationPersonalPronounsExample.fsh

Instance: SDOHCC-ObservationPersonalPronounsExample
InstanceOf: SDOHCCObservationPersonalPronouns
Title: "SDOHCC Observation Personal Pronouns Example"
Description: "An example of a personal pronoun Observation where the subject self-reports their pronoun preference."
Usage: #example
//* category = $SDOHCC-CodeSystemTemporaryCodes#personal-characteristic "Personal Characteristic"
//* code = $loinc#90778-2 "Personal pronouns - Reported"
* status = #final
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2022-04-10T23:56:54.671Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* valueCodeableConcept = $loinc#LA29518-0 "he/him/his/his/himself"
* method = $SDOHCC-CodeSystemTemporaryCodes#self-reported "Self Reported"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationRaceOMBExample.fsh

Instance: SDOHCC-ObservationRaceOMBExample
InstanceOf: SDOHCCObservationRaceOMB
Title: "SDOHCC Observation Race OMB Example"
Description: "An example of a race Observation where the subject self-reports as more than one race with detailed race information that highlights elements and repetitions."
Usage: #example
//* category = $SDOHCC-CodeSystemTemporaryCodes#personal-characteristic "Personal Characteristic"
//* code = $loinc#72826-1 "Race OMB.1997"
* status = #final
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2022-04-10T23:56:54.671Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* method = $SDOHCC-CodeSystemTemporaryCodes#self-reported "Self Reported"
* component[Race][0].valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#1002-5 "American Indian or Alaska Native"
* component[Race][1].valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"
* component[DetailedRace][0].valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#1102-3 "Cheyenne"
* component[DetailedRace][1].valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#1088-4 "Cherokee"
* component[RaceDescription].valueString = "White on my dad's side, Cherokee and Cheyenne on my mom's side"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationRaceOMBMotherExample.fsh

Instance: SDOHCC-ObservationRaceOMBMotherExample
InstanceOf: SDOHCCObservationRaceOMB
Title: "SDOHCC-Observation Race OMB Mother Example"
Description: "An example of a race Observation that uses Observation.focus to make an Observation about the race of the subject’s mother (who is his caretaker)."
Usage: #example
//* category = $SDOHCC-CodeSystemTemporaryCodes#personal-characteristic "Personal Characteristic"
//* code = $loinc#72826-1 "Race OMB.1997"
* status = #final
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* focus.reference = "RelatedPerson/SDOHCC-RelatedPersonMotherExample"
* focus.display = "Eve Everywoman"
* effectiveDateTime = "2022-04-10T23:56:54.671Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* method = $SDOHCC-CodeSystemTemporaryCodes#reported-by-related-person "Reported By Related Person"
* component[0].code = $loinc#72826-1 "Race OMB.1997"
* component[=].valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#1002-5 "American Indian or Alaska Native"
* component[+].code = $loinc#72826-1 "Race OMB.1997"
* component[=].valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#1102-3 "Cheyenne"
* component[+].code = $loinc#72826-1 "Race OMB.1997"
* component[=].valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#1088-4 "Cherokee"
* component[+].code = $loinc#72826-1 "Race OMB.1997"
* component[=].valueString = "Cherokee and Cheyenne"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationRaceOMBPractitionerExample.fsh

Instance: SDOHCC-ObservationRaceOMBPractitionerExample
InstanceOf: SDOHCCObservationRaceOMB
Title: "SDOHCC Observation Race OMB Practitioner Example"
Description: "An example of a race Observation that uses a FHIR extension on Observation.subject to make an Observation about the practitioner’s race."
Usage: #example
//* category = $SDOHCC-CodeSystemTemporaryCodes#personal-characteristic "Personal Characteristic"
//* code = $loinc#72826-1 "Race OMB.1997"
* status = #final
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2022-04-10T23:56:54.671Z"
* performer.reference = "Practitioner/SDOHCC-PractitionerDrJanWaterExample"
* performer.display = "Dr Jan Water"
* method = $SDOHCC-CodeSystemTemporaryCodes#self-reported "Self Reported"
* component.code = $loinc#72826-1 "Race OMB.1997"
* component.valueCodeableConcept = urn:oid:2.16.840.1.113883.6.238#2106-3 "White"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationRecordedSexGenderExample.fsh

Instance: SDOHCC-ObservationRecordedSexGenderExample
InstanceOf: SDOHCCObservationRecordedSexGender
Title: "SDOHCC Observation Recorded Sex Gender Example"
Description: "An example of a recorded sex or gender Observation where a clinic has derived the designation M (male) from the subject’s driver’s license."
Usage: #example
////* category = $SDOHCC-CodeSystemTemporaryCodes#personal-characteristic "Personal Characteristic"
* code = $loinc#99502-7 "Recorded sex or gender"
* status = #final
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2022-04-10T23:56:54.671Z"
* performer.reference = "Organization/SDOHCC-OrganizationClinicExample"
* performer.display = "Better Health Clinic"
* valueCodeableConcept = $loinc#LA15170-6 "M"
* method = $SDOHCC-CodeSystemTemporaryCodes#derived-specify "Derived Specify"
* derivedFrom.identifier.type = $v2-0203#DL "Driver's license number"
* derivedFrom.display = "Driver's license"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponseHungerVitalSignQuestion3Example.fsh

Instance: SDOHCC-ObservationResponseHungerVitalSignQuestion3Example
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response Hunger Vital Sign Question 3 Example"
Description: "An example of a screening response Observation that represents Food insecurity risk [HVS] (LOINC code 88124-3) from the Hunger Vital Sign [HVS] questionnaire (LOINC code 88121-9). The Food insecurity risk [HVS] Observation is not answered directly. Rather, it is determined by the responses to the 2 questions on the Hunger Vital Sign [HVS] questionnaire. For this reason, this Observation does not have an Observation.performer. Additionally, this Observation demonstrates the use of “Observation.interpretation: POS” to indicate a possible Health-Related Social Need or risk in the Food Insecurity domain."
Usage: #example
* category[Survey] = $observation-category#survey "Survey"
* category[SDOH] = $SDOHCC-CodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* status = #final
* code = $loinc#88124-3 "Food insecurity risk [HVS]"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2020-09-10T21:56:54.671Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* issued = "2020-09-10T21:56:54.671Z"
* valueCodeableConcept = $loinc#LA19952-3 "At risk"
* derivedFrom[0].reference = "QuestionnaireResponse/SDOHCC-QuestionnaireResponseHungerVitalSignExample"   /// NEW
* interpretation = $v3-ObsInterpretation#POS "Positive"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponseNHAMESGroupingExample.fsh


RuleSet: NHANESCommon
* category[SocialHistory] = $observation-category#social-history "Social History"
* category[Survey] = $observation-category#survey "Survey"
* category[SDOH] = $SDOHCC-CodeSystemTemporaryCodes#social-connection "Social Connection"
* status = #final
* code = $loinc#76506-5 "Social Connection and Isolation Panel"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2020-09-10T21:56:54.671Z"
* performer.reference = "Practitioner/SDOHCC-PractitionerDrJanWaterExample"
* performer.display = "Dr Jan Water"
* issued = "2020-09-10T21:56:54.671Z"

Instance: SDOHCC-ObservationResponseNHANESGroupingExample
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response NHANES Grouping Example"
Description: "An example of an Observation grouping that uses hasMember to group 6 Observations from the LOINC Social connection and isolation panel (LOINC code 76506-5)
because QuestionnaireResponse is not referenced by the 6 individual Observations created from the panel. In the absence of the references to QuestionnaireResponse,
this example illustrates how the 6 Observations from the panel can be linked in an Observation grouping."
Usage: #example
* insert NHANESCommon
* code = $loinc#76506-5 "Social Connection and Isolation Panel"
* hasMember[SupportedHasMember][0].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion1Example"
* hasMember[SupportedHasMember][+].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion2Example"
* hasMember[SupportedHasMember][+].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion3Example"
* hasMember[SupportedHasMember][+].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion4Example"
* hasMember[SupportedHasMember][+].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion5Example"
* hasMember[SupportedHasMember][+].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion6Example"


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponseNHANESQuestion1Example.fsh

Instance: SDOHCC-ObservationResponseNHANESQuestion1Example
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response NHANES Question 1 Example"
Description: "An example of a screening response Observation that represents the first question from the NHANES assessment instrument represented in LOINC."
Usage: #example
* insert NHANESCommon
* code = $loinc#63503-7	"Marital status [NHANES]"
* valueCodeableConcept = $loinc#LA48-4 "Married"


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponseNHANESQuestion2Example.fsh

Instance: SDOHCC-ObservationResponseNHANESQuestion2Example
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response NHANES Question 2 Example"
Description: "An example of a screening response Observation that represents the second question from the NHANES assessment instrument represented in LOINC."
Usage: #example
* insert NHANESCommon
* code = $loinc#76508-1 "In a typical week, how many times do you talk on the telephone with family, friends, or neighbors [NHANES III]"
* valueQuantity = 7 '/wk' "per week"


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponseNHANESQuestion3Example.fsh

Instance: SDOHCC-ObservationResponseNHANESQuestion3Example
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response NHANES Question 3 Example"
Description: "An example of a screening response Observation that represents the third question from the NHANES assessment instrument represented in LOINC."
Usage: #example
* insert NHANESCommon
* code = $loinc#76509-9	"How often do you get together with friends or relatives [NHANES III]"
* valueQuantity = 7 '/wk' "per week"


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponseNHANESQuestion4Example.fsh

Instance: SDOHCC-ObservationResponseNHANESQuestion4Example
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response NHANES Question 4 Example"
Description: "An example of a screening response Observation that represents the fourth question from the NHANES assessment instrument represented in LOINC."
Usage: #example
* insert NHANESCommon
* code = $loinc#76510-7	"How often do you attend church or religious services [NHANES]"
* valueQuantity = 7 '/wk' "per week"


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponseNHANESQuestion5Example.fsh

Instance: SDOHCC-ObservationResponseNHANESQuestion5Example
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response NHANES Question 5 Example"
Description: "An example of a screening response Observation that represents the fifth question from the NHANES assessment instrument represented in LOINC."
Usage: #example
* insert NHANESCommon
* code = $loinc#76511-5	"Do you belong to any clubs or organizations such as church groups unions, fraternal or athletic groups, or school groups [NHANES III]"
* valueCodeableConcept = $loinc#LA33-6 "Yes"


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponseNHANESQuestion6Example.fsh

Instance: SDOHCC-ObservationResponseNHANESQuestion6Example
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response NHANES Question 6 Example"
Description: "An example of a screening response Observation that represents the score from the NHANES assessment instrument represented in LOINC.  This result is derived from the
results of the 5 questions."
Usage: #example
* insert NHANESCommon
* code = $loinc#76512-3	"Social isolation score [NHANES]"
* valueQuantity.value = 4
* valueQuantity.unit = "{Number}"
* derivedFrom[0].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion1Example"
* derivedFrom[+].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion2Example"
* derivedFrom[+].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion3Example"
* derivedFrom[+].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion4Example"
* derivedFrom[+].reference = "Observation/SDOHCC-ObservationResponseNHANESQuestion5Example"


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponsePRAPAREChildCareNeedExample.fsh

Instance: SDOHCC-ObservationResponsePRAPAREChildCareNeedExample
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response PRAPARE Child Care Need Example"
Description: "An example of a screening response Observation that represents a question and answer related to unmet child care needs from the PRAPARE questionnaire represented in LOINC."
Usage: #example
* category[Survey] = $observation-category#survey "Survey"
* category[SDOH] = $SDOHCC-CodeSystemTemporaryCodes#material-hardship "Material Hardship"
* status = #final
* code = $loinc#93031-3 "Have you or any family members you live with been unable to get any of the following when it was really needed in past 1 year [PRAPARE]"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2021-04-26T13:56:33.747Z"
* issued = "2021-04-26T13:56:33.747Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* valueCodeableConcept = $loinc#LA30127-7 "Child care"
* derivedFrom.reference = "QuestionnaireResponse/SDOHCC-QuestionnaireResponsePRAPAREExample"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponsePRAPAREClothingNeedExample.fsh

Instance: SDOHCC-ObservationResponsePRAPAREClothingNeedExample
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response PRAPARE Clothing Need Example"
Description: "An example of a screening response Observation that represents a question and answer related to unmet clothing needs from the PRAPARE questionnaire represented in LOINC."
Usage: #example
* category[Survey] = $observation-category#survey "Survey"
* category[SDOH] = $SDOHCC-CodeSystemTemporaryCodes#material-hardship "Material Hardship"
* status = #final
* code = $loinc#93031-3 "Have you or any family members you live with been unable to get any of the following when it was really needed in past 1 year [PRAPARE]"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2021-04-26T13:56:33.747Z"
* issued = "2021-04-26T13:56:33.747Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* valueCodeableConcept = $loinc#LA30126-9 "Clothing"
* derivedFrom.reference = "QuestionnaireResponse/SDOHCC-QuestionnaireResponsePRAPAREExample"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponsePRAPAREEmploymentStatusExample.fsh

Instance: SDOHCC-ObservationResponsePRAPAREEmploymentStatusExample
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response PRAPARE Employment Status Example"
Description: "An example of a screening response Observation that represents a question and answer related to employment status from the PRAPARE questionnaire represented in LOINC."
Usage: #example
* category[Survey] = $observation-category#survey "Survey"
* category[SDOH] = $SDOHCC-CodeSystemTemporaryCodes#employment-status "Employment Status"
* status = #final
* code = $loinc#67875-5 "Employment status - current"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2021-04-26T13:56:33.747Z"
* issued = "2021-04-26T13:56:33.747Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* valueCodeableConcept = $loinc#LA17956-6 "Unemployed"
* derivedFrom.reference = "QuestionnaireResponse/SDOHCC-QuestionnaireResponsePRAPAREExample"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationResponsePRAPAREHousingStatusExample.fsh

Instance: SDOHCC-ObservationResponsePRAPAREHousingStatusExample
InstanceOf: SDOHCCObservationScreeningResponse
Title: "SDOHCC Observation Response PRAPARE Housing Status Example"
Description: "An example of a screening response Observation that represents a question and answer related to housing status from the PRAPARE questionnaire represented in LOINC."
Usage: #example
* category[Survey] = $observation-category#survey "Survey"
* category[SDOH] = $SDOHCC-CodeSystemTemporaryCodes#homelessness "Homelessness"
* status = #final
* code = $loinc#71802-3 "Housing status"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2021-04-26T13:56:33.747Z"
* issued = "2021-04-26T13:56:33.747Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* valueCodeableConcept = $loinc#LA30190-5 "I do not have housing (staying with others, in a hotel, in a shelter, living outside on the street, on a beach, in a car, or in a park)"
* derivedFrom.reference = "QuestionnaireResponse/SDOHCC-QuestionnaireResponsePRAPAREExample"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ObservationSexualOrientationExample.fsh

Instance: SDOHCC-ObservationSexualOrientationExample
InstanceOf: SDOHCCObservationSexualOrientation
Title: "SDOHCC Observation Sexual Orientation Example"
Description: "An example of a sexual orientation Observation where the subject self-reports as homosexual."
Usage: #example
* code = $loinc#76690-7 "Sexual orientation"
* status = #final
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* effectiveDateTime = "2022-04-10T23:56:54.671Z"
* performer.reference = "Patient/pat-53234"
* performer.display = "COLIN ABBAS"
* valueCodeableConcept = $loinc#LA22875-1 "Homosexual"
* method = $SDOHCC-CodeSystemTemporaryCodes#self-reported "Self Reported"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-OrganizationClinicExample.fsh

Instance: SDOHCC-OrganizationClinicExample
InstanceOf: USCoreOrganizationProfile
Title: "SDOHCC Organization Clinic Example"
Description: "An example of a clinic Organization. This example is used as the referenced organization in other IG examples."
Usage: #example
* active = true
* name = "Better Health Clinic"
* address.text = "133th St, Deerland, IL 62223"
* address.line = "133th Street,"
* address.city = "Deerland"
* address.state = "IL"
* address.postalCode = "62223"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-OrganizationCoordinationPlatformExample.fsh

Instance: SDOHCC-OrganizationCoordinationPlatformExample
InstanceOf: USCoreOrganizationProfile
Title: "SDOHCC Organization Coordination Platform Example"
Description: "An example of a coordination platform Organization. This example is used as the referenced organization in other IG examples."
Usage: #example
* active = true
* name = "ABC Coordination Platform"
* address.text = "198th St, Western, IL 62223"
* address.line = "198th Street,"
* address.city = "Western"
* address.state = "IL"
* address.postalCode = "62223"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-OrganizationPayerExample.fsh

Instance: SDOHCC-OrganizationPayerExample
InstanceOf: USCoreOrganizationProfile
Title: "SDOHCC Organization Payer Example"
Description: "An example of a payer organization. This example is used as the referenced organization in other SDOHCC examples."
Usage: #example
* active = true
* name = "CDE Payer"
* address.text = "132th St, Underland Park, KS 66223"
* address.line = "132th Street,"
* address.city = "Underland Park"
* address.state = "KS"
* address.postalCode = "66223"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-PatientApp.fsh

Instance: SDOHCC-PatientApp
InstanceOf: CapabilityStatement
Title: "SDOHCC Patient Application"
Description: "This resource describes the required and desired behavior of systems acting as apps for patients and care-givers who need to monitor progress on SDOH referrals and may need to take actions such as filling out forms, booking appointments, etc."
Usage: #definition
* url = "http://hl7.org/fhir/us/sdoh-clinicalcare/CapabilityStatement/SDOHCC-PatientApp"
* name = "SDOHCC_PatientApp"
* title = "SDOHCC Patient Application"
* status = #active
* date = "2021-06"
* description = "This resource describes the required and desired behavior of systems acting as apps for patients and care-givers who need to monitor progress on SDOH referrals and may need to take actions such as filling out forms, booking appointments, etc."
* purpose = "These systems will not expose their own FHIR interfaces, but will monitor information available from other FHIR servers - be it [referral sources](CapabilityStatement-SDOHCC-ReferralSource.html), [coordination platforms](CapabilityStatement-SDOHCC-CoordinationPlatform.html) or [referral recipients](CapabilityStatement-SDOHCC-ReferralRecipient.html).  They will primarily monitor and update Task resources as well as the resources referenced by those Tasks."
* kind = #requirements
* fhirVersion = #4.0.1
* format[0] = #xml
* format[+] = #json
* rest.mode = #client
* rest.documentation = "Patient apps query for data relevant to the current patient, post updates as appropriate and occasionally create new resources, such as QuestionnaireResponses"
* rest.security.service = $restful-security-service#SMART-on-FHIR
* rest.security.description = "Implementations must meet the general privacy & security requirements documented in [this implementation guide](privacy_and_security.html)."
* rest.resource[0].type = #CareTeam
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "For referral sources that receive referrals from upstream systems, used to access information about the intended performer of a ServiceRequest when the performer is a specific team of people.  Note: Conformance expectations for this resource are lower because CareTeam performers are expected to be uncommon in most SDOH uses"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a CareTeam that is the intended performer of a ServiceRequest."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved CareTeams that are the intended performer of ServiceRequests."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known CareTeam records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[+].type = #Condition
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Condition"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "For referral sources that receive referrals from upstream systems, used to access information about a patient's SDOH-related conditions, particularly those that are the reason for a referral"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a Condition that is the requester or performer of a ServiceRequest."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Conditions that are referenced by ServiceRequests."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known Condition records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only SDOH-related conditions"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "clinical-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-clinical-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only active conditions"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only specific SDOH conditions or sets of conditions"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only conditions associated with a specific patient.  Some systems will require that searches be patient-specific"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "verification-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-verification-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to exclude refuted or entered-in-error conditions"
* rest.resource[+].type = #Observation
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationAssessment"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ObservationScreeningResponse"
* rest.resource[=].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].documentation = "Allows patients and caregivers to see observations recorded by their care providers, including those referenced by other resources"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve an Observation referenced by a ServiceRequest or other resource."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the retrieval of Observations recorded about a patient and/or monitoring of previously-retrieved Observations (though typically, they won't change once recorded)."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known Observation records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have been created or changed since last query"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Condition-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only SDOH-related observations"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only specific SDOH observation types"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only conditions associated with a specific patient.  Some systems will require that searches be patient-specific"
* rest.resource[+].type = #Consent
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Consent"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Used to access the consent that authorizes disclosure of ServiceRequest information to non-HIPAA-covered entities"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a Consent referenced as a 'supportingInformation' item of a ServiceRequest."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Consents related to ServiceRequests of interest."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchInclude = "Consent:source-reference:DocumentReference"
* rest.resource[=].searchInclude.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude.extension.valueCode = #SHOULD
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known consent records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "source-reference"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Consent-source-reference"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows including the document that contains the PDF or similar representation of a paper consent"
* rest.resource[+].type = #Device
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/StructureDefinition/Device"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Used to retrieve the requester or intended performer of an SDOH ServiceRequest.  Note: Conformance expectations for this resource are lower because Device requesters and performers are expected to be uncommon in most SDOH uses"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a Device that is the requester or intended performer of a ServiceRequest."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Devices that are the requester or intended performer of ServiceRequests."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known Device records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[+].type = #DocumentReference
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Used to retrieve a scanned or other form of document representing the text of a consent.  Also used for PDF forms."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[=].documentation = "Allows the app to record a new PDF (e.g. a completed form)"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[=].documentation = "Allows the system to revise a previously stored PDF"
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a PDF or similar content referenced by a Consent or Task."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved DocumentReferences in the event the image/document is amended/corrected/updated."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known DocumentReference records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[+].type = #Goal
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Goal"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Used to access goals related to an SDOH referral"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a goal referenced by a ServiceRequest."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Goals in the event they are updated."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known Goal records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "achievement-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-achievement-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only include unmet goals"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only include SDOH-related goals"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "lifecycle-status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-lifecycle-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only include active goals"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only include goals for a particular patient.  Some systems will require searches to be patient-specific"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "target-date"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Goal-target-date"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering based on when a particular goal is desired to be achieved"
* rest.resource[+].type = #HealthcareService
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-HealthcareService"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Allows patient apps to retrieve information about who should be contacted (to book an appointment or for other reasons)"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a HealthcareService referenced by a Task."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved HealthcareServices."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known HealthcareService records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "location"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/HealthcareService-location"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieval of the phyical site(s) associated with a HealthService"
* rest.resource[+].type = #Location
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-Location"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Used to access information about the potential sites at which a requested service might be performed.  Allows a patient to evaluate the suitability of a proposed activity or service."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a Location that is an available location for a service."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Locations that are the intended locations for services."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known Location records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[+].type = #Practitioner
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Used to access information about an Practitioner that is the requester or intended performer of a ServiceRequest"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a Practitioner that is the requester or intended performer of a ServiceRequest."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved Practitioners that are the requester or intended performer of ServiceRequests."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known Practitioner records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[+].type = #PractitionerRole
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitionerrole"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Used to access information about an PractitionerRole that is the requester or intended performer of a ServiceRequest"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a PractitionerRole that is the requester or intended performer of a ServiceRequest."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved PractitionerRoles that are the requester or intended performer of ServiceRequests."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchInclude[0] = "PractitionerRole:organization"
* rest.resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest.resource[=].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known PractitionerRole records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "organization"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PractitionerRole-organization"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows doing an _include on Organization when retrieving the PractitionerRole"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "practitioner"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/PractitionerRole-practitioner"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows doing an _include on Practitioner when retrieving the PractitionerRole"
* rest.resource[+].type = #Questionnaire
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-extr-smap"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Used to retrieve SDOH-related Questionnaires to be filled out by a patient or representative.  Also allows retrieving Questionnaires associated with existing QuestionnaireResponses for editing by SMART-on-FHIR apps."
* rest.resource[=].interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction.extension.valueCode = #SHALL
* rest.resource[=].interaction.code = #search-type
* rest.resource[=].interaction.documentation = "Allows the referral source to search for questionnaires relevant to a patient context."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "url"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-url"
* rest.resource[=].searchParam[=].type = #uri
* rest.resource[=].searchParam[=].documentation = "Allows retrieving Questionnaires based on its canonical URL"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "version"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Questionnaire-version"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving a specific version of a Questionnaire"
* rest.resource[=].operation.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].operation.extension.valueCode = #MAY
* rest.resource[=].operation.name = "populate"
* rest.resource[=].operation.definition = "http://hl7.org/fhir/uv/sdc/OperationDefinition/Questionnaire-populate"
* rest.resource[=].operation.documentation = "Allows SMART on FHIR or other systems to pre-populate a questionnaire response with existing information either available locally or queried from elsewhere"
* rest.resource[+].type = #QuestionnaireResponse
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaireresponse"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Used to allow QuestionnaireResponses to be created and updated by a patient or caregiver and work-in-progress responses to be retrieved"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #create
* rest.resource[=].interaction[=].documentation = "Allows the creation of QuestionnaireResponses in response to Tasks."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[=].documentation = "Allows the revision of 'in progress' QuestionnaireResponses."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the retrieval of QuestionnaireResponses linked to a pointed to as supporting information by a ServiceRequest or as outputs of a Task."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows checking for updates in previously retrieved QuestionnaireResponses."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known QuestionnaireResponse records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "author"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-author"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows filtering QuestionnaireResponses previously created/edited by a particular individual"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "authored"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-authored"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for QuestionnaireResponses by when they were created/last edited"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponses associated with a particular patient.  Some systems may only permit searches that are patient-specific"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "questionnaire"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-questionnaire"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponses that have been completed against a specified form"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/QuestionnaireResponse-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving QuestionnaireResponses that are complete (or incomplete)"
* rest.resource[+].type = #RelatedPerson
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/StructureDefinition/RelatedPerson"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "Used to access information about the requester or intended performer of a ServiceRequest or Task when they are someone with a personal relationship to the Patient.  Note: Conformance expectations for this resource are lower because CareTeam performers are expected to be uncommon in most SDOH uses"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows the system to retrieve a RelatedPerson that is the requester or intended performer of a ServiceRequest."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the monitoring of previously-retrieved RelatedPersons that are the requester or intended performer of ServiceRequests."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known RelatedPerson records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[+].type = #ServiceRequest
* rest.resource[=].supportedProfile = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ServiceRequest"
* rest.resource[=].supportedProfile.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile.extension.valueCode = #SHALL
* rest.resource[=].documentation = "For referral sources that receive referrals from upstream systems, used to retrieve an order for SDOH-related services"
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows client systems to retrieve the ServiceRequest pointed to by a Task."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHOULD
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows client systems to monitor multiple ServiceRequests for change simultaneously via polling."
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchInclude[0] = "HealthCareService:location"
* rest.resource[=].searchInclude[+] = "ServiceRequest:supporting-info"
* rest.resource[=].searchInclude[+] = "ServiceRequest:pertains-to-goal"
* rest.resource[=].searchInclude[+] = "ServiceRequest:patient"
* rest.resource[=].searchInclude[+] = "ServiceRequest:requester"
* rest.resource[=].searchInclude[+] = "ServiceRequest:performer"
* rest.resource[=].searchInclude[+] = "PractitionerRole:practitioner"
* rest.resource[=].searchInclude[+] = "PractitionerRole:organization"
* rest.resource[=].searchInclude[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHALL
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchInclude[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchInclude[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known ServiceRequests records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "category"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-category"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only retrieve ServiceRequests that are SDOH-related"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to retrieve ServiceRequests for specific types of services"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "intent"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-intent"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to retrieve only 'order' ServiceRequests and not plans, proposals, etc."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "occurrence"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-occurrence"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering to retrieve ServiceRequests based on the timeframe in which the service needs to be provided"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/clinical-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows filtering to retrieve only ServiceRequests associated with a particular patient.  Note that some systems may mandate that searches are always patient-specific"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "performer"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-performer"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows filtering to retrieve only ServiceRequests that designate a specific performer"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "requester"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-requester"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows filtering to retrieve only ServiceRequests created by a specific practitioner"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/ServiceRequest-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to retrieve only active ServiceRequests"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "supporting-info"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/ServiceRequest-supporting-info"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows _include to retrieve supporting information for a ServiceRequest - particularly Consent"
* rest.resource[+].type = #Task
* rest.resource[=].supportedProfile[0] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-TaskForPatient"
* rest.resource[=].supportedProfile[+] = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-TaskForReferralManagement"
* rest.resource[=].supportedProfile[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].supportedProfile[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].supportedProfile[=].extension.valueCode = #SHALL
* rest.resource[=].documentation = "Allows the patient or caregiver to monitor and update for Task assigned by referral sources or coordination platforms.  Also allows the update and monitoring of tasks assigned to patients and caregivers."
* rest.resource[=].interaction[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #update
* rest.resource[=].interaction[=].documentation = "Allows modification of an assigned patient existing Task (e.g. to cancel it) or modificiation of a Task assigned to the referral recipient (to accept or reject it or add output links to performed procedures).  Systems SHALL ensure that only changes to Task.status, Task.statusReason, and Task.outputs are possible, and then only for Tasks where the owner is the patient."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #MAY
* rest.resource[=].interaction[=].code = #read
* rest.resource[=].interaction[=].documentation = "Allows retrieval of a Task that was previously accessed."
* rest.resource[=].interaction[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].interaction[=].extension.valueCode = #SHALL
* rest.resource[=].interaction[=].code = #search-type
* rest.resource[=].interaction[=].documentation = "Allows the other systems to poll multiple tasks simultaneously, as well as to retrieve referenced resources as part of a single query."
* rest.resource[=].versioning = #versioned-update
* rest.resource[=].conditionalRead = #modified-since
* rest.resource[=].referencePolicy = #literal
* rest.resource[=].searchInclude = "Task:output"
* rest.resource[=].searchParam[0].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "_id"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-id"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows retrieving known Task records - and more specifically, retrieving more than one in a single call to poll for updates"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "_lastUpdated"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Resource-lastUpdated"
* rest.resource[=].searchParam[=].type = #date
* rest.resource[=].searchParam[=].documentation = "Allows filtering for only records that have changed since last query"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "code"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-code"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering for 'fulfill' tasks as opposed to others.  Some systems may require code to be included as a filter criteria as different Task codes may correspond to different internal database tables."
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "owner"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-owner"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows filtering only for tasks that are assigned to a particular owner (or alternatively, tasks that have not yet been assigned)"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "patient"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-patient"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows monitoring of tasks associated with a particular patient.  (Some systems may require that all queries be done in the context of a single patient.)"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "requester"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-requester"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving all tasks that have been requested by a particular organization or individual.  This will commonly be used to monitor the tasks initiated by a particular system"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "status"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-status"
* rest.resource[=].searchParam[=].type = #token
* rest.resource[=].searchParam[=].documentation = "Allows filtering to only active or completed tasks"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHALL
* rest.resource[=].searchParam[=].name = "focus"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/SearchParameter/Task-focus"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows retrieving the task(s) seeking fulfillment of a particular ServiceRequest"
* rest.resource[=].searchParam[+].extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.resource[=].searchParam[=].extension.valueCode = #SHOULD
* rest.resource[=].searchParam[=].name = "output"
* rest.resource[=].searchParam[=].definition = "http://hl7.org/fhir/us/sdoh-clinicalcare/SearchParameter/Task-output-reference"
* rest.resource[=].searchParam[=].type = #reference
* rest.resource[=].searchParam[=].documentation = "Allows for the 'output' of a Task to be included when retrieving a Task"
* rest.interaction.extension.url = "http://hl7.org/fhir/StructureDefinition/capabilitystatement-expectation"
* rest.interaction.extension.valueCode = #SHOULD
* rest.interaction.code = #batch
* rest.interaction.documentation = "Allows polling for changes to multiple resource types simultaneously"


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-PractitionerDrJanWaterExample.fsh

Instance: SDOHCC-PractitionerDrJanWaterExample
InstanceOf: USCorePractitionerProfile
Title: "SDOHCC Practitioner Dr Jan Water Example"
Description: "An example of a Practitioner. This example is used as the referenced practitioner in other IG examples."
Usage: #example
* identifier[0].system = "http://hl7.org/fhir/sid/us-npi"
* identifier[=].value = "1111111111"
* identifier[+].system = "http://www.deerland.org/practitioners"
* identifier[=].value = "24242"
* active = true
* name.text = "Dr Jan Water"
* name.family = "Water"
* name.given = "Jan"
* name.prefix = "Dr"
* address.use = #home
* address.line = "318 Humble Street,"
* address.city = "Deerland"
* address.state = "IL"
* address.postalCode = "62223"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-PractitionerRoleDrJanWaterExample.fsh

Instance: SDOHCC-PractitionerRoleDrJanWaterExample
InstanceOf: USCorePractitionerRoleProfile
Title: "SDOHCC Practitioner Role Dr Jan Water Example"
Description: "An example of a family medicine physician PractitionerRole. This example is used as the referenced practitioner role in other IG examples."
Usage: #example
* identifier.system = "http://www.deerland.org/practitioners"
* identifier.value = "2424"
* active = true
* practitioner = Reference(SDOHCC-PractitionerDrJanWaterExample) "Dr Jan Water"
* organization = Reference(SDOHCC-OrganizationClinicExample) "Better Health Clinic"
* code = $provider-taxonomy#207Q00000X "Family Medicine Physician"
* telecom[0].system = #phone
* telecom[=].value = "639 442 6719"
* telecom[=].use = #work
* telecom[+].system = #email
* telecom[=].value = "jan.water@deerland.org"
* telecom[=].use = #work

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ProcedureFoodPantryApplicationAssistanceExample.fsh

Instance: SDOHCC-ProcedureFoodPantryApplicationAssistanceExample
InstanceOf: SDOHCCProcedure
Title: "SDOHCC Procedure Food Pantry Application Assistance Example"
Description: "An example of a completed Procedure for assistance with applying to a food pantry that is based on a ServiceRequest and references as its reason a food insecurity Condition."
Usage: #example
* basedOn.reference = "ServiceRequest/SDOHCC-ServiceRequestActiveFoodPantryApplicationAssistExample"
* status = #completed
* category.coding[0] = $sct#410606002 "Social service procedure"
* category.coding[+] = $SDOHCC-CodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* code = $sct#467771000124109 "Assistance with application for food pantry program"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* performedDateTime = "2020-09-16"
* reasonReference.reference = "Condition/SDOHCC-ConditionFoodInsecurityExample"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ProcedureProvisionOfFoodExample.fsh

Instance: SDOHCC-ProcedureProvisionOfFoodExample
InstanceOf: SDOHCCProcedure
Title: "SDOHCC Procedure Provision Of Food Example"
Description: "An example of a completed Procedure for provision of food."
Usage: #example
* status = #completed
* category.coding[0] = $sct#410606002 "Social service procedure"
* category.coding[+] = $SDOHCC-CodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* code = $sct#710925007 "Provision of food"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* performedDateTime = "2020-11-16"
* reasonReference.reference = "Condition/SDOHCC-ConditionFoodInsecurityExample"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-ProcedureSummerFoodProgramApplicationAssistanceExample.fsh

Instance: SDOHCC-ProcedureSummerFoodProgramApplicationAssistanceExample
InstanceOf: SDOHCCProcedure
Title: "SDOHCC Procedure Summer Food Program Application Assistance Example"
Description: "An example of a completed Procedure for assistance with applying to a summer food program that is based on a ServiceRequest and references as its reason a food insecurity Condition."
Usage: #example
* basedOn.reference = "ServiceRequest/SDOHCC-ServiceRequestSubreferralSummerFoodProgramExample"
* status = #completed
* category.coding[0] = $sct#410606002 "Social service procedure"
* category.coding[+] = $SDOHCC-CodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* code = $sct#467681000124101 "Assistance with application for Summer Food Service Program"
* subject.reference = "Patient/pat-53234"
* subject.display = "COLIN ABBAS"
* performedDateTime = "2020-09-22"
* reasonReference.reference = "Condition/SDOHCC-ConditionFoodInsecurityExample"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-QuestionnaireHungerVitalSign.fsh

Instance: SDOHCC-QuestionnaireHungerVitalSign
InstanceOf: SDCQuestionnaireExtractStructureMap
Title: "SDOHCC Questionnaire Hunger Vital Sign"
Description: "A Questionnaire instance that represents the questions and answers from the LOINC Hunger Vital Sign [HVS] questionnaire (LOINC code 88121-9)."
Usage: #example
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/variable"
* extension[=].valueExpression.name = "worriedAnsCode"
* extension[=].valueExpression.language = #text/fhirpath
* extension[=].valueExpression.expression = "%resource.item.where(linkId='/88122-7').answer.value.code"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/variable"
* extension[=].valueExpression.name = "ranOutAnsCode"
* extension[=].valueExpression.language = #text/fhirpath
* extension[=].valueExpression.expression = "%resource.item.where(linkId='/88123-5').answer.value.code"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/variable"
* extension[=].valueExpression.name = "riskCodes"
* extension[=].valueExpression.language = #text/fhirpath
* extension[=].valueExpression.expression = "'LA28397-0'.combine('LA6729-3')"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/variable"
* extension[=].valueExpression.name = "riskStatus"
* extension[=].valueExpression.language = #text/fhirpath
* extension[=].valueExpression.expression = "%riskCodes contains %worriedAnsCode or %riskCodes contains %ranOutAnsCode"
* extension[+].url = "http://hl7.org/fhir/StructureDefinition/variable"
* extension[=].valueExpression.name = "answeredEitherQ"
* extension[=].valueExpression.language = #text/fhirpath
* extension[=].valueExpression.expression = "%worriedAnsCode.exists() or %ranOutAnsCode.exists()"
* extension[+].url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-targetStructureMap"
* extension[=].valueCanonical = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureMap/SDOHCC-StructureMapHungerVitalSign"
* url = "http://hl7.org/fhir/us/sdoh-clinicalcare/Questionnaire/SDOHCC-QuestionnaireHungerVitalSign"
* name = "SDOHCCQuestionnaireHungerVitalSign"
* title = "SDOHCC Questionnaire Hunger Vital Sign"
* status = #draft
* subjectType = #Patient
* date = "2020-09-01T04:01:34+00:00"
* item[0].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item[=].extension.valueCodeableConcept.text = "Drop down"
* item[=].linkId = "/88122-7"
* item[=].code = $loinc#88122-7 "Within the past 12 months we worried whether our food would run out before we got money to buy more [U.S. FSS]"
* item[=].text = "Within the past 12 months we worried whether our food would run out before we got money to buy more."
* item[=].type = #choice
* item[=].required = false
* item[=].answerOption[0].valueCoding = $loinc#LA28397-0 "Often true"
* item[=].answerOption[+].valueCoding = $loinc#LA6729-3 "Sometimes true"
* item[=].answerOption[+].valueCoding = $loinc#LA28398-8 "Never true"
* item[=].answerOption[+].valueCoding = $loinc#LA15775-2 "Don't know/refused"
* item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item[=].extension.valueCodeableConcept.text = "Drop down"
* item[=].linkId = "/88123-5"
* item[=].code = $loinc#88123-5 "Within the past 12 months the food we bought just didn't last and we didn't have money to get more [U.S. FSS]"
* item[=].text = "Within the past 12 months the food we bought just didn't last and we didn't have money to get more"
* item[=].type = #choice
* item[=].required = false
* item[=].answerOption[0].valueCoding = $loinc#LA28397-0 "Often true"
* item[=].answerOption[+].valueCoding = $loinc#LA6729-3 "Sometimes true"
* item[=].answerOption[+].valueCoding = $loinc#LA28398-8 "Never true"
* item[=].answerOption[+].valueCoding = $loinc#LA15775-2 "Don't know/refused"
* item[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item[=].extension[=].valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item[=].extension[=].valueCodeableConcept.text = "Drop down"
* item[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/variable"
* item[=].extension[=].valueExpression.name = "thisItem"
* item[=].extension[=].valueExpression.language = #text/fhirpath
* item[=].extension[=].valueExpression.expression = "%questionnaire.item.where(linkId = '/88124-3')"
* item[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/variable"
* item[=].extension[=].valueExpression.name = "atRiskCoding"
* item[=].extension[=].valueExpression.language = #text/fhirpath
* item[=].extension[=].valueExpression.expression = "%thisItem.answerOption.valueCoding.where(code='LA19952-3')"
* item[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/variable"
* item[=].extension[=].valueExpression.name = "noRiskCoding"
* item[=].extension[=].valueExpression.language = #text/fhirpath
* item[=].extension[=].valueExpression.expression = "%thisItem.answerOption.valueCoding.where(code='LA19983-8')"
* item[=].extension[+].url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression"
* item[=].extension[=].valueExpression.description = "risk determination"
* item[=].extension[=].valueExpression.language = #text/fhirpath
* item[=].extension[=].valueExpression.expression = "iif(%answeredEitherQ, iif(%riskStatus, %atRiskCoding, %noRiskCoding), {})"
* item[=].extension[+].url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-calculatedExpression"
* item[=].extension[=].valueExpression.description = "risk determination"
* item[=].extension[=].valueExpression.language = #text/fhirpath
* item[=].extension[=].valueExpression.expression = "iif(%answeredEitherQ, iif(%riskStatus, %atRiskCoding, %noRiskCoding), {})"
* item[=].linkId = "/88124-3"
* item[=].code = $loinc#88124-3 "Food insecurity risk [HVS]"
* item[=].text = "Food insecurity risk"
* item[=].type = #choice
* item[=].required = false
* item[=].answerOption[0].valueCoding = $loinc#LA19952-3 "At risk"
* item[=].answerOption[+].valueCoding = $loinc#LA19983-8 "No risk"
* item[=].item.extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item[=].item.extension.valueCodeableConcept = $questionnaire-item-control#help "Help-Button"
* item[=].item.extension.valueCodeableConcept.text = "Help-Button"
* item[=].item.linkId = "/88124-3-help"
* item[=].item.text = "An answer of \"often true\" or \"sometimes true\" to either or both of the Hunger Vital Sign™ questions identifies a patient as at risk for food insecurity (FI)."
* item[=].item.type = #display

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-QuestionnairePRAPARE.fsh

Instance: SDOHCC-QuestionnairePRAPARE
InstanceOf: SDCQuestionnaireExtractStructureMap
Title: "SDOHCC Questionnaire PRAPARE"
Description: "A Questionnaire instance that represents the questions and answers from the PRAPARE questionnaire represented in LOINC (code 93025-5)."
Usage: #example
* extension.url = "http://hl7.org/fhir/uv/sdc/StructureDefinition/sdc-questionnaire-targetStructureMap"
* extension.valueCanonical = "http://hl7.org/fhir/us/sdoh-clinicalcare/StructureMap/SDOHCC-StructureMapPRAPARE"
* url = "http://hl7.org/fhir/us/sdoh-clinicalcare/Questionnaire/SDOHCC-QuestionnairePRAPARE"
* name = "SDOHCCQuestionnairePRAPARE"
* title = "SDOHCC Questionnaire PRAPARE"
* status = #draft
* subjectType = #Patient
* date = "2021-04-01T04:01:34+00:00"
* publisher = "HL7 International - Patient Care WG"
* contact.name = "HL7 International - Patient Care"
* contact.telecom.system = #url
* contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* jurisdiction = urn:iso:std:iso:3166#US
* item.linkId = "/93025-5"
* item.code = $loinc#93025-5 "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]"
* item.text = "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]"
* item.type = #group
* item.required = false
* item.item[0].linkId = "/93043-8"
* item.item[=].code = $loinc#93043-8 "Personal characteristics [PRAPARE]"
* item.item[=].text = "Personal characteristics"
* item.item[=].type = #group
* item.item[=].required = false
* item.item[=].item[0].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93043-8/56051-6"
* item.item[=].item[=].code = $loinc#56051-6 "Hispanic or Latino"
* item.item[=].item[=].text = "Hispanic or Latino"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93043-8/32624-9"
* item.item[=].item[=].code = $loinc#32624-9 "Race"
* item.item[=].item[=].text = "Race"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].repeats = true
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA6156-9 "Asian"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA14045-1 "Native Hawaiian"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30187-1 "Pacific Islander"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA14042-8 "Black/African American"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA4457-3 "White"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA4-4 "American Indian/Alaskan Native"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA46-8 "Other"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93043-8/93035-4"
* item.item[=].item[=].code = $loinc#93035-4 "Has season or migrant farm work been your or your family's main source of income at any point in past 2 years [PRAPARE]"
* item.item[=].item[=].text = "Has season or migrant farm work been your or your family's main source of income at any point in past 2 years?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93043-8/93034-7"
* item.item[=].item[=].code = $loinc#93034-7 "Discharged from the U.S. Armed Forces"
* item.item[=].item[=].text = "Have you been discharged from the armed forces of the United States?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93043-8/54899-0"
* item.item[=].item[=].code = $loinc#54899-0 "Preferred language"
* item.item[=].item[=].text = "Preferred language"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA43-5 "English"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30188-9 "Language other than English"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[+].linkId = "/93042-0"
* item.item[=].code = $loinc#93042-0 "Family and home [PRAPARE]"
* item.item[=].text = "Family and home"
* item.item[=].type = #group
* item.item[=].required = false
* item.item[=].item[0].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit"
* item.item[=].item[=].extension.valueCoding = $unitsofmeasure#{#} "{#}"
* item.item[=].item[=].linkId = "/93042-0/63512-8"
* item.item[=].item[=].code = $loinc#63512-8 "How many people are living or staying at this address [#]"
* item.item[=].item[=].text = "How many people are living or staying at this address?"
* item.item[=].item[=].type = #integer
* item.item[=].item[=].required = false
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93042-0/71802-3"
* item.item[=].item[=].code = $loinc#71802-3 "Housing status"
* item.item[=].item[=].text = "Housing status"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA30189-7 "I have housing"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30190-5 "I do not have housing (staying with others, in a hotel, in a shelter, living outside on the street, on a beach, in a car, or in a park)"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[=].item.extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].item.extension.valueCodeableConcept = $questionnaire-item-control#help "Help-Button"
* item.item[=].item[=].item.extension.valueCodeableConcept.text = "Help-Button"
* item.item[=].item[=].item.linkId = "/93042-0/71802-3-help"
* item.item[=].item[=].item.text = "Describes patients living arrangement"
* item.item[=].item[=].item.type = #display
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93042-0/93033-9"
* item.item[=].item[=].code = $loinc#93033-9 "Are you worried about losing your housing [PRAPARE]"
* item.item[=].item[=].text = "Are you worried about losing your housing?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].linkId = "/93042-0/56799-0"
* item.item[=].item[=].code = $loinc#56799-0 "Address"
* item.item[=].item[=].text = "Address"
* item.item[=].item[=].type = #string
* item.item[=].item[=].required = false
* item.item[+].linkId = "/93041-2"
* item.item[=].code = $loinc#93041-2 "Money and resources [PRAPARE]"
* item.item[=].text = "Money and resources"
* item.item[=].type = #group
* item.item[=].required = false
* item.item[=].item[0].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93041-2/82589-3"
* item.item[=].item[=].code = $loinc#82589-3 "Highest level of educ"
* item.item[=].item[=].text = "Highest level of educ"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA30191-3 "Less than high school degree"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30192-1 "High school diploma or GED"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30193-9 "More than high school"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93041-2/67875-5"
* item.item[=].item[=].code = $loinc#67875-5 "Employment status current"
* item.item[=].item[=].text = "Employment status current"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA17956-6 "Unemployed"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30138-4 "Part-time or temporary work"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30136-8 "Full-time work"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30137-6 "Otherwise unemployed but not seeking work (ex: student, retired, disabled, unpaid primary care giver)"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93041-2/76437-3"
* item.item[=].item[=].code = $loinc#76437-3 "Primary insurance"
* item.item[=].item[=].text = "Primary insurance"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA30194-7 "None/uninsured"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA17849-3 "Medicaid"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30195-4 "CHIP Medicaid"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA15652-3 "Medicare"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30196-2 "Other public insurance (not CHIP)"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30197-0 "Other public insurance (CHIP)"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA6350-8 "Private insurance"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-unit"
* item.item[=].item[=].extension.valueCoding = $unitsofmeasure#/a "/a"
* item.item[=].item[=].linkId = "/93041-2/63586-2"
* item.item[=].item[=].code = $loinc#63586-2 "What was your best estimate of the total income of all family members from all sources, before taxes, in last year [PhenX]"
* item.item[=].item[=].text = "What was your best estimate of the total income of all family members from all sources, before taxes, in last year?"
* item.item[=].item[=].type = #decimal
* item.item[=].item[=].required = false
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93041-2/93031-3"
* item.item[=].item[=].code = $loinc#93031-3 "Have you or any family members you live with been unable to get any of the following when it was really needed in past 1 year [PRAPARE]"
* item.item[=].item[=].text = "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].repeats = true
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA30125-1 "Food"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30126-9 "Clothing"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30124-4 "Utilities"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30127-7 "Child care"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30128-5 "Medicine or Any Health Care (Medical, Dental, Mental Health, Vision)"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30129-3 "Phone"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA46-8 "Other"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93041-2/93030-5"
* item.item[=].item[=].code = $loinc#93030-5 "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living"
* item.item[=].item[=].text = "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].repeats = true
* item.item[=].item[=].answerOption[0].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix"
* item.item[=].item[=].answerOption[=].extension.valueString = "A"
* item.item[=].item[=].answerOption[=].valueCoding = $loinc#LA30133-5 "Yes, it has kept me from medical appointments or from getting my medications"
* item.item[=].item[=].answerOption[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix"
* item.item[=].item[=].answerOption[=].extension.valueString = "B"
* item.item[=].item[=].answerOption[=].valueCoding = $loinc#LA30134-3 "Yes, it has kept me from non-medical meetings, appointments, work, or from getting things that I need"
* item.item[=].item[=].answerOption[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix"
* item.item[=].item[=].answerOption[=].extension.valueString = "C"
* item.item[=].item[=].answerOption[=].valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].answerOption[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix"
* item.item[=].item[=].answerOption[=].extension.valueString = "X"
* item.item[=].item[=].answerOption[=].valueCoding = $loinc#LA30257-2 "Patient unable to respond"
* item.item[+].linkId = "/93040-4"
* item.item[=].code = $loinc#93040-4 "Social and emotional health [PRAPARE]"
* item.item[=].text = "Social and emotional health"
* item.item[=].type = #group
* item.item[=].required = false
* item.item[=].item[0].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93040-4/93029-7"
* item.item[=].item[=].code = $loinc#93029-7 "How often do you see or talk to people that you care about and feel close to [PRAPARE]"
* item.item[=].item[=].text = "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA27722-0 "Less than once a week"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30130-1 "1 or 2 times a week"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30131-9 "3 to 5 times a week"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30132-7 "5 or more times a week"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93040-4/93038-8"
* item.item[=].item[=].code = $loinc#93038-8 "Stress level"
* item.item[=].item[=].text = "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA6568-5 "Not at all"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA13863-8 "A little bit"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA13909-9 "Somewhat"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA13902-4 "Quite a bit"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA13914-9 "Very much"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[+].linkId = "/93039-6"
* item.item[=].code = $loinc#93039-6 "Optional additional questions [PRAPARE]"
* item.item[=].text = "Optional additional questions"
* item.item[=].type = #group
* item.item[=].required = false
* item.item[=].item[0].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93039-6/93028-9"
* item.item[=].item[=].code = $loinc#93028-9 "Have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility in past 1 year [PRAPARE]"
* item.item[=].item[=].text = "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93039-6/93027-1"
* item.item[=].item[=].code = $loinc#93027-1 "Are you a refugee"
* item.item[=].item[=].text = "Are you a refugee?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93039-6/93026-3"
* item.item[=].item[=].code = $loinc#93026-3 "Do you feel physically and emotionally safe where you currently live [PRAPARE]"
* item.item[=].item[=].text = "Do you feel physically and emotionally safe where you currently live?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA14072-5 "Unsure"
* item.item[=].item[=].answerOption[+].valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].extension.url = "http://hl7.org/fhir/StructureDefinition/questionnaire-itemControl"
* item.item[=].item[=].extension.valueCodeableConcept = $questionnaire-item-control#drop-down "Drop down"
* item.item[=].item[=].extension.valueCodeableConcept.text = "Drop down"
* item.item[=].item[=].linkId = "/93039-6/76501-6"
* item.item[=].item[=].code = $loinc#76501-6 "Within the last year, have you been afraid of your partner or ex-partner"
* item.item[=].item[=].text = "Within the last year, have you been afraid of your partner or ex-partner?"
* item.item[=].item[=].type = #choice
* item.item[=].item[=].required = false
* item.item[=].item[=].answerOption[0].extension[0].url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix"
* item.item[=].item[=].answerOption[=].extension[=].valueString = "1"
* item.item[=].item[=].answerOption[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/ordinalValue"
* item.item[=].item[=].answerOption[=].extension[=].valueDecimal = 1
* item.item[=].item[=].answerOption[=].valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[=].answerOption[+].extension[0].url = "http://hl7.org/fhir/StructureDefinition/questionnaire-optionPrefix"
* item.item[=].item[=].answerOption[=].extension[=].valueString = "0"
* item.item[=].item[=].answerOption[=].extension[+].url = "http://hl7.org/fhir/StructureDefinition/ordinalValue"
* item.item[=].item[=].answerOption[=].extension[=].valueDecimal = 0
* item.item[=].item[=].answerOption[=].valueCoding = $loinc#LA32-8 "No"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-QuestionnaireResponseHungerVitalSignExample.fsh

Instance: SDOHCC-QuestionnaireResponseHungerVitalSignExample
InstanceOf: SDCQuestionnaireResponse
Title: "SDOHCC QuestionnaireResponse Hunger Vital Sign Example"
Description: "An example of an SDC QuestionnaireResponse that represents questions and selected answers from the LOINC Hunger Vital Sign [HVS] questionnaire (LOINC code 88121-9). The example is generated using the LHC-Forms SDC Questionnaire App."
Usage: #example
* questionnaire = "http://hl7.org/fhir/us/sdoh-clinicalcare/Questionnaire/SDOHCC-QuestionnaireHungerVitalSign"
* questionnaire.extension.url = "http://hl7.org/fhir/StructureDefinition/display"
* questionnaire.extension.valueString = "SDOHCC Questionnaire Hunger Vital Sign"
* status = #completed
* subject = Reference(pat-53234) "COLIN ABBAS"
* authored = "2020-09-10T21:56:54.671Z"
* source = Reference(pat-53234) "COLIN ABBAS"
* item[0].linkId = "/88122-7"
* item[=].text = "Within the past 12 months we worried whether our food would run out before we got money to buy more."
* item[=].answer.valueCoding = $loinc#LA28397-0 "Often true"
* item[+].linkId = "/88123-5"
* item[=].text = "Within the past 12 months the food we bought just didn't last and we didn't have money to get more"
* item[=].answer.valueCoding = $loinc#LA28397-0 "Often true"
* item[+].linkId = "/88124-3"
* item[=].text = "Food insecurity risk"
* item[=].answer.valueCoding = $loinc#LA19952-3 "At risk"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/instances/SDOHCC-QuestionnaireResponsePRAPAREExample.fsh

Instance: SDOHCC-QuestionnaireResponsePRAPAREExample
InstanceOf: SDCQuestionnaireResponse
Title: "SDOHCC QuestionnaireResponse PRAPARE Example"
Description: "An example of an SDC QuestionnaireResponse that represents questions and selected answers from the PRAPARE questionnaire represented in LOINC (code 93025-5). The example is generated using the LHC-Forms SDC Questionnaire App."
Usage: #example
* questionnaire = "http://hl7.org/fhir/us/sdoh-clinicalcare/Questionnaire/SDOHCC-QuestionnairePRAPARE"
* questionnaire.extension.url = "http://hl7.org/fhir/StructureDefinition/display"
* questionnaire.extension.valueString = "SDOHCC Questionnaire PRAPARE"
* status = #completed
* subject = Reference(pat-53234) "COLIN ABBAS"
* authored = "2021-04-26T13:56:33.747Z"
* item.linkId = "/93025-5"
* item.text = "Protocol for Responding to and Assessing Patients' Assets, Risks, and Experiences [PRAPARE]"
* item.item[0].linkId = "/93043-8"
* item.item[=].text = "Personal characteristics"
* item.item[=].item[0].linkId = "/93043-8/56051-6"
* item.item[=].item[=].text = "Hispanic or Latino"
* item.item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[+].linkId = "/93043-8/32624-9"
* item.item[=].item[=].text = "Race"
* item.item[=].item[=].answer[0].valueCoding = $loinc#LA4457-3 "White"
* item.item[=].item[=].answer[+].valueCoding = $loinc#LA30187-1 "Pacific Islander"
* item.item[=].item[+].linkId = "/93043-8/93035-4"
* item.item[=].item[=].text = "Has season or migrant farm work been your or your family's main source of income at any point in past 2 years?"
* item.item[=].item[=].answer.valueCoding = $loinc#LA33-6 "Yes"
* item.item[=].item[+].linkId = "/93043-8/93034-7"
* item.item[=].item[=].text = "Have you been discharged from the armed forces of the United States?"
* item.item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[+].linkId = "/93043-8/54899-0"
* item.item[=].item[=].text = "Preferred language"
* item.item[=].item[=].answer.valueCoding = $loinc#LA43-5 "English"
* item.item[+].linkId = "/93042-0"
* item.item[=].text = "Family and home"
* item.item[=].item[0].linkId = "/93042-0/63512-8"
* item.item[=].item[=].text = "How many people are living or staying at this address?"
* item.item[=].item[=].answer.valueInteger = 6
* item.item[=].item[+].linkId = "/93042-0/71802-3"
* item.item[=].item[=].text = "Housing status"
* item.item[=].item[=].answer.valueCoding = $loinc#LA30190-5 "I do not have housing (staying with others, in a hotel, in a shelter, living outside on the street, on a beach, in a car, or in a park)"
* item.item[=].item[+].linkId = "/93042-0/93033-9"
* item.item[=].item[=].text = "Are you worried about losing your housing?"
* item.item[=].item[=].answer.valueCoding = $loinc#LA30122-8 "I choose not to answer this question"
* item.item[=].item[+].linkId = "/93042-0/56799-0"
* item.item[=].item[=].text = "Address"
* item.item[=].item[=].answer.valueString = "Broadway"
* item.item[+].linkId = "/93041-2"
* item.item[=].text = "Money and resources"
* item.item[=].item[0].linkId = "/93041-2/82589-3"
* item.item[=].item[=].text = "Highest level of educ"
* item.item[=].item[=].answer.valueCoding = $loinc#LA30191-3 "Less than high school degree"
* item.item[=].item[+].linkId = "/93041-2/67875-5"
* item.item[=].item[=].text = "Employment status current"
* item.item[=].item[=].answer.valueCoding = $loinc#LA17956-6 "Unemployed"
* item.item[=].item[+].linkId = "/93041-2/76437-3"
* item.item[=].item[=].text = "Primary insurance"
* item.item[=].item[=].answer.valueCoding = $loinc#LA17849-3 "Medicaid"
* item.item[=].item[+].linkId = "/93041-2/63586-2"
* item.item[=].item[=].text = "What was your best estimate of the total income of all family members from all sources, before taxes, in last year?"
* item.item[=].item[=].answer.valueDecimal = 25000
* item.item[=].item[+].linkId = "/93041-2/93031-3"
* item.item[=].item[=].text = "In the past year, have you or any family members you live with been unable to get any of the following when it was really needed?"
* item.item[=].item[=].answer[0].valueCoding = $loinc#LA30126-9 "Clothing"
* item.item[=].item[=].answer[+].valueCoding = $loinc#LA30127-7 "Child care"
* item.item[=].item[+].linkId = "/93041-2/93030-5"
* item.item[=].item[=].text = "Has lack of transportation kept you from medical appointments, meetings, work, or from getting things needed for daily living?"
* item.item[=].item[=].answer[0].valueCoding = $loinc#LA30134-3 "Yes, it has kept me from non-medical meetings, appointments, work, or from getting things that I need"
* item.item[=].item[=].answer[+].valueCoding = $loinc#LA30133-5 "Yes, it has kept me from medical appointments or from getting my medications"
* item.item[+].linkId = "/93040-4"
* item.item[=].text = "Social and emotional health"
* item.item[=].item[0].linkId = "/93040-4/93029-7"
* item.item[=].item[=].text = "How often do you see or talk to people that you care about and feel close to (For example: talking to friends on the phone, visiting friends or family, going to church or club meetings)?"
* item.item[=].item[=].answer.valueCoding = $loinc#LA30130-1 "1 or 2 times a week"
* item.item[=].item[+].linkId = "/93040-4/93038-8"
* item.item[=].item[=].text = "Stress is when someone feels tense, nervous, anxious or can't sleep at night because their mind is troubled. How stressed are you?"
* item.item[=].item[=].answer.valueCoding = $loinc#LA13909-9 "Somewhat"
* item.item[+].linkId = "/93039-6"
* item.item[=].text = "Optional additional questions"
* item.item[=].item[0].linkId = "/93039-6/93028-9"
* item.item[=].item[=].text = "In the past year, have you spent more than 2 nights in a row in a jail, prison, detention center, or juvenile correctional facility?"
* item.item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[+].linkId = "/93039-6/93027-1"
* item.item[=].item[=].text = "Are you a refugee?"
* item.item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[+].linkId = "/93039-6/93026-3"
* item.item[=].item[=].text = "Do you feel physically and emotionally safe where you currently live?"
* item.item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"
* item.item[=].item[+].linkId = "/93039-6/76501-6"
* item.item[=].item[=].text = "Within the last year, have you been afraid of your partner or ex-partner?"
* item.item[=].item[=].answer.valueCoding = $loinc#LA32-8 "No"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Con-1.fsh

Invariant: SDOH-Con-1
Description: "Can only have a max of one asserter."
Severity: #error
Expression: "extension('http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ExtensionConditionAsserter').count()+asserter.count()<=1"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Ethnicity-1.fsh

Invariant: SDOH-Ethnicity-1
Description: "Must have either a dataAbsentReason or at least one of the defined ethnicity components but not both"
Severity: #error
Expression: "dataAbsentReason.exists() xor component.where(code.coding.exists(system='http://loinc.org' and code='69490-1')).exists()"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Obs-1.fsh

Invariant: SDOH-Obs-1
Description: "Either subject or extension-Observation.subject must exist but not both"
Severity: #error
Expression: "subject.exists() xor extension('http://hl7.org/fhir/5.0/StructureDefinition/extension-Observation.subject').exists()"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Obs-2.fsh

Invariant: SDOH-Obs-2
Description: "Focus is only allowed if subject is present"
Severity: #error
Expression: "focus.exists() implies subject.exists()"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Obs-3.fsh

Invariant: SDOH-Obs-3
Description: "Must have either performer or derivedFrom"
Severity: #error
Expression: "performer.exists() or derivedFrom.exists()"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Race-1.fsh

Invariant: SDOH-Race-1
Description: "Must have either a dataAbsentReason or at least one of the defined race components but not both"
Severity: #error
Expression: "dataAbsentReason.exists() xor component.where(code.coding.exists(system='http://loinc.org' and code='72826-1')).exists()"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Task-1.fsh

Invariant: SDOH-Task-1
Description: "If Task.code is “complete-questionnaire”, then exactly one Task.input of either \"questionnaire\", \"questionnaire-pdf\", or \"questionnaire-url\" is required and Task.input \"questionnaire-category\" is required."
Severity: #error
Expression: "code.coding.where(system='http://hl7.org/fhir/uv/sdc/CodeSystem/temp' and code='complete-questionnaire').exists() implies ((input.type.coding.where(system='http://hl7.org/fhir/uv/sdc/CodeSystem/temp' and code='questionnaire').exists() xor input.type.coding.where(system='http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes' and code='questionnaire-pdf').exists() xor input.type.coding.where(system='http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes' and code='questionnaire-url').exists()) and input.type.coding.where(system='http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes' and code='questionnaire-category').exists())"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Task-2.fsh

Invariant: SDOH-Task-2
Description: "If Task.code is “general-information”, then Task.description is required and Task.output, if present, must be “general-information-response”."
Severity: #error
Expression: "code.coding.where(system='http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes' and code='general-information').exists() implies (description.exists() and (output.empty() or output.type.coding.all(system='http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes' and code='general-information-response').exists()))"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Task-3.fsh

Invariant: SDOH-Task-3
Description: "If Task.code is \"review-material\", then Task.focus of DocumentReference is required."
Severity: #error
Expression: "code.coding.where(system='http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes' and code='review-material').exists() 
 implies focus.resolve().all($this is DocumentReference)"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Task-4.fsh

Invariant: SDOH-Task-4
Description: "If Task.code is \"make-contact\", then Task.input of at least one \"contact-entity\" is required."
Severity: #error
Expression: "code.coding.where(system='http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes' and code='make-contact').exists() implies input.type.coding.where(system='http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes' and code='contact-entity').exists()"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Task-5.fsh

Invariant: SDOH-Task-5
Description: "If Task.input is \"questionnaire\", then Task.output, if present, must be \"questionnaire-response\"."
Severity: #error
Expression: "input.type.coding.where(system='http://hl7.org/fhir/uv/sdc/CodeSystem/temp' and code='questionnaire').exists() implies (output.type.coding.where(system='http://hl7.org/fhir/uv/sdc/CodeSystem/temp' and code='questionnaire-response').exists() or output.empty())"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Task-6.fsh

Invariant: SDOH-Task-6
Description: "If Task.input is \"questionnaire-pdf\", then Task.output, if present, must be \"questionnaire-pdf-completed\"."
Severity: #error
Expression: "input.type.coding.where(system='http://hl7.org/fhir/uv/sdc/CodeSystem/temp' and code='questionnaire-pdf').exists() implies (output.type.coding.where(system='http://hl7.org/fhir/uv/sdc/CodeSystem/temp' and code='questionnaire-pdf-completed').exists() or output.empty())"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/invariants/SDOH-Task-7.fsh

Invariant: SDOH-Task-7
Description: "If Task.code is \"make-contact\", then Task.description is required and Task.output, if present, must be \"chosen-contact\"."
Severity: #error
Expression: "code.coding.where(system='http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes' and code='make-contact').exists() implies (description.exists() and (output.empty() or output.type.coding.all(system='http://hl7.org/fhir/us/sdoh-clinicalcare/CodeSystem/SDOHCC-CodeSystemTemporaryCodes' and code='chosen-contact').exists()))"
XPath: "true()"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCCondition.fsh

Profile: SDOHCCCondition
Parent: USCoreCondition
Id: SDOHCC-Condition
Title: "SDOHCC Condition"
Description: "Profile for Social Determinants of Health (SDOH) conditions."
* ^status = #active
* obeys SDOH-Con-1
* . ^short = "Detailed information about SDOH conditions, problems or diagnoses"
* . ^definition = "For representation of SDOH conditions."
* . ^comment = "Many of the SDOHCC profiles reference one another. One flow supported by this IG is that QuestionnaireResponses result in Observations that can be used as evidence for Conditions that can lead to Goals, ServiceRequests and Procedures. However, alternatives paths (e.g., to arrive at SDOH Conditions) are also possible.\r\n\r\nOne specific use for this profile is to represent a Health Concern that is either; 1) directly asserted based on the patient’s answer to a specific question from an SDOH screening questionnaire or 2) computed/generated based on the patient’s answers to multiple questions. The questions and answers from the screening questionnaire are also represented using SDC Questionnaire, SDC QuestionnaireResponse and SDOHCC Screening Response Observation."
* insert OwningCommitteeExtension
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains SDOHCCExtensionConditionAsserter named asserterDevice 0..1 MS
//* extension[asserterDevice] ^requirements = "For a condition that is autogenerated based on a computation that uses the patient’s answers to multiple questions on a SDOH questionnaire, this extension should be used to specify the device used to compute the condition."
* extension[asserterDevice] ^condition = "SDOH-Con-1"
* extension[asserterDevice].value[x] only Reference(Device)
* verificationStatus ^comment = "verificationStatus is not required.  For example, when a patient complains of stress during a provider encounter, there is not likely going to be a verification status. The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.\r\n\r\nFor SDOH conditions that are autogenerated based on a questionnaire response, the Condition.asserter is a “Device” AND Condition.Category should be \"health-concern\". In that case, Condition.verificationStatus should be \"unconfirmed\" and should be changed to “confirmed” only after review and concurrence by the provider and patient."
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category ^requirements = "For a condition that is autogenerated based only on an individual's responses to an SDOH questionnaire, category should be \"health-concern\"."
* category contains SDOH 0..*
* category[SDOH] from SDOHCCValueSetSDOHCategory (required)
* category[SDOH] ^short = "e.g., food-insecurity | transportation-insecurity"
* category[SDOH] ^definition = "An SDOH category assigned to the condition."
* category[SDOH] ^requirements = "Codes from this value set can be used to assign one or more SDOH categories (e.g., food-insecurity, transportation-insecurity, etc.) to a condition. It is recommended that SDOH category codes be used to facilitate searching for SDOH conditions."
* category[SDOH] ^binding.description = "Codes for high-level SDOH categories."
* code from USCoreConditionCode (required)
* code ^requirements = "Code is required and must be selected from the bound value set."
* code ^binding.description = "Valueset to describe the actual problem experienced by the patient"


* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, digital-access, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.231, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, digital-literacy, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.224, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, educational-attainment, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.103, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, elder-abuse, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.63, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, employment-status, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.42, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, financial-insecurity, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.108, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, food-insecurity, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.17, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, health-insurance-coverage-status, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.148, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, homelessness, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.18, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, housing-instability, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.24, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, inadequate-housing, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.48, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, intimate-partner-violence, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.84, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, material-hardship, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.35, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, medical-cost-burden, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.153, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, personal-health-literacy, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.116, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, social-connection, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.81, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, stress, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.75, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, transportation-insecurity, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.26, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, utility-insecurity, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.243, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, veteran-status, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.78, extensible)
* insert AdditionalBinding(SDOHCCCondition, code, Condition.category, sdoh-category-unspecified, http://hl7.org/fhir/us/core/ValueSet/us-core-condition-code, required)


* bodySite ..0
* subject ^definition = "Indicates the patient who the condition record is associated with."
* subject ^requirements = "US Core Condition Profile restricts subject to patient."
* onset[x] only dateTime or Period
* onset[x] MS
* onset[x] ^short = "Estimated dateTime or Period"
* onset[x] ^definition = "Estimated or actual dateTime or Period the condition began."
* onset[x] ^comment = "For SDOH conditions that have their onset over an extended (or fuzzy) period (e.g., the past month), Condition.onset may use a lower precision representation (e.g., month/year or year) as opposed to a higher precision representation (e.g., year/month/date/hour/min)."
* abatement[x] only dateTime or Period
* abatement[x] MS
* abatement[x] ^definition = "The estimated or actual dateTime or Period that the condition resolved or went into remission. This is called \"abatement\" because of the many overloaded connotations associated with \"remission\" or \"resolution\"."
* abatement[x] ^comment = "There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.\r\n\r\nFor SDOH Conditions that have a fuzzy abatement period, a lower precision representation (e.g., month/year or year) may be used. However, for SDOH Conditions that end at a specific point in time (e.g., food insecurity may abate upon acquiring a new job or gaining eligibility to a food program) a higher precision representation (e.g., year/month/date) may also be used."
* recorder only Reference(Practitioner or PractitionerRole)
//* recorder ^requirements = "For a condition that is autogenerated based on a QuestionnaireResponse, the AsserterDevice extension should be used to specify the device used to compute the condition and recorder should be empty."
* asserter only Reference(RelatedPerson or USCorePatientProfile or USCorePractitionerProfile or USCorePractitionerRoleProfile)
* asserter MS
* asserter ^short = "Person or device that asserts this condition"
* asserter ^definition = "The individual or device making the condition statement."
* asserter ^comment = "References SHALL be a reference to an actual FHIR resource, and SHALL be resolveable (allowing for access control, temporary unavailability, etc.). Resolution can be either by retrieval from the URL, or, where applicable by resource type, by treating an absolute reference as a canonical URL and looking it up in a local registry/repository.\r\n\r\nFor a condition that is autogenerated based on the patient directly answering a specific question from an SDOH screening questionnaire, the Condition.asserter should be the patient. For a condition that is autogenerated based on a computation that uses the patient’s answers to multiple questions, Condition.asserter should reference “Device” (using the using AsserterDevice extension) to specify the device used to compute the condition."
* asserter ^condition = "SDOH-Con-1"
* stage ..0
* evidence MS
* evidence.code ^comment = "Not all terminology uses fit this general pattern. In some cases, models should not use CodeableConcept and use Coding directly and provide their own structure for managing text, codings, translations and the relationship between elements and pre- and post-coordination.\r\n\r\nInformation represented by Condition.evidence.code may overlap significantly with information represented by Condition.evidence.detail. Multiple approaches to representing the same information may negatively impact interoperability. Therefore, where similar infomation could be provided by either Condition.evidence.code or Condition.evidence.detail, it is recommended that Condition.evidence.detail should be used as supporting evidence for the condition.\r\n\r"
* evidence.detail ^slicing.discriminator.type = #profile
* evidence.detail ^slicing.discriminator.path = "resolve()"
* evidence.detail ^slicing.rules = #open
* evidence.detail ^comment = "References SHALL be a reference to an actual FHIR resource, and SHALL be resolveable (allowing for access control, temporary unavailability, etc.). Resolution can be either by retrieval from the URL, or, where applicable by resource type, by treating an absolute reference as a canonical URL and looking it up in a local registry/repository.\r\n\r\nAdditionally, see Comment for Condition.evidence.code."
* evidence.detail contains SupportedDetail 0..* MS
* evidence.detail[SupportedDetail] only Reference(SDOHCCObservationScreeningResponse or SDOHCCCondition or SDOHCCObservationAssessment or SDCQuestionnaireResponse)
* evidence.detail[SupportedDetail] ^definition = "Links to other relevant information."
//* evidence.detail[SupportedDetail] ^requirements = "When a condition is based on one or more SDOH observations that were generated from questionnaire responses, Condition.evidence.detail should reference instances that comply with the SDOHCC Screening Response Observation. However, references to other instance types are also possible."
* evidence.detail[SupportedDetail] ^requirements = "When a condition is based on one or more SDOH observations that were generated from questionnaire responses, Condition.evidence.detail should reference instances that comply with the SDOHCC Observation Screening Response or SDC Questionnaire Response. However, references to other instance types are also possible."

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCConsent.fsh

Profile: SDOHCCConsent
Parent: Consent
Id: SDOHCC-Consent
Title: "SDOHCC Consent"
Description: "Profile for consent related to the release of Social Determinants of Health (SDOH) information to non-HIPAA covered organizations."
* ^status = #active
* . ^definition = "A record of a healthcare consumer’s choices related to the release of SDOH information to non-HIPAA covered organizations."
* . ^comment = "Providers should consider including standard language to inform the patient that disclosure of their information to entities which are not HIPAA covered entities are no longer protected under the HIPAA Privacy Rule but may be protected by FTC Consumer Protection rules."
* insert OwningCommitteeExtension
* status MS
* status ^comment = "This element is labeled as a modifier because the status contains the codes rejected and entered-in-error that mark the Consent as not currently valid. \r\n\r\nIn general, when being exchanged with a community-based organization, Consent.status should reference the value “active”."
* scope MS
* scope ^comment = "The primary use for this element in the context of this implementation guide will be \"patient-privacy\" (Privacy Consent)."
* category ^slicing.discriminator.type = #pattern
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category contains IDSCL 1..1 MS
* category[IDSCL] = $v3-ActCode#IDSCL
* category[IDSCL] ^requirements = "The base resource requires category. For consent related to SDOH, ISCDL was the best choice of the required options."
* patient 1.. MS
* patient only Reference(USCorePatientProfile)
* dateTime 1.. MS
* dateTime ^requirements = "This is Must Support to allow a recipient to determine the \"order\" of multiple consents."
* performer only Reference(Organization or RelatedPerson or Practitioner or PractitionerRole or Patient)
* performer ^requirements = "This element is not mandatory . There is not a use case that Performer be computable since it will normally be present in the consent \"form\"."
* organization 1..1 MS
* organization only Reference(USCoreOrganizationProfile)
* source[x] 1.. MS
* source[x] only Attachment or Reference(Consent or Contract or USCoreDocumentReferenceProfile or QuestionnaireResponse)

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCGoal.fsh

Profile: SDOHCCGoal
Parent: USCoreGoalProfile
Id: SDOHCC-Goal
Title: "SDOHCC Goal"
Description: "Profile for goals that address Social Determinants of Health (SDOH)."
* ^status = #active
* . ^short = "Describes the intended SDOH-related objective(s) for a patient."
* . ^definition = "For representation of SDOH goals."
* . ^comment = "Many of the SDOHCC profiles reference one another. One flow supported by this IG is that QuestionnaireResponses result in Observations that can be used as evidence for Conditions that can lead to Goals, ServiceRequests and Procedures. However, alternatives paths are also possible."
* insert OwningCommitteeExtension
* achievementStatus MS
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category contains SDOH 0..* MS
* category[SDOH] from SDOHCCValueSetSDOHCategory (required)
* category[SDOH] ^short = "e.g., food-insecurity | transportation-insecurity"
* category[SDOH] ^definition = "An SDOH category assigned to the goal."
* category[SDOH] ^requirements = "Codes from this value set can be used to assign one or more SDOH categories (e.g., food-insecurity, transportation-insecurity, etc.) to a goal. It is recommended that SDOH category codes be used to facilitate searching for SDOH-related goals."
* category[SDOH] ^binding.description = "Codes for high-level SDOH categories."
* description from SDOHCCValueSetLOINCSNOMEDCT (preferred)
* description ^comment = "If no code is available, use CodeableConcept.text.\r\n\r"
* description ^binding.description = "Codes providing the details of a particular goal.  In many systems, only the text element will be used."

* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, digital-access, http://hl7.org/fhir/us/sdoh-clinicalcare/ValueSet/SDOHCC-ValueSetLOINCSNOMEDCT, preferred)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, digital-literacy, http://hl7.org/fhir/us/sdoh-clinicalcare/ValueSet/SDOHCC-ValueSetLOINCSNOMEDCT, preferred)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, educational-attainment, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.55, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, elder-abuse, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.65, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, employment-status, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.70, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, financial-insecurity, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.30, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, food-insecurity, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.16, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, health-insurance-coverage-status, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.121, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, homelessness, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.159, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, housing-instability, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.161, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, inadequate-housing, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.50, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, intimate-partner-violence, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.100, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, material-hardship, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.37, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, medical-cost-burden, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.120, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, personal-health-literacy, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.117, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, social-connection, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.89, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, stress, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.86, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, transportation-insecurity, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.163, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, utility-insecurity, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.245, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, veteran-status, http://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1247.214, extensible)
* insert AdditionalBinding(SDOHCCGoal, description, Goal.category, sdoh-category-unspecified, http://hl7.org/fhir/us/sdoh-clinicalcare/ValueSet/SDOHCC-ValueSetLOINCSNOMEDCT, preferred)



* subject ^definition = "Identifies the patient for whom the goal is being established."
* target.measure from LOINCCodes (preferred)
* target.measure ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* target.measure ^binding.extension.valueString = "GoalTargetMeasure"
* target.measure ^binding.description = "Codes to identify the value being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level."
* statusDate ^comment = "To see the date for past statuses, query history.\r\n\r\nThe Goal Resource does not clearly specify whether Goal.statusDate applies to Goal.achievementStatus or to Goal.lifecycleStatus. For consistent use in the SDOH context, it is recommended that Goal.statusDate be synchronized with Goal.achievementStatus."
* addresses only Reference(Condition or Observation or RiskAssessment)
* addresses ^slicing.discriminator.type = #profile
* addresses ^slicing.discriminator.path = "resolve()"
* addresses ^slicing.rules = #open
* addresses contains SupportedAddresses 0..* MS
* addresses[SupportedAddresses] only Reference(SDOHCCCondition or SDOHCCObservationScreeningResponse or SDOHCCObservationAssessment)
* addresses[SupportedAddresses] ^requirements = "When a goal addresses SDOH screening response observations generated from a survey/questionnaire, SDOH assessment observations, or SDOH conditions, Goal.addresses should reference instances that comply with the SDOHCC Observation Screening Response, SDOHCC Condition, or SDOHCC Observation Assessment profiles. However, references to other instance types are also possible."
* outcomeCode from SDOHCCValueSetLOINCSNOMEDCT (preferred)
* outcomeCode ^comment = "Note that this should not duplicate the goal status.\r\n\r\nInformation represented by Goal.outcomeCode may overlap significantly with information represented by Goal.outcomeReference. Multiple approaches to representing the same information may negatively impact interoperability. Therefore, where there is significant overlap in information provided by Goal.outcomeCode and Goal.outcomeReference, it is recommended that Goal.outcomeReference should be used to provide details of goal outcomes.\r\n\r"
* outcomeCode ^binding.description = "The result of the goal; e.g., \"Food security\", \"Has access to a car \"."
* outcomeReference ^slicing.discriminator.type = #profile
* outcomeReference ^slicing.discriminator.path = "resolve()"
* outcomeReference ^slicing.rules = #open
* outcomeReference ^comment = "The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.\r\n\r\nAdditionally, see comments for Goal.outcomeCode."
* outcomeReference contains SupportedOutcomeReference 0..* MS
* outcomeReference[SupportedOutcomeReference] only Reference(SDOHCCObservationScreeningResponse or SDOHCCObservationAssessment)
* outcomeReference[SupportedOutcomeReference] ^requirements = "When a goal outcome can be represented by SDOH screening response observations or SDOH assessment observations, Goal.outcome should reference instances that comply with the SDOHCC Observation Screening Response or SDOHCC Observation Assessment profiles. However, references to other instance types are also possible."

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCGroup.fsh

Profile: SDOHCCGroup
Parent: Group
Id: SDOHCC-Group
Title: "SDOHCC Group"
Description: "Profile for identifying groups of patients who have a Social Determinants of Health (SDOH) condition and are members of a specific payer organization."
* ^status = #active
* . ^short = "Group of SDOH patients for a payer"
* . ^definition = "For aggregation of individuals with a common set of characteristics (i.e., the same payer and and any condition in the specified SDOH categories) to enable organizations with the appropriate permissions to easily retrieve information related to the cohort of individuals for which they have a common responsibility."
* insert OwningCommitteeExtension
* active 1..
* active = true (exactly)
* type = #person (exactly)
* type ^short = "person"
* type ^definition = "Identifies that this is a group of persons."
* type ^requirements = "For this IG use case, this will only be used for a group of persons."
* actual = true (exactly)
* actual ^requirements = "Refers only to a specific group of real individuals."
* characteristic ^slicing.discriminator.type = #pattern
* characteristic ^slicing.discriminator.path = "code"
* characteristic ^slicing.rules = #open
* characteristic contains
    HasSDOHCondition 1..1 MS and
    HasPayer 1..1 MS
* characteristic[HasSDOHCondition] ^requirements = "To identify members who have an active instance of a condition with any Condition.category in the value set referenced by Group.characteristic.value[x] (i.e., SDOH conditions)."
* characteristic[HasSDOHCondition].code = $SDOHCC-CodeSystemTemporaryCodes#sdoh-condition-category
* characteristic[HasSDOHCondition].code MS
* characteristic[HasSDOHCondition].value[x] only Reference(ValueSet)
* characteristic[HasSDOHCondition].value[x] = Reference(http://hl7.org/fhir/us/sdoh-clinicalcare/ValueSet/SDOHCC-ValueSetSDOHCategory)
* characteristic[HasSDOHCondition].value[x] MS
* characteristic[HasSDOHCondition].exclude = false (exactly)
* characteristic[HasSDOHCondition].exclude MS
* characteristic[HasSDOHCondition].period ..0
* characteristic[HasPayer] ^definition = "Identifies traits whose presence or absence is shared by members of the group."
* characteristic[HasPayer] ^requirements = "To identify members who are covered by a payer referenced by Group.characteristic.value[x]."
* characteristic[HasPayer].code = $SDOHCC-CodeSystemTemporaryCodes#payer-coverage
* characteristic[HasPayer].code MS
* characteristic[HasPayer].value[x] only Reference(USCoreOrganizationProfile)
* characteristic[HasPayer].value[x] MS
* characteristic[HasPayer].exclude = false (exactly)
* characteristic[HasPayer].exclude MS
* characteristic[HasPayer].period ..0
* member MS
* member.entity MS

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCHealthcareService.fsh

Profile: SDOHCCHealthcareService
Parent: HealthcareService
Id: SDOHCC-HealthcareService
Title: "SDOHCC Healthcare Service"
Description: "Profile that describes the means by which a healthcare service can be contacted."
* ^status = #active
// TODO need short and definition?
//* . ^short = "Group of SDOH patients for a payer"
//* . ^definition = "For aggregation of individuals with a common set of characteristics (i.e., the same payer and and any condition in the specified SDOH categories) to enable organizations with the appropriate permissions to easily retrieve information related to the cohort of individuals for which they have a common responsibility."
* insert OwningCommitteeExtension
* active 1.. MS
* active = true (exactly)
* location only Reference(SDOHCCLocation)
* location MS
* location ^requirements = "The location must support Location.address so that the patient knows potential addresses when booking an appointment."
* name 1.. MS
* telecom ^slicing.discriminator.type = #exists
* telecom ^slicing.discriminator.path = "extension('http://hl7.org/fhir/us/sdoh-clinicalcare/StructureDefinition/SDOHCC-ExtensionHealthcareServiceTelecomAppointment')"
* telecom ^slicing.rules = #open
* telecom ^mustSupport = false
* telecom contains AppointmentContact 1..* MS
* telecom[AppointmentContact].extension 1..
* telecom[AppointmentContact].extension contains SDOHCCExtensionHealthcareServiceTelecomAppointment named ForAppointment 1..1 MS
* telecom[AppointmentContact].system 1.. MS
* telecom[AppointmentContact].value 1.. MS
* communication MS
* appointmentRequired MS
* availableTime MS
* notAvailable MS
* availabilityExceptions MS

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCLocation.fsh

Profile: SDOHCCLocation
Parent: USCoreLocation
Id: SDOHCC-Location
Title: "SDOHCC Location"
Description: "Profile that describes address information for a healthcare service."
* ^status = #active
* insert OwningCommitteeExtension
* address 1..

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCObservationAssessment.fsh

Profile: SDOHCCObservationAssessment
Parent: Observation
Id: SDOHCC-ObservationAssessment
Title: "SDOHCC Observation Assessment"
Description: "Profile for Social Determinants of Health (SDOH) observations that involve assessment (e.g., by a provider, payer, etc.) as opposed to being derived only from screening surveys (as is the case for the SDOHCC Screening Response Observation)."
* ^status = #active
* ^abstract = false
* . ^short = "SDOH assessment observation"
* . ^definition = "For SDOH observations derived from assessment of the individual."
* . ^comment = "For representation of SDOH observations that involve assessment (e.g., by a provider or payer) as opposed to being derived only from screening surveys (as is the case for the SDOHCC Observation Screening Response).\r\n\r\nMany of the SDOHCC profiles reference one another. One flow supported by this IG is that QuestionnaireResponses result in Observations that can be used as evidence for Conditions that can lead to Goals, ServiceRequests and Procedures. However, alternatives paths are also possible."
* insert OwningCommitteeExtension
* status MS
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category contains
    SocialHistory 1..1 MS and
    SDOH 0..* MS
* category[SocialHistory] = $observation-category#social-history
* category[SocialHistory] ^requirements = "Used for filtering that this is a social history observation."
* category[SDOH] from SDOHCCValueSetSDOHCategory (required)
* category[SDOH] ^short = "e.g., food-insecurity | transportation-insecurity"
* category[SDOH] ^definition = "An SDOH category assigned to the observation."
* category[SDOH] ^requirements = "Codes from this value set can be used to assign one or more SDOH categories (e.g., food-insecurity, transportation-insecurity, etc.) to an observation. It is recommended that SDOH category codes be used to facilitate searching for SDOH observations."
* category[SDOH] ^binding.description = "Codes for high-level SDOH categories."
* code MS
* code from SDOHCCValueSetLOINCSNOMEDCT (preferred)
* code ^comment = "*All* code-value and, if present, component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.\r\n\r\nAs the Gravity Project continues to refine content for the SDOH categories (e.g., food, housing, transportation, etc.), this value set binding strength may change and may be refined to codes (including LOINC and SNOMED) that pertain to SDOH categories."
* subject 1.. MS
* subject only Reference(Group or USCorePatientProfile)
* effective[x] ^comment = "At least a date should be present unless this observation is a historical report.  For recording imprecise or \"fuzzy\" times (For example, a blood glucose measurement taken \"after breakfast\") use the [Timing] datatype which allow the measurement to be tied to regular life events. NOTE: dateTime is Must Support, but currently tooling does not support this."
* performer only Reference(RelatedPerson or USCorePatientProfile or USCorePractitionerProfile or USCorePractitionerRoleProfile or USCoreOrganizationProfile or USCoreCareTeam)
* performer MS
* performer ^comment = "References SHALL be a reference to an actual FHIR resource, and SHALL be resolveable (allowing for access control, temporary unavailability, etc.). Resolution can be either by retrieval from the URL, or, where applicable by resource type, by treating an absolute reference as a canonical URL and looking it up in a local registry/repository. NOTE: US Core Practitioner is Must Support, but currently tooling does not support this."
* value[x] MS

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCObservationEthnicityOMB.fsh

Profile: SDOHCCObservationEthnicityOMB
Parent: SDOHCCObservationPersonalCharacteristic
Id: SDOHCC-ObservationEthnicityOMB
Title: "SDOHCC Observation Ethnicity OMB"
Description: "Profile for ethnicity observations that use Office of Management and Budget (OMB) ethnicity category codes and CDC ethnicity codes. This profile is intended for draft use only. For further details on this profile see [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html)."
* ^status = #active
* ^abstract = false
* obeys SDOH-Ethnicity-1
* . ^short = "Ethnicity observation"
* . ^definition = "For ethnicity observations that use Office of Management and Budget (OMB) ethnicity category codes and CDC ethnicity codes."
* . ^comment = "Used for observations about the ethnicity of an individual."
* code = $loinc#69490-1
* value[x] ..0
* dataAbsentReason from SDOHCCValueSetObservationDataAbsentReason (required)
* dataAbsentReason ^condition = "SDOH-Ethnicity-1"
* method 1.. MS
* method from SDOHCCValueSetObservationMethod (extensible)
* method ^binding.description = "Methods for personal characteristic observations."
* component ^slicing.discriminator[0].type = #pattern
* component ^slicing.discriminator[=].path = "code"
* component ^slicing.discriminator[+].type = #type
* component ^slicing.discriminator[=].path = "value"
* component ^slicing.discriminator[+].type = #value
* component ^slicing.discriminator[=].path = "value"
* component ^slicing.rules = #open
* component ^definition = "Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes."
* component ^comment = "For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below. NOTE: The same LOINC code is used for all three components of this draft profile. If the profile is adopted as part of the US Core standard, new LOINC codes (possibly a panel) will be needed to represent the components (e.g., a new LOINC code for detailed ethnicity and for text description of ethnicity)."
* component ^requirements = "Component observations share the same attributes in the Observation resource as the primary observation and are always treated a part of a single observation (they are not separable)."
* component ^condition = "SDOH-Ethnicity-1"
* component contains
    EthnicityDescription 0..1 MS and
    Ethnicity 0..1 MS and
    DetailedEthnicity 0..*
* component[EthnicityDescription].code = $loinc#69490-1
* component[EthnicityDescription].code MS
* component[EthnicityDescription].value[x] 1.. MS
* component[EthnicityDescription].value[x] only string
* component[EthnicityDescription].dataAbsentReason ..0
* component[EthnicityDescription].interpretation ..0
* component[EthnicityDescription].referenceRange ..0
* component[Ethnicity].code = $loinc#69490-1
* component[Ethnicity].code MS
* component[Ethnicity].value[x] 1.. MS
* component[Ethnicity].value[x] only CodeableConcept
* component[Ethnicity].value[x] from SDOHCCValueSetOMBEthnicityCategories (required)
* component[Ethnicity].value[x] ^short = "Hispanic or Latino | Non Hispanic or Latino"
* component[Ethnicity].value[x] ^requirements = "An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations. Note: The binding to [SDOHCC-ValueSetOMBEthnicityCategories](ValueSet-SDOHCC-ValueSetOMBEthnicityCategories.html) is used in lieu of [US Core OMB Ethnicity Categories](http://hl7.org/fhir/us/core/ValueSet/omb-ethnicity-category) because, in versions of US Core beyond 3.1.1, the US Core value set include nulls flavors while the SDOH CC value set does not."
* component[Ethnicity].value[x] ^binding.description = "Codes for the two OMB ethnicity categories"
* component[Ethnicity].dataAbsentReason ..0
* component[Ethnicity].interpretation ..0
* component[Ethnicity].referenceRange ..0
* component[DetailedEthnicity].code = $loinc#69490-1
* component[DetailedEthnicity].code MS
* component[DetailedEthnicity].value[x] 1.. MS
* component[DetailedEthnicity].value[x] only CodeableConcept
* component[DetailedEthnicity].value[x] from DetailedEthnicity (required)
* component[DetailedEthnicity].value[x] ^binding.description = "CDC ethnicity codes that further specify the 2 OMB ethnicity category codes"
* component[DetailedEthnicity].dataAbsentReason ..0
* component[DetailedEthnicity].interpretation ..0
* component[DetailedEthnicity].referenceRange ..0

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCObservationGenderIdentity.fsh

Profile: SDOHCCObservationGenderIdentity
Parent: SDOHCCObservationPersonalCharacteristic
Id: SDOHCC-ObservationGenderIdentity
Title: "SDOHCC Observation Gender Identity"
Description: "Profile for gender identity observations which are based on a person’s inner sense of being a girl/woman/female/feminine, boy/man/male/masculine, nonbinary, something else, or having no gender. This profile is intended for draft use only. For further details on this profile see [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html)."
* ^status = #active
* ^abstract = false
* . ^short = "Profile for observations about gender identity."
* . ^definition = "For gender identity observations which are based on a person’s inner sense of being a girl/woman/female/feminine, boy/man/male/masculine, nonbinary, something else, or having no gender."
* . ^comment = "For observations about the gender identity of an individual."
* code = $loinc#76691-5
* value[x] 1..
* value[x] from $2.16.840.1.113762.1.4.1021.32 (preferred)
* value[x] ^requirements = "An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations. This is a value set is for testing purposes only and will ultimately need to be aligned with vetted value sets being developed by the Gender Harmony Project where terms like “male-to-female transsexual” and “female-to-male transsexual” will not be included. See https://build.fhir.org/ig/HL7/fhir-gender-harmony/branches/main/terminology.html#appendix-1--proposed-value-sets"
* value[x] ^binding.description = "Codes for self-identified gender, plus unknown and other"
* value[x].extension contains $data-absent-reason named DataAbsentReasonMasked 0..1
* value[x].extension[DataAbsentReasonMasked] ^requirements = "“Masked” is never used for data capture, but \"masked\" is used to suppress information when data is exchanged. For this reason, other flavors of null are included in the value set for Observation.value, but “masked” can be captured here."
* value[x].extension[DataAbsentReasonMasked] ^mustSupport = false
* value[x].extension[DataAbsentReasonMasked].value[x] = #masked (exactly)
* value[x].extension[DataAbsentReasonMasked].value[x] MS
* value[x].extension[DataAbsentReasonMasked].value[x] ^definition = "The information is not available due to security, privacy or related reasons."
* value[x].coding MS
* dataAbsentReason ..0
* method 1.. MS
* method from SDOHCCValueSetObservationMethod (extensible)
* method ^binding.description = "Methods for personal characteristic observations."

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCObservationPersonalCharacteristic.fsh

Profile: SDOHCCObservationPersonalCharacteristic
Parent: Observation
Id: SDOHCC-ObservationPersonalCharacteristic
Title: "SDOHCC Observation Personal Characteristic"
Description: "Defines constraints that represent the minimum requirement for personal characteristic observations which are observations that are usually self-attested but may be attested to on behalf of the subject and are generally only verifiable by the source of attestation (e.g., race, ethnicity, sexual orientation, gender identity and personal pronouns), but may sometimes be verifiable by someone other than the source of attestation (e.g., recorded sex). This profile is intended for draft use only.  For further details on this profile see [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html)."
* ^status = #active
* ^abstract = true
* obeys SDOH-Obs-1 and SDOH-Obs-2 and SDOH-Obs-3
* . ^short = "Personal characteristic observation"
* . ^definition = "Defines constraints that represent the minimum requirement for personal characteristic observations which are observations that are usually self-attested but may be attested to on behalf of the subject (e.g., for a minor or incapable subject) and are generally only verifiable by the source of attestation (e.g., race, ethnicity, sexual orientation, gender identity and personal pronouns), but may sometimes be verifiable by someone other than the source of attestation (e.g., recorded sex)."
* . ^mustSupport = false
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains $extension-Observation.subject named OtherSubject 0..1 MS
* extension[OtherSubject] ^requirements = "This extension is adding only US Core Practitioner as an option for Observation.subject. When the subject is Practitioner, personal characteristics should be based on the attestation and consent of the practitioner."
* extension[OtherSubject] ^condition[0] = "SDOH-Obs-1"
* extension[OtherSubject].value[x] 1..
* extension[OtherSubject].value[x] only Reference(USCorePractitionerProfile)
* status MS
* status from SDOHCCValueSetObservationStatus (required)
* status ^short = "final | corrected | entered-in-error | unknown"
* status ^definition = "The status of the observation value."
* status ^requirements = "Further constrained to values that are relevant for personal characteristic observations."
* category ^slicing.discriminator.type = #value
* category ^slicing.discriminator.path = "$this"
* category ^slicing.rules = #open
* category contains PersonalCharacteristic 1..1 MS
* category[PersonalCharacteristic] = $SDOHCC-CodeSystemTemporaryCodes#personal-characteristic
* category[PersonalCharacteristic] ^requirements = "Used for filtering personal characteristic observations."
* code MS
* code from LOINCCodes (preferred)
* code ^comment = "*All* code-value and, if present, component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation. NOTE: In LOINC, System Patient is used in the modeling of codes referenced by the Personal Characteristics profiles (e.g., 72826-1 Race OMB.1997, 69490-1 Ethnicity OMB.1997, 76691-5 Gender identity, 76690-7 Sexual orientation, 90778-2 Personal pronouns – Reported, and 99502-7 Recorded sex or gender). If the draft profiles are adopted, new LOINC codes without System Patient would be needed since these profiles can also be used to capture characteristics of a provider (using an extension) or a related person (using focus)."
* code ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* code ^binding.extension.valueString = "ObservationCode"
* code ^binding.description = "Codes identifying names of simple observations."
* subject only Reference(USCorePatientProfile)
* subject MS
* subject ^condition[0] = "SDOH-Obs-1"
* subject ^condition[+] = "SDOH-Obs-2"
* focus ..1
* focus only Reference(RelatedPerson)
* focus ^condition[0] = "SDOH-Obs-2"
* effective[x] only dateTime or Period
* effective[x] ^comment = "At least a date should be present unless this observation is a historical report.  For recording imprecise or \"fuzzy\" times (For example, a blood glucose measurement taken \"after breakfast\") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.\r\nNOTE: dateTime is Must Support, but currently tooling does not support this."
* performer MS
* performer ^condition[0] = "SDOH-Obs-3"
* value[x] only CodeableConcept
* value[x] MS
* interpretation ..0
* bodySite ..0
* specimen ..0
* referenceRange ..0
* derivedFrom only Reference(DocumentReference or QuestionnaireResponse or Observation)
* derivedFrom MS
* derivedFrom ^condition[0] = "SDOH-Obs-3"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCObservationPersonalPronouns.fsh

Profile: SDOHCCObservationPersonalPronouns
Parent: SDOHCCObservationPersonalCharacteristic
Id: SDOHCC-ObservationPersonalPronouns
Title: "SDOHCC Observation Personal Pronouns"
Description: "Profile for observations about the pronouns and possessive adjectives a person wishes to be addressed by. This profile is intended for draft use only.  For further details on this profile see [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html)."
* ^status = #active
* ^abstract = false
* . ^definition = "For observations about the pronouns and possessive adjectives a person wishes to be addressed by."
* . ^comment = "For observations about the personal pronouns of an individual."
* code = $loinc#90778-2
* value[x] 1..
* value[x] from SDOHCCValueSetPronounsValue (preferred)
* value[x] ^requirements = "An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations. This is a value set is for testing purposes only and will ultimately need to be aligned with vetted value sets being developed by the Gender Harmony Project. See https://build.fhir.org/ig/HL7/fhir-gender-harmony/branches/main/terminology.html#appendix-1--proposed-value-sets"
* value[x] ^binding.description = "Codes for personal pronouns"
* value[x].extension contains $data-absent-reason named DataAbsentReasonMasked 0..1
* value[x].extension[DataAbsentReasonMasked] ^requirements = "“Masked” is never used for data capture, but \"masked\" is used to suppress information when data is exchanged. For this reason, other flavors of null are included in the value set for Observation.value, but “masked” can be captured here."
* value[x].extension[DataAbsentReasonMasked].value[x] = #masked (exactly)
* value[x].extension[DataAbsentReasonMasked].value[x] MS
* value[x].extension[DataAbsentReasonMasked].value[x] ^definition = "The information is not available due to security, privacy or related reasons."
* value[x].coding MS
* dataAbsentReason ..0
* method 1.. MS
* method from SDOHCCValueSetObservationMethod (extensible)
* method ^binding.description = "Methods for personal characteristic observations."

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCObservationRaceOMB.fsh

Profile: SDOHCCObservationRaceOMB
Parent: SDOHCCObservationPersonalCharacteristic
Id: SDOHCC-ObservationRaceOMB
Title: "SDOHCC Observation Race OMB"
Description: "Profile for race observations that use Office of Management and Budget (OMB) race category codes and CDC race codes. This profile is intended for draft use only.  For further details on this profile see [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html)."

* ^status = #active
* ^abstract = false
* obeys SDOH-Race-1
* . ^short = "Race observation"
* . ^definition = "For race observations that use Office of Management and Budget (OMB) race category codes and CDC race codes."
* . ^comment = "For observations about the race of an individual."
* code = $loinc#72826-1
* value[x] ..0
* dataAbsentReason MS
* dataAbsentReason from SDOHCCValueSetObservationDataAbsentReason (required)
* dataAbsentReason ^condition = "SDOH-Race-1"
* method 1.. MS
* method from SDOHCCValueSetObservationMethod (extensible)
* method ^binding.description = "Methods for personal characteristic observations."
* component ^slicing.discriminator[0].type = #pattern
* component ^slicing.discriminator[=].path = "code"
* component ^slicing.discriminator[+].type = #type
* component ^slicing.discriminator[=].path = "value"
* component ^slicing.discriminator[+].type = #value
* component ^slicing.discriminator[=].path = "value"
* component ^slicing.rules = #open
* component ^definition = "Some observations have multiple component observations.  These component observations are expressed as separate code value pairs that share the same attributes."
* component ^comment = "For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below. NOTE: The same LOINC code is used for all three components of this draft profile. If the profile is adopted as part of the US Core standard, new LOINC codes (possibly a panel) will be needed to represent the components (e.g., a new LOINC code for detailed race and for text description of race)."
* component ^requirements = "Component observations share the same attributes in the Observation resource as the primary observation and are always treated a part of a single observation (they are not separable)."
* component ^condition = "SDOH-Race-1"
* component contains
    RaceDescription 0..1 MS and
    Race 0..5 MS and
    DetailedRace 0..*
* component[RaceDescription].code = $loinc#72826-1
* component[RaceDescription].code MS
* component[RaceDescription].value[x] 1.. MS
* component[RaceDescription].value[x] only string
* component[RaceDescription].dataAbsentReason ..0
* component[RaceDescription].interpretation ..0
* component[RaceDescription].referenceRange ..0
* component[Race].code = $loinc#72826-1
* component[Race].code MS
* component[Race].value[x] 1.. MS
* component[Race].value[x] only CodeableConcept
* component[Race].value[x] from $2.16.840.1.113883.3.2074.1.1.3 (required)
* component[Race].value[x] ^short = "Race category codes"
* component[Race].value[x] ^definition = "Office of Management and Budget (OMB) codes for race categories."
* component[Race].value[x] ^requirements = "An observation exists to have a value, though it might not if it is in error, or if it represents a group of observations. Note: The binding to [Race Category Excluding Nulls](https://cts.nlm.nih.gov/fhir/res/ValueSet/2.16.840.1.113883.3.2074.1.1.3) is used in lieu of [US Core OMB Race Categories](http://hl7.org/fhir/us/core/ValueSet/omb-race-category) because the US Core value set includes null flavors."
* component[Race].value[x] ^binding.description = "Codes for the five OMB race categories"
* component[Race].dataAbsentReason ..0
* component[Race].interpretation ..0
* component[Race].referenceRange ..0
* component[DetailedRace].code = $loinc#72826-1
* component[DetailedRace].code MS
* component[DetailedRace].value[x] 1.. MS
* component[DetailedRace].value[x] only CodeableConcept
* component[DetailedRace].value[x] from DetailedRace (required)
* component[DetailedRace].value[x] ^short = "Detailed race codes"
* component[DetailedRace].value[x] ^binding.description = "CDC race codes that further specify the 5 OMB race category codes"
* component[DetailedRace].dataAbsentReason ..0
* component[DetailedRace].interpretation ..0
* component[DetailedRace].referenceRange ..0

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/profiles/SDOHCCObservationRecordedSexGender.fsh

Profile: SDOHCCObservationRecordedSexGender
Parent: SDOHCCObservationPersonalCharacteristic
Id: SDOHCC-ObservationRecordedSexGender
Title: "SDOHCC Observation Recorded Sex Gender"
Description: "Profile for observations about \"recorded sex and gender\" which, in the past, were often used interchangeably. In this context, sex is a biological construct and pertains to a person’s genetics, hormones, and anatomy. This profile is intended for draft use only.  For further details on this profile see [Draft Specifications for Personal Characteristics](draft_specifications_for_personal_characteristics.html)."

* ^status = #active
* ^abstract = false
* . ^short = "Observation about an individual's recorded sex or gender"
* . ^definition = "For observations about \"recorded sex and gender\" which, in the past, have often been used interchangeably. In this context, sex is a biological construct and pertains to a person’s genetics, hormones, and anatomy."
* . ^comment = "For observations about the recorded sex and gender of an individual."
* code = $loinc#99502-7
* value[x] 1..
* value[x] from $LL6134-2 (preferred)
* value[x] ^binding.description = "Codes for recorded sex and gender"
* value[x].extension contains $data-absent-reason named DataAbsentReasonMasked 0..1
* value[x].extension[DataAbsentReasonMasked] ^requirements = "“Masked” is never used for data capture, but \"masked\" is used to suppress information when data is exchanged. For this reason, other flavors of null are included in the value set for Observation.value, but “masked” can be captured here."
* value[x].extension[DataAbsentReasonMasked].value[x] = #masked (exactly)
* value[x].extension[DataAbsentReasonMasked].value[x] MS
* value[x].extension[DataAbsentReasonMasked].value[x] ^definition = "The information is not available due to security, privacy or related reasons."
* value[x].coding MS
* dataAbsentReason ..0
* method 1.. MS
* method from SDOHCCValueSetObservationMethod (example)
* method ^binding.description = "Methods for personal characteristic observations."
* derivedFrom 1..1
* derivedFrom ^requirements = "DocumentReference can be used to indicate the type of recorded sex or gender. For example, a birth certificate could indicate that this is \"birth sex\"."
* derivedFrom ^condition = "SDOH-Obs-4"
* derivedFrom.identifier MS
* derivedFrom.identifier.type MS
* derivedFrom.identifier.type from SDOHCCValueSetObservationDerivedFromIdType (extensible)
* derivedFrom.identifier.type ^binding.description = "Codes for the type of record from which recorded sex or gender information is derived."
* derivedFrom.identifier.type.coding MS
* derivedFrom.identifier.type.text MS

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/rulesets/DEF_Rulesets.fsh

RuleSet: SliceReferenceOnProfile(path)
* {path} ^slicing.discriminator.type = #profile
* {path} ^slicing.discriminator.path = "$this.resolve()"
* {path} ^slicing.rules = #open
* {path} ^slicing.description = "Slicing based on profile conformance of the referenced resource."


RuleSet: OwningCommitteeExtension
* ^extension[$WG-extension].valueCode = #pc


RuleSet: AdditionalBinding(profile, elementPath, usagePath, usageCategory, valueSet, binding)
* {elementPath} ^binding.extension[+].url = $add-binding
* {elementPath} ^binding.extension[=].extension[0].url = "purpose"
* {elementPath} ^binding.extension[=].extension[=].valueCode = #{binding}
* {elementPath} ^binding.extension[=].extension[+].url = "valueSet"
* {elementPath} ^binding.extension[=].extension[=].valueCanonical = {valueSet}
* {elementPath} ^binding.extension[=].extension[+].url = "usage"
* {elementPath} ^binding.extension[=].extension[=].valueUsageContext.code.system = Canonical({profile})
* {elementPath} ^binding.extension[=].extension[=].valueUsageContext.code.code = #{usagePath}
* {elementPath} ^binding.extension[=].extension[=].valueUsageContext.valueCodeableConcept = SDOHCCCodeSystemTemporaryCodes#{usageCategory} // This is not official display. Need to support display? "{profile} {usageCategory} ValueSet"
* {elementPath} ^binding.extension[=].extension[=].valueUsageContext.valueCodeableConcept.text = "{usageCategory}"


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetLOINCSNOMEDCT.fsh

ValueSet: SDOHCCValueSetLOINCSNOMEDCT
Id: SDOHCC-ValueSetLOINCSNOMEDCT
Title: "SDOHCC ValueSet LOINC SNOMEDCT"
Description: "This value set contains all of LOINC and SNOMED CT."
* ^status = #active
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. This value set includes content from SNOMED CT, which is copyright © 2002+ International Health Terminology Standards Development Organisation (IHTSDO), and distributed by agreement between IHTSDO and HL7. Implementer use of SNOMED CT is not covered by this agreement"
* include codes from system $loinc
* include codes from system SNOMED_CT

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetObservationDataAbsentReason.fsh

ValueSet: SDOHCCValueSetObservationDataAbsentReason
Id: SDOHCC-ValueSetObservationDataAbsentReason
Title: "SDOHCC ValueSet Observation DataAbsentReason"
Description: "Codes for the reason an observation does not have a value."
* ^status = #active
* ^experimental = false
* DataAbsentReason#unknown "Unknown"
* DataAbsentReason#asked-unknown "Asked But Unknown"
* DataAbsentReason#temp-unknown "Temporarily Unknown"
* DataAbsentReason#not-asked "Not asked"
* DataAbsentReason#asked-declined "Asked But Declined"
* DataAbsentReason#masked "Masked"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetObservationDerivedFromIdType.fsh

ValueSet: SDOHCCValueSetObservationDerivedFromIdType
Id: SDOHCC-ValueSetObservationDerivedFromIdType
Title: "SDOHCC ValueSet Observation DerivedFrom IdType"
Description: "Codes for identifiers of target resources from which recorded sex or gender information can be derived."
* ^status = #active
* ^experimental = false
* $v2-0203#BCT "Birth Certificate"
* $v2-0203#DL "Driver's license number"
* $v2-0203#PPN "Passport number"
* $v2-0203#SB "Social Beneficiary Identifier"
* $v2-0203#MCT "Marriage Certificate"
* $v2-0203#MI "Military ID number"
* $v2-0203#SR "State registry ID"
* $v2-0203#WP "Work Permit"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetObservationMethod.fsh

ValueSet: SDOHCCValueSetObservationMethod
Id: SDOHCC-ValueSetObservationMethod
Title: "SDOHCC ValueSet Observation Method"
Description: "Codes that represent methods by which an individual's race or ethnicity information can be elicited."
* ^status = #active
* ^experimental = false
* ^date = "2020-12-14T04:01:34+00:00"
* ^publisher = "HL7 International - Patient Care WG"
* ^contact.name = "HL7 International - Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = urn:iso:std:iso:3166#US
* SDOHCCCodeSystemTemporaryCodes#self-reported "Self Reported"
* SDOHCCCodeSystemTemporaryCodes#reported-by-related-person "Reported By Related Person"
* SDOHCCCodeSystemTemporaryCodes#administrative "Administrative"
* SDOHCCCodeSystemTemporaryCodes#derived-specify "Derived Specify"
* SDOHCCCodeSystemTemporaryCodes#other-specify "Other Specify"
* SDOHCCCodeSystemTemporaryCodes#observed "Observed"
* $v3-NullFlavor#UNK "unknown"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetObservationStatus.fsh

ValueSet: SDOHCCValueSetObservationStatus
Id: SDOHCC-ValueSetObservationStatus
Title: "SDOHCC ValueSet Observation Status"
Description: "Codes for the status of a screening response observation."
* ^status = #active
* ^experimental = false
* ObservationStatus#final "Final"
* ObservationStatus#corrected "Corrected"
* ObservationStatus#entered-in-error "Entered in Error"
* ObservationStatus#unknown "Unknown"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetOMBEthnicityCategories.fsh

ValueSet: SDOHCCValueSetOMBEthnicityCategories
Id: SDOHCC-ValueSetOMBEthnicityCategories
Title: "SDOHCC ValueSet OMB Ethnicity Categories"
Description: "Codes for the ethnicity categories - 'Hispanic or Latino' and 'Not Hispanic or Latino' - as defined by the [OMB Standards for Maintaining, Collecting, and Presenting Federal Data on Race and Ethnicity, Statistical Policy Directive No. 15, as revised, October 30, 1997](https://www.govinfo.gov/content/pkg/FR-1997-10-30/pdf/97-28653.pdf). This value set was created (as opposed to using the US Core OMB Ethnicity Categories value set) to deliberately prevent inclusion of null flavors."
* ^status = #active
* ^experimental = false
* urn:oid:2.16.840.1.113883.6.238|3.1.1#2135-2 "Hispanic or Latino"
* urn:oid:2.16.840.1.113883.6.238|3.1.1#2186-5 "Not Hispanic or Latino"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetOMBRaceCategories.fsh

ValueSet: SDOHCCValueSetOMBRaceCategories
Id: SDOHCC-ValueSetOMBRaceCategories
Title: "SDOHCC ValueSet OMB Race Categories"
Description: "Codes for the five race categories - 'American Indian' or 'Alaska Native','Asian', 'Black or African American', 'Native Hawaiian or Other Pacific Islander', and 'White' - as defined by the [OMB Standards for Maintaining, Collecting, and Presenting Federal Data on Race and Ethnicity, Statistical Policy Directive No. 15, as revised, October 30, 1997](https://www.govinfo.gov/content/pkg/FR-1997-10-30/pdf/97-28653.pdf). This value set was created (as opposed to using the US Core OMB Race Categories value set) to deliberately prevent inclusion of null flavors."
* ^status = #active
* ^experimental = false
* urn:oid:2.16.840.1.113883.6.238|3.1.1#1002-5 "American Indian or Alaska Native"
* urn:oid:2.16.840.1.113883.6.238|3.1.1#2028-9 "Asian"
* urn:oid:2.16.840.1.113883.6.238|3.1.1#2054-5 "Black or African American"
* urn:oid:2.16.840.1.113883.6.238|3.1.1#2076-8 "Native Hawaiian or Other Pacific Islander"
* urn:oid:2.16.840.1.113883.6.238|3.1.1#2106-3 "White"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetPronounsValue.fsh

ValueSet: SDOHCCValueSetPronounsValue
Id: SDOHCC-ValueSetPronounsValue
Title: "SDOHCC ValueSet Pronouns Value"
Description: "Codes for the personal pronouns of an individual."
* ^status = #active
* ^experimental = false
* ^copyright = "This material contains content from LOINC (http://loinc.org). LOINC is copyright © 1995-2020, Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc."
* $loinc#LA29518-0 "he/him/his/his/himself"
* $loinc#LA29519-8 "she/her/her/hers/herself"
* $loinc#LA29520-6 "they/them/their/theirs/themselves"
* $v3-NullFlavor#OTH "other"
* $v3-NullFlavor#UNK "unknown"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetReferralTaskStatus.fsh

ValueSet: SDOHCCValueSetReferralTaskStatus
Id: SDOHCC-ValueSetReferralTaskStatus
Title: "SDOHCC ValueSet Referral Task Status"
Description: "Codes for the status of a referral task."
* ^status = #active
* ^experimental = false
* include codes from valueset TaskStatus
* exclude TaskStatus#ready
* exclude TaskStatus#received


---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetSDOHCategory.fsh

ValueSet: SDOHCCValueSetSDOHCategory
Id: SDOHCC-ValueSetSDOHCategory
Title: "SDOHCC ValueSet SDOH Category"
Description: "Codes that represent Social Determinants of Health (SDOH) domains."
* ^status = #active
* ^experimental = false
* ^date = "2020-12-14T04:01:34+00:00"
* ^publisher = "HL7 International - Patient Care WG"
* ^contact.name = "HL7 International - Patient Care"
* ^contact.telecom.system = #url
* ^contact.telecom.value = "http://www.hl7.org/Special/committees/patientcare"
* ^jurisdiction = urn:iso:std:iso:3166#US
* SDOHCCCodeSystemTemporaryCodes#sdoh-category-unspecified "SDOH Category Unspecified"
* SDOHCCCodeSystemTemporaryCodes#food-insecurity "Food Insecurity"
* SDOHCCCodeSystemTemporaryCodes#housing-instability "Housing Instability"
* SDOHCCCodeSystemTemporaryCodes#homelessness "Homelessness"
* SDOHCCCodeSystemTemporaryCodes#inadequate-housing "Inadequate Housing"
* SDOHCCCodeSystemTemporaryCodes#transportation-insecurity "Transportation Insecurity"
* SDOHCCCodeSystemTemporaryCodes#financial-insecurity "Financial Insecurity"
* SDOHCCCodeSystemTemporaryCodes#material-hardship "Material Hardship"
* SDOHCCCodeSystemTemporaryCodes#educational-attainment "Educational Attainment"
* SDOHCCCodeSystemTemporaryCodes#employment-status "Employment Status"
* SDOHCCCodeSystemTemporaryCodes#veteran-status "Veteran Status"
* SDOHCCCodeSystemTemporaryCodes#stress "Stress"
* SDOHCCCodeSystemTemporaryCodes#social-connection "Social Connection"
* SDOHCCCodeSystemTemporaryCodes#intimate-partner-violence "Intimate Partner Violence"
* SDOHCCCodeSystemTemporaryCodes#elder-abuse "Elder Abuse"
* SDOHCCCodeSystemTemporaryCodes#personal-health-literacy "Personal Health Literacy"
* SDOHCCCodeSystemTemporaryCodes#health-insurance-coverage-status "Health Insurance Coverage Status"
* SDOHCCCodeSystemTemporaryCodes#medical-cost-burden "Medical Cost Burden"
* SDOHCCCodeSystemTemporaryCodes#digital-literacy "Digital Literacy"
* SDOHCCCodeSystemTemporaryCodes#digital-access "Digital Access"
* SDOHCCCodeSystemTemporaryCodes#utility-insecurity "Utility Insecurity"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetSDOHQuestionnaireCategory.fsh

ValueSet: SDOHCCValueSetSDOHQuestionnaireCategory
Id: SDOHCC-ValueSetSDOHQuestionnaireCategory
Title: "SDOHCC ValueSet SDOH Questionnaire Category"
Description: "Codes that represent categories of Social Determinants of Health (SDOH) questionnaires."
* ^status = #active
* ^experimental = false
* SDOHCCCodeSystemTemporaryCodes#risk-questionnaire "Risk Questionnaire"
* SDOHCCCodeSystemTemporaryCodes#feedback-questionnaire "Feedback Questionnaire"
* SDOHCCCodeSystemTemporaryCodes#application-questionnaire "Application Questionnaire"
* SDOHCCCodeSystemTemporaryCodes#personal-characteristics-questionnaire "Personal Characteristics Questionnaire"
* SDOHCCCodeSystemTemporaryCodes#other-specify "Other Specify"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetTaskCode.fsh

ValueSet: SDOHCCValueSetTaskCode
Id: SDOHCC-ValueSetTaskCode
Title: "SDOHCC ValueSet Task Code"
Description: "Codes for the general action a task involves."
* ^status = #active
* ^experimental = false
* SDOHCCCodeSystemTemporaryCodes#make-contact "Make Contact"
* SDOHCCCodeSystemTemporaryCodes#review-material "Review Material"
* SDOHCCCodeSystemTemporaryCodes#general-information "General Information"
* TemporaryCodes#complete-questionnaire "Complete Questionnaire"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetTaskPriority.fsh

ValueSet: SDOHCCValueSetTaskPriority
Id: SDOHCC-ValueSetTaskPriority
Title: "SDOHCC ValueSet Task Priority"
Description: "Codes for the priority of a task for a patient."
* ^status = #active
* ^experimental = false
* RequestPriority#routine "Routine"
* RequestPriority#urgent "Urgent"

---

File: repos/HL7_SLASH_fhir-sdoh-clinicalcare/input/fsh/valuesets/SDOHCCValueSetTaskStatus.fsh

ValueSet: SDOHCCValueSetTaskStatus
Id: SDOHCC-ValueSetTaskStatus
Title: "SDOHCC ValueSet Task Status"
Description: "Codes for the status of a task for a patient."
* ^status = #active
* ^experimental = false
* TaskStatus#ready "Ready"
* TaskStatus#in-progress "In Progress"
* TaskStatus#completed "Completed"
* TaskStatus#cancelled "Cancelled"
* TaskStatus#on-hold "On Hold"
* TaskStatus#failed "Failed"
* TaskStatus#entered-in-error "Entered in Error"

---

