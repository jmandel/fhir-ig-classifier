File: repos/hl7-be_SLASH_patientwill/sushi-config.yaml

# ╭─────────────────────────────────ImplementationGuide-fish.json──────────────────────────────────╮
# │  The properties below are used to create the ImplementationGuide resource.                     │
# │  For a list of supported properties, see:                                                      │
# │  https://fshschool.org/docs/sushi/configuration/#full-configuration                            │
# │  SUSHI will use id as both id and packageId in the IG unless a                                 │
# │  specific packageId is also provided in this file.                                             │
# ╰────────────────────────────────────────────────────────────────────────────────────────────────╯


id: hl7.fhir.be.patientwill
canonical: https://www.ehealth.fgov.be/standards/fhir/patientwill
url: https://www.ehealth.fgov.be/standards/fhir/patientwill
name: BePatientwill
title: "HL7 Belgium Patientwill (Patient Dossier)"
description: Belgian Patient profiles
status: draft
license: CC0-1.0
date: 2020-02-26
version: 1.0.0
releaseLabel: STU

# Although fhirVersions is 0..* in the ImplementationGuide resource
# it can be a single item OR and array here (but so far SUSHI only
# supports 4.0.1 anyway).
fhirVersion: 4.0.1

# The following two lines correspond to items that used to be in
# ig.ini but were moved to IG.definition.parameter. For
# consistency within this file, the names are represented using
# camelcase, but if authors use the formal parameter names, SUSHI
# will recognize them as well. In either case, they'll be copied
# to the IG JSON using the formal names.
copyrightYear: 2021+
# releaseLabel: STU1

# The publisher can be a single item or a list, each with a name and
# optional url and/or email. The first publisher's name will be used
# as IG.publisher.  The contact details and/or additional publishers
# will be translated into IG.contact values.
publisher:
  name: eHealth Platform
  url: http://www.ehealth.fgov.be/
  email: message-structure@ehealth.fgov.be

# ContactDetail is required by the template.
contact:
  - name: Message Structure
    telecom:
      - system: email
        value: message-structure@ehealth.fgov.be
        use: work

# The jurisdiction can be a single item or a list. The FHIR Shorthand
# code syntax can be used here.

#jurisdiction: urn:iso:std:iso:3166#US "United States of America"
jurisdiction: urn:iso:std:iso:3166#BE "Belgium" 


# The dependencies property corresponds to IG.dependsOn. The key is the
# package id and the value is the version (or dev/current). For advanced
# use cases, the value can be an object with keys for `uri` and `version`.
#dependencies:
#  hl7.fhir.us.core: 3.1.0
#  hl7.fhir.us.mcode:
#    id: mcode
#    uri: http://hl7.org/fhir/us/mcode/ImplementationGuide/hl7.fhir.us.mcode
#    version: 1.0.0

# The global property corresponds to the IG.global property, but it
# uses the type as the YAML key and the profile as its value. Since
# FHIR does not explicitly disallow more than one profile per type,
# neither do we; the value can be a single profile URL or an array
# of profile URLs.
#global:
#  Patient: http://example.org/fhir/StructureDefinition/my-patient-profile
#  Encounter: http://example.org/fhir/StructureDefinition/my-encounter-profile

# The resources property corresponds to IG.definition.resource.
# SUSHI can auto-generate all of the resource entries based on
# the FSH definitions and/or information in any user-provided
# JSON or XML resource files. If the generated entries are not
# sufficient or complete, however, the author can add entries
# here. If the reference matches a generated entry, it will
# replace the generated entry. If it doesn't match any generated
# entries, it will be added to the generated entries. The format
# follows IG.definition.resource with the following differences:
#   * use IG.definition.resource.reference.reference as the YAML key
#   * specify "omit" to omit a FSH-generated resource from the
#     resource list.
#   * groupingId can be used, but top-level groups syntax may be a
#     better option (see below).
# The following are simple examples to demonstrate what this might
# look like:
#resources:
#  Patient/my-example-patient:
#    name: My Example Patient
#    description: An example Patient
#    exampleBoolean: true
#  Patient/bad-example: omit

