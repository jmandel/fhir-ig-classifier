File: repos/commonprofiles-care_SLASH_fhir/input/fsh/extensions/common-hsaHierarchy.fsh

Extension: HsaHierarchy
Id: common-hsaHierarchy
Title: "HSA Hierarchy"
Description: """This extension is used to describe a unit's (Location or Organization) place in the Swedish HSA hierarchy. There are two important levels in the hierarchy:

HSA Vårdgivare (eng HSA Care Provider) - This is often a region or private healthcare provider and the highest defined level in the hierarchy
HSA Vårdenhet (eng HSA Department) - This is often a department within a region or private healthcare provider and the lower defined level in the hierarchy
All official healthcare units in Sweden will have a representation in the national HSA catalogue, and all will have a relationship to a parent HSA Vårdenhet (lower level) and/or HSA Vårdgivare (highest level).

This can among other things be used to evaluate PDL (Patientdatalagen, eng Patient Data Law) rules."""


* ^status = #active
* ^context[0].type = #element
* ^context[=].expression = "Resource"
* ^context[+].type = #element
* ^context[=].expression = "Organization"

* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension ^min = 0
* extension contains
    hsaCareProvider 0..1 and
    hsaCareUnit 0..1
* extension[hsaCareProvider].value[x] 1..
* extension[hsaCareProvider].value[x] only Reference(Organization)
* extension[hsaCareProvider].value[x].type = "Organization" (exactly)
* extension[hsaCareProvider].value[x].identifier.system 1..
* extension[hsaCareProvider].value[x].identifier.system = "urn:oid:1.2.752.29.4.19" (exactly)
* extension[hsaCareProvider].value[x].identifier.value 1..
* extension[hsaCareUnit].value[x] 1..
* extension[hsaCareUnit].value[x] only Reference(Organization)
* extension[hsaCareUnit].value[x].type = "Organization" (exactly)
* extension[hsaCareUnit].value[x].identifier.system 1..
* extension[hsaCareUnit].value[x].identifier.system = "urn:oid:1.2.752.29.4.19" (exactly)
* extension[hsaCareUnit].value[x].identifier.value 1..


---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/invariants/organisationsnummer-invariant.fsh

Invariant: organisationsnummer-invariant
Description: "All identifiers that identifies as organisationsnummer SHALL comply with the specified regex:^\\d{10}$"
Expression: "$this.toString().matches('^\\\\d{10}$')"
Severity: #error
XPath: "f:value"


---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/invariants/personnummer-invariant.fsh

Invariant: personnummer-invariant
Description: "All identifiers that identifies as personnummer SHALL comply with the specified regex: ^(18|19|[2-9]\\d)\\d{2}(0[1-9]|1[012])([0-2]\\d|3[0-1])\\d{4}"
Severity: #error
// Support dead patients who born in 19th century.
Expression: "$this.toString().matches('^(18|19|[2-9]\\\\d)\\\\d{2}(0[1-9]|1[012])([0-2]\\\\d|3[0-1])\\\\d{4}')"
XPath: "f:value"

---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/invariants/samordningsnummer-invariant.fsh

Invariant: samordningsnummer-invariant
Description: "All identifiers that identifies as samordningsnummer SHALL comply with the specified regex: ^(18|19|[2-9]\\d)\\d{2}(0[1-9]|1[012])([0-8]\\d|9[0-1])\\d{4}"
Severity: #error
// Support dead patients who born in 19th century.
Expression: "$this.toString().matches('^(18|19|[2-9]\\\\d)\\\\d{2}(0[1-9]|1[012])([0-8]\\\\d|9[0-1])\\\\d{4}')"
XPath: "f:value"


---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/organization/OrganizationSECommonsLite.fsh

Profile: OrganizationSECommonsLite
Parent: SEBaseOrganization
Description: """This is a light weight Swedish Organization profile.
              It can be used when Organizations have been referenced by other resources, such as Observation, ServiceRequest or Appointment.
              It can also be used for presenting a list of organizations with associated information."""