# Groups can control certain aspects of the IG generation.  The IG
# documentation recommends that authors use the default groups that
# are provided by the templating framework, but if authors want to
# use their own instead, they can use the mechanism below.  This will
# create IG.definition.grouping entries and associate the individual
# resource entries with the corresponding groupIds.
#groups:
#  GroupA:
#    name: Group A
#    description: The Alpha Group
#    resources:
#    - StructureDefinition/animal-patient
#    - StructureDefinition/arm-procedure
#  GroupB:
#    name: Group B
#    description: The Beta Group
#    resources:
#    - StructureDefinition/bark-control
#    - StructureDefinition/bee-sting

# The pages property corresponds to IG.definition.page. SUSHI can
# auto-generate the page list, but if the author includes pages in
# this file, it is assumed that the author will fully manage the
# pages section and SUSHI will not generate any page entries.
# The page file name is used as the key. If title is not provided,
# then the title will be generated from the file name.  If a
# generation value is not provided, it will be inferred from the
# file name extension.  Any subproperties that are valid filenames
# with supported extensions (e.g., .md/.xml) will be treated as
# sub-pages.
pages:
  index.xml:
    title: Home
  guidance.md:
    title: Guidance
  changes.xml:
#  examples.xml:
#    title: Examples Overview
#    simpleExamples.xml:
#    complexExamples.xml:

# The ImplementationGuide resource defines several other properties
# not represented above. These properties can be used as-is and
# should follow the format defined in ImplementationGuide:
# * meta
# * implicitRules
# * language
# * text
# * contained
# * extension
# * modifierExtension
# * experimental
# * useContext
# * copyright
# * packageId

# The menu property will be used to generate the input/menu.xml file.
# The menu is represented as a simple structure where the YAML key
# is the menu item name and the value is the URL. The IG publisher
# currently only supports one level deep on sub-menus.
# To provide a custom menu.xml file, do not include this property and
# include a `menu.xml` file in input/includes.
menu:
  Home: index.html
  Guidance: guidance.html
  Artifacts:
    Profiles: artifacts.html
    Extensions: artifacts.html
    Value Sets: artifacts.html
  Changes: changes.html
#  Downloads: downloads.html
  
#  History: http://hl7.org/fhir/us/example/history.html

# The parameters property represents IG.definition.parameter. Rather
# than a list of code/value pairs (as in the ImplementationGuide
# resource), the code is the YAML key. If a parameter allows repeating
# values, the value in the YAML should be a sequence/array. For a
# partial list of allowed parameters see:
# https://confluence.hl7.org/display/FHIR/Implementation+Guide+Parameters
#  excludettl: true
#  validation: [allow-any-extensions, no-broken-links]
parameters:
  show-inherited-invariants: false
  shownav: true
  apply-contact: true
  apply-jurisdiction: true
  apply-publisher: true
  apply-version: true
# The FSHOnly flag indicates if only FSH resources should be exported.
# If set to true, no IG related content will be generated.
# The default value for this property is false.
FSHOnly: false

# When set to true, the "short" and "definition" field on the root element of an Extension will
# be set to the "Title" and "Description" of that Extension. Default is true.
#applyExtensionMetadataToRoot: false

dependencies:
  hl7.fhir.be.core: current

    

---

// File: input/pagecontent/guidance.md



---

// File: input/pagecontent/spec.md

### Specifications
These are the project specifications:

---

// File: input/fsh/aliases.fsh

Alias: $be-causativeagent = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-causativeagent
Alias: $be-noallergy = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-noallergy
Alias: $nihdi-physiotherapy-pathologysituationcode = http://www.mycarenet.be/fhir/CodeSystem/nihdi-physiotherapy-pathologysituationcode
Alias: $v3-NullFlavor = http://terminology.hl7.org/CodeSystem/v3-NullFlavor
Alias: $v3-ActReason = http://terminology.hl7.org/CodeSystem/v3-ActReason
Alias: $sct = http://snomed.info/sct
Alias: $allergyintolerance-clinical = http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical
Alias: $allergyintolerance-verification = http://terminology.hl7.org/CodeSystem/allergyintolerance-verification
Alias: $v2-0203 = http://terminology.hl7.org/CodeSystem/v2-0203
Alias: $cd-hcparty = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-hcparty
Alias: $v3-DataOperation = http://terminology.hl7.org/CodeSystem/v3-DataOperation
Alias: $provenance-participant-type = http://terminology.hl7.org/CodeSystem/provenance-participant-type
Alias: $loinc = http://loinc.org
Alias: $communication-category = http://terminology.hl7.org/CodeSystem/communication-category
Alias: $be-cs-diarytopic = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/be-cs-diarytopic
Alias: $cvx = http://hl7.org/fhir/sid/cvx
Alias: $immunization-recommendation-status = http://terminology.hl7.org/CodeSystem/immunization-recommendation-status
Alias: $observation-category = http://terminology.hl7.org/CodeSystem/observation-category
Alias: $my-own-custom-codes = http://my-own-custom-codes
Alias: $cd-fed-country = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-fed-country
Alias: $v3-MaritalStatus = http://terminology.hl7.org/CodeSystem/v3-MaritalStatus
Alias: $cd-civilstate = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-civilstate
Alias: $v2-0131 = http://terminology.hl7.org/CodeSystem/v2-0131
Alias: $cd-contact-person = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/cd-contact-person
Alias: $consentscope = http://terminology.hl7.org/CodeSystem/consentscope
Alias: $be-cs-patientwill-category = https://www.ehealth.fgov.be/standards/fhir/patientwill/CodeSystem/be-cs-patientwill-category
Alias: $be-cs-patientwill-code = https://www.ehealth.fgov.be/standards/fhir/patientwill/CodeSystem/be-cs-patientwill-code
Alias: $condition-clinical = http://terminology.hl7.org/CodeSystem/condition-clinical
Alias: $condition-ver-status = http://terminology.hl7.org/CodeSystem/condition-ver-status
Alias: $be-cs-problem-category = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/be-cs-problem-category
Alias: $be-cs-bodysite = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/be-cs-bodysite
Alias: $be-cs-score-category = https://www.ehealth.fgov.be/standards/fhir/core/CodeSystem/be-cs-score-category
Alias: $v3-ObservationInterpretation = http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation
Alias: $m49.htm = http://unstats.un.org/unsd/methods/m49/m49.htm
Alias: $vitalsigns = http://hl7.org/fhir/StructureDefinition/vitalsigns
Alias: $language = http://hl7.org/fhir/StructureDefinition/language
Alias: $iso21090-ADXP-streetName = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-streetName
Alias: $iso21090-ADXP-houseNumber = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-houseNumber
Alias: $iso21090-ADXP-postBox = http://hl7.org/fhir/StructureDefinition/iso21090-ADXP-postBox
Alias: $patient-nationality = http://hl7.org/fhir/StructureDefinition/patient-nationality
Alias: $patient-birthPlace = http://hl7.org/fhir/StructureDefinition/patient-birthPlace
Alias: $patient-birthTime = http://hl7.org/fhir/StructureDefinition/patient-birthTime
Alias: $be-riskmanifestation = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-riskmanifestation
Alias: $be-exposureroute = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-exposureroute
Alias: $be-vs-diarytopic = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-vs-diarytopic
Alias: $be-civilstate = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-civilstate
Alias: $be-contactperson = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-contactperson
Alias: $be-vs-score = https://www.ehealth.fgov.be/standards/fhir/core/ValueSet/be-vs-score

---

// File: input/fsh/codesystems/BeCSPAtientWillCategory.fsh