* ^purpose = """To define a small lightweight Organization resource for the primary use case of being included as referenced/contained from other resources. This will allow applications to display the most fundamental organization information like name and business identifier together with other resources like a ServiceRequest or an Observation. When fetching such resources, the referenced Organization resource can be included using this profile.
              The profile can be used for healthcare organizations, often identified using hsa id, but also non-healthcare organizations, often identified using organization id."""

* extension contains HsaHierarchy named hsaHierarchy 0..* MS

* name 1..

* identifier[hsaid] ^short = "This slice should be used if the organization has a HSA id. HSA id is an official identifier for healthcare organizations and practitioners in Sweden."
* identifier[hsaid].system ^short = "URI for objects (e.g. organizations or practitioners) in the HSA catalog."
* identifier[hsaid].value 1..
* identifier[hsaid].value ^short = "HSA id."

* identifier[organizationIdentifier] ^short = "Organization id"
* identifier[organizationIdentifier] ^definition = "This slice should be used if the organization has an Swedish organization id. Organization id is an official identifier for companies and associations in Sweden. https://bolagsverket.se/ff/foretagsformer/organisationsnummer-1.7902"
* identifier[organizationIdentifier].system ^short = "URI for Swedish organization number."
* identifier[organizationIdentifier].value 1..
* identifier[organizationIdentifier].value ^short = "Swedish organization id."

* type MS
* type ^slicing.discriminator.type = #pattern
* type ^slicing.discriminator.path = "coding.code"
* type ^slicing.rules = #open
* type ^slicing.description = "Unordered, Open, by coding(code)"
* type contains
            careUnit ..1 MS
        and careProvider ..1 MS

* type[careUnit] ^definition = "This slice should be used to communicate that this Organization is a care unit, according to Swedish HSA definition."
* type[careUnit].coding 1..1
* type[careUnit].coding.system = SCT
* type[careUnit].coding.system 1..
* type[careUnit].coding.version ^definition = "Swedish version of Snomed CT."
* type[careUnit].coding.version 1..
* type[careUnit].coding.version = "http://snomed.info/sct/45991000052106/version/20220531"
* type[careUnit].coding.code = #43741000
* type[careUnit].coding.code 1..
* type[careUnit].coding.code ^definition = "Snomed CT concept 43741000| vårdenhet|"

* type[careProvider] ^definition = "This slice should be used to communicate that this Organization is a care provider, according to Swedish HSA definition."
* type[careProvider].coding 1..1
* type[careProvider].coding.system 1..
* type[careProvider].coding.system = SCT
* type[careProvider].coding.version ^definition = "Swedish version of Snomed CT."
* type[careProvider].coding.version 1..
* type[careProvider].coding.version = "http://snomed.info/sct/45991000052106/version/20220531"
* type[careProvider].coding.code = #143591000052106
* type[careProvider].coding.code 1..
* type[careProvider].coding.code ^comment = "The Snomed CT concept 143591000052106 | vårdgivare|"
* identifier[organizationIdentifier].value obeys organisationsnummer-invariant

*       name
    and identifier
    and identifier[hsaid]
    and identifier[hsaid].system
    and identifier[hsaid].value
    and identifier[organizationIdentifier]
    and identifier[organizationIdentifier].system
    and identifier[organizationIdentifier].value
    and type
    and type[careUnit]
    and type[careUnit].coding
    and type[careUnit].coding.system
    and type[careUnit].coding.version
    and type[careUnit].coding.code
    and type[careProvider]
    and type[careProvider].coding
    and type[careProvider].coding.system
    and type[careProvider].coding.version
    and type[careProvider].coding.code
    and telecom
    and telecom.system
    and telecom.value
    and address
    MS

* telecom.system 1..
* telecom.value 1..

* address.line.extension contains
            iso21090-ADXP-careOf named careOf 0..* MS
        and iso21090-ADXP-streetAddressLine named streetAddressLine 0..* MS

Instance: minimal-organization
InstanceOf: OrganizationSECommonsLite
Description: "Minimal Organization instance"
Usage: #example
* meta.profile = Canonical(OrganizationSECommonsLite)
* identifier
  * use = #official
  * type = IDENTIFIER_TYPE#XX
  * system = "urn:oid:2.5.4.97"
  * value = "5566778899"
* name = "Svenska Kliniken AB"
* type[0].coding = SCT#43741000 "Vårdenhet"
  * version = "http://snomed.info/sct/45991000052106/version/20220531"
* type[+].coding = SCT#143591000052106 "Vårdgivare"
  * version = "http://snomed.info/sct/45991000052106/version/20220531"
* telecom[0]
  * system = #phone
  * value = "+46101234567"
* telecom[+]
  * system = #email
  * value = "info@svenskakliniken.se"
* address
  * line = "Storgatan 1"
  * city = "Stockholm"
  * state = "Stockholms län"
  * postalCode = "100 55"
  * country = "SE"

Instance: maximal-organization
InstanceOf: OrganizationSECommonsLite
Description: "Maximal Organization instance"
Usage: #example
* meta.profile = Canonical(OrganizationSECommonsLite)
* identifier[0]
  * use = #official
  * type = IDENTIFIER_TYPE#PRN
  * system = "urn:oid:1.2.752.29.4.19"
  * value = "HSA-ID-EXAMPLE-1234"
* identifier[+]
  * use = #official
  * type = IDENTIFIER_TYPE#XX
  * system = "urn:oid:2.5.4.97"
  * value = "5567210564"
* type[0].coding = SCT#43741000 "Vårdenhet"
  * version = "http://snomed.info/sct/45991000052106/version/20220531"
* type[+].coding = SCT#143591000052106 "Vårdgivare"
  * version = "http://snomed.info/sct/45991000052106/version/20220531"
* name = "Svenska Vårdcentralen"
* telecom[0]
  * system = #phone
  * value = "+46-8-123-4567"
* telecom[+]
  * system = #email
  * value = "kontakt@svenskavardcentralen.se"
* address
  * use = #work
  * type = #both
  * text = "Storgatan 1, 123 45 Stockholm, Sweden"
  * line = "Storgatan 1"
  * city = "Stockholm"
  * district = "Stockholm"
  * state = "Stockholm"
  * postalCode = "123 45"
  * country = "Sweden"
  * line
    * extension[0]
      * url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-careOf"
      * valueString = "c/o Svenska Hälsovården"
    * extension[+]
      * url = "http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetAddressLine"
      * valueString = "Storgatan 1"



---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/patient/PatientSECommonsLite.fsh

Profile: PatientSECommonsLite
Parent: SEBasePatient
Description: "Simplified patient for identification for communication between systems in Sweden"
* identifier 1.. MS

* identifier[personnummer] ..1
* identifier[samordningsnummer] ..1
* identifier[nationelltReservnummer] ..1
* identifier[personnummer].value 1..
* identifier[samordningsnummer].value 1..
* identifier[nationelltReservnummer].value 1..

* identifier[personnummer].value obeys personnummer-invariant
* identifier[personnummer].value ^example.label = "General"
* identifier[personnummer].value ^example.valueString = "191212121212"
* identifier[samordningsnummer].value obeys samordningsnummer-invariant
* identifier[samordningsnummer].value ^example.label = "General"
* identifier[samordningsnummer].value ^example.valueString = "197010632391"

* deceased[x] only boolean

*       name
    and identifier[personnummer]
    and identifier[samordningsnummer]
    and identifier[nationelltReservnummer]
    and identifier
    and deceasedBoolean
  MS

* telecom.system 1.. MS
* telecom.value 1.. MS

Instance: minimal-patient
InstanceOf: PatientSECommonsLite
Description: "Patient example."
* name
  * given[0] = "Kalle"
  * family = "Krank"