CodeSystem: BeCSPatientWillCategory
Id: be-cs-patientwill-category
Title: "Patient Will Category CodeSystem"
Description: "Patient Will Category CodeSystem"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^jurisdiction.coding[0] = $m49.htm#056
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^content = #complete
* #negativedeclaration
* #euthanasia
* #organdonation
* #lastwill 
* #bodydonation 
* #patientwill 
* #resuscitation 
* #hospitalisation 

//* ^count = 1
//* #advanced-care-directive "Advanced Care Directive" "General directives expressed voluntarily by the patient"
//* #advanced-care-directive ^designation[0].language = #fr-BE
//* #advanced-care-directive ^designation[=].value = "Volontés diverses"
//* #advanced-care-directive ^designation[+].language = #nl-BE
//* #advanced-care-directive ^designation[=].value = "Verschillende wensen"
//* #research "Research" "Consent to participate in research protocols and / or share results"
//* #research ^designation[0].language = #fr-BE
//* #research ^designation[=].value = "Recherche"
//* #research ^designation[+].language = #nl-BE
//* #research ^designation[=].value = "Onderzoek"
//* #treatment "Treatment" "Specific treatments in the context of resuscitation and / or during hospitalization"
//* #treatment ^designation[0].language = #fr-BE
//* #treatment ^designation[=].value = "Traitement"
//* #treatment ^designation[+].language = #nl-BE
//* #treatment ^designation[=].value = "Behandeling"

---

// File: input/fsh/codesystems/BeCSPAtientWillCode.fsh

CodeSystem: BeCSPatientWillCode
Id: be-cs-patientwill-code
Title: "Patient Will Directive CodeSystem"
Description: "Patient Will Directive CodeSystem. Codes as defined by the NIHDI."
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^jurisdiction.coding[0] = $m49.htm#056
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* ^content = #complete
//* #euthanasia-request "Euthanasia Request" "Euthanasia request"
//* #intubation-refusal "Intubation Refusal" "Intubation refusal"
//* #organ-donation-consent "Organ Donation Consent" "Organ donation consent"
//* #vaccination-refusal "Vaccination Refusal" "Vaccination refusal"
//* #omission-medical-data "Omission Of Medical Data" "Omission of medical data (cfr annexes)"
//* #blood-transfusion-refusal "Blood Transfusion Refusal" "Refusal of blood transfusion"
//* #clinical-participation-consent "clinical Participation Consent" "Consent to participate in clinical trials"
//* #datareuse-clinicalresearch "Data reuse for clinical research consent" "Consent for data reuse for clinical research"
//* #datareuse-clinicaltrials "Data reuse for clinical trials consent" "Consent for data reuse for clinical trials"
//* #no-therapeutic-limitations "No therapeutic limitations" "No therapeutic limitations (Known as 'dnr0' in KMEHR)"
//* #do-not-resuscitate "Do not resuscitate" "Do not resuscitate (Known as 'dnr1' in KMEHR)"
//* #do-not-resuscitate-or-extend-therapy "Do not resuscitate or extend therapy" "Do not resuscitate or extend therapy (Known as 'dnr2' in KMEHR)"
//* #do-not-resuscitate-and-progressively-reduce-the-therapy "Do not resuscitate and progressively reduce the therapy" "Do not resuscitate and progressively reduce the therapy (Known as 'dnr3' in KMEHR)"
//* #no-hospitalization "No hospitalization" "No hospitalization (Known as 'hos1' in KMEHR')"
//* #hospitalization-only-in-specific-situations "Hospitalization only in specific situations (cfr annexes)" "Hospitalization only in specific situations (cfr annexes)(Known as 'hos2' in KMEHR)"
* #bloodtransfusionrefusal
* #clinicaltrialparticipationconsent
* #datareuseforclinicalresearchconsent
* #datareuseforclinicaltrialsconsent
* #intubationrefusal
* #omissionofmedicaldata
* #vaccinationrefusal
* #dnr0
* #dnr1
* #dnr2
* #dnr3
* #hos0
* #hos2
* #onlycomfort
* #onlytestsforcomfort
* #noantibiotics
* #noartificialhydratationfeeding
* #nochemo
* #noradiation
* #nooperation
* #noventilation
* #nodialysis
* #noresuscitation
* #nointensivecare
* #nohospitalisation
* #onlytreatmentfororgandonation
* #other
* #euthanasiarequest
* #euthanasiarefusal
* #organdonationfortransplant
* #bodymaterialfortransplant
* #bodymaterialformedication
* #bodymaterialforresearch
* #bodydonationforscience
* #burialbody
* #burialashescemetry
* #columbariumashes
* #scattergardenashes
* #scatterashesbelgiansea
* #scatterashesother
* #burialashesother
* #storeashesother
* #norituals
* #catholic
* #protestant
* #anglican
* #orthodox
* #jewish
* #islamic
* #secular
* #neutral