* identifier[personnummer].value = "191212121212"
* deceasedBoolean = false

Instance: minimal-patient2
InstanceOf: PatientSECommonsLite
Description: "Another Patient example."
Usage: #example
* meta.profile = Canonical(PatientSECommonsLite)
* identifier.use = #official
* identifier.system = "http://electronichealth.se/identifier/personnummer"
* identifier.value = "191212121212"
* name.use = #official
* name.given = "Kalle"
* name.family = "Krank"
* telecom[0].system = #phone
* telecom[=].value = "0712345678"
* telecom[=].use = #mobile
* telecom[+].system = #email
* telecom[=].value = "kalle.krank@example.com"
* telecom[=].use = #home
* deceasedBoolean = false

Instance: maximal-patient
InstanceOf: PatientSECommonsLite
Description: "Maximal patient example."
Usage: #example
* meta.profile = Canonical(PatientSECommonsLite)
* identifier[0]
  * use = #official
  * system = "http://electronichealth.se/identifier/personnummer"
  * value = "191212121212"
  * period.start = "1912-12-12"
  * assigner.display = "Swedish Tax Agency"
* identifier[+]
  * use = #official
  * system = "http://electronichealth.se/identifier/samordningsnummer"
  * value = "197010632391"
  * period.start = "1970-10-03"
  * assigner.display = "Swedish Tax Agency"
* identifier[+]
  * use = #official
  * system = "http://electronichealth.se/identifier/nationelltReservnumer"
  * value = "198010101010"
  * period.start = "1980-01-01"
  * assigner.display = "Swedish Healthcare Agency"
* name
  * use = #official
  * given = "Kalle"
  * family = "Krank"
* telecom[0]
  * system = #phone
  * value = "0712345678"
  * use = #mobile
* telecom[+]
  * system = #email
  * value = "kalle.krank@example.com"
  * use = #home
* gender = #male
* birthDate = "1912-12-12"
* deceasedBoolean = false
* address
  * use = #home
  * type = #both
  * text = "Storgatan 1, 123 45 Lyckostad"
  * line = "Storgatan 1"
  * city = "Lyckostad"
  * district = "Lycko kommun"
  * state = "Lyckolän"
  * postalCode = "123 45"
  * country = "Sverige"
* maritalStatus = MARITALSTATUS#M "Married"
* contact
  * relationship = CONTACTROLE2#C "Emergency Contact"
  * name
    * family = "Kranksson"
    * given = "Kajsa"
  * telecom
    * system = #phone
    * value = "0798765432"
    * use = #mobile
  * address
    * use = #home
    * type = #both
    * text = "Storgatan 1, 123 45 Lyckostad"
    * line = "Storgatan 1"
    * city = "Lyckostad"
    * district = "Lycko kommun"
    * state = "Lyckolän"
    * postalCode = "123 45"
    * country = "Sverige"


---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/practitioner/PractitionerSECommonsLite.fsh

Profile: PractitionerSECommonsLite
Parent: SEBasePractitioner
Description: "This is a light weight Swedish Practitioner profile.
                It can be used when practitioners have been referenced by other resources, such as Observation, ServiceRequest or Appointment, to fetch a minimal set of practitioner information. E.g. for display purposes.
                It can also be used for presenting a simple list of practitioners with associated information."
* ^purpose = "To use for simple use cases where practitioner data is needed.
                Examples could be to populate a list of practitioners for selection in a UI or including a small practitioner resource in a Bundle togehter with another resource that is referencing it."
* identifier[hsaid] MS
* identifier[hsaid] ^definition = "This slice should be used if the practitioner has a HSA id.
                            HSA id is an official identifier for healthcare organizations and practitioners in Sweden."
* identifier[hsaid].use = #official
* identifier[hsaid].system ^definition = "URI for objects (e.g. organizations or practitioners) in the HSA catalog."
* identifier[hsaid].value 1..
* identifier[hsaid].value ^definition = "HSA id"

* active ^comment = "If active is not provided it is recommended to treat the resource as active."