---

// File: input/fsh/instances/patientwill1.fsh

Instance: patientwill1
InstanceOf: BePatientWill
Usage: #example
* status = #active
* scope = $sct#385432009
* category = $be-cs-patientwill-category#resuscitation "Resuscitation"
* patient.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin"
* patient.identifier.value = "123456789"
* patient.display = "Jane Fhirwoman"
* dateTime = "2015-11-18"
* extension[recorder].valueReference.identifier.system = "https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/nihdi"
* extension[recorder].valueReference.identifier.value = "11530231003"
* provision.period.start = "2020-10-06"
* provision.code = $be-cs-patientwill-code#dnr1 "Do not resuscitate"
* provision.code.text = "No resuscitation"

---

// File: input/fsh/logicals/BeModelPatientWill.fsh

Logical: BeModelPatientWill
Description: "Logical model of the patient will"
* recordedDate 1..1 dateTime "Date of encoding of the information"
* identifier 0..1 Identifier "Unique identifier"
* patient 1..1 Identifier "Is the patient's unique identifier. The unique identifier must be the patient's national patient registry number (NISS) or BIS number."
* recorder 1..1 Identifier "Is the unique identifier of either the healthcare professional responsible for the encrypted content, or the patient encoding his or her own wishes, or a representative of the patient encoding the patient's wishes. The unique identifier must be the National Register Number (NISS) or BIS number."
//* Performer 0 .. 1 Identifier  "Is the unique identifier of the health professional making the statement. The unique identifier should be the National Registration Number (NISS) or BIS number of the practitioner."
* representative 0..* BackboneElement "The representative is the person who acts on behalf of the applicant (patient) when he is no longer able to express his wishes. For example: the confidant is the person who guides the patient through his steps and assists him during medical appointments. He guarantees the follow-up of the wishes of the patient when he can no longer express his wishes clearly."
* representative.role 0..1 CodeableConcept "Role of the representative (e.g. confidant, administrator, guardian...)"
* representative.relationship 0..1  CodeableConcept "Type of relationship of the representative with the patient (e.g. father, mother, son, neighbour...)"
//* witness 0..* Identifier "These are the witnesses. They are represented by their unique identification number. The unique identification number must be the national registration number (INSS) or the witness number. For example: in the context of the prior declaration regarding euthanasia, 2 witnesses are required."
* source[x] 0..1 Binary or url "Enables you to attach a document"
* category 1..1 CodeableConcept "Type of patient wishes."
* willCode 1..1 BackboneElement "patient's wishes" "The patient's wishes (euthanasia, no vaccination, no intubation...)"
* willCode.status 0..1 CodeableConcept "Indicates the status of the patient's will (draft, proposes, active, ...)"
* willCode.period 0..1 BackboneElement "Validity of the will"
* willCode.period.startperiod 0..1 dateTime "Date the will comes into effect"
* willCode.period.endperiod 0..1 dateTime "Date the will expires"
* note 0..1 string "Comments"

---

// File: input/fsh/profiles/BePatientWill.fsh