* name only $SEBaseHumanName
* telecom.system 1.. MS
* telecom.value 1.. MS

Alias: $SEBaseHumanName = http://hl7.se/fhir/ig/base/StructureDefinition/SEBaseHumanName

Instance: minimal-practitioner
InstanceOf: PractitionerSECommonsLite
Description: "A simple example of a Swedish Practitioner resource."
Usage: #example
* meta.profile = Canonical(PractitionerSECommonsLite)
* identifier
  * use = #official
  * type = IDENTIFIER_TYPE#PRN
  * system = "urn:oid:1.2.752.29.4.19"
  * value = "SE2321000016-A123"
* active = true
* name
  * use = #official
  * family = "Johansson"
  * given = "Erik"
  * prefix = "Dr."
* telecom[0]
  * system = #phone
  * value = "+46101234567"
  * use = #work
* telecom[+]
  * system = #email
  * value = "erik.johansson@example.se"
  * use = #work

Instance: maximal-practitioner
InstanceOf: PractitionerSECommonsLite
Description: "A more thorough example of a Swedish Practitioner resource."
Usage: #example
* meta.profile = Canonical(PractitionerSECommonsLite)
* identifier
  * use = #official
  * type = IDENTIFIER_TYPE#PRN "Provider number"
  * system = "urn:oid:1.2.752.29.4.19"
  * value = "SE1234567890"
  * period.start = "2024-01-01"
* active = true
* name
  * use = #official
  * family = "Larsson"
  * given = "Erik"
  * suffix = "MD"
  * text = "Dr. Erik Larsson MD"
* telecom[0]
  * system = #phone
  * value = "+46701234567"
  * use = #work
* telecom[+]
  * system = #email
  * value = "erik.larsson@healthcare.se"
  * use = #work
* address
  * use = #work
  * type = #both
  * text = "123 Healthcare Street, 112 16 Stockholm"
  * line = "123 Healthcare Street"
  * city = "Stockholm"
  * district = "Stockholm County"
  * postalCode = "112 16"
  * country = "Sweden"
* qualification
  * identifier[0]
    * system = "urn:oid:1.2.752.116.3.1.2"
    * value = "Prescriber123"
  * identifier[+]
    * system = "urn:oid:1.2.752.116.3.1.1"
    * value = "Legitimation456"
  * code
    * coding[+] = SCT#3842006 "Chiropractor"
  * period.start = "2020-01-01"
  * issuer.display = "Swedish Medical License Board"



---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/questionnaire/examples/ExampleQuestionnaireResponseSECommonsLite.fsh

Instance: questionnaire-response-se-example
InstanceOf: QuestionnaireResponseSECommonsLite
Description: "Example questionnaire response."
Usage: #example

* identifier.system = EX
* identifier.value = "qrId_1"
* questionnaire = Canonical(questionnaire-se-example)
* status = #completed
* item[+].text = "Questionnaire group"
* item[=].linkId = "linkId_1"

* item[=].item[+].text = "Short text string, fixed item"
* item[=].item[=].linkId = "linkId_1_1"
* item[=].item[=].answer.valueString = "a short answer string"

* item[=].item[+].text = "Long text"
* item[=].item[=].linkId = "linkId_1_2"
* item[=].item[=].answer.valueString = """a long answer string.
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in nulla odio. Aenean vel congue turpis. Proin bibendum, risus vitae scelerisque ullamcorper, arcu turpis fringilla felis, et scelerisque neque diam vel lorem. Morbi sit amet laoreet turpis. Proin non ullamcorper metus. Nam facilisis ultrices tellus, non tempus nunc imperdiet vel. Nulla scelerisque mi magna, in molestie lacus faucibus quis. Sed condimentum convallis commodo. Nullam non risus eu mauris congue tristique. Duis blandit porttitor maximus. Nullam id blandit justo. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

In sed venenatis dui. Maecenas tincidunt faucibus purus id porttitor. Etiam cursus risus nec odio scelerisque molestie. Quisque eget nisl mauris. Maecenas non ipsum mauris. Ut placerat tempor tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed vestibulum ex. Maecenas a quam non nulla elementum convallis. Phasellus tortor enim, hendrerit vel felis id, ullamcorper egestas dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et ultricies mi. Donec at metus sit amet ante facilisis gravida. Suspendisse sed condimentum ipsum. Cras odio odio, condimentum eget lobortis in, rhoncus vel justo. Praesent molestie velit eget fringilla bibendum.
"""