Profile: BePatientWill
Parent: Consent
Id: be-patientwill
Title: "BePatientWill"
Description: "Belgian federal profile for a patient will ONLY in the context of the patient will in the context of limitations to treatment, DNR etc. Initially based on the functional description of the NIHDI. This profile will in the future be also used to record agreement to participate in clinical trials etc. Any usecase around informed consent is out of scope for this profile."
* ^version = "1.0.0"
* ^status = #active
* ^date = "2021-01-10T10:59:49+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^jurisdiction.coding[0] = $m49.htm#056
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* extension contains BeExtSimpleNote named note 0..1 MS and
    BeExtRecorder named recorder 1..1 MS
* identifier 0..* MS
* status 1..1 MS
* status ^short = "This is the status of the patient will expressed under provision.code ."
* scope from BeVSPatientWillScope (extensible)
* scope ^short = "Scope is not explicit in the Belgian context" 
* category 1..* MS
* category from BeVSPatientWillCategory (required)
* patient 1.. MS
* patient only Reference(BePatient)
* patient ^short = "The subject of the patient will."
* patient ^definition = "The subject of the patient will."
* dateTime 1.. MS
* dateTime ^short = "The dateTime when the patient will has been recorded"
* dateTime ^definition = "The date and/or time when the patient will has been recorded"
* dateTime ^comment = "This is not the time the patient expressed their will, but the time that this patient will was recorded."
* performer 0.. MS
* performer only Reference(BeOrganization or BePatient or BePractitioner or BePractitionerRole or RelatedPerson)
* performer ^short = "Commonly, the patient will is expressed by the patient, but for some cases it may be some other person. See representative in the LM"
* source[x] MS
* sourceReference only Reference(DocumentReference)
* source[x] ^short = "The evidence used to support the patient will."
* source[x] ^definition = "Supporting evidence for the patient will (e.g. a paper signed by the patient to refuse a specific treatment)"
* source[x] ^comment = "The source can be contained inline, or using an URL (Attachment). It is at the discretion of the practitioner whether to include this when available. A consumer SHALL NOT ignore it when available."
* policyRule 0.. 
* provision 1.. MS
* provision.period 1.. MS
* provision.securityLabel ..0
* provision.purpose ..0
* provision.class ..0
* provision.code 1..1 MS
* provision.code from BeVSPatientWillCode (required)
* provision.code ^short = "The actual directive in the will"
* provision.code ^definition = "The detailed patient will directive (e.g. no hospitalization, bloodtransfusion refusal) (Valueset will be delivered by a working group of NIHDI)"
* provision.data ..0

---

// File: input/fsh/valuesets/BeVSPatientWillCategory.fsh

ValueSet: BeVSPatientWillCategory
Id: be-vs-patientwill-category
Title: "Patient Will Category"
Description: "Patient will category Value Set"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2020-10-01T11:01:09+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^jurisdiction.coding[0] = $m49.htm#056
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* include codes from system BeCSPatientWillCategory

---

// File: input/fsh/valuesets/BeVSPatientWillCode.fsh

ValueSet: BeVSPatientWillCode
Id: be-vs-patientwill-code
Title: "Patient Will code Value Set"
Description: "Patient Will code Value Set"
* ^version = "1.0.0"
* ^status = #active
* ^date = "2020-10-01T11:01:09+00:00"
* ^publisher = "eHealth Platform"
* ^contact[0].name = "eHealth Platform"
* ^contact[=].telecom.system = #url
* ^contact[=].telecom.value = "https://www.ehealth.fgov.be"
* ^contact[+].name = "Message structure"
* ^contact[=].telecom.system = #email
* ^contact[=].telecom.value = "message-structure@ehealth.fgov.be"
* ^jurisdiction.coding[0] = $m49.htm#056
* ^jurisdiction.coding[+] = urn:iso:std:iso:3166#BE
* include codes from system BeCSPatientWillCode

---

// File: input/fsh/valuesets/BeVSPatientWillScope.fsh

ValueSet: BeVSPatientWillScope
Id: be-vs-patientwill-scope
Title: "BeVSPatientWillScope"
Description: "Patient Will scope Value Set"
* ^version = "1.0.0"
* ^status = #active
* include $sct#385432009

---

// File: input/data/features.yml

#---


---