* item[=].item[+].text = "Select list from ValueSet"
* item[=].item[=].linkId = "linkId_1_3"
* item[=].item[=].answer.valueCoding = DEMO_VS#A_CODE

* item[=].item[+].text = "Select list from inline values"
* item[=].item[=].linkId = "linkId_1_4"
* item[=].item[=].answer.valueCoding = EX_BOOL#YN

* item[=].item[+].text = "Combo-box answer"
* item[=].item[=].linkId = "linkId_1_5"
* item[=].item[=].answer.valueString = "Sometimes"


* item[=].item[+].text = "Multiple choice"
* item[=].item[=].linkId = "linkId_1_6"
* item[=].item[=].answer.valueCoding = EX_BOOL#Y
* item[=].item[=].answer.valueCoding = EX_BOOL#YN


* item[=].item[+].text = "Diagnosis"
* item[=].item[=].linkId = "linkId_1_7"
* item[=].item[=].answer.valueCoding = ICD10#123456


---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/questionnaire/examples/ExampleQuestionnaireSECommonsLite.fsh

Instance: questionnaire-se-example
InstanceOf: QuestionnaireSECommonsLite
Description: "Example questionnaire."
Usage: #example

* identifier.system = EX
* identifier.value = "q1"
* status = #active
* name = "Example questionnaire"
* title = "Example questionnaire"
* code = EX#example
* item[+].text = "Questionnaire group"
* item[=].linkId = "linkId_1"
* item[=].code = EX_ANY#groupItem
* item[=].type = #group

* item[=].item[+].text = "Short text string, fixed item"
* item[=].item[=].linkId = "linkId_1_1"
* item[=].item[=].type = #string

* item[=].item[+].text = "Long text"
* item[=].item[=].linkId = "linkId_1_2"
* item[=].item[=].type = #text

* item[=].item[+].text = "Select list from ValueSet"
* item[=].item[=].linkId = "linkId_1_3"
* item[=].item[=].type = #choice
* item[=].item[=].repeats = false
* item[=].item[=].answerValueSet = DEMO_VS

* item[=].item[+].text = "Select list from inline values"
* item[=].item[=].linkId = "linkId_1_4"
* item[=].item[=].type = #choice
* item[=].item[=].repeats = false
* item[=].item[=].answerOption[+].valueCoding = EX_BOOL#Y "Yes"
* item[=].item[=].answerOption[+].valueCoding = EX_BOOL#N "No"
* item[=].item[=].answerOption[+].valueCoding = EX_BOOL#YN "Sometimes"

* item[=].item[+].text = "Combo-box answer"
* item[=].item[=].linkId = "linkId_1_5"
* item[=].item[=].type = #open-choice
* item[=].item[=].repeats = false
* item[=].item[=].answerOption[+].valueString = "Yes"
* item[=].item[=].answerOption[+].valueString = "No"
* item[=].item[=].answerOption[+].valueString = "Sometimes"


* item[=].item[+].text = "Multiple choice"
* item[=].item[=].linkId = "linkId_1_6"
* item[=].item[=].type = #choice
* item[=].item[=].repeats = true
* item[=].item[=].answerOption[+].valueCoding = EX_BOOL#Y "Yes"
* item[=].item[=].answerOption[+].valueCoding = EX_BOOL#N "No"
* item[=].item[=].answerOption[+].valueCoding = EX_BOOL#YN "Sometimes"

* item[=].item[+].text = "Diagnosis"
* item[=].item[=].linkId = "linkId_1_7"
* item[=].item[=].type = #open-choice
* item[=].item[=].code = LOINC#29308-4
* item[=].item[=].repeats = true
* item[=].item[=].answerValueSet = Canonical(http://hl7.org/fhir/ValueSet/icd-10)



---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/questionnaire/QuestionnaireResponseSECommonsLite.fsh

Profile: QuestionnaireResponseSECommonsLite
Parent: QuestionnaireResponse
Description: "Questionnaire response with restrictions for swedish actors."
* identifier 1.. MS
* subject only Reference(PatientSECommonsLite)
* questionnaire only Canonical(QuestionnaireSECommonsLite)


---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/questionnaire/QuestionnaireSECommonsLite.fsh

Profile: QuestionnaireSECommonsLite
Parent: Questionnaire
Description: "Base questionnaire with restrictions for swedish actors."

* identifier 1.. MS
* subjectType MS
* subjectType = #Patient
* code 1.. MS // Binding for this?


---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/servicerequest/ServiceRequestSelfReferralSECommonsLite.fsh

Profile: ServiceRequestSelfReferralSECommonsLite
Parent: ServiceRequest
Description: "This profile aims to support use cases concerning nationally defined chief complaints (SWE sökorsak) in Sweden. It can also be used to support a self referral (SWE Vårdbegäran för egen räkning) in a broader perspective."

* authoredOn 1..
  * ^comment = "Set as mandatory as needed for most systems due to waiting time requirements etc."
* performer 1..1
  * ^comment = "Id of the organization (normally via a HSA id)"
  * type = "Organization"
* performer only Reference(Organization)
* reasonCode ..1
  * ^comment = "Only one reason code is supported by most vendors, hence constrained to 0..1"

* reasonCode ^slicing.discriminator.type = #pattern
* reasonCode ^slicing.discriminator.path = "coding.code"
* reasonCode ^slicing.rules = #closed
* reasonCode ^slicing.description = "Unordered, closed, by coding.code"
* reasonCode contains
            chiefComplaint 0..1 MS

* reasonCode[chiefComplaint] from http://snomed.info/sct/45991000052106?fhir_vs=refset/60001000052100
  * ^comment = """Nationally defined implicit value set for chief complaint in Sweden (SWE sökorsak)."""
  * coding 1..1
    * system 1..
    * code 1..

*       authoredOn
    and performer
    and reasonCode
    and reasonCode[chiefComplaint]
    and reasonCode[chiefComplaint].coding
    and reasonCode[chiefComplaint].coding.system
    and reasonCode[chiefComplaint].coding.code
    MS

* intent = #order

Instance: minimal-servicerequest
InstanceOf: ServiceRequest
Description: "A simple example of a Swedish ServiceRequest resource."
Usage: #example
* meta.profile = Canonical(ServiceRequestSelfReferralSECommonsLite)
* authoredOn = "2024-04-26"
* status = #draft
* performer = Reference(maximal-organization)
* subject = Reference(maximal-patient)
* reasonCode = SCT#422400008 "kräkning"
* intent = #order

Instance: maximal-self-referral
InstanceOf: ServiceRequest
Usage: #example
Description: "A maximal example of a Swedish ServiceRequest resource."
* meta.profile = Canonical(ServiceRequestSelfReferralSECommonsLite)
* identifier
  * system = "http://example.org/referral-ids"
  * value = "REF-12345"
* status = #active
* intent = #order
* category = SCT#108252007 "Laboratory procedure"
* priority = #routine
* subject = Reference(maximal-patient)
* authoredOn = "2023-05-18T10:30:00Z"
* subject = Reference(maximal-patient)
* performer = Reference(maximal-organization)
* reasonCode = SCT#422400008 "kräkning"
  * text = "Patient complains of regular vomiting"
* note.text = "Patient reports experiencing abdominal pain for the past 3 days, which has been gradually worsening. No known triggers or relieving factors. No associated symptoms such as fever, nausea, or vomiting."


---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/aliases.fsh

Alias: HSA_ORG_ID = urn:oid:1.2.752.129.2.1.4.1
Alias: HSA_ORG_ID_INERA = urn:oid:1.2.752.29.4.19
Alias: SE_ORG_ID = urn:oid:2.5.4.97
Alias: SCT = http://snomed.info/sct


Alias:  EX              = http://example.com/system
Alias:  EX_ANY          = http://example.com/CodeSystem/any
Alias:  EX_BOOL         = http://example.com/CodeSystem/soft-boolean
Alias:  DEMO_VS         = http://example.com/ValueSet/DemoSet123456789
Alias:  LOINC           = https://loinc.org
Alias:  ICD10           = http://hl7.org/fhir/sid/icd-10
Alias:  MARITALSTATUS   = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias:  CONTACTROLE2    = http://terminology.hl7.org/CodeSystem/v2-0131
Alias:  IDENTIFIER_TYPE = http://terminology.hl7.org/CodeSystem/v2-0203


---

File: repos/commonprofiles-care_SLASH_fhir/input/fsh/expansion.fsh

// this parameters instance configures the Swedish expansion of SNOMED CT when building the IG
Instance: expansion
InstanceOf: Parameters
Description: "SNOMED CT Swedish expansion parameter"
Usage: #definition
* parameter[+].name = "displayLanguage"
* parameter[=].valueCode = urn:ietf:bcp:47#se
* parameter[+].name = "system-version"
* parameter[=].valueCanonical = "http://snomed.info/sct|http://snomed.info/sct/45991000052106"


---

File: repos/commonprofiles-care_SLASH_fhir/input/pagecontent/index.md

## Introduction
This ImplementationGuide is published by a collaborative group of Swedish stakeholders of healthcare IT systems. It includes implementation profiles, extensions and value sets created by the group.
It also includes core profiles, value sets and extensions which have not been published by this group but are used in one way or another in the implementation profiles. One example is the [Swedish base profiles](http://hl7.se/fhir/ig/base/profiles.html) which have been derived to implementation profiles published in this ImplementationGuide.

### Published profiles:

|Name|FHIR resource|
|----|----|
|[PatientSeCommonsLite](StructureDefinition-PatientSECommonsLite.html)|Patient|
|[PractitionerSeCommonsLite](StructureDefinition-PractitionerSECommonsLite.html)|Practitioner|
|[OrganizationSeCommonsLite](StructureDefinition-OrganizationSECommonsLite.html)|Organization|
|ServiceRequestSeCommonsLite|ServiceRequest|

### Ongoing/upcoming work:
* Profiles and workflow patterns for appointment bookings.

### Naming standard:
* [Here](naming-standard.md) you find our naming standards for new artifacts.


## The collaborative group
The development, administration and publishing of the FHIR artifacts is carried out by a collaborative group with representation from
* Cambio
* Carasent
* Doctrin
* Chorus
* ImagineCare

We meet biweekly to work with ongoing tasks. For hands-on profiling activities we usually book separate focus meetings for those interested. The biweekly meetings also functions as a review session of the created FHIR artifacts.


## Want to collaborate?
We encourage collaboration and to sharing of knowledge in this area. If you are interested to join this initiative or collaborate in some other way,  please contact us on: info@commonprofiles.care


---

File: repos/commonprofiles-care_SLASH_fhir/input/pagecontent/naming-standard.md

# Naming standard

Names of profiles shoudl confirm to this patter:

```
<Parent resource/profile>SeCommons<Profile type>
```
i.e. the parent followed by the string literal `SeCommons` followed by the profile type, where `Profile type` could be one of:

- `Lite` a extensively constrained profile for light use cases, i.e. requiring few data elements
- `Full` a less constrained profile...

## Examples

```
OrganizationSeCommonsLite
PatientSeCommonsFull
VitalSignsSeCommonsFull
```


---

